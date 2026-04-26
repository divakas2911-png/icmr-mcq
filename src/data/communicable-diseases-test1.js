const questions = [
  {
    id: 1,
    question: "According to WHO Global TB Report 2023, India accounts for what proportion of the global TB burden?",
    options: [
      "Approximately 15% of global TB cases",
      "Approximately 27% of global TB cases",
      "Approximately 40% of global TB cases",
      "Approximately 10% of global TB cases"
    ],
    answer: 1,
    explanation: "India accounts for approximately 27% of the global TB burden, making it the country with the highest number of TB cases in the world. India is followed by Indonesia and China. This disproportionate burden makes India central to global TB elimination efforts. The WHO End TB Strategy aims to reduce TB incidence by 90% and TB deaths by 95% by 2030 compared to 2015 baseline. India's National Strategic Plan for TB Elimination aims to eliminate TB by 2025 - five years ahead of the global target."
  },
  {
    id: 2,
    question: "The primary mode of transmission of Mycobacterium tuberculosis from an infectious TB patient is:",
    options: [
      "Fecal-oral route through contaminated food and water",
      "Airborne transmission via droplet nuclei (particles <5 micrometers) produced by coughing, sneezing, or speaking",
      "Direct contact with skin lesions of TB patients",
      "Vector-borne transmission through mosquitoes"
    ],
    answer: 1,
    explanation: "Tuberculosis is transmitted primarily through the airborne route via droplet nuclei - tiny infectious particles less than 5 micrometers in diameter produced when an infectious person coughs, sneezes, speaks, or sings. These particles remain suspended in air for prolonged periods (hours) and can be inhaled by susceptible individuals. Larger respiratory droplets (>5 micrometers) settle quickly and are less important for TB transmission. This airborne nature makes TB transmission possible even without direct contact with the index case. Understanding this mode of transmission is critical for infection control measures - ventilation, UV germicidal irradiation, and respiratory protection."
  },
  {
    id: 3,
    question: "The Nikshay portal is the web-based information system used in India's National TB Elimination Programme (NTEP). What is its PRIMARY function?",
    options: [
      "Online pharmacy for ordering anti-TB drugs",
      "Mandatory notification and case-based tracking system for all TB patients in India",
      "Training platform for healthcare workers on DOTS strategy",
      "Laboratory information management system for drug sensitivity testing only"
    ],
    answer: 1,
    explanation: "Nikshay (meaning 'a place where TB is contained' in Sanskrit) is India's case-based web-based information system for TB under NTEP. It serves as the mandatory TB notification platform where all TB patients (diagnosed in both public and private sectors) must be registered. Functions include: case registration and notification, patient tracking throughout treatment, Nikshay Poshan Yojana (direct benefit transfer of Rs 500/month nutritional support), monitoring treatment outcomes, generating surveillance data, and case-based death audits. TB notification became legally mandatory in India in 2012, and Nikshay is the instrument for this notification. All healthcare providers (government and private) must notify TB cases."
  },
  {
    id: 4,
    question: "In the context of TB epidemiology, 'Case Detection Rate' (CDR) is defined as:",
    options: [
      "Proportion of notified TB cases that successfully complete treatment",
      "Number of TB cases per 100,000 population per year",
      "Proportion of estimated incident TB cases that are notified/diagnosed in a given year",
      "Proportion of TB contacts screened who test positive for LTBI"
    ],
    answer: 2,
    explanation: "Case Detection Rate (CDR) = (Number of notified/detected TB cases / Estimated incident TB cases) x 100. It measures the program's ability to find TB cases in the community. A CDR of 100% would mean all estimated incident cases are being detected and notified. India's CDR has improved significantly over years but gaps persist, especially in the private sector. CDR is distinct from Treatment Success Rate (TSR = proportion of notified cases achieving treatment success). Both CDR and TSR are key performance indicators tracked by WHO and NTEP. Low CDR indicates undetected/unreported TB in the community - a key driver of continued transmission."
  },
  {
    id: 5,
    question: "MDR-TB is defined as resistance to Isoniazid AND Rifampicin. XDR-TB per the revised 2021 WHO definition is:",
    options: [
      "MDR-TB plus resistance to any fluoroquinolone AND any second-line injectable (amikacin, kanamycin, or capreomycin)",
      "MDR-TB plus resistance to any fluoroquinolone AND at least one of bedaquiline or linezolid",
      "Resistance to all first-line and second-line anti-TB drugs",
      "Rifampicin-resistant TB with additional resistance to any injectable drug"
    ],
    answer: 1,
    explanation: "The WHO revised the definition of XDR-TB in 2021: XDR-TB is now defined as MDR/RR-TB plus resistance to any fluoroquinolone (levofloxacin or moxifloxacin) AND at least one of bedaquiline or linezolid - the backbone drugs of the new all-oral BPaL (bedaquiline, pretomanid, linezolid) regimen. The previous 2006 definition (MDR + fluoroquinolone resistance + any second-line injectable) was revised because injectables (amikacin, kanamycin, capreomycin) are no longer recommended in TB treatment. Pre-XDR-TB (previously called extensively resistant TB) is MDR/RR-TB plus any fluoroquinolone resistance. These definitions guide treatment protocol selection."
  },
  {
    id: 6,
    question: "The DOTS strategy, which forms the backbone of NTEP, consists of five components. Which of the following is NOT a component of the DOTS strategy?",
    options: [
      "Government commitment to sustained TB control activities",
      "Case detection by quality-assured bacteriology",
      "Mandatory hospitalization of all sputum smear-positive TB patients",
      "Standardized short-course chemotherapy with direct observation of treatment"
    ],
    answer: 2,
    explanation: "The five components of DOTS (Directly Observed Treatment, Short-course) strategy are: (1) Government commitment to sustained TB control with increased and sustained financing; (2) Case detection through quality-assured bacteriology (sputum smear microscopy); (3) Standardized short-course chemotherapy for all TB cases under proper case management conditions including direct observation of treatment; (4) Uninterrupted supply of quality-assured anti-TB drugs; (5) Standardized recording and reporting system allowing assessment of treatment results. Mandatory hospitalization is NOT a DOTS component - patients are treated in the community with ambulatory care under direct observation, which was a paradigm shift from the old sanatorium-based approach. NTEP evolved from RNTCP to implement DOTS at scale."
  },
  {
    id: 7,
    question: "GeneXpert (Xpert MTB/RIF) assay's role in TB surveillance and public health is BEST described as:",
    options: [
      "A confirmatory culture test replacing Lowenstein-Jensen medium culture",
      "A rapid point-of-care molecular test that simultaneously detects TB and rifampicin resistance, enabling early identification of drug-resistant TB for surveillance",
      "A serological test measuring TB antibody titers for population seroprevalence surveys",
      "An imaging technique for early detection of TB lesions in the lungs"
    ],
    answer: 1,
    explanation: "GeneXpert (Xpert MTB/RIF) is a cartridge-based nucleic acid amplification test (CBNAAT) that detects Mycobacterium tuberculosis complex DNA and rifampicin resistance-conferring mutations in the rpoB gene simultaneously within approximately 2 hours. In TB surveillance and public health, it: enables rapid detection of MDR-TB for surveillance systems; provides real-time data on RR-TB burden; decentralizes TB diagnosis to peripheral levels; reduces time to treatment initiation for DR-TB; and improves case detection in high-risk groups (HIV-positive, contacts, paediatric TB). NTEP uses GeneXpert as the preferred initial diagnostic test for all TB suspects. It does not replace liquid culture (MGIT) which remains the gold standard with higher sensitivity."
  },
  {
    id: 8,
    question: "In TB epidemiology, the 'Annual Risk of TB Infection' (ARTI) is measured using tuberculin surveys. What does an ARTI of 1% indicate in a population?",
    options: [
      "1% of the population has active TB disease",
      "1 in every 100 uninfected persons in the population will become newly infected with TB in one year",
      "1% of TB patients will develop MDR-TB",
      "1% of TB-infected individuals will progress to active TB disease per year"
    ],
    answer: 1,
    explanation: "Annual Risk of TB Infection (ARTI) = the probability (expressed as a percentage) that an uninfected individual in a given population will become infected with Mycobacterium tuberculosis during one year. An ARTI of 1% means 1 out of every 100 uninfected persons will acquire new TB infection per year. ARTI is estimated from tuberculin survey data using mathematical models. It is a measure of the force of infection in the community and reflects the intensity of TB transmission. ARTI correlates with smear-positive TB case rates (approximately 50-60 smear-positive cases per 100,000 population for each 1% ARTI). Declining ARTI indicates reduced TB transmission - a key epidemiological outcome measure."
  },
  {
    id: 9,
    question: "The treatment success rate for new drug-sensitive TB cases under NTEP is a key performance indicator. The WHO End TB Strategy milestone for treatment success rate by 2025 is:",
    options: [
      "Greater than 70% treatment success rate",
      "Greater than 80% treatment success rate",
      "At least 90% treatment success rate",
      "100% treatment success rate"
    ],
    answer: 2,
    explanation: "The WHO End TB Strategy sets a milestone of at least 90% treatment success rate for new and relapse TB cases by 2025. Treatment success is defined as the sum of 'cured' (smear-negative at end of treatment) and 'treatment completed' (completed treatment without evidence of failure but without smear results). India's NTEP reports treatment success rates around 87-90% for new drug-sensitive TB cases, which is approaching the target. Treatment outcomes are categorized as: treatment success, died, treatment failed, lost to follow-up, and not evaluated. Monitoring treatment outcomes by cohort analysis is a core DOTS component and essential for program evaluation."
  },
  {
    id: 10,
    question: "BCG vaccine efficacy data from Indian studies differs from that in other countries. The primary reason for the widely variable BCG efficacy (ranging from 0-80%) across different geographic settings is:",
    options: [
      "Different BCG strains used in different countries produce completely different immunity",
      "Varying prior exposure to environmental non-tuberculous mycobacteria which may mask BCG-induced immunity or provide competing protection",
      "BCG vaccine is heat-sensitive and loses potency during transport in tropical countries",
      "BCG efficacy varies only based on the nutritional status of the vaccinated population"
    ],
    answer: 1,
    explanation: "The most widely accepted explanation for geographic variation in BCG efficacy is the 'masking hypothesis' related to environmental non-tuberculous mycobacteria (NTM): in tropical regions (like India) with high NTM exposure, natural infection with NTM provides baseline immunity that 'masks' the additional protection conferred by BCG. In high-latitude countries with low NTM exposure, BCG provides its full incremental protection (up to 80%). Alternatively, NTM may 'block' BCG from establishing infection and inducing immunity. The UK MRC trial (Madanapalle, India) showed near-zero BCG efficacy, while the UK Prophylactic trial showed ~80% efficacy. BCG consistently shows high efficacy (>80%) against miliary TB and TB meningitis in children regardless of geography."
  },
  {
    id: 11,
    question: "In TB surveillance, a patient who was previously treated for TB and is now diagnosed bacteriologically is categorized under NTEP as:",
    options: [
      "New case",
      "Previously treated case (which includes relapse, treatment after failure, and treatment after loss to follow-up)",
      "MDR-TB case regardless of drug sensitivity testing results",
      "Chronic case requiring specialized treatment center referral"
    ],
    answer: 1,
    explanation: "NTEP/WHO case definitions for TB registration: New cases - never been treated for TB or treated for less than 1 month. Previously treated cases - have received 1 month or more of anti-TB drugs previously (regardless of outcome): (a) Relapse - previously treated, declared cured/completed, now bacteriologically confirmed TB again; (b) Treatment after failure - previously treated, treatment failed (bacteriologically positive at 5+ months); (c) Treatment after loss to follow-up - previously treated, declared LTFU, now bacteriologically positive; (d) Other previously treated - unknown or undocumented prior treatment history. This classification guides treatment regimen selection and drug resistance testing requirements (all previously treated cases require DST)."
  },
  {
    id: 12,
    question: "ICMR has conducted landmark TB epidemiology studies in India. The Tuberculosis Research Centre (TRC), Chennai (now ICMR-NIRT) is best known for establishing which foundational principle in TB control?",
    options: [
      "Demonstrating that BCG vaccine provides 100% protection against all forms of TB in Indian children",
      "Establishing the efficacy of short-course chemotherapy (6-month regimen) for TB treatment, which became the foundation for DOTS strategy globally",
      "Proving that surgical resection is the most effective treatment for drug-resistant TB",
      "Developing the GeneXpert diagnostic test for TB detection"
    ],
    answer: 1,
    explanation: "The Tuberculosis Research Centre (TRC) in Chennai, now ICMR-National Institute for Research in Tuberculosis (ICMR-NIRT), conducted pivotal controlled clinical trials in the 1970s-80s that established the efficacy of 6-month short-course chemotherapy (2HRZE/4HR) for pulmonary TB. These seminal studies demonstrated that 6-month regimens were as effective as the previous 12-18 month standard regimens, with equivalent cure rates and relapse rates. This work formed the scientific basis for the DOTS strategy adopted by WHO globally. TRC also conducted important studies on intermittent dosing regimens, domiciliary versus sanatorium treatment (showing home treatment was equally effective), and BCG efficacy (the Chingleput trial)."
  },
  {
    id: 13,
    question: "HIV sentinel surveillance in India is conducted through the NACO network. The primary objective of sentinel surveillance in HIV is:",
    options: [
      "To diagnose and treat all HIV-positive individuals identified at sentinel sites",
      "To estimate HIV prevalence trends in defined populations over time using standardized methodology at fixed sites",
      "To screen all residents of high-prevalence districts for HIV",
      "To identify all HIV-positive individuals for contact tracing"
    ],
    answer: 1,
    explanation: "HIV Sentinel Surveillance (HSS) in India is a cross-sectional, repeated survey conducted annually or biennially at fixed sentinel sites (sentinel surveillance points) among defined population groups. Its primary objective is to monitor HIV prevalence TRENDS over time in specific sub-populations - not to find individual cases. HSS operates among: Antenatal Clinic (ANC) attendees (proxy for general adult female population), Female Sex Workers (FSW), Men who have Sex with Men (MSM), Injecting Drug Users (IDU), Truckers, and Migrants. Unlinked anonymous testing (UAT) methodology is used - blood samples are tested anonymously without linking results to individuals. Data from HSS feeds into PLHIV estimation models (Spectrum/EPP) used to estimate national burden."
  },
  {
    id: 14,
    question: "NACP (National AIDS Control Programme) in India has been implemented in phases. The primary focus of NACP Phase IV (2012-2017) was:",
    options: [
      "Establishing the first HIV blood screening centers and awareness campaigns",
      "Scaling up ART services and decentralizing treatment to district hospitals",
      "Accelerating the reversal of the epidemic, integrating HIV with TB services, and achieving zero new infections, zero discrimination, and zero AIDS deaths",
      "Achieving 100% PMTCT coverage through universal maternal HIV testing"
    ],
    answer: 2,
    explanation: "NACP phases in India: Phase I (1992-1999): Establishing infrastructure, awareness, blood safety. Phase II (1999-2006): Prevention focus, targeted interventions for high-risk groups, VCTC establishment. Phase III (2007-2012): Universal access to prevention, care, support and treatment; halting and reversing the epidemic; scaling up ART. Phase IV (2012-2017): Goals of zero new infections, zero discrimination, and zero AIDS deaths; accelerated epidemic reversal; mainstreaming HIV with health systems; integration with TB and reproductive health services; focus on key populations; strengthening community systems. Phase V continues to work toward UNAIDS 95-95-95 targets. NACP is implemented by National AIDS Control Organisation (NACO) under Ministry of Health and Family Welfare."
  },
  {
    id: 15,
    question: "The UNAIDS 95-95-95 targets for HIV by 2025 specify that:",
    options: [
      "95% of people living with HIV know their status; 95% of those diagnosed are on ART; 95% of those on ART achieve viral suppression",
      "95% reduction in new HIV infections; 95% reduction in AIDS deaths; 95% of PLHIV on treatment",
      "95% HIV testing coverage; 95% ART initiation rate; 95% treatment completion rate",
      "95% condom use among key populations; 95% PMTCT coverage; 95% viral suppression among PLHIV"
    ],
    answer: 0,
    explanation: "The UNAIDS 95-95-95 targets (replacing the 90-90-90 targets) for 2025 specify: (1) 95% of all people living with HIV (PLHIV) know their HIV status (diagnosis); (2) 95% of all people diagnosed with HIV receive sustained antiretroviral therapy (ART linkage and retention); (3) 95% of all people receiving ART have viral suppression (viral load <1000 copies/mL). If all three targets are met, approximately 86% of all PLHIV will be virally suppressed, which would substantially reduce new HIV transmissions. This cascade of care framework (HIV treatment cascade or continuum of care) is the standard tool for monitoring HIV program performance at national and sub-national levels."
  },
  {
    id: 16,
    question: "In India's HIV testing algorithm for surveillance purposes, the national testing strategy uses three tests in sequence. Which configuration is used for diagnosis (not screening)?",
    options: [
      "Single ELISA test - positive result confirms HIV infection",
      "Two rapid antibody tests using different antigens/formats; if discordant, a third tiebreaker test is used",
      "Western blot as the only confirmatory test after any reactive screening test",
      "PCR viral load as the primary diagnostic test for all suspected HIV cases"
    ],
    answer: 1,
    explanation: "India's National HIV Testing Algorithm (NHTA) uses three sequential tests (Strategy III) for diagnosis: Test 1 (A1): Highest sensitivity rapid test - if non-reactive, report HIV negative. If reactive, proceed to Test 2 (A2): Different antigen/format rapid test with higher specificity - if both A1 and A2 reactive, diagnose HIV positive. If A1 reactive but A2 non-reactive (discordant), proceed to Test 3 (A3): Tiebreaker test using a third different format - A3 reactive = HIV positive; A3 non-reactive = report as inconclusive, retest after 14 days. This strategy replaced Western blot as the confirmatory test because it is more practical, less expensive, and equally reliable. ICTC/FICTC networks implement this algorithm. Unlinked anonymous testing (three tests) is used for sentinel surveillance."
  },
  {
    id: 17,
    question: "NACO uses the Spectrum/EPP (Estimation and Projection Package) model to estimate PLHIV in India. The primary data input for estimating HIV prevalence among the general population comes from:",
    options: [
      "Census data on AIDS deaths reported by hospitals",
      "HIV sentinel surveillance data from antenatal clinic (ANC) attendees used as a proxy for general adult female population prevalence",
      "National Family Health Survey (NFHS) household HIV testing data",
      "Integrated Counselling and Testing Centre (ICTC) test positivity rates"
    ],
    answer: 1,
    explanation: "India uses the UNAIDS Spectrum/EPP model for PLHIV estimation. The primary data inputs include: (1) HIV sentinel surveillance data from ANC attendees - used as proxy for HIV prevalence in the sexually active adult female general population because pregnant women are considered representative of sexually active women; (2) HIV sentinel surveillance data from high-risk groups (FSW, MSM, IDU, truckers) for concentrated epidemic segments; (3) Population size estimates for high-risk groups; (4) Treatment data for back-calculation. ANC-based surveillance has limitations (only women, selection bias) but is the global standard proxy. NFHS-5 (2019-21) included HIV testing for the first time but is a separate survey, not the primary input to Spectrum. ICTC positivity rates are biased by healthcare-seeking behavior."
  },
  {
    id: 18,
    question: "Key populations (KP) in the context of India's HIV epidemic include which groups defined by NACO?",
    options: [
      "Only Female Sex Workers (FSW) and their clients",
      "Female Sex Workers (FSW), Men who have Sex with Men (MSM), Injecting Drug Users (IDU), Hijra/Transgender persons, and Migrants/Truckers",
      "All adults in high HIV prevalence states regardless of behavior",
      "Only people living with HIV and their sexual partners"
    ],
    answer: 1,
    explanation: "NACO defines key populations (also called High Risk Groups - HRG) in India's HIV epidemic as: Female Sex Workers (FSW), Men who have Sex with Men (MSM), Injecting Drug Users (IDU), Hijra/Transgender persons, Migrants (long-distance truckers, migrant workers). These groups have disproportionately higher HIV prevalence due to behavioral and structural risk factors and are priority targets for Targeted Interventions (TI). India's HIV epidemic is considered a 'concentrated epidemic' (prevalence >5% in key populations but <1% in general population) in most states, except states like Manipur (IDU-driven) and some southern states historically. TI programs under NACO provide prevention services specifically to these populations."
  },
  {
    id: 19,
    question: "HIV prevalence trends in India show that the epidemic has been concentrated and declining overall. Which state in India historically had the highest HIV prevalence and what was the primary mode of transmission?",
    options: [
      "Manipur - Injecting Drug Use (IDU) as primary mode",
      "Maharashtra - Commercial sex work as primary mode in early epidemic",
      "Tamil Nadu - Blood transfusion as primary mode",
      "Andhra Pradesh - Mother to child transmission as primary mode"
    ],
    answer: 0,
    explanation: "Manipur (Northeast India) historically had the highest HIV prevalence in India, with the epidemic primarily driven by Injecting Drug Use (IDU). Manipur's geographic location on drug trafficking routes (Golden Triangle) led to high IDU prevalence and rapid HIV spread through needle/syringe sharing in the late 1980s-90s. HIV prevalence among IDU in Manipur exceeded 50% at the epidemic peak. This IDU-driven epidemic spread subsequently to sexual partners and via MTCT. Southern states (Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra) experienced predominantly heterosexual transmission through commercial sex networks. India's epidemic is heterogeneous - Northeast states have IDU-driven epidemics while South India has predominantly sexual transmission."
  },
  {
    id: 20,
    question: "The ICTC (Integrated Counselling and Testing Centre) network under NACO provides HIV testing and counselling. What does 'integrated' signify in ICTC?",
    options: [
      "Integration of HIV testing with malaria and TB diagnosis at the same center",
      "Integration of HIV counselling and testing with other reproductive and child health (RCH) services, especially for antenatal care",
      "Integration of laboratory and clinical services under one roof",
      "Integration of government and private sector HIV testing at shared facilities"
    ],
    answer: 1,
    explanation: "The term 'integrated' in ICTC signifies integration of HIV counselling and testing with other Reproductive and Child Health (RCH) services - particularly antenatal care (ANC). ICTCs were established to provide HIV counselling and testing as part of routine ANC visits, integrating PMTCT into maternal health services rather than having separate HIV testing facilities. FICTC (Facility-Integrated Counselling and Testing Centre) are located within health facilities and integrated with RMNCH+A services. Stand-alone ICTCs also exist. The integration ensures all pregnant women are offered HIV testing during ANC as part of routine care (provider-initiated testing and counselling - PITC), which significantly increases testing uptake for PMTCT. ICTCs also serve general population for voluntary counselling and testing (VCT)."
  },
  {
    id: 21,
    question: "The basic reproductive number (R0) of HIV/AIDS through heterosexual transmission is estimated to be approximately:",
    options: [
      "R0 = 10-15 (similar to measles)",
      "R0 = 2-5",
      "R0 less than 1 in all settings (HIV cannot sustain epidemic)",
      "R0 = 1 exactly (HIV is at endemic equilibrium)"
    ],
    answer: 1,
    explanation: "The basic reproductive number (R0) for HIV through heterosexual transmission is estimated at approximately 2-5, though estimates vary by context, sexual network structure, viral load, and concurrent infections. R0 represents the average number of secondary infections caused by one infectious individual in a fully susceptible population. HIV's R0 being relatively low (compared to airborne infections like measles R0 = 12-18 or influenza R0 = 2-3) reflects its relatively low per-contact transmission probability. However, HIV's long infectious period (years) compensates for low per-act transmission probability. Network effects, high-risk groups, and concurrent partnerships dramatically amplify effective transmission. R0 > 1 is required for epidemic spread; interventions aim to reduce effective reproductive number (Re or Rt) below 1."
  },
  {
    id: 22,
    question: "Prevention of HIV transmission through blood and blood products is ensured in India by which mandatory requirement under the Drugs and Cosmetics Act?",
    options: [
      "Mandatory HIV testing of all blood donors and screening of all donated blood units for HIV antibodies",
      "Restriction of blood donation to government hospitals only",
      "Mandatory quarantine of blood units for 6 months before use",
      "Use of synthetic blood substitutes instead of human blood transfusions"
    ],
    answer: 0,
    explanation: "Under the Drugs and Cosmetics Act and Blood Bank guidelines, ALL donated blood must be mandatorily screened for HIV (both HIV-1 and HIV-2 antibodies/antigens), Hepatitis B surface antigen (HBsAg), Hepatitis C antibodies (anti-HCV), Malaria (by RDT or smear), and VDRL (Syphilis) before use for transfusion. This is enforced at all licensed blood banks. Additionally, voluntary non-remunerated blood donation is promoted (as paid donors have higher risk of TTI). Nucleic Acid Testing (NAT) for HIV, HBV, and HCV is increasingly being implemented to reduce the window period and further minimize transfusion-transmitted infections. Blood safety is one of the four pillars of HIV prevention (along with behavioral, biomedical, and structural interventions)."
  },
  {
    id: 23,
    question: "In HIV epidemiology, the incubation period (time from HIV infection to clinical AIDS) without treatment is approximately:",
    options: [
      "2-4 weeks (same as acute HIV syndrome)",
      "6-12 months",
      "8-10 years on average",
      "25-30 years in most individuals"
    ],
    answer: 2,
    explanation: "The median incubation period of HIV infection (from initial infection to development of AIDS-defining illness or CD4 count <200 cells/mm3) is approximately 8-10 years without antiretroviral treatment. This long asymptomatic phase (clinical latency period) makes HIV epidemiology unique - infected individuals remain infectious throughout this period while appearing healthy. Variation exists: approximately 5-10% progress rapidly to AIDS within 2-5 years ('rapid progressors'), while about 1-5% maintain normal CD4 counts for >10-15 years without ART ('long-term non-progressors' or 'elite controllers'). ART dramatically extends survival and prevents AIDS progression. The long incubation period means HIV spread can be underestimated until AIDS cases appear years later."
  },
  {
    id: 24,
    question: "The concept of 'Treatment as Prevention' (TasP) in HIV refers to which epidemiological principle?",
    options: [
      "Using ART to prevent opportunistic infections in HIV-positive individuals",
      "Providing ART to HIV-negative high-risk individuals before potential exposure (PrEP)",
      "Achieving viral suppression through ART in PLHIV to reduce onward HIV transmission to sexual partners (U=U: Undetectable = Untransmittable)",
      "Universal HIV testing of all adults annually as a prevention strategy"
    ],
    answer: 2,
    explanation: "Treatment as Prevention (TasP) is based on the principle that HIV-positive individuals on ART who achieve undetectable viral load have essentially zero risk of transmitting HIV to sexual partners - expressed as U=U (Undetectable = Untransmittable). This was established by landmark studies: HPTN 052 study (2011) showed 96% reduction in HIV transmission in serodiscordant couples when the HIV-positive partner was on ART; PARTNER studies (2014-2018) showed zero transmissions when viral load was undetectable. TasP has become a cornerstone of HIV prevention strategy at population level - rapid ART initiation ('Test and Treat' for all regardless of CD4 count) reduces community viral load and drives down population-level incidence. This is distinct from PrEP (prophylactic ART for HIV-negative individuals)."
  },
  {
    id: 25,
    question: "The Annual Blood Examination Rate (ABER) is a key indicator of malaria surveillance intensity. ABER is defined as:",
    options: [
      "(Number of malaria-positive blood slides / Mid-year population) x 100",
      "(Number of blood slides examined for malaria / Mid-year population) x 100",
      "(Number of blood slides positive for P. falciparum / Total blood slides examined) x 100",
      "(Number of blood slides examined / Number of malaria cases) x 100"
    ],
    answer: 1,
    explanation: "Annual Blood Examination Rate (ABER) = (Number of blood slides examined for malaria in a year / Mid-year population) x 100. ABER measures the intensity of malaria surveillance - it reflects the effort made to detect malaria cases by collecting and examining blood smears. WHO recommends ABER of at least 10% for adequate surveillance. States with ABER below 10% may be missing malaria cases. ABER is a process indicator (measuring surveillance activity) while API (Annual Parasite Incidence) is an outcome indicator (measuring disease burden). The Slide Positivity Rate (SPR) = (Positive blood slides / Total blood slides examined) x 100 - measures what proportion of examined slides are positive. These three indicators together provide a complete picture of malaria surveillance."
  },
  {
    id: 26,
    question: "India has stratified districts for malaria based on API values for targeted interventions under NVBDCP. Districts are classified as high burden if API is:",
    options: [
      "API greater than 1 per 1000 population",
      "API greater than 2 per 1000 population",
      "API greater than 5 per 1000 population",
      "API greater than 10 per 1000 population"
    ],
    answer: 1,
    explanation: "India's NVBDCP (National Vector Borne Disease Control Programme)/NCVBDC (National Centre for Vector Borne Diseases Control) stratifies districts based on malaria burden using API: High burden districts: API > 2 per 1000 population (these receive priority interventions - IRS, LLINs, enhanced surveillance). Moderate burden districts: API 1-2 per 1000. Low burden districts: API < 1 per 1000. Zero transmission districts: achieving zero indigenous cases. India's National Framework for Malaria Elimination (NFME) 2016-2030 aims to: eliminate malaria from 26 low-burden states/UTs by 2022; reduce API to <1 nationwide by 2024; achieve zero indigenous malaria cases by 2027; maintain elimination status by 2030. High-burden states include Odisha, Chhattisgarh, Jharkhand, Madhya Pradesh, and northeastern states."
  },
  {
    id: 27,
    question: "The WHO malaria elimination certification criteria require that a country demonstrates:",
    options: [
      "Zero malaria cases for any single year",
      "Zero indigenous malaria cases for at least 3 consecutive years AND a functioning surveillance and response system capable of preventing reintroduction",
      "Malaria transmission reduced by 90% from baseline",
      "Zero malaria deaths for 5 consecutive years with case management coverage above 90%"
    ],
    answer: 1,
    explanation: "WHO malaria elimination certification requires: (1) Zero indigenous (locally acquired) malaria cases for at least 3 consecutive years - i.e., no local transmission during this period; (2) A national surveillance and response program that can rapidly detect and respond to imported cases to prevent re-establishment of transmission (preventing reintroduction). Countries achieving elimination can be certified by WHO. Countries must also commit to continued prevention of re-establishment. Examples: Sri Lanka achieved WHO certification in 2016 (after 3+ years of zero indigenous cases). India's National Framework for Malaria Elimination sets state-wise targets. 'Elimination' is different from 'eradication' (global elimination of the parasite/disease, as achieved for smallpox)."
  },
  {
    id: 28,
    question: "Slide Falciparum Rate (SFR) is an entomological/epidemiological indicator in malaria surveillance. SFR is calculated as:",
    options: [
      "(Number of P. falciparum positive slides / Mid-year population) x 100",
      "(Number of P. falciparum positive slides / Total blood slides examined) x 100",
      "(Number of P. falciparum cases / Total malaria cases) x 100",
      "(Number of severe P. falciparum cases / Total P. falciparum cases) x 100"
    ],
    answer: 1,
    explanation: "Slide Falciparum Rate (SFR) = (Number of P. falciparum positive slides / Total blood slides examined) x 100. It measures the proportion of examined blood slides that are positive specifically for P. falciparum (as opposed to all malaria species). SFR is important because P. falciparum causes more severe malaria and has different treatment implications (ACT required, gametocyte clearance). The P. falciparum proportion (Pf%) = (P. falciparum cases / Total malaria cases) x 100 is a related indicator showing the species composition of malaria burden. India has seen increasing Pf% over the years. In contrast, Slide Positivity Rate (SPR) includes all species. Annual Falciparum Incidence (AFI) = P. falciparum cases per 1000 population per year."
  },
  {
    id: 29,
    question: "Indoor Residual Spraying (IRS) coverage indicators used to evaluate malaria vector control programs include which metric as the primary indicator?",
    options: [
      "Percentage of houses sprayed in a district out of total houses eligible for spraying",
      "Kilogram of insecticide used per district per year",
      "Number of spray teams deployed per 1000 population",
      "Cost per household sprayed per year"
    ],
    answer: 0,
    explanation: "The primary IRS coverage indicator is: Percentage of households sprayed = (Number of households sprayed / Total households eligible for spraying) x 100. WHO recommends at least 80% coverage of eligible households for IRS to be epidemiologically effective (to interrupt malaria transmission). 'Eligible households' are those in malaria-endemic areas and accepting spraying. Process indicators for IRS include: number of spray rounds per year (usually 1-2 rounds), timing relative to peak transmission season, insecticide quality (bioassay testing), spray operator training. Impact indicators include API before/after IRS. IRS quality is assessed through insecticide bioassays on sprayed surfaces to verify adequate residual activity. LLIN (Long-Lasting Insecticidal Net) coverage indicator: percentage of households with at least one LLIN per two persons."
  },
  {
    id: 30,
    question: "Drug resistance surveillance in malaria under NVBDCP monitors for resistance to chloroquine and ACT. The primary method used for in vivo drug efficacy testing in malaria is:",
    options: [
      "Microplate drug sensitivity assay on cultured P. falciparum",
      "WHO standard in vivo therapeutic efficacy study (TES) - following patients clinically and parasitologically for 28 days after treatment",
      "Molecular genotyping of drug resistance markers (pfcrt, pfkelch13) only",
      "Retrospective analysis of treatment failure reports from health facilities"
    ],
    answer: 1,
    explanation: "WHO standard Therapeutic Efficacy Study (TES) or in vivo drug efficacy study is the primary method for malaria drug resistance surveillance. Protocol: patients with uncomplicated malaria receive standard treatment and are followed for 28 days (for chloroquine) or 28-42 days (for ACT/artemisinin derivatives) with clinical, parasitological, and hematological assessments on days 1, 2, 3, 7, 14, 21, and 28. Outcomes classified as: Early Treatment Failure (ETF), Late Clinical Failure (LCF), Late Parasitological Failure (LPF), and Adequate Clinical and Parasitological Response (ACPR). PCR correction distinguishes recrudescence (treatment failure) from re-infection. Molecular markers (pfkelch13 for artemisinin, pfcrt/pfmdr1 for chloroquine) supplement in vivo studies. NVBDCP conducts TES at sentinel sites across India."
  },
  {
    id: 31,
    question: "Mass Drug Administration (MDA) for malaria elimination - WHO recommends MDA under which specific conditions?",
    options: [
      "In all malaria-endemic areas globally as a first-line elimination strategy",
      "Only in settings approaching elimination where malaria transmission is low and in isolated/island populations, as a time-limited intervention with appropriate ACT to all eligible individuals",
      "Exclusively for P. vivax malaria elimination using primaquine",
      "As a replacement for case management and vector control in high-burden settings"
    ],
    answer: 1,
    explanation: "WHO recommends Mass Drug Administration (MDA) for malaria as a time-limited supplementary intervention under specific conditions: settings approaching elimination (low and residual transmission); geographically isolated or island populations where containment is feasible; areas with stable access to treatment and strong surveillance for follow-up; in combination with (not replacing) vector control and case management. MDA involves administering antimalarial drugs to all eligible individuals in a target population simultaneously regardless of infection status, to clear all existing infections simultaneously. Typical regimen: ACT for P. falciparum; ACT plus primaquine (with G6PD testing) for P. vivax. High coverage (>80%) of population is essential. Evidence from Pacific islands and some Africa trials supports MDA in elimination settings. MDA is NOT recommended for high-burden settings where elimination is not near-term."
  },
  {
    id: 32,
    question: "The entomological inoculation rate (EIR) is a key epidemiological indicator in malaria. EIR measures:",
    options: [
      "The proportion of mosquitoes carrying malaria sporozoites in a population",
      "The number of infective mosquito bites received per person per unit time, combining human biting rate and sporozoite rate",
      "The number of Anopheles mosquitoes per household per night",
      "The proportion of the human population with detectable malaria parasitemia"
    ],
    answer: 1,
    explanation: "Entomological Inoculation Rate (EIR) = Human Biting Rate (HBR) x Sporozoite Rate (SR). It measures the number of infective (sporozoite-carrying) Anopheles bites received per person per unit time (night, month, or year). EIR is the most direct measure of malaria transmission intensity. Components: Human Biting Rate (HBR) = number of Anopheles bites per person per night (measured by human landing catches or light traps); Sporozoite Rate (SR) = proportion of Anopheles mosquitoes with sporozoites in salivary glands (measured by ELISA or PCR of dissected mosquitoes). EIR in holoendemic Africa can exceed 100-1000 infective bites/person/year; in low-transmission settings approaching elimination, EIR approaches zero. EIR is used to classify malaria transmission intensity and evaluate vector control impact."
  },
  {
    id: 33,
    question: "In malaria epidemiology, the basic reproductive number (R0) for Plasmodium falciparum is primarily determined by which parameters in the MacDonald-Ross model?",
    options: [
      "Human population density and mosquito population density alone",
      "Mosquito biting rate, mosquito density per human, vector competence, and the durations of the extrinsic and intrinsic incubation periods",
      "Parasite drug resistance profile and human immune status",
      "Temperature and rainfall patterns in the transmission area only"
    ],
    answer: 1,
    explanation: "The MacDonald-Ross model for malaria defines R0 as a function of entomological parameters: R0 = (m x a2 x b x c x exp(-mu x n)) / (mu x r), where: m = mosquito density per human; a = human biting rate (bites per mosquito per day); b = proportion of bites by infectious mosquitoes that infect a susceptible human; c = proportion of bites on infectious humans that infect a susceptible mosquito (vector competence); mu = mosquito daily mortality rate; n = extrinsic incubation period (sporogonic cycle duration); r = human recovery rate. This model explains why vector control targeting Anopheles density (m) and longevity (1/mu) - since mosquitoes must survive long enough to complete sporogony - is so effective. High mosquito longevity and biting rate amplify malaria transmission exponentially."
  },
  {
    id: 34,
    question: "NCVBDC (formerly NVBDCP) - National Centre for Vector Borne Diseases Control - has its headquarters at:",
    options: [
      "Mumbai, Maharashtra",
      "New Delhi",
      "Bengaluru, Karnataka",
      "Chennai, Tamil Nadu"
    ],
    answer: 1,
    explanation: "The National Centre for Vector Borne Diseases Control (NCVBDC), formerly known as National Vector Borne Disease Control Programme (NVBDCP), has its headquarters in New Delhi (22-Sham Nath Marg, Delhi). NCVBDC is the apex national body under the Ministry of Health and Family Welfare responsible for prevention and control of vector-borne diseases in India including malaria, dengue, chikungunya, filaria, kala-azar (visceral leishmaniasis), and Japanese encephalitis. NCVBDC provides technical guidelines, national policy, monitoring frameworks, and coordinates state programs. Regional offices are located in different zones of India to provide technical support to states."
  },
  {
    id: 35,
    question: "Long-Lasting Insecticidal Nets (LLINs) provide protection against malaria through which two mechanisms?",
    options: [
      "Chemical repellent effect only, keeping mosquitoes away from the sleeping area",
      "Physical barrier preventing mosquito bites on sleeping individuals AND toxic/irritant effect killing or repelling mosquitoes that contact the net, providing community-level protection",
      "Absorbing mosquito-borne parasites before they reach the human host",
      "Generating heat that kills mosquitoes within a 5-meter radius during the night"
    ],
    answer: 1,
    explanation: "Long-Lasting Insecticidal Nets (LLINs) protect against malaria through dual mechanisms: (1) Physical barrier - prevents direct contact between sleeping person and mosquitoes, blocking bites when properly used; (2) Chemical effect - insecticide (usually pyrethroid - permethrin or deltamethrin) incorporated into or coated on net fibers kills or repels mosquitoes that land on the net. This chemical effect provides community-level protection (mass effect/herd protection) even for people sleeping without nets in the same household/village, as mosquitoes are killed upon contacting nets rather than seeking other targets. LLINs maintain insecticidal activity for 3+ years (20+ washes). Coverage target: at least 80% of population in endemic areas using LLINs. Pyrethroid resistance in Anopheles vectors threatens LLIN efficacy."
  },
  {
    id: 36,
    question: "Kala-azar (Visceral Leishmaniasis) is also a vector-borne disease under NCVBDC. The primary vector responsible for Kala-azar transmission in India is:",
    options: [
      "Female Anopheles mosquito",
      "Phlebotomus argentipes (sandfly)",
      "Aedes aegypti mosquito",
      "Culex quinquefasciatus mosquito"
    ],
    answer: 1,
    explanation: "Kala-azar (Visceral Leishmaniasis caused by Leishmania donovani) is transmitted in India by the sandfly Phlebotomus argentipes - the primary anthroponotic vector. Sandflies are tiny (~3mm), hairy, golden-colored flies that bite at night and rest in dark, damp areas (mud walls, cracks, animal sheds). They breed in moist, organic-rich soil. India's kala-azar is endemic in Bihar (>90% of India's burden), Jharkhand, West Bengal, and Uttar Pradesh. India has committed to eliminating kala-azar (target: <1 case per 10,000 population at sub-district level). Control measures include: Indoor Residual Spraying (DDT/synthetic pyrethroids) targeting sandfly vectors, early diagnosis and treatment, and active case detection. Post Kala-azar Dermal Leishmaniasis (PKDL) is an important reservoir that complicates elimination."
  },
  {
    id: 37,
    question: "The Plasmodium vivax malaria relapse phenomenon occurs due to hypnozoites in the liver. What is the significance of relapse in malaria elimination programs?",
    options: [
      "Relapses only affect individual patients and have no epidemiological significance for transmission",
      "Relapses represent new infections from mosquito bites misclassified as treatment failures",
      "Relapses contribute to ongoing transmission as relapsed patients develop gametocytes and serve as infection sources for Anopheles vectors, complicating elimination efforts",
      "P. vivax relapses occur only in immunocompromised individuals"
    ],
    answer: 2,
    explanation: "P. vivax hypnozoites (dormant liver stage parasites) can reactivate weeks to months after the initial infection, causing relapse episodes even after complete elimination of blood-stage parasites. Epidemiological significance: (1) Relapses generate gametocytes that infect Anopheles vectors, contributing to ongoing transmission chains independent of new mosquito bites; (2) In low-transmission settings approaching elimination, relapse cases can sustain transmission and prevent achieving zero indigenous cases; (3) Without radical cure (primaquine to kill hypnozoites), P. vivax cannot be eliminated even with perfect blood-stage treatment and vector control; (4) Estimation of true incidence is complicated because relapse cases may outnumber primary infections. India's elimination strategy includes ensuring access to primaquine radical cure (with G6PD screening) for all P. vivax cases."
  },
  {
    id: 38,
    question: "The House Index (HI) and Container Index (CI) are Aedes surveillance indicators. During a dengue outbreak investigation in a city, House Index is found to be 35%. This indicates:",
    options: [
      "35% of the city's population has dengue antibodies",
      "35 out of every 100 houses inspected have at least one container with Aedes larvae/pupae",
      "35% of containers inspected contain Aedes larvae or pupae",
      "35 adult Aedes mosquitoes were found per 100 houses inspected"
    ],
    answer: 1,
    explanation: "House Index (HI) = (Number of houses found infested with Aedes larvae or pupae / Total houses inspected) x 100. An HI of 35% means 35 out of every 100 houses inspected have at least one water container with Aedes aegypti larvae or pupae. This is a measure of the proportion of premises infested. Container Index (CI) = (Number of positive containers / Total water-holding containers inspected) x 100. Breteau Index (BI) = (Number of positive containers / 100 houses inspected). WHO risk thresholds: HI > 1% = dengue transmission risk; HI > 5% = high transmission risk. An HI of 35% is extremely high and indicates urgent need for source reduction (container emptying, treatment, removal) and larviciding. HI > 1 combined with presence of a dengue case indicates an outbreak situation."
  },
  {
    id: 39,
    question: "Dengue virus serotype surveillance (monitoring which DENV serotypes are circulating) is epidemiologically important because:",
    options: [
      "Different serotypes respond differently to antiviral medications available for dengue treatment",
      "Introduction of a new serotype into a population with existing immunity to other serotypes can trigger outbreaks of severe dengue through Antibody-Dependent Enhancement (ADE)",
      "Serotype surveillance is used exclusively for dengue vaccine efficacy testing",
      "Dengue serotypes determine the vector species responsible for transmission"
    ],
    answer: 1,
    explanation: "Dengue serotype surveillance has critical epidemiological importance: when a new DENV serotype is introduced into a population that has pre-existing immunity to other serotypes (from previous infection or circulation), Antibody-Dependent Enhancement (ADE) increases the risk of severe dengue at population level. Cross-reactive non-neutralizing antibodies from prior infection enhance uptake of the new serotype into Fc-receptor-bearing cells (monocytes/macrophages), amplifying viral replication and cytokine storm - increasing risk of Dengue Hemorrhagic Fever/Dengue Shock Syndrome. Examples: introduction of DENV-2 into a DENV-1-immune population in Cuba (1981) and Thailand caused severe dengue epidemics. Serotype monitoring informs prediction of outbreak severity and guides vaccine deployment strategies. India has seen all four serotypes co-circulating."
  },
  {
    id: 40,
    question: "The NS1 antigen ELISA test sensitivity for dengue diagnosis compared to PCR (gold standard) is approximately:",
    options: [
      "Greater than 95% - NS1 ELISA is more sensitive than PCR",
      "50-90% in primary dengue infection on Day 1-5, lower in secondary infection (30-60%) where immune complex formation reduces free NS1",
      "Less than 20% - NS1 ELISA is only useful for confirmatory testing",
      "Exactly 80% in all types of dengue infection regardless of timing"
    ],
    answer: 1,
    explanation: "NS1 antigen ELISA sensitivity compared to RT-PCR gold standard: In primary dengue infection during the febrile phase (Day 1-5): approximately 70-90% sensitivity. In secondary dengue infection: sensitivity decreases to approximately 30-60% because pre-existing high-titer IgG antibodies from prior infection rapidly form immune complexes with NS1, reducing free NS1 detectable by ELISA. Specificity of NS1 ELISA is approximately 90-98% (high). RT-PCR (gold standard) sensitivity: 90-100% during Days 1-5. After Day 5-6, viral RNA clears from blood and PCR sensitivity falls sharply - then IgM serology becomes the primary diagnostic. Combination of NS1 antigen + IgM antibody testing increases overall diagnostic sensitivity across all stages of dengue illness."
  },
  {
    id: 41,
    question: "IDSP (Integrated Disease Surveillance Programme) reporting for dengue - under which reporting format should a dengue outbreak in a district be reported, and within what timeframe?",
    options: [
      "Weekly S-form (syndromic surveillance) by any community health worker; no urgent reporting required",
      "Immediate/urgent reporting within 24 hours to district and state surveillance officers upon detection of a cluster/outbreak, regardless of confirmation status",
      "Monthly aggregate data compilation in P-form (patient data); outbreaks reported only after laboratory confirmation",
      "Quarterly reporting to NCVBDC; only fatal dengue cases require urgent notification"
    ],
    answer: 1,
    explanation: "Under IDSP (Integrated Disease Surveillance Programme), dengue is a reportable disease and outbreaks require IMMEDIATE reporting: (1) Any cluster of dengue cases (2 or more epidemiologically linked cases) or a single severe case must be reported to the District Surveillance Officer (DSO) and State Surveillance Officer (SSO) within 24 hours of detection, without waiting for laboratory confirmation; (2) Outbreak investigation should commence immediately; (3) IDSP uses three reporting formats: S-form (syndromic - weekly from community), L-form (laboratory - weekly confirmed data), P-form (patient information for outbreaks). Dengue surveillance data flows from subcentre/PHC level upward through the IDSP network to IDSP central unit (National Centre for Disease Control - NCDC, Delhi). Timely outbreak reporting enables rapid response and control measures."
  },
  {
    id: 42,
    question: "Seroprevalence studies for dengue in India serve which specific epidemiological purpose beyond estimating current active cases?",
    options: [
      "Identifying individual dengue patients for treatment initiation",
      "Estimating the proportion of population with prior dengue exposure (IgG seroprevalence) to understand cumulative infection burden, proportion susceptible, and identify populations at risk for severe dengue from new serotype introduction",
      "Determining which dengue serotype is currently circulating in the community",
      "Measuring dengue vector density and predicting future outbreak timing"
    ],
    answer: 1,
    explanation: "Dengue seroprevalence studies measure IgG antibody prevalence (indicating past infection) in population-based samples. These studies serve multiple epidemiological purposes: (1) Estimating cumulative infection burden - often reveals dengue is far more common than official case counts (large 'iceberg' with many asymptomatic/mild infections); (2) Determining the proportion of population immune vs susceptible - crucial for predicting outbreak potential when a new serotype is introduced; (3) Age-stratified seroprevalence reveals transmission intensity over time; (4) Identifying populations seronegative to specific serotypes - at higher risk for severe dengue if exposed; (5) Evaluating vaccine deployment strategies (pre-vaccination serology to identify seronegatives who should not receive Dengvaxia). India's dengue seroprevalence in urban areas often exceeds 50-80%, revealing massive underreporting of clinical cases."
  },
  {
    id: 43,
    question: "Aedes aegypti's key behavioral characteristic that makes it a more efficient dengue vector than Aedes albopictus is:",
    options: [
      "Aedes aegypti can fly longer distances (>5 km) to seek blood meals",
      "Aedes aegypti has a higher tendency to feed multiple times during a single gonotrophic cycle, biting several humans in succession and increasing dengue transmission per infected mosquito",
      "Aedes aegypti breeds exclusively in large water bodies like ponds and lakes",
      "Aedes aegypti has a longer lifespan (>30 days) compared to Aedes albopictus"
    ],
    answer: 1,
    explanation: "Aedes aegypti's key vectorial advantage is its highly anthropophilic and multiple-feeding behavior: during a single gonotrophic cycle, Ae. aegypti frequently interrupts blood feeding and bites multiple humans to complete a blood meal. This 'skip oviposition' and multiple-host feeding behavior means a single infected Ae. aegypti can infect multiple humans during one cycle, dramatically amplifying transmission. Ae. aegypti's flight range is limited (usually 50-200 meters from breeding site), but it breeds in domestic/peridomestic containers in close proximity to humans (high human density contact). Ae. albopictus is less anthropophilic (feeds on various hosts), less domesticated, and a less efficient vector. Ae. aegypti's strong preference for human blood and indoor habitation makes it the primary dengue epidemic vector in urban settings."
  },
  {
    id: 44,
    question: "Integrated Vector Management (IVM) for dengue control, as recommended by WHO, differs from single-method vector control because it:",
    options: [
      "Relies exclusively on chemical pesticides for maximum vector kill rates",
      "Combines multiple evidence-based vector control tools (biological, chemical, environmental) with intersectoral collaboration, community participation, and integrated use of resources for cost-effective, sustainable, and ecologically sound management",
      "Focuses only on larval control methods and eliminates the need for adult mosquito control",
      "Is exclusively implemented by specialized entomology teams without community involvement"
    ],
    answer: 1,
    explanation: "Integrated Vector Management (IVM), as defined by WHO (2004/2012), is a rational decision-making process for the optimal use of resources for vector control. Key principles: (1) Evidence-based decision making (selecting interventions based on entomological and epidemiological data); (2) Use of multiple interventions in combination (environmental management: source reduction, water storage modification; biological control: Bti, Bacillus sphaericus, copepods, larvivorous fish; chemical control: larvicides, adulticides used judiciously to minimize resistance and environmental impact); (3) Intersectoral collaboration (health, water, urban planning, education sectors); (4) Community participation and empowerment; (5) Regulatory frameworks. IVM for dengue emphasizes source reduction (community-based container management) as primary strategy, supplemented by targeted insecticide use only when epidemiologically warranted. This reduces reliance on chemicals and insecticide resistance pressure."
  },
  {
    id: 45,
    question: "The seasonal pattern of dengue transmission in India is primarily determined by which environmental factors?",
    options: [
      "Temperature only - dengue peaks when temperature exceeds 40 degrees Celsius",
      "Rainfall and temperature together - peak dengue transmission occurs during and after monsoon season (July-November) when Aedes breeding sites are maximized and temperature remains favorable",
      "Humidity alone - dengue peaks in dry season when indoor humidity is highest",
      "Dengue transmission is non-seasonal and occurs uniformly throughout the year in India"
    ],
    answer: 1,
    explanation: "Dengue in India shows a strong seasonal pattern driven by rainfall and temperature: Peak transmission: July-November coinciding with the monsoon and post-monsoon period. Mechanisms: (1) Rainfall increases breeding sites by filling containers, creating new water pools, and flooding areas; (2) Post-monsoon stagnant water in containers (drums, tires, desert coolers, construction sites) provides ideal Aedes breeding habitat; (3) Temperature during monsoon (25-32 degrees Celsius) is optimal for Ae. aegypti reproduction and viral replication in mosquitoes; (4) Humidity enhances mosquito survival. Low-transmission period: December-February (winter). Some transmission year-round in warmer southern and coastal states. Understanding seasonality is crucial for planning pre-season vector control activities (source reduction campaigns, IRS timing) and healthcare preparedness (blood banks, platelet availability)."
  },
  {
    id: 46,
    question: "Community participation is emphasized in dengue control programs. Which evidence-based community-level intervention has shown the greatest effectiveness in reducing Aedes breeding in household containers?",
    options: [
      "Distributing insect repellent creams to all households in endemic areas",
      "Community-led source reduction - regular (weekly) inspection and elimination of water-holding containers (emptying, covering, cleaning/scrubbing to remove eggs, or disposal of unnecessary containers)",
      "Community-organized fogging campaigns with indoor pyrethroid spraying monthly",
      "Mass administration of dengue vaccines to all community members above age 9"
    ],
    answer: 1,
    explanation: "Community-led source reduction - the regular inspection and elimination of water-holding containers at household and community level - is the most effective and sustainable intervention for Aedes control. Evidence: Aedes breeding occurs predominantly in household containers (water storage vessels, desert coolers, flower pot saucers, roof gutters, construction containers). Regular (at minimum weekly) emptying breaks the larval development cycle (Aedes egg-to-adult takes 8-10 days). Additional methods: covering storage containers, scrubbing to remove eggs (Aedes eggs are desiccation-resistant and can survive weeks), using tight-fitting lids. Community-based surveillance (trained volunteers/ASHA workers inspecting households regularly) is more effective than periodic government inspections. This approach does not generate insecticide resistance, is low-cost, and creates sustainable behavior change. Fogging/space spraying has limited effectiveness against larval stages and breeding site reduction."
  },
  {
    id: 47,
    question: "The Container Index (CI) threshold above which dengue transmission is considered likely, as used in outbreak investigation and vector control evaluation, is:",
    options: [
      "CI greater than 0.1%",
      "CI greater than 1%",
      "CI greater than 10%",
      "CI greater than 25%"
    ],
    answer: 1,
    explanation: "Container Index (CI) = (Number of Aedes-positive containers / Total containers inspected) x 100. Epidemiological thresholds for dengue transmission risk: CI > 1% indicates presence of Aedes breeding and risk of dengue transmission. The WHO/PAHO threshold of CI > 1% is the standard benchmark used in outbreak investigations to determine whether vector density is sufficient to sustain dengue transmission. At CI > 1%, targeted vector control interventions are warranted. However, CI alone does not predict dengue outbreak magnitude as well as Breteau Index (BI), which is considered more epidemiologically informative because it relates positive containers to houses (accounting for container density per house). During outbreak response, entomological surveys calculate HI, CI, and BI to assess vector risk and guide intervention priorities."
  },
  {
    id: 48,
    question: "In dengue outbreak investigation, the epidemic curve (epi curve) shape provides information about the mode of transmission. A point-source epidemic curve for dengue would be characterized by:",
    options: [
      "A gradually rising curve over many months with a plateau, suggesting endemic transmission",
      "A sharp peak over a period of one incubation period (approximately 4-10 days) suggesting all cases were exposed to a common source at approximately the same time",
      "Multiple peaks separated by one incubation period, suggesting propagated transmission through person-to-person spread",
      "A flat, continuous curve lasting years with no discernible peak"
    ],
    answer: 1,
    explanation: "Epidemic curve (epi curve) interpretation: Point source outbreak: all cases exposed to a common source within a short period (one incubation period). For dengue (incubation 4-10 days), a point source epi curve shows a sharp peak of cases clustered within approximately 4-10 days. Example: a contaminated batch of blood transfusion causing dengue in multiple patients simultaneously. Propagated/person-to-person transmission (not applicable to dengue as it is not directly person-to-person): multiple peaks. Vector-borne transmission (typical dengue): shows features of both - cases cluster in time and space around breeding sites but spread gradually as more mosquitoes become infected - typically a broader peak with 1-3 month duration. The epi curve combined with case mapping (spot map) helps identify index cases, common source exposures, and transmission chains during dengue outbreak investigation."
  },
  {
    id: 49,
    question: "The WHO 2009 dengue classification replaced the 1997 WHO classification (DHF grading I-IV). The primary reason for the WHO revision was:",
    options: [
      "The old classification was too simple and did not include enough severity grades",
      "The DHF grading required specific laboratory criteria (thrombocytopenia <100,000 and hemoconcentration >20%) that were difficult to measure in resource-limited settings, and many severe dengue cases were misclassified; the new classification is more practical for clinical management decision-making",
      "The 1997 classification did not recognize dengue shock syndrome as a clinical entity",
      "The new classification was created specifically for dengue vaccine clinical trials"
    ],
    answer: 1,
    explanation: "The 2009 WHO dengue classification revision was driven by limitations of the 1997 DHF classification: (1) Strict laboratory criteria for DHF (platelet count <100,000/mm3 AND hematocrit rise >20%) missed many patients with plasma leakage and severe dengue who had incomplete criteria; (2) Classification was not guiding clinical management decisions well - many doctors were uncertain about which patients needed hospitalization; (3) Spectrum of disease was broader than four grades captured; (4) Different application of criteria across Asia and Americas led to inconsistency in dengue surveillance data comparability. The 2009 classification (dengue without warning signs / dengue with warning signs / severe dengue) is action-oriented - it directly guides decisions about outpatient vs. inpatient care and close monitoring. Both systems are still used in surveillance and research, which sometimes creates confusion."
  },
  {
    id: 50,
    question: "In assessing the burden of dengue for public health purposes, why do official case notification data significantly underestimate true dengue incidence in India?",
    options: [
      "Dengue is not a reportable disease in India, so no cases are officially notified",
      "Multiple levels of under-detection: many infections are asymptomatic or mild (not seeking care), healthcare facilities do not test all febrile patients for dengue, confirmed cases are not always notified to IDSP, and private sector reporting is incomplete - the true dengue burden is estimated to be 10-100 times higher than official figures",
      "India's laboratory capacity can test 100% of dengue suspected cases, so underestimation is not a problem",
      "Dengue underestimation only occurs in rural areas; urban surveillance captures nearly all cases"
    ],
    answer: 1,
    explanation: "Official dengue case notifications in India represent only the tip of the 'dengue iceberg' due to multiple layers of under-detection and underreporting: (1) Asymptomatic infections: approximately 75-80% of DENV infections are asymptomatic or subclinical and never seek healthcare; (2) Mild dengue: many febrile patients with dengue self-medicate or visit informal healthcare providers without dengue testing; (3) Testing gaps: not all febrile patients accessing healthcare are tested for dengue; (4) Passive surveillance limitations: cases must be reported by healthcare providers, with poor private sector compliance; (5) Laboratory confirmation requirements: many peripheral facilities lack NS1/serology testing; (6) IDSP reporting gaps at facility and district levels. Studies using capture-recapture methods, seroprevalence surveys, and health utilization data estimate true dengue incidence in India at 200-500 cases per 100,000 population - far exceeding notification rates of approximately 5-15 per 100,000. This underestimation affects resource allocation and program evaluation."
  }
];

export default questions;

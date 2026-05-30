const questions = [
  {
    id: 1,
    question: "Which program evaluation method focuses on understanding the causal mechanisms by which a program achieves its outcomes, emphasizing the 'why' and 'how' rather than just 'what works'?",
    options: ["Randomized controlled trial evaluation", "Realist evaluation", "Cost-benefit analysis", "Goal attainment scaling"],
    answer: 1,
    explanation: "Realist evaluation, developed by Pawson and Tilley, focuses on the mechanisms (how and why a program works), context (the conditions under which it works), and outcomes. It asks 'what works, for whom, in what circumstances, and why?' rather than simply whether a program works. This approach is particularly useful for complex health interventions."
  },
  {
    id: 2,
    question: "In the PDSA (Plan-Do-Study-Act) cycle for quality improvement, which phase involves analyzing collected data and comparing results to predictions?",
    options: ["Plan", "Do", "Study", "Act"],
    answer: 2,
    explanation: "The Study phase (also called Check in some versions - PDCA) is where data collected during the Do phase is analyzed and compared to the predictions made in the Plan phase. This phase determines what was learned and whether the change led to improvement. The findings from Study guide the Act phase decision to adopt, adapt, or abandon the change."
  },
  {
    id: 3,
    question: "The Donabedian model for evaluating healthcare quality uses three dimensions. Which combination correctly identifies all three?",
    options: ["Input-Process-Output", "Structure-Process-Outcome", "Resource-Activity-Result", "Capacity-Function-Performance"],
    answer: 1,
    explanation: "Avedis Donabedian proposed the Structure-Process-Outcome framework for evaluating healthcare quality. Structure refers to the attributes of the setting (physical, organizational, human resources). Process refers to what is done in giving and receiving care. Outcome refers to the effects of care on the health status of patients and populations. This remains the most widely used framework in health services research."
  },
  {
    id: 4,
    question: "The RE-AIM framework for evaluating public health interventions includes five dimensions. Which of the following is NOT one of them?",
    options: ["Reach", "Efficacy/Effectiveness", "Adoption", "Motivation"],
    answer: 3,
    explanation: "The RE-AIM framework, developed by Glasgow et al., consists of five dimensions: Reach (the proportion of the target population that receives the intervention), Efficacy/Effectiveness (success rate), Adoption (proportion of settings that adopt the intervention), Implementation (extent to which an intervention is implemented as intended), and Maintenance (extent to which intervention is sustained over time). Motivation is not a component of RE-AIM."
  },
  {
    id: 5,
    question: "In implementation science, 'fidelity' refers to:",
    options: ["The cost-effectiveness of implementing an intervention", "The degree to which an intervention is implemented as originally intended", "The loyalty of implementers to the program goals", "The sustainability of implementation over time"],
    answer: 1,
    explanation: "Implementation fidelity refers to the degree to which an intervention or program is implemented as intended by its developers. High fidelity means the core components of an intervention are delivered consistently and completely. Fidelity monitoring is critical because deviation from the original design can affect outcomes. It is distinct from adaptation, which involves intentional modifications to fit local context."
  },
  {
    id: 6,
    question: "Knowledge translation (KT) is best defined as:",
    options: ["Translating research papers from English to local languages", "A dynamic and iterative process that includes synthesis, dissemination, exchange, and ethically sound application of knowledge to improve health", "Converting theoretical knowledge into practical skills through training", "Publishing research findings in peer-reviewed journals"],
    answer: 1,
    explanation: "Knowledge translation (KT), as defined by the Canadian Institutes of Health Research (CIHR), is a dynamic and iterative process that includes synthesis, dissemination, exchange, and ethically sound application of knowledge to improve health, provide more effective health services and products, and strengthen the healthcare system. It bridges the gap between research evidence and practice."
  },
  {
    id: 7,
    question: "A logic model in program planning typically flows from left to right. What is the correct order of components?",
    options: ["Activities → Inputs → Outputs → Outcomes → Impact", "Inputs → Activities → Outputs → Outcomes → Impact", "Inputs → Outputs → Activities → Impact → Outcomes", "Outcomes → Inputs → Activities → Outputs → Impact"],
    answer: 1,
    explanation: "A logic model graphically depicts the theory of change for a program, flowing from Inputs (resources invested) → Activities (program components/interventions) → Outputs (direct products of activities) → Outcomes (short and medium-term changes) → Impact (long-term changes). This left-to-right flow represents the causal chain through which a program is expected to achieve its goals."
  },
  {
    id: 8,
    question: "In health services research, 'effectiveness' differs from 'efficacy' in that effectiveness:",
    options: ["Is measured under ideal, controlled conditions", "Refers to the performance of an intervention under real-world conditions", "Applies only to pharmaceutical interventions", "Requires a higher level of evidence than efficacy"],
    answer: 1,
    explanation: "Efficacy refers to the performance of an intervention under ideal, controlled conditions (typically in RCTs), while effectiveness refers to its performance under real-world conditions of routine practice. The 'efficacy-effectiveness gap' is a major concern in health services research. Effectiveness studies use pragmatic designs and reflect the actual benefits achieved in diverse patient populations and health system settings."
  },
  {
    id: 9,
    question: "The 'theory of change' approach in program development differs from a logic model primarily in that it:",
    options: ["Focuses only on measurable outcomes", "Explains the assumptions and causal pathways underlying how and why change will occur", "Is used only for retrospective evaluation", "Requires randomized assignment of participants"],
    answer: 1,
    explanation: "A theory of change goes beyond a logic model by making explicit the underlying assumptions and causal pathways about how and why an intervention will lead to desired changes. It articulates the conditions necessary for change, the mechanisms of change, and the causal relationships between activities and outcomes. It is more explanatory and theory-based than a simple logic model, which primarily shows 'what' will happen."
  },
  {
    id: 10,
    question: "In quality improvement methodology, the 'Model for Improvement' developed by Associates in Process Improvement (API) begins with three fundamental questions. Which is NOT one of them?",
    options: ["What are we trying to accomplish?", "How will we know that a change is an improvement?", "What changes can we make that will result in improvement?", "Who will be responsible if the improvement fails?"],
    answer: 3,
    explanation: "The Model for Improvement begins with three fundamental questions: (1) What are we trying to accomplish? (2) How will we know that a change is an improvement? (3) What changes can we make that will result in improvement? These questions are then followed by the PDSA cycle to test changes. 'Who will be responsible if improvement fails' is not one of the three questions; it is not part of this improvement model."
  },
  {
    id: 11,
    question: "Spatial epidemiology uses Geographic Information Systems (GIS) primarily to:",
    options: ["Manage patient electronic health records geographically", "Analyze the geographic distribution of disease and its determinants", "Navigate ambulances to hospitals", "Store laboratory results by location"],
    answer: 1,
    explanation: "Spatial epidemiology is concerned with the study of spatial variation in disease risk to understand the etiology of disease, plan and evaluate healthcare services, and improve public health decision-making. GIS tools allow mapping of disease occurrence, identification of clusters, analysis of environmental exposures, and modeling of spatial relationships between risk factors and disease outcomes."
  },
  {
    id: 12,
    question: "Kulldorff's spatial scan statistic is used in epidemiology to:",
    options: ["Calculate the spatial autocorrelation between two disease variables", "Detect and evaluate statistically significant geographic clusters of disease", "Map the spread of infectious diseases over time", "Estimate disease incidence in areas without surveillance data"],
    answer: 1,
    explanation: "Kulldorff's spatial scan statistic (implemented in the SaTScan software) is a widely used method for detecting geographic clusters of disease. It uses a circular or elliptical scanning window that moves across the geographic area, comparing the observed number of cases inside the window to the expected number. It identifies clusters that are statistically significant while controlling for multiple testing, and is used for cancer, infectious disease, and other health outcomes."
  },
  {
    id: 13,
    question: "Joinpoint regression analysis in cancer epidemiology is used to:",
    options: ["Identify the genetic join points between cancerous and normal cells", "Identify points in time where statistically significant changes in trends occur", "Calculate the joining probability of cancer cells to lymph nodes", "Estimate the probability that adjacent geographic areas have similar cancer rates"],
    answer: 1,
    explanation: "Joinpoint regression analysis identifies statistically significant changes (joinpoints) in trends over time in rates or proportions. Used extensively in cancer surveillance (e.g., by the NCI's SEER program), it fits the simplest model consistent with the data by identifying where trend direction or slope changes significantly. The Annual Percent Change (APC) is calculated for each segment between joinpoints."
  },
  {
    id: 14,
    question: "The Disability-Adjusted Life Year (DALY) is calculated as:",
    options: ["Years of Life Lost (YLL) × Years Lived with Disability (YLD)", "Years of Life Lost (YLL) + Years Lived with Disability (YLD)", "Years of Healthy Life Lost (YHLL) – Years of Disability", "Life expectancy – Healthy life expectancy"],
    answer: 1,
    explanation: "DALYs = YLL + YLD. Years of Life Lost (YLL) represents the premature mortality component (deaths × standard life expectancy at age of death). Years Lived with Disability (YLD) represents the morbidity component (number of cases × duration × disability weight). DALYs are used in the Global Burden of Disease study and WHO burden of disease analyses to compare the impact of different diseases across populations."
  },
  {
    id: 15,
    question: "In cost-effectiveness analysis, the Incremental Cost-Effectiveness Ratio (ICER) is calculated as:",
    options: ["(Cost of intervention A) / (Effectiveness of intervention A)", "(Cost A – Cost B) / (Effectiveness A – Effectiveness B)", "(Effectiveness A – Effectiveness B) / (Cost A – Cost B)", "(Total cost) × (Total effectiveness gained)"],
    answer: 1,
    explanation: "ICER = (Cost of intervention A – Cost of comparator B) / (Effectiveness of A – Effectiveness of B). It represents the additional cost per unit of additional health benefit gained by choosing one intervention over another. When ICER is below a willingness-to-pay threshold (e.g., 1-3× GDP per capita as suggested by WHO), the intervention is considered cost-effective. It is expressed as cost per QALY, DALY averted, or other effectiveness measure."
  },
  {
    id: 16,
    question: "Quality-Adjusted Life Year (QALY) weights health states between:",
    options: ["0 (perfect health) to 1 (death)", "0 (death) to 1 (perfect health)", "-1 (worst imaginable) to 1 (perfect health)", "0 (death) to 100 (perfect health)"],
    answer: 1,
    explanation: "QALYs are calculated by multiplying the time spent in a health state by the utility (quality) weight for that state, where 0 = death and 1 = perfect health (some scales allow negative values for states worse than death). For example, living 2 years with a utility of 0.5 = 1 QALY. QALYs are used in economic evaluations to compare interventions affecting both quality and quantity of life."
  },
  {
    id: 17,
    question: "In time series analysis used in epidemiology, an 'interrupted time series' (ITS) design is used to:",
    options: ["Analyze disease trends that were disrupted by data collection errors", "Evaluate the effect of a population-level intervention by comparing trends before and after implementation", "Identify seasonal patterns in infectious disease incidence", "Detect outliers in epidemiological surveillance data"],
    answer: 1,
    explanation: "Interrupted Time Series (ITS) is a quasi-experimental design used to evaluate population-level interventions where randomization is not feasible. It examines the trend in an outcome before and after an intervention (the 'interruption'), looking for changes in level (immediate effect) and/or slope (gradual effect). ITS is considered one of the strongest quasi-experimental designs for evaluating health policies and programs."
  },
  {
    id: 18,
    question: "Age-standardization of rates is necessary because:",
    options: ["It eliminates all confounding in epidemiological studies", "It allows fair comparison of rates between populations with different age structures", "It increases the precision of rate estimates", "It converts period rates to cohort rates"],
    answer: 1,
    explanation: "Age-standardization adjusts crude rates to remove the effect of differences in age distribution between populations, allowing valid comparisons. Without standardization, a population with a higher proportion of elderly individuals would appear to have higher mortality rates simply due to its age structure, not necessarily due to higher risk. Two methods are used: direct standardization (applies population-specific rates to a standard population) and indirect standardization (uses standard rates to calculate expected events)."
  },
  {
    id: 19,
    question: "Moran's I statistic in spatial epidemiology measures:",
    options: ["The incidence rate in a geographic cluster", "The degree of spatial autocorrelation (clustering or dispersion) in the distribution of a variable", "The mortality rate difference between geographic areas", "The distance between disease clusters"],
    answer: 1,
    explanation: "Moran's I is a measure of spatial autocorrelation that quantifies how much nearby areas resemble each other in terms of a variable (e.g., disease rates). Values range from -1 (perfect dispersion) to +1 (perfect clustering), with 0 indicating random spatial distribution. A positive Moran's I indicates that areas with similar values tend to be geographically clustered. It is used to detect geographic patterns in disease distribution."
  },
  {
    id: 20,
    question: "Life expectancy at birth is best defined as:",
    options: ["The average age at death in a population in a given year", "The average number of years a newborn is expected to live, assuming current age-specific mortality rates remain constant throughout life", "The median age of death in a population", "The number of years a person is expected to live without disability"],
    answer: 1,
    explanation: "Life expectancy at birth is a synthetic cohort measure derived from a current period life table. It represents the average number of years a hypothetical birth cohort would be expected to live if they were subject throughout their lives to the age-specific mortality rates prevailing in the current period. It is a summary measure of current mortality conditions, not a prediction of actual future mortality."
  },
  {
    id: 21,
    question: "In the context of AI-based diagnostic imaging, 'convolutional neural networks' (CNNs) are particularly suited to medical image analysis because they:",
    options: ["Can process any type of data without feature engineering", "Automatically learn hierarchical spatial features from images through convolutional layers", "Require very small datasets to achieve high accuracy", "Can only classify images into two categories"],
    answer: 1,
    explanation: "CNNs are a type of deep learning architecture particularly well-suited for image analysis. They use convolutional layers that automatically learn spatial hierarchies of features (edges → shapes → complex patterns) directly from raw pixel data, without requiring manual feature engineering. They have achieved performance comparable to or exceeding human experts in tasks like detecting diabetic retinopathy, skin cancer, and chest X-ray abnormalities."
  },
  {
    id: 22,
    question: "Natural Language Processing (NLP) in healthcare is primarily used for:",
    options: ["Processing medical imaging data from MRI and CT scans", "Extracting structured information from unstructured clinical text (e.g., discharge summaries, clinical notes)", "Analyzing genetic sequences for variant identification", "Monitoring patient vital signs in real time"],
    answer: 1,
    explanation: "NLP in healthcare processes and analyzes unstructured text data from clinical notes, discharge summaries, radiology reports, and other narrative documents. Applications include automated clinical coding, adverse event detection, clinical trial eligibility screening, phenotyping for research, and extraction of symptoms, diagnoses, and treatments from free text. It converts unstructured text into structured, computable data."
  },
  {
    id: 23,
    question: "Clinical Decision Support Systems (CDSS) are classified as 'active' when they:",
    options: ["Require the clinician to actively search for recommendations", "Automatically provide alerts, reminders, or recommendations at the point of care without being explicitly queried", "Actively monitor patients in ICU settings", "Require active internet connection to function"],
    answer: 1,
    explanation: "Active CDSS (also called 'alert-based' or 'unsolicited') automatically provide alerts, reminders, or recommendations at the point of care without the clinician needing to explicitly request them. Examples include drug-drug interaction alerts, critical lab value notifications, and sepsis early warning systems. Passive CDSS, in contrast, require the clinician to actively query the system for information or recommendations."
  },
  {
    id: 24,
    question: "Whole Exome Sequencing (WES) differs from Whole Genome Sequencing (WGS) in that WES:",
    options: ["Sequences all repetitive elements while WGS sequences only unique sequences", "Sequences only the protein-coding regions (~1-2% of the genome) while WGS sequences the entire genome", "Is used for RNA analysis while WGS is used for DNA analysis", "Provides information about epigenetic modifications while WGS does not"],
    answer: 1,
    explanation: "WES captures and sequences only the exome — the protein-coding regions of the genome (~1-2% of total genome, approximately 30-50 Mb). It is more cost-effective than WGS and sufficient for identifying most disease-causing variants in coding regions. WGS sequences the entire ~3 billion base pair genome, providing information on non-coding regions, regulatory elements, structural variants, and copy number variations that WES misses."
  },
  {
    id: 25,
    question: "Point-of-care ultrasound (POCUS) differs from traditional ultrasound examinations primarily in that POCUS is:",
    options: ["Performed by radiologists using fixed, high-resolution equipment", "Performed by clinicians at the bedside to answer focused clinical questions and guide immediate management", "Limited to cardiac imaging only", "Requires general anesthesia for patient comfort"],
    answer: 1,
    explanation: "POCUS is performed by the treating clinician at the patient's bedside using portable ultrasound devices to answer specific clinical questions in real time and guide immediate management decisions. It is a focused, goal-directed examination rather than a comprehensive diagnostic study. Applications include FAST (Focused Assessment with Sonography in Trauma), airway assessment, vascular access, and resuscitation guidance in emergency and critical care settings."
  },
  {
    id: 26,
    question: "Digital pathology involves the digitization of glass slides into whole slide images (WSI). The primary advantage of digital pathology over traditional light microscopy for routine diagnosis is:",
    options: ["Digital images have higher resolution than glass slides", "It enables remote consultation, AI-assisted analysis, quantitative image analysis, and educational use", "It eliminates the need for tissue processing and staining", "Digital images can be analyzed without pathologist training"],
    answer: 1,
    explanation: "Digital pathology converts glass slides to high-resolution digital images (WSI), enabling telepathology (remote expert consultation), integration of AI/deep learning algorithms for pattern recognition, quantitative image analysis, digital archiving, quality assurance, and educational applications. It does not eliminate the need for tissue processing/staining, and resolution may be comparable but not inherently superior to direct microscopy. The main advantage is in enabling technology integration and remote access."
  },
  {
    id: 27,
    question: "Wearable diagnostic devices that continuously monitor electrocardiograms (ECG) and detect atrial fibrillation use which type of algorithm most commonly for classification?",
    options: ["Rule-based expert systems", "Deep learning / neural networks trained on large ECG datasets", "Simple threshold-based algorithms", "Bayesian network models"],
    answer: 1,
    explanation: "Modern wearable ECG devices (e.g., Apple Watch, AliveCor KardiaMobile) use deep learning algorithms trained on large datasets of labeled ECGs to classify rhythms including atrial fibrillation. These algorithms have demonstrated high sensitivity and specificity comparable to cardiologist interpretation. Deep learning outperforms traditional rule-based or threshold-based methods for detecting subtle ECG abnormalities in continuous wearable monitoring."
  },
  {
    id: 28,
    question: "Smartphone-based diagnostics using the device camera for fundus photography require which additional hardware to capture retinal images?",
    options: ["An external light source only", "A clip-on lens adapter and appropriate illumination to enable close-up retinal imaging", "A specialized software upgrade only", "No additional hardware; the native camera is sufficient"],
    answer: 1,
    explanation: "Smartphone-based fundus photography requires clip-on lens adapters (such as D-EYE, Peek Retina adapter, or Remidio) that attach to the smartphone camera and provide the appropriate optics for retinal imaging, along with a light source for fundus illumination. These devices make retinal screening feasible in resource-limited settings. The native smartphone camera optics alone cannot focus on the retina."
  },
  {
    id: 29,
    question: "In telemedicine diagnostics, 'asynchronous' (store-and-forward) telemedicine differs from 'synchronous' telemedicine in that it:",
    options: ["Requires real-time video connection between patient and provider", "Involves collection and transmission of clinical data, images, or recordings for later review by a specialist without requiring simultaneous participation", "Is only used for emergency consultations", "Requires the patient to be present in a clinic setting"],
    answer: 1,
    explanation: "Store-and-forward (asynchronous) telemedicine involves collecting patient data (images, videos, clinical information) and transmitting it electronically to a specialist for review at a later time, without requiring both parties to be online simultaneously. This is used in teledermatology, teleradiology, teleopthalmology, and telepathology. Synchronous telemedicine involves real-time, interactive video consultations between patient and provider."
  },
  {
    id: 30,
    question: "Liquid biopsy for cancer diagnostics primarily analyzes which circulating component derived from tumor cells?",
    options: ["Circulating tumor cells (CTCs) and cell-free tumor DNA (ctDNA)", "Tumor-derived exosomes only", "Circulating RNA only", "Whole blood cell gene expression"],
    answer: 0,
    explanation: "Liquid biopsy for cancer diagnostics primarily analyzes circulating tumor cells (CTCs) — intact tumor cells shed into the bloodstream — and cell-free tumor DNA (ctDNA) — fragmented DNA released from tumor cells (typically through apoptosis and necrosis). Additional analytes include tumor-derived exosomes and circulating tumor RNA. Liquid biopsy enables non-invasive cancer detection, monitoring of treatment response, detection of resistance mutations, and minimal residual disease assessment."
  },
  {
    id: 31,
    question: "The International Health Regulations (IHR 2005) requires State Parties to develop and maintain core capacities for surveillance and response. How many core capacity areas are defined?",
    options: ["6", "8", "10", "12"],
    answer: 1,
    explanation: "The IHR (2005) defines 8 core capacity areas that State Parties must develop and maintain: (1) Legislation, policy and financing; (2) Coordination and National Focal Point communications; (3) Surveillance; (4) Response; (5) Preparedness; (6) Risk communication; (7) Human resources; and (8) Laboratory. These are monitored through the Joint External Evaluation (JEE) tool and the State Party Self-Assessment Annual Report (SPAR)."
  },
  {
    id: 32,
    question: "In epidemic modeling, the basic reproduction number (R₀) represents:",
    options: ["The total number of cases in an epidemic", "The average number of secondary cases generated by one primary case in a fully susceptible population", "The rate at which susceptible individuals become infected", "The proportion of exposed individuals who develop disease"],
    answer: 1,
    explanation: "R₀ (basic reproduction number) is defined as the average number of secondary infections produced by a single infectious individual in a completely susceptible population. If R₀ > 1, an epidemic can grow; if R₀ < 1, the epidemic will die out. The herd immunity threshold is approximately 1 – (1/R₀). R₀ depends on the infectious period, contact rate, and probability of transmission per contact."
  },
  {
    id: 33,
    question: "Ring vaccination strategy, used in the eradication of smallpox, involves:",
    options: ["Vaccinating all individuals in a defined geographic ring around an outbreak area", "Vaccinating all contacts and contacts-of-contacts of confirmed cases, creating a protective 'ring' around the outbreak", "Vaccinating healthcare workers in a ring around hospitals", "Vaccinating all individuals within a ring of 5 km radius from a case"],
    answer: 1,
    explanation: "Ring vaccination involves identifying all contacts of confirmed cases (and contacts of those contacts), then vaccinating this defined group to create a protective ring that prevents further transmission. This targeted approach was key to smallpox eradication and is used in Ebola outbreak response. It is more resource-efficient than mass vaccination and minimizes vaccine use while maximizing impact by focusing on the transmission chain."
  },
  {
    id: 34,
    question: "The Integrated Disease Surveillance Programme (IDSP) in India uses a reporting format divided into three components. What do S, P, and L stand for?",
    options: ["Surveillance, Prevention, and Laboratory", "Syndromic, Presumptive, and Laboratory-confirmed reporting", "Systematic, Periodic, and Longitudinal reporting", "State, Primary, and Local reporting"],
    answer: 1,
    explanation: "IDSP uses S-P-L format: S (Syndromic) data collected by community health workers and health facilitators reporting symptom-based syndromes; P (Presumptive) data collected by medical officers reporting clinically diagnosed/presumptive cases; and L (Laboratory-confirmed) data from laboratories confirming diagnoses. This tiered approach allows rapid syndromic surveillance at the community level while establishing laboratory-confirmed diagnoses for confirmed cases."
  },
  {
    id: 35,
    question: "In contact tracing methodology, 'backward contact tracing' (source tracing) refers to:",
    options: ["Tracing all forward contacts from an index case to identify secondary cases", "Identifying the source of infection of an index case to find superspreading events and clusters", "Tracing all contacts who traveled internationally before the index case", "Contacting all individuals after the incubation period has elapsed"],
    answer: 1,
    explanation: "Backward contact tracing (or 'retrospective contact tracing') identifies who infected the index case to find the exposure source. This can identify superspreading events where one person infected many others, allowing identification of entire clusters. Forward contact tracing identifies who the index case may have infected. Japan employed backward contact tracing effectively during COVID-19. Combining both approaches improves outbreak control efficiency."
  },
  {
    id: 36,
    question: "Emergency Operations Centers (EOCs) for public health emergencies function primarily as:",
    options: ["Hospitals designated for treatment of emergency patients", "Centralized command, coordination, and communication facilities for managing public health emergencies", "Warehouses for emergency medical supplies", "Research centers for studying outbreak causes"],
    answer: 1,
    explanation: "EOCs are centralized command and coordination facilities that support the coordination of information and resources to support incident management. During public health emergencies, they bring together multi-sectoral partners, data, and resources to enable strategic decision-making. EOCs use the Incident Command System (ICS) or similar frameworks. WHO supports countries in establishing EOCs as part of IHR core capacity development."
  },
  {
    id: 37,
    question: "The SIR model in mathematical epidemiology divides the population into three compartments. What do S, I, and R represent?",
    options: ["Susceptible, Infected, Recovered", "Severe, Intermediate, Resolved", "Screened, Infected, Removed", "Susceptible, Incubating, Resistant"],
    answer: 0,
    explanation: "The SIR model, a foundational compartmental model in mathematical epidemiology, divides the population into Susceptible (S) — those who can be infected; Infected (I) — those currently infected and infectious; and Recovered (R) — those who have recovered and are immune. Transition rates between compartments are determined by the transmission rate (β) and recovery rate (γ). Extensions include SEIR (adding Exposed), SEIRS, and other variants for different diseases."
  },
  {
    id: 38,
    question: "The International Air Transport Association (IATA) travel health requirements that relate to yellow fever vaccination are based on which international treaty/regulation?",
    options: ["The Geneva Convention", "The International Health Regulations (IHR) 2005", "The Alma Ata Declaration", "The WHO Framework Convention on Tobacco Control"],
    answer: 1,
    explanation: "International vaccination requirements for travelers, particularly yellow fever vaccination, are governed by the International Health Regulations (IHR) 2005. Countries can require proof of yellow fever vaccination (via International Certificate of Vaccination or Prophylaxis - ICVP/yellow card) for entry from yellow fever endemic countries. The IHR provides the legal framework for these travel health measures as part of preventing international disease spread."
  },
  {
    id: 39,
    question: "India's Integrated Health Information Platform (IHIP), which replaced the IDSP portal, primarily enhances surveillance by:",
    options: ["Focusing only on laboratory data", "Enabling case-based, event-based, and indicator-based surveillance with real-time data entry at the sub-district level", "Replacing paper-based reporting with telephone reporting", "Monitoring only notifiable diseases at the national level"],
    answer: 1,
    explanation: "IHIP (launched 2019) modernizes India's disease surveillance by enabling case-based surveillance (individual patient data), event-based surveillance, and indicator-based surveillance with real-time data entry at sub-district and facility levels. It covers 33 health conditions/events, supports mobile data entry, enables geospatial mapping, and integrates laboratory data. It represents a shift from aggregate weekly reporting to individual case-based, real-time surveillance."
  },
  {
    id: 40,
    question: "Pandemic preparedness plans are typically evaluated using simulated exercises called 'tabletop exercises.' These are best defined as:",
    options: ["Physical simulation drills involving actual deployment of emergency response personnel and equipment", "Discussion-based sessions where participants walk through a simulated emergency scenario to identify gaps and test plans without real resource deployment", "Computer simulation models of pandemic spread", "Annual vaccination campaigns used to test vaccine distribution systems"],
    answer: 1,
    explanation: "Tabletop exercises are discussion-based sessions where key stakeholders and decision-makers gather around a table to examine and discuss their roles, responsibilities, and actions during a simulated emergency scenario. They test plans, identify gaps, and build relationships without deploying actual resources. They are distinguished from 'functional exercises' (which test specific functions with limited deployment) and 'full-scale exercises' (which test all components with actual resource deployment)."
  },
  {
    id: 41,
    question: "The Ottawa Charter for Health Promotion (1986) identifies five action areas. Which of the following is NOT one of them?",
    options: ["Build healthy public policy", "Create supportive environments", "Develop personal skills", "Mandate medical treatment"],
    answer: 3,
    explanation: "The Ottawa Charter (1986) defines five action areas for health promotion: (1) Build healthy public policy; (2) Create supportive environments; (3) Strengthen community actions; (4) Develop personal skills; and (5) Reorient health services. 'Mandating medical treatment' is not an action area — health promotion is fundamentally about enabling people to increase control over their health, not mandating treatment. The charter also defines three basic strategies: advocacy, enablement, and mediation."
  },
  {
    id: 42,
    question: "In the Transtheoretical Model (Stages of Change), a person in the 'Contemplation' stage is characterized by:",
    options: ["Not thinking about changing behavior in the near future", "Acknowledging the problem and intending to change within the next 6 months, but ambivalent", "Actively preparing to make changes within 30 days", "Having maintained a behavior change for more than 6 months"],
    answer: 1,
    explanation: "In Prochaska and DiClemente's Transtheoretical Model, Contemplation is the stage where individuals are aware that a problem exists and are seriously thinking about overcoming it but have not yet made a commitment to take action. They are often ambivalent, weighing the pros and cons of change. They intend to change within the next 6 months. This is distinct from Precontemplation (no intention to change), Preparation (intending to act within 30 days), Action, and Maintenance."
  },
  {
    id: 43,
    question: "The Health Belief Model (HBM) proposes that health behavior is determined by several key perceptions. Which of the following is NOT a component of the HBM?",
    options: ["Perceived susceptibility", "Perceived severity", "Perceived self-efficacy", "Perceived social norms"],
    answer: 3,
    explanation: "The Health Belief Model (Rosenstock, 1966; later revised) includes: Perceived Susceptibility (belief about risk of getting the condition), Perceived Severity (belief about seriousness of the condition), Perceived Benefits (belief in the effectiveness of action), Perceived Barriers (belief about the costs/obstacles to action), Cues to Action (triggers to health behavior), and later Perceived Self-Efficacy (confidence in ability to perform the action). Perceived social norms is a component of the Theory of Planned Behavior, not HBM."
  },
  {
    id: 44,
    question: "In Everett Rogers' 'Diffusion of Innovations' theory, the adopter category that represents the first 2.5% of a population to adopt an innovation is termed:",
    options: ["Early adopters", "Innovators", "Early majority", "Opinion leaders"],
    answer: 1,
    explanation: "Rogers' Diffusion of Innovations theory describes five adopter categories in a bell curve distribution: Innovators (first 2.5%) — venturesome, risk-tolerant, typically have access to resources; Early Adopters (next 13.5%) — opinion leaders, respected by peers; Early Majority (next 34%) — deliberate adopters; Late Majority (next 34%) — skeptical; Laggards (last 16%) — traditional, resistant to change. The S-shaped adoption curve reflects cumulative adoption over time."
  },
  {
    id: 45,
    question: "Nudge theory in health, as applied by Thaler and Sunstein, is based on the principle of 'libertarian paternalism.' This means:",
    options: ["Prohibiting unhealthy behaviors through strict legislation", "Designing choice environments to guide people toward healthier choices while preserving freedom of choice", "Educating individuals about health risks through campaigns", "Providing financial incentives for healthy behavior"],
    answer: 1,
    explanation: "Libertarian paternalism (Thaler and Sunstein, 2008 'Nudge') involves designing choice architectures that steer people toward better choices without restricting freedom of choice — people can still choose otherwise but are 'nudged' toward the healthier default. Examples include placing healthy food at eye level in cafeterias, making organ donation opt-out rather than opt-in, and using prompts and reminders. It preserves individual liberty while guiding behavior."
  },
  {
    id: 46,
    question: "In Social Cognitive Theory (Bandura), 'reciprocal determinism' refers to the concept that:",
    options: ["Social behavior is determined by reciprocal social relationships", "Behavior, personal factors (cognition), and environment continuously influence each other in a bidirectional way", "Cognitive skills are determined by social learning reciprocally", "Individuals reciprocally determine each other's behavior in social groups"],
    answer: 1,
    explanation: "Reciprocal determinism is the central concept of Bandura's Social Cognitive Theory, proposing that behavior, personal factors (cognition, affect, biology), and environmental influences all continuously interact and influence each other bidirectionally. No single factor acts alone. Self-efficacy — a person's belief in their capability to perform a specific behavior — is a key personal factor in this triadic reciprocal causation, making it distinct from behaviorist theories that focus only on environment-behavior relationships."
  },
  {
    id: 47,
    question: "The settings-based approach to health promotion focuses on:",
    options: ["Targeting high-risk individuals in clinical settings", "Creating health-promoting environments in places where people live, work, learn, and play (schools, workplaces, cities, hospitals)", "Setting goals and targets for health improvement at the national level", "Using mass media settings for health communication"],
    answer: 1,
    explanation: "The settings-based approach, promoted by WHO since Alma Ata (1978) and elaborated in the Ottawa Charter (1986), recognizes that health is created and lived by people within the settings of their everyday life — schools, workplaces, cities, hospitals, prisons, and others. It aims to transform settings to support health rather than just targeting individual risk factors. Examples include WHO's Health Promoting Schools, Healthy Cities, Health Promoting Hospitals, and Healthy Workplaces networks."
  },
  {
    id: 48,
    question: "Social marketing in health promotion applies marketing principles to achieve social goals. The 'marketing mix' (4Ps) in social marketing refers to:",
    options: ["People, Promotion, Policy, and Participation", "Product, Price, Place, and Promotion", "Purpose, Process, Public, and Performance", "Prevention, Persuasion, Planning, and Progress"],
    answer: 1,
    explanation: "Social marketing applies commercial marketing principles to change behaviors for social benefit. The 4Ps marketing mix consists of: Product (the desired behavior change or the benefit it delivers), Price (the costs — financial, social, physical — of adopting the behavior), Place (where the behavior will be performed or service accessed), and Promotion (communication and media channels used). Social marketing is distinguished from IEC/BCC by its focus on voluntary exchange and consumer orientation."
  },
  {
    id: 49,
    question: "In behavior change communication (BCC), the key difference from Information, Education, and Communication (IEC) is that BCC:",
    options: ["Uses only mass media while IEC uses interpersonal communication", "Is focused on transmitting information while BCC focuses on dialogue and behavior change", "Focuses on creating a supportive environment for behavior change through participatory, two-way communication", "Is used only in clinical settings while IEC is used in community settings"],
    answer: 2,
    explanation: "IEC is primarily a one-way communication approach focused on disseminating information to increase knowledge and awareness. BCC recognizes that information alone is insufficient and emphasizes two-way dialogue, community participation, addressing social norms, and creating supportive environments for behavior change. BCC incorporates behavior change theories, involves the community in message development, and addresses both individual and social determinants of behavior. It is considered a more comprehensive and effective approach than IEC alone."
  },
  {
    id: 50,
    question: "The concept of 'health literacy' is defined as:",
    options: ["The ability to read and write in one's native language", "The degree to which individuals can obtain, process, and understand basic health information and services needed to make appropriate health decisions", "The level of education required to understand a doctor's prescription", "The ability to correctly identify symptoms of common diseases"],
    answer: 1,
    explanation: "Health literacy (WHO/IOM definition) is the degree to which individuals can obtain, process, and understand basic health information and services needed to make appropriate health decisions. It encompasses functional literacy (reading/writing), communicative/interactive literacy (extracting and using information), and critical literacy (analyzing information to better control events). Low health literacy is associated with poorer health outcomes, higher hospitalization rates, and reduced adherence to treatment."
  },
  {
    id: 51,
    question: "The Committee on Publication Ethics (COPE) provides guidelines for handling suspected research misconduct. What is the primary role of COPE?",
    options: ["To prosecute researchers who commit scientific fraud", "To provide guidance, resources, and a forum for publishers and editors to handle publication ethics issues", "To conduct investigations into research misconduct at universities", "To certify journals that meet ethical publication standards"],
    answer: 1,
    explanation: "COPE (established 1997) is a membership organization for academic editors and publishers that provides resources, flowcharts, case studies, and a forum for dealing with ethical issues arising in the publication process. It does not investigate or prosecute misconduct — that is the responsibility of institutions and research integrity bodies. COPE develops guidelines and best practices for handling plagiarism, data fabrication, authorship disputes, duplicate publication, and peer review misconduct."
  },
  {
    id: 52,
    question: "The Office of Research Integrity (ORI) in the United States oversees research misconduct in federally funded research. It defines research misconduct to include:",
    options: ["All errors and mistakes in research, including unintentional ones", "Fabrication, falsification, and plagiarism (FFP) in proposing, performing, or reviewing research, or in reporting research results", "Any deviation from standard research protocols", "Conflicts of interest and undisclosed funding sources"],
    answer: 1,
    explanation: "ORI defines research misconduct specifically as Fabrication (making up data or results), Falsification (manipulating research materials, equipment, or processes, or changing or omitting data), and Plagiarism (appropriation of another person's ideas, processes, results, or words without giving appropriate credit) — collectively known as FFP. The definition explicitly excludes honest error and differences of opinion. Research misconduct must be a significant departure from accepted practices."
  },
  {
    id: 53,
    question: "Duplicate publication (also called 'self-plagiarism') in the context of research ethics refers to:",
    options: ["Copying text from other authors without attribution", "Publishing the same data or substantially similar data in multiple publications without appropriate disclosure", "Publishing the same study design in two different journals", "Submitting the same manuscript to two journals simultaneously (duplicate submission)"],
    answer: 1,
    explanation: "Duplicate publication occurs when an author publishes substantially the same data, results, or content in more than one publication without appropriate disclosure of the prior publication. This inflates the apparent evidence base, violates journal policies on original work, and wastes peer review resources. It is distinguished from legitimate secondary publication (publishing in a different language with editor approval) and from duplicate submission (submitting the same manuscript to two journals simultaneously, which is also unethical)."
  },
  {
    id: 54,
    question: "'Salami slicing' in research publication refers to:",
    options: ["Presenting data from a large study as multiple smaller publications to maximize the number of papers from a single study", "Selecting only the most favorable results from a dataset for publication", "Altering study findings after peer review to make the paper more publishable", "Removing outliers from data to improve statistical significance"],
    answer: 0,
    explanation: "Salami slicing (also called 'minimum publishable unit') refers to dividing the results of what could be a single comprehensive study into multiple smaller publications, each reporting only a small slice of the original dataset. This practice artificially inflates publication counts, fragments the literature, makes it difficult for readers to assess the complete evidence, and violates the principle that each publication should make a unique, complete intellectual contribution. It is considered a form of research misconduct."
  },
  {
    id: 55,
    question: "In authorship ethics, 'ghost authorship' refers to:",
    options: ["An author who writes under a pseudonym", "A person who makes significant contributions to a study (often a professional writer or pharmaceutical company employee) but is not listed as an author", "An author who is deceased but still listed on publications", "A researcher who provides data but does not write the manuscript"],
    answer: 1,
    explanation: "Ghost authorship occurs when an individual who made substantial contributions to the conception, design, data collection, analysis, or writing of a research paper is not listed as an author. This is common in industry-sponsored research where professional medical writers employed by pharmaceutical companies draft manuscripts that are then attributed to academic researchers ('key opinion leaders'). Ghost authorship violates ICMJE authorship criteria and compromises transparency and accountability in research."
  },
  {
    id: 56,
    question: "Gift (or honorary) authorship refers to:",
    options: ["Authorship given as a favor to a senior researcher who did not contribute substantively to the work", "Gifting authorship rights to another researcher for financial compensation", "Acknowledging contributors in the acknowledgments section rather than as authors", "Sharing authorship credit equally among all team members"],
    answer: 0,
    explanation: "Gift authorship (also called honorary authorship) involves listing individuals as authors who did not meet established authorship criteria (e.g., ICMJE criteria), typically as a form of professional courtesy, to please a superior, to lend prestige to a paper, or in exchange for reciprocal authorship. It inflates individuals' publication records without corresponding intellectual contribution. ICMJE criteria require: substantial contributions, drafting/revising for important intellectual content, final approval, and accountability."
  },
  {
    id: 57,
    question: "Predatory journals can be identified by which of the following characteristics?",
    options: ["High article processing charges, rigorous peer review, and indexed status in major databases", "Lack of transparent editorial boards, poor or absent peer review, aggressive email solicitation, and rapid publication without quality checks", "Publishing only open access articles with Creative Commons licenses", "Requiring very long review periods and multiple revision rounds"],
    answer: 1,
    explanation: "Predatory journals exploit the open access model by charging article processing charges (APCs) without providing legitimate editorial services. Key identifiers include: no proper peer review or sham review, no clear editorial board with verifiable experts, aggressive email solicitation of manuscripts, misleading journal titles/metrics, false impact factor claims, unclear or nonexistent policies, and rapid acceptance. Resources like Think-Check-Submit, Beall's List (archived), and COPE guidelines help researchers identify predatory journals."
  },
  {
    id: 58,
    question: "Open access publishing under a Creative Commons CC-BY license means:",
    options: ["Only the journal can distribute the article freely", "Anyone can freely read, distribute, and reuse the work, as long as the original authors are attributed", "The work can only be used for non-commercial purposes", "The work cannot be modified or adapted by others"],
    answer: 1,
    explanation: "Creative Commons Attribution (CC-BY) is the most permissive CC license, allowing anyone to freely copy, distribute, display, and create derivative works from the publication for any purpose (including commercial use) without seeking permission, as long as the original authors and source are attributed. Other CC licenses add restrictions (e.g., CC-BY-NC restricts commercial use; CC-BY-ND prohibits derivative works; CC-BY-SA requires derivatives to use the same license). CC-BY is mandated by major open access funders including Wellcome Trust and NIH."
  },
  {
    id: 59,
    question: "The Retraction Watch database tracks journal retractions. The most common reason for retraction in biomedical literature is:",
    options: ["Plagiarism and duplicate publication", "Data fabrication and falsification", "Errors in statistical analysis", "Undisclosed conflicts of interest"],
    answer: 0,
    explanation: "Studies analyzing retraction patterns in biomedical literature (including analyses of Retraction Watch data) consistently show that plagiarism and duplicate/redundant publication are the most common stated reasons for retraction, followed by data problems (fabrication, falsification), error, and concerns about peer review integrity. However, when adjusting for underreporting, data fabrication and falsification may be more common than officially acknowledged. The relative frequency varies by journal, country, and field."
  },
  {
    id: 60,
    question: "Research integrity institutions in India include the Committee on Research Ethics at ICMR. The primary document guiding ethical research in India involving human participants is:",
    options: ["The Helsinki Declaration", "ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017)", "Good Clinical Practice (GCP) guidelines", "Schedule Y of the Drugs and Cosmetics Act"],
    answer: 1,
    explanation: "ICMR's National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017) is the primary document governing research ethics in India. It covers ethical principles (respect for persons, beneficence, non-maleficence, justice), informed consent, special populations (children, pregnant women, vulnerable groups), research involving biological materials, payment for participation, compensation for research injury, and institutional review board (ethics committee) functioning. It is based on the Declaration of Helsinki but adapted for the Indian context."
  },
  {
    id: 61,
    question: "Single-cell RNA sequencing (scRNA-seq) allows researchers to:",
    options: ["Sequence the entire transcriptome of bulk tissue at high depth", "Profile gene expression at the resolution of individual cells, revealing cellular heterogeneity within tissues", "Sequence only mRNA from stem cells", "Identify post-translational modifications in single cells"],
    answer: 1,
    explanation: "scRNA-seq captures and sequences the RNA from individual cells, enabling characterization of transcriptional heterogeneity within a population. This reveals distinct cell types, cell states, developmental trajectories, and rare cell populations that are masked in bulk RNA-seq (which measures average expression across thousands of cells). Applications include cell atlas projects (Human Cell Atlas), tumor microenvironment characterization, developmental biology, and identification of novel cell types."
  },
  {
    id: 62,
    question: "Spatial transcriptomics combines gene expression analysis with spatial information about tissue architecture. What distinguishes it from single-cell RNA sequencing?",
    options: ["It sequences DNA instead of RNA", "It preserves the spatial location of gene expression within a tissue section, showing where in the tissue each gene is expressed", "It analyzes gene expression in three-dimensional organoids only", "It is limited to analysis of immune cells in tissue sections"],
    answer: 1,
    explanation: "Spatial transcriptomics (e.g., Visium 10x Genomics, MERFISH, seqFISH+, Slide-seq) preserves the spatial coordinates of gene expression within a tissue section, allowing correlation of gene expression profiles with tissue architecture and morphology. Unlike scRNA-seq which dissociates tissue into single cells (losing spatial context), spatial transcriptomics shows where cells are located and how their gene expression relates to their microenvironment. Nature Methods named it method of the year 2020."
  },
  {
    id: 63,
    question: "Long-read sequencing technologies (PacBio SMRT and Oxford Nanopore) offer a major advantage over short-read (Illumina) sequencing in:",
    options: ["Lower sequencing error rates", "Lower cost per base", "Ability to sequence long repetitive regions, structural variants, and full-length transcripts without assembly artifacts", "Faster turnaround time for small genomes"],
    answer: 2,
    explanation: "Long-read sequencing platforms (PacBio reads up to 20+ kb; Nanopore reads up to megabase lengths) excel at sequencing repetitive elements, resolving complex structural variants (insertions, deletions, inversions, translocations), phasing heterozygous variants, and sequencing full-length mRNA transcripts. Short-read platforms struggle with repetitive regions and often require computational assembly that introduces artifacts. Long reads enable more complete and accurate genome assemblies (e.g., the T2T human genome assembly used Nanopore and PacBio)."
  },
  {
    id: 64,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin with sequencing) is used to map:",
    options: ["DNA methylation patterns across the genome", "Open chromatin regions (accessible chromatin) indicating active regulatory elements", "Histone modification patterns at specific loci", "Three-dimensional chromatin interactions between distant genomic regions"],
    answer: 1,
    explanation: "ATAC-seq uses a hyperactive Tn5 transposase that preferentially inserts sequencing adapters into open, accessible chromatin regions (nucleosome-free regions). Sequencing these fragments reveals the locations of open chromatin, which correspond to active regulatory elements including promoters, enhancers, and transcription factor binding sites. It requires very few cells (even single cells with scATAC-seq) and provides a genome-wide map of chromatin accessibility, useful for understanding gene regulation and cell identity."
  },
  {
    id: 65,
    question: "Hi-C sequencing is used to study genome architecture by:",
    options: ["Identifying histone modifications across the genome", "Capturing all pairwise chromatin interactions in the genome to reveal 3D nuclear organization (TADs, compartments, loops)", "Sequencing long-range structural variants using paired-end reads", "Identifying DNA-protein interactions at specific genomic loci"],
    answer: 1,
    explanation: "Hi-C (a variant of 3C/chromosome conformation capture) uses proximity ligation to capture chromatin interactions across the entire genome. Sequencing the ligation products generates a genome-wide contact map revealing three-dimensional nuclear organization, including topologically associating domains (TADs), A/B compartments (active/inactive chromatin), and specific enhancer-promoter loops. This allows understanding of how genome folding influences gene regulation and how disease-associated mutations may disrupt normal 3D organization."
  },
  {
    id: 66,
    question: "Bisulfite sequencing is the gold standard for analyzing:",
    options: ["RNA secondary structure", "DNA methylation at cytosine residues (5-methylcytosine)", "Chromatin accessibility", "Histone modifications"],
    answer: 1,
    explanation: "Bisulfite sequencing converts unmethylated cytosines to uracil (read as thymine after PCR) while methylated cytosines (5-methylcytosine) remain unconverted. Comparing bisulfite-treated sequence to the reference genome identifies the methylation status of every CpG (and non-CpG) site. Whole Genome Bisulfite Sequencing (WGBS) provides single-base resolution methylation maps across the entire genome. DNA methylation is important in gene silencing, imprinting, X-inactivation, and cancer epigenomics."
  },
  {
    id: 67,
    question: "CUT&RUN (Cleavage Under Targets and Release Using Nuclease) is an alternative to ChIP-seq for mapping:",
    options: ["Chromatin accessibility", "DNA-protein interactions (histone modifications and transcription factor binding)", "RNA-protein interactions", "Three-dimensional chromatin contacts"],
    answer: 1,
    explanation: "CUT&RUN (and its derivative CUT&TAG) is an antibody-based method for mapping protein-DNA interactions (histone modifications, transcription factor binding) as an alternative to ChIP-seq. Unlike ChIP-seq, CUT&RUN uses a protein A/G-MNase fusion that tethers to the antibody-bound target protein and cleaves nearby DNA in situ, releasing the target DNA fragments. It requires fewer cells, lower sequencing depth, has lower background, and avoids the harsh sonication/crosslinking steps of ChIP-seq."
  },
  {
    id: 68,
    question: "Optical genome mapping (OGM) analyzes DNA at the structural level by:",
    options: ["Sequencing DNA using light-based detection of nucleotide incorporation", "Imaging ultra-long DNA molecules labeled at specific sequence motifs to detect structural variants and copy number changes", "Using optical tweezers to physically map chromatin structure", "Measuring gene expression using fluorescently labeled RNA probes"],
    answer: 1,
    explanation: "Optical genome mapping (Bionano Genomics) labels high-molecular-weight DNA (up to megabase-length molecules) at specific sequence motifs (CTTAAG in DLS chemistry) with fluorescent dyes, then images the labeled DNA in nanochannel arrays. The pattern of labels creates a unique barcode for each DNA segment, enabling detection of large structural variants (SVs), copy number variations, and repeat expansions that are difficult to detect by short-read sequencing. It is used in hematologic malignancy characterization and constitutional SV detection."
  },
  {
    id: 69,
    question: "Minimal Residual Disease (MRD) detection in leukemia is used to:",
    options: ["Detect the primary diagnosis of leukemia", "Detect very low levels of residual cancer cells during and after treatment to guide therapy and predict relapse", "Screen healthy individuals for leukemia", "Monitor drug toxicity during chemotherapy"],
    answer: 1,
    explanation: "MRD refers to the small number of leukemic cells remaining in a patient after treatment when the patient is in clinical remission (no disease detectable by standard morphology). MRD detection uses highly sensitive techniques (flow cytometry, PCR, NGS-based methods) capable of detecting 1 leukemic cell in 10⁵-10⁶ normal cells. MRD status is a powerful prognostic marker in ALL, AML, CLL, and multiple myeloma, guiding decisions about treatment intensification, SCT, or therapy cessation."
  },
  {
    id: 70,
    question: "ctDNA (circulating tumor DNA) analysis as liquid biopsy can detect which of the following cancer-related changes?",
    options: ["Protein expression levels only", "Somatic mutations, copy number alterations, methylation changes, and chromosomal rearrangements derived from tumor DNA in the bloodstream", "Germline/hereditary cancer predisposition variants only", "Tumor microenvironment immune cell composition"],
    answer: 1,
    explanation: "ctDNA represents a fraction of cell-free DNA (cfDNA) in the bloodstream derived from tumor cells. Sensitive techniques including digital PCR, BEAMing, and NGS-based approaches (e.g., CAPP-Seq) can detect somatic mutations, copy number alterations, structural rearrangements, and tumor-specific methylation patterns in ctDNA. Applications include early cancer detection (e.g., Galleri multi-cancer detection test), monitoring treatment response, detecting resistance mutations, and surveillance for relapse — all from a blood sample."
  },
  {
    id: 71,
    question: "mRNA vaccines, such as those developed against SARS-CoV-2, work by:",
    options: ["Introducing a live attenuated virus that stimulates immune response", "Delivering mRNA instructions that direct host cells to produce a target antigen (e.g., spike protein) and stimulate immune response", "Injecting purified viral proteins directly to stimulate antibody production", "Using a bacterial vector to deliver viral antigens"],
    answer: 1,
    explanation: "mRNA vaccines deliver lipid nanoparticle-encapsulated mRNA encoding a target antigen (e.g., SARS-CoV-2 spike protein) into host cells. The host cell's ribosomes translate the mRNA into the antigen protein, which then stimulates both humoral and cellular immune responses. The mRNA does not integrate into the host genome and is degraded within days. The Pfizer-BioNTech (BNT162b2) and Moderna (mRNA-1273) COVID-19 vaccines were the first mRNA vaccines approved for human use."
  },
  {
    id: 72,
    question: "Viral vector vaccines (e.g., Oxford-AstraZeneca ChAdOx1 nCoV-19) use:",
    options: ["A live attenuated form of the target pathogen", "A modified virus (usually non-replicating adenovirus) as a vehicle to deliver genetic instructions for producing a target antigen", "Virus-like particles without any genetic material", "Attenuated bacterial vectors to deliver viral antigens"],
    answer: 1,
    explanation: "Viral vector vaccines use a modified, typically non-replicating virus (adenovirus) as a delivery vehicle (vector) to carry genetic instructions (usually DNA) encoding a target antigen into host cells. The Oxford-AstraZeneca vaccine uses a chimpanzee adenovirus (ChAdOx1); Johnson & Johnson uses human adenovirus 26 (Ad26). The vector infects cells, delivers the antigen-encoding DNA to the nucleus, which is transcribed to mRNA and then translated to antigen, stimulating immune response. Unlike mRNA vaccines, the antigen instructions enter the nucleus but do not integrate into the genome."
  },
  {
    id: 73,
    question: "Vaccine adjuvants are added to vaccines primarily to:",
    options: ["Stabilize the vaccine antigen during storage", "Enhance and prolong the immune response to the vaccine antigen, allowing use of smaller antigen doses", "Prevent contamination of the vaccine formulation", "Improve the solubility of the antigen in the vaccine solution"],
    answer: 1,
    explanation: "Adjuvants enhance the immunogenicity of vaccine antigens by stimulating innate immune responses, promoting antigen presentation, recruiting immune cells to the injection site, and creating a depot effect that prolongs antigen exposure. This allows dose-sparing (smaller antigen doses), extends protection, and improves responses in immunocompromised populations. Common adjuvants include aluminum salts (alum), AS04 (alum + MPL), AS01B (liposomes + MPL + QS-21 in RTS,S/Shingrix), MF59 (oil-in-water emulsion in influenza vaccines), and CpG oligonucleotides."
  },
  {
    id: 74,
    question: "Cold chain management for vaccines requires maintaining temperatures between 2-8°C for most vaccines. Vaccines that must NEVER be frozen include:",
    options: ["Oral Polio Vaccine (OPV)", "MMR vaccine", "Hepatitis B vaccine", "Varicella vaccine"],
    answer: 2,
    explanation: "Vaccines that must never be frozen include those containing adjuvants (aluminum salts) such as: Hepatitis B, DTP, DTwP, DTaP, DT, Td, Hepatitis A, HPV, meningococcal conjugate vaccines, and IPV. Freezing causes irreversible damage (flocculation of aluminum adjuvants), rendering the vaccine ineffective. The 'shake test' is used to detect previously frozen aluminum-adjuvanted vaccines. OPV, MMR, and varicella can be frozen; in fact, OPV is stored frozen and MMR/varicella are often stored at -15°C to -25°C."
  },
  {
    id: 75,
    question: "Adverse Events Following Immunization (AEFI) classification includes 'vaccine product-related reaction.' This refers to an AEFI caused by:",
    options: ["An error in vaccine prescription, preparation, or administration", "The inherent properties of the vaccine (antigen, adjuvant, preservative, or other component)", "A pre-existing condition in the vaccinee that causes the reaction", "A coincidental event unrelated to the vaccine"],
    answer: 1,
    explanation: "WHO's revised AEFI classification (2013) defines five categories: (1) Vaccine product-related reaction — caused by inherent properties of the vaccine (e.g., local inflammation due to adjuvant, fever from live vaccine replication); (2) Vaccine quality defect-related reaction — caused by manufacturing defect; (3) Immunization error-related reaction — caused by vaccine handling/administration error; (4) Immunization anxiety-related reaction — arising from anxiety about vaccination; (5) Coincidental event — not caused by vaccination but temporally related."
  },
  {
    id: 76,
    question: "Herd immunity is achieved when enough individuals in a population are immune (through vaccination or prior infection) to prevent sustained transmission. The herd immunity threshold (HIT) for measles, given R₀ of 12-18, is approximately:",
    options: ["50-60%", "70-75%", "92-95%", "99-100%"],
    answer: 2,
    explanation: "Herd immunity threshold (HIT) = 1 – (1/R₀). For measles with R₀ = 12-18, HIT = 1 – (1/12) to 1 – (1/18) = 91.7% to 94.4%. This is why measles vaccination coverage of ≥95% is required to prevent outbreaks. In comparison, COVID-19 (original strain, R₀ ≈ 2-3) has HIT of 50-67%, while mumps (R₀ ≈ 4-7) has HIT of 75-86%. The extremely high HIT for measles makes achieving and maintaining high vaccination coverage critical."
  },
  {
    id: 77,
    question: "Vaccine hesitancy, as defined by the WHO SAGE Working Group, is characterized as:",
    options: ["Complete refusal of all vaccines by an individual or community", "Delay in acceptance or refusal of vaccines despite availability of vaccination services; it is context-specific and varies across time, place, and vaccines", "Hesitancy of healthcare providers to recommend vaccines due to lack of knowledge", "The reluctance of governments to procure adequate vaccine supplies"],
    answer: 1,
    explanation: "The WHO SAGE Working Group on Vaccine Hesitancy (2015) defines vaccine hesitancy as a delay in acceptance or refusal of vaccines despite availability of vaccination services. It is context-specific, varying across time, place, and vaccines; influenced by complacency (low perceived risk), convenience (access), and confidence (trust in vaccine safety, efficacy, and the system). The 3Cs model (Complacency, Convenience, Confidence) underpins the WHO's Strategic Advisory Group of Experts framework for addressing vaccine hesitancy."
  },
  {
    id: 78,
    question: "Combination vaccines (e.g., pentavalent vaccine) offer which primary programmatic advantage?",
    options: ["They are inherently more immunogenic than individual vaccines", "They reduce the number of injections, simplify the immunization schedule, improve coverage, and decrease programmatic costs", "They have fewer side effects than individually administered vaccines", "They provide longer-lasting immunity than monovalent vaccines"],
    answer: 1,
    explanation: "Combination vaccines (e.g., pentavalent: DTP-HepB-Hib; hexavalent: DTP-HepB-Hib-IPV) reduce the number of injections a child receives, increasing acceptability, reducing pain, and improving compliance. They simplify the immunization schedule, improve vaccine coverage (fewer visits needed), and reduce programmatic costs including cold chain space, healthcare worker time, and syringes. They may not be more immunogenic — immune responses to individual antigens may be slightly lower but are generally above protective thresholds."
  },
  {
    id: 79,
    question: "Mass vaccination campaigns use which operational strategy to deliver vaccines rapidly to entire populations?",
    options: ["Only fixed-site vaccination at healthcare facilities", "Fixed posts, outreach, and mobile teams combined in a synchronized campaign using social mobilization and community engagement", "Only door-to-door vaccination in target areas", "Targeted vaccination of high-risk groups only"],
    answer: 1,
    explanation: "Mass vaccination campaigns (e.g., Supplementary Immunization Activities - SIAs for polio, measles) use a combination of fixed posts (health facilities), outreach posts (community locations), and mobile teams for hard-to-reach populations. They are conducted over a defined, short period (typically 2-4 days), synchronized across geographic areas, supported by intensive social mobilization, community engagement, and media campaigns. They aim to rapidly achieve high coverage in the target population regardless of prior vaccination status."
  },
  {
    id: 80,
    question: "Live attenuated vaccines (e.g., OPV, MMR, BCG) differ from inactivated vaccines in that live attenuated vaccines:",
    options: ["Cannot be given to immunocompromised individuals and generally require fewer doses to achieve immunity", "Can be given safely to all populations without restriction", "Require an adjuvant to stimulate an adequate immune response", "Provide shorter duration of immunity than inactivated vaccines"],
    answer: 0,
    explanation: "Live attenuated vaccines contain weakened but replicating microorganisms that mimic natural infection. They generally induce stronger, more durable immunity (often with fewer doses) as the attenuated pathogen replicates and presents multiple antigens. However, they are contraindicated in immunocompromised individuals (HIV/AIDS, primary immunodeficiency, those on immunosuppressive therapy) because the weakened pathogen can cause disease. They may also have stability issues requiring strict cold chain maintenance. Inactivated vaccines are safe in immunocompromised individuals but typically require multiple doses and adjuvants."
  },
  {
    id: 81,
    question: "The Greek root 'iatros' (as in 'iatrogenic') means:",
    options: ["Disease", "Physician", "Treatment", "Patient"],
    answer: 1,
    explanation: "The Greek root 'iatros' means physician or healer. 'Iatrogenic' (iatros + -genic, 'produced by') means 'caused by medical treatment or the physician.' Related terms include psychiatry (psyche + iatros, mind + healer), pediatrics (pais/pedo + iatros, child + healer), and geriatrics (geron + iatros, old person + healer). This root also appears in 'podiatry' (podos + iatros, foot + healer) and 'bariatric' (baros + iatros, weight + healer)."
  },
  {
    id: 82,
    question: "The Latin root 'mors/mortis' appears in medical and scientific terminology. The term 'morbidity' comes from the Latin 'morbidus.' What does 'morbidus' mean?",
    options: ["Dead or death", "Diseased or sick", "Painful", "Infected"],
    answer: 1,
    explanation: "The Latin 'morbidus' means diseased, sick, or pertaining to disease, derived from 'morbus' (disease). This gives us 'morbidity' (the condition of being diseased; also, the rate of disease in a population). It is distinct from 'mortalitas' (from mors/mortis, death), which gives us 'mortality.' Related terms include morbid anatomy (study of diseased tissue), comorbidity (co-existing diseases), and morbific (causing disease). Mors/mortis gives us 'mortality,' 'mortuary,' and 'postmortem.'"
  },
  {
    id: 83,
    question: "The eponym 'Pap smear' (Papanicolaou test) is named after Georgios Papanikolaou, who developed the technique for:",
    options: ["Detecting breast cancer in early stages", "Detecting cervical cancer by cytological examination of exfoliated cells from the cervix and vagina", "Staining histological sections for microscopic examination", "Detecting chromosomal abnormalities in prenatal diagnosis"],
    answer: 1,
    explanation: "Georgios Papanikolaou (1883-1962), a Greek-American physician and anatomist, developed the Papanicolaou stain and the Pap smear technique for detecting cervical dysplasia and cancer. He published his landmark paper 'New Cancer Diagnosis' in 1928 and the comprehensive work 'Diagnosis of Uterine Cancer by the Vaginal Smear' in 1943. The Pap smear screens for cervical intraepithelial neoplasia (CIN) and cervical cancer by cytologically examining exfoliated cells, dramatically reducing cervical cancer mortality where implemented."
  },
  {
    id: 84,
    question: "In scientific nomenclature, the binomial nomenclature system for naming organisms was formalized by:",
    options: ["Charles Darwin", "Robert Koch", "Carl Linnaeus", "Louis Pasteur"],
    answer: 2,
    explanation: "Carl Linnaeus (1707-1778), the Swedish botanist and zoologist, formalized binomial nomenclature in 'Species Plantarum' (1753) for plants and 'Systema Naturae' (10th edition, 1758) for animals. In this system, each organism is given a two-part Latin name: the genus (capitalized) and the species epithet (lowercase), e.g., Homo sapiens, Mycobacterium tuberculosis. Scientific names are italicized in print and underlined in handwriting. Linnaeus is known as the 'father of modern taxonomy.'"
  },
  {
    id: 85,
    question: "The acronym 'TORCH' in neonatal infections stands for:",
    options: ["Typhoid, Onchocerciasis, Rotavirus, Cytomegalovirus, Herpes", "Toxoplasmosis, Others, Rubella, Cytomegalovirus, Herpes simplex", "Toxoplasmosis, Onchocerciasis, Rhabdomyosarcoma, Cytomegalovirus, HIV", "Tetanus, Otitis media, Respiratory syncytial virus, Chickenpox, Herpes"],
    answer: 1,
    explanation: "TORCH is an acronym for a group of congenital infections that can cause serious morbidity and mortality in neonates: Toxoplasmosis, Others (syphilis, varicella-zoster, parvovirus B19, enterovirus, HIV, hepatitis B/C, Zika), Rubella, Cytomegalovirus (most common congenital infection), and Herpes simplex virus. TORCH infections can result in miscarriage, stillbirth, congenital anomalies (cataracts, cardiac defects, microcephaly), or neonatal disease. They may be transmitted transplacentally or during delivery."
  },
  {
    id: 86,
    question: "The correct pronunciation of 'epitome' (meaning a perfect example or summary) is:",
    options: ["EP-ih-tohm", "Eh-PIT-oh-mee", "EEP-ih-tohm", "EP-ih-tohm-ee"],
    answer: 1,
    explanation: "The correct pronunciation of 'epitome' is eh-PIT-oh-mee (4 syllables), with stress on the second syllable. It is derived from the Greek 'epitomē' (epi- + temnein, to cut into). This is a commonly mispronounced word; many incorrectly say 'ep-ih-tohm.' Similar words derived from Greek where the terminal 'e' is pronounced as a separate syllable include 'hyperbole' (hy-PER-boh-lee) and 'simile' (SIM-ih-lee). In British English, it is sometimes pronounced with slight variation but the stress remains on the second syllable."
  },
  {
    id: 87,
    question: "In linguistics, 'meronymy' refers to a semantic relationship where:",
    options: ["One word is a type of (subcategory of) another word", "One word denotes a part that belongs to a whole (part-whole relationship)", "Two words have opposite meanings", "Two words have the same meaning in different contexts"],
    answer: 1,
    explanation: "Meronymy is the semantic relationship of part-whole: a meronym is a word that denotes a part of a larger whole. For example, 'finger' is a meronym of 'hand'; 'chapter' is a meronym of 'book'; 'alveolus' is a meronym of 'lung.' This contrasts with hyponymy (is-a relationship: 'sparrow' is a hyponym of 'bird'; 'pneumonia' is a hyponym of 'respiratory disease'), antonymy (opposite meanings), and synonymy (same meanings). These semantic relationships are important in medical terminology and ontologies (e.g., SNOMED CT)."
  },
  {
    id: 88,
    question: "The term 'denotation' in linguistics refers to:",
    options: ["The emotional associations or cultural implications a word carries beyond its literal meaning", "The literal, dictionary definition of a word — its primary, objective meaning", "The grammatical function a word plays in a sentence", "The historical origin and etymology of a word"],
    answer: 1,
    explanation: "Denotation is the literal, explicit, primary meaning of a word as found in a dictionary — its objective referent. For example, the denotation of 'snake' is simply 'a legless reptile of the suborder Serpentes.' Connotation, in contrast, refers to the associated, secondary meanings a word carries — the cultural, emotional, or evaluative associations (e.g., 'snake' connotes deceitfulness, danger, evil in many cultures). In scientific writing, precise denotative language is preferred; connotative language is more common in persuasive or literary writing."
  },
  {
    id: 89,
    question: "In academic scientific writing, the appropriate 'register' is characterized by:",
    options: ["Casual, conversational language accessible to the general public", "Formal, precise, impersonal language with technical vocabulary, passive voice, and hedging language", "Emotional and persuasive language to engage the reader", "Simple vocabulary with short sentences and no jargon"],
    answer: 1,
    explanation: "Scientific academic register uses formal, impersonal, precise language — passive voice (e.g., 'specimens were collected' rather than 'we collected'), technical/discipline-specific vocabulary, hedging language (e.g., 'may suggest,' 'appears to indicate'), nominalization (converting verbs to nouns: 'investigate' → 'investigation'), complex sentence structures, and explicit logical connectors. This contrasts with popular science writing (which uses simpler language and active voice) and journalistic writing (which prioritizes narrative and accessibility)."
  },
  {
    id: 90,
    question: "The word 'nosocomial' (referring to hospital-acquired infections) is derived from the Greek root 'nosokomion.' What does this root mean?",
    options: ["Relating to disease in general", "Hospital or place of care for the sick", "Infection or contamination", "Medical treatment of the sick"],
    answer: 1,
    explanation: "The Greek root 'nosokomion' combines 'nosos' (disease) + 'komein' (to tend/care for), meaning 'a place for the care of the sick' — i.e., a hospital. Hence 'nosocomial' means pertaining to or acquired in a hospital. 'Nosos' appears in other medical terms: nosology (classification of diseases), nosogeography (geographic distribution of diseases). The modern preferred term for hospital-acquired infections is Healthcare-Associated Infections (HAIs), though 'nosocomial' remains widely used in clinical and epidemiological literature."
  },
  {
    id: 91,
    question: "According to the National Health Policy 2017 of India, what is the target for government health expenditure as a percentage of GDP?",
    options: ["1.5% of GDP", "2.5% of GDP", "5% of GDP", "8% of GDP"],
    answer: 1,
    explanation: "The National Health Policy 2017 aims to increase government health expenditure from approximately 1.15% of GDP (at the time of policy) to 2.5% of GDP by 2025. This includes increasing state government health spending to greater than 8% of their budget. The policy also sets targets for reducing out-of-pocket expenditure (OOPE) from over 60% to 25% of total health expenditure, and for increasing health workforce density, hospital beds, and coverage of essential services."
  },
  {
    id: 92,
    question: "Ayushman Bharat Health and Wellness Centers (HWCs) are operationalized by expanding which existing primary care facilities?",
    options: ["District hospitals and medical colleges", "Sub-Health Centers (SHCs) and Primary Health Centers (PHCs)", "Community Health Centers (CHCs) and urban dispensaries", "All CGHS wellness centers and ESI hospitals"],
    answer: 1,
    explanation: "Ayushman Bharat's Health and Wellness Centers (HWCs), announced in 2018, are created by upgrading Sub-Health Centers (SHCs) and Primary Health Centers (PHCs) — the first two levels of the public health system — to deliver comprehensive primary healthcare including preventive, promotive, curative, rehabilitative, and palliative services. The target was to establish 1.5 lakh HWCs by 2022. HWCs are to provide 12 service packages including reproductive and child health, infectious and NCDs, mental health, and palliative care."
  },
  {
    id: 93,
    question: "As per Indian Public Health Standards (IPHS), a Primary Health Center (PHC) caters to a population of approximately:",
    options: ["5,000-10,000 (hilly/tribal); 10,000-20,000 (plains)", "20,000-30,000 (plains); 3,000-5,000 (hilly/tribal)", "50,000 (plains); 20,000 (hilly/tribal)", "1,00,000 (plains); 50,000 (hilly/tribal)"],
    answer: 1,
    explanation: "As per IPHS 2012 norms, a Primary Health Center (PHC) serves a population of approximately 20,000-30,000 in plains/urban areas and 3,000-5,000 in hilly, tribal, and difficult terrain areas. PHCs are the first contact point between the community and the medical officer. They have one medical officer (MBBS) and paramedical and other staff, 4-6 indoor beds, and provide preventive, promotive, curative, and referral services."
  },
  {
    id: 94,
    question: "The 15th Finance Commission (2021-26) made health-specific recommendations for India. Which of the following was a key recommendation?",
    options: ["Allocating 10% of Finance Commission grants specifically for health", "Allocating a dedicated health grant to states conditional on improvement in specified health outcomes and governance reforms", "Merging all centrally sponsored health schemes into a single block grant", "Establishing a National Health Fund of Rs. 1 lakh crore for healthcare infrastructure"],
    answer: 1,
    explanation: "The 15th Finance Commission (2021-26) allocated a dedicated health sector grant of Rs. 70,051 crore to states over 5 years (FY22-26). This grant was tied to conditionalities including: states allocating at least 8% of their budget to health; establishment of an integrated health information management system; upgrading of district and sub-district hospitals; and establishing primary, secondary, and tertiary infrastructure. This was notable as it was the first time a Finance Commission earmarked a significant grant specifically for health."
  },
  {
    id: 95,
    question: "The National Medical Commission (NMC) Act 2020 replaced the Medical Council of India (MCI). Which of the following is a key provision of the NMC Act?",
    options: ["Expansion of MCI with additional government representatives", "Establishment of the National Medical Commission with four autonomous boards for undergraduate education, postgraduate education, medical assessment, and ethics", "Banning private medical colleges and making all medical education free", "Requiring all doctors to practice only in government hospitals for 5 years after graduation"],
    answer: 1,
    explanation: "The NMC Act 2020 replaced the Medical Council of India with the National Medical Commission comprising four autonomous boards: Undergraduate Medical Education Board (UGMEB), Post Graduate Medical Education Board (PGMEB), Medical Assessment and Rating Board (MARB), and Ethics and Medical Registration Board (EMRB). Key changes include the National Exit Test (NExT) as a common exit examination, allowing up to 50% seats in private medical colleges to have NMC-determined fees, and a provision allowing community health providers (Bridge course for AYUSH practitioners) that was controversial."
  },
  {
    id: 96,
    question: "According to WHO World Health Statistics, what proportion of global maternal deaths occur in low- and lower-middle-income countries?",
    options: ["50%", "70%", "95%", "99%"],
    answer: 2,
    explanation: "Approximately 94-95% of all global maternal deaths occur in low- and lower-middle-income countries, with Sub-Saharan Africa and South Asia accounting for the largest proportions. The global maternal mortality ratio (MMR) was 223 per 100,000 live births in 2020 (WHO). Sub-Saharan Africa has an MMR of approximately 545 per 100,000 compared to 11 in high-income countries. India's MMR has declined from 130 (2014-16) to 97 (2018-20) per 100,000 live births but remains a significant contributor given its birth volume."
  },
  {
    id: 97,
    question: "India's Total Fertility Rate (TFR) as per the National Family Health Survey (NFHS-5, 2019-21) is:",
    options: ["1.8", "2.0", "2.2", "2.7"],
    answer: 1,
    explanation: "India's TFR reached 2.0 as per NFHS-5 (2019-21), down from 2.2 in NFHS-4 (2015-16). This means India has achieved replacement level fertility (TFR ≈ 2.1) at the national level. However, there is significant interstate variation: Bihar (2.98), Meghalaya (2.91), and Uttar Pradesh (2.35) remain above replacement level, while many southern and western states (e.g., Goa: 1.3, Andhra Pradesh: 1.7, Tamil Nadu: 1.8) are well below replacement level."
  },
  {
    id: 98,
    question: "The Lancet Citizens' Commission on Reimagining India's Health System (2021) proposed a comprehensive reform agenda. A central recommendation was:",
    options: ["Privatizing all government hospitals to improve efficiency", "Achieving universal health coverage through a predominantly public financing model with a unified health system", "Focusing only on disease-specific vertical programs", "Eliminating Ayurveda and AYUSH from the national health system"],
    answer: 1,
    explanation: "The Lancet Citizens' Commission on Reimagining India's Health System (2021) called for transformative reforms to achieve universal health coverage (UHC) in India. Central recommendations included: increasing public health financing to 2.5-3% of GDP; establishing a unified health system that integrates public, private, and AYUSH sectors; strengthening primary healthcare; ensuring universal social health protection; addressing social determinants of health; and creating a health workforce adequate in numbers, skill mix, and distribution. The commission emphasized public financing as the primary mechanism for achieving UHC."
  },
  {
    id: 99,
    question: "According to the World Health Organization, Universal Health Coverage (UHC) means:",
    options: ["That all health services are completely free of charge for all people", "That all people have access to the health services they need without suffering financial hardship", "That only essential medicines and vaccines are available to all people", "That all people are enrolled in a government health insurance scheme"],
    answer: 1,
    explanation: "WHO defines Universal Health Coverage (UHC) as ensuring all people and communities receive the health services they need without suffering financial hardship. It includes the full spectrum of essential, quality health services — from health promotion and prevention to treatment, rehabilitation, and palliative care. UHC does not imply that all services must be free; it requires that the costs of services should not expose users to financial hardship. UHC is monitored through the UHC service coverage index and the incidence of financial hardship (catastrophic health expenditure)."
  },
  {
    id: 100,
    question: "India's current Human Resources for Health (HRH) density, as reported in recent health workforce data, faces which critical challenge?",
    options: ["An absolute surplus of physicians making it difficult to employ medical graduates", "Significant shortfalls in trained health workforce, with maldistribution between rural-urban areas and across states", "An oversupply of nurses and paramedics but a shortage of specialists", "A balanced distribution of health workers but lack of hospital infrastructure"],
    answer: 1,
    explanation: "India faces a complex HRH challenge: while the aggregate density of doctors, nurses, and midwives has improved (approximately 21 per 10,000 population, close to the WHO threshold of 23 per 10,000 for achieving UHC-related targets), there is severe maldistribution with rural areas, smaller states, and public sector facilities facing critical shortfalls. India has the largest absolute shortage of healthcare workers in the world in absolute numbers. Additionally, quality of training, geographic incentives, skill mix imbalances, and public-private sector distribution remain major challenges for achieving universal health coverage."
  }
];

export default questions;

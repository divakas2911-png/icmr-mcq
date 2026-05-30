const questions = [
  {
    id: 1,
    question: "The GRADE system classifies the quality of evidence into four levels. Which of the following correctly describes 'moderate quality' evidence in GRADE?",
    options: [
      "We are very confident that the true effect lies close to that of the estimate of the effect",
      "We are moderately confident in the effect estimate; the true effect is likely to be close to the estimate but there is a possibility that it is substantially different",
      "Our confidence in the effect estimate is limited; the true effect may be substantially different from the estimate",
      "We have very little confidence in the effect estimate; the true effect is likely to be substantially different from the estimate of effect"
    ],
    answer: 1,
    explanation: "In the GRADE system, 'Moderate quality' evidence means we are moderately confident in the effect estimate, and the true effect is likely close to the estimate but may be substantially different. 'High quality' = very confident; 'Low quality' = limited confidence; 'Very low quality' = very little confidence in the estimate."
  },
  {
    id: 2,
    question: "In a network meta-analysis (NMA), what does the concept of 'transitivity' assume?",
    options: [
      "All studies included have the same follow-up duration",
      "The distribution of effect modifiers is similar across all pairwise comparisons in the network",
      "Each intervention has been directly compared with every other intervention",
      "The heterogeneity across trials is zero for all comparisons"
    ],
    answer: 1,
    explanation: "Transitivity in NMA assumes that the distribution of effect modifiers (clinical and methodological variables) is similar across all pairwise comparisons included in the network. If transitivity holds, indirect comparisons are valid. This is the key assumption that allows combining direct and indirect evidence in an NMA."
  },
  {
    id: 3,
    question: "Individual patient data (IPD) meta-analysis is considered the 'gold standard' for meta-analysis primarily because it:",
    options: [
      "Eliminates publication bias entirely",
      "Allows standardized analysis, subgroup analyses, and time-to-event analyses using consistent definitions across studies",
      "Requires no statistical expertise to perform",
      "Can only be performed with RCTs and not observational studies"
    ],
    answer: 1,
    explanation: "IPD meta-analysis collects raw data from all eligible studies and is considered the gold standard because it allows consistent variable definitions, standardized analyses, flexible subgroup analyses, time-to-event analyses, and better handling of missing data. It does not eliminate publication bias entirely and requires considerable statistical expertise."
  },
  {
    id: 4,
    question: "In a diagnostic test accuracy meta-analysis, the Summary ROC (SROC) curve is used to:",
    options: [
      "Estimate the pooled sensitivity and specificity independently without accounting for threshold variation",
      "Account for the threshold effect by summarizing the trade-off between sensitivity and 1-specificity across different thresholds",
      "Compare the diagnostic accuracy of two tests using only specificity data",
      "Determine the cost-effectiveness of a diagnostic test"
    ],
    answer: 1,
    explanation: "The SROC curve in diagnostic test accuracy meta-analysis accounts for the threshold effect—the fact that different studies may use different cut-off values. It plots the relationship between sensitivity and 1-specificity across studies, capturing the trade-off at varying thresholds and summarizing overall diagnostic performance."
  },
  {
    id: 5,
    question: "According to Cochrane review methodology, what is the primary purpose of a 'risk of bias' assessment?",
    options: [
      "To exclude all observational studies from the review",
      "To assess systematic errors in study design or conduct that may affect the validity of study results",
      "To evaluate the statistical power of individual studies",
      "To determine the sample size required for future trials"
    ],
    answer: 1,
    explanation: "Risk of bias assessment in Cochrane reviews evaluates systematic errors (bias) in study design, conduct, or reporting that may lead to overestimation or underestimation of true effects. The Cochrane Risk of Bias tool (RoB 2 for RCTs) assesses domains like randomization, allocation concealment, blinding, and selective outcome reporting."
  },
  {
    id: 6,
    question: "An 'umbrella review' differs from a standard systematic review in that it:",
    options: [
      "Includes only unpublished studies",
      "Synthesizes evidence from multiple existing systematic reviews and meta-analyses on a broad topic",
      "Is conducted without a pre-specified protocol",
      "Focuses exclusively on qualitative evidence"
    ],
    answer: 1,
    explanation: "An umbrella review (review of reviews) synthesizes evidence from multiple existing systematic reviews and meta-analyses addressing related questions on a broad topic. It provides a high-level overview of the evidence landscape. It differs from standard systematic reviews which synthesize primary studies, and from scoping reviews which map evidence."
  },
  {
    id: 7,
    question: "A scoping review is BEST characterized by which of the following features?",
    options: [
      "It always includes a meta-analysis of pooled effect sizes",
      "It maps the extent, range, and nature of evidence on a broad topic without necessarily assessing quality",
      "It is restricted to RCTs and systematic reviews only",
      "It provides definitive clinical recommendations"
    ],
    answer: 1,
    explanation: "A scoping review maps the extent, range, and nature of evidence on a broad topic and identifies gaps in research. Unlike systematic reviews, scoping reviews do not typically assess the quality of included studies or pool effect sizes. They are useful for clarifying concepts, examining how research has been conducted, and identifying key characteristics of evidence."
  },
  {
    id: 8,
    question: "Rapid reviews differ from full systematic reviews primarily in that they:",
    options: [
      "Do not require a research question",
      "Apply methodological shortcuts such as limiting search scope or single reviewer screening to reduce time, potentially at the cost of comprehensiveness",
      "Are always more reliable than full systematic reviews",
      "Exclude grey literature in all cases"
    ],
    answer: 1,
    explanation: "Rapid reviews apply methodological shortcuts (e.g., restricting databases searched, single-reviewer screening and extraction, limiting language or date restrictions) to reduce time and resource requirements. This makes them faster but potentially less comprehensive than full systematic reviews. They are used when timely evidence synthesis is needed for urgent policy decisions."
  },
  {
    id: 9,
    question: "In health technology assessment (HTA), the incremental cost-effectiveness ratio (ICER) is defined as:",
    options: [
      "Total cost of new technology divided by total effectiveness",
      "Difference in costs between two interventions divided by the difference in their effectiveness",
      "Cost of new technology minus cost of comparator",
      "Effectiveness of new technology divided by its cost"
    ],
    answer: 1,
    explanation: "ICER = (Cost_new - Cost_comparator) / (Effectiveness_new - Effectiveness_comparator). It represents the additional cost per unit of additional health benefit (e.g., per QALY gained) of a new technology compared to its comparator. It is used against willingness-to-pay thresholds (e.g., 1-3x GDP per capita per QALY in WHO recommendations) to judge cost-effectiveness."
  },
  {
    id: 10,
    question: "In decision analysis using decision trees, 'expected value' is calculated by:",
    options: [
      "Summing all possible outcomes without weighting",
      "Multiplying each outcome value by its probability and summing across all possible outcomes",
      "Selecting the outcome with the highest probability regardless of value",
      "Averaging the best and worst case outcomes"
    ],
    answer: 1,
    explanation: "Expected value (EV) = Sum of (Probability of each outcome × Value of each outcome). In decision trees, probabilities are assigned to each branch, and utilities or costs to terminal nodes. Rolling back the tree using EV calculations identifies the decision with the highest expected utility or lowest expected cost, guiding optimal decision-making under uncertainty."
  },
  {
    id: 11,
    question: "In a mixed-effects model (also called multilevel model), the 'random effects' component accounts for:",
    options: [
      "Fixed systematic differences between treatment groups",
      "Unexplained variability between clusters or groups, acknowledging non-independence of observations within the same cluster",
      "Measurement error in the outcome variable only",
      "The interaction between all predictor variables"
    ],
    answer: 1,
    explanation: "Random effects in mixed-effects models account for the hierarchical structure of data (e.g., patients within hospitals, students within schools). They capture the variability between clusters, acknowledging that observations within the same cluster are not independent. This produces valid standard errors and inferences when data have a clustered or repeated-measures structure."
  },
  {
    id: 12,
    question: "In a generalized linear model (GLM), the 'link function' serves to:",
    options: [
      "Transform the predictor variables to have a normal distribution",
      "Relate the linear predictor to the mean of the response variable, allowing modeling of non-normal outcomes",
      "Remove outliers from the dataset before analysis",
      "Standardize all variables to have mean zero and unit variance"
    ],
    answer: 1,
    explanation: "The link function in a GLM connects the linear predictor (Xβ) to the expected value of the response variable. For logistic regression, the logit link is used; for Poisson regression, the log link. This allows GLMs to handle non-normal outcomes (binary, count, etc.) while maintaining a linear relationship on the transformed scale."
  },
  {
    id: 13,
    question: "Propensity score matching in observational studies attempts to:",
    options: [
      "Eliminate all unmeasured confounding between treatment groups",
      "Balance measured confounders between treatment groups by matching on the probability of receiving treatment given observed covariates",
      "Increase the statistical power of the study by reducing sample size",
      "Replace randomization in all study designs"
    ],
    answer: 1,
    explanation: "Propensity score (PS) is the probability of receiving treatment given observed covariates. PS matching creates comparable treatment and control groups by matching individuals with similar PS values, balancing observed confounders. Crucially, PS methods cannot control for unmeasured confounders—this remains a key limitation of observational studies."
  },
  {
    id: 14,
    question: "Instrumental variable (IV) analysis is used in observational research to:",
    options: [
      "Measure the precision of laboratory instruments",
      "Estimate causal effects in the presence of unmeasured confounding by using a variable that affects treatment but has no direct effect on the outcome except through treatment",
      "Adjust for multiple testing in genome-wide association studies",
      "Improve the sensitivity of diagnostic tests"
    ],
    answer: 1,
    explanation: "An instrumental variable (IV) must: (1) be associated with the treatment/exposure, (2) affect the outcome only through its effect on the treatment (exclusion restriction), and (3) be independent of unmeasured confounders. Mendelian randomization uses genetic variants as IVs. IV analysis can estimate causal effects even with unmeasured confounding, unlike standard regression."
  },
  {
    id: 15,
    question: "Interrupted time series (ITS) analysis is particularly useful for evaluating:",
    options: [
      "The diagnostic accuracy of a new laboratory test",
      "Population-level effects of interventions or policy changes using routinely collected data before and after implementation",
      "Individual patient outcomes in a randomized controlled trial",
      "The heritability of complex traits in family studies"
    ],
    answer: 1,
    explanation: "ITS analysis uses longitudinal population-level data collected at multiple time points before and after an intervention or policy change. It can detect changes in level and trend following the intervention, controlling for pre-existing trends. It is widely used in health services research and public health policy evaluation when RCTs are not feasible."
  },
  {
    id: 16,
    question: "The difference-in-differences (DiD) estimator in epidemiology assumes:",
    options: [
      "Random assignment of the intervention to participants",
      "That in the absence of the intervention, the outcome trends in the treatment and control groups would have been parallel (parallel trends assumption)",
      "That the control group receives a placebo intervention",
      "That all confounders are measured and included in the model"
    ],
    answer: 1,
    explanation: "DiD compares the change in outcomes over time between a group exposed to an intervention (treatment group) and an unexposed group (control group). The key assumption is 'parallel trends'—that without the intervention, both groups would have followed the same trend. It controls for time-invariant confounders and common time trends."
  },
  {
    id: 17,
    question: "Negative binomial regression is preferred over Poisson regression for count data when:",
    options: [
      "The outcome variable is binary (yes/no)",
      "Overdispersion is present, meaning the variance of the count data exceeds the mean",
      "The sample size is very small (n < 30)",
      "All count values are greater than 100"
    ],
    answer: 1,
    explanation: "Poisson regression assumes the mean equals the variance. When count data are overdispersed (variance > mean), which is common in healthcare data, Poisson regression underestimates standard errors, leading to inflated significance. Negative binomial regression adds a dispersion parameter to accommodate overdispersion, producing valid estimates and inference."
  },
  {
    id: 18,
    question: "Zero-inflated models are used when count data have:",
    options: [
      "No zero values in the dataset",
      "An excess number of zeros beyond what is expected from a Poisson or negative binomial distribution",
      "All values equal to zero",
      "A normal distribution with mean near zero"
    ],
    answer: 1,
    explanation: "Zero-inflated models (ZIP or ZINB) handle datasets with more zeros than expected under standard count distributions. They assume two processes: a binary process determining whether an observation is always-zero vs. potentially non-zero, and a count process for non-always-zero observations. Example: number of doctor visits where some individuals never visit (structural zeros) vs. those who may or may not visit."
  },
  {
    id: 19,
    question: "In multiple imputation for missing data, the MICE (Multivariate Imputation by Chained Equations) procedure:",
    options: [
      "Replaces all missing values with the mean of observed values in a single step",
      "Iteratively imputes missing values for each variable using regression models conditioned on all other variables, creating multiple complete datasets",
      "Excludes all subjects with any missing values from the analysis",
      "Uses only the last observation to replace missing values"
    ],
    answer: 1,
    explanation: "MICE creates multiple complete datasets by iteratively imputing each variable with missing data using a regression model that conditions on all other variables (including other imputed variables). Results from analyses of each dataset are combined using Rubin's rules. This approach handles missing-at-random (MAR) data appropriately and preserves uncertainty about missing values."
  },
  {
    id: 20,
    question: "In Bland-Altman analysis for method comparison, the 'limits of agreement' are defined as:",
    options: [
      "The range within which 95% of differences between the two methods are expected to lie (mean difference ± 1.96 SD of differences)",
      "The correlation coefficient between the two methods",
      "The p-value for the difference between the two methods",
      "The range of values measured by each method independently"
    ],
    answer: 0,
    explanation: "Bland-Altman analysis plots the difference between two measurement methods against their mean. The limits of agreement = mean difference ± 1.96 × SD of differences, representing the range within which 95% of differences are expected to fall. If these limits are clinically acceptable, the methods can be considered interchangeable. The correlation coefficient is not used as it is misleading for method comparison."
  },
  {
    id: 21,
    question: "India's National Programme for Control of Blindness and Visual Impairment (NPCB&VI) includes screening for which condition as part of its population-based approach?",
    options: [
      "Breast cancer",
      "Diabetic retinopathy as part of comprehensive eye care",
      "Cervical cancer",
      "Colorectal cancer"
    ],
    answer: 1,
    explanation: "NPCB&VI in India has expanded to include screening for diabetic retinopathy, recognizing the growing diabetes burden. India's national cancer screening programs (under NHM) cover oral, breast, and cervical cancers. Population-based cancer screening in India targets these three cancers using facility-based as well as community outreach approaches."
  },
  {
    id: 22,
    question: "A cervical cancer screening program using VIA (Visual Inspection with Acetic Acid) followed by cryotherapy (screen-and-treat approach) in India is considered cost-effective primarily because:",
    options: [
      "It requires expensive laboratory infrastructure",
      "It reduces the number of follow-up visits and loss to follow-up by treating screen-positive women at the same visit",
      "It has 100% sensitivity for detecting cervical cancer",
      "It is more effective than HPV vaccination"
    ],
    answer: 1,
    explanation: "The screen-and-treat approach with VIA + cryotherapy is cost-effective in low-resource settings like India because it is a single-visit approach—women who screen positive receive cryotherapy immediately, eliminating the need for follow-up visits that lead to high loss to follow-up. VIA is inexpensive, requires no laboratory, and can be performed by trained nurses/ANMs."
  },
  {
    id: 23,
    question: "Overdiagnosis in cancer screening refers to:",
    options: [
      "False positive test results that are corrected on biopsy",
      "Detection of cancers that would never have caused symptoms or death in the patient's lifetime in the absence of screening",
      "Underreporting of cancer cases in registries",
      "Misclassification of benign tumors as malignant"
    ],
    answer: 1,
    explanation: "Overdiagnosis is the detection through screening of cancers that would never have become clinically apparent (never caused symptoms or death) during the patient's lifetime. These include truly indolent tumors and those that would have regressed spontaneously. Overdiagnosis leads to overtreatment and associated harms without benefit. It is particularly relevant in thyroid, prostate (PSA screening), breast, and lung cancer screening."
  },
  {
    id: 24,
    question: "Shared decision-making (SDM) in the context of cancer screening is MOST important because:",
    options: [
      "It allows physicians to make all decisions without patient involvement",
      "Screening involves trade-offs between potential benefits and harms (false positives, overdiagnosis, anxiety) that align with individual patient values and preferences",
      "It reduces the cost of screening programs",
      "It ensures 100% compliance with screening recommendations"
    ],
    answer: 1,
    explanation: "SDM is essential in cancer screening because screening affects healthy individuals and involves genuine trade-offs: potential to detect early cancer (benefit) vs. false positives, overdiagnosis, overtreatment, anxiety, and procedural harms. Different individuals may weigh these differently based on personal values. SDM ensures patients make informed, preference-consistent decisions about whether to screen."
  },
  {
    id: 25,
    question: "A woman undergoes mammographic screening and receives a false positive result requiring a biopsy that shows no cancer. Which harm of screening has she experienced?",
    options: [
      "Overdiagnosis",
      "False positive recall leading to unnecessary investigation and psychological distress",
      "Lead time bias",
      "Length time bias"
    ],
    answer: 1,
    explanation: "False positive recall is a significant harm of screening where a woman is incorrectly identified as screen-positive, undergoes further investigations (recall imaging, biopsy), experiences anxiety and psychological distress, and ultimately receives a normal result. This is distinct from overdiagnosis (true cancer detected that wouldn't have mattered) and is a major concern in breast cancer screening programs."
  },
  {
    id: 26,
    question: "The optimal screening interval for a disease is primarily determined by:",
    options: [
      "The availability of screening infrastructure",
      "The preclinical detectable phase (sojourn time) of the disease and the natural history of the condition",
      "Patient preference only",
      "The number of health workers available"
    ],
    answer: 1,
    explanation: "The screening interval should be aligned with the preclinical detectable phase (sojourn time)—the period during which the disease is detectable by screening but before symptoms develop. Too long an interval misses interval cancers; too short leads to unnecessary screening with increased costs and harms. Natural history, disease progression rates, and test sensitivity also influence optimal interval determination."
  },
  {
    id: 27,
    question: "Risk-stratified screening (as opposed to universal screening) offers the advantage of:",
    options: [
      "Eliminating all screening-related harms",
      "Concentrating screening resources on high-risk individuals to improve benefit-harm ratio and cost-effectiveness",
      "Replacing the need for any biomarkers or risk factors",
      "Ensuring equal screening for all regardless of risk"
    ],
    answer: 1,
    explanation: "Risk-stratified screening tailors screening intensity (frequency, starting age, test type) based on individual risk levels using risk models. This concentrates screening resources where benefit is greatest, improves the positive predictive value of screening, reduces harms in low-risk individuals, and improves overall program efficiency and cost-effectiveness compared to one-size-fits-all approaches."
  },
  {
    id: 28,
    question: "Opportunistic screening differs from organized (population-based) screening programs in that:",
    options: [
      "Opportunistic screening always has better coverage",
      "Opportunistic screening occurs when individuals present for other healthcare and are offered screening without a systematic program framework, often with less quality control",
      "Organized screening programs never use invitations",
      "Opportunistic screening has lower false positive rates"
    ],
    answer: 1,
    explanation: "Opportunistic screening occurs case-by-case when patients present to healthcare for other reasons and a clinician offers screening—no systematic population invitations, registries, or quality assurance. Organized programs have defined target populations, systematic invitation, quality assurance, follow-up systems, and monitoring. Organized programs achieve better equity, coverage, and quality but require more infrastructure."
  },
  {
    id: 29,
    question: "WHO criteria for screening (Wilson and Jungner criteria) state that the condition sought should be:",
    options: [
      "Rare in the population",
      "An important health problem with a recognizable latent or early symptomatic stage",
      "Untreatable to justify early detection",
      "Curable by screening alone without follow-up treatment"
    ],
    answer: 1,
    explanation: "Wilson and Jungner (1968) criteria for screening include: the condition should be an important health problem; there should be a recognizable latent or early symptomatic stage; a suitable test should exist; treatment at early stages should be more effective than at later stages; facilities for diagnosis and treatment must be available; the test should be acceptable to the population; the natural history should be adequately understood; and screening should be continuous."
  },
  {
    id: 30,
    question: "In evaluating a national screening program, which measure best reflects the program's impact on disease-specific mortality at the population level?",
    options: [
      "Sensitivity of the screening test",
      "Reduction in disease-specific mortality in the screened population compared to an unscreened control population, ideally from an RCT",
      "Number of cases detected by screening",
      "Coverage rate of the screening program"
    ],
    answer: 1,
    explanation: "The ultimate goal of most screening programs is to reduce disease-specific mortality. The most rigorous evidence comes from RCTs of screening showing mortality reduction. Case detection alone does not prove benefit (could reflect overdiagnosis); coverage measures participation but not impact. Mortality reduction in RCTs or robust observational studies with appropriate controls is the gold standard for program evaluation."
  },
  {
    id: 31,
    question: "The One Health approach recognizes that human health, animal health, and ecosystem health are:",
    options: [
      "Completely independent domains that should be managed separately",
      "Interdependent and must be addressed through collaborative, multisectoral approaches to optimize outcomes for all three",
      "Relevant only in developing countries with poor sanitation",
      "Limited to zoonotic disease control only"
    ],
    answer: 1,
    explanation: "One Health is an integrated, unifying approach recognizing that the health of humans, animals, and the environment are closely linked and interdependent. It calls for multisectoral collaboration between human health, veterinary, and environmental sectors. Beyond zoonoses, One Health addresses antimicrobial resistance, food safety, vector-borne diseases, and emerging infections at the human-animal-environment interface."
  },
  {
    id: 32,
    question: "Climate change is projected to affect the distribution of vector-borne diseases primarily through:",
    options: [
      "Decreasing the geographic range of all vector species globally",
      "Altering temperature, humidity, and rainfall patterns that affect vector survival, reproduction, biting rates, and pathogen development within vectors",
      "Directly increasing the virulence of pathogens",
      "Reducing human immunity to infectious diseases"
    ],
    answer: 1,
    explanation: "Climate change affects vector-borne diseases by altering conditions for vector survival (temperature ranges for mosquito/tick survival), reproduction rates, seasonal activity, and geographic distribution (expanding into previously unsuitable higher altitudes and latitudes). It also affects the extrinsic incubation period of pathogens within vectors. Dengue, malaria, and Lyme disease geographic ranges are expected to expand with climate change."
  },
  {
    id: 33,
    question: "Refugees and migrants face which specific health challenge that standard health systems often fail to address?",
    options: [
      "Exclusively genetic diseases",
      "Disrupted vaccination histories, exposure to violence/trauma (mental health), barriers to healthcare access due to language, legal status, and documentation requirements",
      "Only communicable diseases absent in host countries",
      "Lifestyle diseases exclusively related to their country of origin"
    ],
    answer: 1,
    explanation: "Refugee and migrant health challenges include: incomplete/absent vaccination records, psychological trauma (PTSD, depression), language barriers, legal status barriers to healthcare access, occupational health risks, exposure to infectious diseases during transit, social determinants of poor health, and gaps in chronic disease management. Host countries must adapt health systems to provide culturally sensitive, accessible care."
  },
  {
    id: 34,
    question: "The Global Health Security Agenda (GHSA) was launched in 2014 following which major outbreak that highlighted global health security gaps?",
    options: [
      "SARS 2003",
      "West Africa Ebola epidemic 2014",
      "H1N1 influenza 2009",
      "MERS-CoV 2012"
    ],
    answer: 1,
    explanation: "The GHSA was launched in February 2014 to accelerate progress toward a world safe and secure from infectious disease threats. While planned before, it gained enormous momentum following the devastating West Africa Ebola epidemic of 2014-2016, which exposed critical gaps in global, regional, and national capacities for detection, prevention, and response to health emergencies."
  },
  {
    id: 35,
    question: "Under the International Health Regulations (IHR) 2005, a Public Health Emergency of International Concern (PHEIC) is declared by:",
    options: [
      "The affected member state's health ministry",
      "The WHO Director-General based on advice from an Emergency Committee",
      "A vote of all WHO member states",
      "The United Nations Security Council"
    ],
    answer: 1,
    explanation: "Under IHR 2005, a PHEIC is declared by the WHO Director-General after receiving advice from an Emergency Committee of independent experts. Criteria include: the event is serious, unusual or unexpected; it has significant potential for cross-border spread; and it may require a coordinated international response. Member states are required to notify WHO of events that may constitute a PHEIC."
  },
  {
    id: 36,
    question: "According to WHO terminology, disease 'elimination' differs from disease 'eradication' in that:",
    options: [
      "Elimination means zero cases worldwide without ongoing control measures",
      "Elimination refers to reducing disease incidence to zero in a defined geographic area while requiring continued intervention measures, whereas eradication means permanent worldwide reduction to zero cases",
      "Eradication applies only to vector-borne diseases",
      "Elimination is always followed automatically by eradication"
    ],
    answer: 1,
    explanation: "WHO definitions: Elimination = reduction to zero incidence/prevalence in a defined geographic area with continued control measures needed to prevent re-establishment. Eradication = permanent worldwide reduction to zero of the incidence of infection caused by a specific agent without risk of reintroduction (intervention measures no longer needed). Only smallpox and rinderpest have been globally eradicated. Polio aims for eradication."
  },
  {
    id: 37,
    question: "Ring vaccination strategy, as used in the Ebola response, involves:",
    options: [
      "Vaccinating the entire population of an affected country simultaneously",
      "Vaccinating all confirmed cases, their contacts, and contacts of contacts to create a ring of immunity around each case",
      "Vaccinating only healthcare workers at the epicenter",
      "Vaccinating animals at the human-animal interface"
    ],
    answer: 1,
    explanation: "Ring vaccination creates a 'ring' of immune individuals around each new case by vaccinating all contacts and contacts-of-contacts of confirmed cases. It targets vaccination to those at highest risk of exposure, making efficient use of limited vaccine supplies. This strategy was successfully used in the rVSV-ZEBOV Ebola vaccine trial in Guinea (2015) and subsequent outbreaks."
  },
  {
    id: 38,
    question: "Mass drug administration (MDA) for elimination of lymphatic filariasis in India uses which drug combination?",
    options: [
      "Ivermectin + albendazole",
      "Diethylcarbamazine (DEC) + albendazole, with ivermectin added in areas co-endemic for onchocerciasis",
      "Praziquantel + ivermectin",
      "Mebendazole + DEC"
    ],
    answer: 1,
    explanation: "India's National Lymphatic Filariasis Elimination Programme uses annual MDA with DEC + albendazole for the general population. Triple therapy (IDA: ivermectin + DEC + albendazole) is now recommended by WHO for areas without onchocerciasis or loiasis co-endemicity. India does not have onchocerciasis, so the standard regimen is DEC + albendazole."
  },
  {
    id: 39,
    question: "Preventive chemotherapy in the context of neglected tropical diseases (NTDs) refers to:",
    options: [
      "Treating only symptomatic individuals with NTDs",
      "Large-scale, regular administration of safe, effective medicines to at-risk populations regardless of individual infection status, to prevent disease and reduce transmission",
      "Prophylactic antibiotics given before surgery",
      "Chemoprophylaxis for malaria in travelers"
    ],
    answer: 1,
    explanation: "Preventive chemotherapy (PCT) is the population-level strategy for controlling NTDs (soil-transmitted helminths, schistosomiasis, lymphatic filariasis, trachoma, onchocerciasis) using regular administration of safe medicines to at-risk populations regardless of infection status. It leverages the safety profile of drugs like albendazole, ivermectin, praziquantel, and azithromycin to reduce morbidity and transmission at scale."
  },
  {
    id: 40,
    question: "India's Integrated Disease Surveillance Programme (IDSP) uses 'S', 'P', and 'L' forms for surveillance. The 'P' form collects data from:",
    options: [
      "Laboratory reports of confirmed cases",
      "Clinicians/physicians reporting syndromic cases from healthcare facilities",
      "Community volunteers reporting rumours",
      "Pharmacies reporting medicine sales data"
    ],
    answer: 1,
    explanation: "IDSP uses three forms: S (Syndromic) form filled by community health workers for community-level syndromic surveillance; P (Presumptive/Probable) form filled by clinicians/doctors at healthcare facilities for presumptive diagnoses; L (Laboratory) form filled by laboratories for confirmed diagnoses. This three-tiered approach enables early warning detection of disease outbreaks at the district level."
  },
  {
    id: 41,
    question: "The 'double burden of malnutrition' refers to the coexistence of:",
    options: [
      "Protein deficiency and iron deficiency anemia in the same individual",
      "Undernutrition (stunting, wasting, micronutrient deficiencies) and overnutrition (overweight, obesity, diet-related NCDs) within the same country, community, household, or individual",
      "Acute and chronic malnutrition in children under 5",
      "Vitamin A deficiency and iodine deficiency disorders"
    ],
    answer: 1,
    explanation: "The double burden of malnutrition is the simultaneous occurrence of undernutrition and overnutrition at the population level—in the same country, community, household, or even individual (e.g., stunted overweight children). India exemplifies this with high rates of stunting/wasting alongside rapidly increasing overweight/obesity and diet-related NCDs. Both ends of the malnutrition spectrum share common drivers including poverty, food insecurity, and nutrition transition."
  },
  {
    id: 42,
    question: "Hidden hunger refers to:",
    options: [
      "Severe acute malnutrition in children who appear normal on visual inspection",
      "Micronutrient deficiency (inadequate vitamins and minerals) despite adequate or excess caloric intake, often with no visible signs",
      "Hunger experienced by homeless populations not captured by surveys",
      "Subclinical protein-energy malnutrition in adults"
    ],
    answer: 1,
    explanation: "Hidden hunger is micronutrient malnutrition—deficiency of essential vitamins (A, D, B12, folate) and minerals (iron, zinc, iodine) despite consuming sufficient calories. It affects over 2 billion people globally and is called 'hidden' because affected individuals may appear well-nourished. It impairs immune function, cognitive development, productivity, and maternal-child outcomes."
  },
  {
    id: 43,
    question: "According to WHO definitions, linear growth faltering leading to 'stunting' in children under 5 is defined as height-for-age Z-score (HAZ) of:",
    options: [
      "Less than -1 SD below WHO standards",
      "Less than -2 SD below WHO median standards",
      "Less than -3 SD below WHO median standards",
      "Less than -1.5 SD below WHO median standards"
    ],
    answer: 1,
    explanation: "Stunting (chronic undernutrition) is defined as HAZ < -2 SD below the WHO Child Growth Standards median. Severe stunting is HAZ < -3 SD. Stunting reflects cumulative chronic inadequate nutrition and recurrent infections, primarily in the first 1000 days. India has the highest absolute number of stunted children globally, though prevalence has been declining."
  },
  {
    id: 44,
    question: "In severe acute malnutrition (SAM), the WHO F-75 therapeutic formula is used during which phase of management?",
    options: [
      "Rehabilitation phase to achieve catch-up growth",
      "Stabilization phase to stabilize metabolic complications and prevent hypoglycemia, hypothermia, and electrolyte imbalances",
      "Transition phase before discharge",
      "Community-based management as the primary treatment"
    ],
    answer: 1,
    explanation: "F-75 (75 kcal/100 ml) is used during the initial stabilization phase of inpatient SAM management. It provides limited energy to avoid worsening metabolic stress while stabilizing the child, preventing hypoglycemia, hypothermia, and correcting electrolyte imbalances. F-100 (100 kcal/100 ml) is used in the rehabilitation phase for catch-up growth. RUTF replaces F-100 in community-based management."
  },
  {
    id: 45,
    question: "Community-based Management of Acute Malnutrition (CMAM) represents a shift from facility-based care. Its key advantage is:",
    options: [
      "It requires hospitalization for all children with SAM",
      "It treats uncomplicated SAM at home using RUTF, dramatically increasing coverage and reducing costs compared to inpatient-only approaches",
      "It is restricted to children over 5 years of age",
      "It eliminates the need for therapeutic foods"
    ],
    answer: 1,
    explanation: "CMAM allows treatment of uncomplicated SAM (no medical complications, moderate appetite) at home with Ready-to-Use Therapeutic Food (RUTF), reserving inpatient care for complicated SAM. This dramatically increases coverage (90%+ in some programs vs. 10-20% for inpatient-only), reduces stigma, prevents nosocomial infections, and lowers costs. CMAM has transformed SAM management globally."
  },
  {
    id: 46,
    question: "Ready-to-Use Therapeutic Food (RUTF) has which key advantage over milk-based therapeutic foods (F-100)?",
    options: [
      "It is less energy-dense",
      "It is water-based and does not support bacterial growth, does not require refrigeration, can be used at home, and has a longer shelf life",
      "It requires cooking before administration",
      "It contains lower protein content"
    ],
    answer: 1,
    explanation: "RUTF (typically peanut-based, 500 kcal/92g sachet) is lipid-based with very low water activity, preventing bacterial growth without refrigeration. This allows home-based treatment (key to CMAM), gives it a long shelf life (6 months+), and enables community distribution. F-100 is water-based, requires refrigeration, and must be consumed under supervision, limiting its use to inpatient settings."
  },
  {
    id: 47,
    question: "India's Pradhan Mantri Poshan Shakti Nirman (PM POSHAN) scheme, formerly Mid-Day Meal Scheme, primarily aims to:",
    options: [
      "Provide supplementary nutrition to pregnant women",
      "Improve nutritional status and increase school enrollment, retention, and attendance of children in government schools by providing hot cooked meals",
      "Distribute iron and folic acid tablets to adolescent girls",
      "Treat severe acute malnutrition in children under 5"
    ],
    answer: 1,
    explanation: "PM POSHAN (renamed from Mid-Day Meal Scheme in 2021) provides hot cooked meals to children in government and government-aided schools (Classes I-VIII). It aims to improve nutritional status of school-age children, increase school enrollment and attendance (especially girls), reduce classroom hunger, and address micronutrient deficiencies. It is one of the world's largest school feeding programs."
  },
  {
    id: 48,
    question: "The Public Distribution System (PDS) in India provides subsidized food grains under which act?",
    options: [
      "Essential Commodities Act, 1955",
      "National Food Security Act (NFSA), 2013, which guarantees subsidized food grains to up to 75% of rural and 50% of urban population",
      "Prevention of Food Adulteration Act, 1954",
      "Food Safety and Standards Act, 2006"
    ],
    answer: 1,
    explanation: "The National Food Security Act (NFSA), 2013 provides the legal framework for India's PDS, guaranteeing subsidized food grains (rice at Rs.3/kg, wheat at Rs.2/kg, coarse grains at Rs.1/kg) to up to 75% of rural and 50% of urban population. Priority Households receive 5 kg/person/month and Antyodaya Anna Yojana (AAY) households receive 35 kg/household/month."
  },
  {
    id: 49,
    question: "India's National Nutrition Strategy (NNS) 2017 adopts which approach to address malnutrition?",
    options: [
      "Vertical, single-program approach targeting only stunting",
      "Lifecycle approach addressing malnutrition across all stages from preconception through adolescence, with convergence of nutrition-specific and nutrition-sensitive interventions",
      "Emergency nutrition response focused only on acute malnutrition",
      "Market-based approach relying solely on commercial food fortification"
    ],
    answer: 1,
    explanation: "India's NNS 2017 adopts a lifecycle approach targeting all stages (preconception, pregnancy, lactation, infancy, early childhood, school age, adolescence). It calls for convergence of nutrition-specific interventions (direct nutrition programs) and nutrition-sensitive interventions (agriculture, WASH, social protection, education, women's empowerment). POSHAN Abhiyaan (now Mission POSHAN 2.0) operationalizes this strategy."
  },
  {
    id: 50,
    question: "The 'Eat Right India' movement launched by FSSAI primarily focuses on:",
    options: [
      "Distribution of free meals to below-poverty-line households",
      "Promoting safe, healthy, and sustainable food choices among consumers and improving food safety standards across the food supply chain",
      "Regulating agricultural pesticide use only",
      "Mandatory fortification of all food products"
    ],
    answer: 1,
    explanation: "Eat Right India is FSSAI's flagship movement aimed at transforming the food ecosystem. It promotes: eating right (healthy diets, reduced salt/sugar/fat), safe food (food safety compliance), sustainable food (reducing food waste, eco-friendly choices), and local/seasonal foods. It works with consumers, food businesses, and regulators through campaigns, food fortification, hygiene certification, and 'Eat Right Campus' initiatives."
  },
  {
    id: 51,
    question: "Dual-use research of concern (DURC) in biology refers to:",
    options: [
      "Research conducted simultaneously in two different countries",
      "Life sciences research that, while conducted for legitimate purposes, could be misused to pose a threat to public health, agriculture, plants, animals, the environment, or national security",
      "Research funded by both public and private sources",
      "Studies that can be applied to both humans and animals"
    ],
    answer: 1,
    explanation: "DURC is legitimate research with the potential to be directly misapplied to cause significant harm. The US NSABB definition highlights research that creates new or enhanced pathogens with increased transmissibility, virulence, immune evasion, or antibiotic resistance. Oversight frameworks require institutional and governmental review of DURC before publication or funding. The 2011-12 H5N1 gain-of-function controversy exemplified DURC concerns."
  },
  {
    id: 52,
    question: "Gain-of-function (GOF) research involving potential pandemic pathogens (PPP) is ethically controversial because:",
    options: [
      "It is never scientifically valuable",
      "It involves enhancing pathogen properties (transmissibility, virulence) that could provide pandemic preparedness insights but also creates risks of laboratory accidents or deliberate misuse that may outweigh benefits",
      "It is only conducted in developing countries",
      "It exclusively studies non-human pathogens"
    ],
    answer: 1,
    explanation: "GOF-PPP research enhances pathogen characteristics to understand pandemic potential and develop countermeasures. Ethical controversy centers on the risk-benefit calculus: laboratory escapes could cause pandemics (as feared with enhanced H5N1), and publications could guide bioweapons development. The US imposed a funding pause (2014-2017) and developed a P3CO Review Framework for enhanced oversight of such research."
  },
  {
    id: 53,
    question: "The key ethical concern unique to synthetic biology that differs from conventional genetic engineering is:",
    options: [
      "The use of natural DNA sequences",
      "The ability to design and construct entirely novel biological systems or reconstruct extinct pathogens from scratch, potentially lowering barriers to creating dangerous agents",
      "Restriction to plant biology only",
      "The requirement for large laboratory facilities"
    ],
    answer: 1,
    explanation: "Synthetic biology allows de novo synthesis of genetic sequences and creation of novel organisms not found in nature—including potentially dangerous pathogens. The reconstruction of extinct viruses (poliovirus from scratch in 2002, 1918 flu virus) demonstrated feasibility. Unlike conventional genetic engineering (modifications to existing organisms), synthetic biology could lower barriers to creating bioweapons, raising unique biosecurity and dual-use concerns."
  },
  {
    id: 54,
    question: "In human challenge trials (deliberate infection studies), the key ethical justification for intentionally infecting healthy volunteers is:",
    options: [
      "Such trials do not require ethical review",
      "They can provide faster and more definitive efficacy data for vaccines/treatments with potentially large public health benefits, when conducted with appropriate risk minimization, full informed consent, and fair compensation without undue inducement",
      "Volunteers are usually prisoners who have no choice",
      "The infection is always non-harmful with no risk to participants"
    ],
    answer: 1,
    explanation: "Human challenge trials are ethically justified when: risk to participants is minimized (using established challenge agents, close monitoring, rescue therapy available), potential public health benefit is substantial (vaccine development during outbreaks), robust informed consent is obtained, fair compensation is provided without constituting undue inducement, and independent ethics oversight is in place. They were used in COVID-19 vaccine development and malaria vaccine research."
  },
  {
    id: 55,
    question: "Adaptive platform trials, such as RECOVERY and SOLIDARITY, raise which specific ethical consideration?",
    options: [
      "They are always unethical because they change treatment allocations",
      "They require ongoing ethical review as arms are added or dropped based on interim results, and equipoise must be maintained—dropping arms quickly when evidence emerges challenges traditional trial ethics frameworks",
      "They do not require informed consent",
      "They can only test one intervention at a time"
    ],
    answer: 1,
    explanation: "Adaptive platform trials test multiple interventions simultaneously, dropping ineffective/harmful arms and adding new ones based on pre-specified rules using interim analyses. Ethical considerations include: maintaining genuine equipoise as evidence accumulates, re-consent obligations when trial design changes, complexity of communicating adaptive designs in informed consent, fair allocation of participants across arms, and the role of independent data monitoring committees."
  },
  {
    id: 56,
    question: "Pragmatic consent models in clinical research are most appropriate when:",
    options: [
      "All participants are vulnerable populations requiring extra protection",
      "Research is embedded in routine clinical care with minimal extra burden, interventions are already standard of care with low incremental risk, and traditional consent would make the research infeasible",
      "Research involves experimental high-risk interventions",
      "Participants are unable to provide any form of consent"
    ],
    answer: 1,
    explanation: "Pragmatic consent applies when research is integrated into routine care (e.g., cluster RCTs of quality improvement interventions), individual consent is impractical (cluster-level randomization), interventions are standard-of-care comparisons with minimal incremental risk, and research questions are of genuine uncertainty. Examples include cluster RCTs comparing standard antibiotic regimens where individual consent for each comparison would be infeasible."
  },
  {
    id: 57,
    question: "Broad consent for biobank research allows participants to consent to:",
    options: [
      "A single, specific, fully described research project",
      "Storage and future use of their biological samples and data for a range of future research, with governance oversight ensuring uses remain within agreed parameters",
      "Use of their samples for commercial purposes without restriction",
      "Research conducted without any oversight or review"
    ],
    answer: 1,
    explanation: "Broad consent (endorsed by CIOMS 2016 and some national frameworks) allows biobank participants to consent once to storage and use of samples/data for a broad range of future research within defined parameters. It avoids re-consenting for each new study (impractical at scale), but requires robust governance—ethics review, oversight board, participant engagement, withdrawal rights, and feedback mechanisms."
  },
  {
    id: 58,
    question: "Dynamic consent in biobank research differs from broad consent in that it:",
    options: [
      "Requires consent only once at enrollment with no further contact",
      "Uses digital platforms to enable participants to continuously update their consent preferences for specific research projects over time",
      "Eliminates the need for any ethics oversight",
      "Is restricted to genetic research only"
    ],
    answer: 1,
    explanation: "Dynamic consent uses digital/online platforms to maintain ongoing, interactive communication with biobank participants. Participants can update preferences for specific research uses, receive updates about how their samples are used, and make granular consent decisions over time. It respects participant autonomy and addresses the limitations of static one-time consent, though it raises concerns about digital access equity and consent fatigue."
  },
  {
    id: 59,
    question: "The primary ethical concern with using AI algorithms for clinical diagnosis is:",
    options: [
      "AI systems are always more accurate than clinicians",
      "Lack of transparency ('black box' problem), potential for algorithmic bias leading to unequal performance across demographic groups, and questions of accountability when AI-aided decisions cause harm",
      "AI diagnosis is faster than human diagnosis",
      "AI systems require no training data"
    ],
    answer: 1,
    explanation: "AI diagnostic algorithms raise ethical concerns including: opacity of decision-making (black box problem) hindering explanation and appeal; algorithmic bias when training data underrepresents certain populations, leading to worse performance for minorities, women, or lower-income groups; liability gaps when AI-aided decisions cause harm; over-reliance reducing clinician skills; and data privacy issues in AI model development."
  },
  {
    id: 60,
    question: "Algorithmic bias in healthcare AI can arise from which of the following mechanisms?",
    options: [
      "Using too much training data",
      "Training data that underrepresents certain demographic groups, leading to differential performance and perpetuating or amplifying existing health disparities",
      "Having too many parameters in the model",
      "Using validated gold standard labels for training"
    ],
    answer: 1,
    explanation: "Algorithmic bias in healthcare AI most commonly arises from: unrepresentative training data (historical data reflecting existing disparities, underrepresentation of minorities, women, elderly); biased labels (using diagnoses influenced by clinician bias as ground truth); feature selection bias; feedback loops amplifying existing biases; and proxy variables that correlate with protected characteristics. This can lead to AI performing worse for already disadvantaged groups."
  },
  {
    id: 61,
    question: "Epigenetic inheritance refers to:",
    options: [
      "Transmission of DNA sequence mutations from parents to offspring",
      "Transmission of heritable changes in gene expression that do not involve alterations to the DNA sequence itself, potentially across generations through mechanisms such as DNA methylation and histone modification patterns",
      "Inheritance of mitochondrial DNA only",
      "Random mutations in germline cells"
    ],
    answer: 1,
    explanation: "Epigenetic inheritance involves transmission of gene expression patterns (via DNA methylation marks, histone modifications, non-coding RNAs) to daughter cells (mitotic) or offspring (transgenerational) without changes to DNA sequence. Trans-generational epigenetic inheritance in humans is still debated but supported by studies like the Dutch Hunger Winter showing effects across generations from prenatal famine exposure."
  },
  {
    id: 62,
    question: "Genomic imprinting results in genes being expressed in a parent-of-origin specific manner. The best clinical example of loss of imprinting of chromosome 15q11-13 is:",
    options: [
      "Fragile X syndrome (paternal imprinting)",
      "Prader-Willi syndrome (paternal deletion/maternal imprinting) and Angelman syndrome (maternal deletion/paternal imprinting) arising from the same chromosomal region depending on parental origin",
      "Down syndrome (trisomy 21)",
      "Turner syndrome (monosomy X)"
    ],
    answer: 1,
    explanation: "Chromosome 15q11-13 is a classic imprinted region. Prader-Willi syndrome results from loss of paternally expressed genes (paternal deletion, maternal UPD, or imprinting defect)—characterized by hypotonia, hyperphagia, obesity. Angelman syndrome results from loss of maternally expressed UBE3A (maternal deletion, paternal UPD, or mutation)—characterized by severe intellectual disability, seizures, happy demeanor. Same region, opposite parent-of-origin effects."
  },
  {
    id: 63,
    question: "In humans, X-inactivation (lyonization) is initiated by expression of the XIST gene on the X chromosome to be inactivated. This process results in:",
    options: [
      "Complete inactivation of all genes on the inactivated X chromosome",
      "Mostly random inactivation of one X chromosome in each somatic cell early in embryogenesis, with some genes escaping inactivation, explaining why females with Turner syndrome (45,X) have phenotypic features",
      "Inactivation of only the paternal X chromosome in all females",
      "Inactivation occurring only in germ cells"
    ],
    answer: 1,
    explanation: "X-inactivation in females is mostly random (either maternal or paternal X inactivated in each cell), with the pattern being clonal. About 15-25% of X-linked genes escape inactivation. The inactive X forms the Barr body. Skewed X-inactivation occurs in some conditions. In Turner syndrome (45,X), some features occur because there is only one copy of genes that normally escape inactivation on both X chromosomes."
  },
  {
    id: 64,
    question: "Myotonic dystrophy type 1 (DM1) is caused by a CTG trinucleotide repeat expansion in the DMPK gene and demonstrates 'anticipation.' Anticipation in trinucleotide repeat disorders means:",
    options: [
      "The disease presents earlier in life in the first generation affected",
      "The repeat expansion tends to increase in successive generations, causing earlier onset and more severe disease in offspring compared to their affected parent",
      "The disease skips generations",
      "The mutation reverts to normal in subsequent generations"
    ],
    answer: 1,
    explanation: "Anticipation means that with each successive generation, the trinucleotide repeat expansion tends to increase (instability during meiosis), leading to earlier age of onset and greater disease severity. DM1 shows maternal anticipation (expansions are larger when transmitted from affected mothers). Congenital DM1 occurs almost exclusively with maternal transmission of very large expansions (>1000 CTG repeats)."
  },
  {
    id: 65,
    question: "Copy number variations (CNVs) are a major source of genetic variation. The 22q11.2 deletion syndrome (DiGeorge/velocardiofacial syndrome) is the most common microdeletion syndrome caused by CNV and is associated with:",
    options: [
      "Trisomy of chromosome 22",
      "Deletion of approximately 3 Mb at chromosome 22q11.2, causing conotruncal cardiac defects, palatal abnormalities, hypocalcemia, immune deficiency (thymic aplasia), and psychiatric illness",
      "Duplication of chromosome 22",
      "Point mutation in the TBX1 gene only"
    ],
    answer: 1,
    explanation: "22q11.2 deletion syndrome (1 in 4000 live births, most common microdeletion syndrome) results from a ~3 Mb deletion detectable by FISH or chromosomal microarray. TBX1 haploinsufficiency is the primary cause of the cardiac and palatal features. The CATCH-22 mnemonic covers key features: Cardiac defects (conotruncal), Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q11 deletion."
  },
  {
    id: 66,
    question: "Pharmacogenomics of CYP2D6 is clinically important because CYP2D6 is responsible for metabolizing approximately 25% of all drugs. A patient who is a CYP2D6 'poor metabolizer' taking codeine will:",
    options: [
      "Rapidly convert codeine to morphine, causing toxicity",
      "Have reduced conversion of codeine to morphine (active metabolite), resulting in inadequate analgesia, as CYP2D6 O-demethylates codeine to morphine",
      "Have no clinically significant difference from extensive metabolizers",
      "Experience faster elimination of codeine"
    ],
    answer: 1,
    explanation: "CYP2D6 O-demethylates codeine to its active metabolite morphine. Poor metabolizers (5-10% Caucasians, less common in Asians) have little/no CYP2D6 activity, so codeine remains largely unconverted, providing inadequate analgesia. Ultra-rapid metabolizers (CYP2D6 gene duplication) convert codeine rapidly to excessive morphine, causing toxicity—FDA warnings against codeine in breastfeeding mothers who are ultra-rapid metabolizers (morphine passes to infant in milk)."
  },
  {
    id: 67,
    question: "The concept of 'theranostics' in personalized medicine refers to:",
    options: [
      "Treating diseases with heat therapy",
      "The integration of diagnostics (including molecular profiling) with therapeutic decision-making, where a diagnostic test determines whether a specific targeted therapy will be effective for an individual patient",
      "Using therapeutic drugs for diagnostic purposes only",
      "A branch of nuclear medicine unrelated to genomics"
    ],
    answer: 1,
    explanation: "Theranostics combines 'therapeutics' and 'diagnostics'—using diagnostic information (biomarkers, molecular profiling, imaging) to guide targeted therapy selection. Examples include: HER2 testing before trastuzumab in breast cancer, KRAS mutation testing before anti-EGFR therapy in colorectal cancer, BRCA testing before PARP inhibitors. In nuclear medicine, theranostics uses the same targeting molecule for both diagnostic imaging and targeted radionuclide therapy."
  },
  {
    id: 68,
    question: "Polygenic risk scores (PRS) aggregate effects of thousands of common SNPs to predict disease risk. The current main limitation of PRS for clinical application in non-European populations is:",
    options: [
      "PRS cannot predict any disease risk",
      "Most large GWAS used to derive PRS were conducted in European ancestry populations, leading to reduced predictive accuracy (transferability) when applied to other ancestral groups",
      "PRS scores are too expensive to calculate",
      "PRS can only be applied to monogenic disorders"
    ],
    answer: 1,
    explanation: "PRS are derived from GWAS summary statistics. The vast majority of GWAS participants have been of European ancestry (~79% historically), creating transferability problems: effect sizes and LD patterns differ between ancestral populations, so PRS trained on European cohorts have lower predictive accuracy in South Asian, African, or East Asian populations. This is a major equity concern, as clinical use of biased PRS could worsen health disparities."
  },
  {
    id: 69,
    question: "Direct-to-consumer (DTC) genetic testing raises which primary ethical concern?",
    options: [
      "The tests are always inaccurate",
      "Results are provided without adequate genetic counseling, potentially causing psychological harm from misinterpretation, false reassurance, or distress; privacy risks from sharing data with third parties; and potential discrimination",
      "They are only available to medical professionals",
      "DTC tests exclusively analyze environmental rather than genetic factors"
    ],
    answer: 1,
    explanation: "DTC genetic testing (e.g., 23andMe, AncestryDNA) provides genetic results directly to consumers without clinician involvement. Key ethical concerns: results (especially uncertain/variant-of-unknown-significance findings) may be misinterpreted without counseling; privacy—companies share or sell data to third parties; potential for genetic discrimination in insurance/employment; incidental findings of serious conditions without support; familial implications affecting relatives who have not consented."
  },
  {
    id: 70,
    question: "Structural variants (SVs) in the genome, such as inversions and translocations, are best detected by which modern genomic technique?",
    options: [
      "Sanger sequencing",
      "Long-read sequencing (third-generation sequencing technologies like PacBio SMRT and Oxford Nanopore) which can span repetitive regions and accurately characterize breakpoints of large SVs",
      "Polymerase chain reaction (PCR)",
      "Southern blotting"
    ],
    answer: 1,
    explanation: "Structural variants (>50 bp) include deletions, duplications, inversions, translocations, and complex rearrangements. Short-read NGS (Illumina) misses many SVs, especially in repetitive regions. Long-read sequencing (PacBio, Oxford Nanopore) produces reads >10-100 kb that span SVs and repetitive elements, enabling comprehensive SV detection. Combined approaches (long-read sequencing + optical genome mapping) provide the most complete SV characterization."
  },
  {
    id: 71,
    question: "Bacteriophage therapy for antibiotic-resistant infections faces which major regulatory challenge?",
    options: [
      "Bacteriophages are too expensive to produce",
      "Phages are highly specific to individual bacterial strains, requiring personalized phage selection, which does not fit the traditional regulatory paradigm designed for broadly applicable drugs",
      "Bacteriophages cannot kill antibiotic-resistant bacteria",
      "Phage therapy has never been used in clinical settings"
    ],
    answer: 1,
    explanation: "Bacteriophage therapy's Achilles heel is high host-specificity—a phage that kills one bacterial strain may not kill another of the same species. This requires identifying the patient's specific infecting strain, finding/engineering effective phages, rapid production, and administration—a personalized medicine approach poorly suited to traditional drug approval pathways. The FDA has used 'expanded access' and 'compassionate use' for individual cases while regulatory frameworks evolve."
  },
  {
    id: 72,
    question: "Fecal Microbiota Transplantation (FMT) has the strongest evidence base for treating which condition?",
    options: [
      "Inflammatory bowel disease (Crohn's disease)",
      "Recurrent Clostridioides difficile infection (rCDI), where FMT from healthy donors reconstitutes healthy gut microbiota",
      "Irritable bowel syndrome",
      "Colorectal cancer"
    ],
    answer: 1,
    explanation: "FMT has the strongest evidence for recurrent C. difficile infection, with cure rates of 80-90% vs. 20-30% for antibiotics alone in multiply recurrent cases. FDA approved the first FMT products (Rebyota in 2022, Vowst in 2023) specifically for prevention of rCDI recurrence. Evidence for IBD, IBS, obesity, and other conditions is promising but less definitive. FMT works by restoring microbiome diversity disrupted by antibiotics."
  },
  {
    id: 73,
    question: "ESKAPE pathogens represent the leading causes of nosocomial infections globally. Which group of organisms does 'ESKAPE' represent?",
    options: [
      "Escherichia coli, Salmonella, Klebsiella, Acinetobacter, Pseudomonas, Enterobacter",
      "Enterococcus faecium, Staphylococcus aureus, Klebsiella pneumoniae, Acinetobacter baumannii, Pseudomonas aeruginosa, Enterobacter species",
      "Enterococcus, Streptococcus, Klebsiella, Acinetobacter, Proteus, E. coli",
      "Escherichia, Salmonella, Klebsiella, Aspergillus, Pseudomonas, Enterobacter"
    ],
    answer: 1,
    explanation: "ESKAPE: Enterococcus faecium (VRE), Staphylococcus aureus (MRSA), Klebsiella pneumoniae (ESBL/carbapenemase-producing), Acinetobacter baumannii (pan-drug resistant), Pseudomonas aeruginosa (multidrug resistant), and Enterobacter species. These organisms effectively 'escape' the effects of antibiotics and represent WHO priority pathogens for which new antibiotics are urgently needed."
  },
  {
    id: 74,
    question: "The most clinically important carbapenem resistance mechanism in Klebsiella pneumoniae in India is:",
    options: [
      "PBP modification (as in MRSA)",
      "Production of carbapenemase enzymes, particularly KPC (Klebsiella pneumoniae carbapenemase) and NDM-1 (New Delhi Metallo-beta-lactamase), which hydrolyze carbapenems",
      "Reduced outer membrane permeability alone without any enzyme production",
      "Efflux pump overexpression as the sole mechanism"
    ],
    answer: 1,
    explanation: "Carbapenem resistance in K. pneumoniae is primarily enzyme-mediated. NDM-1 (first described in New Delhi in 2009, encoded on mobile genetic elements) is highly prevalent in India and has spread globally. KPC is common in the US and Europe. NDM-producing organisms are often pan-drug resistant, leaving only polymyxins (colistin), tigecycline, or novel combinations. Porin loss and efflux pumps contribute but rarely alone."
  },
  {
    id: 75,
    question: "MRSA (Methicillin-Resistant Staphylococcus aureus) resistance to beta-lactam antibiotics is mediated by:",
    options: [
      "Penicillinase enzyme production (beta-lactamase)",
      "Acquisition of the mecA gene encoding an altered penicillin-binding protein (PBP2a/PBP2') with low affinity for all beta-lactams, carried on a mobile genetic element called SCCmec",
      "Efflux pump overexpression",
      "Modification of the outer membrane porin channels"
    ],
    answer: 1,
    explanation: "MRSA resistance is mediated by mecA (or mecC) gene on the staphylococcal cassette chromosome mec (SCCmec). mecA encodes PBP2a, an altered penicillin-binding protein with very low affinity for all beta-lactams including methicillin, oxacillin, and carbapenems. Standard beta-lactams cannot inhibit PBP2a-mediated cell wall synthesis. New agents active against MRSA include ceftaroline (ceftobiprole)—5th generation cephalosporins with PBP2a activity."
  },
  {
    id: 76,
    question: "Extended-spectrum beta-lactamases (ESBLs) in Enterobacteriaceae are clinically important because they:",
    options: [
      "Only hydrolyze penicillins and not cephalosporins",
      "Can hydrolyze most penicillins and cephalosporins (including 3rd and 4th generation) but not carbapenems, and are encoded on transferable plasmids enabling rapid spread; treatment relies on carbapenems",
      "Confer resistance to carbapenems and colistin simultaneously",
      "Are not transferable between different bacterial species"
    ],
    answer: 1,
    explanation: "ESBLs (most commonly CTX-M, TEM, SHV variants) hydrolyze penicillins, narrow and extended-spectrum cephalosporins, and aztreonam, but NOT carbapenems. They are inhibited by clavulanic acid (diagnostic feature), encoded on transferable plasmids, often co-carry resistance to aminoglycosides, fluoroquinolones, and trimethoprim. Carbapenems remain treatment of choice. India has very high ESBL rates in community and hospital E. coli and Klebsiella."
  },
  {
    id: 77,
    question: "The mcr genes conferring colistin resistance are of particular concern because:",
    options: [
      "They are chromosomally encoded and thus cannot spread between bacteria",
      "They are located on transferable plasmids, enabling horizontal transfer of colistin resistance between bacteria, threatening colistin as the last-resort antibiotic for carbapenem-resistant infections",
      "They affect only Gram-positive bacteria",
      "They were first discovered in human clinical isolates before animal isolates"
    ],
    answer: 1,
    explanation: "mcr genes (mcr-1 through mcr-9) encode phosphoethanolamine transferases that modify lipid A in the outer membrane, reducing colistin binding. Critically, they are plasmid-encoded, enabling rapid horizontal gene transfer between Enterobacteriaceae. First discovered in China in animal and human E. coli isolates (2015), they have since spread globally. Colistin was widely used as a veterinary growth promoter, selecting for mcr; China banned its veterinary use in 2017."
  },
  {
    id: 78,
    question: "Rapid antimicrobial susceptibility testing (AST) methods such as MALDI-TOF MS combined with phenotypic rapid AST aim to:",
    options: [
      "Replace the need for AST entirely in clinical practice",
      "Reduce the time to species identification and susceptibility reporting from 48-72 hours to 4-8 hours, enabling earlier appropriate antibiotic therapy and reducing selection pressure from empiric broad-spectrum antibiotics",
      "Identify only resistance genes without phenotypic confirmation",
      "Provide results only for Gram-positive organisms"
    ],
    answer: 1,
    explanation: "Traditional culture and AST takes 48-72 hours. Rapid AST approaches include: MALDI-TOF MS for rapid species ID in hours; direct inoculation from blood cultures; rapid phenotypic platforms (BioFire BCID, Accelerate Pheno, VITEK-2 with direct inoculation); and rapid genotypic methods (PCR panels, WGS). Faster results enable de-escalation from broad-spectrum empiric therapy to targeted therapy, improving outcomes and antimicrobial stewardship."
  },
  {
    id: 79,
    question: "Syndromic panel testing (e.g., BioFire FilmArray) for infectious diseases has what key advantage in clinical microbiology?",
    options: [
      "It provides antimicrobial susceptibility results along with identification",
      "It simultaneously detects multiple pathogens (bacteria, viruses, fungi) associated with a clinical syndrome from a single sample within 1-2 hours, enabling rapid syndromic diagnosis",
      "It is cheaper than conventional culture methods",
      "It requires large-volume specimens for testing"
    ],
    answer: 1,
    explanation: "Syndromic panels (respiratory, meningitis/encephalitis, gastrointestinal, blood culture panels) use multiplex PCR to detect 20-30+ pathogens associated with a syndrome simultaneously from one sample within 1-2 hours. This enables rapid pathogen identification, appropriate therapy, and infection control measures. Key limitations: does not provide susceptibility testing, may detect non-pathogenic organisms, expensive, and can over-detect colonizers."
  },
  {
    id: 80,
    question: "Probiotics are defined by WHO/FAO as:",
    options: [
      "Any fermented food product that contains live bacteria",
      "Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host",
      "Prebiotic dietary fibers that promote growth of beneficial bacteria",
      "Dead bacterial extracts used to stimulate immune response"
    ],
    answer: 1,
    explanation: "WHO/FAO (2001) definition of probiotics: 'live microorganisms that, when administered in adequate amounts, confer a health benefit on the host.' Key elements: must be live at time of administration; adequate dose (usually 10^8-10^9 CFU); strain-specific—not all strains of the same species have probiotic properties; and health benefits must be evidence-based. Prebiotics are non-digestible substrates that promote growth of beneficial bacteria. Synbiotics combine both."
  },
  {
    id: 81,
    question: "Arrange the following sentences to form a coherent paragraph about health systems: (P) Without this framework, even technically correct interventions may fail to achieve intended outcomes. (Q) Health systems are complex adaptive systems with multiple interdependent components. (R) Understanding this complexity requires moving beyond linear, reductionist models of causation. (S) Intervention designers must account for feedback loops, emergent properties, and contextual factors.",
    options: [
      "Q-R-S-P",
      "Q-P-R-S",
      "R-Q-S-P",
      "S-P-Q-R"
    ],
    answer: 0,
    explanation: "The logical sequence is: Q (introduces health systems as complex adaptive systems) → R (explains what understanding this complexity requires) → S (specifies what intervention designers must account for) → P (concludes that without this framework, interventions fail). This creates a coherent argument flowing from definition to requirement to implication to consequence."
  },
  {
    id: 82,
    question: "Choose the word that best fits the blank in this sentence from a public health text: 'The proliferation of _______ health information on social media platforms has complicated public health communication efforts, undermining trust in evidence-based recommendations.'",
    options: [
      "Accurate",
      "Spurious",
      "Verified",
      "Peer-reviewed"
    ],
    answer: 1,
    explanation: "The context requires a word meaning false or misleading—the sentence describes how certain health information complicates communication and undermines trust, clearly implying it is incorrect or unreliable. 'Spurious' means false, not genuine, based on false reasoning. 'Accurate' and 'verified' are antonyms of the intended meaning. 'Peer-reviewed' would not undermine trust."
  },
  {
    id: 83,
    question: "Read the following passage and answer: 'The epidemiologic transition describes the shift from infectious to non-communicable disease dominance. However, critics note that in many low-income countries, this transition is incomplete—both disease burdens coexist, creating a double burden on health systems with limited resources.' What can be INFERRED from this passage?",
    options: [
      "The epidemiologic transition has been completed in all countries",
      "Low-income countries may need to simultaneously address both infectious and non-communicable disease burdens, requiring different resource allocation strategies than high-income countries",
      "Non-communicable diseases are not a problem in low-income countries",
      "The epidemiologic transition is a myth with no empirical basis"
    ],
    answer: 1,
    explanation: "The passage explicitly states the transition is incomplete in low-income countries with both burdens coexisting. The inference is that these countries must address both simultaneously—implying different strategic and resource allocation needs compared to high-income countries where the transition is complete. The inference goes beyond what is stated to the logical implication for health system planning."
  },
  {
    id: 84,
    question: "What is the overall tone of the following excerpt? 'While proponents herald artificial intelligence as the panacea for healthcare's most intractable challenges, a more circumspect examination reveals substantial gaps between demonstrated capability in controlled settings and real-world clinical performance.'",
    options: [
      "Enthusiastically optimistic",
      "Critically cautious and balanced, acknowledging enthusiasm while urging careful evaluation of claims",
      "Completely dismissive of AI in healthcare",
      "Neutral and purely descriptive without any evaluative stance"
    ],
    answer: 1,
    explanation: "The tone is critically cautious. The author acknowledges AI enthusiasm ('proponents herald') but uses words like 'circumspect examination,' 'substantial gaps,' and contrasts 'controlled settings' with 'real-world performance' to suggest tempered skepticism. It is not completely dismissive (acknowledges demonstrated capability) nor uncritically optimistic. This balanced but cautious tone is typical of evidence-based critical analysis."
  },
  {
    id: 85,
    question: "Identify the main idea of the following passage: 'Community health workers serve as bridges between formal health systems and underserved communities. Their local knowledge, cultural competence, and trusted relationships enable them to facilitate health behavior change, deliver basic services, and identify barriers to care that formal providers may overlook.'",
    options: [
      "Community health workers are not qualified to provide any medical care",
      "Community health workers are valuable intermediaries whose unique characteristics—local knowledge, cultural competence, and community trust—enable them to extend health systems into underserved communities in ways that formal providers cannot",
      "Formal health providers are unnecessary when community health workers are present",
      "Health behavior change is the only function of community health workers"
    ],
    answer: 1,
    explanation: "The main idea synthesizes the passage's central argument: CHWs are bridges (intermediaries) with specific valuable characteristics (local knowledge, cultural competence, trust) that enable multiple functions (behavior change, service delivery, barrier identification) in underserved communities. Option A is directly contradicted; Option C is not stated; Option D is too narrow—the passage lists multiple functions."
  },
  {
    id: 86,
    question: "The author's primary purpose in writing the following sentence is: 'Policy makers must resist the temptation to implement programs that show promise in high-income country settings without rigorous evaluation of their transferability to low-resource contexts.'",
    options: [
      "To suggest that low-income countries should avoid all health programs from high-income countries",
      "To argue for context-specific evaluation and adaptation of health programs before implementation, cautioning against direct transfer of interventions without assessing local applicability",
      "To criticize high-income country health programs as universally inappropriate",
      "To state that all programs work equally well across all settings"
    ],
    answer: 1,
    explanation: "The author's purpose is to urge caution and advocate for rigorous context-specific evaluation before transferring programs across settings. Key words: 'resist the temptation,' 'rigorous evaluation,' 'transferability.' The author is not saying never use such programs (Option A) or that they are universally inappropriate (Option C), but that uncritical adoption without evaluation is problematic."
  },
  {
    id: 87,
    question: "In the sentence, 'The intervention demonstrated salutary effects on child nutrition outcomes,' the word 'salutary' most nearly means:",
    options: [
      "Harmful or detrimental",
      "Beneficial or promoting health and well-being",
      "Temporary or short-lived",
      "Unexpected or surprising"
    ],
    answer: 1,
    explanation: "Salutary means producing or intended to produce a beneficial effect; promoting health or welfare. It derives from Latin 'salutaris' (health-giving). In context, a health intervention demonstrating 'salutary effects' has beneficial, health-promoting effects on child nutrition. This is an advanced vocabulary word commonly tested in exams; antonyms include harmful, deleterious, detrimental."
  },
  {
    id: 88,
    question: "Which word analogy correctly completes the pattern: SENSITIVITY : DIAGNOSTIC TEST :: ____________ : ____________?",
    options: [
      "Power : statistical test (ability to detect a true effect when it exists, analogous to sensitivity detecting true disease)",
      "Precision : recall",
      "Incidence : prevalence",
      "Validity : reliability"
    ],
    answer: 0,
    explanation: "Sensitivity of a diagnostic test = probability of a positive test given true disease (ability to detect true positives). Statistical power = probability of rejecting the null hypothesis given the effect truly exists (ability to detect a true effect). Both represent the probability of correctly identifying true positives in their respective domains. The structural analogy is: sensitivity is to diagnostic tests as power is to statistical tests."
  },
  {
    id: 89,
    question: "In verbal reasoning, which conclusion can be logically drawn from these premises? 'All published studies on this drug showed benefit. Only studies with positive results were published.'",
    options: [
      "The drug is definitely effective",
      "The available evidence may overestimate the drug's true benefit due to publication bias, and unpublished negative studies may exist",
      "The drug is definitely ineffective",
      "Publication bias does not affect conclusions about drug efficacy"
    ],
    answer: 1,
    explanation: "This is a classic publication bias scenario. From the premises, we know: (1) all published studies show benefit; (2) only positive studies were published. Logical conclusion: the published evidence is a biased subset—there may be unpublished negative/null studies. Therefore the true benefit may be lower than what published evidence suggests. This is exactly why systematic reviews search for unpublished trials and use funnel plots to detect publication bias."
  },
  {
    id: 90,
    question: "Which of the following represents a logically valid critical reasoning argument?",
    options: [
      "Country A implemented Program X and child mortality fell; therefore, Program X caused the reduction in child mortality",
      "If Program X reduces under-5 mortality only when implemented with high fidelity, and Country A implemented Program X with low fidelity, then Country A cannot expect the same mortality reduction as countries with high-fidelity implementation",
      "Program X failed in Country B, therefore it will fail in all countries",
      "Program X succeeded in a high-income country, therefore it will succeed in all low-income countries"
    ],
    answer: 1,
    explanation: "Option B is logically valid (modus ponens/conditional reasoning): If P then Q. Not-Q. Therefore not-P. Or more precisely: program effectiveness requires high fidelity; Country A had low fidelity; therefore Country A cannot expect full effectiveness. Option A is a post hoc fallacy (correlation ≠ causation). Option C and D are invalid generalizations ignoring contextual factors."
  },
  {
    id: 91,
    question: "The 1918 influenza pandemic ('Spanish flu') had a unique W-shaped mortality curve, killing disproportionately in which age group unusual for influenza?",
    options: [
      "Children under 5 years exclusively",
      "Young adults (20-40 years), in addition to the usual peaks in infants and elderly, possibly due to cytokine storm in the immune-competent and lack of prior immunity",
      "Only the elderly over 65 years",
      "Exclusively pregnant women"
    ],
    answer: 1,
    explanation: "The 1918 pandemic uniquely caused high mortality in young adults (20-40 years), creating a distinctive W-shaped curve (high mortality in infants < 1 year, young adults 20-40 years, and elderly > 65 years). The mechanism in young adults may include a hyperactive immune response (cytokine storm) causing severe pneumonia. Estimated 20-50 million deaths globally; India lost an estimated 10-17 million people (among the highest national death tolls)."
  },
  {
    id: 92,
    question: "The Alma-Ata Declaration of 1978 is primarily associated with which concept that transformed global health philosophy?",
    options: [
      "Universal immunization programs",
      "Primary Health Care (PHC) as the key to achieving 'Health for All by the Year 2000,' emphasizing community participation, equity, intersectoral action, and appropriate technology",
      "Global eradication of all infectious diseases",
      "Establishment of the World Health Organization"
    ],
    answer: 1,
    explanation: "The Alma-Ata Declaration (1978, Kazakhstan, USSR) emerged from the WHO/UNICEF International Conference on PHC. It declared PHC as essential health care accessible to all individuals at an affordable cost, based on community participation, equity, self-determination, intersectoral action, and appropriate technology. It called for 'Health for All by the Year 2000.' It fundamentally reoriented global health from hospital-centric to community-based approaches."
  },
  {
    id: 93,
    question: "The Astana Declaration on Primary Health Care (2018) differs from Alma-Ata (1978) in that it:",
    options: [
      "Abandons the concept of universal health coverage",
      "Reaffirms PHC commitments for the 21st century context, explicitly linking PHC with Universal Health Coverage and the Sustainable Development Goals, emphasizing digital health and a broader role for the private sector",
      "Replaces PHC with hospital-based specialty care as the foundation of health systems",
      "Was signed only by low-income countries"
    ],
    answer: 1,
    explanation: "The Astana Declaration (2018, marking 40th anniversary of Alma-Ata) reaffirms PHC but updates it for contemporary challenges: explicitly links PHC to UHC and SDGs; incorporates digital health and technology; broadens stakeholder involvement including private sector and civil society; emphasizes evidence-based practice; and is more pragmatic than the idealistic Alma-Ata vision. It was adopted by all 193 WHO member states."
  },
  {
    id: 94,
    question: "Universal Health Coverage (UHC), as defined by WHO, ensures that:",
    options: [
      "All health services are free at point of care without exception",
      "All people have access to the health services they need, when and where they need them, without suffering financial hardship, covering health promotion, prevention, treatment, rehabilitation, and palliative care",
      "Governments fund 100% of healthcare costs",
      "Universal coverage applies only to communicable disease treatment"
    ],
    answer: 1,
    explanation: "WHO defines UHC as ensuring all people can access quality health services without financial hardship. The three dimensions of UHC (Tanahashi cube): population coverage (who is covered), service coverage (which services), and financial coverage (how well protected from costs). UHC does not mean free healthcare for all services—it means protection from catastrophic expenditure and impoverishment from healthcare costs, covering the full continuum of services."
  },
  {
    id: 95,
    question: "The 'Health in All Policies' (HiAP) approach recognizes that:",
    options: [
      "Only the health ministry is responsible for population health",
      "Health is significantly determined by policies made in non-health sectors (agriculture, education, transport, housing, environment), requiring systematic attention to health implications in all government policy decisions",
      "All policies automatically improve health without intentional design",
      "Health policies should override all other sectoral policies"
    ],
    answer: 1,
    explanation: "HiAP (articulated in the Adelaide Statement 2010, WHO) acknowledges that social determinants of health are largely shaped by policies outside the health sector. Effective health improvement requires cross-government collaboration, considering health impacts in policies on food, education, transport, environment, social protection, and urban planning. Finland pioneered HiAP; it is now a WHO-endorsed strategy for addressing social determinants of health."
  },
  {
    id: 96,
    question: "Social determinants of health (SDOH), as described by the WHO Commission on Social Determinants of Health (2008), are BEST described as:",
    options: [
      "Individual lifestyle choices and behaviors",
      "The conditions in which people are born, grow, live, work, and age—including education, income, social support, housing, employment, and access to healthcare—which are shaped by political, social, and economic forces",
      "Genetic and biological factors determining individual health",
      "Environmental pollution only"
    ],
    answer: 1,
    explanation: "The WHO CSDH (chaired by Michael Marmot, 2008) defined SDOH as 'the conditions in which people are born, grow, live, work, and age.' These structural determinants include income, education, employment, social protection, housing, and access to services. They are shaped by political, social, and economic contexts and generate health inequities. The Commission called for 'closing the gap in a generation' through action on SDOH."
  },
  {
    id: 97,
    question: "Health equity refers to:",
    options: [
      "Equal distribution of health services regardless of need",
      "The absence of unfair, avoidable, or remediable differences in health among groups defined by social, economic, demographic, or geographic factors",
      "Ensuring all individuals receive identical healthcare",
      "Equal health outcomes for all population groups regardless of social circumstances"
    ],
    answer: 1,
    explanation: "Health equity (Whitehead, 1992) means the absence of unfair, avoidable differences in health. Not all differences in health are inequitable—some reflect unavoidable biological variation. Inequitable differences are those arising from unjust social arrangements (poverty, discrimination, inadequate education) that are potentially remediable. Health equality means equal distribution; health equity means distribution according to need and removal of unjust barriers."
  },
  {
    id: 98,
    question: "Millennium Development Goals (MDGs) and Sustainable Development Goals (SDGs) differ in that:",
    options: [
      "MDGs were universal while SDGs applied only to developing countries",
      "MDGs (2000-2015) focused narrowly on social/development targets primarily for developing countries, while SDGs (2015-2030) are universal, covering all countries, with 17 goals spanning social, economic, and environmental sustainability including SDG3 on health",
      "SDGs eliminated all poverty-focused targets from MDGs",
      "MDGs were adopted by the WHO while SDGs were adopted by the UN"
    ],
    answer: 1,
    explanation: "MDGs (8 goals, 2000-2015) focused on poverty, education, gender, child/maternal health, HIV, malaria, and global partnership—primarily for developing countries. SDGs (17 goals, 169 targets, 2015-2030) are universal—applicable to all countries—and integrate social, economic, and environmental dimensions of sustainable development. SDG3 covers health, but health is mainstreamed across all SDGs (poverty, hunger, education, clean water, climate action all affect health)."
  },
  {
    id: 99,
    question: "The Global Burden of Disease (GBD) study, coordinated by the Institute for Health Metrics and Evaluation (IHME), uses Disability-Adjusted Life Years (DALYs) as a summary measure. One DALY represents:",
    options: [
      "One year of perfect health gained by an intervention",
      "One year of healthy life lost—combining years of life lost due to premature mortality (YLL) and years lived with disability (YLD) weighted by the severity of the disability",
      "The cost of treating one year of disease",
      "One year of complete disability equivalent to death"
    ],
    answer: 1,
    explanation: "DALY = YLL + YLD. YLL = years lost due to premature death compared to normative life expectancy. YLD = years lived with disability, weighted by disability weight (0 = perfect health, 1 = death). One DALY = one lost year of healthy life. DALYs allow comparison of disease burden across conditions differing in mortality and disability impact. GBD provides the most comprehensive estimates of burden from ~370 diseases and injuries across all countries."
  },
  {
    id: 100,
    question: "The WHO Essential Medicines List (EML) concept, introduced in 1977, defines essential medicines as those that:",
    options: [
      "Are the most expensive and technologically advanced treatments available",
      "Satisfy the priority health care needs of the population; are selected with due regard to disease prevalence, evidence on efficacy and safety, and comparative cost-effectiveness; and are intended to be available within functioning health systems at all times in adequate amounts in appropriate dosage forms",
      "Include only generic medicines without brand names",
      "Are approved exclusively for use in high-income countries"
    ],
    answer: 1,
    explanation: "The WHO EML (first published 1977, updated every 2 years) defines essential medicines based on: priority health needs of populations; evidence of efficacy, safety, and quality; cost-effectiveness compared to alternatives; and practical requirements (stability, infrastructure). The concept revolutionized global health by focusing procurement, research, and health systems on medicines that matter most for population health. Over 150 countries have national EMLs based on the WHO model."
  }
];

export default questions;

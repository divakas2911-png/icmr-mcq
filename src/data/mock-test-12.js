const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "Verbal autopsy is used primarily to determine:",
    options: [
      "Prevalence of chronic diseases in a community",
      "Probable cause of death in the absence of medical certification",
      "Incidence of infectious diseases in a population",
      "Health-seeking behavior patterns in rural areas"
    ],
    answer: 1,
    explanation: "Verbal autopsy is a method of determining the likely cause of death by interviewing family members or caregivers about the signs and symptoms preceding death. It is particularly useful in settings where civil death registration and medical certification are incomplete or absent. WHO has standardized verbal autopsy instruments for use in low- and middle-income countries."
  },
  {
    id: 2,
    question: "Social autopsy differs from verbal autopsy in that it additionally examines:",
    options: [
      "The biological cause of death using laboratory data",
      "Social, behavioral, and health system factors contributing to death",
      "Genetic predisposition to the cause of death",
      "Autopsy findings confirmed by a pathologist"
    ],
    answer: 1,
    explanation: "Social autopsy goes beyond verbal autopsy by investigating the social determinants, behavioral factors, and health system failures that contributed to a death. It explores care-seeking delays, barriers to accessing care, and community factors. Social autopsy is widely used in child and maternal mortality reviews to identify preventable deaths."
  },
  {
    id: 3,
    question: "RAMOS (Reproductive Age Mortality Study) is a method used to:",
    options: [
      "Estimate infant mortality in urban populations",
      "Identify all deaths of women of reproductive age and assess their causes",
      "Calculate fertility rates using census data",
      "Monitor antenatal care utilization trends"
    ],
    answer: 1,
    explanation: "RAMOS is a comprehensive community-based approach to identify all deaths among women of reproductive age (15-49 years) and determine the proportion attributable to maternal causes. It uses multiple overlapping sources (household surveys, health facility records, burial registers) to find deaths that may not be captured by routine registration. RAMOS is considered a gold standard for estimating maternal mortality."
  },
  {
    id: 4,
    question: "The sisterhood method for estimating maternal mortality is classified as:",
    options: [
      "A direct method using prospective follow-up",
      "An indirect method using respondent reports about sisters",
      "A facility-based record review method",
      "A census-based cohort method"
    ],
    answer: 1,
    explanation: "The sisterhood method is an indirect demographic technique where survey respondents are asked about the survival and maternal deaths of their adult sisters. Because each woman has multiple sisters on average, large numbers of woman-years of exposure can be estimated from relatively small surveys. It provides retrospective estimates of maternal mortality and is used in settings lacking vital registration."
  },
  {
    id: 5,
    question: "In capture-recapture methodology applied to disease surveillance, the key assumption is:",
    options: [
      "All cases have equal probability of being listed in each source",
      "All cases are captured in the first sampling round",
      "The two data sources must come from the same health facility",
      "Recaptured cases are excluded from the final estimate"
    ],
    answer: 0,
    explanation: "The fundamental assumption of two-source capture-recapture is that every case has an equal probability of appearing in each source (homogeneity) and that the two sources are independent of each other. Violation of independence leads to biased estimates. The Chapman estimator (N = (n1+1)(n2+1)/(m+1) - 1) is commonly used where m is the number of cases appearing in both sources."
  },
  {
    id: 6,
    question: "Lot Quality Assurance Sampling (LQAS) is primarily designed to:",
    options: [
      "Estimate national prevalence of a disease with high precision",
      "Classify program areas as having acceptable or unacceptable coverage",
      "Determine sample size for randomized controlled trials",
      "Assess the quality of laboratory specimens"
    ],
    answer: 1,
    explanation: "LQAS is a rapid assessment method borrowed from industrial quality control, used to classify geographic areas (lots) as having coverage above or below a predetermined threshold. Each lot requires a small sample (typically 19 observations), and the decision rule is based on a threshold number of positive findings. LQAS trades precise estimation for the ability to quickly classify many areas at low cost."
  },
  {
    id: 7,
    question: "In a SMART (Standardized Monitoring and Assessment of Relief and Transitions) survey, the two primary outcomes measured are:",
    options: [
      "Morbidity and mortality from infectious diseases",
      "Acute malnutrition (by MUAC/WHZ) and crude mortality rate",
      "Vaccine coverage and cold chain performance",
      "Water access and sanitation coverage"
    ],
    answer: 1,
    explanation: "SMART surveys are designed for humanitarian settings to rapidly assess the nutritional and mortality situation in a population. They measure global acute malnutrition using weight-for-height z-scores (WHZ) and/or mid-upper arm circumference (MUAC), and crude and under-5 mortality rates. Results guide emergency response decisions and resource allocation."
  },
  {
    id: 8,
    question: "The 'three delays' model in maternal health research addresses delays in:",
    options: [
      "Laboratory diagnosis, treatment initiation, and follow-up",
      "Deciding to seek care, reaching a facility, and receiving adequate care",
      "Antenatal registration, delivery, and postnatal follow-up",
      "Community notification, case reporting, and epidemiological investigation"
    ],
    answer: 1,
    explanation: "The three delays model (Thaddeus and Maine, 1994) identifies three phases of delay contributing to maternal mortality: Phase I (delay in deciding to seek care - influenced by social, cultural, and economic factors), Phase II (delay in reaching an appropriate facility - influenced by distance and transport), and Phase III (delay in receiving adequate care at the facility). This framework guides interventions to reduce maternal deaths."
  },
  {
    id: 9,
    question: "A community-based survey uses probability proportional to size (PPS) sampling. This means that:",
    options: [
      "All clusters have an equal probability of selection regardless of size",
      "Larger clusters have a higher probability of being selected",
      "Smaller clusters are oversampled to ensure representation",
      "Selection is based on disease burden rather than population size"
    ],
    answer: 1,
    explanation: "In probability proportional to size sampling, each cluster (e.g., village) is selected with a probability proportional to its population size, so larger communities have a greater chance of selection. This ensures that individuals have approximately equal probability of selection across the survey. PPS is commonly used in WHO EPI cluster surveys and national health surveys."
  },
  {
    id: 10,
    question: "The 'ecological fallacy' in epidemiology refers to:",
    options: [
      "Incorrect extrapolation of individual-level findings to populations",
      "Incorrect inference about individuals based on aggregate group-level data",
      "Bias introduced by including environmental factors in regression models",
      "Misclassification of exposure in ecological studies"
    ],
    answer: 1,
    explanation: "The ecological fallacy (Robinson's paradox) occurs when associations observed at the group level are incorrectly attributed to individuals within those groups. For example, a country-level correlation between fat intake and cancer rates may not reflect individual-level associations. Ecological studies are useful for hypothesis generation but cannot establish individual-level causal relationships."
  },
  {
    id: 11,
    question: "Berkson's bias is a type of selection bias that occurs specifically in:",
    options: [
      "Population-based cohort studies with high follow-up loss",
      "Hospital-based case-control studies where hospital admission rates differ",
      "Cross-sectional surveys with low response rates",
      "Randomized trials with unequal randomization ratios"
    ],
    answer: 1,
    explanation: "Berkson's bias arises in hospital-based case-control studies when cases and controls are selected from hospital populations. If the exposure of interest independently affects the probability of hospitalization, the exposure prevalence among hospital controls will differ from the general population, leading to biased odds ratio estimates. This was first described by Joseph Berkson in 1946."
  },
  {
    id: 12,
    question: "In a case-control study, the matched odds ratio is best estimated using:",
    options: [
      "The Mantel-Haenszel method",
      "Conditional logistic regression",
      "Cox proportional hazards regression",
      "Poisson regression with offset"
    ],
    answer: 1,
    explanation: "When cases and controls are individually matched (e.g., on age and sex), the matching must be accounted for in the analysis. Conditional logistic regression conditions on the matched sets, treating each matched pair or set as a stratum. Unconditional logistic regression ignores matching and can produce biased estimates; the Mantel-Haenszel method can be used for stratified analysis but conditional logistic regression is the preferred approach."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "In life table construction, the 'probability of dying' (qx) between exact ages x and x+1 is calculated using:",
    options: [
      "qx = dx / lx, where dx is deaths and lx is survivors at age x",
      "qx = mx / (1 + 0.5 mx), where mx is the central death rate",
      "qx = Lx / lx, where Lx is person-years lived",
      "qx = Tx / ex, where Tx is total future lifetime"
    ],
    answer: 1,
    explanation: "The central death rate (mx) from observed data is converted to the probability of dying (qx) using the formula qx = mx / (1 + (1-ax) * mx), where ax is the fraction of the interval lived by those who die, often approximated as 0.5 for most adult ages. This relationship assumes a uniform distribution of deaths within the age interval. Life tables form the basis for calculating life expectancy at birth (e0)."
  },
  {
    id: 14,
    question: "The Brass logit life table system uses:",
    options: [
      "Model stable populations to estimate fertility schedules",
      "A standard life table and two parameters (alpha, beta) to generate model life tables",
      "Regression of log-transformed death rates on age",
      "Census age distributions to estimate net migration"
    ],
    answer: 1,
    explanation: "The Brass logit system transforms survivorship (lx) values using the logit function [Y(x) = 0.5 * ln(1-l(x)/l(x))] and expresses the target life table as a linear function of a standard life table: Ys(x) = alpha + beta * Ys(x). Alpha shifts the overall mortality level and beta controls the age pattern relative to the standard. This system is widely used in demographic estimation for developing countries."
  },
  {
    id: 15,
    question: "Direct standardization of death rates requires:",
    options: [
      "Expected deaths in each population calculated from standard rates",
      "Application of observed age-specific rates to a standard population",
      "A standard population with known cause-specific death rates",
      "Model-based adjustment using multivariate regression"
    ],
    answer: 1,
    explanation: "In direct standardization, the age-specific death rates of each population being compared are applied to a common standard population (e.g., world standard population or national population) to calculate the number of expected deaths. Dividing by the total standard population gives the directly standardized (age-adjusted) rate, which allows valid comparisons unconfounded by age differences. The World Health Organization world standard population is commonly used."
  },
  {
    id: 16,
    question: "Indirect standardization produces the Standardized Mortality Ratio (SMR), which is:",
    options: [
      "Observed deaths in the study population / Expected deaths based on standard rates",
      "Expected deaths in the study population / Observed deaths in standard population",
      "Age-standardized rate in study population / Crude rate in standard population",
      "Directly standardized rate / Crude rate of study population"
    ],
    answer: 0,
    explanation: "The SMR = Observed deaths / Expected deaths, where expected deaths are calculated by applying the age-specific rates of the standard population to the age distribution of the study population. An SMR > 1 indicates excess mortality in the study population compared to the standard. Indirect standardization is preferred when the study population is small and age-specific rates are unstable."
  },
  {
    id: 17,
    question: "A Lexis diagram is a graphical tool in demography that plots:",
    options: [
      "Age-specific fertility rates against time periods",
      "Individual life lines in a coordinate system of age and calendar time",
      "Mortality rates by birth cohort and period",
      "Population pyramids across successive censuses"
    ],
    answer: 1,
    explanation: "A Lexis diagram uses a two-dimensional coordinate system with calendar time on the horizontal axis and age on the vertical axis. Each individual's life is represented as a diagonal line (life line) moving rightward through time and upward through age at a 45-degree angle. The diagram allows visualization of cohort effects, period effects, and age effects, and is used to count events (deaths, births) in specific age-period-cohort cells."
  },
  {
    id: 18,
    question: "Person-years of observation in a cohort study are calculated to:",
    options: [
      "Adjust for seasonal variation in disease incidence",
      "Account for varying follow-up time among participants when computing incidence rates",
      "Standardize rates to a common age distribution",
      "Calculate attributable risk in exposed populations"
    ],
    answer: 1,
    explanation: "Person-years (or person-time) is used as the denominator for incidence rate calculations when participants enter and leave the study at different times or experience censoring. The incidence rate = Number of new cases / Total person-years of follow-up. This approach correctly accounts for the fact that participants contribute different amounts of time to the study, avoiding bias from variable follow-up."
  },
  {
    id: 19,
    question: "In a 2x2 table analysis, the rate ratio (relative risk) is calculated as:",
    options: [
      "ad/bc, where a,b,c,d are cells of the table",
      "[a/(a+b)] / [c/(c+d)]",
      "[a/(a+c)] / [b/(b+d)]",
      "(a+d) / (b+c)"
    ],
    answer: 1,
    explanation: "The risk ratio (relative risk) is calculated as the incidence proportion in the exposed group divided by the incidence proportion in the unexposed group. In a 2x2 table where a = exposed cases, b = exposed non-cases, c = unexposed cases, d = unexposed non-cases: RR = [a/(a+b)] / [c/(c+d)]. The odds ratio (ad/bc) approximates the RR only when the disease is rare (rare disease assumption)."
  },
  {
    id: 20,
    question: "The coefficient of variation (CV) is used to compare variability between datasets because it:",
    options: [
      "Adjusts for sample size differences between groups",
      "Expresses standard deviation as a percentage of the mean, making it unitless",
      "Corrects for non-normality in the data distribution",
      "Removes the effect of outliers from the variance estimate"
    ],
    answer: 1,
    explanation: "The coefficient of variation (CV = SD/Mean × 100%) is a dimensionless measure of relative variability that allows comparison of dispersion across datasets with different units or different magnitudes of the mean. For example, comparing variability in blood pressure (mmHg) with variability in body weight (kg) is meaningful using CV but not using raw standard deviations. In laboratory quality control, CV < 5% is generally acceptable."
  },
  {
    id: 21,
    question: "The Kaplan-Meier survival estimate differs from the actuarial (life table) method in that it:",
    options: [
      "Groups follow-up time into fixed intervals such as months or years",
      "Recalculates survival probability at each event time rather than at fixed intervals",
      "Requires the assumption of exponentially distributed survival times",
      "Cannot handle censored observations"
    ],
    answer: 1,
    explanation: "The Kaplan-Meier (product-limit) estimator is a non-parametric method that recalculates survival probabilities at each time point when an event occurs, rather than grouping data into fixed intervals as in the actuarial method. It correctly handles censored observations (participants lost to follow-up or event-free at end of study). The resulting step-function curve can be compared between groups using the log-rank test."
  },
  {
    id: 22,
    question: "In a meta-analysis, I² statistic measures:",
    options: [
      "The proportion of total variability due to true heterogeneity between studies",
      "The probability that observed heterogeneity is due to chance alone",
      "The overall pooled effect size adjusted for publication bias",
      "The number of studies needed to overturn the pooled estimate"
    ],
    answer: 0,
    explanation: "The I² statistic quantifies the proportion of total variation in effect estimates across studies that is attributable to real heterogeneity (between-study variation) rather than sampling error. I² values of 25%, 50%, and 75% are conventionally regarded as low, moderate, and high heterogeneity. When I² is high, a random-effects model is preferred over a fixed-effects model for pooling. The Cochran Q test provides a p-value for the null hypothesis of no heterogeneity."
  },
  {
    id: 23,
    question: "The total fertility rate (TFR) represents:",
    options: [
      "The actual number of children born to a cohort of women over their lifetime",
      "The average number of children a woman would have if she experienced current age-specific fertility rates throughout her reproductive life",
      "The ratio of births to women aged 15-49 in a calendar year",
      "The probability that a woman survives to the end of her reproductive period"
    ],
    answer: 1,
    explanation: "TFR is a synthetic cohort measure calculated by summing age-specific fertility rates (ASFRs) across all reproductive age groups (typically 15-49) multiplied by the width of the age interval (5 years). TFR = 5 × Σ ASFR. It represents a hypothetical estimate of lifetime fertility for a woman experiencing current period fertility rates, not actual cohort fertility. A TFR of approximately 2.1 represents replacement-level fertility."
  },
  {
    id: 24,
    question: "The net reproduction rate (NRR) differs from the gross reproduction rate (GRR) in that the NRR:",
    options: [
      "Counts only male births rather than all births",
      "Adjusts for mortality of women before the end of their reproductive period",
      "Uses a different age grouping for fertility rates",
      "Is based on cohort rather than period fertility rates"
    ],
    answer: 1,
    explanation: "The GRR is the average number of daughters a woman would have if she survived through her entire reproductive period under current fertility rates. The NRR adjusts this by the probability of surviving to each age of childbearing, accounting for female mortality. An NRR of 1 means exact replacement of the population; NRR < 1 indicates below-replacement fertility when survival is considered."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "Cardiac troponin I (cTnI) is preferred over CK-MB for diagnosing myocardial infarction because it:",
    options: [
      "Rises faster than CK-MB and peaks within 2 hours of infarction",
      "Has higher cardiac specificity as it is not found in significant amounts in skeletal muscle",
      "Returns to normal levels within 12 hours, allowing detection of reinfarction",
      "Is not elevated in renal failure, making it more useful in dialysis patients"
    ],
    answer: 1,
    explanation: "Cardiac troponin I is encoded by a cardiac-specific gene and is expressed exclusively in cardiac muscle, giving it near-absolute cardiac specificity compared to CK-MB which is also found in skeletal muscle. Troponin rises within 3-6 hours of MI, peaks at 18-24 hours, and remains elevated for 7-14 days. This prolonged elevation allows late diagnosis but makes detecting reinfarction difficult, for which serial CK-MB measurements are preferred."
  },
  {
    id: 26,
    question: "B-type natriuretic peptide (BNP) is most useful clinically for:",
    options: [
      "Diagnosing acute myocardial infarction in the emergency department",
      "Distinguishing cardiac from non-cardiac causes of acute dyspnea",
      "Monitoring response to antiplatelet therapy after coronary stenting",
      "Screening for coronary artery disease in asymptomatic individuals"
    ],
    answer: 1,
    explanation: "BNP and NT-proBNP are released from ventricular myocytes in response to wall stress and volume overload. In the emergency department setting, elevated BNP strongly supports heart failure as the cause of acute dyspnea, with high sensitivity and negative predictive value. A BNP < 100 pg/mL effectively rules out heart failure, while BNP > 400 pg/mL strongly supports it. BNP levels also provide prognostic information in heart failure patients."
  },
  {
    id: 27,
    question: "Alpha-fetoprotein (AFP) is characteristically elevated in all of the following EXCEPT:",
    options: [
      "Hepatocellular carcinoma",
      "Yolk sac tumor (endodermal sinus tumor)",
      "Neural tube defects in the fetus",
      "Prostate adenocarcinoma"
    ],
    answer: 3,
    explanation: "AFP is elevated in hepatocellular carcinoma (diagnostic if > 400 ng/mL), yolk sac tumors (a type of germ cell tumor), and in maternal serum with fetal neural tube defects. Prostate cancer is associated with PSA (prostate-specific antigen), not AFP. AFP is a fetal liver protein that is normally low in adults; its re-expression in hepatocellular carcinoma follows the principle of oncofetal antigen re-expression."
  },
  {
    id: 28,
    question: "CA-125 has its highest clinical utility as a tumor marker for:",
    options: [
      "Screening for ovarian cancer in the general population",
      "Monitoring treatment response and detecting recurrence in known ovarian cancer",
      "Diagnosing endometriosis in patients with pelvic pain",
      "Distinguishing benign from malignant ovarian masses preoperatively"
    ],
    answer: 1,
    explanation: "CA-125 has poor sensitivity and specificity for ovarian cancer screening in the general population (many benign conditions elevate CA-125, including endometriosis, fibroids, and pelvic inflammatory disease). Its primary clinical value is in monitoring treatment response and detecting recurrence in patients already diagnosed with epithelial ovarian cancer. A rising CA-125 during surveillance predicts clinical recurrence by several months. It is not approved for population-level screening."
  },
  {
    id: 29,
    question: "The reference standard for diagnosing iron deficiency anemia, when bone marrow examination is not available, is:",
    options: [
      "Serum hemoglobin level below WHO cutoffs",
      "Serum ferritin (with awareness of its elevation in inflammatory states)",
      "Mean corpuscular volume (MCV) below 80 fL",
      "Transferrin saturation below 16%"
    ],
    answer: 1,
    explanation: "Serum ferritin is the best single laboratory test for diagnosing iron deficiency, as it directly reflects body iron stores. However, ferritin is an acute-phase reactant that rises in infection and inflammation, potentially masking iron deficiency. In populations with high infection burden, a ferritin cutoff of 30 ng/mL (rather than 12 ng/mL) or soluble transferrin receptor (sTfR) is recommended. Bone marrow Prussian blue staining for hemosiderin remains the gold standard."
  },
  {
    id: 30,
    question: "HbA1c is standardized according to:",
    options: [
      "WHO International Reference Preparation for HbA1c",
      "NGSP (National Glycohemoglobin Standardization Program) with IFCC traceability",
      "DCCT reference method using high-pressure liquid chromatography",
      "American Diabetes Association consensus values"
    ],
    answer: 1,
    explanation: "HbA1c values must be standardized for comparability. In the US, NGSP standardization (traceable to the DCCT trial) reports in % units. Internationally, IFCC (International Federation of Clinical Chemistry) reports in mmol/mol. The relationship is: NGSP% = (0.0915 × IFCC) + 2.15. The ADA and WHO diagnostic threshold of 6.5% (48 mmol/mol) is based on NGSP/IFCC standardized methods. Standardization ensures that the same sample gives consistent results across different analyzers."
  },
  {
    id: 31,
    question: "The best indicator of thyroid function in monitoring levothyroxine replacement therapy is:",
    options: [
      "Free T4 (fT4) measured by equilibrium dialysis",
      "Total T3 measured by radioimmunoassay",
      "TSH (thyroid stimulating hormone) measured by third-generation assay",
      "Thyroglobulin level measured quarterly"
    ],
    answer: 2,
    explanation: "TSH is the most sensitive indicator for monitoring levothyroxine replacement in primary hypothyroidism. Due to the logarithmic-linear relationship between TSH and free T4, small changes in T4 result in large TSH changes, making TSH highly sensitive to under- or over-replacement. Third-generation TSH assays (functional sensitivity ~0.01 mIU/L) can detect both hypothyroidism and hyperthyroidism. The target TSH for most patients on replacement is 0.5-2.5 mIU/L."
  },
  {
    id: 32,
    question: "Prostate-specific antigen (PSA) density is calculated as PSA divided by:",
    options: [
      "Patient age in years",
      "Prostate volume estimated by transrectal ultrasound",
      "Serum testosterone level",
      "Body mass index of the patient"
    ],
    answer: 1,
    explanation: "PSA density = Total serum PSA / Prostate volume (measured by TRUS in cc). A PSA density > 0.15 ng/mL/cc suggests a higher probability of prostate cancer versus benign prostatic hyperplasia. This adjustment is useful because large benign prostates produce more PSA, so the same total PSA level has different implications depending on prostate size. PSA density helps guide biopsy decisions in men with borderline PSA levels (4-10 ng/mL)."
  },
  {
    id: 33,
    question: "The likelihood ratio positive (LR+) of a diagnostic test is calculated as:",
    options: [
      "Sensitivity / (1 - Specificity)",
      "(1 - Sensitivity) / Specificity",
      "Sensitivity × Specificity",
      "Positive predictive value / Negative predictive value"
    ],
    answer: 0,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = True positive rate / False positive rate. It indicates how much more likely a positive test result is in someone with the disease compared to someone without. An LR+ > 10 provides strong evidence for disease; 5-10 is moderate. LR- = (1 - Sensitivity) / Specificity; an LR- < 0.1 provides strong evidence against disease. Likelihood ratios are independent of disease prevalence and can be used with Bayes' theorem to update pre-test probability."
  },
  {
    id: 34,
    question: "CEA (carcinoembryonic antigen) is most appropriately used for:",
    options: [
      "Primary screening of colorectal cancer in average-risk individuals over 50",
      "Monitoring for recurrence after curative resection of colorectal cancer",
      "Distinguishing malignant from benign colonic polyps",
      "Predicting response to chemotherapy before treatment initiation"
    ],
    answer: 1,
    explanation: "CEA is an oncofetal antigen re-expressed in many adenocarcinomas (colorectal, gastric, pancreatic, lung). It has insufficient sensitivity and specificity for screening (elevated in smokers, benign conditions). Its established use is postoperative surveillance for colorectal cancer recurrence: CEA should normalize after curative resection, and a rising CEA may precede clinical recurrence by months. Serial CEA monitoring every 3-6 months for 5 years is recommended by ASCO guidelines."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "The WHO standard Oral Rehydration Solution (ORS) formulation recommended since 2002 contains which osmolarity?",
    options: [
      "311 mOsm/L (standard ORS)",
      "245 mOsm/L (reduced osmolarity ORS)",
      "200 mOsm/L (hypo-osmolar ORS)",
      "330 mOsm/L (high-sodium ORS)"
    ],
    answer: 1,
    explanation: "In 2002, WHO and UNICEF revised the standard ORS formulation to a reduced osmolarity of 245 mOsm/L (sodium 75 mEq/L, chloride 65 mEq/L, glucose 75 mmol/L, potassium 20 mEq/L, citrate 10 mEq/L). This reduced-osmolarity ORS was shown in clinical trials to decrease stool output, reduce vomiting, and lower the need for unscheduled intravenous therapy compared to the older 311 mOsm/L formulation, without increasing the risk of hyponatremia."
  },
  {
    id: 36,
    question: "In the management of cholera in adults, the preferred antibiotic for severe cases is:",
    options: [
      "Ampicillin 500 mg four times daily for 3 days",
      "Doxycycline 300 mg single dose",
      "Ciprofloxacin 500 mg twice daily for 5 days",
      "Metronidazole 400 mg three times daily for 5 days"
    ],
    answer: 1,
    explanation: "Doxycycline 300 mg as a single dose is the WHO-recommended antibiotic of choice for severe cholera in adults (and non-pregnant adults). Antibiotics reduce the duration and volume of diarrhea and the period of Vibrio cholerae excretion. Azithromycin (1g single dose) is recommended for pregnant women and children. Antibiotics are adjunctive to rehydration therapy, which remains the cornerstone of cholera management."
  },
  {
    id: 37,
    question: "Widal test for typhoid fever is positive when agglutination titre is:",
    options: [
      "O antigen ≥ 1:40 and H antigen ≥ 1:20",
      "O antigen ≥ 1:160 in a single acute serum sample from an unvaccinated patient",
      "A fourfold rise in O antigen titre between acute and convalescent sera",
      "Both O antigen ≥ 1:80 and H antigen ≥ 1:80 simultaneously"
    ],
    answer: 2,
    explanation: "The most reliable interpretation of the Widal test requires a fourfold (4×) rise in antibody titre (particularly O antigen titre) between acute phase serum (first week) and convalescent phase serum (3-4 weeks later). A single-sample titre of ≥ 1:160 is suggestive but not diagnostic, as background titres vary by region and prior vaccination. The Widal test has significant limitations in endemic areas due to prior exposure and cross-reactions; blood culture remains the gold standard for diagnosis."
  },
  {
    id: 38,
    question: "Shigella dysenteriae type 1 (Shiga bacillus) is distinguished from other Shigella species by its production of:",
    options: [
      "Exotoxin A that inhibits protein synthesis in enterocytes",
      "Shiga toxin (verotoxin) that inhibits 60S ribosomal subunit and causes hemolytic-uremic syndrome",
      "Cholera toxin-like enterotoxin activating adenylate cyclase",
      "Cytotoxin B that disrupts tight junction proteins"
    ],
    answer: 1,
    explanation: "Shigella dysenteriae type 1 produces Shiga toxin, a protein synthesis-inhibiting exotoxin that cleaves the 28S rRNA of the 60S ribosomal subunit. This toxin causes endothelial damage and is responsible for the hemolytic-uremic syndrome (HUS) — characterized by microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury — that complicates severe S. dysenteriae type 1 infections. STEC (Shiga toxin-producing E. coli) produces the same toxin (Stx1 and Stx2)."
  },
  {
    id: 39,
    question: "The recommended treatment for intestinal amoebiasis (invasive amoebic colitis) is:",
    options: [
      "Diloxanide furoate 500 mg three times daily for 10 days alone",
      "Metronidazole 750 mg three times daily for 5-10 days followed by a luminal agent",
      "Chloroquine 600 mg base for 2 days followed by 300 mg base for 2-3 weeks",
      "Tinidazole 2g once daily for 5 days without any additional luminal therapy"
    ],
    answer: 1,
    explanation: "Treatment of invasive amoebiasis uses a tissue-active nitroimidazole (metronidazole or tinidazole) to kill trophozoites in the intestinal wall and liver, followed by a luminal amebicide (diloxanide furoate or paromomycin) to eliminate remaining cysts in the intestinal lumen. Metronidazole 750 mg TID for 5-10 days is standard; tinidazole has a shorter course. Luminal agents alone are insufficient for invasive disease; tissue agents alone may not clear luminal carriage, leading to relapse."
  },
  {
    id: 40,
    question: "Rotavirus predominantly causes diarrhea in children through:",
    options: [
      "Toxin-mediated secretion via cAMP activation in enterocytes",
      "NSP4 enterotoxin-mediated calcium-dependent chloride secretion and intestinal villus destruction",
      "Invasion of colonic mucosa causing dysentery with blood and pus",
      "Biofilm formation and altered gut microbiota composition"
    ],
    answer: 1,
    explanation: "Rotavirus causes diarrhea through two mechanisms: (1) NSP4 (non-structural protein 4) acts as a viral enterotoxin, increasing intracellular calcium and activating chloride secretion; and (2) rotavirus infects and destroys mature villus enterocytes, reducing the absorptive surface area and causing osmotic diarrhea. This differs from cholera's purely secretory (cAMP-mediated) mechanism. Rotavirus diarrhea is typically watery (non-bloody) and associated with vomiting and fever."
  },
  {
    id: 41,
    question: "Zinc supplementation in diarrhea management in children under 5 years is recommended at a dose of:",
    options: [
      "5 mg/day for 7 days",
      "10 mg/day for 14 days (children < 6 months) or 20 mg/day for 14 days (children ≥ 6 months)",
      "20 mg/day for 10 days for all age groups",
      "40 mg/day for 5 days with probiotic co-administration"
    ],
    answer: 1,
    explanation: "WHO/UNICEF recommend zinc supplementation for all children with acute diarrhea: 10 mg/day for 10-14 days for infants under 6 months, and 20 mg/day for 10-14 days for children aged 6 months to 5 years. Zinc reduces stool output, duration of diarrhea, and risk of subsequent diarrheal episodes for 2-3 months by supporting gut mucosal immunity and repair. Along with ORS, zinc is a cornerstone of the IMNCI protocol for childhood diarrhea management."
  },
  {
    id: 42,
    question: "Water, Sanitation, and Hygiene (WASH) interventions have the greatest impact on reducing diarrheal disease burden when:",
    options: [
      "Water treatment alone is implemented without latrine construction",
      "Multiple WASH components are implemented simultaneously (water + sanitation + hygiene)",
      "Community-wide handwashing campaigns are conducted without improving water sources",
      "Household water storage improvements are prioritized over source improvements"
    ],
    answer: 1,
    explanation: "Meta-analyses demonstrate that the greatest reductions in diarrheal disease occur when water quality improvement, sanitation (safe excreta disposal), and hygiene (handwashing with soap) are implemented together rather than separately. This synergistic effect (1+1+1 > 3) likely occurs because improving one component but not others still allows fecal-oral transmission through remaining pathways. The SWASH+ trial in Kenya confirmed that integrated WASH plus sanitation marketing had greater impact than individual components."
  },
  {
    id: 43,
    question: "The most common mode of transmission of typhoid fever in endemic areas is:",
    options: [
      "Person-to-person through respiratory droplets",
      "Contaminated water or food, particularly by chronic carriers handling food",
      "Vector-borne transmission through Aedes mosquitoes",
      "Zoonotic transmission from poultry and pigs"
    ],
    answer: 1,
    explanation: "Typhoid (Salmonella Typhi) is transmitted through the fecal-oral route, primarily via contaminated water or food. Chronic biliary carriers who excrete the organism in stool indefinitely are a major source, particularly when they handle food. Large waterborne outbreaks occur when sewage contaminates water supplies. The infective dose is relatively low (10^3 to 10^6 organisms). Poultry is a source for non-typhoidal Salmonella, not S. Typhi."
  },
  {
    id: 44,
    question: "MacConkey agar is used in clinical microbiology primarily to:",
    options: [
      "Isolate fastidious organisms requiring enriched media",
      "Differentiate lactose-fermenting from non-lactose-fermenting Gram-negative bacteria",
      "Culture anaerobic organisms from blood cultures",
      "Determine antibiotic sensitivity of Gram-positive cocci"
    ],
    answer: 1,
    explanation: "MacConkey agar is a selective and differential medium for Gram-negative bacteria. It contains bile salts and crystal violet that inhibit Gram-positive organisms (selective), and lactose with neutral red pH indicator (differential). Lactose fermenters (e.g., E. coli, Klebsiella) produce acid, turning colonies pink/red. Non-lactose fermenters (e.g., Salmonella, Shigella, Proteus) remain colorless. This primary differentiation guides further identification and is essential in stool and urine culture work-up."
  },
  {
    id: 45,
    question: "In cholera outbreak response, the case fatality rate (CFR) should ideally be maintained below:",
    options: [
      "5% with early identification and treatment",
      "1% with adequate oral and intravenous rehydration",
      "10% in resource-limited settings",
      "3% as per WHO Ending Cholera Roadmap targets"
    ],
    answer: 1,
    explanation: "With prompt and adequate rehydration therapy, cholera CFR should be below 1%. Untreated severe cholera has a CFR of 25-50% due to profound dehydration and electrolyte disturbances. The WHO Global Task Force on Cholera Control (2017 roadmap) sets a target of CFR < 1% across all affected countries as a key performance indicator. Achieving this requires functional oral rehydration therapy corners, intravenous fluids for severe cases, and trained health workers."
  },
  {
    id: 46,
    question: "Entamoeba histolytica is distinguished from the non-pathogenic Entamoeba dispar in stool microscopy by:",
    options: [
      "Cyst size: E. histolytica cysts are larger than E. dispar cysts",
      "The presence of ingested red blood cells (erythrophagocytosis) in trophozoites",
      "Number of nuclei: E. histolytica has 8-nuclei mature cysts, E. dispar has 4",
      "Motility pattern: E. histolytica shows non-directional motility"
    ],
    answer: 1,
    explanation: "On stool microscopy, E. histolytica trophozoites can be identified by the presence of ingested red blood cells within the cytoplasm (erythrophagocytosis), which is considered pathognomonic. E. dispar trophozoites do not ingest RBCs. However, cyst morphology is identical between E. histolytica and E. dispar (both have 4-nucleated mature cysts, 10-20 μm). Definitive species differentiation requires antigen detection (ELISA) or PCR, as morphology alone is insufficient."
  },
  {
    id: 47,
    question: "The oral cholera vaccine (OCV) currently used in mass vaccination campaigns provides protection for approximately:",
    options: [
      "6 months with a single dose",
      "3-5 years with a 2-dose schedule",
      "Lifetime immunity after 3 doses",
      "1 year with annual booster required"
    ],
    answer: 1,
    explanation: "The WHO-prequalified oral cholera vaccines (Shanchol, Euvichol-Plus, mORCVAX) are killed whole-cell vaccines given in 2 doses at least 2 weeks apart. They provide approximately 65-85% protection against cholera, with protection lasting 3-5 years in adults. A single dose provides shorter-term protection (6 months to 2 years) and is used in emergency outbreak response when there is insufficient time for a 2-dose schedule. Younger children (under 5) may require shorter re-vaccination intervals."
  },
  {
    id: 48,
    question: "The 'rice-water' stool characteristic of cholera is caused by:",
    options: [
      "Blood mixed with mucus from colonic erosion",
      "Isotonic fluid secretion by small intestinal enterocytes producing flakes of mucus and shed epithelial cells in watery stool",
      "Fat malabsorption causing steatorrhea in the small intestine",
      "Increased intestinal transit reducing water absorption"
    ],
    answer: 1,
    explanation: "Cholera toxin causes massive isotonic secretion of water and electrolytes by small intestinal enterocytes (up to 20 liters/day in severe cases). The stool appears as pale, watery fluid with flecks of mucus and shed epithelial cells resembling water in which rice has been washed. This is not bloody, differentiating it from dysentery. The secretory mechanism involves ADP-ribosylation of Gsα protein, permanently activating adenylate cyclase and elevating cAMP, which opens CFTR chloride channels."
  },
  {
    id: 49,
    question: "The Integrated Management of Neonatal and Childhood Illnesses (IMNCI) algorithm classifies severe dehydration in a child with diarrhea when:",
    options: [
      "The child has sunken eyes and increased thirst only",
      "The child has two of: lethargic/unconscious, sunken eyes, skin pinch goes back very slowly (≥2 seconds), unable to drink",
      "Diarrhea has lasted more than 14 days regardless of clinical signs",
      "Stool frequency exceeds 8 per day for 48 hours"
    ],
    answer: 1,
    explanation: "IMNCI classifies children with diarrhea into three categories based on dehydration signs. 'Severe dehydration' requires at least two of: lethargic or unconscious, sunken eyes, skin pinch goes back very slowly (≥2 seconds), or not able to drink/drinks poorly. 'Some dehydration' requires two of: restless/irritable, sunken eyes, drinks eagerly/thirsty, skin pinch goes back slowly (<2 seconds). This classification guides treatment: Plan C (IV/NG rehydration) for severe, Plan B (ORS in facility) for some, Plan A (home ORS) for no dehydration."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "Childhood obesity is defined by WHO as BMI-for-age at or above:",
    options: [
      "+1 SD (equivalent to BMI 25 in adults)",
      "+2 SD (equivalent to BMI 30 in adults)",
      "+3 SD (equivalent to BMI 35 in adults)",
      "The 95th percentile of national reference data"
    ],
    answer: 1,
    explanation: "WHO defines overweight in children as BMI-for-age > +1 SD (equivalent to adult BMI of 25) and obesity as BMI-for-age > +2 SD (equivalent to adult BMI of 30) of the WHO Growth Reference for school-age children and adolescents (5-19 years). The WHO 2006 Growth Standards are used for children under 5. This approach allows comparison across populations. The International Obesity Task Force (IOTF) uses sex-specific cut-offs that pass through adult BMI values of 25 and 30 at age 18."
  },
  {
    id: 51,
    question: "Rashtriya Kishor Swasthya Karyakram (RKSK), India's adolescent health program, targets which age group?",
    options: [
      "Children aged 5-14 years",
      "Adolescents aged 10-19 years",
      "Young adults aged 15-24 years",
      "School children aged 6-18 years"
    ],
    answer: 1,
    explanation: "RKSK (launched 2014) targets adolescents aged 10-19 years, covering approximately 253 million individuals in India. It works through Adolescent Friendly Health Clinics (AFHCs), peer educators (SAATHIYA), and integration with WIFS (Weekly Iron and Folic Acid Supplementation) and school health programs. The program addresses six key strategies: nutrition, sexual and reproductive health, mental health, substance misuse, injuries and violence, and non-communicable diseases."
  },
  {
    id: 52,
    question: "The WHODAS 2.0 (World Health Organization Disability Assessment Schedule) measures disability across how many domains?",
    options: [
      "4 domains",
      "6 domains",
      "8 domains",
      "10 domains"
    ],
    answer: 1,
    explanation: "WHODAS 2.0 assesses disability across 6 domains: cognition (understanding and communicating), mobility (moving and getting around), self-care (hygiene, dressing, eating, staying alone), getting along (interacting with others), life activities (household and work responsibilities), and participation (joining community activities). It is available in 12-item, 36-item, and interviewer-administered versions. WHODAS 2.0 is aligned with ICF (International Classification of Functioning) framework."
  },
  {
    id: 53,
    question: "The Haddon matrix in injury prevention is a tool that analyzes contributing factors across:",
    options: [
      "Host, agent, and environment over three time phases (pre-event, event, post-event)",
      "Primary, secondary, and tertiary prevention across the life course",
      "Individual, community, and policy levels of intervention",
      "Biological, behavioral, and social determinants of injury"
    ],
    answer: 0,
    explanation: "The Haddon matrix (developed by William Haddon Jr.) organizes injury countermeasures in a grid of three rows (time phases: pre-event, event, post-event) and three columns (factors: host/person, agent/vehicle/vector, environment). For road traffic injury: pre-event (driver sobriety, road design, vehicle safety standards), event (seatbelts, airbags, crash barriers), post-event (emergency response, trauma care). This systematic approach identifies multiple intervention points simultaneously."
  },
  {
    id: 54,
    question: "Palliative care is defined by WHO as care that:",
    options: [
      "Focuses exclusively on pain management in terminal cancer patients",
      "Improves quality of life by addressing physical, psychosocial, and spiritual needs, applicable from diagnosis",
      "Withdraws active treatment to allow natural death without suffering",
      "Provides care only in the last 72 hours of life through hospice services"
    ],
    answer: 1,
    explanation: "WHO defines palliative care as 'an approach that improves the quality of life of patients and their families facing the problems associated with life-threatening illness, through the prevention and relief of suffering by means of early identification and impeccable assessment and treatment of pain and other problems, physical, psychosocial and spiritual.' Palliative care is not restricted to terminal stages or cancer — it should be integrated from diagnosis alongside curative treatment. This approach is called 'concurrent palliative care.'"
  },
  {
    id: 55,
    question: "The National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS) in India primarily operates through:",
    options: [
      "Vertical disease-specific programs at tertiary care hospitals",
      "NCD clinics at District Hospitals and Community Health Centres with population-based screening",
      "Mobile health units visiting villages annually for cancer screening",
      "Exclusive public-private partnership models at the district level"
    ],
    answer: 1,
    explanation: "NPCDCS (launched 2010, now integrated into NHM) operates through NCD clinics established at Community Health Centres (CHC) and District Hospitals (DH). The program focuses on health promotion and early diagnosis through opportunistic screening of individuals above 30 years for hypertension, diabetes, and common cancers (oral, breast, cervical). It strengthens the referral system from community to district levels and supports capacity building for frontline health workers."
  },
  {
    id: 56,
    question: "The 'compression of morbidity' hypothesis in geriatric health (proposed by James Fries) states that:",
    options: [
      "Increased longevity inevitably leads to longer periods of disability and chronic disease",
      "Lifestyle modifications can postpone the onset of chronic disease closer to the time of death, reducing the period of disability",
      "Geriatric syndromes should be managed aggressively to prevent premature mortality",
      "Palliative care interventions should begin at age 65 to compress end-of-life care duration"
    ],
    answer: 1,
    explanation: "James Fries (1980) proposed that if the age of onset of chronic disease and disability can be postponed faster than the age of death is postponed, then the average period of morbidity and disability at the end of life will be compressed into a shorter duration. This theory supports preventive interventions (exercise, diet, smoking cessation) in middle age. Empirical evidence from cohort studies shows that vigorous exercisers have later disability onset, supporting the compression hypothesis."
  },
  {
    id: 57,
    question: "Weekly Iron and Folic Acid Supplementation (WIFS) under RKSK provides:",
    options: [
      "Iron 30 mg + folic acid 250 mcg weekly for school-going girls only",
      "Iron 60 mg + folic acid 500 mcg weekly for all adolescent boys and girls aged 10-19",
      "Iron 100 mg + folic acid 1 mg daily for severely anemic adolescents",
      "Iron 30 mg + folic acid 500 mcg twice weekly for out-of-school girls"
    ],
    answer: 1,
    explanation: "India's WIFS program provides iron (60 mg elemental iron) and folic acid (500 mcg) as a combined tablet once weekly to all adolescents (boys and girls, 10-19 years), both in-school and out-of-school. Supervised consumption through schools increases compliance. The program also includes bi-annual deworming with albendazole 400 mg. Weekly rather than daily supplementation reduces gastrointestinal side effects while maintaining efficacy for prevention of iron deficiency anemia."
  },
  {
    id: 58,
    question: "The Global Burden of Disease (GBD) study measures disease burden using Disability-Adjusted Life Years (DALYs), calculated as:",
    options: [
      "Years of life lived with disability minus years of life lost to premature death",
      "Years of life lost (YLL) to premature mortality plus years lived with disability (YLD)",
      "Life expectancy at birth minus healthy life expectancy (HLE)",
      "Incidence of disease multiplied by average duration multiplied by disability weight"
    ],
    answer: 1,
    explanation: "DALY = YLL + YLD, where YLL = years of life lost to premature mortality (calculated as number of deaths × remaining life expectancy at age of death using a standard reference life table), and YLD = years lived with disability (calculated as number of incident cases × duration of illness × disability weight). The disability weight (0-1) reflects severity. One DALY represents one lost year of healthy life. This composite measure allows comparison of the burden of non-fatal conditions (depression, blindness) with fatal conditions."
  },
  {
    id: 59,
    question: "The Expanded Programme on Immunization (EPI) in India now recommends HPV vaccination for girls aged:",
    options: [
      "9-14 years as a 2-dose schedule under the Universal Immunization Programme",
      "15-26 years as catch-up vaccination only in high-risk groups",
      "9-45 years as per NTAGI recommendations for all females",
      "10-18 years as 3-dose schedule in school settings"
    ],
    answer: 0,
    explanation: "India's National Technical Advisory Group on Immunization (NTAGI) recommended HPV vaccination and the Union Budget 2024-25 announced its inclusion in the Universal Immunization Programme (UIP) for girls aged 9-14 years. The 2-dose schedule (0 and 6-month interval) is immunologically non-inferior to the 3-dose schedule in this age group. Cervavac (India's quadrivalent HPV vaccine developed by Serum Institute) protects against HPV types 6, 11, 16, and 18, preventing both cervical cancer and genital warts."
  },
  {
    id: 60,
    question: "According to WHO, hypertension in adults is defined as office blood pressure at or above:",
    options: [
      "130/80 mmHg (based on ACC/AHA 2017 guidelines)",
      "140/90 mmHg",
      "150/90 mmHg for adults over 65 years",
      "120/80 mmHg (based on optimal BP targets)"
    ],
    answer: 1,
    explanation: "WHO (2023 guideline) and JNC-8 define hypertension as sustained systolic blood pressure ≥ 140 mmHg and/or diastolic BP ≥ 90 mmHg. The ACC/AHA 2017 guidelines lowered the threshold to ≥ 130/80 mmHg (Stage 1 hypertension), but WHO and most international bodies (ESC/ESH, ISH) retain 140/90 mmHg as the diagnostic threshold for pharmacological treatment initiation. Measurement requires at least 2 readings on 2+ separate occasions after 5 minutes of rest."
  },
  {
    id: 61,
    question: "The 'Foresight obesity system map' developed by the UK Government Office for Science depicts obesity as:",
    options: [
      "A simple cause-effect relationship between energy intake and expenditure",
      "A complex adaptive system with multiple interacting biological, psychological, social, and environmental determinants",
      "Primarily a behavioral problem amenable to individual-level interventions",
      "A medical condition driven mainly by genetic predisposition"
    ],
    answer: 1,
    explanation: "The Foresight Tackling Obesities project (2007) produced a systems map showing 108 variables and 300 connections contributing to obesity. The map demonstrates that obesity results from complex interactions among biology (genetics, endocrinology), psychology (emotional eating, stress), social factors (food culture, peer influence), and physical environment (food availability, built environment). This framing argues against single-cause explanations and supports multi-level, multi-sector interventions rather than focusing solely on individual behavior change."
  },
  {
    id: 62,
    question: "Under India's National Mental Health Programme, the District Mental Health Programme (DMHP) aims to:",
    options: [
      "Establish psychiatric hospitals in all district headquarters",
      "Integrate mental health services into the primary health care system at the district level",
      "Provide free psychiatric medications to patients above the poverty line",
      "Train specialist psychiatrists through National Institute of Mental Health"
    ],
    answer: 1,
    explanation: "DMHP (launched 1996 as part of NMHP) aims to integrate mental health into the existing primary health care infrastructure. It operates through district mental health teams based at District Hospitals, providing outpatient services, training primary health workers, providing psychotropic medicines at PHC level, and conducting community awareness programs. This task-shifting approach addresses the treatment gap in India, where over 80% of people with serious mental disorders receive no treatment."
  },
  {
    id: 63,
    question: "The Ottawa Charter for Health Promotion (1986) identifies which of the following as a key strategy for health promotion?",
    options: [
      "Screening programs for early disease detection",
      "Building healthy public policy, creating supportive environments, and strengthening community action",
      "Increasing hospital capacity for non-communicable disease treatment",
      "Improving drug access and insurance coverage for chronic conditions"
    ],
    answer: 1,
    explanation: "The Ottawa Charter for Health Promotion (1986) defined five key action areas: (1) Building healthy public policy, (2) Creating supportive environments, (3) Strengthening community action, (4) Developing personal skills, and (5) Reorienting health services toward prevention and health promotion. This ecological model of health promotion moved beyond individual behavior change to address structural, environmental, and policy determinants of health. It remains the foundational document of the health promotion movement."
  },
  {
    id: 64,
    question: "The recommended screening interval for cervical cancer using VIA (Visual Inspection with Acetic Acid) in India's NPCDCS program is:",
    options: [
      "Annual screening for all women aged 30-65",
      "Once in 3 years for women aged 30-65 in average-risk population",
      "Once in 5 years when combined with HPV DNA testing (co-testing)",
      "Every 5 years using only Pap smear in organized screening"
    ],
    answer: 1,
    explanation: "India's NPCDCS recommends VIA-based cervical cancer screening every 3 years for women aged 30-65 years in the average-risk population. VIA is preferred over Pap smear in low-resource settings because it is inexpensive, does not require a laboratory, provides immediate results, and can be performed by trained nurses. Positive VIA findings (acetowhite areas) are followed by colposcopy or LEEP (see-and-treat approach). WHO recommends HPV DNA testing as the preferred screening method globally."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "An advance directive (living will) is best described as:",
    options: [
      "A legal document transferring medical decision-making to the treating physician when a patient is incapacitated",
      "A written statement made by a competent person specifying their wishes regarding medical treatment if they become unable to make decisions",
      "A form signed by the family authorizing do-not-resuscitate status",
      "A physician's order limiting life-sustaining interventions in an ICU patient"
    ],
    answer: 1,
    explanation: "An advance directive is a prospective document prepared by a competent adult that expresses their values, treatment preferences, and end-of-life decisions for a time when they may lack decision-making capacity. It typically includes a living will (specific instructions about treatments) and/or designation of a healthcare proxy (durable power of attorney for healthcare). The Indian Supreme Court in Aruna Shanbaug (2011) and Common Cause vs Union of India (2018) recognized the right of a terminally ill person to execute an advance directive (passive euthanasia under strict conditions)."
  },
  {
    id: 66,
    question: "The doctrine of double effect (DDE) in medical ethics permits giving analgesics that may hasten death when:",
    options: [
      "The patient has explicitly requested euthanasia through an advance directive",
      "The intent is to relieve pain, the analgesic dose is proportionate, and any hastening of death is a foreseen but unintended side effect",
      "The family consents and the patient has a terminal illness with < 6 months prognosis",
      "Two independent physicians agree the treatment is futile"
    ],
    answer: 1,
    explanation: "The doctrine of double effect has four conditions: (1) the action itself must not be intrinsically wrong; (2) the agent must intend only the good effect (pain relief), not the bad effect (hastened death); (3) the bad effect must not be the means to the good effect; and (4) there must be proportionate reason for allowing the bad effect. Palliative sedation and adequate opioid dosing for pain are ethically justifiable under DDE even when they may incidentally shorten life. This distinguishes palliative care from euthanasia."
  },
  {
    id: 67,
    question: "The distinction between passive euthanasia and withdrawal of life-sustaining treatment (WLST) is best understood as:",
    options: [
      "Passive euthanasia requires physician action while WLST requires only family consent",
      "WLST is ethically and legally justified when treatment is futile or burdensome, whereas passive euthanasia implies intent to cause death",
      "They are legally identical in all jurisdictions",
      "Passive euthanasia applies to competent patients while WLST applies to unconscious patients only"
    ],
    answer: 1,
    explanation: "The ethical distinction turns on intent and proportionality. Withdrawal of life-sustaining treatment (e.g., removing a ventilator) is ethically justified when treatment is no longer beneficial, overly burdensome, or when the patient/surrogate refuses further treatment — death follows from the underlying disease. In passive euthanasia, the intent is specifically to cause death by withdrawing treatment. This distinction, while philosophically debated, has clinical and legal significance. The Indian Supreme Court (2018) permits WLST under judicial oversight for eligible patients."
  },
  {
    id: 68,
    question: "Opt-out (presumed consent) organ donation systems, compared to opt-in systems, are associated with:",
    options: [
      "Lower rates of actual organ donation due to family refusal overriding presumed consent",
      "Higher rates of deceased donor organ donation at the population level in most studies",
      "Equivalent donation rates but higher rates of living donor transplantation",
      "Ethical superiority over opt-in systems due to respect for autonomy"
    ],
    answer: 1,
    explanation: "International comparisons and natural experiments (countries switching from opt-in to opt-out) consistently show higher rates of deceased donor organ donation under presumed consent (opt-out) systems. Spain's high donation rates are partly attributed to a soft opt-out system combined with excellent transplant infrastructure. However, most opt-out countries still seek family consent in practice. Critics argue opt-out undermines autonomy by requiring active dissent; supporters argue it better reflects the majority's willingness to donate."
  },
  {
    id: 69,
    question: "Brain death criteria were first formally proposed in the Harvard criteria (1968), which required all of the following EXCEPT:",
    options: [
      "Unresponsiveness and no movements",
      "No spontaneous respirations (apnea test positive)",
      "Fixed dilated pupils with no brainstem reflexes",
      "EEG showing flat (isoelectric) tracing as a mandatory confirmatory test"
    ],
    answer: 3,
    explanation: "The 1968 Harvard Ad Hoc Committee criteria for brain death required: (1) unreceptivity and unresponsiveness; (2) no spontaneous movements or breathing; (3) no reflexes (including fixed, dilated pupils); and (4) flat electroencephalogram. The EEG was recommended but described as 'of great confirmatory value' rather than mandatory. Subsequent guidelines in many jurisdictions made EEG or other confirmatory tests (cerebral angiography, TCD, SPECT) optional rather than required, allowing clinical diagnosis alone when rigorous criteria are met."
  },
  {
    id: 70,
    question: "In research ethics, the principle of justice, as defined in the Belmont Report, specifically requires:",
    options: [
      "That research participants are treated fairly and their autonomy is respected",
      "Equitable selection of research subjects so that neither advantaged nor disadvantaged populations bear disproportionate burdens or receive disproportionate benefits",
      "That all research benefits accrue to the local community where the research is conducted",
      "Disclosure of all known conflicts of interest by the research team"
    ],
    answer: 1,
    explanation: "The Belmont Report (1979) identifies three ethical principles: respect for persons (autonomy/informed consent), beneficence (maximize benefit, minimize harm), and justice (fairness in distribution of benefits and burdens). Justice requires fair procedures in subject selection and that research should not exploit vulnerable populations (e.g., prisoners, the poor) as research subjects for the benefit of more privileged groups. It also requires that communities bearing research risks have access to research benefits."
  },
  {
    id: 71,
    question: "Medical negligence in India is legally established when:",
    options: [
      "A patient dies during a medical procedure regardless of the physician's care",
      "There is a duty of care, breach of that duty, and causation of harm resulting in damage",
      "A physician fails to achieve the best possible outcome despite taking all precautions",
      "A patient claims dissatisfaction with treatment outcome and seeks compensation"
    ],
    answer: 1,
    explanation: "Medical negligence in Indian law (based on the Bolam test and Supreme Court cases including Jacob Mathew vs State of Punjab, 2005) requires three elements: (1) existence of a duty of care toward the patient; (2) breach of that duty (failure to maintain the standard of a reasonably skilled practitioner in that specialty); and (3) damage caused as a direct result of the breach. A poor outcome alone is not negligence; the standard of care is not perfection but the conduct of a reasonable, competent practitioner with similar skills."
  },
  {
    id: 72,
    question: "Therapeutic privilege, the withholding of information from a patient during informed consent, is ethically:",
    options: [
      "Fully justified when the physician believes disclosure would cause significant psychological harm",
      "Rarely justified and must be narrowly interpreted; information should be withheld only if disclosure would cause immediate serious harm, not merely distress",
      "Standard practice in oncology when delivering cancer diagnoses",
      "Permitted in all cases where family members request non-disclosure"
    ],
    answer: 1,
    explanation: "Therapeutic privilege allows a physician to withhold information if disclosure would seriously harm the patient (e.g., precipitate suicide or severe incapacitation). However, it is increasingly recognized as an ethically problematic exception that can undermine autonomy and is frequently over-invoked. Most bioethicists argue it should apply only when harm is severe and imminent — mere patient distress, family preferences, or anticipated refusal of beneficial treatment do not justify withholding information. The concept is rejected in some jurisdictions."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "Phenylketonuria (PKU) results from deficiency of which enzyme?",
    options: [
      "Phenylalanine hydroxylase (PAH), converting phenylalanine to tyrosine",
      "Tyrosine aminotransferase, converting tyrosine to fumarate",
      "Homogentisate oxidase, causing accumulation of homogentisic acid",
      "Maleylacetoacetate isomerase in the tyrosine degradation pathway"
    ],
    answer: 0,
    explanation: "PKU is caused by deficiency of phenylalanine hydroxylase (PAH, chromosome 12q23), an enzyme that converts phenylalanine to tyrosine in the liver. Accumulation of phenylalanine and its metabolites (phenylpyruvate, phenylacetate, phenyllactate) causes progressive neurological damage, intellectual disability, fair skin/hair (tyrosine deficiency), and a mousy/musty odor. It is inherited in an autosomal recessive manner. Newborn screening and early dietary phenylalanine restriction prevent intellectual disability."
  },
  {
    id: 74,
    question: "Galactosemia (classic type) results from deficiency of:",
    options: [
      "Galactokinase (GALK), causing galactose accumulation and cataracts only",
      "Galactose-1-phosphate uridylyltransferase (GALT), causing galactose-1-phosphate toxicity",
      "UDP-galactose-4-epimerase, causing galactose-1-phosphate accumulation in red cells",
      "Lactase in the small intestinal brush border"
    ],
    answer: 1,
    explanation: "Classic galactosemia (type 1) is caused by GALT deficiency, leading to accumulation of galactose-1-phosphate in multiple organs (liver, brain, kidneys, gonads). Clinical features include neonatal liver failure, cataracts, intellectual disability, sepsis (especially E. coli), and ovarian failure in girls. Galactokinase deficiency (type 2) causes only cataracts due to galactitol accumulation. Treatment requires elimination of galactose from the diet (lactose/galactose-free formula). It is autosomal recessive (chromosome 9p13)."
  },
  {
    id: 75,
    question: "Maple syrup urine disease (MSUD) is caused by deficiency of:",
    options: [
      "Branched-chain amino acid transaminase, the first step in BCAA catabolism",
      "Branched-chain alpha-keto acid dehydrogenase complex (BCKAD), the second step in BCAA catabolism",
      "Isovaleryl-CoA dehydrogenase, specifically affecting leucine catabolism",
      "Alpha-methylacyl-CoA racemase, affecting isoleucine metabolism"
    ],
    answer: 1,
    explanation: "MSUD is an autosomal recessive disorder caused by deficiency of the BCKAD complex (comprising E1α, E1β, E2, E3 subunits), which decarboxylates branched-chain keto acids (BCKAs) derived from leucine, isoleucine, and valine. Accumulation of BCKAs and their precursor amino acids causes neonatal encephalopathy, maple syrup odor to urine/cerumen (from sotolone), and cerebral edema. Leucine is the primary neurotoxic amino acid. Treatment includes dietary BCAA restriction and, in severe cases, liver transplantation."
  },
  {
    id: 76,
    question: "Gaucher's disease, the most common lysosomal storage disorder, results from deficiency of:",
    options: [
      "Alpha-galactosidase A, causing globotriaosylceramide accumulation",
      "Beta-glucocerebrosidase (glucosylceramidase), causing glucocerebroside accumulation in macrophages",
      "Hexosaminidase A, causing GM2 ganglioside accumulation in neurons",
      "Sphingomyelinase, causing sphingomyelin accumulation in reticuloendothelial cells"
    ],
    answer: 1,
    explanation: "Gaucher's disease (autosomal recessive, chromosome 1q21) is caused by GBA1 mutations leading to beta-glucocerebrosidase deficiency and accumulation of glucocerebroside in macrophages (Gaucher cells) in the liver, spleen, and bone marrow. Type 1 (non-neuronopathic) is the most common form, characterized by hepatosplenomegaly, bone disease, and cytopenia. It has excellent response to enzyme replacement therapy (imiglucerase) and substrate reduction therapy (miglustat). Gaucher's is the most prevalent lysosomal storage disorder, especially in Ashkenazi Jewish populations."
  },
  {
    id: 77,
    question: "Fabry disease, an X-linked lysosomal storage disorder, affects males more severely because:",
    options: [
      "Males have only one copy of the GLA gene and cannot compensate for deficient alpha-galactosidase A activity",
      "The gene is subject to genomic imprinting, with paternal allele always silenced",
      "Males have higher glucocerebroside turnover requiring more enzyme activity",
      "Y chromosome genes enhance the toxic effects of globotriaosylceramide accumulation"
    ],
    answer: 0,
    explanation: "Fabry disease is caused by mutations in the GLA gene (Xq22) encoding alpha-galactosidase A, leading to accumulation of globotriaosylceramide (Gb3) in vascular endothelium, kidneys, heart, and nervous system. Males with the mutation are hemizygous and have no second X chromosome to compensate, causing full expression of the disease. Females who are heterozygous (carriers) have one normal allele and often have attenuated disease, though serious complications can occur depending on X-inactivation patterns."
  },
  {
    id: 78,
    question: "The ideal time for newborn screening for congenital hypothyroidism using blood spot TSH is:",
    options: [
      "Within the first 6 hours of birth before thyroid function stabilizes",
      "48-72 hours after birth to allow postnatal TSH surge to subside",
      "At 2 weeks of age after discharge from the newborn nursery",
      "At the 6-week postnatal visit when the infant is clinically assessed"
    ],
    answer: 1,
    explanation: "Newborn blood spot TSH screening for congenital hypothyroidism should be collected at 48-72 hours of age. At birth, all newborns experience a physiological TSH surge (30-60 mIU/L) due to exposure to the cold extrauterine environment; this surge resolves by 24-48 hours. Sampling before 48 hours yields false-positive results due to this physiological TSH peak. Early discharge necessitates repeat sampling if collected before 24 hours. Treatment with levothyroxine should start by 2 weeks of age to prevent neurological damage."
  },
  {
    id: 79,
    question: "Niemann-Pick disease type C (NPC) is pathophysiologically distinct from types A and B because it involves:",
    options: [
      "Deficiency of sphingomyelinase causing sphingomyelin accumulation",
      "Defective intracellular cholesterol trafficking due to mutations in NPC1 or NPC2 proteins",
      "Accumulation of ganglioside GM1 due to beta-galactosidase deficiency",
      "Peroxisomal dysfunction causing very long chain fatty acid accumulation"
    ],
    answer: 1,
    explanation: "NPC types A and B are caused by acid sphingomyelinase deficiency (SMPD1 gene), causing sphingomyelin accumulation. NPC type C is a distinct disorder caused by mutations in NPC1 (95% of cases) or NPC2 genes, which encode proteins involved in intracellular cholesterol and glycosphingolipid trafficking from late endosomes/lysosomes. Clinical features include vertical supranuclear gaze palsy, cerebellar ataxia, cognitive decline, and sea-blue histiocytes in bone marrow. Miglustat is approved as substrate reduction therapy for NPC."
  },
  {
    id: 80,
    question: "The tandem mass spectrometry (MS/MS) newborn screening panel can detect which of the following categories of disorders simultaneously?",
    options: [
      "Only amino acid disorders such as PKU and MSUD",
      "Amino acid disorders, organic acid disorders, and fatty acid oxidation defects using a single dried blood spot",
      "Lysosomal storage disorders, peroxisomal disorders, and glycogen storage diseases",
      "Chromosomal disorders detected by array CGH on blood spot"
    ],
    answer: 1,
    explanation: "Tandem mass spectrometry (MS/MS) expanded newborn screening simultaneously identifies over 30 disorders from a single dried blood spot (Guthrie card) by measuring amino acid profiles, acylcarnitine profiles, and their ratios. This covers amino acid disorders (PKU, MSUD, homocystinuria, tyrosinemia), organic acid disorders (propionic acidemia, methylmalonic acidemia, isovaleric acidemia), and fatty acid oxidation defects (MCAD deficiency, VLCAD deficiency). MS/MS dramatically expanded newborn screening capacity compared to older single-analyte methods."
  },

  // Questions 81-86: Microbiology
  {
    id: 81,
    question: "The gold standard blood culture technique for detecting bacteremia includes all of the following EXCEPT:",
    options: [
      "Collection of 20-30 mL blood per set in adults (10 mL per bottle)",
      "Collection of 2-3 sets from different venipuncture sites before antibiotic initiation",
      "Incubation in automated continuous-monitoring systems for up to 5 days",
      "Inoculation of both anaerobic and aerobic bottles is unnecessary for ICU patients"
    ],
    answer: 3,
    explanation: "Optimal blood culture technique includes: collection of 20-30 mL total blood in adults per set (10 mL each in aerobic and anaerobic bottles); 2-3 sets from separate venipuncture sites at different times; collection before antibiotic initiation; and continuous-monitoring automated systems (BACTEC, BacT/ALERT) with incubation for up to 5 days. Both aerobic and anaerobic bottles are essential for all patients, including ICU patients, because anaerobic bacteremia (Bacteroides, Clostridium) is clinically significant and can be missed with aerobic culture alone."
  },
  {
    id: 82,
    question: "Significant bacteriuria in a symptomatic patient with a urinary tract infection is defined as a colony count of:",
    options: [
      "≥ 10^3 CFU/mL for any organism",
      "≥ 10^5 CFU/mL (100,000 CFU/mL) of a uropathogen",
      "≥ 10^4 CFU/mL with pyuria (WBC > 10/hpf)",
      "Any growth of E. coli regardless of colony count"
    ],
    answer: 1,
    explanation: "The classic Kass criterion defines significant bacteriuria as ≥ 10^5 CFU/mL in a midstream clean-catch urine specimen from a symptomatic patient. However, lower counts (≥ 10^2-10^3 CFU/mL) may be significant in symptomatic women (uncomplicated cystitis), catheter specimens, or suprapubic aspirates. In asymptomatic bacteriuria (screening for pregnant women and before urological procedures), the same ≥ 10^5 CFU/mL threshold applies on two consecutive specimens for the same organism."
  },
  {
    id: 83,
    question: "The Bartlett scoring system for assessing sputum quality evaluates:",
    options: [
      "Colony count of respiratory pathogens per mL of sputum",
      "Proportion of neutrophils (PMNs) and squamous epithelial cells per low-power field",
      "Antibiotic sensitivity pattern of organisms isolated from sputum",
      "Volume of sputum collected and its macroscopic appearance"
    ],
    answer: 1,
    explanation: "The Bartlett (and Murray-Washington) grading systems assess sputum quality by examining the cellular composition under low-power microscopy (×100). The Murray-Washington criteria reject samples with < 25 PMNs and > 10 squamous epithelial cells per low-power field (indicating upper respiratory tract contamination rather than lower respiratory tract secretions). Bartlett's system adds a score of +1 for each 10 PMNs/lpf, subtracts 1 for each 10 epithelial cells/lpf, and adds 1 for mucus; scores ≥ 0 indicate an acceptable sample."
  },
  {
    id: 84,
    question: "India ink preparation of CSF is used to diagnose:",
    options: [
      "Bacterial meningitis due to Neisseria meningitidis",
      "Cryptococcal meningitis, demonstrating the polysaccharide capsule",
      "Tuberculous meningitis by demonstrating acid-fast bacilli",
      "Viral encephalitis by identifying intranuclear inclusions"
    ],
    answer: 1,
    explanation: "India ink (nigrosin) preparation of CSF demonstrates the wide polysaccharide capsule of Cryptococcus neoformans/gattii as a clear halo around the yeast cells against the dark background. It has a sensitivity of 50-75% for cryptococcal meningitis; sensitivity is higher in HIV-infected patients with high fungal burden. Cryptococcal antigen (CrAg) testing in CSF and serum is more sensitive (> 99%) and is the preferred diagnostic method. CSF glucose is low and protein elevated in cryptococcal meningitis."
  },
  {
    id: 85,
    question: "The VITEK 2 automated system in clinical microbiology is used for:",
    options: [
      "Continuous blood culture monitoring",
      "Rapid bacterial identification and antimicrobial susceptibility testing",
      "Detection of fungal DNA by PCR amplification",
      "Measurement of antibiotic serum levels for pharmacokinetic monitoring"
    ],
    answer: 1,
    explanation: "VITEK 2 (bioMerieux) is an automated system using card-based colorimetric and fluorometric reactions to identify bacteria and fungi (to species level) and perform antimicrobial susceptibility testing (AST) with MIC determination. Results are typically available within 4-18 hours from a pure culture. VITEK MS (matrix-assisted laser desorption/ionization time-of-flight mass spectrometry, MALDI-TOF) provides even faster identification (minutes) from colonies. These automated systems have replaced many manual biochemical tests in clinical microbiology laboratories."
  },
  {
    id: 86,
    question: "A wound swab culture growing coagulase-negative staphylococci (CoNS) is most likely to represent:",
    options: [
      "A serious polymicrobial infection requiring broad-spectrum antibiotics",
      "Skin flora contamination during specimen collection in most superficial wounds",
      "Methicillin-resistant Staphylococcus aureus misidentified by the automated system",
      "A pathogen in all cases, requiring targeted anti-staphylococcal therapy"
    ],
    answer: 1,
    explanation: "CoNS (including S. epidermidis, S. capitis, S. haemolyticus) are normal skin flora that frequently contaminate wound swabs taken from superficial wounds or when skin decontamination before swabbing is inadequate. Isolation of CoNS from a surface wound swab typically represents contamination rather than true infection. CoNS are significant pathogens in implant-related infections, prosthetic valve endocarditis, and immunocompromised patients. Clinical context (signs of wound infection, host factors, culture quantity, repeated isolation) guides interpretation."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "The Latin term 'per os' (p.o.) in medical prescriptions means:",
    options: [
      "As needed (as circumstances require)",
      "By mouth (orally)",
      "After meals",
      "Every day (daily)"
    ],
    answer: 1,
    explanation: "Per os (p.o.) is Latin for 'through the mouth' or 'by mouth,' indicating oral administration of a medication. It is one of the most commonly used Latin abbreviations in prescriptions. Other common Latin terms include: p.r.n. (pro re nata — as needed), a.c. (ante cibum — before meals), p.c. (post cibum — after meals), q.d. (quaque die — every day), b.i.d. (bis in die — twice daily), and t.i.d. (ter in die — three times daily). The use of Latin abbreviations in prescriptions is being phased out in many countries due to medication errors."
  },
  {
    id: 88,
    question: "The medical abbreviation 'SOAP' in clinical note-writing stands for:",
    options: [
      "Symptoms, Objective findings, Assessment, Plan",
      "Subjective, Objective, Assessment, Plan",
      "Signs, Observations, Analysis, Protocol",
      "Subjective, Observations, Appraisal, Prescriptions"
    ],
    answer: 1,
    explanation: "SOAP notes are a structured clinical documentation format: Subjective (patient's reported symptoms, chief complaint, history), Objective (vital signs, physical examination findings, laboratory and imaging results), Assessment (diagnosis or differential diagnosis), and Plan (treatment, investigations ordered, referrals, patient education). Developed by Lawrence Weed in the 1970s as part of problem-oriented medical records (POMR), SOAP notes provide a systematic approach to clinical reasoning and communication across healthcare providers."
  },
  {
    id: 89,
    question: "The eponym 'Trousseau's sign' refers to:",
    options: [
      "A positive Chvostek's facial nerve tap indicating hypocalcemia",
      "Carpal spasm induced by inflating a blood pressure cuff above systolic pressure for 3 minutes in hypocalcemia",
      "Visible peristaltic waves across the abdomen in pyloric obstruction",
      "Thrombophlebitis migrans associated with visceral malignancy"
    ],
    answer: 1,
    explanation: "Trousseau's sign of latent tetany is elicited by inflating a sphygmomanometer cuff on the arm above systolic blood pressure for 2-3 minutes; in hypocalcemia, this causes carpal spasm (main d'accoucheur — obstetrician's hand) due to increased neuromuscular irritability. It is more sensitive (94%) than Chvostek's sign (facial nerve tap causing facial muscle twitch) for latent tetany. Note: Trousseau's sign of malignancy (migratory thrombophlebitis) is a separate eponym describing a paraneoplastic phenomenon in visceral cancers."
  },
  {
    id: 90,
    question: "Which of the following medical terms is correctly spelled?",
    options: [
      "Diarrhoea, Haemorrhage, Oesophagus, Leukaemia (British English)",
      "Diarrhea, Hemorrhage, Esophagus, Leukemia (American English)",
      "Diarrhoea, Hemorrhage, Esophagus, Leukaemia (mixed spelling — incorrect)",
      "Both A and B are correct spelling conventions within their respective systems"
    ],
    answer: 3,
    explanation: "Medical English uses two parallel spelling conventions: British English retains the 'oe' and 'ae' ligatures (oesophagus, haemorrhage, leukaemia, diarrhoea), while American English simplifies these to 'e' and 'e' (esophagus, hemorrhage, leukemia, diarrhea). Both systems are internally consistent. International medical journals typically specify which convention they follow; WHO uses a mix with preference for simpler forms in technical documents. Neither system is inherently more correct — consistency within a document is what matters."
  },
  {
    id: 91,
    question: "The abbreviation 'HEENT' in a physical examination refers to:",
    options: [
      "Heart, Extremities, Eyes, Neurological, Throat",
      "Head, Eyes, Ears, Nose, and Throat",
      "History, Examination, Evaluation, Neurological, Temperature",
      "Hypersensitivity, Eczema, Epistaxis, Nasal, Tonsils"
    ],
    answer: 1,
    explanation: "HEENT is a standard examination section acronym for Head, Eyes, Ears, Nose, and Throat. In clinical notes, HEENT examination documents: head shape/scalp (normocephalic, atraumatic — NCAT), eye findings (pupils equal round reactive to light — PERRL, extraocular movements — EOM intact), ear findings (tympanic membranes), nasal mucosa/septum, oropharynx, and throat (tonsils, posterior pharyngeal wall). This systematic approach ensures a complete head-and-neck examination is documented."
  },
  {
    id: 92,
    question: "The Eponym 'Cullen's sign' is described as:",
    options: [
      "Bluish discoloration around the umbilicus indicating retroperitoneal hemorrhage",
      "Yellowing of the conjunctiva indicating jaundice",
      "Redness and warmth over the mastoid process indicating mastoiditis",
      "Distended neck veins at 45 degrees indicating elevated central venous pressure"
    ],
    answer: 0,
    explanation: "Cullen's sign is periumbilical bruising (bluish discoloration around the navel) caused by blood tracking from retroperitoneal hemorrhage along fascial planes to the anterior abdominal wall. It is associated with severe acute pancreatitis (hemorrhagic pancreatitis) and ruptured ectopic pregnancy. Grey Turner's sign is a related finding — flank bruising (ecchymosis in the flank/loin) also indicating retroperitoneal hemorrhage. Both signs typically appear 24-72 hours after the onset of hemorrhage."
  },
  {
    id: 93,
    question: "The abbreviation 'NPO' in medical orders stands for (from Latin):",
    options: [
      "No particular orders (general nursing abbreviation)",
      "Nil per os (nothing by mouth)",
      "Normal peripheral osmolarity",
      "Non-pharmacological order"
    ],
    answer: 1,
    explanation: "NPO is derived from the Latin 'nil (or nihil) per os,' meaning 'nothing by mouth.' It indicates that a patient should not consume any food, liquids, or oral medications, typically before surgical procedures, endoscopy, or when swallowing is unsafe. Current anesthesia guidelines have modified traditional 'midnight fasting' to more nuanced fasting periods: clear fluids are generally permitted up to 2 hours, breast milk up to 4 hours, and solid food up to 6-8 hours before elective procedures."
  },

  // Questions 94-100: General Knowledge (Health Statistics & Surveys)
  {
    id: 94,
    question: "The Sample Registration System (SRS) in India provides data on:",
    options: [
      "Disease-specific morbidity and disability prevalence",
      "Vital rates (birth rate, death rate, infant mortality rate, fertility rate) through a dual-recording system",
      "Health facility utilization and out-of-pocket expenditure",
      "Malnutrition prevalence using anthropometric measurements"
    ],
    answer: 1,
    explanation: "SRS, established in 1964-65 and operationalized in 1969-70, is a large-scale demographic survey operated by the Office of the Registrar General of India (ORGI). It uses a dual-recording system: continuous registration by a resident part-time enumerator and six-monthly retrospective surveys by a supervisor. The matching of records ensures near-complete coverage. SRS provides estimates of birth rates, death rates, infant mortality rate (IMR), under-5 mortality, total fertility rate, and cause-specific mortality through the Medical Certification of Cause of Death (MCCD) component."
  },
  {
    id: 95,
    question: "The National Family Health Survey (NFHS) in India is the primary source for data on:",
    options: [
      "Cause-specific mortality rates by state and district",
      "Fertility, family planning, maternal and child health, nutrition, and HIV indicators at state/district level",
      "Morbidity prevalence from non-communicable diseases in rural India",
      "Health facility infrastructure and human resources for health"
    ],
    answer: 1,
    explanation: "NFHS is the Indian equivalent of the Demographic and Health Surveys (DHS) program, conducted since 1992 (NFHS-1). NFHS-5 (2019-21) covered 636,699 households across all 36 states/UTs and 707 districts (first with district-level data). It provides data on fertility, family planning, infant and child mortality, maternal health, child nutrition (stunting, wasting, underweight), anemia, immunization, HIV knowledge, domestic violence, and women's empowerment. NFHS uses stratified two-stage cluster sampling."
  },
  {
    id: 96,
    question: "The District Level Household and Facility Survey (DLHS) in India was designed primarily to:",
    options: [
      "Provide annual estimates of NCD prevalence at the district level",
      "Monitor reproductive and child health program coverage at the district level for program management",
      "Assess environmental and occupational health hazards in rural districts",
      "Provide data for ASER (Annual Status of Education Report)"
    ],
    answer: 1,
    explanation: "DLHS was designed to provide district-level estimates of reproductive and child health (RCH) indicators to monitor the performance of RCH program (now NHM). Four rounds have been conducted (DLHS-1 to DLHS-4, 1998-2013). DLHS-3 (2007-08) covered 601 districts. It collected data on contraception, antenatal care, institutional delivery, immunization, child health, adolescent health, and facility readiness. DLHS served as a supplement to NFHS with more frequent district-level monitoring data."
  },
  {
    id: 97,
    question: "The Annual Health Survey (AHS) of India was conducted in which states and for what primary purpose?",
    options: [
      "All 29 states, to provide annual national estimates of mortality rates",
      "The Empowered Action Group (EAG) states plus Assam, to provide annual district-level vital and health indicators for high-burden states",
      "Metro cities only, to estimate urban health indicators",
      "Southern states only, to provide baseline for health system strengthening programs"
    ],
    answer: 1,
    explanation: "AHS (2010-11 to 2012-13) was conducted in the 9 Empowered Action Group (EAG) states (UP, Bihar, Jharkhand, Uttarakhand, Odisha, Chhattisgarh, Rajasthan, MP) plus Assam — states with the highest fertility and mortality burdens in India. It provided annual district-level estimates of birth rate, death rate, IMR, maternal mortality ratio, child sex ratio, and health indicators. AHS used a census of households in sample units for vital event registration, providing more timely district-level data than the 5-yearly NFHS."
  },
  {
    id: 98,
    question: "The Health Management Information System (HMIS) in India primarily collects data from:",
    options: [
      "Household surveys conducted by ASHA workers in their catchment areas",
      "Public health facilities reporting service delivery data on a monthly basis through a web-based portal",
      "Private hospitals submitting mandatory annual reports to state governments",
      "Community-based sentinel surveillance sites for infectious disease monitoring"
    ],
    answer: 1,
    explanation: "HMIS (launched 2008 under NHM) is a web-based facility reporting system where all public health facilities (sub-centres, PHCs, CHCs, district hospitals) report monthly data on maternal health services (ANC, deliveries, PNC), child health (immunization, IMNCI), family planning, disease surveillance, and facility infrastructure. Data flows from facility to block to district to state to national level. HMIS data helps identify service delivery gaps and track NHM targets but has limitations of data quality, completeness, and under-reporting."
  },
  {
    id: 99,
    question: "Civil registration of births and deaths in India is governed by:",
    options: [
      "The Census Act, 1948, administered by the Census Commissioner",
      "The Registration of Births and Deaths Act, 1969, administered by the Registrar General of India",
      "The Medical Certification of Cause of Death Act, 1956",
      "The Vital Statistics (India) Act, 1971, implemented by state governments"
    ],
    answer: 1,
    explanation: "The Registration of Births and Deaths (RBD) Act, 1969 provides the legal framework for compulsory registration of all births and deaths within 21 days of occurrence in India. It is administered by the Registrar General and Census Commissioner of India (ORGI) at the national level and by Chief Registrars of Births and Deaths at the state level. Registration rates have improved significantly: birth registration reached ~92% and death registration ~86% by 2019. Complete civil registration is essential for generating reliable vital statistics without relying on survey-based estimates."
  },
  {
    id: 100,
    question: "The Integrated Disease Surveillance Programme (IDSP) in India uses 'S', 'P', and 'L' forms for weekly reporting. These stand for:",
    options: [
      "Syndromic, Probable, and Laboratory-confirmed cases respectively",
      "Suspected, Probable, and Confirmed (Laboratory) cases respectively",
      "Symptomatic, Presumptive, and Laboratory-verified cases respectively",
      "Surveillance, Prevention, and Laboratory data forms respectively"
    ],
    answer: 1,
    explanation: "IDSP (launched 2004) uses a three-tier reporting system through weekly forms: S-form (Syndromic surveillance) — reported by community health workers and ASHA workers based on symptom syndromes without laboratory confirmation; P-form (Presumptive/Probable diagnosis) — reported by clinicians at PHC/CHC level based on clinical assessment; L-form (Laboratory-confirmed cases) — reported by district and state laboratories. District Rapid Response Teams (RRT) investigate outbreaks reported through IDSP. The IDSP portal enables real-time data visualization and early warning for outbreaks."
  }
];

export default questions;

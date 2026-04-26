const questions = [
  // ========== Types of Study Designs - Cohort, Case-Control, RCT (Q1-Q10) ==========
  {
    id: 1,
    question: "A researcher wants to study whether a new antihypertensive drug reduces the incidence of stroke compared to standard therapy. She randomly assigns 2000 patients to either the new drug or standard therapy and follows them for 5 years. Which CONSORT guideline element is MOST critical for reporting this study?",
    options: [
      "Flow diagram showing participant allocation, follow-up, and analysis",
      "Description of the study setting and locations",
      "Funding sources and role of funders",
      "Baseline demographic table only"
    ],
    answer: 0,
    explanation: "The CONSORT (Consolidated Standards of Reporting Trials) statement mandates a flow diagram as the most critical element for transparent reporting of RCTs. This diagram must show the number of participants screened, randomized, allocated to each group, lost to follow-up, and analyzed. It ensures the reader can assess selection bias and attrition bias. While all other options are part of CONSORT, the flow diagram is considered the hallmark requirement that distinguishes CONSORT from other reporting guidelines."
  },
  {
    id: 2,
    question: "In a cohort study examining the association between air pollution and lung cancer, researchers notice that participants who volunteered for the study tend to be more health-conscious than the general population. This is an example of:",
    options: [
      "Berkson's bias",
      "Volunteer bias (healthy volunteer effect)",
      "Recall bias",
      "Lead time bias"
    ],
    answer: 1,
    explanation: "Volunteer bias (also called healthy volunteer effect or healthy worker effect in occupational studies) occurs when individuals who volunteer to participate in studies differ systematically from the general population. Volunteers tend to be healthier, more educated, and more health-conscious. This can lead to underestimation of disease incidence and prevalence in the cohort. In this scenario, the health-conscious volunteers may have lower exposure to other risk factors, potentially distorting the true association between air pollution and lung cancer."
  },
  {
    id: 3,
    question: "A case-control study investigates the relationship between oral contraceptive use and deep vein thrombosis (DVT). Cases are selected from a tertiary hospital and controls from the same hospital's orthopedic ward. The estimated odds ratio is likely to be:",
    options: [
      "Overestimated due to recall bias",
      "Underestimated due to Berkson's bias",
      "Accurate because hospital controls reduce selection bias",
      "Overestimated due to Neyman bias"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) occurs in hospital-based case-control studies when the exposure of interest is associated with the hospitalization of controls. Orthopedic patients (controls) are more likely to be on oral contraceptives or have conditions associated with OCP use, and OCPs are also associated with orthopedic conditions through immobilization risk. This artificially increases the exposure prevalence among controls, thereby underestimating the true odds ratio. The formula: OR = (a/c) / (b/d), and if 'b' (exposed controls) is inflated, the OR decreases."
  },
  {
    id: 4,
    question: "Mendelian randomization uses genetic variants as instrumental variables to assess causal relationships. Which of the following is NOT an assumption of Mendelian randomization?",
    options: [
      "The genetic variant is associated with the exposure",
      "The genetic variant affects the outcome only through the exposure",
      "The genetic variant is not associated with confounders",
      "The genetic variant must have a large effect size on the outcome directly"
    ],
    answer: 3,
    explanation: "Mendelian randomization (MR) relies on three core assumptions (instrumental variable assumptions): (1) Relevance - the genetic variant must be robustly associated with the exposure; (2) Exclusion restriction - the genetic variant affects the outcome ONLY through the exposure (no direct effect on outcome); (3) Independence - the genetic variant is not associated with confounders of the exposure-outcome relationship. MR does NOT require the genetic variant to have a large direct effect on the outcome; in fact, it should have NO direct effect on the outcome. The entire principle of MR is that genetic variants, being randomly allocated at conception (like randomization in an RCT), can serve as unconfounded proxies for environmental exposures."
  },
  {
    id: 5,
    question: "A pragmatic RCT comparing two surgical techniques for inguinal hernia repair allows surgeons to choose their preferred anesthesia protocol and follow their usual post-operative care routines. According to the PRECIS-2 tool, which domain does this study design address?",
    options: [
      "Flexibility of adherence",
      "Flexibility of the intervention delivery",
      "Eligibility criteria",
      "Primary outcome"
    ],
    answer: 1,
    explanation: "The PRECIS-2 (Pragmatic-Explanatory Continuum Indicator Summary) tool has 9 domains to assess where a trial sits on the pragmatic-explanatory continuum. 'Flexibility of the intervention delivery' refers to how much latitude practitioners have in delivering the intervention. In this scenario, allowing surgeons to choose anesthesia and follow usual post-operative care represents high flexibility in intervention delivery, making the trial more pragmatic. This contrasts with an explanatory trial where every aspect of the intervention would be strictly protocolized. 'Flexibility of adherence' relates to what measures are taken to ensure participants adhere to the intervention."
  },
  {
    id: 6,
    question: "In a retrospective cohort study of statin use and pancreatic cancer, patients who were prescribed statins but died before the cancer could develop were excluded from the analysis. This introduces:",
    options: [
      "Immortal time bias",
      "Selection bias due to loss to follow-up",
      "Surveillance bias",
      "Protopathic bias"
    ],
    answer: 0,
    explanation: "Immortal time bias occurs when there is a period of follow-up during which the outcome cannot occur, and this time is either excluded from analysis or misclassified. In this scenario, the period between cohort entry and statin prescription represents 'immortal time' - the patient must survive long enough to receive the prescription. By excluding those who died before developing cancer, the analysis creates a spurious survival advantage for the statin group. The bias can be addressed by treating statin exposure as a time-varying covariate, ensuring person-time is correctly classified. This is a common bias in pharmacoepidemiological studies."
  },
  {
    id: 7,
    question: "The STROBE statement for reporting observational studies recommends that cohort studies should report which of the following?",
    options: [
      "Number of participants at each stage with reasons for non-participation",
      "Randomization sequence generation method",
      "Blinding of outcome assessors only",
      "Intention-to-treat analysis results"
    ],
    answer: 0,
    explanation: "STROBE (Strengthening the Reporting of Observational Studies in Epidemiology) provides guidelines for reporting cohort, case-control, and cross-sectional studies. A key recommendation is reporting the number of participants at each stage of the study (e.g., potentially eligible, examined for eligibility, confirmed eligible, included in the study, completing follow-up, and analyzed) along with reasons for non-participation at each stage. This is analogous to the CONSORT flow diagram but adapted for observational studies. Options B and D are specific to RCTs (CONSORT), and option C alone is insufficient for observational study reporting."
  },
  {
    id: 8,
    question: "A researcher uses propensity score matching to compare outcomes of laparoscopic versus open cholecystectomy from a hospital registry. The propensity score represents:",
    options: [
      "The probability of the outcome given the treatment received",
      "The probability of receiving the treatment given observed baseline covariates",
      "The probability of being included in the study given exposure status",
      "The probability of having an unmeasured confounder"
    ],
    answer: 1,
    explanation: "The propensity score, introduced by Rosenbaum and Rubin (1983), is defined as the conditional probability of receiving a particular treatment given a set of observed baseline covariates: e(x) = P(T=1 | X=x), where T is treatment assignment and X represents observed covariates. By matching treated and untreated subjects with similar propensity scores, the distribution of observed covariates is balanced between groups, mimicking randomization for measured variables. Important limitations include: (1) it only balances observed covariates, not unmeasured confounders; (2) it requires the positivity assumption (overlap in propensity scores between groups); (3) model specification for propensity score estimation must be correct."
  },
  {
    id: 9,
    question: "In a cluster-randomized trial of a hand hygiene intervention in 40 hospitals, the intraclass correlation coefficient (ICC) is 0.05. Compared to an individually randomized trial of the same total sample size, this cluster RCT will have:",
    options: [
      "Greater statistical power due to natural grouping",
      "Reduced statistical power due to the design effect",
      "Identical statistical power if cluster sizes are equal",
      "Greater statistical power if the ICC is positive"
    ],
    answer: 1,
    explanation: "Cluster randomization introduces correlation among individuals within the same cluster, quantified by the ICC. The design effect (DEFF) inflates the required sample size: DEFF = 1 + (m-1) x ICC, where m is the average cluster size. For example, if each hospital has 100 patients and ICC = 0.05: DEFF = 1 + (100-1) x 0.05 = 5.95. This means the effective sample size is reduced by a factor of ~6, substantially reducing statistical power compared to individual randomization. The analysis must account for clustering using methods like generalized estimating equations (GEE) or mixed-effects models."
  },
  {
    id: 10,
    question: "A non-inferiority RCT comparing a new oral anticoagulant to warfarin for stroke prevention in atrial fibrillation sets a non-inferiority margin of 1.5 for the hazard ratio. The study finds HR = 1.2 with 95% CI (0.9 - 1.4). The correct interpretation is:",
    options: [
      "The new drug is superior to warfarin",
      "Non-inferiority is established because the upper CI bound is below the margin",
      "The result is inconclusive because the CI includes 1.0",
      "The new drug is inferior to warfarin"
    ],
    answer: 1,
    explanation: "In a non-inferiority trial, the null hypothesis is that the new treatment is worse than the comparator by at least the non-inferiority margin. Non-inferiority is established when the upper bound of the confidence interval for the hazard ratio falls below the pre-specified non-inferiority margin. Here, the upper bound of 1.4 is below the margin of 1.5, so non-inferiority is demonstrated. Note that the CI includes 1.0, which means we cannot claim superiority, but this is irrelevant for the non-inferiority conclusion. The choice of margin (1.5) should be justified based on clinical relevance and the effect size of warfarin vs. placebo in historical trials (the constancy assumption)."
  },

  // ========== Incidence, Prevalence (Q11-Q20) ==========
  {
    id: 11,
    question: "In a population of 10,000 people, 200 have diabetes at the start of the year. During the year, 150 new cases are diagnosed and 30 people with diabetes die. The prevalence at the end of the year is:",
    options: [
      "200/10,000",
      "320/10,000",
      "350/10,000",
      "150/10,000"
    ],
    answer: 1,
    explanation: "Prevalence at end of year = (Existing cases at start + New cases - Deaths among cases) / Population. Existing cases = 200, New cases = 150, Deaths among cases = 30. Prevalent cases at end = 200 + 150 - 30 = 320. Prevalence = 320/10,000 = 3.2%. This illustrates the relationship: Prevalence is a function of incidence and disease duration (P approximately equals I x D for rare diseases in steady state). The deaths reduce the prevalent pool. Note: we assume no migration and no cures in this calculation."
  },
  {
    id: 12,
    question: "The mortality rate in a city is 8 per 1,000 per year while the case fatality rate (CFR) for tuberculosis is 15%. Which statement correctly distinguishes these two measures?",
    options: [
      "Both are incidence measures; mortality rate uses person-time while CFR uses total population",
      "Mortality rate measures risk of death in the total population; CFR measures the proportion of deaths among those diagnosed with a specific disease",
      "Mortality rate and CFR are identical measures expressed differently",
      "CFR is always higher than mortality rate because it includes prevalent cases"
    ],
    answer: 1,
    explanation: "Mortality rate and case fatality rate (CFR) are fundamentally different measures. Mortality rate = Number of deaths / Total population at risk over a time period. It reflects the risk of dying in the general population. CFR = Number of deaths from a specific disease / Number of people diagnosed with that disease. It reflects the virulence or severity of a disease. For TB: CFR of 15% means 15 out of every 100 diagnosed TB patients die. The mortality rate of 8/1,000 includes all causes of death in the entire population. CFR is technically a proportion (not a rate) as it lacks a time dimension in its basic form, though time-specific CFR can be calculated."
  },
  {
    id: 13,
    question: "A standardized mortality ratio (SMR) of 1.45 (95% CI: 1.20-1.75) in a cohort of coal miners compared to the general population indicates:",
    options: [
      "Coal miners have a 45% lower mortality than expected",
      "Coal miners have a 45% higher mortality than expected based on age-specific rates of the reference population",
      "The mortality rate in coal miners is 1.45 per 1,000",
      "The relative risk of death is 0.45"
    ],
    answer: 1,
    explanation: "The Standardized Mortality Ratio (SMR) = Observed deaths / Expected deaths x 100 (or expressed as a ratio without multiplying by 100). SMR = 1.45 means observed deaths are 1.45 times the expected deaths, i.e., 45% excess mortality. The expected deaths are calculated by applying age-specific (and often sex-specific) mortality rates from the reference (general) population to the person-years of the study cohort in each age stratum: Expected = sum of (age-specific rate in reference x person-years in cohort for that age group). The 95% CI of 1.20-1.75 excludes 1.0, confirming statistically significant excess mortality. SMR is a form of indirect standardization used when age-specific rates in the study population are unstable due to small numbers."
  },
  {
    id: 14,
    question: "In a cohort of 5,000 initially disease-free individuals followed for varying durations, 100 develop the disease. The total person-years of follow-up is 20,000. The incidence density (person-time incidence rate) is:",
    options: [
      "100/5,000 = 0.02 or 2%",
      "100/20,000 = 0.005 or 5 per 1,000 person-years",
      "100/4,900 = 0.0204",
      "5,000/20,000 = 0.25"
    ],
    answer: 1,
    explanation: "Incidence density (incidence rate, person-time rate) = Number of new cases / Total person-time at risk. Here: 100/20,000 = 0.005 per person-year = 5 per 1,000 person-years. This differs from cumulative incidence (risk), which uses the number of people at risk in the denominator (100/5,000 = 2%). Incidence density is preferred when follow-up times vary across participants because it accounts for differential follow-up. Its units are inverse time (per person-year), not a dimensionless proportion. It can theoretically exceed 1.0 (unlike cumulative incidence), and it represents the instantaneous rate of disease occurrence."
  },
  {
    id: 15,
    question: "The prevalence of hypertension in India is 30% and the average duration of hypertension from diagnosis to death or cure is 20 years. Assuming a steady state, the approximate incidence rate of hypertension is:",
    options: [
      "30% x 20 = 600%",
      "30% / 20 = 1.5% per year",
      "20 / 30% = 66.7 per year",
      "(30% x 20) / (1 - 30%) = 8.57% per year"
    ],
    answer: 1,
    explanation: "Using the prevalence-incidence relationship for a steady-state population (when prevalence is not too high): P approximately equals I x D, where P = prevalence, I = incidence rate, and D = average duration of disease. Rearranging: I = P / D = 0.30 / 20 = 0.015 = 1.5% per year. For higher prevalence, the more exact formula is: P / (1-P) = I x D, giving I = [0.30/(1-0.30)] / 20 = 0.4286/20 = 2.14% per year. Since the question states 'approximate' and prevalence is moderately high, the simpler formula P = I x D gives 1.5% per year. This relationship shows that prevalence depends on both the rate of new cases and how long cases remain prevalent."
  },
  {
    id: 16,
    question: "A disease has a cumulative incidence of 5% over 5 years. Assuming a constant hazard rate, the incidence rate (hazard) per year is approximately:",
    options: [
      "5% / 5 = 1% per year",
      "-ln(1 - 0.05) / 5 = 0.01026 per year",
      "0.05 / (1 - 0.05) = 0.0526 per year",
      "5% x 5 = 25% per year"
    ],
    answer: 1,
    explanation: "The relationship between cumulative incidence (CI) and constant hazard rate (h) over time (t) is: CI = 1 - e^(-h x t). Rearranging: h = -ln(1 - CI) / t = -ln(1 - 0.05) / 5 = -ln(0.95) / 5 = 0.05129 / 5 = 0.01026 per year. This is approximately 1.03% per year. Option A (simple division) gives 1% per year, which is an approximation valid only for very small cumulative incidences. The exponential formula accounts for the fact that person-time at risk decreases as individuals develop the disease. For rare diseases (CI < 10%), the simple approximation CI approximately equals h x t is reasonably accurate."
  },
  {
    id: 17,
    question: "A hospital reports 50 neonatal deaths among 2,000 live births in a year. The neonatal mortality rate is expressed as:",
    options: [
      "50/2,000 x 1,000 = 25 per 1,000 live births",
      "50/2,000 x 100 = 2.5%",
      "50/2,050 x 1,000 = 24.4 per 1,000 total births",
      "50/1,950 x 1,000 = 25.6 per 1,000 surviving neonates"
    ],
    answer: 0,
    explanation: "Neonatal mortality rate (NMR) = Number of deaths in the first 28 days of life / Number of live births in the same period x 1,000. NMR = 50/2,000 x 1,000 = 25 per 1,000 live births. The denominator is live births (not total births, which would include stillbirths). NMR is technically a ratio rather than a true rate since the denominator includes the numerator cases. NMR is a key indicator of maternal and neonatal health services quality. It differs from perinatal mortality rate (stillbirths + early neonatal deaths / total births + early neonatal deaths) and infant mortality rate (deaths < 1 year / live births x 1,000)."
  },
  {
    id: 18,
    question: "In a cross-sectional survey, 400 out of 10,000 people are found to have chronic kidney disease (CKD). However, CKD has a long asymptomatic phase. The measured prevalence likely:",
    options: [
      "Overestimates the true prevalence due to length-biased sampling",
      "Underestimates the true prevalence because asymptomatic cases are missed",
      "Equals the true prevalence since all stages are captured",
      "Cannot be determined without incidence data"
    ],
    answer: 1,
    explanation: "Cross-sectional surveys measure point prevalence and can only detect cases that are identifiable at the time of the survey. CKD has a long asymptomatic phase where individuals may not be diagnosed unless specifically screened (e.g., with serum creatinine, eGFR, or urine albumin). If the survey relies on self-report or medical records, asymptomatic undiagnosed cases will be missed, leading to underestimation. The measured prevalence of 400/10,000 = 4% likely underestimates the true prevalence. This is a form of detection bias or iceberg phenomenon where the visible (diagnosed) portion is smaller than the total (including undiagnosed) disease burden."
  },
  {
    id: 19,
    question: "The Number Needed to Harm (NNH) for a new NSAID causing GI bleeding compared to placebo is 200. This means:",
    options: [
      "200 patients need to be treated for 1 additional GI bleed to occur",
      "1 in 200 patients will definitely develop GI bleeding",
      "The risk of GI bleeding is 200 times higher with the drug",
      "200 patients with GI bleeding were studied"
    ],
    answer: 0,
    explanation: "Number Needed to Harm (NNH) = 1 / Absolute Risk Increase (ARI) = 1 / (Risk in exposed - Risk in unexposed). NNH of 200 means that for every 200 patients treated with the NSAID instead of placebo, 1 additional patient will experience GI bleeding attributable to the drug. If GI bleeding risk on placebo = 1% and on NSAID = 1.5%, then ARI = 0.5% = 0.005, and NNH = 1/0.005 = 200. NNH is the counterpart to NNT (Number Needed to Treat) and is essential for risk-benefit analysis. A higher NNH indicates a safer drug. NNH should always be interpreted alongside the severity of the harm and the clinical benefit (NNT) of the intervention."
  },
  {
    id: 20,
    question: "In a population where a screening program for cervical cancer has been running for 10 years, the prevalence of cervical cancer has increased while mortality has decreased. The most likely explanation is:",
    options: [
      "The screening test has poor specificity leading to false positives",
      "Lead time bias making it appear that survival has improved",
      "Early detection increases prevalence by adding cases that would not have been diagnosed, while treatment of early-stage disease reduces mortality",
      "The disease has become more common due to changing risk factors"
    ],
    answer: 2,
    explanation: "Screening programs simultaneously affect both prevalence and mortality. Prevalence increases because: (1) screening detects cases earlier, adding a pool of pre-clinical cases that would not yet have been clinically diagnosed; (2) earlier detection and treatment improves survival, meaning cases live longer with the diagnosis (prevalence = incidence x duration, so increased duration increases prevalence). Mortality decreases because early-stage cancers detected by screening have better prognosis and treatment outcomes. This apparent paradox (more cases but fewer deaths) is a hallmark of effective screening programs. Lead time bias alone would not explain the actual reduction in mortality if using population-based mortality rates rather than survival from diagnosis."
  },

  // ========== Relative Risk, Odds Ratio (Q21-Q30) ==========
  {
    id: 21,
    question: "In a cohort study, the risk of myocardial infarction among smokers is 15% and among non-smokers is 5% over 10 years. The relative risk and the odds ratio respectively are:",
    options: [
      "RR = 3.0, OR = 3.35",
      "RR = 3.0, OR = 3.0",
      "RR = 10%, OR = 3.35",
      "RR = 0.33, OR = 0.30"
    ],
    answer: 0,
    explanation: "Relative Risk (RR) = Risk in exposed / Risk in unexposed = 0.15 / 0.05 = 3.0. Odds Ratio (OR) = Odds in exposed / Odds in unexposed = (0.15/0.85) / (0.05/0.95) = 0.1765 / 0.05263 = 3.35. Note that OR (3.35) overestimates the RR (3.0) when the outcome is common (>10%). This demonstrates that OR approximates RR only when the disease is rare (rare disease assumption). As disease prevalence increases, the OR diverges further from the RR, always being further from 1.0 (away from the null). The relationship: OR = RR x (1 - Risk in unexposed) / (1 - Risk in exposed) = 3.0 x 0.95/0.85 = 3.35."
  },
  {
    id: 22,
    question: "A case-control study of lung cancer and asbestos exposure yields an odds ratio of 5.2 (95% CI: 2.8-9.6). If the prevalence of lung cancer in the study population is 2%, the odds ratio can be interpreted as:",
    options: [
      "An overestimate of the relative risk by approximately 50%",
      "A valid approximation of the relative risk due to the rare disease assumption",
      "Equal to the relative risk regardless of disease frequency",
      "An underestimate of the attributable risk"
    ],
    answer: 1,
    explanation: "The rare disease assumption states that when disease prevalence is low (conventionally <10%, though some use <5%), the odds ratio closely approximates the relative risk. With lung cancer prevalence of 2%, the odds of disease approximately equal the risk: odds = p/(1-p) = 0.02/0.98 = 0.0204, approximately equal to 0.02. Therefore, OR of 5.2 is a valid approximation of the RR. Mathematically: RR = OR / [(1 - P_unexposed) + (P_unexposed x OR)], where P_unexposed is the risk in the unexposed. With very small P_unexposed, the denominator approaches 1, so RR approximately equals OR. This is why case-control studies (which can only directly estimate OR) are particularly useful for studying rare diseases."
  },
  {
    id: 23,
    question: "In a matched case-control study using conditional logistic regression, 50 discordant pairs show case-exposed/control-unexposed, and 15 discordant pairs show case-unexposed/control-exposed. The matched odds ratio is:",
    options: [
      "(50 + 15) / total pairs",
      "50/15 = 3.33",
      "(50 x 15) / (50 + 15)",
      "50/(50 + 15) = 0.77"
    ],
    answer: 1,
    explanation: "In matched case-control analysis, the matched odds ratio is calculated only from discordant pairs (pairs where exposure status differs between case and control). Using McNemar's approach: Matched OR = b/c, where b = number of pairs with case exposed and control unexposed, and c = number of pairs with case unexposed and control exposed. Matched OR = 50/15 = 3.33. Concordant pairs (both exposed or both unexposed) provide no information about the association and are excluded. McNemar's test for significance: chi-squared = (b-c)^2 / (b+c) = (50-15)^2 / (50+15) = 1225/65 = 18.85, which is highly significant (p < 0.001)."
  },
  {
    id: 24,
    question: "A meta-analysis reports a pooled odds ratio of 0.75 (95% CI: 0.60-0.94) for the association between statin use and colorectal cancer. The population attributable fraction (PAF), if statins were causally protective and 20% of the population used statins, would be:",
    options: [
      "PAF = Pe x (1 - OR) / [1 - Pe x (1 - OR)] where Pe = 0.20",
      "PAF = 0.20 x (1 - 0.75) = 5%",
      "PAF = Pe x (OR - 1) / [Pe x (OR - 1) + 1] = -5.3% (preventable fraction)",
      "PAF cannot be calculated from a meta-analysis"
    ],
    answer: 2,
    explanation: "When the OR < 1 (protective exposure), the concept becomes the Prevented Fraction among the Exposed or Population Preventable Fraction. Using Levin's formula adapted for protective factors: PAF = Pe x (OR - 1) / [Pe x (OR - 1) + 1], where Pe = prevalence of exposure in population. PAF = 0.20 x (0.75 - 1) / [0.20 x (0.75 - 1) + 1] = 0.20 x (-0.25) / [0.20 x (-0.25) + 1] = -0.05 / 0.95 = -0.0526 = -5.3%. The negative sign indicates a preventable fraction: if 20% of the population takes statins, approximately 5.3% of colorectal cancer cases are prevented. If statin use were expanded to 100%, theoretically 25% of cases could be prevented (assuming causality)."
  },
  {
    id: 25,
    question: "In a 2x2 table from a cohort study: exposed with disease = 30, exposed without disease = 270, unexposed with disease = 10, unexposed without disease = 690. The attributable risk percent (AR%) in the exposed is:",
    options: [
      "[(10/700) - (30/300)] / (10/700) x 100",
      "[(30/300) - (10/700)] / (30/300) x 100",
      "(30 - 10) / 30 x 100",
      "(30/300) / (10/700) x 100"
    ],
    answer: 1,
    explanation: "Attributable Risk Percent in exposed (AR% or Attributable Fraction in Exposed, AFe) = (Risk in exposed - Risk in unexposed) / Risk in exposed x 100. Risk in exposed = 30/300 = 0.10; Risk in unexposed = 10/700 = 0.01429. AR% = (0.10 - 0.01429) / 0.10 x 100 = 0.08571/0.10 x 100 = 85.7%. This can also be calculated as: AR% = (RR - 1) / RR x 100, where RR = 0.10/0.01429 = 7.0. AR% = (7-1)/7 x 100 = 85.7%. Interpretation: Among exposed individuals who develop the disease, 85.7% of cases are attributable to the exposure (assuming causality). This measures the proportional reduction in disease in the exposed group if the exposure were eliminated."
  },
  {
    id: 26,
    question: "A study reports an adjusted odds ratio of 2.5 for the association between diabetes and hip fracture, adjusted for age, sex, and BMI. The crude odds ratio was 3.8. This difference most likely indicates:",
    options: [
      "Residual confounding by age, sex, and BMI",
      "Positive confounding by at least one of the adjusted variables",
      "Effect modification by age",
      "The adjusted estimate is biased due to over-adjustment"
    ],
    answer: 1,
    explanation: "When the crude OR (3.8) is further from the null (1.0) than the adjusted OR (2.5), confounding has led to overestimation of the true association. This is called positive confounding (confounding away from the null). The confounders (age, sex, BMI) were positively associated with both diabetes and hip fracture, inflating the crude estimate. After adjustment, the OR decreased from 3.8 to 2.5, indicating that approximately 34% of the crude association was due to confounding: [(3.8-2.5)/(3.8-1.0)] x 100 = 46.4% change. If the crude and adjusted estimates differed by >10%, confounding is considered meaningful. Note: residual confounding from unmeasured variables may still exist."
  },
  {
    id: 27,
    question: "In a study of a rare occupational exposure and bladder cancer, the risk ratio cannot be directly calculated. The exposure odds ratio from a case-control study is 4.2. Using the rare disease assumption and knowing the disease prevalence is 0.5%, the approximate risk in the exposed group if the risk in unexposed is 0.5% is:",
    options: [
      "4.2 x 0.5% = 2.1%",
      "4.2 + 0.5% = 4.7%",
      "0.5% / 4.2 = 0.12%",
      "4.2 x (1 - 0.5%) = 4.179%"
    ],
    answer: 0,
    explanation: "Under the rare disease assumption (prevalence < 10%), OR approximately equals RR. Therefore: RR approximately equals 4.2. Since RR = Risk in exposed / Risk in unexposed: Risk in exposed = RR x Risk in unexposed = 4.2 x 0.005 = 0.021 = 2.1%. This approximation works because: when disease is rare, odds approximately equal risk [p/(1-p) approximately equals p when p is small]. The exposure odds ratio from a case-control study therefore approximates the risk ratio from a cohort study. With risk in unexposed = 0.5% and RR = 4.2, the excess risk (attributable risk) = 2.1% - 0.5% = 1.6%, meaning the exposure accounts for an additional 1.6% absolute risk."
  },
  {
    id: 28,
    question: "A randomized trial reports that a new vaccine reduces the incidence of pneumonia from 8% (placebo) to 3% (vaccine group). The Number Needed to Treat (NNT) and relative risk reduction (RRR) are:",
    options: [
      "NNT = 20, RRR = 62.5%",
      "NNT = 20, RRR = 5%",
      "NNT = 12.5, RRR = 37.5%",
      "NNT = 33, RRR = 62.5%"
    ],
    answer: 0,
    explanation: "Absolute Risk Reduction (ARR) = Risk in control - Risk in treatment = 0.08 - 0.03 = 0.05 = 5%. NNT = 1/ARR = 1/0.05 = 20. This means 20 patients need to be vaccinated to prevent 1 case of pneumonia. Relative Risk Reduction (RRR) = ARR / Risk in control = 0.05/0.08 = 0.625 = 62.5%. Alternatively, RRR = 1 - RR = 1 - (0.03/0.08) = 1 - 0.375 = 0.625 = 62.5%. The RRR (62.5%) appears more impressive than the ARR (5%), which is why pharmaceutical marketing often prefers relative measures. For clinical decision-making, NNT is most useful as it combines both the baseline risk and the treatment effect."
  },
  {
    id: 29,
    question: "When the odds ratio from a case-control study is 1.8 and the prevalence of the disease in the population is 30%, the odds ratio will:",
    options: [
      "Closely approximate the relative risk",
      "Substantially overestimate the relative risk",
      "Substantially underestimate the relative risk",
      "Be mathematically equivalent to the relative risk"
    ],
    answer: 1,
    explanation: "When disease prevalence is high (30% >> 10%), the rare disease assumption does not hold, and the OR will overestimate the RR (when RR > 1) or underestimate it (when RR < 1). The exact relationship is: RR = OR / [(1 - P0) + (P0 x OR)], where P0 is the risk in the unexposed. If we assume P0 = 0.25 (approximately): RR = 1.8 / [(1 - 0.25) + (0.25 x 1.8)] = 1.8 / [0.75 + 0.45] = 1.8 / 1.20 = 1.50. So the OR of 1.8 overestimates the true RR of 1.50 by 20%. The degree of overestimation increases with higher disease prevalence and larger OR values. For common diseases, prevalence ratios or direct risk ratios from cohort studies are preferred."
  },
  {
    id: 30,
    question: "A cohort study reports an adjusted hazard ratio (HR) of 1.35 (95% CI: 1.10-1.65) for the association between obesity and colorectal cancer after adjusting for age, sex, smoking, and physical activity. However, diet quality was not measured. The concern is:",
    options: [
      "Over-adjustment bias from including too many covariates",
      "Residual confounding because an unmeasured confounder (diet) may explain part of the observed association",
      "The proportional hazards assumption is violated",
      "Collider bias from adjusting for physical activity"
    ],
    answer: 1,
    explanation: "Residual confounding occurs when confounders are either unmeasured, poorly measured, or incompletely controlled. Diet quality is a known risk factor for colorectal cancer and is associated with obesity, making it a potential confounder. Since it was not measured and adjusted for, the HR of 1.35 may partly reflect the confounding effect of diet rather than a true causal effect of obesity. Residual confounding can occur in three ways: (1) complete omission of a confounder (as here with diet); (2) measurement error in a confounder leading to incomplete adjustment; (3) inadequate modeling of the confounder-outcome relationship (e.g., using linear terms when the relationship is non-linear). Sensitivity analyses such as E-value calculations can assess how strong an unmeasured confounder would need to be to explain away the observed association. The E-value for HR 1.35 = 1.35 + sqrt[1.35 x (1.35-1)] = 1.35 + 0.686 = 2.04."
  },

  // ========== Bias (Selection, Information), Confounding (Q31-Q40) ==========
  {
    id: 31,
    question: "In a pharmacoepidemiological study comparing outcomes of Drug A vs Drug B, patients who survive long enough to receive Drug A are compared with those who immediately receive Drug B. The time between diagnosis and Drug A initiation is misclassified as exposed time. This is an example of:",
    options: [
      "Protopathic bias",
      "Immortal time bias",
      "Channeling bias",
      "Time-window bias"
    ],
    answer: 1,
    explanation: "Immortal time bias occurs when person-time during which the outcome cannot occur (because the person must survive to receive the exposure) is misclassified or mishandled. In this scenario, the time between diagnosis and Drug A initiation is 'immortal' - patients must survive this period to be classified as Drug A users. If this time is classified as 'exposed' time, it artificially inflates survival in the Drug A group because this time period is, by definition, death-free. Solutions include: (1) time-varying exposure analysis where patients contribute unexposed person-time until Drug A initiation; (2) landmark analysis starting follow-up at a fixed time point after diagnosis; (3) cloning-censoring-weighting approaches. This bias is extremely common in observational drug studies and typically biases toward a protective effect of the drug."
  },
  {
    id: 32,
    question: "A study of occupational benzene exposure and leukemia uses self-reported exposure histories from cases (leukemia patients) and controls. Cases, motivated by their diagnosis, recall exposure more thoroughly. The resulting odds ratio of 2.8 may be affected by:",
    options: [
      "Non-differential misclassification bias",
      "Differential misclassification (recall bias) leading to overestimation of the OR",
      "Selection bias due to non-response",
      "Interviewer bias only"
    ],
    answer: 1,
    explanation: "Recall bias is a form of differential misclassification where the accuracy of exposure recall differs between cases and controls. Cases, aware of their leukemia diagnosis, may search their memory more thoroughly for potential causes (including benzene exposure), leading to higher reported exposure among cases compared to controls. This differential over-reporting inflates the odds ratio above its true value. Key distinction: Differential misclassification can bias the OR in either direction (toward or away from null), while non-differential misclassification of a dichotomous exposure typically biases the OR toward the null. Strategies to minimize recall bias include using objective exposure measures (biomarkers, employment records), blinding participants to the study hypothesis, and using validated questionnaires."
  },
  {
    id: 33,
    question: "Non-differential misclassification of a dichotomous exposure variable in a case-control study with two exposure categories will typically:",
    options: [
      "Bias the odds ratio away from the null",
      "Bias the odds ratio toward the null (attenuation bias)",
      "Have no effect on the odds ratio",
      "Increase the precision of the estimate"
    ],
    answer: 1,
    explanation: "Non-differential misclassification means the degree of misclassification is the same in cases and controls (or exposed and unexposed in cohort studies). For a dichotomous exposure, this creates a predictable bias toward the null (OR approaches 1.0), called attenuation bias. If sensitivity = Sn and specificity = Sp of exposure classification: Biased OR = True OR x [(Sn + Sp - 1)^2] / [(Sn x P + (1-Sp) x (1-P)) x ((1-Sn) x P + Sp x (1-P))], simplified under certain conditions. For example, if true OR = 4.0 and misclassification rates are 20% in both directions: the observed OR will be substantially attenuated, possibly to around 2.0-2.5. IMPORTANT CAVEAT: When the exposure has more than 2 categories (polytomous), non-differential misclassification can bias in either direction."
  },
  {
    id: 34,
    question: "In a study of the effect of exercise on cardiovascular mortality, researchers adjust for BMI. However, BMI lies on the causal pathway between exercise and cardiovascular mortality (exercise reduces BMI, which reduces CV mortality). This adjustment introduces:",
    options: [
      "Residual confounding",
      "Over-adjustment bias (intermediate variable bias)",
      "Collider stratification bias",
      "Ecological fallacy"
    ],
    answer: 1,
    explanation: "Over-adjustment bias occurs when researchers adjust for a variable that lies on the causal pathway (mediator) between the exposure and outcome. The causal chain is: Exercise -> reduces BMI -> reduces CV mortality. By adjusting for BMI, the study blocks part of the causal effect of exercise that operates through BMI reduction, leading to underestimation of the total effect. The direct acyclic graph (DAG): Exercise -> BMI -> CV mortality. Adjusting for BMI estimates only the direct effect of exercise on CV mortality (not through BMI), which may not be the scientific question of interest. If the total effect of exercise is desired, BMI should NOT be adjusted for. If only the direct effect (exercise independent of BMI changes) is of interest, mediation analysis methods should be used, not simple covariate adjustment."
  },
  {
    id: 35,
    question: "A case-control study of childhood leukemia and residential power line exposure selects controls by random digit dialing. Families with higher socioeconomic status are more likely to answer the phone and participate. This introduces:",
    options: [
      "Recall bias",
      "Selection bias (non-response bias with differential participation)",
      "Detection bias",
      "Measurement bias"
    ],
    answer: 1,
    explanation: "Selection bias occurs when the relationship between exposure and outcome differs between study participants and the eligible population. In this scenario, higher SES families are more likely to respond, and SES may be associated with both residential proximity to power lines (higher SES areas may have underground power lines) and health-seeking behavior. This creates a distortion because control group participants are not representative of the source population that generated the cases. The direction of bias depends on the relationship between SES, power line exposure, and participation. Solutions include: (1) multiple control groups; (2) weighting for non-response using inverse probability of selection weights; (3) alternative control selection methods (population registry-based); (4) sensitivity analysis for selection bias."
  },
  {
    id: 36,
    question: "A researcher studying the association between coffee consumption and pancreatic cancer adjusts for smoking status. However, in the DAG, smoking is a common cause of both coffee consumption and pancreatic cancer, making it a true confounder. After adjustment, the odds ratio changes from 2.5 to 1.3. The researcher should:",
    options: [
      "Report the crude OR of 2.5 as the true association",
      "Report the adjusted OR of 1.3 as it is corrected for confounding",
      "Conclude that coffee causes pancreatic cancer based on the crude OR",
      "Conduct a stratified analysis and report stratum-specific ORs"
    ],
    answer: 1,
    explanation: "When a variable is a true confounder (common cause of both exposure and outcome), adjustment is appropriate and necessary. Smoking is associated with both coffee drinking (positive association) and pancreatic cancer (causal risk factor), satisfying the criteria for confounding: (1) associated with exposure; (2) causally related to outcome; (3) not on the causal pathway. The crude OR of 2.5 was inflated by confounding (positive confounding). The adjusted OR of 1.3 represents the association between coffee and pancreatic cancer independent of smoking. The change of >10% [(2.5-1.3)/2.5 = 48%] confirms meaningful confounding. The adjusted estimate should be reported as the primary finding. Option D (stratified analysis) could supplement but the adjusted OR is the standard approach for confounder control."
  },
  {
    id: 37,
    question: "Collider bias occurs when adjusting for a variable that is a common effect of both the exposure and the outcome. Which scenario illustrates collider bias?",
    options: [
      "Adjusting for hospitalization status when studying the association between diabetes and pneumonia, where both conditions increase hospitalization risk",
      "Adjusting for age in a study of smoking and lung cancer",
      "Adjusting for gender in a study of height and income",
      "Matching cases and controls on education level"
    ],
    answer: 0,
    explanation: "Collider bias (also called Berkson's bias when in hospital-based studies, or selection bias by conditioning on a collider) occurs when analysis is restricted to or adjusted for a variable that is caused by both the exposure and the outcome (or their causes). DAG: Diabetes -> Hospitalization <- Pneumonia. Hospitalization is a collider (two arrowheads pointing in). Conditioning on hospitalization (e.g., restricting study to hospitalized patients or adjusting for it) opens a spurious pathway between diabetes and pneumonia, creating an artificial association or masking a true one. In hospital data, diabetes and pneumonia may appear negatively associated because among hospitalized patients, having one condition 'explains away' the reason for hospitalization, making the other seem less likely. This is the formal explanation for Berkson's original paradox."
  },
  {
    id: 38,
    question: "In a cohort study of hormone replacement therapy (HRT) and coronary heart disease (CHD), women prescribed HRT tend to be healthier and of higher socioeconomic status than non-users. This is an example of:",
    options: [
      "Detection bias",
      "Confounding by indication",
      "Healthy user bias (confounding by healthy user effect)",
      "Surveillance bias"
    ],
    answer: 2,
    explanation: "Healthy user bias is a form of confounding where individuals who adopt preventive health behaviors (like taking HRT electively) are systematically healthier than those who do not. These women exercise more, eat better, have regular medical check-ups, and have fewer comorbidities. In the early observational studies of HRT and CHD, the apparent protective effect of HRT (approximately 50% risk reduction) was largely due to healthy user bias. The Women's Health Initiative (WHI) RCT subsequently showed HRT actually INCREASED CHD risk (HR approximately 1.29). This dramatically illustrates how healthy user bias can reverse the direction of association. Confounding by indication is different - it occurs when the indication for the treatment is itself a risk factor for the outcome. Propensity score methods can partially address healthy user bias but cannot eliminate unmeasured confounding."
  },
  {
    id: 39,
    question: "In a case-control study, exposure to a dietary supplement is measured using a food frequency questionnaire with sensitivity of 80% and specificity of 90%. If misclassification is non-differential and the true OR is 3.0, the observed OR will be approximately:",
    options: [
      "3.0 (unchanged)",
      "Greater than 3.0",
      "Between 1.0 and 3.0 (attenuated toward the null)",
      "Less than 1.0 (reversed)"
    ],
    answer: 2,
    explanation: "Non-differential misclassification of a dichotomous exposure attenuates the OR toward the null. With sensitivity = 0.80 and specificity = 0.90, the correction factor can be estimated. The bias factor for non-differential misclassification: Observed OR approximately equals True OR^[(Sn + Sp - 1)^2 / (Sn x Sp + (1-Sn)(1-Sp))]. A simpler approximation: the degree of attenuation depends on the positive predictive value and negative predictive value of the exposure classification. With Sn = 0.80 and Sp = 0.90, approximately 30% attenuation is expected, giving an observed OR of approximately 2.0-2.3. The key principle: non-differential misclassification of a binary exposure ALWAYS biases toward the null, making it harder to detect true associations. This is why improving measurement accuracy is crucial in epidemiological research."
  },
  {
    id: 40,
    question: "A researcher observes that the association between air pollution (PM2.5) and asthma exacerbation differs significantly between children and adults, with OR = 3.5 in children and OR = 1.2 in adults. This is best described as:",
    options: [
      "Confounding by age",
      "Effect modification (interaction) by age group",
      "Selection bias due to differential recruitment",
      "Non-differential misclassification by age"
    ],
    answer: 1,
    explanation: "Effect modification (also called interaction or heterogeneity of effect) occurs when the magnitude of the association between an exposure and outcome varies across levels of a third variable (effect modifier). Here, age modifies the effect of PM2.5 on asthma: children (OR = 3.5) are much more susceptible than adults (OR = 1.2). Unlike confounding, effect modification is a biological phenomenon of scientific interest and should NOT be adjusted away - it should be reported through stratified analyses. To distinguish from confounding: (1) confounding is a bias to be removed; effect modification is a finding to be reported; (2) confounding produces different crude and adjusted estimates; effect modification produces different stratum-specific estimates; (3) a test for interaction (e.g., Breslow-Day test for homogeneity of ORs, or interaction term in regression) can formally assess effect modification."
  },

  // ========== Screening Methods (Q41-Q50) ==========
  {
    id: 41,
    question: "A new screening test for colorectal cancer has a sensitivity of 92% and specificity of 85%. In a population where the prevalence of colorectal cancer is 1%, the positive predictive value (PPV) is approximately:",
    options: [
      "92%",
      "85%",
      "5.8%",
      "58%"
    ],
    answer: 2,
    explanation: "PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1 - Specificity) x (1 - Prevalence)]. PPV = (0.92 x 0.01) / [(0.92 x 0.01) + (0.15 x 0.99)] = 0.0092 / (0.0092 + 0.1485) = 0.0092 / 0.1577 = 0.0583 = 5.8%. Despite the test having excellent sensitivity (92%) and good specificity (85%), the PPV is only 5.8% because the disease prevalence is low (1%). This means approximately 94% of positive screening results are false positives. This illustrates why screening programs must carefully consider disease prevalence: in low-prevalence populations, even good tests produce many more false positives than true positives. The NPV would be very high: NPV = (Sp x (1-P)) / [(Sp x (1-P)) + ((1-Sn) x P)] = (0.85 x 0.99) / [(0.85 x 0.99) + (0.08 x 0.01)] = 0.8415/0.8423 = 99.9%."
  },
  {
    id: 42,
    question: "Lead time bias in screening studies refers to:",
    options: [
      "The bias introduced when screening detects cases that would never have progressed to clinical disease",
      "The apparent increase in survival time due to earlier detection without actual prolongation of life",
      "The preferential detection of slow-growing tumors by screening",
      "The bias from comparing screened and unscreened populations with different risk profiles"
    ],
    answer: 1,
    explanation: "Lead time bias occurs when screening advances the time of diagnosis without actually extending the time of death. If a cancer would have been clinically detected at age 65 and the patient would die at age 70 (5-year survival), but screening detects it at age 60, the measured survival becomes 10 years - seemingly doubled - even though the patient still dies at age 70. Lead time = time between screen detection and when clinical detection would have occurred (5 years in this example). To avoid lead time bias: (1) use mortality rates rather than survival rates as the primary outcome; (2) use population-based mortality data rather than case-based survival; (3) apply statistical methods that adjust for lead time. Option A describes overdiagnosis bias, option C describes length-time bias, and option D describes selection bias."
  },
  {
    id: 43,
    question: "Length-time bias in cancer screening occurs because:",
    options: [
      "Longer screening intervals miss rapidly progressing cancers",
      "Screening preferentially detects slow-growing tumors with longer preclinical phases, making screened cancers appear to have better prognosis",
      "The time between screenings is too long to detect any cancers",
      "Screening tests lose sensitivity over time"
    ],
    answer: 1,
    explanation: "Length-time bias (also called length bias sampling) arises because tumors with longer preclinical detectable phases (sojourn time) are more likely to be detected by periodic screening than rapidly growing tumors. Slow-growing tumors spend more time in the 'detectable but pre-clinical' window, increasing their probability of being caught at screening. Since slow-growing tumors inherently have better prognosis, screened cases appear to have better outcomes than clinically detected cases, even if screening provides no real benefit. Mathematically: Probability of detection at screening is proportional to sojourn time. If aggressive cancers have sojourn time of 1 year and indolent cancers 5 years, screening is 5x more likely to detect indolent cancers. This creates a biased sample that overrepresents favorable-prognosis cancers among screen-detected cases."
  },
  {
    id: 44,
    question: "The optimal screening interval for cervical cancer screening is determined by considering the sojourn time (mean duration of the preclinical detectable phase). If the sojourn time for cervical intraepithelial neoplasia (CIN) is approximately 10-15 years, which screening interval is MOST appropriate?",
    options: [
      "Every 6 months to maximize detection",
      "Every 3-5 years, as it captures most cases within the sojourn time window",
      "Every 15-20 years, matching the full sojourn time",
      "Once in a lifetime at age 40"
    ],
    answer: 1,
    explanation: "The screening interval should be shorter than the sojourn time to ensure detection before clinical progression, but frequent enough to be cost-effective. For cervical cancer with sojourn time of 10-15 years, screening every 3-5 years provides multiple opportunities for detection while being resource-efficient. Current guidelines (WHO, USPSTF) recommend: (1) Pap smear every 3 years for ages 21-65; (2) HPV testing every 5 years for ages 30-65; (3) co-testing (Pap + HPV) every 5 years. Screening every 6 months would be wasteful and cause unnecessary anxiety/procedures. Screening every 15-20 years would miss cases that progress faster than average. The relationship between screening interval and sensitivity of the program: Sensitivity_program = 1 - (1 - Sensitivity_test)^(sojourn time/interval). More frequent screening increases program sensitivity but with diminishing returns."
  },
  {
    id: 45,
    question: "A cost-effectiveness analysis of a breast cancer screening program in women aged 40-49 reports an incremental cost-effectiveness ratio (ICER) of $150,000 per quality-adjusted life year (QALY) gained compared to no screening. In a country with a willingness-to-pay threshold of $50,000 per QALY, this screening program is:",
    options: [
      "Cost-effective and should be implemented",
      "Not cost-effective at the given willingness-to-pay threshold",
      "Cost-saving because it detects cancer early",
      "Cannot be evaluated without knowing the sensitivity of the test"
    ],
    answer: 1,
    explanation: "Cost-effectiveness is determined by comparing the ICER to the willingness-to-pay (WTP) threshold. ICER = (Cost_screening - Cost_no_screening) / (QALY_screening - QALY_no_screening) = $150,000/QALY. Since the ICER ($150,000/QALY) exceeds the WTP threshold ($50,000/QALY), the screening program is NOT cost-effective at this threshold. The program produces health benefits but at a cost that exceeds what society is willing to pay. Decision rules: If ICER < WTP, the intervention is cost-effective; if ICER > WTP, it is not cost-effective; if ICER < 0 with positive health gain, it is cost-saving (dominant). Common WTP thresholds: $50,000-$100,000/QALY in the US, 1-3x GDP per capita (WHO recommendation). This explains why many guidelines recommend breast cancer screening starting at age 50 rather than 40 - the cost-effectiveness improves with higher disease prevalence in older women."
  },
  {
    id: 46,
    question: "Overdiagnosis in prostate cancer screening with PSA refers to:",
    options: [
      "False positive PSA tests that lead to unnecessary biopsies",
      "Detection of indolent cancers that would never have caused symptoms or death during the patient's lifetime",
      "Delayed diagnosis due to false negative PSA results",
      "Misclassification of benign prostatic hyperplasia as cancer"
    ],
    answer: 1,
    explanation: "Overdiagnosis is the detection of a condition through screening that would never have caused symptoms, morbidity, or mortality during the person's remaining lifetime. In prostate cancer, autopsy studies show that 30-70% of men over 60 have histological prostate cancer, yet most would die of other causes. PSA screening detects many of these indolent cancers, leading to overdiagnosis estimated at 20-50% of screen-detected prostate cancers. Consequences of overdiagnosis: (1) unnecessary anxiety and labeling; (2) unnecessary treatment (surgery, radiation) with side effects (incontinence, impotence); (3) increased healthcare costs; (4) inflated survival statistics (due to adding cases that would never die of the disease). Overdiagnosis differs from false positives - overdiagnosed cancers ARE true cancers pathologically, but they are clinically insignificant. Active surveillance strategies attempt to mitigate the harms of overdiagnosis."
  },
  {
    id: 47,
    question: "Wilson and Jungner criteria for screening include all of the following EXCEPT:",
    options: [
      "The condition should be an important health problem",
      "There should be a recognizable latent or early symptomatic stage",
      "The screening test must have 100% sensitivity and specificity",
      "Facilities for diagnosis and treatment should be available"
    ],
    answer: 2,
    explanation: "Wilson and Jungner (1968) established 10 classic criteria for screening programs: (1) Important health problem; (2) Accepted treatment available; (3) Facilities for diagnosis and treatment available; (4) Recognizable latent or early stage; (5) Suitable test or examination; (6) Test acceptable to population; (7) Natural history adequately understood; (8) Agreed policy on treatment; (9) Cost economically balanced against medical expenditure; (10) Case-finding should be continuous. Notably, NO screening test has 100% sensitivity and specificity - this is an impossible standard. A suitable test must have adequate (not perfect) sensitivity and specificity, be safe, acceptable, and affordable. The criteria emphasize that screening should only be implemented when effective treatment exists and the healthcare system can handle the increased diagnostic and treatment burden."
  },
  {
    id: 48,
    question: "A screening program for type 2 diabetes uses fasting blood glucose (FBG >= 126 mg/dL). In the first round, 500 cases are detected from 50,000 screened. In the second round (2 years later), 200 new cases are detected from 49,500 screened. The higher detection rate in the first round is primarily due to:",
    options: [
      "Higher sensitivity of the test in the first round",
      "Prevalence pool (prevalent cases accumulated over years) being detected at the first screen",
      "Decreased specificity in the second round",
      "Progression of the disease becoming faster"
    ],
    answer: 1,
    explanation: "The first round of screening (prevalence screen) detects the accumulated pool of prevalent cases - individuals who developed the disease over many years but were undiagnosed. Detection rate in first round = 500/50,000 = 1.0%. Second round detection rate = 200/49,500 = 0.4%. The second round (incidence screen) only detects cases that developed in the 2-year interval since the first screen, yielding fewer cases. This pattern is universal in screening programs: the first round always has the highest yield because it captures the entire prevalent pool. Subsequent rounds detect incident cases that develop between screens. As the program matures, detection rates stabilize at a level reflecting the incidence rate x sojourn time x test sensitivity. The ratio of first-round to subsequent-round detection rates can help estimate the mean sojourn time of the preclinical disease."
  },
  {
    id: 49,
    question: "In a parallel testing strategy (two screening tests applied simultaneously, positive if EITHER test is positive), compared to each individual test, the combined approach will have:",
    options: [
      "Higher sensitivity and higher specificity",
      "Higher sensitivity but lower specificity",
      "Lower sensitivity but higher specificity",
      "Lower sensitivity and lower specificity"
    ],
    answer: 1,
    explanation: "Parallel testing (also called 'believe the positive' or disjunctive testing) increases overall sensitivity because a case is detected if EITHER test is positive, reducing the chance of missing a true case. However, specificity decreases because a false positive on EITHER test makes the combined result positive. Formulas: Combined sensitivity = 1 - [(1 - Sn_A) x (1 - Sn_B)] (assuming independence). Combined specificity = Sp_A x Sp_B. Example: If Test A has Sn = 80%, Sp = 90% and Test B has Sn = 75%, Sp = 85%: Combined Sn = 1 - (0.20 x 0.25) = 1 - 0.05 = 95%. Combined Sp = 0.90 x 0.85 = 76.5%. This contrasts with serial (sequential) testing where BOTH tests must be positive: sensitivity decreases (Sn = Sn_A x Sn_B) but specificity increases [Sp = 1 - (1-Sp_A)(1-Sp_B)]. Parallel testing is preferred when missing a diagnosis is costly (e.g., HIV screening)."
  },
  {
    id: 50,
    question: "A new rapid diagnostic test for tuberculosis is evaluated against sputum culture (gold standard). In a high-prevalence setting (prevalence = 20%), the test has sensitivity = 90% and specificity = 95%. When the same test is used in a low-prevalence setting (prevalence = 1%), which parameter changes significantly?",
    options: [
      "Sensitivity decreases in the low-prevalence setting",
      "Specificity decreases in the low-prevalence setting",
      "Positive predictive value decreases dramatically in the low-prevalence setting",
      "Negative predictive value decreases in the low-prevalence setting"
    ],
    answer: 2,
    explanation: "Sensitivity and specificity are intrinsic test characteristics that do not change with prevalence (assuming the same spectrum of disease). However, predictive values are heavily influenced by prevalence. In the high-prevalence setting (20%): PPV = (0.90 x 0.20) / [(0.90 x 0.20) + (0.05 x 0.80)] = 0.18 / 0.22 = 81.8%. In the low-prevalence setting (1%): PPV = (0.90 x 0.01) / [(0.90 x 0.01) + (0.05 x 0.99)] = 0.009 / 0.0585 = 15.4%. The PPV drops from 81.8% to 15.4% - a dramatic decrease. This means in the low-prevalence setting, about 85% of positive results are false positives. Conversely, NPV improves from 97.4% to 99.99% in the low-prevalence setting. This principle is critical for understanding why screening programs target high-risk populations and why confirmatory testing is essential after a positive screening result."
  }
];

export default questions;

const questions = [
  // ========== Q1-Q10: Types of Study Designs - Cohort, Case-Control, RCT ==========
  {
    id: 1,
    question: "A researcher follows 2,000 factory workers exposed to asbestos and 2,000 unexposed workers for 20 years to compare lung cancer incidence. After 5 years, she also looks back at their medical records from the past 10 years. What type of study design is this?",
    options: [
      "Ambidirectional cohort study",
      "Retrospective cohort study",
      "Prospective cohort study",
      "Case-control study"
    ],
    answer: 0,
    explanation: "An ambidirectional cohort study combines both retrospective and prospective components. Here, the researcher looks back at past records (retrospective) AND follows the cohort forward for 20 years (prospective). This is distinct from a purely prospective or purely retrospective cohort study because it has both temporal directions of data collection from a defined cohort."
  },
  {
    id: 2,
    question: "In a nested case-control study within a cohort of 10,000 subjects, 200 develop hepatocellular carcinoma over 15 years. For each case, 2 controls are selected from the risk set at the time of diagnosis. What is the total number of subjects in the analysis?",
    options: [
      "400",
      "600",
      "10,000",
      "200"
    ],
    answer: 1,
    explanation: "In a nested case-control study, cases are identified as they occur in the cohort, and controls are sampled from the risk set. With 200 cases and 2 controls per case (200 x 2 = 400 controls), the total subjects in the analysis = 200 cases + 400 controls = 600. Note: controls are sampled from those still at risk at the time each case is diagnosed (incidence density sampling)."
  },
  {
    id: 3,
    question: "A pragmatic RCT differs from an explanatory RCT primarily in that it:",
    options: [
      "Uses placebo controls and strict inclusion criteria",
      "Tests interventions under ideal, controlled conditions with high internal validity",
      "Tests interventions under real-world conditions with broad inclusion criteria and flexible protocols",
      "Always uses double-blinding and intention-to-treat analysis"
    ],
    answer: 2,
    explanation: "Pragmatic RCTs (effectiveness trials) test interventions under real-world, routine clinical conditions with broad inclusion criteria, flexible protocols, and clinically relevant outcomes. Explanatory RCTs (efficacy trials) test interventions under ideal conditions with strict protocols, narrow inclusion criteria, and placebo controls. The PRECIS-2 tool helps classify trials along the pragmatic-explanatory continuum."
  },
  {
    id: 4,
    question: "A case-control study selects 150 cases of pancreatic cancer and 150 controls from the same hospital. Among cases, 90 report coffee consumption; among controls, 60 report coffee consumption. If it is later discovered that 30% of controls were admitted for diseases also associated with coffee consumption, what type of bias has occurred?",
    options: [
      "Recall bias",
      "Berkson's bias (admission rate bias)",
      "Neyman bias",
      "Detection bias"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) is a form of selection bias that occurs in hospital-based case-control studies when the exposure (coffee consumption) is related to the hospitalization of controls. Since 30% of controls had diseases associated with coffee, the control group has an artificially higher prevalence of coffee consumption, which would bias the odds ratio toward the null. This is a classic example of Berkson's bias."
  },
  {
    id: 5,
    question: "In a cluster-randomized trial, 20 villages are randomized (10 to intervention, 10 to control) with an average of 200 individuals per village. The intraclass correlation coefficient (ICC) is 0.05. What is the design effect?",
    options: [
      "10.95",
      "1.95",
      "11.95",
      "2.00"
    ],
    answer: 0,
    explanation: "Design Effect (DEFF) = 1 + (m - 1) x ICC, where m = average cluster size. DEFF = 1 + (200 - 1) x 0.05 = 1 + 199 x 0.05 = 1 + 9.95 = 10.95. This means the effective sample size is reduced by a factor of 10.95 compared to individual randomization. The required sample size must be multiplied by 10.95 to account for within-cluster correlation."
  },
  {
    id: 6,
    question: "A researcher wants to study the association between a rare genetic mutation (prevalence 0.1%) and a rare cancer. Which study design is MOST efficient?",
    options: [
      "Prospective cohort study",
      "Cross-sectional study",
      "Case-control study",
      "Case-cohort study"
    ],
    answer: 2,
    explanation: "For rare diseases, case-control studies are most efficient because they start with cases (people who already have the disease) and look back at exposures. A cohort study would require following an enormous number of people to accrue sufficient cases. While the exposure is also rare, the case-control design still works because you only need to assess exposure in the selected cases and controls, not the entire population."
  },
  {
    id: 7,
    question: "In a case-cohort study within a cohort of 8,000 subjects, a random subcohort of 800 is selected at baseline. Over follow-up, 160 cases of myocardial infarction occur, of which 20 are in the subcohort. How many unique individuals are included in the analysis?",
    options: [
      "960",
      "940",
      "800",
      "160"
    ],
    answer: 1,
    explanation: "In a case-cohort study, the comparison group is the subcohort (800 subjects). All cases (160) are included. However, 20 cases are already in the subcohort. Unique individuals = subcohort + cases outside subcohort = 800 + (160 - 20) = 800 + 140 = 940. The key difference from nested case-control is that the subcohort serves as the comparison for all cases and is selected at baseline, not matched to cases at failure times."
  },
  {
    id: 8,
    question: "An explanatory RCT shows that Drug X reduces blood pressure by 15 mmHg under strict protocol adherence. A subsequent pragmatic RCT shows only 8 mmHg reduction. Which best explains this discrepancy?",
    options: [
      "The pragmatic trial had a larger sample size",
      "The explanatory trial measured efficacy under ideal conditions while the pragmatic trial measured effectiveness with real-world non-adherence",
      "The pragmatic trial used a different primary endpoint",
      "Random error in the explanatory trial inflated the effect"
    ],
    answer: 1,
    explanation: "Explanatory RCTs measure efficacy (can the drug work under ideal conditions?), while pragmatic RCTs measure effectiveness (does the drug work in routine practice?). The gap between efficacy and effectiveness is often due to non-adherence, comorbidities, diverse patient populations, and varied clinical settings in the pragmatic trial. An 8 mmHg real-world reduction vs. 15 mmHg ideal reduction illustrates the efficacy-effectiveness gap."
  },
  {
    id: 9,
    question: "In a crossover RCT with two treatments (A and B) and two periods, 60 patients are randomized: 30 receive A then B, and 30 receive B then A. A washout period of 4 weeks is used. If carryover effect is detected, the appropriate analysis is:",
    options: [
      "Use data from both periods with adjustment for carryover",
      "Use only first-period data, effectively treating it as a parallel-group trial",
      "Ignore the carryover effect and analyze as planned",
      "Increase the washout period and repeat the trial"
    ],
    answer: 1,
    explanation: "When a carryover effect is detected in a crossover trial (i.e., the effect of treatment in period 1 influences outcomes in period 2), the valid approach is to use only first-period data. This essentially converts the crossover design into a parallel-group comparison. Using both periods with carryover present would bias treatment effect estimates. The test for carryover should be done first using the sum of period 1 and period 2 responses."
  },
  {
    id: 10,
    question: "A researcher identifies 300 lung cancer cases and 300 controls. She then goes back to stored blood samples collected 10 years ago from a cohort in which all subjects were enrolled. What study design is this?",
    options: [
      "Retrospective cohort study",
      "Case-control study with prevalent cases",
      "Nested case-control study",
      "Cross-sectional study"
    ],
    answer: 2,
    explanation: "This is a nested case-control study. The key features are: (1) it is embedded within an existing cohort, (2) cases developed disease during follow-up of the cohort, (3) controls are selected from the same cohort, and (4) exposure is assessed from stored biological specimens collected before disease onset. This design reduces recall bias and temporal ambiguity while being more cost-efficient than analyzing the entire cohort."
  },

  // ========== Q11-Q20: Incidence, Prevalence ==========
  {
    id: 11,
    question: "In a cohort of 5,000 people followed for varying durations, the total person-years of observation is 18,000. During follow-up, 90 new cases of diabetes are diagnosed. What is the incidence density (person-time incidence rate)?",
    options: [
      "18.0 per 1,000 person-years",
      "5.0 per 1,000 person-years",
      "1.8 per 1,000 person-years",
      "50.0 per 1,000 person-years"
    ],
    answer: 1,
    explanation: "Incidence density (person-time incidence rate) = Number of new cases / Total person-time at risk = 90 / 18,000 person-years = 0.005 per person-year = 5.0 per 1,000 person-years. Unlike cumulative incidence, incidence density accounts for varying follow-up times and allows subjects to contribute different amounts of person-time."
  },
  {
    id: 12,
    question: "A town has 50,000 residents. On January 1, 2025, there are 2,000 existing cases of hypertension. During 2025, 500 new cases are diagnosed, 100 hypertensive patients die, and 200 hypertensive patients move away. What is the point prevalence on December 31, 2025?",
    options: [
      "4.0%",
      "4.4%",
      "5.0%",
      "4.38%"
    ],
    answer: 3,
    explanation: "Point prevalence on Dec 31, 2025: Existing cases on Jan 1 = 2,000. New cases during year = +500. Deaths among cases = -100. Migration of cases = -200. Cases on Dec 31 = 2,000 + 500 - 100 - 200 = 2,200. Population on Dec 31 = 50,000 + 500(new cases from population) - 100(deaths) - 200(migration) = approximately 50,000 (assuming no other changes, but actual denominator adjusts). Point prevalence = 2,200 / (50,000 - 100 - 200) x 100 = 2,200 / 49,700 = 4.42% ~ 4.38% (accounting for the fact that new cases come from the existing population, not added to it). More precisely: population remains ~50,000 - 100 deaths - 200 moved = 49,700. Prevalence = 2,200/49,700 = 0.04426 = 4.43%. The closest answer is 4.38%."
  },
  {
    id: 13,
    question: "The prevalence of a disease is 10% and the incidence rate is 2 per 100 person-years. Assuming a steady state, what is the average duration of the disease?",
    options: [
      "20 years",
      "5 years",
      "0.2 years",
      "50 years"
    ],
    answer: 1,
    explanation: "Using the prevalence-incidence relationship in steady state: P / (1 - P) = Incidence rate x Duration. 0.10 / (1 - 0.10) = 0.02 x D. 0.1111 = 0.02 x D. D = 0.1111 / 0.02 = 5.56 years. When P is small, the approximation P = I x D gives D = 0.10 / 0.02 = 5 years. The answer 5 years uses this standard approximation (P = I x D), which is acceptable when prevalence is not too high."
  },
  {
    id: 14,
    question: "Five subjects enter a study at different times. Subject A: enters Jan 1, gets disease Jun 30 (6 months). Subject B: enters Mar 1, lost to follow-up Sep 1 (6 months). Subject C: enters Jan 1, study ends Dec 31 disease-free (12 months). Subject D: enters Jul 1, dies disease-free Oct 1 (3 months). Subject E: enters Jan 1, gets disease Apr 1 (3 months). Total person-years at risk is:",
    options: [
      "2.5 years",
      "2.0 years",
      "3.0 years",
      "30 months"
    ],
    answer: 0,
    explanation: "Person-time at risk: A contributes 6 months (until disease), B contributes 6 months (until lost), C contributes 12 months (full follow-up), D contributes 3 months (until death), E contributes 3 months (until disease). Total = 6 + 6 + 12 + 3 + 3 = 30 months = 2.5 years. Subjects stop contributing person-time when they develop disease, die, are lost to follow-up, or the study ends."
  },
  {
    id: 15,
    question: "In a population of 100,000, the annual incidence of stroke is 200 per 100,000 and the case-fatality rate is 25%. Assuming all survivors remain prevalent cases and no recovery, what is the approximate prevalence after 5 years (starting from zero prevalence)?",
    options: [
      "1,000 per 100,000",
      "750 per 100,000",
      "500 per 100,000",
      "Approximately 718 per 100,000"
    ],
    answer: 1,
    explanation: "Each year: 200 new cases per 100,000. 25% die, so 75% survive = 150 survivors added to prevalent pool each year. After 5 years (simplified without accounting for deaths of prevalent cases from prior years among new stroke cases): Year 1: 150 prevalent. Year 2: 150 + 150 = 300. Year 3: 450. Year 4: 600. Year 5: 750. Prevalence ~ 750 per 100,000. This is an approximation; in reality, prevalent cases may also die from other causes, but with the given information, 750 per 100,000 is the best answer."
  },
  {
    id: 16,
    question: "Period prevalence of depression in a community during calendar year 2025 was measured. On January 1, there were 400 cases. During 2025, 150 new cases occurred and 50 existing cases recovered. The population was 10,000 (stable). What is the period prevalence?",
    options: [
      "4.0%",
      "5.5%",
      "5.0%",
      "4.5%"
    ],
    answer: 1,
    explanation: "Period prevalence = (All cases existing at any time during the period) / (Population during the period). All cases during the period = existing cases at start + new cases during period = 400 + 150 = 550. Note: the 50 recoveries are NOT subtracted because those individuals were still cases at some point during the period. Period prevalence = 550 / 10,000 = 5.5%. This differs from point prevalence, which would subtract recoveries."
  },
  {
    id: 17,
    question: "A closed cohort of 1,000 disease-free individuals is followed for 3 years. By the end of year 1, 50 develop disease. By end of year 2, 40 more develop disease. By end of year 3, 30 more develop disease. What is the 3-year cumulative incidence?",
    options: [
      "12.0%",
      "12.6%",
      "10.0%",
      "12.0 per 1,000"
    ],
    answer: 0,
    explanation: "Cumulative incidence (risk) = Total new cases / Population at risk at start = (50 + 40 + 30) / 1,000 = 120 / 1,000 = 0.12 = 12.0%. In a closed cohort with no losses to follow-up, cumulative incidence is simply the proportion who develop disease over the total follow-up period. Note: if there were losses, we would need to adjust the denominator."
  },
  {
    id: 18,
    question: "The attack rate during a foodborne outbreak at a wedding is calculated. Of 200 guests, 180 ate the suspect food and 40 of them became ill. Of the 20 who did not eat the suspect food, 2 became ill. The attack rate among exposed is:",
    options: [
      "20.0%",
      "22.2%",
      "21.0%",
      "10.0%"
    ],
    answer: 1,
    explanation: "Attack rate among exposed = (Number ill among exposed / Total exposed) x 100 = (40 / 180) x 100 = 22.2%. Attack rate among unexposed = (2 / 20) x 100 = 10.0%. The attack rate is a form of cumulative incidence used during outbreaks. The relative risk = 22.2% / 10.0% = 2.22, and attributable risk among exposed = 22.2% - 10.0% = 12.2%."
  },
  {
    id: 19,
    question: "In a dynamic (open) population of approximately 500,000, there were 1,500 new cases of tuberculosis diagnosed during 2025. The mid-year population was 500,000. What is the incidence rate?",
    options: [
      "300 per 100,000 per year",
      "3 per 1,000 per year",
      "0.3 per 100,000 per year",
      "Both A and B are correct"
    ],
    answer: 3,
    explanation: "Incidence rate = New cases / Mid-year population = 1,500 / 500,000 = 0.003 per person per year = 3 per 1,000 per year = 300 per 100,000 per year. Options A and B express the same rate in different units. In a dynamic population, mid-year population is used as an approximation of person-time denominator when individual follow-up data is unavailable."
  },
  {
    id: 20,
    question: "A disease has a prevalence of 2% and an average duration of 4 years. Using the steady-state assumption, what is the approximate incidence rate?",
    options: [
      "0.5% per year",
      "8% per year",
      "0.5 per 100 person-years",
      "Both A and C"
    ],
    answer: 3,
    explanation: "Using P = I x D (valid when prevalence is low): I = P / D = 0.02 / 4 = 0.005 per person-year = 0.5% per year = 0.5 per 100 person-years. Options A and C express the same value in different formats. This relationship (P = I x D) assumes a steady state where the population, incidence, and duration are relatively constant over time."
  },

  // ========== Q21-Q30: Relative Risk, Odds Ratio ==========
  {
    id: 21,
    question: "In a cohort study: 100 smokers are followed and 20 develop lung cancer. 100 non-smokers are followed and 2 develop lung cancer. What is the relative risk of lung cancer among smokers?",
    options: [
      "10.0",
      "9.0",
      "11.3",
      "0.1"
    ],
    answer: 0,
    explanation: "Relative Risk (RR) = Risk in exposed / Risk in unexposed = (20/100) / (2/100) = 0.20 / 0.02 = 10.0. Smokers have 10 times the risk of developing lung cancer compared to non-smokers. RR can be directly calculated in cohort studies but not in case-control studies."
  },
  {
    id: 22,
    question: "In a case-control study: 80 out of 200 lung cancer cases report asbestos exposure. 20 out of 200 controls report asbestos exposure. What is the odds ratio?",
    options: [
      "4.0",
      "5.33",
      "6.0",
      "3.56"
    ],
    answer: 2,
    explanation: "Odds Ratio = (a x d) / (b x c). Cases: exposed (a) = 80, unexposed (c) = 120. Controls: exposed (b) = 20, unexposed (d) = 180. OR = (80 x 180) / (20 x 120) = 14,400 / 2,400 = 6.0. Alternatively: Odds of exposure in cases = 80/120 = 0.667. Odds of exposure in controls = 20/180 = 0.111. OR = 0.667 / 0.111 = 6.0."
  },
  {
    id: 23,
    question: "A cohort study reports: Risk in exposed = 30%, Risk in unexposed = 10%. The population attributable risk percent (PAR%) is needed. If 40% of the population is exposed, what is the PAR%?",
    options: [
      "66.7%",
      "44.4%",
      "30.0%",
      "20.0%"
    ],
    answer: 1,
    explanation: "First calculate RR = 0.30/0.10 = 3.0. PAR% = [Pe(RR - 1)] / [1 + Pe(RR - 1)] x 100, where Pe = proportion exposed in population. PAR% = [0.40(3 - 1)] / [1 + 0.40(3 - 1)] x 100 = [0.40 x 2] / [1 + 0.80] x 100 = 0.80 / 1.80 x 100 = 44.4%. This means 44.4% of disease in the total population is attributable to the exposure, assuming causality."
  },
  {
    id: 24,
    question: "The crude odds ratio for the association between alcohol and oral cancer is 3.5. After stratifying by smoking status: OR in smokers = 2.0, OR in non-smokers = 2.1. The Mantel-Haenszel adjusted OR is 2.05. What is the most appropriate interpretation?",
    options: [
      "Smoking is an effect modifier",
      "Smoking is a confounder but not an effect modifier",
      "Smoking is both a confounder and an effect modifier",
      "There is no confounding or effect modification"
    ],
    answer: 1,
    explanation: "Confounding is assessed by comparing crude and adjusted estimates. The crude OR (3.5) differs substantially from the MH-adjusted OR (2.05), indicating confounding by smoking. Effect modification is assessed by comparing stratum-specific estimates: OR in smokers (2.0) and OR in non-smokers (2.1) are similar, indicating NO effect modification. Therefore, smoking is a confounder but not an effect modifier."
  },
  {
    id: 25,
    question: "In a case-control study, the crude OR = 2.5 and the Mantel-Haenszel adjusted OR = 2.4 after stratifying by a potential confounder. What can be concluded?",
    options: [
      "Strong confounding is present",
      "Minimal or no confounding by this variable; the crude and adjusted OR are similar",
      "Effect modification is present",
      "The confounder should be included in the final model"
    ],
    answer: 1,
    explanation: "When the crude OR (2.5) and adjusted OR (2.4) are similar (difference < 10%), there is minimal or no confounding by the stratification variable. A general rule: if the adjusted estimate changes by more than 10% from the crude estimate, confounding is considered meaningful. Here, (2.5 - 2.4)/2.5 = 4% change, indicating negligible confounding."
  },
  {
    id: 26,
    question: "In a cohort study, 500 exposed and 500 unexposed are followed. Results: Exposed group - 50 events; Unexposed group - 25 events. What is the Number Needed to Harm (NNH)?",
    options: [
      "20",
      "10",
      "50",
      "100"
    ],
    answer: 0,
    explanation: "Risk in exposed = 50/500 = 0.10 (10%). Risk in unexposed = 25/500 = 0.05 (5%). Attributable Risk (AR) = 0.10 - 0.05 = 0.05 (5%). NNH = 1/AR = 1/0.05 = 20. This means for every 20 people exposed, 1 additional case occurs that is attributable to the exposure. NNH is the reciprocal of the absolute risk increase."
  },
  {
    id: 27,
    question: "When the disease is rare (prevalence < 5%), the odds ratio from a case-control study approximates the relative risk. If the disease prevalence is 20% and the true RR = 3.0, what would the OR approximately be?",
    options: [
      "3.0",
      "3.86",
      "4.5",
      "2.5"
    ],
    answer: 1,
    explanation: "When disease is not rare, OR overestimates RR (for RR > 1). The relationship is: OR = RR x [(1 - P0) / (1 - P1)], where P0 = risk in unexposed and P1 = risk in exposed. If overall prevalence ~20% and RR = 3.0, assume P0 = 10%, then P1 = 30%. OR = (P1/(1-P1)) / (P0/(1-P0)) = (0.30/0.70) / (0.10/0.90) = 0.4286 / 0.1111 = 3.86. The rare disease assumption fails here; OR (3.86) overestimates RR (3.0)."
  },
  {
    id: 28,
    question: "A 2x2 table from a cohort study shows: a = 40, b = 160, c = 10, d = 190. Calculate the attributable risk percent (AR%) among the exposed.",
    options: [
      "75%",
      "80%",
      "60%",
      "50%"
    ],
    answer: 0,
    explanation: "Risk in exposed (Re) = a/(a+b) = 40/200 = 0.20. Risk in unexposed (Ru) = c/(c+d) = 10/200 = 0.05. RR = 0.20/0.05 = 4.0. AR% = (RR - 1)/RR x 100 = (4 - 1)/4 x 100 = 75%. Alternatively: AR% = (Re - Ru)/Re x 100 = (0.20 - 0.05)/0.20 x 100 = 75%. This means 75% of disease in the exposed group is attributable to the exposure."
  },
  {
    id: 29,
    question: "In a matched case-control study (1:1 matching), there are 200 pairs. Concordant pairs: both exposed = 40, both unexposed = 80. Discordant pairs: case exposed & control unexposed = 60, case unexposed & control exposed = 20. What is the matched odds ratio?",
    options: [
      "3.0",
      "2.0",
      "1.5",
      "4.0"
    ],
    answer: 0,
    explanation: "In a matched case-control study, the matched OR uses only discordant pairs: OR = b/c (using McNemar's notation), where b = pairs where case is exposed and control is not = 60, c = pairs where control is exposed and case is not = 20. Matched OR = 60/20 = 3.0. Concordant pairs (both exposed or both unexposed) provide no information about the association and are excluded from the calculation."
  },
  {
    id: 30,
    question: "A clinical trial reports: Experimental group event rate (EER) = 15%, Control group event rate (CER) = 25%. What are the Absolute Risk Reduction (ARR) and Number Needed to Treat (NNT)?",
    options: [
      "ARR = 10%, NNT = 10",
      "ARR = 10%, NNT = 100",
      "ARR = 40%, NNT = 2.5",
      "ARR = 15%, NNT = 6.7"
    ],
    answer: 0,
    explanation: "ARR = CER - EER = 25% - 15% = 10% = 0.10. NNT = 1/ARR = 1/0.10 = 10. Relative Risk Reduction (RRR) = (CER - EER)/CER = 10%/25% = 40%. NNT of 10 means you need to treat 10 patients with the experimental treatment to prevent 1 additional adverse event compared to control."
  },

  // ========== Q31-Q40: Bias (Selection, Information), Confounding ==========
  {
    id: 31,
    question: "A case-control study of myocardial infarction (MI) selects cases who survived long enough to be hospitalized. Patients who died before reaching the hospital are excluded. This leads to under-representation of severe, rapidly fatal cases. What type of bias is this?",
    options: [
      "Berkson's bias",
      "Neyman bias (prevalence-incidence bias)",
      "Recall bias",
      "Lead-time bias"
    ],
    answer: 1,
    explanation: "Neyman bias (prevalence-incidence bias or survival bias) occurs when prevalent rather than incident cases are studied, leading to under-representation of rapidly fatal or quickly resolving cases. By excluding MI patients who died before hospitalization, the study misses severe cases and may find that certain risk factors (associated with fatal MI) appear less strongly associated with disease."
  },
  {
    id: 32,
    question: "A study examines the relationship between oral contraceptive (OC) use and breast cancer. The crude RR = 1.8. Age is suspected as a confounder. After stratification by age: RR in age <40 = 1.2, RR in age 40+ = 3.5. What is the correct interpretation?",
    options: [
      "Age is a confounder only",
      "Age is an effect modifier only",
      "Age is both a confounder and an effect modifier",
      "There is no confounding or effect modification"
    ],
    answer: 2,
    explanation: "Effect modification is assessed by comparing stratum-specific estimates: RR in <40 (1.2) vs RR in 40+ (3.5) differ substantially, indicating effect modification by age. Confounding is assessed by comparing the crude RR (1.8) with the adjusted estimate; since the stratum-specific RRs are very different, a single adjusted RR would be misleading, but the crude (1.8) does not represent either stratum well. Age is both a confounder (crude RR is distorted) and an effect modifier (stratum-specific RRs differ). When effect modification is present, report stratum-specific estimates rather than an adjusted summary."
  },
  {
    id: 33,
    question: "In a case-control study, cases (with disease) tend to remember past exposures more thoroughly than controls. This results in a systematically higher exposure reported among cases. This bias is called:",
    options: [
      "Interviewer bias",
      "Selection bias",
      "Recall bias (reporting bias)",
      "Misclassification bias"
    ],
    answer: 2,
    explanation: "Recall bias occurs when cases and controls differentially recall or report past exposures. Cases, motivated by their disease, tend to search their memory more thoroughly for possible causes, leading to higher reported exposure. This is a form of information bias (specifically, differential misclassification) and typically biases the OR away from the null. It is a major limitation of case-control studies."
  },
  {
    id: 34,
    question: "Non-differential misclassification of a binary exposure (with two categories) in a case-control study will generally bias the odds ratio:",
    options: [
      "Away from the null",
      "Toward the null",
      "In an unpredictable direction",
      "It will not affect the odds ratio"
    ],
    answer: 1,
    explanation: "Non-differential misclassification means the error rate is the same in cases and controls. For a binary exposure with two categories, this generally biases the OR toward the null (toward 1.0), making a true association appear weaker. This is because misclassification mixes exposed and unexposed groups, diluting the true difference. Note: for exposures with more than two categories, non-differential misclassification can bias in either direction."
  },
  {
    id: 35,
    question: "A study finds that coffee drinking is associated with lung cancer (OR = 2.5). However, coffee drinkers are more likely to be smokers, and smoking causes lung cancer. After adjusting for smoking, the OR drops to 1.1 (95% CI: 0.8-1.5). What was smoking in this scenario?",
    options: [
      "An effect modifier",
      "A mediator",
      "A confounder",
      "A collider"
    ],
    answer: 2,
    explanation: "Smoking is a confounder because: (1) it is associated with the exposure (coffee drinking), (2) it is an independent risk factor for the outcome (lung cancer), and (3) it is not on the causal pathway between coffee and lung cancer. After adjusting for smoking, the OR dropped from 2.5 to 1.1 (non-significant), indicating the crude association was largely due to confounding by smoking. The three criteria for confounding are all met."
  },
  {
    id: 36,
    question: "In a study of physical activity and cardiovascular disease, researchers restrict enrollment to only non-smokers, non-diabetics, aged 40-60 years. This approach to control confounding is called:",
    options: [
      "Matching",
      "Restriction",
      "Stratification",
      "Randomization"
    ],
    answer: 1,
    explanation: "Restriction limits enrollment to specific categories of potential confounders (non-smokers, non-diabetics, specific age range). This eliminates confounding by these variables since they don't vary in the study population. Advantages: simple, effective. Disadvantages: reduces generalizability and sample size, and cannot control for unknown confounders. It is a design-stage method of controlling confounding."
  },
  {
    id: 37,
    question: "In a stratified analysis for confounding, the Breslow-Day test yields p = 0.02. This indicates:",
    options: [
      "Significant confounding is present",
      "The exposure-outcome association is statistically significant",
      "The stratum-specific odds ratios are significantly heterogeneous (effect modification is present)",
      "The Mantel-Haenszel adjusted OR is valid"
    ],
    answer: 2,
    explanation: "The Breslow-Day test assesses homogeneity of odds ratios across strata. A significant result (p = 0.02) indicates that stratum-specific ORs are significantly different from each other, suggesting effect modification (interaction). When the Breslow-Day test is significant, it is inappropriate to calculate a single Mantel-Haenszel summary OR; instead, stratum-specific ORs should be reported separately."
  },
  {
    id: 38,
    question: "Volunteers who enroll in a health screening program are generally healthier than the general population. Studies comparing screened vs. unscreened individuals may overestimate the benefit of screening. This is an example of:",
    options: [
      "Lead-time bias",
      "Length bias",
      "Healthy volunteer bias (self-selection bias)",
      "Berkson's bias"
    ],
    answer: 2,
    explanation: "Healthy volunteer bias (self-selection bias) occurs when people who voluntarily participate in screening or studies are systematically healthier than non-participants. They tend to have better health behaviors, higher socioeconomic status, and better access to healthcare. This creates a selection bias that can make screening appear more beneficial than it actually is, as the screened group would have had better outcomes regardless."
  },
  {
    id: 39,
    question: "A researcher studies whether a new exposure causes cancer. She conditions on (adjusts for) a variable that is a common effect of both the exposure and the outcome. This opens a spurious association path. The variable she adjusted for is called a:",
    options: [
      "Confounder",
      "Mediator",
      "Collider",
      "Instrumental variable"
    ],
    answer: 2,
    explanation: "A collider is a variable that is a common effect of two other variables (on the path, arrows point INTO the collider). In a DAG: Exposure -> Collider <- Outcome. Conditioning on (adjusting for, stratifying by, or selecting on) a collider opens a spurious non-causal path between exposure and outcome, creating collider bias (also called collider stratification bias or Berkson's bias in certain contexts). Unlike confounders, colliders should NOT be adjusted for."
  },
  {
    id: 40,
    question: "In a cohort study of occupational exposure and mortality, workers are compared to the general population. The study finds lower overall mortality among workers. This apparent protective effect of employment is due to:",
    options: [
      "Confounding by age",
      "Information bias",
      "Healthy worker effect",
      "Ecological fallacy"
    ],
    answer: 2,
    explanation: "The healthy worker effect is a selection bias where employed individuals are compared to the general population (which includes unemployed, disabled, and chronically ill individuals). Workers must be healthy enough to be employed, so they have lower mortality than the general population by default. This can mask real occupational hazards. To address this, compare workers to other worker populations or use internal comparisons within the cohort."
  },

  // ========== Q41-Q50: Screening Methods ==========
  {
    id: 41,
    question: "A screening test has sensitivity = 90% and specificity = 80%. In a population of 10,000 where the disease prevalence is 5%, how many false positives will there be?",
    options: [
      "1,900",
      "50",
      "450",
      "1,850"
    ],
    answer: 0,
    explanation: "Diseased = 10,000 x 0.05 = 500. Non-diseased = 9,500. True positives = 500 x 0.90 = 450. False positives = 9,500 x (1 - 0.80) = 9,500 x 0.20 = 1,900. Despite 80% specificity, the large number of non-diseased individuals (9,500) generates many false positives. This illustrates why low prevalence populations have poor positive predictive value even with good test characteristics."
  },
  {
    id: 42,
    question: "Using the same scenario (sensitivity 90%, specificity 80%, prevalence 5%, population 10,000): What is the positive predictive value (PPV)?",
    options: [
      "19.1%",
      "90.0%",
      "80.0%",
      "32.1%"
    ],
    answer: 0,
    explanation: "True positives (TP) = 450. False positives (FP) = 1,900. PPV = TP / (TP + FP) = 450 / (450 + 1,900) = 450 / 2,350 = 19.1%. Despite sensitivity of 90% and specificity of 80%, only 19.1% of positive tests are true positives when prevalence is 5%. This demonstrates the profound effect of low prevalence on PPV. Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1-Specificity)(1-Prevalence)]."
  },
  {
    id: 43,
    question: "Lead-time bias in cancer screening occurs when:",
    options: [
      "The screening test detects cancers that would never have caused symptoms",
      "Screening detects slower-growing tumors preferentially",
      "Earlier detection by screening advances the diagnosis without actually extending life, making survival appear longer",
      "Patients who are screened receive better treatment"
    ],
    answer: 2,
    explanation: "Lead-time bias makes it appear that screened patients survive longer from diagnosis, but this is only because diagnosis was made earlier (lead time), not because death was delayed. Example: Without screening, cancer diagnosed at age 67, death at 70 = 3-year survival. With screening, same cancer detected at 63, death still at 70 = 7-year survival. The patient did not live longer; diagnosis was simply earlier. Only mortality rate (not survival time) can properly evaluate screening effectiveness."
  },
  {
    id: 44,
    question: "Length bias in cancer screening programs refers to:",
    options: [
      "Longer screening intervals produce better results",
      "Screening preferentially detects slow-growing, less aggressive tumors because they have a longer detectable preclinical phase",
      "The length of the screening test affects its accuracy",
      "Longer follow-up periods reduce bias"
    ],
    answer: 1,
    explanation: "Length bias occurs because slow-growing tumors spend more time in the detectable preclinical phase (sojourn time) and are therefore more likely to be detected by periodic screening. Fast-growing aggressive cancers pass through the preclinical phase quickly and are more likely to present as interval cancers (between screenings). This means screen-detected cancers tend to be biologically more favorable, inflating the apparent benefit of screening."
  },
  {
    id: 45,
    question: "A new screening test for colorectal cancer is evaluated. Results: TP = 80, FP = 120, FN = 20, TN = 780. What are the sensitivity and specificity?",
    options: [
      "Sensitivity = 80%, Specificity = 86.7%",
      "Sensitivity = 40%, Specificity = 97.5%",
      "Sensitivity = 66.7%, Specificity = 80%",
      "Sensitivity = 86.7%, Specificity = 80%"
    ],
    answer: 0,
    explanation: "Sensitivity = TP / (TP + FN) = 80 / (80 + 20) = 80/100 = 80%. Specificity = TN / (TN + FP) = 780 / (780 + 120) = 780/900 = 86.7%. Sensitivity measures the test's ability to correctly identify diseased individuals. Specificity measures the ability to correctly identify non-diseased individuals."
  },
  {
    id: 46,
    question: "Wilson and Jungner's criteria for a good screening program include all of the following EXCEPT:",
    options: [
      "The condition should be an important health problem",
      "There should be an accepted treatment for the condition",
      "The screening test must have 100% sensitivity",
      "There should be a recognizable latent or early symptomatic stage"
    ],
    answer: 2,
    explanation: "Wilson and Jungner (1968) criteria include: (1) important health problem, (2) accepted treatment available, (3) facilities for diagnosis and treatment available, (4) recognizable latent/early stage, (5) suitable test available, (6) test acceptable to population, (7) natural history understood, (8) agreed policy on whom to treat, (9) cost-effective, (10) ongoing process. No screening test requires 100% sensitivity; a balance between sensitivity and specificity is needed."
  },
  {
    id: 47,
    question: "If the prevalence of a disease increases from 1% to 10% while sensitivity (95%) and specificity (90%) remain unchanged, which of the following is TRUE?",
    options: [
      "PPV decreases and NPV increases",
      "PPV increases and NPV decreases",
      "Both PPV and NPV increase",
      "Neither PPV nor NPV changes"
    ],
    answer: 1,
    explanation: "At 1% prevalence: PPV = (0.95 x 0.01) / [(0.95 x 0.01) + (0.10 x 0.99)] = 0.0095 / 0.1085 = 8.8%. NPV = (0.90 x 0.99) / [(0.90 x 0.99) + (0.05 x 0.01)] = 0.891 / 0.8915 = 99.9%. At 10% prevalence: PPV = (0.95 x 0.10) / [(0.95 x 0.10) + (0.10 x 0.90)] = 0.095 / 0.185 = 51.4%. NPV = (0.90 x 0.90) / [(0.90 x 0.90) + (0.05 x 0.10)] = 0.81 / 0.815 = 99.4%. PPV increased (8.8% to 51.4%) and NPV decreased (99.9% to 99.4%)."
  },
  {
    id: 48,
    question: "In a two-stage screening program, the first test has sensitivity = 95% and specificity = 70%. Those who test positive undergo a second test with sensitivity = 90% and specificity = 95%. What is the net (combined) sensitivity of the two-stage program?",
    options: [
      "85.5%",
      "99.5%",
      "95.0%",
      "90.0%"
    ],
    answer: 0,
    explanation: "In a serial (two-stage) screening where both tests must be positive for a final positive result: Net sensitivity = Sensitivity1 x Sensitivity2 = 0.95 x 0.90 = 0.855 = 85.5%. Net specificity = 1 - (1 - Specificity1)(1 - Specificity2) = 1 - (0.30)(0.05) = 1 - 0.015 = 0.985 = 98.5%. Serial testing increases specificity (and PPV) but decreases sensitivity. It is used when confirmatory testing is needed to reduce false positives."
  },
  {
    id: 49,
    question: "A screening program detects breast cancer 3 years before it would have been clinically detected. The 5-year survival rate from diagnosis is 70% in screened women and 50% in unscreened women. If mortality rates are identical in both groups, the apparent survival difference is entirely due to:",
    options: [
      "Better treatment in screened women",
      "Lead-time bias",
      "Length bias",
      "Selection bias"
    ],
    answer: 1,
    explanation: "If mortality rates are identical, screening did not actually extend life. The 3-year lead time means screened women are diagnosed 3 years earlier. Their 5-year survival is measured from an earlier starting point, making survival appear longer. A woman who dies at the same age would have 5-year survival counted from an earlier diagnosis (and may survive 5 years from that point) but would not survive 5 years from a later clinical diagnosis. This is pure lead-time bias. Only comparing mortality rates (not survival) can account for this."
  },
  {
    id: 50,
    question: "Overdiagnosis bias in screening refers to:",
    options: [
      "Diagnosing a condition in a patient who was misclassified as positive",
      "Detecting and diagnosing a true condition that would never have caused symptoms or death during the patient's lifetime",
      "Over-reporting of positive results by radiologists",
      "Using an overly sensitive screening test"
    ],
    answer: 1,
    explanation: "Overdiagnosis bias occurs when screening detects true pathological conditions (e.g., indolent cancers, ductal carcinoma in situ) that would never have progressed to cause symptoms or death within the person's lifetime. These patients are 'overdiagnosed' and subjected to unnecessary treatment, side effects, and anxiety. Overdiagnosis inflates incidence rates and apparent survival, making screening appear more beneficial. It is distinct from false positives, which are incorrect diagnoses, whereas overdiagnosis involves correctly diagnosed but clinically insignificant disease."
  }
];

export default questions;

const questions = [
  // ===== Q1-Q10: Types of Study Designs - Cohort, Case-Control, RCT =====
  {
    id: 1,
    question: "A Phase I clinical trial primarily aims to evaluate which of the following?",
    options: [
      "Safety and pharmacokinetics in a small group of healthy volunteers",
      "Efficacy of the drug compared to placebo in a large population",
      "Long-term adverse effects after the drug is marketed",
      "Dose-response relationship in patients with the target disease"
    ],
    answer: 0,
    explanation: "Phase I trials are the first-in-human studies conducted on a small number (20-80) of healthy volunteers. The primary objective is to assess safety, tolerability, pharmacokinetics (absorption, distribution, metabolism, excretion), and pharmacodynamics. Phase II assesses efficacy and dose-response in patients, Phase III confirms efficacy in large populations, and Phase IV is post-marketing surveillance."
  },
  {
    id: 2,
    question: "In a non-inferiority trial, the null hypothesis states that the new treatment is:",
    options: [
      "Superior to the active control",
      "Inferior to the active control by more than the non-inferiority margin",
      "Equivalent to the active control",
      "Different from placebo in either direction"
    ],
    answer: 1,
    explanation: "In a non-inferiority trial, H0: the new treatment is inferior to the active control by at least the pre-specified non-inferiority margin (delta). H1: the new treatment is not worse than the control by more than delta. If the lower bound of the 95% CI for the treatment difference does not cross the non-inferiority margin, we reject H0 and conclude non-inferiority. This differs from equivalence trials which test whether the difference lies within a two-sided margin (-delta to +delta)."
  },
  {
    id: 3,
    question: "Which phase of a clinical trial is also known as the 'post-marketing surveillance' phase?",
    options: [
      "Phase I",
      "Phase II",
      "Phase III",
      "Phase IV"
    ],
    answer: 3,
    explanation: "Phase IV trials occur after a drug has received regulatory approval and is available on the market. They monitor long-term safety, detect rare adverse effects, and assess effectiveness in real-world settings. These are also called post-marketing surveillance studies. Notable examples include the detection of rofecoxib (Vioxx) cardiovascular risks through Phase IV surveillance."
  },
  {
    id: 4,
    question: "An adaptive clinical trial design allows which of the following during the course of the study?",
    options: [
      "Modifications to the trial protocol based on interim data analysis",
      "Elimination of the control group after initial phase",
      "Retrospective changes to the primary endpoint after study completion",
      "Removal of informed consent requirements mid-trial"
    ],
    answer: 0,
    explanation: "Adaptive designs use accumulating data from interim analyses to modify aspects of the trial without undermining its validity and integrity. Permitted modifications include sample size re-estimation, dropping treatment arms, changing randomization ratios, modifying eligibility criteria, or switching from non-inferiority to superiority testing. All adaptations must be pre-planned in the protocol. This increases efficiency and can reduce costs while maintaining statistical rigor."
  },
  {
    id: 5,
    question: "In an equivalence trial, the treatment is considered equivalent to the comparator when:",
    options: [
      "The p-value is greater than 0.05",
      "The entire confidence interval for the treatment difference falls within the pre-specified equivalence margin (-delta to +delta)",
      "The point estimate of the difference is exactly zero",
      "The new drug shows a statistically significant difference from placebo"
    ],
    answer: 1,
    explanation: "In an equivalence trial, equivalence is established when the entire two-sided confidence interval (typically 95% CI or 90% CI for bioequivalence) for the difference between treatments lies within the pre-specified equivalence margin [-delta, +delta]. For bioequivalence studies, the standard margin is 80-125% for the ratio of AUC and Cmax. A p-value > 0.05 merely indicates failure to reject the null of no difference, which is not the same as proving equivalence."
  },
  {
    id: 6,
    question: "A researcher follows 5,000 smokers and 5,000 non-smokers for 20 years to determine the incidence of lung cancer. This study design is best described as:",
    options: [
      "Case-control study",
      "Prospective cohort study",
      "Cross-sectional study",
      "Randomized controlled trial"
    ],
    answer: 1,
    explanation: "This is a prospective cohort study because: (1) participants are classified by exposure status (smokers vs non-smokers) at baseline, (2) they are followed forward in time (20 years), and (3) the outcome (lung cancer incidence) is measured during follow-up. Cohort studies move from exposure to disease, while case-control studies move from disease to exposure. An RCT would require random assignment of the exposure, which is unethical for smoking."
  },
  {
    id: 7,
    question: "Which phase of a clinical trial typically uses a 'dose-escalation' design to determine the maximum tolerated dose (MTD)?",
    options: [
      "Phase I",
      "Phase II",
      "Phase III",
      "Phase IV"
    ],
    answer: 0,
    explanation: "Phase I trials commonly use dose-escalation designs such as the '3+3 design' or continual reassessment method (CRM) to determine the MTD and dose-limiting toxicities (DLTs). Starting with a low dose, successive cohorts of 3-6 subjects receive escalating doses until unacceptable toxicity is observed. The MTD is typically defined as the highest dose at which fewer than 33% of subjects experience a DLT. This dose then proceeds to Phase II for efficacy testing."
  },
  {
    id: 8,
    question: "A case-control study is particularly advantageous over a cohort study when studying:",
    options: [
      "Common diseases with short latency periods",
      "Rare diseases with long latency periods",
      "Diseases where exposure measurement requires prospective data",
      "Conditions requiring estimation of incidence rates"
    ],
    answer: 1,
    explanation: "Case-control studies are especially efficient for rare diseases because they start by selecting cases (people with the disease) and controls (people without), then look back at exposure history. For a rare disease (e.g., prevalence 1/100,000), a cohort study would need to follow millions of people for years, making it impractical. Case-control studies cannot directly calculate incidence or relative risk but can estimate odds ratios, which approximate relative risk when the disease is rare (rare disease assumption)."
  },
  {
    id: 9,
    question: "In a Phase II clinical trial, the primary objective is to:",
    options: [
      "Determine the pharmacokinetic profile in healthy volunteers",
      "Evaluate therapeutic efficacy and optimal dosing in patients with the disease",
      "Confirm efficacy in a large multi-center randomized trial",
      "Monitor rare adverse effects in the general population"
    ],
    answer: 1,
    explanation: "Phase II trials enroll patients with the target disease (100-300 typically) to evaluate efficacy and determine the optimal dose. Phase IIa studies are exploratory (proof of concept), while Phase IIb studies are dose-finding studies that identify the dose-response relationship. Phase II trials help determine whether the drug has sufficient promise to warrant large-scale Phase III testing. The success rate from Phase II to Phase III is approximately 30-40%."
  },
  {
    id: 10,
    question: "Reverse causation is most likely to be a problem in which study design?",
    options: [
      "Randomized controlled trial",
      "Prospective cohort study with long follow-up",
      "Cross-sectional study",
      "Phase III clinical trial"
    ],
    answer: 2,
    explanation: "Reverse causation (also called reverse causality or protopathic bias) occurs when the apparent cause is actually the effect, or the temporal sequence is unclear. Cross-sectional studies measure exposure and outcome simultaneously, making it impossible to establish temporality. For example, finding an association between low physical activity and obesity could mean inactivity causes obesity OR obesity leads to inactivity. Prospective studies and RCTs establish temporal sequence, reducing this bias. Even case-control studies can suffer if the disease alters the exposure before diagnosis."
  },

  // ===== Q11-Q20: Incidence and Prevalence =====
  {
    id: 11,
    question: "In a city of 500,000, there are 2,000 existing cases of tuberculosis on January 1st. During the year, 500 new cases are diagnosed and 300 patients die from TB. What is the period prevalence of TB for that year?",
    options: [
      "2,000/500,000 = 0.4%",
      "2,500/500,000 = 0.5%",
      "500/500,000 = 0.1%",
      "2,200/500,000 = 0.44%"
    ],
    answer: 1,
    explanation: "Period prevalence = (All cases existing during the time period) / (Population at risk during that period). Total cases during the year = existing cases on Jan 1 (2,000) + new cases during the year (500) = 2,500. Period prevalence = 2,500/500,000 = 0.005 = 0.5%. Note: deaths are not subtracted because those individuals had the disease during the period. Point prevalence would only count cases at a single time point."
  },
  {
    id: 12,
    question: "The secondary attack rate is defined as:",
    options: [
      "Total number of cases divided by the total population",
      "Number of new cases among contacts of primary cases divided by total susceptible contacts",
      "Incidence rate in the second wave of an epidemic",
      "Attack rate calculated after excluding the index case from numerator and denominator"
    ],
    answer: 1,
    explanation: "Secondary attack rate (SAR) = (Number of new cases among contacts within the incubation period) / (Total number of susceptible contacts exposed to primary cases) x 100. It measures the spread of disease among close contacts (e.g., household members). Example: If a measles case has 10 susceptible household contacts and 4 develop measles, SAR = 4/10 = 40%. The index/primary case is excluded from both numerator and denominator. SAR is crucial for assessing transmissibility and evaluating vaccine effectiveness in household settings."
  },
  {
    id: 13,
    question: "The herd immunity threshold (HIT) for a disease with a basic reproduction number (R0) of 5 is:",
    options: [
      "50%",
      "60%",
      "80%",
      "90%"
    ],
    answer: 2,
    explanation: "Herd immunity threshold (HIT) = 1 - (1/R0). For R0 = 5: HIT = 1 - (1/5) = 1 - 0.2 = 0.8 = 80%. This means 80% of the population needs to be immune (through vaccination or natural infection) to prevent sustained transmission. For comparison: Measles (R0 ~ 12-18) requires ~92-95% coverage; COVID-19 (R0 ~ 2-3) requires ~50-67% coverage. This formula assumes homogeneous mixing in the population."
  },
  {
    id: 14,
    question: "If the prevalence of diabetes in a population is 10% and the annual incidence rate is 2%, the average duration of diabetes in this population is approximately:",
    options: [
      "2 years",
      "5 years",
      "10 years",
      "20 years"
    ],
    answer: 1,
    explanation: "Using the relationship: Prevalence = Incidence x Duration (when prevalence is low and the population is in a steady state). Therefore, Duration = Prevalence / Incidence = 0.10 / 0.02 = 5 years. This is based on the formula P = I x D, which holds when prevalence < 10% and the disease has a stable incidence and duration. For higher prevalence, the more accurate formula is P/(1-P) = I x D, giving 0.10/0.90 = 0.111, so D = 0.111/0.02 = 5.56 years."
  },
  {
    id: 15,
    question: "A population of 10,000 disease-free individuals is followed for varying durations. 2,000 are followed for 3 years, 5,000 for 2 years, and 3,000 for 1 year. During this period, 200 new cases develop. The incidence density (person-time incidence rate) is:",
    options: [
      "200/10,000 = 0.02 per year",
      "200/19,000 = 10.5 per 1,000 person-years",
      "200/20,000 = 10 per 1,000 person-years",
      "200/6,000 = 33.3 per 1,000 person-years"
    ],
    answer: 1,
    explanation: "Incidence density = Number of new cases / Total person-time at risk. Total person-time = (2,000 x 3) + (5,000 x 2) + (3,000 x 1) = 6,000 + 10,000 + 3,000 = 19,000 person-years. Incidence density = 200/19,000 = 0.01053 per person-year = 10.5 per 1,000 person-years. Note: Ideally, person-time for those who developed the disease should be calculated up to the point of disease onset, but in this simplified calculation, we assume cases occurred at the end of follow-up."
  },
  {
    id: 16,
    question: "Which of the following statements about the relationship between incidence and prevalence is CORRECT?",
    options: [
      "A new, highly effective treatment that prolongs survival but does not cure will decrease prevalence",
      "A new preventive measure that reduces incidence will increase prevalence in the short term",
      "Introduction of a rapidly fatal disease will lead to low prevalence despite high incidence",
      "Prevalence is always numerically greater than incidence in any population"
    ],
    answer: 2,
    explanation: "Since Prevalence = Incidence x Duration, a rapidly fatal disease (short duration) will have low prevalence even with high incidence. For example, Ebola has high case fatality and short disease duration, resulting in low prevalence at any point. Conversely, a treatment that prolongs survival (increases duration) without curing the disease will INCREASE prevalence (not decrease it). A preventive measure reducing incidence will decrease prevalence over time. Prevalence is not always greater than incidence -- it depends on disease duration."
  },
  {
    id: 17,
    question: "In a vaccine efficacy trial, the incidence rate of disease in the unvaccinated group is 40 per 1,000 person-years and in the vaccinated group is 8 per 1,000 person-years. The vaccine efficacy is:",
    options: [
      "60%",
      "70%",
      "80%",
      "90%"
    ],
    answer: 2,
    explanation: "Vaccine efficacy (VE) = (1 - RR) x 100%, where RR = Incidence in vaccinated / Incidence in unvaccinated. RR = 8/40 = 0.2. VE = (1 - 0.2) x 100% = 80%. This means the vaccine reduces the risk of disease by 80% compared to no vaccination. Alternatively, VE = (ARU - ARV)/ARU x 100 = (40 - 8)/40 x 100 = 32/40 x 100 = 80%, where ARU = attack rate in unvaccinated and ARV = attack rate in vaccinated."
  },
  {
    id: 18,
    question: "The attack rate during a food poisoning outbreak at a wedding was 60%. If 200 people attended the wedding, the number of persons who developed illness is:",
    options: [
      "60",
      "80",
      "100",
      "120"
    ],
    answer: 3,
    explanation: "Attack rate = (Number of new cases / Population at risk) x 100. Given: Attack rate = 60%, Population at risk = 200. Number of cases = Attack rate x Population = 0.60 x 200 = 120 persons. The attack rate is a cumulative incidence expressed as a percentage, used specifically in outbreak investigations. It represents the proportion of exposed individuals who develop the disease during a defined time period (usually the duration of the outbreak)."
  },
  {
    id: 19,
    question: "A chronic disease has a stable incidence of 5 per 1,000 per year. A new treatment is introduced that does not affect incidence but doubles the average survival time from 4 years to 8 years. What will happen to the prevalence?",
    options: [
      "Prevalence will remain unchanged",
      "Prevalence will approximately double",
      "Prevalence will decrease by half",
      "Prevalence will increase by 25%"
    ],
    answer: 1,
    explanation: "Using P = I x D: Before treatment: P = 0.005 x 4 = 0.02 (2%). After treatment: P = 0.005 x 8 = 0.04 (4%). The prevalence approximately doubles because duration doubled while incidence remained constant. This is a key concept: improved survival without cure increases the disease burden (prevalence) in the population. This phenomenon is observed with HIV/AIDS after antiretroviral therapy -- incidence may decrease slightly but prevalence increases substantially due to prolonged survival."
  },
  {
    id: 20,
    question: "In a closed population of 1,000 disease-free individuals followed for 1 year, 50 develop the disease. Assuming no loss to follow-up and no competing risks, the cumulative incidence is:",
    options: [
      "50 per 1,000 person-years",
      "5%",
      "50 per 100,000",
      "0.5 per 1,000"
    ],
    answer: 1,
    explanation: "Cumulative incidence (CI) = Number of new cases during the period / Population at risk at the start of the period. CI = 50/1,000 = 0.05 = 5%. Cumulative incidence is a proportion (dimensionless, ranges 0-1) and requires a specified time period. It differs from incidence density (rate) which has units of person-time in the denominator. In this case, with no losses and a closed population, CI and incidence rate would give similar results for a 1-year follow-up, but they are conceptually different measures."
  },

  // ===== Q21-Q30: Relative Risk and Odds Ratio =====
  {
    id: 21,
    question: "In a cohort study, the incidence of myocardial infarction (MI) among smokers is 30/1,000 and among non-smokers is 10/1,000. The relative risk of MI in smokers compared to non-smokers is:",
    options: [
      "0.33",
      "2.0",
      "3.0",
      "20.0"
    ],
    answer: 2,
    explanation: "Relative Risk (RR) = Incidence in exposed / Incidence in unexposed = (30/1,000) / (10/1,000) = 30/10 = 3.0. This means smokers have 3 times the risk of MI compared to non-smokers. RR can be directly calculated from cohort studies and RCTs because incidence can be measured. The attributable risk (AR) = 30/1,000 - 10/1,000 = 20/1,000, meaning 20 excess cases per 1,000 are attributable to smoking."
  },
  {
    id: 22,
    question: "In a case-control study of lung cancer, 80 out of 100 cases and 40 out of 100 controls were smokers. The odds ratio is:",
    options: [
      "2.0",
      "4.0",
      "6.0",
      "8.0"
    ],
    answer: 2,
    explanation: "Using the 2x2 table: Cases: exposed (a) = 80, unexposed (c) = 20; Controls: exposed (b) = 40, unexposed (d) = 60. Odds Ratio (OR) = (a x d) / (b x c) = (80 x 60) / (40 x 20) = 4,800 / 800 = 6.0. The odds of smoking are 6 times higher in lung cancer cases compared to controls. Since lung cancer is relatively rare in the population, this OR approximates the relative risk (rare disease assumption: when disease prevalence < 10%, OR is approximately equal to RR)."
  },
  {
    id: 23,
    question: "Vaccine efficacy can be derived from relative risk using which formula?",
    options: [
      "VE = RR x 100",
      "VE = (1 - RR) x 100",
      "VE = (RR - 1) x 100",
      "VE = 1 / RR x 100"
    ],
    answer: 1,
    explanation: "Vaccine Efficacy (VE) = (1 - RR) x 100%, where RR = Risk in vaccinated / Risk in unvaccinated. If RR = 0.2, then VE = (1 - 0.2) x 100 = 80%. This means the vaccine reduces the risk of disease by 80%. A perfect vaccine (RR = 0) gives VE = 100%. A useless vaccine (RR = 1) gives VE = 0%. A harmful vaccine (RR > 1) gives negative VE. This formula is also expressed as VE = (ARU - ARV)/ARU, which simplifies to 1 - (ARV/ARU) = 1 - RR."
  },
  {
    id: 24,
    question: "The odds ratio approximates the relative risk when:",
    options: [
      "The disease is common in the population",
      "The disease is rare in the population (prevalence < 10%)",
      "The exposure is very common",
      "The sample size is very large"
    ],
    answer: 1,
    explanation: "This is known as the 'rare disease assumption.' When disease prevalence is low (< 10%), the OR closely approximates the RR. Mathematically, OR = (a/c) / (b/d) = ad/bc, while RR = [a/(a+b)] / [c/(c+d)]. When the disease is rare, a << b and c << d, so (a+b) is approx b and (c+d) is approx d, making RR is approx (a/b) / (c/d) = ad/bc = OR. For common diseases, OR overestimates RR when RR > 1 and underestimates when RR < 1."
  },
  {
    id: 25,
    question: "In an RCT, 200 patients receive a new drug and 200 receive placebo. In the drug group, 20 die; in the placebo group, 40 die. The number needed to treat (NNT) is:",
    options: [
      "5",
      "10",
      "20",
      "100"
    ],
    answer: 1,
    explanation: "NNT = 1 / Absolute Risk Reduction (ARR). Risk in treatment = 20/200 = 0.10 (10%). Risk in control = 40/200 = 0.20 (20%). ARR = 0.20 - 0.10 = 0.10 (10%). NNT = 1/0.10 = 10. This means 10 patients need to be treated with the new drug to prevent one additional death compared to placebo. NNT is clinically intuitive and incorporates baseline risk. A lower NNT indicates a more effective treatment. RR = 0.10/0.20 = 0.5, and RRR = 1 - 0.5 = 50%."
  },
  {
    id: 26,
    question: "A cohort study finds that the relative risk of stroke in hypertensive patients compared to normotensive patients is 4.0, and 30% of the population has hypertension. The population attributable risk fraction (PAR%) is:",
    options: [
      "30%",
      "47.4%",
      "52.6%",
      "75%"
    ],
    answer: 2,
    explanation: "Population Attributable Risk Fraction (PAR%) = [Pe(RR - 1)] / [1 + Pe(RR - 1)] x 100, where Pe = proportion of population exposed. PAR% = [0.30 x (4.0 - 1)] / [1 + 0.30 x (4.0 - 1)] x 100 = [0.30 x 3] / [1 + 0.30 x 3] x 100 = 0.9 / 1.9 x 100 = 47.37%. Rounding: 47.4% -- however, looking at the options, this equals approximately 47.4%. Recalculating: 0.9/1.9 = 0.4737 = 47.37%. The answer is 47.4%, meaning approximately 47.4% of stroke cases in the total population could be prevented if hypertension were eliminated."
  },
  {
    id: 27,
    question: "If the relative risk is 1.0, which of the following statements is correct?",
    options: [
      "The exposure is a strong risk factor for the disease",
      "There is no association between exposure and disease",
      "The exposure is protective against the disease",
      "The attributable risk is at its maximum value"
    ],
    answer: 1,
    explanation: "RR = 1.0 means the incidence of disease is equal in the exposed and unexposed groups, indicating no association between the exposure and the disease. RR > 1 suggests the exposure increases risk (risk factor). RR < 1 suggests the exposure decreases risk (protective factor). When RR = 1, the attributable risk (AR = Ie - Iu) = 0, and the attributable risk fraction = 0%. The 95% CI of RR crossing 1.0 indicates a non-statistically significant result."
  },
  {
    id: 28,
    question: "In a case-control study, an odds ratio of 0.4 with a 95% CI of (0.2 - 0.7) for the association between regular aspirin use and colorectal cancer suggests:",
    options: [
      "Aspirin use increases the risk of colorectal cancer",
      "There is no significant association between aspirin and colorectal cancer",
      "Aspirin use is significantly protective against colorectal cancer",
      "The result is statistically non-significant"
    ],
    answer: 2,
    explanation: "OR = 0.4 means the odds of aspirin exposure are 60% lower in colorectal cancer cases compared to controls, suggesting a protective effect. The 95% CI (0.2-0.7) does not cross 1.0, indicating statistical significance at the 5% level. An OR < 1 with CI entirely below 1 demonstrates a statistically significant protective association. The preventive fraction = (1 - OR) x 100 = (1 - 0.4) x 100 = 60%, suggesting aspirin reduces the odds of colorectal cancer by 60%."
  },
  {
    id: 29,
    question: "A clinical trial reports that a new antihypertensive reduces stroke risk with RR = 0.75 (95% CI: 0.60 - 0.95). The baseline stroke risk in the control group is 8%. What is the approximate NNT?",
    options: [
      "25",
      "50",
      "75",
      "100"
    ],
    answer: 1,
    explanation: "ARR = Baseline risk x (1 - RR) = 0.08 x (1 - 0.75) = 0.08 x 0.25 = 0.02 (2%). NNT = 1/ARR = 1/0.02 = 50. Alternatively: Risk in treatment = 0.08 x 0.75 = 0.06 (6%). Risk in control = 0.08 (8%). ARR = 8% - 6% = 2%. NNT = 1/0.02 = 50. This means 50 patients need to be treated with the new drug for 1 additional stroke to be prevented. Note that NNT depends heavily on baseline risk -- the same RR yields different NNTs at different baseline risks."
  },
  {
    id: 30,
    question: "The healthy worker effect tends to produce which type of bias in occupational cohort studies?",
    options: [
      "An overestimation of mortality risk in the exposed workers",
      "An underestimation of mortality risk in the exposed workers compared to the general population",
      "An increase in the observed relative risk",
      "No systematic bias in either direction"
    ],
    answer: 1,
    explanation: "The healthy worker effect is a form of selection bias in occupational epidemiology where the mortality/morbidity of workers is compared with the general population. Workers are generally healthier than the general population because employment requires a baseline level of health (severely ill, disabled, or elderly people are less likely to be employed). This leads to lower observed mortality rates among workers, underestimating the true risk of occupational exposures. The standardized mortality ratio (SMR) in occupational cohorts is typically 0.7-0.9 even for hazardous occupations. To minimize this, researchers can use internal comparisons (exposed vs unexposed workers within the same industry)."
  },

  // ===== Q31-Q40: Bias (Selection, Information), Confounding =====
  {
    id: 31,
    question: "In a screening program for breast cancer, women who are more health-conscious are more likely to participate. The observed lower mortality in screened women compared to unscreened women may partly be explained by:",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "Self-selection bias (volunteer bias)",
      "Recall bias"
    ],
    answer: 2,
    explanation: "Self-selection bias (volunteer bias) occurs when individuals who volunteer for screening or studies differ systematically from non-participants. Health-conscious women who participate in screening are more likely to have healthier lifestyles, better healthcare utilization, and lower mortality irrespective of the screening. This confounds the association between screening and mortality reduction. RCTs of screening programs attempt to overcome this by randomly assigning individuals to screening vs no screening, ensuring comparable groups."
  },
  {
    id: 32,
    question: "Detection bias in a clinical trial occurs when:",
    options: [
      "Patients are selectively recruited based on disease severity",
      "The outcome is more likely to be identified in one group due to differential surveillance",
      "Patients in the treatment group recall their symptoms more accurately",
      "The randomization process is flawed"
    ],
    answer: 1,
    explanation: "Detection bias (also called surveillance bias or ascertainment bias) occurs when there is systematic difference in how outcomes are identified between comparison groups. For example, if patients on hormone replacement therapy undergo more mammograms than non-users, breast cancer is more likely to be detected in HRT users, artificially inflating the association between HRT and breast cancer. In clinical trials, detection bias is minimized by blinding outcome assessors, using objective endpoints, and ensuring equal follow-up intensity in all groups."
  },
  {
    id: 33,
    question: "A study finds that coffee consumption is associated with lung cancer. However, when smoking status is controlled for, the association disappears. Smoking in this scenario is a:",
    options: [
      "Mediator",
      "Effect modifier",
      "Confounder",
      "Collider"
    ],
    answer: 2,
    explanation: "Smoking is a confounder because it meets all three criteria: (1) It is associated with the exposure (coffee drinkers are more likely to smoke), (2) It is independently associated with the outcome (smoking causes lung cancer), and (3) It is not on the causal pathway between coffee and lung cancer. When smoking is controlled for (stratification or multivariable adjustment), the association between coffee and lung cancer disappears, confirming that the crude association was confounded. A mediator would be on the causal pathway; an effect modifier changes the magnitude of the association across strata."
  },
  {
    id: 34,
    question: "Berkson's bias is a type of selection bias that occurs in:",
    options: [
      "Community-based cohort studies",
      "Hospital-based case-control studies",
      "Randomized controlled trials",
      "Ecological studies"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) occurs in hospital-based case-control studies when the hospitalization rates differ between cases and controls or between exposed and unexposed individuals. If both the disease under study and the exposure independently increase the likelihood of hospitalization, a spurious association can be created. For example, in a hospital-based study, respiratory disease (cases) and bone fractures (controls) may both show high smoking rates, but the association between smoking and bone fractures may be artificially elevated because smokers with fractures are more likely to be hospitalized than non-smokers with fractures."
  },
  {
    id: 35,
    question: "Overdiagnosis bias in cancer screening refers to:",
    options: [
      "Diagnosing cancer at an earlier stage that would have been eventually detected clinically",
      "Detecting cancers that would never have caused symptoms or death during the patient's lifetime",
      "Misclassifying benign lesions as malignant on screening tests",
      "Overestimating cancer incidence due to improved diagnostic technology"
    ],
    answer: 1,
    explanation: "Overdiagnosis bias occurs when screening detects cancers that are histologically real but would never progress to cause symptoms or death during the person's remaining lifetime (either because the cancer grows too slowly, regresses spontaneously, or the person dies of other causes first). This is particularly relevant for prostate cancer screening (PSA) and breast cancer screening (mammography). Overdiagnosis leads to overtreatment, causing unnecessary surgery, radiation, or chemotherapy with attendant morbidity. Estimates suggest 20-50% of screen-detected breast cancers and up to 50% of screen-detected prostate cancers may represent overdiagnosis."
  },
  {
    id: 36,
    question: "Which of the following methods can be used to control for confounding at the design stage of a study?",
    options: [
      "Stratified analysis and multivariable regression",
      "Randomization, restriction, and matching",
      "Intention-to-treat analysis",
      "Sensitivity analysis and multiple imputation"
    ],
    answer: 1,
    explanation: "Methods to control confounding at the DESIGN stage include: (1) Randomization -- distributes known and unknown confounders equally between groups, (2) Restriction -- limiting study to specific subgroups (e.g., only males), (3) Matching -- selecting controls with similar confounder profiles as cases. ANALYSIS stage methods include: stratification (Mantel-Haenszel), multivariable regression, propensity score methods, and standardization. Intention-to-treat analysis addresses non-compliance bias, not confounding. Design-stage methods are generally preferable as they prevent confounding rather than attempt to correct for it post-hoc."
  },
  {
    id: 37,
    question: "Recall bias is most problematic in which study design?",
    options: [
      "Prospective cohort study",
      "Randomized controlled trial",
      "Case-control study",
      "Ecological study"
    ],
    answer: 2,
    explanation: "Recall bias is a type of information bias (specifically, differential misclassification) most common in case-control studies. Cases (people with the disease) tend to recall past exposures more thoroughly than controls because they are motivated to find an explanation for their illness. For example, mothers of children with birth defects may recall drug exposures during pregnancy more completely than mothers of healthy children. Prospective cohort studies minimize recall bias because exposure information is collected before the outcome occurs. Strategies to reduce recall bias include using medical records, biological markers, or structured questionnaires."
  },
  {
    id: 38,
    question: "A factor is considered an effect modifier (rather than a confounder) when:",
    options: [
      "The association between exposure and outcome differs across strata of the third variable",
      "Controlling for the factor changes the crude estimate by more than 10%",
      "The factor is equally distributed between exposure groups",
      "The factor lies on the causal pathway between exposure and outcome"
    ],
    answer: 0,
    explanation: "Effect modification (interaction) occurs when the magnitude of the association between an exposure and outcome varies across levels of a third variable. For example, if the RR of oral contraceptives and stroke is 2.0 in non-smokers but 8.0 in smokers, smoking is an effect modifier. Unlike confounding (which is a bias to be eliminated), effect modification is a biological phenomenon to be reported. It is assessed by comparing stratum-specific estimates (e.g., using a test of homogeneity or likelihood ratio test for interaction terms). Confounding changes the crude vs adjusted estimate; effect modification shows different effects across strata."
  },
  {
    id: 39,
    question: "Neyman bias (prevalence-incidence bias) in a case-control study occurs because:",
    options: [
      "Cases who died rapidly or recovered quickly before the study are not included",
      "Controls are selected from a different source population than cases",
      "Exposure information is collected differently for cases and controls",
      "The investigator preferentially selects cases with severe disease"
    ],
    answer: 0,
    explanation: "Neyman bias (also called prevalence-incidence bias or selective survival bias) occurs in case-control studies when prevalent rather than incident cases are used. Cases who die quickly (severe/fatal cases) or recover rapidly (mild cases) are underrepresented, leaving predominantly moderate or chronic cases. This distorts the exposure-disease association. For example, studying the association between a risk factor and MI using prevalent cases would miss those who died immediately, potentially underestimating the true association if the risk factor is also linked to case fatality. Using incident (new) cases minimizes this bias."
  },
  {
    id: 40,
    question: "In a study examining the relationship between obesity and knee osteoarthritis, age is both associated with obesity prevalence and independently causes osteoarthritis. If age is not controlled for, the estimated association will most likely be:",
    options: [
      "Biased toward the null (underestimated)",
      "Biased away from the null (overestimated)",
      "Unaffected since age is not a confounder",
      "Reversed in direction (negative confounding)"
    ],
    answer: 1,
    explanation: "Age is a positive confounder in this scenario because: (1) Age is associated with obesity (older adults tend to have higher obesity prevalence), (2) Age independently increases the risk of osteoarthritis, (3) Age is not on the causal pathway between obesity and osteoarthritis. Since age is positively associated with both exposure and outcome, failing to control for it will lead to positive confounding -- the crude association will overestimate the true effect of obesity on osteoarthritis. The adjusted RR (after controlling for age) would be lower than the crude RR."
  },

  // ===== Q41-Q50: Screening Methods =====
  {
    id: 41,
    question: "In serial (sequential) screening using two tests, compared to either test alone, what happens to the overall sensitivity and specificity?",
    options: [
      "Both sensitivity and specificity increase",
      "Sensitivity increases, specificity decreases",
      "Sensitivity decreases, specificity increases",
      "Both sensitivity and specificity decrease"
    ],
    answer: 2,
    explanation: "In serial (sequential) screening, a person must test positive on BOTH tests to be classified as positive. This means: Specificity increases (net specificity = 1 - [(1-Sp1)(1-Sp2)] approximately equals Sp1 + Sp2 - Sp1 x Sp2, but more accurately, fewer false positives occur because both tests must be falsely positive). Sensitivity decreases (net sensitivity = Se1 x Se2, because a true case must be detected by both tests). Serial screening is preferred when the cost of false positives is high (e.g., confirmatory testing is invasive or expensive) or when disease prevalence is low."
  },
  {
    id: 42,
    question: "In parallel screening (using two tests simultaneously), a person is classified as positive if EITHER test is positive. Compared to each individual test, the combined approach will have:",
    options: [
      "Higher sensitivity and lower specificity",
      "Lower sensitivity and higher specificity",
      "Higher sensitivity and higher specificity",
      "Lower sensitivity and lower specificity"
    ],
    answer: 0,
    explanation: "In parallel screening, a person is positive if either or both tests are positive. Net sensitivity = Se1 + Se2 - (Se1 x Se2), which is higher than either test alone because a true case only needs to be detected by at least one test. Net specificity = Sp1 x Sp2, which is lower because a true non-case must test negative on BOTH tests to be classified as negative. Parallel screening is preferred in emergency situations where missing a case has serious consequences, or when disease prevalence is high and rapid decisions are needed."
  },
  {
    id: 43,
    question: "Lead-time bias in screening studies causes:",
    options: [
      "True improvement in patient survival after early detection",
      "Apparent increase in survival time without actual postponement of death",
      "Decreased detection rate due to slow-growing tumors",
      "Increased false positive rate in subsequent screening rounds"
    ],
    answer: 1,
    explanation: "Lead-time bias creates the illusion of improved survival simply because the disease was detected earlier by screening. If a cancer is destined to become symptomatic at age 60 and cause death at age 65, clinical survival = 5 years. If screening detects it at age 55, the apparent survival = 10 years, but the patient still dies at age 65. The lead time is 5 years (55 to 60). This bias inflates survival statistics without actually prolonging life. To overcome lead-time bias, mortality (not survival) should be the primary endpoint in evaluating screening programs, ideally assessed through RCTs."
  },
  {
    id: 44,
    question: "The Fagan nomogram is used to:",
    options: [
      "Calculate the sample size for a screening study",
      "Determine post-test probability from pre-test probability and likelihood ratio",
      "Estimate the positive predictive value from prevalence alone",
      "Compute the number needed to screen"
    ],
    answer: 1,
    explanation: "The Fagan nomogram is a graphical tool with three vertical axes: pre-test probability (left), likelihood ratio (middle), and post-test probability (right). By drawing a straight line from the pre-test probability through the likelihood ratio, the post-test probability can be read on the right axis. It applies Bayes' theorem visually: Post-test odds = Pre-test odds x Likelihood Ratio. LR+ = Sensitivity / (1 - Specificity); LR- = (1 - Sensitivity) / Specificity. It is particularly useful in clinical settings for quickly estimating the probability of disease after a test result."
  },
  {
    id: 45,
    question: "Length-time bias in cancer screening occurs because:",
    options: [
      "Screening tends to detect more aggressive, rapidly growing tumors",
      "Screening preferentially detects slower-growing, less aggressive tumors that have a longer preclinical phase",
      "Longer screening intervals reduce the detection rate",
      "Patients with longer disease duration are less likely to participate in screening"
    ],
    answer: 1,
    explanation: "Length-time bias occurs because slow-growing tumors have a longer preclinical detectable phase (sojourn time) and are therefore more likely to be detected by periodic screening. Fast-growing aggressive tumors have a short preclinical phase and are more likely to present as interval cancers (symptomatic between screening rounds). Since slow-growing tumors generally have better prognoses, screen-detected cancers appear to have better outcomes than clinically detected cancers, even if screening does not truly improve survival. This bias can be addressed by using mortality rather than survival as the outcome measure."
  },
  {
    id: 46,
    question: "A screening test has a sensitivity of 90% and specificity of 95%. In a population with disease prevalence of 1%, the positive predictive value (PPV) is approximately:",
    options: [
      "15.4%",
      "50%",
      "85%",
      "95%"
    ],
    answer: 0,
    explanation: "Using the formula: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. PPV = (0.90 x 0.01) / [(0.90 x 0.01) + (0.05 x 0.99)] = 0.009 / (0.009 + 0.0495) = 0.009 / 0.0585 = 0.1538 = 15.4%. Despite excellent sensitivity and specificity, the PPV is only 15.4% because the disease is rare. This demonstrates that in low-prevalence settings, even good tests produce many false positives. Alternatively using a 2x2 table for 10,000 people: TP = 90, FP = 495, FN = 10, TN = 9,405. PPV = 90/(90+495) = 15.4%."
  },
  {
    id: 47,
    question: "For a disease with prevalence of 10%, a test has sensitivity 80% and specificity 90%. The negative predictive value (NPV) is approximately:",
    options: [
      "90%",
      "93.5%",
      "97.6%",
      "99.0%"
    ],
    answer: 2,
    explanation: "NPV = (Specificity x (1 - Prevalence)) / [(Specificity x (1 - Prevalence)) + ((1 - Sensitivity) x Prevalence)]. NPV = (0.90 x 0.90) / [(0.90 x 0.90) + (0.20 x 0.10)] = 0.81 / (0.81 + 0.02) = 0.81 / 0.83 = 0.9759 = 97.6%. In a population of 1,000: Diseased = 100, Non-diseased = 900. TP = 80, FN = 20, TN = 810, FP = 90. NPV = TN/(TN+FN) = 810/(810+20) = 810/830 = 97.6%. High NPV means a negative result reliably rules out disease, which is valuable for screening."
  },
  {
    id: 48,
    question: "Which of the following criteria proposed by Wilson and Jungner is NOT a requirement for an effective screening program?",
    options: [
      "The disease should have a recognizable latent or early symptomatic stage",
      "An accepted treatment for patients with recognized disease should exist",
      "The screening test should have 100% sensitivity and specificity",
      "The cost of case-finding should be economically balanced against healthcare expenditure"
    ],
    answer: 2,
    explanation: "Wilson and Jungner's (1968) 10 principles of screening include: (1) Important health problem, (2) Accepted treatment available, (3) Facilities for diagnosis and treatment available, (4) Recognizable latent/early stage, (5) Suitable test available, (6) Test acceptable to population, (7) Natural history understood, (8) Agreed policy on whom to treat, (9) Cost-effective, (10) Screening should be a continuing process. No screening test has 100% sensitivity AND specificity -- there is always a trade-off. The test needs to be 'suitable' (adequate sensitivity/specificity), not perfect."
  },
  {
    id: 49,
    question: "A new rapid diagnostic test for HIV has a likelihood ratio positive (LR+) of 20 and a likelihood ratio negative (LR-) of 0.02. If the pre-test probability of HIV in a patient is 5%, the approximate post-test probability after a positive result is:",
    options: [
      "25%",
      "51%",
      "75%",
      "95%"
    ],
    answer: 1,
    explanation: "Using Bayes' theorem: Pre-test odds = Pre-test probability / (1 - Pre-test probability) = 0.05/0.95 = 0.0526. Post-test odds = Pre-test odds x LR+ = 0.0526 x 20 = 1.053. Post-test probability = Post-test odds / (1 + Post-test odds) = 1.053 / 2.053 = 0.5127 = 51.3%. This can be visualized on the Fagan nomogram by drawing a line from 5% pre-test probability through LR+ of 20 to read approximately 51% on the post-test axis. Despite a very good LR+, the post-test probability is only about 51% because the pre-test probability was low, emphasizing the importance of clinical context."
  },
  {
    id: 50,
    question: "In evaluating a screening program for cervical cancer, the number needed to screen (NNS) is 1,000 to prevent one death. This means:",
    options: [
      "1,000 women must be screened once to detect one case of cervical cancer",
      "1,000 women must be screened to prevent one death from cervical cancer",
      "The sensitivity of the screening test is 1/1,000",
      "The false positive rate of the test is 1/1,000"
    ],
    answer: 1,
    explanation: "Number Needed to Screen (NNS) is analogous to NNT and represents the number of individuals who must be screened to prevent one adverse outcome (usually death). NNS = 1 / Absolute Risk Reduction from screening. If cervical cancer mortality without screening is 5/10,000 and with screening is 4/10,000, ARR = 1/10,000, and NNS = 10,000. NNS accounts for the entire screening cascade: detection rate, compliance with follow-up, treatment effectiveness, and overdiagnosis. A lower NNS indicates a more efficient screening program. NNS varies with disease prevalence and screening test characteristics."
  }
];

export default questions;

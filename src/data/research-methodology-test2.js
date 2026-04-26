const questions = [
  // ===== Q1-Q10: Types of Study Designs - Cohort, Case-Control, RCT =====
  {
    id: 1,
    question: "A researcher follows 5,000 smokers and 5,000 non-smokers over 20 years to compare the incidence of lung cancer in both groups. What type of study design is this?",
    options: [
      "Prospective cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Randomized controlled trial"
    ],
    answer: 0,
    explanation: "This is a prospective cohort study because participants are classified by exposure status (smokers vs non-smokers) at baseline and followed forward in time to observe the outcome (lung cancer). The key feature is that the study starts with exposure and moves toward disease."
  },
  {
    id: 2,
    question: "In a study, 200 patients with hepatocellular carcinoma and 200 controls without liver cancer are recruited. Their past history of hepatitis B infection is compared. This study design is best described as:",
    options: [
      "Cohort study",
      "Case-control study",
      "Randomized controlled trial",
      "Ecological study"
    ],
    answer: 1,
    explanation: "This is a case-control study because it starts with the outcome (hepatocellular carcinoma = cases, no cancer = controls) and looks backward to assess past exposure (hepatitis B infection). Case-control studies go from disease to exposure."
  },
  {
    id: 3,
    question: "Which of the following is the gold standard study design for establishing a causal relationship between a new drug and a clinical outcome?",
    options: [
      "Prospective cohort study",
      "Case-control study",
      "Randomized controlled trial (RCT)",
      "Cross-sectional study"
    ],
    answer: 2,
    explanation: "The RCT is the gold standard for establishing causality because randomization eliminates both known and unknown confounders, ensuring that any observed difference in outcome can be attributed to the intervention. It provides the highest level of evidence (Level I) in the hierarchy of evidence."
  },
  {
    id: 4,
    question: "A hospital-based study collects data on 150 children with acute lymphoblastic leukemia and 150 age-matched healthy children to evaluate whether prenatal X-ray exposure is associated with childhood leukemia. The measure of association most appropriately calculated from this study is:",
    options: [
      "Relative risk",
      "Odds ratio",
      "Attributable risk",
      "Incidence rate"
    ],
    answer: 1,
    explanation: "In a case-control study, the odds ratio (OR) is the appropriate measure of association because the incidence of disease cannot be directly calculated (since cases and controls are selected based on disease status, not exposure). Relative risk can only be directly calculated in cohort studies or RCTs."
  },
  {
    id: 5,
    question: "In a double-blind RCT comparing a new antihypertensive drug with placebo, 'double-blind' means:",
    options: [
      "Neither the patient nor the investigator knows the treatment allocation",
      "Neither the statistician nor the patient knows the treatment allocation",
      "Neither the investigator nor the sponsor knows the treatment allocation",
      "Neither the patient nor the pharmacist knows the treatment allocation"
    ],
    answer: 0,
    explanation: "In a double-blind RCT, both the participant (patient) and the investigator (researcher assessing outcomes) are unaware of the treatment allocation. This minimizes both placebo effect in patients and observer bias in investigators, ensuring the most unbiased assessment of the intervention."
  },
  {
    id: 6,
    question: "A researcher uses data from the National Family Health Survey (NFHS) to study the association between maternal education and child malnutrition at a single point in time. This is an example of:",
    options: [
      "Cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Ecological study"
    ],
    answer: 2,
    explanation: "This is a cross-sectional study because exposure (maternal education) and outcome (child malnutrition) are assessed simultaneously at a single point in time. Cross-sectional studies measure prevalence and can identify associations but cannot establish temporal relationship or causality."
  },
  {
    id: 7,
    question: "In a retrospective cohort study on occupational asbestos exposure and mesothelioma, which of the following is a major advantage over a case-control study?",
    options: [
      "It is cheaper and faster to conduct",
      "Incidence rates can be directly calculated",
      "It requires a smaller sample size",
      "Recall bias is greater, improving accuracy"
    ],
    answer: 1,
    explanation: "A major advantage of cohort studies (including retrospective cohort studies) over case-control studies is that incidence rates can be directly calculated because the study follows a defined population over time. This also allows direct calculation of relative risk and attributable risk, which is not possible in case-control studies."
  },
  {
    id: 8,
    question: "In an RCT, intention-to-treat (ITT) analysis means:",
    options: [
      "Only patients who completed the treatment are analyzed",
      "All randomized patients are analyzed in their originally assigned groups regardless of compliance",
      "Patients are analyzed based on the treatment they actually received",
      "Only patients who showed improvement are included in the analysis"
    ],
    answer: 1,
    explanation: "Intention-to-treat (ITT) analysis includes all randomized participants in the groups to which they were originally assigned, regardless of whether they completed the treatment, crossed over, or dropped out. ITT preserves the benefits of randomization and provides an unbiased estimate of treatment effect in real-world conditions."
  },
  {
    id: 9,
    question: "A nested case-control study is conducted within a large cohort of 50,000 healthcare workers followed for HIV seroconversion. Cases who seroconverted are matched with controls from the same cohort. The primary advantage of this design is:",
    options: [
      "It eliminates all forms of bias",
      "It is more efficient than analyzing the entire cohort while using pre-collected exposure data",
      "It provides higher level of evidence than an RCT",
      "It allows calculation of incidence but not odds ratio"
    ],
    answer: 1,
    explanation: "A nested case-control study is conducted within an ongoing cohort study. Its primary advantage is efficiency: it uses pre-collected exposure data from the cohort, reducing cost and time while minimizing recall bias (since exposure data was collected before disease occurrence). It combines the strengths of both cohort and case-control designs."
  },
  {
    id: 10,
    question: "In a crossover RCT design for comparing two analgesic drugs, each patient receives both Drug A and Drug B in a random sequence with a washout period between them. The main advantage of this design is:",
    options: [
      "It eliminates the need for a control group",
      "Each patient serves as their own control, reducing inter-individual variability",
      "It is the best design for studying acute diseases",
      "The washout period eliminates all carryover effects completely"
    ],
    answer: 1,
    explanation: "In a crossover trial, each participant receives both treatments sequentially, acting as their own control. This eliminates inter-individual variability (differences between patients), thereby increasing statistical power and requiring a smaller sample size. The washout period helps minimize (but may not completely eliminate) carryover effects from the first treatment."
  },

  // ===== Q11-Q20: Incidence and Prevalence =====
  {
    id: 11,
    question: "In a community of 10,000 people, 200 have diabetes at the beginning of the year. During the year, 50 new cases of diabetes are diagnosed. The incidence rate of diabetes for that year is:",
    options: [
      "50/10,000 = 0.5%",
      "50/9,800 = 0.51%",
      "250/10,000 = 2.5%",
      "200/10,000 = 2.0%"
    ],
    answer: 1,
    explanation: "Incidence rate = Number of new cases / Population at risk during the time period. The population at risk excludes those who already have the disease. So: 50 / (10,000 - 200) = 50/9,800 = 0.0051 or 0.51%. The 200 existing cases are not at risk of developing new diabetes."
  },
  {
    id: 12,
    question: "A survey finds that 500 out of 25,000 adults in a city currently have active tuberculosis. The point prevalence of tuberculosis is:",
    options: [
      "500/25,000 = 2%",
      "500/24,500 = 2.04%",
      "25,000/500 = 50",
      "500/25,500 = 1.96%"
    ],
    answer: 0,
    explanation: "Point prevalence = Number of existing cases at a point in time / Total population at that point in time = 500/25,000 = 0.02 or 2%. Unlike incidence, prevalence includes all existing cases (both old and new) and the denominator is the total population, not just the population at risk."
  },
  {
    id: 13,
    question: "The relationship between prevalence (P), incidence (I), and average duration of disease (D) in a stable population is expressed as:",
    options: [
      "P = I + D",
      "P = I x D (when prevalence is low)",
      "P = I / D",
      "P = D / I"
    ],
    answer: 1,
    explanation: "The relationship is P = I x D (when prevalence is low, typically < 10%). This means prevalence depends on both how frequently new cases occur (incidence) and how long the disease lasts (duration). For a disease with high incidence but short duration (e.g., common cold), prevalence may be low. For a disease with low incidence but long duration (e.g., diabetes), prevalence will be relatively high."
  },
  {
    id: 14,
    question: "In a cohort of 1,000 women followed for breast cancer, 20 women developed breast cancer over 5 years. If 50 women were lost to follow-up at the end of 2 years, what is the person-years of observation (assuming the remaining 930 were followed for the full 5 years)?",
    options: [
      "5,000 person-years",
      "4,750 person-years",
      "4,850 person-years",
      "4,650 person-years"
    ],
    answer: 2,
    explanation: "Person-years = (930 women x 5 years) + (50 women x 2 years) + (20 women x average follow-up). Assuming the 50 lost contributed 2 years each = 100 person-years. The 930 remaining (1000 - 50 - 20) contributed 5 years each = 4,650. The 20 cases contributed on average 2.5 years = 50. Total = 4,650 + 100 + 50 = 4,800. However, simplified: 930 x 5 = 4,650 and 50 x 2 = 100 and 20 x 5 = 100 (if cases counted fully) = 4,850. The answer uses the convention that cases and losses contribute their full observed time: (1000-50) x 5 + 50 x 2 = 4,750 + 100 = 4,850 person-years."
  },
  {
    id: 15,
    question: "A new rapid-acting antibiotic reduces the average duration of a bacterial infection from 14 days to 7 days. Assuming the incidence remains unchanged, the prevalence of this infection will:",
    options: [
      "Double",
      "Remain unchanged",
      "Decrease by half",
      "Increase by half"
    ],
    answer: 2,
    explanation: "Using the relationship P = I x D, if incidence (I) remains constant and duration (D) is halved (from 14 to 7 days), then prevalence (P) will also be halved. Effective treatments that shorten disease duration reduce prevalence even without affecting incidence. Conversely, treatments that prolong life without curing disease (e.g., antiretrovirals for HIV) increase prevalence."
  },
  {
    id: 16,
    question: "In a vaccination trial, 10,000 unvaccinated children are followed for 1 year. During this period, 100 develop measles. The cumulative incidence of measles in the unvaccinated group is:",
    options: [
      "100 per 1,000 per year",
      "10 per 1,000 per year",
      "1 per 1,000 per year",
      "100 per 10,000 per 5 years"
    ],
    answer: 1,
    explanation: "Cumulative incidence (attack rate) = Number of new cases / Population at risk at the start of the period = 100/10,000 = 0.01 or 10 per 1,000 per year. Cumulative incidence is a proportion (dimensionless) but must always be reported with the time period over which it was measured."
  },
  {
    id: 17,
    question: "Which of the following diseases is best measured using incidence rather than prevalence?",
    options: [
      "Diabetes mellitus",
      "Hypertension",
      "Acute myocardial infarction",
      "Chronic kidney disease"
    ],
    answer: 2,
    explanation: "Acute myocardial infarction (MI) is best measured using incidence because it is an acute event with a definite onset. Prevalence is more appropriate for chronic diseases (diabetes, hypertension, CKD) that persist over long periods. For acute diseases with short duration or high case fatality, prevalence underestimates the disease burden, making incidence the more informative measure."
  },
  {
    id: 18,
    question: "In a hospital, 50 patients out of 500 admitted in a month develop hospital-acquired infections. This measure is called:",
    options: [
      "Point prevalence",
      "Period prevalence",
      "Incidence rate",
      "Attack rate (cumulative incidence)"
    ],
    answer: 3,
    explanation: "This is an attack rate (cumulative incidence) because it measures the proportion of a defined population (500 admissions) that develops the disease (hospital-acquired infection) over a specific period (one month). Attack rate is commonly used for outbreaks and institutional settings. It equals: New cases / Population at risk = 50/500 = 10%."
  },
  {
    id: 19,
    question: "The prevalence of HIV in Country A is 5% and in Country B is 1%. If the incidence of HIV is the same in both countries, the most likely explanation for the difference in prevalence is:",
    options: [
      "Country A has a larger population",
      "Country A has better HIV treatment leading to longer survival",
      "Country B has more testing facilities",
      "Country A has fewer risk factors"
    ],
    answer: 1,
    explanation: "Since P = I x D, and incidence (I) is the same in both countries, the higher prevalence in Country A must be due to longer duration (D) of the disease. Better antiretroviral treatment improves survival and prolongs life with HIV, thereby increasing duration and consequently prevalence. This demonstrates why prevalence alone cannot be used to judge the effectiveness of prevention programs."
  },
  {
    id: 20,
    question: "A cohort of 2,000 factory workers is followed for 10 years. During this period, 40 develop occupational asthma. The incidence density is calculated as 40 events over 18,000 person-years of follow-up. The incidence density is:",
    options: [
      "2.0 per 1,000 person-years",
      "2.2 per 1,000 person-years",
      "4.0 per 1,000 person-years",
      "20 per 1,000 person-years"
    ],
    answer: 1,
    explanation: "Incidence density (incidence rate) = Number of new cases / Total person-years of observation = 40/18,000 = 0.00222 per person-year = 2.2 per 1,000 person-years. Incidence density accounts for variable follow-up times and is expressed as events per person-time. It is the preferred measure when subjects have different lengths of follow-up."
  },

  // ===== Q21-Q30: Relative Risk and Odds Ratio =====
  {
    id: 21,
    question: "In a cohort study, the incidence of lung cancer among smokers is 90 per 100,000 per year and among non-smokers is 10 per 100,000 per year. The relative risk of lung cancer for smokers compared to non-smokers is:",
    options: [
      "80",
      "9",
      "0.11",
      "900"
    ],
    answer: 1,
    explanation: "Relative Risk (RR) = Incidence in exposed / Incidence in unexposed = 90/10 = 9. This means smokers have 9 times the risk of developing lung cancer compared to non-smokers. RR > 1 indicates increased risk with exposure, RR = 1 means no association, and RR < 1 indicates a protective effect."
  },
  {
    id: 22,
    question: "In a case-control study of oral contraceptive (OCP) use and deep vein thrombosis (DVT), the data are: Cases with DVT: 40 used OCPs, 60 did not. Controls without DVT: 20 used OCPs, 80 did not. The odds ratio is:",
    options: [
      "2.67",
      "0.38",
      "1.50",
      "3.00"
    ],
    answer: 0,
    explanation: "Odds Ratio (OR) = (a x d) / (b x c), where a = exposed cases (40), b = unexposed cases (60), c = exposed controls (20), d = unexposed controls (80). OR = (40 x 80) / (60 x 20) = 3,200/1,200 = 2.67. This means the odds of OCP use among DVT cases are 2.67 times the odds among controls, suggesting OCP use is associated with increased risk of DVT."
  },
  {
    id: 23,
    question: "A cohort study yields a relative risk of 1.0 for the association between coffee consumption and pancreatic cancer. This means:",
    options: [
      "Coffee consumption doubles the risk of pancreatic cancer",
      "Coffee consumption reduces the risk of pancreatic cancer",
      "There is no association between coffee consumption and pancreatic cancer",
      "Coffee consumption is a confounding factor"
    ],
    answer: 2,
    explanation: "A relative risk (RR) of 1.0 means the incidence in the exposed group equals the incidence in the unexposed group, indicating no association between the exposure and the outcome. RR > 1 suggests a positive association (increased risk), RR < 1 suggests a negative association (protective effect), and RR = 1 indicates no association."
  },
  {
    id: 24,
    question: "In a cohort study on alcohol consumption and liver cirrhosis: Heavy drinkers: 50 developed cirrhosis out of 500. Non-drinkers: 10 developed cirrhosis out of 500. The attributable risk (risk difference) is:",
    options: [
      "80 per 1,000",
      "100 per 1,000",
      "5 per 1,000",
      "90 per 1,000"
    ],
    answer: 0,
    explanation: "Attributable Risk (AR) = Incidence in exposed - Incidence in unexposed. Incidence in heavy drinkers = 50/500 = 100 per 1,000. Incidence in non-drinkers = 10/500 = 20 per 1,000. AR = 100 - 20 = 80 per 1,000. This means 80 out of every 1,000 heavy drinkers developed cirrhosis that is attributable specifically to their alcohol consumption."
  },
  {
    id: 25,
    question: "If the odds ratio for the association between asbestos exposure and mesothelioma is 15.0 with a 95% confidence interval of 8.2 to 27.4, the correct interpretation is:",
    options: [
      "The result is not statistically significant because the CI is wide",
      "The odds of mesothelioma are 15 times higher in asbestos-exposed individuals, and the result is statistically significant",
      "The relative risk is exactly 15.0",
      "Asbestos causes mesothelioma in 15% of exposed individuals"
    ],
    answer: 1,
    explanation: "The OR of 15.0 means the odds of mesothelioma are 15 times higher in asbestos-exposed individuals compared to unexposed. The 95% CI (8.2-27.4) does not include 1.0, which means the result is statistically significant at the 5% level (p < 0.05). A wide CI indicates less precision but does not negate statistical significance if 1.0 is not included."
  },
  {
    id: 26,
    question: "In a rare disease, the odds ratio from a case-control study closely approximates the relative risk. This principle is known as:",
    options: [
      "Berkson's bias",
      "The rare disease assumption",
      "Simpson's paradox",
      "The healthy worker effect"
    ],
    answer: 1,
    explanation: "The rare disease assumption states that when the prevalence of disease is low (typically < 10%), the odds ratio (OR) closely approximates the relative risk (RR). Mathematically, OR = [a(d)] / [b(c)] approximates RR = [a/(a+b)] / [c/(c+d)] when a << b and c << d (i.e., the number of cases is much smaller than non-cases). This is why OR from case-control studies is often interpreted as RR for rare diseases."
  },
  {
    id: 27,
    question: "A vaccine trial shows that the incidence of influenza is 5% in the vaccinated group and 20% in the unvaccinated group. The vaccine efficacy is:",
    options: [
      "25%",
      "50%",
      "75%",
      "15%"
    ],
    answer: 2,
    explanation: "Vaccine Efficacy (VE) = [(Incidence in unvaccinated - Incidence in vaccinated) / Incidence in unvaccinated] x 100 = [(20% - 5%) / 20%] x 100 = (15/20) x 100 = 75%. Alternatively, VE = (1 - RR) x 100 = (1 - 5/20) x 100 = (1 - 0.25) x 100 = 75%. This means the vaccine reduces the risk of influenza by 75% compared to no vaccination."
  },
  {
    id: 28,
    question: "The population attributable risk percent (PAR%) for smoking and lung cancer is 85%. This means:",
    options: [
      "85% of smokers will develop lung cancer",
      "85% of all lung cancer cases in the population can be attributed to smoking",
      "Smoking increases the risk of lung cancer by 85%",
      "85% of the population smokes"
    ],
    answer: 1,
    explanation: "Population Attributable Risk Percent (PAR%) represents the proportion of disease in the entire population that is attributable to the exposure. PAR% = [Pe(RR-1) / (1 + Pe(RR-1))] x 100, where Pe is the prevalence of exposure. A PAR% of 85% means that 85% of all lung cancer cases in the population could theoretically be prevented if smoking were eliminated."
  },
  {
    id: 29,
    question: "In a cohort study, 2x2 table data shows: Exposed with disease (a) = 30, Exposed without disease (b) = 170, Unexposed with disease (c) = 10, Unexposed without disease (d) = 290. The relative risk is:",
    options: [
      "5.1",
      "3.0",
      "4.5",
      "2.0"
    ],
    answer: 2,
    explanation: "Relative Risk (RR) = [a/(a+b)] / [c/(c+d)] = [30/(30+170)] / [10/(10+290)] = [30/200] / [10/300] = 0.15 / 0.0333 = 4.5. The incidence in the exposed group is 15% and in the unexposed group is 3.33%. Therefore, the exposed group has 4.5 times the risk of disease compared to the unexposed group."
  },
  {
    id: 30,
    question: "The Number Needed to Treat (NNT) is derived from the absolute risk reduction (ARR). If a new statin reduces cardiovascular events from 8% (placebo) to 5% (treatment group), the NNT is:",
    options: [
      "33",
      "20",
      "25",
      "100"
    ],
    answer: 0,
    explanation: "ARR = Control event rate - Treatment event rate = 8% - 5% = 3% = 0.03. NNT = 1/ARR = 1/0.03 = 33.3, rounded to 33. This means 33 patients need to be treated with the statin to prevent one additional cardiovascular event. NNT is a clinically useful measure that translates relative benefits into absolute terms for clinical decision-making."
  },

  // ===== Q31-Q40: Bias (Selection, Information) and Confounding =====
  {
    id: 31,
    question: "A case-control study on the association between mobile phone use and brain tumors recruits cases from a neurosurgery center and controls from the general population. Cases are more likely to recall their phone usage in detail. This type of bias is called:",
    options: [
      "Selection bias",
      "Recall bias",
      "Lead-time bias",
      "Berkson's bias"
    ],
    answer: 1,
    explanation: "Recall bias is a type of information bias where cases (who have the disease) systematically recall past exposures differently (usually more thoroughly) than controls. Patients with brain tumors are more likely to carefully recall and report mobile phone use compared to healthy controls. This differential misclassification of exposure tends to overestimate the association (inflate the OR)."
  },
  {
    id: 32,
    question: "In a hospital-based case-control study, both cases (myocardial infarction) and controls (fracture patients) are recruited from the same hospital. Controls with fractures have higher smoking rates than the general population. This is an example of:",
    options: [
      "Recall bias",
      "Berkson's bias (admission rate bias)",
      "Hawthorne effect",
      "Neyman bias"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) occurs in hospital-based studies when the exposure-disease relationship in hospital patients differs from that in the general population. Hospital controls may not be representative of the source population because hospitalized patients may have different exposure patterns. Here, fracture patients (controls) may have higher smoking rates due to alcohol/smoking-related accidents, distorting the true association."
  },
  {
    id: 33,
    question: "A study finds that coffee drinking is associated with lung cancer. However, after adjusting for smoking, the association disappears. Smoking in this scenario is a:",
    options: [
      "Effect modifier",
      "Confounder",
      "Mediator",
      "Collider"
    ],
    answer: 1,
    explanation: "Smoking is a confounder because it satisfies all three criteria for confounding: (1) It is associated with the exposure (coffee drinkers tend to smoke more), (2) It is independently associated with the outcome (smoking causes lung cancer), and (3) It is not on the causal pathway between coffee and lung cancer. When the effect disappears after adjustment, it confirms that the crude association was due to confounding."
  },
  {
    id: 34,
    question: "In a screening program for breast cancer, women who voluntarily participate are found to have better survival than non-participants. This may be due to:",
    options: [
      "Selection bias (volunteer/self-selection bias)",
      "Information bias",
      "Confounding by age",
      "Attrition bias"
    ],
    answer: 0,
    explanation: "This is volunteer bias (a type of selection bias) where individuals who voluntarily participate in screening programs tend to be healthier, more health-conscious, and of higher socioeconomic status than non-participants. This self-selection creates a systematic difference between participants and non-participants, making screening appear more effective than it actually is."
  },
  {
    id: 35,
    question: "In a study examining the effect of a new chemotherapy regimen, patients lost to follow-up tend to be sicker and more likely to have died. The analysis of only surviving patients will lead to:",
    options: [
      "Overestimation of treatment benefit (survival bias)",
      "Underestimation of treatment benefit",
      "No effect on the results",
      "Increased external validity"
    ],
    answer: 0,
    explanation: "This is survival bias (a type of selection bias/attrition bias). When sicker patients who are more likely to die are lost to follow-up, the remaining study population is biased toward healthier survivors. Analyzing only these survivors overestimates the treatment benefit because the worst outcomes are excluded from the analysis. This is why intention-to-treat analysis is preferred in RCTs."
  },
  {
    id: 36,
    question: "A screening study for cervical cancer detects cases earlier in their disease course, making it appear that screened women survive longer from diagnosis. However, the actual time of death is unchanged. This is an example of:",
    options: [
      "Length-time bias",
      "Lead-time bias",
      "Selection bias",
      "Misclassification bias"
    ],
    answer: 1,
    explanation: "Lead-time bias occurs when screening detects disease earlier in its natural history, artificially prolonging the apparent survival time from diagnosis without actually postponing death. The 'lead time' is the interval between screen detection and when the disease would have been clinically diagnosed. To avoid this bias, mortality rates (not survival times) should be compared between screened and unscreened groups."
  },
  {
    id: 37,
    question: "A study of occupational exposure to a chemical classifies exposure based on job title rather than actual chemical measurements. Some workers classified as 'exposed' may not have had significant exposure, and vice versa. This leads to:",
    options: [
      "Non-differential misclassification bias",
      "Differential misclassification bias",
      "Confounding",
      "Selection bias"
    ],
    answer: 0,
    explanation: "Non-differential misclassification occurs when the error in classifying exposure is the same for both cases and controls (or diseased and non-diseased). Using job title as a proxy for chemical exposure misclassifies some truly exposed as unexposed and vice versa, equally in both groups. Non-differential misclassification of a binary exposure generally biases the estimate of association toward the null (OR or RR toward 1.0)."
  },
  {
    id: 38,
    question: "Which of the following methods can control for confounding at the design stage of a study?",
    options: [
      "Stratified analysis and logistic regression",
      "Randomization, restriction, and matching",
      "Sensitivity analysis and meta-analysis",
      "Blinding and allocation concealment"
    ],
    answer: 1,
    explanation: "At the design stage, confounding can be controlled by: (1) Randomization - distributes confounders equally (both known and unknown), (2) Restriction - limiting study to a specific category of the confounder (e.g., only studying males), (3) Matching - selecting controls with the same values of the confounder as cases. Stratification and multivariate analysis (logistic regression) are analysis-stage methods for controlling confounding."
  },
  {
    id: 39,
    question: "In a clinical trial of a new analgesic, patients who know they are receiving the active drug report more pain relief than those who know they are receiving placebo. This difference in outcome reporting is called:",
    options: [
      "Observer bias",
      "Subject/participant bias (placebo effect)",
      "Reporting bias",
      "Ecological fallacy"
    ],
    answer: 1,
    explanation: "Subject/participant bias (placebo effect) occurs when patients who know their treatment allocation respond differently based on their expectations. Patients aware they are receiving the active drug may report more improvement due to psychological expectation. This is why blinding (masking) of participants is essential in RCTs. The use of an identical-appearing placebo helps prevent this bias."
  },
  {
    id: 40,
    question: "In a study of the association between alcohol consumption and esophageal cancer, age is both associated with alcohol consumption and is an independent risk factor for esophageal cancer. After stratifying by age, the association between alcohol and esophageal cancer is present within each age stratum. The correct interpretation is:",
    options: [
      "Age is a confounder and must be controlled for; the adjusted estimate is valid",
      "Age is an effect modifier and should not be controlled for",
      "The study has selection bias",
      "The association is due to chance"
    ],
    answer: 0,
    explanation: "Age is a confounder here because: (1) it is associated with alcohol consumption, (2) it is independently associated with esophageal cancer, and (3) it is not in the causal pathway. When the stratum-specific estimates are similar (homogeneous) and the association persists within each stratum after stratification, it confirms that age is a confounder and the adjusted (stratified) estimate provides the true measure of association. If the stratum-specific estimates differed substantially, that would suggest effect modification."
  },

  // ===== Q41-Q50: Screening Methods =====
  {
    id: 41,
    question: "A new screening test for colorectal cancer is evaluated. Out of 200 patients with confirmed cancer, 180 test positive. Out of 800 patients without cancer, 720 test negative. The sensitivity of the test is:",
    options: [
      "90%",
      "80%",
      "72%",
      "69.2%"
    ],
    answer: 0,
    explanation: "Sensitivity = True Positives / (True Positives + False Negatives) = TP / (TP + FN) = 180 / (180 + 20) = 180/200 = 90%. Sensitivity is the ability of the test to correctly identify those who have the disease (true positive rate). A highly sensitive test is useful for ruling OUT a disease (SnNOut - Sensitive test, Negative result, Rules Out)."
  },
  {
    id: 42,
    question: "Using the same data as above (TP=180, FP=80, FN=20, TN=720), the specificity of the test is:",
    options: [
      "90%",
      "80%",
      "72%",
      "69.2%"
    ],
    answer: 0,
    explanation: "Specificity = True Negatives / (True Negatives + False Positives) = TN / (TN + FP) = 720 / (720 + 80) = 720/800 = 90%. Specificity is the ability of the test to correctly identify those who do not have the disease (true negative rate). A highly specific test is useful for ruling IN a disease (SpPIn - Specific test, Positive result, Rules In)."
  },
  {
    id: 43,
    question: "A screening test has a sensitivity of 95% and specificity of 90%. If the prevalence of the disease in the population is 1%, what is the approximate positive predictive value (PPV)?",
    options: [
      "8.8%",
      "50%",
      "95%",
      "90%"
    ],
    answer: 0,
    explanation: "Using a hypothetical population of 10,000: Diseased = 100 (1% prevalence), Non-diseased = 9,900. TP = 100 x 0.95 = 95, FP = 9,900 x 0.10 = 990, FN = 5, TN = 8,910. PPV = TP/(TP+FP) = 95/(95+990) = 95/1,085 = 8.8%. Even with excellent sensitivity and specificity, when disease prevalence is very low, the PPV is poor because most positive results are false positives. This is a critical concept in screening low-prevalence populations."
  },
  {
    id: 44,
    question: "Which of the following criteria is NOT one of Wilson and Jungner's criteria for a screening program?",
    options: [
      "The condition should be an important health problem",
      "There should be a recognized latent or early symptomatic stage",
      "The screening test must have 100% sensitivity",
      "There should be an accepted treatment for recognized disease"
    ],
    answer: 2,
    explanation: "Wilson and Jungner (WHO, 1968) criteria for screening include: (1) Important health problem, (2) Accepted treatment available, (3) Facilities for diagnosis and treatment available, (4) Recognizable latent/early stage, (5) Suitable test available, (6) Test acceptable to the population, (7) Natural history understood, (8) Agreed policy on whom to treat, (9) Economically balanced cost, (10) Ongoing process. No screening test requires 100% sensitivity; a suitable and acceptable test is sufficient."
  },
  {
    id: 45,
    question: "A screening program for cervical cancer uses a test with high sensitivity but low specificity. The most likely consequence in a low-prevalence population is:",
    options: [
      "High positive predictive value",
      "Many false positives leading to unnecessary colposcopies",
      "Many false negatives leading to missed cancers",
      "High negative predictive value is compromised"
    ],
    answer: 1,
    explanation: "A test with high sensitivity but low specificity will generate many false positives, especially in a low-prevalence population. In low-prevalence settings, the number of false positives can vastly exceed true positives, resulting in low PPV. This leads to unnecessary further investigations (colposcopies, biopsies), increased patient anxiety, and higher healthcare costs. However, few true cases will be missed (high NPV)."
  },
  {
    id: 46,
    question: "Length-time bias in a screening program refers to:",
    options: [
      "Delay in starting the screening program",
      "Overdetection of slowly progressive diseases because they have a longer detectable preclinical phase",
      "The time between two consecutive screening rounds being too long",
      "The time taken to perform the screening test"
    ],
    answer: 1,
    explanation: "Length-time bias occurs because screening disproportionately detects slow-growing, less aggressive diseases that have a longer preclinical detectable phase (sojourn time). Fast-growing, aggressive diseases have a short preclinical phase and are more likely to present symptomatically between screening rounds (interval cancers). This makes screening appear more effective than it is, because the cases detected tend to have better prognosis regardless of screening."
  },
  {
    id: 47,
    question: "In a screening test for diabetes, the cutoff for fasting blood glucose is lowered from 126 mg/dL to 110 mg/dL. What will happen to the sensitivity and specificity?",
    options: [
      "Both sensitivity and specificity will increase",
      "Sensitivity will increase and specificity will decrease",
      "Sensitivity will decrease and specificity will increase",
      "Both sensitivity and specificity will decrease"
    ],
    answer: 1,
    explanation: "Lowering the cutoff (making the criterion for a positive test less stringent) will capture more true diabetics (increasing sensitivity) but will also falsely classify more non-diabetics as positive (decreasing specificity). There is an inverse relationship between sensitivity and specificity when moving the cutoff point. The ROC (Receiver Operating Characteristic) curve illustrates this trade-off and helps identify the optimal cutoff."
  },
  {
    id: 48,
    question: "A screening test for prostate cancer has sensitivity 80% and specificity 95%. In a population with 10% disease prevalence, the negative predictive value (NPV) is approximately:",
    options: [
      "97.7%",
      "85.5%",
      "63.0%",
      "90.0%"
    ],
    answer: 0,
    explanation: "Using a hypothetical population of 1,000: Diseased = 100 (10% prevalence), Non-diseased = 900. TP = 100 x 0.80 = 80, FN = 100 x 0.20 = 20, TN = 900 x 0.95 = 855, FP = 900 x 0.05 = 45. NPV = TN/(TN+FN) = 855/(855+20) = 855/875 = 97.7%. NPV is high because most negatives are true negatives. NPV increases as prevalence decreases (fewer diseased people to miss)."
  },
  {
    id: 49,
    question: "The ROC (Receiver Operating Characteristic) curve plots:",
    options: [
      "Sensitivity (y-axis) against specificity (x-axis)",
      "Sensitivity (y-axis) against 1-specificity (false positive rate) (x-axis)",
      "Positive predictive value against negative predictive value",
      "True positive rate against false negative rate"
    ],
    answer: 1,
    explanation: "The ROC curve plots sensitivity (true positive rate) on the y-axis against 1-specificity (false positive rate) on the x-axis at various cutoff thresholds. The area under the ROC curve (AUC) quantifies the overall discriminatory ability of the test. AUC = 1.0 represents a perfect test, AUC = 0.5 represents a worthless test (no better than chance). The optimal cutoff is typically the point closest to the upper-left corner of the ROC curve."
  },
  {
    id: 50,
    question: "In a two-stage screening strategy for a rare disease, the first test has high sensitivity and the second confirmatory test has high specificity. The rationale for this approach is:",
    options: [
      "To maximize false positive rates",
      "To first cast a wide net (capture most cases) and then confirm with a specific test to minimize false positives",
      "To reduce the cost by using the expensive test first",
      "To increase the prevalence of the disease in the population"
    ],
    answer: 1,
    explanation: "In sequential (two-stage) screening, the first test with high sensitivity is used to identify all potential cases (maximizing detection, accepting some false positives). The second test with high specificity is then applied only to those who tested positive in the first stage to confirm the diagnosis and eliminate false positives. This approach improves overall PPV, is cost-effective (expensive confirmatory test used on fewer people), and is widely used (e.g., ELISA followed by Western Blot for HIV)."
  }
];

export default questions;

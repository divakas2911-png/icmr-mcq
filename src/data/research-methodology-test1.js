const questions = [
  // ===== TYPES OF STUDY DESIGNS - COHORT, CASE-CONTROL, RCT (Q1-Q10) =====
  {
    id: 1,
    question: "A researcher follows 5,000 smokers and 5,000 non-smokers over 20 years to compare the incidence of lung cancer between the two groups. What type of study design is this?",
    options: [
      "Prospective cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Randomized controlled trial"
    ],
    answer: 0,
    explanation: "This is a prospective cohort study because the researcher identifies groups based on exposure status (smokers vs. non-smokers) and follows them forward in time to observe the outcome (lung cancer). The direction of inquiry is from exposure to disease."
  },
  {
    id: 2,
    question: "In a study, 200 patients with hepatocellular carcinoma and 200 controls without liver cancer are interviewed about their past history of hepatitis B infection. Which study design is being used?",
    options: [
      "Cohort study",
      "Case-control study",
      "Randomized controlled trial",
      "Ecological study"
    ],
    answer: 1,
    explanation: "This is a case-control study because the researcher starts with the outcome (hepatocellular carcinoma cases vs. controls) and looks backward to assess past exposure (hepatitis B infection). Case-control studies proceed from effect to cause."
  },
  {
    id: 3,
    question: "Which of the following is the most important feature that distinguishes a randomized controlled trial (RCT) from a cohort study?",
    options: [
      "Presence of a control group",
      "Random allocation of participants to intervention and control groups",
      "Prospective follow-up of participants",
      "Use of blinding techniques"
    ],
    answer: 1,
    explanation: "The defining feature of an RCT is the random allocation of participants to intervention and control groups. While cohort studies also have comparison groups and prospective follow-up, they lack randomization. Randomization minimizes selection bias and balances both known and unknown confounders between groups."
  },
  {
    id: 4,
    question: "A nested case-control study is conducted within a large cohort study of cardiovascular disease. What is the primary advantage of this design over a traditional case-control study?",
    options: [
      "It is less expensive than a traditional case-control study",
      "It eliminates the need for matching",
      "Exposure information is collected before disease onset, reducing recall bias",
      "It allows calculation of attributable risk"
    ],
    answer: 2,
    explanation: "In a nested case-control study, exposure data is collected prospectively as part of the parent cohort study before disease develops. This eliminates recall bias, which is a major limitation of traditional case-control studies where participants are asked to recall past exposures after disease diagnosis."
  },
  {
    id: 5,
    question: "In a double-blind RCT comparing a new antihypertensive drug with placebo, 'double-blind' means that which of the following are unaware of group assignment?",
    options: [
      "The participant and the pharmacist",
      "The participant and the investigator assessing outcomes",
      "The statistician and the data safety monitoring board",
      "The referring physician and the participant"
    ],
    answer: 1,
    explanation: "In a double-blind (double-masked) trial, both the study participant and the investigator/outcome assessor are unaware of the treatment allocation. This minimizes observation bias from the investigator and performance/placebo bias from the participant."
  },
  {
    id: 6,
    question: "A researcher wants to study the association between oral contraceptive pill (OCP) use and deep vein thrombosis (DVT). She selects 150 women diagnosed with DVT and 150 age-matched women without DVT and inquires about their OCP usage. The appropriate measure of association for this study is:",
    options: [
      "Relative risk",
      "Odds ratio",
      "Attributable risk",
      "Population attributable risk"
    ],
    answer: 1,
    explanation: "This is a case-control study (starts with disease status, looks back at exposure). In case-control studies, the incidence of disease cannot be directly calculated because the ratio of cases to controls is determined by the investigator. Therefore, relative risk cannot be computed. The odds ratio is the appropriate measure of association for case-control studies."
  },
  {
    id: 7,
    question: "Which of the following study designs is most susceptible to recall bias?",
    options: [
      "Prospective cohort study",
      "Randomized controlled trial",
      "Case-control study",
      "Community trial"
    ],
    answer: 2,
    explanation: "Case-control studies are most susceptible to recall bias because participants are asked to recall past exposures after the outcome has already occurred. Cases (those with disease) tend to remember and report exposures differently than controls. Prospective studies collect exposure data before the outcome occurs, minimizing this bias."
  },
  {
    id: 8,
    question: "The Framingham Heart Study, which enrolled participants free of cardiovascular disease and followed them over decades to identify risk factors, is a classic example of which study design?",
    options: [
      "Case-control study",
      "Cross-sectional study",
      "Prospective cohort study",
      "Ecological study"
    ],
    answer: 2,
    explanation: "The Framingham Heart Study is a landmark prospective cohort study. Participants were enrolled without cardiovascular disease, their risk factor profiles were assessed, and they were followed forward in time to observe the development of cardiovascular events. This design allows direct calculation of incidence rates and relative risk."
  },
  {
    id: 9,
    question: "An investigator wants to determine whether a new surgical technique reduces post-operative infection rates. She randomly assigns 100 patients to the new technique and 100 to the standard technique, but the surgeons and patients both know which technique is used. This study is best described as:",
    options: [
      "Double-blind RCT",
      "Single-blind RCT",
      "Open-label RCT",
      "Quasi-experimental study"
    ],
    answer: 2,
    explanation: "This is an open-label (unblinded) RCT. Although participants are randomly allocated, neither the surgeons nor the patients are blinded to the intervention. Surgical trials often cannot be blinded due to the nature of the intervention. It is still an RCT because randomization is present."
  },
  {
    id: 10,
    question: "In a crossover trial design, each participant:",
    options: [
      "Is randomly assigned to either treatment or control group permanently",
      "Receives both the treatment and the control intervention in sequence, separated by a washout period",
      "Serves as a control for another matched participant",
      "Is followed up only until the first outcome event occurs"
    ],
    answer: 1,
    explanation: "In a crossover trial, each participant acts as their own control by receiving both interventions sequentially, separated by a washout period to eliminate carryover effects. This design reduces inter-subject variability and requires fewer participants. It is best suited for chronic, stable conditions with treatments that have short-lived effects."
  },

  // ===== INCIDENCE, PREVALENCE (Q11-Q20) =====
  {
    id: 11,
    question: "In a population of 10,000 people, 200 had diabetes at the start of the year and 100 new cases were diagnosed during the year. What is the incidence rate of diabetes for that year?",
    options: [
      "100/10,000 = 1%",
      "100/9,800 = 1.02%",
      "300/10,000 = 3%",
      "200/10,000 = 2%"
    ],
    answer: 1,
    explanation: "Incidence is calculated as the number of NEW cases divided by the population at risk. Those who already have diabetes (200) are not at risk of developing new diabetes, so they are excluded from the denominator. Incidence = 100 / (10,000 - 200) = 100/9,800 = 1.02%."
  },
  {
    id: 12,
    question: "Which of the following statements best describes the relationship between prevalence, incidence, and duration of disease?",
    options: [
      "Prevalence = Incidence x Duration (when the disease is in steady state)",
      "Incidence = Prevalence x Duration",
      "Prevalence = Incidence / Duration",
      "Duration = Incidence x Prevalence"
    ],
    answer: 0,
    explanation: "The fundamental relationship is: Prevalence (P) = Incidence (I) x Duration (D). This holds when the population is in a steady state (stable incidence and duration). This means prevalence increases when either incidence increases or disease duration increases (e.g., through better treatment that prolongs survival without cure)."
  },
  {
    id: 13,
    question: "A new treatment for HIV significantly prolongs survival but does not cure the disease. What effect will this treatment have on the incidence and prevalence of HIV in the population?",
    options: [
      "Both incidence and prevalence will decrease",
      "Incidence will increase, prevalence will decrease",
      "Incidence will remain unchanged, prevalence will increase",
      "Both incidence and prevalence will increase"
    ],
    answer: 2,
    explanation: "Since the treatment prolongs survival without curing the disease, patients live longer with HIV, increasing disease duration. By the relationship P = I x D, if duration increases while incidence stays the same (the treatment does not prevent new infections), prevalence will increase. Incidence remains unchanged because the treatment does not prevent new cases."
  },
  {
    id: 14,
    question: "Point prevalence is best defined as:",
    options: [
      "The number of new cases of a disease occurring over a specified period",
      "The proportion of a population that has a disease at a specific point in time",
      "The rate at which new cases develop in a population per unit time",
      "The cumulative probability of developing a disease over a lifetime"
    ],
    answer: 1,
    explanation: "Point prevalence is the proportion of individuals in a population who have a particular disease or condition at a single point in time. It includes both old and new cases and is expressed as: Point prevalence = Number of existing cases at a point in time / Total population at that point in time."
  },
  {
    id: 15,
    question: "In a town of 50,000 people, a survey on January 1st found 500 existing cases of tuberculosis. During the year, 200 new cases were diagnosed. What is the period prevalence of tuberculosis for that year?",
    options: [
      "500/50,000 = 1%",
      "200/50,000 = 0.4%",
      "700/50,000 = 1.4%",
      "200/49,500 = 0.4%"
    ],
    answer: 2,
    explanation: "Period prevalence includes all cases (both pre-existing and new) that existed at any time during the specified period, divided by the population. Period prevalence = (500 existing + 200 new) / 50,000 = 700/50,000 = 1.4%. It captures both old and new cases over the entire time period."
  },
  {
    id: 16,
    question: "Incidence rate (person-time incidence) differs from cumulative incidence in that incidence rate:",
    options: [
      "Includes prevalent cases in the numerator",
      "Uses person-time at risk in the denominator, accounting for varying follow-up periods",
      "Can only be calculated in case-control studies",
      "Is always higher than cumulative incidence"
    ],
    answer: 1,
    explanation: "Incidence rate (incidence density) uses person-time at risk in the denominator, which accounts for individuals entering and leaving the study at different times. Cumulative incidence uses the number of persons at risk in the denominator and assumes complete follow-up. Incidence rate = New cases / Total person-time at risk."
  },
  {
    id: 17,
    question: "A highly fatal disease with short duration will likely show which pattern of incidence and prevalence?",
    options: [
      "High incidence and high prevalence",
      "High incidence but low prevalence",
      "Low incidence but high prevalence",
      "Low incidence and low prevalence"
    ],
    answer: 1,
    explanation: "A highly fatal disease with short duration (e.g., Ebola, rabies) will have a high incidence if many people get infected, but a low prevalence because patients die quickly and do not remain in the 'prevalent pool' for long. By P = I x D, if duration (D) is very short, prevalence will be low even if incidence is high."
  },
  {
    id: 18,
    question: "An investigator follows 1,000 initially disease-free individuals for 5 years. During follow-up, 200 subjects are lost to follow-up at the end of year 2, and 50 new cases of the disease are identified (30 in the first 2 years and 20 in the last 3 years). What is the cumulative incidence over 5 years?",
    options: [
      "50/1,000 = 5%",
      "50/800 = 6.25%",
      "50/900 = 5.56%",
      "30/1,000 = 3%"
    ],
    answer: 0,
    explanation: "Cumulative incidence = Number of new cases / Population at risk at the start of the study = 50/1,000 = 5%. In the simplest calculation, cumulative incidence uses the initial population at risk as the denominator. Some methods adjust for losses to follow-up, but the standard cumulative incidence uses the original cohort size."
  },
  {
    id: 19,
    question: "Which of the following is true about prevalence?",
    options: [
      "It is useful for studying the etiology of acute diseases",
      "It is influenced by both the incidence and the duration of disease",
      "It only counts new cases of disease in a population",
      "It can be directly estimated from a cohort study but not a cross-sectional study"
    ],
    answer: 1,
    explanation: "Prevalence is influenced by both incidence and duration of disease (P = I x D). It counts all existing cases (both old and new) and is best measured by cross-sectional studies. Prevalence is more useful for measuring disease burden and healthcare planning than for studying etiology, because the temporal relationship between exposure and disease is unclear."
  },
  {
    id: 20,
    question: "Attack rate, commonly used in outbreak investigations, is technically a measure of:",
    options: [
      "Point prevalence",
      "Period prevalence",
      "Cumulative incidence",
      "Incidence density"
    ],
    answer: 2,
    explanation: "Attack rate is the proportion of exposed people who develop illness during an outbreak period. It is calculated as: Attack rate = Number of new cases / Population at risk during the outbreak. Despite being called a 'rate,' it is actually a proportion (cumulative incidence) measured over a limited time period, typically during an epidemic or outbreak."
  },

  // ===== RELATIVE RISK, ODDS RATIO (Q21-Q30) =====
  {
    id: 21,
    question: "In a cohort study, the incidence of myocardial infarction (MI) is 20 per 1,000 in smokers and 5 per 1,000 in non-smokers. What is the relative risk of MI for smokers compared to non-smokers?",
    options: [
      "2.0",
      "4.0",
      "15.0",
      "0.25"
    ],
    answer: 1,
    explanation: "Relative Risk (RR) = Incidence in exposed / Incidence in unexposed = (20/1,000) / (5/1,000) = 4.0. This means smokers have 4 times the risk of MI compared to non-smokers. RR can be directly calculated from cohort studies where incidence is known."
  },
  {
    id: 22,
    question: "In a case-control study of lung cancer and asbestos exposure, 80 out of 100 lung cancer patients and 30 out of 100 controls had occupational asbestos exposure. What is the odds ratio?",
    options: [
      "2.67",
      "9.33",
      "6.0",
      "4.67"
    ],
    answer: 1,
    explanation: "Odds Ratio = (a x d) / (b x c) where a = exposed cases (80), b = exposed controls (30), c = unexposed cases (20), d = unexposed controls (70). OR = (80 x 70) / (30 x 20) = 5,600 / 600 = 9.33. The odds of asbestos exposure are 9.33 times higher in lung cancer cases than in controls."
  },
  {
    id: 23,
    question: "Under which condition does the odds ratio closely approximate the relative risk?",
    options: [
      "When the exposure is very common in the population",
      "When the disease under study is rare (less than 10% incidence)",
      "When there is significant confounding",
      "When the study has a small sample size"
    ],
    answer: 1,
    explanation: "The odds ratio approximates the relative risk when the disease is rare (the 'rare disease assumption'). When disease incidence is less than 10%, the odds ratio and relative risk converge because the denominators of the odds (a+c and b+d in a 2x2 table) become very similar to the total in each exposure group. This is why case-control studies can estimate RR via OR for rare diseases."
  },
  {
    id: 24,
    question: "A cohort study shows that the incidence of stroke is 30 per 1,000 in hypertensive patients and 10 per 1,000 in normotensive patients. What is the attributable risk (risk difference)?",
    options: [
      "3.0 per 1,000",
      "20 per 1,000",
      "0.33 per 1,000",
      "40 per 1,000"
    ],
    answer: 1,
    explanation: "Attributable Risk (AR) = Incidence in exposed - Incidence in unexposed = 30/1,000 - 10/1,000 = 20/1,000. This means that 20 out of every 1,000 strokes in hypertensive patients can be attributed to hypertension, assuming a causal relationship. AR measures the absolute excess risk due to the exposure."
  },
  {
    id: 25,
    question: "A relative risk of 1.0 indicates:",
    options: [
      "The exposure doubles the risk of disease",
      "The exposure is protective against the disease",
      "There is no association between exposure and disease",
      "The study has significant confounding"
    ],
    answer: 2,
    explanation: "A relative risk of 1.0 means the incidence of disease is equal in exposed and unexposed groups, indicating no association between the exposure and the disease. RR > 1 suggests the exposure increases risk, RR < 1 suggests the exposure is protective, and RR = 1 means no association."
  },
  {
    id: 26,
    question: "In a cohort study, the incidence of lung cancer in asbestos workers is 40/1,000 and in non-exposed workers is 8/1,000. If 30% of the general population is exposed to asbestos, what is the population attributable risk (PAR)?",
    options: [
      "9.6 per 1,000",
      "32 per 1,000",
      "17.6 per 1,000",
      "22.4 per 1,000"
    ],
    answer: 0,
    explanation: "PAR = Incidence in total population - Incidence in unexposed. First, calculate the incidence in total population: I(total) = (0.30 x 40/1,000) + (0.70 x 8/1,000) = 12/1,000 + 5.6/1,000 = 17.6/1,000. PAR = 17.6/1,000 - 8/1,000 = 9.6/1,000. This represents the excess incidence in the total population attributable to asbestos exposure."
  },
  {
    id: 27,
    question: "A case-control study investigates the association between alcohol consumption and esophageal cancer. The 2x2 table shows: exposed cases = 70, unexposed cases = 30, exposed controls = 40, unexposed controls = 60. If the 95% confidence interval for the odds ratio is 1.8 to 5.2, which interpretation is correct?",
    options: [
      "The association is not statistically significant",
      "The association is statistically significant as the CI does not include 1.0",
      "The odds ratio is unreliable due to wide confidence interval",
      "The study proves causation between alcohol and esophageal cancer"
    ],
    answer: 1,
    explanation: "OR = (70 x 60) / (40 x 30) = 4,200/1,200 = 3.5. The 95% CI is 1.8-5.2, which does not include 1.0 (the null value for OR). When the CI does not cross 1.0, the association is statistically significant at the 5% level (p < 0.05). However, statistical significance does not prove causation."
  },
  {
    id: 28,
    question: "The attributable risk percent (AR%) in the exposed group is calculated as:",
    options: [
      "(Incidence in exposed - Incidence in unexposed) / Incidence in exposed x 100",
      "(Incidence in exposed - Incidence in unexposed) / Incidence in unexposed x 100",
      "Incidence in exposed / Incidence in unexposed x 100",
      "(Relative risk - 1) / Relative risk"
    ],
    answer: 0,
    explanation: "AR% = (Ie - Io) / Ie x 100, where Ie = incidence in exposed and Io = incidence in unexposed. This can also be expressed as (RR - 1) / RR x 100. Note that option D gives the same formula as option A but without the x 100, so the complete formula with percentage is option A. AR% represents the proportion of disease in the exposed group that is attributable to the exposure."
  },
  {
    id: 29,
    question: "In a cohort study, the relative risk of developing colon cancer for individuals consuming a high-fat diet compared to a low-fat diet is 0.5. This means:",
    options: [
      "High-fat diet doubles the risk of colon cancer",
      "High-fat diet has no effect on colon cancer risk",
      "High-fat diet is associated with a 50% reduction in colon cancer risk",
      "The odds ratio would be greater than 1.0"
    ],
    answer: 2,
    explanation: "A relative risk of 0.5 means the exposed group (high-fat diet) has half the incidence of disease compared to the unexposed group. This represents a 50% reduction in risk: (1 - 0.5) x 100 = 50% risk reduction. An RR < 1 indicates a protective association. Note: this is a hypothetical scenario for testing understanding of RR interpretation."
  },
  {
    id: 30,
    question: "Number needed to treat (NNT) is calculated as:",
    options: [
      "1 / Relative risk",
      "1 / Absolute risk reduction",
      "1 / Odds ratio",
      "Relative risk / Attributable risk"
    ],
    answer: 1,
    explanation: "NNT = 1 / ARR (Absolute Risk Reduction). ARR = Incidence in control group - Incidence in treatment group. NNT represents the number of patients who need to be treated to prevent one additional adverse outcome. For example, if ARR = 0.05 (5%), NNT = 1/0.05 = 20, meaning 20 patients must be treated to prevent one event."
  },

  // ===== BIAS (SELECTION, INFORMATION), CONFOUNDING (Q31-Q40) =====
  {
    id: 31,
    question: "A hospital-based case-control study of the association between physical activity and coronary heart disease (CHD) finds a stronger association than community-based studies. This is most likely due to:",
    options: [
      "Recall bias",
      "Berkson's bias (admission rate bias)",
      "Lead-time bias",
      "Observer bias"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) is a form of selection bias that occurs in hospital-based studies. Hospitalized patients may not represent the general population because the probability of hospitalization may differ by both exposure and disease status. Sedentary individuals may be more likely to be hospitalized for other conditions, inflating the apparent association between inactivity and CHD."
  },
  {
    id: 32,
    question: "A researcher studying the association between coffee consumption and pancreatic cancer finds a significant association. However, coffee drinkers are also more likely to be smokers, and smoking is an independent risk factor for pancreatic cancer. Smoking in this scenario is a:",
    options: [
      "Effect modifier",
      "Confounder",
      "Mediator",
      "Collider"
    ],
    answer: 1,
    explanation: "Smoking is a confounder because it meets all three criteria for confounding: (1) it is associated with the exposure (coffee drinking), (2) it is an independent risk factor for the outcome (pancreatic cancer), and (3) it is not on the causal pathway between coffee and pancreatic cancer. Confounding distorts the true association between exposure and outcome."
  },
  {
    id: 33,
    question: "Which of the following methods can control for confounding at the study design stage?",
    options: [
      "Stratified analysis",
      "Multivariate regression",
      "Randomization",
      "Standardization"
    ],
    answer: 2,
    explanation: "Randomization is the only method listed that controls for confounding at the design stage. It distributes both known and unknown confounders equally between groups. Stratified analysis, multivariate regression, and standardization are methods to control confounding during the analysis stage. Other design-stage methods include restriction and matching."
  },
  {
    id: 34,
    question: "In a case-control study on childhood leukemia and electromagnetic field (EMF) exposure, mothers of leukemia cases recall EMF exposure more accurately than mothers of healthy controls. This is an example of:",
    options: [
      "Selection bias",
      "Recall bias",
      "Interviewer bias",
      "Berkson's bias"
    ],
    answer: 1,
    explanation: "Recall bias (a type of information bias) occurs when cases and controls differ in the accuracy or completeness of their recall of past exposures. Mothers of children with leukemia are more likely to carefully recall and report exposures (such as living near power lines) because they are motivated to find a cause for their child's illness."
  },
  {
    id: 35,
    question: "A study on occupational hazards recruits workers currently employed at a factory, excluding those who left due to illness. The study finds that factory workers are healthier than the general population. This is an example of:",
    options: [
      "Recall bias",
      "Healthy worker effect",
      "Lead-time bias",
      "Hawthorne effect"
    ],
    answer: 1,
    explanation: "The healthy worker effect is a form of selection bias where workers appear healthier than the general population because severely ill individuals either leave employment or never enter the workforce. By studying only current workers, the unhealthiest individuals are systematically excluded, leading to an underestimation of occupational health risks."
  },
  {
    id: 36,
    question: "An investigator studying the association between alcohol and liver cirrhosis adjusts for hepatitis C status in the analysis and finds that the association between alcohol and cirrhosis is unchanged. This suggests that hepatitis C is:",
    options: [
      "A strong confounder",
      "An effect modifier",
      "Not a confounder in this study",
      "A mediator in the causal pathway"
    ],
    answer: 2,
    explanation: "If adjusting for a variable does not change the measure of association (e.g., the crude and adjusted estimates are similar), then that variable is not acting as a confounder in the study. A confounder would cause a meaningful change in the estimate after adjustment. In this case, hepatitis C does not confound the alcohol-cirrhosis relationship."
  },
  {
    id: 37,
    question: "In a clinical trial, patients who know they are receiving a new drug report greater symptom improvement than would be expected from the drug's pharmacological action. This is an example of:",
    options: [
      "Selection bias",
      "Placebo effect (information bias due to lack of blinding)",
      "Confounding by indication",
      "Attrition bias"
    ],
    answer: 1,
    explanation: "This describes the placebo effect, which is a form of information bias that occurs when participants' knowledge of their treatment assignment influences their reported outcomes. Blinding (masking) participants prevents this bias by ensuring that participants do not know whether they are receiving the active treatment or a placebo."
  },
  {
    id: 38,
    question: "In a study, participants who drop out of the treatment arm have worse prognosis than those who remain. The analysis based only on those who completed the study will likely show:",
    options: [
      "An overestimate of the treatment effect",
      "An underestimate of the treatment effect",
      "An unbiased estimate of the treatment effect",
      "An effect only on prevalence but not incidence"
    ],
    answer: 0,
    explanation: "This is attrition bias (a form of selection bias). When sicker patients drop out of the treatment arm, the remaining patients are healthier, making the treatment appear more effective than it truly is. Intent-to-treat (ITT) analysis, which includes all randomized participants regardless of completion, is used to minimize this bias."
  },
  {
    id: 39,
    question: "Confounding by indication occurs when:",
    options: [
      "The indication for treatment is also a risk factor for the outcome being studied",
      "The investigator is aware of the treatment allocation",
      "Cases recall exposures more accurately than controls",
      "The study sample is not representative of the general population"
    ],
    answer: 0,
    explanation: "Confounding by indication is common in observational studies of treatment effects. It occurs when the reason for prescribing a treatment (the indication) is itself a risk factor for the outcome. For example, comparing mortality between statin users and non-users may be confounded because statins are prescribed to patients with hyperlipidemia, who already have higher cardiovascular risk."
  },
  {
    id: 40,
    question: "Which of the following is a difference between confounding and effect modification (interaction)?",
    options: [
      "Confounding is a bias to be controlled; effect modification is a biological phenomenon to be reported",
      "Effect modification is a bias to be eliminated; confounding is a finding to be described",
      "Both are biases that should be controlled in the analysis",
      "Confounding occurs only in RCTs; effect modification occurs only in observational studies"
    ],
    answer: 0,
    explanation: "Confounding is a distortion of the true association that should be controlled through design (randomization, matching, restriction) or analysis (stratification, regression). Effect modification (interaction) is a real biological phenomenon where the effect of an exposure on the outcome differs across levels of a third variable. Effect modification should be reported, not adjusted away."
  },

  // ===== SCREENING METHODS (Q41-Q50) =====
  {
    id: 41,
    question: "A screening test for breast cancer correctly identifies 90 out of 100 women who truly have breast cancer. The sensitivity of this test is:",
    options: [
      "90%",
      "Cannot be calculated without knowing specificity",
      "10%",
      "Depends on the prevalence of breast cancer"
    ],
    answer: 0,
    explanation: "Sensitivity = True Positives / (True Positives + False Negatives) x 100 = 90 / (90 + 10) x 100 = 90%. Sensitivity measures the ability of a test to correctly identify those WITH the disease (true positive rate). A highly sensitive test is good for ruling OUT disease (SnNOut: Sensitive test, Negative result, rules Out)."
  },
  {
    id: 42,
    question: "A screening test for diabetes has a sensitivity of 95% and a specificity of 80%. If the test is applied to a population with a disease prevalence of 1%, what is the approximate positive predictive value (PPV)?",
    options: [
      "About 95%",
      "About 80%",
      "About 4.6%",
      "About 50%"
    ],
    answer: 2,
    explanation: "Using a hypothetical population of 10,000: Diseased = 100 (1%), Non-diseased = 9,900. TP = 100 x 0.95 = 95; FP = 9,900 x 0.20 = 1,980; PPV = TP / (TP + FP) = 95 / (95 + 1,980) = 95/2,075 = 4.6%. When prevalence is very low, even a test with good sensitivity and specificity will have a low PPV because the number of false positives overwhelms the true positives."
  },
  {
    id: 43,
    question: "Which of the following properties of a screening test is NOT affected by the prevalence of the disease in the population?",
    options: [
      "Positive predictive value",
      "Negative predictive value",
      "Sensitivity and specificity",
      "Accuracy"
    ],
    answer: 2,
    explanation: "Sensitivity and specificity are intrinsic properties of the test and do not change with disease prevalence. They depend on the test characteristics. However, predictive values (PPV and NPV) are heavily influenced by prevalence. As prevalence increases, PPV increases and NPV decreases; as prevalence decreases, PPV decreases and NPV increases."
  },
  {
    id: 44,
    question: "A screening program detects cervical cancer 3 years earlier than it would have been diagnosed clinically. Patients detected by screening appear to survive longer from diagnosis, but their actual date of death is unchanged. This apparent improvement in survival is due to:",
    options: [
      "Length-time bias",
      "Lead-time bias",
      "Selection bias",
      "Volunteer bias"
    ],
    answer: 1,
    explanation: "Lead-time bias occurs when screening detects disease earlier in its natural history, making it appear that screened patients survive longer when in fact the time of death is unchanged. The 'lead time' is the interval between screen detection and when the disease would have been clinically diagnosed. Survival appears longer only because the starting point of measurement (diagnosis) is shifted earlier."
  },
  {
    id: 45,
    question: "A highly specific test is most useful for:",
    options: [
      "Screening in the general population",
      "Confirming a diagnosis after a positive screening test",
      "Ruling out a disease when the test is negative",
      "Detecting early-stage disease"
    ],
    answer: 1,
    explanation: "A highly specific test has few false positives, so a positive result is more likely to be a true positive. This makes it ideal for confirming a diagnosis (SpPIn: Specific test, Positive result, rules In). Highly sensitive tests are better for screening and ruling out disease, while highly specific tests are better for confirmation."
  },
  {
    id: 46,
    question: "In an ROC (Receiver Operating Characteristic) curve, the ideal screening test would have a curve that:",
    options: [
      "Falls along the 45-degree diagonal line",
      "Hugs the upper-left corner of the graph",
      "Hugs the lower-right corner of the graph",
      "Is a straight horizontal line"
    ],
    answer: 1,
    explanation: "In an ROC curve, the y-axis represents sensitivity (true positive rate) and the x-axis represents 1 - specificity (false positive rate). An ideal test would have 100% sensitivity and 100% specificity, placing the curve at the upper-left corner. The area under the curve (AUC) = 1.0 for a perfect test. A diagonal line (AUC = 0.5) represents a test no better than chance."
  },
  {
    id: 47,
    question: "Wilson and Jungner criteria for a screening program include all of the following EXCEPT:",
    options: [
      "The condition should be an important health problem",
      "There should be an accepted treatment for the recognized disease",
      "The natural history of the disease should be adequately understood",
      "The screening test must have 100% sensitivity"
    ],
    answer: 3,
    explanation: "Wilson and Jungner (WHO 1968) criteria for screening include: important health problem, accepted treatment available, facilities for diagnosis and treatment available, recognizable latent/early stage, suitable test, test acceptable to population, natural history understood, agreed policy on whom to treat, cost-effectiveness, and screening should be a continuing process. No test has 100% sensitivity, and this is not a requirement."
  },
  {
    id: 48,
    question: "Screening programs tend to preferentially detect slow-growing tumors because they are present in the detectable preclinical phase for a longer time. This phenomenon is called:",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias",
      "Surveillance bias"
    ],
    answer: 1,
    explanation: "Length-time bias (length-biased sampling) occurs because screening preferentially detects slow-growing, less aggressive tumors that remain in the preclinical detectable phase longer. Fast-growing, aggressive tumors pass through the preclinical phase quickly and are more likely to present symptomatically between screening rounds. This makes screened patients appear to have better outcomes."
  },
  {
    id: 49,
    question: "A screening test has a sensitivity of 80% and specificity of 90%. If the cut-off value is lowered to increase sensitivity to 95%, what will most likely happen to specificity?",
    options: [
      "Specificity will also increase",
      "Specificity will decrease",
      "Specificity will remain unchanged",
      "Specificity will become 100%"
    ],
    answer: 1,
    explanation: "There is an inverse relationship between sensitivity and specificity when the cut-off value of a test is changed. Lowering the cut-off to capture more true positives (increasing sensitivity) will also capture more false positives (decreasing specificity). This trade-off is visualized by the ROC curve, where moving along the curve increases one measure at the expense of the other."
  },
  {
    id: 50,
    question: "In a population of 1,000 people, a disease has a prevalence of 5%. A screening test has sensitivity of 90% and specificity of 95%. How many false positive results will occur?",
    options: [
      "5",
      "47.5 (approximately 48)",
      "45",
      "50"
    ],
    answer: 1,
    explanation: "Diseased = 1,000 x 0.05 = 50; Non-diseased = 950. False positives = Non-diseased x (1 - Specificity) = 950 x (1 - 0.95) = 950 x 0.05 = 47.5 (approximately 48). False positives come from the non-diseased population, and their number depends on the specificity and the number of non-diseased individuals. Even with 95% specificity, the large number of non-diseased people generates substantial false positives."
  }
];

export default questions;

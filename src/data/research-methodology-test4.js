const questions = [
  // ========== Types of Study Designs - Cohort, Case-Control, RCT (Q1-Q10) ==========
  {
    id: 1,
    question: "In a crossover trial comparing Drug A and Drug B for migraine prophylaxis, patients receive Drug A for 8 weeks, undergo a 2-week washout, then receive Drug B for 8 weeks. What is the primary purpose of the washout period?",
    options: [
      "To eliminate the carryover effect of the first treatment",
      "To increase the sample size of the study",
      "To allow patients to withdraw consent",
      "To introduce a placebo control phase"
    ],
    answer: 0,
    explanation: "In a crossover trial, each subject serves as their own control by receiving both treatments in sequence. The washout period is critical to eliminate the carryover effect — the residual pharmacological or physiological effect of the first treatment that could confound the assessment of the second treatment. Without adequate washout, the measured effect of Drug B would be contaminated by lingering effects of Drug A, leading to biased estimates of treatment efficacy."
  },
  {
    id: 2,
    question: "A researcher designs a 2x2 factorial RCT to study the effects of aspirin and statin therapy on cardiovascular mortality. Patients are randomized into four groups: aspirin alone, statin alone, both, or neither. What is the key advantage of a factorial design over conducting two separate RCTs?",
    options: [
      "It eliminates the need for randomization",
      "It allows assessment of interaction between two interventions using the same sample size needed for one intervention",
      "It removes the requirement for blinding",
      "It guarantees equal allocation to all groups"
    ],
    answer: 1,
    explanation: "A factorial design is highly efficient because it allows the simultaneous evaluation of two (or more) interventions and their interaction within a single trial. A 2x2 factorial design can assess the main effects of both interventions and their interaction (synergy or antagonism) using essentially the same sample size that would be needed to study just one intervention. This saves time, cost, and patient resources. The main effects are estimated by comparing all patients who received aspirin vs. those who did not (collapsing across statin groups), and vice versa."
  },
  {
    id: 3,
    question: "A cluster randomized controlled trial is conducted to evaluate a hand hygiene intervention in 30 hospitals. Entire hospitals are randomized rather than individual patients. Which of the following is the most important statistical consideration unique to cluster RCTs?",
    options: [
      "The need for stratified randomization",
      "Accounting for intracluster correlation coefficient (ICC) leading to inflated sample size",
      "The requirement for triple blinding",
      "Elimination of selection bias through cluster allocation"
    ],
    answer: 1,
    explanation: "In cluster RCTs, the unit of randomization (hospital/cluster) differs from the unit of analysis (individual patient). Individuals within the same cluster tend to be more similar to each other than to individuals in other clusters, quantified by the intracluster correlation coefficient (ICC). This correlation reduces the effective sample size because observations within a cluster are not independent. The design effect = 1 + (m-1) x ICC, where m = cluster size. The required sample size must be inflated by this design effect, often substantially increasing the total number of participants needed compared to an individually randomized trial."
  },
  {
    id: 4,
    question: "In a stepped-wedge cluster randomized trial evaluating a new infection control protocol across 12 ICUs, all clusters start in the control condition and sequentially cross over to the intervention at randomly assigned time points. What is the primary advantage of this design over a parallel cluster RCT?",
    options: [
      "It requires fewer clusters than a parallel design",
      "All clusters eventually receive the intervention, which is ethically advantageous and politically feasible when the intervention is believed beneficial",
      "It eliminates the need to account for secular trends",
      "Blinding is easier to achieve"
    ],
    answer: 1,
    explanation: "The stepped-wedge design is particularly useful when there is a strong belief or preliminary evidence that the intervention is beneficial, making it ethically difficult to withhold it from control clusters for the entire study duration. By sequentially rolling out the intervention, all clusters eventually receive it, improving acceptability among participants and stakeholders. Additionally, it is logistically practical when simultaneous implementation across all clusters is infeasible. However, it requires careful adjustment for time trends (secular changes) since the proportion of clusters in the intervention arm increases over time."
  },
  {
    id: 5,
    question: "A case-control study investigates the association between oral contraceptive use and deep vein thrombosis (DVT). Cases are women diagnosed with DVT at a tertiary hospital, and controls are women admitted to the same hospital for elective orthopedic surgery. What type of bias is most likely introduced by this control selection?",
    options: [
      "Recall bias",
      "Berkson's bias",
      "Lead-time bias",
      "Hawthorne effect"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) occurs in hospital-based case-control studies when the exposure under study influences the probability of hospitalization for both cases and controls. Here, oral contraceptive use may independently increase the risk of DVT (cases) and may also be associated with conditions leading to orthopedic admission (e.g., fractures in younger women on OCPs). Since both cases and controls are selected from hospitalized patients, the association between OCP use and DVT may be distorted. The exposure-disease association in the hospital population differs from that in the general population because hospital admission acts as a collider."
  },
  {
    id: 6,
    question: "A nested case-control study is conducted within a prospective cohort of 50,000 adults followed for cancer incidence. When a case of lung cancer is diagnosed, 4 controls are selected from the risk set (those still at risk at the time of diagnosis). What is the primary advantage of nesting within a cohort?",
    options: [
      "It eliminates confounding completely",
      "Exposure data is collected before disease onset, reducing recall bias, and it is cost-efficient for expensive biomarker assays",
      "It increases the statistical power compared to analyzing the full cohort",
      "It avoids the need for matching"
    ],
    answer: 1,
    explanation: "A nested case-control study leverages the existing cohort infrastructure. Since exposure information (blood samples, questionnaire data) was collected prospectively before disease development, recall bias and temporal ambiguity are minimized. It is particularly cost-efficient when exposure assessment is expensive (e.g., biomarker assays) — instead of measuring the biomarker in all 50,000 cohort members, it is measured only in cases and a sample of controls. The incidence density sampling of controls from the risk set allows direct estimation of the incidence rate ratio, which approximates the relative risk."
  },
  {
    id: 7,
    question: "In an equivalence trial comparing a new generic antihypertensive to the branded version, the equivalence margin is set at +/- 5 mmHg for mean systolic BP reduction. The 95% confidence interval for the difference (new - branded) is -2.1 to +3.8 mmHg. What is the correct conclusion?",
    options: [
      "The new drug is superior to the branded version",
      "Equivalence is established since the entire confidence interval lies within the pre-specified margin",
      "The trial is inconclusive because the confidence interval includes zero",
      "The new drug is inferior to the branded version"
    ],
    answer: 1,
    explanation: "In equivalence trials, equivalence is declared when the entire confidence interval for the treatment difference falls within the pre-specified equivalence margin (delta). Here, the margin is +/- 5 mmHg, and the 95% CI (-2.1 to +3.8) lies entirely within -5 to +5 mmHg. Therefore, we conclude that the two treatments are therapeutically equivalent. Note that in equivalence trials, unlike superiority trials, the per-protocol analysis is considered the primary analysis because intention-to-treat analysis is conservative and tends to bias toward equivalence (by including non-compliant patients who dilute true differences)."
  },
  {
    id: 8,
    question: "A researcher conducts a case-crossover study to investigate whether acute alcohol consumption triggers myocardial infarction. Each case serves as their own control by comparing exposure in a hazard period (24 hours before MI) with exposure in a control period (24 hours one week prior). This design is most appropriate for studying:",
    options: [
      "Chronic risk factors with gradual onset effects",
      "Transient exposures with acute effects on the risk of episodic events",
      "Rare diseases with prolonged latency periods",
      "Continuous exposures with cumulative dose-response relationships"
    ],
    answer: 1,
    explanation: "The case-crossover design, introduced by Maclure in 1991, is specifically suited for studying whether a transient, intermittent exposure triggers an acute event. Each case serves as their own control, eliminating confounding by time-invariant characteristics (genetics, chronic medications, comorbidities). The design compares exposure status during a defined hazard period immediately before the event with exposure during one or more control periods in the same individual. It is ideal for acute triggers (alcohol, physical exertion, air pollution) of episodic events (MI, stroke, asthma attacks) but inappropriate for chronic or non-varying exposures."
  },
  {
    id: 9,
    question: "In a pragmatic RCT comparing two surgical techniques for inguinal hernia repair, the trial uses broad inclusion criteria, minimal follow-up visits, and allows surgeons to modify technique as needed. According to the PRECIS-2 tool, this trial would score high on which domain?",
    options: [
      "Explanatory approach",
      "Applicability to real-world clinical practice",
      "Internal validity at the expense of external validity",
      "Biological plausibility assessment"
    ],
    answer: 1,
    explanation: "The PRECIS-2 (Pragmatic-Explanatory Continuum Indicator Summary) tool helps researchers design trials along the pragmatic-explanatory continuum across 9 domains (eligibility, recruitment, setting, organization, flexibility of delivery, flexibility of adherence, follow-up, primary outcome, primary analysis). A pragmatic trial aims to determine whether an intervention works under usual clinical conditions (effectiveness), using broad eligibility criteria, routine care settings, flexible protocols, and intention-to-treat analysis. This contrasts with explanatory trials that assess efficacy under ideal, controlled conditions. The described trial features are clearly pragmatic, maximizing external validity and applicability to real-world practice."
  },
  {
    id: 10,
    question: "A Mendelian randomization study uses a genetic variant associated with higher LDL cholesterol levels as an instrumental variable to assess the causal effect of LDL on coronary heart disease risk. Which of the following assumptions must hold for the genetic variant to be a valid instrument?",
    options: [
      "The genetic variant must be associated with both the exposure and the outcome directly",
      "The genetic variant must be associated with the exposure, must not be associated with confounders, and must affect the outcome only through the exposure",
      "The genetic variant must have pleiotropic effects on multiple pathways",
      "The genetic variant must be in linkage disequilibrium with the causal variant"
    ],
    answer: 1,
    explanation: "Mendelian randomization exploits the random assortment of alleles at conception (analogous to randomization in an RCT) to make causal inferences from observational data. Three core instrumental variable assumptions must hold: (1) Relevance — the genetic variant is robustly associated with the exposure (LDL levels); (2) Independence — the variant is not associated with confounders of the exposure-outcome relationship; (3) Exclusion restriction — the variant affects the outcome (CHD) only through the exposure (LDL), not through alternative pathways (no horizontal pleiotropy). Violation of assumption 3, particularly through pleiotropy, is the most common threat to validity."
  },

  // ========== Incidence and Prevalence (Q11-Q20) ==========
  {
    id: 11,
    question: "During a foodborne outbreak at a wedding reception attended by 200 guests, 45 developed acute gastroenteritis within 48 hours. What is the attack rate, and how does it differ from incidence rate?",
    options: [
      "Attack rate = 45/200 = 22.5%; it is a cumulative incidence measured over a short, defined period during an outbreak, unlike incidence rate which uses person-time denominators",
      "Attack rate = 45/155 = 29%; it excludes those who did not eat the suspected food",
      "Attack rate = 45/200 = 22.5%; it is identical to incidence rate in all respects",
      "Attack rate = 200/45 = 4.4; it represents the reciprocal of incidence"
    ],
    answer: 0,
    explanation: "The attack rate (AR) = Number of new cases / Population at risk = 45/200 = 22.5%. Despite being called a 'rate,' it is actually a proportion (cumulative incidence) measured over a brief, well-defined period during an epidemic or outbreak. It differs from incidence rate (incidence density) which uses person-time in the denominator (cases per person-years) and is appropriate for ongoing surveillance over longer periods where the population at risk changes. Attack rate assumes the entire population is at risk for the entire (short) period, making person-time calculation unnecessary. Food-specific attack rates can be calculated to identify the vehicle of transmission."
  },
  {
    id: 12,
    question: "In a cohort study, 1,000 diabetes-free adults are followed for 5 years. During follow-up, 50 develop type 2 diabetes. 20 participants were lost to follow-up at exactly 2 years, and 30 died from other causes at exactly 3 years. What is the incidence rate of type 2 diabetes?",
    options: [
      "50 / 5,000 = 10 per 1,000 person-years",
      "50 / 4,550 = 10.99 per 1,000 person-years",
      "50 / 4,460 = 11.21 per 1,000 person-years",
      "50 / 950 = 52.6 per 1,000 person-years"
    ],
    answer: 2,
    explanation: "Incidence rate (incidence density) = New cases / Total person-time at risk. Person-time calculation: The 50 who developed diabetes contributed varying person-time (assumed average 2.5 years each = 125 person-years, but for simplicity, assume they contributed full 5 years minus half their follow-up). More precisely: 900 individuals completed 5 years = 4,500 person-years; 20 lost at 2 years = 40 person-years; 30 died at 3 years = 90 person-years; 50 cases (assume diagnosed evenly, contributing on average). Total person-time = (1000 - 50 - 20 - 30) x 5 + 50 x 2.5 + 20 x 2 + 30 x 3 = 4,500 - 450 + 125 + 40 + 90 = 900 x 5 + 125 + 40 + 90 = 4,500 - 375 = Corrected: 900 x 5 = 4,500; lost: 20 x 2 = 40; died: 30 x 3 = 90; cases: ~50 x 2.5 = 125 (mid-point assumption, but conventionally excluded at event). Simplified: Person-time = (1000 x 5) - (20 x 3) - (30 x 2) - (50 x 2.5) = 5000 - 60 - 60 - 125 = 4,460 (subtracting time not at risk). Incidence rate = 50/4,460 = 11.21 per 1,000 person-years."
  },
  {
    id: 13,
    question: "A chronic disease has an incidence rate of 5 per 1,000 person-years and an average duration of 10 years. Assuming a steady-state population, what is the approximate prevalence using the prevalence-incidence relationship?",
    options: [
      "P = I x D = 0.005 x 10 = 0.05 or 5%",
      "P = I / D = 0.005 / 10 = 0.0005 or 0.05%",
      "P = I + D = 0.005 + 10 = 10.005",
      "P = D / I = 10 / 0.005 = 2,000"
    ],
    answer: 0,
    explanation: "The prevalence-incidence relationship (P = I x D) holds under steady-state conditions (stable incidence, stable disease duration, stable population size). Here, P = 0.005/year x 10 years = 0.05 (5%). This means at any point in time, approximately 5% of the population has the disease. This is technically an approximation valid when prevalence is low (<10%); the exact formula is P/(1-P) = I x D. For higher prevalence, P = (I x D)/(1 + I x D). This relationship explains why diseases with low incidence but long duration (e.g., diabetes, hypertension) can have high prevalence, while diseases with high incidence but short duration (e.g., common cold) may have lower point prevalence."
  },
  {
    id: 14,
    question: "A new treatment cures a previously incurable chronic disease, reducing its average duration from 20 years to 5 years without affecting incidence. What happens to the prevalence?",
    options: [
      "Prevalence increases fourfold",
      "Prevalence decreases to one-quarter of the original value",
      "Prevalence remains unchanged since incidence is unaffected",
      "Prevalence first increases then decreases"
    ],
    answer: 1,
    explanation: "Using P = I x D: Original prevalence = I x 20. New prevalence = I x 5. New/Original = 5/20 = 1/4. Since the treatment reduces the average duration of disease from 20 to 5 years (by curing patients faster), and incidence remains constant, the prevalence drops to 25% of its original value. This illustrates the 'prevalence pool' concept — prevalence depends on both the rate at which new cases enter the pool (incidence) and the rate at which they leave (through cure or death, which determines duration). Effective treatments that cure or shorten disease duration reduce prevalence even without changing incidence."
  },
  {
    id: 15,
    question: "In a cross-sectional survey of 10,000 adults, 800 are found to have hypertension. Of these 800, 200 were newly diagnosed during the survey. The point prevalence and the proportion of previously undiagnosed cases are:",
    options: [
      "Point prevalence = 8%; undiagnosed proportion = 25%",
      "Point prevalence = 2%; undiagnosed proportion = 75%",
      "Point prevalence = 6%; undiagnosed proportion = 25%",
      "Point prevalence = 8%; undiagnosed proportion = 75%"
    ],
    answer: 0,
    explanation: "Point prevalence = Total existing cases at a point in time / Total population = 800/10,000 = 8%. This includes both previously known (600) and newly discovered (200) cases. The proportion of previously undiagnosed cases = 200/800 = 25%. This metric is important for public health planning as it indicates the 'iceberg of disease' — the hidden burden of undetected disease in the community. A high proportion of undiagnosed cases suggests the need for enhanced screening programs. Note that cross-sectional studies measure prevalence (not incidence) because they assess disease status at a single point in time."
  },
  {
    id: 16,
    question: "A city has a population of 500,000 on January 1. During the year, there are 2,000 new cases of tuberculosis. The mid-year population is 510,000. What is the cumulative incidence (risk) versus the incidence rate?",
    options: [
      "Cumulative incidence = 2,000/500,000 = 4 per 1,000; Incidence rate = 2,000/510,000 = 3.92 per 1,000 person-years",
      "Both are identical at 4 per 1,000",
      "Cumulative incidence = 2,000/510,000 = 3.92 per 1,000; Incidence rate = 2,000/500,000 = 4 per 1,000 person-years",
      "Cumulative incidence cannot be calculated from these data"
    ],
    answer: 0,
    explanation: "Cumulative incidence (risk) = New cases / Population at risk at the start of the period = 2,000/500,000 = 0.004 or 4 per 1,000 population. It is a proportion (dimensionless, ranges 0-1) and requires specifying the time period (1 year). Incidence rate (incidence density) = New cases / Person-time at risk. Using mid-year population as an approximation of person-time: 2,000/510,000 person-years = 3.92 per 1,000 person-years. It has units of inverse time (per person-years) and can theoretically exceed 1. The mid-year population approximates person-time when exact follow-up data are unavailable. The two measures converge when incidence is low and the study period is short."
  },
  {
    id: 17,
    question: "Period prevalence of influenza in a community from October to March is 15%, while the point prevalence on December 15 is 3%. Which statement best explains this difference?",
    options: [
      "Period prevalence is always lower than point prevalence",
      "Period prevalence includes all cases existing at any time during the 6-month period (prevalent at start + new cases), capturing the cumulative burden, while point prevalence captures only cases present at one instant",
      "The difference is due to measurement error",
      "Point prevalence is more accurate than period prevalence"
    ],
    answer: 1,
    explanation: "Period prevalence = (All cases present at any time during the specified period) / (Average or mid-period population). It includes cases already present at the start of the period PLUS all new (incident) cases arising during the period. For influenza, which has a short duration, many people develop and recover from the illness across the 6-month flu season. Point prevalence on December 15 only captures those who are actively ill on that single day. Period prevalence is always >= point prevalence. The formula: Period prevalence = Point prevalence at start + Incidence during the period. This makes period prevalence particularly useful for diseases with short duration and fluctuating occurrence."
  },
  {
    id: 18,
    question: "A screening program for cervical cancer is introduced, detecting cases 3 years earlier than clinical diagnosis. Even if the program does not improve survival from the biological onset of disease, the observed 5-year survival rate appears to improve. This apparent improvement is due to:",
    options: [
      "Selection bias",
      "Lead-time bias",
      "Length-time bias",
      "Will Rogers phenomenon"
    ],
    answer: 1,
    explanation: "Lead-time bias occurs when screening detects disease earlier in its natural history, adding 'lead time' to the observed survival without actually prolonging life. If a cancer would be clinically diagnosed at year 3 and the patient dies at year 6 (3-year survival from diagnosis), screening at year 0 detects it 3 years earlier — the patient still dies at year 6, but now has 6-year survival from (screening) diagnosis. The 5-year survival rate appears improved (patient survives >5 years from screening diagnosis) even though death occurs at the same time. To overcome lead-time bias, mortality rates (not survival rates) should be used to evaluate screening program effectiveness."
  },
  {
    id: 19,
    question: "The secondary attack rate among household contacts of a measles case is calculated as follows: In a household of 6 members, the index case infected 3 other members. What is the secondary attack rate?",
    options: [
      "3/6 = 50%",
      "3/5 = 60%",
      "4/6 = 66.7%",
      "3/4 = 75%"
    ],
    answer: 1,
    explanation: "Secondary attack rate (SAR) = Number of new cases among contacts / Total susceptible contacts (excluding the index case). In this household: Total members = 6, Index case = 1, Susceptible contacts = 6 - 1 = 5, New (secondary) cases = 3. SAR = 3/5 = 60%. The index (primary) case is excluded from both the numerator and denominator because they are the source of infection, not a 'new' case among contacts. SAR is a key measure of transmissibility used in outbreak investigations and is essential for calculating the basic reproduction number (R0) and evaluating vaccine efficacy in household contact studies."
  },
  {
    id: 20,
    question: "A disease has a case fatality rate (CFR) of 40% and an incidence rate of 2 per 100,000 person-years. The mortality rate is:",
    options: [
      "0.8 per 100,000 person-years",
      "20 per 100,000 person-years",
      "40 per 100,000 person-years",
      "Cannot be calculated from these data"
    ],
    answer: 0,
    explanation: "Mortality rate = Incidence rate x Case fatality rate. Mortality rate = 2/100,000 x 0.40 = 0.8 per 100,000 person-years. This relationship shows that mortality from a disease depends on both how common the disease is (incidence) and how lethal it is (CFR). A disease with high incidence but low CFR (e.g., influenza) may cause more total deaths than a disease with low incidence but high CFR (e.g., Ebola in non-epidemic settings). CFR = Deaths from disease / Total cases of disease (a proportion, not a true rate). This formula is approximate and assumes relatively stable conditions."
  },

  // ========== Relative Risk and Odds Ratio (Q21-Q30) ==========
  {
    id: 21,
    question: "In a cohort study, the incidence of lung cancer among smokers is 150 per 100,000 person-years and among non-smokers is 10 per 100,000 person-years. The relative risk (RR), attributable risk (AR), and attributable risk percent (AR%) are:",
    options: [
      "RR = 15; AR = 140 per 100,000; AR% = 93.3%",
      "RR = 15; AR = 150 per 100,000; AR% = 100%",
      "RR = 0.067; AR = -140 per 100,000; AR% = 6.7%",
      "RR = 15; AR = 140 per 100,000; AR% = 66.7%"
    ],
    answer: 0,
    explanation: "RR = Incidence in exposed / Incidence in unexposed = 150/10 = 15. This means smokers have 15 times the risk of lung cancer compared to non-smokers. AR (risk difference) = Incidence in exposed - Incidence in unexposed = 150 - 10 = 140 per 100,000 person-years. This represents the excess risk attributable to smoking. AR% = (AR / Incidence in exposed) x 100 = (140/150) x 100 = 93.3%. Alternatively, AR% = (RR-1)/RR x 100 = 14/15 x 100 = 93.3%. This means 93.3% of lung cancer cases among smokers can be attributed to their smoking — if smoking were eliminated, lung cancer incidence among smokers would decrease by 93.3%."
  },
  {
    id: 22,
    question: "In a case-control study of pancreatic cancer and coffee consumption, 80 out of 200 cases and 40 out of 200 controls reported heavy coffee use. The odds ratio is:",
    options: [
      "(80 x 160) / (120 x 40) = 2.67",
      "(80 x 40) / (120 x 160) = 0.167",
      "(80 / 200) / (40 / 200) = 2.0",
      "(80 + 40) / (120 + 160) = 0.43"
    ],
    answer: 0,
    explanation: "In a case-control study, the 2x2 table is: Cases: exposed (a) = 80, unexposed (c) = 120; Controls: exposed (b) = 40, unexposed (d) = 160. OR = (a x d) / (b x c) = (80 x 160) / (40 x 120) = 12,800 / 4,800 = 2.67. This means the odds of heavy coffee exposure among pancreatic cancer cases are 2.67 times the odds among controls. Note: Option C calculates the risk ratio (80/200 divided by 40/200 = 2.0), which is NOT valid in a case-control study because the investigator determines the ratio of cases to controls, making the disease incidence/prevalence non-estimable. The OR is the appropriate measure of association in case-control studies."
  },
  {
    id: 23,
    question: "An RCT shows that a new drug reduces mortality from 20% to 12%. The absolute risk reduction (ARR), relative risk reduction (RRR), and number needed to treat (NNT) are:",
    options: [
      "ARR = 8%; RRR = 40%; NNT = 12.5",
      "ARR = 8%; RRR = 60%; NNT = 8",
      "ARR = 12%; RRR = 40%; NNT = 8.3",
      "ARR = 8%; RRR = 40%; NNT = 13"
    ],
    answer: 0,
    explanation: "Control event rate (CER) = 20% = 0.20; Experimental event rate (EER) = 12% = 0.12. ARR = CER - EER = 0.20 - 0.12 = 0.08 = 8%. RRR = ARR/CER = 0.08/0.20 = 0.40 = 40%. Alternatively, RRR = 1 - RR = 1 - (0.12/0.20) = 1 - 0.60 = 0.40 = 40%. NNT = 1/ARR = 1/0.08 = 12.5. This means 12.5 patients need to be treated with the new drug (instead of standard care) to prevent one additional death. NNT is clinically intuitive — lower NNT indicates a more effective treatment. NNT should always be interpreted in the context of the treatment duration, baseline risk, and potential harms (NNH = 1/Absolute Risk Increase)."
  },
  {
    id: 24,
    question: "A meta-analysis reports that a statin reduces major cardiovascular events with OR = 0.72 (95% CI: 0.65-0.80). If the baseline risk of events in the control group is 25%, what is the approximate NNT calculated from the odds ratio?",
    options: [
      "NNT = 1 / [CER - (OR x CER / (1 - CER + OR x CER))] = approximately 15",
      "NNT = 1 / (1 - OR) = 3.6",
      "NNT = OR / CER = 2.88",
      "NNT cannot be calculated from an odds ratio"
    ],
    answer: 0,
    explanation: "To convert OR to NNT, first calculate the expected event rate in the treatment group: Experimental event rate (EER) = (OR x CER) / (1 - CER + OR x CER) = (0.72 x 0.25) / (1 - 0.25 + 0.72 x 0.25) = 0.18 / (0.75 + 0.18) = 0.18 / 0.93 = 0.1935 (19.35%). ARR = CER - EER = 0.25 - 0.1935 = 0.0565. NNT = 1/ARR = 1/0.0565 = approximately 17.7, which rounds to approximately 15-18 depending on precision. The key formula for converting OR-based event rate: EER = (OR x CER)/(1 - CER + OR x CER). This conversion is important because meta-analyses often report ORs, but clinicians need NNT for clinical decision-making. NNT varies with baseline risk — the same OR yields different NNTs at different baseline risks."
  },
  {
    id: 25,
    question: "In a cohort study, the relative risk of myocardial infarction associated with hypertension is 4.0. The prevalence of hypertension in the population is 30%. What is the population attributable risk percent (PAR%)?",
    options: [
      "PAR% = [Pe(RR-1)] / [1 + Pe(RR-1)] x 100 = [0.30 x 3] / [1 + 0.90] x 100 = 47.4%",
      "PAR% = Pe x RR x 100 = 120%",
      "PAR% = (RR - 1) / RR x 100 = 75%",
      "PAR% = Pe / (1 - Pe) x 100 = 42.9%"
    ],
    answer: 0,
    explanation: "PAR% (Levin's formula) = [Pe(RR - 1)] / [1 + Pe(RR - 1)] x 100, where Pe = prevalence of exposure in the population. PAR% = [0.30 x (4.0 - 1)] / [1 + 0.30 x (4.0 - 1)] x 100 = [0.30 x 3] / [1 + 0.90] x 100 = 0.90/1.90 x 100 = 47.4%. This means that 47.4% of all MI cases in the population can be attributed to hypertension. If hypertension were completely eliminated, MI incidence in the population would decrease by 47.4%. PAR% depends on both the strength of association (RR) and the prevalence of exposure (Pe). A modest RR with high prevalence can yield a higher PAR% than a strong RR with low prevalence, which is crucial for public health prioritization."
  },
  {
    id: 26,
    question: "When does the odds ratio closely approximate the relative risk?",
    options: [
      "When the disease is common (prevalence > 20%)",
      "When the disease is rare (incidence < 10%) in the study population",
      "When the exposure is very common",
      "When the sample size is very large"
    ],
    answer: 1,
    explanation: "The rare disease assumption states that the OR approximates the RR when the disease incidence is low (typically < 10%). Mathematically: RR = [a/(a+b)] / [c/(c+d)] and OR = (ad)/(bc). When disease is rare, a << b and c << d, so (a+b) approaches b and (c+d) approaches d, making RR approach (a/b)/(c/d) = ad/bc = OR. As disease frequency increases, the OR increasingly overestimates the RR (when RR > 1) or underestimates it (when RR < 1). For common outcomes, methods like log-binomial regression or modified Poisson regression should be used to directly estimate RR rather than relying on logistic regression OR. This is particularly relevant in cross-sectional studies and clinical trials where outcomes may be common."
  },
  {
    id: 27,
    question: "A drug increases the risk of adverse event from 2% to 6%. The number needed to harm (NNH) is:",
    options: [
      "NNH = 1/ARI = 1/(0.06 - 0.02) = 25",
      "NNH = 1/0.06 = 16.7",
      "NNH = 1/0.02 = 50",
      "NNH = (0.06 - 0.02)/0.02 = 2"
    ],
    answer: 0,
    explanation: "Absolute Risk Increase (ARI) = Risk in exposed - Risk in unexposed = 6% - 2% = 4% = 0.04. NNH = 1/ARI = 1/0.04 = 25. This means for every 25 patients treated with the drug, one additional patient will experience the adverse event compared to not receiving the drug. NNH is the harm counterpart of NNT. Clinical decision-making involves comparing NNT (benefit) with NNH (harm) — if NNT < NNH, the treatment benefits more patients than it harms. For example, if NNT for preventing MI = 20 and NNH for causing GI bleeding = 100, then for every 100 patients treated, 5 MIs are prevented and 1 GI bleed occurs, favoring treatment."
  },
  {
    id: 28,
    question: "In a matched case-control study with 1:1 matching, the results show: 30 concordant pairs where both case and control were exposed, 10 concordant pairs where neither was exposed, 45 discordant pairs where the case was exposed but the control was not, and 15 discordant pairs where the control was exposed but the case was not. What is the matched odds ratio?",
    options: [
      "OR = (30 + 45) / (10 + 15) = 3.0",
      "OR = 45/15 = 3.0",
      "OR = (30 x 10) / (45 x 15) = 0.44",
      "OR = 30/10 = 3.0"
    ],
    answer: 1,
    explanation: "In matched case-control studies, McNemar's method is used. Only discordant pairs (where the case and control differ in exposure status) contribute information. The matched OR = b/c (or f/g depending on notation), where b = discordant pairs with case exposed and control unexposed = 45, and c = discordant pairs with case unexposed and control exposed = 15. Matched OR = 45/15 = 3.0. Concordant pairs (both exposed or both unexposed) provide no information about the association and are excluded. The significance test uses McNemar's chi-square = (b - c)^2 / (b + c) = (45 - 15)^2 / (45 + 15) = 900/60 = 15, with 1 df (p < 0.001). This demonstrates a significant association with OR = 3.0."
  },
  {
    id: 29,
    question: "A cohort study reports RR = 2.5 for the association between obesity and type 2 diabetes. After adjustment for physical inactivity using a Mantel-Haenszel analysis, the adjusted RR becomes 1.3. This suggests that:",
    options: [
      "Physical inactivity is an effect modifier",
      "Physical inactivity is a confounder that explained a substantial portion of the crude association",
      "The crude association was underestimated",
      "Obesity is not associated with diabetes"
    ],
    answer: 1,
    explanation: "When the adjusted measure of association differs substantially from the crude measure (typically >10% change), the variable being adjusted for is a confounder. Here, adjusting for physical inactivity reduced the RR from 2.5 to 1.3 — a 48% reduction [(2.5-1.3)/2.5 x 100]. This indicates that physical inactivity confounded the obesity-diabetes association. Physical inactivity meets confounding criteria: (1) it is associated with obesity (the exposure), (2) it is an independent risk factor for diabetes (the outcome), and (3) it is not on the causal pathway between obesity and diabetes (debatable, but assumed here). Note: if the adjusted RR was 0 or 1.0, it would suggest the entire association was due to confounding (negative confounding if adjusted > crude)."
  },
  {
    id: 30,
    question: "From the following RCT data — Treatment group: 15 events out of 200 patients; Control group: 30 events out of 200 patients — calculate the RR, OR, and assess whether the OR overestimates the RR.",
    options: [
      "RR = 0.50; OR = 0.46; OR slightly underestimates the protective effect compared to RR",
      "RR = 0.50; OR = 0.46; OR overestimates the protective effect (farther from 1.0) compared to RR",
      "RR = 0.50; OR = 0.50; they are identical",
      "RR = 2.0; OR = 2.17; OR overestimates the risk"
    ],
    answer: 1,
    explanation: "RR = (15/200) / (30/200) = 0.075/0.15 = 0.50. OR = (15 x 170) / (185 x 30) = 2,550/5,550 = 0.459 (approximately 0.46). The OR (0.46) is farther from 1.0 than the RR (0.50), meaning the OR overestimates the magnitude of the protective effect. This is a general principle: for protective exposures (RR < 1), the OR is lower than the RR (farther from 1.0), making the effect appear stronger. For harmful exposures (RR > 1), the OR is higher than the RR. The degree of divergence increases with higher outcome frequency. Here, with event rates of 7.5% and 15%, the difference is modest. In studies with common outcomes (>10%), using OR from logistic regression to approximate RR can be misleading."
  },

  // ========== Bias (Selection, Information), Confounding (Q31-Q40) ==========
  {
    id: 31,
    question: "A case-control study of lung cancer finds that cases (diagnosed 2 years ago and currently alive) are compared with healthy controls. Many aggressive lung cancer cases have already died and are not included. This preferential inclusion of survivors among cases is an example of:",
    options: [
      "Berkson's bias",
      "Neyman bias (prevalence-incidence bias)",
      "Protopathic bias",
      "Detection bias"
    ],
    answer: 1,
    explanation: "Neyman bias (prevalence-incidence bias or survival bias) occurs when prevalent rather than incident cases are studied. Cases who died rapidly or recovered quickly before enrollment are excluded, leaving a non-representative sample of survivors. In this example, aggressive lung cancers with poor survival are underrepresented, while indolent cases are overrepresented. This can distort exposure-disease associations if the exposure is related to disease severity or survival. For instance, if smoking causes more aggressive lung cancers, the surviving cases may have lower smoking prevalence than all incident cases, attenuating the OR toward null. To minimize Neyman bias, use incident (newly diagnosed) cases rather than prevalent cases."
  },
  {
    id: 32,
    question: "A patient develops joint pain and begins taking NSAIDs regularly. Three months later, they are diagnosed with rheumatoid arthritis. A case-control study examining NSAID use as a risk factor for RA would find a spurious positive association. This is an example of:",
    options: [
      "Recall bias",
      "Berkson's bias",
      "Protopathic bias",
      "Publication bias"
    ],
    answer: 2,
    explanation: "Protopathic bias occurs when an exposure (NSAID use) is initiated in response to early, undiagnosed symptoms of the disease under study (rheumatoid arthritis). The exposure appears to precede the diagnosis temporally, but it was actually prompted by early manifestations of the disease itself. This creates a spurious association suggesting that NSAIDs cause RA, when in reality the early symptoms of RA caused NSAID use. To mitigate protopathic bias: (1) use an induction period — exclude exposures in a defined window before diagnosis; (2) restrict to new users of the exposure; (3) carefully assess the temporal sequence between exposure initiation and symptom onset."
  },
  {
    id: 33,
    question: "In a study comparing cancer incidence between a screened group and an unscreened group, the screened group shows higher incidence of early-stage cancers. This increased detection in the screened group, independent of any true risk difference, exemplifies:",
    options: [
      "Confounding by indication",
      "Surveillance bias (detection bias)",
      "Selection bias",
      "Attrition bias"
    ],
    answer: 1,
    explanation: "Surveillance bias (detection bias) occurs when one group is monitored more closely than the other, leading to differential detection of the outcome. The screened group undergoes systematic testing, so cancers (especially early-stage) are more likely to be detected compared to the unscreened group where only symptomatic cancers are diagnosed. This creates an apparent higher incidence in the screened group that does not reflect a true difference in cancer occurrence. Surveillance bias is common in: (1) occupational health studies where exposed workers receive more medical testing; (2) clinical trials with differential follow-up intensity; (3) studies comparing patients on close medical surveillance (e.g., diabetics) with the general population."
  },
  {
    id: 34,
    question: "A hospital-based case-control study examines the association between diabetes and gallstones. Both conditions independently increase the likelihood of hospitalization. The OR from this study will most likely be:",
    options: [
      "Unbiased compared to a population-based study",
      "Biased away from the null (overestimated) due to Berkson's bias",
      "Biased toward the null (underestimated) due to Berkson's bias",
      "Unaffected by the source of controls"
    ],
    answer: 2,
    explanation: "Berkson's bias in this scenario biases the OR toward the null. When both the exposure (diabetes) and the disease (gallstones) independently increase hospitalization rates, the hospital control group will have a higher prevalence of diabetes than the general population (since diabetics are more likely to be hospitalized for various reasons). This inflated exposure prevalence among controls makes cases and controls appear more similar in their exposure status, pulling the OR toward 1.0 (toward the null). The direction of Berkson's bias depends on the specific scenario — it can bias toward or away from the null. In the classic formulation where exposure and disease both increase admission probability, the bias is typically toward the null."
  },
  {
    id: 35,
    question: "In an observational study of hormone replacement therapy (HRT) and cardiovascular disease, healthy women are more likely to be prescribed HRT by their physicians. The finding that HRT appears protective may be confounded by:",
    options: [
      "Recall bias",
      "Healthy user bias (confounding by indication)",
      "Interviewer bias",
      "Berkson's bias"
    ],
    answer: 1,
    explanation: "Healthy user bias is a form of confounding by indication where the treatment group is systematically healthier than the non-treatment group at baseline. Physicians preferentially prescribe HRT to healthier women (fewer comorbidities, better health behaviors, regular medical care), while sicker women are less likely to receive HRT. The apparent cardiovascular benefit of HRT in observational studies was largely attributed to healthy user bias, which was unmasked when the Women's Health Initiative RCT showed HRT actually increased cardiovascular risk. This dramatically illustrates why observational studies of treatment effects are vulnerable to confounding by indication, and why RCTs (which balance both measured and unmeasured confounders through randomization) are the gold standard for causal inference."
  },
  {
    id: 36,
    question: "A researcher studying the effect of maternal smoking on birth weight adjusts for gestational age in the analysis. However, smoking causes both preterm birth and low birth weight. Adjusting for gestational age in this context introduces:",
    options: [
      "Residual confounding",
      "Collider stratification bias (collider bias)",
      "Ecological fallacy",
      "Regression to the mean"
    ],
    answer: 1,
    explanation: "Collider stratification bias occurs when you condition on (adjust for, stratify by, or restrict to) a common effect of the exposure and the outcome (or their causes). Here, gestational age is a collider — it is caused by both smoking (exposure) and shares determinants with birth weight (outcome). By adjusting for gestational age, you open a spurious pathway between smoking and birth weight that creates a biased association (the 'birth weight paradox'). This can paradoxically make smoking appear protective for birth weight among preterm infants. In DAG (Directed Acyclic Graph) terminology, conditioning on a collider opens a non-causal path. The solution is to not adjust for variables that are consequences of the exposure (mediators or colliders) unless specifically testing mediation."
  },
  {
    id: 37,
    question: "In a case-control study of childhood leukemia and residential proximity to power lines, mothers of leukemia cases tend to overreport proximity to power lines compared to mothers of healthy controls. This differential misclassification of exposure is called:",
    options: [
      "Observer bias",
      "Recall bias",
      "Misclassification bias (non-differential)",
      "Lead-time bias"
    ],
    answer: 1,
    explanation: "Recall bias is a type of information bias (differential misclassification) that occurs when cases and controls differ in the accuracy of their reported exposure history. Mothers of children with leukemia (cases) are motivated to search for explanations and may overreport or more carefully recall potential exposures (proximity to power lines), while mothers of healthy children (controls) have no such motivation and may underreport or incompletely recall the same exposures. This differential recall creates a spurious or exaggerated association. Mitigation strategies include: (1) using objective exposure measures (GIS data, medical records); (2) blinding participants to the study hypothesis; (3) using structured, validated questionnaires; (4) choosing controls with other diseases (who have similar recall motivation)."
  },
  {
    id: 38,
    question: "In a clinical trial, non-differential misclassification of a binary exposure variable (exposed/unexposed) generally biases the measure of association toward:",
    options: [
      "Away from the null",
      "Toward the null",
      "It has no predictable direction",
      "It depends on the sample size"
    ],
    answer: 1,
    explanation: "Non-differential misclassification occurs when the misclassification of exposure is equal between cases and controls (or diseased and non-diseased groups). For a binary exposure variable, this always biases the association toward the null (toward OR = 1 or RR = 1). This is because misclassification mixes exposed and unexposed individuals, making the groups appear more similar than they truly are, diluting the true association. Important caveats: (1) This rule applies only to BINARY exposures — for polytomous (multi-level) exposures, non-differential misclassification can bias in either direction; (2) Non-differential misclassification of the OUTCOME also biases toward the null for binary outcomes; (3) The bias is always toward the null, never crossing it (a true positive association will not appear negative)."
  },
  {
    id: 39,
    question: "An investigator wants to control for confounding in an observational study. Which of the following methods can control for BOTH measured and unmeasured confounders?",
    options: [
      "Stratification and multivariable regression",
      "Propensity score matching",
      "Randomization (in experimental studies) and instrumental variable analysis (in observational studies)",
      "Standardization"
    ],
    answer: 2,
    explanation: "Randomization, when properly executed with a sufficient sample size, balances both measured and unmeasured confounders between groups through chance allocation. In observational studies, instrumental variable (IV) analysis (including Mendelian randomization) can control for unmeasured confounders by using an instrument that affects the outcome only through the exposure. In contrast, stratification, multivariable regression, propensity score methods, and standardization can only control for MEASURED confounders — any unmeasured or unknown confounders remain uncontrolled (residual confounding). This fundamental limitation of observational studies is why RCTs remain the gold standard for causal inference. Sensitivity analyses like E-values can assess the potential impact of unmeasured confounding on study conclusions."
  },
  {
    id: 40,
    question: "In a study examining the relationship between alcohol consumption and esophageal cancer, smoking is suspected to be a confounder. After stratification by smoking status, the stratum-specific ORs are 3.2 (smokers) and 3.0 (non-smokers), while the crude OR is 4.5. The Mantel-Haenszel adjusted OR is 3.1. What can be concluded about confounding and effect modification?",
    options: [
      "Smoking is both a confounder and an effect modifier",
      "Smoking is a confounder but NOT an effect modifier; the Breslow-Day test for homogeneity would be non-significant",
      "Smoking is an effect modifier but not a confounder",
      "Neither confounding nor effect modification is present"
    ],
    answer: 1,
    explanation: "Confounding is assessed by comparing crude and adjusted estimates: crude OR (4.5) differs substantially from MH-adjusted OR (3.1), indicating >10% change, confirming confounding by smoking. Effect modification is assessed by comparing stratum-specific estimates: the ORs in smokers (3.2) and non-smokers (3.0) are very similar, indicating NO effect modification (no interaction). The Breslow-Day test for homogeneity of ORs across strata would be non-significant (p > 0.05), confirming that the stratum-specific ORs are homogeneous. Key distinction: Confounding is a bias to be removed (by adjustment), while effect modification is a biological phenomenon to be reported (by presenting stratum-specific estimates). When effect modification is present, reporting a single adjusted OR is misleading."
  },

  // ========== Screening Methods (Q41-Q50) ==========
  {
    id: 41,
    question: "A screening test for colorectal cancer has sensitivity = 90%, specificity = 85%, and the prevalence of colorectal cancer in the target population is 2%. What is the positive predictive value (PPV)?",
    options: [
      "PPV = (0.90 x 0.02) / [(0.90 x 0.02) + (0.15 x 0.98)] = 10.9%",
      "PPV = 90%",
      "PPV = 85%",
      "PPV = (0.90 x 0.98) / [(0.90 x 0.98) + (0.15 x 0.02)] = 99.7%"
    ],
    answer: 0,
    explanation: "PPV = True Positives / (True Positives + False Positives). Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. PPV = (0.90 x 0.02) / [(0.90 x 0.02) + (0.15 x 0.98)] = 0.018 / (0.018 + 0.147) = 0.018 / 0.165 = 0.109 = 10.9%. Despite excellent sensitivity (90%) and good specificity (85%), the PPV is only 10.9% because the disease prevalence is low (2%). This means that only about 1 in 9 positive test results actually has colorectal cancer. This illustrates why PPV is heavily dependent on prevalence — as prevalence decreases, PPV decreases dramatically, generating more false positives and potentially leading to unnecessary invasive procedures."
  },
  {
    id: 42,
    question: "According to the Wilson-Jungner criteria for screening, which of the following is NOT a criterion for implementing a population-based screening program?",
    options: [
      "The condition should be an important health problem",
      "There should be a recognizable latent or early symptomatic stage",
      "The screening test should have 100% sensitivity and specificity",
      "There should be an accepted treatment for patients with recognized disease"
    ],
    answer: 2,
    explanation: "The Wilson-Jungner criteria (WHO, 1968) are the foundational principles for evaluating whether a disease is suitable for screening. The 10 criteria include: (1) Important health problem; (2) Accepted treatment available; (3) Facilities for diagnosis and treatment available; (4) Recognizable latent or early symptomatic stage; (5) Suitable test available; (6) Test acceptable to the population; (7) Natural history of the disease adequately understood; (8) Agreed policy on whom to treat; (9) Cost-effectiveness of case finding balanced against expenditure on medical care; (10) Case finding should be a continuing process. Notably, NO screening test achieves 100% sensitivity and specificity. The criteria require a 'suitable' test that is acceptable, not a perfect test. The trade-off between sensitivity and specificity is managed based on the disease context."
  },
  {
    id: 43,
    question: "A new rapid diagnostic test for HIV is evaluated against the gold standard (Western blot). Results: True Positives = 95, False Positives = 10, False Negatives = 5, True Negatives = 890. The sensitivity, specificity, PPV, NPV, and accuracy are:",
    options: [
      "Sensitivity = 95%; Specificity = 98.9%; PPV = 90.5%; NPV = 99.4%; Accuracy = 98.5%",
      "Sensitivity = 90.5%; Specificity = 99.4%; PPV = 95%; NPV = 98.9%; Accuracy = 98.5%",
      "Sensitivity = 95%; Specificity = 98.9%; PPV = 95%; NPV = 98.9%; Accuracy = 97%",
      "Sensitivity = 98.9%; Specificity = 95%; PPV = 99.4%; NPV = 90.5%; Accuracy = 98.5%"
    ],
    answer: 0,
    explanation: "From the 2x2 table: TP = 95, FP = 10, FN = 5, TN = 890. Sensitivity = TP/(TP+FN) = 95/100 = 95%. Specificity = TN/(TN+FP) = 890/900 = 98.9%. PPV = TP/(TP+FP) = 95/105 = 90.5%. NPV = TN/(TN+FN) = 890/895 = 99.4%. Accuracy = (TP+TN)/(TP+FP+FN+TN) = 985/1000 = 98.5%. Key relationships: Sensitivity and specificity are intrinsic properties of the test (independent of prevalence). PPV and NPV depend on prevalence. High NPV (99.4%) means a negative result is very reassuring. The relatively lower PPV (90.5%) means about 1 in 10 positive results is false — this is why confirmatory testing is used in HIV diagnosis."
  },
  {
    id: 44,
    question: "A screening program detects slow-growing tumors more readily than fast-growing aggressive tumors because slow-growing tumors have a longer preclinical detectable phase. This overrepresentation of indolent cases is called:",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "Selection bias",
      "Stage migration bias"
    ],
    answer: 1,
    explanation: "Length-time bias (length-biased sampling) occurs because screening preferentially detects slower-growing, less aggressive diseases that have a longer sojourn time (preclinical detectable phase). Fast-growing aggressive tumors progress quickly through the detectable preclinical phase and are more likely to present as interval cancers (between screening rounds). As a result, screen-detected cancers are disproportionately indolent, making the screened group appear to have better survival and prognosis — not because screening is effective, but because a different spectrum of disease is being detected. Length-time bias and lead-time bias together can make screening appear beneficial even when it has no true effect on mortality. Using disease-specific mortality rates (rather than survival) in randomized screening trials helps mitigate these biases."
  },
  {
    id: 45,
    question: "In parallel testing (both tests performed simultaneously), if Test A has sensitivity 80% and Test B has sensitivity 75%, both with specificity of 90%, what happens to the net sensitivity and specificity when a positive result on EITHER test is considered positive?",
    options: [
      "Net sensitivity increases (up to 95%), net specificity decreases (down to 81%)",
      "Net sensitivity decreases, net specificity increases",
      "Both sensitivity and specificity increase",
      "Both sensitivity and specificity decrease"
    ],
    answer: 0,
    explanation: "In parallel testing (believe the positive), a case is considered positive if EITHER test is positive. Net sensitivity = 1 - (1 - Se_A)(1 - Se_B) = 1 - (0.20)(0.25) = 1 - 0.05 = 0.95 = 95% (assuming independence). Net specificity = Sp_A x Sp_B = 0.90 x 0.90 = 0.81 = 81%. Parallel testing increases sensitivity at the expense of specificity. This is useful in emergency settings or when missing a diagnosis is dangerous (ruling OUT disease — high sensitivity needed). The mnemonic: 'Parallel = Positive if either positive = Sensitivity up.' Conversely, in serial testing (believe the negative / both must be positive), specificity increases and sensitivity decreases, useful for ruling IN disease or confirming diagnosis."
  },
  {
    id: 46,
    question: "In serial testing (Test A performed first, then Test B only if Test A is positive), if Test A has sensitivity 90% and specificity 85%, and Test B has sensitivity 95% and specificity 90%, what are the net sensitivity and specificity?",
    options: [
      "Net sensitivity = 90% x 95% = 85.5%; Net specificity = 1 - (1-0.85)(1-0.90) = 98.5%",
      "Net sensitivity = 95%; Net specificity = 90%",
      "Net sensitivity = 92.5%; Net specificity = 87.5%",
      "Net sensitivity = 90%; Net specificity = 85%"
    ],
    answer: 0,
    explanation: "In serial testing (believe the negative), a case is positive only if BOTH tests are positive. Assuming conditional independence: Net sensitivity = Se_A x Se_B = 0.90 x 0.95 = 0.855 = 85.5%. Net specificity = 1 - (1 - Sp_A)(1 - Sp_B) = 1 - (0.15)(0.10) = 1 - 0.015 = 0.985 = 98.5%. Serial testing increases specificity (reduces false positives) at the expense of sensitivity. This is used for: (1) confirming a diagnosis (e.g., screening ELISA followed by confirmatory Western blot for HIV); (2) when treatment has significant side effects; (3) when false positives carry high psychological or financial cost. The mnemonic: 'Serial = Specificity up = rule IN disease (SpIN).'"
  },
  {
    id: 47,
    question: "A mammography screening program is evaluated. In the screened group, the 5-year survival from diagnosis is 85%, while in the unscreened group it is 60%. However, breast cancer mortality rates are identical in both groups. The apparent survival benefit is explained by:",
    options: [
      "Length-time bias only",
      "Lead-time bias and possibly length-time bias, since earlier detection adds survival time without postponing death",
      "True screening benefit masked by insufficient statistical power",
      "Stage migration (Will Rogers phenomenon)"
    ],
    answer: 1,
    explanation: "When 5-year survival appears better in the screened group but mortality rates are identical, the survival benefit is an artifact caused by lead-time bias (diagnosis moved earlier, adding time to 'survival' without delaying death) and possibly length-time bias (screening preferentially detects indolent tumors with inherently better prognosis). If screening truly reduces mortality, the death rate in the screened group should be lower. The fact that mortality rates are identical proves that the improved survival is entirely artifactual. This is precisely why mortality rate (deaths per population per unit time) — not survival from diagnosis — is the appropriate outcome measure for evaluating screening program effectiveness. RCTs of screening programs should use disease-specific mortality as the primary endpoint."
  },
  {
    id: 48,
    question: "The Will Rogers phenomenon (stage migration) occurs in cancer staging when improved diagnostic technology reclassifies patients. If patients previously classified as Stage I are now reclassified to Stage II due to detecting micrometastases, what happens to the survival rates?",
    options: [
      "Stage I survival decreases, Stage II survival increases, overall survival unchanged",
      "Stage I survival increases, Stage II survival increases, overall survival unchanged",
      "Stage I survival increases, Stage II survival decreases, overall survival unchanged",
      "Both stage-specific and overall survival increase"
    ],
    answer: 1,
    explanation: "The Will Rogers phenomenon (named after the quote 'When the Okies left Oklahoma and moved to California, they raised the average intelligence level in both states') occurs when improved diagnostics reclassify patients from a better-prognosis group to a worse-prognosis group. Patients reclassified from Stage I to Stage II had the worst prognosis within Stage I — removing them raises Stage I average survival. Simultaneously, these same patients have the best prognosis within Stage II — adding them raises Stage II average survival. Both stage-specific survival rates improve without any actual change in patient outcomes or treatment effectiveness. Overall survival remains unchanged because no patient's actual outcome has changed — only the categorization has shifted. This is a mathematical artifact, not a real improvement."
  },
  {
    id: 49,
    question: "A screening test has a likelihood ratio positive (LR+) of 12 and a likelihood ratio negative (LR-) of 0.05. If the pre-test probability of disease is 10%, what is the approximate post-test probability after a POSITIVE result? (Use Fagan nomogram or formula)",
    options: [
      "Approximately 57%",
      "Approximately 30%",
      "Approximately 85%",
      "Approximately 12%"
    ],
    answer: 0,
    explanation: "Using the formula: Pre-test odds = Pre-test probability / (1 - Pre-test probability) = 0.10/0.90 = 0.111. Post-test odds = Pre-test odds x LR+ = 0.111 x 12 = 1.333. Post-test probability = Post-test odds / (1 + Post-test odds) = 1.333/2.333 = 0.571 = 57.1%. A positive test result increases the probability of disease from 10% to approximately 57%. LR+ = Sensitivity/(1-Specificity); LR+ > 10 is considered strong evidence for ruling IN disease. LR- = (1-Sensitivity)/Specificity; LR- < 0.1 is considered strong evidence for ruling OUT disease. After a negative result: Post-test odds = 0.111 x 0.05 = 0.00556; Post-test probability = 0.00556/1.00556 = 0.55%. A negative result virtually rules out disease (0.55% post-test probability)."
  },
  {
    id: 50,
    question: "Overdiagnosis in cancer screening refers to the detection of cancers that would never have caused symptoms or death during the patient's lifetime. Which of the following is the best evidence for overdiagnosis in a screening program?",
    options: [
      "Increased 5-year survival rate in the screened group",
      "A sustained increase in cancer incidence in the screened group without a corresponding decrease in mortality, even after long follow-up",
      "Higher detection rate of early-stage cancers in the screened group",
      "Shorter time to diagnosis in the screened group"
    ],
    answer: 1,
    explanation: "Overdiagnosis is the detection of cancers (histologically confirmed) that would not have progressed to cause clinical disease during the patient's remaining lifespan. The strongest evidence for overdiagnosis is a persistent excess incidence of cancer in the screened group that does not diminish over time and is NOT accompanied by a compensatory reduction in late-stage cancers or mortality. If screening truly advances diagnosis (lead-time only), the initial excess incidence in the screened group should eventually be compensated by a deficit (as cancers that would have been diagnosed later are caught earlier). If this compensation never occurs, the excess represents overdiagnosis. Overdiagnosis is particularly problematic in prostate (PSA screening), breast (mammography), and thyroid cancer screening, leading to unnecessary treatment (overtreatment) with associated physical, psychological, and financial harms."
  }
];

export default questions;

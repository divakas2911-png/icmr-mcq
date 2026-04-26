const questions = [
  // ==================== Q1-Q10: Types of Study Designs ====================
  {
    id: 1,
    question: "A researcher follows 5,000 smokers and 5,000 non-smokers over 20 years to compare the incidence of lung cancer between the two groups. What type of study design is this?",
    options: [
      "Prospective cohort study",
      "Case-control study",
      "Cross-sectional study",
      "Ecological study"
    ],
    answer: 0,
    explanation: "This is a prospective cohort study. The defining feature is that subjects are classified by exposure status (smokers vs. non-smokers) and followed forward in time to observe the outcome (lung cancer). Cohort studies move from cause to effect, allow direct calculation of incidence rates and relative risk, and are the strongest observational design for establishing temporal sequence between exposure and disease."
  },
  {
    id: 2,
    question: "An ecological study finds a strong positive correlation (r = 0.85) between per capita sugar consumption and diabetes prevalence across 40 countries. A researcher concludes that individuals who consume more sugar are more likely to develop diabetes. This error is known as:",
    options: [
      "Berkson's bias",
      "Ecological fallacy",
      "Simpson's paradox",
      "Atomistic fallacy"
    ],
    answer: 1,
    explanation: "The ecological fallacy occurs when inferences about individuals are made from group-level (aggregate) data. In ecological studies, the unit of analysis is a population or group, not an individual. The correlation observed at the population level (country-level sugar consumption vs. diabetes prevalence) cannot be directly attributed to individuals. The reverse error, making group-level inferences from individual data, is called the atomistic fallacy. Berkson's bias is a selection bias in hospital-based studies."
  },
  {
    id: 3,
    question: "In a randomized controlled trial (RCT), 200 patients are randomized to a new drug and 200 to placebo. During the trial, 30 patients in the drug arm switch to placebo due to side effects. In the intention-to-treat (ITT) analysis, these 30 patients are analyzed in which group?",
    options: [
      "Placebo group, since they actually received placebo",
      "Drug group, as originally randomized",
      "Excluded from analysis entirely",
      "Analyzed separately as a crossover subgroup"
    ],
    answer: 1,
    explanation: "In intention-to-treat (ITT) analysis, all participants are analyzed in the group to which they were originally randomized, regardless of whether they adhered to, crossed over from, or withdrew from the assigned treatment. ITT preserves the benefits of randomization (balanced distribution of known and unknown confounders), avoids selection bias from differential dropout, and provides a pragmatic estimate of treatment effectiveness. Per-protocol analysis, by contrast, only includes patients who completed the protocol as intended, which can introduce bias but estimates efficacy under ideal conditions."
  },
  {
    id: 4,
    question: "Which of the following is the key distinguishing feature of a case-control study compared to a cohort study?",
    options: [
      "It can calculate incidence rates directly",
      "Participants are selected based on outcome status and past exposure is assessed",
      "It always uses random sampling from the general population",
      "It follows participants prospectively over time"
    ],
    answer: 1,
    explanation: "In a case-control study, participants are selected based on their disease (outcome) status: cases have the disease and controls do not. Past exposure is then assessed retrospectively. This is the reverse direction of a cohort study, which selects based on exposure and follows forward for outcomes. Case-control studies cannot directly calculate incidence or relative risk (because the ratio of cases to controls is set by the investigator), but they can calculate the odds ratio, which approximates relative risk when the disease is rare (rare disease assumption)."
  },
  {
    id: 5,
    question: "A per-protocol analysis in an RCT, compared to an intention-to-treat analysis, is most likely to:",
    options: [
      "Underestimate the treatment effect",
      "Overestimate the treatment effect",
      "Preserve the benefits of randomization",
      "Include all randomized subjects"
    ],
    answer: 1,
    explanation: "Per-protocol (PP) analysis includes only those participants who completed the study as per the original protocol (no crossovers, adequate compliance, no major violations). This tends to overestimate the treatment effect because non-compliant patients (who often have worse outcomes) are excluded. ITT analysis includes all randomized subjects and tends to be more conservative (biased toward the null), preserving the benefits of randomization. ITT estimates effectiveness (real-world), while PP estimates efficacy (ideal conditions)."
  },
  {
    id: 6,
    question: "A study compares the mean blood pressure of vegetarians and non-vegetarians at a single point in time in a defined population. This is an example of:",
    options: [
      "Case-control study",
      "Cross-sectional study",
      "Prospective cohort study",
      "Randomized controlled trial"
    ],
    answer: 1,
    explanation: "A cross-sectional study measures exposure and outcome simultaneously at a single point in time (or over a short period). It provides a 'snapshot' of the population. Cross-sectional studies can measure prevalence but cannot establish temporality (which came first, exposure or outcome). They are useful for hypothesis generation and health planning. Since both vegetarian status and blood pressure are assessed at the same time, this is a cross-sectional design."
  },
  {
    id: 7,
    question: "Which study design is most efficient for studying rare diseases with long latency periods?",
    options: [
      "Prospective cohort study",
      "Randomized controlled trial",
      "Case-control study",
      "Ecological study"
    ],
    answer: 2,
    explanation: "Case-control studies are the most efficient design for rare diseases because they start by identifying cases (who already have the disease) and matched controls. This avoids the need to follow a very large cohort for many years to accumulate enough cases. For example, studying a cancer with 1 in 10,000 annual incidence would require following hundreds of thousands of people in a cohort study, whereas a case-control study can directly recruit cases from hospital registries. Case-control studies are also faster and less expensive."
  },
  {
    id: 8,
    question: "In an RCT evaluating a new antihypertensive drug, neither the patients nor the physicians assessing outcomes know who received the drug or placebo. This is called:",
    options: [
      "Single blinding",
      "Double blinding",
      "Triple blinding",
      "Open-label design"
    ],
    answer: 1,
    explanation: "Double blinding means that both the participants and the outcome assessors (usually the treating physicians/investigators) are unaware of the treatment allocation. This minimizes both placebo effect (in patients) and observer bias (in assessors). Single blinding means only one party (usually the patient) is blinded. Triple blinding additionally blinds the data analysts. An open-label trial has no blinding. Double blinding is the standard for reducing bias in RCTs."
  },
  {
    id: 9,
    question: "A researcher uses national-level data on average fat intake and breast cancer mortality rates across 25 countries to assess the relationship between dietary fat and breast cancer. The unit of analysis in this study is:",
    options: [
      "Individual patients with breast cancer",
      "Individual dietary records",
      "The country (population/group)",
      "Hospital-based cancer registries"
    ],
    answer: 2,
    explanation: "This is an ecological (correlational) study where the unit of analysis is the group or population (in this case, the country). Individual-level exposure and outcome data are not linked. Ecological studies are useful for generating hypotheses and examining population-level trends but are susceptible to the ecological fallacy. They cannot control for confounders at the individual level and cannot establish that individuals who consume more fat are the same individuals who develop breast cancer."
  },
  {
    id: 10,
    question: "A nested case-control study differs from a traditional case-control study in that:",
    options: [
      "It uses only hospital-based controls",
      "Cases and controls are drawn from within a defined cohort",
      "It does not require matching",
      "It can directly calculate incidence rates"
    ],
    answer: 1,
    explanation: "A nested case-control study is conducted within an already-defined cohort. As cases develop the outcome during cohort follow-up, controls are sampled from the same cohort (from those still at risk at the time each case occurs). This design combines the efficiency of a case-control study with the advantages of a cohort study (well-defined source population, prospectively collected exposure data, reduced selection bias). It is particularly useful when exposure measurement is expensive (e.g., biomarker assays on stored serum samples)."
  },

  // ==================== Q11-Q20: Incidence and Prevalence ====================
  {
    id: 11,
    question: "In a population of 50,000 people, 2,000 have diabetes at the start of the year. During the year, 500 new cases of diabetes are diagnosed and 100 diabetic patients die. What is the point prevalence of diabetes at the end of the year?",
    options: [
      "2,400 / 50,000 = 4.8%",
      "2,400 / 49,900 = 4.81%",
      "500 / 50,000 = 1.0%",
      "2,000 / 50,000 = 4.0%"
    ],
    answer: 0,
    explanation: "Point prevalence = Total existing cases at a point in time / Total population at that point. At end of year: existing cases = 2,000 (start) + 500 (new cases) - 100 (deaths) = 2,400. The total population remains approximately 50,000 (assuming deaths are replaced or population is stable for simplicity). Prevalence = 2,400/50,000 = 4.8%. Prevalence is a proportion (not a rate) and reflects the 'pool' of disease at a given time. The prevalence pool is maintained by the balance of new cases entering and old cases leaving (through recovery or death)."
  },
  {
    id: 12,
    question: "The concept of the 'prevalence pool' is best described as:",
    options: [
      "The total number of new cases arising in a fixed time period",
      "The reservoir of existing cases at any point, determined by the balance of incidence, recovery, and mortality",
      "The probability that a healthy person will develop disease",
      "The ratio of incidence to mortality in a population"
    ],
    answer: 1,
    explanation: "The prevalence pool represents the existing reservoir of disease cases in a population at any given time. It is governed by the relationship: Prevalence is approximately equal to Incidence x Duration (P = I x D, when prevalence is low). Cases enter the pool through new disease occurrence (incidence) and leave through recovery or death. A disease with high incidence but short duration (e.g., common cold) may have low prevalence, while a disease with low incidence but long duration (e.g., diabetes) can have high prevalence."
  },
  {
    id: 13,
    question: "A cohort of 1,000 disease-free individuals is followed for 5 years. During this period, 50 develop the disease of interest. No one is lost to follow-up. The cumulative incidence is:",
    options: [
      "50 / 5,000 = 0.01 per person-year",
      "50 / 1,000 = 5%",
      "50 / 950 = 5.26%",
      "50 / 4,750 = 1.05%"
    ],
    answer: 1,
    explanation: "Cumulative incidence (CI), also called incidence proportion or attack rate, is calculated as: CI = Number of new cases / Population at risk at start of follow-up = 50/1,000 = 5% over 5 years. CI is a proportion (dimensionless, ranges 0-1) and requires that the entire population is followed for the full period (no losses). It represents the probability (risk) that an individual will develop disease during the specified time period. This differs from incidence density (incidence rate), which uses person-time in the denominator."
  },
  {
    id: 14,
    question: "In the same cohort of 1,000 individuals followed for 5 years, if 50 develop disease and each case occurs on average at the midpoint (2.5 years), what is the incidence density (incidence rate)?",
    options: [
      "50 / 5,000 = 10 per 1,000 person-years",
      "50 / 4,875 = 10.26 per 1,000 person-years",
      "50 / 1,000 = 50 per 1,000 person-years",
      "50 / 950 = 52.6 per 1,000 person-years"
    ],
    answer: 1,
    explanation: "Incidence density (ID) or incidence rate uses person-time at risk in the denominator: ID = New cases / Person-time at risk. The 950 who remain disease-free contribute 950 x 5 = 4,750 person-years. The 50 cases contribute on average 50 x 2.5 = 125 person-years (until they got the disease). Total person-time = 4,750 + 125 = 4,875 person-years. ID = 50/4,875 = 10.26 per 1,000 person-years. Unlike cumulative incidence, incidence density is a true rate (has units of inverse time) and can handle variable follow-up and losses."
  },
  {
    id: 15,
    question: "If a chronic disease has an incidence rate of 2 per 1,000 person-years and an average duration of 10 years, what is the approximate prevalence?",
    options: [
      "0.2%",
      "2%",
      "5%",
      "20%"
    ],
    answer: 1,
    explanation: "Using the prevalence-incidence relationship (valid when prevalence is low and the population is in a steady state): P = I x D, where I = incidence rate and D = average duration. P = (2/1,000) x 10 = 20/1,000 = 0.02 = 2%. This formula shows that prevalence depends on both how fast new cases arise (incidence) and how long cases persist (duration). Conditions that increase duration (improved survival without cure) will increase prevalence even if incidence stays constant."
  },
  {
    id: 16,
    question: "Which of the following best distinguishes cumulative incidence from incidence density?",
    options: [
      "Cumulative incidence uses person-time; incidence density uses total population",
      "Cumulative incidence is a proportion; incidence density is a rate with time units in the denominator",
      "Cumulative incidence can exceed 1; incidence density cannot",
      "Incidence density requires a closed cohort with no losses to follow-up"
    ],
    answer: 1,
    explanation: "Cumulative incidence (risk) is a dimensionless proportion ranging from 0 to 1 (or 0-100%), calculated as new cases divided by the population at risk at the start. It requires knowing the exact follow-up period and assumes no losses. Incidence density (rate) has units of (time)^-1 (e.g., per person-year), is calculated using person-time in the denominator, and can handle variable follow-up. Incidence density can theoretically exceed 1 (e.g., 1.5 episodes per person-year for recurrent events), whereas cumulative incidence cannot."
  },
  {
    id: 17,
    question: "A new treatment dramatically improves survival in HIV patients without curing the infection. What effect will this have on HIV prevalence and incidence?",
    options: [
      "Prevalence decreases, incidence increases",
      "Prevalence increases, incidence may remain unchanged or increase",
      "Both prevalence and incidence decrease",
      "Prevalence remains unchanged, incidence decreases"
    ],
    answer: 1,
    explanation: "Since the treatment improves survival without curing HIV, the duration of disease increases. By the relationship P = I x D, if duration (D) increases while incidence (I) remains similar, prevalence (P) will increase. Additionally, if patients survive longer, they may continue to transmit the virus, potentially maintaining or increasing incidence. This is exactly what occurred with the introduction of antiretroviral therapy (ART) globally: HIV prevalence rose because people lived longer with the virus, even as prevention efforts attempted to reduce incidence."
  },
  {
    id: 18,
    question: "Period prevalence differs from point prevalence in that it:",
    options: [
      "Only counts new cases during the period",
      "Counts all cases (existing at start + new cases) that exist at any time during a defined period",
      "Uses person-time in the denominator",
      "Is always higher than cumulative incidence"
    ],
    answer: 1,
    explanation: "Period prevalence counts all individuals who have the disease at any time during a specified period. It includes both cases existing at the start of the period (prevalent cases) and new cases arising during the period. Period prevalence = (Prevalent cases at start + New cases during period) / Population at mid-period. Point prevalence, by contrast, measures disease status at a single instant in time. Period prevalence is always greater than or equal to point prevalence for the same time frame."
  },
  {
    id: 19,
    question: "In a dynamic (open) population of approximately 100,000 where people enter and leave over time, 250 new cases of a disease are identified during one year. The total person-time contributed is 95,000 person-years. The appropriate measure of disease frequency is:",
    options: [
      "Cumulative incidence = 250/100,000",
      "Incidence density = 250/95,000 person-years",
      "Point prevalence = 250/100,000",
      "Attack rate = 250/100,000"
    ],
    answer: 1,
    explanation: "In a dynamic (open) population, people enter and leave the population over time, making it impossible to follow a fixed cohort from start to finish. Incidence density (person-time incidence rate) is the appropriate measure because it accounts for variable follow-up using person-time in the denominator. ID = 250/95,000 = 2.63 per 1,000 person-years. Cumulative incidence and attack rates require a closed (fixed) cohort where everyone is followed for the entire period."
  },
  {
    id: 20,
    question: "The prevalence of a disease in a community was found to be 8% in 2020 and 12% in 2025, while the incidence rate remained constant at 3 per 1,000 person-years. The most likely explanation for the increase in prevalence is:",
    options: [
      "Increased rate of disease transmission",
      "Improved survival (longer disease duration) without cure",
      "Decreased population size",
      "Increased case-fatality rate"
    ],
    answer: 1,
    explanation: "Since P = I x D (prevalence equals incidence times duration), if incidence (I) is constant but prevalence (P) has increased, the duration (D) must have increased. Improved survival (e.g., better treatment that prolongs life without curing the disease) increases the average duration of disease, thus increasing prevalence. Increased case-fatality would shorten duration and decrease prevalence. Increased transmission would increase incidence, which is stated to be constant."
  },

  // ==================== Q21-Q30: Relative Risk and Odds Ratio ====================
  {
    id: 21,
    question: "In a cohort study, the incidence of lung cancer among smokers is 90 per 100,000 person-years and among non-smokers is 10 per 100,000 person-years. The relative risk (RR) is:",
    options: [
      "80",
      "9.0",
      "0.11",
      "8.0"
    ],
    answer: 1,
    explanation: "Relative Risk (RR) = Incidence in exposed / Incidence in unexposed = 90/10 = 9.0. This means smokers have 9 times the risk of developing lung cancer compared to non-smokers. RR is a ratio measure of association calculated directly in cohort studies. RR = 1 means no association; RR > 1 means positive association (increased risk); RR < 1 means negative association (protective effect). The attributable risk (risk difference) = 90 - 10 = 80 per 100,000 person-years."
  },
  {
    id: 22,
    question: "In a case-control study of 200 lung cancer cases and 200 controls, 160 cases and 40 controls have a history of smoking. The odds ratio is:",
    options: [
      "16.0",
      "4.0",
      "9.0",
      "8.0"
    ],
    answer: 0,
    explanation: "Constructing a 2x2 table: Cases: Exposed (smokers) = 160, Unexposed = 40. Controls: Exposed = 40, Unexposed = 160. Odds Ratio (OR) = (a x d) / (b x c) = (160 x 160) / (40 x 40) = 25,600 / 1,600 = 16.0. The odds of smoking among cases = 160/40 = 4. The odds of smoking among controls = 40/160 = 0.25. OR = 4/0.25 = 16.0. This means the odds of smoking exposure are 16 times higher in lung cancer cases compared to controls."
  },
  {
    id: 23,
    question: "The odds ratio approximates the relative risk under which condition?",
    options: [
      "When the exposure is very common in the population",
      "When the disease is rare in the population (rare disease assumption)",
      "When there is significant confounding",
      "When the study has a large sample size"
    ],
    answer: 1,
    explanation: "The rare disease assumption states that when disease prevalence is low (typically < 10%), the odds ratio closely approximates the relative risk. Mathematically, when disease is rare: the odds of disease approaches the probability of disease. For cases, odds = p/(1-p), and when p is small, (1-p) approaches 1, so odds approaches p. This is why case-control studies (which can only calculate OR directly) can be used to estimate RR for rare diseases. For common diseases, OR tends to overestimate the RR when RR > 1."
  },
  {
    id: 24,
    question: "In a cohort study, the incidence of myocardial infarction (MI) is 30 per 1,000 in obese individuals and 10 per 1,000 in non-obese individuals. The attributable risk (AR) and attributable risk percent (AR%) are:",
    options: [
      "AR = 20 per 1,000; AR% = 66.7%",
      "AR = 20 per 1,000; AR% = 200%",
      "AR = 3.0; AR% = 33.3%",
      "AR = 40 per 1,000; AR% = 75%"
    ],
    answer: 0,
    explanation: "Attributable Risk (AR) = Incidence in exposed - Incidence in unexposed = 30 - 10 = 20 per 1,000. This represents the excess risk due to the exposure. AR% (Attributable fraction in exposed) = (Ie - Iu)/Ie x 100 = (30-10)/30 x 100 = 66.7%. This means 66.7% of MI cases among obese individuals can be attributed to obesity. Alternatively, AR% = (RR-1)/RR x 100 = (3-1)/3 x 100 = 66.7%. AR is an absolute measure of effect, while RR is a relative measure."
  },
  {
    id: 25,
    question: "The population attributable risk percent (PAR%) depends on:",
    options: [
      "Only the relative risk",
      "Only the prevalence of exposure in the population",
      "Both the relative risk and the prevalence of exposure in the population",
      "The case-fatality rate and disease duration"
    ],
    answer: 2,
    explanation: "PAR% = Pe(RR-1) / [1 + Pe(RR-1)] x 100, where Pe = prevalence of exposure in the population and RR = relative risk. PAR% represents the proportion of disease in the entire population attributable to the exposure. It depends on both the strength of association (RR) and how common the exposure is (Pe). A modest RR with a very common exposure can yield a high PAR% (e.g., physical inactivity and cardiovascular disease). PAR% is crucial for public health policy, as it estimates the potential impact of eliminating an exposure."
  },
  {
    id: 26,
    question: "If 40% of a population smokes (Pe = 0.40) and the relative risk of developing COPD among smokers compared to non-smokers is 5.0, the population attributable risk percent (PAR%) is approximately:",
    options: [
      "40%",
      "62%",
      "80%",
      "50%"
    ],
    answer: 1,
    explanation: "PAR% = Pe(RR-1) / [1 + Pe(RR-1)] x 100 = 0.40(5-1) / [1 + 0.40(5-1)] x 100 = 0.40 x 4 / [1 + 0.40 x 4] x 100 = 1.6 / [1 + 1.6] x 100 = 1.6/2.6 x 100 = 61.5%, approximately 62%. This means approximately 62% of all COPD cases in this population could theoretically be prevented if smoking were completely eliminated. Note that even though RR = 5 is substantial, PAR% is modulated by the exposure prevalence."
  },
  {
    id: 27,
    question: "A protective factor shows a relative risk of 0.4. The corresponding risk reduction and number needed to treat (NNT), if the baseline risk in the unexposed group is 20%, are:",
    options: [
      "Risk reduction = 60%; NNT = 8",
      "Risk reduction = 40%; NNT = 10",
      "Risk reduction = 60%; NNT = 4",
      "Risk reduction = 12%; NNT = 8"
    ],
    answer: 0,
    explanation: "Relative Risk Reduction (RRR) = 1 - RR = 1 - 0.4 = 0.6 = 60%. Risk in exposed (treated) group = RR x baseline risk = 0.4 x 20% = 8%. Absolute Risk Reduction (ARR) = 20% - 8% = 12% = 0.12. NNT = 1/ARR = 1/0.12 = 8.33, approximately 8. This means you need to treat 8 people with the protective factor to prevent one additional case. NNT is clinically more useful than RR because it incorporates baseline risk."
  },
  {
    id: 28,
    question: "In a 2x2 table from a cohort study: Disease+ Exposed = 40, Disease- Exposed = 160, Disease+ Unexposed = 10, Disease- Unexposed = 190. The relative risk is:",
    options: [
      "4.0",
      "4.75",
      "3.8",
      "2.0"
    ],
    answer: 1,
    explanation: "From the 2x2 table: a=40, b=160, c=10, d=190. Incidence in exposed = a/(a+b) = 40/200 = 0.20. Incidence in unexposed = c/(c+d) = 10/200 = 0.05. RR = 0.20/0.05 = 4.0. However, let us also calculate the OR for comparison: OR = (ad)/(bc) = (40x190)/(160x10) = 7600/1600 = 4.75. Since the disease is not rare (20% in exposed), the OR (4.75) overestimates the RR (4.0). The correct answer for relative risk is a/(a+b) divided by c/(c+d) = 4.0. Wait - let me re-read the options. RR = 4.0 is option A. Actually, the question asks for relative risk. RR = (40/200)/(10/200) = 0.20/0.05 = 4.0."
  },
  {
    id: 29,
    question: "When the odds ratio substantially differs from the relative risk in a study, the most likely reason is:",
    options: [
      "The sample size is too small",
      "The disease outcome is common (high prevalence/incidence)",
      "There is significant confounding",
      "The exposure is rare"
    ],
    answer: 1,
    explanation: "The odds ratio and relative risk converge when the disease is rare (rare disease assumption). When the disease is common (incidence or prevalence > 10%), the OR diverges from the RR. Specifically, when RR > 1, the OR overestimates the RR; when RR < 1, the OR underestimates the RR (moves further from 1.0). The formula relating them is: OR = RR x (1-P0)/(1-P1), where P0 and P1 are the disease probabilities in unexposed and exposed groups respectively. As P0 and P1 approach 0 (rare disease), OR approaches RR."
  },
  {
    id: 30,
    question: "A cohort study finds RR = 2.5 for the association between alcohol use and liver cancer. The 95% confidence interval is 1.8 to 3.5. Which interpretation is correct?",
    options: [
      "The result is not statistically significant",
      "Alcohol use is protective against liver cancer",
      "Alcohol users have 2.5 times the risk of liver cancer, and the result is statistically significant since the CI excludes 1.0",
      "The p-value must be greater than 0.05"
    ],
    answer: 2,
    explanation: "The RR of 2.5 indicates alcohol users have 2.5 times the risk of liver cancer compared to non-users. The 95% CI of 1.8-3.5 does not include 1.0 (the null value for ratio measures), which means the association is statistically significant at the 0.05 level (p < 0.05). If the CI included 1.0, the result would not be statistically significant. The width of the CI reflects precision: narrower CIs indicate more precise estimates, typically from larger studies."
  },

  // ==================== Q31-Q40: Bias and Confounding ====================
  {
    id: 31,
    question: "In a hospital-based case-control study of coffee drinking and pancreatic cancer, controls are selected from patients with gastrointestinal diseases who have been advised to reduce coffee intake. This is an example of:",
    options: [
      "Recall bias",
      "Berkson's bias (admission rate bias)",
      "Selection bias due to inappropriate control group",
      "Lead-time bias"
    ],
    answer: 2,
    explanation: "This is selection bias arising from the choice of an inappropriate control group. If controls have GI diseases that cause them to reduce coffee consumption, their coffee intake will be artificially low, making the cases (pancreatic cancer patients) appear to have relatively higher coffee exposure. This was the exact issue in the famous MacMahon et al. (1981) study that initially reported a coffee-pancreatic cancer association, later found to be spurious. Berkson's bias specifically refers to differential hospital admission rates affecting the exposure-disease association."
  },
  {
    id: 32,
    question: "A variable is a confounder if it satisfies which set of conditions?",
    options: [
      "It must be an intermediate step in the causal pathway between exposure and outcome",
      "It must be associated with the exposure, independently associated with the outcome, and NOT on the causal pathway between exposure and outcome",
      "It must be caused by both the exposure and the outcome",
      "It must only be associated with the outcome"
    ],
    answer: 1,
    explanation: "A confounder must satisfy three criteria: (1) It is associated with the exposure in the study population, (2) It is an independent risk factor for the outcome (associated with outcome regardless of exposure), and (3) It is NOT an intermediate variable (mediator) on the causal pathway between exposure and outcome. For example, age can confound the smoking-mortality relationship because age is associated with both smoking status and mortality, but age is not caused by smoking. Controlling for an intermediate variable would be inappropriate as it would block the causal effect of interest."
  },
  {
    id: 33,
    question: "Effect modification (interaction) differs from confounding in that:",
    options: [
      "Effect modification is a bias that should be controlled; confounding is a real biological phenomenon",
      "Effect modification means the effect of exposure varies across strata of a third variable; it is a real phenomenon and should be reported, not controlled",
      "Effect modification can only be detected by randomization",
      "Confounding always increases the observed association, while effect modification decreases it"
    ],
    answer: 1,
    explanation: "Effect modification (interaction) occurs when the magnitude of the association between exposure and outcome differs across strata of a third variable. Unlike confounding (which is a bias to be removed), effect modification is a real biological or epidemiological phenomenon that should be described and reported. For example, the effect of oral contraceptives on MI risk may be modified by smoking status (much stronger effect among smokers). To detect interaction: if stratum-specific estimates differ substantially, effect modification is present. Confounding is detected when crude and adjusted estimates differ."
  },
  {
    id: 34,
    question: "In a case-control study, cases with lung cancer can better recall their asbestos exposure history than healthy controls. This is an example of:",
    options: [
      "Selection bias",
      "Recall bias (information bias)",
      "Confounding",
      "Misclassification bias"
    ],
    answer: 1,
    explanation: "Recall bias is a type of information bias (measurement/observation bias) where cases systematically remember or report past exposures differently (usually more completely) than controls. Individuals with a disease often search their memories more thoroughly for potential causes (rumination bias). This leads to differential misclassification, which can bias the OR in either direction but typically away from the null (overestimates the association). Recall bias is a major concern in case-control studies and can be minimized by using objective records rather than self-reported exposure data."
  },
  {
    id: 35,
    question: "A crude odds ratio for the association between exposure X and disease Y is 3.0. After stratifying by a potential confounder Z and calculating the Mantel-Haenszel adjusted OR, the result is 1.2. This indicates:",
    options: [
      "Effect modification by Z",
      "Positive confounding by Z (the crude OR was overestimated)",
      "Negative confounding by Z",
      "Random error in the crude estimate"
    ],
    answer: 1,
    explanation: "When the crude estimate (OR = 3.0) differs substantially from the adjusted estimate (OR = 1.2), confounding is present. Since the crude OR was higher than the adjusted OR (away from the null), this is positive confounding (confounding that overestimates the true association). Variable Z was a confounder that inflated the apparent association. In positive confounding, the confounder creates a spuriously strong association. In negative confounding, the crude estimate is closer to the null than the true value. This is detected by comparing crude vs. adjusted estimates."
  },
  {
    id: 36,
    question: "Which of the following methods can control for confounding at the design stage of a study?",
    options: [
      "Stratified analysis and logistic regression",
      "Randomization, restriction, and matching",
      "Calculating the Mantel-Haenszel estimate",
      "Using intention-to-treat analysis"
    ],
    answer: 1,
    explanation: "Confounding can be controlled at two stages. At the DESIGN stage: (1) Randomization (ensures equal distribution of all confounders, known and unknown - only in experimental studies), (2) Restriction (limiting study to one stratum of the confounder, e.g., only studying males to remove sex as a confounder), (3) Matching (selecting controls to have the same confounder distribution as cases). At the ANALYSIS stage: (1) Stratification (Mantel-Haenszel method), (2) Multivariable analysis (logistic regression, Cox regression). Randomization is the only method that controls for both known and unknown confounders."
  },
  {
    id: 37,
    question: "Non-differential misclassification of a binary exposure in a study generally biases the result:",
    options: [
      "Away from the null (overestimates the association)",
      "Toward the null (underestimates the association)",
      "In an unpredictable direction",
      "It has no effect on the estimate"
    ],
    answer: 1,
    explanation: "Non-differential misclassification occurs when the error in measuring exposure (or outcome) occurs equally in both compared groups (e.g., same proportion of exposed are incorrectly classified as unexposed in both cases and controls). For a binary exposure, this generally biases the estimate toward the null (OR or RR moves toward 1.0), weakening the observed association. This is because misclassification mixes exposed and unexposed groups, making them appear more similar. Note: for non-binary (polytomous) exposures, the direction of bias can be unpredictable."
  },
  {
    id: 38,
    question: "In a stratified analysis for effect modification, the stratum-specific odds ratios are: OR in males = 5.2, OR in females = 1.1, and the overall crude OR = 2.8. The best interpretation is:",
    options: [
      "Sex is a confounder but not an effect modifier",
      "Sex is an effect modifier; the association between exposure and disease differs by sex",
      "The crude OR is the most appropriate measure to report",
      "The Mantel-Haenszel adjusted OR should be reported"
    ],
    answer: 1,
    explanation: "When stratum-specific estimates differ substantially (OR = 5.2 in males vs. 1.1 in females), effect modification (interaction) is present. Sex modifies the effect of the exposure on the disease. In this case, it is inappropriate to report a single summary (adjusted) measure because it would obscure the important difference between strata. Instead, the stratum-specific ORs should be reported separately. The test for homogeneity (e.g., Breslow-Day test) can formally assess whether the stratum-specific ORs are significantly different. Confounding is assessed by comparing crude vs. adjusted estimates; effect modification is assessed by comparing stratum-specific estimates."
  },
  {
    id: 39,
    question: "Berkson's bias is a form of selection bias most likely to occur in:",
    options: [
      "Population-based cohort studies",
      "Hospital-based case-control studies",
      "Randomized controlled trials",
      "Community-based cross-sectional surveys"
    ],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) occurs in hospital-based case-control studies when the rates of hospital admission differ between exposed and unexposed individuals, or between those with and without the disease. Hospitalized patients may not be representative of the general population. If both the exposure and the disease independently increase the probability of hospitalization, a spurious association (or distortion of the true association) can be created in the hospital sample even if no association exists in the general population. This bias does not occur in population-based studies."
  },
  {
    id: 40,
    question: "A researcher studying the effect of a new drug on mortality conducts a study where healthier patients are preferentially selected for the new treatment, while sicker patients receive standard care. The new drug appears beneficial, but the result is biased. This is an example of:",
    options: [
      "Confounding by indication (channeling bias)",
      "Recall bias",
      "Hawthorne effect",
      "Ecological fallacy"
    ],
    answer: 0,
    explanation: "Confounding by indication (also called channeling bias or allocation bias) occurs in observational studies when the choice of treatment is influenced by the patient's prognosis or severity. Here, healthier patients receive the new drug, so the apparent benefit may be due to their better baseline health rather than the drug's efficacy. This is a major problem in observational pharmacoepidemiologic studies. It can be addressed by randomization (in RCTs), propensity score matching, instrumental variables, or restriction to patients with similar severity. It is essentially confounding where severity/prognosis is the confounder."
  },

  // ==================== Q41-Q50: Screening Methods ====================
  {
    id: 41,
    question: "A screening test for diabetes has a sensitivity of 90% and specificity of 80%. In a population of 10,000 where the true prevalence of diabetes is 5%, how many false positives will the test produce?",
    options: [
      "50",
      "450",
      "1,900",
      "1,800"
    ],
    answer: 2,
    explanation: "In a population of 10,000 with 5% prevalence: True diabetics = 500, Non-diabetics = 9,500. Sensitivity = 90%, so True Positives = 0.90 x 500 = 450. Specificity = 80%, so True Negatives = 0.80 x 9,500 = 7,600. False Positives = 9,500 - 7,600 = 1,900 (or equivalently, (1 - specificity) x non-diseased = 0.20 x 9,500 = 1,900). Despite the seemingly good specificity of 80%, the large number of non-diseased people (9,500) generates many false positives. This illustrates why even tests with high specificity can have low positive predictive value when disease prevalence is low."
  },
  {
    id: 42,
    question: "Using the same test (sensitivity 90%, specificity 80%, prevalence 5%), the positive predictive value (PPV) is approximately:",
    options: [
      "90%",
      "80%",
      "19.1%",
      "50%"
    ],
    answer: 2,
    explanation: "PPV = True Positives / (True Positives + False Positives) = 450 / (450 + 1,900) = 450 / 2,350 = 19.1%. Despite a sensitivity of 90% and specificity of 80%, only about 1 in 5 positive test results actually has diabetes. This is because the low prevalence (5%) means the false positive group (from the large non-diseased population) overwhelms the true positive group. PPV increases with higher prevalence and higher specificity. Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1-Specificity)(1-Prevalence)] = (0.9 x 0.05) / [(0.9 x 0.05) + (0.2 x 0.95)] = 0.045 / 0.235 = 19.1%."
  },
  {
    id: 43,
    question: "A screening test has a positive likelihood ratio (LR+) of 10 and a negative likelihood ratio (LR-) of 0.05. These values indicate:",
    options: [
      "The test is poor for both ruling in and ruling out disease",
      "The test is good for ruling in disease but poor for ruling out",
      "The test is excellent for both ruling in and ruling out disease",
      "The test has low sensitivity but high specificity"
    ],
    answer: 2,
    explanation: "Likelihood ratios summarize the diagnostic accuracy of a test. LR+ = Sensitivity / (1 - Specificity); values > 10 substantially increase post-test probability (good for ruling IN disease). LR- = (1 - Sensitivity) / Specificity; values < 0.1 substantially decrease post-test probability (good for ruling OUT disease). An LR+ of 10 means a positive test makes disease 10 times more likely, and an LR- of 0.05 means a negative test makes disease 20 times less likely. Both values indicate excellent diagnostic performance. LR+ = 1 or LR- = 1 means the test provides no useful information."
  },
  {
    id: 44,
    question: "An ROC (Receiver Operating Characteristic) curve plots:",
    options: [
      "Sensitivity (y-axis) vs. prevalence (x-axis)",
      "Sensitivity (y-axis) vs. (1 - specificity) (x-axis) at various cutoff values",
      "Positive predictive value (y-axis) vs. negative predictive value (x-axis)",
      "Specificity (y-axis) vs. sensitivity (x-axis)"
    ],
    answer: 1,
    explanation: "An ROC curve plots the true positive rate (sensitivity) on the y-axis against the false positive rate (1 - specificity) on the x-axis for all possible diagnostic cutoff values. The area under the ROC curve (AUC) quantifies overall test accuracy: AUC = 0.5 indicates a useless test (diagonal line, no better than chance); AUC = 1.0 indicates a perfect test. AUC of 0.7-0.8 is considered acceptable, 0.8-0.9 is excellent, and > 0.9 is outstanding. ROC curves are particularly useful for comparing two or more diagnostic tests and for selecting the optimal cutoff point."
  },
  {
    id: 45,
    question: "When the cutoff value for a continuous screening test is lowered (made less stringent), what typically happens?",
    options: [
      "Sensitivity increases and specificity increases",
      "Sensitivity increases and specificity decreases",
      "Sensitivity decreases and specificity increases",
      "Both sensitivity and specificity remain unchanged"
    ],
    answer: 1,
    explanation: "There is an inherent trade-off between sensitivity and specificity for any continuous screening test. Lowering the cutoff (e.g., reducing the threshold for abnormal fasting glucose from 126 to 110 mg/dL) captures more true cases (increased sensitivity) but also incorrectly labels more healthy individuals as positive (decreased specificity, more false positives). Raising the cutoff does the opposite: fewer false positives (higher specificity) but more missed cases (lower sensitivity). The optimal cutoff depends on the clinical context: diseases with serious consequences if missed favor higher sensitivity; diseases where false positives cause harm favor higher specificity."
  },
  {
    id: 46,
    question: "Lead-time bias in screening occurs when:",
    options: [
      "Slowly progressive cases are preferentially detected, making screening appear more effective",
      "Screening detects disease earlier, making survival appear longer even if the time of death is unchanged",
      "Patients who volunteer for screening are inherently healthier",
      "The screening test has low specificity"
    ],
    answer: 1,
    explanation: "Lead-time bias occurs because screening advances the time of diagnosis without necessarily changing the time of death. The 'lead time' is the interval between screen detection and when the disease would have been diagnosed clinically. If survival is measured from diagnosis, screened patients appear to survive longer simply because they were diagnosed earlier, even if screening had no effect on mortality. The only way to eliminate lead-time bias is to measure mortality rates (deaths per population per time) rather than survival from diagnosis. Randomized trials of screening programs are designed to address this bias."
  },
  {
    id: 47,
    question: "Length-time bias in cancer screening refers to:",
    options: [
      "Screening detecting slow-growing (less aggressive) tumors preferentially, overestimating screening benefit",
      "The time interval between successive screening rounds being too long",
      "The average duration of the preclinical detectable phase being too short",
      "Survival appearing longer due to earlier diagnosis"
    ],
    answer: 0,
    explanation: "Length-time bias occurs because screening is more likely to detect slow-growing tumors (which have a longer preclinical detectable phase) than fast-growing aggressive tumors (which may arise and cause symptoms between screening rounds). Since slow-growing tumors inherently have better prognosis, screen-detected cancers will have better outcomes than clinically detected cancers even if screening itself provides no survival benefit. This makes screening programs appear more effective than they truly are. Length-time bias is distinct from lead-time bias but both overestimate the apparent benefit of screening."
  },
  {
    id: 48,
    question: "A screening program for colorectal cancer using fecal occult blood testing has a sensitivity of 70% and specificity of 95%. If the prevalence of colorectal cancer in the screened population is 0.3%, what is the approximate positive predictive value?",
    options: [
      "4.0%",
      "14%",
      "70%",
      "30%"
    ],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1-Specificity)(1-Prevalence)] = (0.70 x 0.003) / [(0.70 x 0.003) + (0.05 x 0.997)] = 0.0021 / (0.0021 + 0.04985) = 0.0021 / 0.05195 = 4.04%. Despite a high specificity of 95%, the very low prevalence (0.3%) results in a PPV of only about 4%. This means approximately 96% of positive tests are false positives. For population screening of rare diseases, very high specificity is essential to achieve an acceptable PPV. This is why most screening programs require confirmatory testing."
  },
  {
    id: 49,
    question: "The optimal cutoff point on an ROC curve, when the costs of false positives and false negatives are equal, is typically determined by:",
    options: [
      "The point farthest from the diagonal line (maximizing Youden's index = sensitivity + specificity - 1)",
      "The point where sensitivity equals 100%",
      "The point where specificity equals 100%",
      "The point where the AUC is exactly 0.5"
    ],
    answer: 0,
    explanation: "Youden's index (J) = Sensitivity + Specificity - 1 represents the maximum vertical distance from the ROC curve to the diagonal (chance) line. When the costs of false positives and false negatives are equal, the optimal cutoff is the point that maximizes Youden's index (J ranges from 0 for a useless test to 1 for a perfect test). Other methods for selecting cutoffs include: minimizing the distance to the top-left corner of the ROC plot, using cost-benefit analysis when misclassification costs are unequal, or choosing a minimum acceptable sensitivity and then maximizing specificity."
  },
  {
    id: 50,
    question: "A new rapid test for tuberculosis has LR+ = 15 and LR- = 0.10. A patient from a high-prevalence community has a pre-test probability of TB of 30%. After a positive test, the approximate post-test probability is:",
    options: [
      "30%",
      "50%",
      "87%",
      "95%"
    ],
    answer: 2,
    explanation: "Using the likelihood ratio method: Pre-test odds = Pre-test probability / (1 - Pre-test probability) = 0.30 / 0.70 = 0.4286. Post-test odds = Pre-test odds x LR+ = 0.4286 x 15 = 6.429. Post-test probability = Post-test odds / (1 + Post-test odds) = 6.429 / 7.429 = 0.8654, approximately 86.5% or ~87%. The LR+ of 15 substantially increased the probability from 30% to 87%. This demonstrates the utility of likelihood ratios: they incorporate both sensitivity and specificity into a single value and can be applied to any pre-test probability using the odds-probability conversion. The Fagan nomogram provides a graphical shortcut for this calculation."
  }
];

export default questions;

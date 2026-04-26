const questions = [
  {
    id: 1,
    question: "A researcher wants to compare the mean blood pressure of three groups of patients (diabetic, hypertensive, and healthy controls). Which test is most appropriate?",
    options: ["Paired t-test", "Chi-square test", "One-way ANOVA", "Mann-Whitney U test"],
    answer: 2,
    explanation: "One-way ANOVA is used to compare means across three or more independent groups. A t-test compares only two groups. Chi-square is for categorical data. Mann-Whitney U is a non-parametric alternative for two groups."
  },
  {
    id: 2,
    question: "In a clinical trial, 200 patients were randomized to drug A and placebo. After 6 months, 30 out of 100 in the drug group and 50 out of 100 in the placebo group developed the disease. What is the Relative Risk Reduction (RRR)?",
    options: ["20%", "40%", "60%", "30%"],
    answer: 1,
    explanation: "RRR = (CER - EER)/CER = (0.50 - 0.30)/0.50 = 0.20/0.50 = 0.40 or 40%. CER (Control Event Rate) = 50/100 = 0.50, EER (Experimental Event Rate) = 30/100 = 0.30."
  },
  {
    id: 3,
    question: "A screening test for HIV has sensitivity of 99% and specificity of 95%. In a population with 1% prevalence, what is the approximate positive predictive value?",
    options: ["16.7%", "50%", "83.3%", "95%"],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity × Prevalence) / [(Sensitivity × Prevalence) + ((1-Specificity) × (1-Prevalence))] = (0.99 × 0.01) / [(0.99 × 0.01) + (0.05 × 0.99)] = 0.0099 / (0.0099 + 0.0495) = 0.0099/0.0594 ≈ 16.7%. Low prevalence dramatically reduces PPV even with excellent test characteristics."
  },
  {
    id: 4,
    question: "A study reports an odds ratio of 3.5 (95% CI: 0.8–15.2) for the association between smoking and oral cancer. The correct interpretation is:",
    options: ["Smoking significantly increases risk of oral cancer by 3.5 times", "The association is statistically significant at p < 0.05", "The association is not statistically significant as the CI includes 1", "The study has adequate power to detect the association"],
    answer: 2,
    explanation: "When the 95% confidence interval for an odds ratio crosses 1 (the null value), the result is not statistically significant at the 0.05 level. Here CI is 0.8–15.2 which includes 1, so we cannot reject the null hypothesis."
  },
  {
    id: 5,
    question: "In a cohort study following 5,000 smokers and 5,000 non-smokers for 10 years, 200 smokers and 50 non-smokers developed lung cancer. The attributable risk is:",
    options: ["0.03 per year", "0.003 per year", "4.0", "0.15"],
    answer: 1,
    explanation: "Attributable Risk (AR) = Incidence in exposed - Incidence in unexposed = (200/5000)/10 - (50/5000)/10 = 0.004 - 0.001 = 0.003 per person-year. This represents the excess risk attributable to smoking."
  },
  {
    id: 6,
    question: "A researcher finds that the correlation coefficient between age and systolic BP is r = 0.70. What percentage of variation in systolic BP is explained by age?",
    options: ["70%", "49%", "30%", "7%"],
    answer: 1,
    explanation: "The coefficient of determination (r²) gives the proportion of variance explained. r² = (0.70)² = 0.49 or 49%. This means 49% of the variation in systolic BP can be explained by age."
  },
  {
    id: 7,
    question: "A researcher increases sample size from 100 to 400. What happens to the standard error of the mean?",
    options: ["Reduced to one-quarter", "Reduced to one-half", "Remains the same", "Doubles"],
    answer: 1,
    explanation: "Standard error = SD/√n. When n increases from 100 to 400, SE changes by a factor of √100/√400 = 10/20 = 1/2. So SE is reduced to half, not one-quarter. Quadrupling the sample size halves the standard error."
  },
  {
    id: 8,
    question: "In a 2×2 table for a diagnostic test, the cell representing true negatives is:",
    options: ["Diseased persons with positive test", "Non-diseased persons with positive test", "Diseased persons with negative test", "Non-diseased persons with negative test"],
    answer: 3,
    explanation: "True negatives are non-diseased persons who correctly test negative. In a 2×2 table: True Positive = diseased + positive test, False Positive = non-diseased + positive test, False Negative = diseased + negative test, True Negative = non-diseased + negative test."
  },
  {
    id: 9,
    question: "A hospital-based case-control study on risk factors for myocardial infarction is most susceptible to which bias?",
    options: ["Lead time bias", "Berkson's bias", "Length bias", "Attrition bias"],
    answer: 1,
    explanation: "Berkson's bias (admission rate bias) is specific to hospital-based case-control studies. It occurs because hospital admission rates differ for cases and controls, and for those with and without the exposure, distorting the apparent association. Lead time and length bias affect screening studies. Attrition bias affects cohort studies."
  },
  {
    id: 10,
    question: "The Number Needed to Treat (NNT) is 20. This means:",
    options: ["20 patients need to be treated to prevent one adverse event", "20% of patients will benefit from treatment", "The treatment is 20 times better than placebo", "1 in 20 patients will have side effects"],
    answer: 0,
    explanation: "NNT is the reciprocal of the Absolute Risk Reduction (ARR). NNT = 1/ARR. An NNT of 20 means 20 patients need to be treated with the intervention for one additional patient to benefit compared to the control group."
  },
  {
    id: 11,
    question: "A study with a p-value of 0.03 and a power of 60%. Which statement is correct?",
    options: ["The result is both statistically significant and the study had adequate power", "The result is statistically significant but the study was underpowered", "The result is not statistically significant", "Power cannot be assessed after the study is completed"],
    answer: 1,
    explanation: "p = 0.03 < 0.05, so the result is statistically significant. However, conventional adequate power is ≥ 80%. At 60% power, there was a 40% chance of missing a true effect (Type II error), making the study underpowered."
  },
  {
    id: 12,
    question: "In survival analysis, the Kaplan-Meier method is preferred over the life table method when:",
    options: ["Sample size is very large", "Exact time of event is known for each subject", "Events occur only at fixed intervals", "There is no censoring in the data"],
    answer: 1,
    explanation: "Kaplan-Meier (product-limit) method calculates survival probability at each individual event time, making it ideal when exact event times are known. Life table method groups data into fixed intervals and is used when exact times are unavailable or sample is very large."
  },
  {
    id: 13,
    question: "A researcher performs 20 independent statistical tests at α = 0.05. The expected number of false positives (Type I errors) is:",
    options: ["0", "1", "5", "20"],
    answer: 1,
    explanation: "Expected false positives = number of tests × α = 20 × 0.05 = 1. This is the multiple comparisons problem. With 20 tests at α = 0.05, we expect 1 false positive by chance alone, which is why corrections like Bonferroni are applied."
  },
  {
    id: 14,
    question: "In a randomized controlled trial, intention-to-treat analysis means:",
    options: ["Only patients who completed the treatment are analyzed", "Patients are analyzed in the group to which they were randomized regardless of compliance", "Treatment is modified based on patient intention", "Analysis is done only for patients who intended to participate"],
    answer: 1,
    explanation: "Intention-to-treat (ITT) analysis includes all randomized participants in their originally assigned groups, regardless of adherence, protocol deviations, or withdrawal. This preserves randomization and provides a conservative estimate of treatment effect."
  },
  {
    id: 15,
    question: "The median survival time from a Kaplan-Meier curve is the time at which the survival probability is:",
    options: ["0.25", "0.50", "0.75", "0.95"],
    answer: 1,
    explanation: "Median survival is the time point at which the survival function S(t) = 0.50, meaning 50% of subjects have experienced the event. It is preferred over mean survival when data are skewed or censored."
  },
  {
    id: 16,
    question: "A case-control study reports an odds ratio of 1.0. This indicates:",
    options: ["The exposure is protective", "There is no association between exposure and disease", "The exposure doubles the risk", "The study is invalid"],
    answer: 1,
    explanation: "An odds ratio of 1.0 means the odds of exposure among cases equals the odds among controls — no association exists. OR > 1 suggests increased risk, OR < 1 suggests protection."
  },
  {
    id: 17,
    question: "Which measure of central tendency is least affected by extreme outliers?",
    options: ["Mean", "Median", "Mode", "Range"],
    answer: 1,
    explanation: "The median is the middle value and is resistant to outliers. The mean is pulled toward extreme values. Mode is the most frequent value (not directly affected by outliers but may not represent center well). Range is not a measure of central tendency."
  },
  {
    id: 18,
    question: "A clinical trial uses a crossover design. The main advantage is:",
    options: ["Eliminates carryover effect", "Each patient serves as their own control", "No washout period needed", "Blinding is not necessary"],
    answer: 1,
    explanation: "In a crossover design, each subject receives both treatments in sequence, serving as their own control. This reduces inter-subject variability and requires fewer subjects. The main concerns are carryover effects (requiring washout periods) and period effects."
  },
  {
    id: 19,
    question: "In a normally distributed population with mean 100 and SD 15, approximately what percentage of values fall between 70 and 130?",
    options: ["68%", "85%", "95%", "99.7%"],
    answer: 2,
    explanation: "70 to 130 represents mean ± 2SD (100 ± 30). By the empirical rule: 68% within ±1SD, 95% within ±2SD, 99.7% within ±3SD. So approximately 95% of values fall between 70 and 130."
  },
  {
    id: 20,
    question: "A researcher calculates the Pearson correlation between height and weight as r = 0.85. If height is converted from cm to inches, the correlation will:",
    options: ["Increase", "Decrease", "Remain the same", "Become negative"],
    answer: 2,
    explanation: "Pearson correlation is unitless and invariant to linear transformations of the data (change of scale or origin). Converting cm to inches is a linear transformation (multiply by a constant), so r remains unchanged at 0.85."
  },
  {
    id: 21,
    question: "In a meta-analysis, the I² statistic is 85%. This indicates:",
    options: ["High homogeneity among studies", "85% of studies show positive results", "High heterogeneity — 85% of variability is due to between-study differences", "The overall effect size is 0.85"],
    answer: 2,
    explanation: "I² quantifies the percentage of total variability due to heterogeneity rather than chance. I² = 85% indicates high heterogeneity. Guidelines: <25% low, 25-50% moderate, 50-75% substantial, >75% considerable heterogeneity."
  },
  {
    id: 22,
    question: "A disease has prevalence of 10%. A test with 90% sensitivity and 90% specificity is applied. The negative predictive value is approximately:",
    options: ["50%", "75%", "90%", "99%"],
    answer: 3,
    explanation: "NPV = (Specificity × (1-Prevalence)) / [(Specificity × (1-Prevalence)) + ((1-Sensitivity) × Prevalence)] = (0.90 × 0.90) / [(0.90 × 0.90) + (0.10 × 0.10)] = 0.81 / (0.81 + 0.01) = 0.81/0.82 ≈ 98.8% ≈ 99%. When prevalence is low, NPV is high."
  },
  {
    id: 23,
    question: "Which of the following is a Type II error?",
    options: ["Rejecting a true null hypothesis", "Failing to reject a false null hypothesis", "Rejecting a false null hypothesis", "Accepting a false alternative hypothesis"],
    answer: 1,
    explanation: "Type II error (β error) = failing to reject a false null hypothesis (missing a real effect). Type I error (α error) = rejecting a true null hypothesis (false positive). Power = 1 - β = probability of correctly rejecting a false null."
  },
  {
    id: 24,
    question: "In logistic regression, the dependent variable is:",
    options: ["Continuous", "Binary/dichotomous", "Ordinal only", "Ratio scale only"],
    answer: 1,
    explanation: "Logistic regression models the probability of a binary outcome (e.g., disease yes/no). It uses the logit link function. For ordinal outcomes, ordinal logistic regression is used. Linear regression is for continuous dependent variables."
  },
  {
    id: 25,
    question: "A funnel plot in meta-analysis is used to detect:",
    options: ["Heterogeneity", "Publication bias", "Confounding", "Effect modification"],
    answer: 1,
    explanation: "A funnel plot plots study effect size against study precision (or sample size). Asymmetry suggests publication bias — small studies with non-significant results are less likely to be published, creating a gap in the plot."
  },
  {
    id: 26,
    question: "A researcher observes that the incidence of lung cancer is higher among coffee drinkers. However, after adjusting for smoking, the association disappears. Smoking is a:",
    options: ["Effect modifier", "Confounder", "Mediator", "Collider"],
    answer: 1,
    explanation: "Smoking is a confounder because it is associated with both coffee drinking (exposure) and lung cancer (outcome), and is not on the causal pathway. Adjustment removes the confounding, making the crude association disappear. An effect modifier would change the magnitude of association across strata, not eliminate it."
  },
  {
    id: 27,
    question: "The Bonferroni correction for multiple comparisons with 10 tests at overall α = 0.05 would set the individual significance level at:",
    options: ["0.05", "0.005", "0.01", "0.50"],
    answer: 1,
    explanation: "Bonferroni correction divides α by the number of tests: 0.05/10 = 0.005. Each individual test must achieve p < 0.005 to be considered significant. This is conservative but controls the family-wise error rate."
  },
  {
    id: 28,
    question: "In a study, the hazard ratio for death comparing drug A to placebo is 0.65 (95% CI: 0.45–0.90). The correct interpretation is:",
    options: ["Drug A increases the hazard of death by 35%", "Drug A reduces the hazard of death by 65%", "Drug A reduces the hazard of death by 35%, and this is statistically significant", "Drug A has no effect on survival"],
    answer: 2,
    explanation: "HR = 0.65 means the hazard of death in the drug group is 0.65 times that of placebo, i.e., a 35% reduction (1 - 0.65 = 0.35). The 95% CI (0.45–0.90) does not include 1, so it is statistically significant."
  },
  {
    id: 29,
    question: "Which sampling method ensures every possible sample of size n has an equal probability of being selected?",
    options: ["Stratified random sampling", "Systematic sampling", "Simple random sampling", "Cluster sampling"],
    answer: 2,
    explanation: "Simple random sampling (SRS) ensures every possible sample of size n from the population has an equal probability of selection. Stratified sampling divides into strata first. Systematic selects every kth element. Cluster samples groups, not individuals."
  },
  {
    id: 30,
    question: "A researcher wants to study a rare disease (prevalence 0.1%). Which study design is most efficient?",
    options: ["Cross-sectional study", "Prospective cohort study", "Case-control study", "Randomized controlled trial"],
    answer: 2,
    explanation: "Case-control studies are most efficient for rare diseases. Starting from cases (who already have the disease) and matching with controls avoids the need to follow large populations. Cohort studies would require enormous samples to find enough cases."
  },
  {
    id: 31,
    question: "The kappa statistic measures:",
    options: ["Correlation between two continuous variables", "Agreement between two raters beyond chance", "Sensitivity of a diagnostic test", "Strength of association in a cohort study"],
    answer: 1,
    explanation: "Cohen's kappa (κ) measures inter-rater agreement for categorical items, correcting for agreement expected by chance. κ = 0 means agreement equals chance, κ = 1 means perfect agreement. κ < 0 means worse than chance."
  },
  {
    id: 32,
    question: "In a ROC curve analysis, a test with AUC = 0.50 indicates:",
    options: ["Perfect discrimination", "Good discrimination", "No discrimination (equivalent to chance)", "Moderate discrimination"],
    answer: 2,
    explanation: "AUC (Area Under the ROC Curve) of 0.50 means the test performs no better than random chance (diagonal line). AUC = 1.0 is perfect. Guidelines: 0.5-0.6 fail, 0.6-0.7 poor, 0.7-0.8 fair, 0.8-0.9 good, >0.9 excellent."
  },
  {
    id: 33,
    question: "Which of the following distributions is used to model rare events in a fixed interval?",
    options: ["Normal distribution", "Binomial distribution", "Poisson distribution", "Exponential distribution"],
    answer: 2,
    explanation: "The Poisson distribution models the number of rare events occurring in a fixed interval of time or space, when events occur independently at a constant average rate. It is characterized by a single parameter λ (mean = variance)."
  },
  {
    id: 34,
    question: "A study of 50 paired observations (before and after treatment BP) should use:",
    options: ["Independent samples t-test", "Paired t-test", "Chi-square test", "One-way ANOVA"],
    answer: 1,
    explanation: "Paired t-test is used when comparing two related measurements from the same subjects (before-after design). The independent t-test is for unrelated groups. Chi-square is for categorical data. ANOVA is for ≥3 groups."
  },
  {
    id: 35,
    question: "In a population of 10,000, a disease has incidence rate of 5 per 1,000 person-years. How many new cases are expected in one year?",
    options: ["5", "50", "500", "5,000"],
    answer: 1,
    explanation: "Incidence rate = 5 per 1,000 person-years. For 10,000 persons in 1 year = 10,000 person-years. New cases = 5/1,000 × 10,000 = 50 new cases expected."
  },
  {
    id: 36,
    question: "The standard deviation of the sampling distribution of means is called:",
    options: ["Standard deviation", "Standard error", "Variance", "Coefficient of variation"],
    answer: 1,
    explanation: "The standard error of the mean (SEM) is the standard deviation of the sampling distribution of the sample mean. SEM = SD/√n. It decreases with increasing sample size and quantifies precision of the sample mean estimate."
  },
  {
    id: 37,
    question: "A 95% confidence interval for a mean difference is (2.5, 8.3). Which statement is correct?",
    options: ["There is a 95% probability that the true mean difference lies in this interval", "If we repeated the study many times, 95% of such intervals would contain the true mean difference", "The p-value is > 0.05", "The mean difference is not statistically significant"],
    answer: 1,
    explanation: "The frequentist interpretation: if we repeated the experiment many times, 95% of the constructed intervals would contain the true parameter. Since the interval (2.5, 8.3) does not include 0, the difference is statistically significant (p < 0.05)."
  },
  {
    id: 38,
    question: "In a matched case-control study with 1:1 matching, the appropriate test is:",
    options: ["Chi-square test", "McNemar's test", "Fisher's exact test", "Independent t-test"],
    answer: 1,
    explanation: "McNemar's test is used for matched or paired dichotomous data. In 1:1 matched case-control studies, it tests the significance using discordant pairs only. Chi-square and Fisher's exact are for unmatched data."
  },
  {
    id: 39,
    question: "Which of the following is NOT an assumption of the Chi-square test?",
    options: ["Observations are independent", "Expected frequency in each cell should be ≥ 5", "Data should be normally distributed", "Sample size should be adequate"],
    answer: 2,
    explanation: "Chi-square test does not assume normality — it is a non-parametric test for categorical data. Its assumptions are: independent observations, adequate expected cell frequencies (≥5), and mutually exclusive categories."
  },
  {
    id: 40,
    question: "In a clinical trial, the absolute risk reduction is 5%. The NNT is:",
    options: ["5", "10", "20", "50"],
    answer: 2,
    explanation: "NNT = 1/ARR = 1/0.05 = 20. This means 20 patients need to be treated to prevent one adverse event. NNT is a clinically meaningful measure that helps assess the practical impact of an intervention."
  },
  {
    id: 41,
    question: "A researcher finds a statistically significant result with a very large sample size but a very small effect size. This suggests:",
    options: ["The finding is clinically important", "Statistical significance does not imply clinical significance", "The study is underpowered", "The null hypothesis is true"],
    answer: 1,
    explanation: "With very large samples, even trivially small effects can achieve statistical significance. Clinical significance depends on the magnitude of the effect, not just the p-value. A statistically significant but tiny effect may have no practical importance."
  },
  {
    id: 42,
    question: "The sensitivity of a diagnostic test is 80% and specificity is 90%. If prevalence increases from 5% to 50%, what happens to the positive predictive value?",
    options: ["Decreases", "Increases", "Remains the same", "Cannot be determined"],
    answer: 1,
    explanation: "PPV increases with increasing prevalence (when sensitivity and specificity are held constant). At 5% prevalence, PPV ≈ 30%. At 50% prevalence, PPV ≈ 89%. Higher prevalence means more true positives relative to false positives."
  },
  {
    id: 43,
    question: "The Mann-Whitney U test is the non-parametric equivalent of:",
    options: ["Paired t-test", "Independent samples t-test", "One-way ANOVA", "Chi-square test"],
    answer: 1,
    explanation: "Mann-Whitney U test is the non-parametric alternative to the independent samples t-test. It compares two independent groups using ranks rather than actual values. The non-parametric equivalent of the paired t-test is the Wilcoxon signed-rank test."
  },
  {
    id: 44,
    question: "In stratified analysis, if the crude odds ratio differs substantially from the Mantel-Haenszel adjusted odds ratio, it suggests:",
    options: ["Effect modification", "Confounding", "Random error", "Selection bias"],
    answer: 1,
    explanation: "When the crude OR differs from the adjusted (MH) OR, it indicates confounding by the stratification variable. The MH method pools stratum-specific estimates to provide a summary OR adjusted for the confounder. Effect modification is indicated when stratum-specific ORs differ from each other."
  },
  {
    id: 45,
    question: "A study reports a likelihood ratio positive (LR+) of 10. This means:",
    options: ["The disease is 10 times more common in this population", "A positive result is 10 times more likely in diseased than non-diseased persons", "The sensitivity is 10 times the specificity", "The test is 10% accurate"],
    answer: 1,
    explanation: "LR+ = Sensitivity / (1-Specificity). An LR+ of 10 means a positive test result is 10 times more likely to occur in someone with the disease than without. LR+ > 10 is considered strong evidence for ruling in a diagnosis."
  },
  {
    id: 46,
    question: "In a cluster randomized trial, the intra-cluster correlation coefficient (ICC) is 0.05. This means:",
    options: ["5% of total variance is due to between-cluster differences", "Clustering has no effect on sample size", "Within-cluster correlation is 0.95", "The design effect is 0.05"],
    answer: 0,
    explanation: "ICC represents the proportion of total variance attributable to between-cluster differences. ICC = 0.05 means 5% of variance is between clusters. Even small ICCs require inflation of sample size via the design effect = 1 + (m-1) × ICC, where m is cluster size."
  },
  {
    id: 47,
    question: "A forest plot in meta-analysis shows all individual study confidence intervals overlapping the line of no effect except the pooled estimate. This suggests:",
    options: ["Each study is non-significant, but the combined effect is significant", "All studies are significant", "There is high heterogeneity", "The meta-analysis is flawed"],
    answer: 0,
    explanation: "Individual studies may lack power to detect a small effect. By combining data, meta-analysis increases power. It is entirely possible (and common) for no single study to be significant while the pooled estimate is, because the combined sample size provides sufficient power."
  },
  {
    id: 48,
    question: "Which measure of disease frequency uses person-time in the denominator?",
    options: ["Prevalence", "Cumulative incidence", "Incidence rate (incidence density)", "Attack rate"],
    answer: 2,
    explanation: "Incidence rate (incidence density) = number of new cases / total person-time at risk. Person-time accounts for varying follow-up durations. Prevalence uses population at a point in time. Cumulative incidence uses population at risk at the start."
  },
  {
    id: 49,
    question: "A clinical trial has a crossover design with two treatments. The carryover effect can be minimized by:",
    options: ["Increasing sample size", "Including an adequate washout period", "Using a parallel design instead", "Randomizing the order of treatments"],
    answer: 1,
    explanation: "Carryover effect occurs when the effect of the first treatment persists into the second period. An adequate washout period between treatments allows the first treatment's effect to dissipate. Randomizing order helps with period effects, not carryover."
  },
  {
    id: 50,
    question: "The degrees of freedom for a Chi-square test in a 3×4 contingency table are:",
    options: ["12", "11", "6", "7"],
    answer: 2,
    explanation: "Degrees of freedom = (rows - 1) × (columns - 1) = (3-1) × (4-1) = 2 × 3 = 6. This determines which chi-square distribution to use for obtaining the p-value."
  },
  {
    id: 51,
    question: "In a population, BMI follows a normal distribution with mean 25 and SD 4. What is the z-score for a person with BMI 33?",
    options: ["1.0", "1.5", "2.0", "2.5"],
    answer: 2,
    explanation: "Z-score = (X - μ) / σ = (33 - 25) / 4 = 8/4 = 2.0. This means a BMI of 33 is 2 standard deviations above the mean. Approximately 2.5% of the population would have a BMI ≥ 33."
  },
  {
    id: 52,
    question: "A Bland-Altman plot is used for:",
    options: ["Comparing means of two groups", "Assessing agreement between two measurement methods", "Testing normality of data", "Plotting survival curves"],
    answer: 1,
    explanation: "Bland-Altman plot displays the difference between two measurements against their average. It assesses agreement between two methods measuring the same quantity, showing systematic bias and limits of agreement (mean difference ± 1.96 SD)."
  },
  {
    id: 53,
    question: "If the probability of a Type I error is 0.05 and Type II error is 0.20, the power of the study is:",
    options: ["0.05", "0.20", "0.80", "0.95"],
    answer: 2,
    explanation: "Power = 1 - β = 1 - 0.20 = 0.80 or 80%. Power is the probability of correctly rejecting a false null hypothesis (detecting a true effect). Conventional minimum acceptable power is 80%."
  },
  {
    id: 54,
    question: "In a prospective study, 1,000 subjects are followed for varying durations. 100 develop the disease. Total follow-up time is 8,000 person-years. The incidence rate is:",
    options: ["10%", "10 per 1,000 person-years", "12.5 per 1,000 person-years", "100 per 8,000"],
    answer: 2,
    explanation: "Incidence rate = New cases / Person-time = 100/8,000 = 0.0125 per person-year = 12.5 per 1,000 person-years. This accounts for the varying follow-up durations of different subjects."
  },
  {
    id: 55,
    question: "Which of the following is a measure of dispersion?",
    options: ["Mean", "Median", "Interquartile range", "Mode"],
    answer: 2,
    explanation: "Interquartile range (IQR = Q3 - Q1) is a measure of dispersion. Other dispersion measures include range, variance, standard deviation, and coefficient of variation. Mean, median, and mode are measures of central tendency."
  },
  {
    id: 56,
    question: "Simpson's paradox refers to:",
    options: ["A trend that appears in subgroups but disappears when groups are combined", "A trend that appears in combined data but reverses in subgroups", "The paradox of large p-values with large samples", "The relationship between sensitivity and specificity"],
    answer: 1,
    explanation: "Simpson's paradox occurs when a trend or association observed in aggregated data reverses or disappears when data are separated into subgroups. It is caused by a lurking confounding variable and highlights the importance of stratified analysis."
  },
  {
    id: 57,
    question: "In a case-control study, 80 of 100 cases and 40 of 100 controls were exposed. The odds ratio is:",
    options: ["2.0", "4.0", "6.0", "8.0"],
    answer: 2,
    explanation: "OR = (a×d)/(b×c) where a=80 (case exposed), b=20 (case unexposed), c=40 (control exposed), d=60 (control unexposed). OR = (80×60)/(20×40) = 4800/800 = 6.0."
  },
  {
    id: 58,
    question: "The Wilcoxon signed-rank test is the non-parametric equivalent of:",
    options: ["Independent t-test", "Paired t-test", "One-way ANOVA", "Two-way ANOVA"],
    answer: 1,
    explanation: "The Wilcoxon signed-rank test is used for paired/related samples when data are not normally distributed. It is the non-parametric alternative to the paired t-test. The Mann-Whitney U test is the non-parametric equivalent of the independent t-test."
  },
  {
    id: 59,
    question: "A prognostic study reports a C-statistic of 0.92. This indicates:",
    options: ["Poor discrimination", "The model explains 92% of the variance", "Excellent discrimination between outcomes", "92% sensitivity"],
    answer: 2,
    explanation: "The C-statistic (concordance statistic) is equivalent to the AUC for binary outcomes. A value of 0.92 indicates excellent discrimination. It does not mean R² = 0.92 or 92% sensitivity. C-statistic > 0.9 is considered excellent."
  },
  {
    id: 60,
    question: "In a Cox proportional hazards model, the key assumption is:",
    options: ["Normal distribution of the outcome", "Linear relationship between predictor and outcome", "The ratio of hazards between groups is constant over time", "Independence of all covariates"],
    answer: 2,
    explanation: "The proportional hazards assumption states that the hazard ratio between groups remains constant over time. The hazard functions for different groups are proportional. This can be checked using Schoenfeld residuals or log-log survival plots."
  },
  {
    id: 61,
    question: "A researcher wants to determine the minimum sample size for estimating a population proportion with 5% margin of error at 95% confidence. The formula requires an estimate of:",
    options: ["Population mean", "Population proportion", "Population standard deviation", "Effect size"],
    answer: 1,
    explanation: "For estimating a proportion: n = Z²p(1-p)/d², where p is the estimated population proportion and d is the desired margin of error. When p is unknown, p = 0.5 is used as it gives the maximum (most conservative) sample size."
  },
  {
    id: 62,
    question: "In a randomized trial, allocation concealment prevents:",
    options: ["Patients from knowing their treatment", "Investigators from predicting which treatment the next patient will receive", "Outcome assessors from knowing treatment assignments", "Data analysts from knowing group assignments"],
    answer: 1,
    explanation: "Allocation concealment prevents investigators from knowing the upcoming treatment assignment before enrollment, preventing selection bias. It differs from blinding: concealment occurs before randomization, blinding occurs after. Sequentially numbered opaque sealed envelopes is one method."
  },
  {
    id: 63,
    question: "Which statistical test is appropriate for comparing proportions between two independent groups?",
    options: ["Student's t-test", "Pearson correlation", "Chi-square test / Z-test for proportions", "Paired t-test"],
    answer: 2,
    explanation: "Chi-square test or Z-test for two proportions compares categorical outcomes between two independent groups. t-tests compare continuous means. Pearson correlation measures linear association between two continuous variables."
  },
  {
    id: 64,
    question: "The coefficient of variation (CV) is useful because it:",
    options: ["Is always between 0 and 1", "Allows comparison of variability between variables with different units", "Is unaffected by the mean", "Is the same as standard deviation"],
    answer: 1,
    explanation: "CV = (SD/Mean) × 100%. It is a unitless, relative measure of variability that allows comparison of dispersion between variables measured on different scales or units. For example, comparing variability of weight (kg) and height (cm)."
  },
  {
    id: 65,
    question: "In an ecological study, the unit of analysis is:",
    options: ["Individual", "Family", "Population or group", "Hospital"],
    answer: 2,
    explanation: "Ecological studies analyze data at the group/population level, not individual level. This leads to the ecological fallacy — associations observed at group level may not hold at the individual level. Example: countries with higher fat intake having higher cancer rates."
  },
  {
    id: 66,
    question: "A test has sensitivity 95% and specificity 85%. The positive likelihood ratio is:",
    options: ["0.06", "1.12", "6.33", "19.0"],
    answer: 2,
    explanation: "LR+ = Sensitivity / (1-Specificity) = 0.95/0.15 = 6.33. This means a positive test result is 6.33 times more likely in a person with the disease than without. LR+ between 5-10 indicates moderate evidence for ruling in a diagnosis."
  },
  {
    id: 67,
    question: "In a survival analysis, censored observations occur when:",
    options: ["The subject dies during follow-up", "The subject is lost to follow-up or the study ends before the event occurs", "The subject switches treatment groups", "The subject experiences the outcome of interest"],
    answer: 1,
    explanation: "Censoring occurs when the outcome is not observed for a subject — they are lost to follow-up, withdraw, or the study ends before the event. Right censoring is most common. The subject's partial follow-up time still contributes to the analysis."
  },
  {
    id: 68,
    question: "The Spearman rank correlation coefficient is preferred over Pearson's when:",
    options: ["Both variables are normally distributed", "The relationship is strictly linear", "Data are ordinal or the relationship is monotonic but not linear", "Sample size is large"],
    answer: 2,
    explanation: "Spearman's rank correlation measures the strength of a monotonic (not necessarily linear) relationship. It uses ranks, making it suitable for ordinal data or when normality assumptions are violated. Pearson's assumes linearity and approximately normal data."
  },
  {
    id: 69,
    question: "In a 2×2 table, if the expected cell frequency is less than 5, which test should replace the Chi-square test?",
    options: ["Student's t-test", "Fisher's exact test", "Mann-Whitney U test", "Log-rank test"],
    answer: 1,
    explanation: "Fisher's exact test is used when expected cell frequencies are <5 (some texts say <10, or when total n <20). It calculates the exact probability of obtaining the observed distribution under the null hypothesis, without relying on the chi-square approximation."
  },
  {
    id: 70,
    question: "A researcher wants to adjust for multiple confounders simultaneously while studying a continuous outcome. The appropriate method is:",
    options: ["Stratified analysis", "Multiple linear regression", "Logistic regression", "Chi-square test"],
    answer: 1,
    explanation: "Multiple linear regression models a continuous dependent variable adjusting for multiple covariates simultaneously. Logistic regression is for binary outcomes. Stratified analysis is limited to a few confounders. Chi-square is for categorical data without adjustment."
  },
  {
    id: 71,
    question: "In a diagnostic test evaluation, increasing the cut-off value to improve specificity will:",
    options: ["Also improve sensitivity", "Decrease sensitivity", "Not affect sensitivity", "Improve both sensitivity and specificity"],
    answer: 1,
    explanation: "There is an inverse relationship between sensitivity and specificity when the cut-off changes. Increasing the cut-off to classify fewer people as positive improves specificity (fewer false positives) but decreases sensitivity (more false negatives). This trade-off is visualized by the ROC curve."
  },
  {
    id: 72,
    question: "In a vaccine trial, the vaccine efficacy is calculated as 80%. If the attack rate in the unvaccinated group is 25%, the attack rate in the vaccinated group is:",
    options: ["5%", "20%", "45%", "80%"],
    answer: 0,
    explanation: "Vaccine efficacy = (ARU - ARV)/ARU × 100. 80% = (25% - ARV)/25% × 100. So ARV = 25% × (1 - 0.80) = 25% × 0.20 = 5%. The vaccinated group has an attack rate of 5%."
  },
  {
    id: 73,
    question: "The Kruskal-Wallis test is the non-parametric equivalent of:",
    options: ["Paired t-test", "Independent t-test", "One-way ANOVA", "Two-way ANOVA"],
    answer: 2,
    explanation: "Kruskal-Wallis test compares three or more independent groups using ranks. It is the non-parametric alternative to one-way ANOVA when data are ordinal or the assumptions of ANOVA (normality, homogeneity of variance) are not met."
  },
  {
    id: 74,
    question: "In a clinical trial with a 2:1 randomization ratio (drug:placebo), 300 patients are enrolled. How many receive the drug?",
    options: ["100", "150", "200", "250"],
    answer: 2,
    explanation: "With 2:1 randomization, for every 3 patients, 2 get drug and 1 gets placebo. Drug group = (2/3) × 300 = 200. Placebo group = (1/3) × 300 = 100."
  },
  {
    id: 75,
    question: "The incidence of a disease in a population of 50,000 over one year is 100 new cases. If 400 prevalent cases exist at the start, what is the point prevalence at year end (assuming no deaths or recoveries)?",
    options: ["0.8%", "1.0%", "0.2%", "1.2%"],
    answer: 1,
    explanation: "At year end, total cases = 400 (existing) + 100 (new) = 500. Point prevalence = 500/50,000 = 0.01 = 1.0%. (Assuming population remains approximately 50,000.)"
  },
  {
    id: 76,
    question: "A study measures agreement between two pathologists classifying tissue as benign or malignant. The kappa value is 0.85. This indicates:",
    options: ["Poor agreement", "Fair agreement", "Moderate agreement", "Almost perfect agreement"],
    answer: 3,
    explanation: "Kappa interpretation (Landis & Koch): <0 poor, 0-0.20 slight, 0.21-0.40 fair, 0.41-0.60 moderate, 0.61-0.80 substantial, 0.81-1.00 almost perfect. κ = 0.85 falls in the almost perfect agreement range."
  },
  {
    id: 77,
    question: "In a non-inferiority trial, the pre-specified non-inferiority margin is δ. The new drug is declared non-inferior if:",
    options: ["The entire confidence interval for the difference lies above -δ", "The p-value is < 0.05", "The new drug is superior to the comparator", "The odds ratio is exactly 1"],
    answer: 0,
    explanation: "In a non-inferiority trial, the new drug is non-inferior if the lower bound of the confidence interval for the treatment difference is above -δ (the non-inferiority margin). This means the new drug is not worse than the comparator by more than δ."
  },
  {
    id: 78,
    question: "A birth cohort study follows children from birth. At 5 years, 10% are lost to follow-up. This is most likely to cause:",
    options: ["Confounding bias", "Information bias", "Attrition bias", "Recall bias"],
    answer: 2,
    explanation: "Attrition bias (loss to follow-up bias) occurs when participants who drop out differ systematically from those who remain. In cohort studies, differential loss to follow-up can distort the estimated association between exposure and outcome."
  },
  {
    id: 79,
    question: "The Friedman test is used for:",
    options: ["Comparing two independent groups", "Comparing three or more related/matched groups on ordinal data", "Testing normality", "Comparing two proportions"],
    answer: 1,
    explanation: "The Friedman test is the non-parametric alternative to repeated measures ANOVA. It compares three or more related groups (e.g., same subjects measured at multiple time points) using ranked data."
  },
  {
    id: 80,
    question: "In a study, the relative risk is 2.5 and the prevalence of exposure in the population is 30%. The population attributable risk percent (PAR%) is approximately:",
    options: ["20%", "31%", "45%", "75%"],
    answer: 1,
    explanation: "PAR% = Pe(RR-1) / [1 + Pe(RR-1)] × 100, where Pe = prevalence of exposure. PAR% = 0.30(2.5-1) / [1 + 0.30(2.5-1)] × 100 = 0.45/1.45 × 100 = 31.0%. This is the proportion of disease in the total population attributable to the exposure."
  },
  {
    id: 81,
    question: "A Phase III clinical trial primarily aims to:",
    options: ["Determine the maximum tolerated dose", "Evaluate safety in a small group of healthy volunteers", "Confirm efficacy and monitor side effects in a large patient population", "Study long-term effects after marketing"],
    answer: 2,
    explanation: "Phase III trials are large-scale confirmatory trials that establish efficacy and safety in the target patient population. Phase I tests safety/dosing in healthy volunteers. Phase II evaluates efficacy in small patient groups. Phase IV is post-marketing surveillance."
  },
  {
    id: 82,
    question: "In regression analysis, multicollinearity refers to:",
    options: ["Non-linear relationship between X and Y", "High correlation between two or more independent variables", "Heteroscedasticity of residuals", "Autocorrelation of observations"],
    answer: 1,
    explanation: "Multicollinearity occurs when independent variables are highly correlated with each other, leading to unstable regression coefficients, inflated standard errors, and difficulty interpreting individual effects. VIF (variance inflation factor) > 10 suggests problematic multicollinearity."
  },
  {
    id: 83,
    question: "A study randomizes 500 patients, but only 350 complete the study. Per-protocol analysis includes:",
    options: ["All 500 patients", "Only the 350 completers", "Only those who experienced the outcome", "Only those who adhered to the protocol without deviations"],
    answer: 3,
    explanation: "Per-protocol analysis includes only subjects who completed the study without major protocol violations. It differs from ITT (all randomized). Per-protocol may overestimate treatment effect due to selection bias (compliant patients may differ from non-compliant)."
  },
  {
    id: 84,
    question: "The design effect in cluster sampling is 3.5 with a simple random sample size of 200. The required sample size for the cluster design is:",
    options: ["200", "57", "700", "400"],
    answer: 2,
    explanation: "Required sample size = SRS sample size × Design effect = 200 × 3.5 = 700. The design effect inflates the sample size because individuals within clusters tend to be more similar to each other than individuals in the general population."
  },
  {
    id: 85,
    question: "In a diagnostic study, the pre-test probability is 20% and the positive likelihood ratio is 9. Using the likelihood ratio nomogram, the approximate post-test probability is:",
    options: ["20%", "45%", "69%", "90%"],
    answer: 2,
    explanation: "Pre-test odds = 0.20/0.80 = 0.25. Post-test odds = Pre-test odds × LR+ = 0.25 × 9 = 2.25. Post-test probability = 2.25/(1+2.25) = 2.25/3.25 ≈ 0.69 or 69%. A high LR+ substantially increases the post-test probability."
  },
  {
    id: 86,
    question: "Which of the following best describes a Type I error in a drug trial?",
    options: ["Concluding the drug is effective when it truly is", "Concluding the drug is ineffective when it truly is ineffective", "Concluding the drug is effective when it is actually not", "Concluding the drug is ineffective when it is actually effective"],
    answer: 2,
    explanation: "Type I error (α, false positive) = rejecting a true null hypothesis = concluding the drug works when it doesn't. The significance level (α = 0.05) is the probability of making this error. Type II error = concluding ineffective when it actually works."
  },
  {
    id: 87,
    question: "In a Poisson distribution, if the mean number of events per interval is 4, the variance is:",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "A defining property of the Poisson distribution is that mean = variance = λ. If λ = 4, then variance = 4. If observed variance >> mean, this suggests overdispersion and the Poisson model may not be appropriate (consider negative binomial)."
  },
  {
    id: 88,
    question: "A researcher wants to test if there is a linear trend in proportions across ordered categories of exposure. The appropriate test is:",
    options: ["Pearson chi-square", "Chi-square test for trend (Cochran-Armitage)", "Fisher's exact test", "McNemar's test"],
    answer: 1,
    explanation: "The Cochran-Armitage test for trend tests whether there is a linear trend in proportions across ordered categories. Pearson chi-square tests for any association but ignores ordering. Fisher's is for small samples. McNemar's is for paired data."
  },
  {
    id: 89,
    question: "In an ANCOVA, the covariate is:",
    options: ["A categorical independent variable", "A continuous variable that is controlled for to reduce error variance", "The dependent variable", "A random effect"],
    answer: 1,
    explanation: "ANCOVA (Analysis of Covariance) combines ANOVA and regression. The covariate is a continuous variable (e.g., baseline value) that is adjusted for to reduce within-group error variance and increase power to detect treatment effects."
  },
  {
    id: 90,
    question: "In a stepped-wedge cluster randomized trial, the key feature is:",
    options: ["All clusters start intervention simultaneously", "Clusters are randomized to different sequences of crossing from control to intervention", "Only one cluster receives the intervention", "There is no control period"],
    answer: 1,
    explanation: "In a stepped-wedge design, all clusters start as controls and are randomized to cross over to the intervention at different time points until all clusters have received it. This allows all clusters to eventually receive the intervention, which is ethically appealing."
  },
  {
    id: 91,
    question: "If a study reports a standardized mean difference (Cohen's d) of 0.2, this represents:",
    options: ["A large effect size", "A medium effect size", "A small effect size", "No effect"],
    answer: 2,
    explanation: "Cohen's d benchmarks: 0.2 = small effect, 0.5 = medium effect, 0.8 = large effect. d = 0.2 means the two group means differ by 0.2 standard deviations. Effect size is crucial for assessing practical significance beyond p-values."
  },
  {
    id: 92,
    question: "In a case-crossover study, the design is most suitable for:",
    options: ["Studying chronic exposures and chronic diseases", "Studying transient exposures triggering acute events", "Estimating prevalence", "Studying genetic risk factors"],
    answer: 1,
    explanation: "The case-crossover design studies transient exposures and acute outcomes by comparing exposure during a hazard period (just before the event) to control periods in the same individual. It controls for all time-invariant confounders. Example: air pollution triggering MI."
  },
  {
    id: 93,
    question: "A study reports the following: Sensitivity = 90%, Specificity = 80%, Prevalence = 50%. The accuracy (percentage correctly classified) is:",
    options: ["70%", "80%", "85%", "90%"],
    answer: 2,
    explanation: "Accuracy = (TP + TN) / Total. With prevalence 50% in, say, 1000 people: 500 diseased, 500 non-diseased. TP = 0.90 × 500 = 450. TN = 0.80 × 500 = 400. Accuracy = (450 + 400)/1000 = 850/1000 = 85%."
  },
  {
    id: 94,
    question: "Lead time bias in cancer screening studies causes:",
    options: ["Overestimation of survival time due to earlier detection", "Underestimation of disease prevalence", "Selection of less aggressive cancers", "Loss to follow-up"],
    answer: 0,
    explanation: "Lead time bias artificially inflates survival time because screening detects disease earlier, adding lead time to survival without necessarily delaying death. It makes screening appear more beneficial than it may be. Length bias selects less aggressive cancers."
  },
  {
    id: 95,
    question: "In a propensity score analysis, the propensity score represents:",
    options: ["The probability of developing the outcome", "The probability of receiving the treatment given observed covariates", "The treatment effect size", "The confounding effect"],
    answer: 1,
    explanation: "The propensity score is the probability of receiving the treatment (vs. control) conditional on observed baseline covariates. Matching or adjusting by propensity score aims to balance confounders between treatment groups in observational studies."
  },
  {
    id: 96,
    question: "A randomized trial of 1,000 patients shows a mortality rate of 10% in the treatment group vs 14% in the control group (p = 0.02). The absolute risk reduction is:",
    options: ["4%", "28.6%", "0.71", "10%"],
    answer: 0,
    explanation: "ARR = Control event rate - Treatment event rate = 14% - 10% = 4%. The RRR = (14% - 10%)/14% = 28.6%. NNT = 1/ARR = 1/0.04 = 25. ARR is more clinically meaningful than RRR as it accounts for baseline risk."
  },
  {
    id: 97,
    question: "In a multi-center trial, the random effects model is preferred over the fixed effects model when:",
    options: ["All centers are identical", "There is no between-center variability", "There is significant between-center variability in treatment effects", "Sample sizes are equal across centers"],
    answer: 2,
    explanation: "Random effects models account for between-center (or between-study) variability, assuming each center has its own true effect that varies around a mean. Fixed effects assume a single common effect. When heterogeneity exists, random effects provide wider, more appropriate confidence intervals."
  },
  {
    id: 98,
    question: "The Hosmer-Lemeshow test in logistic regression assesses:",
    options: ["Multicollinearity", "Model discrimination", "Goodness of fit (calibration)", "Confounding"],
    answer: 2,
    explanation: "The Hosmer-Lemeshow test groups subjects by predicted probability and compares observed vs. expected events in each group. A non-significant result (p > 0.05) suggests adequate model fit. It assesses calibration, not discrimination (which is assessed by AUC/C-statistic)."
  },
  {
    id: 99,
    question: "In a network meta-analysis, the key assumption that allows indirect comparisons is:",
    options: ["Homogeneity", "Transitivity (consistency)", "Publication bias absence", "Fixed treatment effects"],
    answer: 1,
    explanation: "Transitivity (consistency) assumes that indirect evidence (A vs C derived from A vs B and B vs C) is consistent with direct evidence. If populations, interventions, and study designs are sufficiently similar across the network, indirect comparisons are valid."
  },
  {
    id: 100,
    question: "A Bayesian analysis differs from a frequentist analysis primarily because it:",
    options: ["Uses larger sample sizes", "Does not use p-values but incorporates prior probability and updates it with observed data", "Is always more accurate", "Does not require statistical assumptions"],
    answer: 1,
    explanation: "Bayesian statistics combines prior probability (prior knowledge/belief) with the likelihood of observed data to produce a posterior probability using Bayes' theorem. Frequentist statistics relies on long-run frequency of outcomes and p-values without incorporating priors."
  }
];

export default questions;

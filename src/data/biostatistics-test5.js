const questions = [
  // ===== MEAN, MEDIAN, MODE (Q1-Q10) =====
  {
    id: 1,
    question: "In a positively skewed distribution of serum bilirubin levels in a population, which of the following relationships holds true?",
    options: [
      "Mean > Median > Mode",
      "Mean < Median < Mode",
      "Mean = Median = Mode",
      "Mode > Mean > Median"
    ],
    answer: 0,
    explanation: "In a positively (right) skewed distribution, the tail extends to the right. The mean is pulled furthest toward the tail, followed by the median, with the mode at the peak. Hence Mean > Median > Mode. Serum bilirubin in a general population is typically right-skewed because a few individuals have very high values (e.g., liver disease)."
  },
  {
    id: 2,
    question: "A researcher records the following hemoglobin values (g/dL) for 7 patients: 8, 9, 10, 10, 11, 12, 25. Which measure of central tendency is MOST appropriate to summarize these data?",
    options: [
      "Arithmetic mean",
      "Median",
      "Mode",
      "Geometric mean"
    ],
    answer: 1,
    explanation: "The value 25 g/dL is an extreme outlier. The arithmetic mean would be disproportionately inflated by this outlier (mean = 85/7 = 12.14), misrepresenting the typical value. The median (10 g/dL) is resistant to outliers and best represents the central value. The mode (10) only tells the most frequent value and is less informative with small samples."
  },
  {
    id: 3,
    question: "In a normal (Gaussian) distribution of systolic blood pressure readings in a healthy adult population, what is the relationship between mean, median, and mode?",
    options: [
      "Mean > Median > Mode",
      "Mean < Median < Mode",
      "Mean = Median = Mode",
      "Mean = Median > Mode"
    ],
    answer: 2,
    explanation: "A defining property of the normal (Gaussian) distribution is its perfect symmetry. In a symmetric distribution, the mean, median, and mode all coincide at the center of the distribution. This is one of the key characteristics tested in biostatistics and is fundamental to many parametric statistical methods."
  },
  {
    id: 4,
    question: "The most common blood group in a population of 500 blood donors is determined to be O+. Which measure of central tendency is being used here?",
    options: [
      "Mean",
      "Median",
      "Mode",
      "Geometric mean"
    ],
    answer: 2,
    explanation: "Blood group is a nominal (categorical) variable. The only measure of central tendency applicable to nominal data is the mode, which identifies the most frequently occurring category. Mean and median require at least ordinal-level data. The mode of blood group data = O+ (the most common category)."
  },
  {
    id: 5,
    question: "A dataset of antibody titers in a group of vaccinated individuals shows values of 1:2, 1:4, 1:8, 1:16, 1:32, 1:64. Which measure of central tendency is MOST appropriate?",
    options: [
      "Arithmetic mean",
      "Median",
      "Mode",
      "Geometric mean"
    ],
    answer: 3,
    explanation: "Antibody titers increase in a geometric (doubling) progression (2, 4, 8, 16, 32, 64). The geometric mean is the appropriate measure for data that are multiplicative in nature or follow a logarithmic scale. Geometric mean = antilog(sum of log values / n). For titers 2, 4, 8, 16, 32, 64: GM = (2 x 4 x 8 x 16 x 32 x 64)^(1/6) = (2^21)^(1/6) = 2^3.5 = 11.31, corresponding approximately to a titer of 1:11."
  },
  {
    id: 6,
    question: "In a negatively skewed distribution of exam scores in a postgraduate medical entrance test, which statement is correct?",
    options: [
      "Mean > Median > Mode",
      "Mean = Median = Mode",
      "Mode > Median > Mean",
      "Median > Mode > Mean"
    ],
    answer: 2,
    explanation: "In a negatively (left) skewed distribution, the tail extends to the left. Most students score high (mode is highest), the median lies in between, and the mean is pulled toward the lower tail. Therefore: Mode > Median > Mean. This is commonly seen in exams where most students perform well but a few score very poorly."
  },
  {
    id: 7,
    question: "A public health officer wants to describe the typical income of families in a rural district to plan healthcare subsidies. The income data is heavily right-skewed. Which measure should be reported?",
    options: [
      "Arithmetic mean",
      "Median",
      "Mode",
      "Harmonic mean"
    ],
    answer: 1,
    explanation: "Income data is classically right-skewed because a small number of wealthy individuals pull the mean upward. The median divides the distribution into two equal halves and is not affected by extreme values, making it the most representative measure of the 'typical' income. This is why national income statistics often report median household income rather than mean income."
  },
  {
    id: 8,
    question: "The weights (kg) of 10 newborns are: 2.5, 2.7, 2.8, 2.9, 3.0, 3.0, 3.1, 3.2, 3.3, 3.5. What is the median weight?",
    options: [
      "2.9 kg",
      "3.0 kg",
      "3.05 kg",
      "3.1 kg"
    ],
    answer: 1,
    explanation: "For an even number of observations (n = 10), the median is the average of the (n/2)th and (n/2 + 1)th values, i.e., the 5th and 6th values. The 5th value = 3.0 and the 6th value = 3.0. Median = (3.0 + 3.0)/2 = 3.0 kg. The data must first be arranged in ascending order (already done here)."
  },
  {
    id: 9,
    question: "Which of the following properties is TRUE about the arithmetic mean?",
    options: [
      "It is not affected by extreme values",
      "The sum of deviations of all values from the mean is always zero",
      "It can be calculated for ordinal data",
      "It is the best measure for skewed distributions"
    ],
    answer: 1,
    explanation: "A fundamental algebraic property of the arithmetic mean is that the sum of deviations of all observations from the mean equals zero: Sum of (xi - x-bar) = 0. This property forms the basis for variance and standard deviation calculations. The mean IS affected by extreme values, requires interval/ratio data, and is NOT the best measure for skewed distributions (median is preferred)."
  },
  {
    id: 10,
    question: "A bimodal distribution of age at diagnosis is observed for Hodgkin's lymphoma (peaks at ages 20-30 and 50-60). Which measure of central tendency best describes this pattern?",
    options: [
      "Arithmetic mean",
      "Median",
      "Mode",
      "Geometric mean"
    ],
    answer: 2,
    explanation: "A bimodal distribution has two peaks (modes). The mode is the only measure that can identify and describe this bimodal pattern. Hodgkin's lymphoma classically shows a bimodal age distribution with peaks in young adults and older adults. Reporting the mean or median would mask this important epidemiological feature and give a misleading single central value around age 40."
  },

  // ===== STANDARD DEVIATION, VARIANCE (Q11-Q20) =====
  {
    id: 11,
    question: "In a normal distribution of fasting blood glucose levels, approximately what percentage of values falls within the range of mean +/- 2 standard deviations?",
    options: [
      "68.27%",
      "90%",
      "95.45%",
      "99.73%"
    ],
    answer: 2,
    explanation: "The empirical rule (68-95-99.7 rule) for normal distributions states: approximately 68.27% of values fall within mean +/- 1 SD, 95.45% within mean +/- 2 SD, and 99.73% within mean +/- 3 SD. This principle is used to establish clinical reference ranges; for example, normal lab values are often defined as the mean +/- 2 SD range."
  },
  {
    id: 12,
    question: "The standard deviation of serum cholesterol in a sample of 100 patients is 30 mg/dL. What is the variance?",
    options: [
      "30 mg/dL",
      "300 (mg/dL)^2",
      "900 (mg/dL)^2",
      "5.48 mg/dL"
    ],
    answer: 2,
    explanation: "Variance = (Standard Deviation)^2. If SD = 30 mg/dL, then Variance = 30^2 = 900 (mg/dL)^2. Note that variance is expressed in squared units, which is one reason SD is preferred for reporting since it retains the original units of measurement. Conversely, SD = square root of variance."
  },
  {
    id: 13,
    question: "A clinical lab reports that the normal reference range for serum sodium is 136-145 mEq/L, derived as mean +/- 2 SD. What is the approximate standard deviation?",
    options: [
      "2.25 mEq/L",
      "4.5 mEq/L",
      "9 mEq/L",
      "140.5 mEq/L"
    ],
    answer: 0,
    explanation: "If the reference range = mean +/- 2 SD, then the total range spans 4 SD. Range = 145 - 136 = 9 mEq/L. Therefore 4 SD = 9, and SD = 9/4 = 2.25 mEq/L. The mean would be (136 + 145)/2 = 140.5 mEq/L. This method of estimating SD from reference ranges is commonly used in clinical biostatistics."
  },
  {
    id: 14,
    question: "A researcher wants to compare the variability of height (mean 170 cm, SD 10 cm) and weight (mean 70 kg, SD 8 kg) in a group of adults. Which measure should be used?",
    options: [
      "Standard deviation",
      "Variance",
      "Coefficient of variation",
      "Standard error"
    ],
    answer: 2,
    explanation: "The coefficient of variation (CV) = (SD/Mean) x 100% is a dimensionless, relative measure of dispersion. It allows comparison of variability between variables with different units or different magnitudes. CV for height = (10/170) x 100 = 5.88%; CV for weight = (8/70) x 100 = 11.43%. Weight shows greater relative variability. SD and variance cannot be directly compared across different units."
  },
  {
    id: 15,
    question: "In a drug trial, the mean reduction in HbA1c with Drug A is 1.5% (SD = 0.3%) and with Drug B is 1.5% (SD = 0.8%). Which statement is correct?",
    options: [
      "Drug A is more effective than Drug B",
      "Drug B shows more consistent response across patients",
      "Drug A shows more consistent response across patients",
      "Both drugs have identical clinical utility"
    ],
    answer: 2,
    explanation: "Both drugs have the same mean reduction (1.5%), but Drug A has a smaller SD (0.3% vs 0.8%), meaning the responses of individual patients are clustered more tightly around the mean. This indicates a more predictable and consistent drug effect. Drug B's larger SD suggests highly variable patient responses, which is less desirable clinically even though the average effect is the same."
  },
  {
    id: 16,
    question: "A z-score of -2.5 for a newborn's birth weight indicates that the baby's weight is:",
    options: [
      "2.5 kg below the mean",
      "2.5 standard deviations below the mean",
      "2.5 standard deviations above the mean",
      "At the 2.5th percentile"
    ],
    answer: 1,
    explanation: "The z-score (standard score) = (X - Mean) / SD. A z-score of -2.5 means the observation lies 2.5 standard deviations below the mean. A negative z-score indicates a value below the mean, and the magnitude tells how many SDs away. This is used in growth charts and WHO standards to classify underweight (z-score < -2) or severely underweight (z-score < -3) children."
  },
  {
    id: 17,
    question: "The standard error of the mean (SEM) for a sample of 100 observations with SD = 20 is:",
    options: [
      "0.2",
      "2.0",
      "20",
      "200"
    ],
    answer: 1,
    explanation: "SEM = SD / sqrt(n) = 20 / sqrt(100) = 20 / 10 = 2.0. The SEM measures the precision of the sample mean as an estimate of the population mean. Unlike SD which measures variability of individual observations, SEM decreases as sample size increases, reflecting greater precision with larger samples. SEM is used to construct confidence intervals around the mean."
  },
  {
    id: 18,
    question: "If the sample size is increased from 25 to 100 while the SD remains constant, the standard error of the mean will:",
    options: [
      "Double",
      "Be halved",
      "Remain the same",
      "Be quartered"
    ],
    answer: 1,
    explanation: "SEM = SD / sqrt(n). Originally SEM1 = SD / sqrt(25) = SD / 5. After increasing n to 100: SEM2 = SD / sqrt(100) = SD / 10. SEM2 / SEM1 = (SD/10) / (SD/5) = 5/10 = 1/2. The SEM is halved. To halve the SEM, the sample size must be quadrupled (increased by a factor of 4), since SEM is inversely proportional to the square root of n."
  },
  {
    id: 19,
    question: "Which of the following is true regarding the use of (n-1) instead of n in the denominator of the sample variance formula?",
    options: [
      "It makes the calculation simpler",
      "It provides a biased estimate of population variance",
      "It corrects for the loss of one degree of freedom, providing an unbiased estimate",
      "It is only used when sample size is greater than 30"
    ],
    answer: 2,
    explanation: "Dividing by (n-1) instead of n is called Bessel's correction. When estimating population variance from a sample, using n in the denominator systematically underestimates the true variance. Dividing by (n-1) corrects this bias because the sample mean has already consumed one degree of freedom. The sample variance s^2 = Sum of (xi - x-bar)^2 / (n-1) is an unbiased estimator of the population variance sigma^2."
  },
  {
    id: 20,
    question: "In a clinical laboratory, the inter-assay coefficient of variation (CV) for a glucose assay is 5%, and for an HbA1c assay is 3%. Which assay is MORE precise?",
    options: [
      "Glucose assay",
      "HbA1c assay",
      "Both are equally precise",
      "Cannot be compared"
    ],
    answer: 1,
    explanation: "The coefficient of variation (CV) measures relative variability. A lower CV indicates less variability relative to the mean, i.e., greater precision. The HbA1c assay (CV = 3%) has less relative variability than the glucose assay (CV = 5%), making it more precise. In laboratory medicine, CV is the standard metric for assessing analytical precision across different assays and concentration levels."
  },

  // ===== PROBABILITY BASICS (Q21-Q30) =====
  {
    id: 21,
    question: "A disease has a prevalence of 1 in 1000 in a population. A screening test has a sensitivity of 99% and specificity of 99%. If a person tests positive, what is the approximate probability that they actually have the disease?",
    options: [
      "About 9%",
      "About 50%",
      "About 90%",
      "About 99%"
    ],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1 - Specificity)(1 - Prevalence)]. PPV = (0.99 x 0.001) / [(0.99 x 0.001) + (0.01 x 0.999)] = 0.00099 / (0.00099 + 0.00999) = 0.00099 / 0.01098 = 0.0901 or about 9%. This demonstrates that even with an excellent test, a low prevalence leads to a low positive predictive value due to the large number of false positives."
  },
  {
    id: 22,
    question: "If the probability of a drug causing nausea is 0.3 and the probability of it causing headache is 0.2, and these side effects are independent, what is the probability that a patient experiences BOTH side effects?",
    options: [
      "0.50",
      "0.06",
      "0.44",
      "0.10"
    ],
    answer: 1,
    explanation: "For independent events, the probability of both occurring is: P(A and B) = P(A) x P(B) = 0.3 x 0.2 = 0.06 or 6%. This is the multiplication rule for independent events. Independence means the occurrence of one event does not affect the probability of the other. In reality, drug side effects may not be independent, but this is a commonly tested probability concept."
  },
  {
    id: 23,
    question: "In a family with two children, what is the probability that BOTH children are affected with an autosomal recessive disease if both parents are carriers (Aa x Aa)?",
    options: [
      "1/2",
      "1/4",
      "1/16",
      "1/8"
    ],
    answer: 2,
    explanation: "For autosomal recessive inheritance with carrier parents (Aa x Aa), the probability of each child being affected (aa) = 1/4. Since each child's genotype is determined independently, P(both affected) = P(1st affected) x P(2nd affected) = 1/4 x 1/4 = 1/16. This applies the multiplication rule for independent events in a genetic context."
  },
  {
    id: 24,
    question: "A hospital records show that the probability of a patient having diabetes is 0.15 and the probability of having hypertension is 0.25. The probability of having either diabetes OR hypertension OR both is 0.35. What is the probability of having both conditions?",
    options: [
      "0.40",
      "0.05",
      "0.10",
      "0.035"
    ],
    answer: 1,
    explanation: "Using the addition rule: P(A or B) = P(A) + P(B) - P(A and B). Therefore: P(A and B) = P(A) + P(B) - P(A or B) = 0.15 + 0.25 - 0.35 = 0.05. The subtraction of P(A and B) prevents double-counting of individuals who have both conditions. This is a direct application of the addition rule for non-mutually exclusive events."
  },
  {
    id: 25,
    question: "If 5 out of 20 patients in an ICU have MRSA infection, and 3 patients are selected at random WITHOUT replacement, what is the probability that ALL three have MRSA?",
    options: [
      "1/114",
      "1/64",
      "5/20 x 5/20 x 5/20",
      "1/8"
    ],
    answer: 0,
    explanation: "Without replacement, the probability changes with each draw. P(all 3 have MRSA) = (5/20) x (4/19) x (3/18) = 60/6840 = 1/114. This uses conditional probability: after selecting one MRSA patient, only 4 MRSA patients remain out of 19 total, and so on. Sampling without replacement is common in real-world clinical scenarios."
  },
  {
    id: 26,
    question: "In a binomial distribution, 10 patients each independently have a 20% chance of developing an adverse drug reaction. What is the expected number of patients who will develop the reaction?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "For a binomial distribution, the expected value (mean) = n x p, where n = number of trials and p = probability of success. E(X) = 10 x 0.20 = 2. The variance = n x p x (1-p) = 10 x 0.2 x 0.8 = 1.6, and SD = sqrt(1.6) = 1.26. On average, 2 out of 10 patients would be expected to develop the adverse reaction."
  },
  {
    id: 27,
    question: "A rare genetic disease occurs at a rate of 3 per 10,000 births. To model the number of affected births in a hospital delivering 10,000 babies per year, which probability distribution is MOST appropriate?",
    options: [
      "Normal distribution",
      "Binomial distribution",
      "Poisson distribution",
      "Chi-square distribution"
    ],
    answer: 2,
    explanation: "The Poisson distribution is used to model the number of rare events occurring in a fixed interval (time, area, volume, etc.) when events occur independently at a known average rate. Here, lambda = 3 per 10,000 births. The conditions for Poisson are met: (1) events are rare, (2) n is large, (3) p is small, (4) events are independent. The Poisson is a limiting case of the binomial when n is large and p is small."
  },
  {
    id: 28,
    question: "The complement rule of probability states that P(A') = 1 - P(A). If the probability that a surgical patient does NOT develop a post-operative infection is 0.92, what is the probability of developing an infection?",
    options: [
      "0.92",
      "0.08",
      "0.46",
      "0.184"
    ],
    answer: 1,
    explanation: "The complement rule states that for any event A, P(A) + P(A') = 1, where A' is the complement of A (i.e., A does not occur). If P(no infection) = 0.92, then P(infection) = 1 - 0.92 = 0.08 or 8%. This is one of the most fundamental probability rules and is frequently used in epidemiology and clinical risk assessment."
  },
  {
    id: 29,
    question: "Which of the following conditions must be met for the normal approximation to the binomial distribution to be valid?",
    options: [
      "np > 5 and n(1-p) > 5",
      "n > 30 only",
      "p = 0.5 only",
      "np < 5"
    ],
    answer: 0,
    explanation: "The normal distribution can approximate the binomial when both np >= 5 and n(1-p) >= 5 (some texts use > 10 for a better approximation). This ensures the distribution is sufficiently symmetric and bell-shaped. When p is very small or very large, a larger n is needed. This approximation is useful because normal distribution tables and z-scores can then be applied to binomial probability problems."
  },
  {
    id: 30,
    question: "In a population, 8% have Type 2 diabetes. If 3 individuals are selected at random, what is the probability that NONE of them has diabetes? (Assume independence.)",
    options: [
      "0.778",
      "0.24",
      "0.92",
      "0.080"
    ],
    answer: 0,
    explanation: "P(no diabetes for one person) = 1 - 0.08 = 0.92. For 3 independent selections: P(none has diabetes) = 0.92^3 = 0.92 x 0.92 x 0.92 = 0.7787, approximately 0.778 or 77.8%. This uses the multiplication rule for independent events and the complement rule. Alternatively, using binomial: P(X = 0) = C(3,0) x (0.08)^0 x (0.92)^3 = 1 x 1 x 0.7787 = 0.778."
  },

  // ===== P-VALUE, CONFIDENCE INTERVALS (Q31-Q40) =====
  {
    id: 31,
    question: "A clinical trial comparing two antihypertensive drugs reports a p-value of 0.03 for the difference in mean blood pressure reduction. At a significance level of 0.05, the correct interpretation is:",
    options: [
      "There is a 3% chance that the drugs are equally effective",
      "The probability of obtaining this result or more extreme, assuming the null hypothesis is true, is 0.03",
      "Drug A is 97% more effective than Drug B",
      "There is a 97% chance that the alternative hypothesis is true"
    ],
    answer: 1,
    explanation: "The p-value is the probability of obtaining the observed result (or more extreme) assuming the null hypothesis (no difference) is true. A p-value of 0.03 means there is a 3% chance of seeing such a difference (or greater) if the drugs were truly equally effective. It does NOT represent the probability that the null hypothesis is true or false. Since 0.03 < 0.05 (alpha), the result is statistically significant."
  },
  {
    id: 32,
    question: "A 95% confidence interval for the mean systolic BP difference between treatment and placebo groups is (2.5, 8.3) mmHg. Which interpretation is correct?",
    options: [
      "There is a 95% probability that the true mean difference lies between 2.5 and 8.3 mmHg",
      "95% of patients will have a BP difference between 2.5 and 8.3 mmHg",
      "If we repeated this study many times, 95% of the computed intervals would contain the true population mean difference",
      "The mean difference is 5.4 mmHg with 95% certainty"
    ],
    answer: 2,
    explanation: "The frequentist interpretation of a 95% CI is: if the experiment were repeated many times and a CI calculated each time, 95% of those intervals would contain the true population parameter. It does NOT mean there is a 95% probability that the true value lies in this specific interval (that would be a Bayesian interpretation). Importantly, since the interval (2.5, 8.3) does not include 0, the difference is statistically significant at p < 0.05."
  },
  {
    id: 33,
    question: "A 95% confidence interval for the odds ratio of a risk factor for lung cancer is (0.85, 1.45). What can be concluded?",
    options: [
      "The risk factor significantly increases the odds of lung cancer",
      "The risk factor significantly decreases the odds of lung cancer",
      "The association is NOT statistically significant at the 5% level",
      "The odds ratio is exactly 1.15"
    ],
    answer: 2,
    explanation: "For odds ratios, the null value is 1.0 (no association). Since the 95% CI (0.85, 1.45) includes 1.0, we cannot reject the null hypothesis at the 5% significance level. The result is not statistically significant. If the entire CI were above 1, it would indicate a significant increased risk; if entirely below 1, a significant decreased risk. The CI provides more information than a p-value alone."
  },
  {
    id: 34,
    question: "Increasing the sample size in a study while keeping other factors constant will have what effect on the 95% confidence interval?",
    options: [
      "The interval will become wider",
      "The interval will become narrower",
      "The interval will remain the same",
      "The confidence level will increase to 99%"
    ],
    answer: 1,
    explanation: "The width of a confidence interval is proportional to SEM = SD / sqrt(n). As n increases, SEM decreases, leading to a narrower CI. A 95% CI for the mean = x-bar +/- 1.96 x (SD / sqrt(n)). Larger samples provide more precise estimates, reflected in tighter confidence intervals. The confidence level (95%) remains unchanged; only the precision of the estimate improves."
  },
  {
    id: 35,
    question: "A researcher reports a p-value of 0.001 for the effect of a new statin on LDL cholesterol reduction. Which of the following is TRUE?",
    options: [
      "The clinical significance of the effect is guaranteed to be large",
      "The result is statistically significant, but clinical significance must be assessed separately",
      "There is a 0.1% probability that the statin does not work",
      "The study has no Type I error"
    ],
    answer: 1,
    explanation: "Statistical significance (small p-value) does not equate to clinical significance. A very large study can detect a statistically significant but clinically trivial difference (e.g., 2 mg/dL reduction in LDL). Clinical significance depends on the magnitude of the effect (effect size), not just whether p < 0.05. A p-value of 0.001 indicates strong statistical evidence against the null hypothesis, but the practical importance must be judged by the effect size and clinical context."
  },
  {
    id: 36,
    question: "If a 99% confidence interval for the mean difference between two treatments is (-1.2, 5.8) and the 95% confidence interval is (0.1, 4.5), what can be concluded?",
    options: [
      "The result is significant at both 1% and 5% levels",
      "The result is significant at the 5% level but not at the 1% level",
      "The result is significant at the 1% level but not at the 5% level",
      "The result is not significant at either level"
    ],
    answer: 1,
    explanation: "The 95% CI (0.1, 4.5) does not include 0, so the result is significant at p < 0.05. However, the 99% CI (-1.2, 5.8) includes 0, so the result is NOT significant at p < 0.01. A 99% CI is always wider than a 95% CI because it requires a higher level of confidence. This demonstrates that the same data can be significant at one level but not another."
  },
  {
    id: 37,
    question: "In a vaccine trial, the 95% CI for vaccine efficacy is (45%, 78%). Which of the following p-values is consistent with this finding?",
    options: [
      "p = 0.08",
      "p = 0.06",
      "p = 0.002",
      "p = 0.50"
    ],
    answer: 2,
    explanation: "Vaccine efficacy of 0% would mean the vaccine has no effect (null value). Since the 95% CI (45%, 78%) does not include 0%, the result is statistically significant at p < 0.05. Among the choices, only p = 0.002 is less than 0.05 and consistent with a CI that is entirely above the null value. The CI being far from 0% suggests a highly significant result with a very small p-value."
  },
  {
    id: 38,
    question: "A 95% confidence interval for a proportion (e.g., prevalence of a disease) is calculated as p-hat +/- z x sqrt[p-hat(1 - p-hat)/n]. If the sample prevalence is 0.30 and n = 200, what is the approximate 95% CI?",
    options: [
      "(0.236, 0.364)",
      "(0.27, 0.33)",
      "(0.15, 0.45)",
      "(0.296, 0.304)"
    ],
    answer: 0,
    explanation: "95% CI = p-hat +/- 1.96 x sqrt[p-hat(1 - p-hat) / n] = 0.30 +/- 1.96 x sqrt[(0.30 x 0.70) / 200] = 0.30 +/- 1.96 x sqrt[0.21 / 200] = 0.30 +/- 1.96 x sqrt(0.00105) = 0.30 +/- 1.96 x 0.0324 = 0.30 +/- 0.0635 = (0.236, 0.364). This is the Wald confidence interval for a proportion, commonly used when np and n(1-p) are both greater than 5."
  },
  {
    id: 39,
    question: "A meta-analysis reports a pooled relative risk of 1.8 with a 95% CI of (1.3, 2.5) for the association between smoking and bladder cancer. What does this mean?",
    options: [
      "Smokers are 80% less likely to develop bladder cancer",
      "Smokers have 1.8 times the risk of bladder cancer, and this is statistically significant",
      "The association is not statistically significant",
      "80% of smokers will develop bladder cancer"
    ],
    answer: 1,
    explanation: "An RR of 1.8 means smokers have 1.8 times the risk (or 80% higher risk) of developing bladder cancer compared to non-smokers. Since the 95% CI (1.3, 2.5) does not include 1.0 (the null value for RR), the association is statistically significant at p < 0.05. The CI tells us the true RR is likely between 1.3 and 2.5 with 95% confidence. This is a clinically and statistically meaningful finding."
  },
  {
    id: 40,
    question: "Multiple comparison correction (e.g., Bonferroni correction) is needed when:",
    options: [
      "The sample size is very small",
      "Multiple statistical tests are performed simultaneously, inflating Type I error",
      "The data is not normally distributed",
      "The study is observational rather than experimental"
    ],
    answer: 1,
    explanation: "When multiple hypothesis tests are performed simultaneously, the probability of at least one false positive (Type I error) increases. For k independent tests at alpha = 0.05, the family-wise error rate = 1 - (1-0.05)^k. The Bonferroni correction adjusts the significance level to alpha/k (e.g., for 10 tests: 0.05/10 = 0.005). This is essential in genome-wide association studies, subgroup analyses, and any situation with multiple comparisons."
  },

  // ===== HYPOTHESIS TESTING (Q41-Q50) =====
  {
    id: 41,
    question: "A researcher wants to compare the mean blood pressure between three different treatment groups. Which statistical test is MOST appropriate?",
    options: [
      "Independent samples t-test",
      "Paired t-test",
      "One-way ANOVA",
      "Chi-square test"
    ],
    answer: 2,
    explanation: "One-way ANOVA (Analysis of Variance) is used to compare means across three or more independent groups. Using multiple t-tests would inflate the Type I error rate. ANOVA tests the null hypothesis that all group means are equal (H0: mu1 = mu2 = mu3). If ANOVA is significant, post-hoc tests (e.g., Tukey's, Bonferroni) are used to determine which specific pairs differ. Assumptions include normality, independence, and homogeneity of variances."
  },
  {
    id: 42,
    question: "A Type I error in hypothesis testing occurs when:",
    options: [
      "The null hypothesis is rejected when it is actually true",
      "The null hypothesis is not rejected when it is actually false",
      "The sample size is too small",
      "The test statistic is calculated incorrectly"
    ],
    answer: 0,
    explanation: "Type I error (alpha error, false positive) occurs when we reject a true null hypothesis, i.e., we conclude there is an effect when there is none. The probability of Type I error = alpha (significance level, usually 0.05). Type II error (beta error, false negative) occurs when we fail to reject a false null hypothesis. Power = 1 - beta = probability of correctly rejecting a false null hypothesis."
  },
  {
    id: 43,
    question: "A study compares the effectiveness of a new drug versus placebo using a paired t-test. Which scenario is appropriate for this test?",
    options: [
      "Comparing blood pressure of 50 males vs 50 females",
      "Comparing pre-treatment and post-treatment blood glucose in the same 50 patients",
      "Comparing infection rates between two hospitals",
      "Comparing mean weight across four diet groups"
    ],
    answer: 1,
    explanation: "The paired t-test (dependent samples t-test) is used when measurements are taken on the same subjects at two different times or under two conditions. Pre-treatment vs post-treatment measurements in the same patients create naturally paired observations. The test analyzes the differences within each pair. Option A requires an independent t-test; C requires a chi-square test; D requires ANOVA."
  },
  {
    id: 44,
    question: "Which of the following is NOT an assumption of the independent samples t-test?",
    options: [
      "The data in each group are normally distributed",
      "The variances of the two groups are approximately equal (homoscedasticity)",
      "The observations are independent",
      "The sample sizes of both groups must be exactly equal"
    ],
    answer: 3,
    explanation: "The three key assumptions of the independent samples t-test are: (1) normality of data in each group, (2) homogeneity of variances (homoscedasticity), and (3) independence of observations. Equal sample sizes are NOT required, though equal sizes increase the robustness of the test. When variances are unequal, Welch's t-test (which does not assume equal variances) can be used as an alternative."
  },
  {
    id: 45,
    question: "To compare the distribution of blood groups (A, B, AB, O) between patients with gastric cancer and healthy controls, which test is MOST appropriate?",
    options: [
      "Independent t-test",
      "ANOVA",
      "Chi-square test",
      "Paired t-test"
    ],
    answer: 2,
    explanation: "Blood group is a nominal (categorical) variable, and we are comparing the distribution of categories between two groups. The chi-square test of independence is appropriate for analyzing the association between two categorical variables. A 2 x 4 contingency table (disease status x blood group) would be constructed. t-tests and ANOVA are for continuous outcome variables."
  },
  {
    id: 46,
    question: "A researcher has a small sample (n = 12) of pain scores that are not normally distributed. To compare pain scores between two independent groups, which test should be used?",
    options: [
      "Independent samples t-test",
      "Mann-Whitney U test",
      "Paired t-test",
      "One-way ANOVA"
    ],
    answer: 1,
    explanation: "The Mann-Whitney U test (also called Wilcoxon rank-sum test) is the non-parametric alternative to the independent samples t-test. It does not assume normality and is appropriate for ordinal data or non-normally distributed continuous data, especially with small samples. It compares the ranks of observations rather than the raw values. For paired non-normal data, the Wilcoxon signed-rank test would be used instead."
  },
  {
    id: 47,
    question: "The power of a statistical test is 0.80. This means:",
    options: [
      "There is an 80% chance of committing a Type I error",
      "There is an 80% chance of detecting a true effect if one exists",
      "The significance level is 0.80",
      "80% of the results are statistically significant"
    ],
    answer: 1,
    explanation: "Power = 1 - beta, where beta is the probability of Type II error (false negative). Power of 0.80 means there is an 80% probability of correctly rejecting the null hypothesis when it is actually false, i.e., detecting a real effect. Factors that increase power include: larger sample size, larger effect size, higher alpha level, lower variability, and using a one-tailed test. A power of 0.80 is conventionally considered adequate for clinical trials."
  },
  {
    id: 48,
    question: "In a randomized controlled trial, the non-parametric equivalent of the one-way ANOVA for comparing pain scores (ordinal scale) across four treatment groups is:",
    options: [
      "Mann-Whitney U test",
      "Kruskal-Wallis test",
      "Wilcoxon signed-rank test",
      "Friedman test"
    ],
    answer: 1,
    explanation: "The Kruskal-Wallis test is the non-parametric equivalent of one-way ANOVA, used to compare three or more independent groups when data are ordinal or do not meet ANOVA assumptions. It uses ranked data. Mann-Whitney U compares only two independent groups. Wilcoxon signed-rank is for two related samples. The Friedman test is the non-parametric equivalent of repeated measures ANOVA (for related groups)."
  },
  {
    id: 49,
    question: "A study tests the hypothesis that a new antibiotic is superior to the standard treatment. The researcher uses a one-tailed test. Compared to a two-tailed test at the same alpha level, the one-tailed test:",
    options: [
      "Has less power to detect an effect in the hypothesized direction",
      "Has more power to detect an effect in the hypothesized direction",
      "Has the same power regardless of direction",
      "Requires a larger sample size"
    ],
    answer: 1,
    explanation: "A one-tailed test places the entire alpha (e.g., 0.05) in one tail of the distribution, while a two-tailed test splits it into both tails (0.025 each). This makes the one-tailed test more powerful for detecting an effect in the specified direction because the critical value is less extreme. However, it cannot detect effects in the opposite direction. One-tailed tests should only be used when there is strong a priori justification for the direction of the effect."
  },
  {
    id: 50,
    question: "Which of the following correctly matches the statistical test with its assumption about the data?",
    options: [
      "Chi-square test - requires normally distributed data",
      "ANOVA - assumes homogeneity of variances across groups",
      "Mann-Whitney U test - requires equal sample sizes",
      "Pearson correlation - does not require linearity"
    ],
    answer: 1,
    explanation: "ANOVA assumes: (1) normality within each group, (2) homogeneity of variances (tested by Levene's test or Bartlett's test), and (3) independence of observations. The chi-square test is for categorical data and does not require normality. The Mann-Whitney U test does not require equal sample sizes. Pearson correlation assumes linearity, normality, and homoscedasticity. When ANOVA's variance assumption is violated, Welch's ANOVA or non-parametric alternatives (Kruskal-Wallis) should be used."
  }
];

export default questions;

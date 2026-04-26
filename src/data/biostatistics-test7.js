const questions = [
  // ===== MEAN, MEDIAN, MODE (Q1-Q10) =====
  {
    id: 1,
    question: "In a community health survey, the annual household income (in INR) of 200 families is found to be heavily right-skewed due to a few very wealthy families. Which measure of central tendency best represents the 'typical' household income?",
    options: [
      "Arithmetic mean",
      "Median",
      "Mode",
      "Geometric mean"
    ],
    answer: 1,
    explanation: "The median is the preferred measure of central tendency for skewed data because it is not affected by extreme values (outliers). In a right-skewed income distribution, the mean is pulled toward the high-income tail, making it unrepresentative of the typical family. The median divides the distribution into two equal halves and provides a better summary of the central location."
  },
  {
    id: 2,
    question: "A pathologist records the survival time (in months) of 50 patients with pancreatic cancer: 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, ... with most patients dying within 6 months and a few surviving beyond 24 months. What is the relationship among mean, median, and mode in this distribution?",
    options: [
      "Mean = Median = Mode",
      "Mean < Median < Mode",
      "Mean > Median > Mode",
      "Mode > Mean > Median"
    ],
    answer: 2,
    explanation: "In a positively (right) skewed distribution, the tail extends to the right. The mode is the most frequent value and lies at the peak of the distribution (leftmost). The median lies in the middle, and the mean is pulled furthest to the right by the extreme survival times. Therefore: Mode < Median < Mean, or equivalently Mean > Median > Mode."
  },
  {
    id: 3,
    question: "The hemoglobin values (g/dL) of 10 adult male patients in a clinic are: 12.1, 13.4, 14.0, 14.2, 14.5, 14.8, 15.0, 15.3, 15.6, 16.1. What is the median hemoglobin value?",
    options: [
      "14.5 g/dL",
      "14.65 g/dL",
      "14.8 g/dL",
      "15.0 g/dL"
    ],
    answer: 1,
    explanation: "For an even number of observations (n = 10), the median is the average of the 5th and 6th values when arranged in ascending order. The 5th value is 14.5 and the 6th value is 14.8. Median = (14.5 + 14.8) / 2 = 29.3 / 2 = 14.65 g/dL."
  },
  {
    id: 4,
    question: "A dermatologist records the number of new psoriasis lesions per week in 100 patients and finds two peaks in the frequency distribution: one peak at 3 lesions and another at 8 lesions. This distribution is best described as:",
    options: [
      "Unimodal and symmetric",
      "Bimodal",
      "Positively skewed",
      "Leptokurtic"
    ],
    answer: 1,
    explanation: "A bimodal distribution has two distinct peaks (modes). Here, the two peaks at 3 and 8 lesions per week suggest two subpopulations within the patient group (e.g., mild vs. moderate disease). In bimodal distributions, neither the mean nor a single mode adequately summarizes the data; reporting both modes along with the median is more informative."
  },
  {
    id: 5,
    question: "In a study of birth weights, 500 neonates have a mean birth weight of 2.9 kg. Later, it is discovered that one reading of 2.5 kg was erroneously recorded as 25 kg. After correction, the mean will:",
    options: [
      "Decrease by 0.045 kg",
      "Increase by 0.045 kg",
      "Decrease by 0.45 kg",
      "Remain unchanged"
    ],
    answer: 0,
    explanation: "The erroneous value inflated the sum by 25 - 2.5 = 22.5 kg. The corrected mean decreases by 22.5 / 500 = 0.045 kg. This illustrates the sensitivity of the arithmetic mean to data entry errors and outliers. The median would likely remain unchanged by this single correction."
  },
  {
    id: 6,
    question: "A researcher studying the incubation period of a viral illness finds the data are log-normally distributed with values ranging from 2 to 45 days. The most appropriate measure of central tendency is:",
    options: [
      "Arithmetic mean",
      "Median",
      "Geometric mean",
      "Harmonic mean"
    ],
    answer: 2,
    explanation: "For log-normally distributed data, the geometric mean is the most appropriate measure of central tendency. It is calculated as the antilog of the mean of log-transformed values: GM = antilog[(sum of log xi) / n]. The geometric mean is always less than or equal to the arithmetic mean and better represents the central location of multiplicative or log-normal processes such as antibody titers, bacterial counts, and incubation periods."
  },
  {
    id: 7,
    question: "The ages of patients in a geriatric ward are: 65, 68, 70, 72, 72, 72, 75, 78, 80, 85. If a new 95-year-old patient is admitted, which measure of central tendency will change the most?",
    options: [
      "Mean",
      "Median",
      "Mode",
      "All change equally"
    ],
    answer: 0,
    explanation: "The mode (72) will not change as it is still the most frequent value. The median will shift only slightly (from 72 to 72, as the middle value barely changes with one additional observation). The mean, however, is affected by every value in the dataset. Original mean = 73.7; new mean = (737 + 95)/11 = 75.6. The mean changes the most because it incorporates the magnitude of every observation, including the extreme value of 95."
  },
  {
    id: 8,
    question: "In a bimodal distribution of serum ferritin levels in a mixed population of males and females, the two modes are 80 ng/mL and 180 ng/mL. What is the most likely explanation?",
    options: [
      "Laboratory measurement error",
      "Two overlapping subpopulations with different physiological norms",
      "The data are normally distributed",
      "The sample size is too small"
    ],
    answer: 1,
    explanation: "Bimodal distributions often indicate the presence of two distinct subpopulations within the data. Serum ferritin levels differ substantially between males (higher values, typically 30-300 ng/mL) and females (lower values, typically 15-150 ng/mL). The two peaks at 80 and 180 ng/mL likely correspond to the female and male subgroups respectively. Recognizing bimodality is important because reporting a single mean would be misleading."
  },
  {
    id: 9,
    question: "A hospital administrator calculates the average length of stay (ALOS) for patients in the ICU. The data shows: 60% of patients stay 3 days and 40% stay 10 days. The weighted mean length of stay is:",
    options: [
      "5.8 days",
      "6.5 days",
      "7.0 days",
      "6.0 days"
    ],
    answer: 0,
    explanation: "The weighted mean is calculated as: Weighted Mean = (w1 * x1 + w2 * x2) / (w1 + w2) = (0.60 x 3 + 0.40 x 10) / (0.60 + 0.40) = (1.8 + 4.0) / 1.0 = 5.8 days. The weighted mean accounts for the different proportions of patients in each category, unlike a simple average of 3 and 10 which would give 6.5 days."
  },
  {
    id: 10,
    question: "In a negatively skewed distribution of exam scores (most students scored high with a few very low scores), which of the following is true?",
    options: [
      "Mean > Median > Mode",
      "Mean = Median = Mode",
      "Mean < Median < Mode",
      "Mode < Mean < Median"
    ],
    answer: 2,
    explanation: "In a negatively (left) skewed distribution, the tail extends to the left. The few very low scores pull the mean toward the left. The mode is at the peak (highest frequency, which is toward the right since most students scored high). The median lies between the mean and mode. Therefore: Mean < Median < Mode."
  },

  // ===== STANDARD DEVIATION, VARIANCE (Q11-Q20) =====
  {
    id: 11,
    question: "In clinical chemistry, the normal range for serum sodium is often reported as 135-145 mEq/L, representing mean +/- 2 SD. If the mean serum sodium is 140 mEq/L, what is the standard deviation?",
    options: [
      "5 mEq/L",
      "2.5 mEq/L",
      "10 mEq/L",
      "1.25 mEq/L"
    ],
    answer: 1,
    explanation: "The normal range spans mean +/- 2 SD. The upper limit = mean + 2SD = 145, so 2SD = 145 - 140 = 5, giving SD = 2.5 mEq/L. Similarly, the lower limit = mean - 2SD = 140 - 5 = 135. This convention (mean +/- 2SD) captures approximately 95% of values in a normal distribution and is widely used to define reference ranges in laboratory medicine."
  },
  {
    id: 12,
    question: "The blood glucose levels (mg/dL) of 5 patients are: 80, 90, 100, 110, 120. The variance of this sample is:",
    options: [
      "200 (mg/dL)^2",
      "250 (mg/dL)^2",
      "14.14 mg/dL",
      "15.81 mg/dL"
    ],
    answer: 1,
    explanation: "Mean = (80+90+100+110+120)/5 = 100. Deviations from mean: -20, -10, 0, +10, +20. Squared deviations: 400, 100, 0, 100, 400. Sum of squared deviations = 1000. Sample variance = sum of squared deviations / (n-1) = 1000 / 4 = 250 (mg/dL)^2. Note: we divide by (n-1) = 4 for sample variance (Bessel's correction), not by n = 5 which would give the population variance of 200."
  },
  {
    id: 13,
    question: "A quality control lab measures hemoglobin A1c on the same control sample 20 times. The mean is 6.5% with SD = 0.1%. The coefficient of variation (CV) is:",
    options: [
      "0.65%",
      "1.54%",
      "6.5%",
      "15.4%"
    ],
    answer: 1,
    explanation: "The coefficient of variation (CV) = (SD / Mean) x 100 = (0.1 / 6.5) x 100 = 1.54%. The CV expresses variability as a percentage of the mean, making it useful for comparing precision across different assays or different analytes with different units. A CV of 1.54% indicates good analytical precision for the HbA1c assay."
  },
  {
    id: 14,
    question: "Two groups of patients have the following characteristics: Group A (n=50, mean BP=130 mmHg, SD=10) and Group B (n=50, mean BP=140 mmHg, SD=10). The variance of the combined group of 100 patients will be:",
    options: [
      "100 (mmHg)^2",
      "Equal to the average of the two variances = 100 (mmHg)^2",
      "Greater than 100 (mmHg)^2",
      "Less than 100 (mmHg)^2"
    ],
    answer: 2,
    explanation: "When combining two groups with different means, the combined variance has two components: (1) the within-group variance (pooled variance = 100) and (2) the between-group variance due to the difference in means. Combined variance = pooled within-group variance + between-group variance. Since the means differ (130 vs 140), the between-group variance is positive, making the combined variance greater than 100 (mmHg)^2. The exact combined variance = 100 + (50 x 50 / 100) x ((140-130)^2 / 100) = 100 + 25 = 125 (mmHg)^2."
  },
  {
    id: 15,
    question: "In a normally distributed population, approximately what percentage of values fall within mean +/- 1 SD?",
    options: [
      "50%",
      "68%",
      "95%",
      "99.7%"
    ],
    answer: 1,
    explanation: "This is the empirical rule (68-95-99.7 rule) for normal distributions: approximately 68.27% of values lie within 1 SD of the mean, 95.45% within 2 SD, and 99.73% within 3 SD. This is fundamental to interpreting laboratory reference ranges and understanding the spread of biological measurements."
  },
  {
    id: 16,
    question: "A researcher measures the height of 100 adults and obtains SD = 8 cm. The standard error of the mean (SEM) is:",
    options: [
      "8 cm",
      "0.8 cm",
      "0.08 cm",
      "80 cm"
    ],
    answer: 1,
    explanation: "The standard error of the mean (SEM) = SD / sqrt(n) = 8 / sqrt(100) = 8 / 10 = 0.8 cm. The SEM measures the precision of the sample mean as an estimate of the population mean. It is always smaller than the SD. While SD describes the spread of individual observations, SEM describes the uncertainty around the sample mean. SEM decreases as sample size increases."
  },
  {
    id: 17,
    question: "In laboratory quality control, the Westgard rules use multiples of SD to detect systematic and random errors. A control value exceeding mean + 3 SD is flagged. If the mean glucose control value is 100 mg/dL with SD = 3 mg/dL, the upper 3 SD limit is:",
    options: [
      "103 mg/dL",
      "106 mg/dL",
      "109 mg/dL",
      "112 mg/dL"
    ],
    answer: 2,
    explanation: "Upper 3 SD limit = Mean + 3 x SD = 100 + 3 x 3 = 100 + 9 = 109 mg/dL. In the Westgard 1-3s rule, a single control measurement exceeding mean +/- 3 SD indicates a random error and the analytical run should be rejected. Since only about 0.27% of values fall beyond 3 SD in a normal distribution, exceeding this limit is a strong signal that something is wrong with the assay."
  },
  {
    id: 18,
    question: "Which of the following statements about standard deviation is INCORRECT?",
    options: [
      "SD is expressed in the same units as the original data",
      "SD can never be negative",
      "SD is affected by extreme values (outliers)",
      "SD of a constant is equal to the constant"
    ],
    answer: 3,
    explanation: "The SD of a constant is 0, not the constant itself. If all values in a dataset are identical (a constant), there is no variation, so the SD = 0. All other statements are correct: SD has the same units as the data (unlike variance which has squared units), SD >= 0 always (since it is the square root of variance which is a sum of squares), and SD is sensitive to outliers because it involves squaring deviations from the mean."
  },
  {
    id: 19,
    question: "A clinical trial reports systolic BP reduction with Drug A as mean = 15 mmHg (SD = 5) and Drug B as mean = 15 mmHg (SD = 12). Which interpretation is most accurate?",
    options: [
      "Both drugs are equally effective since the mean reduction is the same",
      "Drug A shows more consistent response among patients",
      "Drug B is more effective because of greater variability",
      "The drugs cannot be compared without knowing the p-value"
    ],
    answer: 1,
    explanation: "Although both drugs achieve the same mean BP reduction of 15 mmHg, Drug A has a much smaller SD (5 vs 12), indicating more consistent and predictable response across patients. Drug B's larger SD means some patients may have excellent responses while others have minimal or no benefit. In clinical practice, a treatment with consistent efficacy (lower SD) is generally preferred because the response is more predictable for individual patients."
  },
  {
    id: 20,
    question: "If every value in a dataset is multiplied by a constant 'k', what happens to the variance?",
    options: [
      "Variance is multiplied by k",
      "Variance is multiplied by k^2",
      "Variance remains unchanged",
      "Variance is divided by k"
    ],
    answer: 1,
    explanation: "If every observation xi is multiplied by constant k, the new variance = k^2 x original variance. This is because Var(kX) = k^2 x Var(X). The SD, being the square root of variance, gets multiplied by |k|: SD(kX) = |k| x SD(X). For example, if heights measured in meters (SD = 0.08 m) are converted to centimeters (multiplied by 100), the new SD = 100 x 0.08 = 8 cm and new variance = 100^2 x 0.0064 = 64 cm^2."
  },

  // ===== PROBABILITY BASICS (Q21-Q30) =====
  {
    id: 21,
    question: "A diagnostic test for tuberculosis has a sensitivity of 90% and specificity of 80%. In a population with 10% TB prevalence, what is the positive predictive value (PPV)?",
    options: [
      "33.3%",
      "50.0%",
      "69.2%",
      "90.0%"
    ],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. PPV = (0.90 x 0.10) / [(0.90 x 0.10) + (0.20 x 0.90)] = 0.09 / (0.09 + 0.18) = 0.09 / 0.27 = 0.333 = 33.3%. This demonstrates that even with a good test, a low prevalence leads to a low PPV -- most positive results are false positives. This is a direct application of prior probability (prevalence) influencing posterior probability (PPV)."
  },
  {
    id: 22,
    question: "A disease has a prevalence of 1% in the general population. A screening test has sensitivity = 95% and specificity = 95%. The likelihood ratio for a positive test (LR+) is:",
    options: [
      "9.5",
      "19",
      "95",
      "0.95"
    ],
    answer: 1,
    explanation: "Likelihood Ratio Positive (LR+) = Sensitivity / (1 - Specificity) = 0.95 / (1 - 0.95) = 0.95 / 0.05 = 19. The LR+ indicates how many times more likely a positive test result is in a person with the disease compared to a person without the disease. An LR+ of 19 is considered a strong test. LR+ is independent of prevalence and can be used with pre-test odds to calculate post-test odds using the formula: Post-test odds = Pre-test odds x LR+."
  },
  {
    id: 23,
    question: "In Bayesian statistics, the prior probability of a patient having appendicitis based on clinical presentation is 0.60. After an ultrasound (LR+ = 5 for positive finding), the post-test probability of appendicitis given a positive ultrasound is approximately:",
    options: [
      "75%",
      "82%",
      "88%",
      "93%"
    ],
    answer: 2,
    explanation: "Step 1: Convert prior probability to prior odds = 0.60 / (1 - 0.60) = 0.60 / 0.40 = 1.5. Step 2: Post-test odds = Prior odds x LR+ = 1.5 x 5 = 7.5. Step 3: Convert post-test odds back to probability = 7.5 / (1 + 7.5) = 7.5 / 8.5 = 0.882 = approximately 88%. This demonstrates the Bayesian approach: starting with a prior probability (clinical assessment), updating it with new evidence (ultrasound result via likelihood ratio) to get a posterior probability."
  },
  {
    id: 24,
    question: "Two events A and B are independent. P(A) = 0.3 and P(B) = 0.4. What is P(A and B)?",
    options: [
      "0.70",
      "0.12",
      "0.10",
      "0.58"
    ],
    answer: 1,
    explanation: "For independent events, the multiplication rule states: P(A and B) = P(A) x P(B) = 0.3 x 0.4 = 0.12. Two events are independent if the occurrence of one does not affect the probability of the other. For example, the probability of a patient having both diabetes (P = 0.3) and an unrelated genetic trait (P = 0.4) simultaneously would be 0.12 if these conditions are truly independent."
  },
  {
    id: 25,
    question: "In a hospital, the probability of a patient developing a hospital-acquired infection (HAI) is 0.05, and the probability of developing a DVT is 0.03. If these events are mutually exclusive, what is the probability of a patient developing either HAI or DVT?",
    options: [
      "0.0015",
      "0.08",
      "0.0785",
      "0.05"
    ],
    answer: 1,
    explanation: "For mutually exclusive events (events that cannot occur simultaneously), the addition rule states: P(A or B) = P(A) + P(B) = 0.05 + 0.03 = 0.08. Note: In clinical reality, HAI and DVT are rarely truly mutually exclusive. If events are NOT mutually exclusive, we use P(A or B) = P(A) + P(B) - P(A and B). The assumption of mutual exclusivity simplifies the calculation but must be justified clinically."
  },
  {
    id: 26,
    question: "A genetic disorder follows autosomal recessive inheritance. Both parents are carriers (heterozygous). Using probability rules, the chance that their next child will be affected is:",
    options: [
      "1/2",
      "1/4",
      "3/4",
      "1/8"
    ],
    answer: 1,
    explanation: "In autosomal recessive inheritance with two carrier parents (Aa x Aa), the possible genotypes of offspring are: AA (1/4), Aa (1/4), aA (1/4), aa (1/4). Only the aa genotype is affected, so P(affected) = 1/4 = 0.25. Each pregnancy is an independent event, so the probability remains 1/4 regardless of the outcomes of previous children. This is a direct application of the multiplication rule for independent events in Mendelian genetics."
  },
  {
    id: 27,
    question: "The negative likelihood ratio (LR-) for a diagnostic test is 0.1. A patient with a pre-test probability of 50% for a disease tests negative. The post-test probability is approximately:",
    options: [
      "5%",
      "9%",
      "15%",
      "25%"
    ],
    answer: 1,
    explanation: "Step 1: Pre-test odds = 0.50 / (1 - 0.50) = 1.0. Step 2: Post-test odds = Pre-test odds x LR- = 1.0 x 0.1 = 0.1. Step 3: Post-test probability = 0.1 / (1 + 0.1) = 0.1 / 1.1 = 0.091 = approximately 9%. A low LR- (close to 0) effectively rules out the disease when the test is negative. The LR- = (1 - Sensitivity) / Specificity; a value of 0.1 means a negative result is 10 times less likely in someone with the disease than without it."
  },
  {
    id: 28,
    question: "Bayes' theorem relates prior and posterior probabilities. Which of the following best describes the 'prior probability' in a clinical context?",
    options: [
      "The probability of disease after a test result is known",
      "The probability of disease before any diagnostic test is performed",
      "The sensitivity of the diagnostic test",
      "The specificity of the diagnostic test"
    ],
    answer: 1,
    explanation: "The prior probability is the estimated probability of disease BEFORE obtaining the test result. It is often based on prevalence, clinical presentation, risk factors, and the clinician's judgment. After applying the test result (via the likelihood ratio), the prior probability is updated to the posterior probability (post-test probability). Bayes' theorem formalizes this process: P(Disease|Test+) = [P(Test+|Disease) x P(Disease)] / P(Test+)."
  },
  {
    id: 29,
    question: "A coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
    options: [
      "1/8",
      "3/8",
      "1/2",
      "1/4"
    ],
    answer: 1,
    explanation: "This follows the binomial probability formula: P(X = k) = C(n,k) x p^k x (1-p)^(n-k). Here n = 3, k = 2, p = 0.5. P(X=2) = C(3,2) x (0.5)^2 x (0.5)^1 = 3 x 0.25 x 0.5 = 3/8. The combinations are HHT, HTH, THH = 3 favorable outcomes out of 8 total outcomes (2^3 = 8). The binomial distribution is fundamental in biostatistics for modeling dichotomous outcomes like success/failure, disease/no disease."
  },
  {
    id: 30,
    question: "In a population screening program, the prevalence of disease X is 0.1%. A test with 99% sensitivity and 99% specificity is used. The probability that a person with a positive test actually has the disease (PPV) is approximately:",
    options: [
      "9%",
      "50%",
      "91%",
      "99%"
    ],
    answer: 0,
    explanation: "PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1-Specificity) x (1-Prevalence))] = (0.99 x 0.001) / [(0.99 x 0.001) + (0.01 x 0.999)] = 0.00099 / (0.00099 + 0.00999) = 0.00099 / 0.01098 = 0.0902 = approximately 9%. This dramatically illustrates the base-rate fallacy: even with an excellent test (99% sensitivity and specificity), when prevalence is very low (0.1%), most positive results are false positives. This is why mass screening for rare diseases is often impractical."
  },

  // ===== P-VALUE, CONFIDENCE INTERVALS (Q31-Q40) =====
  {
    id: 31,
    question: "A clinical trial comparing two drugs reports a p-value of 0.03. Which of the following is the CORRECT interpretation?",
    options: [
      "There is a 3% probability that the null hypothesis is true",
      "There is a 97% probability that the alternative hypothesis is true",
      "If the null hypothesis were true, the probability of obtaining results as extreme as (or more extreme than) those observed is 3%",
      "The treatment effect is clinically significant"
    ],
    answer: 2,
    explanation: "The p-value is the probability of obtaining the observed results (or more extreme results) ASSUMING the null hypothesis is true. It is NOT the probability that the null hypothesis is true or false. Common misconceptions include: (1) p-value = probability of null being true (wrong -- this would require Bayesian analysis), (2) 1 - p = probability of alternative being true (wrong), (3) statistical significance implies clinical significance (wrong -- a tiny, clinically irrelevant difference can be statistically significant with a large sample)."
  },
  {
    id: 32,
    question: "A study reports the difference in mean systolic BP between treatment and placebo groups as 5 mmHg with a 95% confidence interval of (1.2, 8.8). Which interpretation is CORRECT?",
    options: [
      "There is a 95% probability that the true population difference lies between 1.2 and 8.8 mmHg",
      "95% of patients will have a BP difference between 1.2 and 8.8 mmHg",
      "If this study were repeated many times, 95% of the calculated CIs would contain the true population difference",
      "The p-value is greater than 0.05"
    ],
    answer: 2,
    explanation: "The frequentist interpretation of a 95% CI is: if the experiment were repeated many times, 95% of the resulting confidence intervals would contain the true population parameter. A specific CI either contains the true value or it does not -- we cannot assign a probability to this after the data are collected. Note: since the CI (1.2 to 8.8) does not include 0, the result is statistically significant at p < 0.05. Option A is a common misconception known as the 'probability of parameter' fallacy."
  },
  {
    id: 33,
    question: "A researcher obtains a 95% CI for the odds ratio (OR) of a risk factor as (0.85, 1.42). What can be concluded?",
    options: [
      "The risk factor is statistically significant at the 5% level",
      "The risk factor is not statistically significant at the 5% level since the CI includes 1",
      "The risk factor is protective",
      "The sample size is too small"
    ],
    answer: 1,
    explanation: "For an odds ratio, the null value is 1 (indicating no association). Since the 95% CI (0.85, 1.42) includes 1, we cannot reject the null hypothesis at the 5% significance level. The result is not statistically significant. If the entire CI were above 1, it would suggest a harmful risk factor; if entirely below 1, it would suggest a protective factor. The width of the CI (0.57 units) also provides information about the precision of the estimate."
  },
  {
    id: 34,
    question: "A p-value of 0.001 compared to a p-value of 0.04 indicates:",
    options: [
      "The first study found a larger treatment effect",
      "The first study provides stronger evidence against the null hypothesis",
      "The first study is more clinically important",
      "The first study has a higher probability of Type II error"
    ],
    answer: 1,
    explanation: "A smaller p-value provides stronger evidence against the null hypothesis because the observed data would be even more unlikely under the null. However, a smaller p-value does NOT necessarily mean a larger effect size (it could result from a larger sample size), nor does it indicate greater clinical importance. The p-value is influenced by both effect size and sample size: p-value magnitude reflects the strength of evidence against H0, not the magnitude of the effect."
  },
  {
    id: 35,
    question: "If a 99% confidence interval is constructed instead of a 95% confidence interval for the same data, the interval will be:",
    options: [
      "Narrower",
      "Wider",
      "The same width",
      "Shifted to the right"
    ],
    answer: 1,
    explanation: "A higher confidence level (99% vs 95%) requires a wider interval to achieve greater certainty of capturing the true parameter. The 99% CI uses a larger critical value (z = 2.576 vs z = 1.96 for 95%). The formula CI = mean +/- z x SEM shows that a larger z-value produces a wider interval. There is a trade-off: greater confidence (less risk of missing the true value) comes at the cost of less precision (wider interval). This is analogous to casting a wider net to be more sure of catching the fish."
  },
  {
    id: 36,
    question: "A study on a new antibiotic finds a cure rate difference of 2% (new drug vs. standard, 95% CI: 0.5% to 3.5%, p = 0.009). A critic argues the finding, while statistically significant, is not clinically meaningful. This criticism relates to:",
    options: [
      "Type I error",
      "Type II error",
      "The distinction between statistical significance and clinical significance",
      "Poor study design"
    ],
    answer: 2,
    explanation: "Statistical significance (p < 0.05) indicates the observed difference is unlikely due to chance alone. However, the magnitude of the difference (2%) may be too small to matter clinically. Clinical significance depends on the context: a 2% improvement in cure rate may not justify increased cost, side effects, or complexity of a new treatment. Large sample sizes can detect very small, clinically trivial differences as statistically significant. Researchers should always report effect sizes and CIs alongside p-values."
  },
  {
    id: 37,
    question: "Which of the following is a common MISCONCEPTION about the p-value?",
    options: [
      "The p-value is calculated assuming the null hypothesis is true",
      "A p-value of 0.05 means there is a 5% chance that the null hypothesis is true",
      "The p-value depends on both effect size and sample size",
      "A non-significant p-value does not prove the null hypothesis"
    ],
    answer: 1,
    explanation: "Saying 'there is a 5% chance that the null hypothesis is true' is a classic misconception. The p-value is the probability of the observed data (or more extreme) given that H0 is true: P(data | H0). It is NOT the probability that H0 is true given the data: P(H0 | data). Confusing these two is the 'prosecutor's fallacy' or 'transposition of the conditional.' To find P(H0 | data), one would need Bayes' theorem along with a prior probability for H0."
  },
  {
    id: 38,
    question: "A study reports a mean difference with 95% CI as 3.5 (95% CI: -0.2 to 7.2, p = 0.06). Another study reports a mean difference of 3.5 (95% CI: 3.0 to 4.0, p < 0.001). The difference between these two results is best explained by:",
    options: [
      "Different effect sizes",
      "Different sample sizes leading to different precision",
      "Different populations studied",
      "Different outcome measures"
    ],
    answer: 1,
    explanation: "Both studies have the same point estimate (3.5), but the second study has a much narrower CI (3.0-4.0 vs. -0.2 to 7.2) and a highly significant p-value. The width of the CI is determined by the SEM, which equals SD/sqrt(n). A narrower CI indicates greater precision, typically from a larger sample size. The first study likely had insufficient power (too small a sample) to detect the difference as statistically significant, resulting in a CI that crosses zero and p > 0.05."
  },
  {
    id: 39,
    question: "For a relative risk (RR), the null value is 1.0. A study reports RR = 2.5 with 95% CI (1.8, 3.4) for the association between smoking and lung cancer. This means:",
    options: [
      "The result is not statistically significant",
      "Smokers have 2.5 times the risk of lung cancer compared to non-smokers, and this is statistically significant",
      "The probability that smoking causes lung cancer is 95%",
      "25% of smokers will develop lung cancer"
    ],
    answer: 1,
    explanation: "An RR of 2.5 means the risk of lung cancer is 2.5 times higher in smokers than non-smokers. The 95% CI (1.8, 3.4) does not include the null value of 1.0, so the association is statistically significant at the 5% level. The CI also tells us the true RR likely lies between 1.8 and 3.4, providing a range of plausible effect sizes. This is more informative than a p-value alone, which provides no information about the magnitude of the effect."
  },
  {
    id: 40,
    question: "In a meta-analysis, the pooled effect estimate has a 95% CI that just barely crosses the null value (e.g., OR = 0.78, 95% CI: 0.60-1.02, p = 0.07). The most appropriate conclusion is:",
    options: [
      "The treatment is definitely ineffective",
      "The treatment is effective but the evidence is weak",
      "There is a trend toward benefit but the result does not reach statistical significance at the 5% level",
      "The meta-analysis is invalid"
    ],
    answer: 2,
    explanation: "When the 95% CI marginally includes the null value and the p-value is close to but above 0.05, the appropriate conclusion is that there is a trend or suggestion of benefit that does not reach conventional statistical significance. This does NOT prove the treatment is ineffective (absence of evidence is not evidence of absence). The point estimate (OR = 0.78) suggests a 22% reduction in odds, but the CI indicates this could range from a 40% reduction to a 2% increase. More data (larger studies) may clarify the result."
  },

  // ===== HYPOTHESIS TESTING (Q41-Q50) =====
  {
    id: 41,
    question: "A researcher sets alpha = 0.05 and finds a statistically significant result. Later, the finding is not replicated. The original significant result was most likely a:",
    options: [
      "Type I error (false positive)",
      "Type II error (false negative)",
      "True positive",
      "Power failure"
    ],
    answer: 0,
    explanation: "A Type I error occurs when the null hypothesis is true but is incorrectly rejected. With alpha = 0.05, there is a 5% chance of a Type I error in each test. If a significant result fails to replicate, it suggests the original finding may have been a false positive (Type I error). This is a major concern in medical research, especially with multiple testing, small sample sizes, and publication bias favoring positive results. The replication crisis in science is largely attributed to Type I errors."
  },
  {
    id: 42,
    question: "A clinical trial is designed with 80% power (beta = 0.20) to detect a 10 mmHg difference in blood pressure. This means:",
    options: [
      "There is an 80% chance of detecting a true difference of 10 mmHg if it exists",
      "There is a 20% chance of detecting a true difference",
      "There is an 80% chance of a Type I error",
      "The p-value will be 0.20"
    ],
    answer: 0,
    explanation: "Power = 1 - beta = 1 - 0.20 = 0.80. Power is the probability of correctly rejecting the null hypothesis when the alternative is true (i.e., detecting a real effect). Beta (0.20) is the probability of a Type II error (failing to detect a real difference). With 80% power, there is a 20% chance of missing a true 10 mmHg difference (Type II error). Power depends on: (1) alpha level, (2) sample size, (3) effect size, and (4) variability. Increasing sample size is the most common way to increase power."
  },
  {
    id: 43,
    question: "The non-parametric equivalent of the independent samples t-test is:",
    options: [
      "Wilcoxon signed-rank test",
      "Mann-Whitney U test",
      "Kruskal-Wallis test",
      "Friedman test"
    ],
    answer: 1,
    explanation: "The Mann-Whitney U test (also called Wilcoxon rank-sum test) is the non-parametric equivalent of the independent samples t-test. It compares two independent groups using ranks rather than raw values. Key non-parametric equivalents: Independent t-test -> Mann-Whitney U; Paired t-test -> Wilcoxon signed-rank test; One-way ANOVA -> Kruskal-Wallis test; Repeated measures ANOVA -> Friedman test. Non-parametric tests are used when data are ordinal, not normally distributed, or have small sample sizes."
  },
  {
    id: 44,
    question: "A researcher wants to compare the effectiveness of three different physiotherapy techniques on pain scores (ordinal data). The appropriate test is:",
    options: [
      "One-way ANOVA",
      "Chi-square test",
      "Kruskal-Wallis test",
      "Paired t-test"
    ],
    answer: 2,
    explanation: "The Kruskal-Wallis test is the non-parametric equivalent of one-way ANOVA, used to compare three or more independent groups when the outcome is ordinal or when the assumptions of ANOVA (normality, interval data) are not met. Pain scores measured on ordinal scales (e.g., 0-10 visual analog scale treated as ordinal) are best analyzed with the Kruskal-Wallis test. If significant, post-hoc pairwise comparisons (e.g., Dunn's test) can identify which groups differ."
  },
  {
    id: 45,
    question: "A study with alpha = 0.05 and beta = 0.10 has a power of:",
    options: [
      "0.05",
      "0.10",
      "0.90",
      "0.95"
    ],
    answer: 2,
    explanation: "Power = 1 - beta = 1 - 0.10 = 0.90 or 90%. This is a well-powered study with only a 10% chance of missing a true effect (Type II error). The relationship between alpha, beta, and power is: alpha = P(Type I error) = P(reject H0 | H0 true); beta = P(Type II error) = P(fail to reject H0 | H1 true); Power = 1 - beta = P(reject H0 | H1 true). A power of 90% is considered excellent and is recommended for confirmatory clinical trials."
  },
  {
    id: 46,
    question: "A researcher compares pre- and post-treatment pain scores (ordinal scale) in the same 30 patients. The appropriate non-parametric test is:",
    options: [
      "Mann-Whitney U test",
      "Wilcoxon signed-rank test",
      "Kruskal-Wallis test",
      "Chi-square test"
    ],
    answer: 1,
    explanation: "The Wilcoxon signed-rank test is the non-parametric equivalent of the paired t-test. It is used when comparing two related (paired) measurements from the same subjects, especially when data are ordinal or not normally distributed. The test works by: (1) calculating the differences between pairs, (2) ranking the absolute differences, (3) comparing the sum of positive and negative ranks. Since the same 30 patients are measured before and after treatment, the data are paired."
  },
  {
    id: 47,
    question: "In hypothesis testing, reducing the significance level from 0.05 to 0.01 (while keeping sample size constant) will:",
    options: [
      "Decrease the probability of Type I error and increase the probability of Type II error",
      "Decrease both Type I and Type II errors",
      "Increase the probability of Type I error",
      "Have no effect on either error type"
    ],
    answer: 0,
    explanation: "There is an inherent trade-off between Type I and Type II errors when sample size is fixed. Lowering alpha from 0.05 to 0.01 makes the rejection criterion stricter, reducing the chance of falsely rejecting H0 (Type I error). However, this also makes it harder to reject H0 even when it is false, increasing the chance of Type II error (beta) and reducing power. The only way to reduce both errors simultaneously is to increase the sample size. This trade-off is fundamental to study design."
  },
  {
    id: 48,
    question: "A pharmaceutical company performs 20 independent hypothesis tests, each at alpha = 0.05. Even if all null hypotheses are true, the expected number of statistically significant results (false positives) is:",
    options: [
      "0",
      "1",
      "5",
      "20"
    ],
    answer: 1,
    explanation: "If all 20 null hypotheses are true and each test is performed at alpha = 0.05, the expected number of false positives = 20 x 0.05 = 1. This is the multiple testing problem: with many tests, some will be significant by chance alone. The probability of at least one false positive = 1 - (1 - 0.05)^20 = 1 - 0.358 = 0.642 (64.2%). Corrections for multiple testing (Bonferroni: adjusted alpha = 0.05/20 = 0.0025; or False Discovery Rate methods) are essential when performing many simultaneous tests."
  },
  {
    id: 49,
    question: "A one-tailed (one-sided) test is preferred over a two-tailed test when:",
    options: [
      "The researcher wants a significant result",
      "There is a strong prior scientific rationale that the effect can only occur in one direction",
      "The sample size is small",
      "The data are not normally distributed"
    ],
    answer: 1,
    explanation: "A one-tailed test should only be used when there is a strong a priori (before data collection) scientific or biological rationale that the effect can only go in one direction. For example, testing whether a new drug is BETTER (not just different) than placebo, when it is biologically implausible that the drug could be worse. One-tailed tests have more power to detect effects in the hypothesized direction but cannot detect effects in the opposite direction. In most medical research, two-tailed tests are preferred because unexpected findings in either direction are important."
  },
  {
    id: 50,
    question: "A study finds no significant difference between two treatments (p = 0.45). The researcher concludes the treatments are equivalent. This conclusion is:",
    options: [
      "Correct, since p > 0.05",
      "Incorrect, because a non-significant result does not prove equivalence (absence of evidence is not evidence of absence)",
      "Correct, because the large p-value proves the null hypothesis",
      "Incorrect, because the alpha should have been set at 0.10"
    ],
    answer: 1,
    explanation: "Failure to reject the null hypothesis does NOT prove the null hypothesis is true. A non-significant p-value may result from: (1) truly no difference, (2) insufficient sample size (low power), or (3) high variability. To demonstrate equivalence, a specific equivalence trial or non-inferiority trial with pre-defined equivalence margins must be conducted, using methods such as the Two One-Sided Tests (TOST) procedure. The principle 'absence of evidence is not evidence of absence' is crucial in interpreting non-significant results."
  }
];

export default questions;

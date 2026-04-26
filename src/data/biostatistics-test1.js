const questions = [
  // ===== MEAN, MEDIAN, MODE (Q1–Q10) =====
  {
    id: 1,
    question: "The mean of the dataset {2, 4, 6, 8, 10} is:",
    options: ["4", "6", "8", "5"],
    answer: 1,
    explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6. The arithmetic mean is the sum of all observations divided by the number of observations."
  },
  {
    id: 2,
    question: "Which measure of central tendency is least affected by extreme outliers?",
    options: ["Mean", "Median", "Range", "Variance"],
    answer: 1,
    explanation: "The median is the middle value when data are arranged in order and is resistant to outliers. The mean is pulled toward extreme values. Range and variance are measures of dispersion, not central tendency."
  },
  {
    id: 3,
    question: "In a positively skewed distribution, the relationship between mean, median, and mode is typically:",
    options: ["Mean = Median = Mode", "Mean > Median > Mode", "Mean < Median < Mode", "Mode > Mean > Median"],
    answer: 1,
    explanation: "In a positively (right) skewed distribution, the tail extends to the right, pulling the mean furthest right: Mean > Median > Mode. In negative skew, the order reverses."
  },
  {
    id: 4,
    question: "A dataset has values: 3, 5, 5, 7, 9, 9, 9, 12. The mode is:",
    options: ["5", "7", "9", "5 and 9"],
    answer: 2,
    explanation: "The mode is the most frequently occurring value. Here, 9 appears 3 times (more than any other value), so the mode is 9."
  },
  {
    id: 5,
    question: "The median of the dataset {12, 7, 3, 15, 9, 21} is:",
    options: ["9", "10.5", "11.17", "12"],
    answer: 1,
    explanation: "First arrange in order: 3, 7, 9, 12, 15, 21. With 6 values (even), median = average of 3rd and 4th values = (9+12)/2 = 10.5."
  },
  {
    id: 6,
    question: "In a perfectly normal distribution, the mean, median, and mode are:",
    options: ["Mean > Median > Mode", "All different values", "All equal", "Mode > Median > Mean"],
    answer: 2,
    explanation: "A perfectly normal (symmetric, bell-shaped) distribution has Mean = Median = Mode. They all coincide at the center of the distribution."
  },
  {
    id: 7,
    question: "A researcher records the following ages of patients: 22, 25, 25, 28, 30, 30, 30, 35. This distribution is:",
    options: ["Unimodal", "Bimodal", "Trimodal", "Amodal"],
    answer: 0,
    explanation: "The mode is 30 (appears 3 times). Although 25 and 30 both repeat, 30 has the highest frequency, making it unimodal. A bimodal distribution would have two values with equal highest frequency."
  },
  {
    id: 8,
    question: "The weighted mean is most appropriate when:",
    options: ["All observations have equal importance", "Observations have different levels of importance or frequency", "The data are categorical", "The data are normally distributed"],
    answer: 1,
    explanation: "The weighted mean assigns different weights to observations based on their importance, frequency, or reliability. It is calculated as the sum of (weight x value) divided by the sum of weights."
  },
  {
    id: 9,
    question: "If every value in a dataset is increased by a constant k, the mean will:",
    options: ["Remain unchanged", "Increase by k", "Increase by k squared", "Double"],
    answer: 1,
    explanation: "Adding a constant k to every observation shifts the mean by k. If original mean = X-bar, new mean = X-bar + k. This is because the mean is a linear measure."
  },
  {
    id: 10,
    question: "The geometric mean is most appropriate for calculating the average of:",
    options: ["Heights of students in a class", "Rates of change or ratios over time", "Blood pressure readings", "Number of patients per ward"],
    answer: 1,
    explanation: "The geometric mean is the nth root of the product of n values. It is ideal for averaging ratios, percentages, growth rates, or data spanning several orders of magnitude (e.g., antibody titers)."
  },

  // ===== STANDARD DEVIATION & VARIANCE (Q11–Q20) =====
  {
    id: 11,
    question: "The variance of a dataset is 16. The standard deviation is:",
    options: ["4", "8", "16", "256"],
    answer: 0,
    explanation: "Standard deviation (SD) = square root of variance = sqrt(16) = 4. Variance = SD squared. SD is in the same units as the original data, making it more interpretable."
  },
  {
    id: 12,
    question: "Which of the following is a measure of dispersion?",
    options: ["Mean", "Median", "Interquartile range", "Mode"],
    answer: 2,
    explanation: "Interquartile range (IQR = Q3 - Q1) is a measure of dispersion representing the spread of the middle 50% of data. Mean, median, and mode are measures of central tendency."
  },
  {
    id: 13,
    question: "In a normally distributed population with mean 100 and SD 15, approximately what percentage of values fall between 70 and 130?",
    options: ["68%", "85%", "95%", "99.7%"],
    answer: 2,
    explanation: "70 to 130 represents mean +/- 2SD (100 +/- 30). By the empirical rule: 68% within +/-1SD, 95% within +/-2SD, 99.7% within +/-3SD. So approximately 95% of values fall between 70 and 130."
  },
  {
    id: 14,
    question: "A researcher increases sample size from 100 to 400. What happens to the standard error of the mean?",
    options: ["Reduced to one-quarter", "Reduced to one-half", "Remains the same", "Doubles"],
    answer: 1,
    explanation: "Standard error = SD/sqrt(n). When n increases from 100 to 400, SE changes by a factor of sqrt(100)/sqrt(400) = 10/20 = 1/2. Quadrupling the sample size halves the standard error."
  },
  {
    id: 15,
    question: "The standard deviation of the sampling distribution of the mean is called the:",
    options: ["Standard deviation", "Standard error", "Variance", "Coefficient of variation"],
    answer: 1,
    explanation: "The standard error of the mean (SEM) is the standard deviation of the sampling distribution of the sample mean. SEM = SD/sqrt(n). It quantifies precision of the sample mean estimate."
  },
  {
    id: 16,
    question: "The coefficient of variation (CV) is useful because it:",
    options: ["Is always between 0 and 1", "Allows comparison of variability between variables with different units", "Is unaffected by the mean", "Is the same as standard deviation"],
    answer: 1,
    explanation: "CV = (SD/Mean) x 100%. It is a unitless, relative measure of variability that allows comparison of dispersion between variables measured on different scales (e.g., weight in kg vs. height in cm)."
  },
  {
    id: 17,
    question: "If every value in a dataset is multiplied by a constant c, the standard deviation will:",
    options: ["Remain unchanged", "Be multiplied by c", "Be multiplied by c squared", "Be divided by c"],
    answer: 1,
    explanation: "When each observation is multiplied by c, the SD is multiplied by |c|. Variance is multiplied by c squared. Adding a constant does not change SD, but multiplying does."
  },
  {
    id: 18,
    question: "In a population, BMI follows a normal distribution with mean 25 and SD 4. What is the z-score for a person with BMI 33?",
    options: ["1.0", "1.5", "2.0", "2.5"],
    answer: 2,
    explanation: "Z-score = (X - mean) / SD = (33 - 25) / 4 = 8/4 = 2.0. This means a BMI of 33 is 2 standard deviations above the mean."
  },
  {
    id: 19,
    question: "Which property is TRUE about variance?",
    options: ["It can be negative", "It is expressed in the same units as the data", "It is always non-negative", "It equals the mean of the data"],
    answer: 2,
    explanation: "Variance is the average of squared deviations from the mean. Since squares are always non-negative, variance is always >= 0. It is expressed in squared units (e.g., cm squared), not the original units."
  },
  {
    id: 20,
    question: "The range of the dataset {4, 8, 15, 16, 23, 42} is:",
    options: ["38", "42", "15.5", "4"],
    answer: 0,
    explanation: "Range = Maximum - Minimum = 42 - 4 = 38. The range is the simplest measure of dispersion but is highly sensitive to outliers since it only uses two data points."
  },

  // ===== PROBABILITY BASICS (Q21–Q30) =====
  {
    id: 21,
    question: "If P(A) = 0.3 and P(B) = 0.4, and A and B are mutually exclusive events, then P(A or B) is:",
    options: ["0.12", "0.70", "0.58", "0.10"],
    answer: 1,
    explanation: "For mutually exclusive events, P(A or B) = P(A) + P(B) = 0.3 + 0.4 = 0.7. Mutually exclusive means A and B cannot occur simultaneously, so P(A and B) = 0."
  },
  {
    id: 22,
    question: "If P(A) = 0.5 and P(B) = 0.3, and A and B are independent events, then P(A and B) is:",
    options: ["0.80", "0.15", "0.20", "0.50"],
    answer: 1,
    explanation: "For independent events, P(A and B) = P(A) x P(B) = 0.5 x 0.3 = 0.15. Independence means the occurrence of one event does not affect the probability of the other."
  },
  {
    id: 23,
    question: "The probability of an event ranges from:",
    options: ["-1 to +1", "0 to 1", "0 to infinity", "-infinity to +infinity"],
    answer: 1,
    explanation: "Probability always ranges from 0 (impossible event) to 1 (certain event). P = 0 means the event cannot occur; P = 1 means it will certainly occur."
  },
  {
    id: 24,
    question: "A coin is tossed 3 times. The probability of getting exactly 2 heads is:",
    options: ["1/8", "3/8", "1/2", "1/4"],
    answer: 1,
    explanation: "Using the binomial formula: P(X=2) = C(3,2) x (0.5)^2 x (0.5)^1 = 3 x 0.25 x 0.5 = 3/8. The three favorable outcomes are HHT, HTH, THH out of 8 total outcomes."
  },
  {
    id: 25,
    question: "Bayes' theorem is used to:",
    options: ["Calculate the mean of a distribution", "Update the probability of a hypothesis given new evidence", "Test the difference between two means", "Calculate the standard deviation"],
    answer: 1,
    explanation: "Bayes' theorem updates the prior probability of a hypothesis based on new evidence to give a posterior probability: P(A|B) = P(B|A) x P(A) / P(B). It is fundamental in diagnostic testing and clinical decision-making."
  },
  {
    id: 26,
    question: "Which of the following distributions is used to model rare events in a fixed interval?",
    options: ["Normal distribution", "Binomial distribution", "Poisson distribution", "Exponential distribution"],
    answer: 2,
    explanation: "The Poisson distribution models the number of rare events occurring in a fixed interval of time or space, when events occur independently at a constant average rate. It is characterized by a single parameter lambda (mean = variance)."
  },
  {
    id: 27,
    question: "In a Poisson distribution, if the mean number of events per interval is 4, the variance is:",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "A defining property of the Poisson distribution is that mean = variance = lambda. If lambda = 4, then variance = 4."
  },
  {
    id: 28,
    question: "If two events A and B are independent, which of the following is TRUE?",
    options: ["P(A|B) = P(A)", "P(A|B) = P(B)", "P(A and B) = P(A) + P(B)", "P(A or B) = P(A) x P(B)"],
    answer: 0,
    explanation: "If A and B are independent, the probability of A given B is just P(A) — knowing B occurred does not change the probability of A. This is the definition of independence: P(A|B) = P(A)."
  },
  {
    id: 29,
    question: "The complement of an event A with P(A) = 0.65 has a probability of:",
    options: ["0.65", "0.35", "1.30", "0"],
    answer: 1,
    explanation: "The complement of A (denoted A') represents 'A does not occur.' P(A') = 1 - P(A) = 1 - 0.65 = 0.35. The sum of an event and its complement always equals 1."
  },
  {
    id: 30,
    question: "In the normal distribution, approximately what percentage of data falls within 1 standard deviation of the mean?",
    options: ["50%", "68%", "95%", "99.7%"],
    answer: 1,
    explanation: "The empirical (68-95-99.7) rule states: approximately 68% of data falls within +/-1 SD, 95% within +/-2 SD, and 99.7% within +/-3 SD of the mean in a normal distribution."
  },

  // ===== P-VALUE & CONFIDENCE INTERVALS (Q31–Q40) =====
  {
    id: 31,
    question: "A p-value of 0.03 means:",
    options: ["There is a 3% chance the null hypothesis is true", "There is a 3% probability of observing results at least as extreme as those obtained, assuming the null hypothesis is true", "The treatment is 97% effective", "3% of patients responded to treatment"],
    answer: 1,
    explanation: "The p-value is the probability of obtaining results as extreme as (or more extreme than) the observed data, assuming the null hypothesis is true. It is NOT the probability that the null hypothesis is true."
  },
  {
    id: 32,
    question: "A 95% confidence interval for a mean difference is (2.5, 8.3). Which statement is correct?",
    options: ["There is a 95% probability that the true mean difference lies in this interval", "If we repeated the study many times, 95% of such intervals would contain the true mean difference", "The p-value is > 0.05", "The mean difference is not statistically significant"],
    answer: 1,
    explanation: "The frequentist interpretation: if we repeated the experiment many times, 95% of the constructed intervals would contain the true parameter. Since the interval (2.5, 8.3) does not include 0, the difference is statistically significant (p < 0.05)."
  },
  {
    id: 33,
    question: "A study reports an odds ratio of 3.5 (95% CI: 0.8-15.2). The correct interpretation is:",
    options: ["The association is statistically significant at p < 0.05", "The study has adequate power", "The association is not statistically significant as the CI includes 1", "The odds ratio proves causation"],
    answer: 2,
    explanation: "When the 95% confidence interval for an odds ratio crosses 1 (the null value), the result is not statistically significant at the 0.05 level. Here CI is 0.8-15.2 which includes 1, so we cannot reject the null hypothesis."
  },
  {
    id: 34,
    question: "Increasing the sample size of a study will generally:",
    options: ["Widen the confidence interval", "Narrow the confidence interval", "Have no effect on the confidence interval", "Eliminate all bias"],
    answer: 1,
    explanation: "Larger samples decrease the standard error (SE = SD/sqrt(n)), which narrows the confidence interval. A narrower CI indicates a more precise estimate of the population parameter."
  },
  {
    id: 35,
    question: "If a researcher changes from a 95% confidence interval to a 99% confidence interval, the interval will:",
    options: ["Become narrower", "Become wider", "Remain the same width", "Shift to the right"],
    answer: 1,
    explanation: "A 99% CI must capture the true parameter more often than a 95% CI, so it must be wider. The higher confidence level uses a larger z-value (2.576 vs 1.96), increasing the margin of error."
  },
  {
    id: 36,
    question: "A researcher finds a statistically significant result with a very large sample size but a very small effect size. This suggests:",
    options: ["The finding is clinically important", "Statistical significance does not imply clinical significance", "The study is underpowered", "The null hypothesis is true"],
    answer: 1,
    explanation: "With very large samples, even trivially small effects can achieve statistical significance. Clinical significance depends on the magnitude of the effect, not just the p-value."
  },
  {
    id: 37,
    question: "A p-value of 0.001 compared to a p-value of 0.04 means:",
    options: ["The first result has a larger effect size", "The first result provides stronger evidence against the null hypothesis", "The first result is more clinically important", "The null hypothesis is definitely false for the first result"],
    answer: 1,
    explanation: "A smaller p-value provides stronger evidence against the null hypothesis (the observed data would be more unlikely under H0). However, p-value magnitude does not indicate effect size or clinical importance."
  },
  {
    id: 38,
    question: "A 95% confidence interval for a population mean is (50, 70). The point estimate (sample mean) is most likely:",
    options: ["50", "60", "70", "95"],
    answer: 1,
    explanation: "The point estimate lies at the center of the confidence interval. Center = (50 + 70) / 2 = 60. The CI is symmetric around the sample mean: 60 +/- 10."
  },
  {
    id: 39,
    question: "Which of the following would NOT decrease the width of a confidence interval?",
    options: ["Increasing sample size", "Decreasing the confidence level", "Decreasing the population variability", "Increasing the confidence level"],
    answer: 3,
    explanation: "Increasing the confidence level (e.g., from 95% to 99%) widens the CI. Increasing sample size, decreasing confidence level, and decreasing variability all narrow the CI."
  },
  {
    id: 40,
    question: "If a 95% CI for the difference in means between two treatments is (-3.2, 1.5), we can conclude:",
    options: ["Treatment A is significantly better", "Treatment B is significantly better", "There is no statistically significant difference at the 0.05 level", "The study is invalid"],
    answer: 2,
    explanation: "The CI includes 0, meaning we cannot reject the null hypothesis of no difference at alpha = 0.05. Zero (no difference) is a plausible value for the true difference."
  },

  // ===== HYPOTHESIS TESTING (Q41–Q50) =====
  {
    id: 41,
    question: "Which of the following is a Type II error?",
    options: ["Rejecting a true null hypothesis", "Failing to reject a false null hypothesis", "Rejecting a false null hypothesis", "Accepting a true null hypothesis"],
    answer: 1,
    explanation: "Type II error (beta) = failing to reject a false null hypothesis (missing a real effect). Type I error (alpha) = rejecting a true null hypothesis (false positive). Power = 1 - beta."
  },
  {
    id: 42,
    question: "If the probability of a Type I error is 0.05 and Type II error is 0.20, the power of the study is:",
    options: ["0.05", "0.20", "0.80", "0.95"],
    answer: 2,
    explanation: "Power = 1 - beta = 1 - 0.20 = 0.80 or 80%. Power is the probability of correctly rejecting a false null hypothesis (detecting a true effect). Conventional minimum acceptable power is 80%."
  },
  {
    id: 43,
    question: "A study of 50 paired observations (before and after treatment BP) should use:",
    options: ["Independent samples t-test", "Paired t-test", "Chi-square test", "One-way ANOVA"],
    answer: 1,
    explanation: "Paired t-test is used when comparing two related measurements from the same subjects (before-after design). The independent t-test is for unrelated groups. Chi-square is for categorical data. ANOVA is for 3 or more groups."
  },
  {
    id: 44,
    question: "A researcher wants to compare the mean blood pressure of three groups (diabetic, hypertensive, and healthy controls). Which test is most appropriate?",
    options: ["Paired t-test", "Chi-square test", "One-way ANOVA", "Mann-Whitney U test"],
    answer: 2,
    explanation: "One-way ANOVA is used to compare means across three or more independent groups. A t-test compares only two groups. Chi-square is for categorical data. Mann-Whitney U is a non-parametric alternative for two groups."
  },
  {
    id: 45,
    question: "The null hypothesis in a clinical trial comparing a new drug to placebo typically states:",
    options: ["The new drug is better than placebo", "The new drug is worse than placebo", "There is no difference between the drug and placebo", "The drug has side effects"],
    answer: 2,
    explanation: "The null hypothesis (H0) states no difference or no effect. In a drug trial, H0: there is no difference between drug and placebo. The alternative hypothesis (H1) states that a difference exists."
  },
  {
    id: 46,
    question: "A researcher performs 20 independent statistical tests at alpha = 0.05. The expected number of false positives is:",
    options: ["0", "1", "5", "20"],
    answer: 1,
    explanation: "Expected false positives = number of tests x alpha = 20 x 0.05 = 1. This is the multiple comparisons problem. Corrections like Bonferroni (alpha/n) help control the family-wise error rate."
  },
  {
    id: 47,
    question: "The Bonferroni correction for multiple comparisons with 10 tests at overall alpha = 0.05 sets the individual significance level at:",
    options: ["0.05", "0.005", "0.01", "0.50"],
    answer: 1,
    explanation: "Bonferroni correction divides alpha by the number of tests: 0.05/10 = 0.005. Each individual test must achieve p < 0.005 to be considered significant. This is conservative but controls the family-wise error rate."
  },
  {
    id: 48,
    question: "A study with a p-value of 0.03 and a power of 60%. Which statement is correct?",
    options: ["The result is both statistically significant and the study had adequate power", "The result is statistically significant but the study was underpowered", "The result is not statistically significant", "Power cannot be assessed after the study is completed"],
    answer: 1,
    explanation: "p = 0.03 < 0.05, so the result is statistically significant. However, conventional adequate power is >= 80%. At 60% power, there was a 40% chance of missing a true effect, making the study underpowered."
  },
  {
    id: 49,
    question: "Which of the following best describes a Type I error in a drug trial?",
    options: ["Concluding the drug is effective when it truly is", "Concluding the drug is ineffective when it truly is ineffective", "Concluding the drug is effective when it is actually not", "Concluding the drug is ineffective when it is actually effective"],
    answer: 2,
    explanation: "Type I error (alpha, false positive) = rejecting a true null hypothesis = concluding the drug works when it doesn't. The significance level (alpha = 0.05) is the maximum acceptable probability of making this error."
  },
  {
    id: 50,
    question: "In a one-tailed (one-sided) hypothesis test compared to a two-tailed test at the same alpha level, the one-tailed test:",
    options: ["Is more conservative", "Has more power to detect an effect in the specified direction", "Requires a larger sample size", "Tests for effects in both directions"],
    answer: 1,
    explanation: "A one-tailed test places all of alpha in one tail, making it more powerful for detecting effects in that specific direction. However, it cannot detect effects in the opposite direction. A two-tailed test splits alpha between both tails."
  }
];

export default questions;

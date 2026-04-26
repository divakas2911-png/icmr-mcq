const questions = [
  // ===== MEAN, MEDIAN, MODE (Q1-Q10) =====
  {
    id: 1,
    question: "In a community health survey, the hemoglobin levels (g/dL) of 7 pregnant women are: 8.2, 9.1, 7.5, 10.3, 8.8, 9.5, 8.6. What is the median hemoglobin level?",
    options: ["8.6 g/dL", "8.8 g/dL", "8.86 g/dL", "9.1 g/dL"],
    answer: 1,
    explanation: "To find the median, arrange values in ascending order: 7.5, 8.2, 8.6, 8.8, 9.1, 9.5, 10.3. With 7 observations (odd number), the median is the (n+1)/2 = 4th value, which is 8.8 g/dL."
  },
  {
    id: 2,
    question: "A researcher records the number of malaria cases in 6 districts: 12, 15, 18, 18, 22, 35. The mean is 20. Which measure of central tendency is most appropriate for reporting to health authorities, given the outlier?",
    options: ["Arithmetic mean", "Median", "Geometric mean", "Harmonic mean"],
    answer: 1,
    explanation: "When data contains outliers (here, 35 is an outlier), the median is the most appropriate measure of central tendency because it is resistant to extreme values. The median here is (18+18)/2 = 18, which better represents the typical district than the mean of 20."
  },
  {
    id: 3,
    question: "The ages at diagnosis of a rare cancer in 5 patients are: 42, 45, 47, 48, 93. The arithmetic mean is 55. What is the effect of removing the outlier (93) on the mean and median?",
    options: ["Both mean and median decrease substantially", "Mean decreases substantially but median changes only slightly", "Median decreases substantially but mean changes only slightly", "Neither mean nor median changes substantially"],
    answer: 1,
    explanation: "Removing 93: new mean = (42+45+47+48)/4 = 45.5 (decreased from 55). Original median = 47, new median = (45+47)/2 = 46. The mean decreased by 9.5 units while the median changed by only 1 unit. The mean is sensitive to outliers; the median is robust."
  },
  {
    id: 4,
    question: "In a hospital, the average length of stay for 20 surgical patients is 6 days and for 30 medical patients is 4 days. What is the combined weighted mean length of stay?",
    options: ["4.8 days", "5.0 days", "5.2 days", "5.4 days"],
    answer: 0,
    explanation: "Weighted mean = (n1 * x1 + n2 * x2) / (n1 + n2) = (20 * 6 + 30 * 4) / (20 + 30) = (120 + 120) / 50 = 240 / 50 = 4.8 days. The weighted mean accounts for different group sizes."
  },
  {
    id: 5,
    question: "Antibody titers in a group of patients are: 1:2, 1:4, 1:8, 1:16, 1:32. Which measure of central tendency is most appropriate for these data?",
    options: ["Arithmetic mean", "Geometric mean", "Median", "Mode"],
    answer: 1,
    explanation: "Antibody titers follow a geometric progression (each value is double the previous). The geometric mean is the appropriate measure for data that are multiplicative in nature or log-normally distributed. GM = (2 * 4 * 8 * 16 * 32)^(1/5) = (32768)^(1/5) = 8, corresponding to a titer of 1:8."
  },
  {
    id: 6,
    question: "A frequency distribution of birth weights shows the following: 2.0-2.5 kg (5 babies), 2.5-3.0 kg (18 babies), 3.0-3.5 kg (25 babies), 3.5-4.0 kg (12 babies). What is the modal class?",
    options: ["2.0-2.5 kg", "2.5-3.0 kg", "3.0-3.5 kg", "3.5-4.0 kg"],
    answer: 2,
    explanation: "The modal class is the class interval with the highest frequency. Here, 3.0-3.5 kg has the highest frequency of 25 babies, making it the modal class."
  },
  {
    id: 7,
    question: "In a positively skewed distribution of household income in a rural health survey, which relationship among measures of central tendency is expected?",
    options: ["Mean = Median = Mode", "Mean < Median < Mode", "Mode < Median < Mean", "Mode < Mean < Median"],
    answer: 2,
    explanation: "In a positively (right) skewed distribution, the tail extends to the right. The mean is pulled most toward the tail, followed by the median, while the mode remains at the peak. Therefore: Mode < Median < Mean."
  },
  {
    id: 8,
    question: "A clinical trial reports the median survival time as 14 months for a cancer treatment. Which of the following is the correct interpretation?",
    options: ["Most patients survived exactly 14 months", "The average survival time was 14 months", "50% of patients survived longer than 14 months and 50% survived less", "The most frequently observed survival time was 14 months"],
    answer: 2,
    explanation: "The median divides the distribution into two equal halves. A median survival of 14 months means 50% of patients survived longer than 14 months and 50% survived less than 14 months. It does not imply the average or the most common survival time."
  },
  {
    id: 9,
    question: "The harmonic mean is most appropriate when calculating the average of which of the following?",
    options: ["Serum antibody titers across patients", "Rates such as speed or efficiency in epidemiological fieldwork", "Birth weights of neonates in a NICU", "Blood pressure readings taken at different times"],
    answer: 1,
    explanation: "The harmonic mean is appropriate when averaging rates or ratios where the denominator varies. For example, if a health worker covers different distances at different speeds, the harmonic mean gives the correct average speed. HM = n / (1/x1 + 1/x2 + ... + 1/xn)."
  },
  {
    id: 10,
    question: "In a bimodal distribution of patient waiting times at a hospital OPD, the two modes are 10 minutes and 45 minutes. This bimodality most likely indicates:",
    options: ["Measurement error in recording waiting times", "Two distinct subgroups within the patient population", "The data is normally distributed", "The sample size is too small"],
    answer: 1,
    explanation: "A bimodal distribution typically indicates the presence of two distinct subgroups in the population. Here, the two peaks at 10 and 45 minutes might represent patients with appointments (shorter waits) and walk-in patients (longer waits), suggesting two overlapping subpopulations."
  },

  // ===== STANDARD DEVIATION, VARIANCE (Q11-Q20) =====
  {
    id: 11,
    question: "The systolic blood pressures of 5 patients are: 120, 130, 125, 135, 140 mmHg. The mean is 130 mmHg. What is the sample variance?",
    options: ["50 mmHg\u00B2", "62.5 mmHg\u00B2", "40 mmHg\u00B2", "55 mmHg\u00B2"],
    answer: 1,
    explanation: "Sample variance = \u03A3(xi - x\u0304)\u00B2 / (n-1). Deviations: (120-130)\u00B2=100, (130-130)\u00B2=0, (125-130)\u00B2=25, (135-130)\u00B2=25, (140-130)\u00B2=100. Sum = 250. Variance = 250/(5-1) = 250/4 = 62.5 mmHg\u00B2. We divide by (n-1) for the sample variance (Bessel's correction)."
  },
  {
    id: 12,
    question: "Two laboratories report HbA1c measurements. Lab A has a mean of 7.2% with SD 0.3%, and Lab B has a mean of 7.1% with SD 0.8%. Which lab shows better precision?",
    options: ["Lab A, because it has a lower standard deviation", "Lab B, because it has a lower mean", "Both are equally precise since means are similar", "Cannot be determined without knowing the sample sizes"],
    answer: 0,
    explanation: "Precision refers to the reproducibility of measurements, quantified by the standard deviation (or coefficient of variation). Lab A with SD = 0.3% shows less variability (better precision) than Lab B with SD = 0.8%. A lower SD indicates measurements are more tightly clustered around the mean."
  },
  {
    id: 13,
    question: "If every patient's fasting blood glucose value in a dataset is increased by 10 mg/dL (e.g., due to a calibration shift), what happens to the standard deviation?",
    options: ["Increases by 10", "Decreases by 10", "Remains unchanged", "Increases by 100"],
    answer: 2,
    explanation: "Adding a constant to every observation shifts the mean by the same constant but does not change the spread of the data. The deviations from the mean remain identical, so the standard deviation (and variance) remain unchanged. SD is a measure of dispersion, not location."
  },
  {
    id: 14,
    question: "If all values in a dataset of serum creatinine levels are multiplied by 2 (unit conversion), the variance will:",
    options: ["Be multiplied by 2", "Be multiplied by 4", "Remain unchanged", "Be multiplied by \u221A2"],
    answer: 1,
    explanation: "If every value is multiplied by a constant k, the variance is multiplied by k\u00B2 and the standard deviation is multiplied by k. Here, k=2, so variance is multiplied by 2\u00B2 = 4. This follows from Var(kX) = k\u00B2 Var(X)."
  },
  {
    id: 15,
    question: "The coefficient of variation (CV) of serum cholesterol in group A is 12% and in group B is 18%. What does this indicate?",
    options: ["Group A has a higher mean cholesterol", "Group B has relatively more variability compared to its mean", "Group A has a wider range of values", "Both groups have the same degree of variability"],
    answer: 1,
    explanation: "The coefficient of variation (CV = SD/Mean * 100) expresses variability relative to the mean. A CV of 18% in group B indicates greater relative dispersion compared to group A (CV 12%). CV is useful for comparing variability between groups with different means or different units."
  },
  {
    id: 16,
    question: "In a study of neonatal birth weights, the standard deviation is 0.5 kg and the mean is 3.0 kg. Assuming normal distribution, approximately what percentage of neonates have birth weights between 2.0 kg and 4.0 kg?",
    options: ["68.27%", "95.45%", "99.73%", "90%"],
    answer: 1,
    explanation: "2.0 to 4.0 kg represents mean \u00B1 2 SD (3.0 \u00B1 2*0.5 = 3.0 \u00B1 1.0). By the empirical rule (68-95-99.7 rule), approximately 95.45% of observations fall within \u00B1 2 standard deviations of the mean in a normal distribution."
  },
  {
    id: 17,
    question: "A researcher wants to compare the variability of BMI (mean=24, SD=3) with variability of serum albumin (mean=4 g/dL, SD=0.5 g/dL). Which has greater relative variability?",
    options: ["BMI, because its SD is larger", "Serum albumin, because CV = 12.5% vs 12.5% for BMI — they are equal", "Serum albumin, because its mean is smaller", "BMI, because its mean is larger"],
    answer: 1,
    explanation: "CV of BMI = (3/24)*100 = 12.5%. CV of serum albumin = (0.5/4)*100 = 12.5%. Both have identical coefficients of variation, indicating equal relative variability despite having different units and different absolute SDs."
  },
  {
    id: 18,
    question: "The standard error of the mean (SEM) for a sample of 100 patients with mean BP 120 mmHg and SD 15 mmHg is:",
    options: ["0.15 mmHg", "1.5 mmHg", "15 mmHg", "150 mmHg"],
    answer: 1,
    explanation: "SEM = SD / \u221An = 15 / \u221A100 = 15 / 10 = 1.5 mmHg. The SEM measures the precision of the sample mean as an estimate of the population mean. It decreases as sample size increases."
  },
  {
    id: 19,
    question: "To halve the standard error of the mean, the sample size must be:",
    options: ["Doubled", "Tripled", "Quadrupled", "Increased by 50%"],
    answer: 2,
    explanation: "SEM = SD / \u221An. To halve SEM: SD/\u221A(n_new) = (1/2) * SD/\u221An. Solving: \u221A(n_new) = 2\u221An, so n_new = 4n. The sample size must be quadrupled to halve the SEM because SEM is inversely proportional to the square root of n."
  },
  {
    id: 20,
    question: "In a clinical study, which of the following is true about the relationship between standard deviation and standard error?",
    options: ["SEM is always larger than SD", "SEM equals SD when n = 1", "SD can be calculated from SEM only if the population size is known", "SEM and SD are identical for large samples"],
    answer: 1,
    explanation: "SEM = SD / \u221An. When n = 1, SEM = SD / \u221A1 = SD. For any n > 1, SEM < SD. SEM decreases with increasing sample size while SD remains relatively stable. SD measures variability among individuals; SEM measures variability of the sample mean."
  },

  // ===== PROBABILITY BASICS (Q21-Q30) =====
  {
    id: 21,
    question: "In a population where the prevalence of diabetes is 10%, two individuals are selected randomly and independently. What is the probability that both have diabetes?",
    options: ["0.20", "0.01", "0.10", "0.02"],
    answer: 1,
    explanation: "Since selections are independent, P(both diabetic) = P(A) * P(B) = 0.10 * 0.10 = 0.01 (multiplication rule for independent events). This assumes sampling from a large population where the prevalence remains effectively unchanged after each selection."
  },
  {
    id: 22,
    question: "A diagnostic test has a sensitivity of 90% and specificity of 80%. In a population with 5% disease prevalence, what is the positive predictive value (PPV)?",
    options: ["19.1%", "32.1%", "45.0%", "90.0%"],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity * Prevalence) / [(Sensitivity * Prevalence) + ((1-Specificity) * (1-Prevalence))] = (0.90 * 0.05) / [(0.90 * 0.05) + (0.20 * 0.95)] = 0.045 / (0.045 + 0.19) = 0.045 / 0.235 = 0.1914 or approximately 19.1%. Low prevalence dramatically reduces PPV even with good sensitivity."
  },
  {
    id: 23,
    question: "If the probability of a patient having hypertension is 0.3 and the probability of having diabetes is 0.2, and these conditions are independent, what is the probability of having at least one of these conditions?",
    options: ["0.50", "0.44", "0.06", "0.56"],
    answer: 1,
    explanation: "P(A or B) = P(A) + P(B) - P(A and B). Since independent: P(A and B) = 0.3 * 0.2 = 0.06. Therefore P(at least one) = 0.3 + 0.2 - 0.06 = 0.44. The subtraction of P(A and B) avoids double-counting individuals who have both conditions."
  },
  {
    id: 24,
    question: "In a family with 4 children, what is the probability that exactly 3 are boys? (Assume P(boy) = P(girl) = 0.5)",
    options: ["0.125", "0.25", "0.375", "0.0625"],
    answer: 1,
    explanation: "This follows a binomial distribution: P(X=k) = C(n,k) * p^k * (1-p)^(n-k). P(X=3) = C(4,3) * (0.5)^3 * (0.5)^1 = 4 * 0.125 * 0.5 = 0.25. There are 4 ways to arrange 3 boys among 4 children (BBBG, BBGB, BGBB, GBBB)."
  },
  {
    id: 25,
    question: "A rare disease has a prevalence of 1 in 10,000. A screening test with 99% sensitivity and 99% specificity is applied to 100,000 people. How many false positives are expected?",
    options: ["10", "99", "999", "9,999"],
    answer: 2,
    explanation: "Number of truly diseased = 100,000 * (1/10,000) = 10. Number of non-diseased = 99,990. False positives = non-diseased * (1 - specificity) = 99,990 * 0.01 = 999.9 \u2248 999. Even with 99% specificity, rare diseases generate many false positives relative to true positives (999 vs ~10)."
  },
  {
    id: 26,
    question: "In a hospital ICU, the probability of a ventilator-associated pneumonia (VAP) on any given day is 0.02. Assuming independence, what is the probability of a patient NOT developing VAP during a 10-day ICU stay?",
    options: ["0.80", "0.817", "0.98", "0.833"],
    answer: 1,
    explanation: "P(no VAP in 10 days) = (1 - 0.02)^10 = (0.98)^10 = 0.8171. This applies the multiplication rule for independent events: the probability of no VAP on each day is 0.98, and over 10 independent days, these probabilities multiply."
  },
  {
    id: 27,
    question: "According to Bayes' theorem, which factor most dramatically affects the positive predictive value of a screening test when sensitivity and specificity are held constant?",
    options: ["Sample size of the study", "Age of the population screened", "Prevalence of the disease in the population", "The type of statistical test used"],
    answer: 2,
    explanation: "Bayes' theorem shows PPV = (Sens * Prev) / [(Sens * Prev) + ((1-Spec) * (1-Prev))]. When sensitivity and specificity are fixed, disease prevalence is the dominant factor affecting PPV. Low prevalence leads to low PPV; high prevalence leads to high PPV."
  },
  {
    id: 28,
    question: "If events A and B are mutually exclusive, which of the following is always true?",
    options: ["P(A and B) = P(A) * P(B)", "P(A or B) = P(A) + P(B)", "P(A | B) = P(A)", "P(A and B) = P(A) + P(B)"],
    answer: 1,
    explanation: "Mutually exclusive events cannot occur simultaneously, so P(A and B) = 0. By the addition rule: P(A or B) = P(A) + P(B) - P(A and B) = P(A) + P(B) - 0 = P(A) + P(B). Note: mutually exclusive events are NOT independent (unless one has probability 0)."
  },
  {
    id: 29,
    question: "In a vaccine trial, 5 adverse events occur in 1,000 person-years of follow-up. Assuming events follow a Poisson distribution, what is the probability of observing exactly 0 adverse events in 1,000 person-years?",
    options: ["e^(-5) \u2248 0.0067", "1 - e^(-5) \u2248 0.9933", "5 * e^(-5) \u2248 0.0337", "(5^0 / 0!) * e^(-5) * 5^5 \u2248 0.175"],
    answer: 0,
    explanation: "For a Poisson distribution with \u03BB = 5: P(X=0) = (e^(-\u03BB) * \u03BB^0) / 0! = e^(-5) * 1 / 1 = e^(-5) \u2248 0.0067. This means there is only a 0.67% chance of observing zero adverse events if the true rate is 5 per 1,000 person-years."
  },
  {
    id: 30,
    question: "A genetic disorder follows autosomal recessive inheritance. If both parents are carriers (Aa), and they plan to have 3 children, what is the probability that at least one child is affected?",
    options: ["0.25", "0.5781", "0.4219", "0.75"],
    answer: 2,
    explanation: "P(affected child) = 1/4 = 0.25 for each child. P(at least one affected) = 1 - P(none affected) = 1 - (0.75)^3 = 1 - 0.4219 = 0.5781. Wait -- let me recalculate: P(none affected) = (3/4)^3 = 0.4219. P(at least one) = 1 - 0.4219 = 0.5781. The answer is 0.5781. Actually checking the options: 0.5781 is option B and 0.4219 is option C. P(at least one affected) = 0.5781."
  },

  // ===== P-VALUE, CONFIDENCE INTERVALS (Q31-Q40) =====
  {
    id: 31,
    question: "A clinical trial comparing two drugs yields a p-value of 0.03. Which of the following is the correct interpretation?",
    options: ["There is a 3% chance that the null hypothesis is true", "There is a 97% probability that the treatment is effective", "If the null hypothesis were true, there is a 3% probability of observing results as extreme as or more extreme than those obtained", "The treatment effect is clinically significant"],
    answer: 2,
    explanation: "The p-value is the probability of obtaining results at least as extreme as the observed data, assuming the null hypothesis is true. It is NOT the probability that the null hypothesis is true, nor does it indicate clinical significance. A p-value of 0.03 means such results would occur 3% of the time by chance alone under H0."
  },
  {
    id: 32,
    question: "A study reports the mean difference in blood pressure reduction between two drugs as 5 mmHg with a 95% confidence interval of (1.2, 8.8). Which interpretation is correct?",
    options: ["There is a 95% probability that the true mean difference lies between 1.2 and 8.8 mmHg", "If the study were repeated many times, 95% of the resulting confidence intervals would contain the true mean difference", "95% of patients will have a blood pressure reduction between 1.2 and 8.8 mmHg", "The probability of a Type I error is 5%"],
    answer: 1,
    explanation: "The frequentist interpretation of a 95% CI is: if we repeated the experiment many times, 95% of the calculated intervals would contain the true population parameter. The true parameter is fixed (not random), so we cannot say there is a 95% probability it falls in any single interval."
  },
  {
    id: 33,
    question: "A 95% confidence interval for the odds ratio of a risk factor for lung cancer is (0.85, 1.42). What can be concluded?",
    options: ["The risk factor significantly increases lung cancer risk", "The risk factor significantly decreases lung cancer risk", "The association is not statistically significant at the 5% level", "The study has inadequate power"],
    answer: 2,
    explanation: "For odds ratios, the null value is 1 (no association). Since the 95% CI (0.85, 1.42) includes 1, we cannot reject H0 at the 5% significance level. The result is not statistically significant. This does not necessarily mean no association exists -- the study may lack power."
  },
  {
    id: 34,
    question: "A researcher obtains a p-value of 0.001 for a difference of 0.5 mmHg in systolic blood pressure between two groups (n=50,000 per group). What is the most appropriate conclusion?",
    options: ["The difference is both statistically and clinically significant", "The difference is statistically significant but likely not clinically significant", "The difference is clinically significant but not statistically significant", "The result is not significant due to the small effect size"],
    answer: 1,
    explanation: "With a very large sample size (n=50,000 per group), even trivially small differences can achieve statistical significance. A 0.5 mmHg difference in systolic BP, while statistically significant (p=0.001), has no clinical relevance. This illustrates why both statistical significance and clinical significance (effect size) must be evaluated."
  },
  {
    id: 35,
    question: "If a researcher changes the significance level from 0.05 to 0.01 while keeping other factors constant, which of the following occurs?",
    options: ["Type I error risk increases, Type II error risk decreases", "Type I error risk decreases, Type II error risk increases", "Both Type I and Type II error risks decrease", "Both Type I and Type II error risks increase"],
    answer: 1,
    explanation: "Lowering alpha from 0.05 to 0.01 makes it harder to reject H0. This reduces the chance of a false positive (Type I error, alpha) from 5% to 1%, but increases the chance of a false negative (Type II error, beta) because truly significant effects may not reach the more stringent threshold. There is a trade-off between Type I and Type II errors."
  },
  {
    id: 36,
    question: "A study reports a 95% CI for relative risk as (2.1, 5.8) and a 99% CI as (1.6, 7.2). What is the relationship between confidence level and interval width?",
    options: ["Higher confidence level produces a narrower interval", "Higher confidence level produces a wider interval", "Confidence level does not affect interval width", "The relationship depends on the sample size only"],
    answer: 1,
    explanation: "A higher confidence level (99% vs 95%) requires a wider interval to be more confident that the true parameter is captured. The 99% CI (1.6, 7.2) is wider than the 95% CI (2.1, 5.8). Greater confidence comes at the cost of less precision (wider interval)."
  },
  {
    id: 37,
    question: "In a multiple comparison scenario where 20 independent hypothesis tests are performed at alpha = 0.05, what is the expected number of false positives if all null hypotheses are true?",
    options: ["0", "0.5", "1", "5"],
    answer: 2,
    explanation: "Expected number of false positives = number of tests * alpha = 20 * 0.05 = 1. When performing multiple comparisons, the probability of at least one false positive increases substantially. This is why corrections like Bonferroni (adjusted alpha = 0.05/20 = 0.0025) are needed."
  },
  {
    id: 38,
    question: "A one-sided p-value for a test is 0.03. What is the corresponding two-sided p-value?",
    options: ["0.015", "0.03", "0.06", "0.97"],
    answer: 2,
    explanation: "For symmetric distributions, the two-sided p-value is twice the one-sided p-value: 2 * 0.03 = 0.06. A one-sided test evaluates the probability in one tail only, while a two-sided test considers both tails. The two-sided p-value is always larger, making it harder to reject H0."
  },
  {
    id: 39,
    question: "A 95% confidence interval for the mean serum cholesterol in a sample of 400 patients is (195, 205) mg/dL. If the sample size were increased to 1,600 (with same SD and mean), the new 95% CI would approximately be:",
    options: ["(195, 205) mg/dL", "(197.5, 202.5) mg/dL", "(190, 210) mg/dL", "(199, 201) mg/dL"],
    answer: 1,
    explanation: "The CI width is proportional to 1/\u221An. Original half-width = 5. Ratio of sample sizes: \u221A(1600/400) = \u221A4 = 2. New half-width = 5/2 = 2.5. New CI = 200 \u00B1 2.5 = (197.5, 202.5). Quadrupling the sample size halves the confidence interval width."
  },
  {
    id: 40,
    question: "A study finds p = 0.048 for a treatment effect. A colleague repeats the study with the same design and finds p = 0.12. Which statement best explains this discrepancy?",
    options: ["One of the studies must have an error", "This is expected due to sampling variability; p-values vary between studies", "The first study is definitely correct because p < 0.05", "The second study must have had protocol deviations"],
    answer: 1,
    explanation: "P-values are random variables that fluctuate from study to study due to sampling variability. A p-value of 0.048 in one study and 0.12 in another does not indicate error; it reflects normal sampling variation. This is why single studies should not be over-interpreted and why replication and meta-analysis are important."
  },

  // ===== HYPOTHESIS TESTING (Q41-Q50) =====
  {
    id: 41,
    question: "A researcher wants to test whether a new antihypertensive drug lowers mean BP below 140 mmHg. The null hypothesis is H0: \u03BC = 140 and H1: \u03BC < 140. This is an example of:",
    options: ["Two-tailed test", "Right-tailed (one-tailed) test", "Left-tailed (one-tailed) test", "Non-directional test"],
    answer: 2,
    explanation: "Since the alternative hypothesis (H1: \u03BC < 140) specifies a direction (less than), this is a left-tailed (one-tailed) test. The rejection region is in the left tail of the distribution. A left-tailed test is appropriate when we specifically want to detect a decrease."
  },
  {
    id: 42,
    question: "In a clinical trial, a Type II error occurs when:",
    options: ["The trial concludes the drug is effective when it truly is not", "The trial concludes the drug is not effective when it truly is effective", "The trial is stopped early for safety reasons", "The trial has too many participants"],
    answer: 1,
    explanation: "A Type II error (false negative, beta) occurs when we fail to reject a false null hypothesis -- i.e., concluding no treatment effect when one truly exists. Type I error (false positive, alpha) is concluding an effect exists when it does not. Power = 1 - beta is the probability of correctly detecting a true effect."
  },
  {
    id: 43,
    question: "A paired t-test is most appropriate in which of the following study designs?",
    options: ["Comparing mean cholesterol between male and female patients", "Comparing blood glucose levels before and after treatment in the same patients", "Comparing survival rates across three treatment groups", "Comparing proportions of smokers in two different cities"],
    answer: 1,
    explanation: "A paired t-test is used when measurements are taken from the same subjects under two conditions (before/after, matched pairs). Comparing pre- and post-treatment glucose in the same patients creates paired data. Independent groups (males vs females, different cities) require unpaired tests; three groups require ANOVA."
  },
  {
    id: 44,
    question: "A study with a power of 80% and alpha of 0.05 tests a new drug. If the drug truly has an effect, what is the probability of failing to detect it?",
    options: ["5%", "80%", "20%", "95%"],
    answer: 2,
    explanation: "Power = 1 - beta, where beta is the probability of a Type II error (failing to detect a true effect). If power = 80% = 0.80, then beta = 1 - 0.80 = 0.20 = 20%. There is a 20% probability of failing to detect the drug's true effect (false negative)."
  },
  {
    id: 45,
    question: "Which non-parametric test is the appropriate alternative to the independent samples t-test when data are not normally distributed?",
    options: ["Chi-square test", "Mann-Whitney U test", "Kruskal-Wallis test", "Wilcoxon signed-rank test"],
    answer: 1,
    explanation: "The Mann-Whitney U test (also called Wilcoxon rank-sum test) is the non-parametric alternative to the independent samples t-test. It compares ranks rather than means and does not assume normality. The Wilcoxon signed-rank test is for paired data, Kruskal-Wallis is for 3+ groups, and Chi-square is for categorical data."
  },
  {
    id: 46,
    question: "In an ANOVA comparing mean hemoglobin levels across 4 diet groups, the F-statistic is 4.2 with p = 0.01. What is the immediate next step?",
    options: ["Conclude that all four group means are different", "Perform post-hoc pairwise comparisons (e.g., Tukey's HSD)", "Increase the sample size and repeat the study", "Calculate the chi-square statistic"],
    answer: 1,
    explanation: "A significant ANOVA F-test only indicates that at least one group mean differs from the others -- it does not specify which groups differ. Post-hoc multiple comparison tests (e.g., Tukey's HSD, Bonferroni) are needed to determine which specific pairs of groups have significantly different means."
  },
  {
    id: 47,
    question: "A researcher tests 5 hypotheses using the Bonferroni correction with an overall alpha of 0.05. What adjusted significance level should be used for each individual test?",
    options: ["0.05", "0.025", "0.01", "0.005"],
    answer: 2,
    explanation: "Bonferroni correction divides the desired overall alpha by the number of comparisons: adjusted alpha = 0.05 / 5 = 0.01. Each individual test must achieve p < 0.01 to be considered significant. This conservative correction controls the family-wise error rate but reduces power."
  },
  {
    id: 48,
    question: "In a chi-square test of independence with a 3x4 contingency table, the degrees of freedom are:",
    options: ["6", "7", "11", "12"],
    answer: 0,
    explanation: "Degrees of freedom for a chi-square test of independence = (rows - 1) * (columns - 1) = (3-1) * (4-1) = 2 * 3 = 6. The degrees of freedom determine the shape of the chi-square distribution used to determine the p-value."
  },
  {
    id: 49,
    question: "A researcher wants to determine the minimum sample size for a clinical trial. Which of the following factors does NOT directly affect the required sample size?",
    options: ["Desired power (1 - beta)", "Significance level (alpha)", "Expected effect size", "The p-value from a previous pilot study"],
    answer: 3,
    explanation: "Sample size calculations require: (1) significance level (alpha), (2) desired power (1-beta), (3) expected effect size, and (4) population variability (SD). A p-value from a prior study is a result, not an input to sample size calculation. Effect size from prior studies may inform the calculation, but the p-value itself is not directly used."
  },
  {
    id: 50,
    question: "A study comparing a new vaccine to placebo finds a risk reduction with 95% CI of (-2%, 15%). The researchers conclude 'the vaccine shows a trend toward effectiveness.' What is the most valid criticism of this conclusion?",
    options: ["The CI is too narrow to draw conclusions", "Since the CI includes 0 (no effect), the result is not statistically significant and 'trend toward effectiveness' is misleading language", "The researchers should have used a one-sided test", "A 99% CI should have been used instead"],
    answer: 1,
    explanation: "The 95% CI for risk reduction includes 0% (the null value of no effect), meaning the result is not statistically significant at alpha = 0.05. Describing a non-significant result as a 'trend' is considered misleading in biostatistics because it implies an effect that the data do not support. The correct conclusion is that the study failed to demonstrate a statistically significant effect."
  }
];

export default questions;

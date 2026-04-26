const questions = [
  // ===== MEAN, MEDIAN, MODE (Q1-Q10) =====
  {
    id: 1,
    question: "In a community health survey, the hemoglobin levels (g/dL) of 7 pregnant women are: 7.2, 8.1, 8.5, 9.0, 9.3, 11.4, 15.8. Which measure of central tendency is MOST appropriate to summarize this data?",
    options: ["Arithmetic mean", "Median", "Mode", "Geometric mean"],
    answer: 1,
    explanation: "The median (9.0 g/dL) is most appropriate here. The value 15.8 is an outlier that would pull the arithmetic mean (9.9 g/dL) upward, misrepresenting the central tendency. The median is resistant to outliers and skewed distributions. Mode cannot be calculated as no value repeats. Geometric mean is used for log-normal data like antibody titers."
  },
  {
    id: 2,
    question: "A researcher reports the average incubation period of a disease as 5 days using data from 200 patients. Later, it is found that 10 observations recorded as 15 days should have been 25 days. What is the corrected mean?",
    options: ["5.25 days", "5.50 days", "5.75 days", "6.00 days"],
    answer: 1,
    explanation: "Original sum = 200 x 5 = 1000. Error = 10 x (25 - 15) = 100. Corrected sum = 1000 + 100 = 1100. Corrected mean = 1100/200 = 5.50 days. This illustrates how the arithmetic mean is sensitive to every value in the dataset."
  },
  {
    id: 3,
    question: "The birth weights (kg) of 100 neonates in a hospital follow a negatively skewed distribution. Which relationship among the measures of central tendency holds true?",
    options: ["Mean > Median > Mode", "Mean < Median < Mode", "Mean = Median = Mode", "Mode < Mean < Median"],
    answer: 1,
    explanation: "In a negatively (left) skewed distribution, the tail extends to the left. The mean is pulled most toward the tail, followed by the median, while the mode remains at the peak. Therefore: Mean < Median < Mode. The empirical relationship is: Mean - Mode = 3(Mean - Median)."
  },
  {
    id: 4,
    question: "In a clinical trial, Group A (n=40) has a mean systolic BP of 130 mmHg and Group B (n=60) has a mean systolic BP of 150 mmHg. What is the combined mean systolic BP?",
    options: ["140 mmHg", "142 mmHg", "144 mmHg", "146 mmHg"],
    answer: 1,
    explanation: "Combined mean = (n1 x mean1 + n2 x mean2) / (n1 + n2) = (40 x 130 + 60 x 150) / (40 + 60) = (5200 + 9000) / 100 = 14200/100 = 142 mmHg. The combined mean is a weighted average, pulled toward the larger group's mean. It is NOT simply (130+150)/2 = 140 because the groups have unequal sizes."
  },
  {
    id: 5,
    question: "The following are serum creatinine values (mg/dL) from a nephrology ward: 1.2, 1.4, 1.4, 1.8, 2.1, 2.1, 2.1, 3.5, 4.2. What is the mode and what type of distribution does this represent?",
    options: ["1.4 mg/dL; unimodal", "2.1 mg/dL; unimodal", "1.4 and 2.1 mg/dL; bimodal", "2.1 mg/dL; bimodal"],
    answer: 1,
    explanation: "The mode is the most frequently occurring value. Here, 1.4 appears twice and 2.1 appears three times. Since 2.1 has the highest frequency (3 times), the mode is 2.1 mg/dL and the distribution is unimodal. A bimodal distribution would require two values with equal highest frequency."
  },
  {
    id: 6,
    question: "A public health officer measures the annual malaria incidence rates over 5 years as: 2, 4, 8, 16, 32 per 1000 population. Which measure of central tendency best represents the average rate of change?",
    options: ["Arithmetic mean (12.4)", "Geometric mean (8.0)", "Harmonic mean (4.9)", "Median (8.0)"],
    answer: 1,
    explanation: "The geometric mean is ideal for data that changes multiplicatively (exponential growth). GM = (2 x 4 x 8 x 16 x 32)^(1/5) = (32768)^(1/5) = 8.0. Each value doubles, so the GM correctly captures this constant ratio. The arithmetic mean (12.4) would overestimate the central value. GM is also used for antibody titers and bacterial counts."
  },
  {
    id: 7,
    question: "In a study of 500 hospital patients, the median length of stay is 5 days and the mean is 8 days. A new patient stays for 20 days. How are the mean and median affected?",
    options: ["Both increase significantly", "Mean increases, median remains nearly unchanged", "Median increases, mean remains nearly unchanged", "Neither changes significantly"],
    answer: 1,
    explanation: "Adding one extreme value (20 days) to 500 observations will increase the mean because the mean uses every value in its calculation: new mean = (500 x 8 + 20)/501 = 4020/501 = 8.024. The median, being the middle value, shifts negligibly since only the position changes from 250th to 250.5th value. This demonstrates the robustness of the median to outliers."
  },
  {
    id: 8,
    question: "A researcher wants to calculate the average speed of a medical supply vehicle that travels 60 km at 30 km/h and returns the same 60 km at 60 km/h. What is the correct average speed?",
    options: ["45 km/h", "40 km/h", "42 km/h", "48 km/h"],
    answer: 1,
    explanation: "For rates and ratios where the numerator is constant, the harmonic mean is appropriate. HM = 2/(1/30 + 1/60) = 2/(2/60 + 1/60) = 2/(3/60) = 2 x 60/3 = 40 km/h. Alternatively: total distance = 120 km, total time = 60/30 + 60/60 = 2 + 1 = 3 hours, average speed = 120/3 = 40 km/h. The arithmetic mean (45 km/h) would be incorrect."
  },
  {
    id: 9,
    question: "In a frequency distribution of ages of 1000 TB patients, the median class is 30-40 years with frequency 200. The cumulative frequency before this class is 350, and the class width is 10. What is the median age?",
    options: ["35.0 years", "37.5 years", "32.5 years", "36.0 years"],
    answer: 1,
    explanation: "Median = L + [(N/2 - CF)/f] x h, where L = lower limit of median class (30), N = total frequency (1000), CF = cumulative frequency before median class (350), f = frequency of median class (200), h = class width (10). Median = 30 + [(500 - 350)/200] x 10 = 30 + [150/200] x 10 = 30 + 7.5 = 37.5 years."
  },
  {
    id: 10,
    question: "The trimmed mean of a dataset is 72 while the arithmetic mean is 78. This most likely indicates:",
    options: ["The distribution is perfectly symmetric", "There are high outliers inflating the arithmetic mean", "The sample size is too small", "The data follows a bimodal distribution"],
    answer: 1,
    explanation: "A trimmed mean removes a fixed percentage of extreme values from both ends before computing the mean. If the trimmed mean (72) is less than the arithmetic mean (78), it indicates that extreme high values (outliers) are pulling the arithmetic mean upward. This is common in clinical data like hospital charges or length of stay where a few extreme cases inflate the mean."
  },

  // ===== STANDARD DEVIATION, VARIANCE (Q11-Q20) =====
  {
    id: 11,
    question: "In a clinical trial, fasting blood glucose levels of 5 patients are: 80, 90, 100, 110, 120 mg/dL. What is the sample standard deviation?",
    options: ["14.14 mg/dL", "15.81 mg/dL", "12.65 mg/dL", "17.32 mg/dL"],
    answer: 1,
    explanation: "Mean = (80+90+100+110+120)/5 = 100. Deviations: -20, -10, 0, 10, 20. Squared deviations: 400, 100, 0, 100, 400. Sum = 1000. Sample variance = 1000/(5-1) = 250. Sample SD = sqrt(250) = 15.81 mg/dL. We divide by (n-1) = 4 for sample SD (Bessel's correction), not n = 5 which would give population SD = sqrt(200) = 14.14."
  },
  {
    id: 12,
    question: "Two laboratory instruments measure serum sodium levels. Instrument A has a mean of 140 mEq/L with SD = 3 mEq/L. Instrument B has a mean of 142 mEq/L with SD = 5 mEq/L. Which instrument is more precise?",
    options: ["Instrument A because it has a lower SD", "Instrument B because it has a higher mean", "Instrument A because it has a lower coefficient of variation", "Both are equally precise"],
    answer: 0,
    explanation: "Precision refers to the reproducibility of measurements, quantified by standard deviation. Instrument A (SD = 3) has less variability than Instrument B (SD = 5), making it more precise. Since both measure the same quantity in the same units and have similar means, direct SD comparison is valid. CV_A = 3/140 = 2.14%, CV_B = 5/142 = 3.52% - both metrics confirm A is more precise. Note: precision differs from accuracy (closeness to true value)."
  },
  {
    id: 13,
    question: "If every patient's cholesterol value in a dataset is increased by 20 mg/dL (due to a systematic lab error), what happens to the variance and standard deviation?",
    options: ["Both increase by 20", "Both increase by 400", "Both remain unchanged", "SD increases by 20, variance by 400"],
    answer: 2,
    explanation: "Adding a constant to every observation shifts the mean by the same constant but does not change the spread. Var(X + c) = Var(X) and SD(X + c) = SD(X). The deviations from the mean remain identical because both each value and the mean shift by the same amount. This property is important in understanding systematic errors vs random errors in laboratory medicine."
  },
  {
    id: 14,
    question: "A researcher multiplies all BMI values by 2 for unit conversion. If the original variance was 9 kg^2/m^4, what is the new variance?",
    options: ["18", "36", "81", "4.5"],
    answer: 1,
    explanation: "When each value is multiplied by a constant k, Var(kX) = k^2 x Var(X). New variance = 2^2 x 9 = 36. The SD would become 2 x 3 = 6 (SD scales linearly with the constant). This is because variance measures squared deviations, so multiplying data by k multiplies squared deviations by k^2."
  },
  {
    id: 15,
    question: "In a normally distributed population, the systolic BP has mean 120 mmHg and SD 15 mmHg. What percentage of the population has systolic BP between 90 and 150 mmHg?",
    options: ["68.27%", "95.45%", "99.73%", "90.00%"],
    answer: 1,
    explanation: "90 mmHg = 120 - 2(15) = mean - 2SD, and 150 mmHg = 120 + 2(15) = mean + 2SD. By the empirical rule for normal distributions: within 1 SD = 68.27%, within 2 SD = 95.45%, within 3 SD = 99.73%. Since the range covers mean +/- 2 SD, approximately 95.45% of the population falls within this range."
  },
  {
    id: 16,
    question: "Two studies report hemoglobin levels. Study A: mean = 12 g/dL, SD = 2 g/dL, n = 100. Study B: mean = 14 g/dL, SD = 3 g/dL, n = 100. Which has greater relative variability?",
    options: ["Study A (CV = 16.67%)", "Study B (CV = 21.43%)", "Both have equal relative variability", "Cannot be determined without raw data"],
    answer: 1,
    explanation: "Coefficient of Variation (CV) = (SD/Mean) x 100. CV_A = (2/12) x 100 = 16.67%. CV_B = (3/14) x 100 = 21.43%. Study B has greater relative variability. CV is unitless and allows comparison of variability between datasets with different units or vastly different means, making it ideal for comparing lab assays."
  },
  {
    id: 17,
    question: "The standard error of the mean (SEM) for a sample of 25 patients is 4 mmHg. If the sample size is increased to 100, what will the new SEM be?",
    options: ["1 mmHg", "2 mmHg", "8 mmHg", "16 mmHg"],
    answer: 1,
    explanation: "SEM = SD/sqrt(n). From the original: 4 = SD/sqrt(25) = SD/5, so SD = 20 mmHg. New SEM = 20/sqrt(100) = 20/10 = 2 mmHg. Quadrupling the sample size halves the SEM. This demonstrates the law of diminishing returns: to halve the SEM, you must quadruple n. SEM measures precision of the sample mean, not data spread."
  },
  {
    id: 18,
    question: "A researcher reports: 'Mean BMI = 25 +/- 3 kg/m^2 (n = 400).' If the +/- 3 refers to SEM, what is the actual standard deviation of BMI in the sample?",
    options: ["30 kg/m^2", "60 kg/m^2", "1.5 kg/m^2", "6 kg/m^2"],
    answer: 1,
    explanation: "SEM = SD/sqrt(n). Given SEM = 3 and n = 400: 3 = SD/sqrt(400) = SD/20. Therefore SD = 3 x 20 = 60 kg/m^2. This highlights a common reporting issue in medical literature. A BMI SD of 60 would be implausibly large, suggesting the author likely confused SD and SEM, or the +/- 3 actually refers to SD (which is clinically reasonable)."
  },
  {
    id: 19,
    question: "In a pooled analysis, Sample 1 (n1=50, mean1=100, SD1=10) and Sample 2 (n2=50, mean2=120, SD2=10) are combined. The pooled SD will be:",
    options: ["Equal to 10", "Less than 10", "Greater than 10", "Equal to 20"],
    answer: 2,
    explanation: "When combining two groups with different means, the pooled SD accounts for both within-group and between-group variability. Pooled variance = [(n1-1)SD1^2 + (n2-1)SD2^2 + n1(mean1-combined_mean)^2 + n2(mean2-combined_mean)^2] / (n1+n2-1). The between-group difference (100 vs 120) adds variability, making the pooled SD > 10. This is Simpson's paradox territory and is critical in meta-analysis."
  },
  {
    id: 20,
    question: "For a positively skewed dataset of hospital charges, which of the following is TRUE?",
    options: ["SD > IQR always", "IQR is a more robust measure of spread than SD", "SD is unaffected by outliers", "Variance equals the square of the IQR"],
    answer: 1,
    explanation: "The Interquartile Range (IQR = Q3 - Q1) is a robust measure of spread because it depends only on the middle 50% of data, making it resistant to outliers. In positively skewed data like hospital charges, extreme high values inflate the SD but not the IQR. SD is heavily influenced by outliers since it uses squared deviations. IQR is preferred for skewed distributions alongside the median."
  },

  // ===== PROBABILITY BASICS (Q21-Q30) =====
  {
    id: 21,
    question: "A diagnostic test for HIV has sensitivity 99% and specificity 99%. In a population with prevalence 0.1%, what is the positive predictive value (PPV)?",
    options: ["99%", "50%", "9.0%", "90.1%"],
    answer: 2,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1-Specificity)(1-Prevalence)] = (0.99 x 0.001) / [(0.99 x 0.001) + (0.01 x 0.999)] = 0.00099 / (0.00099 + 0.00999) = 0.00099/0.01098 = 9.02%. Despite excellent sensitivity and specificity, the PPV is only ~9% because the prevalence is very low. This is why confirmatory tests are essential in low-prevalence settings."
  },
  {
    id: 22,
    question: "In a family with both parents being carriers (heterozygous) for an autosomal recessive disease, what is the probability that out of 4 children, exactly 2 will be affected?",
    options: ["1/16", "6/256", "54/256", "27/128"],
    answer: 2,
    explanation: "P(affected child) = 1/4. Using binomial probability: P(X=2) = C(4,2) x (1/4)^2 x (3/4)^2 = 6 x (1/16) x (9/16) = 6 x 9/256 = 54/256 = 0.2109 or about 21.1%. C(4,2) = 4!/(2!2!) = 6. This is a classic application of the binomial distribution in medical genetics."
  },
  {
    id: 23,
    question: "A hospital emergency department sees an average of 3 snakebite cases per month. What is the probability of seeing exactly 5 cases in a given month?",
    options: ["0.1008", "0.0504", "0.1404", "0.0216"],
    answer: 0,
    explanation: "This follows the Poisson distribution with lambda = 3. P(X=5) = (e^-3 x 3^5) / 5! = (0.0498 x 243) / 120 = 12.0954/120 = 0.1008. The Poisson distribution models rare events in a fixed interval. It is used when events are independent and occur at a constant average rate, which fits emergency presentations of rare conditions."
  },
  {
    id: 24,
    question: "Two events A and B are independent. P(A) = 0.3 and P(B) = 0.4. What is P(A union B)?",
    options: ["0.70", "0.58", "0.12", "0.42"],
    answer: 1,
    explanation: "For any two events: P(A union B) = P(A) + P(B) - P(A intersection B). Since A and B are independent: P(A intersection B) = P(A) x P(B) = 0.3 x 0.4 = 0.12. Therefore P(A union B) = 0.3 + 0.4 - 0.12 = 0.58. A common error is adding probabilities without subtracting the intersection (0.70) or confusing union with intersection (0.12)."
  },
  {
    id: 25,
    question: "A screening program uses two independent tests sequentially (series testing). Test 1 has sensitivity 90% and Test 2 has sensitivity 80%. What is the net sensitivity of the combined screening?",
    options: ["72%", "98%", "85%", "170%"],
    answer: 0,
    explanation: "In series (sequential) testing, a patient must test positive on BOTH tests to be considered positive. Net sensitivity = Sensitivity_1 x Sensitivity_2 = 0.90 x 0.80 = 0.72 or 72%. Series testing decreases sensitivity but increases specificity. In parallel testing (patient positive on EITHER test), net sensitivity = 1 - (1-0.90)(1-0.80) = 1 - 0.02 = 0.98 or 98%."
  },
  {
    id: 26,
    question: "In a clinical study, the probability of a drug causing hepatotoxicity is 0.05. If 3 patients independently take the drug, what is the probability that at least one develops hepatotoxicity?",
    options: ["0.1426", "0.1500", "0.8574", "0.0500"],
    answer: 0,
    explanation: "P(at least one) = 1 - P(none). P(no hepatotoxicity in one patient) = 1 - 0.05 = 0.95. P(none in 3 patients) = 0.95^3 = 0.857375. P(at least one) = 1 - 0.857375 = 0.142625 approximately 0.1426. The complement rule [P(at least one) = 1 - P(none)] is much simpler than calculating P(1) + P(2) + P(3) individually."
  },
  {
    id: 27,
    question: "A genetic test gives the following results: P(test positive | disease) = 0.95, P(test positive | no disease) = 0.10, P(disease) = 0.02. What is P(disease | test positive)?",
    options: ["0.162", "0.950", "0.020", "0.880"],
    answer: 0,
    explanation: "By Bayes' theorem: P(D|T+) = P(T+|D) x P(D) / [P(T+|D) x P(D) + P(T+|D') x P(D')] = (0.95 x 0.02) / [(0.95 x 0.02) + (0.10 x 0.98)] = 0.019 / (0.019 + 0.098) = 0.019/0.117 = 0.162 or 16.2%. This posterior probability is much lower than the test sensitivity (95%) because the disease is rare (2% prevalence), demonstrating the base rate fallacy."
  },
  {
    id: 28,
    question: "In a vaccine trial, 200 subjects are vaccinated and 10 develop the disease. In the control group, 200 subjects are unvaccinated and 40 develop the disease. What is the vaccine efficacy?",
    options: ["25%", "75%", "80%", "30%"],
    answer: 1,
    explanation: "Vaccine Efficacy = (ARU - ARV)/ARU x 100, where ARU = attack rate in unvaccinated, ARV = attack rate in vaccinated. ARV = 10/200 = 0.05, ARU = 40/200 = 0.20. VE = (0.20 - 0.05)/0.20 x 100 = 0.15/0.20 x 100 = 75%. This means the vaccine reduces the risk of disease by 75% compared to no vaccination. Equivalently, VE = 1 - Relative Risk = 1 - (0.05/0.20) = 1 - 0.25 = 0.75."
  },
  {
    id: 29,
    question: "Events A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.5. What is P(A | B)?",
    options: ["0.60", "0.30", "0.00", "0.15"],
    answer: 2,
    explanation: "Mutually exclusive events cannot occur simultaneously, so P(A intersection B) = 0. Conditional probability P(A|B) = P(A intersection B)/P(B) = 0/0.5 = 0. If events are mutually exclusive, knowing B occurred means A definitely did not occur. Note: mutually exclusive events are NEVER independent (unless one has probability 0), since independence requires P(A intersection B) = P(A) x P(B) > 0."
  },
  {
    id: 30,
    question: "A woman with no family history has a prior probability of 1/1000 for carrying a BRCA1 mutation. A genetic test with sensitivity 90% and specificity 95% comes back positive. What is her posterior probability of carrying the mutation?",
    options: ["0.90", "0.018", "0.95", "0.50"],
    answer: 1,
    explanation: "Using Bayes' theorem: P(BRCA1+|Test+) = (0.90 x 0.001) / [(0.90 x 0.001) + (0.05 x 0.999)] = 0.0009 / (0.0009 + 0.04995) = 0.0009/0.05085 = 0.0177 approximately 1.8%. Despite a positive test, the posterior probability is only ~1.8% because the prior probability is very low (1/1000). This underscores why genetic counseling is essential before interpreting test results."
  },

  // ===== P-VALUE, CONFIDENCE INTERVALS (Q31-Q40) =====
  {
    id: 31,
    question: "A clinical trial reports a p-value of 0.03 for the difference in mean blood pressure between drug and placebo groups. Which interpretation is CORRECT?",
    options: ["There is a 3% probability that the drug is ineffective", "There is a 3% probability of observing this difference (or more extreme) if the null hypothesis is true", "There is a 97% probability that the drug is effective", "The drug reduces blood pressure by 3%"],
    answer: 1,
    explanation: "The p-value is the probability of obtaining the observed result (or more extreme) assuming the null hypothesis is true. It is NOT the probability that the null hypothesis is true, nor the probability that the alternative is true. A p-value of 0.03 means there is a 3% chance of seeing such an extreme result by random chance alone if H0 is true. This is a commonly misinterpreted concept in medical research."
  },
  {
    id: 32,
    question: "A study reports: 'Mean difference in HbA1c = 0.8%, 95% CI: 0.2% to 1.4%, p = 0.01.' Which statement is TRUE?",
    options: ["There is a 95% chance the true difference lies between 0.2% and 1.4%", "If we repeated the study 100 times, about 95 of the CIs would contain the true difference", "The CI tells us the p-value is exactly 0.01", "The difference is not statistically significant"],
    answer: 1,
    explanation: "The frequentist interpretation of a 95% CI is: if the experiment were repeated many times, 95% of the calculated CIs would contain the true population parameter. It does NOT mean there is a 95% probability the true value lies in this specific interval (that would be a Bayesian interpretation). Since the CI does not include 0, the result is statistically significant, consistent with p = 0.01."
  },
  {
    id: 33,
    question: "A 95% confidence interval for the odds ratio in a case-control study is (0.85, 2.40). What can be concluded?",
    options: ["The exposure is a significant risk factor", "The exposure is a significant protective factor", "The association is not statistically significant at alpha = 0.05", "The study is underpowered"],
    answer: 2,
    explanation: "For odds ratios, the null value is 1.0 (no association). Since the 95% CI (0.85 to 2.40) includes 1.0, the result is not statistically significant at the 5% level. The CI crossing 1.0 means we cannot rule out no association. For risk differences, the null value is 0; for relative risk and odds ratios, it is 1. This is equivalent to p > 0.05."
  },
  {
    id: 34,
    question: "A researcher obtains a 99% CI of (2.1, 5.9) for a mean difference. Without recalculating, what can be said about the 95% CI?",
    options: ["It would be wider than (2.1, 5.9)", "It would be narrower than (2.1, 5.9)", "It would be identical to (2.1, 5.9)", "Cannot be determined"],
    answer: 1,
    explanation: "A higher confidence level requires a wider interval to be more 'confident' of capturing the true parameter. Therefore, a 99% CI is always wider than a 95% CI for the same data. Conversely, the 95% CI will be narrower, falling somewhere within (2.1, 5.9). The tradeoff: higher confidence = wider (less precise) interval. CI width = 2 x z x SE, and z_99% (2.576) > z_95% (1.96)."
  },
  {
    id: 35,
    question: "In a study with n=25, mean=50, SD=10, the 95% confidence interval for the population mean is:",
    options: ["(46.08, 53.92)", "(46.00, 54.00)", "(45.87, 54.13)", "(44.00, 56.00)"],
    answer: 0,
    explanation: "With n=25 (small sample), we use the t-distribution. CI = mean +/- t_(alpha/2, df) x SEM. SEM = 10/sqrt(25) = 2. For df = 24, t_0.025 = 2.064 (approximately). CI = 50 +/- 2.064 x 2 = 50 +/- 4.128 = (45.87, 54.13). However, if using z = 1.96: CI = 50 +/- 1.96 x 2 = 50 +/- 3.92 = (46.08, 53.92). The answer uses z-approximation which is common in ICMR exam calculations."
  },
  {
    id: 36,
    question: "A meta-analysis reports a pooled relative risk of 1.5 with 95% CI (1.2, 1.9). The p-value for heterogeneity (I^2 = 80%) is 0.001. The most appropriate conclusion is:",
    options: ["The pooled estimate is reliable and clinically significant", "There is significant heterogeneity; the pooled estimate should be interpreted with caution", "The intervention definitely increases risk by 50%", "The studies are homogeneous and the result is definitive"],
    answer: 1,
    explanation: "I^2 = 80% indicates high heterogeneity (>75% is considered high), and p = 0.001 for heterogeneity test confirms it is statistically significant. While the pooled RR is significant, substantial heterogeneity means the studies are measuring different effect sizes, making the pooled estimate unreliable. Subgroup analysis or meta-regression should be performed to explore sources of heterogeneity."
  },
  {
    id: 37,
    question: "A study reports p = 0.048. After Bonferroni correction for 10 multiple comparisons, is this result still significant at alpha = 0.05?",
    options: ["Yes, because 0.048 < 0.05", "No, because adjusted alpha = 0.05/10 = 0.005 and 0.048 > 0.005", "Yes, because Bonferroni correction increases the alpha level", "Cannot be determined without knowing the effect size"],
    answer: 1,
    explanation: "Bonferroni correction adjusts for multiple comparisons by dividing alpha by the number of tests: adjusted alpha = 0.05/10 = 0.005. Since p = 0.048 > 0.005, the result is NOT significant after correction. Alternatively, the adjusted p-value = 0.048 x 10 = 0.48 > 0.05. Bonferroni is conservative and reduces Type I error but increases Type II error risk."
  },
  {
    id: 38,
    question: "To halve the width of a 95% confidence interval while keeping everything else constant, the sample size must be:",
    options: ["Doubled", "Quadrupled", "Tripled", "Halved"],
    answer: 1,
    explanation: "CI width = 2 x z x SD/sqrt(n). Width is proportional to 1/sqrt(n). To halve the width: 1/sqrt(n_new) = (1/2) x 1/sqrt(n_old), so sqrt(n_new) = 2 x sqrt(n_old), hence n_new = 4 x n_old. You must quadruple the sample size to halve the CI width. This illustrates the diminishing returns of increasing sample size on precision."
  },
  {
    id: 39,
    question: "A researcher finds p = 0.001 for a drug that reduces mean pain score by 0.2 points on a 100-point scale (95% CI: 0.1 to 0.3). The best interpretation is:",
    options: ["The drug is both statistically and clinically significant", "The drug is statistically significant but likely not clinically significant", "The drug is clinically significant but not statistically significant", "The result is inconclusive"],
    answer: 1,
    explanation: "Statistical significance (p = 0.001) does not imply clinical significance. A reduction of only 0.2 points on a 100-point scale is trivially small and unlikely to be meaningful to patients, even though the narrow CI (0.1-0.3) confirms the effect is 'real.' This typically occurs with very large sample sizes where even tiny differences become statistically significant. Clinical significance should be assessed using minimal clinically important difference (MCID)."
  },
  {
    id: 40,
    question: "A 95% CI for the difference in cure rates between two drugs is (-5%, +15%). Which of the following is the most accurate interpretation?",
    options: ["Drug A is definitely superior to Drug B", "Drug B is definitely superior to Drug A", "The study is inconclusive - the true difference could favor either drug or be zero", "The drugs are equivalent"],
    answer: 2,
    explanation: "The CI (-5% to +15%) crosses zero, meaning the true difference could be negative (favoring Drug B), zero (no difference), or positive (favoring Drug A). This makes the result statistically non-significant at alpha = 0.05. However, it does NOT prove equivalence - the CI includes potentially meaningful differences in both directions. An equivalence trial with predefined margins would be needed to conclude equivalence."
  },

  // ===== HYPOTHESIS TESTING (Q41-Q50) =====
  {
    id: 41,
    question: "A researcher wants to compare mean birth weights between three ethnic groups. Which statistical test is most appropriate?",
    options: ["Independent t-test", "Paired t-test", "One-way ANOVA", "Chi-square test"],
    answer: 2,
    explanation: "One-way ANOVA is used to compare means across three or more independent groups. An independent t-test compares only two groups; using multiple t-tests inflates Type I error. A paired t-test is for matched/dependent samples. Chi-square is for categorical data. ANOVA tests H0: mu_1 = mu_2 = mu_3. If significant, post-hoc tests (Tukey, Bonferroni) identify which pairs differ."
  },
  {
    id: 42,
    question: "A researcher fails to reject the null hypothesis when the drug actually works (the alternative is true). This error is called:",
    options: ["Type I error (alpha error)", "Type II error (beta error)", "Type III error", "Standard error"],
    answer: 1,
    explanation: "Type II error (beta error) occurs when we fail to reject H0 when it is actually false (i.e., missing a real effect). Type I error (alpha) is rejecting H0 when it is true (false positive). Power = 1 - beta = probability of correctly detecting a true effect. In clinical trials, Type II error means failing to identify an effective treatment. Increasing sample size, effect size, or alpha level reduces beta."
  },
  {
    id: 43,
    question: "A study with 80% power at alpha = 0.05 tests a new antihypertensive. If the drug truly works, what is the probability of a Type II error?",
    options: ["0.05", "0.20", "0.80", "0.95"],
    answer: 1,
    explanation: "Power = 1 - beta, where beta is the probability of Type II error. Given power = 80% = 0.80, beta = 1 - 0.80 = 0.20 or 20%. This means there is a 20% chance of failing to detect the drug's true effect. Alpha (0.05) is the probability of Type I error, which is set independently. The ideal study has high power (>80%) and low alpha (<0.05)."
  },
  {
    id: 44,
    question: "To compare the proportion of smokers between males and females in a sample of 500 adults, the appropriate test is:",
    options: ["Independent t-test", "Chi-square test", "Paired t-test", "One-way ANOVA"],
    answer: 1,
    explanation: "The Chi-square test of independence is used to compare proportions between two or more categorical groups. Both variables are categorical: gender (male/female) and smoking status (smoker/non-smoker). The data forms a 2x2 contingency table. T-tests and ANOVA are for continuous outcome variables. If any expected cell frequency is <5, Fisher's exact test should be used instead of Chi-square."
  },
  {
    id: 45,
    question: "A paired t-test is performed to compare pre- and post-treatment blood glucose in 30 diabetic patients. The mean difference is 15 mg/dL with SE of the difference = 5 mg/dL. What is the t-statistic?",
    options: ["0.33", "3.00", "75.0", "5.00"],
    answer: 1,
    explanation: "t = (mean difference - hypothesized difference) / SE of difference = (15 - 0) / 5 = 3.00. The hypothesized difference under H0 is 0 (no change). With df = n-1 = 29, t_critical at alpha = 0.05 (two-tailed) is approximately 2.045. Since 3.00 > 2.045, we reject H0 and conclude the treatment significantly changed blood glucose. The paired t-test accounts for within-subject correlation."
  },
  {
    id: 46,
    question: "Which of the following is a non-parametric alternative to the independent samples t-test?",
    options: ["Wilcoxon signed-rank test", "Mann-Whitney U test", "Kruskal-Wallis test", "Friedman test"],
    answer: 1,
    explanation: "Mann-Whitney U test (also called Wilcoxon rank-sum test) is the non-parametric equivalent of the independent t-test, used when data is not normally distributed or is ordinal. Wilcoxon signed-rank test is the non-parametric alternative to the paired t-test. Kruskal-Wallis is the non-parametric version of one-way ANOVA. Friedman test is the non-parametric alternative to repeated measures ANOVA."
  },
  {
    id: 47,
    question: "In a clinical trial, 50 out of 200 patients in the treatment group and 80 out of 200 in the placebo group experience adverse events. The chi-square statistic is 10.29. With df=1 and chi-square critical value of 3.84 at alpha=0.05, what is the conclusion?",
    options: ["Fail to reject H0; no significant difference", "Reject H0; significant difference in adverse event rates", "The test is invalid due to small sample", "Apply Yates correction first"],
    answer: 1,
    explanation: "Chi-square calculated (10.29) > Chi-square critical (3.84) at df=1, alpha=0.05. Therefore, we reject H0 and conclude there is a statistically significant difference in adverse event rates between groups (25% vs 40%). Expected frequencies are all >5 (large sample), so Yates correction is not mandatory. The corresponding p-value is approximately 0.001, well below 0.05."
  },
  {
    id: 48,
    question: "A researcher wants to determine if there is a linear relationship between hours of exercise per week and serum cholesterol. With n=30, the correlation coefficient r = -0.45. To test if this correlation is significant, which test is used?",
    options: ["Chi-square test", "t-test for correlation coefficient", "F-test", "Z-test"],
    answer: 1,
    explanation: "To test H0: rho = 0 (no linear correlation), we use t = r x sqrt(n-2) / sqrt(1-r^2) = -0.45 x sqrt(28) / sqrt(1-0.2025) = -0.45 x 5.292 / sqrt(0.7975) = -2.381/0.893 = -2.67. With df = n-2 = 28, t_critical (two-tailed, alpha=0.05) is approximately 2.048. Since |t| = 2.67 > 2.048, the negative correlation is statistically significant."
  },
  {
    id: 49,
    question: "In a crossover trial comparing two analgesics, each patient receives both drugs in random order with a washout period. The appropriate statistical test is:",
    options: ["Independent t-test", "Paired t-test", "Chi-square test", "Mann-Whitney U test"],
    answer: 1,
    explanation: "In a crossover trial, the same subjects serve as their own controls, creating paired/dependent data. The paired t-test (or Wilcoxon signed-rank test if non-normal) is appropriate because it accounts for within-subject variability. The independent t-test would be incorrect as it assumes independent groups. The paired design increases power by eliminating between-subject variability, requiring smaller sample sizes."
  },
  {
    id: 50,
    question: "A one-tailed test at alpha = 0.05 is used to test if a new drug is BETTER than placebo. The z-statistic is 1.50. The critical z-value for a one-tailed test at alpha = 0.05 is 1.645. What is the decision?",
    options: ["Reject H0, the drug is significantly better", "Fail to reject H0, insufficient evidence the drug is better", "Reject H0 because 1.50 > 1.28", "The test is inconclusive"],
    answer: 1,
    explanation: "For a one-tailed test at alpha = 0.05, z_critical = 1.645. Since z_calculated (1.50) < z_critical (1.645), we fail to reject H0. There is insufficient evidence to conclude the drug is better than placebo. Note: for a two-tailed test, z_critical = 1.96. The p-value for z = 1.50 is 0.0668 (one-tailed), which exceeds alpha = 0.05. A one-tailed test should only be used when there is strong prior justification for the direction of the effect."
  }
];

export default questions;

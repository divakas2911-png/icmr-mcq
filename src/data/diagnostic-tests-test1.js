const questions = [
  {
    id: 1,
    question: "A new screening test for tuberculosis is evaluated in a population. Out of 200 truly diseased individuals, the test correctly identifies 170 as positive. What is the sensitivity of this test?",
    options: ["70%", "80%", "85%", "90%"],
    answer: 2,
    explanation: "Sensitivity = True Positives / (True Positives + False Negatives) = 170 / 200 = 0.85 = 85%. Sensitivity measures the ability of a test to correctly identify those WITH the disease. A high sensitivity means few false negatives."
  },
  {
    id: 2,
    question: "In a study evaluating a diagnostic test for diabetes, out of 300 truly non-diabetic individuals, 270 test negative. What is the specificity of this test?",
    options: ["80%", "85%", "90%", "95%"],
    answer: 2,
    explanation: "Specificity = True Negatives / (True Negatives + False Positives) = 270 / 300 = 0.90 = 90%. Specificity measures the ability of a test to correctly identify those WITHOUT the disease. A high specificity means few false positives."
  },
  {
    id: 3,
    question: "In a 2x2 contingency table for a diagnostic test, which cell represents individuals who test POSITIVE but do NOT have the disease?",
    options: ["True Positive (a)", "False Positive (b)", "False Negative (c)", "True Negative (d)"],
    answer: 1,
    explanation: "In the standard 2x2 table layout: a = True Positive (test+, disease+), b = False Positive (test+, disease-), c = False Negative (test-, disease+), d = True Negative (test-, disease-). False Positives (b) are those who test positive but do not actually have the disease."
  },
  {
    id: 4,
    question: "The formula for sensitivity using 2x2 table notation (a=TP, b=FP, c=FN, d=TN) is:",
    options: ["a / (a + b)", "a / (a + c)", "d / (b + d)", "a / (a + d)"],
    answer: 1,
    explanation: "Sensitivity = True Positives / All Diseased = a / (a + c). The denominator includes all truly diseased individuals (TP + FN). This is also known as the True Positive Rate (TPR) or Recall."
  },
  {
    id: 5,
    question: "Using 2x2 table notation (a=TP, b=FP, c=FN, d=TN), the formula for specificity is:",
    options: ["d / (c + d)", "d / (b + d)", "a / (a + b)", "d / (a + d)"],
    answer: 1,
    explanation: "Specificity = True Negatives / All Non-Diseased = d / (b + d). The denominator includes all truly non-diseased individuals (FP + TN). This is also known as the True Negative Rate (TNR)."
  },
  {
    id: 6,
    question: "A physician uses the mnemonic 'SnNout' in clinical practice. This means:",
    options: ["A test with high Specificity, if Negative, rules OUT disease", "A test with high Sensitivity, if Negative, rules OUT disease", "A test with high Sensitivity, if Positive, rules OUT disease", "A test with high Specificity, if Positive, rules OUT disease"],
    answer: 1,
    explanation: "SnNout: A test with high Sensitivity, when Negative, rules OUT the disease. When sensitivity is very high, a negative result has a very low false negative rate, making it very unlikely the patient has the disease. This is useful for screening tests."
  },
  {
    id: 7,
    question: "A clinician wants to confirm a diagnosis of syphilis before initiating treatment. She should choose a test that follows which rule?",
    options: ["SnNout - high sensitivity to rule out disease", "SpPin - high specificity to rule in disease", "A test with high PPV regardless of specificity", "A test with the lowest false negative rate"],
    answer: 1,
    explanation: "SpPin: A test with high Specificity, when Positive, rules IN the disease. Since the clinician wants to confirm a diagnosis before treatment, a highly specific test is needed. A positive result from a highly specific test has very few false positives, effectively ruling in the disease."
  },
  {
    id: 8,
    question: "A test for HIV has sensitivity of 99.5% and specificity of 98%. In the context of SnNout/SpPin rules, which statement is MOST accurate?",
    options: ["A positive test rules out HIV", "A negative test rules in HIV", "A negative test rules out HIV (SnNout applies)", "A positive test rules out HIV (SpPin applies)"],
    answer: 2,
    explanation: "With sensitivity of 99.5% (very high), the SnNout rule applies: a Negative result rules OUT the disease. The false negative rate is only 0.5%, so a negative result makes HIV very unlikely. SpPin would apply to the specificity (98%), but 99.5% sensitivity is more impressive for the SnNout rule."
  },
  {
    id: 9,
    question: "When the cutoff value for a continuous diagnostic test (e.g., blood glucose for diabetes) is lowered, what happens to sensitivity and specificity?",
    options: ["Both sensitivity and specificity increase", "Sensitivity increases, specificity decreases", "Sensitivity decreases, specificity increases", "Both sensitivity and specificity decrease"],
    answer: 1,
    explanation: "Lowering the cutoff (threshold) captures more positive cases, increasing sensitivity (fewer false negatives). However, this also classifies more non-diseased individuals as positive, decreasing specificity (more false positives). Sensitivity and specificity have an inverse relationship with changes in cutoff."
  },
  {
    id: 10,
    question: "A cardiologist raises the troponin cutoff level for diagnosing acute MI from 0.04 ng/mL to 0.10 ng/mL. What is the MOST LIKELY consequence?",
    options: ["Increased sensitivity with decreased specificity", "Decreased sensitivity with increased specificity", "Both sensitivity and specificity increase", "No change in sensitivity or specificity"],
    answer: 1,
    explanation: "Raising the cutoff means only patients with higher troponin levels will be classified as positive. This reduces sensitivity (more true positives will be missed as false negatives) but increases specificity (fewer non-MI patients will be falsely classified as MI). Raising the cutoff moves toward ruling in disease."
  },
  {
    id: 11,
    question: "A diagnostic test has a sensitivity of 80% and specificity of 90%. What is the False Positive Rate (FPR) of this test?",
    options: ["80%", "20%", "10%", "90%"],
    answer: 2,
    explanation: "False Positive Rate (FPR) = 1 - Specificity = 1 - 0.90 = 0.10 = 10%. FPR represents the proportion of non-diseased individuals who incorrectly test positive. It is also called the alpha error or Type I error rate for the test."
  },
  {
    id: 12,
    question: "The False Negative Rate of a diagnostic test is 15%. What is the sensitivity of this test?",
    options: ["15%", "85%", "75%", "Cannot be determined"],
    answer: 1,
    explanation: "False Negative Rate (FNR) = 1 - Sensitivity. Therefore, Sensitivity = 1 - FNR = 1 - 0.15 = 0.85 = 85%. FNR represents the proportion of truly diseased individuals who are incorrectly classified as negative (missed cases)."
  },
  {
    id: 13,
    question: "Positive Predictive Value (PPV) is defined as:",
    options: ["Probability that a person with the disease tests positive", "Probability that a person who tests positive actually has the disease", "Probability that a person without the disease tests negative", "Proportion of true positives among all tested individuals"],
    answer: 1,
    explanation: "PPV = True Positives / (True Positives + False Positives) = a / (a + b). It answers the clinical question: 'If the test is positive, what is the probability the patient actually has the disease?' PPV is heavily influenced by disease prevalence."
  },
  {
    id: 14,
    question: "Using 2x2 table notation (a=TP, b=FP, c=FN, d=TN), the Negative Predictive Value (NPV) is calculated as:",
    options: ["d / (c + d)", "d / (b + d)", "a / (a + c)", "c / (c + d)"],
    answer: 0,
    explanation: "NPV = True Negatives / (False Negatives + True Negatives) = d / (c + d). NPV answers the clinical question: 'If the test is negative, what is the probability the patient truly does NOT have the disease?' Like PPV, NPV is affected by disease prevalence."
  },
  {
    id: 15,
    question: "A rapid strep test has sensitivity 80% and specificity 95%. In a clinic where prevalence of strep throat is 10%, the PPV will be approximately:",
    options: ["80%", "64%", "61%", "95%"],
    answer: 2,
    explanation: "Using Bayes' theorem: PPV = (Sens x Prev) / [(Sens x Prev) + (1-Spec)(1-Prev)] = (0.80 x 0.10) / [(0.80 x 0.10) + (0.05 x 0.90)] = 0.08 / (0.08 + 0.045) = 0.08 / 0.125 = 0.64. Actually this gives approximately 64%. In a low-prevalence setting, even a specific test has moderate PPV."
  },
  {
    id: 16,
    question: "The MOST important factor that affects Positive Predictive Value (PPV) in a community setting is:",
    options: ["Sensitivity of the test", "Specificity of the test", "Prevalence of the disease", "Sample size of the study"],
    answer: 2,
    explanation: "While both sensitivity and specificity contribute to PPV, disease prevalence (pre-test probability) has the most dramatic effect. As prevalence decreases, PPV drops substantially even with a highly specific test. This is why screening in low-prevalence populations yields many false positives."
  },
  {
    id: 17,
    question: "A diagnostic test has sensitivity 90% and specificity 90%. When used in a population with 1% disease prevalence, the PPV will be approximately:",
    options: ["90%", "50%", "8.3%", "1%"],
    answer: 2,
    explanation: "With 1% prevalence in 10,000 people: 100 diseased (90 TP, 10 FN), 9,900 non-diseased (990 FP, 8,910 TN). PPV = 90 / (90 + 990) = 90 / 1080 = 8.3%. This illustrates the dramatic effect of low prevalence on PPV - even an excellent test performs poorly in screening low-prevalence populations."
  },
  {
    id: 18,
    question: "As disease prevalence increases in a population, what happens to PPV and NPV?",
    options: ["Both PPV and NPV increase", "PPV increases, NPV decreases", "PPV decreases, NPV increases", "Both PPV and NPV decrease"],
    answer: 1,
    explanation: "As prevalence increases: PPV increases (more true positives relative to false positives) and NPV decreases (more true diseased people who might test negative, reducing the reliability of a negative result). PPV and NPV move in opposite directions with changes in prevalence."
  },
  {
    id: 19,
    question: "A screening test for breast cancer has sensitivity 85% and specificity 90%. In Hospital A (prevalence 5%), PPV = 31%. In Hospital B (prevalence 20%), the PPV will be approximately:",
    options: ["31%", "51%", "68%", "85%"],
    answer: 2,
    explanation: "For Hospital B (prevalence 20%): In 1000 people, 200 diseased (170 TP, 30 FN), 800 non-diseased (80 FP, 720 TN). PPV = 170 / (170 + 80) = 170 / 250 = 68%. Higher prevalence substantially increases PPV, demonstrating why diagnostic tests perform better in high-prevalence (referred/symptomatic) populations."
  },
  {
    id: 20,
    question: "A test for COVID-19 in an ICU population (high prevalence 60%) vs a general screening camp (prevalence 2%). Which statement is CORRECT?",
    options: ["PPV is higher in the screening camp", "NPV is higher in the ICU population", "PPV is higher in the ICU population", "Both PPV and NPV are equal across settings"],
    answer: 2,
    explanation: "In high-prevalence settings (ICU), there are more true diseased individuals, so a positive test is more likely to be a true positive, yielding higher PPV. In low-prevalence settings (screening camp), PPV is lower. NPV is higher in low-prevalence settings (negative test more reliably rules out disease when prevalence is low)."
  },
  {
    id: 21,
    question: "A test has sensitivity 75% and specificity 85%. In a population of 1000 with 20% prevalence, how many FALSE POSITIVES are expected?",
    options: ["120", "150", "200", "60"],
    answer: 0,
    explanation: "With 20% prevalence: 200 diseased, 800 non-diseased. False Positives = Non-diseased x (1-Specificity) = 800 x 0.15 = 120. This confirms that even with good specificity (85%), false positives can be numerous when the non-diseased population is large."
  },
  {
    id: 22,
    question: "NPV is HIGHEST when:",
    options: ["Prevalence is high and sensitivity is low", "Prevalence is low and sensitivity is high", "Prevalence is high and specificity is low", "Prevalence is low and specificity is low"],
    answer: 1,
    explanation: "NPV is highest when disease prevalence is low (few false negatives in an absolute sense) and sensitivity is high (few true positives are missed). When prevalence is low, most test-negative results are true negatives. High sensitivity further ensures few diseased individuals are misclassified as negative."
  },
  {
    id: 23,
    question: "A physician notes that a test's PPV is only 40% despite high specificity of 95%. The MOST likely explanation is:",
    options: ["The sensitivity is very low", "The disease prevalence in the tested population is very low", "The sample size was too small", "The test was performed incorrectly"],
    answer: 1,
    explanation: "Low PPV despite high specificity is the classic hallmark of low disease prevalence. When prevalence is very low, even a 5% false positive rate (1-specificity) generates many false positives relative to the few true positives, dramatically reducing PPV. This is the fundamental challenge of mass screening programs."
  },
  {
    id: 24,
    question: "Which of the following is NOT affected by disease prevalence?",
    options: ["Positive Predictive Value (PPV)", "Negative Predictive Value (NPV)", "Sensitivity", "None of the above - all are affected by prevalence"],
    answer: 2,
    explanation: "Sensitivity and specificity are intrinsic properties of the test determined by the test's biology and cutoff point. They are calculated within disease-positive and disease-negative groups separately and are NOT affected by prevalence. PPV and NPV, however, depend critically on the disease prevalence in the population being tested."
  },
  {
    id: 25,
    question: "In a Receiver Operating Characteristic (ROC) curve, the Y-axis represents:",
    options: ["Specificity", "1 - Specificity (False Positive Rate)", "Sensitivity (True Positive Rate)", "Positive Predictive Value"],
    answer: 2,
    explanation: "The Y-axis of an ROC curve represents Sensitivity (True Positive Rate). The X-axis represents 1 - Specificity (False Positive Rate). The curve is generated by plotting these values at every possible cutoff threshold of the diagnostic test."
  },
  {
    id: 26,
    question: "The X-axis of an ROC curve represents:",
    options: ["Sensitivity", "Specificity", "1 - Specificity (False Positive Rate)", "1 - Sensitivity (False Negative Rate)"],
    answer: 2,
    explanation: "The X-axis of an ROC curve represents 1 - Specificity, which equals the False Positive Rate (FPR). As you move right along the X-axis, specificity decreases and the false positive rate increases. The ROC curve plots sensitivity vs. (1-specificity) at all possible diagnostic thresholds."
  },
  {
    id: 27,
    question: "The Area Under the ROC Curve (AUC or c-statistic) for a perfectly useless diagnostic test (no better than chance) is:",
    options: ["0.0", "0.5", "1.0", "0.25"],
    answer: 1,
    explanation: "An AUC of 0.5 represents a test with no discriminatory ability - equivalent to random chance (like flipping a coin). On the ROC curve, this appears as a diagonal line from (0,0) to (1,1). An AUC of 1.0 represents a perfect test, and values closer to 1.0 indicate better discrimination."
  },
  {
    id: 28,
    question: "A study comparing two diagnostic tests for pneumonia finds AUC of 0.85 for Test A and AUC of 0.72 for Test B. Which conclusion is CORRECT?",
    options: ["Test B is superior as it has lower AUC", "Test A is superior as it has higher AUC", "Both tests are equally useful", "AUC cannot be used to compare tests"],
    answer: 1,
    explanation: "Higher AUC indicates better overall diagnostic accuracy. Test A (AUC 0.85) has better discrimination between diseased and non-diseased individuals across all cutoff points compared to Test B (AUC 0.72). AUC is one of the primary methods for comparing diagnostic tests independent of a single cutoff threshold."
  },
  {
    id: 29,
    question: "On an ROC curve, the 'ideal point' or optimal cutoff is located at:",
    options: ["Bottom right corner (1, 0)", "Top right corner (1, 1)", "Top left corner (0, 1)", "Center of the curve (0.5, 0.5)"],
    answer: 2,
    explanation: "The ideal point on an ROC curve is the top left corner (coordinates 0, 1), representing 0% false positive rate and 100% sensitivity - a perfect test. The optimal cutoff point on a real ROC curve is typically the point closest to the top left corner, maximizing both sensitivity and specificity."
  },
  {
    id: 30,
    question: "What does the diagonal line (from bottom-left to top-right) on an ROC curve represent?",
    options: ["A test with 100% sensitivity", "A test with 100% specificity", "A test with no discriminatory ability (chance level)", "The optimal cutoff threshold"],
    answer: 2,
    explanation: "The diagonal reference line (line of no discrimination) represents a test that performs no better than chance. Along this line, at every cutoff, sensitivity equals (1-specificity). Any clinically useful test should have its ROC curve above this diagonal line."
  },
  {
    id: 31,
    question: "An AUC of 0.92 for a diagnostic test is best interpreted as:",
    options: ["The test correctly classifies 92% of all individuals", "There is a 92% probability that the test correctly ranks a randomly chosen diseased individual higher than a randomly chosen non-diseased individual", "The test has 92% sensitivity", "The test has 92% specificity"],
    answer: 1,
    explanation: "The AUC represents the probability that a randomly selected diseased individual will have a higher test value than a randomly selected non-diseased individual. An AUC of 0.92 means there is a 92% chance the test will correctly distinguish between a diseased and non-diseased person in a random pair."
  },
  {
    id: 32,
    question: "An AUC value between 0.70-0.80 is generally classified as:",
    options: ["Excellent discrimination", "Acceptable/fair discrimination", "Poor discrimination", "Perfect discrimination"],
    answer: 1,
    explanation: "Standard AUC interpretation: 0.5 = no discrimination; 0.5-0.7 = poor; 0.7-0.8 = acceptable/fair; 0.8-0.9 = excellent; 0.9-1.0 = outstanding. An AUC of 0.70-0.80 indicates acceptable or fair diagnostic discrimination."
  },
  {
    id: 33,
    question: "When comparing two ROC curves that cross each other, which statement is MOST appropriate?",
    options: ["The test with the higher AUC is always clinically superior", "One test may be superior at certain cutoffs while the other is superior at different cutoffs", "The crossing point represents the optimal cutoff for both tests", "Tests with crossing ROC curves cannot be compared"],
    answer: 1,
    explanation: "When ROC curves cross, neither test dominates the other across all thresholds. One test may have better sensitivity at certain specificity levels, while the other performs better at different points. In this case, AUC comparison alone may be misleading, and the clinician must consider which region of the curve is relevant for their clinical scenario."
  },
  {
    id: 34,
    question: "A test with AUC = 0.5 on the ROC curve would appear as:",
    options: ["A curve bulging toward the top-left corner", "A straight diagonal line from (0,0) to (1,1)", "A vertical line along the Y-axis", "A horizontal line along the X-axis"],
    answer: 1,
    explanation: "An AUC of 0.5 corresponds to the diagonal reference line on the ROC curve, running from coordinates (0,0) to (1,1). This indicates no discriminatory ability - the test is no better than random chance. Any useful diagnostic test should have its ROC curve above this diagonal line."
  },
  {
    id: 35,
    question: "The Youden Index (J) is used in ROC curve analysis to identify the optimal cutoff. It is calculated as:",
    options: ["Sensitivity x Specificity", "Sensitivity + Specificity - 1", "Sensitivity / (1 - Specificity)", "(Sensitivity + Specificity) / 2"],
    answer: 1,
    explanation: "Youden Index J = Sensitivity + Specificity - 1 (or equivalently, Sensitivity - (1-Specificity)). It ranges from 0 (no discriminatory ability) to 1 (perfect test). The cutoff that maximizes the Youden Index is often chosen as the optimal threshold, as it maximizes the combined sensitivity and specificity."
  },
  {
    id: 36,
    question: "In a study, a blood biomarker for sepsis has AUC = 0.79 with 95% CI (0.68-0.90). Another biomarker has AUC = 0.74 with 95% CI (0.61-0.87). Which conclusion is MOST appropriate?",
    options: ["The first biomarker is significantly better", "There is no statistically significant difference between the two biomarkers", "The second biomarker is significantly better", "AUC with confidence intervals cannot be compared"],
    answer: 1,
    explanation: "To determine if two AUC values are statistically significantly different, their confidence intervals should not overlap (or a formal DeLong test should be applied). Since the confidence intervals (0.68-0.90 and 0.61-0.87) substantially overlap, there is no statistically significant difference between the two biomarkers' discriminatory abilities."
  },
  {
    id: 37,
    question: "A physician wants to choose a cutoff for a cancer screening test that maximizes sensitivity even at the expense of specificity. On the ROC curve, this corresponds to selecting a point:",
    options: ["Closest to the top-left corner", "At the top of the curve (highest sensitivity)", "In the middle of the curve", "At the far right of the curve"],
    answer: 1,
    explanation: "When maximizing sensitivity is the priority (e.g., cancer screening where missing a case is unacceptable), the physician moves to the upper portion of the ROC curve where sensitivity is highest, accepting lower specificity (and more false positives). This corresponds to using a lower diagnostic threshold."
  },
  {
    id: 38,
    question: "The Positive Likelihood Ratio (LR+) is calculated as:",
    options: ["Sensitivity / Specificity", "Sensitivity / (1 - Specificity)", "(1 - Sensitivity) / Specificity", "(1 - Sensitivity) / (1 - Specificity)"],
    answer: 1,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = True Positive Rate / False Positive Rate. It tells you how much more likely a positive test result is in a diseased person compared to a non-diseased person. A high LR+ (>10) provides strong evidence to rule in disease."
  },
  {
    id: 39,
    question: "The Negative Likelihood Ratio (LR-) is calculated as:",
    options: ["(1 - Sensitivity) / Specificity", "Sensitivity / (1 - Specificity)", "Specificity / Sensitivity", "(1 - Specificity) / Sensitivity"],
    answer: 0,
    explanation: "LR- = (1 - Sensitivity) / Specificity = False Negative Rate / True Negative Rate. It tells you how much more likely a negative test result is in a diseased person compared to a non-diseased person. A low LR- (<0.1) provides strong evidence to rule out disease."
  },
  {
    id: 40,
    question: "A diagnostic test has sensitivity 90% and specificity 85%. What is the Positive Likelihood Ratio (LR+)?",
    options: ["6.0", "5.4", "1.06", "4.5"],
    answer: 0,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = 0.90 / (1 - 0.85) = 0.90 / 0.15 = 6.0. An LR+ of 6.0 means a positive test result is 6 times more likely to occur in a diseased person than in a non-diseased person. This is considered moderately strong evidence for the diagnosis."
  },
  {
    id: 41,
    question: "A diagnostic test has sensitivity 80% and specificity 95%. What is the Negative Likelihood Ratio (LR-)?",
    options: ["0.21", "0.16", "0.25", "0.05"],
    answer: 0,
    explanation: "LR- = (1 - Sensitivity) / Specificity = (1 - 0.80) / 0.95 = 0.20 / 0.95 = 0.21. An LR- of 0.21 means a negative test result is approximately 0.21 times as likely to occur in a diseased person as in a non-diseased person. This provides moderate evidence against the diagnosis (not a strong rule-out)."
  },
  {
    id: 42,
    question: "An LR+ of 15 for a diagnostic test is best interpreted as:",
    options: ["The test has 15% sensitivity", "A positive test result is 15 times more likely in diseased than non-diseased individuals - strong evidence to rule in", "The post-test probability is 15%", "The test correctly identifies 15 out of every 100 patients"],
    answer: 1,
    explanation: "LR+ of 15 indicates a positive result is 15 times more likely in a diseased individual than in a non-diseased one. This is interpreted as strong evidence to rule in disease (LR+ >10 is generally considered strong, 5-10 moderate, 2-5 weak, <2 minimal evidence for disease)."
  },
  {
    id: 43,
    question: "Which LR- value provides the STRONGEST evidence to rule out a disease?",
    options: ["0.5", "0.2", "0.08", "0.3"],
    answer: 2,
    explanation: "Lower LR- values provide stronger evidence to rule out disease. LR- <0.1 is considered strong evidence to rule out, 0.1-0.2 moderate, 0.2-0.5 weak, >0.5 minimal. An LR- of 0.08 (<0.1) provides strong evidence to rule out disease. The closer LR- is to 0, the better the test is at ruling out disease."
  },
  {
    id: 44,
    question: "Pre-test probability of a disease is 30%. A test with LR+ = 5 is performed and comes back positive. Using the odds method, the post-test probability is approximately:",
    options: ["68%", "55%", "75%", "83%"],
    answer: 0,
    explanation: "Step 1: Convert pre-test probability to odds: 0.30/(1-0.30) = 0.30/0.70 = 0.43. Step 2: Post-test odds = Pre-test odds x LR+ = 0.43 x 5 = 2.14. Step 3: Convert back to probability: 2.14/(1+2.14) = 2.14/3.14 = 0.68 = 68%. This calculation is fundamental to applying likelihood ratios in clinical practice."
  },
  {
    id: 45,
    question: "A patient has a pre-test probability of pulmonary embolism of 20%. D-dimer test is negative with LR- = 0.1. The post-test probability is approximately:",
    options: ["2.4%", "5%", "10%", "15%"],
    answer: 0,
    explanation: "Pre-test odds = 0.20/0.80 = 0.25. Post-test odds = Pre-test odds x LR- = 0.25 x 0.1 = 0.025. Post-test probability = 0.025/(1+0.025) = 0.025/1.025 = 2.4%. A negative D-dimer (LR- = 0.1) dramatically reduces the probability of PE from 20% to 2.4%, effectively ruling it out."
  },
  {
    id: 46,
    question: "The Fagan Nomogram is used in clinical practice to:",
    options: ["Calculate sensitivity and specificity from a 2x2 table", "Graphically determine post-test probability from pre-test probability and likelihood ratio", "Compare ROC curves of two diagnostic tests", "Calculate the optimal cutoff for a diagnostic test"],
    answer: 1,
    explanation: "The Fagan Nomogram is a graphical tool that allows clinicians to quickly determine post-test probability by drawing a line through the pre-test probability (left axis) and the likelihood ratio (middle axis). The line intersects the right axis at the post-test probability. It avoids the need for manual odds calculations."
  },
  {
    id: 47,
    question: "A diagnostic test has LR+ = 1.2 and LR- = 0.9. What does this indicate?",
    options: ["Excellent diagnostic accuracy for both positive and negative results", "The test has high sensitivity but low specificity", "The test has minimal diagnostic utility - barely changes pre-test probability", "The test is useful for ruling in but not ruling out disease"],
    answer: 2,
    explanation: "LR values close to 1 indicate minimal change in probability after testing. LR+ of 1.2 means a positive result only slightly increases the probability of disease, and LR- of 0.9 means a negative result only slightly decreases it. Such a test adds virtually no diagnostic value. Useful tests have LR+ substantially >1 and LR- substantially <1."
  },
  {
    id: 48,
    question: "A test has sensitivity 95% and specificity 95%. Calculate both LR+ and LR-:",
    options: ["LR+ = 19, LR- = 0.053", "LR+ = 9.5, LR- = 0.05", "LR+ = 19, LR- = 0.5", "LR+ = 0.95, LR- = 0.05"],
    answer: 0,
    explanation: "LR+ = Sensitivity / (1-Specificity) = 0.95 / 0.05 = 19. LR- = (1-Sensitivity) / Specificity = 0.05 / 0.95 = 0.053. Both values are excellent: LR+ of 19 provides very strong evidence to rule in disease (>10), and LR- of 0.053 provides strong evidence to rule out disease (<0.1)."
  },
  {
    id: 49,
    question: "Which of the following is a major ADVANTAGE of likelihood ratios over sensitivity, specificity, PPV, and NPV?",
    options: ["They are easier to calculate", "They can be multiplied sequentially for multiple independent tests and are not directly dependent on prevalence for their calculation", "They are always between 0 and 1", "They require a smaller sample size to calculate"],
    answer: 1,
    explanation: "Likelihood ratios have two key advantages: (1) LR+ and LR- are calculated from sensitivity and specificity and thus do not change with disease prevalence (unlike PPV and NPV), and (2) LRs from multiple independent tests can be multiplied sequentially to update post-test probability step by step. This makes them highly portable across different clinical settings."
  },
  {
    id: 50,
    question: "A study evaluates a new rapid test for influenza with sensitivity 70%, specificity 99%. In an emergency department with 40% influenza prevalence during peak season, a physician uses LR+ to update probability. LR+ = 0.70/0.01 = 70. Pre-test odds = 0.4/0.6 = 0.67. Post-test odds after positive result =",
    options: ["46.9 (probability ~97.9%)", "28.0 (probability ~96.6%)", "0.67 (probability ~40%)", "70.0 (probability ~98.6%)"],
    answer: 0,
    explanation: "Post-test odds = Pre-test odds x LR+ = 0.67 x 70 = 46.9. Post-test probability = 46.9 / (1 + 46.9) = 46.9 / 47.9 = 97.9%. Despite only 70% sensitivity, the extremely high specificity (99%) yields a very high LR+ (70), meaning a positive test in a 40% pre-test probability setting results in near-certain (97.9%) diagnosis of influenza."
  }
];

export default questions;

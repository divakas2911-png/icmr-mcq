const questions = [
  {
    id: 1,
    question: "In an ROC curve, the x-axis represents which of the following?",
    options: [
      "1 - Specificity (False Positive Rate)",
      "Sensitivity (True Positive Rate)",
      "Positive Predictive Value",
      "Likelihood Ratio Positive"
    ],
    answer: 0,
    explanation: "The ROC (Receiver Operating Characteristic) curve is plotted with 1 - Specificity (also called the False Positive Rate) on the x-axis and Sensitivity (True Positive Rate) on the y-axis. Each point on the curve corresponds to a different threshold cutoff value for the test."
  },
  {
    id: 2,
    question: "In ROC curve construction, each individual point on the curve represents:",
    options: [
      "A different patient subgroup",
      "A different diagnostic test",
      "A different threshold cutoff value for the test",
      "A different disease prevalence"
    ],
    answer: 2,
    explanation: "Each point on an ROC curve represents the sensitivity and (1 - specificity) pair obtained at a specific threshold (cutoff) value. As the threshold is varied from the lowest to highest test value, the curve is traced from the upper right to the lower left of the plot."
  },
  {
    id: 3,
    question: "A 'perfect' diagnostic test would produce an ROC curve that:",
    options: [
      "Follows the diagonal line from (0,0) to (1,1)",
      "Passes through the upper left corner (0,1)",
      "Has an AUC of exactly 0.5",
      "Follows the lower right boundary of the plot"
    ],
    answer: 1,
    explanation: "A perfect diagnostic test would have 100% sensitivity and 100% specificity simultaneously, placing a point at the upper left corner (0,1) of the ROC space. This represents zero false positives (specificity = 1, so 1 - specificity = 0) and zero false negatives (sensitivity = 1). The AUC for a perfect test is 1.0."
  },
  {
    id: 4,
    question: "An ROC curve that coincides with the diagonal line from (0,0) to (1,1) represents:",
    options: [
      "A perfect diagnostic test",
      "A test with excellent discriminatory ability",
      "A useless test that performs no better than chance",
      "A test with high sensitivity but low specificity"
    ],
    answer: 2,
    explanation: "The diagonal line from (0,0) to (1,1) on an ROC plot represents a test that has no discriminatory ability — equivalent to random guessing (coin flip). At every threshold, sensitivity equals (1 - specificity), meaning the test cannot distinguish diseased from non-diseased individuals. Its AUC = 0.5."
  },
  {
    id: 5,
    question: "When comparing two diagnostic tests using ROC curves, which statement is most accurate?",
    options: [
      "The test with higher sensitivity at any single point is always superior",
      "The test whose ROC curve is consistently closer to the upper left corner is superior",
      "The test with a steeper initial slope is always preferred",
      "Both tests should always be used together for diagnosis"
    ],
    answer: 1,
    explanation: "When comparing ROC curves, the test whose curve lies consistently closer to the upper left corner (higher sensitivity at each false positive rate) is superior overall. This corresponds to a larger area under the curve (AUC). If curves cross, neither test is globally superior and the choice depends on the clinical context and which region of the curve is most relevant."
  },
  {
    id: 6,
    question: "In ROC curve construction for a continuous biomarker, increasing the cutoff threshold generally causes:",
    options: [
      "Sensitivity to increase and specificity to decrease",
      "Both sensitivity and specificity to increase",
      "Sensitivity to decrease and specificity to increase",
      "No change in either sensitivity or specificity"
    ],
    answer: 2,
    explanation: "As the threshold cutoff is raised (made more stringent), fewer individuals test positive. This causes sensitivity to decrease (more true positives are missed) and specificity to increase (fewer false positives). This trade-off is the fundamental principle underlying ROC curve construction and the reason a single cutoff cannot simultaneously maximize both measures."
  },
  {
    id: 7,
    question: "The slope of the ROC curve at any given point is equal to:",
    options: [
      "The positive predictive value at that cutoff",
      "The positive likelihood ratio at that cutoff",
      "The diagnostic odds ratio",
      "The negative likelihood ratio"
    ],
    answer: 1,
    explanation: "The slope of the ROC curve at any point equals the positive likelihood ratio (LR+) at that particular threshold. This is because slope = change in sensitivity / change in (1 - specificity) = (sensitivity / (1 - specificity)) proportionally, which simplifies to LR+ = sensitivity / (1 - specificity) at a given cutoff. Points on a steeper part of the curve have higher LR+."
  },
  {
    id: 8,
    question: "An ROC curve that bows toward the lower right corner (below the diagonal) would indicate:",
    options: [
      "An excellent test with high discriminatory power",
      "A test performing worse than chance, suggesting reversed scoring",
      "A test with perfect sensitivity",
      "High disease prevalence in the study population"
    ],
    answer: 1,
    explanation: "An ROC curve below the diagonal line indicates the test performs worse than random chance, which typically means the test result scoring is reversed (e.g., high values indicate disease when they should indicate absence of disease). By reversing the score (using the complement of the test result), the curve would be reflected above the diagonal with equivalent AUC of (1 - original AUC)."
  },
  {
    id: 9,
    question: "When constructing an ROC curve, the points are connected in a specific order. Which sequence is correct?",
    options: [
      "From lowest to highest threshold, moving from upper left to lower right",
      "From lowest to highest threshold, moving from lower right to upper left",
      "From highest to lowest threshold, moving from lower right to upper left",
      "Points are connected in order of increasing sensitivity regardless of threshold"
    ],
    answer: 2,
    explanation: "ROC curves are conventionally plotted by starting at high threshold values (test is positive only for very high values, resulting in low sensitivity but high specificity, i.e., point near lower left) and moving to lower thresholds (more positives, higher sensitivity, lower specificity) ending near upper right. Thus from highest to lowest threshold, the curve moves from lower right toward upper left — though the plotted direction depends on convention."
  },
  {
    id: 10,
    question: "The area under the ROC curve (AUC) can be interpreted statistically as:",
    options: [
      "The probability that a randomly selected diseased person tests positive",
      "The probability that a randomly selected diseased person will have a higher test score than a randomly selected non-diseased person",
      "The proportion of the population correctly classified",
      "The sensitivity at the optimal cutoff"
    ],
    answer: 1,
    explanation: "A key statistical interpretation of AUC is the Wilcoxon-Mann-Whitney statistic: it equals the probability that, if one diseased and one non-diseased individual are selected at random, the diseased individual will have a higher test score than the non-diseased individual. AUC = 0.5 means no discrimination, AUC = 1.0 means perfect discrimination."
  },
  {
    id: 11,
    question: "In a study comparing a new cardiac biomarker (AUC = 0.82) with troponin (AUC = 0.79), the ROC curves cross at one point. What is the most appropriate conclusion?",
    options: [
      "The new biomarker is definitively superior for all clinical situations",
      "The two tests are equivalent and either can be used",
      "The new biomarker may be superior overall, but neither test dominates across all cutoffs; clinical context matters",
      "The crossing point indicates both tests have identical sensitivity and specificity"
    ],
    answer: 2,
    explanation: "When ROC curves cross, one test may have a higher overall AUC but the other may perform better in specific regions of clinical importance (e.g., very high sensitivity range for screening vs. high specificity range for confirmation). Overall, higher AUC suggests the new biomarker is better on average, but the clinical decision of which threshold region is important determines which test is preferable in practice."
  },
  {
    id: 12,
    question: "For an ROC curve to be valid and meaningful, the study design should ideally ensure:",
    options: [
      "Disease prevalence is above 50% in the study population",
      "Disease status is determined independently of the test result (no incorporation bias)",
      "The test is performed only in symptomatic patients",
      "The same laboratory technician performs all tests"
    ],
    answer: 1,
    explanation: "A key requirement for valid ROC curve construction is that disease status (reference standard) is verified independently of the index test result (avoiding incorporation bias or verification bias). If test results influence who gets the reference standard, the ROC curve will be biased. The study population should also represent the intended clinical population (spectrum bias considerations)."
  },
  {
    id: 13,
    question: "An AUC of 0.50 for a diagnostic test indicates:",
    options: [
      "The test correctly classifies 50% of patients",
      "The test has 50% sensitivity and 50% specificity",
      "The test has no discriminatory ability, equivalent to chance",
      "The test has a positive likelihood ratio of 1.0 at all cutoffs"
    ],
    answer: 2,
    explanation: "AUC = 0.5 means the test has no discriminatory ability beyond random chance. The ROC curve lies along the diagonal, meaning for every threshold, the sensitivity equals (1 - specificity). This does not necessarily mean sensitivity and specificity are each 50%; rather, the test cannot separate diseased from non-diseased individuals at any threshold."
  },
  {
    id: 14,
    question: "An AUC of 1.0 means:",
    options: [
      "The test has 100% sensitivity only",
      "The test has 100% specificity only",
      "There exists at least one threshold at which sensitivity = 100% and specificity = 100%",
      "The test correctly classifies patients at a 2:1 ratio"
    ],
    answer: 2,
    explanation: "AUC = 1.0 indicates a perfect test, meaning there is at least one threshold value at which the test achieves 100% sensitivity (no false negatives) and 100% specificity (no false positives) simultaneously. The ROC curve passes through the upper left corner (0,1). In practice, AUC = 1.0 is extremely rare and may suggest overfitting or a trivially easy classification problem."
  },
  {
    id: 15,
    question: "According to conventional AUC interpretation guidelines, an AUC value between 0.70 and 0.80 is generally classified as:",
    options: [
      "Excellent discrimination",
      "Acceptable (fair) discrimination",
      "Poor discrimination",
      "Outstanding discrimination"
    ],
    answer: 1,
    explanation: "The conventional AUC classification proposed by Swets and others: 0.50-0.60 = fail/no discrimination, 0.60-0.70 = poor, 0.70-0.80 = acceptable/fair, 0.80-0.90 = excellent, 0.90-1.00 = outstanding. AUC 0.70-0.80 is considered acceptable discrimination and may be clinically useful depending on context."
  },
  {
    id: 16,
    question: "To statistically compare the AUCs of two diagnostic tests applied to the same patients (paired design), the most appropriate method is:",
    options: [
      "Independent samples t-test on the AUC values",
      "DeLong, DeLong, and Clarke-Pearson method for correlated ROC curves",
      "Chi-square test comparing the two AUCs",
      "Fisher's exact test on the 2x2 table at the optimal cutoff"
    ],
    answer: 1,
    explanation: "When the same patients undergo both diagnostic tests (paired/correlated design), the DeLong, DeLong, and Clarke-Pearson (1988) method is the standard non-parametric approach for comparing AUCs. It accounts for the correlation between the two tests within the same subjects. Using independent-samples methods would be incorrect and would ignore this correlation, inflating type I error."
  },
  {
    id: 17,
    question: "A 95% confidence interval for AUC that ranges from 0.68 to 0.91 indicates:",
    options: [
      "The true AUC is definitely between 0.68 and 0.91",
      "The point estimate AUC is approximately 0.80 with adequate precision",
      "We are 95% confident that the true population AUC lies within this interval",
      "The test is statistically significant at p < 0.05 only if the interval excludes 1.0"
    ],
    answer: 2,
    explanation: "A 95% confidence interval means that if the study were repeated 100 times using the same methodology, approximately 95 of the resulting intervals would contain the true population AUC. The key interpretation is that we have 95% confidence the true AUC lies within this range. The interval excludes 0.5, confirming the test discriminates better than chance (p < 0.05). The interval does not need to exclude 1.0 for significance."
  },
  {
    id: 18,
    question: "Which of the following best describes the bootstrap method for estimating confidence intervals of AUC?",
    options: [
      "Drawing repeated samples from a theoretical normal distribution centered on the AUC",
      "Repeatedly resampling with replacement from the observed data to empirically estimate the sampling distribution of AUC",
      "Using the Hanley-McNeil formula with a correction factor for small samples",
      "Applying the binomial distribution to the sensitivity and specificity separately"
    ],
    answer: 1,
    explanation: "The bootstrap method involves repeatedly drawing random samples (with replacement) from the original dataset, calculating the AUC for each bootstrap sample, and using the distribution of these bootstrap AUC values to estimate the confidence interval. It is a non-parametric approach that does not assume a specific distribution for AUC and is particularly useful when sample sizes are small or the distribution of AUC is skewed."
  },
  {
    id: 19,
    question: "The Hanley-McNeil method for computing the standard error of the AUC is based on:",
    options: [
      "The binomial distribution of sensitivity at a fixed specificity",
      "The Wilcoxon statistic interpretation of AUC using structural components",
      "Multiple logistic regression with disease status as the outcome",
      "The trapezoidal rule applied to the empirical ROC curve"
    ],
    answer: 1,
    explanation: "Hanley and McNeil (1982) derived the standard error of AUC using the Wilcoxon statistic framework, specifically computing variance components based on the structural components Q1 and Q2, which reflect concordant pairs and tie structures. The formula accounts for the non-parametric nature of AUC estimation, allowing construction of confidence intervals and hypothesis tests without assuming normality."
  },
  {
    id: 20,
    question: "Two diagnostic tests are compared in an unpaired study (different patients in each group). Test A AUC = 0.78 (95% CI: 0.71-0.85) and Test B AUC = 0.74 (95% CI: 0.67-0.81). What is the most accurate interpretation?",
    options: [
      "Test A is significantly better than Test B since its AUC is higher",
      "The tests are not significantly different since the confidence intervals overlap",
      "A formal statistical comparison is needed; overlapping CIs do not rule out a significant difference",
      "Test B is preferred because its confidence interval is more precisely estimated"
    ],
    answer: 2,
    explanation: "Overlapping confidence intervals do NOT necessarily mean there is no statistically significant difference between two estimates. This is a common misconception. A formal statistical test (e.g., DeLong method for correlated or independent AUCs) is required to determine if the difference in AUCs is statistically significant. Overlapping CIs are neither necessary nor sufficient to conclude non-significance."
  },
  {
    id: 21,
    question: "In a meta-analysis of diagnostic studies, summary AUC is most commonly estimated using which approach?",
    options: [
      "Simple average of individual study AUCs",
      "Weighted average of AUCs using inverse variance weights",
      "Moses-Shapiro-Littenberg method or hierarchical/bivariate models",
      "Fixed-effects model based on sensitivity alone"
    ],
    answer: 2,
    explanation: "In diagnostic test meta-analysis, the Moses-Shapiro-Littenberg (MSL) method was historically used to produce a summary ROC (SROC) curve. However, modern approaches use hierarchical models (HSROC by Rutter and Gatsonis) or bivariate random-effects models (Reitsma et al.) that simultaneously account for the correlation between sensitivity and specificity and between-study heterogeneity. Simple averaging ignores study-level variation and correlation."
  },
  {
    id: 22,
    question: "If a diagnostic test has an AUC of 0.65, which statement best applies?",
    options: [
      "The test should immediately be abandoned for clinical use",
      "A randomly selected diseased person has a 65% probability of having a higher test score than a randomly selected non-diseased person",
      "The test correctly classifies 65% of all patients tested",
      "The test has a sensitivity of 65% at the optimal threshold"
    ],
    answer: 1,
    explanation: "AUC = 0.65 means that if one diseased and one non-diseased individual are selected randomly, there is a 65% probability the diseased individual will have a higher test score — the Wilcoxon-Mann-Whitney interpretation of AUC. This is considered poor discrimination (0.60-0.70 range) but does not always mean the test is clinically useless, as this must be judged in context of available alternatives and clinical consequences."
  },
  {
    id: 23,
    question: "When AUC is calculated using the trapezoidal rule on an empirical ROC curve, the method:",
    options: [
      "Assumes the true ROC curve follows a smooth binormal distribution",
      "Approximates the area by summing trapezoids between consecutive ROC points, giving a non-parametric estimate",
      "Always underestimates the true AUC by a fixed margin",
      "Requires that the number of diseased and non-diseased cases be equal"
    ],
    answer: 1,
    explanation: "The trapezoidal rule (also known as the Wilcoxon statistic for empirical ROC curves) approximates AUC by connecting consecutive ROC points with straight lines and summing the areas of the resulting trapezoids. It is non-parametric and makes no assumptions about the underlying distribution of test scores. It is the most commonly used method in practice and equals the Mann-Whitney U statistic normalized to [0,1]."
  },
  {
    id: 24,
    question: "A researcher claims that because Test A has a higher AUC than Test B, it should always be preferred clinically. This reasoning is flawed because:",
    options: [
      "AUC is not a valid measure of diagnostic performance",
      "AUC summarizes performance across all thresholds, while clinical decisions use a single threshold; performance at the clinically relevant threshold may favor Test B",
      "Test B with lower AUC always has higher sensitivity at all thresholds",
      "AUC values cannot be compared across different studies"
    ],
    answer: 1,
    explanation: "AUC is a global measure of discriminatory ability across all possible thresholds, but clinical practice uses a single threshold. Test B might outperform Test A in the clinically relevant region of the ROC curve (e.g., at high sensitivity for screening or high specificity for confirmation) even with a lower overall AUC. The relevant comparison is performance at the threshold(s) that match the clinical decision context, not global AUC."
  },
  {
    id: 25,
    question: "The Youden index (J) is defined as:",
    options: [
      "Sensitivity x Specificity",
      "Sensitivity + Specificity - 1",
      "(Sensitivity - Specificity) / 2",
      "Sensitivity / (1 - Specificity)"
    ],
    answer: 1,
    explanation: "The Youden index J = Sensitivity + Specificity - 1. It ranges from 0 (no discriminatory ability) to 1 (perfect discrimination). The optimal cutoff by the Youden method is the threshold that maximizes J, giving equal weight to sensitivity and specificity. Geometrically, it corresponds to the ROC curve point with maximum vertical distance from the diagonal reference line."
  },
  {
    id: 26,
    question: "The Youden index method for selecting optimal cutoff implicitly assumes:",
    options: [
      "Sensitivity is twice as important as specificity",
      "The costs of false positives and false negatives are equal, and disease prevalence is 50%",
      "The test has a symmetric ROC curve",
      "The disease is rare in the population"
    ],
    answer: 1,
    explanation: "The Youden index assigns equal weight to sensitivity and specificity, implicitly assuming that false positives and false negatives have equal clinical and economic costs, and that disease prevalence is 50% (or that the costs of misclassification are independent of prevalence). When these assumptions do not hold — which is common in clinical practice — cost-based or prevalence-weighted methods are more appropriate for cutoff selection."
  },
  {
    id: 27,
    question: "In a cost-based approach to cutoff selection, the optimal threshold is determined by the point on the ROC curve where the slope equals:",
    options: [
      "Sensitivity / Specificity",
      "(Cost of FP / Cost of FN) x ((1 - Prevalence) / Prevalence)",
      "Positive likelihood ratio x Disease prevalence",
      "1 - Specificity / Sensitivity"
    ],
    answer: 1,
    explanation: "The cost-based optimal cutoff minimizes total expected misclassification cost. The optimal point is where the ROC curve slope equals (C_FP / C_FN) x ((1 - Prevalence) / Prevalence), where C_FP = cost of false positive and C_FN = cost of false negative. This incorporates both the relative costs of misclassification and disease prevalence, making it more clinically rational than the Youden index when these differ substantially."
  },
  {
    id: 28,
    question: "When minimizing the overall misclassification rate (error rate), the optimal cutoff corresponds to the ROC point where the slope equals:",
    options: [
      "(1 - Prevalence) / Prevalence",
      "Sensitivity x Specificity",
      "The Youden index maximum",
      "Positive predictive value"
    ],
    answer: 0,
    explanation: "Minimizing the total misclassification rate (without differential weighting for FP vs FN) leads to an optimal cutoff where the ROC curve slope = (1 - Prevalence) / Prevalence. This assumes equal costs for false positives and false negatives. Note that the Youden index corresponds to the special case where prevalence = 0.5 (which makes the slope = 1). At other prevalences, the optimal point shifts."
  },
  {
    id: 29,
    question: "A clinician wants to screen for a serious infectious disease where missing a case (false negative) is catastrophic. The appropriate strategy for cutoff selection should:",
    options: [
      "Maximize specificity to avoid unnecessary treatment",
      "Use the Youden index to balance sensitivity and specificity equally",
      "Choose a lower threshold to maximize sensitivity, accepting more false positives",
      "Select the cutoff with the highest positive predictive value"
    ],
    answer: 2,
    explanation: "When false negatives are catastrophic (e.g., missing a highly infectious or life-threatening disease), the clinical priority is to maximize sensitivity. A lower threshold is selected, accepting more false positives (lower specificity) to ensure virtually no true cases are missed. This is appropriate for initial screening tests, after which positive screens can undergo confirmatory testing with higher specificity."
  },
  {
    id: 30,
    question: "A test is used to confirm a diagnosis before initiating toxic chemotherapy. In this context, optimal cutoff selection should prioritize:",
    options: [
      "Maximum sensitivity to avoid missing any cancer",
      "Maximum specificity to avoid treating non-diseased patients with toxic therapy",
      "Equal sensitivity and specificity using the Youden index",
      "The cutoff that maximizes the area under the likelihood ratio curve"
    ],
    answer: 1,
    explanation: "When the clinical consequence of a false positive is severe (e.g., subjecting a healthy patient to toxic chemotherapy), specificity must be maximized. A confirmatory test should have very high specificity so that a positive result almost certainly indicates true disease. This means choosing a higher threshold, accepting more false negatives (which would be followed up with further testing), to minimize treating disease-free patients."
  },
  {
    id: 31,
    question: "The 'closest to (0,1) corner' method of cutoff selection identifies the point on the ROC curve that:",
    options: [
      "Maximizes sensitivity alone",
      "Minimizes the Euclidean distance from the point (0,1) — perfect test location",
      "Maximizes the area under the partial ROC curve",
      "Equates sensitivity and specificity"
    ],
    answer: 1,
    explanation: "The 'closest to upper left corner' method selects the threshold at the ROC curve point with minimum Euclidean distance from the ideal point (0,1), i.e., sqrt((1 - sensitivity)^2 + (1 - specificity)^2) is minimized. Like the Youden index, it assumes equal importance of sensitivity and specificity but uses a geometric rather than arithmetic optimization criterion. Both methods often identify similar but not always identical cutoffs."
  },
  {
    id: 32,
    question: "A sensitivity-weighted cutoff selection approach would be most appropriate in which clinical scenario?",
    options: [
      "Confirmatory testing before surgery with significant operative risk",
      "Screening for HIV in a high-prevalence population where untreated disease leads to community spread",
      "Diagnosing a condition for which treatment has many adverse effects",
      "Ruling in acute myocardial infarction before thrombolysis"
    ],
    answer: 1,
    explanation: "A sensitivity-weighted approach (lower threshold, more false positives accepted) is appropriate when missing true cases has high public health or individual consequences. HIV screening in high-prevalence populations prioritizes catching all infected individuals to prevent spread and initiate treatment, even if some uninfected individuals are initially screened positive and later confirmed negative by confirmatory testing."
  },
  {
    id: 33,
    question: "The Liu method for optimal cutoff selection maximizes the product (Sensitivity x Specificity). Compared to the Youden index, this method:",
    options: [
      "Always identifies the same optimal threshold",
      "Tends to favor cutoffs where both sensitivity and specificity are more balanced, penalizing extremes",
      "Always yields higher sensitivity than the Youden method",
      "Is only applicable to parametric ROC curves"
    ],
    answer: 1,
    explanation: "The Liu (2012) method maximizes (Sensitivity x Specificity), equivalent to maximizing the geometric mean of sensitivity and specificity. Unlike the Youden index (arithmetic sum), the geometric product penalizes extreme imbalances — a test with sensitivity = 0.99 and specificity = 0.01 would have a high Youden index but a low Liu product. The Liu method tends to favor more balanced operating points."
  },
  {
    id: 34,
    question: "For a disease with prevalence of 5%, the cost of a false negative is estimated to be 20 times that of a false positive. The optimal cutoff slope on the ROC curve should be set to:",
    options: [
      "(1/20) x (0.95/0.05) = 0.95",
      "(20/1) x (0.95/0.05) = 380",
      "(1/20) x (0.05/0.95) = 0.0026",
      "(20) x (0.05/0.95) = 1.05"
    ],
    answer: 0,
    explanation: "Optimal slope = (C_FP / C_FN) x ((1 - Prevalence) / Prevalence) = (1/20) x (0.95/0.05) = 0.05 x 19 = 0.95. With a cost ratio heavily favoring avoidance of false negatives (C_FN = 20 x C_FP), and low prevalence (95% non-diseased), the formula yields slope 0.95. The optimal ROC point is where the tangent to the curve has this slope, favoring sensitivity over specificity."
  },
  {
    id: 35,
    question: "When the ROC curve is smooth and continuous, the Youden index corresponds geometrically to the point where:",
    options: [
      "The tangent line to the ROC curve has a slope of 1",
      "The ROC curve intersects the line connecting (0,0) to (1,1)",
      "The vertical distance from the ROC curve to the 45-degree diagonal is maximized",
      "The ROC curve reaches its steepest negative slope"
    ],
    answer: 2,
    explanation: "The Youden index J = Sensitivity + Specificity - 1 = Sensitivity - (1 - Specificity). On the ROC plot, (1 - Specificity) is the x-axis and Sensitivity is the y-axis. Therefore J = y - x, which is the vertical distance of the ROC curve above the diagonal line y = x. The Youden optimal cutoff is the point where this vertical distance is maximized, corresponding to a tangent slope of 1 at that point."
  },
  {
    id: 36,
    question: "In a study of a continuous biomarker for sepsis, the ROC-derived optimal cutoff by Youden index gives sensitivity = 78% and specificity = 81%. A clinician decides to use a lower cutoff, resulting in sensitivity = 92% and specificity = 65%. This decision is justified when:",
    options: [
      "The disease is rare and the cost of false positives is high",
      "The clinical consequence of missing sepsis (false negative) is death, making higher sensitivity imperative",
      "Regulatory guidelines mandate the use of the Youden-optimal cutoff",
      "The hospital has unlimited resources to investigate false positives"
    ],
    answer: 1,
    explanation: "Clinical context overrides statistical optimization. Sepsis is a life-threatening emergency where missing the diagnosis (false negative) can lead to death or irreversible organ failure. The clinical imperative to maximize sensitivity justifies accepting lower specificity and more false positives (who will require additional workup but can be safely ruled out). The Youden index does not account for these differential consequences."
  },
  {
    id: 37,
    question: "The Net Benefit method (Decision Curve Analysis) for evaluating diagnostic thresholds is superior to the Youden index because it:",
    options: [
      "Always identifies a higher sensitivity threshold",
      "Incorporates the clinical threshold probability reflecting the relative harm of false positives versus false negatives",
      "Uses bootstrap resampling for more stable estimates",
      "Eliminates the need for a reference standard diagnosis"
    ],
    answer: 1,
    explanation: "Decision Curve Analysis (Vickers and Elkin) calculates Net Benefit = sensitivity x prevalence - (1 - specificity) x (1 - prevalence) x (pt / (1 - pt)), where pt is the threshold probability a clinician uses to decide to treat. This directly incorporates the clinical trade-off between false positives and false negatives through the threshold probability, making it more clinically meaningful than statistical measures like the Youden index that assume equal weighting."
  },
  {
    id: 38,
    question: "The Summary ROC (SROC) curve in meta-analysis of diagnostic studies is constructed by:",
    options: [
      "Averaging the sensitivity and specificity of each study and plotting a single point",
      "Fitting a regression line to the logit(sensitivity) vs logit(1-specificity) data from individual studies",
      "Using only studies with the same threshold cutoff value",
      "Pooling all individual patient data and constructing a single empirical ROC curve"
    ],
    answer: 1,
    explanation: "The Moses-Shapiro-Littenberg SROC method regresses D (= logit(sensitivity) + logit(specificity)) against S (= logit(sensitivity) - logit(specificity)) across studies. Each study is represented as a point in logit(sensitivity) vs logit(1-specificity) space, and a symmetric or asymmetric regression line is fitted to produce the SROC curve. This accounts for threshold variability across studies, a major source of heterogeneity."
  },
  {
    id: 39,
    question: "The Hierarchical Summary ROC (HSROC) model by Rutter and Gatsonis, compared to the Moses-Shapiro-Littenberg approach, is preferred because it:",
    options: [
      "Requires fewer studies to generate reliable estimates",
      "Uses a two-level model that appropriately accounts for within-study binomial variability and between-study heterogeneity simultaneously",
      "Does not require specification of a link function",
      "Is based on the assumption that all studies use the same threshold"
    ],
    answer: 1,
    explanation: "The HSROC model uses a hierarchical (two-level) structure: within-study, it models the binomial variability of sensitivity and specificity; between studies, it models heterogeneity in both accuracy and threshold parameters using random effects. This correctly propagates uncertainty from both levels, unlike the Moses-Shapiro-Littenberg method which ignores within-study sampling error in its regression. HSROC and the bivariate model (Reitsma) yield equivalent summary estimates in most settings."
  },
  {
    id: 40,
    question: "The bivariate random-effects model for meta-analysis of diagnostic accuracy (Reitsma et al.) models which pair of outcomes jointly?",
    options: [
      "AUC and diagnostic odds ratio across studies",
      "Logit(sensitivity) and logit(specificity) as a bivariate normal distribution accounting for their correlation",
      "Positive and negative likelihood ratios using a random-effects framework",
      "Sensitivity at fixed specificity and specificity at fixed sensitivity"
    ],
    answer: 1,
    explanation: "The bivariate model (Reitsma 2005) jointly models logit(sensitivity) and logit(specificity) from each study as a bivariate normal distribution, accounting for: (1) within-study variability (binomial error), (2) between-study heterogeneity in both measures, and (3) the negative correlation between sensitivity and specificity arising from threshold variability across studies. This produces a summary point estimate and a confidence/prediction region in ROC space."
  },
  {
    id: 41,
    question: "The partial AUC (pAUC) is used instead of full AUC when:",
    options: [
      "The ROC curve is non-monotonic",
      "Clinical interest is restricted to a specific range of sensitivity or specificity (e.g., sensitivity > 90%)",
      "The number of diseased subjects is too small for full AUC estimation",
      "Two ROC curves do not cross within the clinically relevant range"
    ],
    answer: 1,
    explanation: "Partial AUC (pAUC) quantifies the area under the ROC curve restricted to a clinically relevant portion — for example, the region where sensitivity > 90% (for screening applications) or where specificity > 80% (for confirmatory testing). When clinical performance in the full range of operating points is irrelevant, pAUC provides a more targeted comparison than global AUC. It can also be standardized by dividing by the maximum possible pAUC in that region."
  },
  {
    id: 42,
    question: "For an ordinal diagnostic test (e.g., radiologist confidence rating on a 1-5 scale), which statement about ROC analysis is correct?",
    options: [
      "ROC analysis cannot be applied to ordinal test results",
      "Each rating category boundary serves as a potential threshold, producing a discrete empirical ROC curve with a limited number of points",
      "The AUC of an ordinal test is always less than that of a continuous test measuring the same construct",
      "The Youden index cannot be calculated for ordinal test data"
    ],
    answer: 1,
    explanation: "ROC analysis is directly applicable to ordinal test results. For a 5-category rating scale, there are 4 possible threshold positions (between adjacent categories), generating 4 ROC points plus the origin and the upper right corner. The resulting empirical ROC curve has fewer points than a continuous test, making the curve more 'stepped.' AUC is computed from this discrete curve; it equals the proportion of concordant diseased-nondiseased pairs."
  },
  {
    id: 43,
    question: "The likelihood ratio at a specific operating point on the ROC curve can be estimated geometrically as:",
    options: [
      "The y-coordinate (sensitivity) divided by the x-coordinate (1 - specificity) at that point",
      "The slope of the tangent line to the ROC curve at that point",
      "The area under the curve up to that point",
      "The reciprocal of the distance from the point to the diagonal"
    ],
    answer: 1,
    explanation: "At any given threshold, the positive likelihood ratio LR+ = Sensitivity / (1 - Specificity). On the ROC curve, Sensitivity = y-coordinate and (1 - Specificity) = x-coordinate. The slope of the ROC curve (the derivative dy/dx) at a point equals the LR+ at that threshold. For discrete ROC curves, the slope of the line segment connecting adjacent points approximates the LR+ for the test result values in that range."
  },
  {
    id: 44,
    question: "A tangent line drawn from the origin to the ROC curve touches the curve at the point that:",
    options: [
      "Maximizes the Youden index",
      "Corresponds to the highest positive likelihood ratio achievable by the test",
      "Minimizes the total cost of misclassification",
      "Has sensitivity equal to specificity"
    ],
    answer: 1,
    explanation: "A line drawn from the origin (0,0) to the ROC curve that is tangent to the curve touches it at the point with the steepest slope, which corresponds to the maximum likelihood ratio (LR+ = sensitivity / (1 - specificity)). This is because the slope of the line from origin to an ROC point is exactly LR+, and the maximum LR+ point is where a line from the origin is tangent rather than secant to the curve."
  },
  {
    id: 45,
    question: "In the HSROC model, the 'accuracy parameter' (Lambda) and the 'threshold parameter' (Theta) describe what aspects of a study's contribution?",
    options: [
      "Lambda represents disease prevalence; Theta represents test cost",
      "Lambda represents the overall discriminatory ability of the test in that study; Theta represents the tendency toward higher or lower cutoff values",
      "Lambda represents sensitivity; Theta represents specificity",
      "Lambda represents heterogeneity; Theta represents publication bias"
    ],
    answer: 1,
    explanation: "In the HSROC model, Lambda (accuracy) quantifies the overall diagnostic accuracy of the test in each study — larger Lambda means higher accuracy. Theta (threshold) reflects the implicit threshold used — positive Theta means a more lenient threshold (higher sensitivity, lower specificity), negative Theta means a stricter threshold. Between-study variation in both parameters is modeled with random effects, and their distributions characterize heterogeneity across studies."
  },
  {
    id: 46,
    question: "When two SROC curves from different meta-analyses are compared, the preferred approach is:",
    options: [
      "Comparing the summary sensitivity and specificity points visually",
      "Formally testing whether the SROC curves differ using meta-regression with a covariate for the subgroup",
      "Choosing the meta-analysis with more studies as automatically superior",
      "Comparing only the Q* statistic (intersection of SROC with the diagonal)"
    ],
    answer: 1,
    explanation: "Formal comparison of two SROC curves requires meta-regression: studies from both comparator tests are analyzed jointly with an indicator covariate for which test/group is involved, and statistical testing of the covariate assesses whether the SROC curves differ significantly. Visual comparison of summary points or curves is insufficient for formal inference, and the Q* statistic alone does not capture the full shape of the SROC curve."
  },
  {
    id: 47,
    question: "The Q* statistic in SROC analysis represents:",
    options: [
      "The AUC of the summary ROC curve",
      "The point on the SROC curve where sensitivity equals specificity (intersection with the anti-diagonal)",
      "The maximum Youden index across all included studies",
      "The between-study variance in diagnostic accuracy"
    ],
    answer: 1,
    explanation: "The Q* statistic (also called Q-point or Q-star) is the point on the SROC curve where sensitivity = specificity, i.e., where the curve intersects the anti-diagonal (the line from upper left to lower right). At Q*, both sensitivity and specificity are equal, providing a single summary measure of diagnostic accuracy. It ranges from 0.5 (useless test) to 1.0 (perfect test) and can be compared across tests."
  },
  {
    id: 48,
    question: "The partial AUC standardization proposed by McClish (1989) normalizes pAUC by dividing it by the maximum possible pAUC in the restricted range. This standardization ensures:",
    options: [
      "The standardized pAUC equals the full AUC when the full range is used",
      "The standardized pAUC ranges from 0.5 to 1.0, allowing interpretation analogous to full AUC",
      "The pAUC is corrected for disease prevalence in the study population",
      "The standardized pAUC is always larger than the full AUC"
    ],
    answer: 1,
    explanation: "McClish standardization divides the pAUC by the maximum possible pAUC in the defined false positive rate or sensitivity range. This rescales the pAUC so that it ranges from 0.5 (chance performance in the restricted region) to 1.0 (perfect performance in that region), making it interpretable in the same way as full AUC. Without standardization, pAUC values are bounded by the width of the restricted range, making comparisons difficult."
  },
  {
    id: 49,
    question: "Threshold effect heterogeneity in a meta-analysis of diagnostic studies is best detected by:",
    options: [
      "Cochran's Q test for heterogeneity applied to sensitivity values",
      "A significant Spearman correlation between study-level logit(sensitivity) and logit(1-specificity)",
      "Forest plot visual inspection of sensitivity alone",
      "I-squared statistic applied to the diagnostic odds ratio"
    ],
    answer: 1,
    explanation: "Threshold effect is the primary source of heterogeneity in diagnostic meta-analyses, arising because different studies use different cutoff values. It is detected by computing the Spearman rank correlation between logit(sensitivity) and logit(1 - specificity) across studies. A significant positive correlation (higher sensitivity associated with higher false positive rate) indicates threshold variability — studies using more lenient cutoffs show both higher sensitivity and higher false positive rates."
  },
  {
    id: 50,
    question: "In ROC analysis using a binormal model, test scores in diseased and non-diseased populations are assumed to follow normal distributions. The parameters 'a' and 'b' of the binormal ROC curve represent:",
    options: [
      "a = AUC; b = 1 - AUC",
      "a = the intercept (normalized difference in means); b = the ratio of standard deviations of non-diseased to diseased distributions",
      "a = sensitivity at optimal cutoff; b = specificity at optimal cutoff",
      "a = positive likelihood ratio; b = negative likelihood ratio"
    ],
    answer: 1,
    explanation: "In the binormal model, a = (mu_D - mu_ND) / sigma_D, the standardized difference in means (analogous to effect size for diseased vs non-diseased), and b = sigma_ND / sigma_D, the ratio of standard deviations. When b = 1 (equal SDs), the binormal ROC curve is symmetric. AUC = Phi(a / sqrt(1 + b^2)), where Phi is the standard normal CDF. The binormal model allows smooth, continuous ROC curve fitting from limited data points."
  }
];

export default questions;

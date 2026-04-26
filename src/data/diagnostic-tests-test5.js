const questions = [
  {
    id: 1,
    question: "A laboratory lowers the cutoff value for a serum PSA test from 4.0 ng/mL to 2.5 ng/mL to detect prostate cancer earlier. What is the most likely consequence of this change?",
    options: [
      "Sensitivity decreases and specificity increases",
      "Sensitivity increases and specificity decreases",
      "Both sensitivity and specificity increase",
      "Both sensitivity and specificity decrease"
    ],
    answer: 1,
    explanation: "Lowering the cutoff value means more individuals will test positive. This captures more true disease cases (increases sensitivity/decreases false negatives) but also flags more healthy individuals as positive (decreases specificity/increases false positives). This is the fundamental sensitivity-specificity tradeoff: moving the cutoff in one direction invariably affects the other measure in the opposite direction."
  },
  {
    id: 2,
    question: "For a glucose tolerance test, if the cutoff for diabetes diagnosis is raised from 140 mg/dL to 200 mg/dL (2-hour post-load), which of the following changes will occur?",
    options: [
      "False negative rate decreases",
      "False positive rate decreases",
      "Negative predictive value decreases",
      "Positive predictive value decreases"
    ],
    answer: 1,
    explanation: "Raising the cutoff means fewer people test positive. Those who do test positive are more likely to truly have the disease (fewer false positives, so false positive rate decreases). However, more true cases will be missed (false negatives increase, sensitivity decreases). Raising the cutoff increases specificity (and thus decreases the false positive rate) while decreasing sensitivity."
  },
  {
    id: 3,
    question: "A receiver operating characteristic (ROC) curve is plotted for a new cardiac biomarker. The area under the ROC curve (AUC) is 0.92. What does this indicate?",
    options: [
      "The test has 92% sensitivity at optimal cutoff",
      "The test correctly discriminates between disease and non-disease 92% of the time",
      "The test has a positive predictive value of 92%",
      "The false positive rate is 8% at all cutoff values"
    ],
    answer: 1,
    explanation: "The AUC of an ROC curve represents the probability that the test will correctly rank a randomly chosen diseased individual higher than a randomly chosen non-diseased individual. An AUC of 0.92 means the test correctly discriminates between disease and non-disease 92% of the time. An AUC of 0.5 represents no discriminatory ability (equivalent to chance), while 1.0 represents perfect discrimination."
  },
  {
    id: 4,
    question: "Spectrum bias in diagnostic test evaluation refers to which of the following?",
    options: [
      "Bias introduced when the test is evaluated only in patients with severe disease versus clearly healthy controls",
      "Bias from using multiple cutoff values on the same ROC curve",
      "Overestimation of test accuracy due to verification of results only in test-positive patients",
      "The influence of disease prevalence on predictive values"
    ],
    answer: 0,
    explanation: "Spectrum bias occurs when a diagnostic test is evaluated in a study population that does not represent the full clinical spectrum of the disease (e.g., severe cases vs. healthy controls, rather than the spectrum of patients in whom the test would actually be used). This typically overestimates both sensitivity and specificity compared to performance in routine clinical practice where the disease spectrum is much wider and includes mild/early cases."
  },
  {
    id: 5,
    question: "In a study evaluating a new D-dimer assay for pulmonary embolism, only patients who underwent CT pulmonary angiography were included in the analysis. This introduces which type of bias?",
    options: [
      "Spectrum bias",
      "Verification bias (workup bias)",
      "Incorporation bias",
      "Lead-time bias"
    ],
    answer: 1,
    explanation: "Verification bias (also called workup bias) occurs when only a selected subset of patients — typically those with positive test results or those judged clinically to be at higher risk — undergo the gold standard verification procedure. If only those who had CT-PA are included, patients with negative D-dimer who did not get CT-PA are excluded, which distorts sensitivity and specificity estimates. This is one of the most common biases in diagnostic test studies."
  },
  {
    id: 6,
    question: "A physician wants to use a test to rule out a serious infection in a critically ill patient. Which test characteristic should be prioritized?",
    options: [
      "High specificity to avoid unnecessary treatment",
      "High sensitivity to avoid missing the diagnosis",
      "High positive predictive value to guide treatment",
      "High negative likelihood ratio to confirm absence of disease"
    ],
    answer: 1,
    explanation: "When the goal is to RULE OUT a disease (especially serious conditions where missing the diagnosis is dangerous), a high sensitivity test is preferred. A highly sensitive test has very few false negatives, so a negative result reliably rules out the disease. The mnemonic 'SnNout' applies: a test with high Sensitivity and a Negative result rules OUT the disease. High specificity (SpPin) is used to rule in disease."
  },
  {
    id: 7,
    question: "Moving the cutoff for a blood test to maximize specificity will have which effect on the likelihood ratio for a negative test (LR-)?",
    options: [
      "LR- approaches 0, making the test excellent at ruling out disease",
      "LR- approaches 1, making the test useless for ruling out disease",
      "LR- increases above 1, indicating increased post-test probability",
      "LR- remains unchanged regardless of cutoff"
    ],
    answer: 1,
    explanation: "LR- = (1 - Sensitivity) / Specificity. When specificity is maximized by moving the cutoff, sensitivity necessarily decreases. With low sensitivity, (1 - Sensitivity) becomes large. Combined with high specificity in the denominator, the net effect depends on the magnitude of each, but maximizing specificity at the expense of sensitivity typically worsens (increases) LR-, making it approach 1 and reducing the test's ability to rule out disease. A useful LR- should be close to 0 (below 0.1)."
  },
  {
    id: 8,
    question: "A new troponin assay is tested in a population of patients presenting to the emergency department with chest pain. The sensitivity is 95% and specificity is 70%. When the same assay is tested in low-risk outpatients with atypical chest pain, which change is most likely?",
    options: [
      "Sensitivity increases because the disease is rarer in outpatients",
      "Both sensitivity and specificity remain the same as they are intrinsic test properties",
      "Sensitivity may decrease because cases in low-risk outpatients tend to have lower troponin levels",
      "Specificity decreases because more true negatives are present"
    ],
    answer: 2,
    explanation: "Sensitivity and specificity are not purely intrinsic test properties — they can vary with the disease spectrum. In a low-risk outpatient population, cases of MI tend to have lower troponin elevations (milder disease, earlier presentation). These borderline-positive cases are more likely to fall below the test cutoff, increasing false negatives and thereby decreasing sensitivity. This is the clinical manifestation of spectrum bias: test performance differs across disease severity spectra."
  },
  {
    id: 9,
    question: "Likelihood ratios are preferred over sensitivity and specificity in clinical practice primarily because:",
    options: [
      "They are not affected by disease prevalence",
      "They directly give the probability of disease",
      "They combine sensitivity and specificity into a single value that can be applied to pre-test probability via Bayes' theorem",
      "They remain constant regardless of the disease spectrum"
    ],
    answer: 2,
    explanation: "Likelihood ratios (LR+ and LR-) combine sensitivity and specificity into single values that can be used with Bayes' theorem to update pre-test probability to post-test probability. LR+ = Sensitivity / (1 - Specificity); LR- = (1 - Sensitivity) / Specificity. While they are not entirely independent of disease spectrum, their primary advantage is the ability to be applied to individual patients with known pre-test probabilities using Fagan's nomogram or Bayesian calculation."
  },
  {
    id: 10,
    question: "In a diagnostic accuracy study, the reference standard is only applied to patients who screen positive on the index test. This will most likely cause which distortion in test performance estimates?",
    options: [
      "Overestimation of sensitivity and underestimation of specificity",
      "Underestimation of sensitivity and overestimation of specificity",
      "Overestimation of both sensitivity and specificity",
      "Overestimation of sensitivity with no effect on specificity"
    ],
    answer: 3,
    explanation: "When the reference standard is only applied to screen-positive patients (partial verification bias), true positives and false positives are verified, but true negatives and false negatives among screen-negative patients are not verified. Sensitivity = TP / (TP + FN) — since FN patients are not verified, they may be assumed negative, reducing the apparent FN count and inflating sensitivity. Specificity calculation requires TN and FP from verified patients, which may also be affected, but sensitivity overestimation is the primary and most consistent effect."
  },
  {
    id: 11,
    question: "Which of the following best describes the effect of disease spectrum on test performance when comparing results from tertiary care centers versus primary care settings?",
    options: [
      "Tests tend to perform better in primary care due to higher disease prevalence",
      "Tests tend to show higher sensitivity and specificity in tertiary centers due to spectrum bias",
      "Specificity is always higher in primary care because more true negatives are present",
      "Test performance is identical because sensitivity and specificity are intrinsic properties"
    ],
    answer: 1,
    explanation: "Tertiary care centers tend to have patients with more severe, well-defined disease (clear positives) and the comparison group often consists of clearly healthy patients or those with competing diagnoses (clear negatives). This creates spectrum bias, making it appear that the test discriminates very well. In primary care, the spectrum includes mild and early cases that are harder to classify, and the non-disease group may include patients with similar presentations, resulting in lower observed sensitivity and specificity."
  },
  {
    id: 12,
    question: "A study compares a new rapid antigen test against PCR for COVID-19 diagnosis. The rapid test shows sensitivity of 90% in symptomatic high-viral-load patients. Which statement about this test's performance in asymptomatic screening is most accurate?",
    options: [
      "Sensitivity will be at least 90% because PCR is the gold standard",
      "Sensitivity will likely be lower because asymptomatic cases tend to have lower viral loads",
      "Sensitivity will be higher because there are fewer false positives in asymptomatic groups",
      "Sensitivity is a fixed property and will not change with the population tested"
    ],
    answer: 1,
    explanation: "This is a classic example of spectrum effect on sensitivity. Symptomatic patients typically have higher viral loads, making antigen detection easier and sensitivity higher. Asymptomatic or early-stage cases tend to have lower viral loads, placing them closer to or below the analytical detection threshold of the rapid antigen test. Consequently, more true cases will be missed (higher false negative rate, lower sensitivity) in asymptomatic screening populations compared to symptomatic populations."
  },
  {
    id: 13,
    question: "According to the Wilson-Jungner criteria, which of the following is a necessary condition for a disease to be suitable for screening?",
    options: [
      "The disease must have high case fatality if untreated",
      "A suitable and acceptable test must exist",
      "The disease must affect at least 1% of the population",
      "Treatment must be available for all stages of the disease"
    ],
    answer: 1,
    explanation: "The Wilson-Jungner criteria (1968) for screening programs include: the condition should be an important health problem, there should be an accepted treatment, facilities for diagnosis and treatment should be available, there should be a recognizable latent or early symptomatic stage, a suitable test or examination should exist, the test should be acceptable to the population, the natural history should be adequately understood, there should be an agreed policy on treatment, the cost should be economically balanced, and case-finding should be a continuing process. A suitable and acceptable test is an explicit criterion."
  },
  {
    id: 14,
    question: "Lead-time bias in cancer screening refers to which phenomenon?",
    options: [
      "Earlier detection appears to prolong survival even if the time of death is unchanged",
      "Screening preferentially detects slow-growing tumors, giving a falsely good prognosis",
      "Patients who participate in screening are healthier than non-participants",
      "The test detects disease before the natural history is fully understood"
    ],
    answer: 0,
    explanation: "Lead-time bias occurs because screening advances the time of diagnosis without necessarily advancing the time of death. If a cancer would have been diagnosed in 2026 and death occurs in 2028 (2 years survival), but screening detects it in 2024 (4 years survival from diagnosis to 2028 death), survival appears doubled even though the outcome is identical. This is the 'lead time' — the extra time between screen detection and clinical detection. It falsely inflates apparent survival benefit of screening."
  },
  {
    id: 15,
    question: "Length-time bias in cancer screening results in which distortion?",
    options: [
      "Overestimation of screening benefit because patients detected by screening survive longer",
      "Underestimation of screening benefit because only aggressive cancers are detected",
      "Overestimation of incidence of aggressive cancers in screened populations",
      "Underestimation of the lead time because fast-growing tumors have a short detectable preclinical phase"
    ],
    answer: 0,
    explanation: "Length-time bias occurs because slowly-progressive tumors (with long preclinical detectable phases) are more likely to be detected by periodic screening than fast-growing, aggressive tumors (which have short preclinical phases and may become symptomatic between screening rounds). Screened populations therefore have a disproportionate representation of biologically favorable, slow-growing tumors. This makes screened patients appear to have better prognosis and longer survival, not because screening works, but because the detected cases are inherently less aggressive."
  },
  {
    id: 16,
    question: "Overdiagnosis in cancer screening is best defined as:",
    options: [
      "Diagnosing cancer at a stage that is too early to be treated effectively",
      "Detection of cancer that would never have caused symptoms or death during the patient's lifetime",
      "False positive test results leading to unnecessary biopsies",
      "Misclassification of benign lesions as malignant by the pathologist"
    ],
    answer: 1,
    explanation: "Overdiagnosis refers to the detection and treatment of cancers that would never have caused symptoms or death if left undetected — either because the cancer grows so slowly it would not become symptomatic in the patient's lifetime, or because the patient dies of a competing cause before the cancer becomes clinically relevant. Overdiagnosis is distinct from false positives (abnormal test with no disease), misclassification, or early-stage detection that leads to successful treatment. It is an inherent consequence of screening for slowly-progressive conditions."
  },
  {
    id: 17,
    question: "A cervical cancer screening program using Pap smears detects carcinoma in situ (CIS) in many women. Five years later, the incidence of invasive cervical cancer in the screened population falls dramatically. This reduction in invasive cancer is called:",
    options: [
      "Lead-time bias",
      "Length-time bias",
      "True primary prevention effect",
      "Genuine reduction in disease burden due to early detection and treatment"
    ],
    answer: 3,
    explanation: "When screening detects and treats precancerous lesions (like CIS), preventing progression to invasive cancer, the resulting reduction in invasive cancer incidence reflects genuine benefit of early detection and treatment. This is distinct from lead-time bias (which only shifts diagnosis time without changing outcome) or length-time bias (preferential detection of slow-growing tumors). The fall in invasive cervical cancer incidence following widespread Pap smear screening is one of the strongest evidence bases for a screening program's effectiveness."
  },
  {
    id: 18,
    question: "Mass screening differs from targeted (selective) screening in which fundamental way?",
    options: [
      "Mass screening uses more sensitive tests than targeted screening",
      "Targeted screening is applied to high-risk subgroups, improving the positive predictive value",
      "Mass screening always produces better health outcomes than targeted screening",
      "Targeted screening is only appropriate for infectious diseases"
    ],
    answer: 1,
    explanation: "Mass (universal) screening applies the test to the entire population regardless of individual risk, while targeted (selective) screening focuses on high-risk subgroups (e.g., BRCA gene testing in those with family history). Targeting screening to high-risk groups increases disease prevalence in the screened population, which directly increases positive predictive value (PPV) — fewer false positives per true positive. This improves efficiency, reduces harms of over-investigation, and often improves the benefit-to-harm ratio of screening."
  },
  {
    id: 19,
    question: "Which of the following Wilson-Jungner criteria is most directly related to the test's performance characteristics?",
    options: [
      "The natural history of the disease should be adequately understood",
      "The test should be acceptable to the population",
      "The test should be simple, safe, precise, and validated",
      "The cost of case-finding should be economically balanced"
    ],
    answer: 2,
    explanation: "The Wilson-Jungner criterion directly concerning test performance is that the screening test should be simple, safe, precise, and validated. 'Precise' relates to reliability/reproducibility; 'validated' means its sensitivity, specificity, and performance in the target population are established. While acceptability is also a criterion, it pertains to uptake rather than technical performance. The other options relate to disease natural history and economic considerations, not test performance per se."
  },
  {
    id: 20,
    question: "A randomized controlled trial of breast cancer screening shows a 20% reduction in breast cancer mortality in the screened arm. A critic argues this may be due to healthy screenee bias (volunteer bias). This bias arises because:",
    options: [
      "Screened patients receive more intensive treatment for any detected cancer",
      "Women who attend screening tend to be healthier and have lower overall mortality than non-attenders",
      "Screening detects only slow-growing cancers, improving apparent mortality",
      "Breast cancer mortality is an insensitive outcome measure for screening efficacy"
    ],
    answer: 1,
    explanation: "Volunteer (healthy screenee) bias occurs in observational studies of screening: women who choose to attend screening tend to be more health-conscious, have fewer comorbidities, better access to healthcare, and healthier behaviors than non-attenders. This means the screened group would have had better outcomes even without screening. In randomized controlled trials, randomization should control for this bias because participants are allocated regardless of health behaviors. However, in cohort or case-control studies of screening, this bias can seriously confound results."
  },
  {
    id: 21,
    question: "A screening test for colorectal cancer using fecal occult blood testing (FOBT) has a sensitivity of 60% per round. If screening is performed annually for 10 years, the cumulative sensitivity will be:",
    options: [
      "60%, as sensitivity is an intrinsic property of the test",
      "Higher than 60% because repeated screening captures incident cases missed previously",
      "Lower than 60% because of regression to the mean over time",
      "Equal to 100% if screening is sufficiently frequent"
    ],
    answer: 1,
    explanation: "Single-test sensitivity (60%) applies to one testing occasion. With repeated annual screening, the program's cumulative sensitivity is higher because a case missed in one round (false negative) has the opportunity to be detected in subsequent rounds, provided the cancer has not become symptomatic. This is the concept of 'program sensitivity' versus 'test sensitivity.' The cumulative sensitivity of 10 annual FOBT rounds is much higher than 60%, which is why interval cancers (symptomatic between rounds) are used to assess program performance."
  },
  {
    id: 22,
    question: "Which study design provides the highest level of evidence for evaluating the effectiveness of a screening program in reducing disease-specific mortality?",
    options: [
      "Large cross-sectional prevalence survey",
      "Prospective cohort study comparing screened vs. unscreened populations",
      "Randomized controlled trial with disease-specific mortality as the primary endpoint",
      "Case-control study nested within a screened population"
    ],
    answer: 2,
    explanation: "A randomized controlled trial (RCT) with disease-specific mortality as the primary outcome provides the strongest evidence for screening effectiveness. Randomization controls for volunteer bias, confounding by health behaviors, and other systematic differences between screened and unscreened groups. All-cause mortality is an even less biased outcome, but disease-specific mortality is the most commonly used. Observational studies (cohort, case-control) are susceptible to healthy screenee bias and length-time bias, which can overestimate screening benefit."
  },
  {
    id: 23,
    question: "For a screening program to be ethically justifiable, which of the following must be true about the treatment offered to screen-detected cases?",
    options: [
      "Treatment must be curative for all screen-detected cases",
      "Treatment must be more effective when given at the screen-detected stage than at the clinically detected stage",
      "Treatment must have no adverse effects",
      "Treatment must be available regardless of cost to the health system"
    ],
    answer: 1,
    explanation: "A fundamental ethical and practical requirement of screening is that earlier detection must lead to better outcomes — specifically, treatment given at the screen-detected stage must be more effective than treatment given at the stage of clinical presentation. Without this, screening merely extends the period of disease awareness (lead time) without benefit, while exposing patients to harms of diagnosis and treatment. This is the justification for treating carcinoma in situ, but not necessarily for all indolent cancers where treatment at any stage yields the same outcome."
  },
  {
    id: 24,
    question: "A community-based screening program for hypertension finds that 30% of screened individuals have a systolic BP >140 mmHg on a single measurement. A repeat measurement two weeks later shows only 15% still qualify. The initial high rate was most likely due to:",
    options: [
      "Lead-time bias in detection",
      "Regression to the mean and white-coat effect causing overdiagnosis on single measurement",
      "Length-time bias preferentially detecting sustained hypertension",
      "High sensitivity of BP measurement overestimating prevalence"
    ],
    answer: 1,
    explanation: "Regression to the mean is a major source of apparent overdiagnosis in screening programs that use single measurements of continuous variables. Blood pressure, blood glucose, and similar measures vary biologically and due to situational factors (white-coat effect, anxiety at screening). Individuals with values above the cutoff on one occasion are selected partly because of measurement error or transient elevation; on repeat measurement, many revert toward their true mean value. This is why guidelines recommend confirmation of hypertension with multiple measurements before diagnosis."
  },
  {
    id: 25,
    question: "A test for a rare disease has sensitivity 95% and specificity 95%. The disease prevalence is 1 in 1,000. In a population of 100,000, what is the positive predictive value (PPV)?",
    options: [
      "95%",
      "50%",
      "About 1.9%",
      "About 16.1%"
    ],
    answer: 2,
    explanation: "In 100,000 people at 1/1,000 prevalence: True cases = 100. True positives (TP) = 95% x 100 = 95. Non-diseased = 99,900. False positives (FP) = 5% x 99,900 = 4,995. PPV = TP / (TP + FP) = 95 / (95 + 4,995) = 95 / 5,090 = 1.87%, approximately 1.9%. This illustrates the low-prevalence paradox: even with 95% sensitivity and 95% specificity, when disease is rare (0.1% prevalence), the vast majority of positive results are false positives, giving a PPV of less than 2%. This is why screening in very low-prevalence populations generates enormous numbers of false positives."
  },
  {
    id: 26,
    question: "The low-prevalence paradox in diagnostic testing states that:",
    options: [
      "Low-prevalence diseases require less sensitive tests to detect",
      "In low-prevalence settings, even highly specific tests yield many false positives relative to true positives, reducing PPV",
      "Negative predictive value falls dramatically as disease prevalence decreases",
      "Likelihood ratios are more affected by prevalence than predictive values"
    ],
    answer: 1,
    explanation: "The low-prevalence paradox: when disease is rare, even a very specific test (e.g., 99% specificity) will generate many false positives because the large number of true negatives means 1% of them — a large absolute number — will test positive. Meanwhile, there are very few true positives to anchor the PPV. Result: most positives are false positives (low PPV). Conversely, NPV remains very high in low-prevalence settings. PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + (1 - Specificity)(1 - Prevalence)] — prevalence is in both numerator and denominator."
  },
  {
    id: 27,
    question: "A physician orders a panel of 20 independent laboratory tests on a healthy patient for a routine 'wellness screen.' If each test has a specificity of 95% (alpha = 0.05), what is the probability that at least one test will be falsely abnormal?",
    options: [
      "5%",
      "About 36%",
      "About 64%",
      "100%"
    ],
    answer: 2,
    explanation: "The probability that all 20 tests are truly normal = (0.95)^20 = 0.358. Therefore, the probability that at least one test is falsely abnormal = 1 - 0.358 = 0.642, approximately 64%. This is the multiple testing problem: as more independent tests are ordered, the probability of at least one false positive increases dramatically. This is why large diagnostic panels on healthy individuals generate many false-positive results and lead to unnecessary follow-up investigations. The Bonferroni correction addresses this in research settings."
  },
  {
    id: 28,
    question: "Bonferroni correction in the context of multiple diagnostic tests involves:",
    options: [
      "Dividing the acceptable alpha level by the number of tests performed to maintain the family-wise error rate",
      "Multiplying the p-value of each test by the number of tests performed",
      "Adjusting disease prevalence estimates before calculating predictive values",
      "Combining test results using a logistic regression model"
    ],
    answer: 0,
    explanation: "The Bonferroni correction controls the family-wise error rate (FWER) when performing multiple tests. If the desired overall type I error rate is alpha (e.g., 0.05) and n independent tests are performed, the corrected significance threshold for each individual test is set at alpha/n. For 20 tests with alpha = 0.05, each individual test would need to reach p < 0.0025 to be considered significant. In clinical diagnostics, this concept underlies the recommendation against ordering large panels of tests without specific clinical indications."
  },
  {
    id: 29,
    question: "Two tests (Test A and Test B) are used in series (sequential testing) for diagnosing a disease. In series testing, a patient is considered positive only if BOTH tests are positive. Compared to using Test A alone, this approach:",
    options: [
      "Increases sensitivity and decreases specificity",
      "Decreases sensitivity and increases specificity",
      "Increases both sensitivity and specificity",
      "Decreases both sensitivity and specificity"
    ],
    answer: 1,
    explanation: "In series (sequential) testing, a positive result requires both tests to be positive. This reduces the chance of a false positive (increases specificity — a patient must be positive on both tests for the combined result to be positive). However, it also increases the chance that a true case is missed (decreases sensitivity — a true case must score positive on both tests). The combined sensitivity = Sensitivity A x Sensitivity B (lower than either alone); combined specificity = 1 - (1 - Specificity A)(1 - Specificity B) (higher than either alone)."
  },
  {
    id: 30,
    question: "Two tests (Test A and Test B) are used in parallel (simultaneous testing). A patient is considered positive if EITHER test is positive. Compared to Test A alone, parallel testing:",
    options: [
      "Increases sensitivity and decreases specificity",
      "Decreases sensitivity and increases specificity",
      "Increases both sensitivity and specificity",
      "Has no effect on sensitivity or specificity"
    ],
    answer: 0,
    explanation: "In parallel testing, a positive result on either test is considered a positive overall. This captures more true cases (higher sensitivity — a patient only needs to be positive on one test), but also increases false positives (lower specificity — a patient who is negative on both tests is needed to get an overall negative). Parallel testing is preferred in emergencies or when ruling out disease is critical. Series testing is used when confirming diagnosis or avoiding unnecessary treatment."
  },
  {
    id: 31,
    question: "A new HIV screening test has sensitivity 99% and specificity 99%. In a high-risk population with 10% HIV prevalence, the PPV is approximately:",
    options: [
      "52%",
      "68%",
      "91.7%",
      "99%"
    ],
    answer: 2,
    explanation: "In a population of 1,000 with 10% prevalence: Disease positive = 100. TP = 99% x 100 = 99. Non-diseased = 900. FP = 1% x 900 = 9. PPV = TP / (TP + FP) = 99 / (99 + 9) = 99 / 108 = 91.7%. This demonstrates that the same test (99% sensitivity, 99% specificity) which yields poor PPV in low-prevalence settings (e.g., 0.1% prevalence gives PPV ~9%) performs excellently in high-prevalence settings (10% prevalence gives PPV ~92%). Targeting screening to high-risk groups dramatically improves PPV and test efficiency."
  },
  {
    id: 32,
    question: "Workup bias (verification bias) most commonly leads to which distortion in diagnostic accuracy estimates?",
    options: [
      "Underestimation of both sensitivity and specificity",
      "Overestimation of sensitivity and underestimation of specificity",
      "Overestimation of both sensitivity and specificity",
      "Underestimation of sensitivity and overestimation of specificity"
    ],
    answer: 1,
    explanation: "Workup bias occurs when only test-positive individuals (or a selected subset) undergo the gold standard verification. True positives and false positives are identified, but false negatives are largely excluded (test-negative patients who truly have disease are not verified). This artificially reduces the apparent number of false negatives, inflating sensitivity. Specificity may be underestimated because false positives are verified and included. The net typical effect is overestimation of sensitivity and underestimation of specificity."
  },
  {
    id: 33,
    question: "Which statistical measure is LEAST affected by disease prevalence?",
    options: [
      "Positive predictive value (PPV)",
      "Negative predictive value (NPV)",
      "Sensitivity",
      "Odds ratio of disease given test positivity"
    ],
    answer: 2,
    explanation: "Sensitivity (and specificity) are properties of the test measured within diseased and non-diseased groups separately and are theoretically independent of prevalence. PPV and NPV are strongly affected by prevalence (as shown by Bayes' theorem). The odds ratio of disease given test positivity also depends on prevalence. Likelihood ratios are also theoretically independent of prevalence. However, in practice, sensitivity and specificity can vary with disease spectrum even though they are not directly calculated from prevalence, making them relatively (but not absolutely) prevalence-independent."
  },
  {
    id: 34,
    question: "In a community with very low prevalence of tuberculosis (0.1%), a tuberculin skin test with 90% sensitivity and 95% specificity is applied. What happens to the NPV?",
    options: [
      "NPV decreases because few true negatives are present",
      "NPV approaches 100% because disease is so rare that negative results are almost certainly true negatives",
      "NPV is approximately equal to specificity",
      "NPV is unaffected by prevalence because it depends only on sensitivity"
    ],
    answer: 1,
    explanation: "At very low disease prevalence, NPV approaches 100%. When disease is rare, the vast majority of individuals are truly disease-free; a negative test result in this population is almost certainly a true negative. Mathematically, NPV = (Specificity x (1 - Prevalence)) / [(Specificity x (1 - Prevalence)) + ((1 - Sensitivity) x Prevalence)]. As prevalence approaches 0, the numerator and denominator become nearly equal, making NPV approach 1.0 (100%). This is the flip side of the low-prevalence paradox that devastates PPV."
  },
  {
    id: 35,
    question: "A researcher conducts a study evaluating 100 biomarkers simultaneously for association with a novel disease. Using alpha = 0.05, 5 markers show statistically significant associations. What is the most appropriate interpretation?",
    options: [
      "These 5 markers are likely true disease biomarkers requiring clinical validation",
      "Approximately 5 false positives are expected by chance alone; findings require correction for multiple testing",
      "The study confirms that 5% of all biomarkers are related to this disease",
      "The findings should be accepted because p < 0.05 is the established threshold"
    ],
    answer: 1,
    explanation: "With 100 independent tests at alpha = 0.05, approximately 5 (0.05 x 100) false positive associations are expected by chance alone even if no true associations exist. Therefore, finding exactly 5 significant results is entirely consistent with random chance. The Bonferroni-corrected threshold would be 0.05/100 = 0.0005. Findings from multiple simultaneous biomarker analyses require stringent correction for multiple comparisons and, ideally, independent replication in a separate dataset before they can be considered clinically meaningful."
  },
  {
    id: 36,
    question: "Pre-test probability in Bayesian diagnostic reasoning is best understood as:",
    options: [
      "The sensitivity of the test being applied",
      "The probability of disease based on prevalence and clinical features before the test result is known",
      "The positive predictive value of the test at a given cutoff",
      "The specificity of the test in the population being tested"
    ],
    answer: 1,
    explanation: "Pre-test probability is the clinician's best estimate of the probability that the patient has the disease before the test result is known. It is informed by disease prevalence in the relevant population and by the patient's clinical features, history, risk factors, and examination findings. It is the starting point for Bayesian reasoning: post-test probability = f(pre-test probability, likelihood ratio). In clinical practice, this is operationalized through clinical decision rules, clinical scores, or gestalt clinical judgment."
  },
  {
    id: 37,
    question: "In HIV testing, a reactive ELISA result is always confirmed by Western blot before informing the patient. This two-test strategy primarily exploits which principle?",
    options: [
      "Parallel testing to increase sensitivity",
      "Series testing to increase specificity and positive predictive value",
      "Bayes' theorem applied to increase negative predictive value",
      "Multiple testing correction to reduce false negatives"
    ],
    answer: 1,
    explanation: "The ELISA + Western blot confirmatory strategy is a classic example of series testing. ELISA is highly sensitive (used to rule out HIV) but has modest specificity, generating false positives. Western blot is highly specific but less sensitive. By requiring both to be positive, the combined specificity is much higher than either alone, dramatically increasing the PPV in a positive result. This is particularly important given the serious consequences (psychological, social, medical) of a false positive HIV diagnosis."
  },
  {
    id: 38,
    question: "An imperfect gold standard in a diagnostic accuracy study will have what effect on estimates of the new test's sensitivity and specificity?",
    options: [
      "Both sensitivity and specificity will be overestimated",
      "Both sensitivity and specificity may be underestimated, and the true accuracy of the new test may be underappreciated",
      "Sensitivity is overestimated but specificity is unaffected",
      "Neither sensitivity nor specificity is affected because gold standards are by definition perfect"
    ],
    answer: 1,
    explanation: "When the gold standard is imperfect (misclassifies some patients), true positives may be labeled negative by the gold standard (reducing apparent true positives and sensitivity) and true negatives may be labeled positive (reducing apparent true negatives and specificity). The new test's performance is measured against an imperfect comparator, so its true accuracy may be underestimated. This is particularly problematic when the new test is actually superior to the gold standard — a phenomenon sometimes called 'negative bias' against better tests."
  },
  {
    id: 39,
    question: "Latent class analysis (LCA) in diagnostic test evaluation is used to:",
    options: [
      "Determine the optimal cutoff point on an ROC curve",
      "Estimate true test sensitivity and specificity when no perfect gold standard exists",
      "Adjust sensitivity and specificity for disease prevalence",
      "Identify subgroups within a population that respond differently to treatment"
    ],
    answer: 1,
    explanation: "Latent class analysis is a statistical technique that estimates the sensitivity and specificity of multiple diagnostic tests simultaneously without requiring a perfect gold standard. It models the 'true disease status' as an unobserved (latent) variable and uses the pattern of agreements and disagreements among multiple imperfect tests to estimate each test's accuracy. LCA requires at least three tests and makes assumptions about conditional independence (test results are independent given true disease status), which must be verified."
  },
  {
    id: 40,
    question: "Incorporation bias in diagnostic test evaluation occurs when:",
    options: [
      "The index test result influences the likelihood of undergoing gold standard verification",
      "The index test or its components are included as part of the reference standard",
      "The study population includes patients from multiple disease severity spectra",
      "The reference standard is applied by observers unblinded to the index test result"
    ],
    answer: 1,
    explanation: "Incorporation bias occurs when the test being evaluated is incorporated into or is a component of the reference standard against which it is being compared. For example, if an ECG finding (the index test) is used as part of the composite diagnostic criteria for myocardial infarction (the reference standard), then the ECG test will appear to perform better than it truly does. This creates a circular dependency that inflates apparent accuracy. It is particularly common in studies evaluating component tests of composite diagnostic criteria."
  },
  {
    id: 41,
    question: "A composite reference standard is created by combining results of multiple imperfect tests to define 'true disease.' Which of the following is a key limitation of this approach?",
    options: [
      "It can only be used for infectious diseases with culture as one component",
      "Tests that agree with the majority of other tests will appear more accurate, potentially overestimating their sensitivity and specificity",
      "It eliminates incorporation bias because no single test is used as the gold standard",
      "It cannot be used when latent class analysis is available"
    ],
    answer: 1,
    explanation: "A composite reference standard uses the combination of multiple imperfect tests to define disease status, but this creates a 'majority voting' problem: tests that tend to agree with the composite (including themselves if incorporated) will appear more accurate. A test that is genuinely superior to all others may disagree more frequently with the composite, appearing to have lower accuracy. Additionally, if the index test is part of the composite (incorporation bias), its accuracy will be artificially inflated."
  },
  {
    id: 42,
    question: "Differential verification bias in diagnostic test evaluation refers to:",
    options: [
      "Using different gold standards to verify positive and negative index test results",
      "The effect of different disease prevalences in verification subgroups",
      "Applying the gold standard at different time intervals after the index test",
      "Variation in test sensitivity across different patient subgroups"
    ],
    answer: 0,
    explanation: "Differential verification bias occurs when test-positive and test-negative patients are verified using different reference standards. For example, positive stress test results may be verified by coronary angiography, while negative stress test results are followed up clinically. Since the two verification methods may have different accuracy, the sensitivity and specificity estimates become distorted. This is distinct from partial verification bias (where only some patients are verified), though both are forms of verification bias that commonly co-occur."
  },
  {
    id: 43,
    question: "In a study evaluating a new rapid test for malaria, all test-positive patients undergo microscopy (gold standard), but only a random 20% of test-negative patients are verified by microscopy. This study design will most likely:",
    options: [
      "Overestimate sensitivity and underestimate specificity",
      "Underestimate sensitivity and overestimate specificity",
      "Produce unbiased estimates if the 20% sample is truly random",
      "Overestimate both sensitivity and specificity"
    ],
    answer: 2,
    explanation: "If the 20% of test-negative patients chosen for verification by microscopy are a truly random sample of all test-negative patients, then the missing 80% can be imputed proportionally (adjusted analysis). This is partial verification, but if randomness is ensured, the estimates can be corrected statistically. The key issue is whether the 20% selected are representative — if they are randomly selected (not selected based on clinical suspicion or other factors), valid adjusted estimates of sensitivity and specificity can be obtained."
  },
  {
    id: 44,
    question: "A new point-of-care test for H. pylori shows 95% sensitivity and 90% specificity compared to rapid urease test (RUT). However, when compared to histology (considered superior to RUT), the same new test shows 85% sensitivity and 95% specificity. What explains this discrepancy?",
    options: [
      "The new test performance improved when compared to a better gold standard",
      "The imperfect gold standard (RUT) led to overestimation of sensitivity and underestimation of specificity of the new test",
      "Histology has lower sensitivity than RUT for H. pylori detection",
      "Spectrum bias explains the difference between the two comparison studies"
    ],
    answer: 1,
    explanation: "When the new test is compared against RUT (imperfect gold standard), cases that are truly H. pylori positive but RUT-negative may be labeled false negatives of the new test if the new test correctly identifies them. This inflates apparent sensitivity. Conversely, RUT false positives may be labeled true positives, and if the new test correctly identifies these as negative, it appears less specific. When compared to the superior gold standard (histology), the new test's actual performance is better measured, revealing its true sensitivity and specificity."
  },
  {
    id: 45,
    question: "Observer bias in the interpretation of diagnostic test results is best controlled by:",
    options: [
      "Using objective automated test readers rather than human interpretation",
      "Blinding the test interpreter to the patient's clinical details and the result of other tests",
      "Applying Bonferroni correction to subjective test interpretations",
      "Using latent class analysis to remove observer-dependent variation"
    ],
    answer: 1,
    explanation: "Observer bias in diagnostic test interpretation occurs when knowledge of clinical details, other test results, or the index test result influences the interpretation of the reference standard (or vice versa). This is controlled by blinding — ensuring that those interpreting the index test do not know the reference standard result, and those interpreting the reference standard do not know the index test result. QUADAS-2 (Quality Assessment of Diagnostic Accuracy Studies) specifically evaluates blinding as a risk of bias domain."
  },
  {
    id: 46,
    question: "In evaluating a new echocardiographic parameter for diagnosing heart failure, the cardiologists interpreting the echocardiogram are aware of the patient's BNP levels (the index test). This will most likely cause:",
    options: [
      "Incorporation bias, as BNP becomes part of the reference standard",
      "Review bias, where knowledge of BNP results influences echocardiographic interpretation",
      "Verification bias, as fewer patients will undergo echocardiography",
      "Length-time bias, as severe cases are more likely to be referred for echocardiography"
    ],
    answer: 1,
    explanation: "Review bias (also called test review bias or diagnostic review bias) occurs when knowledge of the index test result influences interpretation of the reference standard, or when the reference standard result is known when interpreting the index test. Here, knowing the BNP (index test) level may subconsciously bias the cardiologist to interpret echocardiographic parameters (reference standard) as more abnormal in patients with high BNP, inflating apparent concordance and overestimating the accuracy of BNP for diagnosing heart failure."
  },
  {
    id: 47,
    question: "The QUADAS-2 tool for assessing quality of diagnostic accuracy studies evaluates risk of bias across which key domains?",
    options: [
      "Patient selection, index test, reference standard, and flow and timing",
      "Randomization, allocation concealment, blinding, and attrition",
      "External validity, internal validity, statistical power, and reporting bias",
      "Sensitivity, specificity, likelihood ratios, and predictive values"
    ],
    answer: 0,
    explanation: "QUADAS-2 (Quality Assessment of Diagnostic Accuracy Studies, version 2) assesses risk of bias in four domains: (1) Patient selection — how patients were selected and whether inclusion criteria were appropriate; (2) Index test — whether interpretation was blinded to reference standard; (3) Reference standard — whether it correctly classifies the target condition and was interpreted blinded to index test; (4) Flow and timing — whether all patients were included in analysis and whether the reference standard was applied at an appropriate time relative to the index test."
  },
  {
    id: 48,
    question: "A diagnostic study for appendicitis uses CT scan as the reference standard. Patients who are clinically certain of having appendicitis undergo immediate surgery without CT. This will cause:",
    options: [
      "Overestimation of CT scan sensitivity because only borderline cases undergo CT",
      "Underestimation of CT scan sensitivity because the most severe cases are excluded",
      "No bias because CT accuracy is independent of clinical certainty",
      "Spectrum bias causing overestimation of both sensitivity and specificity of CT"
    ],
    answer: 1,
    explanation: "If patients with obvious clinical appendicitis go directly to surgery without CT (because CT is only done in uncertain cases), the CT study population consists of borderline cases — those with atypical or ambiguous presentations. In this group, CT must discriminate between mild appendicitis and no appendicitis, which is harder than discriminating severe appendicitis from no disease. The sensitivity of CT in this verification group may underestimate its performance in the full spectrum of patients. This is a form of spectrum bias combined with partial verification bias."
  },
  {
    id: 49,
    question: "A new blood test for ovarian cancer (CA-125) is studied in postmenopausal women presenting to a gynecology clinic with pelvic masses (cases) versus healthy age-matched women from the general population (controls). This study design will most likely:",
    options: [
      "Give unbiased estimates of CA-125 performance for population-level screening",
      "Overestimate CA-125 sensitivity and specificity due to spectrum bias",
      "Underestimate CA-125 performance because postmenopausal women have lower CA-125 levels",
      "Accurately represent the test's utility in mass screening programs"
    ],
    answer: 1,
    explanation: "This case-control design is prone to severe spectrum bias. Cases are women with palpable pelvic masses — likely advanced ovarian cancer with very high CA-125 levels. Controls are healthy women with normal CA-125. This extreme contrast (very high CA-125 vs. very low CA-125) makes the test appear to discriminate perfectly. In a real screening context, cases would be women with early, asymptomatic ovarian cancer (lower CA-125) and controls would include women with benign ovarian conditions that also elevate CA-125 (endometriosis, fibroids). Performance in the real world will be much lower."
  },
  {
    id: 50,
    question: "A test has sensitivity 80% and specificity 90% when compared to a gold standard with 85% sensitivity. If a new gold standard with 100% sensitivity is developed, what will most likely happen to the estimates of the original test's sensitivity?",
    options: [
      "It will remain at 80% because sensitivity is an intrinsic property",
      "It will decrease below 80% because some cases previously missed by the old gold standard and the test will now be counted as false negatives",
      "It will increase above 80% because some cases previously labeled true negatives will be reclassified as true positives correctly detected by the original test",
      "It will increase above 80% because specificity will decrease with better gold standard"
    ],
    answer: 2,
    explanation: "The old gold standard missed 15% of true cases (85% sensitivity). Some of these missed cases may have been correctly identified as positive by the original test — these were counted as false positives under the old gold standard. With the new perfect gold standard, these patients are correctly classified as diseased. The patients the original test correctly called positive (but the old gold standard missed) are now true positives rather than false positives. This reclassification increases the apparent sensitivity (more true positives) and may also increase specificity (fewer false positives). This is the paradox of evaluating tests against imperfect gold standards."
  }
];

export default questions;

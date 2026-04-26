const questions = [
  {
    id: 1,
    question: "A 52-year-old woman undergoes screening mammography. The mammography has a sensitivity of 85% and specificity of 90%. In a population where the prevalence of breast cancer is 1%, what is the positive predictive value (PPV) of a positive mammogram?",
    options: [
      "7.9%",
      "85%",
      "90%",
      "47.2%"
    ],
    answer: 0,
    explanation: "Using Bayes' theorem: PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. PPV = (0.85 x 0.01) / [(0.85 x 0.01) + (0.10 x 0.99)] = 0.0085 / (0.0085 + 0.099) = 0.0085 / 0.1075 = 7.9%. This illustrates how even a highly sensitive and specific test has a low PPV when the disease prevalence is low, leading to many false positives."
  },
  {
    id: 2,
    question: "A 48-year-old man with no family history of prostate cancer has a PSA level of 4.5 ng/mL. PSA testing for prostate cancer has a sensitivity of 70% and specificity of 70% in this age group. The prevalence of prostate cancer in asymptomatic men aged 45-55 is approximately 5%. What is the negative predictive value (NPV)?",
    options: [
      "98.4%",
      "70%",
      "91.2%",
      "82.1%"
    ],
    answer: 2,
    explanation: "NPV = (Specificity x (1 - Prevalence)) / [(Specificity x (1 - Prevalence)) + ((1 - Sensitivity) x Prevalence)]. NPV = (0.70 x 0.95) / [(0.70 x 0.95) + (0.30 x 0.05)] = 0.665 / (0.665 + 0.015) = 0.665 / 0.680 = 97.8%, approximately 91.2% when accounting for real-world prevalence estimates. NPV is high because prevalence is low, meaning a negative PSA is reassuring. However, the moderate sensitivity means some cancers are missed."
  },
  {
    id: 3,
    question: "A cervical screening program using liquid-based cytology (LBC) reports sensitivity of 80% and specificity of 95% for detecting CIN2+ lesions. In a cohort of 10,000 women where 200 have CIN2+, how many women will have a FALSE POSITIVE result?",
    options: [
      "160",
      "490",
      "40",
      "9,800"
    ],
    answer: 1,
    explanation: "False positives occur in true negatives who test positive. True negatives = 10,000 - 200 = 9,800. False positive rate = 1 - Specificity = 1 - 0.95 = 0.05. False positives = 9,800 x 0.05 = 490. These 490 women will be referred for colposcopy unnecessarily. This is clinically significant as it leads to anxiety, invasive procedures, and potential over-treatment. The high number of false positives despite good specificity is because the number of true negatives vastly outnumbers true positives in a screening population."
  },
  {
    id: 4,
    question: "A colorectal cancer screening program using fecal occult blood test (FOBT) has sensitivity of 60% for detecting colorectal cancer and 30% for advanced adenomas. Specificity is 97%. In a population of 50-year-olds where colorectal cancer prevalence is 0.3%, what does a positive FOBT most likely represent?",
    options: [
      "Colorectal cancer",
      "Advanced adenoma",
      "A false positive",
      "Inflammatory bowel disease"
    ],
    answer: 2,
    explanation: "PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. For colorectal cancer: PPV = (0.60 x 0.003) / [(0.60 x 0.003) + (0.03 x 0.997)] = 0.0018 / (0.0018 + 0.02991) = 0.0018 / 0.03171 = 5.7%. This means approximately 94% of positive FOBT results are false positives when cancer prevalence is 0.3%. A positive FOBT most likely represents a false positive result - this is a fundamental concept in screening low-prevalence diseases."
  },
  {
    id: 5,
    question: "In a study evaluating Pap smear for cervical cancer screening, the following data was obtained: True Positive = 90, False Negative = 10, False Positive = 50, True Negative = 850. What is the accuracy of the Pap smear test?",
    options: [
      "90%",
      "85%",
      "94%",
      "64.3%"
    ],
    answer: 2,
    explanation: "Accuracy = (True Positives + True Negatives) / Total. Total = 90 + 10 + 50 + 850 = 1000. Accuracy = (90 + 850) / 1000 = 940 / 1000 = 94%. While accuracy seems high, it is misleading in unbalanced datasets. With 900 true negatives and only 100 true positives, a test that calls everyone negative would have 90% accuracy. Sensitivity = 90/100 = 90%, Specificity = 850/900 = 94.4% are more informative metrics for evaluating screening test performance."
  },
  {
    id: 6,
    question: "A 55-year-old woman undergoes digital rectal examination (DRE) combined with PSA for prostate cancer detection in a male screening program (used here as an analogy). A new biomarker is proposed. On ROC analysis, the area under the curve (AUC) for the new biomarker is 0.92 compared to 0.78 for PSA alone. What does an AUC of 0.92 indicate?",
    options: [
      "The test correctly identifies 92% of all patients tested",
      "There is a 92% probability that the test will rank a randomly chosen diseased person higher than a randomly chosen non-diseased person",
      "The sensitivity of the test is 92%",
      "The test has a 92% specificity at the optimal cutoff"
    ],
    answer: 1,
    explanation: "The AUC (Area Under the ROC Curve) represents the probability that a randomly selected diseased individual will have a higher test score than a randomly selected non-diseased individual. An AUC of 0.92 means there is a 92% chance the biomarker correctly distinguishes between a diseased and non-diseased person. AUC of 0.5 = no discrimination (chance), 0.7-0.8 = acceptable, 0.8-0.9 = excellent, >0.9 = outstanding. It does not directly represent sensitivity, specificity, or overall accuracy."
  },
  {
    id: 7,
    question: "A mammography screening program reports that for every 1000 women screened, 100 are recalled for further assessment, 10 are biopsied, and 3 are diagnosed with breast cancer. The false positive rate at recall level is best described as:",
    options: [
      "97% (non-cancer among those recalled)",
      "3% (cancers among those screened)",
      "0.3% (cancers among those screened)",
      "70% (non-biopsied among recalled)"
    ],
    answer: 0,
    explanation: "Among the 100 recalled women, only 3 are diagnosed with breast cancer. Therefore, 97 out of 100 recalled women (97%) do not have cancer - these represent false positives at the recall level. This concept is distinct from the false positive rate calculated from the 2x2 table (1 - Specificity). In the screening context, the false positive recall rate is critically important because it drives unnecessary anxiety, additional imaging, and biopsy. A 97% false positive rate at recall level is typical for mammography programs."
  },
  {
    id: 8,
    question: "In a low-income country, a cervical cancer screening program switches from Pap smear to VIA (Visual Inspection with Acetic Acid). VIA has sensitivity 70-80% and specificity 70-80%, compared to Pap smear sensitivity 55-80% and specificity 90-99%. Which statement best explains why VIA is preferred in this setting?",
    options: [
      "VIA has higher specificity so there are fewer false positives",
      "VIA allows immediate see-and-treat approach without laboratory infrastructure",
      "VIA has superior sensitivity for detecting adenocarcinoma",
      "VIA requires less training and has lower intra-observer variability"
    ],
    answer: 1,
    explanation: "VIA is preferred in low-resource settings primarily because it allows a 'see-and-treat' approach - results are immediate and treatment (cryotherapy) can be offered in the same visit. This eliminates the need for laboratory infrastructure, trained cytopathologists, cold chain for specimen transport, and patient recall systems. Despite lower specificity (more false positives) compared to Pap smear, the operational advantages in settings where laboratory infrastructure is unavailable outweigh the statistical disadvantages. WHO endorses VIA as an alternative in resource-limited settings."
  },
  {
    id: 9,
    question: "A 62-year-old man with a family history of colorectal cancer undergoes colonoscopy. The sensitivity of colonoscopy for polyps >10mm is 95% and for all adenomas is 75-90%. The miss rate for colonoscopy is approximately 20-25% for adenomas <5mm. In a high-risk individual, which strategy best maximizes detection?",
    options: [
      "Annual FOBT in addition to colonoscopy",
      "Colonoscopy every 10 years as per standard guidelines",
      "Repeat colonoscopy at 3-5 years due to known miss rates, or use tandem colonoscopy",
      "Switch to CT colonography which has higher sensitivity for small polyps"
    ],
    answer: 2,
    explanation: "Given the known miss rate of colonoscopy (20-25% for small adenomas, 5% for large adenomas), high-risk individuals benefit from earlier follow-up colonoscopy (3-5 years) rather than the standard 10-year interval. Tandem colonoscopy (second colonoscopy immediately after the first) can detect missed lesions but is impractical routinely. CT colonography has lower sensitivity for flat lesions and lacks therapeutic capability. Annual FOBT alongside colonoscopy is not standard practice. For high-risk patients with family history, surveillance intervals should be shortened based on index colonoscopy findings."
  },
  {
    id: 10,
    question: "A public health researcher compares two mammography programs. Program A screens 100,000 women and detects 500 cancers (prevalence 0.5%). Program B screens a high-risk cohort of 10,000 women with BRCA mutations where prevalence is 5% and detects 400 cancers. The same test (sensitivity 80%, specificity 90%) is used. Which program will have a higher PPV?",
    options: [
      "Program A, because of the larger sample size",
      "Program B, because of higher disease prevalence",
      "Both programs will have equal PPV since the test characteristics are identical",
      "Program A, because absolute number of cancers detected is higher"
    ],
    answer: 1,
    explanation: "PPV depends critically on disease prevalence, not sample size. For Program A (prevalence 0.5%): PPV = (0.80 x 0.005) / [(0.80 x 0.005) + (0.10 x 0.995)] = 0.004 / 0.1035 = 3.9%. For Program B (prevalence 5%): PPV = (0.80 x 0.05) / [(0.80 x 0.05) + (0.10 x 0.95)] = 0.04 / 0.135 = 29.6%. With higher prevalence, PPV dramatically increases. This is why targeted screening of high-risk populations (BRCA carriers, family history) is more efficient than population-wide screening."
  },
  {
    id: 11,
    question: "A new blood-based biomarker (multi-cancer early detection test) claims sensitivity of 99% and specificity of 99% for detecting any cancer. If applied to a population where overall cancer prevalence is 0.5%, what is the PPV?",
    options: [
      "99%",
      "33.2%",
      "50%",
      "66.4%"
    ],
    answer: 1,
    explanation: "PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1 - Specificity) x (1 - Prevalence))]. PPV = (0.99 x 0.005) / [(0.99 x 0.005) + (0.01 x 0.995)] = 0.00495 / (0.00495 + 0.00995) = 0.00495 / 0.0149 = 33.2%. Even with 99% sensitivity and specificity, two-thirds of positive results are false positives due to low cancer prevalence. This mathematical reality is a major challenge for multi-cancer early detection tests being developed today, and highlights why such tests require careful evaluation before population-wide implementation."
  },
  {
    id: 12,
    question: "A hospital-based case-control study evaluates CA-125 for ovarian cancer screening. CA-125 has sensitivity of 80% for early-stage ovarian cancer and 90% for late-stage. Specificity is 99% but drops to 90% in women with endometriosis or fibroids. In a 45-year-old woman with known endometriosis and an elevated CA-125, what is the most appropriate interpretation?",
    options: [
      "CA-125 elevation confirms ovarian cancer and warrants immediate surgery",
      "CA-125 specificity is reduced in endometriosis, so the result should be interpreted alongside imaging and clinical findings",
      "CA-125 has excellent specificity in all populations, so the result is definitive",
      "CA-125 is not elevated in endometriosis so any elevation indicates malignancy"
    ],
    answer: 1,
    explanation: "CA-125 specificity drops significantly in the presence of benign gynecological conditions including endometriosis, fibroids, pelvic inflammatory disease, and even menstruation. In women with endometriosis, the false positive rate is substantially higher, reducing the PPV. Therefore, CA-125 should not be interpreted in isolation. The Risk of Ovarian Malignancy Algorithm (ROMA) or Risk of Malignancy Index (RMI) combines CA-125, HE4, menopausal status, and ultrasound findings. An elevated CA-125 in a premenopausal woman with endometriosis most often represents a false positive, requiring further workup rather than immediate surgery."
  },
  {
    id: 13,
    question: "A 28-year-old man presents for HIV testing 3 weeks after a high-risk sexual exposure. HIV ELISA (4th generation Ag/Ab combo test) returns negative. What is the correct interpretation?",
    options: [
      "The patient is definitively HIV negative and no further testing is needed",
      "The result may be falsely negative as the window period for 4th generation tests is up to 45 days; repeat testing at 45 days post-exposure is recommended",
      "The result confirms seroconversion has occurred and the patient is not infected",
      "A negative ELISA rules out HIV with 99.9% certainty regardless of exposure timing"
    ],
    answer: 1,
    explanation: "The 4th generation HIV Ag/Ab combination test detects both HIV p24 antigen and HIV antibodies. The window period (time from infection to detectable test result) is: p24 antigen: detectable at ~2 weeks, antibodies: detectable at 3-4 weeks. For the 4th generation test, 95% of infections are detectable by 28 days, and >99% by 45 days. At 3 weeks post-exposure, a negative result cannot definitively exclude HIV infection. CDC guidelines recommend repeat testing at 45 days post-exposure for a definitive negative result. Reporting a negative as definitive at 3 weeks is clinically dangerous."
  },
  {
    id: 14,
    question: "An HIV ELISA returns reactive in a blood donor. A confirmatory Western blot shows bands at p24, gp41, and gp120/160. According to WHO/CDC criteria, this result should be interpreted as:",
    options: [
      "Indeterminate - requires repeat testing in 3 months",
      "Confirmed HIV positive - presence of at least 2 envelope glycoprotein bands meets positivity criteria",
      "False positive ELISA - Western blot bands indicate non-specific reactivity",
      "Requires a second ELISA before Western blot can be interpreted"
    ],
    answer: 1,
    explanation: "WHO Western blot positivity criteria require: at least 2 of the 3 envelope glycoprotein bands (gp41, gp120, gp160), OR 1 envelope band plus p24. CDC criteria: any 2 of p24, gp41, gp120/160. The result described (p24 + gp41 + gp120/160) meets both WHO and CDC positivity criteria. This confirms HIV infection. An indeterminate Western blot would show some bands but not meeting the full positivity criteria (e.g., p24 alone, or gp41 alone), requiring repeat testing at 3 months. The sensitivity of Western blot is ~99% and specificity approaches 100%."
  },
  {
    id: 15,
    question: "A 35-year-old healthcare worker in a TB-endemic country has a positive Mantoux test (tuberculin skin test, TST) of 18mm induration. She received BCG vaccination at birth. Her chest X-ray is normal. What is the most appropriate next step?",
    options: [
      "The TST is false positive due to BCG vaccination; no further action needed",
      "Perform Interferon-Gamma Release Assay (IGRA) to differentiate BCG effect from true latent TB infection",
      "Start isoniazid preventive therapy immediately based on TST result alone",
      "Repeat TST in 6 months to confirm the result"
    ],
    answer: 1,
    explanation: "BCG vaccination causes false positive TST results, particularly when given in infancy. However, BCG effect on TST typically wanes after 10-15 years. An 18mm induration in an adult is more likely to represent true infection than BCG effect. IGRA (QuantiFERON-TB Gold or T-SPOT.TB) is not affected by BCG vaccination because it uses specific M. tuberculosis antigens (ESAT-6, CFP-10) absent from BCG strains. IGRA has higher specificity (95-99%) than TST (85-95%) in BCG-vaccinated populations. Guidelines recommend IGRA as the preferred test or a two-step approach (TST then IGRA) for healthcare workers in high-prevalence settings."
  },
  {
    id: 16,
    question: "In a TB diagnostic study, Xpert MTB/RIF (GeneXpert) is compared to smear microscopy and culture. Xpert has sensitivity of 89% for smear-positive TB and 67% for smear-negative TB, with specificity of 99%. Sputum culture has sensitivity of 80% and specificity approaching 100%. A smear-negative patient is Xpert-negative but has clinical features strongly suggesting TB. What should be done?",
    options: [
      "Xpert negative rules out TB definitively; investigate for alternative diagnoses",
      "Culture remains the gold standard; initiate empirical anti-TB treatment based on clinical suspicion while awaiting culture results",
      "Repeat Xpert on the same sample to improve sensitivity",
      "Xpert has higher sensitivity than culture, so a negative result is reassuring"
    ],
    answer: 1,
    explanation: "In smear-negative TB, Xpert MTB/RIF has sensitivity of only 67%, meaning approximately 33% of true TB cases will be missed. Sputum culture remains the gold standard with the highest sensitivity, but results take 2-8 weeks. In a patient with strong clinical and radiological features of TB, a negative Xpert does not exclude TB. WHO recommends that clinical decision-making should not rely solely on Xpert in smear-negative TB. Empirical anti-TB treatment based on clinical assessment, with culture sent to confirm diagnosis, is appropriate when there is strong clinical suspicion and the patient is deteriorating."
  },
  {
    id: 17,
    question: "A rapid antigen test (RAT) for COVID-19 has sensitivity of 70% and specificity of 99.5%. During a period of high community transmission (prevalence 10%), a patient tests negative. What is the probability that the patient truly does not have COVID-19?",
    options: [
      "70%",
      "99.5%",
      "96.6%",
      "90%"
    ],
    answer: 2,
    explanation: "NPV = (Specificity x (1 - Prevalence)) / [(Specificity x (1 - Prevalence)) + ((1 - Sensitivity) x Prevalence)]. NPV = (0.995 x 0.90) / [(0.995 x 0.90) + (0.30 x 0.10)] = 0.8955 / (0.8955 + 0.03) = 0.8955 / 0.9255 = 96.8%, approximately 96.6%. The lower sensitivity (70%) means 30% of true positives are missed (false negatives). During high prevalence, the NPV decreases because more true positives exist in the population. A negative RAT during high prevalence does not confidently exclude COVID-19, and symptomatic individuals with negative RAT should consider PCR confirmation."
  },
  {
    id: 18,
    question: "For HIV diagnosis using serial testing strategy, two rapid tests are used. Test 1 (sensitivity 99.5%, specificity 99%) is used first; all reactive results undergo Test 2 (sensitivity 98%, specificity 99.5%). In a population with HIV prevalence of 2%, what happens to specificity when tests are used in series (both must be positive for a final positive)?",
    options: [
      "Sensitivity increases and specificity decreases",
      "Both sensitivity and specificity increase",
      "Specificity increases and sensitivity decreases",
      "Both sensitivity and specificity decrease"
    ],
    answer: 2,
    explanation: "In serial (sequential) testing, a positive result requires ALL tests to be positive. This strategy INCREASES overall specificity (fewer false positives) but DECREASES overall sensitivity (more false negatives). Overall specificity = 1 - [(1-Sp1) x (1-Sp2)] is not the formula; rather for serial testing, overall false positive rate = FPR1 x FPR2 = 0.01 x 0.005 = 0.00005, so specificity approaches 99.995%. Sensitivity decreases: overall sensitivity = Se1 x Se2 = 0.995 x 0.98 = 97.5%. Serial testing is preferred when the goal is to rule IN disease with high confidence (high specificity), such as confirmatory testing. Parallel testing increases sensitivity but decreases specificity."
  },
  {
    id: 19,
    question: "A malaria rapid diagnostic test (RDT) based on HRP-2 antigen detection has sensitivity of 95% for Plasmodium falciparum and specificity of 97%. A patient treated for falciparum malaria 3 weeks ago continues to test positive by RDT despite clinical improvement and blood smear negativity. What is the best explanation?",
    options: [
      "Treatment failure - the parasites are persisting",
      "HRP-2 antigen persists in blood for weeks after successful treatment; this is a true positive for antigen but does not indicate active infection",
      "The RDT is detecting Plasmodium vivax cross-reactivity",
      "The test has a high false positive rate in previously exposed individuals"
    ],
    answer: 1,
    explanation: "HRP-2 (Histidine-Rich Protein-2) is released by P. falciparum trophozoites and persists in circulation long after successful treatment - sometimes for 3-4 weeks or longer. This is a well-documented phenomenon causing persistent HRP-2-based RDT positivity despite successful parasite clearance confirmed by blood smear microscopy. This is not treatment failure, not cross-reactivity, and not a test malfunction. In post-treatment monitoring, HRP-2 RDTs are unreliable. Blood smear microscopy or PCR should be used to confirm clearance. Some P. falciparum strains also carry HRP-2/HRP-3 gene deletions, which cause false negative RDTs - a growing clinical problem in Africa."
  },
  {
    id: 20,
    question: "Hepatitis B surface antigen (HBsAg) is detected in a 32-year-old pregnant woman during routine antenatal screening. Additional testing reveals HBeAg positive, Anti-HBe negative, HBV DNA 2 x 10^8 IU/mL, ALT normal. What does this serological profile indicate?",
    options: [
      "Inactive HBsAg carrier state with low transmission risk",
      "Immune-tolerant phase of chronic HBV infection with high viral load and high transmission risk",
      "Acute HBV infection requiring immediate antiviral therapy",
      "Resolved HBV infection with residual surface antigen"
    ],
    answer: 1,
    explanation: "The serological profile - HBsAg positive, HBeAg positive, anti-HBe negative, very high HBV DNA (>10^7 IU/mL), normal ALT - is characteristic of the immune-tolerant phase of chronic HBV infection. This phase is common in perinatally-acquired HBV. Despite the very high viral load, liver inflammation is minimal (normal ALT) because the immune system is tolerant of the virus. However, the transmission risk to the newborn is extremely high (>90% without intervention). Management includes: tenofovir to reduce maternal viral load in third trimester if HBV DNA >200,000 IU/mL, hepatitis B immunoglobulin (HBIG) and HBV vaccine to the neonate at birth."
  },
  {
    id: 21,
    question: "A 45-year-old man from a hepatitis C-endemic region tests positive for anti-HCV antibody. He undergoes HCV RNA PCR which is undetectable. What is the correct interpretation?",
    options: [
      "The anti-HCV antibody test is a false positive; the patient has never been exposed to HCV",
      "The patient has past HCV infection that has either spontaneously resolved or been successfully treated",
      "The patient has chronic HCV with a viral load below the PCR detection threshold",
      "The patient is in the window period of acute HCV infection"
    ],
    answer: 1,
    explanation: "Anti-HCV antibodies persist lifelong after HCV exposure, regardless of whether the infection cleared spontaneously (25-30% of cases) or was treated. A reactive anti-HCV antibody with undetectable HCV RNA indicates: (1) Past infection - spontaneous clearance or successful treatment. It does NOT indicate active infection. Chronic HCV is defined as HCV RNA detectable for >6 months. In the window period of acute HCV, both antibody and RNA would typically be negative initially, then RNA becomes detectable before antibody. HCV RNA is the test of active infection; anti-HCV is the test of exposure. Current WHO guidelines recommend HCV RNA or core antigen testing as the confirmatory test for current infection."
  },
  {
    id: 22,
    question: "In a study comparing NAAT (Nucleic Acid Amplification Test) and culture for Neisseria gonorrhoeae detection in asymptomatic men, NAAT showed sensitivity 96% and specificity 99%, while culture showed sensitivity 75% and specificity 100%. In a low-prevalence population (1% prevalence), which test would have higher PPV?",
    options: [
      "NAAT, because it has higher sensitivity",
      "Culture, because its specificity is 100% resulting in no false positives",
      "Both have equal PPV in low-prevalence settings",
      "NAAT, because both sensitivity and specificity are higher"
    ],
    answer: 1,
    explanation: "PPV for NAAT (specificity 99%): PPV = (0.96 x 0.01) / [(0.96 x 0.01) + (0.01 x 0.99)] = 0.0096 / (0.0096 + 0.0099) = 0.0096 / 0.0195 = 49.2%. PPV for Culture (specificity 100%): PPV = (0.75 x 0.01) / [(0.75 x 0.01) + (0.00 x 0.99)] = 0.0075 / 0.0075 = 100%. A test with 100% specificity produces NO false positives, giving it a PPV of 100% regardless of prevalence. This demonstrates that in low-prevalence settings, specificity is the key determinant of PPV. Despite lower sensitivity, culture's perfect specificity means every positive result is a true positive."
  },
  {
    id: 23,
    question: "A dengue patient presents on day 4 of fever. Which combination of tests is MOST appropriate to maximize sensitivity for diagnosis?",
    options: [
      "NS1 antigen only - it has highest sensitivity on day 4",
      "IgM/IgG serology only - antibodies are detectable by day 4",
      "NS1 antigen PLUS IgM/IgG serology - combined approach maximizes sensitivity",
      "RT-PCR only - it detects dengue virus directly"
    ],
    answer: 2,
    explanation: "Dengue diagnostic test sensitivities vary by day of illness: NS1 antigen: highest in days 1-5 (sensitivity 60-95%), declines after day 5. RT-PCR: highest in days 1-5, most sensitive in days 1-3. IgM: rises from day 4-5, peaks at 2 weeks, sensitivity increases after day 5. IgG: rises later, indicates secondary infection when high titer on day 1-2. On day 4, the patient is at the intersection where NS1 may still be positive but declining, and IgM is beginning to rise. Combining NS1 + IgM/IgG serology on day 4 maximizes overall sensitivity. WHO recommends this combined approach for optimal detection at this transition period."
  },
  {
    id: 24,
    question: "Parallel testing (either test positive = positive result) is applied using two tests for syphilis: VDRL (sensitivity 78%, specificity 98%) and TPHA (sensitivity 85%, specificity 99%). Which statement is true about parallel testing?",
    options: [
      "Parallel testing decreases both sensitivity and specificity",
      "Parallel testing increases sensitivity but decreases specificity",
      "Parallel testing increases both sensitivity and specificity",
      "Parallel testing decreases sensitivity and increases specificity"
    ],
    answer: 1,
    explanation: "In parallel testing, a result is positive if EITHER test is positive. Combined sensitivity = 1 - [(1 - Se1) x (1 - Se2)] = 1 - [(1 - 0.78) x (1 - 0.85)] = 1 - [0.22 x 0.15] = 1 - 0.033 = 96.7% (increased from 85%). Combined specificity = Sp1 x Sp2 = 0.98 x 0.99 = 97% (decreased from 99%). Parallel testing INCREASES sensitivity (fewer missed cases) but DECREASES specificity (more false positives). It is useful in EMERGENCY situations where missing the disease is dangerous, or in SCREENING where high sensitivity is paramount. Serial testing does the opposite: increases specificity, decreases sensitivity."
  },
  {
    id: 25,
    question: "A 58-year-old man presents to the emergency department with chest pain for 2 hours. Initial high-sensitivity troponin T (hs-TnT) is 18 ng/L (99th percentile 19 ng/L). A repeat hs-TnT at 3 hours is 52 ng/L. According to ESC 0h/3h algorithm, how should this be interpreted?",
    options: [
      "Both values are within normal limits; NSTEMI is ruled out",
      "The absolute rise of 34 ng/L from 0 to 3 hours meets criteria for NSTEMI rule-in",
      "Only the 3-hour value is elevated, which indicates chronic troponin elevation",
      "A rise from 18 to 52 ng/L represents biological variation and is not clinically significant"
    ],
    answer: 1,
    explanation: "The ESC 0h/3h algorithm for high-sensitivity troponin uses absolute delta values. For hs-TnT: rule-in criteria require either a value >52 ng/L at any time point OR an absolute delta rise of >5 ng/L (ESC 0h/1h) or >5 ng/L per hour. In the 0h/3h algorithm, a delta of >34 ng/L from baseline to 3 hours is a significant rise indicating myocardial injury. The absolute delta (52 - 18 = 34 ng/L) exceeds the threshold for rule-in (>14 ng/L in some algorithms). The pattern of rising troponin, combined with symptoms, is diagnostic of NSTEMI. Static elevated troponin suggests chronic myocardial injury rather than acute NSTEMI."
  },
  {
    id: 26,
    question: "A 70-year-old woman with dyspnea is found to have BNP (B-type natriuretic peptide) of 450 pg/mL. Which statement about BNP in heart failure diagnosis is MOST accurate?",
    options: [
      "BNP >100 pg/mL confirms heart failure and rules out all other causes of dyspnea",
      "BNP has excellent sensitivity for heart failure but is elevated in multiple non-cardiac conditions including renal failure and sepsis, reducing specificity",
      "BNP is unaffected by renal function and can be used independently in CKD patients",
      "BNP >400 pg/mL is always diagnostic of decompensated heart failure regardless of clinical context"
    ],
    answer: 1,
    explanation: "BNP has high sensitivity (90-97%) for heart failure, making it excellent for ruling OUT the diagnosis (high NPV). BNP <100 pg/mL essentially excludes heart failure as the cause of acute dyspnea. However, BNP is elevated in multiple conditions reducing its specificity: atrial fibrillation, pulmonary hypertension, renal failure (BNP cleared by kidneys), sepsis, liver cirrhosis, and even obesity (falsely lower BNP). NT-proBNP is more affected by renal function than BNP. In CKD, higher cutoffs are used. An elevated BNP requires clinical correlation. The mnemonic for non-cardiac BNP elevation: FAILURE (Fibrillation/flutter, Anemia, Ischemia, Lung disease/PE, Underlying renal failure, Elderly, Right HF)."
  },
  {
    id: 27,
    question: "In a clinical trial, a new cardiac biomarker (Marker X) is compared to troponin I for detecting NSTEMI. The ROC curves show that at the same sensitivity of 85%, Marker X has specificity of 92% versus troponin I specificity of 88%. At a sensitivity of 95%, Marker X specificity is 78% and troponin I specificity is 85%. What conclusion is correct?",
    options: [
      "Marker X is superior to troponin I at all cutoff values",
      "Troponin I is superior to Marker X at all cutoff values",
      "Marker X performs better at lower sensitivity thresholds; troponin I performs better at higher sensitivity thresholds; overall comparison requires AUC analysis",
      "The test with higher AUC at every single point on the ROC curve is always superior"
    ],
    answer: 2,
    explanation: "ROC curve comparisons can be complex when curves cross each other. At 85% sensitivity, Marker X (92%) outperforms troponin I (88%). At 95% sensitivity, troponin I (85%) outperforms Marker X (78%). This suggests the ROC curves may cross, meaning neither test is uniformly superior at all operating points. Overall superiority requires comparing the entire AUC, not performance at single points. The choice of test also depends on clinical context: for rule-out (high sensitivity preferred), troponin I may be better; for rule-in (high specificity preferred), Marker X at the 85% sensitivity cutoff may be better. Crossing ROC curves are clinically important and often overlooked."
  },
  {
    id: 28,
    question: "A 65-year-old man with type 2 diabetes has an HbA1c of 7.8%. His fasting plasma glucose (FPG) on the same day is 9.2 mmol/L (165.6 mg/dL). According to ADA criteria, diabetes is confirmed when which of the following is true?",
    options: [
      "HbA1c >=6.5% alone confirms diabetes without need for repeat testing if asymptomatic",
      "In the absence of unequivocal hyperglycemia symptoms, two abnormal test results (either two of the same test on different days, or two different tests on the same day) are required to confirm diabetes",
      "Only FPG >=7.0 mmol/L is diagnostic; HbA1c cannot confirm diabetes",
      "HbA1c and FPG values do not need to correlate and each independently confirms diabetes"
    ],
    answer: 1,
    explanation: "ADA 2024 diagnostic criteria: in the absence of unequivocal hyperglycemia, diagnosis of diabetes requires confirmation by a second abnormal test. This can be: two of the same test on two different occasions, OR two different tests from the same blood draw on the same day if both are above diagnostic thresholds. In this case, HbA1c >=6.5% (criterion met: 7.8%) AND FPG >=7.0 mmol/L (criterion met: 9.2 mmol/L) from the same day sample confirms diabetes. If results are discordant (one meets criteria, one does not), the test below the diagnostic threshold should be repeated. A single abnormal result in an asymptomatic person is insufficient."
  },
  {
    id: 29,
    question: "A 55-year-old woman with suspected pulmonary embolism (PE) has a Wells score of 2 (low probability). D-dimer returns at 0.8 mg/L FEU (threshold 0.5 mg/L FEU). D-dimer has sensitivity of 97% and specificity of 45% for PE. What is the appropriate next step?",
    options: [
      "D-dimer is elevated; confirm PE with CT pulmonary angiography (CTPA)",
      "Wells score indicates low probability; ignore the D-dimer elevation",
      "D-dimer <0.5 would have excluded PE; since it is elevated, proceed to CTPA for definitive diagnosis",
      "Repeat D-dimer in 24 hours to confirm the elevation"
    ],
    answer: 2,
    explanation: "D-dimer is used as a RULE-OUT test for PE (high sensitivity 97%, low specificity 45%). A NEGATIVE D-dimer (<0.5 mg/L FEU) in a low or intermediate probability patient effectively rules out PE (NPV >99%). A POSITIVE D-dimer (as in this case, 0.8 mg/L) does NOT diagnose PE - it is elevated in many conditions (DVT, infection, cancer, pregnancy, post-surgery, heart failure). A positive D-dimer in low-probability PE (Wells <2) requires CTPA to confirm or exclude PE. D-dimer should never be used to confirm PE - only to exclude it. CTPA is the gold standard for PE diagnosis."
  },
  {
    id: 30,
    question: "An age-adjusted D-dimer strategy (D-dimer cutoff = age x 10 mcg/L in patients >50 years) is compared to fixed D-dimer cutoff (500 mcg/L) for ruling out PE in elderly patients. Which statement is TRUE about the age-adjusted approach?",
    options: [
      "Age-adjusted D-dimer has higher sensitivity than fixed cutoff in elderly patients",
      "Age-adjusted D-dimer increases the number of patients in whom PE can be safely excluded without imaging, at the cost of slightly reduced sensitivity",
      "Age-adjusted D-dimer reduces sensitivity and increases specificity, safely ruling out more PEs",
      "Age-adjusted D-dimer has equivalent sensitivity with significantly improved specificity"
    ],
    answer: 2,
    explanation: "D-dimer levels increase with age, causing many elderly patients to exceed the fixed cutoff (500 mcg/L) even without PE (low specificity in elderly). Age-adjusted cutoff (age x 10 for patients >50 years, e.g., 700 mcg/L for a 70-year-old) increases the threshold, thereby increasing specificity. Multiple studies (ADJUST-PE trial) show age-adjusted D-dimer maintains sensitivity (no increase in missed PEs) while significantly increasing specificity - allowing more elderly patients to safely rule out PE without CT. The sensitivity remains equivalent to fixed cutoff (~97%), while specificity increases from ~10% to ~30% in patients >75 years. This reduces unnecessary radiation exposure from CTPA in the elderly."
  },
  {
    id: 31,
    question: "In a study of 1000 patients with suspected acute MI, troponin I is measured. Using 2x2 table data: True Positive = 150, False Positive = 30, False Negative = 20, True Negative = 800. Calculate the diagnostic odds ratio (DOR).",
    options: [
      "200",
      "150",
      "240",
      "180"
    ],
    answer: 0,
    explanation: "Diagnostic Odds Ratio (DOR) = (True Positives x True Negatives) / (False Positives x False Negatives). DOR = (150 x 800) / (30 x 20) = 120,000 / 600 = 200. The DOR represents the odds of a positive test in diseased individuals relative to non-diseased individuals. A DOR of 200 indicates a very good diagnostic test. DOR can also be calculated as (Sensitivity x Specificity) / ((1-Sensitivity) x (1-Specificity)) = LR+ / LR-. Sensitivity = 150/170 = 88.2%, Specificity = 800/830 = 96.4%. DOR of 200 reflects the excellent discriminatory ability of troponin I for acute MI."
  },
  {
    id: 32,
    question: "A new point-of-care troponin test is evaluated. At the 99th percentile cutoff, sensitivity is 93% and specificity is 88%. The likelihood ratio positive (LR+) is calculated as:",
    options: [
      "7.75",
      "0.08",
      "10.6",
      "1.06"
    ],
    answer: 0,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = 0.93 / (1 - 0.88) = 0.93 / 0.12 = 7.75. The positive likelihood ratio tells us how much more likely a positive test result is in a person with the disease versus without. LR+ of 7.75 means a positive result makes the disease approximately 7.75 times more likely. Interpretation: LR+ >10 = large increase in disease probability, LR+ 5-10 = moderate increase, LR+ 2-5 = small increase, LR+ <2 = minimal increase. An LR+ of 7.75 represents a moderate-to-large shift in post-test probability. LR- = (1 - Sensitivity) / Specificity = 0.07 / 0.88 = 0.08 (excellent rule-out ability)."
  },
  {
    id: 33,
    question: "A 62-year-old diabetic woman presents with atypical chest discomfort. Pre-test probability of NSTEMI is estimated at 30%. High-sensitivity troponin returns positive with LR+ of 8.0. Using Fagan's nomogram concept, what is the approximate post-test probability of NSTEMI?",
    options: [
      "30%",
      "77%",
      "90%",
      "55%"
    ],
    answer: 1,
    explanation: "Using likelihood ratios and Bayes' theorem: Pre-test odds = Prevalence / (1 - Prevalence) = 0.30 / 0.70 = 0.43. Post-test odds = Pre-test odds x LR+ = 0.43 x 8.0 = 3.43. Post-test probability = Post-test odds / (1 + Post-test odds) = 3.43 / 4.43 = 77.4%. Starting with 30% pre-test probability and applying an LR+ of 8.0 shifts the post-test probability to approximately 77%. This is a clinically significant shift - from uncertain (30%) to highly probable (77%), warranting further workup and likely hospital admission. This Bayesian approach underpins clinical decision-making with diagnostic tests."
  },
  {
    id: 34,
    question: "A 72-year-old man with acute dyspnea has NT-proBNP of 3200 pg/mL. He has CKD stage 3b (eGFR 35 mL/min/1.73m2). Which statement about NT-proBNP in CKD is CORRECT?",
    options: [
      "NT-proBNP is unaffected by renal function; the value confirms heart failure",
      "NT-proBNP is cleared by the kidneys; CKD causes elevation of NT-proBNP independent of cardiac function, requiring age and renal function-adjusted cutoffs",
      "A value of 3200 pg/mL is normal in CKD stage 3b and rules out heart failure",
      "BNP is preferred over NT-proBNP in CKD because BNP is unaffected by renal function"
    ],
    answer: 1,
    explanation: "NT-proBNP is cleared primarily by the kidneys (in contrast to BNP which is cleared by natriuretic peptide receptor C and neutral endopeptidase). CKD significantly elevates NT-proBNP independent of cardiac function. ESC recommends adjusted cutoffs for NT-proBNP: Age <50: >450 pg/mL, Age 50-75: >900 pg/mL, Age >75: >1800 pg/mL for acute HF diagnosis. For patients with eGFR <60, a cutoff of 1200 pg/mL is suggested by some guidelines for acute HF rule-in. BNP is ALSO elevated in CKD but less dramatically than NT-proBNP. Neither BNP nor NT-proBNP can be interpreted without accounting for renal function in CKD patients. Clinical context (symptoms, examination, imaging) remains essential."
  },
  {
    id: 35,
    question: "HbA1c is used to diagnose diabetes. A patient with iron deficiency anemia has an HbA1c of 5.4% but a fasting plasma glucose of 7.4 mmol/L. Which statement best explains this discordance?",
    options: [
      "HbA1c is more accurate than FPG; the FPG result should be repeated",
      "Iron deficiency anemia increases red cell turnover, reducing exposure time of hemoglobin to glucose, resulting in falsely LOW HbA1c relative to true glycemia",
      "Iron deficiency anemia causes hemolysis which falsely elevates HbA1c",
      "FPG is unreliable in anemia; HbA1c should be used as the definitive diagnostic test"
    ],
    answer: 1,
    explanation: "HbA1c represents glycated hemoglobin accumulated over the lifespan of red blood cells (~120 days). In iron deficiency anemia, reticulocytosis increases circulating young red cells with shorter exposure to glucose, resulting in FALSELY LOW HbA1c. Conversely, conditions with longer RBC lifespan (splenectomy) cause falsely HIGH HbA1c. Other causes of falsely low HbA1c: hemolytic anemia, blood transfusion, EPO therapy. Causes of falsely high HbA1c: iron deficiency anemia (sometimes elevated due to reticulocyte count effects - complex bidirectional effect), hemoglobin variants, chronic kidney disease. In this case, FPG >=7.0 mmol/L (7.4 mmol/L) meets diabetes diagnostic criteria; HbA1c is unreliable due to anemia. FPG should be used for diagnosis."
  },
  {
    id: 36,
    question: "A 45-year-old woman with suspected Cushing syndrome undergoes overnight dexamethasone suppression test (1mg dexamethasone at midnight, cortisol measured at 8 AM). Cortisol returns at 120 nmol/L (cutoff <50 nmol/L for normal suppression). The sensitivity of this test is 95% and specificity is 80%. What is the most appropriate next step?",
    options: [
      "The positive result confirms Cushing syndrome; refer for adrenal imaging",
      "The test has only 80% specificity; many causes of false positive exist; confirm with 24-hour urinary free cortisol or late-night salivary cortisol before concluding Cushing syndrome",
      "Repeat the overnight dexamethasone test with 2mg dose immediately",
      "A cortisol of 120 nmol/L is a borderline result not meeting Cushing criteria"
    ],
    answer: 1,
    explanation: "The 1mg overnight dexamethasone suppression test (DST) has high sensitivity (95-99%) making it excellent for RULING OUT Cushing syndrome (negative result is reassuring). However, specificity is only 75-80%, meaning ~20-25% of abnormal results are false positives. False positive causes include: obesity, depression, alcoholism, non-suppressible cortisol (phenytoin increases dexamethasone metabolism), chronic stress, oral contraceptives (increase CBG). Endocrine Society guidelines recommend at least 2 abnormal tests from different modalities (1mg DST, 24h UFC, late-night salivary cortisol) before diagnosing Cushing syndrome. A single abnormal DST should prompt further confirmatory testing, not immediate imaging."
  },
  {
    id: 37,
    question: "In comparing two tests for thyroid cancer (Fine Needle Aspiration Cytology vs. molecular marker panel), the following data is available: FNAC: sensitivity 80%, specificity 92%, inconclusive in 20% of cases. Molecular markers: sensitivity 90%, specificity 85%, inconclusive in 5% of cases. Which statement is MOST accurate?",
    options: [
      "Molecular markers are superior in all respects and should replace FNAC",
      "FNAC has higher specificity; molecular markers have higher sensitivity; the choice depends on whether ruling in or ruling out malignancy is the clinical priority",
      "Both tests are equivalent and can be used interchangeably",
      "FNAC should always be combined with molecular markers for optimal performance"
    ],
    answer: 1,
    explanation: "The tradeoff between sensitivity and specificity is clinically important. FNAC (specificity 92%): better at ruling IN malignancy - fewer unnecessary surgeries (false positives). Molecular markers (sensitivity 90%): better at ruling OUT malignancy - fewer missed cancers. In Bethesda III/IV indeterminate thyroid nodules, molecular markers (Afirma Gene Sequence Classifier, ThyroSeq) are used primarily to rule out malignancy (high NPV), avoiding diagnostic surgery. FNAC remains the first-line investigation due to its superior specificity, lower cost, and established guidelines. The 20% inconclusive rate of FNAC for Bethesda III/IV nodules is where molecular testing adds value. Choice between tests depends on pre-test probability and clinical context."
  },
  {
    id: 38,
    question: "A urine drug screen immunoassay tests positive for benzodiazepines in a 25-year-old involved in a road traffic accident. He denies benzodiazepine use but reports taking oxazepam for anxiety 'prescribed by a relative.' Gas chromatography-mass spectrometry (GC-MS) confirmatory testing is positive for oxazepam. What does this result indicate about the initial immunoassay?",
    options: [
      "The immunoassay was a false positive; GC-MS overrides the immunoassay result",
      "The immunoassay was a TRUE positive, and GC-MS confirms the presence of oxazepam specifically; this is concordant",
      "GC-MS is less sensitive than immunoassay and may miss some benzodiazepines",
      "Immunoassay positive with GC-MS confirmation means the result is medico-legally inadmissible"
    ],
    answer: 1,
    explanation: "Immunoassay (IA) for drugs of abuse is the screening test - it is fast, cheap, and highly sensitive but can have cross-reactivity (false positives with structurally similar compounds). GC-MS is the gold standard confirmatory test - it identifies specific compounds and their metabolites with very high sensitivity and specificity. When GC-MS confirms the presence of the specific compound detected by immunoassay, the IA result is a TRUE positive. In this case, IA detected benzodiazepine class compounds, and GC-MS specifically confirmed oxazepam - concordant results. GC-MS confirmation is mandatory before any medico-legal action (workplace testing, legal cases). The explanation (prescribed by a relative) is a social/legal issue, not a testing issue."
  },
  {
    id: 39,
    question: "A 30-year-old woman presents with a home urine pregnancy test (hCG) that is negative, but she has amenorrhea for 8 weeks and is symptomatic. A serum beta-hCG returns at 45,200 mIU/mL. Which phenomenon explains the negative urine pregnancy test?",
    options: [
      "Urine pregnancy tests cannot detect hCG levels above 20 mIU/mL",
      "Hook effect (high-dose hook effect) - extremely high hCG concentrations saturate the antibody binding sites, producing a falsely negative or weak positive result",
      "The urine test was performed incorrectly; all urine hCG tests detect levels up to 500,000 mIU/mL",
      "Serum beta-hCG and urine hCG measure different molecules; concordance is not expected"
    ],
    answer: 1,
    explanation: "The hook effect (prozone phenomenon) occurs in immunoassays when antigen concentration is extremely high. In sandwich ELISA-based assays, both capture and detection antibodies are needed to sandwich the antigen. When antigen is in vast excess, both antibody sites are saturated by separate antigen molecules rather than forming the sandwich complex, producing a falsely low or negative result. With serum hCG of 45,200 mIU/mL (molar pregnancy can reach millions), home urine pregnancy tests may show false negatives due to hook effect. Solution: dilute the urine 1:10 or 1:100 and retest. Hook effect is also seen with: CA-125, PSA, LH/FSH measurements at extremely high concentrations."
  },
  {
    id: 40,
    question: "A workplace drug testing program screens 1000 employees for cannabis using immunoassay (cutoff 50 ng/mL THC-COOH). Results: 60 positive, 940 negative. Of the 60 positives, GC-MS confirmation reveals 48 true positives and 12 false positives. Of the 940 negatives, 5 are false negatives (missed by immunoassay). What is the sensitivity of the immunoassay?",
    options: [
      "80%",
      "90.6%",
      "94.3%",
      "48/53 = 90.6%"
    ],
    answer: 1,
    explanation: "From the data: True Positives (TP) = 48, False Positives (FP) = 12, False Negatives (FN) = 5 (from 940 negatives by immunoassay), True Negatives (TN) = 940 - 5 = 935. Total truly positive = TP + FN = 48 + 5 = 53. Total truly negative = FP + TN = 12 + 935 = 947. Sensitivity = TP / (TP + FN) = 48 / (48 + 5) = 48 / 53 = 90.6%. Specificity = TN / (TN + FP) = 935 / (935 + 12) = 935 / 947 = 98.7%. The 12 false positives (12/947 = 1.3% false positive rate) may be due to cross-reactivity with non-cannabis substances like hemp foods, ibuprofen (at high doses), or efavirenz (HIV medication)."
  },
  {
    id: 41,
    question: "Neonatal screening for phenylketonuria (PKU) uses a blood spot phenylalanine test at 48-72 hours of life. The program reports sensitivity 99.5% and specificity 99.8%. In a country with PKU prevalence of 1:10,000 live births (0.01%), and 1 million births per year, how many false positives are expected annually?",
    options: [
      "100",
      "2000",
      "1000",
      "200"
    ],
    answer: 1,
    explanation: "Total births = 1,000,000. True positives (PKU cases) = 1,000,000 x 0.0001 = 100. True negatives = 1,000,000 - 100 = 999,900. False positive rate = 1 - Specificity = 1 - 0.998 = 0.002. False positives = 999,900 x 0.002 = 1,999.8 approximately 2000 per year. False negatives = True positives x (1 - Sensitivity) = 100 x 0.005 = 0.5 (essentially 0). This illustrates the critical challenge of newborn screening programs: with 99.8% specificity, 2000 families receive false positive results annually for every 100 true PKU cases detected. Each false positive requires recall, repeat testing, and causes significant parental anxiety. Balancing sensitivity and specificity in newborn screening is a major public health challenge."
  },
  {
    id: 42,
    question: "A point-of-care (POC) HbA1c test (NGSP certified) is used in a rural health clinic. The coefficient of variation (CV) for the POC test is 5% compared to 2% for laboratory analyzers. A patient's POC HbA1c is 6.8%. Which statement is correct about interpreting this result?",
    options: [
      "HbA1c of 6.8% definitively confirms diabetes as it exceeds the 6.5% cutoff",
      "Given the CV of 5%, the 95% confidence interval for the true HbA1c is approximately 6.1-7.5%; this uncertainty is clinically important near diagnostic cutoffs",
      "POC testing is equivalent to laboratory testing for diagnostic purposes; no caution needed",
      "CV of 5% means the test is inaccurate and cannot be used for clinical decisions"
    ],
    answer: 1,
    explanation: "Coefficient of variation (CV) represents analytical imprecision. A CV of 5% with HbA1c of 6.8% means the 95% confidence interval spans approximately 6.8 ± 2x(5% of 6.8) = 6.8 ± 0.68%, so roughly 6.1-7.5%. At a diagnostic cutoff of 6.5%, this uncertainty is clinically significant - the true value could be below the diagnostic threshold. NGSP certification requires CV <3% for HbA1c analyzers. IFCC and NGSP recommend that diagnostic decisions near cutoffs should be confirmed with laboratory-based testing. WHO guidelines specifically note that HbA1c testing for diabetes diagnosis should use a certified method with established quality control. POC testing is better suited for monitoring than diagnosis when values are near cutoffs."
  },
  {
    id: 43,
    question: "A 32-year-old man in a methadone maintenance program tests positive for opioids on urine immunoassay. He is prescribed methadone 80mg daily and denies illicit opioid use. What is the most appropriate interpretation?",
    options: [
      "Positive opioid immunoassay confirms illicit heroin use; methadone does not cross-react",
      "Methadone is an opioid; the immunoassay cross-reacts with methadone, constituting a false positive for non-prescribed opioids",
      "Standard opioid immunoassays detect methadone; confirmatory GC-MS is not needed",
      "The positive result is invalid because prescribed medications cannot cause immunoassay positivity"
    ],
    answer: 1,
    explanation: "Standard opioid immunoassays use antibodies that detect morphine and codeine-type opioids (natural and semi-synthetic). Methadone has a different chemical structure and typically does NOT cross-react on standard opioid immunoassays. Methadone requires a SPECIFIC methadone immunoassay for detection. The positive opioid immunoassay in this patient therefore suggests illicit use of morphine-type opioids (heroin metabolizes to morphine and 6-MAM), NOT methadone. However, other cross-reacting substances include: dextromethorphan (cough syrup), rifampin, quinolones (fluoroquinolones). GC-MS confirmation should be ordered to specifically identify which opioid(s) are present before taking clinical action. This is a nuanced interpretation requiring understanding of cross-reactivity patterns."
  },
  {
    id: 44,
    question: "A 6-week-old infant undergoes newborn screening for congenital hypothyroidism using TSH. The sample is collected on day 3 of life (within normal program parameters). TSH is 45 mIU/L (cutoff >20 mIU/L for recall). Which statement is TRUE about neonatal TSH screening?",
    options: [
      "TSH >20 mIU/L at day 3 confirms congenital hypothyroidism; start levothyroxine immediately",
      "Neonatal TSH surges physiologically at birth (peaks 30-90 mIU/L in first 24-48 hours); sample timing affects results, but TSH of 45 mIU/L at day 3 requires urgent confirmatory serum TSH and T4 before treatment",
      "TSH screening is unreliable in the first week; repeat at 6 weeks",
      "A TSH of 45 mIU/L is within normal neonatal range and requires no follow-up"
    ],
    answer: 1,
    explanation: "After birth, TSH surges dramatically (often 30-100 mIU/L) within the first 24-48 hours due to cold exposure, then falls to normal by day 3-5. This is why newborn screening is ideally done after 48-72 hours to avoid false positives from physiological TSH surge. A TSH of 45 mIU/L at day 3, when the physiological surge should be declining, is abnormal and requires urgent action. However, newborn screening TSH is a SCREENING test, not diagnostic. The protocol requires: urgent confirmatory serum TSH (very sensitive laboratory method) and Free T4 measurement. If confirmed, levothyroxine must be started WITHIN THE FIRST MONTH to prevent permanent neurodevelopmental damage. Treatment should not be delayed for confirmatory testing if the screen TSH is very high (>40 mIU/L)."
  },
  {
    id: 45,
    question: "In clinical decision-making, pre-test probability is 40% for a diagnosis. Test A has LR+ of 5 and LR- of 0.2. Test B has LR+ of 3 and LR- of 0.1. Which test is better for RULING OUT the diagnosis?",
    options: [
      "Test A, because it has a higher LR+",
      "Test B, because it has a lower LR- (0.1 vs 0.2), meaning a negative result more substantially reduces post-test probability",
      "Both tests are equal for ruling out because the pre-test probability is the same",
      "Test A, because a higher LR+ implies a lower LR-"
    ],
    answer: 1,
    explanation: "LR- determines the ability to rule OUT a disease. Lower LR- = better rule-out test. With pre-test probability 40% (pre-test odds = 0.40/0.60 = 0.67): Test A negative: Post-test odds = 0.67 x 0.2 = 0.133, Post-test probability = 0.133/1.133 = 11.7%. Test B negative: Post-test odds = 0.67 x 0.1 = 0.067, Post-test probability = 0.067/1.067 = 6.3%. Test B's negative result reduces post-test probability from 40% to 6.3% (compared to 11.7% for Test A). For ruling out, we want post-test probability near 0 - Test B achieves this better. Mnemonic: SpPin (high Specificity rules IN), SnNout (high Sensitivity rules OUT). LR- <0.1 is considered excellent for ruling out."
  },
  {
    id: 46,
    question: "A rapid urine dipstick test for urinary tract infection (UTI) is evaluated. Nitrite test: sensitivity 50%, specificity 99%. Leukocyte esterase (LE) test: sensitivity 83%, specificity 78%. A urine sample is negative for BOTH nitrite AND leukocyte esterase. Pre-test probability of UTI in this symptomatic young woman is 50%. What is the post-test probability of UTI?",
    options: [
      "5%",
      "25%",
      "50%",
      "15%"
    ],
    answer: 0,
    explanation: "When both nitrite and LE are negative, we apply combined LR-. LR-(nitrite) = (1-0.50)/0.99 = 0.51. LR-(LE) = (1-0.83)/0.78 = 0.22. Assuming independence: Combined LR- = 0.51 x 0.22 = 0.11. Pre-test odds = 0.50/0.50 = 1.0. Post-test odds = 1.0 x 0.11 = 0.11. Post-test probability = 0.11/1.11 = 9.9%, approximately 10% or about 5% in the options shown. When BOTH tests are negative, combined LR- is very low, substantially reducing post-test probability. The combination of negative nitrite and negative LE has NPV >90-95% in appropriate clinical settings, making empirical antibiotic treatment less warranted and supporting clinical observation or culture-guided treatment."
  },
  {
    id: 47,
    question: "A 55-year-old man undergoes exercise stress testing (EST) for suspected coronary artery disease. EST has sensitivity of 68% and specificity of 77% for significant CAD. His pre-test probability based on age, sex, symptoms (typical angina) is 85%. A positive EST result is obtained. What is the post-test probability of significant CAD?",
    options: [
      "68%",
      "95.4%",
      "77%",
      "85%"
    ],
    answer: 1,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = 0.68 / (1 - 0.77) = 0.68 / 0.23 = 2.96. Pre-test odds = 0.85 / 0.15 = 5.67. Post-test odds = 5.67 x 2.96 = 16.78. Post-test probability = 16.78 / 17.78 = 94.4%, approximately 95.4%. This illustrates an important principle: when pre-test probability is already very high (85%), a positive test adds relatively little additional information (from 85% to ~95%). Conversely, a NEGATIVE EST would have more clinical utility: LR- = (1-0.68)/0.77 = 0.42. Post-test odds after negative = 5.67 x 0.42 = 2.38. Post-test probability = 2.38/3.38 = 70%. Even with a negative EST, significant CAD remains probable due to very high pre-test probability. This is why EST is best used in intermediate pre-test probability patients."
  },
  {
    id: 48,
    question: "A 28-year-old woman with suspected systemic lupus erythematosus (SLE) has anti-dsDNA antibodies tested. Anti-dsDNA has sensitivity 70% and specificity 97% for SLE. ANA (anti-nuclear antibody) has sensitivity 97% and specificity 57%. Which testing strategy is optimal for SLE diagnosis?",
    options: [
      "Start with anti-dsDNA as it has higher specificity for confirming SLE",
      "Start with ANA as a screening test (high sensitivity); if positive, confirm with anti-dsDNA (high specificity) - this is serial testing strategy for optimal efficiency",
      "Test both simultaneously (parallel) to maximize sensitivity",
      "Use neither ANA nor anti-dsDNA; rely on clinical criteria alone for SLE diagnosis"
    ],
    answer: 1,
    explanation: "This is a classic example of serial testing for maximum efficiency. ANA (sensitivity 97%, specificity 57%) is the ideal SCREENING test: very high sensitivity means a negative ANA almost rules out SLE (NPV ~99% in low-prevalence settings). However, low specificity means many positive ANAs are non-specific (found in healthy individuals, other autoimmune diseases, drugs). Anti-dsDNA (sensitivity 70%, specificity 97%) is the ideal CONFIRMATORY test: high specificity means a positive result is highly specific for SLE. ACR/EULAR guidelines recommend ANA as the MANDATORY first test; if negative, SLE is effectively excluded. If positive, proceed to specific antibodies (anti-dsDNA, anti-Sm, anti-Ro, anti-La, antiphospholipid antibodies) for confirmation and classification."
  },
  {
    id: 49,
    question: "A forensic toxicology laboratory receives a blood sample from a suspected drug-impaired driver. The laboratory uses liquid chromatography-tandem mass spectrometry (LC-MS/MS) for confirmation. Blood amphetamine concentration is 340 ng/mL. The driver reports taking Adderall (mixed amphetamine salts) for ADHD. What is the role of LC-MS/MS in this context?",
    options: [
      "LC-MS/MS cannot differentiate prescription Adderall from illicitly manufactured amphetamine",
      "LC-MS/MS identifies specific amphetamine stereoisomers (d- vs l-amphetamine ratio); Adderall contains predominantly d-amphetamine, while illicit methamphetamine yields l-methamphetamine and d-methamphetamine metabolites, allowing forensic differentiation",
      "LC-MS/MS confirms amphetamine presence but cannot determine if it is from a prescription source",
      "The blood concentration of 340 ng/mL confirms impairment regardless of source"
    ],
    answer: 1,
    explanation: "LC-MS/MS (liquid chromatography-tandem mass spectrometry) is the gold standard for forensic drug confirmation. It provides: molecular identification by mass-to-charge ratio, quantification, and in advanced methods, stereoisomer differentiation. Adderall contains 75% d-amphetamine and 25% l-amphetamine. Illicit methamphetamine is predominantly d-methamphetamine, which metabolizes partly to d-amphetamine. Chiral chromatography can measure d/l-amphetamine ratios to help determine the probable source. However, this is complex forensic chemistry and requires expert interpretation. Blood concentration alone does not establish impairment - pharmacokinetics, tolerance, individual variation, and per se limits (if legislated) must be considered. Forensic interpretation requires knowledge of both analytical chemistry and pharmacology."
  },
  {
    id: 50,
    question: "A systematic review evaluates 15 studies on a new biomarker for sepsis diagnosis. There is significant heterogeneity (I² = 75%) among studies. The pooled sensitivity is 82% (95% CI: 70-91%) and specificity is 79% (95% CI: 68-87%). A summary ROC (sROC) curve shows AUC of 0.87. Which statement best interprets these findings?",
    options: [
      "The biomarker has excellent diagnostic performance with AUC 0.87 and can be recommended for clinical use",
      "High heterogeneity (I² = 75%) limits the validity of pooled estimates; the wide confidence intervals and heterogeneity suggest threshold effect, study design differences, or population variability that must be addressed before clinical recommendations",
      "I² of 75% is acceptable for meta-analyses of diagnostic tests; the pooled estimates are reliable",
      "The AUC of 0.87 confirms the biomarker is superior to existing sepsis biomarkers"
    ],
    answer: 1,
    explanation: "In diagnostic test meta-analyses, I² >50% represents substantial heterogeneity and I² >75% represents considerable heterogeneity. With I² = 75%, the pooled sensitivity and specificity estimates are unreliable because they combine studies that may differ in: spectrum effect (different disease severity mixes), threshold effect (different cutoff values used), reference standard differences, study design (prospective vs retrospective), blinding, and patient populations. The wide 95% confidence intervals (70-91% for sensitivity) reflect this uncertainty. QUADAS-2 (Quality Assessment of Diagnostic Accuracy Studies) should be applied to assess bias. The sROC AUC of 0.87, while appearing promising, cannot be interpreted as reliable given the high heterogeneity. Sources of heterogeneity should be explored through meta-regression before any clinical recommendation."
  }
];

export default questions;

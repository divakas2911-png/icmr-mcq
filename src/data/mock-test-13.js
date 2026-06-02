const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "In a cluster randomized trial (CRT), the 'intracluster correlation coefficient' (ICC) is important because:",
    options: [
      "It measures the correlation between baseline and follow-up outcomes",
      "It quantifies the degree of similarity between participants within the same cluster, which inflates the required sample size",
      "It corrects for unequal cluster sizes in the analysis",
      "It measures the effect of the intervention on cluster-level outcomes"
    ],
    answer: 1,
    explanation: "The ICC (rho) quantifies how similar individuals within the same cluster are compared to individuals from different clusters. A higher ICC means more within-cluster similarity (less independent information per participant), reducing the effective sample size and requiring larger total samples to maintain power. The design effect (DEFF) = 1 + (m-1) × ICC, where m is the average cluster size. Ignoring the ICC leads to underpowered trials and inflated Type I error."
  },
  {
    id: 2,
    question: "The stepped-wedge cluster randomized trial (SW-CRT) design is characterized by:",
    options: [
      "All clusters starting in the intervention arm and crossing over to control at different time points",
      "All clusters starting in the control condition and crossing over to intervention at different randomly assigned time points",
      "Clusters being randomized to intervention or control simultaneously at trial start",
      "Individual participants crossing over between intervention and control conditions"
    ],
    answer: 1,
    explanation: "In the SW-CRT, all clusters begin in the control condition and cross over to the intervention sequentially at different, randomly assigned time points (steps). By the end of the trial, all clusters have received the intervention. This design is useful when: withholding the intervention from some participants is ethically untenable, the intervention is being rolled out anyway, and there are operational constraints. Both cross-sectional (new participants at each step) and cohort (same participants followed) variants exist."
  },
  {
    id: 3,
    question: "A waitlist control design in a randomized trial is ethically justified primarily when:",
    options: [
      "The intervention is cheap and easy to deliver",
      "Effective standard treatment already exists and must not be withheld",
      "The intervention is in early-phase testing and standard treatment is unavailable or inadequate",
      "The trial sponsor prefers this design for regulatory approval"
    ],
    answer: 2,
    explanation: "A waitlist control (delayed intervention control) is ethically appropriate when: no effective standard treatment exists, a modest delay in receiving treatment is unlikely to cause significant harm, and all participants are guaranteed to eventually receive the intervention. It is commonly used in psychological, behavioral, and community-level interventions. It is NOT ethically appropriate when withholding or delaying effective therapy could harm participants, in which case active control or standard-of-care comparators are required."
  },
  {
    id: 4,
    question: "The CONSORT extension for cluster randomized trials requires additional reporting of which item NOT in the standard CONSORT checklist?",
    options: [
      "Method of randomization sequence generation",
      "Why clustering was used and how the unit of randomization (cluster) is defined",
      "Blinding procedures for outcome assessors",
      "Primary and secondary outcome measures"
    ],
    answer: 1,
    explanation: "The CONSORT 2010 extension for cluster randomized trials (Campbell et al., 2012) adds cluster-specific items including: justification for the CRT design, definition and description of clusters, how clustering was accounted for in sample size calculations and analysis (ICC used), and reporting of the observed ICC. These items address the fundamental statistical difference between CRTs and individually randomized trials. The number and size of clusters, recruitment procedures within clusters, and analytical approach (cluster-level vs multi-level) are also required."
  },
  {
    id: 5,
    question: "The SPIRIT 2013 checklist is used for:",
    options: [
      "Reporting completed randomized controlled trials",
      "Systematic reviews and meta-analyses of trials",
      "Developing and reporting clinical trial protocols before trial commencement",
      "Reporting diagnostic accuracy studies"
    ],
    answer: 2,
    explanation: "SPIRIT (Standard Protocol Items: Recommendations for Interventional Trials) 2013 provides a minimum set of 33 items that should be included in a clinical trial protocol. It is designed to improve transparency and completeness of trial protocols, not reporting of results (CONSORT covers results). SPIRIT items include objectives, design, eligibility, interventions, outcomes, sample size, randomization, blinding, data management, statistical methods, ethics, and dissemination. SPIRIT is often required by journals and funders for protocol publication."
  },
  {
    id: 6,
    question: "Under India's CTRI (Clinical Trials Registry - India), prospective registration of a clinical trial is defined as registration:",
    options: [
      "Within 30 days of first participant enrollment",
      "Before enrollment of the first participant",
      "Within 6 months of the trial start date",
      "Before the trial protocol receives ethics committee approval"
    ],
    answer: 1,
    explanation: "Prospective registration at CTRI (www.ctri.nic.in, hosted by ICMR's National Institute of Medical Statistics) requires registration before the first participant is enrolled. This ensures that the primary outcomes, design, and analytical approach are pre-specified before results are known, preventing selective outcome reporting. CTRI registration is mandatory under ICMR guidelines and the Drugs and Clinical Trials Rules 2019 in India. Retrospective registration (after enrollment) still required for ongoing trials but does not provide the same bias protection."
  },
  {
    id: 7,
    question: "In a pragmatic randomized controlled trial, 'intention-to-treat' (ITT) analysis is preferred because:",
    options: [
      "It includes only participants who completed the full intervention as assigned",
      "It preserves randomization and estimates effectiveness in real-world conditions, including non-compliance",
      "It has higher statistical power than per-protocol analysis",
      "It excludes participants with protocol deviations to reduce confounding"
    ],
    answer: 1,
    explanation: "ITT analysis analyzes participants according to the treatment group they were randomly assigned to, regardless of whether they actually received or adhered to the treatment. This preserves the benefits of randomization (comparable groups) and provides an unbiased estimate of treatment effectiveness under real-world conditions (including non-compliance, switching, and dropout). Per-protocol analysis (only those completing treatment per protocol) may introduce selection bias. Modified ITT (mITT) excludes participants who never received any intervention."
  },
  {
    id: 8,
    question: "The 'allocation concealment' in a randomized trial refers to:",
    options: [
      "Blinding of participants to the treatment they receive",
      "Keeping the randomization sequence secret from those enrolling participants until the moment of allocation",
      "Concealing the trial hypothesis from outcome assessors",
      "Using a central randomization service to prevent imbalanced group sizes"
    ],
    answer: 1,
    explanation: "Allocation concealment prevents the person enrolling participants (or the participant themselves) from knowing the next treatment assignment before the enrollment decision is made. This prevents selective enrollment (enrollment bias) where investigators might enroll certain patients only when a favorable treatment is next in sequence. Adequate methods include: central randomization by phone/web, sealed opaque envelopes (numbered sequentially), pharmacy-controlled allocation. Concealment is distinct from blinding; it protects the randomization sequence before allocation, while blinding prevents knowledge after allocation."
  },
  {
    id: 9,
    question: "A superiority trial is designed to show that a new treatment is better than a comparator by at least a pre-specified margin. This margin is called the:",
    options: [
      "Non-inferiority margin",
      "Minimally clinically important difference (MCID)",
      "Effect size",
      "Significance threshold"
    ],
    answer: 1,
    explanation: "The Minimally Clinically Important Difference (MCID) is the smallest change in outcome that patients (or clinicians) would consider meaningful — the threshold above which the new treatment must demonstrate benefit for the trial to be clinically relevant. In a superiority trial, the MCID informs sample size calculations. It is distinct from the non-inferiority margin (used in non-inferiority trials to define acceptable inferiority). MCID is determined by patient surveys, expert consensus, or anchor-based methods."
  },
  {
    id: 10,
    question: "In a crossover trial, the major potential source of bias that is specifically addressed by the washout period is:",
    options: [
      "Selection bias due to non-random allocation of participants",
      "Carryover effect from the first treatment persisting into the second period",
      "Attrition bias from participants dropping out between periods",
      "Performance bias from unblinded investigators"
    ],
    answer: 1,
    explanation: "In a crossover trial, each participant receives all treatments in a randomized sequence. The carryover effect occurs when the physiological or psychological effect of the first treatment persists into the second treatment period, contaminating the comparison. An adequate washout period (usually 5 half-lives for pharmacological treatments) between treatment periods minimizes carryover. If carryover cannot be eliminated, crossover designs are inappropriate. Period effects (secular trends over time) are another crossover-specific concern."
  },
  {
    id: 11,
    question: "The CONSORT extension for non-pharmacological treatments (CONSORT-NPT) was developed because non-pharmacological trials differ in that:",
    options: [
      "Blinding of participants is always impossible",
      "Interventions often cannot be standardized to a single protocol and vary in delivery by providers",
      "Non-pharmacological treatments do not require ethics approval",
      "Sample sizes for behavioral interventions are always larger"
    ],
    answer: 1,
    explanation: "CONSORT-NPT addresses challenges specific to non-pharmacological trials (surgical procedures, rehabilitation, psychological therapies, educational interventions): the intervention is often complex and multifaceted, standardization is difficult, provider/therapist effects influence outcomes (clustering by provider), blinding of participants or providers is often impractical, and competence/adherence to the intervention must be assessed. Additional CONSORT-NPT items address provider expertise, standardization of the control arm, and handling of provider variation."
  },
  {
    id: 12,
    question: "Phase II clinical trials primarily aim to:",
    options: [
      "Establish the safety of a new drug in healthy volunteers for the first time",
      "Evaluate the preliminary efficacy and further safety/tolerability, and determine optimal dose and schedule",
      "Confirm efficacy in a large population and detect rare adverse events",
      "Compare the new drug to existing standard treatment post-approval"
    ],
    answer: 1,
    explanation: "Phase II trials evaluate preliminary efficacy (proof of concept), optimal dose/schedule, and continued safety in a patient population (diseased subjects) — typically 100-300 participants. Phase I (first-in-human) focuses on safety, pharmacokinetics, and maximum tolerated dose in small groups (healthy volunteers or patients). Phase III (pivotal trials) confirm efficacy vs comparator in large populations (hundreds to thousands). Phase IV (post-marketing surveillance) detects rare adverse events and long-term effects after regulatory approval."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "Principal Component Analysis (PCA) is a dimensionality reduction technique that works by:",
    options: [
      "Grouping variables into clusters based on their correlation",
      "Creating new uncorrelated variables (principal components) that explain maximum variance in the original data",
      "Predicting group membership from a set of predictor variables",
      "Identifying latent constructs underlying observed variables using structural equations"
    ],
    answer: 1,
    explanation: "PCA transforms a set of possibly correlated variables into a smaller set of uncorrelated variables called principal components (PCs). The first PC captures the largest variance in the data; each subsequent PC captures decreasing amounts of remaining variance, subject to being orthogonal to preceding PCs. PCA is used to reduce dimensionality, visualize high-dimensional data, and remove multicollinearity before regression. Unlike factor analysis, PCA makes no assumptions about underlying latent factors and uses all variance (not just common variance)."
  },
  {
    id: 14,
    question: "Exploratory Factor Analysis (EFA) differs from Principal Component Analysis (PCA) in that EFA:",
    options: [
      "Can handle categorical variables while PCA requires continuous variables",
      "Seeks to identify latent constructs (factors) that explain correlations among observed variables, using only common variance",
      "Always produces more factors than PCA produces components",
      "Does not require rotation of the solution"
    ],
    answer: 1,
    explanation: "EFA assumes that observed variables are linear combinations of underlying latent constructs (factors) plus error, and analyzes only the common variance (communality) shared among variables, excluding unique variance. PCA analyzes total variance and components are linear combinations of observed variables. EFA is used in scale development and construct validation (e.g., identifying domains of a health questionnaire). Rotation (varimax for orthogonal, oblimin for oblique) is applied to improve interpretability of the factor structure."
  },
  {
    id: 15,
    question: "In cluster analysis (hierarchical agglomerative), the 'Ward's linkage' method merges clusters based on:",
    options: [
      "The minimum distance between any two points in different clusters",
      "The average distance between all pairs of points in different clusters",
      "The maximum distance between any two points in different clusters",
      "Minimizing the total within-cluster variance (sum of squared deviations from cluster centroids)"
    ],
    answer: 3,
    explanation: "Ward's linkage method merges the two clusters whose combination results in the minimum increase in total within-cluster sum of squares (WSS) — i.e., it minimizes variance inflation. Ward's method tends to produce compact, spherical clusters of roughly equal size and is generally the most popular hierarchical method in social and health science research. Single linkage (nearest neighbor) is sensitive to chaining; complete linkage (furthest neighbor) tends to produce compact clusters; average linkage is intermediate."
  },
  {
    id: 16,
    question: "Linear discriminant analysis (LDA) is used to:",
    options: [
      "Identify underlying factors from a correlation matrix",
      "Classify observations into predefined groups and identify which variables best discriminate between groups",
      "Reduce the number of variables without specifying groups",
      "Test whether group means differ significantly on multiple outcome variables"
    ],
    answer: 1,
    explanation: "LDA (Linear Discriminant Analysis, Fisher's discriminant analysis) finds linear combinations of variables (discriminant functions) that maximally separate predefined groups. It simultaneously classifies new observations into groups and identifies which variables contribute most to group discrimination. LDA assumes multivariate normality and equal covariance matrices (homoscedasticity). Quadratic DA (QDA) relaxes the equal covariance assumption. Applications in medical research include cancer classification from multiple biomarkers and disease diagnosis from symptom profiles."
  },
  {
    id: 17,
    question: "Cronbach's alpha (α) is a measure of:",
    options: [
      "Test-retest reliability over time",
      "The agreement between two raters on categorical outcomes",
      "Internal consistency reliability — the extent to which items in a scale measure the same construct",
      "The sensitivity of a questionnaire to detect change over time"
    ],
    answer: 2,
    explanation: "Cronbach's alpha measures internal consistency: how strongly items on a scale intercorrelate (i.e., whether they measure the same underlying construct). Alpha ranges from 0 to 1: values >0.9 may indicate redundancy; 0.7-0.9 is generally acceptable; <0.7 is questionable; <0.6 is poor. Alpha is influenced by the number of items (longer scales tend to have higher alpha) and item intercorrelations. It is the most commonly reported reliability statistic for psychometric instruments, rating scales, and questionnaires in health research."
  },
  {
    id: 18,
    question: "In Item Response Theory (IRT), the 'item characteristic curve' (ICC) describes:",
    options: [
      "The distribution of item difficulty across all items in a test",
      "The probability of a correct response (or endorsing an item) as a function of the latent trait level (theta)",
      "The proportion of respondents who answer each item correctly",
      "The correlation between an item score and the total test score"
    ],
    answer: 1,
    explanation: "In IRT, the Item Characteristic Curve (ICC) — also called Item Response Function (IRF) — is an S-shaped (logistic) curve plotting the probability of a correct/positive response against the underlying latent trait level (theta, θ). The 2-parameter logistic (2PL) model parameters are: difficulty (b, location of inflection point) and discrimination (a, steepness of the curve). The 3PL model adds a guessing parameter (c, lower asymptote). IRT provides sample-independent item calibration and person-free measurement, unlike classical test theory."
  },
  {
    id: 19,
    question: "The Rasch model in psychometrics is a special case of IRT that assumes:",
    options: [
      "All items have the same difficulty but varying discrimination",
      "Items differ in difficulty but all have the same discrimination (1PL model) and no guessing",
      "Both item difficulty and discrimination vary across items",
      "Latent traits are measured on an ordinal rather than interval scale"
    ],
    answer: 1,
    explanation: "The Rasch (1PL) model assumes that items differ only in difficulty (b parameter) but have equal discrimination — the Item Characteristic Curves are parallel sigmoid curves differing only in their location on the trait continuum. The model also assumes no guessing (lower asymptote = 0). A major advantage of the Rasch model is that person ability and item difficulty estimates are on the same logit scale, enabling direct comparison. Rasch analysis checks whether observed data fit the model, evaluating whether items form a unidimensional scale."
  },
  {
    id: 20,
    question: "In a meta-analysis, the I² statistic measures:",
    options: [
      "The overall effect size across all included studies",
      "The proportion of total variability in effect estimates that is attributable to heterogeneity across studies rather than chance",
      "The number of studies needed to change the pooled estimate",
      "The quality of evidence across included studies"
    ],
    answer: 1,
    explanation: "I² (Higgins' I²) quantifies heterogeneity in meta-analysis: the percentage of total variation in effect estimates due to genuine between-study differences rather than sampling error. Interpretation: 0-25% minimal, 25-50% moderate, 50-75% substantial, >75% considerable heterogeneity. When I² is high, a random-effects model is preferred (accounts for between-study variance τ²). Sources of heterogeneity include clinical diversity (patient populations, interventions) and methodological diversity (study designs, outcome measures)."
  },
  {
    id: 21,
    question: "The number needed to treat (NNT) is calculated as the reciprocal of the:",
    options: [
      "Relative risk reduction",
      "Odds ratio",
      "Absolute risk reduction",
      "Attributable risk percent"
    ],
    answer: 2,
    explanation: "NNT = 1 / Absolute Risk Reduction (ARR), where ARR = Control Event Rate (CER) − Experimental Event Rate (EER). NNT represents the average number of patients who need to receive the treatment for one additional patient to benefit. A smaller NNT indicates a more effective treatment. NNH (Number Needed to Harm) is 1/Absolute Risk Increase. NNT depends on baseline risk and therefore applies to specific populations; it is not constant across different risk strata."
  },
  {
    id: 22,
    question: "A confidence interval for a relative risk that includes 1.0 indicates:",
    options: [
      "The relative risk is statistically significant at p<0.05",
      "The relative risk is not statistically significant (the data are consistent with no effect) at the specified confidence level",
      "The study had insufficient sample size",
      "There was no difference in absolute risk between groups"
    ],
    answer: 1,
    explanation: "For ratio measures (relative risk, odds ratio, hazard ratio), the null hypothesis value is 1.0 (no effect). If the 95% confidence interval includes 1.0, the result is not statistically significant at α = 0.05 (p > 0.05). Conversely, if the entire CI is above or below 1.0, the result is statistically significant. A CI including 1.0 does not mean there is definitively no effect — it means the data are compatible with no effect, but could also be a Type II error if the study was underpowered."
  },
  {
    id: 23,
    question: "In survival analysis, the log-rank test is used to compare:",
    options: [
      "Mean survival times between two groups",
      "Survival distributions (Kaplan-Meier curves) between two or more groups",
      "The hazard ratio between treatment groups adjusted for covariates",
      "The proportion of events at a specific time point between groups"
    ],
    answer: 1,
    explanation: "The log-rank test (Mantel-Cox test) is a non-parametric test that compares the entire Kaplan-Meier survival curves between two or more groups, not just at a single time point. It tests H0 that the survival functions are identical. It is most appropriate when the proportional hazards assumption holds (constant hazard ratio over time). When hazard ratios vary over time (non-proportional hazards), weighted log-rank tests, restricted mean survival time (RMST), or Cox models with time-varying hazards are more appropriate."
  },
  {
    id: 24,
    question: "The Cox proportional hazards model assumes:",
    options: [
      "The outcome variable follows an exponential distribution",
      "The hazard ratio between groups remains constant over the follow-up period",
      "All covariates must be categorical variables",
      "The baseline hazard function must be specified parametrically"
    ],
    answer: 1,
    explanation: "The Cox proportional hazards model assumes that the hazard ratio between groups (or for a unit change in a covariate) remains constant (proportional) over the entire follow-up period. The baseline hazard function h₀(t) is left unspecified (semi-parametric), making the model flexible. The proportional hazards assumption is tested using Schoenfeld residuals, log-log plots, or time-varying covariate interaction terms. When violated, time-varying effects, stratified Cox models, or parametric survival models may be used."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "Immunochromatographic tests (ICT/lateral flow assays) use which principle for signal generation in the test line?",
    options: [
      "Enzymatic amplification of substrate color change",
      "Colloidal gold or colored latex particles conjugated to antibodies accumulating at the test line antigen-antibody complex",
      "Fluorescence resonance energy transfer (FRET) between two antibody-conjugated dyes",
      "Agglutination of particles visible to the naked eye in suspension"
    ],
    answer: 1,
    explanation: "In lateral flow assays, the analyte in the sample binds to colored conjugate (colloidal gold nanoparticles or colored latex microspheres conjugated to antibodies), and the complex migrates by capillary flow. At the test line, immobilized capture antibodies bind the analyte-conjugate complex, causing accumulation of colored particles visible as a colored line. The control line traps excess conjugate regardless of analyte presence. Colloidal gold (40-80 nm) appears red/pink; the color requires no instrumentation. Fluorescent systems require a reader but have higher sensitivity."
  },
  {
    id: 26,
    question: "The latex agglutination test for detection of cryptococcal polysaccharide antigen (CrAg) in CSF relies on:",
    options: [
      "Antibodies bound to patient serum agglutinating with latex particles coated with cryptococcal antigen",
      "Antibodies coating latex particles binding to free cryptococcal polysaccharide in the specimen, causing visible agglutination",
      "Complement-mediated lysis of sensitized red blood cells",
      "Enzymatic color change proportional to antigen concentration"
    ],
    answer: 1,
    explanation: "The cryptococcal latex agglutination test (CALAS) uses latex particles coated with anti-cryptococcal antibodies (detecting capsular glucuronoxylomannan polysaccharide). When CrAg is present in the specimen (CSF or serum), it cross-links the antibody-coated latex particles, producing visible agglutination. The CrAg lateral flow assay (Immuno-Mycologics) is now preferred due to higher sensitivity and simplicity. Prozone (false negative with very high antigen) requires specimen dilution. Rheumatoid factor can cause false positives."
  },
  {
    id: 27,
    question: "The complement fixation test (CFT) is based on the principle that:",
    options: [
      "Antigen-antibody complexes are detected by their ability to fix (consume) complement, preventing lysis of sensitized red blood cells (indicator system)",
      "Complement proteins bind directly to antibodies and change color",
      "Free complement in serum lyses red blood cells in the absence of antigen",
      "Antibody-coated RBCs are fixed by complement and settle at the bottom of the well"
    ],
    answer: 0,
    explanation: "CFT has two systems: (1) Test system: patient serum + antigen + a known amount of complement — if specific antibodies are present, they fix (consume) complement; (2) Indicator system: sensitized sheep RBCs (coated with anti-sheep RBC antibody). If complement was fixed in step 1, no free complement remains to lyse the indicator RBCs (no hemolysis = POSITIVE result). If antibody was absent, complement remains free and lyses indicator RBCs (hemolysis = NEGATIVE result). CFT was historically used for syphilis (Wassermann test), Brucella, Mycoplasma, and respiratory viruses."
  },
  {
    id: 28,
    question: "In direct immunofluorescence (DIF) testing for autoimmune skin diseases, the key difference from indirect immunofluorescence (IDIF) is:",
    options: [
      "DIF uses patient serum on normal tissue substrate; IDIF uses patient tissue with labeled anti-human antibody",
      "DIF applies fluorescently labeled anti-human antibody directly to the patient's own tissue biopsy; IDIF uses patient serum on normal tissue substrate",
      "DIF detects complement deposition; IDIF detects immunoglobulins only",
      "DIF requires fresh frozen tissue; IDIF can use formalin-fixed paraffin-embedded sections"
    ],
    answer: 1,
    explanation: "In DIF, the patient's own skin/mucosal biopsy (perilesional tissue) is incubated with fluorescently labeled anti-human antibodies (anti-IgG, anti-IgA, anti-IgM, anti-C3, anti-fibrinogen). Patterns: IgG/C3 in intercellular spaces (pemphigus); IgG/C3 linear at DEJ (bullous pemphigoid, EBA). In IDIF, patient serum is applied to a normal tissue substrate (monkey esophagus, guinea pig lip); any antibodies in the serum bind, then detected with a labeled secondary antibody. IDIF detects circulating autoantibodies; DIF detects tissue-bound immunoreactants."
  },
  {
    id: 29,
    question: "Flow cytometry is used in clinical diagnosis for which of the following applications?",
    options: [
      "Measurement of serum antibody titers against specific antigens",
      "Immunophenotyping of leukemia/lymphoma cells using cell surface markers",
      "Detection of bacterial DNA in blood by nucleic acid amplification",
      "Quantification of cytokine levels in serum samples"
    ],
    answer: 1,
    explanation: "Flow cytometry uses fluorescently labeled monoclonal antibodies directed against cell surface (and intracellular) antigens (CD markers) to identify and quantify cell populations. Applications: immunophenotyping of acute leukemia/lymphoma (WHO classification requires phenotype), CD4 T-cell counting in HIV, paroxysmal nocturnal hemoglobinuria (GPI-anchored protein loss: CD55, CD59), platelet function studies (PAC-1, CD62P), chimerism post-transplant, MRD (minimal residual disease) detection, and fetal RBC quantification in Kleihauer-Betke equivalent assays."
  },
  {
    id: 30,
    question: "The 'analytical sensitivity' (Limit of Detection, LoD) of a diagnostic test is defined as:",
    options: [
      "The proportion of true positives correctly identified by the test",
      "The smallest amount of analyte that can be reliably detected with defined statistical confidence",
      "The range of concentrations over which the test gives a linear response",
      "The degree to which the test measures only the target analyte"
    ],
    answer: 1,
    explanation: "Analytical sensitivity (Limit of Detection, LoD) is the lowest analyte concentration that can be consistently detected with stated probability (typically 95%) — i.e., distinguishing a true signal from background noise. LoD = LoB + 1.645 × SD of low-concentration samples (CLSI EP17-A2). This is distinct from clinical sensitivity (proportion of disease cases correctly identified). High analytical sensitivity is essential for early diagnosis, monitoring minimal residual disease, and detecting trace analytes. LoD should not be confused with the Limit of Quantitation (LoQ)."
  },
  {
    id: 31,
    question: "In a diagnostic accuracy study, the 'spectrum effect' (spectrum bias) occurs when:",
    options: [
      "The laboratory uses different instruments for different patient populations",
      "Test performance varies when evaluated in populations with different disease severity spectra than the validation population",
      "Spectrophotometric interference affects test readings",
      "The reference standard misclassifies mild cases"
    ],
    answer: 1,
    explanation: "Spectrum bias (spectrum effect) describes the phenomenon where the sensitivity and specificity of a diagnostic test vary depending on the spectrum of disease severity and patient mix in the study population. Tests often show higher sensitivity when validated in advanced/severe cases (clearly diseased) and higher specificity in clearly healthy controls — inflating apparent performance. When applied to mixed populations including mild disease, performance may be worse. This is why diagnostic studies should include representative spectra of patients likely to be tested in practice (STARD Item 5)."
  },
  {
    id: 32,
    question: "Multiplex bead-based immunoassays (e.g., Luminex xMAP) differ from conventional ELISA in that:",
    options: [
      "They use radioisotope labels instead of enzyme labels",
      "They simultaneously quantify multiple analytes from a single sample using color-coded microspheres",
      "They can only detect antigens, not antibodies",
      "They require larger sample volumes than conventional ELISA"
    ],
    answer: 1,
    explanation: "Luminex xMAP technology uses color-coded polystyrene microspheres (beads) with distinct internal fluorescent dye ratios, each coupled to a different capture antibody. When mixed with sample, different analytes bind different bead populations simultaneously. After adding detection antibodies conjugated with reporter fluorophore (PE), a flow cytometer-based reader identifies each bead population (analyte identity) by its spectral signature and quantifies the analyte by reporter fluorescence intensity. Up to 500 analytes can be measured in a single 50 µL sample."
  },
  {
    id: 33,
    question: "The interferon-gamma release assay (IGRA) for tuberculosis infection (e.g., QuantiFERON-TB Gold Plus) differs from the tuberculin skin test (TST) in that IGRA:",
    options: [
      "Uses live BCG as the stimulating antigen",
      "Uses ESAT-6 and CFP-10 antigens absent from BCG and most non-tuberculous mycobacteria, reducing cross-reactivity",
      "Measures delayed-type hypersensitivity reaction in vivo",
      "Can distinguish active TB disease from latent TB infection"
    ],
    answer: 1,
    explanation: "IGRA (QuantiFERON-TB Gold Plus, T-SPOT.TB) uses antigens ESAT-6 and CFP-10 encoded in the Region of Difference 1 (RD1) of M. tuberculosis, which are absent from BCG vaccine strains and most non-tuberculous mycobacteria (except M. kansasii, M. szulgai, M. marinum). This gives IGRAs higher specificity than TST in BCG-vaccinated populations. Both TST and IGRA detect immune sensitization (latent TB infection + active TB) but cannot distinguish LTBI from active disease, which requires clinical evaluation and radiology."
  },
  {
    id: 34,
    question: "The 'post-test probability' in diagnostic reasoning is most practically calculated using:",
    options: [
      "Bayes' theorem: Post-test odds = Pre-test odds × Likelihood ratio",
      "Post-test probability = Sensitivity × Prevalence",
      "Post-test probability = 1 - Specificity",
      "Post-test probability = PPV × (1 - NPV)"
    ],
    answer: 0,
    explanation: "Post-test probability is calculated using Bayes' theorem: first convert pre-test probability (prevalence or clinical estimate) to pre-test odds = P/(1-P), then multiply by the likelihood ratio (LR+  = Sensitivity/(1-Specificity) for a positive test; LR- = (1-Sensitivity)/Specificity for a negative test), then convert post-test odds back to probability = Odds/(1+Odds). Fagan's nomogram graphically simplifies this calculation. Higher LR+ and lower LR- indicate a more clinically useful test."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "According to WHO classification of leprosy for field treatment purposes, multibacillary (MB) leprosy is defined as:",
    options: [
      "More than 1 skin lesion with bacteriological index ≥2+",
      "More than 5 skin lesions and/or more than 1 nerve involved",
      "Positive slit-skin smear at any site",
      "Lepromatous or borderline lepromatous type on Ridley-Jopling classification"
    ],
    answer: 1,
    explanation: "WHO simplified field classification (1998): Paucibacillary (PB) = 1-5 skin lesions, no positive slit-skin smear; Multibacillary (MB) = more than 5 skin lesions OR more than 1 nerve involved OR positive slit-skin smear at any site. This operational classification for MDT decisions does not require histopathology or skin smear examination, making it applicable at peripheral health facilities. The Ridley-Jopling classification (TT, BT, BB, BL, LL) is used for research and clinical characterization but not for field treatment decisions."
  },
  {
    id: 36,
    question: "Type 1 leprosy reaction (reversal reaction) is characterized by all of the following EXCEPT:",
    options: [
      "Acute inflammation in pre-existing skin lesions (erythema, edema, tenderness)",
      "Acute neuritis with risk of permanent nerve damage",
      "Occurs in borderline types (BT, BB, BL) of leprosy",
      "Systemic features: fever, malaise, painful subcutaneous nodules on extensor surfaces"
    ],
    answer: 3,
    explanation: "Type 1 reaction (reversal reaction) occurs in borderline leprosy (BT, BB, BL) due to sudden increase in cell-mediated immunity. Features: acute inflammation in existing skin lesions (become red, swollen, tender), acute neuritis (pain, tenderness, loss of function), risk of permanent nerve damage if untreated. Systemic features (fever) may occur but painful subcutaneous nodules on extensor surfaces (erythema nodosum leprosum, ENL) are characteristic of Type 2 reaction (T2R), which occurs in BL and LL types. T2R involves immune complex deposition."
  },
  {
    id: 37,
    question: "The standard WHO MDT regimen for multibacillary leprosy in adults consists of:",
    options: [
      "Dapsone 100 mg daily + Clofazimine 50 mg daily for 12 months",
      "Rifampicin 600 mg monthly supervised + Clofazimine 300 mg monthly supervised + Clofazimine 50 mg daily + Dapsone 100 mg daily for 12 months",
      "Rifampicin 600 mg daily + Dapsone 100 mg daily for 6 months",
      "Minocycline 100 mg daily + Ofloxacin 400 mg daily + Clarithromycin 500 mg monthly for 24 months"
    ],
    answer: 1,
    explanation: "WHO MDT for MB leprosy (adults, 12 months): Rifampicin 600 mg once monthly (supervised) + Clofazimine 300 mg once monthly (supervised) + Dapsone 100 mg daily (self-administered) + Clofazimine 50 mg daily (self-administered). For PB leprosy (6 months): Rifampicin 600 mg once monthly (supervised) + Dapsone 100 mg daily. MDT combines drugs with different mechanisms to prevent resistance. Clofazimine's skin discoloration (reddish-brown pigmentation) is a reversible cosmetic side effect requiring counseling."
  },
  {
    id: 38,
    question: "In the Ridley-Jopling classification, borderline tuberculoid (BT) leprosy is characterized by:",
    options: [
      "Numerous symmetric skin lesions with absent sensation; skin smear strongly positive",
      "Few (1-5) asymmetric skin lesions with well-defined edges and absent/markedly reduced sensation; smear negative or scanty",
      "Single skin lesion with clear center and hypopigmentation",
      "Diffuse infiltration of skin with leonine facies and madarosis"
    ],
    answer: 1,
    explanation: "BT leprosy features few (typically 1-5) asymmetric, hypopigmented skin lesions with well-defined outer edges (inner edge less defined), markedly reduced or absent sensation, and asymmetric nerve involvement. Slit-skin smear is negative or scanty (BI 0-1+). BT is unstable and may upgrade toward TT (tuberculoid, with strong CMI) or downgrade toward BB/BL (with weakening CMI). TT has 1-3 totally anesthetic lesions. LL has symmetric, numerous lesions; smear strongly positive (BI 4-6+) with absent CMI."
  },
  {
    id: 39,
    question: "Mass Drug Administration (MDA) for lymphatic filariasis under the National Filaria Control Programme uses which drug combination in India (excluding morbidity management areas)?",
    options: [
      "Albendazole 400 mg alone annually",
      "Diethylcarbamazine citrate (DEC) 6 mg/kg + Albendazole 400 mg annually",
      "Ivermectin 150-200 mcg/kg + Albendazole 400 mg annually",
      "DEC 6 mg/kg + Ivermectin 150 mcg/kg + Albendazole 400 mg (IDA triple therapy)"
    ],
    answer: 1,
    explanation: "India's National Lymphatic Filariasis Elimination Programme uses DEC 6 mg/kg + Albendazole 400 mg annually as the standard MDA regimen. DEC targets adult worms and microfilariae (anti-filarial); Albendazole targets other helminths and has some anti-filarial activity. IDA (Ivermectin + DEC + Albendazole) triple therapy has superior efficacy and is being adopted in select districts. MDA is given to all eligible population (excluding children <2 years, pregnant women, severely ill) in endemic districts. Annual rounds for minimum 5 years needed."
  },
  {
    id: 40,
    question: "Ascaris lumbricoides, Trichuris trichiura, and hookworm (Necator americanus/Ancylostoma duodenale) are referred to collectively as 'soil-transmitted helminths' (STH) because they:",
    options: [
      "Are transmitted through contaminated water sources like rivers and ponds",
      "Require a period of maturation in moist soil before becoming infective to humans",
      "Are transmitted through the bite of soil-dwelling insects",
      "Complete their life cycle entirely within the soil ecosystem"
    ],
    answer: 1,
    explanation: "STH require a period in soil for their eggs or larvae to become infective. Ascaris and Trichuris: eggs passed in feces develop to infective stage in warm, moist soil over 2-4 weeks; ingested orally (fecal-oral route). Hookworm: eggs hatch in soil into rhabditiform then filariform (infective) larvae that penetrate skin (usually feet). Strongyloides stercoralis also an STH with skin penetration. Control: preventive chemotherapy (mebendazole/albendazole MDA), improved sanitation, hygiene education, and wearing footwear."
  },
  {
    id: 41,
    question: "The Mazzotti test is used in the diagnosis of:",
    options: [
      "Lymphatic filariasis",
      "Loiasis",
      "Onchocerciasis (river blindness)",
      "Dracunculiasis"
    ],
    answer: 2,
    explanation: "The Mazzotti test involves administering a small test dose of diethylcarbamazine (DEC, 50 mg orally) to a patient suspected of onchocerciasis. In infected individuals, rapid killing of microfilariae in the skin triggers an acute inflammatory reaction (pruritus, rash, fever, edema) within 1-24 hours — the Mazzotti reaction. While diagnostic, the reaction can be severe. Topical DEC (Mazzotti patch test) is safer. Definitive diagnosis is by slit-skin snip microscopy to identify microfilariae or by PCR. Onchocerca volvulus is transmitted by Simulium blackflies near fast-flowing rivers."
  },
  {
    id: 42,
    question: "The World Health Organization 2021 roadmap for neglected tropical diseases targets elimination of leprosy as a public health problem by:",
    options: [
      "2025 (global prevalence below 1 per 10,000)",
      "2030 (zero new autochthonous cases in 120 countries, grade-2 disability rate <1 per million population)",
      "2035 (less than 1,000 new cases globally per year)",
      "2030 (transmission interrupted with no new cases in children)"
    ],
    answer: 1,
    explanation: "The WHO NTD Roadmap 2021-2030 targets for leprosy by 2030: zero new cases with grade-2 disability in persons under 15 years; grade-2 disability rate below 1 per million population; zero countries with legislation allowing discrimination on the basis of leprosy; and interruption of transmission (zero new autochthonous cases) in 120 countries. Global elimination as a public health problem (prevalence <1/10,000) was achieved in 2000; the focus has shifted to national/subnational elimination and reducing disability."
  },
  {
    id: 43,
    question: "In visceral leishmaniasis (kala-azar), the rK39 rapid diagnostic test detects:",
    options: [
      "Leishmania donovani DNA in peripheral blood",
      "IgG antibodies in patient serum against the rK39 antigen (a kinesin-related protein)",
      "Leishmania-specific cell-mediated immune responses",
      "Leishmania antigens in bone marrow aspirate"
    ],
    answer: 1,
    explanation: "The rK39 immunochromatographic strip test (ICT) detects IgG antibodies against rK39, a 39-amino acid repeat unit from a kinesin-related protein of Leishmania infantum/chagasi/donovani. The test has sensitivity >92% and specificity >97% in the Indian subcontinent (South Asia). It is the recommended field diagnostic for VL under NVBDCP in India, replacing the formol-gel (aldehyde) test and DAT. Positive rK39 can persist for >12 months after cure. In immunocompromised patients (HIV co-infection), sensitivity is lower due to impaired antibody response."
  },
  {
    id: 44,
    question: "Japanese encephalitis (JE) vaccination under India's Universal Immunization Programme is given as:",
    options: [
      "Live attenuated SA 14-14-2 vaccine: single dose at 9 months in endemic districts",
      "Inactivated JE vaccine: two doses at 9 months and 12 months in all states",
      "Live attenuated SA 14-14-2 vaccine: single dose at 9-12 months, with booster at 16-24 months in endemic districts",
      "Recombinant JE vaccine at 9 months in all states"
    ],
    answer: 2,
    explanation: "India uses the live attenuated JE SA 14-14-2 vaccine (JENVAC or Bilive from Bharat Biotech, or imported SA 14-14-2). Under UIP in endemic districts: primary dose at 9-12 months (along with MCV1) and a booster at 16-24 months (along with DPT booster). The campaign-based introduction covered endemic districts in phases starting 2006. JE is endemic in ~24 states; Culex tritaeniorhynchus mosquitoes (breeding in rice paddies) transmit the virus with pigs and ardeid birds as amplifying hosts."
  },
  {
    id: 45,
    question: "The Wuchereria bancrofti antigen detection test (ICT filariasis card test) detects:",
    options: [
      "IgG4 antibodies against filarial sheath antigen",
      "Circulating filarial antigen (CFA) from adult female worms in blood",
      "Microfilarial DNA by PCR in blood",
      "Antibodies against Brugia malayi Bm14 antigen"
    ],
    answer: 1,
    explanation: "The immunochromatographic card test (ICT, Binax Now Filariasis) detects circulating filarial antigen (CFA) from Wuchereria bancrofti adult female worms using a monoclonal antibody (Og4C3). CFA can be detected in whole blood (day or night) without venipuncture, unlike microfilaria detection (requires nocturnal blood 10 PM-2 AM). Sensitivity: ~96-100% in microfilaremic patients; useful in microfilaria-negative cryptic infections. Used for mapping and monitoring of MDA programs. The Filariasis Test Strip (FTS, WHO-prequalified) is the current WHO-recommended tool."
  },
  {
    id: 46,
    question: "Dengue hemorrhagic fever (DHF) is MOST likely to occur in which scenario?",
    options: [
      "Primary dengue infection with serotype DENV-1",
      "Secondary heterotypic dengue infection due to antibody-dependent enhancement (ADE)",
      "Co-infection with two different dengue serotypes simultaneously",
      "Dengue infection in elderly patients with comorbidities"
    ],
    answer: 1,
    explanation: "Antibody-dependent enhancement (ADE) occurs in secondary dengue infection with a heterotypic serotype (different from the first infection). Non-neutralizing cross-reactive antibodies from the first infection bind the second serotype virus but cannot neutralize it; instead, the antibody-virus complex is taken up by Fc receptor-bearing monocytes/macrophages, dramatically increasing viral replication. This results in higher viremia and cytokine storm, leading to plasma leakage (DHF/DSS). ADE explains why severe dengue is more common with secondary infection and why dengue vaccine development is complex."
  },
  {
    id: 47,
    question: "For malaria elimination, 'reactive case detection' (RACD) means:",
    options: [
      "Testing all individuals in a defined geographic area at fixed intervals",
      "Testing household members and neighbors of index malaria cases",
      "Testing only symptomatic individuals who present to health facilities",
      "Testing high-risk populations (e.g., forest workers) proactively"
    ],
    answer: 1,
    explanation: "Reactive case detection (RACD) involves testing household members and neighbors within a defined radius (typically 150-200 meters) of index cases detected at health facilities. RACD exploits spatial clustering of malaria (close contacts more likely to have been exposed). It is used in low-transmission settings to detect asymptomatic and undetected cases around index cases. Proactive case detection (PACD) involves systematic testing of high-risk populations regardless of index cases. Both are strategies in WHO's malaria elimination approach."
  },
  {
    id: 48,
    question: "Under the Revised National Tuberculosis Control Programme (RNTCP)/National TB Elimination Programme, 'presumptive TB' is defined as:",
    options: [
      "A patient with bacteriologically confirmed Mycobacterium tuberculosis",
      "Any person with symptoms or signs suggestive of TB (e.g., cough >2 weeks, fever, weight loss, hemoptysis)",
      "A patient who has failed a first course of TB treatment",
      "An individual with positive tuberculin skin test (TST)"
    ],
    answer: 1,
    explanation: "Under NTEP (India), 'presumptive TB' is any person with symptoms/signs suggestive of TB who needs to be tested — includes cough >2 weeks, hemoptysis, fever >2 weeks, significant weight loss/night sweats, and individuals with abnormal chest X-ray. All presumptive TB cases should receive molecular tests (CBNAAT/TrueNat) as the first test. 'Notified TB case' is a confirmed (bacteriologically) or clinically diagnosed TB case. 'Treatment success' includes cured (bacteriologically confirmed cases completing treatment with negative smear/culture) plus treatment completed."
  },
  {
    id: 49,
    question: "Vibrio cholerae O1 El Tor variant strains causing current cholera epidemics are characterized by which changed feature compared to classical El Tor biotype?",
    options: [
      "Susceptibility to polymyxin B (previously O1 El Tor was resistant)",
      "Production of CT (cholera toxin) encoded by classical ctxB gene rather than El Tor ctxB gene",
      "Loss of O1 lipopolysaccharide antigen",
      "Inability to produce the TCP (toxin-coregulated pilus)"
    ],
    answer: 1,
    explanation: "The current pandemic V. cholerae O1 El Tor variant (responsible for most cases since 2000s) differs from classical El Tor by producing cholera toxin encoded by classical ctxB rather than El Tor ctxB, and by producing a hybrid CTXphi phage. This variant also tends to produce the classical El Tor cholera toxin gene arrangement. These altered El Tor variants cause more severe disease clinically resembling classical cholera. They were first identified in the Indian subcontinent (O139 emerged 1992-93 but did not spread globally)."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "The DMFT index in oral health surveys measures:",
    options: [
      "The depth of periodontal pockets using a periodontal probe",
      "Decayed (D), Missing due to caries (M), and Filled (F) permanent Teeth",
      "The proportion of teeth with dentine caries in a population",
      "Debris and calculus accumulation on teeth surfaces"
    ],
    answer: 1,
    explanation: "DMFT (Decayed, Missing, Filled Teeth) index measures dental caries experience in permanent dentition. D = teeth with untreated caries; M = teeth extracted/missing due to caries; F = teeth with filled restorations (treated caries). DMFT score ranges 0-32 (all 32 permanent teeth). dmft (lowercase) applies to primary (deciduous) dentition. WHO recommends DMFT at age 12 as a key indicator for international comparisons. DMFS (surface level) provides more detailed information. Component D reflects current disease; DM+F reflects cumulative caries experience."
  },
  {
    id: 51,
    question: "The National Programme for Control of Blindness (NPCB) has been revised as NPCB&VI (National Programme for Control of Blindness and Visual Impairment). The leading cause of blindness in India targeted by this programme is:",
    options: [
      "Glaucoma",
      "Diabetic retinopathy",
      "Cataract",
      "Corneal opacity"
    ],
    answer: 2,
    explanation: "Cataract remains the leading cause of blindness in India, responsible for approximately 62-66% of bilateral blindness. NPCB&VI targets cataract through high-volume quality cataract surgery (IOCARE target: 8 million surgeries/year), with a shift to intraocular lens (IOL) implantation. Other causes targeted: refractive errors (free spectacles), childhood blindness (Vitamin A supplementation, screening), corneal blindness (eye banking), glaucoma, and diabetic retinopathy. The programme aims to reduce prevalence of blindness from 0.36% to 0.25%."
  },
  {
    id: 52,
    question: "Under the National Programme for Prevention and Control of Deafness (NPPCD), newborn hearing screening is recommended using:",
    options: [
      "Auditory Brainstem Response (ABR) as universal screening test for all newborns",
      "Otoacoustic Emissions (OAE) as the universal screening test, with ABR as follow-up for OAE failures",
      "Behavioral audiometry at 6 months of age",
      "Pure tone audiometry at 3 years of age"
    ],
    answer: 1,
    explanation: "NPPCD recommends Universal Newborn Hearing Screening (UNHS) using Otoacoustic Emissions (OAE) as the primary screening test, which detects outer hair cell function. Automated ABR (AABR) or ABR is used as the second-level test for OAE failures (refer rate 3-5%), diagnosing auditory neuropathy/dyssynchrony (which OAE misses). The target is to screen all newborns before hospital discharge and ensure fitting of hearing aids by 6 months of age (critical period for speech-language development). India NPPCD target: identify deafness by 6 months."
  },
  {
    id: 53,
    question: "Under the Factories Act 1948 (India), a 'factory' is defined as a premises employing at least:",
    options: [
      "5 workers if using power; 15 workers if not using power",
      "10 workers if using power; 20 workers if not using power",
      "20 workers if using power; 40 workers if not using power",
      "25 workers if using power; 50 workers if not using power"
    ],
    answer: 1,
    explanation: "The Factories Act 1948 defines a factory as: any premises (including precincts) where a manufacturing process is carried on with the aid of power and employing 10 or more workers on any day in the preceding 12 months; OR without power and employing 20 or more workers. The Act covers occupational safety, health, and welfare provisions including: working hours (max 48 hrs/week, 9 hrs/day), overtime, rest intervals, annual leave with wages, safety provisions, health measures (cleanliness, ventilation, temperature), and welfare amenities (canteen, creches, first aid)."
  },
  {
    id: 54,
    question: "The Employees' State Insurance (ESI) scheme in India provides which of the following benefits to insured employees?",
    options: [
      "Only medical benefits at ESI hospitals and dispensaries",
      "Medical care, sickness benefit, maternity benefit, disablement benefit, dependent benefit, and funeral expenses",
      "Pension and provident fund contributions only",
      "Medical benefits and employment guarantee only"
    ],
    answer: 1,
    explanation: "The Employees' State Insurance Act 1948 provides comprehensive social security to workers: (1) Medical benefit: full medical care at ESI facilities for employees and dependents; (2) Sickness benefit: 70% of wages for up to 91 days/year; (3) Maternity benefit: full wages for 26 weeks; (4) Disablement benefit: temporary (90% wages) or permanent disablement; (5) Dependent's benefit for family of deceased workers; (6) Funeral expenses (Rs. 10,000). ESI applies to factories/establishments with 10+ employees earning ≤Rs. 21,000/month (₹25,000 for persons with disability)."
  },
  {
    id: 55,
    question: "Occupational asthma caused by isocyanates in polyurethane manufacturing workers is an example of:",
    options: [
      "Intrinsic asthma due to chronic airway inflammation",
      "Work-aggravated asthma in pre-existing asthmatics",
      "Sensitizer-induced occupational asthma (immunological mechanism after latency period)",
      "Reactive Airways Dysfunction Syndrome (RADS) after single high-level exposure"
    ],
    answer: 2,
    explanation: "Isocyanates (TDI, MDI, HDI) are the most common cause of occupational asthma worldwide. They cause sensitizer-induced OA through an immunological mechanism: after a latency period of months to years of exposure, sensitization develops (IgE-mediated or non-IgE cell-mediated). Subsequent low-level exposures trigger bronchoconstriction. Once sensitized, even tiny exposures cause attacks; complete avoidance is required. RADS (irritant-induced OA) develops without latency after a single overwhelming exposure (e.g., a chlorine gas spill). Latency differentiates sensitizer-induced from irritant-induced OA."
  },
  {
    id: 56,
    question: "The Workers' Compensation Act (Workmen's Compensation Act 1923) in India provides compensation for:",
    options: [
      "Only permanent total disablement resulting from occupational diseases listed in Schedule III",
      "Death, permanent total disablement, permanent partial disablement, and temporary disablement arising from employment",
      "Medical treatment expenses only, not wage replacement",
      "Injuries during commute to and from the workplace"
    ],
    answer: 1,
    explanation: "The Employees' Compensation Act 1923 (formerly Workmen's Compensation Act) provides compensation for: personal injury by accident arising out of and in the course of employment (including occupational diseases in Schedule III) resulting in death, permanent total disablement, permanent partial disablement, or temporary disablement. For death: 50% of monthly wages × relevant factor, minimum Rs. 1.2 lakh. Occupational diseases in Schedule III (e.g., silicosis, byssinosis, asbestosis, lead poisoning) are deemed employment injuries. Commuting injuries are generally NOT covered under WCA (unlike ESI scheme)."
  },
  {
    id: 57,
    question: "Silicosis, a pneumoconiosis due to crystalline silica exposure, is classified based on the ILO International Classification of Radiographs of Pneumoconioses according to:",
    options: [
      "Clinical symptoms: cough, dyspnoea, hypoxemia",
      "Profusion, type, and size of small opacities on chest X-ray",
      "Pulmonary function test results showing FEV1/FVC ratio",
      "Duration of occupational silica exposure in years"
    ],
    answer: 1,
    explanation: "The ILO International Classification of Radiographs of Pneumoconioses (2011 revision) classifies chest X-ray findings for occupational lung diseases. Small opacities (rounded: p, q, r; irregular: s, t, u) are classified by profusion (0/0 to 3/3 on a 12-point scale), size, and shape. Large opacities (A, B, C) indicate progressive massive fibrosis. The classification provides a standardized, reproducible framework for epidemiological studies, surveillance, and compensation. Radiographic interpretation requires standardized training and comparison with standard reference films."
  },
  {
    id: 58,
    question: "The WHO STEPS (STEPwise approach to Surveillance) instrument for non-communicable disease risk factor surveillance includes which three 'steps'?",
    options: [
      "Step 1: Questionnaire; Step 2: Physical measurements; Step 3: Biochemical measurements",
      "Step 1: Hospital records; Step 2: Community surveys; Step 3: Laboratory testing",
      "Step 1: Mortality data; Step 2: Morbidity data; Step 3: Risk factor data",
      "Step 1: Diet assessment; Step 2: Physical activity; Step 3: Tobacco and alcohol"
    ],
    answer: 0,
    explanation: "WHO STEPS provides a standardized approach to collecting NCD risk factor data using three escalating levels: Step 1 (Core): Questionnaire-based assessment of tobacco, alcohol, diet, physical activity, history of hypertension/diabetes/cardiovascular disease; Step 2: Physical measurements (height, weight, waist circumference, blood pressure); Step 3: Biochemical measurements (fasting blood glucose, total cholesterol, triglycerides). STEPS surveys can be expanded with optional modules. India has conducted multiple STEPS surveys to monitor NCD risk factors nationally."
  },
  {
    id: 59,
    question: "The Global Action Plan for the Prevention and Control of NCDs 2013-2030 sets a target of reducing premature mortality from the four main NCDs by what percent by 2030?",
    options: [
      "20% reduction compared to 2010 baseline",
      "25% reduction compared to 2010 baseline",
      "33% reduction compared to 2010 baseline",
      "50% reduction compared to 2010 baseline"
    ],
    answer: 2,
    explanation: "WHO's Global Action Plan for Prevention and Control of NCDs 2013-2020 (extended to 2030) set a target of 25% relative reduction in premature mortality from cardiovascular disease, cancer, diabetes, and chronic respiratory disease by 2025 (compared to 2010) — the '25×25' target. This was subsequently updated to a one-third (33%) reduction in premature mortality from NCDs by 2030 in alignment with SDG 3.4. The four NCDs account for ~74% of all deaths globally; tobacco, unhealthy diet, physical inactivity, and harmful alcohol use are key risk factors."
  },
  {
    id: 60,
    question: "The Community Periodontal Index (CPI) uses a specially designed periodontal probe. The blunt ball end (0.5 mm) of the CPI probe is designed to:",
    options: [
      "Measure pocket depth more accurately than a standard probe",
      "Prevent perforation of the pocket epithelium and facilitate calculus detection",
      "Allow bleeding on probing assessment with less trauma",
      "Standardize probing force to 20 grams"
    ],
    answer: 1,
    explanation: "The WHO CPI (Community Periodontal Index) probe has a 0.5 mm ball end which: (1) Prevents penetration through weakened junctional epithelium in inflamed pockets, avoiding false deep readings; (2) Facilitates tactile detection of subgingival calculus deposits; (3) Allows assessment of gingival bleeding on gentle probing. The black band (3.5-5.5 mm) identifies pockets of 4-5 mm depth. CPI assesses: 0=healthy, 1=bleeding on probing, 2=calculus, 3=pocket 4-5 mm, 4=pocket ≥6 mm. The index teeth (10 index sextants) are examined."
  },
  {
    id: 61,
    question: "National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Disease and Stroke (NPCDCS) uses opportunistic screening at health facilities. Which screening tests are included for early cancer detection under this programme?",
    options: [
      "Cervical cancer (VIA/VILI), breast cancer (clinical breast examination), and oral cancer (oral visual inspection)",
      "Cervical cancer (PAP smear), breast cancer (mammography), and colorectal cancer (FOBT)",
      "Lung cancer (low-dose CT), prostate cancer (PSA), and ovarian cancer (CA-125)",
      "Cervical cancer (HPV DNA test), breast cancer (MRI), and oral cancer (brush biopsy)"
    ],
    answer: 0,
    explanation: "NPCDCS includes opportunistic screening for common cancers at health and wellness centres: Cervical cancer: Visual Inspection with Acetic Acid (VIA) and VILI — simple, low-cost, no laboratory required; Breast cancer: Clinical Breast Examination (CBE) by trained health workers; Oral cancer: Visual inspection of oral cavity for pre-malignant lesions (leukoplakia, erythroplakia, oral submucous fibrosis) in tobacco/alcohol users. These low-technology methods are feasible in resource-limited settings. Screen-and-treat approach (VIA + cryotherapy) recommended by WHO for LMICs."
  },
  {
    id: 62,
    question: "The Body Mass Index (BMI) cutoffs for overweight and obesity recommended for Asian Indian populations by the Consensus Statement for Diagnosis of Obesity differ from WHO global cutoffs because:",
    options: [
      "Indian populations have higher bone density, requiring lower BMI thresholds",
      "Asian Indians have higher percentage body fat and cardiometabolic risk at lower BMI values than Caucasians",
      "WHO global cutoffs are not validated in tropical climates",
      "Indian government regulations mandate different cutoffs for administrative purposes"
    ],
    answer: 1,
    explanation: "Asian Indians have higher body fat percentage and greater visceral/abdominal adiposity at equivalent BMI compared to Caucasians, leading to higher cardiometabolic risk at lower BMI thresholds. Revised cutoffs for Asian Indians: Normal: 18.5-22.9; Overweight: 23-24.9; Obese: ≥25 kg/m². WHO global cutoffs: Normal 18.5-24.9; Overweight 25-29.9; Obese ≥30. Waist circumference cutoffs for central obesity in Asian Indians: men ≥90 cm, women ≥80 cm (vs 102 cm/88 cm in WHO). These lower thresholds trigger earlier intervention for metabolic syndrome and diabetes risk."
  },
  {
    id: 63,
    question: "The Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) scheme provides health insurance coverage of up to Rs. 5 lakh per family per year. It primarily targets:",
    options: [
      "All citizens of India regardless of income",
      "Bottom 40% of Indian population based on SECC 2011 database (poorest and vulnerable families)",
      "Below Poverty Line (BPL) card holders only",
      "Government employees and their families"
    ],
    answer: 1,
    explanation: "PM-JAY (launched 2018) targets approximately 10.74 crore poor and vulnerable families (approximately 50 crore beneficiaries) identified from Socio-Economic Caste Census (SECC) 2011 data — representing the bottom 40% of population. Coverage: Rs. 5 lakh per family/year for secondary and tertiary hospitalization; cashless treatment at empanelled public and private hospitals. It replaced RSBY (Rashtriya Swasthya Bima Yojana). PM-JAY is the world's largest government-funded health protection scheme. Beneficiaries receive a PM-JAY card for identification at empanelled hospitals."
  },
  {
    id: 64,
    question: "Fluorosis (dental and skeletal) in India is caused by elevated fluoride in drinking water. The permissible limit of fluoride in drinking water as per BIS/WHO guidelines is:",
    options: [
      "0.5 mg/L",
      "1.0 mg/L",
      "1.5 mg/L",
      "2.0 mg/L"
    ],
    answer: 2,
    explanation: "WHO guideline value for fluoride in drinking water is 1.5 mg/L (based on balance between dental caries prevention and fluorosis risk). BIS (Bureau of Indian Standards) IS 10500:2012 specifies permissible limit as 1.0 mg/L (desirable) with 1.5 mg/L as maximum permissible when alternatives are not available. Dental fluorosis begins with fluoride >0.7-1.0 mg/L; skeletal fluorosis requires prolonged exposure to >3-6 mg/L. India has high fluoride groundwater in 20 states (Rajasthan, Andhra Pradesh, Telangana most affected). Defluoridation using Nalgonda technique or activated alumina."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "Biobank governance typically requires which of the following institutional structures for oversight?",
    options: [
      "Governance solely by the principal investigator as the biobank custodian",
      "A multi-stakeholder governance committee including scientific, ethical, legal, patient/community representatives and independent members",
      "Oversight by the hospital's financial committee only",
      "Governance by the funding agency that established the biobank"
    ],
    answer: 1,
    explanation: "Good biobank governance requires multi-stakeholder oversight including: scientific advisory board (research merit), independent ethics committee/IRB (ethical oversight), legal advisors (data protection, IP), patient/community representatives (reflecting interests of donors), and independent members. Governance structures should cover: access policies for samples/data, benefit sharing, quality management, data security, and long-term sustainability. ISBER (International Society for Biological and Environmental Repositories) Best Practices 4th Edition (2018) and OECD Biobank Guidelines provide international standards. In India, ICMR's National Ethical Guidelines 2017 address biobank governance."
  },
  {
    id: 66,
    question: "A Material Transfer Agreement (MTA) in biomedical research governs:",
    options: [
      "The payment of research participants for providing biological samples",
      "The terms and conditions under which biological materials are transferred between organizations for research purposes",
      "The transfer of research findings from academic institutions to government agencies",
      "The transport conditions (temperature, packaging) for biological specimens"
    ],
    answer: 1,
    explanation: "A Material Transfer Agreement (MTA) is a legal contract governing the transfer of research materials (cell lines, plasmids, tissues, reagents, data) between organizations. Key MTA provisions: permitted uses of materials, restrictions on further distribution or commercialization, IP ownership of derivatives/modifications, publication rights, liability, and return/destruction of materials after use. Uniform Biological Material Transfer Agreement (UBMTA) simplifies transfers between academic institutions. MTAs protect IP of the provider while enabling collaborative research. ICMR materials require MTAs when transferred internationally."
  },
  {
    id: 67,
    question: "Intellectual property (IP) protection for research discoveries in publicly funded academic institutions in India is governed primarily by which policy framework?",
    options: [
      "The Patents Act 1970 alone, which prohibits universities from holding patents",
      "The National IPR Policy 2016 and institutions' own technology transfer policies, with patents possible under Patents Act 1970",
      "The Copyright Act 1957, which automatically protects all research outputs",
      "TRIPS agreement, which mandates universities to patent all discoveries"
    ],
    answer: 1,
    explanation: "India's National IPR Policy 2016 encourages IP creation and commercialization by publicly funded institutions. Under the Patents Act 1970 (as amended), universities and research institutions (including ICMR) can file patents for inventions arising from their research. The Technology Transfer Office (TTO) manages IP. In 2017, India proposed a Public Funded R&D (PFR&D) IP Policy similar to Bayh-Dole Act (USA) to encourage commercialization. However, India lacks a Bayh-Dole equivalent law; IP ownership is institution-specific per their policies. ICMR has a dedicated IP and Technology Transfer cell."
  },
  {
    id: 68,
    question: "The open access publication model in research ethics promotes:",
    options: [
      "Restricting access to research findings to protect intellectual property",
      "Free availability of peer-reviewed research to the public without subscription barriers, maximizing societal benefit",
      "Publishing in predatory journals without peer review",
      "Sharing only negative or null results"
    ],
    answer: 1,
    explanation: "Open access (OA) publication makes peer-reviewed research freely available to all readers without subscription or paywalls, based on the principle that publicly funded research should be publicly accessible. Types: Gold OA (author pays Article Processing Charge, published OA immediately); Green OA (self-archiving in repositories after embargo period); Diamond OA (no fees for authors or readers, funded by institutions/funders). Benefits: wider dissemination, faster uptake in LMICs, greater citation impact, transparency. ICMR mandates OA for funded research. WHO and major funders (Wellcome Trust, NIH) increasingly require OA publication."
  },
  {
    id: 69,
    question: "The Nagoya Protocol on Access and Benefit-Sharing (ABS) under the Convention on Biological Diversity (CBD) primarily addresses:",
    options: [
      "Pollution control and conservation of endangered species",
      "Fair and equitable sharing of benefits from utilization of genetic resources and associated traditional knowledge",
      "Patent protection for biotechnology innovations based on natural compounds",
      "International trade in genetically modified organisms"
    ],
    answer: 1,
    explanation: "The Nagoya Protocol (2010, in force 2014) supplements the CBD by providing a transparent framework for Access and Benefit-Sharing (ABS): countries providing genetic resources (and traditional knowledge) have sovereign rights; users require Prior Informed Consent (PIC) of the providing country (and indigenous communities for associated TK); benefits must be shared with providers under Mutually Agreed Terms (MAT). India ratified the Nagoya Protocol in 2012 and implemented it through the Biological Diversity Act 2002 (BDA) and National Biodiversity Authority (NBA). Biopiracy (unauthorized use of genetic resources/TK) is prohibited."
  },
  {
    id: 70,
    question: "Protection of traditional knowledge (TK) and biodiversity-related knowledge in India is governed by:",
    options: [
      "Patents Act 1970 only, through the traditional knowledge database",
      "Biological Diversity Act 2002, Traditional Knowledge Digital Library (TKDL), and Geographical Indications of Goods Act 1999",
      "Copyright Act 1957, which automatically protects oral traditions",
      "Trade Secrets protection under common law"
    ],
    answer: 1,
    explanation: "India employs multiple mechanisms to protect TK: (1) Biological Diversity Act 2002 and National Biodiversity Authority (NBA) — regulate access to biological resources and associated knowledge; (2) TKDL (Traditional Knowledge Digital Library) — a collaborative project of CSIR and AYUSH documenting traditional medicinal knowledge (Ayurveda, Unani, Siddha) in searchable format for patent examiners worldwide to prevent biopiracy (used to oppose/invalidate patents on turmeric, neem, Darjeeling tea); (3) Geographical Indications Act 1999 — protects GI-tagged products (Darjeeling tea, Basmati rice, Kancheepuram silk). India is a mega-biodiversity country with rich TK."
  },
  {
    id: 71,
    question: "The Declaration of Helsinki (2013 revision) requires that for studies using human participants, the study protocol must be reviewed and approved by:",
    options: [
      "The principal investigator and department head",
      "An independent ethics committee before the study begins, with ongoing oversight during the study",
      "The funding agency and the journal editor before publication",
      "A government regulatory authority only for drug trials"
    ],
    answer: 1,
    explanation: "The Declaration of Helsinki (DoH) is the foundational document of research ethics for studies involving human subjects. Paragraph 23 (2013 revision) mandates that the study protocol be reviewed and approved by an independent ethics committee (IEC/IRB) before the study starts, and that investigators are obligated to report to the IEC during the study. The IEC must have the authority to monitor ongoing trials and suspend or terminate research that violates ethical standards. Ethics oversight is required for all human participant research, not just drug trials."
  },
  {
    id: 72,
    question: "In the ethical framework for research in resource-limited settings, the principle of 'responsiveness' requires that:",
    options: [
      "The host country government must respond to research findings within 6 months",
      "Research should address health priorities of the host community, and benefits should be available to participants and communities after the study",
      "International researchers must respond to all queries from local investigators within 48 hours",
      "Research findings must be translated into local languages before publication"
    ],
    answer: 1,
    explanation: "The responsiveness requirement (from CIOMS 2002, 2016 guidelines) addresses the ethics of conducting research in developing countries: research should respond to the health needs and priorities of the host country, not merely serve the interests of sponsoring countries. Additionally, interventions proven efficacious in trials should be made reasonably available to participants and community members after the trial, and research capacity should be built. 'Standard of care' debates (what control arm should receive) and 'reasonable availability' of benefits are closely linked principles in collaborative international research."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "Two-dimensional gel electrophoresis (2D-PAGE) separates proteins in the first dimension by:",
    options: [
      "Molecular weight using SDS-PAGE",
      "Isoelectric point (pI) using isoelectric focusing in a pH gradient",
      "Protein-protein interactions using native conditions",
      "Hydrophobicity using reversed-phase conditions"
    ],
    answer: 1,
    explanation: "2D-PAGE separates proteins in two orthogonal dimensions: First dimension: Isoelectric Focusing (IEF) — proteins migrate in an immobilized pH gradient (IPG strip) until they reach their isoelectric point (pI, where net charge = 0) and stop moving. Second dimension: SDS-PAGE — the IPG strip is placed on top of an SDS polyacrylamide gel and proteins are separated by molecular weight. Result: 2D protein map with each spot representing a unique protein (pI on x-axis, MW on y-axis). Combined with mass spectrometry, 2D-PAGE is a foundational proteomics technique for comparing protein expression profiles."
  },
  {
    id: 74,
    question: "In mass spectrometry-based proteomics, 'bottom-up' proteomics refers to:",
    options: [
      "Analyzing intact proteins directly by mass spectrometry",
      "Digesting proteins with proteases (e.g., trypsin) into peptides before MS analysis, then inferring protein identity from peptide spectra",
      "Starting with RNA and converting to proteins before MS analysis",
      "Measuring low-abundance proteins after removing high-abundance proteins"
    ],
    answer: 1,
    explanation: "Bottom-up proteomics (shotgun proteomics) digests proteins into peptides (typically with trypsin, cleaving after Lys/Arg) before mass spectrometry analysis. Peptides are separated by LC (nano-LC), ionized by ESI, and analyzed by tandem MS (MS/MS). Peptide spectra are searched against protein databases (Mascot, Sequest) to identify proteins. It is the dominant proteomics approach due to high throughput. Top-down proteomics analyzes intact proteins, preserving post-translational modifications and proteoforms, but is more technically challenging. Middle-down uses large peptides."
  },
  {
    id: 75,
    question: "Protein microarrays (protein chips) differ from DNA microarrays in that protein microarrays:",
    options: [
      "Use fluorescent labels exclusively, while DNA arrays use radioactive labels",
      "Capture proteins rather than nucleic acids, enabling direct protein detection without PCR amplification",
      "Are more stable during storage than DNA microarrays",
      "Cannot be used for quantitative measurements"
    ],
    answer: 1,
    explanation: "Protein microarrays capture and detect proteins (antigens, antibodies, ligands) directly without amplification, unlike DNA arrays which detect nucleic acids that can be amplified by PCR. Types: (1) Analytical arrays (antibody arrays) — immobilized antibodies capture specific proteins in complex mixtures for quantification; (2) Functional arrays — purified proteins immobilized for enzyme activity, protein-protein/DNA/lipid interaction studies; (3) Reverse-phase arrays — samples immobilized and probed with detection antibodies. Challenges: protein stability, activity loss on array, limited amplification options. Applications: serum biomarker discovery, autoantibody profiling."
  },
  {
    id: 76,
    question: "The yeast two-hybrid (Y2H) system detects protein-protein interactions by:",
    options: [
      "Co-immunoprecipitation of protein complexes from yeast cell lysates",
      "Reconstitution of a functional transcription factor (GAL4) when bait and prey proteins interact, activating a reporter gene",
      "FRET signal between fluorescently tagged proteins in living yeast cells",
      "Pull-down assays using GST-tagged fusion proteins from yeast"
    ],
    answer: 1,
    explanation: "Y2H exploits the modular nature of transcription factors (e.g., GAL4 with separate DNA-binding domain and activation domain). Bait protein is fused to the DNA-binding domain (DBD); prey protein to the activation domain (AD). If bait and prey interact, they bring DBD and AD into proximity, reconstituting a functional transcription factor that drives reporter gene expression (HIS3, lacZ, ADE2). Y2H enables genome-wide interaction screens (interactome mapping). Limitations: false positives (auto-activation), false negatives (proteins requiring eukaryotic post-translational modification), restricted to nuclear-localized interactions."
  },
  {
    id: 77,
    question: "Co-immunoprecipitation (Co-IP) is used to study protein-protein interactions by:",
    options: [
      "Expressing bait and prey proteins in yeast to activate a reporter gene",
      "Using an antibody to precipitate one protein (bait) and co-precipitating associated proteins (prey) from cell lysates",
      "Detecting proximity of two proteins (<40 nm) using antibody-oligonucleotide probes and ligation-PCR",
      "Measuring FRET efficiency between fluorescently tagged proteins in intact cells"
    ],
    answer: 1,
    explanation: "Co-IP uses a specific antibody against the bait protein to immunoprecipitate it along with any associated proteins (prey) from cell lysates under near-physiological conditions. After precipitation (using Protein A/G beads), co-precipitated proteins are identified by Western blot, mass spectrometry, or protein arrays. Co-IP detects physiologically relevant interactions in the context of endogenous expression levels and native post-translational modifications. Limitations: requires good antibody, may miss transient interactions, detergent conditions can disrupt weak interactions. Flag/HA-tagged pull-downs are commonly used variants."
  },
  {
    id: 78,
    question: "Proximity Ligation Assay (PLA) detects protein-protein interactions or protein modifications in situ by:",
    options: [
      "Precipitating protein complexes from cell lysates using antibodies",
      "Using two antibodies conjugated to oligonucleotide probes; when proteins are within ~40 nm, probes are ligated and amplified by rolling circle amplification, generating a detectable fluorescent signal",
      "Detecting proteins based on their molecular weight by SDS-PAGE",
      "FRET between two fluorescent antibodies in living cells"
    ],
    answer: 1,
    explanation: "PLA (Duolink, Sigma-Aldrich) uses primary antibodies against two target proteins (or two epitopes of one modified protein). Secondary antibodies are conjugated to oligonucleotide probes (PLUS and MINUS probes). Only when targets are within ~40 nm do the probes come into proximity, enabling hybridization with connector oligonucleotides and ligation to form circular DNA. Rolling circle amplification (RCA) generates a long ssDNA product that is detected by fluorescently labeled probes. Each interaction appears as a distinct fluorescent spot. PLA is uniquely suited for detecting proximity, modifications (e.g., phosphorylation at specific residues), and receptor complex formation in intact cells/tissues."
  },
  {
    id: 79,
    question: "The CRISPR-Cas9 system introduces double-strand breaks (DSBs) in DNA, which are repaired by two main pathways. For gene knock-in (precise editing), which repair pathway is exploited?",
    options: [
      "Non-homologous end joining (NHEJ), which is error-prone and creates insertions/deletions",
      "Homology-directed repair (HDR) using a supplied donor template with homology arms",
      "Base excision repair (BER) using uracil-DNA glycosylase",
      "Nucleotide excision repair (NER) using XPC-RAD23B recognition complex"
    ],
    answer: 1,
    explanation: "When Cas9 introduces a DSB, two competing repair pathways operate: (1) NHEJ (dominant in non-dividing cells): joins broken ends without template, generating insertions/deletions (indels) — useful for gene knockout; (2) HDR (active in S/G2 phase, dividing cells): if a donor template with homology arms flanking the desired edit is provided, HDR incorporates the desired sequence — used for precise gene correction, reporter gene insertion, or point mutations. HDR efficiency is low in most cell types; strategies to enhance HDR (cell cycle synchronization, small molecule inhibitors of NHEJ, optimized donor design) are active areas of development."
  },
  {
    id: 80,
    question: "Single-cell RNA sequencing (scRNA-seq) differs from bulk RNA sequencing in that scRNA-seq:",
    options: [
      "Uses less total RNA input and is therefore cheaper",
      "Reveals transcriptional heterogeneity between individual cells within a tissue, rather than averaged expression across all cells",
      "Provides higher sequencing depth per gene",
      "Can only be applied to cell lines, not primary tissues"
    ],
    answer: 1,
    explanation: "Bulk RNA-seq averages gene expression across thousands to millions of cells, masking cellular heterogeneity. scRNA-seq profiles the transcriptome of individual cells, enabling: identification of rare cell populations, cell type classification (UMAP/t-SNE clusters), trajectory/pseudotime analysis of cell differentiation, characterization of tumor microenvironment heterogeneity, and discovery of cell-state-specific biomarkers. Platforms include 10x Genomics Chromium (droplet-based), Smart-seq2 (full-length transcripts), and MARS-seq. Challenges: amplification bias, dropout events (genes not detected in some cells), and high cost per experiment."
  },

  // Questions 81-86: Microbiology
  {
    id: 81,
    question: "For culture of anaerobic bacteria, specimens should be transported and processed under which conditions?",
    options: [
      "Aerobic conditions with rapid transport (<1 hour) to minimize desiccation",
      "Anaerobic transport systems (reduced transport media, anaerobic transport vials) with prompt processing to exclude oxygen",
      "Refrigerated at 4°C in standard transport medium (Amies) for up to 24 hours",
      "Frozen at -20°C immediately after collection"
    ],
    answer: 1,
    explanation: "Anaerobes are killed by oxygen exposure; proper specimen collection and transport are critical. Use: anaerobic transport vials (PRAS - pre-reduced anaerobically sterilized media), GasPak-type anaerobic bags, or freshly obtained pus/tissue in air-free syringes. Avoid swabs (low yield). Never refrigerate anaerobic specimens (cold enhances O2 toxicity). Process promptly; inoculate into enriched blood agar, kanamycin-vancomycin blood agar (KVBA), and thioglycolate broth; incubate at 37°C in anaerobic chamber (H2+N2+CO2 or CO2 absorption plus palladium catalyst) or anaerobic jars."
  },
  {
    id: 82,
    question: "Laboratory diagnosis of Clostridium difficile infection (CDI) — which testing strategy is currently recommended for toxin detection?",
    options: [
      "Stool culture on CCFA agar alone as the gold standard",
      "Two-step algorithm: GDH (glutamate dehydrogenase) screen followed by toxin A/B EIA confirmation; or GDH + toxin EIA with NAAT as arbitration",
      "Direct stool smear for spores by Gram stain",
      "Colonoscopy to detect pseudomembranes in all suspected cases"
    ],
    answer: 1,
    explanation: "Current recommended CDI laboratory algorithm: Step 1: GDH (glutamate dehydrogenase) EIA — sensitive marker of C. difficile presence (enzyme present in all strains including non-toxigenic); if GDH negative → CDI excluded. Step 2: Toxin A/B EIA — specific for toxin-producing strains; positive = CDI confirmed. Discordant GDH+/Toxin- results require NAAT (PCR for tcdB gene) as arbitration. NAAT alone may over-diagnose CDI (detects colonization). CCFA (cycloserine-cefoxitin-fructose agar) culture is sensitive but slow (48-72 h) and requires toxin testing of isolates. Pseudomembranous colitis on colonoscopy is not always present in CDI."
  },
  {
    id: 83,
    question: "The urease test for Helicobacter pylori on gastric biopsy (Rapid Urease Test/CLO test) gives a positive result when:",
    options: [
      "H. pylori produces catalase that decomposes H2O2, releasing O2 bubbles",
      "H. pylori urease hydrolyzes urea in the test medium, producing ammonia that raises pH and changes the indicator from yellow to pink/magenta",
      "H. pylori oxidase reacts with the test reagent to produce a blue color within 1 minute",
      "H. pylori produces cytotoxin (CagA) detected by agglutination"
    ],
    answer: 1,
    explanation: "The Rapid Urease Test (RUT/CLO test) uses a biopsy specimen placed in a gel containing urea, a pH indicator (phenol red), and a bacteriostatic agent. H. pylori's potent urease hydrolyzes urea to ammonia and CO2; ammonia alkalinizes the medium, raising pH and turning the indicator from yellow/orange to pink/magenta. A positive result within 1 hour indicates active H. pylori infection. Sensitivity: 88-95%; specificity: 95-99%. False negatives: proton pump inhibitor use (reduces bacterial load), recent antibiotic use, upper GI bleeding (blood inhibits urease)."
  },
  {
    id: 84,
    question: "Trichophyton rubrum, the most common cause of dermatophytosis (tinea pedis, onychomycosis), is identified in the laboratory by:",
    options: [
      "Producing red pigment on the reverse side of Sabouraud dextrose agar (SDA) and sparse microconidia",
      "Forming numerous thick-walled macroconidia with 6-12 cells on Cornmeal agar",
      "Positive urease test and production of yellow-green fluorescence under Wood's lamp",
      "Dimorphic fungus converting between mold and yeast forms at 25°C and 37°C respectively"
    ],
    answer: 0,
    explanation: "T. rubrum identification: (1) Colony: white-cream fluffy surface with characteristic deep red/port-wine reverse pigment on SDA (some strains pigment poorly); (2) Microscopy: sparse/few pyriform (tear-drop shaped) microconidia along hyphae; macroconidia rare, thin-walled, pencil-shaped (cigar-shaped), 6-10 cells; (3) Urease test: negative (unlike T. mentagrophytes which is urease positive — key differentiator). (4) Hair perforation test: negative (T. mentagrophytes positive). T. rubrum rarely fluoresces under Wood's lamp. Molecular identification (ITS sequencing) is gold standard for species-level identification."
  },
  {
    id: 85,
    question: "Cytopathic effect (CPE) in viral cell culture refers to:",
    options: [
      "The ability of viruses to penetrate the cell culture vessel plastic surface",
      "Morphological changes in infected cells visible by light microscopy, including rounding, lysis, syncytia formation, or inclusion bodies",
      "The death of uninfected bystander cells due to cytokine release",
      "Color change in the culture medium pH indicator due to viral metabolic activity"
    ],
    answer: 1,
    explanation: "CPE refers to observable structural changes in host cells caused by viral infection, visible by light microscopy. Types of CPE include: cell rounding and detachment (enteroviruses, adenoviruses), syncytia/giant cell formation (RSV, HSV, measles, CMV), focal destruction/plaques (HSV, CMV), cell enlargement/ballooning (HSV), acidophilic intranuclear inclusions — Cowdry A bodies (HSV, CMV), basophilic intranuclear inclusions (adenovirus), cytoplasmic inclusions (poxviruses). CPE pattern + cell line susceptibility helps presumptively identify virus type before definitive identification by neutralization or molecular methods."
  },
  {
    id: 86,
    question: "The Kirby-Bauer disk diffusion method for antimicrobial susceptibility testing uses which breakpoint interpretation standard?",
    options: [
      "CLSI (Clinical and Laboratory Standards Institute) or EUCAST (European Committee on Antimicrobial Susceptibility Testing) breakpoints",
      "WHO EQAS breakpoints specific to each country",
      "MIC breakpoints from the British Society for Antimicrobial Chemotherapy (BSAC) only",
      "Breakpoints set by each hospital's infection control committee"
    ],
    answer: 0,
    explanation: "Kirby-Bauer disk diffusion results (zone of inhibition diameter in mm) are interpreted using published breakpoint tables from CLSI (M100 document, updated annually) or EUCAST (clinical breakpoints, available free online). Breakpoints define Susceptible (S), Intermediate/Susceptible Increased Exposure (I/SIE), and Resistant (R) categories based on pharmacokinetic/pharmacodynamic parameters and clinical outcome data. CLSI is predominantly used in the USA, India, and Asia; EUCAST in Europe. Both are regularly updated to reflect resistance changes. India follows CLSI guidelines; ICMR AMR surveillance uses CLSI/EUCAST."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "Rearrange the following sentences to form a coherent paragraph:\nP: The results of this analysis were then compared with those of the control group.\nQ: Subsequently, all specimens were processed according to the standard laboratory protocol.\nR: In this study, blood samples were collected from 120 patients diagnosed with tuberculosis.\nS: This comparison revealed a statistically significant difference in biomarker levels.",
    options: [
      "R-Q-P-S",
      "Q-R-P-S",
      "S-P-Q-R",
      "P-R-S-Q"
    ],
    answer: 0,
    explanation: "The correct logical order is R-Q-P-S: R introduces the study and sample collection; Q describes what happened to the specimens next (processing); P describes the analytical comparison; S presents the conclusion/result of the comparison. This follows the standard scientific narrative: subject/method → sample processing → analysis → result. Sentences Q-R-P-S would be incorrect because Q (processing) cannot logically precede R (sample collection). The sequence should follow chronological and logical order of events in a research study."
  },
  {
    id: 88,
    question: "Choose the most appropriate transition word/phrase to complete the sentence: 'The vaccine was highly effective in Phase III trials; _____________, its widespread implementation was delayed due to cold chain infrastructure challenges.'",
    options: [
      "Therefore",
      "Furthermore",
      "Nevertheless",
      "Consequently"
    ],
    answer: 2,
    explanation: "'Nevertheless' (or 'however') is the correct concession/contrast word here because the second clause presents a contrasting/unexpected situation despite the positive first clause. 'Therefore' and 'Consequently' indicate cause-effect (the effectiveness caused the delay — illogical). 'Furthermore' adds information of the same type (effectiveness → more effectiveness data), not a contrasting outcome. Concession phrases signal that despite what was just stated, an unexpected or contradictory result follows. Other concession words: nonetheless, yet, even so, despite this."
  },
  {
    id: 89,
    question: "Identify the correct use of 'which' vs 'that' in the following sentences:\n1. 'The assay that was validated last year produced accurate results.'\n2. 'The Xpert MTB/RIF assay, which was endorsed by WHO in 2010, is now widely used.'",
    options: [
      "Both sentences are grammatically correct",
      "Sentence 1 should use 'which' and Sentence 2 should use 'that'",
      "Both sentences should use 'that'",
      "Both sentences should use 'which'"
    ],
    answer: 0,
    explanation: "Both sentences use 'that' and 'which' correctly per standard grammar rules: 'That' introduces restrictive (defining) relative clauses — without it, the meaning changes (identifies which assay). 'Which' introduces non-restrictive (non-defining) relative clauses set off by commas — provides additional, parenthetical information about a specific item already identified. In Sentence 1, 'that was validated last year' restricts which assay (not just any assay). In Sentence 2, 'which was endorsed by WHO in 2010' provides extra information about the already-named Xpert assay. Both are grammatically correct."
  },
  {
    id: 90,
    question: "Choose the correct cause-effect connector: 'Increased antimicrobial resistance _____________ inadequate antibiotic prescribing practices and poor infection control measures.'",
    options: [
      "is attributed to",
      "results in",
      "contributes to",
      "is associated with"
    ],
    answer: 0,
    explanation: "'Is attributed to' correctly expresses that AMR is the effect caused by the mentioned practices (identifies the cause of AMR). 'Results in' would make AMR the cause producing those practices as effects — reversed causality. 'Contributes to' would make AMR a cause contributing to resistance/practices — directionally wrong here. 'Is associated with' expresses correlation without directionality. Cause-effect language: the CAUSE produces/leads to/results in/causes the EFFECT; the EFFECT results from/is caused by/is attributed to/stems from the CAUSE."
  },
  {
    id: 91,
    question: "Which sentence correctly uses a concession clause?",
    options: [
      "Because the sample size was small, the results were statistically significant.",
      "Although the sample size was small, the results were statistically significant.",
      "Since the sample size was small, the results were statistically significant.",
      "The sample size was small; therefore, the results were statistically significant."
    ],
    answer: 1,
    explanation: "'Although' introduces a concession clause (subordinating conjunction), acknowledging the small sample size as an obstacle while asserting the unexpected positive outcome (statistically significant results). The concession structure is: 'Although [less favorable condition], [positive/unexpected outcome].' 'Because' and 'Since' introduce cause clauses — a small sample size causing statistical significance is contradictory (small size reduces statistical power). 'Therefore' implies causation — again illogical (small size should not cause significance). 'Although/Though/Even though/Despite the fact that' are concession words."
  },
  {
    id: 92,
    question: "Select the option that best maintains paragraph coherence by providing the most logical sentence to follow: 'Epidemiological surveillance is essential for monitoring the spread of infectious diseases. _______________'",
    options: [
      "Infectious diseases have been a major burden on global health throughout history.",
      "It provides data that inform public health decisions, guide resource allocation, and enable timely outbreak response.",
      "The World Health Organization was established in 1948 to address global health challenges.",
      "Laboratory testing is performed on clinical specimens collected from patients."
    ],
    answer: 1,
    explanation: "The opening sentence introduces epidemiological surveillance as essential. The next sentence must logically explain or expand on WHY it is essential — providing justification/elaboration. Option B directly answers this by explaining what surveillance achieves (data for decisions, resource allocation, outbreak response), maintaining coherence through logical elaboration. Option A is irrelevant historical context. Option C introduces WHO without connection to surveillance. Option D shifts to laboratory testing without bridging to surveillance. Paragraph coherence requires each sentence to build on the previous one through logical progression."
  },
  {
    id: 93,
    question: "Choose the grammatically correct sentence:",
    options: [
      "Neither the principal investigator nor the co-investigators was available for comment.",
      "Neither the principal investigator nor the co-investigators were available for comment.",
      "Neither the principal investigator nor the co-investigators is available for comment.",
      "Neither the principal investigator nor the co-investigators has been available for comment."
    ],
    answer: 1,
    explanation: "When 'neither...nor' connects two subjects of different number, the verb agrees with the subject closest to it (proximity rule). Here, 'co-investigators' (plural) is closest to the verb; therefore the plural verb 'were' is correct: 'Neither the PI nor the co-investigators WERE available.' If the order were reversed: 'Neither the co-investigators nor the PI WAS available' (singular verb agrees with 'PI'). Option A ('was') applies singular agreement to the closer plural subject — incorrect. Options C ('is') and D ('has been') are also singular forms — incorrect with a plural proximate subject."
  },

  // Questions 94-100: General Knowledge
  {
    id: 94,
    question: "The National Medical Commission (NMC) Act 2019 replaced the Medical Council of India (MCI) Act 1956. A key feature of the NMC Act is:",
    options: [
      "It established NMC as a body with only elected doctors and no government representation",
      "It created four autonomous boards (USMLE, FMGE, PGIE, MEMC) under NMC to regulate different aspects of medical education",
      "It created four autonomous boards (UGMEB, PGMEB, MEMC, ETPGMEB) under NMC overseeing different phases of medical education and competency assessment",
      "It abolished the exit examination and retained the final MBBS examination for practice"
    ],
    answer: 2,
    explanation: "The NMC Act 2019 established the National Medical Commission replacing MCI with a government-appointed body. Four autonomous boards under NMC: (1) UGMEB (Under-Graduate Medical Education Board) — sets curriculum for MBBS; (2) PGMEB (Post-Graduate Medical Education Board) — PG education; (3) MEMC (Medical Assessment and Rating Board, also known as MARC — Medical Assessment and Rating Committee) — assessment of colleges; (4) ETPGMEB (Ethics and Medical Registration Board) — code of professional conduct, National Medical Register. A National Exit Test (NExT) replaces MBBS final exam and serves as PG entrance test and licentiate for foreign graduates."
  },
  {
    id: 95,
    question: "The Allied and Healthcare Professionals Act 2021 in India was enacted to:",
    options: [
      "Regulate nursing professionals under a separate nursing council",
      "Establish a National Commission for Allied and Healthcare Professions to regulate education and practice of allied health professionals",
      "Provide statutory backing to the Pharmacy Council of India",
      "Create a national database of all healthcare workers in India"
    ],
    answer: 1,
    explanation: "The Allied and Healthcare Professions Act 2021 establishes the National Commission for Allied and Healthcare Professions (NCAHP) to regulate approximately 56 allied and healthcare professions (physiotherapy, occupational therapy, medical laboratory technology, radiography, speech-language pathology, optometry, prosthetics, perfusion technology, etc.) that were previously unregulated. The Act creates state commissions, central and state registers, minimum qualification standards, and professional conduct codes. It provides legal recognition and career protection to millions of allied health professionals in India."
  },
  {
    id: 96,
    question: "The Pharmacy Council of India (PCI) was established under which Act to regulate pharmacy education and practice?",
    options: [
      "Drugs and Cosmetics Act 1940",
      "Pharmacy Act 1948",
      "Essential Commodities Act 1955",
      "Narcotic Drugs and Psychotropic Substances Act 1985"
    ],
    answer: 1,
    explanation: "The Pharmacy Act 1948 established the Pharmacy Council of India (PCI) as the central regulatory body for pharmacy education and registration of pharmacists in India. PCI sets minimum standards for pharmacy education (D.Pharm, B.Pharm, M.Pharm, Pharm.D), approves institutions, and maintains the Central Register of Pharmacists. State Pharmacy Councils maintain state registers. Pharmacists must be registered with state councils to practice legally. PCI prescribes minimum qualification, syllabi, and examination standards for all pharmacy programmes in India."
  },
  {
    id: 97,
    question: "The Food Safety and Standards Act 2006 (FSSAI) consolidated several earlier food-related laws. The primary regulatory body established under this Act is:",
    options: [
      "Bureau of Indian Standards (BIS) for food quality",
      "Food Safety and Standards Authority of India (FSSAI) as the central authority",
      "Ministry of Health and Family Welfare directly",
      "National Accreditation Board for Testing and Calibration Laboratories (NABL)"
    ],
    answer: 1,
    explanation: "The FSS Act 2006 consolidated 8 earlier Acts (Prevention of Food Adulteration Act 1954, Fruit Products Order 1955, etc.) and established FSSAI as the apex body for food safety regulation in India. FSSAI functions: setting food safety standards and regulations, licensing/registration of food businesses, food testing laboratories, import/export regulation, consumer awareness, and training. FSSAI is under MOHFW. It prescribes standards for all food categories through Food Safety and Standards Regulations (e.g., Contaminants Regulation, Labelling and Display Regulation, Organic Food Regulation)."
  },
  {
    id: 98,
    question: "The Clinical Establishments (Registration and Regulation) Act 2010 in India applies to:",
    options: [
      "All clinical establishments in India without exception from the date of enactment",
      "All types of clinical establishments (hospitals, nursing homes, dispensaries, laboratories, clinics) in states and UTs that adopt the Act",
      "Only government hospitals and medical college hospitals",
      "Only private hospitals with more than 100 beds"
    ],
    answer: 1,
    explanation: "The Clinical Establishments Act 2010 applies to all clinical establishments (hospitals, maternity homes, nursing homes, dispensaries, clinics, sanatoriums, and laboratories) in states and UTs that have adopted the Act (it is not automatically applicable to all states — states must adopt it under concurrent list provisions or as Union Territories). It covers establishments offering investigation, treatment, or diagnosis of diseases/conditions. Key provisions: mandatory registration, standards of facilities and services, maintenance of records, display of rates of services, and grievance redressal. Many large states (Maharashtra, Karnataka, Tamil Nadu) have their own clinical establishments Acts."
  },
  {
    id: 99,
    question: "The Indian Medical Council Act 1956 (now superseded by NMC Act 2019) established the Medical Council of India with which primary mandate?",
    options: [
      "To regulate medical practice and prosecute medical negligence cases",
      "To maintain a uniform standard of medical education throughout India and maintain a Central Register of Medical Practitioners",
      "To provide medical care to below poverty line populations",
      "To conduct the All India Pre-Medical Entrance Examination"
    ],
    answer: 1,
    explanation: "The MCI Act 1956 established the Medical Council of India with mandate to: (1) Maintain a Central Register of Medical Practitioners (recognized degrees for registration); (2) Set minimum standards for medical education (MBBS and PG); (3) Grant recognition to medical qualifications; (4) Prescribe standards for medical colleges and approve establishment of new colleges. MCI functions were inherited by NMC (2020 onwards). MCI did not directly regulate medical practice (state medical councils regulate this) or conduct entrance exams (CBSE/NTA conducts NEET). Corruption in college recognition led to replacement by NMC."
  },
  {
    id: 100,
    question: "The Drugs and Clinical Trials Rules 2019, published under the Drugs and Cosmetics Act 1940, introduced which significant change for clinical trial conduct in India?",
    options: [
      "Abolished the requirement for ethics committee approval for Phase I trials",
      "Introduced audio-visual consent documentation as an option for illiterate participants and mandated CTRI registration before trial commencement",
      "Required all clinical trials to be conducted only in AIIMS and central government institutions",
      "Prohibited participation of foreign nationals in Indian clinical trials"
    ],
    answer: 1,
    explanation: "The New Drugs and Clinical Trials Rules 2019 (replacing Schedule Y) introduced key reforms: (1) Audio-visual documentation of informed consent — mandatory for participants unable to read/write, ensuring genuine informed consent; (2) Mandatory prospective registration at CTRI before first participant enrollment; (3) Concurrent approval with global trials (removed requirement to wait for approval in developed country); (4) Compensation for clinical trial-related injuries (formula-based); (5) Post-marketing surveillance requirements; (6) Academic/investigator-initiated trials: simplified requirements. These rules increased transparency and participant protection in Indian clinical research."
  }
];

export default questions;

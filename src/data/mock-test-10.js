const questions = [
  // Questions 1-12: Research Methodology
  {
    id: 1,
    question: "Propensity score matching in observational studies is used primarily to:",
    options: [
      "Eliminate all forms of confounding including unmeasured confounders",
      "Create comparable treatment and control groups by balancing measured covariates, mimicking randomization",
      "Adjust for time-varying confounders that change during follow-up",
      "Estimate causal effects when the treatment variable is continuous"
    ],
    answer: 1,
    explanation: "Propensity score matching balances observed baseline covariates between treatment groups by matching individuals with similar propensity scores (probability of receiving treatment given covariates). It cannot address unmeasured confounders, which is a key limitation. The goal is to create groups that appear similar on measured characteristics as if they had been randomized, enabling less biased causal inference from observational data."
  },
  {
    id: 2,
    question: "An instrumental variable (IV) in epidemiological research must satisfy which three core assumptions?",
    options: [
      "Relevance, exchangeability, and positivity",
      "Relevance (associated with exposure), exclusion restriction (affects outcome only through exposure), and independence (not associated with unmeasured confounders)",
      "Consistency, positivity, and no effect modification",
      "Temporal precedence, dose-response relationship, and biological plausibility"
    ],
    answer: 1,
    explanation: "A valid instrumental variable must be: (1) relevant - strongly associated with the exposure of interest; (2) satisfy the exclusion restriction - affect the outcome only through its effect on the exposure (no direct pathway); and (3) be independent of unmeasured confounders. Mendelian randomization uses genetic variants as instruments, where random allele assortment at conception supports the independence assumption."
  },
  {
    id: 3,
    question: "Regression discontinuity design (RDD) exploits:",
    options: [
      "Random allocation of treatment on either side of a predetermined threshold in a continuous variable",
      "A sharp cutoff in a continuous running variable that determines treatment assignment, creating quasi-random treatment near the threshold",
      "Discontinuities in time-series data to estimate interrupted time series effects",
      "Differential regression to the mean on either side of a diagnostic threshold"
    ],
    answer: 1,
    explanation: "RDD is a quasi-experimental design that exploits the fact that treatment is assigned based on whether a continuous 'running variable' (e.g., age, test score, biomarker level) exceeds a predetermined cutoff. Individuals just above and below the threshold are nearly identical in expectation, enabling causal inference. Classic examples include studying effects of medical eligibility thresholds or academic scholarship cutoff scores."
  },
  {
    id: 4,
    question: "The target trial emulation framework, developed by Hernan and Robins, is designed to:",
    options: [
      "Design observational studies that mimic the key features of the randomized trial that would answer the causal question of interest",
      "Recruit participants for pragmatic trials from observational databases",
      "Validate observational study findings by replicating them in a subsequent RCT",
      "Adjust for immortal time bias using propensity score methods"
    ],
    answer: 0,
    explanation: "Target trial emulation is a structured framework for causal inference from observational data by explicitly specifying the target RCT one would ideally conduct (eligibility criteria, treatment strategies, follow-up, outcome, causal contrast) and then emulating it with observational data. This approach forces clarity on the causal question, prevents common biases (immortal time bias, depletion of susceptibles), and enables more transparent, reproducible analyses."
  },
  {
    id: 5,
    question: "In network meta-analysis (NMA), the key assumption that must hold for valid indirect comparisons is:",
    options: [
      "All included trials must have the same follow-up duration and primary endpoint",
      "Transitivity (or similarity): the distribution of effect modifiers must be balanced across treatment comparisons in the network",
      "All trials must use identical randomization methods and allocation concealment",
      "Direct evidence must be available for all treatment comparisons in the network"
    ],
    answer: 1,
    explanation: "Transitivity (also called similarity or consistency) is the key assumption in NMA: the trials in each comparison must be sufficiently similar with respect to clinical and methodological effect modifiers (e.g., patient population, disease severity, outcome definitions) that indirect comparisons are meaningful. Violation of transitivity (inconsistency between direct and indirect evidence) can be tested statistically but is primarily a clinical judgment."
  },
  {
    id: 6,
    question: "An adaptive platform trial (such as RECOVERY or REMAP-CAP) differs fundamentally from a conventional multi-arm trial in that it:",
    options: [
      "Requires regulatory approval for each new treatment arm added",
      "Uses a master protocol with pre-specified adaptive rules allowing perpetual operation, seamless addition or removal of treatment arms, and response-adaptive randomization",
      "Fixes all treatment arms and sample sizes before the first patient is enrolled",
      "Uses Bayesian decision rules only for interim futility analyses"
    ],
    answer: 1,
    explanation: "Adaptive platform trials operate under a single master protocol as a permanent infrastructure testing multiple treatments. They can simultaneously enroll for multiple arms, seamlessly add new arms as new treatments emerge, drop arms for futility or harm, and modify randomization ratios based on accumulating data. REMAP-CAP exemplified this in COVID-19, answering multiple treatment questions rapidly with shared controls, reducing redundancy and cost."
  },
  {
    id: 7,
    question: "The E-value in epidemiology, introduced by VanderWeele and Ding, quantifies:",
    options: [
      "The strength of evidence against the null hypothesis in observational studies",
      "The minimum strength of association an unmeasured confounder would need with both exposure and outcome to explain away an observed association",
      "The effect size after adjustment for all measured confounders using propensity scores",
      "The probability that a positive association is due to publication bias"
    ],
    answer: 1,
    explanation: "The E-value represents the minimum risk ratio that an unmeasured confounder would need to have with both the exposure and outcome (on the risk ratio scale), after adjustment for measured confounders, to fully explain away an observed association. A large E-value indicates that only a very strong, unmeasured confounder could negate the finding, lending more credibility to a causal interpretation. It is calculated as RR + sqrt(RR × (RR-1))."
  },
  {
    id: 8,
    question: "Difference-in-differences (DiD) analysis in health policy research estimates the causal effect of an intervention by:",
    options: [
      "Subtracting pre-intervention outcomes from post-intervention outcomes in the treatment group only",
      "Comparing the change over time in outcomes for a treatment group versus a control group, thereby removing time-invariant confounders",
      "Differencing outcomes between matched pairs in a propensity score matched sample",
      "Calculating the second derivative of a time-trend in interrupted time series data"
    ],
    answer: 1,
    explanation: "DiD estimates the effect of an intervention by comparing the before-after change in outcomes for the treated group against the before-after change for a control group. This difference of differences removes time-invariant confounders affecting both groups and common temporal trends, assuming the parallel trends assumption holds (treatment and control groups would have followed similar trends absent the intervention)."
  },
  {
    id: 9,
    question: "The Hawthorne effect in research methodology refers to:",
    options: [
      "The tendency of participants to report outcomes consistent with their treatment assignment expectations",
      "Changes in participant behavior resulting from the awareness that they are being observed or studied",
      "Bias introduced when investigators unconsciously favor the treatment group during assessment",
      "The regression to the mean phenomenon in repeated measurements"
    ],
    answer: 1,
    explanation: "The Hawthorne effect (named after the Western Electric Hawthorne Works studies) occurs when participants alter their behavior because they know they are being observed, not because of the specific intervention. It can bias study results by making both groups perform better than they would in routine practice, potentially diluting treatment effects. Blinding and pragmatic study designs help mitigate this effect."
  },
  {
    id: 10,
    question: "In a cross-sectional study, prevalence odds ratio (POR) is preferred over prevalence ratio when:",
    options: [
      "The outcome is rare (prevalence < 10%) in both exposed and unexposed groups",
      "The outcome is common and logistic regression is used as the analytical model, since logistic regression directly estimates odds ratios",
      "The study is designed to estimate incidence rates rather than prevalence",
      "The exposure is measured on a continuous scale rather than binary"
    ],
    answer: 1,
    explanation: "In cross-sectional studies analyzing common outcomes with logistic regression, the model directly estimates the odds ratio (prevalence odds ratio). When outcomes are common (>10% prevalence), the POR substantially overestimates the prevalence ratio (PR). Modified Poisson regression or log-binomial regression can directly estimate PRs, which are more interpretable for common outcomes. For rare outcomes, POR approximates PR."
  },
  {
    id: 11,
    question: "The STROBE statement provides reporting guidelines for:",
    options: [
      "Systematic reviews and meta-analyses of observational studies",
      "Observational studies in epidemiology (cohort, case-control, and cross-sectional studies)",
      "Pragmatic cluster-randomized trials in public health settings",
      "Diagnostic accuracy studies and biomarker evaluations"
    ],
    answer: 1,
    explanation: "STROBE (STrengthening the Reporting of OBservational studies in Epidemiology) provides a 22-item checklist for reporting the three main observational study designs: cohort studies, case-control studies, and cross-sectional studies. It ensures transparent reporting of study design, setting, participants, variables, bias, statistical methods, and key results. STROBE is analogous to CONSORT for RCTs and PRISMA for systematic reviews."
  },
  {
    id: 12,
    question: "In causal mediation analysis, the natural indirect effect (NIE) represents:",
    options: [
      "The effect of the exposure on the outcome that is not transmitted through the mediator",
      "The portion of the total effect of the exposure on the outcome that operates through the mediator pathway",
      "The interaction between the exposure and mediator in determining the outcome",
      "The confounded association between the mediator and the outcome"
    ],
    answer: 1,
    explanation: "Causal mediation analysis decomposes the total effect of an exposure on an outcome into: the natural direct effect (NDE) - the effect not operating through the mediator - and the natural indirect effect (NIE) - the portion of the effect transmitted through the mediator. The proportion mediated = NIE/Total Effect. Modern mediation analysis using counterfactual frameworks can handle exposure-mediator interactions and requires four assumptions including no unmeasured confounding."
  },

  // Questions 13-24: Biostatistics
  {
    id: 13,
    question: "The Poisson distribution is most appropriately used to model count data when:",
    options: [
      "The outcome is binary and the sample size is small",
      "Events occur independently and randomly over a fixed interval of time or space, with a constant average rate",
      "The data are continuous and normally distributed with known variance",
      "The count data exhibits substantial overdispersion relative to the Poisson variance"
    ],
    answer: 1,
    explanation: "The Poisson distribution models count data (number of events in a fixed interval) when events are independent, occur at a constant average rate (lambda), and the probability of an event in any small interval is proportional to interval length. A key property is that the mean equals the variance. Classic applications include disease incidence counts, number of hospital admissions per week, or mutation counts per genome. Overdispersion (variance > mean) violates the Poisson assumption."
  },
  {
    id: 14,
    question: "A zero-inflated Poisson (ZIP) model is indicated when:",
    options: [
      "The count data has fewer zeros than expected under a standard Poisson distribution",
      "The count data has an excess of zeros beyond what the Poisson distribution can accommodate, from a mixture of structural and sampling zeros",
      "The outcome is a count variable that follows a negative binomial distribution",
      "The data contain only integer values between 0 and 10"
    ],
    answer: 1,
    explanation: "ZIP models address excess zeros by modeling the data as a mixture of two processes: a point mass at zero (structural zeros from subjects who can never experience the event) and a Poisson process generating the counts including sampling zeros. For example, in a study of emergency department visits, some individuals may never visit the ED (structural zeros) while others may have zero visits during follow-up by chance (sampling zeros). ZIP uses two model components: a logistic model for the zero-inflation process and a Poisson model for counts."
  },
  {
    id: 15,
    question: "Generalized Estimating Equations (GEE) differ from mixed-effects (multilevel) models in that GEE:",
    options: [
      "Model individual-level random effects to account for between-subject heterogeneity",
      "Estimate population-average effects and use robust sandwich variance estimators to account for within-subject correlation without modeling the covariance structure explicitly",
      "Require the outcome to be normally distributed for valid inference",
      "Are only applicable when the number of repeated measurements is the same for all subjects"
    ],
    answer: 1,
    explanation: "GEE is a marginal modeling approach that estimates population-average (marginal) effects, treating within-cluster correlation as a nuisance using a working correlation structure and robust variance estimation. Mixed-effects models estimate subject-specific (conditional) effects and explicitly model between-subject random variation. GEE is preferred when the population-average effect is the scientific target; mixed models when subject-specific predictions or between-subject variance components are of interest."
  },
  {
    id: 16,
    question: "In a linear mixed-effects model, a random slope allows:",
    options: [
      "Different intercepts for each subject while assuming a common slope across subjects",
      "The effect of a predictor (e.g., time) to vary across individuals, capturing individual-level differences in trajectories",
      "Heteroscedastic residual variance to be modeled separately for each treatment group",
      "Non-linear relationships between predictors and outcomes through polynomial terms"
    ],
    answer: 1,
    explanation: "A random slope in a mixed-effects model allows the regression coefficient for a predictor (typically time in longitudinal studies) to vary randomly across individuals, modeled as a draw from a distribution centered at the population mean slope. This captures individual differences in response trajectories beyond what is explained by fixed effects. Including random slopes improves model fit when individual trajectories genuinely vary and is specified as (1 + time | subject) in R's lme4 syntax."
  },
  {
    id: 17,
    question: "Bootstrap resampling in statistics is used to:",
    options: [
      "Impute missing data by drawing replacement values from the observed distribution",
      "Estimate the sampling distribution of a statistic by repeatedly resampling with replacement from the observed data to construct confidence intervals without distributional assumptions",
      "Validate a prediction model by repeatedly splitting the dataset into training and validation sets",
      "Reduce bias in estimating population parameters by correcting for sample size"
    ],
    answer: 1,
    explanation: "Bootstrapping repeatedly resamples the observed data with replacement (typically 1000-10,000 times), calculates the statistic of interest in each resample, and uses the resulting empirical distribution to construct confidence intervals or estimate standard errors. It does not require distributional assumptions (non-parametric) and is particularly valuable for complex statistics (e.g., median survival, C-statistic, interaction terms) where analytical variance formulas are unavailable or unreliable."
  },
  {
    id: 18,
    question: "The jackknife resampling technique estimates variance by:",
    options: [
      "Randomly sampling a fixed fraction of observations without replacement across multiple iterations",
      "Systematically leaving out one observation at a time, computing the statistic n times, and estimating variance from the variability of these n estimates",
      "Creating pseudo-datasets by perturbing each observation by a small random amount",
      "Splitting the dataset into k equal folds and computing the statistic in each fold"
    ],
    answer: 1,
    explanation: "The jackknife (leave-one-out) method creates n pseudo-datasets by deleting one observation at a time, computes the statistic of interest in each, and estimates variance from the variability among the n jackknife estimates: Var = (n-1)/n × Σ(θ̂_i - θ̂_.)². The jackknife is computationally more efficient than bootstrap but is a linear approximation and less effective for non-smooth statistics like the median. It is widely used for bias estimation and variance estimation of complex statistics."
  },
  {
    id: 19,
    question: "In hypothesis testing, a type II error (beta) occurs when:",
    options: [
      "The null hypothesis is rejected when it is actually true",
      "The null hypothesis is not rejected when it is actually false (a true effect exists but is missed)",
      "The test statistic exceeds the critical value by chance in a small sample",
      "The confidence interval is calculated incorrectly due to distributional assumptions"
    ],
    answer: 1,
    explanation: "A Type II error (false negative, beta error) is failing to reject a false null hypothesis - missing a real effect. Statistical power = 1 - beta is the probability of correctly detecting a true effect. Power is increased by larger sample sizes, larger effect sizes, more precise measurements, and one-tailed tests. Type I error (alpha error) is rejecting a true null hypothesis (false positive). The relationship between alpha and beta must be balanced in trial design."
  },
  {
    id: 20,
    question: "The intraclass correlation coefficient (ICC) in a cluster randomized trial is important because:",
    options: [
      "It measures the correlation between primary and secondary endpoints within the same subject",
      "It quantifies similarity of outcomes within clusters, and higher ICC requires larger sample sizes to achieve the same power as individually randomized trials",
      "It estimates the proportion of variance in the outcome explained by the treatment effect",
      "It measures the reliability of the outcome assessment across different raters"
    ],
    answer: 1,
    explanation: "In cluster randomized trials (CRTs), the ICC quantifies the proportion of total outcome variance attributable to between-cluster variation. When individuals within a cluster are more similar to each other than to individuals in other clusters (high ICC), the effective sample size is reduced, requiring a design effect (DEFF = 1 + (m-1) × ICC, where m is cluster size) to inflate the sample size. ICC typically ranges from 0.01-0.05 in community-based trials but can be higher in institutional settings."
  },
  {
    id: 21,
    question: "Negative binomial regression is preferred over Poisson regression for count data when:",
    options: [
      "The event counts are all zero or positive integers without overdispersion",
      "The variance of the count data substantially exceeds the mean (overdispersion), indicating more variability than the Poisson model allows",
      "The outcome is a proportion rather than a count",
      "The exposure variable is continuous rather than categorical"
    ],
    answer: 1,
    explanation: "Poisson regression assumes the mean equals the variance. Overdispersion (variance > mean) is common in biological count data due to heterogeneity, clustering, or excess zeros, causing Poisson regression to underestimate standard errors and produce spuriously precise estimates. Negative binomial regression adds a dispersion parameter (theta) to model extra-Poisson variation, producing valid inference. The dispersion parameter can be estimated from the data or tested with a likelihood ratio test."
  },
  {
    id: 22,
    question: "The Akaike Information Criterion (AIC) is used in statistical modeling to:",
    options: [
      "Test whether a more complex model fits significantly better than a simpler nested model",
      "Balance goodness-of-fit against model complexity for model selection, with lower AIC indicating a better-fitting, more parsimonious model",
      "Estimate the proportion of outcome variance explained by predictor variables",
      "Assess whether residuals from a linear model follow a normal distribution"
    ],
    answer: 1,
    explanation: "AIC = 2k - 2ln(L̂), where k is the number of parameters and L̂ is the maximum likelihood. Lower AIC indicates better model fit penalized for complexity. Unlike likelihood ratio tests (which require nested models), AIC can compare non-nested models. The Bayesian Information Criterion (BIC) uses a stronger penalty (k×ln(n)) and tends to favor more parsimonious models. A difference in AIC >2-10 between models is generally considered meaningful."
  },
  {
    id: 23,
    question: "Sensitivity analysis in meta-analysis is most commonly performed by:",
    options: [
      "Re-running the meta-analysis excluding one study at a time (leave-one-out analysis) to assess the influence of individual studies on the pooled estimate",
      "Adding additional unpublished studies identified through grey literature to correct for publication bias",
      "Transforming all effect estimates to a common scale before pooling",
      "Applying Bonferroni correction to the p-value of the pooled effect estimate"
    ],
    answer: 0,
    explanation: "Leave-one-out sensitivity analysis systematically removes each study and recalculates the pooled estimate to identify highly influential studies. Other sensitivity analyses include: restricting to high-quality studies (low risk of bias), using different model assumptions (fixed vs. random effects), pre-specified subgroup analyses, and excluding studies with specific characteristics. If the pooled result changes substantially when one study is excluded, results should be interpreted cautiously."
  },
  {
    id: 24,
    question: "The variance inflation factor (VIF) in multiple regression is used to detect:",
    options: [
      "Heteroscedasticity in residuals indicating non-constant variance",
      "Multicollinearity, where predictor variables are highly correlated with each other, inflating standard errors",
      "Outliers that exert excessive leverage on the regression estimates",
      "Non-linearity in the relationship between predictors and outcome"
    ],
    answer: 1,
    explanation: "VIF measures how much the variance of a regression coefficient is inflated due to correlations among predictors. VIF for predictor j = 1/(1-R²_j), where R²_j is the R² from regressing predictor j on all other predictors. VIF > 5-10 is commonly used as a threshold for problematic multicollinearity. Consequences include unstable coefficient estimates, inflated standard errors, and difficulty interpreting individual predictor effects."
  },

  // Questions 25-34: Diagnostic Tests
  {
    id: 25,
    question: "A clinical prediction rule (CPR) differs from a risk score in that a CPR:",
    options: [
      "Uses only laboratory biomarkers rather than clinical variables for its derivation",
      "Is explicitly designed to guide a specific clinical decision (triage, diagnosis, treatment initiation) rather than simply stratify risk",
      "Must be derived from a randomized controlled trial population",
      "Requires validation only in the derivation dataset before clinical implementation"
    ],
    answer: 1,
    explanation: "A CPR (also called clinical decision rule) is derived to guide a specific clinical action at the bedside - for example, the Wells score for PE diagnosis (to determine who needs D-dimer or CT-PA), the Ottawa Ankle Rules (to determine who needs X-ray), or the CURB-65 (to guide pneumonia admission decisions). Risk scores may estimate probability without specifying a decision action. CPRs require three stages of validation: derivation, prospective validation, and impact analysis."
  },
  {
    id: 26,
    question: "A calibration plot in diagnostic or prognostic model evaluation assesses:",
    options: [
      "The ability of the model to discriminate between individuals with and without the outcome",
      "The agreement between predicted probabilities from the model and observed outcome frequencies across the risk spectrum",
      "The optimal probability threshold for classifying patients as high or low risk",
      "The effect of sample size on the precision of predicted probabilities"
    ],
    answer: 1,
    explanation: "Calibration assesses whether predicted probabilities match observed outcome frequencies. A well-calibrated model should have predicted probabilities that, on average, match the proportion of events observed. Calibration plots display predicted probability on the x-axis and smoothed observed event rates on the y-axis; a perfect model follows the 45-degree line. The Hosmer-Lemeshow test and calibration slope are formal calibration statistics, though graphical assessment is preferred."
  },
  {
    id: 27,
    question: "Decision curve analysis (DCA) evaluates clinical utility of a prediction model by plotting:",
    options: [
      "Sensitivity vs. 1-specificity at multiple probability thresholds (ROC curve)",
      "Net benefit across a range of decision thresholds, accounting for the relative harm of false positives and false negatives",
      "Positive predictive value vs. sensitivity at multiple cutoffs",
      "Model performance in subgroups defined by risk categories"
    ],
    answer: 1,
    explanation: "Decision curve analysis calculates net benefit = (true positives/n) - (false positives/n) × (pt/(1-pt)), where pt is the probability threshold at which the patient/clinician would consider treating. Plotting net benefit against probability thresholds allows comparison of the prediction model against default strategies of treating all or treating none, providing a clinically meaningful assessment of whether using the model improves patient outcomes compared to alternatives."
  },
  {
    id: 28,
    question: "The Net Reclassification Improvement (NRI) quantifies:",
    options: [
      "The absolute increase in the C-statistic when a new biomarker is added to a prediction model",
      "The proportion of individuals correctly reclassified to a higher or lower risk category when a new biomarker is added to an existing model",
      "The improvement in sensitivity and specificity when a new test replaces an older one",
      "The reduction in false positive rate when a new marker is added to the model"
    ],
    answer: 1,
    explanation: "NRI measures how often adding a new biomarker correctly moves individuals to higher risk categories (events) or lower risk categories (non-events). Category-free NRI = proportion of events with upward movement + proportion of non-events with downward movement - proportion of events with downward movement - proportion of non-events with upward movement. NRI >0 indicates net improvement in classification. Category-based NRI requires pre-specified clinically meaningful risk categories."
  },
  {
    id: 29,
    question: "The Integrated Discrimination Improvement (IDI) measures:",
    options: [
      "The increase in the area under the ROC curve attributable to a new predictor",
      "The average increase in predicted probability for events minus the average increase in predicted probability for non-events when a new marker is added",
      "The proportion of the outcome explained by new biomarkers beyond existing risk factors",
      "The improvement in sensitivity at a fixed specificity when a new test is added"
    ],
    answer: 1,
    explanation: "IDI = (mean predicted probability increase among events) - (mean predicted probability increase among non-events) when adding a new marker to a baseline model. It can be interpreted as the difference between the improvement in average sensitivity and the deterioration in average specificity across all thresholds. Both NRI and IDI are supplements to the C-statistic; IDI is less susceptible to misinterpretation but both have been criticized for being sensitive to model calibration changes."
  },
  {
    id: 30,
    question: "The C-statistic (concordance statistic) for a binary outcome prediction model equals:",
    options: [
      "The proportion of individuals correctly classified at the optimal probability threshold",
      "The probability that a randomly selected case has a higher predicted probability than a randomly selected non-case (equivalent to AUC-ROC for binary outcomes)",
      "The correlation between observed and predicted outcomes across all individuals",
      "The sensitivity of the model at the optimal cutpoint determined by Youden's index"
    ],
    answer: 1,
    explanation: "The C-statistic is the probability that a model assigns a higher predicted probability to a randomly chosen case than to a randomly chosen non-case. For binary outcomes, it is equivalent to the area under the ROC curve (AUC). A C-statistic of 0.5 indicates no discrimination (random chance); 1.0 indicates perfect discrimination. In time-to-event analysis, Harrell's C-statistic is the concordance probability accounting for censoring."
  },
  {
    id: 31,
    question: "Verification bias (also called workup bias) in diagnostic test evaluation occurs when:",
    options: [
      "The index test result is incorporated into the reference standard diagnosis",
      "Only a subset of patients undergoes the reference standard test, typically selected based on the index test result, causing biased estimates of sensitivity and specificity",
      "The time interval between index and reference standard testing allows disease progression",
      "Observers are not blinded to clinical information when interpreting the index test"
    ],
    answer: 1,
    explanation: "Verification bias occurs in diagnostic accuracy studies when the decision to perform the reference standard test depends on the index test result. For example, if patients with a positive troponin are more likely to undergo coronary angiography (reference standard), the study population verified by the reference standard is not representative of all patients. This typically inflates sensitivity and underestimates specificity. Statistical methods (e.g., using Begg-Greenes correction) can partially correct for this bias."
  },
  {
    id: 32,
    question: "The QUADAS-2 tool is used to assess:",
    options: [
      "Quality of reporting of randomized controlled trials in systematic reviews",
      "Risk of bias and applicability concerns in diagnostic accuracy studies",
      "Statistical heterogeneity in meta-analyses of diagnostic tests",
      "Certainty of evidence from diagnostic test accuracy systematic reviews (GRADE approach)"
    ],
    answer: 1,
    explanation: "QUADAS-2 (Quality Assessment of Diagnostic Accuracy Studies-2) is a structured tool for critically appraising diagnostic test accuracy studies in systematic reviews. It assesses four domains: patient selection, index test, reference standard, and flow and timing. Each domain is assessed for risk of bias, and the first three are also assessed for applicability concerns (whether the study matches the review question). It replaced the original QUADAS tool in 2011."
  },
  {
    id: 33,
    question: "Youden's index for optimizing a diagnostic test cutpoint is calculated as:",
    options: [
      "Sensitivity × Specificity",
      "Sensitivity + Specificity - 1",
      "(Sensitivity × Specificity) / (1 - Specificity)",
      "2 × Sensitivity × Specificity / (Sensitivity + Specificity)"
    ],
    answer: 1,
    explanation: "Youden's J = Sensitivity + Specificity - 1, which ranges from 0 (no discrimination) to 1 (perfect discrimination). The optimal cutpoint by Youden's index maximizes the sum of sensitivity and specificity, corresponding to the point on the ROC curve that is farthest from the diagonal (line of no discrimination). This approach treats false positives and false negatives as equally costly; clinical context may favor higher sensitivity (screening) or higher specificity (confirmatory testing)."
  },
  {
    id: 34,
    question: "Post-test probability of disease after a diagnostic test result is calculated using:",
    options: [
      "Bayes' theorem: post-test odds = pre-test odds × likelihood ratio",
      "Sensitivity × prior probability / (Sensitivity × prior probability + (1 - Specificity) × (1 - prior probability))",
      "Both A and B are mathematically equivalent methods",
      "Pre-test probability × positive predictive value"
    ],
    answer: 2,
    explanation: "Post-test probability can be calculated equivalently using either Bayes' theorem (convert pre-test probability to pre-test odds, multiply by likelihood ratio, convert back to probability) or Bayes' theorem in probability form (PPV formula). Both formulas are mathematically identical: Post-test prob = (Sens × Pre-test P) / [(Sens × Pre-test P) + ((1-Spec) × (1-Pre-test P))]. Using likelihood ratios and a Fagan nomogram allows rapid mental calculation at the bedside."
  },

  // Questions 35-49: Communicable Diseases
  {
    id: 35,
    question: "SARS-CoV-2 Omicron subvariants (XBB, BQ.1, JN.1) emerged as dominant strains primarily because of:",
    options: [
      "Increased intrinsic virulence causing more severe disease in immunocompromised hosts",
      "Enhanced immune evasion due to convergent evolution at key antibody epitopes, combined with efficient ACE2 binding despite accumulated mutations",
      "Mutations in the nucleocapsid protein that enhanced transmission through fomite contamination",
      "Resistance to antiviral drugs (nirmatrelvir, molnupiravir) through mutations in the SARS-CoV-2 polymerase"
    ],
    answer: 1,
    explanation: "Omicron subvariants showed convergent evolution at key neutralization epitopes in the receptor-binding domain and N-terminal domain of spike protein, substantially evading antibodies from vaccination and prior infection. Despite accumulating many spike mutations, they retained ACE2 affinity through compensatory mutations. JN.1 (BA.2.86 descendant) dominated in 2024 due to its extensive immune evasion while maintaining high transmissibility. Antiviral resistance remains uncommon in immunocompetent hosts."
  },
  {
    id: 36,
    question: "Mpox (monkeypox) clade Ib, which caused the 2024 WHO Public Health Emergency of International Concern in the Democratic Republic of Congo, differs from clade IIb (responsible for the 2022 global outbreak) in that:",
    options: [
      "Clade Ib is transmitted exclusively through respiratory droplets, while clade IIb requires direct skin contact",
      "Clade Ib is associated with higher case fatality rates and evidence of efficient sexual transmission networks in addition to household contact transmission",
      "Clade Ib affects only non-human primates, not humans, explaining the geographic restriction",
      "Clade IIb has higher antiviral resistance rates to tecovirimat compared to clade Ib"
    ],
    answer: 1,
    explanation: "Mpox clade Ib emerged in eastern DRC in 2023-2024 with concerning features: higher case fatality rates (~3-10% vs ~0.1% for clade IIb), evidence of sexual transmission networks, pediatric cases through household contact, and spread to neighboring countries (Rwanda, Uganda, Burundi, Kenya). WHO declared a second PHEIC for mpox in August 2024. Clade IIb caused the 2022 global outbreak primarily among men who have sex with men through close physical/sexual contact."
  },
  {
    id: 37,
    question: "Highly pathogenic avian influenza (HPAI) H5N1 spillover to dairy cattle in the USA in 2024 raised pandemic preparedness concerns because:",
    options: [
      "Evidence of efficient human-to-human transmission was documented in farm workers",
      "The virus acquired mammalian adaptations, demonstrated sustained cattle-to-cattle transmission, infected multiple farm workers (primarily causing conjunctivitis), and showed potential for further adaptive evolution",
      "HPAI H5N1 replaced seasonal influenza as the dominant circulating strain in the USA",
      "All infected dairy cattle died within 48 hours, indicating extreme pathogenicity in mammals"
    ],
    answer: 1,
    explanation: "The 2024 H5N1 dairy cattle outbreak in >300 US herds across >40 states included human spillover cases (primarily conjunctivitis and mild respiratory illness in farm workers). The PB2 gene showed mammalian adaptations (E627K mutation in some isolates). While no sustained human-to-human transmission occurred, the widespread mammalian infection, genetic evidence of adaptation, and proximity to humans prompted elevated pandemic preparedness concerns and deployment of test-and-treat protocols."
  },
  {
    id: 38,
    question: "Nipah virus neurological sequelae following survival from acute encephalitis include:",
    options: [
      "Peripheral neuropathy affecting sensory more than motor function",
      "Persistent personality changes, cognitive impairment, seizures, and late-onset or relapsed encephalitis months to years after initial infection",
      "Progressive cerebellar ataxia resembling spinocerebellar degeneration",
      "Cranial nerve palsies restricted to the facial and vestibulocochlear nerves"
    ],
    answer: 1,
    explanation: "Nipah virus survivors frequently experience neurological sequelae. Approximately 15-20% of survivors have persistent neurological deficits including personality changes, cognitive impairment, and seizures. Uniquely, Nipah can cause relapsed or late-onset encephalitis months to years after initial infection, attributed to viral reactivation from latent infection. This late-onset neurological disease has been documented in both Malaysian and Bangladeshi outbreak survivors."
  },
  {
    id: 39,
    question: "Crimean-Congo hemorrhagic fever (CCHF) is caused by a virus of the genus Nairovirus and is transmitted primarily by:",
    options: [
      "Aedes aegypti mosquitoes during their peak feeding hours at dawn and dusk",
      "Hyalomma tick bites, with additional transmission routes including handling infected animals during slaughter and nosocomial transmission",
      "Sandfly bites in arid semi-desert environments of Sub-Saharan Africa",
      "Direct contact with infected rodent excreta, particularly in endemic areas of Central Asia"
    ],
    answer: 1,
    explanation: "CCHF is caused by Crimean-Congo hemorrhagic fever orthonairovirus (CCHFV) and transmitted primarily by Hyalomma ticks (hard ticks with two-host life cycles). Humans are infected through tick bites, crushing ticks with bare hands, or contact with blood/tissues of infected livestock during slaughter. Healthcare-associated outbreaks occur through contact with infected patient blood. The geographic range is expanding as Hyalomma tick habitat expands with climate change, including cases in Spain and UK-imported cases."
  },
  {
    id: 40,
    question: "Zika virus infection during pregnancy causes fetal harm primarily through:",
    options: [
      "Placental infarction reducing oxygen and nutrient delivery to the developing fetus",
      "Vertical transmission with direct neurotropic infection of neural progenitor cells, causing impaired cortical development, microcephaly, and congenital Zika syndrome",
      "Induction of severe maternal thrombocytopenia leading to placental hemorrhage",
      "Triggering maternal autoimmune response cross-reacting with fetal neural antigens"
    ],
    answer: 1,
    explanation: "Zika virus directly infects neural progenitor cells in the developing brain, causing cell death, impaired proliferation and differentiation, and disrupted cortical organization. The outcome is microcephaly, brain malformations (lissencephaly, pachygyria, calcifications), ophthalmological abnormalities, hearing loss, and joint contractures - collectively termed congenital Zika syndrome. Risk is highest with first-trimester infection. The 2015-16 Brazilian outbreak established the causal link confirmed by multiple studies."
  },
  {
    id: 41,
    question: "The Ebola virus disease (EVD) preparedness framework for healthcare settings emphasizes which primary infection prevention measure?",
    options: [
      "Universal vaccination of all healthcare workers with rVSV-ZEBOV-GP vaccine before any patient contact",
      "Rigorous personal protective equipment (PPE) protocols, patient triage/isolation, safe injection practices, and safe handling of bodies based on viral transmission through direct contact with infected bodily fluids",
      "Aerial spraying of disinfectants in hospital wards and community areas to prevent aerosol transmission",
      "Prophylactic antibiotic administration to prevent secondary bacterial infections in EVD contacts"
    ],
    answer: 1,
    explanation: "Ebola spreads through direct contact with blood, bodily fluids, secretions, and organs of infected individuals. Healthcare-associated transmission is a major amplifier of outbreaks. IPC pillars include: appropriate PPE (impermeable gown, gloves, face shield, boot covers for direct patient care); standardized donning/doffing procedures with a buddy system; patient isolation in Ebola Treatment Units; safe burial practices; and healthcare worker training. The rVSV-ZEBOV-GP (Ervebo) vaccine is used in ring vaccination in active outbreaks."
  },
  {
    id: 42,
    question: "The WHO definition of a multidrug-resistant organism (MDRO) for Staphylococcus aureus would include:",
    options: [
      "Any S. aureus resistant to penicillin",
      "Methicillin-resistant S. aureus (MRSA) - resistant to all beta-lactams except ceftaroline and ceftobiprole - as the primary clinically important MDRO",
      "S. aureus resistant to vancomycin only (VRSA)",
      "S. aureus with reduced vancomycin susceptibility (VISA) defined by MIC 4-8 mg/L"
    ],
    answer: 1,
    explanation: "MRSA is defined by resistance to oxacillin/methicillin, mediated by the mecA gene encoding PBP2a with low affinity for beta-lactams. This confers resistance to all beta-lactam antibiotics except the newer anti-MRSA cephalosporins (ceftaroline, ceftobiprole). MRSA is a critical WHO priority pathogen. Vancomycin (VISA: MIC 4-8 mg/L; VRSA: MIC ≥16 mg/L) resistance is rarer but clinically significant. MRSA requires contact precautions in healthcare settings."
  },
  {
    id: 43,
    question: "In the context of COVID-19 long COVID (post-acute sequelae of SARS-CoV-2 infection, PASC), the proposed mechanisms include all EXCEPT:",
    options: [
      "Viral persistence in tissue reservoirs causing ongoing immune activation and inflammation",
      "Permanent deletion of CD4+ T cell memory specifically targeting SARS-CoV-2 spike protein",
      "Microbiome dysbiosis contributing to systemic inflammation and neurological symptoms",
      "Autoimmune phenomena triggered by molecular mimicry between viral and host proteins"
    ],
    answer: 1,
    explanation: "Proposed mechanisms for long COVID include: viral persistence in gut, lung, and other tissues; reactivation of latent viruses (EBV, CMV); immune dysregulation with persistent activated monocytes; autoantibody production; microbiome disruption; endothelial dysfunction and microclots; and mitochondrial dysfunction. Permanent deletion of CD4+ T cell memory is not an established mechanism; long COVID patients typically show detectable immune memory, though with functional abnormalities."
  },
  {
    id: 44,
    question: "Oral cholera vaccine (OCV) deployment in outbreak settings has shifted from reactive to proactive (pre-emptive) vaccination because:",
    options: [
      "OCV requires only a single dose for full protection, making pre-emptive deployment logistically feasible",
      "Evidence shows that reactive vaccination after outbreak onset has limited impact given the explosive epidemic growth curve, whereas pre-emptive vaccination in high-risk areas can prevent outbreaks or blunt their severity",
      "OCVs provide life-long immunity, reducing the need for booster doses in endemic settings",
      "Pre-emptive OCV reduces antibiotic demand, slowing emergence of cholera antimicrobial resistance"
    ],
    answer: 1,
    explanation: "Cholera outbreaks follow explosive epidemic curves; by the time reactive vaccination is implemented, the peak may have already passed. WHO's 2022 global roadmap to 2030 emphasizes oral cholera vaccine (Shanchol, Euvichol-Plus) deployment as part of a multi-pronged WASH and medical response. The global OCV stockpile, managed by UNICEF/Gavi, supports both reactive campaigns and pre-emptive vaccination in high-risk endemic areas. Two-dose OCV schedules provide ~65% effectiveness for 3-5 years."
  },
  {
    id: 45,
    question: "The 'test and treat' strategy for HIV using point-of-care CD4 counting and same-day antiretroviral initiation improves outcomes primarily by:",
    options: [
      "Eliminating the need for baseline viral load testing before ART initiation",
      "Reducing loss to follow-up between HIV diagnosis and ART initiation by starting treatment at the same clinic visit",
      "Providing CD4-guided prophylaxis for opportunistic infections before ART",
      "Enabling resistance testing before ART to guide first-line regimen selection"
    ],
    answer: 1,
    explanation: "Loss to follow-up between HIV diagnosis and ART initiation ('linkage gap') was a major barrier to achieving treatment coverage targets. Same-day ART initiation (informed by point-of-care CD4 for OI prophylaxis decisions if needed) was shown in the RAP, CASCADE, and other trials to significantly improve 12-month viral suppression by preventing the multi-step cascade failure. WHO's 2017 guidelines endorsed same-day ART initiation for eligible patients as standard of care."
  },
  {
    id: 46,
    question: "Dengue vaccination with CYD-TDV (Dengvaxia) requires pre-vaccination screening because:",
    options: [
      "The vaccine is contraindicated in individuals with autoimmune conditions",
      "Vaccinating dengue-naive individuals (seronegative) increases their risk of severe dengue upon subsequent infection, as the vaccine acts as a 'silent infection' priming for antibody-dependent enhancement",
      "The vaccine is only effective against dengue serotypes 1 and 2, making screening for infecting serotype necessary",
      "Dengue seropositivity is required to establish the correct dosing schedule for the three-dose regimen"
    ],
    answer: 1,
    explanation: "CYD-TDV vaccination of dengue-naive individuals creates immunological priming similar to a primary dengue infection. A subsequent natural dengue infection then resembles a secondary infection, increasing the risk of severe dengue through antibody-dependent enhancement (ADE). WHO recommends pre-vaccination screening (serology or vaccination only in confirmed-seropositive individuals aged 9-45 years) in high-transmission settings. The Philippines vaccination controversy (2017) highlighted this safety concern."
  },
  {
    id: 47,
    question: "The R0 (basic reproduction number) of SARS-CoV-2 Omicron variant was estimated at:",
    options: [
      "1.5-2.5, similar to original ancestral strain",
      "8-15, substantially higher than original strain (R0 ~2-3) and Delta (R0 ~5-7)",
      "3-5, intermediate between ancestral and Delta",
      "15-20, comparable to measles in unvaccinated populations"
    ],
    answer: 1,
    explanation: "The R0 of Omicron BA.1 was estimated at approximately 8-15 in most modelling studies, representing a 2-3 fold increase over Delta (~5-7) and 4-5 fold increase over ancestral SARS-CoV-2 (~2-3). This higher transmissibility reflected enhanced ACE2 binding affinity, shorter serial interval (~2-3 days), and immune evasion allowing reinfection of partially immune individuals, contributing to explosive wave dynamics. For comparison, measles R0 is ~12-18, seasonal influenza ~1.2-1.4."
  },
  {
    id: 48,
    question: "The Global Polio Eradication Initiative (GPEI) uses inactivated poliovirus vaccine (IPV) alongside oral poliovirus vaccine (OPV) because:",
    options: [
      "IPV provides mucosal intestinal immunity that prevents fecal-oral transmission better than OPV",
      "IPV provides systemic humoral immunity without any risk of vaccine-derived poliovirus (VDPV), providing protection against paralytic disease while OPV provides intestinal immunity for transmission interruption",
      "OPV has been discontinued globally due to circulating vaccine-derived poliovirus outbreaks",
      "IPV is preferred in tropical countries where OPV efficacy is lower due to gut microbiome interference"
    ],
    answer: 1,
    explanation: "The switch strategy uses IPV (which cannot revert to virulence or spread) to maintain individual protection against paralytic disease, while topOPV/bivalent OPV maintains intestinal mucosal immunity for transmission interruption in high-risk settings. Circulating vaccine-derived poliovirus (cVDPV), arising when OPV Sabin strains revert toward neurovirulence and circulate in under-vaccinated communities, complicates the endgame strategy. Novel OPV2 (nOPV2) was designed with enhanced genetic stability to reduce VDPV emergence."
  },
  {
    id: 49,
    question: "Visceral leishmaniasis (kala-azar) elimination in the Indian subcontinent is defined as:",
    options: [
      "Zero reported cases of VL for two consecutive years in all endemic districts",
      "Incidence of less than 1 case per 10,000 population per year at sub-district level sustained for at least 3 years",
      "Elimination of the sandfly vector Phlebotomus argentipes from endemic areas through indoor residual spraying",
      "Serological evidence of zero seroprevalence in community surveys in previously endemic blocks"
    ],
    answer: 1,
    explanation: "WHO's visceral leishmaniasis elimination target for the Indian subcontinent (India, Nepal, Bangladesh) is defined as <1 case per 10,000 population per year at sub-district (block/upazila) level sustained for at least 3 years. The strategy relies on early case detection and treatment, vector control through IRS with synthetic pyrethroids, disease surveillance, and social mobilization. India achieved the elimination target at district level in >95% of endemic districts by 2022."
  },

  // Questions 50-64: Non-Communicable Diseases
  {
    id: 50,
    question: "PM2.5 air pollution is classified as a Group 1 human carcinogen (IARC) because it causes:",
    options: [
      "Mesothelioma through direct asbestos-like fiber deposition in the pleura",
      "Lung cancer (primarily adenocarcinoma), with sufficient evidence from human epidemiological studies showing consistent dose-response relationships",
      "Bladder cancer through aromatic amine metabolites excreted in urine",
      "Leukemia through direct bone marrow suppression by polycyclic aromatic hydrocarbons"
    ],
    answer: 1,
    explanation: "IARC classified outdoor air pollution and PM2.5 specifically as Group 1 carcinogens in 2013, based on sufficient evidence of lung cancer causation from epidemiological studies showing consistent dose-response relationships. Fine particulate matter (PM2.5 ≤2.5 micrometers) penetrates deep into alveoli, carrying adsorbed carcinogens (PAHs, heavy metals). The WHO 2021 air quality guidelines reduced the annual mean PM2.5 guideline to 5 μg/m³ (from 10 μg/m³), reflecting accumulating health evidence."
  },
  {
    id: 51,
    question: "Climate change impacts on infectious disease transmission include all EXCEPT:",
    options: [
      "Geographic expansion of Aedes aegypti mosquito habitat to higher altitudes and latitudes",
      "Immediate elimination of malaria from all endemic regions due to extreme heat events exceeding mosquito survival temperatures",
      "Earlier seasonal emergence and extended transmission seasons for tick-borne diseases",
      "Increased cholera risk through altered precipitation patterns, flooding, and contaminated water sources"
    ],
    answer: 1,
    explanation: "Climate change generally expands the geographic range and transmission seasons of vector-borne and waterborne diseases, not eliminates them. While extreme heat (>40°C) can reduce mosquito survival and sporogonic cycle duration may change, the net effect of climate change on malaria is complex: range expansion to new areas, altitude shifts, and changed seasonality. Elimination from existing endemic areas is not an immediate expected consequence; rather, range shifts with winners and losers in different regions."
  },
  {
    id: 52,
    question: "Heat stroke is distinguished from heat exhaustion primarily by:",
    options: [
      "Core body temperature exceeding 37.5°C versus normal temperature in heat exhaustion",
      "Core body temperature ≥40°C (104°F) with central nervous system dysfunction (confusion, seizures, coma) distinguishing heat stroke from heat exhaustion",
      "The presence of profuse sweating in heat stroke versus anhidrosis in heat exhaustion",
      "Elevated serum sodium concentration in heat stroke versus hyponatremia in heat exhaustion"
    ],
    answer: 1,
    explanation: "Classic heat stroke is defined by core temperature ≥40°C with CNS dysfunction (altered mental status, ataxia, seizures, coma). Heat exhaustion features heavy sweating, weakness, dizziness, nausea, and cool/clammy skin with core temperature usually <40°C and without neurological impairment. Classic (non-exertional) heat stroke typically affects elderly with chronic conditions during heat waves; exertional heat stroke affects young athletes. Immediate cooling is the cornerstone of treatment."
  },
  {
    id: 53,
    question: "Organophosphate pesticide poisoning causes cholinergic toxidrome due to:",
    options: [
      "Competitive antagonism of acetylcholine receptors at the neuromuscular junction",
      "Irreversible inhibition of acetylcholinesterase, leading to accumulation of acetylcholine at muscarinic and nicotinic synapses",
      "Stimulation of alpha-adrenergic receptors mimicking the effect of excess norepinephrine",
      "Inhibition of sodium channels at peripheral nerves causing paradoxical acetylcholine release"
    ],
    answer: 1,
    explanation: "Organophosphates irreversibly inhibit acetylcholinesterase by phosphorylating the serine residue at the enzyme's active site. Accumulated acetylcholine causes: (1) muscarinic effects - SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) plus bronchospasm, bradycardia; (2) nicotinic effects - muscle fasciculations, weakness, paralysis; (3) CNS effects - seizures, coma. Atropine antagonizes muscarinic effects; pralidoxime (2-PAM) reactivates acetylcholinesterase if given before 'aging'."
  },
  {
    id: 54,
    question: "The primary target organ for inorganic lead toxicity in children is the brain, causing:",
    options: [
      "Acute encephalopathy only at blood lead levels >70 μg/dL, with no effects below this threshold",
      "Neurodevelopmental impairment (reduced IQ, learning difficulties, behavioral problems) without any established safe threshold, with cognitive effects detectable at blood lead levels as low as 1-2 μg/dL",
      "Progressive motor neuron disease resembling amyotrophic lateral sclerosis",
      "Sensorineural hearing loss as the primary manifestation at low-level exposure"
    ],
    answer: 1,
    explanation: "Lead is a neurotoxin with no established safe threshold in children. Even blood lead levels of 1-2 μg/dL are associated with IQ reductions and behavioral problems. Lead disrupts neurotransmitter systems, calcium signaling, synaptic pruning, and gene expression in the developing brain. The CDC reference value is 3.5 μg/dL (2021 revision from 5 μg/dL), defining elevated blood lead levels requiring investigation. The primary intervention is source removal (lead paint, contaminated soil, water pipes)."
  },
  {
    id: 55,
    question: "Silicosis, caused by inhalation of crystalline silica, is characterized pathologically by:",
    options: [
      "Diffuse interstitial fibrosis with honeycombing indistinguishable from idiopathic pulmonary fibrosis",
      "Silicotic nodules with concentrically laminated collagen in the upper lung zones, with potential for progressive massive fibrosis (PMF) and accelerated tuberculosis risk",
      "Pleural plaques and diffuse pleural thickening in the lower lobes without parenchymal involvement",
      "Bronchioloalveolar carcinoma arising from silica-transformed type II pneumocytes"
    ],
    answer: 1,
    explanation: "Silicosis is characterized by silicotic nodules: concentrically laminated collagen with central necrosis ('whorled' appearance), predominantly in upper lobes, with hilar eggshell calcifications on X-ray. Progressive massive fibrosis (PMF) results from nodule coalescence. Silicosis substantially increases tuberculosis risk (silico-tuberculosis) through impaired macrophage killing of Mycobacterium tuberculosis. Silica is classified as a Group 1 carcinogen for lung cancer. Accelerated silicosis (within 5 years) occurs with high-intensity exposures like artificial stone countertop cutting."
  },
  {
    id: 56,
    question: "Asbestosis is distinguished from other asbestos-related diseases in that:",
    options: [
      "It results from mesothelioma spreading to the lung parenchyma",
      "It is a dose-dependent diffuse interstitial pulmonary fibrosis caused by asbestos fiber inhalation, with lower lobe predominance and asbestos bodies in BAL, distinct from pleural plaques and mesothelioma",
      "It exclusively affects individuals exposed to blue asbestos (crocidolite) and not white asbestos (chrysotile)",
      "It is associated with a latency period of less than 5 years, unlike mesothelioma"
    ],
    answer: 1,
    explanation: "Asbestosis is diffuse interstitial pulmonary fibrosis from accumulated asbestos fiber inhalation, typically with 20-40 year latency. It is distinct from: pleural plaques (discrete pleural fibrosis, dose-related, not malignant), diffuse pleural thickening, and mesothelioma. Pathology shows subpleural lower lobe fibrosis with asbestos bodies (iron-coated fibers). CT shows subpleural reticular opacities, traction bronchiectasis, and honeycomb change. All forms of asbestos are carcinogenic; chrysotile causes lung cancer and asbestosis; amphiboles (crocidolite) have highest mesothelioma risk."
  },
  {
    id: 57,
    question: "The INTERHEART study, conducted in 52 countries, identified the nine modifiable risk factors accounting for over 90% of the population-attributable risk for acute myocardial infarction. The single most important risk factor by PAR% was:",
    options: [
      "Smoking",
      "Abnormal lipids (raised ApoB/ApoA1 ratio)",
      "Hypertension",
      "Abdominal obesity"
    ],
    answer: 1,
    explanation: "The INTERHEART study (Yusuf et al., Lancet 2004) found that abnormal lipids (high ApoB/ApoA1 ratio) had the highest population-attributable risk fraction (~49%) for AMI globally, followed by smoking (~36%), psychosocial factors (~33%), abdominal obesity (~20%), hypertension (~18%), diabetes (~10%), and protective factors (fruit/vegetable consumption, exercise, moderate alcohol). These nine factors together accounted for >90% of AMI risk, consistent across regions and ethnicities."
  },
  {
    id: 58,
    question: "The concept of 'healthy worker effect' is relevant to occupational epidemiology because:",
    options: [
      "Workers develop immunity to occupational hazards over time due to natural selection",
      "Employed populations tend to be healthier than the general population (which includes retired, disabled, unemployed individuals), potentially underestimating the true occupational hazard when comparing worker mortality to general population mortality",
      "Workplace health programs selectively benefit the healthiest workers, introducing a healthy survivor bias",
      "Healthy workers are more likely to participate in occupational health studies, overestimating occupational disease prevalence"
    ],
    answer: 1,
    explanation: "The healthy worker effect is a systematic bias in occupational cohort studies: to be employed, workers must be healthy enough to work, so they have lower mortality than the general population that includes those too sick to work. Using general population mortality as a reference for SMR calculations underestimates occupational hazards. Solutions include using internal comparisons (exposed vs. unexposed workers) or healthy employee controls from non-exposed industries."
  },
  {
    id: 59,
    question: "Global burden of disease studies measure health loss using Disability-Adjusted Life Years (DALYs), where DALY = YLL + YLD. In the 2019 GBD study, the leading cause of DALYs globally was:",
    options: [
      "Ischemic heart disease",
      "Neonatal disorders",
      "Lower respiratory infections",
      "Stroke"
    ],
    answer: 0,
    explanation: "In the GBD 2019 study, ischemic heart disease was the leading cause of DALYs globally (~197 million DALYs), followed by neonatal disorders (~196 million), stroke (~143 million), lower respiratory infections (~137 million), and diabetes (~104 million). Ischemic heart disease was also the leading cause of years of life lost (YLL) globally. The pattern reflects the epidemiological transition with NCDs dominant in high-income countries and a mixed pattern in LMICs."
  },
  {
    id: 60,
    question: "The WHO MPOWER package for tobacco control includes which of the following measures?",
    options: [
      "Monitor tobacco use, Protect from smoke, Offer help to quit, Warn about dangers, Enforce advertising bans, Raise taxes",
      "Mandate smoke-free workplaces, Provide NRT, Organize anti-tobacco campaigns, Warn about cancer risks, Eliminate smuggling, Reduce consumption through price",
      "Mass media campaigns, Pharmacy-based cessation, Outlaw tobacco in public places, Warning labels, Excise taxes, Regulate nicotine content",
      "Media literacy education, Price controls, Outreach programs, Warning signs, Elimination of duty-free tobacco, Regulate tobacco products"
    ],
    answer: 0,
    explanation: "MPOWER was introduced by WHO in 2008 as a set of six evidence-based tobacco demand reduction measures aligned with the FCTC: Monitor tobacco use and prevention policies; Protect people from tobacco smoke; Offer help to quit tobacco; Warn about the dangers of tobacco; Enforce bans on tobacco advertising, promotion and sponsorship; Raise taxes on tobacco. These measures, when implemented at the highest policy level, can substantially reduce tobacco use prevalence."
  },
  {
    id: 61,
    question: "Familial hypercholesterolemia (FH) is caused most commonly by mutations in which gene and follows which inheritance pattern?",
    options: [
      "PCSK9 gain-of-function mutations, autosomal recessive inheritance",
      "LDL receptor (LDLR) loss-of-function mutations, autosomal dominant inheritance, with heterozygous FH prevalence of ~1 in 200-500",
      "Apolipoprotein B (APOB) mutations, X-linked dominant inheritance",
      "Lipoprotein lipase (LPL) deficiency, autosomal dominant inheritance"
    ],
    answer: 1,
    explanation: "FH is most commonly caused by loss-of-function mutations in LDLR (~85-90% of cases), with less common mutations in APOB and PCSK9 gain-of-function. Heterozygous FH (HeFH) affects ~1 in 200-500 and is autosomal dominant; homozygous FH (HoFH) affects ~1 in 300,000-1,000,000 with severe hypercholesterolemia (LDL >13 mmol/L) and premature atherosclerotic disease in childhood. PCSK9 inhibitors (evolocumab, alirocumab) are approved for FH based on dramatic LDL reductions."
  },
  {
    id: 62,
    question: "Non-alcoholic fatty liver disease (NAFLD)/metabolic dysfunction-associated steatotic liver disease (MASLD) diagnosis requires liver biopsy for staging fibrosis because:",
    options: [
      "Liver biopsy is the only method to distinguish steatosis from steatohepatitis, which is required for treatment decisions and clinical trial enrollment",
      "Liver enzymes (ALT, AST) are insensitive and non-specific for fibrosis stage, which is the primary determinant of long-term outcomes (cirrhosis, hepatocellular carcinoma, liver-related mortality)",
      "Imaging cannot distinguish fat from fibrosis at any stage of disease progression",
      "Liver biopsy is required before initiating statin therapy in patients with elevated aminotransferases"
    ],
    answer: 1,
    explanation: "Liver fibrosis stage (F0-F4) is the primary determinant of long-term outcomes in NAFLD/MASLD. ALT and AST are poor surrogates for fibrosis. Non-invasive tests (FIB-4 index, liver stiffness by elastography, ELF score) are used to stratify fibrosis risk and reduce unnecessary biopsies, but liver biopsy (Metavir or Kleiner scoring) remains the reference standard for staging and is required for NASH diagnosis (histological steatohepatitis: steatosis + lobular inflammation + hepatocyte ballooning). The 2023 Delphi consensus renamed NAFLD to MASLD."
  },
  {
    id: 63,
    question: "The GLP-1 receptor agonist semaglutide demonstrated cardiovascular benefit in the SUSTAIN-6 and LEADER trials. The primary cardiovascular benefit of GLP-1 agonists is attributed to:",
    options: [
      "Reduction in heart rate and blood pressure through direct cardiac muscarinic receptor activation",
      "Direct anti-atherosclerotic effects including reduced inflammation, improved endothelial function, reduced foam cell formation, and plaque stabilization, independent of weight loss",
      "Prevention of heart failure with reduced ejection fraction through cardiomyocyte regeneration",
      "Reduction in LDL cholesterol comparable to statin therapy through hepatic receptor upregulation"
    ],
    answer: 1,
    explanation: "GLP-1 receptor agonists reduce major adverse cardiovascular events (MACE) in T2DM patients with high CV risk. Proposed mechanisms include: direct anti-inflammatory effects on arterial plaques, endothelial protection, reduced oxidative stress, modest blood pressure reduction (-2-4 mmHg), modest weight loss effects on CV risk factors, and anti-atherosclerotic effects in animal models. The benefit appears largely independent of glucose lowering (HR ~0.74 for MACE vs placebo). GLP-1 receptors are expressed in the heart and vasculature."
  },
  {
    id: 64,
    question: "The GRADE approach (Grading of Recommendations Assessment, Development and Evaluation) classifies the certainty of evidence into four levels. Evidence from RCTs starts at 'high' certainty but can be downgraded for which of the following reasons?",
    options: [
      "Small sample size (n < 100), factorial design, or use of surrogate outcomes",
      "Risk of bias, inconsistency (heterogeneity), indirectness, imprecision, and publication bias",
      "Industry funding, post-hoc subgroup analyses, and failure to register the protocol",
      "Use of per-protocol rather than ITT analysis or missing data >10%"
    ],
    answer: 1,
    explanation: "GRADE uses five criteria for downgrading certainty: (1) Risk of bias in included studies; (2) Inconsistency (unexplained heterogeneity across studies); (3) Indirectness (differences in PICO from the research question); (4) Imprecision (wide confidence intervals or few events); (5) Publication bias. Observational studies start at 'low' certainty but can be upgraded for large effect, dose-response, or confounding that would underestimate the true effect. GRADE outputs are used for clinical practice guideline development."
  },

  // Questions 65-72: Bioethics
  {
    id: 65,
    question: "Dual-use research of concern (DURC) refers to life sciences research that:",
    options: [
      "Is funded by both public (government) and private (industry) sources simultaneously",
      "Could be directly misapplied to pose a significant threat with potential for mass casualties, posing both scientific benefit and biosecurity risk",
      "Uses human participants and animal models in parallel studies for the same therapeutic objective",
      "Is conducted in both laboratory and field settings to validate experimental findings"
    ],
    answer: 1,
    explanation: "DURC describes legitimate scientific research that could be misused to create biological threats. The US HHS/NSABB and WHO have identified categories including research that enhances pathogen transmissibility, pathogenicity, drug resistance, or immune evasion. Oversight frameworks require biosafety committee review, institutional oversight, and in some cases federal review before publication or performance. The H5N1 ferret transmission experiments (2011-12) triggered the current DURC policy framework."
  },
  {
    id: 66,
    question: "Gain-of-function (GOF) research involving potential pandemic pathogens (PPP-GOF) is ethically controversial because it:",
    options: [
      "Violates the principle of non-maleficence by deliberately creating pathogens with no therapeutic intent",
      "Creates tension between scientific benefit (pandemic preparedness, vaccine development) and biosecurity risk (laboratory accidents, deliberate misuse) that requires independent ethical oversight",
      "Is prohibited by international law under the Biological Weapons Convention",
      "Cannot be conducted under appropriate containment because BSL-4 facilities are unavailable in most countries"
    ],
    answer: 1,
    explanation: "PPP-GOF research involves making pathogen modifications that enhance transmissibility, virulence, or immune evasion for research purposes. Proponents argue it enables pandemic preparedness and vaccine development. Critics cite: (1) risk of laboratory accidents (as occurred with SARS in 2004); (2) risk of deliberate misuse; and (3) question of whether knowledge gained justifies these risks. The P3CO Review Framework (2017) established US federal oversight requiring pre-publication review for federally funded PPP-GOF research."
  },
  {
    id: 67,
    question: "Crisis standards of care (CSC) during a pandemic are ethically justified when:",
    options: [
      "Hospital administrators unilaterally decide to reduce staffing ratios to save costs",
      "Extraordinary circumstances create a substantial change in the patient-to-resource ratio, making usual care delivery impossible, requiring fair allocation protocols developed through transparent community engagement",
      "A hospital is merely operating at >90% capacity for routine conditions without resource scarcity",
      "Individual clinicians decide to offer experimental treatments without IRB approval due to patient urgency"
    ],
    answer: 1,
    explanation: "CSC activation occurs when a disaster or pandemic creates a severe resource-demand mismatch where conventional standards cannot be maintained. Ethical CSC frameworks require: (1) community engagement and transparent protocol development before a crisis; (2) objective allocation criteria based on likelihood of survival (not social worth); (3) procedural fairness (appeals process); (4) regular protocol reassessment; (5) duty of care maintained within available resources. CSC applies at the system level, not to individual practitioner discretion."
  },
  {
    id: 68,
    question: "Ventilator triage during a mass casualty event with extreme resource scarcity is most ethically defensible when using:",
    options: [
      "First-come, first-served allocation based on arrival time at the hospital",
      "Short-term survival-based triage criteria (e.g., SOFA score, likelihood of survival to hospital discharge) applied consistently by a triage officer not directly involved in the patient's care",
      "Social utility criteria prioritizing healthcare workers, younger individuals, and those with family dependents",
      "Lottery/random selection among all patients requiring ventilation without clinical criteria"
    ],
    answer: 1,
    explanation: "Most ethical guidance on ventilator triage favors using objective clinical criteria focused on short-term survival prognosis (e.g., SOFA score in COVID-19 protocols), applied consistently by a dedicated triage team to reduce biased decision-making by bedside clinicians. This approach respects equal worth of each individual while directing limited life-saving resources to those most likely to benefit. First-come-first-served perpetuates healthcare access inequities; social utility criteria are widely rejected as incompatible with equal human dignity."
  },
  {
    id: 69,
    question: "The principle of solidarity in pandemic ethics, as articulated in pandemic frameworks, requires:",
    options: [
      "All nations pooling patent rights for essential medicines and vaccines during emergencies",
      "Mutual assistance and burden-sharing among individuals, communities, and nations recognizing shared vulnerability and collective responsibility for health security",
      "Healthcare workers' unconditional obligation to provide care regardless of personal risk or available PPE",
      "Pharmaceutical companies to provide drugs at cost-price in all low-income country markets"
    ],
    answer: 1,
    explanation: "Solidarity in bioethics and pandemic ethics refers to the acknowledgment of shared vulnerability and the ethical obligation of mutual assistance - individuals accepting inconvenience (masking, vaccination, isolation) to protect others, wealthier nations supporting pandemic response in less-resourced nations, and institutions providing resources to those most vulnerable. Solidarity underpins COVAX, ACT-Accelerator, and international health regulations' collaborative mechanisms. It contrasts with individual-focused autonomy frameworks."
  },
  {
    id: 70,
    question: "Informed consent for genomic sequencing research requires disclosure that:",
    options: [
      "All genomic data will be deleted after primary research analysis to protect participant privacy",
      "Results including incidental findings of clinical significance (e.g., BRCA variants) may be discovered and decisions about return of results should be discussed, along with data sharing plans and re-identification risks",
      "Participants will receive comprehensive genomic counseling before any research results are returned to ensure correct interpretation",
      "The research is governed exclusively by the Declaration of Helsinki and no national regulations apply"
    ],
    answer: 1,
    explanation: "Genomic research informed consent requires addressing: (1) potential for incidental/secondary findings of clinical significance and the participant's right to decide whether to receive them; (2) data sharing plans and deidentification limitations (genomic data is nearly impossible to fully deidentify); (3) re-identification risks; (4) potential family implications (findings relevant to blood relatives); (5) future secondary use of data and samples. ICMR's National Ethical Guidelines for Biomedical Research (2017) and the National Biological Data Policy address these issues for Indian research."
  },
  {
    id: 71,
    question: "Research involving prisoners as participants requires special ethical safeguards because:",
    options: [
      "Prisoners have a legal right to receive experimental treatments unavailable to the general population",
      "The coercive environment of incarceration substantially compromises voluntariness of consent and increases vulnerability to undue inducement",
      "Prison populations are exclusively composed of individuals whose autonomy should be completely restricted",
      "International law prohibits research involving prisoners under the Nuremberg Code"
    ],
    answer: 1,
    explanation: "Prisoners represent a vulnerable population because the coercive institutional environment, power differentials with prison authorities, potential for benefits (improved conditions, parole consideration) to constitute undue inducement, and limited alternatives make fully voluntary consent questionable. DHHS 45 CFR 46 Subpart C provides additional protections for prisoner research in the USA. Research is generally limited to that of minimal risk or direct benefit to prisoners as a class, requiring additional IRB review by a prisoner representative."
  },
  {
    id: 72,
    question: "The concept of 'equipoise' in the context of adaptive platform trials is particularly challenging because:",
    options: [
      "Adaptive trials use fixed sample sizes that cannot be modified once equipoise is lost",
      "As evidence accumulates within the trial and allocation ratios adapt, there may be periods where clinical equipoise is functionally absent for some comparisons while the trial continues enrollment, raising ethical questions about allocation to inferior arms",
      "Equipoise cannot be assessed for multiple simultaneous comparisons in a platform trial",
      "Bayesian adaptive designs do not use the frequentist concept of equipoise"
    ],
    answer: 1,
    explanation: "In adaptive platform trials, response-adaptive randomization shifts allocation toward better-performing arms as evidence accumulates. This creates a tension: while still within the overall adaptive framework, allocation to apparently inferior arms may continue. Ethical justification rests on: (1) pre-specified rules agreed upon prospectively; (2) uncertainty persisting until a defined stopping threshold; (3) DSMB oversight; and (4) the overall benefit of completing the trial versus early stopping. Platform trials must articulate how they maintain ethical integrity during adaptation phases."
  },

  // Questions 73-80: Molecular Biology & Genetics
  {
    id: 73,
    question: "Epigenetic clocks (e.g., Horvath clock, GrimAge) estimate biological age using:",
    options: [
      "Telomere length measured by quantitative PCR across multiple tissues",
      "DNA methylation levels at specific CpG sites in the genome, with biological age deviating from chronological age reflecting health status and disease risk",
      "Histone modification patterns measured by ChIP-seq from blood samples",
      "mRNA expression profiles from peripheral blood mononuclear cells"
    ],
    answer: 1,
    explanation: "Epigenetic clocks use machine learning models trained on genome-wide DNA methylation data (typically from Illumina EPIC or 450K arrays) to estimate biological age from methylation levels at hundreds of CpG sites. First-generation clocks (Horvath, Hannum) predict chronological age; second-generation (GrimAge, PhenoAge) predict biological age more predictive of mortality and disease. Epigenetic age acceleration (biological > chronological age) is associated with increased mortality, cancer, cardiovascular disease, and frailty."
  },
  {
    id: 74,
    question: "DNA methylation arrays (e.g., Illumina EPIC array) measure methylation at approximately how many CpG sites across the human genome?",
    options: [
      "~27,000 CpG sites covering primarily promoter regions",
      "~850,000 CpG sites covering promoters, enhancers, CpG islands, shores, and gene bodies",
      "~28 million CpG sites covering the entire methylome",
      "~450,000 CpG sites focused exclusively on CpG islands"
    ],
    answer: 1,
    explanation: "The Illumina Infinium MethylationEPIC (EPIC) array interrogates ~850,000 CpG sites, expanded from the 450K array (~450,000 sites). The EPIC array covers CpG islands, shores, shelves, open sea, promoters, enhancers, DNASE I hypersensitive sites, and gene bodies. The EPIC v2 array (~930,000 sites) further expanded coverage. While this represents ~3% of the ~28 million CpGs in the human genome, it covers functionally relevant regions. Whole-genome bisulfite sequencing (WGBS) covers all CpG sites at single-nucleotide resolution."
  },
  {
    id: 75,
    question: "ChIP-seq (Chromatin Immunoprecipitation followed by sequencing) is used in molecular biology to:",
    options: [
      "Measure gene expression levels across the entire transcriptome",
      "Map genome-wide binding sites of transcription factors, histone modifications, or other chromatin-associated proteins",
      "Identify DNA methylation patterns at CpG sites across the genome",
      "Assess three-dimensional chromatin structure and topologically associating domains"
    ],
    answer: 1,
    explanation: "ChIP-seq involves: (1) crosslinking proteins to DNA; (2) fragmenting chromatin; (3) immunoprecipitating protein-DNA complexes with a specific antibody (e.g., anti-H3K4me3 for active promoters, anti-H3K27me3 for repressed regions, anti-RNA PolII for transcriptional activity); (4) sequencing the associated DNA fragments. It maps protein-DNA interaction sites and histone modification landscapes, revealing regulatory elements, enhancer activity, and transcriptional regulation across the genome."
  },
  {
    id: 76,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) measures:",
    options: [
      "RNA accessibility and translational efficiency of mRNA transcripts",
      "Chromatin accessibility by using a hyperactive Tn5 transposase to preferentially insert sequencing adapters into nucleosome-free, open chromatin regions",
      "DNA repair activity at sites of double-strand breaks across the genome",
      "Protein-DNA binding affinity using competitive chromatin immunoprecipitation"
    ],
    answer: 1,
    explanation: "ATAC-seq uses a hyperactive Tn5 transposase that preferentially tagments (simultaneously fragments and ligates sequencing adapters) open, nucleosome-free chromatin regions - the accessible chromatin accessible to transcription factors. Sequencing these fragments maps regulatory elements (active promoters, enhancers, insulators) across the genome. Advantages over FAIRE-seq and DNase-seq include requiring far fewer cells (~500-50,000 cells) and being applicable to single cells (scATAC-seq) for cell-type-specific chromatin accessibility mapping."
  },
  {
    id: 77,
    question: "Hi-C is a genomic technique that reveals:",
    options: [
      "High-throughput identification of transcription factor binding sites across the genome",
      "Three-dimensional chromatin architecture including topologically associating domains (TADs), compartments, and enhancer-promoter loops by sequencing ligated proximity-ligation products",
      "Histone modification co-occurrence patterns using sequential chromatin immunoprecipitation",
      "DNA replication timing and origin firing patterns across chromosomes"
    ],
    answer: 1,
    explanation: "Hi-C (in situ) maps genome-wide chromatin contacts by cross-linking spatially proximal chromatin regions, digesting with restriction enzymes, ligating proximal ends, and sequencing the resulting chimeric DNA fragments. This reveals: (1) A/B compartments (active/inactive chromatin); (2) topologically associating domains (TADs) - self-interacting chromatin domains ~0.1-1 Mb; (3) enhancer-promoter loops mediating gene regulation. Disease-associated structural variants that disrupt TAD boundaries can cause aberrant enhancer-gene interactions and alter gene expression."
  },
  {
    id: 78,
    question: "Spatial transcriptomics technologies (e.g., 10x Visium, MERFISH) provide which unique advantage over single-cell RNA sequencing (scRNA-seq)?",
    options: [
      "Higher sequencing depth per cell enabling detection of lowly expressed transcripts",
      "Retention of spatial information linking gene expression profiles to the physical location of cells within a tissue section",
      "Ability to simultaneously measure protein abundance and RNA expression in the same cell",
      "Improved cell capture efficiency enabling analysis of rare cell populations (<0.1% of cells)"
    ],
    answer: 1,
    explanation: "Spatial transcriptomics preserves the spatial context of gene expression within tissue sections, linking transcriptomic profiles to anatomical location. scRNA-seq requires tissue dissociation, losing spatial information. Spatial technologies reveal: tissue architecture-dependent gene expression, cell-cell communication, tumor microenvironment heterogeneity, and developmental gradients. 10x Visium captures spots (~55 μm, ~1-10 cells/spot); single-cell resolution methods (MERFISH, seqFISH+, Slide-seq2) map individual cells while retaining tissue coordinates."
  },

  // Questions 81-86: Microbiology
  {
    id: 79,
    question: "Biofilm formation by bacteria confers antibiotic resistance primarily through:",
    options: [
      "Induction of plasmid-mediated carbapenemase production in all biofilm cells",
      "Multiple mechanisms including limited antibiotic penetration through the extracellular matrix, metabolic dormancy of persister cells, and upregulation of efflux pumps, resulting in 100-1000 fold higher MICs than planktonic cells",
      "Horizontal transfer of integrons carrying resistance genes between biofilm members",
      "Production of beta-lactamases sequestered within the biofilm matrix that hydrolyze antibiotics before reaching bacterial cells"
    ],
    answer: 1,
    explanation: "Biofilms are surface-attached microbial communities encased in a self-produced extracellular polymeric substance (EPS) matrix. Antibiotic tolerance/resistance in biofilms arises from: (1) physical barrier effect of EPS limiting antibiotic diffusion; (2) metabolic heterogeneity with slow-growing or dormant persister cells resistant to antibiotic killing (which targets active metabolism); (3) altered gene expression in biofilm phenotype; (4) local neutralization by reactive matrix components. Medical device biofilms (catheters, prostheses) are a leading cause of recalcitrant healthcare-associated infections."
  },
  {
    id: 80,
    question: "Quorum sensing in bacteria allows:",
    options: [
      "Individual bacterial cells to sense and respond to host immune signals",
      "Population-level coordination of gene expression by detecting and responding to the concentration of secreted signaling molecules (autoinducers) that correlate with cell density",
      "Rapid horizontal gene transfer when bacterial density exceeds a threshold",
      "Competitive exclusion of other microbial species through density-dependent bacteriocin production"
    ],
    answer: 1,
    explanation: "Quorum sensing (QS) allows bacteria to collectively modulate gene expression based on population density. Individual cells secrete autoinducer molecules (N-acyl homoserine lactones in Gram-negatives, autoinducing peptides in Gram-positives). When autoinducer concentration exceeds a threshold, transcriptional programs activate or repress target genes. QS regulates biofilm formation, virulence factor production, bioluminescence, sporulation, and competence. Anti-QS strategies (quorum quenching) are being explored as anti-virulence therapeutic approaches."
  },
  {
    id: 81,
    question: "Bacterial conjugation mediates horizontal gene transfer of resistance genes through:",
    options: [
      "Bacteriophage-mediated packaging and delivery of resistance genes between bacterial cells",
      "Direct cell-to-cell contact via a sex pilus and mating junction, allowing transfer of plasmid DNA (conjugative plasmids carrying tra genes) from donor to recipient cells",
      "Release of DNA into the environment from lysed cells followed by uptake by competent recipients",
      "Integration of transposable elements carrying resistance genes into the recipient chromosome"
    ],
    answer: 1,
    explanation: "Conjugation requires physical contact between donor and recipient cells via a sex pilus encoded by conjugative plasmids. The F pilus retracts to draw cells together; a mating junction forms; and plasmid DNA is transferred via rolling circle replication (one strand transferred, both strands replicated). Conjugative plasmids (R plasmids, F plasmids) can transfer between different species and genera (e.g., E. coli to Klebsiella), explaining rapid intercontinental spread of resistance determinants like NDM-1 and KPC carbapenemases."
  },
  {
    id: 82,
    question: "Generalized transduction (bacteriophage-mediated gene transfer) involves:",
    options: [
      "Specific transfer of phage-associated resistance genes integrated as prophage in the donor chromosome",
      "Accidental packaging of random bacterial chromosomal DNA or plasmid DNA into phage heads, which is then delivered to recipient cells upon phage infection",
      "Transfer of conjugative phage DNA between cells in direct physical contact",
      "Phage-mediated integration of pathogenicity islands at specific attachment sites"
    ],
    answer: 1,
    explanation: "In generalized transduction, random fragments of bacterial DNA are accidentally packaged into phage capsids during the lytic cycle (headful packaging errors), allowing transfer of any bacterial gene (including chromosomal resistance genes) to recipient cells. In specialized transduction, imprecise prophage excision transfers specific flanking bacterial genes. Phage-mediated transduction contributes to horizontal gene transfer in natural environments and biofilms. P1 phage (E. coli) and P22 (Salmonella) are widely used in laboratory genetics for generalized transduction."
  },
  {
    id: 83,
    question: "Natural transformation in bacteria (such as Streptococcus pneumoniae) involves:",
    options: [
      "Bacteriophage-mediated uptake of DNA from the environment",
      "Spontaneous uptake of exogenous DNA from the environment by naturally competent cells, with competence development regulated by quorum sensing and nutrient limitation",
      "Plasmid DNA transfer through mating junctions between directly touching cells",
      "Viral vector delivery of resistance genes into chromosomally integrated landing pads"
    ],
    answer: 1,
    explanation: "Natural transformation occurs when naturally competent cells (S. pneumoniae, H. influenzae, N. meningitidis, B. subtilis) take up naked DNA from the environment through specialized DNA uptake machinery. Competence is regulated by quorum-sensing peptides and stress signals. Taken-up DNA undergoes RecA-mediated homologous recombination with the chromosome. This mechanism is clinically significant for S. pneumoniae, enabling mosaic PBP (penicillin-binding protein) genes by integrating DNA from commensal streptococci, explaining penicillin resistance evolution."
  },
  {
    id: 84,
    question: "CRISPR-Cas systems in bacteria primarily function as:",
    options: [
      "Gene editing tools enabling bacteria to deliberately modify their own genomes for adaptation",
      "Adaptive immune systems that recognize and cleave foreign nucleic acids (phage DNA, plasmids) using RNA-guided Cas nucleases, with memory maintained in CRISPR arrays",
      "Transcriptional regulators controlling stress response genes under nutrient limitation",
      "DNA repair systems enabling non-homologous end joining of double-strand breaks"
    ],
    answer: 1,
    explanation: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats)-Cas (CRISPR-associated protein) systems are bacterial and archaeal adaptive immune systems. Upon pathogen encounter, short spacer sequences from foreign DNA are integrated into the CRISPR array. Upon re-exposure, spacers are transcribed into crRNA that guides Cas nuclease to cleave matching foreign DNA. Type I, II, and III systems use different effector complexes. The Cas9 nuclease from Type II systems (S. pyogenes) is the basis for all CRISPR-Cas9 genome editing technology."
  },
  {
    id: 85,
    question: "Clostridium difficile (Clostridioides difficile) colitis is primarily caused by:",
    options: [
      "Direct invasion of colonic epithelium by vegetative C. difficile organisms",
      "Toxin A (enterotoxin) and Toxin B (cytotoxin) glucosylating Rho GTPases, disrupting the actin cytoskeleton and tight junctions causing colitis, with disease enabled by antibiotic-related microbiome disruption",
      "Spore germination in the small intestine causing enterotoxin-mediated secretory diarrhea",
      "Exotoxin-mediated mast cell degranulation causing histamine-driven hypersecretion"
    ],
    answer: 1,
    explanation: "C. difficile pathogenesis requires prior antibiotic disruption of the colonization-resistant gut microbiome, allowing C. difficile spore germination and colonization. Toxin A and B both glucosylate Rho-family GTPases (Rho, Rac, Cdc42), inhibiting GTP binding and causing cytoskeletal collapse, loss of epithelial barrier integrity, and inflammatory cell recruitment. Hypervirulent ribotype 027 produces binary toxin (CDT) in addition to A and B. Fecal microbiota transplantation (FMT) restores colonization resistance for recurrent CDI."
  },
  {
    id: 86,
    question: "The MacConkey agar is a selective and differential medium for enteric Gram-negative bacteria. It differentiates organisms based on:",
    options: [
      "H2S production, distinguishing Salmonella from non-Salmonella Enterobacteriaceae",
      "Lactose fermentation: lactose fermenters (e.g., E. coli) produce acid, turning colonies pink-red due to neutral red indicator; non-fermenters (e.g., Shigella, Salmonella) remain colorless",
      "Urease production, creating a pH change detected by phenol red indicator",
      "Oxidase activity distinguishing Enterobacteriaceae from Pseudomonas species"
    ],
    answer: 1,
    explanation: "MacConkey agar contains lactose, bile salts (inhibit Gram-positive organisms), and neutral red pH indicator. Lactose-fermenting organisms (E. coli, Klebsiella, Enterobacter) produce acid, lowering pH and turning neutral red pink-red, creating pink/red colonies with precipitated bile salts around them. Non-lactose fermenters (Shigella, Salmonella, Proteus, Pseudomonas) form colorless or pale colonies. Sorbitol-MacConkey agar differentiates E. coli O157:H7 (sorbitol-negative) from other E. coli (sorbitol-positive)."
  },

  // Questions 87-93: English
  {
    id: 87,
    question: "A person who hates the human race is called:",
    options: [
      "Misogynist",
      "Misanthrope",
      "Philanthropist",
      "Nihilist"
    ],
    answer: 1,
    explanation: "A misanthrope is a person who dislikes or distrusts humankind in general. The word derives from Greek misos (hatred) + anthropos (human being). A misogynist specifically hates women; a philanthropist is a person who promotes welfare of others; a nihilist rejects all religious and moral principles. One-word substitutions are common in competitive English sections of Indian entrance examinations."
  },
  {
    id: 88,
    question: "The Latin phrase 'in vitro' used in biomedical research literally means:",
    options: [
      "In life (referring to studies in living organisms)",
      "In glass (referring to experiments conducted outside a living organism in controlled laboratory settings)",
      "Under examination (referring to microscopic analysis)",
      "By observation (referring to clinical case reports)"
    ],
    answer: 1,
    explanation: "In vitro (Latin: 'in glass') refers to experiments performed in a controlled environment outside a living organism, such as in a test tube, petri dish, or cell culture. Contrasted with in vivo ('in life') - experiments in living organisms - and ex vivo - experiments on tissue removed from a living organism. In silico refers to computational/computer-simulated experiments. These Latin terms are ubiquitous in biomedical literature and are used without italics in modern scientific writing."
  },
  {
    id: 89,
    question: "Identify the correct use of a medical terminology root: The prefix 'brady-' in medical terminology means:",
    options: [
      "Slow or abnormally slow",
      "Fast or abnormally rapid",
      "Absence or deficiency",
      "Excessive or above normal"
    ],
    answer: 0,
    explanation: "Brady- derives from Greek bradys meaning slow. Examples: bradycardia (slow heart rate, <60 bpm), bradypnea (slow breathing), bradykinesia (slowness of movement, as in Parkinson's disease), and bradyarrhythmia. The opposite prefix is tachy- (fast): tachycardia, tachypnea. Other common prefixes: a-/an- (absence), hyper- (excessive), hypo- (deficient). Familiarity with Greek and Latin roots enables decoding of unfamiliar medical terms."
  },
  {
    id: 90,
    question: "The Greek prefix 'hem-' or 'hemo-' (also spelled 'haem-/haemo-' in British English) refers to:",
    options: [
      "Water or fluid",
      "Blood",
      "Liver",
      "Skin or integument"
    ],
    answer: 1,
    explanation: "Hemo-/haemo- derives from Greek haima meaning blood. Examples: hemoglobin (blood oxygen-carrying protein), hemolysis (destruction of red blood cells), hemorrhage (bleeding), hematology (study of blood), hemostasis (stopping of blood flow), hemoptysis (coughing up blood). Related prefixes: hepat- (liver), derm-/dermat- (skin), hydr-/hydro- (water). Knowledge of these roots is essential for interpreting medical terminology in examination contexts."
  },
  {
    id: 91,
    question: "The Latin phrase 'per os' abbreviated as 'p.o.' in medical prescriptions means:",
    options: [
      "Through the skin (transdermal route)",
      "By mouth (oral route of administration)",
      "As needed or when required",
      "Twice daily (bis in die)"
    ],
    answer: 1,
    explanation: "Per os (p.o.) is Latin for 'through the mouth' and denotes oral administration of drugs. Other common Latin prescription abbreviations: i.v. = intravenous; i.m. = intramuscular; s.c./s.q. = subcutaneous; s.l. = sublingual; t.o.p. = topical; p.r. = per rectum. Frequency abbreviations: q.d./o.d. = once daily; b.i.d./b.d. = twice daily; t.i.d./t.d.s. = three times daily; q.i.d./q.d.s. = four times daily; p.r.n. = as needed (pro re nata). Understanding these is essential for interpreting prescriptions and medical records."
  },
  {
    id: 92,
    question: "In scientific writing, the word 'albeit' is best used to mean:",
    options: [
      "Therefore or consequently",
      "Although or even though (conceding a point while making a contrasting statement)",
      "In addition to or furthermore",
      "As a result or subsequently"
    ],
    answer: 1,
    explanation: "Albeit is a conjunction meaning 'although' or 'even though,' used to introduce a concessive clause that modifies or qualifies the main statement. Example: 'The study showed a significant association, albeit modest in magnitude.' It functions similarly to 'though' or 'even if.' Contrast with: therefore/hence (consequence), furthermore/moreover (addition), subsequently/thereafter (temporal sequence). Using precise connective language is important for clarity in scientific writing."
  },
  {
    id: 93,
    question: "The word 'senescence' in biological contexts means:",
    options: [
      "The process of new cell formation and proliferation",
      "The biological process of aging involving progressive cellular and organismal deterioration and loss of function",
      "The state of complete cellular quiescence with preserved function",
      "The irreversible commitment of a stem cell to a specific differentiated lineage"
    ],
    answer: 1,
    explanation: "Senescence derives from Latin senescere meaning 'to grow old.' In biology, cellular senescence is a state of stable cell cycle arrest accompanied by a senescence-associated secretory phenotype (SASP), contributing to tissue aging and age-related diseases. Organismal senescence refers to the overall aging process. Related terms: senile (relating to old age), senility (deterioration associated with aging). Senolytics (drugs clearing senescent cells) are a major area of aging research and ICMR-funded research in India."
  },

  // Questions 94-100: General Knowledge
  {
    id: 94,
    question: "The 2023 Nobel Prize in Physiology or Medicine was awarded to Katalin Karikó and Drew Weissman for:",
    options: [
      "Development of CRISPR-Cas9 gene editing technology for therapeutic applications",
      "Discoveries concerning nucleoside base modifications that enabled development of effective mRNA vaccines",
      "Elucidation of the structure and function of toll-like receptors in innate immunity",
      "Development of the first approved CAR-T cell therapy for B-cell lymphoma"
    ],
    answer: 1,
    explanation: "Karikó and Weissman received the 2023 Nobel Prize for discovering that replacing uridine with pseudouridine in mRNA substantially reduces innate immune activation while maintaining translational capacity. This modification, along with optimized 5' cap structures and poly-A tails, was fundamental to developing stable, immunologically tolerated mRNA molecules - the basis for the Pfizer-BioNTech and Moderna COVID-19 mRNA vaccines, which protected hundreds of millions of lives during the pandemic."
  },
  {
    id: 95,
    question: "The current WHO Director-General (as of 2024) is:",
    options: [
      "Gro Harlem Brundtland",
      "Tedros Adhanom Ghebreyesus",
      "Margaret Chan",
      "Lee Jong-wook"
    ],
    answer: 1,
    explanation: "Dr. Tedros Adhanom Ghebreyesus (Ethiopia) became WHO Director-General in July 2017, the first African to hold the position, and was re-elected for a second five-year term in May 2022. He served as Ethiopia's Minister of Health (2005-2012) and Minister of Foreign Affairs (2012-2016) before being elected DG. Previous DGs include Lee Jong-wook (2003-2006), Margaret Chan (2006-2017), and earlier Gro Harlem Brundtland (1998-2003)."
  },
  {
    id: 96,
    question: "The Lancet Commission on Climate and Health (Lancet Countdown) tracks indicators in which domains related to climate change and health?",
    options: [
      "Carbon emissions trading, renewable energy deployment, fossil fuel subsidies, and green GDP metrics",
      "Climate change exposures and health impacts, adaptation and resilience, mitigation actions, finance and economics, and public and political engagement",
      "Pharmaceutical industry carbon footprint, hospital waste management, and medical device lifecycle assessments",
      "Vector-borne disease modeling, climate projections, and healthcare workforce training metrics"
    ],
    answer: 1,
    explanation: "The Lancet Countdown is an independent global monitoring effort tracking the links between climate change and human health across five domains: (1) climate change impacts, exposures, and vulnerability; (2) adaptation, planning, and resilience for health; (3) mitigation actions and health co-benefits; (4) economics and finance; (5) public and political engagement. Annual reports (published since 2017) track 44 indicators, documenting how climate change is increasingly threatening human health globally and quantifying health co-benefits of mitigation."
  },
  {
    id: 97,
    question: "UNITAID, a global health initiative, primarily functions by:",
    options: [
      "Providing direct grants to national governments for purchasing essential medicines",
      "Using innovative financing (primarily a solidarity levy on airline tickets) to accelerate development, introduction, and scale-up of innovations for HIV, TB, malaria, and hepatitis",
      "Manufacturing and distributing generic antiretroviral drugs to Sub-Saharan African countries",
      "Negotiating pharmaceutical patent waivers for essential medicines in low-income countries"
    ],
    answer: 1,
    explanation: "UNITAID, hosted by WHO, uses innovative financing mechanisms - primarily a small levy on airline tickets (collected by member countries including France, Chile, South Korea, and others) - to fund market interventions that make health products more available and affordable. Unlike the Global Fund (which finances country programs) or bilateral donors, UNITAID focuses on market shaping, technology transfer, generic medicine entry, and early introduction of innovations. Successful examples include pediatric ARV formulations, bedaquiline access programs, and long-acting HIV prevention tools."
  },
  {
    id: 98,
    question: "The President's Emergency Plan for AIDS Relief (PEPFAR) is significant in global health history because:",
    options: [
      "It was the first multilateral financing mechanism for a single disease, established by the UN Security Council",
      "It represents the largest commitment by any nation to combat a single disease, providing over $100 billion since 2003, enabling ART for ~20 million people and saving over 25 million lives",
      "It established the intellectual property waiver framework allowing compulsory licensing of antiretroviral drugs in developing countries",
      "It created the WHO prequalification program for generic HIV medicines ensuring quality assurance"
    ],
    answer: 1,
    explanation: "PEPFAR, launched by US President George W. Bush in 2003, is the largest bilateral health investment in history to address a single disease. As of 2023, it has supported ART for approximately 20 million people, reached 7.5 million infants with HIV prevention interventions, and funded HIV testing for hundreds of millions. Multiple studies estimate PEPFAR has averted 25+ million AIDS deaths since its inception. It operates through bilateral agreements with ~50 countries, primarily in sub-Saharan Africa."
  },
  {
    id: 99,
    question: "The ICMR Vision 2030 document prioritizes which strategic pillars for biomedical research in India?",
    options: [
      "Exclusive focus on communicable disease elimination, pharmaceutical manufacturing, and clinical trial hosting for multinational companies",
      "Strengthening research infrastructure, developing indigenous health technologies, expanding clinical research capacity, addressing priority disease burden, and promoting translational research from bench to bedside and population",
      "Outsourcing all Phase III trials to private CROs while ICMR focuses exclusively on basic science research",
      "Establishing India as the primary global supplier of vaccine antigens and generic pharmaceutical raw materials by 2030"
    ],
    answer: 1,
    explanation: "ICMR's strategic vision emphasizes: strengthening the national research ecosystem (infrastructure, human resource, funding); developing affordable indigenous diagnostics, drugs, and vaccines for Indian disease burden; expanding clinical and epidemiological research capabilities across regions; addressing India's dual burden of communicable and non-communicable diseases; and promoting translation of research into policy and practice. ICMR coordinates >1000 institutes and programs including NIRT, NARI, NIRRH, and regional medical research centres."
  },
  {
    id: 100,
    question: "The 'Access to COVID-19 Tools (ACT) Accelerator' was a WHO-led initiative that included which major pillar specifically focused on vaccine development and equitable access?",
    options: [
      "COVAX - the COVID-19 Vaccines Global Access facility co-led by Gavi, CEPI, and WHO",
      "UNITAID - the innovative financing mechanism providing market-based solutions for vaccine procurement",
      "The Medicines Patent Pool enabling compulsory licensing of COVID-19 vaccines for LMIC manufacturers",
      "FIND - the Foundation for Innovative New Diagnostics coordinating global vaccine trial networks"
    ],
    answer: 0,
    explanation: "ACT-Accelerator was launched in April 2020 with four pillars: Diagnostics (FIND/UNITAID), Therapeutics (Wellcome/Mastercard), Vaccines (COVAX), and Health Systems. COVAX, co-led by Gavi, CEPI, and WHO, aimed to accelerate vaccine development through advance market commitments and ensure equitable global access by delivering 2 billion doses to lower-income countries by end of 2021. While COVAX achieved important milestones, it faced supply challenges with high-income countries securing bilateral deals that prioritized their own populations, delaying LMIC access."
  }
];

export default questions;

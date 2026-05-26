const questions = [
  {
    id: 1,
    question: "A researcher submits a manuscript where she reports that her western blot bands were 'enhanced for clarity' by digitally increasing contrast selectively in the experimental lanes but not in the control lanes. According to ORI (Office of Research Integrity) guidelines, this action is best classified as:",
    options: [
      "A) Acceptable image processing as long as it does not change the interpretation",
      "B) Falsification, because selective manipulation misrepresents the actual experimental data",
      "C) Fabrication, because new data is being created digitally",
      "D) A minor ethical lapse requiring only a correction notice"
    ],
    answer: 1,
    explanation: "ORI guidelines classify falsification as manipulating research materials, equipment, or processes, or changing or omitting data so that the research is not accurately represented. Selectively enhancing contrast in experimental lanes while leaving control lanes unaltered misrepresents the actual signal differences, constituting falsification. This is distinct from fabrication (making up data) and is not acceptable image processing."
  },
  {
    id: 2,
    question: "A senior scientist publishes findings from a large randomized controlled trial. Later, a whistleblower reveals that approximately 15% of participant data were invented to reach the desired sample size. The institution initiates an inquiry. Under the US federal definition of research misconduct (42 CFR Part 93), which element is NOT required to prove research misconduct?",
    options: [
      "A) The act must constitute fabrication, falsification, or plagiarism",
      "B) The act must be committed intentionally, knowingly, or recklessly",
      "C) The act must have caused measurable harm to study participants",
      "D) The allegation must be a significant departure from accepted practices"
    ],
    answer: 2,
    explanation: "Under 42 CFR Part 93 (the US federal definition used by ORI), research misconduct requires: (1) the act involves FFP (fabrication, falsification, or plagiarism), (2) the act represents a significant departure from accepted practices, and (3) the act was committed intentionally, knowingly, or recklessly. Causing measurable harm to participants is NOT a required element for classifying an act as research misconduct, though it may be relevant to consequences."
  },
  {
    id: 3,
    question: "A researcher publishes a review article and includes a verbatim paragraph from her own previously published primary research article without quotation marks or citation to the original. COPE (Committee on Publication Ethics) would categorize this as:",
    options: [
      "A) Redundant publication, since the same author is involved",
      "B) Self-plagiarism or text recycling, which is a form of research misconduct",
      "C) Acceptable practice since no intellectual property of others is violated",
      "D) Duplicate submission, subject only to editorial retraction"
    ],
    answer: 1,
    explanation: "COPE guidelines recognize self-plagiarism (also called text recycling) as an ethical violation. Reusing one's own previously published text verbatim without attribution deceives readers and editors about the originality of the work and may violate copyright held by the original publisher. While less severe than plagiarism of others' work, it remains misconduct per COPE and most journal policies. It is distinct from duplicate publication (submitting the same study twice) and redundant publication."
  },
  {
    id: 4,
    question: "A researcher conducts a large prospective cohort study and then publishes the results as four separate papers—one on cardiovascular outcomes, one on renal outcomes, one on neurological outcomes, and one on all-cause mortality—without cross-referencing the papers or informing editors of their common dataset. This practice is known as:",
    options: [
      "A) Fragmented publication or 'salami slicing'",
      "B) Duplicate publication",
      "C) Selective outcome reporting",
      "D) HARKing (Hypothesizing After Results are Known)"
    ],
    answer: 0,
    explanation: "Salami slicing (fragmented publication) refers to dividing a single study's results into the smallest publishable units to maximize the number of publications. While each paper may contain unique data, the practice is considered unethical because it inflates the researcher's publication count, fragments knowledge, wastes peer reviewer time, and may mislead systematic reviewers. Duplicate publication involves submitting the same data to multiple journals, which is distinct from salami slicing."
  },
  {
    id: 5,
    question: "During peer review of a manuscript, a reviewer discovers that the submitted paper is nearly identical to a preprint posted by the same authors 6 months earlier. The authors did not disclose the preprint to the journal editor. According to COPE guidelines, the editor should:",
    options: [
      "A) Automatically reject the paper because posting a preprint before journal submission is always prohibited",
      "B) Contact the authors to clarify whether the preprint was disclosed and assess journal policy on preprints",
      "C) Retract the paper without contacting the authors since duplicate publication has already occurred",
      "D) Refer the case to ORI immediately for investigation of research misconduct"
    ],
    answer: 1,
    explanation: "COPE guidelines emphasize that posting a preprint is generally not considered duplicate publication, as preprints are openly acknowledged preliminary communications. However, non-disclosure of a preprint to an editor may be a breach of transparency. The recommended first step is for the editor to contact the authors to understand the situation and check whether journal policy requires preprint disclosure. Only if journal policy explicitly prohibits preprints and the authors knowingly concealed this would stronger action be warranted."
  },
  {
    id: 6,
    question: "A PhD student copies three paragraphs from an obscure 1978 journal article (not available online) and includes them verbatim in her thesis introduction without attribution. The plagiarism detection software does not flag it. According to research integrity principles, this situation:",
    options: [
      "A) Is not plagiarism because automated detection did not identify it",
      "B) Is not plagiarism because the source is too old to be protected by copyright",
      "C) Constitutes plagiarism regardless of detection, because the standard is misrepresentation of authorship, not detection",
      "D) Is acceptable in a thesis but would be misconduct if published in a journal"
    ],
    answer: 2,
    explanation: "Plagiarism is defined as the appropriation of another person's ideas, processes, results, or words without giving appropriate credit—regardless of detection by software. The ethical standard is based on the act of misrepresentation, not whether it is caught. Copyright expiry does not eliminate the ethical obligation to attribute ideas and words to their source. The definition applies equally to theses and published articles."
  },
  {
    id: 7,
    question: "A researcher who fabricated data in a federally funded study is investigated by ORI. The investigation concludes with a finding of misconduct. Which of the following is NOT a typical administrative action ORI can impose under US federal regulations?",
    options: [
      "A) Debarment from receiving federal funding for a specified period",
      "B) Requirement for supervision of future research activities",
      "C) Criminal prosecution for fraud",
      "D) Requirement for correction or retraction of publications"
    ],
    answer: 2,
    explanation: "ORI handles administrative proceedings and can impose civil/administrative sanctions: debarment from federal funding, supervised research, required corrections/retractions, and letters of reprimand. ORI itself cannot impose criminal prosecution; criminal charges for research fraud must be referred to the Department of Justice through separate legal proceedings. ORI's authority is administrative and regulatory, not criminal."
  },
  {
    id: 8,
    question: "A researcher submits the same original research article simultaneously to two different journals. Both journals accept the paper, and it is published in both. This is called duplicate publication. Which of the following best describes why this is considered unethical, beyond copyright concerns?",
    options: [
      "A) It inflates citation counts for the researcher unfairly",
      "B) It distorts the evidence base, potentially causing the same findings to be double-counted in systematic reviews and meta-analyses",
      "C) It violates the peer reviewers' confidentiality by having two sets of reviewers assess the same work",
      "D) It violates ICMJE's criteria for authorship"
    ],
    answer: 1,
    explanation: "While duplicate publication has multiple ethical problems, the most serious scientific harm is distortion of the evidence base. When the same study appears twice, systematic reviewers and meta-analysts may inadvertently include it twice, artificially inflating the apparent weight of evidence for a particular finding. This can lead to erroneous clinical or policy recommendations. This is the primary scientific integrity concern beyond copyright infringement."
  },
  {
    id: 9,
    question: "An institution receives an allegation that a faculty member fabricated data. According to standard research integrity investigation procedures (consistent with ORI guidelines), what is the correct sequence of formal steps after an allegation is received?",
    options: [
      "A) Investigation → Inquiry → Adjudication → Notification to ORI",
      "B) Inquiry → Investigation → Adjudication → Notification to funding agency",
      "C) Adjudication → Inquiry → Investigation → Notification to ORI",
      "D) Notification to ORI → Inquiry → Investigation → Adjudication"
    ],
    answer: 1,
    explanation: "The standard process per ORI guidelines is: (1) Inquiry — a preliminary assessment to determine if the allegation has substance and warrants a full investigation (typically within 60 days); (2) Investigation — a formal, thorough examination of the facts (typically within 120 days); (3) Adjudication — a determination of findings and any sanctions; (4) Notification to the funding agency (ORI) of findings. ORI is notified after institutional findings, not before the inquiry begins."
  },
  {
    id: 10,
    question: "A researcher publishes a paper that presents data from a study that was never conducted. When confronted, she produces a laboratory notebook with entries, but forensic analysis reveals the ink and paper dates are inconsistent with the claimed experimental period. According to COPE's retraction guidelines, the journal should:",
    options: [
      "A) Issue an expression of concern and await the institutional investigation outcome before retracting",
      "B) Immediately retract the paper and publish the retraction notice regardless of whether the author consents",
      "C) Issue a correction to replace fabricated data with accurate data",
      "D) Remove the paper from the journal's website without formal notification"
    ],
    answer: 1,
    explanation: "COPE's retraction guidelines state that papers should be retracted when there is clear evidence that the findings are unreliable due to fabrication. When forensic evidence demonstrates fabrication, the journal should retract the paper, and retraction notices should be published even if authors do not cooperate or consent. Waiting indefinitely for institutional resolution is not appropriate when evidence of fabrication is already clear; expressions of concern are appropriate in uncertain situations, but clear fabrication warrants retraction."
  },
  {
    id: 11,
    question: "A large multi-site clinical trial has 45 investigators. For the primary publication, the first author is the PI, followed by 12 named co-authors, and then 'the XYZ Trial Investigators' for the remaining 33. According to ICMJE criteria, which condition must ALL named authors (but NOT necessarily group members listed collectively) satisfy?",
    options: [
      "A) They must have collected at least 10% of the total study data",
      "B) They must have made substantial contributions to conception/design OR data acquisition/analysis, AND drafting/revising the manuscript critically, AND given final approval, AND agreed to be accountable",
      "C) They must have contributed to at least two of the four ICMJE authorship criteria",
      "D) They must be listed with their institutional affiliations and ORCID identifiers"
    ],
    answer: 1,
    explanation: "ICMJE 2013 criteria require ALL four conditions for authorship: (1) Substantial contributions to conception/design OR acquisition/analysis/interpretation of data; (2) Drafting the work or revising it critically for important intellectual content; (3) Final approval of the version to be published; (4) Agreement to be accountable for all aspects of the work. All four criteria must be met. Group members who do not meet all four criteria should be listed in the acknowledgements. Data collection alone (option A) is not sufficient for authorship."
  },
  {
    id: 12,
    question: "A pharmaceutical company funds a clinical trial and provides a biostatistician who performs all data analysis. The company insists the biostatistician not be listed as an author to protect proprietary methods, yet the biostatistician's analysis forms the entire results section. This scenario describes:",
    options: [
      "A) Honorary authorship for the listed academic authors",
      "B) Ghost authorship, where a significant contributor is deliberately omitted from the author list",
      "C) Gift authorship for the biostatistician",
      "D) Acceptable practice because confidentiality agreements supersede authorship norms"
    ],
    answer: 1,
    explanation: "Ghost authorship occurs when a person who makes a substantial intellectual contribution to a manuscript is not listed as an author. The biostatistician who performed all data analysis clearly meets ICMJE criterion 1 (substantial contribution to data analysis), yet is deliberately excluded. This is a well-documented problem in industry-funded research and is considered a form of research misconduct. It is not gift authorship (which is adding an undeserving author) nor honorary authorship (adding someone based on status alone)."
  },
  {
    id: 13,
    question: "A department head who provided laboratory space and administrative support for a study demands to be listed as a co-author on the resulting paper. She did not contribute intellectually to the research design, analysis, or manuscript. The junior researchers comply out of fear. This is an example of:",
    options: [
      "A) Ghost authorship",
      "B) Coercive or gift/honorary authorship (also called 'guest authorship')",
      "C) Legitimate corresponding author privilege",
      "D) Acceptable acknowledgment converted to authorship for administrative reasons"
    ],
    answer: 1,
    explanation: "Gift/honorary/guest authorship (terms used interchangeably in the literature) refers to listing someone as an author who does not meet authorship criteria, often based on seniority, prestige, or power dynamics. When achieved through coercion by a superior, it is additionally termed coercive authorship. ICMJE explicitly states that providing resources or administrative support alone does not qualify for authorship — such contributions should be acknowledged. This practice distorts the accountability that authorship is meant to convey."
  },
  {
    id: 14,
    question: "The CRediT (Contributor Roles Taxonomy) was developed to address limitations of traditional author lists. A manuscript uses CRediT and lists Researcher X as having roles: 'Conceptualization,' 'Formal analysis,' and 'Writing – original draft.' Researcher Y is listed only as 'Resources' and 'Funding acquisition.' According to ICMJE authorship criteria, which of these researchers clearly meets the threshold for authorship?",
    options: [
      "A) Researcher X only, as conceptualization and writing meet ICMJE criteria 1 and 2",
      "B) Researcher Y only, as funding acquisition is a primary authorship qualifier",
      "C) Both researchers, as any CRediT role qualifies for authorship",
      "D) Neither researcher, as CRediT roles do not map to ICMJE criteria"
    ],
    answer: 0,
    explanation: "CRediT taxonomy provides granular description of contributions but does not replace ICMJE authorship criteria. Researcher X (conceptualization + formal analysis + writing-original draft) clearly meets ICMJE criteria 1 (substantial intellectual contribution) and 2 (drafting/revising the manuscript). Researcher Y (resources + funding acquisition) does not satisfy ICMJE criterion 1 or 2 — these contributions merit acknowledgment, not authorship. CRediT is a descriptive tool; authorship determination must still follow ICMJE standards."
  },
  {
    id: 15,
    question: "A corresponding author submits a manuscript to a journal and, after acceptance, is contacted by the journal regarding a post-publication concern about data integrity. The corresponding author claims she cannot be held responsible because she was not involved in data collection. According to ICMJE criteria and research integrity principles, which statement is most accurate?",
    options: [
      "A) The corresponding author's accountability is limited to the sections she personally wrote",
      "B) As corresponding author, she accepted responsibility for coordinating co-authors' accountability and cannot disclaim responsibility for the submitted work",
      "C) Accountability rests solely with the first author since she conducted the experiments",
      "D) The institution, not the corresponding author, bears primary responsibility for post-publication concerns"
    ],
    answer: 1,
    explanation: "ICMJE states that the corresponding author takes primary responsibility for communication with the journal during submission, peer review, and post-publication. By agreeing to be corresponding author, she accepted the role of ensuring all co-authors can be held accountable for the work. ICMJE criterion 4 requires all authors to agree to be accountable for all aspects of the work, ensuring that questions about accuracy or integrity are appropriately investigated. The corresponding author cannot disclaim this oversight responsibility."
  },
  {
    id: 16,
    question: "A researcher submits her paper to a journal she found advertised via email. The journal charges $2,800 APC, claims to be indexed in major databases (but is not), has a fictitious editorial board, and publishes the paper within 72 hours without any apparent peer review. This journal is best described as:",
    options: [
      "A) A legitimate open-access journal with expedited review",
      "B) A predatory journal exploiting the author-pays open access model",
      "C) A mega-journal with post-publication peer review",
      "D) A preprint server with peer overlay"
    ],
    answer: 1,
    explanation: "Predatory journals exploit the author-pays (APC) open access model by accepting papers for a fee without genuine peer review, falsely claiming indexing, using deceptive journal names, and listing fake or hijacked editorial boards. The 72-hour publication turnaround without peer review is a hallmark indicator. Publishing in predatory journals wastes research funding, pollutes the scientific literature with unreviewed work, and can damage a researcher's reputation. Beall's list (now discontinued) and Think-Check-Submit are resources for identifying such journals."
  },
  {
    id: 17,
    question: "Three researchers (A, B, and C) collaborate equally on a study. For manuscript submission, a dispute arises: A wants to be listed first (claiming she initiated the project), B argues seniority warrants his placement first, and C contends alphabetical order should be used. According to established authorship norms, what is the most appropriate resolution?",
    options: [
      "A) Seniority should always determine first authorship position",
      "B) The decision should be made by mutual agreement among authors before the work begins or early in the project, guided by relative contributions",
      "C) Alphabetical ordering is the default standard in all scientific disciplines",
      "D) The corresponding author has unilateral authority to determine author order"
    ],
    answer: 1,
    explanation: "There is no universal rule for author order across all disciplines. In biomedical sciences, the convention is generally that first author made the greatest contribution, with last author often being the senior PI. ICMJE recommends that authorship order be decided jointly by co-authors, ideally before the work begins, based on agreed-upon contributions. Alphabetical order is conventional in some fields (economics, mathematics) but not in biomedical research. No single author has unilateral authority over order, and seniority alone is not an appropriate basis."
  },
  {
    id: 18,
    question: "A researcher is invited to peer review a manuscript. While reading it, she recognizes it is likely from a competitor's lab working on the same problem she is. She reviews it and recommends minor revisions, then delays submitting her review for 4 months. During this period, she submits her own competing paper to another journal. This scenario raises concerns about:",
    options: [
      "A) Duplicate publication and salami slicing",
      "B) Unethical peer review — deliberate delay to gain competitive advantage and potential use of confidential information",
      "C) Plagiarism of the reviewed manuscript's ideas",
      "D) Conflict of interest in authorship only"
    ],
    answer: 1,
    explanation: "Peer reviewers have a duty to maintain confidentiality of submitted manuscripts and to avoid using information gained in the review process for personal advantage. Deliberate delay of a review to gain competitive advantage while using knowledge of the unpublished work is a serious breach of peer review ethics. COPE guidelines state that reviewers must not delay reviews, exploit confidential information, or use it to advance their own research before the reviewed paper is published. This may also constitute theft of ideas if she incorporated the competitor's unpublished findings."
  },
  {
    id: 19,
    question: "A multi-national consortium of 500+ researchers publishes findings. The corresponding author lists '500+ authors' with a group name 'The Global Genomics Consortium' followed by a list of all 500 individuals in a supplementary appendix. For MEDLINE indexing purposes, what is the typical standard for how these contributors are indexed?",
    options: [
      "A) All 500 contributors are indexed individually as authors in PubMed",
      "B) Only the first 6 listed individual authors and the group name are typically indexed in PubMed",
      "C) Only the group name is indexed; individual contributors are not searchable",
      "D) NLM indexes whichever authors are listed in the journal's full-text XML without limit"
    ],
    answer: 1,
    explanation: "NLM/PubMed's indexing policy for group authorship has historically indexed the first author(s) listed (commonly up to the first 6 individual named authors), then 'et al.,' plus the collective/group name. Individual contributors listed in appendices are often not individually indexed in PubMed unless they are among the first-listed authors. This creates challenges for credit attribution in large consortia and is an ongoing discussion in the field of scholarly communication. The exact number indexed can vary with NLM policy updates."
  },
  {
    id: 20,
    question: "A researcher's manuscript is rejected by Journal A. She then submits it to Journal B without disclosing that it was previously reviewed at Journal A, but she incorporates all of Journal A's reviewer comments without attribution. Is this ethically problematic?",
    options: [
      "A) Yes — the researcher is obligated to disclose prior submissions and review history to Journal B",
      "B) No — sequential submission after rejection is standard practice and prior review history need not be disclosed",
      "C) Yes — but only if Journal A and Journal B share a common owner or editorial board",
      "D) No — incorporating reviewer feedback constitutes legitimate revision and no disclosure is needed"
    ],
    answer: 1,
    explanation: "Sequential submission after rejection is entirely standard and ethical. There is no general requirement to disclose prior rejections to new journals — this is a normal part of the publishing process. Incorporating reviewer feedback into revisions is expected and appropriate. Disclosure of prior submissions is NOT mandated by ICMJE or COPE guidelines for sequential (not simultaneous) submissions. Some journals may ask about prior submissions as a matter of policy, in which case honest disclosure is required, but absent such a specific request, non-disclosure is not unethical."
  },
  {
    id: 21,
    question: "A researcher runs an RCT and, after seeing the data, decides to report the outcome that showed statistical significance (p=0.03) as the 'primary outcome,' even though the pre-specified primary outcome showed no significant effect (p=0.42). The originally registered protocol listed the non-significant measure as primary. This is an example of:",
    options: [
      "A) Legitimate adaptive trial design",
      "B) Outcome switching / selective outcome reporting — a form of research misconduct",
      "C) HARKing (Hypothesizing After Results are Known)",
      "D) Publication bias"
    ],
    answer: 1,
    explanation: "Outcome switching (a form of selective outcome reporting) occurs when researchers change the designation of primary vs. secondary outcomes after seeing the data, typically to report whichever outcome showed statistical significance. This is identifiable by comparing the published paper against the pre-registered protocol. The AllTrials campaign and initiatives like COMPare (CEBM) have systematically documented this practice. It distorts the evidence base and inflates false positive rates. HARKing involves presenting post-hoc hypotheses as a priori, which is related but distinct."
  },
  {
    id: 22,
    question: "A researcher analyzes her dataset and obtains p=0.06. She then tries 12 different statistical models (different covariates, transformations, subgroup definitions) until one yields p=0.048. She reports only this final model without disclosing the 12 alternative analyses. This practice is known as:",
    options: [
      "A) Sensitivity analysis",
      "B) p-hacking or researcher degrees of freedom exploitation",
      "C) Pre-registered confirmatory analysis",
      "D) Bayesian model comparison"
    ],
    answer: 1,
    explanation: "P-hacking (also called data dredging, researcher degrees of freedom, or the garden of forking paths) refers to exploiting the flexibility in data analysis — trying multiple approaches until a statistically significant result is obtained — without disclosing or correcting for multiple comparisons. Simmons, Nelson & Simonsohn (2011) demonstrated that such practices dramatically inflate false-positive rates. When 12 models are tried and only the significant one reported, the nominal p<0.05 no longer represents a 5% false positive rate; the true rate may be 40-60%."
  },
  {
    id: 23,
    question: "A researcher conducts a study, obtains results showing an unexpected finding, and then writes the introduction as if the unexpected finding was the original hypothesis (presenting it as confirmatory rather than exploratory). This practice is called:",
    options: [
      "A) Selective outcome reporting",
      "B) P-hacking",
      "C) HARKing — Hypothesizing After Results are Known",
      "D) Outcome switching"
    ],
    answer: 2,
    explanation: "HARKing (Hypothesizing After Results are Known), coined by Kerr (1998), involves presenting post-hoc (data-driven) hypotheses as though they were a priori predictions. This misrepresents exploratory research as confirmatory, inflates false discovery rates, and makes findings appear more robust than they are. HARK'd hypotheses have 100% confirmation rate by definition. Pre-registration is the primary method to prevent HARKing by requiring researchers to commit to hypotheses before data collection."
  },
  {
    id: 24,
    question: "According to ICMJE requirements, clinical trials that begin enrollment after July 1, 2005, must be registered in a public trials registry before enrollment begins to be considered for publication. A researcher registers her trial AFTER data collection is complete. The CONSORT extension for trial registration would classify this as:",
    options: [
      "A) Compliant with ICMJE requirements since registration occurred before publication",
      "B) Retrospective registration, which is considered non-compliant with the ICMJE prospective registration requirement",
      "C) Acceptable if the trial was registered before the manuscript was submitted",
      "D) Equivalent to prospective registration if the registry entry is backdated"
    ],
    answer: 1,
    explanation: "ICMJE requires prospective registration — trials must be registered BEFORE the first participant is enrolled. Retrospective registration (after enrollment has begun or is complete) defeats the primary purpose of trial registration, which is to prevent selective reporting of outcomes by locking in the protocol before results are known. Retrospective registration may be accepted by some journals with editorial discretion for legacy trials, but it is explicitly non-compliant with ICMJE standards. Backdating a registry entry would constitute research misconduct."
  },
  {
    id: 25,
    question: "The CONSORT 2010 checklist applies to which type of study, and what is its primary purpose?",
    options: [
      "A) Systematic reviews; to standardize the reporting of meta-analyses",
      "B) Randomized controlled trials; to standardize reporting so readers can assess the validity and applicability of results",
      "C) Observational cohort studies; to guide the collection of longitudinal data",
      "D) Diagnostic accuracy studies; to report sensitivity and specificity measurements"
    ],
    answer: 1,
    explanation: "CONSORT (Consolidated Standards of Reporting Trials) applies specifically to randomized controlled trials. Its 25-item checklist and flow diagram ensure transparent reporting of trial conduct (randomization, allocation concealment, blinding, participant flow, etc.) so readers can assess internal validity and external applicability. STROBE is for observational studies (cohort, case-control, cross-sectional), PRISMA is for systematic reviews/meta-analyses, and STARD is for diagnostic accuracy studies."
  },
  {
    id: 26,
    question: "Publication bias refers to the tendency for positive/significant findings to be published more than null/negative findings. Which of the following study designs is the MOST effective at directly addressing publication bias in a systematic review?",
    options: [
      "A) Searching only MEDLINE and EMBASE databases",
      "B) Including only peer-reviewed articles in the review",
      "C) Searching trial registries, contacting investigators for unpublished data, and including grey literature alongside database searches",
      "D) Restricting the review to studies with sample sizes above 500"
    ],
    answer: 2,
    explanation: "Publication bias arises because unpublished studies with null results never enter the published literature. To address this, systematic reviewers must search trial registries (e.g., ClinicalTrials.gov, WHO ICTRP) to identify registered but unpublished trials, contact study authors for unpublished data, and search grey literature (conference abstracts, dissertations, regulatory documents). Restricting to MEDLINE/EMBASE or peer-reviewed articles exacerbates rather than addresses publication bias. The Cochrane Handbook provides detailed guidance on this."
  },
  {
    id: 27,
    question: "A researcher conducts a large observational study and submits it to a journal for a 'Registered Report.' In the Registered Report format, the journal's peer review and in-principle acceptance occurs at which stage?",
    options: [
      "A) After all data are collected and analyzed, and the manuscript is fully written",
      "B) After the introduction and methods are written and peer-reviewed, before data collection begins",
      "C) After a preprint is posted and has received community comments for 6 months",
      "D) After the study has been replicated by an independent laboratory"
    ],
    answer: 1,
    explanation: "Registered Reports are a publication format where peer review occurs in two stages: Stage 1 review evaluates the introduction, hypotheses, and methods BEFORE data collection. If accepted in principle, the journal commits to publishing the paper regardless of results, eliminating outcome-dependent acceptance bias. Stage 2 review occurs after data collection and analyses, evaluating whether the authors followed their pre-registered plan. This format directly combats HARKing, p-hacking, and outcome switching."
  },
  {
    id: 28,
    question: "The STROBE statement provides reporting guidelines for observational studies. Which of the following is a key item in STROBE that is NOT included in CONSORT?",
    options: [
      "A) Description of randomization and allocation concealment procedures",
      "B) Explicit description of how confounding was addressed (e.g., restriction, matching, statistical adjustment)",
      "C) Sample size calculation and statistical power",
      "D) Description of the primary and secondary outcomes"
    ],
    answer: 1,
    explanation: "STROBE (Strengthening the Reporting of Observational Studies in Epidemiology) includes specific items relevant to observational study design, notably detailed reporting of how confounding was handled — including which confounders were considered and how they were controlled (restriction, matching, stratification, or multivariable adjustment). CONSORT deals with RCTs where randomization theoretically controls confounding; it addresses allocation concealment and blinding instead. Both STROBE and CONSORT address sample size and outcome definitions."
  },
  {
    id: 29,
    question: "A researcher adds a sentence to her methods section stating: 'We hypothesized that intervention X would reduce outcome Y by 30%.' This hypothesis is actually generated after seeing the data showing a 30% reduction. She inserts it into the introduction pre-submission. A reviewer who detects this HARKing can verify it by:",
    options: [
      "A) Checking whether the manuscript passed plagiarism detection software",
      "B) Comparing the submitted manuscript with the pre-registered trial protocol on ClinicalTrials.gov",
      "C) Analyzing the statistical power of the study",
      "D) Checking the journal's conflict of interest disclosure forms"
    ],
    answer: 1,
    explanation: "The most direct way to detect outcome switching and HARKing is to compare the published/submitted manuscript with the pre-registered protocol on a public trial registry (ClinicalTrials.gov, ISRCTN, etc.). The registration timestamp predates enrollment, so discrepancies between the registered hypotheses/outcomes and those reported in the manuscript reveal post-hoc changes. This is exactly the methodology used by the COMPare project (CEBM, Oxford) which systematically audited RCT reporting against registrations."
  },
  {
    id: 30,
    question: "The PRISMA 2020 statement updated PRISMA 2009 with new items. Which of the following is a NEW requirement in PRISMA 2020 that was NOT part of PRISMA 2009?",
    options: [
      "A) Reporting a PICOS (Population, Intervention, Comparator, Outcome, Study design) framework",
      "B) Reporting the number of studies at each stage of the screening process in a flow diagram",
      "C) Reporting the search strategy for at least one database in full, AND reporting searches of trial registries",
      "D) Reporting the data extraction method and risk of bias assessment"
    ],
    answer: 2,
    explanation: "PRISMA 2020 introduced new requirements compared to PRISMA 2009, including: mandatory reporting of searches in trial registries (not just bibliographic databases), full search strategies for at least one database, use of automation tools in screening, reporting of certainty of evidence (GRADE), and updated flow diagrams that accommodate evidence from multiple sources. The flow diagram and basic elements (PICOS, data extraction, risk of bias) were present in PRISMA 2009. The trial registry search requirement is a key new addition reflecting increased awareness of publication bias."
  },
  {
    id: 31,
    question: "A forensic statistician is auditing a dataset of 10,000 financial transactions supposedly generated by a research study's participant expense claims. She applies Benford's Law. What pattern would indicate the data may have been fabricated?",
    options: [
      "A) The first digits follow an approximately logarithmic distribution with '1' appearing most frequently (~30%)",
      "B) The first digits are uniformly distributed (each appearing approximately 11.1% of the time)",
      "C) The first digit '9' appears most frequently (~30%)",
      "D) Even digits appear more frequently than odd digits"
    ],
    answer: 1,
    explanation: "Benford's Law predicts that in naturally occurring numerical datasets spanning multiple orders of magnitude, the leading digit d appears with frequency log₁₀(1 + 1/d). This gives: 1 ≈ 30.1%, 2 ≈ 17.6%, 3 ≈ 12.5%, ..., 9 ≈ 4.6%. Fabricated data generated by humans tends to have a more uniform distribution of leading digits (humans avoid starting with '1' too often, consider certain numbers 'more random,' etc.). A uniform distribution of first digits deviates significantly from Benford's prediction and is a forensic red flag for fabrication."
  },
  {
    id: 32,
    question: "The GRIM test (Granularity-Related Inconsistency of Means) can be used to detect potential errors or data fabrication in published papers. GRIM can only be applied when:",
    options: [
      "A) The dataset contains continuous measurements on a ratio scale",
      "B) The reported mean is of integer-valued items (e.g., Likert scale responses) and sample size is reported",
      "C) The standard deviation is larger than the mean",
      "D) The study used a between-subjects experimental design"
    ],
    answer: 1,
    explanation: "The GRIM test (Brown & Heathers, 2017) works specifically for means of integer-valued items. When you compute the mean of n integers, the decimal part of that mean is constrained to multiples of 1/n. For example, with n=20, valid mean endings include .00, .05, .10, .15, etc. If a reported mean has a decimal that cannot be produced by any combination of integers with the reported sample size, it is GRIM-inconsistent and may indicate rounding errors, wrong sample sizes, or data fabrication. It cannot be applied to continuous measurements where any decimal is theoretically possible."
  },
  {
    id: 33,
    question: "A researcher publishes a Western blot image where she has clearly duplicated a band from one condition and placed it in another lane to represent a different experimental condition. According to ORI's image integrity guidelines, which type of manipulation is this?",
    options: [
      "A) Acceptable digital enhancement for publication quality",
      "B) Splicing — rearranging the original gel image to misrepresent experimental results",
      "C) Duplication — copying and placing a band from one part of an image to another to fabricate or falsify results",
      "D) Contrast adjustment — altering the tonal range of the image"
    ],
    answer: 2,
    explanation: "ORI's guidelines on digital image integrity identify several types of prohibited manipulations. Duplicating a band from one lane and placing it in another lane constitutes image duplication/cloning — a form of fabrication or falsification. This is distinct from splicing (inappropriately joining images from different gels without disclosure) or contrast adjustment (globally altering image tone). Image duplication tools (like image forensics software analyzing pixel patterns) can detect such manipulations. Multiple high-profile retractions (e.g., Hwang, Bulfone-Paus) involved such image manipulations."
  },
  {
    id: 34,
    question: "The FAIR data principles (Findable, Accessible, Interoperable, Reusable) were published in 2016. A researcher deposits her dataset with a persistent identifier, a detailed metadata record, and a clear data use license. However, she embargoes the raw data for 5 years after publication. Which FAIR principle is MOST directly compromised?",
    options: [
      "A) Findable — the data cannot be found without access",
      "B) Accessible — the data and metadata should be accessible under well-defined conditions, and metadata should remain accessible even if data is not immediately available",
      "C) Interoperable — the data cannot be integrated with other datasets during embargo",
      "D) Reusable — the data cannot be reused without first verifying its provenance"
    ],
    answer: 1,
    explanation: "The FAIR 'Accessible' principle (A1) states that data should be retrievable by their identifier using an open, free, standardized protocol. A1.2 states that the protocol allows for authentication and authorization where necessary. Importantly, FAIR does NOT require open access — embargoes are compatible with FAIR if metadata is accessible and access conditions are clearly described. The most directly relevant principle is Accessibility: the data itself is not accessible, though the metadata should remain available. FAIR data can be embargoed, making this a partial rather than complete violation of Accessibility."
  },
  {
    id: 35,
    question: "A researcher claims her study is fully reproducible because she has shared her code and data. An independent team downloads the materials and is unable to reproduce the results despite following the documented protocol exactly. This failure most directly illustrates which dimension of reproducibility?",
    options: [
      "A) Replicability failure — a new study with new data gives different results",
      "B) Computational reproducibility failure — the same data and code do not regenerate the same results",
      "C) Conceptual replication failure — the underlying hypothesis does not hold across contexts",
      "D) Statistical reproducibility failure — power calculations were incorrect"
    ],
    answer: 1,
    explanation: "The National Academies of Sciences (2019) report 'Reproducibility and Replicability in Science' distinguishes: Reproducibility (computational) — same data + same code = same results; and Replicability — new data + new methods testing the same hypothesis = consistent results. When an independent team uses the shared data and code but cannot get the same results, this is a computational reproducibility failure. This can occur due to software version dependencies, undocumented preprocessing steps, operating system differences, or random seeds not being set."
  },
  {
    id: 36,
    question: "A journal requires data sharing as a condition of publication. A researcher shares a 'cleaned' dataset but withholds the raw data, removes participant records she considers outliers without documentation, and omits variables she didn't analyze. According to open science principles, this practice:",
    options: [
      "A) Fully complies with data sharing requirements as long as the shared dataset supports the reported analyses",
      "B) Compromises scientific transparency because data cleaning decisions are hidden and the full dataset is not available for independent verification",
      "C) Is appropriate to protect participant privacy under GDPR",
      "D) Is acceptable because journals cannot mandate sharing of variables not included in the published analysis"
    ],
    answer: 1,
    explanation: "Sharing only a curated subset of data, applying undocumented exclusions, and omitting variables violates the spirit and often the letter of data sharing policies. The purpose of data sharing is to enable independent verification and reanalysis. Undisclosed outlier removal and selective variable sharing may conceal analytical decisions that affected results. GDPR concerns apply to identifiable personal data and are addressed through anonymization/aggregation, not wholesale data withholding. Open science principles require transparency about data provenance, cleaning procedures, and the full analytical dataset."
  },
  {
    id: 37,
    question: "The SPRITE test (Sample Parameter Reconstruction via Iterative Techniques) was developed as an extension of GRIM testing. SPRITE can be used to:",
    options: [
      "A) Detect image manipulation in figures using pixel-level analysis",
      "B) Reconstruct possible distributions of integer data consistent with reported means, SDs, and sample sizes to identify implausible data patterns",
      "C) Test whether p-values follow the expected uniform distribution under the null hypothesis",
      "D) Identify statistical outliers using robust estimation methods"
    ],
    answer: 1,
    explanation: "SPRITE (Heathers et al., 2018) reconstructs all possible integer datasets consistent with reported summary statistics (mean, SD, sample size, scale bounds). If the reported statistics require distributions that are physically impossible (e.g., all responses piled at extreme values, impossible variance structures) or highly implausible, this suggests errors or fabrication. SPRITE extends GRIM by considering not just mean feasibility but the plausibility of the entire distribution. It has been used in fraud investigations in psychology and nutrition research."
  },
  {
    id: 38,
    question: "A research group conducting a 10-year longitudinal cohort study has accumulated a rich dataset. They plan to release data under an open license. What is the PRIMARY ethical concern with open data release for longitudinal cohort studies involving health data?",
    options: [
      "A) Risk of data being cited incorrectly in meta-analyses",
      "B) Re-identification risk — participants may be identifiable when longitudinal data are combined with external datasets even after standard de-identification",
      "C) Risk that other researchers will publish competing papers using the data",
      "D) Copyright concerns over the database structure"
    ],
    answer: 1,
    explanation: "For longitudinal health datasets, the primary ethical concern with open release is re-identification risk. Standard de-identification (removing direct identifiers like name, DOB, address) is insufficient because longitudinal data creates unique temporal patterns. Latanya Sweeney's research showed that 87% of Americans can be uniquely identified using just ZIP code, birthdate, and sex. In longitudinal cohorts, the combination of temporal data (disease onset, treatment patterns over time) with publicly available datasets (voter rolls, social media, insurance databases) can re-identify participants. This is distinct from a mere privacy concern — it violates the original informed consent given by participants."
  },
  {
    id: 39,
    question: "A researcher's funder mandates data sharing within 12 months of publication. The researcher argues she cannot share because the data belongs to a hospital that collected clinical records. According to data governance principles, what is the most appropriate course of action?",
    options: [
      "A) The researcher should ignore the funder mandate since hospital data governance takes precedence",
      "B) A data access committee or data sharing agreement should be established so qualified researchers can apply for access under appropriate governance, rather than either full open release or complete non-sharing",
      "C) The researcher should publish de-identified summary statistics instead of individual-level data to fulfill the mandate",
      "D) The funder mandate should be renegotiated to exempt clinical data entirely"
    ],
    answer: 1,
    explanation: "When full open data sharing is impossible due to institutional governance, patient privacy, or data ownership issues, the ethical and compliant alternative is a tiered data access model: establishing a Data Access Committee (DAC) that reviews applications from qualified researchers for access under appropriate agreements (data use agreements, DUAs). This is used by UK Biobank, dbGaP, and major biobanks. It balances scientific transparency with legitimate governance constraints. Summary statistics alone do not fulfill data sharing mandates for reproducibility purposes. Ignoring the funder mandate risks grant violations."
  },
  {
    id: 40,
    question: "A meta-analysis is conducted on 20 published RCTs. The funnel plot is markedly asymmetric with small studies clustered at the top and no small studies in the lower-left quadrant. Egger's test is statistically significant (p=0.003). The most parsimonious interpretation is:",
    options: [
      "A) The true effect size varies systematically by study size due to genuine heterogeneity",
      "B) Small negative or null studies are missing from the literature, consistent with publication bias against negative findings from small studies",
      "C) Large studies have lower statistical power than small studies",
      "D) The meta-analysis has included studies with heterogeneous populations"
    ],
    answer: 1,
    explanation: "Funnel plot asymmetry with absence of small studies in the lower-left region (small studies with negative/null results) is the classic pattern of publication bias. Small studies with positive results are more likely to be published than small studies with negative results, producing asymmetry. Egger's test formally tests this asymmetry. While other causes of funnel plot asymmetry exist (true heterogeneity, methodological quality differences), publication bias is the most common interpretation when smaller studies consistently show larger effects. The 'trim and fill' method can impute the missing studies and provide an adjusted effect estimate."
  },
  {
    id: 41,
    question: "A researcher is a named inventor on a patent held by a company that makes the drug being evaluated in her clinical trial. She discloses this at submission. According to ICMJE conflict of interest (COI) guidelines, which statement is most accurate?",
    options: [
      "A) Disclosure alone is sufficient; the researcher may serve as PI and primary analyst",
      "B) The conflict should be disclosed to the journal, and readers should be able to judge its potential influence; in some cases, particularly for primary outcome analysis, an independent analyst may be required",
      "C) The researcher must withdraw from the study entirely as the conflict is irreconcilable",
      "D) Financial COI is only relevant if the researcher received more than $10,000 from the company"
    ],
    answer: 1,
    explanation: "ICMJE COI guidelines state that all financial relationships (including patents) must be disclosed. Disclosure allows editors, reviewers, and readers to assess potential bias. For significant financial interests related to the study drug, journals and institutions may require additional safeguards, such as independent statistical analysis or data monitoring. The ICMJE does not set a monetary threshold for disclosure — any financial relationship should be disclosed. Complete withdrawal is not always required; the extent of separation depends on the severity of the conflict and the role of the researcher."
  },
  {
    id: 42,
    question: "A junior researcher witnesses her supervisor fabricating data. She fears reporting it because the supervisor controls her career. Which legal and institutional protections are typically available to her in the research misconduct reporting process?",
    options: [
      "A) Whistleblower protection laws in most countries guarantee complete anonymity and prohibit any career retaliation, enforced with criminal penalties",
      "B) Federal regulations in the US (42 CFR Part 93) and most institutional policies prohibit retaliation against good-faith reporters, though protection varies by jurisdiction and enforcement can be inconsistent",
      "C) She must report directly to ORI without institutional involvement to receive whistleblower protection",
      "D) Academic freedom principles fully protect her from retaliation without need for formal whistleblower statutes"
    ],
    answer: 1,
    explanation: "42 CFR Part 93 (§93.300) explicitly prohibits retaliation against individuals who report research misconduct in good faith. Institutions receiving federal funding must have policies protecting whistleblowers. However, the practical reality is more complex: protection varies by jurisdiction, enforcement is inconsistent, and career retaliation (subtle forms like poor references, reduced opportunities) can be difficult to prove. The system provides legal protection but does not guarantee zero retaliation risk, making this a genuine systemic challenge in research integrity. COPE also advocates for institutional whistleblower protections."
  },
  {
    id: 43,
    question: "An investigation finds that a researcher's misconduct involved data fabrication that affected 15 published papers over 10 years. The retraction of these papers is coordinated by which entities, and what is the typical process?",
    options: [
      "A) ORI directly orders journals to retract papers; journals must comply within 30 days",
      "B) The institution notifies the relevant journals; editors independently assess the evidence and issue retractions following their own editorial process, usually with COPE guidance",
      "C) The researcher must personally request retraction; journals cannot retract without author consent",
      "D) The funding agency (NIH/ICMR) directly contacts journals and compels retraction"
    ],
    answer: 1,
    explanation: "ORI and institutions do not have direct authority to compel journals to retract papers. The process is: (1) The institution/ORI notifies relevant journals of misconduct findings; (2) Each journal editor independently evaluates the evidence and makes retraction decisions; (3) COPE guidelines provide the framework for retraction decisions. Journals may retract without author consent when evidence is clear (COPE supports this). Authors cannot prevent retraction of fabricated work by withholding consent. This decentralized system can lead to delays in retraction of fraudulent papers, a known limitation of the current system."
  },
  {
    id: 44,
    question: "A researcher has a non-financial conflict of interest: she has publicly advocated for a particular dietary intervention for years and is now conducting an RCT testing it. According to ICMJE and research integrity principles, which statement is most accurate?",
    options: [
      "A) Non-financial conflicts of interest (intellectual/ideological) are not subject to disclosure requirements",
      "B) Non-financial conflicts (intellectual, personal, ideological) can bias research and should be disclosed alongside financial conflicts",
      "C) This represents academic freedom and cannot be characterized as a conflict of interest",
      "D) Only journal editors, not study authors, need to disclose non-financial conflicts of interest"
    ],
    answer: 1,
    explanation: "ICMJE explicitly recognizes non-financial conflicts of interest, including intellectual, personal, political, and ideological competing interests. Strong prior public advocacy for a hypothesis creates a non-financial competing interest because it may bias study design, analysis, interpretation, and reporting. Many journals now ask authors to disclose both financial and non-financial competing interests. While more difficult to quantify than financial conflicts, non-financial COIs are equally capable of compromising objectivity and should be disclosed for transparency."
  },
  {
    id: 45,
    question: "A research institution's Research Integrity Officer (RIO) receives an allegation of plagiarism. The alleged perpetrator is the Vice-Chancellor of the university. How does this affect the institutional investigation process?",
    options: [
      "A) The RIO has no authority over senior administrators; the allegation must be dismissed",
      "B) The investigation must be conducted with the same procedural standards, but additional safeguards (external committee members, external oversight) may be required to ensure impartiality",
      "C) ORI takes over direct investigation of all senior administrative cases",
      "D) The allegation should be referred to the police as it involves an abuse of authority"
    ],
    answer: 1,
    explanation: "Research misconduct policies must apply equally to all members of an institution, regardless of seniority. However, when the alleged respondent is a senior administrator (who might have influence over the investigation), COPE and ORI guidelines recommend additional safeguards to ensure impartiality: external committee members, oversight by external bodies, or referral to a higher body (e.g., board of trustees). The principle is that the investigation must be both fair and perceived to be fair. Institutional Research Integrity Officers should have sufficient independence to handle such cases."
  },
  {
    id: 46,
    question: "A senior researcher (mentor) publishes a paper that includes data generated entirely by her graduate student, without listing the student as a co-author, claiming the work was done 'under her supervision' and therefore belongs to her. According to research ethics principles, this is:",
    options: [
      "A) Acceptable academic practice reflecting the mentor's intellectual leadership",
      "B) A form of exploitation and ghost authorship — the student's substantial intellectual contribution entitles her to authorship",
      "C) Acceptable only if the student received financial compensation through a stipend",
      "D) Subject only to departmental grievance procedures, not research integrity policies"
    ],
    answer: 1,
    explanation: "Generating the entire dataset for a study constitutes a substantial intellectual contribution under ICMJE criterion 1. Supervision does not transfer authorship rights. Denying authorship to a student who generated the data while claiming the work as one's own is a form of ghost authorship and exploitation of the mentor-mentee power differential — a recognized form of research misconduct and academic abuse. This is addressed in COPE's guidance on authorship disputes and is considered a significant ethical violation. Stipend payment does not eliminate authorship rights."
  },
  {
    id: 47,
    question: "A researcher uses a large language model (LLM) to write the discussion section of her paper. She does not disclose this. According to emerging guidelines from ICMJE (2023), Nature, and other publishers, which statement is most accurate?",
    options: [
      "A) LLMs can be listed as co-authors if they contributed substantially to the manuscript",
      "B) Use of AI/LLM writing tools must be disclosed in the methods or acknowledgements; AI tools cannot be listed as authors because they cannot be held accountable for the work",
      "C) LLM use is permissible without disclosure if it is limited to the discussion section",
      "D) Only AI-generated data analysis tools require disclosure; AI writing assistance is exempt"
    ],
    answer: 1,
    explanation: "ICMJE (February 2023 update), Nature, Science, and most major publishers have issued policies stating: (1) AI/LLM tools cannot be listed as authors because authorship requires accountability, which AI cannot bear; (2) Use of AI writing/analysis tools must be transparently disclosed in the methods or acknowledgements so readers can assess potential impacts on accuracy, bias, or hallucination. Non-disclosure of AI assistance in writing is considered a transparency violation. This applies to all sections of the manuscript, not just data-related sections."
  },
  {
    id: 48,
    question: "A virologist's research involves gain-of-function experiments on influenza viruses that significantly enhance transmissibility in ferrets. Before publication, the US government (NSABB) reviews the research and considers whether publication poses a biosecurity risk. This scenario relates to:",
    options: [
      "A) Dual-use research of concern (DURC) — research with legitimate scientific purposes that could be misused for harm",
      "B) Standard biosafety level classification of viral research",
      "C) Institutional Review Board jurisdiction over animal research",
      "D) Export control regulations for sharing scientific materials internationally"
    ],
    answer: 0,
    explanation: "Dual-Use Research of Concern (DURC) describes research that, while conducted for legitimate scientific purposes, could be misused by others to threaten public health, safety, security, or national security. The 2011-2012 H5N1 gain-of-function controversy (Fouchier and Kawaoka labs) was a landmark case where NSABB initially recommended restricting publication of the full methods due to biosecurity concerns. DURC policy (US OSTP 2012; NIH/HHS policies) requires additional oversight for certain categories of experiments involving select agents. This represents the intersection of publication ethics with biosecurity."
  },
  {
    id: 49,
    question: "A journal editor receives a peer review in which the reviewer clearly uses confidential information from the manuscript to suggest the authors cite the reviewer's own work (4 specific papers by 'Smith et al.' that directly compete with the manuscript's findings). This behavior by the reviewer constitutes:",
    options: [
      "A) Legitimate reviewer recommendation to improve the manuscript's literature coverage",
      "B) Coercive citation — an abuse of the peer review process to inflate one's citation count using confidential information",
      "C) Ghost authorship of the revised manuscript",
      "D) A conflict of interest that merely requires disclosure"
    ],
    answer: 1,
    explanation: "Coercive citation is a recognized form of peer review abuse in which reviewers require authors to add citations to the reviewer's own work as a condition of favorable review, unrelated to genuine scholarly improvement. COPE has issued guidelines specifically addressing coercive citation. It violates peer review confidentiality (using the reviewer's knowledge of the manuscript for personal gain), manipulates journal citation metrics (journal impact factor), and compromises the integrity of scientific communication. Editors should report such behavior to the reviewer's institution. This is distinct from a legitimate request to cite missing relevant literature."
  },
  {
    id: 50,
    question: "An ICMR-funded multicenter study collects genomic data from tribal populations in India. The investigators publish findings in an international journal and agree to deposit the full genomic dataset in an international repository (dbGaP) as required by the journal. Community leaders of the tribal populations object, stating they were not informed that data would be shared globally and that such sharing violates their cultural beliefs about communal data ownership. This scenario raises concerns about:",
    options: [
      "A) Only GDPR compliance, since data protection law governs all genomic data sharing",
      "B) Community consent and data sovereignty — standard individual informed consent may be insufficient for group-level genomic data from indigenous/tribal communities, requiring community-level consultation",
      "C) Standard data de-identification procedures, which would fully resolve the community's concerns",
      "D) ICMR regulations only, since this is a domestic research issue"
    ],
    answer: 1,
    explanation: "Genomic research involving indigenous and tribal communities raises issues beyond standard individual informed consent. Group/community genomic data carries implications for the entire community (ancestry, disease predispositions, forensic identification) that individuals cannot consent to on behalf of their community. The CARE Principles for Indigenous Data Governance (Collective Benefit, Authority to Control, Responsibility, Ethics) and CIOMS 2016 guidelines emphasize community-level consultation and consent for research affecting community identity. De-identification does not resolve concerns about population-level inference or cultural beliefs about data ownership. This is an emerging area at the intersection of data ethics and indigenous rights that is directly relevant to ICMR-funded research."
  }
]

export default questions

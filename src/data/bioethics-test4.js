const questions = [
  {
    id: 1,
    question: "The 2013 revision of the Declaration of Helsinki introduced a significant change regarding post-trial access. Which statement BEST describes the current obligation under this provision?",
    options: [
      "A) Sponsors must guarantee free supply of the experimental drug to all participants indefinitely after trial completion",
      "B) Investigators must inform participants during the consent process about post-trial access arrangements, and appropriate access should be ensured for those who benefit",
      "C) Post-trial access is only mandatory when the intervention is proven superior to standard of care by a statistically significant margin",
      "D) The obligation applies exclusively to resource-limited countries where standard care is unavailable"
    ],
    answer: 1,
    explanation: "The 2013 DoH (Paragraph 34) requires that during the informed consent process, participants must be informed about post-trial access, and investigators/sponsors/host country governments should make provisions to ensure beneficial interventions remain available. It is not an absolute free supply guarantee, nor is it limited to a specific country type or significance threshold."
  },
  {
    id: 2,
    question: "A researcher argues that a placebo-controlled trial is ethical even though effective treatment exists, because the condition studied causes only 'minor discomfort.' Under the Declaration of Helsinki 2013 (Paragraph 33), which criterion must ADDITIONALLY be met for this justification to be valid?",
    options: [
      "A) The placebo group must receive open-label rescue medication within 24 hours of symptom worsening",
      "B) The study must be conducted in a high-income country with robust regulatory oversight",
      "C) The patient will not suffer serious or irreversible harm from withholding the proven treatment",
      "D) The sample size must be calculated to minimize placebo exposure duration"
    ],
    answer: 2,
    explanation: "DoH Paragraph 33 permits placebo use when no proven intervention exists, or when compelling methodological reasons require it AND patients will not suffer serious or irreversible harm. 'Minor discomfort' alone is insufficient — the irreversibility of harm condition is the critical additional requirement. Sample size and country-level factors are not specified criteria."
  },
  {
    id: 3,
    question: "The Nuremberg Code's first principle states that voluntary consent is 'absolutely essential.' How does this differ conceptually from the Declaration of Helsinki's approach to consent in vulnerable populations?",
    options: [
      "A) The Nuremberg Code permits proxy consent for incapacitated adults if a legally authorized representative agrees, whereas Helsinki does not",
      "B) The Nuremberg Code's absolutist stance effectively prohibits research on children and cognitively impaired individuals, while Helsinki allows it with additional safeguards",
      "C) Helsinki requires consent from a legal guardian only for minors under age 7, while the Nuremberg Code requires assent from anyone over age 5",
      "D) Both documents are identical in their approach; the difference only lies in enforcement mechanisms"
    ],
    answer: 1,
    explanation: "The Nuremberg Code's insistence on the 'absolutely essential' nature of voluntary consent, with no provision for proxy consent, effectively makes research on children, unconscious patients, or cognitively impaired individuals impermissible. The Declaration of Helsinki explicitly allows such research through legally authorized representatives combined with participant assent where possible, demonstrating a more nuanced approach to vulnerable populations."
  },
  {
    id: 4,
    question: "The Belmont Report identifies three principles. A critic argues that these principles overlap significantly with Beauchamp and Childress's 'principlism' (four principles). What is the MOST accurate distinction between the two frameworks?",
    options: [
      "A) The Belmont Report includes non-maleficence as a standalone principle, while principlism subsumes it under beneficence",
      "B) Belmont's 'respect for persons' encompasses both autonomy and protection of diminished autonomy, whereas principlism separates these; additionally, Belmont lacks a standalone non-maleficence principle, subsuming it under beneficence",
      "C) Principlism was derived directly from the Belmont Report and is therefore identical in scope, differing only in terminology",
      "D) The Belmont Report applies only to federally funded US research, making it narrower than principlism which is a universal philosophical framework"
    ],
    answer: 1,
    explanation: "The Belmont Report's three principles are Respect for Persons (covering autonomy AND protection of vulnerable persons), Beneficence (covering both doing good AND avoiding harm, i.e., non-maleficence), and Justice. Beauchamp and Childress's four-principle principlism separates autonomy, non-maleficence, beneficence, and justice. The key distinction is that Belmont subsumes non-maleficence under beneficence, and combines individual autonomy with protection into 'respect for persons.'"
  },
  {
    id: 5,
    question: "Which version of the Declaration of Helsinki first introduced the requirement for registration of clinical trials in a publicly accessible database BEFORE enrollment of the first subject?",
    options: [
      "A) Edinburgh revision, 2000",
      "B) Washington revision, 2002",
      "C) Seoul revision, 2008",
      "D) Fortaleza revision, 2013"
    ],
    answer: 2,
    explanation: "The Seoul 2008 revision of the Declaration of Helsinki (Paragraph 19) first introduced the mandatory requirement that every clinical trial must be registered in a publicly accessible database before enrollment of the first subject. This was a landmark addition addressing publication bias and selective reporting."
  },
  {
    id: 6,
    question: "Under the Declaration of Helsinki, a researcher conducts a study on a new antibiotic in a community where the standard of care is no antibiotic treatment (due to non-availability). Participants in the control arm receive no treatment. An ethics committee reviewer objects. Which Helsinki principle is MOST directly at stake?",
    options: [
      "A) The requirement for trial registration in a public database",
      "B) The 'best proven intervention' standard for control arms, with exceptions only under specific methodological and harm-based conditions",
      "C) The prohibition against research that provides financial incentives to participants",
      "D) The requirement that independent ethics committees must be based in the country where the research is conducted"
    ],
    answer: 1,
    explanation: "DoH Paragraph 33 mandates that control group participants receive the 'best proven intervention.' The debate here involves the 'standard of care' vs. 'best proven worldwide intervention' controversy. The reviewer is invoking this principle, which has been central to the controversy about trials in resource-limited settings where local standard of care differs from global best practice."
  },
  {
    id: 7,
    question: "The Nuremberg Code's seventh principle addresses the risk-benefit calculus. Which statement CORRECTLY articulates this principle's requirement?",
    options: [
      "A) Research risks must be reduced to zero through adequate preparation and facility provision",
      "B) The degree of risk must never exceed the humanitarian importance of the problem to be solved",
      "C) All risks must be disclosed to participants regardless of whether disclosure itself could cause psychological harm",
      "D) Risk assessment must be performed exclusively by independent biostatisticians not affiliated with the sponsor"
    ],
    answer: 1,
    explanation: "The Nuremberg Code Principle 6 (often cited as addressing this) and Principle 7 together establish that the degree of risk to be taken should never exceed the humanitarian importance of the problem. This proportionality requirement is fundamental — risks must be balanced against the potential humanitarian benefit, not simply minimized or eliminated."
  },
  {
    id: 8,
    question: "In the Belmont Report framework, the application of the principle of 'justice' to subject selection means which of the following in a clinical trial context?",
    options: [
      "A) Randomization must use a validated algorithm to ensure equal probability of treatment assignment",
      "B) The burdens and benefits of research should be distributed fairly; vulnerable or disadvantaged groups should not be exploited by bearing research burdens while advantaged groups enjoy the benefits",
      "C) All participants must receive equal compensation regardless of the procedures they undergo",
      "D) Data analysis must apply the same statistical tests to all subgroups to prevent discriminatory conclusions"
    ],
    answer: 1,
    explanation: "Belmont's justice principle in subject selection requires that research burdens and benefits be distributed equitably. Historically, disadvantaged populations (prisoners, minorities, the poor) were overused as research subjects while benefits accrued to more privileged groups. Justice demands this imbalance be corrected — vulnerable groups should not be exploited, and should also have access to the benefits of research."
  },
  {
    id: 9,
    question: "A phase III trial uses a 'standard of care plus placebo' comparator arm rather than 'standard of care plus experimental drug.' The researchers justify this as methodologically necessary. Under Helsinki 2013, what additional ethical requirement must be demonstrated for this design to be acceptable?",
    options: [
      "A) The trial must be conducted in at least three different countries to ensure generalizability",
      "B) An independent data safety monitoring board must have approved the design prospectively",
      "C) Participants in the placebo add-on arm must not be exposed to serious or irreversible harm from receiving placebo instead of active treatment",
      "D) The experimental drug must have demonstrated superiority in at least one Phase II dose-finding study"
    ],
    answer: 2,
    explanation: "Under DoH 2013 Paragraph 33, when compelling methodological reasons require a placebo or no-treatment arm even when proven interventions exist, the patients who receive placebo must not be subject to serious or irreversible harm. This is the critical ethical gate. Add-on designs partially address this by ensuring all receive standard care, but the harm criterion still applies."
  },
  {
    id: 10,
    question: "Which of the following scenarios represents the MOST ethically problematic departure from the Nuremberg Code's principle of free power of withdrawal?",
    options: [
      "A) A participant in a 6-month longitudinal study withdraws after 3 months and requests deletion of their already-collected data",
      "B) A healthy volunteer in a Phase I PK study is told they cannot withdraw during the 12-hour intensive sampling period after drug administration 'for safety monitoring reasons' without explicit explanation that continuation is still ultimately voluntary",
      "C) A participant in a vaccine trial receives a reminder letter emphasizing the scientific importance of completing all follow-up visits",
      "D) A researcher informs participants that withdrawal will result in loss of compensation for visits not attended"
    ],
    answer: 1,
    explanation: "The Nuremberg Code Principle 9 guarantees participants the right to withdraw at any time without penalty. Telling a participant they 'cannot withdraw' during any period — even with ostensible safety rationale — without making clear that withdrawal remains their right, violates this principle. The safety monitoring rationale may be legitimate medical advice, but framing it as inability to withdraw is coercive. Option D (loss of compensation for incomplete visits) is permissible if prospectively disclosed and not coercive."
  },
  {
    id: 11,
    question: "ICH-GCP E6(R2) introduced an addendum focused on 'risk-based monitoring' and 'critical data and processes.' What is the PRIMARY implication of this addendum for sponsors conducting large multicenter trials?",
    options: [
      "A) Sponsors must now conduct 100% source data verification at all sites regardless of site risk profile",
      "B) Sponsors may use a risk-proportionate monitoring approach, including centralized statistical monitoring, focusing intensive on-site monitoring on critical data and high-risk sites",
      "C) Independent academic research organizations are exempted from the E6(R2) addendum requirements",
      "D) The addendum eliminates the requirement for routine monitoring visits if electronic data capture systems are used"
    ],
    answer: 1,
    explanation: "ICH-GCP E6(R2) addendum (2016) specifically introduced risk-based quality management, including risk-based monitoring. Sponsors can now employ centralized monitoring with statistical approaches and focus on-site monitoring resources on critical processes and data. This does NOT mean elimination of monitoring — it means proportionate, intelligent deployment of monitoring resources based on risk assessment."
  },
  {
    id: 12,
    question: "Under ICH-GCP E6(R2), which of the following is classified as an 'essential document' that must be present BEFORE the clinical phase of a trial begins?",
    options: [
      "A) Final study report signed by the principal investigator",
      "B) Curriculum vitae and any other documents evidencing the qualifications of the investigator",
      "C) Completed case report forms for the first three enrolled participants",
      "D) The data lock memo signed by the sponsor's biostatistics team"
    ],
    answer: 1,
    explanation: "ICH-GCP E6 Section 8 categorizes essential documents into three phases: before the clinical phase, during the clinical conduct, and after completion. Investigator CVs and qualification documents must exist before the trial begins to demonstrate investigator competence. Final study reports, completed CRFs, and data lock memos are post-trial or during-trial documents."
  },
  {
    id: 13,
    question: "A sponsor's monitor discovers that an investigator has been recording vital signs in the medical chart 3 hours after the protocol-specified window, then transcribing the values into the CRF as if collected on time. Under ICH-GCP, this constitutes:",
    options: [
      "A) A protocol deviation that must be reported to the IRB but does not affect data integrity",
      "B) A data fabrication issue requiring immediate escalation; the investigator is violating GCP Section 4.9 on record-keeping and the ALCOA principles of attributable, legible, contemporaneous, original, and accurate data",
      "C) An acceptable practice if the investigator adds a note-to-file explaining the actual collection time",
      "D) A minor protocol violation that can be corrected through CRF amendment without sponsor notification"
    ],
    answer: 1,
    explanation: "Recording data in the CRF as if collected within the protocol window when it was not violates ALCOA+ principles (specifically 'contemporaneous' and 'accurate'), constitutes data falsification under ICH-GCP E6 Section 4.9.0, and represents a serious GCP violation. This is not correctable through a note-to-file after the fact — it requires investigation and regulatory authority reporting depending on severity. Sponsors must escalate per E6 Section 5.20."
  },
  {
    id: 14,
    question: "ICH-GCP E6(R2) Section 5 delineates sponsor responsibilities. Which of the following represents a sponsor obligation that CANNOT be delegated to the Contract Research Organization (CRO)?",
    options: [
      "A) On-site monitoring of investigational sites",
      "B) Data management and statistical analysis",
      "C) Ultimate responsibility and accountability for the overall quality and integrity of the trial",
      "D) Preparation of the Investigator's Brochure"
    ],
    answer: 2,
    explanation: "Per ICH-GCP E6(R2) Section 5.2.2, while sponsors may transfer any or all trial-related duties to a CRO, the ultimate responsibility for the quality and integrity of the trial data always remains with the sponsor. This accountability cannot be delegated. The sponsor remains the legally responsible party to regulatory authorities regardless of CRO involvement."
  },
  {
    id: 15,
    question: "An audit of a clinical trial finds that the investigator site file is missing signed informed consent forms for 8 of 45 enrolled participants. The investigator claims the participants verbally consented and the omission is administrative. Under ICH-GCP, what is the CORRECT characterization and required action?",
    options: [
      "A) This is a minor finding; verbal consent is acceptable under GCP when documented in the medical record",
      "B) This is a critical finding constituting a major GCP violation; affected participants' data may need to be excluded, and the ethics committee and regulatory authority must be notified",
      "C) The investigator must obtain retroactive written consent from the 8 participants to resolve the issue",
      "D) The sponsor's monitor can sign the consent forms on behalf of participants to regularize the records"
    ],
    answer: 1,
    explanation: "ICH-GCP E6 Section 4.8.15 requires that the original signed and dated informed consent form be retained. Missing consent forms for enrolled participants is a critical GCP deviation affecting participant protection and data validity. Ethics committees must be informed, regulatory authorities may need notification, and the sponsor must assess whether the data from these participants is usable. Retroactive consent cannot substitute for prospective consent, and monitors cannot sign on behalf of participants."
  },
  {
    id: 16,
    question: "In ICH-GCP E6(R2), 'source data verification' (SDV) involves checking CRF data against source documents. Which ICH-GCP provision specifically addresses the acceptability of using electronic medical records as source documents?",
    options: [
      "A) Section 1.51 defines source documents broadly to include original records and certified copies, encompassing electronic records if they meet validation and access requirements",
      "B) Electronic medical records are explicitly prohibited as source documents under E6(R2) due to auditability concerns",
      "C) Section 5.18 requires that all source data must exist in paper form with wet ink signatures for regulatory submission",
      "D) E6(R2) permits electronic source documents only for Phase IV observational studies"
    ],
    answer: 0,
    explanation: "ICH-GCP E6 Section 1.51 defines source documents as original records and certified copies, explicitly including hospital records, clinical and office charts, laboratory notes, memoranda, subjects' diaries or evaluation checklists, pharmacy dispensing records, recorded data from automated instruments, and 'other reliable records.' Electronic medical records qualify when they meet validation, audit trail, and access control requirements. E6(R2) specifically encouraged adoption of electronic systems."
  },
  {
    id: 17,
    question: "A clinical trial audit reveals that a sponsor's monitoring reports consistently show 'no issues' at a site where subsequent inspection by a regulatory authority finds multiple protocol deviations. Under ICH-GCP E6(R2), what does this discrepancy MOST likely indicate?",
    options: [
      "A) The regulatory authority applied different standards than those required by GCP",
      "B) A failure of the sponsor's quality management system, specifically the monitoring function; monitors may have failed to detect, document, or escalate issues, suggesting inadequate training or independence",
      "C) Protocol deviations discovered during inspections are held to a higher standard and do not represent GCP violations per se",
      "D) The discrepancy is expected because audits and inspections assess different aspects of trial conduct"
    ],
    answer: 1,
    explanation: "Persistent 'clean' monitoring reports followed by regulatory inspection findings of multiple deviations indicates systemic monitoring failure. Under E6(R2) Section 5.18, sponsors must have systems to ensure monitors are adequately trained, conduct thorough reviews, and properly escalate issues. This pattern may indicate monitor under-reporting, inadequate training, or conflict of interest. It represents a quality management system failure requiring corrective action."
  },
  {
    id: 18,
    question: "Under ICH-GCP E6(R2), what distinguishes an 'audit' from an 'inspection' in the context of clinical trials?",
    options: [
      "A) An audit is conducted by the regulatory authority, while an inspection is conducted by the sponsor's internal quality assurance team",
      "B) An audit is a systematic, independent examination conducted by the sponsor's QA function to evaluate trial conduct against the protocol and GCP; an inspection is performed by a regulatory authority to verify compliance with GCP and applicable regulations",
      "C) Both terms are interchangeable under E6(R2) and refer to any formal review of trial documentation",
      "D) An inspection can only occur after a trial is completed, while an audit may occur at any time during the trial"
    ],
    answer: 1,
    explanation: "ICH-GCP E6 Section 1.6 defines 'audit' as a systematic and independent examination of trial-related activities by the sponsor's quality assurance function to evaluate compliance. Section 1.29 defines 'inspection' as a regulatory authority's official review of documents, facilities, records, and other resources related to the trial. The key distinction is the conducting body: sponsor QA (audit) vs. regulatory authority (inspection)."
  },
  {
    id: 19,
    question: "An investigator receives an Investigator's Brochure (IB) update that reveals a new serious adverse event identified in an ongoing parallel trial with the same compound. Under ICH-GCP, what is the IMMEDIATE obligation of the investigator?",
    options: [
      "A) Wait until the next scheduled protocol amendment to incorporate the new safety information into the consent form",
      "B) Immediately review the new information, assess its impact on participant safety, update the informed consent document, notify the ethics committee, and potentially halt enrollment pending committee review",
      "C) Notify only the participants who are currently in the highest dose cohort",
      "D) Report the information to the sponsor but take no action until formal written instructions are received"
    ],
    answer: 1,
    explanation: "Under ICH-GCP E6 Section 4.3.2, investigators must promptly notify the ethics committee of any new information that might affect participants' safety or willingness to continue. Updated safety information must be incorporated into the consent process. The investigator cannot simply wait for a scheduled amendment — participant safety obligations require immediate action. This may include temporarily halting enrollment and re-consenting existing participants."
  },
  {
    id: 20,
    question: "ICH-GCP E6(R2) requires that investigators maintain trial records for a specific period. What is the MINIMUM retention period for essential documents after trial completion or discontinuation?",
    options: [
      "A) 2 years after the last approval of a marketing application in any ICH region",
      "B) 10 years after trial completion",
      "C) 15 years for pediatric trials, 10 years for adult trials",
      "D) Until the sponsor notifies the investigator that the records are no longer needed, with a minimum of 3 years"
    ],
    answer: 0,
    explanation: "ICH-GCP E6 Section 4.9.4 requires that essential documents be retained until at least 2 years after the last approval of a marketing application in an ICH region and until there are no pending or contemplated marketing applications, or at least 2 years have elapsed since formal discontinuation of clinical development. National regulations may require longer retention periods. The 2-year post-marketing application approval is the ICH-GCP minimum standard."
  },
  {
    id: 21,
    question: "Benjamin Freedman's concept of 'clinical equipoise' differs from theoretical (individual) equipoise in an important way. In a trial where the principal investigator personally believes the experimental arm is superior, which position is CORRECT?",
    options: [
      "A) The trial is unethical because the investigator's personal belief violates the therapeutic obligation to give each patient the best known treatment",
      "B) The trial may be ethical if clinical equipoise exists — that is, if there is genuine uncertainty within the expert medical community as a whole about the comparative merits of the treatments, regardless of the investigator's personal belief",
      "C) The investigator must recuse themselves from the trial if they hold personal beliefs about treatment superiority",
      "D) Clinical equipoise and individual equipoise are legally equivalent standards; either form of uncertainty suffices to justify randomization"
    ],
    answer: 1,
    explanation: "Freedman's clinical equipoise (1987) locates the relevant uncertainty in the community of competent practitioners, not in any individual investigator. An investigator may have a personal preference while clinical (community) equipoise exists. The trial is ethical as long as there is genuine uncertainty in the expert community. This is distinguished from individual/theoretical equipoise where the individual investigator must be personally uncertain — a standard Freedman argued was too stringent and practically impossible to maintain."
  },
  {
    id: 22,
    question: "A DSMB reviewing an adaptive dose-finding trial recommends stopping the trial early due to 'overwhelming efficacy.' The sponsor's statistician notes that the interim analysis was unplanned and the stopping boundary was not pre-specified. What is the PRIMARY ethical and statistical concern?",
    options: [
      "A) Early stopping for efficacy always inflates the estimated treatment effect size, creating a biased estimate that may lead to overestimation of clinical benefit and potential patient harm post-approval",
      "B) Unplanned stopping is only problematic if the regulatory authority was not notified in advance",
      "C) DSMBs are empowered to stop any trial at any stage for any reason deemed appropriate, and statistical pre-specification is merely a convention",
      "D) The concern is exclusively about the sponsor's financial interests being protected through proper regulatory documentation"
    ],
    answer: 0,
    explanation: "Early stopping for efficacy without pre-specified stopping boundaries creates multiple problems: (1) inflated effect size estimates due to regression to the mean (the 'winner's curse'), (2) potential Type I error inflation, (3) insufficient data on safety, durability, and secondary outcomes. Patients may ultimately be harmed if post-approval experience shows the drug is less effective or less safe than the truncated trial suggested. Pre-specified adaptive designs with DSMB charters are ethically and statistically required."
  },
  {
    id: 23,
    question: "In a non-inferiority (NI) trial, the choice of the non-inferiority margin (delta) is ethically critical. A researcher proposes using a margin of 50% of the active control's effect over placebo. Which ethical principle is MOST directly challenged by this choice?",
    options: [
      "A) The principle of beneficence, because the trial may expose participants to a treatment that could be substantially inferior",
      "B) The principle of justice, because margin selection systematically disadvantages minority subgroups",
      "C) The principle of autonomy, because participants cannot meaningfully consent without knowing the margin",
      "D) The Nuremberg Code's prohibition against experiments expected to cause death"
    ],
    answer: 0,
    explanation: "A 50% retention margin means the experimental treatment is acceptable even if it retains only half the active control's benefit over placebo — potentially a substantial loss of efficacy. This directly challenges beneficence: participants randomized to the experimental arm may receive a treatment that is meaningfully inferior to existing therapy. The 'assay sensitivity' requirement and the ethical demand to preserve a clinically meaningful portion of the comparator's effect are central concerns. Most regulatory guidance requires retention of at least a substantial fraction of the active comparator's effect."
  },
  {
    id: 24,
    question: "A Data Safety Monitoring Board (DSMB) faces a situation where a pre-specified stopping rule for harm (p < 0.001 for a safety endpoint) is nearly met at an interim analysis, but the efficacy data appears highly promising. The DSMB charter is silent on how to balance these findings. What is the ETHICALLY AND PROCEDURALLY correct approach?",
    options: [
      "A) The DSMB should defer to the sponsor's preference since the sponsor bears ultimate responsibility for the trial",
      "B) The DSMB should follow the pre-specified stopping rules; if the harm threshold is approached but not met, they may continue but must intensify safety monitoring, increase interim analysis frequency, and formally document their deliberations",
      "C) The DSMB should stop the trial immediately regardless of the statistical threshold since any safety signal takes precedence over efficacy",
      "D) The DSMB should recommend unblinding all participants to allow individual treatment decisions by their physicians"
    ],
    answer: 1,
    explanation: "DSMBs operate under pre-specified charters. When a stopping threshold is not yet crossed but is approached, the appropriate response is to continue with enhanced monitoring, potentially modify the stopping boundary through pre-specified adaptive provisions, and carefully document reasoning. Automatically stopping below a pre-specified threshold undermines the statistical validity of the design. Mass unblinding destroys the trial. The DSMB must exercise independent judgment within the charter's framework, not defer to sponsors."
  },
  {
    id: 25,
    question: "The 'uncertainty principle' as applied to clinical trial ethics (distinct from Heisenberg's principle) holds that a patient should be entered into a randomized trial only if:",
    options: [
      "A) The treating physician is genuinely uncertain which treatment is best for that particular patient",
      "B) The statistical power calculation demonstrates at least 80% power to detect the minimum clinically important difference",
      "C) The ethics committee has determined that aggregate population-level uncertainty exists",
      "D) The patient has been offered at least two alternative treatments outside the trial context"
    ],
    answer: 0,
    explanation: "The uncertainty principle in clinical trial ethics (articulated by Peto, Sackett, and others) holds that randomization is ethically justified only when the treating clinician is genuinely uncertain about which treatment would best serve that individual patient. This is essentially the individual/theoretical equipoise standard. It is distinct from Freedman's clinical equipoise, which locates uncertainty in the expert community. The uncertainty principle is more stringent and more closely tied to the therapeutic relationship."
  },
  {
    id: 26,
    question: "An adaptive platform trial running continuously allows new treatment arms to be added as they become available. A new arm is added mid-trial after the control arm has already accumulated substantial evidence of efficacy. What is the PRIMARY ethical challenge introduced by this design feature?",
    options: [
      "A) Adding new arms violates the Declaration of Helsinki's prohibition against mid-trial protocol modifications",
      "B) Participants enrolled in later stages are consenting to a trial where the control arm's performance characteristics are already known, potentially affecting the genuine uncertainty justification for randomization; informed consent must be updated and the ethics of continued randomization to control reassessed",
      "C) Platform trials are inherently unethical because they expose participants to treatments not yet approved by regulatory authorities",
      "D) The statistical concerns of multiplicity testing fully resolve the ethical issues in adaptive platform trials"
    ],
    answer: 1,
    explanation: "In adaptive platform trials, accumulating evidence about control arm performance changes the ethical landscape. Later-enrolled participants may be randomized to a control arm that has become less attractive relative to alternatives. This requires: (1) continuous ethics review, (2) consent document updates as evidence accumulates, (3) reassessment of whether clinical equipoise is maintained for each arm comparison, and (4) transparent stopping criteria. The evolving evidence base fundamentally affects the ethical justification for randomization."
  },
  {
    id: 27,
    question: "Futility analysis in a clinical trial refers to:",
    options: [
      "A) The statistical test used to determine whether the trial's primary endpoint has been achieved at the pre-specified significance level",
      "B) An interim analysis assessing whether the trial has a sufficiently high conditional power to detect a meaningful difference if continued, justifying early stopping when success is improbable even if current data show a non-harmful trend",
      "C) The ethical review process conducted when a trial fails to recruit participants at the anticipated rate",
      "D) The DSMB's final determination that a trial has conclusively proven the null hypothesis"
    ],
    answer: 1,
    explanation: "Futility analysis assesses whether continuing a trial is worthwhile by examining conditional power — the probability of achieving a statistically significant result given the data accumulated so far. If conditional power falls below a pre-specified threshold (e.g., <20%), the trial may be stopped for futility to avoid exposing additional participants to the risks of continued participation without scientific benefit. This is distinct from stopping for harm or efficacy."
  },
  {
    id: 28,
    question: "A researcher proposes a Bayesian adaptive trial that will update treatment allocation ratios based on accumulating efficacy data, assigning more participants to the better-performing arm. Critics argue this design creates an ethical tension. What is the BEST characterization of this tension?",
    options: [
      "A) Bayesian methods are not accepted by regulatory authorities and therefore expose participants to scientifically invalid research",
      "B) Response-adaptive randomization may improve individual participant outcomes by increasing the probability of receiving the better treatment, but may reduce statistical efficiency, increase bias, and create logistical challenges; the ethical case rests on whether the individual benefit justifies potential societal cost from reduced trial validity",
      "C) The design violates equipoise because it assumes prior knowledge about treatment effects",
      "D) There is no ethical tension; response-adaptive randomization is unambiguously superior to fixed randomization from both ethical and statistical perspectives"
    ],
    answer: 1,
    explanation: "Response-adaptive randomization creates a genuine tension between individual participant ethics (maximizing each participant's chance of receiving the better treatment) and the ethics of generating reliable, unbiased evidence for future patients (societal benefit). Critics note that such designs can increase variance, introduce time-trend biases, and reduce statistical power. The ethical calculus must weigh individual participant benefit against the validity of conclusions that will affect future patients."
  },
  {
    id: 29,
    question: "A DSMB is examining a trial testing a new treatment for rapidly fatal ALS. The interim data shows a trend toward benefit (p=0.08) but the pre-specified efficacy stopping boundary requires p<0.001. An advocacy group is pressuring for early release. The DSMB should:",
    options: [
      "A) Release the interim data to advocacy groups while continuing the trial, as transparency is an ethical obligation",
      "B) Stop the trial because any trend toward benefit in a terminal illness justifies early termination",
      "C) Maintain confidentiality, continue the trial per protocol, and follow pre-specified stopping rules; the DSMB may present overall safety data without unblinding if appropriate",
      "D) Transfer decision-making authority to the participants themselves, as they are the most affected parties"
    ],
    answer: 2,
    explanation: "DSMBs exist precisely to maintain trial integrity by reviewing unblinded data independently while keeping it confidential. Releasing interim data undermines trial validity, as knowledge of trends affects enrollment behavior and may bias outcomes. Pre-specified stopping rules represent the scientific and ethical consensus established a priori. External pressure from advocacy groups, however understandable, cannot override these safeguards. The DSMB must protect the integrity of the evidence that will ultimately benefit or harm all future ALS patients."
  },
  {
    id: 30,
    question: "Freedman's clinical equipoise framework has been criticized by Franklin Miller and Howard Brody on the grounds that it:",
    options: [
      "A) Is too permissive, allowing trials to continue even when individual investigators have strong preferences",
      "B) Conflates the ethics of medical practice (therapeutic obligation) with the ethics of research, creating a 'therapeutic misconception' at the institutional level by suggesting that RCTs must conform to individualized care standards",
      "C) Fails to account for the rights of participants to access experimental therapies outside of trials",
      "D) Does not address the statistical requirements for interim analyses in adaptive trials"
    ],
    answer: 1,
    explanation: "Miller and Brody (2003) argued that Freedman's clinical equipoise erroneously imports the therapeutic obligation (the physician's duty to provide best care to individual patients) into research ethics. They contended that research and therapy are categorically different activities: research aims at generalizable knowledge, not individual therapy. The 'therapeutic misconception' they identified is not the familiar one (participants misunderstanding trial purposes) but rather a foundational confusion in ethical frameworks about whether trials must conform to therapeutic standards at all."
  },
  {
    id: 31,
    question: "CIOMS Guidelines 2016 (Guideline 5) address the use of placebo controls. Under what specific condition do these guidelines permit placebo use when proven effective interventions exist, BEYOND the Helsinki provisions?",
    options: [
      "A) When the trial is sponsored by a government entity rather than a pharmaceutical company",
      "B) When withholding treatment would result in temporary discomfort or delay in symptom relief, but would not result in any permanent harm",
      "C) When regulatory agencies in the country of conduct require placebo-controlled evidence for registration",
      "D) When the cost of the proven effective treatment makes it unavailable in the research setting"
    ],
    answer: 1,
    explanation: "CIOMS 2016 Guideline 5 permits placebo controls (even when proven interventions exist) in several circumstances including when withholding would result only in temporary discomfort or delay in symptom relief without permanent harm. This adds nuance beyond Helsinki's provisions. The regulatory requirement rationale (option C) may be considered but is not a standalone justification; cost considerations (option D) are addressed elsewhere but don't justify placebo use per se."
  },
  {
    id: 32,
    question: "An 'add-on' placebo-controlled trial design is proposed for a new antidepressant. All participants receive standard antidepressant therapy; the experimental group also receives the new drug while the control group receives placebo in addition to standard therapy. What is the PRIMARY ethical advantage of this design?",
    options: [
      "A) It eliminates the need for informed consent since all participants receive proven treatment",
      "B) It allows superiority testing against maximum standard therapy, providing the most clinically relevant efficacy data",
      "C) It addresses the Helsinki provision concern by ensuring all participants receive proven treatment, while still allowing placebo-controlled evaluation of the add-on benefit, minimizing the harm from placebo allocation",
      "D) It reduces sample size requirements because variance is reduced when all participants receive active background therapy"
    ],
    answer: 2,
    explanation: "The add-on design's primary ethical advantage is that it ensures all participants receive proven effective therapy (satisfying the Helsinki 'best proven intervention' standard for control groups) while still generating placebo-controlled evidence about the incremental benefit of the experimental treatment. No participant is denied established care. This design is ethically superior to a simple placebo arm when effective treatments exist."
  },
  {
    id: 33,
    question: "A washout period is required before participants enter a crossover depression trial. During the washout, a participant experiences a significant depressive relapse. The investigator faces a dilemma. Which ethical principle is MOST directly implicated?",
    options: [
      "A) Justice — the participant is bearing an unfair burden of research participation",
      "B) Non-maleficence — the washout protocol is causing harm to the participant that must be weighed against the scientific necessity of the washout period",
      "C) Autonomy — the participant did not fully understand the washout implications during consent",
      "D) Veracity — the investigator must truthfully report the relapse without minimizing its severity"
    ],
    answer: 1,
    explanation: "The washout period creates a direct conflict between scientific validity (preventing carryover effects) and participant welfare (avoiding harm from treatment discontinuation). This is fundamentally a non-maleficence issue — the research design is causing harm. Ethical mitigation requires: (1) strict eligibility criteria to exclude high-risk participants, (2) clear stopping rules for washout if harm occurs, (3) rescue medication protocols, and (4) intensive monitoring during washout. The harm from washout must be proportionate to the scientific necessity."
  },
  {
    id: 34,
    question: "Under the CIOMS International Ethical Guidelines 2016, when is it ethically permissible to use an 'active control' design rather than placebo, specifically in terms of the ethical obligation it creates for the trial?",
    options: [
      "A) Active controls are required whenever a placebo would require withholding treatment likely to prevent death or irreversible harm",
      "B) Active controls are preferred only in Phase III trials with regulatory submission intent",
      "C) Active controls are permissible only when the active comparator has an established effect that is indistinguishable from the experimental treatment",
      "D) Active controls are acceptable when the experimental treatment's mechanism of action is similar to the active comparator"
    ],
    answer: 0,
    explanation: "CIOMS 2016 and the Declaration of Helsinki agree that active controls are ethically required (not merely preferred) when using placebo would mean withholding treatment likely to prevent death, serious irreversible harm, or substantial suffering. The active control design ensures participants are not denied beneficial treatment. The nature of the potential harm — not merely the availability of an effective treatment — determines the ethical requirement for active control."
  },
  {
    id: 35,
    question: "A clinical trial protocol allows participants to receive 'rescue medication' (open-label active treatment) if they meet pre-specified criteria for treatment failure. How does this provision affect the ethical acceptability of the placebo arm AND the trial's statistical validity?",
    options: [
      "A) Rescue medication improves ethics but has no impact on statistical analysis since rescued participants can be analyzed in the per-protocol population",
      "B) Rescue medication improves ethical acceptability by limiting harm from placebo allocation, but complicates the primary endpoint analysis because rescued participants create informative censoring or treatment switching issues that must be pre-specified in the statistical analysis plan",
      "C) Rescue medication invalidates the placebo-controlled design and eliminates the scientific rationale for the trial",
      "D) The use of rescue medication automatically converts the trial from a placebo-controlled to an active-controlled design for regulatory purposes"
    ],
    answer: 1,
    explanation: "Rescue medication provisions improve ethics by ensuring participants don't suffer sustained harm from placebo, but create significant analytical challenges: (1) informative censoring if rescue use is related to placebo response, (2) treatment-policy estimand issues, (3) difficulty defining the primary estimand (e.g., if rescued, do they count as treatment failures at rescue time?). The statistical analysis plan must pre-specify how rescued participants are handled — typically using 'treatment policy' or 'hypothetical' estimands per ICH E9(R1)."
  },
  {
    id: 36,
    question: "A pharmaceutical sponsor argues that because the 'standard of care' in a particular low-income country is no treatment for HIV (due to inaccessibility), a placebo-controlled trial of a new antiretroviral is ethical because participants receive more than they would otherwise get. This argument invokes which controversial position in placebo ethics?",
    options: [
      "A) The 'reasonable availability' standard requiring post-trial access provisions",
      "B) The 'local standard of care' position (as opposed to 'global best proven intervention'), arguing that comparators should reflect what is actually available in the host community",
      "C) The 'therapeutic misconception' argument that participants cannot distinguish research from treatment",
      "D) The 'fair benefits' framework requiring equitable distribution of research benefits to host communities"
    ],
    answer: 1,
    explanation: "This argument invokes the 'local standard of care' position — that the comparator should reflect what participants would receive outside the trial context, not the global best proven intervention. This position was heavily criticized after the 1994 AZT perinatal HIV trials debate. Critics argue it exploits poverty and health system deficiencies to justify research that would be impermissible in high-income countries. The Declaration of Helsinki (2013 version) and CIOMS 2016 reject this reasoning for conditions where death or irreversible harm would result."
  },
  {
    id: 37,
    question: "In a double-blind crossover trial for a chronic pain condition, participants in the second treatment period have access to their Period 1 treatment outcomes. What ethical issue arises from this design feature regarding consent?",
    options: [
      "A) Participants who responded well in Period 1 may be more likely to drop out in Period 2 if they are randomized to placebo, creating differential attrition that violates the principle of equal treatment",
      "B) This creates a therapeutic misconception because participants may believe the crossover guarantees they will receive active treatment in both periods",
      "C) Knowledge of Period 1 outcomes may compromise informed consent for Period 2, as participants are no longer in a state of uncertainty; their consent to continue into Period 2 may be influenced by their personal response, and the ethics of continued participation if they responded well to Period 1 (now crossed to placebo) must be addressed",
      "D) There is no ethical issue because crossover designs are inherently ethical since all participants eventually receive active treatment"
    ],
    answer: 2,
    explanation: "In crossover trials, participants who know their Period 1 outcomes face a different decision environment for Period 2 consent. A participant who responded well in Period 1 and is now crossed to placebo must consent with knowledge that they may be losing effective treatment. This creates a genuine consent issue — the continued participation decision under these circumstances requires renewed, fully informed consent that explicitly addresses the implications of the crossover, especially if the participant is now entering a period of potential symptom worsening."
  },
  {
    id: 38,
    question: "The CONSORT statement recommends reporting harms data from clinical trials. From an ethical perspective, what obligation do researchers have regarding the reporting of adverse events that were not pre-specified as outcomes in the original protocol?",
    options: [
      "A) Non-pre-specified adverse events should not be reported to avoid generating hypothesis-driven safety signals that could mislead prescribers",
      "B) All adverse events, including unexpected ones, must be reported with appropriate context; selective non-reporting of non-pre-specified harms would violate the ethical obligation of publication integrity and potentially harm future patients who might be exposed to the intervention",
      "C) Non-pre-specified adverse events should only be reported if they meet statistical significance thresholds to prevent false-positive safety signals",
      "D) The decision to report non-pre-specified adverse events rests solely with the sponsor, who has regulatory authority for the benefit-risk assessment"
    ],
    answer: 1,
    explanation: "Selective reporting of adverse events — reporting only pre-specified or statistically significant harms — represents a serious ethical violation. The Declaration of Helsinki (Paragraph 36) explicitly states that researchers must publish negative and inconclusive findings as well as positive ones, and that selective reporting and publication bias is unethical. Complete harm reporting is essential for patients and prescribers to make informed decisions. Under-reporting of harms has caused significant patient harm historically (e.g., rofecoxib, thalidomide)."
  },
  {
    id: 39,
    question: "A placebo-controlled trial for a new anxiolytic requires a 2-week placebo run-in period before randomization. The stated purpose is to identify placebo responders for exclusion. What is the PRIMARY ethical concern with this practice?",
    options: [
      "A) Exclusion of placebo responders inflates the apparent drug effect and may lead to approval of a drug that has limited real-world efficacy; participants in the run-in are exposed to research procedures without receiving the full experimental drug, and their exclusion may not have been fully explained during initial consent",
      "B) The practice violates the principle of beneficence because all participants should receive active treatment from day one",
      "C) Placebo run-in periods are prohibited under ICH-GCP E6(R2) as they constitute deceptive practices",
      "D) The run-in period creates a selection bias that exclusively harms participants from minority ethnic groups"
    ],
    answer: 0,
    explanation: "Enrichment by placebo responder exclusion raises multiple ethical issues: (1) the trial no longer represents the general patient population, potentially generating artificially inflated efficacy data; (2) patients are subjected to research procedures (run-in) and then excluded — their participation generates no direct benefit; (3) the exclusion rationale may not be clearly explained in consent; and (4) the resulting drug may be approved based on a selected population, misleading prescribers about real-world efficacy. This practice inflates effect sizes and may result in harm to non-selected patients treated post-approval."
  },
  {
    id: 40,
    question: "The 'standard of care' debate in placebo ethics has led to two distinct positions. Which pair of statements CORRECTLY represents the two opposing positions?",
    options: [
      "A) Position 1: Control groups must receive the best globally proven intervention; Position 2: Control groups need only receive the intervention available in the local context where the study is conducted",
      "B) Position 1: Placebos are never acceptable in any clinical trial; Position 2: Placebos are acceptable in all trials regardless of available treatments",
      "C) Position 1: Only pharmaceutical industry-sponsored trials must use active controls; Position 2: Academic trials may use placebos freely",
      "D) Position 1: The ethics of control arms is determined exclusively by regulatory authorities; Position 2: Ethics committees have sole authority over control arm decisions"
    ],
    answer: 0,
    explanation: "The 'standard of care' debate has two clear camps: (1) The 'universalist' or 'best proven' position (reflected in Helsinki) that control groups must receive the best globally proven intervention, regardless of local availability; and (2) The 'relativist' or 'local standard' position that comparators should reflect what participants would receive in their local healthcare system. The debate has profound implications for trial conduct in resource-limited settings and reflects deeper tensions between global justice and research pragmatism."
  },
  {
    id: 41,
    question: "In a Phase I first-in-human study conducted in healthy volunteers, the maximum tolerated dose (MTD) is the primary endpoint. If the investigational drug's preclinical profile suggests an extremely narrow therapeutic window, what ethical measure is MOST critical to implement?",
    options: [
      "A) Enroll only participants with prior experience in clinical trials who understand dose escalation risks",
      "B) Use a sentinel dosing strategy with a staggered dosing design (e.g., 1+2 or 2+4 sentinels before full cohort dosing), dose escalation rules with pre-specified stopping criteria, and a DSMB review of each dose cohort before proceeding",
      "C) Conduct all dose escalation steps simultaneously across multiple sites to obtain data faster with less participant exposure per site",
      "D) Limit the trial to participants who have signed a waiver acknowledging unlimited risk acceptance in exchange for compensation"
    ],
    answer: 1,
    explanation: "For high-risk Phase I studies with narrow therapeutic windows (e.g., TGN1412 analogs), sentinel dosing is critical: 1-2 subjects receive the dose first and are observed for a defined period before the remaining subjects in the cohort receive the dose. This, combined with pre-specified dose escalation stopping rules reviewed by an independent DSMB/SRC, is the key safety measure. Simultaneous multi-site dosing (option C) increases catastrophic risk. Waivers (option D) are ethically invalid — participants cannot waive basic research protections."
  },
  {
    id: 42,
    question: "Research involving children requires meeting the Belmont principle of justice in a specific way. Under the US federal regulations (45 CFR 46 Subpart D) framework often referenced in international pediatric research ethics, which category of research is permissible when there is NO direct benefit to the child participant and the risk is more than minimal?",
    options: [
      "A) Category 46.404: Research involving no greater than minimal risk",
      "B) Category 46.405: Research involving greater than minimal risk but presenting the prospect of direct benefit to individual subjects",
      "C) Category 46.406: Research involving greater than minimal risk with no prospect of direct benefit, but likely to yield generalizable knowledge about the subject's disorder or condition, with only a minor increase over minimal risk",
      "D) No such research is permissible; pediatric research without direct benefit must always involve minimal risk only"
    ],
    answer: 2,
    explanation: "45 CFR 46.406 permits research on children that involves greater than minimal risk with NO direct benefit when: (1) the risk represents only a minor increase over minimal risk, (2) the intervention or procedure presents experiences reasonably commensurate with those in the child's actual medical situation, and (3) the research is likely to yield vitally important generalizable knowledge about the subject's disorder or condition. This category recognizes that some pediatric research must involve more than minimal risk to generate clinically essential knowledge."
  },
  {
    id: 43,
    question: "Emergency research involving incapacitated patients (e.g., traumatic brain injury) without prior consent is addressed in special regulations. Under FDA regulations (21 CFR 50.24) and analogous international frameworks, what is the MINIMUM set of conditions that must be satisfied for exception from informed consent (EFIC) to be permissible?",
    options: [
      "A) The researcher must demonstrate that the incapacity is permanent and that no family member is identifiable within 72 hours",
      "B) Life-threatening situation, inability to obtain consent, intervention must offer prospect of direct benefit, available treatments are unproven or unsatisfactory, the research could not practicably be carried out otherwise, prospective IRB approval with specific EFIC protocol, community consultation, and public disclosure",
      "C) Simply obtaining consent from the emergency treating physician suffices as proxy consent for research enrollment",
      "D) EFIC is permissible only for device trials; drug trials must always obtain prior written informed consent"
    ],
    answer: 1,
    explanation: "FDA 21 CFR 50.24 establishes the conditions for exception from informed consent in emergency research: (1) life-threatening situation, (2) available treatments unproven or unsatisfactory, (3) intervention may directly benefit subjects, (4) informed consent not practicable, (5) no reasonable way to identify prospective subjects, (6) IRB approval, (7) community consultation conducted, and (8) public disclosure planned. This framework balances the need to conduct critical emergency research with robust safeguards and community involvement."
  },
  {
    id: 44,
    question: "Cluster randomized trials (CRTs) raise unique ethical challenges because the unit of randomization differs from the unit of intervention and observation. Which ethical problem is MOST distinctive to CRTs compared to individual-level RCTs?",
    options: [
      "A) CRTs cannot obtain statistically valid results because of intracluster correlation, making them scientifically invalid and therefore unethical",
      "B) In CRTs, some individuals (cluster members) may be exposed to the intervention without ever having the opportunity to provide individual informed consent, particularly when the intervention is a cluster-level policy or environmental change; additionally, gatekeepers (cluster leaders) may consent on behalf of individuals without adequate authority",
      "C) CRTs are unethical because they cannot incorporate randomization concealment and are therefore biased",
      "D) The ethical distinctiveness of CRTs relates exclusively to the statistical analysis method, not to participant protection issues"
    ],
    answer: 1,
    explanation: "The defining ethical challenge of CRTs is the consent problem: when a hospital, school, or community is randomized, individual members of that cluster may be exposed to the intervention without individual consent. Gatekeepers (hospital administrators, school principals, community leaders) may provide permission, but this is categorically different from individual informed consent. The Ottawa Statement on the Ethical Design and Conduct of CRTs specifically addresses this, distinguishing cluster-level permission from individual consent requirements."
  },
  {
    id: 45,
    question: "Pragmatic clinical trials (PCTs) are designed to inform real-world clinical decisions. They often use broad eligibility criteria and minimal exclusion criteria. What ethical tension is MOST characteristic of PCTs compared to explanatory RCTs?",
    options: [
      "A) PCTs generate less reliable data than explanatory trials, making them inherently less ethical",
      "B) The broad eligibility and minimal oversight typical of PCTs means that vulnerable subgroups may be enrolled without adequate protections; simultaneously, the 'low-risk' framing of PCTs may lead to ethics committees applying reduced scrutiny, yet real-world clinical contexts can expose participants to significant risks",
      "C) PCTs violate the principle of justice because they enroll diverse populations rather than homogeneous groups",
      "D) Pragmatic trials are ethically superior in all respects because they generate generalizable evidence applicable to the full population"
    ],
    answer: 1,
    explanation: "PCTs generate a specific ethical tension: their 'real-world' framing and use of routine care procedures may lead investigators and ethics committees to underestimate risks and apply reduced oversight. Yet the broad enrollment criteria mean vulnerable populations are included without the tailored protections of explanatory trials. The PRECIS-2 tool highlights the spectrum from explanatory to pragmatic, but ethical review frameworks must not automatically reduce scrutiny simply because a trial mirrors routine care."
  },
  {
    id: 46,
    question: "Human challenge studies (controlled human infection models) involve deliberately infecting healthy volunteers with a pathogen to study infection and test vaccines. The 2021 WHO guidelines on human challenge studies identify what as the KEY ethical justification for this approach?",
    options: [
      "A) The potential for financial compensation to participants justifies the deliberate infection risk",
      "B) Challenge studies are justified when: the scientific question cannot be adequately addressed through natural infection trials; the infection is well-characterized with a known rescue treatment; the risk to participants is carefully minimized; and the potential public health benefit is substantial",
      "C) Healthy volunteers can be enrolled in challenge studies without ethics committee oversight if they provide written consent",
      "D) Challenge studies are only ethical for viral diseases; bacterial challenge models are inherently unethical"
    ],
    answer: 1,
    explanation: "WHO 2021 guidance on human challenge studies identifies multiple conditions: (1) scientific necessity (question not addressable otherwise), (2) characterized pathogen/strain with established safety profile, (3) rescue treatment or management protocol available, (4) expected risk proportionate to potential benefit, (5) rigorous ethics review, and (6) fair participant selection and compensation. The 2020-2021 COVID-19 challenge study debates highlighted these criteria prominently. Compensation (option A) cannot independently justify the ethical risks."
  },
  {
    id: 47,
    question: "Compassionate use (expanded access) provides investigational drugs to patients outside of clinical trials. What is the PRIMARY ethical tension between expanded access and the integrity of the clinical trial process?",
    options: [
      "A) Expanded access violates the Nuremberg Code because patients are receiving experimental drugs without randomization",
      "B) Wide expanded access may reduce trial enrollment (as patients prefer access without randomization to placebo), potentially undermining the ability to generate the evidence needed to establish safety and efficacy for all future patients; conversely, denying access to dying patients causes immediate identifiable harm",
      "C) Expanded access is prohibited under the Declaration of Helsinki for any disease where clinical trials are ongoing",
      "D) The ethical tension is exclusively financial: expanded access reduces sponsor revenue from eventual approved product sales"
    ],
    answer: 1,
    explanation: "Expanded access creates a genuine tension between individual and population ethics. Allowing broad access while trials are ongoing may: (1) reduce trial enrollment (patients who can get access won't enroll in trials with placebo risk), (2) generate safety signals that are hard to attribute in the absence of controlled conditions, and (3) undermine the evidence base for the eventual approval decision. Yet denying access to terminally ill patients with no alternatives represents an immediately identifiable harm. This is the classic individual vs. societal benefit tension in research ethics."
  },
  {
    id: 48,
    question: "The 'Right to Try' laws enacted in several US states (and federally in 2018) allow terminally ill patients to access investigational drugs that have completed Phase I testing but have not yet received full FDA approval. Which ethical critique of Right to Try legislation is MOST aligned with established research ethics principles?",
    options: [
      "A) Right to Try laws are ethically acceptable because they express the principle of patient autonomy and self-determination",
      "B) Right to Try laws may create a false hope by providing access to drugs with unproven efficacy, potentially bypassing the systematic evidence generation needed to protect future patients; they may also divert resources from trials, exploit desperate patients' vulnerability, and lack the oversight mechanisms of compassionate use programs",
      "C) Right to Try laws are unethical solely because they circumvent FDA jurisdiction",
      "D) Right to Try is ethical only for diseases where no clinical trials are currently enrolling participants"
    ],
    answer: 1,
    explanation: "The primary research ethics critique of Right to Try is multifaceted: (1) it prioritizes individual autonomy over population-level evidence generation, (2) terminally ill patients may be particularly vulnerable to exploitation, (3) anecdotal outcomes from uncontrolled access can create false impressions of efficacy, (4) it lacks the IRB oversight and safety monitoring of compassionate use programs, and (5) it may reduce trial enrollment. The autonomy argument (option A) is the pro-Right to Try position, not the ethical critique."
  },
  {
    id: 49,
    question: "Off-label prescribing becomes an ethical issue in clinical research when investigators use off-label treatments as standard of care comparators. A trial compares an experimental drug to Drug X used off-label at doses higher than approved. What is the PRIMARY ethical concern for participants in the comparator arm?",
    options: [
      "A) The comparator arm participants are receiving an unapproved treatment, which automatically constitutes research and requires separate IRB approval",
      "B) Participants in the comparator arm are being given a treatment at doses that lack systematic safety evaluation at those specific doses; they may face unknown risks while believing they are receiving 'standard care,' and their consent must explicitly address the off-label, above-approved-dose nature of the comparator",
      "C) Off-label use is illegal and therefore any trial using an off-label comparator violates federal law",
      "D) The ethical concern is exclusively about data interpretation: off-label comparator use creates regulatory barriers to approval of the experimental drug"
    ],
    answer: 1,
    explanation: "When off-label comparators are used at above-approved doses, participants in the 'standard care' arm are actually receiving an experimental intervention at that dosage. The ethical requirements are: (1) this must be transparently disclosed in informed consent — participants must know the comparator is off-label and at what dose differential, (2) the off-label use must be justified by clinical evidence or established practice, and (3) the comparative safety profile of the off-label dose must be considered in the risk-benefit assessment. This is distinct from the common and generally accepted practice of off-label prescribing in clinical care."
  },
  {
    id: 50,
    question: "A Phase I oncology trial enrolls only patients with advanced cancer who have exhausted standard treatment options. The trial design involves dose escalation to determine MTD. Critics argue that enrolling only patients (rather than healthy volunteers) in this Phase I trial constitutes exploitation of a vulnerable population. Which counter-argument BEST defends the ethical acceptability of this design?",
    options: [
      "A) Cancer patients are not considered a vulnerable population under any recognized ethical framework, so exploitation concerns do not apply",
      "B) Enrolling patients with advanced cancer in Phase I oncology trials is justified because: (1) the investigational agent may offer direct therapeutic benefit to patients with no remaining options; (2) healthy volunteers would not be ethically appropriate due to the toxic nature of anticancer agents; and (3) the therapeutic context (disease experience with the target condition) is scientifically essential for dose-finding in the intended population",
      "C) The exploitation concern is fully resolved by providing significant financial compensation to participants",
      "D) The design is only acceptable if healthy volunteer Phase I data is available from a prior separate trial that can be used to set the starting dose"
    ],
    answer: 1,
    explanation: "Phase I oncology trials in patients (rather than healthy volunteers) are justified on multiple grounds: (1) anti-cancer agents are too toxic to administer to healthy individuals, (2) the pharmacokinetics and pharmacodynamics may differ substantially between cancer patients and healthy volunteers, making patient data essential, and (3) patients with no remaining standard options may gain direct benefit. The vulnerability concern is addressed by ensuring that: consent is free from therapeutic misconception, the starting dose is based on preclinical data with appropriate safety margins, and dose escalation rules protect subsequent cohorts. Financial compensation (option C) cannot independently justify enrollment of vulnerable populations."
  }
]

export default questions

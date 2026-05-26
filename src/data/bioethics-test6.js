const questions = [
  // ===== CHILDREN IN RESEARCH (Q1–Q10) =====
  {
    id: 1,
    question: "A researcher plans a Phase II trial of a novel antibiotic in children aged 8–12 years. The study involves venipuncture every 2 weeks for 3 months. The IRB determines this exceeds minimal risk but offers the prospect of direct benefit. Under 45 CFR 46.405 / ICMR guidelines, which combination of permissions is required?",
    options: [
      "Assent from child + permission from one parent",
      "Assent from child + permission from both parents unless one is unavailable",
      "Assent from child alone is sufficient if the child is 10 or older",
      "Permission from one parent is sufficient regardless of risk level"
    ],
    answer: 1,
    explanation: "Under 45 CFR 46.405 (greater than minimal risk with prospect of direct benefit), assent from the child AND permission from both parents (unless one parent is deceased, unknown, incompetent, or not reasonably available) is required. ICMR 2017 guidelines similarly require both parental permission and child assent. When only one parent's permission is obtainable, documentation of why the other parent is unavailable must be provided."
  },
  {
    id: 2,
    question: "An 11-year-old child with leukemia is enrolled in a randomized trial. The child clearly and repeatedly states, 'I don't want more blood draws.' The parents, desperate for treatment options, insist the child continue. The IRB had previously approved a waiver of assent because the intervention offers the prospect of direct benefit not otherwise available. The correct ethical course is:",
    options: [
      "Override the child's dissent because the IRB waiver is in effect and parents consent",
      "Remove the child from the study immediately regardless of medical consequences",
      "Honor the waiver but document the child's ongoing dissent and reassess at each visit",
      "Require a new IRB review since the child's dissent constitutes a change in circumstances"
    ],
    answer: 2,
    explanation: "When an IRB grants a waiver of assent because the intervention offers direct benefit not available outside the research, the waiver is ethically valid even against dissent. However, best practice under AAP guidelines (Pediatrics, 1995) and ICMR 2017 requires continuous documentation of the child's evolving dissent, compassionate engagement with the child's concerns, and periodic ethical reassessment. Removing the child abruptly may harm them; immediate IRB re-review is not automatically triggered unless the protocol itself changes."
  },
  {
    id: 3,
    question: "Under the ICMR National Ethical Guidelines 2017, a study involving healthy children aged 6–12 years examining cognitive effects of a dietary supplement is classified as 'minimal risk.' Which criterion BEST defines 'minimal risk' in the pediatric context?",
    options: [
      "Risk not greater than that ordinarily encountered in daily life or routine physical/psychological examination",
      "Risk acceptable to the majority of parents in a community survey",
      "Risk equivalent to Phase I adult clinical trials",
      "Risk that can be mitigated by adequate monitoring and parental supervision"
    ],
    answer: 0,
    explanation: "Both 45 CFR 46.402(i) and ICMR 2017 define minimal risk as the probability and magnitude of harm or discomfort anticipated not greater than that ordinarily encountered in daily life or during routine physical or psychological examinations or tests. This is an objective standard anchored to common childhood experiences, not parental opinion polls or Phase I trial benchmarks."
  },
  {
    id: 4,
    question: "The pediatric exclusivity provision under Section 505A of the US Food, Drug, and Cosmetic Act (Best Pharmaceuticals for Children Act) incentivizes pediatric drug studies by granting:",
    options: [
      "5-year market exclusivity for new molecular entities studied in children",
      "6-month patent extension for drugs that complete an FDA-requested pediatric study",
      "Priority review designation at no cost for pediatric indications",
      "Tax credits equivalent to 50% of pediatric trial costs"
    ],
    answer: 1,
    explanation: "The Best Pharmaceuticals for Children Act (BPCA, 2002, reauthorized 2007 and 2012) grants 6 months of additional market exclusivity (added to existing exclusivity/patent) when a sponsor completes pediatric studies requested by the FDA via a Written Request. This applies whether the pediatric studies support or do not support the pediatric labeling change. The Pediatric Research Equity Act (PREA) separately mandates studies; BPCA provides the incentive."
  },
  {
    id: 5,
    question: "A 14-year-old is enrolled in a longitudinal cohort study on HIV risk behaviors. During follow-up, the participant discloses ongoing injection drug use. The study has a Certificate of Confidentiality. State law requires mandatory reporting of drug use in minors. The investigator's MOST appropriate action is:",
    options: [
      "Report to authorities immediately because state law supersedes the Certificate of Confidentiality",
      "Maintain confidentiality because a Certificate of Confidentiality protects against all mandatory disclosures",
      "Disclose to parents only, not to state authorities, as a middle-ground approach",
      "Consult IRB and legal counsel; the 21st Century Cures Act Certificate does not protect against all state mandatory reporting laws affecting minors"
    ],
    answer: 3,
    explanation: "The 21st Century Cures Act (2016) strengthened Certificates of Confidentiality, making them mandatory for NIH-funded studies and prohibiting compelled disclosure. However, CCs do not override mandatory reporting requirements for abuse, neglect, or specific state-law obligations applicable to minors. The investigator must consult the IRB and legal counsel to determine which state-mandated disclosures apply. The consent form should have disclosed this limitation upfront."
  },
  {
    id: 6,
    question: "According to AAP Committee on Bioethics guidelines, the MINIMUM age at which formal written assent (rather than just behavioral compliance) should generally be sought in research is:",
    options: [
      "5 years",
      "7 years",
      "10 years",
      "12 years"
    ],
    answer: 1,
    explanation: "The AAP 1995 policy statement on informed consent, parental permission, and assent recommends that assent be sought from children approximately 7 years and older, as this corresponds to the age of developing concrete operational thinking (Piaget). Children 7–13 typically receive age-appropriate assent forms; full understanding capacity approximating adults develops around age 14. ICMR 2017 similarly uses 7 years as a threshold for assent documentation."
  },
  {
    id: 7,
    question: "In a cluster-randomized school-based study on a nutrition intervention, it is impractical to obtain parental permission for every child. The IRB is considering waiving parental permission under 45 CFR 46.408(c). All of the following are required conditions for this waiver EXCEPT:",
    options: [
      "The research involves no greater than minimal risk",
      "The waiver will not adversely affect the rights and welfare of subjects",
      "The research could not practicably be carried out without the waiver",
      "A community advisory board must formally approve the waiver in writing"
    ],
    answer: 3,
    explanation: "Under 45 CFR 46.408(c), waiver of parental permission requires: (1) minimal risk, (2) no adverse effect on welfare/rights, (3) not practicable without waiver, and (4) when appropriate, subjects are provided with additional pertinent information post-participation. There is no regulatory requirement for a formal community advisory board written approval, though community engagement is considered best practice particularly in school-based research."
  },
  {
    id: 8,
    question: "The ICMR 2017 guidelines' provision on research involving children specifically addresses 'therapeutic orphans.' This term refers to:",
    options: [
      "Children who have lost both parents and are enrolled in orphanage-based research",
      "Children for whom drugs approved only in adults are used off-label due to lack of pediatric data",
      "Pediatric patients abandoned by their treating physicians in research trials",
      "Children with rare diseases who have no standard-of-care treatment available"
    ],
    answer: 1,
    explanation: "The term 'therapeutic orphan,' coined by Harry Shirkey in 1968, refers to children who are excluded from drug trials but then receive drugs approved only for adults, used off-label without pediatric pharmacokinetic/pharmacodynamic data. This creates safety and efficacy uncertainties. ICMR 2017 and global pediatric regulations (PREA, EU Pediatric Regulation) were designed precisely to address this gap by requiring appropriate pediatric studies."
  },
  {
    id: 9,
    question: "A Phase I dose-escalation oncology trial is proposed for pediatric patients aged 2–17 years with refractory solid tumors, where all other treatments have failed. Under 45 CFR 46.407, what is the appropriate regulatory pathway?",
    options: [
      "The trial qualifies under 46.405 because the prospect of direct benefit justifies greater than minimal risk",
      "The trial requires referral to the Secretary's panel (407 review) because it does not meet 46.405 criteria for direct benefit in Phase I dose-finding",
      "The trial is prohibited in children under 12 regardless of terminal diagnosis",
      "The trial qualifies under 46.406 because cancer research presents a minor increase over minimal risk"
    ],
    answer: 1,
    explanation: "45 CFR 46.407 provides a pathway for research not otherwise approvable under 46.404–46.406, requiring referral to a special federal panel convened by the HHS Secretary. Phase I dose-escalation trials in children are ethically complex: they do not offer a clear prospect of direct benefit (the goal is dose-finding/safety), yet they exceed minimal risk. Some argue 46.405 applies if there is therapeutic intent; however, pure Phase I designs typically require 407 review unless the IRB determines there is a prospect of direct benefit, which is scientifically uncertain."
  },
  {
    id: 10,
    question: "ICMR 2017 guidelines state that in research involving children, a child who was enrolled with parental permission and later reaches the age of majority during the study:",
    options: [
      "Can continue without any further consent as parental permission remains valid for the duration of enrollment",
      "Must provide their own informed consent as an adult, or be withdrawn from the study",
      "Requires a brief re-assent form but not a full adult consent form",
      "The IRB has discretion to waive adult consent if study completion is imminent"
    ],
    answer: 1,
    explanation: "When a research participant reaches the age of majority (18 years in India) during a longitudinal study, they transition from a minor to an autonomous adult. ICMR 2017 and ICH E11 guidelines require that the now-adult participant provide their own full informed consent to continue participation. Parental permission does not extend into adulthood. Failure to obtain adult consent would be a protocol deviation and violation of the participant's newly acquired full autonomy."
  },

  // ===== MENTALLY ILL / COGNITIVELY IMPAIRED (Q11–Q20) =====
  {
    id: 11,
    question: "A researcher is using the MacCAT-CR (MacArthur Competence Assessment Tool for Clinical Research) to assess decision-making capacity in patients with schizophrenia for enrollment in a treatment trial. Which of the following accurately describes the MacCAT-CR's four domains of assessment?",
    options: [
      "Understanding, Appreciation, Reasoning, and Expressing a choice",
      "Intelligence, Memory, Orientation, and Language",
      "Disclosure, Voluntariness, Competence, and Comprehension",
      "Cognitive function, Emotional stability, Social judgment, and Executive function"
    ],
    answer: 0,
    explanation: "The MacCAT-CR, developed by Appelbaum and Grisso, assesses four domains: (1) Understanding – ability to comprehend disclosed information; (2) Appreciation – ability to apply information to one's own situation; (3) Reasoning – ability to process and weigh options logically; (4) Expressing a Choice – ability to communicate a consistent decision. It generates scores on each domain (max 6, 6, 8, 2 respectively). It is the most widely validated capacity assessment tool for research contexts."
  },
  {
    id: 12,
    question: "A patient with moderate Alzheimer's disease lacks capacity to consent to a longitudinal neuroimaging study. Her adult son holds general power of attorney for financial matters. He offers to give permission for her participation. The MOST ethically sound approach is:",
    options: [
      "Accept the son's permission because power of attorney grants comprehensive surrogate authority",
      "Require appointment of a court-appointed guardian before enrollment can proceed",
      "Determine whether the son qualifies as a Legally Authorized Representative (LAR) under applicable state law for research participation specifically",
      "Allow the patient's treating neurologist to serve as LAR as they know the patient best"
    ],
    answer: 2,
    explanation: "Legally Authorized Representative (LAR) status for research consent is defined by state/national law and is NOT automatically conferred by financial power of attorney. General POA for finances does not include medical or research decisions unless explicitly stated. ICMR 2017 and 45 CFR 46.102(i) require that LARs be authorized under applicable law. The investigator must verify that the son meets jurisdictional LAR criteria for research participation — typically requiring healthcare proxy, durable POA for healthcare, or court-appointed guardianship."
  },
  {
    id: 13,
    question: "An advance research directive (ARD) was completed by a patient with bipolar disorder during a euthymic period, specifying willingness to participate in future psychiatric research if incapacitated. The patient subsequently develops severe psychosis and loses capacity. The current study requires lumbar puncture, classified as 'minor increase over minimal risk' with no prospect of direct benefit. The ARD's applicability depends MOST critically on:",
    options: [
      "Whether the treating psychiatrist believes the patient would still want to participate",
      "Whether the IRB-approved protocol explicitly contemplated and authorized the use of ARDs for enrollment",
      "Whether the patient's next-of-kin agrees with the decision documented in the ARD",
      "Whether the ARD was notarized and witnessed by two independent individuals"
    ],
    answer: 1,
    explanation: "Advance Research Directives are only valid for enrollment if the research protocol and consent process were specifically designed to accommodate them, and the IRB has reviewed and approved ARD-based enrollment. The ARD must match the specific study or class of studies described. The protocol must also have appropriate safeguards. Merely having an ARD does not automatically authorize enrollment in any future study; the specificity of the ARD's scope and the IRB's explicit approval of ARD-based enrollment are the critical determinants."
  },
  {
    id: 14,
    question: "The National Bioethics Advisory Commission (NBAC) 1998 report on 'Research Involving Persons with Mental Disorders That May Affect Decisionmaking Capacity' recommended a specific protection for research involving more than minimal risk with no prospect of direct benefit. This recommendation was:",
    options: [
      "Such research should be entirely prohibited regardless of scientific merit",
      "Such research should require concurrent IRB review and independent psychiatrist assessment at each visit",
      "A 'subject advocate' independent of the research team should be appointed to monitor the incapacitated subject's welfare and assent/dissent",
      "Such research should only proceed if the subject expressed prior willingness in writing while competent"
    ],
    answer: 2,
    explanation: "The NBAC 1998 report recommended that for research involving more than minimal risk with no prospect of direct benefit in persons with impaired capacity, a subject advocate (independent monitor) should be appointed. This advocate, distinct from the LAR, monitors ongoing consent, assesses re-emerging capacity, and can halt participation if the subject shows signs of distress or dissent. This recommendation, while influential, has not been universally codified in US federal regulations but informs best practice and some state laws."
  },
  {
    id: 15,
    question: "A researcher studying treatment-refractory depression wants to enroll patients during an acute depressive episode, as this reflects the real-world population that would benefit from the intervention. Critics argue that depression itself may impair autonomous decision-making. The MOST defensible ethical position is:",
    options: [
      "Acute depression always invalidates consent capacity; enrollment must wait until remission",
      "Capacity assessment using a validated tool (e.g., MacCAT-CR) should be performed for each individual; depression does not automatically negate capacity",
      "Surrogate consent is required for all patients with moderate-to-severe depression scores",
      "Enrolling depressed patients is ethically equivalent to enrolling incapacitated subjects and requires the same LAR process"
    ],
    answer: 1,
    explanation: "Capacity is a functional, task-specific, individual assessment — not a categorical diagnosis-based determination. Many patients with major depression retain decision-making capacity. The MacCAT-CR or similar validated tools should be applied individually. Blanket exclusion of depressed patients creates the ethical problem of 'therapeutic exclusion' that disadvantages the population most likely to benefit. ICMR 2017, the Declaration of Helsinki, and psychiatric ethics consensus recommend individualized capacity assessment rather than diagnostic proxies."
  },
  {
    id: 16,
    question: "Research involving observation and documentation of seclusion and restraint practices in a psychiatric inpatient unit raises unique ethical concerns. The MOST problematic ethical issue specific to this research type is:",
    options: [
      "Lack of equipoise since seclusion/restraint is already standard care",
      "Inability to obtain prospective consent from patients who may be placed in seclusion during the study period",
      "Publication of seclusion data may stigmatize the institution and reduce future funding",
      "Seclusion/restraint research is prohibited under CITI program guidelines"
    ],
    answer: 1,
    explanation: "The core ethical challenge in seclusion/restraint observational research is the inability to obtain prospective consent from patients during the acute events being studied, as patients in crisis may lack capacity at precisely the relevant moment. The IRB must evaluate: (1) whether prospective consent during non-crisis periods is feasible, (2) whether a waiver of consent is appropriate given minimal risk nature of observation, (3) deferred consent procedures, and (4) whether identifiable data are necessary. CITI guidelines do not prohibit this research; it requires careful IRB scrutiny."
  },
  {
    id: 17,
    question: "In a clinical trial for a new antipsychotic, a patient with schizophrenia initially provides valid consent and is enrolled. Three months into the study, the patient experiences a psychotic relapse and appears to lack capacity to make decisions about continuing. Under ICMR 2017 guidelines, the appropriate course is:",
    options: [
      "Continue the study as original consent remains valid for the study duration",
      "Immediately withdraw the patient from all study interventions",
      "Obtain LAR permission to continue and reassess the patient's capacity at regular intervals",
      "Administer the study drug as it may treat the relapse, then obtain re-consent"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines and international psychiatric research ethics standards require that when a participant loses capacity during a study, an LAR must be identified to provide ongoing permission. The participant's own prior consent does not provide perpetual authorization across capacity fluctuations. The study may continue under LAR authorization with ongoing monitoring, and the participant's own capacity should be reassessed at each study visit. If the participant regains capacity, re-consent must be obtained."
  },
  {
    id: 18,
    question: "A pharmaceutical company sponsors a study on a new anxiolytic in adults with intellectual disability (IQ 50–70). The participants can express basic preferences but cannot understand complex risk-benefit information. The MOST appropriate consent framework under ICMR 2017 is:",
    options: [
      "LAR consent is sufficient; assent from the participant is not required given cognitive limitations",
      "LAR permission combined with participant assent obtained through simplified, accessible communication appropriate to the participant's communication level",
      "The study cannot proceed because adults with IQ below 70 are categorically incapable of any form of consent",
      "Participant assent alone is sufficient if they affirmatively agree to study procedures"
    ],
    answer: 1,
    explanation: "Adults with intellectual disability form a spectrum; many retain partial capacity to assent even if they cannot provide full legally valid informed consent. ICMR 2017, and the UN Convention on the Rights of Persons with Disabilities (CRPD), emphasize supported decision-making: LAR permission must be obtained, but the participant's own assent using accessible formats (simple language, pictures, role-play demonstrations) is ethically required and must be documented. Dissent from the participant should generally halt enrollment even with LAR permission."
  },
  {
    id: 19,
    question: "The concept of 'therapeutic misconception' is particularly problematic in psychiatric research. Which statement BEST characterizes therapeutic misconception in this context?",
    options: [
      "Researchers falsely believing that their study treatment is superior to standard care",
      "Participants conflating research participation with individualized therapeutic treatment, leading them to misunderstand randomization, blinding, and the primacy of scientific aims",
      "IRB members mistakenly approving psychiatric research that has no therapeutic value",
      "Sponsors misrepresenting clinical trial results as definitive therapeutic evidence"
    ],
    answer: 1,
    explanation: "Therapeutic misconception (Appelbaum, Roth & Lidz, 1982) describes the systematic tendency of research participants — particularly vulnerable individuals like those with psychiatric disorders — to conflate research participation with receiving individualized treatment. They may not understand that treatment assignment is randomized, that the primary goal is generalizable knowledge rather than their personal benefit, and that protocol requirements may conflict with their individual needs. It is especially prevalent in psychiatric populations and undermines truly informed consent."
  },
  {
    id: 20,
    question: "A researcher proposes to study neurobiological correlates of violence in forensic psychiatric patients (those found not guilty by reason of insanity, NGRI). These individuals are confined in secure hospitals. An IRB member argues they are 'doubly vulnerable.' Which combination of vulnerabilities is MOST accurate?",
    options: [
      "Cognitive impairment + social disadvantage",
      "Institutionalization with limited autonomy + possible psychiatric impairment affecting decisional capacity",
      "Economic disadvantage + fear of stigma",
      "Coercion by treating staff + inability to understand research"
    ],
    answer: 1,
    explanation: "NGRI patients in forensic hospitals face dual vulnerability: (1) Institutionalization — they are confined and may fear that refusal to participate will adversely affect their treatment, privileges, or release prospects (coercive environment), and (2) Psychiatric disorders — their conditions may variably impair decisional capacity. The Belmont Report and ICMR 2017 both identify institutionalized persons and those with cognitive/psychiatric impairment as distinct vulnerable categories. When both apply simultaneously, heightened protections and independent monitoring are warranted."
  },

  // ===== PREGNANT WOMEN, FETUSES & NEONATES (Q21–Q30) =====
  {
    id: 21,
    question: "Under 45 CFR 46 Subpart B, research involving pregnant women may be conducted when the research holds out the prospect of direct benefit SOLELY to the fetus. In this scenario, which additional condition is required beyond pregnant woman's consent?",
    options: [
      "Only the pregnant woman's consent is needed in all cases",
      "Consent of the pregnant woman and, if reasonably available, consent of the father, unless the pregnancy resulted from rape or incest",
      "Consent of the pregnant woman and mandatory ethics committee review at national level",
      "Consent of the father is required regardless of circumstances, as the fetus has dual parentage"
    ],
    answer: 1,
    explanation: "45 CFR 46.204(d) specifies that when research holds out the prospect of direct benefit solely to the fetus, both the pregnant woman's consent AND the father's consent (if reasonably available) are required — UNLESS the pregnancy resulted from rape or incest, the father is incompetent, or he cannot reasonably be consulted. The father's consent is required specifically because the research is for the fetus's benefit alone, and the fetus has both parents' stake. ICMR 2017 has analogous provisions requiring spousal consent in certain research contexts."
  },
  {
    id: 22,
    question: "A vaccine efficacy trial in pregnant women in the third trimester aims to protect both the mother and the neonate through transplacental antibody transfer. The risk to the fetus is classified as minimal. Under Subpart B criteria, enrollment is permissible if:",
    options: [
      "The risk to the fetus is caused solely by interventions that also hold out direct benefit to the pregnant woman",
      "Preclinical animal studies show no teratogenicity and Phase III adult data demonstrate acceptable safety",
      "The risk to the fetus is minimal and the knowledge to be gained cannot be obtained from studies in non-pregnant women",
      "The IRB chair provides personal written authorization after reviewing the safety data"
    ],
    answer: 2,
    explanation: "Under 45 CFR 46.204(b), research in pregnant women where the risk is minimal to the fetus and the research holds out the prospect of direct benefit to the pregnant woman or may benefit the fetus is permissible. Additionally, under 46.204(a), research that cannot practicably be performed without enrollment of pregnant women meets a threshold requirement. The key regulatory criterion is that the risk to the fetus is the minimum needed to meet scientific objectives, and that non-pregnant women cannot yield equivalent knowledge — not merely animal safety data."
  },
  {
    id: 23,
    question: "The PRGLAC (Task Force on Research Specific to Pregnant Women and Lactating Women) 2018 report recommended changes to 45 CFR 46 Subpart B. The MOST significant recommendation was:",
    options: [
      "Complete prohibition of Phase I trials in pregnant women due to unknown teratogenic risks",
      "Replacing the term 'pregnant women' with 'pregnant persons' and removing the additional requirement for father's consent in direct fetal benefit research",
      "Expanding the definition of 'minimal risk' to include procedures equivalent to routine obstetric care",
      "Requiring DSMB monitoring for all studies involving pregnant women regardless of risk level"
    ],
    answer: 1,
    explanation: "The PRGLAC 2018 report made several landmark recommendations including: removing the father's consent requirement (as it places undue burden and may be coercive), using inclusive language ('pregnant persons'), and emphasizing that pregnant individuals should be presumptively included rather than excluded from research. The report also advocated for a systematic approach to including pregnant people in clinical trials and updating the paternalistic framework of Subpart B that historically treated pregnant women primarily as vessels for fetal protection rather than autonomous research subjects."
  },
  {
    id: 24,
    question: "Research on neonates (newborns) who are of uncertain viability presents specific ethical challenges. Under 45 CFR 46 Subpart B (46.205), research involving neonates of uncertain viability is permissible ONLY IF:",
    options: [
      "The treating neonatologist certifies that the neonate is expected to survive",
      "The vital signs of the neonate are stable for at least 24 hours before enrollment",
      "The research will not terminate the heartbeat or respiration of the neonate, and the research holds the prospect of enhancing the probability of survival with appropriate care or holds no additional risk",
      "Parental consent is waived due to the emergency nature of neonatal conditions"
    ],
    answer: 2,
    explanation: "45 CFR 46.205(b)(1) states research involving neonates of uncertain viability may proceed only if: (1) the research holds the prospect of enhancing the neonate's probability of survival to viability OR (2) the purpose of the research is the development of important biomedical knowledge not obtainable by other means and there will be no added risk to the neonate. Additionally, 46.205(b)(2) explicitly prohibits research that will terminate the heartbeat or respiration of the neonate. This reflects the dual obligation to neonatal welfare and the importance of neonatal research."
  },
  {
    id: 25,
    question: "A study examines the pharmacokinetics of a pain medication in breastfeeding women and their infants. The study requires collection of breast milk samples and infant blood spots. Which ethical framework BEST applies?",
    options: [
      "Lactating women are not a vulnerable population; standard adult consent procedures apply",
      "The infant's exposure through breast milk creates a separate research subject requiring independent consent/parental permission and risk-benefit analysis for the infant",
      "The woman's consent covers both herself and the infant since she controls breastfeeding decisions",
      "ICMR 2017 exempts breast milk pharmacokinetic studies from ethics review as they involve minimal risk"
    ],
    answer: 1,
    explanation: "When a breastfeeding infant is exposed to a study agent through breast milk and study procedures include infant-specific measures (blood spots), the infant is effectively a research subject distinct from the mother. This requires: (1) the mother's consent as the infant's parent, (2) risk-benefit analysis for the infant separately (drug exposure via milk, blood spot collection), and (3) IRB review considering infant vulnerability. The 2016 revisions to the Common Rule and ICMR 2017 both acknowledge the infant as a distinct stakeholder in lactation pharmacology research."
  },
  {
    id: 26,
    question: "In India, the ICMR 2017 guidelines' position on research using human embryos created specifically for research purposes (as opposed to surplus IVF embryos) is:",
    options: [
      "Permitted up to 14 days of development (the 14-day rule) if approved by a national ethics committee",
      "Permitted only if the embryo will be implanted after research procedures",
      "Not explicitly prohibited but requires ICMR Central Ethics Committee approval and a compelling scientific rationale",
      "Prohibited; only research on surplus embryos donated from IVF programs is permitted, and only up to 14 days"
    ],
    answer: 3,
    explanation: "ICMR 2017 guidelines and the earlier ICMR-DBT Guidelines for Stem Cell Research (2013) prohibit the creation of embryos solely for research purposes. Research on surplus IVF embryos (donated by couples who have completed their family) is permitted under strict conditions, including: donor couple's free and informed consent, no financial inducement, limited to the 14-day rule (pre-primitive streak stage), and approval by the relevant ethics committee. This aligns with the 'waste not' principle applied to embryos that would otherwise be discarded."
  },
  {
    id: 27,
    question: "The 'maternal-fetal conflict' in research ethics arises when a research intervention may benefit the pregnant woman but pose additional risk to the fetus. The MOST ethically defensible approach according to contemporary bioethics scholarship is:",
    options: [
      "The fetus's interests always take precedence, as the state has a compelling interest in protecting potential life",
      "The pregnant woman's autonomous choice governs, as she is the primary research subject and the fetus has no independent legal standing in research ethics",
      "A balanced approach requiring individualized risk-benefit analysis, the woman's informed consent after disclosure of fetal risks, and independent ethics review — recognizing the woman's primacy while appropriately weighing fetal welfare",
      "Research should be halted whenever any risk to the fetus cannot be quantified, applying a strict precautionary principle"
    ],
    answer: 2,
    explanation: "Contemporary bioethics (Lyerly, Little, Faden; the PRGLAC report) rejects both extreme fetal-primacy and pure maternal-autonomy frameworks. The ethically defensible approach treats the pregnant woman as the primary autonomous agent while recognizing the ethical significance of fetal welfare. The key elements are: full disclosure of known and unknown fetal risks, individualized risk-benefit assessment, the woman's informed and voluntary decision, IRB review calibrated to fetal risk level, and recognition that systemic exclusion of pregnant women from research itself creates risks from untested medications."
  },
  {
    id: 28,
    question: "The Surrogacy (Regulation) Act 2021 in India made altruistic surrogacy legal under specific conditions. From a research ethics perspective, if a study aims to enroll gestational surrogates to study placental function, the MOST critical additional ethical concern compared to non-surrogate pregnancy research is:",
    options: [
      "Surrogate mothers are foreign nationals and may not be covered by ICMR guidelines",
      "The surrogate has a contractual obligation to the intended parents that may compromise her voluntariness and make truly voluntary refusal of research participation structurally difficult",
      "Placentas from surrogacy pregnancies are owned by the intended parents, requiring their consent for research use",
      "Surrogacy research is categorically prohibited under the Surrogacy (Regulation) Act 2021"
    ],
    answer: 1,
    explanation: "The central additional ethical concern for surrogate research subjects is compromised voluntariness due to contractual obligations. A surrogate bound by a legal agreement to the intended parents may feel unable to refuse research requests without jeopardizing the surrogacy arrangement, compensation, or their relationship with the intended parents. This structural coercion undermines truly voluntary consent. ICMR 2017 emphasizes that vulnerability arising from economic dependency or contractual arrangements requires additional protections. Research on surrogates must include explicit assurances that research refusal has no consequence on the surrogacy contract."
  },
  {
    id: 29,
    question: "A researcher proposes to study outcomes of fetuses diagnosed prenatally with a chromosomal abnormality (Trisomy 18) where parents are considering pregnancy termination. The research involves no additional invasive procedures but includes detailed documentation from existing clinical data. The primary ethical concern with this study is:",
    options: [
      "Risk of fetal harm from data collection procedures",
      "Potential exploitation of parental grief and the timing/manner of research recruitment during a crisis period (diagnosis-to-decision window)",
      "Conflict of interest because the researcher may benefit from promoting termination",
      "ICMR guidelines prohibit any research related to pregnancy termination decisions"
    ],
    answer: 1,
    explanation: "When research involves parents who have just received a devastating prenatal diagnosis and are in the decision-making period regarding pregnancy continuation, the primary ethical concern is vulnerability to exploitation and compromised voluntariness during acute distress. ICMR 2017 and international guidelines require: adequate time for parents to process the diagnosis before research consent is sought, separation of the research recruiter from the clinical care team delivering the diagnosis, clear communication that research refusal has no impact on care, and sensitivity to cultural/religious dimensions of the decision."
  },
  {
    id: 30,
    question: "The ICMR 2017 guidelines' position on fetal tissue research requires all of the following EXCEPT:",
    options: [
      "Fetal tissue must be obtained only from spontaneous abortions or induced abortions legally performed",
      "The decision to terminate a pregnancy must be made before and independently of the decision to donate tissue for research",
      "Investigators may offer financial inducements to encourage fetal tissue donation in economically disadvantaged settings",
      "Written informed consent from the woman must be obtained for use of fetal tissue in research"
    ],
    answer: 2,
    explanation: "ICMR 2017 and international consensus on fetal tissue research (including NIH guidelines and the National Institutes of Health Revitalization Act 1993) strictly prohibit financial inducements for fetal tissue donation, as this could influence abortion decisions and constitute undue inducement. Required conditions include: (1) tissue only from legal abortions or spontaneous losses, (2) abortion decision made independently of and prior to research donation decision, (3) no financial inducement, (4) informed consent for tissue use, and (5) the donor having no control over tissue recipient or use."
  },

  // ===== PRISONERS, ECONOMICALLY DISADVANTAGED, TRIBAL/INDIGENOUS COMMUNITIES (Q31–Q40) =====
  {
    id: 31,
    question: "Under 45 CFR 46 Subpart C, research in prisoners is classified into four permissible categories. Research on the possible causes, effects, and processes of incarceration and criminal behavior falls under:",
    options: [
      "Category 1: Study of the possible causes, effects, and processes of incarceration",
      "Category 3: Research on conditions particularly affecting prisoners as a class",
      "Category 4: Research that may benefit the prisoner-subjects, reviewed by the Secretary",
      "Subpart C does not permit any social science research on the causes of criminal behavior"
    ],
    answer: 0,
    explanation: "45 CFR 46.306(a)(2) lists four permissible research categories for prisoners: (i) study of possible causes, effects, and processes of incarceration; (ii) study of prisons as institutional structures; (iii) research on conditions particularly affecting prisoners as a class (e.g., vaccine trials for hepatitis prevalent in prisons); and (iv) research presenting greater than minimal risk with the prospect of direct benefit to the individual prisoner, requiring Secretary review. Social science research on causes of incarceration falls under category (i)."
  },
  {
    id: 32,
    question: "An IRB reviewing a study in a prison population must include at minimum one member who is:",
    options: [
      "A former prisoner or a prisoner advocate, and this person must be the chair of the IRB",
      "A prisoner representative — meaning a prisoner currently incarcerated at the institution where research will be conducted",
      "A prisoner representative (a prisoner or a prisoner advocate), and this person must be in addition to the regular IRB membership, not substituting for a community member",
      "A licensed psychiatrist specializing in forensic psychiatry"
    ],
    answer: 2,
    explanation: "45 CFR 46.304 requires that when research involves prisoners, the IRB must include at least one prisoner or prisoner representative (someone knowledgeable about and experienced in advocating for prisoner welfare). This prisoner representative is an ADDITIONAL member beyond the regular required IRB membership — they cannot substitute for the required community member. A majority of the IRB must have no association with the prison involved in the research. The prisoner representative need not be currently incarcerated but must be able to advocate effectively for prisoner perspectives."
  },
  {
    id: 33,
    question: "A Phase II malaria vaccine trial is proposed in a tribal community in Odisha, India. The community has a history of exploitation by outside researchers and limited literacy. The ICMR 2017 requirement of 'Community Consultation and Community Advisory Board (CAB)' in this context serves which PRIMARY ethical function?",
    options: [
      "Obtaining legal permission from the Gram Panchayat which serves as the LAR for all community members",
      "Ensuring that individual informed consent can be waived because community-level approval substitutes for it",
      "Facilitating genuine community engagement, building trust, identifying cultural concerns, and ensuring that community interests are considered alongside individual consent — not replacing individual consent",
      "Complying with the Biological Diversity Act 2002 requirement for prior informed consent before biological sample collection"
    ],
    answer: 2,
    explanation: "Community advisory boards and consultation processes in tribal/indigenous research serve to: (1) ensure the research agenda reflects community priorities, (2) identify culturally specific concerns and communication strategies, (3) build trust based on historical exploitation, (4) ensure benefit-sharing arrangements are culturally appropriate, and (5) facilitate recruitment that is genuinely voluntary rather than community-leader-coerced. Critically, community-level consultation does NOT substitute for individual informed consent — each participant must provide their own consent. ICMR 2017 explicitly states community consultation complements but does not replace individual consent."
  },
  {
    id: 34,
    question: "The Traditional Knowledge Digital Library (TKDL) was established by India's CSIR and Ministry of AYUSH primarily to:",
    options: [
      "Facilitate commercial licensing of traditional knowledge to pharmaceutical companies for drug development",
      "Serve as a defensive publication database to prevent biopiracy by establishing prior art to defeat spurious patent claims on traditional medicinal knowledge",
      "Create a centralized repository for IRB review of all research involving traditional medicines",
      "Register tribal communities' intellectual property rights under the Geographical Indications Act"
    ],
    answer: 1,
    explanation: "The TKDL, established in 2001, is a collaborative project between CSIR and Ministry of AYUSH that documents traditional Indian medicinal knowledge in multiple languages and formats accessible to international patent examiners. Its primary purpose is defensive: to establish prior art and prevent granting of patents on traditional knowledge that is already in the public domain (e.g., preventing patents on turmeric's wound-healing properties, neem's biopesticidal properties). It serves as a research ethics tool by protecting indigenous communities from biopiracy rather than facilitating commercialization."
  },
  {
    id: 35,
    question: "The Biological Diversity Act 2002 (BDA) and the Nagoya Protocol on Access and Benefit Sharing are relevant to research involving biological samples from tribal communities. A foreign researcher collecting blood samples from an Adivasi community for genomic research must obtain 'Prior Informed Consent' (PIC) and agree to 'Mutually Agreed Terms' (MAT) with:",
    options: [
      "Only the individual participants providing blood samples",
      "The National Biodiversity Authority (NBA) and the relevant State Biodiversity Board, in addition to individual participant consent",
      "The Ministry of Science and Technology and the local Member of Parliament",
      "The Union Ministry of Tribal Affairs and the Scheduled Tribes Commission"
    ],
    answer: 1,
    explanation: "Under the Biological Diversity Act 2002, access to biological resources and associated traditional knowledge by foreign nationals/organizations requires: (1) approval from the National Biodiversity Authority (NBA), (2) Prior Informed Consent from the NBA and relevant State Biodiversity Board, and (3) Mutually Agreed Terms (MAT) for fair and equitable benefit sharing. The Nagoya Protocol (to which India is a party) reinforces these requirements. Individual participant consent is necessary but not sufficient — the regulatory framework requires institutional-level approvals specifically for biological resource access."
  },
  {
    id: 36,
    question: "A clinical trial in India offers a daily cash payment of ₹500 to participants from economically disadvantaged urban slums. The standard daily wage in the area is ₹300. An IRB member argues this constitutes 'undue inducement.' Another argues it is fair compensation. The MOST appropriate ethical framework to apply is:",
    options: [
      "Any payment above minimum wage is automatically undue inducement and must be reduced",
      "The payment is undue if it is so attractive that it would compromise a potential participant's ability to exercise free judgment about enrollment risks, assessed in context of the specific population and risk level",
      "Payment in research is never ethically justified; only reimbursement for direct costs (travel, food) is permissible under ICMR 2017",
      "Payments must be standardized nationally regardless of local economic conditions"
    ],
    answer: 1,
    explanation: "The CIOMS Guidelines (2016, Guideline 13) and ICMR 2017 define undue inducement as payment so large that it clouds rational risk-benefit judgment — not merely payment above a wage floor. The assessment is contextual and proportionate: (1) Is the payment large enough relative to local norms to overwhelm reasonable decision-making? (2) Does the payment constitute exploitation or fair compensation for time, inconvenience, and discomfort? Modest premiums above wage replacement are generally acceptable. The key is whether the payment overrides rational risk appraisal, not whether it exceeds the minimum wage."
  },
  {
    id: 37,
    question: "A genomics research consortium collects saliva samples from 50 tribal villages across India and stores them in a biobank. Years later, a commercial company wants to use these samples to develop a genetic test for a disease prevalent in this tribal group. The MOST ethically critical issue concerning secondary use of these samples is:",
    options: [
      "Whether the original consent forms explicitly covered future commercial use by third parties, and whether benefit-sharing obligations were established",
      "Whether the samples are properly cryopreserved and meet international biobank standards",
      "Whether the commercial test would be marketed internationally, potentially revealing genetic information about Indian populations",
      "Whether the company has sufficient funds to compensate the communities if the test is commercially successful"
    ],
    answer: 0,
    explanation: "The primary ethical issue in secondary use of biobank samples from tribal communities is consent scope and benefit sharing. If the original consent did not cover commercial secondary use, re-consent or a community-level consultation process is required. The Nagoya Protocol requires that benefit-sharing arrangements be agreed upon at the time of access, not retroactively. ICMR 2017 guidelines on biobanking require explicit consent for specified uses; use beyond the consent scope requires either re-consent or a specific waiver by an independent ethics committee with documented justification."
  },
  {
    id: 38,
    question: "The term 'double standard' in international research ethics (as described in CIOMS Guideline 2016, Guideline 2) refers to:",
    options: [
      "The practice of applying different risk thresholds for pediatric vs. adult populations",
      "Conducting research in low- and middle-income countries (LMICs) that would not be permitted in the sponsoring high-income country due to weaker regulatory oversight",
      "Using two different statistical standards for primary and secondary endpoints in clinical trials",
      "The ethical conflict between utilitarian and deontological frameworks in research ethics committees"
    ],
    answer: 1,
    explanation: "The 'double standard' or 'ethical imperialism' critique in international research ethics refers to sponsors from high-income countries conducting research in LMICs under standards they would not be permitted to use at home — exploiting weaker regulatory oversight, economic desperation, and lack of established ethics infrastructure. CIOMS Guideline 2 (2016) states that research in LMICs must meet the same ethical standards as would be required in the sponsoring country, and that LMICs must not be used merely as sources of research subjects when the research is not relevant to local health needs."
  },
  {
    id: 39,
    question: "A researcher working with a rural farming community in Bihar wants to conduct a study on pesticide exposure and cancer risk. The local political leader ('sarpanch') publicly announces his support for the study and urges villagers to participate. Several villagers later tell health workers they felt they could not refuse because the sarpanch supported it. This illustrates which specific form of research ethics violation?",
    options: [
      "Deception, because the researcher used a third party to recruit participants",
      "Undue inducement through political patronage",
      "Coercion through community authority structures undermining the voluntariness of consent",
      "Conflict of interest because the sarpanch may benefit politically from the research"
    ],
    answer: 2,
    explanation: "This scenario illustrates coercion through authority structures — a distinct form of voluntariness compromise where hierarchical community figures create implicit or explicit pressure to participate. Unlike undue inducement (which involves attractive offers), this involves the perceived inability to refuse without social/political consequences. ICMR 2017 specifically warns about this in community-based research in rural and tribal settings: researchers must ensure that community leaders' support does not translate into coercive pressure on individuals, and consent processes must make explicit that participation is entirely voluntary regardless of leaders' views."
  },
  {
    id: 40,
    question: "The concept of 'benefit sharing' in research involving tribal communities goes beyond individual payment to participants. Which of the following BEST exemplifies ethically adequate community-level benefit sharing under ICMR 2017 and CIOMS 2016 guidelines?",
    options: [
      "Providing individual participants with transportation reimbursement and a small cash payment",
      "Publishing research results in open-access journals so the community can theoretically access them",
      "Ensuring that any interventions proven effective in the trial are made available to the community at affordable prices, and capacity-building in local health infrastructure where possible",
      "Naming one community member as a co-investigator regardless of their scientific contribution"
    ],
    answer: 2,
    explanation: "Genuine community benefit sharing, as outlined in CIOMS 2016 (Guideline 2) and ICMR 2017, requires that successful interventions be made accessible to the researched community, not just sold to those who can afford them globally. This may include: negotiating post-trial access before the study begins, training local health workers, strengthening local health infrastructure, ensuring research results are communicated back to the community in accessible formats, and addressing community-identified health priorities. Tokenistic authorship or open-access publications alone do not satisfy benefit-sharing obligations to communities that bore research burdens."
  },

  // ===== OTHER VULNERABLE GROUPS & CROSS-CUTTING ISSUES (Q41–Q50) =====
  {
    id: 41,
    question: "A professor requests that their graduate students participate in a research study they are conducting on stress and academic performance. The students are not required to participate, but they are aware the professor controls their thesis committee and funding. This scenario illustrates:",
    options: [
      "No ethical issue, because participation is formally voluntary",
      "A conflict of interest that should be disclosed to the IRB but does not affect enrollment",
      "A power differential creating structural coercion where students may not feel genuinely free to decline, making truly voluntary consent problematic",
      "An acceptable educational research practice exempt from IRB review under 45 CFR 46.104(d)(1)"
    ],
    answer: 2,
    explanation: "The power differential between faculty supervisors and dependent students (or employers and employees) creates a coercive environment where refusal carries perceived or actual professional risks. ICMR 2017 and the Common Rule recognize dependent relationships as a vulnerability. Best practices require: an independent recruiter not involved in the student's evaluation, explicit written assurance that non-participation has no academic consequences, IRB review of the enrollment process, and ideally, delaying analysis until the power relationship has ended. The formal voluntariness does not negate the structural coercion."
  },
  {
    id: 42,
    question: "Emergency exception from informed consent (EFIC) studies in the US (21 CFR 50.24) require extensive community consultation and public disclosure. The MOST important additional safeguard that distinguishes EFIC from standard waiver of consent is:",
    options: [
      "The study must be approved by the FDA in addition to the IRB",
      "The sponsor must post results on ClinicalTrials.gov within 30 days of study completion",
      "Subjects or their legally authorized representatives must be informed of enrollment and given the opportunity to withdraw as soon as practicable, and a subject advocate must be appointed for each enrolled subject",
      "Community consultation must include a public referendum with majority approval before enrollment begins"
    ],
    answer: 2,
    explanation: "21 CFR 50.24 EFIC requirements include: (1) life-threatening situation preventing consent, (2) intervention may benefit the subject, (3) obtaining consent is not feasible, (4) IRB approval, (5) independent DSMB monitoring, (6) attempts to contact a LAR and seek consent as soon as feasible, (7) subject/LAR must be informed of enrollment and offered opportunity to discontinue, and (8) community consultation and public disclosure before and after the study. The specific distinguishing feature is the requirement to inform subjects or LARs and offer withdrawal opportunity as soon as practicable — this is a post-enrollment consent obligation that differs from other waivers."
  },
  {
    id: 43,
    question: "A Phase I trial of an experimental gene therapy is proposed for patients with amyotrophic lateral sclerosis (ALS) who have a median survival of 3–5 years. Critics argue that terminally ill patients cannot give truly voluntary consent because desperation makes them overly willing to accept risks. The MOST nuanced ethical response to this critique is:",
    options: [
      "Terminally ill patients should be excluded from Phase I trials to protect them from exploiting their desperation",
      "Desperation does not invalidate capacity; however, the consent process must be enhanced with independent consultation, realistic discussion of Phase I objectives vs. treatment hope, and time for reflection",
      "The therapeutic misconception is inevitable in terminal illness; researchers must accept this as ethically permissible given the absence of alternatives",
      "Phase I trials with terminally ill patients require mandatory independent psychiatric evaluation of capacity before enrollment"
    ],
    answer: 1,
    explanation: "The ethical tension in terminally ill research participants involves two competing concerns: (1) their diminished alternatives and desperation may compromise fully rational risk appraisal, and (2) categorical exclusion violates their autonomy and denies access to potentially beneficial research. The consensus in research ethics (ICMR 2017, Compassionate Use frameworks, Declaration of Helsinki) is that capacity is individually assessed, desperation alone does not negate capacity, but enhanced consent processes are warranted: independent consultation, explicit clarification that Phase I is dose-finding not treatment, adequate time, and ongoing monitoring for signs of therapeutic misconception."
  },
  {
    id: 44,
    question: "The ICMR 2017 guidelines address research involving elderly participants (generally 65+). Which statement MOST accurately reflects the ethical framework for this population?",
    options: [
      "Age alone renders older adults a vulnerable population requiring LAR consent as a default",
      "Elderly participants are presumptively capable; age-related cognitive decline should trigger individualized capacity assessment rather than automatic vulnerability classification",
      "Research with elderly participants requires a geriatrician on the study team",
      "The ICMR 2017 guidelines exempt elderly research from special ethical oversight if the study involves non-invasive procedures"
    ],
    answer: 1,
    explanation: "ICMR 2017 and international gerontological research ethics guidelines reject ageist assumptions that equate old age with incapacity. Elderly persons are presumptively autonomous agents. Vulnerability is triggered by specific circumstances: documented cognitive decline (dementia, severe illness), institutionalization, economic dependency, or social isolation — not age per se. Capacity assessment using validated tools should be used when specific concerns arise. Appropriate accommodations (simplified consent forms, larger print, adequate time, family support if desired) are required, but surrogate consent is not the default. Age-based restrictions on research participation are themselves ethically problematic."
  },
  {
    id: 45,
    question: "A researcher in a refugee camp in India wants to study the mental health effects of displacement on Syrian refugees. The refugees are undocumented and fear that research data might be used by immigration authorities. Which ethical principle is MOST prominently at stake, and what is the MOST important procedural safeguard?",
    options: [
      "Beneficence — ensuring the research produces maximum benefit to the refugee population",
      "Justice — ensuring refugees receive equal research attention as citizens",
      "Autonomy/Confidentiality — the fear of data disclosure to authorities constitutes a real coercive threat; Certificate of Confidentiality-equivalent protections and strict data security with no linkage to immigration records are paramount",
      "Non-maleficence — the researcher must guarantee that no participant will face deportation as a result of the study"
    ],
    answer: 2,
    explanation: "Undocumented refugees face a specific vulnerability: immigration enforcement threats that can make participation inherently coercive (participate to avoid appearing uncooperative with authorities) or dangerous (data could be accessed by immigration officials). The paramount safeguard is robust confidentiality protection — complete separation of research data from any identifying information that could be shared with immigration authorities, use of unique study IDs, no collection of immigration status data, secure data storage, and explicit written assurances to participants. UNHCR ethical guidelines on refugee research and ICMR 2017 provisions on vulnerable populations both emphasize this."
  },
  {
    id: 46,
    question: "Research with LGBTQ+ participants requires specific ethical considerations. A study examining HIV risk in men who have sex with men (MSM) in India must navigate the intersection of research ethics and the legal/social context post Section 377 decriminalization. Which issue is MOST ethically critical in the consent process?",
    options: [
      "Whether MSM participants can provide legally valid consent as their sexual behavior, while decriminalized, remains socially stigmatized",
      "Ensuring that data collection instruments do not inadvertently 'out' participants to their households or communities through visible study materials or named outreach activities",
      "Whether Section 377 decriminalization requires all Indian IRBs to now include an LGBTQ+ representative",
      "Ensuring that MSM participants are screened for HIV before enrollment to protect other participants"
    ],
    answer: 1,
    explanation: "While homosexual conduct was decriminalized in India by the Supreme Court (Navtej Johar v. Union of India, 2018), LGBTQ+ persons continue to face significant stigma, family rejection, and social discrimination. In LGBTQ+ research, the critical consent issue is protecting participants from inadvertent disclosure of their sexual identity or behavior ('outing') — through visible recruitment materials, named study organizations, or data practices that could link identities to sexual behaviors. This requires: discrete recruitment methods, anonymous/pseudonymous data collection, no outing-risk in study materials, and explicit discussion of these risks during consent. The ICMR 2017 guidelines on confidentiality are particularly important here."
  },
  {
    id: 47,
    question: "In disability research, the principle of 'Nothing About Us Without Us' (NAUWU) has been operationalized through participatory action research (PAR) models. This principle requires that:",
    options: [
      "All researchers studying disability must themselves have a disability",
      "Persons with disabilities are included as active co-researchers in the design, conduct, analysis, and dissemination of research about them, not merely as subjects",
      "All research findings about disability must be approved by disability advocacy organizations before publication",
      "Research on physical disabilities must include a disability rights attorney on the IRB"
    ],
    answer: 1,
    explanation: "'Nothing About Us Without Us' emerged from disability rights activism and has been incorporated into research ethics frameworks including the UN CRPD (Article 4.3) and ICMR 2017. It operationalizes respect for autonomy and justice by requiring meaningful participation of disabled persons in research that affects them — from agenda-setting to methodology, data interpretation, and knowledge translation. PAR models vary in depth of involvement, but the minimum ethical standard is substantive consultative involvement. This addresses historical patterns of disability research conducted by non-disabled researchers that failed to capture the lived experience and priorities of disabled communities."
  },
  {
    id: 48,
    question: "The concept of 'intersectionality' in research ethics, introduced by Kimberlé Crenshaw, is relevant when a study participant belongs to multiple marginalized groups simultaneously. A young Dalit woman with a psychiatric disability from a rural area participates in a mental health study. The intersectionality framework predicts that her vulnerability:",
    options: [
      "Is simply the sum of her individual vulnerability factors (caste + gender + disability + rural location)",
      "Is shaped by the simultaneous and interactive effects of multiple systems of oppression that cannot be understood by analyzing each factor independently",
      "Can be managed by applying separate ethical protections for each vulnerability category",
      "Is primarily determined by her psychiatric diagnosis, which is the most clinically significant vulnerability"
    ],
    answer: 1,
    explanation: "Intersectionality theory (Crenshaw, 1989) applied to research ethics recognizes that multiple marginalized identities interact to create unique forms of vulnerability that are not reducible to their individual components. A Dalit woman with psychiatric disability in rural India faces not simply additive disadvantages but qualitatively distinct experiences of discrimination and power imbalance that compound and interact — caste-based discrimination in healthcare, gendered psychiatric stigma, disability-based paternalism, and rural resource scarcity create a unique vulnerability matrix. Single-axis ethical frameworks miss this complexity. ICMR 2017 implicitly acknowledges this in its multi-category vulnerability framework."
  },
  {
    id: 49,
    question: "Emanuel et al.'s framework (2000) for ethically sound clinical research lists eight requirements. Regarding research with vulnerable populations, the requirement of 'Fair Subject Selection' specifically prohibits:",
    options: [
      "Enrolling more women than men in studies to correct historical underrepresentation",
      "Selecting vulnerable subjects because of their easy availability, compromised position, or manipulability rather than scientific reasons directly related to the study question",
      "Excluding vulnerable populations from research to protect them from potential harms",
      "Using stratified sampling that over-represents minority groups beyond their population proportion"
    ],
    answer: 1,
    explanation: "Emanuel et al.'s Fair Subject Selection requirement (JAMA, 2000) has two dimensions: (1) scientific appropriateness — subjects must be selected because their participation is necessary to answer the scientific question, and (2) justice — vulnerable populations must not be selected merely because they are convenient, controllable, or less likely to complain. Historically, vulnerable populations (prisoners, impoverished communities, minorities) were exploited as convenient research subjects without receiving research benefits. Fair selection requires both that burdens are distributed fairly AND that benefits of research access are also equitably distributed — exclusion of vulnerable groups from potentially beneficial research also violates this principle."
  },
  {
    id: 50,
    question: "Wertheimer's 'exploitation' framework applied to research with vulnerable populations defines exploitation as occurring when one party takes unfair advantage of another's vulnerability. In a study offering free HIV antiretroviral therapy to impoverished participants who could not otherwise afford treatment, critics argue the study is exploitative even if participants benefit. The MOST sophisticated rebuttal to this exploitation charge, consistent with CIOMS 2016 guidelines, is:",
    options: [
      "The study is not exploitative because all participants receive net benefit, and mutual benefit cannot be exploitation",
      "The study avoids exploitation if the sponsor commits to post-trial access to the proven therapy for the study community, the free treatment offer is proportionate to study burdens, and the research addresses a health need relevant to the community — transforming potential exploitation into fair benefit sharing",
      "Exploitation concerns are irrelevant when participants provide valid informed consent, as consent waives exploitation claims",
      "The offer of free treatment as incentive should simply be removed and replaced with standard cash payment to eliminate the exploitation concern"
    ],
    answer: 1,
    explanation: "Wertheimer's framework distinguishes between 'mutually advantageous exploitation' (both parties benefit but the arrangement is nonetheless unfair) and fair transactions. CIOMS 2016 (Guidelines 2 and 13) addresses this by requiring that research in resource-limited settings be responsive to local health needs, that inducements not be unduly large or coercive, and critically, that post-trial access to proven interventions be assured. Simply providing benefit during the trial without post-trial access would exploit participants' desperation during the trial period. The key anti-exploitation elements are: community relevance, proportionate inducement, meaningful benefit sharing extending beyond the trial period, and equal power in negotiating research terms."
  }
]

export default questions

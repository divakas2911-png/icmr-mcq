const questions = [
  // Q1-Q10: Principle of Autonomy
  {
    id: 1,
    question: "A 68-year-old patient with mild cognitive impairment wishes to refuse a life-saving blood transfusion based on religious beliefs. The attending physician is uncertain about decision-making capacity. Which of the following standards BEST operationalizes capacity assessment in this scenario?",
    options: [
      "A. The patient must demonstrate global cognitive intactness as measured by MMSE score >24",
      "B. The patient must show ability to communicate a choice, understand relevant information, appreciate consequences, and reason about options",
      "C. The patient's decision must be judged rational and consistent with their prior expressed values",
      "D. Capacity is determined solely by a psychiatrist's formal evaluation using DSM criteria"
    ],
    answer: 1,
    explanation: "Decisional capacity (Appelbaum & Grisso framework) requires four components: (1) communication of a stable choice, (2) understanding of relevant information, (3) appreciation of how the information applies to their own situation, and (4) reasoning/manipulation of information. MMSE thresholds are insufficient alone; cognitive impairment does not equal incapacity. Psychiatrists may assist but the treating physician typically makes the determination. The standard is decision-specific, not global rationality."
  },
  {
    id: 2,
    question: "In a research trial, a subject with schizophrenia in partial remission provides consent. Six months later, during an acute psychotic episode, the subject wishes to withdraw. Which statement BEST reflects the ethical obligation?",
    options: [
      "A. Consent given during remission is fully binding as the subject had capacity at the time; withdrawal during psychosis is not valid",
      "B. The subject must be allowed to withdraw immediately regardless of capacity, as the right to withdraw from research is absolute and not capacity-dependent",
      "C. Withdrawal should be honored unless the research involves minimal risk and a legally authorized representative can override it",
      "D. The investigator should apply for a court order to continue the subject's participation given the prior valid consent"
    ],
    answer: 1,
    explanation: "Under the Belmont Report principles and ICMR guidelines, the right to withdraw from research participation is unconditional and continuous. Unlike clinical care decisions, research withdrawal does not require capacity — subjects may withdraw at any time without penalty or loss of benefits. This is a fundamental protection distinguishing research participants from patients. The prior consent does not override the current wish to withdraw, especially given the vulnerability of the population."
  },
  {
    id: 3,
    question: "A Ulysses contract (also called an advance directive for psychiatric treatment) is ethically controversial primarily because:",
    options: [
      "A. It violates beneficence by potentially allowing harmful decisions made during lucid periods to govern treatment",
      "B. It creates a paradox where autonomous prospective preferences are used to override concurrent autonomous refusals, raising questions about which temporal self has moral priority",
      "C. It is legally invalid in all jurisdictions because psychiatric advance directives cannot be enforced",
      "D. It constitutes undue inducement as patients may create them under institutional pressure"
    ],
    answer: 1,
    explanation: "The Ulysses contract dilemma arises from the question of temporal autonomy: the competent 'past self' directs treatment that the current (potentially incapacitated but expressing preferences) 'present self' refuses. Philosophers like Dresser argue that the present experiential self has moral weight even without full capacity. This is distinct from standard advance directives where the present self is clearly incapacitated. The core tension is not about legality (jurisdiction-dependent) but the philosophical conflict between precedent autonomy and contemporaneous preferences."
  },
  {
    id: 4,
    question: "A terminally ill patient previously designated their spouse as healthcare proxy. The spouse now requests aggressive life-sustaining treatment, but the patient's written advance directive clearly specifies comfort care only. The correct ethical course is:",
    options: [
      "A. Follow the spouse's wishes as the legally designated surrogate who has authority over written documents",
      "B. Convene an ethics committee to adjudicate because both documents carry equal moral weight",
      "C. Follow the advance directive, as it represents the patient's own previously expressed autonomous wishes when competent",
      "D. Follow the spouse's wishes provisionally while seeking court guidance, since surrogates can modify advance directives"
    ],
    answer: 2,
    explanation: "The advance directive represents the patient's own autonomous choice made while competent and directly applicable to the current situation. Surrogates derive their authority from the patient's autonomy — their role is to implement the patient's wishes (substituted judgment standard), not to override them with personal preferences or best-interest determinations when explicit instructions exist. Surrogates cannot legally or ethically override a clear, applicable advance directive. The hierarchy is: applicable explicit advance directive > surrogate's substituted judgment > best interest standard."
  },
  {
    id: 5,
    question: "Relational autonomy theory, as advanced by feminist bioethicists like Catriona Mackenzie and Natalie Stoljar, most significantly challenges which assumption of the classical liberal model of autonomy?",
    options: [
      "A. That informed consent requires disclosure of material risks",
      "B. That the self is fundamentally atomistic and independent, ignoring how social relationships, power structures, and cultural context constitute and constrain autonomous agency",
      "C. That minors below the age of 18 cannot provide valid consent under any circumstances",
      "D. That beneficence should take precedence over autonomy in cases involving vulnerable populations"
    ],
    answer: 1,
    explanation: "Classical liberal autonomy theory (Kantian and Millian traditions) conceptualizes the agent as a rational, self-sufficient individual whose preferences are self-generated. Relational autonomy theorists argue this ignores how identity, preferences, and decision-making capacity are shaped by relationships, social norms, gender roles, economic conditions, and power differentials. Choices made under oppressive conditions or internalized adaptive preferences may appear autonomous but are not genuinely self-determining. This has significant implications for consent in research with marginalized populations and clinical settings with power imbalances."
  },
  {
    id: 6,
    question: "A competent adult patient explicitly states they do not want to be informed about their cancer diagnosis, preferring that their family receive all information. This represents:",
    options: [
      "A. A violation of autonomy since patients cannot waive their right to information",
      "B. A valid exercise of autonomy through waiver of the right to information, which must be respected while ensuring the patient understands they are making this choice",
      "C. Therapeutic privilege invoked by the patient, which is ethically distinct from physician-invoked therapeutic privilege",
      "D. An example of paternalistic beneficence overriding autonomy"
    ],
    answer: 1,
    explanation: "Autonomy includes the right to waive information — the 'right not to know' is a recognized exercise of patient autonomy. A patient can validly authorize that information be given to family members instead. The critical requirements are: (1) the waiver itself must be informed (patient understands what they're waiving), (2) it is voluntary, and (3) the patient has the opportunity to rescind it. This is ethically distinct from therapeutic privilege (physician's decision to withhold) — here the patient exercises their autonomy to structure information flow according to their own values, often culturally grounded."
  },
  {
    id: 7,
    question: "The 'mature minor doctrine' in bioethics and law holds that:",
    options: [
      "A. All minors aged 14-17 have full legal capacity equivalent to adults for all medical decisions",
      "B. A minor who demonstrates sufficient understanding and maturity may consent to certain medical treatments independently of parental consent, with the threshold varying by jurisdiction and decision complexity",
      "C. Maturity is determined exclusively by IQ testing and neuropsychological assessment",
      "D. The doctrine applies only to reproductive health decisions and substance abuse treatment"
    ],
    answer: 1,
    explanation: "The mature minor doctrine (recognized in Canadian case law — Gillick competence in UK/Commonwealth, and in several US states) allows adolescents who demonstrate sufficient understanding of the nature and consequences of a medical decision to consent independently, even without reaching the legal age of majority. It is a functional/capacity-based standard rather than age-based. The Gillick case (1985) established that parental rights yield to the child's competence. The threshold for capacity assessment increases with the gravity and complexity of the decision — elective cosmetic surgery requires higher maturity than contraception. This is context and jurisdiction specific."
  },
  {
    id: 8,
    question: "In surrogate decision-making, the hierarchy of standards from most to least preferable is:",
    options: [
      "A. Best interest standard → Substituted judgment → Pure autonomy standard",
      "B. Substituted judgment → Best interest standard → Pure autonomy standard",
      "C. Pure autonomy standard (explicit directives) → Substituted judgment → Best interest standard",
      "D. Best interest standard → Pure autonomy standard → Substituted judgment"
    ],
    answer: 2,
    explanation: "The three-tiered hierarchy in surrogate decision-making prioritizes: (1) Pure autonomy standard — explicit instructions in advance directives or prior statements directly applicable to the current situation; (2) Substituted judgment — surrogate decides as the patient would have decided, based on known values and preferences; (3) Best interest standard — applied when patient's wishes are unknown, focusing on objective welfare. This hierarchy preserves autonomy to the maximum extent possible while providing decision-making guidance when autonomous preferences are unavailable."
  },
  {
    id: 9,
    question: "A researcher obtains consent from tribal community members for a genetic study. The community leader later demands the research be stopped, claiming it violates community norms. This scenario illustrates the tension between:",
    options: [
      "A. Individual autonomy and communal/collective autonomy, highlighting the limitations of the purely individualistic Western consent model in collective decision-making cultures",
      "B. Beneficence and non-maleficence, as the community leader is acting paternalistically",
      "C. Justice and autonomy, because community-level decisions constitute unjust discrimination against individual members",
      "D. Research integrity and participant welfare, requiring IRB review under ICMR guidelines Section 6"
    ],
    answer: 0,
    explanation: "This scenario illustrates the fundamental tension between Western individualistic autonomy (individual members consented) and communal/collective autonomy (community as a collective entity has interests and decision-making authority). Indigenous and many non-Western communities operate on models where collective consent from community leaders/councils is necessary, not merely individual consent. ICMR Bioethics Guidelines 2017 acknowledge community consultation requirements for research in tribal populations. This raises questions about whether individual consent is sufficient or whether communal sovereignty over genetic/cultural information requires additional layers of collective consent."
  },
  {
    id: 10,
    question: "The concept of 'authenticity' in autonomy theory, as distinguished from mere voluntariness, requires that:",
    options: [
      "A. A decision be made without any external influence or social pressure",
      "B. A decision reflect the person's own deep values and be consistent with their life narrative, even if that decision was influenced by others",
      "C. The decision-maker demonstrate philosophical knowledge of ethical frameworks",
      "D. Decisions be irreversible to prevent impulsive changes that might not reflect true preferences"
    ],
    answer: 1,
    explanation: "Authenticity (Harry Frankfurt, Charles Taylor) in autonomy theory distinguishes between first-order desires (immediate wants) and second-order volitions (reflective endorsement of desires). An authentic decision aligns with one's higher-order values and life narrative — it is self-authored even if influenced by others. Pure voluntariness (absence of coercion) is necessary but insufficient for authentic autonomy. For example, a Jehovah's Witness refusing blood transfusion based on deeply held religious values is authentic even though these values were shaped by their community. Adaptive preferences that arise from oppressive conditions may be voluntary but not authentic."
  },

  // Q11-Q20: Principle of Beneficence
  {
    id: 11,
    question: "Pellegrino and Thomasma's concept of 'beneficence-in-trust' most significantly differs from traditional paternalistic beneficence in that:",
    options: [
      "A. It places the physician's medical expertise as the supreme authority in determining patient good",
      "B. It grounds the physician's beneficent obligations in the patient's own conception of the good, integrated with medical expertise, rather than solely in physician judgment",
      "C. It eliminates the professional duty to act in the patient's best interest when patient preferences conflict with medical standards",
      "D. It is limited to surgical specialties where bodily invasion requires explicit trust relationships"
    ],
    answer: 1,
    explanation: "Pellegrino and Thomasma ('For the Patient's Good', 1988) proposed that beneficence must be 'in trust' — the physician-patient relationship is fundamentally fiduciary, and the patient's good encompasses four senses: biomedical good, patient's own perception of good, patient as human person, and spiritual/existential good. This model rejects both pure autonomy (patient's preferences always prevail) and pure medical paternalism (physician knows best). The 'good' to be served is negotiated within the trust relationship, not unilaterally imposed by the physician. This is a virtue-ethics inflected modification of beneficence that acknowledges patient values without abandoning professional expertise."
  },
  {
    id: 12,
    question: "The distinction between 'soft paternalism' and 'hard paternalism' in medical ethics is best described by which of the following?",
    options: [
      "A. Soft paternalism overrides only life-threatening decisions, while hard paternalism overrides all decisions",
      "B. Soft paternalism intervenes only when a decision is not substantially autonomous (e.g., impaired by incapacity, coercion, or misinformation), while hard paternalism overrides genuinely autonomous decisions for the person's benefit",
      "C. Hard paternalism is practiced by specialists, while soft paternalism is practiced by general practitioners",
      "D. Soft paternalism is justifiable under deontological ethics, while hard paternalism is only justifiable under consequentialism"
    ],
    answer: 1,
    explanation: "Joel Feinberg's distinction: Soft paternalism holds that interference is justified only to protect persons from non-autonomous choices — choices that result from ignorance, coercion, mental illness, or other autonomy-undermining factors. Once genuine autonomy is established, intervention is not warranted. Hard paternalism (more controversial) justifies overriding genuinely autonomous choices when the benefit to the person is sufficiently great. Most bioethicists accept soft paternalism (treating an unconscious patient) but reject hard paternalism as a violation of autonomy. The COVID-19 vaccine mandates straddle this distinction depending on whether herd immunity justifications are invoked."
  },
  {
    id: 13,
    question: "Therapeutic privilege — the practice of withholding information from a patient that might harm them — is currently understood in bioethics as:",
    options: [
      "A. Fully justified whenever a physician believes disclosure would cause psychological distress",
      "B. A legitimate exception to informed consent when disclosure would predictably cause direct physical harm, but severely restricted and not applicable merely to prevent emotional distress or non-compliance",
      "C. Completely abolished in contemporary bioethics and has no legitimate application",
      "D. Justified for all terminal diagnoses in patients with pre-existing psychiatric conditions"
    ],
    answer: 1,
    explanation: "Therapeutic privilege has been substantially restricted in contemporary bioethics. It was historically broad (Canterbury v. Spence, 1972 limited it) and is now considered legitimate only in narrow circumstances where disclosure would directly and foreseeably impair the patient's ability to make a rational decision or cause serious physical harm — not merely psychological distress or predicted non-compliance. The risk of 'emotional upset' or that the patient might refuse beneficial treatment does not qualify. Using it to prevent refusal of recommended treatment is now considered a violation of informed consent. Most jurisdictions and ethical guidelines (including ICMR) have severely curtailed its scope."
  },
  {
    id: 14,
    question: "In the landmark Tarasoff v. Regents of University of California (1976) case, the court's ruling created a 'duty to protect' that is primarily an application of which bioethical principle?",
    options: [
      "A. Autonomy — protecting the potential victim's right not to be harmed",
      "B. Beneficence — the therapist has a positive duty to benefit third parties when they face specific threats",
      "C. Non-maleficence — preventing identified third parties from harm takes precedence over confidentiality obligations",
      "D. Justice — equitable distribution of protective duties across the healthcare system"
    ],
    answer: 2,
    explanation: "The Tarasoff ruling established that when a therapist determines a patient poses a serious and credible threat to an identifiable person, the duty to protect the potential victim overrides therapist-patient confidentiality. This is primarily an application of non-maleficence (primum non nocere) extended to identifiable third parties — the professional must not be complicit in foreseeable harm through omission. It can also be seen as positive beneficence (duty to warn/protect), but the primary framing in bioethics literature is as a limit on confidentiality grounded in preventing serious harm. ICMR guidelines permit but do not always mandate disclosure in analogous situations."
  },
  {
    id: 15,
    question: "The concept of 'supererogation' in bioethics refers to actions that are:",
    options: [
      "A. Obligatory for licensed healthcare professionals under their professional duty of care",
      "B. Praiseworthy and above and beyond moral duty, but not morally required — their omission is not blameworthy",
      "C. Prohibited by professional codes of conduct despite patient requests",
      "D. Required only in emergency situations under the Good Samaritan doctrine"
    ],
    answer: 1,
    explanation: "Supererogatory acts (from Latin 'beyond what is asked') are morally praiseworthy acts that exceed the demands of duty — a physician who stays beyond their shift at personal sacrifice to care for a dying patient with no family. Their performance is admirable; their omission is not morally blameworthy (unlike obligatory acts). The distinction matters in bioethics because beneficence generates obligatory duties (treat patients) and potentially supererogatory ones (donate a kidney to a stranger). Some argue certain physician duties once considered supererogatory (e.g., treating HIV patients at personal risk) became obligatory through professional role acceptance. The boundary is philosophically contested."
  },
  {
    id: 16,
    question: "A physician recommends an expensive, marginally beneficial treatment without discussing a less costly but equally effective alternative, primarily because of financial incentives. This violates the principle of beneficence through:",
    options: [
      "A. Soft paternalism — overriding patient choice for their presumed benefit",
      "B. Conflict of interest compromising the fiduciary duty to act in the patient's best medical interest",
      "C. Therapeutic privilege — withholding information to prevent patient refusal",
      "D. Non-maleficence — directly causing financial harm through an act of commission"
    ],
    answer: 1,
    explanation: "Beneficence in the physician-patient relationship is fundamentally fiduciary — the physician must act primarily for the patient's good, not their own. Financial conflicts of interest that distort clinical recommendations directly undermine this fiduciary duty and the beneficence principle. This is distinct from paternalism (which involves overriding patient choice for their own good) and therapeutic privilege (which involves information withholding for psychological protection). While financial harm is also non-maleficent, the primary violation is the corruption of beneficent intent through self-interest. ICMR and MCI guidelines require disclosure of conflicts of interest."
  },
  {
    id: 17,
    question: "The principle of proportionality in medical treatment decision-making holds that:",
    options: [
      "A. Treatment benefits must always exceed harms in absolute terms",
      "B. The burdens of a treatment (including suffering, side effects, costs, and reduced quality of life) must be proportionate to the expected benefits in the context of the patient's overall condition and goals",
      "C. Expensive treatments should only be offered when they offer proportionately greater benefits than standard care",
      "D. Proportionality applies exclusively to decisions about withdrawing life support"
    ],
    answer: 1,
    explanation: "The principle of proportionality (rooted in Catholic moral theology and secular medical ethics) evaluates whether the benefits of an intervention are proportionate to its burdens, considering: medical efficacy, probability of success, quality and duration of life extension, physical and psychological burden, financial costs, and the patient's own goals and values. A treatment is 'disproportionate' (sometimes called extraordinary or futile) when its burdens clearly outweigh its benefits in the specific patient's context. This provides a principled basis for limiting treatment without abandoning patients. It is central to end-of-life care ethics and applies broadly, not only to withdrawal decisions."
  },
  {
    id: 18,
    question: "Which scenario BEST illustrates 'libertarian paternalism' (or 'nudging') as described by Thaler and Sunstein, and its ethical implications in public health?",
    options: [
      "A. Mandating that all citizens receive annual influenza vaccines with fines for non-compliance",
      "B. Designing hospital cafeterias to place healthy foods at eye level and make unhealthy options less accessible, preserving free choice while steering behavior toward healthier outcomes",
      "C. Requiring informed consent before any dietary change program",
      "D. Prohibiting the sale of tobacco to individuals under 25 based on neuroscience evidence of incomplete brain development"
    ],
    answer: 1,
    explanation: "Libertarian paternalism (Thaler & Sunstein, 'Nudge', 2008) uses insights from behavioral economics to design choice architectures that steer people toward better outcomes while preserving freedom of choice — the 'nudge.' Cafeteria food placement influences choices without mandating them, preserving final choice freedom. This is ethically controversial because: (1) it influences choices through non-rational means (exploiting cognitive biases), which some argue manipulates rather than respects autonomy; (2) proponents argue it merely counteracts other nudges (advertising) to align choices with people's own stated preferences; (3) it raises questions about who designs the architecture and in whose interests. It is distinct from mandates (hard paternalism) or mere information provision."
  },
  {
    id: 19,
    question: "The 'rule of rescue' in healthcare ethics refers to:",
    options: [
      "A. The legal obligation of physicians to treat emergency patients regardless of ability to pay",
      "B. The psychological and moral imperative to provide expensive, identifiable rescue care to individuals in immediate peril, often at the expense of cost-effective preventive care for statistical lives",
      "C. The protocol for managing mass casualty events under triage principles",
      "D. The duty to disclose information about alternative treatments that might rescue a patient from a poor prognosis"
    ],
    answer: 1,
    explanation: "The 'rule of rescue' (coined by Albert Jonsen) describes the powerful psychological and moral tendency to prioritize identifiable individuals in immediate danger over statistical lives that could be saved by allocating the same resources to preventive programs. It creates a systematic bias in healthcare resource allocation — heroic rescue of a single trapped miner generates massive spending, while equivalent resources could prevent many more deaths through vaccination or road safety. This is ethically problematic from a utilitarian/justice perspective because it irrationally privileges identified over statistical victims. It challenges utilitarian resource allocation and is a key tension in healthcare priority-setting."
  },
  {
    id: 20,
    question: "In clinical research, the therapeutic misconception (Appelbaum) most directly threatens which bioethical principle?",
    options: [
      "A. Non-maleficence, because subjects may be exposed to experimental harms",
      "B. Justice, because subjects who misunderstand are disproportionately exploited",
      "C. Autonomy, because subjects who conflate research with therapy cannot provide truly informed consent — their decision is based on false beliefs about the purpose and structure of the activity",
      "D. Beneficence, because investigators have a duty to correct misconceptions to maximize subject welfare"
    ],
    answer: 2,
    explanation: "Therapeutic misconception (Appelbaum et al., 1987) is the tendency of research subjects to believe that their participation is primarily for their personal therapeutic benefit rather than to generate generalizable knowledge, and that treatment assignments are individualized to their needs (ignoring randomization, blinding, protocol constraints). This directly undermines autonomous informed consent — a consent based on fundamental misunderstanding of the nature of the activity (research vs. care) is not truly informed. The information requirement of informed consent (understanding) is violated. While it implicates other principles, the primary concern is autonomous decision-making based on accurate understanding of what one is consenting to."
  },

  // Q21-Q30: Principle of Non-maleficence
  {
    id: 21,
    question: "The doctrine of double effect (DDE), originally formulated by Thomas Aquinas and applied in medical ethics, holds that an action with both beneficial and harmful effects is morally permissible when four conditions are met. Which of the following is NOT one of the four standard conditions?",
    options: [
      "A. The action itself must not be intrinsically wrong",
      "B. The agent must intend only the good effect, not the harmful effect",
      "C. The harmful effect must be the means by which the good effect is achieved",
      "D. There must be proportionate reason for accepting the harmful effect"
    ],
    answer: 2,
    explanation: "The four conditions of DDE are: (1) The action itself must be morally neutral or good (not intrinsically evil); (2) The agent must intend only the good effect — the harmful effect may be foreseen but must not be intended; (3) The harmful effect must NOT be the means to the good effect — it must be a side effect; (4) There must be proportionate reason — the good must outweigh the harm. Option C states the OPPOSITE of condition 3 — in DDE, the harm cannot be the mechanism through which the benefit is produced. This is the crucial distinction allowing palliative sedation (where death may be foreseen but is not the means to pain relief) but not euthanasia (where death is the means)."
  },
  {
    id: 22,
    question: "A surgeon performs a technically flawless operation using an evidence-based approach, but the patient suffers a known 3% risk complication and dies. A second surgeon performs a non-standard risky procedure against guidelines but the patient survives. From the perspective of non-maleficence, which surgeon acted unethically?",
    options: [
      "A. The first surgeon, because the patient died — outcomes are the ultimate measure of non-maleficence",
      "B. The second surgeon, because non-maleficence is assessed by the risk undertaken (process), not by outcome — the second surgeon created unjustifiable risk",
      "C. Neither, because both patients consented",
      "D. Both, because any patient death or risk exposure violates primum non nocere"
    ],
    answer: 1,
    explanation: "Non-maleficence is properly assessed prospectively based on the risks created by the decision/action, not retrospectively by outcomes (which involve luck). The first surgeon acted within the standard of care, creating only foreseeable risk proportionate to the clinical need — the bad outcome is tragic but not a breach of non-maleficence. The second surgeon's choice to deviate from evidence-based guidelines created unjustifiable additional risk — this is an ethical breach regardless of the lucky outcome. This distinction is foundational to medical malpractice law and ethics: negligence is about the process/standard of care, not outcomes. 'Moral luck' should not determine ethical assessment."
  },
  {
    id: 23,
    question: "The distinction between 'negligence' and 'maleficence' in medical ethics is most precisely captured by:",
    options: [
      "A. Negligence is civil while maleficence is criminal — the distinction is purely legal",
      "B. Negligence involves unintentional failure to meet the standard of care, while maleficence involves intentional acts that harm patients; both violate non-maleficence but through different mechanisms",
      "C. Maleficence applies only to commission (acts) while negligence applies only to omission (failures to act)",
      "D. Negligence is only applicable in emergency settings where the duty of care is uncertain"
    ],
    answer: 1,
    explanation: "Non-maleficence can be violated through: (1) Maleficence — intentional harmful acts (deliberately harming a patient); (2) Negligence — unintentional harm through failure to meet the standard of care (carelessness, inattention, incompetence). Both violate the prohibition on harming patients but are ethically and legally distinct. Maleficence involves intent and is generally more serious morally. Negligence involves culpable carelessness without intent to harm. The non-maleficence principle encompasses both: professionals must not intentionally harm AND must maintain competence to avoid negligent harm. Beauchamp and Childress treat non-maleficence as primarily covering intentional harm, with negligence standards derived from it."
  },
  {
    id: 24,
    question: "In a Phase I clinical trial, healthy volunteers are exposed to an experimental compound at potentially harmful doses to establish safety parameters. This is primarily justified under which framework?",
    options: [
      "A. The harm is negated by informed consent, which transforms risk-taking into an autonomous choice outside non-maleficence constraints",
      "B. Risk-benefit analysis under proportionality: the social value of safety data for future patients, the minimal therapeutic alternatives, and the volunteers' autonomous acceptance of risk justify carefully bounded exposure",
      "C. Non-maleficence does not apply to research settings, only to clinical care",
      "D. The potential benefits to the volunteers themselves (financial compensation) justify the risks under beneficence"
    ],
    answer: 1,
    explanation: "Phase I trials in healthy volunteers create a genuine non-maleficence challenge — subjects receive no therapeutic benefit yet bear medical risk. Ethical justification requires: (1) the social value (essential safety data) provides proportionate reason for the risk; (2) the risk is minimized through careful design and starting at sub-toxic doses; (3) subjects provide informed, voluntary consent with genuine understanding; (4) compensation is not so high as to constitute undue inducement undermining voluntariness. Informed consent does not erase non-maleficence concerns — it is a necessary but insufficient condition. Financial compensation does not constitute 'benefit' justifying risk under beneficence for healthy volunteers."
  },
  {
    id: 25,
    question: "The concept of 'risk thresholds' in research ethics (as used by Freedman, Weijer, and King) establishes that:",
    options: [
      "A. All research risks above a fixed numerical probability threshold are automatically prohibited",
      "B. The permissibility of research risks depends on whether they are component-specific (therapeutic vs. non-therapeutic) and whether non-therapeutic risks exceed the minimal risk threshold or the minor increase above minimal risk threshold",
      "C. Threshold analysis applies only to pediatric research, not adult subjects",
      "D. Risk thresholds are determined by IRBs on a case-by-case basis without any principled framework"
    ],
    answer: 1,
    explanation: "The component analysis approach (Freedman et al.) distinguishes between: (1) therapeutic components — interventions with potential direct benefit, evaluated by clinical equipoise (acceptable if risks are justified by potential benefits); (2) non-therapeutic components — no direct benefit, evaluated against risk thresholds. Under 45 CFR 46 (Common Rule), non-therapeutic research with children must present no more than minimal risk (Subpart D, 46.404), or a minor increase above minimal risk with direct benefit to understanding the subject's condition (46.406). This component-specific approach prevents the exploitation of potential therapeutic benefits to justify unrelated, burdensome non-therapeutic procedures."
  },
  {
    id: 26,
    question: "A physician treating a patient with end-stage cancer administers increasing doses of opioids for pain control, aware that respiratory depression may hasten death. Under the doctrine of double effect, this is ethically distinguished from euthanasia by:",
    options: [
      "A. The dosage level — euthanasia uses immediately lethal doses, while palliative sedation uses gradual escalation",
      "B. The physician's intent (pain relief, not death) and the relationship between means and end (death is a foreseen but unintended side effect, not the mechanism of pain relief)",
      "C. The presence of a terminal diagnosis — DDE applies only in terminal cases while euthanasia applies to non-terminal patients",
      "D. The involvement of nursing staff — euthanasia requires direct physician administration while palliative sedation can be delegated"
    ],
    answer: 1,
    explanation: "The DDE distinguishes palliative opioid titration from euthanasia on two key conditions: (1) Intent — the physician's intent is pain relief; death, if hastened, is foreseen but not intended (euthanasia intends death as the outcome); (2) Causal structure — in palliative sedation, pain relief is the direct effect and any hastening of death is a side effect; in euthanasia, death is the means to ending suffering. The empirical premise that therapeutic opioid doses actually hasten death in well-managed palliative care is questioned — evidence suggests adequate pain control may not significantly shorten life. The DDE's application requires the intended/foreseen distinction to be genuine, not a post-hoc rationalization."
  },
  {
    id: 27,
    question: "The 'nocebo effect' in medical ethics creates an ethical tension because:",
    options: [
      "A. It proves that placebo treatments are inherently deceptive and violate informed consent",
      "B. Fully disclosing all side effects of a treatment (required by informed consent) may itself cause those side effects through negative expectation, creating a conflict between respecting autonomy through disclosure and the duty to avoid iatrogenic harm",
      "C. It demonstrates that patient expectations are more important than pharmacological mechanisms, undermining evidence-based medicine",
      "D. Nocebo effects only occur in psychosomatic conditions and are not relevant to non-maleficence"
    ],
    answer: 1,
    explanation: "The nocebo effect (negative placebo — harm caused by negative expectations) creates a genuine tension between informed consent/autonomy and non-maleficence: disclosing that a treatment may cause headache, nausea, or other side effects can increase the probability and severity of those effects through nocebo mechanisms. Full, comprehensive disclosure as required for autonomous consent may itself be harmful. Solutions include: (1) disclosing that side effects may occur without over-emphasizing rates/severity; (2) 'authorized concealment' with patient permission to withhold specific side effect information; (3) framing effects positively. This is an unresolved tension in informed consent ethics that goes beyond the therapeutic privilege debate."
  },
  {
    id: 28,
    question: "In the context of genetic testing, the concept of 'the right not to know' represents a conflict with which professional obligation?",
    options: [
      "A. The duty to maintain confidentiality of genetic information under data protection regulations",
      "B. The duty to disclose medically actionable findings and warn at-risk family members, creating tension between respecting the patient's autonomous choice to remain ignorant and non-maleficence obligations toward the patient and relatives",
      "C. The duty to report genetic findings to public health authorities for population surveillance",
      "D. The obligation to provide genetic counseling services under the principle of justice"
    ],
    answer: 1,
    explanation: "The 'right not to know' in genetic testing (recognized by UNESCO, Council of Europe) allows individuals to refuse knowledge of genetic predispositions. This creates multiple tensions: (1) With the professional duty to disclose medically actionable findings (BRCA mutations requiring surveillance) — non-disclosure may permit preventable harm; (2) With the 'duty to warn' relatives who may carry the same variant and benefit from knowing — the patient's right not to know conflicts with relatives' right to potentially life-saving information; (3) With genetic counselors' therapeutic relationship obligations. UNESCO's Universal Declaration on the Human Genome (1997) explicitly recognizes this right, balanced against the duty of care. Resolution requires contextual judgment about actionability and severity."
  },
  {
    id: 29,
    question: "The 'therapeutic window' concept in pharmacology has a direct ethical analog in clinical decision-making. The ethical analog most directly embodies the principle of:",
    options: [
      "A. Autonomy — patients define the acceptable range of risk for themselves",
      "B. Non-maleficence in tension with beneficence — the zone where benefits exceed harms must be identified, and operating outside it on either side (underdosing or overdosing) constitutes an ethical failure",
      "C. Justice — the therapeutic window must be applied equitably across all patient populations",
      "D. Veracity — prescribers must accurately communicate the narrow margin between effective and toxic doses"
    ],
    answer: 1,
    explanation: "The therapeutic window (the range of doses producing therapeutic effect without unacceptable toxicity) has a direct ethical analog: every intervention has a range where benefits outweigh harms. Operating below this range (under-treating) violates beneficence through failure to help. Operating above it (over-treating) violates non-maleficence through excessive harm. This 'ethical window' requires constant calibration based on individual patient factors, goals, and values. It underpins concepts like appropriate use criteria, clinical guidelines, and the ethics of aggressive vs. palliative care. The challenge is that unlike pharmacology, the ethical 'window' is partially defined by patient values, not purely biological parameters."
  },
  {
    id: 30,
    question: "Research involving deception of subjects (e.g., Milgram-style experiments) requires ethical justification that MUST include which of the following, according to APA guidelines and standard IRB requirements?",
    options: [
      "A. Absolute necessity of deception for scientific validity, impossibility of alternative non-deceptive designs, minimal harm, and complete debriefing as soon as feasible",
      "B. Prior approval from a national ethics committee, financial compensation to all subjects, and publication of full methodology immediately",
      "C. Limitation to educational institutions and prohibition in commercial research settings",
      "D. Restriction to healthy adult populations with no history of psychiatric illness"
    ],
    answer: 0,
    explanation: "Ethical justification for deceptive research (APA Ethics Code 8.07, Common Rule, ICMR guidelines) requires: (1) Scientific necessity — deception is essential for valid results (disclosure would invalidate the study); (2) No reasonable non-deceptive alternative; (3) The deception does not involve significant physical harm or extreme distress; (4) Participants are debriefed as early as possible — informed of the deception, its rationale, and given opportunity to withdraw their data; (5) Study value must be substantial enough to justify the ethical cost of deception. The Milgram experiments remain paradigmatic examples — methodologically valuable but ethically problematic due to significant psychological distress caused despite debriefing. ICMR 2017 guidelines permit limited deception with similar conditions."
  },

  // Q31-Q40: Principle of Justice
  {
    id: 31,
    question: "John Rawls' 'difference principle' in 'A Theory of Justice' (1971), applied to healthcare resource allocation, would most strongly support:",
    options: [
      "A. Allocating resources equally per capita to all citizens regardless of medical need",
      "B. Maximizing total population health outcomes (QALYs) even if this disadvantages the worst-off patients",
      "C. Allocating additional resources to the sickest and most disadvantaged members of society, permitting inequalities only when they benefit those at the bottom of the distribution",
      "D. Allowing market forces to allocate healthcare resources, intervening only to prevent monopolistic practices"
    ],
    answer: 2,
    explanation: "Rawls' difference principle holds that social and economic inequalities are just only if they benefit the least advantaged members of society. Applied to healthcare: unequal distribution of medical resources is permissible only when the inequality itself benefits the worst-off (e.g., incentivizing specialists to work in underserved areas). The 'veil of ignorance' thought experiment suggests rational agents uncertain of their social position would choose arrangements protecting them if they end up disadvantaged. This contrasts with utilitarianism (maximize aggregate welfare, potentially sacrificing the worst-off) and libertarianism (market allocation, minimal redistribution). Rawlsian justice supports priority for the sickest and most socially disadvantaged."
  },
  {
    id: 32,
    question: "The QALY (Quality-Adjusted Life Year) as a health economic metric has been criticized in disability rights bioethics for perpetuating injustice primarily because:",
    options: [
      "A. QALYs are mathematically complex and difficult for clinicians to calculate correctly",
      "B. QALY weights for health states are often derived from population preferences that systematically undervalue life with disability, resulting in lower resource priority for disabled individuals — a form of structural discrimination",
      "C. QALYs only apply to therapeutic interventions and cannot be used to evaluate preventive programs",
      "D. The QALY metric was developed without adequate representation from developing countries and reflects Western healthcare values"
    ],
    answer: 1,
    explanation: "The 'QALY problem' in disability rights: QALY weights (utility values) for health states like paraplegia, blindness, or chronic illness are typically derived from population surveys of non-disabled people imagining having these conditions. These imagined preferences consistently undervalue life with disability compared to disabled people's actual reported quality of life (the 'disability paradox'). When cost-per-QALY thresholds (like NICE's £20,000-30,000/QALY) are applied, interventions for disabled people appear less cost-effective, systematically disadvantaging them in resource allocation. This is structural ableism embedded in seemingly neutral methodology. The Americans with Disabilities Act prohibits certain QALY-based allocation decisions."
  },
  {
    id: 33,
    question: "The UNOS organ allocation system's tension between 'utility' and 'equity' principles is best illustrated by which scenario?",
    options: [
      "A. Allocating kidneys by blood type compatibility versus HLA matching",
      "B. The debate between sickest-first allocation (prioritizing those with greatest need — equity) versus best-outcome allocation (prioritizing those most likely to benefit most — utility), recognizing both have legitimate but competing justice claims",
      "C. Geographic disparities in transplant center availability creating unequal access",
      "D. The policy of requiring patients to demonstrate medication adherence before listing, which combines medical suitability with behavioral criteria"
    ],
    answer: 1,
    explanation: "Organ allocation policy embodies the fundamental tension between two valid justice principles: (1) Equity/need-based justice (egalitarian): prioritize those most in need — the sickest patients, those who will die soonest without a transplant; (2) Utility-based justice: prioritize those who will benefit most — maximize post-transplant survival and quality-adjusted life years, thereby maximizing social value of scarce organs. The sickest patients may have poorer transplant outcomes, making these criteria trade off directly. Current UNOS policy for hearts (UNOS allocation tiers) attempts to balance both. This mirrors broader healthcare rationing debates about whether to maximize aggregate benefit or ensure those worst-off receive priority."
  },
  {
    id: 34,
    question: "Nozick's libertarian entitlement theory of justice, applied to healthcare, would most consistently endorse:",
    options: [
      "A. A single-payer universal healthcare system funded by progressive taxation",
      "B. Healthcare as a commodity to be distributed through market mechanisms, with minimal state intervention beyond enforcement of voluntary contracts and prohibition of coercion",
      "C. A two-tier system with publicly funded basic care and a private market for enhanced services",
      "D. Priority-setting based on social utility with resource allocation to maximize population productivity"
    ],
    answer: 1,
    explanation: "Nozick's 'Anarchy, State, and Utopia' (1974) holds that justice requires that holdings be acquired and transferred through just processes (just acquisition, just transfer) — the state has no authority to redistribute resources through taxation for welfare programs, including healthcare, as this constitutes forced labor. Applied to healthcare: individuals are entitled to what they can acquire through voluntary exchange; no person has a claim on another's resources for healthcare. Market allocation reflects just outcomes if derived from just voluntary transactions. This contrasts sharply with Rawlsian (redistribution to benefit worst-off), utilitarian (maximize aggregate health), and egalitarian (equal access) frameworks. Norman Daniels critiqued this position for ignoring the natural lottery of health."
  },
  {
    id: 35,
    question: "In mass casualty triage, the 'expectant' (black tag) category — designating patients unlikely to survive even with maximal intervention — is ethically justified primarily by:",
    options: [
      "A. The principle of autonomy — patients in extremis cannot consent to treatment",
      "B. Utilitarian resource allocation: in conditions of scarcity, maximizing the number of lives saved requires that resources not be spent on those with extremely low survival probability, allowing more salvageable patients to benefit",
      "C. Non-maleficence — treating expectant patients with aggressive interventions would cause additional suffering without benefit",
      "D. The legal principle of triage immunity that protects physicians from liability for withholding care in disaster settings"
    ],
    answer: 1,
    explanation: "Mass casualty triage inverts normal medical priorities: in everyday care, the sickest receive most resources (need-based); in disaster triage, resource scarcity requires utilitarian calculation — maximize the number of lives saved with available resources. Patients in the 'expectant' category are not abandoned but receive comfort care while resources are directed to salvageable patients. This is justified by: (1) the utilitarian principle of maximizing lives saved; (2) the constraint of resource scarcity genuinely preventing effective treatment of all; (3) the recognition that attempting to save expectant patients consumes resources from others who could definitely be saved. This represents a legitimate temporary ethical framework specific to disaster conditions, not applicable to normal care."
  },
  {
    id: 36,
    question: "Norman Daniels' extension of Rawlsian theory in 'Just Health' (2008) grounds a right to healthcare in:",
    options: [
      "A. The positive duty of beneficence that all citizens owe to each other through social contract",
      "B. Healthcare's role in protecting 'normal species functioning,' which in turn preserves the fair equality of opportunity that Rawlsian justice requires — illness and disability disrupt the 'natural baseline' of opportunity",
      "C. The constitutional rights guaranteed under welfare state provisions of liberal democracies",
      "D. The utilitarian argument that healthy populations are more economically productive, justifying healthcare as investment"
    ],
    answer: 1,
    explanation: "Daniels extended Rawls by arguing: (1) Healthcare's primary function is maintaining normal species functioning (the biomedical baseline); (2) Normal species functioning is a prerequisite for fair equality of opportunity — Rawls' principle that everyone should have equal opportunity to compete for social positions; (3) Therefore, justice requires ensuring access to healthcare that maintains this baseline. This grounds a right to healthcare within liberal political theory without appealing to positive rights or welfare state obligations. The theory specifies what healthcare is morally relevant (restoring/maintaining normal functioning) and what healthcare is a luxury (enhancement beyond normal functioning). This distinction has implications for coverage policy."
  },
  {
    id: 37,
    question: "The concept of 'social determinants of health' and its ethical implications most directly challenge which view of justice in healthcare?",
    options: [
      "A. Egalitarian justice — that all health outcomes should be equal regardless of effort",
      "B. Libertarian responsibility-based justice — that individuals are responsible for their health choices — by demonstrating that health 'choices' are severely constrained by socioeconomic conditions, education, housing, and environment",
      "C. Utilitarian justice — that resources should be allocated to maximize aggregate health",
      "D. Commutarian justice — that community values should determine healthcare priorities"
    ],
    answer: 1,
    explanation: "Responsibility-based justice theories (luck egalitarianism, Daniels' prudential lifespan approach) hold that individuals bear responsibility for health consequences of their free choices, and healthcare resources need not compensate for self-inflicted conditions. Social determinants of health evidence (Marmot et al., Whitehall studies) demonstrates that health behaviors (smoking, diet, exercise, substance use) are strongly correlated with socioeconomic status, education, neighborhood, and structural racism — conditions not of individual choosing. This undermines the premise of genuine free choice required by responsibility-based theories. If choices are constrained by structural factors, attributing full individual responsibility is unjust. This evidence supports structural rather than individual interventions and challenges resource denial based on 'lifestyle choices.'"
  },
  {
    id: 38,
    question: "The DALY (Disability-Adjusted Life Year) metric, unlike the QALY, is primarily used to:",
    options: [
      "A. Evaluate the cost-effectiveness of individual clinical interventions for coverage decisions",
      "B. Measure the burden of disease at population and global health levels by combining years of life lost (YLL) to premature death and years lived with disability (YLD), enabling cross-disease comparisons for priority-setting",
      "C. Calculate insurance premiums based on individual disease risk profiles",
      "D. Set clinical thresholds for surgical intervention based on functional impairment levels"
    ],
    answer: 1,
    explanation: "The DALY (developed by WHO/World Bank for the Global Burden of Disease study) measures disease burden by combining YLL (years of life lost to premature mortality) and YLD (years lived with disability, weighted by disability severity). Unlike QALYs (used in cost-effectiveness analysis of specific interventions), DALYs measure total disease burden for priority-setting in global health, resource allocation across disease categories, and policy evaluation. DALYs enable comparison of communicable vs. non-communicable diseases, mental health vs. infectious disease burden. They face similar critiques as QALYs regarding disability weighting and also incorporate social value of a life year (age-weighting, originally) which has been ethically contested. ICMR and WHO use DALYs for national health priority-setting."
  },
  {
    id: 39,
    question: "The 'fair innings' argument in healthcare rationing, proposed by Alan Williams, holds that:",
    options: [
      "A. Every person deserves equal access to healthcare regardless of age or prognosis",
      "B. Resources should be preferentially allocated to younger patients because the elderly have already had a 'fair innings' (a full life opportunity), making it less unjust to prioritize life-saving interventions for those who have not yet lived a complete life",
      "C. Age should never be a criterion in healthcare rationing as it constitutes illegal age discrimination",
      "D. Elderly patients should receive more resources because they have paid more into the healthcare system over their lifetime"
    ],
    answer: 1,
    explanation: "Alan Williams' 'fair innings' argument: everyone is entitled to a complete life span (roughly the current average life expectancy — a 'fair innings'). Those who die young are owed more than those who have already lived a full life. When resources are scarce, it is less unjust to allocate them to those who have not yet had their fair innings (younger patients) than to those who have lived full lives. This argument is distinct from QALY-based age discrimination — it is based on lifetime health opportunity equity, not productivity. Critics argue it devalues elderly lives and ignores individual contributions; supporters argue it provides a principled, non-discriminatory basis for age-weighting in allocation. The COVID-19 triage guidelines raised fair innings debates prominently."
  },
  {
    id: 40,
    question: "The 'identifiable victim effect' (Slovic) and the 'rule of rescue' together create what systematic bias in healthcare priority-setting that justice-based frameworks must address?",
    options: [
      "A. Over-investment in administrative healthcare infrastructure at the expense of direct patient care",
      "B. Systematic over-allocation of resources to visible, identified, dramatic rescue cases at the expense of cost-effective preventive interventions that would save more statistical lives — a failure of impartial justice that privileges emotionally compelling over numerically superior outcomes",
      "C. Racial and ethnic bias in organ allocation and clinical decision-making",
      "D. Geographic maldistribution of specialist services toward urban centers"
    ],
    answer: 1,
    explanation: "The identifiable victim effect (our greater psychological and moral response to identified individuals vs. statistical lives) combined with the rule of rescue creates a systematic bias: society spends vastly more to save identified patients (a specific child who needs an expensive transplant, a trapped miner) than to fund interventions that would statistically save more lives at lower cost (vaccination, road safety, smoking cessation). This represents a failure of impartial justice (treating similar interests similarly regardless of identifiability). Healthcare resource allocation ethics must confront this bias by using systematic priority-setting methods (HTA, cost-effectiveness analysis) that evaluate statistical lives fairly, while acknowledging the legitimate moral weight of individual claims."
  },

  // Q41-Q50: Integration & Conflicts Between Principles
  {
    id: 41,
    question: "The Beauchamp and Childress 'principlism' framework in 'Principles of Biomedical Ethics' (now in its 8th edition) uses 'prima facie' duties rather than absolute rules. The moral significance of 'prima facie' obligations is that:",
    options: [
      "A. Prima facie duties are legally binding in all jurisdictions where bioethics principles have been codified",
      "B. Prima facie duties are binding unless overridden by a stronger competing obligation in a specific situation — all four principles have equal initial weight, and conflicts require contextual specification, balancing, and justification for deviation",
      "C. Prima facie duties apply only in clinical settings and do not govern research ethics",
      "D. The term indicates that these duties are preliminary guidelines to be replaced by more specific rules once medical consensus develops"
    ],
    answer: 1,
    explanation: "W.D. Ross's prima facie duties (which Beauchamp and Childress adopt) are genuine moral obligations that hold unless overridden by stronger competing obligations in specific circumstances. They are not mere guidelines or preliminary rules — they create real moral constraints. When principles conflict (e.g., respecting autonomy conflicts with preventing serious harm), neither is automatically overridden; the stronger obligation in the specific context prevails, but the overridden obligation leaves a 'moral residue' (regret, obligation to mitigate the harm of overriding it). This requires specification (narrowing scope) and balancing (weighing competing principles). The framework is criticized for providing insufficient action-guidance in hard cases but praised for accurately representing moral complexity."
  },
  {
    id: 42,
    question: "In the landmark case of Schloendorff v. Society of New York Hospital (1914), Justice Cardozo's statement that 'every human being of adult years and sound mind has a right to determine what shall be done with his own body' established the legal foundation for which bioethical principle?",
    options: [
      "A. Beneficence — physicians have a positive duty to recommend beneficial treatments",
      "B. Patient autonomy and its legal instantiation in the doctrine of informed consent, establishing that unauthorized medical treatment constitutes battery",
      "C. Non-maleficence — physicians must not perform unnecessary procedures",
      "D. Justice — all patients have equal rights regardless of social status"
    ],
    answer: 1,
    explanation: "Schloendorff v. Society of New York Hospital (1914) is the foundational legal case for patient autonomy in Anglo-American law. Mary Schloendorff consented to examination but not surgery; the surgeon removed a fibroid tumor during examination. Justice Cardozo's opinion established that performing surgery without consent is battery — a civil wrong — regardless of the physician's benevolent intent. This legal case operationalized patient autonomy as a right to bodily self-determination, not merely a professional courtesy. Later cases (Canterbury v. Spence, 1972; Cobbs v. Grant, 1972) extended this to informed consent standards, establishing the patient's right to adequate information to make autonomous decisions."
  },
  {
    id: 43,
    question: "When autonomy conflicts with public health imperatives (e.g., mandatory vaccination, quarantine, contact tracing), the ethical framework most consistent with the WHO's approach to pandemic ethics holds that restrictions on autonomy are justifiable when they satisfy which conditions?",
    options: [
      "A. Any restriction is permissible during declared public health emergencies as state authority supersedes individual rights",
      "B. Restrictions must be necessary (no less restrictive alternative achieves the goal), effective (actually achieves the public health objective), proportionate (not excessive relative to the benefit), non-discriminatory, with transparent justification, and implemented with the least infringement possible",
      "C. Only economic impacts justify restrictions on autonomy; health-based restrictions require unanimous scientific consensus",
      "D. Restrictions on individual autonomy are never permissible in liberal democracies and must rely exclusively on voluntary compliance"
    ],
    answer: 1,
    explanation: "The Siracusa Principles and subsequent WHO pandemic ethics frameworks (Upshur, Singer, Gostin) establish a 'stewardship model' for public health ethics: the state may restrict individual autonomy for public health when restrictions are: (1) Necessary — the least restrictive means to achieve the goal; (2) Effective — evidence-based, actually achieving public health benefit; (3) Proportionate — benefits to public health are commensurate with burdens on individual liberty; (4) Non-discriminatory — not targeting vulnerable groups unfairly; (5) Transparent — with public justification; (6) Temporary — time-limited to the duration of need. This contrasts with pure autonomy liberalism (no interference) and public health authoritarianism (any restriction permissible for population benefit)."
  },
  {
    id: 44,
    question: "The deontological ethical framework (Kantian ethics) most significantly differs from consequentialism in its approach to bioethical dilemmas by holding that:",
    options: [
      "A. Kantian ethics focuses exclusively on the character of the moral agent, while consequentialism focuses on actions",
      "B. Kant's categorical imperative requires that actions be governed by universalizable maxims that respect persons as ends in themselves — the rightness of an action is determined by its conformity to duty, not by its outcomes or consequences",
      "C. Kantian ethics permits lying to patients when the consequences of truth-telling would be harmful, while consequentialism would prohibit all deception",
      "D. Deontological frameworks are more flexible than consequentialism because they can accommodate multiple competing duties"
    ],
    answer: 1,
    explanation: "Kantian deontology holds that the moral worth of an action lies in its conformity to universal moral law (categorical imperative), not in its consequences. The Formula of Humanity demands treating persons always as ends in themselves, never merely as means — this is the foundational prohibition against using patients as research subjects without consent (instrumentalization), against euthanizing patients without consent for resource reasons, and the foundation for autonomy respect. Consequences are morally irrelevant to the rightness of an action (though not irrelevant to prudential reasoning). This contrasts with consequentialism (act/rule) where the right action maximizes good outcomes, and with virtue ethics (Aristotelian) where character is primary."
  },
  {
    id: 45,
    question: "A clinical researcher proposes a randomized controlled trial comparing standard of care versus no treatment in a resource-limited setting where standard of care is not available locally. The Declaration of Helsinki's requirement regarding this scenario is:",
    options: [
      "A. Such trials are always prohibited as they constitute exploitation of resource-limited populations",
      "B. Control groups should receive the best current proven intervention worldwide (global standard), not merely the local standard of care — placebo controls are acceptable only when no proven intervention exists or when compelling methodological reasons necessitate it and patients will not suffer serious harm",
      "C. Local standard of care is always acceptable as the control condition since researchers are obligated only to match local practice",
      "D. The trial is acceptable if it addresses a health need specifically affecting the local population and benefits will flow back to the community"
    ],
    answer: 1,
    explanation: "Declaration of Helsinki (2013), Paragraph 33: 'The benefits, risks, burdens and effectiveness of a new intervention must be tested against those of the best proven intervention(s)... Placebo, or no treatment, may be used only when...no proven intervention exists, or when compelling methodological reasons for placebo use and patients who receive placebo will not be subject to serious or irreversible harm.' The 'local standard of care' debate (the '10/90 gap') arose from trials of perinatal HIV transmission: researchers used placebo controls in Africa where zidovudine was standard care in the US. Critics (Lurie & Wolfe) argued this exploited resource-limited populations. The Helsinki revision rejected local standard of care as justification for placebo controls when effective treatment exists globally."
  },
  {
    id: 46,
    question: "Virtue ethics, as applied to clinical medicine by Edmund Pellegrino, holds that the foundational virtues of the good physician are derived primarily from:",
    options: [
      "A. The four cardinal virtues of ancient Greece (prudence, justice, fortitude, temperance) applied to professional contexts",
      "B. The internal goals (telos) of medicine — healing and care — which generate specific virtues (fidelity to trust, benevolence, prudence, justice, fortitude, temperance, integrity) as the character traits required to practice medicine well",
      "C. Professional codes and institutional regulations that define acceptable physician behavior",
      "D. The virtues recognized by the patient community as desirable in healers across different cultural contexts"
    ],
    answer: 1,
    explanation: "Pellegrino's virtue ethics approach to medicine (with Thomasma, 'The Virtues in Medical Practice', 1993) grounds medical virtues in the telos (internal goal) of medicine — healing the sick and caring for those who cannot be healed. The virtues are those character traits required to pursue this telos faithfully: fidelity to trust (keeping the fiduciary relationship), benevolence (genuine concern for patient good), intellectual honesty, prudence (phronesis — practical wisdom in applying general principles to particular cases), justice, compassion, and self-effacement (subordinating self-interest to patient need). This is teleological virtue ethics that grounds normative constraints in the internal goods of the practice, not externally imposed rules. It responds to the excessive rule-focus of principlism."
  },
  {
    id: 47,
    question: "The concept of 'moral distress' in healthcare professionals (coined by Andrew Jameton) refers to:",
    options: [
      "A. Emotional burnout resulting from excessive workload and inadequate staffing",
      "B. The suffering that arises when one knows the ethically correct action but is prevented from taking it by institutional constraints, authority structures, or lack of power — the moral residue of being forced to act against one's ethical judgment",
      "C. Disagreement between healthcare team members about the appropriate treatment plan",
      "D. The psychological difficulty of communicating bad news to patients and families"
    ],
    answer: 1,
    explanation: "Moral distress (Jameton, 1984, nursing ethics) is distinguished from ethical dilemmas (where the right course is unclear) by the fact that the agent perceives a clear correct action but is prevented from acting on it by institutional, hierarchical, or resource constraints. Examples: a nurse who knows a patient needs more pain medication but cannot increase it without physician order; a physician who believes withdrawing treatment is appropriate but family refuses. The 'crescendo effect' of cumulative moral distress leads to moral residue (accumulated psychological harm), compassion fatigue, and moral injury. It is prevalent in ICU settings and during resource shortages. Institutional ethics support (ethics committees, consultation) is a key mitigation strategy."
  },
  {
    id: 48,
    question: "In the Tuskegee Syphilis Study (1932-1972), the most fundamental ethical violation was NOT the lack of informed consent per se, but rather:",
    options: [
      "A. The use of African American subjects rather than a representative sample of the US population",
      "B. The active withholding and blocking of effective treatment (penicillin) after it became available in 1947, transforming a natural history study into deliberate maintenance of disease — a profound violation of beneficence, non-maleficence, and justice simultaneously",
      "C. The failure to publish the study results in a timely manner, denying the scientific community knowledge that could benefit other syphilis patients",
      "D. The use of financial incentives (burial insurance) that constituted undue inducement"
    ],
    answer: 1,
    explanation: "While the Tuskegee study had multiple ethical violations from the start (lack of informed consent, deception, exploitation of a vulnerable minority population), the gravest violation was the active decision in 1947 to withhold penicillin — by then the proven treatment for syphilis — and to prevent subjects from accessing treatment elsewhere (WWII draft board cooperation, blocking access to mobile treatment units). This transformed the study from non-consensual research into deliberate, ongoing harm to study participants. It violated: non-maleficence (causing harm by omitting effective treatment), beneficence (duty to treat), justice (exploitation of a historically oppressed group), and respect for persons. The study directly led to the National Research Act (1974) and the Belmont Report (1979)."
  },
  {
    id: 49,
    question: "Ezekiel Emanuel's critique of the autonomy paradigm in bioethics (in 'The Ends of Human Life', 1991) argues that the excessive focus on individual autonomy has led to:",
    options: [
      "A. Insufficient patient participation in medical decision-making and over-reliance on physician paternalism",
      "B. A 'proceduralist' bioethics that focuses on proper process (informed consent, advance directives) while neglecting substantive questions about what constitutes genuine human flourishing and the good life, which requires communal deliberation about the ends of medicine",
      "C. Overemphasis on expensive high-technology interventions at the expense of basic primary care",
      "D. Erosion of the physician-patient relationship by transforming medicine into a consumer service"
    ],
    answer: 1,
    explanation: "Emanuel critiques autonomy-dominated bioethics for producing a 'proceduralist' approach: ensuring informed consent processes are followed and advance directives are honored, while avoiding substantive engagement with what kinds of healthcare are genuinely valuable, what constitutes a good death, and how society should collectively decide on healthcare priorities. He argues that purely proceduralist bioethics cannot answer questions like: what treatments are truly beneficial, when is aggressive intervention appropriate, what is the just allocation of resources. These require communal deliberation informed by substantive conceptions of human flourishing — requiring a 'liberal communitarian' framework that goes beyond protecting individual choice. This critique influenced participatory approaches to bioethics."
  },
  {
    id: 50,
    question: "A public health program mandates disclosure of HIV status by a positive patient to their sexual partners if the patient refuses to do so themselves. This policy creates a conflict that is BEST resolved by which ethical framework?",
    options: [
      "A. Strictly enforcing confidentiality in all cases because disclosure by a third party constitutes an absolute violation of autonomy and non-maleficence toward the patient",
      "B. Applying a proportionality analysis that balances the patient's right to confidentiality against the partner's right to avoid serious harm (HIV transmission), requiring that: disclosure is a last resort after counseling fails, harm is serious and imminent, the benefit to the partner clearly outweighs the cost to the patient's confidentiality interests, and disclosure is limited to the minimum necessary",
      "C. Always requiring mandatory partner notification as the principle of justice demands equal protection from harm regardless of patient privacy interests",
      "D. Deferring entirely to the patient's preference as the principle of autonomy is lexically prior to all other principles in matters of personal health information"
    ],
    answer: 1,
    explanation: "Partner notification for HIV (and other serious STIs) represents a paradigmatic principlism conflict: patient confidentiality/autonomy (patient's right to control sensitive health information) vs. non-maleficence toward identifiable third parties (protecting partners from serious, preventable harm). The ethical consensus (Beauchamp & Childress, UNAIDS, CDC) requires a proportionality-based framework: (1) Confidentiality should be maintained as the default; (2) Disclosure requires serious and credible threat (HIV transmission is serious and preventable); (3) Voluntary disclosure has been attempted and failed; (4) The partner is identifiable; (5) Disclosure is limited to information necessary to protect the partner. This is the 'justified override' of confidentiality, not its absolute abrogation, and mirrors the Tarasoff duty-to-warn framework applied to infectious disease contexts."
  }
]

export default questions

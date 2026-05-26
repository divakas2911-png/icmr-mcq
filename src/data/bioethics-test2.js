const questions = [
  // ===== ELEMENTS OF INFORMED CONSENT (Q1–Q10) =====
  {
    id: 1,
    question: "A researcher conducting a Phase II cancer trial provides participants with a 40-page consent form written at a postgraduate reading level. The participants sign without fully understanding the risks. Which element of informed consent is MOST critically violated?",
    options: ["Disclosure", "Comprehension", "Voluntariness", "Authorization"],
    answer: 1,
    explanation: "Comprehension requires that the participant genuinely understands the information disclosed. Providing technically complete but incomprehensible information satisfies disclosure on paper but fails comprehension. ICMR 2017 guidelines mandate that consent forms be in the participant's own language and at an appropriate literacy level. Authorization (signing) without comprehension renders consent ethically invalid."
  },
  {
    id: 2,
    question: "Under the 'reasonable person standard' for disclosure in informed consent, what must a researcher disclose?",
    options: ["Only risks that a competent physician would consider material", "All information that a reasonable person in the participant's position would want to know", "Only information required by the study protocol approved by the ethics committee", "All known risks regardless of probability or severity"],
    answer: 1,
    explanation: "The reasonable person standard (also called the 'objective patient standard') requires disclosure of all information that a hypothetical reasonable person in the participant's position would want to know to make an informed decision. This contrasts with the professional practice standard, which only requires disclosure of what a reasonable physician would typically disclose. The reasonable person standard is broader and more participant-centered."
  },
  {
    id: 3,
    question: "A participant in a clinical trial believes that the experimental drug they are receiving is specifically tailored to treat their individual cancer, whereas the actual purpose is to test pharmacokinetics in a homogeneous population. This is BEST described as:",
    options: ["Undue inducement", "Therapeutic misconception", "Research fraud", "Inadequate disclosure"],
    answer: 1,
    explanation: "Therapeutic misconception (coined by Appelbaum et al., 1982) occurs when research participants fail to appreciate the distinction between the goals of clinical research and those of clinical treatment, mistakenly believing the research is designed primarily for their personal therapeutic benefit. It is a specific failure of comprehension that persists even after adequate disclosure, distinct from mere misunderstanding of disclosed information."
  },
  {
    id: 4,
    question: "A 65-year-old patient with mild cognitive impairment agrees to participate in a drug trial. She correctly recalls the study purpose and two major risks when tested immediately after consent discussion. However, 48 hours later she cannot recall any information. Which element of valid consent is MOST at risk?",
    options: ["Disclosure", "Voluntariness", "Competence/Decision-making capacity", "Authorization"],
    answer: 2,
    explanation: "Competence (or decision-making capacity) requires the ability to understand and retain information, appreciate consequences, reason about options, and communicate a choice. Fluctuating recall raises concerns about decision-making capacity. While disclosure occurred and authorization was given, capacity assessment must confirm the participant can retain and use information over a clinically relevant time period. Longitudinal capacity assessment or a legally authorized representative may be needed."
  },
  {
    id: 5,
    question: "A principal investigator tells a potential participant: 'Most people in your situation enroll in this trial, and your oncologist thinks it's your best option.' The participant then enrolls. Which threat to informed consent does this PRIMARILY illustrate?",
    options: ["Inadequate disclosure", "Therapeutic misconception", "Compromised voluntariness due to undue influence", "Lack of competence"],
    answer: 2,
    explanation: "Voluntariness requires that consent be free from coercion (explicit threats) and undue influence (improper persuasion that overrides rational decision-making). Invoking social norms ('most people enroll') and deferring to physician authority creates psychological pressure that undermines the participant's autonomous choice. This is undue influence, not coercion (which requires a threat). ICMR guidelines emphasize that consent must be free from any inducement or pressure."
  },
  {
    id: 6,
    question: "In the professional practice standard for informed consent disclosure, disclosure is judged adequate if it meets which criterion?",
    options: ["It includes all information a reasonable patient would want", "It matches what a competent professional in the same field would customarily disclose", "It is approved in writing by the institutional ethics committee", "It includes all risks with a probability greater than 1%"],
    answer: 1,
    explanation: "The professional practice standard (or 'reasonable physician standard') holds that adequate disclosure is defined by what a reasonable, competent clinician or researcher in the same specialty would customarily disclose. This standard is criticized for being paternalistic and self-referential because it allows the profession to define its own disclosure norms, potentially excluding information patients care about. The reasonable person standard is generally preferred in contemporary bioethics."
  },
  {
    id: 7,
    question: "Which of the following scenarios BEST represents a violation of the 'authorization' element of informed consent as distinct from other elements?",
    options: ["A participant fully understands all risks but signs a consent form that does not specify the procedures they agree to", "A participant is not told about a major side effect of the experimental drug", "A participant is pressured by family to enroll despite personal reluctance", "A participant with untreated schizophrenia signs consent during an acute episode"],
    answer: 0,
    explanation: "Authorization is the act of granting permission for specific procedures and is distinct from mere agreement or signature. A participant who fully understands but signs a form that fails to specify the procedures being authorized has not validly authorized those procedures. Faden and Beauchamp's analysis distinguishes between understanding (comprehension), freedom (voluntariness), and intentional authorization. Vague or ambiguous consent documents undermine valid authorization even when other elements are present."
  },
  {
    id: 8,
    question: "A researcher withholds information about a rare but severe adverse event (incidence 0.1%) from a potential participant, reasoning that disclosure would cause undue anxiety and deter enrollment. Under which standard would this withholding MOST likely be considered ethically justifiable?",
    options: ["Reasonable person standard", "Objective patient standard", "Professional practice standard", "It is not justifiable under any standard"],
    answer: 2,
    explanation: "The professional practice standard allows non-disclosure of information that a reasonable clinician would typically withhold, which has historically included information deemed likely to cause undue distress or deter necessary treatment/research participation. Under the reasonable person standard, material information (including rare but severe risks) must be disclosed if a reasonable patient would want to know it. Modern ethics frameworks generally reject therapeutic privilege based on the professional practice standard."
  },
  {
    id: 9,
    question: "The Belmont Report identifies three ethical principles, but the principle MOST directly operationalized by the doctrine of informed consent is:",
    options: ["Beneficence", "Non-maleficence", "Respect for persons (autonomy)", "Justice"],
    answer: 2,
    explanation: "The Belmont Report (1979) identifies Respect for Persons, Beneficence, and Justice. Informed consent is the primary procedural mechanism for operationalizing Respect for Persons, which requires treating individuals as autonomous agents capable of making their own decisions. While beneficence informs risk-benefit analysis and justice governs subject selection, the consent process specifically embodies respect for autonomy. The Declaration of Helsinki and ICMR 2017 guidelines similarly anchor informed consent in respect for autonomy."
  },
  {
    id: 10,
    question: "A study participant later claims they did not understand that their biological samples would be stored indefinitely after the main study concluded. The consent form mentioned sample storage in line 47 of a 50-line document with no separate emphasis. An IRB reviewing this case would MOST likely conclude:",
    options: ["Consent was valid because the information was technically disclosed", "Consent was invalid because authorization requires specific consent for each procedure", "Consent was invalid due to inadequate comprehension of material information about sample use", "Consent was valid because the participant should have read the entire form"],
    answer: 2,
    explanation: "Material information that a reasonable person would want to know (such as indefinite biological sample storage) must be disclosed in a manner that promotes comprehension, not merely buried in fine print. ICMR 2017 guidelines and the Common Rule (45 CFR 46) require that key information be presented prominently at the beginning of consent documents. Burying material information undermines comprehension even if technically disclosed, rendering consent ethically inadequate for that specific element."
  },

  // ===== TYPES OF CONSENT (Q11–Q20) =====
  {
    id: 11,
    question: "A biobank collects samples and asks participants to consent to ALL future research uses of their samples, including currently unforeseeable uses. This model is BEST described as:",
    options: ["Tiered consent", "Broad consent", "Dynamic consent", "Blanket consent"],
    answer: 1,
    explanation: "Broad consent (endorsed by the revised Common Rule, 45 CFR 46, and ICMR 2017) permits future unspecified research uses within defined categories, with some governance safeguards. Blanket consent has no limits or governance mechanisms. Tiered consent offers discrete options (e.g., disease-specific vs. general use). Dynamic consent uses technology to allow ongoing, real-time participant decision-making about new uses. The term 'broad consent' is specifically used in biobanking regulations to balance flexibility with ethical oversight."
  },
  {
    id: 12,
    question: "In genomic research, a participant consented to a study of Type 2 diabetes genetics. Researchers later find a BRCA2 variant with clinical significance for breast cancer risk. Re-consent for return of incidental findings is MOST governed by which principle?",
    options: ["The participant's initial broad consent covers all genomic findings", "Re-consent is required because BRCA2 findings exceed the original study scope and constitute new material information", "Findings should be returned without re-consent as this serves the participant's best interest", "The ethics committee alone can decide whether to return findings without participant input"],
    answer: 1,
    explanation: "Incidental findings (IFs) in genomic research that are clinically actionable and outside the original study scope represent new material information that exceeds what was originally consented to. ICMR 2017 guidelines and international consensus (ACMG, ISBER) require a specific return-of-results policy to be established before study initiation and generally require re-consent or at minimum re-engagement of participants before returning IFs, especially for highly penetrant variants like BRCA2. Simply returning findings under original consent may violate the specificity of authorization."
  },
  {
    id: 13,
    question: "A hospital uses an opt-out model for including patient records in an anonymized research database. A patient who did not receive notification objects after learning their data was used. The MOST accurate ethical assessment is:",
    options: ["Opt-out models always violate informed consent principles", "Opt-out models are ethically acceptable if notification is adequate, the opt-out mechanism is accessible, and data are properly anonymized with ethics committee approval", "The patient's objection retroactively invalidates all research using their data", "Opt-out models are only acceptable for communicable disease surveillance"],
    answer: 1,
    explanation: "Opt-out (or presumed consent) models are ethically debated but accepted under specific conditions: genuine and accessible notification, real ability to opt out, proper anonymization reducing privacy risks, institutional ethics committee oversight, and public benefit justification. If notification was inadequate or the opt-out mechanism was not genuinely accessible, the model fails ethically. ICMR 2017 acknowledges opt-out approaches for secondary data use under specific safeguards. Complete failure of notification would undermine the ethical basis of the opt-out model in this case."
  },
  {
    id: 14,
    question: "A participant in a longitudinal cohort study is re-contacted 5 years later when the study expands to include genetic analysis. They had originally consented only to epidemiological questionnaires. What type of consent is NOW required?",
    options: ["Implied consent is sufficient as they enrolled in the cohort", "A new, separate specific consent for genetic analysis is required", "A waiver of consent can be granted because the participants are already enrolled", "Broad consent signed previously covers all future expansions of the study"],
    answer: 1,
    explanation: "Genetic analysis constitutes a qualitatively different and more sensitive category of research than epidemiological questionnaires, involving unique risks including identification, discrimination, and family implications. ICMR 2017 guidelines and the Genetic Privacy provisions require specific consent for genetic testing and genetic data collection. The original epidemiological consent cannot be retrospectively extended to cover genetic analysis. Re-consent with specific information about the genetic component, its implications, and data handling is mandatory."
  },
  {
    id: 15,
    question: "Dynamic consent is MOST advantageous in which research context?",
    options: ["Single-visit clinical trials with defined endpoints", "Longitudinal biobank studies where participants may wish to modify their permissions over time", "Emergency research where consent must be expedited", "Studies involving anonymous questionnaires"],
    answer: 1,
    explanation: "Dynamic consent (Kaye et al., 2015) uses digital platforms to give participants ongoing, granular control over how their data and samples are used, allowing them to update permissions as new research uses arise. This is most valuable in longitudinal biobanks and cohort studies where: (1) new research uses emerge over time, (2) participant preferences may change, (3) technological evolution creates new data linkage possibilities. It is impractical in single-visit trials, inapplicable to anonymous studies, and infeasible in emergency contexts."
  },
  {
    id: 16,
    question: "Under the ICMR 2017 National Ethical Guidelines, when is a waiver of consent for secondary use of existing biological samples MOST ethically justified?",
    options: ["Whenever the research is of high scientific merit", "When samples are fully anonymized with no possibility of re-identification, the research addresses a significant public health need, and an ethics committee approves the waiver", "When individual re-consent would be impractical regardless of the re-identification risk", "When the original consent form included a general clause about future research"],
    answer: 1,
    explanation: "ICMR 2017 guidelines specify that waiver of consent for secondary use requires: (1) samples/data are fully anonymized with genuinely no possibility of re-identification; (2) research addresses a significant public health question that cannot be answered otherwise; (3) individual re-consent is impracticable; AND (4) an ethics committee specifically approves the waiver. High scientific merit alone is insufficient. A general future-research clause in original consent does not constitute prospective waiver approval by an ethics committee for specific secondary uses."
  },
  {
    id: 17,
    question: "Express consent differs from implied consent in that:",
    options: ["Express consent can be verbal while implied consent must always be written", "Express consent explicitly states agreement through words or writing, while implied consent is inferred from conduct or circumstances", "Implied consent is valid only in emergencies while express consent applies in all research settings", "Express consent is required only for invasive procedures while implied consent suffices for questionnaires"],
    answer: 1,
    explanation: "Express consent is explicit affirmation of agreement communicated verbally or in writing. Implied consent is inferred from behavior or circumstances (e.g., a patient extending their arm for venepuncture implies consent to that procedure). In research contexts, ICMR 2017 and GCP guidelines generally require written express consent. However, express consent can be verbal (with documentation) for certain low-risk studies or where literacy is limited. Implied consent in research is much more restricted than in clinical practice."
  },
  {
    id: 18,
    question: "A researcher plans a biobank for rare genetic diseases with samples from 500 patients and asks them to sign a single consent form covering all possible future research. The form states: 'I consent to all future research using my samples for any scientific purpose without restriction.' This is BEST classified as:",
    options: ["Broad consent with appropriate governance", "Blanket consent, which is generally considered ethically problematic", "Tiered consent allowing participant choice", "A valid open-ended consent under ICMR 2017 guidelines"],
    answer: 1,
    explanation: "Blanket consent (also called open-ended or omnibus consent) grants unlimited, unrestricted permission for all future uses without any governance mechanism, restrictions, or participant rights to withdraw or limit uses. This is distinct from broad consent, which permits future unspecified uses WITHIN defined categories (e.g., health research) WITH ethics oversight and governance. ICMR 2017 and ISBER guidelines advise against blanket consent precisely because it provides no meaningful protection for participants' ongoing interests. The absence of any restriction makes this blanket, not broad."
  },
  {
    id: 19,
    question: "Tiered consent in biobanking offers participants which of the following options that DISTINGUISHES it from both broad consent and blanket consent?",
    options: ["A single yes/no choice about all research uses", "Graduated, specific categories of permitted use that participants can select individually", "Permission for all future uses subject only to ethics committee review", "Consent valid only for the duration of the original study"],
    answer: 1,
    explanation: "Tiered consent (also called layered or menu consent) provides participants with a structured menu of specific options to accept or reject independently (e.g., disease-specific research only vs. all health research; national researchers only vs. international collaboration; commercial use yes/no). This gives granular autonomy that broad consent lacks. Unlike blanket consent, it has defined categories. Unlike broad consent, it does not default to ethics committee governance as the sole safeguard - the participant actively selects permitted uses."
  },
  {
    id: 20,
    question: "Re-consent requirements in longitudinal studies are MOST ethically triggered by which scenario?",
    options: ["Any protocol amendment regardless of its impact on participants", "Addition of new research questions that involve qualitatively different risks or uses of data/samples beyond the original scope", "Change of principal investigator even if the protocol remains identical", "Expiration of the original ethics committee approval requiring renewal"],
    answer: 1,
    explanation: "Re-consent is ethically required when modifications introduce material changes that alter the risk-benefit profile, add qualitatively different procedures, or extend data/sample use beyond the original scope in ways participants could not have anticipated. Not all protocol amendments require re-consent (e.g., administrative changes, safety-motivated risk reductions). Change of PI alone does not ethically mandate re-consent if the protocol is unchanged. Ethics committee renewal is a regulatory requirement separate from re-consent obligations to participants."
  },

  // ===== EXCEPTIONS TO INFORMED CONSENT (Q21–Q30) =====
  {
    id: 21,
    question: "Therapeutic privilege as an exception to informed consent is MOST ethically defensible when:",
    options: ["A physician determines that a patient would be emotionally distressed by risk information", "There is strong evidence that disclosure would cause immediate, severe psychological harm that would render the patient unable to make any decision", "The patient has previously indicated they do not want to know risks", "The research team believes the participant is likely to withdraw if fully informed"],
    answer: 1,
    explanation: "Therapeutic privilege (non-disclosure on the grounds that disclosure would harm the patient) is widely criticized and narrowly defined in modern bioethics. It is only defensible in extreme circumstances where disclosure would cause immediate, severe psychological harm rendering the patient decisionally incapacitated. Mere emotional distress, likelihood of refusal, or a physician's paternalistic judgment are insufficient. ICMR 2017 guidelines are restrictive about therapeutic privilege and it should not be invoked to preserve research enrollment. Option C describes the patient's right to waive disclosure (different from therapeutic privilege)."
  },
  {
    id: 22,
    question: "Under Indian law, the Medical Termination of Pregnancy (MTP) Act 1971 (as amended in 2021) sets the age of consent for termination of pregnancy at:",
    options: ["16 years (same as general age of consent under Indian Contract Act)", "18 years for unmarried women; spousal consent required for married women", "18 years; guardian consent required below 18; no spousal consent required under the amended Act", "21 years as per the Prohibition of Child Marriage Act"],
    answer: 2,
    explanation: "The MTP Act 1971 (amended 2021) permits women to consent to termination at 18 years or above. Below 18 years, guardian consent is required. Crucially, the original Act required spousal consent for married women, but this requirement has been challenged and the 2021 amendments expanded access; spousal consent is NOT a legal requirement under the amended Act. The general age of contractual capacity under the Indian Contract Act is 18 years. The MTP Act is specifically relevant to reproductive health research and clinical ethics in India."
  },
  {
    id: 23,
    question: "A hospital ethics committee is asked to waive informed consent for an emergency RCT comparing two standard-of-care treatments in unconscious trauma patients. Which condition is NOT required for a valid emergency research waiver under ethical guidelines?",
    options: ["The condition must be life-threatening", "The intervention must carry no more than minimal risk above standard care", "Legally authorized representatives must be consulted if available", "Community consultation and public disclosure must occur before and after the research"],
    answer: 1,
    explanation: "Emergency research waivers under 21 CFR 50.24 (US FDA) and ICMR 2017 guidelines require: (1) life-threatening situation; (2) standard treatments are unsatisfactory or the research may directly benefit participants; (3) collection of valid informed consent is not feasible; (4) participation does not adversely affect rights/welfare; (5) LAR consent sought if possible; (6) community consultation and public disclosure. The intervention is NOT required to have minimal risk - emergency research may involve experimental treatments with unknown risks. The key ethical justification is clinical equipoise and direct potential benefit."
  },
  {
    id: 24,
    question: "Under the POCSO Act 2012 in India, consent issues in research involving child survivors of sexual abuse are MOST importantly governed by which provision?",
    options: ["Children below 18 can never participate in research related to sexual abuse", "Any information about a child victim obtained during research must be reported to authorities, potentially overriding researcher confidentiality obligations", "Written parental consent is sufficient to override a child's refusal to participate", "POCSO exempts medical researchers from mandatory reporting obligations"],
    answer: 1,
    explanation: "POCSO Act 2012 mandates mandatory reporting of child sexual abuse to the Special Juvenile Police Unit or local police, and this obligation extends to researchers who become aware of ongoing abuse or unreported incidents. This creates a tension with research confidentiality. Researchers conducting studies with CSAM-affected children must disclose in their consent/assent process that confidentiality cannot be maintained for information about ongoing abuse. POCSO does not exempt researchers. Children cannot be compelled to participate even with parental consent - a child's assent refusal must be respected in non-therapeutic research."
  },
  {
    id: 25,
    question: "India's age of majority under the Indian Majority Act 1875 is 18 years. In the context of research consent, an unmarried 17-year-old who presents as mature and articulate wishes to participate in a study on adolescent sexual health WITHOUT parental knowledge. The MOST ethically appropriate action is:",
    options: ["Enroll the participant as they demonstrate adequate maturity (mature minor doctrine)", "Refuse enrollment as parental consent is legally required for all research involving minors in India", "Apply the mature minor doctrine to provide assent only, while seeking ethics committee guidance on whether parental consent can be waived given the sensitive nature of the research", "Enroll with written assent only, as sexual health research is exempt from parental consent requirements"],
    answer: 2,
    explanation: "India does not have a statutory mature minor doctrine in research (unlike some common law jurisdictions). However, ICMR 2017 guidelines acknowledge that for sensitive research (sexual health, substance use, mental health) involving adolescents, requiring parental consent may deter participation and compromise public health goals. The ethics committee can waive parental consent for specific sensitive research categories where parental notification could harm the minor. The correct approach is to obtain the minor's assent AND seek ethics committee guidance on waiving parental consent - not to independently apply mature minor doctrine without oversight."
  },
  {
    id: 26,
    question: "During a public health emergency (epidemic), the Government of India invokes the Epidemic Diseases Act 1897 to mandate participation in a vaccine trial without individual consent. This action is MOST accurately assessed as:",
    options: ["Legally and ethically valid under the public health emergency exception", "Legally possible under the Act but ethically impermissible as the Epidemic Diseases Act does not authorize compulsory research participation", "Both legally and ethically impermissible as no Act in India authorizes mandatory research participation", "Permissible if approved by the ICMR Director General"],
    answer: 2,
    explanation: "The Epidemic Diseases Act 1897 grants powers for disease control measures (quarantine, inspection, treatment) but does NOT authorize compulsory participation in clinical trials or research. There is no Indian statute that legally permits mandatory research enrollment. Ethically, compulsory research participation violates the foundational principle of respect for persons and would violate the Declaration of Helsinki. Even in public health emergencies, research participation must be voluntary. Mandatory public health interventions (vaccination programs) are distinct from research participation."
  },
  {
    id: 27,
    question: "A participant signs a waiver of consent, stating they do not wish to receive information about the study procedures or risks before participating. This differs from therapeutic privilege because:",
    options: ["Therapeutic privilege is invoked by the researcher; a waiver is invoked by the participant", "Therapeutic privilege always involves withholding information from incapacitated patients", "A waiver requires ethics committee approval while therapeutic privilege does not", "A waiver is only valid for minimal risk studies"],
    answer: 0,
    explanation: "The critical distinction: therapeutic privilege is a unilateral decision by the physician/researcher to withhold information without (and sometimes against) the participant's wish, based on claimed patient welfare. A waiver of consent/disclosure is a participant's own autonomous exercise of their right NOT to receive detailed information before agreeing to participate. The participant initiates and controls the waiver, whereas therapeutic privilege is paternalistic. ICMR 2017 acknowledges that participants may waive specific information rights, but this must be documented and genuine. Both require documentation, but the ethical basis differs fundamentally."
  },
  {
    id: 28,
    question: "Under the Indian Contract Act 1872, which of the following BEST defines the legal consequence of obtaining consent from a person who lacked contractual capacity at the time of signing?",
    options: ["The consent is voidable at the option of the incapacitated person", "The consent is void ab initio and has no legal effect", "The consent is valid if witnessed by two independent parties", "The consent is valid if subsequently ratified by a guardian"],
    answer: 1,
    explanation: "Under the Indian Contract Act 1872, Section 11, persons who are minors, persons of unsound mind, or otherwise disqualified by law lack contractual capacity. A contract (including consent) entered into with such a person is VOID AB INITIO under Indian law (as established in Mohori Bibee v Dharmodas Ghose, 1903) - not merely voidable. This is more stringent than many common law jurisdictions where minor's contracts are voidable. In research, this underscores why LAR (legally authorized representative) consent is essential for legally valid authorization from incapacitated participants."
  },
  {
    id: 29,
    question: "A researcher conducts an observational study in a busy public market using video recording without individual consent, arguing that the public setting constitutes implied consent to observation. Under ICMR 2017 guidelines, this reasoning is:",
    options: ["Valid because there is no reasonable expectation of privacy in a public space", "Invalid because any identifiable video recording requires written informed consent regardless of location", "Partially valid; ethics committee waiver of consent is needed but observation in public spaces generally qualifies for such a waiver", "Valid only if faces are blurred before data analysis"],
    answer: 2,
    explanation: "Public observation research occupies a grey zone. ICMR 2017 guidelines recognize that research involving observation in public settings where individuals have no reasonable expectation of privacy may qualify for ethics committee waiver of consent, but this is NOT automatic. The researcher must apply for a waiver based on: minimal risk, impracticality of consent, public setting with no reasonable privacy expectation, and no adverse consequences to participants. Identifiable video recording does carry privacy risks and may require stricter safeguards. The researcher cannot self-determine that consent is not needed - EC review is required."
  },
  {
    id: 30,
    question: "The 'Rule of Double Effect' in research ethics is MOST relevant to which situation involving exceptions to informed consent?",
    options: ["Using placebos in trials where effective treatment exists", "Withholding information that might deter participation when the study has significant public benefit", "Administering an experimental analgesic that may shorten life while relieving intractable pain in a terminally ill participant who cannot consent", "Enrolling incapacitated patients in research where benefits are anticipated"],
    answer: 2,
    explanation: "The Rule of Double Effect (originating in Thomistic ethics) holds that an action with both good and harmful effects may be permissible if: (1) the act itself is not intrinsically wrong; (2) the agent intends only the good effect; (3) the harm is not the means to the good; (4) there is proportionate reason for the action. In research ethics, it is most directly applicable when an intervention has foreseeable harmful side effects alongside therapeutic benefits in participants who cannot consent. It does NOT justify withholding information to boost enrollment (option B), which is ethically impermissible regardless of public benefit."
  },

  // ===== CONSENT IN VULNERABLE POPULATIONS (Q31–Q40) =====
  {
    id: 31,
    question: "In pediatric research, what is the CRITICAL ethical distinction between 'parental permission' and 'parental consent' according to contemporary bioethics frameworks?",
    options: ["'Parental consent' is the legally correct term while 'parental permission' is informal", "'Parental permission' acknowledges that parents are granting permission on behalf of the child, not consenting for themselves; this framing reflects the child's own interests as primary", "They are interchangeable terms with identical ethical and legal implications", "'Parental consent' requires both parents while 'parental permission' requires only one"],
    answer: 1,
    explanation: "The terminological shift from 'parental consent' to 'parental permission' (introduced by the Belmont Report and emphasized in 45 CFR 46 and ICMR 2017) is ethically significant. Consent is a personal exercise of autonomy - parents cannot consent for their child because consent belongs to the individual. Permission reflects the parents' fiduciary role: they grant permission for their child's participation based on the child's best interests, not their own interests. This framing emphasizes that the child's assent must also be sought and that parental permission can be given only when the research is in the child's interest or carries minimal risk."
  },
  {
    id: 32,
    question: "A 10-year-old child with leukemia is enrolled in a Phase I dose-escalation trial (no prospect of direct therapeutic benefit). The child verbally refuses to participate before each session despite parental permission. According to ICMR 2017 guidelines, the MOST appropriate action is:",
    options: ["Proceed with parental permission as the child lacks legal capacity to refuse", "Honor the child's refusal as assent refusal must be respected in non-therapeutic research", "Obtain a psychiatric evaluation to determine if the refusal is rational", "Defer to the child's oncologist who believes the research is in the child's interest"],
    answer: 1,
    explanation: "ICMR 2017 guidelines and international consensus (Helsinki, CIOMS 2016) clearly state that a child's refusal (assent refusal) must be respected in non-therapeutic research (research with no prospect of direct benefit to the participant). In non-therapeutic research, parental permission alone is insufficient to override a child's objection. The situation differs in therapeutic research where benefits may justify overriding objection with careful justification. Phase I dose-escalation trials with no prospect of direct benefit are paradigmatic non-therapeutic research - the child's persistent refusal is a decisive contraindication to enrollment."
  },
  {
    id: 33,
    question: "A researcher studying psychosis wants to enroll patients during an acute episode to study decision-making capacity. Which approach is MOST ethically appropriate?",
    options: ["Enroll with LAR consent only, as acute psychosis definitively precludes capacity", "Use a capacity assessment tool (e.g., MacCAT-CR) to determine individual patient capacity; enroll with patient consent if capacity is demonstrated, or LAR consent if capacity is absent, with provision for participant withdrawal when capacity is restored", "Defer all enrollment until patients achieve full remission", "Obtain advance directives from all potential participants during their previous periods of remission"],
    answer: 1,
    explanation: "Acute psychosis does not automatically preclude decision-making capacity - capacity is task-specific and must be individually assessed. Validated instruments like the MacArthur Competence Assessment Tool for Clinical Research (MacCAT-CR) assess understanding, appreciation, reasoning, and expression of choice. ICMR 2017 guidelines require individualized capacity assessment for mental health research participants. If capacity is present, the patient's own consent is required and valid. If absent, LAR consent with participant assent is appropriate. Upon capacity restoration, participants should have the option to withdraw. Blanket exclusion during acute episodes may be scientifically and ethically counterproductive."
  },
  {
    id: 34,
    question: "Research involving prisoners is subject to heightened scrutiny because of which UNIQUE vulnerability that distinguishes incarceration from other vulnerable contexts?",
    options: ["Prisoners have lower literacy and education levels that impair comprehension", "The coercive environment of incarceration structurally compromises voluntariness, as refusal may be perceived as having consequences for parole, privileges, or treatment", "Prisoners lack legal capacity to consent under Indian law", "The prison setting makes adequate disclosure logistically impossible"],
    answer: 1,
    explanation: "The defining vulnerability of prisoner research is structural coercion: the total institution of prison creates conditions where free, uncoerced decision-making is intrinsically compromised. Prisoners may perceive research participation as a means to gain privileges, early parole consideration, or better treatment, or may fear negative consequences from refusal. This is not about cognitive capacity (prisoners are legally competent) or literacy, but about the institutional power dynamics that undermine genuinely voluntary consent. ICMR 2017 and CIOMS guidelines require special justification for prisoner research and prohibit inducements that would be disproportionately appealing given imprisonment conditions."
  },
  {
    id: 35,
    question: "Community consent in tribal/indigenous research is BEST understood as:",
    options: ["A replacement for individual informed consent, as indigenous communities make decisions collectively", "A prerequisite that does not replace individual consent; community-level gatekeeping decisions precede but do not substitute for individual participants' informed consent", "A formality required only when research is conducted on traditional lands", "Applicable only to research involving traditional knowledge or genetic resources"],
    answer: 1,
    explanation: "Community consent (or community engagement/gatekeeping) recognizes that indigenous communities have collective interests and governance structures that must be respected. Community leaders or governing bodies may grant or deny community-level permission for research. However, this community-level decision is a necessary PRECONDITION, not a substitute for individual informed consent. Each individual member must still provide their own voluntary, informed consent to participate. Community consent without individual consent violates individual autonomy; individual consent without community engagement may violate collective rights. ICMR 2017 requires both levels for indigenous community research."
  },
  {
    id: 36,
    question: "Pregnant women were historically excluded from research due to fetal protection concerns. Contemporary bioethics frameworks view their ROUTINE exclusion from research as:",
    options: ["Ethically appropriate as the fetal risk always outweighs the research benefit", "An ethical problem that constitutes injustice by denying pregnant women evidence-based care and treating them as vectors for fetal protection rather than autonomous persons", "Acceptable if the research involves any drug with unknown teratogenic potential", "Required under ICMR 2017 guidelines for all Phase I and II trials"],
    answer: 1,
    explanation: "Contemporary bioethics (CIOMS 2016, ICMR 2017, Mastroianni et al.) recognizes that routine exclusion of pregnant women from research is itself an ethical injustice: it leaves pregnant women without evidence-based treatment guidelines, treats them primarily as maternal vessels rather than autonomous persons with health needs, and perpetuates data gaps that harm maternal health. Exclusion may be justified for research involving known teratogens or when fetal risk is disproportionate, but should not be the default. CIOMS Guideline 19 specifically addresses equitable inclusion of pregnant women in research."
  },
  {
    id: 37,
    question: "A researcher plans to study traditional healing practices among an Adivasi community. The community elder provides written consent on behalf of the entire village. Individual community members, when approached separately, seem unaware of any research. The MOST significant ethical violation is:",
    options: ["Failure to obtain ethics committee approval for the research", "Community consent was treated as a substitute for individual informed consent, violating individual autonomy", "The researcher did not obtain permission from the Ministry of Tribal Affairs", "Lack of community benefit-sharing agreement"],
    answer: 1,
    explanation: "The fundamental violation is treating the elder's community-level permission as a substitute for individual informed consent. While community engagement and elder/gatekeeping consent are necessary in indigenous community research, each individual participant must be individually informed and provide voluntary consent. The fact that individual members are unaware of the research demonstrates this substitution error. ICMR 2017 guidelines explicitly require both community-level engagement AND individual informed consent in research with tribal/indigenous populations."
  },
  {
    id: 38,
    question: "Under ICMR 2017 guidelines, the MINIMUM age at which a child's assent should be sought for research participation is:",
    options: ["5 years", "7 years", "10 years", "12 years"],
    answer: 1,
    explanation: "ICMR 2017 National Ethical Guidelines specify that assent should be sought from children aged 7 years and above (though the ability to provide meaningful assent develops progressively). Below 7 years, parental/guardian permission alone is typically sufficient. Above 12-15 years, assent becomes more robust and approaches the weight of consent. The specific threshold of 7 years reflects developmental psychology evidence on cognitive capacity for basic understanding of research participation. This aligns with international guidelines (AAP, WHO) that generally place the assent threshold at 7-8 years."
  },
  {
    id: 39,
    question: "A Phase III RCT enrolls patients with major depressive disorder who are currently not suicidal and have capacity. Mid-study, a participant develops active suicidal ideation and is hospitalized. Their capacity fluctuates. Regarding their continued research participation, which is MOST appropriate?",
    options: ["Continue participation with proxy consent from family as they are hospitalized", "Suspend research procedures, reassess capacity when stable, obtain fresh consent if capacity is restored, and withdraw the participant from research if in their best interest", "Continue if the investigator judges the research beneficial to the participant", "Apply therapeutic privilege to continue the study without re-consenting"],
    answer: 1,
    explanation: "When a participant's capacity changes during a study, the ethical obligation is to suspend research procedures (not merely modify consent), conduct formal capacity reassessment when the participant is clinically stable, obtain fresh consent if capacity is restored, and consider withdrawal if continued participation conflicts with the participant's best interests. Family proxy consent for continued participation is insufficient without proper capacity assessment and may not reflect the participant's own interests. Therapeutic privilege to continue research (not treatment) would be a serious ethical violation."
  },
  {
    id: 40,
    question: "ICMR 2017 guidelines on 'undue inducement' in vulnerable populations specify that payment for research participation:",
    options: ["Is always unethical for vulnerable populations and should be prohibited", "May be offered at a level that fairly compensates for time, inconvenience, and expenses but must not be so large as to impair voluntary decision-making, especially for those in financial need", "Should be set by the ethics committee based on GDP per capita", "Is only permitted in Phase III and IV trials where the risk-benefit profile is favorable"],
    answer: 1,
    explanation: "ICMR 2017 guidelines draw a nuanced distinction: fair compensation (for time, travel, inconvenience) is ethically appropriate and promotes justice; undue inducement is an offer so attractive that it compromises the voluntariness of consent by impairing rational risk assessment. The threshold is especially important for economically vulnerable populations where monetary amounts that seem modest to researchers may be disproportionately influential to participants. The ethics committee must review and approve compensation levels. Prohibition of all payment would itself be unjust by placing research burdens on participants without fair reciprocity."
  },

  // ===== ADVANCED CONSENT ISSUES (Q41–Q50) =====
  {
    id: 41,
    question: "In a cluster randomized trial (cluster RCT) where communities are randomized to intervention vs. control conditions, individual informed consent faces a unique challenge because:",
    options: ["Participants can always choose which cluster (community) to belong to", "Randomization occurs at the cluster level before individuals are identified, making individual pre-randomization consent for treatment allocation impossible while individual consent for data collection remains feasible and required", "Cluster RCTs are exempt from informed consent requirements as they study community-level interventions", "Individual consent in cluster RCTs must be replaced by community consent from elected representatives"],
    answer: 1,
    explanation: "Cluster RCTs face the fundamental challenge that allocation (randomization) occurs at the cluster level before individual participants are identified or enrolled. Thus, individual participants cannot be randomized to their preferred arm - they receive whatever their cluster receives. Pre-randomization individual consent for treatment allocation is structurally impossible. However, individual consent for data collection, study participation, and outcome measurement remains both possible and ethically required. The Zelen design (post-randomization consent) attempts to address this but raises additional ethical issues. CIOMS and ICMR guidance require individual consent for data collection even in cluster RCTs."
  },
  {
    id: 42,
    question: "Deception studies (where participants are misled about the true study purpose) are ethically permitted ONLY when which conditions are SIMULTANEOUSLY met?",
    options: ["The deception is minor and the study has high scientific merit", "The study cannot be conducted without deception, the deception does not involve withholding information that would cause reasonable participants to refuse, there is full debriefing after participation, and an ethics committee approves", "Participants have signed a general consent form allowing the use of deception", "The study is purely observational with no intervention"],
    answer: 1,
    explanation: "Deception studies are a narrow exception to truthful disclosure, permissible under strict conditions (APA ethics code, ICMR 2017): (1) scientific necessity - the study cannot be conducted without deception because awareness would contaminate results; (2) no reasonable participant would refuse participation if fully informed (i.e., the deception is not about something material to risk); (3) complete debriefing occurs as soon as possible after participation; (4) participants have the option to withdraw data after debriefing; (5) ethics committee explicitly approves the deception. A general prior consent to deception does not substitute for specific EC approval of the particular deception used."
  },
  {
    id: 43,
    question: "Post-trial access provisions in research ethics primarily address which consent-related obligation?",
    options: ["The obligation to re-consent participants before study results are published", "The ethical obligation to inform participants during consent about what access (if any) they will have to beneficial interventions after the trial concludes", "Requirements to obtain participant consent for secondary analysis of trial data", "The duty to consult participants in the design of post-trial extensions"],
    answer: 1,
    explanation: "Post-trial access provisions (Declaration of Helsinki, Article 34; ICMR 2017) require that the consent process inform participants prospectively about what will happen after the trial: whether they will continue to have access to beneficial investigational products, transition to standard care, or have no continued access. This is a disclosure obligation within the informed consent process itself - participants must be informed of post-trial plans to make a fully informed decision about enrollment. This is separate from debriefing (which occurs after the study) or secondary data use consent."
  },
  {
    id: 44,
    question: "A large-scale AI/ML research project uses de-identified electronic health records to train a diagnostic algorithm. Participants in the original hospital dataset never consented to AI/ML research use. The MOST appropriate ethical approach is:",
    options: ["Proceed without consent as data is de-identified and poses no privacy risk", "Seek retrospective consent from all patients before any AI/ML training", "Apply to the ethics committee for a waiver of consent, demonstrating genuine de-identification, significant public benefit, impracticability of individual consent, and robust data governance mechanisms", "Use synthetic data generation to avoid consent issues entirely"],
    answer: 2,
    explanation: "AI/ML research using EHR data raises specific consent concerns: re-identification risks in health data (even 'de-identified' data can often be re-identified), novel algorithmic uses not anticipated when data were collected, and potential for algorithmic bias affecting future patients. Retrospective consent from large EHR cohorts is typically impracticable. The ethical pathway is ethics committee waiver of consent, requiring demonstration of: genuine de-identification with re-identification risk assessment, significant and specific public benefit, impracticability of consent, data governance safeguards, and audit mechanisms. ICMR 2017 and the draft Digital Health Data Protection Bill address these requirements."
  },
  {
    id: 45,
    question: "Data sharing consent in international collaborative research requires which specific element that domestic consent may not emphasize?",
    options: ["Consent must be obtained in English as the international research language", "Participants must be informed that their data will be transferred to jurisdictions with potentially different legal protections, and must consent to this specific cross-border transfer", "International data sharing requires only anonymization without additional consent", "Data sharing consent is managed entirely by institutional data transfer agreements without participant involvement"],
    answer: 1,
    explanation: "Cross-border data transfer introduces specific consent obligations: participants must be informed that their data will be shared with researchers in other jurisdictions that may have different privacy laws, data protection standards, and enforcement mechanisms. EU GDPR explicitly requires that individuals be informed about international data transfers and the adequacy of protections in recipient countries. ICMR 2017 requires that when data are shared internationally, participants be told about this at the time of consent, including limitations on legal recourse. This is distinct from domestic data sharing where participants' legal protections are consistent."
  },
  {
    id: 46,
    question: "Genetic testing consent differs from standard research consent because it must additionally address:",
    options: ["The requirement for genetic counselor co-signature on consent forms", "Implications for biological relatives who share genetic information, insurability and employment discrimination risks, psychological impact of findings, options regarding return of results, and the right not to know", "The mandatory storage of genetic samples for a minimum of 25 years", "The requirement that both biological parents consent for any genetic testing of adult participants"],
    answer: 1,
    explanation: "Genetic information has unique characteristics requiring specialized consent elements: (1) familial implications - genetic findings affect biological relatives who have not consented; (2) non-medical risks - genetic data can be used for employment or insurance discrimination (despite legal protections like GINA in the US; equivalent protections in India are weaker); (3) psychological impact - genetic diagnoses can alter self-concept and family relationships; (4) incidental/secondary findings - disclosure policy for variants unrelated to the study purpose; (5) right not to know - participants may prefer not to receive certain genetic results. These elements are specific to genetic research and not addressed in standard consent."
  },
  {
    id: 47,
    question: "The Comprehension Assessment Tool for Research (CAT-R) and the University of California Brief Assessment of Capacity to Consent (UBACC) are used in research ethics primarily to:",
    options: ["Train researchers in consent administration techniques", "Assess whether participants who have signed consent forms actually understand the material elements required for valid informed consent", "Determine the readability grade level of consent forms", "Certify that ethics committees have properly reviewed consent procedures"],
    answer: 1,
    explanation: "Consent comprehension assessment tools (CAT-R, UBACC, MacCAT-CR, and others) are validated instruments used to measure whether research participants who have been through the consent process actually understand key elements: study purpose, procedures, risks, benefits, alternatives, and voluntariness. These tools are especially important in studies involving vulnerable populations (psychiatric disorders, cognitive impairment, low literacy). A participant who has signed a consent form but fails comprehension assessment has not provided valid informed consent. ICMR 2017 recommends use of such tools especially for complex studies and vulnerable populations."
  },
  {
    id: 48,
    question: "Electronic consent (e-consent) platforms offer which evidence-based advantage over traditional paper consent in complex research studies?",
    options: ["E-consent is legally superior to paper consent in all Indian jurisdictions", "Interactive multimedia e-consent platforms have been shown to improve participant comprehension and recall compared to standard paper consent, through the use of videos, quizzes, and adaptive information delivery", "E-consent eliminates the need for IRB review of consent procedures", "E-consent automatically satisfies the ICMR requirement for consent in the participant's local language"],
    answer: 1,
    explanation: "Multiple RCTs and systematic reviews have demonstrated that interactive multimedia e-consent platforms significantly improve comprehension and recall compared to standard paper consent, particularly for complex information. Features include: embedded educational videos, comprehension quizzes with corrective feedback, adaptive information depth based on participant responses, and clear navigation. However, e-consent has limitations: digital divide issues, legal recognition varies by jurisdiction (IT Act 2000 governs e-signatures in India under Schedule I), does not automatically provide multilingual consent, and still requires ethics committee review of content. The key advantage is the evidence base for improved comprehension."
  },
  {
    id: 49,
    question: "Audio-visual consent (AV consent) is MOST appropriate as a primary consent modality (rather than supplementary aid) in which research context?",
    options: ["High-complexity trials with highly educated participants who prefer digital media", "Research conducted with illiterate or low-literacy populations where written consent forms are inaccessible but verbal comprehension is intact", "Emergency research situations where time constraints preclude standard consent", "Research in children below age 7 where assent is not formally required"],
    answer: 1,
    explanation: "Audio-visual consent is most valuable as a primary consent modality for illiterate or low-literacy populations, where standard written consent forms are functionally inaccessible. ICMR 2017 explicitly permits AV consent (audio-video recording of the consent process) as an alternative to written consent for illiterate participants. The process involves: verbal explanation in the participant's language, participant's verbal response recorded on video with a witness, and thumbprint documentation. This preserves the authenticity of the consent process while accommodating literacy barriers. For literate participants, AV materials serve as supplements to, not replacements for, written consent."
  },
  {
    id: 50,
    question: "ICMR 2017 National Ethical Guidelines specifically require that consent forms for all clinical research submitted to the regulatory authority contain which element that is UNIQUE to the Indian regulatory context?",
    options: ["A declaration by the principal investigator of no financial conflict of interest", "A statement in the vernacular language informing participants of their right to free treatment for research-related injuries and compensation for research-related death or disability", "Signature of the ethics committee chairperson on each consent form", "A section on participant rights under the Consumer Protection Act"],
    answer: 1,
    explanation: "ICMR 2017 guidelines and CDSCO's Schedule Y (as amended by the 2013 Gazette notification following the Standing Committee on Health report on clinical trial deaths) mandate that consent forms explicitly state: (1) the participant's right to free medical treatment for research-related injuries; (2) the right to compensation for research-related death or disability; (3) the sponsor's obligation to provide such compensation. This requirement arose from documented exploitation of trial participants in India and the absence of compensation mechanisms. This is a specific regulatory requirement unique to the Indian context and must be included in the consent form language in both English and the participant's vernacular language."
  }
]

export default questions

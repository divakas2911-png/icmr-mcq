const questions = [
  {
    id: 1,
    question: "The ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants were revised in 2017, superseding earlier versions. How many core ethical principles are enumerated in the 2017 guidelines?",
    options: [
      "A. 8 principles",
      "B. 10 principles",
      "C. 12 principles",
      "D. 15 principles"
    ],
    answer: 2,
    explanation: "The ICMR 2017 guidelines enumerate 12 core ethical principles: essentiality, voluntariness, non-exploitation, social justice/justice, beneficence/non-maleficence, respect for persons/autonomy, maximization of public interest, institutional responsibility, privacy and confidentiality, risk minimization, fairness, and honesty and transparency."
  },
  {
    id: 2,
    question: "Which of the following best describes the evolution of ICMR ethical guidelines in terms of timeline and scope expansion?",
    options: [
      "A. 1980 (first guidelines) → 2000 (revised) → 2006 (specific for clinical trials) → 2017 (comprehensive)",
      "B. 1990 (first guidelines) → 2000 (revised) → 2006 (revised) → 2017 (comprehensive)",
      "C. 2000 (first comprehensive) → 2006 (revised with new chapters) → 2017 (major revision)",
      "D. 1994 (first guidelines) → 2000 (revised) → 2006 (revised) → 2017 (updated)"
    ],
    answer: 2,
    explanation: "ICMR published its first comprehensive ethical guidelines in 2000, followed by a revised version in 2006 that added new chapters on specific research types, and then the major comprehensive revision in 2017 that incorporated emerging areas like stem cell research, big data, and community research. The 1980 document was a policy statement, not a full guideline."
  },
  {
    id: 3,
    question: "Under the ICMR 2017 guidelines, the principle of 'social justice' specifically requires which of the following in research involving vulnerable populations?",
    options: [
      "A. That vulnerable groups are excluded from all research to prevent exploitation",
      "B. That vulnerable groups bear a fair share of the burdens AND receive a fair share of benefits of research",
      "C. That all research benefits must be made available to the community where research was conducted within 1 year",
      "D. That a community advisory board must approve all research protocols involving vulnerable groups"
    ],
    answer: 1,
    explanation: "The principle of social justice in the ICMR 2017 guidelines requires distributive justice — that vulnerable and disadvantaged groups bear a fair share of research burdens AND receive a fair share of research benefits. Merely excluding vulnerable groups would itself be unjust as it denies them potential benefits."
  },
  {
    id: 4,
    question: "According to the ICMR 2017 guidelines, the principle of 'non-exploitation' is MOST specifically violated when:",
    options: [
      "A. Participants are paid more than a token honorarium for their participation",
      "B. Individuals are enrolled without sufficient compensation for their time and travel",
      "C. The research offers disproportionate and undue inducements that override rational decision-making",
      "D. Research is conducted in a low-income setting by a high-income country sponsor"
    ],
    answer: 2,
    explanation: "Under ICMR 2017 guidelines, non-exploitation is most directly violated when undue inducements (excessive monetary or other benefits) are offered that compromise the voluntariness of consent by overriding a person's rational decision-making capacity. Simply conducting research in a low-income setting is not per se exploitation, and participants may receive reasonable compensation."
  },
  {
    id: 5,
    question: "The ICMR 2017 guidelines apply to research involving human participants. Which of the following categories of activity is explicitly stated as NOT requiring ethics review under these guidelines?",
    options: [
      "A. Routine public health surveillance activities carried out by government authorities",
      "B. Retrospective chart reviews of anonymized patient data",
      "C. Epidemiological studies using existing data with no patient contact",
      "D. Quality improvement projects using identifiable patient data"
    ],
    answer: 0,
    explanation: "The ICMR 2017 guidelines explicitly state that routine public health surveillance activities conducted by authorized government health agencies as part of their mandate do not require ethics committee review. Other activities listed — including retrospective reviews, epidemiological studies with existing data, and quality improvement projects — may still require review depending on their nature and data identifiability."
  },
  {
    id: 6,
    question: "Under the ICMR 2017 guidelines, the principle of 'respect for persons' incorporates two distinct moral requirements. Which combination correctly identifies both?",
    options: [
      "A. Autonomy (capacity for self-determination) AND protection of those with diminished autonomy",
      "B. Informed consent AND right to withdraw without penalty",
      "C. Privacy protection AND confidentiality of research data",
      "D. Beneficence toward participants AND non-maleficence to third parties"
    ],
    answer: 0,
    explanation: "The ICMR 2017 guidelines specify that 'respect for persons' incorporates two ethical requirements: (1) acknowledgment of autonomy — individuals with decision-making capacity should be treated as autonomous agents, and (2) protection of persons with diminished autonomy — individuals with limited capacity for self-determination are entitled to additional protections."
  },
  {
    id: 7,
    question: "The ICMR 2017 guidelines introduced a specific principle not present in the 2006 guidelines. Which of the following is that newly added principle?",
    options: [
      "A. Beneficence",
      "B. Honesty and transparency",
      "C. Risk minimization",
      "D. Voluntariness"
    ],
    answer: 1,
    explanation: "The 2017 ICMR guidelines added 'honesty and transparency' as a new explicit principle that was not enumerated in the 2006 guidelines. This principle requires that researchers, sponsors, and institutions are honest in all aspects of research — including reporting results (positive or negative), disclosing conflicts of interest, and maintaining transparency with participants and the public."
  },
  {
    id: 8,
    question: "According to ICMR 2017 guidelines, 'institutional responsibility' as an ethical principle places which of the following obligations on research institutions?",
    options: [
      "A. Ensuring all research is funded through competitive grants rather than industry",
      "B. Registering all research protocols in a public registry before commencement",
      "C. Creating systems for ethical oversight, researcher training, and accountability for research conduct",
      "D. Mandating that at least 50% of the institutional review board consists of external members"
    ],
    answer: 2,
    explanation: "The principle of institutional responsibility in ICMR 2017 guidelines requires research institutions to create and maintain robust systems for ethical oversight of research, provide training to researchers on ethical conduct, and establish accountability mechanisms. This includes maintaining functioning ethics committees, grievance redressal mechanisms, and ensuring researchers adhere to ethical standards."
  },
  {
    id: 9,
    question: "The ICMR 2017 guidelines explicitly state their applicability to which of the following types of research?",
    options: [
      "A. Only clinical trials and interventional studies",
      "B. All biomedical and health research involving human participants, human biological material, or identifiable data",
      "C. Only research funded by ICMR or the Government of India",
      "D. Research conducted at institutions that have received ICMR recognition for their ethics committees"
    ],
    answer: 1,
    explanation: "The ICMR 2017 guidelines explicitly apply to all biomedical and health research involving: (1) human participants directly, (2) human biological material (tissues, cells, DNA, etc.), or (3) identifiable data about individuals. The applicability is not limited to ICMR-funded research or to specific study designs."
  },
  {
    id: 10,
    question: "Under the ICMR 2017 principle of 'maximization of public interest and of non-exploitation', a researcher discovers that a funded project will produce results beneficial mainly to high-income countries. According to this principle, what is the researcher's obligation?",
    options: [
      "A. Abandon the research as it cannot fulfill the principle",
      "B. Ensure the research design includes measures to make results accessible and applicable to the Indian population",
      "C. Publish results in open-access journals only",
      "D. Transfer intellectual property to the Government of India"
    ],
    answer: 1,
    explanation: "The principle of maximization of public interest in ICMR 2017 guidelines requires researchers to ensure that the benefits of research are available to the widest population possible, particularly to Indian communities. When research risks benefiting primarily external populations, researchers must incorporate design features ensuring relevance and accessibility of results to Indian participants and the broader public."
  },
  {
    id: 11,
    question: "According to ICMR 2017 guidelines, what is the MINIMUM required composition of an Institutional Ethics Committee (IEC) for it to function validly?",
    options: [
      "A. At least 5 members including a chairperson, member secretary, clinician, and layperson",
      "B. At least 7 members with specific required categories including a basic scientist, clinician, legal expert, social scientist, and layperson",
      "C. At least 9 members including at least 2 external members and 1 woman member",
      "D. At least 5 members with at least 1 external member unaffiliated with the institution"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines require IEC composition of at least 7 members representing specific mandatory categories: (1) Chairperson (preferably from outside the institution), (2) Member secretary, (3) Basic medical scientist, (4) Clinician, (5) Legal expert or retired judge, (6) Social scientist or philosopher or ethicist, and (7) Lay person from the community. Additional members may be co-opted."
  },
  {
    id: 12,
    question: "Under ICMR 2017 guidelines, for a full IEC review meeting to have valid quorum, which condition must be met?",
    options: [
      "A. A simple majority (more than 50%) of registered members must be present",
      "B. At least 5 members must be present, including the chairperson or co-chairperson",
      "C. A majority of members including at least one member from outside the institution must be present",
      "D. All mandatory category members must be present regardless of total number"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines require that for a valid IEC meeting, a majority of registered members must be present AND at least one member from outside the institution must be among those present. This external member requirement ensures independent oversight and prevents purely institutional self-review."
  },
  {
    id: 13,
    question: "The ICMR 2017 guidelines specify tenure for IEC members to prevent entrenchment. What is the standard tenure and re-appointment rule?",
    options: [
      "A. 2-year tenure with unlimited re-appointments permitted",
      "B. 3-year tenure with a maximum of 2 consecutive terms (6 years total), after which a gap is required",
      "C. 5-year tenure with no re-appointment permitted",
      "D. 3-year tenure with a maximum of 3 consecutive terms before mandatory rotation"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines prescribe a 3-year tenure for IEC members with a maximum of 2 consecutive terms (total 6 years), after which members must take a break before being eligible for re-appointment. This rotation policy ensures fresh perspectives and prevents conflicts of interest from long-term incumbency."
  },
  {
    id: 14,
    question: "According to ICMR 2017 guidelines, which category of research protocol is eligible for 'expedited review' by the IEC?",
    options: [
      "A. All drug trials in Phase II and above",
      "B. Research involving no more than minimal risk, or minor changes to already-approved protocols",
      "C. Social and behavioral research involving sensitive topics like HIV status",
      "D. Research involving vulnerable populations where full board review would cause undue delay"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines permit expedited review (review by the IEC chairperson or a designated reviewer rather than the full committee) for research that presents no more than minimal risk to participants, or for minor amendments to already-approved protocols. Research involving sensitive topics or vulnerable populations generally requires full board review."
  },
  {
    id: 15,
    question: "Under ICMR 2017 guidelines, which of the following research categories qualifies for 'exempt' review (i.e., exempt from full IEC review requirements)?",
    options: [
      "A. Research involving retrospective review of medical records using fully anonymized data with no patient contact",
      "B. Educational research involving surveys of adult students about learning preferences with no sensitive questions",
      "C. Both A and B qualify for exempt review",
      "D. Neither A nor B qualifies; all research involving human participants requires at minimum expedited review"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines recognize that certain low-risk research categories may be exempt from full review: these include (1) research using fully anonymized existing data/records, and (2) research on normal educational practices in established educational settings involving no sensitive topics. Both scenarios described qualify for exempt review, though the IEC itself should make the determination."
  },
  {
    id: 16,
    question: "When must an IEC receive a Serious Adverse Event (SAE) report from a clinical trial site, according to ICMR 2017 guidelines and applicable regulations?",
    options: [
      "A. Within 7 days of the investigator becoming aware of the SAE",
      "B. Within 14 days of the SAE occurrence",
      "C. Within 24 hours for fatal/life-threatening events; within 7 days for other SAEs",
      "D. Within 48 hours of the SAE occurrence for all SAE types"
    ],
    answer: 2,
    explanation: "Under ICMR 2017 guidelines and aligned with New Drugs and Clinical Trials Rules 2019, SAE reporting timelines require: fatal or life-threatening unexpected SAEs must be reported to the IEC within 24 hours (with a follow-up report within 7 days); other unexpected SAEs require reporting within 7 days. Expedited reporting ensures the IEC can take timely protective action."
  },
  {
    id: 17,
    question: "Under ICMR 2017 guidelines, the IEC has specific responsibilities regarding multi-site research. Which statement is most accurate?",
    options: [
      "A. Each site must have its own independent IEC that reviews the protocol without reference to other sites' reviews",
      "B. One lead IEC may be designated to conduct the primary review, and other site IECs may accept this review with or without additional local review",
      "C. ICMR centrally reviews all multi-site protocols and no individual IEC review is required",
      "D. Multi-site research requires approval from the CDSCO in addition to all individual site IEC approvals"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines provide for a cooperative review model in multi-site research: one IEC may be designated as the lead/central IEC for primary review, and other participating site IECs may accept this central review. However, individual site IECs retain the authority to add site-specific conditions or requirements based on local context."
  },
  {
    id: 18,
    question: "A researcher wants to conduct a study involving only interviews with healthy adult volunteers about dietary habits, with no biological samples collected. Under ICMR 2017 guidelines, how should the IEC classify this study for review purposes?",
    options: [
      "A. Full board review, because all research involving human participants requires full review",
      "B. Expedited review, because the research involves no more than minimal risk",
      "C. Exempt review, because surveys of healthy adults about diet are explicitly listed as exempt",
      "D. No review required, as observational studies without biological samples are outside IEC purview"
    ],
    answer: 1,
    explanation: "Under ICMR 2017 guidelines, research involving interviews/surveys of healthy adults on non-sensitive topics (like dietary habits) with no biological sample collection and no more than minimal risk qualifies for expedited review. It does not meet the exempt category (which requires fully anonymized data or established educational practice context) but also does not require full board review."
  },
  {
    id: 19,
    question: "The ICMR 2017 guidelines require IECs to maintain records of their activities. What is the mandatory minimum duration for record retention by an IEC?",
    options: [
      "A. 3 years after completion of the study",
      "B. 5 years after study completion or last approval",
      "C. Until the study results are published",
      "D. Permanently for all records"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines mandate that IECs retain all records (protocols, correspondence, minutes, consent forms, SAE reports) for a minimum of 5 years after the completion of the study or the last approval action, whichever is later. This ensures accountability and facilitates post-hoc review if questions arise about study conduct."
  },
  {
    id: 20,
    question: "Under ICMR 2017 guidelines, an IEC member who has a direct personal interest in a research protocol under review must:",
    options: [
      "A. Disclose the conflict and may still vote if the conflict is deemed minor by the chairperson",
      "B. Disclose the conflict, recuse themselves from the discussion, and not vote on that protocol",
      "C. Abstain from voting but may participate in the discussion to provide technical input",
      "D. Submit a written declaration and then proceed normally as transparency resolves the conflict"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines require that IEC members with a conflict of interest (direct personal, financial, or professional interest in the protocol) must: (1) declare the conflict to the committee, (2) leave the room during discussion of that protocol, and (3) not participate in voting. Disclosure alone without recusal is insufficient."
  },
  {
    id: 21,
    question: "According to ICMR 2017 guidelines, which phase of clinical trials requires the most stringent IEC oversight, and what specific requirement applies to that phase?",
    options: [
      "A. Phase I trials; they require ICMR central review in addition to local IEC review",
      "B. Phase I trials in healthy volunteers; they require specific safeguards including a detailed risk-benefit analysis and continuous monitoring plan",
      "C. Phase III trials; they require a formal Data Safety Monitoring Board (DSMB) with at least one external biostatistician",
      "D. Phase IV trials; they require long-term follow-up plans reviewed by the IEC every 6 months"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines place the most stringent requirements on Phase I trials, particularly first-in-human studies. These require: detailed risk assessment, comprehensive monitoring plans, clear stopping rules, small initial cohorts with dose escalation only after safety confirmation, and IECs must scrutinize the risk-benefit analysis especially when healthy volunteers (who receive no direct benefit) are exposed to experimental compounds."
  },
  {
    id: 22,
    question: "Under ICMR 2017 guidelines, what is the specific provision regarding use of placebo in controlled clinical trials?",
    options: [
      "A. Placebo use is never permissible when an effective standard treatment exists",
      "B. Placebo use is permissible when withholding standard treatment will not cause serious harm, or when there are compelling methodological reasons and additional protective measures are in place",
      "C. Placebo use requires CDSCO approval in addition to IEC approval for all Phase III trials",
      "D. Placebo use is permitted only in Phase I and Phase II trials; Phase III must always have active comparator"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines align with Declaration of Helsinki provisions on placebo: placebo controls are ethically permissible when (1) no proven effective intervention exists, (2) withholding standard treatment will not cause serious or irreversible harm to participants, or (3) compelling methodological reasons require placebo control AND additional protective measures are in place (rescue medication, careful monitoring, stopping rules). The absolute prohibition standard is not applied."
  },
  {
    id: 23,
    question: "The ICMR 2017 guidelines address observational studies with a specific requirement regarding retrospective data use. Which statement is MOST accurate?",
    options: [
      "A. Retrospective studies using fully anonymized data always require informed consent from all participants",
      "B. Retrospective studies may seek a waiver of consent from the IEC when obtaining consent is impracticable and the research poses minimal risk with adequate privacy protections",
      "C. Retrospective studies are automatically exempt and never require consent or IEC review",
      "D. Retrospective studies require consent from next-of-kin for deceased participants in all circumstances"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines provide that retrospective studies using existing records or data may seek a waiver of individual informed consent from the IEC when: (1) obtaining consent is impracticable (e.g., participants cannot be traced), (2) the research poses minimal risk, (3) adequate privacy and confidentiality protections are in place, and (4) the waiver will not adversely affect participants' rights and welfare. The IEC makes this determination."
  },
  {
    id: 24,
    question: "For epidemiological research, ICMR 2017 guidelines specify a particular requirement when research involves communities. Which requirement is MOST specific to community-level epidemiological research?",
    options: [
      "A. Individual written informed consent is always required regardless of data type or risk level",
      "B. Community-level permission (from community leaders or designated representatives) should be sought in addition to individual consent",
      "C. ICMR must pre-approve all epidemiological studies involving communities of more than 500 persons",
      "D. Community epidemiological research requires a community co-investigator on the research team"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines for epidemiological research involving communities specify that community-level permission (consultation with and permission from community leaders, panchayat, or designated community representatives) should be sought as a first step, in addition to individual informed consent from participants. This reflects the principle of respect for communities as collective entities, not just collections of individuals."
  },
  {
    id: 25,
    question: "Under ICMR 2017 guidelines for public health research, which of the following activities MOST clearly requires ethics review?",
    options: [
      "A. Routine immunization coverage surveys conducted by government health officials",
      "B. A researcher-initiated study examining determinants of vaccine hesitancy using household interviews",
      "C. Analysis of aggregated district-level disease notification data with no individual identification",
      "D. Evaluation of a government health program using only program administrative data"
    ],
    answer: 1,
    explanation: "Under ICMR 2017 guidelines, a researcher-initiated study involving household interviews about vaccine hesitancy clearly requires ethics review because it involves direct participant contact, collection of potentially sensitive health-related attitude data, and is not a routine government surveillance function. Routine government surveillance, analysis of aggregated data, and program evaluation using administrative data may qualify for exemption or expedited review."
  },
  {
    id: 26,
    question: "The ICMR 2017 guidelines have specific provisions for social and behavioral research. Which special consideration applies when such research involves 'sensitive topics'?",
    options: [
      "A. Sensitive topic research is prohibited unless the researcher has a PhD in social sciences",
      "B. Research on sensitive topics requires that all data be collected anonymously with no identifiers retained",
      "C. Enhanced privacy protections, potential need for certificate of confidentiality, and careful assessment of psychological distress risks are required",
      "D. ICMR must review all sensitive topic social research regardless of local IEC approval"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines recognize that social and behavioral research on sensitive topics (sexual behavior, drug use, mental health, stigmatized conditions, illegal activities) requires enhanced protections: (1) stronger confidentiality and privacy safeguards, (2) assessment of psychological distress risks to participants from questions, (3) provision of support resources for distressed participants, and (4) consideration of whether a certificate of confidentiality or other legal protections are needed."
  },
  {
    id: 27,
    question: "Under ICMR 2017 guidelines, research involving pregnant women as participants requires specific justification. Which statement BEST reflects this requirement?",
    options: [
      "A. Pregnant women cannot be enrolled in any research involving more than minimal risk",
      "B. Research may include pregnant women only if it addresses conditions specific to pregnancy",
      "C. Research involving pregnant women must either offer potential direct benefit to the woman or fetus, or pose no more than minimal risk, and the woman must provide independent informed consent",
      "D. The consent of the woman's husband or partner is required in addition to the woman's own consent"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines provide that research involving pregnant women requires: (1) the research offers potential direct benefit to the woman and/or fetus, OR poses no more than minimal risk with potential to yield important knowledge; (2) the woman provides her own free and informed consent; (3) the father's consent is not required (respecting woman's autonomy). Studies that expose pregnant women to risk without potential benefit to mother or fetus are not permissible."
  },
  {
    id: 28,
    question: "According to ICMR 2017 guidelines, which of the following is the most appropriate ethical framework for research involving prisoners?",
    options: [
      "A. Prisoners should never be enrolled in research as their autonomy is inherently compromised",
      "B. Prisoners may participate in research that offers them direct benefit or that could not be conducted otherwise, with special precautions ensuring voluntariness",
      "C. Research in prisons is permitted only if approved by the State government in addition to IEC",
      "D. Only observational research with no intervention is permitted in prison settings"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines recognize prisoners as a vulnerable population whose voluntariness may be compromised by the coercive prison environment, but do not categorically exclude them from research. Permissible research includes studies offering direct benefit to participants or studies that could not feasibly be done in non-prisoner populations, with special safeguards: independent advocates, no preferential treatment for participation, and careful IEC scrutiny of consent processes."
  },
  {
    id: 29,
    question: "ICMR 2017 guidelines address research during disaster or emergency situations. What is the key ethical provision for such research?",
    options: [
      "A. All research ethics requirements are suspended during declared national emergencies",
      "B. Ethics review may be expedited or deferred but informed consent requirements remain fully intact",
      "C. IEC review should be expedited and alternative consent processes (community consent, LAR consent) may be used, but post-hoc individual consent must be obtained when feasible",
      "D. Only government-approved research organizations may conduct research during disasters"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines for disaster and emergency research recognize the need for expedited ethics review and allow alternative consent mechanisms (legally authorized representative, community/proxy consent) when individual consent is not feasible due to the emergency. However, post-hoc consent should be obtained from participants as soon as they have decision-making capacity restored. Ethics standards are not suspended but adapted to context."
  },
  {
    id: 30,
    question: "Under ICMR 2017 guidelines, research involving children requires a specific tiered assent/consent framework. Which age threshold triggers the requirement for the child's 'assent' in addition to parental consent?",
    options: [
      "A. Age 7 years and above",
      "B. Age 12 years and above",
      "C. Age 14 years and above",
      "D. Age 16 years and above"
    ],
    answer: 0,
    explanation: "ICMR 2017 guidelines specify a tiered approach: children aged 7 years and above have sufficient cognitive development to provide meaningful assent and this should be sought in addition to parental/guardian consent. For children below 7 years, only parental/guardian consent is required. At age 18 (or 16 for some contexts), independent informed consent applies. If a child dissents, their dissent should generally be respected even if parents consent."
  },
  {
    id: 31,
    question: "Under ICMR 2017 guidelines, when human biological material (HBM) is collected for a specific research study, can the same material be used for a different future study?",
    options: [
      "A. Yes, stored HBM can always be used for any future research without additional consent",
      "B. Only if the future use falls within the broad terms of the original consent and the original IEC approval covers secondary use",
      "C. No, new consent must always be obtained for any secondary use of HBM regardless of original consent scope",
      "D. Secondary use requires only IEC approval without participant notification if the samples are anonymized"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines and biobanking provisions specify that secondary use of HBM is permissible without new consent only if: (1) the secondary use falls within the scope of the original broad consent given by the participant, AND (2) the original IEC approval either explicitly covers secondary use or a new IEC approval for secondary use is obtained. If the original consent was narrow (specific study only), new consent is required for secondary use."
  },
  {
    id: 32,
    question: "The ICMR 2017 guidelines have specific provisions for biobanks. Which of the following is a mandatory requirement for establishing a biobank under these guidelines?",
    options: [
      "A. Biobanks must be registered with ICMR and maintained only at ICMR-affiliated institutions",
      "B. Biobanks must have a governance structure including a scientific advisory committee and an access committee, informed consent procedures, and a data sharing policy",
      "C. Biobanks can only store HBM from Indian nationals; samples from foreign nationals require ICMR central approval",
      "D. Biobanks must share 10% of stored samples with government repositories annually"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines for biobanks mandate: (1) a governance structure with a scientific advisory committee and a sample/data access committee, (2) appropriate informed consent procedures (broad consent with specific provisions), (3) a defined data and sample sharing policy, (4) security and quality management systems, and (5) defined procedures for sample withdrawal. ICMR registration is recommended but not mandatory under the 2017 guidelines."
  },
  {
    id: 33,
    question: "Under ICMR 2017 guidelines, what type of consent model is recommended for biobanking of human biological material?",
    options: [
      "A. Specific consent for each individual study using the biobank",
      "B. Blanket/global consent covering all future uses without limitations",
      "C. Tiered/broad consent that allows participants to specify acceptable future uses within defined categories",
      "D. One-time consent at collection that automatically covers all future uses by the same institution"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines recommend a tiered or broad consent model for biobanking, where participants can choose their level of consent from defined tiers (e.g., consent only for the current study; consent for future related studies; consent for any future research). This balances research flexibility with participant autonomy. Pure blanket consent without any scope definition is not recommended."
  },
  {
    id: 34,
    question: "Material Transfer Agreements (MTAs) for human biological material under ICMR 2017 guidelines must address which of the following critical elements?",
    options: [
      "A. Only the financial compensation for material provision",
      "B. Permitted uses of material, intellectual property rights, data sharing, return of results, and restrictions on commercial use or further transfer",
      "C. Only the biosafety requirements for transport of biological material",
      "D. Only the quantity and quality specifications of the material being transferred"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines specify that MTAs for HBM must comprehensively address: (1) permitted and prohibited uses of the material, (2) intellectual property ownership and sharing, (3) data sharing and publication rights, (4) whether results will be returned to donors, (5) restrictions on commercial exploitation without participant benefit, and (6) prohibition of further transfer to third parties without consent. Financial terms alone are insufficient."
  },
  {
    id: 35,
    question: "According to ICMR 2017 guidelines, what special provision applies to research involving genetic testing or genomic studies?",
    options: [
      "A. Genetic research requires mandatory genetic counseling for all participants before and after testing",
      "B. Participants must be informed of the potential for incidental findings and given the option to receive or not receive such information",
      "C. All genetic data must be shared with ICMR's central genetic database",
      "D. Genetic research is prohibited in populations that have not provided community-level consent through formal tribal councils"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines specifically require that for genetic/genomic research: participants must be informed about the possibility of incidental findings (genetic information unrelated to the study purpose), and must be given a genuine choice about whether they wish to receive such information. The consent process must explicitly address this 'right to know' versus 'right not to know' and researchers must have a protocol for handling incidental findings."
  },
  {
    id: 36,
    question: "The ICMR-DBT Guidelines for Stem Cell Research (2017) classify human embryonic stem cell research into different categories. Which category requires the MOST restrictive review and oversight?",
    options: [
      "A. Research using established human embryonic stem cell lines already approved by ICMR",
      "B. Research involving derivation of new human embryonic stem cell lines from surplus IVF embryos",
      "C. Research involving induced pluripotent stem cells (iPSCs) derived from somatic cells",
      "D. Research using adult stem cells for therapeutic applications"
    ],
    answer: 1,
    explanation: "Under ICMR-DBT Stem Cell Research Guidelines, derivation of new human embryonic stem cell (hESC) lines from surplus IVF embryos requires the most stringent oversight: approval from both the institutional ethics committee AND the National Apex Committee for Stem Cell Research and Therapy (NAC-SCRT). Using established approved lines requires IEC approval only. iPSCs and adult stem cells have less restrictive requirements."
  },
  {
    id: 37,
    question: "Under ICMR-DBT Stem Cell Research Guidelines, which of the following is categorically prohibited ('red category') regardless of scientific justification?",
    options: [
      "A. Deriving new embryonic stem cell lines from excess IVF embryos",
      "B. Research involving human-animal chimeras for studying human disease mechanisms",
      "C. Reproductive cloning of human beings",
      "D. In vitro culture of human embryos beyond 14 days"
    ],
    answer: 2,
    explanation: "Under ICMR-DBT Stem Cell Research Guidelines, reproductive cloning of human beings is categorically prohibited (red category) with no exceptions. Note that therapeutic cloning (somatic cell nuclear transfer for deriving stem cells) has different regulatory status. Human-animal chimera research and in vitro culture beyond 14 days are also prohibited/restricted but the absolute prohibition specifically applies to reproductive human cloning."
  },
  {
    id: 38,
    question: "Under ICMR 2017 guidelines, when a participant withdraws consent for future use of their stored biological samples in a biobank, what is the researcher/biobank's obligation?",
    options: [
      "A. The samples must be destroyed immediately regardless of any ongoing research",
      "B. Ongoing research using the samples may continue to completion but no new studies may use the samples",
      "C. The samples must be destroyed or anonymized beyond re-identification, and may not be used in new studies; ongoing studies may continue if separation is not possible",
      "D. The withdrawal only applies to commercially-funded research; ICMR-funded research may continue using the samples"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines specify that upon withdrawal of consent for biobank samples: (1) samples should be destroyed or irreversibly anonymized as per the participant's wishes, (2) no new studies should be initiated using those samples, (3) if samples are already in ongoing research where separation is technically not feasible, the research may continue to completion — this is a pragmatic exception. The obligation to respect withdrawal is not contingent on the funding source."
  },
  {
    id: 39,
    question: "According to ICMR 2017 guidelines, genetic research involving tribal or indigenous communities has specific additional requirements beyond standard research ethics. Which requirement is MOST specific to such populations?",
    options: [
      "A. Research must be conducted only by researchers from the same tribal community",
      "B. Community engagement, community advisory boards, and benefit-sharing arrangements must be established before research begins",
      "C. ICMR must directly supervise all genetic research in tribal communities",
      "D. All genetic samples from tribal communities must be stored within the tribal territory"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines for genetic research in tribal/indigenous communities require: (1) meaningful community engagement and consultation before research initiation, (2) establishment of community advisory boards or comparable structures, (3) clear benefit-sharing arrangements defining how the community will benefit from research outcomes, and (4) community-level permission in addition to individual consent. These requirements reflect the collective rights of indigenous communities over their genetic heritage."
  },
  {
    id: 40,
    question: "Under ICMR 2017 guidelines, what is required when a researcher discovers a clinically significant incidental finding in a participant's stored genetic sample from a completed study?",
    options: [
      "A. The finding must be reported to public health authorities but not necessarily to the participant",
      "B. The researcher has no obligation to disclose incidental findings from completed studies as the research relationship has ended",
      "C. The researcher should disclose the finding to the participant if the participant had consented to receive incidental findings, if the finding is clinically actionable, and if the participant can be re-contacted",
      "D. All incidental genetic findings must be reported to ICMR's genetic disease registry"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines create a conditional obligation for disclosing incidental genetic findings: disclosure is required when (1) the participant had consented to receive incidental findings at the time of enrollment, (2) the finding is clinically significant and actionable (i.e., something can be done to benefit the participant), and (3) the participant can be re-contacted. If the original consent did not address incidental findings or if the participant had chosen not to receive such information, different considerations apply."
  },
  {
    id: 41,
    question: "The New Drugs and Clinical Trials Rules 2019 (NDCTR 2019) under which Act came into force, and what was its primary regulatory change from the previous regime?",
    options: [
      "A. Drugs and Cosmetics Act 1940; replaced separate clinical trial guidelines with binding legal rules",
      "B. Drugs and Cosmetics Act 1940; consolidated and replaced the 2013 amendments and introduced new approval timelines",
      "C. Medical Devices Act 2017; extended CDSCO oversight to device trials",
      "D. Pharmaceutical Regulation Act 2016; replaced the earlier Schedule Y requirements"
    ],
    answer: 1,
    explanation: "The New Drugs and Clinical Trials Rules 2019 were enacted under the Drugs and Cosmetics Act 1940 (consolidated under the parent act). They replaced the previous regime including the 2013 amendments and the older Schedule Y, introducing specific approval timelines (CDSCO must respond within 30 days for new drug applications), new compensation provisions, and electronic submissions, while giving legal force to previously administrative requirements."
  },
  {
    id: 42,
    question: "Under the NDCTR 2019 and ICMR 2017 guidelines, what is the standard compensation framework for participants who suffer serious injury as a direct result of participation in a clinical trial?",
    options: [
      "A. Compensation is payable only if negligence by the investigator or sponsor can be proven",
      "B. No-fault compensation is payable for trial-related injury, calculated using a formula based on nature of injury, age, income, and degree of disability",
      "C. A fixed compensation amount of Rs. 10 lakhs per serious injury regardless of severity",
      "D. Compensation is determined exclusively by the courts; CDSCO has no role in determining compensation amounts"
    ],
    answer: 1,
    explanation: "Both NDCTR 2019 and ICMR 2017 guidelines establish a no-fault compensation principle: sponsors are obligated to provide compensation for trial-related serious injury or death without requiring proof of negligence. CDSCO has issued a formula for calculating compensation that considers: nature and severity of injury, age of participant, income, degree of disability resulting from injury, and whether the injury was trial-related or disease-related. CDSCO oversees this process."
  },
  {
    id: 43,
    question: "Under NDCTR 2019, what is the role of CDSCO in clinical trial oversight regarding SAE management?",
    options: [
      "A. CDSCO reviews only SAEs classified as unexpected, serious, and possibly related to the investigational product",
      "B. CDSCO must be informed of all SAEs within 24 hours and determines compensation for all SAEs",
      "C. All unexpected and serious adverse drug reactions must be reported to CDSCO within 14 days, and CDSCO may suspend or cancel the trial based on safety concerns",
      "D. CDSCO receives SAE reports only for Phase I and Phase II trials; Phase III reports go to the sponsor only"
    ],
    answer: 2,
    explanation: "Under NDCTR 2019, all unexpected and serious adverse drug reactions (SUSARs - Suspected Unexpected Serious Adverse Reactions) must be reported to CDSCO within 14 days (7 days for fatal/life-threatening). CDSCO has authority to review these reports and may issue directions to suspend, modify, or cancel clinical trials if it determines there is unacceptable risk to participants. This applies to all phases of trials."
  },
  {
    id: 44,
    question: "The ICMR 2017 guidelines specify requirements for a Data Safety Monitoring Board (DSMB). Which statement about DSMB composition and function is MOST accurate?",
    options: [
      "A. A DSMB is mandatory for all clinical trials regardless of phase or design",
      "B. A DSMB is required for Phase III and Phase IV trials and must include at least one biostatistician and one clinician independent of the trial",
      "C. DSMBs are optional advisory bodies and their recommendations are not binding on the sponsor",
      "D. The IEC serves as the DSMB for single-center trials, eliminating the need for a separate board"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines require a DSMB (also called Data Monitoring Committee) for Phase III and Phase IV clinical trials, and for any trial with significant safety concerns or involving vulnerable populations. The DSMB must include: at least one biostatistician (who can perform interim analyses), at least one clinician with expertise in the relevant disease area, all independent of the trial. While DSMB recommendations are advisory to the sponsor, CDSCO may require compliance."
  },
  {
    id: 45,
    question: "Under ICMR 2017 guidelines, what is the principal investigator's obligation regarding 'post-trial access' for participants who benefited from an experimental treatment?",
    options: [
      "A. No obligation exists; post-trial access is entirely at the sponsor's discretion",
      "B. The sponsor and investigator must ensure continued access to beneficial treatment until it becomes commercially available or through alternative means, as agreed before trial commencement",
      "C. Participants must be enrolled in the Phase IV trial to continue receiving the experimental treatment",
      "D. Post-trial access is required only for drugs classified as 'essential medicines' by WHO"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines explicitly require that arrangements for post-trial access be established and communicated to participants BEFORE the trial begins. When a participant has benefited from an experimental intervention, the sponsor and investigator have an ethical obligation to ensure continued access to that beneficial treatment until it becomes commercially available or through other access mechanisms. The specific arrangements must be described in the protocol and consent form."
  },
  {
    id: 46,
    question: "According to ICMR 2017 guidelines, what is the requirement for clinical trial registration in India?",
    options: [
      "A. Trials must be registered in any WHO-recognized trial registry before publication of results",
      "B. All clinical trials must be registered in the Clinical Trials Registry - India (CTRI) before enrolling the first participant",
      "C. Registration in CTRI is mandatory for Phase II and above; Phase I trials may be registered retrospectively",
      "D. Trial registration is voluntary under ICMR guidelines but mandatory under CDSCO regulations"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines require that ALL clinical trials must be prospectively registered in the Clinical Trials Registry - India (CTRI) before enrolling the first participant. This applies to all phases (I through IV) and all types of interventional trials. Retrospective registration is not acceptable. CTRI is India's primary clinical trial registry and a WHO-recognized registry."
  },
  {
    id: 47,
    question: "Under ICMR 2017 guidelines, which provision addresses the ethical obligation to publish research results, including negative results?",
    options: [
      "A. Researchers have no legal obligation to publish; ethical obligations are limited to study participants",
      "B. The principle of honesty and transparency requires researchers to publish or otherwise disseminate all research results, including negative and null findings, to prevent publication bias",
      "C. Only ICMR-funded research must publish results; industry-sponsored research publication is governed by commercial agreements",
      "D. Results must be published within 2 years of study completion or the IEC approval lapses"
    ],
    answer: 1,
    explanation: "ICMR 2017 guidelines, under the principle of 'honesty and transparency,' explicitly state that researchers have an ethical obligation to publish ALL research results — including negative, null, and inconclusive findings. Suppression of negative results contributes to publication bias and misrepresents the scientific evidence base, harming future participants and patients. This obligation applies regardless of funding source."
  },
  {
    id: 48,
    question: "The ICMR 2017 guidelines address conflict of interest in research publications. Which of the following is MOST accurately described as a conflict of interest requiring mandatory disclosure?",
    options: [
      "A. A researcher who has published in the same journal before",
      "B. A researcher who received a travel grant from a pharmaceutical company to attend a conference 5 years prior to the publication",
      "C. A researcher who holds stock in a company whose product is being evaluated in the study they are publishing",
      "D. A researcher who was trained at the institution that developed the intervention being studied"
    ],
    answer: 2,
    explanation: "ICMR 2017 guidelines on conflict of interest require disclosure of financial interests that could influence research conduct or reporting. A researcher who holds stock (financial interest) in a company whose product is being evaluated has a direct financial conflict of interest that could bias study design, conduct, analysis, or interpretation — this requires mandatory disclosure. Remote historical associations (travel grants 5 years prior, training institution) are generally not considered reportable conflicts."
  },
  {
    id: 49,
    question: "Under ICMR 2017 guidelines and aligned NDCTR 2019 provisions, who is ultimately responsible for ensuring that an academic investigator-initiated trial meets all regulatory and ethical requirements?",
    options: [
      "A. ICMR, as the funding body, assumes responsibility for all research it funds",
      "B. The institution hosting the research bears primary responsibility, with the principal investigator accountable for day-to-day conduct",
      "C. CDSCO bears regulatory responsibility while the investigator bears ethical responsibility",
      "D. Shared equally between the PI, the IEC, and the CDSCO with no single primary responsible party"
    ],
    answer: 1,
    explanation: "Under ICMR 2017 guidelines, the hosting institution bears ultimate responsibility for research conducted under its auspices (principle of institutional responsibility), while the principal investigator is personally accountable for the day-to-day ethical and regulatory conduct of the research. The IEC provides oversight but is not responsible for research conduct. CDSCO provides regulatory oversight for drug trials but does not relieve the investigator and institution of their ethical responsibilities."
  },
  {
    id: 50,
    question: "A Phase III multi-center clinical trial is ongoing in India when interim DSMB analysis reveals that the experimental arm shows significantly superior efficacy. Under ICMR 2017 guidelines and applicable regulations, what is the MOST appropriate course of action?",
    options: [
      "A. Continue the trial to completion as planned since stopping early inflates treatment effect estimates",
      "B. The DSMB should recommend early stopping to the sponsor and investigators, who must then consult with CDSCO and IECs; if confirmed, participants in the control arm should be offered the experimental treatment",
      "C. Immediately switch all control arm participants to the experimental treatment without formal stopping and continue data collection",
      "D. Publish the interim results immediately so the medical community can use the new treatment, but continue the trial for confirmatory data"
    ],
    answer: 1,
    explanation: "Under ICMR 2017 guidelines, when interim analysis reveals clear superiority of the experimental arm, the DSMB should recommend early stopping of the trial following pre-specified stopping rules. The sponsor and investigators must notify CDSCO and all IECs. Crucially, participants in the control arm (who have been receiving inferior treatment) should be offered the experimental treatment — this reflects the ethical obligation of beneficence and the principle that participation in research should not leave participants worse off than they would be with best available care."
  }
]

export default questions

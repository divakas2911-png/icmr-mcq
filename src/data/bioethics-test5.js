const questions = [
  {
    id: 1,
    question: "As per ICMR National Ethical Guidelines 2017, what is the minimum number of members required in an Institutional Ethics Committee (IEC)?",
    options: [
      "A) 5 members",
      "B) 7 members",
      "C) 9 members",
      "D) 11 members"
    ],
    answer: 1,
    explanation: "ICMR National Ethical Guidelines 2017 mandate a minimum of 7 members in an IEC. The committee must have a diverse composition including a chairperson, member secretary, biomedical scientists, clinicians, legal expert, social scientist/lay person, and a community representative."
  },
  {
    id: 2,
    question: "A newly constituted IEC at a tertiary care hospital has the following members: Chairperson (retired scientist), Member Secretary (clinical pharmacologist), two clinicians, one basic scientist, one legal expert, one social worker, and one nurse. Which critical ICMR guideline requirement is violated?",
    options: [
      "A) No requirement is violated; the composition is adequate",
      "B) There must be at least one lay person from outside the institution",
      "C) The chairperson must be from within the institution",
      "D) There must be at least two legal experts"
    ],
    answer: 1,
    explanation: "ICMR guidelines require that the IEC must include at least one lay person who is not affiliated with the institution. This external lay person ensures community perspective and independence. The social worker listed may be from within the institution, which would violate this requirement if no external lay member is present."
  },
  {
    id: 3,
    question: "The quorum requirement for an IEC meeting under ICMR guidelines mandates that which specific categories of members MUST be present for the meeting to be valid?",
    options: [
      "A) Chairperson and Member Secretary only",
      "B) At least half the members including one lay member and one independent member",
      "C) All members must be present",
      "D) At least 5 members regardless of category"
    ],
    answer: 1,
    explanation: "Under ICMR guidelines, quorum requires at least half the total members to be present, and this quorum must specifically include at least one lay member and one independent member not affiliated with the institution. This ensures that diverse perspectives, including community views, are always represented in decisions."
  },
  {
    id: 4,
    question: "Under the New Drugs and Clinical Trials Rules 2019, within what timeframe must an IEC register with the Central Licencing Authority (CDSCO/DCGI) to be eligible to review clinical trials of new drugs?",
    options: [
      "A) 30 days before reviewing any trial",
      "B) Registration must be obtained prior to reviewing any trial",
      "C) Within 90 days of constituting the IEC",
      "D) Annual renewal; no initial mandatory timeline"
    ],
    answer: 1,
    explanation: "Under NDC&T Rules 2019, IECs must be registered with CDSCO before they can review clinical trials of new drugs or investigational products. The registration is mandatory and must precede any such review activity. IECs registered under these rules are valid for 3 years and must be renewed."
  },
  {
    id: 5,
    question: "The Member Secretary of an IEC receives a protocol from a PI who is also a senior department head and a founding member of the hospital. The PI requests expedited review citing time pressure. What is the MOST appropriate action by the Member Secretary?",
    options: [
      "A) Grant expedited review given the PI's seniority and institutional standing",
      "B) Assess whether the protocol qualifies for expedited review based on risk criteria, irrespective of PI's position",
      "C) Refer to the Chairperson who will decide based on institutional priorities",
      "D) Reject the request since department heads cannot receive expedited review"
    ],
    answer: 1,
    explanation: "The Member Secretary must assess eligibility for expedited review solely based on risk criteria (minimal risk research) as defined in ICMR guidelines and NDC&T Rules 2019. The PI's seniority, position, or institutional standing is entirely irrelevant. This reflects the principle of independence of the IEC from institutional hierarchy."
  },
  {
    id: 6,
    question: "According to ICMR guidelines, a member of the IEC who is a co-investigator on a protocol under review should:",
    options: [
      "A) Recuse from discussion and voting but may present the protocol",
      "B) Recuse from both presenting the protocol and voting, but may remain in the room during discussion",
      "C) Leave the room during discussion and voting on that specific protocol",
      "D) Participate fully as their scientific expertise is needed"
    ],
    answer: 2,
    explanation: "ICMR guidelines and standard ethical practice require that any IEC member with a conflict of interest (including being a co-investigator on the protocol) must leave the room entirely during the discussion and voting on that protocol, not merely abstain from voting. This ensures that their presence does not influence deliberations."
  },
  {
    id: 7,
    question: "An IEC at a government medical college has 12 registered members. For a full board review meeting, what is the minimum number of members required for quorum, and which categories must mandatorily be present?",
    options: [
      "A) 6 members; no specific category requirement",
      "B) 6 members including at least one lay/non-affiliated member",
      "C) 7 members including chairperson and member secretary",
      "D) 8 members including at least one lay member, one independent member, and one non-scientific member"
    ],
    answer: 1,
    explanation: "For a 12-member IEC, quorum requires at least half (6 members). ICMR guidelines specifically require that among those present for quorum, there must be at least one lay member (non-scientist from outside the institution) and one independent member. This minimum compositional requirement cannot be waived."
  },
  {
    id: 8,
    question: "Which of the following best describes the legal expert's role in an IEC as per ICMR guidelines?",
    options: [
      "A) To provide legal defense for the institution in case of research-related litigation",
      "B) To review protocols for compliance with relevant laws, regulations, and to assess legal aspects of consent and liability",
      "C) To serve as the institutional legal counsel during regulatory inspections",
      "D) To draft contracts between the sponsor and the institution"
    ],
    answer: 1,
    explanation: "The legal expert in an IEC serves to review research protocols for compliance with applicable laws and regulations, assess the legal adequacy of informed consent documents, identify legal implications of study procedures, and advise on liability and rights of participants. They do not serve as institutional defense counsel."
  },
  {
    id: 9,
    question: "An IEC is reviewing a protocol involving pregnant women in their third trimester. The ICMR-mandated composition for this meeting should ideally include:",
    options: [
      "A) A gynecologist as an expert consultant, with standard quorum",
      "B) A patient advocate specifically for pregnant women",
      "C) A woman member as part of the standing committee",
      "D) At least one pediatrician and one neonatologist as co-opted members"
    ],
    answer: 2,
    explanation: "ICMR guidelines recommend that the IEC should have at least one woman member as part of its standing committee composition. When reviewing protocols involving vulnerable populations such as pregnant women, the presence of a woman member is particularly important. Additionally, relevant expert consultants may be co-opted for specific reviews."
  },
  {
    id: 10,
    question: "Under NDC&T Rules 2019, an IEC registration granted by CDSCO is valid for how long, and what happens if renewal is not sought in time?",
    options: [
      "A) 2 years; the IEC can continue reviewing non-drug trials but not drug trials",
      "B) 3 years; the IEC cannot legally review new drug clinical trial protocols after expiry",
      "C) 5 years; a grace period of 6 months is provided for renewal",
      "D) Indefinitely; only de-registration upon violation is applicable"
    ],
    answer: 1,
    explanation: "Under NDC&T Rules 2019, IEC registration with CDSCO is valid for 3 years. Upon expiry, the IEC loses legal standing to review new drug or clinical trial protocols until renewal is obtained. Continuing to approve trials without valid registration constitutes a regulatory violation and may render trial approvals invalid."
  },
  {
    id: 11,
    question: "A researcher submits a protocol for a survey-based study involving anonymous questionnaires on dietary habits in healthy adults with no sensitive information. Under ICMR guidelines, this protocol would MOST likely be categorized for:",
    options: [
      "A) Full board review due to involvement of human subjects",
      "B) Expedited review as it involves minimal risk",
      "C) Exemption from ethics review",
      "D) Administrative review only by Member Secretary"
    ],
    answer: 2,
    explanation: "ICMR guidelines recognize exemption categories for research involving minimal risk and no identifiable information. Anonymous surveys on non-sensitive topics in healthy adults typically qualify for exemption from full ethics review. However, this exemption determination itself must be made by the IEC (not the researcher), typically by a designated member or the Member Secretary."
  },
  {
    id: 12,
    question: "During continuing review of an ongoing clinical trial, the IEC discovers that the actual risk-benefit ratio has worsened compared to what was approved initially. The MOST appropriate IEC action is:",
    options: [
      "A) Issue a warning letter to the PI and continue the study",
      "B) Request a protocol amendment and allow enrollment to continue pending review",
      "C) Suspend the study immediately pending comprehensive review and possible termination",
      "D) Report to DCGI and await regulatory direction before taking action"
    ],
    answer: 2,
    explanation: "When continuing review reveals a substantially worsened risk-benefit ratio, the IEC has both the authority and ethical obligation to immediately suspend the study pending a comprehensive reassessment. Participant safety takes precedence. The IEC can subsequently decide on resumption, protocol modification, or termination. DCGI notification may also be required."
  },
  {
    id: 13,
    question: "A principal investigator reports a Serious Adverse Event (SAE) to the IEC. Under NDC&T Rules 2019, for a SAE that is both unexpected AND related to the investigational product, the IEC must receive the expedited report within:",
    options: [
      "A) 7 calendar days from the SAE occurrence",
      "B) 14 calendar days for fatal/life-threatening SAEs; 30 days for others",
      "C) 24 hours for fatal events; 72 hours for others",
      "D) 15 calendar days with a 7-day alert for fatal/life-threatening events"
    ],
    answer: 3,
    explanation: "Under NDC&T Rules 2019, for unexpected serious adverse drug reactions (USADRs) that are fatal or life-threatening, the sponsor must submit an expedited report to CDSCO within 7 calendar days (alert report), followed by a complete report within 15 days. The IEC must also be notified. For other unexpected related SAEs, the timeline is 15 days."
  },
  {
    id: 14,
    question: "An investigator makes a minor change to the patient information sheet (correcting a typographical error that does not affect content) without prior IEC approval. This constitutes:",
    options: [
      "A) A protocol violation requiring immediate study suspension",
      "B) A protocol deviation that should be reported to the IEC at continuing review",
      "C) An acceptable administrative change not requiring IEC notification",
      "D) A protocol amendment requiring full board review and re-consent"
    ],
    answer: 1,
    explanation: "A typographical correction that does not affect study content or participant safety constitutes a minor protocol deviation (not a violation). Such minor deviations should be documented and reported to the IEC, typically at the next continuing review. However, any change to consent documents that could affect participant understanding requires prior IEC approval."
  },
  {
    id: 15,
    question: "An IEC receives an amendment to add a new invasive procedure to an approved protocol. Under ICMR guidelines, this amendment requires:",
    options: [
      "A) Expedited review as it is a minor modification to an approved protocol",
      "B) Full board review and re-consent of currently enrolled participants",
      "C) Member Secretary approval with notification to full board at next meeting",
      "D) DCGI approval only, with IEC automatically updated"
    ],
    answer: 1,
    explanation: "Adding a new invasive procedure substantially increases the risk to participants and changes the nature of participation. This requires full board review by the IEC. Furthermore, currently enrolled participants must be re-consented with updated information about the new procedure, as their original consent did not cover this additional risk."
  },
  {
    id: 16,
    question: "A protocol deviation versus a protocol violation: which statement BEST distinguishes these under regulatory and ethical frameworks?",
    options: [
      "A) Deviations are intentional; violations are unintentional departures from the protocol",
      "B) Violations involve departure from GCP or regulations; deviations are minor unintentional departures that do not affect participant safety or data integrity",
      "C) Deviations require immediate IEC notification; violations only require annual reporting",
      "D) Both terms are interchangeable in the NDC&T Rules 2019"
    ],
    answer: 1,
    explanation: "Protocol violations are significant departures from the approved protocol, ICH-GCP, or applicable regulations that may affect participant safety, rights, or data integrity. Protocol deviations are minor, unintentional departures that do not substantially impact safety or data integrity. Violations typically require prompt IEC notification, while deviations may be reported at continuing review."
  },
  {
    id: 17,
    question: "An IEC is conducting the annual continuing review of a 3-year multi-site oncology trial. The appropriate frequency of continuing review as per ICMR guidelines should be based on:",
    options: [
      "A) Fixed annual review regardless of study risk level",
      "B) Risk-based frequency: high-risk studies more frequently, potentially every 6 months or less",
      "C) Sponsor-proposed schedule as agreed at initial approval",
      "D) Regulatory authority's directive only"
    ],
    answer: 1,
    explanation: "ICMR guidelines recommend that continuing review frequency should be risk-proportionate. While annual review is the standard minimum, high-risk studies (such as oncology trials with vulnerable participants) should be reviewed more frequently — every 6 months or even quarterly. The IEC determines the appropriate frequency based on risk at the time of initial approval."
  },
  {
    id: 18,
    question: "The IEC receives notification that a trial at their site has been suspended by DCGI due to safety concerns at another site in a multi-center trial. The IEC's MOST appropriate response is:",
    options: [
      "A) Continue the trial since suspension only applies to the other site",
      "B) Immediately suspend enrollment, notify enrolled participants of the suspension and its reasons, and await further guidance",
      "C) Conduct an emergency review within 7 days before taking any action",
      "D) Request a new protocol from the sponsor before making any decision"
    ],
    answer: 1,
    explanation: "When a regulatory authority suspends a trial due to safety concerns, even at another site, the IEC must immediately comply by suspending enrollment at their site. Enrolled participants must be informed about the suspension and its reasons as part of ongoing informed consent obligations. The IEC must also conduct an emergency review of the safety information."
  },
  {
    id: 19,
    question: "Which scenario BEST qualifies for expedited review by a designated IEC reviewer rather than full board review under ICMR guidelines?",
    options: [
      "A) A Phase II dose-escalation trial of a new anticancer drug",
      "B) A minimal-risk study collecting saliva samples for genetic markers from adult volunteers",
      "C) A study involving deception about the true purpose of the research",
      "D) Research involving prisoners as subjects"
    ],
    answer: 1,
    explanation: "Expedited review is appropriate for minimal-risk research or minor modifications to already-approved research. Collection of saliva (a non-invasive procedure) from competent adult volunteers for genetic markers, where risks are minimal, qualifies for expedited review. Phase II drug trials, deception studies, and research with prisoners (vulnerable population) all require full board review."
  },
  {
    id: 20,
    question: "An IEC is considering terminating an ongoing trial due to evidence of systematic non-compliance by the investigator. Before issuing a termination order, the IEC must:",
    options: [
      "A) Obtain DCGI approval for termination",
      "B) Provide the investigator an opportunity to respond, document the decision with reasons, and notify DCGI and the sponsor",
      "C) Wait for the Data Safety Monitoring Board (DSMB) recommendation",
      "D) Seek legal advice and institutional approval before acting"
    ],
    answer: 1,
    explanation: "Due process requires the IEC to give the investigator an opportunity to respond to the non-compliance findings. However, the IEC retains independent authority to terminate a trial to protect participants. The decision must be thoroughly documented with reasons, and both DCGI (as the regulatory authority) and the sponsor must be notified. The DSMB's role is advisory, not determinative for ethical violations."
  },
  {
    id: 21,
    question: "Under the New Drugs and Clinical Trials Rules 2019, the Drug Controller General of India (DCGI) has the authority to grant approval for a Phase I clinical trial of a new drug within what maximum timeframe after receiving a complete application?",
    options: [
      "A) 30 working days",
      "B) 30 calendar days",
      "C) 90 calendar days",
      "D) 12 weeks"
    ],
    answer: 1,
    explanation: "Under NDC&T Rules 2019, the DCGI must grant or refuse permission for Phase I clinical trials within 30 working days of receiving a complete application. This represents a significant improvement from the earlier Schedule Y provisions, which had longer and less defined timelines. Deemed permission applies if no decision is communicated within this period."
  },
  {
    id: 22,
    question: "The Clinical Trials Registry of India (CTRI) is hosted by which organization, and registration is mandatory before the initiation of which types of studies under Indian law?",
    options: [
      "A) ICMR; all clinical trials and observational studies",
      "B) ICMR's National Institute of Medical Statistics (NIMS); all interventional clinical trials",
      "C) CDSCO; all clinical trials involving new drugs only",
      "D) WHO; all Phase I-IV trials conducted in India"
    ],
    answer: 1,
    explanation: "CTRI is hosted by ICMR's National Institute of Medical Statistics (NIMS). Under NDC&T Rules 2019 and ICMR guidelines, registration in CTRI is mandatory for all interventional clinical trials before enrollment of the first participant. CTRI registration is also required for post-marketing surveillance studies and BAB studies. Non-registration is a regulatory violation."
  },
  {
    id: 23,
    question: "The evolution from Schedule Y (2005) to NDC&T Rules 2019 included which MAJOR regulatory change regarding the requirement for Phase I trials of new drugs?",
    options: [
      "A) India now requires Phase 0 microdosing studies before Phase I",
      "B) New drugs already approved in ICH countries can now begin Phase II/III directly in India, bypassing local Phase I, subject to DCGI approval",
      "C) All new molecules must complete Phase I in India regardless of global data",
      "D) Phase I trials are now prohibited for first-in-human studies in India"
    ],
    answer: 1,
    explanation: "A major change in NDC&T Rules 2019 is the provision for 'waiver of Phase I' for new drugs already approved and marketed in ICH countries. Sponsors can apply to DCGI to waive local Phase I trials and begin with Phase II or III in India, based on existing safety data. This aligns India with global development timelines while maintaining safety oversight."
  },
  {
    id: 24,
    question: "Under NDC&T Rules 2019, what is the regulatory definition of a 'new drug' in India?",
    options: [
      "A) Any drug not previously approved anywhere in the world",
      "B) Any drug not approved in India, a new salt/ester/analog of an approved drug, fixed dose combinations not previously approved, or a drug with a new indication/route/dosage form",
      "C) Only first-in-class molecules with novel mechanisms of action",
      "D) Any biologic or biosimilar product regardless of prior approval status"
    ],
    answer: 1,
    explanation: "Under NDC&T Rules 2019, 'new drug' has a broad definition encompassing: drugs not previously approved in India; new salts, esters, pro-drugs, or analogs of approved drugs; fixed-dose combinations not previously approved; drugs with new indications, routes of administration, or dosage forms; and certain biologics. This wide definition ensures comprehensive regulatory oversight."
  },
  {
    id: 25,
    question: "India's biosimilar regulatory framework, governed by guidelines from which authority, requires what type of comparative trial data for approval?",
    options: [
      "A) CDSCO alone; in vitro comparability data is sufficient",
      "B) Both CDSCO and DBT/RCGM; comprehensive comparability including Phase III clinical trials comparing efficacy/safety with the reference biologic",
      "C) ICMR alone; Phase II clinical data from Indian patients",
      "D) WHO prequalification is sufficient; no additional Indian trials required"
    ],
    answer: 1,
    explanation: "India's biosimilar approval requires dual oversight from CDSCO (under Ministry of Health) and DBT/RCGM (under Ministry of Science). The 'Guidelines on Similar Biologics' (2012, revised 2016) require comprehensive comparability data including physicochemical, biological, pre-clinical studies, and Phase I/III clinical trials comparing the biosimilar with the reference biologic using Indian patients."
  },
  {
    id: 26,
    question: "Under India's orphan drug framework (as per NDC&T Rules 2019), a disease qualifies as 'rare' if it affects fewer than how many persons per 10,000 population in India?",
    options: [
      "A) 1 per 10,000",
      "B) 5 per 10,000",
      "C) 10 per 10,000",
      "D) 2 per 10,000"
    ],
    answer: 1,
    explanation: "Under NDC&T Rules 2019, a condition is classified as a rare disease (qualifying for orphan drug status) if it affects fewer than 5 per 10,000 persons in the Indian population. This threshold differs from some other jurisdictions (e.g., US FDA defines rare as affecting fewer than 200,000 persons nationally). Orphan drug designation provides incentives including fee waivers and expedited review."
  },
  {
    id: 27,
    question: "A sponsor applies for accelerated approval of a new drug for a life-threatening condition under NDC&T Rules 2019. Which provision allows this and what key post-approval requirement applies?",
    options: [
      "A) Fast Track designation; no post-approval trials required",
      "B) Conditional marketing approval based on surrogate endpoints; post-approval confirmatory trials to verify clinical benefit are mandatory",
      "C) Priority review; adaptive trial design must be used",
      "D) Breakthrough therapy designation; only Phase II data is required"
    ],
    answer: 1,
    explanation: "NDC&T Rules 2019 provides for conditional marketing approval for drugs addressing unmet medical needs in life-threatening/serious conditions, based on surrogate or intermediate endpoints. The mandatory condition is conducting post-approval confirmatory trials to verify clinical benefit. If confirmatory trials fail to demonstrate benefit, the approval can be withdrawn."
  },
  {
    id: 28,
    question: "CDSCO conducts inspections of clinical trial sites. Under NDC&T Rules 2019, an inspector finding that patient consent was not properly obtained for enrolled subjects has the authority to:",
    options: [
      "A) Issue a warning only; actual sanctions require court order",
      "B) Recommend suspension to DCGI but cannot directly suspend",
      "C) Order immediate suspension of the trial at that site and initiate proceedings for cancellation of site permission",
      "D) Require re-consent of affected subjects but not suspend the trial"
    ],
    answer: 2,
    explanation: "Under NDC&T Rules 2019, CDSCO inspectors have significant powers. Finding absence of proper informed consent (a fundamental GCP violation) provides grounds for immediate suspension of the trial at the site and initiation of proceedings for cancellation of the site's permission to conduct the trial. This reflects the primacy of informed consent as a core regulatory requirement."
  },
  {
    id: 29,
    question: "The CTRI registration requirement introduced a new element requiring disclosure of 'secondary IDs.' This primarily serves which regulatory/ethical purpose?",
    options: [
      "A) To facilitate tax compliance for research funding",
      "B) To enable cross-referencing across national and international registries, preventing duplicate registration and selective reporting bias",
      "C) To identify the manufacturing company of investigational products",
      "D) To track researcher academic affiliations for conflict of interest"
    ],
    answer: 1,
    explanation: "Secondary IDs in CTRI registration refer to registration numbers in other national/international registries (e.g., ClinicalTrials.gov, ISRCTN). Requiring their disclosure enables cross-referencing to detect duplicate registrations of the same trial, track selective outcome reporting (publishing only favorable results), and ensure completeness of the global clinical trial evidence base."
  },
  {
    id: 30,
    question: "Under NDC&T Rules 2019, which statement accurately describes the regulatory status of audio-visual (AV) recording of the informed consent process in clinical trials?",
    options: [
      "A) AV recording is optional and only required for Phase I trials",
      "B) AV recording is mandatory for all clinical trials of new drugs to ensure transparency and verify consent quality",
      "C) AV recording is required only for illiterate participants",
      "D) AV recording replaced the witness requirement for all participants"
    ],
    answer: 1,
    explanation: "NDC&T Rules 2019 introduced the mandatory requirement for audio-visual recording of the informed consent process for all clinical trials of new drugs in India. This was a landmark provision introduced following concerns about consent quality. The AV recording must be archived and is subject to inspection by CDSCO to verify that consent was obtained properly."
  },
  {
    id: 31,
    question: "FDA 21 CFR Part 50 and Part 56 govern informed consent and IRBs respectively in the United States. Under the 'Common Rule' (45 CFR Part 46), which category of research is explicitly listed as exempt from full IRB review?",
    options: [
      "A) Research involving deception about study purpose with debriefing",
      "B) Research involving surveys of elected or appointed public officials about their public policies",
      "C) Phase I clinical trials of FDA-regulated drugs",
      "D) Research with pregnant women as participants"
    ],
    answer: 1,
    explanation: "Under the Common Rule (45 CFR 46.104), research involving surveys/interviews of elected or appointed public officials or candidates for public office about their public roles is explicitly exempt from IRB review, as there is no expectation of privacy regarding their public conduct. This is one of the 8 exempt categories in the revised Common Rule (2018)."
  },
  {
    id: 32,
    question: "CIOMS International Ethical Guidelines (2016) introduced significant updates regarding research in low- and middle-income countries (LMICs). Which provision specifically addresses the obligation of sponsors conducting research in LMICs?",
    options: [
      "A) All research must be conducted by local investigators only",
      "B) Sponsors must make effective interventions available to the host community after the trial and strengthen local research capacity",
      "C) Ethics review in LMICs can be waived if the sponsor's home country IRB approves",
      "D) LMICs must adopt ICH-GCP standards before any international trials can proceed"
    ],
    answer: 1,
    explanation: "CIOMS 2016 Guideline 2 explicitly addresses research in resource-limited settings, requiring that sponsors and researchers: ensure that effective interventions or other appropriate benefits are made available to the host community after the trial; take all reasonable steps to make the intervention accessible post-trial; and commit to building local research infrastructure and capacity."
  },
  {
    id: 33,
    question: "The Council of Europe's Oviedo Convention (Convention on Human Rights and Biomedicine, 1997) contains a provision unique among international research ethics instruments. This provision states that:",
    options: [
      "A) Commercial exploitation of the human body and its parts is prohibited",
      "B) Predictive genetic testing may only be performed for medical purposes",
      "C) The interests and welfare of the human being shall prevail over the sole interest of society or science",
      "D) All of the above are unique provisions of the Oviedo Convention"
    ],
    answer: 3,
    explanation: "The Oviedo Convention contains all three of these significant provisions: Article 21 prohibits financial gain from the human body and its parts; Article 12 restricts predictive genetic testing to medical purposes with genetic counseling; and Article 2 establishes the primacy of the individual over societal/scientific interests. These provisions collectively make the Oviedo Convention particularly protective of individual rights."
  },
  {
    id: 34,
    question: "The European Medicines Agency (EMA) Clinical Trials Regulation (EU No 536/2014) introduced a fundamentally different approach to multi-center ethics review compared to the previous Clinical Trials Directive (2001/20/EC). The key change is:",
    options: [
      "A) National regulatory authorities can now override ethics committee decisions",
      "B) A single application portal (CTIS) with a coordinated assessment where one Member State leads the review, reducing duplication across EU countries",
      "C) Ethics review is now entirely replaced by regulatory review for EMA-approved trials",
      "D) All trials in the EU must obtain central CHMP approval before national ethics committees review"
    ],
    answer: 1,
    explanation: "EU Clinical Trials Regulation 536/2014 (fully applicable from Jan 2022) introduced the Clinical Trials Information System (CTIS) for a single application covering multiple EU member states. One Member State serves as 'Reporting Member State' coordinating the scientific/regulatory assessment, while each Member State conducts its own ethics review. This streamlines the process compared to the previous requirement for separate full applications in each country."
  },
  {
    id: 35,
    question: "WHO's 2011 Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants identifies which as a core standard for research ethics committees (RECs)?",
    options: [
      "A) RECs must be composed exclusively of medical professionals",
      "B) RECs must have written standard operating procedures, adequate resources, and be independent from undue influence by the research community",
      "C) RECs must review all protocols within 14 days",
      "D) RECs in developing countries must be accredited by WHO before reviewing international research"
    ],
    answer: 1,
    explanation: "WHO's 2011 Standards for RECs identify independence from undue institutional or commercial influence as a core standard, alongside requirements for written SOPs, appropriate and diverse composition, adequate resources (staff, space, funding), documented decision-making processes, and mechanisms for ongoing oversight of approved research. These standards apply globally to all RECs reviewing health research."
  },
  {
    id: 36,
    question: "Under FDA 21 CFR Part 312, which type of IND application allows a researcher to conduct early exploratory studies prior to the traditional phase 1 study to determine whether a drug candidate merits further development?",
    options: [
      "A) Treatment IND",
      "B) Emergency IND",
      "C) Exploratory IND (Phase 0)",
      "D) Sponsor-Investigator IND"
    ],
    answer: 2,
    explanation: "The Exploratory IND (sometimes called Phase 0) was introduced by FDA in 2006 guidance to allow limited human studies using sub-therapeutic doses (microdosing) to gather early pharmacokinetic/pharmacodynamic data before committing to traditional Phase I trials. It requires less pre-clinical data than standard INDs and involves very limited human exposure, facilitating faster go/no-go decisions in drug development."
  },
  {
    id: 37,
    question: "UNESCO's 2005 Universal Declaration on Bioethics and Human Rights added principles to international research ethics not prominently featured in other instruments. Which principle is most uniquely emphasized in the UNESCO Declaration?",
    options: [
      "A) The principle of respect for human dignity and human rights",
      "B) The principle of social responsibility and health, emphasizing equitable access to benefits of scientific progress",
      "C) The principle of informed consent for research",
      "D) The principle of non-maleficence in medical practice"
    ],
    answer: 1,
    explanation: "While the UNESCO Declaration covers many principles, its unique contribution is the strong emphasis on social responsibility and health (Article 14), addressing equitable access to the benefits of scientific progress, reduction of poverty and illiteracy, and the special needs of developing countries. This social justice dimension was less explicitly articulated in earlier documents like the Belmont Report or Helsinki Declaration."
  },
  {
    id: 38,
    question: "The revised Common Rule (2018) in the United States introduced the concept of 'broad consent' for which specific purpose?",
    options: [
      "A) Allowing blanket consent for all future research without specifying procedures",
      "B) Allowing consent for future unspecified research using stored biospecimens and/or identifiable private information",
      "C) Replacing specific consent for all minimal risk research",
      "D) Enabling consent for research across multiple institutions under a single IRB"
    ],
    answer: 1,
    explanation: "The 2018 revised Common Rule introduced 'broad consent' as a new mechanism specifically for the storage and future unspecified research use of identifiable biospecimens and private information. This is distinct from full informed consent (which is specific about study procedures) and from a waiver of consent. Broad consent must include specific required elements about the types of research that may be conducted."
  },
  {
    id: 39,
    question: "CIOMS Guideline 7 (2016) addresses community engagement in research. Under this guideline, what is the primary obligation of researchers when research is planned in communities with limited capacity to protect their own interests?",
    options: [
      "A) To obtain government approval instead of community consent",
      "B) To engage community representatives throughout the research process, from design to dissemination, and to share benefits with the community",
      "C) To provide financial compensation to community leaders for their cooperation",
      "D) To establish a community advisory board that has veto power over research decisions"
    ],
    answer: 1,
    explanation: "CIOMS Guideline 7 requires active community engagement throughout the research process in vulnerable communities. This includes consulting community representatives during design, ensuring cultural appropriateness, sharing research results with the community, and ensuring the community benefits from the research. While a Community Advisory Board is recommended, it is advisory rather than having veto power."
  },
  {
    id: 40,
    question: "ICH E6(R2) Good Clinical Practice guideline (2016 revision) introduced risk-based monitoring as a key quality management approach. A central IRB/IEC concern about risk-based monitoring is:",
    options: [
      "A) It reduces participant safety since fewer site visits occur",
      "B) The IRB must approve the specific risk-based monitoring plan as part of protocol review",
      "C) Risk-based approaches may deprioritize participant protection in favor of data quality",
      "D) Remote monitoring violates patient privacy regulations in most jurisdictions"
    ],
    answer: 1,
    explanation: "ICH E6(R2) requires that the risk-based monitoring approach be described in the monitoring plan, and that this plan forms part of the overall trial protocol or operational plan subject to review. The IRB/IEC should receive and review the monitoring plan to ensure participant safety and data integrity safeguards are adequate. This represents an important intersection between GCP compliance and ethics oversight."
  },
  {
    id: 41,
    question: "In a multi-site clinical trial involving 8 hospitals across 4 states in India, the sponsor proposes using a single Central Ethics Committee (CEC) review. Under current Indian regulatory framework, what is the regulatory status of CEC review?",
    options: [
      "A) CEC review is mandated by NDC&T Rules 2019 for all multi-site trials",
      "B) CEC review is recognized under ICMR guidelines but local IEC approval is still required at each site, with the CEC providing an overarching review",
      "C) CEC review is not recognized in India; each site must complete independent full review",
      "D) CEC review replaces local IEC review if DCGI specifically approves this arrangement"
    ],
    answer: 1,
    explanation: "ICMR guidelines recognize the concept of a Central/Apex Ethics Committee for multi-site trials, which provides overarching scientific and ethical review. However, each participating site's local IEC must still review and approve the trial for local context, feasibility, and site-specific concerns. The local IEC can rely on the CEC's scientific review but retains authority for local approval. NDC&T Rules 2019 do not yet fully codify mandatory CEC arrangements."
  },
  {
    id: 42,
    question: "An IEC at Site B is reviewing a multi-center trial already approved by Site A's IEC (designated as the lead). Site B's IEC identifies a significant ethical concern about the consent process that Site A's IEC apparently did not address. The principle of 'reciprocity' in ethics review would mean:",
    options: [
      "A) Site B must accept Site A's review without modification as reciprocity is binding",
      "B) Site B can raise the concern and require modifications as a condition of local approval, irrespective of Site A's determination",
      "C) Site B must defer to Site A's IEC as the lead committee",
      "D) Site B should report to DCGI rather than modifying the already-approved protocol"
    ],
    answer: 1,
    explanation: "While reciprocity of ethics review (accepting another committee's determinations) is encouraged for efficiency in multi-site research, it is never binding in ethical matters. Each IEC retains independent authority to protect participants at its site. Site B's IEC can and must raise ethical concerns, require modifications specific to its approval, and independently determine the conditions of local approval, regardless of the lead committee's decisions."
  },
  {
    id: 43,
    question: "SIDCER (Strategic Initiative for Developing Capacity in Ethical Review) is an accreditation program for ethics committees. Accreditation by SIDCER/FERCAP primarily signifies that:",
    options: [
      "A) The IEC has received WHO endorsement for conducting international research",
      "B) The IEC has demonstrated operational competence through a peer-review process evaluating SOPs, documentation, composition, and meeting conduct",
      "C) The IEC is exempt from CDSCO registration requirements",
      "D) The IEC has met ISO 9001 quality management standards"
    ],
    answer: 1,
    explanation: "SIDCER (Strategic Initiative for Developing Capacity in Ethical Review) operates through regional forums like FERCAP (Forum for Ethical Review Committees in the Asian and Western Pacific region). SIDCER accreditation involves a peer review process (Recognition Program) that evaluates the IEC's SOPs, administrative competence, meeting conduct, documentation, composition diversity, and decision-making quality. It is a quality indicator, not a regulatory requirement, and does not replace CDSCO registration."
  },
  {
    id: 44,
    question: "A conflict of interest (COI) situation arises when an IEC member's spouse is a co-investigator on a protocol under review. Under best practice guidelines, the MOST comprehensive COI management approach requires:",
    options: [
      "A) The member should abstain from voting only",
      "B) The member must disclose the COI, recuse from discussion and voting, and leave the room; the IEC should document this in minutes",
      "C) The member should disclose the COI but can remain to provide scientific expertise",
      "D) The COI should be managed by having another member 'pair off' in a blind voting arrangement"
    ],
    answer: 1,
    explanation: "Comprehensive COI management for IEC members with direct or indirect financial/personal conflicts requires: mandatory disclosure to the IEC Chair; complete recusal including leaving the room during discussion and voting; documentation of the COI and recusal in meeting minutes; and the quorum count should be adjusted for the recused member. The IEC should have a written COI policy covering both direct and indirect conflicts (e.g., spouse as co-investigator)."
  },
  {
    id: 45,
    question: "AAHRPP (Association for the Accreditation of Human Research Protection Programs) accreditation differs from SIDCER/FERCAP accreditation in that AAHRPP:",
    options: [
      "A) Only accredits IRBs/IECs, not entire institutional research programs",
      "B) Accredits the entire Human Research Protection Program (HRPP) of an institution, encompassing the IRB, investigators, administration, and institutional policies",
      "C) Is limited to US institutions only",
      "D) Focuses exclusively on clinical drug trials, not other types of human research"
    ],
    answer: 1,
    explanation: "AAHRPP accreditation is uniquely comprehensive in that it evaluates the entire Human Research Protection Program of an institution — not just the IRB/IEC in isolation. This includes institutional leadership commitment, investigator training and compliance, IRB operations, administrative support systems, and organizational culture of research ethics. AAHRPP has also accredited non-US institutions, making it internationally applicable."
  },
  {
    id: 46,
    question: "Research in emergency settings (e.g., cardiac arrest) often cannot obtain prospective informed consent. Under ICMR guidelines and international standards, what mechanism allows such research to proceed ethically?",
    options: [
      "A) Emergency research is prohibited without prior consent; no exceptions exist",
      "B) Exception from Informed Consent (EFIC) or waiver of consent, subject to strict criteria including: life-threatening condition, no available treatment, potential benefit from research, community consultation and public disclosure",
      "C) Consent obtained from hospital administration is sufficient for emergency research",
      "D) Delayed consent from family members after enrollment is universally accepted without prior IEC-specific review"
    ],
    answer: 1,
    explanation: "Emergency research can proceed under a waiver/exception from informed consent (EFIC) under strict conditions: the condition must be life-threatening; no satisfactory alternative treatment exists; the research could not practicably be conducted otherwise; potential for direct benefit; the IEC must specifically review and approve the waiver; community consultation and public disclosure must occur before the study; and a LAR/family member must be sought for consent as soon as practicable after enrollment."
  },
  {
    id: 47,
    question: "An IEC conducting an audit of an ongoing trial finds that the investigator has been sharing coded participant data with a collaborating international institution without IEC or DCGI approval. Under the Personal Data Protection considerations and research ethics, this primarily constitutes a violation of:",
    options: [
      "A) Financial compliance regulations",
      "B) Data governance and privacy protections — the cross-border transfer of personal health data without appropriate authorization violates participant confidentiality and applicable data protection requirements",
      "C) IP rights of the sponsoring institution",
      "D) GCP requirements for audit trails only"
    ],
    answer: 1,
    explanation: "Unauthorized cross-border data transfer violates multiple frameworks: participant confidentiality commitments in the informed consent; data governance provisions in the approved protocol; applicable data protection regulations (India's DPDP Act 2023 and relevant jurisdiction's laws); and ICH-GCP requirements for protocol compliance. The IEC has authority to suspend the study pending investigation and must notify DCGI of this compliance breach."
  },
  {
    id: 48,
    question: "A hospital establishes a biobank to store tissue samples from surgical patients for future research. Which of the following governance structures is MOST consistent with ICMR's National Guidelines for Biobanking (2021)?",
    options: [
      "A) Institutional ethics committee alone governs all biobank activities",
      "B) A dedicated biobank governance committee with scientific, ethics, legal, and community representation, operating under an overarching IEC with policies for access, consent, return of results, and benefit sharing",
      "C) The pathology department manages the biobank; IEC reviews are only needed for specific research protocols using the samples",
      "D) Biobank governance requires only DCGI registration without additional IEC involvement"
    ],
    answer: 1,
    explanation: "ICMR's Biobanking Guidelines 2021 require a multi-layered governance structure: a dedicated biobank governance/oversight committee (distinct from but working with the IEC) with diverse membership including scientific, ethical, legal, and community representation; a scientific advisory committee; clear policies for sample access, tiered consent, data sharing, return of incidental findings, benefit sharing, and benefit to donors. The IEC provides ethical oversight while the governance committee manages operations."
  },
  {
    id: 49,
    question: "Under ICMR guidelines on data sharing, when researchers in India complete a study funded by public funds (e.g., ICMR or DST grant), what is their data sharing obligation?",
    options: [
      "A) Data sharing is voluntary and at the discretion of the principal investigator",
      "B) De-identified individual participant data must be deposited in a designated data repository within a specified timeframe after primary publication, subject to appropriate access controls",
      "C) Data must be shared only with ICMR and cannot be shared internationally",
      "D) Summary statistics must be published; individual-level data need never be shared"
    ],
    answer: 1,
    explanation: "ICMR data sharing guidelines for publicly funded research require that de-identified individual participant data be deposited in appropriate repositories (such as ICMR's own data repository or internationally recognized repositories) after a defined embargo period following primary publication. Access controls must protect participant privacy. This promotes scientific transparency and secondary research while maintaining ethical safeguards."
  },
  {
    id: 50,
    question: "An IEC receives a complaint from a research participant alleging that study-related injury compensation was denied by the sponsor. Under NDC&T Rules 2019, what is the IEC's authority and the sponsor's obligation regarding compensation for research-related injury?",
    options: [
      "A) Compensation is a civil matter; the IEC has no jurisdiction",
      "B) The IEC has oversight authority; sponsors are legally mandated to provide free medical treatment and financial compensation for study-related injury/death as per a defined formula, and the IEC can investigate and take action including study suspension for non-compliance",
      "C) Compensation is provided only if the investigator is found negligent in a court of law",
      "D) The IEC can only recommend compensation; the DCGI alone has enforcement authority"
    ],
    answer: 1,
    explanation: "NDC&T Rules 2019 (Rule 17 and associated provisions) create a mandatory legal obligation for sponsors to provide free medical treatment for the duration of the trial and financial compensation for study-related injury or death. The compensation formula is defined in the Rules. The IEC has oversight authority to investigate complaints, and non-compliance with compensation obligations can lead to IEC suspension of the trial and DCGI regulatory action. This was a landmark change from pre-2019 regulations."
  }
]

export default questions

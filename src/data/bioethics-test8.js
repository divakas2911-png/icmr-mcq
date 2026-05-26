const questions = [
  {
    id: 1,
    question: "A hospital deploys an AI diagnostic algorithm trained predominantly on data from high-income, urban populations. When applied to rural, lower-income patients, it systematically underperforms. Which ethical principle is MOST directly violated, and what is the appropriate corrective action?",
    options: [
      "Beneficence; retrain the model with diverse data and conduct prospective validation across demographic subgroups before deployment",
      "Autonomy; obtain additional informed consent from rural patients before using the algorithm",
      "Justice; discontinue all AI diagnostics until universal coverage is achieved",
      "Non-maleficence; report the algorithm to the national regulator and impose an immediate moratorium"
    ],
    answer: 0,
    explanation: "Algorithmic bias violates Justice (fair distribution of benefits and burdens) and Beneficence (failing to provide equitable benefit). The corrective path requires retraining on representative data and rigorous subgroup validation — not a blanket moratorium or merely additional consent. Fairness-aware machine learning mandates that training data reflect the deployment population."
  },
  {
    id: 2,
    question: "A precision oncology program proposes using whole-genome sequencing (WGS) for all cancer patients. The data would be stored in a national biobank accessible to commercial pharmaceutical companies under a data-sharing agreement. A patient refuses commercial access but consents to academic research. Which framework BEST governs this scenario?",
    options: [
      "Broad consent with dynamic consent override, tiered access governance, and an opt-out mechanism for commercial use",
      "Full waiver of consent because de-identified genomic data carries no privacy risk",
      "Single blanket consent covering all future uses, as re-consent is operationally impractical",
      "Withdrawal of the patient from the program because partial consent is ethically impermissible"
    ],
    answer: 0,
    explanation: "Tiered/dynamic consent frameworks allow participants to specify granular permissions (e.g., academic vs. commercial use). The Global Alliance for Genomics and Health (GA4GH) and OECD guidelines endorse layered consent with robust governance structures. Genomic data is never truly de-identified, making blanket waiver unjustifiable. Excluding the patient for exercising autonomy is coercive."
  },
  {
    id: 3,
    question: "He Jiankui edited CCR5 in human embryos that were subsequently born as twin girls (Lulu and Nana) in 2018, ostensibly to confer HIV resistance. Which combination of ethical violations BEST characterises this case?",
    options: [
      "Violation of the germline editing moratorium, inadequate informed consent (parents misled about risks vs. benefits), lack of medical necessity, absence of independent ethics oversight, and creation of heritable changes in the human germline",
      "Violation of beneficence only, because HIV resistance is a legitimate therapeutic goal",
      "Violation of justice only, because access to gene editing is inequitable",
      "Primarily a regulatory violation with no distinct ethical dimension beyond non-compliance"
    ],
    answer: 0,
    explanation: "The He Jiankui case is considered the most egregious modern bioethics violation: (1) international consensus prohibited heritable germline editing; (2) parents were not adequately informed of speculative benefits vs. unknown multigenerational risks; (3) no medical necessity existed (IVF with sperm-washing prevents HIV transmission); (4) a sham ethics committee approval was obtained; and (5) heritable modifications affect future non-consenting persons, violating their autonomy."
  },
  {
    id: 4,
    question: "An AI clinical decision-support system (CDSS) recommends withholding a costly treatment from a 70-year-old patient based on a composite 'social value score' that includes employment status and years of productive life remaining. The physician follows the recommendation. This scenario MOST directly raises which bioethical concern?",
    options: [
      "Ageism and discriminatory resource allocation encoded in algorithmic values, violating equal dignity and non-discrimination principles",
      "Breach of confidentiality, because the algorithm accessed social determinants of health",
      "Violation of the research-practice distinction, because the CDSS is experimental",
      "Informed consent failure, because the patient was not told about the algorithm"
    ],
    answer: 0,
    explanation: "Assigning 'social value scores' based on age, employment, or productivity is a form of ageist and discriminatory resource allocation condemned by bioethics frameworks including UNESCO's Universal Declaration on Bioethics and Human Rights. While informed consent about algorithmic use is also important, the MOST direct violation is embedding discriminatory values in clinical decisions, which contravenes the principle of equal dignity."
  },
  {
    id: 5,
    question: "A researcher proposes using large-scale social media data (without individual consent) to predict mental health crises in populations. The data are publicly posted but users had no expectation of research use. Under the concept of 'contextual integrity' (Nissenbaum), this is ethically problematic because:",
    options: [
      "Information flows appropriately when they match the norms of the context in which data were originally shared; social media posts shared for social networking do not carry implicit consent to psychiatric surveillance or research profiling",
      "Any publicly available data may be freely used for research, as privacy is forfeited upon public posting",
      "The research violates HIPAA because mental health is a protected category",
      "Big data research is exempt from ethics review under the Common Rule's exclusion criteria"
    ],
    answer: 0,
    explanation: "Helen Nissenbaum's contextual integrity principle holds that privacy is violated when information flows outside the norms of its original context. Users posting on social media consent to social interaction, not psychiatric profiling or research surveillance. This is ethically distinct from HIPAA (which covers healthcare data) and does not constitute a blanket bar, but requires justification, minimisation, and often a privacy impact assessment."
  },
  {
    id: 6,
    question: "A biotech company offers 'genetic enhancement' services — selecting embryos for high intelligence polygenic scores rather than disease prevention. Critics argue this crosses the therapy-enhancement boundary. Which philosophical position MOST strongly supports prohibiting such enhancement?",
    options: [
      "Habermas's argument that genetic programming violates the child's open future and constitutes a paternalistic colonisation of identity by parental preferences",
      "Utilitarian calculus that enhancement will always reduce aggregate welfare",
      "Libertarian principle that all genetic choices by parents are protected reproductive autonomy",
      "Rawlsian justice, which mandates equal distribution of all genetic advantages"
    ],
    answer: 0,
    explanation: "Jurgen Habermas in 'The Future of Human Nature' argues that instrumentalising the child's genome for parental preferences violates the child's right to an open future and their self-understanding as an author of their own life. This is distinct from therapy (which restores normal functioning) and constitutes asymmetric colonisation of identity. Utilitarianism could support or oppose enhancement depending on outcomes; libertarianism typically permits it; Rawlsianism concerns distributional justice rather than prohibition."
  },
  {
    id: 7,
    question: "A transhumanist organisation advocates for cognitive enhancement using brain-computer interfaces (BCIs) to achieve 'post-human' cognitive capacities. The WHO Neurorights Framework (2020) responds to this scenario by emphasising protection of which specific rights?",
    options: [
      "Mental privacy, cognitive liberty, mental integrity, psychological continuity, and equal access to cognitive enhancement",
      "Right to life, freedom of expression, and property rights over neural data",
      "Right to healthcare access and non-discrimination based on disability",
      "Informed consent and research participant protections under the Declaration of Helsinki"
    ],
    answer: 0,
    explanation: "The Morningside Group's Neurorights Framework (2020), adopted conceptually by Chile's constitutional amendment, identifies five core neurorights: (1) mental privacy (protection of neural data), (2) cognitive liberty (right to use or refuse neurotechnology), (3) mental integrity (protection from harmful neural manipulation), (4) psychological continuity (protection of personal identity), and (5) equal access to cognitive enhancement to prevent neurodivide."
  },
  {
    id: 8,
    question: "An ML algorithm used for predictive policing is found to disproportionately flag individuals from marginalised communities for health-related social risk interventions. A bioethicist is asked to evaluate this. Which ethical framework is MOST appropriate for this analysis?",
    options: [
      "Structural ethics / ethics of justice, examining how systemic inequities are reproduced and amplified by algorithmic systems, combined with participatory design principles requiring community involvement",
      "Principlism (Beauchamp & Childress four principles) applied to individual clinical encounters",
      "Virtue ethics focused on the character of the algorithm designers",
      "Contractarian ethics requiring a social contract renegotiation before any algorithm is deployed"
    ],
    answer: 0,
    explanation: "Predictive algorithmic systems in health-adjacent domains require structural and justice-oriented analysis because they encode and amplify existing social inequities (race, class, geography). Principlism is designed for individual clinical encounters. A structural ethics approach examines power, systemic bias, and historical injustice, and mandates participatory design with affected communities — consistent with WHO's Guidance on Ethics and Governance of AI for Health (2021)."
  },
  {
    id: 9,
    question: "The concept of 'epistemic injustice' (Miranda Fricker) is MOST relevant to which scenario in AI healthcare ethics?",
    options: [
      "A patient's self-reported symptoms are systematically discounted by an AI triage system because the training data under-represented patients of that demographic, leading to delayed diagnosis",
      "A researcher's AI paper is rejected by a journal due to methodological disagreement",
      "A hospital's AI vendor refuses to share proprietary model weights with clinicians",
      "An AI system recommends a treatment that the patient refuses based on cultural beliefs"
    ],
    answer: 0,
    explanation: "Epistemic injustice (Fricker) involves wronging someone in their capacity as a knower — specifically 'testimonial injustice' when a speaker's credibility is deflated due to identity prejudice. When an AI system trained on biased data systematically undervalues symptoms reported by marginalised patients, it encodes and perpetuates testimonial injustice at scale, leading to diagnostic disparities. This is distinct from proprietary secrecy or treatment refusal."
  },
  {
    id: 10,
    question: "A pharmaceutical company uses federated learning to train a drug discovery model across hospital datasets without raw data leaving each site. They claim this fully resolves all privacy concerns. A bioethicist would MOST accurately respond that:",
    options: [
      "Federated learning reduces but does not eliminate privacy risks — model gradients can leak information about training data through membership inference and gradient inversion attacks, and governance questions about data use, consent, and benefit sharing remain",
      "Federated learning is ethically equivalent to full anonymisation and requires no additional ethical oversight",
      "The privacy concern is entirely resolved because no identifiable data is shared across institutions",
      "Federated learning is ethically impermissible because patients never consented to commercial drug discovery"
    ],
    answer: 0,
    explanation: "While federated learning is a privacy-enhancing technology, it is not privacy-absolute. Research has demonstrated membership inference attacks and gradient inversion that can reconstruct training samples. Moreover, ethical analysis must address: who benefits commercially from models trained on patient data, whether patients received fair benefit sharing, and whether governance structures ensure accountability — concerns not resolved by technical architecture alone."
  },
  {
    id: 11,
    question: "A 35-year-old woman undergoes BRCA1/2 testing and tests positive. Her sister refuses genetic testing. The treating geneticist believes the sister is at 50% risk and that knowledge would enable life-saving prophylactic surgery. The ethical principle most directly in tension here is:",
    options: [
      "Patient confidentiality and autonomy (proband's right to privacy) vs. duty to warn (at-risk relative's right to know and potential harm prevention), a conflict unresolved by a single overriding principle",
      "Beneficence vs. non-maleficence, resolved by always disclosing to relatives",
      "Justice vs. autonomy, resolved by the relative's right to refuse information",
      "Research ethics vs. clinical ethics, because genetic information is research data"
    ],
    answer: 0,
    explanation: "The duty-to-warn in genetics creates a fundamental tension between the proband's confidentiality/autonomy and the relative's interest in potentially life-saving information. Landmark cases (ABC v St George's NHS Trust, UK 2020) and guidelines from ACMG and ESHG take divergent positions. Most frameworks endorse: (1) encouraging the proband to disclose, (2) mediating through family disclosure tools, and only (3) considering breach in extreme cases of serious, preventable harm — there is no single overriding principle."
  },
  {
    id: 12,
    question: "Whole exome sequencing of a child for a rare disease incidentally reveals a pathogenic variant in a cancer susceptibility gene (BRCA2) that will only be clinically relevant in adulthood. The ACMG's approach to returning such incidental findings is BEST described as:",
    options: [
      "A minimum list of actionable secondary findings (ACMG SF list) should be returned regardless of the indication for testing, but childhood-onset testing for adult-onset conditions requires careful consideration of the child's future autonomy",
      "All incidental findings must be returned immediately to parents without restriction",
      "No incidental findings should be returned unless specifically requested in advance",
      "Return of adult-onset findings in children is always prohibited under the principle of respect for the child's future autonomy"
    ],
    answer: 0,
    explanation: "The ACMG Secondary Findings (SF) v3.2 list recommends returning medically actionable variants even when not the indication for testing. However, for children, there is a recognised tension: returning adult-onset findings (like BRCA2) before the child can consent may undermine their future autonomy and right not to know. Most guidelines (ACMG, ESHG) recommend nuanced case-by-case analysis considering actionability in childhood vs. deferred return at adulthood."
  },
  {
    id: 13,
    question: "A direct-to-consumer (DTC) genetic testing company reports to a customer that they have a 'high genetic risk' for Alzheimer's disease based on APOE e4 homozygosity. The customer, with no clinical support, becomes severely anxious and makes major life decisions. Which ethical concern is MOST salient?",
    options: [
      "Psychological harm from probabilistic risk information delivered without pre- and post-test genetic counselling, compounded by limited consumer understanding of penetrance, environmental modifiers, and the difference between risk factor and diagnosis",
      "Breach of medical privacy because APOE genotype is a protected health category",
      "Commercial exploitation of intellectual property because APOE genotyping is patented",
      "Research ethics violation because DTC companies use customer data for undisclosed research"
    ],
    answer: 0,
    explanation: "The APOE e4 allele is a risk modifier, not a deterministic disease predictor (even homozygotes have ~50-60% lifetime risk, not certainty). DTC companies often fail to provide mandatory genetic counselling, context about penetrance, environmental factors, or emotional support frameworks. The Presidential Commission for the Study of Bioethical Issues (2012) and Nuffield Council on Bioethics specifically flagged psychological harm and uninformed decision-making as primary DTC ethics concerns."
  },
  {
    id: 14,
    question: "The Genetic Information Nondiscrimination Act (GINA, 2008) in the United States has a significant limitation that a bioethicist would flag in a policy discussion. This limitation is:",
    options: [
      "GINA does not protect against discrimination by life insurers, disability insurers, or long-term care insurers — only health insurers and employers — leaving genomic data vulnerable to actuarial discrimination in non-health insurance contexts",
      "GINA applies only to research participants, not to clinical patients undergoing diagnostic testing",
      "GINA prohibits all uses of genetic information in medical decision-making, including treatment selection",
      "GINA provides no protection for family history information, which is not considered genetic information under the Act"
    ],
    answer: 0,
    explanation: "GINA's critical gap is its exclusion of life insurance, disability insurance, and long-term care insurance industries from its protections. Individuals who test positive for disease-associated variants may face discrimination in these domains. Furthermore, GINA does not apply to employers with fewer than 15 employees or to military personnel. This gap is a major policy concern in the era of whole-genome sequencing."
  },
  {
    id: 15,
    question: "A national biobank collected samples in the 1990s under 'blanket consent' for 'future medical research.' A pharmaceutical company now proposes using these samples to develop a blockbuster drug worth billions. Participants receive no benefit. This scenario invokes which specific ethical concept?",
    options: [
      "Benefit sharing — the principle (articulated in the Convention on Biological Diversity, Nagoya Protocol, and HUGO ethics guidelines) that communities and individuals whose biological materials contribute to commercial gains should receive equitable benefit",
      "Informed consent failure, because the original consent was too vague to cover commercial use",
      "Property rights — participants own their samples and are entitled to royalties under common law",
      "Research exploitation — all commercial use of biobank samples is inherently unethical"
    ],
    answer: 0,
    explanation: "While consent adequacy is debatable, the MOST specific and directly applicable concept is benefit sharing. HUGO's Statement on Benefit Sharing (2000), the Nagoya Protocol on Access and Benefit Sharing, and the Belmont-successor frameworks all recognise that communities contributing biological resources to commercially valuable research should receive equitable returns (e.g., capacity building, healthcare access, community health programs). The Henrietta Lacks case catalysed awareness of this issue in the U.S. context."
  },
  {
    id: 16,
    question: "In the landmark case Moore v. Regents of University of California (1990), the California Supreme Court ruled that John Moore did not retain property rights in his excised spleen cells. The primary ethical implication of this ruling for biobanking is:",
    options: [
      "It established that bodily tissues become research property upon removal, incentivising a consent-based (rather than property-based) framework for protecting donor interests, but left benefit sharing and transparency obligations legally underspecified",
      "It confirmed that informed consent is unnecessary for discarded biological materials",
      "It mandated that all research participants receive royalties from commercialised products derived from their tissues",
      "It prohibited commercialisation of human biological materials in California"
    ],
    answer: 0,
    explanation: "Moore v. Regents ruled that excised cells are not personal property, preventing a property-law remedy but the court held researchers must disclose personal interests in tissue. The ruling effectively shifted the ethical framework to consent and transparency rather than property rights, while leaving benefit sharing largely unaddressed. This created the ongoing ethical gap that frameworks like the Nagoya Protocol and HUGO guidelines attempt to fill."
  },
  {
    id: 17,
    question: "Gene patenting became highly controversial with Myriad Genetics' patents on BRCA1/2. The US Supreme Court in Association for Molecular Pathology v. Myriad Genetics (2013) ruled that:",
    options: [
      "Naturally occurring DNA sequences (isolated genomic DNA) are not patentable subject matter, but complementary DNA (cDNA) synthesised from mRNA may be patented because it is not naturally occurring",
      "All genetic sequences are patentable if they are isolated and purified from natural sources",
      "Gene patents are permissible only when the gene is associated with a clinical test with demonstrated medical utility",
      "Gene patents violate the First Amendment because they restrict scientific communication"
    ],
    answer: 0,
    explanation: "The Supreme Court's unanimous 2013 decision held that isolated genomic DNA is a product of nature and therefore unpatentable under 35 U.S.C. § 101. However, cDNA (which lacks introns and is not found in nature) retains patentability. This ruling significantly expanded access to BRCA testing, reducing Myriad's monopoly, and has broad implications for genomic medicine and the ethics of commodifying human genetic information."
  },
  {
    id: 18,
    question: "Cascade genetic testing involves identifying and testing at-risk relatives after a proband is found to carry a pathogenic variant. The primary ethical challenge in implementing population-wide cascade testing programs is:",
    options: [
      "Balancing the public health benefit of early disease detection with individual autonomy (right not to know), privacy, potential insurance discrimination, and the psychological burden of unsolicited information delivered to relatives who may not have sought testing",
      "The technical difficulty of accurately identifying distant relatives in modern family structures",
      "The cost-effectiveness threshold, which must exceed standard healthcare benchmarks before implementation",
      "Jurisdictional conflicts between national and regional genetic testing regulations"
    ],
    answer: 0,
    explanation: "Cascade testing programs create a fundamental tension between population health utility (identifying individuals at risk for preventable conditions) and individual rights. Relatives have the right not to know their genetic status, but may simultaneously be harmed by ignorance. Insurance discrimination (beyond GINA's coverage), psychological distress, and family communication dynamics all complicate implementation. The Nuffield Council on Bioethics' 2018 report on 'The Collection, Linking and Use of Data in Biomedical Research and Health Care' addresses these tensions."
  },
  {
    id: 19,
    question: "Preimplantation genetic diagnosis (PGD) is used to select embryos free of a hereditary deafness variant. The Deaf community argues this practice is ethically objectionable. Their argument is BEST characterised as:",
    options: [
      "Expressivist objection — selecting against deafness expresses a negative value judgment about deaf people's lives and the worth of disabled existence, potentially reinforcing social stigma and unjust discrimination",
      "Violation of the embryo's right to life, equivalent to abortion",
      "Violation of parental autonomy, because parents should be free to choose any trait",
      "Slippery slope to eugenics in all cases of PGD regardless of condition severity"
    ],
    answer: 0,
    explanation: "The expressivist objection (articulated by Adrienne Asch and others) holds that selecting against disability sends a message that disabled lives are less worth living, thereby devaluing existing disabled persons. This is distinct from embryo personhood arguments or parental autonomy defences. Critics of the expressivist objection note that preventing suffering is not equivalent to devaluing persons with that condition. This debate is central to disability bioethics and remains unresolved."
  },
  {
    id: 20,
    question: "The concept of 'genomic sovereignty' has been invoked by indigenous communities opposing inclusion in global biobank initiatives. This concept holds that:",
    options: [
      "Indigenous peoples have collective rights to control, govern, and determine the use of their genomic data as cultural and communal heritage, distinct from individual consent frameworks derived from Western liberal bioethics",
      "Governments own the genomic data of their citizens as a national resource",
      "Pharmaceutical companies have sovereign immunity from bioethics review when operating internationally",
      "Genomic data may only be collected by researchers who are citizens of the country where data is collected"
    ],
    answer: 0,
    explanation: "Genomic sovereignty reflects indigenous rights frameworks (UN Declaration on the Rights of Indigenous Peoples) that recognise collective rights to genetic heritage distinct from individual Western-liberal consent models. Examples include the Havasupai Tribe case (ASU, 2004) where tribe members consented to diabetes research but samples were used for other purposes — leading to a landmark settlement and adoption of community-level consent protocols. This framework requires Free, Prior, and Informed Consent (FPIC) at community levels."
  },
  {
    id: 21,
    question: "During a severe influenza pandemic, a government mandates quarantine for all individuals who test positive, including those who are asymptomatic. Under the Siracusa Principles on the Limitation and Derogation Provisions of the ICCPR (1984), such restrictions on liberty are permissible ONLY if they meet which cumulative criteria?",
    options: [
      "The restrictions must be: (1) provided for and carried out in accordance with law; (2) in the interest of a legitimate objective; (3) strictly necessary in a democratic society; (4) the least restrictive and intrusive means available; and (5) not arbitrary, unreasonable, or discriminatory in application",
      "The restrictions are automatically permissible during a declared public health emergency without further justification",
      "The restrictions require only a majority parliamentary vote and a 30-day sunset clause",
      "The restrictions are permissible only if the case fatality rate exceeds 1% of the infected population"
    ],
    answer: 0,
    explanation: "The Siracusa Principles (1984) are the authoritative international law framework for rights limitations in public health emergencies. They require ALL five elements: legality, legitimate aim, necessity, proportionality (least restrictive means), and non-discrimination. Quarantining asymptomatic individuals requires particularly robust evidence of transmission risk to meet the 'strictly necessary' and 'least restrictive means' criteria. COVID-19 quarantine policies were widely analysed against these principles."
  },
  {
    id: 22,
    question: "A utilitarian argument for mandatory COVID-19 vaccination in healthcare workers holds that it maximises aggregate welfare by protecting vulnerable patients. A libertarian bioethicist would counter this with the 'harm principle' (Mill). The most nuanced response is that mandatory vaccination of healthcare workers:",
    options: [
      "Is justifiable under Mill's harm principle itself, since unvaccinated healthcare workers pose direct risk of harm to patients who cannot protect themselves — making this a case where individual liberty may be overridden to prevent harm to identifiable others",
      "Always violates bodily autonomy regardless of the harm caused to patients",
      "Is ethically permissible only if vaccines are 100% efficacious against transmission",
      "Is equivalent to forced medical experimentation prohibited by the Nuremberg Code"
    ],
    answer: 0,
    explanation: "Mill's harm principle permits liberty restrictions when one's actions harm others. Healthcare workers in intimate contact with immunocompromised patients represent a scenario where unvaccinated status directly endangers identifiable others who cannot protect themselves. This is precisely the category Mill envisioned. However, this argument weakens when vaccines have limited transmission-blocking efficacy (as with Omicron variants), requiring empirical recalibration of the ethical justification."
  },
  {
    id: 23,
    question: "During COVID-19, contact tracing apps collected granular mobility and contact data. Privacy advocates argued this created risks beyond the pandemic. The MOST ethically significant concern about pandemic digital surveillance is:",
    options: [
      "Function creep — data collected for epidemic control may be repurposed for law enforcement, immigration enforcement, or commercial profiling, and technical systems built for temporary public health use may become permanent surveillance infrastructure",
      "That digital contact tracing is always less effective than manual contact tracing",
      "Violation of HIPAA because location data is a protected health information category",
      "The data creates actuarial risk scores that insurers can use to deny coverage"
    ],
    answer: 0,
    explanation: "Function creep — the gradual expansion of a system beyond its original purpose — is the most significant long-term ethical concern. Historical examples include post-9/11 surveillance infrastructure and ID systems created for limited purposes that became permanent. The WHO's ethical framework for COVID-19 contact tracing (2020) specifically required data minimisation, purpose limitation, sunset provisions, and independent oversight to prevent function creep. Temporary public health systems have repeatedly evolved into permanent surveillance tools."
  },
  {
    id: 24,
    question: "During a pandemic with scarce ventilators, a hospital ethics committee must choose between allocating the last ventilator to a 30-year-old with no comorbidities and a 65-year-old with diabetes. A 'fair innings' utilitarian argument would favour:",
    options: [
      "The 30-year-old, because the 'fair innings' argument (John Harris) holds that a full life spans roughly 70-80 years, and the younger patient has had fewer years, making additional life-years more morally valuable; however, this approach has been criticised for institutionalising ageism",
      "The 65-year-old, because they have greater medical experience and can make more informed treatment decisions",
      "A coin toss, because any age-based allocation violates equal dignity",
      "The 30-year-old, because QALY-based allocation always favours younger patients with no ethical qualification"
    ],
    answer: 0,
    explanation: "John Harris's 'fair innings' argument holds that living a complete lifespan is a moral good, and those who have had fewer years have a stronger claim to additional life. This supports prioritising younger patients in scarcity. However, critics (Norman Daniels, among others) note this can encode ageism and fail to account for individual circumstances. The Pittsburgh Protocol and New York ventilator guidelines during COVID-19 used SOFA scores rather than age as the primary criterion to avoid direct age discrimination."
  },
  {
    id: 25,
    question: "The ethical framework of 'reciprocity' in public health requires that governments who impose burdens on individuals (e.g., quarantine) must provide corresponding support. During COVID-19, many countries failed this standard because:",
    options: [
      "Quarantine mandates were imposed without adequate financial compensation, housing support, food security, or mental health services for those isolated — disproportionately burdening low-income workers, informal sector employees, and marginalised communities who could not afford compliance",
      "Governments provided excessive compensation that created moral hazard and perverse incentives for false positive reporting",
      "Reciprocity is not an established bioethics principle and therefore not applicable to pandemic policy",
      "International reciprocity obligations required sharing of vaccine patents before domestic quarantine measures were permissible"
    ],
    answer: 0,
    explanation: "Reciprocity is a recognised principle in public health ethics (Childress et al., 2002; WHO frameworks) that obligates governments to support those who bear burdens for collective benefit. Mass quarantine without support packages (paid leave, housing assistance, food delivery) disproportionately burdened low-income populations, creating both ethical failures and practical non-compliance. Research showed compliance with quarantine orders was inversely correlated with socioeconomic vulnerability in the absence of support."
  },
  {
    id: 26,
    question: "A country proposes implementing a 'Green Pass' system requiring proof of COVID-19 vaccination for access to restaurants, concerts, and public spaces. The bioethical objection that BEST captures the coercive nature of this policy is:",
    options: [
      "Conditional access to social and civic life transforms formally 'voluntary' vaccination into de facto compulsion by making non-vaccination incompatible with full social participation, potentially constituting undue influence that compromises genuine voluntariness",
      "The Green Pass violates medical confidentiality because vaccination status is a health record",
      "Conditional access is permissible under public health law and raises no distinct bioethical concern",
      "The policy is acceptable only if validated by a randomised controlled trial of its effectiveness"
    ],
    answer: 0,
    explanation: "The distinction between voluntary choice and undue influence is central to consent ethics. When non-vaccination results in exclusion from employment, social activities, and public life, the 'choice' to remain unvaccinated carries severe penalties that can undermine authentic voluntariness. This is the 'offer that cannot be refused' concern in bioethics. However, proportionality analysis may justify such measures in contexts of high transmission and vulnerable populations — the ethics are contested."
  },
  {
    id: 27,
    question: "The concept of 'syndemic' (Merrill Singer) is relevant to public health ethics because it:",
    options: [
      "Reveals that co-occurring epidemics (e.g., COVID-19 with diabetes, obesity, and poverty) are not independent — social conditions drive clustering of diseases, meaning purely biomedical public health responses that ignore social determinants are ethically inadequate and scientifically incomplete",
      "Provides a framework for quarantine exemptions based on pre-existing conditions",
      "Establishes legal liability for governments that fail to address social determinants of health",
      "Defines the threshold at which a disease outbreak qualifies as a pandemic under international law"
    ],
    answer: 0,
    explanation: "Singer's syndemic theory holds that synergistic epidemics driven by shared social conditions constitute a distinct phenomenon requiring social as well as biomedical intervention. For COVID-19, the syndemic framing (Richard Horton, Lancet 2020) revealed that social conditions — poverty, racism, housing insecurity — drove disease clustering, making purely vaccine/treatment-based public health responses ethically and scientifically incomplete without addressing structural determinants."
  },
  {
    id: 28,
    question: "A public health authority mandates mask-wearing in schools to protect immunocompromised children. A parent objects on grounds of child autonomy and freedom. The MOST ethically defensible response is:",
    options: [
      "The harm principle permits liberty-restricting measures to protect identifiable vulnerable others (immunocompromised children cannot consent to exposure risk); the communal nature of schools and duty of in loco parentis support the mandate, though transparent justification and sunset provisions are required",
      "Parental rights and child autonomy always override public health mandates in school settings",
      "Mask mandates are ethically impermissible because masks have not been proven 100% effective",
      "The mandate should be replaced with voluntary guidance because compulsion always violates autonomy"
    ],
    answer: 0,
    explanation: "Public health ethics permits liberty restrictions to prevent harm to identifiable others who cannot protect themselves — a textbook application of Mill's harm principle. Immunocompromised children in school settings cannot opt out of shared air exposure. The in loco parentis duty, the communal nature of schools, and the public health authority's obligation to protect all students justify mandates when evidence supports efficacy. Sunset clauses and transparent justification are required by proportionality."
  },
  {
    id: 29,
    question: "In the allocation of scarce organs during a pandemic when transplant capacity is reduced, a committee decides to temporarily suspend listing new patients while managing existing waitlist. The ethical principle MOST relevant to evaluating this decision is:",
    options: [
      "Procedural justice — the fairness of the decision-making process (transparency, consistent criteria application, appellate mechanisms) is as ethically important as the substantive outcome, particularly when decisions affect life and death across demographic groups",
      "Beneficence — the committee must maximise the number of successful transplants regardless of waitlist status",
      "Non-maleficence — no new policies may be implemented without prior empirical validation",
      "Autonomy — patients on existing waitlists have a contractual right to transplantation that cannot be suspended"
    ],
    answer: 0,
    explanation: "When substantive criteria for allocation cannot be perfectly specified, procedural justice becomes paramount. John Rawls distinguished procedural from substantive justice — in contexts of genuine uncertainty, fair procedures (transparency, consistency, appeals) can legitimise outcomes even when perfect substantive fairness is unachievable. The COVID-19 UNOS guidance and NHS guidelines emphasised that any changes to allocation criteria require explicit committee processes with documentation and review."
  },
  {
    id: 30,
    question: "The Lalonde Report (Canada, 1974) and Ottawa Charter for Health Promotion (1986) have bioethical significance because they:",
    options: [
      "Established that health is determined by factors beyond individual behaviour and healthcare (biology, environment, lifestyle, healthcare organisation), creating an ethical obligation for governments to address social determinants of health as a justice imperative rather than treating health as solely an individual responsibility",
      "Created the first international legal framework for pandemic preparedness",
      "Established the principle of patient autonomy as the primary principle in clinical medicine",
      "Mandated that all member states of the WHO adopt universal health coverage by 2000"
    ],
    answer: 0,
    explanation: "The Lalonde Report introduced the 'health field concept' recognising multifactorial determinants; the Ottawa Charter operationalised this into health promotion principles. Their ethical significance is shifting moral responsibility from individual 'lifestyle choices' to structural determinants, creating a justice-based obligation for governmental action on housing, education, income inequality, and environmental factors. This challenges victim-blaming narratives and underpins contemporary global health justice frameworks."
  },
  {
    id: 31,
    question: "A patient with amyotrophic lateral sclerosis (ALS) requests physician-assisted dying in a jurisdiction where it is legal. His family opposes the decision, arguing he is depressed and cannot truly consent. The attending physician must navigate which primary ethical tension?",
    options: [
      "Authenticity and competence of autonomous decision-making vs. the possibility that untreated depression constitutes a temporary impairment of rational agency — requiring comprehensive psychiatric assessment, distinction between treatment-refractory existential suffering and treatable clinical depression, and temporal consistency testing of the wish to die",
      "Non-maleficence vs. beneficence, resolved by always deferring to family preference",
      "Legal compliance vs. clinical judgment, with legal compliance always overriding",
      "The physician's personal conscientious objection vs. legal obligation, which always requires the physician to proceed"
    ],
    answer: 0,
    explanation: "The central challenge in assisted dying requests is distinguishing authentic, competent, enduring decisions from those driven by treatable depression or family pressure. Belgian and Dutch euthanasia law requires multiple independent assessments, mandatory waiting periods, and psychiatric evaluation when depression is suspected. ALS specifically involves existential suffering (loss of independence, communication) that may be distinct from clinical depression, but the two can coexist, requiring nuanced assessment rather than blanket approval or denial."
  },
  {
    id: 32,
    question: "The distinction between 'active euthanasia,' 'passive euthanasia,' 'physician-assisted suicide,' and 'terminal sedation' is ethically significant primarily because:",
    options: [
      "Each involves different levels of physician agency, causal proximity to death, and patient consent — generating distinct ethical and legal analyses, though critics of the active/passive distinction (James Rachels) argue the moral difference is less significant than the intent and outcome",
      "Only active euthanasia is legal anywhere in the world; all other categories are universally prohibited",
      "The distinctions are purely legal, carrying no independent moral significance in bioethics",
      "Terminal sedation and passive euthanasia are always ethically equivalent to murder"
    ],
    answer: 0,
    explanation: "James Rachels' landmark 1975 NEJM paper 'Active and Passive Euthanasia' challenged the moral significance of the active/passive distinction, arguing that if intent and outcome are identical, the distinction is morally arbitrary. However, jurisdictions maintain different legal treatments: withdrawing treatment is widely legal; active euthanasia is legal in Belgium, Netherlands, Canada, etc.; PAS is legal in Oregon, Switzerland, etc. Terminal sedation (proportionate palliative sedation to unconsciousness) is permissible under the doctrine of double effect."
  },
  {
    id: 33,
    question: "The 'dead donor rule' (DDR) in organ transplantation holds that vital organs may only be retrieved from dead donors. This rule is currently under ethical pressure from which development?",
    options: [
      "DCD (Donation after Circulatory Death) protocols, where circulatory death is declared based on circulatory cessation but the brain may retain some function — raising questions about whether declaration of death precedes or is influenced by transplant eligibility criteria, and the adequacy of the 2-5 minute 'no-touch' period before retrieval",
      "The increasing use of xenotransplantation, which does not involve human donors at all",
      "The legalisation of physician-assisted dying, which creates a new category of potential donors",
      "Brain organoid research suggesting that in vitro tissues may qualify as donors"
    ],
    answer: 0,
    explanation: "DCD (controlled and uncontrolled) protocols have intensified scrutiny of the DDR. Critics (Robert Truog, Franklin Miller) argue that in DCD, circulation could potentially be restored (autoresuscitation risk), the 2-5 minute standoff period may be insufficient to definitively establish irreversibility, and the declaration of circulatory death may be influenced by transplant interests. The Institute of Medicine and UNOS have responded with specific protocols requiring strict separation of transplant and end-of-life teams."
  },
  {
    id: 34,
    question: "Following the Karen Ann Quinlan case (1976) and Nancy Cruzan case (1990), the US Supreme Court established which foundational principle in end-of-life ethics?",
    options: [
      "Competent patients have a constitutionally protected liberty interest in refusing unwanted medical treatment, including life-sustaining treatment; for incompetent patients, states may require 'clear and convincing evidence' of their previously expressed wishes — establishing the legal foundation for advance directives",
      "Physicians have an absolute duty to provide all available life-sustaining treatment regardless of patient wishes",
      "Family members have automatic decision-making authority for incompetent patients without requirement of prior patient expressed wishes",
      "Withdrawal of artificial nutrition and hydration is legally equivalent to murder in all US jurisdictions"
    ],
    answer: 0,
    explanation: "Quinlan established the right to refuse life-sustaining treatment via surrogate decision-making. Cruzan v. Director (1990) was the first Supreme Court case on the right to die, holding that competent individuals have a liberty interest in refusing treatment (derived from 14th Amendment) but that Missouri could require clear and convincing evidence of an incompetent patient's wishes. This established the legal foundation for advance directives (living wills, healthcare proxies) across the United States."
  },
  {
    id: 35,
    question: "An opt-out (presumed consent) organ donation system, as implemented in Spain and Wales, raises the following primary ethical concern:",
    options: [
      "Whether legislative presumption of consent constitutes genuine autonomous consent — critics argue that true consent requires active, informed expression of agreement, and that presumed consent may disproportionately harvest organs from populations with less health literacy or civic engagement who are unaware of opt-out procedures",
      "That opt-out systems always result in more organ trafficking because of increased supply",
      "That presumed consent violates the dead donor rule because families no longer control donation decisions",
      "That opt-out systems are ethically equivalent to forced conscription and violate bodily integrity absolutely"
    ],
    answer: 0,
    explanation: "The philosophical crux of opt-out debate is whether legislative presumption constitutes ethically valid consent. Onora O'Neill and others argue that consent must be an intentional act, not an omission. The counterargument (supported by the British Organ Donation Taskforce and Welsh government) is that presumed consent reflects societal values and provides an adequate legal framework when paired with robust public education and family veto rights. Evidence from Spain and Wales shows increased donation rates without evidence of disproportionate impact on marginalised groups when properly implemented."
  },
  {
    id: 36,
    question: "Transplant tourism — where patients travel to purchase organs from living vendors in developing countries — is condemned by the Declaration of Istanbul (2008). The primary ethical objection is:",
    options: [
      "Organ markets in low-income settings constitute a form of exploitation of desperation (exploitation of poverty-driven decisions that are not truly autonomous), undermine the altruistic donation framework globally, create a two-tiered system where organ availability tracks wealth, and expose vendors to surgical risks without equitable benefit",
      "It violates immigration law and international travel regulations",
      "It is ethically impermissible only when the organ vendor is under 18 years of age",
      "It violates the principle of non-maleficence only toward the recipient, not the vendor"
    ],
    answer: 0,
    explanation: "The Declaration of Istanbul and WHO Guiding Principles on Human Cell, Tissue and Organ Transplantation condemn transplant tourism primarily on exploitation grounds: poverty-coerced 'consent' to sell a kidney does not constitute free autonomous choice; vendors (typically in Iran, the Philippines, Pakistan, China) bear surgical risks and long-term health consequences without adequate compensation or follow-up; and the practice diverts healthcare resources from the domestic health system. Iran is the only country with a legal regulated kidney market."
  },
  {
    id: 37,
    question: "The Terri Schiavo case (1990-2005) raised which specific ethical and legal issue that had NOT been definitively addressed by prior cases?",
    options: [
      "The authority hierarchy when a competent surrogate (spouse) and family members (parents) disagree about the wishes of a permanently unconscious patient who left no advance directive — and the appropriate role of courts, state legislature, and federal government in resolving private medical decisions",
      "Whether withdrawal of treatment from a patient in a persistent vegetative state (PVS) is legally murder",
      "The standard of evidence required to diagnose PVS, which was definitively resolved by the case",
      "Whether nutrition and hydration constitute extraordinary treatment that may be withdrawn by physician order"
    ],
    answer: 0,
    explanation: "Schiavo raised the unprecedented question of surrogate hierarchy conflict: Michael Schiavo (husband/legal guardian) sought tube removal; parents sought continued treatment, disputing his account of her wishes. The case prompted extraordinary interventions: Florida Legislature passed 'Terri's Law,' Congress passed the Palm Sunday Compromise Act to move the case to federal court, and President Bush signed emergency legislation — all ultimately failing to override the courts. The case prompted widespread advance directive completion campaigns."
  },
  {
    id: 38,
    question: "The ethical principle of 'medical futility' is invoked when physicians seek to withdraw life-sustaining treatment over family objection. The primary philosophical problem with invoking physiological futility is:",
    options: [
      "True physiological futility (treatment cannot achieve any physiological effect) is exceedingly rare; most futility claims involve value-laden judgments about quality of life, social worth, or resource allocation — making 'futility' a potentially disguised value judgment that should be acknowledged as such rather than presented as a purely medical determination",
      "Futility determinations are legally impermissible in all US jurisdictions",
      "Futility can only be declared by the patient's next of kin, not by physicians",
      "The concept is medically valid but ethically irrelevant because physicians must always follow family preferences"
    ],
    answer: 0,
    explanation: "Lawrence Schneiderman, Tom Tomlinson, Howard Brody, and others have extensively critiqued 'futility' as a term that conflates physiological (treatment cannot achieve its proximate goal) and normative (treatment cannot achieve a worthwhile outcome) senses. The latter smuggles quality-of-life and social worth judgments into ostensibly medical determinations. Most bioethicists recommend transparent communication about goals of care rather than unilateral futility declarations, and structured institutional processes for dispute resolution."
  },
  {
    id: 39,
    question: "Xenotransplantation using genetically modified pig organs (e.g., porcine kidneys transplanted in humans) raises which unique bioethical concern not present in allotransplantation?",
    options: [
      "Risk of porcine endogenous retroviruses (PERVs) and novel zoonotic pathogens crossing species barriers into the human population — requiring public health-level oversight beyond individual patient consent, because infectious risk extends to third parties and potentially to global population health",
      "Violation of animal rights, making xenotransplantation always ethically impermissible",
      "Breach of the dead donor rule because the pig must be killed",
      "Conflict with religious beliefs that prohibit porcine organ use in all faith traditions"
    ],
    answer: 0,
    explanation: "The FDA and WHO have identified porcine endogenous retroviruses (PERVs) and other zoonotic agents as primary safety concerns in xenotransplantation. Unlike individual risks, novel pathogen emergence could constitute a public health emergency — making individual consent insufficient ethical governance. The FDA's xenotransplantation guidance (2020) requires lifetime recipient monitoring, partner testing, and reporting to national registries. PERV risk has been partially addressed through CRISPR inactivation of all 62 porcine PERV copies (eGenesis, 2017), but novel pathogen risk remains."
  },
  {
    id: 40,
    question: "A patient with severe treatment-resistant depression requests deep brain stimulation (DBS) as a last resort. DBS can alter personality, mood, and subjective identity. The MOST ethically significant concern specific to DBS, beyond standard informed consent, is:",
    options: [
      "Authenticity and personal identity — whether post-DBS personality changes represent authentic self-expression or neurological alteration of the person's identity, raising questions about whether the post-DBS patient can be said to have 'consented' on behalf of the pre-DBS self and whether enhancement vs. restoration of self is ethically distinct",
      "Conflict of interest among DBS device manufacturers who fund research",
      "The research-practice distinction, because DBS for depression remains investigational",
      "Informed consent is sufficient for all DBS procedures and no additional ethical analysis is required"
    ],
    answer: 0,
    explanation: "Deep Brain Stimulation raises a philosophically distinct concern about personal identity and authenticity. Reports from DBS patients have included accounts of feeling 'not like myself' or experiencing dramatic personality changes. Paul Appelbaum and colleagues have examined whether modifications to mood, personality, and identity constitute enhancement of the authentic self or replacement of it. The BRAIN Initiative Ethics program specifically identified authenticity and personal identity as unique ethical dimensions of neural modulation technologies."
  },
  {
    id: 41,
    question: "The Tuskegee Syphilis Study (1932-1972) is frequently cited as the foundational case for research ethics reform. However, the MOST accurate characterisation of its primary ethical violations is:",
    options: [
      "Active deception of participants about study purpose, denial of available effective treatment (penicillin from 1947 onward), failure to obtain any meaningful consent, exploitation of a racially marginalised population, and continuation for 25 years after treatment became available — a compound violation of beneficence, non-maleficence, autonomy, and justice",
      "Failure to obtain written informed consent, which was the sole ethical violation",
      "Use of a placebo control in a context where treatment existed, which is the only concern",
      "The study violated only autonomy, as participants were enrolled without consent, but treatment deprivation was standard of care at the time"
    ],
    answer: 0,
    explanation: "Tuskegee involved multiple compounding violations: participants were told they were being treated for 'bad blood'; effective treatment (penicillin) was withheld after 1947; the US Public Health Service actively prevented participants from receiving treatment elsewhere; the study continued for 40 years; and it systematically exploited a racialised population with limited healthcare access. The 1972 public exposure led directly to the National Research Act (1974) and the Belmont Report (1979), establishing the modern US research ethics framework."
  },
  {
    id: 42,
    question: "A multinational pharmaceutical company proposes conducting a placebo-controlled trial of a new malaria vaccine in sub-Saharan Africa, where no licensed malaria vaccine is currently available in that region (though one is available in high-income countries). Under the Declaration of Helsinki (2013 revision), this design is:",
    options: [
      "Ethically contested: DoH Paragraph 33 permits placebo controls when 'compelling methodological reasons' exist and participants will not suffer serious harm, but Paragraph 34 requires post-trial access and Paragraph 15 requires protocol registration — requiring careful ethical review weighing local standard of care, scientific necessity of the placebo arm, and genuine benefit to the host community",
      "Always prohibited because a comparator vaccine exists anywhere in the world",
      "Automatically permissible because no local comparator is available in the trial setting",
      "Permissible only if the company agrees to donate vaccines to the country after trial completion"
    ],
    answer: 0,
    explanation: "The 'standard of care' debate in international research ethics has been intensely contested since the 1997 AZT perinatal HIV trials controversy (Lurie & Wolfe, NEJM 1997). DoH 2013 Paragraph 33 allows placebos when no proven intervention exists or when compelling methodological reasons exist and patients will not suffer serious harm. However, Paragraph 34 requires reasonable post-trial access provisions. The 'local standard of care' vs. 'universal best standard' debate remains unresolved, with CIOMS 2016 guidelines taking a contextual approach requiring community consultation."
  },
  {
    id: 43,
    question: "The concept of 'biopiracy' is illustrated by which historical case, and what ethical principle does it primarily violate?",
    options: [
      "Neem tree patents by W.R. Grace (US patent on neem-based biopesticide revoked in 2005) and turmeric patents (US patent revoked 1997) — traditional knowledge used by communities for centuries was appropriated without consent or compensation, violating the principle of benefit sharing, prior informed consent of originating communities, and their rights under the Convention on Biological Diversity and Nagoya Protocol",
      "Human genome sequencing projects that commercialised genetic information without community consent",
      "Animal testing regulations that failed to account for traditional medicine practices",
      "Pharmaceutical companies patenting synthetic compounds that replicate traditional plant remedies"
    ],
    answer: 0,
    explanation: "Biopiracy refers to appropriation of biological resources or traditional knowledge from indigenous/local communities without fair benefit sharing. Classic cases include: neem (W.R. Grace), turmeric (wound healing patent), enola bean (Proctor & Gamble), and Hoodia (Unilever vs. San Bushmen of South Africa). The Convention on Biological Diversity (1992) and Nagoya Protocol (2010) established Free, Prior and Informed Consent (FPIC) and Access and Benefit Sharing (ABS) frameworks to address this. TRIPS Agreement tensions with CBD remain a major global health justice issue."
  },
  {
    id: 44,
    question: "The Jesse Gelsinger case (1999) was a watershed moment in gene therapy ethics. He died during an adenoviral vector gene therapy trial at the University of Pennsylvania. The primary institutional ethics failures revealed by the subsequent investigation were:",
    options: [
      "Undisclosed financial conflicts of interest (James Wilson held equity in the sponsor company), failure to report prior adverse events to the FDA, inclusion of a participant who may not have met eligibility criteria, inadequate informed consent about risks from animal studies, and a culture prioritising scientific advancement over participant safety",
      "Failure to obtain any informed consent and use of an unlicensed experimental compound",
      "Use of a paediatric participant (Jesse Gelsinger was 18, legally an adult)",
      "Absence of an IRB approval for the study protocol"
    ],
    answer: 0,
    explanation: "The Gelsinger case exposed systemic institutional failures: (1) Principal investigator James Wilson had a ~$13M equity stake in Genovo Inc. (sponsor) undisclosed to participants; (2) prior animal and human adverse events were not reported to the FDA or DSMB; (3) Jesse may not have met ammonia threshold eligibility criteria; (4) consent documents downplayed serious risks demonstrated in animal models; (5) the institutional culture prioritised competitive scientific achievement. Congress and FDA responded with new conflict of interest regulations and adverse event reporting requirements."
  },
  {
    id: 45,
    question: "Post-trial access (PTA) obligations for research participants in developing countries are addressed by CIOMS 2016 Guideline 2 and DoH Paragraph 34. The ethical justification for PTA requirements is BEST explained by:",
    options: [
      "The reciprocity principle: participants who bear the risks of experimental interventions to generate knowledge that may benefit global populations are owed a reasonable opportunity to benefit from proven interventions they helped validate — reflecting a duty to avoid mere instrumentalisation of vulnerable populations as research subjects",
      "Cost-effectiveness analysis showing that PTA improves long-term trial recruitment",
      "International law that mandates PTA as a condition of pharmaceutical market authorisation",
      "The principle of equipoise, which requires that all trial participants receive the experimental treatment after unblinding"
    ],
    answer: 0,
    explanation: "PTA is grounded in reciprocity and anti-exploitation ethics. When participants in resource-limited settings take on risks to generate globally marketed knowledge, simple 'thank you and goodbye' violates distributive justice. CIOMS 2016 Guideline 2 requires sponsors to make 'reasonable, good faith efforts' to ensure PTA or make it available through other mechanisms. The standard remains contested — 'best proven' vs. 'reasonable available' — but the ethical foundation is clear: participants should not be instrumentalised solely for others' benefit."
  },
  {
    id: 46,
    question: "Cultural relativism in bioethics holds that ethical norms are culturally determined and should not be imposed across cultures. Universal bioethics frameworks (UNESCO 2005 Declaration) represent the opposing position. A case where this tension is MOST acute is:",
    options: [
      "Female genital mutilation/cutting (FGM/C): cultural relativists argue it is a cultural practice deserving respect and community autonomy, while universalists argue it constitutes irreversible bodily harm to non-consenting minors that violates universal rights — a case where the tension between cultural self-determination and universal harm-prevention principles is most direct",
      "Differences in informed consent disclosure norms between cultures, where some prefer family-centred decision-making over individual autonomy",
      "Traditional dietary restrictions that affect clinical nutrition management",
      "Use of traditional healers before or alongside biomedical treatment"
    ],
    answer: 0,
    explanation: "FGM/C represents the sharpest test of cultural relativism vs. universalism: it is performed on minors who cannot consent, causes permanent physiological harm (classified as Types I-IV by WHO), and is condemned by WHO, UNICEF, UNFPA as a violation of human rights — yet is defended by communities on grounds of cultural identity, marriageability, and social cohesion. The universalist response (WHO 2008) grounds condemnation in protection of non-consenting minors from permanent harm rather than in cultural imperialism — a distinction that partially addresses the relativist objection."
  },
  {
    id: 47,
    question: "The concept of 'global health justice' as articulated by Thomas Pogge requires pharmaceutical companies and wealthy nations to do more than merely provide aid. Pogge's argument is that they have a NEGATIVE duty because:",
    options: [
      "Global institutional arrangements (international trade law, patent regimes, tariff structures) actively maintain conditions of severe poverty and disease burden in developing countries — wealthy nations and corporations are not merely failing to help but are participating in systems that foreseeably harm the global poor, creating negative duties (not just positive charity obligations) to reform these arrangements",
      "Companies have a positive duty to donate medicines to all countries with per capita income below a threshold",
      "The principle of global beneficence requires wealthier nations to redirect a minimum of 5% of GDP to global health",
      "International law establishes binding obligations for pharmaceutical price controls in all TRIPS member states"
    ],
    answer: 0,
    explanation: "Thomas Pogge's 'World Poverty and Human Rights' (2002) distinguishes negative duties (not to harm) from positive duties (to aid). His radical argument is that current global institutional arrangements — including TRIPS patent protections, agricultural subsidies, tax haven rules, and arms sales — actively harm the global poor. This reframes global health inequality as an ongoing harm requiring reform of institutional structures, not merely charitable provision. The Health Impact Fund proposed by Pogge and Hollis is one practical application."
  },
  {
    id: 48,
    question: "The Henrietta Lacks case and HeLa cells raise enduring questions about which specific ethics frameworks that were absent in 1951 but have since been codified?",
    options: [
      "Informed consent for tissue banking and research use, benefit sharing with tissue contributors and their communities, racial justice in research (Black patients were systematically exploited), privacy protections for identifiable genetic information derived from cell lines, and the ethics of commercialising human biological materials — all absent in 1951 but now addressed by the Common Rule, GDPR, and Nagoya Protocol",
      "Clinical trial registration requirements and publication ethics standards",
      "Animal welfare protections that would limit use of cell lines derived without consent",
      "IRB review processes, which were adequately established by the Nuremberg Code of 1947"
    ],
    answer: 0,
    explanation: "Henrietta Lacks (1920-1951) had cancerous cervical cells taken without consent or knowledge during treatment at Johns Hopkins. HeLa cells became commercially invaluable and foundational to modern biomedical research. The case predated: informed consent for tissue research (codified post-Belmont), racial justice analysis in research ethics, benefit sharing frameworks, genomic privacy protections (HeLa genome was published without family consent in 2013, then partially restricted), and commercialisation ethics. Skloot's 'The Immortal Life of Henrietta Lacks' (2010) catalysed policy reforms including NIH's 2013 agreement with the Lacks family."
  },
  {
    id: 49,
    question: "One Health ethics integrates human, animal, and environmental health. A researcher studying bat coronavirus reservoirs in a biodiversity hotspot must navigate which unique ethical tensions not present in standard human research ethics?",
    options: [
      "Tension between knowledge generation (pandemic prevention) and ecological harm (wildlife disturbance, habitat intrusion), animal welfare obligations for non-human subjects without a consent framework, dual-use research of concern (pathogen characterisation could enable bioweapons), community benefit sharing with indigenous communities in biodiversity hotspots, and biosafety obligations extending beyond the individual to global population health",
      "Standard informed consent and IRB review processes identical to human participant research",
      "Conflict of interest from pharmaceutical companies funding wildlife surveillance",
      "Authorship disputes in interdisciplinary research teams combining ecologists and virologists"
    ],
    answer: 0,
    explanation: "One Health research at the human-animal-environment interface presents multi-domain ethical challenges: (1) animal welfare (non-human subjects require 3Rs framework — Replace, Reduce, Refine); (2) ecological harm (field work disturbs habitat, can spread pathogens between sites); (3) DURC (dual-use research of concern) — gain-of-function research on bat coronaviruses led to the 2014 US funding pause and post-COVID debates about the Wuhan Institute; (4) benefit sharing with indigenous communities where biodiversity hotspots are located; (5) biosafety obligations extending to global public health from lab-acquired infections."
  },
  {
    id: 50,
    question: "A clinical trial conducted by a US institution in India enrolls participants with a condition (drug-resistant tuberculosis) for which no effective treatment exists locally, using an experimental drug. The company plans to price the drug at USD 50,000/year after approval — unaffordable in India. The ethics committee reviewing the protocol should require which provisions, drawing on CIOMS 2016 guidelines?",
    options: [
      "The protocol must address: (1) responsive research requirement — the research must address a health need of the host community; (2) reasonable availability provision — the successful intervention should be made reasonably available to host community members post-trial; (3) capacity building in the host institution; (4) fair distribution of burdens and benefits; and (5) prior agreement on intellectual property arrangements that enable affordable access — without these, the research is ethically impermissible exploitation",
      "The ethics committee may only review scientific methodology, not pricing or post-trial access obligations",
      "Enrollment may proceed as long as standard informed consent is obtained from each participant",
      "The sponsor need only commit to donating a defined number of treatment courses to the host country at no charge"
    ],
    answer: 0,
    explanation: "CIOMS 2016 Guidelines 2 and 3 require: (1) responsive research — research must respond to the health needs of the host community, not merely exploit their disease burden; (2) reasonable availability — successful interventions must be made reasonably available to the host community; (3) capacity building commitments; and (4) fair distribution of benefits. A drug priced at USD 50,000/year in a country where per-capita income is ~USD 2,000 would fail the reasonable availability test, making the research ethically impermissible as designed unless pricing commitments or licensing arrangements are made. This directly parallels the 2001 Doha Declaration on TRIPS and Public Health."
  }
]

export default questions

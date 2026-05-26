const questions = [
  // Q1-Q15: Choose the correctly spelled word
  {
    id: 1,
    question: "Choose the correctly spelled word:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommodaion"],
    answer: 1,
    explanation: "'Accommodation' is the correct spelling — note the double 'c' and double 'm'. This is one of the most frequently misspelled words in English."
  },
  {
    id: 2,
    question: "Choose the correctly spelled word:",
    options: ["Consciencious", "Consientious", "Conscientious", "Consciencous"],
    answer: 2,
    explanation: "'Conscientious' is correct. It derives from 'conscience' and retains the 'sci' cluster — conscientious means diligent and thorough."
  },
  {
    id: 3,
    question: "Choose the correctly spelled word:",
    options: ["Diarrhoea", "Diarrhea", "Diarrohea", "Dyarrhea"],
    answer: 0,
    explanation: "'Diarrhoea' is the standard British/international spelling (as used in medical contexts in India). 'Diarrhea' is the American spelling. Both have double 'r', but only 'Diarrhoea' has the 'oe' digraph."
  },
  {
    id: 4,
    question: "Choose the correctly spelled word:",
    options: ["Haemorrage", "Haemorrhage", "Hemorrage", "Haemorrhaege"],
    answer: 1,
    explanation: "'Haemorrhage' is the correct British spelling. It contains 'ae', double 'r', and ends in '-age'. The American spelling is 'Hemorrhage'."
  },
  {
    id: 5,
    question: "Choose the correctly spelled word:",
    options: ["Buraucracy", "Beaurocracy", "Bureaucracy", "Bureacracy"],
    answer: 2,
    explanation: "'Bureaucracy' is correct. It comes from French 'bureau' (desk/office) + Greek '-kratia' (rule). The 'eau' sequence is the key stumbling block."
  },
  {
    id: 6,
    question: "Choose the correctly spelled word:",
    options: ["Idiosyncracy", "Idiosyncrasy", "Idiosyncrasey", "Idiosyncrasie"],
    answer: 1,
    explanation: "'Idiosyncrasy' ends in '-asy', not '-acy'. It refers to a distinctive personal characteristic or habit."
  },
  {
    id: 7,
    question: "Choose the correctly spelled word:",
    options: ["Sacrilegious", "Sacreligious", "Sacriligeous", "Sacrelagious"],
    answer: 0,
    explanation: "'Sacrilegious' is correct. Many people misspell it as 'sacreligious' by analogy with 'religious', but it derives from 'sacrilege', not 'religion'."
  },
  {
    id: 8,
    question: "Choose the correctly spelled word:",
    options: ["Supercede", "Superseed", "Superceed", "Supersede"],
    answer: 3,
    explanation: "'Supersede' is the only correct spelling. It comes from Latin 'supersedere'. It is commonly misspelled as 'supercede' by false analogy with 'precede', 'concede', 'intercede'."
  },
  {
    id: 9,
    question: "Choose the correctly spelled word:",
    options: ["Liason", "Liaison", "Liasion", "Lieason"],
    answer: 1,
    explanation: "'Liaison' is correct. The tricky part is the second 'i' after 'lia-'. It means a communication or cooperative link between people or organisations."
  },
  {
    id: 10,
    question: "Choose the correctly spelled word:",
    options: ["Milennium", "Millenium", "Millennium", "Milenneum"],
    answer: 2,
    explanation: "'Millennium' has double 'l' and double 'n'. It comes from Latin 'mille' (thousand) + 'annum' (year)."
  },
  {
    id: 11,
    question: "Choose the correctly spelled word:",
    options: ["Parrallel", "Paralell", "Parallel", "Parallell"],
    answer: 2,
    explanation: "'Parallel' has a single 'r', double 'l' in the middle, and a single 'l' at the end. It is one of the most consistently misspelled common words."
  },
  {
    id: 12,
    question: "Choose the correctly spelled word:",
    options: ["Seperate", "Sepperate", "Separrate", "Separate"],
    answer: 3,
    explanation: "'Separate' is correct — not 'seperate'. A useful mnemonic: there is 'a rat' in 'sepa-rat-e'."
  },
  {
    id: 13,
    question: "Choose the correctly spelled word:",
    options: ["Psoriasis", "Soriasis", "Psorasis", "Psoriassis"],
    answer: 0,
    explanation: "'Psoriasis' is the correct medical spelling. The initial 'ps-' is silent. It refers to a chronic skin condition."
  },
  {
    id: 14,
    question: "Choose the correctly spelled word:",
    options: ["Phlegm", "Flegm", "Phlegem", "Phlegme"],
    answer: 0,
    explanation: "'Phlegm' is the correct spelling with the silent 'gh'. It refers to mucus secreted in the respiratory passages."
  },
  {
    id: 15,
    question: "Choose the correctly spelled word:",
    options: ["Mnemonick", "Mnemonik", "Mnemonic", "Nemonic"],
    answer: 2,
    explanation: "'Mnemonic' is correct. The initial 'mn-' is silent. It refers to a device or pattern that aids memory."
  },

  // Q16-Q30: Identify the misspelled word
  {
    id: 16,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Connoisseur", "Entrepreneur", "Liuetenant", "Bureaucrat"],
    answer: 2,
    explanation: "'Liuetenant' is misspelled. The correct spelling is 'Lieutenant'. The letter order after 'lie-' is 'u-t', not 'u-e-t'."
  },
  {
    id: 17,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Exhilarate", "Definately", "Necessary", "Embarrass"],
    answer: 1,
    explanation: "'Definately' is misspelled. The correct spelling is 'Definitely'. It derives from 'definite', so it is 'defin-ite-ly'."
  },
  {
    id: 18,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Paediatrics", "Geriatrics", "Gynaecology", "Opthalmology"],
    answer: 3,
    explanation: "'Opthalmology' is misspelled. The correct spelling is 'Ophthalmology' — note the 'ph' before 'th': oph-thal-mol-o-gy."
  },
  {
    id: 19,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Occurrence", "Recurrence", "Deterrence", "Prefference"],
    answer: 3,
    explanation: "'Prefference' is misspelled. The correct spelling is 'Preference' — single 'r' and single 'f': pref-er-ence."
  },
  {
    id: 20,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Acquiesce", "Acquaintance", "Aquire", "Acquisition"],
    answer: 2,
    explanation: "'Aquire' is misspelled. The correct spelling is 'Acquire' — with 'acq' at the start: ac-quire."
  },
  {
    id: 21,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Fluorescent", "Iridescent", "Phosphorescent", "Adolecent"],
    answer: 3,
    explanation: "'Adolecent' is misspelled. The correct spelling is 'Adolescent' — ado-les-cent, with an 's' in the middle."
  },
  {
    id: 22,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Surreptitious", "Conscientous", "Ubiquitous", "Promiscuous"],
    answer: 1,
    explanation: "'Conscientous' is misspelled. The correct spelling is 'Conscientious' — it must include the 'i' after 'sc': consci-enti-ous."
  },
  {
    id: 23,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Anaesthetic", "Aesthetic", "Aetiology", "Homeopathey"],
    answer: 3,
    explanation: "'Homeopathey' is misspelled. The correct spelling is 'Homoeopathy' (British) or 'Homeopathy' (American). The ending is '-pathy', not '-pathey'."
  },
  {
    id: 24,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Renaissance", "Surveillance", "Vengeance", "Maintenence"],
    answer: 3,
    explanation: "'Maintenence' is misspelled. The correct spelling is 'Maintenance' — main-te-nance, not 'maintenence'."
  },
  {
    id: 25,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Questionnaire", "Millionaire", "Solitaire", "Bilionare"],
    answer: 3,
    explanation: "'Bilionare' is misspelled. The correct spelling is 'Billionaire' — double 'l', double 'i' is not needed, but 'billion' + 'aire': bill-ion-aire."
  },
  {
    id: 26,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Desiccated", "Exaggerated", "Exhilirated", "Exacerbated"],
    answer: 2,
    explanation: "'Exhilirated' is misspelled. The correct spelling is 'Exhilarated' — exhil-ar-ated, with an 'a' not an 'i' after 'exhil'."
  },
  {
    id: 27,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Pneumonia", "Pneumothorax", "Pnuemococcal", "Pneumatic"],
    answer: 2,
    explanation: "'Pnuemococcal' is misspelled. The correct spelling is 'Pneumococcal' — 'pneu-' not 'pnue-'. The vowel order is 'eu', not 'ue'."
  },
  {
    id: 28,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Conscientious", "Subconscious", "Omniscient", "Presciant"],
    answer: 3,
    explanation: "'Presciant' is misspelled. The correct spelling is 'Prescient' — pre-sci-ent, meaning having foreknowledge."
  },
  {
    id: 29,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Indispensable", "Irresistible", "Incomprehensible", "Illegitament"],
    answer: 3,
    explanation: "'Illegitament' is misspelled. The correct spelling is 'Illegitimate' — il-legit-im-ate."
  },
  {
    id: 30,
    question: "Identify the MISSPELLED word among the four options:",
    options: ["Mediteranean", "Schizophrenia", "Emphysema", "Thalassemia"],
    answer: 0,
    explanation: "'Mediteranean' is misspelled. The correct spelling is 'Mediterranean' — with double 'r': Medi-ter-ra-nean. The other three words (Schizophrenia, Emphysema, Thalassemia) are all correctly spelled."
  },

  // Q31-Q40: Choose the correct spelling to fill in the blank
  {
    id: 31,
    question: "The scientist's work was truly __________, revolutionising our understanding of cellular biology.",
    options: ["Groundbreaking", "Groundbraking", "Groundbreeking", "Grondbreaking"],
    answer: 0,
    explanation: "'Groundbreaking' is the correct spelling — ground + breaking, a compound adjective meaning innovative or pioneering."
  },
  {
    id: 32,
    question: "The patient's condition was __________, requiring immediate surgical intervention.",
    options: ["Catastrofic", "Catastrophick", "Catastrophic", "Catasrophic"],
    answer: 2,
    explanation: "'Catastrophic' is the correct spelling. It derives from 'catastrophe' with the '-ic' adjectival suffix: catas-troph-ic."
  },
  {
    id: 33,
    question: "Her __________ to detail made her an excellent proofreader.",
    options: ["Meticulousness", "Meticulousnes", "Meticuluosness", "Meticulosness"],
    answer: 0,
    explanation: "'Meticulousness' is correct — meticulous + ness. Note the 'ulous' ending, not 'ulious' or 'uleous'."
  },
  {
    id: 34,
    question: "The new drug demonstrated remarkable __________ against drug-resistant bacteria.",
    options: ["Efficasy", "Efficacy", "Efficiacy", "Effacacy"],
    answer: 1,
    explanation: "'Efficacy' means the ability to produce a desired effect. It ends in '-acy': ef-fi-ca-cy, not '-asy' or '-iacy'."
  },
  {
    id: 35,
    question: "The board found the CFO's actions to be financially __________.",
    options: ["Irresponsible", "Irresponsable", "Iresponsible", "Irresponsibel"],
    answer: 0,
    explanation: "'Irresponsible' is correct — ir + responsible. The suffix is '-ible', not '-able', because 'responsible' uses '-ible'."
  },
  {
    id: 36,
    question: "The ancient manuscript was almost entirely __________.",
    options: ["Illegible", "Ilegible", "Illegable", "Illegibel"],
    answer: 0,
    explanation: "'Illegible' is correct — il + legible. It ends in '-ible' (from Latin 'legibilis'): il-leg-i-ble."
  },
  {
    id: 37,
    question: "The diplomat's __________ response helped avoid a potential international crisis.",
    options: ["Judicious", "Judicous", "Judishous", "Judiciouss"],
    answer: 0,
    explanation: "'Judicious' means having or showing good judgement. It ends in '-icious': ju-di-cious."
  },
  {
    id: 38,
    question: "The research team faced significant __________ in replicating the original experiment.",
    options: ["Difficulties", "Diffeculties", "Difficulteys", "Difficultys"],
    answer: 0,
    explanation: "'Difficulties' is the correct plural of 'difficulty' — the '-y' changes to '-ies': diffi-cul-ties."
  },
  {
    id: 39,
    question: "The government's __________ on civil liberties drew widespread criticism.",
    options: ["Encroachment", "Incroachment", "Encroachement", "Encroachiment"],
    answer: 0,
    explanation: "'Encroachment' is correct — en-croach-ment. The prefix is 'en-', not 'in-', and there is no extra vowel before the suffix '-ment'."
  },
  {
    id: 40,
    question: "The philosopher argued that moral __________ is the foundation of a just society.",
    options: ["Relativism", "Relavitism", "Relativizm", "Relitivism"],
    answer: 0,
    explanation: "'Relativism' is correct — relative + -ism. Note 'relat-iv-ism', not 'relativ-ism' with an inserted vowel."
  },

  // Q41-Q50: Confusing pairs/groups — choose the correct word in context
  {
    id: 41,
    question: "The school ordered new __________ for the upcoming academic year. (stationary / stationery)",
    options: ["Stationary", "Stationery", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Stationery' (with an 'e') refers to writing materials such as paper, pens, and envelopes. 'Stationary' (with an 'a') means not moving. Mnemonic: stationERy contains lettERs."
  },
  {
    id: 42,
    question: "The __________ of the school decided to implement a new attendance policy. (principal / principle)",
    options: ["Principle", "Principal", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Principal' refers to the head of a school (or something of primary importance). 'Principle' means a fundamental truth or rule. Mnemonic: the principAL is your pAL."
  },
  {
    id: 43,
    question: "The blue curtains __________ the colour of the carpet perfectly. (complement / compliment)",
    options: ["Complement", "Compliment", "Both are correct in different contexts", "Complements"],
    answer: 0,
    explanation: "'Complement' means to complete or enhance something. 'Compliment' means to praise. The curtains complete/enhance the carpet, so 'complement' is correct."
  },
  {
    id: 44,
    question: "The medication was known to __________ the patient's blood pressure significantly. (affect / effect)",
    options: ["Effect", "Affect", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Affect' is usually a verb meaning to influence. 'Effect' is usually a noun meaning result. The medication influences (affects) blood pressure. 'Effect' as a verb means to bring about (e.g., 'to effect change')."
  },
  {
    id: 45,
    question: "Please keep the meeting agenda __________ — only the committee members need to know. (discreet / discrete)",
    options: ["Discrete", "Discreet", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Discreet' means careful and circumspect, keeping matters private. 'Discrete' means individually separate and distinct. The context requires confidentiality, so 'discreet' is correct."
  },
  {
    id: 46,
    question: "The report was divided into three __________ sections for clarity. (discreet / discrete)",
    options: ["Discreet", "Discrete", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Discrete' means individually separate and distinct, which fits the context of sections that are distinctly separated. 'Discreet' relates to keeping secrets or being tactful."
  },
  {
    id: 47,
    question: "The __________ of the new policy was felt across all departments. (affect / effect)",
    options: ["Affect", "Effect", "Affects", "Effects"],
    answer: 1,
    explanation: "'Effect' is used here as a noun meaning the result or outcome. 'Affect' is typically a verb. 'The effect of the new policy' — the result — is correct."
  },
  {
    id: 48,
    question: "She could not __________ the loss of her research data and had to restart. (accept / except)",
    options: ["Except", "Accept", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Accept' means to receive or agree to something. 'Except' means excluding. She 'accepted' (came to terms with) the loss — though reluctantly."
  },
  {
    id: 49,
    question: "The council decided to __________ the new building regulations with immediate effect. (adopt / adapt)",
    options: ["Adapt", "Adopt", "Both are acceptable", "Neither is correct"],
    answer: 1,
    explanation: "'Adopt' means to take something up as one's own or to formally accept. 'Adapt' means to modify for a new purpose. The council formally accepted (adopted) the new regulations."
  },
  {
    id: 50,
    question: "The pharmacist advised the patient to avoid the medication as it could __________ with the antibiotic. (interfere / intervene)",
    options: ["Intervene", "Interfere", "Both are correct", "Neither is correct"],
    answer: 1,
    explanation: "'Interfere with' is the correct collocation when describing a drug interaction — meaning to hinder or disrupt the action of another drug. 'Intervene' means to come between parties in a dispute or situation, and is not used for drug interactions."
  }
]

export default questions

const questions = [
  // Q1-Q15: Choose the correctly spelled word
  {
    id: 1,
    question: "Choose the correctly spelled word:",
    options: ["Sacrilegious", "Sacreligious", "Sacrilegeous", "Sacriligious"],
    answer: 0,
    explanation: "'Sacrilegious' is the correct spelling. A common error is writing 'sacreligious' by confusion with 'religion', but note the root is 'sacrilege', not 'religion'."
  },
  {
    id: 2,
    question: "Choose the correctly spelled word:",
    options: ["Supercede", "Supersede", "Superceed", "Superseed"],
    answer: 1,
    explanation: "'Supersede' is the correct spelling, derived from Latin 'supersedere'. It is the only English word ending in '-sede' (not '-cede' or '-ceed')."
  },
  {
    id: 3,
    question: "Choose the correctly spelled word:",
    options: ["Psoriasis", "Psoriasis", "Psorriasis", "Psorriasis"],
    answer: 0,
    explanation: "'Psoriasis' is the correct spelling, with a silent 'p' at the beginning — a Greek-derived medical term for the chronic skin condition."
  },
  {
    id: 4,
    question: "Choose the correctly spelled word:",
    options: ["Surreptitious", "Sureptitious", "Surrepticious", "Surepticous"],
    answer: 0,
    explanation: "'Surreptitious' is correct. It contains double 'r' and the suffix '-itious', not '-icious'. It means done secretly or stealthily."
  },
  {
    id: 5,
    question: "Choose the correctly spelled word:",
    options: ["Bureaucracy", "Bureacracy", "Bureaucracy", "Bureaucarcy"],
    answer: 0,
    explanation: "'Bureaucracy' is the correct spelling. The word contains 'bureau' + 'cracy'. A common error is omitting the 'u' after 'o' in 'bureau'."
  },
  {
    id: 6,
    question: "Choose the correctly spelled word:",
    options: ["Phlegmatic", "Flegmatic", "Phlegmmatic", "Phlegmattc"],
    answer: 0,
    explanation: "'Phlegmatic' is correctly spelled with a silent 'gh', derived from Greek 'phlegma'. It means having a calm, unemotional temperament."
  },
  {
    id: 7,
    question: "Choose the correctly spelled word:",
    options: ["Mnemonic", "Pneumonic", "Nemmonic", "Mneamonic"],
    answer: 0,
    explanation: "'Mnemonic' is correct, with a silent 'm' at the start, from Greek 'mnemonikos'. 'Pneumonic' refers to pneumonia, which is a different word entirely."
  },
  {
    id: 8,
    question: "Choose the correctly spelled word:",
    options: ["Consientious", "Conscientious", "Conscientous", "Concientious"],
    answer: 1,
    explanation: "'Conscientious' is the correct spelling. It includes 'sci' in the middle (from Latin 'conscientia') and ends in '-ious', not '-ous'."
  },
  {
    id: 9,
    question: "Choose the correctly spelled word:",
    options: ["Irridescent", "Iridescent", "Irridecent", "Iridecent"],
    answer: 1,
    explanation: "'Iridescent' is correctly spelled with a single 'r', from Latin 'iris' (rainbow). 'Irridescent' with double 'r' is a common misspelling."
  },
  {
    id: 10,
    question: "Choose the correctly spelled word:",
    options: ["Questionaire", "Questionnair", "Questionnaire", "Questionairre"],
    answer: 2,
    explanation: "'Questionnaire' is correct with double 'n' and double 'r' (borrowed from French). Both 'nn' and 'rr' are required."
  },
  {
    id: 11,
    question: "Choose the correctly spelled word:",
    options: ["Seperate", "Separate", "Seperrate", "Separrate"],
    answer: 1,
    explanation: "'Separate' is the correct spelling. A memory tip: there is 'a rat' in sep-a-rat-e. 'Seperate' is one of the most commonly misspelled words."
  },
  {
    id: 12,
    question: "Choose the correctly spelled word:",
    options: ["Benificial", "Beneficiel", "Beneficial", "Benficial"],
    answer: 2,
    explanation: "'Beneficial' is correct, from Latin 'beneficialis'. The middle vowel is 'e' (bene-) not 'i', and the suffix is '-icial', not '-icial'."
  },
  {
    id: 13,
    question: "Choose the correctly spelled word:",
    options: ["Reknowned", "Renouned", "Renowned", "Renownd"],
    answer: 2,
    explanation: "'Renowned' is correctly spelled without a 'k'. It comes from Old French 'renomer' and means famous or celebrated. 'Reknowned' is a common error."
  },
  {
    id: 14,
    question: "Choose the correctly spelled word:",
    options: ["Excrutciating", "Excrusiating", "Excruciating", "Excrutiating"],
    answer: 2,
    explanation: "'Excruciating' is correct, from Latin 'excruciare' (to torment). The key cluster is '-cruci-', not '-cruti-' or '-crusi-'."
  },
  {
    id: 15,
    question: "Choose the correctly spelled word:",
    options: ["Dilapidated", "Dillapidated", "Dilappadated", "Delapidated"],
    answer: 0,
    explanation: "'Dilapidated' is the correct spelling with a single 'l' and single 'p', from Latin 'dilapidare' (to scatter stones). 'Delapidated' is incorrect."
  },

  // Q16-Q30: Identify the misspelled word from the group
  {
    id: 16,
    question: "Identify the MISSPELLED word:",
    options: ["Committee", "Accommodate", "Occurence", "Occurrence"],
    answer: 2,
    explanation: "'Occurence' is misspelled. The correct spelling is 'Occurrence' with double 'c' and double 'r'. 'Committee' and 'Accommodate' are correctly spelled."
  },
  {
    id: 17,
    question: "Identify the MISSPELLED word:",
    options: ["Definitely", "Inadvertent", "Pronounciation", "Indispensable"],
    answer: 2,
    explanation: "'Pronounciation' is misspelled. The correct form is 'Pronunciation' (not 'pronounciation') — note there is no 'o' after 'pronunc-'."
  },
  {
    id: 18,
    question: "Identify the MISSPELLED word:",
    options: ["Parallell", "Parallel", "Parcel", "Parliament"],
    answer: 0,
    explanation: "'Parallell' is misspelled. The correct spelling is 'Parallel' with double 'l' only at the end but not a triple 'l'. The word ends in a single 'el'."
  },
  {
    id: 19,
    question: "Identify the MISSPELLED word:",
    options: ["Necessary", "Conscientious", "Mediocre", "Truely"],
    answer: 3,
    explanation: "'Truely' is misspelled. The correct spelling is 'Truly' — the 'e' from 'true' is dropped before adding '-ly'. 'Truely' is an extremely common error."
  },
  {
    id: 20,
    question: "Identify the MISSPELLED word:",
    options: ["Rhythm", "Syzygy", "Heirarchy", "Hygiene"],
    answer: 2,
    explanation: "'Heirarchy' is misspelled. The correct spelling is 'Hierarchy' — 'hier-' not 'heir-'. The word comes from Greek 'hierarchia', not from 'heir'."
  },
  {
    id: 21,
    question: "Identify the MISSPELLED word:",
    options: ["Exhilarate", "Exaggerate", "Excelerant", "Exorbitant"],
    answer: 2,
    explanation: "'Excelerant' is misspelled. The correct word is 'Accelerant', not 'Excelerant'. 'Accelerant' has double 'c' and starts with 'Acc-', not 'Exc-'."
  },
  {
    id: 22,
    question: "Identify the MISSPELLED word:",
    options: ["February", "Libary", "January", "Wednesday"],
    answer: 1,
    explanation: "'Libary' is misspelled. The correct spelling is 'Library' with 'libr-' not 'lib-'. Many people drop the first 'r', but both 'r' sounds are part of the standard spelling."
  },
  {
    id: 23,
    question: "Identify the MISSPELLED word:",
    options: ["Perseverance", "Surveillance", "Maintenance", "Rennaissance"],
    answer: 3,
    explanation: "'Rennaissance' is misspelled. The correct spelling is 'Renaissance' with a single 'n' in the middle. It is borrowed from French and means 'rebirth'."
  },
  {
    id: 24,
    question: "Identify the MISSPELLED word:",
    options: ["Anihilate", "Camouflage", "Entrepreneur", "Silhouette"],
    answer: 0,
    explanation: "'Anihilate' is misspelled. The correct spelling is 'Annihilate' with double 'n'. It comes from Latin 'annihilare' (to reduce to nothing)."
  },
  {
    id: 25,
    question: "Identify the MISSPELLED word:",
    options: ["Miscellaneous", "Mischievious", "Mischievous", "Miscreant"],
    answer: 1,
    explanation: "'Mischievious' is misspelled. The correct spelling is 'Mischievous' — four syllables, not five. Adding an extra 'i' to make 'mischievious' is a very common error."
  },
  {
    id: 26,
    question: "Identify the MISSPELLED word:",
    options: ["Embarrass", "Harass", "Harrass", "Morass"],
    answer: 2,
    explanation: "'Harrass' is misspelled. The correct spelling is 'Harass' with a single 'r' and double 's'. Unlike 'Embarrass' (double 'r', double 's'), 'Harass' has only one 'r'."
  },
  {
    id: 27,
    question: "Identify the MISSPELLED word:",
    options: ["Ecstasy", "Apostrophe", "Catastrophy", "Metamorphosis"],
    answer: 2,
    explanation: "'Catastrophy' is misspelled. The correct spelling is 'Catastrophe' — with an 'e' at the end, not 'y'. The Greek-derived word ends in '-e', not '-y'."
  },
  {
    id: 28,
    question: "Identify the MISSPELLED word:",
    options: ["Plagiarism", "Plagiarist", "Plagiarise", "Plagerism"],
    answer: 3,
    explanation: "'Plagerism' is misspelled. The correct spelling is 'Plagiarism' with 'plagi-' + '-arism'. The root comes from Latin 'plagiarius' (kidnapper)."
  },
  {
    id: 29,
    question: "Identify the MISSPELLED word:",
    options: ["Privilege", "Privelege", "Privileged", "Privileges"],
    answer: 1,
    explanation: "'Privelege' is misspelled. The correct spelling is 'Privilege' — note the vowel sequence: pri-vi-lege, not 'priv-e-lege'. This is one of the most commonly misspelled words."
  },
  {
    id: 30,
    question: "Identify the MISSPELLED word:",
    options: ["Connoisseur", "Liqueuer", "Liqueur", "Chauffeur"],
    answer: 1,
    explanation: "'Liqueuer' is misspelled. The correct spelling is 'Liqueur' — borrowed from French, it has the pattern '-eur' at the end, not '-euer'."
  },

  // Q31-Q40: Sentence context — fill in with correct spelling
  {
    id: 31,
    question: "The scientist's ________ findings were published in a peer-reviewed journal.",
    options: ["Empyrical", "Empirical", "Empiricle", "Emperical"],
    answer: 1,
    explanation: "'Empirical' is the correct spelling, from Greek 'empeirikos' (experienced). It means based on observation or experiment. 'Emperical' and 'empiricle' are common errors."
  },
  {
    id: 32,
    question: "The jury found the defendant ________ due to lack of evidence.",
    options: ["Innoncent", "Inocent", "Innocent", "Innocient"],
    answer: 2,
    explanation: "'Innocent' is correctly spelled with double 'n' at the start, a single 'c', and ending in '-ent' not '-ient'. From Latin 'innocens' (not harmful)."
  },
  {
    id: 33,
    question: "Her ________ approach to negotiations earned her great respect.",
    options: ["Diplomatic", "Dipliomatic", "Diplomattc", "Dipllomatic"],
    answer: 0,
    explanation: "'Diplomatic' is correct, from 'diploma' (Greek: folded paper). The adjective simply adds '-tic' to the root, with no doubled consonants."
  },
  {
    id: 34,
    question: "The explorer described the cave as an ________ underground chamber.",
    options: ["Enourmous", "Enormus", "Enormeous", "Enormous"],
    answer: 3,
    explanation: "'Enormous' is the correct spelling, from Latin 'enormis' (out of the norm). It ends in '-ous', not '-eous' or '-us'. 'Enourmous' adds a spurious 'u'."
  },
  {
    id: 35,
    question: "The professor's lecture was a clear ________ of Kantian ethics.",
    options: ["Elucidation", "Elusidation", "Elucidaton", "Elusidaton"],
    answer: 0,
    explanation: "'Elucidation' is correct — from Latin 'elucidare' (to make light). The key part is '-lucid-', not '-lusid-'. It means making something clear or explaining it."
  },
  {
    id: 36,
    question: "She received the award in ________ of her years of dedication.",
    options: ["Recogintion", "Recognistion", "Recognition", "Recoggnition"],
    answer: 2,
    explanation: "'Recognition' is correctly spelled — 'recog-' + '-ni-' + '-tion'. A common error is writing 'recogintion' by misplacing the 'i'."
  },
  {
    id: 37,
    question: "The committee made a ________ decision after hours of debate.",
    options: ["Unanimus", "Unanamous", "Unanimous", "Unanimeous"],
    answer: 2,
    explanation: "'Unanimous' is correct, from Latin 'unanimus' (of one mind). It ends in '-ous' (not '-eous' or '-us') and is spelled 'una-nim-ous'."
  },
  {
    id: 38,
    question: "The government announced a new ________ to improve rural infrastructure.",
    options: ["Inititative", "Initiative", "Innitiative", "Initiattive"],
    answer: 1,
    explanation: "'Initiative' is correctly spelled with a single 'n' and single 't'. From Latin 'initiare' (to begin). 'Inititative' with an extra 't' is a common error."
  },
  {
    id: 39,
    question: "The medicine showed ________ results in the clinical trial.",
    options: ["Phenomenel", "Phenomenal", "Phenominal", "Phennomenal"],
    answer: 1,
    explanation: "'Phenomenal' is the correct spelling — adjective form of 'phenomenon' (Greek: 'phainomenon'). The key: 'pheno-men-al', not 'phenom-in-al'."
  },
  {
    id: 40,
    question: "His ________ for detail made him an exceptional proofreader.",
    options: ["Meticulousness", "Meticulosness", "Meticulousnes", "Meticuloussness"],
    answer: 0,
    explanation: "'Meticulousness' is correct — 'meticulous' + '-ness'. From Latin 'meticulosus' (fearful). The base word 'meticulous' keeps its full spelling before '-ness' is added."
  },

  // Q41-Q50: Homophones and near-homophones in context
  {
    id: 41,
    question: "After years abroad, she decided to ________ to her home country.",
    options: ["Emigrate", "Immigrate", "Imigrate", "Emegrate"],
    answer: 1,
    explanation: "'Immigrate' means to come INTO a country to settle there. 'Emigrate' means to leave a country. Since she is returning TO her home country, 'immigrate' is correct."
  },
  {
    id: 42,
    question: "The stolen artwork continued to ________ the investigators for years.",
    options: ["Allude", "Elude", "Illude", "Delude"],
    answer: 1,
    explanation: "'Elude' means to escape or avoid (as in the artwork eluded investigators). 'Allude' means to refer to indirectly. 'Elude' is the correct choice here."
  },
  {
    id: 43,
    question: "The new safety regulations will ________ that all workers wear protective gear.",
    options: ["Insure", "Assure", "Ensure", "Assure"],
    answer: 2,
    explanation: "'Ensure' means to make certain something will happen. 'Insure' refers to financial insurance. 'Assure' means to reassure a person. 'Ensure' is correct in this context."
  },
  {
    id: 44,
    question: "The politician tried to ________ to the scandal without mentioning it directly.",
    options: ["Elude", "Allude", "Illude", "Allure"],
    answer: 1,
    explanation: "'Allude' means to refer to something indirectly. 'Elude' means to escape or evade. 'Allude to the scandal' is the correct construction in this context."
  },
  {
    id: 45,
    question: "The doctor warned of ________ effects if the medication was misused.",
    options: ["Averse", "Adverse", "Advert", "Avert"],
    answer: 1,
    explanation: "'Adverse' means harmful or unfavorable (adverse effects, adverse conditions). 'Averse' means having a strong dislike toward something (e.g., 'risk-averse'). 'Adverse' fits here."
  },
  {
    id: 46,
    question: "The detective found the ________ evidence hidden in the suspect's briefcase.",
    options: ["Illicit", "Elicit", "Ilicit", "Ellicit"],
    answer: 0,
    explanation: "'Illicit' means illegal or forbidden (illicit evidence). 'Elicit' is a verb meaning to draw out or provoke a response. 'Illicit' is the correct adjective here."
  },
  {
    id: 47,
    question: "The investigative report aimed to ________ the truth from unwilling witnesses.",
    options: ["Illicit", "Elicit", "Ilicit", "Ellicit"],
    answer: 1,
    explanation: "'Elicit' is a verb meaning to draw out or evoke (elicit a response, elicit the truth). 'Illicit' is an adjective meaning unlawful. 'Elicit' is correct in this context."
  },
  {
    id: 48,
    question: "She was completely ________ to taking risks with her savings.",
    options: ["Adverse", "Averse", "Avert", "Advert"],
    answer: 1,
    explanation: "'Averse' describes a strong personal dislike or reluctance (risk-averse, averse to change). 'Adverse' describes external harmful conditions. 'Averse' is correct here."
  },
  {
    id: 49,
    question: "The new policy will ________ all employees are compensated fairly.",
    options: ["Assure", "Insure", "Ensure", "Reassure"],
    answer: 2,
    explanation: "'Ensure' means to make certain or guarantee an outcome. 'Assure' is used with people (assure someone). 'Insure' relates to financial coverage. 'Ensure' is correct here."
  },
  {
    id: 50,
    question: "Hundreds of refugees decided to ________ from the war-torn region.",
    options: ["Immigrate", "Emigrate", "Emegrate", "Imigrate"],
    answer: 1,
    explanation: "'Emigrate' means to leave one's own country to settle elsewhere. 'Immigrate' means to arrive in a new country. Since the refugees are leaving their region, 'emigrate' is correct."
  }
]

export default questions

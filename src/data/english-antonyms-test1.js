const questions = [
  // Q1-Q15: Choose the antonym of [word]
  {
    id: 1,
    question: "Choose the antonym of: EPHEMERAL",
    options: ["Transient", "Fleeting", "Permanent", "Momentary"],
    answer: 2,
    explanation: "'Ephemeral' means lasting for a very short time. Its antonym is 'Permanent', meaning lasting indefinitely. 'Transient', 'Fleeting', and 'Momentary' are synonyms of ephemeral."
  },
  {
    id: 2,
    question: "Choose the antonym of: LOQUACIOUS",
    options: ["Garrulous", "Taciturn", "Verbose", "Voluble"],
    answer: 1,
    explanation: "'Loquacious' means tending to talk a great deal. Its antonym is 'Taciturn', meaning reserved and uncommunicative. 'Garrulous', 'Verbose', and 'Voluble' are all synonyms of loquacious."
  },
  {
    id: 3,
    question: "Choose the antonym of: MUNIFICENT",
    options: ["Generous", "Bountiful", "Parsimonious", "Lavish"],
    answer: 2,
    explanation: "'Munificent' means larger or more generous than is usual. Its antonym is 'Parsimonious', meaning excessively unwilling to spend. 'Generous', 'Bountiful', and 'Lavish' are synonyms of munificent."
  },
  {
    id: 4,
    question: "Choose the antonym of: SANGUINE",
    options: ["Optimistic", "Buoyant", "Pessimistic", "Confident"],
    answer: 2,
    explanation: "'Sanguine' means optimistic, especially in a difficult situation. Its antonym is 'Pessimistic', meaning tending to see the worst. 'Optimistic', 'Buoyant', and 'Confident' are synonyms of sanguine."
  },
  {
    id: 5,
    question: "Choose the antonym of: VERBOSE",
    options: ["Wordy", "Prolix", "Laconic", "Diffuse"],
    answer: 2,
    explanation: "'Verbose' means using more words than needed. Its antonym is 'Laconic', meaning using very few words. 'Wordy', 'Prolix', and 'Diffuse' are synonyms of verbose."
  },
  {
    id: 6,
    question: "Choose the antonym of: BENEVOLENT",
    options: ["Philanthropic", "Altruistic", "Malevolent", "Magnanimous"],
    answer: 2,
    explanation: "'Benevolent' means well-meaning and kindly. Its antonym is 'Malevolent', meaning having or showing a wish to do evil. 'Philanthropic', 'Altruistic', and 'Magnanimous' are synonyms of benevolent."
  },
  {
    id: 7,
    question: "Choose the antonym of: OBDURATE",
    options: ["Stubborn", "Intractable", "Tractable", "Adamant"],
    answer: 2,
    explanation: "'Obdurate' means stubbornly refusing to change one's opinion. Its antonym is 'Tractable', meaning easy to control or influence. 'Stubborn', 'Intractable', and 'Adamant' are synonyms of obdurate."
  },
  {
    id: 8,
    question: "Choose the antonym of: PELLUCID",
    options: ["Translucent", "Lucid", "Opaque", "Crystal-clear"],
    answer: 2,
    explanation: "'Pellucid' means translucently clear. Its antonym is 'Opaque', meaning not able to be seen through. 'Translucent', 'Lucid', and 'Crystal-clear' are synonyms of pellucid."
  },
  {
    id: 9,
    question: "Choose the antonym of: RECONDITE",
    options: ["Esoteric", "Abstruse", "Accessible", "Arcane"],
    answer: 2,
    explanation: "'Recondite' means little known; obscure. Its antonym is 'Accessible', meaning easily understood. 'Esoteric', 'Abstruse', and 'Arcane' are synonyms of recondite."
  },
  {
    id: 10,
    question: "Choose the antonym of: TURPITUDE",
    options: ["Depravity", "Wickedness", "Rectitude", "Vileness"],
    answer: 2,
    explanation: "'Turpitude' means wickedness or depravity. Its antonym is 'Rectitude', meaning morally correct behaviour. 'Depravity', 'Wickedness', and 'Vileness' are synonyms of turpitude."
  },
  {
    id: 11,
    question: "Choose the antonym of: INVETERATE",
    options: ["Habitual", "Chronic", "Occasional", "Confirmed"],
    answer: 2,
    explanation: "'Inveterate' means having a habit or activity deeply established. Its antonym is 'Occasional', meaning happening at irregular intervals. 'Habitual', 'Chronic', and 'Confirmed' are all synonyms."
  },
  {
    id: 12,
    question: "Choose the antonym of: ENERVATE",
    options: ["Debilitate", "Weaken", "Invigorate", "Enfeeble"],
    answer: 2,
    explanation: "'Enervate' means to cause someone to feel drained of energy. Its antonym is 'Invigorate', meaning to give strength or energy. 'Debilitate', 'Weaken', and 'Enfeeble' are synonyms."
  },
  {
    id: 13,
    question: "Choose the antonym of: ACRIMONIOUS",
    options: ["Bitter", "Rancorous", "Cordial", "Vitriolic"],
    answer: 2,
    explanation: "'Acrimonious' means angry and bitter. Its antonym is 'Cordial', meaning warm and friendly. 'Bitter', 'Rancorous', and 'Vitriolic' are synonyms of acrimonious."
  },
  {
    id: 14,
    question: "Choose the antonym of: GARRULOUS",
    options: ["Chatty", "Prattling", "Reticent", "Talkative"],
    answer: 2,
    explanation: "'Garrulous' means excessively talkative. Its antonym is 'Reticent', meaning not revealing one's thoughts readily. 'Chatty', 'Prattling', and 'Talkative' are synonyms."
  },
  {
    id: 15,
    question: "Choose the antonym of: NEFARIOUS",
    options: ["Villainous", "Heinous", "Virtuous", "Iniquitous"],
    answer: 2,
    explanation: "'Nefarious' means wicked or criminal. Its antonym is 'Virtuous', meaning having high moral standards. 'Villainous', 'Heinous', and 'Iniquitous' are synonyms of nefarious."
  },

  // Q16-Q30: Context-based antonyms
  {
    id: 16,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The scientist's 'PERSPICACIOUS' analysis helped solve the mystery.",
    options: ["Shrewd", "Obtuse", "Astute", "Discerning"],
    answer: 1,
    explanation: "In this context, 'perspicacious' means having a ready insight; shrewd. The most opposite in meaning is 'Obtuse', meaning slow to understand. 'Shrewd', 'Astute', and 'Discerning' are synonyms."
  },
  {
    id: 17,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The diplomat's 'EQUIVOCAL' response confused the delegates.",
    options: ["Ambiguous", "Vague", "Unambiguous", "Evasive"],
    answer: 2,
    explanation: "'Equivocal' means open to more than one interpretation. In contrast, 'Unambiguous' means clear and decisive. 'Ambiguous', 'Vague', and 'Evasive' are synonyms of equivocal."
  },
  {
    id: 18,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: Her 'SARDONIC' wit made the audience uncomfortable.",
    options: ["Mocking", "Cynical", "Sincere", "Sarcastic"],
    answer: 2,
    explanation: "'Sardonic' means grimly mocking or cynical. Its antonym in this context is 'Sincere', meaning genuine and earnest. 'Mocking', 'Cynical', and 'Sarcastic' are synonyms."
  },
  {
    id: 19,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The professor's 'PEDANTIC' lecture bored even the most dedicated students.",
    options: ["Scholarly", "Dogmatic", "Informal", "Didactic"],
    answer: 2,
    explanation: "'Pedantic' means excessively concerned with minor details or formality. Its opposite here is 'Informal', meaning relaxed and unconstrained. 'Scholarly', 'Dogmatic', and 'Didactic' don't capture the antonym precisely."
  },
  {
    id: 20,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The general's 'PUSILLANIMOUS' retreat cost them the battle.",
    options: ["Timid", "Craven", "Valiant", "Cowardly"],
    answer: 2,
    explanation: "'Pusillanimous' means showing a lack of courage. Its antonym is 'Valiant', meaning possessing or showing courage. 'Timid', 'Craven', and 'Cowardly' are synonyms."
  },
  {
    id: 21,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The author's 'PROLIX' style tested the patience of the readers.",
    options: ["Rambling", "Diffuse", "Terse", "Lengthy"],
    answer: 2,
    explanation: "'Prolix' means tediously lengthy. Its antonym is 'Terse', meaning using few words; brief and concise. 'Rambling', 'Diffuse', and 'Lengthy' are synonyms of prolix."
  },
  {
    id: 22,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: His 'SYCOPHANTIC' behaviour towards the boss disgusted his colleagues.",
    options: ["Fawning", "Obsequious", "Candid", "Flattering"],
    answer: 2,
    explanation: "'Sycophantic' means obsequiously flattering. Its antonym is 'Candid', meaning truthful and straightforward. 'Fawning', 'Obsequious', and 'Flattering' are synonyms."
  },
  {
    id: 23,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The politician gave a 'MENDACIOUS' account of the events.",
    options: ["Deceitful", "Untruthful", "Veracious", "Duplicitous"],
    answer: 2,
    explanation: "'Mendacious' means not telling the truth. Its antonym is 'Veracious', meaning speaking or representing the truth. 'Deceitful', 'Untruthful', and 'Duplicitous' are synonyms."
  },
  {
    id: 24,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The king ruled with 'DESPOTIC' authority, brooking no dissent.",
    options: ["Tyrannical", "Autocratic", "Democratic", "Dictatorial"],
    answer: 2,
    explanation: "'Despotic' means having absolute power in a cruel way. Its antonym is 'Democratic', meaning based on equal rights for all. 'Tyrannical', 'Autocratic', and 'Dictatorial' are synonyms."
  },
  {
    id: 25,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The miser's 'PENURIOUS' habits left him friendless.",
    options: ["Frugal", "Miserly", "Extravagant", "Niggardly"],
    answer: 2,
    explanation: "'Penurious' means unwilling to spend money; parsimonious. Its antonym is 'Extravagant', meaning lacking restraint in spending. 'Frugal', 'Miserly', and 'Niggardly' are synonyms."
  },
  {
    id: 26,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The judge was known for her 'IMPARTIAL' verdicts.",
    options: ["Fair", "Unbiased", "Partisan", "Equitable"],
    answer: 2,
    explanation: "'Impartial' means treating all rivals equally. Its antonym is 'Partisan', meaning prejudiced in favour of a particular cause. 'Fair', 'Unbiased', and 'Equitable' are synonyms."
  },
  {
    id: 27,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: His 'TACIT' agreement was taken as full endorsement.",
    options: ["Implied", "Unspoken", "Explicit", "Understood"],
    answer: 2,
    explanation: "'Tacit' means understood without being stated. Its antonym is 'Explicit', meaning stated clearly and in detail. 'Implied', 'Unspoken', and 'Understood' are synonyms."
  },
  {
    id: 28,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The CEO made a 'PRAGMATIC' decision to cut costs.",
    options: ["Practical", "Realistic", "Idealistic", "Sensible"],
    answer: 2,
    explanation: "'Pragmatic' means dealing with things sensibly and practically. Its antonym is 'Idealistic', meaning regarding things as they should be rather than as they are. 'Practical', 'Realistic', and 'Sensible' are synonyms."
  },
  {
    id: 29,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: The child showed 'PRECOCIOUS' talent in mathematics.",
    options: ["Advanced", "Gifted", "Backward", "Prodigious"],
    answer: 2,
    explanation: "'Precocious' means having developed certain abilities at an earlier age than usual. Its antonym is 'Backward', meaning having made less than normal progress. 'Advanced', 'Gifted', and 'Prodigious' are synonyms."
  },
  {
    id: 30,
    question: "Choose the word most opposite in meaning to the underlined word as used in the sentence: Her 'INTREPID' nature made her an ideal candidate for the mission.",
    options: ["Fearless", "Dauntless", "Timorous", "Audacious"],
    answer: 2,
    explanation: "'Intrepid' means fearless; adventurous. Its antonym is 'Timorous', meaning showing or suffering from nervousness. 'Fearless', 'Dauntless', and 'Audacious' are synonyms."
  },

  // Q31-Q40: Which word is NOT an antonym of [word]?
  {
    id: 31,
    question: "Which of the following is NOT an antonym of PHLEGMATIC?",
    options: ["Excitable", "Impassive", "Passionate", "Animated"],
    answer: 1,
    explanation: "'Phlegmatic' means having an unemotional and calm disposition. 'Excitable', 'Passionate', and 'Animated' are antonyms (showing emotion). 'Impassive' is actually a synonym of phlegmatic, meaning not feeling or showing emotion — so it is NOT an antonym."
  },
  {
    id: 32,
    question: "Which of the following is NOT an antonym of PENURY?",
    options: ["Affluence", "Opulence", "Destitution", "Abundance"],
    answer: 2,
    explanation: "'Penury' means extreme poverty. 'Affluence', 'Opulence', and 'Abundance' are antonyms (states of wealth). 'Destitution' is a synonym of penury — so it is NOT an antonym."
  },
  {
    id: 33,
    question: "Which of the following is NOT an antonym of AMELIORATE?",
    options: ["Worsen", "Exacerbate", "Improve", "Aggravate"],
    answer: 2,
    explanation: "'Ameliorate' means to make something bad or unsatisfactory better. 'Worsen', 'Exacerbate', and 'Aggravate' are antonyms. 'Improve' is a synonym of ameliorate — so it is NOT an antonym."
  },
  {
    id: 34,
    question: "Which of the following is NOT an antonym of LACHRYMOSE?",
    options: ["Cheerful", "Mournful", "Jovial", "Buoyant"],
    answer: 1,
    explanation: "'Lachrymose' means tearful or given to weeping. 'Cheerful', 'Jovial', and 'Buoyant' are antonyms. 'Mournful' is a synonym of lachrymose — so it is NOT an antonym."
  },
  {
    id: 35,
    question: "Which of the following is NOT an antonym of PERFIDIOUS?",
    options: ["Loyal", "Treacherous", "Faithful", "Trustworthy"],
    answer: 1,
    explanation: "'Perfidious' means deceitful and untrustworthy. 'Loyal', 'Faithful', and 'Trustworthy' are antonyms. 'Treacherous' is a synonym of perfidious — so it is NOT an antonym."
  },
  {
    id: 36,
    question: "Which of the following is NOT an antonym of IMPECUNIOUS?",
    options: ["Affluent", "Indigent", "Wealthy", "Prosperous"],
    answer: 1,
    explanation: "'Impecunious' means having little or no money. 'Affluent', 'Wealthy', and 'Prosperous' are antonyms. 'Indigent' is a synonym of impecunious — so it is NOT an antonym."
  },
  {
    id: 37,
    question: "Which of the following is NOT an antonym of ALACRITY?",
    options: ["Reluctance", "Eagerness", "Sluggishness", "Apathy"],
    answer: 1,
    explanation: "'Alacrity' means brisk and cheerful readiness. 'Reluctance', 'Sluggishness', and 'Apathy' are antonyms. 'Eagerness' is a synonym of alacrity — so it is NOT an antonym."
  },
  {
    id: 38,
    question: "Which of the following is NOT an antonym of INIMICAL?",
    options: ["Hostile", "Friendly", "Amicable", "Harmonious"],
    answer: 0,
    explanation: "'Inimical' means tending to obstruct or harm; hostile. 'Friendly', 'Amicable', and 'Harmonious' are antonyms. 'Hostile' is a synonym of inimical — so it is NOT an antonym."
  },
  {
    id: 39,
    question: "Which of the following is NOT an antonym of FECUND?",
    options: ["Sterile", "Barren", "Prolific", "Infertile"],
    answer: 2,
    explanation: "'Fecund' means producing or capable of producing an abundance of offspring. 'Sterile', 'Barren', and 'Infertile' are antonyms. 'Prolific' is a synonym of fecund — so it is NOT an antonym."
  },
  {
    id: 40,
    question: "Which of the following is NOT an antonym of MAGNANIMOUS?",
    options: ["Petty", "Generous", "Mean-spirited", "Uncharitable"],
    answer: 1,
    explanation: "'Magnanimous' means generous or forgiving, especially towards a rival. 'Petty', 'Mean-spirited', and 'Uncharitable' are antonyms. 'Generous' is a synonym of magnanimous — so it is NOT an antonym."
  },

  // Q41-Q50: Replace the underlined word with its antonym
  {
    id: 41,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The critic gave a 'LAUDATORY' review of the new film.",
    options: ["Praising", "Scathing", "Complimentary", "Flattering"],
    answer: 1,
    explanation: "'Laudatory' means expressing praise. Replacing it with 'Scathing' (meaning severely critical) reverses the meaning. 'Praising', 'Complimentary', and 'Flattering' are synonyms of laudatory."
  },
  {
    id: 42,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The evidence presented was 'COGENT' enough to convince the jury.",
    options: ["Compelling", "Persuasive", "Inconclusive", "Convincing"],
    answer: 2,
    explanation: "'Cogent' means clear, logical, and convincing. Replacing it with 'Inconclusive' (not leading to a firm conclusion) reverses the meaning. 'Compelling', 'Persuasive', and 'Convincing' are synonyms of cogent."
  },
  {
    id: 43,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The rebel's speech was 'INCENDIARY' and provoked an uprising.",
    options: ["Inflammatory", "Provocative", "Conciliatory", "Rabble-rousing"],
    answer: 2,
    explanation: "'Incendiary' means tending to stir up conflict. Replacing it with 'Conciliatory' (intended to reconcile) reverses the meaning. 'Inflammatory', 'Provocative', and 'Rabble-rousing' are synonyms."
  },
  {
    id: 44,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The committee's 'DILATORY' tactics frustrated the opposition.",
    options: ["Delaying", "Procrastinating", "Expeditious", "Sluggish"],
    answer: 2,
    explanation: "'Dilatory' means slow to act. Replacing it with 'Expeditious' (done quickly and efficiently) reverses the meaning. 'Delaying', 'Procrastinating', and 'Sluggish' are synonyms."
  },
  {
    id: 45,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: His 'OSTENTATIOUS' lifestyle attracted much media attention.",
    options: ["Showy", "Flamboyant", "Austere", "Pretentious"],
    answer: 2,
    explanation: "'Ostentatious' means characterized by vulgar display. Replacing it with 'Austere' (simple and without comfort) reverses the meaning. 'Showy', 'Flamboyant', and 'Pretentious' are synonyms."
  },
  {
    id: 46,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The teacher's 'STRINGENT' grading policy lowered the class average.",
    options: ["Strict", "Rigorous", "Lenient", "Exacting"],
    answer: 2,
    explanation: "'Stringent' means strict and precise. Replacing it with 'Lenient' (more merciful or tolerant) reverses the meaning. 'Strict', 'Rigorous', and 'Exacting' are synonyms of stringent."
  },
  {
    id: 47,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The new law was seen as 'INIMICAL' to individual freedoms.",
    options: ["Harmful", "Detrimental", "Conducive", "Adverse"],
    answer: 2,
    explanation: "'Inimical' means tending to obstruct or harm. Replacing it with 'Conducive' (making a certain situation likely) reverses the meaning. 'Harmful', 'Detrimental', and 'Adverse' are synonyms."
  },
  {
    id: 48,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The artist's 'MERETRICIOUS' work attracted buyers who did not understand real quality.",
    options: ["Gaudy", "Tawdry", "Genuine", "Flashy"],
    answer: 2,
    explanation: "'Meretricious' means apparently attractive but having in reality no value. Replacing it with 'Genuine' (truly what something is said to be) reverses the meaning. 'Gaudy', 'Tawdry', and 'Flashy' are synonyms."
  },
  {
    id: 49,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The 'SALUBRIOUS' mountain air helped restore his health.",
    options: ["Healthy", "Wholesome", "Noxious", "Invigorating"],
    answer: 2,
    explanation: "'Salubrious' means health-giving; healthy. Replacing it with 'Noxious' (harmful, poisonous) reverses the meaning. 'Healthy', 'Wholesome', and 'Invigorating' are synonyms."
  },
  {
    id: 50,
    question: "Replace the underlined word with its antonym to change the meaning of the sentence: The minister's 'PELLUCID' explanation cleared all doubts.",
    options: ["Transparent", "Lucid", "Abstruse", "Coherent"],
    answer: 2,
    explanation: "'Pellucid' means clear in expression. Replacing it with 'Abstruse' (difficult to understand; obscure) reverses the meaning. 'Transparent', 'Lucid', and 'Coherent' are synonyms of pellucid."
  }
]

export default questions

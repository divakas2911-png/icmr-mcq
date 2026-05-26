const questions = [
  // Q1–Q15: Choose the synonym of [word]
  {
    id: 1,
    question: "Choose the synonym of 'OBSEQUIOUS':",
    options: ["Servile", "Arrogant", "Indifferent", "Truculent"],
    answer: 0,
    explanation: "'Obsequious' means excessively compliant or deferential. 'Servile' means overly submissive, making it the closest synonym. 'Arrogant' is the antonym, 'indifferent' means unconcerned, and 'truculent' means eager to argue."
  },
  {
    id: 2,
    question: "Choose the synonym of 'SYCOPHANTIC':",
    options: ["Candid", "Fawning", "Imperious", "Reticent"],
    answer: 1,
    explanation: "'Sycophantic' means acting in an obsequious way to gain favour. 'Fawning' means cringing or excessively flattering, which is the correct synonym. 'Candid' means frank, 'imperious' means arrogantly commanding, and 'reticent' means reserved."
  },
  {
    id: 3,
    question: "Choose the synonym of 'PERFUNCTORY':",
    options: ["Meticulous", "Cursory", "Elaborate", "Diligent"],
    answer: 1,
    explanation: "'Perfunctory' means carried out with minimum effort, done as a routine duty. 'Cursory' means hasty and superficial, making it the best synonym. 'Meticulous' and 'diligent' are antonyms, and 'elaborate' implies great detail."
  },
  {
    id: 4,
    question: "Choose the synonym of 'EGREGIOUS':",
    options: ["Trivial", "Laudable", "Flagrant", "Subtle"],
    answer: 2,
    explanation: "'Egregious' means outstandingly bad or shocking. 'Flagrant' means conspicuously and offensively wrong, making it the closest synonym. 'Trivial' means unimportant, 'laudable' means praiseworthy, and 'subtle' means not obvious."
  },
  {
    id: 5,
    question: "Choose the synonym of 'PERNICIOUS':",
    options: ["Salutary", "Baneful", "Benign", "Innocuous"],
    answer: 1,
    explanation: "'Pernicious' means having a harmful effect, especially in a gradual or subtle way. 'Baneful' means causing harm or ruin, which is the closest synonym. 'Salutary', 'benign', and 'innocuous' all mean harmless or beneficial."
  },
  {
    id: 6,
    question: "Choose the synonym of 'MENDACIOUS':",
    options: ["Veracious", "Duplicitous", "Guileless", "Candid"],
    answer: 1,
    explanation: "'Mendacious' means not telling the truth; lying. 'Duplicitous' means deceitful, which is the closest synonym. 'Veracious', 'guileless', and 'candid' all indicate honesty, making them antonyms."
  },
  {
    id: 7,
    question: "Choose the synonym of 'PERSPICACIOUS':",
    options: ["Obtuse", "Astute", "Credulous", "Vapid"],
    answer: 1,
    explanation: "'Perspicacious' means having a ready insight into things; shrewdly perceptive. 'Astute' means shrewdly insightful, making it the correct synonym. 'Obtuse' means slow to understand, 'credulous' means too ready to believe, and 'vapid' means offering nothing stimulating."
  },
  {
    id: 8,
    question: "Choose the synonym of 'MAGNANIMOUS':",
    options: ["Parsimonious", "Vindictive", "Benevolent", "Petulant"],
    answer: 2,
    explanation: "'Magnanimous' means generous or forgiving, especially toward a rival or less powerful person. 'Benevolent' means well-meaning and kindly, which is the closest synonym. 'Parsimonious' means excessively frugal, 'vindictive' means seeking revenge, and 'petulant' means childishly sulky."
  },
  {
    id: 9,
    question: "Choose the synonym of 'GARRULOUS':",
    options: ["Taciturn", "Laconic", "Loquacious", "Morose"],
    answer: 2,
    explanation: "'Garrulous' means excessively talkative, especially on trivial matters. 'Loquacious' means tending to talk a great deal, making it the correct synonym. 'Taciturn' and 'laconic' mean reserved in speech, and 'morose' means sullen and ill-tempered."
  },
  {
    id: 10,
    question: "Choose the synonym of 'TRUCULENT':",
    options: ["Placid", "Belligerent", "Amiable", "Diffident"],
    answer: 1,
    explanation: "'Truculent' means eager or quick to argue or fight; aggressively defiant. 'Belligerent' means hostile and aggressive, making it the closest synonym. 'Placid' means calm, 'amiable' means friendly, and 'diffident' means modest or shy."
  },
  {
    id: 11,
    question: "Choose the synonym of 'RECONDITE':",
    options: ["Manifest", "Arcane", "Lucid", "Pellucid"],
    answer: 1,
    explanation: "'Recondite' means little known; abstruse. 'Arcane' means understood by few; mysterious, making it the closest synonym. 'Manifest', 'lucid', and 'pellucid' all suggest clarity or obviousness."
  },
  {
    id: 12,
    question: "Choose the synonym of 'PUSILLANIMOUS':",
    options: ["Audacious", "Craven", "Intrepid", "Dauntless"],
    answer: 1,
    explanation: "'Pusillanimous' means showing a lack of courage or determination; timid. 'Craven' means contemptibly lacking in courage, which is the closest synonym. 'Audacious', 'intrepid', and 'dauntless' all indicate bravery."
  },
  {
    id: 13,
    question: "Choose the synonym of 'EQUIVOCATE':",
    options: ["Assert", "Prevaricate", "Affirm", "Corroborate"],
    answer: 1,
    explanation: "'Equivocate' means use ambiguous language so as to conceal the truth. 'Prevaricate' means speak or act evasively, making it the closest synonym. 'Assert', 'affirm', and 'corroborate' all imply confirming or stating clearly."
  },
  {
    id: 14,
    question: "Choose the synonym of 'INVETERATE':",
    options: ["Transient", "Incorrigible", "Fleeting", "Ephemeral"],
    answer: 1,
    explanation: "'Inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change. 'Incorrigible' means not able to be corrected or reformed, making it the closest synonym. The other options imply short duration."
  },
  {
    id: 15,
    question: "Choose the synonym of 'VITUPERATE':",
    options: ["Extol", "Laud", "Castigate", "Eulogise"],
    answer: 2,
    explanation: "'Vituperate' means to blame or insult someone in strong or violent language. 'Castigate' means to reprimand someone severely, making it the closest synonym. 'Extol', 'laud', and 'eulogise' all mean to praise highly."
  },

  // Q16–Q30: Context-based synonyms
  {
    id: 16,
    question: "Which word is closest in meaning to 'EPHEMERAL' as used in the sentence: 'The politician's popularity proved ephemeral, fading within months'?",
    options: ["Enduring", "Transient", "Robust", "Perpetual"],
    answer: 1,
    explanation: "In this context, 'ephemeral' means lasting for a very short time. 'Transient' means lasting only for a short time, making it the closest synonym. 'Enduring' and 'perpetual' mean long-lasting, and 'robust' means strong."
  },
  {
    id: 17,
    question: "Which word is closest in meaning to 'PROPITIOUS' as used in: 'The clear skies and calm winds made it a propitious day for the voyage'?",
    options: ["Inauspicious", "Ominous", "Auspicious", "Turbulent"],
    answer: 2,
    explanation: "'Propitious' means giving or indicating a good chance of success; favourable. 'Auspicious' means conducive to success; favourable, making it the exact synonym in this context."
  },
  {
    id: 18,
    question: "Which word is closest in meaning to 'LACONIC' as used in: 'His laconic reply of just two words surprised the verbose interviewer'?",
    options: ["Verbose", "Prolix", "Terse", "Expansive"],
    answer: 2,
    explanation: "'Laconic' means using very few words. 'Terse' means sparing in the use of words; abrupt, making it the closest synonym. 'Verbose' and 'prolix' mean using too many words, and 'expansive' means covering a wide area."
  },
  {
    id: 19,
    question: "Which word is closest in meaning to 'INIMICAL' as used in: 'Such sedentary habits are inimical to good health'?",
    options: ["Conducive", "Beneficial", "Deleterious", "Salutary"],
    answer: 2,
    explanation: "'Inimical' means tending to obstruct or harm. 'Deleterious' means causing harm or damage, making it the closest synonym in this context. 'Conducive', 'beneficial', and 'salutary' all imply promoting or helping."
  },
  {
    id: 20,
    question: "Which word is closest in meaning to 'ENERVATE' as used in: 'The prolonged illness had enervated him completely'?",
    options: ["Invigorate", "Fortify", "Debilitate", "Energise"],
    answer: 2,
    explanation: "'Enervate' means make someone feel drained of energy or vitality. 'Debilitate' means make someone weak and infirm, which is the closest synonym here. The other options all mean to strengthen or give energy."
  },
  {
    id: 21,
    question: "Which word is closest in meaning to 'PELLUCID' as used in: 'She offered a pellucid explanation that even novices could understand'?",
    options: ["Opaque", "Abstruse", "Lucid", "Convoluted"],
    answer: 2,
    explanation: "'Pellucid' means translucently clear; easily understood. 'Lucid' means expressed clearly; easy to understand, making it the closest synonym. 'Opaque' and 'abstruse' mean difficult to understand, and 'convoluted' means extremely complex."
  },
  {
    id: 22,
    question: "Which word is closest in meaning to 'INEXORABLE' as used in: 'The inexorable march of time spares no one'?",
    options: ["Pliant", "Relentless", "Flexible", "Yielding"],
    answer: 1,
    explanation: "'Inexorable' means impossible to stop or prevent. 'Relentless' means oppressively constant; incessant, making it the closest synonym. 'Pliant', 'flexible', and 'yielding' all suggest the ability to be changed."
  },
  {
    id: 23,
    question: "Which word is closest in meaning to 'PRODIGAL' as used in: 'His prodigal spending habits left him bankrupt within a year'?",
    options: ["Frugal", "Parsimonious", "Profligate", "Prudent"],
    answer: 2,
    explanation: "'Prodigal' in this context means spending money or resources freely and recklessly. 'Profligate' means recklessly extravagant, making it the closest synonym. 'Frugal', 'parsimonious', and 'prudent' all imply carefulness with money."
  },
  {
    id: 24,
    question: "Which word is closest in meaning to 'REDOLENT' as used in: 'The passage was redolent of nostalgia and bygone days'?",
    options: ["Devoid", "Bereft", "Evocative", "Destitute"],
    answer: 2,
    explanation: "'Redolent' used figuratively means strongly suggestive or reminiscent of something. 'Evocative' means bringing strong images, memories, or feelings to mind, making it the closest synonym. The other options imply lacking or absence."
  },
  {
    id: 25,
    question: "Which word is closest in meaning to 'SANGUINE' as used in: 'Despite the setbacks, she remained sanguine about the project's success'?",
    options: ["Pessimistic", "Despondent", "Optimistic", "Apprehensive"],
    answer: 2,
    explanation: "'Sanguine' means optimistic or positive, especially in a difficult situation. 'Optimistic' is therefore the closest synonym. 'Pessimistic', 'despondent', and 'apprehensive' all indicate negative outlooks."
  },
  {
    id: 26,
    question: "Which word is closest in meaning to 'TENDENTIOUS' as used in: 'The report was tendentious, clearly favouring one political party over the other'?",
    options: ["Impartial", "Biased", "Objective", "Dispassionate"],
    answer: 1,
    explanation: "'Tendentious' means promoting a particular cause or point of view; biased. 'Biased' means unfairly prejudiced for or against someone or something, making it the closest synonym. The other options all mean fair and balanced."
  },
  {
    id: 27,
    question: "Which word is closest in meaning to 'NUGATORY' as used in: 'His contribution to the project was nugatory and easily overlooked'?",
    options: ["Invaluable", "Significant", "Trifling", "Paramount"],
    answer: 2,
    explanation: "'Nugatory' means of no value or importance. 'Trifling' means unimportant; not serious, making it the closest synonym. 'Invaluable', 'significant', and 'paramount' all indicate importance."
  },
  {
    id: 28,
    question: "Which word is closest in meaning to 'LASSITUDE' as used in: 'After weeks of intense work, a deep lassitude overcame her'?",
    options: ["Vigour", "Languor", "Alacrity", "Zeal"],
    answer: 1,
    explanation: "'Lassitude' means physical or mental weariness; lack of energy. 'Languor' means the state of tiredness or inactivity, making it the closest synonym. 'Vigour', 'alacrity', and 'zeal' all indicate energy or enthusiasm."
  },
  {
    id: 29,
    question: "Which word is closest in meaning to 'IMPUGN' as used in: 'The defence lawyer sought to impugn the credibility of the witness'?",
    options: ["Vindicate", "Exonerate", "Gainsay", "Corroborate"],
    answer: 2,
    explanation: "'Impugn' means dispute the truth, validity, or honesty of. 'Gainsay' means deny or contradict, making it the closest synonym. 'Vindicate', 'exonerate', and 'corroborate' all mean to support or confirm."
  },
  {
    id: 30,
    question: "Which word is closest in meaning to 'CAVIL' as used in: 'Critics were quick to cavil at every minor detail of the proposal'?",
    options: ["Applaud", "Quibble", "Extol", "Commend"],
    answer: 1,
    explanation: "'Cavil' means make petty or unnecessary objections. 'Quibble' means argue about petty and trivial matters, making it the closest synonym. 'Applaud', 'extol', and 'commend' all mean to praise."
  },

  // Q31–Q40: Choose the word that CANNOT be a synonym
  {
    id: 31,
    question: "Choose the word that CANNOT be a synonym of 'VENERATE':",
    options: ["Revere", "Esteem", "Idolise", "Deprecate"],
    answer: 3,
    explanation: "'Venerate' means regard with great respect. 'Revere', 'esteem', and 'idolise' all convey deep respect or admiration. 'Deprecate' means express disapproval of, making it the word that CANNOT be a synonym."
  },
  {
    id: 32,
    question: "Choose the word that CANNOT be a synonym of 'PHLEGMATIC':",
    options: ["Stoic", "Imperturbable", "Composed", "Volatile"],
    answer: 3,
    explanation: "'Phlegmatic' means having an unemotional and stolidly calm disposition. 'Stoic', 'imperturbable', and 'composed' all describe calmness. 'Volatile' means liable to change rapidly and unpredictably, making it the word that CANNOT be a synonym."
  },
  {
    id: 33,
    question: "Choose the word that CANNOT be a synonym of 'ACRIMONIOUS':",
    options: ["Caustic", "Vitriolic", "Acerbic", "Conciliatory"],
    answer: 3,
    explanation: "'Acrimonious' means angry and bitter in manner or speech. 'Caustic', 'vitriolic', and 'acerbic' all describe sharp, biting criticism or bitterness. 'Conciliatory' means intended to placate or pacify, making it the word that CANNOT be a synonym."
  },
  {
    id: 34,
    question: "Choose the word that CANNOT be a synonym of 'FECUND':",
    options: ["Prolific", "Fertile", "Fruitful", "Barren"],
    answer: 3,
    explanation: "'Fecund' means producing or capable of producing an abundance of offspring or new growth. 'Prolific', 'fertile', and 'fruitful' all convey productivity or abundance. 'Barren' means too poor to produce much or any vegetation, making it the word that CANNOT be a synonym."
  },
  {
    id: 35,
    question: "Choose the word that CANNOT be a synonym of 'DIFFIDENT':",
    options: ["Timid", "Meek", "Bashful", "Presumptuous"],
    answer: 3,
    explanation: "'Diffident' means modest or shy due to a lack of self-confidence. 'Timid', 'meek', and 'bashful' all describe shyness or lack of confidence. 'Presumptuous' means failing to observe the limits of what is appropriate, making it the word that CANNOT be a synonym."
  },
  {
    id: 36,
    question: "Choose the word that CANNOT be a synonym of 'LACHRYMOSE':",
    options: ["Tearful", "Mournful", "Doleful", "Blithe"],
    answer: 3,
    explanation: "'Lachrymose' means tearful or given to weeping. 'Tearful', 'mournful', and 'doleful' all describe sadness or grief. 'Blithe' means showing a casual and cheerful indifference, making it the word that CANNOT be a synonym."
  },
  {
    id: 37,
    question: "Choose the word that CANNOT be a synonym of 'ACUMEN':",
    options: ["Sagacity", "Perspicacity", "Obtuseness", "Shrewdness"],
    answer: 2,
    explanation: "'Acumen' means the ability to make good judgements and take quick decisions. 'Sagacity', 'perspicacity', and 'shrewdness' all describe sharp insight. 'Obtuseness' means slowness to understand, making it the word that CANNOT be a synonym."
  },
  {
    id: 38,
    question: "Choose the word that CANNOT be a synonym of 'PARSIMONIOUS':",
    options: ["Miserly", "Penurious", "Munificent", "Niggardly"],
    answer: 2,
    explanation: "'Parsimonious' means unwilling to spend money or use resources; stingy. 'Miserly', 'penurious', and 'niggardly' all describe extreme frugality. 'Munificent' means more generous than is usual or necessary, making it the word that CANNOT be a synonym."
  },
  {
    id: 39,
    question: "Choose the word that CANNOT be a synonym of 'QUERULOUS':",
    options: ["Petulant", "Peevish", "Fractious", "Sanguine"],
    answer: 3,
    explanation: "'Querulous' means complaining in a petulant or whining manner. 'Petulant', 'peevish', and 'fractious' all describe irritability or bad temper. 'Sanguine' means optimistic or positive, making it the word that CANNOT be a synonym."
  },
  {
    id: 40,
    question: "Choose the word that CANNOT be a synonym of 'TORPID':",
    options: ["Lethargic", "Sluggish", "Somnolent", "Vivacious"],
    answer: 3,
    explanation: "'Torpid' means mentally or physically inactive; lethargic. 'Lethargic', 'sluggish', and 'somnolent' all describe lack of energy or alertness. 'Vivacious' means attractively lively and animated, making it the word that CANNOT be a synonym."
  },

  // Q41–Q50: Replace the underlined word with its most appropriate synonym
  {
    id: 41,
    question: "Replace the underlined word with its most appropriate synonym:\n'The new policy was seen as an INVIDIOUS attempt to divide the workforce.'",
    options: ["Equitable", "Discriminatory", "Laudable", "Impartial"],
    answer: 1,
    explanation: "'Invidious' means likely to arouse resentment or anger in others, especially by making unfair distinctions. 'Discriminatory' means making unjust distinctions, which best replaces it in this context. The other options suggest fairness."
  },
  {
    id: 42,
    question: "Replace the underlined word with its most appropriate synonym:\n'His MERETRICIOUS arguments, though superficially attractive, lacked substance.'",
    options: ["Specious", "Cogent", "Rigorous", "Irrefutable"],
    answer: 0,
    explanation: "'Meretricious' means apparently attractive but having in reality no value or integrity. 'Specious' means superficially plausible but actually wrong, making it the best replacement. 'Cogent', 'rigorous', and 'irrefutable' all describe sound arguments."
  },
  {
    id: 43,
    question: "Replace the underlined word with its most appropriate synonym:\n'The scientist's ABSTRUSE paper was accessible only to specialists in the field.'",
    options: ["Lucid", "Perspicuous", "Esoteric", "Transparent"],
    answer: 2,
    explanation: "'Abstruse' means difficult to understand; obscure. 'Esoteric' means intended for or likely to be understood by only a small number of people, making it the best replacement. 'Lucid', 'perspicuous', and 'transparent' all mean easy to understand."
  },
  {
    id: 44,
    question: "Replace the underlined word with its most appropriate synonym:\n'The manager's PEREMPTORY dismissal of the proposal shocked the entire team.'",
    options: ["Tentative", "High-handed", "Meek", "Hesitant"],
    answer: 1,
    explanation: "'Peremptory' means insisting on immediate attention or obedience, especially in a brusquely imperious way. 'High-handed' means arrogantly dismissive, making it the best replacement. 'Tentative', 'meek', and 'hesitant' imply uncertainty."
  },
  {
    id: 45,
    question: "Replace the underlined word with its most appropriate synonym:\n'Her SARDONIC smile suggested she found the situation deeply ironic.'",
    options: ["Sincere", "Sardonic / Cynical", "Earnest", "Genial"],
    answer: 1,
    explanation: "'Sardonic' means grimly mocking or cynical. 'Cynical' best captures this nuance of mocking disbelief. 'Sincere', 'earnest', and 'genial' all convey positive or genuine warmth."
  },
  {
    id: 46,
    question: "Replace the underlined word with its most appropriate synonym:\n'The IMPLACABLE opposition of the protesters forced the government to reconsider.'",
    options: ["Relentless", "Manageable", "Subdued", "Conciliatory"],
    answer: 0,
    explanation: "'Implacable' means unable to be appeased, placated, or mitigated; relentless. 'Relentless' means oppressively constant, making it the best replacement. 'Manageable', 'subdued', and 'conciliatory' all suggest a lessening of intensity."
  },
  {
    id: 47,
    question: "Replace the underlined word with its most appropriate synonym:\n'He was known for his PUNCTILIOUS attention to the rules of etiquette.'",
    options: ["Negligent", "Scrupulous", "Lax", "Careless"],
    answer: 1,
    explanation: "'Punctilious' means showing great attention to detail or correct behaviour. 'Scrupulous' means very careful about doing the right thing; meticulous, making it the best replacement. The other options suggest carelessness."
  },
  {
    id: 48,
    question: "Replace the underlined word with its most appropriate synonym:\n'The DILATORY tactics of the opposition delayed the bill's passage by months.'",
    options: ["Expedient", "Tardy", "Prompt", "Decisive"],
    answer: 1,
    explanation: "'Dilatory' means slow to act; intended to cause delay. 'Tardy' means delaying or delayed beyond the right or expected time, making it the best replacement. 'Expedient', 'prompt', and 'decisive' all suggest speed or timeliness."
  },
  {
    id: 49,
    question: "Replace the underlined word with its most appropriate synonym:\n'The author's PELLUCID prose made even complex ideas seem simple and accessible.'",
    options: ["Opaque", "Obscure", "Limpid", "Abstruse"],
    answer: 2,
    explanation: "'Pellucid' means translucently clear and easy to understand. 'Limpid' means (of writing or music) clear and easily understood, making it the best replacement. 'Opaque', 'obscure', and 'abstruse' all describe difficulty of understanding."
  },
  {
    id: 50,
    question: "Replace the underlined word with its most appropriate synonym:\n'The NEFARIOUS schemes of the cartel were finally exposed by the investigative journalist.'",
    options: ["Virtuous", "Laudable", "Villainous", "Benevolent"],
    answer: 2,
    explanation: "'Nefarious' means wicked or criminal. 'Villainous' means relating to, constituting, or guilty of wicked or criminal behaviour, making it the best replacement. 'Virtuous', 'laudable', and 'benevolent' all convey goodness or positive intent."
  }
]

export default questions

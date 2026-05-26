const questions = [
  {
    id: 1,
    question: "What is the closest synonym of 'OBDURATE'?",
    options: ["Flexible", "Stubborn", "Generous", "Timid"],
    answer: 1,
    explanation: "'Obdurate' means stubbornly refusing to change one's opinion or course of action. 'Stubborn' is its closest synonym. It does not mean flexible, generous, or timid."
  },
  {
    id: 2,
    question: "What is the closest synonym of 'PERSPICACIOUS'?",
    options: ["Dim-witted", "Shrewdly perceptive", "Verbose", "Reckless"],
    answer: 1,
    explanation: "'Perspicacious' means having a ready insight into things; shrewdly perceptive. It is not related to being dim-witted, verbose, or reckless."
  },
  {
    id: 3,
    question: "What is the closest synonym of 'PROFLIGATE'?",
    options: ["Thrifty", "Moral", "Dissipated", "Resolute"],
    answer: 2,
    explanation: "'Profligate' means recklessly extravagant or wildly immoral; dissipated. It is the opposite of thrifty or moral."
  },
  {
    id: 4,
    question: "What is the closest synonym of 'LACHRYMOSE'?",
    options: ["Cheerful", "Tearful", "Bellicose", "Indifferent"],
    answer: 1,
    explanation: "'Lachrymose' means tearful or given to weeping. It is not related to cheerfulness, belligerence, or indifference."
  },
  {
    id: 5,
    question: "What is the closest synonym of 'INIMICAL'?",
    options: ["Friendly", "Hostile", "Benevolent", "Passive"],
    answer: 1,
    explanation: "'Inimical' means tending to obstruct or harm; hostile. It is the opposite of friendly or benevolent."
  },
  {
    id: 6,
    question: "What is the closest synonym of 'PELLUCID'?",
    options: ["Murky", "Translucently clear", "Abstruse", "Clamorous"],
    answer: 1,
    explanation: "'Pellucid' means translucently clear. It is the opposite of murky or abstruse (obscure). It has no relation to clamorous (noisy)."
  },
  {
    id: 7,
    question: "What is the closest synonym of 'MERETRICIOUS'?",
    options: ["Genuinely attractive", "Apparently attractive but false", "Modest", "Somber"],
    answer: 1,
    explanation: "'Meretricious' means apparently attractive but having in reality no value or integrity. It is the opposite of genuinely attractive or modest."
  },
  {
    id: 8,
    question: "What is the closest synonym of 'PUSILLANIMOUS'?",
    options: ["Courageous", "Magnanimous", "Cowardly", "Assertive"],
    answer: 2,
    explanation: "'Pusillanimous' means showing a lack of courage or determination; cowardly. It is the opposite of courageous, magnanimous, or assertive."
  },
  {
    id: 9,
    question: "What is the closest synonym of 'INVETERATE'?",
    options: ["Occasional", "Deep-rooted", "Nascent", "Temporary"],
    answer: 1,
    explanation: "'Inveterate' means having a particular habit, activity, or interest that is long-established and unlikely to change; deep-rooted. It is the opposite of occasional, nascent, or temporary."
  },
  {
    id: 10,
    question: "What is the closest synonym of 'TENDENTIOUS'?",
    options: ["Impartial", "Promoting a cause", "Indecisive", "Charitable"],
    answer: 1,
    explanation: "'Tendentious' means promoting a particular cause or point of view; not impartial. It is the opposite of impartial or charitable in intent."
  },
  {
    id: 11,
    question: "What is the closest synonym of 'PERFIDIOUS'?",
    options: ["Loyal", "Treacherous", "Honest", "Candid"],
    answer: 1,
    explanation: "'Perfidious' means deceitful and untrustworthy; treacherous. It is the opposite of loyal, honest, or candid."
  },
  {
    id: 12,
    question: "What is the closest synonym of 'VOLUBLE'?",
    options: ["Taciturn", "Speaking fluently", "Reticent", "Succinct"],
    answer: 1,
    explanation: "'Voluble' means speaking or spoken incessantly and fluently. It is the opposite of taciturn, reticent, or succinct."
  },
  {
    id: 13,
    question: "What is the closest synonym of 'DILATORY'?",
    options: ["Prompt", "Slow to act", "Meticulous", "Diligent"],
    answer: 1,
    explanation: "'Dilatory' means slow to act, tending to cause delay. It is the opposite of prompt, meticulous, or diligent."
  },
  {
    id: 14,
    question: "What is the closest synonym of 'ACRIMONIOUS'?",
    options: ["Gentle", "Bitter and caustic", "Harmonious", "Placid"],
    answer: 1,
    explanation: "'Acrimonious' means angry and bitter, especially in speech or manner; bitter and caustic. It is the opposite of gentle, harmonious, or placid."
  },
  {
    id: 15,
    question: "What is the closest synonym of 'NUGATORY'?",
    options: ["Significant", "Of no value", "Essential", "Profound"],
    answer: 1,
    explanation: "'Nugatory' means of no value or importance; trifling. It is the opposite of significant, essential, or profound."
  },
  {
    id: 16,
    question: "The diplomat's ________ response to the crisis was praised by international observers. (Choose the best synonym for the underlined concept: a measured, careful approach)",
    options: ["Impetuous", "Circumspect", "Haphazard", "Reckless"],
    answer: 1,
    explanation: "'Circumspect' means wary and unwilling to take risks; carefully measured. In the context of a diplomat praised for a measured approach, 'circumspect' fits best. The other options imply recklessness."
  },
  {
    id: 17,
    question: "His ________ remarks during the meeting left everyone feeling unsettled. (Choose the synonym for: cutting and sarcastic)",
    options: ["Mollifying", "Trenchant", "Bland", "Conciliatory"],
    answer: 1,
    explanation: "'Trenchant' means vigorous or incisive in expression or style; sharply perceptive. As a descriptor of cutting remarks, it fits best. The other options imply soothing or neutral tones."
  },
  {
    id: 18,
    question: "The professor's ________ lectures were appreciated by students who wanted depth without unnecessary elaboration. (Choose the synonym for: brief and comprehensive)",
    options: ["Discursive", "Rambling", "Pithy", "Prolix"],
    answer: 2,
    explanation: "'Pithy' means concise and forcefully expressive. Lectures that are brief yet comprehensive would be described as 'pithy'. The other options all imply excessive length or wandering."
  },
  {
    id: 19,
    question: "The artist's ________ use of color gave the painting a dreamlike quality. (Choose the synonym for: misty and vague)",
    options: ["Garish", "Nebulous", "Vivid", "Stark"],
    answer: 1,
    explanation: "'Nebulous' means in the form of a cloud; hazy; indistinct. In the context of a dreamlike, misty quality, 'nebulous' fits best. 'Garish', 'vivid', and 'stark' all imply sharpness or boldness."
  },
  {
    id: 20,
    question: "She had a ________ habit of pointing out others' mistakes without acknowledging her own. (Choose the synonym for: self-righteously critical)",
    options: ["Self-deprecating", "Censorious", "Lenient", "Indulgent"],
    answer: 1,
    explanation: "'Censorious' means severely critical of others. The context describes someone who critically points out others' faults, which aligns with 'censorious'. The other options suggest tolerance or humility."
  },
  {
    id: 21,
    question: "The new policy was seen as ________ by most employees, offering little practical benefit. (Choose the synonym for: superficially pleasing but useless)",
    options: ["Substantive", "Efficacious", "Specious", "Cogent"],
    answer: 2,
    explanation: "'Specious' means superficially plausible but actually wrong or of little use. A policy that appears beneficial but is actually useless would be described as 'specious'. The other options imply genuine value."
  },
  {
    id: 22,
    question: "The general's ________ orders were followed without question by his troops. (Choose the synonym for: having absolute authority)",
    options: ["Tentative", "Peremptory", "Deferential", "Vacillating"],
    answer: 1,
    explanation: "'Peremptory' means leaving no opportunity for denial or refusal; insisting on immediate attention. Orders that are followed without question reflect peremptory authority. The other options suggest hesitation or deference."
  },
  {
    id: 23,
    question: "His ________ attitude towards the suffering of others shocked those who had expected compassion. (Choose the synonym for: callously indifferent)",
    options: ["Empathetic", "Solicitous", "Callous", "Magnanimous"],
    answer: 2,
    explanation: "'Callous' means showing or having an insensitive and cruel disregard for others. A callously indifferent attitude toward suffering is best described as 'callous'. The other options imply care or generosity."
  },
  {
    id: 24,
    question: "The investigator uncovered ________ evidence that implicated the accused. (Choose the synonym for: conclusively proving)",
    options: ["Tenuous", "Incriminating", "Speculative", "Ambiguous"],
    answer: 1,
    explanation: "'Incriminating' means making someone appear guilty of a crime or wrongdoing. Evidence that conclusively implicates the accused is 'incriminating'. The other options suggest weakness or uncertainty."
  },
  {
    id: 25,
    question: "The scholar's ________ knowledge of ancient languages helped decode the manuscript. (Choose the synonym for: extensive and detailed)",
    options: ["Rudimentary", "Erudite", "Superficial", "Scanty"],
    answer: 1,
    explanation: "'Erudite' means having or showing great knowledge or learning. An extensive and detailed knowledge is best described as 'erudite'. The other options suggest limited or shallow knowledge."
  },
  {
    id: 26,
    question: "The politician's speech was full of ________ promises that nobody believed would be kept. (Choose the synonym for: empty and grandiose)",
    options: ["Sincere", "Modest", "Bombastic", "Subdued"],
    answer: 2,
    explanation: "'Bombastic' means high-sounding but with little meaning; inflated. Empty and grandiose promises are best described as 'bombastic'. The other options imply sincerity or restraint."
  },
  {
    id: 27,
    question: "Her ________ nature made it difficult for colleagues to predict her reactions. (Choose the synonym for: unpredictably changeable in mood)",
    options: ["Consistent", "Mercurial", "Stoic", "Equable"],
    answer: 1,
    explanation: "'Mercurial' means subject to sudden or unpredictable changes of mood or mind. An unpredictably changeable nature is 'mercurial'. The other options suggest stability or predictability."
  },
  {
    id: 28,
    question: "The mediator tried to ________ tensions between the two factions. (Choose the synonym for: reduce or soothe)",
    options: ["Inflame", "Exacerbate", "Mollify", "Aggravate"],
    answer: 2,
    explanation: "'Mollify' means appease the anger or anxiety of someone; soothe. A mediator trying to reduce tensions would 'mollify' them. The other options mean to worsen or intensify."
  },
  {
    id: 29,
    question: "The committee's ________ response was widely criticized as inadequate. (Choose the synonym for: half-hearted and insufficient)",
    options: ["Vigorous", "Wholehearted", "Lukewarm", "Decisive"],
    answer: 2,
    explanation: "'Lukewarm' means unenthusiastic; only moderately interested or concerned. A half-hearted response is best described as 'lukewarm'. The other options suggest energy or commitment."
  },
  {
    id: 30,
    question: "The novelist was known for her ________ prose, which layered meaning upon meaning. (Choose the synonym for: rich and densely packed with meaning)",
    options: ["Vapid", "Sparse", "Allusive", "Pedestrian"],
    answer: 2,
    explanation: "'Allusive' means containing or characterized by indirect references. Prose that layers meaning upon meaning uses allusion richly. 'Vapid' and 'pedestrian' imply dullness; 'sparse' implies simplicity."
  },
  {
    id: 31,
    question: "Which word does NOT share the same meaning as 'GARRULOUS'?",
    options: ["Loquacious", "Talkative", "Verbose", "Taciturn"],
    answer: 3,
    explanation: "'Garrulous' means excessively talkative. 'Loquacious', 'talkative', and 'verbose' all share this meaning. 'Taciturn' means reserved or uncommunicative — the opposite of garrulous."
  },
  {
    id: 32,
    question: "Which word does NOT share the same meaning as 'SYCOPHANTIC'?",
    options: ["Obsequious", "Fawning", "Candid", "Toadying"],
    answer: 2,
    explanation: "'Sycophantic' means behaving in a servile manner; fawning. 'Obsequious', 'fawning', and 'toadying' all describe excessive flattery. 'Candid' means honest and straightforward — the opposite."
  },
  {
    id: 33,
    question: "Which word does NOT share the same meaning as 'EPHEMERAL'?",
    options: ["Transient", "Fleeting", "Evanescent", "Perennial"],
    answer: 3,
    explanation: "'Ephemeral' means lasting for a very short time. 'Transient', 'fleeting', and 'evanescent' all share this meaning. 'Perennial' means lasting or occurring repeatedly for a long time — the opposite."
  },
  {
    id: 34,
    question: "Which word does NOT share the same meaning as 'AUSTERE'?",
    options: ["Ascetic", "Spartan", "Stern", "Opulent"],
    answer: 3,
    explanation: "'Austere' means severe or strict in manner and appearance; having no comforts. 'Ascetic', 'Spartan', and 'stern' all relate to simplicity or severity. 'Opulent' means ostentatiously rich — the opposite."
  },
  {
    id: 35,
    question: "Which word does NOT share the same meaning as 'VINDICTIVE'?",
    options: ["Vengeful", "Spiteful", "Rancorous", "Forgiving"],
    answer: 3,
    explanation: "'Vindictive' means having or showing a strong or unreasoning desire for revenge. 'Vengeful', 'spiteful', and 'rancorous' all share this meaning. 'Forgiving' means the opposite — willing to pardon."
  },
  {
    id: 36,
    question: "Which word does NOT share the same meaning as 'DIFFIDENT'?",
    options: ["Timid", "Bashful", "Modest", "Assertive"],
    answer: 3,
    explanation: "'Diffident' means modest or shy due to a lack of self-confidence. 'Timid', 'bashful', and 'modest' all relate to this quality. 'Assertive' means confident — the opposite of diffident."
  },
  {
    id: 37,
    question: "Which word does NOT share the same meaning as 'AMELIORATE'?",
    options: ["Improve", "Alleviate", "Mitigate", "Aggravate"],
    answer: 3,
    explanation: "'Ameliorate' means make (something bad or unsatisfactory) better. 'Improve', 'alleviate', and 'mitigate' all mean to make something better. 'Aggravate' means to make worse — the opposite."
  },
  {
    id: 38,
    question: "Which word does NOT share the same meaning as 'PERTINACIOUS'?",
    options: ["Tenacious", "Dogged", "Persistent", "Yielding"],
    answer: 3,
    explanation: "'Pertinacious' means holding firmly to an opinion or a course of action. 'Tenacious', 'dogged', and 'persistent' all share this meaning. 'Yielding' means giving way — the opposite."
  },
  {
    id: 39,
    question: "Which word does NOT share the same meaning as 'IGNOMINIOUS'?",
    options: ["Shameful", "Inglorious", "Dishonourable", "Laudable"],
    answer: 3,
    explanation: "'Ignominious' means deserving or causing public disgrace or shame. 'Shameful', 'inglorious', and 'dishonourable' all share this meaning. 'Laudable' means deserving praise — the opposite."
  },
  {
    id: 40,
    question: "Which word does NOT share the same meaning as 'MUNIFICENT'?",
    options: ["Bountiful", "Lavish", "Generous", "Niggardly"],
    answer: 3,
    explanation: "'Munificent' means larger or more generous than is usual or necessary. 'Bountiful', 'lavish', and 'generous' all share this meaning. 'Niggardly' means ungenerous — the opposite."
  },
  {
    id: 41,
    question: "The scientist's findings were so unprecedented that her peers found them almost impossible to accept. Choose the best synonym for 'unprecedented' in this context.",
    options: ["Familiar", "Unparalleled", "Commonplace", "Expected"],
    answer: 1,
    explanation: "'Unprecedented' means never done or known before. In the context of findings that are impossible to accept due to their novelty, 'unparalleled' is the best synonym. The other options imply familiarity."
  },
  {
    id: 42,
    question: "The regime's oppressive laws engendered widespread resentment among citizens. Choose the best synonym for 'engendered' in this context.",
    options: ["Suppressed", "Eliminated", "Produced", "Reduced"],
    answer: 2,
    explanation: "'Engendered' means cause or give rise to. In the context of laws producing widespread resentment, 'produced' is the best synonym. The other options imply removal or reduction."
  },
  {
    id: 43,
    question: "His analysis of the data was so meticulous that no error could escape detection. Choose the best synonym for 'meticulous' in this context.",
    options: ["Careless", "Painstaking", "Hasty", "Casual"],
    answer: 1,
    explanation: "'Meticulous' means showing great attention to detail or being very careful and precise. 'Painstaking' is the best synonym in this context. The other options imply carelessness or haste."
  },
  {
    id: 44,
    question: "The author's sardonic tone made it clear that she had little respect for the institution she was describing. Choose the best synonym for 'sardonic' in this context.",
    options: ["Admiring", "Sympathetic", "Mocking", "Reverential"],
    answer: 2,
    explanation: "'Sardonic' means grimly mocking or cynical. In the context of someone showing little respect through tone, 'mocking' is the best synonym. The other options suggest admiration or sympathy."
  },
  {
    id: 45,
    question: "The CEO's cavalier dismissal of safety concerns alarmed the board of directors. Choose the best synonym for 'cavalier' in this context.",
    options: ["Cautious", "Conscientious", "Nonchalant", "Meticulous"],
    answer: 2,
    explanation: "'Cavalier' means showing a lack of proper concern; treating serious matters with a dismissive attitude. 'Nonchalant' — meaning casually calm and relaxed — is the best synonym here. The other options suggest care and diligence."
  },
  {
    id: 46,
    question: "The senator's speech was full of platitudes that failed to address the real issues. Choose the best synonym for 'platitudes' in this context.",
    options: ["Insights", "Clichés", "Revelations", "Innovations"],
    answer: 1,
    explanation: "'Platitudes' are remarks or statements that have been used too often to be interesting or thoughtful; clichés. In the context of a speech failing to address real issues, 'clichés' is the best synonym."
  },
  {
    id: 47,
    question: "The prime minister's reticence on the matter fuelled speculation in the press. Choose the best synonym for 'reticence' in this context.",
    options: ["Loquacity", "Verbosity", "Reserve", "Openness"],
    answer: 2,
    explanation: "'Reticence' means the quality of being uncommunicative; reserve. In the context of silence fuelling speculation, 'reserve' is the best synonym. 'Loquacity' and 'verbosity' mean the opposite."
  },
  {
    id: 48,
    question: "The charity's work was lauded for its assiduous approach to community development. Choose the best synonym for 'assiduous' in this context.",
    options: ["Negligent", "Diligent", "Intermittent", "Apathetic"],
    answer: 1,
    explanation: "'Assiduous' means showing great care and perseverance; diligent. In the context of a praised approach to community development, 'diligent' is the best synonym. The other options suggest lack of effort."
  },
  {
    id: 49,
    question: "Her equanimity in the face of repeated setbacks impressed everyone around her. Choose the best synonym for 'equanimity' in this context.",
    options: ["Agitation", "Composure", "Despair", "Fury"],
    answer: 1,
    explanation: "'Equanimity' means mental calmness, especially in a difficult situation; composure. In the context of remaining calm amid setbacks, 'composure' is the best synonym. The other options imply emotional disturbance."
  },
  {
    id: 50,
    question: "The regime used propaganda to inculcate fear and obedience in the population. Choose the best synonym for 'inculcate' in this context.",
    options: ["Eradicate", "Instil", "Undermine", "Discourage"],
    answer: 1,
    explanation: "'Inculcate' means instil (an attitude, idea, or habit) by persistent instruction. In the context of propaganda planting fear and obedience, 'instil' is the best synonym. The other options imply removal or discouragement."
  }
]

export default questions

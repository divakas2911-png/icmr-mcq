const questions = [
  {
    id: 1,
    question: "What is the antonym of LOQUACIOUS?",
    options: ["Verbose", "Taciturn", "Voluble", "Effusive"],
    answer: 1,
    explanation: "Loquacious means tending to talk a great deal. Its antonym is taciturn, meaning reserved or uncommunicative in speech. Verbose and voluble are synonyms of loquacious; effusive means gushing, also opposite in meaning but taciturn is the precise antonym."
  },
  {
    id: 2,
    question: "What is the antonym of SYCOPHANTIC?",
    options: ["Obsequious", "Candid", "Fawning", "Unctuous"],
    answer: 1,
    explanation: "Sycophantic means acting obsequiously toward someone in order to gain advantage. Its antonym is candid, meaning forthright and honest. Obsequious, fawning, and unctuous are all synonyms of sycophantic."
  },
  {
    id: 3,
    question: "What is the antonym of INVETERATE?",
    options: ["Habitual", "Chronic", "Occasional", "Confirmed"],
    answer: 2,
    explanation: "Inveterate means having a particular habit, activity, or interest that is long-established and unlikely to change. Its antonym is occasional, meaning happening or done infrequently. Habitual, chronic, and confirmed are synonyms."
  },
  {
    id: 4,
    question: "What is the antonym of RECONDITE?",
    options: ["Abstruse", "Esoteric", "Commonplace", "Arcane"],
    answer: 2,
    explanation: "Recondite means not known by many people; obscure. Its antonym is commonplace, meaning not unusual; ordinary. Abstruse, esoteric, and arcane are all synonyms of recondite."
  },
  {
    id: 5,
    question: "What is the antonym of MERETRICIOUS?",
    options: ["Tawdry", "Gaudy", "Genuine", "Specious"],
    answer: 2,
    explanation: "Meretricious means apparently attractive but having in reality no value or integrity; showy. Its antonym is genuine, meaning truly what something is said to be; authentic. Tawdry, gaudy, and specious are synonyms or related terms."
  },
  {
    id: 6,
    question: "What is the antonym of CUPIDITY?",
    options: ["Avarice", "Greed", "Munificence", "Rapacity"],
    answer: 2,
    explanation: "Cupidity means greed for money or possessions. Its antonym is munificence, meaning the quality or action of being very generous. Avarice, greed, and rapacity are all synonyms of cupidity."
  },
  {
    id: 7,
    question: "What is the antonym of PHLEGMATIC?",
    options: ["Stolid", "Impassive", "Excitable", "Apathetic"],
    answer: 2,
    explanation: "Phlegmatic means having an unemotional and stolidly calm disposition. Its antonym is excitable, meaning responsive to stimulation; easily aroused. Stolid, impassive, and apathetic are synonyms of phlegmatic."
  },
  {
    id: 8,
    question: "What is the antonym of PENURIOUS?",
    options: ["Parsimonious", "Niggardly", "Opulent", "Miserly"],
    answer: 2,
    explanation: "Penurious means extremely poor; poverty-stricken, or unwilling to spend money. Its antonym is opulent, meaning ostentatiously rich and luxurious. Parsimonious, niggardly, and miserly are synonyms of penurious."
  },
  {
    id: 9,
    question: "What is the antonym of LACHRYMOSE?",
    options: ["Tearful", "Mournful", "Mirthful", "Plaintive"],
    answer: 2,
    explanation: "Lachrymose means tearful or given to weeping; inducing tears. Its antonym is mirthful, meaning full of mirth; merry or amusing. Tearful, mournful, and plaintive are synonyms of lachrymose."
  },
  {
    id: 10,
    question: "What is the antonym of PUSILLANIMOUS?",
    options: ["Cowardly", "Craven", "Intrepid", "Timorous"],
    answer: 2,
    explanation: "Pusillanimous means showing a lack of courage or determination; timid. Its antonym is intrepid, meaning fearless; adventurous. Cowardly, craven, and timorous are synonyms of pusillanimous."
  },
  {
    id: 11,
    question: "What is the antonym of TORPID?",
    options: ["Sluggish", "Lethargic", "Vivacious", "Dormant"],
    answer: 2,
    explanation: "Torpid means mentally or physically inactive; lethargic. Its antonym is vivacious, meaning attractively lively and animated. Sluggish, lethargic, and dormant are synonyms of torpid."
  },
  {
    id: 12,
    question: "What is the antonym of VITUPERATE?",
    options: ["Berate", "Upbraid", "Extol", "Castigate"],
    answer: 2,
    explanation: "Vituperate means to blame or insult someone in strong or violent language. Its antonym is extol, meaning to praise enthusiastically. Berate, upbraid, and castigate are synonyms of vituperate."
  },
  {
    id: 13,
    question: "What is the antonym of NEFARIOUS?",
    options: ["Heinous", "Villainous", "Virtuous", "Iniquitous"],
    answer: 2,
    explanation: "Nefarious means wicked or criminal. Its antonym is virtuous, meaning having or showing high moral standards. Heinous, villainous, and iniquitous are synonyms of nefarious."
  },
  {
    id: 14,
    question: "What is the antonym of PERFIDIOUS?",
    options: ["Treacherous", "Duplicitous", "Steadfast", "Disloyal"],
    answer: 2,
    explanation: "Perfidious means deceitful and untrustworthy. Its antonym is steadfast, meaning resolutely or dutifully firm and unwavering in loyalty. Treacherous, duplicitous, and disloyal are synonyms of perfidious."
  },
  {
    id: 15,
    question: "What is the antonym of INIMICAL?",
    options: ["Hostile", "Adverse", "Propitious", "Antagonistic"],
    answer: 2,
    explanation: "Inimical means tending to obstruct or harm; hostile. Its antonym is propitious, meaning giving or indicating a good chance of success; favorable. Hostile, adverse, and antagonistic are synonyms of inimical."
  },
  {
    id: 16,
    question: "The new manager was known for her ACERBIC remarks during meetings. Which word best represents the antonym of the underlined word?",
    options: ["Cutting", "Caustic", "Affable", "Mordant"],
    answer: 2,
    explanation: "Acerbic means sharp and forthright in manner or speech; harsh. In context, the antonym is affable, meaning friendly, good-natured, and easy to talk to. Cutting, caustic, and mordant are synonyms of acerbic."
  },
  {
    id: 17,
    question: "His DIFFIDENT approach to public speaking cost him several opportunities. Which word is the antonym of the underlined word?",
    options: ["Shy", "Assertive", "Bashful", "Reticent"],
    answer: 1,
    explanation: "Diffident means modest or shy due to a lack of self-confidence. Its antonym is assertive, meaning having or showing a confident and forceful personality. Shy, bashful, and reticent are synonyms of diffident."
  },
  {
    id: 18,
    question: "The government's DRACONIAN measures were widely condemned by civil rights groups. Which word is the antonym of the underlined word?",
    options: ["Stringent", "Severe", "Lenient", "Harsh"],
    answer: 2,
    explanation: "Draconian means excessively harsh and severe. Its antonym is lenient, meaning more merciful or tolerant than expected. Stringent, severe, and harsh are synonyms of draconian."
  },
  {
    id: 19,
    question: "Her EPHEMERAL fame faded as quickly as it had come. Which word is the antonym of the underlined word?",
    options: ["Fleeting", "Transient", "Enduring", "Evanescent"],
    answer: 2,
    explanation: "Ephemeral means lasting for a very short time. Its antonym is enduring, meaning lasting over a long period. Fleeting, transient, and evanescent are synonyms of ephemeral."
  },
  {
    id: 20,
    question: "The professor's PELLUCID explanation made the complex topic easy to understand. Which word is the antonym of the underlined word?",
    options: ["Clear", "Lucid", "Abstruse", "Transparent"],
    answer: 2,
    explanation: "Pellucid means translucently clear; easily understood. In context, the antonym is abstruse, meaning difficult to understand; obscure. Clear, lucid, and transparent are synonyms of pellucid."
  },
  {
    id: 21,
    question: "The FRACTIOUS child threw a tantrum in the middle of the store. Which word is the antonym of the underlined word?",
    options: ["Unruly", "Docile", "Querulous", "Peevish"],
    answer: 1,
    explanation: "Fractious means irritable and quarrelsome; difficult to control. Its antonym is docile, meaning ready to accept control or instruction; submissive. Unruly, querulous, and peevish are synonyms of fractious."
  },
  {
    id: 22,
    question: "His MENDACIOUS testimony misled the jury. Which word is the antonym of the underlined word?",
    options: ["Deceptive", "Veracious", "Duplicitous", "False"],
    answer: 1,
    explanation: "Mendacious means not telling the truth; lying. Its antonym is veracious, meaning speaking or representing the truth. Deceptive, duplicitous, and false are synonyms of mendacious."
  },
  {
    id: 23,
    question: "The artist's FLORID style was criticized for being overly ornate. Which word is the antonym of the underlined word?",
    options: ["Ornate", "Austere", "Baroque", "Lavish"],
    answer: 1,
    explanation: "Florid means elaborately or excessively intricate or complicated. Its antonym is austere, meaning having an extremely plain and simple style or appearance; unadorned. Ornate, baroque, and lavish are synonyms of florid."
  },
  {
    id: 24,
    question: "The REDOUBTABLE general was feared by his opponents across the continent. Which word is the antonym of the underlined word?",
    options: ["Formidable", "Unimpressive", "Fearsome", "Awesome"],
    answer: 1,
    explanation: "Redoubtable means (of a person) formidable, especially as an opponent. Its antonym is unimpressive, meaning not worthy of admiration or respect. Formidable, fearsome, and awesome are synonyms of redoubtable."
  },
  {
    id: 25,
    question: "The SANGUINE investor remained optimistic despite market losses. Which word is the antonym of the underlined word?",
    options: ["Hopeful", "Pessimistic", "Buoyant", "Confident"],
    answer: 1,
    explanation: "Sanguine means optimistic or positive, especially in a difficult situation. Its antonym is pessimistic, meaning tending to see the worst aspect of things. Hopeful, buoyant, and confident are synonyms of sanguine."
  },
  {
    id: 26,
    question: "Her QUERULOUS tone made it difficult for colleagues to work with her. Which word is the antonym of the underlined word?",
    options: ["Complaining", "Whining", "Equable", "Petulant"],
    answer: 2,
    explanation: "Querulous means complaining in a petulant or whining manner. Its antonym is equable, meaning not easily disturbed or angered; calm and even-tempered. Complaining, whining, and petulant are synonyms of querulous."
  },
  {
    id: 27,
    question: "The PERFUNCTORY inspection failed to detect the safety hazard. Which word is the antonym of the underlined word?",
    options: ["Cursory", "Meticulous", "Superficial", "Careless"],
    answer: 1,
    explanation: "Perfunctory means carried out with a minimum of effort or reflection; superficial. Its antonym is meticulous, meaning showing great attention to detail or being very careful and precise. Cursory, superficial, and careless are synonyms of perfunctory."
  },
  {
    id: 28,
    question: "The MUNIFICENT donor funded the entire new wing of the hospital. Which word is the antonym of the underlined word?",
    options: ["Generous", "Parsimonious", "Bountiful", "Liberal"],
    answer: 1,
    explanation: "Munificent means larger or more generous than is usual or necessary. Its antonym is parsimonious, meaning unwilling to spend money or use resources; stingy. Generous, bountiful, and liberal are synonyms of munificent."
  },
  {
    id: 29,
    question: "His TRUCULENT attitude made negotiations nearly impossible. Which word is the antonym of the underlined word?",
    options: ["Belligerent", "Amenable", "Pugnacious", "Combative"],
    answer: 1,
    explanation: "Truculent means eager or quick to argue or fight; aggressively defiant. Its antonym is amenable, meaning open and responsive to suggestion; easily persuaded. Belligerent, pugnacious, and combative are synonyms of truculent."
  },
  {
    id: 30,
    question: "The VENERABLE institution had served the community for over two centuries. Which word is the antonym of the underlined word?",
    options: ["Revered", "Esteemed", "Disreputable", "Hallowed"],
    answer: 2,
    explanation: "Venerable means accorded a great deal of respect, especially because of age, wisdom, or character. Its antonym is disreputable, meaning not respected or having a bad reputation. Revered, esteemed, and hallowed are synonyms of venerable."
  },
  {
    id: 31,
    question: "Which of the following is NOT an antonym of OBSEQUIOUS?",
    options: ["Assertive", "Dominant", "Servile", "Forthright"],
    answer: 2,
    explanation: "Obsequious means obedient or attentive to an excessive degree; fawning. Assertive, dominant, and forthright are antonyms of obsequious. Servile, however, is a SYNONYM of obsequious (both mean submissive and fawning), making it NOT an antonym."
  },
  {
    id: 32,
    question: "Which of the following is NOT an antonym of VAPID?",
    options: ["Stimulating", "Insipid", "Scintillating", "Engaging"],
    answer: 1,
    explanation: "Vapid means offering nothing that is stimulating or challenging; bland. Stimulating, scintillating, and engaging are all antonyms of vapid. Insipid is a SYNONYM of vapid (both mean lacking flavor or interest), so it is NOT an antonym."
  },
  {
    id: 33,
    question: "Which of the following is NOT an antonym of SOPORIFIC?",
    options: ["Stimulating", "Invigorating", "Narcotic", "Rousing"],
    answer: 2,
    explanation: "Soporific means tending to induce drowsiness or sleep. Stimulating, invigorating, and rousing are all antonyms. Narcotic is a SYNONYM of soporific (both induce sleep/numbness), making it NOT an antonym."
  },
  {
    id: 34,
    question: "Which of the following is NOT an antonym of MELLIFLUOUS?",
    options: ["Harsh", "Discordant", "Dulcet", "Cacophonous"],
    answer: 2,
    explanation: "Mellifluous means pleasant to hear; sweet or musical. Harsh, discordant, and cacophonous are all antonyms. Dulcet is a SYNONYM of mellifluous (both mean sweet-sounding), making it NOT an antonym."
  },
  {
    id: 35,
    question: "Which of the following is NOT an antonym of PENURY?",
    options: ["Affluence", "Indigence", "Opulence", "Prosperity"],
    answer: 1,
    explanation: "Penury means extreme poverty; destitution. Affluence, opulence, and prosperity are all antonyms. Indigence is a SYNONYM of penury (both mean extreme poverty), making it NOT an antonym."
  },
  {
    id: 36,
    question: "Which of the following is NOT an antonym of LASSITUDE?",
    options: ["Vigor", "Lethargy", "Vitality", "Energy"],
    answer: 1,
    explanation: "Lassitude means physical or mental weariness; lack of energy. Vigor, vitality, and energy are all antonyms. Lethargy is a SYNONYM of lassitude (both mean tiredness/lack of energy), making it NOT an antonym."
  },
  {
    id: 37,
    question: "Which of the following is NOT an antonym of VENAL?",
    options: ["Incorruptible", "Mercenary", "Principled", "Honorable"],
    answer: 1,
    explanation: "Venal means showing or motivated by susceptibility to bribery; corrupt. Incorruptible, principled, and honorable are all antonyms. Mercenary is a SYNONYM of venal (both suggest corruption for personal gain), making it NOT an antonym."
  },
  {
    id: 38,
    question: "Which of the following is NOT an antonym of TURBID?",
    options: ["Clear", "Murky", "Limpid", "Pellucid"],
    answer: 1,
    explanation: "Turbid means cloudy, opaque, or thick with suspended matter. Clear, limpid, and pellucid are all antonyms. Murky is a SYNONYM of turbid (both mean cloudy/unclear), making it NOT an antonym."
  },
  {
    id: 39,
    question: "Which of the following is NOT an antonym of PAUCITY?",
    options: ["Abundance", "Scarcity", "Plethora", "Surfeit"],
    answer: 1,
    explanation: "Paucity means the presence of something only in small or insufficient quantities. Abundance, plethora, and surfeit are all antonyms. Scarcity is a SYNONYM of paucity (both mean insufficiency), making it NOT an antonym."
  },
  {
    id: 40,
    question: "Which of the following is NOT an antonym of FASTIDIOUS?",
    options: ["Slovenly", "Meticulous", "Careless", "Sloppy"],
    answer: 1,
    explanation: "Fastidious means very attentive to and concerned about accuracy and detail; demanding. Slovenly, careless, and sloppy are all antonyms. Meticulous is a SYNONYM of fastidious (both suggest careful attention to detail), making it NOT an antonym."
  },
  {
    id: 41,
    question: "The scientist's EQUIVOCAL findings left the research community in doubt. Choose the antonym that best reverses the meaning of the underlined word in this context.",
    options: ["Ambiguous", "Unambiguous", "Vague", "Cryptic"],
    answer: 1,
    explanation: "Equivocal means open to more than one interpretation; not clear or decided. In context, the best reversal of meaning is unambiguous, meaning not open to more than one interpretation. Ambiguous, vague, and cryptic are synonyms of equivocal."
  },
  {
    id: 42,
    question: "The child's INCHOATE understanding of mathematics required patient instruction. Choose the antonym that best reverses the meaning.",
    options: ["Undeveloped", "Rudimentary", "Sophisticated", "Embryonic"],
    answer: 2,
    explanation: "Inchoate means just begun and not fully formed or developed; rudimentary. In context, the best reversal is sophisticated, meaning developed to a high degree of complexity. Undeveloped, rudimentary, and embryonic are synonyms of inchoate."
  },
  {
    id: 43,
    question: "His INSOLENT response to the judge's question shocked everyone in the courtroom. Choose the antonym that best reverses the meaning.",
    options: ["Impertinent", "Deferential", "Impudent", "Brazen"],
    answer: 1,
    explanation: "Insolent means showing a rude and arrogant lack of respect. The best antonym in this context is deferential, meaning showing deference; respectful and submissive. Impertinent, impudent, and brazen are synonyms of insolent."
  },
  {
    id: 44,
    question: "The NASCENT democracy struggled to establish stable institutions. Choose the antonym that best reverses the meaning.",
    options: ["Embryonic", "Mature", "Fledgling", "Budding"],
    answer: 1,
    explanation: "Nascent means just coming into existence and beginning to display signs of future potential. In context, the best antonym is mature, meaning fully developed. Embryonic, fledgling, and budding are synonyms of nascent."
  },
  {
    id: 45,
    question: "The INSOUCIANT teenager shrugged off the consequences of his actions. Choose the antonym that best reverses the meaning.",
    options: ["Nonchalant", "Blithe", "Anxious", "Carefree"],
    answer: 2,
    explanation: "Insouciant means showing a casual lack of concern; indifferent. The best antonym in this context is anxious, meaning experiencing worry or unease. Nonchalant, blithe, and carefree are synonyms of insouciant."
  },
  {
    id: 46,
    question: "The INIMITABLE style of the painter made his works instantly recognizable. Choose the antonym that best reverses the meaning.",
    options: ["Unique", "Matchless", "Commonplace", "Peerless"],
    answer: 2,
    explanation: "Inimitable means so good or unusual as to be impossible to copy; unique. The best antonym is commonplace, meaning not unusual; ordinary and easily replicated. Unique, matchless, and peerless are synonyms of inimitable."
  },
  {
    id: 47,
    question: "The ASSIDUOUS student spent every evening reviewing her notes. Choose the antonym that best reverses the meaning.",
    options: ["Diligent", "Industrious", "Indolent", "Sedulous"],
    answer: 2,
    explanation: "Assiduous means showing great care and perseverance. The best antonym is indolent, meaning wanting to avoid activity or exertion; lazy. Diligent, industrious, and sedulous are synonyms of assiduous."
  },
  {
    id: 48,
    question: "The leader's DESPOTIC rule resulted in widespread oppression and fear. Choose the antonym that best reverses the meaning.",
    options: ["Tyrannical", "Autocratic", "Democratic", "Authoritarian"],
    answer: 2,
    explanation: "Despotic means of or typical of a despot; tyrannical. The best antonym in this context is democratic, meaning based on the principle of equality and rights for all people; favoring social equality. Tyrannical, autocratic, and authoritarian are synonyms of despotic."
  },
  {
    id: 49,
    question: "The MISANTHROPIC hermit avoided all human contact for decades. Choose the antonym that best reverses the meaning.",
    options: ["Cynical", "Philanthropic", "Reclusive", "Antisocial"],
    answer: 1,
    explanation: "Misanthropic means disliking humankind and avoiding human society. The best antonym is philanthropic, meaning seeking to promote the welfare of others; benevolent and generous toward people. Cynical, reclusive, and antisocial are synonyms or related terms."
  },
  {
    id: 50,
    question: "Her ACRIMONIOUS departure from the company left a bitter atmosphere among the staff. Choose the antonym that best reverses the meaning.",
    options: ["Bitter", "Amicable", "Caustic", "Vitriolic"],
    answer: 1,
    explanation: "Acrimonious means having an angry and bitter manner or tone. The best antonym is amicable, meaning having a spirit of friendliness; done in a polite and friendly way. Bitter, caustic, and vitriolic are synonyms of acrimonious."
  }
]

export default questions

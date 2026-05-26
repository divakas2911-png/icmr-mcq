const questions = [
  // Q1-Q15: Word Meanings (Advanced/Uncommon Words)
  {
    id: 1,
    question: "What is the meaning of the word 'defenestration'?",
    options: [
      "The act of throwing someone or something out of a window",
      "The process of removing forests from a region",
      "A legal term for unlawful detention",
      "The deliberate destruction of cultural artifacts"
    ],
    answer: 0,
    explanation: "'Defenestration' literally means the act of throwing someone or something out of a window. It derives from the Latin 'fenestra' meaning window. The word gained historical prominence from the Defenestrations of Prague in 1419 and 1618."
  },
  {
    id: 2,
    question: "What is the meaning of the word 'legerdemain'?",
    options: [
      "A form of governmental legislation",
      "Skillful use of one's hands when performing conjuring tricks; trickery",
      "The art of diplomatic negotiation",
      "A term for excessive physical labor"
    ],
    answer: 1,
    explanation: "'Legerdemain' means sleight of hand or skillful deception. It comes from the French 'léger de main' meaning 'light of hand.' It is used both literally for magic tricks and figuratively for any clever deception."
  },
  {
    id: 3,
    question: "What is the meaning of the word 'sesquipedalian'?",
    options: [
      "Relating to a period of one and a half years",
      "Pertaining to foot-related disorders",
      "Given to using long words; of a long word",
      "A creature with six legs"
    ],
    answer: 2,
    explanation: "'Sesquipedalian' describes a person given to using long words, or refers to a word that is long. Ironically, 'sesquipedalian' is itself a long word, derived from Latin 'sesquipedalis' meaning 'a foot and a half long.'"
  },
  {
    id: 4,
    question: "What is the meaning of the word 'tergiversation'?",
    options: [
      "The process of converting one language to another",
      "Evasion of straightforward action or clear-cut statement; equivocation or desertion of a cause",
      "A surgical procedure involving the spine",
      "The act of negotiating under false pretenses"
    ],
    answer: 1,
    explanation: "'Tergiversation' means making excuses or evasive statements, or the act of deserting a cause or allegiance. It derives from Latin 'tergiversari' meaning 'to turn one's back on.'"
  },
  {
    id: 5,
    question: "What is the meaning of the word 'ultracrepidarian'?",
    options: [
      "Relating to extremely ancient geological formations",
      "Pertaining to high-altitude atmospheric conditions",
      "One who gives opinions beyond their area of expertise",
      "Describing a philosophy that values excess above all"
    ],
    answer: 2,
    explanation: "'Ultracrepidarian' refers to someone who expresses opinions on matters beyond their knowledge. It comes from the Latin phrase 'ne supra crepidam sutor judicaret' (a cobbler should not judge above the sandal), meaning one who speaks beyond their expertise."
  },
  {
    id: 6,
    question: "What is the meaning of the word 'surreptitious'?",
    options: [
      "Done secretly, especially because it would not be approved of",
      "Extremely surprising or unexpected",
      "Relating to supernatural occurrences",
      "Characterized by excessive sentimentality"
    ],
    answer: 0,
    explanation: "'Surreptitious' means done in a secretive, stealthy way to avoid notice or detection. It derives from Latin 'surrepticius' meaning 'stolen.' Example: a surreptitious glance at someone's notes."
  },
  {
    id: 7,
    question: "What is the meaning of the word 'pusillanimous'?",
    options: [
      "Excessively generous to the point of recklessness",
      "Showing a lack of courage or determination; timid",
      "Characterized by intellectual arrogance",
      "Prone to excessive physical indulgence"
    ],
    answer: 1,
    explanation: "'Pusillanimous' means showing a lack of courage or resolution; cowardly or faint-hearted. It comes from Latin 'pusillus' (very small) and 'animus' (spirit), literally meaning 'small-spirited.'"
  },
  {
    id: 8,
    question: "What is the meaning of the word 'verisimilitude'?",
    options: [
      "The quality of seeming real or true; the appearance of being true or real",
      "An extreme dislike of the truth",
      "A philosophical doctrine concerning the nature of reality",
      "The study of visual similarities between species"
    ],
    answer: 0,
    explanation: "'Verisimilitude' refers to the appearance of being true or real; plausibility. It is especially used in literature or art to describe how convincingly realistic something appears. From Latin 'verisimilis' meaning 'probable.'"
  },
  {
    id: 9,
    question: "What is the meaning of the word 'nugatory'?",
    options: [
      "Relating to nutritional deficiency",
      "Of no value or importance; futile; trifling",
      "Pertaining to the study of numbers",
      "Characterized by excessive negativity"
    ],
    answer: 1,
    explanation: "'Nugatory' means of no value or importance; worthless or futile. It derives from Latin 'nugatorius' from 'nugae' meaning 'trifles.' Example: 'The committee's efforts proved nugatory in the face of political opposition.'"
  },
  {
    id: 10,
    question: "What is the meaning of the word 'vellichor'?",
    options: [
      "The strange wistfulness of used bookshops",
      "A type of ancient musical instrument",
      "Extreme nostalgia for one's homeland",
      "The quality of being intensely vibrant in color"
    ],
    answer: 0,
    explanation: "'Vellichor' is defined as the strange wistfulness of used bookshops — the feeling evoked by a place filled with books from other lives, other times. It is a coined neologism but has gained usage in literary circles."
  },
  {
    id: 11,
    question: "What is the meaning of the word 'recondite'?",
    options: [
      "Not known by many people; abstruse; obscure",
      "Relating to a secondary or backup plan",
      "Characterized by extreme physical conditioning",
      "Describing something recently discovered or invented"
    ],
    answer: 0,
    explanation: "'Recondite' means not known by many people; dealing with obscure subject matter. It derives from Latin 'reconditus' meaning 'hidden away.' A recondite fact is one that is little-known and hard to understand."
  },
  {
    id: 12,
    question: "What is the meaning of the word 'mendicant'?",
    options: [
      "A person who lives by begging; relating to begging",
      "A member of a secret society",
      "A specialist in medieval history",
      "One who practices extreme self-discipline"
    ],
    answer: 0,
    explanation: "'Mendicant' refers to a person who lives by begging, or in a religious context, a member of a monastic order that relies on charity. It derives from Latin 'mendicans' from 'mendicare' meaning 'to beg.'"
  },
  {
    id: 13,
    question: "What is the meaning of the word 'persiflage'?",
    options: [
      "A form of ancient Persian architecture",
      "Light and slightly contemptuous mockery or banter",
      "The art of persuasive public speaking",
      "An elaborate system of coded messages"
    ],
    answer: 1,
    explanation: "'Persiflage' refers to light, slightly contemptuous banter or mockery. It comes from French 'persifler' meaning 'to banter.' It describes a style of conversation marked by light, frivolous treatment of any subject."
  },
  {
    id: 14,
    question: "What is the meaning of the word 'opprobrium'?",
    options: [
      "Harsh criticism or censure; public disgrace arising from shameful conduct",
      "An official government proclamation",
      "Excessive praise given to undeserving individuals",
      "A type of formal diplomatic protest"
    ],
    answer: 0,
    explanation: "'Opprobrium' means harsh criticism or censure, or public disgrace arising from conduct considered shameful. It derives from Latin 'opprobrare' meaning 'to reproach.' Example: 'The politician's conduct earned him widespread opprobrium.'"
  },
  {
    id: 15,
    question: "What is the meaning of the word 'logomachy'?",
    options: [
      "The study of ancient alphabets and writing systems",
      "An argument or dispute about words",
      "A form of word-based therapy in psychology",
      "The science of decoding encrypted languages"
    ],
    answer: 1,
    explanation: "'Logomachy' refers to an argument or dispute about words; a contention about words or verbal controversy. It derives from Greek 'logos' (word) and 'mache' (battle). It also refers to a word game."
  },

  // Q16-Q30: Context-Dependent Meanings (Polysemous Words)
  {
    id: 16,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The scientist's _seminal_ paper changed the course of modern physics.'",
    options: [
      "Relating to seeds or seed production",
      "Strongly influencing later developments; highly original",
      "Published in a prestigious journal",
      "Written in a highly technical style"
    ],
    answer: 1,
    explanation: "In this context, 'seminal' means strongly influencing later developments; highly original and important. While 'seminal' literally relates to seeds (from Latin 'semen'), in academic or intellectual contexts it describes groundbreaking, foundational work."
  },
  {
    id: 17,
    question: "Choose the correct meaning of the underlined word in the sentence: 'His _mercurial_ temperament made him an unpredictable business partner.'",
    options: [
      "Relating to the planet Mercury",
      "Subject to sudden or unpredictable changes of mood; volatile",
      "Extremely intelligent and quick-witted",
      "Relating to the chemical element mercury"
    ],
    answer: 1,
    explanation: "In this context, 'mercurial' means subject to sudden or unpredictable changes of mood or mind. While it literally relates to Mercury (planet or element), in describing personality it refers to volatility, as Mercury was the fleet-footed messenger god."
  },
  {
    id: 18,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The judge's _tendentious_ questions drew objections from the defense.'",
    options: [
      "Extremely lengthy and detailed",
      "Promoting a particular cause or point of view; biased",
      "Legally improper or inadmissible",
      "Phrased in an overly technical manner"
    ],
    answer: 1,
    explanation: "'Tendentious' means expressing or promoting a particular cause or point of view; biased. It derives from Medieval Latin 'tendentiosus.' A tendentious question is one designed to lead toward a particular conclusion."
  },
  {
    id: 19,
    question: "Choose the correct meaning of the underlined word in the sentence: 'After years of hardship, the writer produced a _pellucid_ account of rural poverty.'",
    options: [
      "Extremely depressing and somber in tone",
      "Translucently clear; easily understood; lucidly expressed",
      "Excessively embellished with literary devices",
      "Emotionally charged and provocative"
    ],
    answer: 1,
    explanation: "'Pellucid' means transparently clear or easily understood. When applied to writing, it means lucidly expressed and easy to comprehend. It derives from Latin 'pellucidus' meaning 'transparent.' In this context, it praises the clarity of the writing."
  },
  {
    id: 20,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The minister's _equivocal_ response satisfied neither the opposition nor the press.'",
    options: [
      "Mathematically precise and balanced",
      "Open to more than one interpretation; deliberately vague or ambiguous",
      "Politically moderate and centrist",
      "Formally worded and official in tone"
    ],
    answer: 1,
    explanation: "'Equivocal' means open to more than one interpretation; deliberately ambiguous or unclear. It derives from Late Latin 'aequivocus' meaning 'of equal voice.' An equivocal response avoids commitment to a clear position."
  },
  {
    id: 21,
    question: "Choose the correct meaning of the underlined word in the sentence: 'Her _anodyne_ remarks failed to address the gravity of the crisis.'",
    options: [
      "Extremely critical and pointed",
      "Not likely to cause offence or disagreement; soothing but inoffensive to the point of being ineffective",
      "Medically prescribed and therapeutic",
      "Highly analytical and evidence-based"
    ],
    answer: 1,
    explanation: "'Anodyne' literally means a painkilling drug, but in general usage it means not likely to cause offence or disagreement, and by extension, bland or inoffensive to the point of being unhelpful. In this context, her remarks were too mild to matter."
  },
  {
    id: 22,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The _crepuscular_ light gave the abandoned village an eerie atmosphere.'",
    options: [
      "Cold and frosty, as in winter",
      "Relating to twilight; dim, as at twilight",
      "Extremely bright and blinding",
      "Flickering and unsteady, as candlelight"
    ],
    answer: 1,
    explanation: "'Crepuscular' relates to twilight — the period just before sunrise or after sunset. It derives from Latin 'crepusculum' meaning 'twilight.' The crepuscular light thus created an eerie, dim atmosphere in the abandoned village."
  },
  {
    id: 23,
    question: "Choose the correct meaning of the underlined word in the sentence: 'His _tendentious_ editorial was criticized for its _jejune_ analysis of the economic data.'",
    options: [
      "Sophisticated and nuanced",
      "Naive, simplistic, or superficial; lacking experience or wisdom",
      "Deliberately misleading and fraudulent",
      "Overly technical and inaccessible to general readers"
    ],
    answer: 1,
    explanation: "'Jejune' means naive, simplistic, or superficial. It originally meant 'without food' (from Latin 'jejunus'), but evolved to mean intellectually unsatisfying or lacking maturity of thought. Here, the analysis is criticized for being unsophisticated."
  },
  {
    id: 24,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The professor's _laconic_ lecture style left students struggling to fill in the gaps.'",
    options: [
      "Overly complex and difficult to follow",
      "Using very few words; brief and concise, often to the point of seeming rude",
      "Monotonous and repetitive in delivery",
      "Highly emotional and dramatic"
    ],
    answer: 1,
    explanation: "'Laconic' means using very few words; brief and concise. It derives from 'Laconia,' the region of ancient Sparta, whose inhabitants were famous for their terse speech. A laconic lecture would be extremely brief, perhaps unhelpfully so."
  },
  {
    id: 25,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The novelist's _roman à clef_ depicted thinly disguised portraits of real political figures.'",
    options: [
      "A novel written in a romantic style",
      "A novel in which real persons or events appear with invented names",
      "A novel structured around a central mystery or secret",
      "A novel written from multiple first-person perspectives"
    ],
    answer: 1,
    explanation: "'Roman à clef' (French for 'novel with a key') is a novel in which real life is more or less thinly disguised. Characters are based on real people but given fictional names. Famous examples include Primary Colors and many works by Hemingway."
  },
  {
    id: 26,
    question: "Choose the correct meaning of the underlined word in the sentence: 'Despite his _avuncular_ manner, the CEO was ruthless in boardroom negotiations.'",
    options: [
      "Extremely formal and authoritative",
      "Kind and friendly, in a way that resembles how an uncle relates to a nephew",
      "Deceptively gentle and passive",
      "Highly experienced and professionally accomplished"
    ],
    answer: 1,
    explanation: "'Avuncular' means kind and friendly towards younger or less experienced people, in the way that an uncle might be. It derives from Latin 'avunculus' meaning 'maternal uncle.' The sentence contrasts his friendly demeanor with his ruthless business practices."
  },
  {
    id: 27,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The treaty was criticized as a _Pyrrhic_ victory — won at too great a cost.'",
    options: [
      "A victory that is total and unconditional",
      "A victory won at such great cost that it is tantamount to defeat",
      "A victory achieved through deception",
      "A victory that is disputed or contested"
    ],
    answer: 1,
    explanation: "A 'Pyrrhic victory' is one won at such great cost that it is effectively a defeat. The term comes from King Pyrrhus of Epirus, who defeated the Romans at Asculum in 279 BC but suffered devastating losses, reportedly saying 'One more such victory and I am lost.'"
  },
  {
    id: 28,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The _tendentious_ critic dismissed the film as mere _bathos_, wallowing in cheap sentimentality.'",
    options: [
      "An abrupt transition from the exalted to the commonplace; anticlimactic effect",
      "Extreme emotional depth and profound pathos",
      "A literary technique involving exaggerated suffering",
      "A film genre characterized by melodramatic storytelling"
    ],
    answer: 0,
    explanation: "'Bathos' refers to an abrupt, jarring transition from the lofty to the trivial or commonplace, producing an anticlimactic effect. It is the opposite of 'pathos.' In writing or film, bathos occurs when a serious tone suddenly collapses into something mundane or silly."
  },
  {
    id: 29,
    question: "Choose the correct meaning of the underlined word in the sentence: 'Her _vituperative_ letters to the editor became a source of amusement in the newsroom.'",
    options: [
      "Excessively long and detailed",
      "Bitter and abusive in nature; harshly critical",
      "Witty and cleverly satirical",
      "Formally worded and legalistic"
    ],
    answer: 1,
    explanation: "'Vituperative' means bitter and abusive; full of harsh censure or condemnation. It derives from Latin 'vituperare' meaning 'to blame.' Vituperative letters would be filled with angry, scathing criticism."
  },
  {
    id: 30,
    question: "Choose the correct meaning of the underlined word in the sentence: 'The _palimpsest_ of the city's history was visible in its layers of architecture, each era built upon the last.'",
    options: [
      "A large-scale panoramic view or survey",
      "Something reused or altered but still bearing traces of an earlier form",
      "A comprehensive historical archive or record",
      "A deliberate attempt to erase the past"
    ],
    answer: 1,
    explanation: "A 'palimpsest' was originally a manuscript where earlier writing was scraped off and written over, but traces remained. Metaphorically, it describes anything that retains visible traces of an earlier form. Here, the city physically embodies its historical layers."
  },

  // Q31-Q40: One-Word Substitution
  {
    id: 31,
    question: "Which one word means 'a government by the wealthy; a state or society governed by the wealthy'?",
    options: [
      "Oligarchy",
      "Plutocracy",
      "Meritocracy",
      "Technocracy"
    ],
    answer: 1,
    explanation: "'Plutocracy' is government by the wealthy, or a state in which the wealthy class rules. It derives from Greek 'ploutos' (wealth) and 'kratos' (rule). An oligarchy is rule by a small group, which may or may not be based on wealth."
  },
  {
    id: 32,
    question: "Which one word means 'a person who pretends to have virtues, moral or religious beliefs, or principles that they do not actually possess'?",
    options: [
      "Demagogue",
      "Sycophant",
      "Hypocrite",
      "Misanthrope"
    ],
    answer: 2,
    explanation: "'Hypocrite' refers to a person who claims to have moral standards or beliefs that their own behavior does not conform to. It derives from Greek 'hypokrites' meaning 'stage actor,' since actors pretend to be someone they are not."
  },
  {
    id: 33,
    question: "Which one word means 'the fear or dislike of that which is perceived to be foreign or strange'?",
    options: [
      "Agoraphobia",
      "Xenophobia",
      "Misogyny",
      "Claustrophobia"
    ],
    answer: 1,
    explanation: "'Xenophobia' means dislike of or prejudice against people from other countries or cultures. It derives from Greek 'xenos' (foreigner, stranger) and 'phobos' (fear). It refers specifically to fear or hatred of foreigners or the unfamiliar."
  },
  {
    id: 34,
    question: "Which one word substitutes for 'a place where animals are slaughtered for food'?",
    options: [
      "Abattoir",
      "Menagerie",
      "Vivarium",
      "Charnel"
    ],
    answer: 0,
    explanation: "'Abattoir' is a slaughterhouse — a place where animals are killed for food. It comes from French 'abattre' meaning 'to strike down.' A 'menagerie' is a collection of wild animals. A 'charnel house' is a vault for storing bones."
  },
  {
    id: 35,
    question: "Which one word means 'the practice of having more than one wife or husband at the same time'?",
    options: [
      "Bigamy",
      "Polygamy",
      "Monogamy",
      "Misogamy"
    ],
    answer: 1,
    explanation: "'Polygamy' is the practice of having more than one wife or husband at the same time. 'Bigamy' specifically means having two spouses simultaneously and is a criminal offence in most jurisdictions. 'Misogamy' is a dislike of marriage. 'Polygamy' is the broader term."
  },
  {
    id: 36,
    question: "Which one word refers to 'an inscription on a tombstone or a short poem or speech in memory of a deceased person'?",
    options: [
      "Elegy",
      "Eulogy",
      "Epitaph",
      "Epigraph"
    ],
    answer: 2,
    explanation: "An 'epitaph' is an inscription on a tombstone, or a brief statement commemorating a deceased person. An 'elegy' is a mournful poem. A 'eulogy' is a speech praising the deceased. An 'epigraph' is a quotation at the start of a book or chapter."
  },
  {
    id: 37,
    question: "Which one word means 'a strong desire to return home; homesickness'?",
    options: [
      "Nostalgia",
      "Melancholy",
      "Hiraeth",
      "Nostomania"
    ],
    answer: 3,
    explanation: "'Nostomania' refers to an obsessive or extreme desire to return home. 'Nostalgia' is a more general sentimental longing for the past. 'Hiraeth' is a Welsh term for a specific type of longing. 'Nostomania' is the precise clinical/literary term for pathological homesickness."
  },
  {
    id: 38,
    question: "Which one word means 'a person who is excessively concerned with minor details and rules'?",
    options: [
      "Pedant",
      "Purist",
      "Martinet",
      "Précieux"
    ],
    answer: 0,
    explanation: "A 'pedant' is a person who is excessively concerned with minor details or formal rules, especially in teaching. A 'martinet' is specifically a strict military disciplinarian. A 'purist' insists on adhering to traditional rules of language or style."
  },
  {
    id: 39,
    question: "Which one word means 'the study of flags'?",
    options: [
      "Heraldry",
      "Vexillology",
      "Numismatics",
      "Sigillography"
    ],
    answer: 1,
    explanation: "'Vexillology' is the scholarly study of flags. It derives from Latin 'vexillum' (a type of Roman military banner) and Greek 'logos' (study). 'Heraldry' concerns coats of arms. 'Numismatics' is the study of coins. 'Sigillography' is the study of seals."
  },
  {
    id: 40,
    question: "Which one word refers to 'a ruler with total power over a country, typically one who exercises power in a cruel or oppressive way'?",
    options: [
      "Autocrat",
      "Despot",
      "Tyrant",
      "All of the above, but 'despot' most precisely"
    ],
    answer: 3,
    explanation: "While 'autocrat,' 'despot,' and 'tyrant' are all used, 'despot' most precisely means a ruler with absolute, often cruel power. 'Tyrant' emphasizes cruel, oppressive rule. 'Autocrat' emphasizes absolute authority without implying cruelty. 'Despot' combines absolute rule with arbitrary or oppressive governance."
  },

  // Q41-Q50: Foreign Words/Phrases Used in English
  {
    id: 41,
    question: "What is the meaning of the German word 'Schadenfreude' used in English?",
    options: [
      "A feeling of deep shame about one's own actions",
      "Pleasure derived from another person's misfortune",
      "An overwhelming sense of existential dread",
      "Intense nostalgia for a lost golden age"
    ],
    answer: 1,
    explanation: "'Schadenfreude' is a German loanword meaning pleasure derived from another person's misfortune or pain. It is a compound of 'Schaden' (damage, harm) and 'Freude' (joy, pleasure). English has no single-word equivalent, which is why the German word is used directly."
  },
  {
    id: 42,
    question: "What is the meaning of the German word 'Zeitgeist' used in English?",
    options: [
      "A sudden moment of creative inspiration",
      "The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time",
      "An inexplicable feeling of anxiety about the future",
      "The cultural clash between tradition and modernity"
    ],
    answer: 1,
    explanation: "'Zeitgeist' means the defining spirit or mood of a particular period in history. It is German for 'time spirit' ('Zeit' = time, 'Geist' = spirit or ghost). It captures the intellectual and cultural climate of an era that is generally understood as characteristic of that time."
  },
  {
    id: 43,
    question: "What is the meaning of the French phrase 'coup de grâce' used in English?",
    options: [
      "An unexpected act of extraordinary kindness",
      "A final blow or shot given to end the suffering of one who is mortally wounded; a finishing blow",
      "An elegant and graceful diplomatic solution",
      "A sudden and unexpected reversal of fortune"
    ],
    answer: 1,
    explanation: "'Coup de grâce' is French for 'blow of mercy' ('coup' = blow, 'grâce' = mercy/grace). It refers to a final blow or shot administered to end the suffering of a mortally wounded person or animal. Figuratively, it means the final decisive event that ends something."
  },
  {
    id: 44,
    question: "What is the meaning of the French phrase 'faux pas' used in English?",
    options: [
      "A false or deceptive appearance",
      "An embarrassing or tactless act or remark in a social situation",
      "An elegant, deliberate social gesture",
      "A legal term for fraudulent misrepresentation"
    ],
    answer: 1,
    explanation: "'Faux pas' is French for 'false step' ('faux' = false, 'pas' = step). In English, it refers to an embarrassing or tactless act or remark in a social situation that violates accepted norms. Example: asking a woman when her baby is due when she is not pregnant."
  },
  {
    id: 45,
    question: "What is the meaning of the French phrase 'carte blanche' used in English?",
    options: [
      "A formal written contract between two parties",
      "Complete freedom to act as one wishes or thinks best",
      "A blank diplomatic passport",
      "An official government white paper on policy"
    ],
    answer: 1,
    explanation: "'Carte blanche' is French for 'blank paper' or 'white card.' In English, it means complete freedom to act as one wishes. Historically, it referred to a blank document signed by an authority, allowing the bearer to fill in whatever terms they wished."
  },
  {
    id: 46,
    question: "What is the meaning of the French phrase 'raison d'être' used in English?",
    options: [
      "A reason for political revolution",
      "The most important reason or purpose for someone's or something's existence",
      "A logical argument or rational basis for a decision",
      "A formal justification submitted to a governing body"
    ],
    answer: 1,
    explanation: "'Raison d'être' is French for 'reason for being' ('raison' = reason, 'être' = to be). In English, it means the most important reason or purpose for someone's existence or an organization's function. Example: 'Helping the poor was the charity's raison d'être.'"
  },
  {
    id: 47,
    question: "What is the meaning of the Latin phrase 'ad hominem' used in English?",
    options: [
      "Relating to a broad, general audience",
      "Directed against a person's character rather than their argument; a personal attack",
      "A logical argument based on universal human values",
      "An appeal to authority or expert opinion"
    ],
    answer: 1,
    explanation: "'Ad hominem' is Latin for 'to the person.' In English, it describes an argument or attack directed at an opponent's personal character rather than the merits of their position. It is considered a logical fallacy when used instead of addressing the actual argument."
  },
  {
    id: 48,
    question: "What is the meaning of the French phrase 'joie de vivre' used in English?",
    options: [
      "A melancholic longing for a simpler past",
      "Exuberant enjoyment of life; a feeling of great happiness and enjoyment of life",
      "The philosophical acceptance of life's suffering",
      "An intense passion for artistic creation"
    ],
    answer: 1,
    explanation: "'Joie de vivre' is French for 'joy of living.' In English, it refers to a feeling of great happiness and the exuberant enjoyment of life. It describes a personality trait of someone who embraces life with enthusiasm and vitality."
  },
  {
    id: 49,
    question: "What is the meaning of the Japanese word 'Wabi-sabi' used in English?",
    options: [
      "A form of Japanese martial art emphasizing speed and agility",
      "A worldview centered on the acceptance of transience and imperfection; finding beauty in imperfection",
      "An elaborate Japanese tea ceremony ritual",
      "The concept of achieving perfect balance and harmony"
    ],
    answer: 1,
    explanation: "'Wabi-sabi' is a Japanese aesthetic worldview based on finding beauty in imperfection, transience, and incompleteness. 'Wabi' relates to rustic simplicity and 'sabi' to the beauty of age and wear. It represents an acceptance of the imperfect, impermanent, and incomplete nature of all things."
  },
  {
    id: 50,
    question: "What is the meaning of the Latin phrase 'per se' used in English?",
    options: [
      "By itself; intrinsically; in itself or themselves",
      "Through official or formal channels",
      "In accordance with established precedent",
      "According to the majority view or opinion"
    ],
    answer: 0,
    explanation: "'Per se' is Latin for 'by itself' or 'in itself.' In English, it means intrinsically or by or in itself, without reference to anything else. Example: 'The policy is not illegal per se, but it raises ethical questions.' It isolates the thing being discussed from external considerations."
  }
]

export default questions

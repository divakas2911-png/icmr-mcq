const questions = [
  {
    id: 1,
    question: "What is the meaning of 'callipygian'?",
    options: [
      "Having a melancholic disposition",
      "Having well-shaped buttocks",
      "Relating to a type of ancient Greek pottery",
      "Possessing an unusually high intelligence"
    ],
    answer: 1,
    explanation: "'Callipygian' derives from Greek 'kallos' (beauty) + 'pyge' (buttocks), meaning having well-shaped or finely formed buttocks. It is often used humorously or in aesthetic contexts."
  },
  {
    id: 2,
    question: "What does 'petrichor' mean?",
    options: [
      "The smell of burning wood in a fireplace",
      "A type of fossilized stone formation",
      "The pleasant earthy smell produced when rain falls on dry ground",
      "A rare mineral found in volcanic rock"
    ],
    answer: 2,
    explanation: "'Petrichor' is coined from Greek 'petra' (stone) + 'ichor' (the fluid that flows in the veins of the gods). It refers specifically to the pleasant, distinctive scent produced when rain falls on dry earth."
  },
  {
    id: 3,
    question: "Which of the following best defines 'sonder'?",
    options: [
      "The feeling of deep nostalgia for a place never visited",
      "The realization that each passerby has a life as vivid and complex as one's own",
      "A state of absolute mental clarity and peace",
      "The sensation of falling as one drifts off to sleep"
    ],
    answer: 1,
    explanation: "'Sonder' is a neologism coined by John Koenig in the 'Dictionary of Obscure Sorrows.' It describes the profound realization that every random passerby is living a life as vivid and complex as your own."
  },
  {
    id: 4,
    question: "What does 'ineffable' mean?",
    options: [
      "Incapable of feeling emotion",
      "Too great or extreme to be expressed in words",
      "Impossible to achieve or realize",
      "Not subject to the laws of nature"
    ],
    answer: 1,
    explanation: "'Ineffable' comes from Latin 'ineffabilis,' meaning too great, extreme, or beautiful to be expressed or described in words. It is the opposite of 'effable' (expressible)."
  },
  {
    id: 5,
    question: "What is the correct meaning of 'ephemeral'?",
    options: [
      "Lasting for a very short time; transitory",
      "Relating to supernatural or ghostly phenomena",
      "Occurring once every hundred years",
      "Deeply rooted and long-lasting"
    ],
    answer: 0,
    explanation: "'Ephemeral' derives from Greek 'ephemeros' (lasting only a day), meaning lasting for a very short time. It contrasts with 'perennial' or 'eternal.'"
  },
  {
    id: 6,
    question: "The word 'mellifluous' most accurately means:",
    options: [
      "Bitter and sharp in taste or tone",
      "Sweet or musical; pleasant to hear",
      "Relating to the production of honey",
      "Flowing smoothly like a river in full flood"
    ],
    answer: 1,
    explanation: "'Mellifluous' is from Latin 'mel' (honey) + 'fluere' (to flow), literally 'flowing with honey.' It describes a sound that is sweet, smooth, and musical, pleasant to the ear."
  },
  {
    id: 7,
    question: "What does 'quixotic' mean?",
    options: [
      "Extremely practical and down-to-earth",
      "Exceedingly foolhardy and reckless in battle",
      "Extremely idealistic; unrealistic and impractical",
      "Relating to the philosophy of stoicism"
    ],
    answer: 2,
    explanation: "'Quixotic' derives from the literary character Don Quixote, who pursued unrealistic ideals. It means characterized by romantic idealism, often to an impractical or absurd degree."
  },
  {
    id: 8,
    question: "Which definition best fits 'pulchritude'?",
    options: [
      "A condition of extreme physical weakness",
      "Beauty, especially of a person",
      "The state of having excessive pride",
      "A type of architectural ornamentation"
    ],
    answer: 1,
    explanation: "'Pulchritude' comes from Latin 'pulchritudo,' meaning beauty or loveliness, especially physical beauty. Despite its rather harsh sound, it is a formal word for physical beauty."
  },
  {
    id: 9,
    question: "What is 'cacophony'?",
    options: [
      "A harmonious blend of musical instruments",
      "A type of ancient Greek choral arrangement",
      "A harsh, discordant mixture of sounds",
      "The study of sound and its properties"
    ],
    answer: 2,
    explanation: "'Cacophony' from Greek 'kakophonia' (bad sound) refers to a harsh, discordant, and unpleasant mixture of sounds. It is the antonym of 'euphony.'"
  },
  {
    id: 10,
    question: "What does 'ebullience' mean?",
    options: [
      "The tendency to become easily angered",
      "The quality of being cheerful and full of energy; exuberance",
      "The property of a liquid to reach boiling point quickly",
      "A deep, philosophical melancholy"
    ],
    answer: 1,
    explanation: "'Ebullience' comes from Latin 'ebullire' (to bubble up), meaning the quality of being lively, enthusiastic, and exuberant. An ebullient person overflows with enthusiasm."
  },
  {
    id: 11,
    question: "Which meaning best corresponds to 'perspicacity'?",
    options: [
      "The ability to perspire excessively under stress",
      "A tendency to be easily influenced by others",
      "The quality of having a ready insight into things; shrewdness",
      "A habitual tendency toward moral ambiguity"
    ],
    answer: 2,
    explanation: "'Perspicacity' derives from Latin 'perspicax' (sharp-sighted), meaning a ready insight, shrewdness, and the ability to perceive and understand things clearly."
  },
  {
    id: 12,
    question: "What does 'logorrhea' mean?",
    options: [
      "A severe aversion to reading",
      "An excessive and often incoherent talkativeness",
      "The study of logical reasoning systems",
      "A type of speech impediment affecting consonants"
    ],
    answer: 1,
    explanation: "'Logorrhea' from Greek 'logos' (word) + 'rhoia' (flow) means pathologically excessive talkativeness or wordiness. It is used both medically and figuratively."
  },
  {
    id: 13,
    question: "The word 'anfractuous' means:",
    options: [
      "Sinuous and winding; circuitous",
      "Easily broken or fragile",
      "Relating to the study of fractals",
      "Stubbornly resistant to change"
    ],
    answer: 0,
    explanation: "'Anfractuous' from Latin 'anfractus' (a winding) means sinuous, winding, or involving many twists and turns. It can describe a winding road or a complex, circuitous argument."
  },
  {
    id: 14,
    question: "What is the meaning of 'otiose'?",
    options: [
      "Serving no practical purpose; redundant",
      "Relating to the ear and hearing",
      "Overly eager and enthusiastic",
      "Characterized by extraordinary precision"
    ],
    answer: 0,
    explanation: "'Otiose' from Latin 'otiosus' (at leisure) means serving no practical purpose or result; superfluous. It can also mean idle or indolent."
  },
  {
    id: 15,
    question: "What does 'vellichor' refer to?",
    options: [
      "The sharp smell of old paper and books",
      "The strange wistfulness of used bookshops",
      "A type of medieval manuscript decoration",
      "The sound of pages being turned rapidly"
    ],
    answer: 1,
    explanation: "'Vellichor' is a neologism from the 'Dictionary of Obscure Sorrows' referring to the strange wistfulness of used bookstores — the sense that all the books on their shelves represent lives and worlds that have quietly faded away."
  },
  {
    id: 16,
    question: "In the sentence 'The minister's tenure was marked by an obsequious press corps that never challenged his decisions,' the word 'obsequious' means:",
    options: [
      "Deeply critical and unforgiving",
      "Independently minded and analytical",
      "Excessively compliant or deferential; fawning",
      "Professionally detached and neutral"
    ],
    answer: 2,
    explanation: "In this context, 'obsequious' means servilely compliant or fawning. The press corps failed to challenge authority by being excessively deferential, which is the hallmark of obsequious behavior."
  },
  {
    id: 17,
    question: "In 'Her pellucid prose made even the most complex arguments accessible to the general reader,' the word 'pellucid' means:",
    options: [
      "Densely layered and richly allusive",
      "Translucently clear; easily understood",
      "Deliberately ambiguous to invite interpretation",
      "Formally structured and bureaucratic"
    ],
    answer: 1,
    explanation: "'Pellucid' from Latin 'pellucidus' means translucently clear. When applied to writing or speech, it means clear, easily understood, and free from ambiguity."
  },
  {
    id: 18,
    question: "In 'The critic's panegyric left the audience wondering whether he had read the same novel they had,' the word 'panegyric' means:",
    options: [
      "A scathing and detailed critique",
      "A public speech of praise; an elaborate compliment",
      "A satirical parody of a literary work",
      "A balanced and nuanced literary analysis"
    ],
    answer: 1,
    explanation: "'Panegyric' from Greek 'panegyrikos' refers to a public speech or published text in praise of someone or something. The sentence implies the praise was excessively effusive."
  },
  {
    id: 19,
    question: "In 'The professor's cavilling at minor grammatical errors distracted from the substance of the dissertation,' the word 'cavilling' means:",
    options: [
      "Making petty or unnecessary objections",
      "Providing constructive and detailed criticism",
      "Examining with extraordinary thoroughness",
      "Dismissing ideas without proper consideration"
    ],
    answer: 0,
    explanation: "'Cavil' means to make petty or unnecessary objections. 'Cavilling' here describes the professor's tendency to focus on trivial issues rather than the work's substantive merits."
  },
  {
    id: 20,
    question: "In 'The politician deployed a series of tendentious statistics to support his predetermined conclusion,' 'tendentious' means:",
    options: [
      "Statistically robust and methodologically sound",
      "Promoting a particular cause or point of view; biased",
      "Based on widely accepted empirical evidence",
      "Excessively cautious and hedged in claims"
    ],
    answer: 1,
    explanation: "'Tendentious' means written or said to support a particular cause or view in a way that may distort the truth. The politician's statistics were cherry-picked to support a biased conclusion."
  },
  {
    id: 21,
    question: "In 'The barrister's loquacious closing argument tested the jury's patience,' 'loquacious' means:",
    options: [
      "Logically structured and legally precise",
      "Tending to talk a great deal; garrulous",
      "Deliberately cryptic and hard to follow",
      "Emotionally charged and personally revealing"
    ],
    answer: 1,
    explanation: "'Loquacious' from Latin 'loqui' (to talk) means tending to talk a great deal. While related to eloquence, loquaciousness implies excessive rather than effective talking."
  },
  {
    id: 22,
    question: "In 'His lachrymose memoirs were dismissed by reviewers as self-indulgent,' 'lachrymose' means:",
    options: [
      "Inclined to weep; tearful; excessively sentimental",
      "Overly technical and difficult to read",
      "Filled with dry, sardonic humour",
      "Meticulously researched and historically accurate"
    ],
    answer: 0,
    explanation: "'Lachrymose' from Latin 'lachrima' (tear) means given to weeping, tearful, or inducing tears. Lachrymose writing is excessively sentimental or emotionally manipulative."
  },
  {
    id: 23,
    question: "In 'The documentary offered a hagiographic portrait of the CEO, ignoring multiple controversies,' 'hagiographic' means:",
    options: [
      "Offering a critically balanced assessment",
      "Excessively idealizing; resembling a biography of a saint",
      "Heavily reliant on statistical data and analysis",
      "Focusing exclusively on the subject's failures"
    ],
    answer: 1,
    explanation: "'Hagiographic' derives from 'hagiography' (writing about saints). It now means presenting someone in an excessively idealized or reverent manner, ignoring flaws or controversies."
  },
  {
    id: 24,
    question: "In 'The pundit's solipsistic analysis assumed that events unfolding elsewhere mirrored his own nation's experience,' 'solipsistic' means:",
    options: [
      "Rigorously comparative and cross-cultural",
      "Characterized by the view that only one's own experience is valid",
      "Based on a narrow but technically accurate reading",
      "Excessively optimistic about geopolitical outcomes"
    ],
    answer: 1,
    explanation: "'Solipsistic' relates to solipsism, the view that the self is the only thing that can be known to exist. In this context, it means the pundit could only interpret the world through his own limited frame of reference."
  },
  {
    id: 25,
    question: "In 'The CEO's sanguine projections contrasted sharply with the grim reality of the balance sheet,' 'sanguine' means:",
    options: [
      "Relating to bloodshed and financial loss",
      "Overly pessimistic and catastrophizing",
      "Optimistic, especially in a difficult situation",
      "Grounded in verifiable empirical evidence"
    ],
    answer: 2,
    explanation: "'Sanguine' from Latin 'sanguis' (blood) originally related to the blood-red complexion associated with a cheerful temperament. It now means optimistic, especially in difficult circumstances."
  },
  {
    id: 26,
    question: "In 'The novelist's mordant wit spared no institution, from parliament to the church,' 'mordant' means:",
    options: [
      "Gentle and affectionate in humor",
      "Sharp and biting; caustic in a critical way",
      "Deliberately vague and difficult to pin down",
      "Relying on physical comedy rather than wordplay"
    ],
    answer: 1,
    explanation: "'Mordant' from French 'mordre' (to bite) means having or showing a sharp or critical quality; biting or caustic in humor or comment."
  },
  {
    id: 27,
    question: "In 'The village had a bucolic charm that made city-dwellers yearn for simpler lives,' 'bucolic' means:",
    options: [
      "Relating to industrial production in rural areas",
      "Relating to the pleasant aspects of the countryside; pastoral",
      "Characterized by hardship and agricultural toil",
      "Belonging to a specific regional dialect"
    ],
    answer: 1,
    explanation: "'Bucolic' from Greek 'boukolikos' (pastoral) means relating to the pleasant aspects of rural life or the countryside. It often carries an idealized or romanticized connotation."
  },
  {
    id: 28,
    question: "In 'Her extemporaneous remarks at the conference outshone her prepared speech,' 'extemporaneous' means:",
    options: [
      "Carefully rehearsed and meticulously timed",
      "Read directly from a prepared manuscript",
      "Spoken or done without prior preparation; improvised",
      "Lasting for an unusually extended period of time"
    ],
    answer: 2,
    explanation: "'Extemporaneous' means spoken or performed without preparation. It is distinguished from 'impromptu' (done on the spur of the moment) by the implication that some general knowledge or skill underlies the performance."
  },
  {
    id: 29,
    question: "In 'The arbiter's equanimity in the face of heated arguments impressed all parties,' 'equanimity' means:",
    options: [
      "A fierce determination to reach a verdict quickly",
      "Mental calmness and composure, especially in difficult situations",
      "A tendency to favour one side over another",
      "An absolute refusal to engage with emotional arguments"
    ],
    answer: 1,
    explanation: "'Equanimity' from Latin 'aequanimitas' means mental calmness and evenness of temper, especially in difficult situations. It is a key virtue in Stoic philosophy."
  },
  {
    id: 30,
    question: "In 'The researcher's propinquity to the study's subjects was seen as both an asset and a potential source of bias,' 'propinquity' means:",
    options: [
      "Professional competence and methodological rigor",
      "Nearness in space, time, or relationship; proximity",
      "A formal declaration of research intent",
      "The tendency to adopt the views of those one studies"
    ],
    answer: 1,
    explanation: "'Propinquity' from Latin 'propinquus' (near) means nearness in place, time, or relationship. In research contexts it raises questions about objectivity due to closeness to subjects."
  },
  {
    id: 31,
    question: "What is the one-word substitute for 'a system of government in which priests rule in the name of God or a god'?",
    options: [
      "Oligarchy",
      "Theocracy",
      "Plutocracy",
      "Hierocracy"
    ],
    answer: 1,
    explanation: "'Theocracy' from Greek 'theos' (god) + 'kratos' (rule) refers specifically to a system of government in which a deity is recognized as the supreme civil ruler. 'Hierocracy' is rule by priests but without the divine-rule aspect."
  },
  {
    id: 32,
    question: "What is the one-word substitute for 'a figure of speech where a part is used to refer to the whole'?",
    options: [
      "Metonymy",
      "Synecdoche",
      "Litotes",
      "Catachresis"
    ],
    answer: 1,
    explanation: "'Synecdoche' is a figure of speech in which a part represents the whole (e.g., 'all hands on deck'). 'Metonymy' uses an associated thing instead of the thing itself (e.g., 'the crown' for monarchy)."
  },
  {
    id: 33,
    question: "What is the one-word substitute for 'the study of the origin and history of words'?",
    options: [
      "Lexicology",
      "Morphology",
      "Etymology",
      "Semiotics"
    ],
    answer: 2,
    explanation: "'Etymology' is the study of the origin and historical development of words. 'Lexicology' studies the vocabulary of a language; 'morphology' studies word forms; 'semiotics' studies signs and symbols."
  },
  {
    id: 34,
    question: "What is the one-word substitute for 'one who studies the history and description of proper names'?",
    options: [
      "Toponymist",
      "Onomastician",
      "Philologist",
      "Nomenclaturist"
    ],
    answer: 1,
    explanation: "An 'onomastician' is a specialist in onomastics — the study of proper names, including personal names and place names. 'Toponymist' specifically studies place names, a subset of onomastics."
  },
  {
    id: 35,
    question: "What is the one-word substitute for 'the art of effective or persuasive speaking or writing'?",
    options: [
      "Elocution",
      "Oratory",
      "Rhetoric",
      "Diction"
    ],
    answer: 2,
    explanation: "'Rhetoric' encompasses the art of persuasion through effective speaking and writing. 'Oratory' is specifically the skill of formal public speaking; 'elocution' concerns manner of speaking; 'diction' refers to word choice."
  },
  {
    id: 36,
    question: "What is the one-word substitute for 'a government by the wealthy'?",
    options: [
      "Meritocracy",
      "Aristocracy",
      "Plutocracy",
      "Technocracy"
    ],
    answer: 2,
    explanation: "'Plutocracy' from Greek 'ploutos' (wealth) + 'kratos' (rule) means government by the wealthy. 'Aristocracy' is rule by a privileged class; 'meritocracy' is rule by merit; 'technocracy' is rule by technical experts."
  },
  {
    id: 37,
    question: "What is the one-word substitute for 'one who compiles a dictionary'?",
    options: [
      "Etymologist",
      "Lexicographer",
      "Philologist",
      "Grammarian"
    ],
    answer: 1,
    explanation: "A 'lexicographer' is a person who compiles, writes, or edits dictionaries. Samuel Johnson and Noah Webster are famous lexicographers."
  },
  {
    id: 38,
    question: "What is the one-word substitute for 'the study of flags'?",
    options: [
      "Heraldry",
      "Vexillology",
      "Numismatics",
      "Sigillography"
    ],
    answer: 1,
    explanation: "'Vexillology' from Latin 'vexillum' (flag) is the study of the history, symbolism, and usage of flags. 'Heraldry' concerns coats of arms; 'sigillography' concerns seals."
  },
  {
    id: 39,
    question: "What is the one-word substitute for 'a person who pretends to have more knowledge or skill than they possess'?",
    options: [
      "Dilettante",
      "Charlatan",
      "Sophist",
      "Mountebank"
    ],
    answer: 1,
    explanation: "A 'charlatan' is a person who falsely claims expertise or skill. 'Mountebank' is a close synonym with a historical connotation of patent medicine sellers. 'Dilettante' is one with superficial interest; 'sophist' is one who uses fallacious arguments."
  },
  {
    id: 40,
    question: "What is the one-word substitute for 'an expression of one's wishes about what should be done after one's death'?",
    options: [
      "Codicil",
      "Testament",
      "Bequest",
      "Probate"
    ],
    answer: 1,
    explanation: "A 'testament' (or 'will') is a legal declaration of a person's wishes regarding the disposal of their property after death. A 'codicil' is an addition or supplement to a will; 'bequest' is a specific gift left in a will; 'probate' is the legal process of validating a will."
  },
  {
    id: 41,
    question: "What does the German loanword 'schadenfreude' mean?",
    options: [
      "A feeling of deep regret over past actions",
      "Pleasure derived from another person's misfortune",
      "An overwhelming sense of existential dread",
      "The bittersweet longing for a lost golden age"
    ],
    answer: 1,
    explanation: "'Schadenfreude' from German 'Schaden' (harm/damage) + 'Freude' (joy) means pleasure, joy, or self-satisfaction that comes from learning of or witnessing the troubles, failures, or humiliation of another."
  },
  {
    id: 42,
    question: "What does the French expression 'raison d'être' mean?",
    options: [
      "The reason or justification for existence",
      "A sudden flash of brilliant insight",
      "The guiding principle of an artistic movement",
      "A formal declaration of philosophical belief"
    ],
    answer: 0,
    explanation: "'Raison d'être' literally means 'reason for being' in French. It refers to the most important reason or purpose for someone's or something's existence."
  },
  {
    id: 43,
    question: "What does the Latin phrase 'in medias res' mean?",
    options: [
      "In the presence of the media",
      "Into the middle of things; beginning a story at a critical point",
      "In the realm of the middle classes",
      "Among medical professionals"
    ],
    answer: 1,
    explanation: "'In medias res' is a Latin phrase meaning 'into the middle of things.' It is a narrative technique where the story begins in the middle of the action, with context provided later through flashbacks or exposition."
  },
  {
    id: 44,
    question: "What does the Japanese concept 'wabi-sabi' refer to?",
    options: [
      "The aesthetic of perfectionism and flawless execution",
      "The art of flower arrangement emphasizing minimalism",
      "The acceptance of transience and imperfection as beautiful",
      "The philosophy of achieving harmony through conflict"
    ],
    answer: 2,
    explanation: "'Wabi-sabi' is a Japanese aesthetic philosophy centered on the acceptance of transience, imperfection, and the beauty found in things that are imperfect, incomplete, or impermanent."
  },
  {
    id: 45,
    question: "What does the Portuguese word 'saudade' mean?",
    options: [
      "A celebratory toast made at festive occasions",
      "A deep emotional state of nostalgic longing for an absent something",
      "The formal greeting exchanged between equals",
      "The pride felt in national cultural achievements"
    ],
    answer: 1,
    explanation: "'Saudade' is often considered untranslatable. It describes a deep emotional state of nostalgic or profound melancholic longing for an absent something or someone that one loves and has loved, often combined with the knowledge that the object of longing may never return."
  },
  {
    id: 46,
    question: "What does the French term 'tête-à-tête' literally mean and how is it used in English?",
    options: [
      "Literally 'head to head'; used to mean a direct confrontation",
      "Literally 'head to head'; used to mean a private conversation between two people",
      "Literally 'face to face'; used to describe a formal diplomatic meeting",
      "Literally 'thought to thought'; used to describe telepathic communication"
    ],
    answer: 1,
    explanation: "'Tête-à-tête' literally means 'head to head' in French. In English it is used to describe a private conversation or meeting between two people, often of an intimate nature."
  },
  {
    id: 47,
    question: "What does the German word 'weltanschauung' mean?",
    options: [
      "A sense of global wanderlust and desire to explore",
      "A comprehensive worldview or philosophy of life",
      "The feeling of being overwhelmed by world events",
      "A cultural movement emphasizing global interconnection"
    ],
    answer: 1,
    explanation: "'Weltanschauung' from German 'Welt' (world) + 'Anschauung' (view/perception) means a particular philosophy or view of life; the worldview of an individual or group. It is broader than ideology, encompassing all assumptions about existence."
  },
  {
    id: 48,
    question: "What does the Italian term 'sprezzatura' mean?",
    options: [
      "A type of improvisational performance in commedia dell'arte",
      "A studied carelessness; the art of making something difficult look effortless",
      "The formal rules governing courtly behavior",
      "Excessively ornate and theatrical self-presentation"
    ],
    answer: 1,
    explanation: "'Sprezzatura' was coined by Baldassare Castiglione in 'The Book of the Courtier.' It refers to a certain nonchalance — the art of making difficult things appear effortless and natural, concealing the hard work behind a skill."
  },
  {
    id: 49,
    question: "What does the Greek-derived word 'kairos' mean in rhetoric and philosophy?",
    options: [
      "Chronological or sequential time as measured by clocks",
      "The opportune or decisive moment; the right time for action",
      "The eternal and unchanging aspect of divine time",
      "Historical time as experienced by a civilization"
    ],
    answer: 1,
    explanation: "'Kairos' is a Greek word meaning the right, critical, or opportune moment. In rhetoric, it refers to the contextual timing of an argument. It contrasts with 'chronos,' which refers to sequential, measured time."
  },
  {
    id: 50,
    question: "What does the Yiddish word 'chutzpah' mean?",
    options: [
      "A type of traditional ceremonial food",
      "Supreme self-confidence; audacious nerve or gall",
      "A feeling of deep communal belonging",
      "The wisdom acquired through suffering and hardship"
    ],
    answer: 1,
    explanation: "'Chutzpah' is a Yiddish word meaning supreme self-confidence, audacity, or nerve — often used to describe someone who boldly does something that others would consider impudent or outrageous. It can be used both admiringly and critically."
  }
]

export default questions

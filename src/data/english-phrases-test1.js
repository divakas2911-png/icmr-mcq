const questions = [
  // Q1-Q12: Meaning of phrasal verbs
  {
    id: 1,
    question: "What does the phrasal verb 'dissemble' most closely relate to, and which phrasal verb means 'to conceal one's true motives or feelings under a false appearance'?",
    options: [
      "A) come clean – to admit the truth",
      "B) hold out on – to withhold information or conceal true intentions",
      "C) gloss over – to treat something as unimportant",
      "D) fob off – to deceive someone with excuses"
    ],
    answer: 1,
    explanation: "'Hold out on' means to withhold something or conceal one's true intentions from someone, making it the closest match to concealing true motives. 'Come clean' means to admit truth (opposite), 'gloss over' means to minimise, and 'fob off' means to deceive with excuses rather than concealment of motive."
  },
  {
    id: 2,
    question: "What is the meaning of the phrasal verb 'beaver away'?",
    options: [
      "A) To escape quickly from a difficult situation",
      "B) To work diligently and persistently at something",
      "C) To accumulate wealth over a long period",
      "D) To complain repeatedly about minor issues"
    ],
    answer: 1,
    explanation: "'Beaver away' means to work hard and steadily at something, derived from the industrious nature of beavers. It implies persistent, focused effort over time."
  },
  {
    id: 3,
    question: "The phrasal verb 'parlay' (parlay something into) means:",
    options: [
      "A) To lose a small investment through reckless spending",
      "B) To transform a relatively modest asset or achievement into something greater",
      "C) To negotiate a truce between opposing parties",
      "D) To divide a large sum of money into smaller portions"
    ],
    answer: 1,
    explanation: "'Parlay something into' means to use an advantage, asset, or small amount of money to achieve a much greater gain or success. E.g., 'She parlayed her internship into a senior management role.'"
  },
  {
    id: 4,
    question: "What does the phrasal verb 'cotton on' mean?",
    options: [
      "A) To become emotionally attached to someone",
      "B) To begin to understand or realise something",
      "C) To agree reluctantly with a proposal",
      "D) To follow someone closely without their knowledge"
    ],
    answer: 1,
    explanation: "'Cotton on' (British English) means to begin to understand or grasp the meaning of something. E.g., 'It took me a while to cotton on to what he was really saying.'"
  },
  {
    id: 5,
    question: "The phrasal verb 'gainst' (set against) aside, what does 'gainsay' as a phrasal concept mean, and which modern phrasal verb is its functional equivalent?",
    options: [
      "A) To affirm enthusiastically – 'back up'",
      "B) To deny or contradict – 'fly in the face of'",
      "C) To support indirectly – 'stand by'",
      "D) To ignore completely – 'brush aside'"
    ],
    answer: 1,
    explanation: "'Gainsay' means to deny, contradict, or speak against something. Its modern phrasal equivalent 'fly in the face of' means to contradict or act against something established or expected."
  },
  {
    id: 6,
    question: "What is the correct meaning of 'ride roughshod over'?",
    options: [
      "A) To travel hastily without preparation",
      "B) To treat someone or their feelings with complete disregard and dominance",
      "C) To navigate a difficult terrain with great skill",
      "D) To supervise subordinates with excessive strictness"
    ],
    answer: 1,
    explanation: "'Ride roughshod over' means to treat someone or their wishes with total disregard, acting in a domineering manner. It originates from cavalry horses fitted with protruding nail heads (roughshod) for grip, which injured anything they trampled."
  },
  {
    id: 7,
    question: "Which meaning correctly defines the phrasal verb 'kowtow to'?",
    options: [
      "A) To argue aggressively against authority",
      "B) To act obsequiously subservient; to yield servilely to someone's demands",
      "C) To present formal demands in a diplomatic setting",
      "D) To withdraw from a confrontation gracefully"
    ],
    answer: 1,
    explanation: "'Kowtow to' means to act in an excessively obsequious or subservient manner toward someone in authority. It derives from the Chinese custom of kneeling and bowing forehead to the ground as a sign of submission."
  },
  {
    id: 8,
    question: "The phrasal verb 'arrogate to oneself' means:",
    options: [
      "A) To delegate authority to a subordinate",
      "B) To claim or seize rights or powers without justification",
      "C) To renounce one's position voluntarily",
      "D) To take full responsibility for a collective failure"
    ],
    answer: 1,
    explanation: "'Arrogate to oneself' means to claim or take something, especially a right or power, without justification or entitlement. E.g., 'The committee arrogated to itself the power to override judicial decisions.'"
  },
  {
    id: 9,
    question: "What does 'taper off' mean in the context of statistics or trends?",
    options: [
      "A) To increase sharply after a period of stability",
      "B) To gradually diminish or decrease toward the end",
      "C) To remain constant despite external fluctuations",
      "D) To reverse direction suddenly after reaching a peak"
    ],
    answer: 1,
    explanation: "'Taper off' means to gradually become smaller, fewer, or less; to diminish progressively. In statistics, it describes a trend that slowly decreases toward the end of a period."
  },
  {
    id: 10,
    question: "The phrasal verb 'fulminate against' means:",
    options: [
      "A) To praise excessively and without merit",
      "B) To express vehement protest or violent verbal criticism",
      "C) To negotiate with hostile parties through intermediaries",
      "D) To withdraw support suddenly from a failing cause"
    ],
    answer: 1,
    explanation: "'Fulminate against' means to express strong verbal criticism or protest, often loudly and with great passion. E.g., 'The senator fulminated against the proposed cuts to healthcare funding.'"
  },
  {
    id: 11,
    question: "What does the phrasal verb 'winnow out' mean?",
    options: [
      "A) To increase the variety within a selection",
      "B) To remove the inferior or unwanted elements from a larger group",
      "C) To combine several ideas into a single coherent argument",
      "D) To expose hidden corruption within an organisation"
    ],
    answer: 1,
    explanation: "'Winnow out' means to separate or eliminate the weaker, inferior, or unwanted elements from a group or set. It derives from the agricultural process of separating grain from chaff by wind."
  },
  {
    id: 12,
    question: "The phrasal verb 'temporise' (to temporise with) functions similarly to which phrasal verb meaning to delay making a decision in order to gain time?",
    options: [
      "A) 'Play for time' – to delay deliberately to gain an advantage",
      "B) 'Come to terms with' – to accept a difficult situation",
      "C) 'Make up for' – to compensate for lost time",
      "D) 'Run out of' – to exhaust available resources"
    ],
    answer: 0,
    explanation: "'Temporise' means to avoid making a definite decision in order to gain time or delay commitment. 'Play for time' is its closest phrasal verb equivalent, meaning to deliberately delay a decision or action to gain a tactical advantage."
  },

  // Q13-Q25: Phrases and their meanings
  {
    id: 13,
    question: "What does the phrase 'at one's wits' end' mean?",
    options: [
      "A) To have exhausted all ideas and be in a state of desperation",
      "B) To be on the verge of a brilliant intellectual breakthrough",
      "C) To demonstrate superior intelligence in a competitive setting",
      "D) To be unable to concentrate due to external distractions"
    ],
    answer: 0,
    explanation: "'At one's wits' end' means to have tried everything possible and be completely at a loss for what to do next, often accompanied by frustration or despair."
  },
  {
    id: 14,
    question: "The phrase 'sine qua non' (Latin) is used in English to mean:",
    options: [
      "A) An indispensable condition or element without which something cannot exist or succeed",
      "B) A formal legal disclaimer attached to a contract",
      "C) An act performed without expectation of reward",
      "D) A situation that cannot be reversed or undone"
    ],
    answer: 0,
    explanation: "'Sine qua non' literally means 'without which not' in Latin. In English, it refers to an absolutely essential condition or requirement. E.g., 'Integrity is the sine qua non of good leadership.'"
  },
  {
    id: 15,
    question: "What is the meaning of the phrase 'a Pyrrhic victory'?",
    options: [
      "A) A victory won by cunning rather than by force",
      "B) A victory achieved at such great cost that it is effectively a defeat",
      "C) A moral victory without any tangible benefit",
      "D) An unexpected triumph against overwhelming odds"
    ],
    answer: 1,
    explanation: "A 'Pyrrhic victory' refers to a win achieved at such devastating cost to the winner that it negates any real gain. Named after King Pyrrhus of Epirus, whose costly victories against Rome led him to remark that another such victory would ruin him."
  },
  {
    id: 16,
    question: "The phrase 'caveat emptor' means:",
    options: [
      "A) Let the seller beware of fraudulent buyers",
      "B) Let the buyer beware – the purchaser takes responsibility for their purchase",
      "C) A mutual agreement between buyer and seller",
      "D) A legal guarantee of product quality"
    ],
    answer: 1,
    explanation: "'Caveat emptor' is a Latin phrase meaning 'let the buyer beware.' It is a principle that the buyer is responsible for checking the quality and suitability of goods before purchase, and the seller bears no responsibility for defects after the sale."
  },
  {
    id: 17,
    question: "What does the phrase 'hobson's choice' mean?",
    options: [
      "A) A choice between two equally undesirable options",
      "B) A free choice that is actually no choice at all – take it or leave it",
      "C) The best possible option selected from a wide range of alternatives",
      "D) A compromise reached after lengthy negotiation"
    ],
    answer: 1,
    explanation: "'Hobson's choice' means an apparently free choice when there is actually only one option available. It originates from Thomas Hobson, a 17th-century Cambridge stable owner who required customers to take the horse nearest the door or none at all."
  },
  {
    id: 18,
    question: "The phrase 'per se' (Latin) is correctly used to mean:",
    options: [
      "A) In relation to a specific example or case study",
      "B) By or in itself; intrinsically; essentially",
      "C) In a manner consistent with legal precedent",
      "D) According to the opinion of an expert"
    ],
    answer: 1,
    explanation: "'Per se' is a Latin phrase meaning 'by itself' or 'intrinsically.' It is used to indicate that something is being considered in its own right, independent of other factors. E.g., 'The drug is not harmful per se, but it can be dangerous in combination with alcohol.'"
  },
  {
    id: 19,
    question: "What does 'in extremis' mean in contemporary English usage?",
    options: [
      "A) In moderation; avoiding excessive behaviour",
      "B) In an extremely difficult situation; at the point of death or in a crisis",
      "C) Beyond the limits of legal or ethical conduct",
      "D) With the utmost care and precision"
    ],
    answer: 1,
    explanation: "'In extremis' is a Latin phrase meaning 'in extreme circumstances' or 'at the point of death.' In broader usage, it refers to being in a dire or desperate situation where normal methods are insufficient."
  },
  {
    id: 20,
    question: "The French phrase 'fait accompli' is used in English to mean:",
    options: [
      "A) A task that is nearly complete but requires final approval",
      "B) Something already done and irreversible, presented as a settled fact",
      "C) A formal agreement between two competing parties",
      "D) An action taken with full awareness of its consequences"
    ],
    answer: 1,
    explanation: "'Fait accompli' (French: 'accomplished fact') refers to something that has already been done or decided, making opposition or reversal pointless. E.g., 'The merger was presented to the employees as a fait accompli.'"
  },
  {
    id: 21,
    question: "What does the adverbial phrase 'tout court' mean in English?",
    options: [
      "A) In great detail and at considerable length",
      "B) Simply; without qualification or elaboration; full stop",
      "C) In the manner of a legal proceeding",
      "D) With great ceremony and formal protocol"
    ],
    answer: 1,
    explanation: "'Tout court' is a French phrase meaning 'quite simply' or 'without further qualification.' It is used to indicate that a word or phrase should be understood in its most basic, unqualified sense. E.g., 'He was a genius, tout court.'"
  },
  {
    id: 22,
    question: "The phrase 'obiter dictum' (plural: obiter dicta) refers to:",
    options: [
      "A) The binding legal ruling that forms the precedent of a court judgment",
      "B) An incidental remark or observation made in passing, especially by a judge",
      "C) A formal dissenting opinion attached to a majority judgment",
      "D) A written statement of facts submitted to a court"
    ],
    answer: 1,
    explanation: "'Obiter dictum' (Latin: 'said by the way') refers to an incidental remark or observation, especially one made by a judge that is not essential to the decision and therefore not legally binding as precedent."
  },
  {
    id: 23,
    question: "What is the meaning of the phrase 'a propos de bottes' used in English from French?",
    options: [
      "A) With extraordinary and meticulous attention to detail",
      "B) Out of context; beside the point; irrelevantly",
      "C) In a highly sophisticated and fashionable manner",
      "D) Following established etiquette and social conventions"
    ],
    answer: 1,
    explanation: "'À propos de bottes' literally means 'apropos of boots' in French – boots having nothing to do with the matter at hand. In English it is used to mean irrelevantly, out of context, or to indicate an abrupt change of subject without connection to what was previously said."
  },
  {
    id: 24,
    question: "The phrase 'argumentum ad hominem' refers to:",
    options: [
      "A) A logical argument based entirely on statistical evidence",
      "B) An argument that attacks the person making a claim rather than the claim itself",
      "C) A persuasive technique that appeals to authority figures",
      "D) A form of reasoning that uses analogies to prove a point"
    ],
    answer: 1,
    explanation: "'Argumentum ad hominem' (Latin: 'argument against the person') is a logical fallacy where one attacks the character, motive, or other attribute of the person making an argument rather than addressing the argument itself."
  },
  {
    id: 25,
    question: "What does the phrase 'by dint of' mean?",
    options: [
      "A) In spite of considerable obstacles and opposition",
      "B) By means of; through the force or agency of",
      "C) At the expense of another's wellbeing",
      "D) In accordance with established rules or conventions"
    ],
    answer: 1,
    explanation: "'By dint of' means 'by means of' or 'by virtue of.' It emphasises the method or effort by which something is achieved. E.g., 'She succeeded by dint of sheer hard work and determination.'"
  },

  // Q26-Q37: Fill in the blank
  {
    id: 26,
    question: "The defence lawyer argued that the confession was obtained ________, and therefore inadmissible in court. (Choose the correct phrase)",
    options: [
      "A) under duress",
      "B) in absentia",
      "C) per annum",
      "D) in toto"
    ],
    answer: 0,
    explanation: "'Under duress' means under coercion or compulsion, often involving threats. A confession obtained under duress is considered involuntary and is typically inadmissible as evidence. 'In absentia' means in one's absence; 'per annum' means per year; 'in toto' means in total."
  },
  {
    id: 27,
    question: "Despite the panel's thorough investigation, the origin of the discrepancy remained ________; no member could account for it. (Choose the correct phrase)",
    options: [
      "A) a fait accompli",
      "B) a moot point",
      "C) an open question",
      "D) terra incognita"
    ],
    answer: 2,
    explanation: "'An open question' means something not yet decided or resolved, which fits the context of an unresolved origin. 'A fait accompli' means already done; 'a moot point' means debatable or no longer relevant; 'terra incognita' means unknown territory (usually geographical)."
  },
  {
    id: 28,
    question: "The organisation operates ________, meaning that its decisions are made by a small inner group, hidden from public scrutiny.",
    options: [
      "A) sub judice",
      "B) in camera",
      "C) ex cathedra",
      "D) inter alia"
    ],
    answer: 1,
    explanation: "'In camera' (Latin: 'in a chamber') means in private, not open to the public. It is used for proceedings or decisions made in secret. 'Sub judice' means under judicial consideration; 'ex cathedra' means with full official authority; 'inter alia' means among other things."
  },
  {
    id: 29,
    question: "The prime minister's statement was released ________, taking the press by complete surprise before any information could be prepared.",
    options: [
      "A) without further ado",
      "B) out of the blue",
      "C) at the eleventh hour",
      "D) against the grain"
    ],
    answer: 1,
    explanation: "'Out of the blue' means suddenly and unexpectedly, without prior warning. 'Without further ado' means immediately, without delay; 'at the eleventh hour' means at the last possible moment; 'against the grain' means contrary to one's natural inclination."
  },
  {
    id: 30,
    question: "His academic credentials are impeccable, but his practical experience is, ________, quite limited for a position of such seniority.",
    options: [
      "A) by the same token",
      "B) to put it charitably",
      "C) ipso facto",
      "D) mutatis mutandis"
    ],
    answer: 1,
    explanation: "'To put it charitably' is a phrase used before a diplomatic understatement, implying the truth is actually worse. 'By the same token' means for the same reason; 'ipso facto' means by that very fact; 'mutatis mutandis' means with the necessary changes having been made."
  },
  {
    id: 31,
    question: "The committee agreed to accept the terms ________, without debating each clause individually.",
    options: [
      "A) en bloc",
      "B) in lieu",
      "C) de facto",
      "D) ex parte"
    ],
    answer: 0,
    explanation: "'En bloc' (French: 'as a block') means all together, as a whole, without division. 'In lieu' means instead of; 'de facto' means in practice/in reality; 'ex parte' means on behalf of one side only (legal term)."
  },
  {
    id: 32,
    question: "The scientist's groundbreaking theory was initially dismissed, but it has since become the ________ of modern quantum physics.",
    options: [
      "A) bête noire",
      "B) locus classicus",
      "C) raison d'être",
      "D) tour de force"
    ],
    answer: 1,
    explanation: "'Locus classicus' (Latin: 'classical place') refers to the most authoritative or classic passage or example of something. It is the standard or definitive reference. 'Bête noire' means a person or thing one dislikes; 'raison d'être' means reason for existence; 'tour de force' means an impressive achievement."
  },
  {
    id: 33,
    question: "After years of rivalry, the two research teams finally decided to work ________ on the climate study.",
    options: [
      "A) in tandem",
      "B) at loggerheads",
      "C) in perpetuity",
      "D) with impunity"
    ],
    answer: 0,
    explanation: "'In tandem' means together or in conjunction with each other. 'At loggerheads' means in strong disagreement; 'in perpetuity' means forever; 'with impunity' means without fear of punishment."
  },
  {
    id: 34,
    question: "The whistleblower's testimony, ________, contradicted every assertion made by the management in their earlier depositions.",
    options: [
      "A) in point of fact",
      "B) to all intents and purposes",
      "C) in the fullness of time",
      "D) on the face of it"
    ],
    answer: 0,
    explanation: "'In point of fact' means in reality; actually – used to introduce a statement that corrects a mistaken belief. 'To all intents and purposes' means in every practical sense; 'in the fullness of time' means eventually; 'on the face of it' means judging by appearances."
  },
  {
    id: 35,
    question: "She refused to sign the agreement ________ legal counsel, knowing that the terms heavily favoured the other party.",
    options: [
      "A) in the absence of",
      "B) on behalf of",
      "C) in lieu of",
      "D) on the strength of"
    ],
    answer: 0,
    explanation: "'In the absence of' means without; when something is not present or available. She refused to sign without legal counsel present. 'On behalf of' means representing; 'in lieu of' means instead of; 'on the strength of' means based on."
  },
  {
    id: 36,
    question: "The new regulation applies ________ to all pharmaceutical companies, regardless of their size or revenue.",
    options: [
      "A) mutatis mutandis",
      "B) across the board",
      "C) at face value",
      "D) by and large"
    ],
    answer: 1,
    explanation: "'Across the board' means applying to all members of a group without exception. 'Mutatis mutandis' means with the necessary modifications; 'at face value' means taking something as it appears; 'by and large' means on the whole; in general."
  },
  {
    id: 37,
    question: "His resignation came ________ the board's rejection of his restructuring proposal, leaving many to question whether he had planned it all along.",
    options: [
      "A) hard on the heels of",
      "B) in the wake of",
      "C) by virtue of",
      "D) in the light of"
    ],
    answer: 1,
    explanation: "'In the wake of' means as a result of or following immediately after an event. While 'hard on the heels of' is also a possibility (meaning immediately after), 'in the wake of' more precisely captures a consequence that follows an event, which better fits the context here."
  },

  // Q38-Q50: Replace the underlined expression with the most appropriate phrase
  {
    id: 38,
    question: "The politician's promises were nothing but EMPTY WORDS that had no substance behind them. Replace the underlined expression.",
    options: [
      "A) a red herring",
      "B) mere rhetoric",
      "C) hot air",
      "D) a storm in a teacup"
    ],
    answer: 2,
    explanation: "'Hot air' means talk or writing that sounds impressive but has no real meaning or substance, making it the best replacement for 'empty words.' 'A red herring' is a misleading clue; 'mere rhetoric' also works but 'hot air' is more idiomatic; 'a storm in a teacup' means a trivial matter treated as important."
  },
  {
    id: 39,
    question: "After the scandal, the CEO decided to ACCEPT RESPONSIBILITY AND CONFESS FULLY to the board of directors. Replace the underlined expression.",
    options: [
      "A) come clean",
      "B) turn over a new leaf",
      "C) face the music",
      "D) bear the brunt"
    ],
    answer: 0,
    explanation: "'Come clean' means to tell the truth and confess fully, which precisely replaces 'accept responsibility and confess fully.' 'Turn over a new leaf' means to reform behaviour; 'face the music' means to accept the consequences of one's actions; 'bear the brunt' means to endure the worst of something."
  },
  {
    id: 40,
    question: "The new recruit's ideas, though creative, were COMPLETELY IMPRACTICAL and could not be implemented in the current framework. Replace the underlined expression.",
    options: [
      "A) out of the question",
      "B) pie in the sky",
      "C) against the clock",
      "D) off the record"
    ],
    answer: 1,
    explanation: "'Pie in the sky' means something that is pleasant to contemplate but is completely impractical or impossible to achieve. 'Out of the question' means absolutely impossible; 'against the clock' means racing against time; 'off the record' means unofficially."
  },
  {
    id: 41,
    question: "The negotiator's tactics were so INDIRECT AND DELIBERATELY CONFUSING that the opposing team could not identify his true position. Replace the underlined expression.",
    options: [
      "A) tongue in cheek",
      "B) smoke and mirrors",
      "C) by the book",
      "D) on the level"
    ],
    answer: 1,
    explanation: "'Smoke and mirrors' means the use of deception or confusing tactics to obscure the truth. It perfectly replaces 'indirect and deliberately confusing.' 'Tongue in cheek' means insincere or ironic; 'by the book' means following rules strictly; 'on the level' means honest and straightforward."
  },
  {
    id: 42,
    question: "Despite the controversy, the director remained COMPLETELY UNAFFECTED AND CALM throughout the entire press conference. Replace the underlined expression.",
    options: [
      "A) in high spirits",
      "B) at her wits' end",
      "C) unruffled",
      "D) impassive to a fault"
    ],
    answer: 2,
    explanation: "'Unruffled' means not disturbed or agitated; calm and composed. While 'impassive to a fault' is descriptive, 'unruffled' is the most precise idiomatic phrase replacement for 'completely unaffected and calm.' 'In high spirits' means very happy; 'at her wits' end' means completely at a loss."
  },
  {
    id: 43,
    question: "The ministry's response to the crisis was SLOW AND INEFFECTIVE, failing to address any of the underlying issues. Replace the underlined expression.",
    options: [
      "A) like herding cats",
      "B) a flash in the pan",
      "C) too little too late",
      "D) barking up the wrong tree"
    ],
    answer: 2,
    explanation: "'Too little too late' means an action or response that is insufficient and also delayed beyond the point of usefulness. It precisely replaces 'slow and ineffective.' 'Like herding cats' means an impossible task; 'a flash in the pan' means a brief early success; 'barking up the wrong tree' means pursuing the wrong course."
  },
  {
    id: 44,
    question: "The researcher's findings DIRECTLY CONTRADICTED the established consensus in the field. Replace the underlined expression.",
    options: [
      "A) flew in the face of",
      "B) fell foul of",
      "C) cut against the grain of",
      "D) put paid to"
    ],
    answer: 0,
    explanation: "'Flew in the face of' means to directly contradict or oppose something established or accepted. 'Fell foul of' means to get into trouble with; 'cut against the grain of' is a plausible variant but less idiomatic; 'put paid to' means to end something definitively."
  },
  {
    id: 45,
    question: "The auditor's report MADE COMPLETELY OBSOLETE the need for any further internal review. Replace the underlined expression.",
    options: [
      "A) glossed over",
      "B) rendered redundant",
      "C) called into question",
      "D) set aside"
    ],
    answer: 1,
    explanation: "'Rendered redundant' means made completely unnecessary or obsolete. It directly replaces 'made completely obsolete.' 'Glossed over' means to minimise; 'called into question' means to raise doubts; 'set aside' means to ignore temporarily."
  },
  {
    id: 46,
    question: "The professor's new interpretation of the text was IN DIRECT OPPOSITION TO everything previously accepted by scholars. Replace the underlined expression.",
    options: [
      "A) at loggerheads with",
      "B) at odds with",
      "C) diametrically opposed to",
      "D) at variance with"
    ],
    answer: 2,
    explanation: "'Diametrically opposed to' means in complete and absolute opposition – as far apart as two opposite ends of a diameter. While 'at odds with' and 'at variance with' also mean in disagreement, 'diametrically opposed to' most precisely captures 'in direct opposition to everything.'"
  },
  {
    id: 47,
    question: "The administration's UNWILLINGNESS TO MAKE A CLEAR DECISION on the matter frustrated both parties involved. Replace the underlined expression.",
    options: [
      "A) double standards",
      "B) fence-sitting",
      "C) stonewalling",
      "D) equivocation"
    ],
    answer: 3,
    explanation: "'Equivocation' means the use of ambiguous language to conceal the truth or avoid committing to a clear position. While 'fence-sitting' is close (avoiding taking sides), 'equivocation' more precisely captures the act of deliberately being unclear or uncommitted in language and decision-making."
  },
  {
    id: 48,
    question: "The junior minister's remarks were ENTIRELY BESIDE THE POINT and added nothing to the policy debate. Replace the underlined expression.",
    options: [
      "A) off the cuff",
      "B) neither here nor there",
      "C) off the mark",
      "D) out of turn"
    ],
    answer: 1,
    explanation: "'Neither here nor there' means irrelevant; having no bearing on the matter at hand. It precisely replaces 'entirely beside the point.' 'Off the cuff' means without preparation; 'off the mark' means incorrect; 'out of turn' means at an inappropriate time or in a disrespectful manner."
  },
  {
    id: 49,
    question: "The laboratory's breakthrough was acknowledged by the scientific community AS SOMETHING OF SUPREME IMPORTANCE AND CONSEQUENCE. Replace the underlined expression.",
    options: [
      "A) of the first water",
      "B) of great moment",
      "C) beyond the pale",
      "D) of cardinal importance"
    ],
    answer: 3,
    explanation: "'Of cardinal importance' means of the highest or most critical importance – 'cardinal' meaning fundamental or paramount. While 'of great moment' also means of great significance, 'of cardinal importance' more precisely replaces 'of supreme importance and consequence.' 'Of the first water' means of the highest quality; 'beyond the pale' means unacceptable."
  },
  {
    id: 50,
    question: "Despite numerous warnings, the company continued to IGNORE THE RISKS and proceeded with the merger. Replace the underlined expression.",
    options: [
      "A) turn a blind eye to",
      "B) brush under the carpet",
      "C) pooh-pooh",
      "D) wash its hands of"
    ],
    answer: 0,
    explanation: "'Turn a blind eye to' means to deliberately ignore or pretend not to notice something, especially something problematic. It best replaces 'ignore the risks.' 'Brush under the carpet' means to conceal a problem; 'pooh-pooh' means to dismiss something as unimportant; 'wash one's hands of' means to disclaim responsibility."
  }
]

export default questions

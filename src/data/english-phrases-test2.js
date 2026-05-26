const questions = [
  // Q1-Q12: Meaning of advanced phrasal verbs
  {
    id: 1,
    question: "What does the phrasal verb 'peter out' mean?",
    options: [
      "To gradually diminish and come to an end",
      "To burst forth suddenly with great energy",
      "To delegate a task to a subordinate",
      "To assert oneself forcefully in a discussion"
    ],
    answer: 0,
    explanation: "'Peter out' means to gradually diminish, fade, or come to an end. For example, 'The initial enthusiasm for the project soon petered out.' It conveys a slow, unspectacular decline rather than a sudden stop."
  },
  {
    id: 2,
    question: "The detective managed to 'ferret out' the truth after weeks of investigation. What does 'ferret out' mean?",
    options: [
      "To conceal information from investigators",
      "To uncover or discover something by persistent searching",
      "To publicly announce findings at a press conference",
      "To fabricate evidence to support a conclusion"
    ],
    answer: 1,
    explanation: "'Ferret out' means to discover or uncover something by diligent and persistent searching, much like a ferret hunting in burrows. It implies tenacious investigation to extract hidden information."
  },
  {
    id: 3,
    question: "The charity organisation 'doled out' food parcels to those in need. What does 'dole out' mean?",
    options: [
      "To hoard resources for future use",
      "To distribute something in small portions, often reluctantly",
      "To sell commodities at inflated prices",
      "To solicit donations from wealthy benefactors"
    ],
    answer: 1,
    explanation: "'Dole out' means to distribute or dispense something, especially in small or meagre portions. It often carries a connotation of giving grudgingly or in carefully measured amounts."
  },
  {
    id: 4,
    question: "The impoverished family had to 'eke out' a living by taking multiple low-paying jobs. What does 'eke out' mean?",
    options: [
      "To accumulate wealth through shrewd investments",
      "To manage to survive or subsist with great difficulty using limited resources",
      "To relinquish one's possessions voluntarily",
      "To exploit others for personal financial gain"
    ],
    answer: 1,
    explanation: "'Eke out' means to manage to live or sustain oneself with great difficulty, making limited resources stretch as far as possible. It implies hardship and frugality in making ends meet."
  },
  {
    id: 5,
    question: "The judge was known to 'mete out' severe sentences to repeat offenders. What does 'mete out' mean?",
    options: [
      "To reduce or commute a punishment on compassionate grounds",
      "To dispense or allot punishment, justice, or reward in a measured way",
      "To appeal against a judicial decision to a higher court",
      "To postpone sentencing pending further investigation"
    ],
    answer: 1,
    explanation: "'Mete out' means to dispense or administer punishment, justice, or reward in a measured and deliberate manner. It is often used in legal or authoritative contexts where consequences are formally assigned."
  },
  {
    id: 6,
    question: "The salesman tried to 'fob off' inferior goods on unsuspecting customers. What does 'fob off' mean?",
    options: [
      "To offer genuine merchandise at a discounted rate",
      "To deceive someone by giving them something inferior or unsatisfactory",
      "To withdraw from a commercial transaction at the last moment",
      "To advertise products through misleading testimonials"
    ],
    answer: 1,
    explanation: "'Fob off' means to deceive or trick someone into accepting something inferior, unsatisfactory, or irrelevant, often to get rid of them or avoid a genuine response."
  },
  {
    id: 7,
    question: "The rumour began to 'gain traction' within the organisation. What does 'gain traction' mean?",
    options: [
      "To lose credibility among senior management",
      "To become more widely accepted, supported, or influential",
      "To be officially refuted by an authoritative source",
      "To be confined to a small group of dissenters"
    ],
    answer: 1,
    explanation: "'Gain traction' means to become more accepted, credible, or effective over time, like a wheel gradually gripping a surface. It is widely used in business and social contexts to describe growing momentum or influence."
  },
  {
    id: 8,
    question: "The manager tried to 'gloss over' the serious shortcomings in the quarterly report. What does 'gloss over' mean?",
    options: [
      "To scrutinise details with exhaustive thoroughness",
      "To treat a problem or fault as insignificant to avoid attention",
      "To highlight critical deficiencies for remedial action",
      "To embellish data with visual graphics and charts"
    ],
    answer: 1,
    explanation: "'Gloss over' means to pass over something quickly and superficially, making it appear less serious or important than it actually is, often to conceal or downplay a flaw or difficulty."
  },
  {
    id: 9,
    question: "After the initial crisis, the committee decided to 'soldier on' despite diminishing support. What does 'soldier on' mean?",
    options: [
      "To abandon a mission when prospects become bleak",
      "To continue steadfastly despite difficulties or discouragement",
      "To recruit additional personnel to bolster a struggling team",
      "To resort to authoritarian measures during an emergency"
    ],
    answer: 1,
    explanation: "'Soldier on' means to continue doing something despite hardship, opposition, or discouragement, showing determination and perseverance much like a soldier pressing forward under adverse conditions."
  },
  {
    id: 10,
    question: "The experienced diplomat knew when to 'hold his cards close to his chest'. What does this phrase mean?",
    options: [
      "To reveal one's strategy prematurely to gain an advantage",
      "To keep one's intentions, plans, or information secret",
      "To bluff opponents by feigning a position of weakness",
      "To negotiate from a position of complete transparency"
    ],
    answer: 1,
    explanation: "'Hold one's cards close to one's chest' means to keep one's plans, thoughts, or intentions secret and not reveal them to others, derived from the card-playing strategy of not letting opponents see your hand."
  },
  {
    id: 11,
    question: "The opposition party tried to 'muddy the waters' before the election. What does 'muddy the waters' mean?",
    options: [
      "To clarify a complex issue for the benefit of voters",
      "To make a situation more confused, unclear, or complicated deliberately",
      "To expose corruption within the incumbent administration",
      "To purify the electoral process of fraudulent practices"
    ],
    answer: 1,
    explanation: "'Muddy the waters' means to make a situation more confusing or unclear, often deliberately, to complicate matters or obscure the truth, just as mud makes water difficult to see through."
  },
  {
    id: 12,
    question: "The young executive refused to 'kowtow' to the unreasonable demands of his superiors. What does 'kowtow' mean?",
    options: [
      "To assert one's authority over those in subordinate positions",
      "To act in an excessively submissive way; to bow down obsequiously",
      "To negotiate terms from a position of mutual respect",
      "To formally challenge a superior's decision through proper channels"
    ],
    answer: 1,
    explanation: "'Kowtow' originally referred to the Chinese practice of kneeling and touching the forehead to the ground as a gesture of deep respect. In modern English, it means to act in a servile or excessively obsequious manner towards someone in authority."
  },

  // Q13-Q25: Formal/literary phrases and their meanings
  {
    id: 13,
    question: "The committee declared international cooperation a 'sine qua non' for addressing climate change. What does 'sine qua non' mean?",
    options: [
      "A desirable but non-essential supplementary condition",
      "An indispensable condition or requirement without which something cannot occur",
      "A compromise reached after prolonged negotiation",
      "A temporary measure adopted in lieu of a permanent solution"
    ],
    answer: 1,
    explanation: "'Sine qua non' is a Latin phrase meaning 'without which not', referring to an essential condition or requirement that is absolutely necessary for something to exist or happen."
  },
  {
    id: 14,
    question: "Investigators examined the criminal's 'modus operandi' to link the crimes together. What does 'modus operandi' mean?",
    options: [
      "The legal statute under which a criminal is charged",
      "A particular way or method of doing or operating something, especially a criminal's habitual pattern",
      "The forensic evidence collected at a crime scene",
      "The psychological profile compiled by a criminal psychiatrist"
    ],
    answer: 1,
    explanation: "'Modus operandi' is Latin for 'method of operating'. It refers to the distinctive habits or patterns of behaviour by which someone, particularly a criminal, characteristically carries out their activities."
  },
  {
    id: 15,
    question: "The archaeologist presented 'bona fide' evidence that the artefact dated to the third century. What does 'bona fide' mean?",
    options: [
      "Provisional and subject to further verification",
      "Genuine, authentic, or made in good faith without deception",
      "Controversial and disputed by rival experts",
      "Digitally enhanced to improve clarity and resolution"
    ],
    answer: 1,
    explanation: "'Bona fide' is Latin for 'in good faith'. It means genuine, real, or authentic, without any intention to deceive. It is used to confirm that something or someone is what they claim to be."
  },
  {
    id: 16,
    question: "Although not constitutionally recognised, the military junta was the 'de facto' government of the nation. What does 'de facto' mean?",
    options: [
      "Formally recognised and legally sanctioned by constitutional authority",
      "Existing or holding a position in reality, even if not officially or legally established",
      "Transitional and subject to democratic ratification by popular vote",
      "Historically documented but no longer operative in practice"
    ],
    answer: 1,
    explanation: "'De facto' is Latin for 'in fact' or 'in practice'. It describes something that exists in reality or practice, even if it has no formal legal recognition, as opposed to 'de jure' which denotes something established by law."
  },
  {
    id: 17,
    question: "By committing the fraud, he had 'ipso facto' disqualified himself from holding public office. What does 'ipso facto' mean?",
    options: [
      "Subject to a formal judicial review before consequences apply",
      "By that very fact or act itself, as an inevitable result",
      "Only after due deliberation by a competent authority",
      "Retroactively, with effect from a prior date"
    ],
    answer: 1,
    explanation: "'Ipso facto' is Latin for 'by the fact itself'. It means that a particular fact or action automatically and necessarily produces a particular consequence, without any further action or process being required."
  },
  {
    id: 18,
    question: "The two nations entered into a 'quid pro quo' arrangement regarding trade tariffs. What does 'quid pro quo' mean?",
    options: [
      "An unconditional grant of aid without expectation of return",
      "A favour or advantage granted in return for something of equal value; a reciprocal exchange",
      "A unilateral decision imposed without prior consultation",
      "A formal treaty ratified by an international governing body"
    ],
    answer: 1,
    explanation: "'Quid pro quo' is Latin for 'something for something'. It refers to a mutual exchange in which one thing is given or done in return for another thing of equivalent value or significance."
  },
  {
    id: 19,
    question: "The scholar's groundbreaking paper was accepted 'sub judice' and could not be publicly discussed. What does 'sub judice' mean?",
    options: [
      "Published under a pseudonym to protect the author's identity",
      "Under judicial consideration and therefore restricted from public discussion",
      "Submitted to a peer-review committee for scholarly evaluation",
      "Classified as confidential by a government security agency"
    ],
    answer: 1,
    explanation: "'Sub judice' is Latin for 'under a judge'. It refers to a matter that is currently under judicial consideration and therefore cannot be publicly discussed or commented upon, especially in ways that might prejudice the court proceedings."
  },
  {
    id: 20,
    question: "The retired professor was offered the position of 'professor emeritus'. What does 'emeritus' signify?",
    options: [
      "A temporary appointment pending recruitment of a permanent candidate",
      "A title retained by a retired professional who has distinguished themselves in their field",
      "A junior honorary title conferred on promising early-career academics",
      "A position funded exclusively by private endowment rather than public funds"
    ],
    answer: 1,
    explanation: "'Emeritus' is a Latin term meaning 'having served one's time'. It is an honorary title given to a retired professional, especially an academic, who continues to be recognised for their distinguished service and contribution to their field."
  },
  {
    id: 21,
    question: "The new policy was announced 'ex cathedra' by the chairperson, brooking no further debate. What does 'ex cathedra' mean?",
    options: [
      "After extensive consultation with all relevant stakeholders",
      "With official authority; in an authoritative and unchallengeable manner",
      "Informally and without binding implications for future policy",
      "Provisionally, pending a ratification vote by the full board"
    ],
    answer: 1,
    explanation: "'Ex cathedra' is Latin for 'from the chair'. It originally referred to the Pope's infallible pronouncements made from his official seat. More broadly, it means speaking with full official authority, leaving no room for question or debate."
  },
  {
    id: 22,
    question: "The company's press release was described as 'pro forma' rather than a genuine reflection of the situation. What does 'pro forma' mean?",
    options: [
      "Prepared with exceptional precision and attention to factual accuracy",
      "Done as a formality, following standard procedure without real significance",
      "Drafted in response to an urgent and unprecedented crisis",
      "Compiled from independent external auditing data"
    ],
    answer: 1,
    explanation: "'Pro forma' is Latin for 'as a matter of form'. It describes something done as a routine formality to satisfy procedural requirements rather than with genuine intent or substance behind it."
  },
  {
    id: 23,
    question: "The scientist's work was considered 'terra incognita' even by specialists in adjacent disciplines. What does 'terra incognita' mean?",
    options: [
      "A field that has been exhaustively researched and conclusively documented",
      "Unknown or unexplored territory, either literal or metaphorical",
      "A well-established theoretical framework with broad scholarly consensus",
      "A region that is geographically inhospitable but strategically significant"
    ],
    answer: 1,
    explanation: "'Terra incognita' is Latin for 'unknown land'. It was historically used on maps to mark unexplored regions. Metaphorically, it refers to any area of knowledge, experience, or activity that is unfamiliar or unexplored."
  },
  {
    id: 24,
    question: "The minister's speech was widely regarded as 'non sequitur' by political analysts. What does 'non sequitur' mean?",
    options: [
      "A conclusion that follows logically and inevitably from the premises",
      "A statement or conclusion that does not logically follow from the previous argument or evidence",
      "A deliberate understatement used for rhetorical effect",
      "A formal repudiation of a previously held position"
    ],
    answer: 1,
    explanation: "'Non sequitur' is Latin for 'it does not follow'. It refers to a conclusion or statement that does not logically follow from or is unconnected to the preceding argument or evidence, often used to expose flawed reasoning."
  },
  {
    id: 25,
    question: "The defence lawyer argued that the confession was obtained 'in camera' and therefore inadmissible. What does 'in camera' mean?",
    options: [
      "On videotape as part of a formal law-enforcement procedure",
      "In private, with the public and press excluded from the proceedings",
      "Using surveillance footage as the primary source of evidence",
      "In the presence of independent legal observers from a neutral body"
    ],
    answer: 1,
    explanation: "'In camera' is Latin for 'in a chamber'. It refers to a judicial proceeding or part of a proceeding conducted in private, in the judge's chamber, without press or public access, often to protect sensitive information."
  },

  // Q26-Q37: Fill in the blank with the correct phrase in context
  {
    id: 26,
    question: "Despite his initial reluctance, the senior official eventually _______ and agreed to testify before the committee.",
    options: [
      "came a cropper",
      "threw in the towel",
      "came round",
      "cut corners"
    ],
    answer: 2,
    explanation: "'Came round' means to eventually change one's opinion or decision and agree with or accept something. The other options do not fit: 'came a cropper' means to fail badly; 'threw in the towel' means to give up; 'cut corners' means to do something poorly to save time or money."
  },
  {
    id: 27,
    question: "The board felt the proposal was too risky and decided not to _______ without further financial guarantees.",
    options: [
      "take the bull by the horns",
      "stick their neck out",
      "bite the bullet",
      "break new ground"
    ],
    answer: 1,
    explanation: "'Stick one's neck out' means to take a risk or put oneself in a vulnerable position by doing or saying something that might attract criticism or negative consequences. The context of risk without guarantees fits this phrase best."
  },
  {
    id: 28,
    question: "She was known to _______ when asked about her personal life, giving vague answers that revealed nothing.",
    options: [
      "beat around the bush",
      "speak her mind",
      "put her foot in it",
      "read between the lines"
    ],
    answer: 0,
    explanation: "'Beat around the bush' means to avoid coming to the main point directly, speaking in a roundabout way. The clue is 'giving vague answers that revealed nothing', which is precisely what this phrase conveys."
  },
  {
    id: 29,
    question: "The merger, which had been expected to succeed, completely _______ when regulators intervened at the last minute.",
    options: [
      "went off the rails",
      "came to a head",
      "fell through",
      "turned the tables"
    ],
    answer: 2,
    explanation: "'Fell through' means that a plan, deal, or arrangement failed to be completed or did not happen as expected. It is the most precise fit for a merger that failed after regulators intervened."
  },
  {
    id: 30,
    question: "The new recruit tried to _______ by volunteering for every task, hoping to impress the senior partners.",
    options: [
      "rest on his laurels",
      "curry favour",
      "pass the buck",
      "let the cat out of the bag"
    ],
    answer: 1,
    explanation: "'Curry favour' means to try to gain approval or goodwill through flattery or obsequious behaviour. Volunteering excessively to impress superiors is a classic example of currying favour."
  },
  {
    id: 31,
    question: "After months of secrecy, the rivalry between the two departments finally _______ at the annual conference.",
    options: [
      "came to a head",
      "fell on deaf ears",
      "went by the board",
      "took the wind out of their sails"
    ],
    answer: 0,
    explanation: "'Came to a head' means that a situation reached a critical point where it could no longer be avoided or suppressed and required immediate resolution. After months of hidden tension, it culminating at the conference fits perfectly."
  },
  {
    id: 32,
    question: "Her repeated requests for a pay review _______ with the finance director, who showed no intention of acting on them.",
    options: [
      "struck a chord",
      "fell on deaf ears",
      "carried the day",
      "broke the ice"
    ],
    answer: 1,
    explanation: "'Fell on deaf ears' means that an appeal, complaint, or request was ignored and produced no response or action. The phrase fits the scenario of the finance director ignoring requests for a pay review."
  },
  {
    id: 33,
    question: "The prime minister's bold fiscal announcement completely _______ the opposition, leaving them without a rebuttal.",
    options: [
      "took the wind out of their sails",
      "set the ball rolling",
      "read the riot act",
      "threw down the gauntlet"
    ],
    answer: 0,
    explanation: "'Took the wind out of their sails' means to suddenly deflate or undermine someone's enthusiasm, confidence, or argument, leaving them at a loss. The opposition being left without a rebuttal perfectly illustrates this."
  },
  {
    id: 34,
    question: "The investigative journalist refused to _______ even when threatened with legal action by the corporation.",
    options: [
      "add fuel to the fire",
      "throw caution to the wind",
      "back down",
      "turn a blind eye"
    ],
    answer: 2,
    explanation: "'Back down' means to withdraw from a position or stance under pressure. The journalist refusing to retreat despite legal threats is the clearest use of this phrase in context."
  },
  {
    id: 35,
    question: "The consultant's report was full of technical jargon that ultimately _______ rather than illuminating the core issues.",
    options: [
      "hit the nail on the head",
      "muddied the waters",
      "broke new ground",
      "cut to the chase"
    ],
    answer: 1,
    explanation: "'Muddied the waters' means to make a situation more confused or unclear. A report full of jargon that obscures rather than clarifies core issues is a textbook example of muddying the waters."
  },
  {
    id: 36,
    question: "After years of dominating the market, the company began to _______ as more agile competitors entered the space.",
    options: [
      "rest on its laurels",
      "get the ball rolling",
      "go back to the drawing board",
      "bite off more than it could chew"
    ],
    answer: 0,
    explanation: "'Rest on one's laurels' means to rely on past achievements rather than continuing to strive for improvement. A company that had previously dominated but was now overtaken by competitors suggests complacency, fitting this phrase."
  },
  {
    id: 37,
    question: "The team leader decided to _______ at the outset of the project by assigning clear roles and responsibilities to everyone.",
    options: [
      "bite the bullet",
      "lay down the law",
      "set the ball rolling",
      "burn bridges"
    ],
    answer: 2,
    explanation: "'Set the ball rolling' means to initiate or start a process or activity. Assigning roles and responsibilities at the outset to begin the project is the act of setting the ball rolling."
  },

  // Q38-Q50: Identify the correct phrase that replaces the underlined expression
  {
    id: 38,
    question: "The CEO's decision to restructure the company was seen as an attempt to 'divert attention from the ongoing scandal'. Which phrase best replaces the underlined expression?",
    options: [
      "draw a red herring",
      "throw people off the scent",
      "pull the wool over people's eyes",
      "create a smokescreen"
    ],
    answer: 3,
    explanation: "'Create a smokescreen' most precisely replaces 'divert attention from the ongoing scandal', as a smokescreen is something deliberately deployed to conceal or distract from an uncomfortable truth or activity."
  },
  {
    id: 39,
    question: "The researcher's findings 'directly contradicted' the prevailing theory in the field. Which phrase best replaces 'directly contradicted'?",
    options: [
      "flew in the face of",
      "fell foul of",
      "ran afoul of",
      "cut against the grain of"
    ],
    answer: 0,
    explanation: "'Flew in the face of' means to openly contradict or act contrary to something well-established. It is the most direct replacement for 'directly contradicted' the prevailing theory, implying open defiance of accepted wisdom."
  },
  {
    id: 40,
    question: "She had the rare ability to 'remain calm and composed' under extreme professional pressure. Which phrase best replaces the underlined expression?",
    options: [
      "keep a stiff upper lip",
      "keep her head above water",
      "hold her ground",
      "keep her cards close to her chest"
    ],
    answer: 0,
    explanation: "'Keep a stiff upper lip' means to remain stoic, calm, and composed in the face of adversity or pressure. It is the best replacement for 'remain calm and composed', particularly under stress."
  },
  {
    id: 41,
    question: "The audit revealed that the department had been 'using public funds irresponsibly and without authorisation'. Which phrase best replaces the underlined expression?",
    options: [
      "spending money hand over fist",
      "dipping into the till",
      "throwing money down the drain",
      "feathering its own nest"
    ],
    answer: 1,
    explanation: "'Dipping into the till' specifically means taking money from a fund or account without permission or authorisation, which precisely matches 'using public funds irresponsibly and without authorisation'."
  },
  {
    id: 42,
    question: "The arbitrator urged both parties to 'reach a mutually acceptable middle position' instead of persisting with their extreme stances. Which phrase best replaces the underlined expression?",
    options: [
      "bury the hatchet",
      "split the difference",
      "meet halfway",
      "find common ground"
    ],
    answer: 2,
    explanation: "'Meet halfway' most directly means to reach a compromise by both sides making concessions toward a middle position, which is the exact meaning of the underlined expression."
  },
  {
    id: 43,
    question: "The politician's speech was designed to 'appeal to the emotions of ordinary citizens'. Which phrase best replaces the underlined expression?",
    options: [
      "preach to the choir",
      "pull at the heartstrings",
      "strike while the iron is hot",
      "rally the troops"
    ],
    answer: 1,
    explanation: "'Pull at the heartstrings' means to evoke strong emotional responses, particularly sympathy or sentiment. It best replaces 'appeal to the emotions of ordinary citizens' in this context."
  },
  {
    id: 44,
    question: "The new legislation effectively 'removed the financial advantage' that large corporations had enjoyed over smaller competitors. Which phrase best replaces the underlined expression?",
    options: [
      "levelled the playing field",
      "pulled the rug from under them",
      "cut them down to size",
      "tipped the scales"
    ],
    answer: 0,
    explanation: "'Levelled the playing field' means to remove unfair advantages so that all parties compete on equal terms. It is the most accurate replacement for 'removed the financial advantage' enjoyed by large corporations."
  },
  {
    id: 45,
    question: "His reckless public remarks had 'permanently damaged his relationship' with the board of directors. Which phrase best replaces the underlined expression?",
    options: [
      "burned his bridges",
      "cooked his goose",
      "shot himself in the foot",
      "sealed his fate"
    ],
    answer: 0,
    explanation: "'Burned his bridges' means to permanently damage or destroy a relationship or opportunity, making it impossible to return to a previous state. It best replaces 'permanently damaged his relationship' with the board."
  },
  {
    id: 46,
    question: "The intern was told in no uncertain terms to 'stop avoiding the most challenging aspects' of the assignment. Which phrase best replaces the underlined expression?",
    options: [
      "stop dragging his feet",
      "stop sitting on the fence",
      "stop skirting around the edges",
      "stop passing the buck"
    ],
    answer: 2,
    explanation: "'Stop skirting around the edges' means to stop avoiding the central or difficult parts of something, going around the periphery instead of engaging directly. It best replaces 'stop avoiding the most challenging aspects'."
  },
  {
    id: 47,
    question: "The opposition's objections 'ultimately had no effect on' the government's decision to proceed with the bill. Which phrase best replaces the underlined expression?",
    options: [
      "came to naught",
      "carried no weight with",
      "fell on deaf ears with regard to",
      "went for nothing against"
    ],
    answer: 1,
    explanation: "'Carried no weight with' means to have had no influence or persuasive effect on someone's decision. It is the most precise and idiomatic replacement for 'ultimately had no effect on' the government's decision."
  },
  {
    id: 48,
    question: "The whistleblower's revelations 'completely ruined' the director's carefully managed public reputation. Which phrase best replaces the underlined expression?",
    options: [
      "tore to shreds",
      "nailed to the wall",
      "laid bare",
      "dragged through the mud"
    ],
    answer: 3,
    explanation: "'Dragged through the mud' means to damage someone's reputation severely, especially through public exposure of damaging information. It best replaces 'completely ruined' the director's public reputation."
  },
  {
    id: 49,
    question: "The senior partner advised the junior associate to 'not attempt more than one can successfully manage'. Which phrase best replaces the underlined expression?",
    options: [
      "not put all your eggs in one basket",
      "not bite off more than you can chew",
      "not count your chickens before they hatch",
      "not spread yourself too thin"
    ],
    answer: 1,
    explanation: "'Bite off more than you can chew' means to attempt or undertake more than one is capable of successfully completing. It is the most direct and idiomatic replacement for 'attempt more than one can successfully manage'."
  },
  {
    id: 50,
    question: "The minister's vague response was widely interpreted as a sign that the government was 'avoiding commitment to a definite course of action'. Which phrase best replaces the underlined expression?",
    options: [
      "sitting on the fence",
      "beating around the bush",
      "hedging its bets",
      "playing for time"
    ],
    answer: 2,
    explanation: "'Hedging its bets' means deliberately avoiding full commitment to one course of action in order to minimise risk if things go wrong, keeping options open. It best replaces 'avoiding commitment to a definite course of action' in a political context."
  }
]

export default questions

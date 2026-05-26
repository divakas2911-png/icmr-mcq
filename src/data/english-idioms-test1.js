const questions = [
  // Q1-Q15: Meaning of Idioms
  {
    id: 1,
    question: "What does the idiom 'to beat around the bush' most precisely mean?",
    options: [
      "To work very hard in a garden",
      "To avoid coming to the main point by talking about irrelevant things",
      "To search thoroughly in every corner",
      "To punish someone indirectly"
    ],
    answer: 1,
    explanation: "'To beat around the bush' means to avoid getting to the main point of a discussion, often by talking about peripheral or irrelevant matters. It does NOT mean physical avoidance or searching."
  },
  {
    id: 2,
    question: "What does the idiom 'to cast pearls before swine' mean?",
    options: [
      "To waste something valuable on someone who cannot appreciate it",
      "To make a generous offer to an enemy",
      "To scatter resources carelessly without purpose",
      "To offer advice that is rejected by others"
    ],
    answer: 0,
    explanation: "'To cast pearls before swine' means to offer something of great value — whether material or intellectual — to those who are unable or unwilling to appreciate it. The emphasis is on the recipient's inability to appreciate, not merely on rejection."
  },
  {
    id: 3,
    question: "What does the idiom 'to have a finger in every pie' mean?",
    options: [
      "To be greedy and take more than one's share",
      "To be involved in many different activities or matters, often intrusively",
      "To sample many options before making a decision",
      "To meddle in others' food or personal belongings"
    ],
    answer: 1,
    explanation: "'To have a finger in every pie' means to be involved or interested in many different activities or ventures, often implying an intrusive or overbearing involvement. It is about breadth of involvement, not greed."
  },
  {
    id: 4,
    question: "What does the idiom 'to bell the cat' mean?",
    options: [
      "To make a bold and risky move to alert others of danger",
      "To perform a task that nobody else is willing to do because it is too dangerous or difficult",
      "To tame a wild or aggressive person",
      "To warn colleagues about a superior's bad mood"
    ],
    answer: 1,
    explanation: "From Aesop's fable, 'to bell the cat' means to undertake a dangerous or difficult task that others are afraid to attempt — someone must put the bell on the cat to warn the mice, but no mouse volunteers."
  },
  {
    id: 5,
    question: "What does the idiom 'to harp on the same string' mean?",
    options: [
      "To play music repetitively to bore an audience",
      "To persist in repeating the same argument or complaint monotonously",
      "To be extremely skilled at one particular activity",
      "To stick to a single, narrow viewpoint without listening to others"
    ],
    answer: 1,
    explanation: "'To harp on the same string' means to keep talking about the same topic over and over in a tedious, repetitive way. The harp metaphor refers to playing only one note repeatedly."
  },
  {
    id: 6,
    question: "What does the idiom 'to draw a long bow' mean?",
    options: [
      "To exaggerate or make greatly inflated claims",
      "To take a very long time to complete a simple task",
      "To aim for a goal that is beyond one's abilities",
      "To stretch the truth just enough to be believable"
    ],
    answer: 0,
    explanation: "'To draw a long bow' means to make wild exaggerations or claims that strain credulity. A long bow requires great force; metaphorically, the speaker is stretching the truth beyond reasonable limits."
  },
  {
    id: 7,
    question: "What does the idiom 'to eat humble pie' mean?",
    options: [
      "To accept a very frugal or poor meal without complaint",
      "To be forced to make a humiliating apology or retract a statement",
      "To swallow one's pride and accept charity from others",
      "To pretend to be modest while secretly being arrogant"
    ],
    answer: 1,
    explanation: "'To eat humble pie' means to make a humiliating retraction or apology, to submit to humiliation. Historically, 'umble pie' was made from offal (the 'umbles') eaten by servants — eating it was a sign of low status."
  },
  {
    id: 8,
    question: "What does the idiom 'to ride roughshod over someone' mean?",
    options: [
      "To travel quickly without regard for others on the road",
      "To treat someone with complete disregard and domineer over them harshly",
      "To overwhelm someone with excessive work or responsibilities",
      "To criticise someone severely in public"
    ],
    answer: 1,
    explanation: "'To ride roughshod over someone' means to treat a person with utter disregard for their feelings or rights, domineering over them ruthlessly. 'Roughshod' refers to horses shod with projecting nails for grip — trampling anything beneath."
  },
  {
    id: 9,
    question: "What does the idiom 'to be between Scylla and Charybdis' mean?",
    options: [
      "To be trapped between two ancient mythological monsters",
      "To face a dilemma where avoiding one danger inevitably exposes one to another",
      "To be forced to choose between two equally rewarding options",
      "To be caught in an inescapable situation with no way forward"
    ],
    answer: 1,
    explanation: "From Greek mythology, Scylla was a six-headed monster and Charybdis a whirlpool. To be 'between Scylla and Charybdis' means to face a choice where both alternatives are dangerous — avoiding one means risking the other. It is specifically about two dangers, not complete inescapability."
  },
  {
    id: 10,
    question: "What does the idiom 'to blow hot and cold' mean?",
    options: [
      "To give contradictory weather forecasts",
      "To be inconsistent — favouring something at one moment and opposing it at another",
      "To express strong emotions that rapidly change",
      "To negotiate by alternating between generous and harsh terms"
    ],
    answer: 1,
    explanation: "'To blow hot and cold' means to be inconsistent or to vacillate — to be enthusiastic about something at one time and opposed to it at another. From Aesop's fable of the satyr who distrusted a man who blew on his hands to warm them and on his food to cool it."
  },
  {
    id: 11,
    question: "What does the idiom 'to pull the chestnuts out of the fire' mean?",
    options: [
      "To rescue a situation at great personal risk for another's benefit",
      "To complete a dangerous task that earns great rewards",
      "To save someone from a crisis they created themselves",
      "To retrieve something valuable that has been carelessly discarded"
    ],
    answer: 0,
    explanation: "From the fable of the monkey who used a cat's paw to pull roasting chestnuts from a fire, 'to pull the chestnuts out of the fire' means to do the risky or unpleasant work that benefits someone else, often at one's own expense."
  },
  {
    id: 12,
    question: "What does the idiom 'to take the wind out of someone's sails' mean?",
    options: [
      "To defeat someone decisively in a competition",
      "To discourage or deflate someone by anticipating or forestalling their actions",
      "To steal credit for another person's achievement",
      "To expose the weakness in someone's argument suddenly"
    ],
    answer: 1,
    explanation: "'To take the wind out of someone's sails' means to suddenly deflate someone's enthusiasm or confidence, often by doing or saying something that makes their position or plans ineffective — as a ship is stopped when another vessel intercepts its wind."
  },
  {
    id: 13,
    question: "What does the idiom 'to go to the wall' mean?",
    options: [
      "To face execution or the most extreme punishment",
      "To be forced to the point of failure, defeat, or ruin — especially financially",
      "To take a final, desperate stand against overwhelming odds",
      "To retreat from a conflict rather than fight"
    ],
    answer: 1,
    explanation: "'To go to the wall' primarily means to fail or be ruined, especially in a financial or business sense. While it has connotations of defeat, the core meaning is failure and ruin, not merely standing firm or execution."
  },
  {
    id: 14,
    question: "What does the idiom 'to pour oil on troubled waters' mean?",
    options: [
      "To worsen a situation by adding more contentious information",
      "To calm a dispute or angry person by using soothing words or actions",
      "To cover up the true nature of a conflict with superficial remedies",
      "To mediate a dispute by offering financial compensation"
    ],
    answer: 1,
    explanation: "'To pour oil on troubled waters' means to pacify or soothe an angry or agitated situation. The phrase has a literal basis — oil does calm rough water by dampening wave action — and is used metaphorically for conflict resolution."
  },
  {
    id: 15,
    question: "What does the idiom 'to be on tenterhooks' mean?",
    options: [
      "To be in a state of anxious suspense or uncertainty",
      "To be physically exhausted after prolonged effort",
      "To be holding on to a situation by the slimmest of margins",
      "To be ready to act at a moment's notice"
    ],
    answer: 0,
    explanation: "'To be on tenterhooks' means to be in a state of suspense or painful anxiety. Tenterhooks were the sharp hooks used to stretch freshly woven cloth on a frame (a 'tenter') — being on them implied a stretched, tense state."
  },

  // Q16-Q30: Meaning of Proverbs
  {
    id: 16,
    question: "What does the proverb 'Empty vessels make the most noise' mean?",
    options: [
      "People who are ignorant or shallow tend to talk the most and loudest",
      "Those who have suffered the most are quickest to complain",
      "People who lack confidence compensate by being overly assertive",
      "Ambitious people are more vocal about their goals than those who are content"
    ],
    answer: 0,
    explanation: "'Empty vessels make the most noise' means that those who know the least or have the least substance are often the most talkative or boastful. An empty container resonates more than a full one when struck — the metaphor emphasises shallowness, not suffering or confidence."
  },
  {
    id: 17,
    question: "What does the proverb 'The cobbler should stick to his last' mean?",
    options: [
      "A craftsman should take pride in the durability of his work",
      "People should confine themselves to what they know and not venture into fields beyond their expertise",
      "One should always finish what one starts before taking on new tasks",
      "Professionals should prioritise their paying work over personal projects"
    ],
    answer: 1,
    explanation: "A 'last' is the foot-shaped mould a cobbler uses. The proverb means one should stay within one's area of expertise and not offer opinions or take action in domains where one lacks knowledge. It warns against overstepping professional boundaries."
  },
  {
    id: 18,
    question: "What does the proverb 'One swallow does not make a summer' mean?",
    options: [
      "A single success does not guarantee sustained achievement",
      "A single instance or sign is not enough to draw a general conclusion",
      "Patience is required because good things come gradually, not all at once",
      "One person's effort is insufficient to bring about significant change"
    ],
    answer: 1,
    explanation: "'One swallow does not make a summer' means that a single positive sign or event is not sufficient evidence to conclude that something good has arrived or that a favourable pattern is established. It cautions against premature conclusions."
  },
  {
    id: 19,
    question: "What does the proverb 'He who sups with the devil should have a long spoon' mean?",
    options: [
      "When dealing with dangerous or dishonest people, one must be extremely cautious and maintain distance",
      "Never share a meal with someone you do not trust completely",
      "One must be well-prepared before entering into any negotiation",
      "Associating with evil people will inevitably corrupt one's character"
    ],
    answer: 0,
    explanation: "This proverb warns that when dealing with dangerous, cunning, or morally corrupt individuals, one must take great precautions and keep a safe distance — metaphorically using a long spoon so the devil cannot harm you while you eat together."
  },
  {
    id: 20,
    question: "What does the proverb 'The used key is always bright' mean?",
    options: [
      "Practice and regular use keep one's skills sharp and effective",
      "A hardworking person always stands out among their peers",
      "Tools and abilities that are constantly employed do not rust or deteriorate",
      "Knowledge shared freely grows brighter and more valuable"
    ],
    answer: 2,
    explanation: "'The used key is always bright' means that faculties, skills, or tools kept in active use do not deteriorate — they stay polished through constant exercise. It is a proverb about the value of continual practice and use to prevent stagnation."
  },
  {
    id: 21,
    question: "What does the proverb 'A drowning man will clutch at a straw' mean?",
    options: [
      "Desperate people will grasp at even the most unlikely or useless means of help",
      "In times of crisis, even the smallest act of kindness can save a life",
      "People in danger often misjudge what will save them",
      "When all proper solutions have failed, unconventional ones should be tried"
    ],
    answer: 0,
    explanation: "This proverb means that a person in extreme desperation will try anything, no matter how futile or unlikely, to escape their predicament. The emphasis is on the futility of the remedy chosen, not the kindness or the ingenuity of the solution."
  },
  {
    id: 22,
    question: "What does the proverb 'Familiarity breeds contempt' mean?",
    options: [
      "Close relationships inevitably lead to conflicts and misunderstandings",
      "Knowing someone or something too well causes one to lose respect or appreciation for them",
      "Repeated exposure to danger makes one reckless and overconfident",
      "Long acquaintance reveals the worst qualities in people"
    ],
    answer: 1,
    explanation: "'Familiarity breeds contempt' means that the more closely we know someone or something, the more likely we are to lose our admiration or respect for them. It is not specifically about conflict or about revealing flaws, but about the loss of respect through over-familiarity."
  },
  {
    id: 23,
    question: "What does the proverb 'The fish always stinks from the head downwards' mean?",
    options: [
      "Corruption or failure in an organisation originates from its leadership",
      "Problems that begin small at the top quickly affect the entire institution",
      "Leaders must take responsibility for the failures of their subordinates",
      "An organisation's moral character is determined by the quality of its founders"
    ],
    answer: 0,
    explanation: "'The fish always stinks from the head downwards' means that when an organisation, institution, or state is corrupt or dysfunctional, the fault lies with its leaders or those at the top. It identifies leadership as the source, not merely the bearer, of institutional decay."
  },
  {
    id: 24,
    question: "What does the proverb 'Penny wise and pound foolish' mean?",
    options: [
      "Being overly careful with small expenses while being reckless with large ones",
      "Saving money on minor items but spending irresponsibly on luxuries",
      "Being shrewd in small matters but failing to see the larger financial picture",
      "Valuing small coins over large sums because they are more immediately useful"
    ],
    answer: 0,
    explanation: "'Penny wise and pound foolish' describes someone who is careful and economical in trivial matters but wasteful or imprudent when it comes to larger, more important expenditures or decisions. The key is the contrast between careful small-scale and reckless large-scale thinking."
  },
  {
    id: 25,
    question: "What does the lesser-known proverb 'Walls have ears' warn about?",
    options: [
      "Even apparently private conversations may be overheard by others",
      "Secrets shared in confidence will always be betrayed eventually",
      "One should never speak ill of another person in their home",
      "Rumours spread quickly through communities regardless of efforts to contain them"
    ],
    answer: 0,
    explanation: "'Walls have ears' is a warning that even seemingly private settings are not safe for confidential conversations — someone may be eavesdropping. It is specifically about the risk of being overheard, not about betrayal or rumour-spreading."
  },
  {
    id: 26,
    question: "What does the proverb 'The road to hell is paved with good intentions' mean?",
    options: [
      "Moral righteousness alone is not sufficient to achieve good outcomes",
      "Well-meaning actions that are poorly executed often lead to disastrous results",
      "Having good motives does not prevent one from causing harm or failing",
      "Good intentions without corresponding action are worthless or harmful"
    ],
    answer: 2,
    explanation: "This proverb means that good motives or sincere intentions are no guarantee of good outcomes — people can cause great harm or fail miserably despite the best intentions. It is broader than poor execution; it encompasses any failure or harm regardless of intent."
  },
  {
    id: 27,
    question: "What does the proverb 'Cut your coat according to your cloth' mean?",
    options: [
      "One should dress appropriately for one's social station",
      "Adapt your plans, ambitions, or lifestyle to match your actual resources",
      "Do not take on more responsibility than you can handle",
      "Quality is always worth the extra cost, so never compromise on materials"
    ],
    answer: 1,
    explanation: "'Cut your coat according to your cloth' means that one should plan and live within one's actual means or resources — do not aim for or spend beyond what you have. It is a proverb about financial and practical prudence."
  },
  {
    id: 28,
    question: "What does the proverb 'A bad workman always blames his tools' mean?",
    options: [
      "Incompetent people always attribute their failures to external circumstances rather than their own lack of skill",
      "It is important to have high-quality equipment to produce good work",
      "People who complain about their resources are rarely motivated enough to improve",
      "Someone who fails regularly will eventually run out of excuses"
    ],
    answer: 0,
    explanation: "'A bad workman always blames his tools' means that an incompetent or unskilled person will make excuses by attributing their failures to external causes — the tools, the environment, others — rather than accepting personal responsibility for their lack of skill."
  },
  {
    id: 29,
    question: "What does the proverb 'Once bitten, twice shy' mean?",
    options: [
      "A painful experience makes one overly cautious about similar situations in the future",
      "Repeated failure leads to permanent reluctance to attempt something again",
      "A person who has been betrayed once will never fully trust anyone again",
      "Learning from one's mistakes makes a person more resilient in the future"
    ],
    answer: 0,
    explanation: "'Once bitten, twice shy' means that a single unpleasant or painful experience causes a person to be very cautious — perhaps excessively so — about repeating or approaching similar situations. The caution may or may not be permanent."
  },
  {
    id: 30,
    question: "What does the proverb 'Many a true word is spoken in jest' mean?",
    options: [
      "Humour can reveal uncomfortable truths that direct speech cannot",
      "Joking statements often accidentally convey genuine feelings or accurate observations",
      "People use humour to avoid taking responsibility for serious statements they make",
      "The most profound truths are often expressed indirectly through stories and anecdotes"
    ],
    answer: 1,
    explanation: "'Many a true word is spoken in jest' means that things said as jokes frequently contain a real element of truth — the speaker may reveal genuine beliefs, feelings, or accurate assessments under the cover of humour. The truth is accidental or semi-conscious, not a deliberate rhetorical device."
  },

  // Q31-Q40: Fill in the blank
  {
    id: 31,
    question: "Despite presenting a confident front, the minister was clearly __________ when the journalist's question exposed a major inconsistency in his policy.",
    options: [
      "beating around the bush",
      "taken aback",
      "caught between the devil and the deep blue sea",
      "eating humble pie"
    ],
    answer: 3,
    explanation: "'Eating humble pie' fits best here — the minister was forced into a humiliating position of having to retract or apologise due to an exposed inconsistency. 'Taken aback' is a single phrase, not an idiom for this context; 'caught between the devil and the deep blue sea' implies a dilemma, which is not what the sentence describes."
  },
  {
    id: 32,
    question: "The new CEO's attempt to restructure the company failed because the board, who had approved the plan, suddenly reversed their support — they had completely __________.",
    options: [
      "drawn a long bow",
      "blown hot and cold",
      "taken the wind out of his sails",
      "cast pearls before swine"
    ],
    answer: 1,
    explanation: "'Blown hot and cold' precisely describes the board's inconsistency — approving the plan and then reversing their support shows vacillation. 'Taken the wind out of his sails' would mean someone else undermined him, not the same people who approved the plan."
  },
  {
    id: 33,
    question: "She refused to __________ and insisted on raising the concerns she had already voiced three times, even as her colleagues visibly tired of the subject.",
    options: [
      "harp on the same string",
      "beat around the bush",
      "pull the chestnuts out of the fire",
      "pour oil on troubled waters"
    ],
    answer: 0,
    explanation: "'Harp on the same string' means to keep repeating the same point. The sentence describes someone insisting on raising the same concern repeatedly despite colleagues' fatigue — this is precisely what 'harping on the same string' means."
  },
  {
    id: 34,
    question: "When the rival firm pre-announced a similar product the day before their scheduled launch, it completely __________ and the team had to rethink its entire marketing strategy.",
    options: [
      "rode roughshod over them",
      "took the wind out of their sails",
      "put the cat among the pigeons",
      "drew a long bow"
    ],
    answer: 1,
    explanation: "'Took the wind out of their sails' is the most precise idiom here — the rival's pre-announcement forestalled their impact, deflating the momentum of their own planned launch, exactly like a ship losing wind to another vessel."
  },
  {
    id: 35,
    question: "The village headman, respected for his diplomacy, was called in to __________ after an argument between two neighbouring families threatened to escalate into a serious dispute.",
    options: [
      "bell the cat",
      "harp on the same string",
      "pour oil on troubled waters",
      "go to the wall"
    ],
    answer: 2,
    explanation: "'Pour oil on troubled waters' means to calm a dispute using soothing words or mediation — exactly what the headman was called in to do. 'Bell the cat' means to undertake a dangerous task, which is not the scenario here."
  },
  {
    id: 36,
    question: "The ambitious young lawyer took on the most difficult and politically sensitive case that everyone else had refused, showing he was willing to __________.",
    options: [
      "eat humble pie",
      "bell the cat",
      "blow hot and cold",
      "have a finger in every pie"
    ],
    answer: 1,
    explanation: "'Bell the cat' means to undertake a risky or difficult task that others fear to attempt — exactly what the lawyer does by taking a case everyone else refused. It is the most precise fit."
  },
  {
    id: 37,
    question: "The scientist's funding application __________ when the committee realised she had grossly overstated her preliminary results.",
    options: [
      "went to the wall",
      "took the wind out of her sails",
      "drew a long bow",
      "blew hot and cold"
    ],
    answer: 0,
    explanation: "'Went to the wall' means to fail or be ruined. The funding application failed completely. While 'drew a long bow' refers to exaggeration (which she did), it is the application itself that went to the wall — the sentence is about the outcome of the application, not her action of overstating."
  },
  {
    id: 38,
    question: "He always seemed to be __________ — running three businesses, sitting on two charity boards, and somehow also coaching the local cricket team.",
    options: [
      "between Scylla and Charybdis",
      "on tenterhooks",
      "riding roughshod over everyone",
      "having a finger in every pie"
    ],
    answer: 3,
    explanation: "'Having a finger in every pie' perfectly describes someone involved in many different activities simultaneously — three businesses, two charity boards, and a cricket team. 'Between Scylla and Charybdis' implies a dilemma, which is not the situation described."
  },
  {
    id: 39,
    question: "The audience was __________ as the final results of the competition were announced one by one, with the winner still undisclosed after forty minutes.",
    options: [
      "beating around the bush",
      "eating humble pie",
      "on tenterhooks",
      "blowing hot and cold"
    ],
    answer: 2,
    explanation: "'On tenterhooks' means in a state of anxious suspense — precisely what an audience experiences during a prolonged, tension-building announcement where the outcome remains unknown."
  },
  {
    id: 40,
    question: "The consultant warned the board that if they continued to __________ the junior staff by bypassing their recommendations without explanation, they would face a serious morale crisis.",
    options: [
      "cast pearls before swine",
      "ride roughshod over",
      "blow hot and cold with",
      "pull the chestnuts out of the fire for"
    ],
    answer: 1,
    explanation: "'Ride roughshod over' means to treat people with complete disregard, domineering over them harshly — precisely what the consultant describes: bypassing junior staff's recommendations without explanation or respect."
  },

  // Q41-Q50: Correct usage / origin / situation
  {
    id: 41,
    question: "Which situation most accurately calls for the use of the proverb 'The cobbler should stick to his last'?",
    options: [
      "A plumber who moonlights as a carpenter and does both jobs poorly",
      "A celebrated surgeon who publicly offers detailed opinions on economic policy, despite having no relevant expertise",
      "A student who switches majors after realising they have no aptitude for their original choice",
      "An experienced lawyer who takes on an unfamiliar area of law to expand their practice"
    ],
    answer: 1,
    explanation: "The proverb warns against venturing opinions or actions outside one's area of expertise. A surgeon opining on economic policy — a domain entirely outside their training — is the most precise application. A student switching majors or a lawyer expanding their practice are adapting their expertise, not overstepping it."
  },
  {
    id: 42,
    question: "A manager announces a new initiative enthusiastically, then quietly abandons it within two weeks without any explanation. Two months later, they announce the same initiative again with equal enthusiasm. Which idiom best describes this pattern of behaviour?",
    options: [
      "To harp on the same string",
      "To blow hot and cold",
      "To beat around the bush",
      "To draw a long bow"
    ],
    answer: 1,
    explanation: "'To blow hot and cold' describes inconsistency and vacillation — being enthusiastic about something at one moment and effectively opposing or abandoning it at another, then cycling back. 'To harp on the same string' would mean obsessively repeating a point, which is the opposite pattern."
  },
  {
    id: 43,
    question: "The idiom 'to pull the chestnuts out of the fire' originates from which source, and what is the precise moral it encodes?",
    options: [
      "A biblical parable; that sacrifice for others is a noble calling",
      "A fable involving a monkey using a cat's paw; that one is used to do the risky work that benefits another",
      "A medieval hunting tradition; that dangerous tasks should only be undertaken by specialists",
      "A Greek myth involving Prometheus; that stealing fire from the powerful brings punishment"
    ],
    answer: 1,
    explanation: "The phrase comes from the fable of the monkey (or in some versions, a cat) who flatters a cat into pulling roasting chestnuts from a fire, burning its paw while the monkey eats the chestnuts. The moral is that one is manipulated into doing hazardous work for another's exclusive benefit."
  },
  {
    id: 44,
    question: "A junior employee has uncovered evidence of financial misconduct by a senior partner. Reporting it would protect the firm but would certainly end the employee's own career there. Which proverb or idiom most precisely describes the employee's situation — not just their emotional state?",
    options: [
      "To be on tenterhooks",
      "To be between Scylla and Charybdis",
      "To bell the cat",
      "To go to the wall"
    ],
    answer: 2,
    explanation: "'To bell the cat' is the most precise fit: the employee must decide whether to perform the risky, necessary act (reporting misconduct) that no one else will do — at great personal cost. 'Between Scylla and Charybdis' describes being forced to choose between two dangers; here, one option (not reporting) does not involve danger to the employee, making 'bell the cat' the better fit."
  },
  {
    id: 45,
    question: "Which of the following best illustrates the proverb 'One swallow does not make a summer' in a professional context?",
    options: [
      "A company celebrates after a single strong quarterly result, dismissing concerns about long-term structural weaknesses",
      "A researcher discards a hypothesis after one failed experiment without attempting replication",
      "A manager promotes an employee after a single impressive presentation, overlooking their overall mediocre record",
      "An investor sells all shares after one bad day in the stock market"
    ],
    answer: 0,
    explanation: "The proverb cautions against generalising from a single positive instance. A company celebrating a single strong quarter while ignoring structural weaknesses most precisely mirrors the proverb's warning: one positive result (one swallow) is taken as proof of sustained success (summer) when it is not."
  },
  {
    id: 46,
    question: "In which scenario is the proverb 'Penny wise and pound foolish' most precisely applicable?",
    options: [
      "A householder who spends lavishly on groceries but clips coupons for cinema tickets",
      "A company that cuts costs on employee training to save money but then spends vastly more on rectifying errors caused by undertrained staff",
      "A government that taxes small businesses heavily while giving tax breaks to multinational corporations",
      "An individual who saves diligently all year but splurges irresponsibly during holidays"
    ],
    answer: 1,
    explanation: "'Penny wise and pound foolish' applies when someone saves trivially in a small matter but incurs far greater costs as a result. The company cutting training budgets only to spend much more correcting preventable errors is the most precise fit — the economy (penny) directly causes the larger expenditure (pound)."
  },
  {
    id: 47,
    question: "The idiom 'to be on tenterhooks' is correctly used in which of the following sentences?",
    options: [
      "The surgeon was on tenterhooks throughout the delicate operation, performing each step with extraordinary precision.",
      "The defendant was on tenterhooks as the jury filed back into the courtroom after three days of deliberation.",
      "The marathon runner was on tenterhooks at the starting line, eager to begin the race.",
      "The author was on tenterhooks after finishing the novel, proud of the work she had completed."
    ],
    answer: 1,
    explanation: "'On tenterhooks' means in anxious, painful suspense about an outcome that is uncertain. Only the defendant waiting for a verdict after three days of jury deliberation captures this: the outcome is uncertain, the stakes are high, and the wait is prolonged and agonising. Eagerness, precision, or pride do not constitute suspense."
  },
  {
    id: 48,
    question: "A team leader takes sole credit for a project's success in front of senior management, while having done very little of the actual work. The team members who did the hard work receive no acknowledgement. Which idiom most precisely describes the team leader's conduct?",
    options: [
      "To pour oil on troubled waters",
      "To eat humble pie",
      "To pull the chestnuts out of the fire",
      "To ride roughshod over someone"
    ],
    answer: 2,
    explanation: "The team members pulled the chestnuts out of the fire — they did the risky, hard work — while the team leader (like the monkey in the fable) reaped the benefit. This is the most precise fit. 'Riding roughshod over' implies active harsh treatment, not appropriating credit."
  },
  {
    id: 49,
    question: "Which sentence uses the proverb 'Familiarity breeds contempt' correctly and precisely?",
    options: [
      "After working with the celebrated author for five years, her assistant no longer found her ideas particularly inspiring and often disagreed openly with her editorial choices.",
      "The new employee who was very friendly with everyone on her first day quickly became unpopular because she was too forward.",
      "The manager lost the team's respect after admitting he had made a serious mistake.",
      "The novelist found that writing the same type of book repeatedly made him bored and dissatisfied with his work."
    ],
    answer: 0,
    explanation: "The proverb means close, prolonged acquaintance causes loss of admiration or respect. The assistant who, after five years, no longer admires the author and disagrees openly is the most precise illustration — familiarity (five years' close work) has bred contempt (loss of admiration, open disagreement)."
  },
  {
    id: 50,
    question: "A whistleblower exposed corruption at great personal risk, fully aware that colleagues who had urged her to act would not support her publicly when the backlash came. Which proverb most precisely fits the colleagues' behaviour?",
    options: [
      "He who sups with the devil should have a long spoon",
      "Many a true word is spoken in jest",
      "The road to hell is paved with good intentions",
      "Empty vessels make the most noise"
    ],
    answer: 2,
    explanation: "The colleagues had good intentions — urging the whistleblower to act — but their failure to follow through caused harm to her when she faced the consequences alone. 'The road to hell is paved with good intentions' precisely captures how well-meant actions (urging her on) without proper support lead to harmful outcomes. 'Empty vessels make the most noise' is about talkative but shallow people, which is a secondary characteristic, not the central point of the proverb being tested."
  }
]

export default questions

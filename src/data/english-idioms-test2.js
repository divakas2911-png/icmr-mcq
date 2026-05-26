const questions = [
  {
    id: 1,
    question: "What does the idiom 'a dog in the manger' mean?",
    options: [
      "A person who selfishly prevents others from using what he himself has no use for",
      "A person who guards valuable possessions with great ferocity",
      "A person who is too lazy to do work but complains about others",
      "A person who meddles in others' affairs unnecessarily"
    ],
    answer: 0,
    explanation: "'A dog in the manger' refers to a person who selfishly withholds from others something useless to himself, derived from Aesop's fable where a dog lay in a manger and prevented oxen from eating the hay it neither wanted nor could eat."
  },
  {
    id: 2,
    question: "The idiom 'to bell the cat' means:",
    options: [
      "To perform a dangerous or risky task on behalf of others",
      "To make a loud announcement in a public place",
      "To chase away trouble before it arrives",
      "To take credit for another person's brave act"
    ],
    answer: 0,
    explanation: "'To bell the cat' means to undertake a dangerous or difficult task for the benefit of others, originating from the fable of mice who proposed tying a bell on a cat so they could hear it coming — but none dared do it."
  },
  {
    id: 3,
    question: "A 'Pyrrhic victory' refers to:",
    options: [
      "A victory achieved at such a great cost that it is essentially equivalent to a defeat",
      "A victory won by deception and cunning rather than strength",
      "A hollow victory celebrated prematurely before the war is over",
      "A surprise victory achieved by an underdog against all odds"
    ],
    answer: 0,
    explanation: "A 'Pyrrhic victory' is a win that inflicts such a devastating toll on the victor that it is tantamount to defeat. It refers to King Pyrrhus of Epirus, whose costly victories against Rome led him to remark that another such victory would ruin him."
  },
  {
    id: 4,
    question: "What is meant by 'Hobson's choice'?",
    options: [
      "A situation offering no real alternative; take it or leave it",
      "A dilemma where both options are equally unpleasant",
      "A choice made under pressure from a superior authority",
      "A random selection made when no clear preference exists"
    ],
    answer: 0,
    explanation: "'Hobson's choice' is a free choice in which only one option is offered. It originated with Thomas Hobson, a Cambridge horse-livery owner who required customers to take the horse nearest the stable door or none at all."
  },
  {
    id: 5,
    question: "The idiom 'to cut the Gordian knot' means:",
    options: [
      "To solve a complex problem by bold, decisive action",
      "To sever ties with an old ally in a moment of crisis",
      "To painstakingly untangle a complicated situation step by step",
      "To abandon a problem that has no satisfactory solution"
    ],
    answer: 0,
    explanation: "'To cut the Gordian knot' means to solve an intricate or difficult problem boldly. Alexander the Great, unable to untie the legendary knot, simply sliced through it with his sword — implying that decisive action bypasses complexity."
  },
  {
    id: 6,
    question: "What does 'a Penelope's web' signify as an idiom?",
    options: [
      "A task that is never completed because it is repeatedly undone",
      "A tangled web of lies that eventually traps the liar",
      "An intricate plan that takes an extremely long time to execute",
      "A deceptive scheme that appears productive but yields no result"
    ],
    answer: 0,
    explanation: "'Penelope's web' refers to a task or scheme that is never finished. In Homer's Odyssey, Penelope wove and unravelled a shroud each day and night for years to delay choosing a suitor in her husband Odysseus's absence."
  },
  {
    id: 7,
    question: "The idiom 'to eat humble pie' means:",
    options: [
      "To make a humiliating apology and accept one's defeat or wrongdoing",
      "To accept a mediocre reward after expecting something far greater",
      "To pretend modesty while actually feeling proud of one's achievement",
      "To endure hardship patiently without complaining"
    ],
    answer: 0,
    explanation: "'To eat humble pie' means to make a public apology and accept humiliation. 'Umble pie' was historically made from the entrails of a deer and was eaten by servants, implying lowly status."
  },
  {
    id: 8,
    question: "What does 'to have an albatross around one's neck' mean?",
    options: [
      "To be burdened with a persistent problem or source of guilt",
      "To carry a heavy moral responsibility for others' welfare",
      "To be watched and followed closely by an adversary",
      "To suffer the consequences of a good deed gone wrong"
    ],
    answer: 0,
    explanation: "This idiom means to be encumbered by a constant burden or reminder of a past mistake. It comes from Coleridge's 'The Rime of the Ancient Mariner,' where a sailor who killed an albatross (a good-luck symbol) was forced to wear the dead bird around his neck."
  },
  {
    id: 9,
    question: "The phrase 'to throw in the towel' originated from which domain and means:",
    options: [
      "Boxing — to admit defeat or give up",
      "Laundry — to complete a task carelessly in frustration",
      "Theatre — to abandon a performance midway through",
      "Wrestling — to challenge an opponent to continue fighting"
    ],
    answer: 0,
    explanation: "'To throw in the towel' means to admit defeat and give up, originating from boxing where a fighter's corner would throw a towel into the ring to signal surrender and stop the fight."
  },
  {
    id: 10,
    question: "What does 'to draw a long bow' mean?",
    options: [
      "To exaggerate or make extravagant claims beyond the truth",
      "To take a very long time to accomplish something simple",
      "To use force where diplomacy would have sufficed",
      "To stretch one's resources to the absolute limit"
    ],
    answer: 0,
    explanation: "'To draw a long bow' means to exaggerate. A skilled archer could draw a longbow to an impressive distance, and the expression came to mean making claims that stretch the truth."
  },
  {
    id: 11,
    question: "The idiom 'a Sisyphean task' describes:",
    options: [
      "An endless and futile labour that must be repeated indefinitely",
      "A task requiring extraordinary strength and endurance",
      "A punishment disguised as a reward for good behaviour",
      "An impossible goal pursued with irrational persistence"
    ],
    answer: 0,
    explanation: "A 'Sisyphean task' refers to endless and futile labour. In Greek mythology, Sisyphus was condemned to roll a boulder up a hill for eternity, only for it to roll back down each time he neared the top."
  },
  {
    id: 12,
    question: "What does 'to be on the horns of a dilemma' mean?",
    options: [
      "To face a situation where both possible choices are equally undesirable",
      "To be forced to make an extremely important decision under time pressure",
      "To be trapped between a powerful enemy and a natural obstacle",
      "To struggle with a moral conflict between personal and professional duty"
    ],
    answer: 0,
    explanation: "'On the horns of a dilemma' means to be caught between two equally unpleasant alternatives. The metaphor comes from the image of a bull whose horns both represent painful outcomes."
  },
  {
    id: 13,
    question: "The idiom 'to gild the lily' means:",
    options: [
      "To add unnecessary ornamentation to something already beautiful or complete",
      "To beautify something unattractive to make it more acceptable",
      "To praise someone excessively and insincerely",
      "To conceal an underlying flaw with a superficial improvement"
    ],
    answer: 0,
    explanation: "'To gild the lily' means to apply unnecessary embellishments to something already perfect. It is a misquotation of Shakespeare's King John: 'To gild refined gold, to paint the lily...is wasteful and ridiculous excess.'"
  },
  {
    id: 14,
    question: "What does 'to have feet of clay' mean?",
    options: [
      "To have a fundamental character flaw or weakness hidden beneath an admired exterior",
      "To move so slowly that one never accomplishes anything of value",
      "To be so rooted in tradition that one cannot adapt to change",
      "To be unsteady and unreliable in all one's personal relationships"
    ],
    answer: 0,
    explanation: "'Feet of clay' refers to a hidden fundamental weakness in someone who appears strong or admirable. The phrase comes from the Book of Daniel (2:33), where a magnificent statue had feet of iron and clay — a fatal vulnerability."
  },
  {
    id: 15,
    question: "The idiom 'to cross the Rubicon' means:",
    options: [
      "To take an irrevocable, decisive step that commits one to a course of action",
      "To negotiate a difficult border between two hostile factions",
      "To make a bold declaration of war against a more powerful adversary",
      "To abandon all caution in pursuit of personal ambition"
    ],
    answer: 0,
    explanation: "'To cross the Rubicon' means to take a decisive and irreversible step. Julius Caesar crossed the Rubicon river in 49 BC with his army, which under Roman law was an act of war — committing him irrevocably to conflict with Rome."
  },
  {
    id: 16,
    question: "What is the precise meaning of the proverb 'The used key is always bright'?",
    options: [
      "Regular practice and activity keep skills and abilities sharp",
      "Hard work and honesty always attract admiration from others",
      "A person who stays busy has no time for vices or bad habits",
      "Tools and instruments must be maintained to remain effective"
    ],
    answer: 0,
    explanation: "This proverb means that continuous use and practice keep one's abilities sharp and relevant. Just as a frequently used key stays polished, regular effort prevents skills from deteriorating."
  },
  {
    id: 17,
    question: "The proverb 'A bad workman always blames his tools' most precisely means:",
    options: [
      "An unskilled or incompetent person attributes their failures to external factors rather than their own deficiency",
      "People who do poor quality work frequently damage the equipment they are given",
      "A person who complains about their resources lacks the drive to succeed",
      "Success depends on having the right tools rather than on innate talent"
    ],
    answer: 0,
    explanation: "This proverb cautions that incompetent people tend to blame their failures on circumstances or tools rather than acknowledging their own shortcomings. True skill adapts to available resources."
  },
  {
    id: 18,
    question: "What does the proverb 'One swallow does not make a summer' mean?",
    options: [
      "A single instance or example is not sufficient evidence to draw a general conclusion",
      "Individual effort is insufficient; collective action is required for meaningful change",
      "Premature optimism based on early signs often leads to disappointment",
      "Small victories should not distract one from the larger battle ahead"
    ],
    answer: 0,
    explanation: "This proverb warns against over-generalising from a single event. The appearance of one swallow in spring does not guarantee that summer has arrived — one example cannot prove a general rule."
  },
  {
    id: 19,
    question: "The proverb 'Empty vessels make the most noise' conveys that:",
    options: [
      "Those with the least knowledge or substance tend to be the most vocal",
      "People who have suffered great losses feel the pain most acutely",
      "Hollow promises from leaders eventually expose their incompetence",
      "Silence is the mark of wisdom in moments of great controversy"
    ],
    answer: 0,
    explanation: "This proverb suggests that ignorant or shallow people are often the loudest and most talkative, whereas those with genuine knowledge and depth tend to speak thoughtfully and sparingly."
  },
  {
    id: 20,
    question: "What is the meaning of the proverb 'The cobbler should stick to his last'?",
    options: [
      "One should confine oneself to one's area of expertise and not meddle in unfamiliar fields",
      "A craftsman who persists with traditional methods will always outperform a moderniser",
      "Hard work and consistency in one's profession leads to mastery over time",
      "A person should remain loyal to their origins regardless of personal advancement"
    ],
    answer: 0,
    explanation: "This proverb advises people to stay within the limits of their professional knowledge. 'Last' refers to the foot-shaped model cobblers use — the cobbler should focus on shoemaking, not venture into other opinions or crafts."
  },
  {
    id: 21,
    question: "The proverb 'Fools rush in where angels fear to tread' means:",
    options: [
      "Ignorant or inexperienced people thoughtlessly attempt what wiser, more knowledgeable people approach with caution",
      "Courageous people take risks that even the most virtuous would not dare to take",
      "The naive often succeed in situations where the experienced have given up",
      "Those without fear are frequently more successful than those who are overcautious"
    ],
    answer: 0,
    explanation: "Coined by Alexander Pope in 'An Essay on Criticism,' this proverb means that foolish people, lacking awareness of risks, rush into situations that more experienced and thoughtful people would approach carefully or avoid."
  },
  {
    id: 22,
    question: "What does the proverb 'Cut your coat according to your cloth' advise?",
    options: [
      "Live within your means and adjust your ambitions to match your actual resources",
      "Dress modestly and avoid showing off your wealth to others",
      "Use every resource available to you rather than wasting what you have",
      "Plan carefully before beginning any large or expensive undertaking"
    ],
    answer: 0,
    explanation: "This proverb advises prudence — one should limit one's plans and expenditure to what one can actually afford. The tailoring metaphor means you can only make a coat as large as the cloth you have."
  },
  {
    id: 23,
    question: "The proverb 'Many a slip betwixt the cup and the lip' warns that:",
    options: [
      "Failure can occur at any moment right up to the last step, even when success seems certain",
      "Overconfidence leads to careless mistakes in otherwise straightforward tasks",
      "Plans made in advance are always subject to unexpected interruptions",
      "One should not be too hasty even when a goal is nearly within reach"
    ],
    answer: 0,
    explanation: "This ancient proverb (from Erasmus' Adages) cautions that things can go wrong at the very last moment. Even when you bring a cup to your lips, something can spill — success is never guaranteed until actually achieved."
  },
  {
    id: 24,
    question: "What does 'Familiarity breeds contempt' mean?",
    options: [
      "Excessive closeness with a person or thing causes one to lose respect or admiration for them",
      "People who spend too much time together inevitably begin to dislike each other",
      "Knowing someone too well makes it impossible to maintain professional relationships",
      "Long acquaintance reveals the flaws that initially were hidden by good first impressions"
    ],
    answer: 0,
    explanation: "'Familiarity breeds contempt' means that the more we know someone or something, the more we tend to take it for granted or lose our original high regard for it. Overfamiliarity erodes respect."
  },
  {
    id: 25,
    question: "The proverb 'It is the pace that kills' means:",
    options: [
      "Excessive speed or overexertion is what ultimately leads to failure or ruin",
      "Working too slowly makes a task feel unbearable and drains motivation",
      "Rushing through important decisions always leads to costly mistakes",
      "A fast start in any competition is the surest way to exhaust oneself"
    ],
    answer: 0,
    explanation: "This proverb cautions that it is the excessive rate at which something is done — not the work itself — that is destructive. Overworking, overindulgence, or extreme speed eventually causes breakdown."
  },
  {
    id: 26,
    question: "What does the proverb 'The exception proves the rule' most accurately mean?",
    options: [
      "An exception to a stated rule confirms that the rule itself exists and is generally operative",
      "Unusual cases demonstrate that no rule can be applied universally without flaw",
      "One must always test a rule by looking for exceptions before accepting it as valid",
      "The existence of exceptions means that rules are inherently arbitrary and imperfect"
    ],
    answer: 0,
    explanation: "'Proves' here means 'tests' (from Latin probare). An exception acknowledges that a rule exists — if someone gets a special exemption, it implies there is a general rule from which the exception was granted."
  },
  {
    id: 27,
    question: "The proverb 'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime' primarily advocates:",
    options: [
      "Empowering others through education and skill-building rather than providing short-term relief",
      "Self-sufficiency and independence over reliance on the charity of others",
      "Long-term planning and investment over immediate gratification",
      "The value of practical skills over theoretical or academic knowledge"
    ],
    answer: 0,
    explanation: "This proverb advocates sustainable empowerment over temporary assistance. Teaching skills and fostering independence creates long-term solutions, whereas direct provision creates dependency without lasting benefit."
  },
  {
    id: 28,
    question: "What does the proverb 'He who pays the piper calls the tune' mean?",
    options: [
      "The person who provides the funding or resources has the authority to control how they are used",
      "Financial power inevitably corrupts those who wield it over others",
      "Hired professionals are always subject to the wishes of their employers",
      "Those who spend the most on entertainment deserve the best quality in return"
    ],
    answer: 0,
    explanation: "This proverb means that whoever provides financial support has the right to dictate the terms and direction of an activity. Financial control translates to decision-making authority."
  },
  {
    id: 29,
    question: "The proverb 'Still waters run deep' means:",
    options: [
      "A quiet, reserved person often has profound knowledge, strong feelings, or hidden depths of character",
      "Calm appearances are deceiving and may conceal dangerous or volatile undercurrents",
      "Patience and stillness are the hallmarks of a truly wise and experienced person",
      "A person who speaks little has learned the value of silence through bitter experience"
    ],
    answer: 0,
    explanation: "'Still waters run deep' suggests that a quiet, unassuming person may possess great intelligence, strong emotions, or hidden capabilities that are not immediately apparent. Depth is not always visible on the surface."
  },
  {
    id: 30,
    question: "What is the meaning of the proverb 'Every cloud has a silver lining'?",
    options: [
      "Every negative or difficult situation has at least one positive or hopeful aspect",
      "No matter how bad things appear, patient endurance will always be rewarded",
      "Good fortune is always close behind periods of difficulty and hardship",
      "Optimistic people are better equipped to find solutions than pessimistic ones"
    ],
    answer: 0,
    explanation: "'Every cloud has a silver lining' means that even in the worst situations there is some hopeful or positive element. The metaphor comes from dark storm clouds with bright edges when sunlight shines behind them."
  },
  {
    id: 31,
    question: "The committee spent months discussing a plan, but ultimately no decision was taken and everything was left as it was. This situation is best described as: '___________'",
    options: [
      "Much ado about nothing",
      "A storm in a teacup",
      "Beating around the bush",
      "Barking up the wrong tree"
    ],
    answer: 0,
    explanation: "'Much ado about nothing' (from Shakespeare) perfectly captures a great deal of fuss and activity that ultimately yields no significant result. 'A storm in a teacup' refers to a small-scale controversy, not a drawn-out futile process."
  },
  {
    id: 32,
    question: "The inspector suspected the junior officer of leaking sensitive information. Rather than confronting him directly, he began watching all his colleagues. The inspector was clearly: '___________'",
    options: [
      "Barking up the wrong tree",
      "Casting pearls before swine",
      "Flogging a dead horse",
      "Putting the cart before the horse"
    ],
    answer: 0,
    explanation: "'Barking up the wrong tree' means pursuing the wrong course of action or directing effort at the wrong target. The inspector is suspecting the wrong people instead of focusing on the actual culprit."
  },
  {
    id: 33,
    question: "After years of rivalry, the two professors finally agreed to collaborate. Their colleagues said it was a case of: '___________'",
    options: [
      "Burying the hatchet",
      "Letting sleeping dogs lie",
      "Burning one's bridges",
      "Throwing down the gauntlet"
    ],
    answer: 0,
    explanation: "'Burying the hatchet' means to make peace and end a conflict. It comes from a Native American tradition where enemies would literally bury weapons as a sign of peace. 'Letting sleeping dogs lie' means avoiding the revival of old conflicts — not resolving them."
  },
  {
    id: 34,
    question: "The young scientist had brilliant ideas but refused to share them in meetings, thinking her senior colleagues would not take her seriously. She was: '___________'",
    options: [
      "Hiding her light under a bushel",
      "Wearing her heart on her sleeve",
      "Blowing her own trumpet",
      "Sitting on the fence"
    ],
    answer: 0,
    explanation: "'Hiding one's light under a bushel' means concealing one's talents or abilities out of modesty or fear. The phrase comes from Matthew 5:15 in the Bible: 'Neither do men light a candle and put it under a bushel.'"
  },
  {
    id: 35,
    question: "The politician kept raising the same discredited argument despite overwhelming evidence against it. He was essentially: '___________'",
    options: [
      "Flogging a dead horse",
      "Grasping at straws",
      "Making a mountain out of a molehill",
      "Adding fuel to the fire"
    ],
    answer: 0,
    explanation: "'Flogging a dead horse' means continuing to pursue a cause or argument that is already lost or has been thoroughly settled. The politician is wasting effort on something that has no potential for revival."
  },
  {
    id: 36,
    question: "The new manager announced sweeping reforms without understanding how the department functioned. He was clearly: '___________'",
    options: [
      "Putting the cart before the horse",
      "Throwing caution to the wind",
      "Biting off more than he could chew",
      "Burning the candle at both ends"
    ],
    answer: 0,
    explanation: "'Putting the cart before the horse' means reversing the logical order of things — acting before acquiring the necessary knowledge or foundation. The manager is initiating changes without first understanding the system."
  },
  {
    id: 37,
    question: "After the company's merger fell apart, the CEO tried desperately to find any investor to rescue the deal, accepting conditions he would normally have rejected outright. He was: '___________'",
    options: [
      "Grasping at straws",
      "Burning his boats",
      "Casting his bread upon the waters",
      "Clutching at a red herring"
    ],
    answer: 0,
    explanation: "'Grasping at straws' means to desperately try anything — even unlikely or inadequate measures — when in a hopeless situation. It comes from the image of a drowning man clutching at floating straws in a last futile attempt to save himself."
  },
  {
    id: 38,
    question: "The researcher published her findings prematurely, without peer review, and later discovered a fundamental error in her data. She had: '___________'",
    options: [
      "Counted her chickens before they hatched",
      "Gone off at half-cock",
      "Let the cat out of the bag",
      "Opened a can of worms"
    ],
    answer: 1,
    explanation: "'Gone off at half-cock' means to act prematurely or without adequate preparation, resulting in failure. It originates from firearms where a half-cocked gun could misfire accidentally. The researcher acted before her work was ready."
  },
  {
    id: 39,
    question: "The government's attempt to solve the unemployment crisis by simply reducing working hours ended up creating more problems than it solved. They had: '___________'",
    options: [
      "Opened a can of worms",
      "Set the Thames on fire",
      "Robbed Peter to pay Paul",
      "Jumped from the frying pan into the fire"
    ],
    answer: 0,
    explanation: "'Opened a can of worms' means to initiate a course of action that creates a whole new set of complicated and unforeseen problems. The policy intended to fix one issue but exposed many others."
  },
  {
    id: 40,
    question: "Despite having the largest budget in the department's history, the project director produced mediocre results and was unable to explain why. He clearly had: '___________'",
    options: [
      "Bitten off more than he could chew",
      "Let the grass grow under his feet",
      "Burned the candle at both ends",
      "Shot himself in the foot"
    ],
    answer: 0,
    explanation: "'Bitten off more than one can chew' means to take on more than one can handle. The director accepted a project far beyond his capability and resources, producing poor results despite ample funding."
  },
  {
    id: 41,
    question: "A senior civil servant discovers that the department's entire annual budget has been misappropriated. He knows that exposing it will destroy careers — including potentially his own — but staying silent makes him complicit. Which idiom best captures his predicament?",
    options: [
      "Between the devil and the deep blue sea",
      "On the horns of a dilemma",
      "Burning one's bridges",
      "Caught between a rock and a hard place"
    ],
    answer: 1,
    explanation: "While 'between the devil and the deep blue sea' and 'caught between a rock and a hard place' describe general difficult choices, 'on the horns of a dilemma' is the most precise idiom for being caught between two specific, equally undesirable alternatives — the classic dilemma form."
  },
  {
    id: 42,
    question: "A renowned academic repeatedly dismisses a young student's innovative research as too unconventional, even though independent experts have praised it. The academic's behaviour best exemplifies:",
    options: [
      "Casting pearls before swine",
      "A dog in the manger",
      "Blowing hot and cold",
      "Tilting at windmills"
    ],
    answer: 1,
    explanation: "'A dog in the manger' fits — the academic has no use for the unconventional research herself but selfishly obstructs the student from gaining recognition. She neither benefits from the research nor allows others to benefit from it."
  },
  {
    id: 43,
    question: "A small nation negotiated a peace treaty with a far more powerful neighbour, but the terms required them to dismantle their military and accept trade restrictions that crippled their economy. Observers called it a:",
    options: [
      "Pyrrhic victory",
      "Faustian bargain",
      "Hobson's choice",
      "Pyrrhic defeat"
    ],
    answer: 1,
    explanation: "A 'Faustian bargain' is a deal where one exchanges something of great moral or practical value for an immediate advantage — like Faust who traded his soul to the devil. The nation gained peace but at the cost of sovereignty and economic wellbeing."
  },
  {
    id: 44,
    question: "A team of engineers has been redesigning the same bridge component for five years without ever finalising it, each revision leading to another round of modifications. This is best described as:",
    options: [
      "A Sisyphean task",
      "Penelope's web",
      "Flogging a dead horse",
      "Going around in circles"
    ],
    answer: 1,
    explanation: "'Penelope's web' is the most precise idiom: it refers specifically to a task that is perpetually undone and redone without completion, as Penelope wove and unravelled her shroud. 'Sisyphean' implies a task that must be repeated from scratch due to failure, not deliberate or cyclical revision."
  },
  {
    id: 45,
    question: "A startup CEO, facing bankruptcy, takes a massive gamble by investing the company's last reserves in a speculative venture from which there is no way back if it fails. She has effectively:",
    options: [
      "Thrown caution to the wind",
      "Crossed the Rubicon",
      "Burnt her boats",
      "Gone off at half-cock"
    ],
    answer: 2,
    explanation: "'Burnt one's boats' (or bridges) means to take a drastic, irreversible action that eliminates any possibility of retreat. It originally referred to military commanders who burned ships after landing so soldiers had no option but to advance. 'Crossed the Rubicon' also implies irreversibility but with a more deliberate strategic connotation of initiating conflict."
  },
  {
    id: 46,
    question: "A government announces that citizens may either accept a new compulsory health insurance scheme or be denied access to public hospitals. Citizens who object argue this is a case of:",
    options: [
      "The devil's advocate",
      "A catch-22",
      "Hobson's choice",
      "A false dilemma"
    ],
    answer: 2,
    explanation: "'Hobson's choice' is precise here: the offer of 'choice' is illusory — accept the scheme or face a consequence that makes non-acceptance impossible in practice. There is no real alternative. 'Catch-22' involves a self-contradicting rule, not a take-it-or-leave-it situation."
  },
  {
    id: 47,
    question: "A pharmaceutical company's new drug successfully cured a rare disease but caused serious side effects in 30% of patients, leading to massive lawsuits that exceeded the profits earned. The company's investment was:",
    options: [
      "A double-edged sword",
      "A Pyrrhic victory",
      "Killing the goose that laid the golden egg",
      "An albatross around their neck"
    ],
    answer: 1,
    explanation: "A 'Pyrrhic victory' is most accurate: the company achieved its goal (a working cure) but at a cost — financial and reputational — that negated the benefit. The victory was real but self-defeating in its consequences."
  },
  {
    id: 48,
    question: "A journalist uncovers corruption in a powerful ministry, but her editor suppresses the story under pressure from the government. She realises that publishing through an independent channel will end her career at the outlet. She is faced with:",
    options: [
      "Cutting the Gordian knot",
      "Grasping at straws",
      "Being between Scylla and Charybdis",
      "Going off at half-cock"
    ],
    answer: 2,
    explanation: "'Between Scylla and Charybdis' (the classical equivalent of 'between a rock and a hard place') describes a situation with two equally perilous alternatives on each side — publish and lose her job, or stay silent and compromise her integrity. This idiom is the most precise for equal, unavoidable dangers on both sides."
  },
  {
    id: 49,
    question: "A long-serving professor, upon retirement, finally publishes a paper contradicting a theory he publicly championed for decades but privately doubted. His colleagues say he:",
    options: [
      "Was hiding his light under a bushel",
      "Had feet of clay",
      "Was blowing hot and cold",
      "Was eating his words"
    ],
    answer: 3,
    explanation: "'Eating one's words' means to retract a statement one has made publicly, often under compulsion from facts or circumstances. The professor is publicly retracting a position he long advocated, making this the most precise idiom."
  },
  {
    id: 50,
    question: "A nation pours vast military and economic resources into winning a territorial dispute. After a decade, it secures the disputed land — a barren, uninhabited plateau with no strategic or economic value. An observer might say the nation:",
    options: [
      "Won the battle but lost the war",
      "Achieved a Pyrrhic victory",
      "Was chasing a will-o'-the-wisp",
      "Had cut off its nose to spite its face"
    ],
    answer: 3,
    explanation: "'Cut off one's nose to spite one's face' means to take an action driven by pride or stubbornness that ends up being more harmful to oneself than to anyone else. The nation sacrificed enormous resources for a decade to secure something worthless, damaging itself far more than any adversary. 'Pyrrhic victory' would apply if the cost of winning matched the value of the prize — here, the prize itself was never worth pursuing."
  }
]

export default questions

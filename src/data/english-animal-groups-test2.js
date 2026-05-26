const questions = [
  {
    id: 1,
    question: "What is a group of flamingos called?",
    options: ["A flamboyance", "A colony", "A flock", "A congregation"],
    answer: 0,
    explanation: "A group of flamingos is called a flamboyance — a fitting term for these brilliantly colored, showy birds that stand together in large, vibrant gatherings."
  },
  {
    id: 2,
    question: "What is a group of rhinoceroses called?",
    options: ["A herd", "A crash", "A thunder", "A bloat"],
    answer: 1,
    explanation: "A group of rhinoceroses is called a crash — named for the powerful, crashing force these massive animals can exert when moving together."
  },
  {
    id: 3,
    question: "What is a group of porcupines called?",
    options: ["A prickle", "A cluster", "A spike", "A knot"],
    answer: 0,
    explanation: "A group of porcupines is called a prickle — a reference to the sharp quills that cover their bodies and make them unmistakable among rodents."
  },
  {
    id: 4,
    question: "What is a group of owls called?",
    options: ["A flock", "A parliament", "A convocation", "A wisdom"],
    answer: 1,
    explanation: "A group of owls is called a parliament — owls have long been associated with wisdom and deliberation, and a gathering of them is poetically named after a legislative body."
  },
  {
    id: 5,
    question: "What is a group of wombats called?",
    options: ["A mob", "A wisdom", "A colony", "A warren"],
    answer: 1,
    explanation: "A group of wombats is called a wisdom — a rarely used but official collective noun for these slow, burrowing marsupials of Australia."
  },
  {
    id: 6,
    question: "What is a group of platypuses called?",
    options: ["A colony", "A paddle", "A lodge", "A paradox"],
    answer: 3,
    explanation: "A group of platypuses is called a paradox — reflecting the bizarre, contradictory nature of this egg-laying, duck-billed, venomous mammal that puzzled early naturalists."
  },
  {
    id: 7,
    question: "What is a group of cockroaches called?",
    options: ["A swarm", "An intrusion", "A plague", "A horde"],
    answer: 1,
    explanation: "A group of cockroaches is called an intrusion — capturing the unwelcome, invasive way these resilient insects infiltrate human spaces."
  },
  {
    id: 8,
    question: "What is a group of moles called?",
    options: ["A burrow", "A labour", "A colony", "A tunnel"],
    answer: 1,
    explanation: "A group of moles is called a labour — referencing the constant, industrious digging work these small mammals perform underground."
  },
  {
    id: 9,
    question: "What is a group of herons called?",
    options: ["A colony", "A siege", "A flock", "A stand"],
    answer: 1,
    explanation: "A group of herons is called a siege — these tall, patient birds stand motionless for long periods while hunting, resembling soldiers laying siege to a position."
  },
  {
    id: 10,
    question: "What is a group of emus called?",
    options: ["A mob", "A flock", "A troop", "A drift"],
    answer: 0,
    explanation: "A group of emus is called a mob — the same term used for kangaroos and some other large Australian animals moving together across the landscape."
  },
  {
    id: 11,
    question: "What is a group of otters called?",
    options: ["A float", "A romp", "A bevy", "A lodge"],
    answer: 1,
    explanation: "A group of otters is called a romp — perfectly describing the playful, energetic behavior of otters as they tumble, slide, and wrestle together."
  },
  {
    id: 12,
    question: "What is a group of larks called?",
    options: ["A flock", "An exaltation", "A charm", "A murmuration"],
    answer: 1,
    explanation: "A group of larks is called an exaltation — larks are famous for their soaring, joyful song as they ascend high into the sky, inspiring this uplifting collective noun."
  },
  {
    id: 13,
    question: "What is a group of ferrets called?",
    options: ["A gang", "A business", "A pack", "A colony"],
    answer: 1,
    explanation: "A group of ferrets is called a business — ferrets are busy, industrious animals always seeming to have somewhere to go and something to investigate."
  },
  {
    id: 14,
    question: "What is a group of woodpeckers called?",
    options: ["A flock", "A descent", "A colony", "A knock"],
    answer: 1,
    explanation: "A group of woodpeckers is called a descent — a term that evokes how these birds spiral downward along tree trunks as they search for insects beneath the bark."
  },
  {
    id: 15,
    question: "What is a group of iguanas called?",
    options: ["A colony", "A slumber", "A mess", "A congregation"],
    answer: 1,
    explanation: "A group of iguanas is called a slumber — iguanas are often seen basking motionlessly in the sun for extended periods, giving the impression of a group deep in slumber."
  },
  {
    id: 16,
    question: "What is a group of tapirs called?",
    options: ["A herd", "A candle", "A crash", "A shadow"],
    answer: 1,
    explanation: "A group of tapirs is called a candle — this is one of the rarer collective nouns, applying to these shy, forest-dwelling mammals of South America and Southeast Asia."
  },
  {
    id: 17,
    question: "What is a group of magpies called?",
    options: ["A flock", "A parliament", "A tiding", "A murder"],
    answer: 2,
    explanation: "A group of magpies is called a tiding — though also sometimes called a murder or a parliament, 'tiding' is the most classically correct collective noun for magpies."
  },
  {
    id: 18,
    question: "What is a group of armadillos called?",
    options: ["A roll", "A ball", "A fez", "A herd"],
    answer: 2,
    explanation: "A group of armadillos is called a fez — an unusual collective noun for these armored, burrowing mammals native to the Americas."
  },
  {
    id: 19,
    question: "What is a group of coatis called?",
    options: ["A troop", "A band", "A mob", "A pack"],
    answer: 1,
    explanation: "A group of coatis is called a band — these social, raccoon-like mammals of Central and South America travel together in noisy, foraging bands."
  },
  {
    id: 20,
    question: "What is a group of nightingales called?",
    options: ["A watch", "A flock", "A choir", "A chorus"],
    answer: 0,
    explanation: "A group of nightingales is called a watch — nightingales are famously nocturnal singers, keeping a kind of 'watch' through the night with their beautiful, continuous song."
  },
  {
    id: 21,
    question: "A group of lemurs is called a ________ of lemurs.",
    options: ["Conspiracy", "Troop", "Band", "Mob"],
    answer: 0,
    explanation: "A group of lemurs is called a conspiracy — these wide-eyed, social primates of Madagascar are known for their stealthy, coordinated movements through the forest canopy."
  },
  {
    id: 22,
    question: "A group of turkeys is called a ________ of turkeys.",
    options: ["Flock", "Rafter", "Gobble", "Gang"],
    answer: 1,
    explanation: "A group of turkeys is called a rafter — this term refers specifically to a flock of domestic turkeys, possibly derived from the way they roost together on roof beams or rafters."
  },
  {
    id: 23,
    question: "A group of skunks is called a ________ of skunks.",
    options: ["Stench", "Spray", "Surfeit", "Funk"],
    answer: 2,
    explanation: "A group of skunks is called a surfeit — meaning an excessive, overabundant amount of something, humorously applied to these pungent animals whose smell is certainly excessive."
  },
  {
    id: 24,
    question: "A group of swans is called a ________ of swans.",
    options: ["Flock", "Bevy", "Covey", "Gaggle"],
    answer: 1,
    explanation: "A group of swans is called a bevy — this elegant collective noun suits the graceful, regal nature of swans. On water they are also called a 'wedge' when flying in formation."
  },
  {
    id: 25,
    question: "A group of bats is called a ________ of bats.",
    options: ["Swarm", "Cauldron", "Colony", "Cloud"],
    answer: 1,
    explanation: "A group of bats in flight is called a cauldron — evoking the churning, swirling mass of bats emerging from a cave at dusk, like bubbling liquid in a witch's cauldron."
  },
  {
    id: 26,
    question: "A group of badgers is called a ________ of badgers.",
    options: ["Cete", "Colony", "Pack", "Lodge"],
    answer: 0,
    explanation: "A group of badgers is called a cete — one of the oldest collective nouns in English, this term has been used for centuries to describe these nocturnal, burrowing mustelids."
  },
  {
    id: 27,
    question: "A group of kingfishers is called a ________ of kingfishers.",
    options: ["Flock", "Congregation", "Realm", "Crown"],
    answer: 2,
    explanation: "A group of kingfishers is called a realm — befitting these jewel-colored birds that reign supreme over their riverside territories, diving with precision to catch fish."
  },
  {
    id: 28,
    question: "A group of jellyfish is called a ________ of jellyfish.",
    options: ["Bloom", "Float", "Smack", "Drift"],
    answer: 0,
    explanation: "A group of jellyfish is called a bloom — when jellyfish aggregate in large numbers in the ocean, it is described as a bloom, much like a massive, pulsating flower blooming at sea."
  },
  {
    id: 29,
    question: "A group of foxes is called a ________ of foxes.",
    options: ["Pack", "Earth", "Skulk", "Den"],
    answer: 2,
    explanation: "A group of foxes is called a skulk — perfectly capturing the secretive, stealthy way foxes move through undergrowth, always staying low and out of sight."
  },
  {
    id: 30,
    question: "A group of lobsters is called a ________ of lobsters.",
    options: ["Cluster", "Risk", "Shoal", "Pot"],
    answer: 1,
    explanation: "A group of lobsters is called a risk — an unusual collective noun that perhaps reflects the danger of handling these clawed crustaceans or the gamble of lobster fishing."
  },
  {
    id: 31,
    question: "A group of finches is called a ________ of finches.",
    options: ["Flock", "Charm", "Flutter", "Murmuration"],
    answer: 1,
    explanation: "A group of finches is called a charm — these small, colorful songbirds are charming in their bright plumage and cheerful, musical calls as they flit together."
  },
  {
    id: 32,
    question: "A group of hippopotamuses is called a ________ of hippopotamuses.",
    options: ["Herd", "Bloat", "Crash", "Thunder"],
    answer: 1,
    explanation: "A group of hippopotamuses is called a bloat — referencing the enormous, swollen bodies of these massive semi-aquatic mammals as they loll together in rivers and lakes."
  },
  {
    id: 33,
    question: "A group of cobras is called a ________ of cobras.",
    options: ["Den", "Quiver", "Nest", "Bask"],
    answer: 1,
    explanation: "A group of cobras is called a quiver — evoking the trembling, quivering motion of a cobra spreading its hood and swaying before striking its prey."
  },
  {
    id: 34,
    question: "A group of storks is called a ________ of storks.",
    options: ["Flock", "Muster", "Phalanx", "Flight"],
    answer: 1,
    explanation: "A group of storks is called a muster — these large, imposing wading birds gather in impressive formations, and their gatherings have long been described with this military term."
  },
  {
    id: 35,
    question: "A group of electric eels is called a ________ of electric eels.",
    options: ["Swarm", "Bolt", "Flock", "Bed"],
    answer: 1,
    explanation: "A group of electric eels is called a bolt — a vivid collective noun referencing the powerful electric bolt these remarkable fish can discharge, stunning prey and predators alike."
  },
  {
    id: 36,
    question: "A 'dray' is the collective noun for which animal?",
    options: ["Otters", "Squirrels", "Beavers", "Raccoons"],
    answer: 1,
    explanation: "A dray is the collective noun for squirrels. The word 'dray' also refers to a squirrel's nest, making it a collective noun tied to where these agile rodents live and gather."
  },
  {
    id: 37,
    question: "A 'sounder' is the collective noun for which animal?",
    options: ["Dolphins", "Wild boars", "Walruses", "Seals"],
    answer: 1,
    explanation: "A sounder is the collective noun for wild boars (or swine). This term has been used since medieval hunting days to describe a group of these tusked, powerful wild pigs."
  },
  {
    id: 38,
    question: "A 'shrewdness' is the collective noun for which animal?",
    options: ["Foxes", "Apes", "Raccoons", "Weasels"],
    answer: 1,
    explanation: "A shrewdness is the collective noun for apes — reflecting the high intelligence and cunning problem-solving abilities of these great apes, our closest animal relatives."
  },
  {
    id: 39,
    question: "A 'prickle' is the collective noun for which animal?",
    options: ["Hedgehogs", "Porcupines", "Sea urchins", "Both A and B"],
    answer: 3,
    explanation: "A prickle is the collective noun for both hedgehogs and porcupines — both animals are covered in sharp spines or quills, making this shared collective noun perfectly descriptive."
  },
  {
    id: 40,
    question: "A 'tower' is the collective noun for which animal?",
    options: ["Elephants", "Giraffes", "Ostriches", "Meerkats"],
    answer: 1,
    explanation: "A tower is the collective noun for giraffes — the tallest land animals on Earth, whose immense height makes a group of them look like a cluster of living towers on the savannah."
  },
  {
    id: 41,
    question: "Which of the following collective noun pairs is INCORRECT?",
    options: [
      "A murder of crows",
      "A bloat of hippopotamuses",
      "A pride of lions",
      "A gaggle of eagles"
    ],
    answer: 3,
    explanation: "A gaggle of eagles is incorrect. Gaggle is the collective noun for geese. Eagles are referred to as a convocation when gathered together. A murder of crows, a bloat of hippopotamuses, and a pride of lions are all correct."
  },
  {
    id: 42,
    question: "Which of the following collective noun pairs is INCORRECT?",
    options: [
      "A cackle of hyenas",
      "A flamboyance of flamingos",
      "A crash of rhinos",
      "A roost of bats"
    ],
    answer: 3,
    explanation: "A roost of bats is incorrect as a collective noun for bats in flight. Bats in flight are called a cauldron. A roost refers to their resting place, not the group itself. The other three options are all correct collective nouns."
  },
  {
    id: 43,
    question: "Which of the following collective noun pairs is CORRECT?",
    options: [
      "A pack of hyenas",
      "A flock of owls",
      "A skulk of foxes",
      "A school of storks"
    ],
    answer: 2,
    explanation: "A skulk of foxes is the correct pair. Hyenas travel in clans (not packs), owls gather in parliaments (not flocks), and storks gather in musters (not schools). Only skulk of foxes is accurate."
  },
  {
    id: 44,
    question: "A 'clowder' is the collective noun for which animal?",
    options: ["Seals", "Cats", "Jellyfish", "Clownfish"],
    answer: 1,
    explanation: "A clowder is the collective noun for cats. This old English word has been used for centuries to describe a group of domestic cats. A group of kittens specifically is called a kindle."
  },
  {
    id: 45,
    question: "A 'flange' is the collective noun for which animal?",
    options: ["Gorillas", "Chimpanzees", "Baboons", "Mandrills"],
    answer: 1,
    explanation: "A flange is the collective noun for chimpanzees — one of the more unusual and obscure collective nouns, applying to our closest living relatives among the great apes."
  },
  {
    id: 46,
    question: "Which animal's group is correctly called a 'bloat'?",
    options: ["Walruses", "Seals", "Hippopotamuses", "Manatees"],
    answer: 2,
    explanation: "A bloat is the correct collective noun for hippopotamuses — referencing their enormous, rounded, swollen-looking bodies as they gather together in African rivers and lakes."
  },
  {
    id: 47,
    question: "A 'conspiracy' is the collective noun for which animal?",
    options: ["Vultures", "Lemurs", "Ravens", "Weasels"],
    answer: 1,
    explanation: "A conspiracy is the collective noun for lemurs — these mysterious, large-eyed primates of Madagascar seem to be always plotting something with their silent, stealthy movements through the forest."
  },
  {
    id: 48,
    question: "Which of the following is the CORRECT collective noun for a group of peacocks?",
    options: ["A pride", "A muster", "A parade", "A display"],
    answer: 1,
    explanation: "A muster is the correct collective noun for peacocks — the term suits these birds that gather and fan out their spectacular tail feathers in an impressive visual muster or assembly."
  },
  {
    id: 49,
    question: "A 'sloth' is the collective noun for which animal?",
    options: ["Sloths", "Bears", "Pandas", "Koalas"],
    answer: 1,
    explanation: "A sloth is the collective noun for bears — not the sloth animal itself. A group of bears is called a sloth, derived from the Old English word for laziness, referencing the bear's sluggish winter behaviour."
  },
  {
    id: 50,
    question: "Which of the following collective noun pairs is INCORRECT?",
    options: [
      "A parliament of owls",
      "A tower of giraffes",
      "A wisdom of wombats",
      "A kindle of elephants"
    ],
    answer: 3,
    explanation: "A kindle of elephants is incorrect. A kindle refers to a group of kittens (young cats). A group of elephants is called a herd or a parade. A parliament of owls, a tower of giraffes, and a wisdom of wombats are all correct collective nouns."
  }
]

export default questions

const questions = [
  {
    id: 1,
    question: "What is a group of crows called?",
    options: ["A flock", "A murder", "A colony", "A gaggle"],
    answer: 1,
    explanation: "A group of crows is called a 'murder'. This unusual collective noun has been in use since at least the 15th century."
  },
  {
    id: 2,
    question: "What is a group of owls called?",
    options: ["A flock", "A colony", "A parliament", "A wisdom"],
    answer: 2,
    explanation: "A group of owls is called a 'parliament', likely because owls are associated with wisdom, as in a parliament of wise people."
  },
  {
    id: 3,
    question: "What is a group of rhinoceroses called?",
    options: ["A herd", "A crash", "A bloat", "A tower"],
    answer: 1,
    explanation: "A group of rhinoceroses is called a 'crash', referring to the loud crashing sound they make when moving through vegetation."
  },
  {
    id: 4,
    question: "What is a group of flamingos called?",
    options: ["A flock", "A colony", "A flamboyance", "A stand"],
    answer: 2,
    explanation: "A group of flamingos is called a 'flamboyance', perfectly capturing their vivid pink color and dramatic appearance."
  },
  {
    id: 5,
    question: "What is a group of porcupines called?",
    options: ["A prickle", "A cluster", "A spike", "A quill"],
    answer: 0,
    explanation: "A group of porcupines is called a 'prickle', a fitting name for animals covered in sharp quills."
  },
  {
    id: 6,
    question: "What is a group of hippopotamuses called?",
    options: ["A herd", "A crash", "A bloat", "A tower"],
    answer: 2,
    explanation: "A group of hippopotamuses is called a 'bloat', referring to the bloated, heavy appearance of these massive animals."
  },
  {
    id: 7,
    question: "What is a group of giraffes called?",
    options: ["A herd", "A tower", "A bloat", "A journey"],
    answer: 1,
    explanation: "A group of giraffes is called a 'tower', aptly named for the giraffe's extraordinary height reaching up to 6 metres."
  },
  {
    id: 8,
    question: "What is a group of lemurs called?",
    options: ["A troop", "A conspiracy", "A mob", "A band"],
    answer: 1,
    explanation: "A group of lemurs is called a 'conspiracy'. Lemurs are also known to gather in groups called troops or mobs."
  },
  {
    id: 9,
    question: "What is a group of ravens called?",
    options: ["A murder", "A flock", "An unkindness", "A parliament"],
    answer: 2,
    explanation: "A group of ravens is called an 'unkindness', owing to the historical superstition that ravens were harbingers of bad luck."
  },
  {
    id: 10,
    question: "What is a group of jellyfish called?",
    options: ["A school", "A smack", "A bloom", "A swarm"],
    answer: 1,
    explanation: "A group of jellyfish is called a 'smack'. They can also be called a bloom or a swarm, but 'smack' is the most specific collective noun."
  },
  {
    id: 11,
    question: "What is a group of ferrets called?",
    options: ["A pack", "A band", "A business", "A colony"],
    answer: 2,
    explanation: "A group of ferrets is called a 'business'. The origin is uncertain but may relate to the busy, active nature of ferrets."
  },
  {
    id: 12,
    question: "What is a group of vultures called?",
    options: ["A flock", "A committee", "A murder", "A parliament"],
    answer: 1,
    explanation: "A group of vultures is called a 'committee' (when resting) or a 'kettle' (when in flight). 'Committee' is the most well-known collective noun."
  },
  {
    id: 13,
    question: "What is a group of hyenas called?",
    options: ["A pack", "A cackle", "A clan", "A mob"],
    answer: 1,
    explanation: "A group of hyenas is called a 'cackle', named after the eerie laughing sound hyenas are famous for making."
  },
  {
    id: 14,
    question: "What is a group of cockroaches called?",
    options: ["A swarm", "A colony", "An intrusion", "A cluster"],
    answer: 2,
    explanation: "A group of cockroaches is called an 'intrusion', perfectly describing how unwelcome these insects are in homes."
  },
  {
    id: 15,
    question: "What is a group of moles called?",
    options: ["A colony", "A labour", "A tunnel", "A burrow"],
    answer: 1,
    explanation: "A group of moles is called a 'labour', referring to the immense digging work they perform to create their tunnel networks."
  },
  {
    id: 16,
    question: "What is a group of alligators called?",
    options: ["A swarm", "A congregation", "A pack", "A cluster"],
    answer: 1,
    explanation: "A group of alligators is called a 'congregation', a term also used for crocodiles gathering together, often near water."
  },
  {
    id: 17,
    question: "What is a group of apes called?",
    options: ["A troop", "A shrewdness", "A barrel", "A conspiracy"],
    answer: 1,
    explanation: "A group of apes is called a 'shrewdness', highlighting the high intelligence associated with these primates."
  },
  {
    id: 18,
    question: "What is a group of otters called?",
    options: ["A pack", "A family", "A romp", "A band"],
    answer: 2,
    explanation: "A group of otters is called a 'romp', capturing the playful, frolicking behaviour otters are famous for."
  },
  {
    id: 19,
    question: "What is a group of bats called?",
    options: ["A colony", "A cauldron", "A cloud", "A flock"],
    answer: 1,
    explanation: "A group of bats in flight is called a 'cauldron'. When roosting, they are called a colony. 'Cauldron' is the specific collective noun."
  },
  {
    id: 20,
    question: "What is a group of flamingos called when they are flying?",
    options: ["A flamboyance", "A stand", "A skein", "A pat"],
    answer: 0,
    explanation: "A group of flamingos is always called a 'flamboyance', whether flying or standing. The term perfectly describes their showy, vivid nature."
  },
  {
    id: 21,
    question: "A _____ of peacocks is the correct collective noun.",
    options: ["A muster", "A flock", "A pride", "A parade"],
    answer: 0,
    explanation: "A group of peacocks is called a 'muster'. The term 'ostentation' is also used, reflecting their showy display of feathers."
  },
  {
    id: 22,
    question: "A _____ of sharks is the correct collective noun.",
    options: ["A school", "A shiver", "A pack", "A frenzy"],
    answer: 1,
    explanation: "A group of sharks is called a 'shiver'. The word evokes both the cold waters sharks inhabit and the shiver of fear they inspire."
  },
  {
    id: 23,
    question: "A _____ of wombats is the correct collective noun.",
    options: ["A colony", "A pack", "A wisdom", "A mob"],
    answer: 2,
    explanation: "A group of wombats is called a 'wisdom'. This uncommon collective noun is specific to these burrowing Australian marsupials."
  },
  {
    id: 24,
    question: "A _____ of cats is the obscure but correct collective noun.",
    options: ["A pack", "A clowder", "A pride", "A cluster"],
    answer: 1,
    explanation: "A group of cats is called a 'clowder'. This term dates back to the early 19th century and is more specific than simply 'a group of cats'."
  },
  {
    id: 25,
    question: "A _____ of hedgehogs is the correct collective noun.",
    options: ["A spike", "A cluster", "A prickle", "A band"],
    answer: 2,
    explanation: "A group of hedgehogs is called a 'prickle', just like porcupines. Both animals share this collective noun due to their spiny exteriors."
  },
  {
    id: 26,
    question: "A _____ of larks is the correct collective noun.",
    options: ["A flock", "A murder", "A exaltation", "A murmuration"],
    answer: 2,
    explanation: "A group of larks is called an 'exaltation', a poetic term reflecting the skylark's beautiful, soaring song that seems to lift the spirit."
  },
  {
    id: 27,
    question: "A _____ of cobras is the correct collective noun.",
    options: ["A nest", "A quiver", "A den", "A venom"],
    answer: 1,
    explanation: "A group of cobras is called a 'quiver', referring to the trembling, swaying motion cobras make when alarmed or during a threat display."
  },
  {
    id: 28,
    question: "A _____ of finches is the correct collective noun.",
    options: ["A flock", "A charm", "A murder", "A band"],
    answer: 1,
    explanation: "A group of finches is called a 'charm'. This delightful collective noun captures the charming, lively nature of these colourful small birds."
  },
  {
    id: 29,
    question: "A _____ of parrots is the correct collective noun.",
    options: ["A flock", "A company", "A pandemonium", "A chatter"],
    answer: 2,
    explanation: "A group of parrots is called a 'pandemonium', perfectly describing the chaotic, noisy environment created by a gathering of these birds."
  },
  {
    id: 30,
    question: "A _____ of stingrays is the correct collective noun.",
    options: ["A school", "A fever", "A shiver", "A swarm"],
    answer: 1,
    explanation: "A group of stingrays is called a 'fever'. This vivid collective noun is also used for other rays and is unique among marine animals."
  },
  {
    id: 31,
    question: "A _____ of turkeys is the correct collective noun.",
    options: ["A flock", "A rafter", "A gaggle", "A colony"],
    answer: 1,
    explanation: "A group of turkeys is called a 'rafter'. This term refers to the birds' habit of roosting on rafters and beams in barns and buildings."
  },
  {
    id: 32,
    question: "A _____ of foxes is the correct collective noun.",
    options: ["A pack", "A skulk", "A clan", "A mob"],
    answer: 1,
    explanation: "A group of foxes is called a 'skulk', referring to the stealthy, secretive way foxes move about, often under cover of darkness."
  },
  {
    id: 33,
    question: "A _____ of toads is the correct collective noun.",
    options: ["A swarm", "A cluster", "A knot", "A heap"],
    answer: 2,
    explanation: "A group of toads is called a 'knot', describing how toads huddle together in tight groups, especially during breeding season."
  },
  {
    id: 34,
    question: "A _____ of woodpeckers is the correct collective noun.",
    options: ["A flock", "A descent", "A drum", "A colony"],
    answer: 1,
    explanation: "A group of woodpeckers is called a 'descent', likely referring to how these birds move down tree trunks in search of insects."
  },
  {
    id: 35,
    question: "A _____ of goldfinches is the correct collective noun.",
    options: ["A flock", "A charm", "A flutter", "A glitter"],
    answer: 1,
    explanation: "A group of goldfinches is called a 'charm' or sometimes a 'treasury', reflecting the beauty and appeal of these brilliantly coloured birds."
  },
  {
    id: 36,
    question: "A 'shrewdness' is a group of which animal?",
    options: ["Crows", "Wolves", "Apes", "Foxes"],
    answer: 2,
    explanation: "A 'shrewdness' is the collective noun for a group of apes. The term highlights the well-known intelligence and problem-solving ability of apes."
  },
  {
    id: 37,
    question: "A 'flamboyance' is a group of which animal?",
    options: ["Peacocks", "Flamingos", "Butterflies", "Parrots"],
    answer: 1,
    explanation: "A 'flamboyance' is the collective noun for a group of flamingos. Their striking pink colour and elaborate displays inspired this vivid term."
  },
  {
    id: 38,
    question: "A 'murder' is a group of which animal?",
    options: ["Ravens", "Crows", "Vultures", "Bats"],
    answer: 1,
    explanation: "A 'murder' is the collective noun specifically for crows. Ravens have their own term — an 'unkindness' — while vultures are a 'committee'."
  },
  {
    id: 39,
    question: "A 'bloat' is a group of which animal?",
    options: ["Rhinoceroses", "Hippopotamuses", "Walruses", "Manatees"],
    answer: 1,
    explanation: "A 'bloat' is the collective noun for a group of hippopotamuses, referring to their large, bloated bodies that float in rivers."
  },
  {
    id: 40,
    question: "A 'conspiracy' is a group of which animal?",
    options: ["Wolves", "Hyenas", "Lemurs", "Meerkats"],
    answer: 2,
    explanation: "A 'conspiracy' is the collective noun for a group of lemurs, suggesting the secretive, mysterious behaviour of these primates of Madagascar."
  },
  {
    id: 41,
    question: "Which of the following collective noun-animal pairs is CORRECT?",
    options: ["A murder of ravens", "A flamboyance of peacocks", "A parliament of owls", "An unkindness of crows"],
    answer: 2,
    explanation: "A 'parliament of owls' is correct. Ravens form an 'unkindness', crows form a 'murder', and peacocks form a 'muster' or 'ostentation'."
  },
  {
    id: 42,
    question: "A 'cauldron' is a group of which animal in flight?",
    options: ["Crows", "Bats", "Vultures", "Starlings"],
    answer: 1,
    explanation: "A 'cauldron' is the collective noun for a group of bats in flight, evoking the swirling, dark mass they form when emerging at dusk."
  },
  {
    id: 43,
    question: "A 'business' is a group of which animal?",
    options: ["Ants", "Beavers", "Ferrets", "Badgers"],
    answer: 2,
    explanation: "A 'business' is the collective noun for a group of ferrets. The term may reflect their busy, industrious nature. Badgers form a 'cete'."
  },
  {
    id: 44,
    question: "Which of the following collective noun-animal pairs is CORRECT?",
    options: ["A shiver of stingrays", "A fever of sharks", "A bloat of crocodiles", "A crash of hippopotamuses"],
    answer: 1,
    explanation: "A 'fever of sharks' is incorrect — sharks form a 'shiver'. Stingrays form a 'fever'. Crocodiles form a 'bask', and hippos form a 'bloat'."
  },
  {
    id: 45,
    question: "A 'pandemonium' is a group of which animal?",
    options: ["Hyenas", "Monkeys", "Parrots", "Bats"],
    answer: 2,
    explanation: "A 'pandemonium' is the collective noun for a group of parrots, perfectly describing the chaotic noise produced by a flock of parrots."
  },
  {
    id: 46,
    question: "A 'romp' is a group of which animal?",
    options: ["Otters", "Dolphins", "Seals", "Penguins"],
    answer: 0,
    explanation: "A 'romp' is the collective noun for a group of otters, capturing their playful, energetic behaviour both in and out of water."
  },
  {
    id: 47,
    question: "Which of the following collective noun-animal pairs is CORRECT?",
    options: ["A charm of starlings", "A murmuration of finches", "A clowder of cats", "A skulk of badgers"],
    answer: 2,
    explanation: "A 'clowder of cats' is correct. Starlings form a 'murmuration', finches form a 'charm', and badgers form a 'cete' — not a 'skulk' (that's for foxes)."
  },
  {
    id: 48,
    question: "A 'cackle' is a group of which animal?",
    options: ["Crows", "Ravens", "Hyenas", "Jackals"],
    answer: 2,
    explanation: "A 'cackle' is the collective noun for a group of hyenas, named after their characteristic 'laughing' vocalisation used to communicate."
  },
  {
    id: 49,
    question: "Which of the following collective noun-animal pairs is CORRECT?",
    options: ["A labour of badgers", "A prickle of hedgehogs", "A wisdom of weasels", "A skulk of meerkats"],
    answer: 1,
    explanation: "A 'prickle of hedgehogs' is correct. Badgers form a 'cete', labour belongs to moles, wombats form a 'wisdom', and foxes form a 'skulk'."
  },
  {
    id: 50,
    question: "A 'congregation' is a group of which animal?",
    options: ["Penguins", "Alligators", "Pelicans", "Flamingos"],
    answer: 1,
    explanation: "A 'congregation' is the collective noun for a group of alligators (and crocodiles), describing their tendency to gather in large numbers near water bodies."
  }
]

export default questions

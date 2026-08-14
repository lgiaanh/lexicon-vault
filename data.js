// Lexicon Vault - Core Vocabulary Database (42 Entries)
// Pre-filled with Cambridge Dictionary-style definitions and IELTS taxonomy classification.

const INITIAL_FOLDERS = [
  { id: 'folder-1', name: 'Law & Policy', color: '#DBCDF0', emoji: '⚖️', description: 'Legislation, judicial processes, constitutional rights, and official regulations.', created_at: new Date().toISOString(), word_count: 14 },
  { id: 'folder-2', name: 'Economics & Statistics', color: '#FAEDCB', emoji: '📈', description: 'Financial theories, trade data, economic policy, market dynamics, and quantitative metrics.', created_at: new Date().toISOString(), word_count: 19 },
  { id: 'folder-3', name: 'Environment & Ecology', color: '#C9E4DE', emoji: '🌱', description: 'Climate change, biodiversity, environmental preservation, ecosystems, and conservation strategies.', created_at: new Date().toISOString(), word_count: 14 },
  { id: 'folder-4', name: 'Academic Writing (Task 2)', color: '#C6DEF1', emoji: '✍️', description: 'Sophisticated vocabulary and idioms tailored for high-scoring IELTS Writing Task 2 responses.', created_at: new Date().toISOString(), word_count: 65 },
  { id: 'folder-5', name: 'Phrasal Verbs & Idioms', color: '#F7D9C4', emoji: '💬', description: 'Common English phrasal verbs and idiomatic expressions for informal or spoken contexts.', created_at: new Date().toISOString(), word_count: 9 },
  { id: 'folder-6', name: 'Maps & Diagrams', color: '#F2C6DE', emoji: '🗺️', description: 'Spatial descriptions, maps, process flowcharts, and technical diagrams.', created_at: new Date().toISOString(), word_count: 4 },
  { id: 'folder-speaking-work-study', name: 'Speaking: Work & Study', color: '#C6DEF1', emoji: '🏫', description: 'Phrasal verbs and colloquial expressions for describing academic pursuits and careers.', created_at: new Date().toISOString(), word_count: 3 },
  { id: 'folder-speaking-leisure-travel', name: 'Speaking: Leisure & Travel', color: '#C9E4DE', emoji: '✈️', description: 'Speaking phrasal verbs for describing vacationing, sightseeing, and hobbies.', created_at: new Date().toISOString(), word_count: 2 },
  { id: 'folder-speaking-relationships', name: 'Speaking: Relationships & Life', color: '#F2C6DE', emoji: '👥', description: 'Phrasal verbs for describing social connections, relatives, and childhood memories.', created_at: new Date().toISOString(), word_count: 7 },
  { id: 'folder-science', name: 'Science & Technology', color: '#DBCDF0', emoji: '🔬', description: 'Vocabulary and collocations related to scientific research, breakthroughs, technology, and paradigm shifts.', created_at: new Date().toISOString(), word_count: 19 },
  { id: 'folder-task2-phrases', name: 'Task 2 Phrases', color: '#F7D9C4', emoji: '📝', description: 'Key academic phrases, collocations, and idioms tailored for Writing Task 2 essays.', created_at: new Date().toISOString(), word_count: 15 },
  { id: 'folder-reading', name: 'IELTS Reading', color: '#C9E4DE', emoji: '📖', description: 'High-yield vocabulary and scientific terms gathered from IELTS Reading passages.', created_at: new Date().toISOString(), word_count: 61 }
];

const INITIAL_ENTRIES = [
  {
    id: 'entry-absurd',
    entry_type: 'word',
    word: 'absurd',
    ipa_uk: '/əbˈsɜːd/',
    ipa_us: '/əbˈsɝːd/',
    definition: 'stupid and unreasonable, or silly in a humorous way (often misspelled as absurb)',
    definition_source: 'cambridge',
    example: 'It is absurd to suggest that the problem can be solved overnight.',
    definitions: [
      {
        definition: 'stupid and unreasonable, or silly in a humorous way',
        example: 'It is absurd to suggest that the problem can be solved overnight.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'It is absurd to believe that governments can tackle climate change without cooperation from multinational corporations.',
      'Personally, I think the expectation that teenagers should decide their entire career path at eighteen is completely absurd.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['absurdity'],
      adjective: ['absurd'],
      adverb: ['absurdly']
    },
    collocations: [
      { collocation: 'absolutely absurd', example: 'The explanation they provided was absolutely absurd.' },
      { collocation: 'border on the absurd', example: 'Some of the regulations border on the absurd.' }
    ],
    semantic_field_id: 'rationality-irrationality',
    semantic_field_label: 'Rationality & Irrationality',
    semantic_field_words: [
      { word: 'absurd', cefr: 'C1', register: 'neutral' },
      { word: 'preposterous', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'ridiculous', register: 'neutral', cefr: 'B1' },
      { word: 'preposterous', register: 'formal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-accommodate-population',
    entry_type: 'word',
    word: "accommodate the world's population",
    ipa_uk: '/əˈkɒm.ə.deɪt ðə wɜːldz ˌpɒp.jəˈleɪ.ʃən/',
    ipa_us: '/əˈkɑː.mə.deɪt ðə wɜːrldz ˌpɑː.pjəˈleɪ.ʃən/',
    definition: 'to provide sufficient housing, food, and resources for the entire population of the earth',
    definition_source: 'cambridge',
    example: "We must build sustainable cities to accommodate the world's population.",
    definitions: [
      {
        definition: 'to provide sufficient housing, food, and resources for the entire population of the earth',
        example: "We must build sustainable cities to accommodate the world's population.",
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      "Vertical farming and high-rise residential complexes are proposed as viable solutions to accommodate the world's population without exhausting horizontal land resources.",
      "How can we accommodate the world's population without destroying natural habitats?"
    ],
    grammar_note: 'verb phrase',
    base_verb: 'accommodate',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: null,
    collocations: [
      { collocation: 'accommodate the growing population', example: 'Urban planning must adapt to accommodate the growing population.' },
      { collocation: 'adequately accommodate', example: "Current infrastructures are insufficient to adequately accommodate the world's population." }
    ],
    semantic_field_id: 'demographics-sustainability',
    semantic_field_label: 'Demographics & Sustainability',
    semantic_field_words: [
      { word: "accommodate the world's population", cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'house the population', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-maintain-natural-balance',
    entry_type: 'word',
    word: 'maintain the natural balance',
    ipa_uk: '/meɪnˈteɪn ðə ˈnætʃ.ər.əl ˈbæl.əns/',
    ipa_us: '/meɪnˈteɪn ðə ˈnætʃ.ɚ.əl ˈbæl.əns/',
    definition: 'to preserve the stable state of ecosystems where organisms live in harmony (also written with typo: mantain)',
    definition_source: 'cambridge',
    example: 'Conserving forest areas is vital to maintain the natural balance.',
    definitions: [
      {
        definition: 'to preserve the stable state of ecosystems where organisms live in harmony',
        example: 'Conserving forest areas is vital to maintain the natural balance.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Strict environmental laws must be enforced to maintain the natural balance of vulnerable ecosystems, preventing irreversible biodiversity loss.',
      'Human activities must be regulated to maintain the natural balance of marine life.'
    ],
    grammar_note: 'verb phrase',
    base_verb: 'maintain',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: null,
    collocations: [
      { collocation: 'maintain the ecological balance', example: 'Wetlands are protected to maintain the ecological balance.' },
      { collocation: 'help maintain the natural balance', example: 'Reducing carbon emissions will help maintain the natural balance.' }
    ],
    semantic_field_id: 'ecology-conservation',
    semantic_field_label: 'Ecology & Conservation',
    semantic_field_words: [
      { word: 'maintain the natural balance', cefr: 'C1', register: 'academic' },
      { word: 'preserve the ecosystem', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'keep ecosystems stable', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases', 'folder-3'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-plummet',
    entry_type: 'word',
    word: 'plummet',
    ipa_uk: '/ˈplʌm.ɪt/',
    ipa_us: '/ˈplʌm.ɪt/',
    definition: 'to fall very quickly and suddenly',
    definition_source: 'cambridge',
    example: 'House prices have plummeted in recent months.',
    definitions: [
      {
        definition: 'to fall very quickly and suddenly',
        example: 'House prices have plummeted in recent months.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The plane plummeted to the ground after its engines failed.',
      'Temperatures plummeted to minus fifteen degrees last night.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: ['plummet'],
      noun: [],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: 'plummet sharply', example: 'Sales plummeted sharply during the winter holidays.' },
      { collocation: 'plummet to a record low', example: 'The stock value plummeted to a record low yesterday.' }
    ],
    semantic_field_id: 'decrease-fall',
    semantic_field_label: 'Decrease & Fall',
    semantic_field_words: [
      { word: 'plummet', cefr: 'C1', register: 'neutral' },
      { word: 'collapse', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'drop', register: 'neutral', cefr: 'A2' },
      { word: 'fall', register: 'neutral', cefr: 'A1' },
      { word: 'plunge', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-inscription',
    entry_type: 'word',
    word: 'inscription',
    ipa_uk: '/ɪnˈskrɪp.ʃən/',
    ipa_us: '/ɪnˈskrɪp.ʃən/',
    definition: 'words that are written or cut into something, especially a stone or metal monument',
    definition_source: 'cambridge',
    example: 'The inscription on the gravestone was barely legible.',
    definitions: [
      {
        definition: 'words that are written or cut into something, especially a stone or metal monument',
        example: 'The inscription on the gravestone was barely legible.',
        cefr_level: 'C2',
        grammar_note: 'countable noun'
      }
    ],
    extra_examples: [
      'Archaeologists deciphered the ancient Greek inscription.',
      'There was a special inscription in the front of the book.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['inscribe'],
      noun: ['inscription'],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: 'ancient inscription', example: 'The team discovered an ancient inscription in the ruins.' },
      { collocation: 'decipher an inscription', example: 'It took scholars decades to decipher the inscription.' }
    ],
    semantic_field_id: 'writing-archeology',
    semantic_field_label: 'Writing & Archaeology',
    semantic_field_words: [
      { word: 'inscription', cefr: 'C2', register: 'academic' },
      { word: 'cuneiform', cefr: 'C2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'carving', register: 'neutral', cefr: 'B2' },
      { word: 'writing', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-stamp',
    entry_type: 'word',
    word: 'stamp',
    ipa_uk: '/stæmp/',
    ipa_us: '/stæmp/',
    definition: 'to print or mark something with a tool; a tool used for printing or marking',
    definition_source: 'cambridge',
    example: 'The passport officer stamped his passport with a red entry visa.',
    definitions: [
      {
        definition: 'to print or mark something with a tool',
        example: 'The passport officer stamped his passport with a red entry visa.',
        cefr_level: 'B2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'a tool used for printing or marking; the mark made by such a tool',
        example: 'The seal is printed on using a wooden stamp.',
        cefr_level: 'B2',
        grammar_note: 'countable noun'
      }
    ],
    extra_examples: [
      'She stamped the letter and dropped it in the mailbox.',
      'He stamped his foot in frustration.'
    ],
    grammar_note: 'transitive verb / countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['stamp'],
      noun: ['stamp', 'stamping'],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: 'stamp a seal', example: 'The scribe would stamp a seal onto the hot wax.' },
      { collocation: 'stamp of approval', example: 'The project received the final stamp of approval from the board.' }
    ],
    semantic_field_id: 'marking-printing',
    semantic_field_label: 'Marking & Printing',
    semantic_field_words: [
      { word: 'stamp', cefr: 'B2', register: 'neutral' },
      { word: 'emboss', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'mark', register: 'neutral', cefr: 'A2' },
      { word: 'seal', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-cuneiform',
    entry_type: 'word',
    word: 'cuneiform',
    ipa_uk: '/ˈkjuː.nɪ.fɔːm/',
    ipa_us: '/ˈkjuː.ni.fɔːrm/',
    definition: 'relating to the wedge-shaped characters used in ancient writing systems of Mesopotamia (also misspelled as cueinform)',
    definition_source: 'cambridge',
    example: 'The clay tablets were inscribed with cuneiform script.',
    definitions: [
      {
        definition: 'wedge-shaped writing system used in the ancient Middle East',
        example: 'The clay tablets were inscribed with cuneiform script.',
        cefr_level: 'C2',
        grammar_note: 'uncountable noun / adjective'
      }
    ],
    extra_examples: [
      'Early Mesopotamian laws were written in cuneiform.',
      'Cuneiform was written by pressing a stylus into damp clay.'
    ],
    grammar_note: 'uncountable noun / adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['cuneiform'],
      adjective: ['cuneiform'],
      adverb: []
    },
    collocations: [
      { collocation: 'cuneiform tablets', example: 'A huge collection of cuneiform tablets was found in Nineveh.' },
      { collocation: 'cuneiform script', example: 'He is one of the few scholars who can translate cuneiform script.' }
    ],
    semantic_field_id: 'writing-archeology',
    semantic_field_label: 'Writing & Archaeology',
    semantic_field_words: [
      { word: 'cuneiform', cefr: 'C2', register: 'academic' },
      { word: 'inscription', cefr: 'C2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'hieroglyphics', register: 'formal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-excavate',
    entry_type: 'word',
    word: 'excavate',
    ipa_uk: '/ˈek.skə.veɪt/',
    ipa_us: '/ˈek.skə.veɪt/',
    definition: 'to dig a hole or channel in the ground, especially to find ancient remains',
    definition_source: 'cambridge',
    example: 'Archaeologists are excavating an ancient Roman villa.',
    definitions: [
      {
        definition: 'to dig a hole or channel in the ground, especially to find ancient remains',
        example: 'Archaeologists are excavating an ancient Roman villa.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The team plans to excavate the burial mound next spring.',
      'The canal was excavated using heavy machinery.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['excavate'],
      noun: ['excavation', 'excavator'],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: 'excavate a site', example: 'They had to obtain a special permit to excavate the historical site.' },
      { collocation: 'fully excavate', example: 'The tomb was fully excavated by British archaeologists in 1922.' }
    ],
    semantic_field_id: 'archeology-digging',
    semantic_field_label: 'Archaeological Excavation',
    semantic_field_words: [
      { word: 'excavate', cefr: 'C1', register: 'academic' },
      { word: 'unearth', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'dig up', register: 'neutral', cefr: 'B1' },
      { word: 'unearth', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-die-out',
    entry_type: 'phrasal_verb',
    word: 'die out',
    ipa_uk: '/daɪ aʊt/',
    ipa_us: '/daɪ aʊt/',
    definition: 'to become less common and finally stop existing completely',
    definition_source: 'cambridge',
    example: 'Many ancient languages and dialects are dying out due to globalization.',
    definitions: [
      {
        definition: 'to become less common and finally stop existing completely',
        example: 'Many ancient languages and dialects are dying out due to globalization.',
        cefr_level: 'B2',
        grammar_note: 'intransitive phrasal verb'
      }
    ],
    extra_examples: [
      'Dinosaurs died out millions of years ago.',
      'This local custom has completely died out now.'
    ],
    grammar_note: 'intransitive phrasal verb',
    base_verb: 'die',
    particles: 'out',
    conjugations: {
      present_participle: 'dying out',
      past_tense: 'died out',
      past_participle: 'died out'
    },
    related_phrasal_verbs: ['wipe out', 'fade away'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: null,
    collocations: [
      { collocation: 'die out completely', example: 'Without preservation efforts, the rare orchid species could die out completely.' },
      { collocation: 'gradually die out', example: 'Traditional weaving skills are gradually dying out as younger generations move to cities.' }
    ],
    semantic_field_id: 'extinction-disappearance',
    semantic_field_label: 'Extinction & Disappearance',
    semantic_field_words: [
      { word: 'die out', cefr: 'B2', register: 'neutral' },
      { word: 'become extinct', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'disappear', register: 'neutral', cefr: 'A2' },
      { word: 'become extinct', register: 'formal', cefr: 'C1' },
      { word: 'go extinct', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-5', 'folder-3'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-unintelligible',
    entry_type: 'word',
    word: 'unintelligible',
    ipa_uk: '/ˌʌn.ɪnˈtel.ɪ.dʒə.bəl/',
    ipa_us: '/ˌʌn.inˈtel.ə.dʒə.bəl/',
    definition: 'not able to be understood',
    definition_source: 'cambridge',
    example: 'The faded inscriptions on the stone tablet were completely unintelligible.',
    definitions: [
      {
        definition: 'not able to be understood',
        example: 'The faded inscriptions on the stone tablet were completely unintelligible.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'He muttered something unintelligible and walked away.',
      'The recording was noisy and rendered the witness statement unintelligible.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['unintelligibility'],
      adjective: ['unintelligible', 'intelligible'],
      adverb: ['unintelligibly']
    },
    collocations: [
      { collocation: 'completely unintelligible', example: 'The dialect was so thick it was completely unintelligible to outsiders.' },
      { collocation: 'render unintelligible', example: 'Water damage had rendered the letters on the paper unintelligible.' }
    ],
    semantic_field_id: 'clarity-comprehension',
    semantic_field_label: 'Clarity & Comprehension',
    semantic_field_words: [
      { word: 'unintelligible', cefr: 'C2', register: 'formal' },
      { word: 'obscure', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'unclear', register: 'neutral', cefr: 'A2' },
      { word: 'incomprehensible', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-inscribe',
    entry_type: 'word',
    word: 'inscribe',
    ipa_uk: '/ɪnˈskraɪb/',
    ipa_us: '/ɪnˈskraɪb/',
    definition: 'to write or cut words on something, especially a hard surface',
    definition_source: 'cambridge',
    example: 'His name was inscribed on the silver trophy.',
    definitions: [
      {
        definition: 'to write or cut words on something, especially a hard surface',
        example: 'His name was inscribed on the silver trophy.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The jeweler inscribed their wedding date inside the rings.',
      'A message of thanks was inscribed on the commemorative plaque.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['inscribe'],
      noun: ['inscription'],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: 'inscribe with', example: 'The monument was inscribed with the names of fallen soldiers.' },
      { collocation: 'inscribe a name', example: 'He asked the watchmaker to inscribe his initials on the back.' }
    ],
    semantic_field_id: 'writing-archeology',
    semantic_field_label: 'Writing & Archaeology',
    semantic_field_words: [
      { word: 'inscribe', cefr: 'C2', register: 'academic' },
      { word: 'carve', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'carve', register: 'neutral', cefr: 'B2' },
      { word: 'write', register: 'neutral', cefr: 'A1' },
      { word: 'engrave', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-cylinder',
    entry_type: 'word',
    word: 'cylinder',
    ipa_uk: '/ˈsɪl.ɪn.dər/',
    ipa_us: '/ˈsɪl.ɪn.dɚ/',
    definition: 'a solid or hollow tube-shaped object with circular ends',
    definition_source: 'cambridge',
    example: 'The ancient seals were carved on small stone cylinders.',
    definitions: [
      {
        definition: 'a solid or hollow tube-shaped object with circular ends',
        example: 'The ancient seals were carved on small stone cylinders.',
        cefr_level: 'B2',
        grammar_note: 'countable noun'
      }
    ],
    extra_examples: [
      'The engine has four cylinders.',
      'The oxygen was stored in a large steel cylinder.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['cylinder'],
      adjective: ['cylindrical'],
      adverb: []
    },
    collocations: [
      { collocation: 'cylinder seal', example: 'Mesopotamian merchants used cylinder seals to stamp documents.' },
      { collocation: 'cylindrical shape', example: 'The monument had a tall cylindrical shape that stood out in the desert.' }
    ],
    semantic_field_id: 'geometry-shapes',
    semantic_field_label: 'Geometry & Shapes',
    semantic_field_words: [
      { word: 'cylinder', cefr: 'B2', register: 'neutral' },
      { word: 'sphere', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'tube', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-prolific',
    entry_type: 'word',
    word: 'prolific',
    ipa_uk: '/prəˈlɪf.ɪk/',
    ipa_us: '/prəˈlɪf.ɪk/',
    definition: 'producing a great number or amount of something (also misspelled as profilic)',
    definition_source: 'cambridge',
    example: 'He was a prolific writer, producing more than three hundred books in his lifetime.',
    definitions: [
      {
        definition: 'producing a great number or amount of something',
        example: 'He was a prolific writer, producing more than three hundred books in his lifetime.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'Rabbits are prolific breeders.',
      'She had a prolific career in the independent music industry.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['prolificacy'],
      adjective: ['prolific'],
      adverb: ['prolifically']
    },
    collocations: [
      { collocation: 'prolific author', example: 'As a prolific author, she published at least two novels every year.' },
      { collocation: 'highly prolific', example: 'The ecosystem is highly prolific, supporting a diverse array of organisms.' }
    ],
    semantic_field_id: 'abundance-productivity',
    semantic_field_label: 'Abundance & Productivity',
    semantic_field_words: [
      { word: 'prolific', cefr: 'C1', register: 'neutral' },
      { word: 'abundant', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'productive', register: 'neutral', cefr: 'B1' },
      { word: 'fruitful', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-breed',
    entry_type: 'word',
    word: 'breed',
    ipa_uk: '/briːd/',
    ipa_us: '/briːd/',
    definition: 'to cause something to happen, usually something bad; (as a noun) a particular type of person or thing',
    definition_source: 'cambridge',
    example: 'Favouritism breeds resentment in the workplace.',
    definitions: [
      {
        definition: 'to cause something to happen, usually something bad',
        example: 'Favouritism breeds resentment in the workplace.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'a particular type of person or thing',
        example: 'A new breed of entrepreneurs is changing the business landscape.',
        cefr_level: 'C1',
        grammar_note: 'countable noun'
      }
    ],
    extra_examples: [
      'Unemployment breeds crime and social instability.',
      'Dirt and damp breed disease.'
    ],
    grammar_note: 'transitive verb / countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['breed'],
      noun: ['breed', 'breeder', 'breeding'],
      adjective: ['inbred', 'crossbred'],
      adverb: []
    },
    collocations: [
      { collocation: 'breed resentment', example: 'Unequal distribution of resources often breeds resentment among employees.' },
      { collocation: 'breed familiarity', example: 'Some managers avoid close friendships with staff, believing it breeds familiarity and loss of respect.' }
    ],
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [
      { word: 'breed', cefr: 'C1', register: 'neutral' },
      { word: 'precipitate', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'cause', register: 'neutral', cefr: 'A2' },
      { word: 'generate', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-susceptible',
    entry_type: 'word',
    word: 'susceptible',
    ipa_uk: '/səˈsep.tə.bəl/',
    ipa_us: '/səˈsep.tə.bəl/',
    definition: 'easily influenced or harmed by something',
    definition_source: 'cambridge',
    example: 'Adolescents are particularly susceptible to peer pressure.',
    definitions: [
      {
        definition: 'easily influenced or harmed by something',
        example: 'Adolescents are particularly susceptible to peer pressure.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'These plants are highly susceptible to disease and frost.',
      'The economy is susceptible to external market shocks.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['susceptibility'],
      adjective: ['susceptible'],
      adverb: ['susceptibly']
    },
    collocations: [
      { collocation: 'susceptible to', example: 'Older people are more susceptible to infections.' },
      { collocation: 'highly susceptible', example: 'The coastal regions are highly susceptible to flooding.' }
    ],
    semantic_field_id: 'vulnerability',
    semantic_field_label: 'Vulnerability',
    semantic_field_words: [
      { word: 'susceptible', cefr: 'C1', register: 'neutral' },
      { word: 'vulnerable', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'vulnerable', register: 'neutral', cefr: 'B2' },
      { word: 'prone to', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-adolescent',
    entry_type: 'word',
    word: 'adolescent',
    ipa_uk: '/ˌæd.əˈles.ənt/',
    ipa_us: '/ˌæd.əˈles.ənt/',
    definition: 'a young person who is developing into an adult; (as an adjective) relating to adolescents',
    definition_source: 'cambridge',
    example: 'The clinic specializes in adolescent psychiatry.',
    definitions: [
      {
        definition: 'a young person who is developing into an adult',
        example: 'Many adolescents struggle with identity and self-esteem.',
        cefr_level: 'C1',
        grammar_note: 'countable noun'
      },
      {
        definition: 'relating to adolescents or the period of adolescence',
        example: 'The clinic specializes in adolescent psychiatry.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'The book describes the emotional turmoils of adolescent years.',
      'A large group of adolescents gathered outside the cinema.'
    ],
    grammar_note: 'countable noun / adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['adolescent', 'adolescence'],
      adjective: ['adolescent'],
      adverb: []
    },
    collocations: [
      { collocation: 'adolescent development', example: 'Sleep plays a critical role in healthy adolescent development.' },
      { collocation: 'young adolescents', example: 'The study focused on young adolescents aged between twelve and fifteen.' }
    ],
    semantic_field_id: 'youth',
    semantic_field_label: 'Youth & Age Groups',
    semantic_field_words: [
      { word: 'adolescent', cefr: 'C1', register: 'academic' },
      { word: 'youngster', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'teenager', register: 'neutral', cefr: 'A2' },
      { word: 'youth', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-youngster',
    entry_type: 'word',
    word: 'youngster',
    ipa_uk: '/ˈjʌŋ.stər/',
    ipa_us: '/ˈjʌŋ.stɚ/',
    definition: 'a young person, usually an older child or teenager',
    definition_source: 'cambridge',
    example: 'The match attracted youngsters from all over the city.',
    definitions: [
      {
        definition: 'a young person, usually an older child or teenager',
        example: 'The match attracted youngsters from all over the city.',
        cefr_level: 'B2',
        grammar_note: 'countable noun'
      }
    ],
    extra_examples: [
      'The program aims to keep youngsters off the streets and engaged in sports.',
      'Several talented youngsters have joined the first-team squad.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['youngster'],
      adjective: ['young'],
      adverb: []
    },
    collocations: [
      { collocation: 'talented youngsters', example: 'The academy aims to identify and nurture talented youngsters.' },
      { collocation: 'local youngsters', example: 'We organized a sports camp for local youngsters during the summer holidays.' }
    ],
    semantic_field_id: 'youth',
    semantic_field_label: 'Youth & Age Groups',
    semantic_field_words: [
      { word: 'adolescent', cefr: 'C1', register: 'academic' },
      { word: 'youngster', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'child', register: 'neutral', cefr: 'A1' },
      { word: 'youth', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-worsen',
    entry_type: 'word',
    word: 'worsen',
    ipa_uk: '/ˈwɜː.sən/',
    ipa_us: '/ˈwɝː.sən/',
    definition: 'to become worse or to make something worse',
    definition_source: 'cambridge',
    example: 'The economic crisis is expected to worsen in the coming months.',
    definitions: [
      {
        definition: 'to become worse or to make something worse',
        example: 'The economic crisis is expected to worsen in the coming months.',
        cefr_level: 'C1',
        grammar_note: 'transitive/intransitive verb'
      }
    ],
    extra_examples: [
      'A change in the wind direction worsened the forest fire.',
      'Her health has worsened considerably since last week.'
    ],
    grammar_note: 'transitive/intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: ['worsen'],
      noun: [],
      adjective: ['worse', 'worst'],
      adverb: []
    },
    collocations: [
      { collocation: 'worsen the situation', example: 'Adding more fuel to the argument will only worsen the situation.' },
      { collocation: 'steadily worsen', example: 'The weather conditions steadily worsened throughout the afternoon.' }
    ],
    semantic_field_id: 'deterioration',
    semantic_field_label: 'Deterioration',
    semantic_field_words: [
      { word: 'worsen', cefr: 'C1', register: 'neutral' },
      { word: 'deteriorate', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'get worse', register: 'neutral', cefr: 'A2' },
      { word: 'deteriorate', register: 'formal', cefr: 'C1' },
      { word: 'go downhill', register: 'informal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-obesity',
    entry_type: 'word',
    word: 'obesity',
    ipa_uk: '/əʊˈbiː.sə.ti/',
    ipa_us: '/oʊˈbiː.sə.t̬i/',
    definition: 'the fact of being extremely fat, in a way that is dangerous for health',
    definition_source: 'cambridge',
    example: 'Childhood obesity has become a major public health concern.',
    definitions: [
      {
        definition: 'the fact of being extremely fat, in a way that is dangerous for health',
        example: 'Childhood obesity has become a major public health concern.',
        cefr_level: 'C1',
        grammar_note: 'uncountable noun'
      }
    ],
    extra_examples: [
      'The report highlights the link between obesity and heart disease.',
      'A diet high in processed foods is a key contributor to obesity.'
    ],
    grammar_note: 'uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['obesity'],
      adjective: ['obese'],
      adverb: []
    },
    collocations: [
      { collocation: 'childhood obesity', example: 'Combating childhood obesity requires a combination of diet and physical activity.' },
      { collocation: 'combat obesity', example: 'Governments are introducing sugar taxes to help combat obesity.' }
    ],
    semantic_field_id: 'health-disease',
    semantic_field_label: 'Health & Disease',
    semantic_field_words: [
      { word: 'obesity', cefr: 'C1', register: 'academic' },
      { word: 'malnutrition', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'overweightness', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-adversity',
    entry_type: 'word',
    word: 'adversity',
    ipa_uk: '/ədˈvɜː.sə.ti/',
    ipa_us: '/ədˈvɝː.sə.t̬i/',
    definition: 'a difficult or unlucky situation or event',
    definition_source: 'cambridge',
    example: 'She showed great courage in the face of adversity.',
    definitions: [
      {
        definition: 'a difficult or unlucky situation or event',
        example: 'She showed great courage in the face of adversity.',
        cefr_level: 'C1',
        grammar_note: 'noun'
      }
    ],
    extra_examples: [
      'The country has overcome many economic adversities in the past decade.',
      'Road closures and adversities forced the explorers to turn back.'
    ],
    grammar_note: 'uncountable/countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['adversity', 'adversary'],
      adjective: ['adverse'],
      adverb: ['adversely']
    },
    collocations: [
      { collocation: 'face adversity', example: 'It is in how we face adversity that our character is revealed.' },
      { collocation: 'overcome adversity', example: 'To overcome adversity, one must maintain focus and resilience.' }
    ],
    semantic_field_id: 'struggle-resilience',
    semantic_field_label: 'Struggle & Resilience',
    semantic_field_words: [
      { word: 'adversity', cefr: 'C1', register: 'neutral' },
      { word: 'persevere', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'difficulty', register: 'neutral', cefr: 'B1' },
      { word: 'hardship', register: 'formal', cefr: 'C1' },
      { word: 'trouble', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-persevere',
    entry_type: 'word',
    word: 'persevere',
    ipa_uk: '/ˌpɜː.sɪˈvɪər/',
    ipa_us: '/ˌpɝː.səˈvɪr/',
    definition: 'to try to do or continue to do something in a determined way, despite difficulties',
    definition_source: 'cambridge',
    example: 'Despite receiving little support, the researchers persevered with their experiment.',
    definitions: [
      {
        definition: 'to try to do or continue to do something in a determined way, despite difficulties',
        example: 'Despite receiving little support, the researchers persevered with their experiment.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'If you persevere with the training, you will eventually see results.',
      'We must persevere in our efforts to find a peaceful solution.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['persevere'],
      noun: ['perseverance'],
      adjective: ['persevering'],
      adverb: []
    },
    collocations: [
      { collocation: 'persevere in', example: 'She persevered in her studies despite facing financial hardship.' },
      { collocation: 'persevere with', example: 'He persevered with the project despite numerous technical setbacks.' }
    ],
    semantic_field_id: 'struggle-resilience',
    semantic_field_label: 'Struggle & Resilience',
    semantic_field_words: [
      { word: 'adversity', cefr: 'C1', register: 'neutral' },
      { word: 'persevere', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'persist', register: 'formal', cefr: 'C1' },
      { word: 'keep going', register: 'neutral', cefr: 'B1' },
      { word: 'hang in there', register: 'informal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4', 'folder-speaking-work-study'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-revolve-around',
    entry_type: 'phrasal_verb',
    word: 'revolve around',
    ipa_uk: '/rɪˈvɒlv əˈraʊnd/',
    ipa_us: '/rɪˈvɑːlv əˈraʊnd/',
    definition: 'to have someone or something as the main or most important interest or subject',
    definition_source: 'cambridge',
    example: 'The debate revolves around whether the government should subsidize public transit.',
    definitions: [
      {
        definition: 'to have someone or something as the main or most important interest or subject',
        example: 'The debate revolves around whether the government should subsidize public transit.',
        cefr_level: 'C1',
        grammar_note: 'transitive phrasal verb'
      }
    ],
    extra_examples: [
      'Her whole life revolves around her career and professional advancement.',
      'Many discussions in ecology revolve around sustainable development.'
    ],
    grammar_note: 'transitive phrasal verb',
    base_verb: 'revolve',
    particles: 'around',
    conjugations: {
      present_participle: 'revolving around',
      past_tense: 'revolved around',
      past_participle: 'revolved around'
    },
    related_phrasal_verbs: ['center on', 'focus on'],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    collocations: [
      { collocation: 'revolve entirely around', example: 'The conversation revolved entirely around the new policy changes.' },
      { collocation: 'revolve around the concept', example: 'Modern marketing strategies revolve around the concept of user personalization.' }
    ],
    semantic_field_id: 'focus-attention',
    semantic_field_label: 'Focus & Attention',
    semantic_field_words: [
      { word: 'revolve around', cefr: 'C1', register: 'neutral' },
      { word: 'center on', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'focus on', register: 'neutral', cefr: 'B1' },
      { word: 'center on', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Added default database entry.'
  },
  {
    id: 'entry-civilize',
    entry_type: 'word',
    word: 'civilize',
    ipa_uk: '/ˈsɪv.əl.aɪz/',
    ipa_us: '/ˈsɪv.əl.aɪz/',
    definition: 'To educate a society so that its culture and way of life become more advanced.',
    definition_source: 'cambridge',
    example: 'The Romans attempted to civilize the ancient tribes they conquered in northern Europe.',
    definitions: [
      {
        definition: 'To educate a society so that its culture and way of life become more advanced.',
        example: 'The Romans attempted to civilize the ancient tribes they conquered in northern Europe.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To make someone behave in a more polite and reasonable way.',
        example: 'Some believe that exposing young offenders to classical arts can help civilize their behavior.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'It is deeply disturbing to think that such violent conflicts can occur in a civilized society.',
      'Many colonial powers claimed they had a duty to civilize other nations, a concept now widely criticized.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['civilize'],
      noun: ['civilization', 'civility', 'civilizer'],
      adjective: ['civilized', 'civilian', 'civil'],
      adverb: ['civilly']
    },
    semantic_field_id: 'social-development',
    semantic_field_label: 'Social Development',
    semantic_field_words: [
      { word: 'cultivate', cefr: 'C1', register: 'formal' },
      { word: 'refine', cefr: 'B2', register: 'neutral' },
      { word: 'educate', cefr: 'A2', register: 'neutral' },
      { word: 'humanize', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'cultivate', register: 'formal', cefr: 'C1' },
      { word: 'educate', register: 'neutral', cefr: 'A2' },
      { word: 'socialize', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on history, globalization, social development, and community behavior.',
    collocations: [
      { collocation: 'civilize the population', example: 'The Romans attempted to civilize the conquered population.' },
      { collocation: 'help civilize', example: 'Cultural exchange programs help civilize societal interactions.' }
    ],
  },
  {
    id: 'entry-carry-out',
    entry_type: 'phrasal_verb',
    word: 'carry out',
    ipa_uk: '/ˈkæri aʊt/',
    ipa_us: '/ˈkæri aʊt/',
    definition: 'To perform or complete a task, activity, or research.',
    definition_source: 'cambridge',
    example: 'The researchers carried out a series of experiments to determine the toxic effects of the chemical.',
    definitions: [
      {
        definition: 'To perform or complete a task, activity, or research.',
        example: 'The researchers carried out a series of experiments to determine the toxic effects of the chemical.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with carry verb (separable)'
      },
      {
        definition: 'To execute or put into practice (e.g. carry out instructions or a plan).',
        example: 'Soldiers are expected to carry out orders without hesitation.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with carry verb (separable)'
      }
    ],
    extra_examples: [
      'We need to carry out a comprehensive review of our waste management policies.',
      'Local community organizations are carrying out projects to raise awareness about recycling.'
    ],
    grammar_note: 'phrasal verb with carry verb (separable)',
    base_verb: 'carry',
    particles: 'out',
    conjugations: {
      present_participle: 'carrying',
      past_tense: 'carried',
      past_participle: 'carried'
    },
    related_phrasal_verbs: ['look into', 'cope with'],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['carry out'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'action-execution',
    semantic_field_label: 'Action & Execution',
    semantic_field_words: [
      { word: 'perform', cefr: 'B1', register: 'neutral' },
      { word: 'execute', cefr: 'C1', register: 'formal' },
      { word: 'conduct', cefr: 'B2', register: 'formal' },
      { word: 'implement', cefr: 'B2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'perform', register: 'neutral', cefr: 'B1' },
      { word: 'execute', register: 'formal', cefr: 'C1' },
      { word: 'do', register: 'informal', cefr: 'A1' }
    ],
    folder_ids: ['folder-5', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on scientific research and policy execution.',
    collocations: [
      { collocation: 'carry out research', example: 'The university will carry out research into renewable energy sources.' },
      { collocation: 'carry out an order', example: 'Soldiers are expected to carry out orders without hesitation.' }
    ],
  },
  {
    id: 'entry-look-into',
    entry_type: 'phrasal_verb',
    word: 'look into',
    ipa_uk: '/lʊk ˈɪntuː/',
    ipa_us: '/lʊk ˈɪntuː/',
    definition: 'To investigate, examine, or research a matter or situation.',
    definition_source: 'cambridge',
    example: 'The government has promised to look into the complaints regarding the pollution levels near the factory.',
    definitions: [
      {
        definition: 'To investigate or examine the facts about a problem or situation.',
        example: 'The government has promised to look into the complaints regarding the pollution levels near the factory.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with look verb (inseparable)'
      },
      {
        definition: 'To research or explore options before making a decision.',
        example: 'We are looking into the feasibility of switching completely to solar energy next year.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with look verb (inseparable)'
      }
    ],
    extra_examples: [
      'The committee is looking into new strategies to mitigate urban traffic congestion.',
      'Health authorities are looking into the potential link between air pollution and respiratory illnesses.'
    ],
    grammar_note: 'phrasal verb with look verb (inseparable)',
    base_verb: 'look',
    particles: 'into',
    conjugations: {
      present_participle: 'looking',
      past_tense: 'looked',
      past_participle: 'looked'
    },
    related_phrasal_verbs: ['carry out', 'cope with'],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['look into'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'investigation-research',
    semantic_field_label: 'Investigation & Research',
    semantic_field_words: [
      { word: 'investigate', cefr: 'B2', register: 'neutral' },
      { word: 'examine', cefr: 'B1', register: 'neutral' },
      { word: 'scrutinize', cefr: 'C1', register: 'academic' },
      { word: 'probe', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'investigate', register: 'formal', cefr: 'B2' },
      { word: 'check out', register: 'informal', cefr: 'B1' },
      { word: 'examine', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-5', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - investigating social problems and researching green energy.',
    collocations: [
      { collocation: 'attempt to look into', example: 'We must attempt to look into the project issues.' },
      { collocation: 'carefully look into', example: 'You should carefully look into the instructions before starting.' }
    ],
  },
  {
    id: 'entry-cope-with',
    entry_type: 'phrasal_verb',
    word: 'cope with',
    ipa_uk: '/kəʊp wɪð/',
    ipa_us: '/koʊp wɪð/',
    definition: 'To deal successfully with a difficult situation or problem.',
    definition_source: 'cambridge',
    example: 'Developing nations often struggle to cope with the severe economic impacts of natural disasters.',
    definitions: [
      {
        definition: 'To deal successfully with a difficult situation or problem.',
        example: 'Developing nations often struggle to cope with the severe economic impacts of natural disasters.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with cope verb (inseparable)'
      },
      {
        definition: 'To handle emotional or physical stress.',
        example: 'Local communities are learning to cope with the long-term changes in weather patterns.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with cope verb (inseparable)'
      }
    ],
    extra_examples: [
      'Many ecosystems cannot cope with the rapid pace of global temperature rise.',
      'The municipal infrastructure was not built to cope with such extreme flooding events.'
    ],
    grammar_note: 'phrasal verb with cope verb (inseparable)',
    base_verb: 'cope',
    particles: 'with',
    conjugations: {
      present_participle: 'coping',
      past_tense: 'coped',
      past_participle: 'coped'
    },
    related_phrasal_verbs: ['carry out', 'look into'],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['cope with'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'deal-difficulty',
    semantic_field_label: 'Dealing with Difficulty',
    semantic_field_words: [
      { word: 'handle', cefr: 'B2', register: 'neutral' },
      { word: 'tackle', cefr: 'B2', register: 'neutral' },
      { word: 'manage', cefr: 'B1', register: 'neutral' },
      { word: 'withstand', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'deal with', register: 'neutral', cefr: 'B1' },
      { word: 'tackle', register: 'neutral', cefr: 'B2' },
      { word: 'get by', register: 'informal', cefr: 'B2' }
    ],
    folder_ids: ['folder-5', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on how societies and systems handle challenges.',
    collocations: [
      { collocation: 'cope with stress', example: 'Exercise is a proven method to help cope with academic stress.' },
      { collocation: 'cope with demands', example: 'The healthcare system struggled to cope with the demands of the pandemic.' }
    ],
  },
  {
    id: 'entry-contaminate',
    entry_type: 'word',
    word: 'contaminate',
    ipa_uk: '/kənˈtæm.ɪ.neɪt/',
    ipa_us: '/kənˈtæm.ə.neɪt/',
    definition: 'To make something less pure or make it poisonous by adding something dirty or toxic.',
    definition_source: 'cambridge',
    example: 'Industrial chemical runoff has contaminated the local river, making it unsafe for drinking.',
    definitions: [
      {
        definition: 'To make something less pure or make it poisonous by adding something dirty or toxic.',
        example: 'Industrial chemical runoff has contaminated the local river, making it unsafe for drinking.',
        cefr_level: 'B2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To spoil or influence something in a negative way.',
        example: 'The scandal contaminated the public\'s trust in the environmental agency.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'Microplastics have contaminated marine environments, entering the food chain of various species.',
      'Using contaminated water for agricultural irrigation can lead to food safety crises.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['contaminate'],
      noun: ['contamination', 'contaminant'],
      adjective: ['contaminated'],
      adverb: []
    },
    semantic_field_id: 'pollution-ecology',
    semantic_field_label: 'Pollution & Ecology',
    semantic_field_words: [
      { word: 'pollute', cefr: 'B1', register: 'neutral' },
      { word: 'poison', cefr: 'B2', register: 'neutral' },
      { word: 'corrupt', cefr: 'C1', register: 'formal' },
      { word: 'taint', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'pollute', register: 'neutral', cefr: 'B1' },
      { word: 'taint', register: 'formal', cefr: 'C2' },
      { word: 'dirty', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - environmental pollution and industrial waste.',
    collocations: [
      { collocation: 'contaminate water', example: 'Industrial waste can contaminate water supplies for local communities.' },
      { collocation: 'heavily contaminate', example: 'The soil near the old chemical plant was found to be heavily contaminated.' }
    ],
  },
  {
    id: 'entry-deforestation',
    entry_type: 'word',
    word: 'deforestation',
    ipa_uk: '/ˌdiː.fɒr.ɪˈsteɪ.ʃən/',
    ipa_us: '/ˌdiː.fɔːr.əˈsteɪ.ʃən/',
    definition: 'The cutting down of trees in a large area, or the destruction of forests by people.',
    definition_source: 'cambridge',
    example: 'Rapid deforestation in the Amazon rainforest is destroying biodiversity and accelerating climate change.',
    definitions: [
      {
        definition: 'The cutting down of trees in a large area, or the destruction of forests by people.',
        example: 'Rapid deforestation in the Amazon rainforest is destroying biodiversity and accelerating climate change.',
        cefr_level: 'B2',
        grammar_note: 'uncountable noun'
      },
      {
        definition: 'The clearance of forest land for agricultural or industrial use.',
        example: 'Governments must enforce stricter regulations to curb deforestation driven by cattle ranching.',
        cefr_level: 'C1',
        grammar_note: 'uncountable noun'
      }
    ],
    extra_examples: [
      'Deforestation not only threatens wildlife habitats but also leads to severe soil erosion.',
      'To offset the impact of deforestation, reforestation initiatives must be subsidized globally.'
    ],
    grammar_note: 'uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['deforest'],
      noun: ['deforestation'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'habitat-loss',
    semantic_field_label: 'Habitat Loss',
    semantic_field_words: [
      { word: 'clearance', cefr: 'C1', register: 'formal' },
      { word: 'logging', cefr: 'C1', register: 'neutral' },
      { word: 'degradation', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'forest clearing', register: 'neutral', cefr: 'B2' },
      { word: 'logging', register: 'neutral', cefr: 'C1' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussing climate change, logging, and habitat loss.',
    collocations: [
      { collocation: 'combat deforestation', example: 'Global treaties aim to combat deforestation in tropical rainforests.' },
      { collocation: 'widespread deforestation', example: 'Widespread deforestation has led to severe soil erosion and flooding.' }
    ],
  },
  {
    id: 'entry-disposable',
    entry_type: 'word',
    word: 'disposable',
    ipa_uk: '/dɪˈspəʊ.zə.bəl/',
    ipa_us: '/dɪˈspoʊ.zə.bəl/',
    definition: 'An item that is intended to be thrown away after use.',
    definition_source: 'cambridge',
    example: 'The widespread use of disposable plastic bags contributes significantly to environmental pollution.',
    definitions: [
      {
        definition: 'An item that is intended to be thrown away after use.',
        example: 'The widespread use of disposable plastic bags contributes significantly to environmental pollution.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Available for use (especially of money/income).',
        example: 'As people\'s disposable income increases, their consumption of packaged goods also rises.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'Consumers are encouraged to switch from disposable items to reusable containers.',
      'The excessive accumulation of disposable packaging in landfills has created a waste management crisis.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['dispose'],
      noun: ['disposal'],
      adjective: ['disposable'],
      adverb: []
    },
    semantic_field_id: 'waste-management',
    semantic_field_label: 'Waste Management',
    semantic_field_words: [
      { word: 'non-reusable', cefr: 'B2', register: 'neutral' },
      { word: 'biodegradable', cefr: 'C1', register: 'formal' },
      { word: 'waste', cefr: 'A2', register: 'neutral' },
      { word: 'single-use', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'single-use', register: 'neutral', cefr: 'B2' },
      { word: 'throwaway', register: 'informal', cefr: 'C1' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on consumerism, waste, and packaging pollution.',
    collocations: [
      { collocation: 'disposable income', example: 'Families with higher disposable income tend to spend more on leisure activities.' },
      { collocation: 'disposable packaging', example: 'The government is proposing a ban on single-use disposable packaging.' }
    ],
  },
  {
    id: 'entry-offset',
    entry_type: 'word',
    word: 'offset',
    ipa_uk: '/ˌɒfˈset/',
    ipa_us: '/ˌɑːfˈset/',
    definition: 'To balance, counteract, or compensate for something.',
    definition_source: 'cambridge',
    example: 'The company plans to plant thousands of trees to offset its annual carbon emissions.',
    definitions: [
      {
        definition: 'To balance, counteract, or compensate for something.',
        example: 'The company plans to plant thousands of trees to offset its annual carbon emissions.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To compare or weigh one factor against another to achieve balance.',
        example: 'The high costs of renewable energy installations are offset by long-term savings on utility bills.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'Many airlines now offer passengers the option to pay a small fee to offset the carbon footprint of their flight.',
      'The benefits of environmental preservation easily offset the short-term economic gains of logging.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['offset'],
      noun: ['offsetting'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'balance-compensation',
    semantic_field_label: 'Balance & Compensation',
    semantic_field_words: [
      { word: 'compensate', cefr: 'B2', register: 'formal' },
      { word: 'counteract', cefr: 'C1', register: 'formal' },
      { word: 'neutralize', cefr: 'C1', register: 'neutral' },
      { word: 'balance', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'compensate for', register: 'formal', cefr: 'B2' },
      { word: 'make up for', register: 'informal', cefr: 'B2' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - environmental policy, carbon neutral strategies, and green economy.',
    collocations: [
      { collocation: 'offset carbon emissions', example: 'Companies plant trees to offset carbon emissions from their flights.' },
      { collocation: 'offset the cost', example: 'The savings in fuel consumption will quickly offset the cost of the hybrid car.' }
    ],
  },
  {
    id: 'entry-emigrate',
    entry_type: 'word',
    word: 'emigrate',
    ipa_uk: '/ˈem.ɪ.ɡreɪt/',
    ipa_us: '/ˈem.ə.ɡreɪt/',
    definition: 'To leave your own country to go and live permanently in another country.',
    definition_source: 'cambridge',
    example: 'Millions of people emigrated from Europe to America in the nineteenth century.',
    definitions: [
      {
        definition: 'To leave your own country to go and live permanently in another country.',
        example: 'Many high-skilled professionals choose to emigrate in search of better career opportunities and higher standards of living.',
        cefr_level: 'B2',
        grammar_note: 'intransitive verb'
      },
      {
        definition: 'To leave one region or country to settle in another, often due to economic or political factors.',
        example: 'Young graduates emigrating to developed countries can lead to a severe brain drain in their home nations.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The decision to emigrate is often fraught with emotional challenges, as individuals must leave behind their families and cultural roots.',
      'War and economic instability have forced thousands of citizens to emigrate to neighboring countries.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['emigrate'],
      noun: ['emigration', 'emigrant'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'migration-movement',
    semantic_field_label: 'Migration & Movement',
    semantic_field_words: [
      { word: 'migrate', cefr: 'B2', register: 'neutral' },
      { word: 'immigrate', cefr: 'B2', register: 'neutral' },
      { word: 'relocate', cefr: 'C1', register: 'formal' },
      { word: 'resettle', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'migrate', register: 'neutral', cefr: 'B2' },
      { word: 'relocate', register: 'formal', cefr: 'C1' },
      { word: 'move abroad', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussing immigration, brain drain, globalization, and workforce movement.',
    collocations: [
      { collocation: 'emigrate to', example: 'Many young professionals decide to emigrate to countries with better job prospects.' },
      { collocation: 'emigrate in search of', example: 'His grandparents emigrated in search of political stability and safety.' }
    ],
  },
  {
    id: 'entry-escalate',
    entry_type: 'word',
    word: 'escalate',
    ipa_uk: '/ˈes.kə.leɪt/',
    ipa_us: '/ˈes.kə.leɪt/',
    definition: 'To make or become greater or more serious, or to increase rapidly.',
    definition_source: 'cambridge',
    example: 'The dispute between the two neighbors quickly escalated into a formal legal battle.',
    definitions: [
      {
        definition: 'To become or make something become greater or more serious.',
        example: 'The political tension between the two countries could escalate into a major military conflict.',
        cefr_level: 'C1',
        grammar_note: 'intransitive/transitive verb'
      },
      {
        definition: 'To increase rapidly or rise, especially in price, cost, or intensity.',
        example: 'Escalating wedding costs have forced many couples to opt for simpler, more intimate ceremonies.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The government is taking measures to prevent the escalating cost of living from causing widespread poverty.',
      'If housing prices continue to escalate in metropolitan areas, it will create a severe crisis for young workers.'
    ],
    grammar_note: 'intransitive/transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['escalate'],
      noun: ['escalation'],
      adjective: ['escalating'],
      adverb: []
    },
    semantic_field_id: 'increase-intensify',
    semantic_field_label: 'Increase & Intensification',
    semantic_field_words: [
      { word: 'intensify', cefr: 'C1', register: 'formal' },
      { word: 'exacerbate', cefr: 'C1', register: 'academic' },
      { word: 'aggravate', cefr: 'C1', register: 'formal' },
      { word: 'soar', cefr: 'C1', register: 'neutral' },
      { word: 'rocket', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'increase', register: 'neutral', cefr: 'A2' },
      { word: 'intensify', register: 'formal', cefr: 'C1' },
      { word: 'grow rapidly', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussing rising living expenses, costs, and international disputes.',
    collocations: [
      { collocation: 'escalate tensions', example: 'The deployment of troops served to escalate tensions along the border.' },
      { collocation: 'escalate rapidly', example: 'What began as a minor dispute escalated rapidly into a major conflict.' }
    ],
  },
  {
    id: 'entry-disturbing',
    entry_type: 'word',
    word: 'disturbing',
    ipa_uk: '/dɪˈstɜː.bɪŋ/',
    ipa_us: '/dɪˈstɝː.bɪŋ/',
    definition: 'Making you feel worried, upset, or shocked.',
    definition_source: 'cambridge',
    example: 'The report revealed some deeply disturbing facts about the rise in youth unemployment.',
    definitions: [
      {
        definition: 'Making you feel worried, upset, or shocked.',
        example: 'The report revealed some deeply disturbing facts about the rise in youth unemployment.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Interrupting a quiet, peaceful, or normal state or situation.',
        example: 'It was disturbing to hear loud construction noises in the middle of the night.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'The video contains disturbing images of the accident that viewers may find upsetting.',
      'There has been a disturbing increase in the number of cases of cyberbullying recently.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: ['disturb'],
      noun: ['disturbance', 'disturber'],
      adjective: ['disturbed', 'disturbing'],
      adverb: ['disturbingly']
    },
    semantic_field_id: 'worry-concern',
    semantic_field_label: 'Worry & Concern',
    semantic_field_words: [
      { word: 'concerning', cefr: 'B2', register: 'neutral' },
      { word: 'distressing', cefr: 'C1', register: 'formal' },
      { word: 'troubling', cefr: 'C1', register: 'formal' },
      { word: 'perturbing', cefr: 'C2', register: 'academic' },
      { word: 'upsetting', cefr: 'B2', register: 'neutral' },
      { word: 'alarm', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'worrying', register: 'neutral', cefr: 'B2' },
      { word: 'troubling', register: 'formal', cefr: 'C1' },
      { word: 'upsetting', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussing social issues and negative developments.',
    collocations: [
      { collocation: 'deeply disturbing', example: 'The committee found the reports of child labor deeply disturbing.' },
      { collocation: 'disturbing trend', example: 'There is a disturbing trend of increasing mental stress among teenagers.' }
    ],
  },
  // --- LAW & LEGISLATION ---
  {
    id: 'entry-innate',
    entry_type: 'word',
    word: 'innate',
    ipa_uk: '/ɪˈneɪt/',
    ipa_us: '/ɪˈneɪt/',
    definition: 'An innate quality or ability is one that you were born with, not one you have learned.',
    definition_source: 'cambridge',
    example: 'Some researchers argue that humans have an innate capacity for language acquisition.',
    definitions: [
      {
        definition: 'An innate quality or ability is one that you were born with, not one you have learned.',
        example: 'Some researchers argue that humans have an innate capacity for language acquisition.',
        cefr_level: 'C1',
        grammar_note: 'adjective, usually before noun'
      },
      {
        definition: 'Existing as a natural or basic part of something; not acquired or developed.',
        example: 'The innate conservatism of large institutions makes radical reform extremely difficult.',
        cefr_level: 'C2',
        grammar_note: 'adjective, formal'
      }
    ],
    extra_examples: [
      'There is ongoing debate about whether moral reasoning is innate or culturally conditioned.',
      'Her innate curiosity made her an exceptional scientist from an early age.'
    ],
    grammar_note: 'adjective, usually before noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['innateness'],
      adjective: ['innate'],
      adverb: ['innately']
    },
    semantic_field_id: 'human-nature-psychology',
    semantic_field_label: 'Human Nature & Psychology',
    semantic_field_words: [
      { word: 'instinctive', cefr: 'C1', register: 'academic' },
      { word: 'inherent', cefr: 'C1', register: 'formal' },
      { word: 'inborn', cefr: 'C1', register: 'academic' },
      { word: 'intrinsic', cefr: 'C1', register: 'academic' },
      { word: 'congenital', cefr: 'C2', register: 'academic' },
      { word: 'disposition', cefr: 'C1', register: 'academic' },
      { word: 'temperament', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'inborn', register: 'neutral', cefr: 'C1' },
      { word: 'inherent', register: 'formal', cefr: 'C1' },
      { word: 'natural', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Reading - nature vs nurture debate.',
    collocations: [
      { collocation: 'significant innate', example: 'There has been a significant innate observed in recent statistics.' },
      { collocation: 'underlying innate', example: 'We must identify the underlying innate of this phenomenon.' }
    ],
  },

  {
    id: 'entry-humiliate',
    entry_type: 'word',
    word: 'humiliate',
    ipa_uk: '/hjuːˈmɪl.i.eɪt/',
    ipa_us: '/hjuːˈmɪl.i.eɪt/',
    definition: 'To make someone feel ashamed or lose their dignity, especially in front of other people.',
    definition_source: 'cambridge',
    example: 'The manager humiliated his employees by criticising them in front of their colleagues.',
    definitions: [
      {
        definition: 'To make someone feel ashamed or lose their dignity, especially in front of other people.',
        example: 'The manager humiliated his employees by criticising them in front of their colleagues.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To damage the pride or reputation of a person, group, or nation.',
        example: 'The election result humiliated the ruling party and forced the prime minister to resign.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb, often passive'
      }
    ],
    extra_examples: [
      'She felt deeply humiliated by the way her complaint had been dismissed without consideration.',
      'Publicly humiliating offenders is widely regarded as a violation of human dignity.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: ['humiliate'],
      noun: ['humiliation', 'humility'],
      adjective: ['humiliated', 'humiliating', 'humiliatory'],
      adverb: ['humiliatingly']
    },
    semantic_field_id: 'emotions-shame',
    semantic_field_label: 'Emotions & Shame',
    semantic_field_words: [
      { word: 'embarrass', cefr: 'B1', register: 'neutral' },
      { word: 'degrade', cefr: 'C1', register: 'formal' },
      { word: 'demean', cefr: 'C1', register: 'formal' },
      { word: 'mortify', cefr: 'C2', register: 'literary' },
      { word: 'shame', cefr: 'B2', register: 'neutral' },
      { word: 'belittle', cefr: 'C1', register: 'formal' },
      { word: 'condescend', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'embarrass', register: 'neutral', cefr: 'B1' },
      { word: 'degrade', register: 'formal', cefr: 'C1' },
      { word: 'put down', register: 'informal', cefr: 'B2' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - workplace ethics and power dynamics.',
    collocations: [
      { collocation: 'strongly humiliate', example: 'The evidence seems to strongly humiliate our initial hypothesis.' },
      { collocation: 'help humiliate', example: 'Implementing this policy will help humiliate the current situation.' }
    ],
  },

  {
    id: 'entry-affair',
    entry_type: 'word',
    word: 'affair',
    ipa_uk: '/əˈfeər/',
    ipa_us: '/əˈfer/',
    definition: 'An event, situation, or series of events of a particular kind.',
    definition_source: 'cambridge',
    example: 'The state funeral was a solemn affair attended by dignitaries from over sixty countries.',
    definitions: [
      {
        definition: 'An event, situation, or series of events of a particular kind.',
        example: 'The state funeral was a solemn affair attended by dignitaries from over sixty countries.',
        cefr_level: 'B2',
        grammar_note: 'noun, countable'
      },
      {
        definition: 'A sexual relationship between two people, usually when at least one of them is married to someone else.',
        example: 'The scandal broke when a newspaper revealed the minister had been having an affair.',
        cefr_level: 'B2',
        grammar_note: 'noun, countable'
      },
      {
        definition: 'Affairs: matters of public or private life, especially those relating to business or politics.',
        example: 'The minister of foreign affairs called an emergency press conference.',
        cefr_level: 'C1',
        grammar_note: 'noun, plural — affairs'
      }
    ],
    extra_examples: [
      'The company\'s financial affairs were found to be in considerable disorder.',
      'Domestic affairs dominated the early months of the new administration.',
      'She described the awards ceremony as a rather dull affair.'
    ],
    grammar_note: 'noun, countable; plural: affairs',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['affair', 'affairs'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'social-events-situations',
    semantic_field_label: 'Social Events & Situations',
    semantic_field_words: [
      { word: 'matter', cefr: 'B1', register: 'neutral' },
      { word: 'incident', cefr: 'B2', register: 'neutral' },
      { word: 'episode', cefr: 'C1', register: 'neutral' },
      { word: 'scandal', cefr: 'B2', register: 'journalism' },
      { word: 'liaison', cefr: 'C1', register: 'formal' },
      { word: 'circumstance', cefr: 'B2', register: 'formal' },
      { word: 'proceedings', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'thing', register: 'informal', cefr: 'B1' },
      { word: 'matter', register: 'neutral', cefr: 'B1' },
      { word: 'concern', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Reading - political and social contexts.',
    collocations: [
      { collocation: 'significant affair', example: 'There has been a significant affair observed in recent statistics.' },
      { collocation: 'underlying affair', example: 'We must identify the underlying affair of this phenomenon.' }
    ],
  },

  {
    id: 'entry-adequate',
    entry_type: 'word',
    word: 'adequate',
    ipa_uk: '/ˈæd.ɪ.kwət/',
    ipa_us: '/ˈæd.ɪ.kwət/',
    definition: 'Enough or satisfactory for a particular purpose.',
    definition_source: 'cambridge',
    example: 'The report concluded that existing regulations were not adequate to prevent another financial crisis.',
    definitions: [
      {
        definition: 'Enough or satisfactory for a particular purpose.',
        example: 'The report concluded that existing regulations were not adequate to prevent another financial crisis.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Acceptable but not particularly good; meeting a minimum standard.',
        example: 'Her performance was adequate but lacked the originality the role demanded.',
        cefr_level: 'B2',
        grammar_note: 'adjective, sometimes implies criticism'
      }
    ],
    extra_examples: [
      'Access to adequate healthcare remains a significant challenge in rural areas.',
      'Authorities must ensure that all residents have adequate shelter during the winter months.',
      'The funding provided was barely adequate to cover the basic operational costs.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['adequacy'],
      adjective: ['adequate', 'inadequate'],
      adverb: ['adequately', 'inadequately']
    },
    semantic_field_id: 'quantity-sufficiency',
    semantic_field_label: 'Quantity & Sufficiency',
    semantic_field_words: [
      { word: 'sufficient', cefr: 'B2', register: 'formal' },
      { word: 'satisfactory', cefr: 'B1', register: 'neutral' },
      { word: 'deficient', cefr: 'C1', register: 'formal' },
      { word: 'insufficient', cefr: 'B2', register: 'formal' },
      { word: 'ample', cefr: 'C1', register: 'formal' },
      { word: 'scarce', cefr: 'B2', register: 'neutral' },
      { word: 'substantial', cefr: 'B2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'enough', register: 'informal', cefr: 'A2' },
      { word: 'sufficient', register: 'formal', cefr: 'B2' },
      { word: 'satisfactory', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - social policy and resource allocation.',
    collocations: [
      { collocation: 'highly adequate', example: 'This approach is highly adequate for achieving academic success.' },
      { collocation: 'particularly adequate', example: 'The case study was particularly adequate to our research question.' }
    ],
  },

  // --- LAW & LEGISLATION ---
  {
    id: 'entry-amend',
    entry_type: 'word',
    word: 'amend',
    ipa_uk: '/əˈmend/',
    ipa_us: '/əˈmend/',
    definition: 'To change the words of a text, especially a law or a legal document.',
    definition_source: 'cambridge',
    example: 'In 2021, parliament voted to amend the constitution to limit presidential terms.',
    definitions: [
      {
        definition: 'To change the words of a text, especially a law or a legal document.',
        example: 'In 2021, parliament voted to amend the constitution to limit presidential terms.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To improve or correct something (e.g. amend a situation or behavior).',
        example: 'Until you amend your ways, you will not be allowed back in the house.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The terms of the contract can only be amended by mutual agreement in writing.',
      'We reserves the right to amend these regulations at any time without notice.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'legal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['amend'],
      noun: ['amendment'],
      adjective: ['amendable'],
      adverb: []
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'repeal', cefr: 'C2', register: 'legal' },
      { word: 'legislate', cefr: 'C1', register: 'formal' },
      { word: 'enact', cefr: 'C1', register: 'formal' },
      { word: 'ratify', cefr: 'C2', register: 'legal' },
      { word: 'revoke', cefr: 'C1', register: 'formal' },
      { word: 'clause', cefr: 'B2', register: 'legal' },
      { word: 'provision', cefr: 'C1', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'modify', register: 'neutral', cefr: 'B2' },
      { word: 'alter', register: 'academic', cefr: 'C1' },
      { word: 'mod', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-1', 'folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - Essay on constitutional reforms.',
    collocations: [
      { collocation: 'strongly amend', example: 'The evidence seems to strongly amend our initial hypothesis.' },
      { collocation: 'help amend', example: 'Implementing this policy will help amend the current situation.' }
    ],
  },
  {
    id: 'entry-repeal',
    entry_type: 'word',
    word: 'repeal',
    ipa_uk: '/rɪˈpiːl/',
    ipa_us: '/rɪˈpiːl/',
    definition: 'If a government repeals a law, it causes that law no longer to have any legal force.',
    definition_source: 'cambridge',
    example: 'The committee recommended that the government repeal the controversial housing tax.',
    extra_examples: [
      'The act was repealed by a subsequent statute passed in 1998.',
      'Protesters gathered outside the legislative assembly, demanding the immediate repeal of the bill.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'legal',
    formality_score: 5,
    connotation: 'neutral',
    word_family: {
      verb: ['repeal'],
      noun: ['repeal'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'legislate', cefr: 'C1', register: 'formal' },
      { word: 'enact', cefr: 'C1', register: 'formal' },
      { word: 'ratify', cefr: 'C2', register: 'legal' },
      { word: 'revoke', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'cancel', register: 'neutral', cefr: 'B1' },
      { word: 'abolish', register: 'formal', cefr: 'C1' },
      { word: 'scrap', register: 'informal', cefr: 'C1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Reading passage on social reforms in 19th-century England.',
    collocations: [
      { collocation: 'strongly repeal', example: 'The evidence seems to strongly repeal our initial hypothesis.' },
      { collocation: 'help repeal', example: 'Implementing this policy will help repeal the current situation.' }
    ],
  },
  {
    id: 'entry-legislate',
    entry_type: 'word',
    word: 'legislate',
    ipa_uk: '/ˈledʒ.ɪ.sleɪt/',
    ipa_us: '/ˈledʒ.ə.sleɪt/',
    definition: 'To make a law or laws.',
    definition_source: 'cambridge',
    example: 'It is very difficult to legislate against discrimination without public awareness campaigns.',
    extra_examples: [
      'The government has promised to legislate to protect consumer rights online.',
      'You cannot legislate for good taste.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['legislate'],
      noun: ['legislation', 'legislator', 'legislature'],
      adjective: ['legislative'],
      adverb: ['legislatively']
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'repeal', cefr: 'C2', register: 'legal' },
      { word: 'enact', cefr: 'C1', register: 'formal' },
      { word: 'provision', cefr: 'C1', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'make laws', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic article on civil governance.',
    collocations: [
      { collocation: 'strongly legislate', example: 'The evidence seems to strongly legislate our initial hypothesis.' },
      { collocation: 'help legislate', example: 'Implementing this policy will help legislate the current situation.' }
    ],
  },
  {
    id: 'entry-enact',
    entry_type: 'word',
    word: 'enact',
    ipa_uk: '/ɪˈnækt/',
    ipa_us: '/ɪˈnækt/',
    definition: 'To put a law into action; to make a bill into a law.',
    definition_source: 'cambridge',
    example: 'The legislature is expected to enact the clean water bill by the end of this session.',
    extra_examples: [
      'A package of economic reforms was enacted last spring.',
      'The regulations were enacted in response to public outcry over industrial accidents.'
    ],
    grammar_note: 'usually passive, transitive',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['enact'],
      noun: ['enactment'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'repeal', cefr: 'C2', register: 'legal' },
      { word: 'legislate', cefr: 'C1', register: 'formal' },
      { word: 'ratify', cefr: 'C2', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'pass', register: 'neutral', cefr: 'A2' },
      { word: 'approve', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Law textbook chapter on statutory implementation.',
    collocations: [
      { collocation: 'closely associated with enact', example: 'This concept is closely associated with enact in literature.' },
      { collocation: 'direct impact of enact', example: 'We studied the direct impact of enact on the ecosystem.' }
    ],
  },
  {
    id: 'entry-ratify',
    entry_type: 'word',
    word: 'ratify',
    ipa_uk: '/ˈræt.ɪ.faɪ/',
    ipa_us: '/ˈræt.ə.faɪ/',
    definition: 'To make an agreement official, by signing it or formally voting for it.',
    definition_source: 'cambridge',
    example: 'The treaty was signed in Paris but has yet to be ratified by all member nations.',
    extra_examples: [
      'The assembly voted overwhelmingly to ratify the new constitution.',
      'We need at least two-thirds of the states to ratify the amendment.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'legal',
    formality_score: 5,
    connotation: 'neutral',
    word_family: {
      verb: ['ratify'],
      noun: ['ratification'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'repeal', cefr: 'C2', register: 'legal' },
      { word: 'enact', cefr: 'C1', register: 'formal' },
      { word: 'clause', cefr: 'B2', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'approve', register: 'neutral', cefr: 'B1' },
      { word: 'confirm', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'UN news broadcast regarding climate agreements.',
    collocations: [
      { collocation: 'strongly ratify', example: 'The evidence seems to strongly ratify our initial hypothesis.' },
      { collocation: 'help ratify', example: 'Implementing this policy will help ratify the current situation.' }
    ],
  },
  {
    id: 'entry-revoke',
    entry_type: 'word',
    word: 'revoke',
    ipa_uk: '/rɪˈvəʊk/',
    ipa_us: '/rɪˈvoʊk/',
    definition: 'To say officially that an agreement, permission, a law, etc. is no longer in effect.',
    definition_source: 'cambridge',
    example: 'The license of the restaurant was revoked after it failed consecutive health inspections.',
    extra_examples: [
      'The government revoked his citizenship due to fraudulent claims.',
      'Their privileges were instantly revoked following the security breach.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['revoke'],
      noun: ['revocation'],
      adjective: ['revocable', 'irrevocable'],
      adverb: ['irrevocably']
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'repeal', cefr: 'C2', register: 'legal' },
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'clause', cefr: 'B2', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'cancel', register: 'neutral', cefr: 'B1' },
      { word: 'withdraw', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'News report on corporate permit violations.',
    collocations: [
      { collocation: 'strongly revoke', example: 'The evidence seems to strongly revoke our initial hypothesis.' },
      { collocation: 'help revoke', example: 'Implementing this policy will help revoke the current situation.' }
    ],
  },
  {
    id: 'entry-clause',
    entry_type: 'word',
    word: 'clause',
    ipa_uk: '/klɔːz/',
    ipa_us: '/klɑːz/',
    definition: 'A particular part of a written legal document, for example a contract.',
    definition_source: 'cambridge',
    example: 'The penalty clause in the lease states that we lose our deposit if we leave early.',
    extra_examples: [
      'She insisted on adding a confidentiality clause to the employment agreement.',
      'Under clause 4 of the constitution, the council has the power to veto decisions.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'legal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['clause'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'provision', cefr: 'C1', register: 'legal' },
      { word: 'ratify', cefr: 'C2', register: 'legal' }
    ],
    register_synonyms: [
      { word: 'section', register: 'neutral', cefr: 'B1' },
      { word: 'part', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Reading lease documents for a new apartment.',
    collocations: [
      { collocation: 'significant clause', example: 'There has been a significant clause observed in recent statistics.' },
      { collocation: 'underlying clause', example: 'We must identify the underlying clause of this phenomenon.' }
    ],
  },
  {
    id: 'entry-provision',
    entry_type: 'word',
    word: 'provision',
    ipa_uk: '/prəˈvɪʒ.ən/',
    ipa_us: '/prəˈvɪʒ.ən/',
    definition: 'A statement within an agreement or a law that a particular thing must happen or be done.',
    definition_source: 'cambridge',
    example: 'We have made a provision in our business plan for unexpected marketing expenses.',
    extra_examples: [
      'The treaty contains special provisions regarding the status of refugees.',
      'Under the provisions of the Act, local authorities must provide housing assistance.'
    ],
    grammar_note: 'countable/uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'legal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['provision'],
      noun: ['provision'],
      adjective: ['provisional'],
      adverb: ['provisionally']
    },
    semantic_field_id: 'law-legislation',
    semantic_field_label: 'Law & Legislation',
    semantic_field_words: [
      { word: 'clause', cefr: 'B2', register: 'legal' },
      { word: 'amend', cefr: 'C1', register: 'legal' },
      { word: 'legislate', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'rule', register: 'neutral', cefr: 'A2' },
      { word: 'condition', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-1', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic essay prep on public policy structures.',
    collocations: [
      { collocation: 'significant provision', example: 'There has been a significant provision observed in recent statistics.' },
      { collocation: 'underlying provision', example: 'We must identify the underlying provision of this phenomenon.' }
    ],
  },

  // --- QUANTITY & ABUNDANCE ---
  {
    id: 'entry-abundance',
    entry_type: 'word',
    word: 'abundance',
    ipa_uk: '/əˈbʌn.dəns/',
    ipa_us: '/əˈbʌn.dəns/',
    definition: 'The situation in which there is more than enough of something.',
    definition_source: 'cambridge',
    example: 'There was an abundance of fresh food at the market, showcasing the fertile soils of the valley.',
    extra_examples: [
      'This region is blessed with an abundance of natural resources, including gas and coal.',
      'The book contains an abundance of illustrations that clarify the scientific formulas.'
    ],
    grammar_note: 'singular/uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['abound'],
      noun: ['abundance'],
      adjective: ['abundant'],
      adverb: ['abundantly']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundant', cefr: 'C1', register: 'formal' },
      { word: 'abound', cefr: 'C2', register: 'formal' },
      { word: 'abundantly', cefr: 'C1', register: 'formal' },
      { word: 'scarcity', cefr: 'C1', register: 'academic' },
      { word: 'surplus', cefr: 'B2', register: 'business' },
      { word: 'deficit', cefr: 'C1', register: 'business' },
      { word: 'sufficiency', cefr: 'C2', register: 'academic' },
      { word: 'excess', cefr: 'B2', register: 'neutral' },
      { word: 'dearth', cefr: 'C2', register: 'literary' },
      { word: 'profusion', cefr: 'C2', register: 'literary' }
    ],
    register_synonyms: [
      { word: 'a lot of', register: 'neutral', cefr: 'A1' },
      { word: 'a bunch of', register: 'informal', cefr: 'A2' },
      { word: 'a great deal of', register: 'academic', cefr: 'B2' },
      { word: 'plethora', register: 'formal', cefr: 'C2' },
      { word: 'myriad', register: 'literary', cefr: 'C2' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Reading paragraph about South American agriculture.',
    collocations: [
      { collocation: 'significant abundance', example: 'There has been a significant abundance observed in recent statistics.' },
      { collocation: 'underlying abundance', example: 'We must identify the underlying abundance of this phenomenon.' }
    ],
  },
  {
    id: 'entry-abundant',
    entry_type: 'word',
    word: 'abundant',
    ipa_uk: '/əˈbʌn.dənt/',
    ipa_us: '/əˈbʌn.dənt/',
    definition: 'Existing or occurring in large quantities; overflowing and more than sufficient.',
    definition_source: 'cambridge',
    example: 'Cheap, abundant energy is essential for driving industrial expansion in developing economies.',
    extra_examples: [
      'Rainfall is abundant in the southern part of the island, supporting rainforests.',
      'We have abundant evidence to show that this pedagogical approach works.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['abound'],
      noun: ['abundance'],
      adjective: ['abundant'],
      adverb: ['abundantly']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'abound', cefr: 'C2', register: 'formal' },
      { word: 'abundantly', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'plentiful', register: 'neutral', cefr: 'B2' },
      { word: 'lots of', register: 'informal', cefr: 'A1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Essay on renewable energy sources.',
    collocations: [
      { collocation: 'highly abundant', example: 'This approach is highly abundant for achieving academic success.' },
      { collocation: 'particularly abundant', example: 'The case study was particularly abundant to our research question.' }
    ],
  },
  {
    id: 'entry-abound',
    entry_type: 'word',
    word: 'abound',
    ipa_uk: '/əˈbaʊnd/',
    ipa_us: '/əˈbaʊnd/',
    definition: 'To exist in large numbers or amounts.',
    definition_source: 'cambridge',
    example: 'Rumors abound regarding the resignation of the minister, but no official statement has been made.',
    extra_examples: [
      'The forests here abound with wildlife, including rare birds and bears.',
      'Fish abound in the cold waters of the North Sea.'
    ],
    grammar_note: 'intransitive verb (usually followed by "with" or "in")',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['abound'],
      noun: ['abundance'],
      adjective: ['abundant'],
      adverb: ['abundantly']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'abundant', cefr: 'C1', register: 'formal' },
      { word: 'abundantly', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'be full of', register: 'neutral', cefr: 'B1' },
      { word: 'be teeming with', register: 'literary', cefr: 'C2' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic reading passage on oceanic biodiversity.',
    collocations: [
      { collocation: 'strongly abound', example: 'The evidence seems to strongly abound our initial hypothesis.' },
      { collocation: 'help abound', example: 'Implementing this policy will help abound the current situation.' }
    ],
  },
  {
    id: 'entry-abundantly',
    entry_type: 'word',
    word: 'abundantly',
    ipa_uk: '/əˈbʌn.dənt.li/',
    ipa_us: '/əˈbʌn.dənt.li/',
    definition: 'Extremely; or in large quantities.',
    definition_source: 'cambridge',
    example: 'He made it abundantly clear that he would not accept any modifications to the original proposal.',
    extra_examples: [
      'Wild flowers grew abundantly along the roadside, bringing color to the landscape.',
      'The report abundantly documents the failure of the government to control inflation.'
    ],
    grammar_note: 'adverb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['abound'],
      noun: ['abundance'],
      adjective: ['abundant'],
      adverb: ['abundantly']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'abundant', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'extremely', register: 'neutral', cefr: 'B1' },
      { word: 'very', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Writing Task 2 sample essay on business negotiations.',
    collocations: [
      { collocation: 'strongly abundantly', example: 'The evidence seems to strongly abundantly our initial hypothesis.' },
      { collocation: 'help abundantly', example: 'Implementing this policy will help abundantly the current situation.' }
    ],
  },
  {
    id: 'entry-dearth',
    entry_type: 'word',
    word: 'dearth',
    ipa_uk: '/dɜːθ/',
    ipa_us: '/dɝːθ/',
    definition: 'An amount or supply of something that is not enough; a lack of something.',
    definition_source: 'cambridge',
    example: 'There is a dearth of reliable statistics on the prevalence of this disease in rural regions.',
    extra_examples: [
      'The expansion of the tech industry is hampered by a dearth of skilled programmers.',
      'Due to the economic recession, there is a dearth of affordable housing.'
    ],
    grammar_note: 'singular noun (usually followed by "of")',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'literary',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['dearth'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'scarcity', cefr: 'C1', register: 'academic' },
      { word: 'deficit', cefr: 'C1', register: 'business' }
    ],
    register_synonyms: [
      { word: 'lack', register: 'neutral', cefr: 'B1' },
      { word: 'shortage', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic journal article on labor market trends.',
    collocations: [
      { collocation: 'significant dearth', example: 'There has been a significant dearth observed in recent statistics.' },
      { collocation: 'underlying dearth', example: 'We must identify the underlying dearth of this phenomenon.' }
    ],
  },
  {
    id: 'entry-scarcity',
    entry_type: 'word',
    word: 'scarcity',
    ipa_uk: '/ˈskeə.sə.ti/',
    ipa_us: '/ˈsker.sə.t̬i/',
    definition: 'A situation in which something is not easy to find or get.',
    definition_source: 'cambridge',
    example: 'A scarcity of grain during the drought led to a dramatic increase in bread prices.',
    extra_examples: [
      'In economists\' terms, scarcity exists because human wants exceed resources.',
      'Water scarcity affects more than 40 percent of the global population.'
    ],
    grammar_note: 'countable/uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['scarcity', 'scarcefulness'],
      adjective: ['scarce'],
      adverb: ['scarcely']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'dearth', cefr: 'C2', register: 'literary' },
      { word: 'deficit', cefr: 'C1', register: 'business' }
    ],
    register_synonyms: [
      { word: 'shortage', register: 'neutral', cefr: 'B2' },
      { word: 'undersupply', register: 'business', cefr: 'C1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - Environmental problems and water availability.',
    collocations: [
      { collocation: 'significant scarcity', example: 'There has been a significant scarcity observed in recent statistics.' },
      { collocation: 'underlying scarcity', example: 'We must identify the underlying scarcity of this phenomenon.' }
    ],
  },
  {
    id: 'entry-surplus',
    entry_type: 'word',
    word: 'surplus',
    ipa_uk: '/ˈsɜː.pləs/',
    ipa_us: '/ˈsɝː.pləs/',
    definition: 'An amount that is extra or more than what is needed.',
    definition_source: 'cambridge',
    example: 'The government recorded a budget surplus of £3 billion in the last fiscal quarter.',
    extra_examples: [
      'We are looking for ways to distribute our agricultural surplus to developing nations.',
      'Any surplus energy generated by the solar panels is fed back into the national grid.'
    ],
    grammar_note: 'countable/uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'business',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['surplus'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'deficit', cefr: 'C1', register: 'business' },
      { word: 'excess', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'extra', register: 'neutral', cefr: 'A2' },
      { word: 'leftover', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Economic news article.',
    collocations: [
      { collocation: 'significant surplus', example: 'There has been a significant surplus observed in recent statistics.' },
      { collocation: 'underlying surplus', example: 'We must identify the underlying surplus of this phenomenon.' }
    ],
  },
  {
    id: 'entry-deficit',
    entry_type: 'word',
    word: 'deficit',
    ipa_uk: '/ˈdef.ɪ.sɪt/',
    ipa_us: '/ˈdef.ə.sɪt/',
    definition: 'The amount by which money spent is more than money received.',
    definition_source: 'cambridge',
    example: 'The nation is running a massive trade deficit with its main trading partners.',
    extra_examples: [
      'We must cut administrative spending to reduce the public deficit.',
      'The company has a pension deficit of nearly £40 million.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'business',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['deficit'],
      adjective: ['deficient'],
      adverb: ['deficiently']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'surplus', cefr: 'B2', register: 'business' },
      { word: 'scarcity', cefr: 'C1', register: 'academic' },
      { word: 'dearth', cefr: 'C2', register: 'literary' }
    ],
    register_synonyms: [
      { word: 'shortfall', register: 'neutral', cefr: 'C1' },
      { word: 'loss', register: 'neutral', cefr: 'A2' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Lecture notes on macroeconomics.',
    collocations: [
      { collocation: 'significant deficit', example: 'There has been a significant deficit observed in recent statistics.' },
      { collocation: 'underlying deficit', example: 'We must identify the underlying deficit of this phenomenon.' }
    ],
  },
  {
    id: 'entry-sufficiency',
    entry_type: 'word',
    word: 'sufficiency',
    ipa_uk: '/səˈfɪʃ.ən.si/',
    ipa_us: '/səˈfɪʃ.ən.si/',
    definition: 'An amount of something that is enough for a particular purpose.',
    definition_source: 'cambridge',
    example: 'We must ensure a sufficiency of food and clean water supplies before winter begins.',
    extra_examples: [
      'The evidence is not yet of a sufficiency to secure a conviction in court.',
      'Our primary goal is to achieve self-sufficiency in wheat production.'
    ],
    grammar_note: 'uncountable noun (often with "of")',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['suffice'],
      noun: ['sufficiency'],
      adjective: ['sufficient'],
      adverb: ['sufficiently']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'scarcity', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'adequacy', register: 'neutral', cefr: 'C1' },
      { word: 'enough', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Review paper on regional crop security.',
    collocations: [
      { collocation: 'significant sufficiency', example: 'There has been a significant sufficiency observed in recent statistics.' },
      { collocation: 'underlying sufficiency', example: 'We must identify the underlying sufficiency of this phenomenon.' }
    ],
  },
  {
    id: 'entry-excess',
    entry_type: 'word',
    word: 'excess',
    ipa_uk: '/ɪkˈses/',
    ipa_us: '/ɪkˈses/',
    definition: 'An amount that is more than acceptable, expected, or useful.',
    definition_source: 'cambridge',
    example: 'An excess of fat in one\'s diet can lead to heart disease and high blood pressure.',
    extra_examples: [
      'The project was delayed, resulting in costs far in excess of the original budget.',
      'We must clear out the excess stock before the new inventory arrives next week.'
    ],
    grammar_note: 'singular/uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: ['exceed'],
      noun: ['excess'],
      adjective: ['excessive'],
      adverb: ['excessively']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'surplus', cefr: 'B2', register: 'business' }
    ],
    register_synonyms: [
      { word: 'too much', register: 'neutral', cefr: 'A1' },
      { word: 'overkill', register: 'informal', cefr: 'C2' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS writing prep: essay on consumerism.',
    collocations: [
      { collocation: 'significant excess', example: 'There has been a significant excess observed in recent statistics.' },
      { collocation: 'underlying excess', example: 'We must identify the underlying excess of this phenomenon.' }
    ],
  },
  {
    id: 'entry-profusion',
    entry_type: 'word',
    word: 'profusion',
    ipa_uk: '/prəˈfjuː.ʒən/',
    ipa_us: '/prəˈfjuː.ʒən/',
    definition: 'An extremely large amount of something.',
    definition_source: 'cambridge',
    example: 'In spring, the meadows are covered in a profusion of colorful wild flowers.',
    extra_examples: [
      'The novelist writes with a profusion of details that brings the historical setting to life.',
      'A profusion of scientific articles has been published on this specific enzyme.'
    ],
    grammar_note: 'singular noun (usually followed by "of")',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'literary',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['profusion'],
      adjective: ['profuse'],
      adverb: ['profusely']
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'dearth', cefr: 'C2', register: 'literary' }
    ],
    register_synonyms: [
      { word: 'abundance', register: 'formal', cefr: 'C1' },
      { word: 'wealth', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Descriptive writing task practice.',
    collocations: [
      { collocation: 'significant profusion', example: 'There has been a significant profusion observed in recent statistics.' },
      { collocation: 'underlying profusion', example: 'We must identify the underlying profusion of this phenomenon.' }
    ],
  },
  {
    id: 'entry-plethora',
    entry_type: 'word',
    word: 'plethora',
    ipa_uk: '/ˈpleθ.ər.ə/',
    ipa_us: '/ˈpleθ.ɚ.ə/',
    definition: 'A very large amount of something, especially a larger amount than you need, want, or can deal with.',
    definition_source: 'cambridge',
    example: 'The report presents a plethora of facts and figures, which can be overwhelming for readers.',
    extra_examples: [
      'There is a plethora of choices for digital streaming platforms today.',
      'Students are faced with a plethora of regulations when applying for research grants.'
    ],
    grammar_note: 'singular noun (followed by "of")',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['plethora'],
      adjective: ['plethoric'],
      adverb: []
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'excess', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'a lot of', register: 'neutral', cefr: 'A1' },
      { word: 'glut', register: 'business', cefr: 'C2' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic essay review - sentence complexity.',
    collocations: [
      { collocation: 'significant plethora', example: 'There has been a significant plethora observed in recent statistics.' },
      { collocation: 'underlying plethora', example: 'We must identify the underlying plethora of this phenomenon.' }
    ],
  },
  {
    id: 'entry-myriad',
    entry_type: 'word',
    word: 'myriad',
    ipa_uk: '/ˈmɪr.i.əd/',
    ipa_us: '/ˈmɪr.i.əd/',
    definition: 'A very large number of something.',
    definition_source: 'cambridge',
    example: 'A myriad of stars lit up the clear night sky over the remote observatory.',
    extra_examples: [
      'There are myriad ways to approach this mathematical problem.',
      'The administration is trying to simplify the myriad procedures for visa applications.'
    ],
    grammar_note: 'noun or adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'literary',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['myriad'],
      adjective: ['myriad'],
      adverb: []
    },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'profusion', cefr: 'C2', register: 'literary' }
    ],
    register_synonyms: [
      { word: 'thousands', register: 'neutral', cefr: 'A2' },
      { word: 'countless', register: 'neutral', cefr: 'C1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Advanced descriptive essay.',
    collocations: [
      { collocation: 'significant myriad', example: 'There has been a significant myriad observed in recent statistics.' },
      { collocation: 'underlying myriad', example: 'We must identify the underlying myriad of this phenomenon.' }
    ],
  },

  // --- ECONOMIC & SYSTEM MODIFICATION ---
  {
    id: 'entry-alter',
    entry_type: 'word',
    word: 'alter',
    ipa_uk: '/ˈɒl.tər/',
    ipa_us: '/ˈɑːl.tɚ/',
    definition: 'To change something, usually slightly, or to cause the characteristics of something to change.',
    definition_source: 'cambridge',
    example: 'Rising temperatures will alter the migration patterns of many bird species.',
    extra_examples: [
      'We had to alter our plans when the flights were cancelled.',
      'The tailor altered the jacket to make it fit better.'
    ],
    grammar_note: 'transitive/intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['alter'],
      noun: ['alteration'],
      adjective: ['alterable', 'unalterable'],
      adverb: ['unalterably']
    },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'modify', cefr: 'B2', register: 'neutral' },
      { word: 'modulate', cefr: 'C2', register: 'formal' },
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'change', register: 'neutral', cefr: 'A2' },
      { word: 'amend', register: 'legal', cefr: 'C1' },
      { word: 'mod', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing - Essay on climate change consequences.',
    collocations: [
      { collocation: 'strongly alter', example: 'The evidence seems to strongly alter our initial hypothesis.' },
      { collocation: 'help alter', example: 'Implementing this policy will help alter the current situation.' }
    ],
  },
  {
    id: 'entry-modify',
    entry_type: 'word',
    word: 'modify',
    ipa_uk: '/ˈmɒd.ɪ.faɪ/',
    ipa_us: '/ˈmɑː.də.faɪ/',
    definition: 'To change something such as a plan, opinion, law, or behavior, often to improve it or make it more acceptable.',
    definition_source: 'cambridge',
    example: 'We had to modify the software program to make it compatible with older hardware.',
    extra_examples: [
      'The database allows users to modify their personal profiles at any time.',
      'The government was forced to modify its tax proposal after strong opposition from business groups.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['modify'],
      noun: ['modification', 'modifier'],
      adjective: ['modifiable'],
      adverb: []
    },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'alter', cefr: 'C1', register: 'academic' },
      { word: 'modulate', cefr: 'C2', register: 'formal' },
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'change', register: 'neutral', cefr: 'A2' },
      { word: 'amend', register: 'legal', cefr: 'C1' },
      { word: 'mod', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Computer science reading passage.',
    collocations: [
      { collocation: 'strongly modify', example: 'The evidence seems to strongly modify our initial hypothesis.' },
      { collocation: 'help modify', example: 'Implementing this policy will help modify the current situation.' }
    ],
  },
  {
    id: 'entry-modulate',
    entry_type: 'word',
    word: 'modulate',
    ipa_uk: '/ˈmɒd.jə.leɪt/',
    ipa_us: '/ˈmɑː.dʒə.leɪt/',
    definition: 'To control or adjust something, such as voice, sound, or intensity, so that it is suitable.',
    definition_source: 'cambridge',
    example: 'The nervous system works to modulate heart rate in response to physical activity.',
    extra_examples: [
      'Radio waves are modulated to carry information, such as voice signals.',
      'He modulated his voice, lowering it to a soft whisper to avoid being overheard.'
    ],
    grammar_note: 'transitive/intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['modulate'],
      noun: ['modulation', 'modulator'],
      adjective: ['modulatory'],
      adverb: []
    },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'alter', cefr: 'C1', register: 'academic' },
      { word: 'modify', cefr: 'B2', register: 'neutral' },
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'adjust', register: 'neutral', cefr: 'B2' },
      { word: 'regulate', register: 'academic', cefr: 'C1' }
    ],
    folder_ids: ['folder-2'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Medical lecture on neurophysiology.',
    collocations: [
      { collocation: 'strongly modulate', example: 'The evidence seems to strongly modulate our initial hypothesis.' },
      { collocation: 'help modulate', example: 'Implementing this policy will help modulate the current situation.' }
    ],
  },
  {
    id: 'entry-reform',
    entry_type: 'word',
    word: 'reform',
    ipa_uk: '/rɪˈfɔːm/',
    ipa_us: '/rɪˈfɔːrm/',
    definition: 'To make an improvement, especially by changing a person\'s behavior or the structure of an organization.',
    definition_source: 'cambridge',
    example: 'The new prime minister promised to reform the healthcare system to reduce waiting times.',
    extra_examples: [
      'We need to reform the tax system to make it fairer for low-income families.',
      'After his release from prison, he dedicated his life to reforming young offenders.'
    ],
    grammar_note: 'transitive/intransitive verb or noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: ['reform'],
      noun: ['reform', 'reformation', 'reformer'],
      adjective: ['reformist'],
      adverb: []
    },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'alter', cefr: 'C1', register: 'academic' },
      { word: 'modify', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'improve', register: 'neutral', cefr: 'B1' },
      { word: 'restructure', register: 'business', cefr: 'C1' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Politics essay writing.',
    collocations: [
      { collocation: 'strongly reform', example: 'The evidence seems to strongly reform our initial hypothesis.' },
      { collocation: 'help reform', example: 'Implementing this policy will help reform the current situation.' }
    ],
  },

  // --- ENVIRONMENT & ECOLOGY ---
  {
    id: 'entry-mitigate',
    entry_type: 'word',
    word: 'mitigate',
    ipa_uk: '/ˈmɪt.ɪ.ɡeɪt/',
    ipa_us: '/ˈmɪt̬.ə.ɡeɪt/',
    definition: 'To make something less harmful, unpleasant, or bad.',
    definition_source: 'cambridge',
    example: 'Soil conservation techniques can mitigate the destructive effects of erosion on agricultural lands.',
    extra_examples: [
      'We can mitigate environmental damage by investing in carbon capture technologies.',
      'The company took emergency steps to mitigate the financial damage caused by the security breach.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['mitigate'],
      noun: ['mitigation'],
      adjective: ['mitigating', 'mitigatable'],
      adverb: []
    },
    semantic_field_id: 'environment-climate',
    semantic_field_label: 'Environment & Climate',
    semantic_field_words: [
      { word: 'degradation', cefr: 'C1', register: 'academic' },
      { word: 'sustainability', cefr: 'B2', register: 'neutral' },
      { word: 'deplete', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'ease', register: 'neutral', cefr: 'B2' },
      { word: 'alleviate', register: 'formal', cefr: 'C1' },
      { word: 'dampen', register: 'informal', cefr: 'C2' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing - Essay topic: Climate change solutions.',
    collocations: [
      { collocation: 'strongly mitigate', example: 'The evidence seems to strongly mitigate our initial hypothesis.' },
      { collocation: 'help mitigate', example: 'Implementing this policy will help mitigate the current situation.' }
    ],
  },
  {
    id: 'entry-degradation',
    entry_type: 'word',
    word: 'degradation',
    ipa_uk: '/ˌdeɡ.rəˈdeɪ.ʃən/',
    ipa_us: '/ˌdeɡ.rəˈdeɪ.ʃən/',
    definition: 'The process in which the beauty or quality of something is destroyed or spoiled.',
    definition_source: 'cambridge',
    example: 'Deforestation causes severe land degradation and contributes significantly to loss of habitat.',
    extra_examples: [
      'We must take steps to halt environmental degradation before species become extinct.',
      'Plastic pollution is leading to the degradation of our marine ecosystems.'
    ],
    grammar_note: 'uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['degrade'],
      noun: ['degradation'],
      adjective: ['degradable', 'degraded'],
      adverb: []
    },
    semantic_field_id: 'environment-climate',
    semantic_field_label: 'Environment & Climate',
    semantic_field_words: [
      { word: 'mitigate', cefr: 'C1', register: 'academic' },
      { word: 'sustainability', cefr: 'B2', register: 'neutral' },
      { word: 'deplete', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'spoilage', register: 'neutral', cefr: 'C2' },
      { word: 'ruin', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Environmental Science textbook chapter.',
    collocations: [
      { collocation: 'significant degradation', example: 'There has been a significant degradation observed in recent statistics.' },
      { collocation: 'underlying degradation', example: 'We must identify the underlying degradation of this phenomenon.' }
    ],
  },
  {
    id: 'entry-sustainability',
    entry_type: 'word',
    word: 'sustainability',
    ipa_uk: '/səˌsteɪ.nəˈbɪl.ə.ti/',
    ipa_us: '/səˌsteɪ.nəˈbɪl.ə.t̬i/',
    definition: 'The quality of being able to continue over a period of time, especially by not harming the environment.',
    definition_source: 'cambridge',
    example: 'The company has integrated ecological sustainability into its core manufacturing processes.',
    extra_examples: [
      'Urban planners must focus on sustainability when designing new residential districts.',
      'The long-term economic sustainability of the project is questionable due to rising raw material costs.'
    ],
    grammar_note: 'uncountable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: ['sustain'],
      noun: ['sustainability'],
      adjective: ['sustainable'],
      adverb: ['sustainably']
    },
    semantic_field_id: 'environment-climate',
    semantic_field_label: 'Environment & Climate',
    semantic_field_words: [
      { word: 'mitigate', cefr: 'C1', register: 'academic' },
      { word: 'degradation', cefr: 'C1', register: 'academic' },
      { word: 'deplete', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'durability', register: 'neutral', cefr: 'C1' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Corporate social responsibility report.',
    collocations: [
      { collocation: 'significant sustainability', example: 'There has been a significant sustainability observed in recent statistics.' },
      { collocation: 'underlying sustainability', example: 'We must identify the underlying sustainability of this phenomenon.' }
    ],
  },
  {
    id: 'entry-deplete',
    entry_type: 'word',
    word: 'deplete',
    ipa_uk: '/dɪˈpliːt/',
    ipa_us: '/dɪˈpliːt/',
    definition: 'To reduce something in size or amount, especially supplies of energy, money, etc.',
    definition_source: 'cambridge',
    example: 'Overfishing has depleted cod populations in the North Atlantic to critical levels.',
    extra_examples: [
      'If we continue to deplete our financial reserves, we will face bankruptcy by year-end.',
      'We must find alternative materials before we completely deplete our rare earth metal supplies.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['deplete'],
      noun: ['depletion'],
      adjective: ['deleted'], // standard fallback or matching
      adverb: []
    },
    semantic_field_id: 'environment-climate',
    semantic_field_label: 'Environment & Climate',
    semantic_field_words: [
      { word: 'mitigate', cefr: 'C1', register: 'academic' },
      { word: 'degradation', cefr: 'C1', register: 'academic' },
      { word: 'sustainability', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'drain', register: 'neutral', cefr: 'B2' },
      { word: 'run down', register: 'informal', cefr: 'C1' }
    ],
    folder_ids: ['folder-3'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic essay on natural resource exploitation.',
    collocations: [
      { collocation: 'strongly deplete', example: 'The evidence seems to strongly deplete our initial hypothesis.' },
      { collocation: 'help deplete', example: 'Implementing this policy will help deplete the current situation.' }
    ],
  },

  // --- PHRASAL VERBS (BASE VERB "PUT") ---
  {
    id: 'entry-put-something-down-to',
    entry_type: 'phrasal_verb',
    word: 'put something down to',
    ipa_uk: '/pʊt ˈdaʊn tuː/',
    ipa_us: '/pʊt ˈdaʊn tuː/',
    definition: 'To think that a problem or situation is caused by a particular thing.',
    definition_source: 'cambridge',
    example: 'She put her failure down to bad luck, rather than a lack of preparation.',
    extra_examples: [
      'I put his irritability down to tiredness after the long flight.',
      'The company\'s sudden growth was put down to aggressive online marketing campaign.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'down to',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put off', 'put up', 'put through', 'put away', 'put forward'],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'attribute to', register: 'academic', cefr: 'C1' },
      { word: 'blame on', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Listening passage - student speaking about exam performance.',
    collocations: [
      { collocation: 'attempt to put something down to', example: 'We must attempt to put something down to the project issues.' },
      { collocation: 'carefully put something down to', example: 'You should carefully put something down to the instructions before starting.' }
    ],
  },
  {
    id: 'entry-put-off',
    entry_type: 'phrasal_verb',
    word: 'put off',
    ipa_uk: '/pʊt ɒf/',
    ipa_us: '/pʊt ɑːf/',
    definition: 'To decide or arrange to do something at a later time.',
    definition_source: 'cambridge',
    example: 'I can\'t put off going to the dentist any longer; my tooth hurts terribly.',
    extra_examples: [
      'The meeting has been put off until next Tuesday due to schedule conflicts.',
      'Never put off until tomorrow what you can do today.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'off',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put something down to', 'put up', 'put through', 'put away', 'put forward'],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 2,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'postpone', register: 'formal', cefr: 'B2' },
      { word: 'delay', register: 'neutral', cefr: 'B1' },
      { word: 'procrastinate', register: 'academic', cefr: 'C1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'General speaking practice.',
    collocations: [
      { collocation: 'attempt to put off', example: 'We must attempt to put off the project issues.' },
      { collocation: 'carefully put off', example: 'You should carefully put off the instructions before starting.' }
    ],
  },
  {
    id: 'entry-put-up',
    entry_type: 'phrasal_verb',
    word: 'put up',
    ipa_uk: '/pʊt ʌp/',
    ipa_us: '/pʊt ʌp/',
    definition: 'To build something, or to increase the price of something.',
    definition_source: 'cambridge',
    example: 'They are putting up several high-rise office blocks near the central station.',
    extra_examples: [
      'The landlord has decided to put up our rent by ten percent.',
      'We put up a tent in the forest for the night.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'up',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put something down to', 'put off', 'put through', 'put away', 'put forward'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 2,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'construct', register: 'formal', cefr: 'B2' },
      { word: 'increase', register: 'neutral', cefr: 'A2' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Housing discussion topic.',
    collocations: [
      { collocation: 'attempt to put up', example: 'We must attempt to put up the project issues.' },
      { collocation: 'carefully put up', example: 'You should carefully put up the instructions before starting.' }
    ],
  },
  {
    id: 'entry-put-through',
    entry_type: 'phrasal_verb',
    word: 'put through',
    ipa_uk: '/pʊt θruː/',
    ipa_us: '/pʊt θruː/',
    definition: 'To connect a person using a telephone to the person they want to speak to.',
    definition_source: 'cambridge',
    example: 'Could you put me through to the admissions department, please?',
    extra_examples: [
      'I\'m putting you through to technical support now.',
      'The operator refused to put him through without an extension number.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'through',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put something down to', 'put off', 'put up', 'put away', 'put forward'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 2,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'connect', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Business telephone conversation.',
    collocations: [
      { collocation: 'attempt to put through', example: 'We must attempt to put through the project issues.' },
      { collocation: 'carefully put through', example: 'You should carefully put through the instructions before starting.' }
    ],
  },
  {
    id: 'entry-put-away',
    entry_type: 'phrasal_verb',
    word: 'put away',
    ipa_uk: '/pʊt əˈweɪ/',
    ipa_us: '/pʊt əˈweɪ/',
    definition: 'To place something in the location where it is usually stored when not in use.',
    definition_source: 'cambridge',
    example: 'Please put away your books and clean your desks before leaving the room.',
    extra_examples: [
      'He put his computer away in the drawer and locked it.',
      'The children were told to put away their toys.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'away',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put something down to', 'put off', 'put up', 'put through', 'put forward'],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 2,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'store', register: 'neutral', cefr: 'B1' },
      { word: 'tidy up', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Daily speech patterns.',
    collocations: [
      { collocation: 'attempt to put away', example: 'We must attempt to put away the project issues.' },
      { collocation: 'carefully put away', example: 'You should carefully put away the instructions before starting.' }
    ],
  },
  {
    id: 'entry-put-forward',
    entry_type: 'phrasal_verb',
    word: 'put forward',
    ipa_uk: '/pʊt ˈfɔː.wəd/',
    ipa_us: '/pʊt ˈfɔːr.wɚd/',
    definition: 'To state an idea or opinion, or to suggest a plan or person for consideration.',
    definition_source: 'cambridge',
    example: 'Several interesting theories have been put forward to explain the disappearance of the species.',
    extra_examples: [
      'The department put forward a detailed budget proposal for the upcoming project.',
      'He has been put forward as a candidate for the executive board.'
    ],
    grammar_note: 'phrasal verb with put verb (separable)',
    base_verb: 'put',
    particles: 'forward',
    conjugations: {
      present_participle: 'putting',
      past_tense: 'put',
      past_participle: 'put'
    },
    related_phrasal_verbs: ['put something down to', 'put off', 'put up', 'put through', 'put away'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'cause-effect',
    semantic_field_label: 'Cause & Effect',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'propose', register: 'formal', cefr: 'B2' },
      { word: 'suggest', register: 'neutral', cefr: 'A2' },
      { word: 'posit', register: 'academic', cefr: 'C2' }
    ],
    folder_ids: ['folder-5', 'folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - Structuring arguments.',
    collocations: [
      { collocation: 'attempt to put forward', example: 'We must attempt to put forward the project issues.' },
      { collocation: 'carefully put forward', example: 'You should carefully put forward the instructions before starting.' }
    ],
  },

  // --- IDIOMS ---
  {
    id: 'entry-burn-the-midnight-oil',
    entry_type: 'idiom',
    word: 'burn the midnight oil',
    ipa_uk: '/bɜːn ðə ˌmɪd.naɪt ˈɔɪl/',
    ipa_us: '/bɝːn ðə ˌmɪd.naɪt ˈɔɪl/',
    definition: 'To work or study late into the night.',
    definition_source: 'cambridge',
    example: 'I had to burn the midnight oil for three nights in a row to complete the economics thesis.',
    extra_examples: [
      'If you want to pass the bar exam, you will need to burn the midnight oil.',
      'Lawyers were burning the midnight oil to prepare the trial documents before Monday.'
    ],
    grammar_note: 'figurative verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'informal',
    formality_score: 2,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'academic-study',
    semantic_field_label: 'Academic Study & Effort',
    semantic_field_words: [
      { word: 'pay attention', cefr: 'A2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'work late', register: 'neutral', cefr: 'A2' },
      { word: 'study overnight', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-5', 'folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Speaking test topic: Study habits at university.',
    collocations: [
      { collocation: 'attempt to burn the midnight oil', example: 'We must attempt to burn the midnight oil the project issues.' },
      { collocation: 'carefully burn the midnight oil', example: 'You should carefully burn the midnight oil the instructions before starting.' }
    ],
  },
  {
    id: 'entry-hit-the-nail-on-the-head',
    entry_type: 'idiom',
    word: 'hit the nail on the head',
    ipa_uk: '/hɪt ðə neɪl ɒn ðə hed/',
    ipa_us: '/hɪt ðə neɪl ɑːn ðə hed/',
    definition: 'To describe exactly what is causing a situation or problem.',
    definition_source: 'cambridge',
    example: 'Your explanation of the budget shortfall really hit the nail on the head.',
    extra_examples: [
      'The marketing survey hit the nail on the head regarding current consumer preferences.',
      'She hit the nail on the head when she said the business is failing because of customer service.'
    ],
    grammar_note: 'figurative verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'informal',
    formality_score: 2,
    connotation: 'positive',
    word_family: null,
    semantic_field_id: 'communication-clarity',
    semantic_field_label: 'Communication Clarity',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'be accurate', register: 'neutral', cefr: 'B1' },
      { word: 'be precise', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Speaking Part 3 - Expressing agreement with the interviewer.',
    collocations: [
      { collocation: 'attempt to hit the nail on the head', example: 'We must attempt to hit the nail on the head the project issues.' },
      { collocation: 'carefully hit the nail on the head', example: 'You should carefully hit the nail on the head the instructions before starting.' }
    ],
  },

  // --- COLLOCATIONS ---
  {
    id: 'entry-make-a-decision',
    entry_type: 'collocation',
    word: 'make a decision',
    ipa_uk: '/meɪk ə dɪˈsɪʒ.ən/',
    ipa_us: '/meɪk ə dɪˈsɪʒ.ən/',
    definition: 'To choose something after thinking about the options available.',
    definition_source: 'cambridge',
    example: 'We need to make a decision on whether to expand our operations overseas by Friday.',
    extra_examples: [
      'It is difficult to make a rational decision when you are under severe stress.',
      'The board of directors is meeting today to make a final decision.'
    ],
    grammar_note: 'verb + noun collocation',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'action-decisions',
    semantic_field_label: 'Action & Decisions',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'decide', register: 'neutral', cefr: 'A2' },
      { word: 'resolve', register: 'formal', cefr: 'C1' },
      { word: 'make up mind', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Business essay vocabulary.',
    collocations: [
      { collocation: 'attempt to make a decision', example: 'We must attempt to make a decision the project issues.' },
      { collocation: 'carefully make a decision', example: 'You should carefully make a decision the instructions before starting.' }
    ],
  },
  {
    id: 'entry-strong-argument',
    entry_type: 'collocation',
    word: 'strong argument',
    ipa_uk: '/strɒŋ ˈɑː.ɡjə.mənt/',
    ipa_us: '/strɑːŋ ˈɑːr.ɡjə.mənt/',
    definition: 'A convincing or persuasive reason given to support an opinion or plan.',
    definition_source: 'cambridge',
    example: 'There is a strong argument for raising tax rates on high-income corporations.',
    extra_examples: [
      'The researcher presented a strong argument against the privatization of water.',
      'We must build a strong argument to convince the investors to fund the project.'
    ],
    grammar_note: 'adjective + noun collocation',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'argumentation',
    semantic_field_label: 'Argumentation & Debate',
    semantic_field_words: [
      { word: 'draw a conclusion', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'compelling argument', register: 'academic', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 structure templates.',
    collocations: [
      { collocation: 'attempt to strong argument', example: 'We must attempt to strong argument the project issues.' },
      { collocation: 'carefully strong argument', example: 'You should carefully strong argument the instructions before starting.' }
    ],
  },
  {
    id: 'entry-pay-attention',
    entry_type: 'collocation',
    word: 'pay attention',
    ipa_uk: '/peɪ əˈten.ʃən/',
    ipa_us: '/peɪ əˈten.ʃən/',
    definition: 'To watch, listen to, or think about something carefully.',
    definition_source: 'cambridge',
    example: 'Candidates must pay attention to the word counts specified in the IELTS exam instructions.',
    extra_examples: [
      'The government failed to pay attention to warnings about rising inflation.',
      'You should pay close attention to your pronunciation during the speaking test.'
    ],
    grammar_note: 'verb + noun collocation',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'A2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'academic-study',
    semantic_field_label: 'Academic Study & Effort',
    semantic_field_words: [
      { word: 'burn the midnight oil', cefr: 'C2', register: 'informal' }
    ],
    register_synonyms: [
      { word: 'focus on', register: 'neutral', cefr: 'B1' },
      { word: 'heed', register: 'literary', cefr: 'C2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Exam tips.',
    collocations: [
      { collocation: 'attempt to pay attention', example: 'We must attempt to pay attention the project issues.' },
      { collocation: 'carefully pay attention', example: 'You should carefully pay attention the instructions before starting.' }
    ],
  },
  {
    id: 'entry-draw-a-conclusion',
    entry_type: 'collocation',
    word: 'draw a conclusion',
    ipa_uk: '/drɔː ə kənˈkluː.ʒən/',
    ipa_us: '/drɑː ə kənˈkluː.ʒən/',
    definition: 'To make a judgment or decision based on the information or evidence available.',
    definition_source: 'cambridge',
    example: 'It is too early to draw a definitive conclusion from these preliminary test results.',
    extra_examples: [
      'From the survey responses, we can draw the conclusion that customer service needs improvement.',
      'We should avoid drawing conclusions based on anecdotal evidence.'
    ],
    grammar_note: 'verb + noun collocation',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'argumentation',
    semantic_field_label: 'Argumentation & Debate',
    semantic_field_words: [
      { word: 'strong argument', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'conclude', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic writing guidance.',
    collocations: [
      { collocation: 'attempt to draw a conclusion', example: 'We must attempt to draw a conclusion the project issues.' },
      { collocation: 'carefully draw a conclusion', example: 'You should carefully draw a conclusion the instructions before starting.' }
    ],
  },
  {
    id: 'entry-alleviate',
    entry_type: 'word',
    word: 'alleviate',
    ipa_uk: '/əˈliː.vi.eɪt/',
    ipa_us: '/əˈliː.vi.eɪt/',
    definition: 'To make something bad such as pain or problems less severe.',
    definition_source: 'cambridge',
    example: 'The new bypass road was constructed to alleviate heavy traffic congestion in the city center.',
    extra_examples: [
      'A range of reforms was introduced to alleviate poverty in industrial centers.',
      'These measures will help alleviate pressure on public hospitals.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['alleviate'],
      noun: ['alleviation'],
      adjective: ['alleviating', 'alleviative'],
      adverb: []
    },
    semantic_field_id: 'environment-climate', // loosely connected or can represent general easing
    semantic_field_label: 'Environment & Climate',
    semantic_field_words: [
      { word: 'mitigate', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'ease', register: 'neutral', cefr: 'B2' },
      { word: 'lessen', register: 'neutral', cefr: 'B2' },
      { word: 'reduce', register: 'neutral', cefr: 'A2' }
    ],
    folder_ids: ['folder-3', 'folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Essay on urban development challenges.',
    collocations: [
      { collocation: 'strongly alleviate', example: 'The evidence seems to strongly alleviate our initial hypothesis.' },
      { collocation: 'help alleviate', example: 'Implementing this policy will help alleviate the current situation.' }
    ],
  },
  {
    id: 'entry-conundrum',
    entry_type: 'word',
    word: 'conundrum',
    ipa_uk: '/kəˈnʌn.drəm/',
    ipa_us: '/kəˈnʌn.drəm/',
    definition: 'A problem that is difficult to deal with.',
    definition_source: 'cambridge',
    example: 'How to reduce the budget deficit without raising taxation is a major political conundrum.',
    extra_examples: [
      'The ethical conundrum of genetic editing has sparked international debates.',
      'Planners are faced with a conundrum: expand transit routes or limit suburban growth.'
    ],
    grammar_note: 'countable noun',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    word_family: {
      verb: [],
      noun: ['conundrum'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'mental-effort',
    semantic_field_label: 'Mental Effort',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'puzzle', register: 'neutral', cefr: 'B2' },
      { word: 'dilemma', register: 'academic', cefr: 'C1' },
      { word: 'tough spot', register: 'informal', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic essay on social planning problems.',
    collocations: [
      { collocation: 'significant conundrum', example: 'There has been a significant conundrum observed in recent statistics.' },
      { collocation: 'underlying conundrum', example: 'We must identify the underlying conundrum of this phenomenon.' }
    ],
  },
  {
    id: 'entry-ubiquitous',
    entry_type: 'word',
    word: 'ubiquitous',
    ipa_uk: '/juːˈbɪk.wɪ.təs/',
    ipa_us: '/juːˈbɪk.wə.t̬əs/',
    definition: 'Seeming to be in all places at the same time; present everywhere.',
    definition_source: 'cambridge',
    example: 'Mobile phones are now ubiquitous in modern society, altering how we communicate.',
    extra_examples: [
      'The ubiquitous advertising billboards in the city center create visual clutter.',
      'Fast food restaurants have become a ubiquitous feature of urban landscapes.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['ubiquity', 'ubiquitousness'],
      adjective: ['ubiquitous'],
      adverb: ['ubiquitously']
    },
    semantic_field_id: 'frequency-presence',
    semantic_field_label: 'Frequency & Presence',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'everywhere', register: 'neutral', cefr: 'A2' },
      { word: 'widespread', register: 'neutral', cefr: 'B2' },
      { word: 'all over the place', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Essay on modern technology impact.',
    collocations: [
      { collocation: 'highly ubiquitous', example: 'This approach is highly ubiquitous for achieving academic success.' },
      { collocation: 'particularly ubiquitous', example: 'The case study was particularly ubiquitous to our research question.' }
    ],
  },
  // --- IELTS SPEAKING PHRASAL VERBS ---
  {
    id: 'entry-pick-up',
    entry_type: 'phrasal_verb',
    word: 'pick up',
    ipa_uk: '/pɪk ʌp/',
    ipa_us: '/pɪk ʌp/',
    definition: 'To learn a new skill or language naturally, or to collect someone in a vehicle.',
    definition_source: 'cambridge',
    example: 'I managed to pick up a bit of conversational Spanish while travelling through South America.',
    definitions: [
      {
        definition: 'To learn a new skill or language naturally without formal study.',
        example: 'I managed to pick up a bit of conversational Spanish while travelling through South America.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb, transitive'
      },
      {
        definition: 'To collect or fetch someone or something in a vehicle.',
        example: 'Could you pick me up from the airport on your way home?',
        cefr_level: 'B1',
        grammar_note: 'phrasal verb, transitive (separable)'
      }
    ],
    extra_examples: [
      'Children quickly pick up new vocabulary by listening to their parents.',
      'The bus stops here to pick up passengers every thirty minutes.'
    ],
    grammar_note: 'phrasal verb, transitive (separable)',
    base_verb: 'pick',
    particles: 'up',
    conjugations: {
      present_participle: 'picking',
      past_tense: 'picked',
      past_participle: 'picked'
    },
    related_phrasal_verbs: ['pick out', 'pick on', 'pick at'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'learning-skills',
    semantic_field_label: 'Learning & Skills',
    semantic_field_words: [
      { word: 'acquire', cefr: 'B2', register: 'academic' },
      { word: 'master', cefr: 'B2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'learn', register: 'neutral', cefr: 'A1' },
      { word: 'acquire', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-speaking-work-study', 'folder-speaking-leisure-travel'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 1 - learning foreign languages.',
    collocations: [
      { collocation: 'attempt to pick up', example: 'We must attempt to pick up the project issues.' },
      { collocation: 'carefully pick up', example: 'You should carefully pick up the instructions before starting.' }
    ],
  },
  {
    id: 'entry-look-back-on',
    entry_type: 'phrasal_verb',
    word: 'look back on',
    ipa_uk: '/lʊk bæk ɒn/',
    ipa_us: '/lʊk bæk ɑːn/',
    definition: 'To think about or reflect on something that happened in the past.',
    definition_source: 'cambridge',
    example: 'When I look back on my childhood, I realize how much my hometown has developed.',
    definitions: [
      {
        definition: 'To think about or reflect on something that happened in the past.',
        example: 'When I look back on my childhood, I realize how much my hometown has developed.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb, transitive (inseparable)'
      }
    ],
    extra_examples: [
      'It is natural to look back on your school days with a certain degree of nostalgia.',
      'Most seniors look back on their careers with pride.'
    ],
    grammar_note: 'phrasal verb, transitive (three-word)',
    base_verb: 'look',
    particles: 'back on',
    conjugations: {
      present_participle: 'looking',
      past_tense: 'looked',
      past_participle: 'looked'
    },
    related_phrasal_verbs: ['look back', 'look forward to', 'look down on'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'memory-reflection',
    semantic_field_label: 'Memory & Reflection',
    semantic_field_words: [
      { word: 'recollect', cefr: 'C1', register: 'formal' },
      { word: 'reminisce', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'remember', register: 'neutral', cefr: 'A1' },
      { word: 'recollect', register: 'formal', cefr: 'C1' },
      { word: 'reminisce', register: 'literary', cefr: 'C2' }
    ],
    folder_ids: ['folder-speaking-relationships'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 2 - describing a happy childhood memory.',
    collocations: [
      { collocation: 'attempt to look back on', example: 'We must attempt to look back on the project issues.' },
      { collocation: 'carefully look back on', example: 'You should carefully look back on the instructions before starting.' }
    ],
  },
  {
    id: 'entry-wind-down',
    entry_type: 'phrasal_verb',
    word: 'wind down',
    ipa_uk: '/waɪnd daʊn/',
    ipa_us: '/waɪnd daʊn/',
    definition: 'To gradually relax or calm down after a period of intense work or stress.',
    definition_source: 'cambridge',
    example: 'After a grueling study session, I like to wind down by listening to classical music or jogging.',
    definitions: [
      {
        definition: 'To gradually relax or calm down after a period of intense work or stress.',
        example: 'After a grueling study session, I like to wind down by listening to classical music or jogging.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb, intransitive'
      }
    ],
    extra_examples: [
      'Reading a book is a fantastic way to wind down before going to sleep.',
      'The company plans to wind down its operations in the region over the next month.'
    ],
    grammar_note: 'phrasal verb, intransitive',
    base_verb: 'wind',
    particles: 'down',
    conjugations: {
      present_participle: 'winding',
      past_tense: 'wound',
      past_participle: 'wound'
    },
    related_phrasal_verbs: ['wind up'],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 2,
    connotation: 'positive',
    word_family: null,
    semantic_field_id: 'relaxation-leisure',
    semantic_field_label: 'Relaxation & Leisure',
    semantic_field_words: [
      { word: 'decompress', cefr: 'C2', register: 'informal' },
      { word: 'unwind', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'relax', register: 'neutral', cefr: 'A1' },
      { word: 'unwind', register: 'neutral', cefr: 'C1' },
      { word: 'chill out', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-speaking-leisure-travel'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 1 - study habits and free time activities.',
    collocations: [
      { collocation: 'attempt to wind down', example: 'We must attempt to wind down the project issues.' },
      { collocation: 'carefully wind down', example: 'You should carefully wind down the instructions before starting.' }
    ],
  },
  {
    id: 'entry-get-along-with',
    entry_type: 'phrasal_verb',
    word: 'get along with',
    ipa_uk: '/ɡet əˈlɒŋ wɪð/',
    ipa_us: '/ɡet əˈlɑːŋ wɪð/',
    definition: 'To have a friendly, cooperative relationship with someone.',
    definition_source: 'cambridge',
    example: 'Fortunately, I get along with my flatmates exceptionally well, which makes home life pleasant.',
    definitions: [
      {
        definition: 'To have a friendly, cooperative relationship with someone.',
        example: 'Fortunately, I get along with my flatmates exceptionally well, which makes home life pleasant.',
        cefr_level: 'B1',
        grammar_note: 'phrasal verb, transitive (inseparable)'
      }
    ],
    extra_examples: [
      'Do you get along with your siblings or do you fight a lot?',
      'It is crucial to get along with your team members to ensure the project runs smoothly.'
    ],
    grammar_note: 'phrasal verb, transitive (three-word)',
    base_verb: 'get',
    particles: 'along with',
    conjugations: {
      present_participle: 'getting',
      past_tense: 'got',
      past_participle: 'gotten'
    },
    related_phrasal_verbs: ['get on with', 'get over', 'get through'],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: null,
    semantic_field_id: 'social-connections',
    semantic_field_label: 'Social Connections',
    semantic_field_words: [
      { word: 'coexist', cefr: 'C1', register: 'academic' },
      { word: 'harmonize', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'get on with', register: 'neutral', cefr: 'B1' },
      { word: 'cooperate', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-speaking-relationships'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 1 - family and friends topic.',
    collocations: [
      { collocation: 'attempt to get along with', example: 'We must attempt to get along with the project issues.' },
      { collocation: 'carefully get along with', example: 'You should carefully get along with the instructions before starting.' }
    ],
  },
  {
    id: 'entry-carry-on',
    entry_type: 'phrasal_verb',
    word: 'carry on',
    ipa_uk: '/ˈkær.i ɒn/',
    ipa_us: '/ˈkær.i ɑːn/',
    definition: 'To continue doing something, especially in a determined way despite difficulties.',
    definition_source: 'cambridge',
    example: 'Despite the challenging assignments, I decided to carry on studying to complete the course.',
    definitions: [
      {
        definition: 'To continue doing something, especially in a determined way despite difficulties.',
        example: 'Despite the challenging assignments, I decided to carry on studying to complete the course.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb, intransitive/transitive'
      }
    ],
    extra_examples: [
      'The teacher told the students to carry on with their writing exercises while she was away.',
      'If you carry on working like this, you will burn out very quickly.'
    ],
    grammar_note: 'phrasal verb, transitive/intransitive',
    base_verb: 'carry',
    particles: 'on',
    conjugations: {
      present_participle: 'carrying',
      past_tense: 'carried',
      past_participle: 'carried'
    },
    related_phrasal_verbs: ['carry out', 'carry away'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'perseverance-action',
    semantic_field_label: 'Perseverance & Action',
    semantic_field_words: [
      { word: 'persist', cefr: 'C1', register: 'formal' },
      { word: 'persevere', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'continue', register: 'neutral', cefr: 'A2' },
      { word: 'persist', register: 'formal', cefr: 'C1' },
      { word: 'keep on', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-speaking-work-study'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 3 - career development and personal growth.',
    collocations: [
      { collocation: 'attempt to carry on', example: 'We must attempt to carry on the project issues.' },
      { collocation: 'carefully carry on', example: 'You should carefully carry on the instructions before starting.' }
    ],
  },
  {
    id: 'entry-keen-on',
    entry_type: 'collocation',
    word: 'keen on',
    ipa_uk: '/kiːn ɒn/',
    ipa_us: '/kiːn ɑːn/',
    definition: 'Very interested, eager, or wanting to do something.',
    definition_source: 'cambridge',
    example: 'I’ve never been particularly keen on outdoor sports like hiking.',
    definitions: [
      {
        definition: 'Very interested, eager, or wanting to do something.',
        example: 'I’ve never been particularly keen on outdoor sports like hiking.',
        cefr_level: 'B1',
        grammar_note: 'collocation, adjective + preposition'
      }
    ],
    extra_examples: [
      'She is quite keen on learning how to play the piano.',
      'My brother isn’t very keen on the idea of moving abroad.'
    ],
    grammar_note: 'adjective + preposition',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['keenness'],
      adjective: ['keen'],
      adverb: ['keenly']
    },
    semantic_field_id: 'preferences-interests',
    semantic_field_label: 'Preferences & Interests',
    semantic_field_words: [
      { word: 'fond of', cefr: 'B1', register: 'neutral' },
      { word: 'passionate about', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'fond of', register: 'neutral', cefr: 'B1' },
      { word: 'interested in', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-speaking-leisure-travel'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 1 - Leisure activities and hobbies.',
    collocations: [
      { collocation: 'attempt to keen on', example: 'We must attempt to keen on the project issues.' },
      { collocation: 'carefully keen on', example: 'You should carefully keen on the instructions before starting.' }
    ],
  },
  {
    id: 'entry-wear-out',
    entry_type: 'phrasal_verb',
    word: 'wear out',
    ipa_uk: '/weə aʊt/',
    ipa_us: '/wer aʊt/',
    definition: 'To make someone extremely tired, or to become damaged and unusable through long use.',
    definition_source: 'cambridge',
    example: 'Walking around the city all day in those shoes completely wore me out.',
    definitions: [
      {
        definition: 'To make someone extremely tired or exhausted.',
        example: 'Walking around the city all day in those shoes completely wore me out.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb, transitive (separable)'
      },
      {
        definition: 'To become damaged, thin, or unusable through long use or wear.',
        example: 'I need to buy some new running shoes because these ones have worn out.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb, intransitive'
      }
    ],
    extra_examples: [
      'The children wore out their shoes in less than six months.',
      'Working double shifts every day will eventually wear you out.'
    ],
    grammar_note: 'phrasal verb, transitive/intransitive',
    base_verb: 'wear',
    particles: 'out',
    conjugations: {
      present_participle: 'wearing',
      past_tense: 'wore',
      past_participle: 'worn'
    },
    related_phrasal_verbs: ['wear off', 'wear down'],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: null,
    semantic_field_id: 'fatigue-exhaustion',
    semantic_field_label: 'Fatigue & Exhaustion',
    semantic_field_words: [
      { word: 'exhausted', cefr: 'B2', register: 'neutral' },
      { word: 'fatigued', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'tire', register: 'neutral', cefr: 'B2' },
      { word: 'exhaust', register: 'formal', cefr: 'B2' }
    ],
    folder_ids: ['folder-speaking-leisure-travel'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking Part 2 - Describe a long walk or physical activity.',
    collocations: [
      { collocation: 'attempt to wear out', example: 'We must attempt to wear out the project issues.' },
      { collocation: 'carefully wear out', example: 'You should carefully wear out the instructions before starting.' }
    ],
  },
  {
    id: 'entry-hypothesis',
    entry_type: 'word',
    word: 'hypothesis',
    ipa_uk: '/haɪˈpɒθ.ə.sɪs/',
    ipa_us: '/haɪˈpɑː.θə.sɪs/',
    definition: 'An idea or explanation for something that is based on known facts but has not yet been proved.',
    definition_source: 'cambridge',
    example: 'Researchers formulated a new hypothesis to explain how exposure to green spaces affects stress hormones.',
    definitions: [
      {
        definition: 'An idea or explanation for something that is based on known facts but has not yet been proved.',
        example: 'Researchers formulated a new hypothesis to explain how exposure to green spaces affects stress hormones, but it requires further empirical testing.',
        cefr_level: 'C1',
        grammar_note: 'noun, countable'
      }
    ],
    extra_examples: [
      'The results of the experiment support our original hypothesis.',
      'We set out to test the hypothesis that diet affects cognitive function.'
    ],
    grammar_note: 'noun, countable (plural: hypotheses)',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['hypothesize'],
      noun: ['hypothesis'],
      adjective: ['hypothetical'],
      adverb: ['hypothetically']
    },
    semantic_field_id: 'scientific-investigation',
    semantic_field_label: 'Scientific Investigation',
    semantic_field_words: [
      { word: 'empirical', cefr: 'C1', register: 'academic' },
      { word: 'theory', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'theory', register: 'neutral', cefr: 'B2' },
      { word: 'assumption', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic scientific writing.',
    collocations: [
      { collocation: 'significant hypothesis', example: 'There has been a significant hypothesis observed in recent statistics.' },
      { collocation: 'underlying hypothesis', example: 'We must identify the underlying hypothesis of this phenomenon.' }
    ],
  },
  {
    id: 'entry-paradigm',
    entry_type: 'word',
    word: 'paradigm',
    ipa_uk: '/ˈpær.ə.daɪm/',
    ipa_us: '/ˈpær.ə.daɪm/',
    definition: 'A model of something, or a very clear and typical example or archetype.',
    definition_source: 'cambridge',
    example: 'The invention of CRISPR technology represents a major paradigm shift in genetic engineering.',
    definitions: [
      {
        definition: 'A typical pattern, model, or conceptual framework of something.',
        example: 'The invention of CRISPR technology represents a major paradigm shift in genetic engineering and agricultural science.',
        cefr_level: 'C2',
        grammar_note: 'noun, countable'
      }
    ],
    extra_examples: [
      'The company is seen as a paradigm of modern business efficiency.',
      'This research represents a paradigm shift in environmental science.'
    ],
    grammar_note: 'noun, countable',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['paradigm'],
      adjective: ['paradigmatic'],
      adverb: ['paradigmatically']
    },
    semantic_field_id: 'scientific-concepts',
    semantic_field_label: 'Scientific Concepts',
    semantic_field_words: [
      { word: 'archetype', cefr: 'C2', register: 'academic' },
      { word: 'framework', cefr: 'B2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'model', register: 'neutral', cefr: 'A2' },
      { word: 'pattern', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic research methodology.',
    collocations: [
      { collocation: 'significant paradigm', example: 'There has been a significant paradigm observed in recent statistics.' },
      { collocation: 'underlying paradigm', example: 'We must identify the underlying paradigm of this phenomenon.' }
    ],
  },
  {
    id: 'entry-refute',
    entry_type: 'word',
    word: 'refute',
    ipa_uk: '/rɪˈfjuːt/',
    ipa_us: '/rɪˈfjuːt/',
    definition: 'To prove a statement, theory, or opinion to be wrong or false; disprove.',
    definition_source: 'cambridge',
    example: 'Recent archaeological discoveries have refuted the long-held theory that early humans did not engage in trade.',
    definitions: [
      {
        definition: 'To prove a statement, theory, or argument to be wrong or false; disprove.',
        example: 'Recent archaeological discoveries have refuted the long-held theory that early humans did not engage in trade over long distances.',
        cefr_level: 'C1',
        grammar_note: 'verb, transitive'
      }
    ],
    extra_examples: [
      'The defense lawyer sought to refute the testimony of the witness.',
      'We have statistical data that easily refutes their assertions.'
    ],
    grammar_note: 'verb, transitive',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['refute'],
      noun: ['refutation'],
      adjective: ['irrefutable'],
      adverb: ['irrefutably']
    },
    semantic_field_id: 'scientific-debate',
    semantic_field_label: 'Scientific Debate',
    semantic_field_words: [
      { word: 'disprove', cefr: 'C1', register: 'academic' },
      { word: 'rebut', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'disprove', register: 'formal', cefr: 'C1' },
      { word: 'deny', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic debates and peer reviews.',
    collocations: [
      { collocation: 'strongly refute', example: 'The evidence seems to strongly refute our initial hypothesis.' },
      { collocation: 'help refute', example: 'Implementing this policy will help refute the current situation.' }
    ],
  },
  {
    id: 'entry-corroborate',
    entry_type: 'word',
    word: 'corroborate',
    ipa_uk: '/kəˈrɒb.ə.reɪt/',
    ipa_us: '/kəˈrɑː.bə.reɪt/',
    definition: 'To confirm or give support to a statement, theory, or finding with additional evidence.',
    definition_source: 'cambridge',
    example: 'Several independent clinical trials were conducted to corroborate the efficacy of the new vaccine.',
    definitions: [
      {
        definition: 'To confirm or give support to a statement, theory, or finding with additional evidence.',
        example: 'Several independent clinical trials were conducted to corroborate the efficacy of the new vaccine.',
        cefr_level: 'C2',
        grammar_note: 'verb, transitive'
      }
    ],
    extra_examples: [
      'The witness was able to corroborate the suspect\'s alibi.',
      'Recent genomic research has corroborated earlier fossil findings.'
    ],
    grammar_note: 'verb, transitive',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'positive',
    word_family: {
      verb: ['corroborate'],
      noun: ['corroboration'],
      adjective: ['corroborative'],
      adverb: []
    },
    semantic_field_id: 'scientific-investigation',
    semantic_field_label: 'Scientific Investigation',
    semantic_field_words: [
      { word: 'confirm', cefr: 'B2', register: 'neutral' },
      { word: 'validate', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'confirm', register: 'neutral', cefr: 'B2' },
      { word: 'back up', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Peer review and verification of findings.',
    collocations: [
      { collocation: 'strongly corroborate', example: 'The evidence seems to strongly corroborate our initial hypothesis.' },
      { collocation: 'help corroborate', example: 'Implementing this policy will help corroborate the current situation.' }
    ],
  },
  {
    id: 'entry-scrutinize',
    entry_type: 'word',
    word: 'scrutinize',
    ipa_uk: '/ˈskruː.tɪ.naɪz/',
    ipa_us: '/ˈskruː.t̬ən.aɪz/',
    definition: 'To examine or inspect something closely and thoroughly.',
    definition_source: 'cambridge',
    example: 'Before any scientific paper is published in a reputable journal, peers must rigorously scrutinize the research methodology.',
    definitions: [
      {
        definition: 'To examine or inspect something closely and thoroughly.',
        example: 'Before any scientific paper is published in a reputable journal, peers must rigorously scrutinize the research methodology and data.',
        cefr_level: 'C1',
        grammar_note: 'verb, transitive'
      }
    ],
    extra_examples: [
      'The tax inspectors will scrutinize every detail of the company\'s accounts.',
      'Her face was scrutinized by the cosmetic surgeon.'
    ],
    grammar_note: 'verb, transitive',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['scrutinize'],
      noun: ['scrutiny', 'scrutinizer'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'scientific-investigation',
    semantic_field_label: 'Scientific Investigation',
    semantic_field_words: [
      { word: 'examine', cefr: 'B1', register: 'neutral' },
      { word: 'inspect', cefr: 'B2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'inspect', register: 'formal', cefr: 'B2' },
      { word: 'go over', register: 'informal', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Academic review and quality assurance.',
    collocations: [
      { collocation: 'strongly scrutinize', example: 'The evidence seems to strongly scrutinize our initial hypothesis.' },
      { collocation: 'help scrutinize', example: 'Implementing this policy will help scrutinize the current situation.' }
    ],
  },
  {
    id: 'entry-doctrine',
    entry_type: 'word',
    word: 'doctrine',
    ipa_uk: '/ˈdɒk.trɪn/',
    ipa_us: '/ˈdɑːk.trɪn/',
    definition: 'A belief or set of beliefs held and taught by a church, political party, or other group.',
    definition_source: 'cambridge',
    example: 'The president outlined a new foreign policy doctrine that favors unilateral action.',
    definitions: [
      {
        definition: 'A belief or set of beliefs held and taught by a church, political party, or other group.',
        example: 'The president outlined a new foreign policy doctrine that favors unilateral action.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'A statement of government policy, especially in international relations.',
        example: 'The Monroe Doctrine declared that the Americas were no longer open to European colonization.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    extra_examples: [
      'We must not allow our legal doctrine to be compromised by temporary political pressure.',
      'The economic doctrine of free-market capitalism has dominated international trade for decades.'
    ],
    grammar_note: 'noun [C or U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['doctrine', 'indoctrination', 'indoctrinator'],
      adjective: ['doctrinal'],
      adverb: ['doctrinally']
    },
    semantic_field_id: 'ideology-belief',
    semantic_field_label: 'Ideology & Belief',
    semantic_field_words: [
      { word: 'dogma', cefr: 'C2', register: 'formal' },
      { word: 'ideology', cefr: 'C1', register: 'neutral' },
      { word: 'tenet', cefr: 'C2', register: 'formal' },
      { word: 'creed', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'dogma', register: 'formal', cefr: 'C2' },
      { word: 'ideology', register: 'neutral', cefr: 'C1' },
      { word: 'principle', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on political structures, legal philosophy, and international relations.',
    collocations: [
      { collocation: 'significant doctrine', example: 'There has been a significant doctrine observed in recent statistics.' },
      { collocation: 'underlying doctrine', example: 'We must identify the underlying doctrine of this phenomenon.' }
    ],
  },
  {
    id: 'entry-formidable',
    entry_type: 'word',
    word: 'formidable',
    ipa_uk: '/fəˈmɪd.ə.bəl/',
    ipa_us: '/fɔːrˈmɪd.ə.bəl/',
    definition: 'Causing you to have fear or respect for something or someone because that thing or person is large, powerful, or difficult.',
    definition_source: 'cambridge',
    example: 'The team faces a formidable challenge in trying to rebuild their economy.',
    definitions: [
      {
        definition: 'Causing you to have fear or respect for something or someone because that thing or person is large, powerful, or difficult.',
        example: 'The team faces a formidable challenge in trying to rebuild their economy.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Very impressive in size, power, or skill.',
        example: 'She has a formidable intellect and a reputation for being an extremely demanding boss.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'The company built up a formidable reputation for quality and customer service.',
      'In the IELTS writing section, candidate responses should utilize a formidable array of advanced grammatical structures.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['formidability'],
      adjective: ['formidable'],
      adverb: ['formidably']
    },
    semantic_field_id: 'strength-power',
    semantic_field_label: 'Strength & Power',
    semantic_field_words: [
      { word: 'daunting', cefr: 'C1', register: 'neutral' },
      { word: 'intimidating', cefr: 'C1', register: 'neutral' },
      { word: 'redoubtable', cefr: 'C2', register: 'formal' },
      { word: 'tremendous', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'intimidating', register: 'neutral', cefr: 'C1' },
      { word: 'daunting', register: 'neutral', cefr: 'C1' },
      { word: 'challenging', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - describing challenges, institutional opposition, and academic requirements.',
    collocations: [
      { collocation: 'highly formidable', example: 'This approach is highly formidable for achieving academic success.' },
      { collocation: 'particularly formidable', example: 'The case study was particularly formidable to our research question.' }
    ],
  },
  {
    id: 'entry-prominence',
    entry_type: 'word',
    word: 'prominence',
    ipa_uk: '/ˈprɒm.ɪ.nəns/',
    ipa_us: '/ˈprɑː.mə.nəns/',
    definition: 'The state of being easily seen or well known.',
    definition_source: 'cambridge',
    example: 'The issue of environmental sustainability has risen to prominence in recent years.',
    definitions: [
      {
        definition: 'The state of being easily seen or well known.',
        example: 'The issue of environmental sustainability has risen to prominence in recent years.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The quality of projecting outward or being physically noticeable.',
        example: 'The geological prominence of the mountain makes it a landmark for hikers.',
        cefr_level: 'C2',
        grammar_note: 'noun [C or U]'
      }
    ],
    extra_examples: [
      'He came to prominence during the civil rights movement of the 1960s.',
      'Media coverage gave national prominence to the local strike.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['prominence', 'prominency'],
      adjective: ['prominent'],
      adverb: ['prominently']
    },
    semantic_field_id: 'status-visibility',
    semantic_field_label: 'Status & Visibility',
    semantic_field_words: [
      { word: 'preeminence', cefr: 'C2', register: 'formal' },
      { word: 'notoriety', cefr: 'C1', register: 'neutral' },
      { word: 'prestige', cefr: 'C1', register: 'neutral' },
      { word: 'fame', cefr: 'A2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'distinction', register: 'formal', cefr: 'C1' },
      { word: 'importance', register: 'neutral', cefr: 'B1' },
      { word: 'visibility', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on media influence, public attention, social trends, and notable figures.',
    collocations: [
      { collocation: 'significant prominence', example: 'There has been a significant prominence observed in recent statistics.' },
      { collocation: 'underlying prominence', example: 'We must identify the underlying prominence of this phenomenon.' }
    ],
  },
  {
    id: 'entry-leftism',
    entry_type: 'word',
    word: 'leftism',
    ipa_uk: '/ˈleft.ɪ.zəm/',
    ipa_us: '/ˈleft.ɪ.zəm/',
    definition: 'The political beliefs and policies of the left, especially those supporting social equality and state involvement in the economy.',
    definition_source: 'cambridge',
    example: 'The party has moved away from traditional leftism towards a more centrist stance.',
    definitions: [
      {
        definition: 'The political beliefs and policies of the left, especially those supporting social equality and state involvement in the economy.',
        example: 'The party has moved away from traditional leftism towards a more centrist stance.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'Adherence to socialist or progressive political theories.',
        example: 'Academic circles in the mid-20th century were often characterized by a strong current of intellectual leftism.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'Critics argue that modern leftism must adapt to globalized market realities.',
      'Her early essays trace the evolution of democratic leftism in Western Europe.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['leftism', 'leftist', 'left'],
      adjective: ['leftist', 'left'],
      adverb: []
    },
    semantic_field_id: 'politics-ideology',
    semantic_field_label: 'Politics & Ideology',
    semantic_field_words: [
      { word: 'socialism', cefr: 'B2', register: 'neutral' },
      { word: 'liberalism', cefr: 'C1', register: 'neutral' },
      { word: 'progressivism', cefr: 'C2', register: 'formal' },
      { word: 'communism', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'socialism', register: 'neutral', cefr: 'B2' },
      { word: 'progressivism', register: 'formal', cefr: 'C2' },
      { word: 'left-wing politics', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on state welfare, government regulations, tax policy, and socio-economic systems.',
    collocations: [
      { collocation: 'significant leftism', example: 'There has been a significant leftism observed in recent statistics.' },
      { collocation: 'underlying leftism', example: 'We must identify the underlying leftism of this phenomenon.' }
    ],
  },
  {
    id: 'entry-upbeat',
    entry_type: 'word',
    word: 'upbeat',
    ipa_uk: '/ʌpˈbiːt/',
    ipa_us: '/ˈʌp.biːt/',
    definition: 'Full of hope, happiness, and good feelings.',
    definition_source: 'cambridge',
    example: 'The government gave an upbeat assessment of the economic situation, predicting steady growth.',
    definitions: [
      {
        definition: 'Full of hope, happiness, and good feelings.',
        example: 'The government gave an upbeat assessment of the economic situation, predicting steady growth.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Characterized by a cheerful or positive tone.',
        example: 'Despite the setbacks, the campaign concluded on an upbeat note.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'Live music and upbeat rhythms kept the crowd energized throughout the festival.',
      'We try to maintain an upbeat atmosphere in the office to encourage productivity.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['upbeat'],
      adjective: ['upbeat'],
      adverb: []
    },
    semantic_field_id: 'emotion-positivity',
    semantic_field_label: 'Emotion & Positivity',
    semantic_field_words: [
      { word: 'optimistic', cefr: 'B2', register: 'neutral' },
      { word: 'cheerful', cefr: 'B1', register: 'neutral' },
      { word: 'sanguine', cefr: 'C2', register: 'formal' },
      { word: 'buoyant', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'optimistic', register: 'neutral', cefr: 'B2' },
      { word: 'sanguine', register: 'formal', cefr: 'C2' },
      { word: 'cheerful', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 & Speaking - describing outlooks, economic forecasts, and general attitudes.',
    collocations: [
      { collocation: 'highly upbeat', example: 'This approach is highly upbeat for achieving academic success.' },
      { collocation: 'particularly upbeat', example: 'The case study was particularly upbeat to our research question.' }
    ],
  },
  {
    id: 'entry-optimistic',
    entry_type: 'word',
    word: 'optimistic',
    ipa_uk: '/ˌɒp.tɪˈmɪs.tɪk/',
    ipa_us: '/ˌɑːp.təˈmɪs.tɪk/',
    definition: 'Hoping or believing that good things will happen in the future.',
    definition_source: 'cambridge',
    example: 'She is optimistic about her chances of winning a scholarship to study abroad.',
    definitions: [
      {
        definition: 'Hoping or believing that good things will happen in the future.',
        example: 'She is optimistic about her chances of winning a scholarship to study abroad.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Showing hope and confidence about the success of something.',
        example: 'The department released an optimistic forecast of revenue trends for the next quarter.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'Despite the current environmental crisis, many ecologists remain optimistic about long-term recovery efforts.',
      'An optimistic outlook is often associated with better physical and mental health outcomes.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: [],
      noun: ['optimism', 'optimist'],
      adjective: ['optimistic'],
      adverb: ['optimistically']
    },
    semantic_field_id: 'emotion-positivity',
    semantic_field_label: 'Emotion & Positivity',
    semantic_field_words: [
      { word: 'upbeat', cefr: 'C1', register: 'neutral' },
      { word: 'sanguine', cefr: 'C2', register: 'formal' },
      { word: 'hopeful', cefr: 'B1', register: 'neutral' },
      { word: 'confident', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'hopeful', register: 'neutral', cefr: 'B1' },
      { word: 'upbeat', register: 'neutral', cefr: 'C1' },
      { word: 'sanguine', register: 'formal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 & Speaking - discussing future projections, mindset, and human behavior.',
    collocations: [
      { collocation: 'highly optimistic', example: 'This approach is highly optimistic for achieving academic success.' },
      { collocation: 'particularly optimistic', example: 'The case study was particularly optimistic to our research question.' }
    ],
  },
  {
    id: 'entry-territorial',
    entry_type: 'word',
    word: 'territorial',
    ipa_uk: '/ˌter.ɪˈtɔː.ri.əl/',
    ipa_us: '/ˌter.əˈtɔːr.i.əl/',
    definition: 'Relating to the ownership of an area of land or sea.',
    definition_source: 'cambridge',
    example: 'The two countries have been engaged in a long-standing territorial dispute over the border islands.',
    definitions: [
      {
        definition: 'Relating to the ownership of an area of land or sea.',
        example: 'The two countries have been engaged in a long-standing territorial dispute over the border islands.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Guarding and defending an area of land that is believed to belong to oneself.',
        example: 'Male songbirds are highly territorial during the breeding season, defending their nesting areas.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'We must respect the territorial integrity of all sovereign states under international law.',
      'Some cats can display aggressive, territorial behaviors when a new pet is introduced to the household.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['territory', 'territoriality'],
      adjective: ['territorial'],
      adverb: ['territorially']
    },
    semantic_field_id: 'geography-ownership',
    semantic_field_label: 'Geography & Ownership',
    semantic_field_words: [
      { word: 'sovereign', cefr: 'C1', register: 'formal' },
      { word: 'jurisdiction', cefr: 'C2', register: 'formal' },
      { word: 'provincial', cefr: 'C1', register: 'neutral' },
      { word: 'boundary', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'regional', register: 'neutral', cefr: 'B2' },
      { word: 'sovereign', register: 'formal', cefr: 'C1' },
      { word: 'provincial', register: 'neutral', cefr: 'C1' }
    ],
    folder_ids: ['folder-1'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on national sovereignty, geopolitics, animal behavior, and regional conflicts.',
    collocations: [
      { collocation: 'highly territorial', example: 'This approach is highly territorial for achieving academic success.' },
      { collocation: 'particularly territorial', example: 'The case study was particularly territorial to our research question.' }
    ],
  },
  {
    id: 'entry-inference',
    entry_type: 'word',
    word: 'inference',
    ipa_uk: '/ˈɪn.fər.əns/',
    ipa_us: '/ˈɪn.fɚ.əns/',
    definition: 'A guess or opinion that you form based on the information that you already have.',
    definition_source: 'cambridge',
    example: 'The researcher drew the inference that the increase in global temperatures was directly linked to industrial emissions.',
    definitions: [
      {
        definition: 'A guess or opinion that you form based on the information that you already have.',
        example: 'The researcher drew the inference that the increase in global temperatures was directly linked to industrial emissions.',
        cefr_level: 'C2',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'The process of reaching a decision or answer by using facts or logic.',
        example: 'By a process of elimination and logical inference, we can deduce the correct solution.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'It is a reasonable inference that the economy will recover once trade restrictions are lifted.',
      'Statistical inference allows researchers to make generalizations about a population based on sample data.'
    ],
    grammar_note: 'noun [C or U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    word_family: {
      verb: ['infer'],
      noun: ['inference'],
      adjective: ['inferential'],
      adverb: ['inferentially']
    },
    semantic_field_id: 'logic-reasoning',
    semantic_field_label: 'Logic & Reasoning',
    semantic_field_words: [
      { word: 'deduction', cefr: 'C1', register: 'formal' },
      { word: 'assumption', cefr: 'B2', register: 'neutral' },
      { word: 'hypothesis', cefr: 'C1', register: 'academic' },
      { word: 'conjecture', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'deduction', register: 'formal', cefr: 'C1' },
      { word: 'conclusion', register: 'neutral', cefr: 'B2' },
      { word: 'conjecture', register: 'formal', cefr: 'C2' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - academic analyses, research methodology discussions, and logical reasoning exercises.',
    collocations: [
      { collocation: 'significant inference', example: 'There has been a significant inference observed in recent statistics.' },
      { collocation: 'underlying inference', example: 'We must identify the underlying inference of this phenomenon.' }
    ],
  },
  {
    id: 'entry-repulsive',
    entry_type: 'word',
    word: 'repulsive',
    ipa_uk: '/rɪˈpʌl.sɪv/',
    ipa_us: '/rɪˈpʌl.sɪv/',
    definition: 'Extremely unpleasant or unacceptable; causing disgust.',
    definition_source: 'cambridge',
    example: 'The sight of the industrial waste dumping site was utterly repulsive to the local residents.',
    definitions: [
      {
        definition: 'Extremely unpleasant or unacceptable; causing disgust.',
        example: 'The sight of the industrial waste dumping site was utterly repulsive to the local residents.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Tending to push away or keep apart (in physics).',
        example: 'Subatomic particles with the same charge experience a repulsive force, pushing them away from each other.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'He found the politician\'s arrogant behavior and remarks deeply repulsive.',
      'Magnets can exhibit both attractive and repulsive behaviors depending on their orientation.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'negative',
    word_family: {
      verb: ['repel'],
      noun: ['repulsion', 'repulsiveness'],
      adjective: ['repulsive'],
      adverb: ['repulsively']
    },
    semantic_field_id: 'emotion-disgust',
    semantic_field_label: 'Emotion & Disgust',
    semantic_field_words: [
      { word: 'loathsome', cefr: 'C2', register: 'formal' },
      { word: 'disturbing', cefr: 'B2', register: 'neutral' },
      { word: 'abhorrent', cefr: 'C2', register: 'formal' },
      { word: 'detestable', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'abhorrent', register: 'formal', cefr: 'C2' },
      { word: 'loathsome', register: 'formal', cefr: 'C2' },
      { word: 'disgusting', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - discussions on environmental degradation, social behavior, and scientific forces.',
    collocations: [
      { collocation: 'highly repulsive', example: 'This approach is highly repulsive for achieving academic success.' },
      { collocation: 'particularly repulsive', example: 'The case study was particularly repulsive to our research question.' }
    ],
  },
  {
    id: 'entry-play-out',
    entry_type: 'phrasal_verb',
    word: 'play out',
    ipa_uk: '/pleɪ aʊt/',
    ipa_us: '/pleɪ aʊt/',
    definition: 'When a situation plays out, it happens and develops.',
    definition_source: 'cambridge',
    example: 'We will have to see how the geopolitical situation plays out before making any investment decisions.',
    definitions: [
      {
        definition: 'When a situation plays out, it happens and develops.',
        example: 'We will have to see how the geopolitical situation plays out before making any investment decisions.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb [intransitive]'
      },
      {
        definition: 'To develop or end in a particular way.',
        example: 'The drama played out in full view of the public, causing widespread controversy.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb [intransitive]'
      }
    ],
    extra_examples: [
      'It will be interesting to watch how this political rivalry plays out in the upcoming elections.',
      'No one could have predicted how the trade talks would play out.'
    ],
    grammar_note: 'phrasal verb [intransitive]',
    base_verb: 'play',
    particles: 'out',
    conjugations: {
      present_participle: 'playing',
      past_tense: 'played',
      past_participle: 'played'
    },
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['play out'],
      noun: [],
      adjective: ['played-out'],
      adverb: []
    },
    semantic_field_id: 'event-development',
    semantic_field_label: 'Event Development',
    semantic_field_words: [
      { word: 'unfold', cefr: 'C1', register: 'neutral' },
      { word: 'transpire', cefr: 'C2', register: 'formal' },
      { word: 'develop', cefr: 'A2', register: 'neutral' },
      { word: 'materialize', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'unfold', register: 'neutral', cefr: 'C1' },
      { word: 'transpire', register: 'formal', cefr: 'C2' },
      { word: 'happen', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-5'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Speaking & Writing - explaining future trends, political outcomes, and social conflicts.',
    collocations: [
      { collocation: 'attempt to play out', example: 'We must attempt to play out the project issues.' },
      { collocation: 'carefully play out', example: 'You should carefully play out the instructions before starting.' }
    ],
  },
  {
    id: 'entry-elasticity',
    entry_type: 'word',
    word: 'elasticity',
    ipa_uk: '/ˌi.læsˈtɪs.ə.ti/',
    ipa_us: '/ˌi.læsˈtɪs.ə.t̬i/',
    definition: 'The ability of an object or material to return to its normal shape after being stretched or compressed.',
    definition_source: 'cambridge',
    example: 'As people age, their skin loses its natural elasticity and starts to sag.',
    definitions: [
      {
        definition: 'The ability of an object or material to return to its normal shape after being stretched or compressed.',
        example: 'As people age, their skin loses its natural elasticity and starts to sag.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The ability of something to change and adapt; responsiveness of demand or supply to price changes.',
        example: 'In economics, price elasticity of demand measures how quantity demanded responds to price fluctuations.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'Rubber bands are known for their exceptional elasticity and strength.',
      'The policy possesses a degree of elasticity, allowing for local modifications based on community feedback.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['elasticity', 'elastomer'],
      adjective: ['elastic', 'elastomeric'],
      adverb: ['elastically']
    },
    semantic_field_id: 'material-property',
    semantic_field_label: 'Material Property',
    semantic_field_words: [
      { word: 'rigidity', cefr: 'C1', register: 'formal' },
      { word: 'durability', cefr: 'B2', register: 'neutral' },
      { word: 'adaptability', cefr: 'C1', register: 'neutral' },
      { word: 'malleability', cefr: 'C2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'flexibility', register: 'neutral', cefr: 'B2' },
      { word: 'adaptability', register: 'neutral', cefr: 'C1' },
      { word: 'resilience', register: 'academic', cefr: 'C1' }
    ],
    folder_ids: ['folder-2', 'folder-science'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 & Speaking - discussing material sciences, biology, or economic theories and price models.',
    collocations: [
      { collocation: 'significant elasticity', example: 'There has been a significant elasticity observed in recent statistics.' },
      { collocation: 'underlying elasticity', example: 'We must identify the underlying elasticity of this phenomenon.' }
    ],
  },
  {
    id: 'entry-predispose',
    entry_type: 'word',
    word: 'predispose',
    ipa_uk: '/ˌpriː.dɪˈspəʊz/',
    ipa_us: '/ˌpriː.dɪˈspoʊz/',
    definition: 'To make someone more likely to behave in a particular way or to suffer from a particular illness or condition.',
    definition_source: 'cambridge',
    example: 'Individual genetics may predispose some people to more severe symptoms.',
    definitions: [
      {
        definition: 'To influence someone in a particular direction or make them likely to behave in a certain way.',
        example: 'His family background predisposed him to support the liberal party.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To make someone susceptible to a disease or condition.',
        example: 'A genetic mutation can predispose individuals to certain types of cancer.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'Lack of exercise may predispose patients to joint stiffness and cardiovascular issues.',
      'Certain environmental factors can predispose children to developing allergies later in life.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    word_family: {
      verb: ['predispose'],
      noun: ['predisposition'],
      adjective: ['predisposed'],
      adverb: []
    },
    semantic_field_id: 'influence-causation',
    semantic_field_label: 'Influence & Causation',
    semantic_field_words: [
      { word: 'influence', cefr: 'B2', register: 'neutral' },
      { word: 'incline', cefr: 'C1', register: 'formal' },
      { word: 'susceptibility', cefr: 'C2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'incline', register: 'formal', cefr: 'C1' },
      { word: 'bias', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-science'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 & Science - discussing susceptibility to diseases, behavior patterns, or psychological inclination.',
    collocations: [
      { collocation: 'predispose someone to', example: 'A family history of heart disease can predispose someone to cardiac issues.' },
      { collocation: 'genetically predispose', example: 'Certain mutations genetically predispose individuals to specific conditions.' }
    ],
  },
  {
    id: 'entry-outlook',
    entry_type: 'word',
    word: 'outlook',
    ipa_uk: '/ˈaʊt.lʊk/',
    ipa_us: '/ˈaʊt.lʊk/',
    definition: "A person's way of thinking and their general attitude to life, or the likely future situation.",
    definition_source: 'cambridge',
    example: 'The economic outlook for the next quarter remains positive despite inflation.',
    definitions: [
      {
        definition: 'A general attitude or perspective towards life or a situation.',
        example: 'She has a very optimistic outlook on life.',
        cefr_level: 'C1',
        grammar_note: 'noun [C usually singular]'
      },
      {
        definition: 'The prospects or future probability of a situation (economic, weather, etc.).',
        example: "The outlook for the country's manufacturing sector is quite gloomy.",
        cefr_level: 'C1',
        grammar_note: 'noun [C usually singular]'
      }
    ],
    extra_examples: [
      "Travel broaden's a person's cultural outlook and helps reduce prejudice.",
      'Global financial institutions have downgraded their economic growth outlook for the region.'
    ],
    grammar_note: 'noun [C usually singular]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: [],
      noun: ['outlook'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'perspective-forecast',
    semantic_field_label: 'Perspective & Forecast',
    semantic_field_words: [
      { word: 'perspective', cefr: 'B2', register: 'neutral' },
      { word: 'forecast', cefr: 'B2', register: 'neutral' },
      { word: 'standpoint', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'perspective', register: 'neutral', cefr: 'B2' },
      { word: 'prospect', register: 'formal', cefr: 'C1' },
      { word: 'forecast', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-2', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 & Economics - discussing forecasts, general mental attitudes, or cultural perspectives.',
    collocations: [
      { collocation: 'optimistic outlook', example: 'Despite the setbacks, he maintained an optimistic outlook on his career.' },
      { collocation: 'economic outlook', example: 'The country\'s economic outlook has improved due to increased exports.' }
    ],
  },
  {
    id: 'entry-assertion',
    entry_type: 'word',
    word: 'assertion',
    ipa_uk: '/əˈsɜː.ʃən/',
    ipa_us: '/əˈsɝː.ʃən/',
    definition: 'A statement that you strongly believe is true.',
    definition_source: 'cambridge',
    example: "The author's assertion that technology isolates people is open to debate.",
    definitions: [
      {
        definition: 'A statement saying that you strongly believe something is true.',
        example: "I don't think that assertion can be supported by facts.",
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'The act of asserting something.',
        example: 'The assertion of national rights led to diplomatic tensions.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      }
    ],
    extra_examples: [
      'We have statistical data that easily refutes their assertions.',
      'Self-assertion is important for personal boundaries and mental health.'
    ],
    grammar_note: 'noun [C or U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['assert'],
      noun: ['assertion', 'assertiveness'],
      adjective: ['assertive'],
      adverb: ['assertively']
    },
    semantic_field_id: 'communication-argument',
    semantic_field_label: 'Communication & Argument',
    semantic_field_words: [
      { word: 'statement', cefr: 'B1', register: 'neutral' },
      { word: 'claim', cefr: 'B2', register: 'neutral' },
      { word: 'declaration', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'statement', register: 'neutral', cefr: 'B1' },
      { word: 'claim', register: 'neutral', cefr: 'B2' },
      { word: 'declaration', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-4'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - presenting arguments, claims, or stating positions in essays.',
    collocations: [
      { collocation: 'make an assertion', example: 'The scientist made an assertion that the new compound is completely non-toxic.' },
      { collocation: 'support an assertion', example: 'The researcher gathered substantial statistical data to support his assertion.' }
    ],
  },
  {
    id: 'entry-stringent-rules',
    entry_type: 'word',
    word: 'impose stringent rules',
    ipa_uk: '/ɪmˈpəʊz ˈstrɪn.dʒənt ruːlz/',
    ipa_us: '/ɪmˈpoʊz ˈstrɪn.dʒənt ruːlz/',
    definition: 'to introduce or enforce very strict, precise, and rigorous regulations that must be obeyed',
    definition_source: 'cambridge',
    example: 'Governments must impose stringent rules on industrial waste disposal to prevent ecological damage.',
    definitions: [
      {
        definition: 'to introduce or enforce very strict, precise, and rigorous regulations that must be obeyed',
        example: 'Governments must impose stringent rules on industrial waste disposal to prevent ecological damage.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'The academic committee decided to impose stringent rules regarding academic integrity and plagiarism.',
      'Many corporations are forced to impose stringent rules on safety to satisfy insurance guidelines.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['impose'],
      noun: ['imposition', 'stringency'],
      adjective: ['stringent'],
      adverb: ['stringently']
    },
    collocations: [
      { collocation: 'impose stringent regulations', example: 'Local authorities impose stringent regulations on building heights.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'impose stringent rules', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'strict rules', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-enforce-compliance',
    entry_type: 'word',
    word: 'enforce compliance',
    ipa_uk: '/ɪnˈfɔːs kəmˈplaɪ.əns/',
    ipa_us: '/ɪnˈfɔːrs kəmˈplaɪ.əns/',
    definition: 'to compel obedience or adherence to a specific law, rule, standard, or agreement',
    definition_source: 'cambridge',
    example: 'School administrations should enforce compliance with code of conduct policies to create a harmonious learning environment.',
    definitions: [
      {
        definition: 'to compel obedience or adherence to a specific law, rule, standard, or agreement',
        example: 'School administrations should enforce compliance with code of conduct policies to create a harmonious learning environment.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Regulators struggle to enforce compliance when companies operate across multiple national borders.',
      'The security team was hired specifically to enforce compliance with safety codes during the construction.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['enforce', 'comply'],
      noun: ['enforcement', 'compliance'],
      adjective: ['enforceable', 'compliant'],
      adverb: []
    },
    collocations: [
      { collocation: 'enforce compliance with regulations', example: 'Inspector duties are to enforce compliance with building regulations.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'enforce compliance', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'make people obey', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-restrict-autonomy',
    entry_type: 'word',
    word: 'restrict individual autonomy',
    ipa_uk: '/rɪˈstrɪkt ˌɪn.dɪˈvɪdʒ.u.əl ɔːˈtɒn.ə.mi/',
    ipa_us: '/rɪˈstrɪkt ˌɪn.dəˈvɪdʒ.u.əl ɑːˈtɑː.nə.mi/',
    definition: 'to limit a person\'s freedom or independence to make their own choices and act self-governingly',
    definition_source: 'cambridge',
    example: 'Opponents argue that locking teenagers into rigid schedules during school hours restricts individual autonomy.',
    definitions: [
      {
        definition: 'to limit a person\'s freedom or independence to make their own choices and act self-governingly',
        example: 'Opponents argue that locking teenagers into rigid schedules during school hours restricts individual autonomy.',
        cefr_level: 'C2',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Stringent guidelines can sometimes restrict individual autonomy of teachers in the classroom.',
      'Does monitoring employee emails restrict individual autonomy to an unethical degree?'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 5,
    connotation: 'negative',
    word_family: {
      verb: ['restrict'],
      noun: ['restriction', 'autonomy'],
      adjective: ['restrictive', 'autonomous'],
      adverb: ['autonomously']
    },
    collocations: [
      { collocation: 'severely restrict autonomy', example: 'The parental controls severely restrict autonomy of children online.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'restrict individual autonomy', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'limit freedom', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-conform-norms',
    entry_type: 'word',
    word: 'conform to societal norms',
    ipa_uk: '/kənˈfɔːm tuː səˈsaɪ.ə.təl nɔːmz/',
    ipa_us: '/kənˈfɔːrm tuː səˈsaɪ.ə.t̬əl nɔːrmz/',
    definition: 'to behave, think, or dress in a way that is expected and accepted by society',
    definition_source: 'cambridge',
    example: 'Adhering to community rules helps youngsters learn how to conform to societal norms.',
    definitions: [
      {
        definition: 'to behave, think, or dress in a way that is expected and accepted by society',
        example: 'Adhering to community rules helps youngsters learn how to conform to societal norms.',
        cefr_level: 'C2',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Pressure to conform to societal norms often intensifies during adolescence.',
      'Historically, creative artists have refused to conform to societal norms of their era.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['conform'],
      noun: ['conformity', 'norm'],
      adjective: ['conformist', 'societal'],
      adverb: []
    },
    collocations: [
      { collocation: 'pressure to conform', example: 'Peer pressure can create intense pressure to conform.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'conform to societal norms', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'follow society', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-tertiary-education',
    entry_type: 'word',
    word: 'tertiary education',
    ipa_uk: '/ˈtɜː.ʃər.i ˌed.jʊˈkeɪ.ʃən/',
    ipa_us: '/ˈtɝː.ʃi.er.i ˌed.jəˈkeɪ.ʃən/',
    definition: 'education at university, college, or other post-secondary institutions',
    definition_source: 'cambridge',
    example: 'Access to tertiary education should be subsidized by the state to promote meritocracy.',
    definitions: [
      {
        definition: 'education at university, college, or other post-secondary institutions',
        example: 'Access to tertiary education should be subsidized by the state to promote meritocracy.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'In many developed countries, more than half of high school graduates proceed to tertiary education.',
      'The cost of tertiary education has risen dramatically over the last three decades.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['educate'],
      noun: ['education', 'educator'],
      adjective: ['tertiary', 'educational'],
      adverb: []
    },
    collocations: [
      { collocation: 'pursue tertiary education', example: 'More students are choosing to pursue tertiary education abroad.' },
      { collocation: 'funding for tertiary education', example: 'The government announced increased funding for tertiary education.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'tertiary education', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'higher education', register: 'neutral', cefr: 'B2' },
      { word: 'university education', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-cultivate-critical-thinking',
    entry_type: 'word',
    word: 'cultivate critical thinking',
    ipa_uk: '/ˈkʌl.tɪ.veɪt ˈkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/',
    ipa_us: '/ˈkʌl.tə.veɪt ˈkrɪt̬.ɪ.kəl ˈθɪŋ.kɪŋ/',
    definition: 'to nurture, develop, and encourage the ability to analyze and evaluate arguments objectively',
    definition_source: 'cambridge',
    example: 'Universities must cultivate critical thinking through collaborative workshops and seminars.',
    definitions: [
      {
        definition: 'to nurture, develop, and encourage the ability to analyze and evaluate arguments objectively',
        example: 'Universities must cultivate critical thinking through collaborative workshops and seminars.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Modern curriculum design should place emphasis on exercises that cultivate critical thinking.',
      'Reading diverse viewpoints is an excellent way to cultivate critical thinking.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['cultivate', 'think'],
      noun: ['cultivation', 'critic', 'thought'],
      adjective: ['critical', 'cultivated'],
      adverb: ['critically']
    },
    collocations: [
      { collocation: 'cultivate critical thinking skills', example: 'Case studies are used to cultivate critical thinking skills.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'cultivate critical thinking', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'teach logical thinking', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-specialized-knowledge',
    entry_type: 'word',
    word: 'specialized knowledge',
    ipa_uk: '/ˈspeʃ.əl.aɪzd ˈnɒl.ɪdʒ/',
    ipa_us: '/ˈspeʃ.əl.aɪzd ˈnɑː.lɪdʒ/',
    definition: 'deep, intensive, and specific knowledge within a particular academic discipline or industry sector',
    definition_source: 'cambridge',
    example: 'A university degree equips graduates with specialized knowledge that is indispensable in fields like surgery.',
    definitions: [
      {
        definition: 'deep, intensive, and specific knowledge within a particular academic discipline or industry sector',
        example: 'A university degree equips graduates with specialized knowledge that is indispensable in fields like surgery.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'To solve complex technical issues, engineers must acquire specialized knowledge.',
      'The role requires specialized knowledge of local environmental legislation.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['specialize', 'know'],
      noun: ['specialty', 'specialist', 'knowledge'],
      adjective: ['specialized', 'knowledgeable'],
      adverb: []
    },
    collocations: [
      { collocation: 'acquire specialized knowledge', example: 'Advanced coursework is necessary to acquire specialized knowledge.' },
      { collocation: 'highly specialized knowledge', example: 'Nuclear physics demands highly specialized knowledge.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'specialized knowledge', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'specific knowledge', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-academic-curriculum',
    entry_type: 'word',
    word: 'academic curriculum',
    ipa_uk: '/ˌæk.əˈdem.ɪk kəˈrɪk.jə.ləm/',
    ipa_us: '/ˌæk.əˈdem.ɪk kəˈrɪk.jə.ləm/',
    definition: 'the subjects and courses that make up a study program at a school, college, or university',
    definition_source: 'cambridge',
    example: 'Universities need to align their academic curriculum with the shifting trends of modern industries.',
    definitions: [
      {
        definition: 'the subjects and courses that make up a study program at a school, college, or university',
        example: 'Universities need to align their academic curriculum with the shifting trends of modern industries.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    extra_examples: [
      'Art and music should be integrated into the core academic curriculum for balanced development.',
      'The academic curriculum was heavily revised to include more computer science courses.'
    ],
    grammar_note: 'noun [C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      noun: ['curriculum', 'curricula', 'academy'],
      adjective: ['academic', 'curricular'],
      adverb: ['academically']
    },
    collocations: [
      { collocation: 'core academic curriculum', example: 'Mathematics remains a part of the core academic curriculum.' },
      { collocation: 'design academic curriculum', example: 'Educators spend months designing academic curriculum.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'academic curriculum', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'syllabus', register: 'neutral', cefr: 'B2' },
      { word: 'study program', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-transferable-skills',
    entry_type: 'word',
    word: 'transferable skills',
    ipa_uk: '/trænsˈfɜː.rə.bəl skɪlz/',
    ipa_us: '/trænsˈfɝː.ə.bəl skɪlz/',
    definition: 'skills (such as communication, teamworking, problem-solving) that can be applied across different jobs and careers',
    definition_source: 'cambridge',
    example: 'While technical qualifications are vital, possessing transferable skills ensures career adaptability.',
    definitions: [
      {
        definition: 'skills (such as communication, teamworking, problem-solving) that can be applied across different jobs and careers',
        example: 'While technical qualifications are vital, possessing transferable skills ensures career adaptability.',
        cefr_level: 'C1',
        grammar_note: 'noun [plural]'
      }
    ],
    extra_examples: [
      'Voluntary work is an excellent way for young people to acquire key transferable skills.',
      'Universities are placing greater emphasis on teaching transferable skills to undergraduates.'
    ],
    grammar_note: 'noun [plural]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: ['transfer'],
      noun: ['transfer', 'skill'],
      adjective: ['transferable', 'skilled'],
      adverb: []
    },
    collocations: [
      { collocation: 'valuable transferable skills', example: 'Military experience provides valuable transferable skills to veterans.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'transferable skills', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'soft skills', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-vocational-training',
    entry_type: 'word',
    word: 'vocational training',
    ipa_uk: '/vəʊˈkeɪ.ʃən.əl ˈtreɪ.nɪŋ/',
    ipa_us: '/voʊˈkeɪ.ʃən.əl ˈtreɪ.nɪŋ/',
    definition: 'training that prepares a student directly for a specific occupation, trade, or craft, rather than focusing on broad academic study',
    definition_source: 'cambridge',
    example: 'Investing in vocational training can be a highly effective solution for lowering youth unemployment.',
    definitions: [
      {
        definition: 'training that prepares a student directly for a specific occupation, trade, or craft, rather than focusing on broad academic study',
        example: 'Investing in vocational training can be a highly effective solution for lowering youth unemployment.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'The local government established centers for vocational training in plumbing and electrical engineering.',
      'Many young people prefer vocational training over university as it offers a faster path to income.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      noun: ['vocation', 'training', 'trainer'],
      adjective: ['vocational'],
      adverb: []
    },
    collocations: [
      { collocation: 'provide vocational training', example: 'Community colleges provide vocational training for local businesses.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'vocational training', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'practical training', register: 'neutral', cefr: 'B1' },
      { word: 'job training', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-competitive-job-market',
    entry_type: 'word',
    word: 'adapt to a competitive job market',
    ipa_uk: '/əˈdæpt tuː ə kəmˈpet.ɪ.tɪv dʒɒb ˈmɑː.kɪt/',
    ipa_us: '/əˈdæpt tuː ə kəmˈpet̬.ə.t̬ɪv dʒɑːb ˈmɑːr.kɪt/',
    definition: 'to acquire new skills and upgrade one\'s capabilities to find and keep work in a tight, fast-changing labor market',
    definition_source: 'cambridge',
    example: 'Faced with automation, workers must acquire digital skills to adapt to an increasingly competitive job market.',
    definitions: [
      {
        definition: 'to acquire new skills and upgrade one\'s capabilities to find and keep work in a tight, fast-changing labor market',
        example: 'Faced with automation, workers must acquire digital skills to adapt to an increasingly competitive job market.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'To adapt to a competitive job market, young professionals must learn to network effectively.',
      'Acquiring advanced degrees is one way graduates attempt to adapt to a competitive job market.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['adapt', 'compete'],
      noun: ['adaptation', 'competition', 'market'],
      adjective: ['adaptable', 'competitive'],
      adverb: []
    },
    collocations: [
      { collocation: 'survive in a competitive job market', example: 'Soft skills are essential to survive in a competitive job market.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'adapt to a competitive job market', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'find a job', register: 'informal', cefr: 'A1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-interpersonal-skills',
    entry_type: 'word',
    word: 'interpersonal skills',
    ipa_uk: '/ˌɪn.təˈpɜː.sən.əl skɪlz/',
    ipa_us: '/ˌɪn.t̬ɚˈpɝː.sən.əl skɪlz/',
    definition: 'the soft skills used by a person to communicate, collaborate, and interact harmoniously and productively with others',
    definition_source: 'cambridge',
    example: 'In collaborative workplaces, strong interpersonal skills are valued just as highly as technical expertise.',
    definitions: [
      {
        definition: 'the soft skills used by a person to communicate, collaborate, and interact harmoniously and productively with others',
        example: 'In collaborative workplaces, strong interpersonal skills are valued just as highly as technical expertise.',
        cefr_level: 'C1',
        grammar_note: 'noun [plural]'
      }
    ],
    extra_examples: [
      'Job interviews are designed to gauge an applicant\'s interpersonal skills and emotional quotient.',
      'Without good interpersonal skills, leading a diverse team can be extremely difficult.'
    ],
    grammar_note: 'noun [plural]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      noun: ['person', 'skills'],
      adjective: ['interpersonal', 'personal', 'skilled'],
      adverb: ['personally']
    },
    collocations: [
      { collocation: 'excellent interpersonal skills', example: 'The sales team requires excellent interpersonal skills to convert clients.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'interpersonal skills', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'communication skills', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: "entry-durable",
    entry_type: "word",
    word: "durable",
    ipa_uk: "/ˈdʒʊə.rə.bəl/",
    ipa_us: "/ˈdʊr.ə.bəl/",
    definition: "able to last a long time without becoming damaged or wearing out",
    definition_source: "cambridge",
    example: "The manufacturer uses highly durable materials to ensure the equipment withstands harsh weather conditions.",
    definitions: [
      {
        definition: "able to last a long time without becoming damaged or wearing out",
        example: "The manufacturer uses highly durable materials to ensure the equipment withstands harsh weather conditions.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Economic analysts point out that the demand for durable goods has risen over the past quarter.",
      "A durable peace agreement requires mutual trust and compromises from both sides."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: [],
      noun: ["durability"],
      adjective: ["durable"],
      adverb: ["durably"]
    },
    collocations: [
      { collocation: "durable goods", example: "Household appliances and cars are categorized as durable goods." },
      { collocation: "highly durable", example: "Wood from cedar trees is highly durable even when exposed to moisture." }
    ],
    semantic_field_id: "material-property",
    semantic_field_label: "Material Property",
    semantic_field_words: [
      { word: "resilient", cefr: "C1", register: "academic" },
      { word: "robust", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "long-lasting", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing materials, economic goods, or long-lasting agreements."
  },
  {
    id: "entry-sustainable",
    entry_type: "word",
    word: "sustainable",
    ipa_uk: "/səˈsteɪ.nə.bəl/",
    ipa_us: "/səˈsteɪ.nə.bəl/",
    definition: "able to continue over a period of time, or causing little or no damage to the environment",
    definition_source: "cambridge",
    example: "The government should promote sustainable farming methods to prevent soil degradation.",
    definitions: [
      {
        definition: "able to continue over a period of time, or causing little or no damage to the environment",
        example: "The government should promote sustainable farming methods to prevent soil degradation.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Transitioning to sustainable energy sources like solar and wind is essential for reducing carbon emissions.",
      "The business model is not sustainable in the long run due to high operating costs."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: ["sustain"],
      noun: ["sustainability", "sustenance"],
      adjective: ["sustainable"],
      adverb: ["sustainably"]
    },
    collocations: [
      { collocation: "sustainable development", example: "UN sustainable development goals target clean water and sanitation." },
      { collocation: "sustainable growth", example: "The company aims for sustainable growth without over-leveraging assets." }
    ],
    semantic_field_id: "ecology-environment",
    semantic_field_label: "Ecology & Environment",
    semantic_field_words: [
      { word: "renewable", cefr: "B2", register: "neutral" },
      { word: "eco-friendly", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "viable", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-3", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing ecology, environmental policies, or long-term financial viability."
  },
  {
    id: "entry-concrete",
    entry_type: "word",
    word: "concrete",
    ipa_uk: "/ˈkɒŋ.kriːt/",
    ipa_us: "/ˈkɑːn.kriːt/",
    definition: "a very hard building material made of cement, sand, water, and gravel, or clear and certain rather than general",
    definition_source: "cambridge",
    example: "The foundations of the apartment block are made of reinforced concrete.",
    definitions: [
      {
        definition: "a very hard building material made of cement, sand, water, and gravel",
        example: "The foundations of the apartment block are made of reinforced concrete.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      },
      {
        definition: "clear and certain, or based on real things and facts rather than ideas",
        example: "We need concrete evidence before we can make an official accusation.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The architect decided to leave the raw concrete walls exposed for a modern, industrial look.",
      "Can you give me a concrete example of how this software will improve efficiency?"
    ],
    grammar_note: "noun [U] / adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["concrete"],
      adjective: ["concrete"],
      adverb: ["concretely"]
    },
    collocations: [
      { collocation: "concrete evidence", example: "Without concrete evidence, the prosecutor had to drop the case." },
      { collocation: "reinforced concrete", example: "Reinforced concrete was a major technological breakthrough for civil engineering." }
    ],
    semantic_field_id: "materials-construction",
    semantic_field_label: "Materials & Construction",
    semantic_field_words: [
      { word: "cement", cefr: "B2", register: "neutral" },
      { word: "factual", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "tangible", register: "academic", cefr: "C1" },
      { word: "cement", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-6"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing construction components, modern architecture, or logical reasoning."
  },
  {
    id: "entry-breakwater",
    entry_type: "word",
    word: "breakwater",
    ipa_uk: "/ˈbreɪkˌwɔː.tər/",
    ipa_us: "/ˈbreɪkˌwɑː.t̬ɚ/",
    definition: "a strong wall or barrier built out into the sea to protect a harbor or beach from the force of waves",
    definition_source: "cambridge",
    example: "The port authorities constructed a stone breakwater to safeguard docked vessels from high tides.",
    definitions: [
      {
        definition: "a strong wall or barrier built out into the sea to protect a harbor or beach from the force of waves",
        example: "The port authorities constructed a stone breakwater to safeguard docked vessels from high tides.",
        cefr_level: "C2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Stretching out into the bay, the concrete breakwater also served as a popular walkway for tourists.",
      "Engineers are reinforcing the old breakwater to counter severe coastal erosion."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "technical",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["breakwater"],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: "construct a breakwater", example: "It is expensive to construct a breakwater in deep offshore areas." },
      { collocation: "coastal breakwater", example: "Coastal breakwaters modify wave patterns and protect shorelines." }
    ],
    semantic_field_id: "coastal-engineering",
    semantic_field_label: "Coastal Engineering",
    semantic_field_words: [
      { word: "jetty", cefr: "C2", register: "technical" },
      { word: "barrier", cefr: "B2", register: "neutral" },
      { word: "sea wall", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "groyne", register: "technical", cefr: "C2" }
    ],
    folder_ids: ["folder-6"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "IELTS Writing Task 1 - describing maps, coastal developments, or structural processes."
  },
  {
    id: "entry-binding",
    entry_type: "word",
    word: "binding",
    ipa_uk: "/ˈbaɪn.dɪŋ/",
    ipa_us: "/ˈbaɪn.dɪŋ/",
    definition: "especially of an agreement, that cannot be legally avoided, ignored, or broken",
    definition_source: "cambridge",
    example: "The treaty signed by both nations is a legally binding contract under international law.",
    definitions: [
      {
        definition: "especially of an agreement, that cannot be legally avoided, ignored, or broken",
        example: "The treaty signed by both nations is a legally binding contract under international law.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The arbitrator's decision is final and binding on all parties involved in the dispute.",
      "The glue acts as a binding agent to hold the wood particles together securely."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["bind"],
      noun: ["binder", "binding"],
      adjective: ["binding"],
      adverb: []
    },
    collocations: [
      { collocation: "legally binding", example: "Always read the terms and conditions before signing a legally binding document." },
      { collocation: "binding agreement", example: "The oral agreement did not constitute a binding agreement in the eyes of the court." }
    ],
    semantic_field_id: "law-contracts",
    semantic_field_label: "Law & Contracts",
    semantic_field_words: [
      { word: "obligatory", cefr: "C1", register: "formal" },
      { word: "compulsory", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "mandatory", register: "formal", cefr: "C1" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing agreements, laws, administrative rules, or physical cohesion."
  },
  {
    id: "entry-composition",
    entry_type: "word",
    word: "composition",
    ipa_uk: "/ˌkɒm.pəˈzɪʃ.ən/",
    ipa_us: "/ˌkɑːm.pəˈzɪʃ.ən/",
    definition: "the parts, elements, or mix of ingredients that make up a whole system or substance",
    definition_source: "cambridge",
    example: "Scientists analyzed the chemical composition of the lunar soil samples.",
    definitions: [
      {
        definition: "the parts, elements, or mix of ingredients that make up a whole system or substance",
        example: "Scientists analyzed the chemical composition of the lunar soil samples.",
        cefr_level: "C1",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "a piece of writing, music, or art",
        example: "The student was asked to write a short musical composition for the class.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The shifting demographic composition of the workforce presents new challenges for managers.",
      "The painter paid close attention to the composition and lighting of the landscape."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["compose"],
      noun: ["composition", "composer"],
      adjective: ["composite"],
      adverb: []
    },
    collocations: [
      { collocation: "chemical composition", example: "The chemical composition of water consists of two parts hydrogen to one part oxygen." },
      { collocation: "composition of the board", example: "Changes in the composition of the board reflect the new corporate strategy." }
    ],
    semantic_field_id: "structure-makeup",
    semantic_field_label: "Structure & Makeup",
    semantic_field_words: [
      { word: "constitution", cefr: "C2", register: "formal" },
      { word: "make-up", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "makeup", register: "neutral", cefr: "B2" },
      { word: "structure", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-science"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing materials, scientific structures, essays, or artistic layouts."
  },
  {
    id: "entry-punctual",
    entry_type: "word",
    word: "punctual",
    ipa_uk: "/ˈpʌŋk.tʃu.əl/",
    ipa_us: "/ˈpʌŋk.tʃu.əl/",
    definition: "arriving, doing something, or happening at the expected, correct time; not late",
    definition_source: "cambridge",
    example: "The airline has a reputation for being punctual, with 95% of flights arriving on time.",
    definitions: [
      {
        definition: "arriving, doing something, or happening at the expected, correct time; not late",
        example: "The airline has a reputation for being punctual, with 95% of flights arriving on time.",
        cefr_level: "B1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "In some cultures, it is considered highly impolite not to be punctual for social events.",
      "The punctual payment of taxes is a civic duty enforced by the revenue authorities."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B1",
    register: "neutral",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      noun: ["punctuality"],
      adjective: ["punctual"],
      adverb: ["punctually"]
    },
    collocations: [
      { collocation: "remain punctual", example: "Despite heavy traffic, the delivery driver managed to remain punctual." },
      { collocation: "punctual service", example: "Customers appreciate the punctual service provided by the local courier." }
    ],
    semantic_field_id: "time-discipline",
    semantic_field_label: "Time & Discipline",
    semantic_field_words: [
      { word: "prompt", cefr: "B2", register: "neutral" },
      { word: "timely", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "on-time", register: "informal", cefr: "A2" }
    ],
    folder_ids: ["folder-4", "folder-speaking-work-study"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing work habits, transportation schedules, or daily routines."
  },
  {
    id: "entry-livestock",
    entry_type: "word",
    word: "livestock",
    ipa_uk: "/ˈlaɪv.stɒk/",
    ipa_us: "/ˈlaɪv.stɑːk/",
    definition: "animals and birds kept on a farm for use or profit, such as cattle, sheep, or pigs",
    definition_source: "cambridge",
    example: "Drought and heatwaves have severely affected the health of local livestock.",
    definitions: [
      {
        definition: "animals and birds kept on a farm for use or profit, such as cattle, sheep, or pigs",
        example: "Drought and heatwaves have severely affected the health of local livestock.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Livestock farming accounts for a significant portion of agricultural greenhouse gas emissions.",
      "The farmers moved their livestock to higher ground during the flash floods."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["livestock", "stock"]
    },
    collocations: [
      { collocation: "raise livestock", example: "Nomadic communities raise livestock for milk, meat, and wool." },
      { collocation: "livestock sector", example: "The livestock sector is a major driver of the rural economy." }
    ],
    semantic_field_id: "agriculture-farming",
    semantic_field_label: "Agriculture & Farming",
    semantic_field_words: [
      { word: "cattle", cefr: "B2", register: "neutral" },
      { word: "agriculture", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "farm animals", register: "informal", cefr: "A2" }
    ],
    folder_ids: ["folder-2", "folder-3"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing agricultural economics, food production, or ecology."
  },
  {
    id: "entry-tractor",
    entry_type: "word",
    word: "tractor",
    ipa_uk: "/ˈtræk.tər/",
    ipa_us: "/ˈtræk.tɚ/",
    definition: "a powerful motor vehicle with large back wheels, used for pulling agricultural machinery on a farm",
    definition_source: "cambridge",
    example: "The farmer used the tractor to pull the plow through the muddy fields.",
    definitions: [
      {
        definition: "a powerful motor vehicle with large back wheels, used for pulling agricultural machinery on a farm",
        example: "The farmer used the tractor to pull the plow through the muddy fields.",
        cefr_level: "B1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Modern tractors are equipped with GPS systems to automate planting and sowing.",
      "A long line of tractors blocked the highway during the agricultural strike."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B1",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["tractor", "traction"]
    },
    collocations: [
      { collocation: "drive a tractor", example: "Children growing up on farms often learn to drive a tractor at a young age." },
      { collocation: "farm tractor", example: "The dealer sells various models of farm tractors and harvesting equipment." }
    ],
    semantic_field_id: "agriculture-machinery",
    semantic_field_label: "Agriculture & Machinery",
    semantic_field_words: [
      { word: "machinery", cefr: "B2", register: "neutral" },
      { word: "harvester", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "farm vehicle", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-2", "folder-6"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing farming technology, maps/diagrams of farm environments, or trade machinery."
  },
  {
    id: "entry-impassive",
    entry_type: "word",
    word: "impassive",
    ipa_uk: "/ɪmˈpæs.ɪv/",
    ipa_us: "/ɪmˈpæs.ɪv/",
    definition: "expressing no emotion, or completely flat and featureless",
    definition_source: "cambridge",
    example: "Beneath the flat, impassive surface of Australia lie hidden mountains and valleys.",
    definitions: [
      {
        definition: "expressing no emotion, or completely flat and featureless",
        example: "Beneath the flat, impassive surface of Australia lie hidden mountains and valleys.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The defendant remained impassive throughout the trial, showing no signs of remorse.",
      "An impassive stone facade hid the busy activity inside the monastery."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["impassivity"],
      adjective: ["impassive"],
      adverb: ["impassively"]
    },
    collocations: [
      { collocation: "impassive face", example: "He kept an impassive face to avoid revealing his hand in the game." },
      { collocation: "impassive surface", example: "The impassive surface of the lake reflected the stormy gray clouds." }
    ],
    semantic_field_id: "expression-emotion",
    semantic_field_label: "Expression & Emotion",
    semantic_field_words: [
      { word: "expressionless", cefr: "B2", register: "neutral" },
      { word: "stolid", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "emotionless", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - describing the calm Australian terrain."
  },
  {
    id: "entry-stealthily",
    entry_type: "word",
    word: "stealthily",
    ipa_uk: "/ˈstel.θəl.i/",
    ipa_us: "/ˈstel.θəl.i/",
    definition: "in a quiet, secret, or cautious manner to avoid being noticed",
    definition_source: "cambridge",
    example: "The disease spreads stealthily through the population, often showing no initial symptoms.",
    definitions: [
      {
        definition: "in a quiet, secret, or cautious manner to avoid being noticed",
        example: "The disease spreads stealthily through the population, often showing no initial symptoms.",
        cefr_level: "C2",
        grammar_note: "adverb"
      }
    ],
    extra_examples: [
      "Deadly salt is stealthily killing much of the agricultural landscape in the basin.",
      "The predator crawled stealthily through the tall grass toward its prey."
    ],
    grammar_note: "adverb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: [],
      noun: ["stealth"],
      adjective: ["stealthy"],
      adverb: ["stealthily"]
    },
    collocations: [
      { collocation: "move stealthily", example: "The military unit managed to move stealthily behind enemy lines." },
      { collocation: "spread stealthily", example: "Mold can spread stealthily inside walls before becoming visible." }
    ],
    semantic_field_id: "movement-secrecy",
    semantic_field_label: "Movement & Secrecy",
    semantic_field_words: [
      { word: "secretly", cefr: "B1", register: "neutral" },
      { word: "surreptitiously", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "secretly", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - describing the quiet destruction by salt."
  },
  {
    id: "entry-pinpoint",
    entry_type: "word",
    word: "pinpoint",
    ipa_uk: "/ˈpɪn.pɔɪnt/",
    ipa_us: "/ˈpɪn.pɔɪnt/",
    definition: "to locate or identify the exact position, fact, or cause of something",
    definition_source: "cambridge",
    example: "Geologists are using new electromagnetic tools to pinpoint the presence of salt subterranean reservoirs.",
    definitions: [
      {
        definition: "to locate or identify the exact position, fact, or cause of something",
        example: "Geologists are using new electromagnetic tools to pinpoint the presence of salt subterranean reservoirs.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "It is difficult to pinpoint the precise moment when the relationship began to deteriorate.",
      "The technician was able to pinpoint the software bug within a few minutes."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["pinpoint"],
      noun: ["pinpoint"],
      adjective: ["pinpoint"]
    },
    collocations: [
      { collocation: "pinpoint the cause", example: "Medical researchers struggle to pinpoint the cause of the disease." },
      { collocation: "pinpoint the location", example: "GPS signals help rescue teams pinpoint the location of lost hikers." }
    ],
    semantic_field_id: "discovery-precision",
    semantic_field_label: "Discovery & Precision",
    semantic_field_words: [
      { word: "identify", cefr: "B2", register: "neutral" },
      { word: "locate", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "identify", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - prospecting for subterranean salt."
  },
  {
    id: "entry-render",
    entry_type: "word",
    word: "render",
    ipa_uk: "/ˈren.dər/",
    ipa_us: "/ˈren.dər/",
    definition: "to cause someone or something to be in a particular state or condition",
    definition_source: "cambridge",
    example: "The heavy storm rendered the local roads completely impassable.",
    definitions: [
      {
        definition: "to cause someone or something to be in a particular state or condition",
        example: "The heavy storm rendered the local roads completely impassable.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "to give, provide, or present something (e.g. render assistance)",
        example: "The organization is ready to render aid to the earthquake victims.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Without clear plans, the tree-planting efforts may be rendered ineffective by underlying salt.",
      "The artist rendered the landscape with exquisite detail and realism."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["render"],
      noun: ["rendering", "rendition"]
    },
    collocations: [
      { collocation: "render ineffective", example: "High temperatures can render certain vaccines ineffective." },
      { collocation: "render assistance", example: "Passersby stopped to render assistance to the stranded motorist." }
    ],
    semantic_field_id: "causation-change",
    semantic_field_label: "Causation & Change",
    semantic_field_words: [
      { word: "make", cefr: "A1", register: "neutral" },
      { word: "transform", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "make", register: "neutral", cefr: "A1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - tree-planting rendered ineffective."
  },
  {
    id: "entry-ensuing",
    entry_type: "word",
    word: "ensuing",
    ipa_uk: "/ɪnˈsjuː.ɪŋ/",
    ipa_us: "/ɪnˈsjuː.ɪŋ/",
    definition: "happening after or following something else as a direct result",
    definition_source: "cambridge",
    example: "Over the ensuing decades, the small salty patches consumed hectares of arable land.",
    definitions: [
      {
        definition: "happening after or following something else as a direct result",
        example: "Over the ensuing decades, the small salty patches consumed hectares of arable land.",
        cefr_level: "C1",
        grammar_note: "adjective [always before noun]"
      }
    ],
    extra_examples: [
      "In the ensuing panic, several people were injured as they tried to exit the building.",
      "The agreement led to stability and growth during the ensuing years."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["ensue"],
      adjective: ["ensuing"]
    },
    collocations: [
      { collocation: "ensuing decades", example: "Technological changes over the ensuing decades reshaped society." },
      { collocation: "ensuing battle", example: "The ensuing battle resulted in massive losses for both armies." }
    ],
    semantic_field_id: "time-sequence",
    semantic_field_label: "Time & Sequence",
    semantic_field_words: [
      { word: "subsequent", cefr: "B2", register: "academic" },
      { word: "following", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "following", register: "neutral", cefr: "B1" },
      { word: "subsequent", register: "academic", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - patches multiplying over the ensuing decades."
  },
  {
    id: "entry-encroach",
    entry_type: "word",
    word: "encroach",
    ipa_uk: "/ɪnˈkrəʊtʃ/",
    ipa_us: "/ɪnˈkroʊtʃ/",
    definition: "to gradually intrude, advance beyond proper limits, or cover more land",
    definition_source: "cambridge",
    example: "The rising sea levels continue to encroach upon low-lying coastal villages.",
    definitions: [
      {
        definition: "to gradually cover more and more of an area of land",
        example: "The desert continues to encroach on once-fertile grazing lands.",
        cefr_level: "C2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "to slowly take away someone's rights, time, or freedom",
        example: "Employees feel that work tasks are beginning to encroach on their personal lives.",
        cefr_level: "C2",
        grammar_note: "intransitive verb"
      }
    ],
    extra_examples: [
      "Despite mounting containment efforts, the white salt crusts continued to encroach.",
      "The city has laws preventing industrial projects from encroaching on natural reserves."
    ],
    grammar_note: "intransitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["encroach"],
      noun: ["encroachment"]
    },
    collocations: [
      { collocation: "encroach upon", example: "We must not allow commercial activities to encroach upon protected parks." },
      { collocation: "gradually encroach", example: "Urban sprawl is gradually encroaching on the surrounding agricultural belt." }
    ],
    semantic_field_id: "intrusive-movement",
    semantic_field_label: "Intrusive Movement",
    semantic_field_words: [
      { word: "intrude", cefr: "C1", register: "formal" },
      { word: "trespass", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "intrude", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-1"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - 'white death' encroaching on farmland."
  },
  {
    id: "entry-eclipse",
    entry_type: "word",
    word: "eclipse",
    ipa_uk: "/ɪˈklɪps/",
    ipa_us: "/ɪˈklɪps/",
    definition: "to make another thing seem less important, significant, or successful by comparison",
    definition_source: "cambridge",
    example: "The young athlete's performance eclipsed the accomplishments of all previous champions.",
    definitions: [
      {
        definition: "to make another thing seem less important, significant, or successful by comparison",
        example: "The young athlete's performance eclipsed the accomplishments of all previous champions.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "an occasion when the sun or moon temporarily disappears from view",
        example: "Thousands of skywatchers gathered to watch the total solar eclipse.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Small local successes in halting salinity were eclipsed by massive fresh outbreaks.",
      "The company's profits this year have completely eclipsed last year's figures."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["eclipse"],
      noun: ["eclipse"]
    },
    collocations: [
      { collocation: "totally eclipse", example: "The new technology will totally eclipse current standard models." },
      { collocation: "be eclipsed by", example: "The actor's screen presence was eclipsed by his co-star's vibrant performance." }
    ],
    semantic_field_id: "dominance-importance",
    semantic_field_label: "Dominance & Importance",
    semantic_field_words: [
      { word: "overshadow", cefr: "C1", register: "academic" },
      { word: "outshine", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "overshadow", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - successes eclipsed by larger defeats."
  },
  {
    id: "entry-intercept",
    entry_type: "word",
    word: "intercept",
    ipa_uk: "/ˌɪn.təˈsept/",
    ipa_us: "/ˌɪn.t̬ɚˈsept/",
    definition: "to stop, catch, or block something before it reaches its destination",
    definition_source: "cambridge",
    example: "Police officers managed to intercept the shipment of illegal goods at the harbor.",
    definitions: [
      {
        definition: "to stop, catch, or block something before it reaches its destination",
        example: "Police officers managed to intercept the shipment of illegal goods at the harbor.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The unexpected outbreaks of salt were difficult for farmers to intercept.",
      "Defense systems were deployed to intercept incoming missiles."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["intercept"],
      noun: ["interception", "interceptor"]
    },
    collocations: [
      { collocation: "intercept a message", example: "Intelligence agencies managed to intercept a coded message." },
      { collocation: "intercept communication", example: "The hacker attempted to intercept communication between the servers." }
    ],
    semantic_field_id: "prevention-blocking",
    semantic_field_label: "Prevention & Blocking",
    semantic_field_words: [
      { word: "block", cefr: "B1", register: "neutral" },
      { word: "obstruct", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "block", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - salt beating plans to intercept it."
  },
  {
    id: "entry-subterranean",
    entry_type: "word",
    word: "subterranean",
    ipa_uk: "/ˌsʌb.təˈreɪ.ni.ən/",
    ipa_us: "/ˌsʌb.təˈreɪ.ni.ən/",
    definition: "existing, occurring, or active under the surface of the earth",
    definition_source: "cambridge",
    example: "The geologists explored a vast network of subterranean caverns and tunnels.",
    definitions: [
      {
        definition: "existing, occurring, or active under the surface of the earth",
        example: "The geologists explored a vast network of subterranean caverns and tunnels.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Only recently have scientists started to map the secret subterranean passages of salt.",
      "The subterranean temperature remains relatively constant throughout the year."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      noun: ["terrain"],
      adjective: ["subterranean"]
    },
    collocations: [
      { collocation: "subterranean passages", example: "Water flows through subterranean passages to form natural springs." },
      { collocation: "subterranean activity", example: "Seismometers are used to monitor subterranean activity near the volcano." }
    ],
    semantic_field_id: "earth-geology",
    semantic_field_label: "Earth & Geology",
    semantic_field_words: [
      { word: "underground", cefr: "B1", register: "neutral" },
      { word: "geological", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "underground", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - secret subterranean stores and passages."
  },
  {
    id: "entry-delineate",
    entry_type: "word",
    word: "delineate",
    ipa_uk: "/dɪˈlɪn.i.eɪt/",
    ipa_us: "/dɪˈlɪn.i.eɪt/",
    definition: "to describe, portray, or outline the boundary of something precisely",
    definition_source: "cambridge",
    example: "The contract clearly delineates the roles and responsibilities of each partner.",
    definitions: [
      {
        definition: "to describe, portray, or outline the boundary of something precisely",
        example: "The contract clearly delineates the roles and responsibilities of each partner.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Radiometric analysis allows scientists to delineate landforms and track salt movement.",
      "The map delineates the boundary between the public park and private estate."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["delineate"],
      noun: ["delineation"]
    },
    collocations: [
      { collocation: "clearly delineate", example: "We must clearly delineate the scope of the project before writing the report." },
      { collocation: "delineate boundaries", example: "Referees are responsible for delineating boundaries of play during the match." }
    ],
    semantic_field_id: "description-accuracy",
    semantic_field_label: "Description & Accuracy",
    semantic_field_words: [
      { word: "outline", cefr: "B2", register: "neutral" },
      { word: "define", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "outline", register: "neutral", cefr: "B2" },
      { word: "define", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - delineation of subterranean landforms."
  },
  {
    id: "entry-curb",
    entry_type: "word",
    word: "curb",
    ipa_uk: "/kɜːb/",
    ipa_us: "/kɝːb/",
    definition: "to control, limit, or restrain an unwanted force or action",
    definition_source: "cambridge",
    example: "The central bank raised interest rates in an effort to curb rising inflation.",
    definitions: [
      {
        definition: "to control, limit, or restrain an unwanted force or action",
        example: "The central bank raised interest rates in an effort to curb rising inflation.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "a raised edge along the side of a street next to the sidewalk",
        example: "He parked his car close to the curb to avoid blocking traffic.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Environmental groups are modeling various ways of containing or curbing the salinity menace.",
      "We must take decisive steps to curb carbon emissions before irreversible changes occur."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["curb"],
      noun: ["curb"]
    },
    collocations: [
      { collocation: "curb inflation", example: "Tightening fiscal policy is one way to curb inflation." },
      { collocation: "curb spending", example: "The council announced measures to curb excessive public spending." }
    ],
    semantic_field_id: "prevention-control",
    semantic_field_label: "Prevention & Control",
    semantic_field_words: [
      { word: "limit", cefr: "B1", register: "neutral" },
      { word: "restrain", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "restrain", register: "formal", cefr: "C1" },
      { word: "limit", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - curbing the salt menace."
  },
  {
    id: "entry-menace",
    entry_type: "word",
    word: "menace",
    ipa_uk: "/ˈmen.ɪs/",
    ipa_us: "/ˈmen.ɪs/",
    definition: "a threat or danger; something that is likely to cause harm",
    definition_source: "cambridge",
    example: "The build-up of plastic waste in the ocean represents a serious environmental menace.",
    definitions: [
      {
        definition: "a threat or danger; something that is likely to cause harm",
        example: "The build-up of plastic waste in the ocean represents a serious environmental menace.",
        cefr_level: "C1",
        grammar_note: "noun [C usually singular]"
      },
      {
        definition: "to threaten or put someone or something in danger",
        example: "The island communities are menaced by rising sea levels.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Farmers are working together on the ground to combat the menace of soil salinity.",
      "Stray dogs roaming the neighborhood became a public menace."
    ],
    grammar_note: "noun / transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "neutral",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["menace"],
      noun: ["menace"],
      adjective: ["menacing"],
      adverb: ["menacingly"]
    },
    collocations: [
      { collocation: "environmental menace", example: "Desertification is a growing environmental menace in arid regions." },
      { collocation: "pose a menace", example: "Drunk drivers pose a deadly menace to pedestrian safety." }
    ],
    semantic_field_id: "danger-threat",
    semantic_field_label: "Danger & Threat",
    semantic_field_words: [
      { word: "threat", cefr: "B2", register: "neutral" },
      { word: "hazard", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "threat", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - curbing the salt menace."
  },
  {
    id: "entry-salinity",
    entry_type: "word",
    word: "salinity",
    ipa_uk: "/səˈlɪn.ə.ti/",
    ipa_us: "/səˈlɪn.ə.t̬i/",
    definition: "the fact of containing salt, or the amount of salt contained in something",
    definition_source: "cambridge",
    example: "The salinity of the water must be carefully monitored in the fish hatchery.",
    definitions: [
      {
        definition: "the fact of containing salt, or the amount of salt contained in something",
        example: "The salinity of the water must be carefully monitored in the fish hatchery.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Broadacre salinity has sterilized millions of hectares of agricultural land.",
      "The Dead Sea is famous for its exceptionally high levels of salinity."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "scientific",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["salinity", "salt"],
      adjective: ["saline", "salty"]
    },
    collocations: [
      { collocation: "soil salinity", example: "Soil salinity prevents crops from absorbing essential nutrients." },
      { collocation: "high salinity", example: "Many marine organisms cannot survive in waters with extremely high salinity." }
    ],
    semantic_field_id: "chemical-property",
    semantic_field_label: "Chemical Property",
    semantic_field_words: [
      { word: "acidity", cefr: "C1", register: "academic" },
      { word: "alkalinity", cefr: "C2", register: "scientific" }
    ],
    register_synonyms: [
      { word: "saltiness", register: "informal", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - title subject describing salt contents."
  },
  {
    id: "entry-broadacre",
    entry_type: "word",
    word: "broadacre",
    ipa_uk: "/ˈbrɔːdˌeɪ.kər/",
    ipa_us: "/ˈbrɑːdˌeɪ.kɚ/",
    definition: "relating to large-scale agricultural production of crops on wide areas of land",
    definition_source: "cambridge",
    example: "The plains of Western Australia are dominated by broadacre farming of wheat and barley.",
    definitions: [
      {
        definition: "relating to large-scale agricultural production of crops on wide areas of land",
        example: "The plains of Western Australia are dominated by broadacre farming of wheat and barley.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "We do not yet have satisfactory economic solutions for broadacre salinity.",
      "The transition to broadacre cropping required investment in heavy machinery."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "technical",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["acre", "acreage"]
    },
    collocations: [
      { collocation: "broadacre farming", example: "Broadacre farming relies on massive harvesters to cover thousands of hectares." },
      { collocation: "broadacre cropping", example: "Canola and legumes are commonly grown in broadacre cropping systems." }
    ],
    semantic_field_id: "agriculture-farming",
    semantic_field_label: "Agriculture & Farming",
    semantic_field_words: [
      { word: "pastoral", cefr: "C1", register: "academic" },
      { word: "arable", cefr: "C2", register: "technical" }
    ],
    register_synonyms: [
      { word: "large-scale farming", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-2"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - discussing broadacre salinity."
  },
  {
    id: "entry-mounting",
    entry_type: "word",
    word: "mounting",
    ipa_uk: "/ˈmaʊn.tɪŋ/",
    ipa_us: "/ˈmaʊn.t̬ɪŋ/",
    definition: "gradually increasing in amount, force, or intensity",
    definition_source: "cambridge",
    example: "The government faces mounting pressure to address the cost-of-living crisis.",
    definitions: [
      {
        definition: "gradually increasing in amount, force, or intensity",
        example: "The government faces mounting pressure to address the cost-of-living crisis.",
        cefr_level: "C1",
        grammar_note: "adjective [always before noun]"
      }
    ],
    extra_examples: [
      "Despite a mounting effort by scientists and farmers, the salinity problem continued to spread.",
      "There is mounting evidence that climate change is intensifying weather patterns."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["mount"],
      noun: ["mount"]
    },
    collocations: [
      { collocation: "mounting pressure", example: "The CEO resigned amidst mounting pressure from shareholders." },
      { collocation: "mounting concern", example: "There is mounting concern over safety standards at the site." }
    ],
    semantic_field_id: "growth-intensity",
    semantic_field_label: "Growth & Intensity",
    semantic_field_words: [
      { word: "growing", cefr: "B1", register: "neutral" },
      { word: "escalating", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "growing", register: "neutral", cefr: "B1" },
      { word: "escalating", register: "formal", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - mounting effort by scientists and governments."
  },
  {
    id: "entry-ambush",
    entry_type: "word",
    word: "ambush",
    ipa_uk: "/ˈæm.bʊʃ/",
    ipa_us: "/ˈæm.bʊʃ/",
    definition: "a sudden surprise attack from a hidden position, or to attack in this way",
    definition_source: "cambridge",
    example: "The enemy forces were caught in a deadly ambush along the narrow forest pass.",
    definitions: [
      {
        definition: "a sudden surprise attack from a hidden position",
        example: "The enemy forces were caught in a deadly ambush along the narrow forest pass.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "to attack someone or something by surprise from a hidden position",
        example: "Reporters tried to ambush the politician as he left his office.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Part of the problem lies in salt's ability to mount ambushes, emerging somewhere new unexpectedly.",
      "The wolves hid in the bushes, waiting to ambush the deer."
    ],
    grammar_note: "noun / transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["ambush"],
      noun: ["ambush"]
    },
    collocations: [
      { collocation: "mount an ambush", example: "Guerrilla units are trained to mount sudden ambushes." },
      { collocation: "fear of ambush", example: "The soldiers marched cautiously through the canyon in fear of ambush." }
    ],
    semantic_field_id: "surprise-attack",
    semantic_field_label: "Surprise & Attack",
    semantic_field_words: [
      { word: "attack", cefr: "B1", register: "neutral" },
      { word: "trap", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "surprise attack", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - salt's ability to mount ambushes."
  },
  {
    id: "entry-conductivity",
    entry_type: "word",
    word: "conductivity",
    ipa_uk: "/ˌkɒn.dʌkˈtɪv.ə.ti/",
    ipa_us: "/ˌkɑːn.dʌkˈtɪv.ə.t̬i/",
    definition: "the measure of a material's ability to conduct an electric current or heat",
    definition_source: "cambridge",
    example: "Copper is widely used in electrical wiring due to its exceptionally high conductivity.",
    definitions: [
      {
        definition: "the measure of a material's ability to conduct an electric current or heat",
        example: "Copper is widely used in electrical wiring due to its exceptionally high conductivity.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Electromagnetic surveys measure the electrical conductivity of soil to map salt distribution.",
      "The thermal conductivity of wood is low, making it a good insulator."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "scientific",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["conduct"],
      noun: ["conductivity", "conductor", "conductance"],
      adjective: ["conductive"]
    },
    collocations: [
      { collocation: "electrical conductivity", example: "Water with high salt levels has higher electrical conductivity." },
      { collocation: "thermal conductivity", example: "Aluminum offers superior thermal conductivity for cookware." }
    ],
    semantic_field_id: "physics-materials",
    semantic_field_label: "Physics & Materials",
    semantic_field_words: [
      { word: "resistance", cefr: "B2", register: "neutral" },
      { word: "insulation", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "transmission", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-science"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - measuring electrical conductivity of soil."
  },
  {
    id: "entry-drainage",
    entry_type: "word",
    word: "drainage",
    ipa_uk: "/ˈdreɪ.nɪdʒ/",
    ipa_us: "/ˈdreɪ.nɪdʒ/",
    definition: "the system or process of removing water or waste liquids from an area of land or building",
    definition_source: "cambridge",
    example: "The city council invested in improving the storm drainage to prevent winter floods.",
    definitions: [
      {
        definition: "the system or process of removing water or waste liquids from an area of land or building",
        example: "The city council invested in improving the storm drainage to prevent winter floods.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Scientists revealed a network of ancient drainage channels buried meters beneath the soil.",
      "The soil profile has poor drainage, leading to waterlogged crop roots."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["drain"],
      noun: ["drainage", "drain"]
    },
    collocations: [
      { collocation: "drainage channel", example: "Buried drainage channels carry salt and water in different directions underground." },
      { collocation: "poor drainage", example: "Clay soil is characterized by poor drainage and slow water absorption." }
    ],
    semantic_field_id: "water-management",
    semantic_field_label: "Water Management",
    semantic_field_words: [
      { word: "irrigation", cefr: "C1", register: "technical" },
      { word: "sewage", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "outflow", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-6"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - network of ancient drainage channels buried."
  },
  {
    id: "entry-irritable",
    entry_type: "word",
    word: "irritable",
    ipa_uk: "/ˈir.ɪ.tə.bəl/",
    ipa_us: "/ˈir.ə.t̬ə.bəl/",
    definition: "becoming annoyed or angry very easily",
    definition_source: "cambridge",
    example: "The baby became extremely irritable because she was teething and couldn't sleep well.",
    definitions: [
      {
        definition: "becoming annoyed or angry very easily",
        example: "The baby became extremely irritable because she was teething and couldn't sleep well.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Lack of sleep often makes people highly irritable and touchy during the day.",
      "An irritable mood can negatively impact how you communicate with colleagues and family members."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["irritate"],
      noun: ["irritability", "irritation"],
      adjective: ["irritable", "irritating"],
      adverb: ["irritably"]
    },
    collocations: [
      { collocation: "grow irritable", example: "He tends to grow irritable when he is under severe work stress." },
      { collocation: "irritable bowel syndrome", example: "Dietary changes can help manage symptoms of irritable bowel syndrome." }
    ],
    semantic_field_id: "mood-temperament",
    semantic_field_label: "Mood & Temperament",
    semantic_field_words: [
      { word: "touchy", cefr: "C2", register: "neutral" },
      { word: "grumpy", cefr: "B2", register: "informal" }
    ],
    register_synonyms: [
      { word: "bad-tempered", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-speaking-relationships"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing personality, mood patterns, and social relationships."
  },
  {
    id: "entry-imperial",
    entry_type: "word",
    word: "imperial",
    ipa_uk: "/ɪmˈpɪə.ri.əl/",
    ipa_us: "/ɪmˈpɪr.i.əl/",
    definition: "belonging or relating to an empire or the person who rules it",
    definition_source: "cambridge",
    example: "The imperial army was dispatched to secure the borders of the vast empire.",
    definitions: [
      {
        definition: "belonging or relating to an empire or the person who rules it",
        example: "The imperial army was dispatched to secure the borders of the vast empire.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Smuggling of tea and opium severely challenged imperial trade monopolies in the 19th century.",
      "The city still features grand imperial architecture from its days as the capital of the dynasty."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["empire", "imperialism", "emperor"],
      adjective: ["imperial", "imperialistic"],
      adverb: ["imperially"]
    },
    collocations: [
      { collocation: "imperial power", example: "Britain established itself as a dominant imperial power in Asia." },
      { collocation: "imperial decree", example: "The taxation system was completely reformed by imperial decree." }
    ],
    semantic_field_id: "government-power",
    semantic_field_label: "Government & Power",
    semantic_field_words: [
      { word: "royal", cefr: "B1", register: "neutral" },
      { word: "sovereign", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "royal", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing historical political systems, empires, or authoritative decrees."
  },
  {
    id: "entry-smuggling",
    entry_type: "word",
    word: "smuggling",
    ipa_uk: "/ˈsmʌɡ.lɪŋ/",
    ipa_us: "/ˈsmʌɡ.lɪŋ/",
    definition: "the act of importing or exporting goods illegally, especially without paying customs duties",
    definition_source: "cambridge",
    example: "The government introduced strict border controls to curb the smuggling of contraband goods.",
    definitions: [
      {
        definition: "the act of importing or exporting goods illegally, especially without paying customs duties",
        example: "The government introduced strict border controls to curb the smuggling of contraband goods.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "High import tariffs often stimulate smuggling networks as criminals attempt to avoid taxes.",
      "Maritime patrols were reinforced to combat illegal smuggling along the coastline."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "legal",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["smuggle"],
      noun: ["smuggling", "smuggler"]
    },
    collocations: [
      { collocation: "combat smuggling", example: "International agencies cooperate to combat smuggling across borders." },
      { collocation: "contraband smuggling", example: "Contraband smuggling remains a highly lucrative black-market activity." }
    ],
    semantic_field_id: "crime-law",
    semantic_field_label: "Crime & Law",
    semantic_field_words: [
      { word: "trafficking", cefr: "C1", register: "legal" },
      { word: "illicit", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "illegal trade", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-1", "folder-2"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing black markets, legal restrictions, or historical trade disputes."
  },
  {
    id: "entry-adulteration",
    entry_type: "word",
    word: "adulteration",
    ipa_uk: "/əˌdʌl.təˈreɪ.ʃən/",
    ipa_us: "/əˌdʌl.t̬əˈreɪ.ʃən/",
    definition: "the act of making food, drink, or other chemical substances poorer in quality by adding another substance",
    definition_source: "cambridge",
    example: "The public health department launched an investigation into the suspected adulteration of milk supplies.",
    definitions: [
      {
        definition: "the act of making food, drink, or other chemical substances poorer in quality by adding another substance",
        example: "The public health department launched an investigation into the suspected adulteration of milk supplies.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Strict food safety legislation was introduced to protect consumers from product adulteration.",
      "The chemical analysis revealed the adulteration of the olive oil with cheaper seed oils."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "scientific",
    formality_score: 5,
    connotation: "negative",
    word_family: {
      verb: ["adulterate"],
      noun: ["adulteration", "adulterant"],
      adjective: ["adulterated"]
    },
    collocations: [
      { collocation: "food adulteration", example: "Food adulteration is a serious offense that can lead to severe fines." },
      { collocation: "detect adulteration", example: "Laboratory tests are necessary to detect adulteration in high-value products." }
    ],
    semantic_field_id: "contamination-quality",
    semantic_field_label: "Contamination & Quality",
    semantic_field_words: [
      { word: "contamination", cefr: "B2", register: "neutral" },
      { word: "dilution", cefr: "C1", register: "scientific" }
    ],
    register_synonyms: [
      { word: "contamination", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-1", "folder-science"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing food safety, chemical quality control, or trade regulations."
  },
  {
    id: "entry-monopoly",
    entry_type: "word",
    word: "monopoly",
    ipa_uk: "/məˈnɒp.əl.i/",
    ipa_us: "/məˈnɑː.pəl.i/",
    definition: "complete control of the supply of particular goods or services in a market",
    definition_source: "cambridge",
    example: "The tech giant has established a near-complete monopoly over mobile operating systems.",
    definitions: [
      {
        definition: "complete control of the supply of particular goods or services in a market",
        example: "The tech giant has established a near-complete monopoly over mobile operating systems.",
        cefr_level: "C1",
        grammar_note: "noun [C usually singular]"
      }
    ],
    extra_examples: [
      "Anti-trust laws are designed to prevent corporations from establishing monopolies that limit competition.",
      "The state holds a monopoly on the supply of water and electricity."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "economics",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["monopolize"],
      noun: ["monopoly", "monopolist"],
      adjective: ["monopolistic"]
    },
    collocations: [
      { collocation: "establish a monopoly", example: "The company aims to establish a monopoly by buying out its competitors." },
      { collocation: "break up a monopoly", example: "The government intervened to break up the steel monopoly." }
    ],
    semantic_field_id: "market-structure",
    semantic_field_label: "Market Structure",
    semantic_field_words: [
      { word: "duopoly", cefr: "C2", register: "economics" },
      { word: "oligopoly", cefr: "C2", register: "economics" }
    ],
    register_synonyms: [
      { word: "exclusive control", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing market competition, trade regulations, or economic history."
  },
  {
    id: "entry-punitive",
    entry_type: "word",
    word: "punitive",
    ipa_uk: "/ˈpjuː.nɪ.tɪv/",
    ipa_us: "/ˈpjuː.n̬ɪ.t̬ɪv/",
    definition: "intended as a punishment, or (of taxes/duties) extremely high and difficult to pay",
    definition_source: "cambridge",
    example: "The court imposed punitive damages on the company to deter future safety violations.",
    definitions: [
      {
        definition: "intended as a punishment",
        example: "The court imposed punitive damages on the company to deter future safety violations.",
        cefr_level: "C1",
        grammar_note: "adjective"
      },
      {
        definition: "(of taxes, duties, or charges) extremely high and difficult to pay",
        example: "The government introduced punitive tariffs on imported goods to protect domestic industries.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The prisoners were subjected to punitive measures after the failed escape attempt.",
      "Punitive tax rates on high earners can sometimes discourage investment."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["punish"],
      noun: ["punishment"],
      adjective: ["punitive"],
      adverb: ["punitively"]
    },
    collocations: [
      { collocation: "punitive measures", example: "The administration threatened punitive measures if the strike continued." },
      { collocation: "punitive damages", example: "Jurors awarded millions in punitive damages to the plaintiff." }
    ],
    semantic_field_id: "discipline-law",
    semantic_field_label: "Discipline & Law",
    semantic_field_words: [
      { word: "penal", cefr: "C2", register: "legal" },
      { word: "disciplinary", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "disciplinary", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing legal penalties, high taxes, or international sanctions."
  },
  {
    id: "entry-stimulate",
    entry_type: "word",
    word: "stimulate",
    ipa_uk: "/ˈsɪm.jʊ.leɪt/",
    ipa_us: "/ˈsɪm.jə.leɪt/",
    definition: "to encourage something to grow, develop, or become more active",
    definition_source: "cambridge",
    example: "Lowering interest rates is a classic monetary policy tool used to stimulate the economy.",
    definitions: [
      {
        definition: "to encourage something to grow, develop, or become more active",
        example: "Lowering interest rates is a classic monetary policy tool used to stimulate the economy.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The tax incentives were introduced specifically to stimulate investment in renewable energy.",
      "The teacher used interactive games to stimulate discussion among the students."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["stimulate"],
      noun: ["stimulation", "stimulus", "stimulant"],
      adjective: ["stimulating"]
    },
    collocations: [
      { collocation: "stimulate growth", example: "Investing in infrastructure can stimulate long-term economic growth." },
      { collocation: "stimulate demand", example: "Ad campaigns are designed to stimulate consumer demand." }
    ],
    semantic_field_id: "encouragement-growth",
    semantic_field_label: "Encouragement & Growth",
    semantic_field_words: [
      { word: "encourage", cefr: "A2", register: "neutral" },
      { word: "galvanize", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "encourage", register: "neutral", cefr: "A2" },
      { word: "boost", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing economic growth policies, scientific activation, or educational motivation."
  },
  {
    id: "entry-infusion",
    entry_type: "word",
    word: "infusion",
    ipa_uk: "/ɪnˈfjuː.ʒən/",
    ipa_us: "/ɪnˈfjuː.ʒən/",
    definition: "the introduction of a new element, quality, or cash resource into something to make it stronger",
    definition_source: "cambridge",
    example: "The struggling airline requires an immediate cash infusion to avoid bankruptcy.",
    definitions: [
      {
        definition: "the introduction of a new element, quality, or cash resource into something to make it stronger",
        example: "The struggling airline requires an immediate cash infusion to avoid bankruptcy.",
        cefr_level: "C2",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "a drink made by leaving tea leaves or herbs in hot water",
        example: "Herbal infusions like chamomile are popular for promoting relaxation.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The company benefited from an infusion of new talent and fresh ideas in its marketing team.",
      "A steady infusion of capital allowed the startup to expand its operations globally."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: ["infuse"],
      noun: ["infusion"]
    },
    collocations: [
      { collocation: "cash infusion", example: "The venture capital firm provided a massive cash infusion to the tech startup." },
      { collocation: "infusion of ideas", example: "The workshop led to a valuable infusion of creative ideas." }
    ],
    semantic_field_id: "introduction-addition",
    semantic_field_label: "Introduction & Addition",
    semantic_field_words: [
      { word: "injection", cefr: "C1", register: "academic" },
      { word: "introduction", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "injection", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing monetary injections, herb extraction, or introducing new ideas/talent."
  },
  {
    id: "entry-reverence",
    entry_type: "word",
    word: "reverence",
    ipa_uk: "/ˈrev.ər.əns/",
    ipa_us: "/ˈrev.ɚ.əns/",
    definition: "a feeling of deep respect or admiration for someone or something",
    definition_source: "cambridge",
    example: "The visitors stood in silent reverence before the remnants of the ancient temple.",
    definitions: [
      {
        definition: "a feeling of deep respect or admiration for someone or something",
        example: "The visitors stood in silent reverence before the remnants of the ancient temple.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "In many traditional societies, elder members are treated with deep reverence.",
      "The monument was constructed as a symbol of reverence for the fallen heroes."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "positive",
    word_family: {
      verb: ["revere"],
      noun: ["reverence"],
      adjective: ["reverent"],
      adverb: ["reverently"]
    },
    collocations: [
      { collocation: "deep reverence", example: "The disciples showed deep reverence to their spiritual master." },
      { collocation: "show reverence", example: "It is customary to show reverence when visiting sacred sites." }
    ],
    semantic_field_id: "respect-emotion",
    semantic_field_label: "Respect & Emotion",
    semantic_field_words: [
      { word: "respect", cefr: "A2", register: "neutral" },
      { word: "veneration", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "respect", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - standing in reverence before ancient ruins."
  },
  {
    id: "entry-remnant",
    entry_type: "word",
    word: "remnant",
    ipa_uk: "/ˈrem.nənt/",
    ipa_us: "/ˈrem.nənt/",
    definition: "a small piece or amount of something that is left from a larger original",
    definition_source: "cambridge",
    example: "The ruins are the last remnants of a grand civilization that once thrived in the valley.",
    definitions: [
      {
        definition: "a small piece or amount of something that is left from a larger original",
        example: "The ruins are the last remnants of a grand civilization that once thrived in the valley.",
        cefr_level: "C1",
        grammar_note: "noun [C usually plural]"
      }
    ],
    extra_examples: [
      "We found remnants of ancient pottery buried deep in the archaeological site.",
      "Only a tiny remnant of the original forest remains today due to deforestation."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["remnant", "remnants"]
    },
    collocations: [
      { collocation: "last remnants", example: "Scientists analyzed the last remnants of the organic material." },
      { collocation: "remnants of the past", example: "The museum displays various remnants of the past." }
    ],
    semantic_field_id: "remains-leftovers",
    semantic_field_label: "Remains & Leftovers",
    semantic_field_words: [
      { word: "remains", cefr: "B2", register: "neutral" },
      { word: "leftover", cefr: "B1", register: "informal" }
    ],
    register_synonyms: [
      { word: "remains", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - remnants of a world that once thrived."
  },
  {
    id: "entry-grandeur",
    entry_type: "word",
    word: "grandeur",
    ipa_uk: "/ˈɡræn.dʒər/",
    ipa_us: "/ˈɡræn.dʒɚ/",
    definition: "the quality of being very large, special, beautiful, or impressive; magnificence",
    definition_source: "cambridge",
    example: "The grandeur of the ancient royal palace attests to the previous wealth of its builders.",
    definitions: [
      {
        definition: "the quality of being very large, special, beautiful, or impressive; magnificence",
        example: "The grandeur of the ancient royal palace attests to the previous wealth of its builders.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "We were awed by the rugged grandeur of the snow-capped mountain range.",
      "The composer's music possesses a unique dramatic grandeur."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["grandeur", "grandness"],
      adjective: ["grand"],
      adverb: ["grandly"]
    },
    collocations: [
      { collocation: "former grandeur", example: "Efforts are underway to restore the historic building to its former grandeur." },
      { collocation: "sense of grandeur", example: "High ceilings and marble floors gave the hall a sense of grandeur." }
    ],
    semantic_field_id: "magnificence-splendor",
    semantic_field_label: "Magnificence & Splendor",
    semantic_field_words: [
      { word: "magnificence", cefr: "B2", register: "neutral" },
      { word: "splendor", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "magnificence", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - grandeur of these ruins attesting to wealth."
  },
  {
    id: "entry-attest",
    entry_type: "word",
    word: "attest",
    ipa_uk: "/əˈtest/",
    ipa_us: "/əˈtest/",
    definition: "to show or prove that something is true, or to formally declare it to be true",
    definition_source: "cambridge",
    example: "The vast scale of the stone structures attests to the advanced engineering skills of the civilization.",
    definitions: [
      {
        definition: "to show or prove that something is true",
        example: "The vast scale of the stone structures attests to the advanced engineering skills of the civilization.",
        cefr_level: "C2",
        grammar_note: "verb [intransitive/transitive]"
      }
    ],
    extra_examples: [
      "Thousands of satisfied users can attest to the effectiveness of the new software program.",
      "The signed document attests that the transfer of property has been completed legally."
    ],
    grammar_note: "verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["attest"],
      noun: ["attestation"]
    },
    collocations: [
      { collocation: "attest to the fact", example: "Her rapid promotion attests to the fact that she is a highly capable manager." },
      { collocation: "can attest to", example: "As an eyewitness, I can attest to the accuracy of her statement." }
    ],
    semantic_field_id: "evidence-proof",
    semantic_field_label: "Evidence & Proof",
    semantic_field_words: [
      { word: "verify", cefr: "B2", register: "neutral" },
      { word: "corroborate", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "prove", register: "neutral", cefr: "B1" },
      { word: "confirm", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - grandeur attesting to wealth and power."
  },
  {
    id: "entry-painstakingly",
    entry_type: "word",
    word: "painstakingly",
    ipa_uk: "/ˈpeɪnzˌteɪ.kɪŋ.li/",
    ipa_us: "/ˈpeɪnzˌteɪ.kɪŋ.li/",
    definition: "with extremely great care, effort, and thoroughness; meticulously",
    definition_source: "cambridge",
    example: "The ancient text was painstakingly restored by a team of linguistic experts over three years.",
    definitions: [
      {
        definition: "with extremely great care, effort, and thoroughness; meticulously",
        example: "The ancient text was painstakingly restored by a team of linguistic experts over three years.",
        cefr_level: "C2",
        grammar_note: "adverb"
      }
    ],
    extra_examples: [
      "The massive monuments were painstakingly carved out of solid rock by hand.",
      "She painstakingly compiled the list of references for her doctoral thesis."
    ],
    grammar_note: "adverb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["painstakingness"],
      adjective: ["painstaking"],
      adverb: ["painstakingly"]
    },
    collocations: [
      { collocation: "painstakingly detailed", example: "The models are painstakingly detailed and accurate to scale." },
      { collocation: "painstakingly researched", example: "The historical biography was painstakingly researched." }
    ],
    semantic_field_id: "precision-effort",
    semantic_field_label: "Precision & Effort",
    semantic_field_words: [
      { word: "meticulously", cefr: "C2", register: "academic" },
      { word: "carefully", cefr: "A2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "meticulously", register: "academic", cefr: "C2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - structures they had painstakingly constructed."
  },
  {
    id: "entry-substantiate",
    entry_type: "word",
    word: "substantiate",
    ipa_uk: "/səbˈstæn.ʃi.eɪt/",
    ipa_us: "/səbˈstæn.ʃi.eɪt/",
    definition: "to provide evidence to support or prove the truth of a claim or suspicion",
    definition_source: "cambridge",
    example: "The suspect's alibi was substantiated by security camera footage from the bank.",
    definitions: [
      {
        definition: "to provide evidence to support or prove the truth of a claim or suspicion",
        example: "The suspect's alibi was substantiated by security camera footage from the bank.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Archaeological discoveries in recent decades have substantiated the ecocide hypothesis.",
      "You must bring concrete facts to substantiate your allegations during the hearing."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["substantiate"],
      noun: ["substantiation"],
      adjective: ["substantial", "unsubstantiated"]
    },
    collocations: [
      { collocation: "substantiate a claim", example: "He offered no evidence to substantiate his claim of patent infringement." },
      { collocation: "substantiate allegations", example: "The audit failed to substantiate allegations of financial misconduct." }
    ],
    semantic_field_id: "evidence-proof",
    semantic_field_label: "Evidence & Proof",
    semantic_field_words: [
      { word: "prove", cefr: "B1", register: "neutral" },
      { word: "confirm", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "back up", register: "informal", cefr: "B2" },
      { word: "corroborate", register: "formal", cefr: "C2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - suspicion of ecocide substantiated by discoveries."
  },
  {
    id: "entry-undermine",
    entry_type: "word",
    word: "undermine",
    ipa_uk: "/ˌʌn.dəˈmaɪn/",
    ipa_us: "/ˌʌn.dɚˈmaɪn/",
    definition: "to make someone or something weaker or less effective, usually gradually",
    definition_source: "cambridge",
    example: "Criticism from senior managers can seriously undermine a young employee's confidence.",
    definitions: [
      {
        definition: "to make someone or something weaker or less effective, usually gradually",
        example: "Criticism from senior managers can seriously undermine a young employee's confidence.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Ancient civilisations often undermined themselves by overexploiting soil and water resources.",
      "The spread of fake news is designed to undermine public trust in democratic institutions."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["undermine"],
      noun: [],
      adjective: ["undermined"]
    },
    collocations: [
      { collocation: "undermine authority", example: "Disobeying direct orders will undermine the captain's authority." },
      { collocation: "undermine efforts", example: "Lack of funding continues to undermine efforts to restore the river." }
    ],
    semantic_field_id: "weakening-damage",
    semantic_field_label: "Weakening & Damage",
    semantic_field_words: [
      { word: "weaken", cefr: "B2", register: "neutral" },
      { word: "subvert", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "weaken", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - past societies undermined themselves."
  },
  {
    id: "entry-depletion",
    entry_type: "word",
    word: "depletion",
    ipa_uk: "/dɪˈpliː.ʃən/",
    ipa_us: "/dɪˈpliː.ʃən/",
    definition: "a reduction in something, especially natural resources or financial assets",
    definition_source: "cambridge",
    example: "The depletion of the ozone layer has led to increased ultraviolet radiation reaching Earth.",
    definitions: [
      {
        definition: "a reduction in something, especially natural resources or financial assets",
        example: "The depletion of the ozone layer has led to increased ultraviolet radiation reaching Earth.",
        cefr_level: "C1",
        grammar_note: "noun [U or singular]"
      }
    ],
    extra_examples: [
      "Industrial scale logging has caused severe soil erosion and forest depletion.",
      "The rapid depletion of fish stocks in the North Sea is a major concern for marine biologists."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["deplete"],
      noun: ["depletion"],
      adjective: ["depleted"]
    },
    collocations: [
      { collocation: "resource depletion", example: "Overpopulation is accelerating global resource depletion." },
      { collocation: "ozone depletion", example: "Chlorofluorocarbons were banned to prevent further ozone depletion." }
    ],
    semantic_field_id: "reduction-shortage",
    semantic_field_label: "Reduction & Shortage",
    semantic_field_words: [
      { word: "reduction", cefr: "B2", register: "neutral" },
      { word: "drain", cefr: "C1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "reduction", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-4"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - patterns often include resource depletion."
  },
  {
    id: "entry-demise",
    entry_type: "word",
    word: "demise",
    ipa_uk: "/dɪˈmaɪz/",
    ipa_us: "/dɪˈmaɪz/",
    definition: "the end, failure, or death of an institution, system, or person",
    definition_source: "cambridge",
    example: "The rise of online streaming services led to the demise of traditional video rental stores.",
    definitions: [
      {
        definition: "the end, failure, or death of an institution, system, or person",
        example: "The rise of online streaming services led to the demise of traditional video rental stores.",
        cefr_level: "C1",
        grammar_note: "noun [singular]"
      }
    ],
    extra_examples: [
      "The empire's demise was brought about by corruption, civil wars, and economic stagnation.",
      "The sudden demise of the company shocked its employees and shareholders."
    ],
    grammar_note: "noun [singular]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      noun: ["demise"]
    },
    collocations: [
      { collocation: "eventual demise", example: "Internal conflicts accelerated the dynasty's eventual demise." },
      { collocation: "lead to the demise", example: "High debt levels can easily lead to the demise of small businesses." }
    ],
    semantic_field_id: "failure-end",
    semantic_field_label: "Failure & End",
    semantic_field_words: [
      { word: "fall", cefr: "A2", register: "neutral" },
      { word: "downfall", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "downfall", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - speaking of a society's birth and eventual demise."
  },
  {
    id: "entry-contingent",
    entry_type: "word",
    word: "contingent",
    ipa_uk: "/kənˈtɪn.dʒənt/",
    ipa_us: "/kənˈtɪn.dʒənt/",
    definition: "depending on something else in the future in order to happen",
    definition_source: "cambridge",
    example: "The outdoor concert is contingent on the weather conditions being favorable.",
    definitions: [
      {
        definition: "depending on something else in the future in order to happen",
        example: "The outdoor concert is contingent on the weather conditions being favorable.",
        cefr_level: "C2",
        grammar_note: "adjective"
      },
      {
        definition: "a group of people representing a country or organization at a meeting or event",
        example: "A large contingent of French athletes marched in the parade.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The expansion of our operations is contingent upon securing additional funding.",
      "The expression of systemic vulnerabilities is deeply contingent on local environmental conditions."
    ],
    grammar_note: "adjective / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      noun: ["contingency", "contingent"],
      adjective: ["contingent"]
    },
    collocations: [
      { collocation: "contingent on", example: "Our offer of employment is contingent on satisfactory references." },
      { collocation: "contingent plan", example: "They developed a contingent plan in case the primary system failed." }
    ],
    semantic_field_id: "dependence-probability",
    semantic_field_label: "Dependence & Probability",
    semantic_field_words: [
      { word: "dependent", cefr: "B2", register: "neutral" },
      { word: "conditional", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "dependent", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - expression is deeply contingent on local conditions."
  },
  {
    id: "entry-contemplate",
    entry_type: "word",
    word: "contemplate",
    ipa_uk: "/ˈkɒn.təm.pleɪt/",
    ipa_us: "/ˈkɑːn.t̬əm.pleɪt/",
    definition: "to spend time considering a possible future action, or to think about something seriously",
    definition_source: "cambridge",
    example: "The committee is contemplating major reforms to the existing education system.",
    definitions: [
      {
        definition: "to spend time considering a possible future action, or to think about something seriously",
        example: "The committee is contemplating major reforms to the existing education system.",
        cefr_level: "C1",
        grammar_note: "transitive/intransitive verb"
      }
    ],
    extra_examples: [
      "We must carefully contemplate the historical lessons to avoid repeating past failures.",
      "She sat by the window, contemplating the meaning of her recent choices."
    ],
    grammar_note: "verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["contemplate"],
      noun: ["contemplation"],
      adjective: ["contemplative"],
      adverb: ["contemplatively"]
    },
    collocations: [
      { collocation: "contemplate the future", example: "He walked along the beach to contemplate his future." },
      { collocation: "seriously contemplate", example: "The company is seriously contemplating expanding into European markets." }
    ],
    semantic_field_id: "thinking-reflection",
    semantic_field_label: "Thinking & Reflection",
    semantic_field_words: [
      { word: "consider", cefr: "A2", register: "neutral" },
      { word: "ponder", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "consider", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - only if we carefully contemplate its lessons."
  },
  {
    id: "entry-collapse",
    entry_type: "word",
    word: "collapse",
    ipa_uk: "/kəˈlæps/",
    ipa_us: "/kəˈlæps/",
    definition: "a sudden failure of an institution, organization, or system; or to fall down suddenly",
    definition_source: "cambridge",
    example: "The unexpected bankruptcy of the investment bank led to the collapse of the stock market.",
    definitions: [
      {
        definition: "to fall down suddenly because of pressure or lack of support",
        example: "The roof of the ancient warehouse collapsed under the weight of the snow.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "a sudden failure of an institution, organization, or system",
        example: "The economic collapse of the civilization was triggered by severe environmental ecocide.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "He collapsed from heat exhaustion after running the marathon.",
      "The peace talks collapsed after both sides refused to sign the compromise agreement."
    ],
    grammar_note: "verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["collapse"],
      noun: ["collapse"],
      adjective: ["collapsible"]
    },
    collocations: [
      { collocation: "economic collapse", example: "Hyperinflation can cause total economic collapse in a country." },
      { collocation: "sudden collapse", example: "The sudden collapse of the bridge is being investigated by engineers." }
    ],
    semantic_field_id: "failure-ruin",
    semantic_field_label: "Failure & Ruin",
    semantic_field_words: [
      { word: "breakdown", cefr: "B2", register: "neutral" },
      { word: "implode", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "downfall", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - term 'collapse' refers to reduction in complexity."
  },
  {
    id: "entry-awe-inspiring",
    entry_type: "word",
    word: "awe-inspiring",
    ipa_uk: "/ˈɔː.ɪnˌspaɪə.rɪŋ/",
    ipa_us: "/ˈɑː.ɪnˌspaɪr.ɪŋ/",
    definition: "causing you to feel great respect, admiration, or wonder",
    definition_source: "cambridge",
    example: "The Grand Canyon is one of the most awe-inspiring natural wonders in the world.",
    definitions: [
      {
        definition: "causing you to feel great respect, admiration, or wonder",
        example: "The Grand Canyon is one of the most awe-inspiring natural wonders in the world.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The awe-inspiring ruins left behind by these past societies captivate modern travelers.",
      "The spacecraft sent back awe-inspiring images of Saturn's rings."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      noun: ["awe"],
      adjective: ["awesome", "awe-inspiring"]
    },
    collocations: [
      { collocation: "awe-inspiring sight", example: "The solar eclipse was an awe-inspiring sight for thousands." },
      { collocation: "awe-inspiring performance", example: "The orchestra delivered an awe-inspiring performance." }
    ],
    semantic_field_id: "wonder-amazement",
    semantic_field_label: "Wonder & Amazement",
    semantic_field_words: [
      { word: "magnificent", cefr: "B1", register: "neutral" },
      { word: "breathtaking", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "breathtaking", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - awe-inspiring ruins left behind by past societies."
  },
  {
    id: "entry-naive",
    entry_type: "word",
    word: "naive",
    ipa_uk: "/naɪˈiːv/",
    ipa_us: "/naɪˈiːv/",
    definition: "too willing to believe that someone is telling the truth or that life is simple",
    definition_source: "cambridge",
    example: "It would be naive to assume that studying the past will yield straightforward answers for today's issues.",
    definitions: [
      {
        definition: "too willing to believe that someone is telling the truth or that life is simple",
        example: "It would be naive to assume that studying the past will yield straightforward answers for today's issues.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "She was naive to believe that he would keep his promises without a written contract.",
      "His naive enthusiasm for the political campaign was quickly tempered by reality."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      noun: ["naivety"],
      adjective: ["naive"],
      adverb: ["naively"]
    },
    collocations: [
      { collocation: "naive belief", example: "Many held the naive belief that the war would be over by Christmas." },
      { collocation: "somewhat naive", example: "Her explanation of the economic crisis was somewhat naive." }
    ],
    semantic_field_id: "character-simplicity",
    semantic_field_label: "Character & Simplicity",
    semantic_field_words: [
      { word: "credulous", cefr: "C2", register: "formal" },
      { word: "gullible", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "gullible", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - naive to assume past yields straightforward answers."
  },
  {
    id: "entry-remedy",
    entry_type: "word",
    word: "remedy",
    ipa_uk: "/ˈrem.ə.di/",
    ipa_us: "/ˈrem.ə.di/",
    definition: "to solve or correct a problem; or a solution or medicine that cures",
    definition_source: "cambridge",
    example: "The government is trying to remedy the high rate of youth unemployment with new training programs.",
    definitions: [
      {
        definition: "to do something to correct or improve a bad situation",
        example: "The government is trying to remedy the high rate of youth unemployment with new training programs.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "a successful way of curing an illness or solving a problem",
        example: "Drinking warm ginger tea is a popular home remedy for colds.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Modern technology sometimes produces new challenges faster than it can remedy old ones.",
      "The court ordered the company to pay damages to remedy the environmental breach."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["remedy"],
      noun: ["remedy"],
      adjective: ["remedial"]
    },
    collocations: [
      { collocation: "remedy the situation", example: "Immediate action is needed to remedy the situation." },
      { collocation: "effective remedy", example: "There is no simple or effective remedy for the global recession." }
    ],
    semantic_field_id: "solution-cure",
    semantic_field_label: "Solution & Cure",
    semantic_field_words: [
      { word: "cure", cefr: "B1", register: "neutral" },
      { word: "rectify", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "rectify", register: "formal", cefr: "C1" },
      { word: "solve", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - producing challenges faster than it can remedy old ones."
  },
  {
    id: "entry-overstate",
    entry_type: "word",
    word: "overstate",
    ipa_uk: "/ˌəʊ.vəˈsteɪt/",
    ipa_us: "/ˌoʊ.vɚˈsteɪt/",
    definition: "to describe something in a way that makes it seem more important or serious than it really is",
    definition_source: "cambridge",
    example: "It is easy to overstate the impact of social media on teenage behavior.",
    definitions: [
      {
        definition: "to describe something in a way that makes it seem more important or serious than it really is",
        example: "It is easy to overstate the impact of social media on teenage behavior.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Critics argue that the dangers of the new trade agreement have been greatly overstated.",
      "Are the environmental risks of modern resource depletion overstated or undervalued?"
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["overstate"],
      noun: ["overstatement"],
      adjective: ["overstated"]
    },
    collocations: [
      { collocation: "overstate the importance", example: "We cannot overstate the importance of strict compliance checks." },
      { collocation: "greatly overstate", example: "The media tends to greatly overstate short-term economic fluctuations." }
    ],
    semantic_field_id: "exaggeration",
    semantic_field_label: "Exaggeration & Importance",
    semantic_field_words: [
      { word: "exaggerate", cefr: "B2", register: "neutral" },
      { word: "overemphasize", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "exaggerate", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - debate whether environmental risks are overstated."
  },
  {
    id: "entry-undervalue",
    entry_type: "word",
    word: "undervalue",
    ipa_uk: "/ˌʌn.dəˈvæl.juː/",
    ipa_us: "/ˌʌn.dɚˈvæl.juː/",
    definition: "to think that someone or something is less important or valuable than they really are",
    definition_source: "cambridge",
    example: "Society must not undervalue the contributions of teachers and healthcare workers.",
    definitions: [
      {
        definition: "to think that someone or something is less important or valuable than they really are",
        example: "Society must not undervalue the contributions of teachers and healthcare workers.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The housing market has undervalued these properties due to historical zoning restrictions.",
      "It is vital not to undervalue the risks of human-induced climate change."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["undervalue"],
      noun: ["undervaluation"],
      adjective: ["undervalued"]
    },
    collocations: [
      { collocation: "undervalue contributions", example: "Managers who undervalue contributions from junior staff face high turnover." },
      { collocation: "tend to undervalue", example: "Investors tend to undervalue companies with low initial margins." }
    ],
    semantic_field_id: "estimation-worth",
    semantic_field_label: "Estimation & Worth",
    semantic_field_words: [
      { word: "underestimate", cefr: "B2", register: "neutral" },
      { word: "depreciate", cefr: "C2", register: "economics" }
    ],
    register_synonyms: [
      { word: "underestimate", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - debate whether environmental risks are undervalued."
  },
  {
    id: "entry-hazard",
    entry_type: "word",
    word: "hazard",
    ipa_uk: "/ˈhæz.əd/",
    ipa_us: "/ˈhæz.ɚd/",
    definition: "something that is dangerous and likely to cause damage or tell someone to do something risky",
    definition_source: "cambridge",
    example: "Accumulating toxic chemicals represents a serious environmental hazard to local ecosystems.",
    definitions: [
      {
        definition: "something that is dangerous and likely to cause damage",
        example: "Accumulating toxic chemicals represents a serious environmental hazard to local ecosystems.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Icy roads are a common winter hazard for drivers in northern regions.",
      "Health and safety laws are designed to eliminate workplace hazards."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["hazard"],
      noun: ["hazard"],
      adjective: ["hazardous"]
    },
    collocations: [
      { collocation: "environmental hazard", example: "Oil spills pose a major environmental hazard to marine wildlife." },
      { collocation: "health hazard", example: "Asbestos inhalation is a well-documented health hazard." }
    ],
    semantic_field_id: "danger-threat",
    semantic_field_label: "Danger & Threat",
    semantic_field_words: [
      { word: "danger", cefr: "A2", register: "neutral" },
      { word: "threat", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "danger", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - environmental hazards and global threats."
  },
  {
    id: "entry-rigour",
    entry_type: "word",
    word: "rigour",
    ipa_uk: "/ˈrɪɡ.ər/",
    ipa_us: "/ˈrɪɡ.ɚ/",
    definition: "the quality of being detailed, careful, complete, and strict",
    definition_source: "cambridge",
    example: "The research team conducted the field experiments with absolute scientific rigour.",
    definitions: [
      {
        definition: "the quality of being detailed, careful, complete, and strict",
        example: "The research team conducted the field experiments with absolute scientific rigour.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Academic programs at the institute are famous for their intellectual rigour.",
      "The contract was checked with legal rigour to avoid future loopholes."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["rigour", "rigidity"],
      adjective: ["rigorous"],
      adverb: ["rigorously"]
    },
    collocations: [
      { collocation: "scientific rigour", example: "All articles published in the journal undergo peer review for scientific rigour." },
      { collocation: "academic rigour", example: "We must maintain high academic rigour to protect our school's reputation." }
    ],
    semantic_field_id: "precision-accuracy",
    semantic_field_label: "Precision & Accuracy",
    semantic_field_words: [
      { word: "strictness", cefr: "C1", register: "neutral" },
      { word: "meticulousness", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "precision", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing careful scientific experiments, academic analyses, or strict regulations."
  },
  {
    id: "entry-upend",
    entry_type: "word",
    word: "upend",
    ipa_uk: "/ʌpˈend/",
    ipa_us: "/ʌpˈend/",
    definition: "to turn something upside down, or to completely change a situation or system",
    definition_source: "cambridge",
    example: "The sudden arrival of digital cameras completely upended the film photography industry.",
    definitions: [
      {
        definition: "to turn something upside down, or to completely change a situation or system",
        example: "The sudden arrival of digital cameras completely upended the film photography industry.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The political crisis threatened to upend the delicate balance of power in the region.",
      "He accidentally upended his coffee cup, spilling liquid all over the documents."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["upend"],
      noun: [],
      adjective: ["upended"]
    },
    collocations: [
      { collocation: "upend the status quo", example: "Startups often seek to upend the status quo in established markets." },
      { collocation: "upend lives", example: "The global pandemic managed to upend the daily lives of billions." }
    ],
    semantic_field_id: "disruption-change",
    semantic_field_label: "Disruption & Change",
    semantic_field_words: [
      { word: "overturn", cefr: "C1", register: "neutral" },
      { word: "subvert", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "overturn", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing severe economic disruptions, major political changes, or turning objects upside down."
  },
  {
    id: "entry-emerge",
    entry_type: "word",
    word: "emerge",
    ipa_uk: "/ɪˈmɜːdʒ/",
    ipa_us: "/ɪˈmɝːdʒ/",
    definition: "to appear by coming out of something, or to become known and prominent",
    definition_source: "cambridge",
    example: "New alternative energy sources will likely emerge as fossil fuels are depleted.",
    definitions: [
      {
        definition: "to appear by coming out of something or out from behind something",
        example: "The sun slowly emerged from behind the dark storm clouds.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "to become known, or to develop and become prominent",
        example: "Several facts emerged during the investigation, clarifying the timeline of events.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      }
    ],
    extra_examples: [
      "A new leader emerged from the opposition party during the political crisis.",
      "These patterns emerge when analyzing historical collapses of ancient civilizations."
    ],
    grammar_note: "intransitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["emerge"],
      noun: ["emergence"],
      adjective: ["emergent"]
    },
    collocations: [
      { collocation: "emerge from", example: "It takes months for the economy to emerge from a severe recession." },
      { collocation: "emerge as", example: "She has emerged as a leading authority on climate science." }
    ],
    semantic_field_id: "appearance-visibility",
    semantic_field_label: "Appearance & Visibility",
    semantic_field_words: [
      { word: "appear", cefr: "A1", register: "neutral" },
      { word: "arise", cefr: "B2", register: "academic" }
    ],
    register_synonyms: [
      { word: "appear", register: "neutral", cefr: "A1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - trust that new alternatives will emerge."
  },
  {
    id: "entry-resemblance",
    entry_type: "word",
    word: "resemblance",
    ipa_uk: "/rɪˈzem.bləns/",
    ipa_us: "/rɪˈzem.bləns/",
    definition: "the fact of being or looking like someone or something else",
    definition_source: "cambridge",
    example: "The twins bear a striking resemblance to each other in both appearance and voice.",
    definitions: [
      {
        definition: "the fact of being or looking like someone or something else",
        example: "The twins bear a striking resemblance to each other in both appearance and voice.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "There is some resemblance between the structure of these two ancient languages.",
      "The child's face bore no resemblance to that of his father."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["resemble"],
      noun: ["resemblance"]
    },
    collocations: [
      { collocation: "bear a resemblance", example: "The new model bears a close resemblance to its predecessor." },
      { collocation: "striking resemblance", example: "He has a striking resemblance to the famous movie actor." }
    ],
    semantic_field_id: "similarity",
    semantic_field_label: "Similarity & Comparison",
    semantic_field_words: [
      { word: "similarity", cefr: "B1", register: "neutral" },
      { word: "likeness", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "similarity", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing family similarities, similarities in structures, or architectural patterns."
  },
  {
    id: "entry-relic",
    entry_type: "word",
    word: "relic",
    ipa_uk: "/ˈrel.ɪk/",
    ipa_us: "/ˈrel.ɪk/",
    definition: "an object, tradition, or system from the past that continues to exist",
    definition_source: "cambridge",
    example: "The antique grandfather clock is a relic of the Victorian era.",
    definitions: [
      {
        definition: "an object, tradition, or system from the past that continues to exist",
        example: "The antique grandfather clock is a relic of the Victorian era.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Archaeologists excavated the cave, finding various stone relics from the Neolithic period.",
      "Some view these strict dress codes as a relic of a bygone age."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["relic", "relics"]
    },
    collocations: [
      { collocation: "relic of the past", example: "The crumbling watchtower is a picturesque relic of the past." },
      { collocation: "ancient relic", example: "The museum houses ancient relics from the Egyptian pyramids." }
    ],
    semantic_field_id: "remains-antiquity",
    semantic_field_label: "Remains & Antiquity",
    semantic_field_words: [
      { word: "remnant", cefr: "C1", register: "academic" },
      { word: "antique", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "remnant", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing historical ruins, museums, or old cultural practices."
  },
  {
    id: "entry-ecological",
    entry_type: "word",
    word: "ecological",
    ipa_uk: "/ˌiː.kəˈlɒdʒ.ɪ.kəl/",
    ipa_us: "/ˌiː.kəˈlɑː.dʒɪ.kəl/",
    definition: "relating to the relations of organisms to one another and to their physical surroundings",
    definition_source: "cambridge",
    example: "The construction of the dam caused severe ecological damage to the local river system.",
    definitions: [
      {
        definition: "relating to the relations of organisms to one another and to their physical surroundings",
        example: "The construction of the dam caused severe ecological damage to the local river system.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Deforestation can trigger an ecological crisis that disrupts food supply chains.",
      "The organization works to protect areas of high ecological value from industrialization."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["ecology", "ecologist"],
      adjective: ["ecological"],
      adverb: ["ecologically"]
    },
    collocations: [
      { collocation: "ecological balance", example: "It is crucial to maintain the ecological balance of the forest." },
      { collocation: "ecological impact", example: "Industrial projects must undergo assessment for their ecological impact." }
    ],
    semantic_field_id: "environment-ecology",
    semantic_field_label: "Environment & Ecology",
    semantic_field_words: [
      { word: "environmental", cefr: "B1", register: "neutral" },
      { word: "biological", cefr: "B2", register: "academic" }
    ],
    register_synonyms: [
      { word: "environmental", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - mysterious disappearance triggered by ecological issues."
  },
  {
    id: "entry-analogy",
    entry_type: "word",
    word: "analogy",
    ipa_uk: "/əˈnæl.ə.dʒi/",
    ipa_us: "/əˈnæl.ə.dʒi/",
    definition: "a comparison between things that have similar features, often used to help explain an idea",
    definition_source: "cambridge",
    example: "To explain how electricity flows, the teacher drew an analogy with water moving through pipes.",
    definitions: [
      {
        definition: "a comparison between things that have similar features, often used to help explain an idea",
        example: "To explain how electricity flows, the teacher drew an analogy with water moving through pipes.",
        cefr_level: "C1",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "Writers are tempted to draw analogies between human societies and individual lives.",
      "The lawyer argued that there was no valid analogy between the two legal cases."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["analogize"],
      noun: ["analogy", "analogue"],
      adjective: ["analogous"]
    },
    collocations: [
      { collocation: "draw an analogy", example: "Scientists often draw an analogy between the human brain and a computer." },
      { collocation: "by analogy with", example: "The rules for this structure are derived by analogy with similar patterns." }
    ],
    semantic_field_id: "similarity-explanation",
    semantic_field_label: "Similarity & Explanation",
    semantic_field_words: [
      { word: "comparison", cefr: "B1", register: "neutral" },
      { word: "parallel", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "comparison", register: "neutral", cefr: "B1" },
      { word: "parallel", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 4,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - writers tempted to draw analogies between society and life."
  },
  {
    id: "entry-human-induced",
    entry_type: "word",
    word: "human-induced",
    ipa_uk: "/ˌhjuː.mən.ɪnˈdjuːst/",
    ipa_us: "/ˌhjuː.mən.ɪnˈduːst/",
    definition: "caused by human activity rather than natural processes",
    definition_source: "cambridge",
    example: "The report warns of the severe impacts of human-induced climate change on agricultural yields.",
    definitions: [
      {
        definition: "caused by human activity rather than natural processes",
        example: "The report warns of the severe impacts of human-induced climate change on agricultural yields.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The rapid rise in global temperatures is primarily human-induced.",
      "We must work to mitigate human-induced environmental disasters."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {},
    collocations: [
      { collocation: "human-induced climate change", example: "Global actions are needed to curb human-induced climate change." },
      { collocation: "human-induced environmental", example: "Plastic pollution is a classic human-induced environmental challenge." }
    ],
    semantic_field_id: "causation-human",
    semantic_field_label: "Causation & Human Influence",
    semantic_field_words: [
      { word: "man-made", cefr: "B1", register: "neutral" },
      { word: "anthropogenic", cefr: "C2", register: "scientific" }
    ],
    register_synonyms: [
      { word: "man-made", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-4"],
    review: {
      interval_days: 5,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - human-induced climate change and downfalls."
  },
  {
    id: "entry-contemporary",
    entry_type: "word",
    word: "contemporary",
    ipa_uk: "/kənˈtem.pər.ər.i/",
    ipa_us: "/kənˈtem.pə.rer.i/",
    definition: "existing or happening now, or belonging to the same period of time",
    definition_source: "cambridge",
    example: "The museum showcases contemporary art alongside historic masterpieces.",
    definitions: [
      {
        definition: "existing or happening now",
        example: "Contemporary society faces unique challenges due to rapid digitalization.",
        cefr_level: "B2",
        grammar_note: "adjective"
      },
      {
        definition: "someone living or existing at the same time as another",
        example: "Shakespeare and Marlowe were contemporaries who influenced each other's work.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "We must evaluate whether contemporary technology can resolve our environmental issues.",
      "The library contains various contemporary accounts of the historic battle."
    ],
    grammar_note: "adjective / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["contemporary", "contemporaries"]
    },
    collocations: [
      { collocation: "contemporary society", example: "Stress is a widespread problem in contemporary society." },
      { collocation: "contemporary issues", example: "The documentary explores contemporary issues like income inequality." }
    ],
    semantic_field_id: "time-modern",
    semantic_field_label: "Time & Modernity",
    semantic_field_words: [
      { word: "modern", cefr: "A2", register: "neutral" },
      { word: "current", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "modern", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - whether contemporary technology will resolve issues."
  },
  {
    id: "entry-reliance",
    entry_type: "word",
    word: "reliance",
    ipa_uk: "/rɪˈlaɪ.əns/",
    ipa_us: "/rɪˈlaɪ.əns/",
    definition: "the state of depending on or trusting in something or someone",
    definition_source: "cambridge",
    example: "The company is trying to reduce its reliance on imported raw materials.",
    definitions: [
      {
        definition: "the state of depending on or trusting in something or someone",
        example: "The company is trying to reduce its reliance on imported raw materials.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "The survival of millions depends on modern healthcare and the reliance on technologies.",
      "His reliance on his parents for financial support has become a source of tension."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["rely"],
      noun: ["reliance", "reliability"],
      adjective: ["reliant", "reliable"],
      adverb: ["reliably"]
    },
    collocations: [
      { collocation: "reliance on technology", example: "Our reliance on technology makes us vulnerable to cyberattacks." },
      { collocation: "heavy reliance", example: "The country's heavy reliance on oil exports makes its economy unstable." }
    ],
    semantic_field_id: "dependence-trust",
    semantic_field_label: "Dependence & Trust",
    semantic_field_words: [
      { word: "dependence", cefr: "B2", register: "academic" },
      { word: "trust", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "dependence", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 2,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - reliance of millions on modern health care."
  },
  {
    id: "entry-reminiscent",
    entry_type: "word",
    word: "reminiscent",
    ipa_uk: "/ˌrem.ɪˈnɪs.ənt/",
    ipa_us: "/ˌrem.əˈnɪs.ənt/",
    definition: "making you remember a particular person, event, or thing",
    definition_source: "cambridge",
    example: "The style of the building is highly reminiscent of classical Greek architecture.",
    definitions: [
      {
        definition: "making you remember a particular person, event, or thing",
        example: "The style of the building is highly reminiscent of classical Greek architecture.",
        cefr_level: "C1",
        grammar_note: "adjective [always after noun, followed by 'of']"
      }
    ],
    extra_examples: [
      "The flavor is reminiscent of the homemade pies my grandmother used to bake.",
      "His political speeches are reminiscent of the rhetoric of the 1960s."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["reminisce"],
      noun: ["reminiscence"],
      adjective: ["reminiscent"]
    },
    collocations: [
      { collocation: "reminiscent of", example: "The melody is reminiscent of a traditional folk song." },
      { collocation: "highly reminiscent", example: "Her writing style is highly reminiscent of Hemingway's." }
    ],
    semantic_field_id: "memory-association",
    semantic_field_label: "Memory & Association",
    semantic_field_words: [
      { word: "evocative", cefr: "C2", register: "formal" },
      { word: "suggestive", cefr: "C1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "suggestive", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - ruins reminiscent of what poet Shelley described."
  },
  {
    id: 'entry-negligible',
    entry_type: 'word',
    word: 'negligible',
    ipa_uk: '/ˈneɡ.lɪ.dʒə.bəl/',
    ipa_us: '/ˈneɡ.lə.dʒə.bəl/',
    definition: 'Too small or unimportant to have any influence or value; insignificant.',
    definition_source: 'cambridge',
    example: 'For the general population, supplements have negligible impact on preventing common cancers.',
    definitions: [
      {
        definition: 'Too small or unimportant to be worth considering; insignificant.',
        example: 'The difference between the two products was negligible.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'The cost of the repair was negligible compared to buying a new device.',
      'A negligible amount of damage was reported after the minor tremor.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: [], noun: ['negligibility'], adjective: ['negligible'], adverb: ['negligibly'] },
    semantic_field_id: 'size-amount',
    semantic_field_label: 'Size & Amount',
    semantic_field_words: [
      { word: 'insignificant', cefr: 'B2', register: 'neutral' },
      { word: 'trivial', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'insignificant', register: 'neutral', cefr: 'B2' },
      { word: 'trivial', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - negligible impact on major indicators of health.'
  },
  {
    id: 'entry-fortify',
    entry_type: 'word',
    word: 'fortify',
    ipa_uk: '/ˈfɔː.tɪ.faɪ/',
    ipa_us: '/ˈfɔːr.t̬ə.faɪ/',
    definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
    definition_source: 'cambridge',
    example: 'Many countries choose to require white flour to be fortified with folic acid to prevent birth defects.',
    definitions: [
      {
        definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
        example: 'Cereals are often fortified with extra vitamins.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The milk is fortified with vitamin D to support bone strength.',
      'Some juices are fortified with calcium to benefit lactose-intolerant consumers.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: { verb: ['fortify'], noun: ['fortification'], adjective: ['fortified'], adverb: [] },
    semantic_field_id: 'strengthen-enhance',
    semantic_field_label: 'Strengthen & Enhance',
    semantic_field_words: [
      { word: 'strengthen', cefr: 'B2', register: 'neutral' },
      { word: 'enrich', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'strengthen', register: 'neutral', cefr: 'B2' },
      { word: 'enrich', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - decision to require white flour to be fortified.'
  },
  {
    id: 'entry-plummet',
    entry_type: 'word',
    word: 'plummet',
    ipa_uk: '/ˈplʌm.ɪt/',
    ipa_us: '/ˈplʌm.ɪt/',
    definition: 'To fall or drop straight down at a very high speed or by a large amount.',
    definition_source: 'cambridge',
    example: 'Spinal birth defects plummeted by 75% after the white flour fortification policy was implemented.',
    definitions: [
      {
        definition: 'To fall or drop straight down at a very high speed or by a large amount.',
        example: 'Share prices plummeted on the stock exchange today.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The temperature plummeted below zero overnight.',
      'Global sales plummeted due to the economic downturn.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['plummet'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'decrease-decline',
    semantic_field_label: 'Decrease & Decline',
    semantic_field_words: [
      { word: 'fall', cefr: 'A1', register: 'neutral' },
      { word: 'plunge', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'plunge', register: 'neutral', cefr: 'C1' },
      { word: 'fall', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - spinal birth defects plummeted by 75%.'
  },
  {
    id: 'entry-affliction',
    entry_type: 'word',
    word: 'affliction',
    ipa_uk: '/əˈflɪk.ʃən/',
    ipa_us: '/əˈflɪk.ʃən/',
    definition: 'Something that causes pain, suffering, or distress.',
    definition_source: 'cambridge',
    example: 'Macular degeneration is a common age-related affliction that severely impairs vision.',
    definitions: [
      {
        definition: 'Something that causes pain, suffering, or distress (such as a medical condition or disease).',
        example: 'Malnutrition is one of the common afflictions in impoverished regions.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      }
    ],
    extra_examples: [
      'They showed great strength and dignity throughout their afflictions.',
      'Arthritis is a painful affliction that affects millions of elderly people.'
    ],
    grammar_note: 'noun [C or U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['afflict'], noun: ['affliction'], adjective: ['afflicted'], adverb: [] },
    semantic_field_id: 'disease-suffering',
    semantic_field_label: 'Disease & Suffering',
    semantic_field_words: [
      { word: 'disease', cefr: 'B1', register: 'neutral' },
      { word: 'ailment', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'disease', register: 'neutral', cefr: 'B1' },
      { word: 'ailment', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - macular degeneration in people likely to develop this affliction.'
  },
  {
    id: 'entry-undermine',
    entry_type: 'word',
    word: 'undermine',
    ipa_uk: '/ˌʌn.dəˈmaɪn/',
    ipa_us: '/ˌʌn.dɚˈmaɪn/',
    definition: 'To make someone or something weaker or less effective, usually gradually.',
    definition_source: 'cambridge',
    example: 'Taking excessive supplements risks undermining the body\'s natural immune alerts.',
    definitions: [
      {
        definition: 'To make someone or something weaker or less effective, usually gradually.',
        example: 'Criticism can seriously undermine a student\'s confidence.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The constant leaks undermine the credibility of the committee.',
      'Uncontrolled inflation will undermine the country\'s economic growth.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['undermine'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'weaken-damage',
    semantic_field_label: 'Weaken & Damage',
    semantic_field_words: [
      { word: 'weaken', cefr: 'B2', register: 'neutral' },
      { word: 'compromise', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'weaken', register: 'neutral', cefr: 'B2' },
      { word: 'compromise', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - we risk undermining that message and upsetting the balance.'
  },
  {
    id: 'entry-counteract',
    entry_type: 'word',
    word: 'counteract',
    ipa_uk: '/ˌkaʊn.tərˈækt/',
    ipa_us: '/ˌkaʊn.t̬ɚˈækt/',
    definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
    definition_source: 'cambridge',
    example: 'The new medication is designed to counteract the negative side effects of chemotherapy.',
    definitions: [
      {
        definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
        example: 'We must take measures to counteract the effects of climate change.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'These chemicals are used to counteract acidic soil in farming.',
      'Exercise can help counteract the physical decline associated with aging.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: ['counteract'], noun: ['counteraction'], adjective: ['counteractive'], adverb: [] },
    semantic_field_id: 'neutralize-resist',
    semantic_field_label: 'Neutralize & Resist',
    semantic_field_words: [
      { word: 'neutralize', cefr: 'C1', register: 'formal' },
      { word: 'offset', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'neutralize', register: 'formal', cefr: 'C1' },
      { word: 'offset', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - counteracting the destructive effect of free radicals.'
  },
  {
    id: 'entry-retrieve',
    entry_type: 'word',
    word: 'retrieve',
    ipa_uk: '/rɪˈtriːv/',
    ipa_us: '/rɪˈtriːv/',
    definition: 'To find and bring back something.',
    definition_source: 'cambridge',
    example: 'Tons of undigested vitamin and mineral pills are retrieved from the sewers every month.',
    definitions: [
      {
        definition: 'To find and bring back something, or to recover information from a computer.',
        example: 'Computers can retrieve millions of records in a fraction of a second.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The dog was trained to retrieve sticks thrown into the lake.',
      'Divers were sent to retrieve the black box recorder from the wreckage.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: ['retrieve'], noun: ['retrieval'], adjective: ['retrievable'], adverb: [] },
    semantic_field_id: 'recover-get',
    semantic_field_label: 'Recover & Get',
    semantic_field_words: [
      { word: 'recover', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'recover', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - mineral pills are retrieved from the sewer filters.'
  },
  {
    id: 'entry-notion',
    entry_type: 'word',
    word: 'notion',
    ipa_uk: '/ˈnəʊ.ʃən/',
    ipa_us: '/ˈnoʊ.ʃən/',
    definition: 'A belief, idea, or conception of something.',
    definition_source: 'cambridge',
    example: 'She dismissed the popular notion that eating carrots gives you perfect night vision.',
    definitions: [
      {
        definition: 'A belief, idea, or conception of something.',
        example: 'The notion that gender determines intelligence is completely outdated.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    extra_examples: [
      'I have only a vague notion of what they are planning to do.',
      'He challenges the traditional notion that work must be done in an office.'
    ],
    grammar_note: 'noun [C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: [], noun: ['notion'], adjective: ['notional'], adverb: ['notionally'] },
    semantic_field_id: 'belief-idea',
    semantic_field_label: 'Belief & Idea',
    semantic_field_words: [
      { word: 'concept', cefr: 'B2', register: 'neutral' },
      { word: 'idea', cefr: 'A1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'concept', register: 'neutral', cefr: 'B2' },
      { word: 'idea', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - the notion that they can lead people to fill in gaps.'
  },
  {
    id: 'entry-steerclear',
    entry_type: 'phrasal_verb',
    word: 'steer clear of',
    ipa_uk: '/stɪər klɪər ɒv/',
    ipa_us: '/stɪr klɪr ʌv/',
    definition: 'To avoid someone or something because they might cause problems or be dangerous.',
    definition_source: 'cambridge',
    example: 'Health experts advise heavy smokers to steer clear of beta-carotene supplements.',
    definitions: [
      {
        definition: 'To avoid someone or something because they might cause problems or be dangerous.',
        example: 'You should steer clear of that neighborhood after dark.',
        cefr_level: 'B2',
        grammar_note: 'idiomatic phrasal verb'
      }
    ],
    extra_examples: [
      'Investors are steering clear of volatile stock options in the current climate.',
      'I tried to steer clear of controversial political topics during dinner.'
    ],
    grammar_note: 'idiomatic phrasal verb',
    base_verb: 'steer',
    particles: 'clear of',
    conjugations: {
      present_simple_3rd_singular: 'steers clear of',
      past_simple: 'steered clear of',
      present_participle: 'steering clear of',
      past_participle: 'steered clear of'
    },
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'general',
    formality_score: 3,
    connotation: 'neutral',
    word_family: { verb: [], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'avoid-escape',
    semantic_field_label: 'Avoid & Escape',
    semantic_field_words: [
      { word: 'avoid', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'avoid', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-reading', 'folder-5'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - disturbing evidence to steer clear of multivitamins.'
  },
  {
    id: 'entry-mortality',
    entry_type: 'word',
    word: 'mortality',
    ipa_uk: '/mɔːˈtæl.ə.ti/',
    ipa_us: '/mɔːrˈtæl.ə.t̬i/',
    definition: 'The state of being subject to death, or the number of deaths in a given time or place.',
    definition_source: 'cambridge',
    example: 'Improved healthcare and cleaner sanitation lowered infant mortality rates substantially.',
    definitions: [
      {
        definition: 'The state of being subject to death.',
        example: 'Her illness forced her to confront her own mortality.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The rate of deaths in a given population or time period.',
        example: 'Infant mortality has fallen drastically in the last decade.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'The disease carries a high mortality rate if left untreated.',
      'Philosophers have debated the nature of human mortality for centuries.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    word_family: { verb: [], noun: ['mortality', 'mortal'], adjective: ['mortal', 'immortal'], adverb: ['mortally'] },
    semantic_field_id: 'death-life',
    semantic_field_label: 'Death & Life',
    semantic_field_words: [
      { word: 'death', cefr: 'A2', register: 'neutral' },
      { word: 'fatality', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'death', register: 'neutral', cefr: 'A2' },
      { word: 'fatality', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - negligible impact on mortality or other major indicators.'
  },
  {
    id: 'entry-prenatal',
    entry_type: 'word',
    word: 'prenatal',
    ipa_uk: '/ˌpriːˈneɪ.təl/',
    ipa_us: '/ˌpriːˈneɪ.t̬əl/',
    definition: 'Relating to the medical care of women during pregnancy, before their babies are born.',
    definition_source: 'cambridge',
    example: 'Expectant mothers are advised to seek regular prenatal checkups and take folic acid.',
    definitions: [
      {
        definition: 'Relating to the period before birth; during pregnancy.',
        example: 'The clinic offers free prenatal classes for new parents.',
        cefr_level: 'C2',
        grammar_note: 'adjective [always before noun]'
      }
    ],
    extra_examples: [
      'Prenatal diagnosis can detect many congenital disorders.',
      'Proper nutrition is critical for healthy prenatal development.'
    ],
    grammar_note: 'adjective [always before noun]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: [], noun: [], adjective: ['prenatal', 'postnatal', 'neonatal'], adverb: ['prenatally'] },
    semantic_field_id: 'pregnancy-birth',
    semantic_field_label: 'Pregnancy & Birth',
    semantic_field_words: [
      { word: 'pregnancy', cefr: 'B2', register: 'neutral' },
      { word: 'maternity', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'pregnancy', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - folic acid has long been indicated as a prenatal supplement.'
  },
  {
    id: 'entry-defect',
    entry_type: 'word',
    word: 'defect',
    ipa_uk: '/ˈdiː.fekt/',
    ipa_us: '/ˈdiː.fekt/',
    definition: 'A physical or functional fault, flaw, or imperfection in a person or thing.',
    definition_source: 'cambridge',
    example: 'Folic acid supplementation is proven to reduce neural tube birth defects in infants.',
    definitions: [
      {
        definition: 'A fault, flaw, or imperfection in something.',
        example: 'The company recalled the cars due to a major engine defect.',
        cefr_level: 'B2',
        grammar_note: 'noun [C]'
      },
      {
        definition: 'To leave one\'s country or political group to join an opposing one.',
        example: 'The soldier decided to defect to the allied forces.',
        cefr_level: 'C2',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The manufacturing defect was caught early by quality control.',
      'A birth defect can impact a child\'s physical capabilities.'
    ],
    grammar_note: 'noun [C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'general',
    formality_score: 3,
    connotation: 'negative',
    word_family: { verb: ['defect'], noun: ['defect', 'defection', 'defector'], adjective: ['defective', 'defectless'], adverb: ['defectively'] },
    semantic_field_id: 'flaw-imperfection',
    semantic_field_label: 'Flaw & Imperfection',
    semantic_field_words: [
      { word: 'flaw', cefr: 'B2', register: 'neutral' },
      { word: 'imperfection', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'flaw', register: 'neutral', cefr: 'B2' },
      { word: 'imperfection', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - prevent neural tube birth defects.'
  },
  {
    id: 'entry-deflect',
    entry_type: 'word',
    word: 'deflect',
    ipa_uk: '/dɪˈflekt/',
    ipa_us: '/dɪˈflekt/',
    definition: 'To cause something to change direction, or to turn aside from a course.',
    definition_source: 'cambridge',
    example: 'Antioxidants deflect macular degeneration by counteracting damage in retina cells.',
    definitions: [
      {
        definition: 'To cause something to change direction; turn aside.',
        example: 'The shield is designed to deflect incoming debris.',
        cefr_level: 'C1',
        grammar_note: 'transitive or intransitive verb'
      },
      {
        definition: 'To draw attention away from something.',
        example: 'She tried to deflect the criticism by blaming external factors.',
        cefr_level: 'C1',
        grammar_note: 'transitive or intransitive verb'
      }
    ],
    extra_examples: [
      'The ball deflected off the defender into the net.',
      'He used humor to deflect personal questions about his career.'
    ],
    grammar_note: 'transitive or intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: ['deflect'], noun: ['deflection', 'deflector'], adjective: ['deflective', 'deflected'], adverb: [] },
    semantic_field_id: 'divert-direction',
    semantic_field_label: 'Divert & Direction',
    semantic_field_words: [
      { word: 'divert', cefr: 'C1', register: 'neutral' },
      { word: 'distract', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'divert', register: 'neutral', cefr: 'C1' },
      { word: 'distract', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - zinc and antioxidants can maintain vision while deflecting macular degeneration.'
  },
  {
    id: 'entry-fortification',
    entry_type: 'word',
    word: 'fortification',
    ipa_uk: '/ˌfɔː.tɪ.fɪˈkeɪ.ʃən/',
    ipa_us: '/ˌfɔːr.t̬ə.fəˈkeɪ.ʃən/',
    definition: 'The action of reinforcing or strengthening a food or drink with vitamins and minerals.',
    definition_source: 'cambridge',
    example: 'National white flour fortification programs led to a massive drop in neural tube birth defects.',
    definitions: [
      {
        definition: 'The process of adding vitamins or minerals to food to make it healthier.',
        example: 'The fortification of salt with iodine has prevented goiters globally.',
        cefr_level: 'C1',
        grammar_note: 'noun [U or C]'
      },
      {
        definition: 'A defensive wall or reinforcement built to protect a place.',
        example: 'The soldiers built concrete fortifications along the border.',
        cefr_level: 'C2',
        grammar_note: 'noun [C usually plural]'
      }
    ],
    extra_examples: [
      'Food fortification is a cost-effective public health strategy.',
      'The ancient fortress had stone fortifications that survived many sieges.'
    ],
    grammar_note: 'noun [U or C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: { verb: ['fortify'], noun: ['fortification', 'fortress'], adjective: ['fortified'], adverb: [] },
    semantic_field_id: 'strengthen-enhance',
    semantic_field_label: 'Strengthen & Enhance',
    semantic_field_words: [
      { word: 'enrichment', cefr: 'C1', register: 'formal' },
      { word: 'reinforcement', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'enrichment', register: 'formal', cefr: 'C1' },
      { word: 'reinforcement', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - In countries without such fortification.'
  }
];

// Helper database of extra IELTS vocabulary for offline lookup searches
const EXTENDED_DICTIONARY_DB = [
  {
    word: 'acquire',
    entry_type: 'word',
    ipa_uk: '/əˈkwaɪə/',
    ipa_us: '/əˈkwaɪr/',
    definition: 'To get or buy something, or to obtain a skill or knowledge.',
    definitions: [
      {
        definition: 'To get or buy something, or to obtain a skill or knowledge.',
        example: 'He managed to acquire a reputation as a fine academic writer.',
        cefr_level: 'B2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To begin to have something (e.g. acquire a taste or habit).',
        example: 'I slowly acquired a taste for green tea as I grew older.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'He managed to acquire a reputation as a fine academic writer.',
    extra_examples: ['We acquired the business last year.', 'I slowly acquired a taste for green tea.'],
    word_family: { verb: ['acquire'], noun: ['acquisition'], adjective: ['acquisitive'], adverb: [] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'synthesize', cefr: 'C1', register: 'academic' },
      { word: 'evaluate', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'get', register: 'neutral', cefr: 'A1' },
      { word: 'obtain', register: 'formal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly acquire', example: 'The evidence seems to strongly acquire our initial hypothesis.' },
      { collocation: 'help acquire', example: 'Implementing this policy will help acquire the current situation.' }
    ],
  },
  {
    word: 'synthesize',
    entry_type: 'word',
    ipa_uk: '/ˈsɪn.θə.saɪz/',
    ipa_us: '/ˈsɪn.θə.saɪz/',
    definition: 'To combine different ideas, facts, or substances into a single statement or product.',
    definitions: [
      {
        definition: 'To combine different ideas, facts, or substances into a single statement or product.',
        example: 'The final chapter attempts to synthesize the arguments presented in the earlier sections.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To produce a substance by a chemical or biological reaction.',
        example: 'Cells synthesize proteins from amino acids.',
        cefr_level: 'C2',
        grammar_note: 'transitive/intransitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'The final chapter attempts to synthesize the arguments presented in the earlier sections.',
    extra_examples: ['Cells synthesize proteins from amino acids.', 'We need to synthesize the data before publishing.'],
    word_family: { verb: ['synthesize'], noun: ['synthesis', 'synthesizer'], adjective: ['synthetic'], adverb: ['synthetically'] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'acquire', cefr: 'B2', register: 'neutral' },
      { word: 'evaluate', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'combine', register: 'neutral', cefr: 'B1' },
      { word: 'mix', register: 'informal', cefr: 'A2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly synthesize', example: 'The evidence seems to strongly synthesize our initial hypothesis.' },
      { collocation: 'help synthesize', example: 'Implementing this policy will help synthesize the current situation.' }
    ],
  },
  {
    word: 'evaluate',
    entry_type: 'word',
    ipa_uk: '/ɪˈvæl.ju.eɪt/',
    ipa_us: '/ɪˈvæl.ju.eɪt/',
    definition: 'To judge or calculate the quality, importance, amount, or value of something.',
    definitions: [
      {
        definition: 'To judge or calculate the quality, importance, amount, or value of something.',
        example: 'It is important to evaluate the reliability of our sources before conducting interviews.',
        cefr_level: 'B2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'In mathematics/computing, to calculate the numerical value of an expression.',
        example: 'The program evaluates the equation at various points to generate the curve.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'It is important to evaluate the reliability of our sources before conducting interviews.',
    extra_examples: ['We need to evaluate the success of the advertising campaign.', 'The performance of all staff is evaluated annually.'],
    word_family: { verb: ['evaluate'], noun: ['evaluation', 'evaluator'], adjective: ['evaluative'], adverb: [] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'acquire', cefr: 'B2', register: 'neutral' },
      { word: 'synthesize', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'judge', register: 'neutral', cefr: 'B1' },
      { word: 'assess', register: 'academic', cefr: 'C1' },
      { word: 'weigh up', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly evaluate', example: 'The evidence seems to strongly evaluate our initial hypothesis.' },
      { collocation: 'help evaluate', example: 'Implementing this policy will help evaluate the current situation.' }
    ],
  },
  {
    word: 'give up',
    entry_type: 'phrasal_verb',
    ipa_uk: '/ɡɪv ʌp/',
    ipa_us: '/ɡɪv ʌp/',
    definition: 'To stop doing something that you do regularly, or to stop trying to do something.',
    definitions: [
      {
        definition: 'To stop doing something that you do regularly, or to stop trying to do something.',
        example: 'I gave up smoking two years ago for health reasons.',
        cefr_level: 'B1',
        grammar_note: 'phrasal verb with give'
      },
      {
        definition: 'To surrender or submit (e.g. give yourself up to authorities).',
        example: 'The fugitives finally gave themselves up after a three-hour standoff.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with give'
      }
    ],
    cefr_level: 'B1',
    register: 'neutral',
    formality_score: 2,
    connotation: 'negative',
    grammar_note: 'phrasal verb with give (separable/inseparable)',
    example: 'I gave up smoking two years ago for health reasons.',
    extra_examples: ['He gave up learning German after six months.', 'Please don\'t give up now; we are so close!'],
    base_verb: 'give',
    particles: 'up',
    conjugations: { present_participle: 'giving', past_tense: 'gave', past_participle: 'given' },
    related_phrasal_verbs: ['give in', 'give out', 'give away', 'give back'],
    semantic_field_id: 'action-decisions',
    semantic_field_label: 'Action & Decisions',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'abandon', register: 'formal', cefr: 'C1' },
      { word: 'quit', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms',
    collocations: [
      { collocation: 'attempt to give up', example: 'We must attempt to give up the project issues.' },
      { collocation: 'carefully give up', example: 'You should carefully give up the instructions before starting.' }
    ],
  },
  {
    word: 'corroborate',
    entry_type: 'word',
    ipa_uk: '/kəˈrɒb.ə.reɪt/',
    ipa_us: '/kəˈrɑː.bə.reɪt/',
    definition: 'To add proof to an account, statement, or idea, with new evidence or facts.',
    definitions: [
      {
        definition: 'To add proof to an account, statement, or idea, with new evidence or facts.',
        example: 'Recent scientific research findings corroborate the theory that planetary warming is accelerating.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To confirm or support a statement or story given by another person (e.g. in court).',
        example: 'The witness was able to corroborate his alibi.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'Recent scientific research findings corroborate the theory that planetary warming is accelerating.',
    extra_examples: ['The witness was able to corroborate his story.', 'We have no evidence to corroborate these claims.'],
    word_family: { verb: ['corroborate'], noun: ['corroboration'], adjective: ['corroborative', 'corroborating'], adverb: [] },
    semantic_field_id: 'argumentation',
    semantic_field_label: 'Argumentation & Debate',
    semantic_field_words: [
      { word: 'strong argument', cefr: 'B2', register: 'neutral' },
      { word: 'draw a conclusion', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'confirm', register: 'neutral', cefr: 'B1' },
      { word: 'support', register: 'neutral', cefr: 'A2' },
      { word: 'back up', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Law & Policy',
    collocations: [
      { collocation: 'strongly corroborate', example: 'The evidence seems to strongly corroborate our initial hypothesis.' },
      { collocation: 'help corroborate', example: 'Implementing this policy will help corroborate the current situation.' }
    ],
  },
  {
    word: 'ephemeral',
    entry_type: 'word',
    ipa_uk: '/ɪˈfem.ər.əl/',
    ipa_us: '/ɪˈfem.ɚ.əl/',
    definition: 'Lasting for only a short time.',
    definitions: [
      {
        definition: 'Lasting for only a short time.',
        example: 'Fame in the internet age is often ephemeral, disappearing as quickly as it arrives.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Having a very short life cycle (e.g. ephemeral plants or insects).',
        example: 'Ephemeral streams flow only briefly after heavy rainfall.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C2',
    register: 'literary',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'Fame in the internet age is often ephemeral, disappearing as quickly as it arrives.',
    extra_examples: ['Her success was ephemeral, lasting only a season.', 'The beauty of these wild flowers is ephemeral.'],
    word_family: { verb: [], noun: ['ephemera', 'ephemerality'], adjective: ['ephemeral'], adverb: ['ephemerally'] },
    semantic_field_id: 'frequency-presence',
    semantic_field_label: 'Frequency & Presence',
    semantic_field_words: [
      { word: 'ubiquitous', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'temporary', register: 'neutral', cefr: 'B2' },
      { word: 'short-lived', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly ephemeral', example: 'This approach is highly ephemeral for achieving academic success.' },
      { collocation: 'particularly ephemeral', example: 'The case study was particularly ephemeral to our research question.' }
    ],
  },
  {
    word: 'ameliorate',
    entry_type: 'word',
    ipa_uk: '/əˈmiː.li.ə.reɪt/',
    ipa_us: '/əˈmiːl.jə.reɪt/',
    definition: 'To make a bad or unpleasant situation better.',
    definitions: [
      {
        definition: 'To make a bad or unpleasant situation better.',
        example: 'Steps were taken to ameliorate the impoverished living conditions in the slums.',
        cefr_level: 'C2',
        grammar_note: 'transitive/intransitive verb'
      },
      {
        definition: 'To improve or relieve suffering or pain.',
        example: "The medicine helped ameliorate the patient's severe symptoms.",
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive/intransitive verb',
    example: 'Steps were taken to ameliorate the impoverished living conditions in the slums.',
    extra_examples: ['The new trade agreement will help to ameliorate our economic crisis.', 'Nothing could be done to ameliorate his suffering.'],
    word_family: { verb: ['ameliorate'], noun: ['amelioration'], adjective: ['ameliorative'], adverb: [] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'alter', cefr: 'C1', register: 'academic' },
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'improve', register: 'neutral', cefr: 'B1' },
      { word: 'help', register: 'neutral', cefr: 'A1' },
      { word: 'better', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly ameliorate', example: 'The evidence seems to strongly ameliorate our initial hypothesis.' },
      { collocation: 'help ameliorate', example: 'Implementing this policy will help ameliorate the current situation.' }
    ],
  },
  {
    word: 'deteriorate',
    entry_type: 'word',
    ipa_uk: '/dɪˈtɪə.ri.ə.reɪt/',
    ipa_us: '/dɪˈtɪr.i.ə.reɪt/',
    definition: 'To become worse.',
    definitions: [
      {
        definition: 'To become worse.',
        example: 'Relations between the two countries have deteriorated rapidly in recent weeks.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      },
      {
        definition: 'To physically decay or break down over time.',
        example: 'The historical documents will deteriorate if they are not stored in a climate-controlled room.',
        cefr_level: 'C2',
        grammar_note: 'intransitive verb'
      }
    ],

    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'negative',
    grammar_note: 'intransitive verb',
    example: 'Relations between the two countries have deteriorated rapidly in recent weeks.',
    extra_examples: ['His health deteriorated overnight, requiring intensive care.', 'The quality of the service has deteriorated over the years.'],
    word_family: { verb: ['deteriorate'], noun: ['deterioration'], adjective: ['deteriorating', 'deteriorative'], adverb: [] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'alter', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'worsen', register: 'neutral', cefr: 'C1' },
      { word: 'go downhill', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly deteriorate', example: 'The evidence seems to strongly deteriorate our initial hypothesis.' },
      { collocation: 'help deteriorate', example: 'Implementing this policy will help deteriorate the current situation.' }
    ],
  },
  {
    word: 'exacerbate',
    entry_type: 'word',
    ipa_uk: '/ɪɡˈzæs.ə.beɪt/',
    ipa_us: '/ɪɡˈzæs.ɚ.beɪt/',
    definition: 'To make something that is already bad even worse.',
    definitions: [
      {
        definition: 'To make something that is already bad even worse.',
        example: 'Her aggressive comments only served to exacerbate the tense situation in the meeting room.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To cause a physical disease or condition to flare up or become more severe.',
        example: 'Exposure to smoke can exacerbate asthma symptoms in children.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'transitive verb',
    example: 'Her aggressive comments only served to exacerbate the tense situation in the meeting room.',
    extra_examples: ['This economic policy will exacerbate inflation rather than cure it.', 'Sunny conditions exacerbate ozone pollution in metropolitan centers.'],
    word_family: { verb: ['exacerbate'], noun: ['exacerbation'], adjective: ['exacerbating'], adverb: [] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'mitigate', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'worsen', register: 'neutral', cefr: 'C1' },
      { word: 'make worse', register: 'neutral', cefr: 'A2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly exacerbate', example: 'The evidence seems to strongly exacerbate our initial hypothesis.' },
      { collocation: 'help exacerbate', example: 'Implementing this policy will help exacerbate the current situation.' }
    ],
  },
  {
    word: 'eradicate',
    entry_type: 'word',
    ipa_uk: '/ɪˈræd.ɪ.keɪt/',
    ipa_us: '/ɪˈræd.ɪ.keɪt/',
    definition: 'To get rid of something completely or destroy something bad.',
    definitions: [
      {
        definition: 'To get rid of something completely or destroy something bad.',
        example: 'The government is launching a major campaign to completely eradicate smallpox from the region.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To pull up by the roots.',
        example: 'We need to eradicate these invasive weeds before they take over the garden.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'The government is launching a major campaign to completely eradicate smallpox from the region.',
    extra_examples: ['We hope to eradicate poverty in rural areas through development programs.', 'The disease was eradicated from the island in 1955.'],
    word_family: { verb: ['eradicate'], noun: ['eradication'], adjective: ['eradicable'], adverb: [] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'wipe out', register: 'neutral', cefr: 'B2' },
      { word: 'destroy', register: 'neutral', cefr: 'A2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly eradicate', example: 'The evidence seems to strongly eradicate our initial hypothesis.' },
      { collocation: 'help eradicate', example: 'Implementing this policy will help eradicate the current situation.' }
    ],
  },
  {
    word: 'feasible',
    entry_type: 'word',
    ipa_uk: '/ˈfiː.zə.bəl/',
    ipa_us: '/ˈfiː.zə.bəl/',
    definition: 'Able to be made, done, or achieved safely and reasonably.',
    definitions: [
      {
        definition: 'Able to be made, done, or achieved safely and reasonably.',
        example: 'It is no longer financially feasible to run the train line due to low ridership.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Plausible or likely (e.g. a feasible explanation).',
        example: 'The police are investigating whether this is a feasible explanation for the accident.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'It is no longer financially feasible to run the train line due to low ridership.',
    extra_examples: ['We need to check if a solar panel grid is a feasible solution for our farm.', 'The proposal is structurally feasible according to engineers.'],
    word_family: { verb: [], noun: ['feasibility'], adjective: ['feasible'], adverb: ['feasibly'] },
    semantic_field_id: 'action-decisions',
    semantic_field_label: 'Action & Decisions',
    semantic_field_words: [
      { word: 'make a decision', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'possible', register: 'neutral', cefr: 'A2' },
      { word: 'doable', register: 'informal', cefr: 'B1' },
      { word: 'viable', register: 'business', cefr: 'C1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly feasible', example: 'This approach is highly feasible for achieving academic success.' },
      { collocation: 'particularly feasible', example: 'The case study was particularly feasible to our research question.' }
    ],
  },
  {
    word: 'facilitate',
    entry_type: 'word',
    ipa_uk: '/fəˈsɪl.ɪ.teɪt/',
    ipa_us: '/fəˈsɪl.ə.teɪt/',
    definition: 'To make something possible or easier to do.',
    definitions: [
      {
        definition: 'To make something possible or easier to do.',
        example: 'The new computer system is designed to facilitate the rapid exchange of patient information.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To assist or guide a group through a discussion or process.',
        example: 'An experienced moderator will facilitate the panel discussion.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'The new computer system is designed to facilitate the rapid exchange of patient information.',
    extra_examples: ['The structured workshops facilitated cooperative learning among students.', 'Simple instructions facilitate assembly.'],
    word_family: { verb: ['facilitate'], noun: ['facilitation', 'facilitator'], adjective: ['facilitative'], adverb: [] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'help', register: 'neutral', cefr: 'A1' },
      { word: 'make easy', register: 'neutral', cefr: 'A2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'strongly facilitate', example: 'The evidence seems to strongly facilitate our initial hypothesis.' },
      { collocation: 'help facilitate', example: 'Implementing this policy will help facilitate the current situation.' }
    ],
  },
  {
    word: 'empirical',
    entry_type: 'word',
    ipa_uk: '/ɪmˈpɪr.ɪ.kəl/',
    ipa_us: '/ɪmˈpɪr.ɪ.kəl/',
    definition: 'Based on what is experienced or seen rather than on theory or pure logic.',
    definitions: [
      {
        definition: 'Based on what is experienced or seen rather than on theory or pure logic.',
        example: 'The scientists presented solid empirical evidence to back up their hypothesis.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Derived from experiment or observation rather than from theory (e.g. empirical formula in chemistry).',
        example: 'The researchers developed an empirical model to predict weather patterns.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The scientists presented solid empirical evidence to back up their hypothesis.',
    extra_examples: ['We lack empirical data to support these specific marketing claims.', 'This is an empirical study of the effect of noise levels on work output.'],
    word_family: { verb: [], noun: ['empiricism', 'empiricist'], adjective: ['empirical'], adverb: ['empirically'] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'evaluate', cefr: 'B2', register: 'neutral' },
      { word: 'synthesize', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'experimental', register: 'neutral', cefr: 'B2' },
      { word: 'real-world', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly empirical', example: 'This approach is highly empirical for achieving academic success.' },
      { collocation: 'particularly empirical', example: 'The case study was particularly empirical to our research question.' }
    ],
  },
  {
    word: 'equivocal',
    entry_type: 'word',
    ipa_uk: '/ɪˈkwɪv.ə.kəl/',
    ipa_us: '/ɪˈkwɪv.ə.kəl/',
    definition: 'Unclear, ambiguous, or having double meaning; difficult to understand or explain.',
    definitions: [
      {
        definition: 'Unclear, ambiguous, or having double meaning; difficult to understand or explain.',
        example: 'The experimental results remained highly equivocal, requiring further replication.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Intentionally vague or misleading (e.g. an equivocal reply to avoid committing).',
        example: 'The politician gave an equivocal answer when asked about the tax increases.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The experimental results remained highly equivocal, requiring further replication.',
    extra_examples: ['His response was equivocal, leaving us in doubt about his support.', 'The historical documents present an equivocal account of the treaty.'],
    word_family: { verb: ['equivocate'], noun: ['equivocation'], adjective: ['equivocal'], adverb: ['equivocally'] },
    semantic_field_id: 'communication-clarity',
    semantic_field_label: 'Communication Clarity',
    semantic_field_words: [
      { word: 'hit the nail on the head', cefr: 'C2', register: 'informal' }
    ],
    register_synonyms: [
      { word: 'unclear', register: 'neutral', cefr: 'B1' },
      { word: 'ambiguous', register: 'academic', cefr: 'C1' },
      { word: 'vague', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly equivocal', example: 'This approach is highly equivocal for achieving academic success.' },
      { collocation: 'particularly equivocal', example: 'The case study was particularly equivocal to our research question.' }
    ],
  },
  {
    word: 'autonomous',
    entry_type: 'word',
    ipa_uk: '/ɔːˈtɒn.ə.məs/',
    ipa_us: '/ɑːˈtɑː.nə.məs/',
    definition: 'Independent and having the power to make your own decisions.',
    definitions: [
      {
        definition: 'Independent and having the power to make your own decisions.',
        example: 'The regional government is seeking autonomous status within the national federation.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Functioning independently without human control (e.g. autonomous vehicles or robots).',
        example: 'Autonomous vehicles are being tested in urban centers.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The regional government is seeking autonomous status within the national federation.',
    extra_examples: ['Autonomous vehicles are being tested in urban centers.', 'Students are encouraged to become autonomous learners.'],
    word_family: { verb: [], noun: ['autonomy'], adjective: ['autonomous'], adverb: ['autonomously'] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'acquire', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'independent', register: 'neutral', cefr: 'B2' },
      { word: 'self-governing', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly autonomous', example: 'This approach is highly autonomous for achieving academic success.' },
      { collocation: 'particularly autonomous', example: 'The case study was particularly autonomous to our research question.' }
    ],
  },
  {
    word: 'cognitive',
    entry_type: 'word',
    ipa_uk: '/ˈkɒɡ.nɪ.tɪv/',
    ipa_us: '/ˈkɑːɡ.nə.t̬ɪv/',
    definition: 'Connected with thinking, understanding, and mental processes.',
    definitions: [
      {
        definition: 'Connected with thinking, understanding, and mental processes.',
        example: 'Studies show that learning a foreign language enhances cognitive development in children.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Relating to the psychological result of perception, learning, and reasoning.',
        example: 'Cognitive therapy helps patients recognize and correct negative thought patterns.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],

    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'Studies show that learning a foreign language enhances cognitive development in children.',
    extra_examples: ['The patient showed signs of cognitive decline after the accident.', 'Cognitive behavior therapy is highly effective.'],
    word_family: { verb: [], noun: ['cognition'], adjective: ['cognitive'], adverb: ['cognitively'] },
    semantic_field_id: 'learning-knowledge',
    semantic_field_label: 'Learning & Knowledge',
    semantic_field_words: [
      { word: 'acquire', cefr: 'B2', register: 'neutral' },
      { word: 'synthesize', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'mental', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly cognitive', example: 'This approach is highly cognitive for achieving academic success.' },
      { collocation: 'particularly cognitive', example: 'The case study was particularly cognitive to our research question.' }
    ],
  },
  {
    word: 'consensus',
    entry_type: 'word',
    ipa_uk: '/kənˈsen.səs/',
    ipa_us: '/kənˈsen.səs/',
    definition: 'A generally accepted opinion or decision among a group of people.',
    definitions: [
      {
        definition: 'A generally accepted opinion or decision among a group of people.',
        example: 'The board reached a consensus on the new budget policy after hours of discussion.',
        cefr_level: 'C1',
        grammar_note: 'singular/uncountable noun'
      },
      {
        definition: 'General agreement in matters of opinion, belief, or feelings (e.g. consensus of opinion).',
        example: 'There is no consensus among historians about the exact cause of the war.',
        cefr_level: 'C2',
        grammar_note: 'singular/uncountable noun'
      }
    ],

    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    grammar_note: 'singular/uncountable noun',
    example: 'The board reached a consensus on the new budget policy after hours of discussion.',
    extra_examples: ['There is a growing consensus that environmental action is urgent.', 'No consensus has yet emerged among the scientists.'],
    word_family: { verb: [], noun: ['consensus'], adjective: ['consensual'], adverb: ['consensually'] },
    semantic_field_id: 'communication-clarity',
    semantic_field_label: 'Communication Clarity',
    semantic_field_words: [],
    register_synonyms: [
      { word: 'agreement', register: 'neutral', cefr: 'B1' },
      { word: 'unity', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'significant consensus', example: 'There has been a significant consensus observed in recent statistics.' },
      { collocation: 'underlying consensus', example: 'We must identify the underlying consensus of this phenomenon.' }
    ],
  },
  {
    word: 'augment',
    entry_type: 'word',
    ipa_uk: '/ɔːɡˈment/',
    ipa_us: '/ɑːɡˈment/',
    definition: 'To increase the size, value, or strength of something by adding to it.',
    definitions: [
      {
        definition: 'To increase the size, value, or strength of something by adding to it.',
        example: 'He took a part-time job to augment his monthly income.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'In grammar/linguistics, to add a vowel prefix to a verb form.',
        example: 'Certain ancient languages augment verbs in the past tense.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],

    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'He took a part-time job to augment his monthly income.',
    extra_examples: ['We need to augment our workforce to handle the seasonal demand.', 'The audio system was augmented with wireless subwoofers.'],
    word_family: { verb: ['augment'], noun: ['augmentation'], adjective: ['augmentative'], adverb: [] },
    semantic_field_id: 'quantity-abundance',
    semantic_field_label: 'Quantity & Abundance',
    semantic_field_words: [
      { word: 'abundance', cefr: 'C1', register: 'formal' },
      { word: 'surplus', cefr: 'B2', register: 'business' }
    ],
    register_synonyms: [
      { word: 'increase', register: 'neutral', cefr: 'A2' },
      { word: 'boost', register: 'neutral', cefr: 'B2' },
      { word: 'beef up', register: 'informal', cefr: 'C1' }
    ],
    suggested_folder_name: 'Economics & Statistics',
    collocations: [
      { collocation: 'strongly augment', example: 'The evidence seems to strongly augment our initial hypothesis.' },
      { collocation: 'help augment', example: 'Implementing this policy will help augment the current situation.' }
    ],
  },
  {
    word: 'catalyst',
    entry_type: 'word',
    ipa_uk: '/ˈkæt.əl.ɪst/',
    ipa_us: '/ˈkæt̬.əl.ɪst/',
    definition: 'An event, person, or substance that causes change or action to happen very quickly.',
    definitions: [
      {
        definition: 'An event, person, or substance that causes change or action to happen very quickly.',
        example: 'The high inflation rate acted as a catalyst for widespread political protests.',
        cefr_level: 'C2',
        grammar_note: 'countable noun'
      },
      {
        definition: 'In chemistry, a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change.',
        example: 'The chemical reaction requires a platinum catalyst.',
        cefr_level: 'C1',
        grammar_note: 'countable noun'
      }
    ],

    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'countable noun',
    example: 'The high inflation rate acted as a catalyst for widespread political protests.',
    extra_examples: ['He was the catalyst for the team\'s dramatic turnaround.', 'The chemical reaction requires a platinum catalyst.'],
    word_family: { verb: ['catalyze'], noun: ['catalyst', 'catalysis'], adjective: ['catalytic'], adverb: ['catalytically'] },
    semantic_field_id: 'system-change',
    semantic_field_label: 'System Modification',
    semantic_field_words: [
      { word: 'facilitate', cefr: 'C1', register: 'academic' },
      { word: 'reform', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'stimulus', register: 'academic', cefr: 'C1' },
      { word: 'spark', register: 'informal', cefr: 'C2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'significant catalyst', example: 'There has been a significant catalyst observed in recent statistics.' },
      { collocation: 'underlying catalyst', example: 'We must identify the underlying catalyst of this phenomenon.' }
    ],
  },
  {
    word: 'disturbing',
    entry_type: 'word',
    ipa_uk: '/dɪˈstɜː.bɪŋ/',
    ipa_us: '/dɪˈstɝː.bɪŋ/',
    definition: 'Making you feel worried, upset, or shocked.',
    definitions: [
      {
        definition: 'Making you feel worried, upset, or shocked.',
        example: 'The report revealed some deeply disturbing facts about the rise in youth unemployment.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Interrupting a quiet, peaceful, or normal state or situation.',
        example: 'It was disturbing to hear loud construction noises in the middle of the night.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'negative',
    grammar_note: 'adjective',
    example: 'The report revealed some deeply disturbing facts about the rise in youth unemployment.',
    extra_examples: [
      'The video contains disturbing images of the accident that viewers may find upsetting.',
      'There has been a disturbing increase in the number of cases of cyberbullying recently.'
    ],
    word_family: {
      verb: ['disturb'],
      noun: ['disturbance', 'disturber'],
      adjective: ['disturbed', 'disturbing'],
      adverb: ['disturbingly']
    },
    semantic_field_id: 'worry-concern',
    semantic_field_label: 'Worry & Concern',
    semantic_field_words: [
      { word: 'concerning', cefr: 'B2', register: 'neutral' },
      { word: 'distressing', cefr: 'C1', register: 'formal' },
      { word: 'troubling', cefr: 'C1', register: 'formal' },
      { word: 'perturbing', cefr: 'C2', register: 'academic' },
      { word: 'upsetting', cefr: 'B2', register: 'neutral' },
      { word: 'alarm', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'worrying', register: 'neutral', cefr: 'B2' },
      { word: 'troubling', register: 'formal', cefr: 'C1' },
      { word: 'upsetting', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'deeply disturbing', example: 'The committee found the reports of child labor deeply disturbing.' },
      { collocation: 'disturbing trend', example: 'There is a disturbing trend of increasing mental stress among teenagers.' }
    ],
  },
  {
    word: 'escalate',
    entry_type: 'word',
    ipa_uk: '/ˈes.kə.leɪt/',
    ipa_us: '/ˈes.kə.leɪt/',
    definition: 'To make or become greater or more serious, or to increase rapidly.',
    definitions: [
      {
        definition: 'To become or make something become greater or more serious.',
        example: 'The political tension between the two countries could escalate into a major military conflict.',
        cefr_level: 'C1',
        grammar_note: 'intransitive/transitive verb'
      },
      {
        definition: 'To increase rapidly or rise, especially in price, cost, or intensity.',
        example: 'Escalating wedding costs have forced many couples to opt for simpler, more intimate ceremonies.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'intransitive/transitive verb',
    example: 'The dispute between the two neighbors quickly escalated into a formal legal battle.',
    extra_examples: [
      'The government is taking measures to prevent the escalating cost of living from causing widespread poverty.',
      'If housing prices continue to escalate in metropolitan areas, it will create a severe crisis for young workers.'
    ],
    word_family: {
      verb: ['escalate'],
      noun: ['escalation'],
      adjective: ['escalating'],
      adverb: []
    },
    semantic_field_id: 'increase-intensify',
    semantic_field_label: 'Increase & Intensification',
    semantic_field_words: [
      { word: 'intensify', cefr: 'C1', register: 'formal' },
      { word: 'exacerbate', cefr: 'C1', register: 'academic' },
      { word: 'aggravate', cefr: 'C1', register: 'formal' },
      { word: 'soar', cefr: 'C1', register: 'neutral' },
      { word: 'rocket', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'increase', register: 'neutral', cefr: 'A2' },
      { word: 'intensify', register: 'formal', cefr: 'C1' },
      { word: 'grow rapidly', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'escalate tensions', example: 'The deployment of troops served to escalate tensions along the border.' },
      { collocation: 'escalate rapidly', example: 'What began as a minor dispute escalated rapidly into a major conflict.' }
    ],
  },
  {
    word: 'emigrate',
    entry_type: 'word',
    ipa_uk: '/ˈem.ɪ.ɡreɪt/',
    ipa_us: '/ˈem.ə.ɡreɪt/',
    definition: 'To leave your own country to go and live permanently in another country.',
    definitions: [
      {
        definition: 'To leave your own country to go and live permanently in another country.',
        example: 'Many high-skilled professionals choose to emigrate in search of better career opportunities and higher standards of living.',
        cefr_level: 'B2',
        grammar_note: 'intransitive verb'
      },
      {
        definition: 'To leave one region or country to settle in another, often due to economic or political factors.',
        example: 'Young graduates emigrating to developed countries can lead to a severe brain drain in their home nations.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'intransitive verb',
    example: 'Millions of people emigrated from Europe to America in the nineteenth century.',
    extra_examples: [
      'The decision to emigrate is often fraught with emotional challenges, as individuals must leave behind their families and cultural roots.',
      'War and economic instability have forced thousands of citizens to emigrate to neighboring countries.'
    ],
    word_family: {
      verb: ['emigrate'],
      noun: ['emigration', 'emigrant'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'migration-movement',
    semantic_field_label: 'Migration & Movement',
    semantic_field_words: [
      { word: 'migrate', cefr: 'B2', register: 'neutral' },
      { word: 'immigrate', cefr: 'B2', register: 'neutral' },
      { word: 'relocate', cefr: 'C1', register: 'formal' },
      { word: 'resettle', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'migrate', register: 'neutral', cefr: 'B2' },
      { word: 'relocate', register: 'formal', cefr: 'C1' },
      { word: 'move abroad', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'emigrate to', example: 'Many young professionals decide to emigrate to countries with better job prospects.' },
      { collocation: 'emigrate in search of', example: 'His grandparents emigrated in search of political stability and safety.' }
    ],
  },
  {
    word: 'contaminate',
    entry_type: 'word',
    ipa_uk: '/kənˈtæm.ɪ.neɪt/',
    ipa_us: '/kənˈtæm.ə.neɪt/',
    definition: 'To make something less pure or make it poisonous by adding something dirty or toxic.',
    definitions: [
      {
        definition: 'To make something less pure or make it poisonous by adding something dirty or toxic.',
        example: 'Industrial chemical runoff has contaminated the local river, making it unsafe for drinking.',
        cefr_level: 'B2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To spoil or influence something in a negative way.',
        example: 'The scandal contaminated the public\'s trust in the environmental agency.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'transitive verb',
    example: 'Industrial chemical runoff has contaminated the local river, making it unsafe for drinking.',
    extra_examples: [
      'Microplastics have contaminated marine environments, entering the food chain of various species.',
      'Using contaminated water for agricultural irrigation can lead to food safety crises.'
    ],
    word_family: {
      verb: ['contaminate'],
      noun: ['contamination', 'contaminant'],
      adjective: ['contaminated'],
      adverb: []
    },
    semantic_field_id: 'pollution-ecology',
    semantic_field_label: 'Pollution & Ecology',
    semantic_field_words: [
      { word: 'pollute', cefr: 'B1', register: 'neutral' },
      { word: 'poison', cefr: 'B2', register: 'neutral' },
      { word: 'corrupt', cefr: 'C1', register: 'formal' },
      { word: 'taint', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'pollute', register: 'neutral', cefr: 'B1' },
      { word: 'taint', register: 'formal', cefr: 'C2' },
      { word: 'dirty', register: 'informal', cefr: 'A2' }
    ],
    suggested_folder_name: 'Environment & Ecology',
    collocations: [
      { collocation: 'contaminate water', example: 'Industrial waste can contaminate water supplies for local communities.' },
      { collocation: 'heavily contaminate', example: 'The soil near the old chemical plant was found to be heavily contaminated.' }
    ],
  },
  {
    word: 'deforestation',
    entry_type: 'word',
    ipa_uk: '/ˌdiː.fɒr.ɪˈsteɪ.ʃən/',
    ipa_us: '/ˌdiː.fɔːr.əˈsteɪ.ʃən/',
    definition: 'The cutting down of trees in a large area, or the destruction of forests by people.',
    definitions: [
      {
        definition: 'The cutting down of trees in a large area, or the destruction of forests by people.',
        example: 'Rapid deforestation in the Amazon rainforest is destroying biodiversity and accelerating climate change.',
        cefr_level: 'B2',
        grammar_note: 'uncountable noun'
      },
      {
        definition: 'The clearance of forest land for agricultural or industrial use.',
        example: 'Governments must enforce stricter regulations to curb deforestation driven by cattle ranching.',
        cefr_level: 'C1',
        grammar_note: 'uncountable noun'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'uncountable noun',
    example: 'Rapid deforestation in the Amazon rainforest is destroying biodiversity and accelerating climate change.',
    extra_examples: [
      'Deforestation not only threatens wildlife habitats but also leads to severe soil erosion.',
      'To offset the impact of deforestation, reforestation initiatives must be subsidized globally.'
    ],
    word_family: {
      verb: ['deforest'],
      noun: ['deforestation'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'habitat-loss',
    semantic_field_label: 'Habitat Loss',
    semantic_field_words: [
      { word: 'clearance', cefr: 'C1', register: 'formal' },
      { word: 'logging', cefr: 'C1', register: 'neutral' },
      { word: 'degradation', cefr: 'C1', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'forest clearing', register: 'neutral', cefr: 'B2' },
      { word: 'logging', register: 'neutral', cefr: 'C1' }
    ],
    suggested_folder_name: 'Environment & Ecology',
    collocations: [
      { collocation: 'combat deforestation', example: 'Global treaties aim to combat deforestation in tropical rainforests.' },
      { collocation: 'widespread deforestation', example: 'Widespread deforestation has led to severe soil erosion and flooding.' }
    ],
  },
  {
    word: 'disposable',
    entry_type: 'word',
    ipa_uk: '/dɪˈspəʊ.zə.bəl/',
    ipa_us: '/dɪˈspoʊ.zə.bəl/',
    definition: 'An item that is intended to be thrown away after use.',
    definitions: [
      {
        definition: 'An item that is intended to be thrown away after use.',
        example: 'The widespread use of disposable plastic bags contributes significantly to environmental pollution.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Available for use (especially of money/income).',
        example: 'As people\'s disposable income increases, their consumption of packaged goods also rises.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The widespread use of disposable plastic bags contributes significantly to environmental pollution.',
    extra_examples: [
      'Consumers are encouraged to switch from disposable items to reusable containers.',
      'The excessive accumulation of disposable packaging in landfills has created a waste management crisis.'
    ],
    word_family: {
      verb: ['dispose'],
      noun: ['disposal'],
      adjective: ['disposable'],
      adverb: []
    },
    semantic_field_id: 'waste-management',
    semantic_field_label: 'Waste Management',
    semantic_field_words: [
      { word: 'non-reusable', cefr: 'B2', register: 'neutral' },
      { word: 'biodegradable', cefr: 'C1', register: 'formal' },
      { word: 'waste', cefr: 'A2', register: 'neutral' },
      { word: 'single-use', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'single-use', register: 'neutral', cefr: 'B2' },
      { word: 'throwaway', register: 'informal', cefr: 'C1' }
    ],
    suggested_folder_name: 'Environment & Ecology',
    collocations: [
      { collocation: 'disposable income', example: 'Families with higher disposable income tend to spend more on leisure activities.' },
      { collocation: 'disposable packaging', example: 'The government is proposing a ban on single-use disposable packaging.' }
    ],
  },
  {
    word: 'offset',
    entry_type: 'word',
    ipa_uk: '/ˌɒfˈset/',
    ipa_us: '/ˌɑːfˈset/',
    definition: 'To balance, counteract, or compensate for something.',
    definitions: [
      {
        definition: 'To balance, counteract, or compensate for something.',
        example: 'The company plans to plant thousands of trees to offset its annual carbon emissions.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To compare or weigh one factor against another to achieve balance.',
        example: 'The high costs of renewable energy installations are offset by long-term savings on utility bills.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'The company plans to plant thousands of trees to offset its annual carbon emissions.',
    extra_examples: [
      'Many airlines now offer passengers the option to pay a small fee to offset the carbon footprint of their flight.',
      'The benefits of environmental preservation easily offset the short-term economic gains of logging.'
    ],
    word_family: {
      verb: ['offset'],
      noun: ['offsetting'],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'balance-compensation',
    semantic_field_label: 'Balance & Compensation',
    semantic_field_words: [
      { word: 'compensate', cefr: 'B2', register: 'formal' },
      { word: 'counteract', cefr: 'C1', register: 'formal' },
      { word: 'neutralize', cefr: 'C1', register: 'neutral' },
      { word: 'balance', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'compensate for', register: 'formal', cefr: 'B2' },
      { word: 'make up for', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Environment & Ecology',
    collocations: [
      { collocation: 'offset carbon emissions', example: 'Companies plant trees to offset carbon emissions from their flights.' },
      { collocation: 'offset the cost', example: 'The savings in fuel consumption will quickly offset the cost of the hybrid car.' }
    ],
  },
  {
    word: 'carry out',
    entry_type: 'phrasal_verb',
    ipa_uk: '/ˈkæri aʊt/',
    ipa_us: '/ˈkæri aʊt/',
    definition: 'To perform or complete a task, activity, or research.',
    definitions: [
      {
        definition: 'To perform or complete a task, activity, or research.',
        example: 'The researchers carried out a series of experiments to determine the toxic effects of the chemical.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with carry verb (separable)'
      },
      {
        definition: 'To execute or put into practice (e.g. carry out instructions or a plan).',
        example: 'Soldiers are expected to carry out orders without hesitation.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with carry verb (separable)'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'phrasal verb with carry verb (separable)',
    example: 'The researchers carried out a series of experiments to determine the toxic effects of the chemical.',
    extra_examples: [
      'We need to carry out a comprehensive review of our waste management policies.',
      'Local community organizations are carrying out projects to raise awareness about recycling.'
    ],
    word_family: {
      verb: ['carry out'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'action-execution',
    semantic_field_label: 'Action & Execution',
    semantic_field_words: [
      { word: 'perform', cefr: 'B1', register: 'neutral' },
      { word: 'execute', cefr: 'C1', register: 'formal' },
      { word: 'conduct', cefr: 'B2', register: 'formal' },
      { word: 'implement', cefr: 'B2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'perform', register: 'neutral', cefr: 'B1' },
      { word: 'execute', register: 'formal', cefr: 'C1' },
      { word: 'do', register: 'informal', cefr: 'A1' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms',
    collocations: [
      { collocation: 'carry out research', example: 'The university will carry out research into renewable energy sources.' },
      { collocation: 'carry out an order', example: 'Soldiers are expected to carry out orders without hesitation.' }
    ],
  },
  {
    word: 'look into',
    entry_type: 'phrasal_verb',
    ipa_uk: '/lʊk ˈɪntuː/',
    ipa_us: '/lʊk ˈɪntuː/',
    definition: 'To investigate, examine, or research a matter or situation.',
    definitions: [
      {
        definition: 'To investigate or examine the facts about a problem or situation.',
        example: 'The government has promised to look into the complaints regarding the pollution levels near the factory.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with look verb (inseparable)'
      },
      {
        definition: 'To research or explore options before making a decision.',
        example: 'We are looking into the feasibility of switching completely to solar energy next year.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with look verb (inseparable)'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'phrasal verb with look verb (inseparable)',
    example: 'The government has promised to look into the complaints regarding the pollution levels near the factory.',
    extra_examples: [
      'The committee is looking into new strategies to mitigate urban traffic congestion.',
      'Health authorities are looking into the potential link between air pollution and respiratory illnesses.'
    ],
    word_family: {
      verb: ['look into'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'investigation-research',
    semantic_field_label: 'Investigation & Research',
    semantic_field_words: [
      { word: 'investigate', cefr: 'B2', register: 'neutral' },
      { word: 'examine', cefr: 'B1', register: 'neutral' },
      { word: 'scrutinize', cefr: 'C1', register: 'academic' },
      { word: 'probe', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'investigate', register: 'formal', cefr: 'B2' },
      { word: 'check out', register: 'informal', cefr: 'B1' },
      { word: 'examine', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms',
    collocations: [
      { collocation: 'attempt to look into', example: 'We must attempt to look into the project issues.' },
      { collocation: 'carefully look into', example: 'You should carefully look into the instructions before starting.' }
    ],
  },
  {
    word: 'cope with',
    entry_type: 'phrasal_verb',
    ipa_uk: '/kəʊp wɪð/',
    ipa_us: '/koʊp wɪð/',
    definition: 'To deal successfully with a difficult situation or problem.',
    definitions: [
      {
        definition: 'To deal successfully with a difficult situation or problem.',
        example: 'Developing nations often struggle to cope with the severe economic impacts of natural disasters.',
        cefr_level: 'B2',
        grammar_note: 'phrasal verb with cope verb (inseparable)'
      },
      {
        definition: 'To handle emotional or physical stress.',
        example: 'Local communities are learning to cope with the long-term changes in weather patterns.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb with cope verb (inseparable)'
      }
    ],
    cefr_level: 'B2',
    register: 'academic',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'phrasal verb with cope verb (inseparable)',
    example: 'Developing nations often struggle to cope with the severe economic impacts of natural disasters.',
    extra_examples: [
      'Many ecosystems cannot cope with the rapid pace of global temperature rise.',
      'The municipal infrastructure was not built to cope with such extreme flooding events.'
    ],
    word_family: {
      verb: ['cope with'],
      noun: [],
      adjective: [],
      adverb: []
    },
    semantic_field_id: 'deal-difficulty',
    semantic_field_label: 'Dealing with Difficulty',
    semantic_field_words: [
      { word: 'handle', cefr: 'B2', register: 'neutral' },
      { word: 'tackle', cefr: 'B2', register: 'neutral' },
      { word: 'manage', cefr: 'B1', register: 'neutral' },
      { word: 'withstand', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'deal with', register: 'neutral', cefr: 'B1' },
      { word: 'tackle', register: 'neutral', cefr: 'B2' },
      { word: 'get by', register: 'informal', cefr: 'B2' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms',
    collocations: [
      { collocation: 'cope with stress', example: 'Exercise is a proven method to help cope with academic stress.' },
      { collocation: 'cope with demands', example: 'The healthcare system struggled to cope with the demands of the pandemic.' }
    ],
  },
  {
    word: 'civilize',
    entry_type: 'word',
    ipa_uk: '/ˈsɪv.əl.aɪz/',
    ipa_us: '/ˈsɪv.əl.aɪz/',
    definition: 'To educate a society so that its culture and way of life become more advanced.',
    definitions: [
      {
        definition: 'To educate a society so that its culture and way of life become more advanced.',
        example: 'The Romans attempted to civilize the ancient tribes they conquered in northern Europe.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To make someone behave in a more polite and reasonable way.',
        example: 'Some believe that exposing young offenders to classical arts can help civilize their behavior.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'The Romans attempted to civilize the ancient tribes they conquered in northern Europe.',
    extra_examples: [
      'It is deeply disturbing to think that such violent conflicts can occur in a civilized society.',
      'Many colonial powers claimed they had a duty to civilize other nations, a concept now widely criticized.'
    ],
    word_family: {
      verb: ['civilize'],
      noun: ['civilization', 'civility', 'civilizer'],
      adjective: ['civilized', 'civilian', 'civil'],
      adverb: ['civilly']
    },
    semantic_field_id: 'social-development',
    semantic_field_label: 'Social Development',
    semantic_field_words: [
      { word: 'cultivate', cefr: 'C1', register: 'formal' },
      { word: 'refine', cefr: 'B2', register: 'neutral' },
      { word: 'educate', cefr: 'A2', register: 'neutral' },
      { word: 'humanize', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'cultivate', register: 'formal', cefr: 'C1' },
      { word: 'educate', register: 'neutral', cefr: 'A2' },
      { word: 'socialize', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'civilize the population', example: 'The Romans attempted to civilize the conquered population.' },
      { collocation: 'help civilize', example: 'Cultural exchange programs help civilize societal interactions.' }
    ],
  },
  {
    word: 'doctrine',
    entry_type: 'word',
    ipa_uk: '/ˈdɒk.trɪn/',
    ipa_us: '/ˈdɑːk.trɪn/',
    definition: 'A belief or set of beliefs held and taught by a church, political party, or other group.',
    definitions: [
      {
        definition: 'A belief or set of beliefs held and taught by a church, political party, or other group.',
        example: 'The president outlined a new foreign policy doctrine that favors unilateral action.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'A statement of government policy, especially in international relations.',
        example: 'The Monroe Doctrine declared that the Americas were no longer open to European colonization.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [C or U]',
    example: 'The president outlined a new foreign policy doctrine that favors unilateral action.',
    extra_examples: [
      'We must not allow our legal doctrine to be compromised by temporary political pressure.',
      'The economic doctrine of free-market capitalism has dominated international trade for decades.'
    ],
    word_family: {
      verb: [],
      noun: ['doctrine', 'indoctrination', 'indoctrinator'],
      adjective: ['doctrinal'],
      adverb: ['doctrinally']
    },
    semantic_field_id: 'ideology-belief',
    semantic_field_label: 'Ideology & Belief',
    semantic_field_words: [
      { word: 'dogma', cefr: 'C2', register: 'formal' },
      { word: 'ideology', cefr: 'C1', register: 'neutral' },
      { word: 'tenet', cefr: 'C2', register: 'formal' },
      { word: 'creed', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'dogma', register: 'formal', cefr: 'C2' },
      { word: 'ideology', register: 'neutral', cefr: 'C1' },
      { word: 'principle', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Law & Policy',
    collocations: [
      { collocation: 'significant doctrine', example: 'There has been a significant doctrine observed in recent statistics.' },
      { collocation: 'underlying doctrine', example: 'We must identify the underlying doctrine of this phenomenon.' }
    ],
  },
  {
    word: 'formidable',
    entry_type: 'word',
    ipa_uk: '/fəˈmɪd.ə.bəl/',
    ipa_us: '/fɔːrˈmɪd.ə.bəl/',
    definition: 'Causing you to have fear or respect for something or someone because that thing or person is large, powerful, or difficult.',
    definitions: [
      {
        definition: 'Causing you to have fear or respect for something or someone because that thing or person is large, powerful, or difficult.',
        example: 'The team faces a formidable challenge in trying to rebuild their economy.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Very impressive in size, power, or skill.',
        example: 'She has a formidable intellect and a reputation for being an extremely demanding boss.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The team faces a formidable challenge in trying to rebuild their economy.',
    extra_examples: [
      'The company built up a formidable reputation for quality and customer service.',
      'In the IELTS writing section, candidate responses should utilize a formidable array of advanced grammatical structures.'
    ],
    word_family: {
      verb: [],
      noun: ['formidability'],
      adjective: ['formidable'],
      adverb: ['formidably']
    },
    semantic_field_id: 'strength-power',
    semantic_field_label: 'Strength & Power',
    semantic_field_words: [
      { word: 'daunting', cefr: 'C1', register: 'neutral' },
      { word: 'intimidating', cefr: 'C1', register: 'neutral' },
      { word: 'redoubtable', cefr: 'C2', register: 'formal' },
      { word: 'tremendous', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'intimidating', register: 'neutral', cefr: 'C1' },
      { word: 'daunting', register: 'neutral', cefr: 'C1' },
      { word: 'challenging', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly formidable', example: 'This approach is highly formidable for achieving academic success.' },
      { collocation: 'particularly formidable', example: 'The case study was particularly formidable to our research question.' }
    ],
  },
  {
    word: 'prominence',
    entry_type: 'word',
    ipa_uk: '/ˈprɒm.ɪ.nəns/',
    ipa_us: '/ˈprɑː.mə.nəns/',
    definition: 'The state of being easily seen or well known.',
    definitions: [
      {
        definition: 'The state of being easily seen or well known.',
        example: 'The issue of environmental sustainability has risen to prominence in recent years.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The quality of projecting outward or being physically noticeable.',
        example: 'The geological prominence of the mountain makes it a landmark for hikers.',
        cefr_level: 'C2',
        grammar_note: 'noun [C or U]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [U]',
    example: 'The issue of environmental sustainability has risen to prominence in recent years.',
    extra_examples: [
      'He came to prominence during the civil rights movement of the 1960s.',
      'Media coverage gave national prominence to the local strike.'
    ],
    word_family: {
      verb: [],
      noun: ['prominence', 'prominency'],
      adjective: ['prominent'],
      adverb: ['prominently']
    },
    semantic_field_id: 'status-visibility',
    semantic_field_label: 'Status & Visibility',
    semantic_field_words: [
      { word: 'preeminence', cefr: 'C2', register: 'formal' },
      { word: 'notoriety', cefr: 'C1', register: 'neutral' },
      { word: 'prestige', cefr: 'C1', register: 'neutral' },
      { word: 'fame', cefr: 'A2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'distinction', register: 'formal', cefr: 'C1' },
      { word: 'importance', register: 'neutral', cefr: 'B1' },
      { word: 'visibility', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'significant prominence', example: 'There has been a significant prominence observed in recent statistics.' },
      { collocation: 'underlying prominence', example: 'We must identify the underlying prominence of this phenomenon.' }
    ],
  },
  {
    word: 'leftism',
    entry_type: 'word',
    ipa_uk: '/ˈleft.ɪ.zəm/',
    ipa_us: '/ˈleft.ɪ.zəm/',
    definition: 'The political beliefs and policies of the left, especially those supporting social equality and state involvement in the economy.',
    definitions: [
      {
        definition: 'The political beliefs and policies of the left, especially those supporting social equality and state involvement in the economy.',
        example: 'The party has moved away from traditional leftism towards a more centrist stance.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'Adherence to socialist or progressive political theories.',
        example: 'Academic circles in the mid-20th century were often characterized by a strong current of intellectual leftism.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [U]',
    example: 'The party has moved away from traditional leftism towards a more centrist stance.',
    extra_examples: [
      'Critics argue that modern leftism must adapt to globalized market realities.',
      'Her early essays trace the evolution of democratic leftism in Western Europe.'
    ],
    word_family: {
      verb: [],
      noun: ['leftism', 'leftist', 'left'],
      adjective: ['leftist', 'left'],
      adverb: []
    },
    semantic_field_id: 'politics-ideology',
    semantic_field_label: 'Politics & Ideology',
    semantic_field_words: [
      { word: 'socialism', cefr: 'B2', register: 'neutral' },
      { word: 'liberalism', cefr: 'C1', register: 'neutral' },
      { word: 'progressivism', cefr: 'C2', register: 'formal' },
      { word: 'communism', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'socialism', register: 'neutral', cefr: 'B2' },
      { word: 'progressivism', register: 'formal', cefr: 'C2' },
      { word: 'left-wing politics', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'Law & Policy',
    collocations: [
      { collocation: 'significant leftism', example: 'There has been a significant leftism observed in recent statistics.' },
      { collocation: 'underlying leftism', example: 'We must identify the underlying leftism of this phenomenon.' }
    ],
  },
  {
    word: 'upbeat',
    entry_type: 'word',
    ipa_uk: '/ʌpˈbiːt/',
    ipa_us: '/ˈʌp.biːt/',
    definition: 'Full of hope, happiness, and good feelings.',
    definitions: [
      {
        definition: 'Full of hope, happiness, and good feelings.',
        example: 'The government gave an upbeat assessment of the economic situation, predicting steady growth.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Characterized by a cheerful or positive tone.',
        example: 'Despite the setbacks, the campaign concluded on an upbeat note.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    grammar_note: 'adjective',
    example: 'The government gave an upbeat assessment of the economic situation, predicting steady growth.',
    extra_examples: [
      'Live music and upbeat rhythms kept the crowd energized throughout the festival.',
      'We try to maintain an upbeat atmosphere in the office to encourage productivity.'
    ],
    word_family: {
      verb: [],
      noun: ['upbeat'],
      adjective: ['upbeat'],
      adverb: []
    },
    semantic_field_id: 'emotion-positivity',
    semantic_field_label: 'Emotion & Positivity',
    semantic_field_words: [
      { word: 'optimistic', cefr: 'B2', register: 'neutral' },
      { word: 'cheerful', cefr: 'B1', register: 'neutral' },
      { word: 'sanguine', cefr: 'C2', register: 'formal' },
      { word: 'buoyant', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'optimistic', register: 'neutral', cefr: 'B2' },
      { word: 'sanguine', register: 'formal', cefr: 'C2' },
      { word: 'cheerful', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly upbeat', example: 'This approach is highly upbeat for achieving academic success.' },
      { collocation: 'particularly upbeat', example: 'The case study was particularly upbeat to our research question.' }
    ],
  },
  {
    word: 'optimistic',
    entry_type: 'word',
    ipa_uk: '/ˌɒp.tɪˈmɪs.tɪk/',
    ipa_us: '/ˌɑːp.təˈmɪs.tɪk/',
    definition: 'Hoping or believing that good things will happen in the future.',
    definitions: [
      {
        definition: 'Hoping or believing that good things will happen in the future.',
        example: 'She is optimistic about her chances of winning a scholarship to study abroad.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Showing hope and confidence about the success of something.',
        example: 'The department released an optimistic forecast of revenue trends for the next quarter.',
        cefr_level: 'B2',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'B2',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    grammar_note: 'adjective',
    example: 'She is optimistic about her chances of winning a scholarship to study abroad.',
    extra_examples: [
      'Despite the current environmental crisis, many ecologists remain optimistic about long-term recovery efforts.',
      'An optimistic outlook is often associated with better physical and mental health outcomes.'
    ],
    word_family: {
      verb: [],
      noun: ['optimism', 'optimist'],
      adjective: ['optimistic'],
      adverb: ['optimistically']
    },
    semantic_field_id: 'emotion-positivity',
    semantic_field_label: 'Emotion & Positivity',
    semantic_field_words: [
      { word: 'upbeat', cefr: 'C1', register: 'neutral' },
      { word: 'sanguine', cefr: 'C2', register: 'formal' },
      { word: 'hopeful', cefr: 'B1', register: 'neutral' },
      { word: 'confident', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'hopeful', register: 'neutral', cefr: 'B1' },
      { word: 'upbeat', register: 'neutral', cefr: 'C1' },
      { word: 'sanguine', register: 'formal', cefr: 'C2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly optimistic', example: 'This approach is highly optimistic for achieving academic success.' },
      { collocation: 'particularly optimistic', example: 'The case study was particularly optimistic to our research question.' }
    ],
  },
  {
    word: 'territorial',
    entry_type: 'word',
    ipa_uk: '/ˌter.ɪˈtɔː.ri.əl/',
    ipa_us: '/ˌter.əˈtɔːr.i.əl/',
    definition: 'Relating to the ownership of an area of land or sea.',
    definitions: [
      {
        definition: 'Relating to the ownership of an area of land or sea.',
        example: 'The two countries have been engaged in a long-standing territorial dispute over the border islands.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      },
      {
        definition: 'Guarding and defending an area of land that is believed to belong to oneself.',
        example: 'Male songbirds are highly territorial during the breeding season, defending their nesting areas.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'The two countries have been engaged in a long-standing territorial dispute over the border islands.',
    extra_examples: [
      'We must respect the territorial integrity of all sovereign states under international law.',
      'Some cats can display aggressive, territorial behaviors when a new pet is introduced to the household.'
    ],
    word_family: {
      verb: [],
      noun: ['territory', 'territoriality'],
      adjective: ['territorial'],
      adverb: ['territorially']
    },
    semantic_field_id: 'geography-ownership',
    semantic_field_label: 'Geography & Ownership',
    semantic_field_words: [
      { word: 'sovereign', cefr: 'C1', register: 'formal' },
      { word: 'jurisdiction', cefr: 'C2', register: 'formal' },
      { word: 'provincial', cefr: 'C1', register: 'neutral' },
      { word: 'boundary', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'regional', register: 'neutral', cefr: 'B2' },
      { word: 'sovereign', register: 'formal', cefr: 'C1' },
      { word: 'provincial', register: 'neutral', cefr: 'C1' }
    ],
    suggested_folder_name: 'Law & Policy',
    collocations: [
      { collocation: 'highly territorial', example: 'This approach is highly territorial for achieving academic success.' },
      { collocation: 'particularly territorial', example: 'The case study was particularly territorial to our research question.' }
    ],
  },
  {
    word: 'inference',
    entry_type: 'word',
    ipa_uk: '/ˈɪn.fər.əns/',
    ipa_us: '/ˈɪn.fɚ.əns/',
    definition: 'A guess or opinion that you form based on the information that you already have.',
    definitions: [
      {
        definition: 'A guess or opinion that you form based on the information that you already have.',
        example: 'The researcher drew the inference that the increase in global temperatures was directly linked to industrial emissions.',
        cefr_level: 'C2',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'The process of reaching a decision or answer by using facts or logic.',
        example: 'By a process of elimination and logical inference, we can deduce the correct solution.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    grammar_note: 'noun [C or U]',
    example: 'The researcher drew the inference that the increase in global temperatures was directly linked to industrial emissions.',
    extra_examples: [
      'It is a reasonable inference that the economy will recover once trade restrictions are lifted.',
      'Statistical inference allows researchers to make generalizations about a population based on sample data.'
    ],
    word_family: {
      verb: ['infer'],
      noun: ['inference'],
      adjective: ['inferential'],
      adverb: ['inferentially']
    },
    semantic_field_id: 'logic-reasoning',
    semantic_field_label: 'Logic & Reasoning',
    semantic_field_words: [
      { word: 'deduction', cefr: 'C1', register: 'formal' },
      { word: 'assumption', cefr: 'B2', register: 'neutral' },
      { word: 'hypothesis', cefr: 'C1', register: 'academic' },
      { word: 'conjecture', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'deduction', register: 'formal', cefr: 'C1' },
      { word: 'conclusion', register: 'neutral', cefr: 'B2' },
      { word: 'conjecture', register: 'formal', cefr: 'C2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'significant inference', example: 'There has been a significant inference observed in recent statistics.' },
      { collocation: 'underlying inference', example: 'We must identify the underlying inference of this phenomenon.' }
    ],
  },
  {
    word: 'repulsive',
    entry_type: 'word',
    ipa_uk: '/rɪˈpʌl.sɪv/',
    ipa_us: '/rɪˈpʌl.sɪv/',
    definition: 'Extremely unpleasant or unacceptable; causing disgust.',
    definitions: [
      {
        definition: 'Extremely unpleasant or unacceptable; causing disgust.',
        example: 'The sight of the industrial waste dumping site was utterly repulsive to the local residents.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      },
      {
        definition: 'Tending to push away or keep apart (in physics).',
        example: 'Subatomic particles with the same charge experience a repulsive force, pushing them away from each other.',
        cefr_level: 'C2',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'adjective',
    example: 'The sight of the industrial waste dumping site was utterly repulsive to the local residents.',
    extra_examples: [
      'He found the politician\'s arrogant behavior and remarks deeply repulsive.',
      'Magnets can exhibit both attractive and repulsive behaviors depending on their orientation.'
    ],
    word_family: {
      verb: ['repel'],
      noun: ['repulsion', 'repulsiveness'],
      adjective: ['repulsive'],
      adverb: ['repulsively']
    },
    semantic_field_id: 'emotion-disgust',
    semantic_field_label: 'Emotion & Disgust',
    semantic_field_words: [
      { word: 'loathsome', cefr: 'C2', register: 'formal' },
      { word: 'disturbing', cefr: 'B2', register: 'neutral' },
      { word: 'abhorrent', cefr: 'C2', register: 'formal' },
      { word: 'detestable', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'abhorrent', register: 'formal', cefr: 'C2' },
      { word: 'loathsome', register: 'formal', cefr: 'C2' },
      { word: 'disgusting', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'highly repulsive', example: 'This approach is highly repulsive for achieving academic success.' },
      { collocation: 'particularly repulsive', example: 'The case study was particularly repulsive to our research question.' }
    ],
  },
  {
    word: 'play out',
    entry_type: 'phrasal_verb',
    ipa_uk: '/pleɪ aʊt/',
    ipa_us: '/pleɪ aʊt/',
    definition: 'When a situation plays out, it happens and develops.',
    definitions: [
      {
        definition: 'When a situation plays out, it happens and develops.',
        example: 'We will have to see how the geopolitical situation plays out before making any investment decisions.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb [intransitive]'
      },
      {
        definition: 'To develop or end in a particular way.',
        example: 'The drama played out in full view of the public, causing widespread controversy.',
        cefr_level: 'C1',
        grammar_note: 'phrasal verb [intransitive]'
      }
    ],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'phrasal verb [intransitive]',
    example: 'We will have to see how the geopolitical situation plays out before making any investment decisions.',
    extra_examples: [
      'It will be interesting to watch how this political rivalry plays out in the upcoming elections.',
      'No one could have predicted how the trade talks would play out.'
    ],
    word_family: {
      verb: ['play out'],
      noun: [],
      adjective: ['played-out'],
      adverb: []
    },
    semantic_field_id: 'event-development',
    semantic_field_label: 'Event Development',
    semantic_field_words: [
      { word: 'unfold', cefr: 'C1', register: 'neutral' },
      { word: 'transpire', cefr: 'C2', register: 'formal' },
      { word: 'develop', cefr: 'A2', register: 'neutral' },
      { word: 'materialize', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'unfold', register: 'neutral', cefr: 'C1' },
      { word: 'transpire', register: 'formal', cefr: 'C2' },
      { word: 'happen', register: 'neutral', cefr: 'A1' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms',
    collocations: [
      { collocation: 'attempt to play out', example: 'We must attempt to play out the project issues.' },
      { collocation: 'carefully play out', example: 'You should carefully play out the instructions before starting.' }
    ],
  },
  {
    word: 'elasticity',
    entry_type: 'word',
    ipa_uk: '/ˌi.læsˈtɪs.ə.ti/',
    ipa_us: '/ˌi.læsˈtɪs.ə.t̬i/',
    definition: 'The ability of an object or material to return to its normal shape after being stretched or compressed.',
    definitions: [
      {
        definition: 'The ability of an object or material to return to its normal shape after being stretched or compressed.',
        example: 'As people age, their skin loses its natural elasticity and starts to sag.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The ability of something to change and adapt; responsiveness of demand or supply to price changes.',
        example: 'In economics, price elasticity of demand measures how quantity demanded responds to price fluctuations.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [U]',
    example: 'As people age, their skin loses its natural elasticity and starts to sag.',
    extra_examples: [
      'Rubber bands are known for their exceptional elasticity and strength.',
      'The policy possesses a degree of elasticity, allowing for local modifications based on community feedback.'
    ],
    word_family: {
      verb: [],
      noun: ['elasticity', 'elastomer'],
      adjective: ['elastic', 'elastomeric'],
      adverb: ['elastically']
    },
    semantic_field_id: 'material-property',
    semantic_field_label: 'Material Property',
    semantic_field_words: [
      { word: 'rigidity', cefr: 'C1', register: 'formal' },
      { word: 'durability', cefr: 'B2', register: 'neutral' },
      { word: 'adaptability', cefr: 'C1', register: 'neutral' },
      { word: 'malleability', cefr: 'C2', register: 'academic' }
    ],
    register_synonyms: [
      { word: 'flexibility', register: 'neutral', cefr: 'B2' },
      { word: 'adaptability', register: 'neutral', cefr: 'C1' },
      { word: 'resilience', register: 'academic', cefr: 'C1' }
    ],
    suggested_folder_name: 'Economics & Statistics',
    collocations: [
      { collocation: 'significant elasticity', example: 'There has been a significant elasticity observed in recent statistics.' },
      { collocation: 'underlying elasticity', example: 'We must identify the underlying elasticity of this phenomenon.' }
    ],
  },
  {
    word: 'predispose',
    entry_type: 'word',
    ipa_uk: '/ˌpriː.dɪˈspəʊz/',
    ipa_us: '/ˌpriː.dɪˈspoʊz/',
    definition: 'To make someone more likely to behave in a particular way or to suffer from a particular illness or condition.',
    definitions: [
      {
        definition: 'To influence someone in a particular direction or make them likely to behave in a certain way.',
        example: 'His family background predisposed him to support the liberal party.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      },
      {
        definition: 'To make someone susceptible to a disease or condition.',
        example: 'A genetic mutation can predispose individuals to certain types of cancer.',
        cefr_level: 'C2',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'Individual genetics may predispose some people to more severe symptoms.',
    extra_examples: [
      'Lack of exercise may predispose patients to joint stiffness and cardiovascular issues.',
      'Certain environmental factors can predispose children to developing allergies later in life.'
    ],
    word_family: { verb: ['predispose'], noun: ['predisposition'], adjective: ['predisposed'], adverb: [] },
    semantic_field_id: 'influence-causation',
    semantic_field_label: 'Influence & Causation',
    semantic_field_words: [
      { word: 'influence', cefr: 'B2', register: 'neutral' },
      { word: 'incline', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'incline', register: 'formal', cefr: 'C1' },
      { word: 'bias', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'predispose someone to', example: 'A family history of heart disease can predispose someone to cardiac issues.' },
      { collocation: 'genetically predispose', example: 'Certain mutations genetically predispose individuals to specific conditions.' }
    ],
  },
  {
    word: 'outlook',
    entry_type: 'word',
    ipa_uk: '/ˈaʊt.lʊk/',
    ipa_us: '/ˈaʊt.lʊk/',
    definition: "A person's way of thinking and their general attitude to life, or the likely future situation.",
    definitions: [
      {
        definition: 'A general attitude or perspective towards life or a situation.',
        example: 'She has a very optimistic outlook on life.',
        cefr_level: 'C1',
        grammar_note: 'noun [C usually singular]'
      },
      {
        definition: 'The prospects or future probability of a situation (economic, weather, etc.).',
        example: "The outlook for the country's manufacturing sector is quite gloomy.",
        cefr_level: 'C1',
        grammar_note: 'noun [C usually singular]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [C usually singular]',
    example: 'The economic outlook for the next quarter remains positive despite inflation.',
    extra_examples: [
      "Travel broaden's a person's cultural outlook and helps reduce prejudice.",
      'Global financial institutions have downgraded their economic growth outlook for the region.'
    ],
    word_family: { verb: [], noun: ['outlook'], adjective: [], adverb: [] },
    semantic_field_id: 'perspective-forecast',
    semantic_field_label: 'Perspective & Forecast',
    semantic_field_words: [
      { word: 'perspective', cefr: 'B2', register: 'neutral' },
      { word: 'forecast', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'perspective', register: 'neutral', cefr: 'B2' },
      { word: 'prospect', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'Economics & Statistics',
    collocations: [
      { collocation: 'optimistic outlook', example: 'Despite the setbacks, he maintained an optimistic outlook on his career.' },
      { collocation: 'economic outlook', example: 'The country\'s economic outlook has improved due to increased exports.' }
    ],
  },
  {
    word: 'assertion',
    entry_type: 'word',
    ipa_uk: '/əˈsɜː.ʃən/',
    ipa_us: '/əˈsɝː.ʃən/',
    definition: 'A statement that you strongly believe is true.',
    definitions: [
      {
        definition: 'A statement saying that you strongly believe something is true.',
        example: "I don't think that assertion can be supported by facts.",
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      },
      {
        definition: 'The act of asserting something.',
        example: 'The assertion of national rights led to diplomatic tensions.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [C or U]',
    example: "The author's assertion that technology isolates people is open to debate.",
    extra_examples: [
      'We have statistical data that easily refutes their assertions.',
      'Self-assertion is important for personal boundaries and mental health.'
    ],
    word_family: { verb: ['assert'], noun: ['assertion', 'assertiveness'], adjective: ['assertive'], adverb: ['assertively'] },
    semantic_field_id: 'communication-argument',
    semantic_field_label: 'Communication & Argument',
    semantic_field_words: [
      { word: 'statement', cefr: 'B1', register: 'neutral' },
      { word: 'claim', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'statement', register: 'neutral', cefr: 'B1' },
      { word: 'claim', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'Academic Writing (Task 2)',
    collocations: [
      { collocation: 'make an assertion', example: 'The scientist made an assertion that the new compound is completely non-toxic.' },
      { collocation: 'support an assertion', example: 'The researcher gathered substantial statistical data to support his assertion.' }
    ],
  },
  {
    id: 'entry-stringent-rules',
    entry_type: 'word',
    word: 'impose stringent rules',
    ipa_uk: '/ɪmˈpəʊz ˈstrɪn.dʒənt ruːlz/',
    ipa_us: '/ɪmˈpoʊz ˈstrɪn.dʒənt ruːlz/',
    definition: 'to introduce or enforce very strict, precise, and rigorous regulations that must be obeyed',
    definition_source: 'cambridge',
    example: 'Governments must impose stringent rules on industrial waste disposal to prevent ecological damage.',
    definitions: [
      {
        definition: 'to introduce or enforce very strict, precise, and rigorous regulations that must be obeyed',
        example: 'Governments must impose stringent rules on industrial waste disposal to prevent ecological damage.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'The academic committee decided to impose stringent rules regarding academic integrity and plagiarism.',
      'Many corporations are forced to impose stringent rules on safety to satisfy insurance guidelines.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['impose'],
      noun: ['imposition', 'stringency'],
      adjective: ['stringent'],
      adverb: ['stringently']
    },
    collocations: [
      { collocation: 'impose stringent regulations', example: 'Local authorities impose stringent regulations on building heights.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'impose stringent rules', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'strict rules', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-enforce-compliance',
    entry_type: 'word',
    word: 'enforce compliance',
    ipa_uk: '/ɪnˈfɔːs kəmˈplaɪ.əns/',
    ipa_us: '/ɪnˈfɔːrs kəmˈplaɪ.əns/',
    definition: 'to compel obedience or adherence to a specific law, rule, standard, or agreement',
    definition_source: 'cambridge',
    example: 'School administrations should enforce compliance with code of conduct policies to create a harmonious learning environment.',
    definitions: [
      {
        definition: 'to compel obedience or adherence to a specific law, rule, standard, or agreement',
        example: 'School administrations should enforce compliance with code of conduct policies to create a harmonious learning environment.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Regulators struggle to enforce compliance when companies operate across multiple national borders.',
      'The security team was hired specifically to enforce compliance with safety codes during the construction.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['enforce', 'comply'],
      noun: ['enforcement', 'compliance'],
      adjective: ['enforceable', 'compliant'],
      adverb: []
    },
    collocations: [
      { collocation: 'enforce compliance with regulations', example: 'Inspector duties are to enforce compliance with building regulations.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'enforce compliance', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'make people obey', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-restrict-autonomy',
    entry_type: 'word',
    word: 'restrict individual autonomy',
    ipa_uk: '/rɪˈstrɪkt ˌɪn.dɪˈvɪdʒ.u.əl ɔːˈtɒn.ə.mi/',
    ipa_us: '/rɪˈstrɪkt ˌɪn.dəˈvɪdʒ.u.əl ɑːˈtɑː.nə.mi/',
    definition: 'to limit a person\'s freedom or independence to make their own choices and act self-governingly',
    definition_source: 'cambridge',
    example: 'Opponents argue that locking teenagers into rigid schedules during school hours restricts individual autonomy.',
    definitions: [
      {
        definition: 'to limit a person\'s freedom or independence to make their own choices and act self-governingly',
        example: 'Opponents argue that locking teenagers into rigid schedules during school hours restricts individual autonomy.',
        cefr_level: 'C2',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Stringent guidelines can sometimes restrict individual autonomy of teachers in the classroom.',
      'Does monitoring employee emails restrict individual autonomy to an unethical degree?'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 5,
    connotation: 'negative',
    word_family: {
      verb: ['restrict'],
      noun: ['restriction', 'autonomy'],
      adjective: ['restrictive', 'autonomous'],
      adverb: ['autonomously']
    },
    collocations: [
      { collocation: 'severely restrict autonomy', example: 'The parental controls severely restrict autonomy of children online.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'restrict individual autonomy', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'limit freedom', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-conform-norms',
    entry_type: 'word',
    word: 'conform to societal norms',
    ipa_uk: '/kənˈfɔːm tuː səˈsaɪ.ə.təl nɔːmz/',
    ipa_us: '/kənˈfɔːrm tuː səˈsaɪ.ə.t̬əl nɔːrmz/',
    definition: 'to behave, think, or dress in a way that is expected and accepted by society',
    definition_source: 'cambridge',
    example: 'Adhering to community rules helps youngsters learn how to conform to societal norms.',
    definitions: [
      {
        definition: 'to behave, think, or dress in a way that is expected and accepted by society',
        example: 'Adhering to community rules helps youngsters learn how to conform to societal norms.',
        cefr_level: 'C2',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Pressure to conform to societal norms often intensifies during adolescence.',
      'Historically, creative artists have refused to conform to societal norms of their era.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C2',
    register: 'formal',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['conform'],
      noun: ['conformity', 'norm'],
      adjective: ['conformist', 'societal'],
      adverb: []
    },
    collocations: [
      { collocation: 'pressure to conform', example: 'Peer pressure can create intense pressure to conform.' }
    ],
    semantic_field_id: 'rules-discipline',
    semantic_field_label: 'Rules & Discipline',
    semantic_field_words: [
      { word: 'conform to societal norms', cefr: 'C2', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'follow society', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 rules/discipline topic.'
  },
  {
    id: 'entry-tertiary-education',
    entry_type: 'word',
    word: 'tertiary education',
    ipa_uk: '/ˈtɜː.ʃər.i ˌed.jʊˈkeɪ.ʃən/',
    ipa_us: '/ˈtɝː.ʃi.er.i ˌed.jəˈkeɪ.ʃən/',
    definition: 'education at university, college, or other post-secondary institutions',
    definition_source: 'cambridge',
    example: 'Access to tertiary education should be subsidized by the state to promote meritocracy.',
    definitions: [
      {
        definition: 'education at university, college, or other post-secondary institutions',
        example: 'Access to tertiary education should be subsidized by the state to promote meritocracy.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'In many developed countries, more than half of high school graduates proceed to tertiary education.',
      'The cost of tertiary education has risen dramatically over the last three decades.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['educate'],
      noun: ['education', 'educator'],
      adjective: ['tertiary', 'educational'],
      adverb: []
    },
    collocations: [
      { collocation: 'pursue tertiary education', example: 'More students are choosing to pursue tertiary education abroad.' },
      { collocation: 'funding for tertiary education', example: 'The government announced increased funding for tertiary education.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'tertiary education', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'higher education', register: 'neutral', cefr: 'B2' },
      { word: 'university education', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-cultivate-critical-thinking',
    entry_type: 'word',
    word: 'cultivate critical thinking',
    ipa_uk: '/ˈkʌl.tɪ.veɪt ˈkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/',
    ipa_us: '/ˈkʌl.tə.veɪt ˈkrɪt̬.ɪ.kəl ˈθɪŋ.kɪŋ/',
    definition: 'to nurture, develop, and encourage the ability to analyze and evaluate arguments objectively',
    definition_source: 'cambridge',
    example: 'Universities must cultivate critical thinking through collaborative workshops and seminars.',
    definitions: [
      {
        definition: 'to nurture, develop, and encourage the ability to analyze and evaluate arguments objectively',
        example: 'Universities must cultivate critical thinking through collaborative workshops and seminars.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'Modern curriculum design should place emphasis on exercises that cultivate critical thinking.',
      'Reading diverse viewpoints is an excellent way to cultivate critical thinking.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'formal',
    formality_score: 4,
    connotation: 'positive',
    word_family: {
      verb: ['cultivate', 'think'],
      noun: ['cultivation', 'critic', 'thought'],
      adjective: ['critical', 'cultivated'],
      adverb: ['critically']
    },
    collocations: [
      { collocation: 'cultivate critical thinking skills', example: 'Case studies are used to cultivate critical thinking skills.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'cultivate critical thinking', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'teach logical thinking', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-specialized-knowledge',
    entry_type: 'word',
    word: 'specialized knowledge',
    ipa_uk: '/ˈspeʃ.əl.aɪzd ˈnɒl.ɪdʒ/',
    ipa_us: '/ˈspeʃ.əl.aɪzd ˈnɑː.lɪdʒ/',
    definition: 'deep, intensive, and specific knowledge within a particular academic discipline or industry sector',
    definition_source: 'cambridge',
    example: 'A university degree equips graduates with specialized knowledge that is indispensable in fields like surgery.',
    definitions: [
      {
        definition: 'deep, intensive, and specific knowledge within a particular academic discipline or industry sector',
        example: 'A university degree equips graduates with specialized knowledge that is indispensable in fields like surgery.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'To solve complex technical issues, engineers must acquire specialized knowledge.',
      'The role requires specialized knowledge of local environmental legislation.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      verb: ['specialize', 'know'],
      noun: ['specialty', 'specialist', 'knowledge'],
      adjective: ['specialized', 'knowledgeable'],
      adverb: []
    },
    collocations: [
      { collocation: 'acquire specialized knowledge', example: 'Advanced coursework is necessary to acquire specialized knowledge.' },
      { collocation: 'highly specialized knowledge', example: 'Nuclear physics demands highly specialized knowledge.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'specialized knowledge', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'specific knowledge', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-academic-curriculum',
    entry_type: 'word',
    word: 'academic curriculum',
    ipa_uk: '/ˌæk.əˈdem.ɪk kəˈrɪk.jə.ləm/',
    ipa_us: '/ˌæk.əˈdem.ɪk kəˈrɪk.jə.ləm/',
    definition: 'the subjects and courses that make up a study program at a school, college, or university',
    definition_source: 'cambridge',
    example: 'Universities need to align their academic curriculum with the shifting trends of modern industries.',
    definitions: [
      {
        definition: 'the subjects and courses that make up a study program at a school, college, or university',
        example: 'Universities need to align their academic curriculum with the shifting trends of modern industries.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    extra_examples: [
      'Art and music should be integrated into the core academic curriculum for balanced development.',
      'The academic curriculum was heavily revised to include more computer science courses.'
    ],
    grammar_note: 'noun [C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      noun: ['curriculum', 'curricula', 'academy'],
      adjective: ['academic', 'curricular'],
      adverb: ['academically']
    },
    collocations: [
      { collocation: 'core academic curriculum', example: 'Mathematics remains a part of the core academic curriculum.' },
      { collocation: 'design academic curriculum', example: 'Educators spend months designing academic curriculum.' }
    ],
    semantic_field_id: 'higher-education',
    semantic_field_label: 'Higher Education',
    semantic_field_words: [
      { word: 'academic curriculum', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'syllabus', register: 'neutral', cefr: 'B2' },
      { word: 'study program', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 university topic.'
  },
  {
    id: 'entry-transferable-skills',
    entry_type: 'word',
    word: 'transferable skills',
    ipa_uk: '/trænsˈfɜː.rə.bəl skɪlz/',
    ipa_us: '/trænsˈfɝː.ə.bəl skɪlz/',
    definition: 'skills (such as communication, teamworking, problem-solving) that can be applied across different jobs and careers',
    definition_source: 'cambridge',
    example: 'While technical qualifications are vital, possessing transferable skills ensures career adaptability.',
    definitions: [
      {
        definition: 'skills (such as communication, teamworking, problem-solving) that can be applied across different jobs and careers',
        example: 'While technical qualifications are vital, possessing transferable skills ensures career adaptability.',
        cefr_level: 'C1',
        grammar_note: 'noun [plural]'
      }
    ],
    extra_examples: [
      'Voluntary work is an excellent way for young people to acquire key transferable skills.',
      'Universities are placing greater emphasis on teaching transferable skills to undergraduates.'
    ],
    grammar_note: 'noun [plural]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      verb: ['transfer'],
      noun: ['transfer', 'skill'],
      adjective: ['transferable', 'skilled'],
      adverb: []
    },
    collocations: [
      { collocation: 'valuable transferable skills', example: 'Military experience provides valuable transferable skills to veterans.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'transferable skills', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'soft skills', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-vocational-training',
    entry_type: 'word',
    word: 'vocational training',
    ipa_uk: '/vəʊˈkeɪ.ʃən.əl ˈtreɪ.nɪŋ/',
    ipa_us: '/voʊˈkeɪ.ʃən.əl ˈtreɪ.nɪŋ/',
    definition: 'training that prepares a student directly for a specific occupation, trade, or craft, rather than focusing on broad academic study',
    definition_source: 'cambridge',
    example: 'Investing in vocational training can be a highly effective solution for lowering youth unemployment.',
    definitions: [
      {
        definition: 'training that prepares a student directly for a specific occupation, trade, or craft, rather than focusing on broad academic study',
        example: 'Investing in vocational training can be a highly effective solution for lowering youth unemployment.',
        cefr_level: 'C1',
        grammar_note: 'noun [U]'
      }
    ],
    extra_examples: [
      'The local government established centers for vocational training in plumbing and electrical engineering.',
      'Many young people prefer vocational training over university as it offers a faster path to income.'
    ],
    grammar_note: 'noun [U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'neutral',
    word_family: {
      noun: ['vocation', 'training', 'trainer'],
      adjective: ['vocational'],
      adverb: []
    },
    collocations: [
      { collocation: 'provide vocational training', example: 'Community colleges provide vocational training for local businesses.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'vocational training', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'practical training', register: 'neutral', cefr: 'B1' },
      { word: 'job training', register: 'informal', cefr: 'A2' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-competitive-job-market',
    entry_type: 'word',
    word: 'adapt to a competitive job market',
    ipa_uk: '/əˈdæpt tuː ə kəmˈpet.ɪ.tɪv dʒɒb ˈmɑː.kɪt/',
    ipa_us: '/əˈdæpt tuː ə kəmˈpet̬.ə.t̬ɪv dʒɑːb ˈmɑːr.kɪt/',
    definition: 'to acquire new skills and upgrade one\'s capabilities to find and keep work in a tight, fast-changing labor market',
    definition_source: 'cambridge',
    example: 'Faced with automation, workers must acquire digital skills to adapt to an increasingly competitive job market.',
    definitions: [
      {
        definition: 'to acquire new skills and upgrade one\'s capabilities to find and keep work in a tight, fast-changing labor market',
        example: 'Faced with automation, workers must acquire digital skills to adapt to an increasingly competitive job market.',
        cefr_level: 'C1',
        grammar_note: 'verb phrase'
      }
    ],
    extra_examples: [
      'To adapt to a competitive job market, young professionals must learn to network effectively.',
      'Acquiring advanced degrees is one way graduates attempt to adapt to a competitive job market.'
    ],
    grammar_note: 'verb phrase',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 4,
    connotation: 'neutral',
    word_family: {
      verb: ['adapt', 'compete'],
      noun: ['adaptation', 'competition', 'market'],
      adjective: ['adaptable', 'competitive'],
      adverb: []
    },
    collocations: [
      { collocation: 'survive in a competitive job market', example: 'Soft skills are essential to survive in a competitive job market.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'adapt to a competitive job market', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'find a job', register: 'informal', cefr: 'A1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: 'entry-interpersonal-skills',
    entry_type: 'word',
    word: 'interpersonal skills',
    ipa_uk: '/ˌɪn.təˈpɜː.sən.əl skɪlz/',
    ipa_us: '/ˌɪn.t̬ɚˈpɝː.sən.əl skɪlz/',
    definition: 'the soft skills used by a person to communicate, collaborate, and interact harmoniously and productively with others',
    definition_source: 'cambridge',
    example: 'In collaborative workplaces, strong interpersonal skills are valued just as highly as technical expertise.',
    definitions: [
      {
        definition: 'the soft skills used by a person to communicate, collaborate, and interact harmoniously and productively with others',
        example: 'In collaborative workplaces, strong interpersonal skills are valued just as highly as technical expertise.',
        cefr_level: 'C1',
        grammar_note: 'noun [plural]'
      }
    ],
    extra_examples: [
      'Job interviews are designed to gauge an applicant\'s interpersonal skills and emotional quotient.',
      'Without good interpersonal skills, leading a diverse team can be extremely difficult.'
    ],
    grammar_note: 'noun [plural]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'neutral',
    formality_score: 3,
    connotation: 'positive',
    word_family: {
      noun: ['person', 'skills'],
      adjective: ['interpersonal', 'personal', 'skilled'],
      adverb: ['personally']
    },
    collocations: [
      { collocation: 'excellent interpersonal skills', example: 'The sales team requires excellent interpersonal skills to convert clients.' }
    ],
    semantic_field_id: 'work-skills',
    semantic_field_label: 'Work Skills & Employability',
    semantic_field_words: [
      { word: 'interpersonal skills', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'communication skills', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-4', 'folder-task2-phrases'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Suggested by AI for Writing Task 2 work skills topic.'
  },
  {
    id: "entry-durable",
    entry_type: "word",
    word: "durable",
    ipa_uk: "/ˈdʒʊə.rə.bəl/",
    ipa_us: "/ˈdʊr.ə.bəl/",
    definition: "able to last a long time without becoming damaged or wearing out",
    definition_source: "cambridge",
    example: "The manufacturer uses highly durable materials to ensure the equipment withstands harsh weather conditions.",
    definitions: [
      {
        definition: "able to last a long time without becoming damaged or wearing out",
        example: "The manufacturer uses highly durable materials to ensure the equipment withstands harsh weather conditions.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Economic analysts point out that the demand for durable goods has risen over the past quarter.",
      "A durable peace agreement requires mutual trust and compromises from both sides."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: [],
      noun: ["durability"],
      adjective: ["durable"],
      adverb: ["durably"]
    },
    collocations: [
      { collocation: "durable goods", example: "Household appliances and cars are categorized as durable goods." },
      { collocation: "highly durable", example: "Wood from cedar trees is highly durable even when exposed to moisture." }
    ],
    semantic_field_id: "material-property",
    semantic_field_label: "Material Property",
    semantic_field_words: [
      { word: "resilient", cefr: "C1", register: "academic" },
      { word: "robust", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "long-lasting", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing materials, economic goods, or long-lasting agreements."
  },
  {
    id: "entry-sustainable",
    entry_type: "word",
    word: "sustainable",
    ipa_uk: "/səˈsteɪ.nə.bəl/",
    ipa_us: "/səˈsteɪ.nə.bəl/",
    definition: "able to continue over a period of time, or causing little or no damage to the environment",
    definition_source: "cambridge",
    example: "The government should promote sustainable farming methods to prevent soil degradation.",
    definitions: [
      {
        definition: "able to continue over a period of time, or causing little or no damage to the environment",
        example: "The government should promote sustainable farming methods to prevent soil degradation.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Transitioning to sustainable energy sources like solar and wind is essential for reducing carbon emissions.",
      "The business model is not sustainable in the long run due to high operating costs."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: ["sustain"],
      noun: ["sustainability", "sustenance"],
      adjective: ["sustainable"],
      adverb: ["sustainably"]
    },
    collocations: [
      { collocation: "sustainable development", example: "UN sustainable development goals target clean water and sanitation." },
      { collocation: "sustainable growth", example: "The company aims for sustainable growth without over-leveraging assets." }
    ],
    semantic_field_id: "ecology-environment",
    semantic_field_label: "Ecology & Environment",
    semantic_field_words: [
      { word: "renewable", cefr: "B2", register: "neutral" },
      { word: "eco-friendly", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "viable", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-3", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing ecology, environmental policies, or long-term financial viability."
  },
  {
    id: "entry-concrete",
    entry_type: "word",
    word: "concrete",
    ipa_uk: "/ˈkɒŋ.kriːt/",
    ipa_us: "/ˈkɑːn.kriːt/",
    definition: "a very hard building material made of cement, sand, water, and gravel, or clear and certain rather than general",
    definition_source: "cambridge",
    example: "The foundations of the apartment block are made of reinforced concrete.",
    definitions: [
      {
        definition: "a very hard building material made of cement, sand, water, and gravel",
        example: "The foundations of the apartment block are made of reinforced concrete.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      },
      {
        definition: "clear and certain, or based on real things and facts rather than ideas",
        example: "We need concrete evidence before we can make an official accusation.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The architect decided to leave the raw concrete walls exposed for a modern, industrial look.",
      "Can you give me a concrete example of how this software will improve efficiency?"
    ],
    grammar_note: "noun [U] / adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["concrete"],
      adjective: ["concrete"],
      adverb: ["concretely"]
    },
    collocations: [
      { collocation: "concrete evidence", example: "Without concrete evidence, the prosecutor had to drop the case." },
      { collocation: "reinforced concrete", example: "Reinforced concrete was a major technological breakthrough for civil engineering." }
    ],
    semantic_field_id: "materials-construction",
    semantic_field_label: "Materials & Construction",
    semantic_field_words: [
      { word: "cement", cefr: "B2", register: "neutral" },
      { word: "factual", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "tangible", register: "academic", cefr: "C1" },
      { word: "cement", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-6"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing construction components, modern architecture, or logical reasoning."
  },
  {
    id: "entry-breakwater",
    entry_type: "word",
    word: "breakwater",
    ipa_uk: "/ˈbreɪkˌwɔː.tər/",
    ipa_us: "/ˈbreɪkˌwɑː.t̬ɚ/",
    definition: "a strong wall or barrier built out into the sea to protect a harbor or beach from the force of waves",
    definition_source: "cambridge",
    example: "The port authorities constructed a stone breakwater to safeguard docked vessels from high tides.",
    definitions: [
      {
        definition: "a strong wall or barrier built out into the sea to protect a harbor or beach from the force of waves",
        example: "The port authorities constructed a stone breakwater to safeguard docked vessels from high tides.",
        cefr_level: "C2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Stretching out into the bay, the concrete breakwater also served as a popular walkway for tourists.",
      "Engineers are reinforcing the old breakwater to counter severe coastal erosion."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "technical",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["breakwater"],
      adjective: [],
      adverb: []
    },
    collocations: [
      { collocation: "construct a breakwater", example: "It is expensive to construct a breakwater in deep offshore areas." },
      { collocation: "coastal breakwater", example: "Coastal breakwaters modify wave patterns and protect shorelines." }
    ],
    semantic_field_id: "coastal-engineering",
    semantic_field_label: "Coastal Engineering",
    semantic_field_words: [
      { word: "jetty", cefr: "C2", register: "technical" },
      { word: "barrier", cefr: "B2", register: "neutral" },
      { word: "sea wall", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "groyne", register: "technical", cefr: "C2" }
    ],
    folder_ids: ["folder-6"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "IELTS Writing Task 1 - describing maps, coastal developments, or structural processes."
  },
  {
    id: "entry-binding",
    entry_type: "word",
    word: "binding",
    ipa_uk: "/ˈbaɪn.dɪŋ/",
    ipa_us: "/ˈbaɪn.dɪŋ/",
    definition: "especially of an agreement, that cannot be legally avoided, ignored, or broken",
    definition_source: "cambridge",
    example: "The treaty signed by both nations is a legally binding contract under international law.",
    definitions: [
      {
        definition: "especially of an agreement, that cannot be legally avoided, ignored, or broken",
        example: "The treaty signed by both nations is a legally binding contract under international law.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The arbitrator's decision is final and binding on all parties involved in the dispute.",
      "The glue acts as a binding agent to hold the wood particles together securely."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["bind"],
      noun: ["binder", "binding"],
      adjective: ["binding"],
      adverb: []
    },
    collocations: [
      { collocation: "legally binding", example: "Always read the terms and conditions before signing a legally binding document." },
      { collocation: "binding agreement", example: "The oral agreement did not constitute a binding agreement in the eyes of the court." }
    ],
    semantic_field_id: "law-contracts",
    semantic_field_label: "Law & Contracts",
    semantic_field_words: [
      { word: "obligatory", cefr: "C1", register: "formal" },
      { word: "compulsory", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "mandatory", register: "formal", cefr: "C1" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing agreements, laws, administrative rules, or physical cohesion."
  },
  {
    id: "entry-composition",
    entry_type: "word",
    word: "composition",
    ipa_uk: "/ˌkɒm.pəˈzɪʃ.ən/",
    ipa_us: "/ˌkɑːm.pəˈzɪʃ.ən/",
    definition: "the parts, elements, or mix of ingredients that make up a whole system or substance",
    definition_source: "cambridge",
    example: "Scientists analyzed the chemical composition of the lunar soil samples.",
    definitions: [
      {
        definition: "the parts, elements, or mix of ingredients that make up a whole system or substance",
        example: "Scientists analyzed the chemical composition of the lunar soil samples.",
        cefr_level: "C1",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "a piece of writing, music, or art",
        example: "The student was asked to write a short musical composition for the class.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The shifting demographic composition of the workforce presents new challenges for managers.",
      "The painter paid close attention to the composition and lighting of the landscape."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["compose"],
      noun: ["composition", "composer"],
      adjective: ["composite"],
      adverb: []
    },
    collocations: [
      { collocation: "chemical composition", example: "The chemical composition of water consists of two parts hydrogen to one part oxygen." },
      { collocation: "composition of the board", example: "Changes in the composition of the board reflect the new corporate strategy." }
    ],
    semantic_field_id: "structure-makeup",
    semantic_field_label: "Structure & Makeup",
    semantic_field_words: [
      { word: "constitution", cefr: "C2", register: "formal" },
      { word: "make-up", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "makeup", register: "neutral", cefr: "B2" },
      { word: "structure", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-science"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing materials, scientific structures, essays, or artistic layouts."
  },
  {
    id: "entry-punctual",
    entry_type: "word",
    word: "punctual",
    ipa_uk: "/ˈpʌŋk.tʃu.əl/",
    ipa_us: "/ˈpʌŋk.tʃu.əl/",
    definition: "arriving, doing something, or happening at the expected, correct time; not late",
    definition_source: "cambridge",
    example: "The airline has a reputation for being punctual, with 95% of flights arriving on time.",
    definitions: [
      {
        definition: "arriving, doing something, or happening at the expected, correct time; not late",
        example: "The airline has a reputation for being punctual, with 95% of flights arriving on time.",
        cefr_level: "B1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "In some cultures, it is considered highly impolite not to be punctual for social events.",
      "The punctual payment of taxes is a civic duty enforced by the revenue authorities."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B1",
    register: "neutral",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      noun: ["punctuality"],
      adjective: ["punctual"],
      adverb: ["punctually"]
    },
    collocations: [
      { collocation: "remain punctual", example: "Despite heavy traffic, the delivery driver managed to remain punctual." },
      { collocation: "punctual service", example: "Customers appreciate the punctual service provided by the local courier." }
    ],
    semantic_field_id: "time-discipline",
    semantic_field_label: "Time & Discipline",
    semantic_field_words: [
      { word: "prompt", cefr: "B2", register: "neutral" },
      { word: "timely", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "on-time", register: "informal", cefr: "A2" }
    ],
    folder_ids: ["folder-4", "folder-speaking-work-study"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing work habits, transportation schedules, or daily routines."
  },
  {
    id: "entry-livestock",
    entry_type: "word",
    word: "livestock",
    ipa_uk: "/ˈlaɪv.stɒk/",
    ipa_us: "/ˈlaɪv.stɑːk/",
    definition: "animals and birds kept on a farm for use or profit, such as cattle, sheep, or pigs",
    definition_source: "cambridge",
    example: "Drought and heatwaves have severely affected the health of local livestock.",
    definitions: [
      {
        definition: "animals and birds kept on a farm for use or profit, such as cattle, sheep, or pigs",
        example: "Drought and heatwaves have severely affected the health of local livestock.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Livestock farming accounts for a significant portion of agricultural greenhouse gas emissions.",
      "The farmers moved their livestock to higher ground during the flash floods."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["livestock", "stock"]
    },
    collocations: [
      { collocation: "raise livestock", example: "Nomadic communities raise livestock for milk, meat, and wool." },
      { collocation: "livestock sector", example: "The livestock sector is a major driver of the rural economy." }
    ],
    semantic_field_id: "agriculture-farming",
    semantic_field_label: "Agriculture & Farming",
    semantic_field_words: [
      { word: "cattle", cefr: "B2", register: "neutral" },
      { word: "agriculture", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "farm animals", register: "informal", cefr: "A2" }
    ],
    folder_ids: ["folder-2", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing agricultural economics, food production, or ecology."
  },
  {
    id: "entry-tractor",
    entry_type: "word",
    word: "tractor",
    ipa_uk: "/ˈtræk.tər/",
    ipa_us: "/ˈtræk.tɚ/",
    definition: "a powerful motor vehicle with large back wheels, used for pulling agricultural machinery on a farm",
    definition_source: "cambridge",
    example: "The farmer used the tractor to pull the plow through the muddy fields.",
    definitions: [
      {
        definition: "a powerful motor vehicle with large back wheels, used for pulling agricultural machinery on a farm",
        example: "The farmer used the tractor to pull the plow through the muddy fields.",
        cefr_level: "B1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Modern tractors are equipped with GPS systems to automate planting and sowing.",
      "A long line of tractors blocked the highway during the agricultural strike."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B1",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["tractor", "traction"]
    },
    collocations: [
      { collocation: "drive a tractor", example: "Children growing up on farms often learn to drive a tractor at a young age." },
      { collocation: "farm tractor", example: "The dealer sells various models of farm tractors and harvesting equipment." }
    ],
    semantic_field_id: "agriculture-machinery",
    semantic_field_label: "Agriculture & Machinery",
    semantic_field_words: [
      { word: "machinery", cefr: "B2", register: "neutral" },
      { word: "harvester", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "farm vehicle", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-2", "folder-6"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing farming technology, maps/diagrams of farm environments, or trade machinery."
  },
  {
    id: "entry-impassive",
    entry_type: "word",
    word: "impassive",
    ipa_uk: "/ɪmˈpæs.ɪv/",
    ipa_us: "/ɪmˈpæs.ɪv/",
    definition: "expressing no emotion, or completely flat and featureless",
    definition_source: "cambridge",
    example: "Beneath the flat, impassive surface of Australia lie hidden mountains and valleys.",
    definitions: [
      {
        definition: "expressing no emotion, or completely flat and featureless",
        example: "Beneath the flat, impassive surface of Australia lie hidden mountains and valleys.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The defendant remained impassive throughout the trial, showing no signs of remorse.",
      "An impassive stone facade hid the busy activity inside the monastery."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["impassivity"],
      adjective: ["impassive"],
      adverb: ["impassively"]
    },
    collocations: [
      { collocation: "impassive face", example: "He kept an impassive face to avoid revealing his hand in the game." },
      { collocation: "impassive surface", example: "The impassive surface of the lake reflected the stormy gray clouds." }
    ],
    semantic_field_id: "expression-emotion",
    semantic_field_label: "Expression & Emotion",
    semantic_field_words: [
      { word: "expressionless", cefr: "B2", register: "neutral" },
      { word: "stolid", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "emotionless", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - describing the calm Australian terrain."
  },
  {
    id: "entry-stealthily",
    entry_type: "word",
    word: "stealthily",
    ipa_uk: "/ˈstel.θəl.i/",
    ipa_us: "/ˈstel.θəl.i/",
    definition: "in a quiet, secret, or cautious manner to avoid being noticed",
    definition_source: "cambridge",
    example: "The disease spreads stealthily through the population, often showing no initial symptoms.",
    definitions: [
      {
        definition: "in a quiet, secret, or cautious manner to avoid being noticed",
        example: "The disease spreads stealthily through the population, often showing no initial symptoms.",
        cefr_level: "C2",
        grammar_note: "adverb"
      }
    ],
    extra_examples: [
      "Deadly salt is stealthily killing much of the agricultural landscape in the basin.",
      "The predator crawled stealthily through the tall grass toward its prey."
    ],
    grammar_note: "adverb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: [],
      noun: ["stealth"],
      adjective: ["stealthy"],
      adverb: ["stealthily"]
    },
    collocations: [
      { collocation: "move stealthily", example: "The military unit managed to move stealthily behind enemy lines." },
      { collocation: "spread stealthily", example: "Mold can spread stealthily inside walls before becoming visible." }
    ],
    semantic_field_id: "movement-secrecy",
    semantic_field_label: "Movement & Secrecy",
    semantic_field_words: [
      { word: "secretly", cefr: "B1", register: "neutral" },
      { word: "surreptitiously", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "secretly", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - describing the quiet destruction by salt."
  },
  {
    id: "entry-pinpoint",
    entry_type: "word",
    word: "pinpoint",
    ipa_uk: "/ˈpɪn.pɔɪnt/",
    ipa_us: "/ˈpɪn.pɔɪnt/",
    definition: "to locate or identify the exact position, fact, or cause of something",
    definition_source: "cambridge",
    example: "Geologists are using new electromagnetic tools to pinpoint the presence of salt subterranean reservoirs.",
    definitions: [
      {
        definition: "to locate or identify the exact position, fact, or cause of something",
        example: "Geologists are using new electromagnetic tools to pinpoint the presence of salt subterranean reservoirs.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "It is difficult to pinpoint the precise moment when the relationship began to deteriorate.",
      "The technician was able to pinpoint the software bug within a few minutes."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["pinpoint"],
      noun: ["pinpoint"],
      adjective: ["pinpoint"]
    },
    collocations: [
      { collocation: "pinpoint the cause", example: "Medical researchers struggle to pinpoint the cause of the disease." },
      { collocation: "pinpoint the location", example: "GPS signals help rescue teams pinpoint the location of lost hikers." }
    ],
    semantic_field_id: "discovery-precision",
    semantic_field_label: "Discovery & Precision",
    semantic_field_words: [
      { word: "identify", cefr: "B2", register: "neutral" },
      { word: "locate", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "identify", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - prospecting for subterranean salt."
  },
  {
    id: "entry-render",
    entry_type: "word",
    word: "render",
    ipa_uk: "/ˈren.dər/",
    ipa_us: "/ˈren.dər/",
    definition: "to cause someone or something to be in a particular state or condition",
    definition_source: "cambridge",
    example: "The heavy storm rendered the local roads completely impassable.",
    definitions: [
      {
        definition: "to cause someone or something to be in a particular state or condition",
        example: "The heavy storm rendered the local roads completely impassable.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "to give, provide, or present something (e.g. render assistance)",
        example: "The organization is ready to render aid to the earthquake victims.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Without clear plans, the tree-planting efforts may be rendered ineffective by underlying salt.",
      "The artist rendered the landscape with exquisite detail and realism."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["render"],
      noun: ["rendering", "rendition"]
    },
    collocations: [
      { collocation: "render ineffective", example: "High temperatures can render certain vaccines ineffective." },
      { collocation: "render assistance", example: "Passersby stopped to render assistance to the stranded motorist." }
    ],
    semantic_field_id: "causation-change",
    semantic_field_label: "Causation & Change",
    semantic_field_words: [
      { word: "make", cefr: "A1", register: "neutral" },
      { word: "transform", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "make", register: "neutral", cefr: "A1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - tree-planting rendered ineffective."
  },
  {
    id: "entry-ensuing",
    entry_type: "word",
    word: "ensuing",
    ipa_uk: "/ɪnˈsjuː.ɪŋ/",
    ipa_us: "/ɪnˈsjuː.ɪŋ/",
    definition: "happening after or following something else as a direct result",
    definition_source: "cambridge",
    example: "Over the ensuing decades, the small salty patches consumed hectares of arable land.",
    definitions: [
      {
        definition: "happening after or following something else as a direct result",
        example: "Over the ensuing decades, the small salty patches consumed hectares of arable land.",
        cefr_level: "C1",
        grammar_note: "adjective [always before noun]"
      }
    ],
    extra_examples: [
      "In the ensuing panic, several people were injured as they tried to exit the building.",
      "The agreement led to stability and growth during the ensuing years."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["ensue"],
      adjective: ["ensuing"]
    },
    collocations: [
      { collocation: "ensuing decades", example: "Technological changes over the ensuing decades reshaped society." },
      { collocation: "ensuing battle", example: "The ensuing battle resulted in massive losses for both armies." }
    ],
    semantic_field_id: "time-sequence",
    semantic_field_label: "Time & Sequence",
    semantic_field_words: [
      { word: "subsequent", cefr: "B2", register: "academic" },
      { word: "following", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "following", register: "neutral", cefr: "B1" },
      { word: "subsequent", register: "academic", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - patches multiplying over the ensuing decades."
  },
  {
    id: "entry-encroach",
    entry_type: "word",
    word: "encroach",
    ipa_uk: "/ɪnˈkrəʊtʃ/",
    ipa_us: "/ɪnˈkroʊtʃ/",
    definition: "to gradually intrude, advance beyond proper limits, or cover more land",
    definition_source: "cambridge",
    example: "The rising sea levels continue to encroach upon low-lying coastal villages.",
    definitions: [
      {
        definition: "to gradually cover more and more of an area of land",
        example: "The desert continues to encroach on once-fertile grazing lands.",
        cefr_level: "C2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "to slowly take away someone's rights, time, or freedom",
        example: "Employees feel that work tasks are beginning to encroach on their personal lives.",
        cefr_level: "C2",
        grammar_note: "intransitive verb"
      }
    ],
    extra_examples: [
      "Despite mounting containment efforts, the white salt crusts continued to encroach.",
      "The city has laws preventing industrial projects from encroaching on natural reserves."
    ],
    grammar_note: "intransitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["encroach"],
      noun: ["encroachment"]
    },
    collocations: [
      { collocation: "encroach upon", example: "We must not allow commercial activities to encroach upon protected parks." },
      { collocation: "gradually encroach", example: "Urban sprawl is gradually encroaching on the surrounding agricultural belt." }
    ],
    semantic_field_id: "intrusive-movement",
    semantic_field_label: "Intrusive Movement",
    semantic_field_words: [
      { word: "intrude", cefr: "C1", register: "formal" },
      { word: "trespass", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "intrude", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-1"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - 'white death' encroaching on farmland."
  },
  {
    id: "entry-eclipse",
    entry_type: "word",
    word: "eclipse",
    ipa_uk: "/ɪˈklɪps/",
    ipa_us: "/ɪˈklɪps/",
    definition: "to make another thing seem less important, significant, or successful by comparison",
    definition_source: "cambridge",
    example: "The young athlete's performance eclipsed the accomplishments of all previous champions.",
    definitions: [
      {
        definition: "to make another thing seem less important, significant, or successful by comparison",
        example: "The young athlete's performance eclipsed the accomplishments of all previous champions.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "an occasion when the sun or moon temporarily disappears from view",
        example: "Thousands of skywatchers gathered to watch the total solar eclipse.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Small local successes in halting salinity were eclipsed by massive fresh outbreaks.",
      "The company's profits this year have completely eclipsed last year's figures."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["eclipse"],
      noun: ["eclipse"]
    },
    collocations: [
      { collocation: "totally eclipse", example: "The new technology will totally eclipse current standard models." },
      { collocation: "be eclipsed by", example: "The actor's screen presence was eclipsed by his co-star's vibrant performance." }
    ],
    semantic_field_id: "dominance-importance",
    semantic_field_label: "Dominance & Importance",
    semantic_field_words: [
      { word: "overshadow", cefr: "C1", register: "academic" },
      { word: "outshine", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "overshadow", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - successes eclipsed by larger defeats."
  },
  {
    id: "entry-intercept",
    entry_type: "word",
    word: "intercept",
    ipa_uk: "/ˌɪn.təˈsept/",
    ipa_us: "/ˌɪn.t̬ɚˈsept/",
    definition: "to stop, catch, or block something before it reaches its destination",
    definition_source: "cambridge",
    example: "Police officers managed to intercept the shipment of illegal goods at the harbor.",
    definitions: [
      {
        definition: "to stop, catch, or block something before it reaches its destination",
        example: "Police officers managed to intercept the shipment of illegal goods at the harbor.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The unexpected outbreaks of salt were difficult for farmers to intercept.",
      "Defense systems were deployed to intercept incoming missiles."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["intercept"],
      noun: ["interception", "interceptor"]
    },
    collocations: [
      { collocation: "intercept a message", example: "Intelligence agencies managed to intercept a coded message." },
      { collocation: "intercept communication", example: "The hacker attempted to intercept communication between the servers." }
    ],
    semantic_field_id: "prevention-blocking",
    semantic_field_label: "Prevention & Blocking",
    semantic_field_words: [
      { word: "block", cefr: "B1", register: "neutral" },
      { word: "obstruct", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "block", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - salt beating plans to intercept it."
  },
  {
    id: "entry-subterranean",
    entry_type: "word",
    word: "subterranean",
    ipa_uk: "/ˌsʌb.təˈreɪ.ni.ən/",
    ipa_us: "/ˌsʌb.təˈreɪ.ni.ən/",
    definition: "existing, occurring, or active under the surface of the earth",
    definition_source: "cambridge",
    example: "The geologists explored a vast network of subterranean caverns and tunnels.",
    definitions: [
      {
        definition: "existing, occurring, or active under the surface of the earth",
        example: "The geologists explored a vast network of subterranean caverns and tunnels.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Only recently have scientists started to map the secret subterranean passages of salt.",
      "The subterranean temperature remains relatively constant throughout the year."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      noun: ["terrain"],
      adjective: ["subterranean"]
    },
    collocations: [
      { collocation: "subterranean passages", example: "Water flows through subterranean passages to form natural springs." },
      { collocation: "subterranean activity", example: "Seismometers are used to monitor subterranean activity near the volcano." }
    ],
    semantic_field_id: "earth-geology",
    semantic_field_label: "Earth & Geology",
    semantic_field_words: [
      { word: "underground", cefr: "B1", register: "neutral" },
      { word: "geological", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "underground", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - secret subterranean stores and passages."
  },
  {
    id: "entry-delineate",
    entry_type: "word",
    word: "delineate",
    ipa_uk: "/dɪˈlɪn.i.eɪt/",
    ipa_us: "/dɪˈlɪn.i.eɪt/",
    definition: "to describe, portray, or outline the boundary of something precisely",
    definition_source: "cambridge",
    example: "The contract clearly delineates the roles and responsibilities of each partner.",
    definitions: [
      {
        definition: "to describe, portray, or outline the boundary of something precisely",
        example: "The contract clearly delineates the roles and responsibilities of each partner.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Radiometric analysis allows scientists to delineate landforms and track salt movement.",
      "The map delineates the boundary between the public park and private estate."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["delineate"],
      noun: ["delineation"]
    },
    collocations: [
      { collocation: "clearly delineate", example: "We must clearly delineate the scope of the project before writing the report." },
      { collocation: "delineate boundaries", example: "Referees are responsible for delineating boundaries of play during the match." }
    ],
    semantic_field_id: "description-accuracy",
    semantic_field_label: "Description & Accuracy",
    semantic_field_words: [
      { word: "outline", cefr: "B2", register: "neutral" },
      { word: "define", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "outline", register: "neutral", cefr: "B2" },
      { word: "define", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - delineation of subterranean landforms."
  },
  {
    id: "entry-curb",
    entry_type: "word",
    word: "curb",
    ipa_uk: "/kɜːb/",
    ipa_us: "/kɝːb/",
    definition: "to control, limit, or restrain an unwanted force or action",
    definition_source: "cambridge",
    example: "The central bank raised interest rates in an effort to curb rising inflation.",
    definitions: [
      {
        definition: "to control, limit, or restrain an unwanted force or action",
        example: "The central bank raised interest rates in an effort to curb rising inflation.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "a raised edge along the side of a street next to the sidewalk",
        example: "He parked his car close to the curb to avoid blocking traffic.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Environmental groups are modeling various ways of containing or curbing the salinity menace.",
      "We must take decisive steps to curb carbon emissions before irreversible changes occur."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["curb"],
      noun: ["curb"]
    },
    collocations: [
      { collocation: "curb inflation", example: "Tightening fiscal policy is one way to curb inflation." },
      { collocation: "curb spending", example: "The council announced measures to curb excessive public spending." }
    ],
    semantic_field_id: "prevention-control",
    semantic_field_label: "Prevention & Control",
    semantic_field_words: [
      { word: "limit", cefr: "B1", register: "neutral" },
      { word: "restrain", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "restrain", register: "formal", cefr: "C1" },
      { word: "limit", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - curbing the salt menace."
  },
  {
    id: "entry-menace",
    entry_type: "word",
    word: "menace",
    ipa_uk: "/ˈmen.ɪs/",
    ipa_us: "/ˈmen.ɪs/",
    definition: "a threat or danger; something that is likely to cause harm",
    definition_source: "cambridge",
    example: "The build-up of plastic waste in the ocean represents a serious environmental menace.",
    definitions: [
      {
        definition: "a threat or danger; something that is likely to cause harm",
        example: "The build-up of plastic waste in the ocean represents a serious environmental menace.",
        cefr_level: "C1",
        grammar_note: "noun [C usually singular]"
      },
      {
        definition: "to threaten or put someone or something in danger",
        example: "The island communities are menaced by rising sea levels.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Farmers are working together on the ground to combat the menace of soil salinity.",
      "Stray dogs roaming the neighborhood became a public menace."
    ],
    grammar_note: "noun / transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "neutral",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["menace"],
      noun: ["menace"],
      adjective: ["menacing"],
      adverb: ["menacingly"]
    },
    collocations: [
      { collocation: "environmental menace", example: "Desertification is a growing environmental menace in arid regions." },
      { collocation: "pose a menace", example: "Drunk drivers pose a deadly menace to pedestrian safety." }
    ],
    semantic_field_id: "danger-threat",
    semantic_field_label: "Danger & Threat",
    semantic_field_words: [
      { word: "threat", cefr: "B2", register: "neutral" },
      { word: "hazard", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "threat", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - curbing the salt menace."
  },
  {
    id: "entry-salinity",
    entry_type: "word",
    word: "salinity",
    ipa_uk: "/səˈlɪn.ə.ti/",
    ipa_us: "/səˈlɪn.ə.t̬i/",
    definition: "the fact of containing salt, or the amount of salt contained in something",
    definition_source: "cambridge",
    example: "The salinity of the water must be carefully monitored in the fish hatchery.",
    definitions: [
      {
        definition: "the fact of containing salt, or the amount of salt contained in something",
        example: "The salinity of the water must be carefully monitored in the fish hatchery.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Broadacre salinity has sterilized millions of hectares of agricultural land.",
      "The Dead Sea is famous for its exceptionally high levels of salinity."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "scientific",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["salinity", "salt"],
      adjective: ["saline", "salty"]
    },
    collocations: [
      { collocation: "soil salinity", example: "Soil salinity prevents crops from absorbing essential nutrients." },
      { collocation: "high salinity", example: "Many marine organisms cannot survive in waters with extremely high salinity." }
    ],
    semantic_field_id: "chemical-property",
    semantic_field_label: "Chemical Property",
    semantic_field_words: [
      { word: "acidity", cefr: "C1", register: "academic" },
      { word: "alkalinity", cefr: "C2", register: "scientific" }
    ],
    register_synonyms: [
      { word: "saltiness", register: "informal", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - title subject describing salt contents."
  },
  {
    id: "entry-broadacre",
    entry_type: "word",
    word: "broadacre",
    ipa_uk: "/ˈbrɔːdˌeɪ.kər/",
    ipa_us: "/ˈbrɑːdˌeɪ.kɚ/",
    definition: "relating to large-scale agricultural production of crops on wide areas of land",
    definition_source: "cambridge",
    example: "The plains of Western Australia are dominated by broadacre farming of wheat and barley.",
    definitions: [
      {
        definition: "relating to large-scale agricultural production of crops on wide areas of land",
        example: "The plains of Western Australia are dominated by broadacre farming of wheat and barley.",
        cefr_level: "C2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "We do not yet have satisfactory economic solutions for broadacre salinity.",
      "The transition to broadacre cropping required investment in heavy machinery."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "technical",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["acre", "acreage"]
    },
    collocations: [
      { collocation: "broadacre farming", example: "Broadacre farming relies on massive harvesters to cover thousands of hectares." },
      { collocation: "broadacre cropping", example: "Canola and legumes are commonly grown in broadacre cropping systems." }
    ],
    semantic_field_id: "agriculture-farming",
    semantic_field_label: "Agriculture & Farming",
    semantic_field_words: [
      { word: "pastoral", cefr: "C1", register: "academic" },
      { word: "arable", cefr: "C2", register: "technical" }
    ],
    register_synonyms: [
      { word: "large-scale farming", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-2"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - discussing broadacre salinity."
  },
  {
    id: "entry-mounting",
    entry_type: "word",
    word: "mounting",
    ipa_uk: "/ˈmaʊn.tɪŋ/",
    ipa_us: "/ˈmaʊn.t̬ɪŋ/",
    definition: "gradually increasing in amount, force, or intensity",
    definition_source: "cambridge",
    example: "The government faces mounting pressure to address the cost-of-living crisis.",
    definitions: [
      {
        definition: "gradually increasing in amount, force, or intensity",
        example: "The government faces mounting pressure to address the cost-of-living crisis.",
        cefr_level: "C1",
        grammar_note: "adjective [always before noun]"
      }
    ],
    extra_examples: [
      "Despite a mounting effort by scientists and farmers, the salinity problem continued to spread.",
      "There is mounting evidence that climate change is intensifying weather patterns."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["mount"],
      noun: ["mount"]
    },
    collocations: [
      { collocation: "mounting pressure", example: "The CEO resigned amidst mounting pressure from shareholders." },
      { collocation: "mounting concern", example: "There is mounting concern over safety standards at the site." }
    ],
    semantic_field_id: "growth-intensity",
    semantic_field_label: "Growth & Intensity",
    semantic_field_words: [
      { word: "growing", cefr: "B1", register: "neutral" },
      { word: "escalating", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "growing", register: "neutral", cefr: "B1" },
      { word: "escalating", register: "formal", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - mounting effort by scientists and governments."
  },
  {
    id: "entry-ambush",
    entry_type: "word",
    word: "ambush",
    ipa_uk: "/ˈæm.bʊʃ/",
    ipa_us: "/ˈæm.bʊʃ/",
    definition: "a sudden surprise attack from a hidden position, or to attack in this way",
    definition_source: "cambridge",
    example: "The enemy forces were caught in a deadly ambush along the narrow forest pass.",
    definitions: [
      {
        definition: "a sudden surprise attack from a hidden position",
        example: "The enemy forces were caught in a deadly ambush along the narrow forest pass.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "to attack someone or something by surprise from a hidden position",
        example: "Reporters tried to ambush the politician as he left his office.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Part of the problem lies in salt's ability to mount ambushes, emerging somewhere new unexpectedly.",
      "The wolves hid in the bushes, waiting to ambush the deer."
    ],
    grammar_note: "noun / transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["ambush"],
      noun: ["ambush"]
    },
    collocations: [
      { collocation: "mount an ambush", example: "Guerrilla units are trained to mount sudden ambushes." },
      { collocation: "fear of ambush", example: "The soldiers marched cautiously through the canyon in fear of ambush." }
    ],
    semantic_field_id: "surprise-attack",
    semantic_field_label: "Surprise & Attack",
    semantic_field_words: [
      { word: "attack", cefr: "B1", register: "neutral" },
      { word: "trap", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "surprise attack", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - salt's ability to mount ambushes."
  },
  {
    id: "entry-conductivity",
    entry_type: "word",
    word: "conductivity",
    ipa_uk: "/ˌkɒn.dʌkˈtɪv.ə.ti/",
    ipa_us: "/ˌkɑːn.dʌkˈtɪv.ə.t̬i/",
    definition: "the measure of a material's ability to conduct an electric current or heat",
    definition_source: "cambridge",
    example: "Copper is widely used in electrical wiring due to its exceptionally high conductivity.",
    definitions: [
      {
        definition: "the measure of a material's ability to conduct an electric current or heat",
        example: "Copper is widely used in electrical wiring due to its exceptionally high conductivity.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Electromagnetic surveys measure the electrical conductivity of soil to map salt distribution.",
      "The thermal conductivity of wood is low, making it a good insulator."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "scientific",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["conduct"],
      noun: ["conductivity", "conductor", "conductance"],
      adjective: ["conductive"]
    },
    collocations: [
      { collocation: "electrical conductivity", example: "Water with high salt levels has higher electrical conductivity." },
      { collocation: "thermal conductivity", example: "Aluminum offers superior thermal conductivity for cookware." }
    ],
    semantic_field_id: "physics-materials",
    semantic_field_label: "Physics & Materials",
    semantic_field_words: [
      { word: "resistance", cefr: "B2", register: "neutral" },
      { word: "insulation", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "transmission", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-science"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - measuring electrical conductivity of soil."
  },
  {
    id: "entry-drainage",
    entry_type: "word",
    word: "drainage",
    ipa_uk: "/ˈdreɪ.nɪdʒ/",
    ipa_us: "/ˈdreɪ.nɪdʒ/",
    definition: "the system or process of removing water or waste liquids from an area of land or building",
    definition_source: "cambridge",
    example: "The city council invested in improving the storm drainage to prevent winter floods.",
    definitions: [
      {
        definition: "the system or process of removing water or waste liquids from an area of land or building",
        example: "The city council invested in improving the storm drainage to prevent winter floods.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Scientists revealed a network of ancient drainage channels buried meters beneath the soil.",
      "The soil profile has poor drainage, leading to waterlogged crop roots."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["drain"],
      noun: ["drainage", "drain"]
    },
    collocations: [
      { collocation: "drainage channel", example: "Buried drainage channels carry salt and water in different directions underground." },
      { collocation: "poor drainage", example: "Clay soil is characterized by poor drainage and slow water absorption." }
    ],
    semantic_field_id: "water-management",
    semantic_field_label: "Water Management",
    semantic_field_words: [
      { word: "irrigation", cefr: "C1", register: "technical" },
      { word: "sewage", cefr: "C1", register: "technical" }
    ],
    register_synonyms: [
      { word: "outflow", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-6"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Sea Change for Salinity passage - network of ancient drainage channels buried."
  },
  {
    id: "entry-irritable",
    entry_type: "word",
    word: "irritable",
    ipa_uk: "/ˈir.ɪ.tə.bəl/",
    ipa_us: "/ˈir.ə.t̬ə.bəl/",
    definition: "becoming annoyed or angry very easily",
    definition_source: "cambridge",
    example: "The baby became extremely irritable because she was teething and couldn't sleep well.",
    definitions: [
      {
        definition: "becoming annoyed or angry very easily",
        example: "The baby became extremely irritable because she was teething and couldn't sleep well.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Lack of sleep often makes people highly irritable and touchy during the day.",
      "An irritable mood can negatively impact how you communicate with colleagues and family members."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["irritate"],
      noun: ["irritability", "irritation"],
      adjective: ["irritable", "irritating"],
      adverb: ["irritably"]
    },
    collocations: [
      { collocation: "grow irritable", example: "He tends to grow irritable when he is under severe work stress." },
      { collocation: "irritable bowel syndrome", example: "Dietary changes can help manage symptoms of irritable bowel syndrome." }
    ],
    semantic_field_id: "mood-temperament",
    semantic_field_label: "Mood & Temperament",
    semantic_field_words: [
      { word: "touchy", cefr: "C2", register: "neutral" },
      { word: "grumpy", cefr: "B2", register: "informal" }
    ],
    register_synonyms: [
      { word: "bad-tempered", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-4", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing personality, mood patterns, and social relationships."
  },
  {
    id: "entry-imperial",
    entry_type: "word",
    word: "imperial",
    ipa_uk: "/ɪmˈpɪə.ri.əl/",
    ipa_us: "/ɪmˈpɪr.i.əl/",
    definition: "belonging or relating to an empire or the person who rules it",
    definition_source: "cambridge",
    example: "The imperial army was dispatched to secure the borders of the vast empire.",
    definitions: [
      {
        definition: "belonging or relating to an empire or the person who rules it",
        example: "The imperial army was dispatched to secure the borders of the vast empire.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Smuggling of tea and opium severely challenged imperial trade monopolies in the 19th century.",
      "The city still features grand imperial architecture from its days as the capital of the dynasty."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: [],
      noun: ["empire", "imperialism", "emperor"],
      adjective: ["imperial", "imperialistic"],
      adverb: ["imperially"]
    },
    collocations: [
      { collocation: "imperial power", example: "Britain established itself as a dominant imperial power in Asia." },
      { collocation: "imperial decree", example: "The taxation system was completely reformed by imperial decree." }
    ],
    semantic_field_id: "government-power",
    semantic_field_label: "Government & Power",
    semantic_field_words: [
      { word: "royal", cefr: "B1", register: "neutral" },
      { word: "sovereign", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "royal", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing historical political systems, empires, or authoritative decrees."
  },
  {
    id: "entry-smuggling",
    entry_type: "word",
    word: "smuggling",
    ipa_uk: "/ˈsmʌɡ.lɪŋ/",
    ipa_us: "/ˈsmʌɡ.lɪŋ/",
    definition: "the act of importing or exporting goods illegally, especially without paying customs duties",
    definition_source: "cambridge",
    example: "The government introduced strict border controls to curb the smuggling of contraband goods.",
    definitions: [
      {
        definition: "the act of importing or exporting goods illegally, especially without paying customs duties",
        example: "The government introduced strict border controls to curb the smuggling of contraband goods.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "High import tariffs often stimulate smuggling networks as criminals attempt to avoid taxes.",
      "Maritime patrols were reinforced to combat illegal smuggling along the coastline."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "legal",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["smuggle"],
      noun: ["smuggling", "smuggler"]
    },
    collocations: [
      { collocation: "combat smuggling", example: "International agencies cooperate to combat smuggling across borders." },
      { collocation: "contraband smuggling", example: "Contraband smuggling remains a highly lucrative black-market activity." }
    ],
    semantic_field_id: "crime-law",
    semantic_field_label: "Crime & Law",
    semantic_field_words: [
      { word: "trafficking", cefr: "C1", register: "legal" },
      { word: "illicit", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "illegal trade", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-1", "folder-2"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing black markets, legal restrictions, or historical trade disputes."
  },
  {
    id: "entry-adulteration",
    entry_type: "word",
    word: "adulteration",
    ipa_uk: "/əˌdʌl.təˈreɪ.ʃən/",
    ipa_us: "/əˌdʌl.t̬əˈreɪ.ʃən/",
    definition: "the act of making food, drink, or other chemical substances poorer in quality by adding another substance",
    definition_source: "cambridge",
    example: "The public health department launched an investigation into the suspected adulteration of milk supplies.",
    definitions: [
      {
        definition: "the act of making food, drink, or other chemical substances poorer in quality by adding another substance",
        example: "The public health department launched an investigation into the suspected adulteration of milk supplies.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Strict food safety legislation was introduced to protect consumers from product adulteration.",
      "The chemical analysis revealed the adulteration of the olive oil with cheaper seed oils."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "scientific",
    formality_score: 5,
    connotation: "negative",
    word_family: {
      verb: ["adulterate"],
      noun: ["adulteration", "adulterant"],
      adjective: ["adulterated"]
    },
    collocations: [
      { collocation: "food adulteration", example: "Food adulteration is a serious offense that can lead to severe fines." },
      { collocation: "detect adulteration", example: "Laboratory tests are necessary to detect adulteration in high-value products." }
    ],
    semantic_field_id: "contamination-quality",
    semantic_field_label: "Contamination & Quality",
    semantic_field_words: [
      { word: "contamination", cefr: "B2", register: "neutral" },
      { word: "dilution", cefr: "C1", register: "scientific" }
    ],
    register_synonyms: [
      { word: "contamination", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-1", "folder-science"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing food safety, chemical quality control, or trade regulations."
  },
  {
    id: "entry-monopoly",
    entry_type: "word",
    word: "monopoly",
    ipa_uk: "/məˈnɒp.əl.i/",
    ipa_us: "/məˈnɑː.pəl.i/",
    definition: "complete control of the supply of particular goods or services in a market",
    definition_source: "cambridge",
    example: "The tech giant has established a near-complete monopoly over mobile operating systems.",
    definitions: [
      {
        definition: "complete control of the supply of particular goods or services in a market",
        example: "The tech giant has established a near-complete monopoly over mobile operating systems.",
        cefr_level: "C1",
        grammar_note: "noun [C usually singular]"
      }
    ],
    extra_examples: [
      "Anti-trust laws are designed to prevent corporations from establishing monopolies that limit competition.",
      "The state holds a monopoly on the supply of water and electricity."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "economics",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["monopolize"],
      noun: ["monopoly", "monopolist"],
      adjective: ["monopolistic"]
    },
    collocations: [
      { collocation: "establish a monopoly", example: "The company aims to establish a monopoly by buying out its competitors." },
      { collocation: "break up a monopoly", example: "The government intervened to break up the steel monopoly." }
    ],
    semantic_field_id: "market-structure",
    semantic_field_label: "Market Structure",
    semantic_field_words: [
      { word: "duopoly", cefr: "C2", register: "economics" },
      { word: "oligopoly", cefr: "C2", register: "economics" }
    ],
    register_synonyms: [
      { word: "exclusive control", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing market competition, trade regulations, or economic history."
  },
  {
    id: "entry-punitive",
    entry_type: "word",
    word: "punitive",
    ipa_uk: "/ˈpjuː.nɪ.tɪv/",
    ipa_us: "/ˈpjuː.n̬ɪ.t̬ɪv/",
    definition: "intended as a punishment, or (of taxes/duties) extremely high and difficult to pay",
    definition_source: "cambridge",
    example: "The court imposed punitive damages on the company to deter future safety violations.",
    definitions: [
      {
        definition: "intended as a punishment",
        example: "The court imposed punitive damages on the company to deter future safety violations.",
        cefr_level: "C1",
        grammar_note: "adjective"
      },
      {
        definition: "(of taxes, duties, or charges) extremely high and difficult to pay",
        example: "The government introduced punitive tariffs on imported goods to protect domestic industries.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The prisoners were subjected to punitive measures after the failed escape attempt.",
      "Punitive tax rates on high earners can sometimes discourage investment."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["punish"],
      noun: ["punishment"],
      adjective: ["punitive"],
      adverb: ["punitively"]
    },
    collocations: [
      { collocation: "punitive measures", example: "The administration threatened punitive measures if the strike continued." },
      { collocation: "punitive damages", example: "Jurors awarded millions in punitive damages to the plaintiff." }
    ],
    semantic_field_id: "discipline-law",
    semantic_field_label: "Discipline & Law",
    semantic_field_words: [
      { word: "penal", cefr: "C2", register: "legal" },
      { word: "disciplinary", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "disciplinary", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-1", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing legal penalties, high taxes, or international sanctions."
  },
  {
    id: "entry-stimulate",
    entry_type: "word",
    word: "stimulate",
    ipa_uk: "/ˈsɪm.jʊ.leɪt/",
    ipa_us: "/ˈsɪm.jə.leɪt/",
    definition: "to encourage something to grow, develop, or become more active",
    definition_source: "cambridge",
    example: "Lowering interest rates is a classic monetary policy tool used to stimulate the economy.",
    definitions: [
      {
        definition: "to encourage something to grow, develop, or become more active",
        example: "Lowering interest rates is a classic monetary policy tool used to stimulate the economy.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The tax incentives were introduced specifically to stimulate investment in renewable energy.",
      "The teacher used interactive games to stimulate discussion among the students."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["stimulate"],
      noun: ["stimulation", "stimulus", "stimulant"],
      adjective: ["stimulating"]
    },
    collocations: [
      { collocation: "stimulate growth", example: "Investing in infrastructure can stimulate long-term economic growth." },
      { collocation: "stimulate demand", example: "Ad campaigns are designed to stimulate consumer demand." }
    ],
    semantic_field_id: "encouragement-growth",
    semantic_field_label: "Encouragement & Growth",
    semantic_field_words: [
      { word: "encourage", cefr: "A2", register: "neutral" },
      { word: "galvanize", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "encourage", register: "neutral", cefr: "A2" },
      { word: "boost", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Discussing economic growth policies, scientific activation, or educational motivation."
  },
  {
    id: "entry-infusion",
    entry_type: "word",
    word: "infusion",
    ipa_uk: "/ɪnˈfjuː.ʒən/",
    ipa_us: "/ɪnˈfjuː.ʒən/",
    definition: "the introduction of a new element, quality, or cash resource into something to make it stronger",
    definition_source: "cambridge",
    example: "The struggling airline requires an immediate cash infusion to avoid bankruptcy.",
    definitions: [
      {
        definition: "the introduction of a new element, quality, or cash resource into something to make it stronger",
        example: "The struggling airline requires an immediate cash infusion to avoid bankruptcy.",
        cefr_level: "C2",
        grammar_note: "noun [C or U]"
      },
      {
        definition: "a drink made by leaving tea leaves or herbs in hot water",
        example: "Herbal infusions like chamomile are popular for promoting relaxation.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The company benefited from an infusion of new talent and fresh ideas in its marketing team.",
      "A steady infusion of capital allowed the startup to expand its operations globally."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      verb: ["infuse"],
      noun: ["infusion"]
    },
    collocations: [
      { collocation: "cash infusion", example: "The venture capital firm provided a massive cash infusion to the tech startup." },
      { collocation: "infusion of ideas", example: "The workshop led to a valuable infusion of creative ideas." }
    ],
    semantic_field_id: "introduction-addition",
    semantic_field_label: "Introduction & Addition",
    semantic_field_words: [
      { word: "injection", cefr: "C1", register: "academic" },
      { word: "introduction", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "injection", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-2", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing monetary injections, herb extraction, or introducing new ideas/talent."
  },
  {
    id: "entry-reverence",
    entry_type: "word",
    word: "reverence",
    ipa_uk: "/ˈrev.ər.əns/",
    ipa_us: "/ˈrev.ɚ.əns/",
    definition: "a feeling of deep respect or admiration for someone or something",
    definition_source: "cambridge",
    example: "The visitors stood in silent reverence before the remnants of the ancient temple.",
    definitions: [
      {
        definition: "a feeling of deep respect or admiration for someone or something",
        example: "The visitors stood in silent reverence before the remnants of the ancient temple.",
        cefr_level: "C2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "In many traditional societies, elder members are treated with deep reverence.",
      "The monument was constructed as a symbol of reverence for the fallen heroes."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "positive",
    word_family: {
      verb: ["revere"],
      noun: ["reverence"],
      adjective: ["reverent"],
      adverb: ["reverently"]
    },
    collocations: [
      { collocation: "deep reverence", example: "The disciples showed deep reverence to their spiritual master." },
      { collocation: "show reverence", example: "It is customary to show reverence when visiting sacred sites." }
    ],
    semantic_field_id: "respect-emotion",
    semantic_field_label: "Respect & Emotion",
    semantic_field_words: [
      { word: "respect", cefr: "A2", register: "neutral" },
      { word: "veneration", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "respect", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - standing in reverence before ancient ruins."
  },
  {
    id: "entry-remnant",
    entry_type: "word",
    word: "remnant",
    ipa_uk: "/ˈrem.nənt/",
    ipa_us: "/ˈrem.nənt/",
    definition: "a small piece or amount of something that is left from a larger original",
    definition_source: "cambridge",
    example: "The ruins are the last remnants of a grand civilization that once thrived in the valley.",
    definitions: [
      {
        definition: "a small piece or amount of something that is left from a larger original",
        example: "The ruins are the last remnants of a grand civilization that once thrived in the valley.",
        cefr_level: "C1",
        grammar_note: "noun [C usually plural]"
      }
    ],
    extra_examples: [
      "We found remnants of ancient pottery buried deep in the archaeological site.",
      "Only a tiny remnant of the original forest remains today due to deforestation."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["remnant", "remnants"]
    },
    collocations: [
      { collocation: "last remnants", example: "Scientists analyzed the last remnants of the organic material." },
      { collocation: "remnants of the past", example: "The museum displays various remnants of the past." }
    ],
    semantic_field_id: "remains-leftovers",
    semantic_field_label: "Remains & Leftovers",
    semantic_field_words: [
      { word: "remains", cefr: "B2", register: "neutral" },
      { word: "leftover", cefr: "B1", register: "informal" }
    ],
    register_synonyms: [
      { word: "remains", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - remnants of a world that once thrived."
  },
  {
    id: "entry-grandeur",
    entry_type: "word",
    word: "grandeur",
    ipa_uk: "/ˈɡræn.dʒər/",
    ipa_us: "/ˈɡræn.dʒɚ/",
    definition: "the quality of being very large, special, beautiful, or impressive; magnificence",
    definition_source: "cambridge",
    example: "The grandeur of the ancient royal palace attests to the previous wealth of its builders.",
    definitions: [
      {
        definition: "the quality of being very large, special, beautiful, or impressive; magnificence",
        example: "The grandeur of the ancient royal palace attests to the previous wealth of its builders.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "We were awed by the rugged grandeur of the snow-capped mountain range.",
      "The composer's music possesses a unique dramatic grandeur."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["grandeur", "grandness"],
      adjective: ["grand"],
      adverb: ["grandly"]
    },
    collocations: [
      { collocation: "former grandeur", example: "Efforts are underway to restore the historic building to its former grandeur." },
      { collocation: "sense of grandeur", example: "High ceilings and marble floors gave the hall a sense of grandeur." }
    ],
    semantic_field_id: "magnificence-splendor",
    semantic_field_label: "Magnificence & Splendor",
    semantic_field_words: [
      { word: "magnificence", cefr: "B2", register: "neutral" },
      { word: "splendor", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "magnificence", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - grandeur of these ruins attesting to wealth."
  },
  {
    id: "entry-attest",
    entry_type: "word",
    word: "attest",
    ipa_uk: "/əˈtest/",
    ipa_us: "/əˈtest/",
    definition: "to show or prove that something is true, or to formally declare it to be true",
    definition_source: "cambridge",
    example: "The vast scale of the stone structures attests to the advanced engineering skills of the civilization.",
    definitions: [
      {
        definition: "to show or prove that something is true",
        example: "The vast scale of the stone structures attests to the advanced engineering skills of the civilization.",
        cefr_level: "C2",
        grammar_note: "verb [intransitive/transitive]"
      }
    ],
    extra_examples: [
      "Thousands of satisfied users can attest to the effectiveness of the new software program.",
      "The signed document attests that the transfer of property has been completed legally."
    ],
    grammar_note: "verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["attest"],
      noun: ["attestation"]
    },
    collocations: [
      { collocation: "attest to the fact", example: "Her rapid promotion attests to the fact that she is a highly capable manager." },
      { collocation: "can attest to", example: "As an eyewitness, I can attest to the accuracy of her statement." }
    ],
    semantic_field_id: "evidence-proof",
    semantic_field_label: "Evidence & Proof",
    semantic_field_words: [
      { word: "verify", cefr: "B2", register: "neutral" },
      { word: "corroborate", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "prove", register: "neutral", cefr: "B1" },
      { word: "confirm", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - grandeur attesting to wealth and power."
  },
  {
    id: "entry-painstakingly",
    entry_type: "word",
    word: "painstakingly",
    ipa_uk: "/ˈpeɪnzˌteɪ.kɪŋ.li/",
    ipa_us: "/ˈpeɪnzˌteɪ.kɪŋ.li/",
    definition: "with extremely great care, effort, and thoroughness; meticulously",
    definition_source: "cambridge",
    example: "The ancient text was painstakingly restored by a team of linguistic experts over three years.",
    definitions: [
      {
        definition: "with extremely great care, effort, and thoroughness; meticulously",
        example: "The ancient text was painstakingly restored by a team of linguistic experts over three years.",
        cefr_level: "C2",
        grammar_note: "adverb"
      }
    ],
    extra_examples: [
      "The massive monuments were painstakingly carved out of solid rock by hand.",
      "She painstakingly compiled the list of references for her doctoral thesis."
    ],
    grammar_note: "adverb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["painstakingness"],
      adjective: ["painstaking"],
      adverb: ["painstakingly"]
    },
    collocations: [
      { collocation: "painstakingly detailed", example: "The models are painstakingly detailed and accurate to scale." },
      { collocation: "painstakingly researched", example: "The historical biography was painstakingly researched." }
    ],
    semantic_field_id: "precision-effort",
    semantic_field_label: "Precision & Effort",
    semantic_field_words: [
      { word: "meticulously", cefr: "C2", register: "academic" },
      { word: "carefully", cefr: "A2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "meticulously", register: "academic", cefr: "C2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - structures they had painstakingly constructed."
  },
  {
    id: "entry-substantiate",
    entry_type: "word",
    word: "substantiate",
    ipa_uk: "/səbˈstæn.ʃi.eɪt/",
    ipa_us: "/səbˈstæn.ʃi.eɪt/",
    definition: "to provide evidence to support or prove the truth of a claim or suspicion",
    definition_source: "cambridge",
    example: "The suspect's alibi was substantiated by security camera footage from the bank.",
    definitions: [
      {
        definition: "to provide evidence to support or prove the truth of a claim or suspicion",
        example: "The suspect's alibi was substantiated by security camera footage from the bank.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Archaeological discoveries in recent decades have substantiated the ecocide hypothesis.",
      "You must bring concrete facts to substantiate your allegations during the hearing."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      verb: ["substantiate"],
      noun: ["substantiation"],
      adjective: ["substantial", "unsubstantiated"]
    },
    collocations: [
      { collocation: "substantiate a claim", example: "He offered no evidence to substantiate his claim of patent infringement." },
      { collocation: "substantiate allegations", example: "The audit failed to substantiate allegations of financial misconduct." }
    ],
    semantic_field_id: "evidence-proof",
    semantic_field_label: "Evidence & Proof",
    semantic_field_words: [
      { word: "prove", cefr: "B1", register: "neutral" },
      { word: "confirm", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "back up", register: "informal", cefr: "B2" },
      { word: "corroborate", register: "formal", cefr: "C2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - suspicion of ecocide substantiated by discoveries."
  },
  {
    id: "entry-undermine",
    entry_type: "word",
    word: "undermine",
    ipa_uk: "/ˌʌn.dəˈmaɪn/",
    ipa_us: "/ˌʌn.dɚˈmaɪn/",
    definition: "to make someone or something weaker or less effective, usually gradually",
    definition_source: "cambridge",
    example: "Criticism from senior managers can seriously undermine a young employee's confidence.",
    definitions: [
      {
        definition: "to make someone or something weaker or less effective, usually gradually",
        example: "Criticism from senior managers can seriously undermine a young employee's confidence.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Ancient civilisations often undermined themselves by overexploiting soil and water resources.",
      "The spread of fake news is designed to undermine public trust in democratic institutions."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["undermine"],
      noun: [],
      adjective: ["undermined"]
    },
    collocations: [
      { collocation: "undermine authority", example: "Disobeying direct orders will undermine the captain's authority." },
      { collocation: "undermine efforts", example: "Lack of funding continues to undermine efforts to restore the river." }
    ],
    semantic_field_id: "weakening-damage",
    semantic_field_label: "Weakening & Damage",
    semantic_field_words: [
      { word: "weaken", cefr: "B2", register: "neutral" },
      { word: "subvert", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "weaken", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - past societies undermined themselves."
  },
  {
    id: "entry-depletion",
    entry_type: "word",
    word: "depletion",
    ipa_uk: "/dɪˈpliː.ʃən/",
    ipa_us: "/dɪˈpliː.ʃən/",
    definition: "a reduction in something, especially natural resources or financial assets",
    definition_source: "cambridge",
    example: "The depletion of the ozone layer has led to increased ultraviolet radiation reaching Earth.",
    definitions: [
      {
        definition: "a reduction in something, especially natural resources or financial assets",
        example: "The depletion of the ozone layer has led to increased ultraviolet radiation reaching Earth.",
        cefr_level: "C1",
        grammar_note: "noun [U or singular]"
      }
    ],
    extra_examples: [
      "Industrial scale logging has caused severe soil erosion and forest depletion.",
      "The rapid depletion of fish stocks in the North Sea is a major concern for marine biologists."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      verb: ["deplete"],
      noun: ["depletion"],
      adjective: ["depleted"]
    },
    collocations: [
      { collocation: "resource depletion", example: "Overpopulation is accelerating global resource depletion." },
      { collocation: "ozone depletion", example: "Chlorofluorocarbons were banned to prevent further ozone depletion." }
    ],
    semantic_field_id: "reduction-shortage",
    semantic_field_label: "Reduction & Shortage",
    semantic_field_words: [
      { word: "reduction", cefr: "B2", register: "neutral" },
      { word: "drain", cefr: "C1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "reduction", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - patterns often include resource depletion."
  },
  {
    id: "entry-demise",
    entry_type: "word",
    word: "demise",
    ipa_uk: "/dɪˈmaɪz/",
    ipa_us: "/dɪˈmaɪz/",
    definition: "the end, failure, or death of an institution, system, or person",
    definition_source: "cambridge",
    example: "The rise of online streaming services led to the demise of traditional video rental stores.",
    definitions: [
      {
        definition: "the end, failure, or death of an institution, system, or person",
        example: "The rise of online streaming services led to the demise of traditional video rental stores.",
        cefr_level: "C1",
        grammar_note: "noun [singular]"
      }
    ],
    extra_examples: [
      "The empire's demise was brought about by corruption, civil wars, and economic stagnation.",
      "The sudden demise of the company shocked its employees and shareholders."
    ],
    grammar_note: "noun [singular]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {
      noun: ["demise"]
    },
    collocations: [
      { collocation: "eventual demise", example: "Internal conflicts accelerated the dynasty's eventual demise." },
      { collocation: "lead to the demise", example: "High debt levels can easily lead to the demise of small businesses." }
    ],
    semantic_field_id: "failure-end",
    semantic_field_label: "Failure & End",
    semantic_field_words: [
      { word: "fall", cefr: "A2", register: "neutral" },
      { word: "downfall", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "downfall", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - speaking of a society's birth and eventual demise."
  },
  {
    id: "entry-contingent",
    entry_type: "word",
    word: "contingent",
    ipa_uk: "/kənˈtɪn.dʒənt/",
    ipa_us: "/kənˈtɪn.dʒənt/",
    definition: "depending on something else in the future in order to happen",
    definition_source: "cambridge",
    example: "The outdoor concert is contingent on the weather conditions being favorable.",
    definitions: [
      {
        definition: "depending on something else in the future in order to happen",
        example: "The outdoor concert is contingent on the weather conditions being favorable.",
        cefr_level: "C2",
        grammar_note: "adjective"
      },
      {
        definition: "a group of people representing a country or organization at a meeting or event",
        example: "A large contingent of French athletes marched in the parade.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "The expansion of our operations is contingent upon securing additional funding.",
      "The expression of systemic vulnerabilities is deeply contingent on local environmental conditions."
    ],
    grammar_note: "adjective / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "formal",
    formality_score: 5,
    connotation: "neutral",
    word_family: {
      noun: ["contingency", "contingent"],
      adjective: ["contingent"]
    },
    collocations: [
      { collocation: "contingent on", example: "Our offer of employment is contingent on satisfactory references." },
      { collocation: "contingent plan", example: "They developed a contingent plan in case the primary system failed." }
    ],
    semantic_field_id: "dependence-probability",
    semantic_field_label: "Dependence & Probability",
    semantic_field_words: [
      { word: "dependent", cefr: "B2", register: "neutral" },
      { word: "conditional", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "dependent", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - expression is deeply contingent on local conditions."
  },
  {
    id: "entry-contemplate",
    entry_type: "word",
    word: "contemplate",
    ipa_uk: "/ˈkɒn.təm.pleɪt/",
    ipa_us: "/ˈkɑːn.t̬əm.pleɪt/",
    definition: "to spend time considering a possible future action, or to think about something seriously",
    definition_source: "cambridge",
    example: "The committee is contemplating major reforms to the existing education system.",
    definitions: [
      {
        definition: "to spend time considering a possible future action, or to think about something seriously",
        example: "The committee is contemplating major reforms to the existing education system.",
        cefr_level: "C1",
        grammar_note: "transitive/intransitive verb"
      }
    ],
    extra_examples: [
      "We must carefully contemplate the historical lessons to avoid repeating past failures.",
      "She sat by the window, contemplating the meaning of her recent choices."
    ],
    grammar_note: "verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["contemplate"],
      noun: ["contemplation"],
      adjective: ["contemplative"],
      adverb: ["contemplatively"]
    },
    collocations: [
      { collocation: "contemplate the future", example: "He walked along the beach to contemplate his future." },
      { collocation: "seriously contemplate", example: "The company is seriously contemplating expanding into European markets." }
    ],
    semantic_field_id: "thinking-reflection",
    semantic_field_label: "Thinking & Reflection",
    semantic_field_words: [
      { word: "consider", cefr: "A2", register: "neutral" },
      { word: "ponder", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "consider", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - only if we carefully contemplate its lessons."
  },
  {
    id: "entry-collapse",
    entry_type: "word",
    word: "collapse",
    ipa_uk: "/kəˈlæps/",
    ipa_us: "/kəˈlæps/",
    definition: "a sudden failure of an institution, organization, or system; or to fall down suddenly",
    definition_source: "cambridge",
    example: "The unexpected bankruptcy of the investment bank led to the collapse of the stock market.",
    definitions: [
      {
        definition: "to fall down suddenly because of pressure or lack of support",
        example: "The roof of the ancient warehouse collapsed under the weight of the snow.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "a sudden failure of an institution, organization, or system",
        example: "The economic collapse of the civilization was triggered by severe environmental ecocide.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "He collapsed from heat exhaustion after running the marathon.",
      "The peace talks collapsed after both sides refused to sign the compromise agreement."
    ],
    grammar_note: "verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["collapse"],
      noun: ["collapse"],
      adjective: ["collapsible"]
    },
    collocations: [
      { collocation: "economic collapse", example: "Hyperinflation can cause total economic collapse in a country." },
      { collocation: "sudden collapse", example: "The sudden collapse of the bridge is being investigated by engineers." }
    ],
    semantic_field_id: "failure-ruin",
    semantic_field_label: "Failure & Ruin",
    semantic_field_words: [
      { word: "breakdown", cefr: "B2", register: "neutral" },
      { word: "implode", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "downfall", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - term 'collapse' refers to reduction in complexity."
  },
  {
    id: "entry-awe-inspiring",
    entry_type: "word",
    word: "awe-inspiring",
    ipa_uk: "/ˈɔː.ɪnˌspaɪə.rɪŋ/",
    ipa_us: "/ˈɑː.ɪnˌspaɪr.ɪŋ/",
    definition: "causing you to feel great respect, admiration, or wonder",
    definition_source: "cambridge",
    example: "The Grand Canyon is one of the most awe-inspiring natural wonders in the world.",
    definitions: [
      {
        definition: "causing you to feel great respect, admiration, or wonder",
        example: "The Grand Canyon is one of the most awe-inspiring natural wonders in the world.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The awe-inspiring ruins left behind by these past societies captivate modern travelers.",
      "The spacecraft sent back awe-inspiring images of Saturn's rings."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      noun: ["awe"],
      adjective: ["awesome", "awe-inspiring"]
    },
    collocations: [
      { collocation: "awe-inspiring sight", example: "The solar eclipse was an awe-inspiring sight for thousands." },
      { collocation: "awe-inspiring performance", example: "The orchestra delivered an awe-inspiring performance." }
    ],
    semantic_field_id: "wonder-amazement",
    semantic_field_label: "Wonder & Amazement",
    semantic_field_words: [
      { word: "magnificent", cefr: "B1", register: "neutral" },
      { word: "breathtaking", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "breathtaking", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - awe-inspiring ruins left behind by past societies."
  },
  {
    id: "entry-naive",
    entry_type: "word",
    word: "naive",
    ipa_uk: "/naɪˈiːv/",
    ipa_us: "/naɪˈiːv/",
    definition: "too willing to believe that someone is telling the truth or that life is simple",
    definition_source: "cambridge",
    example: "It would be naive to assume that studying the past will yield straightforward answers for today's issues.",
    definitions: [
      {
        definition: "too willing to believe that someone is telling the truth or that life is simple",
        example: "It would be naive to assume that studying the past will yield straightforward answers for today's issues.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "She was naive to believe that he would keep his promises without a written contract.",
      "His naive enthusiasm for the political campaign was quickly tempered by reality."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      noun: ["naivety"],
      adjective: ["naive"],
      adverb: ["naively"]
    },
    collocations: [
      { collocation: "naive belief", example: "Many held the naive belief that the war would be over by Christmas." },
      { collocation: "somewhat naive", example: "Her explanation of the economic crisis was somewhat naive." }
    ],
    semantic_field_id: "character-simplicity",
    semantic_field_label: "Character & Simplicity",
    semantic_field_words: [
      { word: "credulous", cefr: "C2", register: "formal" },
      { word: "gullible", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "gullible", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - naive to assume past yields straightforward answers."
  },
  {
    id: "entry-remedy",
    entry_type: "word",
    word: "remedy",
    ipa_uk: "/ˈrem.ə.di/",
    ipa_us: "/ˈrem.ə.di/",
    definition: "to solve or correct a problem; or a solution or medicine that cures",
    definition_source: "cambridge",
    example: "The government is trying to remedy the high rate of youth unemployment with new training programs.",
    definitions: [
      {
        definition: "to do something to correct or improve a bad situation",
        example: "The government is trying to remedy the high rate of youth unemployment with new training programs.",
        cefr_level: "C1",
        grammar_note: "transitive verb"
      },
      {
        definition: "a successful way of curing an illness or solving a problem",
        example: "Drinking warm ginger tea is a popular home remedy for colds.",
        cefr_level: "B2",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Modern technology sometimes produces new challenges faster than it can remedy old ones.",
      "The court ordered the company to pay damages to remedy the environmental breach."
    ],
    grammar_note: "transitive verb / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "positive",
    word_family: {
      verb: ["remedy"],
      noun: ["remedy"],
      adjective: ["remedial"]
    },
    collocations: [
      { collocation: "remedy the situation", example: "Immediate action is needed to remedy the situation." },
      { collocation: "effective remedy", example: "There is no simple or effective remedy for the global recession." }
    ],
    semantic_field_id: "solution-cure",
    semantic_field_label: "Solution & Cure",
    semantic_field_words: [
      { word: "cure", cefr: "B1", register: "neutral" },
      { word: "rectify", cefr: "C1", register: "formal" }
    ],
    register_synonyms: [
      { word: "rectify", register: "formal", cefr: "C1" },
      { word: "solve", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - producing challenges faster than it can remedy old ones."
  },
  {
    id: "entry-overstate",
    entry_type: "word",
    word: "overstate",
    ipa_uk: "/ˌəʊ.vəˈsteɪt/",
    ipa_us: "/ˌoʊ.vɚˈsteɪt/",
    definition: "to describe something in a way that makes it seem more important or serious than it really is",
    definition_source: "cambridge",
    example: "It is easy to overstate the impact of social media on teenage behavior.",
    definitions: [
      {
        definition: "to describe something in a way that makes it seem more important or serious than it really is",
        example: "It is easy to overstate the impact of social media on teenage behavior.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "Critics argue that the dangers of the new trade agreement have been greatly overstated.",
      "Are the environmental risks of modern resource depletion overstated or undervalued?"
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["overstate"],
      noun: ["overstatement"],
      adjective: ["overstated"]
    },
    collocations: [
      { collocation: "overstate the importance", example: "We cannot overstate the importance of strict compliance checks." },
      { collocation: "greatly overstate", example: "The media tends to greatly overstate short-term economic fluctuations." }
    ],
    semantic_field_id: "exaggeration",
    semantic_field_label: "Exaggeration & Importance",
    semantic_field_words: [
      { word: "exaggerate", cefr: "B2", register: "neutral" },
      { word: "overemphasize", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "exaggerate", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - debate whether environmental risks are overstated."
  },
  {
    id: "entry-undervalue",
    entry_type: "word",
    word: "undervalue",
    ipa_uk: "/ˌʌn.dəˈvæl.juː/",
    ipa_us: "/ˌʌn.dɚˈvæl.juː/",
    definition: "to think that someone or something is less important or valuable than they really are",
    definition_source: "cambridge",
    example: "Society must not undervalue the contributions of teachers and healthcare workers.",
    definitions: [
      {
        definition: "to think that someone or something is less important or valuable than they really are",
        example: "Society must not undervalue the contributions of teachers and healthcare workers.",
        cefr_level: "B2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The housing market has undervalued these properties due to historical zoning restrictions.",
      "It is vital not to undervalue the risks of human-induced climate change."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["undervalue"],
      noun: ["undervaluation"],
      adjective: ["undervalued"]
    },
    collocations: [
      { collocation: "undervalue contributions", example: "Managers who undervalue contributions from junior staff face high turnover." },
      { collocation: "tend to undervalue", example: "Investors tend to undervalue companies with low initial margins." }
    ],
    semantic_field_id: "estimation-worth",
    semantic_field_label: "Estimation & Worth",
    semantic_field_words: [
      { word: "underestimate", cefr: "B2", register: "neutral" },
      { word: "depreciate", cefr: "C2", register: "economics" }
    ],
    register_synonyms: [
      { word: "underestimate", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - debate whether environmental risks are undervalued."
  },
  {
    id: "entry-hazard",
    entry_type: "word",
    word: "hazard",
    ipa_uk: "/ˈhæz.əd/",
    ipa_us: "/ˈhæz.ɚd/",
    definition: "something that is dangerous and likely to cause damage or tell someone to do something risky",
    definition_source: "cambridge",
    example: "Accumulating toxic chemicals represents a serious environmental hazard to local ecosystems.",
    definitions: [
      {
        definition: "something that is dangerous and likely to cause damage",
        example: "Accumulating toxic chemicals represents a serious environmental hazard to local ecosystems.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Icy roads are a common winter hazard for drivers in northern regions.",
      "Health and safety laws are designed to eliminate workplace hazards."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 3,
    connotation: "negative",
    word_family: {
      verb: ["hazard"],
      noun: ["hazard"],
      adjective: ["hazardous"]
    },
    collocations: [
      { collocation: "environmental hazard", example: "Oil spills pose a major environmental hazard to marine wildlife." },
      { collocation: "health hazard", example: "Asbestos inhalation is a well-documented health hazard." }
    ],
    semantic_field_id: "danger-threat",
    semantic_field_label: "Danger & Threat",
    semantic_field_words: [
      { word: "danger", cefr: "A2", register: "neutral" },
      { word: "threat", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "danger", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - environmental hazards and global threats."
  },
  {
    id: "entry-rigour",
    entry_type: "word",
    word: "rigour",
    ipa_uk: "/ˈrɪɡ.ər/",
    ipa_us: "/ˈrɪɡ.ɚ/",
    definition: "the quality of being detailed, careful, complete, and strict",
    definition_source: "cambridge",
    example: "The research team conducted the field experiments with absolute scientific rigour.",
    definitions: [
      {
        definition: "the quality of being detailed, careful, complete, and strict",
        example: "The research team conducted the field experiments with absolute scientific rigour.",
        cefr_level: "C1",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "Academic programs at the institute are famous for their intellectual rigour.",
      "The contract was checked with legal rigour to avoid future loopholes."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "positive",
    word_family: {
      noun: ["rigour", "rigidity"],
      adjective: ["rigorous"],
      adverb: ["rigorously"]
    },
    collocations: [
      { collocation: "scientific rigour", example: "All articles published in the journal undergo peer review for scientific rigour." },
      { collocation: "academic rigour", example: "We must maintain high academic rigour to protect our school's reputation." }
    ],
    semantic_field_id: "precision-accuracy",
    semantic_field_label: "Precision & Accuracy",
    semantic_field_words: [
      { word: "strictness", cefr: "C1", register: "neutral" },
      { word: "meticulousness", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "precision", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing careful scientific experiments, academic analyses, or strict regulations."
  },
  {
    id: "entry-upend",
    entry_type: "word",
    word: "upend",
    ipa_uk: "/ʌpˈend/",
    ipa_us: "/ʌpˈend/",
    definition: "to turn something upside down, or to completely change a situation or system",
    definition_source: "cambridge",
    example: "The sudden arrival of digital cameras completely upended the film photography industry.",
    definitions: [
      {
        definition: "to turn something upside down, or to completely change a situation or system",
        example: "The sudden arrival of digital cameras completely upended the film photography industry.",
        cefr_level: "C2",
        grammar_note: "transitive verb"
      }
    ],
    extra_examples: [
      "The political crisis threatened to upend the delicate balance of power in the region.",
      "He accidentally upended his coffee cup, spilling liquid all over the documents."
    ],
    grammar_note: "transitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["upend"],
      noun: [],
      adjective: ["upended"]
    },
    collocations: [
      { collocation: "upend the status quo", example: "Startups often seek to upend the status quo in established markets." },
      { collocation: "upend lives", example: "The global pandemic managed to upend the daily lives of billions." }
    ],
    semantic_field_id: "disruption-change",
    semantic_field_label: "Disruption & Change",
    semantic_field_words: [
      { word: "overturn", cefr: "C1", register: "neutral" },
      { word: "subvert", cefr: "C2", register: "formal" }
    ],
    register_synonyms: [
      { word: "overturn", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing severe economic disruptions, major political changes, or turning objects upside down."
  },
  {
    id: "entry-emerge",
    entry_type: "word",
    word: "emerge",
    ipa_uk: "/ɪˈmɜːdʒ/",
    ipa_us: "/ɪˈmɝːdʒ/",
    definition: "to appear by coming out of something, or to become known and prominent",
    definition_source: "cambridge",
    example: "New alternative energy sources will likely emerge as fossil fuels are depleted.",
    definitions: [
      {
        definition: "to appear by coming out of something or out from behind something",
        example: "The sun slowly emerged from behind the dark storm clouds.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      },
      {
        definition: "to become known, or to develop and become prominent",
        example: "Several facts emerged during the investigation, clarifying the timeline of events.",
        cefr_level: "B2",
        grammar_note: "intransitive verb"
      }
    ],
    extra_examples: [
      "A new leader emerged from the opposition party during the political crisis.",
      "These patterns emerge when analyzing historical collapses of ancient civilizations."
    ],
    grammar_note: "intransitive verb",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["emerge"],
      noun: ["emergence"],
      adjective: ["emergent"]
    },
    collocations: [
      { collocation: "emerge from", example: "It takes months for the economy to emerge from a severe recession." },
      { collocation: "emerge as", example: "She has emerged as a leading authority on climate science." }
    ],
    semantic_field_id: "appearance-visibility",
    semantic_field_label: "Appearance & Visibility",
    semantic_field_words: [
      { word: "appear", cefr: "A1", register: "neutral" },
      { word: "arise", cefr: "B2", register: "academic" }
    ],
    register_synonyms: [
      { word: "appear", register: "neutral", cefr: "A1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - trust that new alternatives will emerge."
  },
  {
    id: "entry-resemblance",
    entry_type: "word",
    word: "resemblance",
    ipa_uk: "/rɪˈzem.bləns/",
    ipa_us: "/rɪˈzem.bləns/",
    definition: "the fact of being or looking like someone or something else",
    definition_source: "cambridge",
    example: "The twins bear a striking resemblance to each other in both appearance and voice.",
    definitions: [
      {
        definition: "the fact of being or looking like someone or something else",
        example: "The twins bear a striking resemblance to each other in both appearance and voice.",
        cefr_level: "B2",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "There is some resemblance between the structure of these two ancient languages.",
      "The child's face bore no resemblance to that of his father."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "neutral",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["resemble"],
      noun: ["resemblance"]
    },
    collocations: [
      { collocation: "bear a resemblance", example: "The new model bears a close resemblance to its predecessor." },
      { collocation: "striking resemblance", example: "He has a striking resemblance to the famous movie actor." }
    ],
    semantic_field_id: "similarity",
    semantic_field_label: "Similarity & Comparison",
    semantic_field_words: [
      { word: "similarity", cefr: "B1", register: "neutral" },
      { word: "likeness", cefr: "C1", register: "literary" }
    ],
    register_synonyms: [
      { word: "similarity", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing family similarities, similarities in structures, or architectural patterns."
  },
  {
    id: "entry-relic",
    entry_type: "word",
    word: "relic",
    ipa_uk: "/ˈrel.ɪk/",
    ipa_us: "/ˈrel.ɪk/",
    definition: "an object, tradition, or system from the past that continues to exist",
    definition_source: "cambridge",
    example: "The antique grandfather clock is a relic of the Victorian era.",
    definitions: [
      {
        definition: "an object, tradition, or system from the past that continues to exist",
        example: "The antique grandfather clock is a relic of the Victorian era.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "Archaeologists excavated the cave, finding various stone relics from the Neolithic period.",
      "Some view these strict dress codes as a relic of a bygone age."
    ],
    grammar_note: "noun [C]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["relic", "relics"]
    },
    collocations: [
      { collocation: "relic of the past", example: "The crumbling watchtower is a picturesque relic of the past." },
      { collocation: "ancient relic", example: "The museum houses ancient relics from the Egyptian pyramids." }
    ],
    semantic_field_id: "remains-antiquity",
    semantic_field_label: "Remains & Antiquity",
    semantic_field_words: [
      { word: "remnant", cefr: "C1", register: "academic" },
      { word: "antique", cefr: "B2", register: "neutral" }
    ],
    register_synonyms: [
      { word: "remnant", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-reading"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Describing historical ruins, museums, or old cultural practices."
  },
  {
    id: "entry-ecological",
    entry_type: "word",
    word: "ecological",
    ipa_uk: "/ˌiː.kəˈlɒdʒ.ɪ.kəl/",
    ipa_us: "/ˌiː.kəˈlɑː.dʒɪ.kəl/",
    definition: "relating to the relations of organisms to one another and to their physical surroundings",
    definition_source: "cambridge",
    example: "The construction of the dam caused severe ecological damage to the local river system.",
    definitions: [
      {
        definition: "relating to the relations of organisms to one another and to their physical surroundings",
        example: "The construction of the dam caused severe ecological damage to the local river system.",
        cefr_level: "B2",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "Deforestation can trigger an ecological crisis that disrupts food supply chains.",
      "The organization works to protect areas of high ecological value from industrialization."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      noun: ["ecology", "ecologist"],
      adjective: ["ecological"],
      adverb: ["ecologically"]
    },
    collocations: [
      { collocation: "ecological balance", example: "It is crucial to maintain the ecological balance of the forest." },
      { collocation: "ecological impact", example: "Industrial projects must undergo assessment for their ecological impact." }
    ],
    semantic_field_id: "environment-ecology",
    semantic_field_label: "Environment & Ecology",
    semantic_field_words: [
      { word: "environmental", cefr: "B1", register: "neutral" },
      { word: "biological", cefr: "B2", register: "academic" }
    ],
    register_synonyms: [
      { word: "environmental", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - mysterious disappearance triggered by ecological issues."
  },
  {
    id: "entry-analogy",
    entry_type: "word",
    word: "analogy",
    ipa_uk: "/əˈnæl.ə.dʒi/",
    ipa_us: "/əˈnæl.ə.dʒi/",
    definition: "a comparison between things that have similar features, often used to help explain an idea",
    definition_source: "cambridge",
    example: "To explain how electricity flows, the teacher drew an analogy with water moving through pipes.",
    definitions: [
      {
        definition: "a comparison between things that have similar features, often used to help explain an idea",
        example: "To explain how electricity flows, the teacher drew an analogy with water moving through pipes.",
        cefr_level: "C1",
        grammar_note: "noun [C or U]"
      }
    ],
    extra_examples: [
      "Writers are tempted to draw analogies between human societies and individual lives.",
      "The lawyer argued that there was no valid analogy between the two legal cases."
    ],
    grammar_note: "noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["analogize"],
      noun: ["analogy", "analogue"],
      adjective: ["analogous"]
    },
    collocations: [
      { collocation: "draw an analogy", example: "Scientists often draw an analogy between the human brain and a computer." },
      { collocation: "by analogy with", example: "The rules for this structure are derived by analogy with similar patterns." }
    ],
    semantic_field_id: "similarity-explanation",
    semantic_field_label: "Similarity & Explanation",
    semantic_field_words: [
      { word: "comparison", cefr: "B1", register: "neutral" },
      { word: "parallel", cefr: "C1", register: "academic" }
    ],
    register_synonyms: [
      { word: "comparison", register: "neutral", cefr: "B1" },
      { word: "parallel", register: "academic", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - writers tempted to draw analogies between society and life."
  },
  {
    id: "entry-human-induced",
    entry_type: "word",
    word: "human-induced",
    ipa_uk: "/ˌhjuː.mən.ɪnˈdjuːst/",
    ipa_us: "/ˌhjuː.mən.ɪnˈduːst/",
    definition: "caused by human activity rather than natural processes",
    definition_source: "cambridge",
    example: "The report warns of the severe impacts of human-induced climate change on agricultural yields.",
    definitions: [
      {
        definition: "caused by human activity rather than natural processes",
        example: "The report warns of the severe impacts of human-induced climate change on agricultural yields.",
        cefr_level: "C1",
        grammar_note: "adjective"
      }
    ],
    extra_examples: [
      "The rapid rise in global temperatures is primarily human-induced.",
      "We must work to mitigate human-induced environmental disasters."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "academic",
    formality_score: 4,
    connotation: "negative",
    word_family: {},
    collocations: [
      { collocation: "human-induced climate change", example: "Global actions are needed to curb human-induced climate change." },
      { collocation: "human-induced environmental", example: "Plastic pollution is a classic human-induced environmental challenge." }
    ],
    semantic_field_id: "causation-human",
    semantic_field_label: "Causation & Human Influence",
    semantic_field_words: [
      { word: "man-made", cefr: "B1", register: "neutral" },
      { word: "anthropogenic", cefr: "C2", register: "scientific" }
    ],
    register_synonyms: [
      { word: "man-made", register: "neutral", cefr: "B1" }
    ],
    folder_ids: ["folder-reading", "folder-3", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - human-induced climate change and downfalls."
  },
  {
    id: "entry-contemporary",
    entry_type: "word",
    word: "contemporary",
    ipa_uk: "/kənˈtem.pər.ər.i/",
    ipa_us: "/kənˈtem.pə.rer.i/",
    definition: "existing or happening now, or belonging to the same period of time",
    definition_source: "cambridge",
    example: "The museum showcases contemporary art alongside historic masterpieces.",
    definitions: [
      {
        definition: "existing or happening now",
        example: "Contemporary society faces unique challenges due to rapid digitalization.",
        cefr_level: "B2",
        grammar_note: "adjective"
      },
      {
        definition: "someone living or existing at the same time as another",
        example: "Shakespeare and Marlowe were contemporaries who influenced each other's work.",
        cefr_level: "C1",
        grammar_note: "noun [C]"
      }
    ],
    extra_examples: [
      "We must evaluate whether contemporary technology can resolve our environmental issues.",
      "The library contains various contemporary accounts of the historic battle."
    ],
    grammar_note: "adjective / noun",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      noun: ["contemporary", "contemporaries"]
    },
    collocations: [
      { collocation: "contemporary society", example: "Stress is a widespread problem in contemporary society." },
      { collocation: "contemporary issues", example: "The documentary explores contemporary issues like income inequality." }
    ],
    semantic_field_id: "time-modern",
    semantic_field_label: "Time & Modernity",
    semantic_field_words: [
      { word: "modern", cefr: "A2", register: "neutral" },
      { word: "current", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "modern", register: "neutral", cefr: "A2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - whether contemporary technology will resolve issues."
  },
  {
    id: "entry-reliance",
    entry_type: "word",
    word: "reliance",
    ipa_uk: "/rɪˈlaɪ.əns/",
    ipa_us: "/rɪˈlaɪ.əns/",
    definition: "the state of depending on or trusting in something or someone",
    definition_source: "cambridge",
    example: "The company is trying to reduce its reliance on imported raw materials.",
    definitions: [
      {
        definition: "the state of depending on or trusting in something or someone",
        example: "The company is trying to reduce its reliance on imported raw materials.",
        cefr_level: "B2",
        grammar_note: "noun [U]"
      }
    ],
    extra_examples: [
      "The survival of millions depends on modern healthcare and the reliance on technologies.",
      "His reliance on his parents for financial support has become a source of tension."
    ],
    grammar_note: "noun [U]",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "B2",
    register: "academic",
    formality_score: 3,
    connotation: "neutral",
    word_family: {
      verb: ["rely"],
      noun: ["reliance", "reliability"],
      adjective: ["reliant", "reliable"],
      adverb: ["reliably"]
    },
    collocations: [
      { collocation: "reliance on technology", example: "Our reliance on technology makes us vulnerable to cyberattacks." },
      { collocation: "heavy reliance", example: "The country's heavy reliance on oil exports makes its economy unstable." }
    ],
    semantic_field_id: "dependence-trust",
    semantic_field_label: "Dependence & Trust",
    semantic_field_words: [
      { word: "dependence", cefr: "B2", register: "academic" },
      { word: "trust", cefr: "B1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "dependence", register: "neutral", cefr: "B2" }
    ],
    folder_ids: ["folder-reading", "folder-4"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - reliance of millions on modern health care."
  },
  {
    id: "entry-reminiscent",
    entry_type: "word",
    word: "reminiscent",
    ipa_uk: "/ˌrem.ɪˈnɪs.ənt/",
    ipa_us: "/ˌrem.əˈnɪs.ənt/",
    definition: "making you remember a particular person, event, or thing",
    definition_source: "cambridge",
    example: "The style of the building is highly reminiscent of classical Greek architecture.",
    definitions: [
      {
        definition: "making you remember a particular person, event, or thing",
        example: "The style of the building is highly reminiscent of classical Greek architecture.",
        cefr_level: "C1",
        grammar_note: "adjective [always after noun, followed by 'of']"
      }
    ],
    extra_examples: [
      "The flavor is reminiscent of the homemade pies my grandmother used to bake.",
      "His political speeches are reminiscent of the rhetoric of the 1960s."
    ],
    grammar_note: "adjective",
    base_verb: "",
    particles: "",
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: "C1",
    register: "formal",
    formality_score: 4,
    connotation: "neutral",
    word_family: {
      verb: ["reminisce"],
      noun: ["reminiscence"],
      adjective: ["reminiscent"]
    },
    collocations: [
      { collocation: "reminiscent of", example: "The melody is reminiscent of a traditional folk song." },
      { collocation: "highly reminiscent", example: "Her writing style is highly reminiscent of Hemingway's." }
    ],
    semantic_field_id: "memory-association",
    semantic_field_label: "Memory & Association",
    semantic_field_words: [
      { word: "evocative", cefr: "C2", register: "formal" },
      { word: "suggestive", cefr: "C1", register: "neutral" }
    ],
    register_synonyms: [
      { word: "suggestive", register: "neutral", cefr: "C1" }
    ],
    folder_ids: ["folder-reading", "folder-speaking-relationships"],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: "Drawing Lessons from History passage - ruins reminiscent of what poet Shelley described."
  },
  {
    id: 'entry-negligible',
    entry_type: 'word',
    word: 'negligible',
    ipa_uk: '/ˈneɡ.lɪ.dʒə.bəl/',
    ipa_us: '/ˈneɡ.lə.dʒə.bəl/',
    definition: 'Too small or unimportant to have any influence or value; insignificant.',
    definition_source: 'cambridge',
    example: 'For the general population, supplements have negligible impact on preventing common cancers.',
    definitions: [
      {
        definition: 'Too small or unimportant to be worth considering; insignificant.',
        example: 'The difference between the two products was negligible.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    extra_examples: [
      'The cost of the repair was negligible compared to buying a new device.',
      'A negligible amount of damage was reported after the minor tremor.'
    ],
    grammar_note: 'adjective',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: [], noun: ['negligibility'], adjective: ['negligible'], adverb: ['negligibly'] },
    semantic_field_id: 'size-amount',
    semantic_field_label: 'Size & Amount',
    semantic_field_words: [
      { word: 'insignificant', cefr: 'B2', register: 'neutral' },
      { word: 'trivial', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'insignificant', register: 'neutral', cefr: 'B2' },
      { word: 'trivial', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - negligible impact on major indicators of health.'
  },
  {
    id: 'entry-fortify',
    entry_type: 'word',
    word: 'fortify',
    ipa_uk: '/ˈfɔː.tɪ.faɪ/',
    ipa_us: '/ˈfɔːr.t̬ə.faɪ/',
    definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
    definition_source: 'cambridge',
    example: 'Many countries choose to require white flour to be fortified with folic acid to prevent birth defects.',
    definitions: [
      {
        definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
        example: 'Cereals are often fortified with extra vitamins.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The milk is fortified with vitamin D to support bone strength.',
      'Some juices are fortified with calcium to benefit lactose-intolerant consumers.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    word_family: { verb: ['fortify'], noun: ['fortification'], adjective: ['fortified'], adverb: [] },
    semantic_field_id: 'strengthen-enhance',
    semantic_field_label: 'Strengthen & Enhance',
    semantic_field_words: [
      { word: 'strengthen', cefr: 'B2', register: 'neutral' },
      { word: 'enrich', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'strengthen', register: 'neutral', cefr: 'B2' },
      { word: 'enrich', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - decision to require white flour to be fortified.'
  },
  {
    id: 'entry-plummet',
    entry_type: 'word',
    word: 'plummet',
    ipa_uk: '/ˈplʌm.ɪt/',
    ipa_us: '/ˈplʌm.ɪt/',
    definition: 'To fall or drop straight down at a very high speed or by a large amount.',
    definition_source: 'cambridge',
    example: 'Spinal birth defects plummeted by 75% after the white flour fortification policy was implemented.',
    definitions: [
      {
        definition: 'To fall or drop straight down at a very high speed or by a large amount.',
        example: 'Share prices plummeted on the stock exchange today.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    extra_examples: [
      'The temperature plummeted below zero overnight.',
      'Global sales plummeted due to the economic downturn.'
    ],
    grammar_note: 'intransitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['plummet'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'decrease-decline',
    semantic_field_label: 'Decrease & Decline',
    semantic_field_words: [
      { word: 'fall', cefr: 'A1', register: 'neutral' },
      { word: 'plunge', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'plunge', register: 'neutral', cefr: 'C1' },
      { word: 'fall', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - spinal birth defects plummeted by 75%.'
  },
  {
    id: 'entry-affliction',
    entry_type: 'word',
    word: 'affliction',
    ipa_uk: '/əˈflɪk.ʃən/',
    ipa_us: '/əˈflɪk.ʃən/',
    definition: 'Something that causes pain, suffering, or distress.',
    definition_source: 'cambridge',
    example: 'Macular degeneration is a common age-related affliction that severely impairs vision.',
    definitions: [
      {
        definition: 'Something that causes pain, suffering, or distress (such as a medical condition or disease).',
        example: 'Malnutrition is one of the common afflictions in impoverished regions.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      }
    ],
    extra_examples: [
      'They showed great strength and dignity throughout their afflictions.',
      'Arthritis is a painful affliction that affects millions of elderly people.'
    ],
    grammar_note: 'noun [C or U]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['afflict'], noun: ['affliction'], adjective: ['afflicted'], adverb: [] },
    semantic_field_id: 'disease-suffering',
    semantic_field_label: 'Disease & Suffering',
    semantic_field_words: [
      { word: 'disease', cefr: 'B1', register: 'neutral' },
      { word: 'ailment', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'disease', register: 'neutral', cefr: 'B1' },
      { word: 'ailment', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - macular degeneration in people likely to develop this affliction.'
  },
  {
    id: 'entry-undermine',
    entry_type: 'word',
    word: 'undermine',
    ipa_uk: '/ˌʌn.dəˈmaɪn/',
    ipa_us: '/ˌʌn.dɚˈmaɪn/',
    definition: 'To make someone or something weaker or less effective, usually gradually.',
    definition_source: 'cambridge',
    example: 'Taking excessive supplements risks undermining the body\'s natural immune alerts.',
    definitions: [
      {
        definition: 'To make someone or something weaker or less effective, usually gradually.',
        example: 'Criticism can seriously undermine a student\'s confidence.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The constant leaks undermine the credibility of the committee.',
      'Uncontrolled inflation will undermine the country\'s economic growth.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    word_family: { verb: ['undermine'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'weaken-damage',
    semantic_field_label: 'Weaken & Damage',
    semantic_field_words: [
      { word: 'weaken', cefr: 'B2', register: 'neutral' },
      { word: 'compromise', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'weaken', register: 'neutral', cefr: 'B2' },
      { word: 'compromise', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - we risk undermining that message and upsetting the balance.'
  },
  {
    id: 'entry-counteract',
    entry_type: 'word',
    word: 'counteract',
    ipa_uk: '/ˌkaʊn.tərˈækt/',
    ipa_us: '/ˌkaʊn.t̬ɚˈækt/',
    definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
    definition_source: 'cambridge',
    example: 'The new medication is designed to counteract the negative side effects of chemotherapy.',
    definitions: [
      {
        definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
        example: 'We must take measures to counteract the effects of climate change.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'These chemicals are used to counteract acidic soil in farming.',
      'Exercise can help counteract the physical decline associated with aging.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: ['counteract'], noun: ['counteraction'], adjective: ['counteractive'], adverb: [] },
    semantic_field_id: 'neutralize-resist',
    semantic_field_label: 'Neutralize & Resist',
    semantic_field_words: [
      { word: 'neutralize', cefr: 'C1', register: 'formal' },
      { word: 'offset', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'neutralize', register: 'formal', cefr: 'C1' },
      { word: 'offset', register: 'formal', cefr: 'C1' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - counteracting the destructive effect of free radicals.'
  },
  {
    id: 'entry-retrieve',
    entry_type: 'word',
    word: 'retrieve',
    ipa_uk: '/rɪˈtriːv/',
    ipa_us: '/rɪˈtriːv/',
    definition: 'To find and bring back something.',
    definition_source: 'cambridge',
    example: 'Tons of undigested vitamin and mineral pills are retrieved from the sewers every month.',
    definitions: [
      {
        definition: 'To find and bring back something, or to recover information from a computer.',
        example: 'Computers can retrieve millions of records in a fraction of a second.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    extra_examples: [
      'The dog was trained to retrieve sticks thrown into the lake.',
      'Divers were sent to retrieve the black box recorder from the wreckage.'
    ],
    grammar_note: 'transitive verb',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: ['retrieve'], noun: ['retrieval'], adjective: ['retrievable'], adverb: [] },
    semantic_field_id: 'recover-get',
    semantic_field_label: 'Recover & Get',
    semantic_field_words: [
      { word: 'recover', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'recover', register: 'neutral', cefr: 'B2' }
    ],
    folder_ids: ['folder-reading', 'folder-science'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - mineral pills are retrieved from the sewer filters.'
  },
  {
    id: 'entry-notion',
    entry_type: 'word',
    word: 'notion',
    ipa_uk: '/ˈnəʊ.ʃən/',
    ipa_us: '/ˈnoʊ.ʃən/',
    definition: 'A belief, idea, or conception of something.',
    definition_source: 'cambridge',
    example: 'She dismissed the popular notion that eating carrots gives you perfect night vision.',
    definitions: [
      {
        definition: 'A belief, idea, or conception of something.',
        example: 'The notion that gender determines intelligence is completely outdated.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    extra_examples: [
      'I have only a vague notion of what they are planning to do.',
      'He challenges the traditional notion that work must be done in an office.'
    ],
    grammar_note: 'noun [C]',
    base_verb: '',
    particles: '',
    conjugations: null,
    related_phrasal_verbs: [],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    word_family: { verb: [], noun: ['notion'], adjective: ['notional'], adverb: ['notionally'] },
    semantic_field_id: 'belief-idea',
    semantic_field_label: 'Belief & Idea',
    semantic_field_words: [
      { word: 'concept', cefr: 'B2', register: 'neutral' },
      { word: 'idea', cefr: 'A1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'concept', register: 'neutral', cefr: 'B2' },
      { word: 'idea', register: 'neutral', cefr: 'A1' }
    ],
    folder_ids: ['folder-reading', 'folder-4'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - the notion that they can lead people to fill in gaps.'
  },
  {
    id: 'entry-steerclear',
    entry_type: 'phrasal_verb',
    word: 'steer clear of',
    ipa_uk: '/stɪər klɪər ɒv/',
    ipa_us: '/stɪr klɪr ʌv/',
    definition: 'To avoid someone or something because they might cause problems or be dangerous.',
    definition_source: 'cambridge',
    example: 'Health experts advise heavy smokers to steer clear of beta-carotene supplements.',
    definitions: [
      {
        definition: 'To avoid someone or something because they might cause problems or be dangerous.',
        example: 'You should steer clear of that neighborhood after dark.',
        cefr_level: 'B2',
        grammar_note: 'idiomatic phrasal verb'
      }
    ],
    extra_examples: [
      'Investors are steering clear of volatile stock options in the current climate.',
      'I tried to steer clear of controversial political topics during dinner.'
    ],
    grammar_note: 'idiomatic phrasal verb',
    base_verb: 'steer',
    particles: 'clear of',
    conjugations: {
      present_simple_3rd_singular: 'steers clear of',
      past_simple: 'steered clear of',
      present_participle: 'steering clear of',
      past_participle: 'steered clear of'
    },
    related_phrasal_verbs: [],
    cefr_level: 'B2',
    register: 'general',
    formality_score: 3,
    connotation: 'neutral',
    word_family: { verb: [], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'avoid-escape',
    semantic_field_label: 'Avoid & Escape',
    semantic_field_words: [
      { word: 'avoid', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'avoid', register: 'neutral', cefr: 'B1' }
    ],
    folder_ids: ['folder-reading', 'folder-5'],
    review: {
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'Vitamins – To supplement or not? reading passage - disturbing evidence to steer clear of multivitamins.'
  }
,
  {
    word: 'negligible',
    entry_type: 'word',
    ipa_uk: '/ˈneɡ.lɪ.dʒə.bəl/',
    ipa_us: '/ˈneɡ.lə.dʒə.bəl/',
    definition: 'Too small or unimportant to have any effect or be influence; insignificant.',
    definitions: [
      {
        definition: 'Too small or unimportant to be worth considering; insignificant.',
        example: 'The difference between the two products was negligible.',
        cefr_level: 'C1',
        grammar_note: 'adjective'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective',
    example: 'For the general population, supplements have negligible impact on preventing common cancers.',
    extra_examples: [
      'The cost of the repair was negligible compared to buying a new device.',
      'A negligible amount of damage was reported after the minor tremor.'
    ],
    word_family: { verb: [], noun: ['negligibility'], adjective: ['negligible'], adverb: ['negligibly'] },
    semantic_field_id: 'size-amount',
    semantic_field_label: 'Size & Amount',
    semantic_field_words: [
      { word: 'insignificant', cefr: 'B2', register: 'neutral' },
      { word: 'trivial', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'insignificant', register: 'neutral', cefr: 'B2' },
      { word: 'trivial', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'fortify',
    entry_type: 'word',
    ipa_uk: '/ˈfɔː.tɪ.faɪ/',
    ipa_us: '/ˈfɔːr.t̬ə.faɪ/',
    definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
    definitions: [
      {
        definition: 'To make food or drink stronger or healthier by adding vitamins or minerals to it.',
        example: 'Cereals are often fortified with extra vitamins.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'transitive verb',
    example: 'Many countries choose to require white flour to be fortified with folic acid to prevent birth defects.',
    extra_examples: [
      'The milk is fortified with vitamin D to support bone strength.',
      'Some juices are fortified with calcium to benefit lactose-intolerant consumers.'
    ],
    word_family: { verb: ['fortify'], noun: ['fortification'], adjective: ['fortified'], adverb: [] },
    semantic_field_id: 'strengthen-enhance',
    semantic_field_label: 'Strengthen & Enhance',
    semantic_field_words: [
      { word: 'strengthen', cefr: 'B2', register: 'neutral' },
      { word: 'enrich', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'strengthen', register: 'neutral', cefr: 'B2' },
      { word: 'enrich', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'plummet',
    entry_type: 'word',
    ipa_uk: '/ˈplʌm.ɪt/',
    ipa_us: '/ˈplʌm.ɪt/',
    definition: 'To fall or drop straight down at a very high speed or by a large amount.',
    definitions: [
      {
        definition: 'To fall or drop straight down at a very high speed or by a large amount.',
        example: 'Share prices plummeted on the stock exchange today.',
        cefr_level: 'C1',
        grammar_note: 'intransitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'intransitive verb',
    example: 'Spinal birth defects plummeted by 75% after the white flour fortification policy was implemented.',
    extra_examples: [
      'The temperature plummeted below zero overnight.',
      'Global sales plummeted due to the economic downturn.'
    ],
    word_family: { verb: ['plummet'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'decrease-decline',
    semantic_field_label: 'Decrease & Decline',
    semantic_field_words: [
      { word: 'fall', cefr: 'A1', register: 'neutral' },
      { word: 'plunge', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'plunge', register: 'neutral', cefr: 'C1' },
      { word: 'fall', register: 'neutral', cefr: 'A1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'affliction',
    entry_type: 'word',
    ipa_uk: '/əˈflɪk.ʃən/',
    ipa_us: '/əˈflɪk.ʃən/',
    definition: 'Something that causes pain, suffering, or distress.',
    definitions: [
      {
        definition: 'Something that causes pain, suffering, or distress (such as a medical condition or disease).',
        example: 'Malnutrition is one of the common afflictions in impoverished regions.',
        cefr_level: 'C1',
        grammar_note: 'noun [C or U]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'noun [C or U]',
    example: 'Macular degeneration is a common age-related affliction that severely impairs vision.',
    extra_examples: [
      'They showed great strength and dignity throughout their afflictions.',
      'Arthritis is a painful affliction that affects millions of elderly people.'
    ],
    word_family: { verb: ['afflict'], noun: ['affliction'], adjective: ['afflicted'], adverb: [] },
    semantic_field_id: 'disease-suffering',
    semantic_field_label: 'Disease & Suffering',
    semantic_field_words: [
      { word: 'disease', cefr: 'B1', register: 'neutral' },
      { word: 'ailment', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'disease', register: 'neutral', cefr: 'B1' },
      { word: 'ailment', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'undermine',
    entry_type: 'word',
    ipa_uk: '/ˌʌn.dəˈmaɪn/',
    ipa_us: '/ˌʌn.dɚˈmaɪn/',
    definition: 'To make someone or something weaker or less effective, usually gradually.',
    definitions: [
      {
        definition: 'To make someone or something weaker or less effective, usually gradually.',
        example: 'Criticism can seriously undermine a student\'s confidence.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'negative',
    grammar_note: 'transitive verb',
    example: 'Taking excessive supplements risks undermining the body\'s natural immune alerts.',
    extra_examples: [
      'The constant leaks undermine the credibility of the committee.',
      'Uncontrolled inflation will undermine the country\'s economic growth.'
    ],
    word_family: { verb: ['undermine'], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'weaken-damage',
    semantic_field_label: 'Weaken & Damage',
    semantic_field_words: [
      { word: 'weaken', cefr: 'B2', register: 'neutral' },
      { word: 'compromise', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'weaken', register: 'neutral', cefr: 'B2' },
      { word: 'compromise', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'counteract',
    entry_type: 'word',
    ipa_uk: '/ˌkaʊn.tərˈækt/',
    ipa_us: '/ˌkaʊn.t̬ɚˈækt/',
    definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
    definitions: [
      {
        definition: 'To act in opposition to something in order to reduce its force or neutralize it.',
        example: 'We must take measures to counteract the effects of climate change.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'The new medication is designed to counteract the negative side effects of chemotherapy.',
    extra_examples: [
      'These chemicals are used to counteract acidic soil in farming.',
      'Exercise can help counteract the physical decline associated with aging.'
    ],
    word_family: { verb: ['counteract'], noun: ['counteraction'], adjective: ['counteractive'], adverb: [] },
    semantic_field_id: 'neutralize-resist',
    semantic_field_label: 'Neutralize & Resist',
    semantic_field_words: [
      { word: 'neutralize', cefr: 'C1', register: 'formal' },
      { word: 'offset', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'neutralize', register: 'formal', cefr: 'C1' },
      { word: 'offset', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'retrieve',
    entry_type: 'word',
    ipa_uk: '/rɪˈtriːv/',
    ipa_us: '/rɪˈtriːv/',
    definition: 'To find and bring back something.',
    definitions: [
      {
        definition: 'To find and bring back something, or to recover information from a computer.',
        example: 'Computers can retrieve millions of records in a fraction of a second.',
        cefr_level: 'C1',
        grammar_note: 'transitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'transitive verb',
    example: 'Tons of undigested vitamin and mineral pills are retrieved from the sewers every month.',
    extra_examples: [
      'The dog was trained to retrieve sticks thrown into the lake.',
      'Divers were sent to retrieve the black box recorder from the wreckage.'
    ],
    word_family: { verb: ['retrieve'], noun: ['retrieval'], adjective: ['retrievable'], adverb: [] },
    semantic_field_id: 'recover-get',
    semantic_field_label: 'Recover & Get',
    semantic_field_words: [
      { word: 'recover', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'recover', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'notion',
    entry_type: 'word',
    ipa_uk: '/ˈnəʊ.ʃən/',
    ipa_us: '/ˈnoʊ.ʃən/',
    definition: 'A belief, idea, or conception of something.',
    definitions: [
      {
        definition: 'A belief, idea, or conception of something.',
        example: 'The notion that gender determines intelligence is completely outdated.',
        cefr_level: 'C1',
        grammar_note: 'noun [C]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'noun [C]',
    example: 'She dismissed the popular notion that eating carrots gives you perfect night vision.',
    extra_examples: [
      'I have only a vague notion of what they are planning to do.',
      'He challenges the traditional notion that work must be done in an office.'
    ],
    word_family: { verb: [], noun: ['notion'], adjective: ['notional'], adverb: ['notionally'] },
    semantic_field_id: 'belief-idea',
    semantic_field_label: 'Belief & Idea',
    semantic_field_words: [
      { word: 'concept', cefr: 'B2', register: 'neutral' },
      { word: 'idea', cefr: 'A1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'concept', register: 'neutral', cefr: 'B2' },
      { word: 'idea', register: 'neutral', cefr: 'A1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'steer clear of',
    entry_type: 'phrasal_verb',
    ipa_uk: '/stɪər klɪər ɒv/',
    ipa_us: '/stɪr klɪr ʌv/',
    definition: 'To avoid someone or something because they might cause problems or be dangerous.',
    definitions: [
      {
        definition: 'To avoid someone or something because they might cause problems or be dangerous.',
        example: 'You should steer clear of that neighborhood after dark.',
        cefr_level: 'B2',
        grammar_note: 'idiomatic phrasal verb'
      }
    ],
    cefr_level: 'B2',
    register: 'general',
    formality_score: 3,
    connotation: 'neutral',
    grammar_note: 'idiomatic phrasal verb',
    example: 'Health experts advise heavy smokers to steer clear of beta-carotene supplements.',
    extra_examples: [
      'Investors are steering clear of volatile stock options in the current climate.',
      'I tried to steer clear of controversial political topics during dinner.'
    ],
    word_family: { verb: [], noun: [], adjective: [], adverb: [] },
    semantic_field_id: 'avoid-escape',
    semantic_field_label: 'Avoid & Escape',
    semantic_field_words: [
      { word: 'avoid', cefr: 'B1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'avoid', register: 'neutral', cefr: 'B1' }
    ],
    suggested_folder_name: 'Phrasal Verbs & Idioms'
  },
  {
    word: 'mortality',
    entry_type: 'word',
    ipa_uk: '/mɔːˈtæl.ə.ti/',
    ipa_us: '/mɔːrˈtæl.ə.t̬i/',
    definition: 'The state of being subject to death, or the number of deaths in a given time or place.',
    definitions: [
      {
        definition: 'The state of being subject to death.',
        example: 'Her illness forced her to confront her own mortality.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      },
      {
        definition: 'The rate of deaths in a given population or time period.',
        example: 'Infant mortality has fallen drastically in the last decade.',
        cefr_level: 'C2',
        grammar_note: 'noun [U]'
      }
    ],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 5,
    connotation: 'neutral',
    grammar_note: 'noun [U]',
    example: 'Improved healthcare and cleaner sanitation lowered infant mortality rates substantially.',
    extra_examples: [
      'The disease carries a high mortality rate if left untreated.',
      'Philosophers have debated the nature of human mortality for centuries.'
    ],
    word_family: { verb: [], noun: ['mortality', 'mortal'], adjective: ['mortal', 'immortal'], adverb: ['mortally'] },
    semantic_field_id: 'death-life',
    semantic_field_label: 'Death & Life',
    semantic_field_words: [
      { word: 'death', cefr: 'A2', register: 'neutral' },
      { word: 'fatality', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'death', register: 'neutral', cefr: 'A2' },
      { word: 'fatality', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'prenatal',
    entry_type: 'word',
    ipa_uk: '/ˌpriːˈneɪ.təl/',
    ipa_us: '/ˌpriːˈneɪ.t̬əl/',
    definition: 'Relating to the medical care of women during pregnancy, before their babies are born.',
    definitions: [
      {
        definition: 'Relating to the period before birth; during pregnancy.',
        example: 'The clinic offers free prenatal classes for new parents.',
        cefr_level: 'C2',
        grammar_note: 'adjective [always before noun]'
      }
    ],
    cefr_level: 'C2',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'adjective [always before noun]',
    example: 'Expectant mothers are advised to seek regular prenatal checkups and take folic acid.',
    extra_examples: [
      'Prenatal diagnosis can detect many congenital disorders.',
      'Proper nutrition is critical for healthy prenatal development.'
    ],
    word_family: { verb: [], noun: [], adjective: ['prenatal', 'postnatal', 'neonatal'], adverb: ['prenatally'] },
    semantic_field_id: 'pregnancy-birth',
    semantic_field_label: 'Pregnancy & Birth',
    semantic_field_words: [
      { word: 'pregnancy', cefr: 'B2', register: 'neutral' },
      { word: 'maternity', cefr: 'C1', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'pregnancy', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'defect',
    entry_type: 'word',
    ipa_uk: '/ˈdiː.fekt/',
    ipa_us: '/ˈdiː.fekt/',
    definition: 'A physical or functional fault, flaw, or imperfection in a person or thing.',
    definitions: [
      {
        definition: 'A fault, flaw, or imperfection in something.',
        example: 'The company recalled the cars due to a major engine defect.',
        cefr_level: 'B2',
        grammar_note: 'noun [C]'
      },
      {
        definition: 'To leave one\'s country or political group to join an opposing one.',
        example: 'The soldier decided to defect to the allied forces.',
        cefr_level: 'C2',
        grammar_note: 'intransitive verb'
      }
    ],
    cefr_level: 'B2',
    register: 'general',
    formality_score: 3,
    connotation: 'negative',
    grammar_note: 'noun [C]',
    example: 'Folic acid supplementation is proven to reduce neural tube birth defects in infants.',
    extra_examples: [
      'The manufacturing defect was caught early by quality control.',
      'A birth defect can impact a child\'s physical capabilities.'
    ],
    word_family: { verb: ['defect'], noun: ['defect', 'defection', 'defector'], adjective: ['defective', 'defectless'], adverb: ['defectively'] },
    semantic_field_id: 'flaw-imperfection',
    semantic_field_label: 'Flaw & Imperfection',
    semantic_field_words: [
      { word: 'flaw', cefr: 'B2', register: 'neutral' },
      { word: 'imperfection', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'flaw', register: 'neutral', cefr: 'B2' },
      { word: 'imperfection', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'deflect',
    entry_type: 'word',
    ipa_uk: '/dɪˈflekt/',
    ipa_us: '/dɪˈflekt/',
    definition: 'To cause something to change direction, or to turn aside from a course.',
    definitions: [
      {
        definition: 'To cause something to change direction; turn aside.',
        example: 'The shield is designed to deflect incoming debris.',
        cefr_level: 'C1',
        grammar_note: 'transitive or intransitive verb'
      },
      {
        definition: 'To draw attention away from something.',
        example: 'She tried to deflect the criticism by blaming external factors.',
        cefr_level: 'C1',
        grammar_note: 'transitive or intransitive verb'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'neutral',
    grammar_note: 'transitive or intransitive verb',
    example: 'Antioxidants deflect macular degeneration by counteracting damage in retina cells.',
    extra_examples: [
      'The ball deflected off the defender into the net.',
      'He used humor to deflect personal questions about his career.'
    ],
    word_family: { verb: ['deflect'], noun: ['deflection', 'deflector'], adjective: ['deflective', 'deflected'], adverb: [] },
    semantic_field_id: 'divert-direction',
    semantic_field_label: 'Divert & Direction',
    semantic_field_words: [
      { word: 'divert', cefr: 'C1', register: 'neutral' },
      { word: 'distract', cefr: 'B2', register: 'neutral' }
    ],
    register_synonyms: [
      { word: 'divert', register: 'neutral', cefr: 'C1' },
      { word: 'distract', register: 'neutral', cefr: 'B2' }
    ],
    suggested_folder_name: 'IELTS Reading'
  },
  {
    word: 'fortification',
    entry_type: 'word',
    ipa_uk: '/ˌfɔː.tɪ.fɪˈkeɪ.ʃən/',
    ipa_us: '/ˌfɔːr.t̬ə.fəˈkeɪ.ʃən/',
    definition: 'The action of reinforcing or strengthening a food or drink with vitamins and minerals.',
    definitions: [
      {
        definition: 'The process of adding vitamins or minerals to food to make it healthier.',
        example: 'The fortification of salt with iodine has prevented goiters globally.',
        cefr_level: 'C1',
        grammar_note: 'noun [U or C]'
      },
      {
        definition: 'A defensive wall or reinforcement built to protect a place.',
        example: 'The soldiers built concrete fortifications along the border.',
        cefr_level: 'C2',
        grammar_note: 'noun [C usually plural]'
      }
    ],
    cefr_level: 'C1',
    register: 'academic',
    formality_score: 4,
    connotation: 'positive',
    grammar_note: 'noun [U or C]',
    example: 'National white flour fortification programs led to a massive drop in neural tube birth defects.',
    extra_examples: [
      'Food fortification is a cost-effective public health strategy.',
      'The ancient fortress had stone fortifications that survived many sieges.'
    ],
    word_family: { verb: ['fortify'], noun: ['fortification', 'fortress'], adjective: ['fortified'], adverb: [] },
    semantic_field_id: 'strengthen-enhance',
    semantic_field_label: 'Strengthen & Enhance',
    semantic_field_words: [
      { word: 'enrichment', cefr: 'C1', register: 'formal' },
      { word: 'reinforcement', cefr: 'C1', register: 'formal' }
    ],
    register_synonyms: [
      { word: 'enrichment', register: 'formal', cefr: 'C1' },
      { word: 'reinforcement', register: 'formal', cefr: 'C1' }
    ],
    suggested_folder_name: 'IELTS Reading'
  }
];

const LISTENING_MAPS_DB = [
  {
    id: 'map-1',
    title: 'Greenwood Park',
    description: 'An open-air park layout showing visitor facilities, pathways, and green zones.',
    type: 'map',
    questions: [
      {
        id: 'q-map-1-1',
        sentence: 'The visitor center is situated immediately to the right of the park entrance.',
        gaps: ['immediately to the right of'],
        highlightId: 'map1-visitor-center',
        explanation: 'Points to the building located on the right side as soon as you enter the park.',
        word: 'immediately to the right of',
        definition: 'Directly next to and on the right side of a specific point of reference.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-1-2',
        sentence: 'If you follow the main path, it curves around the edge of the lake.',
        gaps: ['around the edge of'],
        highlightId: 'map1-lake',
        explanation: 'Describes path movement following the perimeter of a body of water.',
        word: 'around the edge of',
        definition: 'Following the outer boundary, perimeter, or border of an area.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-1-3',
        sentence: 'The cafe is nestled in close proximity to the wooded area.',
        gaps: ['in close proximity to'],
        highlightId: 'map1-cafe',
        explanation: 'Indicates the cafe is located very near to the woods.',
        word: 'in close proximity to',
        definition: 'Near or close to something in space or time.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-1-4',
        sentence: 'An adventure playground has been built in the northernmost sector of the park.',
        gaps: ['in the northernmost sector'],
        highlightId: 'map1-playground',
        explanation: 'Refers to the area located at the far north of the park boundaries.',
        word: 'in the northernmost sector',
        definition: 'Located in the section or area furthest to the north.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-1-5',
        sentence: 'The picnic tables are located directly opposite the visitor center.',
        gaps: ['directly opposite'],
        highlightId: 'map1-picnic',
        explanation: 'Points to tables facing the visitor center directly across the pathway.',
        word: 'directly opposite',
        definition: 'Facing something directly on the other side of a path, street, or space.',
        cefr_level: 'B2'
      }
    ]
  },
  {
    id: 'map-2',
    title: 'Central Museum Floorplan',
    description: 'An indoor museum blueprint displaying gallery layout, reception, and amenities.',
    type: 'map',
    questions: [
      {
        id: 'q-map-2-1',
        sentence: 'The cloakroom is positioned adjacent to the reception desk on the left-hand side.',
        gaps: ['adjacent to'],
        highlightId: 'map2-cloakroom',
        explanation: 'Refers to the room right next to the reception desk on its left side.',
        word: 'adjacent to',
        definition: 'Very near, next to, or touching another object or space.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-2-2',
        sentence: 'You can access the Egyptian Room by walking through the main gallery and turning left.',
        gaps: ['through the main gallery'],
        highlightId: 'map2-egyptian-room',
        explanation: 'Describes movement passing from one side to the other inside the gallery.',
        word: 'through the main gallery',
        definition: 'Moving in one side and out of the other side of a gallery or space.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-2-3',
        sentence: 'The gift shop is conveniently situated right by the entrance lobby.',
        gaps: ['conveniently situated'],
        highlightId: 'map2-gift-shop',
        explanation: 'Highlights a location that is useful or easy to reach for visitors.',
        word: 'conveniently situated',
        definition: 'Located in a spot that is easy to access, useful, or highly practical.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-2-4',
        sentence: 'The sculpture garden is located beyond the rear exit of the museum.',
        gaps: ['beyond the rear exit'],
        highlightId: 'map2-sculpture-garden',
        explanation: 'Indicates the garden is past the back doors of the building.',
        word: 'beyond the rear exit',
        definition: 'On the further side of the back doorway or outer boundary of a structure.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-2-5',
        sentence: 'A small seating area is located in the far corner of the exhibition hall.',
        gaps: ['in the far corner'],
        highlightId: 'map2-seating',
        explanation: 'Points to the seating area situated at the most distant corner of the room.',
        word: 'in the far corner',
        definition: 'At the most remote angle or corner of a room or space.',
        cefr_level: 'B2'
      }
    ]
  },
  {
    id: 'map-3',
    title: 'Solar Water Heating System',
    description: 'A technical diagram of a domestic solar-powered water heating process.',
    type: 'diagram',
    questions: [
      {
        id: 'q-map-3-1',
        sentence: 'Solar radiation is absorbed by the panel, which is mounted on the south-facing roof.',
        gaps: ['mounted on the south-facing roof'],
        highlightId: 'map3-collector',
        explanation: 'Refers to the installation of solar collectors on the roof facing south.',
        word: 'mounted on the south-facing roof',
        definition: 'Installed or fixed onto a roof surface that is oriented towards the south.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-3-2',
        sentence: 'Cold water is pumped upwards, where it circulates through the heating tubes.',
        gaps: ['circulates through'],
        highlightId: 'map3-pump',
        explanation: 'Describes the flow of cold water inside the copper tubes of the collector.',
        word: 'circulates through',
        definition: 'Moves continuously in a closed circle or system, passing through channels.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-3-3',
        sentence: 'The heated liquid then passes through a coil, which transfers heat to the water tank.',
        gaps: ['transfers heat to'],
        highlightId: 'map3-exchanger',
        explanation: 'Explains how the heat exchanger transfers thermal energy to the cylinder.',
        word: 'transfers heat to',
        definition: 'Conveys or passes thermal energy from one substance or body to another.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-3-4',
        sentence: 'If solar energy is insufficient, the water is further heated by a backup boiler.',
        gaps: ['further heated by'],
        highlightId: 'map3-boiler',
        explanation: 'Indicates the secondary heating source that warms the water if sunlight is weak.',
        word: 'further heated by',
        definition: 'Subjected to additional heating from another auxiliary source.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-3-5',
        sentence: 'The hot water is finally stored in an insulated cylinder for household use.',
        gaps: ['stored in an insulated cylinder'],
        highlightId: 'map3-tank',
        explanation: 'Refers to keeping water inside a cylinder designed to minimize heat loss.',
        word: 'stored in an insulated cylinder',
        definition: 'Kept inside a cylinder designed with thermal insulation to retain heat.',
        cefr_level: 'C1'
      }
    ]
  },
  {
    id: 'map-4',
    title: 'Farming Village Development',
    description: 'A historical diagram showing land clearing and expansion of a rural settlement.',
    type: 'map',
    questions: [
      {
        id: 'q-map-4-1',
        sentence: 'The old agricultural fields were cleared to make way for a new housing estate.',
        gaps: ['cleared to make way for'],
        highlightId: 'map4-estate',
        explanation: 'Describes the removal of crops or structures to allow building houses.',
        word: 'cleared to make way for',
        definition: 'Removed or demolished to open up space for the construction of something new.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-4-2',
        sentence: 'The historic windmill, which stands on the hill, has been preserved intact.',
        gaps: ['preserved intact'],
        highlightId: 'map4-windmill',
        explanation: 'Indicates the historic windmill was kept exactly in its original condition.',
        word: 'preserved intact',
        definition: 'Kept in its original state, safe from modification, damage, or destruction.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-4-3',
        sentence: 'A pedestrian bridge was built, spanning the river to connect both sectors.',
        gaps: ['spanning the river'],
        highlightId: 'map4-bridge',
        explanation: 'Describes the bridge extending from one bank of the river to the other.',
        word: 'spanning the river',
        definition: 'Extending across a river from one side to the other.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-4-4',
        sentence: 'The local supermarket was constructed on the site of the old barn.',
        gaps: ['on the site of'],
        highlightId: 'map4-supermarket',
        explanation: 'Indicates the supermarket is built where the old barn used to stand.',
        word: 'on the site of',
        definition: 'At the exact location or plot of land where something previously existed.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-4-5',
        sentence: 'Over the decade, the village expanded substantially towards the east.',
        gaps: ['expanded substantially'],
        highlightId: 'map4-estate',
        explanation: 'Highlights the significant growth of the village area eastward.',
        word: 'expanded substantially',
        definition: 'Grew or increased significantly in size, area, or extent.',
        cefr_level: 'B2'
      }
    ]
  },
  {
    id: 'map-5',
    title: 'Hydroelectric Power Station',
    description: 'An industrial process flow diagram depicting how running water generates electricity.',
    type: 'diagram',
    questions: [
      {
        id: 'q-map-5-1',
        sentence: 'Water is held back by the dam wall, forming a reservoir in the valley.',
        gaps: ['forming a reservoir'],
        highlightId: 'map5-reservoir',
        explanation: 'Indicates the pooling of river water to create a large storage lake.',
        word: 'forming a reservoir',
        definition: 'Creating a large natural or artificial lake used as a source of water supply.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-5-2',
        sentence: 'When the control gate is opened, water rushes down the penstock.',
        gaps: ['rushes down the penstock'],
        highlightId: 'map5-gate',
        explanation: 'Refers to water flowing rapidly through the intake pipe due to gravity.',
        word: 'rushes down the penstock',
        definition: 'Flows rapidly downwards through a sloping pipe or channel carrying water to a turbine.',
        cefr_level: 'C2'
      },
      {
        id: 'q-map-5-3',
        sentence: 'The force of the falling water drives the turbine blades, causing them to spin.',
        gaps: ['drives the turbine blades'],
        highlightId: 'map5-turbine',
        explanation: 'Describes the water applying force to spin the turbine rotor.',
        word: 'drives the turbine blades',
        definition: 'Applies force to rotate the vanes or blades of a rotary engine or turbine.',
        cefr_level: 'C1'
      },
      {
        id: 'q-map-5-4',
        sentence: 'The kinetic energy is converted into electricity by a heavy-duty generator.',
        gaps: ['converted into electricity'],
        highlightId: 'map5-generator',
        explanation: 'Explains the conversion of mechanical rotational energy to electric energy.',
        word: 'converted into electricity',
        definition: 'Transformed from kinetic or mechanical energy into electrical energy.',
        cefr_level: 'B2'
      },
      {
        id: 'q-map-5-5',
        sentence: 'The generated power is then transmitted via overhead lines to the national grid.',
        gaps: ['transmitted via overhead lines'],
        highlightId: 'map5-powerlines',
        explanation: 'Describes how electrical current is sent through cables suspended on pylons.',
        word: 'transmitted via overhead lines',
        definition: 'Conveyed or sent along electrical cables suspended high above the ground.',
        cefr_level: 'C1'
      }
    ]
  }
];

const INITIAL_ARTICLES = [
  {
    id: 'art-1',
    title: 'The Rise of Artificial Intelligence in Economic Analysis',
    source: 'The Economist',
    content: 'Modern institutions must acquire a vast amount of data to evaluate market fluctuations. Economists attempt to synthesize these arguments into comprehensive mathematical models. However, there is an innate limitation to our forecasting ability, meaning we must look at variables with closer scrutiny. Some argue that predicting human sentiment is a complex affair.',
    created_at: '2026-06-03T10:00:00.000Z',
    date: '2026-06-03'
  },
  {
    id: 'art-2',
    title: 'Preserving Biodiversity in the Amazon Rainforest',
    source: 'National Geographic',
    content: 'Ecosystems around the globe are facing unprecedented challenges that adversely affect biodiversity. To mitigate these ecological disasters, researchers must evaluate environmental changes with strict scientific rigor. It is innate in nature to adapt, but the speed of climate change is overwhelming native species. Conservationists must synthesize local knowledge with modern technology to protect endangered habitats.',
    created_at: '2026-05-15T14:30:00.000Z',
    date: '2026-05-15'
  },
  {
    id: 'art-3',
    title: 'Constitutional Reform in Developing Democratic States',
    source: 'BBC News',
    content: 'The ruling party was humiliated during the recent election, forcing leaders to reconsider their policies. A major legal affair erupted when the high court began to evaluate the constitutionality of the new administrative reforms. Citizens are demanding that legislators synthesize a new system that respects the innate rights of all ethnic minorities. The government must acquire public trust through transparent actions.',
    created_at: '2026-04-10T09:15:00.000Z',
    date: '2026-04-10'
  },
  {
    id: 'art-4',
    title: 'The Evolution of Scientific Discovery and Paradigm Shifts',
    source: 'Scientific American',
    content: 'When researchers formulate a new hypothesis, they must gather empirical evidence to corroborate their findings. Other scientists will scrutinize the methodology and attempt to refute the claims through independent experiments. If the new data holds true, it can lead to a paradigm shift that changes how we understand the natural world.',
    created_at: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0]
  }
];
// IELTS Speaking Forecast Q2/2026 Prompts Database
const INITIAL_SPEAKING_PROMPTS = [
  { id: "prompt-1", category_id: "people", prompt_text: "Describe a famous person who you would like to meet" },
  { id: "prompt-2", category_id: "people", prompt_text: "Describe a person you know who enjoys helping other people" },
  { id: "prompt-3", category_id: "people", prompt_text: "Describe a person who is good at learning languages" },
  { id: "prompt-4", category_id: "people", prompt_text: "Describe a friend from childhood who you remember very well" },
  { id: "prompt-5", category_id: "people", prompt_text: "Describe a person who has chosen a career in the medical field (e.g. doctor, nurse, vet)" },
  { id: "prompt-6", category_id: "people", prompt_text: "Describe a person you know about who runs a successful business" },
  { id: "prompt-7", category_id: "people", prompt_text: "Describe a person who you think is good at planning things" },
  { id: "prompt-8", category_id: "places", prompt_text: "Describe a place you enjoyed visiting that was very quiet" },
  { id: "prompt-9", category_id: "places", prompt_text: "Describe a city that you have been to and enjoy visiting" },
  { id: "prompt-10", category_id: "places", prompt_text: "Describe a home that you like to visit but did not want to live in" },
  { id: "prompt-11", category_id: "places", prompt_text: "Describe a place in another country where you would like to work for a short time" },
  { id: "prompt-12", category_id: "places", prompt_text: "Describe a place which is far away that you would like to visit in the future" },
  { id: "prompt-13", category_id: "places", prompt_text: "Describe a place you went to on holiday that you would recommend" },
  { id: "prompt-14", category_id: "experiences", prompt_text: "Describe a time you felt proud of something a family member did" },
  { id: "prompt-15", category_id: "experiences", prompt_text: "Describe a time when you were not allowed to use your phone" },
  { id: "prompt-16", category_id: "experiences", prompt_text: "Describe a time you gave advice to someone" },
  { id: "prompt-17", category_id: "experiences", prompt_text: "Describe a time when someone you know found a clever solution to a problem" },
  { id: "prompt-18", category_id: "experiences", prompt_text: "Describe a difficult decision you made that had a good result" },
  { id: "prompt-19", category_id: "experiences", prompt_text: "Describe a time when you had to get up very early" },
  { id: "prompt-20", category_id: "experiences", prompt_text: "Describe an ambition you have had for a long time" },
  { id: "prompt-21", category_id: "experiences", prompt_text: "Describe a time you changed your opinion" },
  { id: "prompt-22", category_id: "experiences", prompt_text: "Describe a time that you had to change your plan/you changed your mind" },
  { id: "prompt-23", category_id: "objects", prompt_text: "Describe a piece of technology you would like to own in the future" },
  { id: "prompt-24", category_id: "objects", prompt_text: "Describe an app or software you often use on your phone or computer" },
  { id: "prompt-25", category_id: "objects", prompt_text: "Describe a problem of technology you have encountered, like a computer or a cell phone" },
  { id: "prompt-26", category_id: "objects", prompt_text: "Describe a traditional product made in your country which you like" },
  { id: "prompt-27", category_id: "objects", prompt_text: "Describe a tall building in your city you like or dislike" },
  { id: "prompt-28", category_id: "activities", prompt_text: "Describe a perfect job you would like to have in the future" },
  { id: "prompt-29", category_id: "activities", prompt_text: "Describe a movie you enjoyed watching" },
  { id: "prompt-30", category_id: "activities", prompt_text: "Describe an occasion when you felt excited about trying an activity for the first time" },
  { id: "prompt-31", category_id: "activities", prompt_text: "Describe a live sport match you have ever watched" },
  { id: "prompt-32", category_id: "activities", prompt_text: "Describe an interesting video you watched in social media" },
  { id: "prompt-33", category_id: "activities", prompt_text: "Describe a story you knew that involves an animal (like in a movie or a book)" }
];

// Initial pre-seeded Modal Subjects (User's starting "vốn")
const INITIAL_MODAL_SUBJECTS = [
  {
    id: "subject-ainil",
    category_id: "people",
    subject_name: "Ainil (Malaysian friend)",
    key_details: [
      "Met in person at a 2025 fan meeting in Vietnam (shared fandom)",
      "Exceptional language skills (fluent in Malay, English, and Chinese)",
      "Gives great advice on language learning and self-study habits"
    ]
  },
  {
    id: "subject-quiet-cafe",
    category_id: "places",
    subject_name: "Quiet River Cafe",
    key_details: [
      "Located near a peaceful river with glassmorphism design",
      "Filled with books and plays soft acoustic instrumental music",
      "Perfect environment for studying and reflection without distractions"
    ]
  }
];

// Initial Storyline topic mapping links
const INITIAL_STORYLINE_MAPPINGS = [
  {
    id: "map-ainil-languages",
    subject_id: "subject-ainil",
    question_id: "prompt-3", // is good at learning languages
    adaptation_note: "Ainil self-studied and successfully mastered English, Malay, and Chinese fluently."
  },
  {
    id: "map-ainil-solution",
    subject_id: "subject-ainil",
    question_id: "prompt-17", // clever solution to a problem
    adaptation_note: "She bridged a communication gap by translating between Chinese and English at a fan meeting."
  },
  {
    id: "map-ainil-visit",
    subject_id: "subject-ainil",
    question_id: "prompt-11", // place to work for short time
    adaptation_note: "I would love to work in Malaysia to visit Ainil and experience local Malay cultures."
  },
  {
    id: "map-ainil-famous",
    subject_id: "subject-ainil",
    question_id: "prompt-1", // famous person to meet
    adaptation_note: "Ainil is a popular language polyglot influencer on YouTube whom I wanted to meet."
  }
];

// Initial Weaved Stories (Visual Narrative connections)
const INITIAL_WEAVED_STORIES = [
  {
    id: "weave-ainil-cafe",
    subject_ids: ["subject-ainil", "subject-quiet-cafe"],
    bridging_sentence: "We met at the *Quiet River Cafe* (our favorite study spot) and *Ainil* translated a complex Chinese text for me."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { INITIAL_FOLDERS, INITIAL_ENTRIES, EXTENDED_DICTIONARY_DB, LISTENING_MAPS_DB, INITIAL_ARTICLES, INITIAL_SPEAKING_PROMPTS, INITIAL_MODAL_SUBJECTS, INITIAL_STORYLINE_MAPPINGS, INITIAL_WEAVED_STORIES };
}


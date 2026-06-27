// Lexicon Vault - Core Vocabulary Database (42 Entries)
// Pre-filled with Cambridge Dictionary-style definitions and IELTS taxonomy classification.

const INITIAL_FOLDERS = [
  { id: 'folder-1', name: 'Law & Policy', color: '#DBCDF0', emoji: '⚖️', description: 'Legislation, judicial processes, constitutional rights, and official regulations.', created_at: new Date().toISOString(), word_count: 8 },
  { id: 'folder-2', name: 'Economics & Statistics', color: '#FAEDCB', emoji: '📈', description: 'Financial theories, trade data, economic policy, market dynamics, and quantitative metrics.', created_at: new Date().toISOString(), word_count: 12 },
  { id: 'folder-3', name: 'Environment & Ecology', color: '#C9E4DE', emoji: '🌱', description: 'Climate change, biodiversity, environmental preservation, ecosystems, and conservation strategies.', created_at: new Date().toISOString(), word_count: 5 },
  { id: 'folder-4', name: 'Academic Writing (Task 2)', color: '#C6DEF1', emoji: '✍️', description: 'Sophisticated vocabulary and idioms tailored for high-scoring IELTS Writing Task 2 responses.', created_at: new Date().toISOString(), word_count: 15 },
  { id: 'folder-5', name: 'Phrasal Verbs & Idioms', color: '#F7D9C4', emoji: '💬', description: 'Common English phrasal verbs and idiomatic expressions for informal or spoken contexts.', created_at: new Date().toISOString(), word_count: 8 },
  { id: 'folder-6', name: 'Maps & Diagrams', color: '#F2C6DE', emoji: '🗺️', description: 'Spatial descriptions, maps, process flowcharts, and technical diagrams.', created_at: new Date().toISOString(), word_count: 0 },
  { id: 'folder-speaking-work-study', name: 'Speaking: Work & Study', color: '#C6DEF1', emoji: '🏫', description: 'Phrasal verbs and colloquial expressions for describing academic pursuits and careers.', created_at: new Date().toISOString(), word_count: 2 },
  { id: 'folder-speaking-leisure-travel', name: 'Speaking: Leisure & Travel', color: '#C9E4DE', emoji: '✈️', description: 'Speaking phrasal verbs for describing vacationing, sightseeing, and hobbies.', created_at: new Date().toISOString(), word_count: 2 },
  { id: 'folder-speaking-relationships', name: 'Speaking: Relationships & Life', color: '#F2C6DE', emoji: '👥', description: 'Phrasal verbs for describing social connections, relatives, and childhood memories.', created_at: new Date().toISOString(), word_count: 2 },
  { id: 'folder-science', name: 'Science & Technology', color: '#DBCDF0', emoji: '🔬', description: 'Vocabulary and collocations related to scientific research, breakthroughs, technology, and paradigm shifts.', created_at: new Date().toISOString(), word_count: 6 }
];

const INITIAL_ENTRIES = [
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.6,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 7,
      ease_factor: 2.8,
      due_date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0], // 5 days out
      repetition_count: 2,
      last_result: 'easy'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 14,
      ease_factor: 2.7,
      due_date: new Date(Date.now() + 86400000 * 12).toISOString().split('T')[0], // 12 days out
      repetition_count: 3,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 7,
      ease_factor: 2.7,
      due_date: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], // 4 days out
      repetition_count: 2,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.4,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 14,
      ease_factor: 2.6,
      due_date: new Date(Date.now() + 86400000 * 10).toISOString().split('T')[0],
      repetition_count: 3,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 30,
      ease_factor: 2.8,
      due_date: new Date(Date.now() + 86400000 * 28).toISOString().split('T')[0],
      repetition_count: 4,
      last_result: 'easy'
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 7,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
      repetition_count: 2,
      last_result: 'good'
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
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 14,
      ease_factor: 2.7,
      due_date: new Date(Date.now() + 86400000 * 11).toISOString().split('T')[0],
      repetition_count: 3,
      last_result: 'good'
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 7,
      ease_factor: 2.6,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 2,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 7,
      ease_factor: 2.6,
      due_date: new Date(Date.now() + 86400000 * 6).toISOString().split('T')[0],
      repetition_count: 2,
      last_result: 'good'
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 14,
      ease_factor: 2.8,
      due_date: new Date(Date.now() + 86400000 * 13).toISOString().split('T')[0],
      repetition_count: 3,
      last_result: 'easy'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 30,
      ease_factor: 2.9,
      due_date: new Date(Date.now() + 86400000 * 29).toISOString().split('T')[0],
      repetition_count: 4,
      last_result: 'easy'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.4,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 14,
      ease_factor: 2.6,
      due_date: new Date(Date.now() + 86400000 * 9).toISOString().split('T')[0],
      repetition_count: 3,
      last_result: 'good'
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
      interval_days: 7,
      ease_factor: 2.5,
      due_date: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0],
      repetition_count: 2,
      last_result: 'good'
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
      interval_days: 30,
      ease_factor: 3.0,
      due_date: new Date(Date.now() + 86400000 * 25).toISOString().split('T')[0],
      repetition_count: 4,
      last_result: 'easy'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 3,
      ease_factor: 2.4,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 1,
      last_result: 'good'
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
      interval_days: 7,
      ease_factor: 2.6,
      due_date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      repetition_count: 2,
      last_result: 'good'
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
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
      due_date: new Date().toISOString().split('T')[0],
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
      interval_days: 1,
      ease_factor: 2.5,
      due_date: new Date().toISOString().split('T')[0],
      repetition_count: 0,
      last_result: null
    },
    date_added: new Date().toISOString(),
    source_context: 'IELTS Writing Task 2 - presenting arguments, claims, or stating positions in essays.',
    collocations: [
      { collocation: 'make an assertion', example: 'The scientist made an assertion that the new compound is completely non-toxic.' },
      { collocation: 'support an assertion', example: 'The researcher gathered substantial statistical data to support his assertion.' }
    ],
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

if (typeof module !== 'undefined') {
  module.exports = { INITIAL_FOLDERS, INITIAL_ENTRIES, EXTENDED_DICTIONARY_DB, LISTENING_MAPS_DB, INITIAL_ARTICLES };
}


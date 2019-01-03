maps["skara"] = {
width:32,
height:32,
x:1,
y:15,
wrap:false,
wrapTile:4,
data:"\
0404040439390404040404040404040404040404040404393937370404040404\
0404043739020202020202020202020202020202020202023937370404040404\
0404393939393939393939050505050505050505050505393937040404040404\
04043902393E3E3E3E3E39050505050505050505050505053704040404040404\
0404040239676471617239053737040437043704370437040404040404040404\
04040402393E3E3E3E3E39370404040404040404040404040404040404043737\
04040402393E3E3E3E3E3E040404040404040404040404040404040404373737\
04040402393E3E3E3E3E39040404040404040404040404040404040437393939\
0404040239393939393939040404040404043704370437043704370505390239\
0404040205050505050537040404040404040505050505050505050505050204\
040404020505050505053704040404040437057F7F7F7F7F7F7F7F7F7F7F0204\
040439023905050537370404040404040437057F7367647B3E3E3B3E3E7F0204\
040439393905373704040404040404040437057F3E3E3E3A3E3E7F7A7A7F0204\
370437043737040404040404040404040404377F686D6D7B3E3E7F7F7F7F0204\
040404040404040404040404040404040404043E3E3E3E3E3E3E3E3E3E7F0204\
0404040404040404040404043D0404040404043E3E3E3E3E3E3E3E3E3E7F0204\
040404040404040404040404040404040404043E3E3E3E3E3E3E3E3E3E7F0204\
370437043704040404040404040404040404377F656E6E637A7A656E717F0204\
040439393937040404040404040404040437057F3E3E3E3E3E3E3E3E3E7F0204\
040439023905370404040404040404040437057F7A73676E746667737A7F0204\
040404020505370404043737040404040437057F7F7F7F7F7F7F7F7F7F7F0204\
0404040205053704043705053704040404040505050505050505050505050204\
0404040205053704043705050504040404043705050505050505050505050204\
040404023939393E3E3939390537040404040404370437043704370505390239\
04040402393E7D3E3E7D38390505040404040404040404040404040437393939\
04040402393E3E3E3E3E3E390505370404040404040404040404040404373737\
04040402393E3E3E3E3E3E390505050537040404040404040404040404043737\
04040402396C7872736862390505050505053704370437040404040404040404\
04043902393E3E3E3E3E3E390505050505050505050505053704040404040404\
04043939396764606B6471390505050505050505050505393937040404040404\
0404043739020202020202020202020202020202020202023937370404040404\
0404040439390404040404040404040404040404040404393937370404040404\
",
folk:[
  {
    "heShe": "He",
    "description": "A small child.",
    "startX": 29,
    "startY": 9,
    "x": 29,
    "y": 9,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Static",
    "responses": {
      "NAME": "Barren",
      "JOB": "No job.",
      "HEAL": "O.K.",
      "MANT": "I know it well,\nit is 'OM'.",
      "A": "A"
    },
    "questions": {}
  },
  {
    "heShe": "She",
    "description": "A grimy beggar.",
    "startX": 11,
    "startY": 3,
    "x": 11,
    "y": 3,
    "tile": 88,
    "prevTile": 88,
    "behaviour": "Static",
    "responses": {
      "NAME": "Ambule",
      "JOB": "I beg for but\nfor a single\ngold piece!",
      "HEAL": "So-so.",
      "BEG": "Oh, please...\nOh, please...",
      "MANT": "Ask the child\nnamed Barren."
    },
    "questions": {
      "BEG ": {
        "text": "Wilt thou please\ngive me a\ngold piece?",
        "yes": "Dear kind soul.",
        "no": "Stingy, I know\nthou hast many!"
      }
    }
  },
  {
    "heShe": "It",
    "description": "A silver ankh.",
    "startX": 12,
    "startY": 15,
    "x": 12,
    "y": 15,
    "tile": 61,
    "prevTile": 61,
    "behaviour": "Static",
    "responses": {
      "NAME": "the Ankh of\nSpirituality",
      "JOB": "I keep the\nsecret of\nthe rune.",
      "HEAL": "Strong.",
      "RUNE": "Mantra?",
      "OM": "Search for\nthe rune of\nspirituality in\nthe treasure\nchamber of\nBritannia!"
    },
    "questions": {
      "OM  ": {
        "text": "Hast thou found\nthe shrine?",
        "yes": "Good!",
        "no": "Enter the gate\nof full moons!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A gallant\nfighter.",
    "startX": 12,
    "startY": 16,
    "x": 12,
    "y": 16,
    "tile": 36,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "White",
      "JOB": "I quest.",
      "HEAL": "Excellent!",
      "QUES": "Many quests are\nvery dangerous!",
      "DANG": "I am not afraid\nof tomorrow; I\nhave seen\nyesterday and I\nlove today."
    },
    "questions": {
      "QUES": {
        "text": "Art thou\nfearless in all\nthing?",
        "yes": "Boastful fool!",
        "no": "Danger is real!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A wise bard.",
    "startX": 13,
    "startY": 15,
    "x": 13,
    "y": 15,
    "tile": 34,
    "prevTile": 34,
    "behaviour": "Static",
    "responses": {
      "NAME": "Dickens",
      "JOB": "I write stories.",
      "HEAL": "O.K.",
      "STOR": "Stories are good\nfor the spirit!",
      "SPIR": "Remember,\nno one is\nuseless in this\nworld who\nlightens the\nburdens of\nothers!"
    },
    "questions": {
      "SPIR": {
        "text": "Art thou good\nin nature?",
        "yes": "Be sure thy net\ngood well\nexceeds thy\nnet evil!",
        "no": "I see."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A wise mage.",
    "startX": 12,
    "startY": 14,
    "x": 12,
    "y": 14,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Carlyle",
      "JOB": "I write magic.",
      "HEAL": "Fine.",
      "MAGI": "One lives by\nbelieving in\nsomething.",
      "BELI": "Great\ndiscoveries are\nmade by those\nwhose feelings\nrun ahead of\ntheir thinking."
    },
    "questions": {
      "JOB": {
        "text": "Dost thou\nbelieve in\nmagic?",
        "yes": "Magic missiles\nneed but 1\npart ash!",
        "no": "I see."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A short dumpy\nman with a book.",
    "startX": 9,
    "startY": 26,
    "x": 9,
    "y": 26,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Romasco",
      "JOB": "I am a teacher,\nI enrich young\nminds.",
      "HEAL": "I am fine.",
      "TEAC": "I teach of\nthe abyss.",
      "WORD": "Seek Zair the\nWise in Paws for\nmore on the\nword."
    },
    "questions": {
      "TEAC": {
        "text": "Know ye of\nthe abyss?",
        "yes": "A word of\npassage is\nneeded at the\nlast gate!",
        "no": "Learn!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A skilled ranger",
    "startX": 26,
    "startY": 15,
    "x": 26,
    "y": 15,
    "tile": 45,
    "prevTile": 44,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Michaelangelo",
      "JOB": "I strive along\nthe path.",
      "HEAL": "Well.",
      "PATH": "Success is a\njourney, not a\ndestination.",
      "JOUR": "May thou always\ndesire more than\nthou can\naccomplish!"
    },
    "questions": {
      "JOB": {
        "text": "Art thou far\nalong the path?",
        "yes": "This is good.",
        "no": "Fear not thou\nshalt be."
      }
    }
  },
  {
    "startX": 6,
    "startY": 10,
    "x": 6,
    "y": 10,
    "tile": 92,
    "prevTile": 92,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 5,
    "startY": 21,
    "x": 5,
    "y": 21,
    "tile": 92,
    "prevTile": 92,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A great\nphilosopher.",
    "startX": 12,
    "startY": 29,
    "x": 12,
    "y": 29,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Buddha",
      "JOB": "I teach.",
      "HEAL": "I am well.",
      "TEAC": "When one has\npity on all\nliving creatures\nthen is one\nnoble.",
      "NOBL": "If one speaks or\nacts with pure\nthought,\nhappiness will\nfollow like a\nshadow that\nnever leaves."
    },
    "questions": {}
  },
  {
    "heShe": "She",
    "description": "A radiant\nranger.",
    "startX": 29,
    "startY": 2,
    "x": 29,
    "y": 2,
    "tile": 45,
    "prevTile": 44,
    "behaviour": "Static",
    "responses": {
      "NAME": "Mitre",
      "JOB": "I am reading the\nwizard's journal.",
      "HEAL": "I am fine.",
      "JOUR": "It tells of the\nwhite stone.",
      "STON": "It is no longer\nin the dungeon\nHythloth, it\nis gone!"
    },
    "questions": {
      "STON": {
        "text": "Wilt thou try to\nrecover it?",
        "yes": "Ask of the stone\nat the Tap in\nTrinsic!",
        "no": "Too bad."
      }
    }
  },
  {
    "heShe": "She",
    "description": "A hungry beggar.",
    "startX": 2,
    "startY": 0,
    "x": 2,
    "y": 0,
    "tile": 89,
    "prevTile": 88,
    "behaviour": "Static",
    "responses": {
      "NAME": "Granted",
      "JOB": "I beg for food\nand money.",
      "HEAL": "I am not\nat all well.",
      "FOOD": "To eat!",
      "MONE": "To buy food!"
    },
    "questions": {
      "MONE": {
        "text": "Wilt thou give\nme food or\nmoney?",
        "yes": "In return I will\ntell thee that\nthe ankh knows\nof the rune and\nmy friend Ambule\nknows the\nmantra!",
        "no": "Jerk!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A very small\nwizard.",
    "startX": 8,
    "startY": 5,
    "x": 8,
    "y": 5,
    "tile": 33,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Presto",
      "JOB": "I cast great\nbig spells!",
      "HEAL": "Superior!",
      "SPEL": "I can cast:\njinx, kill,\nand view!",
      "NIGH": "Yes, ask the\nbarkeep at\n'The Axe-n-Ale'\nin Vesper about\nnightshade."
    },
    "questions": {
      "SPEL": {
        "text": "Dost thou know\nwhat these\nspells have in\ncommon?",
        "yes": "What?",
        "no": "Guess!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A tall ranger.",
    "startX": 22,
    "startY": 16,
    "x": 22,
    "y": 16,
    "tile": 45,
    "prevTile": 44,
    "behaviour": "Static",
    "responses": {
      "NAME": "Santayana",
      "JOB": "I carry the\nlight within my\nheart.",
      "HEAL": "I am alive.",
      "LIGH": "The light of\nphilosophy.",
      "PHIL": "In philosophical\nminds the\nfamiliar excites\nwonder!"
    },
    "questions": {
      "PHIL": {
        "text": "Dost thou always\ntread the right\npath?",
        "yes": "Doubtful!",
        "no": "Few can, but\nstrive to do so!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "An injured man.",
    "startX": 10,
    "startY": 24,
    "x": 10,
    "y": 24,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "Emerson",
      "JOB": "I seek the\nspiritual path.",
      "HEAL": "I am grievously\nwounded.",
      "SPIR": "Spiritual is\nstronger than\nany material\nforce.",
      "WOUN": "Nothing can\nbring thee peace\nbut the triumph\nof principles!"
    },
    "questions": {
      "WOUN": {
        "text": "Art thou good\nin spirit?",
        "yes": "A good path.",
        "no": "An evil path!"
      }
    }
  },
  {
    "startX": 24,
    "startY": 18,
    "x": 24,
    "y": 18,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 21,
    "startY": 12,
    "x": 21,
    "y": 12,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 5,
    "startY": 3,
    "x": 5,
    "y": 3,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 6,
    "startY": 28,
    "x": 6,
    "y": 28,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A solemn ranger.",
    "startX": 10,
    "startY": 15,
    "x": 10,
    "y": 15,
    "tile": 45,
    "prevTile": 44,
    "behaviour": "Static",
    "responses": {
      "NAME": "Shamino",
      "JOB": "I seek the\ninner light.",
      "HEAL": "I am well.",
      "LIGH": "I seek the \"one\ngreat truth\"!",
      "TRUT": "That which\nlies within\nthe codex!"
    },
    "questions": {}
  }
]
};

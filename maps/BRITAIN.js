maps["britain"] = {
width:32,
height:32,
x:1,
y:15,
wrap:false,
wrapTile:4,
data:"\
393939393939393939393939393939397F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F\
397F7F7F7F7F7F7F7F7F7F06060606067F3E3E3E3E3E3E3E7F3E3E7F7D3E3E7F\
397F3E3E3E3E3E3E3E3E7F06060606067F726F68716873727F7F3E3B3E3E3E7F\
397F7664606F6E6D71787F06050506067F3E3E3E3E3E3E3E3E7F3E7F3E7C7A7F\
397F3E3E3E3E3E3E3E3E303E3E3E3E067F3E7D3E7D3E7D3E3E7F3E7F7F7F7F7F\
397F3E3E3E3E3E3E3E3E3E3E3E3E3E057F3E3E3E3E3E3E3E3E7F3E7F3E7C7A7F\
397F3E3E3E3E3E3E3E3E303E3E3E3E047F656E6E637F3E3E3E7F3E3B3E3E3E7F\
397F7A60716C6E74717A7F043E3E3E047F3E3E3E3E7F3E3E3E7F3E7F7D3E3E7F\
397F3E3E3E3E3E3E3E3E7F043E3E3E047F7F7F7F7F7F3E3E3E7F3E7F7F7F7F7F\
397F7F7F7F7F7F7F7F7F7F043E3E3E0405053E3E3E3E3E3E3E3E3E3E3E3E3E7F\
3905040404040404040404043E3E3E0404053E3E3E3E3E3E3E3E3E3E3E3E3E7F\
3905050404040404040404053E3E3E0404053E3E3E3E3E3E3E3E3E3E3E3E3E7F\
3905050504040404040405053E3E3E0405053E3E3E7F61716873606D6D68607F\
3905050505040404040505053E3E3E0505053E3E3E7F3E3E3E3E3E3E3E3E3E7F\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F7A7A6C606D6E717A7A7F\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F7F7F7F7F7F7F7F7F7F7F\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E0437040404040402020239\
390505050404040404043E3E3E05050505040404040404040404020202020239\
390606050505040404043E3E3E05050504040404040404040202020202020239\
390606060605050404043E3E3E05050404040404040404020202020202020539\
7F7F7F7F0606050504043E3E3E05040404040404040402020202020205050539\
7F3E3E7F0606060505043E3E3E04040404040404043702020202040404050539\
7F3E3E7F0606060605053E3E3E04040404040404040202020237040404040539\
7F7F497F7F7F7F7F7F053E3E3E04040404040404041919191904040404040439\
7F383E3E3E3E3E3E303E3E3E3E04040404040404041A1A1A1A04040404040439\
7F7B3E3E3E3E3E3E3E3E3E3E3E04040404040404040202020204040404040439\
7F383E3E3E3E3E3E303E3E3E3E04040404040404020202020404040404040439\
7F7B3E3E3E3E3E7C7F0505370404040404040404020202020404040404040439\
7F3E3E3E3E3E3E3E7F060505040404040404040202020205050404044B040439\
7F6764606B686D667F0606050504040404020202020202050504040404040439\
7F3E3E3E3E3E3E3E7F0606060505040202020202020205050505040404040439\
7F7F7F7F7F7F7F7F7F3939393939393939393939393939393939393939393939\
",
folk:[
  {
    "heShe": "He",
    "description": "A solemn bard.",
    "startX": 1,
    "startY": 21,
    "x": 1,
    "y": 21,
    "tile": 35,
    "prevTile": 34,
    "behaviour": "Static",
    "responses": {
      "NAME": "Julio",
      "JOB": "I seek the\ntrue nature\nof things!",
      "HEAL": "Solemn.",
      "NATU": "All things have\na true nature!",
      "COMP": "Compassion\nderives itself\nfrom unending\nlove!"
    },
    "questions": {
      "NATU": {
        "text": "Dost thou know\nthe true nature\nof all things?",
        "yes": "Thou art a liar\nand a braggart.",
        "no": "No mortal can."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A druid.",
    "startX": 4,
    "startY": 27,
    "x": 4,
    "y": 27,
    "tile": 38,
    "prevTile": 38,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Shapero",
      "JOB": "I am looking\nfor Julio.",
      "HEAL": "All right.",
      "JULI": "He knows the\ntrue nature of\ncompassion.",
      "COMP": "Seek out Julio\nand ask him of\ncompassion!"
    },
    "questions": {
      "JULI": {
        "text": "Art thou on the\nQuest of the\nAvatar?",
        "yes": "Find the shrine\nof compassion\neast across 2\nbridges!",
        "no": "Too bad."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A small child",
    "startX": 14,
    "startY": 29,
    "x": 14,
    "y": 29,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a child",
      "JOB": "I am learning\ncompassion.",
      "HEAL": "O.K.",
      "LEAR": "The solution to\nones problems\noften lies in\nsolving others!",
      "COMP": "Never care so\nmuch for thyself\nthat thou cannot\ncare for others!"
    },
    "questions": {
      "COMP": {
        "text": "Know ye the\nmantra of\ncompassion?",
        "yes": "Good.",
        "no": "Ask Cricket!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A small child",
    "startX": 16,
    "startY": 29,
    "x": 16,
    "y": 29,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a child",
      "JOB": "I am learning\ncompassion.",
      "HEAL": "O.K.",
      "LEAR": "The solution to\nones problems\noften lies in\nsolving others!",
      "COMP": "Never care so\nmuch for thyself\nthat thou cannot\ncare for others!"
    },
    "questions": {
      "COMP": {
        "text": "Know ye the\nmantra of\ncompassion?",
        "yes": "Good.",
        "no": "Ask Cricket!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A small child",
    "startX": 16,
    "startY": 27,
    "x": 16,
    "y": 27,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a child",
      "JOB": "I am learning\ncompassion.",
      "HEAL": "O.K.",
      "LEAR": "The solution to\nones problems\noften lies in\nsolving others!",
      "COMP": "Never care so\nmuch for thyself\nthat thou cannot\ncare for others!"
    },
    "questions": {
      "COMP": {
        "text": "Know ye the\nmantra of\ncompassion?",
        "yes": "Good.",
        "no": "Ask Cricket!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A poor beggar.",
    "startX": 19,
    "startY": 9,
    "x": 19,
    "y": 9,
    "tile": 89,
    "prevTile": 88,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sprite",
      "JOB": "I have no job so\nnow I beg!",
      "HEAL": "I fear I\nshall die of\nstarvation!",
      "STAR": "I have not eaten\nin a week!",
      "BEG": "Please! Help me!"
    },
    "questions": {
      "BEG ": {
        "text": "Wilt thou\nhelp me?",
        "yes": "In return I\nshall tell thee\nthat Pepper\nknows of the\nrune!",
        "no": "I shall starve\nto death!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A tired shepherd",
    "startX": 15,
    "startY": 28,
    "x": 15,
    "y": 28,
    "tile": 46,
    "prevTile": 46,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Shalimar",
      "JOB": "I watch over\nthe children.",
      "HEAL": "Good.",
      "CHIL": "It takes a\ngood deal of\ncompassion to\ndeal with\nchildren!",
      "COMP": "Compassion\nstrengthens the\nsoul as\nknowledge\ntempers the\nmind!"
    },
    "questions": {
      "COMP": {
        "text": "Have any kids?",
        "yes": "Thou dost know\nwhat I mean!",
        "no": "Too bad."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A wise shepherd.",
    "startX": 30,
    "startY": 2,
    "x": 30,
    "y": 2,
    "tile": 46,
    "prevTile": 46,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Mentor",
      "JOB": "I escaped\nMagincia!",
      "HEAL": "I am well.",
      "MAGI": "Pride was too\ngreat in\nMagincia!",
      "PRID": "The city was\ndestroyed by\ndaemons for\nits pride!"
    },
    "questions": {
      "PRID": {
        "text": "Art thou proud?",
        "yes": "That is not\na virtue!",
        "no": "Pride exists\nwithout truth,\nlove, or\ncourage!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A cheerful\nguard.",
    "startX": 14,
    "startY": 4,
    "x": 14,
    "y": 4,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I am a guard\nof course!",
      "HEAL": "I am fully\nhealed.",
      "GUAR": "We guards have\na lot of\ncompassion.",
      "COMP": "We always say:\nLet all others'\ntroubles be as\nthine own!"
    },
    "questions": {
      "COMP": {
        "text": "Dost thou kill\nnon-evil\ncreatures?",
        "yes": "That does not\nshow compassion!",
        "no": "Good."
      }
    }
  },
  {
    "heShe": "He",
    "description": "An injured\nperson.",
    "startX": 1,
    "startY": 26,
    "x": 1,
    "y": 26,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sebastian",
      "JOB": "I know a\nterrible secret!",
      "HEAL": "Not so well.",
      "SECR": "Mondain's\ninfluence has\nnot left the\nworld!",
      "MOND": "An artifact\nremains! I heard\nat Buccaneer's\nDen!"
    },
    "questions": {
      "MOND": {
        "text": "Wilt thou find\nand destroy it?",
        "yes": "Then ask at the\npub there of\nthe skull!",
        "no": "Oh."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A cheerful\nguard.",
    "startX": 1,
    "startY": 17,
    "x": 1,
    "y": 17,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I am a guard\nof course!",
      "HEAL": "I am fully\nhealed.",
      "GUAR": "We guards have\na lot of\ncompassion.",
      "COMP": "We always say:\nLet all others'\ntroubles be as\nthine own!"
    },
    "questions": {
      "COMP": {
        "text": "Dost thou kill\nnon-evil\ncreatures?",
        "yes": "That does not\nshow compassion!",
        "no": "Good."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A cheerful\nguard.",
    "startX": 1,
    "startY": 13,
    "x": 1,
    "y": 13,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I am a guard\nof course!",
      "HEAL": "I am fully\nhealed.",
      "GUAR": "We guards have\na lot of\ncompassion.",
      "COMP": "We always say:\nLet all others'\ntroubles be as\nthine own!"
    },
    "questions": {
      "COMP": {
        "text": "Dost thou kill\nnon-evil\ncreatures?",
        "yes": "That does not\nshow compassion!",
        "no": "Good."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A drunken\nfighter",
    "startX": 20,
    "startY": 3,
    "x": 20,
    "y": 3,
    "tile": 36,
    "prevTile": 36,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Joe",
      "JOB": "Yo ho ho...\nand a bottle...\nof rum...\nhic...",
      "HEAL": "And a bottle\nof...",
      "STON": "The yellow stone\nis in the\ndungeon\nDespise...",
      "RUM": "Rum... hic..."
    },
    "questions": {
      "RUM ": {
        "text": "Give me rum?...",
        "yes": "Thanxth...\nmy friend Joe\ncan help with\nthe stones...\nhic...",
        "no": "Ah, be a joe!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A seasoned\nfighter.",
    "startX": 17,
    "startY": 5,
    "x": 17,
    "y": 5,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Thevel",
      "JOB": "I search for\nthe mystery of\nthe magic orbs.",
      "HEAL": "Fairly well.",
      "ORBS": "A one-handed\nbeggar knows\ntheir secrets!",
      "MAGI": "Magic orbs."
    },
    "questions": {
      "ORBS": {
        "text": "Hast thou\nseen him?",
        "yes": "Only he knows\nthe orb's gift!",
        "no": "Find him in\nSerpent castle\nfor he knows of\norbs!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A drunken\nfighter",
    "startX": 20,
    "startY": 5,
    "x": 20,
    "y": 5,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Joe",
      "JOB": "Yo ho ho...\nand a bottle...\nof rum...\nhic...",
      "HEAL": "And a bottle\nof...",
      "STON": "The yellow stone\nis in the\ndungeon\nDespise...",
      "RUM": "Rum... hic..."
    },
    "questions": {
      "RUM ": {
        "text": "Give me rum?...",
        "yes": "Thanxth...\nmy friend Joe\ncan help with\nthe stones...\nhic...",
        "no": "Ah, be a joe!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A bard in green",
    "startX": 17,
    "startY": 3,
    "x": 17,
    "y": 3,
    "tile": 85,
    "prevTile": 84,
    "behaviour": "Static",
    "responses": {
      "NAME": "Cricket",
      "JOB": "Shhh, I'm\nplaying!",
      "HEAL": "Shhh",
      "SHHH": "Yes, shhh!",
      "MANT": "The mantra for\nthe shrine of\ncompassion\nis 'MU'!"
    },
    "questions": {
      "SHHH": {
        "text": "Now wilt thou\nbe quiet?",
        "yes": "Thanks.",
        "no": "I am going to\ncall the guards!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A drunken\nfighter",
    "startX": 8,
    "startY": 6,
    "x": 8,
    "y": 6,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Joe",
      "JOB": "Yo ho ho...\nand a bottle...\nof rum...\nhic...",
      "HEAL": "And a bottle\nof...",
      "STON": "The yellow stone\nis in the\ndungeon\nDespise...",
      "RUM": "Rum... hic..."
    },
    "questions": {
      "RUM ": {
        "text": "Give me rum?...",
        "yes": "Thanxth...\nmy friend Joe\ncan help with\nthe stones...\nhic...",
        "no": "Ah, be a joe!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A spicy woman.",
    "startX": 4,
    "startY": 4,
    "x": 4,
    "y": 4,
    "tile": 35,
    "prevTile": 34,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Pepper",
      "JOB": "I am a\nfighting bard.",
      "HEAL": "Healthy.",
      "BARD": "Bards know\nmany things.",
      "RUNE": "The rune of\ncompassion lies\nat the end of a\nhall somewhere\nin this towne."
    },
    "questions": {
      "BARD": {
        "text": "Dost thou seek\nsomething?",
        "yes": "What might\nthat be?",
        "no": "Alas, I may have\nbeen able to\nhelp."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 20,
    "startY": 22,
    "x": 20,
    "y": 22,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\nbridge.",
      "HEAL": "Good.",
      "BRID": "Across the\nbridge our\npeople dance\nand sing!",
      "GUAR": "Yep."
    },
    "questions": {
      "BRID": {
        "text": "Would thou like\nto join them?",
        "yes": "Remember, an\nopen heart is\nthe first step\non the path to\nwisdom!",
        "no": "Then you have\nno business\nacross the\nbridge."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 20,
    "startY": 25,
    "x": 20,
    "y": 25,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\nbridge.",
      "HEAL": "Good.",
      "BRID": "Across the\nbridge our\npeople dance\nand sing!",
      "GUAR": "Yep."
    },
    "questions": {
      "BRID": {
        "text": "Would thou like\nto join them?",
        "yes": "Remember, an\nopen heart is\nthe first step\non the path to\nwisdom!",
        "no": "Then you have\nno business\nacross the\nbridge."
      }
    }
  },
  {
    "heShe": "She",
    "description": "a charming\njester",
    "startX": 29,
    "startY": 29,
    "x": 29,
    "y": 29,
    "tile": 86,
    "prevTile": 86,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Gweno",
      "JOB": "I dance and\nsing for the\nchildren.",
      "HEAL": "Very well.",
      "DANC": "Dance is good\nfor the soul.",
      "BEGG": "To give to a\nbeggar shows\ncompassion."
    },
    "questions": {
      "DANC": {
        "text": "Do you give\nto the needy?",
        "yes": "Beggars are\nthankful for\nsmall donations.",
        "no": "Alas."
      }
    }
  },
  {
    "heShe": "The child",
    "description": "a small child",
    "startX": 27,
    "startY": 28,
    "x": 27,
    "y": 28,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Static",
    "responses": {
      "NAME": "a child",
      "JOB": "Singing",
      "HEAL": "Very happy.",
      "SING": "The song goes:\nHo eyo he hum!",
      "HO E": "It means:\nLove to one\nand all!"
    },
    "questions": {
      "HO E": {
        "text": "Do you like\nthe song?",
        "yes": "Then help us\nspread the word!",
        "no": "Too bad."
      }
    }
  },
  {
    "heShe": "The child",
    "description": "a small child",
    "startX": 28,
    "startY": 27,
    "x": 28,
    "y": 27,
    "tile": 90,
    "prevTile": 90,
    "behaviour": "Static",
    "responses": {
      "NAME": "a child",
      "JOB": "Singing",
      "HEAL": "Very happy.",
      "SING": "The song goes:\nHo eyo he hum!",
      "HO E": "It means:\nLove to one\nand all!"
    },
    "questions": {
      "HO E": {
        "text": "Do you like\nthe song?",
        "yes": "Then help us\nspread the word!",
        "no": "Too bad."
      }
    }
  },
  {
    "startX": 26,
    "startY": 13,
    "x": 26,
    "y": 13,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 20,
    "startY": 1,
    "x": 20,
    "y": 1,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 18,
    "startY": 7,
    "x": 18,
    "y": 7,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 5,
    "startY": 8,
    "x": 5,
    "y": 8,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 5,
    "startY": 2,
    "x": 5,
    "y": 2,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "The child",
    "description": "a small child",
    "startX": 29,
    "startY": 28,
    "x": 29,
    "y": 28,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Static",
    "responses": {
      "NAME": "a child",
      "JOB": "Singing",
      "HEAL": "Very happy.",
      "SING": "The song goes:\nHo eyo he hum!",
      "HO E": "It means:\nLove to one\nand all!"
    },
    "questions": {
      "HO E": {
        "text": "Do you like\nthe song?",
        "yes": "Then help us\nspread the word!",
        "no": "Too bad."
      }
    }
  },
  {
    "startX": 4,
    "startY": 30,
    "x": 4,
    "y": 30,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "Charming bard",
    "startX": 28,
    "startY": 29,
    "x": 28,
    "y": 29,
    "tile": 84,
    "prevTile": 84,
    "behaviour": "Static",
    "responses": {
      "NAME": "Iolo",
      "JOB": "I play for\nthe people.",
      "HEAL": "Good.",
      "PLAY": "I play my lute\nand receive the\ngood wishes of\nthe people.",
      "COMP": "If you treat\nsomeone else\nwell then they\nwill have reason\nto do the same."
    },
    "questions": {
      "PLAY": {
        "text": "Do you like\nmy music?",
        "yes": "I would\njoin thee!",
        "no": "A shame."
      }
    }
  }
]
};

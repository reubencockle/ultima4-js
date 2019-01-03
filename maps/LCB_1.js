maps["lcb_1"] = {
width:32,
height:32,
x:15,
y:30,
wrap:false,
wrapTile:4,
up:"lcb_2",
data:"\
7F7F7F7D7F7F7F06060604040404040404040404040404047F7F7F7D7F7F7F04\
7F3E3E3E3E3E7F7F7F0606040404040404040404040404067F3E3E3E3E3E7F04\
7F3E3E3E3E3E7F1C3A060606040404040404040404040606493E3E3E3E3E7F04\
7D3E3E1B3E3E7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F3E3E1B3E3E7D04\
7F3E3E3E3E3E7F3E3E3E3E3E493E3E3E3E3C7F76607364717F3E3E3E3E3E7F04\
7F3E3E3E3E3E7F3E7C7A7B3E7F3E3E3E3C3C7F3E3E3E3E3E3B3E3E3E3E3E7F04\
7F7F7F7F3E3E7F3E3E3E3E3E7F3E3E3C3C3C7F3E3E3E3E3E7F7F497F7F7F7F04\
0606067F3E3E3B3E3E3E3E3E7F3E3C3C3C3C7F3E3E3E3E3E7F3E3E7F06060604\
0406067F3E3E7F7B3E3E7C7A7F3C3C3C3C3C7F3E0202023E7F3E3E7F06060404\
0404067F3E3E7F3E3E3E3E3E7F7F7F7F7F7F7F02020102027F3E3E7F06040404\
0404047F3E3E7F7B3E3E7C7A7F48484848487F01010001017F3E3E7F04040404\
0404047F3E3E7F3E3E3E3E3E7F48330234487F01000000017F3E3E4904040404\
0404047F3E3E7F7F7F7F7F7F7F33023D02347F7F7F7F7F7F7F3E3E7F04040404\
0404047F3E3E7F02020202027D02020202027D02020202027F3E3E7F04040404\
0404047F3E3E7F3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F497F7F04040404\
0404047F3E3E3B3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3B3E3E7F04040404\
0404047F3E3E7F3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F3E3E7F04040404\
0404047F3E3E7F02020202027D3E3E3E3E3E7D02020202027F3E3E7F04040404\
0404047F3E3E7F7F7F7F7F7F7F303E3E3E307F7F7F7F7F7F7F3E3E7F04040404\
0404047F3E3E3B1616167F7F3E3E3E3E3E3E3E7F3E3E3E3E3B3E3E7F04040404\
0404047F3E3E7F7F47477F7F3E303E3E3E303E7F7B3E3E7C7F3E3E7F04040404\
0404047F3E3E7F474747477F3E3E3E3E3E3E3E7F3E3E3E3E7F3E3E7F04040404\
0404067F3E3E7F474747477F3E303E3E3E303E7F7B3E3E7C7F3E3E7F06040404\
0406067F3E3E7F474747477F3E3E3E3E3E3E3E7F3E3E3E3E7F3E3E7F06060404\
0606067F3E3E7F161616167F3E303E3E3E303E7F7B3E3E7C7F3E3E7F06060604\
7F7F7F7F3E3E7F726464717F3E3E3E3E3E3E3E7F3E3E3E3E7F3E3E7F7F7F7F04\
7F3E3E3E3E3E7F3D16163D7F3E303E3E3E303E7F6764606B7F3E3E3E3E3E7F04\
7F3E3E3E3E3E7F161616167F3E3E3E3E3E3E3E7F3E3E3E3E7F3E3E3E3E3E7F04\
7D3E3E303E3E7F7F7F7F7F7F7F7F3E3E3E7F7F7F7F7F7F7F7F3E3E303E3E7D04\
7F3E3E3E3E3E7F050504370505053E3E3E050505040505057F3E3E3E3E3E7F04\
7F3E3E3E3E3E7F050437040405053E3E3E050504040437057F3E3E3E3E3E7F04\
7F7F7F7D7F7F7F040404040404053E3E3E050404370404047F7F7F7D7F7F7F04\
",
folk:[
  {
    "heShe": "He",
    "description": "A wise mage.",
    "startX": 28,
    "startY": 24,
    "x": 28,
    "y": 24,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Joshua",
      "JOB": "I can help.",
      "HEAL": "Well.",
      "HELP": "The riddle!",
      "RIDD": "If the eight\nphilosophies of\navatarhood\ncombine into and\nare made from\ntruth, love\n& courage..."
    },
    "questions": {
      "RIDD": {
        "text": "More?",
        "yes": "What one thing\ncreates and is\ncreated by all\ntruths, all love\n& all courage?",
        "no": "Oh."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A grim shepherd",
    "startX": 15,
    "startY": 2,
    "x": 15,
    "y": 2,
    "tile": 47,
    "prevTile": 46,
    "behaviour": "Static",
    "responses": {
      "NAME": "Landri",
      "JOB": "I am here\nto warn thee!",
      "HEAL": "I am fine, but\nthou must\ngo back!",
      "WARN": "Ahead lies a\nperilous place!",
      "PERI": "Once thou enters\nthou may not\nreturn whence\nthee came!"
    },
    "questions": {
      "PERI": {
        "text": "Wilt thou go on?",
        "yes": "Then thou art\ndoomed!",
        "no": "That is good."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 9,
    "startY": 4,
    "x": 9,
    "y": 4,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "A guard",
      "HEAL": "Excellent",
      "GUAR": "We guard the\ncastle and its\ntreasures.",
      "TREA": "That is not\nyour business."
    },
    "questions": {
      "TREA": {
        "text": "Do you mean\nto steal?",
        "yes": "I believe you\nwill find that\nan unfruitful\nventure.",
        "no": "Then please\nleave at once!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 17,
    "startY": 17,
    "x": 17,
    "y": 17,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 13,
    "startY": 17,
    "x": 13,
    "y": 17,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 28,
    "startY": 29,
    "x": 28,
    "y": 29,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A solemn ranger",
    "startX": 22,
    "startY": 24,
    "x": 22,
    "y": 24,
    "tile": 44,
    "prevTile": 44,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Sheila",
      "JOB": "I search for\nthe inner light.",
      "HEAL": "I am well.",
      "LIGH": "Seek inner light\nin the shrines!",
      "SHRI": "Runes are needed\nto enter\nshrines!"
    },
    "questions": {
      "SHRI": {
        "text": "Dost thou know\nof mantra?",
        "yes": "Good.",
        "no": "The mantra are\nchants needed\nto\nfocus thy\nthoughts while\nmeditating."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 7,
    "startY": 9,
    "x": 7,
    "y": 9,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "A guard",
      "HEAL": "Excellent",
      "GUAR": "We guard the\ncastle and its\ntreasures.",
      "TREA": "That is not\nyour business."
    },
    "questions": {
      "TREA": {
        "text": "Do you mean\nto steal?",
        "yes": "I believe you\nwill find that\nan unfruitful\nventure.",
        "no": "Then please\nleave at once!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 7,
    "startY": 11,
    "x": 7,
    "y": 11,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "A guard",
      "HEAL": "Excellent",
      "GUAR": "We guard the\ncastle and its\ntreasures.",
      "TREA": "That is not\nyour business."
    },
    "questions": {
      "TREA": {
        "text": "Do you mean\nto steal?",
        "yes": "I believe you\nwill find that\nan unfruitful\nventure.",
        "no": "Then please\nleave at once!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 11,
    "startY": 11,
    "x": 11,
    "y": 11,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "A guard",
      "HEAL": "Excellent",
      "GUAR": "We guard the\ncastle and its\ntreasures.",
      "TREA": "That is not\nyour business."
    },
    "questions": {
      "TREA": {
        "text": "Do you mean\nto steal?",
        "yes": "I believe you\nwill find that\nan unfruitful\nventure.",
        "no": "Then please\nleave at once!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A guard",
    "startX": 11,
    "startY": 9,
    "x": 11,
    "y": 9,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "A guard",
      "HEAL": "Excellent",
      "GUAR": "We guard the\ncastle and its\ntreasures.",
      "TREA": "That is not\nyour business."
    },
    "questions": {
      "TREA": {
        "text": "Do you mean\nto steal?",
        "yes": "I believe you\nwill find that\nan unfruitful\nventure.",
        "no": "Then please\nleave at once!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 2,
    "startY": 2,
    "x": 2,
    "y": 2,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 4,
    "startY": 27,
    "x": 4,
    "y": 27,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A bouncing\njester",
    "startX": 15,
    "startY": 23,
    "x": 15,
    "y": 23,
    "tile": 86,
    "prevTile": 86,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Chuckles",
      "JOB": "I am the royal\njester",
      "HEAL": "Good, thanks.",
      "JEST": "Welcome unto\nthe castle\nBritannia!",
      "CLUE": "Speak ye unto\nthe waters of\nthe well and ask\nof altars!"
    },
    "questions": {
      "JEST": {
        "text": "Hast thou\nan ankh?",
        "yes": "Then enter\nin peace!",
        "no": "Then why art\nthou here?"
      }
    }
  },
  {
    "heShe": "She",
    "description": "An injured\nfighter",
    "startX": 20,
    "startY": 21,
    "x": 20,
    "y": 21,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "Seesha",
      "JOB": "I fight for\nmy country.",
      "HEAL": "I have a\ngrievous wound.",
      "WOUN": "Deep.",
      "COUN": "Britannia."
    },
    "questions": {
      "COUN": {
        "text": "Fight ye for\nBritannia?",
        "yes": "Then seek out\nthe smith named\nZircon in Minoc\nfor he made the\nmystic arms,\nonly they will\nsave thee in the\nabyss!",
        "no": "Hmm."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 29,
    "startY": 5,
    "x": 29,
    "y": 5,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A shepherdess\nboth strong\nand beautiful.",
    "startX": 21,
    "startY": 5,
    "x": 21,
    "y": 5,
    "tile": 47,
    "prevTile": 46,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Shawn",
      "JOB": "I watch\nthe water.",
      "HEAL": "Well.",
      "WATE": "It brings\nme peace.",
      "PEAC": "I come from\na proud city."
    },
    "questions": {
      "PEAC": {
        "text": "Art thou proud?",
        "yes": "Hmmm.",
        "no": "My towne was\ndestroyed for\nits pride. The\nruins lie on an\nisle at lat-K'J\"\nlong-L'L\"!"
      }
    }
  },
  {
    "heShe": "It",
    "description": "Water",
    "startX": 21,
    "startY": 8,
    "x": 21,
    "y": 8,
    "tile": 2,
    "prevTile": 2,
    "behaviour": "Static",
    "responses": {
      "NAME": "Water",
      "JOB": "I hold a secret.",
      "HEAL": "Fine.",
      "SECR": "To what?",
      "ALTA": "There are three\naltar rooms\nwhich connect\nthe bottom\nlevels of all\neight dungeons!"
    },
    "questions": {}
  },
  {
    "startX": 21,
    "startY": 27,
    "x": 21,
    "y": 27,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 9,
    "startY": 27,
    "x": 9,
    "y": 27,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 17,
    "startY": 29,
    "x": 17,
    "y": 29,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A burly guard",
    "startX": 13,
    "startY": 29,
    "x": 13,
    "y": 29,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "I guard the\ncastle and all\nwithin.",
      "HEAL": "Couldn't be\nbetter!",
      "GUAR": "I guard the\ncastle!",
      "CAST": "The castle is\nfair and strong!"
    },
    "questions": {
      "CAST": {
        "text": "Do you seek\nLord British?",
        "yes": "He is on the\nupper level in\nthe throne room.",
        "no": "He will aid\nyou if you\nare in need!"
      }
    }
  }
]
};

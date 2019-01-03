maps["lycaeum"] = {
width:32,
height:32,
x:1,
y:15,
wrap:false,
wrapTile:4,
data:"\
7F7F7F7F7F7F7F7F7F050404040404057F7F7F7F7F7F7F7F7F7F7F7F7F7E7E7E\
7F6B6861716071787F050504040405057F7A61716873606D6D68607A7F7E7E7E\
7F161616161616167F7F7F7F7F7F7F7F7F16161616161616161616167F7E7E7E\
7F7A607B167C6D7A7F05053E3E3E3E3E3B1616161616167C7A7A7A7A7A7A7A7E\
7F161616161616167F053E3E3E3E3E057F16161616161616161616167F7E7E7E\
7F7A647B167C717A7F3E3E3E3E3E05057F6E617264717560736E71787F7E7E7E\
7F161616161616167F3E3E3E7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7E7E7E\
7F7A687B167C757A7F3E3E3E7F716E617A616473677F3C3E3C3C3C3C7F040404\
7F161616161616167F3E3E3E7F3E3E3E3E3E3E3E3E493E3E3E3C3C3C7F040404\
7F7F7F7F3E7F7F7F7F3E3E3E7F3E3E7C7A7A7B3E3E7F3C3C3E3E3C3C7F040404\
0505057F3E3E3E3E7F3E3E3E7F3E3E7D3E3E7D3E3E7F7F7F7F7F7F7F7F040404\
0405057F3E3E3E3E7F3E3E3E7F3E3E3E3E3E3E3E3E7F3E3E3E3E3E3E7F040404\
0404057F3E3E3E3E3A3E3E3E7F3E3E3E3E3E3E3E3E7F6764606B64717F040404\
0404047F3E3E3E3E7F3E3E3E7F3E3E3E3E3E3E3E3E7F3E3E3E3E3E3E7F040404\
0404047F3E3E3E3E7F3E3E3E7F053E3E3E3E3E3E057F3E3E3E3E3E3E7F040404\
0404047F3E3E3E3E7F3E3E3E7F05053E3E3E3E05057F3E3E3E3E3E3E7F040404\
0404047F7F7F7F7F7F3E3E3E7F7F7F7F3E3E7F7F7F7F7F7F3E3E7F7F7F040404\
0404047F05053E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F04040404\
0404047F053E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F04040404\
0404047F3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E7F04040404\
0404047F3E3E3E7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F7F3E3E3E7F04040404\
0404047F3E3E3E02020202027F3E3E3E3E3E7F02020202023E3E3E7F04040404\
0404057F3E3E3E02020202027F3E303E303E7F02020202023E3E3E7F05040404\
0405057F3E3E3E3F3F3F3F3F3F3E3E3E3E3E3F3F3F3F3F3F3E3E3E7F05050404\
0505057F3E3E3E3F3F3F3F3F3F3E3E3E3E3E3F3F3F3F3F3F3E3E3E7F05050504\
7F7F7F7F3E3E3E3F3F3F3F3F3F3E3E3E3E3E3F3F3F3F3F3F3E3E3E7F7F7F7F04\
7F3E3E3E3E3E3E02020202027F3E3E3E3E3E7F02020202023E3E3E3E3E3E7F04\
7F3E3E3E3E3E3E02020202027F3E3E3E3E3E7F02020202023E3E3E3E3E3E7F04\
7F3E3E303E3E7F7F7F7F7F7F7F3E3E3E3E3E7F7F7F7F7F7F7F3E3E303E3E7F04\
7F3E3E3E3E3E7F0505050405053E3E3E3E3E0505040505057F3E3E3E3E3E7F04\
7F3E3E3E3E3E7F0505040404053E3E3E3E3E0504040405057F3E3E3E3E3E7F04\
7F7F7F7F7F7F7F0504040404043E3E3E3E3E0404040404057F7F7F7F7F7F7F04\
",
folk:[
  {
    "heShe": "He",
    "description": "A pitiful beggar",
    "startX": 7,
    "startY": 29,
    "x": 7,
    "y": 29,
    "tile": 89,
    "prevTile": 88,
    "behaviour": "Static",
    "responses": {
      "NAME": "Shylock the Meek",
      "JOB": "I sit and beg\noh... please...",
      "HEAL": "I am cold\nand sick!\noh... please...",
      "BEG": "Yes, please\ngive me money!\noh... please...",
      "SICK": "I have the\nblack plague!"
    },
    "questions": {
      "HEAL": {
        "text": "Wilt thou\nhelp me?\nOh... please...",
        "yes": "Oh... please...",
        "no": "Oh... please..."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A noble wizard",
    "startX": 29,
    "startY": 29,
    "x": 29,
    "y": 29,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Nigel, at thy\nservice.",
      "JOB": "I teach magical\nspells.",
      "HEAL": "Good enough.",
      "SPEL": "I have a\nspecialty!",
      "RECA": "Yes,\nresurrection\nit takes: ash,\nginseng, garlic,\nsilk, bloodmoss,\nand mandrake!"
    },
    "questions": {
      "SPEL": {
        "text": "Dost thou know\nwhat it is?",
        "yes": "What do I call\nthe spell?",
        "no": "Sorry."
      }
    }
  },
  {
    "heShe": "She",
    "description": "A strong guard.",
    "startX": 23,
    "startY": 7,
    "x": 23,
    "y": 7,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Catriona",
      "JOB": "To watch the\ntreasures.",
      "HEAL": "Very good.",
      "TREA": "The treasures\nare of great\nvalue!",
      "VALU": "Yes, much gold."
    },
    "questions": {
      "VALU": {
        "text": "Dost thou intend\nto steal?",
        "yes": "I shan't stop\nthee",
        "no": "Good, you had\nme worried!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A flighty jester",
    "startX": 14,
    "startY": 12,
    "x": 14,
    "y": 12,
    "tile": 86,
    "prevTile": 86,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Zajac",
      "JOB": "To entertain!",
      "HEAL": "Unhappy.",
      "ENTE": "Ah, not now.",
      "UNHA": "Because my\nfriend Chuckles\nwon't tell me\nhis secret!"
    },
    "questions": {
      "UNHA": {
        "text": "Dost thou know\nchuckles?",
        "yes": "Why dost thou\nnot ask him for\nhis clue!",
        "no": "He lives in\nthe castle\nBritannia ask\nhim of his clue!"
      }
    }
  },
  {
    "startX": 26,
    "startY": 17,
    "x": 26,
    "y": 17,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "An injured\nwarrior.",
    "startX": 27,
    "startY": 15,
    "x": 27,
    "y": 15,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "a fighter",
      "JOB": "None now!",
      "HEAL": "My wounds are\ngrievous!",
      "WARR": "No more!",
      "WOUN": "I lost in a\ndungeon altar\nroom!"
    },
    "questions": {
      "WOUN": {
        "text": "Hast thou\nseen one?",
        "yes": "Notice that\neach of the\nthree rooms\nconnect to four\ndungeons each!",
        "no": "They connect the\ndungeons unto\neach other!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "An injured\nwarrior.",
    "startX": 27,
    "startY": 13,
    "x": 27,
    "y": 13,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "a fighter",
      "JOB": "None now!",
      "HEAL": "My wounds are\ngrievous!",
      "WARR": "No more!",
      "WOUN": "I lost in a\ndungeon altar\nroom!"
    },
    "questions": {
      "WOUN": {
        "text": "Hast thou\nseen one?",
        "yes": "Notice that\neach of the\nthree rooms\nconnect to four\ndungeons each!",
        "no": "They connect the\ndungeons unto\neach other!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "An injured\nwarrior.",
    "startX": 22,
    "startY": 15,
    "x": 22,
    "y": 15,
    "tile": 56,
    "prevTile": 56,
    "behaviour": "Static",
    "responses": {
      "NAME": "a fighter",
      "JOB": "None now!",
      "HEAL": "My wounds are\ngrievous!",
      "WARR": "No more!",
      "WOUN": "I lost in a\ndungeon altar\nroom!"
    },
    "questions": {
      "WOUN": {
        "text": "Hast thou\nseen one?",
        "yes": "Notice that\neach of the\nthree rooms\nconnect to four\ndungeons each!",
        "no": "They connect the\ndungeons unto\neach other!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A person lost\nin thought.",
    "startX": 4,
    "startY": 27,
    "x": 4,
    "y": 27,
    "tile": 45,
    "prevTile": 44,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a truth\nseeker.",
      "JOB": "I seek to\nknow truth.",
      "HEAL": "I am in a\nmeditative\nstate.",
      "TRUT": "The principle\nupon which I\nmeditate.",
      "MEDI": "Meditate at each\nshrine for 1, 2\nand 3 minutes,\nthen shalt thou\nknow the paths\nof goodness!"
    },
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A person lost\nin thought.",
    "startX": 2,
    "startY": 27,
    "x": 2,
    "y": 27,
    "tile": 43,
    "prevTile": 42,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a truth\nseeker.",
      "JOB": "I seek to\nknow truth.",
      "HEAL": "I am in a\nmeditative\nstate.",
      "TRUT": "The principle\nupon which I\nmeditate.",
      "MEDI": "Meditate at each\nshrine for 1, 2\nand 3 minutes,\nthen shalt thou\nknow the paths\nof goodness!"
    },
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A person lost\nin thought.",
    "startX": 2,
    "startY": 29,
    "x": 2,
    "y": 29,
    "tile": 39,
    "prevTile": 38,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a truth\nseeker.",
      "JOB": "I seek to\nknow truth.",
      "HEAL": "I am in a\nmeditative\nstate.",
      "TRUT": "The principle\nupon which I\nmeditate.",
      "MEDI": "Meditate at each\nshrine for 1, 2\nand 3 minutes,\nthen shalt thou\nknow the paths\nof goodness!"
    },
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A person lost\nin thought.",
    "startX": 4,
    "startY": 29,
    "x": 4,
    "y": 29,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Wander",
    "responses": {
      "NAME": "a truth\nseeker.",
      "JOB": "I seek to\nknow truth.",
      "HEAL": "I am in a\nmeditative\nstate.",
      "TRUT": "The principle\nupon which I\nmeditate.",
      "MEDI": "Meditate at each\nshrine for 1, 2\nand 3 minutes,\nthen shalt thou\nknow the paths\nof goodness!"
    },
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A stately wizard",
    "startX": 15,
    "startY": 23,
    "x": 15,
    "y": 23,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Tymus",
      "JOB": "To welcome thee!",
      "HEAL": "Very well,\nthanks!",
      "WELC": "Yes, welcome to\nthe Lycaeum, the\nkeep of truth!",
      "FOUR": "The dungeon\naltar rooms need\n4 stones each!"
    },
    "questions": {
      "WELC": {
        "text": "Know ye how many\ncities follow\nthe principles\nof truth?",
        "yes": "How many?",
        "no": "Travel and\nlearn!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A short druid",
    "startX": 3,
    "startY": 2,
    "x": 3,
    "y": 2,
    "tile": 38,
    "prevTile": 38,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Estro",
      "JOB": "Research",
      "HEAL": "Why I am fine,\nyou too I hope.",
      "REAS": "I am looking for\nthe book of\njustice!",
      "JUST": "It must be here\nsomewhere!"
    },
    "questions": {
      "JUST": {
        "text": "Hast thou never\ncommitted *any*\ncrime!?",
        "yes": "I believe thou\nart boasting\na lie!",
        "no": "Then speak to\nthe judge in\nYew!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A tall agile man",
    "startX": 6,
    "startY": 14,
    "x": 6,
    "y": 14,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Lord Terence",
      "JOB": "I am the\nlibrarian.",
      "HEAL": "I am well.",
      "LIBR": "Herein is the\nlargest store\nof knowledge in\nBritannia except\nthe codex!",
      "TRUT": "Look under 't'"
    },
    "questions": {
      "LIBR": {
        "text": "Art thou looking\nfor a particular\nbook?",
        "yes": "Which book?",
        "no": "Feel free\nto browse."
      }
    }
  },
  {
    "startX": 24,
    "startY": 27,
    "x": 24,
    "y": 27,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 6,
    "startY": 27,
    "x": 6,
    "y": 27,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 25,
    "startY": 11,
    "x": 25,
    "y": 11,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A tall mage\nwearing strange\narmour.",
    "startX": 19,
    "startY": 11,
    "x": 19,
    "y": 11,
    "tile": 33,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Scatu",
      "JOB": "I advise.",
      "HEAL": "Well!",
      "ADVI": "Thou would be\nwell advised to\nvisit the Seer\noften!",
      "ARMO": "I wear\nmystic armour."
    },
    "questions": {
      "ARMO": {
        "text": "Art thou a\npartial avatar?",
        "yes": "When thou art 8\nparts avatar,\nseek Zircon in\nMinoc and ask of\nmystics!",
        "no": "Alas."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A brawny guard.",
    "startX": 18,
    "startY": 15,
    "x": 18,
    "y": 15,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "Jon",
      "JOB": "I guard the\nthrone room.",
      "HEAL": "Bit tired.",
      "THRO": "Throne of truth!",
      "TRUT": "There are four\ntownes that\nfollow the\nprinciple of\ntruth."
    },
    "questions": {
      "TRUT": {
        "text": "Know which?",
        "yes": "Good!",
        "no": "There are\neight possible\ncombinations of\nthe three\nprinciples,\nthere are eight\ncities!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A brawny guard.",
    "startX": 15,
    "startY": 15,
    "x": 15,
    "y": 15,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "Jon",
      "JOB": "I guard the\nthrone room.",
      "HEAL": "Bit tired.",
      "THRO": "Throne of truth!",
      "TRUT": "There are four\ntownes that\nfollow the\nprinciple of\ntruth."
    },
    "questions": {
      "TRUT": {
        "text": "Know which?",
        "yes": "Good!",
        "no": "There are\neight possible\ncombinations of\nthe three\nprinciples,\nthere are eight\ncities!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "An old druid,\nwho looks\nstrangely\nfamiliar.",
    "startX": 10,
    "startY": 4,
    "x": 10,
    "y": 4,
    "tile": 38,
    "prevTile": 38,
    "behaviour": "Static",
    "responses": {
      "NAME": "Father Antos",
      "JOB": "I hold great\nknowledge.",
      "HEAL": "Old and frail,\nI've seen many\nquests!",
      "KNOW": "What is it\nyou seek?",
      "BOOK": "Seek ye the book\nof truth where\nother books lie."
    },
    "questions": {
      "HEAL": {
        "text": "Art thou on\nthe quest?",
        "yes": "May thou\nsucceed!",
        "no": "Oh."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A wise old sage",
    "startX": 21,
    "startY": 2,
    "x": 21,
    "y": 2,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Palamar",
      "JOB": "I am an old\nwizard, but have\nmuch to show!",
      "HEAL": "My bones ache\nbut my mind\nis sharp!",
      "SHOW": "Here in my\ntelescope!",
      "TELE": "Search there by\nthe end, thou\nshalt find\na knob."
    },
    "questions": {
      "TELE": {
        "text": "Dost thou\nsee where?",
        "yes": "Set the dial and\nthou shalt see!",
        "no": "Look!!!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A sleepy guard",
    "startX": 17,
    "startY": 28,
    "x": 17,
    "y": 28,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "Guard the gate,\nguard the baron,\nguard the\nbaroness, watch\nthe towers....",
      "HEAL": "Very sleepy.",
      "GUAR": "I have been here\nfor hours!",
      "HOUR": "Yes, many hours!"
    },
    "questions": {
      "HOUR": {
        "text": "See why\nI'm tired?",
        "yes": "It's hard work\nand long hours\nin the baronial\nguard!",
        "no": "Bum!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A sleepy guard",
    "startX": 13,
    "startY": 28,
    "x": 13,
    "y": 28,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "a guard",
      "JOB": "Guard the gate,\nguard the baron,\nguard the\nbaroness, watch\nthe towers....",
      "HEAL": "Very sleepy.",
      "GUAR": "I have been here\nfor hours!",
      "HOUR": "Yes, many hours!"
    },
    "questions": {
      "HOUR": {
        "text": "See why\nI'm tired?",
        "yes": "It's hard work\nand long hours\nin the baronial\nguard!",
        "no": "Bum!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A charming lady",
    "startX": 17,
    "startY": 10,
    "x": 17,
    "y": 10,
    "tile": 31,
    "prevTile": 31,
    "behaviour": "Static",
    "responses": {
      "NAME": "Beth Frasier",
      "JOB": "I rule with\nmy Lord.",
      "HEAL": "Well.",
      "RULE": "This province.",
      "PROV": "Our people\nbelieve in truth\nas a way of life\nand live it to\nthe fullest!"
    },
    "questions": {
      "PROV": {
        "text": "Dost thou\nseek truth?",
        "yes": "Then may thou\nfind it!",
        "no": "Then thou shalt\nnot find it!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A stately baron",
    "startX": 16,
    "startY": 10,
    "x": 16,
    "y": 10,
    "tile": 31,
    "prevTile": 31,
    "behaviour": "Static",
    "responses": {
      "NAME": "Robert Frasier",
      "JOB": "I rule this\nprovince.",
      "HEAL": "Very well.",
      "PROV": "My Lady Beth can\ntell thee more!",
      "WORD": "I know but\none of three\nsyllables."
    },
    "questions": {
      "WORD": {
        "text": "Dost thou wish\nto know it now?",
        "yes": "It is 'ver'! Seek\nye now the\nother parts!",
        "no": "Perhaps\nanother time."
      }
    }
  }
]
};

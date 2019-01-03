maps["paws"] = {
width:32,
height:32,
x:1,
y:15,
wrap:false,
wrapTile:4,
data:"\
3939393939393939393939393939393939393939393939393939393939393939\
3904040404040404040404040404040404040404040505050505050505050539\
390404047F7F7F7F7F7F7F7F04040404040404047F7F7F7F7F7F7F7F05050539\
3904047F7F3E3E3E3E3E3E7F7F7F7F7F7F7F7F7F7F656E6B6B64787F7F050539\
3904047F7F60716C6E74717F7F47457C7B45477F3E3E3E3E3E3E3E3E7F050539\
3904047F7D3E3E3E3E3E3E7D7F443E3E3E3E447F7A73607564716D7A7F050539\
3904047F3E3E3E3E3E3E3E3E493E3E3E3E3E3E7F3E3E3E3E3E3E3E3E7F050439\
3904047F7A7B3E3E3E3E7C7A7F6C60666862727F7A7B3E3E3E3E7C7A7F050439\
3904047F7F3E3E3E3E3E3E7F7F3E3E3E3E3E3E7F3E3E3E3E3E3E3E3E7F040439\
3904047F7F7F3E3E3E3E7F7F7F7F7F7F7F7F7F7F7A7B3E3E3E3E7C7A7F040439\
3904040405053E3E3E3E0505040404040505057F7F7F7F3E3E7F7F7F7F040439\
390404040405053E3E05050404040404040405050505053E3E05050504040439\
390404040405053E3E05050404040404040404040505053E3E05050404040439\
390404040505053E3E05050504040404040404040404053E3E05040404040439\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E\
3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E3E\
390404040505053E3E0505050404040404040404040404040404040404040439\
390404040405053E3E0505040404040404040404040404040404040404040439\
3904040404040504040504040404047F7F7F7F7F7F3939393939393939393939\
3904040404040504040504040404047F7D7D3E7D7F0404040439040404040439\
3904040404050504040505040404043B3E3E3E3E3A0404040439040404040439\
3904043939393904043939393904047F3E3E3E7D7F0404040439040404040439\
3904043902040404040404023905047F7D3E3E7D7F0404040439040404040439\
390404397B0404040404047C3905057F7A7A7A7A7F040404043B040404043939\
3904053904040404040404043905057F3E3E3E3E7F7D040402397D0402393907\
390405397A6C60716A64737A3905057F7F7F7F7F7F3939393939393939390707\
3905053904040404040404043905050404040404040405050707070707070708\
3905053939393939393939393905040404040404040407070707070707070808\
3905050505050505040404040404040404040407070707070708080807070808\
3905050505050404040404040404040404040707070808080808080808080808\
3939393939393939393939393939393939393939070707080808080808080808\
",
folk:[
  {
    "heShe": "He",
    "description": "A singing bard.",
    "startX": 1,
    "startY": 20,
    "x": 1,
    "y": 20,
    "tile": 84,
    "prevTile": 84,
    "behaviour": "Static",
    "responses": {
      "NAME": "Little Jon",
      "JOB": "I sing of\nBritannia.",
      "HEAL": "Quite well\nindeed!",
      "BRIT": "Britannia is a\nland so fair,\nto other lands I\nwould not dare!",
      "EART": "I hope someday\nthou may return!"
    },
    "questions": {
      "BRIT": {
        "text": "I hear that thou\nart from another\nworld?",
        "yes": "What is\nit called?",
        "no": "Just a rumor."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A short jester.",
    "startX": 8,
    "startY": 15,
    "x": 8,
    "y": 15,
    "tile": 87,
    "prevTile": 86,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Asemly",
      "JOB": "I am here to\nserve thee.",
      "HEAL": "Jolly good.",
      "SERV": "Well, I can\ndance and sing!",
      "DANC": "And sing,\ntra la la..."
    },
    "questions": {
      "SERV": {
        "text": "Does that\ninterest thee?",
        "yes": "Good!",
        "no": "Well then, I\nguess I'm no\nhelp at all\nthen."
      }
    }
  },
  {
    "heShe": "She",
    "description": "A wise lady.",
    "startX": 5,
    "startY": 6,
    "x": 5,
    "y": 6,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Lady Tessa",
      "JOB": "I am the keeper.",
      "HEAL": "Well.",
      "KEEP": "I cannot say.",
      "MYST": "Mystics can be\nfound by an\neight parts\navatar!"
    },
    "questions": {
      "MYST": {
        "text": "Hast thou\nattained\nenlightenment in\nall eight\nvirtues?",
        "yes": "The mystic\nweapons lie in\nthe training\nroom of Serpent\ncastle!",
        "no": "Alas."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A wise lord.",
    "startX": 5,
    "startY": 5,
    "x": 5,
    "y": 5,
    "tile": 37,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sir Simon",
      "JOB": "I am the keeper.",
      "HEAL": "I am fine.",
      "KEEP": "Of what I\ncannot say!",
      "MYST": "Mystics can be\nfound by an\neight parts\navatar!"
    },
    "questions": {
      "MYST": {
        "text": "Hast thou\nattained\nenlightenment in\nall eight\nvirtues?",
        "yes": "The mystic\narmour lies in\nthe center of\nthe oak grove!",
        "no": "Alas."
      }
    }
  },
  {
    "heShe": "She",
    "description": "A small girl.",
    "startX": 14,
    "startY": 11,
    "x": 14,
    "y": 11,
    "tile": 91,
    "prevTile": 90,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Pix",
      "JOB": "What's a job?",
      "HEAL": "Good, thanks.",
      "A": "A"
    },
    "questions": {
      "HEAL": {
        "text": "And thee?",
        "yes": "Good.",
        "no": "Too bad."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A hooded ranger.",
    "startX": 1,
    "startY": 30,
    "x": 1,
    "y": 30,
    "tile": 44,
    "prevTile": 44,
    "behaviour": "Static",
    "responses": {
      "NAME": "Barren",
      "JOB": "I travel\nthe land.",
      "HEAL": "I am well.",
      "LAND": "Britannia.",
      "RUNE": "Search the\nhills in the\nsouth-east\ncorner of town!"
    },
    "questions": {
      "LAND": {
        "text": "Art thou dim?",
        "yes": "I thought so.",
        "no": "We shall see."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A meek shepherd.",
    "startX": 22,
    "startY": 31,
    "x": 22,
    "y": 31,
    "tile": 47,
    "prevTile": 46,
    "behaviour": "Static",
    "responses": {
      "NAME": "Wheatpin",
      "JOB": "I just sit here.",
      "HEAL": "Fine.",
      "RUNE": "Around there in\nthe nook of the\nmountains!",
      "A": "A"
    },
    "questions": {
      "HEAL": {
        "text": "Art thou looking\nfor something?",
        "yes": "What?",
        "no": "I see."
      }
    }
  },
  {
    "heShe": "She",
    "description": "A small druid.",
    "startX": 6,
    "startY": 25,
    "x": 6,
    "y": 25,
    "tile": 39,
    "prevTile": 38,
    "behaviour": "Static",
    "responses": {
      "NAME": "Damsel",
      "JOB": "I am here to\nbuy food.",
      "HEAL": "A bit hungry.",
      "FOOD": "Yes, I hear they\nhave the best\nrations here.",
      "RATI": "Rations are used\nin dungeons."
    },
    "questions": {
      "RATI": {
        "text": "Dost thou travel\nin the depths?",
        "yes": "In the great\ncastle there is\na secret\nentrance!",
        "no": "Probably a wimp."
      }
    }
  },
  {
    "heShe": "He",
    "description": "A tall muscular\nknight.",
    "startX": 9,
    "startY": 5,
    "x": 9,
    "y": 5,
    "tile": 36,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sir Hobie",
      "JOB": "I serve\nLord British.",
      "HEAL": "Tired and\nhungry but\nalways faithful.",
      "FAIT": "I quest always\nfor Britannia!",
      "QUES": "My quest is to\ndefeat the evils\nof the world."
    },
    "questions": {
      "QUES": {
        "text": "'tis thy\nquest also?",
        "yes": "We are as one.",
        "no": "A shame it is!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A young mage!",
    "startX": 12,
    "startY": 2,
    "x": 12,
    "y": 2,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Jingles",
      "JOB": "I seek the\nwisdom of magic.",
      "HEAL": "Fine.",
      "MAGI": "My master knows\nthe gate travel\nspell!",
      "MAST": "My master is\nMentorian."
    },
    "questions": {
      "MAST": {
        "text": "Dost thou\nknow him?",
        "yes": "Good.",
        "no": "He lives in a\nhidden village\nin Lock Lake\nreachable only\nby ship, ask of\nthe gate spell!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A very\nlarge woman.",
    "startX": 23,
    "startY": 8,
    "x": 23,
    "y": 8,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sal",
      "JOB": "I am the barmaid\nI serve the ale!",
      "HEAL": "Stronger\nevery day!",
      "ALE": "We have the\nfinest brew in\nBritannia!",
      "BREW": "We serve only\nFolley on tap!"
    },
    "questions": {
      "BREW": {
        "text": "Dost thou\nfavor Folley?",
        "yes": "A great mug if I\nmay say so!",
        "no": "Too bad,\nit's the best!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A man of\nmany years.",
    "startX": 20,
    "startY": 6,
    "x": 20,
    "y": 6,
    "tile": 32,
    "prevTile": 32,
    "behaviour": "Static",
    "responses": {
      "NAME": "Zair the Wise",
      "JOB": "I've been near\nthe codex!",
      "HEAL": "Well.",
      "CODE": "Its secrets\nare boundless!",
      "WORD": "A three part key\nand a word of\npassage are\nneeded to enter\nthe chamber. Ask\nmy brother\nbeyond Lock Lake\nof the word!"
    },
    "questions": {
      "CODE": {
        "text": "Seen it?",
        "yes": "Wow!",
        "no": "Seek it!"
      }
    }
  },
  {
    "heShe": "He",
    "description": "A tall\nburly man.",
    "startX": 27,
    "startY": 8,
    "x": 27,
    "y": 8,
    "tile": 36,
    "prevTile": 36,
    "behaviour": "Static",
    "responses": {
      "NAME": "Sven",
      "JOB": "I'm a\nlumberjack, ya.",
      "HEAL": "Fine, thanks.",
      "LUMB": "Wit' my axe, I\ncan chop'm down\nquick, ya.",
      "AXE": "It's a big\naxe, ya."
    },
    "questions": {
      "AXE ": {
        "text": "Art ya a\nlumberjack?",
        "yes": "Good for\nyou, ya.",
        "no": "Build up those\narms, ya!"
      }
    }
  },
  {
    "heShe": "She",
    "description": "A tough girl.",
    "startX": 27,
    "startY": 25,
    "x": 27,
    "y": 25,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Static",
    "responses": {
      "NAME": "Francesca",
      "JOB": "I am the\nstable hand.",
      "HEAL": "Right good.",
      "STAB": "I saw the way ya\ndealt with ol'\nRed Eye!",
      "SMIT": "The talking\nhorse!"
    },
    "questions": {
      "STAB": {
        "text": "Ya haven't come\nto steal a horse\nI hope?",
        "yes": "Well the master\nain't gonna like\nthat much!",
        "no": "Then must be\nto see Smith!"
      }
    }
  },
  {
    "startX": 17,
    "startY": 25,
    "x": 17,
    "y": 25,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 9,
    "startY": 13,
    "x": 9,
    "y": 13,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 23,
    "startY": 22,
    "x": 23,
    "y": 22,
    "tile": 93,
    "prevTile": 92,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 27,
    "startY": 20,
    "x": 27,
    "y": 20,
    "tile": 21,
    "prevTile": 21,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 26,
    "startY": 22,
    "x": 26,
    "y": 22,
    "tile": 20,
    "prevTile": 20,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 15,
    "startY": 17,
    "x": 15,
    "y": 17,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 22,
    "startY": 13,
    "x": 22,
    "y": 13,
    "tile": 81,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 22,
    "startY": 21,
    "x": 22,
    "y": 21,
    "tile": 92,
    "prevTile": 92,
    "behaviour": "Attack",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A white stallion",
    "startX": 30,
    "startY": 20,
    "x": 30,
    "y": 20,
    "tile": 20,
    "prevTile": 20,
    "behaviour": "Wander",
    "responses": {
      "NAME": "Smith",
      "JOB": "Oh, not much.",
      "HEAL": "Good, good.",
      "A": "A"
    },
    "questions": {}
  },
  {
    "startX": 6,
    "startY": 3,
    "x": 6,
    "y": 3,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 15,
    "startY": 8,
    "x": 15,
    "y": 8,
    "tile": 83,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 25,
    "startY": 4,
    "x": 25,
    "y": 4,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 22,
    "startY": 4,
    "x": 22,
    "y": 4,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Wander",
    "responses": {},
    "questions": {}
  },
  {
    "startX": 7,
    "startY": 27,
    "x": 7,
    "y": 27,
    "tile": 82,
    "prevTile": 82,
    "behaviour": "Follow",
    "responses": {},
    "questions": {}
  },
  {
    "heShe": "He",
    "description": "A very\nbig guard.",
    "startX": 4,
    "startY": 16,
    "x": 4,
    "y": 16,
    "tile": 80,
    "prevTile": 80,
    "behaviour": "Static",
    "responses": {
      "NAME": "Wilmoore",
      "JOB": "I am the chief\nguard in the\nvillage of Paws!",
      "HEAL": "Excellent.",
      "GUAR": "Paws is a great\nvillage and we\nkeep it safe!",
      "TROU": "Pirates come\nfrom an isle to\nthe east!"
    },
    "questions": {
      "GUAR": {
        "text": "Dost thou\nmean to\ncause trouble?",
        "yes": "Then thou had\nbest leave!",
        "no": "Good."
      }
    }
  }
]
};

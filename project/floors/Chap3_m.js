main.floors.Chap3_m=
{
  "floorId": "Chap3_m",
  "title": "红海广场",
  "name": "红海广场",
  "width": 13,
  "height": 13,
  "canFlyTo": true,
  "canUseQuickShop": true,
  "cannotViewMap": false,
  "cannotMoveDirectly": false,
  "images": [],
  "item_ratio": 100,
  "defaultGround": "grass2",
  "firstArrive": [
    {
      "type": "function",
      "function": "function(){\ncore.setFlag('darkRatio', 0.5);\ncore.setFlag('bgLight', [\n\t[304, 304, 100]\n]);\ncore.drawMap();\n}"
    },
    {
      "type": "if",
      "condition": "core.status.hero.lv < 19",
      "true": [
        {
          "type": "setValue",
          "name": "flag:skill1_cost",
          "value": "12"
        },
        {
          "type": "setValue",
          "name": "flag:skill2_cost",
          "value": "8"
        }
      ],
      "false": []
    },
    {
      "type": "sleep",
      "time": 1000
    },
    "\t[hero]呼……终于逃出这鬼地方了……",
    "\t[熙枫,heroine]这红海广场的野外遍地都是红海生物，以你现在的实力很难应付，先去商域看看吧，应该有能帮到你的东西。"
  ],
  "eachArrive": [
    {
      "type": "function",
      "function": "function(){\ncore.setFlag('darkRatio', 0.5);\ncore.setFlag('bgLight', [\n\t[304, 304, 100]\n]);\ncore.drawMap();\n}"
    }
  ],
  "parallelDo": "",
  "events": {
    "3,3": [
      {
        "type": "setValue",
        "name": "flag:darkRatio",
        "value": "0.6"
      },
      {
        "type": "insert",
        "loc": [
          3,
          0
        ],
        "floorId": "EventMap"
      },
      {
        "type": "changeFloor",
        "floorId": "MT61",
        "loc": [
          6,
          12
        ],
        "time": 500
      }
    ],
    "9,3": [
      {
        "type": "setValue",
        "name": "flag:darkRatio",
        "value": "0.7"
      },
      {
        "type": "insert",
        "loc": [
          3,
          0
        ],
        "floorId": "EventMap"
      },
      {
        "type": "changeFloor",
        "floorId": "MT81",
        "loc": [
          6,
          12
        ],
        "direction": "up",
        "time": 500
      }
    ],
    "3,8": [
      {
        "type": "setValue",
        "name": "flag:darkRatio",
        "value": "0.6"
      },
      {
        "type": "insert",
        "loc": [
          3,
          0
        ],
        "floorId": "EventMap"
      },
      {
        "type": "changeFloor",
        "floorId": "MT71",
        "loc": [
          12,
          2
        ],
        "time": 500
      }
    ],
    "9,8": [
      {
        "type": "setValue",
        "name": "flag:darkRatio",
        "value": "0.6"
      },
      {
        "type": "insert",
        "loc": [
          3,
          0
        ],
        "floorId": "EventMap"
      },
      {
        "type": "changeFloor",
        "floorId": "Chap3_shop",
        "loc": [
          6,
          0
        ],
        "time": 500
      }
    ],
    "6,11": [
      {
        "type": "confirm",
        "text": "进去就回不来了，确定准备好了吗？",
        "yes": [
          {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0.6"
          },
          {
            "type": "insert",
            "loc": [
              3,
              0
            ],
            "floorId": "EventMap"
          },
          {
            "type": "changeFloor",
            "floorId": "Chap3_boss",
            "loc": [
              6,
              0
            ],
            "direction": "down",
            "time": 1000
          }
        ],
        "no": [
          {
            "type": "moveHero",
            "time": 100,
            "steps": [
              "up"
            ]
          },
          {
            "type": "insert",
            "loc": [
              3,
              0
            ],
            "floorId": "EventMap"
          }
        ]
      }
    ],
    "6,10": [
      "这里是漏怪检测装置。正在检测是否有剩余怪物。",
      {
        "type": "if",
        "condition": "core.itemCount('redKey') < 3",
        "true": [
          "先把红钥匙集齐再来检测吧。",
          {
            "type": "exit"
          }
        ],
        "false": []
      },
      {
        "type": "function",
        "function": "function(){\ncore.checkMonster([\"MT61\", \"MT62\", \"MT63\", \"MT64\", \"MT65\", \"MT66\", \"MT67\", \"MT68\", \"MT69\", \"MT6A\", \"MT70\",\n\t\"MT71\", \"MT72\", \"MT73\", \"MT74\", \"MT75\", \"MT76\", \"MT77\", \"MT78\", \"MT79\", \"MT7A\", \"MT80\",\n\t\"MT81\", \"MT82\", \"MT83\", \"MT84\", \"MT85\", \"MT86\", \"MT87\", \"MT88\", \"MT89\", \"MT90\"\n]);\n}"
      },
      {
        "type": "if",
        "condition": "flag:remainMonsterCount>0",
        "true": [
          "共有${flag:remainMonsterCount}只怪物未清除。",
          "剩余怪物：${flag:remainMonsterInfo}"
        ],
        "false": [
          "怪物已清完！",
          {
            "type": "hide",
            "time": 0
          }
        ]
      }
    ]
  },
  "changeFloor": {},
  "afterBattle": {},
  "afterGetItem": {},
  "afterOpenDoor": {},
  "cannotMove": {},
  "map": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      17,
      17,
      17,
      17,
      0,
      0,
      0,
      17,
      0,
      0,
      0
    ],
    [
      0,
      0,
      17,
      17,
      17,
      17,
      17,
      17,
      17,
      17,
      17,
      17,
      10567
    ],
    [
      0,
      17,
      17,
      91,
      17,
      17,
      10568,
      17,
      17,
      91,
      17,
      17,
      10567
    ],
    [
      0,
      17,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      17,
      10567
    ],
    [
      0,
      17,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      17,
      10569
    ],
    [
      0,
      17,
      17,
      17,
      17,
      0,
      0,
      0,
      0,
      0,
      10568,
      17,
      10570
    ],
    [
      0,
      17,
      17,
      17,
      17,
      0,
      0,
      0,
      0,
      0,
      10568,
      17,
      10571
    ],
    [
      0,
      17,
      17,
      92,
      0,
      0,
      0,
      0,
      17,
      93,
      17,
      17,
      0
    ],
    [
      0,
      0,
      17,
      17,
      17,
      0,
      0,
      0,
      17,
      17,
      17,
      0,
      0
    ],
    [
      0,
      0,
      0,
      17,
      17,
      10200,
      384,
      10200,
      17,
      17,
      17,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      17,
      17,
      93,
      17,
      17,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      17,
      17,
      17,
      17,
      17,
      0,
      0,
      0,
      0
    ]
  ],
  "bgmap": [
    [
      154,
      151,
      453,
      154,
      154,
      151,
      0,
      10567,
      316,
      316,
      316,
      316,
      316
    ],
    [
      154,
      151,
      151,
      151,
      151,
      151,
      0,
      10569,
      10572,
      10572,
      10572,
      10572,
      10573
    ],
    [
      154,
      151,
      151,
      151,
      151,
      151,
      0,
      10570,
      10194,
      10574,
      10194,
      10194,
      316
    ],
    [
      154,
      154,
      151,
      0,
      151,
      151,
      10568,
      10571,
      10196,
      10575,
      10196,
      10196,
      316
    ],
    [
      154,
      154,
      154,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      316,
      316,
      316
    ],
    [
      154,
      154,
      154,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      316,
      316,
      316
    ],
    [
      151,
      151,
      151,
      151,
      151,
      0,
      0,
      0,
      0,
      0,
      316,
      316,
      316
    ],
    [
      151,
      151,
      151,
      151,
      151,
      0,
      0,
      0,
      0,
      0,
      316,
      316,
      316
    ],
    [
      151,
      151,
      151,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      20,
      20,
      20
    ],
    [
      151,
      151,
      151,
      151,
      151,
      316,
      316,
      316,
      20,
      122,
      20,
      20,
      20
    ],
    [
      151,
      323,
      151,
      151,
      151,
      316,
      316,
      316,
      20,
      20,
      20,
      20,
      20
    ],
    [
      151,
      151,
      151,
      151,
      151,
      316,
      316,
      316,
      20,
      20,
      20,
      20,
      20
    ],
    [
      151,
      151,
      151,
      151,
      151,
      316,
      316,
      316,
      20,
      20,
      20,
      20,
      20
    ]
  ],
  "fgmap": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      435,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10568,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      10217,
      0,
      10217,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ],
  "bgm": "chap3_m.mp3"
}
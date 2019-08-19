main.floors.MT85=
{
  "floorId": "MT85",
  "title": "白骨山洞",
  "name": "白骨山洞",
  "width": 13,
  "height": 13,
  "canFlyTo": true,
  "canUseQuickShop": true,
  "cannotViewMap": false,
  "images": [],
  "item_ratio": 100,
  "defaultGround": "soil",
  "bgm": "3-5.mp3",
  "color": [
    0,
    0,
    0,
    0.7
  ],
  "firstArrive": [],
  "eachArrive": [
    {
      "type": "function",
      "function": "function(){\ncore.setFlag('bgLight', [\n\t[208, 208, 200]\n]);\ncore.drawMap();\n}"
    }
  ],
  "parallelDo": "",
  "events": {},
  "changeFloor": {
    "12,9": {
      "floorId": "MT84",
      "loc": [
        0,
        0
      ],
      "time": 0
    }
  },
  "afterBattle": {
    "10,2": [
      {
        "type": "addValue",
        "name": "flag:door85",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door85==2",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              11,
              3
            ]
          }
        ],
        "false": []
      }
    ],
    "12,2": [
      {
        "type": "addValue",
        "name": "flag:door85",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door85==2",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              11,
              3
            ]
          }
        ],
        "false": []
      }
    ]
  },
  "afterGetItem": {},
  "afterOpenDoor": {},
  "cannotMove": {
    "0,10": [
      "right"
    ],
    "0,9": [
      "right"
    ],
    "0,8": [
      "right"
    ],
    "0,7": [
      "right"
    ],
    "0,6": [
      "right"
    ],
    "0,5": [
      "right"
    ],
    "0,4": [
      "right"
    ],
    "0,3": [
      "right"
    ],
    "0,2": [
      "right"
    ],
    "0,1": [
      "right"
    ],
    "9,2": [
      "right"
    ],
    "9,3": [
      "right"
    ],
    "9,4": [
      "right"
    ],
    "9,5": [
      "right"
    ],
    "1,0": [
      "down"
    ],
    "2,0": [
      "down"
    ],
    "3,0": [
      "down"
    ],
    "4,0": [
      "down"
    ],
    "5,0": [
      "down"
    ],
    "6,0": [
      "down"
    ],
    "7,0": [
      "down"
    ],
    "8,0": [
      "down"
    ],
    "9,0": [
      "down"
    ],
    "9,1": [
      "up",
      "right"
    ],
    "10,5": [
      "left",
      "down"
    ],
    "11,5": [
      "down"
    ],
    "12,5": [
      "down"
    ],
    "1,3": [
      "left"
    ],
    "1,2": [
      "left"
    ],
    "1,4": [
      "left"
    ],
    "1,5": [
      "left"
    ],
    "1,6": [
      "left"
    ],
    "1,7": [
      "left"
    ],
    "1,8": [
      "left"
    ],
    "1,9": [
      "left"
    ],
    "1,10": [
      "left"
    ],
    "10,3": [
      "left"
    ],
    "10,4": [
      "left"
    ],
    "10,2": [
      "left"
    ],
    "10,1": [
      "left"
    ],
    "3,1": [
      "up"
    ],
    "2,1": [
      "up"
    ],
    "1,1": [
      "up",
      "left"
    ],
    "5,1": [
      "up"
    ],
    "4,1": [
      "up"
    ],
    "6,1": [
      "up"
    ],
    "7,1": [
      "up"
    ],
    "8,1": [
      "up"
    ],
    "10,6": [
      "up"
    ],
    "11,6": [
      "up"
    ],
    "12,6": [
      "up"
    ]
  },
  "map": [
    [
      21,
      237,
      380,
      237,
      455,
      237,
      455,
      237,
      380,
      237,
      349,
      350,
      351
    ],
    [
      0,
      456,
      81,
      351,
      471,
      0,
      81,
      0,
      471,
      0,
      320,
      456,
      320
    ],
    [
      0,
      352,
      320,
      0,
      320,
      352,
      320,
      351,
      320,
      352,
      239,
      22,
      239
    ],
    [
      239,
      351,
      320,
      439,
      320,
      351,
      320,
      439,
      320,
      351,
      320,
      85,
      320
    ],
    [
      27,
      240,
      320,
      0,
      320,
      240,
      320,
      350,
      320,
      240,
      353,
      0,
      354
    ],
    [
      28,
      0,
      320,
      350,
      320,
      349,
      320,
      0,
      320,
      349,
      356,
      355,
      380
    ],
    [
      29,
      349,
      320,
      240,
      320,
      0,
      320,
      240,
      320,
      0,
      320,
      351,
      455
    ],
    [
      239,
      439,
      320,
      349,
      320,
      439,
      10594,
      349,
      320,
      439,
      446,
      349,
      320
    ],
    [
      349,
      350,
      320,
      0,
      320,
      350,
      471,
      352,
      320,
      350,
      320,
      320,
      320
    ],
    [
      350,
      0,
      471,
      352,
      81,
      81,
      0,
      81,
      81,
      234,
      0,
      0,
      0
    ],
    [
      0,
      81,
      320,
      446,
      320,
      320,
      320,
      320,
      320,
      320,
      446,
      320,
      320
    ],
    [
      351,
      17,
      454,
      351,
      349,
      454,
      82,
      380,
      350,
      446,
      350,
      351,
      455
    ],
    [
      352,
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
      17,
      17
    ]
  ],
  "bgmap": [
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
      10606,
      10604,
      10604,
      10604,
      10604,
      10604,
      10604,
      10604,
      10605,
      0,
      0,
      0
    ],
    [
      0,
      10567,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10607,
      0,
      0,
      0
    ],
    [
      0,
      10567,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10607,
      0,
      0,
      0
    ],
    [
      0,
      10567,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10607,
      0,
      0,
      0
    ],
    [
      0,
      10567,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10607,
      0,
      0,
      0
    ],
    [
      0,
      10567,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10608,
      10604,
      10604,
      10604
    ],
    [
      0,
      10567,
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
      10567,
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
      10567,
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
      94
    ],
    [
      0,
      10567,
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
      10569,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572,
      10572
    ],
    [
      0,
      10570,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194,
      10194
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
      10617,
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
  ]
}
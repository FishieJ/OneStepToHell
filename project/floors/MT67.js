main.floors.MT67=
{
  "floorId": "MT67",
  "title": "毒雾沼泽",
  "name": "毒雾沼泽",
  "width": 13,
  "height": 13,
  "canFlyTo": true,
  "canUseQuickShop": true,
  "cannotViewMap": false,
  "images": [],
  "item_ratio": 100,
  "defaultGround": "grass2",
  "bgm": "23-1.mp3",
  "color": [
    0,
    0,
    0,
    0.7
  ],
  "firstArrive": [],
  "eachArrive": [],
  "parallelDo": "",
  "events": {},
  "changeFloor": {
    "12,6": {
      "floorId": "MT66",
      "loc": [
        0,
        6
      ],
      "time": 0
    },
    "0,2": {
      "floorId": "MT68",
      "loc": [
        12,
        10
      ],
      "time": 0
    },
    "1,12": {
      "floorId": "MT69",
      "loc": [
        10,
        0
      ],
      "time": 0
    }
  },
  "afterBattle": {
    "9,9": [
      {
        "type": "addValue",
        "name": "flag:door67",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door67==4",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              8,
              10
            ]
          }
        ],
        "false": []
      }
    ],
    "9,11": [
      {
        "type": "addValue",
        "name": "flag:door67",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door67==4",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              8,
              10
            ]
          }
        ],
        "false": []
      }
    ],
    "11,11": [
      {
        "type": "addValue",
        "name": "flag:door67",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door67==4",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              8,
              10
            ]
          }
        ],
        "false": []
      }
    ],
    "11,9": [
      {
        "type": "addValue",
        "name": "flag:door67",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door67==4",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              8,
              10
            ]
          }
        ],
        "false": []
      }
    ]
  },
  "afterGetItem": {},
  "afterOpenDoor": {},
  "cannotMove": {},
  "map": [
    [
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151,
      151
    ],
    [
      154,
      354,
      468,
      0,
      10590,
      10576,
      455,
      0,
      81,
      350,
      454,
      352,
      154
    ],
    [
      92,
      455,
      154,
      0,
      10576,
      454,
      10576,
      352,
      154,
      154,
      447,
      154,
      154
    ],
    [
      154,
      154,
      154,
      0,
      260,
      349,
      444,
      0,
      154,
      349,
      351,
      352,
      154
    ],
    [
      154,
      454,
      349,
      441,
      10578,
      81,
      10578,
      10578,
      154,
      154,
      447,
      154,
      154
    ],
    [
      154,
      154,
      154,
      21,
      0,
      0,
      0,
      154,
      154,
      443,
      0,
      443,
      154
    ],
    [
      154,
      154,
      154,
      0,
      0,
      441,
      455,
      0,
      441,
      0,
      353,
      0,
      94
    ],
    [
      154,
      454,
      154,
      154,
      0,
      0,
      0,
      154,
      154,
      443,
      0,
      443,
      154
    ],
    [
      154,
      352,
      351,
      349,
      10577,
      0,
      154,
      154,
      154,
      154,
      352,
      154,
      154
    ],
    [
      154,
      154,
      154,
      260,
      10577,
      444,
      154,
      353,
      154,
      441,
      0,
      441,
      154
    ],
    [
      154,
      154,
      154,
      455,
      0,
      350,
      154,
      456,
      85,
      0,
      440,
      0,
      154
    ],
    [
      154,
      449,
      81,
      0,
      442,
      154,
      154,
      354,
      154,
      441,
      0,
      441,
      154
    ],
    [
      154,
      93,
      154,
      154,
      349,
      455,
      154,
      154,
      154,
      154,
      154,
      154,
      154
    ]
  ],
  "bgmap": [],
  "fgmap": [],
  "weather": [
    "fog",
    6
  ]
}
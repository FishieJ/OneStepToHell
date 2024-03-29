main.floors.MT50=
{
  "floorId": "MT50",
  "title": "梦雪平原",
  "name": "梦雪平原",
  "width": 13,
  "height": 13,
  "canFlyTo": true,
  "canUseQuickShop": true,
  "cannotViewMap": false,
  "images": [],
  "item_ratio": 50,
  "defaultGround": "snowGround",
  "bgm": "19-21.mp3",
  "color": [
    0,
    0,
    0,
    0.4
  ],
  "weather": [
    "snow",
    1
  ],
  "firstArrive": [
    {
      "type": "setValue",
      "name": "flag:darkRatio",
      "value": "flag:darkRatio+0.01"
    }
  ],
  "eachArrive": [],
  "parallelDo": "",
  "events": {},
  "changeFloor": {
    "0,6": {
      "floorId": "MT49",
      "loc": [
        12,
        9
      ],
      "time": 0
    }
  },
  "afterBattle": {
    "2,7": [
      {
        "type": "addValue",
        "name": "flag:door50",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door50==2",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              3,
              6
            ]
          }
        ],
        "false": []
      }
    ],
    "2,5": [
      {
        "type": "addValue",
        "name": "flag:door50",
        "value": "1"
      },
      {
        "type": "if",
        "condition": "flag:door50==2",
        "true": [
          {
            "type": "openDoor",
            "loc": [
              3,
              6
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
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
    ],
    [
      149,
      0,
      34,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
    ],
    [
      149,
      349,
      0,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
    ],
    [
      149,
      405,
      149,
      149,
      349,
      0,
      350,
      149,
      149,
      354,
      0,
      353,
      149
    ],
    [
      0,
      0,
      0,
      149,
      149,
      149,
      0,
      149,
      149,
      0,
      149,
      149,
      149
    ],
    [
      0,
      0,
      398,
      149,
      351,
      0,
      352,
      149,
      149,
      356,
      0,
      355,
      149
    ],
    [
      92,
      0,
      0,
      85,
      0,
      149,
      0,
      0,
      406,
      0,
      22,
      0,
      149
    ],
    [
      0,
      0,
      398,
      149,
      352,
      0,
      33,
      149,
      149,
      33,
      0,
      356,
      149
    ],
    [
      0,
      0,
      0,
      149,
      0,
      149,
      149,
      149,
      149,
      149,
      149,
      0,
      149
    ],
    [
      149,
      405,
      149,
      149,
      350,
      0,
      349,
      149,
      149,
      353,
      0,
      354,
      149
    ],
    [
      149,
      350,
      0,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
    ],
    [
      149,
      0,
      34,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
    ],
    [
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149,
      149
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
      148,
      148,
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
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ],
  "fgmap": [
    [
      0,
      0,
      0,
      10538,
      10539,
      10540,
      10541,
      0,
      0,
      10538,
      10539,
      10540,
      10541
    ],
    [
      0,
      0,
      0,
      10534,
      10535,
      10536,
      10537,
      0,
      0,
      10534,
      10535,
      10536,
      10537
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
    ],
    [
      0,
      0,
      0,
      10542,
      10543,
      10544,
      10545,
      0,
      0,
      10542,
      10543,
      10544,
      10545
    ],
    [
      0,
      0,
      0,
      10526,
      10527,
      10528,
      10529,
      0,
      0,
      10526,
      10527,
      10528,
      10529
    ],
    [
      0,
      0,
      0,
      10530,
      10531,
      10532,
      10533,
      0,
      0,
      10530,
      10531,
      10532,
      10533
    ],
    [
      0,
      0,
      0,
      10538,
      10539,
      10540,
      10541,
      0,
      0,
      10538,
      10539,
      10540,
      10541
    ],
    [
      0,
      0,
      0,
      10534,
      10535,
      10536,
      10537,
      0,
      0,
      10534,
      10535,
      10536,
      10537
    ]
  ]
}
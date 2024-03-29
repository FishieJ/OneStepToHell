main.floors.MT53=
{
  "floorId": "MT53",
  "title": "永夜平原",
  "name": "永夜平原",
  "width": 13,
  "height": 13,
  "canFlyTo": true,
  "canUseQuickShop": true,
  "cannotViewMap": false,
  "images": [],
  "item_ratio": 50,
  "defaultGround": "grass2",
  "bgm": "21-23.mp3",
  "color": [
    0,
    0,
    0,
    0.5
  ],
  "weather": [],
  "firstArrive": [
    {
      "type": "setValue",
      "name": "flag:darkRatio",
      "value": "flag:darkRatio+0.01"
    }
  ],
  "eachArrive": [
    {
      "type": "function",
      "function": "function(){\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
    }
  ],
  "parallelDo": "",
  "events": {},
  "changeFloor": {
    "4,12": {
      "floorId": "MT52",
      "loc": [
        4,
        0
      ],
      "time": 0
    },
    "12,7": {
      "floorId": "MT54",
      "loc": [
        0,
        7
      ],
      "time": 0
    }
  },
  "afterBattle": {},
  "afterGetItem": {},
  "afterOpenDoor": {},
  "cannotMove": {},
  "map": [
    [
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152,
      152
    ],
    [
      152,
      29,
      34,
      10201,
      27,
      0,
      0,
      409,
      0,
      32,
      0,
      10546,
      32
    ],
    [
      152,
      349,
      10546,
      32,
      0,
      0,
      10023,
      380,
      10546,
      0,
      418,
      27,
      0
    ],
    [
      152,
      419,
      10199,
      10547,
      10201,
      407,
      0,
      10201,
      0,
      407,
      0,
      10547,
      10201
    ],
    [
      152,
      0,
      409,
      0,
      27,
      10210,
      0,
      418,
      0,
      0,
      419,
      349,
      0
    ],
    [
      152,
      0,
      409,
      0,
      407,
      0,
      34,
      10546,
      31,
      10201,
      0,
      10199,
      34
    ],
    [
      152,
      419,
      10201,
      10201,
      0,
      10199,
      0,
      10201,
      0,
      0,
      31,
      10210,
      10201
    ],
    [
      152,
      349,
      29,
      10210,
      34,
      10201,
      409,
      0,
      10546,
      409,
      0,
      418,
      94
    ],
    [
      152,
      34,
      81,
      0,
      0,
      30,
      0,
      10201,
      10546,
      27,
      10547,
      27,
      10201
    ],
    [
      152,
      152,
      27,
      409,
      0,
      0,
      0,
      411,
      353,
      10547,
      10210,
      380,
      10546
    ],
    [
      152,
      152,
      380,
      10546,
      10201,
      0,
      32,
      10199,
      351,
      34,
      152,
      152,
      152
    ],
    [
      152,
      152,
      10547,
      34,
      0,
      0,
      10201,
      32,
      10199,
      10201,
      152,
      152,
      152
    ],
    [
      152,
      152,
      0,
      0,
      93,
      0,
      418,
      27,
      10201,
      10023,
      152,
      152,
      152
    ]
  ],
  "bgmap": [],
  "fgmap": []
}
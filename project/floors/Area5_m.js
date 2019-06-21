main.floors.Area5_m=
{
    "floorId": "Area5_m",
    "title": "梦雪平原",
    "name": "梦雪平原",
    "width": 30,
    "height": 15,
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
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]这里就是梦雪平原的中心地带了。",
        "\t[熙枫,heroine]有些怪物对你来讲还太强了，如果觉得打起来吃力的话，往右边走可以到\r[yellow]永夜平原\r[white]看看。",
        {
            "type": "loadBgm",
            "name": "21-23.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "29,11": [
            {
                "type": "setValue",
                "name": "flag:charge_atk",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:last_direction",
                "value": "null"
            },
            {
                "type": "changeFloor",
                "floorId": "MT51",
                "loc": [
                    0,
                    6
                ],
                "time": 1000
            }
        ]
    },
    "changeFloor": {
        "5,14": {
            "floorId": "MT43",
            "loc": [
                9,
                0
            ],
            "direction": "down",
            "time": 500,
            "ignoreChangeFloor": false
        },
        "7,0": {
            "floorId": "MT44",
            "loc": [
                9,
                12
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "19,0": {
            "floorId": "MT48",
            "loc": [
                5,
                12
            ],
            "time": 500
        },
        "21,14": {
            "floorId": "MT47",
            "loc": [
                6,
                0
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {
        "16,4": [
            "left"
        ],
        "16,3": [
            "left"
        ],
        "16,2": [
            "left"
        ],
        "16,1": [
            "left"
        ],
        "16,0": [
            "left"
        ],
        "15,3": [
            "right"
        ],
        "15,4": [
            "right"
        ],
        "15,1": [
            "right"
        ]
    },
    "map": [
    [150,150,150,150,150,150,150, 91,149,149,149,149,149,149,149,149,349, 34,149, 91, 33, 27,  0,149, 34,149,149,149,149, 34],
    [150,  0, 32,149, 32,  0,149,  0,149, 32, 27,  0,149,  0,350, 34,390,149,149,149,149,149,390,149, 27,  0,390,  0,395, 28],
    [150, 27,  0,149,  0, 27,149,  0,149,149,149,396,149,390,60022,60023,  0,395,  0,  0,389,  0,  0,149,149, 28,149, 27,149,60018],
    [150,396,149,149,149,404,149,  0,  0,404, 28, 32,149, 32, 28,  0,380,149, 28,149,149,390,  0,389,149,149,149,389,149, 34],
    [150,  0,  0, 28,  0,  0,  0,403,149,149,149,149,149,60022,60023,400, 34,149, 32,149, 34, 27,149,  0, 28,  0, 32,  0,395, 27],
    [149,149,395,149,149,149,149,  0,  0, 34,  0,388,  0,400, 27,  0,60064,60065,60065,60065,60065,60065,60065,60065,60065,390,60065,60065,60065,60066],
    [149,350,  0, 33,149, 27,149,149,149,  0,149,149,391,149,149,149,60072,60073,60073,60073,60073,60073,60073,60073,60073,  0,60073,60073,60073,60074],
    [149,  0,  0,  0, 81,  0,389,  0,149, 27,397,  0,  0,  0,149, 27,60072,60073,60073,60073,60073,60073,60073,60073,60073,  0,60073,60073,60073,60074],
    [149,349,  0,351,149,380,149, 28,397,  0,149, 28,149,396,149,  0,60072,60073,60073,60073,60073,60073,60073,60073,60073,  0,60073,60073,60073,60074],
    [149,149,149,149,149,149,149,149,  0,149,149,149,149,  0,391,  0,60080,60081,60081,60081,60081,60081,60081,60081,60081, 81,60081,60081,60081,60082],
    [149,  0,397, 32,149,149,149,  0,388, 32,149, 28,388,380,149,397,149,149, 27,149, 32,149, 31,149,149,  0, 21,380,380,60018],
    [149, 27,149,  0, 27,  0,149, 27,149,  0,388,  0,149,149,149,  0, 32,389,  0,149,380,149, 28, 21,149,  0,  0,  0,  0, 89],
    [149,396,149,149,149,403,149,397,  0,388,149,397, 28,  0,149,149,  0,149,  0,149,389,149,149,389,149,  0,  0,149,149,149],
    [149,  0, 28,380,396,  0,  0,  0,149, 27,149,149,149, 32,388,  0, 27,149, 32,  0,  0,388,  0,  0, 27,  0,389, 27, 32,149],
    [149,149,149,149,149, 93,149,149,149,149,149,149,149,149,149,149,149,149,149,149,60014, 93,60014,149,149,149,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60058],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60058],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60058],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60058],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60058],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60113,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60121,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60121,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60121,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60121,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60129,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60006,  0,60006,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
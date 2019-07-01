main.floors.Chap3_m=
{
    "floorId": "Chap3_m",
    "title": "红海战场",
    "name": "红海战场",
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
            "function": "function(){\ncore.setFlag('darkRatio', 0);\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
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
        "\t[熙枫,heroine]这红海战场的野外遍地都是红海生物，以你现在的实力很难应付，先去商域休整一下吧。"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0);\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
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
        "6,10": [
            {
                "type": "if",
                "condition": "core.itemCount('redKey') < 3",
                "true": [
                    "\t[hero]现在还不是进去的时候。",
                    {
                        "type": "exit"
                    }
                ],
                "false": []
            },
            {
                "type": "confirm",
                "text": "确定准备好了吗？",
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
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [235,448,467,256,445,231,  0,250,434,470,438,469,433],
    [440,441,447,442,444,260,  0,234,471,439,240,446,237],
    [443,452,468,449,451,450,  0,  0,238,472,436,437,239],
    [453,  0, 17, 91, 17, 17, 17, 17, 17, 94, 17,  0,435],
    [  0,  0, 17,  0,  0,  0,  0,  0,  0,  0, 17,  0,80045],
    [218,431,428,432,475,  0,  0,  0,  0,  0, 17,  0,80053],
    [429,258,430,220,227,223,  0,  0,  0,  0, 17,  0,80056],
    [241,257,473,474,477,  0,  0,  0,  0,  0, 17,  0,80064],
    [323,  0, 17, 92,  0,  0,  0,  0, 17, 93, 17,  0,  0],
    [  0,  0, 17, 17, 17,  0,  0,  0, 17,  0, 17,  0,  0],
    [  0,  0,  0,  0, 17,80026, 93,80026, 17, 17, 17,  0,  0],
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [154,151,453,151,154,151,  0,316,316,316,316,316,316],
    [154,151,151,151,151,151,  0,316,316,316,316,316,316],
    [154,151,151,151,151,151,  0,316,80069,80091,80071,316,316],
    [154,154,151,  0,151,151,  0,316,80079,80099,80077,316,316],
    [154,154,154,  0,  0,  0,  0,  0,  0,  0,316,316,316],
    [154,154,154,  0,  0,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,151,151,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,151,151,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,  0,  0,  0,  0,  0, 20,  0, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20,122, 20, 20, 20],
    [151,323,151,151,151,316,316,316, 20, 20, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20, 20, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20, 20, 20, 20, 20]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80018,  0,80018,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgm": "chap3_m.mp3"
}
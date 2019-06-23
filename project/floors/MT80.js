main.floors.MT80=
{
    "floorId": "MT80",
    "title": "黑暗森林 深处",
    "name": "黑暗森林 深处",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "grass2",
    "bgm": "1-3.mp3",
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
        "6,0": {
            "floorId": "MT7A",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "5,9": [
            {
                "type": "addValue",
                "name": "flag:door80",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door80==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            10
                        ]
                    }
                ],
                "false": []
            }
        ],
        "7,9": [
            {
                "type": "addValue",
                "name": "flag:door80",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door80==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            10
                        ]
                    }
                ],
                "false": []
            }
        ],
        "6,11": [
            {
                "type": "openDoor",
                "loc": [
                    2,
                    9
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    9
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151, 91,151,151,151,151,151,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,  0,  0,151,151,  0,151,151,  0,  0,  0,151],
    [151,151, 85,151,151,474,  0,474,151,151, 85,151,151],
    [151,358, 21,357,151,151, 85,151,151,357, 21,358,151],
    [151,380,359,457,360,151,323,151,360,457,359,380,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}
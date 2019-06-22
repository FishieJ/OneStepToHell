main.floors.MT75=
{
    "floorId": "MT75",
    "title": "黑暗森林",
    "name": "黑暗森林",
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
        "12,3": {
            "floorId": "MT71",
            "loc": [
                0,
                8
            ],
            "time": 0
        },
        "0,7": {
            "floorId": "MT76",
            "loc": [
                12,
                4
            ],
            "time": 0
        },
        "8,12": {
            "floorId": "MT77",
            "loc": [
                4,
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "9,9": [
            {
                "type": "addValue",
                "name": "flag:door75",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door75==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ],
                "false": []
            }
        ],
        "11,9": [
            {
                "type": "addValue",
                "name": "flag:door75",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door75==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ],
                "false": []
            }
        ],
        "5,9": [
            {
                "type": "addValue",
                "name": "flag:door75_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door75_2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            10
                        ]
                    }
                ],
                "false": []
            }
        ],
        "5,11": [
            {
                "type": "addValue",
                "name": "flag:door75_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door75_2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
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
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,350,151,455,352,349,151,380,151, 27, 30,454,151],
    [151,432,151,151,151,429,151,350,151,428,151,151,151],
    [151,  0,454,  0,  0,  0,  0,  0,220,  0,431,  0, 94],
    [151,  0,151,430,151,151,151, 30,151,151,151,151,151],
    [151,258,151, 27,432, 28,151,  0,151,353,  0,354,151],
    [151,  0,151,380,151,455,151,227,151,356,456,355,151],
    [ 92, 27,429, 29,151, 30,258,  0,151,380,  0,380,151],
    [151,151,151,151,151,151,151,349,151,151, 85,151,151],
    [151,353,356,380,151,223,151,258,151,474,  0,474,151],
    [151,  0,456,  0, 85,  0,  0,  0,151,151,  0,151,151],
    [151,354,355,380,151,223,151, 30,  0,430,349, 21,151],
    [151,151,151,151,151,151,151,151, 93,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}
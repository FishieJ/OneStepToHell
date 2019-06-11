main.floors.MT45=
{
    "floorId": "MT45",
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
        "12,6": {
            "floorId": "MT44",
            "loc": [
                0,
                6
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "3,5": [
            {
                "type": "addValue",
                "name": "flag:door45",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door45==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": []
            }
        ],
        "3,7": [
            {
                "type": "addValue",
                "name": "flag:door45",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door45==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
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
    [150,150,150,150,150,150,150,150,150,150,150,150,150],
    [150, 27,400,  0, 33,150,150,150, 33,388, 27, 28,150],
    [150, 33,150, 28,150,150,150,150,397,150,150,150,150],
    [150,150,150,393,150,  0,399,  0, 33,150,150,150,150],
    [150,150,150,  0,  0, 27,150,  0,404, 28,  0,  0,150],
    [150,353,150,391,  0,404,150,380,  0,  0,150,396,  0],
    [150,355, 85,  0, 29,150,150,150, 29, 30,150,  0, 94],
    [150,354,150,391,  0,404,150,380,  0,  0,150,396,  0],
    [150,150,150,  0,  0, 28,150,  0,404, 27,  0,  0,150],
    [150,150,150,393,150,  0,397,  0, 33,150,150,150,150],
    [150,  0,150, 28,150,150,150,150,399,150,150,150,150],
    [150, 27,400,  0, 33,150,150,150, 33,388, 27, 28,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

]
}
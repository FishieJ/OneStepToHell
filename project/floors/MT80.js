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
                    5,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    11
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "autotile1",
                "loc": [
                    1,
                    10
                ],
                "floorId": "Chap3_m"
            }
        ]
    },
    "afterGetItem": {
        "6,12": [
            {
                "type": "if",
                "condition": "core.itemCount('redKey') == 1",
                "true": [
                    "\t[hero]红色的钥匙？",
                    "\t[熙枫,heroine]应该是两大宗派有意放置在这些强大的怪物身后的，红色的钥匙是实力的证明，只有足够强大者，才能凭借它们进入\r[yellow]月光大道\r[white]去突破血海境界。",
                    "\t[hero]那什么月光大道，里面的怪物都很强吧？",
                    "\t[熙枫,heroine]毕竟是专门给红海巅峰准备的修炼场所。现在还没必要急着去那里，先把其他地方的怪物都清理了再去吧。"
                ],
                "false": []
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151, 91,151,151,151,151,151,151],
    [151,  0,477,454,151,474,  0,474,151,454,477,  0,151],
    [151,354,151,355,151,151,352,151,151,355,151,353,151],
    [151,241,151,  0,473,  0,  0,  0,473,  0,151,241,151],
    [151,  0,151,241,151,151, 30,151,151,241,151,  0,151],
    [151,455,  0,  0,151,474,  0,474,151,  0,  0,455,151],
    [151,151,257, 81, 30,  0,151,  0, 30, 81,257,151,151],
    [151,352,  0,353,151,474,  0,474,151,354,  0,352,151],
    [151,  0,489,  0,151,151, 30,151,151,  0,490,  0,151],
    [151,151, 82,151,151,474,  0,474,151,151, 82,151,151],
    [151,358, 21,357,151,151, 85,151,151,357, 21,358,151],
    [151,380,359,457,360, 85,323, 85,360,457,359,380,151],
    [151,151,151,151,151,151, 23,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}
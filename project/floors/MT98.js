main.floors.MT98=
{
    "floorId": "MT98",
    "title": "刀剑蓝域",
    "name": "刀剑蓝域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1000,
    "defaultGround": "grass2",
    "bgm": "6-7.mp3",
    "color": null,
    "weather": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,12": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:hard == 1",
                        "true": [
                            "\t[小偷,thief]撞撞撞，撞就完事了！"
                        ],
                        "false": [
                            "\t[小偷,thief]计算地图伤害时，夹爆优先级最低。"
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:hard == 1",
                        "true": [
                            "\t[小偷,thief]撞撞撞，撞就完事了！",
                            "\t[hero]这好像是个木头人，只会说这一句话……",
                            "\t[hero]既然是这样为什么不干脆放个牌子啊！",
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            }
                        ],
                        "false": [
                            "\t[小偷,thief]计算地图伤害时，夹爆优先级最低。",
                            "\t[hero]这好像是个木头人，只会说这一句话……",
                            "\t[hero]既然是这样为什么不干脆放个牌子啊！",
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "12,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,  0, 31,350,536,534,156,351, 27,349,454,454,156],
    [156, 28,156, 81,156,534,156,  0,156,156,156,536,156],
    [156, 21, 27,  0, 81, 81,529,529,156,  0, 32, 81,156],
    [156,156,  0,156,  0,156,  0,156,156,529,  0, 29,156],
    [156,528, 27,528, 11,528,  0, 81, 81,531,156, 81,156],
    [156, 33, 81, 11,  0,156, 81,529, 81,  0,  0, 30, 87],
    [156,528,  0,528,  0, 21,  0, 21,  0,531, 30,530,156],
    [156,  0, 29,  0, 81,529, 11,529,  0, 11,  0,156,156],
    [156,532, 11,532, 81,156,  0,156, 81,531, 11,531,156],
    [156,536,528,156, 81,156,  0,156,527,  0,  0, 27,156],
    [156, 28, 27, 28, 27, 82,  0, 81, 22,527, 28, 33,156],
    [156,156,156,156,156,156, 88,123,156,156,156,156,156]
],
    "bgmap": [

],
    "fgmap": [

]
}
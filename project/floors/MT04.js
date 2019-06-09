main.floors.MT04=
{
    "floorId": "MT04",
    "title": "福神花园 中段",
    "name": "福神花园 中段",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass",
    "bgm": "11-13.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "core.status.hero.hp <= 268 && core.getFlag('hard', -1) == 3",
            "true": [
                "系统提示：可以使用回放录像功能检查自己的路线是否正确。快捷键是R。"
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": [
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    "\t[老头,man]虽然这些莱姆性情很温和，不会主动攻击人，但如果被它们挡着道路还是有点麻烦的。",
                    "\t[老头,man]感谢你救我出来。",
                    "\t[hero]对了，我在这附近丢了一颗红色的宝石，请问您看到过吗？",
                    "\t[老头,man]红色的宝石？那是什么？",
                    "\t[hero]……呃，没事，您慢走。",
                    {
                        "type": "hide",
                        "time": 500
                    },
                    "\t[hero]别人都看不到这些宝石吗……"
                ],
                "false": [
                    "\t[伯伯,man]我最喜欢红色和蓝色，不过这些黄色和绿色的莱姆也令人赏心悦目，在这里真舒服。",
                    {
                        "type": "if",
                        "condition": "flag:4FNPC == 0",
                        "true": [
                            {
                                "type": "sleep",
                                "time": 1000
                            },
                            "\t[hero]……",
                            "\t[伯伯,man]你在等什么？",
                            "\t[hero]我在这附近丢了一颗红色的宝石，请问您看到过吗？",
                            "\t[老头,man]红色的宝石？那是什么？",
                            "\t[hero]……呃，没事。",
                            {
                                "type": "setValue",
                                "name": "flag:4FNPC",
                                "value": "1"
                            }
                        ],
                        "false": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,8": {
            "floorId": "MT03",
            "loc": [
                12,
                8
            ],
            "time": 500
        },
        "12,4": {
            "floorId": "MT05",
            "loc": [
                0,
                4
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0, 20, 31,  0, 20, 20, 20, 20, 20, 20, 20],
    [  0,  0,  0, 20,  0, 31, 20, 31, 20, 17, 17, 20, 20],
    [  0,  0,  0, 20,324, 20, 20,324, 20,  0,  0,  0, 20],
    [ 20, 17, 17, 20,  0,  0,  0,  0,  0,  0, 20,  0,  0],
    [ 20, 32,  0, 31,10020,325,  0,10007,  0, 20, 20,  0, 94],
    [ 20, 20,325, 20,  0,  0,326,  0,  0, 20, 20,  0,10012],
    [ 20, 20,  0,  0,  0,10004, 27,10004,  0,  0,  0, 32, 20],
    [ 20, 20,  0,  0,325, 30,121, 29,325,  0, 20, 20, 20],
    [ 92,  0,  0,  0,  0,10004, 28,10004,  0,  0, 20, 31, 20],
    [ 20, 20,325, 20,  0,  0,326,  0,  0, 20, 20,  0, 31],
    [  0, 27,  0, 20, 20,  0, 20, 20,  0,  0,  0,324,10007],
    [ 32,10007, 32, 20,325,  0,325, 20, 20, 20,326,10005, 32],
    [ 20, 20,10015, 32,  0, 20, 28, 31, 31, 20,  0, 32,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,10072,10073,10074,10075,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10072,10073,10074,10075,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,146,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [10048,10049,10050,10051,  0,  0,  0,  0,10064,10065,10066,10067,  0],
    [10056,10057,10058,10059,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10064,10065,10066,10067,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
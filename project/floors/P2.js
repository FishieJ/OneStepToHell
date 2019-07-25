main.floors.P2=
{
    "floorId": "P2",
    "title": "梦境",
    "name": "梦境",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 0,
    "defaultGround": "ground",
    "bgm": "prologue.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[hero]楼梯直接消失了……",
        "\t[hero]没有上楼梯，看来这里就是塔顶了。",
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[hero]继续前进吧。",
        {
            "type": "loadBgm",
            "name": "11-13.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[redKing]小伙子，刚才被夹那一下爽不爽？",
                "面前的魔物声音极为慈祥，有着一种奇特的亲和感，就像……一位和蔼的老伯伯一样。",
                "\t[hero]（强忍住骂人的冲动）……爽，真的超爽！如你所愿我现在完全没有与你一战的能力，要是打败你才算通过考验的话我现在就走。",
                "\t[redKing]不要担心，能见到我就已经算通过了考验。刚才那组怪物不过是我想要表演一下自己力量的一小部分而已。你想获得这样强大的力量吗？",
                "\t[hero]我……当然想！",
                "\t[redKing]哈哈，我已经给你极为强大的力量了，现在，从梦中醒来吧！",
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": "hero"
                },
                {
                    "type": "setCurtain",
                    "color": [
                        255,
                        255,
                        255,
                        1
                    ],
                    "time": 500
                },
                "\t[hero]谔谔，啊啊啊啊啊啊啊！",
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "status:def",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "status:mdef",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "status:hpmax",
                    "value": "300"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "200"
                },
                "当莫逆醒来时，一切就像往常一样。然而，莫逆却止不住地反复回味这个梦的内容。",
                "\t[hero]那种力量，真的好强，完全超出了我的认知……按理说人做梦想到的东西都是之前见过的，而这种力量应该不属于这类……难道是传说中的神仙托梦？虽然并没有感觉自己的身体有什么变化……",
                "莫逆一边回味着刚才的梦境，一边前往莫家用来进行战斗训练的地方——福神花园，准备试试自己是否真的变强了。",
                "第一章 萌新篇",
                {
                    "type": "changeFloor",
                    "floorId": "MT01",
                    "loc": [
                        6,
                        12
                    ],
                    "direction": "up",
                    "time": 500
                },
                {
                    "type": "setCurtain",
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door0",
                "value": "flag:door0+1"
            },
            {
                "type": "if",
                "condition": "flag:door0==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door0",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door0",
                "value": "flag:door0+1"
            },
            {
                "type": "if",
                "condition": "flag:door0==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door0",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ],
        "4,2": [
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door1",
                "value": "flag:door1+1"
            },
            {
                "type": "if",
                "condition": "flag:door1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door1",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door1",
                "value": "flag:door1+1"
            },
            {
                "type": "if",
                "condition": "flag:door1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door1",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door2",
                "value": "flag:door2+1"
            },
            {
                "type": "if",
                "condition": "flag:door2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door2",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door2",
                "value": "flag:door2+1"
            },
            {
                "type": "if",
                "condition": "flag:door2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door2",
                        "value": "0"
                    }
                ],
                "false": []
            }
        ]
    },
    "afterGetItem": {
        "6,0": [
            "一本怪物手册，记录了怪物的详细信息。",
            "\t[hero]有趣，打开看看……",
            {
                "type": "callBook"
            },
            "\t[hero]woc，这都是什么恶心的属性……这下完了……",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4, 45,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,  0,232,  0,  0, 85,254,  0,  0, 56,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,232,  0,232,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,255,  0,255,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,254,  0,254,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,245,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 81,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4, 81, 81, 81, 81, 81,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "fog",
        5
    ]
}
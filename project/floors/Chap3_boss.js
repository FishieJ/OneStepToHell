main.floors.Chap3_boss=
{
    "floorId": "Chap3_boss",
    "title": "月光大道",
    "name": "月光大道",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "soil",
    "bgm": "boss2.mp3",
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 0
        },
        {
            "type": "loadBgm",
            "name": "postboss1.mp3"
        },
        {
            "type": "loadBgm",
            "name": "boss2.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "3,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "3,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "3,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "3,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "1,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "1,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "1,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "function",
                "function": "function(){\ncore.setBgLight([]);\n}"
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 2000
            },
            {
                "type": "animate",
                "name": "explosion_small",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[邪恶黑影,N425]该死……怎么这么强……",
            "\t[hero]死吧！死吧！",
            "\t[邪恶黑影,N425]这小子的状态定然持续不了多久，你们两个暂时不要跟他硬碰，赶快结成阵法，拖住他！不出多久他必然力竭！",
            {
                "type": "playBgm",
                "name": "boss2.mp3"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": "hero"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    7
                ],
                "time": 500
            },
            {
                "type": "playSound",
                "name": "Darkness3.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        5
                    ],
                    [
                        8,
                        7
                    ],
                    [
                        6,
                        9
                    ],
                    [
                        4,
                        7
                    ]
                ],
                "time": 200
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ],
                    [
                        7,
                        4
                    ],
                    [
                        8,
                        5
                    ],
                    [
                        9,
                        6
                    ],
                    [
                        9,
                        7
                    ],
                    [
                        9,
                        8
                    ],
                    [
                        8,
                        9
                    ],
                    [
                        7,
                        10
                    ],
                    [
                        6,
                        10
                    ],
                    [
                        5,
                        10
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        3,
                        8
                    ],
                    [
                        3,
                        7
                    ],
                    [
                        3,
                        6
                    ],
                    [
                        4,
                        5
                    ],
                    [
                        5,
                        4
                    ]
                ],
                "time": 200
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        4
                    ],
                    [
                        11,
                        6
                    ],
                    [
                        11,
                        8
                    ],
                    [
                        10,
                        10
                    ],
                    [
                        2,
                        10
                    ],
                    [
                        1,
                        8
                    ],
                    [
                        1,
                        6
                    ],
                    [
                        2,
                        4
                    ]
                ],
                "time": 200
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    1,
                    7
                ],
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    11,
                    7
                ],
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        7
                    ]
                ],
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\ncore.setBgLight([\n\t[48, 240, 250],\n\t[368, 240, 250],\n]);\n}"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[hero]这……这……是什么阵法？",
            "\t[熙枫,heroine]（呼，我还以为他失去理智了……）",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    "\t[熙枫,heroine]他们将狂暴的力量聚集在自己身边来增强战斗力。看看能否把狂暴之力从他们身边赶走，然后再击败他们。"
                ],
                "false": [
                    "\t[熙枫,heroine]他们将狂暴的力量聚集在自己身边来增强战斗力。不过强行凝聚狂暴之力必然伴生衰退之力，看看能否利用这些衰退之力打败他们。"
                ]
            },
            "\t[熙枫,heroine]要小心，不要把这些力量引爆了。"
        ],
        "11,7": [
            {
                "type": "addValue",
                "name": "flag:Chap3_boss",
                "value": "1"
            },
            {
                "type": "animate",
                "name": "explosion_small",
                "loc": [
                    11,
                    7
                ]
            },
            {
                "type": "if",
                "condition": "flag:Chap3_boss==2",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([]);\n}"
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000
                    },
                    {
                        "type": "pauseBgm"
                    },
                    "\t[邪恶黑影,N425]这……这不可能……",
                    "\t[邪恶黑影,N425]大阵……要崩溃了……",
                    {
                        "type": "vibrate",
                        "time": 2000,
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "explosion",
                        "loc": [
                            6,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "time": 2000
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "Chap3_final",
                        "loc": [
                            6,
                            9
                        ],
                        "direction": "up",
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[48, 240, 250],\n]);\n}"
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "addValue",
                "name": "flag:Chap3_boss",
                "value": "1"
            },
            {
                "type": "animate",
                "name": "explosion_small",
                "loc": [
                    1,
                    7
                ]
            },
            {
                "type": "if",
                "condition": "flag:Chap3_boss==2",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([]);\n}"
                    },
                    {
                        "type": "setVolume",
                        "value": 0,
                        "time": 2000
                    },
                    {
                        "type": "pauseBgm"
                    },
                    "\t[邪恶黑影,N425]这……这不可能……",
                    "\t[邪恶黑影,N425]大阵……要崩溃了……",
                    {
                        "type": "vibrate",
                        "time": 2000,
                        "async": true
                    },
                    {
                        "type": "animate",
                        "name": "explosion",
                        "loc": [
                            6,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "setCurtain",
                        "color": [
                            255,
                            255,
                            255,
                            1
                        ],
                        "time": 2000
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "Chap3_final",
                        "loc": [
                            6,
                            9
                        ],
                        "direction": "up",
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[368, 240, 250],\n]);\n}"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,3": [
            {
                "type": "sleep",
                "time": 1000
            },
            "\t[熙枫,heroine]（等等，不对劲……）",
            "\t[熙枫,heroine]（该来的还是来了……）",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "explosion",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 1000,
                "async": true
            },
            {
                "type": "playBgm",
                "name": "postboss1.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\ncore.setBgLight([\n\t[208, 208, 250],\n]);\n}"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    6,
                    0
                ]
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    6,
                    12
                ]
            },
            "\t[邪恶黑影,N425]\b[up,6,6]哈哈，已经太晚了。",
            "\t[邪恶黑影,N425]\b[up,6,6]这次你跑不掉了，熙枫。",
            "\t[hero]\b[down,hero]啥？你们在说谁？",
            "\t[邪恶黑影,N425]\b[up,6,6]小子别装傻了，这大半夜的这么努力杀怪，升级还这么快，你不会真觉得你不起眼吧？",
            "\t[邪恶黑影,N425]\b[up,6,6]不过，你就算不杀怪躲起来也是坐以待毙，我们早晚会找到你的。",
            "\t[hero]\b[down,hero]不对，你们要是注意到我，早就该动手了，为什么等到现在？",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    3,
                    3
                ],
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        3
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    9,
                    3
                ],
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        3
                    ]
                ],
                "time": 500
            },
            "\t[恶毒黑影,N425]\b[down,3,3]哼，我也觉得我们早就该动手了，何必费这么大劲布一个陷阱等这小子自己走进来。",
            "\t[邪恶黑影,N425]\b[up,6,6]闭嘴，你懂个啥？我这叫养肥了杀，懂吗？",
            "\t[恶毒黑影,N425]\b[down,3,3]……不懂。",
            "\t[邪恶黑影,N425]\b[up,6,6]你个笨蛋，别忘了我们找她的目的是获得那种力量。这小子实力越强，她恢复得就越好，我们再出手抢过来赚的不就越多吗？",
            "\t[邪恶黑影,N425]\b[up,6,6]而且这小子身上各种道具层出不穷，这里却是能够废了那些玩意。",
            {
                "type": "insert",
                "loc": [
                    0,
                    3
                ],
                "floorId": "EventMap"
            },
            "携带的所有道具已换算成等值的货币。",
            "\t[阴魂黑影,N425]\b[down,9,3]别扯那些乱七八糟的了，赶快动手，免得死于话多。",
            "\t[熙枫,heroine]（你，愿意拼命一搏吗？）",
            "\t[hero]（当然！小姐姐有办法吗？）",
            "\t[熙枫,heroine]（我可以用我的力量提前激发你的潜力，不过这对你身体的负荷极大……）",
            "\t[hero]（多大的代价我都愿意！不要犹豫了！我跟他们拼了！）",
            "\t[熙枫,heroine]（……好。）",
            {
                "type": "animate",
                "name": "dark3",
                "loc": "hero",
                "async": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setValue",
                "name": "flag:morph",
                "value": "1"
            },
            {
                "type": "setHeroIcon",
                "name": "hero3.png"
            },
            {
                "type": "addValue",
                "name": "status:hpmax",
                "value": "5000000"
            },
            {
                "type": "addValue",
                "name": "status:atk",
                "value": "100000"
            },
            {
                "type": "addValue",
                "name": "status:def",
                "value": "50000"
            },
            "进入魔化状态，血量上限增加500万，攻击增加10万，防御增加5万！",
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "status:hpmax"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "value": "status:manamax"
            },
            "状态回满！",
            "\t[熙枫,heroine]（这……竟然黑化了……）",
            "\t[hero]谔谔啊啊啊啊！死吧！",
            "\t[阴魂黑影,N425]\b[down,9,3]哦？竟然用这小子的身体强行发动了血海奥义……这倒是有点麻烦了……",
            "\t[邪恶黑影,N425]\b[up,6,6]哼，自不量力。",
            "\t[邪恶黑影,N425]\b[up,6,6]你们退下，我自己来解决他，让他明白真正的血海强者的力量！",
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        3
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        3
                    ]
                ],
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "E494",
                "loc": [
                    6,
                    6
                ]
            }
        ]
    },
    "cannotMove": {},
    "map": [
    [80076,80054,80054,80054,80054,80055,  0,80053,80054,80054,80054,80054,80075],
    [80047,80057,80057,80057,80057,80058, 83,80056,80057,80057,80057,80057,80045],
    [80047,80065,80065,80065,80065,80066, 83,80064,80065,80065,80065,80065,80045],
    [80047,  0,  0,492,  0,  0, 83,  0,  0,493,  0,  0,80045],
    [80047,  0,320,  0,  0,498, 11,498,  0,  0,320,  0,80045],
    [80047,  0,  0,  0, 11,  0,320,  0, 11,  0,  0,  0,80045],
    [80047,320,  0,497,  0,  0,426,  0,  0,497,  0,320,80045],
    [80047,495,  0, 11,320,  0,  0,  0,320, 11,  0,496,80045],
    [80047,320,  0,497,  0,  0,  0,  0,  0,497,  0,320,80045],
    [80047,  0,  0,  0, 11,  0,320,  0, 11,  0,  0,  0,80045],
    [80047,  0,320,  0,  0,498, 11,498,  0,  0,320,  0,80045],
    [80047,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80045],
    [80068,80038,80038,80038,80038,80039,  0,80037,80038,80038,80038,80038,80067]
],
    "bgmap": [

],
    "fgmap": [

]
}
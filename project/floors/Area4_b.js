main.floors.Area4_b=
{
    "floorId": "Area4_b",
    "title": "迟秋城 地下室",
    "name": "迟秋城 地下室",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 25,
    "defaultGround": "ground",
    "bgm": "17-19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "weather": null,
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "loadBgm",
            "name": "19-21.mp3"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,9": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "!switch:A",
                    "true": [
                        "罐子里有一张纸片。",
                        "纸片上有着狂放的字体写着：\n……由于以上诸多原因，野兽军队的维护成本比起人类军队要低得多，有统计表明……",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        },
                        {
                            "type": "setBlock",
                            "number": "X70013"
                        }
                    ],
                    "false": []
                }
            ]
        },
        "2,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "!switch:A",
                    "true": [
                        "罐子里有一张纸片。",
                        "纸片上有着标准的字体写着：\n……一个强悍的个体可以灭杀成千上万的弱者。但是，研究表明，这些弱者的力量总和往往并不弱于一位强者，故而我猜想，一群训练有素的弱者完全具有抗衡强者的能力……",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        },
                        {
                            "type": "setBlock",
                            "number": "X70013"
                        }
                    ],
                    "false": []
                }
            ]
        },
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[evilBat]活……活人！",
                "\t[hero]咦，还能说话？",
                "\t[evilBat]我……我曾经是这里的城主……因为修炼天赋不够，转而研究如何训练、操控野兽……",
                "\t[evilBat]但我万万没想到的是，一天我在操纵它们的时候，遭到了野兽意志的反噬。",
                "\t[evilBat]而这些长期被人类圈养的野兽，所想的一切便是向我们复仇。",
                "\t[evilBat]等我的意识重新夺回主动权的时候，我只知道这些野兽的意志已经操控我的躯体，毁掉了整座城市。",
                "\t[evilBat]更糟糕的是，我的身躯也被泄露出来的变异材料沾染，变成了这副样子。",
                "\t[evilBat]我早已无颜苟活于世，但我脑中的野兽意志并没有离去，出于生存本能，它们不让我终结自己的性命，因为一旦肉体被毁灭，意志也会随之消散。",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000,
                    "async": true
                },
                "\t[evilBat]我……最后的请求……杀死我……我生前的积蓄……都归你……",
                {
                    "type": "animate",
                    "name": "hand",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "playSound",
                    "name": "attack.mp3"
                },
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        8
                    ],
                    "time": 50
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "time": 0
                },
                {
                    "type": "changePos",
                    "direction": "up"
                },
                {
                    "type": "vibrate",
                    "time": 1000
                },
                "\t[hero]你……！竟然突然袭击我！",
                {
                    "type": "move",
                    "loc": [
                        6,
                        5
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "playSound",
                    "name": "083-Monster05.ogg"
                },
                "\t[evilBat]谔谔啊啊啊啊啊啊！",
                {
                    "type": "move",
                    "loc": [
                        6,
                        6
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "battle",
                    "id": "evilBat"
                },
                {
                    "type": "if",
                    "condition": "flag:hard < 3",
                    "true": [
                        {
                            "type": "setBlock",
                            "number": "yellowKey",
                            "loc": [
                                6,
                                7
                            ]
                        },
                        {
                            "type": "jump",
                            "from": [
                                6,
                                7
                            ],
                            "to": [
                                6,
                                6
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        }
                    ],
                    "false": []
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "time": 0
                },
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        9
                    ]
                },
                {
                    "type": "hide",
                    "time": 0
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            0
                        ]
                    ],
                    "time": 0
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 2000,
                    "async": true
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[hero]……",
                "\t[hero]可恶，怎么突然就出手了……",
                "\t[熙枫,heroine]心善是好事，但是太善良迟早要被这世道坑死。",
                "\t[hero]诶，小姐姐醒啦？",
                "\t[熙枫,heroine]哼，要不是我帮你挡住了刚才它偷袭你的那一下，你现在已经不省人事了。",
                "\t[hero]……谢谢了。",
                "\t[熙枫,heroine]别客气，宝物都拿上，我们走吧。",
                "\t[hero]去哪？",
                "\t[熙枫,heroine]你很快就知道了。"
            ]
        },
        "3,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "!switch:A",
                    "true": [
                        "罐子里有一张纸片。",
                        "纸片上有着标准的字体写着：\n……战阵的第二大核心因素是指挥。指挥的作用就是调动军队中众人的力量，将其汇聚、操控，用以抗衡……",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        },
                        {
                            "type": "setBlock",
                            "number": "X70013"
                        }
                    ],
                    "false": []
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": "MT41",
            "loc": [
                2,
                12
            ],
            "direction": "up",
            "time": 2000,
            "ignoreChangeFloor": false
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [310,310,310,310,310,310, 91,310,310,310,310,310,310],
    [310,310,310,310,310,310,70209,310,310,310,310,310,310],
    [310,70013, 31, 32,310,70216,70217,70218,310, 32, 31,70013,310],
    [310, 31, 81, 31, 81,  0,  0,  0, 81, 31, 81, 31,310],
    [310,380, 31,70005,  0,  0,70013,  0,  0,70013, 31,380,310],
    [310, 31,70013,  0,  0,70013,264,70013,  0,  0,70013, 31,310],
    [310,70013,70005,70013,  0,  0,  0,  0,  0,70013,70013,70013,310],
    [310,  0, 31,70013,  0,  0,70013,  0,  0,70013, 31,  0,310],
    [310, 31,  0, 32,70013,  0,  0,  0,70013, 32,  0, 31,310],
    [310,  0,353,70013, 34,70013, 85,70013, 34,70005,353,  0,310],
    [310,352,70013,351,  0,380,  0,380,  0,351,70013,352,310],
    [310,  0,354,  0, 31,  0, 33,  0, 31,  0,354,  0,310],
    [310,310,310,310,310,310,310,310,310,310,310,310,310]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,120150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70212,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,70208,  0,70210,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,70208,  0,70210,  0,  0,  0,  0,  0,  0,  0,  0,70106,  0,  0,  0,  0,  0,70106,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
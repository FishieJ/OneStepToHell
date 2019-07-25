main.floors.Area4_1=
{
    "floorId": "Area4_1",
    "title": "迟秋城 南",
    "name": "迟秋城 南",
    "width": 40,
    "height": 20,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 25,
    "defaultGround": "grass2",
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "playBgm",
            "name": "rain.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 500
        },
        {
            "type": "freeBgm",
            "name": "13-15.mp3"
        },
        {
            "type": "freeBgm",
            "name": "15-17.mp3"
        },
        {
            "type": "freeBgm",
            "name": "boss0.mp3"
        },
        {
            "type": "freeBgm",
            "name": "postboss0.mp3"
        },
        {
            "type": "if",
            "condition": "flag:hard < 3",
            "true": [],
            "false": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            19,
                            12
                        ]
                    ],
                    "time": 0
                }
            ]
        },
        "\t[hero]呼……哈……大概也冷静下来了。",
        "\t[hero]天色渐渐地变黑了……我这是跑到了什么地方……",
        "\t[hero]回想起昨天我还在莫家百无聊赖地活着，感觉就像是做了一个很长的梦……",
        "\t[黑影,unknown]（少女的声音）你好，可否帮我一个忙……",
        "\t[hero]谁？！你怎么会在我的脑海中？",
        "\t[黑影,unknown]我现在……很虚弱……变得……更强……我……才能……再苏醒……",
        "\t[hero]等等，到底什么情况？喂！喂！！",
        "\t[hero]……",
        "\t[hero]变得更强吗？这倒正好也是我所想的。正好这里有不少境界和我相仿的怪物，在这遗弃之地大开杀戒应该没人管吧……",
        {
            "type": "setVolume",
            "value": 0,
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "17-19.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "33,8": {
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
                        "纸片上有着严整的字体写着：\n……城主邱擎发表讲话，称本城的发展蒸蒸日上……",
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
        "27,14": {
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
                        "纸片上有着严整的字体写着：\n《迟秋城快报》\n论变异野兽饲养的N大好处",
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
        "21,19": [
            {
                "type": "if",
                "condition": "flag:gentle_clicked != 1",
                "true": [
                    "系统给玩家的提示：\n本区开始出现带有领域伤害的怪物，勇士只要经过他们身边就会受到伤害。\n面对这类怪物时，一个常用的技巧是\r[yellow]轻点\r[white]，也就是不进行移动直接获取面前的物品。操作方法为，面向物品，按\r[yellow]空格\r[white]或者\r[yellow]双击勇士\r[white]。",
                    "如果无法直接面对物品，可以按\r[yellow]Z\r[white]键或\r[yellow]单击勇士\r[white]令其转身。",
                    "在很多其他魔塔里这个技巧也有效。",
                    "现在就来试试用\r[yellow]轻点\r[white]获取牌子上方的绿宝石吧。",
                    "另外，本区域由大地图构成，浏览地图（\r[yellow]PgUp/PgDown\r[white]）时按\r[yellow]Z\r[white]键可以进行总览。"
                ],
                "false": [
                    "系统给玩家的提示：本区域由大地图构成，浏览地图（\r[yellow]PgUp/PgDown\r[white]）时按\r[yellow]Z\r[white]键可以进行总览。"
                ]
            }
        ],
        "17,19": [
            "\t[系统提示]从这里开始勇士拥有主动技能\r[yellow]强击\r[white]了。开启主动技能后下一场战斗自动使用，需要消耗\r[blue]魔法\r[white]，目前只能依靠拾取魔法结晶（蓝色方块）来回复魔法。",
            {
                "type": "if",
                "condition": "flag:hard < 3",
                "true": [
                    "\t[系统提示]\r[yellow]强击\r[white]这个主动技能可以对怪物造成额外伤害，虽然攻击力提升之后能够造成更多的额外伤害，不过实际上往往还是在勇士攻击力和防御力都比较低的时候使用收益更大。另外，这个伤害是\r[yellow]技能伤害\r[white]，不会被闪避、重甲等属性减免，对这类怪使用技能，或许会有奇效！"
                ],
                "false": [
                    "\t[系统提示]\r[yellow]强击\r[white]这个主动技能可以对怪物造成额外伤害，这个伤害是\r[yellow]技能伤害\r[white]，不会被闪避、重甲等属性减免。"
                ]
            },
            {
                "type": "if",
                "condition": "!core.platform.isPC",
                "true": [
                    "\t[系统提示]点击工具栏右侧可以切换到拓展键盘，方便切换技能开关状态。"
                ],
                "false": []
            }
        ],
        "19,12": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:hard < 3",
                    "true": [
                        "\t[系统提示]这把钥匙是乱撞/简单难度的福利。",
                        {
                            "type": "addValue",
                            "name": "item:yellowKey",
                            "value": "1"
                        },
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ],
                    "false": [
                        "\t[系统提示]这把钥匙是乱撞/简单难度的福利，困难难度无法获取。",
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ]
                }
            ]
        },
        "19,17": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "data": [
                "一道黄色的大门赫然矗立在眼前。",
                "\t[hero]哈哈，这就是那把钥匙的真正用途吧！里面一定有很多好东西。",
                {
                    "type": "openDoor",
                    "needKey": true
                }
            ]
        }
    },
    "changeFloor": {
        "19,0": {
            "floorId": "Area4_2",
            "loc": [
                19,
                19
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "32,0": {
            "floorId": "Area4_2",
            "loc": [
                32,
                19
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "7,0": {
            "floorId": "Area4_2",
            "loc": [
                7,
                19
            ],
            "time": 500,
            "ignoreChangeFloor": false
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "21,18": [
            {
                "type": "setValue",
                "name": "flag:gentle_clicked",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {
        "19,17": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "wuyu",
                "loc": "hero"
            },
            "\t[hero]黄钥匙直接消失了……",
            "\t[hero]原来一把钥匙只能开一个门吗！这破钥匙，还宝物，明明就是劣质消耗品！",
            "\t[hero]好在这遗迹里面还散落着不少黄钥匙……等等，这种遍地都是的东西，怎么会被柯家的人称为宝贝啊？",
            "\t[hero]……算了不想那些了。继续前进吧。"
        ]
    },
    "cannotMove": {},
    "map": [
    [70128,70193,70129,70153,70129,70129,70133, 91,70135,70129,70153,70129,70192,70194,154,154,70196,70129,70133, 91,70135,70129,70194,154,154,70197,70129,70129,70129,70153,70129,70133, 91,70135,70192,70193,70192,70193,70196,70130],
    [70136,70137,70137,70161,70137,70137,70141,  0,70143,70137,70161,70137,70200,70190,154,154,70204,70137,70141,  0,70143,70200,70202,154,154,70205,70137,70201,70137,70137,70137,70141,  0,70143,70200,70201,70200,70201,70204,70138],
    [70144,70105, 32, 28,  0,212,  0,  0, 21,  0,378,  0, 27, 32,154,154, 32,350,382,  0,382,349, 32,154,154,  0, 32,  0,374, 31, 27,378,  0, 31,  0,374,380, 27, 21,70146],
    [70144, 32,70128,70129,70175,70129,70194,  0,70196,70130,  0,376, 28, 29,154,154,70192,70129,70194,208,70196,70197,70194,154,154, 28,  0,70192,70192,70153,70194,  0,70013,70013,  0,  0,374, 28, 29,70146],
    [70144, 27,70136,70137,70183,70137,70202,374,70204,70138,  0,70126,70127,374,154,154,70137,70201,70202,351,70204,70205,70202,154,154,70120,374,70201,70182,70200,70202,  0, 32,  0,70013,378,70124,70125,374,70146],
    [70144,  0,70144, 31,70105,376, 29, 27,70121,70146, 28,  0,  0,  0,154,154, 32,349,420, 32,420,350, 32,154,154,  0,  0,375,  0,380,  0,374,  0,383,  0,  0,  0,378,  0,70146],
    [70144,378,70144,  0, 28, 29,70120,  0, 31,70146,212,  0,378, 31,154,154,154,154,154,154,154,154,154,154,154, 31,  0,  0,70192,70193,70192,70194,  0,70013,70013, 28,70013, 28, 31,70146],
    [70144,  0,70152,70133,374,70135,70193,70175,70129,70154,  0,378,  0,70128,154,154,154,154,154,154,154,154,154,154,154,70130, 27,  0,70201,70161,70204,70202, 32,  0,  0,70013,380,70013,70013,70146],
    [70144,  0,70160,70141,  0,70143,70201,70183,70137,70162, 27,70121,  0,70136,70190,70137,70183,70137,70138, 21,70136,70137,70183,70182,70137,70138,  0, 31,383,  0,  0,375,  0,70005,375,  0,  0, 27,70197,70154],
    [70144,378,  0,212, 32, 29,378, 30,  0,378,  0, 32,212,70144, 29, 27,374, 31,70146,376,70144, 31,222, 28, 29,70146,375,  0,70013,70013, 28,  0,70013,70013,  0,375, 32,70013,70205,70162],
    [70144,  0,70114,  0,70013,70004,  0,70115, 28,  0,70193,70194, 31,70144, 32,70013, 31, 28, 81, 31, 81, 27, 31,70013, 32,70146,  0,70013,70013,383,  0, 30,  0,70013,70013,  0,70013, 32, 29,70120],
    [70144, 27,70122,383, 29, 32,212,70123,  0, 32,70201,70202,  0,70152,70153,70192,70175,70193,70154, 27,70152,70193,70175,70191,70193,70154, 28,  0,380,  0,70013,  0, 32,378,  0, 21,  0,383,  0,70146],
    [70144,  0,212,  0,70124,70125,  0,380,  0,383, 31,  0, 21,70160,70161,70190,70183,70201,70162, 21,70160,70200,70183,70161,70204,70162,  0, 32,  0,375,70013,375,  0,70013, 29,  0,70013,70013,  0,70146],
    [70128,70193,70194, 28,  0,70004,376,  0,70193,70192,70193,70194,  0,70014,212, 32,  0, 27,70006,212,  0,70013, 28,  0, 31,70013,378,  0,70013,  0, 27,  0,70013, 27,70013,70013,380,  0,381,70146],
    [70136,70201,70202,70203,378,  0, 32,378,70200,70182,70201,70202,212,70006,  0,212,70006,  0,212,70014,  0,375,  0,70013,  0,  0,  0,70005,70013,70013,  0, 32,  0,381,  0,  0,375,70013, 28,70146],
    [70144,380, 27,212,  0,380,  0,  0, 27,  0,378,  0, 32,  0, 28,70014, 27,378,  0,  0,  0,  0,383,70013,  0,  0,375, 27,  0, 31,383,  0,  0,  0,70013, 31,70013, 32,  0,70146],
    [70152,70193,70153,70175,70153,70153,222,70174,70129,70175,70129,70129,70129,70174,70191,70129,70175,70129,70133,  0,70135,70194, 27,70194,70197,70194,70197,70192,70194,  0,70196,70193,381,70192,70192,70175,70153,70192,70153,70154],
    [70160,70201,70137,70183,70137,70161, 81,70182,70137,70183,70161,70190,70161,70182,70137,70137,70183,70161,70141, 81,70143,70202,70203,70202,70205,70201,70205,70161,70202,70203,70204,70201, 81,70201,70161,70183,70137,70137,70137,70162],
    [ 34, 27,  0,222,  0, 32,  0, 32,  0,222,  0, 28, 34,70114,  0,380,212,  0,  0,  0,  0, 29,376,380,  0,70114, 34, 27,  0,381,  0, 32,  0, 32,  0,381,  0, 28, 34,  0],
    [ 27,  0,70109,70110,  0,  0, 30,  0,  0,70109,70110,  0, 28,70122,380,70109,70110,129,  0,  0,  0,129,70109,70110,380,70122, 27,  0,70109,70110,  0,  0, 30,  0,  0,70109,70110,  0, 28,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70013,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70134,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70118,70119,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70112,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70116,70117,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,70113,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,70112,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,70113,  0,  0,70129,70129,70175,70129,70130,  0,70128,70129,70175,70174,70129,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,70106,  0,  0,  0,  0,70107,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70112],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,70116,70117,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,70084,70085,70086,70087,  0,70142,  0,70084,70085,70086,70087,  0,  0,70084,70085,70086,70087,  0,70134,  0,70084,70085,70086,70087,  0,  0,70084,70085,70086,70087,  0,70142,  0,70084,70085,70086,70087,  0,  0],
    [  0,70092,70093,70094,70095,  0,  0,  0,70092,70093,70094,70095,  0,70106,70092,70093,70094,70095,  0,  0,  0,70092,70093,70094,70095,70106,  0,70092,70093,70094,70095,  0,  0,  0,  0,70093,70094,70095,  0,  0],
    [  0,70100,70101,70102,70103,  0,  0,  0,70100,70101,70102,70103,  0,  0,70100,70101,70102,70103,  0,  0,  0,70100,70101,70102,70103,  0,  0,70100,70101,70102,70103,  0,  0,  0,70100,70101,70102,70103,  0,  0],
    [  0,70108,  0,  0,70111,  0,  0,  0,70108,  0,  0,70111,  0,  0,70108,  0,  0,70111,  0,  0,  0,70108,  0,  0,70111,  0,  0,70108,  0,  0,70111,  0,  0,  0,70108,  0,  0,70111,  0,  0]
],
    "weather": [
        "rain",
        2
    ],
    "bgm": "17-19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ]
}
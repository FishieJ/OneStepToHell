main.floors.MT60=
{
    "floorId": "MT60",
    "title": "永夜平原 外围",
    "name": "永夜平原 外围",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 50,
    "defaultGround": "grass2",
    "bgm": "boss1.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setValue",
            "name": "flag:charge_atk",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:last_direction",
            "value": "null"
        },
        {
            "type": "function",
            "function": "function(){\ncore.updateStatusBar();\n}"
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "up",
                "up",
                "up",
                "up"
            ]
        },
        "\t[hero]这里的怪物也杀得差不多了，接下来……",
        {
            "type": "show",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "time": 500
        },
        "\t[hero]嗯？这个猫耳少女是什么时候出现的？之前完全没有感受到她的气息……",
        "\t[熙枫,heroine]小心，大半夜的出现在这种地方，绝对不是寻常人……",
        "\t[叶芊,yeq]你好啊，我叫叶芊。",
        "\t[hero]……你好，我叫莫逆。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[叶芊,yeq]……你脑海里那位小姐姐不出来自我介绍一下吗？",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "playBgm",
            "name": "boss1.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        "\t[hero]你！……",
        "\t[熙枫,heroine]（看来是躲不过去了。）",
        "\t[熙枫,heroine]我叫\r[yellow]东风\r[white]，叶芊小姐这样拦住我们有何贵干？",
        "\t[叶芊,yeq]没什么特别的事情，只是觉得很有趣，一般的修炼者都是独自历练的，有一些背景的人则是随身携带老爷爷出行，像你这样随身携带小姐姐的，我还是第一次见到哦？",
        "\t[叶芊,yeq]东风小姐生前背景也不一般吧？",
        "\t[hero]无可奉告！你这样打听别人的隐私，到底有什么目的？",
        "\t[叶芊,yeq]真是粗暴，东风小姐的残魂怎么就寄托在你这样的人身上呢？",
        "\t[hero]？？？这还能不能讲道理了？",
        "\t[叶芊,yeq]我对东风小姐可是一见钟情呢，不如跟了我吧？",
        "\t[叶芊,yeq]我一直觉得那些随身带老爷爷的人好蠢，带小姐姐就不一样了喵。",
        "\t[hero]？？？原来这才是你的目的？",
        {
            "type": "choices",
            "text": "\t[叶芊,yeq]你可否配合一下，主动把她让给我？",
            "choices": [
                {
                    "text": "交出熙枫",
                    "action": [
                        "\t[hero]既然你这么喜欢她，那你把她的残魂拿去好了。",
                        "\t[叶芊,yeq]嘻嘻，谢谢啦，我会好好照顾她的。",
                        {
                            "type": "setVolume",
                            "value": 0,
                            "time": 1000
                        },
                        {
                            "type": "pauseBgm"
                        },
                        {
                            "type": "setCurtain",
                            "color": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "time": 1000
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0,
                            "async": true
                        },
                        "当莫逆说出那句话的时候，他感觉不到熙枫的任何反应。随着她的残魂被抽离而出，心中的空虚感使得莫逆明白，他失去的东西绝对不仅仅是洞察怪物、快速升级的能力……",
                        "熙枫的残魂已经近乎凝实，被抽离而出的时候表情呆若木鸡，如同刀板上的鱼一般无喜无悲。",
                        "莫逆感到一阵心虚，马上低下头，不敢再多看她哪怕一眼。",
                        "莫逆回到莫家，很快便以强大的实力镇服了莫家的诸多萌新，成为了新的家主。作为蓝海巅峰的强者，莫逆使得莫家人才辈出，蓝海强者层出不穷，这使得他在莫家威望极盛，被认为是莫家有史以来最伟大的一任家主，而他杀死前任家主的事情也没有人计较了。",
                        "在莫家一片欣欣向荣的同时，莫逆的修为却始终无法再进一步、晋入红海境界。也许是因为他的心中，始终存在着一个挥之不去的阴影，这是多少外物都补偿不了的。",
                        {
                            "type": "win",
                            "reason": "蓝海王中王"
                        }
                    ]
                },
                {
                    "text": "我拒绝！",
                    "action": [
                        {
                            "type": "setVolume",
                            "value": 0,
                            "time": 2000
                        },
                        {
                            "type": "playBgm",
                            "name": "preboss1.mp3"
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0
                        },
                        "\t[hero]我能感觉出来你不是坏人，但是，我拒绝。",
                        "\t[叶芊,yeq]哦？",
                        "\t[hero]曾经的我就是个穷山沟里的萌新，家里最厉害的人是蓝海一阶，而我，则是萌新一段。我在家族里受尽屈辱，大家都说我是个废物，邻家的小孩都来欺负我……",
                        "\t[hero]所以我想变强，我不想被其他人欺负、嘲笑，要是有萌新九段的修为就足够受人尊敬了……至于红海，血海，对我来讲不过是一个名字罢了，真的到了那种境界又如何？",
                        "\t[hero]后来，熙……小姐姐的出现改变了这一切。在她的指导下我的境界一路飞升，让那些曾经看不起我的人再也无法鄙视我。",
                        "\t[hero]更重要的是，我变强不再是为了自己，而是为了有足够的能力报答她。",
                        "\t[hero]而且，我真的很喜欢东风姐姐，我想要让她能够一直陪着我！",
                        "\t[熙枫,heroine]逆……",
                        {
                            "type": "setVolume",
                            "value": 0,
                            "time": 2000
                        },
                        {
                            "type": "playBgm",
                            "name": "boss1.mp3"
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0
                        },
                        "\t[叶芊,yeq]听了你这番话，我反倒更想得到她了哦？",
                        "\t[叶芊,yeq]哎，既然这样，莫怪我动手抢夺了。",
                        "\t[hero]多说无益！",
                        "\t[叶芊,yeq]很好，我这就让你领教一下真正的蓝海巅峰的力量！",
                        {
                            "type": "setBlock",
                            "number": "yeq_battle",
                            "loc": [
                                6,
                                3
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,6": {
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
        "4,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,9": {
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
        "5,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,8": {
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
        "7,5": {
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
        "8,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,2": {
            "trigger": "action",
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "battle",
                    "id": "yeq_battle_final"
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "setBlock",
                    "number": "yeq"
                },
                {
                    "type": "move",
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "up"
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 3000,
                    "async": true
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[叶芊,yeq]你，很不错。",
                "\t[hero]呼……哈……",
                "\t[叶芊,yeq]我是说你的意志。我能感觉出来你很坚定地想要跟她在一起。至于你的实力，还是太弱了。",
                "\t[hero]（可恶……她似乎还有余力……）",
                "\t[hero]（我……太弱了……话虽然很难听，但是真tm正确啊。）",
                "\t[熙枫,heroine]够了，你不要再欺负他了。",
                "\t[熙枫,heroine]他现在确实很弱，但我相信他身上的潜力。",
                "\t[叶芊,yeq]哎，跟他打完之后我觉得你这话确实有点可信度。",
                "\t[叶芊,yeq]既然这样，那本小姐告辞了。",
                "\t[叶芊,yeq]东风小姐若是什么时候回心转意，随时可以来艾奇王国的叶家找我。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            1
                        ]
                    ],
                    "time": 500
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            12
                        ]
                    ],
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
                "\t[hero]呼……终于走了……这个叫叶芊的女孩好强……",
                "\t[熙枫,heroine]叶芊……在整个艾奇王国都是有名的顶尖天才，你能在她手下走上几个回合已经很不容易了。",
                "\t[hero]而且我能感觉到她还隐藏了很多实力……为什么，同为蓝海九阶，差距竟然如此之大……",
                "\t[熙枫,heroine]这世上，总有些天才妖孽，足以令普通人黯然失色。",
                "\t[熙枫,heroine]不过你也不要气馁，你继续努力下去一定能超越她的。",
                "\t[hero]有小姐姐这样说我就放心了。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]说起来，小姐姐蓝海九阶的时候有她厉害吗？",
                "\t[熙枫,heroine]嗯？你问这个干嘛？",
                "\t[hero]我只是好奇啊，或者小姐姐给我讲一讲你以前的故事，随便什么都行。",
                "\t[熙枫,heroine]……不行，不能说。",
                "\t[hero]……唉，真没意思。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]对了，她竟然能直接看出你的存在，这是不是意味着我的处境其实很危险？",
                "\t[熙枫,heroine]算你聪明。若是被那些人找到，你连一丝反抗都做不出。",
                "\t[hero]果然还是因为我太弱了……我接下来去哪修炼？",
                "\t[熙枫,heroine]蓝海境界的怪物对你的提升已经没有什么帮助了，接下来只能去打红海生物了。",
                "\t[熙枫,heroine]很危险的。",
                "\t[hero]我不怕！不管是哪里，去就是了！",
                "\t[熙枫,heroine]很好。那么，下一个目的地，红海战场！"
            ]
        },
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT59",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT61",
            "loc": [
                6,
                12
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,3": [
            "\t[yeq_battle]哼哼，你以为这样就结束了？",
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
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        6
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        9
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        7
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        6
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        6
                    ]
                ],
                "time": 100
            },
            {
                "type": "playSound",
                "name": "092-Attack04.ogg"
            }
        ],
        "2,6": [
            {
                "type": "addValue",
                "name": "flag:MT60",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:MT60==2",
                "true": [
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[yeq_battle]有两下子嘛，我要认真了。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": []
            }
        ],
        "10,6": [
            {
                "type": "addValue",
                "name": "flag:MT60",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:MT60==2",
                "true": [
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[yeq_battle]有两下子嘛，我要认真了。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "time": 500
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
    [152,152,152,152,152,152, 89,152,152,152,152,152,152],
    [152,152,152,152,152,152,  0,152,152,152,152,152,152],
    [152,152,  0,  0,152,152,423,152,152,  0,  0,152,152],
    [152,152,  0,  0,  0,  0,387,  0,  0,  0,  0,152,152],
    [152,  0,  0,  0,  0,  0,407,  0,  0,  0,  0,  0,152],
    [152,  0,  0,  0,  0,410,  0,407,  0,  0,  0,  0,152],
    [152,  0,422,  0,410,  0,412,  0,407,  0,421,  0,152],
    [152,  0,  0,410,  0,411,  0,412,  0,409,  0,  0,152],
    [152,  0,  0,  0,408,  0,411,  0,409,  0,  0,  0,152],
    [152,  0,  0,  0,  0,408,  0,409,  0,  0,  0,  0,152],
    [152,152,  0,  0,  0,  0,408,  0,  0,  0,  0,152,152],
    [152,152,152,  0,  0,  0,  0,  0,  0,  0,152,152,152],
    [152,152,152,152,152,  0, 93,  0,152,152,152,152,152]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "fog",
        1
    ],
    "color": [
        0,
        0,
        0,
        0.5
    ]
}
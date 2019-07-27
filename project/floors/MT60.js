main.floors.MT60=
{
    "floorId": "MT60",
    "title": "永夜平原 外围",
    "name": "永夜平原 外围",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 50,
    "defaultGround": "grass2",
    "bgm": "boss1.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setBgLight([]);\n}"
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
        "\t[叶芊,yeq]你好啊，我是来自艾奇王国叶家的叶芊。",
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
        "\t[叶芊,yeq]不如让东风小姐跟了我吧？我可以给你\r[red]很多财物\r作为补偿。",
        "\t[叶芊,yeq]我一直觉得那些随身带老爷爷的人好蠢，带小姐姐就不一样了。",
        "\t[hero]？？？原来这才是你的真实目的？",
        {
            "type": "choices",
            "text": "\t[叶芊,yeq]你可否配合一下，主动把她让给我？",
            "choices": [
                {
                    "text": "交出熙枫",
                    "action": [
                        "\t[hero]你刚才说可以给我\r[red]很多财物\r作为补偿，到底有多少？",
                        "\t[叶芊,yeq]你一定不会失望的。那我就把她带走啦~",
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
                        "熙枫的残魂已经近乎凝实，被抽离而出的时候面无表情，一言不发。",
                        "莫逆感到一阵心虚，马上低下头，不敢再多看她哪怕一眼。",
                        "莫逆回到莫家，很快便以强大的实力镇服了莫家的诸多萌新，成为了新的家主。作为蓝海巅峰的强者，莫逆使得莫家人才辈出，蓝海强者层出不穷，这使得他在莫家威望极盛，被认为是莫家有史以来最伟大的一任家主，而他杀死前任家主的事情也没有人计较了。",
                        "在莫家一片欣欣向荣的同时，莫逆的修为却始终无法再进一步、晋入红海境界，即使叶芊履行了承诺，真的给了他很多财物。也许是因为他的心中，始终存在着一个挥之不去的阴影，这是多少外物都补偿不了的。",
                        "她还会有机会重回巅峰状态吧？莫逆再也无从得知。",
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
                        "\t[hero]你说的倒是好听，什么给我财物作为补偿，其实就是丑恶的交易！我拒绝！",
                        "\t[叶芊,yeq]哦？你都不愿意听一听我愿意支付的价格？她对你来讲，有这么重要？",
                        "\t[hero]曾经的我就是个穷山沟里的萌新，家里最厉害的人是蓝海一阶，而我，则是萌新一段。我在家族里受尽屈辱，大家都说我是个废物，邻家的小孩都来欺负我……家主给我取了“莫逆”这么个名字，大概也是希望我不要违逆，逆来顺受。",
                        "\t[hero]所以我想变强，我不想被其他人欺负、嘲笑，要是有萌新九段的修为就足够受人尊敬了……至于红海，血海，对我来讲不过是一个名字罢了，真的到了那种境界又如何？",
                        "\t[hero]后来，熙……小姐姐的出现改变了这一切。在她的指导下我的境界一路飞升，让那些曾经看不起我的人再也无法鄙视我。",
                        "\t[hero]更重要的是，我变强不再是为了自己，我早就在心里暗中发誓，等我有足够的能力，一定要报答她。所以你别想让我把她卖给你！",
                        "\t[熙枫,heroine]莫逆……",
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
                        "\t[叶芊,yeq]哎，既然这样，莫怪我动手抢夺了。放心，等我打赢了也会付钱的。",
                        "\t[hero]多说无益！",
                        "\t[叶芊,yeq]很好，我这就让你领教一下真正的蓝海巅峰的力量！",
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": [
                                6,
                                3
                            ],
                            "async": true
                        },
                        {
                            "type": "setBlock",
                            "number": "yeq_battle",
                            "loc": [
                                6,
                                3
                            ]
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.setBgLight([\n\t[208, 112, 150]\n]);\n}"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nif (core.getFlag('60_finished', 0) > 0) {\n\tcore.setFlag('bgLight', []);\n\tcore.drawMap();\n}\n}"
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
                    "type": "loadBgm",
                    "name": "postboss1.mp3"
                },
                {
                    "type": "loadBgm",
                    "name": "23-1.mp3"
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
                    "type": "function",
                    "function": "function(){\ncore.setBgLight([]);\ncore.setFlag('60_finished', 1);\n}"
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
                {
                    "type": "if",
                    "condition": "flag:hard < 3",
                    "true": [
                        {
                            "type": "setBlock",
                            "number": "yellowKey",
                            "loc": [
                                [
                                    6,
                                    1
                                ]
                            ]
                        },
                        {
                            "type": "jump",
                            "from": [
                                6,
                                1
                            ],
                            "to": [
                                6,
                                7
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        }
                    ],
                    "false": []
                },
                {
                    "type": "if",
                    "condition": "flag:hard < 2",
                    "true": [
                        {
                            "type": "setBlock",
                            "number": "blueKey",
                            "loc": [
                                [
                                    6,
                                    1
                                ]
                            ]
                        },
                        {
                            "type": "jump",
                            "from": [
                                6,
                                1
                            ],
                            "to": [
                                6,
                                9
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        }
                    ],
                    "false": []
                },
                {
                    "type": "sleep",
                    "time": 1000
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
                "\t[熙枫,heroine]这倒不必太担心，一般人绝对感应不到我的。不过，\r[red]那些人\r还是可以的，若是你被他们找到，连还手之力都没有。",
                "\t[hero]果然还是因为我太弱了……我接下来去哪修炼？",
                "\t[熙枫,heroine]红海境界的生物对你来讲还是有些危险，先找一些蓝海巅峰的怪物吧。",
                "\t[hero]就算是红海境界的生物我也不怕！不管哪里，去就是了！",
                "\t[熙枫,heroine]很好。那么，先回去把地上的血瓶都搜集了，再踏入传送阵吧。"
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
            "data": [
                {
                    "type": "if",
                    "condition": "core.status.hero.lv < 18 || (core.status.hero.lv == 18 && core.status.hero.experience < 64791)",
                    "true": [
                        "\t[hero]前面好像还有怪物没有清理……",
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "insert",
                            "loc": [
                                3,
                                0
                            ],
                            "floorId": "EventMap"
                        },
                        {
                            "type": "exit"
                        }
                    ],
                    "false": []
                },
                {
                    "type": "confirm",
                    "default": true,
                    "text": "确定已经准备好了吗？",
                    "yes": [
                        {
                            "type": "sleep",
                            "time": 1000
                        },
                        "\t[hero]怎么了？",
                        "\t[熙枫,heroine]……没什么，快走。",
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": "hero"
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                641,
                                641
                            ]
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
                            "type": "sleep",
                            "time": 2000
                        },
                        {
                            "type": "animate",
                            "name": "explosion",
                            "loc": [
                                6,
                                5
                            ],
                            "async": true
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    5
                                ]
                            ],
                            "time": 1000
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    6,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    6,
                                    4
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    6,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    5,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    7,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    8,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    6,
                                    7
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    5,
                                    4
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    5,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    7,
                                    4
                                ]
                            ]
                        },
                        {
                            "type": "setBgFgBlock",
                            "name": "bg",
                            "number": "autotile10",
                            "loc": [
                                [
                                    7,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.setBgLight([\n\t[208, 176, 250],\n]);\n}"
                        },
                        {
                            "type": "playBgm",
                            "name": "postboss1.mp3"
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 500
                        },
                        "\t[???,N425]\b[down,6,5]还是晚了一步吗……",
                        {
                            "type": "animate",
                            "name": "explosion_small",
                            "loc": [
                                6,
                                0
                            ],
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    0
                                ]
                            ],
                            "time": 500
                        },
                        "\t[???,N425]\b[down,6,5]可恶……已经跑了……",
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": [
                                5,
                                3
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": [
                                7,
                                3
                            ],
                            "async": true
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    5,
                                    3
                                ]
                            ],
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    7,
                                    3
                                ]
                            ],
                            "time": 500
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.setBgLight([\n\t[208, 176, 250],\n\t[176, 112, 200],\n\t[240, 112, 200],\n]);\n}"
                        },
                        "\t[???,N425]\b[down,5,3]你怎么回事，搞这么大动静？",
                        "\t[???,N425]\b[down,6,5]她已经走了。",
                        "\t[???,N425]\b[down,5,3]能感应到她传送的位置吗？",
                        "\t[???,N425]\b[down,6,5]不能，不过我给传送做了点手脚。",
                        "\t[???,N425]\b[down,7,3]所以她现在在哪？",
                        "\t[???,N425]\b[down,6,5]红海战场。",
                        "\t[???,N425]\b[down,5,3]哈哈，这倒是个好地方。没有达到血海境界根本无法离开那里，这下我们的搜索范围就大大减小了。",
                        "\t[???,N425]\b[down,5,3]偷偷行动，争取在天明之前完成任务。",
                        "\t[???,N425]\b[down,7,3]明白。",
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[???,N425]\b[down,5,3]你跑不掉的……熙枫……",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    5
                                ]
                            ],
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
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
                                    7,
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
                                6,
                                5
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": [
                                5,
                                3
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "yongchang",
                            "loc": [
                                7,
                                3
                            ]
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.setFlag('bgLight', []);\n}"
                        },
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT66",
                            "loc": [
                                6,
                                12
                            ],
                            "direction": "up",
                            "time": 2000
                        }
                    ],
                    "no": [
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "down"
                            ]
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
                        }
                    ]
                }
            ]
        },
        "5,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,3": {
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
        }
    },
    "afterBattle": {
        "6,3": [
            {
                "type": "function",
                "function": "function(){\ncore.setBgLight([]);\n}"
            },
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
            },
            {
                "type": "animate",
                "name": "heal",
                "loc": [
                    2,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "heal",
                "loc": [
                    10,
                    6
                ],
                "async": true
            },
            {
                "type": "function",
                "function": "function(){\ncore.setBgLight([\n\t[80, 208, 150],\n\t[336, 208, 150],\n]);\n}"
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
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([]);\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[yeq_battle]有两下子嘛，我要认真了。",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[208, 80, 150],\n]);\n}"
                    }
                ],
                "false": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[336, 208, 150],\n]);\n}"
                    }
                ]
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
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([]);\n}"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[yeq_battle]有两下子嘛，我要认真了。",
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            6,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[208, 80, 150],\n]);\n}"
                    }
                ],
                "false": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.setBgLight([\n\t[80, 208, 150],\n]);\n}"
                    }
                ]
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
    [152,152,  0,  0,  0,425,387,425,  0,  0,  0,152,152],
    [152,  0,  0,  0,  0,  0,407,  0,  0,  0,  0,  0,152],
    [152,  0,  0,  0,  0,410,426,407,  0,  0,  0,  0,152],
    [152,  0,422,  0,410,  0,412,  0,407,  0,421,  0,152],
    [152,  0,  0,410,  0,411,  0,412,  0,409,  0,  0,152],
    [152,  0,  0,  0,408,  0,411,  0,409,  0,  0,  0,152],
    [152,152,  0,  0,  0,408,  0,409,  0,  0,  0,152,152],
    [152,152,152,  0,  0,  0,408,  0,  0,  0,152,152,152],
    [152,152,152,152,  0,  0,  0,  0,  0,152,152,152,152],
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
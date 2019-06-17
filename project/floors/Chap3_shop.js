main.floors.Chap3_shop=
{
    "floorId": "Chap3_shop",
    "title": "商域",
    "name": "商域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "grass",
    "bgm": "chap3_m.mp3",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0.6);\ncore.setFlag('bgLight', [\n\t[176, 112, 150],\n\t[240, 112, 150],\n\t[48, 272, 150],\n\t[176, 272, 150],\n\t[240, 272, 150],\n\t[368, 272, 150],\n]);\ncore.drawMap();\n}"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]这里就是商人聚集的地方吗？",
        "\t[熙枫,heroine]差不多。实际上就只有两个商人，分别服务于两大宗派。",
        "\t[hero]我记得你说过商人是中立的来着？",
        "\t[熙枫,heroine]没错，但是两大宗派所需的物品截然不同，而且如果两大宗派的弟子一起在同一个商人排队，难免引发混乱。",
        "\t[熙枫,heroine]所以就变成这个样子了，左边的商人只卖镇仙域需要的物品，右边的商人只卖权圣教需要的物品。",
        "\t[hero]说起来，这些商人会不会宰客啊？",
        "\t[熙枫,heroine]商品的定价可不是他们自己能操控的，无论是两大宗派还是这些商人的背后，都有着无数大佬在监视着价格。",
        "\t[熙枫,heroine]不过我们不像两大宗派的弟子有强大的后台，所以尽量不要暴露你的真实身份，不然他们宰你可没人能管。",
        "\t[熙枫,heroine]另外你跟他们说话的时候我尽量不发出信息，免得被人发现。",
        "\t[hero]……明白。"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0.6);\ncore.setFlag('bgLight', [\n\t[176, 112, 150],\n\t[240, 112, 150],\n\t[48, 272, 150],\n\t[176, 272, 150],\n\t[240, 272, 150],\n\t[368, 272, 150],\n]);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "3,8": [
            {
                "type": "if",
                "condition": "!switch:A",
                "true": [
                    "\t[镇仙域商人,woman]\b[up,3,8]欢迎光临。",
                    "\t[镇仙域商人,woman]\b[up,3,8]这位小哥看起来面色不太好，来买解毒药的吧？",
                    "\t[hero]\b[up,hero]（一下就被看穿了吗？……）",
                    {
                        "type": "if",
                        "condition": "core.hasItem('I458')",
                        "true": [
                            "\t[hero]\b[up,hero]（拿出绿色晶体）这个东西你收不收？",
                            "\t[镇仙域商人,woman]\b[up,3,8]出自于毒雾沼泽的矿石？1000金币。",
                            {
                                "type": "addValue",
                                "name": "item:I458",
                                "value": "-1"
                            },
                            {
                                "type": "addValue",
                                "name": "item:coin",
                                "value": "1000"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[镇仙域商人,woman]\b[up,3,8]所以小哥要不要买解毒药？"
                        ],
                        "false": []
                    },
                    "\t[hero]\b[up,hero]……不用了我还能抗住，一会再来买。",
                    {
                        "type": "moveHero",
                        "time": 100,
                        "steps": [
                            "right"
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "addValue",
                        "name": "flag:shop_visited",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "flag:shop_visited == 2",
                        "true": [
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        0,
                                        6
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": []
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[镇仙域商人,woman]欢迎光临！",
                        "choices": [
                            {
                                "text": "卖出绿色晶体（+1000金币）",
                                "color": [
                                    0,
                                    255,
                                    34,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "core.hasItem('I458')",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:I458",
                                                "value": "-1"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:coin",
                                                "value": "1000"
                                            }
                                        ],
                                        "false": [
                                            "\t[hero]手头没有绿色晶体……",
                                            {
                                                "type": "revisit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "便携式血瓶（-200金币）",
                                "color": [
                                    255,
                                    255,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "core.itemCount('coin') >= 200",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:coin",
                                                "value": "-200"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:bring_hp",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            "\t[hero]钱不够了……",
                                            {
                                                "type": "revisit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "便携式蓝瓶（-200金币）",
                                "color": [
                                    255,
                                    255,
                                    255,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "core.itemCount('coin') >= 200",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:coin",
                                                "value": "-200"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:bring_mana",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            "\t[hero]钱不够了……",
                                            {
                                                "type": "revisit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "revisit"
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "if",
                "condition": "!switch:A",
                "true": [
                    "\t[权圣教商人,womanMagician]\b[up,9,8]呦，小哥是新来的吧？",
                    "\t[hero]\b[up,hero]这……您是怎么看出来的？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]资深的镇仙域弟子可不会来我这里自讨没趣，而资深的权圣教弟子嘛……",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]……绝对不会像你这样衣着光鲜。",
                    "\t[hero]\b[up,hero]啊？这是什么意思？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]正好我也挺无聊的，就给你好好讲讲。你知道权圣教的教旨吧？",
                    "\t[hero]\b[up,hero]我记得……好像是……封印自身的力量使得弱者变成强敌，来锻炼自身心性？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]哼，这只是一部分而已。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]权圣教，真正的核心在于“省”。无论是武器还是护甲，要买就买最好的，要么就不买，因为不是最好的迟早会被淘汰掉，买了就是浪费。",
                    "\t[hero]\b[up,hero]最好的？天底下最强大的神器，我不知道是什么，但肯定不会人人都有资格拿到吧？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]当然，这个“最好”的定义对于每个人来讲都不一样，但大致是这么个思想。总之，买的装备一定要耐用，只要能够用很久就不亏。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]所以资深的权圣教弟子，十有八九是赤膊的。原本按照教旨，裤子也应该省了的，但是权圣教高层觉得自家弟子不穿裤子实在有伤风化，所以高层会免费给弟子派发裤子。",
                    "\t[hero]\b[up,hero]……",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[权圣教商人,womanMagician]\b[up,9,8]我不知道小哥是哪个宗派新来的弟子，不过我这里好东西挺多的，来看看吧。",
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "\t[hero]\b[up,hero]你背后这小莱姆是做什么用的？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]这战场上有一些野兽拥有使人衰弱的能力，你应该知道吧？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]这种衰弱十分奇妙，只要经过战斗，效果就会减弱。但是，带着这种效果与强敌作战，无疑是自寻死路。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]所以我们人工养殖了一堆小莱姆……你懂吧？",
                    "\t[hero]\b[up,hero]……懂了。",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    {
                        "type": "addValue",
                        "name": "flag:shop_visited",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "flag:shop_visited == 2",
                        "true": [
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        0,
                                        6
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": []
                    }
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[权圣教商人,womanMagician]来看看吧！",
                        "choices": [
                            {
                                "text": "便携式小莱姆（-100金币）",
                                "color": [
                                    0,
                                    255,
                                    119,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "core.itemCount('coin') >= 100",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "item:coin",
                                                "value": "-100"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:I462",
                                                "value": "1"
                                            }
                                        ],
                                        "false": [
                                            "\t[hero]钱不够了……",
                                            {
                                                "type": "revisit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "addValue",
                        "name": "flag:shop_times",
                        "value": "1"
                    },
                    {
                        "type": "revisit"
                    }
                ]
            }
        ],
        "0,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[壮汉,N464]\b[up,0,6]哎，这位小哥是新来的吧？",
                "\t[hero]\b[up,hero]（看这穿着，这位老哥一定是权圣教的高级弟子……）",
                "\t[hero]\b[up,hero]老哥好眼力，我的确是新来的。",
                "\t[hero]\b[up,hero]你应该是权圣教的弟子吧，怎么跑到这边来了？",
                "\t[壮汉,N464]\b[up,0,6]不瞒你讲，我来这边是卖一样东西的。",
                "\t[壮汉,N464]\b[up,0,6]我偶然间发现了一本知识之书，可以提升人的经验，你是否感兴趣？",
                "\t[hero]\b[up,hero]哦？这可是好东西啊，你就这么舍得卖给我？",
                "\t[壮汉,N464]\b[up,0,6]这书只对红海以下的境界有效，我用不上。",
                "\t[hero]\b[up,hero]听着不错……你卖多少钱？",
                "\t[壮汉,N464]\b[up,0,6]500金币。",
                {
                    "type": "if",
                    "condition": "core.itemCount('coin') < 500",
                    "true": [
                        "\t[hero]钱好像不够……",
                        {
                            "type": "exit"
                        }
                    ],
                    "false": []
                },
                "\t[hero]\b[up,hero]成交。",
                {
                    "type": "addValue",
                    "name": "item:coin",
                    "value": "-500"
                },
                {
                    "type": "addValue",
                    "name": "item:tome",
                    "value": "1"
                },
                "\t[壮汉,N464]\b[up,0,6]哈哈，小哥爽快，我们有缘再见。",
                {
                    "type": "hide",
                    "time": 500
                }
            ]
        },
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "core.status.hero.lv < 19",
                    "true": [
                        "\t[hero]（现在还没必要离开……）",
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "function",
                            "function": "function(){\ncore.insertAction({ \"type\": \"setValue\", \"name\": \"flag:charge_atk\", \"value\": \"0\" }, { \"type\": \"setValue\", \"name\": \"flag:last_direction\", \"value\": \"null\" });\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "hide",
                            "time": 0
                        }
                    ]
                }
            ]
        },
        "6,4": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "Chap3_m",
            "loc": [
                9,
                8
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [10007,10015,10007,10015, 20,  0, 91,  0, 20,10015,10007,10015,10007],
    [10015,10007,10015,10007, 20,  0,  0,  0, 20,10007,10015,10007,10015],
    [10007,10015,10007,10015, 20,  0,  0,  0, 20,10015,10007,10015,10007],
    [10015,10007,10015,10007, 20,103,  0,103, 20,10007,10015,10007,10015],
    [10072,10073,10074,10075, 20,  0,  0,  0, 20,10072,10073,10074,10075],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [464,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [151,103,100146,122,100146,103,151,103,100146,126,100146,103,151],
    [151,100142,100139,  0,100139,100157,151,100142,100139,  0,100139,100142,151],
    [151,100122,100122, 58,100144,100145,151,110173,  0,461,100120,100121,151],
    [151,100130,100130,100137,100152,100153,151,110181,100154,100155,100128,100129,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [
    [  0,10041,10042,  0,  0,  0,  0,  0,  0,  0,10041,10042,  0],
    [10048,10049,10050,10051,  0,  0,  0,  0,  0,10048,10049,10050,10051],
    [10056,10057,10058,10059,  0,  0,  0,  0,  0,10056,10057,10058,10059],
    [10064,10065,10066,10067,  0,  0,  0,  0,  0,10064,10065,10066,10067],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,100149,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
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
            "type": "if",
            "condition": "flag:hard < 3",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "time": 0
                }
            ],
            "false": []
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]这里就是商人聚集的地方吗？",
        "\t[熙枫,heroine]差不多。实际上就只有两个商人，分别服务于两大宗派。",
        "\t[hero]我记得你说过商人是中立的来着？",
        "\t[熙枫,heroine]没错，但是两大宗派所需的物品截然不同，所以就变成这个样子了，一边的商人只卖镇仙域需要的物品，另一边的商人只卖权圣教需要的物品，对两方都更方便。",
        "\t[hero]说起来，这些商人会不会宰客啊？",
        "\t[熙枫,heroine]商品的定价可不是他们自己能操控的，无论是两大宗派还是这些商人的背后，都有着无数大佬在监视着价格。",
        "\t[熙枫,heroine]不过我们不像两大宗派的弟子有强大的后台，所以尽量不要暴露你的真实身份，不然他们宰你可没人能管。",
        "\t[熙枫,heroine]另外你跟他们说话的时候不要跟我交流，免得我被发现。",
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
                            "\t[镇仙域商人,woman]\b[up,3,8]所以小哥从毒雾沼泽找来这么一块矿石一定不容易吧？要不要买解毒药？"
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
                        "type": "sleep",
                        "time": 500
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
                            },
                            "\t[hero]左边好像有个人……去看看吧。"
                        ],
                        "false": []
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.status.hero.lv < 19",
                        "true": [
                            "\t[hero]（先不要在这里买东西了……）",
                            {
                                "type": "exit"
                            }
                        ],
                        "false": [
                            {
                                "type": "choices",
                                "text": "\t[镇仙域商人,woman]欢迎光临！\n（现在有${core.itemCount('coin')}金币）",
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
                                        "text": "便携式血瓶（-100金币）",
                                        "color": [
                                            255,
                                            102,
                                            102,
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
                                            102,
                                            102,
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
                                        "text": "解衰药水（-300金币）",
                                        "color": [
                                            254,
                                            204,
                                            208,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "core.itemCount('coin') >= 300",
                                                "true": [
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:coin",
                                                        "value": "-300"
                                                    },
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:weakWine",
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
                                        "text": "跳跃靴（-300金币）",
                                        "color": [
                                            255,
                                            255,
                                            102,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "core.itemCount('coin') >= 300",
                                                "true": [
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:coin",
                                                        "value": "-300"
                                                    },
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:jumpShoes",
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
                                        "text": "隐身药水（-400金币）",
                                        "color": [
                                            119,
                                            34,
                                            102,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "core.itemCount('coin') >= 400",
                                                "true": [
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:coin",
                                                        "value": "-400"
                                                    },
                                                    {
                                                        "type": "addValue",
                                                        "name": "item:invisibleWine",
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
                    "\t[hero]\b[up,hero]我记得……好像是……“省”。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]不错。根据这个理念，无论是武器还是护甲，要买就买最好的，要么就不买，因为不是最好的迟早会被淘汰掉，买了就是浪费。",
                    "\t[hero]\b[up,hero]最好的？天底下最强大的神器，我不知道是什么，但肯定不会人人都有资格拿到吧？",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]当然，这个“最好”的定义对于每个人来讲都不一样，但大致是这么个思想。总之，买的装备一定要耐用，只要能够用很久就不亏。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]所以资深的权圣教弟子，十有八九是赤膊的。原本按照教旨，裤子也应该省了的，但是权圣教高层觉得自家弟子不穿裤子实在有伤风化，所以高层会免费给弟子派发裤子。",
                    "\t[hero]\b[up,hero]……",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]当然权圣教高层也抠得很，裤子不保修，有些权圣教弟子的裤子在战斗中破损了，就只好不穿裤子了，只要别连内裤都不穿，一般权圣教高层也不会去处罚。",
                    "\t[权圣教商人,womanMagician]\b[up,9,8]毕竟，这样能省一条裤子。",
                    "\t[hero]\b[up,hero]……（这也太奇葩了）",
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
                            },
                            "\t[hero]左边好像有个人……去看看吧。"
                        ],
                        "false": []
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.status.hero.lv < 19",
                        "true": [
                            "\t[hero]（先不要在这里买东西了……）",
                            {
                                "type": "exit"
                            }
                        ],
                        "false": [
                            {
                                "type": "choices",
                                "text": "\t[权圣教商人,womanMagician]来看看吧！\n（现在有${core.itemCount('coin')}金币）",
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
                                        "text": "抑郁石",
                                        "color": [
                                            255,
                                            204,
                                            102,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "switch:Z >= 4",
                                                "true": [
                                                    "\t[hero]已经没必要再买了……",
                                                    {
                                                        "type": "revisit"
                                                    }
                                                ],
                                                "false": []
                                            },
                                            {
                                                "type": "choices",
                                                "text": "\t[权圣教商人,womanMagician]抑郁石可以封印你的一部分生命上限。装备后生命上限降低\r[yellow]20%\r[white]。价格\r[yellow]1500\r[white]金币。",
                                                "choices": [
                                                    {
                                                        "text": "买！",
                                                        "action": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.itemCount('coin') >= 1500",
                                                                "true": [
                                                                    {
                                                                        "type": "addValue",
                                                                        "name": "item:coin",
                                                                        "value": "-1500"
                                                                    },
                                                                    {
                                                                        "type": "addValue",
                                                                        "name": "item:I476",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "addValue",
                                                                        "name": "switch:Z",
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
                                                        "text": "不买",
                                                        "action": [
                                                            {
                                                                "type": "revisit"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "青岚盾",
                                        "color": [
                                            85,
                                            255,
                                            238,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "if",
                                                "condition": "core.values.purify == 1",
                                                "true": [
                                                    "\t[权圣教商人,womanMagician]我已经无法再升级你的青岚盾了。"
                                                ],
                                                "false": [
                                                    {
                                                        "type": "choices",
                                                        "text": "\t[权圣教商人,womanMagician]这个盾牌可以让你面对【净化】时封印自身的一部分护盾，从而使你受到的净化伤害减少。（当前净化倍数为\r[yellow]${core.values.purify}\r[white]，可以用\r[yellow]${625*(2**(7-core.values.purify))}\r[white]金币减少1倍。）",
                                                        "choices": [
                                                            {
                                                                "text": "买！",
                                                                "action": [
                                                                    {
                                                                        "type": "if",
                                                                        "condition": "core.itemCount('coin') >= 625*(2**(7-core.values.purify))",
                                                                        "true": [
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:coin",
                                                                                "value": "-625*(2**(7-core.values.purify))"
                                                                            },
                                                                            {
                                                                                "type": "function",
                                                                                "function": "function(){\ncore.values.purify -= 1;\n}"
                                                                            },
                                                                            {
                                                                                "type": "switch",
                                                                                "condition": "core.values.purify",
                                                                                "caseList": [
                                                                                    {
                                                                                        "case": "5",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield1",
                                                                                                "value": "1"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "case": "4",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield1",
                                                                                                "value": "0"
                                                                                            },
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield2",
                                                                                                "value": "1"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "case": "3",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield2",
                                                                                                "value": "0"
                                                                                            },
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield3",
                                                                                                "value": "1"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "case": "2",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield3",
                                                                                                "value": "0"
                                                                                            },
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield4",
                                                                                                "value": "1"
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "case": "1",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield4",
                                                                                                "value": "0"
                                                                                            },
                                                                                            {
                                                                                                "type": "setValue",
                                                                                                "name": "item:shield5",
                                                                                                "value": "1"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
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
                                                                "text": "不买",
                                                                "action": [
                                                                    {
                                                                        "type": "revisit"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "聊天",
                                        "color": [
                                            255,
                                            221,
                                            0,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "switch",
                                                "condition": "switch:B",
                                                "caseList": [
                                                    {
                                                        "case": "0",
                                                        "action": [
                                                            "\t[hero]果然权圣教商人卖的装备都是些压制自身实力的东西……不过我没想明白为什么你这里会卖便携式小莱姆？权圣教的人会需要这玩意？",
                                                            "\t[权圣教商人,womanMagician]你自己之前都已经说出答案了——压制自己的实力，使得弱者变成强敌来锻炼自身。",
                                                            "\t[hero]什么？就算压制再多的实力，小莱姆也不可能变成强敌吧？",
                                                            "\t[权圣教商人,womanMagician]嘿嘿，那你就错了。我给你讲个故事吧。",
                                                            "\t[权圣教商人,womanMagician]传说权圣教里有一位猛士，专门练习与小莱姆对战。上次封印99.952%的实力，这次封印99.953%的实力。谁也不知道他释放出全力有多强。",
                                                            "\t[权圣教商人,womanMagician]有一次一位红海巅峰的强者说他走了邪道，因为这样做封印的力量太多，根本体验不到真正高强度的战斗，就好像一个普通人自断四肢跟蚂蚁进行搏斗训练一样。他立即反击说“你能封印99.953%的实力击败小莱姆吗？不能就给我闭嘴，别对我指手画脚。”",
                                                            "\t[权圣教商人,womanMagician]那位强者见其顽固，不想跟他浪费时间，直接离去了。他便大肆宣称，在研究如何对战小莱姆方面，自己已经胜过红海巅峰的强者，只等突破血海境界离开这里了，然后继续研究如何对抗小莱姆，对其余战斗皆不感兴趣。众人听闻，虽然心中多有不服，但也没人去反驳他。",
                                                            "\t[权圣教商人,womanMagician]后来权圣教高层听闻，大感兴趣，想要知道这位猛士到底有多厉害，便放出小莱姆战斗悬赏。有一位红海巅峰的强者听闻，便封印了自身99.956%的实力，轻松击败了小莱姆。再之后又陆续有不少红海巅峰，甚至红海高阶的人做到了这点。",
                                                            "\t[权圣教商人,womanMagician]之后这位猛士便不知所踪。",
                                                            "\t[hero]……噗，这什么沙雕故事。",
                                                            "\t[权圣教商人,womanMagician]哼哼，信不信由你了。",
                                                            "\t[权圣教商人,womanMagician]我从来不过问客户买小莱姆的目的，说不准现在还有人这样修炼呢。",
                                                            {
                                                                "type": "moveHero",
                                                                "time": 100,
                                                                "steps": [
                                                                    "left"
                                                                ]
                                                            },
                                                            {
                                                                "type": "sleep",
                                                                "time": 500
                                                            },
                                                            "\t[hero]这个故事是真的吗？",
                                                            "\t[熙枫,heroine]我也不知道……不过这小莱姆的用途绝对不止是解除1层衰弱。",
                                                            "\t[hero]啊？什么意思？打了它又没经验……",
                                                            "\t[熙枫,heroine]也许它可以用来对抗\r[yellow]阻击\r[white]属性。",
                                                            {
                                                                "type": "addValue",
                                                                "name": "switch:B",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "exit"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "case": "1",
                                                        "action": [
                                                            "\t[权圣教商人,womanMagician]你知道吗，拥有上位威压这个属性的怪物，在面对比自己境界高的敌人时，自身的实力反倒会被削弱。",
                                                            "\t[权圣教商人,womanMagician]这个属性的本质，是让等级较低的一方心智动摇，无法发挥全部实力。传说以前曾经有人研究出一种能够坚定心智的技能，来对抗这个属性。",
                                                            "\t[hero]还有这么神奇的技能？",
                                                            "\t[权圣教商人,womanMagician]可惜拥有上位威压的怪物并不多，与其费工夫修成这个技能，不如把时间用在提升境界上面，然后利用这个属性压制怪物。所以这个技能很快就失传了。",
                                                            "\t[hero]可惜了，我觉得心智坚定还是很重要的，在别的地方也会有用处吧。",
                                                            "\t[权圣教商人,womanMagician]只要力量足够强大，走到哪里都是俯视弱者，就不需要心智坚定了。",
                                                            "\t[权圣教商人,womanMagician]不过，也正因为如此，说不定那些力量强大之人，内心反倒比一般人更软弱呢。",
                                                            {
                                                                "type": "animate",
                                                                "name": "wuyu",
                                                                "loc": "hero"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "switch:B",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "exit"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "case": "2",
                                                        "action": [
                                                            "\t[hero]你这里卖的青岚盾，到底是什么来头？",
                                                            "\t[权圣教商人,womanMagician]传说在远古时代，有一位名为\r[yellow]飞贤\r[white]的强者，他拥有一个极其强大的技能，只要对手的护盾大于3000，他就能秒杀对手。",
                                                            "\t[hero]卧槽！这不是比净化强太多了吗！",
                                                            "\t[权圣教商人,womanMagician]由于修炼者在境界晋升的时候不可避免地会获得护盾，所以境界稍高者都因为护盾太高而被直接秒杀，而境界较低者攻防太低，也完全无法与之抗衡，因此飞贤一度无敌于天下。",
                                                            "\t[权圣教商人,womanMagician]后来，有一位名为\r[yellow]风青岚\r[white]的顶尖强者，研究出了抑制自己护盾的方法，打败了飞贤。这就是青岚盾的来历。",
                                                            {
                                                                "type": "animate",
                                                                "name": "wuyu",
                                                                "loc": "hero"
                                                            },
                                                            "\t[hero]怎么想都觉得这故事是瞎编的啊，毕竟，3000以上护盾直接秒杀这种特技也太扯了吧。",
                                                            "\t[权圣教商人,womanMagician]嘿嘿，毕竟是神话故事嘛。",
                                                            {
                                                                "type": "addValue",
                                                                "name": "switch:B",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "exit"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "case": "default",
                                                        "action": [
                                                            {
                                                                "type": "if",
                                                                "condition": "core.values.purify == 1 && switch:K != 1",
                                                                "true": [
                                                                    "\t[hero]这青岚盾，最高只能升级到五阶吗？",
                                                                    "\t[权圣教商人,womanMagician]传说是有六阶的青岚盾的，它能够暂时封印你的全部护盾，使得你完全规避所有的净化伤害，等对方放完净化之后，它还能让你立即把护盾释放出来抵挡伤害。",
                                                                    "\t[权圣教商人,womanMagician]但是这等神物只存在于传说之中，也许当年风青岚击败飞贤，依靠的就是这种程度的神器。我这里是打造不出来的。",
                                                                    {
                                                                        "type": "animate",
                                                                        "name": "wuyu",
                                                                        "loc": "hero"
                                                                    },
                                                                    "\t[hero]……好吧。",
                                                                    {
                                                                        "type": "setValue",
                                                                        "name": "switch:K",
                                                                        "value": "1"
                                                                    },
                                                                    {
                                                                        "type": "exit"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    "\t[hero]（现在没什么想聊的，还是算了）",
                                                                    {
                                                                        "type": "exit"
                                                                    }
                                                                ]
                                                            }
                                                        ]
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
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[hero]（现在就使用它吧。）"
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
        ],
        "6,8": [
            "\t[系统提示]几乎所有商品以及金币在本章结束后都会被清空并换算成分数，唯一的例外是\r[yellow]青岚盾\r[white]（防净化盾牌）。青岚盾总共5个等级，达到最高等级才能进入下一章节。虽然这么说，不是刷分的话请不要刻意省钱。",
            "\t[系统提示]另外，如果感觉游戏变得十分艰难，不妨换一个天赋选择试试。不同天赋并不是完全平衡的，在不合适的时机学习某些天赋会加大游戏难度。"
        ],
        "12,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
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
    "afterGetItem": {
        "12,6": [
            "\t[hero]这谁把钱扔这不管了……",
            "\t[熙枫,heroine]奇怪，虽然半夜没什么人，但白天这里应该是挺热闹的才对，不可能有钱掉在这么显眼的地方还没人管……",
            "\t[hero]……",
            "\t[hero]总之还是拿走了吧。",
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    {
                        "type": "addValue",
                        "name": "item:coin",
                        "value": "10000"
                    }
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:hard == 2",
                "true": [
                    {
                        "type": "addValue",
                        "name": "item:coin",
                        "value": "5000"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "item:coin",
                        "value": "1"
                    }
                ]
            },
            "\t[系统提示]Hard难度是捡不到这个钱的，懂我的意思吧。"
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [10023,10028,10023,10028, 20,  0, 91,  0, 20,10028,10023,10028,10023],
    [10028,10023,10028,10023, 20,  0,  0,  0, 20,10023,10028,10023,10028],
    [10023,10028,10023,10028, 20,  0,  0,  0, 20,10028,10023,10028,10023],
    [10028,10023,10028,10023, 20,103,  0,103, 20,10023,10028,10023,10028],
    [10001,10002,10003,10004, 20,  0,  0,  0, 20,10001,10002,10003,10004],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [464,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 63],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [151,103,10548,122,10548,103,129,103,10548,126,10548,103,151],
    [151,10342,10549,  0,10549,10550,151,10342,10549,  0,10549,10342,151],
    [151,10551,10551, 58,10552,10553,151,10554,  0,461,10555,10556,151],
    [151,10557,10557,10558,10559,10560,151,10561,10562,10563,10564,10565,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [
    [  0,10006,10007,  0,  0,  0,  0,  0,  0,  0,10006,10007,  0],
    [10009,10010,10011,10012,  0,  0,  0,  0,  0,10009,10010,10011,10012],
    [10013,10014,10015,10016,  0,  0,  0,  0,  0,10013,10014,10015,10016],
    [10017,10018,10019,10020,  0,  0,  0,  0,  0,10017,10018,10019,10020],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10566,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
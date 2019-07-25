main.floors.EventMap=
{
    "floorId": "EventMap",
    "title": "难度选择",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 0
        },
        {
            "type": "trigger",
            "loc": [
                11,
                11
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
            {
                "type": "choices",
                "text": "\t[熙枫,heroine]你现在身上好像没有霜寒效果啊……确定要用这个吗？",
                "choices": [
                    {
                        "text": "我就是要用！",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:mana",
                                "value": "-flag:skill3_cost"
                            },
                            {
                                "type": "animate",
                                "name": "skill3",
                                "loc": "hero"
                            },
                            "\t[hero]啊……好舒服……",
                            "\t[熙枫,heroine]……",
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "1"
                            },
                            "由于感到十分舒适，生命值增加了1点。"
                        ]
                    },
                    {
                        "text": "我点错了",
                        "action": []
                    }
                ]
            }
        ],
        "1,0": [
            {
                "type": "choices",
                "text": "\t[熙枫,heroine]你现在身上好像没有中毒效果啊……确定要用这个吗？",
                "choices": [
                    {
                        "text": "我就是要用！",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:mana",
                                "value": "-flag:expelPoison_cost"
                            },
                            {
                                "type": "animate",
                                "name": "light2",
                                "loc": "hero"
                            },
                            "\t[hero]啊……好舒服……",
                            "\t[熙枫,heroine]……",
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "1"
                            },
                            "由于感到十分舒适，生命值增加了1点。"
                        ]
                    },
                    {
                        "text": "我点错了",
                        "action": []
                    }
                ]
            }
        ],
        "0,1": [
            {
                "type": "comment",
                "text": "红海天赋"
            },
            {
                "type": "choices",
                "text": "\t[天赋选择,talent]选择要强化的技能。目前有${item:talentPoint}个天赋点。",
                "choices": [
                    {
                        "text": "强击（${flag:skill1_lv}/3）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "撕裂（${flag:skill4_lv}/4）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    2,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "回复魔法（${flag:talent2_lv}/6）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    4,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "防御（${flag:skill2_lv}/3）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "吸血（${flag:talent1_lv}/5）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    3,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "高级护盾（${flag:talent3_lv}/5）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    5,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "清洁术（${flag:poison_lv}/2）",
                        "color": [
                            160,
                            247,
                            83,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": [
                            {
                                "type": "if",
                                "condition": "core.status.hero.lv < 24",
                                "true": [
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            4
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "0,2": [
            {
                "type": "choices",
                "text": "\t[强击（${flag:skill1_lv}/3）,skill1]\r[red][攻击类]\r[white]每级提升\r[yellow]0.5\r[white]倍攻击力的额外伤害。当前强击造成的额外伤害是\r[yellow]${flag:skill1_val-1}\r[white]倍攻击力。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_val",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,2": [
            {
                "type": "choices",
                "text": "\t[防御（${flag:skill2_lv}/3）,skill2]\r[blue][防御类]\r[white]每级提升\r[yellow]50%\r[white]防御转化率。当前效果为将${flag:skill2_atk_ratio*100}%的攻击力以\r[yellow]${flag:skill2_def_ratio*100}%\r[white]的比例转化为防御。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_def_ratio",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,2": [
            {
                "type": "choices",
                "text": "\t[撕裂（${flag:skill4_lv}/4）,skill4]\r[red][攻击类]\r[white]每级提升\r[yellow]1.5%\r[white]的流失量，并减少\r[yellow]5\r[white]点魔法消耗。当前效果为令敌人每回合开始时流失\r[yellow]${flag:skill4_val}%\r[white]的当前生命值，消耗\r[yellow]${flag:skill4_cost}\r[white]点魔法。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill4_lv >= 4",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_val",
                                        "value": "1.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_cost",
                                        "value": "-5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            2,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "choices",
                "text": "\t[吸血（${flag:talent1_lv}/5）,I_vampire]\r[blue][防御类]\r[white]每级提升\r[yellow]3%\r[white]的吸血。当前吸血比例为\r[yellow]${Math.floor(flag:vampire_ratio * 100)}%\r[white]。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent1_lv >= 5",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:vampire_ratio",
                                        "value": "0.03"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent1_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            3,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,2": [
            {
                "type": "choices",
                "text": "\t[回复魔法（${flag:talent2_lv}/6）,I341]\r[red][攻击类]\r[white]每级使得战斗后多回复\r[yellow]2\r[white]点魔法。当前每场战斗后回复\r[yellow]${flag:mana_regen}\r[white]点魔法。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent2_lv >= 6",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:mana_regen",
                                        "value": "2"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent2_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            4,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,2": [
            {
                "type": "choices",
                "text": "\t[高级护盾（${flag:talent3_lv}/5）,shield0]\r[blue][防御类]\r[white]每级使得每点护盾可以多抵挡\r[yellow]0.3\r[white]点伤害。当前每点护盾可以抵挡\r[yellow]${flag:mdef_ratio}\r[white]点伤害。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent3_lv >= 5",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "comment",
                                        "text": "为了避免js小数点后不准的问题，先×10再÷10"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "flag:mdef_ratio*10"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "flag:mdef_ratio/10"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent3_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            5,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "0,3": [
            {
                "type": "comment",
                "text": "第三章结尾，将所有物品换算为金币。"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('I458')*1000"
            },
            {
                "type": "setValue",
                "name": "item:I458",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('bring_hp')*100"
            },
            {
                "type": "setValue",
                "name": "item:bring_hp",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('bring_mana')*200"
            },
            {
                "type": "setValue",
                "name": "item:bring_mana",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('weakWine')*300"
            },
            {
                "type": "setValue",
                "name": "item:weakWine",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('jumpShoes')*300"
            },
            {
                "type": "setValue",
                "name": "item:jumpShoes",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('invisibleWine')*400"
            },
            {
                "type": "setValue",
                "name": "item:invisibleWine",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "item:coin",
                "value": "core.itemCount('I462')*100"
            },
            {
                "type": "setValue",
                "name": "item:I462",
                "value": "0"
            },
            {
                "type": "function",
                "function": "function(){\ncore.unloadEquip(\"0\");\ncore.unloadEquip(\"1\");\ncore.unloadEquip(\"2\");\ncore.unloadEquip(\"3\");\n}"
            },
            {
                "type": "comment",
                "text": "装备直接清除，不加钱"
            },
            {
                "type": "setValue",
                "name": "item:I476",
                "value": "0"
            }
        ],
        "6,2": [
            {
                "type": "choices",
                "text": "\t[清洁术（${flag:poison_lv}/2）,expelPoison]\r[green][咸鱼类]\r[white]每级使得清洁术耗蓝减少\r[yellow]99\r[white]点。当前耗蓝\r[yellow]${flag:expelPoison_cost}\r[white]点。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:poison_lv >= 2",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:expelPoison_cost",
                                        "value": "-99"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:poison_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            6,
                                            2
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,0": [
            {
                "type": "comment",
                "text": "清除所有冲锋状态。"
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
                "type": "setValue",
                "name": "flag:charge2_battle_extra_cur",
                "value": "0"
            },
            {
                "type": "update"
            }
        ],
        "12,0": [
            {
                "type": "comment",
                "text": "进入魔化状态"
            },
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
                "type": "setHeroIcon",
                "name": "hero3.png"
            },
            {
                "type": "setValue",
                "name": "flag:morph",
                "value": "1"
            },
            {
                "type": "addValue",
                "name": "status:hpmax",
                "value": "flag:skill5_hpmax"
            },
            {
                "type": "addValue",
                "name": "status:hp",
                "value": "flag:skill5_hpmax"
            },
            {
                "type": "addValue",
                "name": "status:atk",
                "value": "flag:skill5_atk"
            },
            {
                "type": "addValue",
                "name": "status:def",
                "value": "flag:skill5_def"
            },
            {
                "type": "setValue",
                "name": "flag:morph_duration",
                "value": "flag:skill5_duration"
            },
            {
                "type": "setValue",
                "name": "item:I_morphed",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I_morph",
                "value": "0"
            },
            {
                "type": "if",
                "condition": "flag:hard > 1",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:no_zone",
                        "value": "true"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:no_laser",
                        "value": "true"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:no_betweenAttack",
                        "value": "true"
                    }
                ],
                "false": []
            },
            {
                "type": "setValue",
                "name": "flag:no_snipe",
                "value": "true"
            }
        ],
        "12,1": [
            {
                "type": "comment",
                "text": "退出魔化状态"
            },
            {
                "type": "animate",
                "name": "darkattack",
                "loc": "hero",
                "async": true
            },
            {
                "type": "setHeroIcon",
                "name": "hero2.png"
            },
            {
                "type": "setValue",
                "name": "flag:morph",
                "value": "0"
            },
            {
                "type": "addValue",
                "name": "status:hpmax",
                "value": "-flag:skill5_hpmax"
            },
            {
                "type": "addValue",
                "name": "status:atk",
                "value": "-flag:skill5_atk"
            },
            {
                "type": "addValue",
                "name": "status:def",
                "value": "-flag:skill5_def"
            },
            {
                "type": "setValue",
                "name": "item:I_morphed",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:morph_cooldown",
                "value": "flag:skill5_cooldown"
            },
            {
                "type": "setValue",
                "name": "item:I_morph_cooldown",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:hard > 1",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:no_zone",
                        "value": "false"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:no_laser",
                        "value": "false"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:no_betweenAttack",
                        "value": "false"
                    }
                ],
                "false": []
            },
            {
                "type": "setValue",
                "name": "flag:no_snipe",
                "value": "false"
            }
        ],
        "1,1": [
            {
                "type": "comment",
                "text": "血海天赋"
            },
            {
                "type": "choices",
                "text": "\t[天赋选择,talent]选择要强化的技能。目前有${item:talentPoint}个天赋点。",
                "choices": [
                    {
                        "text": "高级强击（${flag:skill1_lv2}/3）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    5
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "斩杀（${flag:execute_lv}/3）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    5
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "魔化（${flag:morph_lv}/5）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    2,
                                    5
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "爆攻狂魔（${flag:atk_final_lv}/6）",
                        "color": [
                            170,
                            34,
                            51,
                            1
                        ],
                        "condition": "core.status.hero.lv >= 26",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    4,
                                    5
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "高级防御（${flag:skill2_lv2}/3）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    2,
                                    6
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "冲锋（${flag:charge_lv}/5）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    6
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "势如破竹（${flag:c_charge_lv}/3）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    6
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "爆防狂魔（${flag:def_final_lv}/6）",
                        "color": [
                            0,
                            102,
                            136,
                            1
                        ],
                        "condition": "core.status.hero.lv >= 26",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    4,
                                    6
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    4
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "0,4": [
            {
                "type": "comment",
                "text": "天赋选择"
            },
            {
                "type": "choices",
                "text": "\t[天赋选择,talent]选择天赋类别。目前有${item:talentPoint}个天赋点。",
                "choices": [
                    {
                        "text": "红海天赋",
                        "color": [
                            255,
                            119,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "血海天赋",
                        "color": [
                            255,
                            68,
                            68,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
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
            }
        ],
        "0,5": [
            {
                "type": "choices",
                "text": "\t[高级强击（${flag:skill1_lv2}/3）,skill1]\r[red][攻击类]\r[white]每级提升\r[yellow]1\r[white]倍额外伤害。当前强击造成的额外伤害是\r[yellow]${flag:skill1_val-1}\r[white]倍攻击力。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv < 3",
                                "true": [
                                    "需要【强击】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv2 >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_val",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_lv2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            5
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,5": [
            {
                "type": "choices",
                "text": "\t[斩杀（${flag:execute_lv}/3）,execute]\r[red][攻击类]\r[white]每级提升\r[yellow]10%\r[white]斩杀触发百分比。当前斩杀触发百分比为\r[yellow]${flag:execute_percentage}%\r[white]。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill4_lv < 4",
                                "true": [
                                    "需要【撕裂】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:execute_lv >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:execute_percentage",
                                        "value": "10"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:execute_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            5
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "0,6": [
            {
                "type": "choices",
                "text": "\t[冲锋（${flag:charge_lv}/5）,I_charge2]\r[blue][防御类]\r[white]每级提升\r[yellow]0.4%\r[white]每层冲锋攻击力。当前每层冲锋提升攻击力为\r[yellow]${(100*flag:charge_ratio).toFixed(1)}%\r[white]。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent1_lv < 5",
                                "true": [
                                    "需要【吸血】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:charge_lv >= 5",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:charge_ratio",
                                        "value": "flag:charge_ratio*1000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:charge_ratio",
                                        "value": "4"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:charge_ratio",
                                        "value": "flag:charge_ratio/1000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:charge_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            6
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,6": [
            {
                "type": "choices",
                "text": "\t[势如破竹（${flag:c_charge_lv}/3）,c_charge]\r[blue][防御类]\r[white]每级使得每场战斗额外叠加\r[yellow]1\r[white]层冲锋，并提升\r[yellow]5\r[white]层叠加上限。\n当前每次战斗叠加\r[yellow]${flag:charge2_battle_extra}\r[white]层冲锋，叠加上限为\r[yellow]${flag:charge2_battle_extra_max}\r[white]层。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent3_lv < 5",
                                "true": [
                                    "需要【高级护盾】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:c_charge_lv >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:charge2_battle_extra",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:charge2_battle_extra_max",
                                        "value": "5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:c_charge_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            6
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "choices",
                "text": "\t[魔化（${flag:morph_lv}/5）,I_morph]\r[red][攻击类]\r[white]每级使魔化额外提供\r[yellow]500000\r[white]点生命、\r[yellow]10000\r[white]点攻击、\r[yellow]5000\r[white]点防御，且冷却时间减少\r[yellow]1\r[white]次战斗，魔法消耗降低\r[yellow]20\r[white]点。\n当前魔化提升\r[yellow]${flag:skill5_hpmax}\r[white]点生命、\r[yellow]${flag:skill5_atk}\r[white]点攻击力和\r[yellow]${flag:skill5_def}\r[white]点防御，冷却\r[yellow]${flag:skill5_cooldown}\r[white]次战斗，魔法消耗\r[yellow]${flag:skill5_cost}\r[white]点。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent2_lv < 6",
                                "true": [
                                    "需要【回复魔法】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:morph_lv >= 5",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "core.hasItem('I_morphed')",
                                "true": [
                                    "当前正处于魔化状态，无法学习此天赋。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:morph_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill5_hpmax",
                                        "value": "500000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill5_atk",
                                        "value": "10000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill5_def",
                                        "value": "5000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill5_cooldown",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill5_cost",
                                        "value": "-20"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            2,
                                            5
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "choices",
                "text": "\t[高级防御（${flag:skill2_lv2}/3）,skill2]\r[blue][防御类]\r[white]每级提升\r[yellow]1%\r[white]攻击转化和\r[yellow]50%\r[white]防御转化率。\n当前效果为将\r[yellow]${(flag:skill2_atk_ratio*100).toFixed(0)}%\r[white]的攻击力以\r[yellow]${flag:skill2_def_ratio*100}%\r[white]的比例转化为防御。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv < 3",
                                "true": [
                                    "需要【防御】点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv2 >= 3",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_atk_ratio",
                                        "value": "0.01"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_def_ratio",
                                        "value": "0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_lv2",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            2,
                                            6
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "0,8": [
            {
                "type": "choices",
                "text": "\t[强击（${flag:skill1_lv}/3）,skill1]\r[red][攻击类]\r[white]每级提升\r[yellow]0.5\r[white]倍额外伤害。当前强击造成的额外伤害是\r[yellow]${flag:skill1_val-1}\r[white]倍攻击力。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv2 > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_val",
                                        "value": "-0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill1_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "choices",
                "text": "\t[防御（${flag:skill2_lv}/3）,skill2]\r[blue][防御类]\r[white]每级提升\r[yellow]50%\r[white]防御转化率。当前效果为将${flag:skill2_atk_ratio*100}%的攻击力以\r[yellow]${flag:skill2_def_ratio*100}%\r[white]的比例转化为防御。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv2 > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_def_ratio",
                                        "value": "-0.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill2_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,8": [
            {
                "type": "choices",
                "text": "\t[撕裂（${flag:skill4_lv}/4）,skill4]\r[red][攻击类]\r[white]每级提升\r[yellow]1.5%\r[white]的流失量，并减少\r[yellow]5\r[white]点魔法消耗。当前效果为令敌人每回合开始时流失\r[yellow]${flag:skill4_val}%\r[white]的当前生命值，消耗\r[yellow]${flag:skill4_cost}\r[white]点魔法。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill4_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:execute_lv > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_val",
                                        "value": "-1.5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_cost",
                                        "value": "5"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            2,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "choices",
                "text": "\t[吸血（${flag:talent1_lv}/5）,I_vampire]\r[blue][防御类]\r[white]每级提升\r[yellow]3%\r[white]的吸血。当前吸血比例为\r[yellow]${Math.floor(flag:vampire_ratio * 100)}%\r[white]。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent1_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:charge_lv > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:vampire_ratio",
                                        "value": "-0.03"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent1_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            3,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "choices",
                "text": "\t[回复魔法（${flag:talent2_lv}/6）,I341]\r[red][攻击类]\r[white]每级使得战斗后多回复\r[yellow]2\r[white]点魔法。当前每场战斗后回复\r[yellow]${flag:mana_regen}\r[white]点魔法。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent2_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:morph_lv > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:mana_regen",
                                        "value": "-2"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent2_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            4,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "choices",
                "text": "\t[高级护盾（${flag:talent3_lv}/5）,shield0]\r[blue][防御类]\r[white]每级使得每点护盾可以多抵挡\r[yellow]0.3\r[white]点伤害。当前每点护盾可以抵挡\r[yellow]${flag:mdef_ratio}\r[white]点伤害。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent3_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:c_charge_lv > 0",
                                "true": [
                                    "已经点了后置天赋，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "comment",
                                        "text": "为了避免js小数点后不准的问题，先×10再÷10"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "flag:mdef_ratio*10"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "-3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:mdef_ratio",
                                        "value": "flag:mdef_ratio/10"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:talent3_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            5,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "choices",
                "text": "\t[清洁术（${flag:poison_lv}/2）,expelPoison]\r[green][咸鱼类]\r[white]每级使得清洁术耗蓝减少\r[yellow]99\r[white]点。当前耗蓝\r[yellow]${flag:expelPoison_cost}\r[white]点。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:poison_lv <= 0",
                                "true": [
                                    "已经达到0级，无法重置。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:sword0 > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:sword0",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:expelPoison_cost",
                                        "value": "99"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:poison_lv",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            6,
                                            8
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "没有重置机会了。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            0,
                                            7
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    7
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "0,7": [
            {
                "type": "comment",
                "text": "重置红海天赋"
            },
            {
                "type": "choices",
                "text": "\t[重置天赋选择,I_resetTalent]选择要重置的技能。目前有${item:sword0}次重置机会。",
                "choices": [
                    {
                        "text": "强击（${flag:skill1_lv}/3）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "撕裂（${flag:skill4_lv}/4）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    2,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "回复魔法（${flag:talent2_lv}/6）",
                        "color": [
                            255,
                            85,
                            85,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    4,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "防御（${flag:skill2_lv}/3）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "吸血（${flag:talent1_lv}/5）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    3,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "高级护盾（${flag:talent3_lv}/5）",
                        "color": [
                            68,
                            204,
                            221,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    5,
                                    8
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "清洁术（${flag:poison_lv}/2）",
                        "color": [
                            160,
                            247,
                            83,
                            1
                        ],
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    6,
                                    8
                                ],
                                "floorId": "EventMap"
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
            }
        ],
        "10,0": [
            {
                "type": "comment",
                "text": "状态回满，并将当前生命均作为溢出生命值"
            },
            {
                "type": "addValue",
                "name": "flag:hp_score",
                "value": "status:hp"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "status:hpmax"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "value": "status:manamax"
            }
        ],
        "4,6": [
            {
                "type": "choices",
                "text": "\t[爆防狂魔（${flag:def_final_lv}/6）,shield5]\r[blue][防御类]\r[white]每级被动提升100000点防御力。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill2_lv2 < 3 || flag:charge_lv < 5 || flag:c_charge_lv < 3",
                                "true": [
                                    "需要其他[防御类]技能均点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:def_final_lv >= 6",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "status:def",
                                        "value": "100000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:def_final_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            4,
                                            6
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,5": [
            {
                "type": "choices",
                "text": "\t[爆攻狂魔（${flag:atk_final_lv}/6）,sword5]\r[red][攻击类]\r[white]每级被动提升100000点攻击力。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:skill1_lv2 < 3 || flag:execute_lv < 3 || flag:morph_lv < 5",
                                "true": [
                                    "需要其他[攻击类]技能均点满才能学习。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "flag:atk_final_lv >= 6",
                                "true": [
                                    "已达到满级。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": []
                            },
                            {
                                "type": "if",
                                "condition": "item:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "status:atk",
                                        "value": "100000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:atk_final_lv",
                                        "value": "1"
                                    },
                                    {
                                        "type": "insert",
                                        "loc": [
                                            4,
                                            5
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ],
                                "false": [
                                    "天赋点不足。",
                                    {
                                        "type": "insert",
                                        "loc": [
                                            1,
                                            1
                                        ],
                                        "floorId": "EventMap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    1,
                                    1
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "comment",
                "text": "ending"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "ending1.png",
                "loc": [
                    0,
                    416
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "moveImage",
                "code": 1,
                "to": [
                    0,
                    -416
                ],
                "time": 20000
            },
            {
                "type": "showImage",
                "code": 2,
                "image": "ending2.png",
                "loc": [
                    0,
                    88
                ],
                "opacity": 1,
                "time": 3000
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 3000
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "win",
                "reason": "血海王中王"
            }
        ],
        "11,11": [
            {
                "type": "choices",
                "text": "选择游戏难度",
                "choices": [
                    {
                        "text": "乱撞",
                        "color": [
                            136,
                            255,
                            34,
                            1
                        ],
                        "action": [
                            "乱撞难度下，主角获得50%减伤，并且有大量额外福利。\n适合只想看剧情的玩家，从拆塔的角度来看极其无聊的难度。",
                            {
                                "type": "confirm",
                                "text": "确认要选择 乱撞 难度吗?",
                                "yes": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:hard",
                                        "value": "1"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.status.hard = 'Blind';\ncore.setInitData();\n}"
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "P1",
                                        "loc": [
                                            11,
                                            11
                                        ],
                                        "direction": "left",
                                        "time": 500
                                    }
                                ],
                                "no": [
                                    {
                                        "type": "revisit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "简单",
                        "color": [
                            68,
                            68,
                            221,
                            1
                        ],
                        "action": [
                            "简单难度下，主角获得20%减伤，并且有少量额外福利。\n适合愿意动脑拆塔的初心者。",
                            {
                                "type": "confirm",
                                "text": "确认要选择 简单 难度吗?",
                                "yes": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:hard",
                                        "value": "2"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.status.hard = 'Easy';\ncore.setInitData();\n}"
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "P1",
                                        "loc": [
                                            11,
                                            11
                                        ],
                                        "direction": "left",
                                        "time": 500
                                    }
                                ],
                                "no": [
                                    {
                                        "type": "revisit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "困难",
                        "color": [
                            255,
                            0,
                            0,
                            1
                        ],
                        "action": [
                            "困难难度下没有任何福利。\n适合有一定拆塔经验且愿意动脑的玩家。",
                            {
                                "type": "confirm",
                                "text": "确认要选择 困难 难度吗?",
                                "yes": [
                                    {
                                        "type": "setValue",
                                        "name": "flag:hard",
                                        "value": "3"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.status.hard = 'Hard';\ncore.setInitData();\n}"
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "P1",
                                        "loc": [
                                            11,
                                            11
                                        ],
                                        "direction": "left",
                                        "time": 500
                                    }
                                ],
                                "no": [
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
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
],
    "bgmap": [

],
    "fgmap": [

],
    "color": [
        0,
        0,
        0,
        1
    ]
}
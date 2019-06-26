main.floors.EventMap=
{
    "floorId": "EventMap",
    "title": "新建楼层",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
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
                "type": "choices",
                "text": "\t[天赋选择,talent]选择要强化的技能。目前有${flag:talentPoint}个天赋点。",
                "choices": [
                    {
                        "text": "强击（${flag:skill1_lv}/3）",
                        "color": [
                            255,
                            187,
                            68,
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
                        "text": "防御（${flag:skill2_lv}/3）",
                        "color": [
                            255,
                            187,
                            68,
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
                        "text": "撕裂（${flag:skill4_lv}/4）",
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
                                    2,
                                    2
                                ],
                                "floorId": "EventMap"
                            }
                        ]
                    },
                    {
                        "text": "吸血（${flag:talent1_lv}/5）",
                        "color": [
                            255,
                            238,
                            0,
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
                        "text": "回复魔法（${flag:talent2_lv}/5）",
                        "color": [
                            17,
                            68,
                            255,
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
                        "text": "高级护盾（${flag:talent3_lv}/5）",
                        "color": [
                            68,
                            255,
                            102,
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
        "0,2": [
            {
                "type": "choices",
                "text": "\t[强击（${flag:skill1_lv}/3）,skill1]每级提升\r[yellow]0.5\r[white]倍额外伤害。当前强击造成的额外伤害是\r[yellow]${flag:skill1_val-1}\r[white]倍攻击力。",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
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
                "text": "\t[防御（${flag:skill2_lv}/3）,skill2]每级提升\r[yellow]50%\r[white]防御转化率。当前效果为将${flag:skill2_atk_ratio*100}%的攻击力以\r[yellow]${flag:skill2_def_ratio*100}%\r[white]的比例转化为防御。",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
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
                "text": "\t[撕裂（${flag:skill4_lv}/4）,skill4]每级提升\r[yellow]1.5%\r[white]的流失量。当前效果为令敌人每回合开始时流失\r[yellow]${flag:skill4_val}%\r[white]的当前生命值。",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:skill4_val",
                                        "value": "1.5"
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
                "text": "\t[吸血（${flag:talent1_lv}/5）,I_vampire]每级提升\r[yellow]2%\r[white]的吸血。当前吸血比例为\r[yellow]${Math.floor(flag:vampire_ratio * 100)}%\r[white]。",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:vampire_ratio",
                                        "value": "0.02"
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
                "text": "\t[回复魔法（${flag:talent2_lv}/5）,I341]每级使得战斗后多回复\r[yellow]2\r[white]点魔法。当前每场战斗后回复\r[yellow]${flag:mana_regen}\r[white]点魔法。",
                "choices": [
                    {
                        "text": "确认",
                        "action": [
                            {
                                "type": "if",
                                "condition": "flag:talent2_lv >= 5",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
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
                "text": "\t[高级护盾（${flag:talent3_lv}/5）,shield0]每级使得每点护盾可以多抵挡\r[yellow]0.3\r[white]点伤害。当前每点护盾可以抵挡\r[yellow]${flag:mdef_ratio}\r[white]点伤害。",
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
                                "condition": "flag:talentPoint > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "flag:talentPoint",
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

]
}
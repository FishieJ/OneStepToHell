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
                                "type": "choices",
                                "text": "\t[强击（${flag:skill1_lv}/3）,skill1]每级提升0.5倍额外伤害。当前强击造成的额外伤害是${flag:skill1_val-1}倍攻击力。",
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
                                                            1
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
                                "type": "choices",
                                "text": "\t[防御（${flag:skill2_lv}/3）,skill2]每级提升50%防御转化率。当前效果为将${flag:skill2_atk_ratio*100}%的攻击力以${flag:skill2_def_ratio*100}%的比例转化为防御。",
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
                                                            0,
                                                            1
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
                                "type": "choices",
                                "text": "\t[撕裂（${flag:skill4_lv}/4）,skill4]每级提升1.5%的流失量。当前效果为令敌人每回合开始时流失${flag:skill4_val}%的当前生命值。",
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
                                                            0,
                                                            1
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
                                "type": "choices",
                                "text": "\t[吸血（${flag:talent1_lv}/5）,I_vampire]每级提升\r[yellow]3%\r[white]的吸血。当前吸血比例为\r[yellow]${flag:vampire_ratio * 100}%\r[white]。",
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
                                                            0,
                                                            1
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
                                                            0,
                                                            1
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
                                "type": "choices",
                                "text": "\t[高级护盾（${flag:talent3_lv}/5）,shield0]每级使得每点护盾可以多抵挡\r[yellow]0.5\r[white]点伤害。当前每点护盾可以抵挡\r[yellow]${flag:mdef_ratio}\r[white]点伤害。",
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
                                                        "type": "addValue",
                                                        "name": "flag:mdef_ratio",
                                                        "value": "0.5"
                                                    },
                                                    {
                                                        "type": "addValue",
                                                        "name": "flag:talent3_lv",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "insert",
                                                        "loc": [
                                                            0,
                                                            1
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
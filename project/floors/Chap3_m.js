main.floors.Chap3_m=
{
    "floorId": "Chap3_m",
    "title": "红海战场",
    "name": "红海战场",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "grass2",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0.5);\ncore.setFlag('bgLight', [\n\t[304, 304, 100]\n]);\ncore.drawMap();\n}"
        },
        {
            "type": "if",
            "condition": "core.status.hero.lv < 19",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:skill1_cost",
                    "value": "12"
                },
                {
                    "type": "setValue",
                    "name": "flag:skill2_cost",
                    "value": "8"
                }
            ],
            "false": []
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]呼……终于逃出这鬼地方了……",
        "\t[熙枫,heroine]这红海战场的野外遍地都是红海生物，以你现在的实力很难应付，先去商域看看吧，应该有能帮到你的东西。"
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0.5);\ncore.setFlag('bgLight', [\n\t[304, 304, 100]\n]);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:darkRatio",
                "value": "0.6"
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
                "type": "changeFloor",
                "floorId": "MT61",
                "loc": [
                    6,
                    12
                ],
                "time": 500
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:darkRatio",
                "value": "0.7"
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
                "type": "changeFloor",
                "floorId": "MT81",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 500
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:darkRatio",
                "value": "0.6"
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
                "type": "changeFloor",
                "floorId": "MT71",
                "loc": [
                    12,
                    2
                ],
                "time": 500
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:darkRatio",
                "value": "0.6"
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
                "type": "changeFloor",
                "floorId": "Chap3_shop",
                "loc": [
                    6,
                    0
                ],
                "time": 500
            }
        ],
        "6,11": [
            {
                "type": "confirm",
                "text": "确定准备好了吗？",
                "yes": [
                    {
                        "type": "setValue",
                        "name": "flag:darkRatio",
                        "value": "0.6"
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
                        "type": "changeFloor",
                        "floorId": "Chap3_boss",
                        "loc": [
                            6,
                            0
                        ],
                        "direction": "down",
                        "time": 1000
                    }
                ],
                "no": [
                    {
                        "type": "moveHero",
                        "time": 100,
                        "steps": [
                            "up"
                        ]
                    },
                    {
                        "type": "insert",
                        "loc": [
                            3,
                            0
                        ],
                        "floorId": "EventMap"
                    }
                ]
            }
        ],
        "6,10": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "if",
                "condition": "core.itemCount('redKey') < 3",
                "true": [
                    "先把红钥匙集齐再来检测吧。",
                    {
                        "type": "exit"
                    }
                ],
                "false": []
            },
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT61\", \"MT62\", \"MT63\", \"MT64\", \"MT65\", \"MT66\", \"MT67\", \"MT68\", \"MT69\", \"MT6A\", \"MT70\",\n\t\"MT71\", \"MT72\", \"MT73\", \"MT74\", \"MT75\", \"MT76\", \"MT77\", \"MT78\", \"MT79\", \"MT7A\", \"MT80\",\n\t\"MT81\", \"MT82\", \"MT83\", \"MT84\", \"MT85\", \"MT86\", \"MT87\", \"MT88\", \"MT89\", \"MT90\"\n]);\n}"
            },
            {
                "type": "if",
                "condition": "flag:remainMonsterCount>0",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余怪物：${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！",
                    {
                        "type": "hide",
                        "time": 0
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
    [  0,  0, 17, 17, 17, 17,  0,  0,  0, 17,  0,  0,  0],
    [  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,80045],
    [  0, 17, 17, 91, 17, 17,80007, 17, 17, 91, 17, 17,80045],
    [  0, 17, 17,  0,  0,  0,  0,  0,  0,  0,80007, 17,80045],
    [  0, 17, 17,  0,  0,  0,  0,  0,  0,  0,80007, 17,80053],
    [  0, 17, 17, 17, 17,  0,  0,  0,  0,  0,80007, 17,80056],
    [  0, 17, 17, 17, 17,  0,  0,  0,  0,  0,80007, 17,80064],
    [  0, 17, 17, 92,  0,  0,  0,  0, 17, 93, 17, 17,  0],
    [  0,  0, 17, 17, 17,  0,  0,  0, 17, 17, 17,  0,  0],
    [  0,  0,  0, 17, 17,80026,384,80026, 17, 17, 17,  0,  0],
    [  0,  0,  0,  0, 17, 17, 93, 17, 17,  0,  0,  0,  0],
    [  0,  0,  0,  0, 17, 17, 17, 17, 17,  0,  0,  0,  0]
],
    "bgmap": [
    [154,151,453,154,154,151,  0,80045,316,316,316,316,316],
    [154,151,151,151,151,151,  0,80053,80054,80054,80054,80054,80075],
    [154,151,151,151,151,151,  0,80056,80057,80091,80057,80057,316],
    [154,154,151,  0,151,151,80007,80064,80065,80099,80065,80065,316],
    [154,154,154,  0,  0,  0,  0,  0,  0,  0,316,316,316],
    [154,154,154,  0,  0,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,151,151,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,151,151,  0,  0,  0,  0,  0,316,316,316],
    [151,151,151,  0,  0,  0,  0,  0, 20,  0, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20,122, 20, 20, 20],
    [151,323,151,151,151,316,316,316, 20, 20, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20, 20, 20, 20, 20],
    [151,151,151,151,151,316,316,316, 20, 20, 20, 20, 20]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,435,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80007,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80007,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80007,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80007,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80018,  0,80018,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgm": "chap3_m.mp3"
}
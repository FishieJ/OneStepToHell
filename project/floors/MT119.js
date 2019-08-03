main.floors.MT119=
{
    "floorId": "MT119",
    "title": "伯力圣殿",
    "name": "伯力圣殿",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        -288,
        -96,
        "area12.jpg",
        false
    ],
    "item_ratio": 2000,
    "defaultGround": "ground7",
    "bgm": "9-11.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area12.jpg'];\nvar width = 416, height = 416;\ncore.canvas.bg.translate(width/2,height/2);\ncore.canvas.bg.rotate(rotateTime*Math.PI/180/6);\ncore.canvas.bg.translate(-width/2,-height/2);\ncore.canvas.bg.drawImage(image,-288,-96);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416, height = 416;\n\t\n\tcore.canvas.bg.translate(width/2,height/2);\n\tcore.canvas.bg.rotate(Math.PI/180/6);\n\tcore.canvas.bg.translate(-width/2,-height/2);\n\tcore.canvas.bg.drawImage(image,-288,-96);\n\t\n\tcore.setFlag('lastTime', timestamp);\n\t\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {
        "11,1": [
            {
                "type": "if",
                "condition": "!switch:A",
                "true": [
                    "\t[hero]这是个什么东西……长相这么喜感……",
                    "\t[蓝神,blueShop]你好，我叫\r[blue]蓝神\r，你只要给我钥匙，我就可以回复你的状态。",
                    {
                        "type": "animate",
                        "name": "han",
                        "loc": "hero"
                    },
                    "\t[hero]（这东西本身应该只是个机器，不像是伯力圣殿的造物，也不知背后是何方巨佬……）",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ],
                "false": []
            },
            {
                "type": "choices",
                "text": "\t[蓝神,blueShop]只要你给我钥匙，我就可以回复你的状态。",
                "choices": [
                    {
                        "text": "1黄钥匙换50魔法",
                        "color": [
                            255,
                            255,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:yellowKey > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:yellowKey",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "status:mana",
                                        "value": "50"
                                    }
                                ],
                                "false": [
                                    "\t[hero]没有钥匙了。。。",
                                    {
                                        "type": "revisit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "1黄钥匙换400万生命",
                        "color": [
                            255,
                            255,
                            0,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:yellowKey > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:yellowKey",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "name": "增加HP",
                                        "args": [
                                            4000000
                                        ]
                                    },
                                    {
                                        "type": "update"
                                    }
                                ],
                                "false": [
                                    "\t[hero]没有钥匙了。。。",
                                    {
                                        "type": "revisit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "1蓝钥匙换1500万生命",
                        "color": [
                            0,
                            0,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "if",
                                "condition": "item:blueKey > 0",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "item:blueKey",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "insert",
                                        "name": "增加HP",
                                        "args": [
                                            15000000
                                        ]
                                    },
                                    {
                                        "type": "update"
                                    }
                                ],
                                "false": [
                                    "\t[hero]没有钥匙了。。。",
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
    },
    "changeFloor": {
        "0,6": {
            "floorId": "MT118",
            "loc": [
                12,
                7
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,352,  4,349,542, 81,352,551,349,  4,454,131,  4],
    [  4,  0,536,  4,558,351,  4,  0,  0,551,350,352,  4],
    [  4,349,555,350,  4,543,  0,543,  4,  0,555,  4,  4],
    [  4,  4,  0,247,  4,  4,454,  4,536, 81,  4,454,  4],
    [  4,543,  4,  0,349,  0,545,  0,  4,454,247,349,  4],
    [ 92,  0,247,454,  4,  4,350,  0, 81,  0,  4,536,  4],
    [  4,543,  4,  0,  0,  4,  0,555,  4,228,349,  4,  4],
    [  4,350,572,  4,228,554,  4,349,562,551,  0,  0,  4],
    [  4,  4,351, 81,  0,349,558, 82,  0,350,  4, 81,  4],
    [  4,349,542,  4,555,  0,  4,349,548,  0,559,349,  4],
    [  4,536,  4,352,350,  4,542,  0,352,  4,352,454,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
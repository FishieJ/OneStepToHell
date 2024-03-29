main.floors.MT120=
{
    "floorId": "MT120",
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
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss3.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area12.jpg'];\nvar width = 416, height = 416;\ncore.canvas.bg.translate(width/2,height/2);\ncore.canvas.bg.rotate(rotateTime*Math.PI/180/6);\ncore.canvas.bg.translate(-width/2,-height/2);\ncore.canvas.bg.drawImage(image,-288,-96);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416, height = 416;\n\t\n\tcore.canvas.bg.translate(width/2,height/2);\n\tcore.canvas.bg.rotate(Math.PI/180/6);\n\tcore.canvas.bg.translate(-width/2,-height/2);\n\tcore.canvas.bg.drawImage(image,-288,-96);\n\t\n\tcore.setFlag('lastTime', timestamp);\n\t\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {
        "6,5": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT111\", \"MT112\", \"MT113\", \"MT114\", \"MT115\", \"MT116\", \"MT117\", \"MT118\", \"MT119\", \"MT120\"]);\n}"
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
    "changeFloor": {
        "6,12": {
            "floorId": "MT115",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,4": {
            "floorId": "Final",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 2000
        }
    },
    "afterBattle": {
        "5,6": [
            {
                "type": "addValue",
                "name": "flag:door120",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door120==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "addValue",
                "name": "flag:door120",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:door120==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 22,566,350,553,  4,353,  4,542,351,548,456,  4],
    [  4, 81,  4,  4, 81, 85,558, 85, 81,  4,  4, 81,  4],
    [  4,  0,351,560,  0,  4,  4,  4,  0,559,352,  0,  4],
    [  4, 83,  4,  4,542,  4, 89,  4,555,  4,  4, 83,  4],
    [  4,349,356,  4,  4,  4,384,  4,  4,  4,  4,356,  4],
    [  4,559,  4,  4,  4,543,352,543,  4,  4,350,  0,  4],
    [  4,454,  0,  4,  4,  4, 82,  4,  4,  4,558,  4,  4],
    [  4,  4,350,543,  0,541,  0,541,  4,543,349,543,  4],
    [  4,349,558,  0,351,  4,  0,556,349,  4,553,  4,  4],
    [  4,559,  4,543, 81,349,  0,  4,  0,  4,350,454,  4],
    [  4,354,  4,350,  4,554,  0, 81, 34,559,  0,356,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
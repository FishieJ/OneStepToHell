main.floors.Area4_3=
{
    "floorId": "Area4_3",
    "title": "迟秋城 北",
    "name": "迟秋城 北",
    "width": 40,
    "height": 20,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 25,
    "defaultGround": "grass2",
    "bgm": "17-19.mp3",
    "color": [
        0,
        0,
        0,
        0.2
    ],
    "weather": [
        "rain",
        2
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,17": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "!switch:A",
                    "true": [
                        "罐子里有一张纸片。",
                        "纸片上有着标准的字体写着：\n……战阵的第一大核心因素是军队。军队是强大力量的根源，军队成员的境界决定了整支军队的上限。一般认为100名训练有素且同战力的人组成军队，可以抗衡一名战力为64倍的强者，而1000人的军队则可以……战力与境界的换算关系参照下表……",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        },
                        {
                            "type": "setBlock",
                            "number": "X10395"
                        }
                    ],
                    "false": []
                }
            ]
        },
        "19,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"Area4_1\", \"Area4_2\", \"Area4_3\"]);\n}"
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
        "8,19": {
            "floorId": "Area4_2",
            "loc": [
                8,
                0
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "19,19": {
            "floorId": "Area4_2",
            "loc": [
                19,
                0
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "31,19": {
            "floorId": "Area4_2",
            "loc": [
                31,
                0
            ],
            "time": 500,
            "ignoreChangeFloor": false
        },
        "19,3": {
            "floorId": "Area4_b",
            "loc": [
                6,
                0
            ],
            "direction": "down",
            "time": 1000,
            "ignoreChangeFloor": false
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [70128,70193,70129,70129,70129,70129,70192,70129,70129,70129,70193,70194,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,70193,70193,70129,154,70153,70194,70196,154,70174,154,70193,70130],
    [70136,70161,70137,70137,70201,70137,70137,70137,70137,70137,70137,70202,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,70201,70161,70137,154,70137,70202,70204,154,70200,154,70161,70138],
    [70144, 34,70105,350, 34,70105,351,  0, 34,70105,  0, 34,154,154, 34,  0,70114,  0, 32,384, 32,  0,70114,  0, 34,154,154,350,  0,382,  0,154, 27,  0, 32,154, 32,154,154,70146],
    [70144,  0,70105,427,70105,70105,379,70105,70105,70105,349,  0,154,154,  0,350,70122,349,70211, 93,70213,350,70122,349,  0,154,154,  0, 34,154, 29,154,381,154,154,154,  0,382,349,70146],
    [70144,351,377,  0,  0,374,  0, 32,  0,70105,70105,379,154,154,380,  0,208,  0,70219,70220,70221,  0,208,  0,380,154,154,380,  0,154,  0,154,  0, 32,  0,420,  0,154,  0,70146],
    [70144,70105,70105, 21,70105,70105,70105,70105,  0,222,  0,352,154,154,70007,70007,70007,  0,  0,420,  0,  0,70007,70007,70007,154,154,154,154,154, 28,376,  0,154,154,154,  0,154, 34,70146],
    [70144, 32,70105,  0,70105,350, 32,70105,374,70105,70105,70105,154,154,  0, 34,70007, 81,70007,  0,70007, 81,70007, 34,  0,154,154,154,154,154,  0,154,  0, 27,  0,154, 28,154,154,154],
    [70144,350,70105,379,  0,208, 81,427,  0,70105,349,  0,154,154,349,  0,379,  0,70007, 34,70007,  0,379,  0,350,154,154, 27, 28,154,381,154,154,154,427,154,  0,154,154,70146],
    [70144,377,  0,  0,70105,349, 32,70105,  0,427,  0, 34,154,154,382,70007,70007,70007,70007,  0,70007,70007,70007,70007,382,154,154, 32,  0,154,  0, 32,  0,374,  0,154,  0,154, 34,70146],
    [70144,  0,376,  0,70105,70105,70105,70105,  0,70105,70105,70105,154,154,  0,  0,350,  0,427,  0,427,  0,349,  0,  0,154,154,  0, 81,154,154,154,154,154, 29,382, 27,154,  0,70146],
    [70144, 32,  0, 31,377,  0,  0, 27,  0,  0,222,  0,154,154,70007, 81,70007,70007,70007,208,70007,70007,70007, 81,70007,154,154,420,  0,427,  0, 27,  0,383,  0,154,  0,427, 27,70146],
    [70144,  0,70105,70105,70105,70105,376,70105,70105,70105,70105,  0,154,154,  0,374,  0,  0,  0,351,  0,  0,  0,376,  0,154,154,  0,154,154, 81,154,154,154,154,154,  0,154,154,154],
    [70144,427,70105, 34,  0,70105,  0,70105,  0, 34,70105,  0,378,  0,  0,70007, 21,70007,70007,70007,70007,70007,380,70007,  0,  0,378,  0,154,154, 32,  0, 29,  0,  0,381, 30,154,154,154],
    [70144,  0,70105,  0,350,70105,  0,70105,349,  0,70105, 28,  0,212,  0,70007,  0,377,380,70007,380,377,  0,70007,  0,212,  0, 27,154,154,  0,154,154,154,376,154,  0,  0,  0,70146],
    [70144,349,70105,70105,379,  0,208,  0,379,70105,70105,  0,154,154,  0,70007, 27,70007,350,222,349,70007, 28,70007,  0,154,154,154,154,154, 27,154,  0,381,  0,154,154,154,374,70146],
    [70144,  0,222,  0,  0,70105,353,70105,  0,  0,222,  0,154,154,  0,376,  0,70007,70007, 81,70007,70007,  0,383,  0,154,154,154,154,154,  0,154,  0,154, 28,  0,383,  0,  0,70146],
    [70144,70105,70105,70105,376,70105, 32,70105,376,70105,70105,70105,154,154,154,154,  0,  0,  0, 34,  0,  0,  0,154,154,154,154,154,154,154, 21,374,  0,154,154,154,154,381,70007,70146],
    [70144, 34,  0,70105,  0,70105, 81,70105,  0,  0,70105,70005,154,154,154,154,374,70007,222,70007,381,70007,212,154,154,154,154,154,154,154,154,154,  0,154,  0, 31,154,  0, 31,70146],
    [70144,  0,350,377,  0,  0,374,  0,  0,  0,377,349,  0, 34,154,154, 32,70007,  0, 81,  0,70007, 32,154,154,380,  0, 28,  0, 27,382,  0,  0,381, 27,  0,375,380,  0,70146],
    [70152,70193,70129,70129,70129,70129,70192,70133, 93,70135,70193,70129,70129,70196,154,154,70193,70193,70194, 93,70196,70193,70193,154,154,70193,70129,70193,70153,70193,70133, 93,70135,70194,  0,70196,70174,70193,70193,70154]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70212,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70106,  0,  0,  0,  0,  0,70106,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70142,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
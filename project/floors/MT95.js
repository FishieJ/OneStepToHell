main.floors.MT95=
{
    "floorId": "MT95",
    "title": "未知地域",
    "name": "未知地域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 10000,
    "defaultGround": "ground",
    "bgm": "5-6.mp3",
    "color": null,
    "weather": [
        "fog",
        2
    ],
    "firstArrive": [
        {
            "type": "addValue",
            "name": "flag:darkRatio",
            "value": "-0.1"
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawMap();\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT95\"]);\n}"
            },
            {
                "type": "if",
                "condition": "flag:remainMonsterCount>1",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余怪物：${flag:remainMonsterInfo}"
                ],
                "false": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余怪物：${flag:remainMonsterInfo}",
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,0": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "loadBgm",
                "name": "6-7.mp3"
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
                "floorId": "MT95_2",
                "loc": [
                    6,
                    9
                ],
                "direction": "up",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  1,  0, 31,  1,524,  1, 31,  0,  1,  0,  0],
    [  1,  1,  1, 27,  1,  0,384,  0,  1, 28,  1,  1,  1],
    [  1,  0,515,  0,  1, 30,  0,224,  1,  0,518,  0,  1],
    [  0,516,  0,  1,  1,520,  1,  0, 27,  1,  0,520,  0],
    [ 27, 83,  0,  1, 27,  0,  1,  1,  1,  1,  0, 83, 27],
    [ 83,  0, 31,  0,  0,518,  0, 31,  0,  1,521,  0,  1],
    [ 28,520,  1,  0,  1,  1,  1,  1,  0,518,  0,  0, 28],
    [  1,  1,  1,516,  1, 31,  0,  1,  1,  1,  1,  1,  0],
    [  0,  0,  1,  0,  0,  1,224, 29,  1,  0,536,  1,521],
    [  1,  1,521,  0,  0,  0,  0, 83,  0,520,  1,  1,  0],
    [  0,  0, 28,  1,515,  1,  0,  1,518,  0, 31,  1, 31],
    [  1,224, 83, 27,  0, 83,  0,  0,  0,  1,  1,  1,  0],
    [ 29,  0, 31,  1,  1,  1,  0,  1,  0,  0,516,  0, 28]
],
    "bgmap": [

],
    "fgmap": [

]
}
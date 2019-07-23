main.floors.MT94=
{
    "floorId": "MT94",
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
        4
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
                "function": "function(){\ncore.checkMonster([\"MT94\"]);\n}"
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
                "type": "insert",
                "loc": [
                    3,
                    0
                ],
                "floorId": "EventMap"
            },
            {
                "type": "changeFloor",
                "floorId": "MT94_2",
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
    [514,  0, 28,  0, 31,  1,230,  1, 30,  1, 31,  1, 28],
    [  0,  1,  1,521,  1,  1,384,  1,  0,521,  0,  1,  0],
    [  0,  1,515,  0,514,  1,517,  1,  1,  1,520,  0,514],
    [519,  1,  0, 27,  0,  1,  0, 27,  0, 31,  0,  1,  0],
    [  0,  1,  0,  1,  1,  1,514,  1,  1,  1,520,  1, 31],
    [ 28,  0,520,  0,520,  0,  0,515,  0,  1,  0,517,  0],
    [  1,  1,  1,  0,  1,  1,  1,  1, 31,  1,  1,  0,  1],
    [  0, 31,  0,517,  0, 31,  0,517,  0,  1,  0, 28,  0],
    [  0,  1,  1,  1,521,  1,514,  1, 29,  1,520,  0,520],
    [  0, 27,  0,515,  0,  1,  0,  1,  1,  1,  1, 27,  1],
    [  1,  1,  1,  1,521,  1,  0,  0,514,  0,521,  0,  0],
    [  0,  0,  0,514,  0,  1,  0,  1,  0,  1,  1,517,  1],
    [ 27,  0, 31,  1, 31,  1,  0,  1, 31,  1, 27,  0, 31]
],
    "bgmap": [

],
    "fgmap": [

]
}
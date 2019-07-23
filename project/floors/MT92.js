main.floors.MT92=
{
    "floorId": "MT92",
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
        8
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
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]刚才那个……是熙枫的回忆吗……",
        "\t[hero]为什么，我会看到她的回忆……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT92\"]);\n}"
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
            "\t[hero]又来了……",
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
                "floorId": "MT92_2",
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
    [ 27,  0,516,  0,  1,  4,522,384,  4,  1, 27,  0, 31],
    [  1,  1,  0,  0,  1,  1,  4,  0,  0,  0,  1,517,  1],
    [  0, 31,521,  0, 31,  1, 31,  1,515,  0,  0,  0, 31],
    [515,  1,  1,  1,  1,  1,  0,  1, 30,  1,513,  0,  1],
    [  0,517,  0, 27,  1, 29,517,  0,  1,  1,  0,  1, 28],
    [ 31,  0,  1,  1,  1,  1,  1,  0,  1,517,  0,515,  0],
    [  0,515,  0,520,  0, 28,  1,  0, 31,  0,  1,  0,  1],
    [  1,  1,  1,  0,  1,  1,  1,516,  1,  1,  1,519, 29],
    [  0, 28,  1,  0, 28,  1, 28,  0, 31,  1,  1,  0,  1],
    [517,  1,  0,515,  1,  1,  1,  1,  1,  0,  0,  0,  0],
    [ 31,519,  0,  0,513,  0,  0,513,  0,  0,516,  0,  0],
    [  1,  0,  1,  1, 31,  0,  0,  1,519,  1, 31,  1,  1],
    [ 31,513,  0, 27,  1,  1,  0,  1, 28,  0,521,  0, 27]
],
    "bgmap": [

],
    "fgmap": [

]
}
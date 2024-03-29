main.floors.MT93=
{
    "floorId": "MT93",
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
        6
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
        "\t[hero]唉，想不到我竟然是以这种方式来了解她的过去……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT93\"]);\n}"
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
                "floorId": "MT93_2",
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
    [  0, 30,  1, 28,  0,  1,523,  1, 28,  1, 27,  0, 31],
    [  0,  0,517,  0,519,  0,384,  0,520, 29,  1,225,  1],
    [519,  1,  1,  1,  0, 31,  0, 83,  0, 83,  0,  0, 31],
    [ 27,  0,536,  1,  1,  1,  0,  1, 29,  1,225, 27,  0],
    [  1,  1, 83,  0, 27,  0,226,  1,  0,  0,  0,  1,  1],
    [  0,517,  0,514,  1,  1, 83,  1,  1,224,  1, 31,  0],
    [ 27,  0,  1,  0,  1, 27,  0,  1,  0, 31,  0,  1, 27],
    [  1,225,  1,  0,519,  0,  0,225,  0,  1,  0,  1,519],
    [ 27,  0,  1,226,  0,  1, 83,  1,514,  1,517,  0, 29],
    [  0,  0,520,  0, 31,  1,  0, 31,  0,  1,  0,520,  0],
    [ 83,  1,  1,  1,224,  1,224,  1,  1,  1,224,  1,  1],
    [  0, 27,  1, 27,  0,  1,  0,  0,  0,  1,  0,  0, 31],
    [ 31,  0,520,  0,  0,224,  0,  0, 83, 57, 83, 27,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}
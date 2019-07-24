main.floors.MT101=
{
    "floorId": "MT101",
    "title": "朝圣之路",
    "name": "朝圣之路",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        0,
        0,
        "dawn.jpg",
        false
    ],
    "item_ratio": 2000,
    "defaultGround": "white",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "function",
            "function": "function(){\ncore.values.animateSpeed = 400;\n}"
        },
        "\t[hero]已经破晓了吗……",
        "\t[hero]熙枫，挺住，我一定会让你醒来的！",
        {
            "type": "switch",
            "condition": "flag:hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "检测到正在游玩乱撞难度，获得100个便携式血瓶和蓝瓶，请不要忘记使用！",
                        {
                            "type": "addValue",
                            "name": "item:bring_hp",
                            "value": "100"
                        },
                        {
                            "type": "addValue",
                            "name": "item:bring_mana",
                            "value": "100"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "检测到正在游玩简单难度，获得20个便携式血瓶和蓝瓶！",
                        {
                            "type": "addValue",
                            "name": "item:bring_hp",
                            "value": "20"
                        },
                        {
                            "type": "addValue",
                            "name": "item:bring_mana",
                            "value": "20"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,9": {
            "floorId": "MT102",
            "loc": [
                0,
                9
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0, 28,  0,563,  0, 27, 29,  0,157, 31,157,349,  0],
    [571,157,157,157,157, 81,157,567,157, 28,249,  0, 21],
    [ 21,  0, 27,  0,243, 31,157,  0,243,  0,157, 33,  0],
    [157,157,157, 32,157,  0,157, 27,157,571,157,157, 82],
    [157, 27,157,157,157,242,157,157,157,  0,563, 28, 31],
    [157,  0,567,  0, 31,  0,  0,557,  0,  0,157,157,157],
    [  0, 21,157,157,157,157,564,157,157, 81, 27,454,157],
    [157,157,157, 31, 27,563,  0, 28,  0,  0,242,157,157],
    [157,454,157,157,157,  0,157,157,157, 81,  0,157, 34],
    [157,350,157, 27,157, 34,157, 32,157,  0,242, 28, 94],
    [349,  0,242,  0,565,  0,157,  0,  0,569,157,157,157],
    [ 82,157,157,157,157,157,157,242,157, 27,157, 27, 22],
    [  0,536,  0,243, 34,  0, 27,  0,157,  0, 32,570, 34]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "7-9.mp3",
    "weather": [
        "fog",
        4
    ]
}
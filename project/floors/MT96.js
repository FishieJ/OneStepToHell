main.floors.MT96=
{
    "floorId": "MT96",
    "title": "刀剑蓝域",
    "name": "刀剑蓝域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1000,
    "defaultGround": "grass2",
    "bgm": "6-7.mp3",
    "color": null,
    "weather": null,
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:heroLight",
            "value": "0"
        },
        {
            "type": "function",
            "function": "function(){\n// 动画速度和BGM匹配\ncore.values.animateSpeed = 385;\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]好亮……好绿……",
        "\t[hero]刚才那些，都是熙枫的回忆吧……这里，又是哪？",
        "\t[???]欢迎来到\r[yellow]刀剑蓝域\r，第9527位想要突破血海的挑战者。",
        "这个从楼上传来的声音听上去像是清脆的少女音，但声线又有一种说不上来的怪异感。",
        "\t[hero]等一下，我并不知道我为什么会来到这里……",
        "\t[???]在你之前的9526人，通通都失败了。但是，你已经没有退路了。你唯一的选择便是来到顶层，见到我，你的一切疑问都会迎刃而解。",
        "\t[???]这里的怪物信息我已经传达给你，能否破阵就看你自己了。",
        {
            "type": "callBook"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]这都是什么奇怪的怪物名称……",
        "\t[hero]这不对劲，之前的一切都太诡异了，熙枫的记忆接连展现在我眼前，还有那种虚浮的力量，来了又去，去了又来……",
        "\t[hero]而且这里为什么叫刀剑蓝域啊，遍地都是绿色的树丛和红色的怪物，哪里蓝了……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,11": [
            {
                "type": "if",
                "condition": "flag:hard == 1",
                "true": [
                    "检测到正在游玩乱撞难度，状态回满！",
                    {
                        "type": "setValue",
                        "name": "status:hp",
                        "value": "status:hpmax"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "value": "status:manamax"
                    }
                ],
                "false": []
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [156,156,156,156,156,156, 87,156,156,156,156,156,156],
    [156,  0, 27, 81,  0,533,  0,530,156,349,  0,350,156],
    [156,527,529,156,161,156, 81,156,156, 34,351, 21,156],
    [156, 33, 28,529,  0,529,  0, 33, 81,163,  0,156,156],
    [156,156,156,156, 21,156,156, 81, 81,528,527, 34,156],
    [156, 29,536,156,  0, 81, 11,  0,525, 11,  0,526,156],
    [156, 31, 81, 11,  0,529,  0, 28,156,528,  0,528,156],
    [156,534, 21,156,534, 27,156,526, 34,156,  0,  0,156],
    [156,  0, 27,156,  0,535,  0,156,156, 32,156,525,156],
    [156, 22,156,  0,527,  0,161,526,529,526,  0, 81,156],
    [156,  0,534, 27,  0, 82,  0,  0, 81,  0,533,156,156],
    [156,530,  0,  0, 21,156,  0,156,536,156,349, 31,156],
    [156,156,156,156,156,156,  0,156,156,156,156,156,156]
],
    "bgmap": [

],
    "fgmap": [

]
}
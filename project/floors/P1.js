main.floors.P1=
{
    "floorId": "P1",
    "title": "梦境",
    "name": "梦境",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 0,
    "defaultGround": "ground",
    "bgm": "prologue.mp3",
    "firstArrive": [
        "\t[hero]这是……哪里？似乎有一种奇特的熟悉感……",
        "地上有一张纸条。",
        "勇敢的挑战者：本座将毕生修为封印在塔的顶部，你若是能到达那里，便有资格获取本座的传承。",
        "\t[hero]塔……传说有一些修为极高的神仙造起高塔来挑选传承者，看来这就是塔内了。",
        "\t[hero]这布局，一看就是简单塔！不过这附近的怪物气息好强，我一个都打不过，绕又绕不开……",
        "\t[hero]你妈的，为什么……没有力量，就没有办法生存下去吗？",
        "系统提示：主角能力大幅变强！",
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "1314"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "877"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "383"
        },
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "114514"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "114514"
        },
        "\t[hero]等等，我好像变强了……",
        "\t[hero]哈哈，这下我无敌了！横扫这些辣鸡怪物吧！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": "P2",
            "loc": [
                1,
                2
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "8,8": [
            {
                "type": "lose",
                "reason": "作弊"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 87,  5,  0,  1,  0,  5,  5,232, 33,232, 56,  4],
    [  4, 83,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  4],
    [  4,  0,  5,  0,  1,  0,  5,  5, 33,  0,254,  0,  4],
    [  4,  5,  5,  5,  5,  5,  5, 31,  0,  1, 31, 31,  4],
    [  4, 21,  0, 21, 81,254,  0,246,  0,246,  1,  1,  4],
    [  4,  0, 34,  0,  1,  0,  1,  1,  1,  1,  1, 23,  4],
    [  4,232,  1,  1,  1,  0,  1,254,  0,254,  1, 32,  4],
    [  4,  0,232, 81,254,  0,  1,  0, 57,  0, 81,  0,  4],
    [  4,  1,  1,  1,  0,246,  1,246,  0,246,  1,  0,  4],
    [  4, 28, 34,  1,  0,  1,  1,  1, 81,  1,  1,255,  4],
    [  4, 29,232, 81,  0,232,  0,  0,  0,246,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "fog",
        5
    ]
}
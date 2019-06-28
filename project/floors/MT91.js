main.floors.MT91=
{
    "floorId": "MT91",
    "title": "未知地域",
    "name": "未知地域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0.4
            ],
            "time": 1000
        },
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0.5"
        },
        {
            "type": "setValue",
            "name": "flag:in_chap4",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:coin",
            "value": "0"
        },
        {
            "type": "showStatusBar"
        },
        "\t[hero]等等，这里是哪？……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]附近有好多半步血海境界的生物……不对，我怎么知道它们是半步血海的……",
        "\t[hero]熙枫，其实你还在吧？",
        {
            "type": "sleep",
            "time": 2000
        },
        "没有回应。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]难道真的是梦？我的境界……我的境界还是红海巅峰！不可能……这种力量……她给我的力量还在……",
        "\t[hero]那不是梦！那是真真切切发生了的事情！",
        {
            "type": "sleep",
            "time": 500
        },
        "一回想起那个湮灭在刺眼光芒中的背影，莫逆的心就隐隐作痛。",
        "第一次有了喜欢的人，第一次有了强大的力量，两份喜悦相互重叠，为什么，会变成这样……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]这是哪里？我不知道这是哪里，但我会出现在这里，是她计划好的吧……",
        "\t[hero]一定是的，一定是的……",
        "似乎是看到了一丝希望，莫逆逐渐调整好心态。",
        "\t[hero]继续前进吧，虽然……我也不知道我要去哪。但我，别无选择。",
        {
            "type": "function",
            "function": "function(){\ncore.drawHero();\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "终章 血海篇"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "MT91_2",
            "loc": [
                6,
                9
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  1,  1,  1,  1, 87,  1,  1,  1,  1,  0,  0],
    [  0,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  0],
    [  0,  1,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,  0],
    [  1,  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  1,  1,  0],
    [  0,  1,  0,  1,  1,  0,  0,  0,  1,  0,  1,  0,  0],
    [  0,  0,  0,  0,  0,  1,  0,  1,  1,  0,  1,  1,  0],
    [  0,  1,  0,  1,  0, 47, 47, 47, 47,  0,  1,  1,  0],
    [  1,  1,  1,  0,  0,  0, 50,  1,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  1,  1,  0],
    [  0,  1,  0,  1,  1,  0,  1,  0,  0,  1,  1,  1,  0],
    [  0,  1,  0,  0,  1,  0,  0,  0,  1,  1,  0,  1,  0],
    [  0,  1,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "5-6.mp3",
    "color": null,
    "weather": [
        "fog",
        10
    ]
}
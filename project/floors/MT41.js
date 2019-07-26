main.floors.MT41=
{
    "floorId": "MT41",
    "title": "梦雪平原",
    "name": "梦雪平原",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 50,
    "defaultGround": "snowGround",
    "firstArrive": [
        {
            "type": "insert",
            "loc": [
                3,
                0
            ],
            "floorId": "EventMap"
        },
        "\t[hero]小姐姐，我们来这干嘛？",
        "\t[熙枫,heroine]当然是让你继续杀怪升级啦。",
        "\t[hero]啊？一下子升级这么快会不会根基不稳什么的……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]……我问你一个问题。",
        "\t[熙枫,heroine]我一直这样催着你升级，是不是很讨厌？",
        "\t[hero]啊？当然……当然没有……升级这么快还是挺爽的……",
        "\t[熙枫,heroine]真的？",
        "\t[hero]真的！",
        "\t[熙枫,heroine]……",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[熙枫,heroine]首先你放心吧，你获得的力量都是实打实的，不会有什么根基不稳之类的问题。",
        "\t[熙枫,heroine]不过确实也该陪你休息一会了。毕竟你已经让我恢复了不少，能到这一步我已经应该好好感谢你了。",
        "\t[熙枫,heroine]这附近似乎没有适合休息的地方……看来该用这个了……",
        {
            "type": "animate",
            "name": "skill3",
            "loc": "hero"
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    2,
                    12
                ]
            ]
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    1,
                    12
                ]
            ]
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    3,
                    12
                ]
            ]
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    2,
                    11
                ]
            ]
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    1,
                    11
                ]
            ]
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "autotile12",
            "loc": [
                [
                    3,
                    11
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]……你刚才用的这是什么神奇的技能？",
        "\t[熙枫,heroine]哼哼，我会的东西可多了。",
        "\t[熙枫,heroine]想学吗？也是，这个技能在这么寒冷的地方是必备的哦？",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        "莫逆一屁股坐在这刚刚被烤干、还有几分余热的地面上，开始学习这个技能。几分钟后……",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0.4
            ],
            "time": 500
        },
        "\t[hero]……难难难，这技能太难了。",
        "\t[熙枫,heroine]哎，既然这样，那就只有一个办法了……",
        "\t[熙枫,heroine]你把魔力给我，我帮你放。",
        "\t[hero]有小姐姐陪着我，真的太好了……",
        {
            "type": "setValue",
            "name": "flag:skill3_cost",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "item:skill3",
            "value": "1"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[熙枫,heroine]也差不多该出发了。天色暗了，我帮你来点灯光。",
        {
            "type": "setValue",
            "name": "flag:heroLight",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0.4"
        },
        {
            "type": "setValue",
            "name": "flag:lightRadius",
            "value": "50"
        },
        {
            "type": "function",
            "function": "function(){\ncore.control.drawHero();\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        "\t[hero]……这灯光范围也太小了吧？",
        "\t[熙枫,heroine]呜……好心帮你还被嫌弃……我现在的状态能维持的就只有这么大了……",
        "\t[熙枫,heroine]不过……也可以变得更大，走一步给我1点魔法，我可以让灯光范围变大1倍，如何？",
        {
            "type": "choices",
            "text": "\t[熙枫,heroine]走一步消耗1点魔法，使灯光范围变大1倍，如何？",
            "choices": [
                {
                    "text": "否",
                    "action": []
                },
                {
                    "text": "算了吧",
                    "action": []
                }
            ]
        },
        "\t[hero]怎么想都觉得不能把魔法浪费在这种地方啊。",
        "\t[hero]哎，我实在是太缺魔法了，宛如一个智障……灯光范围小就小吧，我认了。",
        "\t[hero]那么，出发！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,3": {
            "floorId": "MT42",
            "loc": [
                0,
                3
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [150,150,150,150,150,150,150,150,150,150,150,150,150],
    [ 33,  0,380,150,  0, 32,149,  0, 32,149, 32,150,149],
    [  0,354,395,150, 27,  0,149, 27,  0,149, 28,396,149],
    [ 81,149,  0,388,  0, 28,149,399,149,149,149,  0, 94],
    [ 31,149,399,149,149,149,149,  0, 29,  0,397,  0,397],
    [ 27,149, 28,397,  0, 32,399, 31,149,149,  0,149, 27],
    [  0,397,  0,149, 27,  0,149,  0, 27,  0, 30,149, 32],
    [397,149,149,149,149,397,149,149,149,397,149,149,149],
    [  0, 27,  0, 32,399,  0, 27,  0,149,  0, 28, 32,149],
    [149,149,397,149,149, 28,  0, 30,397,  0,149,149,149],
    [149, 27,  0, 28,149,149,149,149,  0,399, 27, 32,149],
    [149,  0,  0,  0, 81,  0,353,149,397,149,149,149, 32],
    [149, 29,  0, 30,149, 33,380,401, 29, 28,388, 27, 28]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "19-21.mp3",
    "color": [
        0,
        0,
        0,
        0.4
    ],
    "weather": [
        "snow",
        1
    ]
}
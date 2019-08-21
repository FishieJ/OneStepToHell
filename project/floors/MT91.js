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
    "item_ratio": 10000,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 100000
        },
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
                0.5
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
            "type": "addValue",
            "name": "flag:hp_score",
            "value": "core.itemCount('coin', 0) * 2500"
        },
        {
            "type": "setValue",
            "name": "item:coin",
            "value": "0"
        },
        "\t[系统提示]清空金币，以1:2500的比例换算为溢出生命值。",
        {
            "type": "setCurtain",
            "time": 0
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawMap();\n}"
        },
        {
            "type": "insert",
            "loc": [
                10,
                0
            ],
            "floorId": "EventMap"
        },
        {
            "type": "showStatusBar"
        },
        "\t[hero]等等，这里是哪？……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]熙枫，其实你还在吧？你知道这里是哪吗?",
        {
            "type": "sleep",
            "time": 2000
        },
        "没有回应。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]不在了吗……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]难道真的是梦？也对，我现在毫发无伤，但我明明记得最后是经历了一场恶战来着……",
        "\t[hero]附近有好多半步血海境界的生物……不对，我怎么知道它们是半步血海的……我的境界……我的境界还是红海巅峰！",
        "\t[hero]还有解毒术！我记得之前都是我把魔力灌输给她来着，但我现在好像自己也会了……",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]那不是梦！那是真真切切发生了的事情！",
        {
            "type": "sleep",
            "time": 500
        },
        "一回想起那个湮灭在刺眼光芒中的背影，莫逆的心就隐隐作痛。",
        "第一次有了喜欢的人，第一次有了强大的力量，两份喜悦相互重叠，为什么，会变成这样，到底为什么……",
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
        {
            "type": "showImage",
            "code": 1,
            "image": "c4.png",
            "loc": [
                129,
                137
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 2000
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
        {
            "type": "switch",
            "condition": "flag:hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "检测到正在游玩乱撞难度，获得50个便携式血瓶和蓝瓶，请不要忘记使用！",
                        {
                            "type": "addValue",
                            "name": "item:bring_hp",
                            "value": "50"
                        },
                        {
                            "type": "addValue",
                            "name": "item:bring_mana",
                            "value": "50"
                        },
                        {
                            "type": "choices",
                            "text": "\t[系统提示]作为高贵的乱撞玩家的你，现在有一次咸鱼机会，支付641亿点溢出生命值，获得6700417基础攻防。",
                            "choices": [
                                {
                                    "text": "小姐姐都没了，我不能当咸鱼！",
                                    "action": []
                                },
                                {
                                    "text": "我不想当咸鱼",
                                    "action": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "检测到正在游玩简单难度，获得10个便携式血瓶和蓝瓶，请妥善利用！",
                        {
                            "type": "addValue",
                            "name": "item:bring_hp",
                            "value": "10"
                        },
                        {
                            "type": "addValue",
                            "name": "item:bring_mana",
                            "value": "10"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT91\"]);\n}"
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
                "floorId": "MT91_2",
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
    [ 11, 27,  1,  1,  1,  1,229,  1,  1,  1,  1,  0, 28],
    [ 11,518,  1,  1,  1,  1,384,  1,  1,  1,  1,518,  0],
    [ 11,  0,  0, 27,  1,  1,  0,  1,  1, 27,  0,  0,518],
    [  1,  1,519,  0,  0,  1,  0,  1,520,  0,520,  0,  0],
    [  0, 28,  0,  1,514,  0, 27,  0,  1,  0,  1,  1,  0],
    [520,  1,520,  1,  1,520,  0,520,  1,517,  1, 27,519],
    [  0,  0,  0,  0, 31,  1,519,  1,  1,  0,  1,  1,  0],
    [ 27,  1,520,  1,  0,513,  0,513,  0,  0,  1,  1,520],
    [  1,  1,  1,  0,512,  0,514,  1,  1,517,  0,514,  0],
    [  0,517,  0, 29,  1,  0,  1,  0, 27,  0,  1,  1,520],
    [515,  1,513,  1,  1,  0,  1,512,  0,  1,  1,  1,  0],
    [  0,  1,  0, 28,512,  0,  0,  0,  1,  1,  0,  1, 27],
    [ 28,  1, 31,  0,  1,  1,  0,  1,  1, 28,  0,516,  0]
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
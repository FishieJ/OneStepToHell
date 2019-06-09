main.floors.MT29_2=
{
    "floorId": "MT29_2",
    "title": "泰南山 深处",
    "name": "泰南山 深处",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "grass",
    "bgm": "15-17.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[yellowKeyProtector]这里并没有什么至宝，请回吧。",
                "\t[hero]……我还什么都没说呢，你这不是此地无银三百两？",
                "\t[yellowKeyProtector]我知道你为何而来。你并不是第一个来到这里的人。",
                "\t[hero]若是没有至宝，你又为何守护在此？",
                "\t[yellowKeyProtector]我不否认我在守护一样东西。",
                "\t[yellowKeyProtector]但它，绝对不是什么至宝。相反，它会把你引领至万劫不复的深渊中。",
                "\t[hero]哼，说着吓人，我才不信你的鬼话。既然你不让开，我只能动手了。",
                {
                    "type": "battle",
                    "id": "yellowKeyProtector"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "time": 500
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[yellowKeyProtector]祝你好运，陌生人……",
                {
                    "type": "setBlock",
                    "number": "greenPotion",
                    "loc": [
                        6,
                        10
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "yellowPotion",
                    "loc": [
                        5,
                        11
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "yellowPotion",
                    "loc": [
                        5,
                        9
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "yellowPotion",
                    "loc": [
                        7,
                        11
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "yellowPotion",
                    "loc": [
                        7,
                        9
                    ]
                }
            ]
        },
        "6,4": [
            "\t[hero]我倒要看看这箱子里是个什么东西。",
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    6,
                    4
                ]
            },
            "\t[hero]一把黄钥匙？这就是传说中的至宝？……",
            "\t[hero]完全看不出来有什么用……先拿走再说。",
            {
                "type": "trigger",
                "loc": [
                    6,
                    4
                ],
                "keep": true
            },
            "\t[hero]这附近的怪都被杀完了，感觉自己离突破下一个境界不远了。先回家休整一下吧。",
            "\t[hero]哈哈，几个小时就突破到萌新九段，家里那些长老应该都不是我的对手了，我倒要看看他们见到我是什么反应。",
            {
                "type": "loadBgm",
                "name": "boss0.mp3"
            },
            {
                "type": "loadBgm",
                "name": "postboss0.mp3"
            },
            {
                "type": "loadBgm",
                "name": "17-19.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        12
                    ]
                ],
                "time": 0
            }
        ],
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000,
                    "async": true
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 1000
                },
                "莫逆刚回到莫家，还没来得及休息，就得知家主要召见自己的消息。",
                "\t[hero]奇怪了，家主平时一向对我们这些小辈不闻不问，怎么突然就要亲自召见我？",
                "\t[hero]感觉有些不妙……不过还是去莫家大殿吧。",
                {
                    "type": "changeFloor",
                    "floorId": "MT30",
                    "loc": [
                        6,
                        12
                    ],
                    "direction": "up",
                    "time": 1000
                }
            ]
        }
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [147,147, 20, 20, 20, 20, 20, 20, 20, 20, 20,147,147],
    [147,147, 20, 20, 20, 20, 20, 20, 20, 20, 20,147,147],
    [140,140, 20, 20,  0,  0,  0,  0,  0, 20, 20,140,140],
    [140,140, 20, 20,  0, 17, 17, 17,  0, 20, 20,140,140],
    [140,140, 20, 20,  0, 17,370, 17,  0, 20, 20,140,140],
    [140,140, 20, 20,  0, 17,50092, 17,  0, 20, 20,140,140],
    [ 20,  0, 20, 20,  0, 17,50092, 17,  0, 20, 20,  0, 20],
    [ 20,  0, 20, 20, 20, 20,262, 20, 20, 20, 20,  0, 20],
    [ 20,10012, 20, 20, 20, 20,  0, 20, 20, 20, 20,10012, 20],
    [ 20,  0,  0,  0,30007,30010,  0,30001,30007,  0,  0,  0, 20],
    [ 20,  0,  0,  0,30015,  0,319,  0,30015,  0,  0,  0, 20],
    [ 20,10072,10073,10074,10075,30003,  0,30010,10072,10073,10074,10075, 20],
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,  0,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20014,  0],
    [20015,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20014],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,10041,10042,  0,  0,  0,  0,  0,10041,10042,  0,  0],
    [  0,10048,10049,10050,10051,  0,  0,  0,10048,10049,10050,10051,  0],
    [  0,10056,10057,10058,10059,  0,  0,  0,10056,10057,10058,10059,  0],
    [  0,10064,10065,10066,10067,  0,  0,  0,10064,10065,10066,10067,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
main.floors.Chap3_final=
{
    "floorId": "Chap3_final",
    "title": "月光大道",
    "name": "月光大道",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "soil",
    "bgm": "5-6.mp3",
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 2000
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawMap();\n}"
        },
        {
            "type": "setValue",
            "name": "flag:charge_atk",
            "value": "0"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]（竟然还没死……）",
        "\t[熙枫,heroine]（毕竟是血海强者，不过他们此时也一定不好受，你已经非常厉害了……）",
        "\t[恶毒黑影,N425]\b[down,5,3]可恶……不能让这小子就这么跑了……",
        "\t[阴魂黑影,N425]\b[down,7,3]老大，现在怎么办？",
        "\t[邪恶黑影,N425]\b[down,6,3]哈哈哈哈……\r[red]一切，都在我的掌握之中\r[white]。",
        "\t[邪恶黑影,N425]\b[down,6,3]秘技——\r[red]献祭魔咒！\r[white]",
        {
            "type": "playSound",
            "name": "Zombie02.wav"
        },
        {
            "type": "animate",
            "name": "dark3",
            "loc": [
                5,
                3
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    3
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "animate",
            "name": "dark3",
            "loc": [
                7,
                3
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    3
                ]
            ],
            "time": 500
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[熙枫,heroine]你……你这恶魔！竟然不惜牺牲同伴的性命！",
        "\t[邪恶黑影,N425]\b[down,6,3]哈哈哈哈，我早就想吸收他们的力量了，一直没有机会，这还得多亏你们，把他俩打成重伤！",
        "\t[邪恶黑影,N425]\b[down,6,3]如今献祭了这两个蠢货，我可是前所未有的强大，反观这小子却是强弩之末了，现在你还有什么办法吗？",
        {
            "type": "animate",
            "name": "darkattack",
            "loc": "hero",
            "async": true
        },
        {
            "type": "setValue",
            "name": "flag:morph_chap3",
            "value": "0"
        },
        {
            "type": "setHeroIcon",
            "name": "hero2.png"
        },
        {
            "type": "addValue",
            "name": "status:hpmax",
            "value": "-5000000"
        },
        {
            "type": "addValue",
            "name": "status:atk",
            "value": "-100000"
        },
        {
            "type": "addValue",
            "name": "status:def",
            "value": "-50000"
        },
        "\t[hero]\b[up,hero]谔谔，变回来了……完蛋了吗……",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    8
                ]
            ],
            "time": 1000
        },
        {
            "type": "playBgm",
            "name": "5-6.mp3"
        },
        "\t[熙枫,heroine]\b[up,6,8]好吧，你赢了。",
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "up"
            ]
        },
        "\t[hero]\b[up,hero]不！小姐姐不要离开我！",
        "\t[熙枫,heroine]\b[up,6,7]我别无选择了。",
        {
            "type": "move",
            "loc": [
                6,
                7
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "up"
            ]
        },
        "\t[hero]\b[up,hero]不！不！谔谔啊啊啊啊！",
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "up",
                "up"
            ]
        },
        {
            "type": "animate",
            "name": "hand",
            "loc": "hero",
            "async": true
        },
        {
            "type": "jumpHero",
            "loc": [
                6,
                11
            ],
            "time": 100,
            "async": true
        },
        {
            "type": "vibrate",
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]\b[up,hero]小姐姐？！",
        "\t[熙枫,heroine]\b[down,6,6]不要再勉强自己了。",
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "up"
            ]
        },
        "\t[熙枫,heroine]\b[down,6,5]毕竟，这件事本来跟你没有关系的。",
        "\t[熙枫,heroine]\b[down,6,5]多谢你这一天一夜的努力付出，我……很开心。",
        "\t[熙枫,heroine]\b[down,6,5]请\r[yellow]好好活下去\r[white]……",
        "\t[hero]\b[up,hero]不！不！！",
        {
            "type": "animate",
            "name": "darkattack",
            "loc": "hero"
        },
        "\t[hero]\b[up,hero]呃啊啊啊！我竟然动弹不得！",
        "\t[hero]\b[up,hero]为什么，为什么我还是这么弱……",
        "\t[熙枫,heroine]\b[down,6,5]喂，我说，你不是很想要我的力量吗？",
        {
            "type": "move",
            "loc": [
                6,
                5
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "up"
            ]
        },
        "\t[邪恶黑影,N425]\b[down,6,3]等等，不对劲，你想干什么……",
        "\t[邪恶黑影,N425]\b[down,6,3]自爆！你要自爆！你疯了吗？等等！……",
        "\t[熙枫,heroine]\b[down,6,4]来好好感受这种力量吧。",
        "\t[邪恶黑影,N425]\b[down,6,3]这对你有什么好处吗？我理解不了！我理解不了啊！！",
        {
            "type": "vibrate",
            "time": 2000,
            "async": true
        },
        {
            "type": "animate",
            "name": "explosion",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 2000,
            "async": true
        },
        {
            "type": "hideStatusBar"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "Zombie02.wav"
        },
        "\t[邪恶黑影,N425]\b[down,6,3]谔谔啊啊啊啊啊！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                6,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                5,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                6,
                3
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                7,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                6,
                2
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                7,
                3
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                8,
                4
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                7,
                5
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                5,
                5
            ]
        },
        {
            "type": "setBlock",
            "number": "X80087",
            "loc": [
                5,
                3
            ]
        },
        "即将进入存档页面。",
        {
            "type": "callSave"
        },
        {
            "type": "confirm",
            "text": "想要在这里停下吗？",
            "yes": [
                {
                    "type": "win",
                    "reason": "红海王中王"
                }
            ],
            "no": []
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 2000
        },
        "我……我死了吗……",
        {
            "type": "sleep",
            "time": 1000
        },
        "还是说，我只是做了一个一天之内从萌新一段升到红海巅峰的梦？",
        {
            "type": "sleep",
            "time": 1000
        },
        "可是，梦里的一切，都是那么的真实，那么的美好……我真的不想放弃。",
        {
            "type": "sleep",
            "time": 1000
        },
        "如果那是个梦，我愿意永远活在梦中。",
        {
            "type": "sleep",
            "time": 1000
        },
        "熙枫……",
        {
            "type": "sleep",
            "time": 1000
        },
        "熙枫！！！谔谔啊啊啊啊……哇啊啊啊啊……",
        {
            "type": "sleep",
            "time": 2000
        },
        "不知哭嚎了多久，终于还是不情愿地睁开了眼睛，准备面对残酷的现实。",
        {
            "type": "changeFloor",
            "floorId": "MT91",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 1500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [80076,80054,80054,80054,80054,80055, 85,80053,80054,80054,80054,80054,80075],
    [80047,80057,80057,80057,80057,80058,  0,80056,80057,80057,80057,80057,80045],
    [80047,80065,80065,80065,80065,80066,  0,80064,80065,80065,80065,80065,80045],
    [80047,  0,  0,  0,  0,425,425,425,  0,  0,  0,  0,80045],
    [80047,  0,  0,  0,80087,  0,  0,  0,  0,  0,80087,  0,80045],
    [80047,  0,80087,  0,  0,  0,  0,  0,  0,80087,  0,  0,80045],
    [80047,  0,  0,80087,  0,80087,  0,  0,80087,  0,  0,  0,80045],
    [80047,  0,80200,80201,80202,  0,  0,  0,  0,80200,80202,  0,80045],
    [80047,  0,80216,80217,80218,  0,499,  0,  0,80216,80218,  0,80045],
    [80047,80087,  0,  0,  0,  0,  0,80087,  0,  0,  0,  0,80045],
    [80047,  0,  0,80087,  0,80087,  0,  0,  0,80087,  0,  0,80045],
    [80047,  0,  0,  0,  0,  0,  0,  0,  0,  0,80087,  0,80045],
    [80068,80038,80038,80038,80038,80039, 85,80037,80038,80038,80038,80038,80067]
],
    "bgmap": [

],
    "fgmap": [

]
}
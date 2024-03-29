main.floors.MT20=
{
    "floorId": "MT20",
    "title": "粽子湖畔",
    "name": "粽子湖畔",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 2,
    "defaultGround": "sand",
    "bgm": "13-15.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,9": {
            "trigger": "action",
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "loadBgm",
                    "name": "15-17.mp3"
                },
                {
                    "type": "battle",
                    "id": "E348"
                },
                {
                    "type": "move",
                    "loc": [
                        9,
                        9
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "right"
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000,
                    "async": true
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.values.animateSpeed = 400;\n}"
                },
                "\t[E348]\b[up,10,9]你……你怎么可能这么强？",
                "\t[hero]\b[up,hero]刚才揍你是因为你对我出言不逊，接下来我要为莫宛妹妹继续揍你！",
                "\t[E348]\b[up,10,9]别别别，爷爷我错了，别打我了……只要你保证不打我，我有个很有价值的信息告诉你……",
                "\t[hero]\b[up,hero]嗯？什么信息？（反正不管你说不说，揍不揍你还是我说了算）",
                "\t[E348]\b[up,10,9]前方的\r[yellow]泰南山\r[white]出了个宝贝，这也是为什么我会出现在这里……",
                "\t[hero]\b[up,hero]宝贝？什么宝贝？",
                "\t[E348]\b[up,10,9]我也不知道，真的，爷爷饶了我吧……",
                "\t[hero]\b[up,hero]（看他这低三下四的样子，算了，得饶人处且饶人）",
                "\t[hero]\b[up,hero]行了，你走吧，记得多向你大哥\r[yellow]柯绍\r[white]学习，多读书，为人友善点。",
                "\t[E348]\b[up,10,9]是是是……",
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            9
                        ]
                    ],
                    "time": 500
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        6
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        9
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        8,
                        8
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        10
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        8,
                        10
                    ]
                },
                {
                    "type": "playBgm",
                    "name": "13-15.mp3"
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                "\t[hero]\b[up,hero]哈哈哈，什么柯诏，根本不是我的对手。",
                "\t[hero]\b[up,hero]这就是拥有力量的感觉吗……真是……太爽了！",
                "\t[hero]\b[up,hero]至于这什么宝贝，虽然我觉得他的话不怎么可信，不过还是去看看吧，反正我需要寻找更加强大的怪物来提升境界，怎么都不亏……"
            ]
        },
        "7,9": [
            {
                "type": "confirm",
                "text": "前方boss战，确认要进入吗？",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.values.animateSpeed = 340;\n}"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                9
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "playBgm",
                        "name": "boss0.mp3"
                    },
                    "\t[E348]\b[up,9,9]哎呦，这不是莫家出名的废物吗？",
                    "\t[hero]\b[up,hero]柯诏？哈哈，还真是冤家路窄啊。",
                    "\t[E348]\b[up,9,9]你这个废物是怎么来到这里的？这里遍地都是萌新六段甚至七段的生物，可不是你这个萌新一段的废物能来的地方。",
                    "\t[hero]\b[up,hero]（他还以为我是萌新一段呢……）",
                    "\t[hero]\b[up,hero]你说话还是一如既往地满嘴喷粪。你就不能学学你大哥\r[yellow]柯绍\r[white]，不仅境界比你高，为人处事也比你有礼貌。",
                    "\t[E348]\b[up,9,9]就凭你这个废物也敢对老子说教，找揍是不是？",
                    "\t[E348]\b[up,9,9]正好，上次在莫家我不敢动手，这次看我怎么暴揍你。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                10
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                8,
                                10
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "no": [
                    {
                        "type": "moveHero",
                        "time": 100,
                        "steps": [
                            "left"
                        ]
                    }
                ]
            }
        ],
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,0": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT11\", \"MT12\", \"MT13\", \"MT14\", \"MT15\", \"MT16\", \"MT17\", \"MT18\", \"MT19\", \"MT20\"]);\n}"
            },
            {
                "type": "if",
                "condition": "flag:remainMonsterCount>0",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余怪物：${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,8": {
            "floorId": "MT18",
            "loc": [
                12,
                8
            ],
            "time": 0
        },
        "12,0": {
            "floorId": "MT21",
            "loc": [
                2,
                12
            ],
            "direction": "up",
            "time": 1000,
            "ignoreChangeFloor": false
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0, 17,  0,  0,  0,  0,384, 91],
    [  0,  0,  0,  0,  0,  0, 17,40013,40019, 32,352, 31,40019],
    [  0,  0,  0,  0,  0,  0, 17,  0,350,40009,  0,40009,349],
    [  0,  0,  0,  0,  0,  0, 17,  0, 29,  0, 33,  0, 29],
    [  0,  0,  0,  0,  0,  0, 17,  0,350,40009,  0,40009,349],
    [ 17, 17, 17, 17, 17, 17, 17,  0,40019, 31,352, 32,40019],
    [ 31, 27, 31,40015, 34,40014,40023,40023,40023, 85,40023,40023,40023],
    [40012,347,40016,40017, 30,  0,40023,  0,  0,  0,  0,  0,40023],
    [ 92,  0,  0,  0,40022,207,40023, 85, 85,  0,  0,  0,40023],
    [  0,40009,40019,  0,  0,  0, 85,  0,  0,348,  0,  0,40023],
    [40019, 32, 28,204,  0,347,40023, 85, 85,  0,  0,  0,40023],
    [40024,40025,40025,40025,40026, 30,40023,  0,  0,  0,  0,  0,40023],
    [40032,40033,40033,40033,40034, 34,40023,40023,40023,40023,40023,40023,40023]
],
    "bgmap": [
    [144,144,144,144,144,143,142,141,  0,  0,  0,  0,  0],
    [144,144,144,144,144,143,142,141,  0,  0,40021,  0,  0],
    [144,144,144,144,144,143,142,141,  0,  0,  0,  0,  0],
    [144,144,144,144,144,143,142,141,40020,  0,  0,  0,40020],
    [143,143,143,143,143,143,142,141,  0,  0,  0,  0,  0],
    [142,142,142,142,142,142,142,141,  0,  0,40021,  0,  0],
    [141,141,141,141,141,141,141,141,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,40010,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40010,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,40005,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40007,  0,40006,  0,  0,  0,  0,  0,  0,  0],
    [40004,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
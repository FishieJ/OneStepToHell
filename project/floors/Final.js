main.floors.Final=
{
    "floorId": "Final",
    "title": "伯力圣殿 深处",
    "name": "伯力圣殿 深处",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        -288,
        -96,
        "area12.jpg",
        false
    ],
    "item_ratio": 2000,
    "defaultGround": "ground7",
    "bgm": "boss3.mp3",
    "firstArrive": [
        {
            "type": "insert",
            "loc": [
                3,
                0
            ],
            "floorId": "EventMap"
        },
        "\t[hero]\b[up,hero]呵，好大的阵势……",
        "\t[???]\b[down,6,1]阁下以血海大成的境界独身杀到这里，真是令人佩服。我伯力圣殿应该不曾招惹过你，不知你为何来此？",
        "\t[hero]\b[up,hero]我要救一个人。需要伯力圣殿深处保存的法则碎片。",
        "\t[???]\b[down,6,1]哦？外面那些信众都以为他们的力量来自于伯力之神，你竟然知道这种力量的本质。那个需要用法则碎片才能救回的人，也真是不简单啊，值得你冒这种风险来救。",
        "\t[???]\b[down,6,1]对于你这种强盗行为，我不去谴责……前提是，你足够强大！先破了这血海大阵试试！"
    ],
    "eachArrive": [],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416, height = 416;\n\t\n\tcore.canvas.bg.translate(width/2,height/2);\n\tcore.canvas.bg.rotate(Math.PI/180/6);\n\tcore.canvas.bg.translate(-width/2,-height/2);\n\tcore.canvas.bg.drawImage(image,-288,-96);\n\t\n\tcore.setFlag('lastTime', timestamp);\n\t\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"Final\"]);\n}"
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
                    {
                        "type": "hide",
                        "time": 0
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "time": 500
                    }
                ]
            }
        ],
        "6,1": {
            "trigger": "action",
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "loadBgm",
                    "name": "ending.mp3"
                },
                "\t[孔阳,kongyang]我名\r[yellow]孔阳\r，是伯力圣殿的圣子。",
                "\t[hero]（血海圆满……但感觉他比一般的血海圆满强出不少）",
                "\t[hero]我名\r[yellow]莫逆\r，逆天而行。",
                "\t[孔阳,kongyang]我所料果然不错，你的力量同样来自于那法则碎片，吸收了那些信众身上零星的法则之力之后，你已经达到了血海圆满的境界。",
                "\t[孔阳,kongyang]但是，你是不是感觉自己无法再升级了？",
                "\t[hero]……",
                "\t[hero]你是怎么知道的……",
                "\t[孔阳,kongyang]因为我和你一样，是法则碎片的拥有者！",
                "\t[hero]什么！这……",
                "\t[孔阳,kongyang]在感觉到无法升级的情况下，我散布出法则之力，培养了这么多伯力教徒，就是为了寻找突破到血海圆满之上境界的方法。然而，无一例外地，凡是达到血海圆满境界的人，都无法感觉到继续升级的可能性。",
                "\t[孔阳,kongyang]这，也许就是法则碎片力量的局限性。它只能保证你顺利地达到血海圆满，但是对于再之上的境界就无效了。",
                "\t[hero]原来如此……所以只要达到血海圆满，就不再需要害怕法则碎片的消息传出去了。",
                "\t[孔阳,kongyang]没错，这东西对于比我们还强的巨佬来讲与破烂无异，所以我才能安稳地在这里研究如何突破到下一个境界。然而……几乎没有进展。不过，你的到来，让我看到了一丝希望。",
                "\t[hero]……你的意思是，融合我们的法则碎片？",
                "\t[孔阳,kongyang]没错，不过即使成功融合，也不一定能顺利突破到下一个境界，而且有个很大的问题，融合之后这东西归谁……",
                "\t[hero]哈哈，说了这么多，还不是一战！",
                "\t[孔阳,kongyang]来吧！",
                {
                    "type": "animate",
                    "name": "sword3",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ],
                    "time": 50,
                    "async": true
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "steps": [
                        "backward",
                        "backward",
                        "backward",
                        "backward",
                        "backward",
                        "backward"
                    ]
                },
                {
                    "type": "vibrate",
                    "time": 1000
                },
                {
                    "type": "moveHero",
                    "time": 200,
                    "async": true,
                    "steps": [
                        "up",
                        "up",
                        "up"
                    ]
                },
                {
                    "type": "move",
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "down",
                        "down",
                        "down"
                    ]
                },
                {
                    "type": "animate",
                    "name": "sword4",
                    "loc": [
                        6,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": "hero"
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "async": true,
                    "steps": [
                        "backward"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        4
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "up"
                    ]
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "async": true,
                    "steps": [
                        "forward"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "animate",
                    "name": "skill1",
                    "loc": [
                        6,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder3",
                    "loc": "hero"
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "async": true,
                    "steps": [
                        "backward"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        4
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "up"
                    ]
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "async": true,
                    "steps": [
                        "forward"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 100,
                    "keep": true,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "animate",
                    "name": "skill2",
                    "loc": [
                        6,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "vibrate",
                    "time": 1000,
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "morphattack",
                    "loc": [
                        6,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder4",
                    "loc": "hero"
                },
                {
                    "type": "battle",
                    "id": "kongyang"
                },
                {
                    "type": "setBlock",
                    "number": "N_kongyang",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                {
                    "type": "moveHero",
                    "time": 100,
                    "async": true,
                    "steps": [
                        "backward"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        4
                    ],
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "up",
                        "up"
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 1000,
                    "async": true
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0,
                    "async": true
                },
                {
                    "type": "setValue",
                    "name": "flag:after_final_boss",
                    "value": "1"
                },
                {
                    "type": "insert",
                    "loc": [
                        12,
                        1
                    ],
                    "floorId": "EventMap"
                },
                "\t[孔阳,N_kongyang]我败了……法则碎片，归你了。",
                {
                    "type": "setBlock",
                    "number": "N575",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 200,
                    "steps": [
                        "down",
                        "down",
                        "down"
                    ]
                },
                {
                    "type": "animate",
                    "name": "light2",
                    "loc": "hero"
                },
                "\t[hero]承让。若不是你先让我突破至血海圆满，我应该不是你的对手。",
                "\t[孔阳,N_kongyang]技不如人，甘拜下风，如此公平一战，我失去法则碎片也没有遗憾……等等，原来我的境界只退化到了血海初成吗……倒是比我预想的要好不少。",
                "\t[hero]看来，那些属于你自己苦修而来的力量，并不会因为失去法则碎片而消失。我能感觉到，你刚才使用的血海奥义，应该不属于所谓的伯力之神这一类别的吧？",
                "\t[孔阳,N_kongyang]没错，说来我得到这法则碎片也完全只是偶然……",
                "\t[hero]所谓的伯力之神，果然只是你用来控制他们的一个幌子？",
                "\t[孔阳,N_kongyang]倒也不是这样，这伯力圣殿以及伯力之神的名头早就存在了，我本来是听说这里能帮助人突破境界才来到这里，却不料得到了法则碎片的认同，成为了法则碎片的拥有者。",
                "\t[hero]这样……听你这么说，这法则碎片还有着灵性？那么多教徒都没能得到它，你一来就得到了？",
                "\t[孔阳,N_kongyang]毕竟是超越血海境界的巨佬的造物，有这等特性也不奇怪。",
                "\t[孔阳,N_kongyang]不管这创造者是不是什么伯力之神，都必然是极为强大的存在，我也算是受了他一份传承，可惜我完全没有能联系到他的手段，他似乎也没有主动联络我的意思。",
                "\t[hero]哎，确实感觉这些超越血海境界的巨佬们都十分神秘，也不知道他们整天都在做什么。",
                "\t[孔阳,N_kongyang]既然老哥没有其他事情，在下就先告辞了。我会依靠自己的努力再次达到血海圆满，我们有缘再会！",
                "\t[hero]再会！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ],
                    "time": 500,
                    "async": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ],
                    "time": 500,
                    "async": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            12
                        ]
                    ],
                    "time": 500
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "confirm",
                    "text": "你可以选择立即提交分数并退出。",
                    "yes": [
                        {
                            "type": "if",
                            "condition": "core.getFlag('hp_score',0) + core.status.hero.hp > 365000000 && core.getFlag('hard', 0) == 3 && core.itemCount('greenKey', 0) == 3",
                            "true": [
                                {
                                    "type": "win",
                                    "reason": "血海王中王"
                                }
                            ],
                            "false": []
                        },
                        {
                            "type": "win",
                            "reason": "伯力征服者"
                        }
                    ],
                    "no": []
                },
                {
                    "type": "insert",
                    "loc": [
                        12,
                        12
                    ]
                }
            ]
        },
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ],
                    "time": 500,
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": "hero"
                },
                {
                    "type": "changePos",
                    "loc": [
                        641,
                        641
                    ]
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "The End.",
                {
                    "type": "insert",
                    "loc": [
                        11,
                        12
                    ],
                    "floorId": "EventMap"
                }
            ]
        },
        "6,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "12,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "comment",
                    "text": "最终剧情"
                },
                "\t[hero]法则碎片，终于到手了。接下来……应该是把法则之力汇聚起来，灌注于脑海之中……",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": "hero"
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": "hero"
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": "hero"
                },
                {
                    "type": "playBgm",
                    "name": "ending.mp3",
                    "keep": true
                },
                {
                    "type": "resumeBgm"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            5
                        ]
                    ],
                    "floorId": "Final",
                    "time": 7000
                },
                "\t[熙枫,heroine]\b[up,6,5]诶，我这是在哪？",
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        6
                    ],
                    "time": 400
                },
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        6
                    ],
                    "time": 400
                },
                "\t[hero]\b[down,hero]哇，小姐姐你终于回来了！",
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
                    "name": "wuyu",
                    "loc": "hero"
                },
                {
                    "type": "animate",
                    "name": "han",
                    "loc": [
                        6,
                        5
                    ]
                },
                "\t[hero]\b[down,hero]呃……忘记这还只是道灵魂投影了……",
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "moveHero",
                    "time": 200,
                    "steps": [
                        "down",
                        "down"
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "up"
                },
                "\t[hero]\b[down,hero]小姐姐还记得重塑肉身的方法吗？",
                "\t[熙枫,heroine]\b[up,6,5]记得倒是记得，不过这到底是怎么回事？……",
                "\t[hero]\b[down,hero]那就好，那就好！这地方太冷了，咱们走，我慢慢跟你讲。",
                "\t[熙枫,heroine]\b[up,6,5]啊？去哪？",
                "\t[hero]\b[down,hero]……我们回家。",
                "\t[熙枫,heroine]\b[up,6,5]……好。",
                {
                    "type": "move",
                    "loc": [
                        6,
                        5
                    ],
                    "time": 300,
                    "steps": [
                        "down"
                    ]
                },
                {
                    "type": "follow",
                    "name": "heroine.png"
                }
            ]
        }
    },
    "changeFloor": {},
    "afterBattle": {
        "6,6": [
            {
                "type": "openDoor",
                "loc": [
                    2,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    10,
                    6
                ]
            }
        ],
        "0,6": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    2
                ]
            }
        ],
        "12,6": [
            {
                "type": "openDoor",
                "loc": [
                    8,
                    2
                ]
            }
        ],
        "4,1": [
            {
                "type": "addValue",
                "name": "flag:doorFinal",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorFinal==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ],
                "false": []
            }
        ],
        "8,1": [
            {
                "type": "addValue",
                "name": "flag:doorFinal",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorFinal==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  4,  4,553,  4,  4,  4,553,  4,  4,  0,  0],
    [  0,  0,  4,555,544,  4,573,  4,544,555,  4,  0,  0],
    [  4,  4,  4,  4, 85, 85,384, 85, 85,  4,  4,  4,  4],
    [  4,  0,  0,549,  0,542,  4,542,  0,556,  0,  0,  4],
    [542,  4,  4,  0,548,555,553,555,559,  0,  4,  4,555],
    [542,541,  4,542,555,543,386,543,555,542,  4,541,555],
    [544,  0, 85,  0,553,  0,544,  0,553,  0, 85,  0,544],
    [542,541,  4,542,555,543,  0,543,555,542,  4,541,555],
    [542,  4,  4,  0,559,555,553,555,548,  0,  4,  4,555],
    [  4,  0,  0,556,  0,542,  4,542,  0,549,  0,  0,  4],
    [  4,  4,  4,  4,  0,  4,  4,  4,  0,  4,  4,  4,  4],
    [  0,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  0],
    [  0,  0,  4,  4,  0,  0,104,  0,  0,  4,  4,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}
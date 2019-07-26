main.floors.MT30=
{
    "floorId": "MT30",
    "title": "莫家大殿",
    "name": "莫家大殿",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "ground3",
    "bgm": "boss0.mp3",
    "firstArrive": [
        {
            "type": "pauseBgm"
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
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "setValue",
            "name": "flag:charge_atk",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:last_direction",
            "value": "null"
        },
        {
            "type": "function",
            "function": "function(){\ncore.updateStatusBar();\n}"
        },
        "\t[hero]（莫家的几大长老都在，氛围不太对劲……）",
        "\t[hero]不知家主找我有什么事？",
        "\t[mgz]莫逆，原本境界一直处于萌新一段，今日修为突飞猛进，短短几个小时就突破至萌新九段。此等修炼速度，前所未有。",
        "\t[mgz]这背后，原因为何？",
        "\t[hero]（这……怎么对我的情况了如指掌，难道家主一直在派人监视我？）",
        "\t[hero]（也是，自从福神花园的事件以后家主应该就注意到我了……）",
        "\t[hero]不瞒家主，我昨晚做梦，梦到一位神仙给了我力量，今天醒来就发现自己突破境界变得非常快。",
        "\t[mgz]编得一点都不像。",
        "\t[hero]……听上去确实像是瞎扯的。但这是事实！",
        "\t[mgz]哦？还有什么事实你还没讲？",
        "\t[hero]……您是什么意思？",
        "\t[mgz]你是如何突破到现在的境界的？",
        "\t[莫家长老,N368]报告家主，我亲眼见到他在粽子湖畔上一边屠杀各种野兽，一边吸它们的血！",
        "\t[hero]……",
        "\t[莫家长老,N366]报告家主，泰南山的怪物被他杀了大半，最近在柯家传得沸沸扬扬的宝贝很可能已经被他所获。",
        "\t[hero]那根本不是什么宝贝，就是一把黄钥匙！",
        "\t[mgz]这么说，你承认他们所说属实？",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[mgz]不过本座也相信那不是什么宝贝，根据本座的调查，那里只有一堆萌新境界的怪物作为守护者。要不是怀疑柯家那帮老家伙另有所谋，我早就将其获取了。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[mgz]真正严重的，是你突破境界的方式。经过商议，长老团成员一致认为你修行魔道，依靠杀戮和吸血来提升自身境界，为了避免你失控，必须采取行动。",
        "\t[hero]您的意思是要我……",
        "\t[mgz]\r[red]签订奴隶契约，听从我的一切指令。",
        {
            "type": "playSound",
            "name": "boss0_pre.mp3"
        },
        {
            "type": "sleep",
            "time": 4000
        },
        {
            "type": "stopSound"
        },
        {
            "type": "playBgm",
            "name": "boss0.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        "\t[hero]啊？什么？？",
        "\t[hero]这也太过分了，做你的奴隶？我想做什么事情都得先经过你的同意？",
        "\t[mgz]不错，我就直说了，必须断了你的修炼之路，不然以你的成长速度，不日便能晋升为蓝海境界，现在你能杀光粽子湖畔和泰南山的怪物，以后谁能保证你不会杀光我们来提升境界？",
        "\t[hero]我可以保证！我可以签订契约保证我永远不对你们出手！但是奴隶契约我无法接受！",
        "\t[mgz]很可惜，虽然我们很想这么做，但是契约的力量是有限的，如果放任你成长，等你强大到足够毁约之日，我们可没有阻止你反悔的力量。",
        "\t[hero]（可恶……）",
        "\t[mgz]虽然是做我的奴隶，不过你名义上是我莫家的长老，地位和待遇比普通成员高得多，如何？",
        "\t[hero]（……难不成莫家这些长老实际上都跟他签过契约了？）",
        "\t[hero]（我莫家除家主之外一直没有人能够突破至蓝海境界，原来这才是背后的原因吗？）",
        {
            "type": "choices",
            "text": "\t[hero]我的选择是……",
            "choices": [
                {
                    "text": "成为奴隶",
                    "action": [
                        "\t[hero]我决定成为您的奴隶！",
                        {
                            "type": "setVolume",
                            "value": 0,
                            "time": 1000
                        },
                        {
                            "type": "pauseBgm"
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
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0,
                            "async": true
                        },
                        "就这样，莫逆在莫家度过了无聊的一生。纵使莫孤舟在几十年后逝去，已经步入中年却依旧只是萌新九段的莫逆再也没有了踏出莫家的勇气。",
                        "对于莫逆来讲，唯一的好消息是，自己终于获得了曾经梦寐以求的地位，作为萌新九段的长老，在莫家再也没有人看不起他了。",
                        {
                            "type": "win",
                            "reason": "萌新王中王"
                        }
                    ]
                },
                {
                    "text": "和他拼命！",
                    "action": [
                        "\t[hero]哼，你说的倒是好听，无非便是容不得比你强的人，想要彻底控制我罢了。",
                        "\t[hero]当时在福神花园也是，见到我跟柯诏争吵，竟然直接禁止我在莫家说话！你个昏庸无能之辈！表面上是家中修为最高、地位最为显赫之人，其实内心比谁都懦弱，害怕任何事物超出自己的掌控！",
                        "\t[mgz]你放肆！",
                        "\t[hero]毕竟你是我莫家的家主，我本来还不想跟你撕破脸皮的，既然你逼我……",
                        "\t[hero]为了自由！谔谔啊啊啊啊啊啊啊！",
                        {
                            "type": "setBlock",
                            "number": "mgz",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[hero]我跟你拼了！",
                "\t[mgz]好小子，本座这就让你感受一下真正的蓝海强者与萌新之间的差距！",
                {
                    "type": "setValue",
                    "name": "status:experience",
                    "value": "status:experience - 500"
                },
                {
                    "type": "battle",
                    "id": "mgz"
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000,
                    "async": true
                },
                {
                    "type": "setBlock",
                    "number": "N367"
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "up"
                    ]
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[莫孤舟,N367]你！你！！呃啊……",
                {
                    "type": "setBlock",
                    "number": "N402",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ]
                },
                {
                    "type": "playSound",
                    "name": "103-Attack15.ogg"
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
                "\t[hero]咳……咳……已经到极限了吗……",
                "\t[hero]等等，这种感觉是……！",
                {
                    "type": "setValue",
                    "name": "status:experience",
                    "value": "status:experience + 500"
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[莫家长老,N363]这……家主被这恶魔杀了……",
                "\t[莫家长老,N366]此时他也必定力竭，大家赶快一起上把他杀了为家主报仇！",
                "\t[莫家长老,N364]不对，你看他的气息……他晋入蓝海阶级了！",
                "\t[莫家长老,N368]这下完了，这还有谁能挡得住他啊？",
                "\t[莫家长老,N369]这恶魔果然是靠杀人修炼的……",
                "\t[莫家长老,N365]还愣着干嘛，快跑啊！",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        4,
                        7
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        4,
                        9
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        4,
                        11
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        8,
                        7
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        8,
                        9
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        8,
                        11
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            7
                        ],
                        [
                            4,
                            9
                        ],
                        [
                            4,
                            11
                        ],
                        [
                            8,
                            7
                        ],
                        [
                            8,
                            9
                        ],
                        [
                            8,
                            11
                        ]
                    ],
                    "time": 0
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                "\t[hero]……",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[hero]我的妈呀……我到底做了什么……",
                "\t[hero]谔谔啊啊啊啊啊啊啊！",
                {
                    "type": "moveHero",
                    "time": 100,
                    "steps": [
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ]
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
                "莫孤舟被莫逆杀害的事情迅速传遍了附近，整个莫家，甚至周围的邻居，都陷入了恐慌之中。各家族高层召开紧急会议，讨论是否需要准备唤醒那些常年闭关的老祖宗来应对危机。",
                "不过很快就有新消息传出，莫逆一边大吼着，一边狂奔着离开了。他大概是疯了。",
                "众人松了一口气，虽然不知道他是否还会回来，不过至少暂时是安全了。",
                "莫家众人为了争夺空出来的家主之位，即将掀起一阵新的腥风血雨……",
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "playBgm",
                    "name": "postboss0.mp3"
                },
                "力量……曾经的我，境界是萌新一段的我，卑微地活在莫家，幻想着通过力量来争取更高的地位。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "我曾经以为，只要有了力量，一切都会好起来的……但事实似乎并非如此。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "为什么会这样呢？是我的错吗？我只是想要自由而已……我不想做家主的奴隶，一辈子活在他的阴影之下。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "莫家……虽然说不上有多喜欢，甚至，我十分反感这里动不动就禁言的家规，但这样草率地作别，还是太突然了……",
                {
                    "type": "sleep",
                    "time": 500
                },
                "现在最大的问题是，我要去哪，我的未来在哪里？",
                {
                    "type": "sleep",
                    "time": 2000
                },
                "说起来，这一切似乎都始于那场梦……",
                {
                    "type": "sleep",
                    "time": 500
                },
                "这就是真正的神仙所拥有的能力吗？仅仅是给了我一点力量，就完全改变了我的命运。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "吸血、杀人……做这些事情的时候我一点犹豫都没有，难道我真如那些长老所说，是个恶魔？",
                {
                    "type": "sleep",
                    "time": 500
                },
                "以往的我太弱小了，才表现得人畜无害，一旦获得力量，就露出了自己的本性？",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "莫逆一边胡思乱想，一边不受控制地朝着某个地方狂奔着。",
                "他并没有想到，自己的迷茫很快就会消失，因为在接下来的十几个小时中发生的事情，是他做梦都想不到的。",
                {
                    "type": "sleep",
                    "time": 2000
                },
                "第二章 蓝海篇",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000
                },
                {
                    "type": "setCurtain",
                    "time": 0,
                    "async": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "Area4_1",
                    "loc": [
                        19,
                        19
                    ],
                    "direction": "up",
                    "time": 500
                }
            ]
        },
        "5,4": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,5": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,6": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,7": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,8": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,9": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,10": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,11": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "5,12": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,12": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,11": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,10": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,9": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,8": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,7": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,6": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,5": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ],
        "7,4": [
            "\t[hero]犹豫，就会败北。不要退缩，直接正面上！"
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [110025,110025,110025,110028,110033,110033,110033,110033,110033,110027,110025,110025,110025],
    [110025,110025,110025,110026,  0,120133,120134,120135,  0,110024,110025,110025,110025],
    [110028,110033,110033,110034,100143,120141,  0,120143,100143,110032,110033,110033,110027],
    [110026,110064,110065,110064,100140,100142,367,100142,100140,110064,110065,110064,110024],
    [110026,110072,110073,110072,90159, 17,  0, 17,90159,110072,110073,110072,110024],
    [110026,110080,110081,110080,90167, 17,  0, 17,90167,110080,110081,110080,110024],
    [110026,90157,  0,90086,  0, 17,  0, 17,  0,90087,  0,90157,110024],
    [110026,90165,  0,90094,364, 17,  0, 17,363,90095,  0,90165,110024],
    [110026,110151,  0,90086,  0, 17,  0, 17,  0,90087,  0,110151,110024],
    [110026,110159,  0,90094,365, 17,  0, 17,366,90095,  0,110159,110024],
    [110026,  0,  0,90086,  0, 17,  0, 17,  0,90087,  0,  0,110024],
    [110026,110174,90156,90094,368, 17,  0, 17,369,90095,90156,110174,110024],
    [110026,110182,90164,  0,  0, 17,  0, 17,  0,  0,90164,110182,110024]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,90033,90033,90033,90033,90033,  0,  0,  0,  0],
    [  0,  0,  0,  0,90033,90033,120142,90033,90033,  0,  0,  0,  0],
    [  0,110041,  0,110041,90184,90185,90185,90185,90186,110041,  0,110041,  0],
    [  0,110041,  0,110041,90184,90185,90185,90185,90186,110041,  0,110041,  0],
    [  0,110041,  0,110041,90184,90185,90185,90185,90186,110041,  0,110041,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0],
    [  0,  0,  0,155,155,155,155,155,155,155,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,10104,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
main.floors.MT94_2=
{
    "floorId": "MT94_2",
    "title": "回忆",
    "name": "回忆",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass2",
    "bgm": "5-6.mp3",
    "weather": [
        "fog",
        4
    ],
    "firstArrive": [
        {
            "type": "sleep",
            "time": 1000
        },
        "这次出现在莫逆眼前的是熙枫和两个陌生少女，以及……一只黑糊糊的虎头怪物。",
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[粉发少女,npc3]\b[down,7,4]糟糕了，这里怎么会出现这么残暴的怪物……",
        "\t[蓝帽少女,npc1]\b[down,5,4]熙枫妹妹快跑吧，我们给你断后。",
        "\t[熙枫,heroine]\b[down,6,3]不！我怎么能抛下你们自己跑呢？",
        "\t[粉发少女,npc3]\b[down,7,4]别犯蠢了，这怪物是红海巅峰的境界，你跟我们陪葬我可不会感激你。",
        "\t[蓝帽少女,npc1]\b[down,5,4]你只用了几个月就从红海低阶晋升为红海中阶，潜力不可限量，以后一定能为我们报仇……",
        {
            "type": "playSound",
            "name": "082-Monster04.ogg"
        },
        {
            "type": "jump",
            "from": [
                6,
                6
            ],
            "to": [
                5,
                5
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                5,
                4
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N506",
            "loc": [
                [
                    5,
                    4
                ]
            ]
        },
        "少女的体力显然早就到了极限，怪物只用了一击就将她击倒在地。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[粉发少女,npc3]\b[down,7,4]还愣着干嘛，吓傻了吗？快跑啊！",
        {
            "type": "playSound",
            "name": "082-Monster04.ogg"
        },
        {
            "type": "jump",
            "from": [
                5,
                5
            ],
            "to": [
                7,
                5
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                7,
                4
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N505",
            "loc": [
                [
                    7,
                    4
                ]
            ]
        },
        "\t[熙枫,heroine]\b[down,6,3]……",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "jump",
            "from": [
                7,
                5
            ],
            "to": [
                6,
                5
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "082-Monster04.ogg"
        },
        "熙枫的脸上没有任何的惊恐之色，她明显在为某件事情犹豫不决。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]\b[down,6,3]不行……不能再这样了……",
        {
            "type": "animate",
            "name": "light",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "animate",
            "name": "light",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "animate",
            "name": "light",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "animate",
            "name": "light2",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "animate",
            "name": "explosion_small",
            "loc": [
                6,
                5
            ],
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "time": 500
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[熙枫,heroine]\b[down,6,3]……终究，还是不忍心看着她们就这么送命吗……",
        "\t[熙枫,heroine]\b[down,6,3]赶快，把她们带回去疗伤……",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    4
                ]
            ],
            "time": 1000,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    4
                ]
            ],
            "time": 1000,
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
            "time": 1000
        },
        {
            "type": "changeFloor",
            "floorId": "MT95",
            "loc": [
                6,
                12
            ],
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151,  0,151,151,151,151,151,151],
    [151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151],
    [151,151,151,151,151,  0,  0,  0,151,151,151,151,151],
    [151,  0,  0,  0,151,151,386,151,151,  0,  0,  0,151],
    [151,  0,  0,  0,  0,134,  0,136,  0,  0,  0,  0,151],
    [151,151,151,151,151,  0,  0,  0,151,151,151,151,151],
    [151,  0,  0,  0,151,151,508,151,151,  0,  0,  0,151],
    [151,  0,  0,  0,151,151,  0,151,151,  0,  0,  0,151],
    [151,  0,  0,  0,151,151,  0,151,151,  0,  0,  0,151],
    [151,  0,151,  0,151,151,  0,151,151,  0,151,  0,151],
    [151,  0,151,  0,151,  0,  0,  0,151,  0,151,  0,151],
    [151,  0,151,  0,  0,  0,  0,  0,  0,  0,151,  0,151],
    [151,  0,151,151,151,151,  0,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}
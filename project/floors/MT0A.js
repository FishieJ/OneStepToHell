main.floors.MT0A=
{
    "floorId": "MT0A",
    "title": "福神花园",
    "name": "福神花园",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass",
    "bgm": "11-13.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "up",
                "up",
                "up",
                "up",
                "left",
                "up",
                "up",
                "right"
            ]
        },
        {
            "type": "sleep",
            "time": 500
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
        "\t[hero]\b[down,hero]柯诏！堂堂柯家的二少爷，怎么会在这里！",
        "\t[E348]\b[down,8,6]咦？是你这个莫家的废物？滚开，别挡老子道。",
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[hero]\b[down,hero]你竟然敢欺负莫然？",
        "\t[E348]\b[down,8,6]胡说，我哪里欺负她了？",
        "\t[hero]\b[down,hero]你看莫然都被你吓得自闭了，还敢狡辩？",
        "\t[E348]\b[down,8,6]哼，我走在路上看到莫然妹妹上去打个招呼而已，哪想到她这样讹诈我。你说我欺负她，你倒是拿出证据啊？",
        "\t[hero]\b[down,hero]她讹诈你？她有什么理由这样做吗？",
        "\t[E348]\b[down,8,6]我哪知道她怎么想的，少废话，拿不出证据就别污蔑我。",
        "\t[E348]\b[down,8,6]别以为这里是你莫家的地盘我就怕了你了，我柯家可不会怕你莫家！",
        {
            "type": "show",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "time": 0
        },
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                7,
                6
            ]
        },
        {
            "type": "playSound",
            "name": "attack.mp3"
        },
        {
            "type": "move",
            "loc": [
                8,
                6
            ],
            "time": 100,
            "keep": true,
            "async": true,
            "steps": [
                "right"
            ]
        },
        {
            "type": "jumpHero",
            "loc": [
                5,
                6
            ],
            "time": 100,
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]\b[down,hero]家主！",
        "\t[mgz]\b[down,7,6]发生什么了？",
        "\t[hero]\b[down,hero]家主！柯诏欺负我莫家的人！",
        "\t[E348]\b[down,9,6]他胡说！没有的事！",
        "\t[hero]\b[down,hero]家主！你看莫然都被柯诏吓傻了！",
        "\t[E348]\b[down,9,6]明明是莫逆跟我无理取闹、大声喧哗，才把她吓坏的！",
        "\t[hero]\b[down,hero]家主！你要为我莫家的人做主啊！",
        "\t[mgz]\b[down,7,6]够了，都给我闭嘴！我莫家第一条家规，不许在莫家管理范围内吵架，违者一律禁止在莫家说话1小时。",
        "\t[hero]\b[down,hero]唔？？……唔！！（可恶，是沉默魔法）",
        "\t[mgz]\b[down,7,6]希望这次惩罚能让你们长点记性，我莫家的家规不容侵犯。",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "time": 500
        },
        "\t[hero]\b[down,hero]唔！！！唔！！！！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 2000,
            "async": true
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 2000
        },
        {
            "type": "playBgm",
            "name": "11-13.mp3"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        "莫孤舟就这样干净利落地解决了麻烦，莫家依然被一片祥和的氛围所笼罩。看来又会是平静的一天。",
        "\t[hero]（谔谔啊啊啊啊！！！这还有没有天理了？一点都不偏袒我莫家的人也就算了，看到冲突不想着解决冲突，只想着解决涉及冲突的人，你他妈敢再蠢一点？）",
        "\t[hero]（而且禁止在莫家说话，这种惩罚对柯诏有用吗？他回到他的柯家，照样想说什么说什么！）",
        "看着柯诏一脸得意地撞开自己、潇洒地离去，莫逆更是有一种气急败坏的感觉。",
        "一旁的莫然依然蹲在角落。莫逆走过去，想要安慰她，却发现自己酝酿的话语没到嘴边就化为了唔唔的声音。",
        "\t[hero]（谔谔，可恶，气死我了！）",
        "莫逆心里盘算着有机会一定要揍柯诏一顿，但是又想起来自己还只有萌新四段，而柯诏早已晋入萌新八段，实力跟莫家和柯家的长老差不多。",
        "\t[hero]（啊啊啊啊，我要变强，我要干爆这个蠢货！）",
        "莫逆就这样一路跑离了莫家。",
        {
            "type": "changeFloor",
            "floorId": "MT11",
            "loc": [
                0,
                9
            ],
            "direction": "right",
            "time": 1000
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,6": [],
        "7,6": {
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
    [ 20, 91, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0, 20],
    [ 20,  0,  0,  0,  0,  0, 20,424,  0,  0, 20,  0, 20],
    [ 20,  0,324,  0, 20,  0, 20,  0,  0,  0, 20,  0, 20],
    [ 20, 20,  0, 20, 20,  0, 20, 20, 20,  0, 20,  0, 20],
    [ 20,  0,  0,  0, 20,  0,  0,362,348,  0, 20,  0, 20],
    [ 20,  0,325,  0, 20,  0, 20, 20, 20, 20, 20,  0, 20],
    [ 20, 20,  0, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0, 20, 20,  0, 20, 20, 20,  0, 20, 20],
    [ 20,  0,  0,  0, 20,  0,  0,  0, 20,  0,202,  0, 20],
    [ 20,  0,  0,  0, 20,  0,  0,  0, 20,201,  0,201, 20],
    [ 20, 20, 20, 20, 20, 20, 93, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

]
}
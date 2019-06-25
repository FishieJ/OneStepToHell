main.floors.MT66=
{
    "floorId": "MT66",
    "title": "毒雾沼泽",
    "name": "毒雾沼泽",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "grass2",
    "bgm": "23-1.mp3",
    "color": [
        0,
        0,
        0,
        0.7
    ],
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        "第三章 红海篇",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setValue",
            "name": "item:skill3",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:curse_stack",
            "value": "0"
        },
        "没有了严寒诅咒效果，不再能【感受温暖】。",
        "\t[熙枫,heroine]咳咳……",
        "\t[hero]小姐姐？",
        "\t[熙枫,heroine]可恶……那些人……发现我们了……",
        "\t[hero]这……这么快？",
        "\t[熙枫,heroine]咳……应该是你跟叶芊交手的余波引起了他们的注意……",
        "\t[熙枫,heroine]我没事……不用担心我……就是传送被扰乱了。",
        "\t[hero]该死，是我太无能了，什么都帮不上……",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[hero]……所以我们现在在哪？这里的雾气真令人难受，而且附近怎么遍地都是红海境界的生物，感觉我谁都打不过……",
        "\t[熙枫,heroine]我们应该是落入红海战场了。",
        "\t[熙枫,heroine]红海战场是权圣教和镇仙域两大巨头宗派对抗的地方。这两大宗派理念不同，历来势同水火。",
        "\t[熙枫,heroine]权圣教的理念是封印自身部分实力去挑战弱者，以此来提升自己的战斗意志和经验。",
        "\t[hero]封印自身部分实力？",
        "\t[熙枫,heroine]没错，这样就可以使得较弱的对手成为强敌，来提升自己的战斗意志和经验。",
        "\t[熙枫,heroine]但是缺陷也很明显，无法发挥自身全部实力，等到真正需要全力以赴的时候，可能会发现自己对全部力量的掌握十分生疏。",
        "\t[hero]那镇仙域的理念呢？",
        "\t[熙枫,heroine]镇仙域的理念则是从不吝惜外物的使用，一些天骄甚至会在大量消耗品的支持下，去挑战远强于自己的敌人。",
        "\t[hero]听起来都好极端啊，就不能取中庸之道吗？",
        "\t[熙枫,heroine]如果取中庸之道，这两大宗派也就不是现在这个样子了。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]所以，就因为理念不合，这两大宗派就开战了？",
        "\t[熙枫,heroine]说是开战，其实双方的打斗只是互相切磋，点到为止，极少有人死在对方弟子的手里。",
        "\t[熙枫,heroine]毕竟争斗的本质是为了验证谁的理念对修炼更有帮助，两大宗派的领袖都在记录着自己宗派的弟子有多少能够达到血海境界，以此作为衡量标准。然而已经不知道多少年月过去，仍未分出胜负。",
        "\t[熙枫,heroine]在红海战场上真正危险的还是那些野外生物。两大宗派每一个月才进行一次约战，弟子们平日的修行都在与这些野外的红海生物对抗。",
        "\t[hero]听起来不怎么残酷嘛，是不是平时划划水摸摸鱼也没人管？",
        "\t[熙枫,heroine]确实没人管。因为，这战场被一种力量极其强大的界线包围，只有达到血海境界才有能力离开这里……这也是两大宗派防止逃兵的手段。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]等等，只有血海境界才能离开这里，这岂不是说我们被困在这了？",
        "\t[熙枫,heroine]是的，所以情况很糟糕……那些人恐怕已经知道我们在红海战场了，我们的时间已经不多了。",
        "\t[hero]必须尽快达到血海境界吗……",
        "\t[熙枫,heroine]等你达到血海境界，突破到天外的世界，那些人将再也无法寻找到你的踪迹。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]现在还是先考虑眼前吧。这里的怪物对你来说都太强了，首先，还是先从这里逃走，然后再找寻合适的怪物挑战吧。",
        "\t[熙枫,heroine]我能感应到右侧的雾气比较弱，出口应该在那边。",
        {
            "type": "if",
            "condition": "flag:hard == 1",
            "true": [
                "检测到正在游玩乱撞难度，除阻击外所有地图伤害全部无效！",
                {
                    "type": "setValue",
                    "name": "flag:no_zone",
                    "value": "true"
                },
                {
                    "type": "setValue",
                    "name": "flag:no_laser",
                    "value": "true"
                },
                {
                    "type": "setValue",
                    "name": "flag:no_betweenAttack",
                    "value": "true"
                }
            ],
            "false": []
        },
        {
            "type": "resumeBgm"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,6": {
            "floorId": "MT64",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "MT67",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT6A",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,11": [
            {
                "type": "if",
                "condition": "flag:arrived_64 == 1",
                "true": [],
                "false": [
                    "\t[hero]这是什么东西？",
                    "\t[熙枫,heroine]这个绿色的晶体……是浓厚的毒雾形成的结晶。商人们对这个应该很感兴趣。",
                    "\t[hero]商人？这战场上还有商人？",
                    "\t[熙枫,heroine]毕竟有钱可以赚啊，在战场上很多消耗品的需求量非常大。而且这些商人后台十分恐怖，所以才能够在两大宗派的争斗中保持中立，没有人敢惹他们。",
                    "\t[hero]说起来，我好像身无分文……",
                    "\t[熙枫,heroine]希望这晶体能多卖点钱吧。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[hero]这里的怪物特技都好恶心啊……比如那什么中毒，小姐姐有办法应对吗？",
                    "\t[熙枫,heroine]现在我的力量还很有限，暂时解不掉中毒效果。等你突破到红海境界我可以试试。",
                    "\t[hero]好吧……总之还是先离开这里。"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [154,154,154,154,154,154, 91,154,154,154,154,154,154],
    [154,  0,351,  0,445,456,452,  0,50018,443,349,455,154],
    [154,349,440,  0,50018,50018,50018, 30,  0,  0,  0,  0,154],
    [154,154,  0,  0,50018, 27,50018,  0,50018,443,350,440,154],
    [154,154,454,442,455,444,  0, 30,  0,  0,  0,455,154],
    [154,454,50018,  0,50018, 28,50018,  0,50018,443,351,443,154],
    [ 92,447,  0, 27,256,50018,50018,  0,441,  0,  0,  0, 94],
    [154,154,455,50018,  0,454,  0,  0,50018,231,  0,231,154],
    [154,154,50018,454,  0,50018,  0,50018,455,50018,  0,456,154],
    [154,154,  0,50018,448,  0,  0,349,356,50018,349,  0,154],
    [154,154, 29,  0, 27, 81,441,50018,455,50018,  0,352,154],
    [154,154,154, 30,50018,50018,458,  0,50018,  0,154,154,154],
    [154,154,154,154,351,  0,  0,  0,349,154,154,154,154]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "fog",
        5
    ]
}
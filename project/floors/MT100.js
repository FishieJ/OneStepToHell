main.floors.MT100=
{
    "floorId": "MT100",
    "title": "刀剑翠域",
    "name": "刀剑翠域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass2",
    "bgm": "6-7.mp3",
    "color": null,
    "weather": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[hero]这……一个小莱姆？",
                "\t[绿色史莱姆,greenSlime]恭喜你，挑战者。你已经触及到了血海的边缘。",
                "\t[hero]竟然还能说话？",
                "\t[绿色史莱姆,greenSlime]……能不能不要把注意力都放在我身上？",
                "\t[hero]呃……抱歉……但是这一幕着实太具有冲击性了。",
                "\t[绿色史莱姆,greenSlime]我可不是一般的莱姆，而是受到过一位无上大能指点的莱姆。正因为如此，我不叫小莱姆，我的全名是绿色史莱姆。",
                {
                    "type": "animate",
                    "name": "han",
                    "loc": "hero"
                },
                "\t[hero]（这……有什么区别吗？）",
                "\t[绿色史莱姆,greenSlime]像你这么年轻的半步血海可不多见。不，应该说简直太罕见了。",
                "\t[绿色史莱姆,greenSlime]你和熙枫是什么关系？",
                "\t[hero]果然，你知道她……她的残魂寄宿在我身上，但是我们遭遇了强敌，然后她……她……",
                "\t[绿色史莱姆,greenSlime]呵，这样吗……竟然舍得自爆，看来她真的破釜沉舟了。她把你送来，应该是希望我助你突破至血海境界……",
                "\t[hero]我不想突破什么血海境界，我只想要她回来啊！",
                "\t[绿色史莱姆,greenSlime]……",
                "\t[绿色史莱姆,greenSlime]我刚才感应了一下，其实，她的残魂还在你身上。",
                "\t[hero]什么？竟然真的是这样！也对，毕竟她给我的力量还在！可是我完全感应不到她……",
                "\t[绿色史莱姆,greenSlime]她的力量损耗非常严重，恐怕很难醒来了。",
                "\t[hero]不！不！！若是她无法醒来，我突破血海又有什么意义？",
                "\t[绿色史莱姆,greenSlime]不是无法醒来……但是，非常难，而且你可能会付出极大的代价。",
                "\t[hero]我不管！再大的代价都可以！",
                "\t[绿色史莱姆,greenSlime]……很好。既然你有这等决心，那你一定能成功。",
                "\t[绿色史莱姆,greenSlime]但是，首先，你必须突破至血海境界。之后，我会告诉你唤醒她的办法。",
                "\t[hero]呼……我调整一下心情……",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "\t[hero]（为了唤醒她，我必须突破到血海境界……一定要把握住这个机会……）",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                "\t[hero]差不多平静下来了，还请前辈指点。我感觉自己已经离那个境界很接近了……但还是差一点。",
                "\t[绿色史莱姆,greenSlime]能够见到我，你有资格领悟我主人的真传。集中注意力，我这就将这些信息灌注给你。",
                {
                    "type": "sleep",
                    "time": 500
                },
                "一股信息涌入脑海中。",
                "拆塔心理学\n穩定而強大的心理素質是很重要的，是高手必備的能力，是發動思維風暴的首要條件。不斷地更改大路線，身心是會疲累的，而且很容易會受到過往路線所吃過的虧所影響，心算不夠好的話，就會膽怯。另外，自己所做的每一個規劃，都可以有一個能夠說服自己的原因，這種原因可以是頭頭是道的，讓自己變得莫名其妙的堅定；但並不代表這就是不可替代的。更改規劃，特別是大範圍規劃，需要勇氣，需要耐性。審視每一個規劃的原因時，不能只看到這個操作的利處，而忽略連鎖帶來的弊處，不能只算到這個操作帶來的幾步的轉換差異，而算漏長遠之後所帶來的轉換差異，這才是真正可靠的權衡方法。最重要的這句來了，必須要銘記於心：就算知道自己思維定勢了，也不要想著自己思維定勢了，當心中形成“自己思維定勢了”這樣的概念，如果心理質素不夠強大，就會害怕，就會喪失動力，永遠保持探尋真相的熱衷，不要害怕重新開始，下定決心思考就要集中注意力。……",
                {
                    "type": "sleep",
                    "time": 2000
                },
                "不知过了多久。",
                {
                    "type": "sleep",
                    "time": 2000
                },
                {
                    "type": "playBgm",
                    "name": "xuehai.mp3"
                },
                "\t[hero]这！这种感觉是！",
                "\t[绿色史莱姆,greenSlime]恭喜你，挑战者，整个刀剑翠域都在为新晋血海强者的诞生而欢呼！",
                {
                    "type": "addValue",
                    "name": "status:experience",
                    "value": "20000000"
                },
                "\t[hero]一天之前我还只是个萌新一段，没想到啊……这种感觉，真的是……梦幻一般。",
                "\t[绿色史莱姆,greenSlime]不错。你领悟能力很不错。说不定你真能做到……",
                "\t[绿色史莱姆,greenSlime]你是否知道熙枫的身世？",
                "\t[hero]她从来没跟我说过……",
                "\t[绿色史莱姆,greenSlime]其实……她是法则碎片的具象化。",
                "\t[hero]啥？",
                "\t[绿色史莱姆,greenSlime]世间有无数种法则，它们共同约束着这个世界的运作。",
                "\t[绿色史莱姆,greenSlime]但是有些境界极高的大佬，不甘受限于法则的束缚，试图将法则打破。比如那位大佬，觉得这世间升级太慢了，就试图对抗境界晋升的法则。",
                "\t[hero]法则这种虚无缥缈的东西怎么能被打破？",
                "\t[绿色史莱姆,greenSlime]对于那些大佬而言，打破法则是有可能的，只是非常难而已。不过，那位大佬另辟蹊径……",
                "\t[绿色史莱姆,greenSlime]他明白，将法则推倒重来是极其困难的，所以他采用的方法是模仿这境界晋升的法则创立一个新的法则，只是在这个新法则里面，境界晋升的速度更快一些而已。这样根据原法则模仿而成的法则，与原法则的冲突比较小，要取代原法则的话受到的抵抗也会小一些。",
                "\t[绿色史莱姆,greenSlime]然而他还是失败了，他所创建的快速晋升的法则被原法则击碎。按理说这些碎片已经彻底失去了法则之力，但例外还是发生了，一道蕴含着法则力量的碎片留存了下来，并且机缘巧合之下被熙枫所获得。",
                "\t[绿色史莱姆,greenSlime]据我所知，熙枫原本只是普通的女孩子，而自从她得到法则碎片，境界便突飞猛进，甚至她身边的人都受到了影响。",
                "\t[绿色史莱姆,greenSlime]法则碎片给她带来强大力量的同时，也引来了一群贪图法则碎片而追杀她的人。不过，她已经引爆了法则之力，她有意保护你才使你安然无恙，其他在现场的人应该都灰飞烟灭了。",
                "\t[hero]照这样讲，失去法则碎片，她应该只是会变回原本的样子吧……",
                "\t[绿色史莱姆,greenSlime]是这样，但前提是她的躯体还在……",
                "\t[hero]可恶，也对……她寄宿在我身上的时候已经只是残魂了……",
                "\t[绿色史莱姆,greenSlime]那丝法则之力是她的灵魂和意识留存于现世的最后的媒介了。",
                "\t[绿色史莱姆,greenSlime]她几乎燃尽了所有力量才把你送到这里，若是得不到法则之力的补充，她的最后一点痕迹也很快就要消散于这个世界了。",
                "\t[绿色史莱姆,greenSlime]你想要唤醒她的话，找到那种法则之力补充给她就行了。比如，去找当初创建那个法则的大佬。",
                "\t[hero]只是去见一个人？那听上去好像很简单……",
                "\t[绿色史莱姆,greenSlime]你知道能触及法则的大佬有多强吗？",
                "\t[hero]不知道……不过你这么强都称其为大佬，好像不止血海境界……",
                "\t[绿色史莱姆,greenSlime]没错，远远超过了血海境界，这等神龙见首不见尾的大佬你去哪找？",
                "\t[hero]这……那，你有办法找到他？",
                "\t[绿色史莱姆,greenSlime]没有办法……不过……",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "绿色史莱姆明显犹豫了。",
                "\t[hero]不过什么？",
                {
                    "type": "sleep",
                    "time": 1000
                },
                "绿色史莱姆闭上了眼睛，似乎是在挣扎是否要说出这件事。",
                "尽管心中极为焦急，莫逆强忍着没有催促。",
                {
                    "type": "sleep",
                    "time": 2000
                },
                "\t[绿色史莱姆,greenSlime]……当初那道法则破碎的时候，其实还有另外一道碎片也蕴含了法则之力。 ",
                "\t[绿色史莱姆,greenSlime]而这道碎片，如今正被供奉在星际圣殿的最深处。",
                "\t[绿色史莱姆,greenSlime]法则碎片的力量使得那里成为了修炼者的圣地，据传但凡能得到星际之神的恩赐者，境界都会突飞猛进。",
                "\t[hero]也就是说我可以用那道法则碎片的力量复活熙枫？",
                "\t[绿色史莱姆,greenSlime]那里是许多血海强者心中的圣地，你若是前去用那碎片复活熙枫，他们是断然不会同意的。",
                "\t[hero]什么血海强者都拦不住我！我是一定要去的，死亦无悔！",
                "\t[绿色史莱姆,greenSlime]……那么，祝你好运。",
                "\t[hero]非常感谢您的指点！临走之前，敢问我该如何称呼恩师？",
                "\t[绿色史莱姆,greenSlime]我？我都跟你说了我是绿色史莱姆。如果你硬要感激一个“人”的话……我的主人名为元仝。",
                "\t[绿色史莱姆,greenSlime]我这就送你出去，我们有缘再会。",
                "\t[hero]再会！",
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
                    "type": "setVolume",
                    "value": 0,
                    "time": 2000
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setVolume",
                    "value": 90,
                    "time": 0
                },
                "\t[绿色史莱姆,greenSlime]只怕星际圣殿要掀起一阵腥风血雨了……",
                "\t[绿色史莱姆,greenSlime]我是不是不应该告诉他这个消息？毕竟星际圣殿之人与他无冤无仇，我就这样让他去抢夺星际圣殿的至宝，不知多少血海强者会陨落在他手下……",
                "\t[???]这世间，本就没有对与错，只有强大的力量才是真理。",
                "\t[???]血海强者的性命很值钱吗？的确不算廉价，但为了筛选出最强者，这些牺牲都是值得的。",
                "\t[???]你还需要继续感悟圣幻道长流传下来的理念。你只有具备了上位者的思想，才有可能成为上位者。现在，你的力量足以主宰一整个位面，但是心性还差得太远了。",
                "\t[绿色史莱姆,greenSlime]……是，主人。",
                {
                    "type": "sleep",
                    "time": 1000
                },
                {
                    "type": "resumeBgm"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT101",
                    "loc": [
                        0,
                        0
                    ],
                    "time": 2000
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
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,491,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156]
],
    "bgmap": [

],
    "fgmap": [

]
}
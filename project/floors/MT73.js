main.floors.MT73=
{
    "floorId": "MT73",
    "title": "鲜血森林",
    "name": "鲜血森林",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "grass2",
    "bgm": "1-3.mp3",
    "color": [
        0,
        0,
        0,
        0.7
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,9": {
            "floorId": "MT72",
            "loc": [
                12,
                3
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "10,3": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "wuyu",
                "loc": "hero"
            },
            "\t[hero]这是个什么东西？",
            "\t[熙枫,heroine]记录了某种战斗技能的卷轴。",
            "\t[hero]（打开卷轴）然而这上面什么都没写……",
            "\t[熙枫,heroine]被加密了。",
            "\t[熙枫,heroine]不过似乎是很低级的加密手段，我试试能不能破解它。",
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "light2",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]竟然……出现文字了！",
            "\t[熙枫,heroine]小把戏而已，不过以那熊怪的智力定然是没有办法破开的。",
            "\t[hero]呃……那岂不是说我的智力没比那熊怪高多少？",
            "\t[熙枫,heroine]不对，不是那熊怪蠢，是我太厉害了……啊啊别说那个了，赶快感悟这上面的信息吧。",
            {
                "type": "animate",
                "name": "han",
                "loc": "hero"
            },
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('execute_percentage', 20);\ncore.setFlag('execute_atk_percentage', 50);\ncore.getItem('execute');\n}"
            },
            "\t[hero]貌似不是个很厉害的技能，好在技不压身。"
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,454,380,151,454,151,380,454,151, 21,351, 22,151],
    [151, 30, 27,218, 28,218, 27, 30, 82,350,352,349,151],
    [151,151,151,151,428,151,151,151,151,455,483,455,151],
    [151,  0,431,  0, 30,  0,431,  0,151,151,481,151,151],
    [151, 29,151,151,151,151,151, 27,151,223,  0,223,151],
    [151,  0,218, 30,151, 27,151,  0,151, 27,  0, 28,151],
    [151,380,151,  0,218,  0,151, 29,151,151,475,151,151],
    [151,432,151, 28,151,454,475,  0,475,  0, 30,455,151],
    [ 92,  0,151,428,151,428,151,151,151,151,432,151,151],
    [151,431,151,454, 81, 28,151,456,151, 27,  0, 29,151],
    [151,  0, 27,  0,151,454,475, 27,151,380, 30,454,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}
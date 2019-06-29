main.floors.MT92_2=
{
    "floorId": "MT92_2",
    "title": "回忆",
    "name": "回忆",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass",
    "bgm": "5-6.mp3",
    "weather": [
        "fog",
        8
    ],
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]\b[up,5,6]咦，这里怎么有一只好可爱的小黄鸡？",
        {
            "type": "jump",
            "from": [
                5,
                6
            ],
            "to": [
                6,
                6
            ],
            "time": 400,
            "keep": true
        },
        {
            "type": "jump",
            "from": [
                6,
                6
            ],
            "to": [
                6,
                6
            ],
            "time": 400,
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[???,N502]\b[up,7,6]咕咕咕……",
        {
            "type": "animate",
            "name": "han",
            "loc": [
                6,
                6
            ]
        },
        "\t[熙枫,heroine]\b[up,6,6]原来黄鸡是这个叫声吗？好像和一般的鸡不一样诶……",
        "\t[???,N502]\b[up,7,6]咕咕咕……",
        {
            "type": "move",
            "loc": [
                7,
                6
            ],
            "time": 100,
            "steps": [
                "left"
            ]
        },
        {
            "type": "animate",
            "name": "light2",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "jump",
            "from": [
                6,
                6
            ],
            "to": [
                6,
                6
            ],
            "time": 400,
            "keep": true
        },
        "\t[熙枫,heroine]\b[up,6,6]这！这是发生了什么？……",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]这……难道就是她的力量来源吗……",
        "\t[hero]那黄鸡，以我现在的能力都看不出它的真实境界，竟然恐怖如斯……",
        {
            "type": "changeFloor",
            "floorId": "MT93",
            "loc": [
                6,
                12
            ],
            "direction": "up",
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
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0, 20,  0,  0,  0,  0,  0, 20,  0,  0, 20],
    [ 20,  0,  0, 20,  0,  0,  0,  0,  0, 20,  0,  0, 20],
    [ 20, 20,  0, 20,  0,503,  0,502,  0, 20,  0, 20, 20],
    [ 20,  0,  0, 20,  0,  0,  0,  0,  0, 20,  0,  0, 20],
    [ 20,  0,  0, 20,  0,  0,  0,  0,  0, 20,  0,  0, 20],
    [ 20,  0, 20, 20, 20, 20,  0, 20, 20, 20, 20,  0, 20],
    [ 20,  0,  0,  0, 20,  0,  0,  0, 20,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

]
}
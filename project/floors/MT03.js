main.floors.MT03=
{
    "floorId": "MT03",
    "title": "福神花园 前段",
    "name": "福神花园 前段",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "grass",
    "bgm": "11-13.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "flag:hard<3",
            "true": [
                "系统提示：本作具有升级系统，当你遇到难以解决的怪物时请注意清怪升级。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,12": [
            "\t[伯伯,man]在树下乘凉真舒服啊！",
            "\t[hero]……",
            "\t[伯伯,man]怎么了，你好像在等我说什么话的样子？",
            "\t[hero]呃，没，没有。"
        ]
    },
    "changeFloor": {
        "0,4": {
            "floorId": "MT02",
            "loc": [
                12,
                4
            ],
            "time": 0
        },
        "12,8": {
            "floorId": "MT04",
            "loc": [
                0,
                8
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [ 30,  0, 20, 32, 27, 32, 20,  0, 32, 20,  0,  0,  0],
    [  0,202, 20, 20,324, 20, 20, 32,  0, 20,  0,  0,  0],
    [ 20,  0,  0,202,  0,  0,  0,202, 20, 20,  0,  0,  0],
    [  0,  0, 20, 20,  0, 20, 20,  0,  0, 20, 17, 17, 20],
    [ 92,  0, 31, 20,  0, 20, 31,  0,  0,  0, 20, 30, 20],
    [  0,  0,  0,  0,202,  0,  0, 31, 20,  0,325,  0, 20],
    [ 20, 20, 20, 20, 20,  0,  0, 20, 20,  0,  0, 20, 20],
    [ 20, 29, 20,  0, 20,  0, 20, 32,  0, 20,  0, 20, 20],
    [ 31,324,  0,  0,  0,202, 20,  0, 32,325,  0,325, 94],
    [ 20, 20, 20,202, 20,  0, 20, 20, 20,  0,  0, 20, 20],
    [  0, 31,  0, 31, 20,  0,  0,324,  0,  0,  0, 20, 20],
    [202, 20, 20, 20, 20,  0, 20,  0, 20,  0,  0,  0, 20],
    [  0, 27,  0, 32, 20, 32, 20, 28, 20,  0,121,  0, 20]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10072,10073,10074,10075],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10048,10049,10050,10051],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10056,10057,10058,10059],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10064,10065,10066,10067],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10040,10041,10042,10043],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10048,10049,10050,10051],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,10056,10057,10058,10059]
]
}
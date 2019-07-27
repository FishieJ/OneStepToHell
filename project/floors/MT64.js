main.floors.MT64=
{
    "floorId": "MT64",
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
            "type": "sleep",
            "time": 500
        },
        "\t[熙枫,heroine]这里往下走。",
        {
            "type": "if",
            "condition": "flag:hard < 3",
            "true": [
                "\t[hero]谔谔，下去的路被堵住了。",
                "\t[熙枫,heroine]它的特技，可以利用一下。"
            ],
            "false": [
                "\t[hero]好的。"
            ]
        },
        {
            "type": "setValue",
            "name": "flag:arrived_64",
            "value": "1"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT62",
            "loc": [
                2,
                0
            ],
            "time": 0
        },
        "12,3": {
            "floorId": "MT65",
            "loc": [
                0,
                10
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "MT66",
            "loc": [
                12,
                6
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,454,  0,454,154,352,  0,349,455,154],
    [154,154,154, 27, 81, 28,  0,154,  0,441,154,154,154],
    [154,154,154,  0,231,  0,445,154,445,  0,448,  0, 94],
    [154, 81, 29,  0,448,  0, 30,154,  0,350,50010,442,154],
    [154,  0,231,  0,231,  0,231,154, 81,50010,50011,  0,154],
    [ 92,  0,50012,455,50012,454, 27,154,  0, 29,  0,454,154],
    [154,  0, 27,  0, 28,50012,467,154,154,  0, 30,440,154],
    [154,  0,  0,50010,  0, 21,  0, 21,467, 27,  0,  0,154],
    [154,442,20011,50012,50019,  0,  0,  0,50019,50012,20011,444,154],
    [154,352,  0,350, 81, 81,441, 81, 81,349,  0,352,154],
    [154,  0,458,  0,20011,50010,  0,50010,20011,  0,458,  0,154],
    [154,154,154,154,154,154, 93,154,154,154,154,154,154]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50029,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,50037,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
],
    "weather": [
        "fog",
        3
    ]
}
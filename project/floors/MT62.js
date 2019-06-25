main.floors.MT62=
{
    "floorId": "MT62",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,0": [
            "系统提示：本塔在拾取血瓶时，先计算该位置的阻击等地图伤害，再计算回血。可以用“轻点”（空格或双击勇士）获取被地图伤害覆盖的血瓶。"
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT61",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "2,0": {
            "floorId": "MT64",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "12,3": {
            "floorId": "MT63",
            "loc": [
                0,
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
    [154,455, 91,129,50019,154,154,154,154,154,154,154,154],
    [154,454,  0,441,  0,  0,  0,  0,50019, 30, 29,154,154],
    [154,20012,441,  0,455,  0,20012,455,  0,50011, 28,20012,154],
    [154,50019,  0,50011,20012,454,50018,20012,  0,235,  0,256, 94],
    [154,351,  0,352,440,  0,50018,  0, 28,  0,50019, 27,154],
    [154,455,349,50019,50019,50019,50011,  0,50011,50019, 82,454,154],
    [154, 81,50011,352,351,350,50011,455,50019,  0,455,50019,154],
    [154,456,50011, 21,50011,349,50011,  0,  0,448,  0,454,154],
    [154, 27,50011, 22,50011,  0,441, 27,50011,231,  0,231,154],
    [154,467,455,50011,50011,448,50011,  0,50011,454,  0,454,154],
    [154, 28,467,455,256,454,  0,235, 81,  0, 27,  0,154],
    [154, 29,50019,  0, 27, 81,  0, 28,50011, 30,  0, 29,154],
    [154,154,154,154,154,154, 93,154,154,154,154,154,154]
],
    "bgmap": [

],
    "fgmap": [

],
    "weather": [
        "fog",
        2
    ]
}
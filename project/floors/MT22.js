main.floors.MT22=
{
    "floorId": "MT22",
    "title": "泰南山",
    "name": "泰南山",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "grass",
    "bgm": "15-17.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        "\t[hero]那些法师竟然拥有无视防御力的特殊能力……",
        "\t[hero]挺好的地方，怎么就遍地都是骷髅和鬼魂呢……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,11": {
            "floorId": "MT21",
            "loc": [
                12,
                0
            ],
            "time": 0
        },
        "0,0": {
            "floorId": "MT23",
            "loc": [
                12,
                12
            ],
            "time": 0
        },
        "4,7": {
            "floorId": "MT22_2",
            "loc": [
                6,
                11
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [ 92,210,30011,  0,  0,30023, 27,30011, 32,  0,361,30023, 30],
    [30020,  0, 28,361,  0, 32,209,  0,206,30011, 34,  0,209],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0, 17],
    [  0,  0,  0,  0, 17,30040,350,30023,351,30023,209,  0, 28],
    [  0,  0,  0,  0, 17,206,30020, 32,217,361,  0,30020, 34],
    [  0,  0,  0,  0, 17, 34,  0,217,  0,  0,206, 34,30023],
    [ 17, 17, 17, 17, 91, 17, 17, 17,  0, 17, 17, 17, 17],
    [  0,  0, 17,  0, 27, 17, 17, 17,  0, 17, 17, 17, 17],
    [30020,30013,30014,361,30011, 17, 17, 17,  0, 17, 17, 17, 17],
    [  0,209,  0, 32,  0,10020,  0, 32,  0,209, 27, 30, 17],
    [ 92,  0,30020,  0,361,  0,209,  0, 32,30007,30005,30006, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17,30015, 17, 17, 17]
],
    "bgmap": [
    [  0,  0,  0,30002,  0,  0,  0,  0,  0,  0,30002,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30057,30057,30057,30057,30057,30057,30057,30057,30057,30057,30057,30123,30057],
    [30065,30065,30065,30065,30065,30065,30065,30065,30065,30065,30065,30123,30065],
    [30065,30065,30065,30065,30065,30065,30041,30041,30041,30041,30041,30124,30041],
    [30065,30065,30065,30065,30065,30048,  0,  0,  0,  0,  0,  0,  0],
    [30065,30065,30065,30065,30118,30048,  0,  0,  0,  0,  0,  0,  0],
    [30073,30073,30073,30073,30126,30056,30057,30057,30115,30057,30057,30057,30057],
    [30041,30041,30041,30041,30041,30064,30065,30065,30123,30065,30065,30065,30062],
    [  0,  0,  0,  0,  0,30072,30073,30073,30123,30073,30073,30073,30070],
    [  0,  0,  0,  0,  0,  0,  0,  0,30124,30001,  0,30050,30078],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30050,30086],
    [30057,30057,30057,30057,30057,30057,30057,30057,30057,30057,30057,30058,30094]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30128,30129,30130,30131,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30136,30137,30138,30139,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30144,30145,30146,30147,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30152,30153,30154,30155,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [30160,30161,30162,30163,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
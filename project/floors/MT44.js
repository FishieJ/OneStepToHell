main.floors.MT44=
{
    "floorId": "MT44",
    "title": "梦雪平原",
    "name": "梦雪平原",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 50,
    "defaultGround": "snowGround",
    "bgm": "19-21.mp3",
    "color": [
        0,
        0,
        0,
        0.4
    ],
    "weather": [
        "snow",
        1
    ],
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "flag:darkRatio+0.01"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "9,12": {
            "floorId": "Area5_m",
            "loc": [
                7,
                0
            ],
            "time": 500
        },
        "0,6": {
            "floorId": "MT45",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "9,0": {
            "floorId": "MT46",
            "loc": [
                7,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [150,150,150,150,150,150,  0, 34,149, 91,149, 34,  0],
    [150,150,150,150,150,150,350,  0,149,400,149,  0,349],
    [150,150,150,150,150,150,400,149,149,400,149,149,400],
    [150,150,150,150,150,150,  0, 28,  0, 27,  0, 32,  0],
    [150,150,150,150,150,150,149,149,388,149,388,149,149],
    [ 30,  0,150,150,150, 32,  0, 27,  0,404, 28,  0,149],
    [ 92,393,351,396, 27,388,149,149,149,149,  0, 27,149],
    [ 30,  0,150,150,150,  0, 28,  0, 34,149, 32,  0,149],
    [150,393,150,150,150,389,149,149,404,149,149,388,149],
    [150,349,150,150,150,  0, 34, 27,  0,396, 31, 28,  0],
    [150, 34,150,150,150,149,404,149,149,149,149,149,399],
    [150,150,150,150, 34, 27,  0,149, 33,  0, 27,149, 32],
    [150,150,150,150,150,150,150,150,150, 93,  0,403, 27]
],
    "bgmap": [

],
    "fgmap": [

]
}
main.floors.MT49=
{
    "floorId": "MT49",
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
        "0,6": {
            "floorId": "MT48",
            "loc": [
                12,
                3
            ],
            "time": 0
        },
        "12,9": {
            "floorId": "MT50",
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
    [149,149,149,149,149,149,149,149,149,149,149,149,149],
    [149,149,149,380,  0,149,352,  0,349,149,149,149,149],
    [149,  0,398,  0,350,149,  0,350,  0,149,149,149,149],
    [149,350,149,349,149,149,149,149,398,149,149,149,149],
    [  0,390,149,  0, 34,149, 29,350,  0,149,  0, 34,149],
    [  0,  0,149,149,149,149,149,149,405,149,350,  0,149],
    [ 92,  0,392,  0, 31,  0, 28,149,  0,405,  0,349,149],
    [  0,  0,149,149,149, 29,  0,401,  0,149,149,149,149],
    [  0, 81,149,149,149,405,149,  0, 31, 28,149,350,  0],
    [149,  0,349,  0,149,  0,149,  0,  0,  0,395,  0, 94],
    [149,380,  0,352,149, 32,149,149,405,  0,149,349,  0],
    [149,  0,350,  0,398,  0,  0,350,  0,149,149,149,149],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [148,148,148,148,148,148,148,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,148,148,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,148,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,148,148,148,148,148,148],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60144,60145,60146,60147],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60152,60153,60154,60155],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,60168,60169,60170,60171],
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
]
}
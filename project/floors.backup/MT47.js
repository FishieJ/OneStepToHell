main.floors.MT47=
{
    "floorId": "MT47",
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
        "6,0": {
            "floorId": "Area5_m",
            "loc": [
                21,
                14
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [149,149,149,149,149,388, 91,388,149,149,149,149,149],
    [149,388, 27,389,  0, 28,  0, 28,  0,389, 28,388,149],
    [149,149,149,149,397,149,149,149,397,149,149,149,149],
    [149,350,  0,394,  0,  0,349,  0,  0,394,  0, 34,149],
    [149,389,149,149,149,149, 81,149,149,149,350,389,149],
    [149, 32,149, 32,350,389, 34,  0,349,149,60014,  0,149],
    [149,394,149,394,149,149,149,149,394,149,149,394,149],
    [149, 29,149,  0,349,  0, 34,149, 32,350,389, 29,149],
    [149,401,149,149,149,149,401,149,149,149,149,401,149],
    [149,349,  0,149,  0, 34,  0, 34,  0,149,  0,349,149],
    [149,  0,388,149,351,  0,380,  0,352,149,388,  0,149],
    [149,350, 32,149,  0,350,  0,349,  0,149, 32,350,149],
    [149,149,149,149,149,149,149,149,149,149,149,149,149]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,60006,  0,  0],
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
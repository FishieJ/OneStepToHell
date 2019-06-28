main.floors.MT95=
{
    "floorId": "MT95",
    "title": "未知地域",
    "name": "未知地域",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "bgm": "5-6.mp3",
    "color": null,
    "weather": [
        "fog",
        2
    ],
    "firstArrive": [
        {
            "type": "addValue",
            "name": "flag:darkRatio",
            "value": "-0.1"
        },
        {
            "type": "function",
            "function": "function(){\ncore.drawMap();\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "MT95_2",
            "loc": [
                6,
                9
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  1,  0,  0,  1, 87,  1,  0,  0,  1,  0,  0],
    [  1,  1,  1,  0,  1,  0,  0,  0,  1,  0,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  0,  0,  0,  1,  1,  0,  1,  0,  0,  1,  0,  0,  0],
    [  0, 81,  0,  1,  0,  0,  1,  1,  1,  1,  0, 81,  0],
    [ 82,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  0,  0,  1,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0],
    [  1,  1,  1,  0,  1,  0,  0,  1,  1,  1,  1,  1,  0],
    [  0,  0,  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,  0],
    [  1,  1,  0,  0,  0,  0,  0, 81,  0,  1,  1,  1,  0],
    [  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,  1,  0],
    [  1,  0, 82,  0,  0, 81,  0,  0,  0,  1,  1,  1,  0],
    [  0,  0,  0,  1,  1,  1,  0,  1,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}
main.floors.MT5A=
{
    "floorId": "MT5A",
    "title": "永夜平原 中心",
    "name": "永夜平原 中心",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 50,
    "defaultGround": "grass2",
    "bgm": "21-23.mp3",
    "color": [
        0,
        0,
        0,
        0.5
    ],
    "weather": [],
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "flag:darkRatio+0.01"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('bgLight', [\n\t[400, 136, 150],\n\t[400, 272, 150],\n\t[144, 8, 150],\n\t[272, 8, 150],\n\t[144, 304, 250],\n]);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "12,6": {
            "floorId": "MT57",
            "loc": [
                0,
                6
            ],
            "direction": "right",
            "time": 0
        },
        "6,0": {
            "floorId": "MT54",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [152,152,152,152,152,152, 91,152,152,152,152,152,152],
    [152, 34,152, 33,353,259,  0,152,  0,351, 34,152,152],
    [152,351,152,152,152,152,  0,152,353,  0,152,152,152],
    [152,353,152,  0,  0,356,  0,  0,259,152,152, 33,152],
    [152,  0,259,  0,152,152,259,  0,152,152,354,  0,152],
    [152,152,152,252,152,  0,353,152,152,  0,416,152,152],
    [152,357,  0, 22,152, 33,152,152,354,416,  0,  0, 94],
    [152,  0,380,  0,357,152,152, 33,  0,152,  0,  0,152],
    [152, 33,  0,359,152,152,358,152,152,152,356,  0,152],
    [152,  0,360,152,152,359,  0, 22,417,  0,  0,  0,152],
    [152, 33,152,152,360,  0,380,  0,152,152,152,416,152],
    [152,152,152, 33,  0, 33,  0,358,152, 34,351,354,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,103,  0,  0,  0,103,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,103],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,103],
    [  0,  0,  0,  0,103,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
]
}
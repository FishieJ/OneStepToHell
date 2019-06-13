main.floors.MT52=
{
    "floorId": "MT52",
    "title": "永夜平原",
    "name": "永夜平原",
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
            "function": "function(){\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT51",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "4,0": {
            "floorId": "MT53",
            "loc": [
                4,
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
    [152,152,380,80009, 91,  0,418, 27,  0, 34,152,408,407],
    [152,152,  0,10007,60031,10007,  0,80009,80010,80011,152,410,409],
    [152,152, 27,418,  0,60031,  0,10006, 29,80009,152,412,411],
    [152,152,80010,80009,  0,407,  0, 32,  0, 30,152,152,152],
    [152,  0,407,  0, 32,  0,80010,80009,407,  0,152,413,152],
    [152,  0, 32,80011,80009,418,80009,80010, 27,80009,152,414,418],
    [152, 27,10007,  0,409,  0, 27,80009,407, 32,152,415,419],
    [152,  0,407,  0,60030,80009,407,  0,  0,  0,152,416,259],
    [152,80011,80009,  0, 29,  0,  0,60030,80009, 29,152,417,252],
    [152, 31,80011,80009,80011,409,80009, 27, 32,60030,152,152,152],
    [152, 27,409, 27,407,  0, 30,407,80010, 32,152,152,152],
    [152, 31,80009, 32,30011,  0,  0,  0,409, 27,152,152,152],
    [152,152,152,80011,80009,  0, 93,  0,80009,10007,152,152,152]
],
    "bgmap": [

],
    "fgmap": [

]
}
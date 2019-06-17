main.floors.Chap3_m=
{
    "floorId": "Chap3_m",
    "title": "红海战场",
    "name": "红海战场",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('darkRatio', 0);\ncore.setFlag('bgLight', []);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {
        "3,3": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('darkRatio', 0.6);\n}"
            },
            {
                "type": "setValue",
                "name": "flag:charge_atk",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:last_direction",
                "value": "null"
            },
            {
                "type": "changeFloor",
                "floorId": "MT61",
                "loc": [
                    6,
                    12
                ],
                "time": 500
            }
        ],
        "9,3": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('darkRatio', 0.8);\n}"
            },
            {
                "type": "setValue",
                "name": "flag:charge_atk",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:last_direction",
                "value": "null"
            },
            {
                "type": "changeFloor",
                "floorId": "MT81",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 500
            }
        ],
        "3,8": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('darkRatio', 0.6);\n}"
            },
            {
                "type": "setValue",
                "name": "flag:charge_atk",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:last_direction",
                "value": "null"
            },
            {
                "type": "changeFloor",
                "floorId": "MT71",
                "loc": [
                    12,
                    2
                ],
                "time": 500
            }
        ],
        "9,8": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('darkRatio', 0.6);\n}"
            },
            {
                "type": "setValue",
                "name": "flag:charge_atk",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "flag:last_direction",
                "value": "null"
            },
            {
                "type": "changeFloor",
                "floorId": "Chap3_shop",
                "loc": [
                    6,
                    0
                ],
                "time": 500
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [256,448,235,445,231,  0,  0,  0,  0,250,439,438,433],
    [440,441,447,442,444,  0,  0,  0,  0,  0,240,446,434],
    [443,452,449,450,451,  0,  0,  0,238,237,239,437,436],
    [453,  0,  0, 91,  0,  0,  0,  0,  0, 94,  0,  0,435],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [218,431,428,258,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [220,432,429,257,227,  0,  0,  0,  0,  0,  0,  0,  0],
    [430,223,241,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [323,  0,  0, 92,  0,  0,  0,  0,  0, 93,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "chap3_m.mp3"
}
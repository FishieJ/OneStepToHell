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
    "firstArrive": [
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[hero]呼……终于逃出这里了……",
        "\t[熙枫,heroine]这红海战场的野外遍地都是红海生物，先去商域休整一下吧。"
    ],
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
    [235,448,467,256,445,231,  0,250,434,470,438,469,433],
    [440,441,447,442,444,260,  0,  0,471,439,240,446,237],
    [443,452,468,449,451,450,  0,  0,238,472,436,437,239],
    [453,  0,  0, 91,  0,  0,  0,  0,  0, 94,  0,  0,435],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [428,431,218,432,475,  0,  0,  0,  0,  0,  0,  0,  0],
    [429,258,430,220,227,223,  0,  0,  0,  0,  0,  0,  0],
    [241,257,473,474,477,  0,  0,  0,  0,  0,  0,  0,  0],
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
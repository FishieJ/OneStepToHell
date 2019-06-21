main.floors.MT42=
{
    "floorId": "MT42",
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
        "0,3": {
            "floorId": "MT41",
            "loc": [
                12,
                3
            ],
            "time": 0
        },
        "9,0": {
            "floorId": "MT43",
            "loc": [
                2,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {
        "3,7": [
            "left"
        ],
        "3,6": [
            "left"
        ],
        "3,5": [
            "left",
            "up"
        ],
        "4,5": [
            "up"
        ],
        "5,5": [
            "up"
        ],
        "6,5": [
            "up"
        ],
        "7,5": [
            "up"
        ],
        "8,5": [
            "up"
        ],
        "9,5": [
            "up"
        ],
        "10,5": [
            "up"
        ],
        "11,5": [
            "up",
            "right"
        ],
        "11,6": [
            "right"
        ],
        "11,7": [
            "right"
        ],
        "2,7": [
            "right"
        ],
        "2,5": [
            "right"
        ],
        "12,7": [
            "left"
        ],
        "12,6": [
            "left"
        ],
        "12,5": [
            "left"
        ],
        "11,4": [
            "down"
        ],
        "10,4": [
            "down"
        ],
        "9,4": [
            "down"
        ],
        "8,4": [
            "down"
        ],
        "7,4": [
            "down"
        ],
        "6,4": [
            "down"
        ],
        "5,4": [
            "down"
        ],
        "4,4": [
            "down"
        ],
        "3,4": [
            "down"
        ],
        "2,6": [
            "right"
        ]
    },
    "map": [
    [150,150,150,150,150,150,150,150, 31, 91, 31,149,149],
    [149, 27, 32,149,149, 31,149,149, 27, 30, 28,149, 32],
    [149,388,149,149, 32,388, 21,149,149,399,149,149,349],
    [ 92,  0,  0,397, 28,149,  0,149, 28,  0,380,149,399],
    [ 27,  0,397,149,149,149, 31,149,  0, 27,  0,396,  0],
    [  0,149,  0, 33,380,390, 28,60057, 32,  0,399,  0, 29],
    [397,  0, 31,354, 81,  0,399,  0,60046,399,60057, 28,  0],
    [149, 28,  0,390,  0, 29,60057, 32,399,  0,60057, 32, 27],
    [149,  0,388, 17, 17,  0, 17, 17, 17,  0, 17, 17,  0],
    [149, 30,  0, 17, 17,397, 17, 17, 17,397, 17, 17,388],
    [149,388,60007, 17, 17,  0, 17, 17, 17,  0, 17, 17,  0],
    [149, 27,60015,  0,397,  0, 27, 17,  0, 32,  0,397, 28],
    [149,  0,397, 28,149,149, 30,388, 27,149,149,149,149]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,60048,60049,60049,60049,60049,60049,60049,60049,60050,  0],
    [  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,60058,  0],
    [  0,  0,  0,60056,  0,  0,  0,  0,  0,  0,  0,60058,  0],
    [  0,  0,  0,60064,60065,60116,60065,60065,60065,60116,60065,60066,  0],
    [  0,  0,  0,60072,60073,60124,60073,60073,60073,60124,60073,60074,  0],
    [  0,  0,  0,60080,60081,60124,60081,60127,60081,60124,60081,60082,  0],
    [  0,  0,  0,  0,  0,60132,  0,60135,  0,60132,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}
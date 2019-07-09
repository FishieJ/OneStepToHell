main.floors.MT113=
{
    "floorId": "MT113",
    "title": "伯力圣殿",
    "name": "伯力圣殿",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        -288,
        -96,
        "area12.jpg",
        false
    ],
    "item_ratio": 2000,
    "defaultGround": "ground7",
    "bgm": "9-11.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area12.jpg'];\nvar width = 416, height = 416;\ncore.canvas.bg.translate(width/2,height/2);\ncore.canvas.bg.rotate(rotateTime*Math.PI/180/6);\ncore.canvas.bg.translate(-width/2,-height/2);\ncore.canvas.bg.drawImage(image,-288,-96);\n}"
        }
    ],
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416, height = 416;\n\t\n\tcore.canvas.bg.translate(width/2,height/2);\n\tcore.canvas.bg.rotate(Math.PI/180/6);\n\tcore.canvas.bg.translate(-width/2,-height/2);\n\tcore.canvas.bg.drawImage(image,-288,-96);\n\t\n\tcore.setFlag('lastTime', timestamp);\n\t\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}",
    "events": {},
    "changeFloor": {
        "0,6": {
            "floorId": "MT112",
            "loc": [
                12,
                7
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "7,6": [
            {
                "type": "openDoor",
                "loc": [
                    7,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ],
                "floorId": "MT112"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,352,349, 81,542,  0,545,454,349, 81,457,  4],
    [  4,  4,  4,545,543,349,543,  4,351,  4,  4, 81,  4],
    [  4,  4,454,350,  4,  0,  4,  4, 81,  4,  4,457,  4],
    [  4,  4,  4,351, 81,560,351, 85,555,352,  4, 81,  4],
    [  4,  4,543,  4,350,  0,247,  4,  4,553, 81,536,  4],
    [ 92,  0,352,572,  0,  4,  0,544,  4, 81,  4,  4,  4],
    [  4,  4,543,  4,228,  0,247,  4,  4,553, 81,536,  4],
    [  4,  4,  4,454,349,  4,352, 85,555,352,  4, 81,  4],
    [  4,  4,349,247,  4,  4,555,  4, 81,  4,  4,457,  4],
    [  4,  4,351,  4,350,  0, 82,349,536,  4,  4, 81,  4],
    [  4,  4,454,548,  0,572,  0,247,  0,454, 81,457,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
main.floors.MT112=
{
    "floorId": "MT112",
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
        "6,12": {
            "floorId": "MT111",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "12,7": {
            "floorId": "MT113",
            "loc": [
                0,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT114",
            "loc": [
                6,
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
    [  4,  4,  4,  4,  4,  4, 91,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [  4,536,349,455,  4,351,247,455,  4,349,  4,455,  4],
    [  4,  4,247,  4,  0,247,  4,349,556,  0,249,350,  4],
    [  4,  0,455,  0,350,  0,455,  4,543,352,  4, 21,  4],
    [  4,349,562,  4,541,  0,541,  0,454,  0, 81,536,  4],
    [  4,  0,  4, 22,  4,  0,  4,  4,543, 81,543,  4,  4],
    [  4,543,  4,560,  0,560,  0,349,  4,  0,  0,349, 94],
    [  4,  0,349,  4,455,  4,454,  0,572,  0,543,  4,  4],
    [  4,543,  0,561,  0,541,  0,541,  4,228,  4,354,  4],
    [  4,  0,  4,350,562,  4,554, 81,  0,349,  0,566,  4],
    [  4,349,  4,  0,  4,556,  0,  4, 81,  4,247,  4,  4],
    [  4,  0,560, 81,349,  0, 93,  4,536,454,349, 21,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
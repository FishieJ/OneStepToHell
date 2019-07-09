main.floors.MT116=
{
    "floorId": "MT116",
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
            "floorId": "MT114",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "MT118",
            "loc": [
                0,
                7
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT117",
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
    [  4,454,  4,351,  4,543,352,543,  4,454,349,  4,  4],
    [  4,553,349,566,  0, 81,  0,  4,456,  4,551,  0,  4],
    [  4,  4, 81,  4,352,  0,548,  0, 81,  0,  0,350,  4],
    [  4,454,  0,543,  0,543,  4,454,  4,  4,  4,228,  4],
    [  4,  0,350,  4,536,  0,351,  0,543,  4,543,454,  4],
    [  4,247,  4,454,  4,  4,  0,352,  0,454,  0,  0, 94],
    [  4,  0,228,349,  4,349,543,  0,543,  4,543,349,  4],
    [  4,350,  0,548,  0,  4,  4,536,  0,  4,  4,572,  4],
    [  4, 81,  4,351, 81,  0,548,  0,  4,352,545,  0,  4],
    [  4,536,349,  4,  4,454,  4,572,349,  0, 81,350,  4],
    [  4,351,566,  0,350,545,  0,  0,  4,  4,454,  0,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
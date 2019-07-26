main.floors.MT118=
{
    "floorId": "MT118",
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
        "0,7": {
            "floorId": "MT116",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "12,7": {
            "floorId": "MT119",
            "loc": [
                0,
                6
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,349,350,454, 81,  0,560,350,  0,562,  0,558,455],
    [542,  4,  4,  4,  4, 81,  4,  4,  4,  4, 82,  4,349],
    [  0,  4,349,454,  4, 81,536,  4,349,  0,352,  4,351],
    [566,  4,545, 81,  4, 81,  4,  4,559,351,  0,  4, 81],
    [  0,548,350,  0,545,  0,558,350,  0,  4,  4,  4,536],
    [352,556,  4,  4,  4,349,  0,  4,  4,  4,349,  4,457],
    [  0,  4,543,  4,536,543,  0,543, 81,  0,545,  4,  4],
    [ 92,  0,  0,  4,  4,  4,  0,  4,  4,352,  0,  0, 94],
    [545,  4,543,  0,545,  0,548,  0,349,  0,454,  4,  4],
    [349,454,  4,350, 81,350,  0,  4,543,  4,548,  4, 21],
    [  4,  4,548,  0,545,  0, 81,542,  0,350,  0, 82, 21],
    [349,545,350,  4,349,  4,555,  4,543,  0,545,  4, 21],
    [351,  4,  0,352,  4,352,  0,349,  0,  4,349,454,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
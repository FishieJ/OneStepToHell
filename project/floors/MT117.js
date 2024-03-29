main.floors.MT117=
{
    "floorId": "MT117",
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
            "floorId": "MT116",
            "loc": [
                6,
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,353,558,354,  4,  0,352,  4,  0,349,  0,352,  4],
    [  4,  4,  0,  4,  4,349,  4,454,566, 81,558,  4,  4],
    [  4,543,  0,543,  4,545,349,  0,  4,351, 23,350,  4],
    [  4,  4,454,  4,  4,  4,  0,562,  4,  4,  4,  4,  4],
    [  4,352,  0, 81,536,  4,556,  0,  0,350,  0,561,  4],
    [  4,  0,556,  4,  4,  4,  0,352,  4,351,  4,  0,  4],
    [  4,351,562,545,  0,352,  4, 81,  4,  4,454,349,  4],
    [  4,  4,352,  4,454,349,  4,  0,545,349,  4,560,  4],
    [  4,560,  0,548,  4, 81,350,  0,  4,  0,352,  0,  4],
    [  4,349, 81,349,  0,545,  0,562,352,  4,548,  4,  4],
    [  4,351,  4,454,  4,  4,  0,454,  4,536,349,352,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
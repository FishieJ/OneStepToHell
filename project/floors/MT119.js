main.floors.MT119=
{
    "floorId": "MT119",
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
            "floorId": "MT118",
            "loc": [
                12,
                7
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
    [  4,352,  4,349,542,  0,352,551,349,  4,454,352,  4],
    [  4,  0,536,  4,558,351,  4,  0,  0,551,350,  0,  4],
    [  4,349,555,350,  4,543,  0,543,  4,  0,555,  4,  4],
    [  4,  4,  0,247,  4,  4,454,  4,536, 81,  4,454,  4],
    [  4,543,  4,  0,349,  0,545,  0,  4,454,247,349,  4],
    [ 92,  0,247,454,  4,  4,350,  0, 81,  0,  4,536,  4],
    [  4,543,  4,  0,  0,  4,  0,555,  4,228,349,  4,  4],
    [  4,350,572,  4,228,554,  4,349,541,551,  0,  0,  4],
    [  4,  4,351, 81,  0,349,558,  4,  0,350,  4, 81,  4],
    [  4,349,542,  4,555,  0,  4,349,541,  0,559,349,  4],
    [  4,536,  4,352,350,  4,542,  0,352,  4,352,454,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
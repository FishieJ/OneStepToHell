main.floors.MT111=
{
    "floorId": "MT111",
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
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nvar rotateTime = core.getFlag('rotateTime', 0);\nvar image = core.material.images.images['area12.jpg'];\nvar width = 416, height = 416;\ncore.canvas.bg.translate(width/2,height/2);\ncore.canvas.bg.rotate(rotateTime*Math.PI/180/6);\ncore.canvas.bg.translate(-width/2,-height/2);\ncore.canvas.bg.drawImage(image,-288,-96);\n}"
        }
    ],
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": "MT112",
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
    [  4,353,  0,454,  0,  4,  0,  4,  4,350,  4, 21,  4],
    [  4,  4,558,543, 81,543,349,  0,543,  0,543,349,  4],
    [  4,  0,350,  0,352,  4,  0,556,  4,  0,  4,536,  4],
    [  4,228,  4,543,  0,  0,554,  4,  0,454,542,  4,  4],
    [  4,349,454,  4,572,  0, 81,  0,545,  0,349,  0,  4],
    [  4, 21,  4,454,350,  4,351,  4,  0,558,  4,536,  4],
    [  4,  4,  4,  4,551,  4,  0, 81,351,  0,350,228,  4],
    [  4,536,228,  0,349,  0,228,  4,553,352,  0,  0,  4],
    [  4,  4,  4, 81,  4,541,  0,541,  4,  0,  4,566,  4],
    [  4,457,566,  0,555,  4,352,  4,349, 82,536,358,  4],
    [  4,357, 82,349,  0,548,  0,554,  0,455,  4,360,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "9-11.mp3",
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -288, -96);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}"
}
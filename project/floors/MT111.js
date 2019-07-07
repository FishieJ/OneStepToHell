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
    [  4,  0,  0,  0,  0,  4,  0,  4,  4,  0,  4,  0,  4],
    [  4,  4,558,  0,  0,228,  0,  0,543,  0,543,  0,  4],
    [  4,  0,  0,228,  0,  4,  0,  0,  4,  0,  4,  0,  4],
    [  4,228,  4,  0,  0,  0,228,  4,  0,  0,542,  4,  4],
    [  4,  0,  0,  4,228,  0,  0,  0,545,  0,  0,  0,  4],
    [  4,  0,  4,  0,  0,  4,  0,  4,  0,558,  4,  0,  4],
    [  4,  4,  4,  4,228,  4,  0,  0,  0,  0,  0,228,  4],
    [  4,  0,228,  0,  0,  0,228,  4,553,  0,  0,  0,  4],
    [  4,  4,  4, 81,  4,541,  0,541,  4,  0,  4,566,  4],
    [  4,457,566,  0,555,  4,  0,  4,  0, 81,  0,  0,  4],
    [  4,357, 82,  0,  0,548,  0,554,  0,  0,  4,  0,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "9-11.mp3",
    "parallelDo": "var lastTime = core.getFlag('lastTime', 0);\n\nif (timestamp - lastTime > 60) {\n\tvar image = core.material.images.images['area12.jpg'];\n\tvar width = 416,\n\t\theight = 416;\n\n\tcore.canvas.bg.translate(width / 2, height / 2);\n\tcore.canvas.bg.rotate(Math.PI / 180 / 6);\n\tcore.canvas.bg.translate(-width / 2, -height / 2);\n\tcore.canvas.bg.drawImage(image, -288, -96);\n\n\tcore.setFlag('lastTime', timestamp);\n\n\tvar rotateTime = core.getFlag('rotateTime', 0);\n\trotateTime += 1;\n\tif (rotateTime >= 6 * 180) {\n\t\trotateTime -= 6 * 180;\n\t}\n\tcore.setFlag('rotateTime', rotateTime);\n}"
}
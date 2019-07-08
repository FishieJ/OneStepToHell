main.floors.MT115=
{
    "floorId": "MT115",
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
        "6,0": {
            "floorId": "MT120",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "12,6": {
            "floorId": "MT114",
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
    [  4,  4,  4,  4,  4,  4, 91,  4,  4,  4,  4,  4,  4],
    [  4,454,349,561,  0,349,559,  0,572,354,  4,454,  4],
    [  4,  4,  4,  4,454,543,  0,543,  4,  4,349,  0,  4],
    [  4,454,352,  4, 81,  4,  0, 81,  0,350,572,352,  4],
    [  4,350,  0,551,  0,349,  0,350,  4,  4,351,  4,  4],
    [  4,  4,  4,  4,352,556,  4,  0,572,  0,572,  0,  4],
    [  4,352,  0,351,  4,  4,349, 81,  0,454,  4,  0, 94],
    [  4,  0,349,  4,350,  4,554,  4,352,  4,556,  0,  4],
    [  4,  4,551,  4,  0,551,454,  0,  0,454,  4,560,  4],
    [  4,454,350,551,351,  4,  0,558,  4,560,351,  0,  4],
    [  4,  4,551,  4,  4,  4, 81,  0,349,  0,  0,  4,  4],
    [  4,352,  0,349,551,  0,350,  4,454,  4,249,536,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
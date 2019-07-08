main.floors.MT114=
{
    "floorId": "MT114",
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
            "floorId": "MT112",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "0,6": {
            "floorId": "MT115",
            "loc": [
                12,
                6
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT116",
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
    [  4,  0,555,  0,542,  0,559,  0,547,350,  4,454,  4],
    [  4,349,  4,350,  4,454,  0,349,  4,  0,554,349,  4],
    [  4,  0,454,  4,  0,547,  4, 81,352,542,  0,  4,  4],
    [  4,  4,547,  0, 81,  0,349,454,  4,  4,547,  0,  4],
    [  4,  0,350,  0,542,  4,542,  4,454,349,  0,350,  4],
    [ 92,454,  0,349,  4,  4,352,  0,  4,542, 21,  4,  4],
    [  4,  4,542,  4,351,541,  0,541,349,555,  4,561,  4],
    [  4,536, 81,  0,247,  4,536,  4, 81,  4,541,350,  4],
    [  4,  4,  0,  4,349,  4,  0,454,  0,558,349,  0,  4],
    [  4, 21,349,558,  0,247,352,  4,  4,  4,541,351,  4],
    [  4,352,454,  4,352,  4,  0,554,349,555,  4,542,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
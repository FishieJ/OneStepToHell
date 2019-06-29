main.floors.MT118=
{
    "floorId": "MT118",
    "title": "主塔 118 层",
    "name": "118",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        0,
        0,
        "black.jpg",
        false
    ],
    "item_ratio": 1,
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
    [  0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  0,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [ 81,  4,  0,  0,  4,  4,  4,  4,  0,  0,  0,  4,  4],
    [ 81,  4,  0,  0,  4,  4,  4,  4,  0,  0,  0,  4,  4],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4,  4],
    [  0,  0,  4,  4,  4,  0,  0,  4,  4,  4,  0,  4,  4],
    [  0,  4,  0,  4,  0,  0,  0,  0, 81,  0,  0,  4,  4],
    [ 92,  0,  0,  4,  4,  4,  0,  4,  4,  0,  4,  0, 94],
    [  0,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4],
    [  0,  0,  4,  0,  4,  0,  0,  4,  0,  4,  0,  4,  4],
    [  4,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4],
    [  0,  0,  0,  4,  0,  4,  0,  4,  0,  0,  4,  4,  4],
    [  0,  4,  0,  0,  4,  0,  0,  0,  0,  4,  0,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
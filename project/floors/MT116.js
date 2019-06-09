main.floors.MT116=
{
"floorId": "MT116",
"title": "主塔 116 层",
"name": "116",
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
"defaultGround": "ground",
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
    [  4,  0,  4,  0,  4,  0,  0,  0,  4,  0,  0,  4,  4],
    [  4,  0,  0,  0,  0,  4,  0,  4,  0,  4,  0,  0,  4],
    [  4,  4, 81,  4,  0,  0,  0,  0, 81,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  4,  0,  4,  4,  4,  0,  4],
    [  4,  0,  0,  4,  0,  0,  0,  0,  0,  4,  0,  0,  4],
    [  4,  0,  4,  0,  4,  4,  0,  0,  4,  0,  0,  0, 94],
    [  4,  0,  0,  0,  4,  0,  0,  0,  0,  4,  0,  0,  4],
    [  4,  0,  0,  0,  0,  4,  4,  0,  0,  4,  4,  0,  4],
    [  4, 81,  4,  0, 81,  0,  0,  0,  4,  0,  0,  0,  4],
    [  4,  0,  0,  4,  4,  0,  4,  0,  0,  0,  4,  4,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  4,  4,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
"bgmap": [

],
"fgmap": [

],
}
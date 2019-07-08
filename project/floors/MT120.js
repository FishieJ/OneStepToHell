main.floors.MT120=
{
    "floorId": "MT120",
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
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "boss3.mp3"
        }
    ],
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
            "floorId": "MT115",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,5": [
            "这里是漏怪检测装置。正式版本会通过判断经验来判定是否已经清光怪物。",
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,4": {
            "floorId": "Final",
            "loc": [
                6,
                6
            ],
            "direction": "up",
            "time": 2000
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,457,  4,457, 81,457, 81,457, 81,457,  4,457,  4],
    [  4,457,  4, 81,  4,  4,457,  4,  4, 81,  4,457,  4],
    [  4,457, 81,457, 81,  4,  4,  4, 81,457, 81,457,  4],
    [  4, 82,  4,  4,457,  4, 89,  4,457,  4,  4, 82,  4],
    [  4,349,356,  4,  4,  4,384,  4,  4,  4,  4,356,  4],
    [  4,559,  4,  4,  4,543,  0,543,  4,  4,350,  0,  4],
    [  4,454,  0,  4,  4,  4,  0,  4,  4,  4,553,  4,  4],
    [  4,  4,350,543,  0,541,  0,541,  4,543,349,543,  4],
    [  4,349,559,  0,351,  4,  0,556,349,  4,553,  4,  4],
    [  4,559,  4,543, 81,349,  0,  4,  0,  4,350,454,  4],
    [  4,356,  4,350,  4,554,  0, 81,  0,559,  0,356,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}
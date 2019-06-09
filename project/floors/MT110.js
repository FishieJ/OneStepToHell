main.floors.MT110=
{
"floorId": "MT110",
"title": "主塔 110 层",
"name": "110",
"width": 13,
"height": 13,
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"images": [],
"item_ratio": 1,
"defaultGround": "ground2",
"bgm": "7-9.mp3",
"firstArrive": [],
"eachArrive": [
    {
        "type": "function",
        "function": "function(){\ncore.setFlag('rotateTime', 0);\n}"
    }
],
"parallelDo": "",
"events": {},
"changeFloor": {
    "7,10": {
        "floorId": "MT111",
        "stair": "upFloor",
        "time": 500
    }
},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0, 94,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
"bgmap": [

],
"fgmap": [

],
}
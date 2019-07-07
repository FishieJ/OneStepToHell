main.floors.MT110=
{
    "floorId": "MT110",
    "title": "朝圣之路",
    "name": "朝圣之路",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        0,
        0,
        "morning.jpg",
        false
    ],
    "item_ratio": 2000,
    "defaultGround": "white",
    "bgm": "7-9.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "9-11.mp3"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('rotateTime', 0);\n}"
        }
    ],
    "parallelDo": "// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，辣鸡作者只不过是把竖向移动改成了横向移动\nif (core.getFlag('morning', 0)) {\n\tvar lastTime = core.getFlag('lastWeatherTime', 0);\n\t// 每多少毫秒重绘一次；天气效果默认都是30\n\tif (timestamp - lastTime > 60) {\n\t\tcore.clearMap('weather'); // 清空天气层\n\t\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\t\tvar image = core.material.images.images['morning.jpg']; // 获得图片，这里写图片名\n\t\tvar width = image.width,\n\t\t\theight = image.height; // 获得宽高\n\t\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\t\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t\t// 尾部\n\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t\t// 首部\n\t\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t\t} else { // 不需要，直接绘制\n\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);\n\t\t}\n\t\t// 移动图片\n\t\tlastOffsetX -= 1; // 这里是每次移动的像素\n\t\tif (lastOffsetX < 0) lastOffsetX += height;\n\t\tcore.setFlag('lastOffsetX', lastOffsetX);\n\t\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n\t}\n}",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正式版本会通过判断经验来判定是否已经清光怪物。",
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT109",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT111",
            "loc": [
                6,
                12
            ],
            "time": 2000,
            "ignoreChangeFloor": false
        }
    },
    "afterBattle": {
        "6,2": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    3
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [157,157,157,157,157,157, 91,157,157,157,157,157,157],
    [536, 81,454,157,357,455,384,455,358,157,454, 81,536],
    [157, 21,349,157,536,360,544,359,536,157,350, 21,157],
    [157,157,565,157, 85,157,  0,157, 85,157,565,157,157],
    [454,157,  0,157,542, 81,  0, 81,542,157,  0,157,454],
    [ 27,547, 28,157,157,157,547,157,157,157, 27,547, 28],
    [  0,157,454,157,  0,546,  0,546,  0,157,454,157,  0],
    [541,157,157,157,556,157,157,157,556,157,157,157,541],
    [  0,536,  0, 27,  0,554,  0,554,  0, 27,  0,536,  0],
    [541,157,157,157,157,157,  0,157,157,157,157,157,541],
    [ 27,454,157,536, 21,157, 22,157, 21,536,157,454, 27],
    [157, 21, 82, 21,536,157,  0,157,536, 21, 82, 21,157],
    [157,157,157,157,157,157, 93,157,157,157,157,157,157]
],
    "bgmap": [

],
    "fgmap": [

]
}
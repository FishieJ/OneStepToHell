main.floors.MT107=
{
    "floorId": "MT107",
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
    "weather": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，辣鸡作者只不过是把竖向移动改成了横向移动\nvar lastTime = core.getFlag('lastWeatherTime', 0);\n// 每多少毫秒重绘一次；天气效果默认都是30\nif (timestamp - lastTime > 60) {\n\tcore.clearMap('weather'); // 清空天气层\n\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\tvar image = core.material.images.images['morning.jpg']; // 获得图片，这里写图片名\n\tvar width = image.width,\n\t\theight = image.height; // 获得宽高\n\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t// 尾部\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t// 首部\n\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t} else { // 不需要，直接绘制\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);\n\t}\n\t// 移动图片\n\tlastOffsetX -= 1; // 这里是每次移动的像素\n\tif (lastOffsetX < 0) lastOffsetX += height;\n\tcore.setFlag('lastOffsetX', lastOffsetX);\n\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n}",
    "events": {},
    "changeFloor": {
        "0,3": {
            "floorId": "MT106",
            "loc": [
                12,
                3
            ],
            "time": 0
        },
        "10,12": {
            "floorId": "MT108",
            "loc": [
                2,
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [157, 33,540, 28,157,157,157,157,157,540, 22, 27, 33],
    [157, 27,157,536,157,  0,556,  0,550,  0,157,157,157],
    [157,551,157,157,157, 28,157, 27,157,540,157,454,157],
    [ 92,  0,  0,  0,552,  0,157, 33,157,  0,157, 21, 28],
    [157, 81,157, 30,157, 81,157,157,157, 34,157,157,551],
    [157,536,157,  0,157, 33,157, 28, 81,  0,  0, 27,  0],
    [ 29,  0,157,550,157, 27,157,  0,157,157,552,157,157],
    [157, 28,540,  0,540,  0, 81,549,157, 27,  0,157, 33],
    [157, 81,157,557,157,157,157,  0,157,454, 29,540,  0],
    [ 33, 27,157,  0,157, 33,540, 34,157,157,157,157, 28],
    [ 30,  0,541,  0,541,  0, 81,  0,557,  0, 27,552,  0],
    [551,157,157,556,157, 28,157, 27,157,549,  0,157,536],
    [  0, 27,540,  0,157,  0,556,  0,157,157, 93,157,157]
],
    "bgmap": [

],
    "fgmap": [

]
}
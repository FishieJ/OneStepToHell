main.floors.MT109=
{
    "floorId": "MT109",
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
        "6,0": {
            "floorId": "MT110",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "0,9": {
            "floorId": "MT108",
            "loc": [
                12,
                9
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [ 21, 28,549,157,157,157, 91,157,157,349,352,351,157],
    [ 27,547,157,456,157,546,  0, 33, 81,541,  0,541,157],
    [157, 29,  0, 82, 27,  0,157,546,157,157,553,157,157],
    [157,  0, 28,157,  0,157, 28,  0,  0,541,  0,541,157],
    [157, 81,551,157,542,157,157,157,157,157, 27,157,157],
    [157,  0, 33,157, 27,  0,553,  0, 27,157,  0, 30,157],
    [ 27,547,157,157,157,157,157,546,157,157,157,546,157],
    [157,  0,157,542,157,  0,454,  0, 81,  0, 28,  0,157],
    [157, 30, 81, 27,157,541,157, 81,157,157,542,157,157],
    [ 92,  0,157,  0,547,536,157,536,349,157,  0, 27,157],
    [157,551,157, 30,157,541,157, 22,350,157,157,546,157],
    [157,454,553,  0, 81,  0,157,157,249,157,549,  0,157],
    [157,157, 28,157,157, 27,  0,546,  0, 81, 28,157,157]
],
    "bgmap": [

],
    "fgmap": [

]
}
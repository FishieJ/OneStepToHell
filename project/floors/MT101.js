main.floors.MT101=
{
    "floorId": "MT101",
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
        "dawn.jpg",
        false
    ],
    "item_ratio": 1,
    "defaultGround": "white",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        "\t[hero]已经破晓了吗……",
        "\t[hero]熙枫，挺住，我一定会让你醒来的！"
    ],
    "eachArrive": [],
    "parallelDo": "// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，辣鸡作者只不过是把竖向移动改成了横向移动\nif (core.getFlag('morning', 0)) {\n\tvar lastTime = core.getFlag('lastWeatherTime', 0);\n\t// 每多少毫秒重绘一次；天气效果默认都是30\n\tif (timestamp - lastTime > 60) {\n\t\tcore.clearMap('weather'); // 清空天气层\n\t\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\t\tvar image = core.material.images.images['morning.jpg']; // 获得图片，这里写图片名\n\t\tvar width = image.width,\n\t\t\theight = image.height; // 获得宽高\n\t\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\t\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t\t// 尾部\n\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t\t// 首部\n\t\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t\t} else { // 不需要，直接绘制\n\t\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);\n\t\t}\n\t\t// 移动图片\n\t\tlastOffsetX -= 1; // 这里是每次移动的像素\n\t\tif (lastOffsetX < 0) lastOffsetX += height;\n\t\tcore.setFlag('lastOffsetX', lastOffsetX);\n\t\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n\t}\n}",
    "events": {},
    "changeFloor": {
        "6,9": {
            "floorId": "MT102",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [563,242,243,567,571,568,564,570,569,565,550,552,556],
    [555,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,157,157,157,157,157,157,  0,157,157,  0,  0,  0],
    [  0,157,  0,  0,  0,  0,157,  0,  0,157,157,  0,550],
    [  0,157,  0,  0,  0,  0,157,  0,  0,  0,157,  0,550],
    [  0,  0,  0,157,157,  0,  0,  0,  0,157,157,  0,550],
    [  0,  0,  0,157,157,  0,  0,  0,  0,157,  0,  0,550],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,157,  0,  0,550],
    [  0,  0,  0,  0,  0,  0, 94,  0,  0,157,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "7-9.mp3",
    "weather": [
        "fog",
        5
    ]
}
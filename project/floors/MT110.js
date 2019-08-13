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
    "parallelDo": "// 辣鸡作者：这个脚本是小艾写的，出自于《梦》，辣鸡作者只不过是把竖向移动改成了横向移动\nvar lastTime = core.getFlag('lastWeatherTime', 0);\n// 每多少毫秒重绘一次；天气效果默认都是30\nif (timestamp - lastTime > 60) {\n\tcore.clearMap('weather'); // 清空天气层\n\tvar lastOffsetX = core.getFlag('lastOffsetX', 0); // 上次的offset\n\tvar image = core.material.images.images['morning.jpg']; // 获得图片，这里写图片名\n\tvar width = image.width,\n\t\theight = image.height; // 获得宽高\n\t// 绘制下一次，参见drawImage的API：http://www.w3school.com.cn/tags/canvas_drawimage.asp\n\tif (lastOffsetX + 416 > width) { // 需要首尾相接\n\t\t// 尾部\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width - lastOffsetX, height, 0, 0, width - lastOffsetX, height);\n\t\t// 首部\n\t\tcore.canvas.bg.drawImage(image, 0, 0, lastOffsetX + 416 - width, height, width - lastOffsetX, 0, lastOffsetX + 416 - width, height);\n\t} else { // 不需要，直接绘制\n\t\tcore.canvas.bg.drawImage(image, lastOffsetX, 0, width, 416, 0, 0, width, 416);\n\t}\n\t// 移动图片\n\tlastOffsetX -= 1; // 这里是每次移动的像素\n\tif (lastOffsetX < 0) lastOffsetX += height;\n\tcore.setFlag('lastOffsetX', lastOffsetX);\n\tcore.setFlag('lastWeatherTime', timestamp); // 记录时间\n}",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT101\", \"MT102\", \"MT103\", \"MT104\", \"MT105\", \"MT106\", \"MT107\", \"MT108\", \"MT109\", \"MT110\"]);\n}"
            },
            {
                "type": "if",
                "condition": "flag:remainMonsterCount>0",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余怪物：${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！",
                    "\t[hero]很好，见过我的生物都\r[red]死了\r……接下来，就是杀入伯力圣殿了！",
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ],
        "6,0": [
            {
                "type": "insert",
                "loc": [
                    3,
                    0
                ],
                "floorId": "EventMap"
            },
            {
                "type": "changeFloor",
                "floorId": "MT111",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 2000
            }
        ],
        "6,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[伯力狂热者,E544]伯力之神，赐我力量！",
                {
                    "type": "battle",
                    "loc": [
                        6,
                        2
                    ]
                },
                {
                    "type": "hide",
                    "time": 0
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT109",
            "loc": [
                6,
                0
            ],
            "time": 0
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
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero]什么伯力之神，我看这力量完全是他自己的。",
            "\t[hero]前方就是\r[yellow]伯力圣殿\r[white]了……隐隐间能感到里面传来的强大气息。",
            "\t[hero]不论如何，既然如今我还有着法则碎片的力量，那么为了保守这个秘密，也是为了确保计划成功……\r[red]就让所有见过我的生物，都化为我的力量吧！\r"
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
    [541,157,157,157,556,157, 82,157,556,157,157,157,541],
    [  0,536,  0, 27,  0,554,  0,554,  0, 27,  0,536,  0],
    [541,157,157,157,157,157,  0,157,157,157,157,157,541],
    [ 27, 21,157,536, 21,157, 22,157, 21,536,157, 21, 27],
    [157,454, 82, 21,536,157,  0,157,536, 21, 82,454,157],
    [157,157,157,157,157,157, 93,157,157,157,157,157,157]
],
    "bgmap": [

],
    "fgmap": [

]
}
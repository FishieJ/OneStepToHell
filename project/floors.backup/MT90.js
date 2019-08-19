main.floors.MT90=
{
    "floorId": "MT90",
    "title": "白骨山洞",
    "name": "白骨山洞",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 100,
    "defaultGround": "soil",
    "bgm": "3-5.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.setFlag('bgLight', [\n\t[176, 368, 200],\n\t[240, 368, 200]\n]);\ncore.drawMap();\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT89",
            "loc": [
                6,
                2
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "6,4": [
            {
                "type": "openDoor",
                "loc": [
                    5,
                    3
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    3
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "fg",
                "number": "X80000",
                "loc": [
                    9,
                    0
                ],
                "floorId": "Chap3_m"
            }
        ]
    },
    "afterGetItem": {
        "6,3": [
            {
                "type": "if",
                "condition": "core.itemCount('redKey') == 1",
                "true": [
                    "\t[hero]红色的钥匙？",
                    "\t[熙枫,heroine]应该是两大宗派有意放置在这些强大的怪物身后的，红色的钥匙是实力的证明，只有足够强大者，才能凭借它们进入\r[yellow]月光大道\r[white]去突破血海境界。",
                    "\t[hero]那什么月光大道，里面的怪物都很强吧？",
                    "\t[熙枫,heroine]毕竟是专门给红海巅峰准备的修炼场所。现在还没必要急着去那里，先把其他地方的怪物都清理了再去吧。"
                ],
                "false": []
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17,380,359,360,357, 85, 23, 85,357,360,359, 22, 17],
    [ 17, 82,320,358,457,320,435,320,457,358,320, 82, 17],
    [ 17,489,320,320,320,320,  0,320,320,320,320,490, 17],
    [ 17,  0,353, 81,454, 81,355, 81,454, 81,354,  0, 17],
    [ 17,320,436,320,354,320,488,320,353,320,436,320, 17],
    [ 17,  0,455,320,238,320, 81,320,238,320,455,  0, 17],
    [ 17,354,320,320,  0,320, 81,320,  0,320,320,353, 17],
    [ 17,472,320,  0,437,356,  0,356,437,  0,320,472, 17],
    [ 17,  0,353,454,320,  0,  0,  0,320,454,354,  0, 17],
    [ 17, 17, 17, 17, 17, 17, 93, 17, 17, 17, 17, 17, 17]
],
    "bgmap": [
    [80044,80081,80081,80081,80081,80081,80081,80081,80081,80081,80081,80081,80043],
    [80042,80057,80057,80057,80057,80057,80057,80057,80057,80057,80057,80057,80040],
    [80042,80065,80065,80065,80065,80065,80065,80065,80065,80065,80065,80065,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [80042,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80040],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,80021,  0,80021,  0,  0,  0,  0,  0],
    [80036,80033,80033,80033,80033,80033,80083,80033,80033,80033,80033,80033,80035]
],
    "color": [
        0,
        0,
        0,
        0.7
    ]
}
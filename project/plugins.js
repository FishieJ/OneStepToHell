var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {
	// 可以写一些直接执行的代码
	// 在这里写的代码将会在【资源加载前】被执行，此时图片等资源尚未被加载。
	// 请勿在这里对包括bgm，图片等资源进行操作。


	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行
		// 可以在这个函数里面对资源进行一些操作，比如切分图片等。

		// 这是一个将assets.png拆分成若干个32x32像素的小图片并保存的样例。
		// var arr = core.splitImage("assets.png", 32, 32);
		// for (var i = 0; i < arr.length; i++) {
		//     core.material.images.images["asset"+i+".png"] = arr[i];
		// }

	};

	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为 core.plugin.xxx();
	// 从V2.6开始，插件中用this.XXX方式定义的函数也会被转发到core中，详见文档-脚本-函数的转发。

	// 主角境界文字颜色
	core.utils.setStatusBarInnerHTML = function (name, value, css) {
		if (!core.statusBar[name]) return;
		if (typeof value == 'number') value = this.formatBigNumber(value);
		// 判定是否斜体
		var italic = /^[-a-zA-Z0-9`~!@#$%^&*()_=+\[{\]}\\|;:'",<.>\/?]*$/.test(value);
		var style = 'font-style: ' + (italic ? 'italic' : 'normal') + '; ';
		// 判定是否需要缩放
		var length = this.strlen(value) || 1;
		style += 'font-size: ' + Math.min(1, 7 / length) + 'em; ';
		if (name == 'lv') {
			style += 'font-family: "黑体";';

			if (value == '萌新五段' || value == '萌新六段' || value == '萌新七段') {
				style += 'color: #56dc56;';
			} else if (value == '萌新八段' || value == '萌新九段' ||
				value == '蓝海一阶' || value == '蓝海二阶') {
				style += 'color: #6b68ff;';
			} else if (value == '蓝海三阶' || value == '蓝海四阶' ||
				value == '蓝海五阶' || value == '蓝海六阶' ||
				value == '蓝海七阶' || value == '蓝海八阶' ||
				value == '蓝海九阶' || value == '蓝海巅峰') {
				style += 'color: #b343e2;';
			} else if (value == '红海低阶' || value == '红海中阶' ||
				value == '红海高阶' || value == '红海巅峰' ||
				value == '半步血海') {
				style += 'color: #ff8be0;';
			} else if (value == '血海初成' || value == '血海大成' ||
				value == '血海圆满') {
				style += 'color: #ff4040;';
			}
		}
		if (css) style += css;
		core.statusBar[name].innerHTML = "<span class='_status' style='" + style + "'>" + value + "</span>";
	};

	// 夹爆动画效果
	core.control.checkBlock = function () {
		var x = core.getHeroLoc('x'),
			y = core.getHeroLoc('y'),
			loc = x + "," + y;
		var damage = core.status.checkBlock.damage[loc];
		if (damage) {
			core.status.hero.hp -= damage;
			core.drawTip("受到" + (core.status.checkBlock.type[loc] || "伤害") + damage + "点");
			if (core.status.hero.hp == 1) {
				core.drawAnimate("explosion", x, y);
			} else {
				core.drawAnimate("zone", x, y);
			}
			this._checkBlock_disableQuickShop();
			core.status.hero.statistics.extraDamage += damage;
			if (core.status.hero.hp <= 0) {
				core.status.hero.hp = 0;
				core.updateStatusBar();
				core.events.lose();
				return;
			}
		}
		this._checkBlock_snipe(core.status.checkBlock.snipe[loc]);
		this._checkBlock_ambush(core.status.checkBlock.ambush[loc]);
	};

	// 怪物伤害相同时按经验排序而非金钱
	core.enemys._getCurrentEnemys_sort = function (enemys) {
		return enemys.sort(function (a, b) {
			if (a.damage == b.damage) {
				return a.experience - b.experience;
			}
			if (a.damage == null) {
				return 1;
			}
			if (b.damage == null) {
				return -1;
			}
			return a.damage - b.damage;
		});
	};
},
    "drawLight": function () {

	// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
	// 【参数说明】
	// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
	// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
	// lights：可选，一个数组，定义了每个独立的灯光。
	//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
	// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
	//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
	// 【调用样例】
	// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
	// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
	// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
	// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
	// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，且40%后才开始衰减。
	this.drawLight = function (name, color, lights, lightDec) {

		// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
		var ctx = core.getContextByName(name);
		if (ctx == null) {
			if (typeof name == 'string')
				ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 98);
			else return;
		}

		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		core.clearMap(name);
		// 绘制色调层，默认不透明度
		if (color == null) color = 0.9;
		ctx.fillStyle = "rgba(0,0,0," + color + ")";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		lightDec = core.clamp(lightDec, 0, 1);

		// 绘制每个灯光效果
		ctx.globalCompositeOperation = 'destination-out';
		lights.forEach(function (light) {
			// 坐标，半径，中心不透明度
			var x = light[0],
				y = light[1],
				r = light[2];
			// 计算衰减距离
			var decDistance = parseInt(r * lightDec);
			// 正方形区域的直径和左上角坐标
			var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
			grd.addColorStop(0, "rgba(0,0,0,1)");
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x, y, r, 0, 2 * Math.PI);
			ctx.fill();
		});
		ctx.globalCompositeOperation = 'source-over';
		// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
	}
},
    "drawHero": function () {
	core.control.drawHero = function (status, offset) {
		if (!core.isPlaying() || !core.status.floorId || core.status.gameOver) return;
		var x = core.getHeroLoc('x'),
			y = core.getHeroLoc('y'),
			direction = core.getHeroLoc('direction');
		status = status || 'stop';
		offset = offset || 0;
		var way = core.utils.scan[direction];
		var dx = way.x,
			dy = way.y,
			offsetX = dx * offset,
			offsetY = dy * offset;
		core.bigmap.offsetX = core.clamp((x - core.__HALF_SIZE__) * 32 + offsetX, 0, 32 * core.bigmap.width - core.__PIXELS__);
		core.bigmap.offsetY = core.clamp((y - core.__HALF_SIZE__) * 32 + offsetY, 0, 32 * core.bigmap.height - core.__PIXELS__);
		core.clearAutomaticRouteNode(x + dx, y + dy);
		core.clearMap('hero');

		var bgLight = core.getFlag('bgLight', []);
		var darkRatio = core.getFlag('darkRatio', 0);
		var heroLight = core.getFlag('heroLight', 0);
		var lightRadius = core.getFlag('lightRadius', 0);
		this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
			core.drawImage('hero', block.img, block.heroIcon[block.status] * block.width,
				block.heroIcon.loc * block.height, block.width, block.height,
				block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
			if (heroLight) {
				bgLight.push([block.posx + 16, block.posy + 32 - block.height + 16, lightRadius]);
				core.plugin.drawLight("curtain", darkRatio, bgLight);
				bgLight.pop();
			}
		});

		core.control.updateViewport();
	};

},
    "setBgLight": function () {
	this.setBgLight = function (lightList) {
		core.setFlag('bgLight', lightList != null ? lightList : []);
		core.drawMap();
	};
},
    "specialColor": function () {
	// 怪物手册文字颜色
	core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
		// 绘制第一行
		core.setTextAlign('ui', 'left');
		var b13 = this._buildFont(13, true),
			f13 = this._buildFont(13, false);
		var col1 = left,
			col2 = left + width * 9 / 25,
			col3 = left + width * 17 / 25;
		core.fillText('ui', '生命', col1, position, '#A0F753', f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, null, b13);
		core.fillText('ui', '攻', col2, position, '#FF5555', f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 15, position, null, b13);
		core.fillText('ui', '防', col3, position, '#45D1E0', f13);
		core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 15, position, null, b13);
	};

	// 怪物境界文字颜色
	core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
		// 绘制第零列（名称和特殊属性）
		// 如果需要添加自己的比如怪物的称号等，也可以在这里绘制
		core.setTextAlign('ui', 'center');
		var color = '#DDDDDD';
		var value = enemy.level;
		if (value == '萌新五段' || value == '萌新六段' || value == '萌新七段') {
			color = '#56dc56';
		} else if (value == '萌新八段' || value == '萌新九段' ||
			value == '蓝海一阶' || value == '蓝海二阶') {
			color = '#6b68ff';
		} else if (value == '蓝海三阶' || value == '蓝海四阶' ||
			value == '蓝海五阶' || value == '蓝海六阶' ||
			value == '蓝海七阶' || value == '蓝海八阶' ||
			value == '蓝海九阶' || value == '蓝海巅峰') {
			color = '#b343e2';
		} else if (value == '红海低阶' || value == '红海中阶' ||
			value == '红海高阶' || value == '红海巅峰' ||
			value == '半步血海') {
			color = '#ff8be0';
		} else if (value == '血海初成' || value == '血海大成' ||
			value == '血海圆满' || value == '血海王者') {
			color = '#ff4040';
		}

		var getColorByName = function (specialName) {
			var allSpecialList = core.enemys.getSpecials();
			for (var tmp = 0; tmp < allSpecialList.length; tmp++) {
				var cur = allSpecialList[tmp];
				// 若属性名称是函数，获取返回值
				if (typeof (function () {}) == typeof (cur[1])) {
					cur[1] = cur[1](enemy);
				}
				if (specialName == cur[1]) {
					if (cur.length > 3) // 定义了该特技的颜色
						return cur[3];
					else // 默认颜色
						return '#FF6A6A';
				}
			}
			return '#FF6A6A';
		};

		if (enemy.specialText == '') {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 27, '#DDDDDD', this._buildFont(17, true));
			core.fillText('ui', enemy.level, left + width / 2,
				top + 51, color, this._buildFont(14, true));
		} else {
			core.fillText('ui', enemy.name, left + width / 2,
				top + 20, '#DDDDDD', this._buildFont(17, true));
			var zzz = enemy.specialText.indexOf(' ');
			if (zzz == -1) {
				core.fillText('ui', enemy.specialText, left + width / 2,
					top + 38, getColorByName(enemy.specialText), this._buildFont(14, true));
			} else {
				var spec1 = enemy.specialText.substr(0, zzz);
				var spec2 = enemy.specialText.substr(zzz + 2);
				core.fillText('ui', spec1, left + width / 4,
					top + 38, getColorByName(spec1), this._buildFont(14, true));
				core.fillText('ui', spec2, left + width * 7 / 10,
					top + 38, getColorByName(spec2), this._buildFont(14, true));
			}
			core.fillText('ui', enemy.level, left + width / 2,
				top + 56, color, this._buildFont(14, true));
		}
	};

	core.ui.drawBookDetail = function (index) {
		var info = this._drawBookDetail_getInfo(index),
			enemy = info[0];
		if (!enemy) return;

		// 获取怪物特技颜色
		var enemySpecialList = info[0].special;
		// 如果只有一个特技会只返回一个数字，所以要转换成array
		if (typeof (enemySpecialList) == typeof (1)) {
			enemySpecialList = [enemySpecialList];
		}
		var allSpecialList = core.enemys.getSpecials();
		var colorList = [];
		var p = 0;
		for (var tmp = 0; tmp < allSpecialList.length; tmp++) {
			var cur = allSpecialList[tmp];
			if (enemySpecialList[p] == cur[0]) {
				if (cur.length > 3) // 定义了该特技的颜色
					colorList.push(allSpecialList[tmp][3]);
				else // 默认颜色
					colorList.push('#FF6A6A');
				p++;
			}
		}

		var content = info[1].join("\n");
		core.status.event.id = 'book-detail';
		clearInterval(core.interval.tipAnimate);
		core.clearMap('data');

		var left = 10,
			width = this.PIXEL - 2 * left,
			right = left + width;
		var content_left = left + 25,
			validWidth = right - content_left - 13;
		var contents = core.splitLines("data", content, validWidth, this._buildFont(16, false));
		var height = Math.max(24 * contents.length + 55, 80),
			top = (this.PIXEL - height) / 2,
			bottom = top + height;

		core.setAlpha('data', 0.9);
		core.fillRect('data', left, top, width, height, '#000000');
		core.setAlpha('data', 1);
		core.strokeRect('data', left - 1, top - 1, width + 1, height + 1,
			core.status.globalAttribute.borderColor, 2);

		this._drawBookDetail_drawContent(enemy, contents, { top: top, content_left: content_left, bottom: bottom }, colorList);
	};

	//  在原函数的基础上只是多传了个colorList，按顺序存储特技名称要显示的颜色
	core.ui._drawBookDetail_drawContent = function (enemy, contents, pos, colorList) {
		// 名称
		core.setTextAlign('data', 'left');
		core.fillText('data', enemy.name, pos.content_left, pos.top + 30, '#FFD700', this._buildFont(22, true));
		var content_top = pos.top + 57;

		var specialCount = 0;
		for (var i = 0; i < contents.length; i++) {
			var text = contents[i];
			var index = text.indexOf("：");
			if (index >= 0) {
				var x1 = text.substring(0, index + 1);
				var specialColor = '';
				if (specialCount < colorList.length)
					specialColor = colorList[specialCount];
				else
					specialColor = '#FF6A6A';
				core.fillText('data', x1, pos.content_left, content_top, specialColor, this._buildFont(16, true));
				var len = core.calWidth('data', x1);
				core.fillText('data', text.substring(index + 1), pos.content_left + len, content_top, '#FFFFFF', this._buildFont(16, false));
				specialCount++;
			} else {
				core.fillText('data', contents[i], pos.content_left, content_top, '#FFFFFF', this._buildFont(16, false));
			}
			content_top += 24;
		}
	};

	// 血怨等属性伤害提示
	core.ui._drawBook_drawDamage = function (index, enemy, offset, position) {
		core.setTextAlign('ui', 'center');
		var damage = enemy.damage,
			color = '#FFFF00';
		if (damage == null) {
			damage = '无法战斗';
			color = '#FF0000';
		} else {
			if (damage >= core.status.hero.hp) color = '#FF0000';
			if (damage <= 0) color = '#00FF00';
			damage = core.formatBigNumber(damage);
			if (core.enemys.hasSpecial(enemy, 124) || core.enemys.hasSpecial(enemy, 19)) damage += "+";
			if (core.enemys.hasSpecial(enemy, 126) || core.enemys.hasSpecial(enemy, 127)) damage += "-";
			if (core.enemys.hasSpecial(enemy, 11)) damage += "^";
			if (core.enemys.hasSpecial(enemy, 122)) damage += "*";
			if (core.enemys.hasSpecial(enemy, 14) || core.enemys.hasSpecial(enemy, 109)) damage += "~";
		}
		if (enemy.notBomb) damage += "[b]";
		core.fillText('ui', damage, offset, position, color, this._buildFont(13, true));
	};
	core.enemys.getDamageString = function (enemy, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		var damage = this.getDamage(enemy, x, y, floorId);

		var color = '#000000';

		if (damage == null) {
			damage = "???";
			color = '#FF0000';
		} else {
			if (damage <= 0) color = '#00FF00';
			else if (damage < core.status.hero.hp / 3) color = '#FFFFFF';
			else if (damage < core.status.hero.hp * 2 / 3) color = '#FFFF00';
			else if (damage < core.status.hero.hp) color = '#FF7F00';
			else color = '#FF0000';

			damage = core.formatBigNumber(damage, true);
			if (core.enemys.hasSpecial(enemy, 124) || core.enemys.hasSpecial(enemy, 19)) damage += "+";
			if (core.enemys.hasSpecial(enemy, 126) || core.enemys.hasSpecial(enemy, 127)) damage += "-";
			if (core.enemys.hasSpecial(enemy, 11)) damage += "^";
			if (core.enemys.hasSpecial(enemy, 122)) damage += "*";
			if (core.enemys.hasSpecial(enemy, 14) || core.enemys.hasSpecial(enemy, 109)) damage += "~";
		}

		return {
			"damage": damage,
			"color": color
		};
	};

	// 临界表只显示下5个临界而不是10个
	core.ui._drawBookDetail_turnAndCriticals = function (enemy, floorId, texts) {
		var damageInfo = core.getDamageInfo(enemy, null, null, null, floorId);
		texts.push("战斗回合数：" + ((damageInfo || {}).turn || 0));
		// 临界表
		var criticals = core.enemys.nextCriticals(enemy, 5, null, null, floorId).map(function (v) {
			return core.formatBigNumber(v[0]) + ":" + core.formatBigNumber(v[1]);
		});
		while (criticals[0] == '0:0') criticals.shift();
		texts.push("临界表：" + JSON.stringify(criticals));
	};
}
}
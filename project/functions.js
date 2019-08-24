var functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a = 
{
    "events": {
        "resetGame": function (hero, hard, floorId, maps, values) {
	// 重置整个游戏；此函数将在游戏开始时，或者每次读档时最先被调用
	// hero：勇士信息；hard：难度；floorId：当前楼层ID；maps：地图信息；values：全局数值信息

	// 清除游戏数据
	// 这一步会清空状态栏和全部画布内容，并删除所有动态创建的画布
	core.clearStatus();
	// 初始化status
	core.status = core.clone(core.initStatus, function (name) {
		return name != 'hero' && name != 'maps';
	});
	core.status.played = true;
	// 初始化人物，图标，统计信息
	core.status.hero = core.clone(hero);
	core.events.setHeroIcon(core.getFlag('heroIcon', 'hero.png'), true);
	core.control._initStatistics(core.animateFrame.totalTime);
	core.status.hero.statistics.totalTime = core.animateFrame.totalTime =
		Math.max(core.status.hero.statistics.totalTime, core.animateFrame.totalTime);
	core.status.hero.statistics.start = null;
	// 初始难度
	core.status.hard = hard || "";
	// 初始化地图
	core.status.floorId = floorId;
	core.status.maps = maps;
	// 初始化怪物和道具
	core.material.enemys = core.enemys.getEnemys();
	core.material.items = core.items.getItems();
	core.items._resetItems();
	// 初始化全局数值和全局开关
	core.values = core.clone(core.data.values);
	for (var key in values || {})
		core.values[key] = values[key];
	core.flags = core.clone(core.data.flags);
	var globalFlags = core.getFlag("globalFlags", {});
	for (var key in globalFlags)
		core.flags[key] = globalFlags[key];
	core._init_sys_flags();
	// 初始化界面，状态栏等
	core.resize();
	core.updateGlobalAttribute();
	// 状态栏是否显示
	if (core.hasFlag('hideStatusBar'))
		core.hideStatusBar(core.hasFlag('showToolbox'));
	else
		core.showStatusBar();
	// 隐藏右下角的音乐按钮
	core.dom.musicBtn.style.display = 'none';
},
        "setInitData": function () {
	// 不同难度分别设置初始属性
	if (core.status.hard == 'Blind') { // 简单难度
		core.setFlag('hard', 1); // 可以用flag:hard来获得当前难度
		core.setItem("I_hard_1", 1);
		// 可以在此设置一些初始福利，比如设置初始生命值可以调用：
		// core.setStatus("hp", 10000);
		// 赠送一把黄钥匙可以调用
		// core.setItem("yellowKey", 1);
	}
	if (core.status.hard == 'Easy') { // 普通难度
		core.setFlag('hard', 2); // 可以用flag:hard来获得当前难度
		core.setItem("I_hard_2", 1);
	}
	if (core.status.hard == 'Hard') { // 困难难度
		core.setFlag('hard', 3); // 可以用flag:hard来获得当前难度
	}

	// 设置已经到过的楼层
	core.setFlag("__visited__", {});

	core.updateEnemys();
},
        "win": function (reason, norank) {
	// 游戏获胜事件 
	core.ui.closePanel();
	var replaying = core.isReplaying();
	if (replaying) core.stopReplay();
	core.waitHeroToStop(function () {
		core.clearMap('all'); // 清空全地图
		core.deleteAllCanvas(); // 删除所有创建的画布
		core.dom.gif2.innerHTML = "";
		// 请注意：
		// 成绩统计时是按照hp进行上传并排名，因此光在这里改${status:hp}是无效的
		// 如需按照其他的的分数统计方式，请先将hp设置为你的得分
		var total = core.status.hero.hp + core.getFlag('hp_score', 0);
		var str = "正在统计分数……\n溢出生命和剩余生命值共" + total + "点，转化为等量分数\n";
		if (reason == "蓝海王中王") {
			total += 100000 * core.itemCount('yellowKey');
			str += core.itemCount('yellowKey') + "把黄钥匙，共" + 100000 * core.itemCount('yellowKey') + "分\n";
		} else if (reason == "红海王中王") {
			total += 1000000 * core.itemCount('yellowKey') + 4000000 * core.itemCount('blueKey');
			str += core.itemCount('yellowKey') + "把黄钥匙，共" + 1000000 * core.itemCount('yellowKey') + "分\n";
			str += core.itemCount('blueKey') + "把蓝钥匙，共" + 4000000 * core.itemCount('blueKey') + "分\n";
			total += 2500 * core.itemCount('coin') + 1000000 * core.itemCount('talentPoint') * core.itemCount('talentPoint');
			str += core.itemCount('coin') + "金币，共" + 2500 * core.itemCount('coin') + "分\n";
			str += core.itemCount('talentPoint') + "剩余天赋点，共" + 1000000 * core.itemCount('talentPoint') * core.itemCount('talentPoint') + "分\n";
		}
		str += "总计分数：" + total;
		core.setStatus('hpmax', -1);
		core.setStatus('hp', total);
		if (reason == "血海王中王") {
			core.drawText(["\t[技不如人，如沐东风,I342]您好，这里是本游戏的作者。",
				"\t[技不如人，如沐东风,I342]恭喜您在最高难度下取得了不亚于作者的成绩，请容辣鸡作者膜拜一下大佬。大佬如果有任何想法，不论话本身好听与否，辣鸡作者都希望您在评论区分享一下。辣鸡作者以后不会再造塔了，所以请不要给我留面子，您的意见很可能会对其他造塔者有很大帮助，相信我们有着共同的目的——以后能有更多高质量塔出现。",
				"\t[技不如人，如沐东风,I342]感谢您玩到这里。",
				str,
				"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
			], function () {
				core.events.gameOver(reason || '', replaying, norank);
			});
		} else if (reason == "伯力征服者" && core.getFlag('hard', 0) == 3) {
			core.drawText([
				"\t[系统提示]恭喜您已通关最高难度。到这里相信您已经体会到，这个塔虽然初看上去比较恐怖，其实难度并不大。欢迎您到评论区发表看法。另外，如果您在最高难度的每个章节都打出不亚于作者的成绩，榜单会单独列出。",
				"\t[系统提示]单独列出榜单的条件：\n萌新篇：回到莫家之前溢出生命值大于1500\n蓝海篇：踏入传送阵时溢出生命值大于17万，满血满蓝，黄钥匙至少6把\n红海篇：损失少于10万血击破大阵\n血海篇：击败孔阳后当前生命+溢出生命大于3.65亿",
				str,
				"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
			], function () {
				core.events.gameOver(reason || '', replaying, norank);
			});

		} else {
			core.drawText([
				str,
				"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
			], function () {
				core.events.gameOver(reason || '', replaying, norank);
			});
		}
	});
},
        "lose": function (reason) {
	// 游戏失败事件
	core.ui.closePanel();
	var replaying = core.isReplaying();
	core.stopReplay();
	core.waitHeroToStop(function () {
		core.drawText([
			"\t[" + (reason || "暴毙") + "]你去世了。\n如题。"
		], function () {
			core.events.gameOver(null, replaying);
		});
	})
},
        "changingFloor": function (floorId, heroLoc, fromLoad) {
	// 正在切换楼层过程中执行的操作；此函数的执行时间是“屏幕完全变黑“的那一刻
	// floorId为要切换到的楼层ID；heroLoc表示勇士切换到的位置；fromLoad表示是否是从读档造成的切换

	// ---------- 此时还没有进行切换，当前floorId还是原来的 ---------- //
	var currentId = core.status.floorId || null; // 获得当前的floorId，可能为null
	// 可以对currentId进行判定，比如删除某些自定义图层等
	// if (currentId == 'MT0') {
	//     core.deleteAllCanvas();
	// }

	// 重置画布尺寸
	core.maps.resizeMap(floorId);
	// 检查重生怪并重置
	if (!fromLoad) {
		core.status.maps[floorId].blocks.forEach(function (block) {
			if (block.disable && core.enemys.hasSpecial(block.event.id, 23)) {
				block.disable = false;
			}
		});
	}
	// 设置勇士的位置
	core.status.hero.loc = heroLoc;
	core.control.gatherFollowers();

	// ---------- 重绘新地图；这一步将会设置core.status.floorId ---------- //
	core.drawMap(floorId);

	// 切换楼层BGM
	if (core.status.maps[floorId].bgm) {
		var bgm = core.status.maps[floorId].bgm;
		if (bgm instanceof Array) bgm = bgm[0];
		core.playBgm(bgm);
	}
	// 更改画面色调
	var color = core.getFlag('__color__', null);
	if (!color && core.status.maps[floorId].color)
		color = core.status.maps[floorId].color;
	core.clearMap('curtain');
	core.status.curtainColor = color;
	if (color) core.fillRect('curtain', 0, 0, core.__PIXELS__, core.__PIXELS__, core.arrayToRGBA(color));
	// 更改天气
	var weather = core.getFlag('__weather__', null);
	if (!weather && core.status.maps[floorId].weather)
		weather = core.status.maps[floorId].weather;
	if (weather)
		core.setWeather(weather[0], weather[1]);
	else core.setWeather();

	// ...可以新增一些其他内容，比如创建个画布在右上角显示什么内容等等

},
        "afterChangeFloor": function (floorId, fromLoad) {
	// 转换楼层结束的事件；此函数会在整个楼层切换完全结束后再执行
	// floorId是切换到的楼层；fromLoad若为true则代表是从读档行为造成的楼层切换

	// 如果是读档，则进行检查（是否需要恢复事件）
	if (fromLoad) {
		core.events.recoverEvents(core.getFlag("__events__"));
		core.removeFlag("__events__");
	} else {
		// 每次抵达楼层执行的事件
		core.insertAction(core.floors[floorId].eachArrive);

		// 首次抵达楼层时执行的事件（后插入，先执行）
		if (!core.hasVisitedFloor(floorId)) {
			core.insertAction(core.floors[floorId].firstArrive);
			core.visitFloor(floorId);
		}
	}
	core.drawMap();
},
        "flyTo": function (toId, callback) {
	// 楼层传送器的使用，从当前楼层飞往toId
	// 如果不能飞行请返回false

	var fromId = core.status.floorId;

	// 检查能否飞行
	if (!core.status.maps[fromId].canFlyTo || !core.status.maps[toId].canFlyTo) {
		core.drawTip("无法飞往" + core.status.maps[toId].title + "！");
		return false;
	}

	// 获得两个楼层的索引，以决定是上楼梯还是下楼梯
	var fromIndex = core.floorIds.indexOf(fromId),
		toIndex = core.floorIds.indexOf(toId);
	var stair = fromIndex <= toIndex ? "downFloor" : "upFloor";
	// 地下层：同层传送至上楼梯
	if (fromIndex == toIndex && core.status.maps[fromId].underGround) stair = "upFloor";
	// 记录录像
	core.status.route.push("fly:" + toId);
	// 传送
	core.ui.closePanel();
	core.changeFloor(toId, stair, null, null, callback);

	return true;
},
        "beforeBattle": function (enemyId, x, y) {
	// 战斗前触发的事件，可以加上一些战前特效（详见下面支援的例子）
	// 此函数在“检测能否战斗和自动存档”【之后】执行。如果需要更早的战前事件，请在插件中覆重写 core.events.doSystemEvent 函数。
	// 返回true则将继续战斗，返回false将不再战斗。

	// ------ 支援技能 ------ //
	if (x != null && y != null) {
		var index = x + "," + y,
			cache = core.status.checkBlock.cache[index] || {},
			guards = cache.guards || [];
		// 如果存在支援怪
		if (guards.length > 0) {
			// 记录flag，当前要参与支援的怪物
			core.setFlag("__guards__" + x + "_" + y, guards);
			var actions = [];
			// 增加支援的特效动画（图块跳跃）
			guards.forEach(function (g) {
				core.push(actions, { "type": "jump", "from": [g[0], g[1]], "to": [x, y], "time": 300, "keep": false, "async": true });
			});
			core.push(actions, [
				{ "type": "waitAsync" }, // 等待所有异步事件执行完毕
				{ "type": "trigger", "loc": [x, y] } // 重要！重新触发本点事件（即重新触发战斗）
			]);
			core.insertAction(actions);
			return false;
		}
	}

	var heroAnimateName = '';
	var heroNormalAttack = 'hand';
	if (core.status.hero.lv >= 10) { // 蓝海
		heroNormalAttack = 'attack2';
	}
	if (core.status.hero.lv >= 19) { // 红海
		heroNormalAttack = 'attack3';
	}
	if (core.status.hero.lv >= 24) { // 血海
		heroNormalAttack = 'attack4';
	}

	if (core.flags.enableSkill) {
		// 检测当前开启的技能类型
		var skill = core.getFlag('skill', 0);
		if (skill == 1) { // 技能1：强击
			heroAnimateName = 'skill1';
		} else if (skill == 2) { // 技能2：防御
			heroAnimateName = 'skill2';
		} else if (skill == 4) { // 技能4：撕裂
			heroAnimateName = 'blood';
		} else if (skill == 0) { // 未开启技能
			heroAnimateName = heroNormalAttack;
		}
	} else {
		heroAnimateName = heroNormalAttack;
	}
	if (core.getFlag('morph', 0) == 1 || core.getFlag('morph_chap3', 0)) { // 变身
		if (core.getFlag('skill', 0) != 0)
			heroAnimateName = 'darkexplode';
		else
			heroAnimateName = 'morphattack';
	}

	// 技能动画
	function drawHeroAnimate(animate_name) {
		core.drawAnimate(animate_name != null ? animate_name : heroAnimateName, x != null ? x : core.getHeroLoc('x'), y != null ? y : core.getHeroLoc('y'));
	}

	function drawEnemyAnimate(animate_name, ex, ey) {
		if (animate_name == null)
			drawHeroAnimate();
		else {
			core.drawAnimate(animate_name, ex != null ? ex : core.getHeroLoc('x'), ey != null ? ey : core.getHeroLoc('y'), drawHeroAnimate);
		}
	}

	var enemy = core.material.enemys[enemyId];
	var special = enemy.special;
	if (enemyId == 'E572' || enemyId == 'E545') {
		drawEnemyAnimate('sword4');
	} else if (enemyId == 'E558') {
		drawEnemyAnimate('sword5');
	} else if (enemyId == 'E559' || enemyId == 'E560' || enemyId == 'E564') {
		drawEnemyAnimate('fire');
	} else if (enemyId == 'E561' || enemyId == 'E562') {
		drawEnemyAnimate('thunder');
	} else if (enemyId == 'darkKnight') {
		drawEnemyAnimate('dark2');
	} else if (enemyId == 'E543') {
		drawEnemyAnimate('dark');
	} else if (core.enemys.hasSpecial(special, 143)) {
		drawEnemyAnimate('purify');
	} else if (core.enemys.hasSpecial(special, 132)) {
		drawEnemyAnimate('blackmagic');
	} else if (core.enemys.hasSpecial(special, 141)) {
		drawEnemyAnimate('thunder3');
	} else if (core.enemys.hasSpecial(special, 130)) {
		drawEnemyAnimate('sword1');
	} else if (core.enemys.hasSpecial(special, 19)) {
		drawEnemyAnimate('explosion');
	} else if (core.enemys.hasSpecial(special, 21)) {
		drawEnemyAnimate('tuihua');
	} else if (core.enemys.hasSpecial(special, 130)) {
		drawEnemyAnimate('sword2');
	} else if (core.enemys.hasSpecial(special, 131)) {
		drawEnemyAnimate('omnislash');
	} else if (core.enemys.hasSpecial(special, 128)) {
		drawEnemyAnimate('dark');
	} else if (core.enemys.hasSpecial(special, 9)) {
		drawEnemyAnimate('purify');
	} else if (core.enemys.hasSpecial(special, 11)) {
		drawEnemyAnimate('blood');
	} else if (core.enemys.hasSpecial(special, 12)) {
		drawEnemyAnimate('poison');
	} else if (core.enemys.hasSpecial(special, 13)) {
		drawEnemyAnimate('weak');
	} else if (core.enemys.hasSpecial(special, 14) || core.enemys.hasSpecial(special, 109)) {
		drawEnemyAnimate('ice');
	} else if (core.enemys.hasSpecial(special, 103)) {
		drawEnemyAnimate('skill1');
	} else if (core.enemys.hasSpecial(special, 104)) {
		drawEnemyAnimate('sword3');
	} else if (core.enemys.hasSpecial(special, 108)) {
		drawEnemyAnimate('iceblast');
	} else if (core.enemys.hasSpecial(special, 110)) {
		drawEnemyAnimate('light');
	} else if (core.enemys.hasSpecial(special, 111)) {
		drawEnemyAnimate('dark');
	} else if (core.enemys.hasSpecial(special, 112)) {
		drawEnemyAnimate('xunjie');
	} else if (core.enemys.hasSpecial(special, 113)) {
		drawEnemyAnimate('xunjie', x, y);
	} else if (core.enemys.hasSpecial(special, 114)) {
		drawEnemyAnimate('xunjie', x, y);
	} else if (core.enemys.hasSpecial(special, 116)) {
		drawEnemyAnimate('xunjie');
	} else if (core.enemys.hasSpecial(special, 117)) {
		drawEnemyAnimate('heal', x, y);
	} else if (core.enemys.hasSpecial(special, 118)) {
		drawEnemyAnimate('darkattack', x, y);
	} else if (core.enemys.hasSpecial(special, 119)) {
		drawEnemyAnimate('light2');
	} else if (core.enemys.hasSpecial(special, 124)) {
		drawEnemyAnimate('explosion_small');
	} else if (core.enemys.hasSpecial(special, 126)) {
		drawEnemyAnimate('blood2');
	} else {
		drawEnemyAnimate(null);
	}

	return true;
},
        "afterBattle": function (enemyId, x, y, callback) {
	// 战斗结束后触发的事件

	var enemy = core.material.enemys[enemyId];

	/*
		// 播放战斗音效和动画
		var equipAnimate = 'hand',
			equipId = (core.status.hero.equipment || [])[0];
		if (equipId && (core.material.items[equipId].equip || {}).animate)
			equipAnimate = core.material.items[equipId].equip.animate;
		// 检查equipAnimate是否存在SE，如果不存在则使用默认音效
		if (!(core.material.animates[equipAnimate] || {}).se)
			core.playSound('attack.mp3');
		// 强制战斗的战斗动画
		core.drawAnimate(equipAnimate, x != null ? x : core.getHeroLoc('x'), y != null ? y : core.getHeroLoc('y'));
	*/

	var damage = core.enemys.getDamage(enemyId, x, y);
	if (damage == null) damage = core.status.hero.hp + 1;

	// 扣减体力值
	core.status.hero.hp -= damage;

	// 统计溢出血量
	if (core.status.hero.hp > core.getRealStatusOrDefault(core.status.hero, 'hpmax')) {
		core.insertAction({ "type": "animate", "name": "heal", "loc": "hero", "async": true });
		core.setFlag('hp_score', core.getFlag('hp_score', 0) + core.status.hero.hp - core.getRealStatusOrDefault(core.status.hero, 'hpmax'));
		core.status.hero.hp = core.getRealStatusOrDefault(core.status.hero, 'hpmax');
	}

	// 记录
	core.status.hero.statistics.battleDamage += damage;
	core.status.hero.statistics.battle++;

	if (core.status.hero.hp <= 0) {
		core.status.hero.hp = 0;
		core.updateStatusBar();
		core.events.lose('战斗失败');
		return;
	}

	// 删除该块
	var guards = []; // 支援
	if (x != null && y != null) {
		core.removeBlock(x, y);
		guards = core.getFlag("__guards__" + x + "_" + y, []);
		core.removeFlag("__guards__" + x + "_" + y);
	}

	// 获得金币和经验
	var money = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].money;
	}, enemy.money);
	if (core.hasItem('coin')) money *= 2;
	if (core.hasFlag('curse')) money = 0;
	core.status.hero.money += money;
	core.status.hero.statistics.money += money;

	var experience = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].experience;
	}, enemy.experience);
	core.status.hero.experience += experience;
	core.status.hero.statistics.experience += experience;

	var hint = "打败 " + enemy.name;
	if (core.flags.enableMoney) hint += "，金币+" + money;
	if (core.flags.enableExperience) hint += "，经验+" + experience;
	core.drawTip(hint);

	// 事件的处理
	var todo = [];

	var special = enemy.special;
	// 中毒
	if (core.enemys.hasSpecial(special, 12)) {
		//core.push(todo, [{ "type": "insert", "name": "毒衰咒处理", "args": [0] }]);
		core.setFlag('poison_stack', core.getFlag('poison_stack', 0) + enemy.poison);
	}
	// 衰弱
	// 自然减少
	if (core.getFlag('weak_stack', 0)) {
		core.setFlag('weak_stack', core.getFlag('weak_stack') - 1);
	}
	if (core.enemys.hasSpecial(special, 13)) {
		//core.push(todo, [{ "type": "insert", "name": "毒衰咒处理", "args": [1] }]);
		core.setFlag('weak_stack', core.getFlag('weak_stack', 0) + enemy.weak);
	}
	var buffVal = Math.pow(0.95, core.getFlag('weak_stack', 0));
	core.setBuff('atk', buffVal);
	core.setBuff('def', buffVal);
	// 霜寒诅咒
	if (core.enemys.hasSpecial(special, 14)) {
		//core.push(todo, [{ "type": "insert", "name": "毒衰咒处理", "args": [2] }]);
		core.setFlag('curse_stack', core.getFlag('curse_stack', 0) + enemy.n);
	}
	if (core.enemys.hasSpecial(special, 108)) {
		core.setFlag('curse_stack', 0);
	}
	// 光明/黑暗
	if (core.enemys.hasSpecial(special, 110)) {
		core.setFlag('dark', core.getFlag('dark', 0) - enemy.n);
	}
	if (core.enemys.hasSpecial(special, 111)) {
		core.setFlag('dark', core.getFlag('dark', 0) + enemy.n);
	}
	if (core.enemys.hasSpecial(special, 119)) {
		core.setFlag('dark', 0);
	}
	// 冰甲
	if (core.enemys.hasSpecial(special, 109)) {
		var last_turn = core.enemys.getDamageInfo(enemy, null, x, y).turn;
		core.setFlag('curse_stack', core.getFlag('curse_stack', 0) + last_turn);
	}

	// 仇恨属性：减半
	if (core.flags.hatredDecrease && core.enemys.hasSpecial(special, 17)) {
		core.setFlag('hatred', Math.floor(core.getFlag('hatred', 0) / 2));
	}
	if (core.getFlag('morph', 0) == 0) { // 魔化免疫血怨和自爆
		// 血怨
		if (core.enemys.hasSpecial(special, 124)) {
			core.status.hero.hp = Math.floor(core.status.hero.hp / 2);
		}
		// 自爆
		if (core.enemys.hasSpecial(special, 19)) {
			core.status.hero.hp = 1;
		}
	}
	// 退化
	if (core.enemys.hasSpecial(special, 21)) {
		core.status.hero.atk -= (enemy.atkValue || 0);
		core.status.hero.def -= (enemy.defValue || 0);
		core.status.hero.mdef -= (enemy.value || 0);
		if (core.status.hero.atk < 0) core.status.hero.atk = 0;
		if (core.status.hero.def < 0) core.status.hero.def = 0;
	}
	// 伯化
	if (core.enemys.hasSpecial(special, 133)) {
		core.addFlag('bo_hp', (enemy.bo_hp || 0));
		core.addFlag('bo_atk', (enemy.bo_atk || 0));
		core.addFlag('bo_def', (enemy.bo_def || 0));
	}
	// 增加仇恨值
	core.setFlag('hatred', core.getFlag('hatred', 0) + core.values.hatred);

	// 战后的技能处理，比如扣除魔力值
	if (core.flags.enableSkill) {
		// 检测当前开启的技能类型
		var skill = core.getFlag('skill', 0);
		if (skill == 1) { // 技能1：强击
			core.status.hero.mana -= core.getFlag('skill1_cost', 0); // 扣除魔力值
		} else if (skill == 2) { // 技能2：防御
			core.status.hero.mana -= core.getFlag('skill2_cost', 0); // 扣除魔力值
		} else if (skill == 4) { // 技能4：撕裂
			core.status.hero.mana -= core.getFlag('skill4_cost', 0); // 扣除魔力值
		}
		// 关闭技能
		core.setFlag('skill', 0);
		core.setFlag('skillName', '无');
	}

	// 自然回蓝
	core.status.hero.mana += core.getFlag('mana_regen', 0);

	// 更新冲锋相关flag
	if (core.hasItem('I_charge')) {
		core.setFlag('charge_atk', 0);
	} else if (core.hasItem('I_charge2')) {
		var charge2_battle_extra = core.getFlag('charge2_battle_extra', 0);
		if (charge2_battle_extra > 0) {
			var cur_stack = core.getFlag('charge2_battle_extra_cur', 0);
			var stack_max = core.getFlag('charge2_battle_extra_max', 0);
			var inc = Math.min(charge2_battle_extra, stack_max - cur_stack);
			core.setFlag('charge2_battle_extra_cur', cur_stack + inc);
			core.setFlag('charge_atk', core.getFlag('charge_atk') + core.status.hero.atk * core.getFlag('charge_ratio', 0.02) * inc);
		}
	}

	/*
	// 更新吸攻防的flag
	// 模仿
	if (core.hasSpecial(special, 10)) {
		enemy.atk = core.status.hero.atk;
		enemy.def = core.status.hero.def;
	}
	// 坚固
	if (core.hasSpecial(special, 3)) {
		enemy.def = core.status.hero.atk - 1;
	}
	core.setFlag('lastAtk', enemy.atk);
	core.setFlag('lastDef', enemy.def);*/
	core.updateStatusBar();

	// 隐身药水效果消失
	if (core.getFlag('invisible', 0)) {
		core.setFlag('invisible', 0);
		core.setOpacity('hero', 1);
		if (core.getFlag('hard') != 1) {
			core.setFlag('no_zone', 0);
			core.setFlag('no_snipe', 0);
			core.setFlag('no_betweenAttack', 0);
			core.setFlag('no_laser', 0);
			core.setFlag('no_ambush', 0);
		} else {
			core.setFlag('no_snipe', 0);
			core.setFlag('no_ambush', 0);
		}
		core.drawMap(); // 更新地图显伤
	}

	// 魔化
	var dur = core.getFlag('morph_duration');
	if (dur > 0) {
		dur--;
		core.setFlag('morph_duration', dur);
		if (dur == 0) {
			core.insertAction([{ "type": "insert", "loc": [12, 1], "floorId": "EventMap" }]);
		}
	}
	var cd = core.getFlag('morph_cooldown', 0);
	if (cd > 0) {
		cd--;
		core.setFlag('morph_cooldown', cd);
		if (cd == 0) {
			core.playSound('Darkness3.ogg');
			core.drawTip('【魔化】准备就绪。');
			core.getItem('I_morph_cooldown', -1);
			core.getItem('I_morph', 1);
		}
	}

	// 如果有加点
	var point = core.material.enemys[enemyId].point;
	if (core.flags.enableAddPoint && point > 0) {
		core.push(todo, [{ "type": "insert", "name": "加点事件", "args": [point] }]);
	}

	// 如果该点存在事件 -- V2.5.4 以后阻击怪也可以有战后事件了
	core.push(todo, core.floors[core.status.floorId].afterBattle[x + "," + y]);

	// 在这里增加其他的自定义事件需求
	/*
	if (enemyId=='xxx') {
		core.push(todo, [
			{"type": "...", ...},
		]);
	}
	*/

	// 如果事件不为空，将其插入
	if (todo.length > 0) core.insertAction(todo, x, y);

	// 如果已有事件正在处理中
	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();

	if (callback) callback();

},
        "afterOpenDoor": function (doorId, x, y, callback) {
	// 开一个门后触发的事件

	var todo = [];
	var event = core.floors[core.status.floorId].afterOpenDoor[x + "," + y];
	if (event) core.unshift(todo, event);

	if (todo.length > 0) core.insertAction(todo, x, y);

	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();

	if (callback) callback();
},
        "afterGetItem": function (itemId, x, y, callback) {
	// 获得一个道具后触发的事件
	if (itemId == 'I_ex_atk')
		core.playSound('005-System05.ogg');
	else if (itemId == 'I_ex_def') {

	} else if (itemId == 'I_morphed' || itemId == 'I_morph' || itemId == 'I_morph_cooldown') {

	} else
		core.playSound('item.mp3');

	var todo = [];
	var event = core.floors[core.status.floorId].afterGetItem[x + "," + y];
	if (event) core.unshift(todo, event);

	if (todo.length > 0) core.insertAction(todo, x, y);

	if (callback) callback();
},
        "afterChangeLight": function(x,y) {
	// 改变亮灯之后，可以触发的事件

},
        "afterPushBox": function () {
	// 推箱子后的事件
	if (core.searchBlock('box').length == 0) {
		// 可以通过if语句来进行开门操作
		/*
		if (core.status.floorId=='xxx') { // 在某个楼层
			core.insertAction([ // 插入一条事件
				{"type": "openDoor", "loc": [x,y]} // 开门
			])
		}
		*/
	}
},
        "afterUseBomb": function () {
	// 使用炸弹/圣锤后的事件

	// 这是一个使用炸弹也能开门的例子
	/*
	if (core.status.floorId=='xxx' && core.terrainExists(x0,y0,'specialDoor') // 某个楼层，该机关门存在
		&& !core.enemyExists(x1,y1) && !core.enemyExists(x2,y2)) // 且守门的怪物都不存在
	{
		core.insertAction([ // 插入事件
			{"type": "openDoor", "loc": [x0,y0]} // 开门
		])
	}
	*/

},
        "canUseQuickShop": function(shopId) {
	// 当前能否使用某个快捷商店
	// shopId：快捷商店ID
	// 如果返回一个字符串，表示不能，字符串为不能使用的提示
	// 返回null代表可以使用

	// 检查当前楼层的canUseQuickShop选项是否为false
	if (core.status.thisMap.canUseQuickShop === false)
		return '当前楼层不能使用快捷商店。';

	return null;
}
    },
    "enemys": {
        "getSpecials": function () {
	// 获得怪物的特殊属性，每一行定义一个特殊属性。
	// 分为三项，第一项为该特殊属性的数字，第二项为特殊属性的名字，第三项为特殊属性的描述
	// 可以直接写字符串，也可以写个function将怪物传进去
	return [
		[1, "先攻", "先发制人。怪物首先攻击。"],
		[2, "魔攻", "穿透护甲直接造成伤害。怪物无视勇士的防御。", "#b6b0ff"],
		[3, "坚固", "勇士每次普通攻击最多只能对怪物造成1点伤害。", "#b9822d"],
		[4, "2连击", "怪物每回合攻击2次"],
		[5, "3连击", "怪物每回合攻击3次"],
		[6, function (enemy) { return (enemy.n || 4) + "连击"; }, function (enemy) {
			if (enemy.n > 10)
				return "【血海奥义】天下武功，唯快不破\n怪物每回合攻击18次";
			return "怪物每回合攻击" + (enemy.n || 4) + "次";
		}],
		[7, "破甲", function (enemy) { return "侵蚀对手的护甲。首回合怪物攻击时，附加勇士防御的" + Math.floor(100 * enemy.value || 0) + "%作为伤害"; }, "#b30000"],
		[8, "反伤", function (enemy) { return "来犯之敌，自讨苦吃。勇士攻击时，攻击力的" + Math.floor(100 * enemy.value || 0) + "%也会同时伤害到自身，此伤害无视防御。"; }, "#bd26ce"],
		[9, "净化", "【红海技能】用对手的护盾反制对手\n战斗前，怪物附加勇士护盾数值的" + core.values.purify + "倍作为伤害", "#00d2d4"],
		[10, "模仿", "【红海技能】遇弱则弱，遇强则强\n怪物的攻防与勇士基础攻防相等。", "#ff00d2"],
		[11, function (enemy) { if (enemy.value >= 1) return "吸爆"; return "吸血"; }, function (enemy) {
			var str = "【红海技能】据说一些蓝海生物也能够掌握\n";
			if (enemy.value >= 1) str = "【血海奥义】吸干对手的血液\n";
			return str + "战斗开始时，怪物首先将角色的" + Math.floor(100 * enemy.value || 0) + "%当前生命（约" + Math.floor((enemy.value || 0) * core.getStatus('hp')) + "点）作为伤害" + (enemy.add ? "，并把伤害数值加到自身生命上" : "");
		}, "#ff00d2"],
		[12, "中毒", function (enemy) { return "【红海技能】战斗后，勇士陷入中毒状态，在接下来的战斗中每回合损失生命" + enemy.poison + "点，效果可叠加。"; }, "#4aff60"],
		[13, "衰弱", function (enemy) { return "【红海技能】战斗后，勇士获得" + enemy.weak + "层衰弱状态，每层使得战斗中攻防下降" + (core.values.weakValue >= 1 ? core.values.weakValue + "点" : parseInt(core.values.weakValue * 100) + "%") + "。每次战斗减少1层。"; }, "#feccd0"],
		[14, "霜寒", function (enemy) { return "怪物对敌人施加霜寒诅咒。战斗后，你获得" + enemy.n + "层霜寒状态，每层使你普通攻击造成的伤害降低1%，加法叠加。"; }, "#747dff"],
		[15, "领域", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时自动减生命" + (enemy.value || 0) + "点"; }],
		[16, "夹击", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "【红海技能】瞬间将对手打个半死\n经过两只相同的怪物中间，勇士生命值变成一半。"; }, "#ff00d2"],
		[17, "仇恨", "战斗前，怪物附加之前积累的仇恨值作为伤害" + (core.flags.hatredDecrease ? "；战斗后，释放一半的仇恨值" : "") + "。（每杀死一个怪物获得" + (core.values.hatred || 0) + "点仇恨值）"],
		[18, "阻击", function (enemy) { return "经过怪物的十字领域时自动减生命" + (enemy.value || 0) + "点，同时怪物后退一格"; }],
		[19, "自爆", "【血海奥义】同归于尽吧！\n战斗结束后，勇士的生命值变成1", "#ff0000"],
		[20, "无敌", "【？？？】无法认知的神秘力量\n勇士无法打败怪物，除非拥有[？？？]", "#fbff00"],
		[21, "退化", function (enemy) { return "【血海奥义】对敌人造成永久性不可逆的能力损伤\n战斗后勇士永久下降" + (enemy.atkValue || 0) + "点攻击，" + (enemy.defValue || 0) + "点防御，以及" + (enemy.value || 0) + "点护盾"; }, "#ff0000"],
		[22, "固伤", function (enemy) { return "【红海技能】不讲道理的生命扣除\n战斗结束前，怪物对勇士造成" + (enemy.damage || 0) + "点固定伤害，无视勇士护盾和减伤效果。"; }],
		[23, "重生", "怪物被击败后，角色转换楼层则怪物将再次出现"],
		[24, "射击", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "经过怪物同行或同列时自动减生命" + (enemy.value || 0) + "点"; }],
		[25, function (enemy) {
			if (enemy.value)
				return "活力光环";
			if (enemy.atkValue)
				return "狂暴光环";
			if (enemy.defValue)
				return "坚毅光环";
		}, function (enemy) {
			var str = "同地图所有怪物";
			if (enemy.value)
				str += "生命提升" + (enemy.value || 0) + "%，";
			if (enemy.atkValue)
				str += "攻击提升" + (enemy.atkValue || 0) + "%，";
			if (enemy.defValue)
				str += "防御提升" + (enemy.defValue || 0) + "%，";
			str += (enemy.add ? "线性叠加" : "不可叠加");
			return str;
		}, "#fff900"],
		[26, "支援", "当周围一圈的怪物受到攻击时将上前支援，并组成小队战斗。"],
		[27, "捕捉", "此怪物十分好战。当走到怪物周围十字时会强制进行战斗。"],
		[99, "闪避", function (enemy) { return "躲闪一部分攻击。受到的普通攻击伤害降低" + (enemy.defValue || 0) + "%。"; }, "#c3c3c3"],
		[100, "穿刺", function (enemy) { return "攻击能够穿透一部分防御。无视对手" + (enemy.x || 0) + "%的防御力。"; }],
		[101, "夹爆", function (enemy) { if (core.getFlag('hard', 0) == 1 && core.hasItem('I_hp_score')) return "此难度下该属性无效！"; return "【血海奥义】瞬间将对手打得奄奄一息\n经过两只相同的怪物中间，勇士生命值变成1。"; }, "#ff0000"],
		[102, "上位威压", function (enemy) {
			var diff = (enemy.value || 0) - core.status.hero.lv;
			if (diff >= 0) return "以上位者的气质震慑对手。双方等级较高者每比对手高出一级，便在先前基础上进一步削弱对手" + Math.floor(enemy.n) + "%的攻防，当前对方比你高" + diff + "级";
			else return "被上位者的气质震慑。双方等级较高者每比对手高出一级，便在先前基础上进一步削弱对手" + Math.floor(enemy.n) + "%的攻防，当前你比对方高" + -diff + "级";
		}, "#b113ff"],
		[103, "强击", function (enemy) { return "一次强力的攻击。怪物首回合获得" + (enemy.atkValue || 0) + "倍攻击力。"; }, "#b30000"],
		[104, "斩杀", function (enemy) { return "一旦对手势弱，攻击就会更加致命。战斗中，若勇士生命值低于" + (enemy.range || 0) + "%，则怪物攻击力提升" + (enemy.n || 0) + "%。"; }],
		[105, "重甲", function (enemy) { return "无视对手" + (enemy.defValue || 0) + "%的攻击力。"; }, "#b9822d"],
		[106, "寒霜之足", function (enemy) { return "危险的寒冰咒印。怪物前5回合每回合额外造成" + enemy.damage + "点伤害，然后冰封对方10回合。"; }, "#b30000"],
		[107, "冰封禁制", function (enemy) { return "将敌人锁在冰块之中。怪物首先冰封对方3回合，每回合额外造成" + enemy.damage + "点伤害。"; }, "#b30000"],
		[108, "霜寒爆发", "令敌人体内的霜寒尽数爆发。战斗开始时，立即清除勇士的所有霜寒状态，每驱除1层就会使勇士冰封1回合。", "#43e2dc"],
		[109, "寒冰护甲", "冷气贯穿全身。每受到1回合攻击就会使勇士获得1层霜寒状态，战斗后生效。", "#747dff"],
		[110, "光明", function (enemy) { return "战斗后，勇士获得" + enemy.n + "层光明状态，每层使得勇士受到和造成的伤害均提升1%，线性叠加。会与黑暗状态相抵消。"; }, "#FFFFFF"],
		[111, "黑暗", function (enemy) { return "战斗后，勇士获得" + enemy.n + "层黑暗状态，每层使得勇士受到和造成的伤害均减少1%，线性叠加。会与光明状态相抵消。"; }, "#737373"],
		[112, "迅捷", "迅捷的反应令对手猝不及防。怪物先攻10次。", "#55ff72"],
		[113, "迟钝", "迟钝的反应令自己猝不及防。勇士先攻10次。", "#e0d42d"],
		[114, "智障", "智力有严重缺陷。勇士先攻100次。", "#aba222"],
		[115, "怒意狂击", function (enemy) { return "攻击越发致命。怪物每回合提升" + enemy.v_115 + "点攻击力"; }, "#f39f00"],
		[116, "魔爪", "黑暗的力量使对手动弹不得。怪物先攻100次。", "#8500b1"],
		[117, "神圣愈合", "持续引导神圣的治愈之力。不攻击，每回合治愈自身10000点生命值。", "#ffffff"],
		[118, "暗影庇护", "隐藏于暗影之中。处于无敌状态，但每回合损耗自身2%的最大生命值。", "#666666"],
		[119, "驱邪", "使对方体内的不洁之力尽数爆发。战斗开始时驱除勇士的所有光明/黑暗状态，每驱除1层便额外造成64100点伤害。", "#fff900"],
		[120, "魔免", "免疫技能伤害。", "#c3c3c3"],
		[121, "重伤", function (enemy) { return "造成难以治愈的严重伤害。使对手受到的回复效果降低" + (enemy.v_121 || 0) + "%。"; }, "#b30000"],
		[122, "盛宴", function (enemy) { return "【红海技能】撕扯对手的血肉\n每次攻击造成对方最大生命值" + (enemy.v_122 || 0) + "%的额外伤害。"; }, "#ff00d2"],
		[123, "竭心", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "【红海技能】心脏慢慢停止跳动\n经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时自动减最大生命的" + (enemy.value || 0) + "%"; }, "#78b305"],
		[124, "血怨", "【红海技能】死亡的怨念缠绕着对手。似乎是某个血海奥义的劣化版本\n战斗结束后，勇士的生命值变成一半。", "#ff00d2"],
		[125, "血域", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "【红海技能】生命在流逝\n经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时自动减当前生命的" + (enemy.value || 0) + "%"; }, "#ff00d2"],
		[126, "苦痛", function (enemy) { return "【红海技能】引诱对手走向死亡\n战斗开始时，造成对方已损失生命值" + enemy.v_126 + "%的伤害。"; }, "#ff00d2"],
		[127, "死亡镰刀", function (enemy) { return "【红海技能】似乎是某个血海奥义的劣化版本。第5回合结束时，造成相当于对方已损失生命值100%的伤害。"; }, "#78b305"],
		[128, "邪恶净化", "【血海奥义】运用至邪之力打击对手\n战斗开始前，暂时移除对方的所有护盾，并造成100万额外伤害。", "#b113ff"],
		[130, "审判之剑", "【血海奥义】传说此招曾经粉碎过一位魔王的复仇计划\n剥夺对手拥有的剑盾，且如果对方拥有“魔王”称号，则使其攻防减半", "#ff0000"],
		[131, "无敌斩", "【血海奥义】以无敌的姿态爆发出暴雨般的斩击\n战前以2倍攻击力先攻9次", "#ff0000"],
		[132, "混乱", "颠倒对手的能力。战斗中，勇士攻防互换", "#c3c3c3"],
		[133, "伯化", function (enemy) {
			var str = "【血海奥义】伯力之神的力量\n战斗后，所有拥有该属性的怪物提升";
			var addstr = "";
			if (enemy.bo_hp) {
				addstr += enemy.bo_hp + "点生命，";
			}
			if (enemy.bo_atk) {
				addstr += enemy.bo_atk + "点攻击力，";
			}
			if (enemy.bo_def) {
				addstr += enemy.bo_def + "点防御力，";
			}
			if (addstr) {
				addstr += "可叠加。";
				str += addstr;
				return str;
			}
			return "【血海奥义】伯力之神的力量\n此怪物享受伯化加成，但战斗后不会提供额外伯化效果。";
		}, "#eda6ff"],
		[134, "域爆", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "【血海奥义】领域之极致\n经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时生命变为1点"; }, "#ff0000"],
		[135, "阻爆", "【血海奥义】阻击之极致\n经过怪物的十字领域时生命变为1点，同时怪物后退一格", "#ff0000"],
		[136, "射爆", function (enemy) { if (core.getFlag('hard', 0) == 1) return "此难度下该属性无效！"; return "【血海奥义】射击之极致\n经过怪物同行或同列时生命变为1点"; }, "#ff0000"],
		[137, "超越", "【血海奥义】遇弱则强，遇强则更强\n怪物的攻防是勇士基础攻防的1.2倍。", "#4340ff"],
		[138, function (enemy) {
			if (enemy.defValue > 0) return "坚韧光环";
			return "软弱光环";
		}, function (enemy) { var x = enemy.range * 2 + 1; return (enemy.defValue > 0 ? "增加" : "减少") + "以自身为中心" + x + "*" + x + "范围内所有友军" + (Math.abs(enemy.defValue) || 0) + "%的防御力，线性叠加。"; }, "#fff900"],
		[139, function (enemy) {
			if (enemy.value > 0) return "活力光环";
			return "抑郁光环";
		}, function (enemy) { var x = enemy.range * 2 + 1; return (enemy.value > 0 ? "增加" : "减少") + "以自身为中心" + x + "*" + x + "范围内所有友军" + (Math.abs(enemy.value) || 0) + "%的生命，线性叠加。"; }, "#fff900"],
		[140, function (enemy) {
			if (enemy.atkValue > 0) return "狂暴光环";
			return "衰退光环";
		}, function (enemy) { var x = enemy.range * 2 + 1; return (enemy.atkValue > 0 ? "增加" : "减少") + "以自身为中心" + x + "*" + x + "范围内所有友军" + (Math.abs(enemy.atkValue) || 0) + "%的攻击力，线性叠加。"; }, "#fff900"],
		[141, "中子束", "【血海奥义】简单粗暴而威力巨大的攻击\n怪物每回合普攻2次，魔攻1次。", "#e47400"],
		[142, "法力虚空", "【血海奥义】敌人将因使用魔法而遭到惩戒\n瞬间造成对手最大生命值X%的伤害，X为已损失魔法的比例", "#747dff"],
		[143, "净爆", "【血海奥义】净化之极致\n战斗前，怪物使勇士护盾变为100倍，然后附加此时勇士护盾数值的" + core.values.purify + "倍作为伤害", "#00d2d4"],
		[144, "崩甲", "【血海奥义】相比净化爆发力较弱，但更加持久\n怪物每回合附加勇士战斗开始时的护盾数值的0.1倍作为伤害", "#00d2d4"],
	];
},
        "getEnemyInfo": function (enemy, hero, x, y, floorId) {
	// 获得某个怪物变化后的数据；该函数将被伤害计算和怪物手册使用
	// 例如：坚固、模仿、仿攻等等
	// 
	// 参数说明：
	// enemy：该怪物信息
	// hero_hp,hero_atk,hero_def,hero_mdef：勇士的生命攻防魔防数据
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用（也可以按需制作部分范围光环效果）
	floorId = floorId || core.status.floorId;
	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef');

	var mon_hp = enemy.hp,
		mon_atk = enemy.atk,
		mon_def = enemy.def,
		mon_special = enemy.special;
	var mon_money = enemy.money,
		mon_experience = enemy.experience,
		mon_point = enemy.point;
	// 伯化
	if (core.hasSpecial(mon_special, 133)) {
		mon_hp += core.getFlag('bo_hp', 0);
		mon_atk += core.getFlag('bo_atk', 0);
		mon_def += core.getFlag('bo_def', 0);
	}
	// 模仿
	if (core.hasSpecial(mon_special, 10)) {
		mon_atk = hero_atk;
		mon_def = hero_def;
	}
	// 超模仿
	if (core.hasSpecial(mon_special, 137)) {
		mon_atk = 1.2 * hero_atk;
		mon_def = 1.2 * hero_def;
	}
	// 坚固
	//if (core.hasSpecial(mon_special, 3) && mon_def < hero_atk - 1) {
	//	mon_def = hero_atk - 1;
	//}

	// ------ 支援 ------
	var guards = [];
	// 光环检查
	// 在这里判定是否需要遍历全图（由于光环需要遍历全图，应尽可能不需要以减少计算量，尤其是大地图）
	var query = function () {
		var floorIds = ["MT70", "MT78", "MT79", "MT7A", "MT80", "MT87", "MT88", "MT89", "MT90", "Chap3_boss", "MT100", "MT102", "MT103", "MT104", "MT105", "MT106", "MT108", "MT109", "MT110", "MT111", "MT113", "MT114", "MT115", "MT116", "MT118", "MT119", "MT120", "Final"]; // 在这里给出所有需要遍历的楼层（即有光环或支援等）
		return core.inArray(floorIds, floorId); // 也可以写其他的判定条件
	};

	if (query()) {
		// 从V2.5.4开始，对光环效果增加缓存，以解决多次重复计算的问题，从而大幅提升运行效率。
		// 检查当前楼层所有光环怪物（数字25）
		var hp_buff = 0,
			atk_buff = 0,
			def_buff = 0,
			cnt = 0;
		// 检查光环缓存
		var index = x != null && y != null ? (x + "," + y) : "floor";
		if (!core.status.checkBlock) core.status.checkBlock = {};
		if (!core.status.checkBlock.cache) core.status.checkBlock.cache = {};
		var cache = core.status.checkBlock.cache[index];
		if (!cache) {
			// 没有该点的缓存，则遍历每个图块
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (!block.disable) {
					// 获得该图块的ID
					var id = block.event.id,
						enemy = core.material.enemys[id];
					// 全图光环，检查是不是怪物，且是否拥有该特殊属性
					if (enemy && core.hasSpecial(enemy.special, 25)) {
						// 检查是否可叠加
						if (enemy.add || cnt == 0) {
							hp_buff += enemy.value || 0;
							atk_buff += enemy.atkValue || 0;
							def_buff += enemy.defValue || 0;
							cnt++;
						}
					}
					// 范围光环
					if (core.isset(enemy) && core.hasSpecial(enemy.special, 140) && core.isset(x) && core.isset(y) &&
						Math.abs(block.x - x) <= enemy.range && Math.abs(block.y - y) <= enemy.range) {
						atk_buff += enemy.atkValue || 0;
						cnt++;
					}
					if (core.isset(enemy) && core.hasSpecial(enemy.special, 138) && core.isset(x) && core.isset(y) &&
						Math.abs(block.x - x) <= enemy.range && Math.abs(block.y - y) <= enemy.range) {
						def_buff += enemy.defValue || 0;
						cnt++;
					}
					if (core.isset(enemy) && core.hasSpecial(enemy.special, 139) && core.isset(x) && core.isset(y) &&
						Math.abs(block.x - x) <= enemy.range && Math.abs(block.y - y) <= enemy.range) {
						hp_buff += enemy.value || 0;
						cnt++;
					}
					// 检查【支援】技能
					if (enemy && core.hasSpecial(enemy.special, 26) &&
						// 检查支援条件，坐标存在，距离为1，且不能是自己
						// 其他类型的支援怪，比如十字之类的话.... 看着做是一样的
						x != null && y != null && Math.abs(block.x - x) <= 1 && Math.abs(block.y - y) <= 1 && !(x == block.x && y == block.y)) {
						// 记录怪物的x,y，ID
						guards.push([block.x, block.y, id]);
					}

					// TODO：如果有其他类型光环怪物在这里仿照添加检查
				}
			});

			core.status.checkBlock.cache[index] = { "hp_buff": hp_buff, "atk_buff": atk_buff, "def_buff": def_buff, "guards": guards };
		} else {
			// 直接使用缓存数据
			hp_buff = cache.hp_buff;
			atk_buff = cache.atk_buff;
			def_buff = cache.def_buff;
			guards = cache.guards;
		}

		// 增加比例；如果要增加数值可以直接在这里修改
		mon_hp *= (1 + hp_buff / 100);
		mon_atk *= (1 + atk_buff / 100);
		mon_def *= (1 + def_buff / 100);
	}

	// TODO：可以在这里新增其他的怪物数据变化
	// 比如仿攻（怪物攻击不低于勇士攻击）：
	// if (core.hasSpecial(mon_special, 27) && mon_atk < hero_atk) {
	//     mon_atk = hero_atk;
	// }
	// 也可以按需增加各种自定义内容（比如幻塔的魔杖效果等）

	return {
		"hp": Math.floor(mon_hp),
		"atk": Math.floor(mon_atk),
		"def": Math.floor(mon_def),
		"money": Math.floor(mon_money),
		"experience": Math.floor(mon_experience),
		"point": Math.floor(mon_point),
		"special": mon_special,
		"guards": guards, // 返回支援情况
	};
},
        "getDamageInfo": function (enemy, hero, x, y, floorId) {
	// 获得战斗伤害信息（实际伤害计算函数）
	// 
	// 参数说明：
	// enemy：该怪物信息
	// hero：勇士的当前数据；如果对应项不存在则会从core.status.hero中取。
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用
	floorId = floorId || core.status.floorId;

	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef'),
		origin_hero_hp = hero_hp,
		origin_hero_atk = hero_atk,
		origin_hero_def = hero_def;
	var hero_hpmax = core.getRealStatusOrDefault(core.status.hero, 'hpmax');
	var hero_level = core.status.hero.lv;
	// 勇士额外攻防
	hero_atk += core.getFlag('greenAtk', 0);
	hero_def += core.getFlag('greenDef', 0);

	// 勇士的负属性都按0计算
	hero_hp = Math.max(0, hero_hp);
	hero_atk = Math.max(0, hero_atk);
	hero_def = Math.max(0, hero_def);
	hero_mdef = Math.max(0, hero_mdef);

	// 光暗buff
	var dark_stack = core.getFlag('dark', 0);
	var dmg_ratio = 1 - 0.01 * dark_stack;

	// 怪物的各项数据
	// 对坚固模仿等处理扔到了脚本编辑-getEnemyInfo之中
	var enemyInfo = core.enemys.getEnemyInfo(enemy, hero, x, y, floorId);
	var mon_hp = enemyInfo.hp,
		mon_atk = enemyInfo.atk,
		mon_def = enemyInfo.def,
		mon_special = enemyInfo.special;

	// 上位威压
	if (core.hasSpecial(mon_special, 102)) {
		var levelDif = (enemy.value || 0) - hero_level;
		if (levelDif >= 0) {
			hero_atk *= Math.pow((1 - enemy.n / 100.0), levelDif);
			hero_def *= Math.pow((1 - enemy.n / 100.0), levelDif);
		} else {
			mon_atk *= Math.pow((1 - enemy.n / 100.0), -levelDif);
			mon_def *= Math.pow((1 - enemy.n / 100.0), -levelDif);
		}
	}

	if (core.getFlag('skill', 0) == 2) { // 开启了技能2：防御
		var dec_atk = core.getFlag('skill2_atk_ratio', 0) * hero_atk;
		var inc_def = dec_atk * core.getFlag('skill2_def_ratio');
		hero_atk -= dec_atk;
		hero_def += inc_def;
	}

	// 混乱
	if (core.hasSpecial(mon_special, 132)) {
		var tmp = hero_def;
		hero_def = hero_atk;
		hero_atk = tmp;
	}

	// 穿刺
	if (core.hasSpecial(mon_special, 100))
		hero_def *= (1 - (enemy.x / 100));
	// 重甲
	if (core.hasSpecial(mon_special, 105))
		hero_atk *= (1 - (enemy.defValue / 100));

	if (core.getFlag('skill', 0) == 1) { // 开启了技能1：强击
		var extra_damage = (core.getFlag('skill1_val', 2) - 1) * hero_atk;
		// 魔免
		if (core.hasSpecial(mon_special, 120)) {
			extra_damage = 0;
		}
		extra_damage *= dmg_ratio;
		mon_hp -= extra_damage;
	}

	// 如果是无敌属性，且勇士未持有十字架
	if (core.hasSpecial(mon_special, 20) && !core.hasItem("cross"))
		return null; // 不可战斗

	// 战前造成的额外伤害（可被魔防抵消）
	var init_damage = 0;

	// 驱邪
	if (core.hasSpecial(mon_special, 119)) {
		dmg_ratio = 1;

		init_damage += 64100 * Math.abs(dark_stack);
	}
	// 吸血
	if (core.hasSpecial(mon_special, 11)) {
		var vampire_damage = hero_hp * enemy.value;

		// 如果有神圣盾免疫吸血等可以在这里写
		// 也可以用hasItem和hasEquip来判定装备
		if (core.getFlag('morph', 0)) vampire_damage = 0;

		vampire_damage = Math.floor(vampire_damage) || 0;
		// 加到自身
		if (enemy.add) // 如果加到自身
			mon_hp += vampire_damage;

		init_damage += vampire_damage;
	}
	// 死亡
	if (core.hasSpecial(mon_special, 126) && !core.getFlag('morph', 0)) {
		init_damage += enemy.v_126 / 100 * (hero_hpmax - hero_hp);
	}
	// 邪恶净化
	if (core.hasSpecial(mon_special, 128)) {
		hero_mdef = 0;
		init_damage += 1000000;
	}
	// 无敌斩
	if (core.hasSpecial(mon_special, 131)) {
		init_damage += (mon_atk * 2 - hero_def) * 9;
	}
	// 法力虚空
	if (core.hasSpecial(mon_special, 142)) {
		init_damage += hero_hpmax * (1 - core.status.hero.mana / core.status.hero.manamax);
	}

	// 每回合怪物对勇士造成的战斗伤害
	var per_damage = mon_atk - hero_def;
	// 盛宴
	if (core.hasSpecial(mon_special, 122)) {
		per_damage += hero_hpmax * enemy.v_122 / 100;
	}

	// 魔攻：战斗伤害就是怪物攻击力
	if (core.hasSpecial(mon_special, 2)) per_damage = mon_atk;
	// 战斗伤害不能为负值
	if (per_damage < 0) per_damage = 0;

	// 2连击 & 3连击 & N连击
	if (core.hasSpecial(mon_special, 4)) per_damage *= 2;
	if (core.hasSpecial(mon_special, 5)) per_damage *= 3;
	if (core.hasSpecial(mon_special, 6)) per_damage *= (enemy.n || 4);

	// 中子束
	if (core.hasSpecial(mon_special, 141)) {
		per_damage *= 2;
		per_damage += mon_atk;
	}
	// 崩甲
	if (core.hasSpecial(mon_special, 144)) {
		per_damage += hero_mdef * 0.1;
	}

	// 每回合的反击伤害；反击是按照勇士的攻击次数来计算回合
	var counterDamage = 0;
	if (core.hasSpecial(mon_special, 8)) counterDamage += Math.floor(enemy.value * hero_atk);

	// 先攻
	if (core.hasSpecial(mon_special, 1)) init_damage += per_damage;
	// 迅捷
	if (core.hasSpecial(mon_special, 112)) init_damage += 10 * per_damage;
	// 魔爪
	if (core.hasSpecial(mon_special, 116)) init_damage += 100 * per_damage;

	// 净化
	if (core.hasSpecial(mon_special, 9))
		init_damage += Math.floor(core.values.purify * hero_mdef);
	// 净爆
	if (core.hasSpecial(mon_special, 143))
		init_damage += Math.floor(core.values.purify * hero_mdef * 100 - hero_mdef * 99);

	// 勇士每回合对怪物造成的伤害
	var hero_per_damage = Math.max(hero_atk - mon_def, 0);
	hero_per_damage *= dmg_ratio; // 勇士对怪物伤害的光暗修正，怪物对勇士伤害的光暗修正放在最后

	// 霜寒爆发
	var curse_stack = core.getFlag('curse_stack', 0);
	if (core.hasSpecial(mon_special, 108)) {
		init_damage += curse_stack * per_damage;
		curse_stack = 0;
	}
	// 霜寒 
	curse_stack = core.getFlag('curse_stack', 0);
	if (curse_stack > 0) {
		hero_per_damage *= (1 - 0.01 * curse_stack);
	}

	// 闪避
	if (core.hasSpecial(mon_special, 99))
		hero_per_damage *= (1 - (enemy.defValue / 100));

	// 坚固
	if (core.hasSpecial(mon_special, 3))
		hero_per_damage = Math.min(hero_per_damage, 1);

	// 迟钝
	if (core.hasSpecial(mon_special, 113))
		mon_hp -= 10 * hero_per_damage;
	// ZZ
	if (core.hasSpecial(mon_special, 114))
		mon_hp -= 100 * hero_per_damage;

	// 神圣愈合
	if (core.hasSpecial(mon_special, 117)) {
		if (mon_hp > hero_per_damage) {
			hero_per_damage -= 10000;
		}
	}

	// 如果没有破防，且怪物生命大于0，则不可战斗
	if (hero_per_damage <= 0 && mon_hp > 0) return null;

	// 勇士的攻击回合数；为怪物生命除以每回合伤害向上取整
	var turn = Math.ceil(mon_hp / hero_per_damage);
	// "战斗中，当敌人生命值小于${flag:execute_percentage}%时，每回合造成${flag:execute_atk_percentage}%的额外伤害。"
	// 拥有被动“斩杀”，重新计算回合数
	if (core.hasItem('execute')) {
		var perc = core.getFlag('execute_percentage', 20);
		var inc_atk_ratio = core.getFlag('execute_atk_percentage', 30);
		var cur_hp = mon_hp;
		if (cur_hp / hero_per_damage > 1641) { // 回合数太多，放弃计算斩杀以提升性能

		} else {
			turn = 0;
			while (cur_hp > 0) {
				cur_hp -= hero_per_damage;
				if (cur_hp / mon_hp < perc / 100) {
					cur_hp -= inc_atk_ratio / 100 * hero_per_damage;
				}
				turn++;
			}
		}
	}
	// 开启了技能4：撕裂，且怪物不魔免，则重新计算回合数
	if (core.getFlag('skill', 0) == 4 && !core.hasSpecial(mon_special, 120)) {
		var cur_hp = mon_hp;
		var gouge_val = core.getFlag('skill4_val', 5) / 100;
		turn = 0;
		while (cur_hp > 0) {
			cur_hp *= (1 - gouge_val);
			cur_hp -= hero_per_damage;
			// 斩杀额外伤害
			if (core.hasItem('execute')) {
				var perc = core.getFlag('execute_percentage', 20);
				var inc_atk_ratio = core.getFlag('execute_atk_percentage', 30);
				if (cur_hp / mon_hp < perc / 100) {
					cur_hp -= inc_atk_ratio / 100 * hero_per_damage;
				}
			}
			turn++;
		}
	}
	if (turn < 1)
		turn = 1;

	// 破甲
	if (core.hasSpecial(mon_special, 7) && turn > 1)
		init_damage += Math.floor(enemy.value * hero_def);

	// 强击
	if (core.hasSpecial(mon_special, 103) && turn > 1) {
		init_damage += enemy.atkValue * mon_atk - hero_def;
		init_damage -= Math.max(per_damage, 0);
	}
	// ColdFeet
	if (core.hasSpecial(mon_special, 106)) {
		init_damage += enemy.damage * (Math.min(turn, 6) - 1);
		if (turn > 5) {
			init_damage += 10 * per_damage;
		}
	}
	// 冰封禁制
	if (core.hasSpecial(mon_special, 107)) {
		init_damage += 3 * enemy.damage;
		init_damage += 3 * per_damage;
	}

	// 炫目之光
	if (core.hasSpecial(mon_special, 118)) {
		turn = 51;
	}



	// ------ 支援 ----- //
	// 这个递归最好想明白为什么，flag:extra_turn是怎么用的
	var guards = core.getFlag("__guards__" + x + "_" + y, enemyInfo.guards);
	var guard_before_current_enemy = false; // ------ 支援怪是先打(true)还是后打(false)？
	turn += core.getFlag("__extraTurn__", 0);
	if (guards.length > 0) {
		if (!guard_before_current_enemy) { // --- 先打当前怪物，记录当前回合数
			core.setFlag("__extraTurn__", turn);
		}
		// 获得那些怪物组成小队战斗
		for (var i = 0; i < guards.length; i++) {
			var gx = guards[i][0],
				gy = guards[i][1],
				gid = guards[i][2];
			// 递归计算支援怪伤害信息，这里不传x,y保证不会重复调用
			// 这里的mdef传0，因为护盾应该只会被计算一次
			var info = core.enemys.getDamageInfo(core.material.enemys[gid], { hp: origin_hero_hp, atk: origin_hero_atk, def: origin_hero_def, mdef: 0 });
			if (info == null) { // 小队中任何一个怪物不可战斗，直接返回null
				return null;
			}
			// 已经进行的回合数
			core.setFlag("__extraTurn__", info.turn);
			init_damage += info.damage;
		}
		if (guard_before_current_enemy) { // --- 先打支援怪物，增加当前回合数
			turn += core.getFlag("__extraTurn__", 0);
		}
	}
	core.removeFlag("__extraTurn__");
	// ------ 支援END ------ //

	// 最终伤害：初始伤害 + 怪物对勇士造成的伤害 + 反击伤害
	var damage = init_damage + (turn - 1) * per_damage + turn * counterDamage;

	// 中毒修正
	var poison = core.getFlag('poison_stack', 0);
	damage += poison * turn;

	// 怪物怒意狂击修正
	if (core.hasSpecial(mon_special, 115) && turn > 1) {
		if (mon_atk - hero_def > 0) {
			var temp = turn - 1;
			damage += temp * (temp + 1) / 2 * enemy.v_115;
		} else {
			var dmg = mon_atk - hero_def;
			for (var zzz = 0; zzz < turn - 1; zzz++) {
				dmg += enemy.v_115;
				damage += Math.max(dmg, 0);
			}
		}
	}

	var heal_ratio = 1;
	if (core.hasSpecial(mon_special, 121)) {
		heal_ratio -= enemy.v_121 / 100;
	}
	// 怪物斩杀修正
	if (core.hasSpecial(mon_special, 104) && turn > 1) {
		var cur_hp = hero_hp + hero_mdef - init_damage;
		var mon_cur_hp = mon_hp;
		var poison = core.getFlag('poison_stack', 0);
		for (var i = 1; i <= turn - 1; i++) {
			// 勇士先攻击吸血
			if (core.hasItem('I_vampire')) {
				if (core.getFlag('skill', 0) == 1 && i == 1 && !core.hasSpecial(mon_special, 120)) { // 开启了技能1：强击 且 当前为首回合 且 怪物不魔免
					var extra_damage = (core.getFlag('skill1_val', 3) - 1) * hero_atk;
					cur_hp += core.getFlag('vampire_ratio', 0.2) * extra_damage * heal_ratio;
				} else if (core.getFlag('skill', 0) == 4 && !core.hasSpecial(mon_special, 120)) { // 开启了技能4：撕裂 且 怪物不魔免
					var extra_damage = mon_cur_hp * core.getFlag('skill4_val', 5) / 100;
					cur_hp += core.getFlag('vampire_ratio', 0.2) * extra_damage * heal_ratio;
					// 更新怪物当前回合结束后的生命值
					mon_cur_hp -= extra_damage;
					mon_cur_hp -= hero_per_damage;
				}
				cur_hp += core.getFlag('vampire_ratio', 0.2) * hero_per_damage * heal_ratio; // 吸血计算
			}
			var hero_hp_rate = cur_hp / hero_hpmax;
			if (hero_hp_rate < (enemy.range / 100)) { // 检测到满足斩杀条件
				if (per_damage > 0)
					extra_damage = (enemy.n / 100) * mon_atk;
				else
					extra_damage = (1 + (enemy.n / 100)) * mon_atk - hero_def;
				damage += extra_damage; // 加到总伤害里面
			} else {
				extra_damage = 0;
			}
			// 更新勇士当前回合结束后的生命值
			cur_hp -= per_damage + extra_damage + poison;
		}
	}
	// 死亡镰刀修正
	if (core.hasSpecial(mon_special, 127) && turn > 5) {
		var cur_hp = hero_hp + hero_mdef - init_damage;
		var mon_cur_hp = mon_hp;
		var poison = core.getFlag('poison_stack', 0);
		for (var i = 1; i <= 5; i++) {
			// 勇士先攻击吸血
			if (core.hasItem('I_vampire')) {
				if (core.getFlag('skill', 0) == 1 && i == 1 && !core.hasSpecial(mon_special, 120)) { // 开启了技能1：强击 且 当前为首回合 且 怪物不魔免
					var extra_damage = (core.getFlag('skill1_val', 3) - 1) * hero_atk;
					cur_hp += core.getFlag('vampire_ratio', 0.2) * extra_damage;
				} else if (core.getFlag('skill', 0) == 4 && !core.hasSpecial(mon_special, 120)) { // 开启了技能4：撕裂 且 怪物不魔免
					var extra_damage = mon_cur_hp * core.getFlag('skill4_val', 5) / 100;
					cur_hp += core.getFlag('vampire_ratio', 0.2) * extra_damage;
					// 更新怪物当前回合结束后的生命值
					mon_cur_hp -= extra_damage;
					mon_cur_hp -= hero_per_damage;
				}
				cur_hp += core.getFlag('vampire_ratio', 0.2) * hero_per_damage; // 吸血计算
			}
			// 更新勇士当前回合结束后的生命值
			cur_hp -= per_damage + poison;
		}
		// 伤害修正
		damage += hero_hpmax - cur_hp;
	}

	// 光暗修正
	damage *= dmg_ratio;

	// 再扣去魔防
	damage -= hero_mdef * core.getFlag('mdef_ratio', 1);

	// -- 检查是否允许负伤
	// -- if (!core.flags.enableNegativeDamage)
	// 护盾不能负伤
	damage = Math.max(0, damage);

	// 勇士吸血
	if (core.hasItem('I_vampire')) {
		// 炫目之光
		if (core.hasSpecial(mon_special, 118)) {} else {
			damage -= Math.floor(enemyInfo.hp * core.getFlag('vampire_ratio', 0.2)) * heal_ratio;

			// 神圣愈合
			if (core.hasSpecial(mon_special, 117))
				damage -= 10000 * core.getFlag('vampire_ratio', 0.2) * turn * heal_ratio;
		}
	}

	// 难度减伤
	if (damage > 0) {
		if (core.hasItem('I_hard_1')) {
			damage /= 2;
		} else if (core.hasItem('I_hard_2')) {
			damage *= 0.75;
		}
	}

	return {
		"mon_hp": Math.floor(mon_hp),
		"mon_atk": Math.floor(mon_atk),
		"mon_def": Math.floor(mon_def),
		"init_damage": Math.floor(init_damage),
		"per_damage": Math.floor(per_damage),
		"hero_per_damage": Math.floor(hero_per_damage),
		"turn": Math.floor(turn),
		"damage": Math.floor(damage)
	};
},
        "updateEnemys": function () {
	// 更新怪物数据，可以在这里对怪物属性和数据进行动态更新，详见文档——事件——怪物数据的动态修改
	// 此函数执行时间：重新开始游戏、读档后、通过事件调用“更新怪物数据”时

	// 比如下面这个例子，如果flag:xxx为真，则将绿头怪的攻击设为100，金币设为20
	/*
	if (core.hasFlag('xxx')) {
		core.material.enemys.greenSlime.atk = 100;
		core.material.enemys.greenSlime.money = 20;
	}
	*/
}
    },
    "actions": {
        "onKeyUp": function (keyCode, altKey) {
	// 键盘按键处理，可以在这里自定义快捷键列表
	// keyCode：当前按键的keyCode（每个键的keyCode自行百度）
	// altKey：Alt键是否被按下，为true代表同时按下了Alt键
	// 可以在这里任意增加或编辑每个按键的行为

	// 如果处于正在行走状态，则不处理
	if (core.isMoving())
		return;

	// Alt+0~9，快捷换上套装
	if (altKey && keyCode >= 48 && keyCode <= 57) {
		core.items.quickLoadEquip(keyCode - 48);
		return;
	}

	// 根据keyCode值来执行对应操作
	switch (keyCode) {
	case 27: // ESC：打开菜单栏
		core.openSettings(true);
		break;
	case 88: // X：使用怪物手册
		core.openBook(true);
		break;
	case 71: // G：使用楼传器
		core.useFly(true);
		break;
	case 65: // A：读取自动存档（回退）
		core.doSL("autoSave", "load");
		break;
	case 83: // S：存档
		core.save(true);
		break;
	case 68: // D：读档
		core.load(true);
		break;
	case 69: // E：打开光标
		core.ui.drawCursor();
		break;
	case 84: // T：打开道具栏
		core.openToolbox(true);
		break;
	case 81: // Q：打开装备栏
		core.openEquipbox(true);
		break;
	case 90: // Z：转向
		core.turnHero();
		break;
	case 75:
	case 86: // V：打开快捷商店列表
		core.openQuickShop(true);
		break;
	case 32: // SPACE：轻按
		core.getNextItem();
		break;
	case 82: // R：回放录像
		core.actions._clickSyncSave_replay();
		break;
	case 33:
	case 34: // PgUp/PgDn：浏览地图
		core.ui.drawMaps();
		break;
	case 77: // M：绘图模式
		core.ui.drawPaint();
		break;
	case 66: // B：打开数据统计
		core.ui.drawStatistics();
		break;
	case 72: // H：打开帮助页面
		core.ui.drawHelp();
		break;
	case 78: // N：重新开始
		core.confirmRestart();
		break;
	case 79: // O：查看工程
		core.actions._clickGameInfo_openProject();
		break;
	case 80: // P：游戏主页
		core.actions._clickGameInfo_openComments();
		break;
	case 49: // 快捷键1: 使用便携血瓶 或 破墙
		/*
		if (core.hasItem('I_ex_atk') || core.hasItem('I_ex_def')) {
			if (core.canUseItem('I_ex_atk')) {
				core.status.route.push("key:49"); // 将按键记在录像中
				core.useItem('I_ex_atk', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
			} else if (core.canUseItem('I_ex_def')) {
				core.status.route.push("key:49"); // 将按键记在录像中
				core.useItem('I_ex_def', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
			} else {
				core.drawTip('当前不能使用');
			}
		}*/
		if (core.hasItem('bring_hp') && core.canUseItem('bring_hp')) {
			core.status.route.push("key:49");
			core.useItem('bring_hp', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
		} else if (core.hasItem('pickaxe') && core.canUseItem('pickaxe')) {
			core.status.route.push("key:49");
			core.useItem('pickaxe', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
		}
		break;
		/*case 50: // 快捷键2: 炸
			if (core.hasItem('bomb')) {
				if (core.canUseItem('bomb')) {
					core.status.route.push("key:50"); // 将按键记在录像中
					core.useItem('bomb', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
				} else {
					core.drawTip('当前不能使用炸弹');
				}
			} else if (core.hasItem('hammer')) {
				if (core.canUseItem('hammer')) {
					core.status.route.push("key:50"); // 将按键记在录像中
					core.useItem('hammer', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
				} else {
					core.drawTip('当前不能使用圣锤');
				}

			}
			break;
		case 51: // 快捷键3: 飞
			if (core.hasItem('centerFly')) {
				core.ui.drawCenterFly();
			}
			break;
		case 52: // 快捷键4：破冰/冰冻/地震/上下楼器/... 其他道具依次判断
			{
				var list = ["icePickaxe", "snow", "earthquake", "upFly", "downFly", "jumpShoes", "lifeWand", "poisonWine", "weakWine", "curseWine", "superWine"];
				for (var i = 0; i < list.length; i++) {
					var itemId = list[i];
					if (core.canUseItem(itemId)) {
						core.status.route.push("key:52");
						core.useItem(itemId, true);
						break;
					}
				}
			}
			break;*/
	case 55: // 快捷键7：绑定为轻按，方便手机版操作
		core.getNextItem();
		break;
	case 118: // F7：开启debug模式
		core.debug();
		break;
	case 50: // 2：开启技能“强击”
		// 检测是否拥有“强击”这个技能道具
		if (core.hasItem('skill1')) {
			core.status.route.push("key:50");
			core.useItem('skill1', true);
		}
		break;
	case 51: // 3：开启技能“防御”
		if (core.hasItem('skill2')) {
			core.status.route.push("key:51");
			core.useItem('skill2', true);
		}
		break;
	case 52: // 4: 感受温暖/撕裂
		if (core.hasItem('skill3')) {
			core.status.route.push("key:52");
			core.useItem('skill3', true);
		} else if (core.hasItem('skill4')) {
			core.status.route.push("key:52");
			core.useItem('skill4', true);
		}
		break;
	case 53: // 5: 黑化
		if (core.hasItem('I_morph')) {
			core.status.route.push("key:53");
			core.useItem('I_morph', true);
		}
		break;
	case 87: // W: 跳跃
		if (core.hasItem('smallJump')) {
			core.status.route.push("key:87");
			core.useItem('smallJump', true);
		}
		break;
	case 56: // 8: 便携式蓝瓶
		if (core.hasItem('bring_mana')) {
			core.status.route.push("key:56");
			core.useItem('bring_mana', true);
		}
		break;
		// 在这里可以任意新增或编辑已有的快捷键内容
		/*
		case 0: // 使用该按键的keyCode
			// 还可以再判定altKey是否被按下，即 if (altKey) { ...

			// ... 在这里写你要执行脚本
			// **强烈建议所有新增的自定义快捷键均能给个对应的道具可点击，以方便手机端的行为**
			if (core.hasItem('...')) {
				core.status.route.push("key:0");
				core.useItem('...', true); // 增加true代表该使用道具不计入录像
			}

			break;
		*/
	}

}
    },
    "control": {
        "saveData": function () {
	// 存档操作，此函数应该返回“具体要存档的内容”

	// 勇士和hash值（防改存档文件来作弊）
	var hero = core.clone(core.status.hero),
		hashCode = core.utils.hashCode(hero);
	// 差异化存储values
	var values = {};
	for (var key in core.values) {
		if (!core.same(core.values[key], core.data.values[key]))
			values[key] = core.clone(core.values[key]);
	}

	// 要存档的内容
	var data = {
		'floorId': core.status.floorId,
		'hero': hero,
		'hard': core.status.hard,
		'maps': core.maps.saveMap(),
		'route': core.encodeRoute(core.status.route),
		'values': values,
		'shops': {},
		'version': core.firstData.version,
		"time": new Date().getTime(),
		"hashCode": hashCode
	};
	// 设置商店次数
	for (var shopId in core.status.shops) {
		data.shops[shopId] = {
			'times': core.status.shops[shopId].times || 0,
			'visited': core.status.shops[shopId].visited || false
		};
	}

	return data;
},
        "loadData": function (data, callback) {
	// 读档操作；从存储中读取了内容后的行为

	// 重置游戏和路线
	core.resetGame(data.hero, data.hard, data.floorId, core.maps.loadMap(data.maps), data.values);
	core.status.route = core.decodeRoute(data.route);
	// 加载商店信息
	for (var shopId in core.status.shops) {
		if (data.shops[shopId]) {
			core.status.shops[shopId].times = data.shops[shopId].times;
			core.status.shops[shopId].visited = data.shops[shopId].visited;
		}
	}
	// 文字属性，全局属性
	core.status.textAttribute = core.getFlag('textAttribute', core.status.textAttribute);
	var toAttribute = core.getFlag('globalAttribute', core.status.globalAttribute);
	if (!core.same(toAttribute, core.status.globalAttribute)) {
		core.status.globalAttribute = toAttribute;
		core.updateGlobalAttribute();
	}
	// 重置音量
	core.events.setVolume(core.getFlag("__volume__", 1), 0);
	// 加载勇士图标
	var icon = core.getFlag("heroIcon", "hero.png");
	icon = core.getMappedName(icon);
	if (core.material.images.images[icon]) {
		core.material.images.hero = core.material.images.images[icon];
		core.material.icons.hero.width = core.material.images.images[icon].width / 4;
		core.material.icons.hero.height = core.material.images.images[icon].height / 4;
	}
	// 刷新怪物数据
	core.updateEnemys();

	// 增加自己的一些读档处理
	// 隐身药水
	if (core.getFlag('invisible', 0) == 1) {
		core.setOpacity('hero', 0.5);
	} else {
		core.setOpacity('hero', 1);
	}
	// 给11区和12区地图parallelDo用的
	core.setFlag('lastTime', 0);
	core.setFlag('lastWeatherTime', 0);


	// 切换到对应的楼层
	core.changeFloor(data.floorId, null, data.hero.loc, 0, function () {
		// TODO：可以在这里设置读档后播放BGM
		// if (core.getFlag("bgm", 0)==1) core.playBgm("bgm.mp3");

		if (callback) callback();
	}, true);
},
        "updateStatusBar": function () {
	// 更新状态栏

	// 检查等级
	core.events.checkLvUp();

	// 检查HP上限
	if (core.flags.enableHPMax && core.getStatus('hpmax') >= 0) {
		core.setStatus('hp', Math.min(core.getStatus('hpmax'), core.getStatus('hp')));
	}

	// 设置楼层名
	if (core.status.floorId) {
		core.setStatusBarInnerHTML('floor', core.status.maps[core.status.floorId].name);
	}

	// 设置勇士名字和图标
	core.setStatusBarInnerHTML('name', core.getStatus('name'));
	// 设置等级名称
	core.setStatusBarInnerHTML('lv', core.getLvName());

	// 设置生命上限、生命值、攻防魔防金币和经验值
	var statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'experience'];
	statusList.forEach(function (item) {
		// 向下取整
		core.status.hero[item] = Math.floor(core.status.hero[item]);
		// 大数据格式化
		core.setStatusBarInnerHTML(item, core.getRealStatus(item));
		// 额外攻防
		if (item == 'atk') {
			var green_atk = 0;
			if (core.hasItem('I_ex_atk')) {
				green_atk += core.getFlag("lastAtk", 0) * 0.1;
			}
			// 冲锋
			if (core.hasItem('I_charge') || core.hasItem('I_charge2')) {
				green_atk += core.getFlag('charge_atk', 0);
			}

			green_atk = Math.floor(green_atk);
			core.setFlag('greenAtk', green_atk);
			var total_atk = core.getRealStatus(item) + green_atk;
			core.setStatusBarInnerHTML(item, core.formatBigNumber(total_atk));
		} else if (item == 'def' && core.hasItem('I_ex_def')) {
			core.setStatusBarInnerHTML(item, core.formatBigNumber(core.getRealStatus(item)) +
				'<font color="#00FF00">+' + String(Math.floor(core.getFlag("lastDef", 0) * 0.2)) + '</font>');
		}
	});

	// 设置魔力值
	if (core.flags.enableMana) {
		// status:manamax 只有在非负时才生效。
		if (core.status.hero.manamax != null && core.status.hero.manamax >= 0) {
			core.status.hero.mana = Math.min(core.status.hero.mana, core.status.hero.manamax);
			core.setStatusBarInnerHTML('mana', core.status.hero.mana + "/" + core.status.hero.manamax);
		} else {
			core.setStatusBarInnerHTML("mana", core.status.hero.mana);
		}
	}
	// 设置技能栏
	if (core.flags.enableSkill) {
		// 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
		core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));
	}

	// 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
	// if (core.hasFlag('halfAtk')) core.setStatusBarInnerHTML('atk', core.statusBar.atk.innerText + "+0.5");

	// 如果是自定义添加的状态栏，也需要在这里进行设置显示的数值

	// 进阶
	if (core.flags.enableLevelUp && core.status.hero.lv < core.firstData.levelUp.length) {
		var need = core.calValue(core.firstData.levelUp[core.status.hero.lv].need);
		if (core.flags.levelUpLeftMode)
			core.setStatusBarInnerHTML('up', core.formatBigNumber(need - core.getStatus('experience')) || "");
		else
			core.setStatusBarInnerHTML('up', core.formatBigNumber(need) || "");
	} else core.setStatusBarInnerHTML('up', "");

	// 钥匙
	var keys = ['yellowKey', 'blueKey', 'redKey'];
	keys.forEach(function (key) {
		core.setStatusBarInnerHTML(key, core.setTwoDigits(core.itemCount(key)));
	});
	// 毒衰咒
	if (core.flags.enableDebuff) {
		if (core.getFlag('poison_stack', 0)) {
			core.setStatusBarInnerHTML('poison', "毒 " + core.getFlag('poison_stack', 0));
		} else { // 光暗buff
			var dark_stack = core.getFlag('dark', 0);
			if (dark_stack > 0) {
				core.setStatusBarInnerHTML('poison', "暗 " + dark_stack, "color: black");
			} else if (dark_stack < 0) {
				core.setStatusBarInnerHTML('poison', "光 " + (-dark_stack), "color: white");
			} else {
				core.setStatusBarInnerHTML('poison', "");
			}
		}
		if (core.getFlag('weak_stack', 0) > 0) {
			core.setStatusBarInnerHTML('weak', "衰 " + core.getFlag('weak_stack', 0));
		} else {
			core.setStatusBarInnerHTML('weak', "");
		}
		core.setStatusBarInnerHTML('curse', core.getFlag('curse_stack', 0) > 0 ? "寒 " + core.getFlag('curse_stack', 0) : "", "color: #6C87FF");
	}
	// 破炸飞
	if (core.flags.enablePZF) {
		core.setStatusBarInnerHTML('pickaxe', "破" + core.itemCount('pickaxe'));
		core.setStatusBarInnerHTML('bomb', "炸" + core.itemCount('bomb'));
		core.setStatusBarInnerHTML('fly', "飞" + core.itemCount('centerFly'));
	}

	// 难度
	core.statusBar.hard.innerHTML = core.status.hard;
	// 自定义状态栏绘制
	core.drawStatusBar();

	// 更新阻激夹域的伤害值
	core.updateCheckBlock();
	// 更新全地图显伤
	core.updateDamage();
},
        "updateCheckBlock": function (floorId) {
	// 领域、夹击、阻击等的伤害值计算
	floorId = floorId || core.status.floorId;
	if (!floorId || !core.status.maps) return;

	var width = core.floors[floorId].width,
		height = core.floors[floorId].height;
	var blocks = core.getMapBlocksObj(floorId);

	var damage = {}, // 每个点的伤害值
		type = {}, // 每个点的伤害类型
		snipe = {}, // 每个点的阻击怪信息
		ambush = {}; // 每个点的捕捉信息

	// 计算血网和领域、阻击、激光的伤害，计算捕捉信息
	for (var loc in blocks) {
		var block = blocks[loc],
			x = block.x,
			y = block.y,
			id = block.event.id,
			enemy = core.material.enemys[id];

		// 血网
		if (id == 'lavaNet' && block.event.trigger == 'passNet' && !core.hasItem('shoes')) {
			damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
			type[loc] = "血网伤害";
		}

		// 领域
		// 如果要防止领域伤害，可以直接简单的将 flag:no_zone 设为true
		if (enemy && !core.hasFlag('no_zone') && (core.hasSpecial(enemy.special, 15) || core.hasSpecial(enemy.special, 123) || core.hasSpecial(enemy.special, 125) || core.hasSpecial(enemy.special, 134))) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					if (core.hasSpecial(enemy.special, 15))
						damage[currloc] = (damage[currloc] || 0) + (enemy.value || 0);
					else if (core.hasSpecial(enemy.special, 123))
						damage[currloc] = (damage[currloc] || 0) + Math.floor(core.getRealStatusOrDefault(core.status.hero, 'hpmax') * enemy.value / 100 || 0);
					else if (core.hasSpecial(enemy.special, 125))
						damage[currloc] = (damage[currloc] || 0) + Math.floor(core.status.hero.hp * enemy.value / 100 || 0);
					else if (core.hasSpecial(enemy.special, 134))
						damage[currloc] = Math.max((damage[currloc] || 0), core.status.hero.hp - 1);
					type[currloc] = "领域伤害";
				}
			}
		}

		// 阻击
		// 如果要防止阻击伤害，可以直接简单的将 flag:no_snipe 设为true
		if (enemy && !core.hasFlag('no_snipe') && (core.hasSpecial(enemy.special, 18) || core.hasSpecial(enemy.special, 135))) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				if (core.hasSpecial(enemy.special, 18))
					damage[currloc] = (damage[currloc] || 0) + (enemy.value || 0);
				else if (core.hasSpecial(enemy.special, 135))
					damage[currloc] = Math.max((damage[currloc] || 0), core.status.hero.hp - 1);
				type[currloc] = "阻击伤害";

				var rdir = core.reverseDirection(dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + core.utils.scan[rdir].x,
					rny = y + core.utils.scan[rdir].y;
				if (rnx >= 0 && rnx < width && rny >= 0 && rny < height && core.getBlock(rnx, rny, floorId) == null) {
					snipe[currloc] = (snipe[currloc] || []).concat([
						[x, y, id, rdir]
					]);
				}
			}
		}

		// 激光
		// 如果要防止激光伤害，可以直接简单的将 flag:no_laser 设为true
		if (enemy && !core.hasFlag("no_laser") && (core.hasSpecial(enemy.special, 24) || core.hasSpecial(enemy.special, 136))) {
			for (var nx = 0; nx < width; nx++) {
				var currloc = nx + "," + y;
				if (nx != x) {
					if (core.hasSpecial(enemy.special, 24))
						damage[currloc] = (damage[currloc] || 0) + (enemy.value || 0);
					else if (core.hasSpecial(enemy.special, 136))
						damage[currloc] = Math.max((damage[currloc] || 0), core.status.hero.hp - 1);
					type[currloc] = "激光伤害";
				}
			}
			for (var ny = 0; ny < height; ny++) {
				var currloc = x + "," + ny;
				if (ny != y) {
					if (core.hasSpecial(enemy.special, 24))
						damage[currloc] = (damage[currloc] || 0) + (enemy.value || 0);
					else if (core.hasSpecial(enemy.special, 136))
						damage[currloc] = Math.max((damage[currloc] || 0), core.status.hero.hp - 1);
					type[currloc] = "激光伤害";
				}
			}
		}

		// 捕捉
		// 如果要防止捕捉效果，可以直接简单的将 flag:no_ambush 设为true
		if (enemy && core.enemys.hasSpecial(enemy.special, 27) && !core.hasFlag("no_ambush")) {
			// 给周围格子加上【捕捉】记号
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				ambush[currloc] = (ambush[currloc] || []).concat([
					[x, y, id, dir]
				]);
			}
		}
	}

	// 更新夹击伤害
	// 如果要防止夹击伤害，可以简单的将 flag:no_betweenAttack 设为true
	if (!core.hasFlag('no_betweenAttack')) {
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				var loc = x + "," + y;
				var type = 0;
				// 夹击怪物的ID
				var enemyId = null;
				// 检查左右夹击
				var leftBlock = blocks[(x - 1) + "," + y],
					rightBlock = blocks[(x + 1) + "," + y];
				if (leftBlock && rightBlock && leftBlock.id == rightBlock.id) {
					if (core.hasSpecial(leftBlock.event.id, 16)) {
						enemyId = leftBlock.event.id;
						type = 0;
					} else if (core.hasSpecial(leftBlock.event.id, 101)) {
						enemyId = leftBlock.event.id;
						type = 1;
					}
				}
				// 检查上下夹击
				var topBlock = blocks[x + "," + (y - 1)],
					bottomBlock = blocks[x + "," + (y + 1)];
				if (topBlock && bottomBlock && topBlock.id == bottomBlock.id) {
					if (core.hasSpecial(topBlock.event.id, 16)) {
						enemyId = topBlock.event.id;
						type = 0;
					} else if (core.hasSpecial(topBlock.event.id, 101)) {
						enemyId = topBlock.event.id;
						type = 1;
					}
				}

				if (enemyId != null) {
					damage[loc] = damage[loc] || 0;
					var leftHp = core.status.hero.hp - damage[loc];
					if (leftHp > 1) {
						if (type == 1) { // 夹爆
							damage[loc] = Math.max(damage[loc], core.status.hero.hp - 1);
						} else {
							// 上整/下整
							var value = Math.floor((leftHp + (core.flags.betweenAttackCeil ? 1 : 0)) / 2);
							// 是否不超过怪物伤害值
							if (core.flags.betweenAttackMax) {
								var enemyDamage = core.getDamage(enemyId, x, y, floorId);
								if (enemyDamage != null && enemyDamage < value)
									value = enemyDamage;
							}
							damage[loc] += value;
						}
						type[loc] = "夹击伤害";
					}
				}
			}
		}
	}

	core.status.checkBlock = {
		damage: damage,
		type: type,
		snipe: snipe,
		ambush: ambush,
		cache: {} // clear cache
	};
},
        "moveOneStep": function (x, y) {
	// 勇士每走一步后执行的操作，x,y为要移动到的坐标。
	// 这个函数执行在“刚走完”的时候，即还没有检查该点的事件和领域伤害等。
	// 请注意：瞬间移动不会执行该函数。如果要控制能否瞬间移动有三种方法：
	// 1. 将全塔属性中的cannotMoveDirectly这个开关勾上，即可在全塔中全程禁止使用瞬移。
	// 2, 将楼层属性中的cannotMoveDirectly这个开关勾上，即禁止在该层楼使用瞬移。
	// 3. 将flag:cannotMoveDirectly置为true，即可使用flag控制在某段剧情范围内禁止瞬移。

	if (core.hasItem('I_charge')) {
		var charge_point = core.getFlag('charge_point', 5);
		var last_direction = core.getFlag('last_direction', null);
		var cur_direction = core.status.hero.loc.direction;
		if (last_direction != cur_direction) {
			core.setFlag('charge_atk', 0);
		}
		var charge_atk = core.getFlag('charge_atk', 0);
		core.setFlag('charge_atk', charge_atk + charge_point);
		core.setFlag('last_direction', cur_direction);
	} else if (core.hasItem('I_charge2')) {
		var charge_ratio = core.getFlag('charge_ratio', 0.02);
		var last_direction = core.getFlag('last_direction', null);
		var cur_direction = core.status.hero.loc.direction;
		if (last_direction != cur_direction) {
			core.setFlag('charge_atk', 0);
			core.setFlag('charge2_battle_extra_cur', 0);
		}
		var charge_atk = core.getFlag('charge_atk', 0);
		core.setFlag('charge_atk', charge_atk + charge_ratio * core.status.hero.atk);
		core.setFlag('last_direction', cur_direction);
	}

	// 设置当前坐标，增加步数
	core.setHeroLoc('x', x, true);
	core.setHeroLoc('y', y, true);
	core.status.hero.steps++;
	// 更新跟随者状态，并绘制
	core.updateFollowers();
	core.drawHero();
	// 检查中毒状态的扣血和死亡
	if (core.hasFlag('poison')) {
		core.status.hero.statistics.poisonDamage += core.values.poisonDamage;
		core.status.hero.hp -= core.values.poisonDamage;
		if (core.status.hero.hp <= 0) {
			core.status.hero.hp = 0;
			core.updateStatusBar();
			core.events.lose();
			return;
		}
	}
	// 如需强行终止行走可以在这里条件判定：
	// core.stopAutomaticRoute();

	core.updateStatusBar();
},
        "moveDirectly": function (x, y) {
	// 瞬间移动；x,y为要瞬间移动的点
	// 返回true代表成功瞬移，false代表没有成功瞬移

	// 判定能否瞬移到该点
	var ignoreSteps = core.canMoveDirectly(x, y);
	if (ignoreSteps >= 0) {
		core.clearMap('hero');
		// 获得勇士最后的朝向
		var lastDirection = core.status.route[core.status.route.length - 1];
		if (['left', 'right', 'up', 'down'].indexOf(lastDirection) >= 0)
			core.setHeroLoc('direction', lastDirection);
		// 设置坐标，并绘制
		core.setHeroLoc('x', x);
		core.setHeroLoc('y', y);
		core.drawHero();
		// 记录录像
		core.status.route.push("move:" + x + ":" + y);
		// 统计信息
		core.status.hero.statistics.moveDirectly++;
		core.status.hero.statistics.ignoreSteps += ignoreSteps;

		// 清空冲锋flag
		core.setFlag('charge_atk', 0);
		core.setFlag('charge2_battle_extra_cur', 0);
		core.updateStatusBar();
		return true;
	}
	return false;
},
        "parallelDo": function (timestamp) {
	// 并行事件处理，可以在这里写任何需要并行处理的脚本或事件
	// 该函数将被系统反复执行，每次执行间隔视浏览器或设备性能而定，一般约为16.6ms一次
	// 参数timestamp为“从游戏资源加载完毕到当前函数执行时”的时间差，以毫秒为单位

	// 检查当前是否处于游戏开始状态
	if (!core.isPlaying()) return;

	// 执行当前楼层的并行事件处理
	if (core.status.floorId) {
		try {
			eval(core.floors[core.status.floorId].parallelDo);
		} catch (e) {
			main.log(e);
		}
	}

	// 下面是一个并行事件开门的样例
	/*
	// 如果某个flag为真
	if (core.hasFlag("xxx")) {
	    // 千万别忘了将该flag清空！否则下次仍然会执行这段代码。
	    core.removeFlag("xxx");
	    // 使用insertAction来插入若干自定义事件执行
	    core.insertAction([
	        {"type":"openDoor", "loc":[0,0], "floorId": "MT0"}
	    ])
	    // 也可以写任意其他的脚本代码
	}
	*/
}
    },
    "ui": {
        "drawStatusBar": function () {
	// 自定义绘制状态栏，需要开启状态栏canvas化

	// 如果是非状态栏canvas化，直接返回
	if (!core.flags.statusCanvas) return;
	var canvas = core.dom.statusCanvas,
		ctx = core.dom.statusCanvasCtx;
	// 清空状态栏
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 如果是隐藏状态栏模式，直接返回
	if (!core.domStyle.showStatusBar) return;

	// 作为样板，只绘制楼层、生命、攻击、防御、魔防、金币、钥匙这七个内容
	// 需要其他的请自行进行修改；横竖屏都需要进行适配绘制。
	// （可以使用Chrome浏览器开控制台来模拟手机上的竖屏模式的显示效果，具体方式自行百度）
	// 横屏模式下的画布大小是 129*416
	// 竖屏模式下的画布大小是 416*(32*rows+9) 其中rows为状态栏行数，即全塔属性中statusCanvasRowsOnMobile值
	// 可以使用 core.domStyle.isVertical 来判定当前是否是竖屏模式

	ctx.fillStyle = core.status.globalAttribute.statusBarColor || core.initStatus.globalAttribute.statusBarColor;
	ctx.font = 'italic bold 18px Verdana';

	// 距离左侧边框6像素，上侧边框9像素，行距约为39像素
	var leftOffset = 6,
		topOffset = 9,
		lineHeight = 39;
	if (core.domStyle.isVertical) { // 竖屏模式，行高32像素
		leftOffset = 6;
		topOffset = 6;
		lineHeight = 32;
	}

	var toDraw = ["floor", "hp", "atk", "def", "mdef", "money"];
	for (var index = 0; index < toDraw.length; index++) {
		// 绘制下一个数据
		var name = toDraw[index];
		// 图片大小25x25
		ctx.drawImage(core.statusBar.icons[name], leftOffset, topOffset, 25, 25);
		// 文字内容
		var text = (core.statusBar[name] || {}).innerText || " ";
		// 斜体判定：如果不是纯数字和字母，斜体会非常难看，需要取消
		if (!/^[-a-zA-Z0-9`~!@#$%^&*()_=+\[{\]}\\|;:'",<.>\/?]*$/.test(text))
			ctx.font = 'bold 18px Verdana';
		// 绘制文字
		ctx.fillText(text, leftOffset + 36, topOffset + 20);
		ctx.font = 'italic bold 18px Verdana';
		// 计算下一个绘制的坐标
		if (core.domStyle.isVertical) {
			// 竖屏模式
			if (index % 3 != 2) leftOffset += 131;
			else {
				leftOffset = 6;
				topOffset += lineHeight;
			}
		} else {
			// 横屏模式
			topOffset += lineHeight;
		}
	}
	// 绘制三色钥匙
	ctx.fillStyle = '#FFCCAA';
	ctx.fillText(core.statusBar.yellowKey.innerText, leftOffset + 5, topOffset + 20);
	ctx.fillStyle = '#AAAADD';
	ctx.fillText(core.statusBar.blueKey.innerText, leftOffset + 40, topOffset + 20);
	ctx.fillStyle = '#FF8888';
	ctx.fillText(core.statusBar.redKey.innerText, leftOffset + 75, topOffset + 20);
},
        "drawStatistics": function () {
	// 浏览地图时参与的统计项目

	return [
		'yellowDoor', 'blueDoor', 'redDoor', 'greenDoor', 'steelDoor',
		'yellowKey', 'blueKey', 'redKey', 'greenKey', 'steelKey',
		'redJewel', 'blueJewel', 'greenJewel', 'yellowJewel',
		'I349', 'I350', 'I351', 'I352', 'I353', 'I354', 'I355', 'I356',
		'I357', 'I358', 'I359', 'I360',
		'redPotion', 'bluePotion', 'yellowPotion', 'greenPotion', 'superPotion',
		'I454', 'I455', 'I456', 'I457',
		//'pickaxe', 'bomb', 'centerFly', 'icePickaxe', 'snow',
		//'earthquake', 'upFly', 'downFly', 'jumpShoes', 'lifeWand',
		//'poisonWine', 'weakWine', 'curseWine', 'superWine',
		//'sword1', 'sword2', 'sword3', 'sword4', 'sword5',
		//'shield1', 'shield2', 'shield3', 'shield4', 'shield5',
		// 在这里可以增加新的ID来进行统计个数，只能增加道具ID
	];
},
        "drawAbout": function() {
	// 绘制“关于”界面
	core.ui.closePanel();
	core.lockControl();
	core.status.event.id = 'about';

	var left = 48, top = 36, right = core.__PIXELS__ - 2 * left, bottom = core.__PIXELS__ - 2 * top;

	core.setAlpha('ui', 0.85);
	core.fillRect('ui', left, top, right, bottom, '#000000');
	core.setAlpha('ui', 1);
	core.strokeRect('ui', left - 1, top - 1, right + 1, bottom + 1, '#FFFFFF', 2);

	var text_start = left + 24;

	// 名称
	core.setTextAlign('ui', 'left');
	var globalFont = (core.status.globalAttribute||core.initStatus.globalAttribute).font;
	core.fillText('ui', "HTML5 魔塔样板", text_start, top+35, "#FFD700", "bold 22px "+globalFont);
	core.fillText('ui', "版本： "+main.__VERSION__, text_start, top + 80, "#FFFFFF", "bold 17px "+globalFont);
	core.fillText('ui', "作者： 艾之葵", text_start, top + 112);
	core.fillText('ui', 'HTML5魔塔交流群：539113091', text_start, top+112+32);
	// TODO: 写自己的“关于”页面，每次增加32像素即可
}
    }
}
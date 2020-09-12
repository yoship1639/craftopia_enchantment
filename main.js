$(function()
{
	var materialList = {
			1: "銅鉱石",
			2: "鉄鉱石",
			3: "銀鉱石",
			4: "チタン鉱石",
			5: "金鉱石",
			6: "プラチナ鉱石",

			100: "銅インゴット",
			101: "鉄インゴット",
			102: "銀インゴット",
			103: "鋼鉄インゴット",
			104: "チタンインゴット",
			105: "金インゴット",
			106: "プラチナインゴット",

			200: "原木",
			201: "石",
			202: "砂",
			203: "わら",
			204: "木炭",
			205: "羊毛",
			206: "革",
			207: "牙",
			208: "骨",
			209: "爪",
			210: "鳥の羽根",
			211: "硫黄",
			212: "硝石",
			213: "水晶",
			214: "角",
			215: "コハク",
			216: "ガラス",
			217: "黒色火薬",
			218: "貝",
			219: "卵",
			220: "きのこ",
			221: "高級切り身",
			222: "魚の切り身",
		};

	var itemList = [
		{
			id: 1,
			name: "【頭】角の頭飾り",
			materials: [
				{ id: 100, count: 3},
				{ id: 206, count: 5},
				{ id: 210, count: 2},
				{ id: 214, count: 2},
				{ id: 205, count: 2},
			],
		},
		{
			id: 2,
			name: "【頭】マジカル帽子",
			materials: [
				{ id: 205, count: 5},
				{ id: 210, count: 1},
				{ id: 215, count: 1},
			],
		},
		{
			id: 3,
			name: "【頭】レンジャーの帽子",
			materials: [
				{ id: 206, count: 3},
				{ id: 210, count: 2},
				{ id: 209, count: 2},
			],
		},
		{
			id: 4,
			name: "【頭】きらめく王冠",
			materials: [
				{ id: 205, count: 3},
				{ id: 105, count: 30},
				{ id: 213, count: 2},
			],
		},
		{
			id: 5,
			name: "【頭】赤いベレー帽",
			materials: [
				{ id: 205, count: 3},
				{ id: 206, count: 3},
				{ id: 101, count: 2},
			],
		},
		{
			id: 100,
			name: "【体】ケープ",
			materials: [
				{ id: 206, count: 20},
			],
		},
		{
			id: 101,
			name: "【体】ライトアーマー",
			materials: [
				{ id: 206, count: 20},
				{ id: 101, count: 20},
			],
		},
		{
			id: 200,
			name: "【アクセサリー】ベル",
			materials: [
				{ id: 101, count: 8},
				{ id: 102, count: 5},
			],
		},
		{
			id: 201,
			name: "【アクセサリー】探知機",
			materials: [
				{ id: 201, count: 1},
				{ id: 100, count: 1},
			],
		},
		{
			id: 202,
			name: "【アクセサリー】鉄のリング",
			materials: [
				{ id: 101, count: 5},
				{ id: 216, count: 3},
			],
		},
		{
			id: 203,
			name: "【アクセサリー】鉄のアミュレット",
			materials: [
				{ id: 101, count: 5},
				{ id: 216, count: 3},
			],
		},
		{
			id: 204,
			name: "【アクセサリー】熱血のアミュレット",
			materials: [
				{ id: 217, count: 1},
				{ id: 214, count: 1},
				{ id: 208, count: 1},
				{ id: 103, count: 2},
			],
		},
		{
			id: 205,
			name: "【アクセサリー】免疫のアミュレット",
			materials: [
				{ id: 218, count: 3},
				{ id: 219, count: 3},
				{ id: 220, count: 3},
				{ id: 103, count: 2},
			],
		},
		{
			id: 206,
			name: "【アクセサリー】冷徹のアミュレット",
			materials: [
				{ id: 221, count: 1},
				{ id: 222, count: 1},
				{ id: 218, count: 1},
				{ id: 103, count: 2},
			],
		},
		{
			id: 300,
			name: "【グライダー】石のグライダー",
			materials: [
				{ id: 201, count: 6},
				{ id: 200, count: 8},
			],
		},
		{
			id: 400,
			name: "【盾】銅の盾",
			materials: [
				{ id: 100, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 401,
			name: "【盾】鉄の盾",
			materials: [
				{ id: 101, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 402,
			name: "【盾】銀の盾",
			materials: [
				{ id: 102, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 403,
			name: "【盾】鋼鉄の盾",
			materials: [
				{ id: 103, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 404,
			name: "【盾】チタンの盾",
			materials: [
				{ id: 104, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 405,
			name: "【盾】金の盾",
			materials: [
				{ id: 105, count: 10},
				{ id: 200, count: 10},
			],
		},
		{
			id: 406,
			name: "【盾】プラチナの盾",
			materials: [
				{ id: 106, count: 10},
				{ id: 200, count: 10},
			],
		},
	];

	var enchantmentList = [
		{ id: 0, name: ""},
		{ id: 1, name: "乾いた" },
		{ id: 2, name: "強い乾いた" },
		{ id: 3, name: "灼熱の" },
		{ id: 4, name: "強い灼熱の" },
		{ id: 5, name: "凍てつく" },
		{ id: 6, name: "真紅の" },
		{ id: 7, name: "歴戦の" },
		{ id: 8, name: "危険な" },
		{ id: 9, name: "アックス" },
		{ id: 10, name: "リザード" },
		{ id: 11, name: "ソード" },
		{ id: 12, name: "ドラゴンの" },
		{ id: 13, name: "小妖精の" },
		{ id: 14, name: "小精霊の" },
		{ id: 15, name: "炎の精霊の" },
		{ id: 16, name: "炎の悪魔の" },
		{ id: 17, name: "女神の" },
		{ id: 18, name: "古代の" },
		{ id: 19, name: "キリンの" },
		{ id: 20, name: "クマの" },
		{ id: 21, name: "オオカミの" },
		{ id: 22, name: "バッファローの" },
		{ id: 23, name: "ゾウの" },
		{ id: 24, name: "シカの" },
		{ id: 25, name: "ウミネコの" },
		{ id: 26, name: "ラクダの" },
		{ id: 27, name: "ヤシの" },
		{ id: 28, name: "スケルトン" },
	]

	// アイテム追加
	itemList.forEach(item =>
	{
		$("#item_list").append($('<option>').val(item.id).text(item.name));
	});

	// アイテム選択変更時
	$('#item_list').change(function()
	{
		var id = $('option:selected').val();
		onItemListChanged(id);
	});

	onItemListChanged(1);

	function onItemListChanged(id)
	{
		$('#material_list').empty();

		var item = itemList.find(i => i.id == id);
		var matSum = 0;
		var selectedEnchantList = [0];
		item.materials.forEach((mat, i) =>
		{
			matSum += mat.count;

			var matId = "mat_" + i;
			$('#material_list').append($('<div>').attr("id", "mat_" + i).attr("class", "content"));
			$('#' + matId).append($('<label>').attr("class", "label").text(materialList[mat.id] + " x" + mat.count));
			$('#' + matId).append($('<div>').attr("class", "columns is-mobile is-multiline is-centered"));
			for (var j = 0; j < 4; j++)
			{
				var div = $('#' + matId).children('div');
				div.append(
					$('<div>').attr("class", "column is-one-quarter").append(
						createEnchantSelectDOM(i, j)
					));

				enchantmentList.forEach(e =>
				{
					$("#enchant_" + i + "_" + j).append($('<option>').val(e.id).text(e.name));
				});

				$("#enchant_" + i + "_" + j).change(function()
				{
					selectedEnchantList = [0];
					for (var m = 0; m <item.materials.length; m++)
					{
						for (var e = 0; e < 4; e++)
						{
							var enId = $("#enchant_" + m + "_" + e).val();
							if(enId != 0 && selectedEnchantList.findIndex(se => se == enId) == -1)
							{
								selectedEnchantList.push(enId);
							}
						}
					}
					onSelectedEnchantChanged();
				});
			}
		});

		onSelectedEnchantChanged();

		// 素材のエンチャントを選択しなおした時
		function onSelectedEnchantChanged()
		{
			$('#require_list').empty();
			$('#require_list').attr("class", "columns is-mobile is-multiline is-centered");
			for (var i = 0; i < 4; i++)
			{
				$('#require_list').append(
					$('<div>').attr("class", "column is-one-quarter").append(
						createSelectedEnchantSelectDOM(i)
					));

				selectedEnchantList.forEach(id =>
				{
					$("#require_enchant_" + i).append($('<option>').val(id).text(enchantmentList[id].name));
				});

				$("#require_enchant_" + i).change(function()
				{
					onRequireEnchantChanged();
				});
			}
		}

		onRequireEnchantChanged()

		// 付けたいエンチャントを選択しなおした時
		function onRequireEnchantChanged()
		{
			var requireIdList = [];
			for (var i = 0; i < 4; i++)
			{
				var id = $("#require_enchant_" + i).val();
				if(id != 0 && requireIdList.findIndex(ri => ri == id) == -1)
				{
					requireIdList.push(id);
				}
			}

			// 確率の計算
			var res = 1.0;
			requireIdList.forEach(id =>
			{
				matNum = 0;
				for (var i = 0; i < item.materials.length; i++)
				{
					for (var j = 0; j < 4; j++)
					{
						var val = $("#enchant_" + i + "_" + j).val();
						if (val > 0 && val == id)
						{
							matNum += item.materials[i].count;
						}
					}
				}
				
				res *= matNum / matSum;
			});

			$('#result').text("成功確率 " + (Math.round(res * 10000.0) / 100.0) + "%");
		}
	}

	function createEnchantSelectDOM(matIndex, enchantIndex)
	{
		return $('<div>').attr("class", "field")
			.append($('<label>').text("エンチャント" + (enchantIndex + 1)))
			.append($('<div>').attr("class", "control").append(
				$('<div>').attr("class", "select").append(
					$('<select>').attr("id", "enchant_" + matIndex + "_" + enchantIndex)
				)));
	}

	function createSelectedEnchantSelectDOM(enchantIndex)
	{
		return $('<div>').attr("class", "field")
			.append($('<label>').text("エンチャント" + (enchantIndex + 1)))
			.append($('<div>').attr("class", "control").append(
				$('<div>').attr("class", "select").append(
					$('<select>').attr("id", "require_enchant_" + enchantIndex)
				)));
	}

	function combination(nums, k) {
		if (nums < k) return 0;
		if (k === 1) return nums;
	
		let ans_upper = 1, ans_lower = 1;
		for (let i = 0; i < k; i++) {
		  ans_upper *= nums - i;
		  ans_lower *= k - i;
		}
		return ans_upper / ans_lower;;
	}
});
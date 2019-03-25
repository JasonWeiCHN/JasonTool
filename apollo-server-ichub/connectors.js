import _ from 'lodash'; //lodash js 工具包
// Fake word generator
import faker from 'faker'; //随机数生成工具 类比 mockjs

// Let's generate some tags //先生成模拟数据
var id = 0;
var tags = []; //模拟数据的容器

var id_tabledata = 8;
var id_headdata = 1;

var walletHomeDatas = {
	'1001': {
		headdata: {
			id: 0,
			user_id: 1001,
			total_icc: '20000',
			total_cny: '2000',
		},
		tabledata: [{
				id: 0,
				user_id: 1001,
				tokenname: 'EOS', //币种
				totalasset: '32.7249', //总额
				available_balance: '32.7249', //可用余额
				frozen: '0.0000', //冻结
				lock: '0.0000', //锁仓
				estimated: '796.52', //资产估值
				withdraws_flag: 0,
				deposits_flag: 0,
				icon_url: 'imgs/EOS.png',
			},
			{
				id: 1,
				user_id: 1001,
				tokenname: 'BTC', //币种
				totalasset: '0.01231102', //总额
				available_balance: '0.01231102', //可用余额
				frozen: '0.00000000', //冻结
				lock: '0.00000000', //锁仓
				estimated: '323.23', //资产估值
				withdraws_flag: 0,
				deposits_flag: 1,
				icon_url: 'imgs/BTC.png',
			},
			{
				id: 2,
				user_id: 1001,
				tokenname: 'TRX', //币种
				totalasset: '178.645187', //总额
				available_balance: '178.645187', //可用余额
				frozen: '0.000000', //冻结
				lock: '0.000000', //锁仓
				estimated: '26.86', //资产估值
				withdraws_flag: 1,
				deposits_flag: 1,
				icon_url: 'imgs/TRX.png',
			},
			{
				id: 3,
				user_id: 1001,
				tokenname: 'IC', //币种
				totalasset: '100.00', //总额
				available_balance: '100.00', //可用余额
				frozen: '0.0000', //冻结
				lock: '0.0000', //锁仓
				estimated: '100.00', //资产估值
				withdraws_flag: 0,
				deposits_flag: 0,
				icon_url: 'imgs/IC.png',
			},
			{
				id: 4,
				user_id: 1001,
				tokenname: 'LLL', //币种
				totalasset: '10000000000.0000', //总额
				available_balance: '10000000000.0000', //可用余额
				frozen: '0.0000', //冻结
				lock: '0.0000', //锁仓
				estimated: '0.00', //资产估值
				withdraws_flag: 1,
				deposits_flag: 0,
				icon_url: 'imgs/LLL.png',
			},
			{
				id: 5,
				user_id: 1001,
				tokenname: 'KQB', //币种
				totalasset: '99999999999.9999', //总额
				available_balance: '99999999999.9999', //可用余额
				frozen: '0.0000', //冻结
				lock: '0.0000', //锁仓
				estimated: '0.00', //资产估值
				withdraws_flag: 0,
				deposits_flag: 1,
				icon_url: 'imgs/KQB.png',
			}
		]
	},
	'1002': {
		headdata: {
			id: 1,
			user_id: 1002,
			total_icc: '55550',
			total_cny: '5555',
		},
		tabledata: [
			{
				id: 6,
				user_id: 1002,
				tokenname: 'EOS', //币种
				totalasset: '162.8082', //总额
				available_balance: '142.8082', //可用余额
				frozen: '20.0000', //冻结
				lock: '0.0000', //锁仓
				estimated: '4070.205', //资产估值
				withdraws_flag: 0,
				deposits_flag: 0,
				icon_url: 'imgs/EOS.png',
			},
			{
				id: 7,
				user_id: 1002,
				tokenname: 'BTC', //币种
				totalasset: '0.21231102', //总额
				available_balance: '0.21231102', //可用余额
				frozen: '0.00000000', //冻结
				lock: '0.00000000', //锁仓
				estimated: '5742.86', //资产估值
				withdraws_flag: 0,
				deposits_flag: 0,
				icon_url: 'imgs/BTC.png',
			},
			{
				id: 8,
				user_id: 1002,
				tokenname: 'TRX', //币种
				totalasset: '18000.565555', //总额
				available_balance: '8000.565555', //可用余额
				frozen: '0.000000', //冻结
				lock: '10000.000000', //锁仓
				estimated: '2700.08', //资产估值
				withdraws_flag: 0,
				deposits_flag: 0,
				icon_url: 'imgs/TRX.png',
			},
		]
	}
}

//ichub 模拟数据
var assetlist = [{
		id: 0,
		user_id: 1001,
		tokenname: 'EOS', //币种
		totalasset: '32.7249', //总额
		available_balance: '32.7249', //可用余额
		frozen: '0.0000', //冻结
		lock: '0.0000', //锁仓
		estimated: '796.52', //资产估值
		withdraws_flag: 0,
		deposits_flag: 0,
		icon_url: 'imgs/EOS.png',
	},
	{
		id: 1,
		user_id: 1001,
		tokenname: 'BTC', //币种
		totalasset: '0.01231102', //总额
		available_balance: '0.01231102', //可用余额
		frozen: '0.00000000', //冻结
		lock: '0.00000000', //锁仓
		estimated: '323.23', //资产估值
		withdraws_flag: 0,
		deposits_flag: 1,
		icon_url: 'imgs/BTC.png',
	},
	{
		id: 2,
		user_id: 1001,
		tokenname: 'TRX', //币种
		totalasset: '178.645187', //总额
		available_balance: '178.645187', //可用余额
		frozen: '0.000000', //冻结
		lock: '0.000000', //锁仓
		estimated: '26.86', //资产估值
		withdraws_flag: 1,
		deposits_flag: 1,
		icon_url: 'imgs/TRX.png',
	},
	{
		id: 3,
		user_id: 1001,
		tokenname: 'IC', //币种
		totalasset: '100.00', //总额
		available_balance: '100.00', //可用余额
		frozen: '0.0000', //冻结
		lock: '0.0000', //锁仓
		estimated: '100.00', //资产估值
		withdraws_flag: 0,
		deposits_flag: 0,
		icon_url: 'imgs/IC.png',
	},
	{
		id: 4,
		user_id: 1001,
		tokenname: 'LLL', //币种
		totalasset: '10000000000.0000', //总额
		available_balance: '10000000000.0000', //可用余额
		frozen: '0.0000', //冻结
		lock: '0.0000', //锁仓
		estimated: '0.00', //资产估值
		withdraws_flag: 1,
		deposits_flag: 0,
		icon_url: 'imgs/LLL.png',
	},
	{
		id: 5,
		user_id: 1001,
		tokenname: 'KQB', //币种
		totalasset: '99999999999.9999', //总额
		available_balance: '99999999999.9999', //可用余额
		frozen: '0.0000', //冻结
		lock: '0.0000', //锁仓
		estimated: '0.00', //资产估值
		withdraws_flag: 0,
		deposits_flag: 1,
		icon_url: 'imgs/KQB.png',
	},
	{
		id: 6,
		user_id: 1002,
		tokenname: 'EOS', //币种
		totalasset: '162.8082', //总额
		available_balance: '142.8082', //可用余额
		frozen: '20.0000', //冻结
		lock: '0.0000', //锁仓
		estimated: '4070.205', //资产估值
		withdraws_flag: 0,
		deposits_flag: 0,
		icon_url: 'imgs/EOS.png',
	},
	{
		id: 7,
		user_id: 1002,
		tokenname: 'BTC', //币种
		totalasset: '0.21231102', //总额
		available_balance: '0.21231102', //可用余额
		frozen: '0.00000000', //冻结
		lock: '0.00000000', //锁仓
		estimated: '5742.86', //资产估值
		withdraws_flag: 0,
		deposits_flag: 0,
		icon_url: 'imgs/BTC.png',
	},
	{
		id: 8,
		user_id: 1002,
		tokenname: 'TRX', //币种
		totalasset: '18000.565555', //总额
		available_balance: '8000.565555', //可用余额
		frozen: '0.000000', //冻结
		lock: '10000.000000', //锁仓
		estimated: '2700.08', //资产估值
		withdraws_flag: 0,
		deposits_flag: 0,
		icon_url: 'imgs/TRX.png',
	},
]

for (let i = 0; i < 42; i++) {
	if (Math.random() < .5) {
		addTag('City', faker.address.city()); //faker生成城市数据
	} else {
		addTag('Company', faker.company.companyName()); //faker生成公司数据
	}
}

//抛出方法 添加标签
function addTag(type, label) {
	return new Promise(resolve => {
		setTimeout(() => {
			let t = {
				id: id++,
				label,
				type,
			};
			tags.push(t);
			resolve(t);
		}, 2000);
	});
}

//抛出方法 添加资产列表数据
function addWalletTable(user_id,tokenname,totalasset,available_balance,frozen,lock,estimated,withdraws_flag,deposits_flag,icon_url) {
	return new Promise(resolve => {
		setTimeout(() => {
			let t = {
				id: id_tabledata++,//这个应该后台自动生成
				user_id,
				tokenname, //币种
				totalasset, //总额
				available_balance, //可用余额
				frozen, //冻结
				lock, //锁仓
				estimated, //资产估值
				withdraws_flag,
				deposits_flag,
				icon_url,
			};
			walletHomeDatas[user_id].tabledata.push(t);
			resolve(t);
		}, 2000);
	});
}

//抛出方法 修改资产总额
function updateWalletHeader(user_id, total_cny) {
	return new Promise(resolve => {
		setTimeout(() => {
			walletHomeDatas[user_id].headdata.total_cny = total_cny;
			resolve(walletHomeDatas[user_id].headdata);
		}, 2000);
	});
}

function fakeDelay(cb) { //cb 回调
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cb()) //resolve 即 Promise的resolve 参数是一个方法
		}, 2000)
	})
}

export default { //这个库在 schema.js 中被用到
	getWalletHomeData(user_id) {
		return walletHomeDatas[user_id];
	},
	getAssets() {
		return assetlist;
	},
	getTags(type) {
		return fakeDelay(() => _.filter(tags, tag => tag.type === type))
	},
	getTagsPage(page, pageSize) {
		return fakeDelay(() => {
			const start = page * pageSize;
			const end = start + pageSize;
			return {
				tags: tags.slice(start, end),
				hasMore: end < tags.length,
			};
		})
	},
	getRandomTag() {
		return tags[Math.round(Math.random() * (tags.length - 1))];
	},
	getLastTag() {
		return tags[tags.length - 1];
	},
	addTag,
	addWalletTable,
	updateWalletHeader,
};

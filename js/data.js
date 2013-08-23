DATA={
	menu:[{//一级菜单
		menuid:'m001',
		name:'导航',
		code:'m001',
		icon:'images/home.png'
	}/*,{
		menuid:'m002',
		name:'邮件',
		code:'m002',
		icon:'images/email.png'
	},{
		menuid:'m003',
		name:'文件夹',
		code:'m003',
		icon:'images/portfolio.png'
	},{
		menuid:'m004',
		name:'音乐',
		code:'m004',
		icon:'images/music.png'
	},{
		menuid:'m005',
		name:'视频',
		code:'m005',
		icon:'images/video.png'
	},{
		menuid:'m006',
		name:'备忘录',
		code:'m006',
		icon:'images/history.png'
	},{
		menuid:'m007',
		name:'日历',
		code:'m007',
		icon:'images/calendar.png'
	},{
		menuid:'m008',
		name:'RSS',
		code:'m008',
		icon:'images/rss.png'
	}*/],
	app:{//桌面1
		'car_management':{
			appid:'2534',
			icon:'car_management.png',
			name:'车辆管理',
			url:'pages/car_management.html',
			sonMenu:"[]",
			//sonMenu:"[]",
			/*sonMenu:"[{"+
				"'appid':'8856',"+
				"'icon':'sosomap.png',"+
				"'name':'搜搜地图',"+
				"'url':'http://www.jq-school.com/'"+
			"},{"+
				"appid:'8857',"+
				"icon:'time.png',"+
				"name:'时钟',"+
				"url:'http://www.jq-school.com/'"+
			"},{"+
				"appid:'8858',"+
				"icon:'jinshan.png',"+
				"name:'金山快盘',"+
				"url:'http://www.jq-school.com/'"+
			"}]",//*/
			asc :1

		},
		'port_management':{
			appid:'42',
			icon:'port_management.png',
			name:'监控点管理',
			url:'pages/port_management.html',
			sonMenu:"[]",
			/*sonMenu:"[{"+
				"'appid':'10010',"+
				"'icon':'fastsearch.png',"+
				"'name':'快递查询',"+
				"'enname':'fastsearch',"+
				"'url':'http://www.jq-school.com/',"+
				"'asc' :1"+
			"},{"+
				"appid:'10011',"+
				"icon:'doudizhu.png',"+
				"enname:'doudizhu',"+
				"name:'欢乐斗地主',"+
				"url:'http://www.jq-school.com/',"+
				"asc :2"+
			"}]",*/
			asc :2
		},
		'device':{
			appid:'8992',
			icon:'device.png',
			name:'设备管理',
			url:'pages/device.html',
			sonMenu:"[]",
			asc :3
		},
		'bukong':{
			appid:'3402',
			icon:'bukong.png',
			name:'布控管理',
			url:'pages/bukong.html',
			sonMenu:"[]",
			asc :4
		},
		'illegal_info':{
			appid:'64',
			icon:'illegal_info.png',
			name:'违法信息',
			url:'pages/illegal_info.html',
			sonMenu:"[]",
			asc:5
		}
		,
		'user_management':{
			appid:'18',
			icon:'user_management.png',
			name:'用户管理',
			url:'pages/user_management.html',
			sonMenu:"[]",
			asc:6
		},
		'system_management':{
			appid:'20',
			icon:'system_management.png',
			name:'系统设置',
			url:'pages/system_management.html',
			asc:7
		},
		/*'running':{
			appid:'514',
			icon:'running.png',
			name:'运行管理',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc:8
		},
		'dictionary':{
			appid:'3401',
			icon:'dictionary.png',
			name:'数据字典',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :1
		},
		'digital_map':{
			appid:'2527',
			icon:'digital_map.png',
			name:'电子地图',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :2
		},
		'fastsearch':{
			appid:'3693',
			icon:'fastsearch.png',
			name:'快递查询',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :3
		},
		'bianqian':{
			appid:'10',
			icon:'bianqian.png',
			name:'便签',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :4
		},
		'wangdesk':{
			appid:'13',
			icon:'wangdesk.png',
			name:'网络硬盘',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :5
		},
		'friend':{
			appid:'21',
			icon:'friend.png',
			name:'奥尔网',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :1
		},
		'friendnear':{
			appid:'31',
			icon:'friendnear.png',
			name:'好友近况',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :2
		},
		'friendgroup':{
			appid:'32',
			icon:'friendgroup.png',
			name:'好友管理',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :3
		},
		'kaikai':{
			appid:'2250',
			icon:'kaikai.png',
			name:'开开',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :4
		},
		'kxjy':{
			appid:'2535',
			icon:'kxjy.png',
			name:'奥尔交友',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :5
		},
		'qidianzhongwen':{
			appid:'2528',
			icon:'qidianzhongwen.png',
			name:'起点中文',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :1
		},
		'qqread':{
			appid:'45',
			icon:'qqread.png',
			name:'奥尔阅读',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :2
		},
		'xiami':{
			appid:'2526',
			icon:'xiami.png',
			name:'虾米电台',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :3
		},
		'musicbox':{
			appid:'56',
			icon:'musicbox.png',
			name:'音乐盒子',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :4
		},
		'vadio':{
			appid:'15',
			icon:'vadio.png',
			name:'奥尔视频',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :5
		},

		'doudizhi':{
			appid:'48',
			icon:'doudizhu.png',
			name:'欢乐斗地主',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :1
		},
		'3366':{
			appid:'49',
			icon:'3366.png',
			name:'3366',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :2
		},
		'qqbaby':{
			appid:'26',
			icon:'qqbaby.png',
			name:'QQ宝贝',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :3
		},
		'game':{
			appid:'1000',
			icon:'game.png',
			name:'便签',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :4
		}
	},
	sApp:{//侧边栏应用
		'appmarket':{
			appid:'1',
			icon:'appmarket.png',
			name:'应用市场',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :1
		},
		'qq':{
			appid:'2',
			icon:'big.png',
			name:'QQ',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :2
		},
		'weibo':{
			appid:'3',
			icon:'weibo.png',
			name:'微博',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :3
		},
		'mail':{
			appid:'4',
			icon:'mail.png',			
			name:'邮箱',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :4
		},
		'zone':{
			appid:'5',
			icon:'zone.png',
			name:'空间',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :5
		},
		'internet':{
			appid:'6',
			icon:'internet.png',
			name:'浏览网页',
			url:'http://www.jq-school.com/',
			sonMenu:"[]",
			asc :6
		}*/
	
	}
};
ops = {//向桌面添加应用
	Icon1:['car_management','port_management','device','bukong','illegal_info','user_management','system_management'],
	/*Icon2:['fastsearch','bianqian','wangdesk'],
	Icon3:['friend','friendnear','friendgroup','kaikai','kxjy'],
	Icon4:['qidianzhongwen','qqread','xiami','musicbox','vadio','leshi'],
	Icon5:['doudizhi',	'3366',	'qqbaby','game'],
	Icon6:['3366','friendnear','yule','kaikai','Clock'],
	Icon7:['friend','sosomap','xiami','game','kxjy'],
	Icon8:['friend','mangguo']*/
}
//初始化左边快捷菜单
var leftMenu = new Array([/*'appmarket','qq','weibo','mail','internet','zone'*/]);



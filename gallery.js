/* =========================================================================
   「来了」叙事长卷 —— 数据与文案（唯一需要经常编辑的文件）
   预览模式：照片 src 暂留空 ""，显示占位框；真实照片到位后填路径即可。
   ========================================================================= */

/* 开屏 / 结尾 共用的四行诗 */
const POEM = [
  { t: "一个人来湘四年，", gold:false },
  { t: "一群人四季春秋，", gold:false },
  { t: "一行人聚散有时，", gold:false },
  { t: "一别后山高水长。", gold:true  }
];

/* 全站文案 */
const META = {
  coverPlace: "2022 — 2026",
  copyright:  "© 立文之家 版权所有",
  namePlaceholder: "请输入姓名全称",
  enter:      "来了",
  present:    "立文之家 出品",
  endingWord: "来了",
  cardDate:   "2026.06",
  cardFoot:   "2022 — 2026 · 立文之家",
  savePrompt: "保存这一刻",
  bgm:        "bgm.mp3?v=2",       // 背景音乐：HOYO-MiX《华灯星聚 Myriad of Lights》（由 .ogg 转 mp3，全平台兼容）
  bgmVolume:  0.7,                // 音量 0~1
  qrUrl:      "",                 // 填你的公众号链接，填了结尾纪念卡就会显示二维码
  qrLabel:    "扫一扫 · 立文之家",
  peopleTitle:"那些人",
  nav: [
    { id:"preface", label:"序" }, { id:"y1", label:"初见" }, { id:"y2", label:"忙碌" },
    { id:"y3", label:"远行" }, { id:"y4", label:"散场" }, { id:"people", label:"他们" }, { id:"finale", label:"来了" }
  ]
};

/* 四个章节 */
const CHAPTERS = [
  { id:"y1", era:"大一", span:"2022秋—2023春", title:"刚来，什么都是新的", desc:"操作游戏手柄，游览校园。",
    quote:null,
    spots:[
      {place:"南门",src:"photos/y1/01.jpg",pos:"center 80%"},{place:"喷泉",src:"photos/y1/02.jpg",pos:"center 55%"},{place:"体育馆",src:"photos/y1/03.jpg",pos:"center 42%"},{place:"操场",src:"photos/y1/04.jpg",pos:"center 60%"},
      {place:"一食堂（1）",src:"photos/y1/05.jpg",pos:"center 55%"},{place:"一食堂（2）",src:"photos/y1/06.jpg",pos:"center 50%"},{place:"学院超市",src:"photos/y1/07.jpg",pos:"center 58%"},
      {place:"二食堂（1）",src:"photos/y1/08.jpg",pos:"center 55%"},{place:"二食堂（2）",src:"photos/y1/09.jpg",pos:"center 60%"},{place:"宿舍",src:"photos/y1/10.jpg",pos:"center 45%"},
      {place:"厚德楼（1）",src:"photos/y1/11.jpg",pos:"center 38%"},{place:"厚德楼（2）",src:"photos/y1/12.jpg",pos:"center 48%"},{place:"厚德楼（3）",src:"photos/y1/13.jpg",pos:"center 52%"},
      {place:"蜜雪冰城",src:"photos/y1/14.jpg",pos:"center 28%"},{place:"明德广场",src:"photos/y1/15.jpg",pos:"center 42%"},{place:"后山（1）",src:"photos/y1/16.jpg",pos:"center 40%"},
      {place:"后山（2）",src:"photos/y1/17.jpg",pos:"center 52%"},{place:"后山（3）",src:"photos/y1/18.jpg",pos:"center 48%"},{place:"宽也楼",src:"photos/y1/19.jpg",pos:"center 45%"},
      {place:"图书馆（1）",src:"photos/y1/20.jpg",pos:"center 42%"},{place:"图书馆（2）",src:"photos/y1/21.jpg",pos:"center 38%"},{place:"图书馆（3）",src:"photos/y1/22.jpg",pos:"center 45%"},
      {place:"图书馆（4）",src:"photos/y1/23.jpg",pos:"center 45%"},{place:"博学楼（1）",src:"photos/y1/24.jpg",pos:"center 58%"},{place:"博学楼（2）",src:"photos/y1/25.jpg",pos:"center 45%"},
      {place:"博学楼（3）",src:"photos/y1/26.jpg",pos:"center 45%"},{place:"博学楼（4）",src:"photos/y1/27.jpg",pos:"center 40%"},{place:"北门",src:"photos/y1/28.jpg",pos:"center 45%"}
    ] },
  { id:"y2", era:"大二", span:"2023秋—2024夏", title:"留下来，开始忙了", desc:"青春是一条条新闻",
    quote:["那些年做了很多不是自己想做的事，","但学生会的生活是开心的"],
    fragments:["楼管分会","检查卫生","宣传稿","素拓部","已归档","团委办公室"],
    /* 活动：name=活动名  src=照片  pos="x% y%"=取景焦点。可无限追加，照片到位填 src 即可。 */
    activities:[
      {name:"头顶手机壳军训",src:"photos/y2/01.jpg",pos:"center 30%"},{name:"重生宿管分钥匙",src:"photos/y2/02.jpg",pos:"center 50%"},
      {name:"疯狂运动会（一）",src:"photos/y2/03.jpg",pos:"center 40%"},{name:"疯狂运动会（二）",src:"photos/y2/04.jpg",pos:"center 38%"},
      {name:"23级送老迎新",src:"photos/y2/05.jpg",pos:"center 32%"},{name:"后山最炫民族风",src:"photos/y2/06.jpg",pos:"center 42%"},
      {name:"猫捉不到的老鼠",src:"photos/y2/07.jpg",pos:"center 44%"},{name:"为了不存在的活动",src:"photos/y2/08.jpg",pos:"center 48%"},
      {name:"最好的毕业晚会（一）",src:"photos/y2/09.jpg",pos:"center 45%"},{name:"最好的毕业晚会（二）",src:"photos/y2/10.jpg",pos:"center 42%"},
      {name:"参会是为了茶歇",src:"photos/y2/11.jpg",pos:"center 45%"},
      {name:"小白勇闯三下乡（一）",src:"photos/y2/12.jpg",pos:"center 45%"},{name:"小白勇闯三下乡（二）",src:"photos/y2/13.jpg",pos:"center 65%"},
      {name:"24级送老迎新（一）",src:"photos/y2/14.jpg",pos:"center 50%"},{name:"24级送老迎新（二）",src:"photos/y2/15.jpg",pos:"center 55%"},
      {name:"一场超长的售后",src:"photos/y2/16.jpg",pos:"center 45%"},
      {name:"一粒种子的结尾（一）",src:"photos/y2/17.jpg",pos:"center 40%"},{name:"一粒种子的结尾（二）",src:"photos/y2/18.jpg",pos:"center 35%"}
    ] },
  { id:"y3", era:"大三", span:"2024秋—2025春", title:"出去看看", desc:"侗锦，挑花，古商城，北部湾。有些东西，走了才看见。",
    quote:["一起去看过的山和海，","后来都成了想念的形状。"], photos:8,
    trips:[
      {place:"怀化",src:"photos/y3/01.jpg"},{place:"长沙",src:"photos/y3/02.jpg"},{place:"南昌",src:"photos/y3/03.jpg"},{place:"重庆",src:"photos/y3/04.jpg"},
      {place:"武汉",src:"photos/y3/05.jpg"},{place:"合肥",src:"photos/y3/06.jpg"},{place:"吉首",src:"photos/y3/07.jpg"},{place:"湘西",src:"photos/y3/08.jpg"},
      {place:"贵阳",src:"photos/y3/09.jpg"},{place:"铜仁",src:"photos/y3/10.jpg"},{place:"麻阳县",src:"photos/y3/11.jpg"},{place:"南京",src:"photos/y3/12.jpg"},
      {place:"成都",src:"photos/y3/13.jpg"},{place:"新晃县",src:"photos/y3/14.jpg"},{place:"溆浦县",src:"photos/y3/15.jpg"},{place:"通道县",src:"photos/y3/16.jpg"},
      {place:"北海",src:"photos/y3/17.jpg"},{place:"武冈",src:"photos/y3/18.jpg"},{place:"娄底",src:"photos/y3/19.jpg"},{place:"上海",src:"photos/y3/20.jpg"},
      {place:"开封",src:"photos/y3/21.jpg"},{place:"洛阳",src:"photos/y3/22.jpg"},{place:"张家界",src:"photos/y3/23.jpg"},{place:"芷江县",src:"photos/y3/24.jpg"}
    ] },
  { id:"y4", era:"大四", span:"2025秋—2026春", title:"最后一程", desc:"坐在高中里又考了个大学。然后毕业。",
    quote:null, photos:6 }
];

/* 大四飘过的弹幕（你的真实弹幕） */
const DANMAKU = [
  "楼管分会刘楼海来报道了","这评委含金量几何","检查卫生第一名颁奖","最独立的男人来了",
  "小马宝莉本人到场","鲁文来了，全体起立","班委院干集结，所有人上岸","香味学长来临",
  "我们终将再逢","亚文来了，最好的搭档","华安来了","素拓部の马部长"
];

/* 竖向时间轴（左右交替）；era 决定节点视觉语言：1手绘 2打字机 3图钉 4胶片 */
const TIMELINE = [
  { date:"2022.09", place:"抵达怀化",   note:"什么都不知道",            era:1 },
  { date:"2023.04", place:"武汉·南昌·重庆", note:"能走就走",            era:1 },
  { date:"2023.09", place:"学生会",     note:"留下来了",                era:2 },
  { date:"2024.07", place:"三下乡",     note:"那个夏天",                era:2 },
  { date:"2024.04", place:"凤凰古城",   note:"赴约沈从文",              era:3 },
  { date:"2024.10", place:"成都·侗锦·挑花", note:"侧耳倾听，丝线交织",  era:3 },
  { date:"2025.03", place:"洪江古商城", note:"吹皱了河水吹散了云堆",    era:3 },
  { date:"2025.04", place:"北海涠洲岛", note:"珊瑚北部湾",              era:3 },
  { date:"2025.06", place:"考",         note:"",                        era:3 },
  { date:"2026.03", place:"芷江实习",   note:"坐在高中里又考了个大学",  era:4 },
  { date:"2026.06", place:"毕业",       note:"你也在",                  era:4 }
];

/* 那些人（集换翻卡）—— 共 61 人
   name=姓名   group:true=只在合照里出现（取合照特写，仅一次）；不标=有单独照片(可能多张)
   src=照片路径   pos="x% y%"=取景焦点   zoom=放大倍数   note=可选那句话
   多张照片的人，之后可加成多张卡（src 各不同）。 */
/* 合照白名单：有和「沈立文」合照的人，按顺序排列。
   照片随后按同样顺序提供，依次放到 photos/hz/01.jpg、02.jpg ……
   规则：进入后，只有输入的姓名在这里，结尾才会出现「流星 + 合照抽卡」；
   不在名单里的人，没有流星与合照，直接进入「来了」拍立得环节。
   示例： {name:"周雅文", src:"photos/hz/01.jpg"}, */
const GROUP_PHOTOS = [
  {name:"周雅文",src:"photos/hz/01.jpg"},{name:"王华安",src:"photos/hz/02.jpg"},{name:"张湘伟",src:"photos/hz/03.jpg"},{name:"刘丰华",src:"photos/hz/04.jpg"},
  {name:"阳诗曼",src:"photos/hz/05.jpg"},{name:"辜武椿",src:"photos/hz/06.jpg"},{name:"刘旭涛",src:"photos/hz/07.jpg"},{name:"杨清尘",src:"photos/hz/08.jpg"},
  {name:"张朔语",src:"photos/hz/09.jpg"},{name:"赵羿钧",src:"photos/hz/10.jpg"},{name:"李静茹",src:"photos/hz/11.jpg"},{name:"彭思雨",src:"photos/hz/12.jpg"},
  {name:"樊子怡",src:"photos/hz/13.jpg"},{name:"罗茵",src:"photos/hz/14.jpg"},{name:"张雨佳",src:"photos/hz/15.jpg"},{name:"杨倩",src:"photos/hz/16.jpg"},
  {name:"贺子璐",src:"photos/hz/17.jpg"},{name:"刘承文",src:"photos/hz/18.jpg"},{name:"师健晟",src:"photos/hz/19.jpg"},{name:"盛文杰",src:"photos/hz/20.jpg"},
  {name:"万江溢",src:"photos/hz/21.jpg"},{name:"胡颖",src:"photos/hz/22.jpg"},{name:"佘雨馨",src:"photos/hz/23.jpg"},{name:"刘逸凡",src:"photos/hz/24.jpg"},
  {name:"石果",src:"photos/hz/25.jpg"},{name:"彭海蓉",src:"photos/hz/26.jpg"},{name:"张黄阳",src:"photos/hz/27.jpg"},{name:"苏子媛",src:"photos/hz/28.jpg"},
  {name:"何婷",src:"photos/hz/29.jpg"},{name:"舒利",src:"photos/hz/30.jpg"},{name:"李焱",src:"photos/hz/31.jpg"},{name:"康雨彤",src:"photos/hz/32.jpg"},
  {name:"程佳怡",src:"photos/hz/33.jpg"},{name:"刘宇涵",src:"photos/hz/34.jpg"},{name:"郝宇佳",src:"photos/hz/35.jpg"},{name:"黄梦华",src:"photos/hz/36.jpg"},
  {name:"向柯",src:"photos/hz/37.jpg"},{name:"刘楼海",src:"photos/hz/38.jpg"},{name:"陈铭蕊",src:"photos/hz/39.jpg"},{name:"李琳",src:"photos/hz/40.jpg"},
  {name:"李咨蓉",src:"photos/hz/41.jpg"},{name:"李佳怡",src:"photos/hz/42.jpg"},{name:"秦耀华",src:"photos/hz/43.jpg"},{name:"顾炜源",src:"photos/hz/44.jpg"},
  {name:"陆垚",src:"photos/hz/45.jpg"},{name:"李康波",src:"photos/hz/46.jpg"},{name:"张艳艳",src:"photos/hz/47.jpg"},{name:"罗为",src:"photos/hz/48.jpg"},
  {name:"洪语琴",src:"photos/hz/49.jpg"},{name:"于小雅",src:"photos/hz/50.jpg"},{name:"樊梦禹",src:"photos/hz/51.jpg"},{name:"朱秋洁",src:"photos/hz/52.jpg"},
  {name:"徐星宇",src:"photos/hz/53.jpg"},{name:"程祖云",src:"photos/hz/54.jpg"},{name:"黄豪",src:"photos/hz/55.jpg"},{name:"马杨玲",src:"photos/hz/56.jpg"},
  {name:"孙碧雲",src:"photos/hz/57.jpg"},{name:"邬晴宇",src:"photos/hz/58.jpg"},{name:"邢宇嫣",src:"photos/hz/59.jpg"},{name:"许江南",src:"photos/hz/60.jpg"},
  {name:"王铭娜",src:"photos/hz/61.jpg"},{name:"周汨祯",src:"photos/hz/62.jpg"},{name:"贺婧姝",src:"photos/hz/63.jpg"},{name:"吴慧涛",src:"photos/hz/64.jpg"},
  {name:"谭潇",src:"photos/hz/65.jpg"},{name:"谢芷妍",src:"photos/hz/66.jpg"},{name:"黄慧婷",src:"photos/hz/67.jpg"},{name:"邱振宇",src:"photos/hz/68.jpg"},
  {name:"孙诗涵",src:"photos/hz/69.jpg"},{name:"王滢",src:"photos/hz/70.jpg"},{name:"聂丹",src:"photos/hz/71.jpg"},{name:"张信",src:"photos/hz/72.jpg"},{name:"卢山林",src:"photos/hz/73.jpg"},
  {name:"崔冠杨",src:"photos/hz/74.jpg"},{name:"张启敏",src:"photos/hz/75.jpg"},{name:"潘晟",src:"photos/hz/76.jpg"},
  {name:"余依琳",src:"photos/hz/77.jpg"},{name:"肖雅兰",src:"photos/hz/78.jpg"},{name:"韩玲",src:"photos/hz/79.jpg"},{name:"刘柄南",src:"photos/hz/80.jpg"},
];

const PEOPLE = [
  {name:"周雅文"},{name:"王华安"},{name:"张湘伟"},{name:"刘丰华"},{name:"阳诗曼"},{name:"辜武椿"},{name:"刘旭涛",group:true},
  {name:"杨清尘",group:true},{name:"张朔语",group:true},{name:"赵羿钧",group:true},
  {name:"李静茹"},{name:"彭思雨"},{name:"樊子怡"},{name:"罗茵",group:true},
  {name:"张雨佳",group:true},{name:"杨倩"},{name:"贺子璐",group:true},{name:"刘承文"},
  {name:"师健晟"},{name:"盛文杰",group:true},{name:"万江溢"},{name:"胡颖",group:true},
  {name:"佘雨馨",group:true},{name:"刘逸凡",group:true},{name:"石果"},{name:"彭海蓉"},
  {name:"张黄阳"},{name:"苏子媛"},{name:"何婷",group:true},{name:"舒利",group:true},
  {name:"李焱",group:true},{name:"康雨彤"},{name:"程佳怡",group:true},{name:"刘宇涵",group:true},
  {name:"郝宇佳",group:true},{name:"黄梦华"},{name:"向柯"},{name:"刘楼海"},{name:"陈铭蕊"},
  {name:"李琳"},{name:"李咨蓉"},{name:"李佳怡"},{name:"秦耀华"},{name:"顾炜源"},{name:"陆垚"},
  {name:"李康波",group:true},{name:"张艳艳",group:true},{name:"罗为",group:true},{name:"洪语琴"},
  {name:"于小雅",group:true},{name:"樊梦禹"},{name:"朱秋洁",group:true},{name:"徐星宇"},
  {name:"程祖云"},{name:"黄豪"},{name:"马杨玲"},{name:"孙碧雲"},{name:"王帅龙",group:true},
  {name:"邬晴宇",group:true},{name:"邢宇嫣",group:true},{name:"许江南",group:true},
  {name:"王铭娜"},{name:"周汨祯",group:true},{name:"贺婧姝"},{name:"吴慧涛"},{name:"谭潇"},{name:"谢芷妍"},{name:"黄慧婷"},{name:"邱振宇"},
  /* 追加鸣谢 */
  {name:"黄皓轩"},{name:"黄诚"},{name:"阳慧"},{name:"肖媛"},{name:"向玉"},{name:"张寒冰"},{name:"田聪"},{name:"刘子扬"},{name:"崔冠杨"},{name:"龚美芝"},{name:"韩玲"},{name:"余依琳"},{name:"肖雅兰"},{name:"胡杨"},{name:"义晴"},{name:"谭长运"},{name:"黄馨慧"},{name:"刘柄南"},{name:"毛清华"},{name:"张启敏"},{name:"潘晟"},{name:"孙琳"},{name:"唐搏"},{name:"邓承宏"},{name:"杨琨"},{name:"尹元妹"},{name:"赵梦博"},{name:"邹洋阳"},{name:"唐歆雨"},{name:"卢山林"},{name:"易子皓"},{name:"肖南"},{name:"杨秋露"},{name:"张有玲"},{name:"杨荣栋"},{name:"侯婷"},{name:"梧桐"},
  {name:"孙诗涵"},{name:"王滢"},{name:"聂丹"},{name:"张信"},{name:"王晗"},{name:"宗雅"},{name:"程紫茵"},{name:"李隆鑫"},{name:"陈冯强"},{name:"吴凯"},{name:"田悦"},{name:"余必洋"},{name:"邓珊珊"},{name:"郭加强"}
];

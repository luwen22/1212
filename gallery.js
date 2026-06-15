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
  namePlaceholder: "写下你的名字",
  enter:      "来了",
  present:    "立文之家 出品",
  endingWord: "来了",
  cardDate:   "2026.06",
  cardFoot:   "2022 — 2026 · 立文之家",
  savePrompt: "保存这一刻",
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
    quote:["走过的地方，","有你在就记得了。"], photos:8,
    trips:[
      {place:"怀化",src:"photos/y3/01.jpg"},{place:"长沙",src:"photos/y3/02.jpg"},{place:"南昌",src:"photos/y3/03.jpg"},{place:"重庆",src:"photos/y3/04.jpg"},
      {place:"武汉",src:"photos/y3/05.jpg"},{place:"合肥",src:"photos/y3/06.jpg"},{place:"吉首",src:"photos/y3/07.jpg"},{place:"湘西",src:"photos/y3/08.jpg"},
      {place:"贵阳",src:"photos/y3/09.jpg"},{place:"铜仁",src:"photos/y3/10.jpg"},{place:"麻阳县",src:""},{place:"南京",src:""},
      {place:"成都",src:""},{place:"新晃县",src:""},{place:"溆浦县",src:""},{place:"通道县",src:""},
      {place:"北海",src:""},{place:"武冈",src:""},{place:"娄底",src:""},{place:"上海",src:""},
      {place:"开封",src:""},{place:"洛阳",src:""},{place:"张家界",src:""},{place:"芷江县",src:""}
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
  {name:"王铭娜"},{name:"周汨祯",group:true},{name:"贺婧姝"},{name:"吴慧涛"},{name:"谭潇"},{name:"谢芷妍"},{name:"黄慧婷"},{name:"邱振宇"}
];

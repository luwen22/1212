/* =========================================================================
   照片清单 —— 这是唯一需要经常编辑的文件
   -------------------------------------------------------------------------
   现在是「预览模式」：每个人都用空相框占位（照片待补）。
   等真实照片到位后，把空位 {} 换成 { src: "photos/<id>/01.jpg" } 即可。

   每个人一项：
     {
       id:    "linmu",                 // 文件夹名（英文/拼音），照片放 photos/<id>/
       name:  "林木",                  // 展示用花名/昵称
       note:  "认识三年的老朋友",         // 可选：一句话备注
       cover: "photos/linmu/01.jpg",   // 可选封面；不填就用第一张有图的
       photos: [
         { src: "photos/linmu/01.jpg", caption: "可选配文" },  // ← 有照片
         {}                                                    // ← 空位（照片待补）
       ]
     }
   - 一个空位写成 {} ，会显示成虚线空相框。
   - 想给某人留几个空位，就放几个 {} 。
   ========================================================================= */

// 一个小助手：n() 生成 n 个空相框位
function n(count){ return Array.from({length:count}, () => ({})); }

const GALLERY = [
  { id: "linmu",   name: "林木",   note: "示例花名 · 点我看相册", photos: n(4) },
  { id: "axing",   name: "阿星",   note: "示例花名",            photos: n(3) },
  { id: "xiaohe",  name: "小荷",   note: "示例花名",            photos: n(5) },
  { id: "adou",    name: "阿豆",   note: "示例花名",            photos: n(3) },
  { id: "qiqi",    name: "柒柒",   note: "示例花名",            photos: n(4) },
  { id: "dabao",   name: "大宝",   note: "示例花名",            photos: n(2) },
  { id: "xiaoyu",  name: "小鱼",   note: "示例花名",            photos: n(5) },
  { id: "amao",    name: "阿猫",   note: "示例花名",            photos: n(3) },
  { id: "hezhao",  name: "大合照", note: "全班的那几张",          photos: n(6) }
];

// 封面文案（可随时改）
const SITE_TEXT = {
  title: "毕业季",
  subtitle: "那些没来得及发出来的照片",
  promise: "答应过你们的，都在这里了。",
  enterBtn: "进入相册",
  footer: "📷 谢谢这些年的同行"
};

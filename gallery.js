/* =========================================================================
   照片清单 —— 这是唯一需要经常编辑的文件
   -------------------------------------------------------------------------
   每加一个人，就在 GALLERY 数组里加一项：
     {
       id:    "linmu",                // 文件夹名（用英文/拼音，作为 photos/<id>/ 路径）
       name:  "林木",                  // 展示用的花名/昵称
       note:  "认识三年的老朋友",        // 可选：一句话备注（不想要就删掉这行或留 ""）
       cover: "photos/linmu/01.jpg",  // 封面图（一般用第一张）
       photos: [                      // 这个人的所有照片
         { src: "photos/linmu/01.jpg", caption: "" },   // caption 可选配文
         { src: "photos/linmu/02.jpg", caption: "" }
       ]
     }
   注意：
   - 图片放在 photos/<id>/ 文件夹里，建议命名 01.jpg、02.jpg ……
   - 文件名/路径区分大小写，要和实际文件一致。
   - 下面是占位示例（用的 .svg 占位图），真实照片到位后替换即可。
   ========================================================================= */

const GALLERY = [
  {
    id: "linmu",
    name: "林木",
    note: "占位示例 · 把这里换成真实备注",
    cover: "photos/linmu/01.svg",
    photos: [
      { src: "photos/linmu/01.svg", caption: "" },
      { src: "photos/linmu/02.svg", caption: "" },
      { src: "photos/linmu/03.svg", caption: "" },
      { src: "photos/linmu/04.svg", caption: "" }
    ]
  },
  {
    id: "axing",
    name: "阿星",
    note: "占位示例",
    cover: "photos/axing/01.svg",
    photos: [
      { src: "photos/axing/01.svg", caption: "" },
      { src: "photos/axing/02.svg", caption: "" },
      { src: "photos/axing/03.svg", caption: "" }
    ]
  },
  {
    id: "xiaohe",
    name: "小荷",
    note: "占位示例",
    cover: "photos/xiaohe/01.svg",
    photos: [
      { src: "photos/xiaohe/01.svg", caption: "" },
      { src: "photos/xiaohe/02.svg", caption: "" },
      { src: "photos/xiaohe/03.svg", caption: "" },
      { src: "photos/xiaohe/04.svg", caption: "" },
      { src: "photos/xiaohe/05.svg", caption: "" }
    ]
  }
];

// 封面文案（可随时改）
const SITE_TEXT = {
  title: "毕业季",
  subtitle: "那些没来得及发出来的照片",
  promise: "答应过你们的，都在这里了。",
  enterBtn: "进入相册",
  footer: "📷 谢谢这些年的同行"
};

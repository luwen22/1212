# 毕业季 · 照片墙

一个纯静态的毕业季照片展示网站（部署在 GitHub Pages）。封面 → 人物墙 → 每个人的相册，胶片/电影感 UI，移动优先，公开可看。

## 文件结构

```
index.html        整个应用（封面 + 人物墙 + 相册灯箱，自包含）
gallery.js        照片清单 —— 唯一需要经常编辑的文件
photos/<id>/      每个人一个文件夹，放 TA 的照片
gen_placeholders.py  生成占位图的小工具（真实照片到位后可删）
```

## 怎么加人 / 加照片

1. 在 `photos/` 下建一个文件夹，名字用英文或拼音，例如 `photos/linmu/`。
2. 把照片放进去，建议命名 `01.jpg`、`02.jpg`……（建议压缩到长边约 1600px、JPG 格式，加载更快）。
3. 在 `gallery.js` 的 `GALLERY` 数组里加一项：

```js
{
  id: "linmu",                 // = 文件夹名
  name: "林木",                 // 展示用花名/昵称
  note: "认识三年的老朋友",       // 可选备注
  cover: "photos/linmu/01.jpg", // 封面
  photos: [
    { src: "photos/linmu/01.jpg", caption: "" },
    { src: "photos/linmu/02.jpg", caption: "" }
  ]
}
```

封面标题等文案在 `gallery.js` 底部的 `SITE_TEXT` 里改。

## 背景音乐（默认关闭）

右上角有个音乐开关，默认关。要启用：把音频文件放进仓库，在 `index.html` 的
`<audio id="bgm">` 里取消注释并填上 `<source src="...">`。

## 本地预览

```
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署

GitHub Pages 静态托管。线上展示取决于 Pages 配置的分支（通常是 `main`）。

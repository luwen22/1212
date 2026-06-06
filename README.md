# 来过

一本暗色调的毕业摄影集（纯静态，部署在 GitHub Pages）。
开屏诗页 → 单列摄影集（24 张，每张一句小字）→ 点开灯箱放大滑看。
主题「来过」：一个从安徽来湖南、待了四年又离开的人，把认识过的人记下来。

## 文件结构

```
index.html    整个应用（开屏诗页 + 单列摄影集 + 灯箱，自包含）
gallery.js    照片清单 + 诗 + 文案 —— 唯一需要经常编辑的文件
photos/       照片放这里（photos/01.jpg … 24.jpg）
```

> 当前是**预览模式**：还没有真实照片，每张用暗色虚线空相框占位，但小字照常显示。
> 不依赖任何图片文件，可直接在线预览（见下）。

## 怎么加照片

1. 把照片放进 `photos/`，按顺序命名 `01.jpg`、`02.jpg`……（建议压缩到长边约 1600px、JPG，加载更快）。
2. 在 `gallery.js` 的 `PHOTOS` 里，把对应那一项的 `src` 从 `""` 改成路径：

```js
{ src: "photos/01.jpg", caption: "这是师哥，我熟。《等待》", desc: "师哥+主人公（校园走廊…）" }
```

- `caption`：屏幕上显示的小字（保持原样）。
- `desc`：括号里的描述（谁/在哪），只用于对应照片 + 图片 alt，不展示。
- 24 句的顺序已排好，照片按 `desc` 描述对号入座即可。

诗、标题、结尾等文案在 `gallery.js` 里的 `POEM` / `META` 修改。

## 视觉

深色摄影集风：背景 `#0f0d0b`、文字 `#f0e8dc`、强调暖金 `#d4a855`，
衬线字体（Noto Serif SC），全站颗粒纹理 + 暗角，克制留白。无搜索/筛选/登录/音乐。

## 预览

在线（无需部署，手机也能开）：
```
https://htmlpreview.github.io/?https://raw.githubusercontent.com/luwen22/1212/claude/project-code-replacement-hmaUX/index.html
```

本地：
```
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署

GitHub Pages 静态托管。线上展示取决于 Pages 配置的分支（通常是 `main`）。

#!/usr/bin/env python3
"""一次性生成占位照片（SVG），让框架在没有真实照片时也能浏览。
真实照片到位后，这些占位图会被替换/删除。"""
import os

# 三个占位人物：(文件夹id, 花名, 渐变色A, 渐变色B, 张数)
people = [
    ("linmu",   "林木",   "#7B8CFF", "#D4A5FF", 4),
    ("axing",   "阿星",   "#FF9A9E", "#FFCD56", 3),
    ("xiaohe",  "小荷",   "#6CB4EE", "#A8D8C8", 5),
]

SVG = """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{a}"/>
      <stop offset="1" stop-color="{b}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="1500" fill="url(#g)"/>
  <g fill="#ffffff" fill-opacity="0.92" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">
    <text x="600" y="700" font-size="220" font-weight="700">{name}</text>
    <text x="600" y="860" font-size="120" font-weight="600" fill-opacity="0.8">#{n:02d}</text>
    <text x="600" y="1380" font-size="46" fill-opacity="0.7">占位照片 · 待替换</text>
  </g>
</svg>
"""

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), "photos")
for pid, name, a, b, count in people:
    d = os.path.join(base, pid)
    os.makedirs(d, exist_ok=True)
    for i in range(1, count + 1):
        with open(os.path.join(d, f"{i:02d}.svg"), "w", encoding="utf-8") as f:
            f.write(SVG.format(a=a, b=b, name=name, n=i))
    print(f"  {pid}: {count} 张")
print("占位图生成完成 ->", base)

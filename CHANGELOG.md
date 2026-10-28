# 更新记录 / Changelog

## 1.14.4 — 2026-10-28

- 适配 DSH 0.2.1-rc.3，同时保留旧组件规则；恢复选中笔刷、侧栏、气泡、设置和工具面板。
- 去掉设置窗口外层阴影；配图跟随 Web 扩展页面标识，避免导航顺序变化导致错图。
- 素材、字体、角色来源和非商业许可声明保持不变。开屏动画由独立插件 1.3.1 提供，纯皮肤不包含启动脚本。
- Support DSH 0.2.1-rc.3 while retaining legacy selectors; restore selection brushes, sidebar, messages, settings and tools.
- Remove the settings exterior shadow and follow Web Extensions page identities for artwork placement.
- Preserve assets, fonts, provenance and non-commercial terms. Optional startup playback is provided by companion plugin 1.3.1, not by executable code in this asset-only package.

## 1.14.3 — 2026-10-22

- 合并 27 个内容相同的素材文件并同步引用；现有样式仍引用的旧素材保留。
- PNG 装饰图及 SVG 内嵌 PNG 改为无损 WebP，保持尺寸和解码后的 RGBA 像素一致。
- SVG 保持自包含结构；14 张预设插画及两套完整字体未改动。
- 皮肤目录由 37.57 MiB 减至约 32.89 MiB。配套一体化插件更新为 1.1.1。

- Consolidate 27 identical asset files and update their references; retain older assets still referenced by styles.
- Encode PNG decorations and embedded PNG payloads as lossless WebP with identical dimensions and decoded RGBA pixels.
- Keep SVG wrappers self-contained, all 14 preset illustrations and both complete fonts unchanged.
- Reduce the skin directory from 37.57 MiB to about 32.89 MiB; companion bundle updated to 1.1.1.

## 1.14.2 — 2026-10-21

- 14 张插画保持原尺寸，使用高质量 WebP 压缩；保留 SVG 胶带、白边和响应式布局。
- 两套字体改用 WOFF2，保留全部字符、字形和字距。
- 原始插画与发布编码分别记录哈希，素材来源及非商业使用声明保持有效。
- 配套样式菜单 1.0.1 支持新字体格式，已有用户请更新插件并重新运行安装脚本。

- Full-resolution WebP illustrations retain the SVG tape, borders and responsive layout.
- Both fonts use WOFF2 with complete character coverage, outlines and metrics.
- Source-image and packaged-image hashes are recorded separately; provenance and artwork-use terms remain applicable.
- Companion editor 1.0.1 supports the new font format; existing users should update it and rerun its installer.

## 1.14.1 — 2026-10-21

- 提供包含 14 张 ChatGPT 生成配图的独立皮肤包。
- 支持主界面、设置和对话等区域的手账样式及浅色／深色配色。
- 照片与样式编辑器作为可选插件单独提供。
- 提供中英文安装说明、主界面与设置预览、素材来源和许可说明。

- Standalone skin package with 14 ChatGPT-generated illustrations.
- Notebook styling for home, settings and conversations, with light/dark palettes.
- Photo and style editor available as a separate optional plugin.
- Chinese/English installation guides, home/settings previews, provenance and license information.

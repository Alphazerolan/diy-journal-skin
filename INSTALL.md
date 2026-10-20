# 安装与更新 / Installation and updates

## 皮肤 / Skin

1. 下载本仓库 ZIP 并解压。找到 `skins/diy-journal`，不要把整个仓库当成皮肤目录。
2. 备份已有的同名皮肤及自选照片。将 `diy-journal` 放入 `$DSH_HOME/skins/`；未自定义时为用户目录下 `.dsh/skins/`。
3. 在 Harness 的“设置 → 皮肤”选择“DIY手账本”。若列表未更新，刷新或重启 Harness。

Download and extract this repository. Copy **only** `skins/diy-journal` into
`$DSH_HOME/skins/` (by default, `.dsh/skins/` under your home directory), after
backing up any existing customizations. Select DIY Journal in Settings → Skins.
Refresh or restart Harness if the list has not updated.

目录应为 / Expected structure:

```text
skins/
  diy-journal/
    skin.json
    skin.css
    patches.css
    assets/
    preview/
```

皮肤本身无需 Python 或构建。不要覆盖 Harness 程序文件、会话目录或其他皮肤。
The skin needs no build or Python runtime. Do not overwrite application files,
session storage, or other skins.

## 可选样式菜单 / Optional editor

自选图片、双照片、胶带、题字、拖动和场景预览由独立的
[DIY 手账本设置插件](https://github.com/Alphazerolan/diy-journal-settings)提供。
请按该仓库安装说明操作；Windows 下需要 Python 3.9+。

Photo selection, layouts, tape, captions, drag controls and scene previews live
in the separate editor plugin. Follow its installation instructions. The
Windows editor requires Python 3.9+. Default skin artwork works without it.

## 排查 / Troubleshooting

| 现象 / Symptom | 检查 / Check |
| --- | --- |
| 列表没有皮肤 / Missing from list | 确认没有多套一层目录，`skin.json` 与 `assets/` 同级。Check the folder nesting. |
| 配图缺失 / Missing artwork | 完整复制 `assets/`，不要仅保存 CSS。Copy the complete assets directory. |
| 动态状态没有启用 / State enhancement missing | 可选钩子由宿主审核，本地安装可能只加载 CSS。Local hooks may be denied; approval belongs to the host. |
| 更新后布局变化 / Layout shifted after update | 附上 Harness 版本、皮肤版本和脱敏截图反馈；部分选择器依赖宿主结构。Report both versions and a redacted screenshot. |
| 想恢复旧布局 / Revert customization | 使用更新前的备份；覆盖前先备份编辑器的个人图片和配置。Restore your backup. |

## 卸载 / Removal

先切换其他皮肤，再移除 `diy-journal` 目录。编辑器插件独立卸载；保留个人图片备份。
Switch to another skin, then remove the skin directory. Uninstall the editor
separately and retain your personal-photo backup.

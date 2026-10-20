# DIY Journal

[中文说明](README.zh.md)

A paper-and-tape journal skin for DeepSeek Harness. Version 1.14.1 includes 14
ChatGPT-generated Whale-chan illustrations, handwritten headings, an address-book
remote-access dialog, notebook settings pages and light/dark palettes.

## Install

Copy this directory to `$DSH_HOME/skins/diy-journal` (default:
`~/.dsh/skins/diy-journal`), then select **DIY Journal** in Settings > Skins.
The release contains generated assets and needs no Python or build step to display.
Back up an existing DIY skin before replacing it. Other skins are unaffected.

## Optional photo editor

Install the separate [DIY Journal settings plugin](https://github.com/Alphazerolan/diy-journal-settings).
It adds Settings > DIY Journal and requires Python 3.9+ on Windows. It supports
photo selection, layouts, tape color/pattern, position, rotation, scale, borders,
captions, two-photo ordering and scene previews. Personal images stay local.
No-photo areas collapse. The skin remains usable without this plugin.

## Source and character credits

Illustrations: **generated with ChatGPT**, 2026-10-21. Character: **Whale-chan /
DeepSeek 鲸鱼娘（大肥鱼）**, a community fan character. Reference video credits
@ZipZipPipe and @上善无形; underlying character rights and permission remain
unverified. This is not official DeepSeek artwork. See [NOTICE](NOTICE) and
[ARTWORK.json](ARTWORK.json) for reference, generation and font details.
The older Koe illustrations and all personal photo folders are excluded.

## Compatibility and limits

Skin manifest v2, optional SkinHooks v1alpha1. The host only executes approved
market hooks; local copies may display CSS without optional state enhancements.
Some layout rules match current Harness classes and can require updates after
Harness UI changes. The editor runs a token-protected loopback-only service and
closes after 20 minutes idle. Workshop acceptance is still subject to review.

## Remove

Select another skin, then remove this skin directory. Uninstall the companion
plugin separately; its personal editor workspace is retained for recovery.

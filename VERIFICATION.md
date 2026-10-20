# Release verification / 发布检查

Version: DIY Journal 1.14.1; editor plugin 1.0.0. Date: 2026-10-21.
Upstream base: zhu1090093659/dsh-skins @ f6f8c50580d98441383280082634edba26167821.

## Project checks / 项目检查

- Frozen dependency installation with scripts disabled: passed.
- Skin hook registry generation and verification: passed.
- Production build: passed; regenerated registry and lib/index.js included.
- Skin catalog validation: passed (62 skins).
- TypeScript typecheck: passed.
- Project tests: 66 files, 736 tests passed.
- Repository script tests: 51 passed.
- Plugin security tests: 3 passed.
- Plugin install/upgrade/uninstall integration: passed; personal files and explicit empty selection retained.
- Isolated live menu smoke: 14 regions read; scene rendered; save/apply succeeded; unauthenticated API denied; launcher reuse succeeded.

## Package audit / 发布包检查

Only referenced assets, manifests, code, previews and documentation are included.
Personal input directories, reference screenshots, runtime configuration and backups are excluded.
The 13 distinct older input-image hashes were absent from the release files and embedded image data.
Default illustrations are 14 ChatGPT-generated outputs listed in ARTWORK.json.
发布包不包含旧版照片、个人配置、运行令牌和备份；默认配图来源及逐图记录已补齐。

## Screenshot evidence / 截图证据

Four captures through Windows computer-use from actual Harness 0.2.1-rc.2, at 2560 x 1392: home and settings in both themes.
Light and dark are native app theme selections, not simulated color conversions.
The full sidebar is retained. Personal text was masked and the unrelated unlicensed pet hidden before capture.
JPEG files under evidence/ are original capture bytes. Catalog previews are byte-identical copies of the home captures.
截图来自实际程序的浅色／深色模式；投稿正文引用与 evidence/ 完全相同的 JPEG 文件。

## Documentation refresh checks / 本次展示更新检查

- Release checker: local asset/document references, manifest identity, four screenshot hashes and catalog preview identity.
- Gallery interaction checks passed: envelope open/close, workspace sample states, theme toggle, motion pause, reduced-motion preference, mobile overflow and no JavaScript page errors.
- Gallery screenshots are isolated fixtures using shipped skin CSS plus a small host-layout substitute; they are not native app screenshots or evidence of optional hook approval.
- Skin styles, hooks and manifest unchanged. The full upstream results above belong to the initial release verification and were not rerun for this documentation-only refresh.

## Remaining review / 待审核项

Underlying reference-character rights and redistribution permission are unverified.
Generation by ChatGPT is declared as provenance, not as character authorization.
Workshop acceptance and hook approval remain the maintainers' decision.
角色参考形象的完整权利人及授权尚未核实；投稿以草稿说明这一项，不勾选已获授权。

## Demo withdrawal / 演示撤下

The initial gallery passed its narrow fixture checks but omitted message bubbles and other surfaces. Its files and public links have been withdrawn. Those checks do not establish full visual coverage. Skin code and the four native captures are unchanged.

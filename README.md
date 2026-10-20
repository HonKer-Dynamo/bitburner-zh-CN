Bitburner（Steam 版）简体中文汉化补丁 —— 仅适用 3.0.1
========================================================
【安装】
1. 先确认游戏版本为 3.0.1：Steam 库中右键 Bitburner → 管理 → 浏览本地文件，
   打开 resources/app/package.json，其中 version 应为 "3.0.1"
2. 完全退出 Bitburner
3. 把本压缩包解压到游戏根目录（即解压后与 bitburner.exe 同级出现 resources 文件夹），
   遇到同名文件选择"覆盖"
4. 启动游戏，即为简体中文
   （自检：游戏内按 F12，Console 输入 BitburnerZH.stats() ，应显示数千条词条）

【这个补丁做了什么】
- 新增 resources/app/dist/zh-locale/ （翻译引擎 + 17 个字典，约 1 万条词条：
  全部界面、终端命令与 help、Netscript 报错、帮助文档、教程与游戏文学等）
- 替换 resources/app/index.html （仅添加 18 行脚本引用）
- 替换 main.js / menu.js / utils.js / exit.html / export.html
  （与官方原版唯一差异是文案已翻译：原生菜单、系统对话框等）
- 不修改游戏核心 main.bundle.js（游戏逻辑原封不动），不影响存档、Steam 云与成就
- 字典若有异常只会退回英文，不会损坏游戏

【卸载 / 还原】
Steam 库中右键 Bitburner → 属性 → 已安装文件 → 验证游戏文件完整性（自动还原全部官方文件，
新增的 dist/zh-locale 文件夹可整个删除）

【保留英文的内容】（方便查攻略与写脚本）
终端命令名、Netscript API 函数名、服务器主机名、文件名与 .exe 程序名、股票代码、代码块。

【注意事项】
- 游戏更新到新版本后此补丁会失效或不适配：请勿在新版本上覆盖；等新版补丁，
  或先"验证游戏文件完整性"还原再玩原版
- 若你曾自行修改过上述 5 个文件（如装过其他模组），解压前请先自行备份

【许可】
- Bitburner 本体为 MIT 开源（github.com/bitburner-official/bitburner-src）；
  本补丁 mainproc 文件基于其 MIT 授权修改分发
- 翻译文本与字典：CC BY-NC 4.0（署名-非商业性使用）
- 本补丁为非官方社区作品，与 Bitburner 官方无关联

祝游戏愉快。hack the planet!
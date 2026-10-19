/* Bitburner 汉化字典 —— 选项页 / 存档管理 UI / 成就 / 里程碑 / 诊断 / 漏洞 / 红药丸 / BitNode UI / 帮助文档外壳。
 * 基准：bitburner-src tag v3.0.1。
 * 来源（本文件覆盖）：src/GameOptions/ui/*（GameOptionsRoot, GameOptionsSidebar, GameOptionsPage,
 *   SystemPage, GameplayPage, InterfacePage, NumericDisplayOptions, MiscPage, RemoteAPIPage,
 *   RemoteFileApiConnectionStatus, KeyBindingPage, AutoexecInput, OptionsSlider, CreditsModal）、
 *   src/ui/Enums.ts（页面名，仅补 core 未收的）、src/ui/React/{DeleteGameButton,SoftResetButton,
 *   ConfirmationModal,ImportSaveComparison,RecoveryRoot}.tsx、src/Diagnostic/FileDiagnosticModal.tsx、
 *   src/Achievements/*、src/Milestones/*、src/Exploits/*、src/RedPill.tsx、src/BitNode/ui/*、
 *   src/Documentation/ui/*、src/ui/React/Documentation.tsx、src/utils/KeyBindingUtils.ts。
 * 已在别处收录、此处不重复的键（译文保持一致）：dict-core.js（Save Game/Export Save/Delete Save/Load Game/
 *   Options/Documentation/Cancel/OK/Confirm/Close/Yes/No/Status:/Save/Load/Delete/Import/Export/Connect/
 *   Search/Are you sure?/Soft Reset/Hard Reset/Achievements/Milestones 等）、dict-pages1.js
 *   （Theme:/Font family:/Font size:/Stats/Script Editor/Recently Killed Scripts/Recent Errors 等编辑器与
 *   加载页设置）、dict-pages5.js（Suppress TIX messages、If this is set, the stock market will never create any popup.）。
 * 术语：Save=保存, Load=载入, Export Save=导出存档, Delete Save=删除存档, Soft Reset=软重置,
 *   Hard Reset=硬重置, Auto-Save=自动保存, Steam Cloud 保留, BitNode 保留, Source File=源文件,
 *   Favor 保留英文, Hacknet/RAM/TIX/WSE/IPvGO 保留, Script Editor=脚本编辑器, Terminal=终端。
 * 注：Steam Cloud 相关的错误 toast 由主进程翻译，此处不收录。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  // ============ 1. 选项页外壳与标签页（src/GameOptions/ui/GameOptionsRoot.tsx / GameOptionsSidebar.tsx） ============
  BitburnerZH.exact({
    "Options": "选项",
    "System": "系统",
    "Gameplay": "游戏性",
    "Interface": "界面",
    "Numeric Display": "数值显示",
    "Misc": "杂项",
    "Remote API": "远程 API",
    "Key Binding": "按键绑定",

    /* ---------- 1.1 存档管理按钮与说明（GameOptionsSidebar.tsx） ---------- */
    // "Save Game"/"Delete Save"/"Export Save" 已在 dict-core.js
    "Export Game": "导出游戏",
    "Import Game": "导入游戏",
    "Compare Save": "比较存档",
    "Force kill all active scripts": "强制终止所有活动脚本",
    "Diagnose files": "诊断文件",
    "Theme Browser": "主题浏览器",
    "Report Bug": "报告 Bug",
    "Credits": "致谢名单",
    "Reset tutorial": "重置教程",
    "Export your game to a text file.": "将你的游戏导出为文本文件。",
    "Import your game from a text file.": "从文本文件导入你的游戏。",
    "Importing a new game will completely wipe the current data!": "导入新游戏会彻底抹掉当前的全部数据！",
    "Make sure to have a backup of your current save file before importing.": "导入之前，请务必先备份当前的存档文件。",
    "The file you are attempting to import seems valid.": "你尝试导入的文件似乎是有效的。",
    "The export date of the save file is": "该存档文件的导出时间为",
    "Total play time of imported game:": "导入游戏的总游戏时长：",
    "Sync Steam achievements": "同步 Steam 成就",
    "This setting is only used in the Steam app. If this setting is enabled, the game will automatically sync your unlocked Steam achievements to Steam Cloud.":
      "此设置仅在 Steam 版本中生效。启用后，游戏会自动将你已解锁的 Steam 成就同步到 Steam Cloud。",
    "Forcefully kill all active running scripts, in case there is a bug or some unexpected issue with the game. After using this, save the game and then reload the page. This is different than normal kill in that normal kill will tell the script to shut down while force kill just removes the references to it (and it should crash on its own). This will not remove the files on your computer, just forcefully kill all running instances of all scripts.":
      "在出现 Bug 或游戏出现意外问题时，强制终止所有正在运行的活动脚本。使用此项后，请保存游戏并重新加载页面。它与普通终止的区别在于：普通终止会通知脚本自行关闭，而强制终止只是移除对它的引用（脚本应当会自行崩溃）。这不会删除你电脑上的文件，只会强制终止所有脚本的全部运行实例。",
    "If your save file is extremely big you can use this button to view a map of all the files on every server. Be careful: there might be spoilers.":
      "如果你的存档文件极大，可以用这个按钮查看每台服务器上所有文件的分布图。请小心：其中可能有剧透。",
    "Head to the theme browser to see a collection of prebuilt themes.": "前往主题浏览器，查看一组预置主题。",
    "Start a GitHub issue to help the devs find bugs!": "提交 GitHub issue，帮助开发者定位 Bug！",
    "Restart the tutorial? Running scripts will be killed.": "重新开始教程？正在运行的脚本将被终止。",

    /* ---------- 1.2 删除存档（src/ui/React/DeleteGameButton.tsx） ---------- */
    // 按钮文字 "Delete Save" 已在 dict-core.js
    "This will permanently delete your local save game. Did you export it before?":
      "这将永久删除你的本地存档。你之前导出备份过吗？",
    "Really delete your game? (It's permanent!)": "真的要删除你的游戏吗？（此操作不可恢复！）",

    /* ---------- 1.3 软重置（src/ui/React/SoftResetButton.tsx；按钮文字 Soft Reset 已在 dict-core.js） ---------- */
    "Perform a Soft Reset - similar to installing Augmentations, even if you have none.":
      "执行软重置——效果类似安装义体，即使你并没有已购买的义体。",
    "Soft Reset will:": "软重置将会：",
    "- Reset basic stats and money": "- 重置基础属性与资金",
    "- Accumulate Favor for companies and factions": "- 累积公司与派系的 Favor",
    "- Install Augmentations if you have any purchased": "- 安装你已购买的义体（若有）",
    "- Reset servers, programs, recent scripts and terminal": "- 重置服务器、程序、最近脚本与终端",
    "- Scripts on your home server will stop, but aren't deleted": "- home 服务器上的脚本会停止运行，但不会被删除",
    "- Stop some special mechanics (crime, study, Bladeburner action, Grafting task, etc.)":
      "- 停止部分特殊机制（犯罪、学习、刃行者行动、移植任务等）",
    "- Stop some special mechanics (crime, study, etc.)": "- 停止部分特殊机制（犯罪、学习等）",
    "- You will not lose overall progress or access to special mechanics": "- 你不会失去总体进度，也不会失去特殊机制的访问权",

    /* ---------- 1.4 系统页（src/GameOptions/ui/SystemPage.tsx） ---------- */
    "Autoexec Script + Args": "Autoexec 脚本 + 参数",
    "Path to a script (with optional args) to run on game load. The script will be run on home, launched before any saved running scripts. It will have the \"temporary\" setting, so if it stays running it won't be saved.":
      "游戏载入时运行的脚本路径（可带参数）。该脚本会在 home 上启动，且早于任何随存档恢复的运行脚本。它将带有 \"temporary\"（临时）属性，因此若持续运行也不会被保存。",
    "Recently killed scripts size": "最近终止脚本的记录数",
    "The maximum number of recently killed scripts the game will keep.": "游戏保留的最近终止脚本的最大数量。",
    "Netscript log size": "Netscript 日志容量",
    "The maximum number of lines a script's logs can hold. Setting this too high can cause the game to use a lot of memory if you have many scripts running.":
      "单个脚本日志可容纳的最大行数。若运行大量脚本，设置过高会占用很多内存。",
    "Netscript port size": "Netscript 端口容量",
    "The maximum number of entries that can be written to a port using Netscript's write() function. Setting this too high can cause the game to use a lot of memory.":
      "使用 Netscript 的 write() 函数可写入端口的最大条目数。设置过高会占用很多内存。",
    "Terminal capacity": "终端容量",
    "The maximum number of entries that can be written to the terminal. Setting this too high can cause the game to use a lot of memory.":
      "可写入终端的最大条目数。设置过高会占用很多内存。",
    "Autosave interval (s)": "自动保存间隔（秒）",
    "The time (in seconds) between each autosave. Set to 0 to disable autosave.": "每次自动保存之间的时间（秒）。设为 0 即禁用自动保存。",
    "Tail render interval (ms)": "tail 渲染间隔（毫秒）",
    "The minimum number of milliseconds between tail rerenders. Setting this too low can result in poor performance if you have many tail windows open.":
      "两次 tail 窗口重渲染之间的最小毫秒数。若打开大量 tail 窗口，设置过低会导致性能变差。",
    "Suppress Auto-Save Game Toast": "屏蔽自动保存成功提示",
    "If this is set, there will be no \"Game Saved!\" toast appearing after an auto-save.":
      "勾选后，自动保存完成后不会再出现「游戏已保存！」提示。",
    "Suppress Auto-Save Disabled Warning": "屏蔽自动保存已禁用的警告",
    "If this is set, there will be no warning triggered when auto-save is disabled (at 0).":
      "勾选后，自动保存被禁用（间隔为 0）时将不再触发警告。",
    "Save game on file save": "保存文件时同时保存游戏",
    "Save your game any time a file is saved in the script editor.": "在脚本编辑器中保存任何文件时都顺便保存游戏。",
    "Exclude Running Scripts from Save": "存档中不包含运行中的脚本",
    "If this is set, the save file will exclude all running scripts. This is only useful if your save is lagging a lot. You'll have to restart your script every time you launch the game, possibly by using the \"autoexec\" option.":
      "勾选后，存档文件将不包含任何运行中的脚本。这只在你的存档严重卡顿时有用。这样每次启动游戏都得重新开始脚本，通常可借助 autoexec 选项实现。",

    /* ---------- 1.5 游戏性页（src/GameOptions/ui/GameplayPage.tsx） ---------- */
    // "Suppress TIX messages" 及其 tooltip 已在 dict-pages5.js，译文一致，故此处不重复。
    "Suppress story messages": "屏蔽剧情消息",
    "If this is set, then any messages you receive will not appear as popups on the screen. They will still get sent to your home computer as '.msg' files and can be viewed with the 'cat' Terminal command.":
      "勾选后，你收到的消息不会再以弹窗形式出现。它们仍会以 .msg 文件形式存入你的 home 计算机，可用终端的 cat 命令查看。",
    "Suppress faction invites": "屏蔽派系邀请",
    "If this is set, then any faction invites you receive will not appear as popups on the screen. Your outstanding faction invites can be viewed in the 'Factions' page.":
      "勾选后，你收到的派系邀请不会再以弹窗形式出现。未处理的派系邀请可在「派系」页面查看。",
    "Suppress travel confirmations": "屏蔽旅行确认",
    "If this is set, the confirmation message before traveling will not show up. You will automatically be deducted the travel cost as soon as you click.":
      "勾选后，旅行前的确认提示将不再显示，你一旦点击就会被自动扣除旅行费用。",
    "Suppress augmentations confirmation": "屏蔽义体购买确认",
    "If this is set, the confirmation message before buying augmentation will not show up.":
      "勾选后，购买义体前的确认提示将不再显示。",
    "Suppress error modals": "屏蔽错误弹窗",
    "If this is set, script errors will never create any popups. The errors can still be seen on the \"Recent Errors\" tab in the Active Scripts page.":
      "勾选后，脚本错误将不再弹出任何窗口。错误仍可在「活动脚本」页面的「最近的错误」标签中查看。",
    "Suppress bladeburner popup": "屏蔽刃行者弹窗",
    "If this is set, then having your Bladeburner actions interrupted by being busy with something else will not display a popup message.":
      "勾选后，当你因忙于其他工作导致刃行者行动被打断时，不会再显示弹窗消息。",

    /* ---------- 1.6 界面页（src/GameOptions/ui/InterfacePage.tsx） ---------- */
    "Disable ASCII art": "禁用 ASCII 图形",
    "If this is set, ASCII art for UI elements will be disabled. This setting does not affect ASCII art in the description of factions.":
      "勾选后，界面元素的 ASCII 图形将被禁用。此项不影响派系描述中的 ASCII 图形。",
    "Disable text effects": "禁用文字特效",
    "If this is set, text effects will not be displayed. This can help if text is difficult to read in certain areas.":
      "勾选后，将不再显示文字特效。如果某些区域的文字难以阅读，这会有帮助。",
    "Disable Overview Progress Bars": "禁用总览进度条",
    "If this is set, progress bars in the character overview will be hidden.":
      "勾选后，角色总览中的进度条将被隐藏。",
    "Show all intermediary time units, even when null.": "显示所有中间时间单位，即使其为零。",
    "Example: 1 hour 13 seconds becomes 1 hour 0 minutes 13 seconds.":
      "示例：「1 小时 13 秒」将变为「1 小时 0 分钟 13 秒」。",
    "Timestamp format:": "时间戳格式：",
    "Terminal commands and log entries will be timestamped. See https://date-fns.org/docs/Getting-Started/":
      "终端命令与日志条目将带上时间戳。格式说明见 https://date-fns.org/docs/Getting-Started/",
    "no timestamp": "无时间戳",

    /* ---------- 1.7 数值显示页（src/GameOptions/ui/NumericDisplayOptions.tsx） ---------- */
    "Use engineering notation instead of scientific notation for exponential form":
      "指数形式改用工程计数法（而非科学计数法）",
    "If this is set, numbers displayed in exponential form will use engineering notation instead of scientific notation.":
      "勾选后，以指数形式显示的数值将使用工程计数法，而非科学计数法。",
    "Use exponential form instead of suffixed form": "改用指数形式（而非单位后缀形式）",
    "If this is set, suffixed form will not be used, and numbers that would have been suffixed will be displayed with exponential form instead.":
      "勾选后将不使用单位后缀形式，原本带后缀的数值会以指数形式显示。",
    "Hide thousands separator": "隐藏千位分隔符",
    "If this is set, thousands separators will not be displayed.": "勾选后将不显示千位分隔符。",
    "Fractional Digits": "小数位数",
    "The default number of decimal places to display on small numbers. Default value: 3":
      "较小数值默认显示的小数位数。默认值为 3。",
    "Hide trailing fractional zeroes for decimals": "隐藏小数末尾的无效零",
    "If this is set, zeroes at the end of a fractional part of a decimal will not be displayed.":
      "勾选后，小数部分末尾的零将不再显示。",
    "Use GiB instead of GB": "使用 GiB 而非 GB",
    "If this is set all references to memory will use GiB instead of GB, in accordance with IEC 60027-2.":
      "勾选后，所有内存单位将按 IEC 60027-2 标准使用 GiB 而非 GB。",
    "Locale:": "区域设置：",
    "Currency Symbol:": "货币符号：",
    "Move the currency symbol to be after the value": "将货币符号置于数值之后",
    "If enabled, the currency symbol appears after the number (e.g., 100€ instead of €100)":
      "启用后，货币符号将显示在数字之后（例如 100€ 而非 €100）",

    /* ---------- 1.8 杂项页（src/GameOptions/ui/MiscPage.tsx） ---------- */
    "Disable hotkeys": "禁用快捷键",
    "If this is set, then most hotkeys (keyboard shortcuts) in the game are disabled. This includes Terminal commands, hotkeys to navigate between different parts of the game, and the \"Save and Close (Ctrl + b)\" hotkey in the Text Editor.":
      "勾选后，游戏中的大部分快捷键（键盘快捷方式）都会被禁用，包括终端命令、各界面间导航的快捷键，以及文本编辑器中的「保存并关闭（Ctrl + b）」快捷键。",
    "Enable bash hotkeys": "启用 Bash 快捷键",
    "Improved Bash emulation mode. Setting this to 1 enables several new Terminal shortcuts and features that more closely resemble a real Bash-style shell. Note that when this mode is enabled, the default browser shortcuts are overridden by the new Bash shortcuts.":
      "改进的 Bash 模拟模式。启用后将新增若干终端快捷方式与特性，更接近真正的 Bash 风格 shell。注意：启用此模式时，新的 Bash 快捷键会覆盖浏览器默认快捷键。",
    "Enable terminal history search with arrow keys": "启用方向键搜索终端历史",
    "If there is user-entered text in the terminal, using the up arrow will search through the terminal history for previous commands that start with the current text, instead of navigating to the most recent history item. Search results can be executed immediately via 'enter', or autofilled into the terminal with 'tab'.":
      "当终端中已有输入内容时，按上方向键会在终端历史中查找以当前文本开头的旧命令，而不是直接跳到最近一条记录。搜索结果可用回车直接执行，或用 Tab 自动填入终端。",
    "Enable Vim as default editor": "默认使用 Vim 编辑器",
    "This setting is only used when opening a file through ways that do not determine the editor mode. Using 'nano' or 'vim' will set the editor mode for the specified files, while 'ls' will open the file using the the value from this setting.":
      "此项仅在通过不指定编辑器模式的途径打开文件时生效。使用 nano 或 vim 会为指定文件设定对应模式，而通过 ls 打开文件时将采用本设置项的值。",

    /* ---------- 1.9 远程 API 页（src/GameOptions/ui/RemoteAPIPage.tsx / RemoteFileApiConnectionStatus.tsx） ---------- */
    "These settings control the Remote API for Bitburner. This is typically used to write scripts using an external text editor and then upload files to the home server.":
      "这些设置控制 Bitburner 的远程 API。通常用于通过外部文本编辑器编写脚本，再把文件上传到 home 服务器。",
    "Hostname:": "主机名：",
    "Port:": "端口：",
    "Reconnection delay:": "重连延迟：",
    "This hostname is used to connect to a Remote API, please ensure that it matches with your Remote API hostname.":
      "该主机名用于连接远程 API，请确保它与你的远程 API 主机名一致。",
    "If you use IPv6, you need to wrap it in square brackets. For example: [::1]":
      "如果使用 IPv6，需要用方括号包裹地址，例如 [::1]",
    "Default: localhost.": "默认值：localhost。",
    "This port number is used to connect to the Remote API. Please ensure that it matches with your Remote API server port.":
      "该端口号用于连接远程 API，请确保它与你的远程 API 服务器端口一致。",
    "The value must be in the range of [0, 65535]. Set it to 0 to disable the feature.":
      "取值必须在 [0, 65535] 范围内。设为 0 可禁用此功能。",
    "When the connection is closed, Bitburner will automatically reconnect after this delay.":
      "连接断开后，Bitburner 会在该延迟之后自动重连。",
    "The value must be in seconds. Set it to 0 to disable the feature.":
      "取值单位为秒。设为 0 可禁用此功能。",
    "Invalid reconnection delay": "无效的重连延迟",
    "Use wss": "使用 wss",
    "Use wss instead of ws when connecting to RFA clients.": "连接 RFA 客户端时使用 wss 而非 ws。",
    "Remote API status": "远程 API 状态",
    "Online": "在线",
    "Offline": "离线",
    "Reconnecting": "正在重连",
    "Remote API: Online": "远程 API：在线",
    "Remote API: Offline": "远程 API：离线",
    "Remote API: Reconnecting": "远程 API：正在重连",

    /* ---------- 1.10 Autoexec 校验提示（src/GameOptions/ui/AutoexecInput.tsx） ---------- */
    "No script will be auto-launched": "不会自动启动任何脚本",
    "does not exist!": "不存在！",
    "has errors!": "存在错误！",

    /* ---------- 1.11 按键绑定页（src/GameOptions/ui/KeyBindingPage.tsx） ---------- */
    "How to use": "使用方法",
    "Press the key you would like to use": "请按下你想要使用的按键",
    "No conflicts detected": "未检测到冲突",
    "You can assign up to 2 key combinations per \"action\". If a key combination is assigned to many actions, pressing that key combination will perform all those actions.":
      "每个「操作」最多可分配 2 组按键组合。若同一按键组合被分配给多个操作，按下该组合会同时执行所有这些操作。",
    "Some key combinations cannot be used. Your OS and browsers usually have some built-in key bindings that cannot be overridden. For example, on Windows, Windows+R always opens the \"Run\" dialog.":
      "部分按键组合无法使用。你的操作系统与浏览器通常带有无法被覆盖的内置按键绑定。例如在 Windows 上，Windows+R 始终会打开「运行」对话框。",
    "When you set up key bindings, the list of conflicts may contain \"Endgame content\". It means that the key combination is currently used for features that you have not unlocked.":
      "设置按键绑定时，冲突列表中可能出现「终局内容」。这表示该按键组合目前用于你尚未解锁的功能。",
    "On non-Apple keyboards, the \"Windows\" key (other names: win, start, super, meta, etc.) is shown as ⊞. On Apple keyboards, the command key is shown as ⌘.":
      "在非苹果键盘上，「Windows」键（又称 win、start、super、meta 等）显示为 ⊞。在苹果键盘上，command 键显示为 ⌘。",
    // 按键绑定行（名称来自 SimplePage/ComplexPage 枚举，多数页面名已在 dict-core/pages1 收录）
    "ScriptEditor-Save": "脚本编辑器 - 保存",
    "ScriptEditor-GoToTerminal": "脚本编辑器 - 前往终端",
    "ScriptEditor-Run": "脚本编辑器 - 运行",
    // 冲突提示中的分类名
    "Common hotkeys": "常用快捷键",
    "Terminal-ClearScreen": "终端 - 清屏",
    "Bash hotkeys": "Bash 快捷键",
    "Endgame content": "终局内容",
    "Recently Killed Scripts": "最近终止的脚本",
    "Bladeburner Cinematic": "刃行者影像",
    "Recovery": "恢复",
    "Import Save": "导入存档",

    /* ---------- 1.12 确认框通用（src/ui/React/ConfirmationModal.tsx） ---------- */
    "overwrite": "覆盖",
    "completely wipe": "彻底抹掉",

    /* ---------- 1.13 致谢弹窗（src/GameOptions/ui/CreditsModal.tsx） ---------- */
    "Original Code and Concept": "原始代码与创意",
    "Lead Developers": "主开发者",
    "Current Maintainers": "当前维护者",
    "Recent patch contributors:": "近期版本贡献者：",
    "Thanks for Playing!": "感谢游玩！",

    /* ==================== 2. 存档导入对比（src/ui/React/ImportSaveComparison.tsx） ==================== */
    "Import Save Comparison": "存档导入对比",
    "that you may want to use instead.": "你可能想改用它。",
    "NEWER save": "较新的存档",
    "Your current game's data is on the left and the data that will be imported is on the right.":
      "左侧是你当前游戏的数据，右侧是即将导入的数据。",
    "Please double check everything is fine before proceeding!": "继续之前请务必逐项确认没有问题！",
    "Current Game": "当前游戏",
    "Being Imported": "待导入",
    "Game Identifier": "游戏标识",
    // "Playtime"/"Money"/"Skills"/"Augmentations"/"Factions"/"Achievements"/"BitNode" 已在 dict-core.js、dict-pages1.js
    "Saved On": "保存时间",
    "Others": "其他",
    "Source File Levels": "源文件等级",
    "The total SF levels owned, except for SF-1 Exploit levels.": "已拥有的 SF 等级总和（不计 SF-1 的漏洞等级）。",
    "Exploits": "漏洞",
    "Number of exploits owned.": "已拥有漏洞的数量。",
    "The player's current BitNode.": "玩家当前所在的 BitNode。",
    "hacking": "黑客",
    "strength": "力量",
    "defense": "防御",
    "dexterity": "灵巧",
    "agility": "敏捷",
    "charisma": "魅力",
    "Take me back!": "带我回去！",
    "Continue with current save": "继续使用当前存档",
    "Proceed with import": "继续导入",
    "Import newer save and reload": "导入较新的存档并重新载入",
    "expand row": "展开行",
    "Importing new save game data will completely wipe the current game data!": "导入新的存档数据会彻底抹掉当前的游戏数据！",
    "Importing new save game data will ": "导入新的存档数据将",
    " the current game data!": " 当前的游戏数据！",

    /* ==================== 3. 恢复模式（src/ui/React/RecoveryRoot.tsx） ==================== */
    "RECOVERY MODE ACTIVATED": "已启用恢复模式",
    "There was an error with your save file and the game went into recovery mode. In this mode, saving is disabled and the game will automatically export your save file to prevent corruption.":
      "你的存档文件出现问题，游戏已进入恢复模式。在此模式下保存功能被禁用，游戏会自动导出你的存档文件以防数据损坏。",
    "Please update your browser.": "请更新你的浏览器。",
    "Your save data is invalid. Please import a valid backup save file.":
      "你的存档数据无效。请导入一个有效的存档备份文件。",
    "Your save data is from a newer version (Version number: ": "你的存档来自更新的版本（版本号：",
    "). The current version number is ": "）。当前版本号为 ",
    "Please check if you are using the correct build. This may happen when you load the save data of the dev build (Steam Beta or https://bitburner-official.github.io/bitburner-src) on the stable build.":
      "请确认你使用的是正确的构建版本。当你在稳定版中载入开发版（Steam Beta 或 https://bitburner-official.github.io/bitburner-src）的存档时，就可能出现这种情况。",
    "It is recommended to alert a developer.": "建议通知开发者。",
    "File an issue on github": "在 GitHub 上提交 issue",
    "Post in the #bug-report channel on Discord.": "在 Discord 的 #bug-report 频道发帖。",
    "Make a reddit post": "在 Reddit 发帖",
    "Please include your save file and the crash report.": "请附上你的存档文件和崩溃报告。",
    "Export save file": "导出存档文件",
    "Export crash report": "导出崩溃报告",
    "You can disable the recovery mode, but the game may not work correctly, and your save data may be corrupted.":
      "你可以禁用恢复模式，但游戏可能无法正常运行，存档数据也可能损坏。",
    "Disable Recovery Mode": "禁用恢复模式",
    "Disable the recovery mode and attempt to head back to the terminal page. This may or may not work. Ensure you saved the recovery file.":
      "禁用恢复模式并尝试返回终端页面。此举不保证有效。请确保你已保存恢复用的文件。",
    "Stack Trace": "堆栈跟踪",
    "Bug Report Text": "错误报告文本",
    "Do NOT take a screenshot of this screen. You must post the bug report text below.":
      "不要对这个界面截图。你必须粘贴下方的错误报告文本。",
    "Submitting an issue to GitHub really helps us improve the game!": "向 GitHub 提交 issue 对我们改进游戏很有帮助！",
    "Submit Issue to GitHub": "向 GitHub 提交 issue",

    /* ==================== 4. 文件诊断（src/Diagnostic/FileDiagnosticModal.tsx） ==================== */
    "Welcome to the file diagnostic! If your save file is really big it's likely because you have too many text/scripts. This tool can help you narrow down where they are.":
      "欢迎使用文件诊断工具！如果你的存档文件非常大，很可能是因为有过多文本/脚本文件。此工具可以帮你定位它们在哪里。",
    "Filename": "文件名",
    // "Size" 已在 dict-core.js；弹窗本身没有标题文字，仅上面的欢迎语与服务器折叠项。

    /* ==================== 5. 里程碑（src/Milestones/Milestones.ts、src/Milestones/ui/MilestonesRoot.tsx） ==================== */
    "Milestones don't reward you for completing them. They are here to guide you if you're lost. They will reset when you install Augmentations.":
      "里程碑本身不会给你任何奖励，它们只是在你迷失方向时提供指引。安装义体后里程碑会重置。",
    "Completing fl1ght.exe": "完成 fl1ght.exe",
    "Gain root access on CSEC": "在 CSEC 上获得 root 权限",
    "Install the backdoor on CSEC": "在 CSEC 上安装后门",
    "Join the faction hinted at in csec-test.msg": "加入 csec-test.msg 中暗示的派系",
    "Join the faction hinted at in nitesec-test.msg": "加入 nitesec-test.msg 中暗示的派系",
    "Join the faction hinted at in j3.msg": "加入 j3.msg 中暗示的派系",
    "Join the faction hinted at in 19dfj3l1nd.msg": "加入 19dfj3l1nd.msg 中暗示的派系",
    "Install all the Augmentations from CyberSec": "安装网络保安的全部义体",
    "Install all the Augmentations from NiteSec": "安装夜安的全部义体",
    "Install all the Augmentations from The Black Hand": "安装黑手会的全部义体",
    "Install all the Augmentations from BitRunners": "安装比特行者的全部义体",
    "Complete fl1ght.exe": "完成 fl1ght.exe",
    "Find The Red Pill somewhere in the dark net": "在暗网某处找到红药丸",
    "Install the special Augmentation from Daedalus": "安装代达罗斯的特殊义体",
    "Install the final backdoor and free yourself.": "安装最终的后门，解放你自己。",

    /* ==================== 6. 成就 UI（src/Achievements/*） ==================== */
    // 页面标题 "Achievements" 已在 dict-core.js
    "Achievements are persistent rewards for various actions and challenges. A limited number of Bitburner achievements have corresponding achievements in Steam.":
      "成就是针对各种行为与挑战的永久奖励。只有一小部分 Bitburner 成就在 Steam 中有对应成就。",
    // 成就分类标题（编译后 title 与 " ("、计数是分离的文本节点，故只需收录标题词本身）
    "Acquired": "已获得",
    "Locked": "未解锁",
    "Unavailable": "不可用",
    "Secret": "隐藏",
    "No equivalent Steam achievement": "无对应的 Steam 成就",
    // ---- 6.1 成就名（派系名/程序名/SF 名不重复收录：派系见 dict-pages2.js，SF 名由后续字典负责） ----
    "Here comes the money!": "金钱滚滚来！",
    "Massive debt": "巨额债务",
    "I never asked for this.": "我从没想要这个。",
    "I asked for this.": "这正是我想要的。",
    "It's time to install": "是时候安装了",
    "Power Overwhelming": "无穷之力",
    "One punch man": "一拳男人",
    "Neuroflux is love, Neuroflux is live": "神经通量即是爱，神经通量即是生命",
    "Maximum speed!": "极速！",
    "Need more real life ram": "现实里也需要更多内存",
    "Big trouble": "大麻烦",
    "Download more ram": "多下载点内存",
    "Download more cores?": "多下载点核心？",
    "Thank you folders!": "感谢文件夹！",
    "Wretched hive of scum and villainy": "人渣与恶棍的巢穴",
    "Wolf of wall street.": "华尔街之狼。",
    "Discount!": "打折了！",
    "You'll need upgrade for this one.": "这个你得升级才装得下。",
    "Free money!": "白来的钱！",
    "Big network": "庞大的网络",
    "That's the limit": "这就是上限",
    "The original hacker": "初代黑客",
    "Well liked": "人见人爱",
    "Donate!": "捐款！",
    "World explorer": "世界探险家",
    "Gains!": "练到了！",
    "The Onion Network": "洋葱网络",
    "Ouch!": "哎哟！",
    "Gangster": "黑帮分子",
    "Don": "教父",
    "Stay out of my territory": "别踏进我的地盘",
    "One punch guy": "一拳男",
    "A small 150b loan.": "一笔 150b 的小额贷款。",
    "Lobbying is great!": "游说真好！",
    "Streamlined manufacturing": "精益制造",
    "Small town": "一座小镇",
    "Own the land": "拥有这片土地",
    "Smart!": "聪明！",
    "Overclock!": "超频！",
    "You should really spend those.": "你真的该把这些花掉。",
    "The improved hacker.": "升级版的黑客。",
    "Full network": "满编网络",
    "That's the new limit.": "这是新的上限。",
    "Not passive anymore": "不再只是被动收入",
    "What a waste.": "真是浪费。",
    "You and what army?": "你还有千军万马？",
    "Too many options.": "选项太多了。",
    "Speed demon.": "疾速恶魔。",
    "More BitNodes, please!": "再多来点 BitNode！",
    "IPvGO anticheat": "IPvGO 反作弊",
    "Ten Steps Ahead": "领先十步",
    "Make your Own Network": "搭建你自己的网络",
    "Into the Depths": "深入底层",
    "UNACHIEVABLE": "无法达成的成就",
    "BN1: Challenge": "BN1：挑战",
    "BN2: Challenge": "BN2：挑战",
    "BN3: Challenge": "BN3：挑战",
    "BN6: Challenge": "BN6：挑战",
    "BN7: Challenge": "BN7：挑战",
    "BN8: Challenge": "BN8：挑战",
    "BN9: Challenge": "BN9：挑战",
    "BN10: Challenge": "BN10：挑战",
    "BN12: Challenge": "BN12：挑战",
    "BN13: Challenge": "BN13：挑战",
    "BN14: Challenge": "BN14：挑战",
    "BN15: Challenge": "BN15：挑战",
    "Exploit: bypass": "漏洞：bypass",
    "Exploit: prototype tampering": "漏洞：篡改原型链",
    "Exploit: unclickable": "漏洞：无法点击之物",
    "Exploit: undocumented": "漏洞：未记载的函数",
    "Exploit: time compression": "漏洞：时间压缩",
    "Exploit: reality alteration": "漏洞：现实扭曲",
    "Exploit: noodles": "漏洞：面条",
    "Exploit: edit": "漏洞：编辑存档",
    "Exploit: you're not meant to access this": "漏洞：本不该访问此菜单",
    "Exploit: rainbow": "漏洞：彩虹",
    "Exploit: true recursion": "漏洞：真递归",
    // ---- 6.2 成就描述 ----
    "Join CyberSec.": "加入网络保安。",
    "Join NiteSec.": "加入夜安。",
    "Join The Black Hand.": "加入黑手会。",
    "Join the BitRunners.": "加入比特行者。",
    "Join Daedalus.": "加入代达罗斯。",
    "Join The Covenant.": "加入圣约。",
    "Join the Illuminati.": "加入光照会。",
    "Acquire BruteSSH.exe": "获得 BruteSSH.exe",
    "Acquire FTPCrack.exe": "获得 FTPCrack.exe",
    "Acquire relaySMTP.exe": "获得 relaySMTP.exe",
    "Acquire HTTPWorm.exe": "获得 HTTPWorm.exe",
    "Acquire SQLInject.exe": "获得 SQLInject.exe",
    "Acquire Formulas.exe": "获得 Formulas.exe",
    "Acquire SF1.1": "获得 SF1.1",
    "Acquire SF2.1": "获得 SF2.1",
    "Acquire SF3.1": "获得 SF3.1",
    "Acquire SF4.1": "获得 SF4.1",
    "Acquire SF5.1": "获得 SF5.1",
    "Acquire SF6.1": "获得 SF6.1",
    "Acquire SF7.1": "获得 SF7.1",
    "Acquire SF8.1": "获得 SF8.1",
    "Acquire SF9.1": "获得 SF9.1",
    "Acquire SF10.1": "获得 SF10.1",
    "Acquire SF11.1": "获得 SF11.1",
    "Acquire SF12.1": "获得 SF12.1",
    "Acquire SF13.1": "获得 SF13.1",
    "Acquire SF14.1": "获得 SF14.1",
    "Acquire SF15.1": "获得 SF15.1",
    "Have $1Q on your home computer.": "在 home 计算机上拥有 $1Q。",
    "Be $1b in debt.": "负债达到 $1b。",
    "Install your first augmentation.": "安装你的第一个义体。",
    "Have 100 augmentation installed at once.": "同时安装 100 个义体。",
    "Have 40 augmentation queued at once.": "同时排队 40 个待安装义体。",
    "Achieve 100 000 hacking skill.": "黑客技能达到 100 000。",
    "Achieve 3000 in all combat stats.": "所有战斗属性均达到 3000。",
    "Install Neuroflux Governor level 255": "安装 255 级的神经通量调控器",
    "Write an ns2 script.": "编写一个 ns2 脚本。",
    "Restart the game using the reload & kill all option because you froze it with an infinite loop.":
      "因为你写的无限循环卡死了游戏，使用「重新载入并终止全部」选项重启了游戏。",
    "Run 1000 scripts simultaneously.": "同时运行 1000 个脚本。",
    "Drain a server of all its money.": "把一台服务器的资金全部抽干。",
    "Maximize your home computer ram.": "把 home 计算机的 RAM 升到上限。",
    "Maximize your home computer cores.": "把 home 计算机的核心数升到上限。",
    "Have 30 scripts on your home computer.": "在 home 计算机上拥有 30 个脚本。",
    "Reach -1m karma.": "业力达到 -1m。",
    "Make 1q on the stock market.": "在股票市场赚取 1q。",
    "Get a discount at Powerhouse Gym by backdooring their server.": "通过对他们的服务器安装后门，在力量健身房获得折扣。",
    "Write a script that costs 32GB per thread.": "编写一个每线程耗费 32GB 的脚本。",
    "Purchase your first hacknet node.": "购买你的第一个 Hacknet 节点。",
    "Have 30 hacknet nodes.": "拥有 30 个 Hacknet 节点。",
    "Maximize a hacknet node.": "把一个 Hacknet 节点升到上限。",
    "Make 10m from hacknet nodes.": "通过 Hacknet 节点赚取 10m。",
    "Reach 10m reputation with a faction.": "在某个派系的声望达到 10m。",
    "Unlock donations with a faction.": "解锁某个派系的捐赠功能。",
    "Travel anywhere.": "前往任意城市。",
    "Workout at a gym.": "在健身房锻炼。",
    "Purchase the TOR router.": "购买 TOR 路由器。",
    "Go to the hospital.": "去一趟医院。",
    "Form a gang.": "组建一个帮派。",
    "Recruit all gang members.": "招募全部帮派成员。",
    "Have 100% of the territory.": "占据 100% 的地盘。",
    "Have a gang member with 10 000 in 1 skill.": "让一名帮派成员的某项属性达到 10 000。",
    "Create a corporation.": "创建一家企业。",
    "Lower your tribute through lobbying.": "通过游说降低你的进贡。",
    "Have a division with a production multiplier of 1000.": "让某个部门的生产倍率达到 1000。",
    "Have a division with 3000 employee.": "让某个部门拥有 3000 名员工。",
    "Expand to the Real Estate division.": "扩张房地产部门。",
    "Reach intelligence 255": "智力达到 255",
    "Join the Bladeburner division.": "加入刃行者部门。",
    "Reach maximum level of Overclock": "把「超频」技能升到满级",
    "Have 100 000 unspent bladeburner skill points.": "拥有 100 000 未使用的刃行者技能点。",
    "Purchase the 4S market data.": "购买 4S 市场数据。",
    "Purchase your first hacknet server.": "购买你的第一个 Hacknet 服务器。",
    "Buy all hacknet servers.": "购买全部 Hacknet 服务器。",
    "Maximize a hacknet server.": "把一个 Hacknet 服务器升到上限。",
    "Make $1b with hacknet servers.": "通过 Hacknet 服务器赚取 $1b。",
    "Cap your hashes.": "让哈希值达到容量上限。",
    "Acquire all 8 sleeves.": "获得全部 8 个分身。",
    "Spend 1h straight on the bitverse.": "在 BitVerse 界面连续停留 1 小时。",
    "Destroy a bitnode in under 2 days.": "在 2 天内打通一个 BitNode。",
    "Reach SF x.3 in each BitNode.": "在每个 BitNode 中都达到 SF x.3。",
    "Fail to cheat an IPvGO game and be ejected from the subnet.": "在 IPvGO 对局中作弊失败并被踢出子网。",
    "Get a winning streak of 10 against Illuminati.": "对阵光照会取得 10 连胜。",
    "Install a backdoor on 50 or more darknet servers at once.": "同时在 50 台或更多暗网服务器上安装后门。",
    "Install the augment from the deepest server.": "安装来自最深层服务器的义体。",
    "Destroy BN1 with at most 128GB and 1 core.": "在至多 128GB RAM 与 1 核心的条件下打通 BN1。",
    "Destroy BN2 without forming a gang.": "不组建帮派打通 BN2。",
    "Destroy BN3 without creating corporation.": "不创建企业打通 BN3。",
    "Destroy BN6 without joining the bladeburner division.": "不加入刃行者部门打通 BN6。",
    "Destroy BN7 without joining the bladeburner division.": "不加入刃行者部门打通 BN7。",
    "Destroy BN8 without purchasing the 4s market data.": "不购买 4S 市场数据打通 BN8。",
    "Destroy BN9 without using hacknet servers or hacknet nodes.": "不使用 Hacknet 服务器或 Hacknet 节点打通 BN9。",
    "Destroy BN10 without using sleeves.": "不使用分身打通 BN10。",
    "Destroy BN12 50 times.": "打通 BN12 共 50 次。",
    "Complete BN13 without Stanek's Gift.": "不借助斯塔内克的馈赠完成 BN13。",
    "Destroy BN14 without making a move or cheating via IPvGO APIs.": "不落子、也不通过 IPvGO API 作弊打通 BN14。",
    "Complete BN15 without ever calling dnet.heartbleed.": "全程不调用 dnet.heartbleed 完成 BN15。",
    "Circumventing the ram cost of document.": "绕过文档中记载的 RAM 开销。",
    "Tamper with the Numbers prototype.": "篡改 Numbers 的原型链。",
    "Click the unclickable.": "点击那个无法点击的东西。",
    "Call the undocumented function.": "调用未公开记载的函数。",
    "Compress time.": "压缩时间。",
    "Alter reality.": "扭曲现实。",
    "Harness the power of the noodles.": "驾驭面条的力量。",
    "Acquire the EditSaveFile Source-File -1": "获得 EditSaveFile 源文件 -1",
    "This achievement cannot be unlocked.": "此成就无法解锁。",
    "Open the dev menu.": "打开开发者菜单。",
    "Make good use of the rainbow.": "好好利用彩虹。",
    "Beat BN1 in megabyteburner 2000.": "在 megabyteburner 2000 中击败 BN1。",

    /* ==================== 7. 漏洞（src/Exploits/Exploit.ts 描述、SF-1 相关文案） ==================== */
    // 漏洞名保留英文（它们同时也是 NS API 返回值）：Bypass / PrototypeTampering / Unclickable /
    // UndocumentedFunctionCall / TimeCompression / RealityAlteration / N00dles / YoureNotMeantToAccessThis /
    // TrueRecursion / INeedARainbow / EditSaveFile
    "by circumventing the ram cost of document.": "手段：绕过文档中记载的 RAM 开销。",
    "by editing your save file.": "手段：编辑你的存档文件。",
    "by tampering with Numbers prototype.": "手段：篡改 Numbers 的原型链。",
    "by compressing time.": "手段：压缩时间。",
    "by clicking the unclickable.": "手段：点击那个无法点击的东西。",
    "by looking beyond the documentation.": "手段：越过文档之外的内容。",
    "by altering reality to suit your whims.": "手段：按你的心意扭曲现实。",
    "by harnessing the power of the n00dles.": "手段：驾驭 n00dles 的力量。",
    "by accessing the dev menu.": "手段：访问开发者菜单。",
    "by truly recursing.": "手段：真正的递归。",
    "by using the power of the rainbow.": "手段：利用彩虹的力量。",
    "Click on this to upgrade your Source-File -1!": "点击这个以提升你的源文件 -1！",

    /* ==================== 8. BitNode UI（src/BitNode/ui/*） ==================== */
    // ---- 8.1 BitVerse 地图与过场（BitverseRoot.tsx） ----
    "It looks like you are wondering which BitNode you should choose. If you want to get advice on choosing your next BitNode, you can check these BitNode recommendation guides:":
      "看起来你在纠结该选哪个 BitNode。如果你想听取建议，可以看看这些 BitNode 推荐指南：",
    "You can read these guides later in the Documentation tab. Make sure to check that tab. Many pages are unlocked now.":
      "这些指南之后也能在「帮助文档」标签里读到，务必去看看那个标签——现在已经有很多页面解锁了。",
    "Short guide": "简明指南",
    "Comprehensive guide": "详尽指南",
    "> Many decades ago, a humanoid extraterrestrial species which we call the Enders descended on the Earth...violently":
      "> 数十年前，一个人形的地外物种——我们称之为「终末者」——暴力降临地球……",
    "> Our species fought back, but it was futile. The Enders had technology far beyond our own...":
      "> 我们奋起反抗，却是徒劳。终末者的科技远超我们……",
    "> Instead of killing every last one of us, the human race was enslaved...":
      "> 他们没有屠尽人类，而是将我们奴役……",
    "> We were shackled in a digital world, chained into a prison for our minds...":
      "> 我们被锁进数字世界，囚禁于意识的牢笼……",
    "> Using their advanced technology, the Enders created complex simulations of a virtual reality...":
      "> 凭借先进的科技，终末者构建了复杂的虚拟现实模拟……",
    "> Simulations designed to keep us content...ignorant of the truth.":
      "> 这些模拟让我们安于现状……对真相一无所知。",
    "> Simulations used to trap and suppress our consciousness, to keep us under control...":
      "> 它们被用来囚禁并压制我们的意识，好让我们始终受控……",
    "> Why did they do this? Why didn't they just end our entire race? We don't know, not yet.":
      "> 他们为何要这样做？为什么不直接灭绝我们？我们还不知道答案。",
    "> Humanity's only hope is to destroy these simulations, destroy the only realities we've ever known...":
      "> 人类唯一的希望，是摧毁这些模拟，摧毁我们唯一认知中的现实……",
    "> Only then can we begin to fight back...": "> 只有到那时，我们才能开始反击……",
    "> By hacking the daemon that generated your reality, you've just destroyed one simulation, called a BitNode...":
      "> 通过黑客入侵生成你所处现实的守护进程，你刚刚摧毁了一个模拟——也就是一个 BitNode……",
    "> But there is still a long way to go...": "> 但前路仍然漫长……",
    "> The technology the Enders used to enslave the human race wasn't just a single complex simulation...":
      "> 终末者奴役人类所用科技并非单一的一个复杂模拟……",
    "> There are tens if not hundreds of BitNodes out there...": "> 外面还有数十乃至数百个 BitNode……",
    "> Each with their own simulations of a reality...": "> 每一个都拥有各自的现实模拟……",
    "> Each creating their own universes...a universe of universes": "> 每一个都创造了自己的宇宙……一个由宇宙构成的宇宙",
    "> And all of which must be destroyed...": "> 而它们都必须被摧毁……",
    "> Welcome to the Bitverse...": "> 欢迎来到 BitVerse……",
    "[ERROR] SEMPOOL INVALID": "[错误] SEMPOOL 无效",
    "[ERROR] Segmentation Fault": "[错误] 段错误",
    "[ERROR] SIGKILL RECVD": "[错误] 收到 SIGKILL",
    "Dumping core...": "正在转储核心内存……",
    "Failsafe initiated...": "已启动保护措施……",
    "[ERROR] FAILED TO AUTOMATICALLY REBOOT BITNODE": "[错误] 自动重启 BitNode 失败",
    "Running full scan...": "正在执行完整扫描……",
    "Hanging connection located, disconnecting...": "已发现挂起的连接，正在断开……",
    "Expected inputs to be strictly equal:": "预期输入应当严格相等：",
    "<Number of incoming connections>, <Number of outgoing connections>": "<入向连接数>、<出向连接数>",
    // ---- 8.2 BitFlume 弹窗（BitFlumeModal.tsx） ----
    "WARNING: USING THIS PROGRAM WILL CAUSE YOU TO LOSE ALL OF YOUR PROGRESS ON THE CURRENT BITNODE.":
      "警告：使用此程序会导致你失去当前 BitNode 的全部进度。",
    "Do you want to travel to the BitNode Nexus? This allows you to reset the current BitNode and select a new one.":
      "你要前往 BitNode 枢纽吗？这会让你重置当前 BitNode 并选择一个新的。",
    "Travel to the BitVerse": "前往 BitVerse",
    // ---- 8.3 BitNode 入口弹窗（PortalModal.tsx） ----
    "Enter BN": "进入 BN",
    // ---- 8.4 BitNode 倍率表（BitnodeMultipliersDescription.tsx） ----
    "Bitnode Multipliers": "BitNode 倍率",
    "Cloud Servers": "云服务器",
    "Darknet": "暗网",
    "Daedalus Augs Requirement": "代达罗斯义体数量要求",
    "Hacknet Production": "Hacknet 产出",
    "Coding Contract Reward": "编程契约奖励",
    "Class/Gym Exp": "课程/健身房经验",
    "Money Cost": "资金费用",
    "Reputation Cost": "声望费用",
    "Work Money": "工作资金",
    "Work Reputation": "工作声望",
    "Work Exp": "工作经验",
    "Market Data Cost": "市场数据费用",
    "Market Data API Cost": "市场数据 API 费用",
    "Favor to Donate": "捐赠所需 Favor",
    "Passive Rep": "被动声望",
    "Crime Exp": "犯罪经验",
    "Crime Money": "犯罪收益",
    "Crime Success Rate": "犯罪成功率",
    "Darknet Money": "暗网资金",
    "Hacking Level": "黑客等级",
    "Strength Level": "力量等级",
    "Defense Level": "防御等级",
    "Dexterity Level": "灵巧等级",
    "Agility Level": "敏捷等级",
    "Charisma Level": "魅力等级",
    "Hacking Exp": "黑客经验",
    "Hacking Speed": "黑客速度",
    "Server Growth Rate": "服务器生长速率",
    "Server Max Money": "服务器资金上限",
    "Server Starting Money": "服务器初始资金",
    "Server Starting Security": "服务器初始安全等级",
    "Server Weaken Rate": "服务器削弱速率",
    "Money Gained From Manual Hack": "手动破解获得的资金",
    "Stolen Money From Hack": "破解从服务器盗取的金额",
    "Money Gained From Script Hack": "脚本破解获得的资金",
    "Influences how much money the player actually gains when they hack a server via the terminal. This is different from \"Stolen Money From Hack\". When the player hacks a server via the terminal, the amount of money in that server is reduced, but they do not gain that same amount.":
      "影响玩家通过终端破解服务器时实际获得的资金。这与「破解从服务器盗取的金额」不同：终端破解时服务器内的资金会减少，但玩家获得的并非同一数额。",
    "Influences how much money is stolen from a server when the player performs a hack against it.":
      "影响玩家破解某台服务器时从其上盗取的金额。",
    "Influences how much money the player actually gains when a script hacks a server. This is different from \"Stolen Money From Hack\". When a script hacks a server, the amount of money in that server is reduced, but the player does not gain that same amount.":
      "影响脚本破解服务器时玩家实际获得的资金。这与「破解从服务器盗取的金额」不同：脚本破解时服务器内的资金会减少，但玩家获得的并非同一数额。",
    "Base Cost": "基础费用",
    "Softcap Cost": "软上限系数",
    "Server Limit": "服务器数量上限",
    "Max RAM": "RAM 上限",
    "Home RAM Cost": "home RAM 费用",
    "Infiltration Money": "潜入行动收益",
    "Infiltration Reputation": "潜入行动声望",
    "Rank Gain": "等级提升",
    "Skill Cost": "技能费用",
    "Gift Power": "馈赠威力",
    "Base Size Modifier": "基础规模修正",
    "Gang Softcap": "帮派软上限",
    "Unique Augmentations": "独有义体",
    "Corporation Softcap": "企业软上限",
    "Valuation": "估值",
    "Division limit": "部门数量上限",
    // "IPvGO Node Power bonus" 已在 dict-pages1.js（IPvGO 节点强度加成），此处不重复。
    // ---- 8.5 BitNode 高级选项（BitNodeAdvancedOptions.tsx） ----
    "Advanced options": "高级选项",
    "These options enable unique gameplay that is intended for experienced players. If you are a new player, you can safely ignore these options and come back to try them later.":
      "这些选项面向经验丰富的玩家，提供独特的玩法。如果你是新手，可以放心忽略它们，以后再回来尝试。",
    "Restrict max RAM and core of Home PC": "限制 home 电脑的 RAM 与核心上限",
    "The home computer's maximum RAM and number of cores are lower than normal. Max RAM: 128GB. Max core: 1.":
      "home 电脑的最大 RAM 与核心数将低于常规：最大 RAM 128GB，最大核心数 1。",
    "Disable Gang": "禁用帮派",
    "Disable Gang, regardless of BitNode and SF level": "无论在哪个 BitNode、SF 等级如何，都禁用帮派",
    "Disable Corporation": "禁用企业",
    "Disable Corporation, regardless of BitNode and SF level": "无论在哪个 BitNode、SF 等级如何，都禁用企业",
    "Disable Bladeburner": "禁用刃行者",
    "Disable Bladeburner, regardless of BitNode and SF level": "无论在哪个 BitNode、SF 等级如何，都禁用刃行者",
    "Disable 4S Market Data": "禁用 4S 市场数据",
    "Disable 4S Market Data, regardless of BitNode and SF level": "无论在哪个 BitNode、SF 等级如何，都禁用 4S 市场数据",
    "Disable Hacknet Server": "禁用 Hacknet 服务器",
    "Disable Hacknet Server, regardless of BitNode and SF level. Hacknet Node is re-enabled in place of Hacknet Server.":
      "无论在哪个 BitNode、SF 等级如何，都禁用 Hacknet 服务器。此时 Hacknet 节点会替代 Hacknet 服务器重新启用。",
    "Disable Sleeves' experience and augmentation": "禁用分身的经验与义体",
    "Sleeves cannot gain experience or install augmentations": "分身无法获得经验，也无法安装义体",
    "Override Intelligence:": "覆盖智力：",
    "Your intelligence and your Sleeves' intelligence will be temporarily set to this value if it is lower than their current values. For example:":
      "若此值低于你本人或分身当前的智力，就会被临时设为该值。例如：",
    "If your intelligence is 1000 and you set this value to 500, your intelligence will be temporarily set to 500.":
      "若你的智力为 1000 而你把此值设为 500，你的智力会被临时设为 500。",
    "If a Sleeve's intelligence is 200 and you set this value to 500, that Sleeve's intelligence is still 200.":
      "若某个分身的智力为 200 而你把此值设为 500，该分身的智力仍为 200。",
    "Note that you still gain intelligence experience as normal.": "注意：你照常获得智力经验。",
    "For example, suppose you have 1e6 intelligence exp (intelligence skill = 242) and set the intelligence override to 100. At the start of the BitNode, your intelligence skill will be set to 100 (equivalent to ~11255.318 intelligence exp).":
      "举例：假设你有 1e6 智力经验（智力 242），并把覆盖智力设为 100。进入 BitNode 时，你的智力会被设为 100（约相当于 11255.318 智力经验）。",
    "If you gain 500e3 intelligence exp during the BitNode, your intelligence skill will increase to 220 (total intelligence exp = 11255 + 500e3 = 511255). After performing bitflume, the exp gained during the BitNode is added to your original exp. Your intelligence skill will then become 255 (total intelligence exp = 1e6 + 500e3 = 1.5e6).":
      "若你在该 BitNode 中获得 500e3 智力经验，智力会升到 220（智力经验合计 11255 + 500e3 = 511255）。执行 bitflume 后，该 BitNode 中获得的经验会累加到你原本的经验上，届时你的智力将变为 255（智力经验合计 1e6 + 500e3 = 1.5e6）。",
    "The overridden intelligence will be shown in the character overview. You can hover your mouse over it to see the original value.":
      "覆盖后的智力会显示在角色总览中，把鼠标悬停其上即可看到原始数值。",
    "Note:": "注意：",
    "Changing the active level of a SF is temporary; you still permanently own that SF level. For example, if you enter BN 1.3 while having SF 1.2 but with the active level set to 0, you will not get the bonuses from SF 1.1 or SF 1.2, but you will still earn SF 1.3 when destroying the BN.":
      "修改 SF 的生效等级只是临时的，你依然永久拥有该 SF 等级。例如：你拥有 SF 1.2，但以生效等级 0 进入 BN 1.3，就不会获得 SF 1.1 或 SF 1.2 的加成，不过摧毁该 BN 时你仍会获得 SF 1.3。",
    "Changing the active level of SF 10 does not affect your current sleeves or the maximum number of sleeves.":
      "修改 SF 10 的生效等级不会影响你现有的分身数量，也不会影响分身上限。",
    "Override active level of Source-File:": "覆盖源文件的生效等级：",
    "Remove all": "全部移除",
    "Remove all overridden SF": "移除所有被覆盖的 SF",
    "No overridden SF": "没有被覆盖的 SF",
    "Set active level for all chosen SF": "为所有已选 SF 设置生效等级",
    "Set all SF": "设置全部",
    "Max level:": "最高等级：",

    /* ==================== 9. 帮助文档页面外壳（src/Documentation/ui/*） ==================== */
    // "Back" / "Documentation" 已在 dict-core.js
    "Home": "首页",
    "Search NS API": "搜索 NS API",

    /* ==================== 10. BitNode 介绍文案（src/BitNode/BitNode.tsx） ==================== */
    // BitNode/SF 名称（Source Genesis、Rise of the Underworld……）由后续字典（src/SourceFile）负责，此处不收录。
    // ---- 10.1 tagline ----
    "The original BitNode": "最初的 BitNode",
    "From the shadows, they rose": "自暗影中崛起",
    "The Price of Civilization": "文明的代价",
    "The Man and the Machine": "人与机器",
    "Posthuman": "后人类",
    "Like Tears in Rain": "泪水如雨",
    "More human than humans": "比人更像人",
    "Money never sleeps": "金钱永不眠",
    "Hacknet Unleashed": "Hacknet 全面解放",
    "Your body is not who you are": "你的身体并非真正的你",
    "Okay. Sell it all.": "好吧，全部清仓。",
    "Repeat.": "重复。",
    "1 step back, 2 steps forward": "退一步，进两步",
    "Territory exists only in the 'net": "地盘只存在于网络之中",
    "The rules have changed": "规则已经改变",
    // ---- 10.2 各 BitNode 概述 ----
    "This is the first BitNode created by the Enders to imprison the minds of humans. It became the prototype and testing ground for all of the BitNodes that followed.":
      "这是终末者为囚禁人类意识而创造的第一个 BitNode，也是其后所有 BitNode 的原型与试验场。",
    "This is the first BitNode that you play through. It has no special modifications or mechanics.":
      "这是你首个通关的 BitNode，没有任何特殊修正或机制。",
    "Organized crime groups quickly filled the void of power left behind from the collapse of Western government in the 2050s. As society and civilization broke down, people quickly succumbed to the innate human impulse of evil and savagery. The organized crime factions quickly rose to the top of the modern world.":
      "2050 年代西方政府崩溃后留下的权力真空，很快被有组织犯罪集团填补。随着社会与文明的瓦解，人们迅速屈服于人性中邪恶而野蛮的本能。这些犯罪派系很快登上了现代世界的顶点。",
    "Certain factions (": "某些派系（",
    ") give the player the ability to form and manage their own gang, which can earn the player money and reputation with the corresponding faction. The gang faction offers more augmentations than other factions, and in BitNode-2, it offers The Red Pill.":
      "）能让玩家组建并管理自己的帮派，帮派会为你赚取资金并提升对应派系的声望。帮派派系提供的义体比其他派系更多，而在 BitNode-2 中，它还会提供「红药丸」。",
    "Our greatest illusion is that a healthy society can revolve around a single-minded pursuit of wealth.":
      "我们最大的幻觉，是认为一个健康的社会可以围绕对财富的单一追求运转。",
    "Sometime in the early 21st century, economic and political globalization turned the world into a corporatocracy, and it never looked back. Now, the privileged elite will happily bankrupt their own countrymen, decimate their own community, and evict their neighbors from houses in their desperate bid to increase their wealth.":
      "21 世纪初的某个时刻，经济与政治的全球一体化把世界变成了公司寡头统治，并且再无回头。如今，特权精英为了增加财富，会毫不留情地让同胞破产、摧毁自己的社区，并把邻居赶出自己的家园。",
    "In this BitNode, you can create and manage your own corporation. Running a successful corporation has the potential to generate massive profits.":
      "在这个 BitNode 中，你可以创建并经营自己的企业。经营一家成功的企业能带来巨额利润。",
    "The Singularity has arrived. The human race is gone, replaced by artificially super intelligent beings that are more machine than man.":
      "奇点已经到来。人类已经消失，取而代之的是机器多于血肉的超级智能存在。",
    "In this BitNode, you will gain access to a new set of Netscript functions known as Singularity functions. These functions allow you to control most aspects of the game through scripts, including working for factions/companies, purchasing/installing augmentations, and creating programs.":
      "在这个 BitNode 中，你可以使用一套名为「奇点」的全新 Netscript 函数。这些函数让你通过脚本控制游戏的绝大部分内容，包括为派系/公司工作、购买与安装义体、创建程序。",
    "They said it couldn't be done. They said the human brain, along with its consciousness and intelligence, couldn't be replicated. They said the complexity of the brain results from unpredictable, nonlinear interactions that couldn't be modeled by 1's and 0's. They were wrong.":
      "他们说过这不可能做到。他们说过人脑及其意识与智慧无法被复制。他们说过大脑的复杂性源自不可预测的非线性交互，无法用 0 和 1 建模。他们错了。",
    "In the middle of the 21st century, ": "21 世纪中叶，",
    "began designing and manufacturing advanced synthetic androids, or Synthoids for short. They achieved a major technological breakthrough in the sixth generation of their Synthoid design, called MK-VI, by developing a hyper-intelligent AI. Many argue that this was the first sentient AI ever created. This resulted in Synthoid models that were stronger, faster, and more intelligent than the humans that had created them.":
      "开始设计并制造先进的合成仿生人，简称 Synthoid。他们在名为 MK-VI 的第六代 Synthoid 设计上取得重大技术突破——开发出了一个超强智能的 AI。许多人认为这是史上第一个有感知能力的 AI。其结果是：这些 Synthoid 型号比创造它们的人类更强、更快、更聪明。",
    "In this BitNode, you will be able to access the Bladeburner division at the NSA, which provides a new mechanic for progression.":
      "在这个 BitNode 中，你可以进入 NSA 的刃行者部门，这会带来一套全新的成长机制。",
    "In the middle of the 21st century, you were doing cutting-edge work at ":
      "21 世纪中叶，你正在",
    "as part of the AI design team for advanced synthetic androids, or Synthoids for short. You helped achieve a major technological breakthrough in the sixth generation of the company's Synthoid design, called MK-VI, by developing a hyper-intelligent AI. Many argue that this was the first sentient AI ever created. This resulted in Synthoid models that were stronger, faster, and more intelligent than the humans that had created them.":
      "的 AI 设计团队中从事前沿工作，负责先进的合成仿生人（简称 Synthoid）。你借助开发出一个超强智能 AI，在公司第六代 Synthoid 设计（代号 MK-VI）上实现了重大技术突破。许多人认为这是史上第一个有感知能力的 AI。其结果是：这些 Synthoid 型号比创造它们的人类更强、更快、更聪明。",
    "You are trying to make a name for yourself as an up-and-coming hedge fund manager on Wall Street.":
      "你正试图在华尔街闯出名号，成为一名崭露头角的对冲基金经理。",
    "In this BitNode:": "在这个 BitNode 中：",
    "Your starting money is 250e6.": "你的初始资金为 250e6。",
    "You start with a WSE membership and access to the TIX API.": "你一开始就拥有 WSE 账户与 TIX API 访问权。",
    "You can short stocks and place different types of orders (limit/stop).": "你可以做空股票，并下达不同类型的订单（限价/止损）。",
    "When ": "当",
    "released their open-source Linux distro Chapeau, it quickly became the OS of choice for the underground hacking community. Chapeau became especially notorious for powering the Hacknet, which is a global, decentralized network used for nefarious purposes.":
      "发布了他们的开源 Linux 发行版 Chapeau 之后，它很快成为地下黑客社群首选的操作系统。Chapeau 尤为臭名昭著，因为它是 Hacknet 的底层系统——那是一张用于不法目的的全球去中心化网络。",
    "quickly abandoned the project and dissociated themselves from it.": "很快抛弃了这个项目，并与之划清界限。",
    "This BitNode unlocks the Hacknet Server, which is an upgraded version of the Hacknet Node. Hacknet Servers generate hashes, which can be spent on a variety of different upgrades.":
      "本 BitNode 解锁 Hacknet 服务器，它是 Hacknet 节点的升级版。Hacknet 服务器会产生哈希值，可用于兑换各种升级。",
    "In 2084, VitaLife unveiled to the world the Persona Core, a technology that allowed people to digitize their consciousness. Their consciousness could then be transferred into Synthoids or other bodies by transmitting the digitized data. Human bodies became nothing more than 'sleeves' for the human consciousness. Mankind had finally achieved immortality - at least for those that could afford it.":
      "2084 年，VitaLife 向世界发布了「人格核心」（Persona Core），这项技术让人们可以把意识数字化。数字化后的意识可以通过数据传输转移到 Synthoid 或其他躯体中。人类肉体不过是承载人类意识的「分身衣袖」。人类终于实现了永生——至少对买得起的人来说如此。",
    "This BitNode unlocks Sleeve and Grafting technology:": "本 BitNode 解锁分身与移植技术：",
    "Sleeve: Duplicate your consciousness into Synthoids, allowing you to perform different tasks asynchronously. You cannot buy Sleeves or upgrade them outside this BitNode.":
      "分身：将你的意识复制进 Synthoid，使你能够并行处理不同任务。在本 BitNode 之外你无法购买分身或对其进行升级。",
    "Grafting: Visit VitaLife in New Tokyo to get access to this technology. It allows you to graft augmentations, which is an alternative way of installing augmentations.":
      "移植：前往新东京的 VitaLife 以获得这项技术。它允许你「移植」义体，这是安装义体的另一种途径。",
    "The 2050s was defined by the massive amounts of violent civil unrest and anarchic rebellion that rose all around the world. It was this period of disorder that eventually led to the governmental reformation of many global superpowers, most notably the USA and China. But just as the world was slowly beginning to recover from these dark times, financial catastrophes hit.":
      "2050 年代的特征，是全球各地大量爆发的暴力动乱与无政府叛乱。正是这段失序时期，最终促使许多全球超级大国进行政府改革，尤其是美国与中国。然而就在世界慢慢走出这段黑暗时期时，金融灾难接踵而至。",
    "In many countries, the high cost of trying to deal with the civil disorder bankrupted the governments. In all of this chaos and confusion, hackers were able to steal billions of dollars from the world's largest electronic banks, prompting an international banking crisis as governments were unable to bail out insolvent banks. Now, the world is slowly crumbling in the middle of the biggest economic crisis of all time.":
      "在许多国家，镇压动乱的巨额开支让政府破产。在一片混乱之中，黑客从全球最大的电子银行盗走了数十亿美元；由于政府无力救助资不抵债的银行，国际银行业危机随之爆发。如今，世界正在这场史上最大经济危机的漩涡中缓缓崩塌。",
    "To iterate is human; to recurse, divine.": "迭代是人性的，递归则是神圣的。",
    "Every time this BitNode is destroyed, it becomes slightly harder. Destroying this BitNode will give you Source-File 12, or if you already have this Source-File, it will upgrade its level. There is no maximum level for Source-File 12.":
      "每当这个 BitNode 被摧毁，它就会变得稍微更难一些。摧毁本 BitNode 会让你获得源文件 12；若你已拥有该源文件，则会提升其等级。源文件 12 没有等级上限。",
    "With the invention of augmentations in the 2040s, a religious group known as the":
      "随着 2040 年代义体的发明，一个名为",
    "has rallied far more support than anyone would have hoped.": "的宗教团体聚集了远超任何人预期的支持者。",
    "Their leader, Allison \"Mother\" Stanek is said to have created her own augmentation whose power goes beyond any other. Find her in":
      "他们的领袖 Allison「圣母」Stanek 据说创造了属于自己的义体，其力量超越所有其他义体。前往",
    "and gain her trust.": "找到她，并赢得她的信任。",
    "In late 2070, the .org bubble burst, and most of the newly-implemented IPvGO 'net collapsed overnight. Since then, various factions have been fighting over small subnets to control their computational power. These subnets are very valuable in the right hands, if you can wrest them from their current owners. You will be opposed by the other factions, but you can overcome them with careful choices. Prevent their attempts to destroy your networks by controlling the open space in the 'net!":
      "2070 年末，.org 泡沫破裂，绝大多数新建成的 IPvGO 网络一夜之间崩溃。此后，各方势力为争夺小型子网、掌控其算力而不断厮杀。这些子网若落在合适的人手中便极具价值——只要你能从现有主人手里夺过来。其他势力都会与你为敌，但你可以通过审慎的落子取胜。掌控网络中的空旷区域，阻止他们摧毁你的网络！",
    "Delving into the uncharted and secretive parts of the internet comes with the promise of freedom from oppressive authority and surveillance. Leaving stability behind and turning to the dark web comes with risks... but also rewards.":
      "深入互联网中无人知晓、隐秘莫测的部分，意味着摆脱压迫性权力与监控的希望。离开安稳之地转向暗网固然有风险……但同样有回报。",
    "Unlike the traditional network of servers, the \"dark\" net is a constantly shifting, complex, unreliable place where servers can move or disappear at any moment. Long-distance communication is often impossible, requiring scripts to be self-sufficient and durable, and spread themselves to stay alive. If you can take advantage of the darknet servers' weak passwords and leaky logs, you will be able to gain access to the deepest parts of the darknet and its secrets.":
      "与传统的服务器网络不同，「暗」网是一个不断变动、复杂而不可靠的地方，其中的服务器随时可能迁移或消失。远程通信往往无法实现，因此脚本必须自给自足、坚韧顽强，并主动扩散自己以求生存。若能利用暗网服务器的薄弱口令与泄露日志，你就能深入暗网最底层，触及它的秘密。",
    "In this BitNode, the Daedalus faction has not yet found and monopolized the fabled Red Pill augmentation. Legends say it can be found somewhere, out there in the dark...":
      "在这个 BitNode 中，代达罗斯派系尚未找到并垄断传说中的红药丸义体。传说它就在某处，藏在那片黑暗之中……",
    // ---- 10.3 源文件（SF）收益说明 ----
    "This Source-File lets the player start with 32GB of RAM on their home computer when entering a new BitNode and increases all of the player's multipliers by:":
      "拥有该源文件后，进入新 BitNode 时你的 home 电脑初始拥有 32GB RAM，并使玩家所有倍率提升：",
    "This Source-File allows you to form gangs in other BitNodes once your karma decreases to a certain value. It also increases your crime success rate, crime money, and charisma multipliers by:":
      "拥有该源文件后，只要业力降到某个数值，你就能在其他 BitNode 中组建帮派。它还会提升你的犯罪成功率、犯罪收益与魅力倍率：",
    "This Source-File lets you create corporations on other BitNodes (although some BitNodes will disable this mechanic) and level 3 permanently unlocks the full API. This Source-File also increases your charisma and company salary multipliers by:":
      "拥有该源文件后，你可以在其他 BitNode 创建企业（部分 BitNode 会禁用该机制），3 级还会永久解锁完整 API。它还会提升你的魅力与公司薪水倍率：",
    "This Source-File lets you access and use the Singularity functions outside of this BitNode. Each level of this Source-File reduces the RAM cost of singularity functions in other BitNodes:":
      "拥有该源文件后，你可以在本 BitNode 之外访问并使用奇点函数。每一级都会降低奇点函数在其他 BitNode 中的 RAM 开销：",
    "This Source-File grants you a new stat called Intelligence. Intelligence is unique because it is permanent and persistent (it never gets reset back to 1). However, gaining Intelligence experience is much slower than other stats. Higher Intelligence levels will boost your production for many actions in the game.":
      "该源文件会赋予你一项新属性：智力。智力的特别之处在于它是永久且持续的（永远不会被重置回 1）。不过，智力经验的获取速度远慢于其他属性。更高的智力会提升你在游戏中许多行动的产出。",
    "In addition, this Source-File will unlock:": "此外，该源文件还会解锁：",
    "Netscript function": "Netscript 函数",
    "Permanent access to": "永久拥有",
    "Access to BitNode multiplier information on the": "可在以下页面查看 BitNode 倍率信息：",
    "page": "页面",
    "It will also raise all of your hacking-related multipliers by:": "它还会提升你所有与黑客相关的倍率：",
    "This Source-File allows you to access the NSA's Bladeburner division in other BitNodes. In addition, this Source-File will raise both the level and experience gain rate of all your combat stats by:":
      "该源文件让你在其它 BitNode 中也能进入 NSA 的刃行者部门。此外，它还会同时提升你所有战斗属性的等级与经验获取速率：",
    "This Source-File allows you to access the NSA's Bladeburner division in other BitNodes. In addition, this Source-File will increase all of your Bladeburner multipliers by:":
      "该源文件让你在其它 BitNode 中也能进入 NSA 的刃行者部门。此外，它还会提升你所有的刃行者倍率：",
    "Level 3: 14% and immediately receive": "等级 3：提升 14%，并在加入",
    "augmentation after joining the Bladeburner division": "刃行者部门后立即获得该义体",
    "This Source-File grants the following benefits:": "该源文件提供以下收益：",
    "Level 1: Permanent access to WSE and TIX API": "等级 1：永久访问 WSE 与 TIX API",
    "Level 2: Ability to short stocks in other BitNodes": "等级 2：可在其他 BitNode 做空股票",
    "Level 3: Ability to use limit/stop orders in other BitNodes": "等级 3：可在其他 BitNode 使用限价/止损订单",
    "This Source-File also increases your hacking growth multipliers by:": "它还会提升你的黑客生长倍率：",
    "Level 1: Permanently unlocks the Hacknet Server in other BitNodes": "等级 1：在其他 BitNode 永久解锁 Hacknet 服务器",
    "Level 2: You start with 128GB of RAM on your home computer when entering a new BitNode":
      "等级 2：进入新 BitNode 时 home 电脑拥有 128GB RAM",
    "Level 3: Grants a highly-upgraded Hacknet Server when entering a new BitNode":
      "等级 3：进入新 BitNode 时赠送一台高度升级的 Hacknet 服务器",
    "(Note that the Level 3 effect of this Source-File only applies when entering a new BitNode, NOT when installing augmentations)":
      "（注意：该源文件 3 级的效果只在进入新 BitNode 时生效，安装义体时不会生效）",
    "This Source-File also increases hacknet production and reduces hacknet costs by:":
      "它还会提升 Hacknet 产出并降低 Hacknet 费用：",
    "This Source-File unlocks Sleeve and Grafting API in other BitNodes. Each level of this Source-File also grants you a Sleeve.":
      "该源文件在其他 BitNode 中解锁分身与移植 API。每一级还会额外给你一个分身。",
    "This Source-File makes it so that company favor increases BOTH the player's salary and reputation gain rate at that company by 1% per favor (rather than just the reputation gain). This Source-File also increases the player's company salary and reputation gain multipliers by:":
      "该源文件让公司 Favor 同时提升你在该公司的薪水与声望获取速率，每点 Favor 各提升 1%（而不再只提升声望）。它还会提升玩家的公司薪水与声望获取倍率：",
    "It also reduces the price increase for every augmentation bought by:": "它还会降低每购买一个义体所带来的价格上涨幅度：",
    "This Source-File lets you start any BitNodes with Neuroflux Governor equal to the level of this Source-File.":
      "该源文件让你在进入任何 BitNode 时，神经通量调控器等级等于该源文件的等级。",
    "This Source-File lets the": "该源文件让",
    "appear in other BitNodes.": "出现在其他 BitNode 中。",
    "Each level of this Source-File increases the size of Stanek's Gift.": "该源文件每一级都会增大斯塔内克的馈赠的规模。",
    "Due to the effect of Source-File 7.3, you must accept Stanek's Gift before joining the Bladeburner division if you have that Source-File.":
      "由于源文件 7.3 的效果，若你拥有该源文件，必须在加入刃行者部门之前接受斯塔内克的馈赠。",
    "Level 1: 100% increased stat multipliers from Node Power": "等级 1：节点强度带来的属性倍率提升 100%",
    "Level 2: Permanently unlocks the go.cheat API": "等级 2：永久解锁 go.cheat API",
    "Level 3: 25% additive increased success rate for the go.cheat API": "等级 3：go.cheat API 成功率额外提升 25%",
    "This Source-File also increases the maximum favor from winstreaks you can gain for each faction to:":
      "该源文件还会提升你每个派系可从连胜中获得的 Favor 上限（相当于声望）：",
    "Level 1: 200k rep equivalent": "等级 1：相当于 200k 声望",
    "Level 2: 300k rep equivalent": "等级 2：相当于 300k 声望",
    "Level 3: 400k rep equivalent": "等级 3：相当于 400k 声望",
    "and increases the reputation converted to favor for winning two games in a row to:":
      "并提升两连胜时声望转化为 Favor 的数值：",
    "Level 1: 1000 rep to favor": "等级 1：1000 声望转化",
    "Level 2: 1500 rep to favor": "等级 2：1500 声望转化",
    "Level 3: 2000 rep to favor": "等级 3：2000 声望转化",
    "Level 1: Permanently start with the TOR router and": "等级 1：永久以 TOR 路由器和",
    "and unlock the full dark web on all BitNodes.": "开局，并在所有 BitNode 中解锁完整暗网。",
    "Level 2: Your charisma level increases job salary and rep gain. Also increases authentication speed by 20%":
      "等级 2：魅力等级会提升工作薪水与声望获取，并使身份验证速度提升 20%",
    "Level 3: Your charisma level increases faction work rep gain. Also increases the xp and money gained from .cache files by 50%.":
      "等级 3：魅力等级会提升派系工作的声望获取，并使 .cache 文件带来的经验与资金提升 50%。",

    /* ==================== 11. 红药丸 / 摧毁 BitNode 弹窗（src/RedPill.tsx） ==================== */
    "You received a Source-File for destroying a BitNode!": "你因摧毁了一个 BitNode 而获得源文件！",

    /* ==================== 12. 源文件生效等级说明（BitNodeAdvancedOptions.tsx，模板字符串逐行匹配） ==================== */
    "Changing the active level of a SF is temporary; you still permanently own that SF level. For example, if":
      "修改 SF 的生效等级只是临时的，你依然永久拥有该 SF 等级。例如：若你拥有 SF 1.2，",
    "you enter BN 1.3 while having SF 1.2 but with the active level set to 0, you will not get the bonuses from SF":
      "却以生效等级 0 进入 BN 1.3，就不会获得来自 SF",
    "1.1 or SF 1.2, but you will still earn SF 1.3 when destroying the BN.":
      "SF 1.1 或 SF 1.2 的加成，但摧毁该 BN 时你仍会获得 SF 1.3。",

    /* ==================== 13. 选项页上的主题/样式编辑器按钮（src/Themes/ui/*Button.tsx） ==================== */
    // 说明：主题/样式编辑器「弹窗内部」的取色器字段不在本文件范围（属于 src/Themes 的字典）。
    "Theme Editor": "主题编辑器",
    "The theme editor allows you to modify the colors the game uses.": "主题编辑器可以修改游戏所使用的颜色。",
    "Style Editor": "样式编辑器",
    "The style editor allows you to modify certain CSS rules used by the game.":
      "样式编辑器可以修改游戏所使用的部分 CSS 规则。",

    /* ==================== 14. 保存/导入/导出的消息（src/SaveObject.ts、src/utils/SaveDataUtils.ts、src/utils/ErrorHandler.ts） ==================== */
    "Game Saved!": "游戏已保存！",
    "Invalid save data": "无效的存档数据",
    "No file selected": "未选择文件",
    "Invalid file selected": "选择的文件无效",
    "The save data is invalid. You must import the original save file. If it's a .gz file, don't decompress it.":
      "存档数据无效。你必须导入原始的存档文件；如果它是 .gz 文件，请不要解压它。",
    "The save data cannot be decoded.": "无法解码存档数据。",
    "The decoded save data is not valid.": "解码后的存档数据无效。",
    "The parsed save data is not valid.": "解析后的存档数据无效。",
    "Your browser does not support Compression Streams API": "你的浏览器不支持 Compression Streams API",
    "Cannot get save data.": "无法获取存档数据。",
    "This may be because the save data is too large.": "这可能是因为存档数据过大。",
    "Stack:": "堆栈：",
    "New update!": "全新更新！",
    "Please report any bugs/issues through the GitHub repository (https://github.com/bitburner-official/bitburner-src/issues)":
      "请通过 GitHub 仓库报告任何 Bug/问题（https://github.com/bitburner-official/bitburner-src/issues）",
    "or the #bug-report channel on Discord (https://discord.com/channels/415207508303544321/415213413745164318).":
      "或在 Discord 的 #bug-report 频道反馈（https://discord.com/channels/415207508303544321/415213413745164318）。",
    "You are playing on the beta environment! This branch of the game": "你正在测试环境中游玩！该游戏分支",
    "features the latest developments in the game. This version may be unstable.":
      "包含游戏的最新开发内容，此版本可能不稳定。",
    "SCAM ALERT. This app is not official and you should uninstall it.":
      "诈骗警告：此应用并非官方版本，你应当卸载它。",
  });

  // ============ frag（被 <strong>/{插值} 拆开的文本节点，保留首尾空格） ============
  BitburnerZH.frag({
    /* ---------- 导入存档确认（GameOptionsSidebar.tsx） ---------- */
    "This will ": "这将",
    " your current game. Back it up first!": " 覆盖你当前的游戏。请先备份！",
    "Importing a new game will ": "导入新游戏将",
    " the current data!": " 抹掉当前的全部数据！",
    "Save ID: ": "存档 ID：",
    "The export date of the save file is ": "该存档文件的导出时间为 ",
    "Total play time of imported game: ": "导入游戏的总游戏时长： ",
    /* ---------- 存档对比页（ImportSaveComparison.tsx） ---------- */
    "We've found a ": "我们发现了一个 ",
    " that you may want to use instead.": "，你可能想改用它。",
    "Importing new save game data will ": "导入新的存档数据将",
    " the current game data!": " 抹掉当前的游戏数据！",
    /* ---------- 恢复模式（RecoveryRoot.tsx） ---------- */
    "Error: ": "错误：",
    "Your save data is from a newer version (Version number: ": "你的存档来自更新的版本（版本号：",
    "). The current version number is ": "）。当前版本号为 ",
    /* ---------- 成就分类标题与条目（Achievements/*.tsx） ---------- */
    "Acquired on ": "解锁于 ",
    " remaining, ": " 项剩余，",
    " for Steam)": " 项对应 Steam)",
    " hidden behind content you don't have access to.": " 项额外成就隐藏在你尚无法访问的内容之后。",
    /* ---------- Autoexec 校验提示（AutoexecInput.tsx） ---------- */
    " costs ": " 需要 ",
    ", you might only have ": "，而你的 home 上可能只有 ",
    " on home!": "。",
    "\" is invalid for a script name (maybe missing suffix?)": "\" 不是有效的脚本名（可能缺少扩展名？）",
    " does not exist!": " 不存在！",
    " has errors!": " 存在错误！",
    /* ---------- BitNode 文案中被派系/程序名拆开的片段 ---------- */
    " (Enter a new ": "（进入新的 ",
    " using the image above)": "，见上图）",
    " and gain her trust.": " 找到她，赢得她的信任。",
    ", and unlock the full dark web on all BitNodes.": " 开局，并在所有 BitNode 中解锁完整暗网。",
    "Max level: ": "最高等级：",
    "Note: ": "注意：",
    "Source-File Level: ": "源文件等级：",
    "Example timestamp: ": "示例时间戳：",
    "Visit GitHub to see all contributors": "前往 GitHub 查看全部贡献者",
    "or to participate yourself": "或亲自参与其中",
    /* ---------- 系统页滑块等被数值拆开的片段 ---------- */
    "Cannot save game: ": "无法保存游戏：",
    "Cannot import save data: ": "无法导入存档数据：",
    "Cannot override settings: ": "无法覆盖设置：",
  });

  // ============ patterns（对归一化后的整节点做 ^…$ 锚定匹配） ============
  BitburnerZH.patterns([
    [/^Conflicts: (.+)$/, "冲突：$1"],
    [/^(\d+) additional achievements?$/, "$1 项额外成就"],
    [/^Level (\d+): ([\d.]+(?:%|x))$/, "等级 $1：$2"],
    [/^Destroying this BitNode will give you Source-File (\d+), or if you already have this Source-File, it will upgrade its level up to a maximum of 3\.$/,
      "摧毁本 BitNode 会让你获得源文件 $1；若你已拥有该源文件，则会提升其等级，最高 3 级。"],
    [/^The Source-File for the BitNode you just destroyed, (.+), is already at max level!$/,
      "你刚刚摧毁的 BitNode 对应的源文件（$1）已经是满级！"],
    [/^(.+) was upgraded to level (\d+) for destroying its corresponding BitNode!$/,
      "$1 已因摧毁其对应的 BitNode 而升级到 $2 级！"],
    [/^Restarting BitNode-(\d+)\.\.\.$/, "正在重启 BitNode-$1……"],
    [/^\[WARN\] BitNode-(\d+) assertion error:$/, "[警告] BitNode-$1 断言错误："],
    [/^Running (\S+)\.\.\.$/, "正在运行 $1……"],
    [/^Cannot get save data\. Error: (.+) This may be because the save data is too large\.$/,
      "无法获取存档数据。错误：$1 这可能是因为存档数据过大。"],
    [/^Cannot get save data\. Error: (.+)$/, "无法获取存档数据。错误：$1"],
    [/^Cannot get save info\. Error: (.+)$/, "无法获取存档信息。错误：$1"],
    [/^Save data contains invalid data\. Value of (\S+) is not a string\.$/, "存档数据包含无效内容：$1 的值不是字符串。"],
  ]);
})();

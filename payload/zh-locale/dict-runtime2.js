/* Bitburner 汉化字典 —— 运行时消息批次2：Netscript API 各函数的玩家可见报错与 tail 日志（接力 dict-runtime.js）。
 * 基准：bitburner-src tag v3.0.1。抓取镜像：gh-proxy.com（raw.githubusercontent 不可达）。
 * 已覆盖源码文件：
 *   1. src/NetscriptFunctions.ts（顶级 ns 函数：hackAnalyze_x、sleep、grow、weaken 日志、nuke/brutessh/ftpcrack/relaysmtp/httpworm/sqlinject、
 *      spawn/kill/killall/exit、scp/mv/write/read/clear/rm/getFileMetadata、wget/prompt(参数错误)、dynamicImport、disableLog/enableLog、getServer 私有句）
 *   2. src/NetscriptFunctions/Singularity.ts（university/gym/travel/TOR/darkweb 程序、backdoor、home 电脑升级、company/faction/donate、createProgram、crime、b1tflum3/destroyW0r1dD43m0n、softReset/installAugmentations 日志）
 *   3. src/NetscriptFunctions/Gang.ts、Corporation.ts、Hacknet.ts、StockMarket.ts、Sleeve.ts、Go.ts、Stanek.ts、CodingContract.ts、Bladeburner.ts
 *   4. src/NetscriptFunctions/Grafting.ts（ns.grafting.*：Grafting API 权限、必须在新东京、资金/前置不足日志、"Began grafting Augmentation X."、
 *      waitForOngoingGrafting 的拒绝句 "The current work is not a grafting work..."；"Invalid aug: X" 已在 2.7 注册，未重复）
 *   5. src/NetscriptFunctions/Infiltration.ts（ns.infiltration.getInfiltration 的地点校验 3 句）
 *   6. src/Netscript/killWorkerScript.ts（"Script killed."、"Script killed by script X with PID N"、教程期间不可终止进程提示、atExit 回调报错行）
 *   7. src/Netscript/ScriptDeath.ts（"NS instance has already been killed (...)"）
 *   8. src/Netscript/WorkerScript.ts（构造期 4 句：Invalid PID / invalid server ip / invalid script filename / running on non-existent server?）
 * 已核实无需新增（本批 7 个文件中剩余两个）：
 *   - src/NetscriptFunctions/UserInterface.ts：全部玩家可见句已由 dict-runtime.js 收录——
 *     "Successfully set theme"、"Successfully set styles"、"Reinitialized theme to default"、"Reinitialized styles to default"、"Clearing terminal"
 *     （dict-runtime.js 537-541 行 exact），"Failed to set theme. Errors: ..."、"Failed to set styles. Errors: ..."（563-564 行 pattern），
 *     openTail/renderTail/moveTail/resizeTail/closeTail/setTailTitle/setTailFontSize/setTailMinimized 只会走
 *     helpers.getCannotFindRunningScriptErrorMessage（dict-runtime.js 229-230 行）；windowSize/getTheme/getStyles/getGameInfo 无文本输出。
 *     故本文件不重复注册 ns.ui.* 条目（旧注释的"未覆盖"项据此作废）。
 *   - src/NetscriptFunctions/Extra.ts（ns.extra：openDevMenu/exploit/bypass/alterReality/rainbow）：无玩家可见句，
 *     只有 console.warn("I am sure that this variable is false.") 与 console.warn("Reality has been altered!")，属 DevTools 控制台，不入字典。
 * 本批未收（说明）：
 *   - "Script killed due to ..." / "X killed by Y" 一类原因行在 v3.0.1 中并不位于 killWorkerScript.ts：该文件只输出 "Script killed."
 *     与 "Script killed by script <name> with PID <pid>"，其余原因是调用方作为 message 参数传入（src/Server/*、src/Terminal/*、
 *     src/NetscriptFunctions.ts 等范围外文件），待下一批次核对补录。
 *   - console.error 专属句未收：killWorkerScript 的 "Could not find server on which this script is running: X"、
 *     "Couldn't find runningScriptMap for key X"，WorkerScript.getScript 的 "Failed to find underlying Script object in ..."。
 * 抓取通道（第三批）：①cdn.jsdelivr.net 仍 fetch failed；②gh-proxy.com/https://raw.githubusercontent.com/… 七个文件全部 HTTP 200，本批原文据此核对；
 *   ③api.github.com/contents 仅用于列出 src/Netscript 下的 sha。
 * 其他说明：
 *   - 派生消息（来自范围外文件，整句已以捕获组保留或已在别处收录）：FactionHelpers.purchaseAugmentation 的 result.message
 *     （"You already purchased the 'X' augmentation." 等已在 dict-pages2.js 收录）；Bladeburner startAction/upgradeSkill/joinFaction 的
 *     attempt.message（已在 dict-pages3.js 以 GUI 句收录）；SleeveCovenantPurchases、Gang.helpers canCreateGang、
 *     Go netscriptGoImplementation、CodingContract Contract.isValid、Hacknet purchaseHashUpgrade 的消息（范围外，未收）。
 *   - v3.0.1 实况说明：Singularity.ts 中没有 "You cannot install Augmentations while..."、"Not enough reputation..." 之类句子
 *     （这些检查在 FactionHelpers/AugmentationHelpers 中，GUI 弹窗形态已由 pages2 收录）；installAugmentations 只校验队列非空。
 * 去重说明（已在别处注册，勿重复）：
 *   - dict-runtime.js：通用参数断言、getServer 错误、"Script X does not exist on Y."、"You do not have root access on X."、
 *     runScriptFromScript 的 "Cannot run X (t=N) on Y..."、netscriptCanHack 的 hack/grow/weaken 拒绝句、
 *     "Could not calculate ram usage for X on Y."（getScriptRam 与 LogBox 同句）、"Cannot find running script ..."、hack() 日志、
 *     "Executing on 'X' in T (t=N)"（不带句号版；本文件另收 grow() 带句号变体）。
 *   - dict-terminal.js："You have purchased the X program. The new program can be found on your home computer."（purchaseProgram 同句）、
 *     "Cannot backdoor this kind of server"（不带句号版；本文件收 NS 的带句号变体）、"Coding Contract solution was: ..."（同句）。
 *   - dict-pages2.js：城市/地点/派系名、TOR 购买 GUI 句（"You already have a TOR Router!" 等大写变体）、FactionHelpers 购买义体失败句、
 *     "You have been accepted into the Bladeburner division!"（感叹号版；本文件收 NS 句号版）。
 *   - dict-pages3.js：Bladeburner 行动 startAction/upgradeSkill/joinFaction 的 attempt.message、住院句。
 *   - dict-pages5.js：买卖股票失败长句；pages4：Contract SUCCESS/FAILED 弹窗句与 "Contract SUCCESS - ..." 终端句（pages4 注记 terminal 译"编程合同"，本文件按术语表用"编程契约"）。
 *   - dict-core.js："Not enough money"、通用 "You do not have enough money to (X)."（句号结尾版）。
 * 术语（与既有字典一致）：hack=骇入、grow=生长、weaken=削弱、favor=好感、reputation=声望、Respect(帮派)=威望、faction=派系、
 *   augmentation=义体、sleeve=分身、gang=帮派、corporation=企业、threads=线程、root access=root 权限、Coding Contract=编程契约、
 *   Stanek's Gift=斯塔内克的馈赠、4S Market Data=4S 市场数据、TOR 路由器、TIX API/WSE/PID/RAM/.exe 程序名/主机名/函数名/枚举值保留英文；
 *   城市/地点名沿用 pages2 定译（Aevum=永恒、Sector-12=第12区、Volhaven=沃尔黑文、Chongqing=重庆、New Tokyo=新东京、Ishima=伊什马、
 *   Summit University=巅峰大学、Rothman University=罗思曼大学、ZB Institute of Technology=ZB 理工学院、Crush Fitness Gym=重锤健身馆、
 *   Snap Fitness Gym=速捷健身馆、Iron Gym=钢铁健身房、Powerhouse Gym=力量健身房、Millenium Fitness Gym=千禧健身馆）。
 * 结构说明：报错经 ErrorModal/终端/日志窗渲染为单行文本节点；含变量的整行用 ^...$ 锚定的 patterns；固定句用 exact；多行句按行拆分逐行匹配；
 *   patterns 中先注册者胜，故具体句在前、通用兜底句在后。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  // ============ 1. exact：无变量整句 ============
  BitburnerZH.exact({
    /* ---- engine.tsx：离线收益弹窗（JSX 插值拆成多节点） ---- */
    "Offline for": "离线时长",
    ". While you were offline:": "。在你离线期间：",
    "Your scripts generated": "你的脚本产生了",
    "Your Hacknet Nodes generated": "你的 Hacknet 节点产生了",
    "You gained": "你获得了",
    "reputation divided amongst your factions": "声望，已分配给你的各个派系",
    /* ---- 旅行页说明 ---- */
    "From": "从",
    ", you can travel to any other city! A ticket costs": " 起，你可以前往任何其他城市！机票费用为",
    /* ---- 文档 TOC 标题 ---- */
    "TypeScript and React": "TypeScript 与 React",
  });

  BitburnerZH.patterns([
    /* ---- convertTimeMsToTimeElapsedString 的时长串 ---- */
    [/^(\d+) days? (\d+) hours? (\d+) minutes? (\d+) seconds?$/, "$1 天 $2 小时 $3 分 $4 秒"],
    [/^(\d+) hours? (\d+) minutes? (\d+) seconds?$/, "$1 小时 $2 分 $3 秒"],
    [/^(\d+) minutes? (\d+) seconds?$/, "$1 分 $2 秒"],
    [/^(\d+) seconds?$/, "$1 秒"],
    [/^([\d,.]+) seconds?$/, "$1 秒"],
    [/^([\d,.]+) minutes?$/, "$1 分钟"],
    [/^([\d,.]+) hours?$/, "$1 小时"],
    [/^([\d,.]+) days?$/, "$1 天"],
    [/^\/ sec$/, "/ 秒"],
    [/^(\S+) \/ sec$/, "$1 / 秒"],
  ]);

  BitburnerZH.exact({
    /* ---- 1.1 src/NetscriptFunctions.ts：顶级函数 ---- */
    "args must be an array.": "args 必须是一个数组。",
    "Takes at least 1 argument.": "至少要传入 1 个参数。",
    "First argument must be string for the format.": "第一个参数必须是用于格式化的字符串。",
    "About to exit...": "即将退出……",
    "Exiting...": "正在退出……",
    "Script execution is canceled because you are in Bitverse.": "脚本执行已取消，因为你正处于 Bitverse（轮回界）中。",
    "Cannot find running script. This is a bug.": "找不到运行中的脚本。这是一个 bug。",
    "Usage: kill(scriptname, server, [arg1], [arg2]...)": "用法：kill(脚本名, 服务器, [参数1], [参数2]...)",
    "Enabled logging for all functions": "已启用所有函数的日志",
    "You do not have the NUKE.exe virus!": "你没有 NUKE.exe 病毒！",
    "Not enough ports opened to use NUKE.exe virus.": "开启的端口不足，无法使用 NUKE.exe 病毒。",
    "You do not have the BruteSSH.exe program!": "你没有 BruteSSH.exe 程序！",
    "You do not have the FTPCrack.exe program!": "你没有 FTPCrack.exe 程序！",
    "You do not have the relaySMTP.exe program!": "你没有 relaySMTP.exe 程序！",
    "You do not have the HTTPWorm.exe program!": "你没有 HTTPWorm.exe 程序！",
    "You do not have the SQLInject.exe program!": "你没有 SQLInject.exe 程序！",
    "Script was not found": "未找到脚本",
    "'mv' can only be used on scripts (.js, .jsx, .ts, .tsx) and text files (.txt, .json, .css)":
      "'mv' 只能用于脚本（.js、.jsx、.ts、.tsx）与文本文件（.txt、.json、.css）",
    "WARNING: Did nothing, source and destination paths were the same.": "警告：未执行任何操作，源路径与目标路径相同。",
    "Requires Source-File 5 to run.": "需要源文件 5 才能运行。",
    /* ---- 1.2 src/NetscriptFunctions/Singularity.ts：固定句 ---- */
    "Not enough money to travel.": "资金不足以旅行。",
    "You already have a TOR router!": "你已经拥有 TOR 路由器了！",
    "You cannot afford to purchase a Tor router.": "你买不起 TOR 路由器。",
    "You have purchased a Tor router!": "你已购买 TOR 路由器！",
    "You do not have the TOR router.": "你没有 TOR 路由器。",
    "Cannot backdoor this kind of server.": "无法在此类服务器上安装后门。",
    "You have already installed a backdoor on this server. You can check if the server has a backdoor installed with ns.getServer().backdoorInstalled.":
      "你已经在此服务器上安装过后门。可用 ns.getServer().backdoorInstalled 检查后门状态。",
    "Not currently working": "当前没有在工作",
    "Your home computer is at max cores.": "你的 home 电脑核心数已达上限。",
    "Your home computer is at max RAM.": "你的 home 电脑 RAM 已达上限。",
    "Soft resetting. This will cause this script to be killed": "正在软重置。这将导致本脚本被终止",
    "You do not have any Augmentations to be installed.": "你没有待安装的义体。",
    "Installing Augmentations. This will cause this script to be killed": "正在安装义体。这将导致本脚本被终止",
    "Could not resolve file path. callbackScript is null.": "无法解析文件路径。callbackScript 为 null。",
    "WorldDaemon is not a normal server. This is a bug. Please contact developers.":
      "WorldDaemon 不是普通服务器。这是一个 bug，请联系开发者。",
    "Requirements not met to destroy the world daemon": "未满足摧毁 world daemon 的条件",
    "This function is not case-sensitive. Did you perhaps forget .exe at the end?":
      "此函数不区分大小写。你是不是忘了结尾的 .exe？",
    // 'You cannot study at / workout at'：城市与地点名沿用 pages2 定译（插入值固定，可整句 exact）
    "You cannot study at 'Summit University' because you are not in 'Aevum'.": "你无法在“巅峰大学”学习，因为你不在“永恒”。",
    "You cannot study at 'Rothman University' because you are not in 'Sector-12'.": "你无法在“罗思曼大学”学习，因为你不在“第12区”。",
    "You cannot study at 'ZB Institute of Technology' because you are not in 'Volhaven'.": "你无法在“ZB 理工学院”学习，因为你不在“沃尔黑文”。",
    "You cannot workout at 'Crush Fitness Gym' because you are not in 'Aevum'.": "你无法在“重锤健身馆”锻炼，因为你不在“永恒”。",
    "You cannot workout at 'Snap Fitness Gym' because you are not in 'Aevum'.": "你无法在“速捷健身馆”锻炼，因为你不在“永恒”。",
    "You cannot workout at 'Iron Gym' because you are not in 'Sector-12'.": "你无法在“钢铁健身房”锻炼，因为你不在“第12区”。",
    "You cannot workout at 'Powerhouse Gym' because you are not in 'Sector-12'.": "你无法在“力量健身房”锻炼，因为你不在“第12区”。",
    "You cannot workout at 'Millenium Fitness Gym' because you are not in 'Volhaven'.": "你无法在“千禧健身馆”锻炼，因为你不在“沃尔黑文”。",
    "Traveled to Aevum": "已前往永恒",
    "Traveled to Chongqing": "已前往重庆",
    "Traveled to Sector-12": "已前往第12区",
    "Traveled to New Tokyo": "已前往新东京",
    "Traveled to Ishima": "已前往伊什马",
    "Traveled to Volhaven": "已前往沃尔黑文",
    /* ---- 1.3 src/NetscriptFunctions/Gang.ts ---- */
    "Must have joined gang": "必须已加入帮派",
    'Invalid memberName: "" (empty string)': '无效的 memberName：""（空字符串）',
    'Invalid newName: "" (empty string)': '无效的 newName：""（空字符串）',
    "Engaging in Gang Territory Warfare": "已开始参与帮派领土战争",
    "Disengaging in Gang Territory Warfare": "已停止参与帮派领土战争",
    /* ---- 1.4 src/NetscriptFunctions/Corporation.ts ---- */
    "cannot be called without a corporation": "没有企业时无法调用",
    "Must own a corporation.": "必须拥有企业。",
    "You do not have access to this API.": "你无权使用此 API。",
    "You must provide a positive number": "必须提供正数",
    "You have not purchased the Smart Supply upgrade!": "你尚未购买 Smart Supply（智能调拨）升级！",
    "You have not unlocked the Export feature!": "你尚未解锁 Export（出口）功能！",
    "This API will not do anything and just return false if you pass \"Unassigned\" to the \"job\" parameter.":
      "若向 job 参数传入 \"Unassigned\"，此 API 不会做任何事，只会返回 false。",
    "Invalid value for Cost Per Employee field! Must be numeric and greater than 0":
      "Cost Per Employee 字段的值无效！必须是数字且大于 0",
    "Corporation is already public": "企业已经上市",
    "Your company has not gone public!": "你的公司还未上市！",
    "Use ns.corporation.getDivision().industry instead.": "请改用 ns.corporation.getDivision().industry。",
    /* ---- 1.5 src/NetscriptFunctions/Hacknet.ts ---- */
    "Can only be called on hacknet servers": "只能在 hacknet 服务器上调用",
    "Count must be a non-negative integer.": "Count 必须是非负整数。",
    "hacknet node was not a string": "hacknet 节点不是字符串",
    "hacknet server was not actually hacknet server": "hacknet 服务器实际上不是 hacknet 服务器",
    "hacknet node was not node.": "hacknet 节点不是节点对象。",
    /* ---- 1.6 src/NetscriptFunctions/StockMarket.ts ---- */
    "You must either be in BitNode-8 or you must have Source-File 8 Level 2.": "你必须身处 BitNode-8，或拥有 2 级源文件 8。",
    "You must either be in BitNode-8 or you must have Source-File 8 Level 3.": "你必须身处 BitNode-8，或拥有 3 级源文件 8。",
    "You must either be in BitNode-8 or have Source-File 8 Level 3.": "你必须身处 BitNode-8，或拥有 3 级源文件 8。",
    "You don't have 4S Market Data TIX API Access!": "你没有 4S 市场数据 TIX API 访问权限！",
    "4S Market Data is disabled in advanced BitNode options.": "4S 市场数据已在 BitNode 高级选项中禁用。",
    "Already purchased 4S Market Data.": "已购买过 4S 市场数据。",
    "You need to have a WSE account.": "你需要先拥有 WSE 账户。",
    "Not enough money to purchase 4S Market Data.": "资金不足以购买 4S 市场数据。",
    "Purchased 4S Market Data": "已购买 4S 市场数据",
    "Already purchased 4S Market Data TIX API": "已购买过 4S 市场数据 TIX API",
    "Not enough money to purchase 4S Market Data TIX API": "资金不足以购买 4S 市场数据 TIX API",
    "Purchased 4S Market Data TIX API": "已购买 4S 市场数据 TIX API",
    "Already purchased WSE Account": "已购买过 WSE 账户",
    "Not enough money to purchase WSE Account Access": "资金不足以购买 WSE 账户",
    "Purchased WSE Account Access": "已购买 WSE 账户",
    "Already purchased TIX API": "已购买过 TIX API",
    "Not enough money to purchase TIX API Access": "资金不足以购买 TIX API",
    "Purchased TIX API": "已购买 TIX API",
    /* ---- 1.7 src/NetscriptFunctions/Sleeve.ts ---- */
    "You must be in BitNode 10 to use this API.": "必须身处 BitNode-10 才能使用此 API。",
    "You do not currently have access to the Sleeve API. This is either because you are not in BitNode-10 or because you do not have Source-File 10":
      "你当前没有 Sleeve API 访问权限。这可能是因为你不在 BitNode-10，或没有源文件 10",
    "You do not have access to the Sleeve API. This is either because you are not in BitNode-10 or because you do not have Source-File 10.":
      "你没有 Sleeve API 访问权限。这可能是因为你不在 BitNode-10，或没有源文件 10。",
    /* ---- 1.8 src/NetscriptFunctions/Go.ts ---- */
    "Invalid board state passed to setTestingBoardState()": "传入 setTestingBoardState() 的棋盘状态无效",
    /* ---- 1.9 src/NetscriptFunctions/Stanek.ts ---- */
    "Stanek's Gift is not installed": "尚未移植斯塔内克的馈赠",
    "Cleared Stanek's Gift.": "已清空斯塔内克的馈赠。",
    /* ---- 1.10 src/NetscriptFunctions/Bladeburner.ts ---- */
    "You have not unlocked the Bladeburner API.": "你尚未解锁 Bladeburner API。",
    "You must be a member of the Bladeburner division to use this API.": "必须是刃行者部门成员才能使用此 API。",
    "Must have joined bladeburner": "必须已加入刃行者",
    "Stopping current Bladeburner action.": "正在停止当前的刃行者行动。",
    "size must be a non-negative integer": "size 必须是非负整数",
    "Failed to set team size due to not enough team members.": "设置小队规模失败，因为队员数量不足。",
    "Only valid for Operations and Black Operations": "只对行动（Operations）与黑色行动（Black Operations）有效",
    "You do not have Source-File 6 or Source-File 7.": "你没有源文件 6，也没有源文件 7。",
    "Bladeburner is disabled by advanced options.": "刃行者已在高级选项中禁用。",
    "Bladeburner is disabled in this BitNode.": "刃行者在本 BitNode 中被禁用。",
    "You do not meet the requirements for joining the Bladeburner division. All combat stats must be at least level 100.":
      "你不符合加入刃行者部门的条件。所有战斗属性等级必须至少为 100。",
    "You have been accepted into the Bladeburner division.": "你已被刃行者部门录取。",
    /* ---- 1.11 src/NetscriptFunctions/Grafting.ts（第三批） ---- */
    "You do not currently have access to the Grafting API. This is either because you are not in BitNode 10 or because you do not have Source-File 10":
      "你当前没有移植（Grafting）API 访问权限。这可能是因为你不在 BitNode-10，或没有源文件 10",
    "You must be in New Tokyo to begin grafting an Augmentation.": "你必须身处新东京才能开始移植义体。",
    /* ---- 1.12 src/Netscript/killWorkerScript.ts（第三批） ---- */
    "Script killed.": "脚本已终止。",
    "Processes cannot be killed during the tutorial.": "教程进行期间无法终止进程。",
  });

  // ============ 2. patterns：含变量的整行（本文件内部：具体句在前、通用句在后） ============
  BitburnerZH.patterns([
    /* ---- 2.1 src/NetscriptFunctions.ts ---- */
    [/^Invalid hackAmount argument passed into hackAnalyzeThreads: (\S+)\. Must be numeric\.$/,
      "传入 hackAnalyzeThreads 的 hackAmount 参数无效：$1。必须是数值。"],
    [/^Cannot find host of WorkerScript\. Hostname: (\S+)\.$/,
      "找不到 WorkerScript 所在的主机。主机名：$1。"],
    [/^Invalid argument: multiplier must be finite and >= 1, is (\S+)\.$/,
      "无效参数：multiplier 必须是有限数且 >= 1，实际为 $1。"],
    [/^Invalid argument: (\S+)\.$/, "无效参数：$1。"],
    [/^Sleeping for (.+)\.$/, "正在睡眠 $1。"],
    [/^Sharing (\S+) threads on (\S+)\.$/, "正在 $2 上共享 $1 线程。"],
    [/^Finished sharing (\S+) threads on (\S+)\.$/, "已完成在 $2 上共享 $1 线程。"],
    [/^Disabled logging for (\S+)$/, "已关闭 $1 的日志"],
    [/^Enabled logging for (\S+)$/, "已开启 $1 的日志"],
    /* grow() 日志（带句号变体；不带句号版已由 dict-runtime.js 收录） */
    [/^Executing on '([^']+)' in (.+) \(t=(\S+)\)\.$/, "已对 $1 开始执行，耗时 $2（$3 线程）。"],
    [/^Available money on '([^']+)' grown by (\S+)\. Gained (\S+) hacking exp \(t=(\S+)\)\.$/,
      "$1 上的可用资金增长了 $2，获得 $3 点黑客经验（$4 线程）。"],
    [/^'([^']+)' security level weakened to (\S+)\. Gained (\S+) hacking exp \(t=(\S+)\)$/,
      "$1 的安全等级被削弱至 $2，获得 $3 点黑客经验（$4 线程）"],
    /* nuke/端口打开系列 */
    [/^Already have root access to '([^']+)'\.$/, "你已经拥有 $1 的 root 权限。"],
    [/^Executed NUKE.exe virus on '([^']+)' to gain root access\.$/, "已在 $1 上运行 NUKE.exe 病毒并获得 root 权限。"],
    [/^Executed (BruteSSH|FTPCrack|relaySMTP|HTTPWorm|SQLInject)\.exe on '([^']+)' to open (SSH|FTP|SMTP|HTTP|SQL) port \((\d+)\)\.$/,
      "已在 $2 上运行 $1.exe，开启 $3 端口（$4）。"],
    [/^(SSH|FTP|SMTP|HTTP|SQL) Port \((\d+)\) already opened on '([^']+)'\.$/, "$1 端口（$2）在 $3 上已经开启。"],
    /* run/spawn/kill/exit */
    [/^Cannot find server (\S+)$/, "找不到服务器 $1"],
    [/^Will execute '([^']+)' in (\S+) milliseconds$/, "将在 $2 毫秒后执行“$1”"],
    [/^Executing '([^']+)' immediately$/, "立即执行“$1”"],
    [/^Killing script with PID (\d+)$/, "正在终止 PID 为 $1 的脚本"],
    [/^Killing '([^']+)' on '([^']+)' with args: (.*)\.$/, "正在终止 $2 上参数为 $3 的脚本“$1”"],
    [/^No script with PID (\d+)$/, "没有 PID 为 $1 的脚本"],
    [/^Internal error killing '([^']+)' on '([^']+)' with args: (.*)$/, "终止 $2 上参数为 $3 的脚本“$1”时发生内部错误"],
    [/^Killing all scripts on '([^']+)'\.$/, "正在终止 $1 上的所有脚本。"],
    /* scp / mv / write / read / clear / rm / getFileMetadata */
    [/^Cannot transfer (\S+): scp only can be used with script, text, and \.lit files$/,
      "无法传输 $1：scp 只能用于脚本、文本与 .lit 文件"],
    [/^File '([^']+)' does not exist\.$/, "文件“$1”不存在。"],
    [/^Copied file (\S+) from (\S+) to (\S+)$/, "已将文件 $1 从 $2 复制到 $3"],
    [/^Warning: (\S+) was overwritten on (\S+)$/, "警告：$1 已在 $2 上被覆盖"],
    [/^File '([^']+)' was already on '([^']+)'\.$/, "文件“$1”已经在“$2”上。"],
    [/^File '([^']+)' copied over to '([^']+)'\.$/, "已将文件“$1”复制到“$2”。"],
    [/^File path should be a text file or script\. (\S+) is invalid\.$/,
      "文件路径应为文本文件或脚本。$1 无效。"],
    [/^Invalid path: (.+)\. It must be a text file or a script\.$/, "无效路径：$1。必须是文本文件或脚本。"],
    [/^Invalid path: (.+)\. The file does not exist on (\S+)\.$/, "无效路径：$1。该文件不存在于 $2 上。"],
    [/^Invalid file path or extension: (.+)$/, "无效的文件路径或扩展名：$1"],
    [/^Error while parsing filepath (\S*)$/, "解析文件路径 $1 时出错"],
    [/^ERROR: Failed\. Was unable to remove file (\S+) from its original location\. If \1 is a script, make sure that it is NOT running before trying to use 'mv' on it\.$/,
      "错误：失败。无法把文件 $1 从原位置移除。若 $1 是脚本，用 'mv' 之前务必确认它没有在运行。"],
    [/^Source text file (\S+) does not exist on (\S+)$/, "源文本文件 $1 不存在于 $2 上"],
    [/^WARNING: Overwriting file (\S+) on (\S+)$/, "警告：正在覆盖 $2 上的文件 $1"],
    [/^Moved (\S+) to (\S+) on (\S+)$/, "已将 $1 移动到 $3 上的 $2"],
    /* read()/clear() 的通用句（dict-runtime 的 "Script X does not exist on Y." 先注册，不受影响） */
    [/^(\S+) does not exist on (\S+?)\.?$/, "$1 不存在于 $2。"],
    /* ramOverride */
    [/^Game error: Calculated impossible new server ramUsed (\S+) from new limit of (\S+)$/,
      "游戏错误：由新上限 $2 计算出了不可能的服务器 RAM 用量 $1"],
    /* prompt / wget */
    [/^Invalid type for options: (\w+)\. Should be object\.$/, "options 的类型无效：$1。应为对象。"],
    [/^Invalid type for options\.type: (\w+)\. Should be string\.$/, "options.type 的类型无效：$1。应为字符串。"],
    [/^Invalid value for options\.type: (\S+)\. Must be one of boolean, text, select\.$/,
      "options.type 的值无效：$1。必须是 boolean、text 或 select 之一。"],
    [/^Invalid type for options\.choices: (\w+)\. If options\.type is "select", options\.choices must be an array\.$/,
      "options.choices 的类型无效：$1。若 options.type 为 \"select\"，options.choices 必须是数组。"],
    [/^Invalid target file: '([^']*)'\. Must be a script or text file\.$/,
      "无效的目标文件：“$1”。必须是脚本或文本文件。"],
    [/^wget failed\. HTTP code: (\d+)\.$/, "wget 失败。HTTP 状态码：$1。"],
    [/^Successfully retrieved content and overwrote '([^']+)' on '([^']+)'$/, "已成功获取内容并覆盖“$2”上的“$1”"],
    [/^Successfully retrieved content to new file '([^']+)' on '([^']+)'$/, "已成功获取内容，在“$2”上创建新文件“$1”"],
    /* dynamicImport 多行第二行 */
    [/^Path: (\S+)$/, "路径：$1"],
    /* scan/getServer 系列日志 */
    [/^returned (\d+) connections for (\S+)$/, "已返回 $2 的 $1 个连接"],
    [/^returned player's money: (.+)$/, "已返回玩家资金：$1"],
    [/^returned (.+) for '([^']+)'$/, "已返回 $2 的 $1"],
    [/^returned (\S+)$/, "已返回：$1"],
    [/^Server (\S+) does not exist\.$/, "服务器 $1 不存在。"],
    /* ---- 2.2 src/NetscriptFunctions/Singularity.ts ---- */
    [/^Attempted to launch (\S+) after reset but could not calculate ram usage\.$/,
      "试图在重置后启动 $1，但无法计算其 RAM 用量。"],
    [/^Attempted to launch (\S+) after reset but there was not enough ram\.$/,
      "试图在重置后启动 $1，但 RAM 不足。"],
    [/^You purchased (.+)\.$/, "你购买了$1。"],
    [/^Could not resolve file path: (.+)$/, "无法解析文件路径：$1"],
    [/^Invalid BitNode: (\S+)\.$/, "无效的 BitNode：$1。"],
    [/^No location named (\S+) in (\S+)$/, "$2 中没有名为 $1 的地点"],
    [/^No location named (\S+)$/, "没有名为 $1 的地点"],
    [/^Invalid university name: '([^']+)'\.$/, "无效的大学名：“$1”。"],
    [/^Started (hacking|strength|defense|dexterity|agility) at (.+)$/, "已在 $2 开始 $1 课程"],
    [/^Invalid gym name: (.+)\. gymWorkout\(\) failed$/, "无效的健身房名：$1。gymWorkout() 失败"],
    [/^Started training (hacking|strength|defense|dexterity|agility) at (.+)$/, "已在 $2 开始 $1 训练"],
    [/^Invalid city name: '([^']+)'\.$/, "无效的城市名：“$1”。"],
    [/^Invalid program name: '(.+)\.$/, "无效的程序名：$1。"],
    [/^You already have the '([^']+)' program$/, "你已经拥有“$1”程序"],
    [/^Not enough money to purchase '([^']+)'\. Need (.+)$/, "资金不足以购买“$1”。需要 $2"],
    [/^No such exploit \('(.+)'\) found on the darkweb!$/, "在 darkweb（暗网）上找不到这个漏洞程序（“$1”）！"],
    [/^Installing backdoor on '([^']+)' in (.+)$/, "正在对 $1 安装后门，耗时 $2"],
    [/^Successfully installed backdoor on '([^']+)'$/, "已成功在 $1 上安装后门"],
    [/^You don't have enough money\. Need (.+)$/, "你的资金不足。需要 $1"],
    [/^Purchased an additional core for home computer! It now has (\d+) cores\.$/,
      "已为 home 电脑购买额外核心！现在共有 $1 个核心。"],
    [/^Purchased additional RAM for home computer! It now has (.+) of RAM\.$/,
      "已为 home 电脑购买额外 RAM！现在共有 $1 的 RAM。"],
    [/^Company '([^']+)' does not have position '([^']+)'$/, "公司“$1”没有“$2”职位"],
    [/^You do not have a job at: '([^']+)'$/, "你并不在“$1”任职"],
    [/^Began working at '([^']+)' with position '([^']+)'$/, "已开始以“$2”职位在“$1”工作"],
    [/^You failed to get a new job\/promotion at '([^']+)' in the '([^']+)' field\. Reason: (.+)$/,
      "你在“$1”的“$2”领域求职/升职失败。原因：$3"],
    [/^You were offered a new job at '([^']+)' with position '([^']+)'\.$/,
      "你获得了“$1”的新职位：“$2”。"],
    [/^You are already a member of faction '([^']+)'$/, "你已经是派系“$1”的成员"],
    [/^You have not been invited by faction '([^']+)'$/, "派系“$1”还没有邀请你"],
    [/^Joined the '([^']+)' faction\.$/, "已加入“$1”派系。"],
    [/^You can't work for '([^']+)' because you are managing a gang for it$/, "你无法为“$1”工作，因为你正为该派系管理帮派"],
    [/^You are not a member of '([^']+)'$/, "你不是“$1”的成员"],
    [/^Faction '([^']+)' do not need help with hacking contracts\.$/, "派系“$1”不需要骇入契约方面的帮助。"],
    [/^Faction '([^']+)' do not need help with field missions\.$/, "派系“$1”不需要外勤任务方面的帮助。"],
    [/^Faction '([^']+)' do not need help with security work\.$/, "派系“$1”不需要安保工作方面的帮助。"],
    [/^Started carrying out hacking contracts for '([^']+)'$/, "已开始为“$1”执行骇入契约"],
    [/^Started carrying out field missions for '([^']+)'$/, "已开始为“$1”执行外勤任务"],
    [/^Started carrying out security work for '([^']+)'$/, "已开始为“$1”执行安保工作"],
    [/^Invalid work type: '(.*)$/, "无效的工作类型：$1"],
    [/^You can't donate to '([^']+)' because you aren't a member$/, "你无法向“$1”捐款，因为你不是其成员"],
    [/^You can't donate to '([^']+)' because you are managing a gang for it$/, "你无法向“$1”捐款，因为你正为该派系管理帮派"],
    [/^You can't donate to '([^']+)' because this faction does not offer any type of work$/, "你无法向“$1”捐款，因为该派系不提供任何类型的工作"],
    [/^Invalid donation amount: '([^']+)'\.$/, "无效的捐款金额：“$1”。"],
    [/^You do not have enough money to donate (.+) to '([^']+)'$/, "你的资金不足以向“$2”捐款 $1"],
    [/^You do not have enough favor to donate to this faction\. Have (\S+), need (\S+)$/,
      "你的派系好感不足以捐款。当前好感 $1，需要 $2"],
    [/^(.+) donated to '([^']+)' for (.+) reputation$/, "已向“$2”捐款 $1，获得 $3 声望"],
    [/^The specified program does not exist: '([^']+)'$/, "指定的程序不存在：“$1”"],
    [/^You cannot create the '([^']+)' program$/, "你无法创建“$1”程序"],
    [/^Hacking level is too low to create '([^']+)' \(level (\d+) req\)$/, "黑客等级过低，无法创建“$1”（要求等级 $2）"],
    [/^Began creating program: '([^']+)'$/, "已开始编写程序：“$1”"],
    [/^Attempting to commit (.+)\.\.\.$/, "正在尝试犯罪：$1……"],
    [/^Invalid crime: '([^']+)'$/, "无效的犯罪类型：“$1”"],
    [/^(\S+) is on the network of (\S+), but we cannot find its data\.$/,
      "$1 位于 $2 的网络中，但找不到它的数据。"],
    /* ---- 2.3 src/NetscriptFunctions/Gang.ts ---- */
    [/^Invalid gang member: '(.+)'$/, "无效的帮派成员：“$1”"],
    [/^Invalid task: '(.+)'$/, "无效的任务：“$1”"],
    [/^newName and memberName must be different, but both were: (.+)$/, "newName 与 memberName 必须不同，但两者都是：$1"],
    [/^Failed to rename member: No member exists with memberName: (.+)$/, "重命名成员失败：不存在 memberName 为 $1 的成员"],
    [/^Failed to rename member: A different member already has the newName: (.+)$/, "重命名成员失败：已有另一名成员使用 newName：$1"],
    [/^Renamed member from memberName: (.+?) to newName: (.+)$/, "已将成员名从 $1 改为 $2"],
    [/^Failed to recruit gang member '([^']+)'\. (.+)\.$/, "招募帮派成员“$1”失败。$2"],
    [/^Successfully recruited gang member '([^']+)'$/, "已成功招募帮派成员“$1”"],
    [/^Failed to assign Gang Member '([^']+)' to Invalid task '([^']+)'\. '([^']+)' is now Unassigned$/,
      "为帮派成员“$1”指派无效任务“$2”失败。“$1”现已变为 Unassigned（未指派）"],
    [/^Failed to assign Gang Member '([^']+)' to '([^']+)' task\. '([^']+)' is now Unassigned$/,
      "为帮派成员“$1”指派“$2”任务失败。“$1”现已变为 Unassigned（未指派）"],
    [/^Successfully assigned Gang Member '([^']+)' to '([^']+)' task$/, "已成功将帮派成员“$1”指派到“$2”任务"],
    [/^Invalid equipment: (.+)$/, "无效装备：$1"],
    [/^'([^']+)' is not a valid equipment$/, "“$1”不是有效装备"],
    [/^Purchased '([^']+)' for Gang member '([^']+)'$/, "已为帮派成员“$2”购买“$1”"],
    [/^Failed to purchase '([^']+)' for Gang member '([^']+)'$/, "为帮派成员“$2”购买“$1”失败"],
    [/^Invalid gang: (\S+)$/, "无效的帮派：$1"],
    /* ---- 2.4 src/NetscriptFunctions/Corporation.ts ---- */
    [/^No research tree for industry '([^']+)'$/, "行业“$1”没有科研树"],
    [/^No research named '([^']+)'$/, "没有名为“$1”的科研项目"],
    [/^No division named '(.+)'$/, "没有名为“$1”的分部"],
    [/^(.+?) has not expanded to '([^']+)'$/, "$1 尚未扩张到“$2”"],
    [/^(.+?) does not have a warehouse in '([^']+)'$/, "$1 在“$2”没有仓库"],
    [/^Invalid product name: '(.+)'$/, "无效的产品名：“$1”"],
    [/^No division with provided name (.+)$/, "没有名为 $1 的分部"],
    [/^You have not researched (MarketTA\.I|MarketTA\.II) for division: (.+)$/, "分部 $2 尚未科研 $1"],
    [/^Invalid value for amount! Must be an integer and greater than or be 0"\. Amount:'(.+)'$/,
      "amount 的值无效！必须是大于或等于 0 的整数。amount：'$1'"],
    [/^Unable to bring '(.+) employees to (\S+)\. Requires (\S+) unassigned employees$/,
      "无法把“$1”岗位的员工数调整为 $2。需要 $3 名 Unassigned（未分配）员工"],
    [/^Could not unlock (\S+): (.+)$/, "无法解锁 $1：$2"],
    [/^Could not upgrade (\S+): (.+)$/, "无法升级 $1：$2"],
    [/^Invalid value for rate field! Must be numeric, greater than 0, and less than (\S+)$/,
      "rate 字段的值无效！必须是数字、大于 0 且小于 $1"],
    /* ---- 2.5 src/NetscriptFunctions/Hacknet.ts ---- */
    [/^Index specified for Hacknet Node is out-of-bounds: (\S+)$/, "指定的 Hacknet 节点索引越界：$1"],
    [/^Could not get Hacknet Server for index (\d+)\. This is probably a bug, please report to game dev$/,
      "无法获取索引 $1 的 Hacknet 服务器。这很可能是一个 bug，请反馈给游戏开发者"],
    [/^Invalid Hash Upgrade: (\S+)$/, "无效的哈希升级：$1"],
    /* ---- 2.6 src/NetscriptFunctions/StockMarket.ts ---- */
    [/^Invalid stock symbol: '(.+)'$/, "无效的股票代码：$1"],
    [/^Invalid stock symbol: (\S+)$/, "无效的股票代码：$1"],
    [/^You don't have TIX API Access! Cannot use (.+)\(\)$/, "你没有 TIX API 访问权限！无法使用 $1()"],
    [/^Invalid shares or price\. Must be numeric\. shares=(\S+), price=(\S+)$/,
      "shares 或 price 无效。必须是数值。shares=$1，price=$2"],
    /* ---- 2.7 src/NetscriptFunctions/Sleeve.ts ---- */
    [/^Invalid sleeve number: (-?\d+)$/, "无效的分身编号：$1"],
    [/^Sleeve (-?\d+) cannot work for company (\S+) because Sleeve (-?\d+) is already working for them\.$/,
      "分身 $1 无法为公司 $2 工作，因为分身 $3 已经在为它工作。"],
    [/^Cannot work for faction (\S+) without being a member\.$/, "不是成员时无法为派系 $1 工作。"],
    [/^Sleeve (-?\d+) cannot work for faction (\S+) because Sleeve (-?\d+) is already working for them\.$/,
      "分身 $1 无法为派系 $2 工作，因为分身 $3 已经在为它工作。"],
    [/^Sleeve (-?\d+) cannot work for faction (\S+) because you have started a gang with them\.$/,
      "分身 $1 无法为派系 $2 工作，因为你已与它组建帮派。"],
    [/^Invalid aug: (.+)$/, "无效的义体：$1"],
    [/^Sleeve (-?\d+) cannot take on contracts because Sleeve (-?\d+) is already performing that action\.$/,
      "分身 $1 无法接取契约，因为分身 $2 已在执行该行动。"],
    [/^Could not start action (\S+): (.+)$/, "无法开始行动 $1：$2"],
    /* ---- 2.8 src/NetscriptFunctions/Stanek.ts ---- */
    [/^No fragment with root \((\S+), (\S+)\)\.$/, "根节点位于 ($1, $2) 的碎片不存在。"],
    [/^The fragment with root \((\S+), (\S+)\) is a Booster Fragment and thus cannot be charged\.$/,
      "根节点位于 ($1, $2) 的碎片是增益碎片（Booster Fragment），无法充能。"],
    [/^Charged fragment with (\S+) threads\.$/, "已充能碎片（$1 线程）。"],
    [/^Returned (\d+) fragments$/, "已返回 $1 个碎片"],
    [/^Invalid fragment id: (\d+)$/, "无效的碎片 id：$1"],
    [/^You joined '(.+)' and have '(.+)' installed\.$/, "你已加入“$1”，并已安装“$2”。"],
    /* ---- 2.9 src/NetscriptFunctions/CodingContract.ts ---- */
    [/^Cannot find contract '(.+)' on server '(.+)'$/, "在服务器“$2”上找不到契约“$1”"],
    [/^Successfully completed Coding Contract '([^']+)'\. Reward: (.+)$/, "已成功完成编程契约“$1”。奖励：$2"],
    [/^Coding Contract attempt '([^']+)' failed\. Contract is now self-destructing$/, "编程契约“$1”的尝试失败。契约现已自毁"],
    [/^Coding Contract attempt '([^']+)' failed\. (\d+) attempt\(s\) remaining\.$/, "编程契约“$1”的尝试失败。还剩 $2 次尝试机会。"],
    /* ---- 2.10 src/NetscriptFunctions/Bladeburner.ts ---- */
    [/^Invalid action type='([^']+)', name='([^']+)'$/, "无效的行动：type='$1'，name='$2'"],
    [/^Actions of type (\S+) are not levelable, (\S+) requires a levelable action$/,
      "类型为 $1 的行动不可升级等级，$2 需要一个可升级等级的行动"],
    [/^Autolevel for (.+?) has been enabled$/, "$1 的自动升级已开启"],
    [/^Autolevel for (.+?) has been disabled$/, "$1 的自动升级已关闭"],
    [/^Level must be between 1 and (\d+), is (\d+)$/, "等级必须在 1 到 $1 之间，实际为 $2"],
    [/^Set level for (.+?) to (\d+)$/, "已将 $1 的等级设为 $2"],
    [/^Set team size for (.+?) to (\d+)$/, "已将 $1 的小队规模设为 $2"],
    /* ---- 2.11 第三批：src/NetscriptFunctions/Grafting.ts ---- */
    [/^You don't have enough money to craft (.+)$/, "你的资金不足以移植 $1。"],
    [/^You don't have the pre-requisites for (.+)$/, "你未满足 $1 的前置条件。"],
    [/^Began grafting Augmentation (.+)\.$/, "已开始移植义体 $1。"],
    [/^The current work is not a grafting work\. Type of current work: (.+)\.$/, "当前工作不是移植工作。当前工作类型：$1。"],
    /* 注：Grafting 里 invalid augName 的 "Invalid aug: X" 已在 2.7（Sleeve）注册，同句不重复登记。 */
    /* ---- 2.12 第三批：src/NetscriptFunctions/Infiltration.ts（具体句在前） ---- */
    [/^Location "([^"]+)" does not provide infiltrations\.$/, "地点“$1”不提供潜入行动。"],
    [/^Location "([^"]+)" is available in all cities, but it still has infiltration data\.$/,
      "地点“$1”在所有城市都可用，却仍带有潜入行动数据。"],
    [/^Location "([^"]+)" does not exist\.$/, "地点“$1”不存在。"],
    /* ---- 2.13 第三批：src/Netscript/killWorkerScript.ts ---- */
    [/^Script killed by script (.+) with PID (\d+)$/, "脚本已被脚本 $1（PID $2）终止"],
    [/^Error running atExit function with id (\d+)\.?$/, "运行 id 为 $1 的 atExit 回调函数时出错。"],
    /* ---- 2.14 第三批：src/Netscript/ScriptDeath.ts（脚本被杀时抛出的标记句，出现在错误弹窗/日志中） ---- */
    [/^NS instance has already been killed \((.+) running on (\S+) with pid (\d+)\)$/,
      "该 ns 实例已被终止（$1 正在 $2 上运行，pid $3）"],
    /* ---- 2.15 第三批：src/Netscript/WorkerScript.ts ---- */
    [/^Invalid PID when constructing WorkerScript: (\S+)$/, "构造 WorkerScript 时 PID 无效：$1"],
    [/^WorkerScript constructed with invalid server ip: (\S+)$/, "构造 WorkerScript 时指定的服务器地址无效：$1"],
    [/^WorkerScript constructed with invalid script filename: (\S+)$/, "构造 WorkerScript 时指定的脚本文件名无效：$1"],
    [/^Script (\S+) pid (\d+) is running on non-existent server\?$/, "脚本 $1（pid $2）运行在一个不存在的服务器上？"],
  ]);

  // ============ 3. 第三批（UserInterface/Grafting/Infiltration/Extra、killWorkerScript/ScriptDeath/WorkerScript）已全部处理完毕：
  //   Grafting/Infiltration/killWorkerScript/ScriptDeath/WorkerScript 的新条目已并入上面 1.11-1.12 与 2.11-2.15；
  //   UserInterface 经核对已由 dict-runtime.js 全量收录、Extra 无玩家可见句（详见头注释）。
  //   下一批若要继续，可补录范围外调用方的脚本死亡原因行（"Script killed due to ..."、"X killed by Y" 之类）。
})();

/* Bitburner 汉化字典 —— 运行时消息：Netscript 运行错误、.exe 程序输出、源文件(SF)名、tail 日志窗、DarkNet 效果、通用对话框外壳、主题/样式编辑器。
 * 基准：bitburner-src tag v3.0.1。已核对并收录的源码文件：
 *   1. Netscript 运行时：src/NetscriptWorker.ts、src/Netscript/{ErrorMessages,TypeAssertion,NetscriptHelpers}.tsx、src/Netscript/APIWrapper.ts、
 *      src/Script/{Script,RamCalculations}.ts、src/Server/{BaseServer,Server}.ts、src/Hacking/netscriptCanHack.ts、
 *      src/utils/ErrorHandler.ts、src/utils/helpers/exceptionAlert.tsx、src/ErrorHandling/{DisplayError,ErrorModal,RecentErrorsPage}.tsx、
 *      src/ui/Components/CustomBoundary.tsx。（src/Script/RunningScript.ts 的 tail 标题就是"脚本名 + 参数"，无固定英文串，无需翻译。）
 *   2. .exe 程序：src/Programs/{Programs,ProgramHelpers}.ts（Programs/ui/ProgramsRoot.tsx 与 create.tooltip 归 dict-pages1.js）。
 *   3. 源文件/BitNode 名称：src/SourceFile/{SourceFile,SourceFiles}.tsx、src/BitNode/BitNode.tsx（取 name 与 "Source-File N: 名"/"BitNode-N: 名" 拼接串，
 *      以及 SF 描述里的纯数值条目 "Level N: 16%"；介绍段落与带文字的 Level 条目归 dict-options.js）。
 *   4. tail 日志窗：src/ui/React/LogBoxManager.tsx。
 *   5. DarkNet：src/DarkNet/Enums.ts、ui/{ServerSummary,ServerDetailsModal,ServerStatusBox,PasswordPrompt,uiUtilities}.tsx、
 *      effects/{cacheFiles,ramblock,webstorm}.ts、src/NetscriptFunctions/Cloud.ts（cloud 工具日志）。
 *   6. 对话框外壳：src/ui/React/{DialogBox,AlertManager,PromptManager,Snackbar}.tsx（v3.0.1 中 DialogBox/Snackbar 无玩家可见文本，Modal.tsx 亦无）。
 *   7. 主题编辑器：src/Themes/ui/{ThemeEditorModal,StyleEditorModal,ThemeBrowser,ThemeEntry}.tsx；src/NetscriptFunctions/UserInterface.ts。
 * 未覆盖（源码过大或属其他字典范围，见提交说明）：
 *   src/NetscriptFunctions.ts 主体（hack/grow/weaken/kill/scp/nuke 等函数的专有报错）、src/NetscriptFunctions/{Darknet,Singularity,Formulas,...}.ts、
 *   src/DarkNet/effects/{effects,authentication,labyrinth,phishing,offlineServerHandling}.ts、src/DarkNet/ui/{LabyrinthSummary,NetworkDisplayWrapper}.tsx、
 *   src/Server/ServerPurchases.ts。
 * v3.0.1 结构提示（供 Lead 参考）：src/Player.ts 只是 830B 的再导出文件，v2 时代的 requestHost 拒绝消息与 "Need root access..." 等在 v3 已不存在；
 *   端口/NUKE 的玩家可见报错在 src/Programs/Programs.ts（本文件已收）与 src/NetscriptFunctions.ts（未收）。
 * 去重说明：
 *   1. Create Program 页面与各程序 tooltip 已在 dict-pages1.js 收录，此处不重复。
 *   2. 终端命令自身输出（src/Terminal/commands/*，如 "Incorrect number of arguments. Usage: tail ..."、手动 hack 的 "Hack successful on ..."、
 *      PromptManager 确认框长句、"Cloud server successfully purchased with hostname X"）由 dict-terminal.js 收录，此处不重复。
 *   3. BitNode 介绍段落、"Game Saved!"、SF 等级覆盖 UI、Theme Editor/Style Editor/Theme Browser 入口按钮已在 dict-options.js 收录。
 *   4. "IPvGO Subnet Takeover"（BN14 名）与 "Bladeburners"（BN6 名/派系名）已在 dict-pages2.js 收录，本文件沿用同一译文。
 *   5. Close/Cancel/OK/Yes/No/Confirm、Threads/RAM/Cache/Count/Type/Message/Script/Time 等通用词已在 dict-core.js 收录。
 * 术语：hack=骇入（与 dict-terminal.js 一致；dict-core 的 "Hack"=破解为按钮/属性语境，二者不冲突）、grow=生长、weaken=削弱、
 *       root access=root 权限、threads=线程、stasis link=停滞链路（Stasis Link）、labyrinth=迷宫、dark net/darknet 保留英文、
 *       PID/RAM/NS/API/.exe 文件名/NS 函数名/主题键名/主题名/BitNode/Source-File 编号保留英文；脚本名与主机名由捕获组保留。
 * 结构说明：错误消息多为多行节点（引擎逐行匹配），故按“行”收录 exact/pattern；含变量的整行用 ^...$ 锚定的 patterns；
 *   同一句可能带 " Gained -N karma." 后缀（darknet 缓存奖励 Toast），两种形态都要收，长句模式注册在前。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  // ============ 1. exact：Netscript 运行时错误（src/NetscriptWorker.ts、src/Netscript/*） ============
  BitburnerZH.exact({
    /* ---- 1.1 src/NetscriptWorker.ts ---- */
    "Running .script files is unsupported.": "运行 .script 文件不受支持。",
    "If you are seeing this on startup, likely causes are that the autoexec script is too big to fit in RAM, or it took up too much space and other previously running scripts couldn't fit on home.":
      "如果你在开局时看到这条消息，常见原因是 autoexec 脚本太大、RAM 装不下，或者它占用了太多空间，导致此前运行的其他脚本在 home 上放不下。",
    "Otherwise, this can also occur if you have attempted to launch a script from a tail window with insufficient RAM.":
      "此外，若你试图从一个 RAM 不足的 tail 日志窗启动脚本，也会出现这条消息。",
    "Failed to start script because could not find available PID. This is most because you have too many scripts running.":
      "脚本启动失败，因为找不到可用的 PID。这很可能是因为你在运行的脚本太多。",
    "While running autoexec script:": "运行 autoexec 脚本时：",
    "Script finished running": "脚本运行完毕",
    "main() terminated.": "main() 已终止。",
    /* ---- 1.2 src/Netscript/ErrorMessages.ts（错误横幅头，逐行匹配） ---- */
    "RUNTIME ERROR": "运行时错误",
    "TYPE ERROR": "类型错误",
    "API ACCESS ERROR": "API 访问权限错误",
    "CONCURRENCY ERROR": "并发错误",
    "RAM USAGE ERROR": "RAM 用量错误",
    "Stack:": "调用栈：",
    /* ---- 1.3 src/Netscript/TypeAssertion.ts（参数类型断言） ---- */
    "Is null.": "该值为 null。",
    "Is undefined.": "该值为 undefined。",
    "Is a function.": "该值是一个函数。",
    "person should be a Person.": "person 应为一个 Person 对象。",
    "gang should be a Gang.": "gang 应为一个 Gang 对象。",
    "member should be a GangMember.": "member 应为一个 GangMember 对象。",
    "task should be a GangMemberTask.": "task 应为一个 GangMemberTask 对象。",
    "Invalid darknet server data.": "无效的 darknet 服务器数据。",
    /* ---- 1.4 src/Netscript/NetscriptHelpers.tsx ---- */
    "Concurrent calls to Netscript functions are not allowed! Did you forget to await hack(), grow(), or some other promise-returning function?":
      "不允许并发调用 Netscript 函数！你是否忘了 await hack()、grow() 或其他返回 Promise 的函数？",
    "Failed to run due to script being killed.": "运行失败，因为脚本已被终止。",
    "Failed to run due to failed concurrency check.": "运行失败，因为并发检查未通过。",
    "Insufficient static ram available.": "可用的静态 RAM 不足。",
    "Dynamic RAM usage calculated to be greater than RAM allocation.": "经计算，动态 RAM 用量已超过 RAM 分配量。",
    "This is probably because you somehow circumvented the static RAM calculation.": "这可能是你以某种方式绕过了静态 RAM 计算。",
    "One of these could be the reason:": "以下任意一条都可能是原因：",
    "* Using eval() to get a reference to a ns function": "* 用 eval() 取得 ns 函数的引用",
    "* Using map access to do the same": "* 用属性访问（map access）达到同样效果",
    "* Using RunOptions.ramOverride to set a smaller allocation than needed": "* 用 RunOptions.ramOverride 设置了小于实际需求的分配量",
    "Sorry :(": "抱歉 :(",
    "An unknown type of input was provided as a script identifier.": "传入的脚本标识符类型未知。",
    "This singularity function requires Source-File 4 to run. A power up you obtain later in the game. It will be very obvious when and how you can obtain it.":
      "该 singularity 函数需要源文件 4 才能运行。这是你在游戏后期会获得的强化，何时以及如何获得都会很明显。",
    "Invalid scriptArgs argument passed into getRunningScriptByArgs().": "传入 getRunningScriptByArgs() 的 scriptArgs 参数无效。",
    "This is probably a bug. Please report to game developer": "这很可能是一个 bug，请反馈给游戏开发者。",
    "scriptArgs can only contain strings, numbers, or booleans.": "scriptArgs 只能包含字符串、数字或布尔值。",
    "sourceFileOverrides must be a Map.": "sourceFileOverrides 必须是一个 Map。",
    "Does not work on Hacknet Servers": "在 Hacknet 服务器上不起作用",
    /* ---- 1.5 src/Server/BaseServer.ts：removeFile 失败原因（整句、无变量） ---- */
    "Cannot delete a script that is currently running!": "无法删除正在运行的脚本！",
    /* ---- 1.6 src/Programs/Programs.ts：.exe 运行输出 ---- */
    "Cannot nuke this kind of server.": "无法对这类服务器运行 NUKE.exe。",
    "You already have root access to this computer. There is no reason to run NUKE.exe": "你已经拥有这台计算机的 root 权限，没有必要运行 NUKE.exe。",
    "You can now run scripts on this server.": "你现在可以在这台服务器上运行脚本了。",
    "NUKE unsuccessful. Not enough ports have been opened": "NUKE 失败。开启的端口数量不足。",
    "Cannot run BruteSSH.exe on this kind of server.": "无法对这类服务器运行 BruteSSH.exe。",
    "Cannot run FTPCrack.exe on this kind of server.": "无法对这类服务器运行 FTPCrack.exe。",
    "Cannot run relaySMTP.exe on this kind of server.": "无法对这类服务器运行 relaySMTP.exe。",
    "Cannot run HTTPWorm.exe on this kind of server.": "无法对这类服务器运行 HTTPWorm.exe。",
    "Cannot run SQLInject.exe on this kind of server.": "无法对这类服务器运行 SQLInject.exe。",
    "SSH Port (22) is already open!": "SSH 端口（22）已经开启！",
    "Opened SSH Port(22)!": "已开启 SSH 端口（22）！",
    "FTP Port (21) is already open!": "FTP 端口（21）已经开启！",
    "Opened FTP Port (21)!": "已开启 FTP 端口（21）！",
    "SMTP Port (25) is already open!": "SMTP 端口（25）已经开启！",
    "Opened SMTP Port (25)!": "已开启 SMTP 端口（25）！",
    "HTTP Port (80) is already open!": "HTTP 端口（80）已经开启！",
    "Opened HTTP Port (80)!": "已开启 HTTP 端口（80）！",
    "SQL Port (1433) is already open!": "SQL 端口（1433）已经开启！",
    "Opened SQL Port (1433)!": "已开启 SQL 端口（1433）！",
    "This executable cannot be run.": "此可执行程序无法运行。",
    "DeepscanV1.exe lets you run 'scan-analyze' with a depth up to 5.": "DeepscanV1.exe 让你能以最深 5 层运行 'scan-analyze'。",
    "DeepscanV2.exe lets you run 'scan-analyze' with a depth up to 10.": "DeepscanV2.exe 让你能以最深 10 层运行 'scan-analyze'。",
    "AutoLink.exe lets you automatically connect to other servers when using 'scan-analyze'.":
      "AutoLink.exe 让你在使用 'scan-analyze' 时自动连接到其他服务器。",
    "When using scan-analyze, click on a server's hostname to connect to it.": "使用 scan-analyze 时，点击服务器的主机名即可连接过去。",
    "Formulas.exe lets you use the formulas API.": "Formulas.exe 让你可以使用 formulas API。",
    "Must pass a server hostname or IP as an argument for ServerProfiler.exe": "必须把服务器主机名或 IP 作为参数传给 ServerProfiler.exe",
    "Invalid server IP/hostname": "无效的服务器 IP/主机名",
    "ServerProfiler.exe can only be run on normal servers.": "ServerProfiler.exe 只能在普通服务器上运行。",
    "We will contact you.": "我们会与你联系。",
    "This program gives access to the dark net.": "该程序提供对 dark net（暗网）的访问。",
    "The dark net is an unstable, constantly shifting network of servers that are only connected to the normal network through the darkweb server.":
      "dark net 是一个不稳定、时刻变化的服务器网络，只能通过 darkweb 服务器连入常规网络。",
    "This network can be accessed using the `ns.dnet` api functions, or the DarkNet UI on the left-hand panel.":
      "你可以使用 `ns.dnet` API 函数，或左侧面板中的 DarkNet（暗网）界面来访问这个网络。",
    "You can feel a storm approaching...": "你能感觉到风暴正在逼近……",
  });

  // ============ 2. frag：被 JSX 拆分的片段 ============
  BitburnerZH.frag({
    /* BN9（Icarus）语句开头，后接游戏内动态内容；docs/terminal 段落同样受益 */
    "When ": "当 ",
  });

  // ============ 3. patterns：含变量的运行时/程序输出整行 ============
  BitburnerZH.patterns([
    /* ---- 3.1 src/NetscriptWorker.ts ---- */
    [/^Not enough RAM to run script (\S+) with args (.*), needed (\S+) but only have (\S+) free$/,
      "RAM 不足以运行脚本 $1（参数 $2）：需要 $3，但只有 $4 空闲"],
    [/^"(.+)" is invalid for a script name \(maybe missing suffix\?\)$/, "“$1” 不是有效的脚本名（可能缺少扩展名？）"],
    [/^"(.+)" does not exist!$/, "“$1” 不存在！"],
    [/^"(.+)" has errors!$/, "“$1” 存在错误！"],
    [/^Script (\S+) does not exist on (\S+)\.$/, "脚本 $1 不存在于 $2。"],
    [/^You do not have root access on (\S+)\.$/, "你在 $1 上没有 root 权限。"],
    [/^Cannot calculate RAM usage of (\S+)\. Reason: (.*)$/, "无法计算 $1 的 RAM 用量。原因：$2"],
    [/^Cannot run (\S+) \(t=(\S+)\) on (\S+)\. This script requires (\S+) of RAM\.$/,
      "无法在 $3 上运行 $1（$2 线程）。该脚本需要 $4 的 RAM。"],
    [/^'(.+)' is already running on '(.+)'$/, "“$1” 已在 “$2” 上运行"],
    [/^'(.+)' on '(.+)' with (\S+) threads and args: (.*)\.$/, "已在 “$2” 上以 $3 线程、参数 $4 运行 “$1”。"],
    [/^Script crashed due to an error: (.+)$/, "脚本因错误而崩溃：$1"],
    [/^(\S+) cannot be run because the NS object hasn't been constructed properly\.$/,
      "$1 无法运行，因为 NS 对象没有被正确构造。"],
    [/^(\S+) cannot be run because the script module won't load$/, "$1 无法运行，因为脚本模块无法加载。"],
    [/^(\S+) cannot be run because it does not have a main function\.$/, "$1 无法运行，因为它没有 main 函数。"],
    /* ---- 3.2 src/Script/RamCalculations.ts ---- */
    [/^"(.+)" does not exist on server: (\S+)$/, "“$1” 在服务器 $2 上不存在"],
    [/^Cannot parse module: (\S+)\. Filename: (\S+)\. Reason: (.+)\.$/,
      "无法解析模块 $1。文件名：$2。原因：$3。"],
    /* ---- 3.3 src/Server/BaseServer.ts：removeFile 失败原因 ---- */
    [/^Text file (\S+) not found\.$/, "未找到文本文件 $1。"],
    [/^Script (\S+) not found\.$/, "未找到脚本 $1。"],
    [/^Program (\S+) does not exist$/, "程序 $1 不存在"],
    [/^Literature file (\S+) does not exist$/, "文献文件 $1 不存在"],
    [/^Contract file (\S+) does not exist$/, "契约文件 $1 不存在"],
    [/^Unhandled file extension on file path (\S+)$/, "文件路径 $1 的扩展名无法处理"],
    /* ---- 3.4 src/Hacking/netscriptCanHack.ts ---- */
    [/^Cannot hack (\S+) server because it is your server$/, "无法骇入 $1，因为它是你自己的服务器"],
    [/^Cannot grow (\S+) server because it is your server$/, "无法对 $1 执行 grow，因为它是你自己的服务器"],
    [/^Cannot weaken (\S+) server because it is your server$/, "无法削弱 $1，因为它是你自己的服务器"],
    [/^Cannot hack (\S+) server because you do not have root access$/, "无法骇入 $1，因为你没有 root 权限"],
    [/^Cannot grow (\S+) server because you do not have root access$/, "无法对 $1 执行 grow，因为你没有 root 权限"],
    [/^Cannot weaken (\S+) server because you do not have root access$/, "无法削弱 $1，因为你没有 root 权限"],
    [/^Cannot hack (\S+) server because your hacking skill is not high enough$/, "无法骇入 $1，因为你的黑客技能等级不够高"],
    /* ---- 3.5 src/Netscript/TypeAssertion.ts：参数类型断言 ---- */
    [/^Is of type '(\w+)', value: (.+)$/, "该值类型为 $1，值为：$2"],
    [/^Property (\S+) was expected but not present\.$/, "缺少预期的属性 $1。"],
    [/^Expected to be an object, was (null|string|number|boolean|function|symbol|bigint|undefined)\.$/,
      "应为一个对象，实际是 $1。"],
    [/^(\S+) expected to be a string\. (.+)$/, "$1 应为字符串。$2"],
    [/^(\S+) expected to be a function (.+)$/, "$1 应为函数。$2"],
    /* ---- 3.6 src/Netscript/NetscriptHelpers.tsx：参数校验与日志 ---- */
    [/^'(\S+)' is NaN\.$/, "参数 $1 是 NaN。"],
    [/^'(\S+)' must be a number\. (.+)$/, "参数 $1 必须是数字。$2"],
    [/^(\S+) must be an integer, was (.+)$/, "$1 必须是整数，实际为 $2"],
    [/^(\S+) must be a positive integer, was (.+)$/, "$1 必须是正整数，实际为 $2"],
    [/^(\S+) must be a positive safe integer, was (.+)$/, "$1 必须是正的安全整数，实际为 $2"],
    [/^(\S+) must be a positive number, was (.+)$/, "$1 必须是正数，实际为 $2"],
    [/^(\S+) must be a boolean, was (.+)$/, "$1 必须是布尔值，实际为 $2"],
    [/^scriptArgs must be an array\. Current type is (.+)\.$/, "scriptArgs 必须是数组。当前类型为 $1。"],
    [/^RunOptions\.ramOverride must be >= baseCost \((\S+)\), was (\S+)$/,
      "RunOptions.ramOverride 必须 >= baseCost（$1），实际为 $2"],
    [/^spawnDelay must be non-negative, got (\S+)$/, "spawnDelay 必须为非负数，收到 $1"],
    [/^additionalMsec must be non-negative, got (\S+)$/, "additionalMsec 必须为非负数，收到 $1"],
    [/^additionalMsec too large \(>1e9\), got (\S+)$/, "additionalMsec 过大（>1e9），收到 $1"],
    [/^BasicHGWOptions must be an object if specified, was (.+)$/, "若指定 BasicHGWOptions，它必须是一个对象，实际为 $1"],
    [/^Too many threads requested by (\S+)\. Requested: (\S+)\. Has: (\S+)\.$/,
      "$1 请求的线程过多：请求 $2，可用 $3。"],
    [/^bitNodeOptions must be an object if it's specified\. It was (.+)\.$/,
      "若指定 bitNodeOptions，它必须是一个对象。实际为 $1。"],
    [/^sourceFileOverrides is invalid\. Reason: (.+)$/, "sourceFileOverrides 无效。原因：$1"],
    [/^Currently running: (\S+)$/, "当前正在运行：$1"],
    [/^Tried to run: (\S+)$/, "试图运行：$1"],
    [/^Threads: (\S+)$/, "线程：$1"],
    [/^Dynamic RAM Usage: (\S+) per thread$/, "动态 RAM 用量：每线程 $1"],
    [/^RAM Allocation: (\S+) per thread$/, "RAM 分配：每线程 $1"],
    [/^Functions in-use: \[(.*)\]$/, "正在使用的函数：[$1]"],
    [/^Trying to use an invalid port: (\d+)\. Must be less or equal to (\d+)\.$/,
      "试图使用无效的端口：$1。必须小于或等于 $2。"],
    [/^Server (\S+) is offline\.$/, "服务器 $1 处于离线状态。"],
    [/^Invalid host: (.+)$/, "无效的主机：$1"],
    [/^Invalid darknet server data\.$/, "无效的 darknet 服务器数据。"],
    [/^Server must be a normal server\. Server's hostname is (.+?)\. Server data looks like darknet server data\.$/,
      "必须是普通服务器。该服务器主机名为 $1，其数据看起来像 darknet 服务器数据。"],
    [/^Server must be a normal server\. Server's hostname is (.+?)\.$/, "必须是普通服务器。该服务器主机名为 $1。"],
    [/^Server must be a normal server\. Server data looks like darknet server data\.$/,
      "必须是普通服务器。该数据看起来像 darknet 服务器数据。"],
    [/^Server must be a normal server\.$/, "必须是普通服务器。"],
    [/^Cannot be executed on (\S+)\. The server was offline \(and thus a darknet server\)\.$/,
      "无法在 $1 上执行。该服务器处于离线状态（因此是 darknet 服务器）。"],
    [/^Cannot be executed on (\S+)\. The server must not be a hacknet server\.$/,
      "无法在 $1 上执行。该服务器不能是 hacknet 服务器。"],
    [/^Cannot be executed on (\S+)\. The server must not be a darknet server\.$/,
      "无法在 $1 上执行。该服务器不能是 darknet 服务器。"],
    [/^Cannot be executed on (\S+)\.$/, "无法在 $1 上执行。"],
    [/^Invalid (\S+), must be a script \(js, jsx, ts, tsx\): (.+?) Did you mean to use (ns\.\S+) \?$/,
      "无效的 $1，必须是脚本文件（js、jsx、ts、tsx）：$2。你是想调用 $3 吗？"],
    [/^Invalid (\S+), must be a script \(js, jsx, ts, tsx\): (.+)$/,
      "无效的 $1，必须是脚本文件（js、jsx、ts、tsx）：$2"],
    [/^Invalid (\S+), was not a valid path: (.+)$/, "无效的 $1，不是有效路径：$2"],
    [/^Cannot find running script with pid: (\d+)$/, "找不到 PID 为 $1 的运行中脚本"],
    [/^Cannot find running script (\S+) on server (\S+) with args: (.*)$/,
      "在服务器 $2 上找不到参数为 $3 的运行中脚本 $1"],
    [/^Args passed: (.+)$/, "传入的参数：$1"],
    /* hack()/grow()/weaken() 在 tail 日志窗中的记录 */
    [/^Executing on '(.+)' in (.+) \(t=(\S+)\)$/, "已对 $1 开始执行，耗时 $2（$3 线程）"],
    [/^Successfully hacked '(.+)' for (.+) and (.+) exp \(t=(\S+)\)$/,
      "成功骇入 $1，获得 $2 与 $3 经验（$4 线程）"],
    [/^Failed to hack '(.+)'\. Gained (.+) exp \(t=(\S+)\)$/, "骇入 $1 失败，获得 $2 经验（$3 线程）"],
    /* ---- 3.7 src/Programs/Programs.ts：带参数运行无参程序、ServerProfiler 输出 ---- */
    [/^You are running (\S+) with arguments, but \1 does not accept arguments\. These arguments will be ignored\. \1 only affects the server \('(.+?)'\) that you are connecting via the terminal\. If you want to pass the target's hostname as an argument, you have to use the respective NS API\.$/,
      "你在带参数运行 $1，但 $1 不接受参数，这些参数会被忽略。$1 只影响你通过终端当前连接的服务器（'$2'）。若想传入目标主机名，请使用对应的 NS API。"],
    [/^NUKE successful! Gained root access to (\S+)$/, "NUKE 成功！已获得 $1 的 root 权限"],
    [/^Server base security level: (\S+)$/, "服务器基础安全等级：$1"],
    [/^Server current security level: (\S+)$/, "服务器当前安全等级：$1"],
    [/^Server growth rate: (\S+)$/, "服务器生长率：$1"],
    [/^Netscript hack\(\) execution time: (.+)$/, "Netscript hack() 执行耗时：$1"],
    [/^Netscript grow\(\) execution time: (.+)$/, "Netscript grow() 执行耗时：$1"],
    [/^Netscript weaken\(\) execution time: (.+)$/, "Netscript weaken() 执行耗时：$1"],
    [/^\[ \] Augmentations: (\S+) \/ (\S+)$/, "[ ] 义体：$1 / $2"],
    [/^\[x\] Augmentations: (\S+) \/ (\S+)$/, "[x] 义体：$1 / $2"],
    [/^\[ \] Money: (\S+) \/ (\S+)$/, "[ ] 资金：$1 / $2"],
    [/^\[x\] Money: (\S+) \/ (\S+)$/, "[x] 资金：$1 / $2"],
    [/^\[ \] Hacking skill: (\S+) \/ (\S+)$/, "[ ] 黑客技能：$1 / $2"],
    [/^\[x\] Hacking skill: (\S+) \/ (\S+)$/, "[x] 黑客技能：$1 / $2"],
  ]);

  // ============ 4. exact：源文件(SF)与 BitNode 名称（src/SourceFile/SourceFile.ts、src/BitNode/BitNode.tsx） ============
  // SF 显示名由源码拼为 "Source-File N: <BitNode 名>"；BitNode 名同时单独出现在 BitVerse / 选项页等处。
  // "IPvGO Subnet Takeover"（BN14 名）已在 dict-pages2.js 收录，此处不重复；"Bladeburners" 已在 pages2（刃行者）。
  BitburnerZH.exact({
    "Source Genesis": "创世纪",
    "Rise of the Underworld": "地下世界的崛起",
    "Corporatocracy": "公司统治",
    "The Singularity": "奇点",
    "Artificial Intelligence": "人工智能",
    "Bladeburners 2079": "刃行者 2079",
    "Ghost of Wall Street": "华尔街之幽灵",
    "Hacktocracy": "黑客统治",
    "Digital Carbon": "数字碳",
    "The Big Crash": "大崩盘",
    "The Recursion": "递归",
    "They're lunatics": "他们都是疯子",
    "The Secrets of the Dark Net": "暗网的秘密",

    "Source-File 1: Source Genesis": "源文件 1：创世纪",
    "Source-File 2: Rise of the Underworld": "源文件 2：地下世界的崛起",
    "Source-File 3: Corporatocracy": "源文件 3：公司统治",
    "Source-File 4: The Singularity": "源文件 4：奇点",
    "Source-File 5: Artificial Intelligence": "源文件 5：人工智能",
    "Source-File 6: Bladeburners": "源文件 6：刃行者",
    "Source-File 7: Bladeburners 2079": "源文件 7：刃行者 2079",
    "Source-File 8: Ghost of Wall Street": "源文件 8：华尔街之幽灵",
    "Source-File 9: Hacktocracy": "源文件 9：黑客统治",
    "Source-File 10: Digital Carbon": "源文件 10：数字碳",
    "Source-File 11: The Big Crash": "源文件 11：大崩盘",
    "Source-File 12: The Recursion": "源文件 12：递归",
    "Source-File 13: They're lunatics": "源文件 13：他们都是疯子",
    "Source-File 14: IPvGO Subnet Takeover": "源文件 14：IPvGO 子网接管",
    "Source-File 15: The Secrets of the Dark Net": "源文件 15：暗网的秘密",

    "BitNode-1: Source Genesis": "BitNode-1：创世纪",
    "BitNode-2: Rise of the Underworld": "BitNode-2：地下世界的崛起",
    "BitNode-3: Corporatocracy": "BitNode-3：公司统治",
    "BitNode-4: The Singularity": "BitNode-4：奇点",
    "BitNode-5: Artificial Intelligence": "BitNode-5：人工智能",
    "BitNode-6: Bladeburners": "BitNode-6：刃行者",
    "BitNode-7: Bladeburners 2079": "BitNode-7：刃行者 2079",
    "BitNode-8: Ghost of Wall Street": "BitNode-8：华尔街之幽灵",
    "BitNode-9: Hacktocracy": "BitNode-9：黑客统治",
    "BitNode-10: Digital Carbon": "BitNode-10：数字碳",
    "BitNode-11: The Big Crash": "BitNode-11：大崩盘",
    "BitNode-12: The Recursion": "BitNode-12：递归",
    "BitNode-13: They're lunatics": "BitNode-13：他们都是疯子",
    "BitNode-14: IPvGO Subnet Takeover": "BitNode-14：IPvGO 子网接管",
    "BitNode-15: The Secrets of the Dark Net": "BitNode-15：暗网的秘密",
  });

  // 4.1 SF 描述里的纯数值条目（src/BitNode/BitNode.tsx 的 <li>Level N: 16%</li> 等；带文字的 Level 条目已在 dict-options.js）
  BitburnerZH.patterns([
    [/^Level (\d): (\d+%)$/, "等级 $1：$2"],
    [/^Level (\d): (\d+x)$/, "等级 $1：$2"],
  ]);

  // ============ 5. exact：tail 日志窗与错误弹窗（src/ui/React/LogBoxManager.tsx、src/ErrorHandling/*、src/utils/ErrorHandler.ts） ============
  BitburnerZH.exact({
    /* ---- 5.1 LogBoxManager.tsx（title/tooltip 属性也会被引擎翻译） ---- */
    "Re-run script": "重新运行脚本",
    "Stop script": "停止脚本",
    "Minimize": "最小化",
    "Close window": "关闭窗口",
    /* ---- 5.2 src/ErrorHandling/ErrorModal.tsx（脚本崩溃弹窗） ---- */
    "Suppress error modals (5 min)": "屏蔽错误弹窗（5 分钟）",
    "If this is set, no error modals will be shown for the next five minutes, and only log errors to the Recent Errors page.":
      "启用后，接下来五分钟内不会显示错误弹窗，错误只会记录到最近错误页面。",
    "View Script Logs": "查看脚本日志",
    "Errors Page": "错误页面",
    "Recent Errors": "最近错误",
    /* ---- 5.3 src/ErrorHandling/ErrorModal.tsx 弹窗标题：类型词与 " ERROR" 是两个文本节点 ---- */
    "RUNTIME": "运行时",
    "TYPE": "类型",
    "SYNTAX": "语法",
    "REFERENCE": "引用",
    "RANGE": "范围",
    "UNKNOWN": "未知",
    "RAM USAGE": "RAM 用量",
    "API ACCESS": "API 访问",
    "CONCURRENCY": "并发",
    /* ---- 5.4 src/utils/ErrorHandler.ts + src/ui/Components/CustomBoundary.tsx ---- */
    "Unexpected type of error thrown. This error was likely thrown manually within a script.":
      "抛出了意外类型的错误。该错误很可能是脚本内手动抛出的。",
    "Error has been logged to the console.": "错误已记录到控制台。",
    "Error in custom react content. See console for details.": "自定义 React 内容中出现错误。详见控制台。",
  });

  BitburnerZH.frag({
    " ERROR": " 错误",
    "Script: ": "脚本：",
    "PID: ": "PID：",
    "Server: ": "服务器：",
  });

  BitburnerZH.patterns([
    /* ---- 5.5 LogBoxManager.tsx：tail 窗口重跑脚本失败 ---- */
    [/^Could not launch script\. The script (\S+) no longer exists on the server (\S+)\.$/,
      "无法启动脚本。脚本 $1 已不存在于服务器 $2 上。"],
    [/^Could not calculate ram usage for (\S+) on (\S+)\.$/, "无法计算 $2 上 $1 的 RAM 用量。"],
    [/^Logs: (.+)$/, "日志：$1"],
    /* ---- 5.6 ErrorModal / RecentErrorsPage：Snackbar 与记录 ---- */
    [/^No recent script found with pid (\d+)$/, "找不到 PID 为 $1 的近期脚本"],
    /* ---- 5.7 src/utils/ErrorHandler.ts ---- */
    [/^Type of error: (.+)$/, "错误类型：$1"],
    [/^Value of error: (.+)$/, "错误值：$1"],
    [/^Cannot get save data\. Error: (.+)\. This may be because the save data is too large\.$/,
      "无法获取存档数据。错误：$1。这可能是因为存档数据过大。"],
    [/^Cannot get save info\. Error: (.+)\. This may be because the save data is too large\.$/,
      "无法获取存档信息。错误：$1。这可能是因为存档数据过大。"],
    [/^Cannot get save data\. Error: (.+)\.$/, "无法获取存档数据。错误：$1。"],
    [/^Cannot get save info\. Error: (.+)\.$/, "无法获取存档信息。错误：$1。"],
  ]);

  // ============ 6. exact：DarkNet / darknet 服务器（src/DarkNet/Enums.ts、ui/ServerSummary.tsx、ui/ServerDetailsModal.tsx、ui/PasswordPrompt.tsx、effects/*） ============
  BitburnerZH.exact({
    /* ---- 6.1 Enums.ts：GenericResponseMessage（响应状态文案） ---- */
    "Direct Connection Required": "需要直接连接",
    "Unauthorized": "未授权",
    "Not Found": "未找到",
    "Request Timeout": "请求超时",
    "Not Enough Charisma": "魅力不足",
    "Stasis Link Limit Reached": "停滞链路（Stasis Link）数量已达上限",
    "No Host-owned RAM Left To Reallocate": "没有可供重新分配的主机 RAM",
    "Service Unavailable": "服务不可用",
    /* ---- 6.2 ui/ServerSummary.tsx ---- */
    "[ auth required ]": "[ 需要认证 ]",
    "(no connection)": "(无连接)",
    "No data files on server": "服务器上没有数据文件",
    "No running scripts on server": "服务器上没有运行中的脚本",
    "A mysterious executable has been found here...": "这里发现了一个神秘的执行程序……",
    "Backdoor installed. Warning: this increases darknet instability.": "已安装后门。警告：这会加剧 darknet 的不稳定性。",
    "Stasis link installed. This allows connecting to the server remotely, as well as ns.exec from any distance.":
      "已建立停滞链路（Stasis Link）。它允许你远程连接该服务器，并且 ns.exec 不受距离限制。",
    /* ---- 6.3 ui/ServerDetailsModal.tsx ---- */
    "You have successfully navigated the labyrinth! Congratulations!": "你已成功穿越迷宫！恭喜！",
    /* ---- 6.4 ui/PasswordPrompt.tsx ---- */
    "The weight of the deep net presses down on you. It seems this place will challenge you to make your own tools...":
      "深网的重量向你压下来。看来这个地方会要求你自己造工具……",
    "Checking password...": "正在检查密码……",
    "(no response yet)": "（尚无响应）",
    "Submit Password": "提交密码",
    "Password": "密码",
    "Hint:": "提示：",
    "Data:": "数据：",
    "Length:": "长度：",
    "Format:": "格式：",
    "Model:": "型号：",
    "Required charisma:": "所需魅力：",
    /* ---- 6.5 effects/cacheFiles.ts：缓存奖励（Toast 弹窗） ---- */
    "New coding contracts are now available on the network!": "网络上出现了新的编程契约！",
    "You have discovered a data file cache!": "你发现了一个数据文件缓存！",
    "You have discovered a stolen WSE Account!": "你发现了一个被盗的 WSE 账户！",
    "You have discovered a stolen TIX API access point!": "你发现了一个被盗的 TIX API 接入点！",
    "You have discovered a cache of stolen 4S Data!": "你发现了一个被盗的 4S 数据缓存！",
  });

  BitburnerZH.frag({
    "Logs scraped via ": "通过 ",
    " cha:": " 魅力：",
    /* ServerDetailsModal.tsx：`Password: "xxx"` 被 JSX 拆成 3 个文本节点 */
    "Password: \"": "密码：“",
  });

  BitburnerZH.patterns([
    /* ---- 6.2 ui/ServerSummary.tsx（tooltip 文本） ---- */
    [/^Data files on server: (.+)$/, "服务器上的数据文件：$1"],
    [/^Running scripts on server: (.+)$/, "服务器上运行中的脚本：$1"],
    [/^Reward caches on server: (.+)$/, "服务器上的奖励缓存：$1"],
    [/^Coding contract count: (\d+)$/, "编程契约数量：$1"],
    [/^Ram blocked by owner: (\S+?)\. This can be freed up using ns\.dnet\.memoryReallocation\(\)$/,
      "被所有者占用的 RAM：$1。可用 ns.dnet.memoryReallocation() 释放。"],
    /* ---- 6.3 ui/ServerDetailsModal.tsx ---- */
    [/^RAM in use: (\S*)\/(\S+) GB$/, "RAM 使用量：$1/$2 GB"],
    [/^Ram blocked by server owner: (\S+) GB\. Ram in use by scripts: (\S+) GB\.$/,
      "服务器所有者占用的 RAM：$1 GB。脚本使用的 RAM：$2 GB。"],
    [/^Password: "(.+)"$/, "密码：“$1”"],
    [/^IP: (\S+)$/, "IP：$1"],
    [/^Required charisma: (\d+)$/, "所需魅力：$1"],
    [/^Server Model: (\S+)$/, "服务器型号：$1"],
    [/^Model: (\S+)$/, "型号：$1"],
    /* ---- 6.5 effects/cacheFiles.ts：带业力后缀与不带后缀两种整节点文本都要收 ---- */
    [/^You have discovered a cache with (\S+)\. Gained (-\S+) karma\.$/, "你发现了一个缓存，内含 $1。业力 $2。"],
    [/^You have discovered a cache with (\S+)\.$/, "你发现了一个缓存，内含 $1。"],
    [/^You have discovered a stock option cache containing (\d+) shares of (\S+)! Gained (-\S+) karma\.$/,
      "你发现了一个股票期权缓存，包含 $2 的 $1 股。业力 $3。"],
    [/^You have discovered a stock option cache containing (\d+) shares of (\S+)!$/,
      "你发现了一个股票期权缓存，包含 $2 的 $1 股。"],
    [/^You have discovered the program (\S+)\. Gained (-\S+) karma\.$/, "你发现了程序 $1。业力 $2。"],
    [/^You have discovered the program (\S+)\.$/, "你发现了程序 $1。"],
    [/^You have discovered a data file cache! Gained (-\S+) karma\.$/, "你发现了一个数据文件缓存。业力 $1。"],
    [/^You have discovered a cache with the augmentation (.+)! Gained (-\S+) karma\.$/,
      "你发现了一个缓存，内含义体 $1。业力 $2。"],
    [/^You have discovered a cache with the augmentation (.+)!$/, "你发现了一个缓存，内含义体 $1。"],
    [/^New coding contracts are now available on the network! Gained (-\S+) karma\.$/,
      "网络上出现了新的编程契约！业力 $1。"],
    [/^You have discovered (.+)\. Gained (-\S+) karma\.$/, "你发现了 $1。业力 $2。"],
    /* ---- 6.7 effects/ramblock.ts：ns.dnet.memoryReallocation() 结果 ---- */
    [/^Liberated (\S+) of RAM from the server owner's processes\. \(Gained (\S+) cha xp\.\)$/,
      "从服务器所有者的进程中解放了 $1 RAM。（获得 $2 点魅力经验。）"],
    /* ---- 6.8 effects/cacheFiles.ts：addCacheToServer 失败 ---- */
    [/^Duplicate cache file: (\S+)$/, "缓存文件重复：$1"],
    [/^Cannot generate path\. prefix: (\S+)$/, "无法生成路径。prefix：$1"],
    /* ---- 6.9 ui/uiUtilities.tsx：复制主机名 / 日志字段 ---- */
    [/^Copied "(.+)" to clipboard$/, "已将“$1”复制到剪贴板"],
  ]);

  BitburnerZH.frag({
    /* 6.10 ui/uiUtilities.tsx：formatObjectWithColoredKeys 把 "key: " 与值拆成两个文本节点 */
    "message: ": "消息：",
    "code: ": "状态码：",
    "success: ": "是否成功：",
    "data: ": "数据：",
    "passwordAttempted: ": "尝试的密码：",
    "passwordExpected: ": "正确的密码：",
  });

  // ============ 7. Themes：主题/样式编辑器（src/Themes/ui/ThemeEditorModal.tsx、StyleEditorModal.tsx、ThemeBrowser.tsx、ThemeEntry.tsx） ============
  // 「Theme Browser / Theme Editor / Style Editor / Custom theme」等入口按钮已在 dict-options.js；取色器字段标签就是主题键名（primarylight 等），保留英文；主题名保留英文。
  BitburnerZH.exact({
    /* ---- 7.1 ThemeEditorModal.tsx：预览区 ---- */
    "Example tooltip": "示例提示",
    "primary button": "主要按钮",
    "secondary button": "次要按钮",
    "warning button": "警告按钮",
    "info button": "信息按钮",
    "error button": "错误按钮",
    "disabled button": "禁用按钮",
    "text with primary color": "使用主要色的文字",
    "text with secondary color": "使用次要色的文字",
    "text with error color": "使用错误色的文字",
    "Text field": "文本框",
    /* ---- 7.2 ThemeEditorModal.tsx：导入导出与操作 ---- */
    "import / export theme": "导入 / 导出主题",
    "Backup your theme or share it with others by copying the string above.":
      "备份你的主题，或复制上面的字符串与他人分享。",
    "Revert to Default": "恢复为默认主题",
    "Reverts all modification back to the default theme. This is permanent.":
      "把所有改动恢复为默认主题。此操作不可撤销。",
    "See more themes": "查看更多主题",
    "Move over to the theme browser's page to use one of our predefined themes.":
      "前往主题浏览器页面，使用我们预置的主题。",
    /* ---- 7.3 StyleEditorModal.tsx ---- */
    "Styles Editor": "样式编辑器",
    "may mess up": "可能会破坏",
    "NOT recommended": "都不被建议",
    "Font Family": "字体家族",
    "Font Size": "字号",
    "Tail Font Size": "tail 字号",
    "Line Height": "行高",
    "Must have a value": "必须有值",
    "Must be a number": "必须是数字",
    "Revert to Defaults": "恢复默认值",
    "Save Modifications": "保存修改",
    "Save styles to settings": "将样式保存到设置",
    /* ---- 7.4 ThemeBrowser.tsx / ThemeEntry.tsx ---- */
    "UNDO": "撤销",
    "Use": "使用",
    "Use this theme": "使用此主题",
  });

  BitburnerZH.frag({
    "WARNING: Changing styles ": "警告：修改样式",
    " the interface. Drastic changes are ": " 界面。大幅改动",
    "Updated theme to \"": "已将主题更新为“",
    "by ": "作者：",
  });

  BitburnerZH.patterns([
    [/^Invalid theme\. Errors: (.+)\.$/, "主题无效。错误：$1"],
    [/^Theme Screenshot of "(.+)"$/, "$1 主题截图"],
  ]);

  // ============ 8. 通用对话框外壳与 NS UI 日志（src/ui/React/{DialogBox,Modal,Snackbar,AlertManager,PromptManager}.tsx、src/NetscriptFunctions/UserInterface.ts、src/Netscript/APIWrapper.ts、src/DarkNet/effects/webstorm.ts） ============
  // DialogBox.tsx / Modal.tsx / Snackbar.tsx 在 v3.0.1 中没有玩家可见文本（仅做转发与容器）；Yes/No/Confirm/OK/Close 已在 dict-core.js。
  BitburnerZH.exact({
    /* ---- 8.1 AlertManager.tsx（弹窗队列外壳） ---- */
    "No alert to show": "没有需要显示的警告",
    /* ---- 8.2 PromptManager.tsx（输入框/下拉框确认弹窗） ---- */
    "Error: Please provide an array of string choices": "错误：请提供一组字符串选项",
    /* ---- 8.3 src/NetscriptFunctions/UserInterface.ts（ns.setTheme/setStyles/clearTerminal 的日志） ---- */
    "Successfully set theme": "主题设置成功",
    "Successfully set styles": "样式设置成功",
    "Reinitialized theme to default": "已将主题重新初始化为默认值",
    "Reinitialized styles to default": "已将样式重新初始化为默认值",
    "Clearing terminal": "正在清除终端",
    /* ---- 8.5 src/Netscript/APIWrapper.ts（已移除的 NS 函数、误改 ns） ---- */
    "REMOVED FUNCTION ERROR": "已移除的函数错误",
    "REMOVED FUNCTION": "已移除的函数",
    "ns instances are not modifiable!": "ns 实例不可被修改！",
    "Error while wrapping netscript API. See console.": "包装 Netscript API 时出错。详见控制台。",
    /* ---- 8.6 src/DarkNet/effects/webstorm.ts（Toast） ---- */
    "DARKNET WEBSTORM APPROACHING": "darknet 网络风暴即将来临",
    /* ---- 8.7 src/utils/helpers/exceptionAlert.tsx（游戏自身异常弹窗） ---- */
    "This is a bug. Please contact developers.": "这是一个 bug，请联系开发者。",
  });

  BitburnerZH.frag({
    "Caught an exception: ": "捕获到一个异常：",
    "Error cause: ": "错误成因：",
    "Cause stack: ": "成因调用栈：",
    "Commit: ": "提交号：",
    "UserAgent: ": "UserAgent：",
  });

  BitburnerZH.patterns([
    [/^Function removed in (\S+)\. Please use (\S+) instead\.$/, "该函数已在 $1 版本中被移除。请改用 $2。"],
    [/^Failed to set theme\. Errors: (.+)$/, "设置主题失败。错误：$1"],
    [/^Failed to set styles\. Errors: (.+)$/, "设置样式失败。错误：$1"],
  ]);

  // ============ 9. cloud 工具（src/NetscriptFunctions/Cloud.ts：cloud.* 在 tail 日志中的输出） ============
  // 注：dict-terminal.js 已收 PromptManager/ServerPurchases 的 "You have reached the maximum limit of N cloud servers. You cannot purchase any more. You can delete ..." 长句；
  // 下面的短句是 cloud.purchaseServer 自身的日志，二者不冲突（模式已用 \.$ 收尾锚定）。
  BitburnerZH.exact({
    "Cannot delete your home computer.": "无法删除你的家用计算机。",
    "You are currently connected to the cloud server you are trying to delete.":
      "你当前正连接在要删除的云服务器上。",
    "Cannot delete the cloud server this script is running on.": "无法删除本脚本正在运行的云服务器。",
  });

  BitburnerZH.patterns([
    [/^Invalid argument: ram='(\S+)' must not be greater than CloudServerMaxRam$/,
      "无效参数：ram='$1' 不能大于 CloudServerMaxRam"],
    [/^Invalid argument: ram='(\S+)' must be a positive power of 2$/,
      "无效参数：ram='$1' 必须是 2 的正整数次幂"],
    [/^Invalid argument: hostname='(.*)' is an empty string\.$/, "无效参数：hostname='$1' 是空字符串。"],
    [/^Invalid argument: hostname='(.*)' is an IP address\.$/, "无效参数：hostname='$1' 是一个 IP 地址。"],
    [/^Invalid argument: hostname='(.*)' is a reserved hostname\.$/, "无效参数：hostname='$1' 是保留的主机名。"],
    [/^You have reached the maximum limit of (\d+) cloud servers\. You cannot purchase any more\.$/,
      "你已达到 $1 台云服务器的数量上限，无法再购买更多。"],
    [/^Not enough money to purchase cloud server\. Need (\S+)$/, "资金不足以购买云服务器，需要 $1。"],
    [/^Purchased new cloud server with hostname '(.+)' for (\S+)$/,
      "已购买主机名为 “$1” 的新云服务器，花费 $2。"],
    [/^Cannot delete (\S+)\. You do not own this server\.$/, "无法删除 $1。这台服务器并不属于你。"],
    [/^Cannot delete cloud server '(.+)' because it still has scripts running\.$/,
      "无法删除云服务器 “$1”，因为它上面还有脚本在运行。"],
    [/^Could not identify server (\S+) as a cloud server\. This is a bug\. Report to dev\.$/,
      "无法将服务器 $1 识别为云服务器。这是一个 bug，请反馈给开发者。"],
    [/^Could not find server (\S+) as a cloud server\. This is a bug\. Report to dev\.$/,
      "找不到作为云服务器的服务器 $1。这是一个 bug，请反馈给开发者。"],
    [/^Deleted server '(.+)'\.$/, "已删除服务器 “$1”。"],
  ]);
})();

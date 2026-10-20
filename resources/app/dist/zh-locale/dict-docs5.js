/* Bitburner 汉化字典 —— NS API 文档批次5（接力 dict-docs4.js 待覆盖清单）。基准 tag v3.0.1，源=仓库根 markdown/。
 * 本文件加载于 docs4 之后：同键若重注册会覆盖 docs4/3/1 的值，因此写前一律 grep dict-docs[1234].js（含 UI dict）
 * 沿用既有定值；typedoc 样板句（Parameters/Returns:/(Optional)/" Optional parameters for configuring function
 * behavior."/"RAM cost: … GB"/" Either an integer number of threads for new script, or a " 等）已在 docs4 注册，
 * 本批只补缺失句。docs4 的 4 条 patterns（"X method/property/interface/enum" 标题）全局生效，本批不再重复。
 * 机制同 docs4 头注释；本批新约定：带首尾空格的片段键一律放 frag 区（避免 EXACT trim 后引擎回填空格造成双空格）。
 * 属性名/函数名/类型名/文件名/服务器名保留英文，只译描述。
 * 本轮已覆盖（markdown/，v3.0.1）：
 *   ① NS 核心函数详情页全量（参数表/返回值/备注/片段）：ns.sleep、asleep、spawn、run、kill、kill_1、
 *     killall、tprint、writePort、readPort、getPortHandle、peek、tryWritePort、clearPort、ls、rm、mv、
 *     read、write、scan（另 hack/grow/weaken/exec/scp 已在 docs4）。
 *   ② 类型属性页（描述列）：Server（24 属性）、ProcessInfo、RunningScript（20 属性）。
 *   ③ WarehouseAPI / OfficeAPI 命名空间页全部方法摘要行；GoAnalysis / GoCheat 子命名空间全部方法简介
 *     （Go.analysis property 页与 go.md 摘要已含，"Takes an optional boardState…"等共享句一次注册）。
 *   ④ Singularity 高频详情页 6 个：installAugmentations、b1tflum3、destroyW0r1dD43m0n、workForFaction、
 *     softReset、purchaseAugmentation（cbScript/参数描述等共享句已在多页复用同键）。
 * 仍未覆盖（留给下一轮接力，均在 markdown/）：
 *   ns.* 其余详情页（print/printf/sprintf/vsprintf/tprintf/tprintraw/printraw、exec 的 RunOptions 类型页、
 *   isRunning/scriptKill/scriptRunning/self/exit/atExit/ps、getFileMetadata/fileExists/flags/ramOverride/
 *   dynamicImport/getFunctionRamCost/getScriptRam/getScriptLogs/getRunningScript/getRecentScripts、
 *   getServer 及 getServer* 其余页、getPlayer/getBitNodeMultipliers/getHackingMultipliers/getHacknetMultipliers/
 *   getMoneySources/getResetInfo/getSharePower/share/getFavorToDonate/dnsLookup/getIP/hasTorRouter/serverExists/
 *   wget/prompt/toast/alert/flags 等）；
 *   Singularity 其余 ~60 详情页；Gang/Corporation/Hacknet/Stock/Sleeve/Go/UI/Stanek/CodingContract/Cloud/
 *   Infiltration/Grafting/Format/Dnet 各方法详情页；formulas 全部页（Formulas 及子命名空间/函数页）；
 *   Player/Person/Multipliers/Skills/Division/Warehouse/Office/Material/Product/NodeStats/HacknetNodeConstants
 *   等其余类型属性页与其属性子页；各枚举成员页；BitNodeMultipliers 属性页组；TailProperties/HostReturnOptions 等。
 * 本轮新增术语：superko→全局同形；liberty 数值显示→"X 口气"；bulk-buy→批量购入；AdVert/research→研究；
 * smart supply→智能调拨(docs3)；throw party→办派对；No AI→保留英文；cheat→作弊着法。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  BitburnerZH.exact({
    // ---- markdown/bitburner.ns.sleep.md / bitburner.ns.asleep.md ----
    "A promise that resolves to true when the sleep is completed.": "一个 Promise，睡眠完成时解析为 true。",
    "RAM cost: 0 GB": "RAM 费用：0 GB",
    // ---- markdown/bitburner.ns.spawn.md ----
    "Filename of script to execute.": "要执行的脚本的文件名。",
    "Additional arguments to pass into the new script that is being run.": "传入新启动脚本的额外参数。",
    "RAM cost: 2 GB": "RAM 费用：2 GB",
    "Terminates the current script, and then after a defined delay it will execute the newly-specified script. The purpose of this function is to execute a new script without being constrained by the RAM usage of the current one. This function can only be used to run scripts on the local server.": "终止当前脚本，经过指定延时后执行指定的新脚本。本函数的意义在于不受当前脚本 RAM 用量的限制地执行新脚本，只能用于在本机服务器上运行脚本。",
    "The delay specified can be 0; in this case the new script will synchronously replace the old one. (There will not be any opportunity for other scripts to use up the RAM in-between.)": "指定的延时可以为 0；此时新脚本将同步替换旧脚本（中间不会给其他脚本抢占 RAM 的机会）。",
    "Because this function immediately terminates the script, it does not have a return value.": "由于本函数会立即终止脚本，它没有返回值。",
    "For password-protected servers (such as darknet servers), a session must be established with the destination server before using this function.": "对受密码保护的服务器（如暗网服务器），使用本函数前必须先与目标服务器建立会话。",
    // ---- markdown/bitburner.ns.run.md ----
    "Filename of script to run.": "要运行的脚本的文件名。",
    "Additional arguments to pass into the new script that is being run. Note that if any arguments are being passed into the new script, then the second argument threadOrOptions must be filled in with a value.": "传入新启动脚本的额外参数。注意：若要向新脚本传参，第二个参数 threadOrOptions 必须填值。",
    "RAM cost: 1 GB": "RAM 费用：1 GB",
    "Run a script as a separate process. This function can only be used to run scripts located on the current server (the server running the script that calls this function). Requires a significant amount of RAM to run this command.": "以独立进程运行脚本。本函数只能运行已位于当前服务器（即发起调用的脚本所在服务器）上的脚本，且需要相当多的 RAM。",
    "If the script was successfully started, then this functions returns the PID of that script. Otherwise, it returns 0.": "脚本成功启动时返回其 PID，否则返回 0。",
    // ---- markdown/bitburner.ns.kill.md / kill_1 / killall / tprint ----
    "The PID of the script to kill.": "要击杀的脚本的 PID。",
    "True if the script is successfully killed, and false otherwise.": "脚本被成功击杀返回 true，否则返回 false。",
    "RAM cost: 0.5 GB": "RAM 费用：0.5 GB",
    "the other ns.kill entry": "另一个 ns.kill 条目",
    "Filename of the script to kill.": "要击杀的脚本的文件名。",
    "Arguments of the script to kill.": "要击杀脚本的参数。",
    "True if the scripts were successfully killed, and false otherwise.": "成功击杀返回 true，否则返回 false。",
    "True if any scripts were killed, and false otherwise.": "只要击杀过任何脚本就返回 true，否则返回 false。",
    "Kills all running scripts on the specified server. This function returns true if any scripts were killed, and false otherwise. In other words, it will return true if there are any scripts running on the target server. If no host is defined, it will kill all scripts, where the script is running.": "击杀指定服务器上所有运行中的脚本。只要击杀过脚本就返回 true——换言之，目标服务器上有脚本在跑即返回 true。未定义 host 时，击杀本脚本所在服务器上的全部脚本。",
    "Value(s) to be printed.": "要打印的一个或多个值。",
    // ---- markdown/bitburner.ns.writePort / readPort / getPortHandle ----
    "Port to write to. Must be a positive integer.": "要写入的端口。须为正整数。",
    "Data to write, it's cloned with structuredClone().": "要写入的数据，将用 structuredClone() 克隆。",
    "The data popped off the queue if it was full, or null if it was not full.": "若队列已满，返回被弹出的数据；未满则返回 null。",
    "Write data to the given Netscript port.": "向指定 Netscript 端口写入数据。",
    "Read data from that port. A port is a serialized queue. This function will remove the first element from that queue and return it. If the queue is empty, then the string “NULL PORT DATA” will be returned. Ports are shared across all hosts and contents are reset on game restart.": "从端口读取数据。端口是一个序列化队列；本函数会取出并返回队列的第一个元素。队列为空时返回字符串“NULL PORT DATA”。端口在所有主机间共享，游戏重启时内容会被重置。",
    "Port number. Must be a positive integer.": "端口号。须为正整数。",
    "Get a handle to a Netscript Port. Ports are shared across all hosts and contents are reset on game restart.": "获取 Netscript 端口的句柄。端口在所有主机间共享，游戏重启时内容会被重置。",
    // ---- markdown/bitburner.ns.peek / tryWritePort / clearPort ----
    "Port to peek. Must be a positive integer.": "要窥探的端口。须为正整数。",
    "Data in the specified port.": "指定端口中的数据。",
    "This function is used to peek at the data from a port. It returns the first element in the specified port without removing that element. If the port is empty, the string “NULL PORT DATA” will be returned. Ports are shared across all hosts and contents are reset on game restart.": "本函数用于窥探端口数据：返回指定端口的第一个元素而不移除它。端口为空时返回字符串“NULL PORT DATA”。端口在所有主机间共享，游戏重启时内容会被重置。",
    "Port to attempt to write to. Must be a positive integer.": "尝试写入的端口。须为正整数。",
    "True if the data is successfully written to the port, and false otherwise.": "数据成功写入端口返回 true，否则返回 false。",
    "Attempts to write data to the specified Netscript port. If the port is full, the data will not be written. Otherwise, the data will be written normally. Ports are shared across all hosts and contents are reset on game restart.": "尝试向指定 Netscript 端口写入数据：端口已满则不写入，否则正常写入。端口在所有主机间共享，游戏重启时内容会被重置。",
    "Port to clear data from. Must be a positive integer.": "要清空数据的端口。须为正整数。",
    "Delete all data from the underlying queue.": "删除底层队列中的所有数据。",
    // ---- markdown/bitburner.ns.ls / rm ----
    "Hostname/IP of the target server.": "目标服务器的主机名/IP。",
    "A substring to search for in the filename.": "要在文件名中搜索的子串。",
    "Array with the filenames of all files on the specified server.": "包含指定服务器上所有文件文件名的数组。",
    "RAM cost: 0.2 GB": "RAM 费用：0.2 GB",
    "Returns an array with the filenames of all files on the specified server (as strings). The returned array is sorted in alphabetic order.": "返回一个由指定服务器上所有文件名（字符串）组成的数组，按字母顺序排序。",
    "Filename of file to remove. Must include the extension.": "要删除文件的文件名，须含扩展名。",
    "True if it successfully deletes the file, and false otherwise.": "成功删除文件返回 true，否则返回 false。",
    "Removes the specified file from the current server. This function works for every file type except message (.msg) files.": "从当前服务器删除指定文件。除消息（.msg）文件外，本函数适用于所有类型的文件。",
    // ---- markdown/bitburner.ns.mv / read ----
    "Hostname/IP of target server.": "目标服务器的主机名/IP。",
    "Filename of the source file.": "源文件的文件名。",
    "Filename of the destination file.": "目标文件的文件名。",
    "Move the source file to the specified destination on the target server.": "将源文件移动到目标服务器上的指定名称处。",
    "This command only works for scripts (.js, .jsx, .ts, .tsx) and text files (.txt, .json, .css). It cannot, however, be used to convert from script to text file, or vice versa.": "本命令仅适用于脚本（.js、.jsx、.ts、.tsx）与文本文件（.txt、.json、.css），但不能把脚本转成文本文件（或反向转换）。",
    "This function can also be used to rename files.": "本函数也可用于重命名文件。",
    "This function is not able to remove running scripts from their original locations. Make sure to stop any scripts before using this function on them.": "本函数无法把正在运行的脚本从原位置移走——对脚本使用前请先停止它们。",
    "Name of the file to be read.": "要读取的文件名。",
    "Data in the specified text file.": "指定文本文件中的数据。",
    "This function is used to read data from a text file (.txt, .json, .css), a script (.js, .jsx, .ts, .tsx), a literature file (.lit), or a message (.msg).": "本函数用于读取文本文件（.txt、.json、.css）、脚本（.js、.jsx、.ts、.tsx）、文学文件（.lit）或消息（.msg）中的数据。",
    "This function will return the data in the specified file. If the file does not exist, an empty string will be returned.": "返回指定文件中的数据；文件不存在时返回空字符串。",
    "With literature files, the returned data is a raw HTML string.": "对文学文件，返回的是原始 HTML 字符串。",
    // ---- markdown/bitburner.ns.write / scan ----
    "Name of the file to be written to.": "要写入的文件名。",
    "This function can be used to write data to a text file (.txt, .json, .css) or a script (.js, .jsx, .ts, .tsx).": "本函数可向文本文件（.txt、.json、.css）或脚本（.js、.jsx、.ts、.tsx）写入数据。",
    "This function will write data to that file. If the specified file does not exist, then it will be created. The third argument mode defines how the data will be written to the file. If mode is set to “w”, then the data is written in “write” mode which means that it will overwrite all existing data on the file. If mode is set to any other value then the data will be written in “append” mode which means that the data will be added at the end of the file.": "本函数把数据写入该文件；指定文件不存在时会先创建。第三个参数 mode 决定写入方式：mode 为 “w” 时以“写入”模式覆盖文件中原有的全部数据；为其他任何值时以“追加”模式把数据添加到文件末尾。",
    "Returns an array of hostnames.": "返回主机名数组。",
    "Returns an array containing the hostnames or IP addresses of all servers that are one node way from the specified target server. The hostnames/IPs in the returned array are strings. Returns hostnames by default.": "返回一个数组，包含与指定目标服务器相距一个节点的所有服务器的主机名或 IP 地址（字符串）；默认返回主机名。",
    "The server network is a tree graph with the home server at the root. The parent node is always the first item of the returned array.": "服务器网络是以 home 为根的树状图，父节点永远是返回列表的第一项。",
    "For example, let's say the network looks like this:": "例如，假设网络形如：",
    "ns.scan(\"home\"): [\"n00dles\", \"joesguns\"]: \"home\" is the root, so it does not have a parent node.": "ns.scan(\"home\")：[\"n00dles\", \"joesguns\"]——home 是根，没有父节点。",
    "ns.scan(\"n00dles\"): [\"home\"]: \"home\" is the parent node of \"n00dles\".": "ns.scan(\"n00dles\")：[\"home\"]——home 是 n00dles 的父节点。",
    "ns.scan(\"joesguns\"): [\"home\", \"CSEC\"]: \"home\" is the parent node of \"joesguns\".": "ns.scan(\"joesguns\")：[\"home\", \"CSEC\"]——home 是 joesguns 的父节点。",
    "ns.scan(\"CSEC\"): [\"joesguns\", \"omega-net\"]: \"joesguns\" is the parent node of \"CSEC\".": "ns.scan(\"CSEC\")：[\"joesguns\", \"omega-net\"]——joesguns 是 CSEC 的父节点。",
    "ns.scan(\"omega-net\"): [\"CSEC\"]: \"CSEC\" is the parent node of \"omega-net\".": "ns.scan(\"omega-net\")：[\"CSEC\"]——CSEC 是 omega-net 的父节点。",
    "If you run the \"scan-analyze\" command at home, it won't show all servers due to its limited maximum depth. You can use this function with BFS (Breadth-first search) or DFS (Depth-first search) to traverse the network and discover all servers.": "在 home 上运行 scan-analyze 命令时，因其最大深度有限不会显示所有服务器；可配合本函数用 BFS（广度优先搜索）或 DFS（深度优先搜索）遍历整个网络、找出所有服务器。",
    // ---- markdown/bitburner.server.md（Server 接口属性描述；(Optional) 已注册） ----
    "How many CPU cores this server has. Affects magnitude of grow and weaken ran from this server.": "该服务器拥有的 CPU 核心数，影响从该服务器发起的 grow 与 weaken 的幅度。",
    "Whether or not the FTP port is open": "FTP 端口是否开放",
    "Flag indicating whether player has admin/root access to this server": "标志：玩家是否拥有该服务器的 admin/root 权限",
    "Hostname. Must be unique": "主机名，必须唯一",
    "Whether or not the HTTP Port is open": "HTTP 端口是否开放",
    "IP Address. Must be unique": "IP 地址，必须唯一",
    "Flag indicating whether player is currently connected to this server": "标志：玩家当前是否已连接到该服务器",
    "RAM (GB) available on this server": "该服务器上可用的 RAM（GB）",
    "Name of company/faction/etc. that this server belongs to, not applicable to all Servers": "该服务器所属的公司/派系等组织的名称，并非对所有服务器都适用",
    "RAM (GB) used. i.e. unavailable RAM": "已使用的 RAM（GB），即不可用部分",
    "Whether or not the SMTP Port is open": "SMTP 端口是否开放",
    "Whether or not the SQL Port is open": "SQL 端口是否开放",
    "Whether or not the SSH Port is open": "SSH 端口是否开放",
    // ---- markdown/bitburner.processinfo.md / bitburner.runningscript.md ----
    "Script's arguments": "脚本的参数",
    "Script name.": "脚本名称。",
    "Process ID": "进程 ID",
    "Whether this process is excluded from saves": "该进程是否被排除在存档之外",
    "Number of threads script is running with": "脚本运行时使用的线程数",
    "Arguments the script was called with": "调用脚本时传入的参数",
    "The dynamic RAM usage of (one thread of) this script instance. Does not affect overall RAM consumption (ramUsage is for that), but rather shows how much of the reserved RAM is currently in use via all the ns functions the script has called. Initially 1.6GB, this increases as new functions are called.": "该脚本实例（单线程）的动态 RAM 用量。它不影响总体 RAM 消耗（那是 ramUsage 的职责），只显示预留 RAM 中已被脚本调用过的各 ns 函数占用的部分；初始为 1.6GB，随新函数调用而增长。",
    "Only set for scripts that are still running.": "仅对仍在运行的脚本设置。",
    "Filename of the script": "脚本的文件名",
    "Total amount of hacking experience earned from this script when offline": "离线期间该脚本获得的骇客经验总量",
    "Total amount of money made by this script when offline": "离线期间该脚本赚取的金钱总量",
    "Number of seconds that the script has been running offline": "该脚本离线运行的秒数",
    "Total amount of hacking experience earned from this script when online": "在线期间该脚本获得的骇客经验总量",
    "Total amount of money made by this script when online": "在线期间该脚本赚取的金钱总量",
    "Number of seconds that this script has been running online": "该脚本在线运行的秒数",
    "Process ID of the parent process.": "父进程的进程 ID。",
    "If this script was started by another script, this will be the PID of that script. If this script was started directly through the terminal, the value will be 0.": "若本脚本由另一脚本启动，该值为那个脚本的 PID；若直接经终端启动，则为 0。",
    "A Process ID unique to this script across all hosts. Must be an integer starting from 1 for the first process spawned at game launch and incrementing from there. Note that PIDs are not saved in the savegame and are regenerated at launch.": "该脚本在所有主机间唯一的进程 ID。游戏启动后创建的第一个进程为 1，其后依次递增。注意 PID 不存入存档，每次启动重新生成。",
    "How much RAM this script uses for ONE thread. Also known as \"static RAM usage,\" this value does not change once the script is started, unless you call ns.ramOverride().": "该脚本每线程占用的 RAM 量，即\"静态 RAM 用量\"；脚本启动后该值不再变化，除非调用 ns.ramOverride()。",
    "Hostname of the server on which this script runs": "该脚本运行所在服务器的主机名",
    "Properties of the tail window, or null if it is not shown": "tail 窗口的属性；未显示时为 null",
    "Whether this RunningScript is excluded from saves": "该 RunningScript 是否被排除在存档之外",
    "Number of threads that this script runs with": "该脚本运行所用的线程数",
    "The title, as shown in the script's log box. Defaults to the name + args, but can be changed by the user. If it is set to a React element (only by the user), that will not be persisted, and will be restored to default on load.": "脚本日志框中显示的标题。默认为名称+参数，用户可修改；若被设置为 React 元素（仅用户可设），不会被持久化，载入时恢复默认。",
    // ---- markdown/bitburner.warehouseapi.md（Smart Supply→智能调拨，沿用 docs3） ----
    "Requires the Warehouse API upgrade from your corporation.": "需要为你的企业购买 Warehouse API 升级。",
    "Set material to bulk-buy.": "设置材料的批量购入。",
    "Set material buy data.": "设置材料的买入数据。",
    "Cancel material export.": "取消材料出口。",
    "Discontinue a product.": "停产一款产品。",
    "Set material export data.": "设置材料的出口数据。",
    "Get material data.": "获取材料数据。",
    "Get product data.": "获取产品数据。",
    "Get the cost to upgrade a warehouse to the next level.": "获取仓库升下一级的费用。",
    "Get warehouse data.": "获取仓库数据。",
    "Check if you have a warehouse in city.": "检查你是否在该城市拥有仓库。",
    "Limit material production.": "限制材料产量。",
    "Limit product production.": "限制产品产量。",
    "Create a new product.": "创建新产品。",
    "Purchase warehouse for a new city.": "为新城市购买仓库。",
    "Set material sell data.": "设置材料的出售数据。",
    "Set product sell data.": "设置产品的出售数据。",
    "Set Market-TA1 for a material.": "为材料设置 Market-TA1。",
    "Set Market-TA2 for a material.": "为材料设置 Market-TA2。",
    "Set Market-TA1 for a product.": "为产品设置 Market-TA1。",
    "Set Market-TA2 for a product.": "为产品设置 Market-TA2。",
    "Set smart supply.": "设置智能调拨。",
    "Set whether smart supply uses leftovers before buying.": "设置智能调拨是否先使用剩余库存再购买。",
    "Upgrade warehouse.": "升级仓库。",
    // ---- markdown/bitburner.officeapi.md ----
    "Requires the Office API upgrade from your corporation.": "需要为你的企业购买 Office API 升级。",
    "Buy tea for your employees.": "为员工买茶。",
    "Get the cost to hire AdVert.": "获取雇佣 AdVert 的费用。",
    "Get the number of times you have hired AdVert.": "获取你已雇佣 AdVert 的次数。",
    "Get data about an office.": "获取办公室数据。",
    "Get the cost to upgrade an office.": "获取办公室扩容的费用。",
    "Get the cost to unlock a research.": "获取解锁一项研究的费用。",
    "Check if you unlocked a research.": "检查你是否已解锁某项研究。",
    "Hire AdVert.": "雇佣 AdVert。",
    "Hire an employee.": "雇佣一名员工。",
    "Purchase a research.": "购买一项研究。",
    "Some research is only available for product industries. This function does not do anything if you purchase that research for a material industry.": "某些研究只对产品型行业开放；若为材料型行业购买这类研究，本函数不会做任何事。",
    "Set the job assignment for a job.": "设置某一职位的人力分配。",
    "Throw a party for your employees.": "为员工举办派对。",
    "Upgrade office size.": "扩大办公室规模。",
    // ---- markdown/bitburner.goanalysis.md ----
    "Removes all highlights from the board.": "移除棋盘上的全部高亮。",
    "Removes the highlight color and text from the specified node.": "移除指定节点的高亮颜色与文字。",
    "Takes an optional boardState argument; by default uses the current board state.": "可传入可选的 boardState 参数；默认使用当前棋盘状态。",
    "The data from getChains() can be used with the data from getBoardState() to see which player (or empty) each chain is": "getChains() 的数据可与 getBoardState() 的数据对照使用，以判断每条链归属哪方（或为空）。",
    "For example, a 5x5 board might look like this. There is a large chain #1 on the left side, smaller chains 2 and 3 on the right, and a large chain 0 taking up the center of the board.": "例如 5x5 棋盘可能如下：左侧是一条大链 #1，右侧是较小的链 2 与 3，中央由大链 0 占据。",
    "Returns 'X' for black, 'O' for white, or '?' for each empty point to indicate which player controls that empty point. If no single player fully encircles the empty space, it is shown as contested with '?'. \"#\" are dead nodes that are not part of the subnet.": "对每个空点返回 'X'（黑方）、'O'（白方）或 '?'，表明该空点由哪方控制。若无单一玩家完全包围该空域，则标为争夺中的 '?'。\"#\" 是不属于子网的死节点。",
    "Filled points of any color are indicated with '.'": "任何颜色已落子的点以 '.' 表示。",
    "In this example, white encircles some space in the top-left, black encircles some in the top-right, and between their routers is contested space in the center:": "下例中白方在左上围出一片空间，黑方在右上围出一片，两者路由节点之间是中央的争夺区：",
    "Returns a number for each point, representing how many open nodes its network/chain is connected to. Empty nodes and dead nodes are shown as -1 liberties.": "为每个点返回一个数字，表示其网络/链连接着多少个开放节点。空点与死节点显示为 -1 口气。",
    "For example, a 5x5 board might look like this. The chain in the top-left touches 5 total empty nodes, and the one in the center touches four. The group in the bottom-right only has one liberty; it is in danger of being captured!": "例如 5x5 棋盘可能如下：左上的链共接触 5 个空点，中央的链接触 4 个；右下的棋块只剩一口气，随时可能被吃！",
    "Displays the game history, captured nodes, and gained bonuses for each opponent you have played against.": "显示你对阵过的每个对手的对局历史、被吃节点数与获得的加成。",
    "The details are keyed by opponent name, in this structure:": "明细以对手名为键，结构如下：",
    "Shows if each point on the board is a valid move for the player. By default, analyzes the current board state. Takes an optional boardState (and an optional prior-move boardState, if desired) to analyze a custom board.": "显示棋盘上各点对该玩家是否为合法落点；默认分析当前棋盘状态，也可传入可选的 boardState（及可选的上一手 boardState）分析自定义棋盘。",
    "The true/false validity of each move can be retrieved via the X and Y coordinates of the move.": "每一手的合法性（true/false）可按落子坐标 X、Y 读取。",
    "Also note that, when given a custom board state, only one prior move can be analyzed. This means that the superko rules (no duplicate board states in the full game history) is not supported; you will have to implement your own analysis for that.": "另请注意：传入自定义棋盘状态时只能分析一手之前的局面，因而无法支持全局同形（superko，整局历史中棋盘状态不得重复）规则——这需要你自己实现分析。",
    "Adds a colored circle indicator to the specified point. These indicators are removed once a move is played.": "在指定点添加彩色圆圈指示；一旦落子这些指示即被移除。",
    "Reset all win/loss and winstreak records for the No AI opponent.": "重置 No AI 对手的全部胜负与连胜记录。",
    "Starts a new game against the \"No AI\" opponent, and sets the initial board size, pieces, and offline nodes to the given board state. \"X\" represent black pieces, \"O\" white, and \".\" empty points. \"#\" are dead nodes that are not part of the subnet.": "开始一局对阵 \"No AI\" 对手的新游戏，并把初始棋盘大小、棋子与离线节点设为给定的棋盘状态。\"X\" 代表黑子，\"O\" 代表白子，\".\" 为空点，\"#\" 为不属于子网的死节点。",
    // ---- markdown/bitburner.gocheat.md ----
    "Attempts to destroy an empty node, leaving an offline dead space that does not count as territory or provide open node access to adjacent routers.": "尝试摧毁一个空点，留下一个离线死区：既不计入地盘，也不为相邻路由节点提供开放节点。",
    "Success chance can be seen via ns.go.getCheatSuccessChance()": "成功概率可用 ns.go.getCheatSuccessChance() 查看",
    "Warning: if you fail to play a cheat move, your turn will be skipped. After your first cheat attempt, if you fail, there is a small (~10%) chance you will instantly be ejected from the subnet.": "警告：作弊着法一旦失败，你的回合将被跳过。首次作弊尝试之后，若再失败，还有约 10% 的小概率被立即逐出子网。",
    "Returns the number of times you've attempted to cheat in the current game.": "返回本局中你已尝试作弊的次数。",
    "Returns your chance of successfully playing one of the special moves in the ns.go.cheat API. Scales up with your crime success rate stat. Scales down with the number of times you've attempted to cheat in the current game.": "返回你成功使出 ns.go.cheat API 特殊着法的概率：随你的犯罪成功率提升，随本局已尝试作弊的次数下降。",
    "Attempts to place two routers at once on empty nodes. Note that this ignores other move restrictions, so you can suicide your own routers if they have no access to empty ports and do not capture any enemy routers.": "尝试同时在两个空点放置路由节点。注意这会绕过其他着法限制——若自家路由既没有气又吃不掉任何敌方路由，就会自杀。",
    "Attempts to remove an existing router, leaving an empty node behind.": "尝试移除一个已存在的路由节点，留下一个空点。",
    "Attempts to repair an offline node, leaving an empty playable node behind.": "尝试修复离线节点，使其恢复为空的可落子点。",
    // ---- markdown/bitburner.singularity.installAugmentations / b1tflum3 ----
    "RAM cost: 5 GB * 16/4/1": "RAM 费用：5 GB × 16/4/1",
    "This function will automatically install your Augmentations, resetting the game as usual. If you do not own any queued Augmentations then the game will not reset.": "本函数会自动安装你已购买的义体，并像通常那样重置游戏。若没有排队待安装的义体，游戏不会重置。",
    "BN number to jump to": "要跳往的 BN 编号",
    "RAM cost: 16 GB * 16/4/1": "RAM 费用：16 GB × 16/4/1",
    "RAM cost: 32 GB * 16/4/1": "RAM 费用：32 GB × 16/4/1",
    "You must have the special augment installed and the required hacking level OR Completed the final black op.": "你必须已安装那个特殊义体并达到所需骇客等级，或者已完成最终黑色行动。",
    // ---- markdown/bitburner.singularity.workForFaction.md ----
    "Name of faction to work for.": "要为其工作的派系名称。",
    "Type of work to perform for the faction.": "为该派系从事的工作类型。",
    "True if the player starts working, and false otherwise.": "玩家成功开始工作返回 true，否则返回 false。",
    "RAM cost: 3 GB * 16/4/1": "RAM 费用：3 GB × 16/4/1",
    "This function will set you to start working for the specified faction. You must be a member of the faction and that faction must have the specified work type, or else this function will fail. If you are already in the middle of some “working” action (such as working for a company, training at a gym, or creating a program), then running this function will cancel that action.": "本函数会让你开始为指定派系工作：你必须是该派系成员，且该派系须有指定工作类型，否则会失败。若你正在进行某种“工作类”行为（为公司工作、健身房训练、创建程序等），运行本函数会取消该行为。",
    "This function will return true if you successfully start working for the specified faction, and false otherwise.": "成功开始为指定派系工作时，本函数返回 true，否则返回 false。",
    // ---- markdown/bitburner.singularity.softReset / purchaseAugmentation ----
    "This function will perform a reset even if you don’t have any augmentation installed.": "即使尚未安装任何义体，本函数也会执行重置。",
    "Name of faction to purchase Augmentation from.": "从中购买义体的派系名称。",
    "Name of Augmentation to purchase.": "要购买的义体名称。",
    "True if the Augmentation is successfully purchased, and false otherwise.": "成功购买该义体返回 true，否则返回 false。",
    "This function will try to purchase the specified Augmentation through the given Faction.": "本函数会尝试经由指定派系购买该义体。",
    // ---- [exact-append] ----
  });

  BitburnerZH.frag({
    // ---- markdown/bitburner.ns.sleep.md / bitburner.ns.asleep.md ----
    " Number of milliseconds to sleep. Default to 0.": " sleep 的毫秒数，默认为 0。",
    "Note that the actual delay may be longer than intended. For more information, please check ": "注意实际延时长于预期也不罕见，详情见 ",
    // ---- markdown/bitburner.ns.spawn.md ----
    " object. Threads defaults to 1 and spawnDelay defaults to 10,000 ms.": " 对象；线程数默认为 1，spawnDelay 默认为 10000 毫秒。",
    // ---- markdown/bitburner.ns.run.md ----
    "The second argument is either a thread count, or a ": "第二个参数是线程数，或一个 ",
    " object that can also specify the number of threads (among other things).": " 对象（后者还能指定线程数等选项）。",
    // ---- markdown/bitburner.ns.kill.md / kill_1 / killall / tprint ----
    "See ": "参见 ",
    "Kills the script with the provided PID. PIDs are unique across all hosts. To instead kill a script using its filename, host, and args, see ": "击杀指定 PID 的脚本。PID 在所有主机间唯一；若想按文件名、主机与参数击杀，请见 ",
    "Kills the script(s) with the provided filename, running on the specified host with the specified args. To instead kill a script using its PID, see ": "按文件名（位于指定主机、带指定参数）击杀匹配的脚本；若想按 PID 击杀，请见 ",
    " Hostname/IP where the script to kill is running. Defaults to the current server.": " 要击杀的脚本所在服务器的主机名/IP；默认为当前服务器。",
    " Hostname/IP of the server on which to kill all scripts. Optional. Defaults to current server if not provided.": " 要清空脚本的服务器的主机名/IP。可选；未提供时默认为当前服务器。",
    " Skips the script that calls this function": "：跳过发起调用的脚本本身",
    " for how to add color to your printed strings.": "，了解如何为打印出的字符串添加颜色。",
    // ---- markdown/bitburner.ns.writePort.md 备注（含行内 code 拆分） ----
    "There is a limit on the maximum number of ports, but you won't reach that limit in normal situations. If you do, it usually means that there is a bug in your script that leaks port data. A port is freed when it does not have any data in its underlying queue. ": "端口数量有上限，正常使用不会触及；若触及，通常说明脚本泄漏了端口数据。当端口的底层队列中没有数据时，端口即被释放。",
    " deletes all data on a port. ": " 会清空该端口的全部数据；",
    " reads the first element in the port's queue, then removes it from the queue. Ports are shared across all hosts and contents are reset on game restart.": " 会读取端口队列的第一个元素并将其移出队列。端口在所有主机间共享，游戏重启时内容会被重置。",
    // ---- markdown/bitburner.ns.write / scan ----
    " Data to write.": " 要写入的数据。",
    " Defines the write mode.": " 定义写入模式。",
    "Get the list of hostnames or IP addresses connected to a server. This function does not return darknet servers (e.g., darkweb). Use ": "获取与某服务器相连的主机名或 IP 地址列表。本函数不会返回暗网服务器（如 darkweb）。要列出暗网服务器请使用 ",
    " if you want to list darknet servers.": "。",
    " Optional. Hostname/IP of the server to scan, default to current server.": " 可选。要扫描的服务器的主机名/IP，默认为当前服务器。",
    " Optional. Controls whether the function returns IPs.": " 可选。控制本函数是否返回 IP 地址。",
    // ---- markdown/bitburner.server.md（(Optional) 之后的描述节点） ----
    " Flag indicating whether this server has a backdoor installed by a player": " 标志：该服务器是否已被玩家植入后门",
    " Server's initial server security level at creation.": " 服务器创建时的初始安全等级。",
    " Server Security Level": " 服务器安全等级",
    " Minimum server security level that this server can be weakened to": " 该服务器可被削弱到的最低安全等级",
    " How much money currently resides on the server and can be hacked": " 服务器上当前存在、可被骇取的金额",
    " Maximum amount of money that this server can hold": " 该服务器可容纳的最大金额",
    " Number of open ports required in order to gain admin/root access": " 获得 admin/root 权限所需的开放端口数",
    " How many ports are currently opened on the server": " 服务器当前已开放的端口数",
    " Flag indicating whether this is a server owned by the player (e.g., home, cloud servers, hacknet servers)": " 标志：这是否为玩家拥有的服务器（如 home、云服务器、Hacknet 服务器）",
    " Hacking level required to hack this server": " 骇入该服务器所需的骇客等级",
    " Growth effectiveness statistic. Higher values produce more growth with ns.grow()": " 生长效能属性；数值越高，ns.grow() 的生长效果越强",
    // ---- markdown/bitburner.runningscript.md（logs 单元格含行内 code） ----
    "Script logs as an array. The newest log entries are at the bottom. Timestamps, if enabled, are placed inside ": "脚本日志数组，最新条目在底部；若启用时间戳，会加在每行开头的 ",
    " at the start of each line.": " 内。",
    // ---- markdown/bitburner.goanalysis.md（getChains/getValidMoves 单元格含行内 code） ----
    "Returns an ID for each point. All points that share an ID are part of the same network (or \"chain\"). Empty points are also given chain IDs to represent continuous empty space. Dead nodes are given the value ": "为每个点返回一个 ID：共享同一 ID 的点属于同一网络（即\"链\"）。空点也会被赋予链 ID 以表示连片空域。死节点的取值为 ",
    "The current valid moves for white can also be seen by simply calling ": "白方当前的合法落点，也可直接调用 ",
    // ---- markdown/bitburner.singularity.installAugmentations / b1tflum3 ----
    " This is a script that will automatically be run after Augmentations are installed (after the reset). This script will be run with no arguments and 1 thread. It must be located on your home computer.": " 是义体安装完成（重置之后）会自动运行的脚本：以 0 参数、1 线程运行，且必须位于你的家用计算机上。",
    " Name of the script to launch in the next BN.": " 要在下一个 BN 中启动的脚本名称。",
    " BitNode options for the next BN.": " 下一个 BN 的 BitNode 选项。",
    " Acquire player focus on this work operation. Optional. Defaults to true.": " 将玩家专注投入该工作。可选；默认为 true。",
    // ---- [frag-append] ----
  });
  BitburnerZH.patterns([]);
})();

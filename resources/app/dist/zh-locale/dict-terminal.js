/* Bitburner 汉化字典 —— 终端（src/Terminal/*，v3.0.1）
 * 覆盖：help 全部文本、终端命令输出/错误、终端 UI、暗网 buy、服务器购买对话框文本。
 * key 均为游戏内英文原文（引擎会把空白折叠+trim 后查表）。
 * 命令名/文件名/程序名/主机名不翻译，模板行用 patterns() 捕获组保留。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  /* ==================================================================
   * HelpText.ts —— help（无参数）命令总览列表，逐行打印
   * ================================================================== */
  BitburnerZH.exact({
    "Type 'help name' to learn more about the command": "输入 'help 命令名' 可了解更多关于该命令的信息",
    "alias [-g] [name=\"value\"] Create or display Terminal aliases": "alias [-g] [name=\"value\"] 创建或显示终端别名",
    "analyze Get information about the current machine": "analyze 获取当前机器的信息",
    "backdoor Install a backdoor on the current machine": "backdoor 在当前机器上安装后门",
    "buy [-l/-a/program] Purchase a program through the Dark Web": "buy [-l/-a/program] 通过暗网购买程序",
    "cat [file] Display the contents of a file": "cat [file] 显示文件内容",
    "cd [dir] Change to a new directory": "cd [dir] 切换到一个新目录",
    "changelog Display changelog": "changelog 显示更新日志",
    "check [script] [args...] Print a script's logs to Terminal": "check [script] [args...] 在终端打印脚本日志",
    "clear Clear all text on the terminal": "clear 清除终端上的所有文本",
    "cls See 'clear' command": "cls 参见 'clear' 命令",
    "connect [hostname] Connects to a remote server": "connect [hostname] 连接到远程服务器",
    "cp [src] [dest] Copy a file": "cp [src] [dest] 复制文件",
    "download [script/text file] Downloads scripts or text files to your computer": "download [script/text file] 下载脚本或文本文件到你的电脑",
    "upload [dir] Upload scripts or text files from your computer": "upload [dir] 从你的电脑上传脚本或文本文件",
    "expr [math expression] Evaluate a mathematical expression": "expr [math expression] 计算数学表达式",
    "free Check the machine's memory (RAM) usage": "free 查看机器的内存（RAM）使用情况",
    "grep [opts]... pattern [file]... Search for PATTERN (string/regular expression) in each FILE and print results to terminal": "grep [opts]... pattern [file]... 在每个文件中搜索 PATTERN（字符串/正则表达式）并将结果打印到终端",
    "grow Spoof money in a servers bank account, increasing the amount available.": "grow 伪造服务器银行账户中的资金，增加可用金额。",
    "hack Hack the current machine": "hack 骇入当前机器",
    "help [command] Display this help text, or the help text for a command": "help [command] 显示此帮助文本，或某个命令的帮助文本",
    "history [-c] Display the terminal history": "history [-c] 显示终端历史记录",
    "home Connect to home computer": "home 连接到 home 电脑",
    "hostname Displays the hostname of the machine": "hostname 显示机器的主机名",
    "ipaddr Displays the IP address of the machine": "ipaddr 显示机器的 IP 地址",
    "kill [script/pid] [args...] Stops the specified script on the current server": "kill [script/pid] [args...] 终止当前服务器上指定的脚本",
    "killall Stops all running scripts on the current machine": "killall 停止当前机器上所有运行中的脚本",
    "ls [dir] [-l] [-h] [-g pattern] Displays all files on the machine": "ls [dir] [-l] [-h] [-g pattern] 显示机器上的所有文件",
    "lscpu Displays the number of CPU cores on the machine": "lscpu 显示机器上的 CPU 核心数",
    "mem [script] [-t n] Displays the amount of RAM required to run the script": "mem [script] [-t n] 显示运行脚本所需的 RAM",
    "mv [src] [dest] Move/rename a text or script file": "mv [src] [dest] 移动/重命名文本或脚本文件",
    "nano [files...] Text editor - Open up and edit one or more scripts or text files": "nano [files...] 文本编辑器 - 打开并编辑一个或多个脚本或文本文件",
    "ps Display all scripts that are currently running": "ps 显示当前所有运行中的脚本",
    "rm [OPTIONS]... [FILE]... Delete a file from the server": "rm [OPTIONS]... [FILE]... 从服务器删除文件",
    "run [script] [-t n] [--tail] Run a program, a script, or a coding contract": "run [script] [-t n] [--tail] 运行程序、脚本或编程契约",
    "scan Prints all immediately-available network connections": "scan 打印所有当前可用的网络连接",
    "scan-analyze [d] [-a] Prints info for all servers up to d nodes away": "scan-analyze [d] [-a] 打印 d 跳以内所有服务器的信息",
    "scp [files...] [server] Copies scripts, text files, or .lit files to a destination server": "scp [files...] [server] 将脚本、文本文件或 .lit 文件复制到目标服务器",
    "sudov Shows whether you have root access on this computer": "sudov 显示你是否拥有此计算机的 root 权限",
    "tail [script/pid] [args...] Displays dynamic logs for the specified script": "tail [script/pid] [args...] 显示指定脚本的动态日志",
    "top Displays all running scripts and their RAM usage": "top 显示所有运行中的脚本及其 RAM 用量",
    "unalias [alias name] Deletes the specified alias": "unalias [alias name] 删除指定别名",
    "vim [files...] Text editor - Open up and edit one or more scripts or text files in vim mode": "vim [files...] 文本编辑器 - 以 vim 模式打开并编辑一个或多个脚本或文本文件",
    "weaken Reduce the security of the current machine": "weaken 降低当前机器的安全等级",
    "wget [url] [target file] Retrieves code/text from a web server": "wget [url] [target file] 从 Web 服务器获取代码/文本",
  });

  /* ==================================================================
   * HelpText.ts —— help <命令> 详细帮助（每行一个文本节点）
   * "Usage:" 用法行与命令示例保持英文；正文按行顺序对应翻译。
   * ================================================================== */
  BitburnerZH.exact({
    /* alias */
    "Create or display aliases. An alias enables a replacement of a word with another string.": "创建或显示别名。别名可以把一个词替换为另一个字符串。",
    "It can be used to abbreviate a commonly used command, or commonly used parts of a command. The NAME": "它可以用来缩写常用命令，或命令的常用部分。别名中的 NAME",
    "of an alias defines the word that will be replaced, while the VALUE defines what it will be replaced by. For example,": "定义要被替换的词，而 VALUE 定义要替换成的内容。例如，",
    "you could create the alias 'nuke' for the Terminal command 'run NUKE.exe' using the following:": "你可以用下面的命令为终端命令 'run NUKE.exe' 创建别名 'nuke'：",
    "Then, to run the NUKE.exe program you would just have to enter 'nuke' in Terminal rather than the full command.": "之后要运行 NUKE.exe 程序，只需在终端输入 'nuke'，而不必输入完整命令。",
    "It is important to note that 'default' aliases will only be substituted for the first word of a Terminal command. For": "需要注意的是，\"默认\"别名只会替换终端命令的第一个词。",
    "example, if the following alias was set:": "例如，若设置了以下别名：",
    "and then you tried to run the following terminal command:": "然后你尝试运行以下终端命令：",
    "This would fail because the worm alias is not the first word of a Terminal command. To allow an alias to be substituted": "这会失败，因为 worm 别名不是终端命令的第一个词。要让别名可以被替换到",
    "anywhere in a Terminal command, rather than just the first word, you must set it to be a global alias using the -g flag:": "终端命令中的任意位置（而不只是第一个词），必须用 -g 标志将其设为全局别名：",
    "Now, the 'worm' alias will be substituted anytime it shows up as an individual word in a Terminal command.": "现在，只要 'worm' 作为独立的词出现在终端命令中就会被替换。",
    "Entering just the command 'alias' without any arguments prints the list of all defined aliases in the reusable form": "只输入 'alias' 命令且不带任何参数，会以可复用的",
    "'alias NAME=VALUE' on the Terminal.": "'alias NAME=VALUE' 格式在终端打印所有已定义别名的列表。",
    "The 'unalias' command can be used to remove aliases.": "可使用 'unalias' 命令删除别名。",
    "NOTE: The --all alias is reserved for removal.": "注意：--all 别名被保留用于删除操作。",
    /* analyze */
    "Prints details and statistics about the current server. The information that is printed includes basic": "打印当前服务器的详细信息和统计数据。打印的信息包括基本服务器信息，",
    "server details such as the hostname, whether the player has root access, what ports are opened/closed, and also": "如主机名、玩家是否拥有 root 权限、哪些端口已开启/关闭，以及",
    "hacking-related information such as an estimated chance to successfully hack, an estimate of how much money is": "与黑客相关的信息，例如成功骇入的估计概率、服务器上可用资金的估计，",
    "available on the server, etc.": "等等。",
    /* backdoor */
    "Installs a backdoor on the current server, which allows the player to connect to it from any": "在当前服务器上安装后门，使玩家可以从任何",
    "server. It may also grant a secret bonus, such as store discounts, depending on the server.": "服务器连接到它。根据服务器不同，还可能获得秘密加成，例如商店折扣。",
    "Requires root access to run.": "需要 root 权限才能运行。",
    /* buy */
    "Purchase a program through the Dark Web. Requires a TOR router to use.": "通过暗网购买程序。需要 TOR 路由器才能使用。",
    "If this command is ran with the '-l' flag, it will display a list of all programs that can be bought through the": "如果使用 '-l' 标志运行此命令，将显示可通过",
    "dark web to the Terminal, as well as their costs.": "暗网购买的所有程序列表及其价格。",
    "If this command is ran with the '-a' flag, it will attempt to purchase all unowned programs.": "如果使用 '-a' 标志运行此命令，将尝试购买所有未拥有的程序。",
    "Otherwise, the name of the program must be passed in as a parameter. This name is NOT case-sensitive.": "否则必须将程序名称作为参数传入。名称不区分大小写。",
    /* cat */
    "Display message (.msg), literature (.lit), script (.js, .jsx, .ts, .tsx), or text (.txt, .json, .css) files. Examples:": "显示消息 (.msg)、文学 (.lit)、脚本 (.js, .jsx, .ts, .tsx) 或文本 (.txt, .json, .css) 文件。示例：",
    /* cd */
    "Change to the specified directory. You cannot change to a directory that does not exist. Examples:": "切换到指定目录。不能切换到不存在的目录。示例：",
    /* changelog */
    "Display changelog.": "显示更新日志。",
    /* check */
    "Print the logs of the script specified by the script name and arguments to the Terminal. Each argument must be separated by": "将脚本名与参数指定的脚本的日志打印到终端。每个参数必须用空格分隔。",
    "a space. Remember that a running script is uniquely": "记住，运行中的脚本由其",
    "identified both by its name and the arguments that are used to start it. So, if a script was ran with the following arguments:": "名称和用于启动它的参数共同唯一标识。因此，如果脚本是用以下参数运行的：",
    "Then to run the 'check' command on this script you would have to pass the same arguments in:": "那么要对这个脚本运行 'check' 命令，就必须传入相同的参数：",
    /* clear / cls */
    "Clear the Terminal screen, deleting all of the text. Note that this does not delete the user's command history, so using the up": "清除终端屏幕并删除所有文本。注意这不会删除用户的命令历史，因此使用上下",
    "and down arrow keys is still valid. Also note that this is permanent and there is no way to undo this. Synonymous with 'cls' command": "箭头键仍然有效。另请注意这是永久性的，无法撤销。与 'cls' 命令同义",
    "and down arrow keys is still valid. Also note that this is permanent and there is no way to undo this. Synonymous with 'clear' command": "箭头键仍然有效。另请注意这是永久性的，无法撤销。与 'clear' 命令同义",
    /* connect */
    "Connect to a remote server. The hostname of the remote server must be given as the argument": "连接到远程服务器。远程服务器的主机名必须作为",
    "to this command. Note that only servers that are immediately adjacent to the current server in the network and the ones that have": "此命令的参数给出。注意，只有在网络中与当前服务器直接相邻，或已安装",
    "a backdoor installed can be connected to. To see which servers can be connected to, use the 'scan' command.": "后门的服务器才能连接。要查看可连接的服务器，请使用 'scan' 命令。",
    /* cp */
    "Copy a file on this server. To copy a file to another server use scp.": "在此服务器上复制文件。要将文件复制到另一台服务器，请使用 scp。",
    /* download */
    "Downloads a script or text file to your computer (like your real life computer).": "将脚本或文本文件下载到你的电脑（即你现实生活中的电脑）。",
    "You can also download all of your scripts/text files as a zip file using the following Terminal commands:": "你也可以用以下终端命令把所有脚本/文本文件下载为 zip 压缩包：",
    "Download all scripts and text files: download *": "下载所有脚本和文本文件：download *",
    "Download all JS scripts: download *.js": "下载所有 JS 脚本：download *.js",
    "Download all text files: download *.txt": "下载所有文本文件：download *.txt",
    /* upload */
    "Uploads a directory from your computer into the game.": "把电脑上的一个目录上传到游戏中。",
    /* expr */
    "Evaluate a simple mathematical expression. Supports native JavaScript operators:": "计算一个简单的数学表达式。支持 JavaScript 原生运算符：",
    "Except for the dot (\".\"), parentheses (\"(\" and \")\"), and the letters \"e\" and \"E\" (used for scientific notation),": "除小数点 (\".\")、括号 (\"(\" 和 \")\")、字母 \"e\" 和 \"E\"（用于科学计数法）外，",
    "most non-digit characters are not allowed and will be removed from the input.": "大多数非数字字符都不被允许，并会从输入中被移除。",
    "Some edge cases may need to be enclosed in quotes to evaluate correctly.": "某些边缘情况可能需要用引号包裹才能正确计算。",
    /* free */
    "Displays the memory usage on the current machine. Print the amount of RAM that is available on the current server as well as": "显示当前机器的内存使用情况。打印当前服务器上可用的 RAM",
    "how much of it is being used.": "以及已被使用的数量。",
    /* grep 帮助 */
    "Search for PATTERN in each FILE and print results to terminal.": "在每个文件中搜索 PATTERN 并将结果打印到终端。",
    "OPTIONS:": "选项：",
    "--help output this usage message and exit": "--help 输出此用法说明并退出",
    "Search control:": "搜索控制：",
    "-* --search-all search for PATTERN in each FILE on server. Ignores any FILE argument(s) passed": "-* --search-all 在服务器上每个文件中搜索 PATTERN。忽略传入的 FILE 参数",
    "-p --pipe-terminal search for PATTERN in terminal output. Ignores any FILE argument(s) passed": "-p --pipe-terminal 在终端输出中搜索 PATTERN。忽略传入的 FILE 参数",
    "Pattern selection and interpretation:": "模式选择与解释：",
    "-R, --regexp PATTERN is basic regular expression. PATTERN is a string by default": "-R, --regexp PATTERN 是基本正则表达式。默认情况下 PATTERN 为字符串",
    "Output control:": "输出控制：",
    "-m --max-count NUM stop after NUM selected lines": "-m --max-count NUM 选择 NUM 行后停止",
    "-H --with-filename print filename with output lines. Default when multiple FILE arguments passed": "-H --with-filename 在输出行前打印文件名。传入多个 FILE 参数时为默认",
    "-h --no-filename suppress printing file name with output lines. Default when one FILE argument passed. Overrides -H": "-h --no-filename 不在输出行前打印文件名。传入一个 FILE 参数时为默认。覆盖 -H",
    "-n --line-number print line number with output lines": "-n --line-number 在输出行前打印行号",
    "-q --quiet --silent suppress printing to terminal": "-q --quiet --silent 不打印到终端",
    "-O --output OUTFILE pipe output to text file. The following argument must be a valid text file (.txt, .json, .css). Does NOT overwrite by default": "-O --output OUTFILE 将输出写入文本文件。后随参数必须是有效的文本文件 (.txt, .json, .css)。默认不覆盖",
    "-f --allow-overwrite combine with [-O/--output] to allow overwriting provided output file": "-f --allow-overwrite 与 [-O/--output] 合用，允许覆盖指定的输出文件",
    "Context control:": "上下文控制：",
    "-B --before-context NUM print NUM lines of leading context": "-B --before-context NUM 打印前 NUM 行上下文",
    "-A --after-context NUM print NUM lines of trailing context": "-A --after-context NUM 打印后 NUM 行上下文",
    "-C --context NUM print NUM lines of output context": "-C --context NUM 打印 NUM 行输出上下文",
    "Miscellaneous:": "杂项：",
    "-V --verbose print PATTERN, count of matches and FILE(s) searched after regular output": "-V --verbose 在常规输出后打印 PATTERN、匹配数量与搜索过的文件",
    "-v --invert-match select non-matching lines": "-v --invert-match 选择不匹配的行",
    "Regular OPTIONs may be combined into one. Context, max-count and output OPTIONs must be separated. Example: grep test -VnH* -O output.txt -C 5": "常规 OPTION 可以合并为一个。上下文、max-count 和输出 OPTION 必须分开。示例：grep test -VnH* -O output.txt -C 5",
    "By default PATTERN is interpreted as a simple string.": "默认情况下 PATTERN 被解释为简单字符串。",
    "At least one FILE argument must be passed, or pass -*/--search-all to search all files.": "必须至少传入一个 FILE 参数，或使用 -*/--search-all 搜索所有文件。",
    "The argument immediately following -m, -O and -B/A/C will be interpreted as the parameter for that OPTION.": "紧跟在 -m、-O 和 -B/A/C 后面的参数将被解释为对应 OPTION 的参数。",
    "If encountering difficulties with argument parsing, consider explicitly passing a string as PATTERN. Example: grep -G \"(complex|regexp|\\w+)\" script.js": "若参数解析遇到困难，考虑显式地把字符串作为 PATTERN 传入。示例：grep -G \"(complex|regexp|\\w+)\" script.js",
    /* grow / hack / weaken 帮助 */
    "Spoof transactions in the current server. Increasing the money available by hacking. Requires root access.": "在当前服务器上伪造交易。通过骇入增加可用资金。需要 root 权限。",
    "For additional information please go to Documentation > Resources > NS API Documentation > Grow.": "更多信息请前往 文档 > 资源 > NS API 文档 > Grow。",
    "For additional information please go to Documentation > Resources > NS API Documentation > Hack.": "更多信息请前往 文档 > 资源 > NS API 文档 > Hack。",
    "For additional information please go to Documentation > Resources > NS API Documentation > Weaken.": "更多信息请前往 文档 > 资源 > NS API 文档 > Weaken。",
    /* help */
    "Display Terminal help information. Without arguments, 'help' prints a list of all valid Terminal commands and a brief": "显示终端帮助信息。不带参数时，'help' 会打印所有有效的终端命令列表及其",
    "description of their functionality. You can also pass the name of a Terminal command as an argument to 'help' to print": "简要功能说明。你也可以把某个终端命令名作为参数传给 'help'，以打印",
    "more detailed information about the Terminal command. Examples:": "关于该命令更详细的信息。示例：",
    /* history */
    "Without arguments, displays the terminal command history. To clear the history, pass in the '-c' argument.": "不带参数时显示终端命令历史。要清空历史，请传入 '-c' 参数。",
    /* home */
    "Connect to your home computer. This will work no matter what server you are currently connected to.": "连接到你的 home 电脑。无论你当前连接在哪台服务器上都可以使用。",
    /* hostname / ipaddr */
    "Prints the hostname of the current server": "打印当前服务器的主机名",
    "Prints the IP address of the current server": "打印当前服务器的 IP 地址",
    /* kill */
    "Kill the script specified by the script name and arguments OR by its PID.": "按脚本名与参数终止脚本，或按 PID 终止脚本。",
    "If you are killing the script using its filename and arguments, then each": "如果使用文件名和参数终止脚本，则每个",
    "argument must be separated by a space. Remember that a running script is": "参数必须用空格分隔。记住，运行中的脚本",
    "uniquely identified by both its name and the arguments that are used to start": "由其名称和用于启动它的参数共同唯一",
    "it. So, if a script was ran with the following arguments:": "标识。因此，如果脚本是用以下参数运行的：",
    "Then to kill this script the same arguments would have to be used:": "那么要终止这个脚本就必须使用相同的参数：",
    "If you are killing the script using its PID, then the PID argument must be numeric": "如果使用 PID 终止脚本，则 PID 参数必须是数字",
    /* killall */
    "Kills all scripts on the current server.": "终止当前服务器上的所有脚本。",
    /* ls */
    "The ls command, with no arguments, prints all files and directories on the current server's directory to the Terminal screen.": "不带参数的 ls 命令会把当前服务器目录中的所有文件和目录打印到终端屏幕。",
    "The files will be displayed in alphabetical order.": "文件将按字母顺序显示。",
    "The 'dir' optional parameter can be used to display files/directories in another directory.": "可选参数 'dir' 可用于显示另一个目录中的文件/目录。",
    "The '-l' optional parameter allows you to force each item onto a single line, displaying two columns for the script's RAM usage and filesize.": "可选参数 '-l' 会将每个条目显示在单独一行，并显示脚本 RAM 用量与文件大小两列。",
    "The '-h' optional parameter allows you to display the filesize from '-l' in human readable format (e.g. KB, MB, GB) instead of bytes.": "可选参数 '-h' 会以易读格式（如 KB、MB、GB）显示 '-l' 的文件大小，而非字节数。",
    "The '--grep pattern' optional parameter can be used to only display files whose filenames match the specified pattern.": "可选参数 '--grep pattern' 只显示文件名匹配指定模式的文件。",
    "List all files with the '.js' extension in the current directory:": "列出当前目录下所有带 '.js' 扩展名的文件：",
    "List all files with the '.js' extension in the root directory:": "列出根目录下所有带 '.js' 扩展名的文件：",
    "List all files with the word 'purchase' in the filename, in the 'scripts' directory:": "列出 'scripts' 目录下文件名包含 'purchase' 一词的所有文件：",
    /* lscpu */
    "Prints the number of CPU Cores the current server has": "打印当前服务器的 CPU 核心数",
    /* mem */
    "Displays the amount of RAM needed to run the specified script with a single thread. The command can also be used to print": "显示以单线程运行指定脚本所需的 RAM。此命令也可以用 '-t' 标志打印",
    "the amount of RAM needed to run a script with multiple threads using the '-t' flag. If the '-t' flag is specified, then": "以多线程运行脚本所需的 RAM。如果指定了 '-t' 标志，则",
    "an argument for the number of threads must be passed in afterwards. Examples:": "其后必须传入线程数参数。示例：",
    "The first example above will print the amount of RAM needed to run 'foo.js' with a single thread. The second example": "第一个示例会打印以单线程运行 'foo.js' 所需的 RAM。第二个示例",
    "above will print the amount of RAM needed to run 'foo.js' with 50 threads.": "会打印以 50 线程运行 'foo.js' 所需的 RAM。",
    /* mv */
    "Move the source file to the specified destination. This can also be used to rename files.": "将源文件移动到指定位置。此命令也可用于重命名文件。",
    "This command only works for scripts (.js, .jsx, .ts, .tsx) and text files (.txt, .json, .css). This command CANNOT be used to": "此命令只适用于脚本 (.js, .jsx, .ts, .tsx) 和文本文件 (.txt, .json, .css)。此命令不能用于",
    "convert to different file types": "转换成不同的文件类型",
    "Note that, unlike the Linux 'mv' command, the destination argument must be the": "注意，与 Linux 的 'mv' 命令不同，目标参数必须是",
    "full filepath.": "完整文件路径。",
    /* ps */
    "Print information about scripts currently running on the server.": "打印当前在服务器上运行的脚本的信息。",
    "-g, --grep <pattern> Filter running scripts by filename using a search pattern.": "-g, --grep <pattern> 使用搜索模式按文件名过滤运行中的脚本。",
    "If no options are provided, ps lists all running scripts.": "若未提供选项，ps 列出所有运行中的脚本。",
    /* rm */
    "Remove the FILE(s).": "删除文件。",
    "-f, --force Force removal of multiple files.": "-f, --force 强制删除多个文件。",
    "-r, -R, --recursive Remove directories and their contents recursively.": "-r, -R, --recursive 递归删除目录及其内容。",
    "--no-preserve-root Do not treat '/' specially.": "--no-preserve-root 不对 '/' 做特殊处理。",
    "By default, rm does not operate on directories. To remove entire directories, use the --recursive (-r or -R) option.": "默认情况下 rm 不处理目录。要删除整个目录，请使用 --recursive（-r 或 -R）选项。",
    "To remove a file whose name starts with a '-', for example '-foo.js', use one of these commands:": "要删除名称以 '-' 开头的文件，例如 '-foo.js'，请使用以下命令之一：",
    "Note that if you use rm to remove a file, the contents of the file will be lost. This is irreversible.": "注意，如果你用 rm 删除文件，文件内容将会丢失。这是不可逆的。",
    /* run */
    "Run a program, a script, or a coding contract.": "运行程序、脚本或编程契约。",
    "The '[-t num_threads]', '[--tail]', `[--ram-override ram_in_GBs]`, [--temporary], and '[args...]' arguments are": "其中 '[-t num_threads]'、'[--tail]'、`[--ram-override ram_in_GBs]`、[--temporary] 和 '[args...]' 参数",
    "only valid when running a script. The '-t' flag is used to indicate that the script should be run with the specified": "只在运行脚本时有效。'-t' 标志用于指定脚本运行时应使用的",
    "number of threads. If the flag is omitted, then the script will be run with a single thread by default. The": "线程数。若省略该标志，脚本默认以单线程运行。",
    "'--tail' flag is used to immediately open a tail window for the script being ran. The '--ram-override' flag is used": "'--tail' 标志用于立即为所运行的脚本打开 tail 窗口。'--ram-override' 标志用于",
    "to override the amount of ram (per thread) the script is ran with. If the script ends up using more than that": "覆盖脚本运行时（每线程）使用的 ram 量。如果脚本实际使用的 RAM 超过该",
    "amount of ram it will crash. The '--temporary' flag is used to indicate that the script should be excluded from the": "量，脚本将会崩溃。'--temporary' 标志用于将该脚本从存档数据中",
    "save data. You must specify [file name] after 'run' and before any flags. You can use the built-in flags or mix them": "排除。你必须在 'run' 之后、任何标志之前指定 [file name]。你可以使用内置标志，或将它们",
    "with your custom flags in any orders.": "与自定义标志以任意顺序混合使用。",
    "Note: 'ns.args' only contains custom flags, not built-in flags. You can use '--' to end special args processing, if": "注意：'ns.args' 只包含自定义标志，不包含内置标志。你可以用 '--' 结束特殊参数处理，",
    "you want to explicitly pass these built-in flags to your script. For example:": "以便显式地把这些内置标志传给脚本。例如：",
    "- 'run a.js -t 5': Run a.js with 5 threads. 'ns.args' is an empty array.": "- 'run a.js -t 5'：以 5 线程运行 a.js。'ns.args' 是空数组。",
    "- 'run a.js -- -t 10': Run a.js with 1 thread. 'ns.args' is an array: ['-t', 10].": "- 'run a.js -- -t 10'：以 1 线程运行 a.js。'ns.args' 是数组：['-t', 10]。",
    "[args...] represents a variable number of arguments that will be passed into the script. See the documentation": "[args...] 表示将被传入脚本的不定数量的参数。请参阅关于脚本",
    "about script arguments. Each specified argument must be separated by a space.": "参数的文档。每个指定的参数必须用空格分隔。",
    /* scan */
    "Prints all immediately-available network connection. This will print a list of all servers that you can currently connect": "打印所有当前可用的网络连接。这将列出你当前可以使用",
    "to using the 'connect' Terminal command.": "'connect' 终端命令连接的所有服务器。",
    /* scan-analyze */
    "Prints detailed information about all servers up to [depth] nodes away on the network. Calling": "打印网络中距当前节点 [depth] 跳以内所有服务器的详细信息。调用",
    "'scan-analyze 1' will display information for the same servers that are shown by the 'scan' Terminal": "'scan-analyze 1' 显示的信息与 'scan' 终端命令列出的服务器相同。",
    "command. This command also shows the relative paths to reach each server.": "此命令还会显示到达每台服务器的相对路径。",
    "By default, the maximum depth that can be specified for 'scan-analyze' is 3. However, once you have": "默认情况下 'scan-analyze' 可指定的最大深度为 3。但一旦你拥有",
    "the DeepscanV1.exe and DeepscanV2.exe programs, you can execute 'scan-analyze' with a depth up to": "DeepscanV1.exe 和 DeepscanV2.exe 程序后，'scan-analyze' 的深度最高可达",
    "5 and 10, respectively.": "5 和 10。",
    "The information 'scan-analyze' displays about each server includes whether or not you have root access to it,": "'scan-analyze' 显示的每台服务器信息包括你是否拥有其 root 权限、",
    "its required hacking level, the number of open ports required to run NUKE.exe on it, and how much RAM": "所需黑客等级、在其上运行 NUKE.exe 所需的开放端口数，以及它有多少",
    "it has.": " 拥有量。",
    "By default, this command will not display servers that you have purchased. However, you can pass in the": "默认情况下，此命令不会显示你购买的服务器。不过你可以在命令末尾传入",
    "-a flag at the end of the command if you would like to enable that.": "-a 标志来启用显示它们。",
    /* scp */
    "Copies the specified file(s) from the current server to the target server.": "将指定文件从当前服务器复制到目标服务器。",
    "This command only works for script files (.js, .jsx, .ts, .tsx), text files (.txt, .json, .css),": "此命令只适用于脚本文件 (.js, .jsx, .ts, .tsx)、文本文件 (.txt, .json, .css)",
    "and literature files (.lit).": "和文学文件 (.lit)。",
    "The second argument passed in must be the hostname or IP of the target server. Examples:": "传入的第二个参数必须是目标服务器的主机名或 IP。示例：",
    /* sudov */
    "Prints whether or not you have root access to the current machine": "打印你是否拥有当前机器的 root 权限",
    /* tail */
    "Displays dynamic logs for the script specified by the script name and arguments. Each argument must be separated": "显示脚本名与参数所指定脚本的动态日志。每个参数必须用空格分隔。",
    "by a space. Remember that a running script is uniquely identified by both its name and the arguments that were used": "记住，运行中的脚本由其名称和用于运行它的参数共同唯一标识。",
    "to run it. So, if a script was ran with the following arguments:": "因此，如果脚本是用以下参数运行的：",
    "Then in order to check its logs with 'tail' the same arguments must be used:": "那么要用 'tail' 查看其日志，就必须使用相同的参数：",
    /* top */
    "Prints a list of all scripts running on the current server as well as their thread count and how much": "打印当前服务器上所有运行中脚本的列表，以及它们的线程数和总",
    "RAM they are using in total.": "RAM 用量。",
    /* unalias */
    "Deletes the specified alias. Note that the double quotation marks are required.": "删除指定的别名。注意：必须使用双引号。",
    "The --all command will remove ALL aliases that you have set.": "--all 命令将移除你设置的所有别名。",
    "As an example, if an alias was declared using:": "例如，如果别名是这样声明的：",
    "Then it could be removed using:": "则可以用以下命令移除它：",
    "It is not necessary to differentiate between global and non-global aliases when using 'unalias'": "使用 'unalias' 时无需区分全局别名与非全局别名",
    /* weaken */
    "Reduces the security level of the current server. Decreasing the time it takes for all operations on this server.": "降低当前服务器的安全等级，从而缩短在该服务器上所有操作的耗时。",
    "Requires root access.": "需要 root 权限。",
    /* wget */
    "Retrieves data from a URL and downloads it to a file on the current server. The data can only": "从 URL 获取数据并下载到当前服务器的文件中。数据只能",
    "be downloaded to a script (.js, .jsx, .ts, .tsx) or a text file (.txt, .json, .css).": "下载到脚本 (.js, .jsx, .ts, .tsx) 或文本文件 (.txt, .json, .css)。",
    "If the file already exists, it will be overwritten by this command.": "如果文件已存在，将被此命令覆盖。",
    "Note that it will not be possible to download data from many websites because they do not allow": "注意，许多网站不允许",
    "cross-origin resource sharing (CORS). Example:": "跨域资源共享 (CORS)，因此无法从它们下载数据。示例：",
    /* 通用帮助行（多个命令共用） */
    "Examples:": "示例：",
    "Example:": "示例：",
    /* nano/vim 模板帮助（脚本编辑器） */
    "Opens up the specified file(s) in the Script Editor. Only scripts (.js, .jsx, .ts, .tsx)": "在脚本编辑器中打开指定文件。只有脚本 (.js, .jsx, .ts, .tsx)",
    "or text files (.txt, .json, .css) can be edited using the Script Editor. If a file does not exist, a new": "或文本文件 (.txt, .json, .css) 可以用脚本编辑器编辑。如果文件不存在，则会",
    "one will be created.": "创建一个新文件。",
  });

  /* ==================================================================
   * 静态命令输出与错误消息（exact，按源码文件归类）
   * ================================================================== */
  BitburnerZH.exact({
    /* Terminal.ts */
    "Analyzing system...": "正在分析系统……",
    "Cannot hack this kind of server": "无法骇入此类服务器",
    "Cannot grow this kind of server": "无法对此类服务器执行 grow",
    "Cannot weaken this kind of server": "无法对此类服务器执行 weaken",
    "Cannot backdoor this kind of server": "无法在此类服务器上安装后门",
    "No cache files found.": "未找到缓存文件。",
    "Cancelled": "已取消",
    "There's already a Coding Contract in Progress": "已经有一个正在进行的编程契约",
    "No such contract": "没有这个契约",
    "Contract no longer exists (Was it solved by a script?)": "契约已不存在（是否被脚本解决了？）",
    "Contract FAILED - Contract is now self-destructing": "编程契约失败 - 契约现已自毁",
    "Contract cancelled": "契约已取消",
    "Invalid server. Connection failed.": "无效的服务器。连接失败。",
    "Bad command. Please follow the tutorial or click 'Exit Tutorial' if you'd like to skip it.": "错误命令。请按照教程操作，或点击 'Exit Tutorial'（退出教程）以跳过教程。",
    "Command '1s' not found. Did you mean 'ls' with a lowercase L?": "未找到命令 '1s'。你是指小写字母 l 开头的 'ls' 吗？",
    "Wrong command! Try again!": "命令错误！再试一次！",
    "Please follow the tutorial or click 'Exit Tutorial' if you'd like to skip it": "请按照教程操作，或点击 'Exit Tutorial'（退出教程）以跳过教程",
    /* analyze 标签（YES/NO 行） */
    "Root Access: YES": "root 权限：有",
    "Root Access: NO": "root 权限：无",
    "Can run scripts on this host: YES": "可在此主机运行脚本：是",
    "Can run scripts on this host: NO": "可在此主机运行脚本：否",
    "Stasis link: YES": "静滞链接：是",
    "Stasis link: NO": "静滞链接：否",
    "Backdoor: YES": "后门：已安装",
    "Backdoor: NO": "后门：未安装",
    "SSH port: Open": "SSH 端口：已开启",
    "SSH port: Closed": "SSH 端口：已关闭",
    "FTP port: Open": "FTP 端口：已开启",
    "FTP port: Closed": "FTP 端口：已关闭",
    "SMTP port: Open": "SMTP 端口：已开启",
    "SMTP port: Closed": "SMTP 端口：已关闭",
    "HTTP port: Open": "HTTP 端口：已开启",
    "HTTP port: Closed": "HTTP 端口：已关闭",
    "SQL port: Open": "SQL 端口：已开启",
    "SQL port: Closed": "SQL 端口：已关闭",
    /* scan / top 表头 */
    "Hostname IP Root Access": "主机名 IP root 权限",
    "Script PID Threads RAM Usage": "脚本 PID 线程 RAM 用量",
    /* alias.ts */
    "--all is reserved for removal": "--all 为保留名称，仅用于删除操作",
    "Incorrect usage of alias command. Usage: alias [-g] [aliasname=\"value\"]": "alias 命令用法错误。用法：alias [-g] [aliasname=\"value\"]",
    /* analyze.ts */
    "Incorrect usage of analyze command. Usage: analyze": "analyze 命令用法错误。用法：analyze",
    /* backdoor.ts */
    "Incorrect usage of backdoor command. Usage: backdoor": "backdoor 命令用法错误。用法：backdoor",
    "Can only install a backdoor on normal servers": "只能在普通服务器上安装后门",
    "Cannot install a backdoor on your own machines! You are currently connected to your home PC or one of your cloud servers.": "不能在你自己的机器上安装后门！你当前连接到的是你的 home 电脑或某台云服务器。",
    "You do not have admin rights for this machine!": "你在此机器上没有管理员权限！",
    "Your hacking skill is not high enough to install a backdoor on this machine. Try analyzing the machine to determine the required hacking skill.": "你的黑客技能不足以在此机器上安装后门。可先分析该机器以确定所需的黑客技能。",
    "You have already installed a backdoor on this server. You can check the \"Backdoor\" status via the \"analyze\" command.": "你已经在此服务器上安装过后门。可通过 \"analyze\" 命令查看 \"Backdoor\"（后门）状态。",
    /* buy.ts */
    "You need to be able to connect to the Dark Web to use the \"buy\" command. (Maybe there's a TOR router you can buy somewhere)": "你需要能够连接到暗网才能使用 \"buy\" 命令。（也许某个地方有可以购买的 TOR 路由器）",
    "Incorrect number of arguments. Usage:": "参数数量错误。用法：",
    /* cat.ts */
    "Incorrect usage of cat command. Usage: cat [file]": "cat 命令用法错误。用法：cat [file]",
    "Invalid file extension. Filename must end with .msg, .lit, a script extension (.js, .jsx, .ts, .tsx) or a text extension (.txt, .json, .css)": "无效的文件扩展名。文件名必须以 .msg、.lit、脚本扩展名 (.js, .jsx, .ts, .tsx) 或文本扩展名 (.txt, .json, .css) 结尾",
    /* cd.ts */
    "Incorrect number of arguments. Usage: cd [dir]": "参数数量错误。用法：cd [dir]",
    /* check.ts */
    "Incorrect number of arguments. Usage: check [script] [arg1] [arg2]...": "参数数量错误。用法：check [script] [arg1] [arg2]...",
    /* connect.ts */
    "Incorrect usage of connect command. Usage: connect [hostname]": "connect 命令用法错误。用法：connect [hostname]",
    /* cp.ts */
    "Incorrect usage of cp command. Usage: cp [source filename] [destination]": "cp 命令用法错误。用法：cp [source filename] [destination]",
    "cp: Can only be performed on script and text files": "cp：只能对脚本和文本文件执行",
    /* download.ts */
    "Incorrect usage of download command. Usage: download [script/text file]": "download 命令用法错误。用法：download [script/text file]",
    "Can only download script and text files": "只能下载脚本和文本文件",
    /* expr.ts */
    "Incorrect usage of expr command. Usage: expr [math expression]": "expr 命令用法错误。用法：expr [math expression]",
    /* free.ts */
    "Incorrect usage of free command. Usage: free": "free 命令用法错误。用法：free",
    /* grep.ts 错误 */
    "grep argument error. Usage: grep [OPTION]... PATTERN [FILE]... [-O] [OUTPUT FILE] [-m -B/A/C] [NUM]": "grep 参数错误。用法：grep [OPTION]... PATTERN [FILE]... [-O] [OUTPUT FILE] [-m -B/A/C] [NUM]",
    "grep argument error: At least one FILE argument must be passed, or pass -*/--search-all to search all files on server": "grep 参数错误：必须至少传入一个 FILE 参数，或使用 -*/--search-all 搜索服务器上的所有文件",
    /* grow/hack/weaken.ts */
    "Incorrect usage of grow command. Usage: grow": "grow 命令用法错误。用法：grow",
    "Cannot grow your own machines!": "不能对你自己的机器执行 grow！",
    "Cannot grow this server.": "无法对此服务器执行 grow。",
    "Incorrect usage of hack command. Usage: hack": "hack 命令用法错误。用法：hack",
    "Cannot hack your own machines!": "不能对你自己的机器执行 hack！",
    "Cannot hack this server.": "无法骇入此服务器。",
    "Your hacking skill is not high enough to hack this machine. Try analyzing the machine to determine the required hacking skill": "你的黑客技能不足以骇入此机器。可先分析该机器以确定所需的黑客技能",
    "Incorrect usage of weaken command. Usage: weaken": "weaken 命令用法错误。用法：weaken",
    "Cannot weaken your own machines!": "不能对你自己的机器执行 weaken！",
    "Cannot weaken this server.": "无法对此服务器执行 weaken。",
    /* history.ts */
    "Incorrect usage of history command. usage: history [-c]": "history 命令用法错误。用法：history [-c]",
    /* help.ts */
    "Incorrect usage of help command. Usage: help": "help 命令用法错误。用法：help",
    /* home/hostname/ipaddr.ts */
    "Incorrect usage of home command. Usage: home": "home 命令用法错误。用法：home",
    "Incorrect usage of hostname command. Usage: hostname": "hostname 命令用法错误。用法：hostname",
    "Incorrect usage of hostname command. Usage: ipaddr": "hostname 命令用法错误。用法：ipaddr",
    /* kill.ts */
    "Incorrect usage of kill command. Usage: kill [pid] or kill [scriptname] [arg1] [arg2]...": "kill 命令用法错误。用法：kill [pid] 或 kill [scriptname] [arg1] [arg2]...",
    "Invalid file extension. Kill can only be used on scripts.": "无效的文件扩展名。kill 只能用于脚本。",
    "No such script is running. Nothing to kill": "没有脚本正在运行。无需终止",
    /* killall.ts */
    "Killing all running scripts": "正在终止所有运行中的脚本",
    /* ls.tsx */
    "Incorrect usage of ls command. Usage: ls [dir] [-l] [-h] [-g, --grep pattern]": "ls 命令用法错误。用法：ls [dir] [-l] [-h] [-g, --grep pattern]",
    /* mem.ts */
    "Incorrect usage of mem command. usage: mem [scriptname] [-t] [number threads]": "mem 命令用法错误。用法：mem [scriptname] [-t] [number threads]",
    "Invalid number of threads specified. Number of threads must be greater than 1": "指定的线程数无效。线程数必须大于 1",
    "mem failed. No such script exists!": "mem 失败。此脚本不存在！",
    "You might have to open & save this script to see the detailed RAM usage information.": "你可能需要打开并保存此脚本，才能查看详细的 RAM 用量信息。",
    /* mkdir.ts */
    "Directories do not exist in the Bitburner filesystem. They are simply part of the file path. For example, with \"/foo/bar.txt\", there is no actual \"/foo\" directory.": "Bitburner 文件系统中并不存在真正的目录，它们只是文件路径的一部分。例如，对于 \"/foo/bar.txt\"，实际上并没有 \"/foo\" 这个目录。",
    "Directories do not exist in the Bitburner filesystem. They are simply part of the file path.": "Bitburner 文件系统中并不存在真正的目录，它们只是文件路径的一部分。",
    "For example, with \"/foo/bar.txt\", there is no actual \"/foo\" directory.": "例如，对于 \"/foo/bar.txt\"，实际上并没有 \"/foo\" 这个目录。",
    /* mv.ts */
    "Incorrect number of arguments. Usage: mv [src] [dest]": "参数数量错误。用法：mv [src] [dest]",
    /* ps.ts */
    "Incorrect usage of ps command. Usage: ps [-g, --grep pattern]": "ps 命令用法错误。用法：ps [-g, --grep pattern]",
    /* rm.ts */
    "Incorrect usage of rm command. No arguments provided. Usage: rm [OPTION]... [FILE]...": "rm 命令用法错误。未提供参数。用法：rm [OPTION]... [FILE]...",
    "Incorrect usage of rm command. No targets provided. Usage: rm [OPTION]... [FILE]...": "rm 命令用法错误。未提供目标。用法：rm [OPTION]... [FILE]...",
    "You are trying to delete all files within the root directory. If this is intentional, use the --no-preserve-root flag": "你正要删除根目录下的所有文件。如果这是有意为之，请使用 --no-preserve-root 标志",
    "Uncaught error": "未捕获的错误",
    /* run.ts */
    "Invalid file extension. Only .js, .jsx, .ts, .tsx, .cct, and .exe files can be run.": "无效的文件扩展名。只有 .js, .jsx, .ts, .tsx, .cct 和 .exe 文件可以运行。",
    /* runScript.ts */
    "Invalid number of threads specified. Number of threads must be an integer greater than 0": "指定的线程数无效。线程数必须是大于 0 的整数",
    "Failed to start script": "启动脚本失败",
    /* scan.ts */
    "Incorrect usage of scan command. Usage: scan": "scan 命令用法错误。用法：scan",
    /* scananalyze.ts */
    "Incorrect usage of scan-analyze command. usage: scan-analyze [depth]": "scan-analyze 命令用法错误。用法：scan-analyze [depth]",
    "Incorrect usage of scan-analyze command. depth argument must be positive numeric": "scan-analyze 命令用法错误。depth 参数必须是正数",
    "You cannot scan-analyze with that high of a depth. Maximum depth is 3": "你无法进行这么深的 scan-analyze。最大深度为 3",
    "You cannot scan-analyze with that high of a depth. Maximum depth is 5": "你无法进行这么深的 scan-analyze。最大深度为 5",
    "You cannot scan-analyze with that high of a depth. Maximum depth is 10": "你无法进行这么深的 scan-analyze。最大深度为 10",
    /* scp.ts */
    "Incorrect usage of scp command. Usage: scp [source filename] [destination hostname]": "scp 命令用法错误。用法：scp [source filename] [destination hostname]",
    /* sudov.ts */
    "Incorrect number of arguments. Usage: sudov": "参数数量错误。用法：sudov",
    "You have ROOT access to this machine": "你拥有此机器的 ROOT 权限",
    "You do NOT have root access to this machine": "你没有此机器的 root 权限",
    /* tail.ts */
    "Incorrect number of arguments. Usage: tail [pid] or tail [scriptname] [arg1] [arg2]...": "参数数量错误。用法：tail [pid] 或 tail [scriptname] [arg1] [arg2]...",
    "Invalid file extension. Tail can only be used on scripts.": "无效的文件扩展名。tail 只能用于脚本。",
    /* top.ts */
    "Incorrect usage of top command. Usage: top": "top 命令用法错误。用法：top",
    /* unalias.ts */
    "Incorrect usage of unalias name. Usage: unalias [alias] or unalias --all": "unalias 命令用法错误。用法：unalias [alias] 或 unalias --all",
    /* upload.ts */
    "Incorrect usage of upload command. Usage: upload [dir]": "upload 命令用法错误。用法：upload [dir]",
    /* wget.ts */
    "Incorrect usage of wget command. Usage: wget [url] [target file]": "wget 命令用法错误。用法：wget [url] [target file]",
    "wget failed: Invalid target file. Target file must be a script file or a text file.": "wget 失败：目标文件无效。目标文件必须是脚本文件或文本文件。",
    /* common/editor.ts 与 deprecation.tsx */
    "Here are instructions": "这里有迁移说明",
    "to migrate your scripts to .js files instead.": "可将你的脚本迁移为 .js 文件。",
    /* ui/TerminalInput.tsx */
    "Possible autocomplete candidates:": "可能的自动补全候选项：",
    /* DarkWeb.tsx 与 DarkWebItems.ts（buy 输出） */
    "You are now connected to the dark web. From the dark web you can purchase illegal items. Use the 'buy -l' command to display a list of all the items you can buy. Use 'buy [item-name]' to purchase an item. Use 'buy -a' to purchase all unowned items. You can use the 'buy' command anywhere, not only when connecting to the 'darkweb' server.": "你现已连接到暗网。在暗网上你可以购买违禁物品。使用 'buy -l' 命令显示所有可购买物品的列表。使用 'buy [物品名]' 购买物品。使用 'buy -a' 购买所有未拥有的物品。你在任何地方都可以使用 'buy' 命令，不必非要连接到 'darkweb' 服务器。",
    "All available programs have been purchased already.": "所有可购买的程序均已购买。",
    "All programs have been purchased.": "所有程序均已购买。",
    "[OWNED]": "已拥有",
    "Opens up SSH Ports.": "开放 SSH 端口。",
    "Opens up FTP Ports.": "开放 FTP 端口。",
    "Opens up SMTP Ports.": "开放 SMTP 端口。",
    "Opens up HTTP Ports.": "开放 HTTP 端口。",
    "Opens up SQL Ports.": "开放 SQL 端口。",
    "Displays detailed server information.": "显示详细的服务器信息。",
    "Enables 'scan-analyze' with a depth up to 5.": "使 'scan-analyze' 的深度最高可达 5。",
    "Enables 'scan-analyze' with a depth up to 10.": "使 'scan-analyze' 的深度最高可达 10。",
    "Enables direct connect via 'scan-analyze'.": "允许通过 'scan-analyze' 直接连接。",
    "Unlock access to the Dark Net.": "解锁 Dark Net 访问权限。",
    "Unlock access to the formulas API.": "解锁 formulas API 访问权限。",
    /* ServerPurchases.ts（云服务器购买对话框） */
    "You don't have enough money to purchase this server!": "你的资金不足以购买此服务器！",
    "You must enter a hostname for your new server!": "你必须为新的服务器输入一个主机名！",
    "You do not have enough money to purchase additional RAM for your home computer": "你的资金不足以购买额外的 home 电脑 RAM",
    "You cannot upgrade your home computer RAM because it is at its maximum possible value": "你的 home 电脑 RAM 已达最大值，无法继续升级",
  });

  /* ==================================================================
   * 模板化输出（patterns，锚定整行；命令名/文件名/主机名经捕获组保留）
   * 注册顺序敏感：更具体的模式在前。
   * ================================================================== */
  BitburnerZH.patterns([
    /* ---- Terminal.ts：hack/grow/weaken/backdoor 完成消息 ---- */
    [/^Hack successful on '(.+)'! Gained (.+) and (.+) hacking exp$/, "对 $1 的骇入成功！获得 $2 和 $3 黑客经验"],
    [/^Failed to hack '(.+)'\. Gained (.+) hacking exp$/, "骇入 $1 失败。获得 $2 黑客经验"],
    [/^Security increased on '(.+)' from (.+) to (.+)$/, "$1 的安全等级从 $2 提升至 $3"],
    [/^Available money on '(.+)' grown by (.+)\. Gained (.+) hacking exp\.$/, "$1 上的可用资金增长了 $2。获得 $3 黑客经验。"],
    [/^Security decreased on '(.+)' by (.+) from (.+) to (.+) \(min: (.+)\) and Gained (.+) hacking exp\.$/, "$1 的安全等级降低了 $2，从 $3 降至 $4（最低 $5）。获得 $6 黑客经验。"],
    [/^Backdoor on '(.+)' successful!$/, "在 $1 上安装后门成功！"],
    /* ---- Terminal.ts：analyze 详情行 ---- */
    [/^Organization name: (.+)$/, "组织名称：$1"],
    [/^Root Access: YES, Required hacking skill: (\d+)$/, "root 权限：有，所需黑客技能：$1"],
    [/^Root Access: NO, Required hacking skill: (\d+)$/, "root 权限：无，所需黑客技能：$1"],
    [/^Can run scripts on this host: (YES|NO)$/, "可在此主机运行脚本：$1"],
    [/^RAM blocked by owner: (\S+)$/, "被所有者占用的 RAM：$1"],
    [/^RAM: (\S+)$/, "RAM：$1"],
    [/^Required hacking skill for hack\(\) and backdoor: (.+)$/, "hack() 与 backdoor 所需黑客技能：$1"],
    [/^Server security level: (.+)$/, "服务器安全等级：$1"],
    [/^Chance to hack: (.+)$/, "骇入成功率：$1"],
    [/^Time to hack: (.+)$/, "骇入耗时：$1"],
    [/^Total money available on server: (.+)$/, "服务器上可用资金总额：$1"],
    [/^Required number of open ports for NUKE: (\d+|N\/A)$/, "运行 NUKE 所需开放端口数：$1"],
    /* ---- Terminal.ts：scan-analyze 树 ---- */
    [/^Number of open ports required to NUKE: (\d+)$/, "运行 NUKE 所需开放端口数：$1"],
    /* ---- Terminal.ts：连接与命令解析 ---- */
    [/^Connected to (\S+)$/, "已连接到 $1"],
    [/^Cannot execute command \((.+)\) while an action is in progress$/, "有一个操作正在进行，无法执行命令 ($1)"],
    [/^(.+) is not a valid command\.$/, "$1 不是有效的命令。"],
    [/^Command (.+) not found\. Did you mean: (.+)\?$/, "未找到命令 $1。你是想找：$2？"],
    [/^Command (.+) not found\.$/, "未找到命令 $1。"],
    /* ---- Terminal.ts：编程契约 ---- */
    [/^Contract SUCCESS - (.+)$/, "编程契约成功 - $1"],
    [/^Contract FAILED - The answer is not in the right format for contract '(.+)'$/, "编程契约失败 - 答案的格式不符合契约类型 '$1' 的要求"],
    [/^Contract FAILED - (\d+) tries remaining$/, "编程契约失败 - 还剩 $1 次尝试机会"],
    [/^Contract FAILED - (.+)$/, "编程契约失败 - $1"],
    [/^Coding Contract solution was: (.+)$/, "该编程契约的解答是：$1"],
    /* ---- alias / unalias ---- */
    [/^Set global alias (.+)$/, "已设置全局别名 $1"],
    [/^Set alias (.+)$/, "已设置别名 $1"],
    [/^Removed alias (.+)$/, "已移除别名 $1"],
    [/^No such alias exists: (.+)$/, "不存在此别名：$1"],
    /* ---- cat / check / kill / tail ---- */
    [/^Invalid filename: (.+)$/, "无效文件名：$1"],
    [/^No file at path (.+)$/, "路径 $1 处没有文件"],
    [/^check: File extension must be one of (.+)$/, "check：文件扩展名必须是 $1 之一"],
    [/^No script named (.+) with args (.+) is running on the server$/, "服务器上没有名为 $1、参数为 $2 的脚本正在运行"],
    [/^No script named (.+) is running on the server$/, "服务器上没有名为 $1 的脚本正在运行"],
    [/^No script with PID (\d+) is running$/, "没有 PID 为 $1 的脚本正在运行"],
    [/^Killing script with PID (\d+)$/, "正在终止 PID 为 $1 的脚本"],
    [/^Failed to kill script with PID (\d+)\. No such script is running$/, "终止 PID 为 $1 的脚本失败。没有该脚本正在运行"],
    [/^Killing (.+) with pid (\d+)$/, "正在终止脚本 $1（pid $2）"],
    [/^\.\.\. killed (\d+) instances total$/, "……总共终止了 $1 个实例"],
    /* ---- cd / ls / 路径 ---- */
    [/^Could not resolve directory (.+)$/, "无法解析目录 $1"],
    [/^Directory (.+) does not exist\.$/, "目录 $1 不存在。"],
    [/^File is not on this server, connect to (\S+) and try again$/, "文件不在此服务器上，请连接到 $1 后重试"],
    /* ---- connect ---- */
    [/^Invalid hostname: '(.+)'$/, "无效主机名：'$1'"],
    [/^Cannot directly connect to (.+)\. Make sure the server is backdoored or adjacent to your current server$/, "无法直接连接到 $1。请确认该服务器已安装后门，或与当前服务器相邻"],
    /* ---- cp / mv / download ---- */
    [/^Invalid source filename: (.+)$/, "无效的源文件名：$1"],
    [/^Invalid source filename (.+)$/, "无效的源文件名 $1"],
    [/^Invalid destination filename: (.+)$/, "无效的目标文件名：$1"],
    [/^Could not resolve (.+) as a FilePath or Directory$/, "无法将 $1 解析为文件路径或目录"],
    [/^cp: Can only copy to script and text files \((.+) is invalid destination\)$/, "cp：只能复制到脚本和文本文件（$1 是无效的目标）"],
    [/^File (.+) copied to (.+)$/, "已将文件 $1 复制到 $2"],
    [/^File not found: (.+)$/, "找不到文件：$1"],
    [/^(.+) was overwritten\.$/, "$1 已被覆盖。"],
    [/^Cannot export scripts with pattern (.+) on (\S+)\. Error: (.+)$/, "无法在 $2 上导出匹配模式 $1 的脚本。错误：$3"],
    [/^Cannot compress scripts with pattern (.+) on (\S+)\. Error: (.+)$/, "无法压缩 $2 上匹配模式 $1 的脚本。错误：$3"],
    [/^Could not resolve path (.+)$/, "无法解析路径 $1"],
    [/^Source file (.+) does not exist$/, "源文件 $1 不存在"],
    [/^Could not remove source file (.+) from existing location\. If (.+) is a script, make sure that it is NOT running before trying to use 'mv' on it\.$/, "无法从原位置移除源文件 $1。如果 $2 是脚本，请在对其使用 'mv' 之前确保它没有在运行。"],
    [/^Moved (.+) to (.+)$/, "已将 $1 移动到 $2"],
    /* ---- expr / free ---- */
    [/^Could not evaluate expression: (.+)\. Error: (.+)\.$/, "无法计算表达式：$1。错误：$2。"],
    [/^Total: (\S+)$/, "总计：$1"],
    [/^Used: (\S+)( \(.+\))?$/, "已用：$1$2"],
    [/^Available: (\S+)$/, "可用：$1"],
    /* ---- grep ---- */
    [/^grep argument error: Invalid argument\(s\): (.+)$/, "grep 参数错误：无效的参数：$1"],
    [/^grep argument error: Incorrect (context|limit) argument \"(.+)\"\. Must be a number\. OPTIONS with additional parameters \(-O, -m, -B\/A\/C\) must be separated from other options$/, "grep 参数错误：$1 参数 \"$2\" 不正确。必须是数字。带附加参数的选项（-O、-m、-B/A/C）必须与其他选项分开"],
    [/^grep file output failed: Invalid output file \"(.+)\"\. Output file must not already exist\. Pass -f\/--allow-overwrite to overwrite\.$/, "grep 文件输出失败：输出文件 \"$1\" 无效。输出文件不能已存在。传入 -f/--allow-overwrite 以允许覆盖。"],
    [/^grep file output failed: Invalid output file \"(.+)\"\. Output file path must be a valid text file\. \(\.txt, \.json, \.css\)$/, "grep 文件输出失败：输出文件 \"$1\" 无效。输出文件路径必须是有效的文本文件 (.txt, .json, .css)"],
    [/^grep processing error: (.+)$/, "grep 处理错误：$1"],
    [/^Terminal output truncated to (\d+) lines \(Max terminal capacity\)$/, "终端输出已截断为 $1 行（终端容量上限）"],
    [/^(\d+)( INVERTED)? lines? matched against PATTERN \"(.*)\" in (\d+) lines, in (\d+) files:/, "在 $5 个文件的 $4 行中，$1$2 行匹配模式 \"$3\"："],
    [/^(\d+)( INVERTED)? lines? matched against PATTERN \"(.*)\" in (\d+) lines, piped from terminal$/, "在终端管道输出的 $4 行中，$1$2 行匹配模式 \"$3\"："],
    /* ---- help ---- */
    [/^No help topics match '(.+)'$/, "没有与 '$1' 匹配的帮助主题"],
    /* ---- mem / run / runScript / runProgram ---- */
    [/^This script requires (\S+) of RAM to run for (\d+) thread\(s\)$/, "此脚本以 $2 个线程运行需要 $1 的 RAM"],
    [/^Could not calculate ram usage for (.+)$/, "无法计算 $1 的 RAM 用量"],
    [/^(.+) is not a valid filepath\.$/, "$1 不是有效的文件路径。"],
    [/^Cannot run contract (.+) on (\S+)\. Error: (.+)\.$/, "无法在 $2 上运行契约 $1。错误：$3。"],
    [/^No such \(js, jsx, ts, tsx, script, cct, or exe\) file! \(Only finished programs that exist on your home computer or scripts on (\S+) can be run\)$/, "没有此（js、jsx、ts、tsx、script、cct 或 exe）文件！只有存在于你 home 电脑上的已完成程序，或 $1 上的脚本才能运行"],
    [/^Invalid arguments\. (.+)\.$/, "参数无效。$1。"],
    [/^Invalid ram override specified\. Ram override must be a number greater than (.+)$/, "指定的 ram override 无效。Ram override 必须是大于 $1 的数"],
    [/^Running script with (\d+) threads?, pid (\d+) and args: (.+)\.$/, "脚本已开始运行（$1 个线程，pid $2，参数：$3）。"],
    /* ---- rm ---- */
    [/^Incorrect usage of rm command\. To delete directories, use the -r flag\. Failing directory: (.+)$/, "rm 命令用法错误。要删除目录，请使用 -r 标志。失败的目录：$1"],
    [/^File does not exist: (.+)$/, "文件不存在：$1"],
    [/^Directory does not exist: (.+)$/, "目录不存在：$1"],
    [/^Failed to delete \"(.+)\"\. (.+)$/, "删除 \"$1\" 失败。$2"],
    [/^Deleted: (.+)$/, "已删除：$1"],
    /* ---- scp ---- */
    [/^Invalid destination server: (.+)$/, "无效的目标服务器：$1"],
    [/^Invalid file path: (.+)$/, "无效的文件路径：$1"],
    [/^scp failed: (.+) does not exist on server (\S+)$/, "scp 失败：$1 在服务器 $2 上不存在"],
    [/^scp failed: (.+) has invalid extension\. scp only works for scripts \(\.js, \.jsx, \.ts, \.tsx\), text files \(\.txt, \.json, \.css\), and literature files \(\.lit\)$/, "scp 失败：$1 的扩展名无效。scp 只适用于脚本 (.js, .jsx, .ts, .tsx)、文本文件 (.txt, .json, .css) 和文学文件 (.lit)"],
    [/^(.+) was already on (\S+), file skipped$/, "$1 已存在于 $2 上，文件已跳过"],
    [/^(.+) already existed on (\S+) and was overwritten$/, "$1 已存在于 $2 上并已被覆盖"],
    [/^(.+) copied to (\S+)$/, "$1 已复制到 $2"],
    /* ---- upload ---- */
    [/^Could not resolve (\S+) as a Directory$/, "无法将 $1 解析为目录"],
    [/^Starting to upload files to (\S+)$/, "开始向 $1 上传文件"],
    [/^Successfully uploaded files to (\S+)$/, "已成功上传文件到 $1"],
    [/^Failed to upload (.+)\. Error: (.+)$/, "上传 $1 失败。错误：$2"],
    [/^Error while uploading files\. Error: (.+)$/, "上传文件时出错。错误：$1"],
    /* ---- wget ---- */
    [/^wget failed\. HTTP code: (\d+)\.$/, "wget 失败。HTTP 状态码：$1。"],
    [/^wget successfully retrieved content and overwrote (\S+)$/, "wget 成功获取内容并覆盖了 $1"],
    [/^wget successfully retrieved content to new file (\S+)$/, "wget 成功获取内容并写入新文件 $1"],
    [/^wget failed: (.+)$/, "wget 失败：$1"],
    /* ---- nano / vim（editor.ts 与模板帮助） ---- */
    [/^Incorrect usage of (nano|vim) command\. Usage: (nano|vim) \[scriptname\]$/, "$1 命令用法错误。用法：$1 [scriptname]"],
    [/^No files matching (.+)$/, "没有匹配 $1 的文件"],
    [/^Invalid file path (.+)$/, "无效的文件路径 $1"],
    [/^(nano|vim): Only scripts or text files can be edited\. Invalid file type: (.+) \(Try using 'run'\)$/, "$1：只能编辑脚本或文本文件。无效的文件类型：$2（尝试使用 'run'）"],
    [/^(nano|vim): Only scripts or text files can be edited\. Invalid file type: (.+)$/, "$1：只能编辑脚本或文本文件。无效的文件类型：$2"],
    [/^If a glob is provided as the only argument, (nano|vim) can crawl directories and open all matching$/, "如果把通配符（glob）作为唯一参数提供，$1 可以遍历目录并打开所有匹配的"],
    [/^files at once\. (nano|vim) cannot create files using globs, so your scripts must already exist\.$/, "文件并一次全部打开。$1 不能使用通配符创建文件，因此你的脚本必须已经存在。"],
    /* ---- getTabCompletionPossibilities.ts ---- */
    [/^Cannot compile (\S+)\. Reason: (.+)$/, "无法编译 $1。原因：$2"],
    [/^The autocomplete function in (\S+) throws an error\. Reason: (.+)$/, "$1 中的 autocomplete 函数抛出了错误。原因：$2"],
    /* ---- DarkWeb（buy） ---- */
    [/^Unrecognized item: (.+)$/, "无法识别的物品：$1"],
    [/^You already have the (\S+) program$/, "你已经拥有 $1 程序"],
    [/^Not enough money to purchase (\S+)$/, "资金不足以购买 $1"],
    [/^You have purchased the (\S+) program\. The new program can be found on your home computer\.$/, "你已购买 $1 程序。新程序可在你的 home 电脑中找到。"],
    [/^Need (\S+) more to purchase (\S+)$/, "还需要 $1 才能购买 $2"],
    /* ---- lscpu ---- */
    [/^(\d+) Core\(s\)$/, "$1 个核心"],
    /* ---- changelog 对话框 ---- */
    [/^Most recent changelog info: (.+)$/, "最近一次更新日志信息：$1"],
    /* ---- ServerPurchases.ts（云服务器购买对话框） ---- */
    [/^You have reached the maximum limit of (\d+) cloud servers\. You cannot purchase any more\. You can delete some of your cloud servers using the cloud\.deleteServer\(\) Netscript function in a script$/, "你已达到 $1 台云服务器的数量上限，无法再购买更多。你可以在脚本中使用 cloud.deleteServer() Netscript 函数来删除部分云服务器。"],
    [/^'(.+)' is a reserved hostname, please try again\.$/, "'$1' 是保留的主机名，请再试一次。"],
    [/^Cloud server successfully purchased with hostname (\S+)$/, "云服务器购买成功，主机名为 $1"],
    /* ---- PromptManager 确认框（<pre> 内多行节点，引擎已支持逐行匹配） ---- */
    [/^Are you sure you want to delete (.+)\? This is irreversible\.$/, "你确定要删除 $1 吗？此操作不可逆。"],
    [/^Deleting:$/, "删除列表："],
    [/^Upload files to (.+)\?$/, "上传文件到 $1？"],
    [/^(\d+) files? will be overwritten:$/, "$1 个文件将被覆盖："],
    [/^(\d+) new files? will be created:$/, "将创建 $1 个新文件："],
    [/^(\d+) files? will be skipped due to prohibited file paths:$/, "$1 个文件因文件路径不合法而被跳过："],
    [/^Characters (.+) and whitespace are not allowed in file paths\.$/, "字符 $1 与空白符不允许出现在文件路径中。"],
    [/^Only file extensions (.+) are allowed\.$/, "仅允许以下文件扩展名：$1。"],
    [/^A file name must have at least one character before the extension\.$/, "文件名在扩展名之前至少要有一个字符。"],
  ]);
})();

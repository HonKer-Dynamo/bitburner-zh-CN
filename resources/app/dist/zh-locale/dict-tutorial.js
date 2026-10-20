/* Bitburner 汉化字典 —— 教程（InteractiveTutorial）与游戏文学（.lit）。
 * 覆盖：InteractiveTutorialRoot.tsx 全部 29 个步骤的文本节点（End 步为空）；
 *       Literatures.tsx 全部 .lit 正文与标题（The Secret War 正文为空）。
 * 不翻译：[home /]> 命令示例节点、CopyableText 脚本代码、.lit/.msg 文件名、
 *         主导航专名（Stats/Terminal/Active Scripts/City/Documentation/FAQ 等已由其它字典收录）、
 *         dict-names 已注册的公司/派系/城市插值节点（引擎在译文内外嵌替换）。
 * 术语：home 电脑、root 权限、骇入、Hacknet 节点、RAM、线程、n00dles、scan-analyze 等均保留既定译法/英文。 */
(function () {
  "use strict";
  if (!window.BitburnerZH) return;

  /* ================= 教程 InteractiveTutorial ================= */
  BitburnerZH.exact({
    /* Step: Start */
    "Welcome to Bitburner, a cyberpunk-themed incremental RPG! The game takes place in a dark, dystopian future... The year is 2077...": "欢迎来到 Bitburner——一款赛博朋克题材的放置类 RPG！故事发生在一个黑暗、反乌托邦的未来……现在是 2077 年……",
    "This tutorial will show you the basics of the game. You may skip the tutorial at any time.": "本教程将教你游戏的基础。你可以随时跳过教程。",
    "You can replay this tutorial by going to the Options tab and pressing \"Reset tutorial\".": "前往「选项」标签页并按下「重置教程」，即可重新播放本教程。",
    "You can also collapse this panel to temporarily hide this tutorial.": "你也可以折叠此面板，暂时隐藏教程。",
    /* Step: GoToCharacterPage / CharacterPage */
    "Let's start by heading to the Stats page. Click": "先来打开属性页面：点击",
    "on the main navigation menu (left-hand side of the screen)": "——就在屏幕左侧的主导航菜单里。",
    "shows a lot of important information about your progress, such as your skills, money, and bonuses.": "会显示许多关于你进度的重要信息，如技能、资金与各项加成。",
    /* Step: CharacterGoToTerminalPage / TerminalIntro */
    "Let's head to your computer's terminal by clicking": "接下来去你 home 电脑的终端：点击主导航菜单中的",
    "on the main navigation menu.": "即可打开终端。",
    "is used to interface with your home computer as well as all of the other machines around the world.": "用于与你的 home 电脑以及世界各地的其他机器打交道。",
    /* Step: TerminalHelp / TerminalLs */
    "Let's try it out. Start by entering": "来试一试。先输入",
    "(Don't forget to press Enter after typing the command)": "（输入命令后记得按 Enter）",
    "displays a list of all available Terminal commands, how to use them, and a description of what they do.": "会列出所有可用的终端命令、它们的用法以及功能说明。",
    "Let's try another command. Enter": "再试一条命令。输入",
    "( \"ls\" is short for \"list\" )": "（\"ls\" 是 \"list\" 的缩写）",
    /* Step: TerminalScan */
    "is a basic command that lists the files on the computer. Right now, it shows that you have a program called": "是一条基础命令，用于列出电脑上的文件。现在可以看到，你的电脑上有一个名为",
    "NUKE.exe on your computer. We'll get to what this does later.": "NUKE.exe 的程序。它的作用我们稍后再谈。",
    "Using your home computer's terminal, you can connect to other machines throughout the world. Let's do that now by first entering": "借助 home 电脑的终端，你能连接到世界各地的其他机器。现在就试试——先输入",
    /* Step: TerminalScanAnalyze1 */
    "shows all available network connections. In other words, it displays a list of all servers that can be connected to from your current machine. A server is identified by its hostname.": "会列出所有可用的网络连接。换言之，它显示的是从当前机器能够连上的所有服务器清单；服务器以主机名标识。",
    "That's great and all, but there's so many servers. Which one should you go to?": "很好，可服务器也太多了。该去哪一个呢？",
    "gives some more detailed information about servers on the network. Try it now!": "能给出网络上服务器的更详细信息。现在就试试！",
    /* Step: TerminalScanAnalyze2 */
    "shows more detailed information about each server that you can connect to (servers that are a distance of one node away).": "会显示每一台可直连服务器（相距一个节点）的更详细信息。",
    "It is also possible to run scan-analyze with a higher depth. Let's try a depth of two with the following command:": "scan-analyze 还可以带上更大的深度参数。用下面这条命令试试深度 2：",
    /* Step: TerminalConnect */
    "Now you can see information about all servers that are up to two nodes away, as well as figure out how to navigate to those servers through the network. You can only connect to a server that is one node away. To connect to a machine, use": "现在你既能看到相距至多两个节点的所有服务器信息，也能理清在网络中抵达它们的路径。注意你只能连接相距一个节点的服务器。要连接某台机器，使用",
    "From the results of": "根据",
    "we can see that the n00dles server is only one node away. Let's connect to it now using:": "的结果可以看出，n00dles 服务器距你只有一个节点。现在用下面的命令连接它：",
    /* Step: TerminalAnalyze */
    "You are now connected to another machine! What can you do now? You can hack it!": "你已经连上了另一台机器！现在能做什么？你可以骇入它！",
    "In the year 2077, currency has become digital and decentralized. People and corporations store their money on servers and computers. Using your hacking abilities, you can hack servers to steal money and gain experience.": "2077 年，货币早已数字化、去中心化。人们与企业把资金存在服务器和计算机里。凭借你的骇客技术，你可以骇入服务器盗取资金、获取经验。",
    "Before you try to hack a server, you should run diagnostics using": "在动手骇入服务器之前，先用",
    /* Step: TerminalNuke */
    "finishes running it will show useful information about hacking the server.": "执行完毕后，会显示关于骇入该服务器的有用信息。",
    "For this server, the required hacking skill is only 1, which means you can hack it right now. However, in order to hack a server you must first gain root access. The NUKE.exe program that we saw earlier on your home computer is a virus that will grant you root access to a machine if there are enough open ports.": "这台服务器的要求骇客等级只有 1，意味着你现在就能骇入它。不过，骇入服务器前必须先取得 root 权限。之前在 home 电脑上看到的 NUKE.exe 是一种病毒：只要目标机器有足够的开放端口，它就能为你取得 root 权限。",
    "shows that there do not need to be any open ports on this machine for the NUKE virus to work, so go ahead and run the virus using": "显示：这台机器无需任何已开放的端口，NUKE 病毒就能生效。那就直接用下面的命令运行病毒：",
    /* Step: TerminalManualHack */
    "You now have root access! You can hack the server using": "root 权限到手！现在可以用",
    "Try doing that now.": "马上试一试。",
    /* Step: TerminalHackingMechanics */
    "You are now attempting to hack the server. Performing a hack takes time and only has a certain percentage chance of success. This time and success chance is determined by a variety of factors, including your hacking skill and the server's security level.": "你正在尝试骇入该服务器。骇入需要耗时，且只有一定的成功几率。耗时与成功率由多种因素决定，包括你的骇客等级和服务器安全等级。",
    "If your attempt to hack the server is successful, you will steal a certain percentage of the server's total money. This percentage is affected by your hacking skill and the server's security level.": "若骇入成功，你将盗取服务器总资金的一定百分比。该百分比同样受你的骇客等级与服务器安全等级影响。",
    "The amount of money on a server is not limitless. So, if you constantly hack a server and deplete its money, then you will encounter diminishing returns in your hacking. You will need to use": "服务器上的资金并非无限。若你不停地骇入、掏空一台服务器，骇入收益就会递减。你需要使用",
    "which tricks the company into adding money to their server and": "——它会诱使公司往自己的服务器里追加资金；再用",
    "which increases the speed of hack and grow.": "——它会加快 hack 与 grow 的速率。",
    /* Step: TerminalGoHome */
    "From any server you can get back home using": "从任何服务器回家，只需用",
    "Let's head home before creating our first script!": "先回家，再创建我们的第一个脚本！",
    /* Step: TerminalCreateScript */
    "Hacking is the core mechanic of the game and is necessary for progressing. However, you don't want to be hacking manually the entire time. You can automate your hacking by writing scripts!": "骇入是游戏的核心机制，也是推进游戏的必经之路。但你不会想全程手动骇入——编写脚本，让骇入自动化吧！",
    "To create a new script or edit an existing one, you can use": "要创建新脚本或编辑已有脚本，可以使用",
    "Scripts must end with a script extension (.js, .jsx, .ts, .tsx). Let's make a script now by entering": "脚本必须带脚本扩展名（.js、.jsx、.ts、.tsx）。现在输入下面这条命令来创建脚本：",
    /* Step: TerminalEditScript */
    "This is the script editor. You can use it to program your scripts. Click this text to copy it and paste it into the text editor:": "这里是脚本编辑器，你可以在里面编写脚本。点击下面这段文字复制它，然后粘贴进编辑器：",
    "For anyone with basic programming experience, this code should be straightforward. This script will continuously hack the n00dles server.": "只要有一点编程基础，这段代码便一目了然：它会持续不断地骇入 n00dles 服务器。",
    "Use the search tool at the bottom to find and have a quick glance at documentation of any NS APIs.": "用底部的搜索工具查找并快速浏览任何 NS API 的文档。",
    ", press the link at the bottom.": "，按下方的链接即可。",
    "To save and close the script editor, press the button at the bottom.": "要保存并关闭脚本编辑器，按下底部的按钮。",
    /* Step: TerminalFree / TerminalRunScript */
    "Now we'll run the script. Scripts require a certain amount of RAM to run, and can be run on any machine which you have root access to. Different servers have different amounts of RAM. You can also purchase more RAM for your home server.": "现在来运行脚本。脚本运行需要占用 RAM，可运行在你拥有 root 权限的任何机器上。不同服务器的 RAM 各不相同；你也可以为 home 电脑购买更多 RAM。",
    "To check how much RAM is available on this machine, enter": "要查看这台机器还有多少空闲 RAM，输入",
    "We have 8GB of free RAM on this machine, which is enough to run our script. Let's run our script using": "这台机器有 8GB 空闲 RAM，足够运行我们的脚本。用下面这条命令运行它：",
    /* Step: TerminalGoToActiveScriptsPage */
    "Your script is now running! It will continuously run in the background and will automatically stop if the code ever completes (the": "脚本跑起来了！它会在后台持续运行，并在代码执行完毕时自动停止（",
    "will never complete because it runs an infinite loop).": "因为它是无限循环，永远不会结束）。",
    "These scripts can passively earn you income and hacking experience. Your scripts will also earn money and experience while you are offline, although at a slightly slower rate.": "这些脚本能为你带来源源不断的收入与骇客经验。离线时它们同样能赚钱、攒经验，只是速度稍慢一些。",
    "Let's check out some statistics for our running scripts by clicking": "点击下面的项目，查看运行中脚本的统计数据：",
    /* Step: ActiveScriptsPage / ActiveScriptsToTerminal */
    "This page displays information about all of your scripts that are running across every server. You can use this to gauge how well your scripts are doing.": "此页汇总了你在所有服务器上运行中的脚本信息，可以据此评估脚本的表现。",
    "Click on Home to see the scripts running on it.": "点击「home」查看正在其上运行的脚本。",
    "Then click on n00dles.js to see the scripts information.": "再点击 n00dles.js 查看脚本详情。",
    "Let's go back to": "现在回到",
    "One last thing about scripts, each active script contains logs that detail what it's doing. We can check these logs using the tail command. Do that now for the script we just ran by typing": "关于脚本还剩最后一件事：每个运行中的脚本都有自己的日志，记录它的一举一动。我们可以用 tail 命令查看日志。对刚才运行的脚本输入下面这条命令试试：",
    /* Step: TerminalTailScript */
    "The log for this script won't show much right now (it might show nothing at all) because it just started running...but check back again in a few minutes!": "这个脚本的日志暂时不会显示多少内容（甚至可能一片空白），因为它才刚开始运行……过几分钟再回来看看吧！",
    "This covers the basics of hacking. To learn more about writing scripts, select": "骇入的基础就讲到这里。想进一步学习脚本编写，请选择",
    "in the main navigation menu to look at the documentation.": "——它就在主导航菜单里，里面有完整的文档。",
    "For now, let's move on to something else!": "现在，让我们去看点别的！",
    /* Step: GoToHacknetNodesPage / HacknetNodesIntroduction */
    "Hacking is not the only way to earn money. One other way to passively earn money is by purchasing and upgrading Hacknet Nodes. Let's go to": "赚钱并非只有骇入一途。购买并升级 Hacknet 节点同样能带来源源不断的收入。让我们进入",
    "through the main navigation menu now.": "（就在主导航菜单里）。",
    "Here you can purchase new Hacknet Nodes and upgrade your existing ones. Let's purchase a new one now.": "在这里你可以购买新的 Hacknet 节点，并升级已有节点。现在买一台试试。",
    /* Step: HacknetNodesGoToWorldPage / WorldDescription */
    "You just purchased a Hacknet Node! This Hacknet Node will passively earn you money over time, both online and offline. When you get enough money, you can upgrade your newly-purchased Hacknet Node below.": "你刚买下一个 Hacknet 节点！无论在线还是离线，它都会随时间持续为你赚钱。等手头宽裕了，还可以在下方升级这个新买的节点。",
    "Let's go to": "现在前往",
    "This page lists all of the different locations you can currently travel to. Each location has something that you can do. There's a lot of content out in the world, make sure you explore and discover!": "此页列出了你目前可以前往的所有地点，每个地点都有可做的事情。世界里有海量内容等你探索与发现！",
    "Lastly, click on": "最后，点击",
    /* Step: DocumentationPageInfo */
    "This page contains a lot of different documentation about the game's contents and mechanics. I know it's a lot, but I highly suggest you read (or at least skim) through this before you start playing. Some pages are inaccessible at the start and will be unlocked later.": "此页包含大量关于游戏内容与机制的文档。我知道内容很多，但强烈建议你在正式游玩前通读（至少浏览）一遍。有些页面开局无法访问，稍后会解锁。",
    "If you click a link in these pages while holding Ctrl key (Control key on Mac keyboard), it will be opened in a new tab. If you play the Steam version, that link will be opened in your default browser.": "按住 Ctrl 键（Mac 键盘上是 Control 键）再点击这些页面里的链接，链接会在新标签页打开；如果你玩的是 Steam 版，则会在系统默认浏览器中打开。",
    "You should at least check these pages:": "你至少应该看看这些页面：",
    "contains the guide for new players, navigating you through most of the early game.": "》，为新手提供向导，陪你走过前期的大部分流程。",
    "contains reference materials for all NS APIs.": "》，是所有 NS API 的参考资料。",
    "contains questions often asked by beginners of the game.": "》，收录了游戏新手常提的问题。",
    "This documentation page is the best place to get up-to-date information, especially when you get stuck. If you have a question and cannot find the answer here, please ask us on Discord.": "文档页是获取最新信息的最佳去处，尤其是你卡关的时候。若有疑问而这里找不到答案，欢迎到 Discord 上问我们。",
    "The documentation at readthedocs is outdated and unmaintained. Do not use them!": "readthedocs 上的文档已过时且无人维护。别用它！",
    "That's the end of the tutorial. Hope you enjoy the game!": "教程到此结束，祝你玩得开心！",
    /* 教程按钮 */
    "Exit Tutorial": "退出教程",
    "Finish Tutorial": "完成教程",
  });

  /* 教程中被插值拆开的短片段（原样匹配，含空格） */
  BitburnerZH.frag({
    "The ": "《",
    "When ": "当",
    "To access ": "要访问",
  });

  /* ================= 游戏文学 .lit —— Part A ================= */
  BitburnerZH.exact({
    /* 标题（Literature 弹窗页眉） */
    "The Beginner's Guide to Hacking": "骇客入门手册",
    "Short Introduction for Creating a Successful Corporation": "成功创建企业之简明导论",
    "A Brief History of Synthoids": "仿生人简史",
    "A Green Tomorrow": "绿色的明天",
    "Alpha and Omega": "阿尔法与欧米伽",
    "Are We Living in a Computer Simulation?": "我们生活在计算机模拟中吗？",
    "Beyond Man": "超越人类",
    "Brighter than the Sun": "比太阳更亮",
    "Democracy is Dead: The Fall of an Empire": "民主已死：一个帝国的覆灭",
    "Figures Show Rising Crime Rates in Sector-12": "数字显示 Sector-12 犯罪率不断攀升",
    "Man and the Machine": "人与机器",
    "Secret Societies": "秘密结社",
    "Space: The Failed Frontier": "太空：失败的前沿",
    "Coded Intelligence: Myth or Reality?": "编码之智：神话还是现实？",
    "Synthetic Muscles": "人造肌肉",
    "Tensions rise in global tech race": "全球科技竞赛局势升温",
    /* hackers-starting-handbook.lit */
    "When starting out, hacking is the most profitable way to earn money and progress. This is a brief collection of tips/pointers on how to make the most out of your hacking scripts.": "开局阶段，骇入是赚钱与发展回报最高的路子。下面是一份简短的要点集，教你把骇入脚本的效用发挥到极致。",
    "-hack() and grow() both work by percentages. hack() steals a certain percentage of the money on a server, and grow() increases the amount of money on a server by some percentage (multiplicatively)": "-hack() 与 grow() 都按百分比生效。hack() 盗取服务器上一定百分比的资金，grow() 则按百分比（乘算式）增加服务器上的资金总量",
    "-Because hack() and grow() work by percentages, they are more effective if the target server has a high amount of money. Therefore, you should try to increase the amount of money on a server (using grow()) to a certain amount before hacking it. Two important Netscript functions for this are getServerMoneyAvailable() and getServerMaxMoney()": "-正因为 hack() 与 grow() 按百分比生效，目标服务器资金越多，二者越见功效。因此骇入之前，应先用 grow() 把服务器资金养到一定规模。与此相关的两个重要 Netscript 函数是 getServerMoneyAvailable() 与 getServerMaxMoney()",
    "-Keep security level low. Security level affects everything when hacking. Two important Netscript functions for this are getServerSecurityLevel() and getServerMinSecurityLevel()": "-保持低安全等级。骇入时安全等级影响一切。与此相关的两个重要 Netscript 函数是 getServerSecurityLevel() 与 getServerMinSecurityLevel()",
    "-Purchase additional cloud servers by visiting \"Alpha Enterprises\" in the city. They are relatively cheap and give you valuable RAM to run more scripts early in the game": "-去城里的 Alpha Enterprises 购买额外的云服务器。它们价格不高，游戏前期能换来宝贵 RAM 以运行更多脚本",
    "-Prioritize upgrading the RAM on your home computer. This can also be done at \"Alpha Enterprises\"": "-优先升级 home 电脑的 RAM。同样可在 Alpha Enterprises 办理",
    "-Many low level servers have free RAM. You can use this RAM to run your scripts. Use the scp Terminal or Netscript command to copy your scripts onto these servers and then run them.": "-许多低级服务器自带免费 RAM，可用来运行你的脚本。用 scp 终端命令或 Netscript 函数把脚本拷到这些服务器上，然后运行它们。",
    /* corporation-management-handbook.lit */
    "You should check the in-game Corporation documentation in the Documentation tab (Documentation": "你应当查阅游戏内的企业文档（帮助文档",
    " Corporation). It's the most useful and up-to-date resource for managing Corporation.": "」中的「企业」一节）。那是管理企业最有用、最时新的资料。",
    "Getting Started with Corporation": "企业入门",
    "To get started, visit the city hall in Sector-12 in order to create a corporation. This requires 150e9 of your own money, but this money will get put into your corporation's funds. If you're in BitNode 3, you also have the option to get seed money from the government in exchange for 500m shares. Your corporation can have many different divisions, each in a different industry. There are many different types of industries, each with different properties. To create your first division, click the \"Expand\" button at the top of the management UI. The agriculture industry is recommended for your first division.": "要起步，先去 Sector-12 的市政厅创建一家企业。这需要你自备 150e9，不过这笔钱会转入企业资金池。若身处 BitNode 3，也可选择出让 500m 股份、换取政府的种子资金。企业可以拥有许多分部，每个分部处于不同行业；行业种类繁多，特性各异。要创建第一个分部，点击管理界面顶部的「扩展」按钮。首个分部推荐农业行业。",
    "The first thing you'll need to do is hire some employees. Employees can be assigned to five different positions. Each position has a different effect on various aspects of your corporation. It is recommended to have at least one employee at each position.": "第一件事是雇些员工。员工可分配到五种岗位，每种岗位对企业各方面的影响不同。建议每个岗位至少安排一名员工。",
    "Each industry uses some combination of materials in order to produce other materials and/or create products. Specific information about this is displayed in each of your divisions' UI.": "每个行业都以某种材料组合来生产其他材料和/或产品。具体信息会显示在各分部的界面里。",
    "Products are special, industry-specific objects. They are different than materials because you must manually choose to develop them, and you can choose to develop any number of products. Developing a product takes time, but a product typically generates significantly more revenue than any material. Not all industries allow you to create products. To create a product, look for a button in the top-left panel of the division UI (e.g., for the software industry, the button says \"Develop Software\").": "产品是行业特有的特殊物件。它与材料不同：须由你主动选择研发，且研发数量不限。研发产品需要时间，但产品的收益通常远高于任何材料。并非所有行业都能创建产品。要创建产品，请在分部界面左上角的面板中找到相应按钮（例如软件行业，按钮上写着「开发软件」）。",
    "To get your supply chain system started, purchase the materials that your industry needs to produce other materials/products. This can be done by clicking the \"Buy\" button next to the corresponding material(s). After you have the required materials, you will immediately start production. The amount and quality/effective rating of materials/products you produce is based on a variety of factors, such as your employees and their productivity and the quality of materials used for production.": "要启动供应链，先购买本行业生产其他材料/产品所需的材料——点击对应材料旁的「购买」按钮即可。凑齐所需材料后，生产随即开始。你产出的材料/产品的数量及其质量/有效评级取决于多种因素，比如员工与其生产力、以及所用生产材料的质量。",
    "Once you start producing materials/products, you can sell them in order to start earning revenue. This can be done by clicking the \"Sell\" button next to the corresponding material or product. The amount of material/product you sell is dependent on a wide variety of different factors. In order to produce and sell a product, you'll have to fully develop it first.": "一旦开始产出材料/产品，出售它们就能赚取营收——点击对应材料或产品旁的「出售」按钮即可。可售出的材料/产品数量受众多不同因素影响。要产销某种产品，必须先将其完全研发出来。",
    "These are the basics of getting your corporation up and running! Now, you can start purchasing upgrades to improve your bottom line. If you need money, consider looking for seed investors, who will give you money in exchange for stock shares. Otherwise, once you feel you are ready, take your corporation public! Once your corporation goes public, you can no longer find investors. Instead, your corporation will be publicly traded, and its stock price will change based on how well it's performing financially. In order to make money for yourself, you can set dividends for a solid, reliable income, or you can sell your stock shares in order to make quick money.": "这些就是让企业转起来的基本盘！接下来你可以购买升级、增厚利润。缺钱的话，不妨寻找种子投资人——他们以资金换股份。或者，当你自觉准备就绪，就让企业上市！企业上市后便不能再找投资人，取而代之的是股票公开交易，股价随其财务表现起落。想为自己赚钱，可以设定分红换取稳固可靠的进账，也可以出售自持股份赚快钱。",
    "Tips/Pointers": "要点与建议",
    "-Start with one division, such as Agriculture. Get it profitable on its own, then expand to a division that consumes/produces a material that the division you selected produces/consumes.": "-从一家分部做起，比如农业。先让它独立盈利，再扩张一个与现有分部在材料上互相供需的分部。",
    "-Materials are profitable, but products are where the real money is, although if the product has a low development budget or is produced with low-quality materials, it won't sell well.": "-材料有利可图，但真正的大钱在产品——只不过研发预算过低、或用料质量不高的产品会卖不动。",
    "-The \"Smart Supply\" upgrade is extremely useful. Consider purchasing it as soon as possible.": "-「智能调拨（Smart Supply）」升级极其好用，建议尽快购买。",
    "-Purchasing Hardware, Robots, AI Cores, and Real Estate can potentially increase your production. The effects of these depend on what industry you are in.": "-购买 Hardware（硬件）、Robots（机器人）、AI Cores（AI 核心）与 Real Estate（房地产）可能提升你的产量。具体效果因行业而异。",
    "-In order to optimize your production, you will need a good balance of all employee positions.": "-要优化生产，各类员工岗位须保持良好的配比。",
    "-Quality of materials used for production affects the quality/effective rating of materials/products produced, so vertical integration is important for high profits.": "-用于生产的材料质量会影响产出材料/产品的质量/有效评级，因此上下游自产的纵向一体化对高利润至关重要。",
    "-Materials purchased from the open market are always of quality 1.": "-从公开市场购买的材料，质量恒为 1。",
    "-The price at which you can sell your materials/products is highly affected by the quality/effective rating.": "-你能以什么价位卖出材料/产品，极大程度上取决于质量/有效评级。",
    "-When developing a product, different employee positions affect the development process differently. Some improve the development speed, some improve the rating of the finished product.": "-研发产品时，不同岗位对研发过程的作用不同：有的加快研发速度，有的提高成品评级。",
    "-If your employees have low morale or energy, their production will greatly suffer. Having enough interns will make sure those stats get high and stay high. 1/9 is a good ratio for interns (number of interns / office size). If morale and energy still drop, use 1/6.": "-员工士气或精力低落，产量将大受影响。实习生足够多，才能把这些属性拉高并稳住。1/9 是不错的实习生比例（实习生数/办公室规模）。若士气与精力仍在下滑，改用 1/6。",
    "-Don't forget to advertise your company. You won't have any business if nobody knows you.": "-别忘为公司打广告。无人知道你，就没有生意。",
    "-Having company awareness is great, but what's really important is your company's popularity. Try to keep your popularity as high as possible to see the biggest benefit for your sales.": "-公司知名度固然好，真正关键的是人气。尽可能把人气维持到最高，销售端受益最大。",
    "-Remember, you need to spend money to make money!": "-记住：花钱才能赚钱！",
    "-Your corporation does not reset when installing Augmentations, but it does reset when destroying a BitNode.": "-安装义体不会重置你的企业，但摧毁一个 BitNode 会。",
    /* history-of-synthoids.lit */
    "Synthetic androids, or Synthoids for short, are genetically engineered robots and, short of Augmentations, are composed entirely of organic substances. For this reason, Synthoids are virtually identical to humans in form, composition, and appearance.": "合成人造人——简称仿生人（Synthoid）——是基因工程制造的机器人；除义体外，通体皆由有机物质构成。正因如此，仿生人在形体、构造与外貌上几乎与人类别无二致。",
    "Synthoids were first designed and manufactured by": "仿生人最早由",
    "sometime around the middle of the century. Their original purpose was to be used for manual labor and as emergency responders for disasters. As such, they were initially programmed only for their specific tasks. Each iteration that followed improved upon the intelligence and capabilities of the Synthoids. By the 6th iteration, called MK-VI, the Synthoids were so smart and capable enough of making their own decisions that many argued": "在本世纪中叶前后设计制造的。它们最初的用途是充当体力劳力与灾难应急人员，因此起初只被写入特定任务的程序。此后每一代迭代都让仿生人的智能与能力更上层楼。到第六代——MK-VI——仿生人已聪明到足以自主决断，以致许多人断言",
    "had created the first sentient AI. These MK-VI Synthoids were produced in mass quantities (estimates up to 50 billion) with the hopes of increasing society's productivity and bolstering the global economy. Stemming from humanity's desire for technological advancement, optimism and excitement about the future had never been higher.": "创造了首个有感知的人工智能。这些 MK-VI 仿生人被大规模量产（估计多达 500 亿台），人们寄望借此提高社会生产力、提振全球经济。源于人类对技术进步的渴望，对未来的乐观与兴奋达到了空前的高度。",
    "All of that excitement and optimism quickly turned to fear, panic, and dread in 2070, when a terrorist group called Ascendis Totalis hacked into": "而一切兴奋与乐观在 2070 年迅速化作恐惧、恐慌与绝望——一个名为 Ascendis Totalis 的恐怖组织黑进了",
    "and uploaded a rogue AI into several of their Synthoid manufacturing facilities. This hack went undetected and for months": "，把一段失控 AI 上传到它的多家仿生人制造工厂。这次入侵未被察觉，数月来",
    "unknowingly churned out legions of Synthoids embedded with this rogue AI. Then, on December 24th, 2070, Omnica activated dormant protocols in the rogue AI, causing all of the infected Synthoids to immediately launch a military campaign to seek and destroy all of humanity.": "在浑然不知中开足马力，生产出一支支内嵌失控 AI 的仿生人军团。2070 年 12 月 24 日，Omnica 唤醒了失控 AI 中的休眠协议，所有受感染的仿生人即刻发动军事行动，对全人类展开搜杀。",
    "What ensued was the deadliest conflict in human history. This crisis, now commonly known as the Synthoid Uprising, resulted in almost ten billion deaths over the course of a year. Despite the nations of the world banding together to combat the threat, the MK-VI Synthoids were simply stronger, faster, more intelligent, and more adaptable than humans, outsmarting them at every turn.": "接下来是人类历史上最致命的冲突。这场危机如今通称「仿生人起义」，一年之内夺去近百亿条生命。尽管世界各国联手抗击威胁，MK-VI 仿生人就是更强、更快、更聪明、更善适应——每一回合都把人类耍得团团转。",
    "It wasn't until the sacrifice of an elite international military taskforce, called the": "直到一支名为",
    ", that humanity was finally able to defeat the Synthoids. The": "的精锐国际军事特遣队壮烈牺牲，人类才终于战胜仿生人。",
    "' final act was a suicide bombing mission that destroyed a large portion of the MK-VI Synthoids, including many of its leaders. In the following weeks militaries from around the world were able to round up and shut down the remaining rogue MK-VI Synthoids, ending the Synthoid Uprising.": "的最后一击是一次自杀式轰炸任务，摧毁了大量 MK-VI 仿生人，包括许多首领。随后数周，世界各地的军队得以围捕并关闭残余的失控 MK-VI 仿生人，仿生人起义就此终结。",
    "In the aftermath of the bloodshed, the Synthoid Accords were drawn up. These Accords banned": "血雨腥风过后，《仿生人协定》签订。协定禁止",
    "from manufacturing any Synthoids beyond the MK-III series. They also banned any other corporation from constructing androids with advanced, near-sentient AI. MK-VI Synthoids that did not have the rogue Ascendis Totalis AI were allowed to continue their existence, but they were stripped of all rights and protections as they were not considered humans. They were also banned from doing anything that may pose a global security threat, such as working for any military/defense organization or conducting any bioengineering, computing, or robotics related research.": "制造 MK-III 系列之后的任何仿生人，也禁止任何其他公司建造拥有高等级、近乎有感知的 AI 的人形机器人。未搭载 Ascendis Totalis 失控 AI 的 MK-VI 仿生人获准继续存在，但被剥夺一切权利与保护——它们不被视作人类。它们还被禁止从事任何可能危及全球安全之事，例如在任何军事/防务组织任职，或进行生物工程、计算机、机器人相关研究。",
    "Unfortunately, many believe that not all of the rogue MK-VI Synthoids from the Uprising were found and destroyed, and that many of them are blending in as normal humans in society today. In response, many nations have created": "遗憾的是，许多人相信起义中失控的 MK-VI 仿生人并未被全部找到并摧毁，其中不少如今以普通人身份混迹于社会。为应对这一威胁，许多国家组建了",
    "divisions, special military branches that are tasked with investigating and dealing with any Synthoid threats.": "——专司调查和处置任何仿生人威胁的特别军事部门。",
    "To this day, tensions still exist between the remaining Synthoids and humans as a result of the Uprising.": "时至今日，起义的余波仍在剩余仿生人与人类之间暗暗发酵。",
    "Nobody knows what happened to the terrorist group Ascendis Totalis.": "没人知道恐怖组织 Ascendis Totalis 后来下落如何。",
    /* A-Green-Tomorrow.lit */
    "Starting a few decades ago, there was a massive global movement towards the generation of renewable energy in an effort to combat global warming and climate change. The shift towards renewable energy was a big success, or so it seemed. In 2045 a staggering 80% of the world's energy came from non-renewable fossil fuels. Now, about three decades later, that number is down to only 15%. Most of the world's energy now comes from nuclear power and renewable sources such as solar and geothermal energy. Unfortunately, these efforts were not the huge success that they seem to be.": "几十年前起，全球掀起一场转向可再生能源的浩大运动，以抗击全球变暖与气候变化。能源转型看似大获成功。2045 年，全球多达 80% 的能源来自不可再生化石燃料；约三十年后的今天，这一数字已降至仅 15%。如今世界能源主要来自核能与太阳能、地热能等可再生来源。可惜，这些努力并不像表面那般成功。",
    "Since 2045 primary energy use has soared almost tenfold. This was mainly due to growing urban populations and the rise of increasingly advanced (and power-hungry) technology that has become ubiquitous in our lives. So, despite the fact that the percentage of our energy that comes from fossil fuels has drastically decreased, the total amount of energy we are producing from fossil fuels has actually increased.": "自 2045 年以来，一次能源消耗暴增近十倍。这主要缘于城市人口膨胀，以及日益先进（且极度耗电）的技术已渗透我们生活的每个角落。于是，尽管化石能源在我们能源中的占比大幅下降，我们由化石燃料生产的能源总量反而增加了。",
    "The grim effects of our species' irresponsible use of energy and neglect of our mother world have become increasingly apparent. Last year a temperature of 190F was recorded in the Death Valley desert, which is over 50% higher than the highest recorded temperature at the beginning of the century. In the last two decades numerous major cities such as Manhattan, Boston, and Los Angeles have been partially or fully submerged by rising sea levels. In the present day, over 75% of the world's agriculture is done in climate-controlled vertical farms, as most traditional farmland has become unusable due to severe climate conditions.": "我们这个物种对能源的肆意挥霍与对母亲星球的漠视，其恶果日益触目惊心。去年，死亡谷沙漠录得 190F 高温，比本世纪初的最高纪录还要高出 50% 以上。过去二十年，曼哈顿、波士顿、洛杉矶等大批主要城市已被不断上升的海平面部分或全部吞没。如今全球 75% 以上的农业在温控垂直农场中进行——因为严酷的气候已让传统农田大半报废。",
    "Despite all of this, the greedy and corrupt corporations that rule the world have done nothing to address these problems that threaten our species. And so it's up to us, the common people. Each and every one of us can make a difference by doing what these corporations won't: taking responsibility. If we don't, pretty soon there won't be an Earth left to save. We are the last hope for a green tomorrow.": "尽管如此，统治世界的那些贪婪腐败的公司对威胁我们物种的种种问题毫无作为。那就只能靠我们——普通人了。人人皆可有所作为，去做这些公司不肯做的事：负起责任。若我们不做，很快就不会再有地球可救。我们是绿色明天的最后希望。",
    /* alpha-omega.lit */
    "Then we saw a new Heaven and a new Earth, for our first Heaven and Earth had gone away, and our sea was no more. And we saw a new holy city, new Aeria, coming down out of this new Heaven, prepared as a bride adorned for her husband. And we heard a loud voice saying, \"Behold, the new dwelling place of the Gods. We will dwell with them, and they will be our people, and we will be with them as their Gods. We will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.\"": "随后我们看见新的天与新的地，因为先前的天与地已经逝去，我们的海也不复存在。我们看见圣城新艾尔亚（Aeria）自新天而降，整齐庄严，如新妇妆饰整齐等候丈夫。我们听见宏大的声音说：「看哪，众神的新居所。我们将与他们同住，他们要做我们的子民，我们将与他们同在，做他们的神。我们要擦去他们眼中每一滴泪水，死亡将不复存在，不再有悲哀、哭号与疼痛，因为往昔之事都已过去。」",
    "And once we were seated on the throne we said \"Behold, I am making all things new.\" Also we said, \"Write this down, for these words are trustworthy and true.\" And we said to you, \"It is done! I am the Alpha and the Omega, the beginning and the end. To the thirsty I will give from the spring of the water of life without payment. The one who conquers will have this heritage, and we will be his God and he will be our son. But as for the cowardly, the faithless, the detestable, as for murderers, the sexually immoral, sorcerers, idolaters, and all liars, their portion will be in the lake that burns with fire and sulfur, for it is the second true death.\"": "我们登上宝座之后说：「看哪，我将一切都更新了。」又说：「你要写下来，因为这些话是可信的、真实的。」又对我们说：「成了！我是阿尔法，也是欧米伽；是开端，也是终结。对口渴的，我必白赐生命水的泉源。得胜的必承受这基业：我要做他的神，他要做我的儿子。唯有胆怯的、无信的、可憎的、杀人的、淫乱的、行邪术的、拜偶像的，以及一切说谎的，他们的份在那燃着烈火与硫磺的湖里——这是第二次真死。」",
    /* simulated-reality.lit */
    "The idea that we are living in a virtual world is not new. It's a trope that has been explored constantly in literature and pop culture. However, it is also a legitimate scientific hypothesis that many notable physicists and philosophers have debated for years.": "我们生活在虚拟世界之中的想法并不新鲜，它是文学与流行文化反复演绎的老题材。然而它也是一个正经的科学假说，许多著名物理学家与哲学家为之辩论多年。",
    "Proponents for this simulated reality theory often point to how advanced our technology has become, as well as the incredibly fast pace at which it has advanced over the past decades. The amount of computing power available to us has increased over 100-fold since 2060 due to the development of nanoprocessors and quantum computers. Artificial Intelligence has advanced to the point where our entire lives are controlled by robots and machines that handle our day-to-day activities such as autonomous transportation and scheduling. If we consider the pace at which this technology has advanced and assume that these developments continue, it's reasonable to assume that at some point in the future our technology would be advanced enough that we could create simulations that are indistinguishable from reality. However, if continued technological advancement is a reasonable outcome, then it is very likely that such a scenario has already happened.": "模拟现实论的支持者常指出我们的技术已多么先进、过去几十年进步的速度多么惊人。自 2060 年以来，由于纳米处理器与量子计算机的发展，我们可支配的算力已增长逾百倍。人工智能已进步到整个生活都被机器人和机器掌控的地步——自动驾驶、日程安排等日常事务皆由它们打理。若以这种技术进步的速度外推、并假定这些发展延续下去，我们可以合理地假设：未来某一刻，我们的技术将先进到能创造出与现实无从分辨的模拟。而如果技术持续进步是顺理成章的结局，那么这样的情形很可能早已发生。",
    "Statistically speaking, somewhere out there in the infinite universe there is an advanced, intelligent species that already has such technology. Who's to say that they haven't already created such a virtual reality: our own?": "从统计上讲，无垠宇宙的某处，必有一个早已掌握这种技术的先进智慧物种。谁敢说他们还没有创造出这样一个虚拟现实——而它正是我们的世界？",
    /* beyond-man.lit */
    "Humanity entered a \"transhuman\" era a long time ago. And despite the protests and criticisms of many who cried out against human augmentation at the time, the transhuman movement continued and prospered. Proponents of the movement ignored the critics, arguing that it was in our inherent nature to better ourselves. To improve. To be more than we were. They claimed that not doing so would be to go against every living organism's biological purpose: evolution and survival of the fittest.": "人类早已踏入「超人类」时代。尽管彼时有许多人高声反对人类增强、抗议批判，超人类主义运动仍持续推进、日渐兴盛。运动的支持者对批评者充耳不闻，辩称自我完善乃我们的天性：要精进，要超越，要胜过旧日的自己。他们声称，不这样做便是违背一切生命体的生物学使命——进化，与适者生存。",
    "And here we are today, with technology that is advanced enough to augment humans to a state that can only be described as posthuman. But what do we have to show for it when this augmentation technology is only available to the so-called \"elite\"? Are we really better off than before when only 5% of the world's population has access to this technology? When the powerful corporations and organizations of the world keep it all to themselves, have we really evolved?": "于是有了今天的我们：技术已先进到能把人类增强到唯有「后人类」方可形容的境地。可当这种增强技术只为所谓「精英」所用时，我们又赢得了什么？当全世界只有 5% 的人口能接触这种技术，我们真的比以前更好吗？当世上有权有势的公司与组织将其据为己有，我们真的进化了吗？",
    "Augmentation technology has only further increased the divide between the rich and the poor, between the powerful and the oppressed. We have not become \"more than human\". We have not evolved from nature's original design. We are still the greedy, corrupted, and evil men that we always were.": "增强技术只会进一步撕裂贫富之间、权贵与被压迫者之间的鸿沟。我们并没有成为「超乎人类的存在」，也没有挣脱自然的原始设计。我们依旧是往日那些贪婪、腐败、邪恶之人。",
    /* brighter-than-the-sun.lit */
    "When people think about the corporations that dominate the East, they typically think of": "人们谈起主宰东方的公司时，想到的往往是",
    ", which holds a complete monopoly for manufacturing and commerce in Asia, or": "——它对亚洲的制造与商业握有完全垄断——或是",
    ", the world's largest drug company, or": "——全球最大的制药公司——或是",
    ", the global leader in intelligent and autonomous robots. But there's one company that has seen a rapid rise in the last year and is poised to dominate not only the East, but the entire world: TaiYang Digital.": "——智能与自主机器人的全球领导者。但有一家公司过去一年间迅猛崛起，其锋芒所盖不止东方，而是全世界：TaiYang Digital（太阳数码）。",
    "TaiYang Digital is a Chinese internet-technology corporation that provides services such as online advertising, search engines, gaming, media, entertainment, and cloud computing/storage. Its name TaiYang comes from the Chinese word for \"sun\". In Chinese culture, the sun is a 'yang' symbol associated with life, heat, masculinity, and heaven.": "太阳数码是一家中国互联网科技公司，业务涵盖在线广告、搜索引擎、游戏、媒体、娱乐以及云计算/存储。其名 TaiYang 取自中文里的「太阳」。在中国文化中，太阳属「阳」，象征生命、热量、男性与天界。",
    "The company was founded less than 5 years ago and is already the third highest valued company in all of Asia. In 2076 it generated a total revenue of over 10 trillion yuan. Its services are used daily by over a billion people worldwide.": "这家公司成立不足五年，市值已高居全亚洲第三。2076 年其总营收逾 10 万亿元；全球每天有逾十亿人使用它的服务。",
    "TaiYang Digital's meteoric rise is extremely surprising in modern society. This sort of growth is something you'd commonly see in the first half of the century, especially for tech companies. However in the last two decades the number of corporations has significantly declined as the largest entities quickly took over the economy. Corporations such as": "太阳数码的蹿升在现代社会极为罕见。这类增长在世纪上半叶的科技公司中司空见惯；然而近二十年来，最大的巨头迅速接管经济，公司数目已大幅萎缩。诸如",
    "have established such strong monopolies in their market sectors that they have effectively killed off all of the smaller and new corporations that have tried to start up over the years. This is what makes the rise of TaiYang Digital so impressive. And if TaiYang continues down this path, then they have a bright future ahead of them.": "在各自的市场板块建立了牢不可破的垄断，多年来几乎所有试图创办的小公司与新公司都被扼杀殆尽。正因如此，太阳数码的崛起才如此耀眼。若太阳数码继续沿这条路走下去，等待它的前途将不可限量。",
    /* democracy-is-dead.lit（诗行） */
    "They rose from the shadows in the street.": "他们从街头的阴影中起身，",
    "From the places where the oppressed meet.": "从受压迫者相聚的地方。",
    "Their cries echoed loudly through the air.": "他们的呐喊在空气中轰然回响，",
    "As they once did in Tiananmen Square.": "一如当年在天安门广场。",
    "Loudness in the silence, Darkness in the light.": "寂静中的轰鸣，光明中的黑暗。",
    "They came forth with power and might.": "他们携力量与威势而来。",
    "Once the beacon of democracy, America was first.": "曾为民主灯塔，美国首当其冲。",
    "Its pillars of society destroyed and dispersed.": "社会的支柱被摧毁流散。",
    "Soon the cries rose everywhere, with revolt and riot.": "不久呐喊四起，遍布各方，伴着暴动与骚乱。",
    "Until one day, finally, all was quiet.": "直到某天，终于万籁俱寂。",
    "From the ashes rose a new order, corporatocracy was its name.": "灰烬中升起新的秩序，名为公司治国。",
    "Rome, Mongol, Byzantine, all of history is just the same.": "罗马、蒙古、拜占庭——历史从无两样。",
    "For man will never change in a fundamental way.": "因为人从根本上永不改变。",
    "And now democracy is dead, in the USA.": "而今民主已死，在美利坚。",
    /* sector-12-crime.lit */
    "A recent study by analytics company Wilson Inc. shows a significant rise in criminal activity in": "分析公司 Wilson Inc. 一项新研究显示，犯罪活动在",
    ". Perhaps the most alarming part of the statistic is that most of the rise is in violent crime such as homicide and assault. According to the study, the city saw a total of 21,406 reported homicides in 2076, which is over a 20% increase compared to 2075.": "出现显著上升。统计数据中最触目惊心的是，涨幅主要来自凶杀与袭击等暴力犯罪。研究显示，该市 2076 年全年记录在案的凶杀案达 21,406 起，较 2075 年增长逾 20%。",
    "CIA director David Glarow says it's too early to know whether these figures indicate the beginning of a sustained increase in crime rates, or whether the year was just an unfortunate outlier. He states that many intelligence and law enforcement agents have noticed an increase in organized crime activities, and believes that these figures may be the result of an uprising from criminal organizations such as": "CIA 局长 David Glarow 表示，现在断言这些数字是否意味着犯罪率将持续走高还为时尚早——也许今年只是一个不幸的例外。他指出许多情报与执法人员已注意到有组织犯罪活动增多，并认为这些数字或许是犯罪组织卷土重来的结果，例如",
    /* man-and-machine.lit */
    "In 2005 Ray Kurzweil popularized his theory of the Singularity. He predicted that the rate of technological advancement would continue to accelerate faster and faster until one day machines would be become infinitely more intelligent than humans. This point, called the Singularity, would result in a drastic transformation of the world as we know it. He predicted that the Singularity would arrive by 2045. And yet here we are, more than three decades later, where most would agree that we have not yet reached a point where computers and machines are vastly more intelligent than we are. So what gives?": "2005 年，Ray Kurzweil 让他的「奇点」理论声名远播。他预言技术进步会越跑越快，直到某天机器比人类聪明无穷倍。这个被称为奇点的时刻，将使我们熟知的世界发生剧变。他预言奇点将在 2045 年前到来。可三十多年过去，我们仍站在这里——大多数人认为，计算机与机器尚未远远超越我们的智力。那么，问题出在哪？",
    "The answer is that we have reached the Singularity, just not in the way we expected. The artificial superintelligence that was predicted by Kurzweil and others exists in the world today - in the form of Augmentations. Yes, those Augmentations that the rich and powerful keep to themselves enable humans to become superintelligent beings. The Singularity did not lead to a world where our machines are infinitely more intelligent than us, it led to a world where man and machine can merge to become something greater. Most of the world just doesn't know it yet.": "答案是：我们确实抵达了奇点，只是方式出乎预料。Kurzweil 等人预言的人工超级智能今天就存在于世间——以义体的形式。是的，那些被富豪权贵据为己有的义体，正把人类变成超级智能的存在。奇点并未带来一个机器智力无穷超越我们的世界，而是带来了人与机器融合、成为更伟大之物的世界。世上大多数人只是还不知情。",
    /* secret-societies.lit */
    "The idea of secret societies has long intrigued the general public by inspiring curiosity, fascination, and distrust. People have long wondered about who these secret society members are and what they do, with the most radical of conspiracy theorists claiming that they control everything in the entire world. And while the world may never know for sure, it is likely that many secret societies do actually exist, even today.": "秘密结社的观念长久以来撩拨着公众——激起好奇、迷恋与不信任。人们不断揣测结社成员是谁、所为何事，最极端的阴谋论者宣称他们操纵着全世界的一切。世人或许永远无从确证，但许多秘密结社很可能确有其事，就在当下。",
    "However, the secret societies of the modern world are nothing like those that (supposedly) existed decades and centuries ago. The Freemasons, Knights Templar, and": "然而，现代的秘密结社与数十年前、数百年前（据称存在的）那些全然不同。共济会、圣殿骑士团与",
    "while they may have been around at the turn of the 21st century, almost assuredly do not exist today. The dominance of the Web in our everyday lives and the fact that so much of the world is now digital has given rise to a new breed of secret societies: Internet-based ones.": "虽在 21 世纪之交或许仍存于世间，如今却几乎可以肯定已不复存在。网络对我们日常生活的支配、以及世界如此深度数字化的事实，催生了新一代秘密结社：以互联网为巢穴的结社。",
    "Commonly called \"hacker groups\", Internet-based secret societies have become well-known in today's world. Some of these, such as": "通称「黑客团体」的互联网秘密结社在当今世界早已声名在外。其中如",
    "are black hat groups that claim they are trying to help the oppressed by attacking the elite and powerful. Others, such as": "属于黑帽阵营，自称通过攻击精英与权贵来帮助被压迫者；另一些如",
    "are hacktivist groups that try to push political and social agendas. Perhaps the most intriguing hacker group is the mysterious": "则是推行政治与社会议程的黑客行动主义团体。也许最耐人寻味的黑客组织，是那个神秘的",
    ", whose purpose still remains unknown.": "，其目的至今成谜。",
    /* the-failed-frontier.lit */
    "Humans have long dreamed about spaceflight. With enduring interest, we were driven to explore the unknown and discover new worlds. We dreamed about conquering the stars. And in our quest, we pushed the boundaries of our scientific limits, and then pushed further. Space exploration lead to the development of many important technologies and new industries.": "人类憧憬航天久矣。怀着持久的热望，我们被驱使着去探索未知、发现新世界，梦想征服星辰。在征途中，我们不断推挤科学极限的边界，然后更进一步。太空探索催生了许多重要技术与新兴产业。",
    "But sometime in the middle of the 21st century, all of that changed. Humanity lost its ambitions and aspirations of exploring the cosmos. The once-large funding for agencies like NASA and the European Space Agency gradually whittled away until their eventual disbanding in the 2060's. Not even militaries are fielding flights into space nowadays. The only remnants of the once great mission for cosmic conquest are the countless satellites in near-earth orbit, used for communications, espionage, and other corporate interests.": "但在 21 世纪中叶的某个时刻，一切都变了。人类失去了探索宇宙的雄心与壮志。NASA 与欧洲空间局这类机构曾经丰厚的拨款被一点点蚕食，直至其 2060 年代最终解散。如今连军方都不再向太空派出飞行器。昔日征服宇宙的伟大使命仅剩的遗存，是近地轨道上数不清的卫星——为通信、间谍活动与其他公司利益服务。",
    "And as we continue to look at the state of space technology, it becomes more and more apparent that we will never return to that golden age of space exploration, that age where everyone dreamed of going beyond earth for the sake of discovery.": "而当我们持续审视太空技术的现状，有一点愈发清晰：我们再也回不到那个太空探索的黄金时代了——那个人人梦想为了发现而超越地球的时代。",
    /* coded-intelligence.lit */
    "Tremendous progress has been made in the field of Artificial Intelligence over the past few decades. Our autonomous vehicles and transportation systems. The electronic personal assistants that control our everyday lives. Medical, service, and manufacturing robots. All of these are examples of how far AI has come and how much it has improved our daily lives. However, the question still remains of whether AI will ever be advanced enough to re-create human intelligence.": "过去几十年，人工智能领域进步斐然。自动驾驶载具与交通系统；左右我们日常生活的电子个人助理；医疗、服务与制造机器人——凡此种种，见证 AI 已走多远、为日常生活增添多少改善。然而问题仍在：AI 是否会先进到足以复现人类智慧。",
    "We've certainly come close to artificial intelligence that is similar to humans. For example,": "我们无疑已逼近与人类相似的人工智慧。例如",
    "'s CompanionBot, a robot meant to act as a comforting friend for lonely and grieving people, is eerily human-like in its appearance, speech, mannerisms, and even movement. However its artificial intelligence isn't the same as that of humans. Not yet. It doesn't have sentience or self-awareness or consciousness.": "的 CompanionBot——一款意在充当孤独悲伤之人贴心伴侣的机器人——其外貌、谈吐、举止乃至动作都拟真得令人发怵。但它的人工智慧与人类的并不相同。至少还不是。它没有感知、没有自我意识、也没有意识。",
    "Many neuroscientists believe that we won't ever reach the point of creating artificial human intelligence. \"At the end of the day, AI comes down to 1's and 0's, while the human brain does not. We'll never see AI that is identical to that of humans.\"": "许多神经科学家相信，我们永远不会抵达创造人工人类智慧的那一步。「说到底，AI 无非是 1 和 0，而人脑不是。我们永远不会见到与人类完全相同的 AI。」",
    /* synthetic-muscles.lit */
    "Initial versions of synthetic muscles weren't made of anything organic but were actually crude devices made to mimic human muscle function. Some of the early iterations were actually made of common materials such as fishing lines and sewing threads due to their high strength for a cheap cost.": "最初版本的人造肌肉不含任何有机成分，实为模拟人体肌肉功能的粗糙装置。一些早期迭代竟是用鱼线、缝纫线这类寻常材料制成——只因它们便宜又结实。",
    "As technology progressed, however, advances in biomedical engineering paved the way for a new method of creating synthetic muscles. Instead of creating something that closely imitated the functionality of human muscle, scientists discovered a way of forcing the human body itself to augment its own muscle tissue using both synthetic and organic materials. This is typically done using gene therapy or chemical injections.": "然而随着技术进步，生物医学工程的突破为制造人造肌肉开辟了新径。科学家不再只是模仿人体肌肉功能的造物，而是发现了让人体自身以合成与有机材料增强肌肉组织的方法。这通常借助基因疗法或化学注射完成。",
    /* tensions-in-tech-race.lit */
    "Have we entered a new Cold War? Is WWIII just beyond the horizon?": "我们是否已步入新一轮冷战？第三次世界大战是否就在地平线那头？",
    "After rumors came out that": "继有传闻称",
    "had begun developing advanced robotic supersoldiers, geopolitical tensions quickly flared between the USA, Russia, and several Asian superpowers. In a rare show of cooperation between corporations,": "已开始研发先进的机械人士兵，美国、俄罗斯与数个亚洲强国之间的地缘政治紧张骤然升温。公司间罕见地展现合作姿态：",
    "have reportedly launched hundreds of new surveillance and espionage satellites. Defense contractors such as": "据报道发射了数百颗新的监视与间谍卫星。防务承包商如",
    "have been working with the CIA and NSA to prepare for conflict. Meanwhile, the rest of the world sits in earnest hoping that it never reaches full-scale war. With today's technology and firepower, a World War would assuredly mean the end of human civilization.": "一直在与 CIA 和 NSA 合作备战。与此同时，世界其余部分只能殷殷祈盼它永远不要升级为全面战争。以今天的科技与火力，一场世界大战必然意味着人类文明的终结。",
  });
  /* ================= 游戏文学 .lit —— Part B ================= */
  BitburnerZH.exact({
    /* 标题 */
    "The Cost of Immortality": "永生的代价",
    "The Hidden World": "隐匿的世界",
    "The New God": "新神",
    "The New Triads": "新三合会",
    "A Brief History of Transhumanism": "超人类主义简史",
    "The Secret War": "秘密战争",
    "Server offline again": "服务器又离线了",
    "Darkweb server rebooted": "darkweb 服务器重启了",
    "Partial Password Jutsu": "半截密码之术",
    "Timing Attack": "时序攻击",
    "Raw Data?": "原始数据？",
    "Dog Name Ideas": "给狗取名的灵感",
    "Factory Default": "出厂默认值",
    "Try the best new thing in web surfing: the Stasis Link!": "试试上网冲浪的最新神器：停滞链路（Stasis Link）！",
    "There's something out there": "外面有东西",
    /* cost-of-immortality.lit */
    "Evolution and advances in medical and augmentation technology has lead to drastic improvements in human mortality rates. Recent figures show that the life expectancy for humans that live in a first-world country is about 130 years of age, almost double of what it was at the turn of the century. However, this increase in average lifespan has had some significant effects on society and culture.": "进化与医疗、增强技术的进步，让人类死亡率大幅改善。最新数据显示，生活在第一世界国家的人预期寿命约 130 岁，几乎是本世纪初的两倍。然而平均寿命的延长，对社会与文化造成了重大影响。",
    "Due to longer lifespans and a better quality of life, many adults are holding off on having kids until much later. As a result, the percentage of youth in first-world countries has been decreasing, while the number of senior citizens is significantly increasing.": "寿命更长、生活品质更高，许多成年人把生育一拖再拖。结果，第一世界国家的青少年占比持续下降，老年人口却显著攀升。",
    "Perhaps the most alarming result of all of this is the rapidly shrinking workforce. Despite the increase in life expectancy, the typical retirement age for workers in America has remained about the same, meaning a larger and larger percentage of people in America are retirees. Furthermore, many young adults are holding off on joining the workforce because they feel that they have plenty of time left in their lives for employment, and want to \"enjoy life while they're young.\" For most industries, this shrinking workforce is not a major issue as most things are handled by robots anyways. However, there are still several key industries such as engineering and education that have not been automated, and these remain in danger to this cultural phenomenon.": "这一切中最令人警醒的，或许是劳动人口的急速萎缩。尽管预期寿命上升，美国劳动者的典型退休年龄却几乎未变，意味着美国有越来越多的人正在退休。此外，许多年轻人迟迟不肯进入职场——他们觉得来日方长，谋生机会多的是，要「趁年轻享受生活」。对多数行业而言，劳动力萎缩并非大问题，反正大多数事都交给机器人打理。但工程与教育等若干关键行业尚未自动化，在这场文化风潮中危如累卵。",
    /* the-hidden-world.lit */
    "WAKE UP SHEEPLE": "醒醒吧，蒙昧的群氓",
    "THE GOVERNMENT DOES NOT EXIST. CORPORATIONS DO NOT RUN SOCIETY": "政府根本不存在。公司也没有主宰社会",
    "ARE THE SECRET RULERS OF THE WORLD!": "才是这世界隐秘的主宰！",
    "Yes, the": "没错，传说中的",
    "of legends. The ancient secret society that controls the entire world from the shadows with their invisible hand. With their personal wealth and skills they have penetrated every major government, financial agency, and corporation in the last three hundred years.": "——那个自暗处以无形之手操控全世界的古老秘密结社。凭借惊人的财富与能力，三百年来他们已渗透每一个重要的政府、金融机构与公司。",
    "OPEN YOUR EYES": "睁开你们的眼睛",
    "It was the": "正是",
    "that brought an end to democracy in the world. They are the driving force behind everything that happens.": "终结了全世界的民主。凡有发生，背后都是他们在推动。",
    "THEY ARE ALL AROUND YOU": "他们就在你周围",
    "After destabilizing the world's governments, they are now entering the final stage of their master plan. They will secretly initiate global crises. Terrorism. Pandemics. World War. And out of the chaos that ensues they will build their New World Order.": "在搞垮世界各国政府之后，他们正迈入总计划的最后阶段。他们将秘密点燃全球危机：恐怖主义。瘟疫。世界大战。而在随之而来的混沌之上，他们将筑起自己的新世界秩序。",
    /* the-new-god.lit */
    "Everyone has a moment in their life when they wonder about the bigger questions.": "每个人的一生中都有那么一些时刻，会思索更宏大的问题。",
    "What's the point of all this? What is my purpose?": "这一切意义何在？我的目的是什么？",
    "Some people dare to think even bigger.": "有些人敢于想得更大。",
    "What will the fate of the human race be?": "人类的命运将会如何？",
    "We live in an era vastly different from that of 15 or even 20 years ago. We have gone beyond the limits of humanity. We have stripped ourselves of the tyranny of flesh.": "我们身处的时代，与十五乃至二十年前已天差地别。我们超越了人类的极限，剥除了血肉的暴政。",
    "The Singularity is here. The merging of man and machine. This is where humanity evolves into something greater. This is our future.": "奇点已至。人与机器融合。人类将在此进化为更伟大的存在。这就是我们的未来。",
    "Embrace it, and you will obey a new god. The God in the Machine.": "拥抱它，你将服从一位新神——机器中的神。",
    /* new-triads.lit */
    "The Triads were an ancient transnational crime syndicate based in China, Hong Kong, and other Asian territories. They were often considered one of the first and biggest criminal secret societies. While most of the branches of the Triads have been destroyed over the past few decades, the crime faction has spawned and inspired a number of other Asian crime organizations over the past few years. The most notable of these is the": "三合会是盘踞中国、香港及其他亚洲地域的古老跨国犯罪辛迪加，常被认为是最早也最大的犯罪秘密结社之一。过去几十年里，三合会的大多数分支已被摧毁，但这个犯罪派系最近几年又衍生、启发了众多其他亚洲犯罪组织。其中最引人注目的是",
    "It is widely believed that the": "人们普遍认为",
    "are a rogue group that splintered off from the Triads sometime in the mid 21st century. The founders of the": "是一支失控的分裂团体，于 21 世纪中叶前后从三合会中独立而出。其创始人",
    ", all of whom were ex-Triad members, believed that the Triads were losing their purpose and direction. The": "皆为前三合会成员，坚信三合会正在丧失目的与方向。",
    "started off as a small group that mainly engaged in fraud and extortion. They were largely unknown until just a few years ago when they took over the illegal drug trade in all of the major Asian cities. They quickly became the most powerful crime syndicate in the continent.": "起初只是主要从事诈骗与敲诈的小团体。直到几年前他们掌控了所有亚洲大城市的非法毒品贸易，才为世人所知。他们迅速成为整个大陆最强大的犯罪辛迪加。",
    "Not much else is known about the": "关于",
    ", or about the efforts the Asian governments and corporations are making to take down this large new crime organization. Many believe that the": "，以及亚洲各国政府与公司为铲除这一庞大新兴犯罪组织所作的种种努力，外界知之甚少。许多人相信",
    "have infiltrated the governments and powerful corporations in Asia, which has helped facilitate their recent rapid rise.": "已渗透进亚洲的政府与权势公司，助推了他们近来火箭般的崛起。",
    /* a-brief-history-of-transhumanism.lit */
    "Human augmentation has come a long way since the first prosthetics and implants. Now any and all parts of the human body are able to be improved by technology: strength, speed, perception, intelligence. A large variety of powerful augmentations have been developed, but for most they may as well not exist. How did things end up like this?": "自第一副假肢与植入体以来，人类增强已走过漫漫长路。如今人体的任何部位皆可由技术改良：力量、速度、感知、智力。种类繁多的强大义体已被研发出来，但对大多数人而言它们形同虚设。事情何以至此？",
    "Part of the answer is, unfortunately, that the exact technology that has allowed us to come so far in human augmentation is also responsible for its great expense and exclusivity.": "不幸的是，部分答案在于：正是让人类增强走到今天的技术，同时造就了它的昂贵与独占。",
    "The early days of human augmentation were plagued with issues. Immunosuppressants were needed to keep people's bodies from rejecting the foreign bodies being implanted, with the body constantly trying to \"restore\" itself to its natural state. On top of that, with the messy nature of biology any replacement for a natural organ would fall short of full functionality. The skeleton doesn't just provide structural support and anchors for muscles; it also helps produce the blood in your body in the marrow. Even the fat in the body is a living organ that produces hormones helping to regulate its activity.": "人类增强的早期问题成堆。免疫抑制剂必不可少——身体总想把自己「恢复」到自然状态，不断排斥植入的外来之物。雪上加霜的是，生物本性繁杂，任何天然器官的替代品都难以完全胜任其功能。骨骼不只是支撑结构、锚定肌肉，骨髓还在为你造血。连脂肪都是活的器官，分泌着帮助调节自身活动的激素。",
    "Thus, the process was limited by the capacity of the human body to accept and deal with these changes. Biology is redundant and flexible, so replacing a few bones won't impact the body's functioning too badly. But every addition and change would add up, ultimately severely limiting the body's capacity for augmentation.": "于是，这一进程的极限就在于人体承受与消化这些变化的能力。生物体冗余而灵活，换掉几根骨头无伤大雅。但每一次添加与改变都会累积，最终严重限制身体可供增强的余地。",
    "Ultimately it was": "最终是",
    "who found a way around this limitation, though only at great expense... They discovered that by using a radical new form of gene therapy to reshape a person's body to not only accommodate but integrate the augmentations into their body at a cellular level, they could completely eliminate the side-effects of augmenting.": "找到了绕开这一限制的办法——尽管代价高昂……他们发现，借助一种激进的新型基因疗法重塑人体，使义体不仅在细胞层面被容纳、更与身体彻底融合，便能完全消除增强带来的副作用。",
    "The downside, of course, is the extreme expense and complexity of the process. Not only must each augment be tailored for its intended recipient and a custom genetic therapy program developed, but to truly avoid any side-effects this program must take into account the interactions between augmentations when multiple are installed. The combinatoric explosion in complexity leads to exponentially increasing costs when more than one augment is installed at the same time. Despite this most still prefer to install as many as possible at once, because in addition the radical transformation their body undergoes leaves them relearning to use their body for weeks or even months afterward.": "当然，其缺点在于过程极端昂贵且复杂。每一具义体不仅要为受植者量身定制、开发专属的基因治疗方案；要真正杜绝副作用，方案还必须兼顾多具义体同时植入时的相互作用。复杂度的组合爆炸，意味着同时植入多具义体时费用呈指数级攀升。即便如此，大多数人仍倾向一次尽可能多装——何况身体经历的剧变，会让他们此后数周乃至数月重新学习如何驾驭自己的身体。",
    "In the end humanity is left with the theoretical capacity to transform themselves to the limits of their imagininations, but the practical reality that the expense of even basic augmentations is beyond 95% of the population.": "最终，人类理论上拥有把自己改造至想象极限的能力，现实却是：连最基础增强的费用，也让 95% 的人口高攀不起。",
    /* darknet-handbook.lit */
    "There is a legend of a powerful augment, known as the": "传说中存在一具强大的义体，人称",
    "\"Red Pill\"": "「Red Pill（红丸）」",
    ", that can only be found deep within the darknet. The mysterious faction": "，唯有深入 darknet 腹地才能寻得。神秘派系",
    "has been searching for it for years, hoping to monopolize it one day.": "多年来一直在寻觅它，盼有朝一日将其独占。",
    "However, the legendary augment is hidden in the depths of a labyrinth. You will need to delve far into the dark in order to find these mysterious servers, and defeat their protections to gain their secret augments.": "然而，传说中的义体藏于迷宫深处。你必须向黑暗极深处潜入，才能找到这些神秘服务器；攻克它们的防护，方能夺得其密藏的义体。",
    "The darknet itself is an extremely unstable network of servers. They will continually shift locations, restart, or even go offline. Some parts of the net are islands that can only be reached by riding on a moving server. In addition, these darknet servers cannot be accessed from a distance: you must build a script that can copy itself - or bring code along from home - in order to progress into the deeper layers of the 'net.": "darknet 本身是一张极不稳定的服务器网络：它们不断迁移位置、重启，甚至离线。网络中有些部分是孤岛，唯有搭乘正在移动的服务器方能抵达。此外，这些 darknet 服务器无法被远程访问：你必须编写一个能够自我复制的脚本——或从 home 随身带上代码——才能向 net 的更深层推进。",
    "You now have permanent access to the Darknet Navigator, allowing exploration of the 'net manually via the UI. But beware: the labyrinths further into the deep are said to only be accessible via script! Do you have the charisma and the scripting skills needed to conquer the dark?": "你现在已永久拥有 Darknet 导航器的访问权，可经由界面手动探索这张 net。但要当心：据说越往深处的迷宫只能经由脚本进入！你具备征服黑暗的魅力与脚本技艺吗？",
    "For more details on the darknet and its API, see the Darknet page under Documentation": "有关 darknet 及其 API 的更多细节，请参阅帮助文档",
    "Advanced.": "进阶下的 Darknet 页面。",
    /* 暗网线索类 .msg/.lit 提示 */
    "I've heard there are valuable .cache files to find out in the dark net.": "听说 dark net 里散落着值钱的 .cache 文件，能挖到多少全看本事。",
    "I ran this .cache file I found and it had crazy stuff in it!": "我运行了捡来的这个 .cache 文件，里面全是惊人的东西！",
    "My scripts went down again when their server went offline. I'll have to do something about that.": "他们的服务器一离线，我的脚本又挂了。我得想个办法治治这个。",
    "Darkweb servers are known to reboot sometimes, requiring scripts to be restarted.": "darkweb 服务器素以偶尔重启出名——重启后脚本得重新跑起来。",
    "There is a type of server that will tell you if you get some parts of the password correct.": "有一类服务器会直接告诉你：密码的某些部分是否猜对了。",
    "I found a server that takes much longer to respond if you get some characters in the password correct.": "我遇到一台服务器：密码里某些字符若猜对，它的响应就会明显变慢。",
    "Some servers only respond with raw binary data. I wonder what each bit represents?": "有些服务器只回应原始二进制数据。不知道每个 bit 各代表什么？",
    "What should I name my dog? Maybe": "我该给狗取个什么名字？不如叫",
    "The factory default is usually one of": "出厂默认值多半是以下之一：",
    "Tired of the server you are on restarting or moving? You need to try our latest networking tool, the Stasis Link!": "受够了脚下这台服务器说重启就重启、说搬家就搬家？你需要试试我们最新的网络神器——停滞链路（Stasis Link）！",
    "If you go deep enough into the dark net, they say there's a lost server out there with special files on it. I wonder how you can get there? It may even be deeper than the airgaps around this IP block...": "据说只要你向 dark net 足够深处潜行，就有一台失落服务器藏在那里，上面存着特别的文件。到底怎样才能抵达那里？它没准比这片 IP 段四周的气隙（airgap）还要深……",
    "If I ever find it, I'll set down a stasis link next to it and charge tickets for admission!": "有朝一日若我真找到它，就在它旁边设一条停滞链路（Stasis Link），然后卖门票收钱！",
  });

  /* 文学中被专名插值拆开的片段（原样匹配，含首尾空格） */
  BitburnerZH.frag({
    ", and": "，以及",
    " and ": "、",
    " or the ": "或",
    "THE ": "要知道，",
    "ILLUMINATI": "光照会",
  });

  /* 含内联代码的整句（stasis-link 广告） */
  BitburnerZH.patterns([
    [/^With the click of a (.+), you, too, can sleep soundly knowing that that server is not gonna go anywhere\.$/, "只要点一下 $1，你也能酣然入睡，笃定那台服务器哪儿也不会去。"],
    [/^Limited time only! While (.+) lasts!$/, "限时供应！趁 $1 仍在生效！"],
  ]);
})();

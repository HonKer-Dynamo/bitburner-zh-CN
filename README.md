# Bitburner 汉化补丁（Steam 版）

让 Steam 版 Bitburner 显示简体中文。游戏界面、终端命令说明、帮助文档、教程、成就全部翻译，约一万条。

**终端帮助汉化截图**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0cf03e1d-9292-4410-8689-196d35ad3dc8" />

**游戏内帮助文档汉化截图**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0c2fe3e4-b20d-461a-8640-5c1870271f08" />


## 如何安装？

1. 到 **[Releases](https://github.com/HonKer-Dynamo/bitburner-zh-CN/releases)** 下载 `Bitburner-zh-CN-3.0.1.zip`
2. 完全退出 Bitburner
3. 解压，把里面的 `resources` 文件夹拖进游戏目录（`bitburner.exe` 所在的那个文件夹），提示覆盖就点"是"
4. 打开游戏，就是中文了

> 找不到游戏目录？Steam 库里右键 Bitburner → 管理 → 浏览本地文件

**只支持 3.0.1 版**。不确定版本的话：游戏目录 → `resources\app\package.json`，用记事本打开看 `"version"` 是不是 `3.0.1`。

## 如何卸载？

Steam 库里右键 Bitburner → 属性 → 已安装文件 → **验证游戏文件完整性**，游戏自动还原成英文。

## 几件事说清楚

- 终端命令（`hack`、`run`、`scan`）、写脚本用的函数名、服务器名字**故意保留英文**——因为网上所有攻略和教程都这么写，全译反而没法对着查
- 没翻译到的地方就保持英文原样，不会瞎翻
- 不碰游戏本体代码：存档、成就、Steam 云完全不受影响

## 有意见就提

翻错了、翻得别扭的，开个 issue 带截图即可。想自己改词条：汉化文本都在游戏目录 `resources\app\dist\zh-locale\` 里，纯文本记事本就能改，重启游戏生效。

## 许可

Bitburner 本体是 MIT 开源软件。本补丁翻译文本 CC BY-NC 4.0（随便用、署名、别商用）。非官方民间汉化。

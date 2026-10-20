/* eslint-disable @typescript-eslint/no-var-requires */
const { app, Menu, dialog, shell } = require("electron");
const log = require("electron-log");
const Store = require("electron-store");
const utils = require("./utils");
const storage = require("./storage");
const store = new Store();
const { steamworksClient } = require("./steamworksUtils");

/** @import {LogLevel} from "electron-log" */
/**
 * @param {*} window
 * @param {"file-log-level" | "console-log-level"} configKey
 * @param {LogLevel} logLevel
 * @returns {*}
 */
function createLogLevelMenuItem(window, configKey, logLevel) {
  return {
    label: logLevel,
    type: "checkbox",
    checked: store.get(configKey) === logLevel,
    click: () => {
      if (configKey === "file-log-level") {
        log.transports.file.level = logLevel;
      } else {
        log.transports.console.level = logLevel;
      }
      store.set(configKey, logLevel);
      refreshMenu(window);
    },
  };
}

function getMenu(window) {
  const canZoomIn = utils.getZoomFactor() <= 2;
  const zoomIn = () => {
    const currentZoom = utils.getZoomFactor();
    const newZoom = currentZoom + 0.1;
    if (newZoom <= 2.0) {
      utils.setZoomFactor(window, newZoom);
      refreshMenu(window);
    } else {
      log.log("Max zoom out");
      utils.writeToast(window, "无法继续放大", "warning");
    }
  };

  const canZoomOut = utils.getZoomFactor() >= 0.5;
  const zoomOut = () => {
    const currentZoom = utils.getZoomFactor();
    const newZoom = currentZoom - 0.1;
    if (newZoom >= 0.5) {
      utils.setZoomFactor(window, newZoom);
      refreshMenu(window);
    } else {
      log.log("Max zoom in");
      utils.writeToast(window, "无法继续缩小", "warning");
    }
  };

  const canResetZoom = utils.getZoomFactor() !== 1;
  const resetZoom = () => {
    utils.setZoomFactor(window, 1);
    refreshMenu(window);
    log.log("Reset zoom");
  };

  return Menu.buildFromTemplate([
    {
      label: "文件",
      submenu: [
        {
          label: "保存游戏",
          click: () => window.webContents.send("trigger-save"),
        },
        {
          label: "导出存档",
          click: () => window.webContents.send("trigger-game-export"),
        },
        {
          label: "导出脚本",
          click: () => window.webContents.send("trigger-scripts-export"),
        },
        {
          type: "separator",
        },
        {
          label: "载入最近存档",
          click: async () => {
            try {
              const saveGame = await storage.loadLastFromDisk(window);
              window.webContents.send("push-save-request", { save: saveGame });
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "无法从磁盘载入最近存档", "error", 5000);
            }
          },
        },
        {
          label: "从文件载入",
          click: async () => {
            const defaultPath = storage.getSaveFolder(window);
            const result = await dialog.showOpenDialog(window, {
              title: "从文件载入",
              defaultPath: defaultPath,
              buttonLabel: "载入",
              filters: [
                { name: "游戏存档", extensions: ["json", "json.gz", "txt"] },
                { name: "所有文件", extensions: ["*"] },
              ],
              properties: ["openFile", "dontAddToRecent"],
            });
            if (result.canceled) return;
            const file = result.filePaths[0];

            try {
              const saveGame = await storage.loadFileFromDisk(file);
              window.webContents.send("push-save-request", { save: saveGame });
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "无法从磁盘载入存档", "error", 5000);
            }
          },
        },
        {
          label: "从 Steam 云载入",
          enabled: storage.isCloudEnabled(),
          click: async () => {
            try {
              const saveData = await storage.getSteamCloudSaveData();
              storage.pushSaveGameForImport(window, saveData, false);
            } catch (error) {
              log.error(error);
              utils.writeToast(window, "无法从 Steam 云载入", "error", 5000);
            }
          },
        },
        {
          type: "separator",
        },
        {
          label: "自动保存到磁盘",
          type: "checkbox",
          checked: storage.isAutosaveEnabled(),
          click: (menuItem) => {
            storage.setAutosaveConfig(menuItem.checked);
            utils.writeToast(window, menuItem.checked ? "已启用自动保存到磁盘" : "已禁用自动保存到磁盘", "info", 5000);
            refreshMenu(window);
          },
        },
        {
          label: "自动保存到 Steam 云",
          type: "checkbox",
          enabled: steamworksClient !== undefined,
          checked: storage.isCloudEnabled(),
          click: (menuItem) => {
            storage.setCloudEnabledConfig(menuItem.checked);
            utils.writeToast(
              window,
              menuItem.checked ? "已启用自动保存到 Steam 云" : "已禁用自动保存到 Steam 云",
              "info",
              5000,
            );
            refreshMenu(window);
          },
        },
        {
          label: "启动时恢复最新存档",
          type: "checkbox",
          checked: store.get("onload-restore-newest", true),
          click: (menuItem) => {
            store.set("onload-restore-newest", menuItem.checked);
            utils.writeToast(
              window,
              menuItem.checked ? "已启用启动时恢复最新存档" : "已禁用启动时恢复最新存档",
              "info",
              5000,
            );
            refreshMenu(window);
          },
        },
        {
          type: "separator",
        },
        {
          label: "打开目录",
          submenu: [
            {
              label: "打开游戏目录",
              click: () => shell.openPath(app.getAppPath()),
            },
            {
              label: "打开存档目录",
              click: () => {
                const path = storage.getSaveFolder(window);
                shell.openPath(path);
              },
            },
            {
              label: "打开日志目录",
              click: () => shell.openPath(app.getPath("logs")),
            },
            {
              label: "打开数据目录",
              click: () => shell.openPath(app.getPath("userData")),
            },
          ],
        },
        {
          type: "separator",
        },
        {
          label: "退出",
          click: () => app.quit(),
        },
      ],
    },
    {
      label: "编辑",
      submenu: [
        { label: "撤销", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "重做", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "剪切", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "复制", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "粘贴", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "全选", accelerator: "CmdOrCtrl+A", selector: "selectAll:" },
      ],
    },
    {
      label: "视图",
      submenu: [
        {
          label: "全屏",
          accelerator: "f9",
          click: (() => {
            let full = false;
            return () => {
              full = !full;
              window.setFullScreen(full);
            };
          })(),
        },
        {
          type: "separator",
        },
        {
          label: "放大",
          enabled: canZoomIn,
          accelerator: "CommandOrControl+numadd",
          click: zoomIn,
        },
        {
          label: "放大（非小键盘）",
          enabled: canZoomIn,
          visible: false,
          accelerator: "CommandOrControl+Plus",
          acceleratorWorksWhenHidden: true,
          click: zoomIn,
        },
        {
          label: "缩小",
          enabled: canZoomOut,
          accelerator: "CommandOrControl+numsub",
          click: zoomOut,
        },
        {
          label: "缩小（非小键盘）",
          enabled: canZoomOut,
          accelerator: "CommandOrControl+-",
          visible: false,
          acceleratorWorksWhenHidden: true,
          click: zoomOut,
        },
        {
          label: "重置缩放",
          enabled: canResetZoom,
          accelerator: "CommandOrControl+num0",
          click: resetZoom,
        },
        {
          label: "重置缩放（非小键盘）",
          enabled: canResetZoom,
          accelerator: "CommandOrControl+0",
          visible: false,
          acceleratorWorksWhenHidden: true,
          click: resetZoom,
        },
        {
          type: "separator",
        },
        {
          label: "自动隐藏顶部菜单",
          type: "checkbox",
          checked: storage.isMenuHideEnabled(),
          click: (menuItem) => {
            storage.setMenuHideConfig(menuItem.checked);
            window.setAutoHideMenuBar(menuItem.checked);
            if (menuItem.checked) {
              window.setMenuBarVisibility(false);
            } else {
              window.setMenuBarVisibility(true);
            }
            refreshMenu(window);
          },
        },
      ],
    },
    {
      label: "重新加载",
      submenu: [
        {
          label: "重新加载",
          accelerator: "f5",
          click: () => window.loadFile("index.html"),
        },
        {
          label: "重新加载并终止所有脚本",
          click: () => utils.reloadAndKill(window, true),
        },
      ],
    },
    {
      label: "调试",
      submenu: [
        {
          label: "文件日志级别",
          submenu: [
            createLogLevelMenuItem(window, "file-log-level", "error"),
            createLogLevelMenuItem(window, "file-log-level", "warn"),
            createLogLevelMenuItem(window, "file-log-level", "info"),
            createLogLevelMenuItem(window, "file-log-level", "verbose"),
            createLogLevelMenuItem(window, "file-log-level", "debug"),
            createLogLevelMenuItem(window, "file-log-level", "silly"),
          ],
        },
        {
          label: "控制台日志级别",
          submenu: [
            createLogLevelMenuItem(window, "console-log-level", "error"),
            createLogLevelMenuItem(window, "console-log-level", "warn"),
            createLogLevelMenuItem(window, "console-log-level", "info"),
            createLogLevelMenuItem(window, "console-log-level", "verbose"),
            createLogLevelMenuItem(window, "console-log-level", "debug"),
            createLogLevelMenuItem(window, "console-log-level", "silly"),
          ],
        },
        {
          type: "separator",
        },
        {
          label: "激活",
          accelerator: "f12",
          click: () => window.webContents.openDevTools(),
        },
        {
          label: "删除 Steam 云数据",
          enabled: steamworksClient !== undefined,
          click: () => {
            if (steamworksClient === undefined || steamworksClient.cloud.listFiles().length === 0) {
              log.info("There is no Steam cloud file");
              return;
            }
            try {
              storage.deleteCloudFiles();
            } catch (error) {
              log.error(error);
            }
          },
        },
      ],
    },
  ]);
}

function refreshMenu(window) {
  Menu.setApplicationMenu(getMenu(window));
}

module.exports = {
  getMenu,
  refreshMenu,
};

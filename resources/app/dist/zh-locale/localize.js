/*
 * Bitburner 汉化运行时引擎（DOM 层翻译）
 * ------------------------------------------------------------------
 * 该脚本在 index.html 中先于游戏 bundle 执行：
 *   1. 暴露 window.BitburnerZH 注册 API，供 zh/dict-*.js 字典文件填充词条；
 *   2. 用 MutationObserver 监听整个界面，把英文文本节点替换为中文；
 *   3. 绝不修改游戏逻辑、数据、输入框、代码编辑器与用户脚本内容。
 *
 * 设计原则：字典未命中时保持原文（优雅降级），任何异常都被捕获，
 * 保证游戏本体不受影响。
 */
(function () {
  "use strict";

  /* ---------------- 词典存储 ---------------- */
  // 归一化精确匹配：key = 折叠空白并 trim 后的英文原文
  var EXACT = new Map();
  // 原样匹配（保留首尾空格）：用于 JSX 拆分出的文本片段，如 "You have "
  var RAW = new Map();
  // 正则模式：[RegExp, 替换模板(支持 $1..$9)]
  var PATTERNS = [];
  // 名称类词条：对任意文本做"带边界"的子串替换（模式输出中的派系/公司/义体/城市名等）
  var NAME_RAW = [];      // [英文名单元, 译文]
  var NAME_COMPILED = []; // [RegExp, 译文]，长名优先编译，避免短名截断长名
  // 额外跳过选择器（字典文件可追加）
  var EXTRA_SKIP = [];

  function normKey(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  var api = {
    /** 注册精确词条（大小写敏感）。key 会做空白归一化。 */
    exact: function (obj) {
      for (var k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
          var nk = normKey(k);
          if (nk) EXACT.set(nk, obj[k]);
        }
      }
    },
    /** 注册原样片段词条（保留首尾空格），用于被 JSX 拆分的文本节点。 */
    frag: function (obj) {
      for (var k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k) && k) {
          RAW.set(k, obj[k]);
        }
      }
    },
    /** 注册正则模式，replacement 支持 $1 捕获组。 */
    pattern: function (re, replacement) {
      if (re instanceof RegExp) PATTERNS.push([re, replacement]);
    },
    /** 批量注册模式：[[re, tpl], ...] */
    patterns: function (list) {
      for (var i = 0; i < list.length; i++) api.pattern(list[i][0], list[i][1]);
    },
    /** 注册名称类词条（句中内嵌替换，带词边界；用于派系/公司/义体/城市/BN 等专名）。 */
    names: function (obj) {
      for (var k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k) && k) NAME_RAW.push([k, obj[k]]);
      }
      compileNames();
    },
    /** 追加跳过翻译的 CSS 选择器（其子树完全不翻译）。 */
    skip: function (selector) {
      if (typeof selector === "string") EXTRA_SKIP.push(selector);
    },
    /** 统计信息，便于调试覆盖率。 */
    stats: function () {
      return { exact: EXACT.size, frag: RAW.size, patterns: PATTERNS.length, names: NAME_COMPILED.length };
    },
  };
  window.BitburnerZH = api;

  /* ---------------- 跳过区域 ---------------- */
  var SKIP_TAGS = {
    SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1,
    NOSCRIPT: 1, CANVAS: 1, SVG: 1, IFRAME: 1, TITLE: 1,
  };
  // 注：PRE 不整体跳过。文档代码块是 <pre><code>，由 CODE 拦截；
  // PromptManager 确认框是纯 <pre>，需要翻译。含换行节点会逐行匹配。
  var BASE_SKIP = ".monaco-editor, .monaco-editor *, [contenteditable], .xterm, .xterm *";

  function inSkipZone(node) {
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el) return false;
    for (var p = el; p; p = p.parentElement) {
      if (SKIP_TAGS[p.tagName]) return true;
    }
    try {
      var sel = BASE_SKIP + (EXTRA_SKIP.length ? ", " + EXTRA_SKIP.join(", ") : "");
      if (el.closest(sel)) return true;
    } catch (e) { /* 选择器异常则不跳过 */ }
    return false;
  }

  /* ---------------- 查找翻译 ---------------- */
  function findTranslation(raw) {
    if (!raw) return null;
    // 必须包含拉丁字母才值得翻译
    if (!/[A-Za-z]/.test(raw)) return null;

    var v = RAW.get(raw);
    if (v !== undefined) return v;

    var lead = raw.match(/^\s+/);
    var trail = raw.match(/\s+$/);
    var key = normKey(raw);
    if (!key) return null;

    v = EXACT.get(key);
    if (v !== undefined) {
      return (lead ? lead[0] : "") + v + (trail ? trail[0] : "");
    }

    for (var i = 0; i < PATTERNS.length; i++) {
      var re = PATTERNS[i][0];
      re.lastIndex = 0;
      if (re.test(key)) {
        var out = key.replace(re, PATTERNS[i][1]);
        if (out !== key) return (lead ? lead[0] : "") + out + (trail ? trail[0] : "");
      }
    }
    return null;
  }

  /* ---------------- 名称内嵌替换 ---------------- */
  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function compileNames() {
    NAME_RAW.sort(function (a, b) { return b[0].length - a[0].length; });
    NAME_COMPILED = NAME_RAW.map(function (e) {
      // 词边界：前后不能是字母/数字/._-/（保护文件名、主机名、连字符服务器名）
      return [new RegExp("(?<![A-Za-z0-9._/-])" + escRe(e[0]) + "(?![A-Za-z0-9._/-])", "g"), e[1]];
    });
  }
  function replaceNames(s) {
    if (!s || NAME_COMPILED.length === 0 || !/[A-Za-z]/.test(s)) return s;
    for (var i = 0; i < NAME_COMPILED.length; i++) {
      var entry = NAME_COMPILED[i];
      var v = entry[1];
      s = s.replace(entry[0], function () { return v; });
    }
    return s;
  }

  /* ---------------- 应用翻译 ---------------- */
  var done = new WeakSet();      // 已处理且无需再处理的文本节点
  var lastOut = new WeakMap();   // 节点 -> 上次写入的译文（用于幂等判断）

  function handleText(node) {
    try {
      var cur = node.nodeValue;
      if (cur === null || cur === undefined) return;
      if (done.has(node) && lastOut.get(node) === cur) return;
      if (inSkipZone(node)) return;

      var out;
      if (cur.indexOf("\n") !== -1) {
        // 多行节点（单条 print 含换行 / pre 确认框）：逐行翻译+名称替换后重组
        var lines = cur.split("\n");
        var changed = false;
        for (var li = 0; li < lines.length; li++) {
          var lt = findTranslation(lines[li]);
          var namedLine = replaceNames(lt !== null ? lt : lines[li]);
          if (namedLine !== lines[li]) { lines[li] = namedLine; changed = true; }
        }
        out = changed ? lines.join("\n") : null;
      } else {
        var t1 = findTranslation(cur);
        out = replaceNames(t1 !== null ? t1 : cur);
        if (out === cur) out = null;
      }

      if (out !== null && out !== cur) {
        lastOut.set(node, out);
        node.nodeValue = out;
        done.add(node);
      } else {
        lastOut.set(node, cur);
        done.add(node);
      }
    } catch (e) { /* 单节点失败不影响整体 */ }
  }

  var ATTRS = ["title", "placeholder", "aria-label", "aria-description"];
  function handleAttrs(el) {
    try {
      for (var i = 0; i < ATTRS.length; i++) {
        var a = ATTRS[i];
        if (!el.hasAttribute || !el.hasAttribute(a)) continue;
        var cur = el.getAttribute(a);
        var t = findTranslation(cur);
        var named = replaceNames(t !== null ? t : cur);
        if (named !== cur) el.setAttribute(a, named);
      }
    } catch (e) { /* ignore */ }
  }

  function walk(root) {
    try {
      if (root.nodeType === 3) { handleText(root); return; }
      if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
      if (root.nodeType === 1) {
        if (inSkipZone(root)) return;
        handleAttrs(root);
      }
      var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
      var n;
      while ((n = tw.nextNode())) {
        if (n.nodeType === 3) {
          if (!inSkipZone(n)) handleText(n);
        } else {
          handleAttrs(n);
        }
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------------- 观察与调度 ---------------- */
  var pending = new Set();
  var scheduled = false;

  function flush() {
    scheduled = false;
    if (pending.size === 0) return;
    var nodes = Array.from(pending);
    pending.clear();
    for (var i = 0; i < nodes.length; i++) walk(nodes[i]);
  }

  function schedule(node) {
    pending.add(node);
    if (!scheduled) {
      scheduled = true;
      // 微任务批量处理，避免高频终端输出时逐节点抖动
      Promise.resolve().then(flush);
    }
  }

  var observer = new MutationObserver(function (muts) {
    try {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "characterData") {
          // 文本被 React 改写：清除幂等标记重新评估
          var tn = m.target;
          done.delete(tn);
          schedule(tn);
        } else if (m.type === "attributes") {
          if (m.target.nodeType === 1) handleAttrs(m.target);
        } else {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var n = m.addedNodes[j];
            if (n.nodeType === 1 || n.nodeType === 3 || n.nodeType === 11) schedule(n);
          }
        }
      }
    } catch (e) { /* ignore */ }
  });

  function start() {
    try {
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ATTRS,
      });
      walk(document.body);
      // 兜底：低频全量扫描（React 属性改写或极端场景的保险）
      setInterval(function () {
        try { walk(document.body); } catch (e) { /* ignore */ }
      }, 4000);
    } catch (e) {
      try { console.error("[zh-localize] start failed:", e); } catch (_) { /* ignore */ }
    }
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();

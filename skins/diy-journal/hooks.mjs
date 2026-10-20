/**
 * diy-journal skin hooks —— v2 皮肤契约的逃生舱入口
 *   export default defineSkinHooks() → { apply(ctx) }
 * 它只做一件事：把运行时状态投影成 DOM 属性（data-cg-*），视觉全部在 patches.css 里。
 * 与 assets/state-projector.js 是同一套逻辑：
 *   · 本地自用（手工放置的皮肤）走不到 hooks（皮肤中心只信任 builtin 与逐字节校验的市场皮肤），
 *     所以本机是 bundle 引导块加载 state-projector.js；
 *   · 市场安装后由皮肤中心调用本文件。
 * 两者靠 window.__cgStateBooted 互斥，绝不会双跑。
 */
export default function defineSkinHooks() {
  return {
    apply(ctx) {
      const SKIN = 'diy-journal';
        const root = document.documentElement;
        const isOurs = () => root.getAttribute('data-dsh-skin') === SKIN;

        const ROW_SEL = '[role="treeitem"], [class*="projectRow"], [class*="sessionRow"], [class*="chatRow"], [class*="threadRow"]';
        const SEL_RE = /(^|[_\- ])(active|selected|current|focus|chosen)([_\- ]|$)/i;
        const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
        const EXCLUDE = 'header, [class*="titlebar"], [class*="brand"], [class*="menu"], [class*="logo"]';
        const SVG_NS = 'http://www.w3.org/2000/svg';

        let activeRow = null;
        let targetKey = null;
        let lastScore = -1;
        let lastScoreAt = 0;

        /* ---------- 基础查询 ---------- */
        const allRows = () => [...document.querySelectorAll(ROW_SEL)].filter((r) => r.offsetParent !== null);
        const isWorkspaceRow = (r) =>
          /projectRow|workspaceRow/i.test(r.className || '') || !!r.querySelector('[class*="folder"], [class*="Folder"]');
        const convRows = () => allRows().filter((r) => !isWorkspaceRow(r));
        const keyOf = (r) => r.getAttribute('data-row-key') || r.getAttribute('data-session-id') || (r.textContent || '').trim().slice(0, 40);
        const hasConversationContent = () =>
          root.hasAttribute('data-dsh-conversation-content') || document.body.hasAttribute('data-dsh-conversation-content');
        const painted = (s) =>
          (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') ||
          (s.backgroundImage && s.backgroundImage !== 'none') || (s.boxShadow && s.boxShadow !== 'none');
        const hovered = (row) => { try { return row.matches(':hover'); } catch { return false; } };

        function selectedFlag(row) {
          if (row.getAttribute('aria-selected') === 'true' || row.getAttribute('aria-current')) return true;
          if (row.getAttribute('data-active') === 'true' || row.getAttribute('data-selected') === 'true') return true;
          if (SEL_RE.test(row.className || '')) return true;
          return [...row.querySelectorAll('*')].some((el) => SEL_RE.test(el.className || ''));
        }

        function score(row) {
          if (hovered(row)) return -1;
          let n = 0;
          const bump = (el) => { if (painted(getComputedStyle(el))) n += 2; };
          bump(row);
          row.querySelectorAll('*').forEach(bump);
          for (const ps of ['::before', '::after']) {
            const s = getComputedStyle(row, ps);
            if (painted(s)) n += 2;
            if (s.content && s.content !== 'none' && s.content !== 'normal' && s.content !== '""') n += 1;
          }
          return n;
        }

        /* ---------- 当前对话行：沿用实测过的判定链 ---------- */
        function byExplicit() {
          const conv = convRows();
          if (!conv.length) return null;
          if (window.__cgPin) {
            const hit = conv.filter((r) => r.textContent.includes(String(window.__cgPin)));
            return hit.find(selectedFlag) || hit[hit.length - 1] || null;
          }
          const flagged = conv.filter(selectedFlag);
          return flagged.length === 1 ? flagged[0] : null;
        }

        function bySessionId() {
          const conv = convRows();
          if (!conv.length) return null;
          let id = null;
          const m = (location.hash + location.pathname + location.search).match(UUID_RE);
          if (m) id = m[0].toLowerCase();
          if (!id) {
            for (const sel of ['[data-session-id]', '[data-conversation-id]']) {
              const el = document.querySelector(sel);
              const v = el && (el.getAttribute('data-session-id') || el.getAttribute('data-conversation-id'));
              if (v && UUID_RE.test(v)) { id = v.toLowerCase(); break; }
            }
          }
          if (!id) return null;
          return conv.find((r) => ((r.getAttribute('data-row-key') || '') + ' ' + (r.getAttribute('data-session-id') || '')).toLowerCase().includes(id)) || null;
        }

        const bySticky = () => (targetKey ? convRows().find((r) => keyOf(r) === targetKey) || null : null);

        let lastRowSig = null;
        const rowSignature = () => convRows().map(keyOf).join('|') + '#' + (hasConversationContent() ? '1' : '0');

        function byScore(now) {
          if (activeRow && activeRow.isConnected && now - lastScoreAt < 1500) return activeRow;
          /* 行集合没变就不重扫 —— 评分为每行每个后代各调两次 getComputedStyle，
             流式输出期间会被频繁触发，是"切/跑起来卡一下"的第二个来源。 */
          const sig = rowSignature();
          if (sig === lastRowSig && activeRow && activeRow.isConnected) return activeRow;
          lastRowSig = sig;
          lastScoreAt = now;
          const conv = convRows();
          if (!conv.length) return null;
          const scored = conv.map((r) => ({ r, n: score(r) })).filter((s) => s.n >= 0);
          if (!scored.length) return null;
          const max = Math.max(...scored.map((s) => s.n));
          if (max <= 0) return null;
          const top = scored.filter((s) => s.n === max);
          if (top.length !== 1) return null;
          const next = top[0].r;
          if (activeRow && activeRow.isConnected && next !== activeRow && score(next) < lastScore + 2) return activeRow;
          lastScore = score(next);
          return next;
        }

        function computeActiveRow() {
          const explicit = byExplicit();
          const row = explicit || bySessionId();
          if (row) { targetKey = keyOf(row); return row; }
          if (!hasConversationContent()) { targetKey = null; return null; }   // 新会话/空会话：不标记任何行
          const sticky = bySticky();
          if (sticky) return sticky;
          return byScore(Date.now());
        }

        /* ---------- 进行中指示器：SVG 转圈 → 它的 HTML 宿主 ---------- */
        function computeSpins() {
          const out = new Map();
          document.querySelectorAll('svg, svg *').forEach((el) => {
            if (!(el instanceof SVGElement)) return;
            if (el.closest(EXCLUDE)) return;
            const s = getComputedStyle(el);
            const name = s.animationName || 'none';
            if (name === 'none' || !/spin|rotate|loading|progress/i.test(name)) return;
            if ((parseFloat(s.animationDuration) || 0) <= 0) return;
            if (!String(s.animationIterationCount || '').includes('infinite')) return;
            const r = el.getBoundingClientRect();
            if (r.width < 6 || r.height < 6 || r.width > 44 || r.height > 44) return;
            let host = el.closest('svg') || el;
            while (host && host.namespaceURI === SVG_NS) host = host.parentElement;
            if (!host) return;
            const row = el.closest(ROW_SEL);
            out.set(host, row && row === activeRow ? 'gold' : 'blue');
          });
          return out;
        }

        /* ---------- 写入（只在变化时动 DOM） ---------- */
        const mark = (el, attr, val) => { if (el.getAttribute(attr) !== val) el.setAttribute(attr, val); };

        function clearMarks() {
          document.querySelectorAll('[data-cg-active], [data-cg-spin]').forEach((el) => {
            el.removeAttribute('data-cg-active');
            el.removeAttribute('data-cg-spin');
          });
          window.__cgProjected = { active: null, spins: 0 };
        }


        function evaluate() {
          if (window.__cgOff || !isOurs()) { clearMarks(); return; }

          activeRow = computeActiveRow();
          document.querySelectorAll('[data-cg-active]').forEach((el) => { if (el !== activeRow) el.removeAttribute('data-cg-active'); });
          if (activeRow) mark(activeRow, 'data-cg-active', '1');   // 只打属性：绝不增删节点

          const spins = computeSpins();
          document.querySelectorAll('[data-cg-spin]').forEach((el) => { if (!spins.has(el)) el.removeAttribute('data-cg-spin'); });
          spins.forEach((color, el) => mark(el, 'data-cg-spin', color));

          /* 该行正在跑 → 静态标记让位（CSS 用 :has 处理，这里只记录状态供排查） */
          window.__cgProjected = {
            active: activeRow ? (activeRow.getAttribute('data-row-key') || keyOf(activeRow)).slice(0, 48) : null,
            spins: spins.size,
            colors: [...spins.values()],
          };
        }

        /* ---------- 调度：观察 + rAF 合并（无轮询） ---------- */
        let pending = false;
        let lastRun = 0;
        function schedule() {
          if (pending) return;
          pending = true;
          requestAnimationFrame(() => {
            pending = false;
            const now = Date.now();
            if (now - lastRun < 200) { schedule(); return; }   // 合并高频变化
            lastRun = now;
            try { evaluate(); } catch (err) { console.warn('[cg-state] evaluate 失败:', err); }
          });
        }

        function boot() {
          if (window.__cgStateBooted) return;
          window.__cgStateBooted = true;
          evaluate();
          window.__cgObs = new MutationObserver((records) => {
            /* 忽略我们自己写的 data-cg-* 属性，否则会自激（自己改 → 自己观察 → 再改） */
            if (records.every((r) => r.type === 'attributes' && (r.attributeName || '').startsWith('data-cg-'))) return;
            schedule();
          });
          window.__cgObs.observe(root, { subtree: true, childList: true, attributes: true });
          window.addEventListener('resize', schedule, { passive: true });
          const safety = setInterval(schedule, 2000);
          ctx.onCleanup(() => clearInterval(safety));                        // 安全网：只为兜底，不是主机制
          void ctx;
          window.__cgState = () => ({ projected: window.__cgProjected, off: !!window.__cgOff, pin: window.__cgPin || null });
          console.log('[cg-state] 状态投影器已挂载（观察式，无轮询）。查看状态：window.__cgState()');
        }

        boot();
        ctx.onCleanup(() => {
          window.__cgOff = true;
          if (window.__cgObs) { window.__cgObs.disconnect(); window.__cgObs = null; }
          clearMarks();
        });
    },
    dispose() {
      window.__cgOff = true;
      if (window.__cgObs) { window.__cgObs.disconnect(); window.__cgObs = null; }
    },
  };
}

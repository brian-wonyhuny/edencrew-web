/**
 * luum-sidebar.js — 공통 사이드바 (로고 헤더 + 테마 하단)
 * 사용법:
 *   LuumSidebar.init('#sidebar-id', { foldable: bool, showUser: bool, userName: '...', userEmail: '...' })
 */
(function (global) {
  'use strict';

  /* ── SVG assets ── */
  const LOGO = `<svg class="lsb-logo" width="68" height="12" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="location.href='luum-index.html'" style="cursor:pointer;flex-shrink:0">
    <path class="ll" fill="#111827" d="M0 8.544V0H2.4V8.544H0ZM1.956 8.544V6.504H5.952V8.544H1.956Z"/>
    <path fill="#8361FF" d="M15.922 8.688c-.752 0-1.408-.152-1.968-.456-.56-.312-.996-.74-1.308-1.284C12.334 6.404 12.178 5.78 12.178 5.076V0h2.4v5.292c0 .272.06.504.18.696.12.192.28.34.48.444.208.096.436.144.684.144.256 0 .48-.048.672-.144.2-.096.356-.24.468-.424.112-.192.168-.424.168-.692V0h2.412v5.088c0 .704-.156 1.328-.468 1.872-.304.536-.736.96-1.296 1.272-.552.304-1.204.456-1.956.456Z"/>
    <path fill="#8361FF" d="M30.249 8.688c-.752 0-1.408-.152-1.968-.456-.56-.312-.996-.74-1.308-1.284-.312-.544-.468-1.168-.468-1.872V0h2.4v5.292c0 .272.06.504.18.696.12.192.28.34.48.444.208.096.436.144.684.144.256 0 .48-.048.672-.144.2-.096.356-.24.468-.424.112-.192.168-.424.168-.692V0h2.412v5.088c0 .704-.156 1.328-.468 1.872-.304.536-.736.96-1.296 1.272-.552.304-1.204.456-1.956.456Z"/>
    <path class="lm" fill="#111827" d="M40.987 8.544V0h1.74l3.18 4.656h-.756L48.319 0h1.74v8.544H47.683V3.936l.348.096-1.74 2.496h-1.536L43.027 4.032l.336-.096v4.608H40.987Z"/>
  </svg>`;

  const FOLD_BTN = `<button class="lsb-tog" id="lsb-fold-btn" onclick="LuumSidebar.toggleFold()" title="사이드바 접기">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
  </button>`;

  const THEME_BTNS = `
    <button class="lsb-tt-btn" data-tt="light" onclick="LuumSidebar.applyTheme('light')" title="라이트">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    </button>
    <button class="lsb-tt-btn" data-tt="system" onclick="LuumSidebar.applyTheme('system')" title="시스템">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    </button>
    <button class="lsb-tt-btn" data-tt="dark" onclick="LuumSidebar.applyTheme('dark')" title="다크">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>`;

  /* ── Shared CSS ── */
  const CSS = `
/* ── Luum Shared Sidebar ── */
.lsb-ws {
  height: 52px; flex-shrink: 0;
  display: flex; align-items: center; gap: 8px; padding: 0 12px;
  overflow: hidden; white-space: nowrap;
}
.lsb-logo path.ll { fill: #111827; }
.lsb-logo path.lm { fill: #111827; }
[data-theme="dark"] .lsb-logo path.ll { fill: #F0EDE8; }
[data-theme="dark"] .lsb-logo path.lm { fill: #F0EDE8; }
.lsb-tog {
  width: 28px; height: 28px; border-radius: 6px;
  border: 1px solid var(--bdr, var(--bd, #E9E8E8));
  background: none; display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--mu, #9CA3AF);
  transition: background .1s, color .1s; flex-shrink: 0; margin-left: auto;
}
.lsb-tog:hover { background: var(--nav-ho-bg, var(--s2, #F3F4F6)); color: var(--tx, var(--wh, #111827)); }
.lsb-bot {
  flex-shrink: 0; padding: 8px;
  display: flex; flex-direction: column; gap: 3px;
}
.lsb-user {
  background: var(--fa, var(--s2, #F9FAFB));
  border-radius: 8px; border: 1px solid var(--bdr, var(--bd, #E9E8E8));
  padding: 10px 11px; display: flex; align-items: center; gap: 10px;
  cursor: pointer; transition: background .12s, border-color .12s; overflow: hidden;
}
.lsb-user:hover { background: var(--nav-ho-bg, var(--s3, #F3F4F6)); border-color: var(--bdr2, var(--bd2, #D1D5DB)); }
.lsb-av {
  width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #8361FF, #5B3FD4);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600; color: #fff;
}
.lsb-uinfo { display: flex; flex-direction: column; gap: 1px; overflow: hidden; }
.lsb-uname { font-size: 12px; font-weight: 600; color: var(--tx, var(--wh, #111827)); white-space: nowrap; }
.lsb-uemail { font-size: 11px; color: var(--mu, #9CA3AF); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lsb-tf { display: flex; align-items: center; padding: 4px 4px 10px; }
.lsb-th-row {
  display: flex; gap: 1px;
  background: #F3F4F6; border-radius: 6px; padding: 2px; width: 100%;
}
[data-theme="dark"] .lsb-th-row { background: rgba(255,255,255,0.06); }
.lsb-tt-btn {
  flex: 1; height: 32px; border: none; background: none; border-radius: 4px;
  cursor: pointer; color: var(--mu, #9CA3AF);
  display: flex; align-items: center; justify-content: center;
  transition: background .1s, color .1s;
}
.lsb-tt-btn:hover { color: var(--tx, var(--wh, #111827)); }
.lsb-tt-btn.on { background: #FFFFFF; color: var(--tx, var(--wh, #111827)); box-shadow: 0 1px 2px rgba(0,0,0,.1); }
[data-theme="dark"] .lsb-tt-btn.on { background: rgba(255,255,255,0.12); }

/* Collapsed state */
.sidebar.col .lsb-ws { justify-content: center; }
.sidebar.col .lsb-logo { display: none; }
.sidebar.col .lsb-tf { justify-content: center; }
.sidebar.col .lsb-th-row { display: none; }
.sidebar.col .lsb-user { justify-content: center; padding: 10px 0; border: none; background: none; }
.sidebar.col .lsb-uinfo { display: none; }
`;

  /* ── Theme ── */
  function _storedTheme() {
    const s = localStorage.getItem('luum-theme');
    return (s === 'dark' || s === 'light' || s === 'system') ? s : 'light';
  }

  function applyTheme(t) {
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective = t === 'system' ? (sys ? 'dark' : 'light') : t;
    if (effective === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('luum-theme', t);
    document.querySelectorAll('.lsb-tt-btn').forEach(function (btn) {
      btn.classList.toggle('on', btn.dataset.tt === t);
    });
  }

  /* ── Fold ── */
  var _sb = null;
  function toggleFold() {
    if (!_sb) _sb = document.querySelector('.sidebar, aside.sidebar');
    if (!_sb) return;
    var isCol = _sb.classList.toggle('col');
    localStorage.setItem('luum-sb-col', isCol ? '1' : '0');
    var btn = document.getElementById('lsb-fold-btn');
    if (btn) {
      btn.title = isCol ? '사이드바 펼치기' : '사이드바 접기';
    }
  }

  /* ── Init ── */
  function init(selector, opts) {
    opts = opts || {};
    var sb = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!sb) return;
    _sb = sb;

    /* Inject CSS once */
    if (!document.getElementById('luum-sidebar-css')) {
      var style = document.createElement('style');
      style.id = 'luum-sidebar-css';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    var foldable  = opts.foldable  !== undefined ? opts.foldable  : (sb.dataset.foldable  === 'true');
    var showUser  = opts.showUser   !== undefined ? opts.showUser  : (sb.dataset.showUser   === 'true');
    var userName  = opts.userName  || sb.dataset.userName  || 'Brian';
    var userEmail = opts.userEmail || sb.dataset.userEmail || 'brian@edencrew.com';

    /* ── Header ── */
    var ws = document.createElement('div');
    ws.className = 'lsb-ws';
    ws.innerHTML = LOGO + (foldable ? FOLD_BTN : '');
    sb.insertBefore(ws, sb.firstChild);

    /* ── Bottom ── */
    var bot = document.createElement('div');
    bot.className = 'lsb-bot';
    var userHtml = showUser ? `
      <div class="lsb-user" onclick="location.href='luum-login.html'" title="로그아웃">
        <div class="lsb-av">${userName.charAt(0).toUpperCase()}</div>
        <div class="lsb-uinfo">
          <div class="lsb-uname">${userName}</div>
          <div class="lsb-uemail">${userEmail}</div>
        </div>
      </div>` : '';
    bot.innerHTML = userHtml + `<div class="lsb-tf"><div class="lsb-th-row">${THEME_BTNS}</div></div>`;
    sb.appendChild(bot);

    /* Apply saved theme to buttons */
    var t = _storedTheme();
    document.querySelectorAll('.lsb-tt-btn').forEach(function (btn) {
      btn.classList.toggle('on', btn.dataset.tt === t);
    });

    /* Restore fold state */
    if (foldable && localStorage.getItem('luum-sb-col') === '1') {
      sb.classList.add('col');
    }
  }

  global.LuumSidebar = { init: init, applyTheme: applyTheme, toggleFold: toggleFold };
})(window);

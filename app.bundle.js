// KRALI DESIGN v0.11.0 — single-file runtime bundle
(function () {
  const style = document.createElement("style");
  style.textContent = `* { box-sizing: border-box; }

body {
  margin: 0;
  background: #1d1d1d;
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.app { padding: 12px; }

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
}

.brandBlock { min-width: 0; }
.title { font-size: 17px; font-weight: 800; letter-spacing: .5px; }
.sub { margin-top: 2px; font-size: 10px; color: #8f8f8f; line-height: 1.25; }

.topActions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.version { font-size: 10px; color: #868686; }

section {
  padding: 12px;
  margin-bottom: 9px;
  border-radius: 10px;
  background: #242424;
  border: 1px solid #353535;
}

h2 {
  margin: 0 0 9px 0;
  color: #b0b0b0;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 1.05px;
}

.sectionHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.sectionHead h2 { margin-bottom: 0; }

button {
  min-height: 34px;
  border: 1px solid #414141;
  border-radius: 7px;
  background: #353535;
  color: #f2f2f2;
  font-size: 11px;
  font-weight: 650;
  cursor: pointer;
  padding: 0 9px;
}

button:hover { background: #404040; }
button.primary { background: #343b45; }
button.secondary { background: #303030; }
button.danger { background: #463033; }
button.accent { background: #2d5fa8; border-color: #356fc5; }

.updateBtn {
  min-height: 28px;
  padding: 0 9px;
  background: #333;
  font-size: 10px;
}

.miniBtn {
  min-height: 25px;
  padding: 0 8px;
  font-size: 9px;
}

.compact {
  flex: 0 0 auto;
  min-width: 94px;
}

.buttonRow {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 6px;
}

.buttonRow:last-child { margin-bottom: 0; }
.buttonRow button { margin: 0; }

.buttonRow.two button { flex: 1 1 44%; }
.buttonRow.three button { flex: 1 1 28%; }

textarea,
input[type="text"],
select {
  width: 100%;
  min-height: 35px;
  border: 1px solid #444;
  border-radius: 7px;
  background: #191919;
  color: #fff;
  font-size: 11px;
}

textarea {
  height: 72px;
  resize: none;
  padding: 9px;
  margin: 0 0 7px 0;
}

input[type="text"], select { padding: 0 8px; }
select { margin-bottom: 7px; }

.inlineForm {
  display: flex;
  gap: 6px;
  align-items: stretch;
  margin-bottom: 7px;
}

.inlineForm input { flex: 1 1 auto; min-width: 0; }
.inlineForm select { flex: 0 0 105px; min-width: 0; margin: 0; }

.topGap { margin-top: 9px; }

.divider {
  height: 1px;
  background: #353535;
  margin: 10px 0;
}

.docInfo {
  margin-top: 8px;
  padding: 9px;
  border-radius: 7px;
  background: #1b1b1b;
  color: #bdbdbd;
  font-size: 10px;
  line-height: 1.45;
}

.listHead {
  display: flex;
  justify-content: space-between;
  margin: 9px 1px 6px;
  color: #9b9b9b;
  font-size: 9px;
}

.memoryList {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.memoryItem {
  display: flex;
  justify-content: space-between;
  gap: 7px;
  align-items: center;
  padding: 7px;
  border-radius: 7px;
  background: #1b1b1b;
  border: 1px solid #363636;
}

.memoryMeta {
  min-width: 0;
  flex: 1 1 auto;
}

.memoryName {
  font-size: 11px;
  color: #eee;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.memorySub {
  margin-top: 2px;
  font-size: 9px;
  color: #7f7f7f;
}

.memoryActions {
  display: flex;
  gap: 4px;
  flex: 0 0 auto;
}

.memoryActions button {
  min-height: 27px;
  padding: 0 7px;
  font-size: 9px;
}

.empty {
  padding: 9px;
  border: 1px dashed #3c3c3c;
  border-radius: 7px;
  color: #777;
  text-align: center;
  font-size: 10px;
}

.tiny {
  color: #858585;
  font-size: 9px;
  line-height: 1.4;
}

.status {
  padding: 9px 10px;
  border: 1px solid #3b3b3b;
  border-radius: 8px;
  background: #202020;
  color: #bdbdbd;
  font-size: 10px;
}

@media (max-width: 330px) {
  .topbar { flex-direction: column; }
  .topActions { width: 100%; justify-content: space-between; }
  .buttonRow.three button { flex: 1 1 44%; }
  .inlineForm { flex-wrap: wrap; }
  .compact { width: 100%; }
}

.formatMode {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 9px;
}

.formatMode select {
  margin-bottom: 0;
}

.checkLine {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 26px;
  color: #b7b7b7;
  font-size: 10px;
}

.checkLine input {
  width: auto;
  min-height: 0;
  margin: 0;
}

button small {
  display: block;
  margin-top: 2px;
  color: #c2c2c2;
  font-size: 8px;
  font-weight: 500;
}


html, body {
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

body {
  -webkit-overflow-scrolling: touch;
}

.app {
  padding-bottom: 24px;
}

section {
  overflow: visible;
}

.pairRow {
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
  width: 100%;
}

.pairRow .formatBtn {
  flex: 1 1 0;
  min-width: 0;
  width: 50%;
  min-height: 38px;
  padding: 0 6px;
  font-size: 10px;
  white-space: nowrap;
}

.checkLine {
  color: #c5c5c5;
  opacity: 1;
}

.checkLine input[type="checkbox"] {
  appearance: auto;
  width: 16px;
  height: 16px;
  min-height: 16px;
  margin: 0;
  padding: 0;
  flex: 0 0 16px;
}

.formatMode {
  gap: 4px;
  margin-bottom: 7px;
}

.formatMode select {
  min-height: 32px;
}

.docCard,
section {
  padding: 10px;
}

.topbar {
  margin-bottom: 8px;
}

.title {
  font-size: 15px;
}

.sub {
  font-size: 9px;
}

.updateBtn {
  min-height: 26px;
  font-size: 9px;
}

.buttonRow {
  gap: 5px;
  margin-bottom: 5px;
}

.buttonRow button {
  min-height: 32px;
  font-size: 10px;
}

.status {
  margin-top: 8px;
  position: relative;
}

@media (max-width: 360px) {
  .pairRow {
    flex-wrap: wrap;
  }

  .pairRow .formatBtn {
    width: 100%;
    flex: 1 1 100%;
  }
}


/* v0.6.1 — compact format icons */
.formatIcons {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6px;
  margin: 7px 0 8px;
}

.formatIconBtn {
  flex: 1 1 0;
  min-width: 0;
  min-height: 62px;
  padding: 6px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #303030;
  border: 1px solid #444;
}

.formatIconBtn:hover {
  background: #3a3a3a;
  border-color: #575757;
}

.ratioIcon {
  display: block;
  border: 2px solid #d5d5d5;
  border-radius: 3px;
  opacity: .9;
}

.ratio916 { width: 13px; height: 24px; }
.ratio45 { width: 18px; height: 23px; }
.ratio11 { width: 21px; height: 21px; }
.ratio169 { width: 28px; height: 16px; }

.ratioLabel {
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  color: #d0d0d0;
}

@media (max-width: 310px) {
  .formatIcons { gap: 4px; }
  .formatIconBtn {
    min-height: 58px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .ratioLabel { font-size: 8px; }
}


/* v0.6.2 updater status */
.updaterBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 0 0 8px 0;
  padding: 7px 8px;
  border: 1px solid #343434;
  border-radius: 7px;
  background: #202020;
  color: #9f9f9f;
  font-size: 9px;
  line-height: 1.3;
}

.updaterBar span {
  min-width: 0;
  flex: 1 1 auto;
}

.updaterLinkBtn {
  flex: 0 0 auto;
  min-height: 24px;
  padding: 0 7px;
  border-color: #3e3e3e;
  background: #2a2a2a;
  color: #bdbdbd;
  font-size: 8px;
}

.updateBtn[disabled] {
  opacity: .55;
  cursor: default;
}


/* v0.6.4 updater verification + readability */
.updaterOkBadge {
  flex: 0 0 auto;
  padding: 3px 6px;
  border-radius: 999px;
  background: #2d5f3a;
  border: 1px solid #3d7b4d;
  color: #d8f4de;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .2px;
}

.formatMode select {
  color: #f2f2f2 !important;
  background: #262626 !important;
  border-color: #4a4a4a !important;
}

.formatMode select option {
  color: #f2f2f2;
  background: #262626;
}

.checkLine,
.checkLine span {
  color: #d0d0d0 !important;
  opacity: 1 !important;
}

.checkLine input[type="checkbox"]:disabled + span {
  color: #8a8a8a !important;
}


/* v0.6.5 — KRALI black + #FF4141 theme */
:root {
  --krali-bg: #0b0b0b;
  --krali-surface: #141414;
  --krali-surface-2: #1b1b1b;
  --krali-surface-3: #222222;
  --krali-border: #2d2d2d;
  --krali-border-strong: #3a3a3a;
  --krali-text: #f5f5f5;
  --krali-muted: #9a9a9a;
  --krali-accent: #ff4141;
  --krali-accent-soft: #3a1515;
  --krali-accent-hover: #ff5c5c;
}

html,
body {
  background: var(--krali-bg);
  color: var(--krali-text);
}

body {
  background:
    linear-gradient(180deg, #0a0a0a 0%, #101010 100%);
}

.title {
  color: #ffffff;
}

.sub,
.version,
.tiny,
.memorySub,
.listHead {
  color: var(--krali-muted);
}

section {
  background: var(--krali-surface);
  border-color: var(--krali-border);
}

h2 {
  color: #d6d6d6;
}

button {
  background: var(--krali-surface-3);
  border-color: var(--krali-border-strong);
  color: var(--krali-text);
}

button:hover {
  background: #2a2a2a;
  border-color: var(--krali-accent);
}

button:focus,
select:focus,
input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: var(--krali-accent) !important;
}

button.primary,
button.secondary {
  background: #1d1d1d;
  border-color: #343434;
}

button.primary:hover,
button.secondary:hover {
  background: var(--krali-accent-soft);
  border-color: var(--krali-accent);
}

button.accent,
.updateBtn {
  background: var(--krali-accent);
  border-color: var(--krali-accent);
  color: #ffffff;
}

button.accent:hover,
.updateBtn:hover {
  background: var(--krali-accent-hover);
  border-color: var(--krali-accent-hover);
}

button.danger {
  background: #2a1212;
  border-color: #5a2020;
  color: #ffd6d6;
}

button.danger:hover {
  background: #3a1616;
  border-color: var(--krali-accent);
}

textarea,
input[type="text"],
select,
.formatMode select {
  background: #101010 !important;
  border-color: #343434 !important;
  color: #ffffff !important;
}

select option,
.formatMode select option {
  background: #101010;
  color: #ffffff;
}

input[type="checkbox"] {
  accent-color: var(--krali-accent);
}

.docInfo,
.memoryItem,
.empty,
.status,
.updaterBar {
  background: #101010;
  border-color: var(--krali-border);
}

.docInfo,
.memoryName,
.status {
  color: #e7e7e7;
}

.divider {
  background: #2a2a2a;
}

.formatIconBtn {
  background: #171717;
  border-color: #303030;
}

.formatIconBtn:hover {
  background: var(--krali-accent-soft);
  border-color: var(--krali-accent);
}

.ratioIcon {
  border-color: var(--krali-accent);
}

.ratioLabel {
  color: #efefef;
}

.updaterBar {
  color: #b8b8b8;
}

.updaterOkBadge {
  background: var(--krali-accent-soft);
  border-color: #7a2424;
  color: #ffdcdc;
}

.updaterLinkBtn {
  background: #181818;
  border-color: #353535;
  color: #d0d0d0;
}

.updaterLinkBtn:hover {
  background: var(--krali-accent-soft);
  border-color: var(--krali-accent);
  color: #ffffff;
}

.checkLine,
.checkLine span {
  color: #d4d4d4 !important;
}

.memoryActions button {
  background: #1d1d1d;
}

.memoryActions button:hover {
  border-color: var(--krali-accent);
}

::selection {
  background: var(--krali-accent);
  color: #ffffff;
}
`;
  document.head.appendChild(style);

  const accentStyle = document.createElement("style");
  accentStyle.textContent = `.brandBlock::after{content:"";display:block;width:42px;height:3px;margin-top:7px;border-radius:999px;background:#ff4141;box-shadow:0 0 10px rgba(255,65,65,.28)} .version{color:#ff7a7a !important;font-weight:700}`;
  document.head.appendChild(accentStyle);

  const compactStyle = document.createElement("style");
  compactStyle.textContent = `
    .app{padding:10px 10px 18px}
    .topbar{align-items:center;margin-bottom:7px;gap:8px}
    .brandBlock::after{width:34px;height:2px;margin-top:5px}
    .title{font-size:16px;letter-spacing:.35px}
    .sub{font-size:8px;margin-top:1px}
    .topActions{gap:7px}
    .version{
      padding:3px 7px;
      border:1px solid #5f2020;
      border-radius:999px;
      background:#251010;
      color:#ff7676 !important;
      font-size:8px;
      line-height:1;
    }
    .updateBtn{min-height:26px;padding:0 10px;border-radius:999px;font-size:9px}
    .updaterBar{
      padding:5px 7px;
      margin-bottom:7px;
      border-radius:7px;
      background:#0f0f0f;
      font-size:8px;
    }
    .updaterLinkBtn{
      min-height:21px;
      padding:0 6px;
      border-radius:999px;
      font-size:8px;
      background:transparent;
    }
    section{padding:9px;margin-bottom:7px;border-radius:9px}
    h2{font-size:9px;margin-bottom:7px;letter-spacing:.9px}
    .docCard{padding:8px 9px}
    .docInfo{margin-top:6px;padding:7px 8px;font-size:9px;line-height:1.35}
    .miniBtn{min-height:23px;padding:0 7px}
    .formatMode{gap:3px;margin-bottom:5px}
    .formatMode select{min-height:29px;font-size:10px}
    .checkLine{min-height:21px;font-size:9px;gap:6px}
    .checkLine input[type="checkbox"]{width:14px;height:14px;min-height:14px;flex-basis:14px}
    .formatIcons{gap:5px;margin:5px 0 0}
    .formatIconBtn{min-height:49px;padding:5px 3px;border-radius:8px}
    .ratio916{width:11px;height:21px}
    .ratio45{width:16px;height:20px}
    .ratio11{width:18px;height:18px}
    .ratio169{width:25px;height:14px}
    .ratioLabel{font-size:8px}
    .buttonRow{gap:4px;margin-bottom:4px}
    .buttonRow button{min-height:29px;font-size:9px;padding:0 6px}
    textarea,input[type="text"],select{min-height:31px;font-size:10px}
    textarea{height:62px;padding:7px}
    .inlineForm{gap:5px;margin-bottom:5px}
    .divider{margin:8px 0}
    .memoryItem{padding:6px}
    .memoryName{font-size:10px}
    .memorySub,.tiny,.listHead{font-size:8px}
    .memoryActions button{min-height:24px;font-size:8px}
    .empty{padding:7px;font-size:9px}
    .status{padding:7px 8px;font-size:9px;border-radius:7px}
  `;
  document.head.appendChild(compactStyle);


  const finalUiStyle = document.createElement("style");
  finalUiStyle.textContent = `
    /* v0.8.1 final UI cleanup */
    .topbar{
      padding:2px 1px 4px;
      border-bottom:1px solid #231010;
    }
    .topActions{
      margin-left:auto;
    }
    .updateBtn{
      background:#ff4141 !important;
      border-color:#ff4141 !important;
      min-width:auto;
      padding:0 11px;
      box-shadow:none;
    }
    .updateBtn:hover{
      background:#ff5a5a !important;
      border-color:#ff5a5a !important;
    }
    .version{
      min-width:auto;
      white-space:nowrap;
    }
    section{
      box-shadow:none;
    }
    .docInfo{
      background:#0b0b0b;
    }
    .formatIconBtn{
      min-height:46px !important;
    }
    .status{
      background:#0d0d0d;
      border-color:#241414;
    }
  `;
  document.head.appendChild(finalUiStyle);

  const v090Style = document.createElement("style");
  v090Style.textContent = `
    /* v0.9.0 UI refinement */
    .brandBlock::after{display:none !important}
    .topbar{
      border-bottom:1px solid #351717 !important;
      padding:3px 2px 8px !important;
      margin-bottom:8px !important;
    }
    .title{font-size:15px !important}
    .sub{font-size:8px !important;color:#7f7f7f !important}
    .updateBtn{
      min-height:24px !important;
      padding:0 9px !important;
      background:#1a1a1a !important;
      border:1px solid #5a2020 !important;
      color:#ff7474 !important;
      border-radius:7px !important;
      font-size:8px !important;
    }
    .updateBtn:hover{
      background:#2a1111 !important;
      border-color:#ff4141 !important;
    }
    .version{
      background:transparent !important;
      border:none !important;
      color:#ff6b6b !important;
      padding:0 !important;
      font-size:8px !important;
    }
    section{
      background:#101010 !important;
      border:1px solid #292929 !important;
      border-radius:9px !important;
    }
    h2{color:#cfcfcf !important}
    button{
      background:#171717 !important;
      border-color:#303030 !important;
      color:#efefef !important;
      box-shadow:none !important;
    }
    button:hover{
      background:#211313 !important;
      border-color:#ff4141 !important;
    }
    .miniBtn{
      background:#171717 !important;
      border-color:#323232 !important;
    }
    .docInfo{
      background:#090909 !important;
      border:1px solid #202020 !important;
      padding:8px 9px !important;
    }
    .docName{
      color:#f2f2f2;
      font-size:10px;
      font-weight:650;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .docMeta{
      display:flex;
      flex-wrap:wrap;
      gap:5px;
      margin-top:4px;
      color:#8e8e8e;
      font-size:8px;
    }
    .docMeta span{color:#ff4141}
    .resizeModeState{
      display:none !important;
    }
    .modeToggle{
      display:flex;
      gap:4px;
      padding:3px;
      margin-bottom:4px;
      border:1px solid #292929;
      border-radius:8px;
      background:#090909;
    }
    .modeBtn{
      flex:1 1 50%;
      min-height:26px !important;
      border-radius:6px !important;
      font-size:8px !important;
      color:#8d8d8d !important;
      background:transparent !important;
      border-color:transparent !important;
    }
    .modeBtn.active{
      color:#ffffff !important;
      background:#2a1212 !important;
      border-color:#6a2323 !important;
    }
    .checkLine{
      font-size:8px !important;
      color:#b6b6b6 !important;
    }
    .formatIcons{
      gap:4px !important;
      margin-top:4px !important;
    }
    .formatIconBtn{
      min-height:42px !important;
      border-radius:7px !important;
      background:#121212 !important;
    }
    .ratioIcon{
      border-color:#ff4141 !important;
      border-width:1px !important;
    }
    .ratioLabel{font-size:7px !important}
    .safeGrid{
      display:flex;
      flex-wrap:wrap;
      gap:4px;
      margin-bottom:4px;
    }
    .safeGrid button{
      flex:1 1 30%;
      min-width:28%;
      min-height:34px !important;
      padding:4px 3px !important;
      font-size:8px !important;
      line-height:1.05;
    }
    .safeGrid button span{
      display:block;
      margin-top:2px;
      color:#ff7474;
      font-size:7px;
      font-weight:600;
    }
    .buttonRow.two button,
    .buttonRow.three button{
      background:#151515 !important;
    }
    .buttonRow .danger{
      background:#251010 !important;
      border-color:#4a1919 !important;
      color:#ff9a9a !important;
    }
    input[type="text"],textarea,select{
      background:#090909 !important;
      border-color:#292929 !important;
    }
    .memoryItem,.empty,.status{
      background:#0b0b0b !important;
      border-color:#262626 !important;
    }
  `;
  document.head.appendChild(v090Style);


  const v091Style = document.createElement("style");
  v091Style.textContent = `
    /* v0.9.1 updater stabilization */
    .updateBtn{
      position:relative !important;
      z-index:20 !important;
      pointer-events:auto !important;
      user-select:none !important;
      min-width:76px !important;
    }
    .topActions{
      position:relative !important;
      z-index:19 !important;
      pointer-events:auto !important;
    }
    .resizeModeState{display:none !important}
    .modeToggle{display:flex !important}
    .safeGrid{display:flex !important}
  `;
  document.head.appendChild(v091Style);

  const v0100Style = document.createElement("style");
  v0100Style.textContent = `
    /* v0.10.0 workflow tools */
    .safeAlignToggle{
      display:flex;
      align-items:center;
      gap:4px;
      color:#8d8d8d;
      font-size:8px;
      cursor:pointer;
    }
    .safeAlignToggle input{
      width:13px;
      height:13px;
      margin:0;
      accent-color:#ff4141;
    }
    .alignGrid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:4px;
      margin:6px 0;
      padding:4px;
      border:1px solid #252525;
      border-radius:8px;
      background:#090909;
    }
    .alignGrid button{
      min-height:28px !important;
      padding:0 !important;
      font-size:13px !important;
      background:#121212 !important;
      border-color:#272727 !important;
    }
    .alignGrid button:hover,
    .alignGrid .alignCenter{
      border-color:#5d2222 !important;
    }
    .alignGrid .alignCenter{
      color:#ff5f5f !important;
      font-size:16px !important;
    }
    .buttonRow.four{
      display:flex;
      gap:4px;
      margin-top:4px;
    }
    .buttonRow.four button{
      flex:1 1 25%;
      min-height:28px !important;
      padding:0 3px !important;
      font-size:9px !important;
    }
    .layerQuickRow button{
      background:#0f0f0f !important;
      border-color:#292929 !important;
    }
    .layerQuickRow button:hover{
      border-color:#ff4141 !important;
      background:#211111 !important;
    }
  `;
  document.head.appendChild(v0100Style);


  const v0101Style = document.createElement("style");
  v0101Style.textContent = `
    /* v0.10.1 UI polish */
    .topbar{
      display:flex !important;
      flex-direction:row !important;
      align-items:flex-start !important;
      justify-content:space-between !important;
      gap:8px !important;
      padding:3px 2px 8px !important;
    }
    .brandBlock{
      flex:1 1 auto !important;
      min-width:0 !important;
    }
    .topActions{
      width:auto !important;
      margin-left:auto !important;
      flex:0 0 auto !important;
      justify-content:flex-end !important;
      align-items:center !important;
      gap:7px !important;
    }
    .updateBtn{
      min-height:22px !important;
      padding:0 8px !important;
      border-radius:6px !important;
      font-size:7.5px !important;
      font-weight:700 !important;
      background:#121212 !important;
      color:#ff6f6f !important;
      border:1px solid #4e2020 !important;
    }
    .updateBtn:hover{
      background:#261010 !important;
      border-color:#ff4141 !important;
      color:#ffffff !important;
    }
    .version{
      font-size:7.5px !important;
      color:#ff6c6c !important;
      white-space:nowrap !important;
    }
    .refreshIconBtn{
      width:25px !important;
      min-width:25px !important;
      min-height:23px !important;
      padding:0 !important;
      border-radius:6px !important;
      font-size:11px !important;
      background:#111 !important;
      color:#bdbdbd !important;
    }
    section{
      padding:8px !important;
      margin-bottom:6px !important;
      background:#0f0f0f !important;
      border-color:#252525 !important;
    }
    h2{
      margin-bottom:6px !important;
      font-size:8.5px !important;
    }
    .docInfo{
      padding:7px 8px !important;
      margin-top:5px !important;
    }
    .formatMode{
      margin-bottom:4px !important;
    }
    .modeToggle{
      padding:2px !important;
      gap:3px !important;
      border-radius:7px !important;
    }
    .modeBtn{
      min-height:23px !important;
      font-size:7.5px !important;
      border-radius:5px !important;
    }
    .modeBtn.active{
      background:#241010 !important;
      border-color:#702525 !important;
      color:#fff !important;
    }
    .checkLine{
      min-height:19px !important;
      font-size:8px !important;
    }
    .formatIcons{
      gap:3px !important;
      margin:4px 0 0 !important;
    }
    .formatIconBtn{
      min-height:38px !important;
      padding:4px 2px !important;
      border-radius:6px !important;
      background:#101010 !important;
      border-color:#252525 !important;
    }
    .ratio916{width:9px !important;height:18px !important}
    .ratio45{width:13px !important;height:17px !important}
    .ratio11{width:16px !important;height:16px !important}
    .ratio169{width:22px !important;height:12px !important}
    .ratioLabel{font-size:7px !important}
    .safeGrid{
      display:grid !important;
      grid-template-columns:repeat(3,1fr) !important;
      gap:4px !important;
      margin-bottom:4px !important;
    }
    .safePresetBtn{
      min-width:0 !important;
      min-height:36px !important;
      padding:4px 2px !important;
      display:flex !important;
      flex-direction:column !important;
      align-items:center !important;
      justify-content:center !important;
      gap:2px !important;
      background:#111 !important;
      border-color:#292929 !important;
    }
    .safeName{
      display:block !important;
      font-size:8px !important;
      line-height:1 !important;
      color:#ededed !important;
    }
    .safeRatio{
      display:block !important;
      margin:0 !important;
      font-size:7px !important;
      line-height:1 !important;
      color:#ff6d6d !important;
    }
    .buttonRow button{
      background:#111 !important;
      border-color:#292929 !important;
      min-height:27px !important;
      font-size:8px !important;
    }
    .alignGrid{
      margin:5px 0 !important;
      padding:3px !important;
      gap:3px !important;
    }
    .alignGrid button{
      min-height:25px !important;
      background:#0d0d0d !important;
    }
    .layerQuickRow button{
      background:#0d0d0d !important;
    }
    @media (max-width:330px){
      .topbar{
        flex-direction:row !important;
      }
      .topActions{
        width:auto !important;
        justify-content:flex-end !important;
      }
    }
  `;
  document.head.appendChild(v0101Style);


  const v0102Style = document.createElement("style");
  v0102Style.textContent = `
    /* v0.10.2 format icon cleanup */
    .formatIcons{
      display:grid !important;
      grid-template-columns:repeat(4,1fr) !important;
      gap:5px !important;
      margin:5px 0 0 !important;
    }
    .formatIconBtn{
      min-height:54px !important;
      padding:5px 2px !important;
      display:flex !important;
      align-items:center !important;
      justify-content:center !important;
      background:#0c0c0c !important;
      border:1px solid #272727 !important;
      border-radius:7px !important;
    }
    .formatIconBtn:hover{
      background:#1b0d0d !important;
      border-color:#ff4141 !important;
    }
    .ratioIcon{
      display:block !important;
      border:1.5px solid #ff4141 !important;
      border-radius:3px !important;
      opacity:1 !important;
      background:transparent !important;
      box-shadow:inset 0 0 0 1px rgba(255,65,65,.04);
    }
    .ratio916{width:14px !important;height:30px !important}
    .ratio45{width:22px !important;height:28px !important}
    .ratio11{width:26px !important;height:26px !important}
    .ratio169{width:36px !important;height:20px !important}
    .ratioLabel{display:none !important}
  `;
  document.head.appendChild(v0102Style);


  const v0103Style = document.createElement("style");
  v0103Style.textContent = `
    /* v0.10.3 UXP-safe format icons */
    .formatIcons{
      display:flex !important;
      align-items:stretch !important;
      justify-content:space-between !important;
      gap:5px !important;
      margin:5px 0 0 !important;
    }
    .formatIconBtn{
      flex:1 1 0 !important;
      min-width:0 !important;
      min-height:54px !important;
      display:flex !important;
      align-items:center !important;
      justify-content:center !important;
      background:#0c0c0c !important;
      border:1px solid #272727 !important;
      border-radius:7px !important;
      padding:5px 2px !important;
    }
    .ratioIcon{
      display:flex !important;
      align-items:center !important;
      justify-content:center !important;
      box-sizing:border-box !important;
      border:1px solid #ff4141 !important;
      background:#171717 !important;
      border-radius:3px !important;
      opacity:1 !important;
      flex:0 0 auto !important;
    }
    .ratioInner{
      display:block !important;
      width:3px !important;
      height:3px !important;
      border-radius:50% !important;
      background:#ff4141 !important;
      opacity:.75 !important;
    }
    .ratio916{width:15px !important;height:31px !important}
    .ratio45{width:23px !important;height:29px !important}
    .ratio11{width:27px !important;height:27px !important}
    .ratio169{width:37px !important;height:21px !important}
  `;
  document.head.appendChild(v0103Style);


  const v0104Style = document.createElement("style");
  v0104Style.textContent = `
    /* v0.10.4 remove quick format */
    .formatMode,
    .formatIcons,
    .resizeModeState,
    .modeToggle{
      display:none !important;
    }
  `;
  document.head.appendChild(v0104Style);


  const v0110Style = document.createElement("style");
  v0110Style.textContent = `
    /* v0.11.0 scale and safe-zone */
    .assetTopBtn{
      width:25px !important;
      min-width:25px !important;
      min-height:22px !important;
      padding:0 !important;
      font-size:12px !important;
      line-height:1 !important;
      background:#111 !important;
      border:1px solid #353535 !important;
      border-radius:6px !important;
    }
    .assetTopBtn:hover{
      background:#241010 !important;
      border-color:#ff4141 !important;
    }
    .scaleSection{
      padding-bottom:7px !important;
    }
    .scaleGrid{
      display:flex !important;
      align-items:stretch !important;
      gap:5px !important;
    }
    .scalePresetBtn{
      flex:1 1 0 !important;
      min-width:0 !important;
      min-height:52px !important;
      padding:5px 2px !important;
      display:flex !important;
      flex-direction:column !important;
      align-items:center !important;
      justify-content:center !important;
      gap:4px !important;
      background:#0d0d0d !important;
      border:1px solid #292929 !important;
      border-radius:7px !important;
    }
    .scalePresetBtn:hover,
    .scalePresetBtn.active{
      background:#1c0d0d !important;
      border-color:#ff4141 !important;
    }
    .scaleFrame{
      display:block !important;
      flex:0 0 auto !important;
      border:1px solid #ff4141 !important;
      border-radius:2px !important;
      background:transparent !important;
    }
    .scaleVertical{width:11px !important;height:23px !important}
    .scalePost{width:17px !important;height:22px !important}
    .scaleSquare{width:20px !important;height:20px !important}
    .scaleHorizontal{width:28px !important;height:16px !important}
    .scaleText{
      display:block !important;
      color:#d8d8d8 !important;
      font-size:7px !important;
      line-height:1 !important;
      font-weight:650 !important;
    }
    .safePresetBtn.active{
      background:#211010 !important;
      border-color:#ff4141 !important;
    }
    .safePresetBtn.active .safeName{
      color:#ffffff !important;
    }
    .safePresetBtn.active .safeRatio{
      color:#ff7777 !important;
    }
  `;
  document.head.appendChild(v0110Style);







  document.body.innerHTML = `<div class="app">
    <header class="topbar">
      <div class="brandBlock">
        <div class="title">KRALI DESIGN</div>
        <div class="sub">Photoshop Workflow Accelerator</div>
      </div>
      <div class="topActions">
        <button id="placeAssetTop" class="assetTopBtn" title="Dosyadan Asset Ekle">📁</button>
        <button id="updatePlugin" class="updateBtn">↻ Güncelle</button>
        <div class="version">v0.11.0</div>
      </div>
    </header>

    <section class="scaleSection">
      <h2>ÖLÇEK</h2>
      <div class="scaleGrid">
        <button class="scalePresetBtn" data-scale-preset="vertical" title="1080×1920">
          <span class="scaleFrame scaleVertical"></span>
          <span class="scaleText">9:16</span>
        </button>
        <button class="scalePresetBtn" data-scale-preset="post45" title="1080×1350">
          <span class="scaleFrame scalePost"></span>
          <span class="scaleText">4:5</span>
        </button>
        <button class="scalePresetBtn" data-scale-preset="square" title="1080×1080">
          <span class="scaleFrame scaleSquare"></span>
          <span class="scaleText">1:1</span>
        </button>
        <button class="scalePresetBtn" data-scale-preset="horizontal" title="1920×1080">
          <span class="scaleFrame scaleHorizontal"></span>
          <span class="scaleText">16:9</span>
        </button>
      </div>
    </section>

    <section>
      <h2>SAFE ZONE</h2>
      <div class="safeGrid">
        <button class="primary safePresetBtn" data-safe="reels"><span class="safeName">Reels</span><span class="safeRatio">9:16</span></button>
        <button class="primary safePresetBtn" data-safe="story"><span class="safeName">Story</span><span class="safeRatio">9:16</span></button>
        <button class="primary safePresetBtn" data-safe="post45"><span class="safeName">Post</span><span class="safeRatio">4:5</span></button>
        <button class="primary safePresetBtn" data-safe="wide169"><span class="safeName">Yatay</span><span class="safeRatio">16:9</span></button>
        <button class="primary safePresetBtn" data-safe="square"><span class="safeName">Kare</span><span class="safeRatio">1:1</span></button>
        <button class="primary safePresetBtn" data-safe="generic916"><span class="safeName">Genel</span><span class="safeRatio">9:16</span></button>
      </div>
      <div class="buttonRow two">
        <button id="toggleGuides" class="secondary">Göster / Gizle</button>
        <button id="clearGuides" class="danger">Temizle</button>
      </div>
    </section>

    <section>
      <div class="sectionHead">
        <h2>YERLEŞİM</h2>
        <label class="safeAlignToggle">
          <input id="safeAlignMargin" type="checkbox" checked />
          <span>%5 pay</span>
        </label>
      </div>

      <div class="alignGrid">
        <button data-align-point="tl" title="Sol Üst">↖</button>
        <button data-align-point="tc" title="Üst Orta">↑</button>
        <button data-align-point="tr" title="Sağ Üst">↗</button>
        <button data-align-point="ml" title="Sol Orta">←</button>
        <button data-align-point="mc" class="alignCenter" title="Tam Ortala">•</button>
        <button data-align-point="mr" title="Sağ Orta">→</button>
        <button data-align-point="bl" title="Sol Alt">↙</button>
        <button data-align-point="bc" title="Alt Orta">↓</button>
        <button data-align-point="br" title="Sağ Alt">↘</button>
      </div>

      <div class="buttonRow three">
        <button id="centerH">Yatay Ortala</button>
        <button id="centerV">Dikey Ortala</button>
        <button id="centerLayer">Tam Ortala</button>
      </div>
      <div class="buttonRow two">
        <button id="fitLayer">Fit</button>
        <button id="fillLayer">Fill</button>
      </div>
    </section>

    <section>
      <h2>LAYER</h2>
      <div class="buttonRow two">
        <button id="smartObject">Smart Object</button>
        <button id="groupLayers">Grupla</button>
        <button id="renameLayer">Adlandır</button>
        <button id="duplicateLayer">Kopyala</button>
      </div>

      <div class="buttonRow four layerQuickRow">
        <button id="toggleLayerVisible" title="Görünürlük">👁</button>
        <button id="toggleLayerLock" title="Kilitle / Kilidi Aç">🔒</button>
        <button id="bringLayerFront" title="En Öne Getir">↑↑</button>
        <button id="sendLayerBack" title="En Arkaya Gönder">↓↓</button>
      </div>
    </section>

    <section>
      <h2>MARKA HAFIZASI</h2>

      <select id="brandSelect" aria-label="Marka seç">
        <option value="">Marka seç...</option>
      </select>

      <div class="inlineForm">
        <input id="newBrandName" type="text" placeholder="Yeni marka adı" />
        <button id="addBrand" class="accent compact">Marka Ekle</button>
      </div>

      <div class="divider"></div>

      <div class="inlineForm">
        <input id="assetName" type="text" placeholder="Asset adı (örn. Beyaz Logo)" />
        <select id="assetType" aria-label="Asset türü">
          <option value="logo">Logo</option>
          <option value="product">Ürün</option>
          <option value="background">Background</option>
          <option value="decor">Dekor</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      <button id="registerAsset" class="accent">Dosyayı Hafızaya Kaydet</button>

      <div class="listHead">
        <span>Kayıtlı Assetler</span>
        <span id="assetCount">0</span>
      </div>
      <div id="assetList" class="memoryList">
        <div class="empty">Önce bir marka oluştur.</div>
      </div>
    </section>

    <section>
      <h2>TASARIM HAFIZASI</h2>
      <div class="tiny">Açık PSD'deki üst seviye layer konumlarını, ölçülerini ve görünürlük değerlerini aktif markaya kaydeder.</div>
      <div class="inlineForm topGap">
        <input id="layoutName" type="text" placeholder="Tasarım adı (örn. Cold Brew Post)" />
        <button id="learnLayout" class="accent compact">Tasarımı Öğren</button>
      </div>

      <div class="listHead">
        <span>Kayıtlı Tasarımlar</span>
        <span id="layoutCount">0</span>
      </div>
      <div id="layoutList" class="memoryList">
        <div class="empty">Henüz tasarım kaydı yok.</div>
      </div>
    </section>

    <section>
      <h2>LOCAL ASSISTANT</h2>
      <textarea id="assistantPrompt" placeholder="Örn: Vox beyaz logosunu ekle, reels safe zone aç ve ortala"></textarea>
      <button id="assistantRun" class="accent">Komutu Çalıştır</button>
      <div class="tiny">Marka/asset çağırma + safe zone + fit/fill/ortalama komutlarını lokal olarak çalıştırır.</div>
    </section>

    <div id="status" class="status">KRALI DESIGN hazırlanıyor...</div>
  </div>`;
})();

const photoshop = require("photoshop");
const { storage } = require("uxp");

const app = photoshop.app;
const core = photoshop.core;
const constants = photoshop.constants;
const batchPlay = photoshop.action.batchPlay;
const fs = storage.localFileSystem;

const statusEl = document.getElementById("status");
const brandSelect = document.getElementById("brandSelect");
const assetList = document.getElementById("assetList");
const assetCount = document.getElementById("assetCount");
const layoutList = document.getElementById("layoutList");
const layoutCount = document.getElementById("layoutCount");
const docInfo = document.getElementById("docInfo");
const updateStatusEl = document.getElementById("updateStatus");
const updateButtonEl = document.getElementById("updatePlugin");

let lastSafePreset = null;
let guidesVisible = true;
let memoryFile = null;
let memory = { version: 2, selectedBrandId: "", brands: [] };

const ASSET_TYPES = {
  logo: "Logo",
  product: "Ürün",
  background: "Background",
  decor: "Dekor",
  other: "Diğer"
};

function setStatus(msg) {
  statusEl.textContent = msg;
}

function uid(prefix) {
  return prefix + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function px(v) {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = Number(v);
  if (Number.isFinite(n)) return n;
  throw new Error("Ölçü değeri okunamadı.");
}

function getDoc() {
  if (!app.documents.length) throw new Error("Önce bir Photoshop belgesi aç.");
  return app.activeDocument;
}

function getSelectedLayers() {
  const doc = getDoc();
  if (!doc.activeLayers || !doc.activeLayers.length) throw new Error("En az bir layer seç.");
  return doc.activeLayers;
}

function getLayer() {
  return getSelectedLayers()[0];
}

function layerBounds(layer) {
  const b = layer.bounds;
  return {
    left: px(b.left),
    top: px(b.top),
    right: px(b.right),
    bottom: px(b.bottom)
  };
}

function flattenTopLayers(doc) {
  return Array.from(doc.layers || []);
}

async function modal(name, fn) {
  return await core.executeAsModal(fn, { commandName: "KRALI - " + name });
}

async function refreshDocInfo() {
  if (!docInfo) return;
  if (!app.documents.length) {
    docInfo.innerHTML = '<div class="docName">Açık belge yok</div><div class="docMeta">Photoshop belgesi bekleniyor</div>';
    return;
  }

  const doc = app.activeDocument;
  const selected = doc.activeLayers ? doc.activeLayers.length : 0;
  const width = Math.round(px(doc.width));
  const height = Math.round(px(doc.height));
  const layerCount = doc.layers ? doc.layers.length : 0;

  docInfo.innerHTML =
    '<div class="docName">' + String(doc.title || "Başlıksız") + '</div>' +
    '<div class="docMeta">' +
      width + '×' + height + ' px' +
      '<span>•</span>' + selected + ' seçili' +
      '<span>•</span>' + layerCount + ' layer' +
    '</div>';
}

async function initMemory() {
  try {
    const folder = await fs.getDataFolder();

    try {
      memoryFile = await folder.getEntry("krali-memory.json");
    } catch (_) {
      memoryFile = await folder.createFile("krali-memory.json", { overwrite: false });
      await memoryFile.write(JSON.stringify(memory, null, 2));
    }

    try {
      const raw = await memoryFile.read();
      if (raw && raw.trim()) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.brands)) memory = parsed;
      }
    } catch (err) {
      console.warn("Memory read failed:", err);
    }

    memory.version = 2;
    memory.brands.forEach(b => {
      if (!Array.isArray(b.assets)) b.assets = [];
      if (!Array.isArray(b.layouts)) b.layouts = [];
    });

    renderBrands();
    await refreshDocInfo();
    setStatus("✓ KRALI hafızası hazır");
  } catch (err) {
    console.error(err);
    setStatus("Hafıza hatası: " + err.message);
  }
}

async function saveMemory() {
  if (!memoryFile) await initMemory();
  await memoryFile.write(JSON.stringify(memory, null, 2));
}

function getSelectedBrand() {
  const id = brandSelect.value || memory.selectedBrandId;
  return memory.brands.find(b => b.id === id) || null;
}

function renderBrands() {
  while (brandSelect.options.length > 1) brandSelect.remove(1);

  memory.brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand.id;
    option.textContent = brand.name;
    brandSelect.appendChild(option);
  });

  if (memory.selectedBrandId && memory.brands.some(b => b.id === memory.selectedBrandId)) {
    brandSelect.value = memory.selectedBrandId;
  } else if (memory.brands.length) {
    memory.selectedBrandId = memory.brands[0].id;
    brandSelect.value = memory.selectedBrandId;
  } else {
    brandSelect.value = "";
  }

  renderAssets();
  renderLayouts();
}

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function makeMemoryRow(nameText, subText, primaryText, primaryFn, deleteFn) {
  const row = document.createElement("div");
  row.className = "memoryItem";

  const meta = document.createElement("div");
  meta.className = "memoryMeta";

  const name = document.createElement("div");
  name.className = "memoryName";
  name.textContent = nameText;

  const sub = document.createElement("div");
  sub.className = "memorySub";
  sub.textContent = subText || "";

  meta.appendChild(name);
  meta.appendChild(sub);

  const actions = document.createElement("div");
  actions.className = "memoryActions";

  const primary = document.createElement("button");
  primary.textContent = primaryText;
  primary.addEventListener("click", () => guarded(primaryFn));

  const del = document.createElement("button");
  del.textContent = "×";
  del.className = "danger";
  del.addEventListener("click", () => guarded(deleteFn));

  actions.appendChild(primary);
  actions.appendChild(del);

  row.appendChild(meta);
  row.appendChild(actions);
  return row;
}

function renderAssets() {
  clearNode(assetList);
  const brand = getSelectedBrand();
  const assets = brand ? brand.assets || [] : [];
  assetCount.textContent = String(assets.length);

  if (!brand || !assets.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = brand ? brand.name + " için kayıtlı asset yok." : "Önce bir marka oluştur.";
    assetList.appendChild(empty);
    return;
  }

  assets.forEach(asset => {
    assetList.appendChild(
      makeMemoryRow(
        asset.name,
        ASSET_TYPES[asset.type] || asset.type,
        "Ekle",
        () => placeMemoryAsset(asset),
        () => deleteMemoryAsset(asset.id)
      )
    );
  });
}

function renderLayouts() {
  clearNode(layoutList);
  const brand = getSelectedBrand();
  const layouts = brand ? brand.layouts || [] : [];
  layoutCount.textContent = String(layouts.length);

  if (!brand || !layouts.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = brand ? brand.name + " için kayıtlı tasarım yok." : "Önce marka seç.";
    layoutList.appendChild(empty);
    return;
  }

  layouts.forEach(layout => {
    layoutList.appendChild(
      makeMemoryRow(
        layout.name,
        layout.width + "×" + layout.height + " • " + layout.layers.length + " layer",
        "Uygula",
        () => applyLayout(layout),
        () => deleteLayout(layout.id)
      )
    );
  });
}

async function addBrand() {
  const input = document.getElementById("newBrandName");
  const name = input.value.trim();
  if (!name) throw new Error("Marka adını yaz.");

  const existing = memory.brands.find(b => normalizeText(b.name) === normalizeText(name));
  if (existing) {
    memory.selectedBrandId = existing.id;
    brandSelect.value = existing.id;
    renderAssets();
    renderLayouts();
    throw new Error("Bu marka zaten kayıtlı.");
  }

  const brand = { id: uid("brand"), name, assets: [], layouts: [] };
  memory.brands.push(brand);
  memory.selectedBrandId = brand.id;
  input.value = "";

  await saveMemory();
  renderBrands();
  setStatus("✓ Marka oluşturuldu: " + name);
}

async function registerAsset() {
  const brand = getSelectedBrand();
  if (!brand) throw new Error("Önce marka seç.");

  const file = await fs.getFileForOpening({
    allowMultiple: false,
    types: ["png", "jpg", "jpeg", "webp", "tif", "tiff", "psd", "psb", "svg"]
  });

  if (!file) {
    setStatus("Asset seçimi iptal edildi");
    return;
  }

  const nameInput = document.getElementById("assetName");
  const typeInput = document.getElementById("assetType");
  const token = await fs.createPersistentToken(file);

  const asset = {
    id: uid("asset"),
    name: nameInput.value.trim() || file.name,
    type: typeInput.value || "other",
    fileName: file.name,
    token,
    createdAt: new Date().toISOString()
  };

  brand.assets.push(asset);
  nameInput.value = "";

  await saveMemory();
  renderAssets();
  setStatus("✓ " + asset.name + " hafızaya kaydedildi");
}

async function deleteMemoryAsset(assetId) {
  const brand = getSelectedBrand();
  if (!brand) return;
  brand.assets = brand.assets.filter(a => a.id !== assetId);
  await saveMemory();
  renderAssets();
  setStatus("✓ Asset hafızadan kaldırıldı");
}

async function learnLayout() {
  const brand = getSelectedBrand();
  if (!brand) throw new Error("Önce marka seç.");

  const doc = getDoc();
  const nameInput = document.getElementById("layoutName");
  const name = nameInput.value.trim() || doc.title;

  const w = px(doc.width);
  const h = px(doc.height);
  const layers = [];

  flattenTopLayers(doc).forEach(layer => {
    try {
      const b = layerBounds(layer);
      const lw = b.right - b.left;
      const lh = b.bottom - b.top;
      if (lw <= 0 || lh <= 0) return;

      layers.push({
        name: layer.name,
        x: b.left / w,
        y: b.top / h,
        width: lw / w,
        height: lh / h,
        opacity: typeof layer.opacity === "number" ? layer.opacity : 100,
        visible: layer.visible !== false
      });
    } catch (_) {}
  });

  if (!layers.length) throw new Error("Kaydedilebilir layer bulunamadı.");

  const layout = {
    id: uid("layout"),
    name,
    width: Math.round(w),
    height: Math.round(h),
    layers,
    createdAt: new Date().toISOString()
  };

  brand.layouts.push(layout);
  nameInput.value = "";
  await saveMemory();
  renderLayouts();
  setStatus("✓ Tasarım öğrenildi: " + name + " (" + layers.length + " layer)");
}

async function deleteLayout(layoutId) {
  const brand = getSelectedBrand();
  if (!brand) return;
  brand.layouts = brand.layouts.filter(l => l.id !== layoutId);
  await saveMemory();
  renderLayouts();
  setStatus("✓ Tasarım hafızadan kaldırıldı");
}

async function applyLayout(layout) {
  const doc = getDoc();
  const docW = px(doc.width);
  const docH = px(doc.height);
  const currentLayers = flattenTopLayers(doc);

  await modal("Tasarım Hafızası " + layout.name, async () => {
    for (const saved of layout.layers) {
      const layer = currentLayers.find(l => normalizeText(l.name) === normalizeText(saved.name));
      if (!layer) continue;

      const b = layerBounds(layer);
      const curW = b.right - b.left;
      const curH = b.bottom - b.top;
      const targetW = saved.width * docW;
      const targetH = saved.height * docH;

      if (curW > 0 && curH > 0) {
        const scaleX = targetW / curW;
        const scaleY = targetH / curH;
        const scale = Math.min(scaleX, scaleY);
        await layer.scale(scale * 100, scale * 100, constants.AnchorPosition.TOPLEFT);
      }

      const nb = layerBounds(layer);
      await layer.translate(
        saved.x * docW - nb.left,
        saved.y * docH - nb.top
      );

      try { layer.opacity = saved.opacity; } catch (_) {}
      try { layer.visible = saved.visible; } catch (_) {}
    }
  });

  setStatus("✓ Tasarım uygulandı: " + layout.name + ". Eşleşme layer adlarına göre yapıldı.");
  await refreshDocInfo();
}

async function placeEntry(entry, commandName) {
  const sessionToken = fs.createSessionToken(entry);

  await modal(commandName, async () => {
    await batchPlay(
      [{
        _obj: "placeEvent",
        null: { _path: sessionToken, _kind: "local" },
        freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" },
        offset: {
          _obj: "offset",
          horizontal: { _unit: "pixelsUnit", _value: 0 },
          vertical: { _unit: "pixelsUnit", _value: 0 }
        },
        _options: { dialogOptions: "dontDisplay" }
      }],
      {}
    );
  });

  await refreshDocInfo();
}

async function placeMemoryAsset(asset) {
  getDoc();

  let entry;
  try {
    entry = await fs.getEntryForPersistentToken(asset.token);
  } catch (_) {
    throw new Error(asset.name + " dosyası bulunamadı. Dosya taşınmış olabilir.");
  }

  await placeEntry(entry, "Asset " + asset.name);
  setStatus("✓ " + asset.name + " eklendi");
}

async function clearGuidesInternal() {
  const doc = getDoc();
  if (doc.guides && doc.guides.length) doc.guides.removeAll();
}


const FORMAT_PRESETS = {
  vertical: { name: "Dikey 9:16", width: 1080, height: 1920, safe: "reels" },
  post45: { name: "Post 4:5", width: 1080, height: 1350, safe: "post45" },
  square: { name: "Kare 1:1", width: 1080, height: 1080, safe: "square" },
  horizontal: { name: "Yatay 16:9", width: 1920, height: 1080, safe: "wide169" }
};

function captureTopLayerGeometry(doc) {
  const oldW = px(doc.width);
  const oldH = px(doc.height);

  return flattenTopLayers(doc).map((layer, index) => {
    try {
      const b = layerBounds(layer);
      const w = b.right - b.left;
      const h = b.bottom - b.top;
      if (w <= 0 || h <= 0) return null;

      return {
        index,
        name: layer.name,
        centerX: ((b.left + b.right) / 2) / oldW,
        centerY: ((b.top + b.bottom) / 2) / oldH,
        width: w,
        height: h
      };
    } catch (_) {
      return null;
    }
  }).filter(Boolean);
}

async function duplicateActiveDocumentForFormat(formatName) {
  const doc = getDoc();

  if (typeof doc.duplicate === "function") {
    const base = String(doc.title || "KRALI").replace(/\.[^/.]+$/, "");
    const copy = await doc.duplicate(base + " - " + formatName);
    if (copy) return copy;
    return app.activeDocument;
  }

  await batchPlay(
    [{
      _obj: "duplicate",
      _target: [{ _ref: "document", _enum: "ordinal", _value: "first" }],
      name: formatName,
      _options: { dialogOptions: "dontDisplay" }
    }],
    {}
  );

  return app.activeDocument;
}

async function resizeCanvasTo(width, height) {
  const doc = getDoc();

  if (typeof doc.resizeCanvas === "function") {
    await doc.resizeCanvas(width, height, constants.AnchorPosition.MIDDLECENTER);
    return;
  }

  await batchPlay(
    [{
      _obj: "canvasSize",
      width: { _unit: "pixelsUnit", _value: width },
      height: { _unit: "pixelsUnit", _value: height },
      horizontal: { _enum: "horizontalLocation", _value: "center" },
      vertical: { _enum: "verticalLocation", _value: "center" },
      _options: { dialogOptions: "dontDisplay" }
    }],
    {}
  );
}

async function applySmartGeometry(savedGeometry, oldWidth, oldHeight, newWidth, newHeight) {
  const doc = getDoc();
  const layers = flattenTopLayers(doc);

  const scaleX = newWidth / oldWidth;
  const scaleY = newHeight / oldHeight;
  const uniformScale = Math.min(scaleX, scaleY);

  for (const saved of savedGeometry) {
    let layer = layers[saved.index];

    if (!layer || normalizeText(layer.name) !== normalizeText(saved.name)) {
      layer = layers.find(l => normalizeText(l.name) === normalizeText(saved.name));
    }

    if (!layer) continue;

    try {
      const before = layerBounds(layer);
      const currentW = before.right - before.left;

      if (currentW > 0) {
        const targetW = saved.width * uniformScale;
        const scalePct = (targetW / currentW) * 100;
        await layer.scale(scalePct, scalePct, constants.AnchorPosition.MIDDLECENTER);
      }

      const after = layerBounds(layer);
      const newCenterX = (after.left + after.right) / 2;
      const newCenterY = (after.top + after.bottom) / 2;

      const targetCenterX = saved.centerX * newWidth;
      const targetCenterY = saved.centerY * newHeight;

      await layer.translate(
        targetCenterX - newCenterX,
        targetCenterY - newCenterY
      );
    } catch (err) {
      console.warn("Smart resize skipped layer:", saved.name, err);
    }
  }
}

async function quickFormat(key) {
  const preset = FORMAT_PRESETS[key];
  if (!preset) throw new Error("Format preset bulunamadı.");

  const mode = document.getElementById("resizeMode").value || "smart";
  const duplicateFirst = document.getElementById("duplicateBeforeResize").checked;
  const safeAfter = document.getElementById("safeAfterResize").checked;

  const sourceDoc = getDoc();
  const oldWidth = px(sourceDoc.width);
  const oldHeight = px(sourceDoc.height);
  const geometry = mode === "smart" ? captureTopLayerGeometry(sourceDoc) : [];

  setStatus(preset.name + " hazırlanıyor...");

  await modal("Hızlı Format " + preset.name, async () => {
    if (duplicateFirst) {
      await duplicateActiveDocumentForFormat(preset.name);
    }

    await resizeCanvasTo(preset.width, preset.height);

    if (mode === "smart") {
      await applySmartGeometry(
        geometry,
        oldWidth,
        oldHeight,
        preset.width,
        preset.height
      );
    }
  });

  if (safeAfter) {
    await applySafePreset(preset.safe);
  }

  await refreshDocInfo();

  setStatus(
    "✓ " + preset.name +
    (mode === "smart" ? " akıllı uyarlandı" : " canvas ölçüsü uygulandı") +
    (duplicateFirst ? " • kopya belge" : "")
  );
}


async function applyScalePreset(key) {
  const preset = FORMAT_PRESETS[key];
  if (!preset) throw new Error("Ölçek preset bulunamadı.");

  await modal("Ölçek " + preset.name, async () => {
    await resizeCanvasTo(preset.width, preset.height);
  });

  document.querySelectorAll("[data-scale-preset]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.scalePreset === key);
  });

  setStatus("✓ " + preset.name + " • " + preset.width + "×" + preset.height);
}

const SAFE_PRESETS = {
  reels: { name: "Reels 9:16", left: 0.0556, right: 0.1111, top: 0.1146, bottom: 0.1667 },
  story: { name: "Story 9:16", left: 0.0556, right: 0.0556, top: 0.13, bottom: 0.13 },
  post45: { name: "Post 4:5", left: 0.075, right: 0.075, top: 0.06, bottom: 0.06 },
  wide169: { name: "Yatay 16:9", left: 0.05, right: 0.05, top: 0.08, bottom: 0.08 },
  square: { name: "Kare 1:1", left: 0.07, right: 0.07, top: 0.07, bottom: 0.07 },
  generic916: { name: "Genel 9:16", left: 0.075, right: 0.075, top: 0.10, bottom: 0.10 }
};

async function applySafePreset(key) {
  const preset = SAFE_PRESETS[key];
  if (!preset) throw new Error("Safe Zone preset bulunamadı.");

  await modal("Safe Zone " + preset.name, async () => {
    const doc = getDoc();
    const w = px(doc.width);
    const h = px(doc.height);

    if (w <= 0 || h <= 0) throw new Error("Belge ölçüsü okunamadı.");

    await clearGuidesInternal();

    const guides = [
      [constants.Direction.VERTICAL, w * preset.left],
      [constants.Direction.VERTICAL, w * (1 - preset.right)],
      [constants.Direction.HORIZONTAL, h * preset.top],
      [constants.Direction.HORIZONTAL, h * (1 - preset.bottom)]
    ];

    for (const [direction, position] of guides) {
      doc.guides.add(direction, position);
    }
  });

  lastSafePreset = key;
  guidesVisible = true;

  document.querySelectorAll("[data-safe]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.safe === key);
  });

  setStatus("✓ " + preset.name + " Safe Zone eklendi");
}

async function clearGuides() {
  await modal("Guide Temizle", clearGuidesInternal);
  guidesVisible = false;
  document.querySelectorAll("[data-safe]").forEach(btn => btn.classList.remove("active"));
  setStatus("✓ Guide'lar temizlendi");
}

async function toggleGuides() {
  if (guidesVisible) {
    await modal("Guide Gizle", clearGuidesInternal);
    guidesVisible = false;
    setStatus("✓ Safe Zone gizlendi");
  } else {
    if (!lastSafePreset) throw new Error("Önce bir Safe Zone seç.");
    await applySafePreset(lastSafePreset);
  }
}

async function alignSelected(axis) {
  await modal("Hizala", async () => {
    const doc = getDoc();
    const layer = getLayer();
    const b = layerBounds(layer);
    const docW = px(doc.width);
    const docH = px(doc.height);
    const lw = b.right - b.left;
    const lh = b.bottom - b.top;

    let dx = 0;
    let dy = 0;
    if (axis === "h" || axis === "both") dx = ((docW - lw) / 2) - b.left;
    if (axis === "v" || axis === "both") dy = ((docH - lh) / 2) - b.top;

    await layer.translate(dx, dy);
  });

  setStatus(axis === "h" ? "✓ Yatay ortalandı" : axis === "v" ? "✓ Dikey ortalandı" : "✓ Tam ortalandı");
}

async function alignLayerToPoint(point) {
  await modal("9 Nokta Hizala", async () => {
    const doc = getDoc();
    const layer = getLayer();
    const b = layerBounds(layer);
    const docW = px(doc.width);
    const docH = px(doc.height);
    const lw = b.right - b.left;
    const lh = b.bottom - b.top;

    const useSafe = !!document.getElementById("safeAlignMargin")?.checked;
    const mx = useSafe ? docW * 0.05 : 0;
    const my = useSafe ? docH * 0.05 : 0;

    const leftX = mx;
    const centerX = (docW - lw) / 2;
    const rightX = docW - mx - lw;

    const topY = my;
    const centerY = (docH - lh) / 2;
    const bottomY = docH - my - lh;

    const map = {
      tl: [leftX, topY],
      tc: [centerX, topY],
      tr: [rightX, topY],
      ml: [leftX, centerY],
      mc: [centerX, centerY],
      mr: [rightX, centerY],
      bl: [leftX, bottomY],
      bc: [centerX, bottomY],
      br: [rightX, bottomY]
    };

    const target = map[point];
    if (!target) throw new Error("Hizalama noktası bulunamadı.");

    await layer.translate(target[0] - b.left, target[1] - b.top);
  });

  setStatus("✓ Layer hizalandı" + (document.getElementById("safeAlignMargin")?.checked ? " • %5 pay" : ""));
}

async function toggleSelectedLayerVisibility() {
  const layer = getLayer();
  await modal("Layer Görünürlük", async () => {
    layer.visible = !layer.visible;
  });
  setStatus(layer.visible ? "✓ Layer görünür" : "✓ Layer gizlendi");
}

async function toggleSelectedLayerLock() {
  const layer = getLayer();
  await modal("Layer Kilit", async () => {
    if ("locked" in layer) {
      layer.locked = !layer.locked;
      return;
    }

    await batchPlay([{
      _obj: "set",
      _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
      to: {
        _obj: "layer",
        layerLocking: {
          _obj: "layerLocking",
          protectAll: true
        }
      },
      _options: { dialogOptions: "dontDisplay" }
    }], {});
  });

  setStatus("✓ Layer kilit durumu değiştirildi");
}

async function moveSelectedLayerToEdge(direction) {
  getLayer();

  await modal(direction === "front" ? "Layer En Öne" : "Layer En Arkaya", async () => {
    await batchPlay([{
      _obj: "move",
      _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
      to: {
        _ref: "layer",
        _enum: "ordinal",
        _value: direction === "front" ? "front" : "back"
      },
      _options: { dialogOptions: "dontDisplay" }
    }], {});
  });

  setStatus(direction === "front" ? "✓ Layer en öne getirildi" : "✓ Layer en arkaya gönderildi");
}

async function scaleAndCenter(mode) {
  await modal(mode === "fit" ? "Fit" : "Fill", async () => {
    const doc = getDoc();
    const layer = getLayer();
    let b = layerBounds(layer);

    const layerW = b.right - b.left;
    const layerH = b.bottom - b.top;
    const docW = px(doc.width);
    const docH = px(doc.height);

    if (layerW <= 0 || layerH <= 0) throw new Error("Layer ölçüsü geçersiz.");

    const sx = docW / layerW;
    const sy = docH / layerH;
    const scale = mode === "fill" ? Math.max(sx, sy) : Math.min(sx, sy);

    await layer.scale(scale * 100, scale * 100, constants.AnchorPosition.MIDDLECENTER);

    b = layerBounds(layer);
    const nw = b.right - b.left;
    const nh = b.bottom - b.top;

    await layer.translate(((docW - nw) / 2) - b.left, ((docH - nh) / 2) - b.top);
  });

  setStatus(mode === "fit" ? "✓ Layer canvas'a sığdırıldı" : "✓ Layer canvas'ı doldurdu");
}

async function setWidthPercent(percent) {
  await modal("Genişlik %" + percent, async () => {
    const doc = getDoc();
    const layer = getLayer();
    let b = layerBounds(layer);

    const currentW = b.right - b.left;
    const docW = px(doc.width);
    const docH = px(doc.height);
    if (currentW <= 0) throw new Error("Layer genişliği geçersiz.");

    const scalePct = ((docW * (percent / 100)) / currentW) * 100;
    await layer.scale(scalePct, scalePct, constants.AnchorPosition.MIDDLECENTER);

    b = layerBounds(layer);
    const nw = b.right - b.left;
    const nh = b.bottom - b.top;
    await layer.translate(((docW - nw) / 2) - b.left, ((docH - nh) / 2) - b.top);
  });

  setStatus("✓ Layer canvas genişliğinin %" + percent + " değerine ayarlandı");
}

async function convertToSmartObject() {
  getLayer();
  await modal("Smart Object", async () => {
    await batchPlay([{ _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } }], {});
  });
  setStatus("✓ Smart Object'a dönüştürüldü");
}

async function groupSelectedLayers() {
  await modal("Grupla", async () => {
    const doc = getDoc();
    await doc.createLayerGroup({ name: "KRALI GROUP", fromLayers: getSelectedLayers() });
  });
  setStatus("✓ Seçili layer'lar gruplandı");
  await refreshDocInfo();
}

async function renameSelectedLayer() {
  const layer = getLayer();
  const current = layer.name || "";
  const next = prompt("Yeni layer adı:", current);
  if (next === null) return;
  const clean = String(next).trim();
  if (!clean) throw new Error("Layer adı boş bırakılamaz.");

  await modal("Layer Adlandır", async () => {
    getLayer().name = clean;
  });
  setStatus("✓ Layer adı: " + clean);
}

async function duplicateSelectedLayer() {
  const layer = getLayer();
  await modal("Layer Kopyala", async () => {
    await layer.duplicate();
  });
  setStatus("✓ Layer kopyalandı");
  await refreshDocInfo();
}

async function placeAsset() {
  getDoc();
  const file = await fs.getFileForOpening({
    allowMultiple: false,
    types: ["png", "jpg", "jpeg", "webp", "tif", "tiff", "psd", "psb", "svg"]
  });
  if (!file) return setStatus("Asset seçimi iptal edildi");
  await placeEntry(file, "Dosyadan Asset");
  setStatus("✓ Asset Smart Object olarak eklendi");
}

function findBrandFromCommand(input) {
  const normalizedInput = normalizeText(input);
  return memory.brands.find(brand => normalizedInput.includes(normalizeText(brand.name))) || null;
}

function findAssetFromCommand(brand, input) {
  if (!brand || !brand.assets) return null;
  const normalizedInput = normalizeText(input);

  const direct = brand.assets.find(asset => normalizedInput.includes(normalizeText(asset.name)));
  if (direct) return direct;

  const typeHints = [
    ["logo", ["logo"]],
    ["product", ["urun", "product"]],
    ["background", ["background", "arka plan", "arkaplan"]],
    ["decor", ["dekor", "decor"]]
  ];

  for (const [type, hints] of typeHints) {
    if (hints.some(h => normalizedInput.includes(h))) {
      const typed = brand.assets.find(asset => asset.type === type);
      if (typed) return typed;
    }
  }

  return null;
}

async function runAssistant() {
  const raw = document.getElementById("assistantPrompt").value.trim();
  const input = normalizeText(raw);
  if (!input) throw new Error("Bir komut yaz.");

  let didSomething = false;

  const commandBrand = findBrandFromCommand(raw);
  if (commandBrand) {
    memory.selectedBrandId = commandBrand.id;
    brandSelect.value = commandBrand.id;
    await saveMemory();
    renderAssets();
    renderLayouts();

    const commandAsset = findAssetFromCommand(commandBrand, raw);
    if (commandAsset) {
      await placeMemoryAsset(commandAsset);
      didSomething = true;
    }
  }

  if (input.includes("reels")) { await applySafePreset("reels"); didSomething = true; }
  else if (input.includes("story") || input.includes("hikaye")) { await applySafePreset("story"); didSomething = true; }
  else if (input.includes("4:5") || input.includes("4x5")) { await applySafePreset("post45"); didSomething = true; }
  else if (input.includes("16:9") || input.includes("16x9") || input.includes("yatay")) { await applySafePreset("wide169"); didSomething = true; }
  else if (input.includes("kare") || input.includes("1:1")) { await applySafePreset("square"); didSomething = true; }

  if (input.includes("smart")) { await convertToSmartObject(); didSomething = true; }
  if (input.includes("grupla") || input.includes("grup")) { await groupSelectedLayers(); didSomething = true; }

  if (input.includes("fill") || input.includes("doldur")) { await scaleAndCenter("fill"); didSomething = true; }
  else if (input.includes("fit") || input.includes("sigdir")) { await scaleAndCenter("fit"); didSomething = true; }
  else if (input.includes("ortala") || input.includes("merkez")) { await alignSelected("both"); didSomething = true; }

  if (!didSomething) throw new Error("Komut anlaşılmadı veya eşleşen kayıtlı asset bulunamadı.");
  setStatus("✓ Lokal Assistant komutu tamamlandı");
}


const CURRENT_VERSION = "0.11.0";

const UPDATE_FILES = ["app.bundle.js"];

function setUpdateStatus(message) {
  if (updateStatusEl) updateStatusEl.textContent = message;
}

function parseVersion(value) {
  return String(value || "")
    .replace(/^v/i, "")
    .trim()
    .split(".")
    .map(part => Number(part) || 0);
}

function compareVersions(a, b) {
  const av = parseVersion(a);
  const bv = parseVersion(b);
  const len = Math.max(av.length, bv.length);

  for (let i = 0; i < len; i++) {
    const ai = av[i] || 0;
    const bi = bv[i] || 0;
    if (ai > bi) return 1;
    if (ai < bi) return -1;
  }

  return 0;
}

async function getUpdaterSettingsFile() {
  const folder = await fs.getDataFolder();
  let file;

  try {
    file = await folder.getEntry("krali-updater.json");
  } catch (_) {
    file = await folder.createFile("krali-updater.json", { overwrite: false });
    await file.write(JSON.stringify({ folderToken: "" }, null, 2));
  }

  return file;
}

async function readUpdaterSettings() {
  const file = await getUpdaterSettingsFile();

  try {
    const raw = await file.read();
    return raw ? JSON.parse(raw) : { folderToken: "" };
  } catch (_) {
    return { folderToken: "" };
  }
}

async function writeUpdaterSettings(settings) {
  const file = await getUpdaterSettingsFile();
  await file.write(JSON.stringify(settings, null, 2));
}

async function resetUpdaterFolder() {
  await writeUpdaterSettings({ folderToken: "" });
  setUpdateStatus("KRALI-DESIGN klasörünü seç...");
  const folder = await getWritablePluginFolder(true);
  setUpdateStatus("✓ Güncelleme klasörü kaydedildi: " + folder.name);
  setStatus("✓ Güncelleme klasörü kaydedildi");
}

async function getWritablePluginFolder(forcePick) {
  const settings = await readUpdaterSettings();

  if (!forcePick && settings.folderToken) {
    try {
      return await fs.getEntryForPersistentToken(settings.folderToken);
    } catch (_) {
      setUpdateStatus("Eski klasör izni geçersiz. Klasörü tekrar seç.");
    }
  }

  setUpdateStatus("KRALI-DESIGN klasörünü seç...");
  const folder = await fs.getFolder();

  if (!folder) {
    throw new Error("Klasör seçimi iptal edildi.");
  }

  const token = await fs.createPersistentToken(folder);
  await writeUpdaterSettings({ folderToken: token });

  setUpdateStatus("Klasör kaydedildi: " + folder.name);
  return folder;
}

async function fetchGithubFile(path) {
  const url =
    "https://raw.githubusercontent.com/izmirli-ali/krali-design/main/" +
    path +
    "?t=" +
    Date.now();

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(path + " indirilemedi (HTTP " + response.status + ")");
  }

  return await response.text();
}

async function getOrCreateFile(folder, path) {
  try {
    return await folder.getEntry(path);
  } catch (_) {
    return await folder.createFile(path, { overwrite: true });
  }
}

async function writeTextFile(folder, path, content) {
  const file = await getOrCreateFile(folder, path);
  await file.write(content);
}

async function checkRemoteVersion() {
  setUpdateStatus("GitHub sürümü kontrol ediliyor...");
  const remoteVersion = (await fetchGithubFile("VERSION")).trim();

  const cmp = compareVersions(remoteVersion, CURRENT_VERSION);

  if (cmp > 0) {
    setUpdateStatus("Yeni sürüm bulundu: v" + remoteVersion + " • mevcut v" + CURRENT_VERSION);
  } else if (cmp === 0) {
    setUpdateStatus("Güncel sürümdesin: v" + CURRENT_VERSION);
  } else {
    setUpdateStatus("Yerel sürüm GitHub'dan daha yeni: v" + CURRENT_VERSION);
  }

  return remoteVersion;
}

async function updatePluginFromGitHub() {
  const btn = document.getElementById("updatePlugin");
  const originalText = "Güncelle";

  try {
    if (btn) btn.textContent = "Kontrol…";

    const remoteVersion = (await fetchGithubFile("VERSION")).trim();

    if (compareVersions(remoteVersion, CURRENT_VERSION) <= 0) {
      if (btn) btn.textContent = "Güncel";
      setStatus("✓ Güncel sürüm: v" + CURRENT_VERSION);
      setTimeout(() => { if (btn) btn.textContent = originalText; }, 1400);
      return;
    }

    if (btn) btn.textContent = "İndiriliyor…";
    const folder = await getWritablePluginFolder(false);
    const bundleContent = await fetchGithubFile("app.bundle.js");

    if (btn) btn.textContent = "Kuruluyor…";
    await writeTextFile(folder, "app.bundle.js", bundleContent);

    // Load & Watch burada bundle değişikliğini algılayıp paneli yeniden yükler.
    // Reload gecikirse kullanıcıya görünür başarı durumu bırak.
    if (btn) btn.textContent = "v" + remoteVersion;
    setStatus("✓ v" + remoteVersion + " kuruldu");
  } catch (err) {
    console.error("Updater error:", err);
    const message = err && err.message ? err.message : String(err);
    if (btn) btn.textContent = "Tekrar Dene";
    setStatus("Güncelleme hatası: " + message);
  }
}

async function guarded(fn) {
  try {
    await fn();
  } catch (err) {
    console.error(err);
    setStatus("Hata: " + (err && err.message ? err.message : String(err)));
  }
}

document.getElementById("updatePlugin").addEventListener("click", () => guarded(updatePluginFromGitHub));
const refreshDocBtn = document.getElementById("refreshDoc");
if (refreshDocBtn) refreshDocBtn.addEventListener("click", () => guarded(refreshDocInfo));

document.querySelectorAll("[data-format]").forEach(btn => {
  btn.addEventListener("click", () => guarded(() => quickFormat(btn.dataset.format)));
});

document.querySelectorAll("[data-safe]").forEach(btn => {
  btn.addEventListener("click", () => guarded(() => applySafePreset(btn.dataset.safe)));
});

document.getElementById("toggleGuides").addEventListener("click", () => guarded(toggleGuides));
document.getElementById("clearGuides").addEventListener("click", () => guarded(clearGuides));

document.querySelectorAll("[data-align-point]").forEach(btn => {
  btn.addEventListener("click", () => guarded(() => alignLayerToPoint(btn.dataset.alignPoint)));
});

document.getElementById("centerH").addEventListener("click", () => guarded(() => alignSelected("h")));
document.getElementById("centerV").addEventListener("click", () => guarded(() => alignSelected("v")));
document.getElementById("centerLayer").addEventListener("click", () => guarded(() => alignSelected("both")));
document.getElementById("fitLayer").addEventListener("click", () => guarded(() => scaleAndCenter("fit")));
document.getElementById("fillLayer").addEventListener("click", () => guarded(() => scaleAndCenter("fill")));

document.getElementById("smartObject").addEventListener("click", () => guarded(convertToSmartObject));
document.getElementById("groupLayers").addEventListener("click", () => guarded(groupSelectedLayers));
document.getElementById("renameLayer").addEventListener("click", () => guarded(renameSelectedLayer));
document.getElementById("duplicateLayer").addEventListener("click", () => guarded(duplicateSelectedLayer));
document.getElementById("toggleLayerVisible").addEventListener("click", () => guarded(toggleSelectedLayerVisibility));
document.getElementById("toggleLayerLock").addEventListener("click", () => guarded(toggleSelectedLayerLock));
document.getElementById("bringLayerFront").addEventListener("click", () => guarded(() => moveSelectedLayerToEdge("front")));
document.getElementById("sendLayerBack").addEventListener("click", () => guarded(() => moveSelectedLayerToEdge("back")));
const placeAssetTopBtn = document.getElementById("placeAssetTop");
if (placeAssetTopBtn) placeAssetTopBtn.addEventListener("click", () => guarded(placeAsset));
const placeAssetBtn = document.getElementById("placeAsset");
if (placeAssetBtn) placeAssetBtn.addEventListener("click", () => guarded(placeAsset));

document.getElementById("assistantRun").addEventListener("click", () => guarded(runAssistant));
document.getElementById("addBrand").addEventListener("click", () => guarded(addBrand));
document.getElementById("registerAsset").addEventListener("click", () => guarded(registerAsset));
document.getElementById("learnLayout").addEventListener("click", () => guarded(learnLayout));

brandSelect.addEventListener("change", () => guarded(async () => {
  memory.selectedBrandId = brandSelect.value;
  await saveMemory();
  renderAssets();
  renderLayouts();
  const brand = getSelectedBrand();
  setStatus(brand ? "✓ Aktif marka: " + brand.name : "Marka seçilmedi");
}));

const runtimeVersionEl = document.querySelector(".version");
if (runtimeVersionEl) runtimeVersionEl.textContent = "v" + CURRENT_VERSION;
setStatus("KRALI DESIGN v" + CURRENT_VERSION + " hazır");
initMemory();


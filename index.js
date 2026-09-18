const photoshop = require("photoshop");
const { storage } = require("uxp");

const app = photoshop.app;
const core = photoshop.core;
const constants = photoshop.constants;
const batchPlay = photoshop.action.batchPlay;
const fs = storage.localFileSystem;

const statusEl = document.getElementById("status");
let lastSafePreset = null;
let guidesVisible = true;

function setStatus(msg) {
  statusEl.textContent = msg;
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
  if (!doc.activeLayers || !doc.activeLayers.length) {
    throw new Error("En az bir layer seç.");
  }
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

async function modal(name, fn) {
  return await core.executeAsModal(fn, { commandName: "KRALI - " + name });
}

async function clearGuidesInternal() {
  const doc = getDoc();
  if (doc.guides && doc.guides.length) {
    doc.guides.removeAll();
  }
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
    await clearGuidesInternal();

    const w = px(doc.width);
    const h = px(doc.height);

    doc.guides.add(constants.Direction.VERTICAL, w * preset.left);
    doc.guides.add(constants.Direction.VERTICAL, w * (1 - preset.right));
    doc.guides.add(constants.Direction.HORIZONTAL, h * preset.top);
    doc.guides.add(constants.Direction.HORIZONTAL, h * (1 - preset.bottom));
  });

  lastSafePreset = key;
  guidesVisible = true;
  setStatus("✓ " + preset.name + " Safe Zone eklendi");
}

async function clearGuides() {
  await modal("Guide Temizle", async () => {
    await clearGuidesInternal();
  });
  guidesVisible = false;
  setStatus("✓ Guide'lar temizlendi");
}

async function toggleGuides() {
  if (guidesVisible) {
    await modal("Guide Gizle", async () => {
      await clearGuidesInternal();
    });
    guidesVisible = false;
    setStatus("✓ Safe Zone gizlendi");
  } else {
    if (!lastSafePreset) throw new Error("Önce bir Safe Zone preset seç.");
    await applySafePreset(lastSafePreset);
    guidesVisible = true;
    setStatus("✓ Safe Zone tekrar gösterildi");
  }
}

async function centerSelectedLayer() {
  await modal("Ortala", async () => {
    const doc = getDoc();
    const layer = getLayer();
    const b = layerBounds(layer);

    const layerW = b.right - b.left;
    const layerH = b.bottom - b.top;
    const docW = px(doc.width);
    const docH = px(doc.height);

    const dx = ((docW - layerW) / 2) - b.left;
    const dy = ((docH - layerH) / 2) - b.top;

    await layer.translate(dx, dy);
  });
  setStatus("✓ Layer ortalandı");
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
    const percent = scale * 100;

    await layer.scale(percent, percent, constants.AnchorPosition.MIDDLECENTER);

    b = layerBounds(layer);
    const nw = b.right - b.left;
    const nh = b.bottom - b.top;

    await layer.translate(
      ((docW - nw) / 2) - b.left,
      ((docH - nh) / 2) - b.top
    );
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

    const targetW = docW * (percent / 100);
    const scalePct = (targetW / currentW) * 100;

    await layer.scale(scalePct, scalePct, constants.AnchorPosition.MIDDLECENTER);

    b = layerBounds(layer);
    const nw = b.right - b.left;
    const nh = b.bottom - b.top;

    await layer.translate(
      ((docW - nw) / 2) - b.left,
      ((docH - nh) / 2) - b.top
    );
  });

  setStatus("✓ Layer genişliği canvas'ın %" + percent + " değerine ayarlandı");
}

async function convertToSmartObject() {
  getLayer();
  await modal("Smart Object", async () => {
    await batchPlay(
      [{ _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } }],
      {}
    );
  });
  setStatus("✓ Smart Object'a dönüştürüldü");
}

async function groupSelectedLayers() {
  await modal("Grupla", async () => {
    const doc = getDoc();
    const layers = getSelectedLayers();
    await doc.createLayerGroup({
      name: "KRALI GROUP",
      fromLayers: layers
    });
  });
  setStatus("✓ Seçili layer'lar gruplandı");
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

async function placeAsset() {
  getDoc();

  const file = await fs.getFileForOpening({
    allowMultiple: false,
    types: ["png", "jpg", "jpeg", "webp", "tif", "tiff", "psd", "psb", "svg"]
  });

  if (!file) {
    setStatus("Asset seçimi iptal edildi");
    return;
  }

  const token = fs.createSessionToken(file);

  await modal("Asset Ekle", async () => {
    await batchPlay(
      [{
        _obj: "placeEvent",
        null: { _path: token, _kind: "local" },
        freeTransformCenterState: {
          _enum: "quadCenterState",
          _value: "QCSAverage"
        },
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

  setStatus("✓ Asset Smart Object olarak eklendi");
}

async function runAssistant() {
  const input = document.getElementById("assistantPrompt").value.trim().toLocaleLowerCase("tr-TR");
  if (!input) throw new Error("Bir komut yaz.");

  let didSomething = false;

  if (input.includes("reels")) {
    await applySafePreset("reels");
    didSomething = true;
  } else if (input.includes("story") || input.includes("hikaye")) {
    await applySafePreset("story");
    didSomething = true;
  } else if (input.includes("4:5") || input.includes("4x5")) {
    await applySafePreset("post45");
    didSomething = true;
  } else if (input.includes("16:9") || input.includes("16x9") || input.includes("yatay")) {
    await applySafePreset("wide169");
    didSomething = true;
  } else if (input.includes("kare") || input.includes("1:1")) {
    await applySafePreset("square");
    didSomething = true;
  }

  if (input.includes("smart")) {
    await convertToSmartObject();
    didSomething = true;
  }

  if (input.includes("grupla") || input.includes("grup")) {
    await groupSelectedLayers();
    didSomething = true;
  }

  if (input.includes("fill") || input.includes("doldur")) {
    await scaleAndCenter("fill");
    didSomething = true;
  } else if (input.includes("fit") || input.includes("sığdır") || input.includes("sigdir")) {
    await scaleAndCenter("fit");
    didSomething = true;
  } else if (input.includes("ortala") || input.includes("merkez")) {
    await centerSelectedLayer();
    didSomething = true;
  }

  if (!didSomething) {
    throw new Error("Bu komutu henüz tanımıyorum.");
  }

  setStatus("✓ Lokal Assistant komutu tamamlandı");
}

async function guarded(fn) {
  try {
    await fn();
  } catch (err) {
    console.error(err);
    setStatus("Hata: " + (err && err.message ? err.message : String(err)));
  }
}

document.querySelectorAll("[data-safe]").forEach(btn => {
  btn.addEventListener("click", () => guarded(() => applySafePreset(btn.dataset.safe)));
});

document.getElementById("toggleGuides").addEventListener("click", () => guarded(toggleGuides));
document.getElementById("clearGuides").addEventListener("click", () => guarded(clearGuides));
document.getElementById("centerLayer").addEventListener("click", () => guarded(centerSelectedLayer));
document.getElementById("fitLayer").addEventListener("click", () => guarded(() => scaleAndCenter("fit")));
document.getElementById("fillLayer").addEventListener("click", () => guarded(() => scaleAndCenter("fill")));

document.querySelectorAll("[data-widthpct]").forEach(btn => {
  btn.addEventListener("click", () => guarded(() => setWidthPercent(Number(btn.dataset.widthpct))));
});

document.getElementById("smartObject").addEventListener("click", () => guarded(convertToSmartObject));
document.getElementById("groupLayers").addEventListener("click", () => guarded(groupSelectedLayers));
document.getElementById("renameLayer").addEventListener("click", () => guarded(renameSelectedLayer));
document.getElementById("placeAsset").addEventListener("click", () => guarded(placeAsset));
document.getElementById("assistantRun").addEventListener("click", () => guarded(runAssistant));

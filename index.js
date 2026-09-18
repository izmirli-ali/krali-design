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

let lastSafePreset = null;
let guidesVisible = true;
let memoryFile = null;
let memory = { version: 1, selectedBrandId: "", brands: [] };

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
        if (parsed && Array.isArray(parsed.brands)) {
          memory = parsed;
        }
      }
    } catch (err) {
      console.warn("Memory read failed:", err);
    }

    renderBrands();
    setStatus("✓ KRALI hafızası hazır");
  } catch (err) {
    console.error(err);
    setStatus("Hafıza hatası: " + err.message);
  }
}

async function saveMemory() {
  if (!memoryFile) {
    await initMemory();
  }
  await memoryFile.write(JSON.stringify(memory, null, 2));
}

function getSelectedBrand() {
  const id = brandSelect.value || memory.selectedBrandId;
  return memory.brands.find(b => b.id === id) || null;
}

function renderBrands() {
  while (brandSelect.options.length > 1) {
    brandSelect.remove(1);
  }

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
}

function renderAssets() {
  while (assetList.firstChild) {
    assetList.removeChild(assetList.firstChild);
  }

  const brand = getSelectedBrand();
  const assets = brand ? brand.assets || [] : [];
  assetCount.textContent = String(assets.length);

  if (!brand) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Önce bir marka oluştur.";
    assetList.appendChild(empty);
    return;
  }

  if (!assets.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = brand.name + " için henüz kayıtlı asset yok.";
    assetList.appendChild(empty);
    return;
  }

  assets.forEach(asset => {
    const row = document.createElement("div");
    row.className = "assetItem";

    const meta = document.createElement("div");
    meta.className = "assetMeta";

    const name = document.createElement("div");
    name.className = "assetName";
    name.textContent = asset.name;

    const type = document.createElement("div");
    type.className = "assetType";
    type.textContent = ASSET_TYPES[asset.type] || asset.type;

    meta.appendChild(name);
    meta.appendChild(type);

    const actions = document.createElement("div");
    actions.className = "assetActions";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Ekle";
    addBtn.addEventListener("click", () => guarded(() => placeMemoryAsset(asset)));

    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.className = "danger";
    delBtn.addEventListener("click", () => guarded(() => deleteMemoryAsset(asset.id)));

    actions.appendChild(addBtn);
    actions.appendChild(delBtn);

    row.appendChild(meta);
    row.appendChild(actions);
    assetList.appendChild(row);
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

  brand.assets = brand.assets || [];
  brand.assets.push(asset);
  nameInput.value = "";

  await saveMemory();
  renderAssets();
  setStatus("✓ " + asset.name + " hafızaya kaydedildi");
}

async function deleteMemoryAsset(assetId) {
  const brand = getSelectedBrand();
  if (!brand) return;
  brand.assets = (brand.assets || []).filter(a => a.id !== assetId);
  await saveMemory();
  renderAssets();
  setStatus("✓ Asset hafızadan kaldırıldı");
}

async function placeEntry(entry, commandName) {
  const sessionToken = fs.createSessionToken(entry);

  await modal(commandName, async () => {
    await batchPlay(
      [{
        _obj: "placeEvent",
        null: { _path: sessionToken, _kind: "local" },
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
}

async function placeMemoryAsset(asset) {
  getDoc();

  let entry;
  try {
    entry = await fs.getEntryForPersistentToken(asset.token);
  } catch (_) {
    throw new Error(asset.name + " dosyası bulunamadı. Dosya taşınmış veya izin geçersiz olabilir.");
  }

  await placeEntry(entry, "Asset " + asset.name);
  setStatus("✓ " + asset.name + " eklendi");
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

    await layer.translate(
      ((docW - layerW) / 2) - b.left,
      ((docH - layerH) / 2) - b.top
    );
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

    await layer.scale(scale * 100, scale * 100, constants.AnchorPosition.MIDDLECENTER);

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

    const commandAsset = findAssetFromCommand(commandBrand, raw);
    if (commandAsset) {
      await placeMemoryAsset(commandAsset);
      didSomething = true;
    }
  }

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
  } else if (input.includes("fit") || input.includes("sigdir")) {
    await scaleAndCenter("fit");
    didSomething = true;
  } else if (input.includes("ortala") || input.includes("merkez")) {
    await centerSelectedLayer();
    didSomething = true;
  }

  if (!didSomething) {
    throw new Error("Komut anlaşılmadı veya eşleşen kayıtlı asset bulunamadı.");
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
document.getElementById("addBrand").addEventListener("click", () => guarded(addBrand));
document.getElementById("registerAsset").addEventListener("click", () => guarded(registerAsset));

brandSelect.addEventListener("change", () => guarded(async () => {
  memory.selectedBrandId = brandSelect.value;
  await saveMemory();
  renderAssets();
  const brand = getSelectedBrand();
  setStatus(brand ? "✓ Aktif marka: " + brand.name : "Marka seçilmedi");
}));

initMemory();

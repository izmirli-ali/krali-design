#!/usr/bin/env python3
"""KRALI UXP runtime bundle için Photoshop gerektirmeyen statik denetim."""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
BUNDLE = (ROOT / "app.bundle.js").read_text(encoding="utf-8")
MANIFEST = json.loads((ROOT / "manifest.json").read_text(encoding="utf-8"))
VERSION = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
ERRORS = []


def expect(condition, message):
    if not condition:
        ERRORS.append(message)


def occurrences(pattern):
    return len(re.findall(pattern, BUNDLE))


expect(MANIFEST["version"] == VERSION, "manifest.json ve VERSION sürümleri eşleşmiyor.")
expect(f'const CURRENT_VERSION = "{VERSION}"' in BUNDLE, "Runtime sürümü VERSION ile eşleşmiyor.")

for key, width, height in (
    ("vertical", 1080, 1920),
    ("post45", 1080, 1350),
    ("square", 1080, 1080),
    ("horizontal", 1920, 1080),
):
    expect(f'data-scale-preset="{key}"' in BUNDLE, f"Eksik ölçek preset butonu: {key}")
    expect(
        re.search(rf"{key}: \{{[^}}]*width: {width}, height: {height}", BUNDLE) is not None,
        f"Hatalı ölçek boyutu: {key}",
    )

expect(
    occurrences(r'btn\.addEventListener\("click", \(\) => guarded\(\(\) => applyScalePreset\(btn\.dataset\.scalePreset\)\)\);') == 1,
    "Ölçek preset listener'ı yalnızca bir kez bağlanmalı.",
)
expect("await doc.resizeCanvas(" in BUNDLE, "Canvas resize işlemi bulunamadı.")

for key in ("reels", "story", "post45", "wide169", "square", "generic916"):
    expect(f'data-safe="{key}"' in BUNDLE, f"Eksik Safe Zone preset butonu: {key}")

expect('safeZoneToggle.addEventListener("click", () => guarded(toggleSafeZone))' in BUNDLE, "Safe Zone toggle bağlantısı eksik.")

for key in ("tl", "tc", "tr", "ml", "mc", "mr", "bl", "bc", "br"):
    expect(occurrences(fr'data-align-point="{key}"') == 1, f"Hizalama noktası tam bir kez görünmeli: {key}")

expect("alignLayerToPoint(btn.dataset.alignPoint)" in BUNDLE, "3×3 hizalama bağlantısı eksik.")
expect("tr: [rightX, topY]" in BUNDLE, "Sağ üst hizalama eşlemesi hatalı.")
expect("br: [rightX, bottomY]" in BUNDLE, "Sağ alt hizalama eşlemesi hatalı.")
expect('document.getElementById("fitLayer").addEventListener' in BUNDLE, "Fit bağlantısı eksik.")
expect('document.getElementById("fillLayer").addEventListener' in BUNDLE, "Fill bağlantısı eksik.")

if ERRORS:
    print("KRALI statik self-check BAŞARISIZ")
    for error in ERRORS:
        print(f"- {error}")
    sys.exit(1)

print(f"KRALI statik self-check OK (v{VERSION})")

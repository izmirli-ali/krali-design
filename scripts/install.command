#!/bin/bash
set -e

TARGET="$HOME/Documents/KRALI-DESIGN"
REPO="https://github.com/izmirli-ali/krali-design.git"

if ! command -v git >/dev/null 2>&1; then
  echo "Git bulunamadı. Önce Xcode Command Line Tools kurulmalı."
  echo "Terminal'de: xcode-select --install"
  read -n 1 -s -r -p "Kapatmak için bir tuşa bas..."
  exit 1
fi

if [ -d "$TARGET/.git" ]; then
  echo "KRALI DESIGN zaten kurulu. Güncelleniyor..."
  cd "$TARGET"
  git pull --ff-only
else
  echo "KRALI DESIGN indiriliyor..."
  git clone "$REPO" "$TARGET"
fi

chmod +x "$TARGET/scripts/update.command" "$TARGET/scripts/install.command"

echo ""
echo "Kurulum tamamlandı:"
echo "$TARGET"
echo ""
echo "Şimdi UXP Developer Tool > Add Plugin >"
echo "$TARGET/manifest.json"
echo "dosyasını seç ve Load & Watch kullan."
read -n 1 -s -r -p "Kapatmak için bir tuşa bas..."
#!/bin/bash
set -e

REPO_DIR="$HOME/Documents/KRALI-DESIGN"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "KRALI DESIGN repo bulunamadı: $REPO_DIR"
  echo "Önce scripts/install.command dosyasını çalıştır."
  read -n 1 -s -r -p "Kapatmak için bir tuşa bas..."
  exit 1
fi

cd "$REPO_DIR"

echo "KRALI DESIGN güncelleniyor..."
git pull --ff-only

echo ""
echo "Güncelleme tamamlandı."
echo "UXP Developer Tool'da Load & Watch açıksa panel otomatik yenilenir."
echo "manifest.json değişmişse bir kez Unload > Load yap."
read -n 1 -s -r -p "Kapatmak için bir tuşa bas..."
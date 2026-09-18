# KRALI DESIGN

Photoshop için UXP tabanlı workflow hızlandırma paneli.

## v0.2.1

- Reels / Story / 4:5 / 16:9 / 1:1 / Generic 9:16 Safe Zone presetleri
- Safe Zone göster / gizle / temizle
- Center / Fit / Fill
- %80 / %90 / %100 genişlik
- Smart Object
- Layer grouping
- Layer rename
- Asset place
- Local Assistant

## İlk kurulum

Repo'yu Mac'e bir kez kur:

```bash
git clone https://github.com/izmirli-ali/krali-design.git ~/Documents/KRALI-DESIGN
chmod +x ~/Documents/KRALI-DESIGN/scripts/*.command
```

Ardından UXP Developer Tool:

1. Add Plugin
2. `~/Documents/KRALI-DESIGN/manifest.json`
3. Load & Watch

## Güncelleme

```bash
cd ~/Documents/KRALI-DESIGN
git pull
```

veya Finder'dan:

`scripts/update.command`

Manifest değişmedikçe tekrar Add Plugin gerekmez.

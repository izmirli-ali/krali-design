# KRALI DESIGN

Photoshop için UXP tabanlı workflow hızlandırma paneli.

## v0.3.0

### Quick tools
- Reels / Story / 4:5 / 16:9 / 1:1 / Generic 9:16 Safe Zone
- Safe Zone göster / gizle / temizle
- Center / Fit / Fill
- %80 / %90 / %100 genişlik
- Smart Object
- Layer grouping
- Layer rename
- Dosyadan asset ekleme

### Marka Hafızası
- Marka profili oluşturma
- Logo / ürün / background / dekor / diğer asset kaydı
- UXP persistent file token ile dosyayı tekrar seçmeden çağırma
- Kayıtlı asseti tek tıkla Photoshop'a Smart Object olarak yerleştirme
- Asseti hafızadan silme
- Local Assistant içinden marka ve asset çağırma

Örnek:

`Vox beyaz logosunu ekle ve reels safe zone aç`

Kayıtlı marka ve asset adı eşleşirse panel materyali yerleştirir ve Safe Zone'u uygular.

## Güncelleme

Finder:

`~/Documents/KRALI-DESIGN/scripts/update.command`

veya Terminal:

```bash
cd ~/Documents/KRALI-DESIGN
git pull
```

UXP Developer Tool'da **Load & Watch** açık bırakılabilir.

Bu sürümde manifest değişmediği için yeniden Add Plugin gerekmez.

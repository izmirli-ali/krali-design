# KRALI DESIGN

Photoshop için UXP tabanlı workflow hızlandırma paneli.

## v0.6.4

### UI düzeltmesi
- UXP içinde boş görünen CSS Grid yapısı kaldırıldı.
- Tüm Quick Action alanları Flexbox tabanına taşındı.
- Dar Photoshop panelinde butonlar otomatik sarılır.

### Aktif belge
- Belge adı
- Canvas ölçüsü
- Seçili layer sayısı
- Üst seviye layer sayısı

### Updater doğrulama sürümü
- Üst güncelleme satırına **Updater OK** rozeti eklendi.
- Akıllı Uyarla dropdown yazı kontrastı düzeltildi.
- Checkbox açıklamalarının koyu görünmesi düzeltildi.
- Bu sürüm, panel içindeki tek tık updater'ın çalıştığını doğrulamak için hazırlanmıştır.

### Updater klasör seçimi düzeltmesi
- **Klasörü Yeniden Seç** artık yalnızca token sıfırlamaz.
- Butona basınca doğrudan klasör seçici açılır.
- Seçilen KRALI-DESIGN klasörü anında persistent token ile kaydedilir.
- Güncel sürümde olsan bile klasör izni önceden tanımlanabilir.

### Updater v2
- Panelin üstünde ayrı güncelleme durum satırı var.
- Mevcut sürüm ve GitHub sürümü karşılaştırılıyor.
- Güncelleme yoksa açıkça **Güncel sürümdesin** mesajı gösteriliyor.
- Dosyalar önce tamamen belleğe indiriliyor, sonra topluca yazılıyor.
- Klasör izni bozulursa **Klasörü Yeniden Seç** ile sıfırlanabiliyor.
- Hatalar artık görünür biçimde panelde gösteriliyor.

### Gerçek tek tık güncelleme
- Terminal tabanlı updater kaldırıldı.
- Panel artık GitHub raw dosyalarını kendisi indirir.
- İlk kullanımda yalnızca bir kez **KRALI-DESIGN klasörünü seçmen** istenir.
- Klasör izni persistent token ile saklanır.
- Sonraki güncellemelerde yalnızca **Sürümü Güncelle** butonuna basılır.
- UXP Developer Tool'da **Load & Watch** açık olmalıdır.

### Panel görünüm düzeltmeleri
- Panel artık dikey kaydırılabilir
- Hızlı Format butonları iki sütunlu ve daha kompakt
- Checkbox boyut/stil sorunu düzeltildi
- Durum çubuğu içeriği kapatmayacak şekilde normal akışa alındı
- Dar panel genişliklerinde butonlar gerektiğinde tek sütuna iner

### Kompakt format ikonları
- 9:16, 4:5, 1:1 ve 16:9 büyük butonları kaldırıldı.
- Yerine en-boy oranını görsel olarak gösteren küçük ikon butonları eklendi.
- Dört format tek satırda daha az yer kaplıyor.
- Fare üzerinde tam çözünürlük bilgisi tooltip olarak görünür.

### Hızlı Format / Smart Resize
- Dikey 9:16 → 1080×1920
- Post 4:5 → 1080×1350
- Kare 1:1 → 1080×1080
- Yatay 16:9 → 1920×1080
- **Akıllı Uyarla:** üst seviye layer boyutlarını ve merkez konumlarını yeni formata oranlı taşır
- **Sadece Canvas:** yalnızca çalışma alanı ölçüsünü değiştirir
- Varsayılan olarak aktif belgeyi önce kopyalar; orijinal PSD korunur
- İstenirse formata uygun Safe Zone otomatik eklenir

### Safe Zone
- Reels 9:16
- Story 9:16
- Post 4:5
- Yatay 16:9
- Kare 1:1
- Genel 9:16
- Göster / Gizle
- Temizle

### Yerleşim
- Yatay ortala
- Dikey ortala
- Tam ortala
- Fit
- Fill
- %80 / %90 / %100 genişlik
- Dosyadan asset yerleştirme

### Layer
- Smart Object
- Seçilileri grupla
- Layer adlandır
- Layer kopyala

### Marka Hafızası
- Marka oluşturma
- Logo / ürün / background / dekor assetleri
- Persistent token ile assetleri tekrar seçmeden çağırma

### Tasarım Hafızası
- **Tasarımı Öğren** ile aktif PSD'nin üst seviye layer düzenini kaydet
- Layer adı, normalize edilmiş X/Y konumu, genişlik/yükseklik, opacity ve görünürlük kaydı
- Kayıtlı tasarımı başka aynı isimli layer'lara **Uygula**
- Farklı canvas ölçülerine yüzde bazlı uyarlama

## Güncelleme

Panel sağ üstündeki **Sürümü Güncelle** butonunu kullan.

UXP Developer Tool'da **Load & Watch** açık olmalıdır.

v0.6.4 manifest değiştirmez; doğrudan paneldeki Sürümü Güncelle butonu ile alınabilir.nışını düzeltir.nd veya git pull ile al; sonrasında updater v2 kullanılacak.

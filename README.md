# KRALI DESIGN

Photoshop için UXP tabanlı workflow hızlandırma paneli.

### v0.10.3 — Quick Format icon fix
- UXP içinde görünmeyen Grid tabanlı oran ikonları Flexbox yapısına geçirildi.
- 9:16 / 4:5 / 1:1 / 16:9 yazıları geri getirilmeden oran çerçeveleri görünür hale getirildi.
- Her oran ikonuna kırmızı merkez işareti eklendi; boş kutu gibi görünmesi engellendi.
- Hızlı Format fonksiyonları değişmedi: Akıllı / Canvas, belgeyi kopyala ve Safe Zone seçenekleri korunuyor.


### v0.10.2 — Quick Format cleanup
- Aktif Belge kartı kaldırıldı; işlevsel aksiyon içermediği için panelde yer kaplamıyor.
- Hızlı Format butonlarındaki 9:16 / 4:5 / 1:1 / 16:9 metinleri kaldırıldı.
- Her format yalnızca kendi gerçek en-boy oranını temsil eden çerçeve ikonuyla gösteriliyor.
- Tam çözünürlük bilgisi hover tooltip içinde korunuyor.
- Hızlı Format alanı daha görsel ve kompakt hale getirildi.


### v0.10.1 — UI Polish
- Güncelle butonu dar panelde de sağ üstte sabit tutuldu.
- Güncelle kontrolü küçültülüp `↻ Güncelle` haline getirildi.
- Yenile butonu küçük `↻` ikon kontrolüne çevrildi.
- Hızlı Format oran ikonları daha kompakt hale getirildi.
- Safe Zone 3 sütunlu kompakt grid oldu; isim ve oran ayrı satıra alındı.
- Genel buton yüzeyleri koyulaştırıldı ve gri yoğunluğu azaltıldı.
- Kart aralıkları ve padding değerleri küçültüldü.


### v0.10.0 — Workflow Tools
- Yerleşim bölümüne 9 noktalı hizalama grid'i eklendi.
- Hizalamada isteğe bağlı %5 güvenli kenar payı eklendi.
- Layer görünürlük aç/kapat kontrolü eklendi.
- Layer kilitle/kilidi aç kontrolü eklendi.
- Layer'ı en öne getir / en arkaya gönder kontrolleri eklendi.
- Yerleşim ve Layer butonları daha kompakt hale getirildi.


### v0.9.1 — Stabilization
- `saveMemory()` içine yanlışlıkla taşınmış updater kodu temizlendi.
- Güncelle butonu artık işlem sırasında `disabled` yapılmıyor.
- Güncelleme durumu doğrudan buton üzerinde gösteriliyor: Kontrol / İndiriliyor / Kuruluyor / Güncel.
- Butona yüksek z-index ve pointer-events güvenliği eklendi.
- Akıllı / Canvas segment kontrolü gerçekten HTML'e uygulandı.
- Safe Zone 3×2 kompakt grid gerçekten HTML'e uygulandı.


### v0.9.0 — UI Refinement
- Bozuk UXP pseudo-element kırmızı çizgileri kaldırıldı.
- Güncelle butonu koyu temaya alındı; #FF4141 yalnızca vurgu olarak kullanılıyor.
- Akıllı Uyarla / Canvas dropdown yerine segment seçim butonları eklendi.
- Hızlı Format oran ikonları küçültüldü.
- Safe Zone 3×2 kompakt grid yapısına geçti.
- Aktif Belge kartında belge adı ve teknik bilgiler ayrıştırıldı.
- Genel buton gri yoğunluğu azaltıldı, yüzeyler siyaha yaklaştırıldı.


### v0.8.1 — Final UI cleanup
- Eski statik v0.7.0 etiketi kaldırıldı.
- Üst sürüm etiketi runtime CURRENT_VERSION ile zorunlu eşlenir.
- Bundle Updater / Klasör / updater durum kutusu tamamen kaldırıldı.
- Üstte yalnızca Güncelle ve sürüm etiketi bırakıldı.
- Hızlı Format açıklama metni kaldırıldı.
- Panel kartları ve header daha sade hale getirildi.

### v0.8.0 — UI cleanup
- Üst sürüm etiketi artık `CURRENT_VERSION` değerinden runtime'da senkronlanır.
- Updater rozeti kaldırıldı; güncelleme alanı tek satıra indirildi.
- `Sürümü Güncelle` butonu daha kompakt `Güncelle` haline getirildi.
- `Klasörü Yeniden Seç` aksiyonu `Klasör` olarak sadeleştirildi.
- Hızlı Format açıklama metni kaldırıldı; ikonlar küçültüldü.
- Kart, buton, input ve bölüm boşlukları azaltıldı.
- Siyah + #FF4141 tema korunarak daha sıkı ve profesyonel bir panel düzeni oluşturuldu.


### v0.8.0 — Single Bundle Updater
- UI, tema ve çalışma mantığı `app.bundle.js` içinde birleştirildi.
- `index.html` artık yalnızca sabit bootstrap dosyasıdır.
- Panel içi updater bundan sonra yalnızca `app.bundle.js` dosyasını günceller.
- Load & Watch ilk dosya değişiminde reload yapsa bile tek dosya yazıldığı için yarım güncelleme sorunu ortadan kalkar.
- Siyah + #FF4141 tema v0.7.0 bundle içine dahil edilmiştir.
- Bu mimariye geçiş için v0.7.0 bir kez manuel alınmalıdır; sonraki sürümler panelden tek tık güncellenir.


## v0.7.0

### Yeni tema
- Gri ağırlıklı görünüm siyah tabanlı hale getirildi.
- Ana vurgu rengi **#FF4141** oldu.
- Primary/secondary butonlar siyah-gri, aksiyon ve güncelleme butonları kırmızı.
- Hover/focus durumları #FF4141 ile uyumlu.
- Hızlı Format ikonları, updater rozeti, input/select, checkbox ve kart sınırları yeni temaya uyarlandı.
- Eski mavi/yeşil vurgu renkleri kaldırıldı.

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

v0.6.5 manifest değiştirmez; paneldeki Sürümü Güncelle butonu ile alınabilir.n paneldeki Sürümü Güncelle butonu ile alınabilir.nışını düzeltir.nd veya git pull ile al; sonrasında updater v2 kullanılacak.

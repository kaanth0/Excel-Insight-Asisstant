📊 Excel Insight Assistant v0.1
Excel Insight Assistant, .xlsx dosyalarınızı sürükle bırak ile yükleyip, doğal dilde yazdığınız sorulara anında cevap almanızı sağlayan vanilla JavaScript tabanlı hafif bir araçtır. Bootstrap 5 ile responsive tasarıma sahip, modüler ve kolay genişletilebilir yapısıyla ilk sürümde temel analiz ihtiyaçlarınızı karşılar. Proje aktif olarak geliştirilmektedir!

🚀 Mevcut Özellikler (v0.1)
- Excel (.xlsx) dosya yükleme ve JSON’a çevirme (SheetJS)
- Doğal dilde 4 ana analiz sorusunu destekler:
- Toplam satış tutarı nedir?
- En çok satılan ürün hangisi?
- En çok satış yapan temsilci kim?
- Belirli tarihteki toplam satış ne kadar?
- Bootstrap 5 ile şık, mobil uyumlu arayüz
- Modüler JS mimarisi:
- main.js – uygulama kontrol merkezi
- analyzeData.js – temel analiz fonksiyonları
- questionParser.js – doğal dil sorusunu analiz eden beyin

📥 Kurulum & Çalıştırma
- Depoyu klonlayın veya ZIP indirin
git clone https://github.com/kaanth0/Excel-Insight-Asisstant.git
cd Excel-Insight-Asisstant
- index.html dosyasını çift tıklayarak veya canlı sunucuda (VSCode Live Server vb.) açın
- Ana sayfada:
- Excel Dosyasını Yükle butonuyla .xlsx dosyanızı seçin
- “Sorunuz” alanına doğal dil sorularınızı yazın
- Analizi Başlat butonuna tıklayın
- Sonuçlar anında alt kısımda görüntülenecek
Not: Proje tamamen frontend’de çalışır. Sunucu, Node.js veya ek bir altyapı gerektirmez.


📁 Proje Yapısı
excel-insight-assistant/
├── index.html         # Bootstrap 5 tabanlı ana sayfa
├── main.js            # Uygulama kontrol akışı (file input + soru işleme)
├── analyzeData.js     # Toplam, grup bazlı toplam, en çok/değerli analiz fonksiyonları
├── questionParser.js  # Soruyu okuyup hangi analiz fonksiyonunun çalışacağını seçer
├── style.css          # (İsteğe bağlı) ek özel stiller
├── sample.xlsx        # Test ve demo için örnek Excel dosyası
└── example-questions.txt # Deneme sorularının listesi



🧪 Deneme Soruları
example-questions.txt içinde deneyebileceğiniz örnekler:
Toplam satış tutarı nedir?
En çok satılan ürün hangisi?
En çok satış yapan temsilci kim?
2025-06-02 tarihinde ne kadar satış olmuş?



📈 Yol Haritası
| Sürüm | İçerik | 
| v0.1 | Excel yükleme, 4 temel doğal dil analiz sorusu, responsive UI | 
| v0.2 | Ürün/temsilci bazlı detaylı raporlar, filtreleme, ortalama hesaplama | 
| v0.3 | Chart.js ile çubuk/çizgi grafikler, CSV desteği | 
| v0.4 | AI entegrasyonu (OpenAI GPT / Hugging Face), gelişmiş doğal dil işleme | 
| v1.0 | PDF/Excel dışa aktarım, chatbot arayüzü, plugin/SDK sürümleri | 


Her sürümde CHANGELOG.md güncellenecek, kullanıcı talepleri ve katkılar önceliklendirilecek.

🤝 Katkıda Bulunmak
- Depoyu fork’layın
- Yeni bir branch açın (git checkout -b feature/v0.2-xyz)
- Değişikliklerinizi commit edin (git commit -m "feat: yeni analiz fonksiyonu")
- Fork’unuza push edin (git push origin feature/v0.2-xyz)
- Pull request açın
Tüm fikir ve katkılara açığız. Birlikte daha güçlü bir çözüm inşa edelim!

📜 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. İstediğiniz gibi kullanabilir, değiştirebilir ve dağıtabilirsiniz.

Excel Insight Assistant, verinizi konuşturan, genişlemeye her an hazır bir analiz yardımcınız!
Yıldızlamayı unutmayın ⭐️
Herhangi bir sorunuz veya öneriniz olursa issue açmaktan çekinmeyin.

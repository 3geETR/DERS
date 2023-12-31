document.addEventListener('DOMContentLoaded', function() {
    const tarih = new Date();
    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const bugun = gunler[tarih.getDay()];

    const dersProgrami = {
        Pazartesi: {
        turkce: ['Türkçe Ders Kitabı', 'Türkçe Defteri'],
        resim: ['Resim Defteri', 'Boyalar'],
        matematik: ['Matematik İntro', 'Matematik Atölyem'],
	ingilizce: ['İngilizce Shall We', 'İngilizce Defteri'],
        sosyal: ['Sosyal Defteri', 'Sosyal Ders Kitabı']
        },
        Salı: {
            temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
            matematik: ['Matematik İntro', 'Matematik Atölyem'],
            bilgisayar: ['Bir şey Yok :D'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette'],
            sosyal: ['Sosyal Defteri', 'Sosyal Ders Kitabı']
        },
        Çarşamba: {
            turkce: ['Türkçe Adım Adım Zirveye', 'Türkçe Defteri'],
            beden: ['Sivil Giyinme'],
            temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette']
        },
        Perşembe: {
            turkce: ['Türkçe Adım Adım Zirveye', 'Türkçe Defteri', 'Türkçe Deneme Kitabı'],
            matematik: ['Matematik İntro', 'Matematik Atölyem'],
            bilgisayar: ['Bir şey Yok :D'],
            dinKulturuAhlakBilgisi: ['Din Kültürü ve Ahlak Bilgisi Defteri','Din Kültürü ve Ahlak Bilgisi Ders Kitabı']
        },
        Cuma: {
            matematik: ['Matematik İntro', 'Matematik Atölyem'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette'],
            muzik: ['Müzik Ders Kitabı', 'Müzik Defteri', 'Flüt', 'Flüt Müzik Kitabı'],
            ingilizce: ['İngilizce Ders Kitabı', 'İngilizce Defteri']
        },
	Cumartesi: {
            haftasonu: ['Ne bakıyorsun bu gün tatil.']
        }
    };

    const gunElementi = document.getElementById('gun');
    gunElementi.textContent = `Bugün ${bugun}`;

    function dersleriGoster(dersAdi) {
        const dersListesi = document.querySelector(`#${dersAdi} .ders-listesi`);

        if (dersProgrami[bugun] && dersProgrami[bugun][dersAdi]) {
            dersProgrami[bugun][dersAdi].forEach((ders) => {
                const dersItem = document.createElement('li');
                dersItem.textContent = ders;
                dersListesi.appendChild(dersItem);
            });
        } else {
            // Eğer belirli bir gün için belirli bir ders tanımlanmamışsa, o dersi gösterme
            const dersElementi = document.getElementById(dersAdi);
            dersElementi.style.display = 'none';
        }
    }

    const dersler = [
        'turkce', 'resim', 'ingilizce', 'sosyal', 'matematik', 'temelDiniBilgiler', 'bilgisayar', 'fen', 'beden', 'dinKulturuAhlakBilgisi', 'muzik', 'haftasonu'
    ];

    dersler.forEach(function(ders) {
        if (dersProgrami[bugun][ders] && dersProgrami[bugun][ders].length > 0) { 
            dersleriGoster(ders);
        } else {
            const dersElementi = document.getElementById(ders);
            dersElementi.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tarih = new Date();
    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const bugun = gunler[tarih.getDay()];

    const dersProgrami = {
        Pazartesi: {
        turkce: ['Türkçe Deneme Kitabı', 'Türkçe Defteri'],
        temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
        fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette'],
	ingilizce: ['İngilizce Shall We', 'İngilizce Defteri']
        },
        Salı: {
            temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
            matematik: ['Matematik İntro', 'Matematik Atölyem', 'Matematik Ders Kitabı'],
            bilgisayar: ['Bir şey Yok :D'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette'],
            sosyal: ['Sosyal Defteri', 'Sosyal Ders Kitabı']
        },
        Çarşamba: {
            turkce: ['Türkçe Adım Adım Zirveye', 'Türkçe Defteri', 'Türkçe Ders Kitabı'],
            beden: ['Sivil Giyinme'],
            temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette']
        },
        Perşembe: {
            turkce: ['Türkçe Adım Adım Zirveye', 'Türkçe Defteri', 'Türkçe Ders Kitabı'],
            matematik: ['Matematik İntro', 'Matematik Atölyem', 'Matematik Ders Kitabı'],
            bilgisayar: ['Bir şey Yok :D'],
            dinKulturuAhlakBilgisi: ['Din Kültürü ve Ahlak Bilgisi Defteri','Din Kültürü ve Ahlak Bilgisi Ders Kitabı']
        },
        Cuma: {
            matematik: ['Matematik İntro', 'Matematik Atölyem', 'Matematik Ders Kitabı'],
            fen: ['Ben Korkmam Kitabı', 'Fen Ders Kitabı', 'Müsfette'],
            muzik: ['Müzik Ders Kitabı', 'Müzik Defteri'],
            ingilizce: ['İngilizce Ders Kitabı', 'İngilizce Defteri']
        },
	Cumartesi: {
            haftasonu: []
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
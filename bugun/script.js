document.addEventListener('DOMContentLoaded', function() {
    const tarih = new Date();
    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    const bugunTarihi = new Date(tarih);
    bugunTarihi.setDate(tarih.getDate() + 1);
//    const bugun = gunler[bugunTarihi.getDay()];
    const bugun = gunler[tarih.getDay()];

    const dersProgrami = {
        Pazartesi: {
            turkce: ['Türkçe Okuma Kitabı'],
            tasarım: ['Kağıt & Dosya', 'Cetvel'],
            ingilizce: ['İngilizce Ders Kitabı', 'İngilizce Defteri'],
            sosyal: ['Sosyal Defteri', 'Sosyal Ders Kitabı']
        },
        Salı: {
            turkce: ['Türkçe Ders Kitabı', 'Türkçe Defteri'],
            matematik: ['Matematik Ders Kitabı', 'Kaynak Kitaplar', 'Matematik Defteri'],
            fen: ['Fen Ders Kitabı', 'Müsfette'],
            sosyal: ['Sosyal Defteri', 'Sosyal Ders Kitabı']
        },
        Çarşamba: {
            turkce: ['Türkçe Ders Kitabı', 'Türkçe Defteri'],
            beden: ['Sivil Giyinme'],
            muzik: ['Müzik Ders Kitabı', 'Müzik Defteri'],
            fen: ['Fen Ders Kitabı', 'Müsfette']
        },
        Perşembe: {
            ingilizce: ['İngilizce Ders Kitabı', 'İngilizce Defteri'],
            matematik: ['Matematik Ders Kitabı', 'Kaynak Kitaplar', 'Matematik Defteri'],
            s_matematik: ['Matematik Ders Kitabı', 'Kaynak Kitaplar', 'Matematik Defteri'],
            dinKulturuAhlakBilgisi: ['Din Kültürü ve Ahlak Bilgisi Defteri','Din Kültürü ve Ahlak Bilgisi Ders Kitabı']
        },
        Cuma: {
            temelDiniBilgiler: ['Temel Dini Bilgiler Defteri'],
            matematik: ['Matematik Ders Kitabı', 'Kaynak Kitaplar', 'Matematik Defteri'],
            resim: ['Resim Defteri', 'Boya Kalemleri'],
            beden: ['Sivil Giyinme']
        },
        Cumartesi: {
            haftasonu: ['Tatil...']
        },
        Pazar: {
            haftasonu: ['Tatil...']
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
            const dersElementi = document.getElementById(dersAdi);
            dersElementi.style.display = 'none';
        }
    }

    const dersler = [
        'turkce', 'resim', 'ingilizce', 'sosyal', 'matematik', 'temelDiniBilgiler', 
        'tasarım', 'fen', 'beden', 'dinKulturuAhlakBilgisi', 'muzik', 'haftasonu', 's_matematik'
    ];

    // Sadece yarının derslerini göster
    dersler.forEach(function(ders) {
        if (dersProgrami[bugun][ders] && dersProgrami[bugun][ders].length > 0) {
            dersleriGoster(ders);
        } else {
            const dersElementi = document.getElementById(ders);
            dersElementi.style.display = 'none';
        }
    });
});

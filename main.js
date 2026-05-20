const slider = document.getElementById("slider");
const slides = slider.children;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

let currentIndex = 0;

// Nöqtələri dinamik yaratmaq
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.className = `h-2 w-2 rounded-full cursor-pointer transition-colors ${i === 0 ? "bg-blue-400 w-4" : "bg-gray-300"}`;
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const updateDots = () => {
  Array.from(dotsContainer.children).forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.replace("bg-gray-300", "bg-blue-400");
      dot.classList.add("w-4");
    } else {
      dot.classList.replace("bg-blue-400", "bg-gray-300");
      dot.classList.remove("w-4");
    }
  });
};

const goToSlide = (index) => {
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
};

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

// Avtomatik sürüşmə (İstəyə bağlı)
setInterval(() => {
  nextBtn.click();
}, 5000);



// Main tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('tab-active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});
 
// Sub-tabs (checkin)
document.querySelectorAll('.checkin-subtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.checkin-subtab').forEach(b => {
      b.classList.remove('subtab-active'); b.classList.add('subtab-inactive');
    });
    document.querySelectorAll('.checkin-sub-content').forEach(c => c.classList.add('hidden'));
    btn.classList.add('subtab-active'); btn.classList.remove('subtab-inactive');
    document.getElementById('checkin-' + btn.dataset.sub).classList.remove('hidden');
  });
});
 
// Sub-tabs (manage)
document.querySelectorAll('.manage-subtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.manage-subtab').forEach(b => {
      b.classList.remove('subtab-active'); b.classList.add('subtab-inactive');
    });
    document.querySelectorAll('.manage-sub-content').forEach(c => c.classList.add('hidden'));
    btn.classList.add('subtab-active'); btn.classList.remove('subtab-inactive');
    document.getElementById('manage-' + btn.dataset.sub).classList.remove('hidden');
  });
});
 
// Status search type toggle
document.getElementById('statusSearchType').addEventListener('change', function() {
  document.getElementById('status-flightno').classList.toggle('hidden', this.value !== 'flightno');
  document.getElementById('status-route').classList.toggle('hidden', this.value !== 'route');
});
 
// Passenger panel
document.getElementById('passengerTrigger').addEventListener('click', () => {
  document.getElementById('passengerPanel').classList.toggle('hidden');
});
document.getElementById('closePassPanel').addEventListener('click', () => {
  document.getElementById('passengerPanel').classList.add('hidden');
});
let adults = 1;
document.getElementById('incAdult').addEventListener('click', () => {
  adults = Math.min(9, adults + 1);
  document.getElementById('adultCount').textContent = adults;
});
document.getElementById('decAdult').addEventListener('click', () => {
  adults = Math.max(1, adults - 1);
  document.getElementById('adultCount').textContent = adults;
});
document.getElementById('applyPassengerBtn').addEventListener('click', () => {
  const cls = document.getElementById('classSelect').value;
  document.getElementById('passengerDisplayText').textContent = adults + ' sərnişin, ' + cls;
  document.getElementById('passengerPanel').classList.add('hidden');
});
 
// Promo code
document.getElementById('promoCodeBtn').addEventListener('click', () => {
  document.getElementById('promoCodeArea').classList.toggle('hidden');
});


let currencyOpen = false;

function toggleCurrency() {
  currencyOpen = !currencyOpen;
  document.getElementById('currency-dropdown').style.display = currencyOpen ? 'block' : 'none';
  document.getElementById('currency-chevron').style.transform = currencyOpen ? 'rotate(180deg)' : '';
}

function selectCurrency(code) {
  document.getElementById('currency-label').textContent = code;
  currencyOpen = false;
  document.getElementById('currency-dropdown').style.display = 'none';
  document.getElementById('currency-chevron').style.transform = '';
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('#currency-wrapper')) {
    currencyOpen = false;
    document.getElementById('currency-dropdown').style.display = 'none';
    document.getElementById('currency-chevron').style.transform = '';
  }
});


const services = {
        "Yer seçimi": {
            icon: "fa-chair",
            title: "Yer seçimi",
            subtitle: "Öncədən oturacaq seçib daha rahat səyahət edin.",
            text: "Uçuşunuz üçün istədiyiniz oturacağı əvvəlcədən seçin. Pəncərə kənarı, koridor və ya birlikdə oturma kimi seçimlərlə səfərinizi özünüzə uyğunlaşdırın.",
            button: "Yer seç",
            chips: ["Rahatlıq", "Sürətli seçim", "Səyahət öncəsi"],
            stat1: "Daha rahat uçuş",
            stat2: "Check-in zamanı sürətli",
            stat3: "Biletə əlavə olunur",
            features: ["Pəncərə / koridor seçimi", "Ailə ilə birlikdə oturma", "Uçuşdan əvvəl təsdiq"],
            benefit: "Uçuş boyu rahatlıq",
            compatibility: "Əksər reyslərdə aktivdir"
        },
        "AZAL Upgrade": {
            icon: "fa-arrow-up",
            title: "AZAL Upgrade",
            subtitle: "Economy-dən daha yüksək komfort səviyyəsinə keçin.",
            text: "Mövcud biletinizi upgrade edərək daha geniş oturacaq, əlavə komfort və daha xoş uçuş təcrübəsi əldə edin.",
            button: "Upgrade et",
            chips: ["Komfort", "Premium hiss", "Daha geniş yer"],
            stat1: "Yüksək komfort",
            stat2: "Daha geniş oturacaq",
            stat3: "Ödənişli seçim",
            features: ["Daha rahat oturacaq", "Prioritet üstünlüklər", "Premium uçuş təcrübəsi"],
            benefit: "Daha sakit və komfortlu səyahət",
            compatibility: "Seçilmiş reyslərdə mövcuddur"
        },
        "Avtomobil icarəsi": {
            icon: "fa-car",
            title: "Avtomobil icarəsi",
            subtitle: "Təyinat yerində sərbəst hərəkət edin.",
            text: "Səfər etdiyiniz şəhərdə sizə uyğun avtomobili əvvəlcədən bron edin. Hava limanından çıxan kimi avtomobilinizi götürüb yolunuza rahat davam edin.",
            button: "Avtomobil seç",
            chips: ["Sərbəstlik", "Rahat nəqliyyat", "Şəhər içi"],
            stat1: "Səyahət sonrası rahatlıq",
            stat2: "İstədiyin modeli seç",
            stat3: "Bronla hazır olur",
            features: ["Müxtəlif model seçimləri", "Hava limanından götürmə", "Gündəlik / həftəlik icarə"],
            benefit: "Vaxta qənaət",
            compatibility: "Təyinat şəhərlərində aktivdir"
        },
        "Otel bron edin": {
            icon: "fa-hotel",
            title: "Otel bron edin",
            subtitle: "Səfəriniz üçün uyğun qalacaq yer tapın.",
            text: "Səyahət planınıza uyğun otelləri müqayisə edib seçim edin. Büdcəyə uyğun, mərkəzə yaxın və komfortlu qalmaq üçün ideal variantlar bir yerdədir.",
            button: "Otel seç",
            chips: ["Qalacaq yer", "Büdcəyə uyğun", "Rahatlıq"],
            stat1: "Ən uyğun otel",
            stat2: "Müqayisəli seçim",
            stat3: "Sürətli rezerv",
            features: ["Fərqli qiymət aralığı", "Məkan üzrə seçim", "Sərfəli paketlər"],
            benefit: "Səyahət planını tamamlamaq",
            compatibility: "Dünyanın bir çox şəhərində"
        },
        "Turlar": {
            icon: "fa-umbrella-beach",
            title: "Turlar",
            subtitle: "Səyahətinizə maraqlı əlavə edin.",
            text: "Gəzinti, ekskursiya və yerli təcrübələri bir kliklə seçin. Gedəcəyiniz yeri daha yaxşı tanımaq və vaxtı səmərəli keçirmək üçün ideal seçimdir.",
            button: "Turlara bax",
            chips: ["Ekskursiya", "Əyləncə", "Yeni təcrübə"],
            stat1: "Maraqlı marşrutlar",
            stat2: "Bələdçi ilə seçim",
            stat3: "Qısa və ya uzun tur",
            features: ["Şəhər turları", "Mədəniyyət marşrutları", "Ailəvi istirahət paketləri"],
            benefit: "Səyahəti daha yaddaqalan edir",
            compatibility: "Seçilmiş istiqamətlərdə mövcuddur"
        },
        "Əlavə bağaj": {
            icon: "fa-suitcase",
            title: "Əlavə bağaj",
            subtitle: "Lazım olan hər şeyi rahatlıqla aparın.",
            text: "Bagaj limitiniz yetmirsə, əlavə bağaj alaraq bütün əşyalarınızı rahat şəkildə özünüzlə götürə bilərsiniz.",
            button: "Bağaj əlavə et",
            chips: ["Daha çox yer", "Rahat səyahət", "Əlavə seçim"],
            stat1: "Yüklə rahat",
            stat2: "Limit artır",
            stat3: "Sürətli əlavə",
            features: ["Çəki limitini artır", "Onlayn əlavə et", "Gedişdən əvvəl hazırla"],
            benefit: "Əşyalar üçün daha çox yer",
            compatibility: "Əksər biletlərdə mümkündür"
        }
    };

    const cards = document.querySelectorAll(".service-card");

    const iconBox = document.getElementById("detail-icon");
    const title = document.getElementById("detail-title");
    const subtitle = document.getElementById("detail-subtitle");
    const text = document.getElementById("detail-text");
    const btn = document.getElementById("detail-btn");
    const sideTitle = document.getElementById("detail-side-title");
    const sideText = document.getElementById("detail-side-text");
    const benefit = document.getElementById("detail-benefit");
    const compatibility = document.getElementById("detail-compatibility");
    const chipsBox = document.getElementById("detail-chips");
    const featuresBox = document.getElementById("detail-features");
    const stat1 = document.getElementById("detail-stat-1");
    const stat2 = document.getElementById("detail-stat-2");
    const stat3 = document.getElementById("detail-stat-3");

    function renderService(name) {
        const service = services[name];
        if (!service) return;

        iconBox.innerHTML = `<i class="fas ${service.icon} text-2xl"></i>`;
        title.innerText = service.title;
        subtitle.innerText = service.subtitle;
        text.innerText = service.text;
        btn.innerText = service.button;
        sideTitle.innerText = service.title;
        sideText.innerText = service.text;
        benefit.innerText = service.benefit;
        compatibility.innerText = service.compatibility;
        stat1.innerText = service.stat1;
        stat2.innerText = service.stat2;
        stat3.innerText = service.stat3;

        chipsBox.innerHTML = service.chips.map(ch =>
            `<span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">${ch}</span>`
        ).join("");

        featuresBox.innerHTML = service.features.map(item =>
            `<div class="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <i class="fas fa-check-circle text-blue-600"></i>
                <span class="text-sm text-gray-700">${item}</span>
            </div>`
        ).join("");

        cards.forEach(c => c.classList.remove("ring-2", "ring-blue-500", "scale-[1.02]"));
        const activeCard = [...cards].find(c => c.querySelector("span")?.innerText === name);
        if (activeCard) activeCard.classList.add("ring-2", "ring-blue-500", "scale-[1.02]");
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const serviceName = card.querySelector("span").innerText;
            renderService(serviceName);
        });
    });

    renderService("Yer seçimi");
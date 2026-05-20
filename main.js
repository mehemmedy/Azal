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
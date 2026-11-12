// قائمة الموبايل
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// نموذج الحجز
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !phone) {
      alert('يرجى تعبئة الاسم ورقم الجوال');
      return;
    }
    alert('تم إرسال طلبك بنجاح. سنتواصل معك قريباً.\n\n(هذا نموذج تجريبي – اربط النموذج لاحقاً بخدمة بريد أو واتساب)');
    bookingForm.reset();
  });
}

// نموذج التعليق
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
if (reviewForm && reviewsList) {
  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const rating = document.getElementById('rating').value;
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text) return;

    const stars = '★'.repeat(Number(rating)) + '☆'.repeat(5 - Number(rating));
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <strong>${name}</strong>
        <span class="stars">${stars}</span>
      </div>
      <p>${text}</p>
    `;
    reviewsList.prepend(card);
    reviewForm.reset();
    alert('شكراً لتعليقك!');
  });
}

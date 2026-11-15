document.getElementById('bookingForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  var name=document.getElementById('name').value.trim();
  var phone=document.getElementById('phone').value.trim();
  if(!name||!phone){alert('يرجى تعبئة الاسم ورقم الجوال');return}
  alert('تم إرسال طلبك بنجاح. سنتواصل معك قريباً.');
  this.reset();
});
document.getElementById('reviewForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  var name=document.getElementById('reviewName').value.trim();
  var rating=document.getElementById('rating').value;
  var text=document.getElementById('reviewText').value.trim();
  if(!name||!text)return;
  var stars='★'.repeat(Number(rating))+'☆'.repeat(5-Number(rating));
  var card=document.createElement('div');
  card.className='review-card';
  card.innerHTML='<div class="review-header"><strong>'+name+'</strong><span class="stars">'+stars+'</span></div><p>'+text+'</p>';
  document.getElementById('reviewsList').prepend(card);
  this.reset();
  alert('شكراً لتعليقك!');
});

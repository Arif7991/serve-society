// HERO SLIDER
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

const joinForm = document.getElementById("joinForm");
const modal = document.getElementById("thankYouModal");
const closeBtn = document.getElementById("closeModal");

joinForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const reason = document.getElementById("reason").value.trim();

  const adminNumber = "8801938467991"; // 👈 এখানে তোমার WhatsApp number দাও

  const message = `
আসসালামু আলাইকুম,
আমি Serve Society (SS)-এর সাথে যুক্ত হতে চাই।

নাম: ${name}
মোবাইল: ${phone}

কেন যুক্ত হতে চাই:
${reason}
  `;

  const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

  // Show thank you modal
  modal.style.display = "flex";

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Reset form
  joinForm.reset();
});

// Close modal
closeBtn.addEventListener("click", function(){
  modal.style.display = "none";
});

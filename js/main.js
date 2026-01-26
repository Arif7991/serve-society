// HERO SLIDER
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

document.addEventListener("DOMContentLoaded", () => {

  const joinForm = document.getElementById("joinForm");
  const modal = document.getElementById("thankYouModal");
  const closeModalBtn = document.getElementById("closeModal");

  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const reason = document.getElementById("reason").value.trim();
      const agree = document.getElementById("agree").checked;

      if (!agree) {
        alert("অনুগ্রহ করে শর্তাবলীতে সম্মতি প্রদান করুন");
        return;
      }

      const message = 
`🌿 আসসালামু আলাইকুম 🌿

আমি Serve Society (SS) ফাউন্ডেশনের ওয়েবসাইট থেকে যোগাযোগ করছি।

👤 নাম: ${name}
📞 মোবাইল নাম্বার: ${phone}

✍️ কেন আমি Serve Society-এর সাথে যুক্ত হতে চাই:
${reason}

📌 সম্মতি ও অঙ্গীকার:
আমি ঘোষণা করছি যে—
1️⃣ আমি সংগঠনের নিয়ম, শৃঙ্খলা ও নৈতিকতা মেনে চলবো  
2️⃣ সংগঠনের অর্থ, সম্পদ ও কার্যক্রমের উপর কোনো ব্যক্তিগত দাবি করবো না
3️⃣ ভবিষ্যতে সংগঠন ত্যাগ করলে কোনো প্রকার দাবি বা অধিকার করবো না  
4️⃣ সংগঠনের সিদ্ধান্ত দায়িত্বশীল টিম কর্তৃক গৃহীত হবে  
5️⃣ সংগঠনের ভাবমূর্তি ক্ষুণ্ণ হয় এমন কোনো কাজে জড়িত হবো না  

🤝 আমি সমাজ ও মানুষের কল্যাণে কাজ করতে আগ্রহী।

জাযাকাল্লাহ খাইর 🤍
📍 Submitted via Website`;

      // ✅ WhatsApp Number (BD format)
      const whatsappNumber = "8801938467991";
      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Show modal
      modal.style.display = "flex";

      // Open WhatsApp
      window.open(whatsappURL, "_blank");

      // Reset form
      joinForm.reset();
    });
  }

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

});

// ========== ডার্ক মোড ==========
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // ========== মোবাইল মেনু ==========
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.style.display = 'none');
    });

    // ========== স্বয়ংক্রিয় সদস্যবৃন্দ সেকশন ==========
    const membersList = [
      { name: "আরিফ", img: "./images/arif.jpeg", icon: "fas fa-user" },
      { name: "আসিক", img: "./images/asik.jpeg", icon: "fas fa-user" },
      { name: "শরিফ", img: "./images/sorif.jpeg", icon: "fas fa-user" },
      { name: "ইমরান", img: "./images/imran.jpeg", icon: "fas fa-user" },
      { name: "তামিম", img: "./images/tamim.jpeg", icon: "fas fa-user" },
      { name: "সাইফুল ", img: "./images/sayful.jpeg", icon: "fas fa-user" },
      { name: "আছিফ", img: "./images/asif.jpeg", icon: "fas fa-user" },
      { name: "বায়জিদ ", img: "./images/bayzid.jpeg", icon: "fas fa-user" },
      { name: "শামিম ", img: "./images/samim.jpeg", icon: "fas fa-user" },
      { name: "রিজভী ", img: "./images/tamim.jpeg", icon: "fas fa-user" },
      { name: "আবিদ ", img: "./images/abid.jpeg", icon: "fas fa-user" },
      { name: "সাব্বির", img: "./images/sabbir.jpeg", icon: "fas fa-user" },
      { name: "বাবু", img: "./images/babu.jpeg", icon: "fas fa-user" },
      { name: "রফিকুল", img: "./images/rofiq.jpeg", icon: "fas fa-user" }
    ];

    const a = document.getElementById("a");
    a.innerText ="এই মুহূর্তে আমাদের সংক্রিয় সদস্য:" +" " + membersList.length + "জন";
    function renderMembers() {
      const container = document.getElementById('memberScroll');
      container.innerHTML = membersList.map(m => `
        <div class="member-card">
          <div class="member-img">
            ${m.img ? `<img src="${m.img}" alt="${m.name}">` : `<i class="${m.icon}"></i>`}
          </div>
          <h4>${m.name}</h4>
        </div>
      `).join('');
    }
    renderMembers();

    // সার্চ ফাংশন
    const searchInput = document.getElementById('memberSearch');
    searchInput.addEventListener('input', function(e) {
      const term = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.member-card');
      cards.forEach((card, idx) => {
        const name = membersList[idx].name.toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
      });
    });

    // ========== জয়েন ফর্ম (WhatsApp) ==========
    const joinForm = document.getElementById('joinForm');
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const reason = document.getElementById('reason').value.trim();
      const agree = document.getElementById('agree').checked;
      const errorDiv = document.getElementById('formError');

      if (!name || !phone) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'নাম এবং মোবাইল নাম্বার অবশ্যই দিতে হবে।';
        return;
      }
      if (phone.length < 11 || isNaN(phone)) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'সঠিক মোবাইল নাম্বার দিন (১১ সংখ্যা)';
        return;
      }
      if (!agree) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'শর্তাবলীতে সম্মতি প্রদান করুন।';
        return;
      }
      errorDiv.style.display = 'none';

      const msg = `🌿 Serve Society তে যোগদানের আগ্রহ 🌿

👤 নাম: ${name}
📞 মোবাইল: ${phone}
✍️ কেন যুক্ত হতে চান: ${reason || 'উল্লেখ করেনি'}

1️⃣ Serve Society (SS) একটি স্বেচ্ছাসেবী সামাজিক সংগঠন।
            2️⃣ আমি সংগঠনের নিয়ম, শৃঙ্খলা ও নৈতিকতা মেনে চলতে অঙ্গীকার করছি।
            3️⃣ ভবিষ্যতে সংগঠন ত্যাগ করলে কোনো ধরনের অধিকার বা দাবি করবো না।
            4️⃣ সংগঠনের সিদ্ধান্ত দায়িত্বশীল টিম কর্তৃক গৃহীত হবে।
            5️⃣ সংগঠনের ভাবমূর্তি ক্ষুণ্ণ হয় এমন কাজ থেকে বিরত থাকবো।

✅ শর্তাবলীতে সম্মতি প্রদান করেছি।

আমাকে যোগদান প্রক্রিয়ায় সাহায্য করুন।`;
      const whatsappUrl = `https://wa.me/8801938467991?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });

    // ========== মেম্বার ড্যাশবোর্ড প্যানেল ==========
    const memberIcon = document.getElementById('memberIcon');
    const dashboardPanel = document.getElementById('memberDashboard');
    const closeDashboard = document.getElementById('closeDashboard');

    function showPasswordPrompt() {
      const pwd = prompt('🔒 সদস্য ড্যাশবোর্ডে প্রবেশ করতে পাসওয়ার্ড দিন:');
      if (pwd === '2026') {
        dashboardPanel.style.display = 'block';
        document.body.style.overflow = 'hidden';
        loadDashboardData();
      } else if (pwd !== null) {
        alert('❌ ভুল পাসওয়ার্ড!');
      }
    }
    memberIcon.addEventListener('click', showPasswordPrompt);
    closeDashboard.addEventListener('click', () => {
      dashboardPanel.style.display = 'none';
      document.body.style.overflow = '';
    });

    function loadDashboardData() {
      const members = [
        { name: "আরিফ", month: "জানুয়ারি ২০২৬", assigned: 500, paid: 500 },
        { name: "আসিক", month: "জানুয়ারি ২০২৬", assigned: 500, paid: 1000 },
        { name: "শরিফ", month: "জানুয়ারি ২০২৬", assigned: 300, paid: 300 },
        { name: "ইমরান", month: "জানুয়ারি ২০২৬", assigned: 200, paid: 200 },
        { name: "তামিম", month: "জানুয়ারি ২০২৬", assigned: 500, paid: 500 },
        { name: "সাব্বির", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "সাইফুল ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "আছিফ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "বায়জিদ ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "শামিম", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "রিজভী ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "ইমন ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
        { name: "রাশিদুল ", month: "জানুয়ারি ২০২৬", assigned: 400, paid: 0 },
      ];
      let totalAssigned = 0, totalPaid = 0;
      let tableHtml = '';
      members.forEach(m => {
        totalAssigned += m.assigned;
        totalPaid += m.paid;
        const status = m.paid >= m.assigned ? 'PAID' : 'DUE';
        tableHtml += `<tr><td>${m.name}</td><td>${m.month}</td><td><span class="status-badge ${status === 'DUE' ? 'due' : ''}">${status}</span></td></tr>`;
      });
      document.getElementById('membersTable').innerHTML = tableHtml;
      document.getElementById('targetDisplay').innerText = totalAssigned;
      document.getElementById('totalCollected').innerText = totalPaid;
      document.getElementById('totalDue').innerText = totalAssigned - totalPaid;
      const percent = totalAssigned > 0 ? (totalPaid / totalAssigned) * 100 : 0;
      const fill = document.getElementById('progressFill');
      fill.style.width = percent + '%';
      fill.innerText = Math.round(percent) + '%';
    }

    // ========== রিপোর্ট ডাউনলোড ==========
    document.getElementById('downloadPDFReport').addEventListener('click', () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Serve Society - মাসিক রিপোর্ট (জানুয়ারি ২০২৬)', 20, 20);
      doc.setFontSize(12);
      doc.text('মোট সদস্য: ৬ জন', 20, 35);
      doc.text('মোট টার্গেট: ২৯০০ টাকা', 20, 45);
      doc.text('মোট সংগ্রহ: ২৫০০ টাকা', 20, 55);
      doc.text('মোট ব্যয়: ২০০০ টাকা (শীতবস্ত্র প্রকল্প)', 20, 65);
      doc.text('হাতে বাকি: ৫০০ টাকা', 20, 75);
      doc.save('ServeSociety_Report_Jan2026.pdf');
    });
    document.getElementById('downloadExcelReport').addEventListener('click', () => {
      const data = [
        ['নাম', 'মাস', 'নির্ধারিত', 'প্রদত্ত', 'স্ট্যাটাস'],
        ['আরিফ', 'জানুয়ারি ২০২৬', 500, 500, 'PAID'],
        ['আসিক', 'জানুয়ারি ২০২৬', 1000, 1000, 'PAID'],
        ['শরিফ', 'জানুয়ারি ২০২৬', 300, 300, 'PAID'],
        ['ইমরান', 'জানুয়ারি ২০২৬', 200, 0, 'DUE'],
        ['তামিম', 'জানুয়ারি ২০২৬', 500, 500, 'PAID'],
        ['সাব্বির', 'জানুয়ারি ২০২৬', 400, 200, 'DUE']
      ];
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, 'জানুয়ারি রিপোর্ট');
      XLSX.writeFile(wb, 'ServeSociety_Report_Jan2026.xlsx');
    });

    // স্মুথ স্ক্রোল
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        if (mobileMenu.style.display === 'flex') mobileMenu.style.display = 'none';
      });
    });
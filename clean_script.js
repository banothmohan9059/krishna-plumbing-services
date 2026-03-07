<script>
    const IMG = {
      plumbing: '[BASE64_IMAGE]',
      tap: '[BASE64_IMAGE]',
      cleaning: '[BASE64_IMAGE]',
      toilet: '[BASE64_IMAGE]',
      tank: '[BASE64_IMAGE]'
    };

    let services = JSON.parse(localStorage.getItem('krishna_services')) || [
      {
        name: 'Plumbing Services', icon: '🔧', img: 'plumbing', desc: 'Complete residential & commercial plumbing solutions', detail: `At Krishna Plumbing Service, we provide comprehensive plumbing solutions tailored to both residential and commercial clients across Miyapur, Hyderabad. Our skilled technicians handle everything from routine maintenance to complex pipe installations, ensuring your plumbing system works flawlessly. We use high-quality materials and proven techniques to deliver lasting results that stand the test of time.

Whether you're dealing with a stubborn pipe leak, need new bathroom plumbing installed, or require a complete overhaul of your water supply system, our experienced team is equipped to handle it all. We pride ourselves on prompt service, transparent pricing, and professional workmanship — so you can trust that every job will be done right the first time.`},
      {
        name: 'House Cleaning Service', icon: '🏠', img: 'cleaning', desc: 'Professional cleaning for kitchen, bathroom & full home', detail: `Krishna Plumbing Service offers comprehensive house cleaning solutions to keep your home spotless and hygienic. Our trained cleaning professionals use safe, effective cleaning products to thoroughly clean every corner of your home — from the kitchen counters and bathroom tiles to living room floors and bedroom furniture. We understand that a clean home is a healthy home, and we take that responsibility seriously.

Our house cleaning packages are fully customizable to meet your specific needs and budget. Whether you need a one-time deep clean before a special occasion, regular weekly or monthly maintenance cleaning, or focused cleaning for specific areas like bathrooms and kitchens, we've got you covered. Serving Miyapur, Hyderabad and all nearby areas.`},
      {
        name: 'Water Tank Cleaning', icon: '🪣', img: 'tank', desc: 'Complete tank cleaning for safe, hygienic water', detail: `Clean water is essential for your family's health, and a dirty water tank can harbour harmful bacteria, algae, and sediment that contaminate your drinking water. At Krishna Plumbing Service, we provide thorough water tank cleaning and disinfection services to ensure your family always has access to safe, hygienic water. Our process involves complete draining, high-pressure scrubbing, and safe chemical disinfection.

We service all types of water tanks — overhead tanks, underground sumps, and sump-to-overhead systems. Our team comes equipped with all the tools and cleaning agents needed to get the job done efficiently, leaving your tank completely clean and your water supply safe. Regular tank cleaning is recommended every 6–12 months for optimal water quality.`},
      {
        name: 'Toilet Services', icon: '🚽', img: 'toilet', desc: 'Toilet installation, repair & blockage removal', detail: `A malfunctioning toilet is more than just an inconvenience — it can disrupt your entire household routine. Krishna Plumbing Service offers fast and reliable toilet repair, installation, and unblocking services across Miyapur and Hyderabad. From running toilets and broken flush mechanisms to complete toilet replacements, our technicians handle it all with professionalism and speed.

Blocked toilets are our specialty — we use advanced tools to clear even the most stubborn blockages without causing damage to your plumbing system. We install all major brands of toilets and can advise on the best options for your bathroom size and budget. Our team ensures minimal disruption, completing all work neatly and thoroughly.`},
      {
        name: 'Tap & Mixer Repair', icon: '🚿', img: 'tap', desc: 'Repair and installation of taps, mixers & showers', detail: `Dripping taps and faulty mixers waste thousands of litres of water and add significantly to your utility bills. Krishna Plumbing Service provides expert tap repair and mixer installation services to stop the waste and restore full functionality to your fittings. We work with all major brands — including single-lever mixers, pillar taps, concealed mixer valves, and pull-out kitchen taps.

Our technicians carry a comprehensive stock of common tap spare parts, meaning most repairs can be completed in a single visit. We also offer installation services for new taps, kitchen mixers, shower heads, and bathroom fittings. Whether it's a simple washer replacement or a brand-new mixer installation, we deliver clean, professional results every time across Miyapur, Hyderabad.`},
      {
        name: 'Emergency Plumbing', icon: '🚨', img: null, desc: 'Fast emergency response for urgent plumbing issues', detail: `Plumbing emergencies don't wait for convenient times — burst pipes, major leaks, and sewage backups can happen at any hour and cause serious damage if not addressed immediately. Krishna Plumbing Service offers emergency plumbing response across Miyapur and Hyderabad to quickly assess and resolve your urgent plumbing crisis before it causes further damage to your property.

Our emergency plumbers arrive equipped with the tools and materials needed to handle a wide range of urgent situations including burst pipes, major water leaks, drain overflows, and water heater failures. We work swiftly and efficiently to contain the problem and restore your home to safe, working order. Call us at 7075908478 immediately — we're available 7 days a week.`}
    ];

    let areas = JSON.parse(localStorage.getItem('krishna_areas')) || [
      { name: 'Miyapur', type: 'Residential' }, { name: 'Hyderabad', type: 'Commercial' },
      { name: 'Chandanagar', type: 'Residential' }, { name: 'Bachupally', type: 'Residential' },
      { name: 'Nizampet', type: 'Residential' }, { name: 'Kondapur', type: 'Residential' },
      { name: 'KPHB Colony', type: 'Residential' }, { name: 'Kukatpally', type: 'Commercial' },
      { name: 'Hafeezpet', type: 'Residential' }, { name: 'Gachibowli', type: 'Commercial' },
    ];

    let bookings = JSON.parse(localStorage.getItem('krishna_bookings') || '[]');

    let reviews = JSON.parse(localStorage.getItem('krishna_reviews')) || [
      { name: 'Rajesh Kumar', loc: '📍 Miyapur', stars: 5, text: '"Very fast service and affordable price. Technician came within an hour and fixed our pipe leak perfectly. Highly recommended!"', initial: 'R' },
      { name: 'Priya Sharma', loc: '📍 Chandanagar', stars: 5, text: '"Best plumber in Miyapur. Fixed bathroom plumbing and water tank in the same visit. Excellent professional work!"', initial: 'P' },
      { name: 'Anitha Rao', loc: '📍 Kondapur', stars: 5, text: '"Water tank cleaning done thoroughly. They checked everything and ensured safe water. Worth every rupee!"', initial: 'A' },
      { name: 'Venkat Naidu', loc: '📍 Nizampet', stars: 5, text: '"Tap replacement and pipe work done in one day. Very neat and reasonable rates. Will definitely call again!"', initial: 'V' }
    ];

    let stats = JSON.parse(localStorage.getItem('krishna_stats')) || { years: '3+', customers: '500+', email: 'info@krishnaplumbingservices.com' };

    function renderServices() {
      document.getElementById('servicesGrid').innerHTML = services.map((s, i) => `
    <div class="service-card fade-in" style="animation-delay:${i * 0.07}s">
      ${s.imgUrl ? `<div class="service-img"><img src="${s.imgUrl}" alt="${s.name}" loading="lazy"></div>` : (s.img && IMG[s.img] ? `<div class="service-img"><img src="${IMG[s.img]}" alt="${s.name}" loading="lazy"></div>` : '')}
      <div class="service-body">
        <div class="service-icon-row"><span class="service-icon">${s.icon}</span><h3>${s.name}</h3></div>
        ${s.detail ? s.detail.split('\n\n').map(p => `<p>${p}</p>`).join('') : `<p>${s.desc}</p>`}
        <a href="tel:7075908478" class="btn-call-card">📞 Call Now</a>
      </div>
    </div>`).join('');
    }

    function renderAreas() {
      document.getElementById('areasGrid').innerHTML = areas.map(a => `
    <div class="area-card" onclick="window.location='tel:7075908478'">
      <span>📍</span>${a.name}
    </div>`).join('');
    }

    function renderAdminServices() {
      document.getElementById('servicesList').innerHTML = services.length ? services.map((s, i) => `
    <div class="admin-item">
      <div class="admin-item-info"><strong>${s.icon} ${s.name}</strong><span>${s.desc}</span></div>
      <div class="admin-item-actions">
        ${i > 0 ? `<button class="btn-edit" style="background:#f1f5f9; color:#334155; border:1px solid #cbd5e1" onclick="moveServiceUp(${i})">⬆️</button>` : ''}
        ${i < services.length - 1 ? `<button class="btn-edit" style="background:#f1f5f9; color:#334155; border:1px solid #cbd5e1" onclick="moveServiceDown(${i})">⬇️</button>` : ''}
        <button class="btn-edit" onclick="editService(${i})">✏️ Edit</button>
        <button class="btn-delete" onclick="deleteService(${i})">🗑️ Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--muted);font-size:14px;padding:10px;">No services yet.</p>';
    }

    function renderAdminAreas() {
      document.getElementById('areasList').innerHTML = areas.length ? areas.map((a, i) => `
    <div class="admin-item">
      <div class="admin-item-info"><strong>📍 ${a.name}</strong><span>${a.type}</span></div>
      <div class="admin-item-actions">
        <button class="btn-edit" onclick="editArea(${i})">✏️ Edit</button>
        <button class="btn-delete" onclick="deleteArea(${i})">🗑️ Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--muted);font-size:14px;padding:10px;">No areas yet.</p>';
    }

    function renderReviews() {
      const p = document.getElementById('reviewsGrid');
      if (p) {
        p.innerHTML = reviews.map(r => `
        <div class="review-card">
          <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p class="review-text">${r.text}</p>
          <div class="reviewer">
            <div class="reviewer-avatar">${r.initial}</div>
            <div>
              <div class="reviewer-name">${r.name}</div>
              <div class="reviewer-loc">${r.loc}</div>
            </div>
          </div>
        </div>`).join('');
      }
    }

    function renderAdminReviews() {
      document.getElementById('reviewsList').innerHTML = reviews.length ? reviews.map((r, i) => `
    <div class="admin-item">
      <div class="admin-item-info"><strong>${'⭐'.repeat(r.stars)} ${r.name}</strong><span>${r.text}</span></div>
      <div class="admin-item-actions">
        <button class="btn-edit" onclick="editReview(${i})">✏️ Edit</button>
        <button class="btn-delete" onclick="deleteReview(${i})">🗑️ Delete</button>
      </div>
    </div>`).join('') : '<p style="color:var(--muted);font-size:14px;padding:10px;">No reviews yet.</p>';
    }

    function saveReview() {
      const i = parseInt(document.getElementById('editReviewIndex').value);
      const r = {
        name: document.getElementById('revName').value.trim(),
        stars: parseInt(document.getElementById('revStars').value),
        loc: document.getElementById('revLoc').value.trim(),
        text: document.getElementById('revText').value.trim(),
        initial: document.getElementById('revName').value.trim().charAt(0).toUpperCase() || '👤'
      };
      if (!r.name || !r.text) { showToast('❌ Name and Text required'); return; }

      if (i > -1) reviews[i] = r;
      else reviews.push(r);

      localStorage.setItem('krishna_reviews', JSON.stringify(reviews));

      document.getElementById('revName').value = '';
      document.getElementById('revStars').value = '5';
      document.getElementById('revLoc').value = '';
      document.getElementById('revText').value = '';
      document.getElementById('editReviewIndex').value = '-1';
      document.getElementById('reviewFormTitle').textContent = '➕ Add Review';

      renderReviews(); renderAdminReviews(); showToast('✅ Review saved!');
    }

    function editReview(i) {
      document.getElementById('editReviewIndex').value = i;
      document.getElementById('revName').value = reviews[i].name;
      document.getElementById('revStars').value = reviews[i].stars;
      document.getElementById('revLoc').value = reviews[i].loc;
      document.getElementById('revText').value = reviews[i].text;
      document.getElementById('reviewFormTitle').textContent = '✏️ Edit Review';
    }

    function deleteReview(i) {
      if (confirm('Delete this review?')) { reviews.splice(i, 1); localStorage.setItem('krishna_reviews', JSON.stringify(reviews)); renderReviews(); renderAdminReviews(); showToast('🗑️ Deleted'); }
    }

    function saveAdminStats() {
      stats.years = document.getElementById('statYears').value.trim() || '3+';
      stats.customers = document.getElementById('statCustomers').value.trim() || '500+';
      stats.email = document.getElementById('statEmail').value.trim() || 'info@krishnaplumbingservices.com';
      localStorage.setItem('krishna_stats', JSON.stringify(stats));
      renderStats();
      showToast('✅ Stats updated!');
    }

    function renderStats() {
      document.querySelectorAll('.dyn-years').forEach(el => el.textContent = stats.years);
      document.querySelectorAll('.dyn-customers').forEach(el => el.textContent = stats.customers);
      document.querySelectorAll('.dyn-email').forEach(el => el.textContent = stats.email);
      document.querySelectorAll('.dyn-email-link').forEach(el => el.href = 'mailto:' + stats.email);

      const stY = document.getElementById('statYears');
      const stC = document.getElementById('statCustomers');
      const stE = document.getElementById('statEmail');
      if (stY) stY.value = stats.years;
      if (stC) stC.value = stats.customers;
      if (stE) stE.value = stats.email;
    }

    function renderAdminBookings() {
      const list = document.getElementById('bookingsList');
      if (!bookings.length) { list.innerHTML = '<div class="no-bookings">📭 No bookings yet. Customer submissions will appear here.</div>'; return; }
      list.innerHTML = [...bookings].reverse().map(b => `
    <div class="booking-item">
      <div class="b-service">${b.service}</div>
      <div class="b-name">${b.name} — 📞 ${b.phone}</div>
      <div class="b-detail">📍 ${b.area || '—'} · 📅 ${b.date || 'Not specified'} · ⏰ ${b.time}</div>
      ${b.message ? `<div class="b-detail" style="margin-top:4px;">💬 ${b.message}</div>` : ''}
      <div class="b-detail" style="margin-top:6px;color:#f97316;font-weight:700;">🔔 ${b.timestamp}</div>
    </div>`).join('');
    }

    function saveService() {
      const i = parseInt(document.getElementById('editServiceIndex').value);
      const fileInput = document.getElementById('svcImgFile');

      const s = {
        name: document.getElementById('svcName').value.trim(),
        icon: document.getElementById('svcIcon').value.trim() || '🔧',
        desc: document.getElementById('svcDesc').value.trim()
      };

      if (!s.name || !s.desc) { showToast('❌ Please fill required fields'); return; }

      // Handle image upload through FileReader for localStorage
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          s.imgUrl = e.target.result; // Store base64 data URL
          finishSaveService(i, s);
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        // Retain old image if editing and no new image
        if (i >= 0 && services[i].imgUrl) s.imgUrl = services[i].imgUrl;
        else if (i >= 0 && services[i].img) s.img = services[i].img; // old internal IMG mapping
        finishSaveService(i, s);
      }
    }

    function finishSaveService(i, s) {
      if (i >= 0) {
        services[i] = { ...services[i], ...s };
        delete services[i].detail; // Prevent old details from overriding desc on the site
      } else {
        services.push(s);
      }

      ['svcName', 'svcIcon', 'svcDesc'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('svcImgFile').value = '';
      document.getElementById('editServiceIndex').value = '-1';
      document.getElementById('serviceFormTitle').textContent = '➕ Add New Service';

      localStorage.setItem('krishna_services', JSON.stringify(services));
      renderServices(); renderAdminServices(); showToast('✅ Service saved!');
    }

    function editService(i) {
      const s = services[i];
      document.getElementById('editServiceIndex').value = i;
      document.getElementById('svcName').value = s.name;
      document.getElementById('svcIcon').value = s.icon;
      document.getElementById('svcDesc').value = s.desc;
      document.getElementById('serviceFormTitle').textContent = '✏️ Edit Service';
    }

    function deleteService(i) {
      if (confirm('Delete this service?')) { services.splice(i, 1); localStorage.setItem('krishna_services', JSON.stringify(services)); renderServices(); renderAdminServices(); showToast('🗑️ Deleted'); }
    }

    function moveServiceUp(i) {
      if (i > 0) {
        const temp = services[i];
        services[i] = services[i - 1];
        services[i - 1] = temp;
        localStorage.setItem('krishna_services', JSON.stringify(services));
        renderServices(); renderAdminServices();
      }
    }

    function moveServiceDown(i) {
      if (i < services.length - 1) {
        const temp = services[i];
        services[i] = services[i + 1];
        services[i + 1] = temp;
        localStorage.setItem('krishna_services', JSON.stringify(services));
        renderServices(); renderAdminServices();
      }
    }

    function saveArea() {
      const i = parseInt(document.getElementById('editAreaIndex').value);
      const a = { name: document.getElementById('areaName').value.trim(), type: document.getElementById('areaType').value };
      if (!a.name) { showToast('❌ Enter area name'); return; }
      if (i >= 0) areas[i] = a; else areas.push(a);
      document.getElementById('areaName').value = '';
      document.getElementById('editAreaIndex').value = '-1';
      document.getElementById('areaFormTitle').textContent = '➕ Add Service Area';
      localStorage.setItem('krishna_areas', JSON.stringify(areas));
      renderAreas(); renderAdminAreas(); showToast('✅ Area saved!');
    }

    function editArea(i) {
      document.getElementById('editAreaIndex').value = i;
      document.getElementById('areaName').value = areas[i].name;
      document.getElementById('areaType').value = areas[i].type;
      document.getElementById('areaFormTitle').textContent = '✏️ Edit Area';
    }

    function deleteArea(i) {
      if (confirm('Delete this area?')) { areas.splice(i, 1); localStorage.setItem('krishna_areas', JSON.stringify(areas)); renderAreas(); renderAdminAreas(); showToast('🗑️ Deleted'); }
    }

    function submitBooking() {
      const name = document.getElementById('bName').value.trim();
      const phone = document.getElementById('bPhone').value.trim();
      const service = document.getElementById('bService').value;
      if (!name || !phone || !service) { showToast('❌ Fill Name, Phone and Service'); return; }
      const booking = { name, phone, service, date: document.getElementById('bDate').value, area: document.getElementById('bArea').value.trim(), time: document.getElementById('bTime').value, message: document.getElementById('bMessage').value.trim(), timestamp: new Date().toLocaleString('en-IN') };
      bookings.push(booking);
      localStorage.setItem('krishna_bookings', JSON.stringify(bookings));
      const waMsg = encodeURIComponent(`🔧 *NEW BOOKING - Krishna Plumbing Service*\n\n👤 *Name:* ${booking.name}\n📞 *Phone:* ${booking.phone}\n🛠️ *Service:* ${booking.service}\n📅 *Date:* ${booking.date || 'Not specified'}\n⏰ *Time:* ${booking.time}\n📍 *Area:* ${booking.area || 'Not specified'}\n💬 *Problem:* ${booking.message || 'No description'}\n\nPlease confirm availability. Thank you!`);
      window.open(`https://wa.me/917075908478?text=${waMsg}`, '_blank');
      ['bName', 'bPhone', 'bDate', 'bArea', 'bMessage'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('bService').value = '';
      showToast('✅ Booking sent to WhatsApp!');
    }

    function openAdmin() { document.getElementById('loginOverlay').classList.add('active'); setTimeout(() => document.getElementById('loginUser').focus(), 100); }
    function doLogin() {
      if (document.getElementById('loginUser').value === ADMIN_USER && document.getElementById('loginPass').value === ADMIN_PASS) {
        document.getElementById('loginOverlay').classList.remove('active');
        document.getElementById('loginError').style.display = 'none';
        document.getElementById('loginPass').value = '';
        document.getElementById('adminOverlay').classList.add('active');
        renderAdminServices(); renderAdminAreas(); renderAdminReviews(); renderStats(); renderAdminBookings();
      } else { document.getElementById('loginError').style.display = 'block'; }
    }
    function clearBookings() { if (confirm('Clear all bookings?')) { bookings = []; localStorage.removeItem('krishna_bookings'); renderAdminBookings(); showToast('🗑️ Cleared'); } }
    function switchTab(tab) {
      ['services', 'areas', 'reviews', 'stats', 'bookings'].forEach((t, i) => {
        document.querySelectorAll('.admin-tab')[i].classList.toggle('active', t === tab);
        document.getElementById('tab-' + t).classList.toggle('active', t === tab);
      });
      if (tab === 'bookings') renderAdminBookings();
    }
    function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3200); }
    function scrollToSection(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    function toggleMobileNav() { const n = document.getElementById('mobileNav'); n.style.display = n.style.display === 'flex' ? 'none' : 'flex'; }
    function closeMobileNav() { document.getElementById('mobileNav').style.display = 'none'; }
    document.addEventListener('DOMContentLoaded', () => {
      renderServices();
      renderAreas();
      renderReviews();
      renderStats();
    });
  </script>
  <script type="module">
    import { app, auth, provider, db } from './firebase.js';
    import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
    import { collection, addDoc, getDocs, doc, setDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

    // Expose database and methods to window so global functions can access them
    window.db = db;
    window.collection = collection;
    window.addDoc = addDoc;
    window.getDocs = getDocs;
    window.doc = doc;
    window.setDoc = setDoc;
    window.deleteDoc = deleteDoc;
    window.updateDoc = updateDoc;

    window.doLogin = function() {
      signInWithPopup(auth, provider)
        .then((result) => {
          showToast('Login Successful!');
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 1000);
        }).catch((error) => {
          document.getElementById('loginError').style.display = 'block';
          document.getElementById('loginError').innerText = '❌ ' + error.message;
        });
    };
  </script>
</body>

</html>
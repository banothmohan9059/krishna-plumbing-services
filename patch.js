const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newLogic = `
    async function loadFirestoreData() {
      try {
        const sSnap = await window.getDocs(window.collection(window.db, 'services'));
        if (!sSnap.empty) {
          services = [];
          sSnap.forEach(d => { let data = d.data(); data.id = d.id; services.push(data); });
        }
        
        const aSnap = await window.getDocs(window.collection(window.db, 'areas'));
        if (!aSnap.empty) {
          areas = [];
          aSnap.forEach(d => { let data = d.data(); data.id = d.id; areas.push(data); });
        }
        
        const rSnap = await window.getDocs(window.collection(window.db, 'reviews'));
        if (!rSnap.empty) {
          reviews = [];
          rSnap.forEach(d => { let data = d.data(); data.id = d.id; reviews.push(data); });
        }
        
        const stSnap = await window.getDocs(window.collection(window.db, 'stats'));
        if (!stSnap.empty) {
          stSnap.forEach(d => { stats = d.data(); });
        }

        renderServices();
        renderAreas();
        renderReviews();
        renderStats();
      } catch (e) {
        console.error('Error loading Firestore data:', e);
      }
    }

    async function submitBooking() {
      const name = document.getElementById('bName').value.trim();
      const phone = document.getElementById('bPhone').value.trim();
      const service = document.getElementById('bService').value;
      if (!name || !phone || !service) { showToast('❌ Fill Name, Phone and Service'); return; }
      
      const booking = { 
        name, phone, service, 
        date: document.getElementById('bDate').value, 
        area: document.getElementById('bArea').value.trim(), 
        time: document.getElementById('bTime').value, 
        message: document.getElementById('bMessage').value.trim(), 
        timestamp: new Date().toLocaleString('en-IN'),
        status: 'pending'
      };
      
      try {
        await window.addDoc(window.collection(window.db, 'bookings'), booking);
        
        const waMsg = encodeURIComponent(\`🔧 *NEW BOOKING - Krishna Plumbing Service*\\n\\n👤 *Name:* \${booking.name}\\n📞 *Phone:* \${booking.phone}\\n🛠️ *Service:* \${booking.service}\\n📅 *Date:* \${booking.date || 'Not specified'}\\n⏰ *Time:* \${booking.time}\\n📍 *Area:* \${booking.area || 'Not specified'}\\n💬 *Problem:* \${booking.message || 'No description'}\\n\\nPlease confirm availability. Thank you!\`);
        window.open(\`https://wa.me/917075908478?text=\${waMsg}\`, '_blank');
        
        ['bName', 'bPhone', 'bDate', 'bArea', 'bMessage'].forEach(id => document.getElementById(id).value = '');
        document.getElementById('bService').value = '';
        showToast('✅ Booking sent to WhatsApp & Saved!');
      } catch (e) {
        console.error('Error saving booking:', e);
        showToast('❌ Error saving booking. Please try again.');
      }
    }
`;

html = html.replace(/function submitBooking\(\) \{[\s\S]*?showToast\('✅ Booking sent to WhatsApp!'\);\s*\}/, newLogic);
html = html.replace(/document\\.addEventListener\\('DOMContentLoaded', \\(\\) => \\{[\\s\\S]*?renderStats\\(\\);\\s*\\}\\);/, `document.addEventListener('DOMContentLoaded', () => {
      renderServices();
      renderAreas();
      renderReviews();
      renderStats();
      // Wait for firebase to initialize then load real data
      setTimeout(() => {
         if(window.loadFirestoreData) window.loadFirestoreData();
      }, 500);
    });`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');

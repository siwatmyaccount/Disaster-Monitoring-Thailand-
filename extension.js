// extension.js - V3: Toggle Logic

document.addEventListener('DOMContentLoaded', () => {
    initNewsTicker();
    initEvacuationSystem();
    startDangerZoneMonitoring();
    console.log("Extension V3 Loaded");
});

// --- 1. News Ticker (Toggle Mode) ---
const NEWS_ITEMS = [
    "UPDATE: พายุฤดูร้อนเคลื่อนตัวเข้าอีสานตอนบน",
    "แจ้งเตือน: น้ำป่าไหลหลาก อ.เชียงดาว จ.เชียงใหม่",
    "ศูนย์พักพิง: รร.เทศบาล 1 เปิดรับผู้อพยพเพิ่ม 200 ราย",
    "สายด่วน: เจ็บป่วยฉุกเฉินโทร 1669 ตลอด 24 ชม."
];

function initNewsTicker() {
    const tickerHtml = `
        <div id="news-ticker-container" class="ticker-full">
            <div class="ticker-badge"><i class="fa-solid fa-satellite-dish"></i></div>
            <div class="ticker-wrapper">
                <div class="ticker-text">${NEWS_ITEMS.join(' &nbsp;&bull;&nbsp; ')}</div>
            </div>
            <div class="ticker-close" onclick="toggleTickerSize(event)">
                <i class="fa-solid fa-xmark"></i>
            </div>
            
            <i class="fa-solid fa-satellite-dish ticker-icon-only" onclick="toggleTickerSize(event)"></i>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', tickerHtml);
}

window.toggleTickerSize = (e) => {
    e.stopPropagation(); // กันกดซ้อน
    const el = document.getElementById('news-ticker-container');
    
    if (el.classList.contains('ticker-full')) {
        // ย่อลง (Minimize)
        el.classList.remove('ticker-full');
        el.classList.add('ticker-minimized');
        showToast('ซ่อนแถบข่าวแล้ว (กดไอคอนเพื่อเปิดใหม่)', 'info');
    } else {
        // ขยายขึ้น (Expand)
        el.classList.remove('ticker-minimized');
        el.classList.add('ticker-full');
    }
};

// --- 2. Evacuation System (Toggle On/Off) ---
let evacuationLine = null;
let isEvacActive = false; // ตัวแปรเช็คสถานะ

function initEvacuationSystem() {
    const btnHtml = `
        <button id="evacuate-btn" onclick="toggleEvacuationMode()">
            <i id="evac-icon" class="fa-solid fa-person-running text-lg"></i>
            <span id="evac-text">EVAC</span>
        </button>
    `;
    document.body.insertAdjacentHTML('beforeend', btnHtml);
}

// Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

window.toggleEvacuationMode = () => {
    const btn = document.getElementById('evacuate-btn');
    const icon = document.getElementById('evac-icon');
    const text = document.getElementById('evac-text');

    // ถ้าเปิดอยู่ -> ให้ปิด (Clear Route)
    if (isEvacActive) {
        if (evacuationLine) {
            map.removeLayer(evacuationLine);
            evacuationLine = null;
        }
        
        // Reset ปุ่มกลับเป็นสีเขียว
        btn.classList.remove('btn-cancel');
        icon.className = 'fa-solid fa-person-running text-lg';
        text.innerText = 'EVAC';
        
        isEvacActive = false;
        showToast('ปิดเส้นทางอพยพแล้ว', 'info');
        return;
    }

    // ถ้าปิดอยู่ -> ให้เปิด (Calculate Route)
    showToast('กำลังค้นหาศูนย์พักพิงใกล้สุด...', 'info');

    navigator.geolocation.getCurrentPosition(pos => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        
        const shelters = window.mockShelters || [
            { lat: 13.736717, lng: 100.523186, name: 'Safe Point (Default)' }
        ];

        let nearest = null;
        let minDist = Infinity;

        shelters.forEach(s => {
            const d = getDistance(userLat, userLng, s.lat, s.lng);
            if (d < minDist) {
                minDist = d;
                nearest = s;
            }
        });

        if (nearest) {
            if (evacuationLine) map.removeLayer(evacuationLine);
            
            evacuationLine = L.polyline([[userLat, userLng], [nearest.lat, nearest.lng]], {
                color: '#34d399',
                weight: 5,
                opacity: 0.9,
                dashArray: '10, 15',
                lineCap: 'round'
            }).addTo(map);

            map.fitBounds(evacuationLine.getBounds(), { padding: [80, 80] });
            
            // เปลี่ยนปุ่มเป็นสถานะ Active (สีแดง)
            btn.classList.add('btn-cancel');
            icon.className = 'fa-solid fa-xmark text-lg'; // เปลี่ยนไอคอนเป็นกากบาท
            text.innerText = 'CLOSE'; // เปลี่ยนข้อความ
            
            isEvacActive = true;
            showToast(`เส้นทางสู่: ${nearest.name} (${minDist.toFixed(1)} กม.)`, 'success');
        }
    }, err => {
        showToast('ไม่พบพิกัด GPS', 'error');
    });
};

// --- 3. Danger Zone (Same logic) ---
function startDangerZoneMonitoring() {
    const alertHtml = `
        <div id="danger-zone-alert">
            <div class="flex items-start gap-3">
                <div class="bg-red-500/20 p-2 rounded text-red-500 animate-pulse">
                    <i class="fa-solid fa-biohazard text-2xl"></i>
                </div>
                <div>
                    <h3 class="text-white font-bold text-sm uppercase tracking-wider">Warning Zone</h3>
                    <p class="text-gray-300 text-xs mt-1">ตรวจพบจุดเสี่ยงภัยในระยะ 1 กม. โปรดระมัดระวัง</p>
                </div>
            </div>
            <button onclick="dismissAlert()" class="mt-3 w-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2 rounded transition">
                รับทราบ
            </button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', alertHtml);
    setInterval(checkProximity, 10000);
}

function checkProximity() {
    navigator.geolocation.getCurrentPosition(pos => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        const reports = JSON.parse(localStorage.getItem('floodReports')) || [];
        const criticalIncidents = reports.filter(r => r.severity === 'high');
        
        let inDanger = false;
        criticalIncidents.forEach(inc => {
            if (getDistance(userLat, userLng, inc.lat, inc.lng) < 1.0) {
                inDanger = true;
                L.circle([inc.lat, inc.lng], {
                    color: '#ef4444',
                    fillColor: '#ef4444',
                    fillOpacity: 0.1,
                    radius: 1000,
                    weight: 1,
                    dashArray: '5, 5'
                }).addTo(map);
            }
        });

        const alertBox = document.getElementById('danger-zone-alert');
        if (inDanger && alertBox.style.display !== 'block') {
            alertBox.style.display = 'block';
            if(window.navigator.vibrate) window.navigator.vibrate([200, 100, 200]);
        }
    });
}

window.dismissAlert = () => {
    document.getElementById('danger-zone-alert').style.display = 'none';
};
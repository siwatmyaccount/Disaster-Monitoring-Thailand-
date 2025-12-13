// --- 1. Language System ---
let currentLang = 'th';

const translations = {
    th: {
        appTitle: "ศูนย์เฝ้าระวังภัยพิบัติ",
        sevHigh: "วิกฤต", sevMed: "ปานกลาง", sevLow: "เฝ้าระวัง",
        reportBtn: "แจ้งเหตุใหม่", selectPoint: "เลือกจุดบนแผนที่", cancel: "ยกเลิก",
        reportTitle: "รายงานสถานการณ์", severity: "ระดับความรุนแรง", details: "รายละเอียด",
        detailsPlaceholder: "เช่น น้ำท่วมสูง 50 ซม. หรือ ต้องการเรือ...",
        submit: "ยืนยันข้อมูล",
        
        // Safety Check
        safetyTitle: "ยืนยันสถานะความปลอดภัย",
        safetyDesc: "แจ้งให้คนอื่นทราบสถานะของคุณ",
        btnSafe: "ฉันปลอดภัยดี", btnDanger: "ต้องการความช่วยเหลือ",
        safetyLabel: "สถานะ", safetyBtnMain: "ฉันปลอดภัย",
        
        // SOS Triage
        sosTriageTitle: "ระบุความช่วยเหลือที่ต้องการ (แจ้งพิกัดทันที)",
        reqBoat: "ต้องการเรือ", reqFood: "อาหาร/น้ำดื่ม",
        reqMedic: "ผู้ป่วยติดเตียง", reqRoof: "ติดบนหลังคา",
        sosCallTitle: "โทรฉุกเฉิน",

        // SOS List
        sosPolice: "เหตุด่วนเหตุร้าย", sosAmbulance: "เจ็บป่วยฉุกเฉิน",
        sosFire: "ดับเพลิง/กู้ภัย", sosDisaster: "กรมป้องกันภัยฯ",
        sosTourist: "ตำรวจท่องเที่ยว", sosHighway: "ตำรวจทางหลวง",
        sosSocial: "ช่วยเหลือสังคม", sosMental: "สุขภาพจิต",
        sosNote: "กดที่ปุ่มเพื่อโทรออกทันที (เฉพาะมือถือ)",

        // Guide
        guideTitle: "คู่มือเอาตัวรอด & ปฐมพยาบาล",
        catFirstAid: "การปฐมพยาบาลเบื้องต้น",
        catSurvival: "การเอาตัวรอดจากภัยพิบัติ",
        guideFlood: "ตัดสะพานไฟทันที ห้ามเข้าใกล้เสาไฟเด็ดขาด สวมรองเท้าบูท",
        guideShock: "ห้ามสัมผัสตัวผู้ป่วย ใช้ไม้แห้งเขี่ยสายไฟ โทร 1669",
        guideFire: "หมอบต่ำ คลานหนีควัน ใช้ผ้าชุบน้ำปิดจมูก ห้ามใช้ลิฟต์",
        guideCPR: "กดหน้าอก ลึก 2 นิ้ว เร็ว 100-120 ครั้ง/นาที (ตรงกึ่งกลางหน้าอก)",
        guideChoke: "ยืนด้านหลัง โอบเอว กำมือวางเหนือสะดือ กระทุ้งขึ้นแรงๆ",
        guideSnake: "ให้อยู่นิ่งๆ ดามอวัยวะที่ถูกกัดให้อยู่ต่ำกว่าหัวใจ ห้ามดูดพิษ",
        guideQuake: "หมอบ กำบัง เกาะแน่น (Drop, Cover, Hold on) ให้ห่างจากหน้าต่าง",

        deleteBtn: "ลบข้อมูล",
        layerIncidents: "จุดเกิดเหตุ", layerShelters: "จุดปลอดภัย", layerRadar: "เรดาร์ฝน",
        shelterType: "ศูนย์พักพิง", cap: "ความจุ",
        navigate: "นำทาง (Google Maps)",

        // Tools
        toolsTitle: "อุปกรณ์ช่วยชีวิต", toolStrobe: "ไฟสัญญาณ SOS", toolSiren: "เสียงไซเรน"
    },
    en: {
        appTitle: "Disaster Monitor",
        sevHigh: "CRITICAL", sevMed: "WARNING", sevLow: "WATCH",
        reportBtn: "New Report", selectPoint: "Tap map location", cancel: "Cancel",
        reportTitle: "Report Incident", severity: "Severity Level", details: "Details",
        detailsPlaceholder: "e.g. Flood depth 50cm, Boat needed...",
        submit: "Submit Report",
        
        // Safety Check
        safetyTitle: "Safety Check-in",
        safetyDesc: "Let others know your current status",
        btnSafe: "I am Safe", btnDanger: "I Need Help",
        safetyLabel: "Status", safetyBtnMain: "I'M SAFE",

        // SOS Triage
        sosTriageTitle: "Request Immediate Help (Sends Location)",
        reqBoat: "Need Boat", reqFood: "Food/Water",
        reqMedic: "Bedridden Patient", reqRoof: "Stuck on Roof",
        sosCallTitle: "Emergency Call",

        // SOS List
        sosPolice: "Police", sosAmbulance: "Ambulance",
        sosFire: "Fire/Rescue", sosDisaster: "Disaster Dept.",
        sosTourist: "Tourist Police", sosHighway: "Highway Police",
        sosSocial: "Social Help", sosMental: "Mental Health",
        sosNote: "Tap button to call (Mobile only)",

        // Guide
        guideTitle: "Survival & First Aid",
        catFirstAid: "First Aid Basics",
        catSurvival: "Disaster Survival",
        guideFlood: "Turn off power breakers. Stay away from power poles. Wear boots.",
        guideShock: "Do not touch victim. Use dry wood to move wire. Call 1669.",
        guideFire: "Stay low (crawl). Cover nose/mouth with wet cloth. Do not use elevators.",
        guideCPR: "Push hard & fast in center of chest (100-120 bpm). Depth 2 inches.",
        guideChoke: "Heimlich Maneuver: Stand behind, wrap arms, fist above navel, thrust up.",
        guideSnake: "Stay still. Keep bite below heart level. DO NOT suck poison.",
        guideQuake: "Drop, Cover, and Hold on. Stay away from windows.",

        deleteBtn: "Delete / Resolve",
        layerIncidents: "Incidents", layerShelters: "Shelters", layerRadar: "Rain Radar",
        shelterType: "Shelter", cap: "Capacity",
        navigate: "Get Directions",

        // Tools
        toolsTitle: "Survival Tools", toolStrobe: "Visual SOS", toolSiren: "Audio Siren"
    },
    cn: {
        appTitle: "灾害监测中心",
        sevHigh: "危急", sevMed: "警告", sevLow: "监视",
        reportBtn: "新报告", selectPoint: "选择地点", cancel: "取消",
        reportTitle: "报告情况", severity: "严重程度", details: "详情",
        detailsPlaceholder: "例如：水位50厘米，需要船只...",
        submit: "提交报告",
        
        safetyTitle: "安全确认", safetyDesc: "告知他人您的状态",
        btnSafe: "我很安全", btnDanger: "需要帮助",
        safetyLabel: "状态", safetyBtnMain: "我很安全",
        
        sosTriageTitle: "请求紧急援助 (发送位置)",
        reqBoat: "需要船只", reqFood: "食物/水",
        reqMedic: "卧床病人", reqRoof: "被困屋顶",
        sosCallTitle: "紧急呼叫",

        sosPolice: "警察", sosAmbulance: "救护车",
        sosFire: "消防", sosDisaster: "灾害部门",
        sosTourist: "旅游警察", sosHighway: "高速公路警察",
        sosSocial: "社会救助", sosMental: "心理健康",
        sosNote: "点击按钮拨打 (仅限手机)",

        guideTitle: "生存指南", catFirstAid: "急救", catSurvival: "灾难生存",
        guideFlood: "切断电源，远离电线，穿靴子。",
        guideShock: "不要触摸伤者，用干木头移开电线，拨打1669。",
        guideFire: "低姿态爬行，用湿布捂住口鼻，不要使用电梯。",
        guideCPR: "用力快速按压胸部中央 (100-120次/分)。",
        guideChoke: "海姆立克急救法：站在身后，环抱腰部，向内向上冲击。",
        guideSnake: "保持静止，伤口低于心脏，不要吸毒液。",
        guideQuake: "趴下，掩护，抓牢。远离窗户。",

        deleteBtn: "删除",
        layerIncidents: "事故点", layerShelters: "避难所", layerRadar: "雷达",
        shelterType: "避难所", cap: "容量", navigate: "导航",
        toolsTitle: "求生工具", toolStrobe: "视觉求救", toolSiren: "警报声"
    },
    jp: {
        appTitle: "災害監視センター",
        sevHigh: "危険", sevMed: "警告", sevLow: "注意",
        reportBtn: "新規報告", selectPoint: "地点を選択", cancel: "キャンセル",
        reportTitle: "状況報告", severity: "深刻度", details: "詳細",
        detailsPlaceholder: "例：浸水50cm、ボートが必要...",
        submit: "送信",
        
        safetyTitle: "安否確認", safetyDesc: "ステータスを共有",
        btnSafe: "安全です", btnDanger: "助けて",
        safetyLabel: "状態", safetyBtnMain: "私は安全",
        
        sosTriageTitle: "緊急支援要請 (位置送信)",
        reqBoat: "ボートが必要", reqFood: "食料/水",
        reqMedic: "寝たきり患者", reqRoof: "屋根に孤立",
        sosCallTitle: "緊急通報",

        sosPolice: "警察", sosAmbulance: "救急車",
        sosFire: "消防", sosDisaster: "災害局",
        sosTourist: "観光警察", sosHighway: "高速警察",
        sosSocial: "社会支援", sosMental: "心のケア",
        sosNote: "ボタンを押して通話 (携帯のみ)",

        guideTitle: "生存ガイド", catFirstAid: "応急処置", catSurvival: "災害サバイバル",
        guideFlood: "電源を切る。電柱に近づかない。長靴を履く。",
        guideShock: "患者に触れない。乾いた木で線を外す。1669へ電話。",
        guideFire: "低く這う。濡れタオルで口を覆う。エレベーター禁止。",
        guideCPR: "胸の中央を強く速く圧迫 (100-120回/分)。",
        guideChoke: "ハイムリック法：背後から抱き、腹部を突き上げる。",
        guideSnake: "安静にする。傷口を心臓より低く。毒を吸わない。",
        guideQuake: "低く、頭を守り、動かない。窓から離れる。",

        deleteBtn: "削除",
        layerIncidents: "事故", layerShelters: "避難所", layerRadar: "レーダー",
        shelterType: "避難所", cap: "収容数", navigate: "ナビ開始",
        toolsTitle: "ツール", toolStrobe: "SOSライト", toolSiren: "サイレン"
    }
};

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    const descInput = document.getElementById('desc-input');
    if(descInput) descInput.placeholder = translations[lang]['detailsPlaceholder'];
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-cyan-600', 'text-white');
        btn.classList.add('text-gray-400');
    });
    document.getElementById(`btn-${lang}`).classList.add('bg-cyan-600', 'text-white');
    document.getElementById(`btn-${lang}`).classList.remove('text-gray-400');

    updateMapLayers(); // Refresh markers text
}

// --- 2. Map Initialization ---
const THAILAND_CENTER = [13.7563, 100.5018];
const map = L.map('map', { zoomControl: false, attributionControl: false, minZoom: 5 }).setView(THAILAND_CENTER, 6);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19, opacity: 0.8 }).addTo(map);

// --- 3. Boundaries ---
let geojsonLayer;
const provinceNameDisplay = document.getElementById('province-name-display');
fetch('https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json')
    .then(res => res.json())
    .then(data => {
        geojsonLayer = L.geoJSON(data, {
            style: { color: '#00f2ff', weight: 1, opacity: 0.3, fillOpacity: 0 },
            onEachFeature: (feature, layer) => {
                layer.on({
                    mouseover: (e) => {
                        e.target.setStyle({ weight: 2, color: '#fff', opacity: 0.8, fillOpacity: 0.1 });
                        if(feature.properties.name) {
                            provinceNameDisplay.innerText = feature.properties.name.toUpperCase();
                            provinceNameDisplay.style.opacity = '1';
                        }
                    },
                    mouseout: (e) => {
                        geojsonLayer.resetStyle(e.target);
                        provinceNameDisplay.style.opacity = '0';
                    }
                });
            }
        }).addTo(map);
        geojsonLayer.bringToBack();
    });

// --- 4. Logic & Data ---
// Separate Layers
let incidentLayer = L.layerGroup();
let shelterLayer = L.layerGroup();
let weatherLayer = null; 
let layers = { incidents: true, shelters: false, weather: false };

// Mock Shelters Data
const mockShelters = [
    { id: 's1', lat: 13.736717, lng: 100.523186, name: 'Chulalongkorn University', cap: 5000 },
    { id: 's2', lat: 18.796143, lng: 98.979263, name: 'Chiang Mai Gymnasium', cap: 2000 },
    { id: 's3', lat: 7.00836, lng: 100.47668, name: 'Hat Yai Hall', cap: 3000 },
    { id: 's4', lat: 14.979900, lng: 102.097771, name: 'Korat Central Stadium', cap: 4500 },
    // New
    { id: 's5', lat: 7.8804, lng: 98.3923, name: 'Phuket City Hall', cap: 1500 },
    { id: 's6', lat: 16.4743, lng: 102.8222, name: 'Khon Kaen Convention Center', cap: 4000 },
    { id: 's7', lat: 15.2447, lng: 104.8485, name: 'Ubon Ratchathani University', cap: 3500 },
    { id: 's8', lat: 15.6946, lng: 100.1238, name: 'Nakhon Sawan Central Park', cap: 2000 },
    { id: 's9', lat: 9.1354, lng: 99.3621, name: 'Surat Thani Rajabhat', cap: 2500 },
    { id: 's10', lat: 16.8211, lng: 100.2658, name: 'Phitsanulok Stadium', cap: 3000 }
];

function getSeverityColor(sev) {
    return sev === 'high' ? '#ef4444' : (sev === 'medium' ? '#f97316' : '#eab308');
}

function createIcon(sev) {
    const c = getSeverityColor(sev);
    return L.divIcon({
        className: 'pulse-icon',
        html: `<div class="pulse-ring" style="background-color:${c}80"></div><div class="pulse-dot" style="background-color:${c}; box-shadow:0 0 10px ${c}"></div>`,
        iconSize: [20,20]
    });
}

function toggleLayer(type) {
    layers[type] = !layers[type];
    const btn = document.getElementById(`filter-${type}`);
    if(layers[type]) {
        btn.classList.add('bg-opacity-20', 'border-opacity-50');
        btn.classList.remove('opacity-40');
        btn.style.opacity = '1';
    } else {
        btn.classList.remove('bg-opacity-20', 'border-opacity-50');
        btn.classList.add('opacity-40');
        btn.style.opacity = '0.4';
    }
    updateMapLayers();
}

// Fetch RainViewer Timestamp for live radar
function fetchRainViewerData() {
    if (weatherLayer) return;
    fetch('https://api.rainviewer.com/public/weather-maps.json')
        .then(res => res.json())
        .then(data => {
            if (data && data.radar && data.radar.past && data.radar.past.length > 0) {
                const latest = data.radar.past[data.radar.past.length - 1];
                const ts = latest.time;
                weatherLayer = L.tileLayer(`https://tile.rainviewer.com/img/radar_nowcast_png/256/{z}/{x}/{y}/2/1_1.png?time=${ts}`, {
                    opacity: 0.7,
                    zIndex: 10
                });
                if(layers.weather) weatherLayer.addTo(map);
            }
        })
        .catch(err => console.log('Radar Error', err));
}

function updateMapLayers() {
    incidentLayer.clearLayers();
    shelterLayer.clearLayers();
    incidentLayer.removeFrom(map);
    shelterLayer.removeFrom(map);
    if(weatherLayer) weatherLayer.removeFrom(map);

    // 1. Load Incidents
    if(layers.incidents) {
        const reports = JSON.parse(localStorage.getItem('floodReports')) || [];
        reports.forEach(r => {
            const color = getSeverityColor(r.severity);
            const sevLabelKey = r.severity === 'high' ? 'sevHigh' : (r.severity === 'medium' ? 'sevMed' : 'sevLow');
            const sevLabel = translations[currentLang][sevLabelKey];
            const deleteLabel = translations[currentLang]['deleteBtn'];
            const navLabel = translations[currentLang]['navigate'];

            let iconType = 'fa-circle-exclamation';
            if(r.desc.includes('Boat') || r.desc.includes('เรือ')) iconType = 'fa-sailboat';
            else if(r.desc.includes('Food') || r.desc.includes('อาหาร')) iconType = 'fa-bowl-rice';
            else if(r.desc.includes('Medical') || r.desc.includes('ผู้ป่วย')) iconType = 'fa-bed-pulse';
            else if(r.desc.includes('Roof') || r.desc.includes('หลังคา')) iconType = 'fa-house-chimney-crack';

            const popup = `
                <div class="relative overflow-hidden rounded">
                    <div class="h-1 w-full" style="background-color: ${color}"></div>
                    <div class="p-4 bg-slate-900">
                        <div class="flex justify-between mb-2">
                            <span class="text-[10px] text-gray-400 border border-gray-700 px-1 rounded">${r.time}</span>
                            <span class="text-xs font-bold uppercase" style="color:${color}">${sevLabel}</span>
                        </div>
                        <div class="flex items-start gap-3 mb-2">
                             <div class="bg-slate-800 p-2 rounded text-cyan-400"><i class="fa-solid ${iconType}"></i></div>
                             <p class="text-sm text-gray-200 mt-1">${r.desc}</p>
                        </div>
                        <button onclick="navigateTo(${r.lat}, ${r.lng})" class="nav-btn">
                            <i class="fa-solid fa-diamond-turn-right"></i> ${navLabel}
                        </button>
                        <div class="pt-2 mt-2 border-t border-gray-800 flex justify-end">
                            <button onclick="deleteReport('${r.id}')" class="text-xs text-gray-500 hover:text-red-400">
                                <i class="fa-solid fa-trash-can"></i> ${deleteLabel}
                            </button>
                        </div>
                    </div>
                </div>`;
            L.marker([r.lat, r.lng], { icon: createIcon(r.severity) }).addTo(incidentLayer).bindPopup(popup);
        });
        incidentLayer.addTo(map);
        updateDashboard(reports);
    } else {
        updateDashboard([]);
    }

    // 2. Load Shelters (Mock)
    if(layers.shelters) {
        mockShelters.forEach(s => {
            const icon = L.divIcon({
                className: 'shelter-icon',
                html: '<i class="fa-solid fa-house-medical"></i>',
                iconSize: [24,24],
                iconAnchor: [12, 12]
            });
            const labelShelter = translations[currentLang]['shelterType'];
            const labelCap = translations[currentLang]['cap'];
            const navLabel = translations[currentLang]['navigate'];
            const popup = `
                <div class="p-3 bg-slate-900 border-l-4 border-green-500 rounded">
                    <h4 class="text-green-400 font-bold"><i class="fa-solid fa-shield-heart"></i> ${s.name}</h4>
                    <div class="text-xs text-gray-400 mt-1">${labelShelter}</div>
                    <div class="mt-2 text-sm text-white"><i class="fa-solid fa-users"></i> ${labelCap}: ${s.cap}</div>
                    <button onclick="navigateTo(${s.lat}, ${s.lng})" class="nav-btn">
                        <i class="fa-solid fa-diamond-turn-right"></i> ${navLabel}
                    </button>
                </div>
            `;
            L.marker([s.lat, s.lng], { icon: icon }).addTo(shelterLayer).bindPopup(popup);
        });
        shelterLayer.addTo(map);
    }

    // 3. Load Weather Radar
    if(layers.weather) {
        if(!weatherLayer) {
            showToast(currentLang === 'th' ? 'กำลังโหลดเรดาร์ฝน...' : 'Loading Radar...', 'info');
            fetchRainViewerData();
        } else {
            weatherLayer.addTo(map);
            weatherLayer.bringToFront();
        }
    }
}

function updateDashboard(reports) {
    const high = reports.filter(r => r.severity === 'high').length;
    const medium = reports.filter(r => r.severity === 'medium').length;
    const low = reports.filter(r => r.severity === 'low').length;
    document.getElementById("stat-high").innerText = high;
    document.getElementById("stat-medium").innerText = medium;
    document.getElementById("stat-low").innerText = low;
}

// --- 5. Toast Notification System ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    let bgClass = 'bg-slate-800 border-cyan-500/50';
    let icon = '<i class="fa-solid fa-circle-info text-cyan-400"></i>';
    if(type === 'success') { bgClass = 'bg-slate-900 border-green-500/50 glass-success'; icon = '<i class="fa-solid fa-check-circle text-green-400"></i>'; }
    if(type === 'error') { bgClass = 'bg-red-950/90 border-red-500/50'; icon = '<i class="fa-solid fa-triangle-exclamation text-red-400"></i>'; }

    toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded shadow-xl border ${bgClass} text-white min-w-[250px] toast-enter pointer-events-auto backdrop-blur-md`;
    toast.innerHTML = `${icon} <span class="font-medium text-sm">${message}</span>`;
    
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-enter-active');
    });

    setTimeout(() => {
        toast.classList.remove('toast-enter-active');
        toast.classList.add('toast-exit-active');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- 6. Interaction Logic ---
function submitReport(e) {
    e.preventDefault();
    const desc = document.getElementById('desc-input').value;
    const severity = document.querySelector('input[name="severity"]:checked').value;
    const newReport = {
        id: Date.now().toString(),
        lat: tempCoords.lat, lng: tempCoords.lng,
        desc: desc, severity: severity,
        time: new Date().toLocaleTimeString('th-TH', {hour: '2-digit', minute:'2-digit'})
    };
    
    const reports = JSON.parse(localStorage.getItem('floodReports')) || [];
    reports.push(newReport);
    localStorage.setItem('floodReports', JSON.stringify(reports));
    
    if(!layers.incidents) toggleLayer('incidents');
    else updateMapLayers();
    
    closeModal('report-modal');
    document.getElementById('desc-input').value = '';
    showToast(currentLang === 'th' ? 'บันทึกข้อมูลสำเร็จ' : 'Report Submitted', 'success');
}

// SOS Triage Logic
function submitSOSRequest(type) {
    if(!confirm(currentLang === 'th' ? `ยืนยันขอความช่วยเหลือ: ${type}?` : `Confirm Request: ${type}?`)) return;

    showToast(currentLang === 'th' ? 'กำลังดึงพิกัด GPS...' : 'Acquiring GPS...', 'info');

    navigator.geolocation.getCurrentPosition(
        pos => {
            const reqLabel = translations[currentLang][`req${type.split('/')[0]}`] || type; 
            const newReport = {
                id: 'sos-' + Date.now().toString(),
                lat: pos.coords.latitude, 
                lng: pos.coords.longitude,
                desc: `[SOS] ${type}`,
                severity: 'high',
                time: new Date().toLocaleTimeString('th-TH', {hour: '2-digit', minute:'2-digit'})
            };

            const reports = JSON.parse(localStorage.getItem('floodReports')) || [];
            reports.push(newReport);
            localStorage.setItem('floodReports', JSON.stringify(reports));

            if(!layers.incidents) toggleLayer('incidents');
            else updateMapLayers();

            map.flyTo([pos.coords.latitude, pos.coords.longitude], 15);
            closeModal('sos-modal');
            showToast(currentLang === 'th' ? 'ส่งสัญญาณขอความช่วยเหลือแล้ว!' : 'SOS Signal Sent!', 'error');
        },
        err => showToast(currentLang === 'th' ? 'ไม่สามารถระบุตำแหน่งได้' : 'GPS Error', 'error'),
        { enableHighAccuracy: true }
    );
}

// Safety Check Logic
function toggleSafetyCheck() {
    document.getElementById('safety-modal').classList.remove('hidden');
    setTimeout(() => document.querySelector('#safety-modal > div').classList.remove('scale-95'), 10);
}

function switchToSOS() {
    closeModal('safety-modal');
    setTimeout(() => toggleSOS(), 300);
}

function shareSafeStatus() {
    showToast(currentLang === 'th' ? 'กำลังดึงพิกัด...' : 'Locating...', 'info');
    navigator.geolocation.getCurrentPosition(
        pos => {
            const lat = pos.coords.latitude.toFixed(5);
            const lng = pos.coords.longitude.toFixed(5);
            const time = new Date().toLocaleTimeString('th-TH', {hour: '2-digit', minute:'2-digit'});
            
            const msg = currentLang === 'th' 
                ? `ฉันปลอดภัยดี อยู่ที่พิกัด ${lat}, ${lng} เวลา ${time} (แจ้งจาก Disaster Monitor)` 
                : `I am Safe. Location: ${lat}, ${lng} Time: ${time} (via Disaster Monitor)`;

            if (navigator.share) {
                navigator.share({
                    title: 'Safety Check',
                    text: msg,
                    url: `https://maps.google.com/?q=${lat},${lng}`
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(`${msg} https://maps.google.com/?q=${lat},${lng}`);
                alert(msg + '\n\n(Copied to clipboard)');
            }
            closeModal('safety-modal');
        },
        err => showToast('GPS Error', 'error')
    );
}

// Navigation Function
window.navigateTo = (lat, lng) => {
    // Opens Google Maps in a new tab with directions
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
};

// Tools Logic (Strobe & Siren)
let strobeInterval = null;
let sirenOscillator = null;
let sirenContext = null;

function toggleTools() {
    document.getElementById('tools-modal').classList.remove('hidden');
}

function toggleStrobe() {
    const overlay = document.getElementById('strobe-overlay');
    const btn = document.getElementById('btn-strobe');
    
    if (strobeInterval) {
        clearInterval(strobeInterval);
        strobeInterval = null;
        overlay.classList.add('hidden');
        overlay.classList.remove('strobe-active');
        btn.classList.remove('tool-active');
    } else {
        overlay.classList.remove('hidden');
        overlay.classList.add('strobe-active');
        btn.classList.add('tool-active');
        strobeInterval = setInterval(() => {}, 100); // Just a dummy interval holder
    }
}

function toggleSiren() {
    const btn = document.getElementById('btn-siren');
    
    if (sirenOscillator) {
        sirenOscillator.stop();
        sirenOscillator = null;
        btn.classList.remove('tool-active');
    } else {
        if (!sirenContext) sirenContext = new (window.AudioContext || window.webkitAudioContext)();
        
        sirenOscillator = sirenContext.createOscillator();
        const gainNode = sirenContext.createGain();
        
        sirenOscillator.type = 'triangle';
        sirenOscillator.frequency.setValueAtTime(600, sirenContext.currentTime);
        sirenOscillator.frequency.exponentialRampToValueAtTime(1200, sirenContext.currentTime + 0.5);
        
        // Siren LFO logic
        setInterval(() => {
            if(sirenOscillator) {
                const now = sirenContext.currentTime;
                sirenOscillator.frequency.setValueAtTime(600, now);
                sirenOscillator.frequency.linearRampToValueAtTime(1200, now + 0.4);
            }
        }, 800);

        sirenOscillator.connect(gainNode);
        gainNode.connect(sirenContext.destination);
        sirenOscillator.start();
        
        btn.classList.add('tool-active');
    }
}

function stopAllTools() {
    if(strobeInterval) toggleStrobe();
    if(sirenOscillator) toggleSiren();
}

window.deleteReport = (id) => {
    if(!confirm(currentLang === 'th' ? 'ยืนยันการลบ?' : 'Confirm delete?')) return;
    let reports = JSON.parse(localStorage.getItem('floodReports')) || [];
    reports = reports.filter(r => r.id !== id);
    localStorage.setItem('floodReports', JSON.stringify(reports));
    updateMapLayers();
    showToast(currentLang === 'th' ? 'ลบข้อมูลแล้ว' : 'Report Deleted', 'error');
};

window.clearAllData = () => {
    if(confirm('Reset System?')) {
        localStorage.removeItem('floodReports');
        updateMapLayers();
        showToast('System Reset', 'info');
    }
};

let isReporting = false; let tempCoords = null;

function enableReportMode() {
    isReporting = true;
    document.getElementById('map').style.cursor = 'crosshair';
    document.getElementById('cancel-overlay').classList.remove('hidden');
    document.getElementById('report-btn').classList.add('translate-y-24', 'opacity-0');
    if(geojsonLayer) geojsonLayer.setStyle({opacity: 0.1});
    showToast(currentLang === 'th' ? 'แตะที่แผนที่เพื่อระบุจุด' : 'Tap on map to pin location', 'info');
}

function disableReportMode() {
    isReporting = false;
    document.getElementById('map').style.cursor = 'grab';
    document.getElementById('cancel-overlay').classList.add('hidden');
    document.getElementById('report-btn').classList.remove('translate-y-24', 'opacity-0');
    if(geojsonLayer) geojsonLayer.setStyle({opacity: 0.3, color: '#00f2ff'});
}

map.on('click', (e) => {
    if (isReporting) {
        tempCoords = e.latlng;
        document.getElementById('report-modal').classList.remove('hidden');
        setTimeout(() => document.querySelector('#report-modal > div').classList.remove('scale-95'), 10);
    }
});

function toggleSOS() {
    document.getElementById('sos-modal').classList.remove('hidden');
    setTimeout(() => document.querySelector('#sos-modal > div').classList.remove('scale-95'), 10);
}
// *** FIX for Guide Modal ***
function toggleGuide() {
    document.getElementById('guide-modal').classList.remove('hidden');
    setTimeout(() => document.querySelector('#guide-modal > div').classList.remove('scale-95'), 10);
}

function locateUser() {
    showToast('Locating...', 'info');
    navigator.geolocation.getCurrentPosition(
        pos => {
            map.flyTo([pos.coords.latitude, pos.coords.longitude], 13);
            L.circleMarker([pos.coords.latitude, pos.coords.longitude], { radius: 8, color: '#00f2ff' }).addTo(map);
        },
        err => showToast('GPS Error', 'error')
    );
}
function resetView() { map.flyTo(THAILAND_CENTER, 6); }

// *** FIXED Close Modal Function (Unified) ***
function closeModal(id) {
    // 1. Special handling for Tools
    if (id === 'tools-modal') {
        stopAllTools();
    }

    // 2. Animation & Hiding Logic
    const modal = document.getElementById(id);
    if (!modal) return; // Safety check
    const content = modal.firstElementChild;
    
    content.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        content.classList.remove('scale-95');
        
        // 3. Special handling for Report Mode (needs to happen after close or during)
        if (id === 'report-modal') {
            disableReportMode();
        }
    }, 200);
}

window.onload = () => {
    changeLanguage('th');
};
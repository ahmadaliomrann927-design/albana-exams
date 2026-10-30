// دالة عرض شاشة العينات الخاصة بالصور داخل القسم العملي
function showCustomSamples(type) {
    showScreen('favoritesScreen');
    const container = document.getElementById('favoritesContainer');
    
    if (type === 'forestry') {
        container.innerHTML = `
            <button class="back-btn" onclick="showSessions('علم الحراج', 'practical')">الرجوع للجلسات</button>
            <h3 style="color:#10b981; margin-bottom:15px; text-align:center;">🌿 عينات الحراج النباتية</h3>
            <div class="question-card" style="text-align: center;">
                <img src="samples_images/forestry_sample_1.jpg" alt="عينة حراجية" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 8px; margin-bottom: 10px;">
                <p style="color: #60a5fa; font-weight: bold; font-size: 1.1rem;">عينة الحراج رقم 1</p>
                <p style="color: #d1d5db; font-size: 0.95rem; margin-top: 5px;">الوصف أو الاسم العلمي للعينة الحراجية 🌹</p>
            </div>
        `;
    } else if (type === 'ornamental') {
        container.innerHTML = `
            <button class="back-btn" onclick="showSessions('نباتات الزينة', 'practical')">الرجوع للجلسات</button>
            <h3 style="color:#eab308; margin-bottom:15px; text-align:center;">🌸 عينات نباتات الزينة</h3>
            <div class="question-card" style="text-align: center;">
                <img src="samples_images/ornamental_sample_1.jpg" alt="عينة زينة" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 8px; margin-bottom: 10px;">
                <p style="color: #60a5fa; font-weight: bold; font-size: 1.1rem;">عينة نباتات الزينة رقم 1</p>
                <p style="color: #d1d5db; font-size: 0.95rem; margin-top: 5px;">الوصف أو الاسم العلمي لنبات الزينة 🌹</p>
            </div>
        `;
    }
}

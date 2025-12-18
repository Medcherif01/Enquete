const translations = {
    ar: {
        title: "استبيان الرضا المدرسي",
        subtitle: "رأيكم يهمنا من أجل مستقبل أبنائنا",
        parent: "اسم ولي الأمر", student: "اسم التلميذ(ة)", phone: "رقم الهاتف (إجباري)",
        comment: "ملاحظات إضافية", submit: "إرسال الاستبيان",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
        success: "تم تسجيل إجابتكم بنجاح!",
        questions: [
            "جودة التدريس الأكاديمي", "توافر المعلمين وتواصلهم", "الخدمات الإدارية وتجاوبها",
            "نظافة المرافق والمراحيض", "أمن وسلامة التلاميذ", "جودة المطعم المدرسي",
            "الأنشطة الموازية (رياضة/ثقافة)", "المتابعة الفردية للنتائج", "تجهيزات المختبرات والمعلوميات",
            "الانضباط والسلوك العام", "الجو العام والراحة النفسية", "جودة المقررات والكتب",
            "احترام المواعيد والدقة", "علاقة الإدارة بالأولياء", "القيمة مقابل السعر"
        ]
    },
    fr: {
        title: "Enquête de Satisfaction",
        subtitle: "Votre avis compte pour nous",
        parent: "Nom du Parent", student: "Nom de l'élève", phone: "Téléphone",
        comment: "Commentaires", submit: "Envoyer l'enquête",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
        success: "Enregistré avec succès !",
        questions: [
            "Qualité académique", "Disponibilité enseignants", "Services administratifs",
            "Hygiène et propreté", "Sécurité des élèves", "Qualité de la cantine",
            "Activités extra-scolaires", "Suivi individuel", "Équipements informatiques",
            "Discipline et comportement", "Ambiance générale", "Supports pédagogiques",
            "Respect des horaires", "Relation parents-admin", "Rapport qualité-prix"
        ]
    },
    en: {
        title: "School Satisfaction Survey",
        subtitle: "Your feedback matters",
        parent: "Parent Name", student: "Student Name", phone: "Phone Number",
        comment: "Additional Comments", submit: "Submit Survey",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
        success: "Submitted successfully!",
        questions: [
            "Academic Quality", "Teacher Availability", "Administrative Services",
            "Hygiene & Cleanliness", "Student Security", "Canteen Quality",
            "Extracurricular Activities", "Individual Tracking", "IT Equipment",
            "Discipline & Behavior", "General Atmosphere", "Teaching Materials",
            "Punctuality", "Parent-Admin Relation", "Value for Money"
        ]
    }
};

let currentLang = 'ar';
let chartInstance = null;

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-parent').innerText = t.parent;
    document.getElementById('lbl-student').innerText = t.student;
    document.getElementById('lbl-phone').innerText = t.phone;
    document.getElementById('lbl-comment').innerText = t.comment;
    document.getElementById('btn-submit').querySelector('span').innerText = t.submit;
    document.getElementById('conf-msg').innerText = t.success;

    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    t.questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <label><strong>${i+1}. ${q}</strong></label>
            <div class="options-group">
                ${t.options.map((opt, v) => `
                    <label><input type="radio" name="q${i}" value="${v}" required> <span>${opt}</span></label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    const answers = {};
    for(let i=0; i<15; i++) answers[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`).value;

    const payload = {
        parentName: document.getElementById('parentName').value,
        studentName: document.getElementById('studentName').value,
        phone: document.getElementById('phone').value,
        comments: document.getElementById('comments').value,
        answers
    };

    const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if(res.ok) {
        document.getElementById('confirmation-modal').classList.remove('hidden');
        loadAnalytics();
    }
};

async function loadAnalytics() {
    const res = await fetch('/api/results');
    const data = await res.json();
    if(data.length === 0) return;

    document.getElementById('analysis-container').classList.remove('hidden');
    const sums = new Array(15).fill(0);
    data.forEach(d => { for(let i=0; i<15; i++) sums[i] += parseInt(d.answers[`q${i}`]); });
    const avgs = sums.map(s => ((s / (data.length * 2)) * 100).toFixed(0));

    const ctx = document.getElementById('resultsChart').getContext('2d');
    if(chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: translations[currentLang].questions.map((_, i) => `Q${i+1}`),
            datasets: [{ label: '% Satisfaction', data: avgs, backgroundColor: '#1a2a6c' }]
        },
        options: { scales: { y: { beginAtZero: true, max: 100 } } }
    });
}

function secureExport(type) {
    const pass = prompt("الرجاء إدخال كلمة المرور / Password:");
    if(pass === "Alkawthar@2025") {
        type === 'excel' ? exportExcel() : exportWord();
    } else {
        alert("كلمة مرور خاطئة! / Wrong Password!");
    }
}

async function exportExcel() {
    const res = await fetch('/api/results');
    const data = await res.json();
    const worksheet = XLSX.utils.json_to_sheet(data.map(d => ({
        "Parent": d.parentName, "Student": d.studentName, "Phone": d.phone, "Comments": d.comments
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    XLSX.writeFile(workbook, "Survey_Report.xlsx");
}

function exportWord() {
    const content = document.getElementById('analysis-container').innerHTML;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rapport_Alkawthar.doc';
    link.click();
}

setLanguage('ar');

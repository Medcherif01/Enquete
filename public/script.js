const translations = {
    fr: {
        title: "Enquête de Satisfaction Scolaire",
        subtitle: "Votre avis compte pour l'avenir de vos enfants",
        parent: "Nom complet du Parent",
        student: "Nom de l'élève",
        phone: "Téléphone (Obligatoire)",
        comment: "Suggestions ou commentaires",
        submit: "Envoyer l'enquête",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
        success: "Réponse enregistrée avec succès !",
        questions: [
            "Qualité de l'enseignement académique", "Disponibilité des enseignants",
            "Communication administration-parents", "Hygiène et propreté des locaux",
            "Sécurité au sein de l'école", "Qualité de la cantine scolaire",
            "Activités sportives et culturelles", "Suivi pédagogique individuel",
            "Équipements informatiques et labos", "Gestion de la discipline",
            "Ambiance générale de l'école", "Qualité des supports (livres/cahiers)",
            "Respect des horaires", "Accueil administratif", "Rapport qualité-prix global"
        ]
    },
    en: {
        title: "School Satisfaction Survey",
        subtitle: "Your feedback matters for your child's future",
        parent: "Parent Full Name",
        student: "Student Full Name",
        phone: "Phone Number (Required)",
        comment: "Suggestions or comments",
        submit: "Submit Survey",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
        success: "Response submitted successfully!",
        questions: [
            "Academic teaching quality", "Teacher availability",
            "Admin-Parent communication", "Facility hygiene & cleanliness",
            "School security & safety", "Canteen quality",
            "Extracurricular activities", "Individual student tracking",
            "IT equipment & labs", "Discipline management",
            "General school atmosphere", "Quality of teaching materials",
            "Punctuality and schedules", "Admin reception", "Overall value for money"
        ]
    },
    ar: {
        title: "استبيان الرضا المدرسي",
        subtitle: "رأيكم يهمنا من أجل مستقبل أبنائنا",
        parent: "اسم ولي الأمر بالكامل",
        student: "اسم التلميذ(ة)",
        phone: "رقم الهاتف (إجباري)",
        comment: "اقتراحات أو ملاحظات",
        submit: "إرسال الاستبيان",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
        success: "تم تسجيل إجابتكم بنجاح!",
        questions: [
            "جودة التدريس الأكاديمي", "توافر المعلمين وتجاوبهم",
            "التواصل بين الإدارة والأولياء", "نظافة المرافق والمؤسسة",
            "الأمن والسلامة داخل المدرسة", "جودة الوجبات المدرسية",
            "الأنشطة الرياضية والثقافية", "المتابعة الفردية للتلميذ",
            "المعدات المعلوماتية والمختبرات", "تدبير الانضباط",
            "الجو العام للمدرسة", "جودة الوسائل التعليمية",
            "احترام المواعيد", "الاستقبال الإداري", "القيمة مقابل السعر"
        ]
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-parent').innerText = t.parent;
    document.getElementById('lbl-student').innerText = t.student;
    document.getElementById('lbl-phone').innerText = t.phone;
    document.getElementById('lbl-comment').innerText = t.comment;
    document.getElementById('btn-submit').innerText = t.submit;
    document.getElementById('conf-msg').innerText = t.success;

    const qContainer = document.getElementById('questions-container');
    qContainer.innerHTML = '';
    t.questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <p><strong>${i+1}. ${q}</strong></p>
            <div class="options-group">
                ${t.options.map((opt, val) => `
                    <label><input type="radio" name="q${i}" value="${val}" required> ${opt}</label>
                `).join('')}
            </div>
        `;
        qContainer.appendChild(div);
    });
}

document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    const answers = {};
    for(let i=0; i<15; i++) {
        answers[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`).value;
    }

    const data = {
        parentName: document.getElementById('parentName').value,
        studentName: document.getElementById('studentName').value,
        phone: document.getElementById('phone').value,
        comments: document.getElementById('comments').value,
        answers
    };

    try {
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if(res.ok) {
            document.getElementById('confirmation-modal').classList.remove('hidden');
            loadResults();
        }
    } catch (err) { alert("Erreur d'envoi"); }
};

async function loadResults() {
    const res = await fetch('/api/results');
    const data = await res.json();
    if(data.length > 0) {
        document.getElementById('analysis-container').classList.remove('hidden');
        renderChart(data);
    }
}

function renderChart(data) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const sums = new Array(15).fill(0);
    data.forEach(row => {
        for(let i=0; i<15; i++) sums[i] += parseInt(row.answers[`q${i}`]);
    });
    const averages = sums.map(s => (s / (data.length * 2) * 100).toFixed(0));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({length: 15}, (_, i) => `Q${i+1}`),
            datasets: [{ label: '% Satisfaction', data: averages, backgroundColor: '#3498db' }]
        }
    });
}

function exportToExcel() {
    window.location.href = "/api/results"; // Simplifié pour la démo, ou utilisez XLSX.js
}

function exportToWord() { window.print(); }

setLanguage('fr');

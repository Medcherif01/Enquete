const translations = {
    fr: {
        title: "Enquête Scolaire",
        parent: "Nom du Parent",
        student: "Nom de l'élève",
        phone: "Téléphone",
        submit: "Envoyer",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
        questions: [
            "Qualité de l'enseignement académique",
            "Disponibilité des enseignants",
            "Communication administrative",
            "Propreté des locaux et hygiène",
            "Sécurité au sein de l'école",
            "Qualité de la cantine",
            "Activités extra-scolaires",
            "Suivi individuel des élèves",
            "Équipements informatiques",
            "Gestion des absences",
            "Ambiance générale",
            "Qualité des supports pédagogiques",
            "Respect des horaires",
            "Relation administration-parents",
            "Rapport qualité-prix"
        ]
    },
    en: {
        title: "School Survey",
        parent: "Parent Name",
        student: "Student Name",
        phone: "Phone Number",
        submit: "Submit",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
        questions: [
            "Academic teaching quality",
            "Teacher availability",
            "Administrative communication",
            "Facility cleanliness & hygiene",
            "School security",
            "Canteen quality",
            "Extracurricular activities",
            "Individual student tracking",
            "IT equipment",
            "Attendance management",
            "General atmosphere",
            "Pedagogical material quality",
            "Schedule punctuality",
            "Admin-Parent relationship",
            "Value for money"
        ]
    },
    ar: {
        title: "استبيان مدرسي",
        parent: "اسم ولي الأمر",
        student: "اسم التلميذ",
        phone: "رقم الهاتف",
        submit: "إرسال",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
        questions: [
            "جودة التدريس الأكاديمي",
            "توافر المعلمين",
            "التواصل الإداري",
            "نظافة المرافق والنظافة العامة",
            "الأمن داخل المدرسة",
            "جودة المطعم المدرسي",
            "الأنشطة الموازية",
            "المتابعة الفردية للطلاب",
            "المعدات المعلوماتية",
            "تسيير الغيابات",
            "الجو العام للمدرسة",
            "جودة الوسائل التعليمية",
            "احترام المواعيد",
            "العلاقة بين الإدارة وأولياء الأمور",
            "القيمة مقابل السعر"
        ]
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    document.getElementById('txt-title').innerText = translations[lang].title;
    document.getElementById('lbl-parent').innerText = translations[lang].parent;
    document.getElementById('lbl-student').innerText = translations[lang].student;
    document.getElementById('lbl-phone').innerText = translations[lang].phone;
    document.getElementById('btn-submit').innerText = translations[lang].submit;
    
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    translations[currentLang].questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <p><strong>${index + 1}. ${q}</strong></p>
            <div class="options-group">
                ${translations[currentLang].options.map((opt, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}" required> ${opt}
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simuler l'envoi à l'API
    console.log("Données envoyées:", data);
    
    document.getElementById('confirmation-modal').classList.remove('hidden');
    showAnalysis(); // Pour la démo, on montre l'analyse tout de suite
};

function showAnalysis() {
    document.getElementById('analysis-container').classList.remove('hidden');
    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: translations[currentLang].questions.slice(0, 5), // Top 5 pour le graphique
            datasets: [{
                label: 'Niveau de Satisfaction (%)',
                data: [85, 90, 75, 95, 80],
                backgroundColor: ['#4a90e2', '#50e3c2', '#ffce56', '#ff6384', '#36a2eb']
            }]
        }
    });
}

function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Parent", "Élève", "Téléphone", "Score Moyen"],
        [
            document.getElementById('parentName').value,
            document.getElementById('studentName').value,
            document.getElementById('phone').value,
            "85%"
        ]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Resultats");
    XLSX.writeFile(wb, "Enquete_Scolaire.xlsx");
}

// Initialisation
setLanguage('fr');

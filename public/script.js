/**
 * CONFIGURATION DES TRADUCTIONS ET QUESTIONS
 */
const translations = {
    fr: {
        title: "Enquête de Satisfaction Scolaire",
        subtitle: "Votre avis compte pour l'excellence de nos élèves",
        parentName: "Nom complet du Parent",
        studentName: "Nom et Prénom de l'élève",
        phone: "Numéro de téléphone (Obligatoire)",
        comments: "Vos suggestions ou commentaires",
        submit: "Envoyer l'enquête",
        loading: "Envoi en cours...",
        success: "Merci ! Votre réponse a été enregistrée avec succès.",
        analysisTitle: "Analyse des Résultats en Temps Réel",
        exportExcel: "Exporter en Excel",
        exportWord: "Générer Rapport Word",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
        questions: [
            "Qualité de l'enseignement académique",
            "Disponibilité et écoute des enseignants",
            "Efficacité de la communication administrative",
            "Hygiène et propreté des locaux",
            "Sécurité des élèves au sein de l'établissement",
            "Qualité et équilibre de la cantine scolaire",
            "Diversité des activités extra-scolaires (Sport, Art...)",
            "Suivi pédagogique individuel des élèves",
            "Modernité des équipements informatiques et labos",
            "Gestion des absences et de la discipline",
            "Ambiance générale et bien-être de l'enfant",
            "Qualité des manuels et supports pédagogiques",
            "Respect des horaires et ponctualité",
            "Accueil et relation administration-parents",
            "Rapport qualité-prix global des services"
        ]
    },
    en: {
        title: "School Satisfaction Survey",
        subtitle: "Your feedback matters for our students' excellence",
        parentName: "Parent's Full Name",
        studentName: "Student's Full Name",
        phone: "Phone Number (Required)",
        comments: "Your suggestions or comments",
        submit: "Submit Survey",
        loading: "Sending...",
        success: "Thank you! Your response has been successfully recorded.",
        analysisTitle: "Real-time Results Analysis",
        exportExcel: "Export to Excel",
        exportWord: "Generate Word Report",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
        questions: [
            "Academic teaching quality",
            "Teacher availability and support",
            "Efficiency of administrative communication",
            "Hygiene and cleanliness of premises",
            "Student safety within the school",
            "School canteen quality and balance",
            "Diversity of extracurricular activities",
            "Individual pedagogical student tracking",
            "Modernity of IT and lab equipment",
            "Attendance and discipline management",
            "General atmosphere and child well-being",
            "Quality of textbooks and teaching materials",
            "Respect for schedules and punctuality",
            "Reception and admin-parent relationship",
            "Overall value for money of services"
        ]
    },
    ar: {
        title: "استبيان الرضا عن المدرسة",
        subtitle: "رأيكم يهمنا من أجل تميز أبنائنا",
        parentName: "اسم ولي الأمر بالكامل",
        studentName: "اسم التلميذ(ة) بالكامل",
        phone: "رقم الهاتف (إجباري)",
        comments: "اقتراحاتكم أو تعليقاتكم",
        submit: "إرسال الاستبيان",
        loading: "جاري الإرسال...",
        success: "شكراً لكم! تم تسجيل إجابتكم بنجاح.",
        analysisTitle: "تحليل النتائج في الوقت الفعلي",
        exportExcel: "تصدير إلى Excel",
        exportWord: "إنشاء تقرير Word",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
        questions: [
            "جودة التدريس الأكاديمي",
            "توافر المعلمين وتجاوبهم",
            "فعالية التواصل الإداري",
            "نظافة المرافق والمؤسسة",
            "أمن وسلامة التلاميذ داخل المدرسة",
            "جودة وتوازن الوجبات المدرسية",
            "تنوع الأنشطة الموازية (رياضة، فن...)",
            "المتابعة البيداغوجية الفردية للتلاميذ",
            "حداثة التجهيزات المعلوماتية والمختبرات",
            "تدبير الغيابات والانضباط",
            "الجو العام وراحة الطفل النفسية",
            "جودة المقررات والوسائل التعليمية",
            "احترام المواعيد والدقة الزمنية",
            "الاستقبال والعلاقة بين الإدارة وأولياء الأمور",
            "القيمة الإجمالية مقابل الخدمات المقدمة"
        ]
    }
};

let currentLang = 'fr';
let chartInstance = null;

/**
 * INITIALISATION ET CHANGEMENT DE LANGUE
 */
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Direction du texte (RTL pour l'arabe)
    document.documentElement.lang = lang;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Mise à jour des textes simples
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-parent').innerText = t.parentName;
    document.getElementById('lbl-student').innerText = t.studentName;
    document.getElementById('lbl-phone').innerText = t.phone;
    document.getElementById('lbl-comment').innerText = t.comments;
    document.getElementById('btn-submit').innerText = t.submit;
    document.getElementById('conf-msg').innerText = t.success;
    document.getElementById('analysis-title').innerText = t.analysisTitle;
    document.querySelectorAll('.btn-export')[0].innerText = t.exportExcel;
    document.querySelectorAll('.btn-export')[1].innerText = t.exportWord;

    renderQuestions();
}

/**
 * GÉNÉRATION DYNAMIQUE DES 15 QUESTIONS
 */
function renderQuestions() {
    const container = document.getElementById('questions-container');
    const t = translations[currentLang];
    container.innerHTML = '';

    t.questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question-block fade-in';
        div.innerHTML = `
            <p class="question-text"><strong>${index + 1}. ${q}</strong></p>
            <div class="options-group">
                ${t.options.map((opt, i) => `
                    <label class="option-label">
                        <input type="radio" name="q${index}" value="${i}" required>
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

/**
 * ENVOI DES DONNÉES VERS LE BACKEND (MONGODB)
 */
document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    btn.disabled = true;
    btn.innerText = translations[currentLang].loading;

    const answers = {};
    for (let i = 0; i < 15; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        answers[`q${i}`] = selected ? parseInt(selected.value) : 0;
    }

    const payload = {
        parentName: document.getElementById('parentName').value,
        studentName: document.getElementById('studentName').value,
        phone: document.getElementById('phone').value,
        answers: answers,
        comments: document.getElementById('comments').value
    };

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.getElementById('confirmation-modal').classList.remove('hidden');
            loadAnalysisData(); // Rafraîchir les stats
        }
    } catch (err) {
        alert("Erreur de connexion au serveur.");
        btn.disabled = false;
        btn.innerText = translations[currentLang].submit;
    }
};

/**
 * RÉCUPÉRATION ET ANALYSE DES RÉSULTATS (DIAGRAMMES)
 */
async function loadAnalysisData() {
    try {
        const response = await fetch('/api/results');
        const data = await response.json();
        if (data.length === 0) return;

        document.getElementById('analysis-container').classList.remove('hidden');

        // Calcul des moyennes par question
        const questionStats = new Array(15).fill(0);
        data.forEach(entry => {
            for (let i = 0; i < 15; i++) {
                questionStats[i] += entry.answers[`q${i}`] || 0;
            }
        });

        const averages = questionStats.map(sum => ((sum / (data.length * 2)) * 100).toFixed(1));

        updateChart(averages);
    } catch (err) {
        console.error("Erreur analyse:", err);
    }
}

function updateChart(averages) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: translations[currentLang].questions.map((_, i) => `Q${i+1}`),
            datasets: [{
                label: '% de Satisfaction',
                data: averages,
                backgroundColor: 'rgba(74, 144, 226, 0.7)',
                borderColor: '#4a90e2',
                borderWidth: 2,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

/**
 * EXPORT EXCEL (Individuel ou Global)
 */
async function exportToExcel() {
    const response = await fetch('/api/results');
    const data = await response.json();
    
    const ws_data = data.map(item => ({
        "Parent": item.parentName,
        "Élève": item.studentName,
        "Téléphone": item.phone,
        "Commentaires": item.comments,
        "Date": new Date(item.date).toLocaleDateString()
    }));

    const ws = XLSX.utils.json_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Résultats Enquête");
    XLSX.writeFile(wb, "Rapport_Ecole_Excel.xlsx");
}

/**
 * GÉNÉRATION RAPPORT WORD
 */
function exportToWord() {
    const content = `
        <div style="font-family: Arial;">
            <h1 style="color: #4a90e2;">Rapport d'Enquête Scolaire</h1>
            <p>Généré le: ${new Date().toLocaleDateString()}</p>
            <hr>
            <h2>Résumé des performances</h2>
            <p>Consultez les graphiques sur le tableau de bord pour les détails visuels.</p>
            <p>Note: Ce document est une synthèse automatique.</p>
        </div>
    `;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rapport_Synthese.doc';
    link.click();
}

// Lancement initial
setLanguage('fr');
// Charger l'analyse au chargement si admin (optionnel)
loadAnalysisData();

// Translations
const translations = {
    ar: {
        title: "استبيان الرضا المدرسي",
        subtitle: "رأيكم يهمنا من أجل مستقبل أبنائنا",
        infoTitle: "المعلومات الشخصية",
        questionsTitle: "الأسئلة",
        analyticsTitle: "نتائج التحليل",
        parent: "اسم ولي الأمر",
        student: "اسم التلميذ(ة)",
        phone: "رقم الهاتف (إجباري)",
        comment: "ملاحظات إضافية",
        submit: "إرسال الاستبيان",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
        suggestionPlaceholder: "اكتب اقتراحاتك أو ملاحظاتك هنا (اختياري)...",
        success: "تم تسجيل إجابتكم بنجاح!",
        thanks: "شكراً لمشاركتكم القيمة",
        close: "إغلاق",
        surveyFor: "الاستبيان الخاص ب",
        resultsBtn: "عرض النتائج",
        programmes: {
            'français': 'البرنامج الفرنسي',
            'britannique': 'البرنامج البريطاني',
            'américain': 'البرنامج الأمريكي'
        },
        sections: {
            'Primaire': 'الابتدائي',
            'Secondaire Filles': 'الثانوي بنات',
            'Secondaire Garçons': 'الثانوي بنين',
            'Primaire Filles': 'الابتدائي بنات',
            'Primaire Garçons': 'الابتدائي بنين'
        },
        exportExcel: "تصدير Excel",
        exportWord: "تصدير Word",
        passwordTitle: "أدخل كلمة المرور",
        confirm: "تأكيد",
        cancel: "إلغاء",
        wrongPassword: "كلمة مرور خاطئة!",
        responsesLabel: "مشارك",
        satisfactionLabel: "رضا عام",
        topLabel: "أعلى تقييم",
        questions: [
            "جودة التدريس الأكاديمي",
            "توافر المعلمين وتواصلهم",
            "الخدمات الإدارية وتجاوبها",
            "نظافة المرافق والمراحيض",
            "أمن وسلامة التلاميذ",
            "جودة المطعم المدرسي",
            "الأنشطة الموازية (رياضة/ثقافة)",
            "المتابعة الفردية للنتائج",
            "تجهيزات المختبرات والمعلوميات",
            "الانضباط والسلوك العام",
            "الجو العام والراحة النفسية",
            "جودة المقررات والكتب",
            "احترام المواعيد والدقة",
            "علاقة الإدارة بالأولياء",
            "القيمة مقابل السعر"
        ],
        questionDetails: [
            "مثال: طرق الشرح، فهم المادة، مستوى التحصيل الدراسي، كفاءة المعلمين",
            "مثال: سهولة التواصل مع المعلمين، توفرهم للمساعدة، الرد على الاستفسارات",
            "مثال: سرعة الإجراءات، التعاون، معالجة الطلبات، استقبال الزوار",
            "مثال: نظافة الفصول، المراحيض، الساحات، صيانة المرافق",
            "مثال: الإشراف أثناء الفسح، الدخول والخروج، الحماية داخل المدرسة",
            "مثال: جودة الطعام، التنوع، النظافة، الكمية المناسبة",
            "مثال: الأنشطة الرياضية، الثقافية، الفنية، الرحلات المدرسية",
            "مثال: التواصل حول النتائج، الاجتماعات الفردية، تقارير التقدم",
            "مثال: أجهزة الحاسوب، المختبرات العلمية، الوسائل التعليمية الحديثة",
            "مثال: احترام القواعد، سلوك الطلاب، التعامل مع المشاكل السلوكية",
            "مثال: الشعور بالراحة، العلاقات بين الطلاب، الدعم النفسي",
            "مثال: جودة الكتب المدرسية، المراجع، الأدوات التعليمية المساعدة",
            "مثال: الالتزام بأوقات البدء والانتهاء، تنظيم الحصص، احترام الجدول الزمني",
            "مثال: سهولة التواصل مع الإدارة، الاستماع للملاحظات، الشفافية",
            "مثال: مقارنة الجودة بالسعر، الخدمات مقابل الرسوم المدرسية"
        ]
    },
    fr: {
        title: "Enquête de Satisfaction",
        subtitle: "Votre avis compte pour nous",
        infoTitle: "Informations Personnelles",
        questionsTitle: "Questions",
        analyticsTitle: "Résultats d'Analyse",
        parent: "Nom du Parent",
        student: "Nom de l'élève",
        phone: "Numéro de Téléphone",
        comment: "Commentaires Additionnels",
        submit: "Envoyer l'enquête",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
        suggestionPlaceholder: "Écrivez vos suggestions ou remarques ici (optionnel)...",
        success: "Enregistré avec succès !",
        thanks: "Merci pour votre précieuse participation",
        close: "Fermer",
        surveyFor: "Enquête pour",
        resultsBtn: "Voir les Résultats",
        programmes: {
            'français': 'Programme Français',
            'britannique': 'Programme Britannique',
            'américain': 'Programme Américain'
        },
        sections: {
            'Primaire': 'Primaire',
            'Secondaire Filles': 'Secondaire Filles',
            'Secondaire Garçons': 'Secondaire Garçons',
            'Primaire Filles': 'Primaire Filles',
            'Primaire Garçons': 'Primaire Garçons'
        },
        exportExcel: "Exporter Excel",
        exportWord: "Exporter Word",
        passwordTitle: "Entrez le mot de passe",
        confirm: "Confirmer",
        cancel: "Annuler",
        wrongPassword: "Mot de passe incorrect !",
        responsesLabel: "Participants",
        satisfactionLabel: "Satisfaction Générale",
        topLabel: "Meilleure Note",
        questions: [
            "Qualité académique",
            "Disponibilité des enseignants",
            "Services administratifs",
            "Hygiène et propreté",
            "Sécurité des élèves",
            "Qualité de la cantine",
            "Activités extra-scolaires",
            "Suivi individuel",
            "Équipements informatiques",
            "Discipline et comportement",
            "Ambiance générale",
            "Supports pédagogiques",
            "Respect des horaires",
            "Relation parents-admin",
            "Rapport qualité-prix"
        ],
        questionDetails: [
            "Exemple: méthodes d'enseignement, compréhension, niveau académique, compétence enseignants",
            "Exemple: facilité de contact, disponibilité pour aide, réponses aux questions",
            "Exemple: rapidité des procédures, coopération, traitement des demandes, accueil",
            "Exemple: propreté des classes, toilettes, cours, maintenance des installations",
            "Exemple: supervision récréation, entrée/sortie, protection dans l'école",
            "Exemple: qualité repas, variété, propreté, quantités appropriées",
            "Exemple: activités sportives, culturelles, artistiques, sorties scolaires",
            "Exemple: communication résultats, réunions individuelles, rapports de progrès",
            "Exemple: ordinateurs, laboratoires scientifiques, équipements pédagogiques modernes",
            "Exemple: respect des règles, comportement élèves, gestion des problèmes",
            "Exemple: sentiment de confort, relations entre élèves, soutien psychologique",
            "Exemple: qualité manuels, références, outils pédagogiques complémentaires",
            "Exemple: respect horaires début/fin, organisation cours, respect du planning",
            "Exemple: facilité contact administration, écoute remarques, transparence",
            "Exemple: qualité vs prix, services par rapport aux frais scolaires"
        ]
    },
    en: {
        title: "School Satisfaction Survey",
        subtitle: "Your feedback matters to us",
        infoTitle: "Personal Information",
        questionsTitle: "Questions",
        analyticsTitle: "Analysis Results",
        parent: "Parent Name",
        student: "Student Name",
        phone: "Phone Number",
        comment: "Additional Comments",
        submit: "Submit Survey",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
        suggestionPlaceholder: "Write your suggestions or comments here (optional)...",
        success: "Submitted successfully!",
        thanks: "Thank you for your valuable participation",
        close: "Close",
        surveyFor: "Survey for",
        resultsBtn: "View Results",
        programmes: {
            'français': 'French Program',
            'britannique': 'British Program',
            'américain': 'American Program'
        },
        sections: {
            'Primaire': 'Primary',
            'Secondaire Filles': 'Secondary Girls',
            'Secondaire Garçons': 'Secondary Boys',
            'Primaire Filles': 'Primary Girls',
            'Primaire Garçons': 'Primary Boys'
        },
        exportExcel: "Export Excel",
        exportWord: "Export Word",
        passwordTitle: "Enter Password",
        confirm: "Confirm",
        cancel: "Cancel",
        wrongPassword: "Wrong password!",
        responsesLabel: "Participants",
        satisfactionLabel: "Overall Satisfaction",
        topLabel: "Top Rating",
        questions: [
            "Academic Quality",
            "Teacher Availability",
            "Administrative Services",
            "Hygiene & Cleanliness",
            "Student Security",
            "Canteen Quality",
            "Extracurricular Activities",
            "Individual Tracking",
            "IT Equipment",
            "Discipline & Behavior",
            "General Atmosphere",
            "Teaching Materials",
            "Punctuality",
            "Parent-Admin Relation",
            "Value for Money"
        ],
        questionDetails: [
            "Example: teaching methods, content understanding, academic level, teacher competence",
            "Example: ease of contact, availability for help, response to questions",
            "Example: procedure speed, cooperation, request handling, reception",
            "Example: classroom cleanliness, restrooms, yards, facility maintenance",
            "Example: supervision during breaks, entry/exit, protection inside school",
            "Example: food quality, variety, cleanliness, appropriate quantities",
            "Example: sports, cultural, artistic activities, school trips",
            "Example: communication about results, individual meetings, progress reports",
            "Example: computers, science labs, modern educational equipment",
            "Example: rule respect, student behavior, problem handling",
            "Example: comfort feeling, student relationships, psychological support",
            "Example: textbook quality, references, supplementary educational tools",
            "Example: start/end time respect, class organization, schedule adherence",
            "Example: ease of admin contact, listening to feedback, transparency",
            "Example: quality vs price, services compared to school fees"
        ]
    }
};

let currentLang = 'ar';

// Set Language Function
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    // Update text content
    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('info-title').innerText = t.infoTitle;
    document.getElementById('questions-title').innerText = t.questionsTitle;
    document.getElementById('lbl-parent').innerHTML = `<i class="fas fa-user"></i> ${t.parent}`;
    document.getElementById('lbl-student').innerHTML = `<i class="fas fa-child"></i> ${t.student}`;
    document.getElementById('lbl-phone').innerHTML = `<i class="fas fa-phone"></i> ${t.phone}`;
    document.getElementById('lbl-comment').innerHTML = `<i class="fas fa-comment-dots"></i> ${t.comment}`;
    document.getElementById('btn-submit').querySelector('span').innerText = t.submit;
    document.getElementById('conf-msg').innerText = t.success;
    document.getElementById('thanks-msg').innerText = t.thanks;
    document.getElementById('close-text').innerText = t.close;
    document.getElementById('results-btn-text').innerText = t.resultsBtn;
    document.getElementById('survey-for-label').innerText = t.surveyFor;
    
    // Update programme and section display
    const programme = sessionStorage.getItem('surveyProgramme');
    const section = sessionStorage.getItem('surveySection');
    if (programme && section) {
        document.getElementById('selected-programme').innerText = t.programmes[programme] || programme;
        document.getElementById('selected-section').innerText = t.sections[section] || section;
    }

    // Regenerate questions
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    t.questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <label><strong>${index + 1}. ${question}</strong></label>
            <p class="question-detail">${t.questionDetails[index]}</p>
            <div class="options-group">
                ${t.options.map((option, value) => `
                    <label>
                        <input type="radio" name="q${index}" value="${value}" required>
                        <span>${option}</span>
                    </label>
                `).join('')}
            </div>
            <textarea class="suggestion-input" name="suggestion_q${index}" placeholder="${t.suggestionPlaceholder}" rows="2"></textarea>
        `;
        container.appendChild(div);
    });
}

// Form Submission
document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    
    // Collect answers and suggestions
    const answers = {};
    const suggestions = {};
    const t = translations[currentLang];
    
    for (let i = 0; i < t.questions.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert(currentLang === 'ar' ? 'الرجاء الإجابة على جميع الأسئلة' : 
                  currentLang === 'fr' ? 'Veuillez répondre à toutes les questions' : 
                  'Please answer all questions');
            return;
        }
        answers[`q${i}`] = parseInt(selected.value);
        
        // Collect suggestion for this question
        const suggestionInput = document.querySelector(`textarea[name="suggestion_q${i}"]`);
        if (suggestionInput && suggestionInput.value.trim()) {
            suggestions[`q${i}`] = suggestionInput.value.trim();
        }
    }

    const payload = {
        parentEmail: sessionStorage.getItem('surveyEmail'),
        programme: sessionStorage.getItem('surveyProgramme'),
        section: sessionStorage.getItem('surveySection'),
        parentName: document.getElementById('parentName').value.trim(),
        studentName: document.getElementById('studentName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        comments: document.getElementById('comments').value.trim(),
        answers,
        suggestions
    };

    try {
        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            document.getElementById('confirmation-modal').classList.remove('hidden');
            document.getElementById('survey-form').reset();
            // NE PAS afficher les analytics - la demande de l'utilisateur
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(currentLang === 'ar' ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 
              currentLang === 'fr' ? 'Une erreur s\'est produite' : 
              'An error occurred');
    }
};

// Modal Functions
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
}

// Check for session data and redirect if missing
function checkSession() {
    const email = sessionStorage.getItem('surveyEmail');
    const programme = sessionStorage.getItem('surveyProgramme');
    const section = sessionStorage.getItem('surveySection');
    
    if (!email || !programme || !section) {
        // Redirect to selection page
        window.location.href = 'select-section.html';
        return false;
    }
    
    // Display selected info
    const t = translations[currentLang];
    document.getElementById('section-info').style.display = 'block';
    document.getElementById('selected-programme').innerText = t.programmes[programme] || programme;
    document.getElementById('selected-section').innerText = t.sections[section] || section;
    document.getElementById('selected-email').innerText = email;
    
    return true;
}

// Check session FIRST (before generating questions)
const email = sessionStorage.getItem('surveyEmail');
const programme = sessionStorage.getItem('surveyProgramme');
const section = sessionStorage.getItem('surveySection');

if (!email || !programme || !section) {
    // Redirect immediately before any initialization
    window.location.href = 'select-section.html';
} else {
    // Initialize with Arabic language only if session exists
    setLanguage('ar');
    
    // Display session info
    checkSession();
}

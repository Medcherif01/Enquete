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
        success: "تم تسجيل إجابتكم بنجاح!",
        thanks: "شكراً لمشاركتكم القيمة",
        close: "إغلاق",
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
        success: "Enregistré avec succès !",
        thanks: "Merci pour votre précieuse participation",
        close: "Fermer",
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
        success: "Submitted successfully!",
        thanks: "Thank you for your valuable participation",
        close: "Close",
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
        ]
    }
};

let currentLang = 'ar';
let chartInstance = null;
let pendingExportType = null;

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
    document.getElementById('export-excel-text').innerText = t.exportExcel;
    document.getElementById('export-word-text').innerText = t.exportWord;
    document.getElementById('password-title').innerHTML = `<i class="fas fa-lock"></i> ${t.passwordTitle}`;
    document.getElementById('confirm-text').innerText = t.confirm;
    document.getElementById('cancel-text').innerText = t.cancel;
    
    if (document.getElementById('analytics-title')) {
        document.getElementById('analytics-title').innerText = t.analyticsTitle;
    }
    if (document.getElementById('responses-label')) {
        document.getElementById('responses-label').innerText = t.responsesLabel;
    }
    if (document.getElementById('satisfaction-label')) {
        document.getElementById('satisfaction-label').innerText = t.satisfactionLabel;
    }
    if (document.getElementById('top-label')) {
        document.getElementById('top-label').innerText = t.topLabel;
    }

    // Regenerate questions
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    t.questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.className = 'question-block';
        div.innerHTML = `
            <label><strong>${index + 1}. ${question}</strong></label>
            <div class="options-group">
                ${t.options.map((option, value) => `
                    <label>
                        <input type="radio" name="q${index}" value="${value}" required>
                        <span>${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}

// Form Submission
document.getElementById('survey-form').onsubmit = async (e) => {
    e.preventDefault();
    
    // Collect answers
    const answers = {};
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
    }

    const payload = {
        parentName: document.getElementById('parentName').value.trim(),
        studentName: document.getElementById('studentName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        comments: document.getElementById('comments').value.trim(),
        answers
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
            loadAnalytics();
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

// Load Analytics
async function loadAnalytics() {
    try {
        const res = await fetch('/api/results');
        const data = await res.json();
        
        if (data.length === 0) return;

        document.getElementById('analysis-container').classList.remove('hidden');
        
        const t = translations[currentLang];
        const numQuestions = t.questions.length;
        
        // Calculate statistics
        const sums = new Array(numQuestions).fill(0);
        data.forEach(d => {
            for (let i = 0; i < numQuestions; i++) {
                sums[i] += parseInt(d.answers[`q${i}`] || 0);
            }
        });
        
        const averages = sums.map(s => ((s / (data.length * 2)) * 100).toFixed(1));
        const overallSatisfaction = (averages.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / numQuestions).toFixed(1);
        const topRating = Math.max(...averages).toFixed(1);
        const topIndex = averages.indexOf(Math.max(...averages).toString());

        // Update stats
        document.getElementById('total-responses').innerText = data.length;
        document.getElementById('avg-satisfaction').innerText = overallSatisfaction + '%';
        document.getElementById('top-rating').innerText = `Q${topIndex + 1} (${topRating}%)`;

        // Create/Update Chart
        const ctx = document.getElementById('resultsChart').getContext('2d');
        
        if (chartInstance) {
            chartInstance.destroy();
        }
        
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: t.questions.map((q, i) => `Q${i + 1}`),
                datasets: [{
                    label: t.satisfactionLabel,
                    data: averages,
                    backgroundColor: 'rgba(26, 42, 108, 0.8)',
                    borderColor: 'rgba(178, 31, 31, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    hoverBackgroundColor: 'rgba(178, 31, 31, 0.8)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                family: 'Cairo'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            size: 14,
                            family: 'Cairo'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Cairo'
                        },
                        callbacks: {
                            label: function(context) {
                                return t.questions[context.dataIndex] + ': ' + context.parsed.y.toFixed(1) + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                size: 12,
                                family: 'Cairo'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11,
                                family: 'Cairo'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error loading analytics:', error);
    }
}

// Modal Functions
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
}

function closePasswordModal() {
    document.getElementById('password-modal').classList.add('hidden');
    document.getElementById('password-input').value = '';
    pendingExportType = null;
}

// Secure Export
function secureExport(type) {
    pendingExportType = type;
    document.getElementById('password-modal').classList.remove('hidden');
    document.getElementById('password-input').focus();
}

// Verify Password
function verifyPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = 'Alkawthar@2025';
    
    if (password === correctPassword) {
        closePasswordModal();
        if (pendingExportType === 'excel') {
            exportExcel();
        } else if (pendingExportType === 'word') {
            exportWord();
        }
    } else {
        const t = translations[currentLang];
        alert(t.wrongPassword);
        document.getElementById('password-input').value = '';
        document.getElementById('password-input').focus();
    }
}

// Allow Enter key to submit password
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verifyPassword();
    }
});

// Export to Excel
async function exportExcel() {
    try {
        const res = await fetch('/api/results');
        const data = await res.json();
        
        if (data.length === 0) {
            alert(currentLang === 'ar' ? 'لا توجد بيانات للتصدير' : 
                  currentLang === 'fr' ? 'Aucune donnée à exporter' : 
                  'No data to export');
            return;
        }

        const t = translations[currentLang];
        
        // Prepare data for Excel
        const excelData = data.map((d, index) => {
            const row = {
                '#': index + 1,
                [t.parent]: d.parentName,
                [t.student]: d.studentName,
                [t.phone]: d.phone,
                [t.comment]: d.comments || '-'
            };
            
            // Add question responses
            t.questions.forEach((q, i) => {
                const value = parseInt(d.answers[`q${i}`] || 0);
                row[`Q${i + 1}: ${q}`] = t.options[value];
            });
            
            return row;
        });

        const worksheet = XLSX.utils.json_to_sheet(excelData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Survey Results');
        
        // Auto-size columns
        const maxWidth = 50;
        const colWidths = Object.keys(excelData[0]).map(key => {
            const maxLength = Math.max(
                key.length,
                ...excelData.map(row => String(row[key]).length)
            );
            return { wch: Math.min(maxLength + 2, maxWidth) };
        });
        worksheet['!cols'] = colWidths;
        
        XLSX.writeFile(workbook, `Enquete_Alkawthar_${new Date().toISOString().split('T')[0]}.xlsx`);
        
        alert(currentLang === 'ar' ? 'تم التصدير بنجاح!' : 
              currentLang === 'fr' ? 'Exporté avec succès !' : 
              'Exported successfully!');
    } catch (error) {
        console.error('Export error:', error);
        alert(currentLang === 'ar' ? 'حدث خطأ أثناء التصدير' : 
              currentLang === 'fr' ? 'Erreur lors de l\'exportation' : 
              'Export error');
    }
}

// Export to Word
async function exportWord() {
    try {
        const res = await fetch('/api/results');
        const data = await res.json();
        
        if (data.length === 0) {
            alert(currentLang === 'ar' ? 'لا توجد بيانات للتصدير' : 
                  currentLang === 'fr' ? 'Aucune donnée à exporter' : 
                  'No data to export');
            return;
        }

        const t = translations[currentLang];
        
        // Calculate statistics
        const numQuestions = t.questions.length;
        const sums = new Array(numQuestions).fill(0);
        
        data.forEach(d => {
            for (let i = 0; i < numQuestions; i++) {
                sums[i] += parseInt(d.answers[`q${i}`] || 0);
            }
        });
        
        const averages = sums.map(s => ((s / (data.length * 2)) * 100).toFixed(1));
        const overallSatisfaction = (averages.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / numQuestions).toFixed(1);

        // Create HTML content for Word
        let htmlContent = `
            <!DOCTYPE html>
            <html lang="${currentLang}" dir="${currentLang === 'ar' ? 'rtl' : 'ltr'}">
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'}; }
                    h1 { color: #1a2a6c; text-align: center; }
                    h2 { color: #b21f1f; margin-top: 30px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: ${currentLang === 'ar' ? 'right' : 'left'}; }
                    th { background-color: #1a2a6c; color: white; }
                    tr:nth-child(even) { background-color: #f8f9fa; }
                    .stats { background-color: #fdbb2d; padding: 15px; border-radius: 10px; margin: 20px 0; }
                </style>
            </head>
            <body>
                <h1>${t.title}</h1>
                <p style="text-align: center; font-size: 14px;">
                    ${currentLang === 'ar' ? 'تاريخ التقرير' : currentLang === 'fr' ? 'Date du rapport' : 'Report Date'}: 
                    ${new Date().toLocaleDateString(currentLang)}
                </p>
                
                <div class="stats">
                    <h3>${t.analyticsTitle}</h3>
                    <p><strong>${t.responsesLabel}:</strong> ${data.length}</p>
                    <p><strong>${t.satisfactionLabel}:</strong> ${overallSatisfaction}%</p>
                </div>
                
                <h2>${currentLang === 'ar' ? 'التقييم حسب السؤال' : currentLang === 'fr' ? 'Évaluation par question' : 'Ratings by Question'}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>${currentLang === 'ar' ? 'السؤال' : currentLang === 'fr' ? 'Question' : 'Question'}</th>
                            <th>${currentLang === 'ar' ? 'نسبة الرضا' : currentLang === 'fr' ? 'Satisfaction' : 'Satisfaction'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.questions.map((q, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${q}</td>
                                <td>${averages[i]}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <h2>${currentLang === 'ar' ? 'جميع الإجابات' : currentLang === 'fr' ? 'Toutes les réponses' : 'All Responses'}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>${t.parent}</th>
                            <th>${t.student}</th>
                            <th>${t.phone}</th>
                            <th>${t.comment}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((d, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${d.parentName}</td>
                                <td>${d.studentName}</td>
                                <td>${d.phone}</td>
                                <td>${d.comments || '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
            </html>
        `;

        // Create blob and download
        const blob = new Blob(['\ufeff', htmlContent], {
            type: 'application/msword'
        });
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Rapport_Alkawthar_${new Date().toISOString().split('T')[0]}.doc`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        alert(currentLang === 'ar' ? 'تم التصدير بنجاح!' : 
              currentLang === 'fr' ? 'Exporté avec succès !' : 
              'Exported successfully!');
    } catch (error) {
        console.error('Export error:', error);
        alert(currentLang === 'ar' ? 'حدث خطأ أثناء التصدير' : 
              currentLang === 'fr' ? 'Erreur lors de l\'exportation' : 
              'Export error');
    }
}

// Initialize with Arabic language
setLanguage('ar');

// Load analytics on page load
window.addEventListener('load', () => {
    loadAnalytics();
});

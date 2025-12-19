// Translations
const translations = {
    ar: {
        loginTitle: "نتائج الاستبيان",
        loginSubtitle: "الرجاء إدخال كلمة المرور للوصول إلى النتائج",
        loginBtn: "دخول",
        resultsTitle: "نتائج الاستبيان",
        resultsSubtitle: "تحليل شامل لآراء أولياء الأمور",
        analyticsTitle: "نتائج التحليل",
        responsesLabel: "مشارك",
        satisfactionLabel: "رضا عام",
        topLabel: "أعلى تقييم",
        exportExcel: "تصدير Excel",
        exportWord: "تصدير Word",
        errorMsg: "كلمة المرور غير صحيحة!",
        backLink: "العودة للاستبيان",
        parent: "اسم ولي الأمر",
        student: "اسم التلميذ(ة)",
        phone: "رقم الهاتف",
        comment: "ملاحظات إضافية",
        suggestion: "الاقتراحات",
        options: ["غير راضٍ", "راضٍ", "راضٍ جداً"],
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
        loginTitle: "Résultats de l'Enquête",
        loginSubtitle: "Veuillez entrer le mot de passe pour accéder aux résultats",
        loginBtn: "Connexion",
        resultsTitle: "Résultats de l'Enquête",
        resultsSubtitle: "Analyse complète des retours des parents",
        analyticsTitle: "Résultats d'Analyse",
        responsesLabel: "Participants",
        satisfactionLabel: "Satisfaction Générale",
        topLabel: "Meilleure Note",
        exportExcel: "Exporter Excel",
        exportWord: "Exporter Word",
        errorMsg: "Mot de passe incorrect !",
        backLink: "Retour à l'enquête",
        parent: "Nom du Parent",
        student: "Nom de l'élève",
        phone: "Numéro de Téléphone",
        comment: "Commentaires",
        suggestion: "Suggestions",
        options: ["Insatisfait", "Satisfait", "Très Satisfait"],
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
        loginTitle: "Survey Results",
        loginSubtitle: "Please enter the password to access the results",
        loginBtn: "Login",
        resultsTitle: "Survey Results",
        resultsSubtitle: "Comprehensive analysis of parent feedback",
        analyticsTitle: "Analysis Results",
        responsesLabel: "Participants",
        satisfactionLabel: "Overall Satisfaction",
        topLabel: "Top Rating",
        exportExcel: "Export Excel",
        exportWord: "Export Word",
        errorMsg: "Wrong password!",
        backLink: "Back to survey",
        parent: "Parent Name",
        student: "Student Name",
        phone: "Phone Number",
        comment: "Comments",
        suggestion: "Suggestions",
        options: ["Unsatisfied", "Satisfied", "Very Satisfied"],
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
let isAuthenticated = false;

// Correct password
const CORRECT_PASSWORD = 'Alkawthar@2025';

// Verify Password
function verifyPassword() {
    const password = document.getElementById('password-input').value;
    const errorDiv = document.getElementById('error-message');
    
    if (password === CORRECT_PASSWORD) {
        isAuthenticated = true;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('results-content').style.display = 'block';
        loadAnalytics();
    } else {
        errorDiv.classList.add('show');
        document.getElementById('password-input').value = '';
        document.getElementById('password-input').focus();
        
        setTimeout(() => {
            errorDiv.classList.remove('show');
        }, 3000);
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('password-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verifyPassword();
        }
    });
    
    // Focus on password field
    document.getElementById('password-input').focus();
});

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

    // Update login page
    if (document.getElementById('login-title')) {
        document.getElementById('login-title').innerText = t.loginTitle;
        document.getElementById('login-subtitle').innerText = t.loginSubtitle;
        document.getElementById('login-btn-text').innerText = t.loginBtn;
        document.getElementById('error-text').innerText = t.errorMsg;
        document.getElementById('back-link').innerHTML = `<i class="fas fa-arrow-${lang === 'ar' ? 'right' : 'left'}"></i> ${t.backLink}`;
    }
    
    // Update results page
    if (document.getElementById('results-title')) {
        document.getElementById('results-title').innerText = t.resultsTitle;
        document.getElementById('results-subtitle').innerText = t.resultsSubtitle;
        document.getElementById('analytics-title').innerText = t.analyticsTitle;
        document.getElementById('responses-label').innerText = t.responsesLabel;
        document.getElementById('satisfaction-label').innerText = t.satisfactionLabel;
        document.getElementById('top-label').innerText = t.topLabel;
        document.getElementById('export-excel-text').innerText = t.exportExcel;
        document.getElementById('export-word-text').innerText = t.exportWord;
        document.getElementById('back-link-2').innerHTML = `<i class="fas fa-arrow-${lang === 'ar' ? 'right' : 'left'}"></i> ${t.backLink}`;
    }
    
    // Reload analytics with new language
    if (isAuthenticated) {
        loadAnalytics();
    }
}

// Load Analytics
async function loadAnalytics() {
    try {
        const res = await fetch('/api/results');
        const data = await res.json();
        
        if (data.length === 0) {
            alert(currentLang === 'ar' ? 'لا توجد بيانات بعد' : 
                  currentLang === 'fr' ? 'Aucune donnée disponible' : 
                  'No data available');
            return;
        }

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
        alert(currentLang === 'ar' ? 'حدث خطأ أثناء تحميل البيانات' : 
              currentLang === 'fr' ? 'Erreur lors du chargement des données' : 
              'Error loading data');
    }
}

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
        const workbook = XLSX.utils.book_new();
        
        // Sheet 1: Statistics Summary
        const statsData = [];
        statsData.push(['Rapport d\'Enquête Al-Kawthar']);
        statsData.push(['Date:', new Date().toLocaleDateString()]);
        statsData.push(['Total Participants:', data.length]);
        statsData.push([]);
        
        // Calculate statistics
        const numQuestions = 15;
        const sums = new Array(numQuestions).fill(0);
        const counts = new Array(numQuestions).fill(0);
        
        data.forEach(d => {
            for (let i = 0; i < numQuestions; i++) {
                const val = parseInt(d.answers[`q${i}`] || 0);
                if (!isNaN(val)) {
                    sums[i] += val;
                    counts[i]++;
                }
            }
        });
        
        statsData.push(['Question', 'Moyenne', 'Satisfaction %']);
        t.questions.forEach((q, i) => {
            const avg = counts[i] > 0 ? (sums[i] / counts[i]).toFixed(2) : '0.00';
            const percentage = counts[i] > 0 ? (((sums[i] / counts[i]) - 1) / 2 * 100).toFixed(1) : '0.0';
            statsData.push([`${i + 1}. ${q}`, avg, `${percentage}%`]);
        });
        
        const statsSheet = XLSX.utils.aoa_to_sheet(statsData);
        
        // Style for stats sheet
        if (!statsSheet['!cols']) statsSheet['!cols'] = [];
        statsSheet['!cols'][0] = { wch: 50 };
        statsSheet['!cols'][1] = { wch: 15 };
        statsSheet['!cols'][2] = { wch: 15 };
        
        XLSX.utils.book_append_sheet(workbook, statsSheet, 'Statistiques');
        
        // Sheet 2: Detailed Responses
        const detailedData = [];
        detailedData.push(['#', 'Parent', 'Élève', 'Téléphone', ...t.questions.map((q, i) => `Q${i+1}`), 'Commentaires', 'Date']);
        
        data.forEach((d, index) => {
            const row = [
                index + 1,
                d.parentName || '',
                d.studentName || '',
                d.phone || ''
            ];
            
            // Add question responses
            for (let i = 0; i < numQuestions; i++) {
                const value = parseInt(d.answers[`q${i}`] || 0);
                row.push(t.options[value] || '');
            }
            
            row.push(d.comments || '');
            row.push(new Date(d.date).toLocaleDateString());
            
            detailedData.push(row);
        });
        
        const detailedSheet = XLSX.utils.aoa_to_sheet(detailedData);
        
        // Auto-size columns for detailed sheet
        if (!detailedSheet['!cols']) detailedSheet['!cols'] = [];
        detailedSheet['!cols'][0] = { wch: 5 };
        detailedSheet['!cols'][1] = { wch: 20 };
        detailedSheet['!cols'][2] = { wch: 20 };
        detailedSheet['!cols'][3] = { wch: 15 };
        for (let i = 4; i < 4 + numQuestions; i++) {
            detailedSheet['!cols'][i] = { wch: 15 };
        }
        detailedSheet['!cols'][4 + numQuestions] = { wch: 30 };
        detailedSheet['!cols'][5 + numQuestions] = { wch: 12 };
        
        XLSX.utils.book_append_sheet(workbook, detailedSheet, 'Réponses Détaillées');
        
        // Sheet 3: Suggestions
        const suggestionsData = [];
        suggestionsData.push(['Question', 'Suggestions']);
        
        t.questions.forEach((q, i) => {
            const suggestions = data
                .map(d => d.suggestions && d.suggestions[`q${i}`] ? d.suggestions[`q${i}`] : '')
                .filter(s => s.trim() !== '');
            
            if (suggestions.length > 0) {
                suggestionsData.push([`${i + 1}. ${q}`, '']);
                suggestions.forEach(s => {
                    suggestionsData.push(['', `• ${s}`]);
                });
                suggestionsData.push(['', '']);
            }
        });
        
        const suggestionsSheet = XLSX.utils.aoa_to_sheet(suggestionsData);
        
        if (!suggestionsSheet['!cols']) suggestionsSheet['!cols'] = [];
        suggestionsSheet['!cols'][0] = { wch: 50 };
        suggestionsSheet['!cols'][1] = { wch: 80 };
        
        XLSX.utils.book_append_sheet(workbook, suggestionsSheet, 'Suggestions');
        
        // Save file
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
                    @page { margin: 2cm; }
                    body { 
                        font-family: 'Arial', 'Segoe UI', 'Helvetica', sans-serif; 
                        direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};
                        line-height: 1.6;
                        color: #333;
                        padding: 20px;
                    }
                    .header {
                        background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 15px;
                        margin-bottom: 30px;
                    }
                    h1 { 
                        color: white;
                        margin: 0;
                        font-size: 32px;
                        font-weight: bold;
                    }
                    h2 { 
                        color: #1a2a6c;
                        margin-top: 40px;
                        padding-bottom: 10px;
                        border-bottom: 3px solid #fdbb2d;
                        font-size: 24px;
                    }
                    h3 {
                        color: #b21f1f;
                        margin-top: 25px;
                        font-size: 20px;
                    }
                    table { 
                        width: 100%;
                        border-collapse: collapse;
                        margin: 25px 0;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                        background: white;
                    }
                    th, td { 
                        border: 1px solid #e0e0e0;
                        padding: 15px;
                        text-align: ${currentLang === 'ar' ? 'right' : 'left'};
                    }
                    th { 
                        background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%);
                        color: white;
                        font-weight: bold;
                        font-size: 14px;
                        text-transform: uppercase;
                    }
                    tr:nth-child(even) { 
                        background-color: #f9f9f9;
                    }
                    tr:hover {
                        background-color: #fff8e1;
                    }
                    .stats { 
                        background: linear-gradient(135deg, #fdbb2d 0%, #ff9800 100%);
                        padding: 25px;
                        border-radius: 15px;
                        margin: 30px 0;
                        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                        color: #1a2a6c;
                    }
                    .stats h3 {
                        color: #1a2a6c;
                        margin-top: 0;
                    }
                    .stats p {
                        font-size: 16px;
                        margin: 10px 0;
                    }
                    .stats strong {
                        font-weight: bold;
                    }
                    .participant-card {
                        margin-bottom: 40px;
                        padding: 25px;
                        border: 2px solid #e0e0e0;
                        border-radius: 15px;
                        background: #fafafa;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        page-break-inside: avoid;
                    }
                    .participant-card h3 {
                        background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%);
                        color: white;
                        padding: 12px 20px;
                        border-radius: 10px;
                        margin: -25px -25px 20px -25px;
                    }
                    .response-item {
                        margin: 15px 0;
                        padding: 12px;
                        background: white;
                        border-${currentLang === 'ar' ? 'right' : 'left'}: 4px solid #1a2a6c;
                        border-radius: 5px;
                    }
                    .suggestion { 
                        background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
                        padding: 12px;
                        margin: 10px 0;
                        border-${currentLang === 'ar' ? 'right' : 'left'}: 5px solid #27ae60;
                        border-radius: 8px;
                        font-style: italic;
                    }
                    .suggestion strong {
                        color: #27ae60;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 50px;
                        padding: 20px;
                        border-top: 3px solid #fdbb2d;
                        color: #666;
                        font-size: 12px;
                    }
                    .date-info {
                        text-align: center;
                        color: white;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🎓 ${t.resultsTitle}</h1>
                    <p class="date-info">
                        ${currentLang === 'ar' ? 'تاريخ التقرير' : currentLang === 'fr' ? 'Date du rapport' : 'Report Date'}: 
                        ${new Date().toLocaleDateString(currentLang)}
                    </p>
                </div>
                
                <div class="stats">
                    <h3>📊 ${t.analyticsTitle}</h3>
                    <p><strong>👥 ${t.responsesLabel}:</strong> ${data.length} ${currentLang === 'ar' ? 'مشارك' : currentLang === 'fr' ? 'participants' : 'participants'}</p>
                    <p><strong>⭐ ${t.satisfactionLabel}:</strong> ${overallSatisfaction}%</p>
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
                
                <h2>📋 ${currentLang === 'ar' ? 'جميع الإجابات والاقتراحات' : currentLang === 'fr' ? 'Toutes les réponses et suggestions' : 'All Responses and Suggestions'}</h2>
                ${data.map((d, i) => `
                    <div class="participant-card">
                        <h3>👤 ${currentLang === 'ar' ? 'المشارك' : currentLang === 'fr' ? 'Participant' : 'Participant'} ${i + 1}</h3>
                        <p><strong>👨‍👩‍👧 ${t.parent}:</strong> ${d.parentName}</p>
                        <p><strong>👦 ${t.student}:</strong> ${d.studentName}</p>
                        <p><strong>📞 ${t.phone}:</strong> ${d.phone}</p>
                        ${d.comments ? `<p><strong>💬 ${t.comment}:</strong> ${d.comments}</p>` : ''}
                        
                        <h4>${currentLang === 'ar' ? '📝 الإجابات' : currentLang === 'fr' ? '📝 Réponses' : '📝 Answers'}</h4>
                        ${t.questions.map((q, qi) => `
                            <div class="response-item">
                                <strong>Q${qi + 1}. ${q}:</strong> ${t.options[parseInt(d.answers[`q${qi}`])]}
                                ${d.suggestions && d.suggestions[`q${qi}`] ? `
                                    <div class="suggestion">
                                        <strong>💡 ${t.suggestion || (currentLang === 'ar' ? 'اقتراح' : currentLang === 'fr' ? 'Suggestion' : 'Suggestion')}:</strong> ${d.suggestions[`q${qi}`]}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
                
                <div class="footer">
                    <p>© ${new Date().getFullYear()} ${currentLang === 'ar' ? 'مؤسسة الكوثر التعليمية' : currentLang === 'fr' ? 'Institution Al-Kawthar' : 'Al-Kawthar Institution'}</p>
                    <p>${currentLang === 'ar' ? 'تقرير مُنشأ تلقائياً' : currentLang === 'fr' ? 'Rapport généré automatiquement' : 'Automatically generated report'}</p>
                </div>
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

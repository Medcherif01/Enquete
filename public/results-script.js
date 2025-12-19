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
                
                // Add suggestion if exists
                if (d.suggestions && d.suggestions[`q${i}`]) {
                    row[`${t.suggestion} Q${i + 1}`] = d.suggestions[`q${i}`];
                }
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
                ...excelData.map(row => String(row[key] || '').length)
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
                    .suggestion { background-color: #e8f5e9; padding: 8px; margin: 5px 0; border-left: 3px solid #27ae60; }
                </style>
            </head>
            <body>
                <h1>${t.resultsTitle}</h1>
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
                
                <h2>${currentLang === 'ar' ? 'جميع الإجابات والاقتراحات' : currentLang === 'fr' ? 'Toutes les réponses et suggestions' : 'All Responses and Suggestions'}</h2>
                ${data.map((d, i) => `
                    <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                        <h3>${currentLang === 'ar' ? 'المشارك' : currentLang === 'fr' ? 'Participant' : 'Participant'} ${i + 1}</h3>
                        <p><strong>${t.parent}:</strong> ${d.parentName}</p>
                        <p><strong>${t.student}:</strong> ${d.studentName}</p>
                        <p><strong>${t.phone}:</strong> ${d.phone}</p>
                        ${d.comments ? `<p><strong>${t.comment}:</strong> ${d.comments}</p>` : ''}
                        
                        <h4>${currentLang === 'ar' ? 'الإجابات' : currentLang === 'fr' ? 'Réponses' : 'Answers'}</h4>
                        ${t.questions.map((q, qi) => `
                            <div style="margin: 10px 0;">
                                <strong>Q${qi + 1}. ${q}:</strong> ${t.options[parseInt(d.answers[`q${qi}`])]}
                                ${d.suggestions && d.suggestions[`q${qi}`] ? `
                                    <div class="suggestion">
                                        <strong>${t.suggestion}:</strong> ${d.suggestions[`q${qi}`]}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
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

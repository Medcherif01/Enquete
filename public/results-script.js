// Translations
const translations = {
    ar: {
        loginTitle: "نتائج الاستبيان",
        loginSubtitle: "الرجاء إدخال كلمة المرور للوصول إلى النتائج",
        loginBtn: "دخول",
        showPassword: "إظهار كلمة المرور",
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
        filterTitle: "تصفية النتائج حسب البرنامج والقسم",
        programmeLabel: "البرنامج:",
        sectionLabel: "القسم:",
        allOption: "الكل",
        applyFilter: "تطبيق التصفية",
        programmes: {
            'français': 'البرنامج الفرنسي',
            'britannique': 'البرنامج البريطاني',
            'américain': 'البرنامج الأمريكي'
        },
        sectionNames: {
            'Primaire': 'الابتدائي',
            'Secondaire Filles': 'الثانوي بنات',
            'Secondaire Garçons': 'الثانوي بنين',
            'Primaire Filles': 'الابتدائي بنات',
            'Primaire Garçons': 'الابتدائي بنين'
        },
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
        showPassword: "Afficher le mot de passe",
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
        filterTitle: "Filtrer les résultats par programme et section",
        programmeLabel: "Programme :",
        sectionLabel: "Section :",
        allOption: "Tous",
        applyFilter: "Appliquer le filtre",
        programmes: {
            'français': 'Programme Français',
            'britannique': 'Programme Britannique',
            'américain': 'Programme Américain'
        },
        sectionNames: {
            'Primaire': 'Primaire',
            'Secondaire Filles': 'Secondaire Filles',
            'Secondaire Garçons': 'Secondaire Garçons',
            'Primaire Filles': 'Primaire Filles',
            'Primaire Garçons': 'Primaire Garçons'
        },
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
        showPassword: "Show password",
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
        filterTitle: "Filter results by program and section",
        programmeLabel: "Program:",
        sectionLabel: "Section:",
        allOption: "All",
        applyFilter: "Apply Filter",
        programmes: {
            'français': 'French Program',
            'britannique': 'British Program',
            'américain': 'American Program'
        },
        sectionNames: {
            'Primaire': 'Primary',
            'Secondaire Filles': 'Secondary Girls',
            'Secondaire Garçons': 'Secondary Boys',
            'Primaire Filles': 'Primary Girls',
            'Primaire Garçons': 'Primary Boys'
        },
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

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');
    const checkbox = document.getElementById('show-password-checkbox');
    
    if (checkbox.checked) {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
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
        document.getElementById('show-password-label').innerText = t.showPassword;
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
        
        // Update filter labels
        if (document.getElementById('filter-title')) {
            document.getElementById('filter-title').innerHTML = `<i class="fas fa-filter"></i> ${t.filterTitle}`;
            document.getElementById('prog-label').innerText = t.programmeLabel;
            document.getElementById('sec-label').innerText = t.sectionLabel;
            document.getElementById('apply-btn-text').innerText = t.applyFilter;
            
            // Update programme options
            const programmeSelect = document.getElementById('filter-programme');
            if (programmeSelect) {
                const selectedProg = programmeSelect.value;
                programmeSelect.innerHTML = `
                    <option value="">${t.allOption}</option>
                    <option value="français">${t.programmes['français']}</option>
                    <option value="britannique">${t.programmes['britannique']}</option>
                    <option value="américain">${t.programmes['américain']}</option>
                `;
                programmeSelect.value = selectedProg;
                updateSectionFilter();
            }
        }
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
        // Build URL with current filters
        let url = '/api/results';
        const params = [];
        if (currentFilter.programme) params.push(`programme=${encodeURIComponent(currentFilter.programme)}`);
        if (currentFilter.section) params.push(`section=${encodeURIComponent(currentFilter.section)}`);
        if (params.length > 0) url += `?${params.join('&')}`;
        
        const res = await fetch(url);
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
        
        // Add filter information
        if (currentFilter.programme) {
            statsData.push(['Programme:', t.programmes[currentFilter.programme] || currentFilter.programme]);
        }
        if (currentFilter.section) {
            statsData.push(['Section (en branche):', t.sectionNames[currentFilter.section] || currentFilter.section]);
        }
        
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
        
        // Save file with section-specific name
        let fileName = 'Enquete_Alkawthar';
        if (currentFilter.programme) {
            fileName += `_${currentFilter.programme}`;
        }
        if (currentFilter.section) {
            fileName += `_${currentFilter.section.replace(/\s+/g, '_')}`;
        }
        fileName += `_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(workbook, fileName);
        
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
        // Build URL with current filters
        let url = '/api/results';
        const params = [];
        if (currentFilter.programme) params.push(`programme=${encodeURIComponent(currentFilter.programme)}`);
        if (currentFilter.section) params.push(`section=${encodeURIComponent(currentFilter.section)}`);
        if (params.length > 0) url += `?${params.join('&')}`;
        
        const res = await fetch(url);
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
                        color: #ff0000;
                        padding: 30px;
                        text-align: center;
                        border-radius: 15px;
                        margin-bottom: 30px;
                    }
                    h1 { 
                        color: #ff0000;
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
                        color: #ff0000;
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
                        color: #ff0000;
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
                        color: #ff0000;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    .filter-info {
                        text-align: center;
                        color: #ff0000;
                        font-size: 18px;
                        font-weight: bold;
                        margin: 15px 0;
                        padding: 10px;
                        background: white;
                        border-radius: 8px;
                        border: 2px solid #ff0000;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="width: 120px; height: 120px; margin: 0 auto 15px; background: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; border: 4px solid #1a2a6c; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                            <span style="font-size: 48px; color: #1a2a6c; font-weight: bold;">AK</span>
                        </div>
                    </div>
                    <h1>🎓 ${t.resultsTitle}</h1>
                    <p class="date-info">
                        ${currentLang === 'ar' ? 'تاريخ التقرير' : currentLang === 'fr' ? 'Date du rapport' : 'Report Date'}: 
                        ${new Date().toLocaleDateString(currentLang)}
                    </p>
                    ${currentFilter.programme || currentFilter.section ? `
                        <div class="filter-info">
                            ${currentFilter.programme ? `📚 ${t.programmes[currentFilter.programme] || currentFilter.programme}` : ''}
                            ${currentFilter.programme && currentFilter.section ? ' - ' : ''}
                            ${currentFilter.section ? `👥 ${t.sectionNames[currentFilter.section] || currentFilter.section}` : ''}
                        </div>
                    ` : ''}
                </div>
                
                <div class="stats">
                    <h3>📊 ${t.analyticsTitle}</h3>
                    ${currentFilter.programme ? `<p><strong style="color: #ff0000;">📚 ${currentLang === 'ar' ? 'البرنامج' : currentLang === 'fr' ? 'Programme' : 'Program'}:</strong> <span style="color: #ff0000; font-weight: bold;">${t.programmes[currentFilter.programme] || currentFilter.programme}</span></p>` : ''}
                    ${currentFilter.section ? `<p><strong style="color: #ff0000;">👥 ${currentLang === 'ar' ? 'القسم' : currentLang === 'fr' ? 'Section (en branche)' : 'Section (in branch)'}:</strong> <span style="color: #ff0000; font-weight: bold;">${t.sectionNames[currentFilter.section] || currentFilter.section}</span></p>` : ''}
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
        
        // Create section-specific filename
        let fileName = 'Rapport_Alkawthar';
        if (currentFilter.programme) {
            fileName += `_${currentFilter.programme}`;
        }
        if (currentFilter.section) {
            fileName += `_${currentFilter.section.replace(/\s+/g, '_')}`;
        }
        fileName += `_${new Date().toISOString().split('T')[0]}.doc`;
        
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
        
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

// Section filter management
const sections = {
    français: ['Primaire', 'Secondaire Filles', 'Secondaire Garçons'],
    britannique: ['Primaire Filles', 'Primaire Garçons', 'Secondaire Filles', 'Secondaire Garçons'],
    américain: ['Secondaire Filles', 'Secondaire Garçons']
};

let currentFilter = { programme: '', section: '' };

function updateSectionFilter() {
    const programme = document.getElementById('filter-programme').value;
    const sectionSelect = document.getElementById('filter-section');
    const t = translations[currentLang];
    
    sectionSelect.innerHTML = `<option value="">${t.allOption}</option>`;
    
    if (programme && sections[programme]) {
        sections[programme].forEach(section => {
            const option = document.createElement('option');
            option.value = section;
            option.textContent = t.sectionNames[section] || section;
            sectionSelect.appendChild(option);
        });
    }
}

function applyFilter() {
    currentFilter.programme = document.getElementById('filter-programme').value;
    currentFilter.section = document.getElementById('filter-section').value;
    
    // Show/hide export info message
    const exportInfo = document.getElementById('export-info');
    const exportInfoText = document.getElementById('export-info-text');
    
    if (currentFilter.programme || currentFilter.section) {
        exportInfo.style.display = 'block';
        const t = translations[currentLang];
        
        if (currentLang === 'ar') {
            exportInfoText.innerHTML = `<strong>ملاحظة:</strong> سيتم تصدير البيانات المصفاة فقط${currentFilter.programme ? ` (${t.programmes[currentFilter.programme]})` : ''}${currentFilter.section ? ` (${t.sectionNames[currentFilter.section]})` : ''}`;
        } else if (currentLang === 'fr') {
            exportInfoText.innerHTML = `<strong>Note:</strong> Les exports incluront uniquement les données filtrées${currentFilter.programme ? ` (${t.programmes[currentFilter.programme]})` : ''}${currentFilter.section ? ` (${t.sectionNames[currentFilter.section]})` : ''}`;
        } else {
            exportInfoText.innerHTML = `<strong>Note:</strong> Exports will include only filtered data${currentFilter.programme ? ` (${t.programmes[currentFilter.programme]})` : ''}${currentFilter.section ? ` (${t.sectionNames[currentFilter.section]})` : ''}`;
        }
    } else {
        exportInfo.style.display = 'none';
    }
    
    loadResults();
}

// Initialize filters on page load (extend existing DOMContentLoaded)
window.addEventListener('load', function() {
    updateSectionFilter();
});

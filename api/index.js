const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/enquete_alkawthar';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Survey Schema
const SurveySchema = new mongoose.Schema({
    parentName: {
        type: String,
        required: true,
        trim: true
    },
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    answers: {
        type: Object,
        required: true
    },
    suggestions: {
        type: Object,
        default: {}
    },
    comments: {
        type: String,
        default: '',
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    ipAddress: String,
    userAgent: String
}, {
    timestamps: true
});

// Indexes for better performance
SurveySchema.index({ date: -1 });
SurveySchema.index({ phone: 1 });

const Survey = mongoose.model('Survey', SurveySchema);

// API Routes

// Submit Survey
app.post('/api/submit', async (req, res) => {
    try {
        const { parentName, studentName, phone, answers, suggestions, comments } = req.body;

        // Validation
        if (!parentName || !studentName || !phone || !answers) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'الرجاء ملء جميع الحقول المطلوبة'
            });
        }

        // Validate answers object
        const numQuestions = 15;
        for (let i = 0; i < numQuestions; i++) {
            if (answers[`q${i}`] === undefined) {
                return res.status(400).json({
                    error: 'Incomplete answers',
                    message: 'الرجاء الإجابة على جميع الأسئلة'
                });
            }
        }

        // Create new survey entry
        const newSurvey = new Survey({
            parentName,
            studentName,
            phone,
            answers,
            suggestions: suggestions || {},
            comments: comments || '',
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.headers['user-agent']
        });

        await newSurvey.save();

        console.log('✅ New survey submitted:', {
            parent: parentName,
            student: studentName,
            date: new Date().toISOString()
        });

        res.status(201).json({
            success: true,
            message: 'Survey submitted successfully',
            data: {
                id: newSurvey._id,
                date: newSurvey.date
            }
        });

    } catch (error) {
        console.error('❌ Submit error:', error);
        res.status(500).json({
            error: 'Server error',
            message: 'حدث خطأ في الخادم، يرجى المحاولة مرة أخرى'
        });
    }
});

// Get All Results
app.get('/api/results', async (req, res) => {
    try {
        const results = await Survey.find()
            .sort({ date: -1 })
            .select('-ipAddress -userAgent -__v')
            .lean();

        console.log(`📊 Retrieved ${results.length} survey results`);

        res.status(200).json(results);

    } catch (error) {
        console.error('❌ Results fetch error:', error);
        res.status(500).json({
            error: 'Server error',
            message: 'فشل في جلب النتائج'
        });
    }
});

// Get Statistics
app.get('/api/statistics', async (req, res) => {
    try {
        const totalSurveys = await Survey.countDocuments();
        
        const surveys = await Survey.find()
            .select('answers')
            .lean();

        if (surveys.length === 0) {
            return res.status(200).json({
                totalSurveys: 0,
                averages: [],
                overallSatisfaction: 0
            });
        }

        const numQuestions = 15;
        const sums = new Array(numQuestions).fill(0);
        
        surveys.forEach(survey => {
            for (let i = 0; i < numQuestions; i++) {
                sums[i] += parseInt(survey.answers[`q${i}`] || 0);
            }
        });

        const averages = sums.map(sum => 
            ((sum / (surveys.length * 2)) * 100).toFixed(2)
        );

        const overallSatisfaction = (
            averages.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / numQuestions
        ).toFixed(2);

        res.status(200).json({
            totalSurveys,
            averages,
            overallSatisfaction
        });

    } catch (error) {
        console.error('❌ Statistics error:', error);
        res.status(500).json({
            error: 'Server error',
            message: 'فشل في حساب الإحصائيات'
        });
    }
});

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'الصفحة المطلوبة غير موجودة'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'حدث خطأ في الخادم'
    });
});

// For Vercel serverless
module.exports = app;

// For local development
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📱 Local: http://localhost:${PORT}`);
    });
}

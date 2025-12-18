const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connexion MongoDB (Utilise la variable d'environnement sur Vercel)
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

const SurveySchema = new mongoose.Schema({
    parentName: String,
    studentName: String,
    phone: String,
    answers: Object,
    comments: String,
    date: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', SurveySchema);

app.post('/api/submit', async (req, res) => {
    try {
        const newSurvey = new Survey(req.body);
        await newSurvey.save();
        res.status(201).json({ message: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/results', async (req, res) => {
    try {
        const results = await Survey.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;

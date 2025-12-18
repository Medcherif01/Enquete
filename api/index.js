const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connexion à MongoDB via la variable d'environnement Vercel
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur de connexion:", err));

// Définition du Schéma de l'enquête
const SurveySchema = new mongoose.Schema({
    parentName: String,
    studentName: String,
    phone: String,
    answers: Object, // Stocke les 15 questions
    comments: String,
    date: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', SurveySchema);

// Route pour soumettre une enquête
app.post('/api/submit', async (req, res) => {
    try {
        const newSurvey = new Survey(req.body);
        await newSurvey.save();
        res.status(201).json({ message: 'Enquête enregistrée avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l’enregistrement' });
    }
});

// Route pour récupérer toutes les données (pour les graphiques)
app.get('/api/results', async (req, res) => {
    try {
        const results = await Survey.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération' });
    }
});

module.exports = app;

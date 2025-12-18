const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/submit', (req, res) => {
    const surveyData = req.body;
    // Ici, vous pourriez enregistrer dans une base de données (ex: MongoDB ou Airtable)
    console.log('Nouvelle réponse reçue:', surveyData);
    res.status(200).json({ message: 'Success' });
});

module.exports = app;

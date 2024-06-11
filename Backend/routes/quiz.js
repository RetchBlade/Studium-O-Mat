const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET-Anfrage zum Abrufen aller Fragen
router.get('/fragen', async (req, res) => {
  try {
    // Alle Fragen abrufen
    const questions = await Question.find({});
    // Antwort mit den abgerufenen Fragen senden
    res.json(questions);
  } catch (error) {
    // Fehlerbehandlung und Fehlermeldung senden, falls ein Fehler auftritt
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

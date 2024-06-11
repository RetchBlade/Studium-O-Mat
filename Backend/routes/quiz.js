const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET-Anfrage zum Abrufen aller Fragen
router.get('/questions', async (req, res) => {
  try {
    // Alle Fragen abrufen, nur das Feld 'frage' zurückgeben, _id ausschließen
    const questions = await Question.find({}, { frage: 1, _id: 0 });
    // Antwort mit den abgerufenen Fragen senden
    res.json(questions);
  } catch (error) {
    // Fehlerbehandlung und Fehlermeldung senden, falls ein Fehler auftritt
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find({}, { frage: 1, _id: 0 }); // Nur das Feld 'frage' abrufen, _id ausschließen
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
;

module.exports = router;

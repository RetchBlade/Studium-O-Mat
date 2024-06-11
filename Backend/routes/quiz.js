const express = require('express');
const router = express.Router();
const Frage = require('../models/Question');

router.get('/questions', async (req, res) => {
  try {
    const fragen = await Frage.find();
    res.json(fragen);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
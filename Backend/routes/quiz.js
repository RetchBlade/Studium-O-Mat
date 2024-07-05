const express = require('express');
const router = express.Router();
const Frage = require('../models/Question');

// GET route to fetch all questions
router.get('/readquest', async (req, res) => {
  try {
    const fragen = await Frage.find();
    res.json(fragen);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to add a new question
router.post('/addquest', async (req, res) => {
  const newFrage = new Frage({
    frage: req.body.frage,
    studiengänge: req.body.studiengänge
  });

  try {
    const savedFrage = await newFrage.save();
    res.status(201).json(savedFrage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
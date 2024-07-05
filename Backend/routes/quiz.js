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

// PUT route to update a question
router.put('/updatequest/:id', async (req, res) => {
  try {
    const updatedFrage = await Frage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFrage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE route to delete a question
router.delete('/deletequest/:id', async (req, res) => {
  try {
    await Frage.findByIdAndDelete(req.params.id);
    res.json({ message: 'Frage gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
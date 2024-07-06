const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importiere das User-Modell

// Beispielroute zum Abrufen aller Benutzer, die keine Admins sind
router.get('/readuser', async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT route to update a question
router.put('/updateuser/:id', async (req, res) => {
  try {
    const updatedFrage = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFrage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE route to delete a question
router.delete('/deleteuser/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'user gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

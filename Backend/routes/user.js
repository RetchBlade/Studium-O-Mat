const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importiere das User-Modell

// Beispielroute zum Abrufen aller Benutzer
router.get('/readuser', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
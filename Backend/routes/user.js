// Importiert das express Modul
const express = require('express');
// Erstellt einen neuen Router
const router = express.Router();
// Importiert das User Modell
const User = require('../models/User');

// Route zum Abrufen aller Benutzer, die keine Admins sind
router.get('/readuser', async (req, res) => {
  try {
    // Findet alle Benutzer, bei denen isAdmin auf false gesetzt ist
    const users = await User.find({ isAdmin: false });
    // Sendet die gefundenen Benutzer als JSON Antwort
    res.json(users);
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
});

// PUT Route zum Bearbeiten eines Benutzers
router.put('/updateuser/:id', async (req, res) => {
  try {
    // Findet einen Benutzer basierend auf der ID im Request-Parameter und aktualisiert ihn mit den neuen Daten aus dem Request-Body
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Sendet den aktualisierten Benutzer als JSON Antwort
    res.json(updatedUser);
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
});

// DELETE Route zum Löschen eines Benutzers
router.delete('/deleteuser/:id', async (req, res) => {
  try {
    // Findet einen Benutzer basierend auf der ID im Request-Parameter und löscht ihn
    await User.findByIdAndDelete(req.params.id);
    // Sendet eine Erfolgsmeldung als JSON Antwort
    res.json({ message: 'Benutzer gelöscht' });
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
});

// Exportiert den Router zur Verwendung in anderen Teilen der Anwendung
module.exports = router;

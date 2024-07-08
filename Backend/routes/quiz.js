// Importiert das express Modul
const express = require('express');
// Erstellt einen neuen Router
const router = express.Router();
// Importiert das Frage Modell
const Frage = require('../models/Question');

// GET Route zum Abrufen aller Fragen
router.get('/readquest', async (req, res) => {
  try {
    // Findet alle Dokumente im Frage Modell
    const fragen = await Frage.find();
    // Sendet die gefundenen Dokumente als JSON Antwort
    res.json(fragen);
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers
    res.status(500).json({ message: err.message });
  }
});

// POST Route zum Hinzufügen einer neuen Frage
router.post('/addquest', async (req, res) => {
  // Erstellt eine neue Frage basierend auf den im Request-Body erhaltenen Daten
  const newFrage = new Frage({
    frage: req.body.frage,
    studiengänge: req.body.studiengänge
  });

  try {
    // Speichert die neue Frage in der Datenbank
    const savedFrage = await newFrage.save();
    // Sendet die gespeicherte Frage als JSON Antwort und setzt den Status auf 201 (Created)
    res.status(201).json(savedFrage);
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
});

// PUT Route zum Aktualisieren einer Frage
router.put('/updatequest/:id', async (req, res) => {
  try {
    // Findet eine Frage basierend auf der ID im Request-Parameter und aktualisiert sie mit den neuen Daten aus dem Request-Body
    const updatedFrage = await Frage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Sendet die aktualisierte Frage als JSON Antwort
    res.json(updatedFrage);
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
});

// DELETE Route zum Löschen einer Frage
router.delete('/deletequest/:id', async (req, res) => {
  try {
    // Findet eine Frage basierend auf der ID im Request-Parameter und löscht sie
    await Frage.findByIdAndDelete(req.params.id);
    // Sendet eine Erfolgsmeldung als JSON Antwort
    res.json({ message: 'Frage gelöscht' });
  } catch (err) {
    // Sendet eine Fehlernachricht im Falle eines Fehlers und setzt den Status auf 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
});

// Exportiert den Router zur Verwendung in anderen Teilen der Anwendung
module.exports = router;

const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// POST-Anfrage zur Registrierung eines neuen Benutzers
router.post('/register', async (req, res) => {
  try {
    // Benutzerdaten aus der Anfrage erhalten
    const { email, password } = req.body;
    // Neuen Benutzer mit den erhaltenen Daten erstellen
    const user = new User({ email, password, isAdmin: false }); // isAdmin auf false setzen
    // Benutzer in der Datenbank speichern
    await user.save();
    // Erfolgsmeldung senden
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    // Fehlerstatus und Fehlermeldung senden, falls ein Fehler auftritt
    res.status(500).send(error);
  }
});

// POST-Anfrage zum Einloggen eines Benutzers
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Benutzer in der Datenbank finden
    const user = await User.findOne({ email });

    // Überprüfen, ob der Benutzer existiert und das Passwort korrekt ist
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    // JWT-Token erstellen und senden
    const token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.send({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send(error);
  }
});

module.exports = router;

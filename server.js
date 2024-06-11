const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Verbindung
mongoose.connect('mongodb+srv://WebPioneers:studiomat@livable.joewjmc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

app.listen(5000, () => {
   console.log('Server läuft auf Port 5000');
});

// Quiz-Routen importieren
const quizRoutes = require('./Backend/routes/quiz');
app.use('/api/quiz', quizRoutes);

// Auth-Routen importieren
const authRoutes = require('./Backend/routes/auth');
app.use('/api/auth', authRoutes);

// CORS-Einstellungen für den Zugriff von http://localhost:8080
app.use(cors({ origin: 'http://localhost:8080' }));

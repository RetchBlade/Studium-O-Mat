const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());

// MongoDB Atlas Verbindung
mongoose.connect('mongodb+srv://WebPioneers:studiomat@livable.joewjmc.mongodb.net/test')
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

app.listen(5000, () => {
   console.log('Server läuft auf Port 5000');
});


// CORS-Einstellungen für den Zugriff von http://localhost:8080
const corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));



// Quiz-Routen importieren
const quizRoutes = require('./Backend/routes/quiz');
app.use('/api/quiz', quizRoutes);

// Auth-Routen importieren
const authRoutes = require('./Backend/routes/auth');
app.use('/api/auth', authRoutes);

// User-Routen importieren
const userRoutes = require('./Backend/routes/user');
app.use('/api/user', userRoutes);

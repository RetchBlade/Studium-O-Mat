// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://WebPioneers:studiomat@livable.joewjmc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => {
   console.log('Server running on port 5000');
});

// Importiere die Quiz-Routes
const quizRoutes = require('./Backend/routes/quiz');
app.use('/api/quiz', quizRoutes);

//  Importiere die auth-Routes
const authRoutes = require('./Backend/routes/auth');
app.use('/api/auth', authRoutes);

app.use(cors({ origin: 'http://localhost:8080' }));

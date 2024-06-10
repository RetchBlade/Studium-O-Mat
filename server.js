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

// server.js
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

// server.js
app.use(cors({ origin: 'http://localhost:8080' })); // Vue Dev Server



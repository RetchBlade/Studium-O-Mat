const mongoose = require('mongoose');

// Frage-Schema definieren
const questionSchema = new mongoose.Schema({
  frage: {
    type: String,
    required: true // Die Frage muss vorhanden sein
  },
  studiengänge: {
    type: [String],
    required: true // Mindestens ein Studiengang muss angegeben werden
  }
});

// Fragemodell erstellen und exportieren
module.exports = mongoose.model('fragen', questionSchema);

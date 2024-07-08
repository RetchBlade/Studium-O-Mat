// Importiert das mongoose Modul
const mongoose = require('mongoose');

// Destrukturiert Schema und model aus dem mongoose Modul
const { Schema, model } = mongoose;

// Definiert ein neues Schema namens 'fragenSchema' für die Sammlung 'question'
const fragenSchema = new Schema({
  // Definiert ein Feld 'frage' vom Typ String, das erforderlich ist
  frage: {
    type: String,
    required: true
  },
  // Definiert ein Feld 'studiengänge', das ein Array von Strings ist und ebenfalls erforderlich ist
  studiengänge: [{
    type: String,
    required: true
  }]
}, { collection: 'question' }); // Gibt explizit den Namen der Sammlung an, in der die Dokumente gespeichert werden

// Erstellt ein Mongoose Modell namens 'Frage' basierend auf dem 'fragenSchema'
const Frage = model('Frage', fragenSchema);

// Exportiert das Modell 'Frage' zur Verwendung in anderen Teilen der Anwendung
module.exports = Frage;

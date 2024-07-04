const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Benutzer-Schema definieren
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // E-Mail muss vorhanden und eindeutig sein
  password: { type: String, required: true }, // Passwort muss vorhanden sein
  isAdmin: { type: Boolean, default: false } // Standardmäßig auf false setzen
});

// Vor dem Speichern des Benutzers das Passwort hashen
UserSchema.pre('save', async function(next) {
  // Überprüfen, ob das Passwort geändert wurde; wenn nicht, zum nächsten Middleware-Funktionsschritt gehen
  if (!this.isModified('password')) return next();
  // Passwort hashen (10 ist die Anzahl der Runden)
  this.password = await bcrypt.hash(this.password, 10);
  next(); // Nächste Middleware-Funktionsschritt aufrufen
});

// Benutzermodell erstellen und exportieren
module.exports = mongoose.model('User', UserSchema);

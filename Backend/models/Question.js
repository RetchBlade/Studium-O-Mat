const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fragenSchema = new Schema({
  frage: {
    type: String,
    required: true
  },
  studiengänge: [{
    type: String,
    required: true
  }]
}, { collection: 'question' });

const Frage = model('Frage', fragenSchema);

module.exports = Frage;


const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  frage: {
    type: String,
    required: true
  },
  studiengänge: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('fragen', questionSchema);

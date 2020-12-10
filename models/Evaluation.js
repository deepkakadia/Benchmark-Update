const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  charCount: {
    type: Number,
    required: true,
    max: 255,
    min: 1,
  },
});

module.exports = mongoose.model('Evaluation', EvaluationSchema);

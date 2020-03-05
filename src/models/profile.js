import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  questions: {
    type: String,
    required: true
  },
  answers: {
    type: String,
    required: true
  },
  weights: {
    type: Number
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProfileQuestion', profileSchema);

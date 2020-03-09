import mongoose from 'mongoose';

const therapistSchema = new mongoose.Schema({
    
  firstName: {
    type: String,
    required: true,
    minlength: 4
  },
  lastName: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'general'
  },
  imageUrl: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Therapist', therapistSchema);

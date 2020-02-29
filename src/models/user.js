import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    min: 3,
    max: 255

  },
  lastName: {
    required: true,
    type: String,
    min: 3,
    max: 255
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255

  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1000
  },

  logCount: {
    type: Number,
    required: true,
    default: 0
  },
  timestamp: {
       
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

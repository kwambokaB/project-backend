import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

module.exports = ('Admin', adminSchema);

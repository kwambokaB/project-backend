import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname:{
        required: true,
        type: String,
        min: 3,
        max:255

    },
    lastName : {
        required: true,
        type: String,
        min: 3,
        max:255

    },
    email:{
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255

    },
    password:{
        type: String,
        required: true,
        min: 8,
        max: 1000
    },
    IsAdmin :{
        type: Boolean,
        default: false
    },
    userRole: {
      type: String,
      default : patient
    
    },
    timestamp :{
       
            type: Date,
            default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);
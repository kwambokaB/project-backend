import express from 'express';
import therapistController from '../controllers/therapistController';

const route = express.Router();

route.post('/signin', therapistController.signIn);
// route.update('/updateprofile', therapistController.updateProfile);

module.exports = route;

import express from 'express';
import counsellorController from '../controllers/counsellorController';

const route = express.Router();

route.post('/signin', counsellorController.signIn);
route.update('/updateprofile', counsellorController.updateProfile);

module.exports = route;

import express from 'express';
import VerifyToken from '../middlewares/verifyToken';
import { signinCheck, signupCheck } from '../middlewares/userValidation';
import adminController from '../controllers/adminController';

const route = express.Router();

route.post('/login', signinCheck, adminController.signIn);
route.post('/register', signupCheck, adminController.signUp);
route.get('/getusers', VerifyToken, adminController.getAllUsers);
route.get('/gettherapists', VerifyToken, adminController.getAllTherapists);
route.post('/addtherapist', VerifyToken, adminController.addTherapist);
// route.delete('/deleteTherapist', VerifyToken, adminController.deleteTherapist);
// route.delete('/deleteUser', VerifyToken, adminController.deleteUser);


module.exports = route;

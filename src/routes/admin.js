import express from 'express';
import VerifyToken from '../middlewares/verifyToken';
import signinCheck from '../middlewares/userValidation';

const route = express.Router();

route.get('/getusers', VerifyToken, adminController.getAllUsers);
route.get('/gettherapists', VerifyToken, adminController.getAllTherapists);
route.post('/addtherapist', VerifyToken, adminController.addTherapist);
route.delete('/deleteTherapist', VerifyToken, adminController.deleteTherapist);
route.delete('/deleteUser', VerifyToken, adminController.deleteUser);
route.post('/auth/signin', signinCheck, adminController.signIn);


module.exports = route;

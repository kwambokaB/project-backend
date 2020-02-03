import express from 'express';

import Auth from '../middlewares/auth';
import userController from '../controllers/userController';
import userValidator from '../middlewares/userValidation';

const route = express.Router();

const { checkToken, isAdmin } = Auth;
const { signin, createUser } = userController;
const { signinCheck, signupCheck } = userValidator;

route.post('/signin', signinCheck, signin);
route.post('/create-user', checkToken, isAdmin, signupCheck, createUser);

export default route;
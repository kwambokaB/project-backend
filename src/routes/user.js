/* eslint-disable no-unused-vars */
import express from 'express';
import { signinCheck, signupCheck } from '../middlewares/userValidation';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/signup', signupCheck, userController.signUp);

router.post('/signin', signinCheck, userController.signIn);

module.exports = router;

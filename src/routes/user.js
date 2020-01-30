import express from 'express';

const route = express.Router;

route.get('/', validation, authentication, userContorller.getUsers);

route.post('/login', validation, authentication, userController.login);

route.post('/signup', validation, authentication, userContorller.signUp);

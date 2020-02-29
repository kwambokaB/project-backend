/* eslint-disable require-jsdoc */
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

config();

const secretKey = process.env.JWT_PRIVATE_KEY;

function verifyToken() {
  const token = req.header('auth-token');
  if (!token) {
    res.status(404).send('Login required');
  }
  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
  } catch (err) {
    res.status(400).json({
      satus: 'error',
      message: 'invalid token'
    });
  }
}

module.exports = verifyToken;

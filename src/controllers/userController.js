import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();


exports.signUp = async (req, res) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);
  
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};


exports.signIn = (req, res) => {
  const validPass = bcryptjs.compare(req.body.password, user.password);
  if (!validPass) {
    res.status(400).send('invalid email');
  }
  
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY);
  res.header('auth-token', token).send(token);
};

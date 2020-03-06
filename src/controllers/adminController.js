import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Admin from '../models/admin';
import User from '../models/user';
import Counsellor from '../models/counsellers';

dotenv.config();

exports.getAllTherapists = (req, res) => {
  Counsellor.find().then(
    (counsellors) => {
      res.status(200).json(counsellors);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error
      });
    }
  );
};

exports.getAllUsers = (req, res) => {
  User.find().then(
    (users) => {
      res.status(200).json(users);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error
      });
    }
  );
};

exports.deleteUser = (req, res) => {

};

exports.deleteTherapist = (req, res) => {

};

exports.signIn = (req, res) => {
  const validPass = bcryptjs.compare(req.body.password, Admin.password);
  if (!validPass) {
    res.status(400).send('invalid email');
  }
  
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY);
  res.header('auth-token', token).send(token);
};

exports.addTherapist = async (req, res) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

  const counsellor = new Counsellor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    bio: req.body.bio,
    title: req.body.firstName,
    imageUrl: req.body.imageUrl,
  });
  try {
    const savedCounsellor = await counsellor.save();
    res.send(savedCounsellor);
  } catch (err) {
    res.status(400).send(err);
  }
};

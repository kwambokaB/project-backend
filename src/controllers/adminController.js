import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Admin, User, Therapist } from '../models/index';


dotenv.config();

exports.signUp = async (req, res) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);
  
  const admin = new Admin({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.signIn = (req, res) => {
  const validPass = bcryptjs.compare(req.body.password, admin.password);
  if (!validPass) {
    res.status(400).send('invalid email');
  }
  
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: admin._id }, process.env.JWT_PRIVATE_KEY);
  res.header('auth-token', token).send(token);
};

exports.getAllTherapists = (req, res) => {
  Therapist.find().then(
    (therapist) => {
      res.status(200).json(therapist);
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

exports.addTherapist = async (req, res) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

  const therapist = new Therapist({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    bio: req.body.bio,
    title: req.body.firstName,
    imageUrl: req.body.imageUrl,
  });
  try {
    const savedTherapist = await therapist.save();
    res.send(savedTherapist);
  } catch (err) {
    res.status(400).send(err);
  }
};


// exports.deleteUser = (req, res) => {

// };

// exports.deleteTherapist = (req, res) => {

// };

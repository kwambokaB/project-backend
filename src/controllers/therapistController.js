import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Therapist from '../models/therapist';


exports.signIn = () => {
  const therapist = new Therapist();
  const validPass = bcryptjs.compare(req.body.password, therapist.password);
  if (!validPass) {
    res.status(400).send('invalid email');
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY);
  res.header('auth-token', token).send(token);
};

// exports.updateProfile = (req, res) => {
// const therapist = new Therapist({ _id: req.params.id });
// const url = `${req.protocol}://${req.host}:${req.port}`;
//  therapist.update({
//   firstName: req.body.firstName,
//    lastName: req.body.lastName,
//   email: req.body.email,
//   imageUrl: `${url}/images/${req.filename}`,
//   bio: req.body.bio
// });

// Therapist.updateOne({ _id: req.params.id }, councellor)
//    .then(() => {
//     res.status(201).json({
//       status: 'success',
//        message: 'Thing updated successfully!'
//     });
//   })
//    .catch(
//     (error) => {
//      res.status(400).json({
//         error
//       });
//
//  }
//
//  );
//
// };
//

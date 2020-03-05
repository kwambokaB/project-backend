import Joi from '@hapi/joi';
import User from '../models/user';


const signupCheck = async (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    logCount: Joi.number()
      .required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json({
      status: 'error',
      error: error.details[0].message
    });
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(409).json({
      status: 'error',
      error: 'Email is already taken'
    });
  }

  return next();
};

const signinCheck = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json({
      status: 'error',
      error: error.details[0].message
    });
  }

  const user = await User.findOne('email', req.body.email);

  if (!user) {
    return res.status(401).json({
      status: 'error',
      error: 'Email not found!'
    });
  }

  return next();
};

export { signinCheck, signupCheck };

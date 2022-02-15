import jwt from 'jsonwebtoken';

import jwtConfig from '../configs/jwt.config';

const extractToken = (req, res, next) => {
  req.user = {};
  const headers = req.headers.authorization;
  console.log(req.headers.authorization);
  if (headers && headers.split(' ')[0] === 'Bearer') {
    req.user.token = headers.split(' ')[1];
    next();
  } else {
    throw new Error('Token not found');
  }
};

const decodeToken = (req, res, next) => {
  const { token } = req.user;
  try {
    req.user = jwt.verify(token, jwtConfig.secret);
    next();
  } catch (err) {
    throw new Error('Invalid token');
  }
};

export { extractToken, decodeToken };

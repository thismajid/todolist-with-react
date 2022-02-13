import jwt from 'jsonwebtoken';

import db from '../models';

const User = db.users;
const Op = db.Sequelize.Op;

const findUsername = async (username) => {
  try {
    return await User.findOne({ where: { username } });
  } catch (err) {
    throw err;
  }
};

const findEmail = async (email) => {
  try {
    return await User.findOne({ where: { email } });
  } catch (err) {
    throw err;
  }
};

const createUser = async (newUser) => {
  try {
    return await User.create(newUser);
  } catch (err) {
    throw err;
  }
};

const authenticateUser = async (username, password) => {
  try {
    return await User.authenticate(username, password);
  } catch (err) {
    throw err;
  }
};

const generateToken = (payload) => {
  return jwt.sign(payload, 'shhhhh');
};

export { findUsername, findEmail, createUser, authenticateUser, generateToken };

import db from '../models';

const User = db.users;
const Op = db.Sequelize.Op;

const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    const usernameFound = await User.findOne({ where: { username } });
    if (usernameFound) {
      return res.status(400).json({
        success: false,
        message: 'Duplicate username, please pickup another username',
        data: '',
      });
    }
    const emailFound = await User.findOne({ where: { email } });
    if (emailFound) {
      return res.status(400).json({
        success: false,
        message: 'Duplicate email address, please enter another email address',
        data: '',
      });
    }
    const newUser = {
      firstname,
      lastname,
      email,
      username,
      password,
    };
    const createdUser = await User.create(newUser);
    return res.status(201).json({
      success: true,
      message: 'Created user successfully',
      data: createdUser,
    });
  } catch (err) {
    throw err;
  }
};

export { registerController };

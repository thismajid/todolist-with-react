import {
  findUsername,
  findEmail,
  createUser,
  authenticateUser,
  generateToken,
} from '../services/auth.service';

const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    const usernameFound = await findUsername(username);
    if (usernameFound) {
      return res.status(400).json({
        success: false,
        message: 'Duplicate username, please pickup another username',
        data: '',
      });
    }
    const emailFound = await findEmail(email);
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
    const createdUserData = await createUser(newUser);
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: createdUserData,
    });
  } catch (err) {
    // throw err;
    console.log(err);
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userFound = await findUsername(username);
    const matchPassword = await authenticateUser(username, password);

    if (!userFound || !matchPassword) {
      return res.status(404).json({
        success: false,
        message: 'Invalid username/password',
        data: '',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Login successfully',
      data: {
        user: userFound,
        token: generateToken({
          id: userFound.id,
          username: userFound.username,
        }),
      },
    });
  } catch (err) {
    throw err;
  }
};

export { registerController, loginController };

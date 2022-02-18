import {
  findUsername,
  findEmail,
  createUser,
  authenticateUser,
} from '../services/auth.service';
import { generateToken } from '../services/jwt.service';
import SendResponse from '../utils/sendResponse.util';

const sendResponse = new SendResponse();

const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    const usernameFound = await findUsername(username);
    if (usernameFound) {
      return sendResponse
        .setError(400, 'Duplicate username, please pickup another username')
        .send(res);
    }
    const emailFound = await findEmail(email);
    if (emailFound) {
      return sendResponse
        .setError(
          400,
          'Duplicate email address, please enter another email address'
        )
        .send(res);
    }
    const newUser = await createUser({
      firstname,
      lastname,
      email,
      username,
      password,
    });
    return sendResponse
      .setSuccess(201, 'User created successfully', newUser)
      .send(res);
  } catch (err) {
    sendResponse.setError(400, err.message).send(res);
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userFound = await findUsername(username);
    const matchPassword = await authenticateUser(username, password);

    if (!userFound || !matchPassword) {
      return sendResponse.setError(404, 'Invalid username/password').send(res);
    }

    return sendResponse
      .setSuccess(200, 'Login successfully', {
        user: userFound,
        token: generateToken({
          id: userFound.id,
          firstname: userFound.firstname,
          lastname: userFound.lastname,
        }),
      })
      .send(res);
  } catch (err) {
    sendResponse.setError(400, err.message).send(res);
  }
};

export { registerController, loginController };

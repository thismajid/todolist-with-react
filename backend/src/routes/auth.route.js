import { Router } from 'express';

import {
  registerValidator,
  loginValidator,
} from '../middlewares/validator.middleware';

import {
  registerController,
  loginController,
} from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/register', registerValidator, registerController);

authRouter.post('/login', loginValidator, loginController);

export default authRouter;

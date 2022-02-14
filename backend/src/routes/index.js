import { Router } from 'express';

import authRouter from './auth.route';
import todoRouter from './todo.route';

import { extractToken, decodeToken } from '../middlewares/authorize.middleware';

const router = Router();

router.use('/auth', authRouter);

router.use('/todo', extractToken, decodeToken, todoRouter);

export default router;

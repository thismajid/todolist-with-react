import { Router } from 'express';

import authRouter from './auth.route';
import todoRouter from './todo.route';

import { extractToken, decodeToken } from '../services/jwt.service';

const router = Router();

router.use('/auth', authRouter);

router.use('/todo', extractToken, decodeToken, todoRouter);

export default router;

import { Router } from 'express';

import { addTodo, getTodo } from '../controllers/todo.controller';

const todoRouter = Router();

todoRouter.post('/', addTodo);

todoRouter.get('/', getTodo);

export default todoRouter;

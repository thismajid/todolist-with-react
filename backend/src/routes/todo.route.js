import { Router } from 'express';

import {
  addTodo,
  getTodos,
  deleteTodo,
  editTodo,
  editTodoStatus,
} from '../controllers/todo.controller';

import { checkTodoExist } from '../middlewares/todo.middleware';

const todoRouter = Router();

todoRouter.get('/', getTodos);

todoRouter.post('/', addTodo);

todoRouter.delete('/', checkTodoExist, deleteTodo);

todoRouter.put('/', checkTodoExist, editTodo);

todoRouter.put('/status', checkTodoExist, editTodoStatus);

export default todoRouter;

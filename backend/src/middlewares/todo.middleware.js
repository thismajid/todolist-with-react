import { findSingleTodo } from '../services/todo.service';

const checkTodoExist = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { todoId } = req.body;
    const todo = await findSingleTodo(todoId);
    if (!todo) {
      return res.status(400).json({
        success: false,
        message: 'Bad request / Invalid todo',
        data: '',
      });
    }
    if (todo.userId !== id) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized / You cannot delete this todo',
        data: '',
      });
    }
    next();
  } catch (err) {
    throw err;
  }
};

export { checkTodoExist };

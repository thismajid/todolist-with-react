import {
  createTodo,
  findTodo,
  removeTodo,
  updateTodo,
  changeTodoStatus,
} from '../services/todo.service';

const addTodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    const { id } = req.user;
    const newTodo = await createTodo({
      description,
      userId: id,
    });
    return res.status(201).json({
      success: true,
      message: 'New todo created successfully',
      data: newTodo,
    });
  } catch (err) {
    throw err;
  }
};

const getTodos = async (req, res, next) => {
  try {
    const { id } = req.user;
    const todos = await findTodo(id);
    return res.status(200).json({
      success: true,
      message: 'All todos retrieved successfully',
      data: todos,
    });
  } catch (err) {
    throw err;
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    await removeTodo(todoId);
    return res.status(200).json({
      success: true,
      message: 'This todo deleted successfully',
      data: '',
    });
  } catch (err) {
    throw err;
  }
};

const editTodo = async (req, res, next) => {
  try {
    const { todoId, description } = req.body;
    await updateTodo(todoId, description);
    return res.status(200).json({
      success: true,
      message: 'Todo description updated successfully',
      data: '',
    });
  } catch (err) {
    throw err;
  }
};

const editTodoStatus = async (req, res, next) => {
  try {
    const { todoId } = req.body;
    await changeTodoStatus(todoId);
    return res.status(200).json({
      success: true,
      message: 'Todo status updated successfully',
      data: '',
    });
  } catch (err) {
    throw err;
  }
};

export { addTodo, getTodos, deleteTodo, editTodo, editTodoStatus };

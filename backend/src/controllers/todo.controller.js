import {
  createTodo,
  findTodo,
  removeTodo,
  updateTodo,
  changeTodoStatus,
  findSingleTodo,
} from '../services/todo.service';
import SendResponse from '../utils/sendResponse.util';

const sendResponse = new SendResponse();

const addTodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    const { id } = req.user;
    const newTodo = await createTodo({
      description,
      userId: id,
    });
    return sendResponse
      .setSuccess(201, 'New todo created successfully', newTodo)
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const { status } = req.query;
    const { id } = req.user;
    const todos = await findTodo(id, status);
    return sendResponse
      .setSuccess(200, 'All todos retrieved successfully', todos)
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

const getSingleTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    const todo = await findSingleTodo(todoId);
    return sendResponse
      .setSuccess(200, `Todo with id=${todoId} retrieved successfully`, todo)
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { todoId } = req.body;
    await removeTodo(todoId);
    return sendResponse
      .setSuccess(200, `Todo with id=${todoId} deleted successfully`, todo)
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

const editTodo = async (req, res, next) => {
  try {
    const { todoId, description } = req.body;
    await updateTodo(todoId, description);
    return sendResponse
      .setSuccess(
        200,
        `Todo description with id=${todoId} updated successfully`,
        todo
      )
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

const editTodoStatus = async (req, res, next) => {
  try {
    const { todoId } = req.body;
    await changeTodoStatus(todoId);
    return sendResponse
      .setSuccess(
        200,
        `Todo status with id=${todoId} updated successfully`,
        todo
      )
      .send(res);
  } catch (err) {
    return sendResponse.setError(400, err.message).send(res);
  }
};

export {
  addTodo,
  getTodos,
  deleteTodo,
  editTodo,
  editTodoStatus,
  getSingleTodo,
};

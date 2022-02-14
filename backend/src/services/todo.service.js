import db from '../models';

const Todo = db.todos;
const Op = db.Sequelize.Op;

const createTodo = async (newTodo) => {
  try {
    return await Todo.create(newTodo);
  } catch (err) {
    throw err;
  }
};

const findTodo = async (userId) => {
  try {
    return await Todo.findAll({ where: { userId } });
  } catch (err) {
    throw err;
  }
};

const findSingleTodo = async (todoId) => {
  try {
    return await Todo.findByPk(todoId);
  } catch (err) {
    throw err;
  }
};

const removeTodo = async (todoId) => {
  try {
    return await Todo.destroy({
      where: {
        id: todoId,
      },
    });
  } catch (err) {
    throw err;
  }
};

const updateTodo = async (todoId, description) => {
  try {
    return await Todo.update({ description }, { where: { id: todoId } });
  } catch (err) {
    throw err;
  }
};

const changeTodoStatus = async (todoId) => {
  try {
    const todo = await findSingleTodo(todoId);
    return await Todo.update(
      { isCompleted: !todo.isCompleted },
      { where: { id: todoId } }
    );
  } catch (err) {}
};

export {
  createTodo,
  findTodo,
  removeTodo,
  findSingleTodo,
  updateTodo,
  changeTodoStatus,
};

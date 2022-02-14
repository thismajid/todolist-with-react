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

export { createTodo, findTodo };

import { createTodo, findTodo } from '../services/todo.service';

const addTodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    const { id } = req.user;
    const response = await createTodo({
      description,
      userId: id,
    });
    res.send(response);
  } catch (err) {
    console.log(err);
  }
};

const getTodo = async (req, res, next) => {
  try {
    const todos = await findTodo(req.user.id);
    console.log(todos);
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, getTodo };

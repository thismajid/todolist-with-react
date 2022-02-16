import http from "./httpService";

const registerReq = async (user) => {
  try {
    return await http.post("/auth/register", user);
  } catch (err) {
    throw err;
  }
};

const loginReq = async (user) => {
  try {
    return await http.post("/auth/login", user);
  } catch (err) {
    throw err;
  }
};

const addTodoReq = async (todo) => {
  try {
    return await http.post("/todo", todo);
  } catch (err) {
    throw err;
  }
};

const getTodosReq = async (status) => {
  try {
    return await http.get(`/todo?status=${status}`);
  } catch (err) {
    throw err;
  }
};

const getSingleTodoReq = async (id) => {
  try {
    return await http.get(`/todo/${id}`);
  } catch (err) {
    throw err;
  }
};

const changeStatusReq = async (todoId) => {
  try {
    return await http.put(`/todo/status`, { todoId });
  } catch (err) {
    throw err;
  }
};

const deleteTodoReq = async (todoId) => {
  try {
    return await http.delete("/todo", { data: { todoId } });
  } catch (err) {
    throw err;
  }
};

const updateTodoReq = async (updatedTodo) => {
  try {
    return await http.put("/todo", updatedTodo);
  } catch (err) {
    throw err;
  }
};

export {
  registerReq,
  loginReq,
  getTodosReq,
  changeStatusReq,
  deleteTodoReq,
  addTodoReq,
  getSingleTodoReq,
  updateTodoReq,
};

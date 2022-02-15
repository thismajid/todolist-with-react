import { useState } from "react";
import { addTodoReq } from "../../../services/requestService";

const AddTodo = ({ getTodos }) => {
  const [todo, setTodo] = useState({ description: "" });

  const changeHandler = async (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (todo) {
        await addTodoReq(todo);
        getTodos();
        setTodo({ description: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-6 m-auto mt-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3 row">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={todo.description}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <input type="submit" className="btn btn-success mt-2" value="Add" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

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
        <div className="row align-items-center">
          <div className="col-3">
            <label className="col-form-label" for="description">
              Description:
            </label>
          </div>
          <div className="col-6">
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={todo.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="col-auto">
            <span className="form-text">
              <input
                type="submit"
                className="btn btn-success ms-5"
                value="Add"
              />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

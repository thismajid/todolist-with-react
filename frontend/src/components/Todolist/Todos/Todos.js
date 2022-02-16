import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Todos = ({ todos, changeStatus, deleteTodo, showModal }) => {
  return (
    <div className="m-auto col-6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th score="col">Last Update</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {todos ? (
            todos.map((todo, index) => {
              return (
                <tr key={todo.id}>
                  <th scope="row" onClick={() => changeStatus(todo.id)}>
                    {index + 1}
                  </th>
                  <td onClick={() => changeStatus(todo.id)}>
                    {todo.status === "completed" ? (
                      <del>{todo.description}</del>
                    ) : (
                      todo.description
                    )}
                  </td>
                  <td>{todo.status}</td>
                  <td>{new Date(todo.updatedAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn me-1"
                      onClick={() => showModal(todo.id)}
                    >
                      <FaEdit className="text-primary" />
                    </button>
                    <button className="btn" onClick={() => deleteTodo(todo.id)}>
                      <FaTrashAlt className="text-danger" />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th colSpan="3">Loading ...</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;

const Todos = ({
  todos,
  changeStatus,
  updateDescription,
  deleteTodo,
  showModal,
}) => {
  return (
    <div className="m-auto col-6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
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
                    {todo.description}
                  </td>
                  <td>{todo.status}</td>
                  <td>
                    <button
                      className="btn btn-primary me-3"
                      onClick={() => showModal(todo.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
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

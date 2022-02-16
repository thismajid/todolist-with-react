const ModalComponent = ({ show, handleClose, todo, updateHandler }) => {
  const renderModal = () => {
    if (show && todo) {
      return (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Todo
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={updateHandler}>
                  <div className="mb-3">
                    <label
                      htmlFor="description"
                      className="col-form-label d-flex justify-content-start"
                    >
                      Recipient:
                    </label>
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      name="description"
                      placeholder={todo.description}
                      id="description"
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-success mt-3"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  };

  return renderModal();
};

export default ModalComponent;

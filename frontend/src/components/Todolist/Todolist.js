import { useEffect, useState } from "react";
import Search from "./Search/Search";
import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";
import SelectStatus from "./SelectStatus/SelectStatus";
import ModalComponent from "./Modal/Modal";
import {
  getTodosReq,
  changeStatusReq,
  deleteTodoReq,
  getSingleTodoReq,
  updateTodoReq,
} from "../../services/requestService";
import { Toast, successToast, errorToast } from "../Toast/Toast";

const Todolist = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [todos, setTodos] = useState(null);
  const [allTodos, setAllTodos] = useState(null);
  const [todo, setTodo] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [show, setShow] = useState(false);

  const options = [
    { value: "", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "progress", label: "Progress" },
  ];

  useEffect(() => {
    getTodos();
  }, [selectedOption]);

  const getTodos = async () => {
    try {
      let todoStatus = selectedOption?.value;
      if (todoStatus === undefined) todoStatus = "";
      const { data } = await getTodosReq(todoStatus);
      setTodos(data.data);
      setAllTodos(data.data);
    } catch (err) {
      errorToast("Error is get todos");
    }
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      console.log(search);
      const filteredTodos = todos.filter((todo) => {
        console.log(
          todo.description.toLowerCase().includes(search.toLowerCase())
        );
        return todo.description.toLowerCase().includes(search.toLowerCase());
      });
      setTodos(filteredTodos);
    } else {
      setTodos(allTodos);
    }
  };

  const changeStatusHandler = async (id) => {
    try {
      await changeStatusReq(id);
      successToast("Todo's status changed successfully");
      getTodos();
    } catch (err) {
      errorToast();
    }
  };

  const deleteHandler = async (id) => {
    try {
      if (window.confirm("Are you wanna delete this todo ?!") == true) {
        await deleteTodoReq(id);
        successToast("Todo deleted successfully");
        getTodos();
      }
    } catch (err) {
      errorToast();
    }
  };

  const handleClose = () => setShow(false);

  const handleShow = async (id) => {
    try {
      setShow(true);
      const { data } = await getSingleTodoReq(id);
      setTodo(data.data);
    } catch (err) {
      errorToast();
    }
  };

  const updateHandler = async (e) => {
    try {
      e.preventDefault();
      const updateDescription = e.target.description.value;
      const updatedTodo = {
        todoId: todo.id,
        description: updateDescription ? updateDescription : todo.description,
      };
      successToast("Todo updated successfully");
      await updateTodoReq(updatedTodo);
      handleClose();
      getTodos();
    } catch (err) {
      errorToast();
    }
  };

  return (
    <>
      <Toast />
      <div className="mt-5">
        <div className="d-flex justify-content-around m-auto col-8">
          <Search searchHandler={searchHandler} />
          <SelectStatus
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>

        <ModalComponent
          show={show}
          handleClose={handleClose}
          todo={todo}
          updateHandler={updateHandler}
        />

        <Todos
          todos={todos}
          changeStatus={changeStatusHandler}
          deleteTodo={deleteHandler}
          showModal={handleShow}
        />
        <AddTodo getTodos={getTodos} />
      </div>
    </>
  );
};

export default Todolist;

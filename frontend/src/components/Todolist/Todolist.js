import { useEffect, useState } from "react";
import Search from "./Search/Search";
import Todos from "./Todos/Todos";
import AddTodo from "./AddTodo/AddTodo";
import SelectStatus from "./SelectStatus/SelectStatus";
import Modal from "./Modal/Modal";
import {
  getTodosReq,
  changeStatusReq,
  deleteTodoReq,
  getSingleTodoReq,
} from "../../services/requestService";

const Todolist = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [todos, setTodos] = useState(null);
  const [allTodos, setAllTodos] = useState(null);
  const [todo, setTodo] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      console.log(err);
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
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const updateDescriptionHandler = async (id) => {
    console.log(id);
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTodoReq(id);
      getTodos();
    } catch (err) {
      console.log(err.message.data);
    }
  };

  const showModal = async (id) => {
    try {
      setIsOpen(true);
      const { data } = await getSingleTodoReq(id);
      setTodo(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-around m-auto col-8">
        <Search searchHandler={searchHandler} />
        <SelectStatus
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} />

      <Todos
        todos={todos}
        changeStatus={changeStatusHandler}
        updateDescription={updateDescriptionHandler}
        deleteTodo={deleteHandler}
        showModal={showModal}
      />
      <AddTodo getTodos={getTodos} />
    </div>
  );
};

export default Todolist;

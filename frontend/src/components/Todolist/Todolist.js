import Search from "./Search/Search";
import Todos from "./Todos/Todos";

const Todolist = () => {
  return (
    <div className="mt-5">
      <Search />
      <Todos />
    </div>
  );
};

export default Todolist;

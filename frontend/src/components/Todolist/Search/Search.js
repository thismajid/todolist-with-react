import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="col-6 m-auto">
      <form>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <FiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="search ..."
            aria-label="Search"
            aria-describedby="addon-wrapping"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

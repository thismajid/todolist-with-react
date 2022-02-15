import { FiSearch } from "react-icons/fi";

const Search = ({ searchHandler }) => {
  return (
    <div className="col-3 m-auto">
      <form>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <FiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
            aria-label="Search"
            aria-describedby="addon-wrapping"
            name="search"
            onChange={searchHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

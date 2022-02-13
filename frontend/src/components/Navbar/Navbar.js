import { Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = window.location;
  const registerPage = pathname === "/register" ? true : false;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/login"
                className={`${registerPage ? "" : "active"} nav-link`}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className={`${registerPage ? "active" : ""} nav-link`}
              >
                Register
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link to="/" className="nav-link">
              Todolist
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

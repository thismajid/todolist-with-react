import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todolist from "./components/Todolist/Todolist";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Redirecting from "./components/Redirecting";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(
    token && token.length > 0
  );

  const onClickLogout = (e) => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  return (
    <div className="App">
      <Navbar onClickLogout={onClickLogout} auth={isAuthenticated}></Navbar>

      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <>
              {isAuthenticated ? (
                <Redirecting to="/" />
              ) : (
                <Login {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            </>
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <>
              {isAuthenticated ? (
                <Redirecting to="/" />
              ) : (
                <Register {...props} />
              )}
            </>
          )}
        />
        <ProtectedRoute
          path="/"
          exact
          component={Todolist}
          isAuthenticated={isAuthenticated}
        />
        <Route exact path="/logout">
          <Redirect to="/" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todolist from "./components/Todolist/Todolist";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Todolist} />
      </Switch>
    </div>
  );
}

export default App;

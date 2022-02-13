import { useState } from "react";
import { loginReq } from "../../services/requestService";
import { successToast, errorToast } from "../../services/toastService";

const Login = ({ history }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await loginReq(user);
      if (data) {
        localStorage.setItem("token", data.data.token);
        successToast("Login successfully");
        setTimeout(() => {
          history.push("/");
        }, 6000);
      }
    } catch (err) {
      if (err.response.data.message === "Invalid username/password") {
        errorToast("Invalid username/password");
      } else {
        errorToast("Something went wrong ...");
      }
    }
  };

  return (
    <div className="col-4 m-auto mt-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={user.username}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <input
              type="submit"
              className="btn btn-success mt-3"
              value="Login"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

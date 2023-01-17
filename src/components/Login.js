import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login({ user, setUser, axiosInstance, location }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function submitHandler(e) {
    setError(null);
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post("/login", formData)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          console.log(res.data.user);
          localStorage.setItem("loggedIn", JSON.stringify(true));
          location !== undefined ? navigate(location.pathname) : navigate("/");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="form-inner">
      <h1>Login</h1>
      {/* {notify ? <p className="notification">Login Successful</p> : null} */}
      <form onSubmit={submitHandler}>
        {error ? (
          <p className="border text-center p-3 text-red-500 outline-none rounded-md w-full mt-2">
            {error.errors}
          </p>
        ) : null}
        <div className="form-group">
          <input
            type="username"
            name="username"
            required="required"
            id="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            required="required"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <label>Password</label>
        </div>
        <button
          className="outline text-sky-600 hover:bg-sky-600 hover:text-white text-2xl px-5 place-self-center rounded-lg h-10"
          type="submit"
          id="submitButton"
        >
          Login
        </button>

        <div className="signup_link">
          Not a member?
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;

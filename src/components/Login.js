import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login({ user, setUser, axiosInstance, location }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.user);
        localStorage.setItem("loggedIn", JSON.stringify(true));
        location !== undefined ? navigate(location.pathname) : navigate("/");
      })
      .catch((err) => {
        console.error(err)
        alert('Invalid Username or Password') /* Can be modified later when backend is modified */
      }
      );
  };

  return (
    <div className="container-md text-center" id="login_form">
      <form>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value.toLowerCase(),
              })
            }
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button id="auth_button" type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
        <p className="auth_redirect">
          Don't have an account? &nbsp;
          <Link className="redirect_link" to="/register">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

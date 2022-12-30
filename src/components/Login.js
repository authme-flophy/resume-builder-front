import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
        location !== undefined ? navigate(location.pathname) : navigate("/");
      })
      .catch((err) => console.error(err));
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
              setFormData({ ...formData, username: e.target.value })
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
        <button
          id="submit_button"
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

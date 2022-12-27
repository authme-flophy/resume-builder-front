import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.username.value = "";
    e.target.password.value = "";
  };

  return (
    <div className="container-md text-center" id="login_form">
      <form onSubmit={(e) => handleLogin(e)}>
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
        <button id="submit_button" type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

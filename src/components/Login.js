import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);

  function notifyUser() {
    setNotify((notify) => !notify);
    setTimeout(endNotification, 1000);
  }

  function submitHandler(e) {
    setError(null);
    e.preventDefault();
  }

  function endNotification() {
    setNotify((notify) => !notify);
    navigate("/Home");
  }

  return (
    <div className="form-inner">
      <h1>Login</h1>
      {notify ? (
        <p className="bg-sky-900 text-white w-full p-3 rounded-md flex flex-row justify-center items-center">
          Login Successfull
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </p>
      ) : null}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            required="required"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

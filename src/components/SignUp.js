import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.scss";

function SignUp({ user, setUser, axiosInstance }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState();
  const [second_name, setSecondName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [notification, setNotification] = useState(false);

  function handleNotification() {
    setNotification((notification) => !notification);
    setTimeout(endNotification, 1000);
  }

  function endNotification() {
    setNotification((notification) => !notification);
    navigate("/");
  }

  function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("second_name", second_name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", e.target.image.files[0]);

    axios
      .post("http://localhost:4000/register", formData)
      .then((res) => {
        if (res.ok) {
          console.log("i work");
        }
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.user);
        navigate("/");
      })
      .catch((err) => console.error(err));

    // .then((res) => {
    //   if (res.ok) {
    //     res.json().then((user) => handleNotification());
    //   } else {
    //     res.json().then((error) => setError(error));
    //   }
    // });
  }

  return (
    <div className="form-inner">
      <h1>SignUp</h1>
      {notification ? (
        <p className="bg-sky-900 transition-ease-in-out text-white w-full p-3 rounded-md flex flex-row justify-center items-center">
          signup successfull
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
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          {error ? (
            <p className="border text-center p-3 text-red-500 outline-none rounded-md w-full mt-2">
              {error.errors}
            </p>
          ) : null}
          <input
            type="text"
            min="5"
            name="firstname"
            required="required"
            autoComplete="off"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>First Name</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            min="5"
            name="secondname"
            required="required"
            autoComplete="off"
            value={second_name}
            onChange={(e) => setSecondName(e.target.value)}
          />
          <label>Second Name</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            required="required"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="username"
            required="required"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>

        <div className="mb-3">
          <label for="image" class="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="image" name="image" />
        </div>

        <div className="form-group">
          <input
            type="password"
            min="8"
            name="password"
            required="required"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label>Password</label>
        </div>

        <button
          className="outline text-sky-400 hover:bg-sky-400 hover:text-white rounded-lg p-2 "
          type="submit"
          id="submitButton"
        >
          SIGN IN
        </button>

        <div className="login_link">
          Already have an account?
          <NavLink to="/login">Login</NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

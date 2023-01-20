import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";

function SignUp({ user, setUser, axiosInstance }) {
  const [first_name, setFirstName] = useState();
  const [second_name, setSecondName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("second_name", second_name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", e.target.image.files[0]);

    axiosInstance
      .post("/register", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container-md text-center" id="signup_form">
      <form onSubmit={(e) => handleSignUp(e)}>
        <div className="mb-3">
          <label for="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="second_name" className="form-label">
            Second Name
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="second_name"
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="image" class="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="image" required />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="auth_button" type="submit" className="btn btn-primary">
          Register
        </button>
        <p className="auth_redirect">
          Already have an account? &nbsp;
          <Link className="redirect_link" to="/login">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

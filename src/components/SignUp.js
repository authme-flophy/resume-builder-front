import React, { useState } from "react";
import "./SignUp.scss";

function SignUp() {
  const [first_name, setFirstName] = useState();
  const [second_name, setSecondName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("second_name", second_name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", e.target.image.files[0]);

    fetch("http://localhost:4000/register", {
      method: "POST",
      body: formData,
    })
      .then((res) => console.log(res))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="second_name" className="form-label">
            Second Name
          </label>
          <input
            type="text"
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
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="image" class="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="image" />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="submit_button" type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;

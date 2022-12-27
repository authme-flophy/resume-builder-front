import React, { useState } from "react";
import "./SignUp.scss";

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.first_name.value = "";
    e.target.second_name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
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
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, second_name: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label for="image" class="form-label">
            Default file input example
          </label>
          <input
            className="form-control"
            type="file"
            id="image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
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
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;

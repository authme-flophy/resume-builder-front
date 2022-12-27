import React, { useState } from "react";
import "./ResumeForm.scss";

function ResumeForm() {
  // const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.first_name.value = "";
    e.target.second_name.value = "";
    e.target.email.value = "";
  };

  return (
    <div className="container-md text-center" id="resume_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Personal Information</h1>
        </div>
        <div className="mb-3">
          <label for="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            value={formData.first_name}
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
          <button className="btn btn-primary" id="submit_button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobExperience.scss";

function JobExperience() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    start_year: "",
    end_year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/position");
  };

  return (
    <div class="container-md text-center" id="experience_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Previous Employers</h1>
        </div>
        <div class="form-group">
          <label for="job_title"> Job Title</label>
          <input
            type="text"
            class="form-control"
            id="job_title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div class="form-group">
          <label for="company_name">Employer's Name</label>
          <input
            type="text"
            class="form-control"
            id="company_name"
            onChange={(e) =>
              setFormData({ ...formData, company_name: e.target.value })
            }
          />
        </div>

        <div className="row g-2">
          <div class="col-md">
            <label for="start_year">Start Year</label>
            <input
              type="number"
              class="form-control"
              id="start_year"
              onChange={(e) =>
                setFormData({ ...formData, start_year: e.target.value })
              }
            />
          </div>
          <div class="col-md">
            <label for="end_year">End Year</label>
            <input
              type="number"
              class="form-control"
              id="end_year"
              onChange={(e) =>
                setFormData({ ...formData, end_year: e.target.value })
              }
            />
          </div>
        </div>
        <button id="submit_button" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobExperience;

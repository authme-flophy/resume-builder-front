import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobExperience.scss";

function JobExperience({ axiosInstance, location }) {
  const navigate = useNavigate();

  console.log(location);

  const [jobTitle, setJobTitle] = useState();
  const [employer, setEmployer] = useState();
  const [summary, setSummary] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const resumeId = JSON.parse(localStorage.getItem("resume_id"));

    const formData = {
      title: jobTitle,
      company_name: employer,
      summary: summary,
      start_year: startYear,
      end_year: endYear,
      resume_id: resumeId,
    };

    axiosInstance
      .post("/job_experiences", formData)
      .then((res) => {
        console.log(res);
        navigate("/position");
      })
      .catch((err) => {
        console.error(err);

        setErrors(err.errors);
      });
  };

  return (
    <div class="container-md text-center" id="experience_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Previous Experience</h1>
        </div>
        <div class="form-group">
          <label for="job_title"> Job Title</label>
          <input
            type="text"
            class="form-control"
            id="job_title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="company_name">Employer's Name</label>
          <input
            type="text"
            class="form-control"
            id="company_name"
            onChange={(e) => setEmployer(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="summary">Summary of what you did</label>
          <textarea
            class="form-control"
            id="summary"
            rows="3"
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>

        <div className="row g-2">
          <div class="col-md">
            <label for="start_year">Start Year</label>
            <input
              type="number"
              class="form-control"
              id="start_year"
              onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
            />
          </div>
          <div class="col-md">
            <label for="end_year">End Year</label>
            <input
              type="number"
              class="form-control"
              id="end_year"
              onChange={(e) => setEndYear(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <button id="submit_button" type="submit" class="btn btn-primary" value='NEXT'>
          NEXT
        </button>
      </form>

      {errors
        ? errors.map((error) => (
            <h3 style={{ color: "red", fontStyle: "italic" }} key={error}>
              {error}
            </h3>
          ))
        : null}
    </div>
  );
}

export default JobExperience;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./University.scss";

function University({ user, axiosInstance }) {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [courseName, setCourseName] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const resumeId = JSON.parse(localStorage.getItem("resume_id"));

    const formData = {
      name: name,
      course_name: courseName,
      start_year: startYear,
      end_year: endYear,
      resume_id: resumeId,
    };

    axiosInstance
      .post("/schools", formData)
      .then((res) => {
        console.log(res);
        navigate("/experience");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div class="container-md text-center" id="education_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Education</h1>
        </div>
        <div class="form-group">
          <label for="school_name"> School Name</label>
          <input
            type="text"
            class="form-control"
            id="school_name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="course_name">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="course_name"
            onChange={(e) => setCourseName(e.target.value)}
          />
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
        <button id="submit_button" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default University;

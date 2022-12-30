import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./University.scss";

function University() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school_name: "",
    course_name: "",
    start_year: "",
    end_year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/experience");
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
            onChange={(e) =>
              setFormData({ ...formData, school_name: e.target.value })
            }
          />
        </div>

        <div class="form-group">
          <label for="course_name">Course Name</label>
          <input
            type="text"
            class="form-control"
            id="course_name"
            onChange={(e) =>
              setFormData({ ...formData, course_name: e.target.value })
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

export default University;

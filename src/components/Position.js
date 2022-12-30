import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Position.scss";

function Position() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/languages");
  };
  return (
    <div class="container-md text-center" id="experience_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <h1>Desired Positions</h1>
        </div>
        <div class="form-group">
          <label for="position_title"> Position title</label>
          <input
            type="text"
            class="form-control"
            id="position_title"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <button id="submit_button" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Position;

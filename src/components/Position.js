import React from "react";
import "./Position.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

function Position({ axiosInstance }) {
  const navigate = useNavigate();

  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem("user")).id;

    const formData = {
      name: name,
      user_id: userId,
    };

    axiosInstance
      .post("/positions", formData)
      .then((res) => {
        console.log(res);
        navigate("/languages");
      })
      .catch((err) => console.error(err));
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
            onChange={(e) => setName(e.target.value)}
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

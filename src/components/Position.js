import  React from "react";
import "./Position.scss";
import { useState } from "react";

function Position() {
  const [formData, setFormData] = useState({
    position_title: "",
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.position_title.value = "";
    
  };

  return (
    <div className="container-sm d-flex justify-content-center">
      <form
        className="row col-5 justify-content-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <h1>Position Form</h1>
        </div>
        <div className="mb-3">
          <label for="position_title" className="form-label">
             Position Title
          </label>
          <input
            type="text"
            className="form-control"
            id="position_title"
            value={formData.position_title}
            onChange={(e) =>
              setFormData({ ...formData, position_title: e.target.value })
            }
          />
        </div>
        
        <div className="mb-3">
          <button className="btn btn-primary">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Position;

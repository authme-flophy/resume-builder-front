import React from "react";
import  { useState } from "react";
import "./ProgrammingLanguage.scss";


function ProgrammingLanguage() {
  const [formData, setFormData] = useState({
    name: "",
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.name.value = "";
    
  };

  return (
    <div className="container-sm d-flex justify-content-center">
      <form
        className="row col-5 justify-content-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <h1>Programming Language</h1>
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
             Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name : e.target.value })
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

export default ProgrammingLanguage;

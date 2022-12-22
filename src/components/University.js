import React, { useState} from "react";

function University() {

 const[ formData, setFormData] = useState({
   school_name: "",
   course_name: "",
   start_year: "",
   end_year: "",

 });

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  e.target.school_name.value = "";
  e.target.course_name.value = "";
  e.target.start_year.value = "";
  e.target.end_year.value = "";
};

  return <div class= "container">

<form onSubmit={(e) => handleSubmit(e)}>
  <div class="form-group">
    <label for="school_name"> School Name</label>
    <input type="text" class="form-control" id="school_name" onChange={(e) =>
              setFormData({ ...formData, school_name: e.target.value })
            } /> 
  </div>

  <div class="form-group">
    <label for="course_name">Course Name</label>
    <input type="text" class="form-control" id="course_name" onChange={(e) =>
              setFormData({ ...formData, course_name: e.target.value })
            }/>
  </div>

  <div class="form-group">
    <label for="start_year">Start Year</label>
    <input type="integer" class="form-control" id="start_year" onChange={(e) =>
              setFormData({ ...formData, start_year: e.target.value })
            }/>
  </div>

  <div class="form-group">
    <label for="end_year">End Year</label>
    <input type="integer" class="form-control" id="end_year"
     onChange={(e) =>
              setFormData({ ...formData, end_year: e.target.value })
            } />
  </div>


  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>;
 
}

export default University;

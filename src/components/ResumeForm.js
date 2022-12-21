import React, { useState } from "react";
import "./ResumeForm.scss";

function ResumeForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    email: "",
    title: "",
    summary: "",
    university: "",
    programming_languages: [],
    work_experience: "",
  });

  return (
    <div className="container text-center">
      <div className="mb-3">
        <h1>Fill out your resume information</h1>
      </div>
      <div className="mb-3">
        <h3 className="mb-3">Personal Information</h3>
      </div>
      <div className="mb-3"></div>
    </div>
  );
}

export default ResumeForm;

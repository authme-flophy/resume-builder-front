import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProgrammingLanguage.scss";

function ProgrammingLanguage({ axiosInstance }) {
  const [languages, setLanguages] = useState([]);
  const languageOptions = [
    "Javascript",
    "Python",
    "Go",
    "Java",
    "Kotlin",
    "PHP",
    "C#",
    "Swift",
    "R",
    "Ruby",
    "C",
    "C++",
    "TypeScript",
    "SQL",
    "CSS",
    "Rust",
    "Perl",
    "Django",
    "Rails",
    "Postgres",
  ];

  const navigate = useNavigate();

  const handleChecked = (e) => {
    if (e.target.checked) {
      setLanguages([...languages, e.target.value]);
    } else {
      setLanguages(languages.filter((language) => language !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resumeId = JSON.parse(localStorage.getItem("resume_id"));

    const formData = new FormData();

    formData.append("languages", languages);
    console.log(languages);
    formData.append("resume_id", resumeId);

    axiosInstance
      .post("/programming_languages", formData)
      .then((res) => {
        console.log(res);
        navigate("/profile");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="languages_form">
      <form id="inner_form" onSubmit={(e) => handleSubmit(e)}>
        <div className="ericustom">
          {languageOptions.map((languageOption, index) => {
            return (
              <div class="form-check col-md" key={index}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="language"
                  value={languageOption}
                  id={languageOption}
                  onChange={(e) => handleChecked(e)}
                />
                <label class="form-check-label" for={languageOption}>
                  {languageOption}
                </label>
              </div>
            );
          })}
        </div>
        <button id="submit_button" class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProgrammingLanguage;